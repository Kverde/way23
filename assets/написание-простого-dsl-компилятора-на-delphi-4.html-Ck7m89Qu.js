import{_ as i,c as a,a as n,b as l,t as d,o as c}from"./app-DvfQ69-Y.js";const r={},p={id:"frontmatter-title",tabindex:"-1"},t={class:"header-anchor",href:"#frontmatter-title"};function o(s,e){return c(),a("div",null,[n("h1",p,[n("a",t,[n("span",null,d(s.$frontmatter.title),1)])]),e[0]||(e[0]=l(`<p>Перевод поста <a href="https://www.thedelphigeek.com/2017/09/writing-simple-dsl-compiler-with-delphi_29.html" target="_blank" rel="noopener noreferrer">Writing a Simple DSL Compiler with Delphi (4. Parser)</a>.</p><p>Эта статья представляет собой описание парсера используемого для моего игрушечного языка программирования. Если вы только начинаете читать эту серию, то я бы рекомендовал вам начать с <a href="http://way23.ru/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-0/" target="_blank" rel="noopener noreferrer">этого поста</a>.</p><p>Пожалуйста, имейте в виду, что эта статья описывают начальную реализацию парсера. Если вы хотите просматривать код во время чтения статьи, убедитесь, что вы переключились на ветку <a href="https://github.com/gabr42/SimpleDSLCompiler/tree/dsl_v1" target="_blank" rel="noopener noreferrer">dsl_v1</a>.</p><p>После перерыва я вернулся к серии про мой &quot;игрушечный компилятор&quot;. Сейчас я опишу работу парсера — части кода которая читает входной поток (обычно в форме <a href="http://way23.ru/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-3/" target="_blank" rel="noopener noreferrer">токенов</a>) и генерирует внутреннее представление программы (в моём случае <a href="http://way23.ru/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-2/" target="_blank" rel="noopener noreferrer">абстрактное синтаксическое дерево</a>).</p><p>Цель моего проекта была в изучении шагов компиляции и парсер был просто обязательным злом с которым я должен был иметь дело. Вот почему он написан в довольно примитивной форме, без использования улучшений как <a href="http://journal.stuffwithstuff.com/2011/03/19/pratt-parsers-expression-parsing-made-easy/" target="_blank" rel="noopener noreferrer">Pratt parser</a>.</p><p>Мой парсер представлен как очень простой интерфейс. Он будет принимать код для разбора (как строку), ссылку на токинизатор которые должен использоваться для чтения входного потока и ссылку на корневой элемент результирующего AST. Функция вернёт False если разбор не удастся, в этом случае вызывающая сторона может преобразовать интерфейс парсера к <code>ISimpleDSLErrorInfo</code> для получения большей информации об ошибке.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  ISimpleDSLParser = interface [&#39;{73F3CBB3-3DEF-4573-B079-7EFB00631560}&#39;]</span>
<span class="line">    function Parse(const code: string; const tokenizer: ISimpleDSLTokenizer;</span>
<span class="line">      const ast: ISimpleDSLAST): boolean;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Так как программа на моём языке содержит только функции, то реализация функции <code>Parse</code> очень простая. Она заполняет несколько полей чтобы любая часть парсера имела доступ до соответствующей информации, инициализирует буфер предварительного просмотра (<code>FLookaheadIdent</code>) и разбирает функцию за функцией пока разбор не будет ошибки или токинезатор не сообщит что он достиг конца кода.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function TSimpleDSLParser.Parse(const code: string;   const tokenizer: ISimpleDSLTokenizer;</span>
<span class="line">  const ast: ISimpleDSLAST): boolean;</span>
<span class="line">begin</span>
<span class="line">  Result := false;</span>
<span class="line">  FTokenizer := tokenizer;</span>
<span class="line">  FAST := ast;</span>
<span class="line">  FLookaheadIdent := #0;</span>
<span class="line"></span>
<span class="line">  tokenizer.Initialize(code);</span>
<span class="line">  while not tokenizer.IsAtEnd do</span>
<span class="line">    if not ParseFunction then</span>
<span class="line">      Exit;</span>
<span class="line"></span>
<span class="line">  Result := true;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Я не собираюсь показывать весь код парсера в этой короткой статье, только метод <code>ParseFunction</code>. Он ожидает найти идентификатор (название функции), с последующей левой круглой скобкой, с последующим, возможно пустым, списком разделённым запятыми идентификаторов (параметры функции), с последующей круглой закрывающейся скобкой и последующим блоком (тело функции).</p><p><code>ParseFunction</code> сначала берет идентификатор (название функции). Затем создаёт запись в глобальной таблице функций потому что она может нам понадобится в других частях парсера если функция рекурсивно вызывает себя. По этой же причине она также будет сохранять интерфейс элемента AST функции в <code>FContext.CurrentFunc</code>.</p><p>Затем она проверяет токен <code>tkLeftParen</code>. Если он присутствует, она войдёт в цикл с поиском идентификаторов (названий параметров) либо закрывающей скобки (конец списка параметров) и сохранит все имена параметров в AST (<code>func.ParamNames.Add</code>).</p><p>Если всё хорошо, она вызовет <code>ParseBlock</code> для разбора тела функции и сохранит результат в AST (<code>func.Body := block</code>).</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function TSimpleDSLParser.ParseFunction: boolean;</span>
<span class="line">var</span>
<span class="line">  block   : IASTBlock;</span>
<span class="line">  expected: TTokenKinds;</span>
<span class="line">  func    : IASTFunction;</span>
<span class="line">  funcName: string;</span>
<span class="line">  ident   : string;</span>
<span class="line">  token   : TTokenKind;</span>
<span class="line">begin</span>
<span class="line">  Result := false;</span>
<span class="line"></span>
<span class="line">  /// function = identifier &quot;(&quot; [ identifier { &quot;,&quot; identifier } ] &quot;)&quot; block</span>
<span class="line"></span>
<span class="line">  // function name</span>
<span class="line">  if not FetchToken([tkIdent], funcName, token) then</span>
<span class="line">    Exit(token = tkEOF);</span>
<span class="line"></span>
<span class="line">  func := AST.CreateFunction;</span>
<span class="line">  func.Name := funcName;</span>
<span class="line"></span>
<span class="line">  // we might need this function in the global table for recursive calls</span>
<span class="line">  AST.Functions.Add(func);</span>
<span class="line"></span>
<span class="line">  FContext.CurrentFunc := func;</span>
<span class="line">  try</span>
<span class="line"></span>
<span class="line">    // &quot;(&quot;</span>
<span class="line">    if not FetchToken([tkLeftParen]) then</span>
<span class="line">      Exit;</span>
<span class="line"></span>
<span class="line">    // parameter list, including &quot;)&quot;</span>
<span class="line">    expected := [tkIdent, tkRightParen];</span>
<span class="line">    repeat</span>
<span class="line">      if not FetchToken(expected, ident, token) then</span>
<span class="line">        Exit;</span>
<span class="line">      if token = tkRightParen then</span>
<span class="line">        break //repeat</span>
<span class="line">      else if token = tkIdent then begin</span>
<span class="line">        func.ParamNames.Add(ident);</span>
<span class="line">        expected := expected - [tkIdent] + [tkComma, tkRightParen];</span>
<span class="line">      end</span>
<span class="line">      else if token = tkComma then</span>
<span class="line">        expected := expected + [tkIdent] - [tkComma, tkRightParen]</span>
<span class="line">      else begin</span>
<span class="line">        LastError := &#39;Internal error in ParseFunction&#39;;</span>
<span class="line">        Exit;</span>
<span class="line">      end;</span>
<span class="line">    until false;</span>
<span class="line"></span>
<span class="line">    // function body</span>
<span class="line">    if not ParseBlock(block) then</span>
<span class="line">      Exit;</span>
<span class="line"></span>
<span class="line">    func.Body := block;</span>
<span class="line">    Result := true;</span>
<span class="line">  finally</span>
<span class="line">    FContext.CurrentFunc := nil;</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Токены всегда выбираются функцией <code>FetchToken</code> которая принимает список допустимых токенов, пропуская все пробелы и возвращает найденную пару токен\\идентификатор (или набор информации об ошибке включая положение в коде если встретился ошибочный токен).</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function TSimpleDSLParser.FetchToken(allowed: TTokenKinds; var ident: string;</span>
<span class="line">  var token: TTokenKind): boolean;</span>
<span class="line">var</span>
<span class="line">  loc: TPoint;</span>
<span class="line">begin</span>
<span class="line">  Result := false;</span>
<span class="line">  while GetToken(token, ident) do</span>
<span class="line">    if token in allowed then</span>
<span class="line">      Exit(true)</span>
<span class="line">    else if token = tkWhitespace then</span>
<span class="line">      // do nothing</span>
<span class="line">    else begin</span>
<span class="line">      loc := FTokenizer.CurrentLocation;</span>
<span class="line">      LastError := Format(&#39;Invalid syntax in line %d, character %d&#39;,         [loc.X, loc.Y]);</span>
<span class="line">      Exit;</span>
<span class="line">    end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Так же как токинезатор, парсер использует подход &quot;помести назад&quot; (push back). Когда он обнаруживает что прочитал лишний токен, он может поместить его обратно вызовом <code>PushBack</code>. Функция <code>GetToken</code> сначала смотрит в этот буфер и вызывает <code>tokenizer.GetToken</code> если буфер пустой.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TSimpleDSLParser.PushBack(token: TTokenKind; const ident: string);</span>
<span class="line">begin</span>
<span class="line">  Assert(FLookaheadIdent = #0, &#39;TSimpleDSLParser: Lookahead buffer is not empty&#39;);</span>
<span class="line">  FLookaheadToken := token;</span>
<span class="line">  FLookaheadIdent := ident;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function TSimpleDSLParser.GetToken(var token: TTokenKind; var ident: string): boolean;</span>
<span class="line">begin</span>
<span class="line">  if FLookaheadIdent &lt;&gt; #0 then begin</span>
<span class="line">    token := FLookaheadToken;</span>
<span class="line">    ident := FLookaheadIdent;</span>
<span class="line">    FLookaheadIdent := #0;</span>
<span class="line">    Result := true;</span>
<span class="line">  end</span>
<span class="line">  else</span>
<span class="line">    Result := FTokenizer.GetToken(token, ident);</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Как вы можете видеть, парсер действительно очень скучный кусок кода, следующий подходу &quot;это ожидаемый токен, какой следующий?&quot;. Конечно, жизнь становится сложнее когда имеешь дело в более сложным синтаксисом, в котором парсер иногда не может точно решить по какому пути следовать и должен пробовать несколько вариантов. Но это тема для отдельного поста.</p>`,19))])}const u=i(r,[["render",o]]),m=JSON.parse('{"path":"/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-4.html","title":"Написание простого DSL компилятора на Delphi (4. Парсер)","lang":"ru-RU","frontmatter":{"title":"Написание простого DSL компилятора на Delphi (4. Парсер)","date":"2019-06-07","categories":["Delphi"],"tags":["Delphi","перевод","компиляторы"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"написание-простого-dsl-компилятора-на-delphi-4.md"}');export{u as comp,m as data};
