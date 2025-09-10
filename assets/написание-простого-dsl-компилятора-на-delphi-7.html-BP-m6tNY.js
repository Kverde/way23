import{_ as a,c as i,a as n,b as l,t as d,o as c}from"./app-DvfQ69-Y.js";const r={},p={id:"frontmatter-title",tabindex:"-1"},t={class:"header-anchor",href:"#frontmatter-title"};function v(s,e){return c(),i("div",null,[n("h1",p,[n("a",t,[n("span",null,d(s.$frontmatter.title),1)])]),e[0]||(e[0]=l(`<p>Перевод поста <a href="https://www.thedelphigeek.com/2017/11/writing-simple-dsl-compiler-with-delphi.html" target="_blank" rel="noopener noreferrer">Writing a Simple DSL Compiler with Delphi (7. AST Compiler)</a>.</p><p>Эта статья представляет собой описание компилятора AST используемого для проекта моего языка программирования. Если вы только начинаете читать эту серию, то я бы рекомендовал вам начать с <a href="http://way23.ru/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-0/" target="_blank" rel="noopener noreferrer">этого поста</a>. Как минимум вы должны прочитать предыдущий пост <a href="http://way23.ru/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-inte/" target="_blank" rel="noopener noreferrer">Intermezzo</a> так как он разъясняет некоторые части компилятора которых я не касаюсь здесь.</p><p>В каркасе моего игрушечного компилятора, компилятор (или <code>codegen</code>, как он называется внутри) — часть кода которая реализует интерфейс <code>ISimpleDSLCodegen</code>. Этот интерфейс предоставляет только одну функцию, <code>Generate</code>, которая принимает абстрактное синтаксическое дерево и преобразует его в объект, который реализует интерфейс <code>ISimpleDSLProgram</code>, который позволяет вам вызывать любую функцию скомпилированной программы по имени.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TParameters = TArray;</span>
<span class="line">  TFunctionCall = reference to function (const parameters: TParameters): integer;</span>
<span class="line">  ISimpleDSLProgram = interface [&#39;{2B93BEE7-EF20-41F4-B599-4C28131D6655}&#39;]</span>
<span class="line">    function  Call(const functionName: string; const params: TParameters;       var return: integer): boolean;</span>
<span class="line">   end;</span>
<span class="line"></span>
<span class="line">  ISimpleDSLCodegen = interface [&#39;{C359C174-E324-4709-86EF-EE61AFE3B1FD}&#39;]</span>
<span class="line">    function Generate(const ast: ISimpleDSLAST;</span>
<span class="line">      var runnable: ISimpleDSLProgram): boolean;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Компилятор по умолчанию реализован классом <code>TSimpleDSLCodegen</code> в модуле <code>SimpleDSLCompiler.Compiler</code>. Методы в этом классе в основном занимаются чтением и пониманием AST пока код, фактически, создаётся в методах в модуле <code>SimpleDSLCompiler.Compiler.Codegen</code>.</p><p>Этот компилятор создаёт программу которая является интерфейсом класса <code>TSimpleDSLProgram</code> (также находящемся в <code>SimpleDSLCompiler.Compiler</code>).</p><p>Функционирование компилятора очень похоже на компилятор представленный в Intermezzo — с одним критичным отличием. Выражения в моём игрушечном языке могут использовать параметры функций как слагаемые. Поэтому вычислитель выражений должен иметь доступ к параметрам текущей функции.</p><p>История начинается в методе <code>TSimpleDSLCodegen.Generate</code> который для каждой функции в дереве сначала компилирует тело функции (<code>CompileBlock</code>) и затем генерирует функциональную обёртку для этого тела (<code>CodegenFunction</code>).</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function TSimpleDSLCodegen.Generate(const ast: ISimpleDSLAST; var runnable:</span>
<span class="line">  ISimpleDSLProgram): boolean;</span>
<span class="line">var</span>
<span class="line">  block      : TStatement;</span>
<span class="line">  i          : integer;</span>
<span class="line">  runnableInt: ISimpleDSLProgramEx;</span>
<span class="line">begin</span>
<span class="line">  Result := false; //to keep compiler happy</span>
<span class="line">  FAST := ast;</span>
<span class="line">  runnable := TSimpleDSLProgram.Create;</span>
<span class="line">  runnableInt := runnable as ISimpleDSLProgramEx;</span>
<span class="line">  for i := 0 to ast.Functions.Count - 1 do begin</span>
<span class="line">    if not CompileBlock(ast.Functions[i].Body, block) then</span>
<span class="line">      Exit;</span>
<span class="line">    runnableInt.DeclareFunction(i, ast.Functions[i].Name,       CodegenFunction(block));</span>
<span class="line">  end;</span>
<span class="line">  Result := true;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Давайте начнём с последней функции так как она даст нам больше контекста (каламбур, как вы увидите скоро).</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  PExecContext = ^TExecContext;</span>
<span class="line">   TExecContext = record</span>
<span class="line">    Functions: TArray;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TParameters = TArray;</span>
<span class="line"></span>
<span class="line">function CodegenFunction(const block: TStatement): TFunction;</span>
<span class="line">begin</span>
<span class="line">  Result :=</span>
<span class="line">    function (execContext: PExecContext; const params: TParameters): integer</span>
<span class="line">    var</span>
<span class="line">      context: TContext;</span>
<span class="line">    begin</span>
<span class="line">      context.Exec := execContext;</span>
<span class="line">      context.Params := params;</span>
<span class="line">      context.Result := 0;</span>
<span class="line">      block(context);</span>
<span class="line">      Result := context.Result;</span>
<span class="line">    end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>CodegenFunction</code> создаёт основную обёртку в виде анонимного метода для текущей функции. Этот анонимный метод получит контекст выполнения, который позволит этой функции вызывать другие функции. Затем анонимный метод построит контекст функции который грубо соответствует стековому фрейму (<a href="https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BA%D0%B0%D0%B4%D1%80" target="_blank" rel="noopener noreferrer">stack frame</a>) производимому &quot;нормальным&quot; компилятором. Этот контекст хранит указатель на контекст выполнения и копию параметров (значений) переданных в функцию. Затем он вызывает <code>block(context)</code> для выполнения переданного блока.</p><p>Спустимся на один уровень ниже... Функция <code>TSimpleDSLCodegen.CompileBlock</code> компилирует каждое выражение в блоке вызовом <code>CompileStatement</code> и затем вызывает <code>CodegenBlock</code> для обёртки скомпилированных выражений в блок.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function CodegenBlock(const statements: TStatements): TStatement;</span>
<span class="line">begin</span>
<span class="line">  Result :=</span>
<span class="line">    procedure (var context: TContext)</span>
<span class="line">    var</span>
<span class="line">      stmt: TStatement;</span>
<span class="line">    begin</span>
<span class="line">      for stmt in statements do</span>
<span class="line">        stmt(context);</span>
<span class="line">    end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Скомпилированный код, который реализует блок, снова является анонимным методом. Он принимает контекст (передаваемый анонимным методом реализующим функцию) и просто передаёт этот же контекст во все выражения в блоке.</p><p>Это продолжается и продолжается. Большая часть кода довольна скучна и предсказуема. Например, это метод который генерирует код для оператора <code>if</code>.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function CodegenIfStatement(const condition: TExpression; const thenBlock,</span>
<span class="line">  elseBlock: TStatement): TStatement;</span>
<span class="line">begin</span>
<span class="line">  Result :=</span>
<span class="line">    procedure (var context: TContext)</span>
<span class="line">    begin</span>
<span class="line">      if condition(context) &lt;&gt; 0 then</span>
<span class="line">        thenBlock(context)</span>
<span class="line">      else</span>
<span class="line">        elseBlock(context);</span>
<span class="line">    end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Вещи становятся интереснее как только мы хотим скомпилировать слагаемое. Слагаемое может представлять константу (целое число), параметр (названный <code>variable</code> в codegen так как в будущем может быть добавлена поддержка переменных) или вызовом функции.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function TSimpleDSLCodegen.CompileTerm(const astTerm: IASTTerm;   var codeTerm: TExpression): boolean;</span>
<span class="line">var</span>
<span class="line">  termConst   : IASTTermConstant;</span>
<span class="line">  termFuncCall: IASTTermFunctionCall;</span>
<span class="line">  termVar     : IASTTermVariable;</span>
<span class="line">begin</span>
<span class="line">  Result := true;</span>
<span class="line">  if Supports(astTerm, IASTTermConstant, termConst) then</span>
<span class="line">    codeTerm := CodegenConstant(termConst.Value)</span>
<span class="line">  else if Supports(astTerm, IASTTermVariable, termVar) then</span>
<span class="line">    codeTerm := CodegenVariable(termVar.VariableIdx)</span>
<span class="line">  else if Supports(astTerm, IASTTermFunctionCall, termFuncCall) then</span>
<span class="line">    Result := CompileFunctionCall(termFuncCall, codeTerm)</span>
<span class="line">  else</span>
<span class="line">    Result := SetError(&#39;*** Unexpected term&#39;);</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Компиляция константы тривиальна. Нам просто нужна функция возвращающая эту константу.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function CodegenConstant(value: integer): TExpression;</span>
<span class="line">begin</span>
<span class="line">  Result :=</span>
<span class="line">    function (var context: TContext): integer</span>
<span class="line">    begin</span>
<span class="line">      Result := value;</span>
<span class="line">    end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Доступ к параметрам немного сложнее. AST содержит индекс этого параметра и мы просто должны применить его к свойству <code>Params</code> контекста.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function CodegenVariable(varIndex: integer): TExpression;</span>
<span class="line">begin</span>
<span class="line">  Result :=</span>
<span class="line">    function (var context: TContext): integer</span>
<span class="line">    begin</span>
<span class="line">      Result := context.Params[varIndex];</span>
<span class="line">    end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Генерация вызова функции немного более сложная. Она должна настроить массив параметров который будет передан в вызов функции, найти корректную функцию через контекст запуска и затем вызывать функцию.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function CodegenFunctionCall(funcIndex: integer;   const params: TFuncCallParams): TExpression;</span>
<span class="line">begin</span>
<span class="line">  Result :=</span>
<span class="line">    function (var context: TContext): integer</span>
<span class="line">    var</span>
<span class="line">      funcParams: TParameters;</span>
<span class="line">      iParam    : Integer;</span>
<span class="line">    begin</span>
<span class="line">      SetLength(funcParams, Length(params));</span>
<span class="line">      for iParam := Low(params) to High(params) do</span>
<span class="line">        funcParams[iParam] := params[iParam](context);</span>
<span class="line">      Result := context.Exec.Functions[funcIndex](context.Exec, funcParams);</span>
<span class="line">    end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В конце компилятор производит большой анонимный метод, использующий внутри другие анонимные методы, и который при вызове возвращает результат.</p><p>Например, эта минимальная программа ...</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">inc(i) { return i+1 }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>... генерирует что-то похожее на следующее чудовище. В реальности код даже более странный так как он должен обрабатывать захваченные переменные.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function (execContext: PExecContext; const params: TParameters): integer</span>
<span class="line">var</span>
<span class="line">  context: TContext;</span>
<span class="line">begin</span>
<span class="line">  context.Exec := execContext;</span>
<span class="line">  context.Params := params;</span>
<span class="line">  context.Result := 0;</span>
<span class="line"> (procedure (var context: TContext)</span>
<span class="line">  var</span>
<span class="line">    stmt: TStatement;</span>
<span class="line">  begin</span>
<span class="line">    for stmt in [</span>
<span class="line">                procedure (var context: TContext)</span>
<span class="line">                begin</span>
<span class="line">                  context.Result :=</span>
<span class="line">                   (function (var context: TContext): integer</span>
<span class="line">                    begin</span>
<span class="line">                      Result :=</span>
<span class="line">                       (function (var context: TContext): integer</span>
<span class="line">                        begin</span>
<span class="line">                          Result := context.Params[0];</span>
<span class="line">                        end)(context)</span>
<span class="line">                        +</span>
<span class="line">                       (function (var context: TContext): integer</span>
<span class="line">                        begin</span>
<span class="line">                          Result := 1;</span>
<span class="line">                        end)(context);</span>
<span class="line">                    end)(context);</span>
<span class="line">                end</span>
<span class="line">                ]</span>
<span class="line">    do</span>
<span class="line">      stmt(context);</span>
<span class="line">  end)(context);</span>
<span class="line">  Result := context.Result;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Он определённо не для слабонервных, но вы не должны смотреть скомпилированный код (конечно, исключая случая отладки компилятора).</p><p>Вы можете удивится скорости этого кода. Должен признать — не очень быстро. Я дам вам более точные цифры в следующей части этой серии которая будет описывать интерпретатор для этого языка.</p>`,32))])}const o=a(r,[["render",v]]),u=JSON.parse('{"path":"/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-7.html","title":"Написание простого DSL компилятора на Delphi (7. Компилятор AST)","lang":"ru-RU","frontmatter":{"title":"Написание простого DSL компилятора на Delphi (7. Компилятор AST)","date":"2019-06-11","categories":["Delphi"],"tags":["Delphi","перевод","компиляторы"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"написание-простого-dsl-компилятора-на-delphi-7.md"}');export{o as comp,u as data};
