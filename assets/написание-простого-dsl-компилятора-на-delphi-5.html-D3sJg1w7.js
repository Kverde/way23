import{_ as i,c as a,a as e,b as l,t as r,o as d}from"./app-DvfQ69-Y.js";const p={},c={id:"frontmatter-title",tabindex:"-1"},o={class:"header-anchor",href:"#frontmatter-title"};function t(s,n){return d(),a("div",null,[e("h1",c,[e("a",o,[e("span",null,r(s.$frontmatter.title),1)])]),n[0]||(n[0]=l(`<p>Перевод поста <a href="https://www.thedelphigeek.com/2017/10/writing-simple-dsl-compiler-with-delphi.html" target="_blank" rel="noopener noreferrer">Writing a Simple DSL Compiler with Delphi (5. Framework)</a>.</p><p>Эта статья представляет собой описание фреймворка используемого для проекта моего языка программирования. Если вы только начинаете читать эту серию, то я бы рекомендовал вам начать с <a href="http://way23.ru/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-0/" target="_blank" rel="noopener noreferrer">этого поста</a>.</p><p>Сейчас у нас есть работающий <a href="http://way23.ru/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-4/" target="_blank" rel="noopener noreferrer">парсер</a> который преобразует строку кода в <a href="http://way23.ru/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-2/" target="_blank" rel="noopener noreferrer">абстрактное синтаксическое дерево</a>. Однако ещё не время писать о самой интересной части — компиляторе — сначала мы должны сделать интеграцию и тестирование.</p><p>Мой игрушечный компилятор использует очень простой фреймворк доступ к которому производится через интерфейс <code>ISimpleDSLCompiler</code> (модуль <code>SimpleDSLCompiler</code>). Уместная часть интерфейса показана ниже:</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  ISimpleDSLCompiler = interface [&#39;{7CF78EC7-023B-4571-B310-42873921B0BC}&#39;]</span>
<span class="line">    function  Codegen: boolean;</span>
<span class="line">    function  Compile(const code: string): boolean;</span>
<span class="line">    function  Parse(const code: string): boolean;</span>
<span class="line">    property AST: ISimpleDSLAST read GetAST;</span>
<span class="line">    property Code: ISimpleDSLProgram read GetCode;</span>
<span class="line">    property ASTFactory: TSimpleDSLASTFactory       read GetASTFactory write SetASTFactory;</span>
<span class="line">    property CodegenFactory: TSimpleDSLCodegenFactory       read GetCodegenFactory write SetCodegenFactory;</span>
<span class="line">    property ParserFactory: TSimpleDSLParserFactory       read GetParserFactory write SetParserFactory;</span>
<span class="line">    property TokenizerFactory: TSimpleDSLTokenizerFactory       read GetTokenizerFactory write SetTokenizerFactory;</span>
<span class="line">   end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Фреймворк представляет функции для разбора входных данных (<code>Parse</code>), генерации исполняемого кода (<code>Codegen</code>) и оба эти действия в один шаг (<code>Compile</code>), но он понятия не имеет как это делать. Вся функциональность реализована снаружи — через токинизатор, парсер и движок генерации кода что который создаётся в фабричном методе (<code>TokenizerFactory</code>).</p><p>Чтобы сделать конфигурацию простой, <code>TSimpleDSLCompiler.Create</code> устанавливает фабрики по умолчанию, создавая типичные классы движков. Если вы хотите подключить свою собственную реализацию отдельного шага, вы можете сделать это установив подходящее свойство <code>XXXFactory</code> перед вызовом любой функции этого интерфейса. Мы будем использовать эту возможность для реализации &quot;AST Dumper&quot; в следующей части этого блога.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">constructor TSimpleDSLCompiler.Create;</span>
<span class="line">begin</span>
<span class="line">  inherited Create;</span>
<span class="line">  ASTFactory := CreateSimpleDSLAST;</span>
<span class="line">  CodegenFactory := CreateSimpleDSLCodegen;</span>
<span class="line">  ParserFactory := CreateSimpleDSLParser;</span>
<span class="line">  TokenizerFactory := CreateSimpleDSLTokenizer;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Давайте быстро взглянем на все три функции API. Самая важная — <code>Compile</code>, не делает ничего кроме вызова парсера и (если обрабатываемый код корректен) генератора кода. Здесь нет ничего особенного.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function TSimpleDSLCompiler.Compile(const code: string): boolean;</span>
<span class="line">begin</span>
<span class="line">  Result := Parse(code);</span>
<span class="line">  if Result then</span>
<span class="line">    Result := Codegen;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Вторая — <code>Parse</code>, создаёт движки парсера и токинезатора, подготавливает AST (<code>FAST</code>) и вызывает метод парсера <code>Parse</code>. Большинство из этого просто обвязка, и вся реальная работа делается в <code>parser.Parse</code>.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function TSimpleDSLCompiler.Parse(const code: string): boolean;</span>
<span class="line">var</span>
<span class="line">  parser   : ISimpleDSLParser;</span>
<span class="line">  tokenizer: ISimpleDSLTokenizer;</span>
<span class="line">begin</span>
<span class="line">  LastError := &#39;&#39;;</span>
<span class="line">  parser := ParserFactory();</span>
<span class="line">  tokenizer := TokenizerFactory();</span>
<span class="line">  FAST := ASTFactory();</span>
<span class="line">  Result := parser.Parse(code, tokenizer, FAST);</span>
<span class="line">  if not Result then begin</span>
<span class="line">    FAST := nil;</span>
<span class="line">    LastError := (parser as ISimpleDSLErrorInfo).ErrorInfo;</span>
<span class="line">  end</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Последний — <code>Codegen</code> такой же простой. После нескольких проверок он создаёт движок генерации кода и вызывает его метод <code>Generate</code> передавая в него AST. Мы не рассматривали генератор кода, так что пока достаточно сказать, что генератор кода предоставляет одну функцию — <code>Generate</code> которая конвертирует <code>ISimpleDSLAST</code> в <code>ISimpleDSLProgram</code>.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function TSimpleDSLCompiler.Codegen: boolean;</span>
<span class="line">var</span>
<span class="line">  codegen  : ISimpleDSLCodegen;</span>
<span class="line">begin</span>
<span class="line">  LastError := &#39;&#39;;</span>
<span class="line">  if not assigned(FAST) then</span>
<span class="line">    Exit(SetError(&#39;Nothing to do&#39;))</span>
<span class="line">  else begin</span>
<span class="line">    codegen := CodegenFactory();</span>
<span class="line">    Result := codegen.Generate(FAST, FCode);</span>
<span class="line">    if not Result then begin</span>
<span class="line">      FCode := nil;</span>
<span class="line">      LastError := (codegen as ISimpleDSLErrorInfo).ErrorInfo;</span>
<span class="line">    end;</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Всё это позволяет нам очень просто вызывать компилятор:</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">compiler := CreateSimpleDSLCompiler;</span>
<span class="line">if not compiler.Compile(CMultiProcCode) then</span>
<span class="line">  Writeln(&#39;Compilation/codegen error: &#39; +     (compiler as ISimpleDSLErrorInfo).ErrorInfo); </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В следующей части мы увидим как можно сохранить сгенерированное AST в текстовую форму заменой <code>CodegenFactory</code>.</p>`,17))])}const m=i(p,[["render",t]]),v=JSON.parse('{"path":"/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-5.html","title":"Написание простого DSL компилятора на Delphi (5. Фреймворк)","lang":"ru-RU","frontmatter":{"title":"Написание простого DSL компилятора на Delphi (5. Фреймворк)","date":"2019-06-08","categories":["Delphi"],"tags":["Delphi","перевод","компиляторы"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"написание-простого-dsl-компилятора-на-delphi-5.md"}');export{m as comp,v as data};
