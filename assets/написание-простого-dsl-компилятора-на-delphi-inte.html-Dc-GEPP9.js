import{_ as a,c as i,a as n,b as l,t as d,o as p}from"./app-DvfQ69-Y.js";const c={},r={id:"frontmatter-title",tabindex:"-1"},t={class:"header-anchor",href:"#frontmatter-title"};function v(e,s){return p(),i("div",null,[n("h1",r,[n("a",t,[n("span",null,d(e.$frontmatter.title),1)])]),s[0]||(s[0]=l(`<p>Перевод поста <a href="https://www.thedelphigeek.com/2017/10/writing-simple-dsl-compiler-with-delphi_17.html" target="_blank" rel="noopener noreferrer">Writing a Simple DSL Compiler with Delphi (Intermezzo)</a>.</p><p>Когда я подготавливал статью про компилятор для моего <a href="http://way23.ru/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-0/" target="_blank" rel="noopener noreferrer">игрушечного языкового проекта</a>, я обнаружил что концепцию обёртки целой программы в связку анонимных функций (что делает компилятор) чрезвычайно сложна для объяснения. Поэтому я подготовил упрошенную версию компилятора, написанную для очень упрошенного языка... а затем я так и не смог остановится и добавил AST, пакрсер и токинезатор.</p><p>Результатом всего этого является программа <a href="https://github.com/gabr42/SimpleDSLCompiler/blob/master/introduction.dpr" target="_blank" rel="noopener noreferrer">introduction.dpr</a>, автономная программа которая содержит полностью язык (очень тривиальный) вместе с полной документацией, написанная в стиле <a href="https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%BC%D0%BE%D1%82%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5" target="_blank" rel="noopener noreferrer">Грамотного программирования</a>. Упрощено — вы можете читать её сверху вниз как историю.</p><p>В качестве intermezzo и для упрощения моего объяснения компилятора, я опишу эту программу здесь полностью, отформатировав её как пост в блог.</p><h2 id="introduction-dpr" tabindex="-1"><a class="header-anchor" href="#introduction-dpr"><span>introduction.dpr</span></a></h2><p>Эта программа является мягким введением в тему &quot;compiler-compiler&quot; (программ которые генерируют компиляторы или их части). Она написана в стиле Грамотного программирования и предназначена для чтения от начала до конца.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">program introduction;</span>
<span class="line">{$APPTYPE CONSOLE}</span>
<span class="line">{$R *.res}</span>
<span class="line">uses</span>
<span class="line">  System.SysUtils,</span>
<span class="line">  System.Classes,</span>
<span class="line">  System.Character,</span>
<span class="line"></span>
<span class="line">  System.Generics.Collections;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Наша задача: мы хотим вычислять выражения в форме</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">   number1 + number2 + ... + numberN</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Все числа целые и позитивные, только один оператор — сложение, переполнение игнорируется.</p><p>Формально, мы можем описать нашу программу следующей грамматикой</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">S → Term</span>
<span class="line">Term → number</span>
<span class="line">Term → Term &#39;+&#39; Term</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Пробельные символы игнорируются парсером и следовательно не являются частью грамматики.</p><p>Мы начнём с очень простого AST который будет хранить разобранную версию программы</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TTerm = class abstract</span>
<span class="line">  end; </span>
<span class="line"></span>
<span class="line">  TAST = TTerm;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>На верху нашего дерева находится &#39;term&#39; (слагаемое). <em>Слагаемое</em> может быть либо <em>константой</em> либо <em>сложением</em>.</p><p><em>Константа</em>, как и можно ожидать, содержит целочисленное значение.</p><p>Здесь мы непоследовательны — язык позволяет только позитивные числа, но AST более общее и допускает негативные числа. Мы будем просто игнорировать это.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">  TConstant = class(TTerm)</span>
<span class="line">  strict private</span>
<span class="line">    FValue: integer;</span>
<span class="line">  public</span>
<span class="line">    constructor Create(AValue: integer);</span>
<span class="line">    property Value: integer read FValue write FValue;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Сложение</em> — бинарная операция над двумя <em>слагаемыми</em> (левым и правым).</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">  TAddition = class(TTerm)</span>
<span class="line">  strict private</span>
<span class="line">    FTerm1: TTerm;</span>
<span class="line">    FTerm2: TTerm;</span>
<span class="line">  public</span>
<span class="line">    constructor Create(ATerm1, ATerm2: TTerm);</span>
<span class="line">    destructor  Destroy; override;</span>
<span class="line">    property Term1: TTerm read FTerm1 write FTerm1;</span>
<span class="line">    property Term2: TTerm read FTerm2 write FTerm2;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">constructor TConstant.Create(AValue: integer);</span>
<span class="line">begin</span>
<span class="line">  inherited Create;</span>
<span class="line">  FValue := AValue;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">constructor TAddition.Create(ATerm1, ATerm2: TTerm);</span>
<span class="line">begin</span>
<span class="line">  inherited Create;</span>
<span class="line">  FTerm1 := ATerm1;</span>
<span class="line">  FTerm2 := ATerm2;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Объект <code>TAddition</code> является владельцем своих дочерних объектов.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">destructor TAddition.Destroy;</span>
<span class="line">begin</span>
<span class="line">  FreeAndNil(FTerm1);</span>
<span class="line">  FreeAndNil(FTerm2);</span>
<span class="line">  inherited;</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Следующая функция строит AST из массива чисел. Владелец отвечает за уничтожение полученного AST.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function CreateAST(const values: TArray): TAST;</span>
<span class="line">var</span>
<span class="line">  iValue: integer;</span>
<span class="line">begin</span>
<span class="line">  if Length(values) = 0 then</span>
<span class="line"></span>
<span class="line">    Exit(nil);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Мы будем создавать <em>слагаемые</em> из массив в начиная с конца к началу и использовать промежуточные результаты как слагаемые в следующих слагаемых.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">  Result := TConstant.Create(values[High(values)]);</span>
<span class="line"></span>
<span class="line">  for iValue := High(values) - 1 downto Low(values) do</span>
<span class="line">    Result := TAddition.Create(TConstant.Create(values[iValue]), Result);</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Вызов <code>CreateAST([1, 2, 3])</code> создаст следующее AST с тремя узлами:</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">TAddition</span>
<span class="line">   Term1 = TConstant</span>
<span class="line">           Value = 1</span>
<span class="line">   Term2 = TAddition</span>
<span class="line">           Term1 = TConstant</span>
<span class="line">                   Value = 2</span>
<span class="line">           Term2 = TConstant</span>
<span class="line">                   Value = 3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Давайте сделаем из этого тест.</p><p>Сначала, несколько вспомогательных функций, которые одновременно проверяют и преобразовывают тип.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function IsConstant(term: TTerm; out add: TConstant): boolean;</span>
<span class="line">begin</span>
<span class="line">  Result := term is TConstant;</span>
<span class="line">  if Result then</span>
<span class="line">    add := TConstant(term);</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function IsAddition(term: TTerm; out add: TAddition): boolean;</span>
<span class="line">begin</span>
<span class="line">  Result := term is TAddition;</span>
<span class="line">  if Result then</span>
<span class="line">    add := TAddition(term);</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>И теперь реальный тест.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TestCreateAST;</span>
<span class="line">var</span>
<span class="line">  add1  : TAddition;</span>
<span class="line">  add2  : TAddition;</span>
<span class="line">  ast   : TAST;</span>
<span class="line">  const1: TConstant;</span>
<span class="line">  const2: TConstant;</span>
<span class="line">  const3: TConstant;</span>
<span class="line">begin</span>
<span class="line">  ast := CreateAST([1, 2, 3]);</span>
<span class="line">  try</span>
<span class="line">    if assigned(ast)</span>
<span class="line">       and IsAddition(ast, add1)</span>
<span class="line">       and IsConstant(add1.Term1, const1) and (const1.Value = 1)</span>
<span class="line">       and IsAddition(add1.Term2, add2)</span>
<span class="line">       and IsConstant(add2.Term1, const2) and (const2.Value = 2)</span>
<span class="line">       and IsConstant(add2.Term2, const3) and (const3.Value = 3)</span>
<span class="line">    then</span>
<span class="line">      // everything is fine</span>
<span class="line">    else</span>
<span class="line">      raise Exception.Create(&#39;CreateAST is not working correctly!&#39;);</span>
<span class="line">  finally FreeAndNil(ast); end;</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Мы напишем просто парсер который создаст AST из выражения в форме <code>number1 + number2 + ... numberN</code>.</p><p>Наш &quot;язык&quot; имеет только два токена: &#39;number&#39; (число) и &#39;addition&#39; (сложение). Пробельные символы не важны будут игнорироваться токинезатором (лексическим анализатором). Все не распознанные символы будут возвращать токен &#39;unknown&#39;.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TTokenKind = (tkNumber, tkAddition, tkUnknown);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Больше информации про токены:</p><ul><li>tkNumber — &quot;\\d+&quot;</li><li>tkAddition — &quot;+&quot;</li><li>&quot;\\s+&quot; — пропускаются</li><li>tkUnknown — принимает всё остальное: &quot;[^\\d+\\s]&quot;</li></ul><p>Токинезатор и парсер нуждаются только в следующей информации:</p><ul><li>Входная строка.</li><li>Текущая позиция.</li></ul><p>Класс <code>TStringStream</code> обеспечивает оба эти пункта так что мы будем использовать его.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">  TParserState = TStringStream;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Единственная функция токинезатора возвращает следующий токен и его значение как параметры с модификатором <code>var</code> и возвращает <code>True</code> если пара токен\\значение была возвращена и <code>False</code> если достигнут конец потока.</p><p>Эта реализация очень проста, но одновременно крайне неоптимизирована.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function GetToken(state: TParserState; var token: TTokenKind; var value: string): boolean;</span>
<span class="line">var</span>
<span class="line">  nextChar: string;</span>
<span class="line">  position: int64;</span>
<span class="line">begin</span>
<span class="line">  repeat</span>
<span class="line">    nextChar := state.ReadString(1);</span>
<span class="line">    Result := (nextChar &lt;&gt; &#39;&#39;);</span>
<span class="line">    // Ignore whitespace</span>
<span class="line">  until (not Result) or (not nextChar[1].IsWhiteSpace);</span>
<span class="line"></span>
<span class="line">  if Result then begin</span>
<span class="line">    value := nextChar[1];</span>
<span class="line"></span>
<span class="line">    // Addition</span>
<span class="line">    if value = &#39;+&#39; then</span>
<span class="line">      token := tkAddition</span>
<span class="line"></span>
<span class="line">    // Number</span>
<span class="line">    else if value[1].IsNumber then begin</span>
<span class="line">      token := tkNumber;</span>
<span class="line">      repeat</span>
<span class="line">        position := state.Position;</span>
<span class="line">        nextChar := state.ReadString(1);</span>
<span class="line"></span>
<span class="line">        // End of stream, stop</span>
<span class="line">        if nextChar = &#39;&#39; then</span>
<span class="line">          break //repeat</span>
<span class="line"></span>
<span class="line">        // Another number, append</span>
<span class="line">        else if nextChar[1].IsNumber then</span>
<span class="line">          value := value + nextChar[1]</span>
<span class="line"></span>
<span class="line">        // Read too far, retract</span>
<span class="line">        else begin</span>
<span class="line">          state.Position := position;</span>
<span class="line">          break; //repeat</span>
<span class="line">        end;</span>
<span class="line">      until false;</span>
<span class="line">    end</span>
<span class="line"></span>
<span class="line">    // Unexpected input</span>
<span class="line">    else</span>
<span class="line">      token := tkUnknown;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Необходимо несколько тестов для токинезатора..</p><p><code>ExpectFail(state)</code> вызывает <code>GetToken</code> и ожидает что он вернёт <code>False</code>.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure ExpectFail(state: TParserState);</span>
<span class="line">var</span>
<span class="line">  token: TTokenKind;</span>
<span class="line">  value: string;</span>
<span class="line">begin</span>
<span class="line">  if GetToken(state, token, value) then</span>
<span class="line">    raise Exception.Create(&#39;ExpectFail failed&#39;);</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Expect(State, token, value)</code> вызывает <code>GetNextToken</code> и ожидает что он вернёт <code>True</code> и те же токен/значение которые переданы в параметрах.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure Expect(state: TParserState; expectedToken: TTokenKind;   expectedValue: string);</span>
<span class="line">var</span>
<span class="line">  token: TTokenKind;</span>
<span class="line">  value: string;</span>
<span class="line">begin</span>
<span class="line">  if not GetToken(state, token, value) then</span>
<span class="line">    raise Exception.Create(&#39;Expect failed&#39;)</span>
<span class="line"></span>
<span class="line">  else if token &lt;&gt; expectedToken then</span>
<span class="line">    raise Exception.CreateFmt(            &#39;Expect encountered invalid token kind (%d, expected %d)&#39;,</span>
<span class="line">            [Ord(token), Ord(expectedToken)])</span>
<span class="line"></span>
<span class="line">  else if value &lt;&gt; expectedValue then</span>
<span class="line">    raise Exception.CreateFmt(            &#39;Expect encountered invalid value (%s, expected %s)&#39;,</span>
<span class="line">            [value, expectedValue])</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure TestGetToken;</span>
<span class="line">var</span>
<span class="line">  state: TParserState;</span>
<span class="line">begin</span>
<span class="line">  state := TParserState.Create(&#39;&#39;);</span>
<span class="line">  ExpectFail(state);</span>
<span class="line">  FreeAndNil(state);</span>
<span class="line"></span>
<span class="line">  state := TParserState.Create(&#39;1&#39;);</span>
<span class="line">  Expect(state, tkNumber, &#39;1&#39;);</span>
<span class="line">  ExpectFail(state);</span>
<span class="line">  FreeAndNil(state);</span>
<span class="line"></span>
<span class="line">  state := TParserState.Create(&#39;1+22 333 Ab&#39;);</span>
<span class="line">  Expect(state, tkNumber, &#39;1&#39;);</span>
<span class="line">  Expect(state, tkAddition, &#39;+&#39;);</span>
<span class="line">  Expect(state, tkNumber, &#39;22&#39;);</span>
<span class="line">  Expect(state, tkNumber, &#39;333&#39;);</span>
<span class="line">  Expect(state, tkUnknown, &#39;A&#39;);</span>
<span class="line">  Expect(state, tkUnknown, &#39;b&#39;);</span>
<span class="line">  ExpectFail(state);</span>
<span class="line">  FreeAndNil(state);</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Парсер принимает любую допустимую строку и преобразует её в AST.</p><p>Если программа корректна, он создаст AST для этой программы, вернёт его в параметре <code>ast</code> и результат функции будет <code>True</code>.</p><p>Если программа не корректна, параметр <code>ast</code> будет <code>nil</code> и результат функции <code>False</code>.</p><p>Пустой ввод не допускается.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function Parse(const prog: string; var ast: TAST): boolean;</span>
<span class="line">var</span>
<span class="line">  accept : TTokenKind;</span>
<span class="line">  numbers: TList;</span>
<span class="line">  state  : TParserState;</span>
<span class="line">  token  : TTokenKind;</span>
<span class="line">  value  : string;</span>
<span class="line">begin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Мы можем легко увидеть как показанная грамматика генерирует следующую последовательность токенов:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">   tkNumber (tkAddition tkNumber)*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(Доказательство опущено в качестве упражнения для читателя)</p><p>Код проверит синтаксис и извлечёт из строки все числа в <code>TArray</code>.</p><p>В конце он передаст этот массив в функцию <code>CreateAST</code> для создания AST.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">   ast := nil;</span>
<span class="line">  Result := false;</span>
<span class="line"></span>
<span class="line">  state := TParserState.Create(prog);</span>
<span class="line">  try</span>
<span class="line">    numbers := TList.Create;</span>
<span class="line">    try</span>
<span class="line">      accept := tkNumber;</span>
<span class="line">      while GetToken(state, token, value) do begin</span>
<span class="line">        if token &lt;&gt; accept then</span>
<span class="line">          Exit;</span>
<span class="line">        if accept = tkNumber then begin</span>
<span class="line">          numbers.Add(StrToInt(value));</span>
<span class="line">          accept := tkAddition;</span>
<span class="line">        end</span>
<span class="line">        else</span>
<span class="line">          accept := tkNumber;</span>
<span class="line">      end;</span>
<span class="line"></span>
<span class="line">      if accept = tkNumber then</span>
<span class="line">        // Last token in the program was tkAddition, which is not allowed.</span>
<span class="line">        Exit;</span>
<span class="line"></span>
<span class="line">      if numbers.Count &gt; 0 then begin</span>
<span class="line">        ast := CreateAST(numbers.ToArray);</span>
<span class="line">        Result := true;</span>
<span class="line">      end;</span>
<span class="line">    finally FreeAndNil(numbers); end;</span>
<span class="line">  finally FreeAndNil(state); end;</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Нам нужно больше тестов...</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TestParse;</span>
<span class="line">var</span>
<span class="line">  add1  : TAddition;</span>
<span class="line">  add2  : TAddition;</span>
<span class="line">  ast   : TAST;</span>
<span class="line">  const1: TConstant;</span>
<span class="line">  const2: TConstant;</span>
<span class="line">  const3: TConstant;</span>
<span class="line">begin</span>
<span class="line">  if not Parse(&#39;1+2 + 3&#39;, ast) then</span>
<span class="line">    raise Exception.Create(&#39;Parser failed&#39;);</span>
<span class="line">  try</span>
<span class="line">    if assigned(ast)</span>
<span class="line">       and IsAddition(ast, add1)</span>
<span class="line">       and IsConstant(add1.Term1, const1) and (const1.Value = 1)</span>
<span class="line">       and IsAddition(add1.Term2, add2)</span>
<span class="line">       and IsConstant(add2.Term1, const2) and (const2.Value = 2)</span>
<span class="line">       and IsConstant(add2.Term2, const3) and (const3.Value = 3)</span>
<span class="line">    then</span>
<span class="line">      // everything is fine</span>
<span class="line">    else</span>
<span class="line">      raise Exception.Create(&#39;CreateAST is not working correctly!&#39;);</span>
<span class="line">  finally FreeAndNil(ast); end;</span>
<span class="line"></span>
<span class="line">  if Parse(&#39;1+2 +&#39;, ast) then begin</span>
<span class="line">    if assigned(ast) then</span>
<span class="line">      raise Exception.Create(&#39;Invalid program resulted in an AST!)&#39;)</span>
<span class="line">    else</span>
<span class="line">      raise Exception.Create(&#39;Invalid program compiled into an empty AST!&#39;);</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Для интерпретации этого AST мы будем использовать простую рекурсию.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function InterpretAST(ast: TAST): integer;</span>
<span class="line">var</span>
<span class="line">  add1  : TAddition;</span>
<span class="line">  const1: TConstant;</span>
<span class="line">begin</span>
<span class="line">  if not assigned(ast) then</span>
<span class="line">    raise Exception.Create(&#39;Result is undefined!&#39;);</span>
<span class="line">  // Alternatively, we could use Nullable as result, </span>
<span class="line">  // with Nullable.Null as a default value.</span>
<span class="line"></span>
<span class="line">  if IsConstant(ast, const1) then</span>
<span class="line">    Result := const1.Value</span>
<span class="line">  else if IsAddition(ast, add1) then</span>
<span class="line">    Result := InterpretAST(add1.Term1) + InterpretAST(add1.Term2)</span>
<span class="line">  else</span>
<span class="line">    raise Exception.Create(&#39;Internal error. Unknown AST element: &#39; +      ast.ClassName);</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Несколько sanity tests всегда приветствуются...</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TestInterpretAST;</span>
<span class="line"></span>
<span class="line">  procedure Test(const testName: string; const values: TArray;    expectedResult: integer);</span>
<span class="line">  var</span>
<span class="line">    ast       : TAST;</span>
<span class="line">    calcResult: integer;</span>
<span class="line">  begin</span>
<span class="line">    ast := CreateAST(values);</span>
<span class="line">    if not assigned(ast) then</span>
<span class="line">      raise Exception.CreateFmt(&#39;Compilation failed in test %s&#39;, [testName]);</span>
<span class="line"></span>
<span class="line">    try</span>
<span class="line">      calcResult := InterpretAST(ast);</span>
<span class="line">      if calcResult &lt;&gt; expectedResult then</span>
<span class="line">        raise Exception.CreateFmt(</span>
<span class="line">                &#39;Evaluation failed in test %s. &#39; +</span>
<span class="line">                &#39;Calculated result %d &lt;&gt; expected result %d&#39;,</span>
<span class="line">                [testName, calcResult, expectedResult]);</span>
<span class="line">    finally</span>
<span class="line">      FreeAndNil(ast);</span>
<span class="line">    end;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">begin</span>
<span class="line">  Test(&#39;1&#39;, [42], 42);</span>
<span class="line">  Test(&#39;2&#39;, [1, 2, 3], 6);</span>
<span class="line">  Test(&#39;3&#39;, [2, -2, 3, -3], 0);</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Для компиляции этого AST, мы должны:</p><ul><li>Изменить каждый узел с типом &#39;constant&#39; в анонимную функцию которая возвращает значение этого узла.</li><li>Изменить каждый узел с типом &#39;summation&#39; в анонимную функцию которая возвращает значение двух параметров. <ul><li>Первый - анонимная функция которая вычисляет значение левого слагаемого и</li><li>второй - анонимная функция которая вычисляет значение правого слагаемого</li></ul></li><li><a href="http://docwiki.embarcadero.com/RADStudio/Tokyo/en/Anonymous_Methods_in_Delphi#Variable_Binding_Mechanism" target="_blank" rel="noopener noreferrer">Механизм связывания переменных</a> заботится о получении правильных входных данных</li></ul><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function MakeConstant(value: integer): TFunc;</span>
<span class="line">begin</span>
<span class="line">  Result :=</span>
<span class="line">    function: integer</span>
<span class="line">    begin</span>
<span class="line">      Result := value;</span>
<span class="line">    end;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function MakeAddition(const term1, term2: TFunc): TFunc;</span>
<span class="line">begin</span>
<span class="line">  Result :=</span>
<span class="line">    function: integer</span>
<span class="line">    begin</span>
<span class="line">      Result := term1() + term2();</span>
<span class="line">    end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Важная точка здесь в том что не <code>MakeConstant</code> не <code>MakeAddition</code> не делает никаких вычислений. Они просто настраивают анонимный метод и возвращают ссылку на него, что более или менее соответствует созданию объекта и возврату его интерфейса, но с добавление затрат на связывание переменных (variable capturing).</p><p>Кстати, так как наш &quot;язык&quot; только вычисляет целочисленные выражения что всегда на выходе даёт целое число, то &quot;функция которая возвращает число&quot; или <code>TFunc</code> точно подходит под наши требования.</p><p>Для &quot;компиляции&quot; AST мы должны использовать рекурсию так как нам нужно создать дочерне-вычисляемые анонимные функции перед их вычислением (как параметры) для создания анонимной функции вычисляющей родительский узел.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function CompileAST(ast: TTerm): TFunc;</span>
<span class="line">var</span>
<span class="line">  add1: TAddition;</span>
<span class="line">  const1: TConstant;</span>
<span class="line">begin</span>
<span class="line">  if IsConstant(ast, const1) then</span>
<span class="line">    // this node represents a constant</span>
<span class="line">    Result := MakeConstant(const1.Value)</span>
<span class="line">  else if IsAddition(ast, add1) then</span>
<span class="line">    // this node represent an expression</span>
<span class="line">    Result := MakeAddition(CompileAST(add1.Term1), CompileAST(add1.Term2))</span>
<span class="line">  else</span>
<span class="line"></span>
<span class="line">    raise Exception.Create(&#39;Internal error. Unknown AST element: &#39; +      ast.ClassName);</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Этот код работает корректно потому что захватывает <strong>значение</strong> <code>const1.Value</code>, а не ссылку (указатель) на него. Откуда я это знаю? Потому что функция <code>TestCompileAST</code> явным образом проверяет это поведение.</p><p>Вызывая <code>CompileAST(CreateAST[1,2,3])</code> будет сгенерирована следующая анонимная функция:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">(*</span>
<span class="line">function: integer</span>
<span class="line">begin</span>
<span class="line">  Result :=</span>
<span class="line">    (function: integer</span>
<span class="line">     begin</span>
<span class="line">       Result := 1;</span>
<span class="line">     end)()</span>
<span class="line">    +</span>
<span class="line">    (function: integer</span>
<span class="line">     begin</span>
<span class="line">       Result :=</span>
<span class="line">         (function: integer</span>
<span class="line">          begin</span>
<span class="line">            Result := 2;</span>
<span class="line">          end)()</span>
<span class="line">         +</span>
<span class="line">         (function: integer</span>
<span class="line">          begin</span>
<span class="line">            Result := 3;</span>
<span class="line">          end)();</span>
<span class="line">     end)();</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line">*)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(*): я знаю что результатом этого будет уточка памяти так как AST не уничтожается.</p><p>Трудно проверить что сгенерированная анонимная функция в корректной форме, но мы можем запустить её на некотором числе тестов и надеятся что всё ОК 😉</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TestCompileAST;</span>
<span class="line"></span>
<span class="line">  procedure Test(const testName: string; const prog: string; expectedResult: integer);</span>
<span class="line">  var</span>
<span class="line">    add1      : TAddition;</span>
<span class="line">    ast       : TAST;</span>
<span class="line">    calcResult: integer;</span>
<span class="line">    code      : TFunc;</span>
<span class="line">    const1    : TConstant;</span>
<span class="line">  begin</span>
<span class="line">    if not (Parse(prog, ast) and assigned(ast)) then</span>
<span class="line">      raise Exception.CreateFmt(&#39;Parser failed in test %s&#39;, [testName]);</span>
<span class="line"></span>
<span class="line">    try</span>
<span class="line">      code := CompileAST(ast);</span>
<span class="line">      if not assigned(code) then</span>
<span class="line"></span>
<span class="line">        raise Exception.CreateFmt(&#39;Compilation failed in test %s&#39;, [testName]);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Давайте удостоверимся что <code>ast.Value</code> был связан по значению а не по ссылке.</p><p>Изменение AST сейчас не должно влиять на скомпилированный код.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">       if (IsAddition(ast, add1) and IsConstant(add1.Term1, const1))</span>
<span class="line">         or IsConstant(ast, const1)</span>
<span class="line">      then</span>
<span class="line">        const1.Value := const1.Value + 1</span>
<span class="line">      else</span>
<span class="line">        raise Exception.CreateFmt(&#39;Unexpected AST format in test %s&#39;,         [testName]);</span>
<span class="line"></span>
<span class="line">      calcResult := code(); //execute the compiled code</span>
<span class="line"></span>
<span class="line">      if calcResult &lt;&gt; expectedResult then</span>
<span class="line">        raise Exception.CreateFmt(</span>
<span class="line">                &#39;Evaluation failed in test %s. &#39; +</span>
<span class="line">                &#39;Codegen result %d &lt;&gt; expected result %d&#39;,</span>
<span class="line">                [testName, calcResult, expectedResult]);</span>
<span class="line"></span>
<span class="line">    finally</span>
<span class="line">      FreeAndNil(ast);</span>
<span class="line">    end;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">begin</span>
<span class="line">  Test(&#39;1&#39;, &#39;42&#39;, 42);</span>
<span class="line">  Test(&#39;2&#39;, &#39;1 + 2 + 3&#39;, 6);</span>
<span class="line">  Test(&#39;3&#39;, &#39;2 + 2 +3+3&#39;, 10);</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Если все тесты проходят, мы запустим цикл Чтение-Выполнение-Вывод (Read-Eval-Print Loop) так что пользователь сможет проверить наш компилятор.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure RunREPL;</span>
<span class="line">var</span>
<span class="line">  ast : TAST;</span>
<span class="line">  prog: string;</span>
<span class="line">begin</span>
<span class="line">  repeat</span>
<span class="line">    Write(&#39;Enter an expression (empty line exits): &#39;);</span>
<span class="line">    Readln(prog);</span>
<span class="line">    if prog = &#39;&#39; then</span>
<span class="line">      break;</span>
<span class="line"></span>
<span class="line">    if not Parse(prog, ast) then</span>
<span class="line">      Writeln(&#39;Syntax is not valid&#39;)</span>
<span class="line">    else</span>
<span class="line">      Writeln(&#39;Result is: &#39;, CompileAST(ast)());</span>
<span class="line">  until false;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">begin</span>
<span class="line">   try</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Запустим все модульные тесты для проверки корректности программы.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">     Writeln(&#39;Running AST creation tests ...&#39;);</span>
<span class="line">    TestCreateAST;</span>
<span class="line"></span>
<span class="line">    Writeln(&#39;Running tokenizer tests ...&#39;);</span>
<span class="line">    TestGetToken;</span>
<span class="line"></span>
<span class="line">    Writeln(&#39;Running parser test ...&#39;);</span>
<span class="line">    TestParse;</span>
<span class="line"></span>
<span class="line">    Writeln(&#39;Running AST interpreter tests ...&#39;);</span>
<span class="line">    TestInterpretAST;</span>
<span class="line"></span>
<span class="line">    Writeln(&#39;Running AST compilation tests ...&#39;);</span>
<span class="line">    TestCompileAST;</span>
<span class="line"></span>
<span class="line">    RunREPL;</span>
<span class="line">  except</span>
<span class="line">    on E: Exception do begin</span>
<span class="line">      Writeln(E.ClassName, &#39;: &#39;, E.Message);</span>
<span class="line">      Readln;</span>
<span class="line">    end;</span>
<span class="line">  end;</span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,88))])}const m=a(c,[["render",v]]),b=JSON.parse('{"path":"/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-inte.html","title":"Написание простого DSL компилятора на Delphi (Intermezzo)","lang":"ru-RU","frontmatter":{"title":"Написание простого DSL компилятора на Delphi (Intermezzo)","date":"2019-06-10","categories":["Delphi"],"tags":["Delphi","перевод","компиляторы","грамотное-программирование"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"написание-простого-dsl-компилятора-на-delphi-inte.md"}');export{m as comp,b as data};
