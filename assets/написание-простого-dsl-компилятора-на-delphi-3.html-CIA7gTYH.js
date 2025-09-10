import{_ as i,c as a,a as n,b as l,t as d,o as c}from"./app-DvfQ69-Y.js";const p={},r={id:"frontmatter-title",tabindex:"-1"},t={class:"header-anchor",href:"#frontmatter-title"};function o(s,e){return c(),a("div",null,[n("h1",r,[n("a",t,[n("span",null,d(s.$frontmatter.title),1)])]),e[0]||(e[0]=l(`<p>Перевод поста [Writing a Simple DSL Compiler with Delphi (3. Tokenizer])](<a href="https://www.thedelphigeek.com/2017/09/writing-simple-dsl-compiler-with-delphi.html" target="_blank" rel="noopener noreferrer">https://www.thedelphigeek.com/2017/09/writing-simple-dsl-compiler-with-delphi.html</a>).</p><p>Эта статья представляет собой описание токинезатора используемого для представления &quot;Языка&quot;. Если вы только начинаете читать эту серию, то я бы рекомендовал вам начать с <a href="http://way23.ru/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-0/" target="_blank" rel="noopener noreferrer">этого поста</a>.</p><p>Пожалуйста, имейте в виду, что эта статья описывает начальную реализацию токинезатора. Если вы хотите просматривать код во время чтения статьи, убедитесь, что вы переключились на ветку <a href="https://github.com/gabr42/SimpleDSLCompiler/tree/dsl_v1" target="_blank" rel="noopener noreferrer">dsl_v1</a>.</p><p>С этой статьёй я перемещаюсь в важную часть проекта — код который читает исходный код и превращает его в красивое абстрактное синтаксическое дерево. Другими словами, я буду говорить о парсере.</p><p>Я должен признать что потратил на парсер так мало времени, как мог. В конце концов, моя основная цель конвертировать AST в запускаемый код, не разбор текста. Тем не менее, нельзя написать компилятор без написания парсера.</p><p>Если вы хотите сделать что-то с данными, то вы должны</p><ol><li>Знать формат в котором они записаны.</li><li>Написать код который читает входной поток, разбирает его и создаёт в памяти структуры наполненные данными.</li></ol><p>Первая задача любого хорошего программиста это создание библиотеки которая будет делать самую трудную работу за него. Так было незадолго до того как такие инструменты появились в области написания компиляторов.</p><p>Программисты очень скоро поняли что анализ текста в действительности состоит из двух шагов. На первом шаге вы хотите разделить данныйе на токены (лексемы). Каждый токен представляет собой небольшую часть входных данных имеющую определённое значение. Например, если вы разделите оператор Паскаля</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">a := func(i+42);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>на отдельные токены, то вы получите</p><ul><li>identifier:a</li><li>whitespace</li><li>becomes</li><li>whitespace</li><li>identifier:func</li><li>left-parent</li><li>identifier:i</li><li>plus</li><li>number:42</li><li>right-parent</li><li>semicolon</li></ul><p>Некоторые символы сразу сопоставляются с собственными токенами, например, &quot;;&quot; становится <code>semicolon</code>. А некоторые сгруппированы, например, &quot;42&quot; становится <code>number</code> со значением 42.</p><p>Вторая часть — парсер использует последовательность токенов производимых токинезатором и пробует понять смысл (семантику) — то есть как токены вписываются в формальную спецификацию языка. Это будет тема следующей статьи.</p><p>Из-за такого разделения вспомогательные утилиты тоже делятся на две области — одни помогают создавать токинезаторы а другие парсеры. В терминах Unix, например, у нас есть Lex для лексического анализа (токинезация) и Yacc (Yet Another Compiler Compiler) для семантического анализа. В мире Паскаля у нас тоже есть инструменты для генерации компиляторов. Существует довольно приличный <a href="https://github.com/RomanYankovsky/ndyacclex" target="_blank" rel="noopener noreferrer">порт на Delphi</a>, <a href="http://wiki.freepascal.org/Plex_and_Pyacc" target="_blank" rel="noopener noreferrer">Plex+Pyacc</a> для FreePascal, довольно старый и неподдерживаемый (но бесплатный) <a href="http://www.soft-gems.net/index.php/tools/delphi-compiler-generator" target="_blank" rel="noopener noreferrer">Delphi Compiler Generator</a> и возможно несколько других инструментов, которых я не нашёл при поверхностным поиске.</p><p>Вернёмся назад к теме разговора.</p><p>В моём случае язык крайне простой и следовательно токинезатор тоже. Вместо использования специализированных инструментов я просто пошёл дальше и написал его. Как вы уведите, это очень просто.</p><h2 id="токены" tabindex="-1"><a class="header-anchor" href="#токены"><span>Токены</span></a></h2><p>Рассмотрим демонстрационную программу из <a href="http://way23.ru/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-1/" target="_blank" rel="noopener noreferrer">первой части</a></p><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre><code><span class="line"><span class="token function">fib</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> i <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">fib</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fib</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Из этого примера мы можем угадать все токены используемые в Языке</p><ul><li>identifier (&quot;fib&quot;, &quot;i&quot;, &quot;if&quot;, &quot;return&quot; ...)</li><li>number (&quot;1&quot;, &quot;2&quot;, &quot;3&quot;)</li><li>whitespace</li><li>left parenthesis (&quot;(&quot;)</li><li>right parenthesis (&quot;)&quot;)</li><li>left curly bracket (&quot;{&quot;)</li><li>right curly bracket (&quot;}&quot;)</li><li>less than (&quot;&lt;&quot;)</li><li>plus (&quot;+&quot;)</li><li>minus (&quot;-&quot;)</li></ul><p>Есть только два токена которые не покрывает этот пример</p><ul><li>comma (&quot;,&quot;)</li><li>semicolon (&quot;;&quot;)</li></ul><p>Первый используется для разделения параметров в определении функции и при вызове функции. Второй используется для разделения операторов, но не появляется в этом примере, так как является необязательным непосредственно перед закрывающей фигурной скобкой.</p><p>Следующий тип из модуля <code>SimpleDSL.Compiler.Tokenizer</code> перечисляет все варианты. В дополнение к уже обсуждённым типам токенов используются:</p><ul><li><code>tkUnknown</code> для представления неожиданных входных данных.</li><li><code>tkEOF</code> как сигнал что достигнут конец входного потока.</li></ul><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TTokenKind = (tkUnknown, tkWhitespace,</span>
<span class="line">                tkIdent, tkNumber,</span>
<span class="line">                tkLeftParen, tkRightParen, tkLeftCurly, tkRightCurly,</span>
<span class="line">                tkLessThan, tkPlus, tkMinus,</span>
<span class="line">                tkComma, tkSemicolon,</span>
<span class="line"></span>
<span class="line">                tkEOF);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="интерфеис" tabindex="-1"><a class="header-anchor" href="#интерфеис"><span>Интерфейс</span></a></h2><p>Токинезатор доступен через очень простой интерфейс</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">ISimpleDSLTokenizer = interface</span>
<span class="line">  function  CurrentLocation: TPoint;</span>
<span class="line">  function  GetToken(var kind: TTokenKind; var identifier: string): boolean;</span>
<span class="line">  procedure Initialize(const code: string);</span>
<span class="line">  function  IsAtEnd: boolean;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Очень важная функция <code>GetToken</code>. Она возвращает следующий токен из входного потока — <code>kind</code> содержит тип токена и <code>identifier</code> содержит последовательность символов представляющих токен. Функция возвращает <code>False</code> когда достигнут конец входного потока.</p><p>Другие функции вспомогательные.</p><ul><li><code>IsAtEnd</code> возвращает <code>True</code> когда достигнут конец входного потока.</li><li><code>CurrentLocation</code> возвращает текущую строку и номер символа, это удобно для сообщений об ошибках.</li><li><code>Initialize</code> — инициализирует токинизатор.</li></ul><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TSimpleDSLTokenizer.Initialize(const code: string);</span>
<span class="line">begin</span>
<span class="line">  FProgram.Text := code;</span>
<span class="line">  FNextLine := 0;</span>
<span class="line">  FNextChar := 1;</span>
<span class="line">  FLookahead := #0;</span>
<span class="line">  FLastLine := FProgram.Count - 1;</span>
<span class="line">  if FLastLine &gt;= 0 then begin</span>
<span class="line">    FLastLineLen := Length(FProgram[FLastLine]);</span>
<span class="line">    FCurrentLine := FProgram[FNextLine];</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Программа хранится внутри <code>TStringList</code> <code>FProgram</code>. Другие переменные отслеживают текущее положение и чаще используются в методе <code>GetChar</code>.</p><h2 id="чтение-входного-потока" tabindex="-1"><a class="header-anchor" href="#чтение-входного-потока"><span>Чтение входного потока</span></a></h2><p>Давайте взглянем на метод <code>GetToken</code>.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function TSimpleDSLTokenizer.GetToken(var kind: TTokenKind; var identifier: string): boolean;</span>
<span class="line">var</span>
<span class="line">  ch: char;</span>
<span class="line">begin</span>
<span class="line">  identifier := &#39;&#39;;</span>
<span class="line">  Result := GetChar(ch);</span>
<span class="line">  if not Result then begin</span>
<span class="line">    kind := tkEOF;</span>
<span class="line">    Exit;</span>
<span class="line">  end;</span>
<span class="line">  case ch of</span>
<span class="line">    &#39;(&#39;: kind := tkLeftParen;</span>
<span class="line">    &#39;)&#39;: kind := tkRightParen;</span>
<span class="line">    &#39;{&#39;: kind := tkLeftCurly;</span>
<span class="line">    &#39;}&#39;: kind := tkRightCurly;</span>
<span class="line">    &#39;+&#39;: kind := tkPlus;</span>
<span class="line">    &#39;-&#39;: kind := tkMinus;</span>
<span class="line">    &#39;&lt;&#39;: kind := tkLessThan;</span>
<span class="line">    &#39;,&#39;: kind := tkComma;</span>
<span class="line">    &#39;;&#39;: kind := tkSemicolon;</span>
<span class="line">    else if ch.IsLetter then begin</span>
<span class="line">      kind := tkIdent;</span>
<span class="line">      identifier := ch + GetIdent;</span>
<span class="line">    end</span>
<span class="line">    else if CharInSet(ch, [&#39;0&#39;..&#39;9&#39;]) then begin</span>
<span class="line">      kind := tkNumber;</span>
<span class="line">      identifier := ch + GetNumber;</span>
<span class="line">    end</span>
<span class="line">    else if ch.IsWhiteSpace then begin</span>
<span class="line">      kind := tkWhitespace;</span>
<span class="line">      SkipWhitespace;</span>
<span class="line">    end</span>
<span class="line">    else</span>
<span class="line">      kind := tkUnknown;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Сначала он считывает следующий символ из потока (через <code>GetChar</code>) и завершается если следующего символа нет. Затем обрабатывает все односимвольные токены сразу. После этого идет обработка особых случаев — чтение идентификаторов, строк, и пробелов через методы <code>GetIdent</code>, <code>GetNumber</code> и <code>SkipWhitespace</code> соответственно.</p><p><code>GetIdent</code> и <code>GetNumber</code> очень похожи, так что я сфокусируюсь на одном из них.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function TSimpleDSLTokenizer.GetIdent: string;</span>
<span class="line">var</span>
<span class="line">  ch: char;</span>
<span class="line">begin</span>
<span class="line">  Result := &#39;&#39;;</span>
<span class="line">  while GetChar(ch) do begin</span>
<span class="line">    if ch.IsLetter or ch.IsNumber or (ch = &#39;_&#39;) then</span>
<span class="line">      Result := Result + ch</span>
<span class="line">    else begin</span>
<span class="line">      PushBack(ch);</span>
<span class="line">      Exit;</span>
<span class="line">    end;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Так как <code>GetToken</code> уже прочитал первый символ идентификатора, то <code>GetIdent</code> собирает вместе все следующие символы которые являются либо буквой, либо цифрой, либо символом подчёркивания. (и как вы можете видеть, код использует хелперы для типа <code>Char</code> - <code>IsLetter</code> и <code>IsNumber</code> — так что идентификаторы действительно поддерживают Юникод)</p><p>Когда появляется неподходящий для идентификатора символ, простейшее решение это просто сказать &quot;Оп, я прочитал слишком много, пожалуйста помести этот последний символ обратно для обработки&quot;.</p><h2 id="одно-символьныи-буфер" tabindex="-1"><a class="header-anchor" href="#одно-символьныи-буфер"><span>Одно-символьный буфер</span></a></h2><p>Раз мы только что прочитали на один символ больше, эта операция &quot;пожалуйста, верни последний <code>GetChar</code>&quot; обрабатывается простым одно-символьным буфером используемым в <code>PushBack</code> и в <code>GetChar</code>.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TSimpleDSLTokenizer.PushBack(ch: char);</span>
<span class="line">begin</span>
<span class="line">  Assert(FLookahead = #0, &#39;TSimpleDSLTokenizer: Lookahead buffer is not empty&#39;);</span>
<span class="line">  FLookahead := ch;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function TSimpleDSLTokenizer.GetChar(var ch: char): boolean;</span>
<span class="line">begin</span>
<span class="line">  if FLookahead &lt;&gt; #0 then begin</span>
<span class="line">    ch := FLookahead;</span>
<span class="line">    FLookahead := #0;</span>
<span class="line">    Result := true;</span>
<span class="line">  end</span>
<span class="line">  else begin</span>
<span class="line">    Result := not IsAtEnd;</span>
<span class="line">    if Result then begin</span>
<span class="line">      ch := FCurrentLine[FNextChar];</span>
<span class="line">      Inc(FNextChar);</span>
<span class="line">      if FNextChar &gt; Length(FCurrentLine) then begin</span>
<span class="line">        Inc(FNextLine);</span>
<span class="line">        if FNextLine &lt; FProgram.Count then</span>
<span class="line">          FCurrentLine := FProgram[FNextLine];</span>
<span class="line">        FNextChar := 1;</span>
<span class="line">      end;</span>
<span class="line">    end;</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>PushBack</code> просто сохраняет текущий буфер в <code>FLookahead</code> (если буфер не пуст, что может произойти только если в токенизере баг). <code>GetChar</code> содержит немного больше работы — в дополнение к обработке буфера <code>FLookahead</code> он должен также обрабатывать условие окончания строки текста.</p><p>Подход <em>PushBack</em> используется также в <code>GetNumber</code> и в <code>SkipWhitespace</code> (для деталей смотрите код) и в парсере, как мы скоро увидим.</p>`,49))])}const v=i(p,[["render",o]]),m=JSON.parse('{"path":"/%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-dsl-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-delphi-3.html","title":"Написание простого DSL компилятора на Delphi (3. Токинезатор)","lang":"ru-RU","frontmatter":{"title":"Написание простого DSL компилятора на Delphi (3. Токинезатор)","date":"2019-06-06","categories":["Delphi"],"tags":["Delphi","перевод","компиляторы"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"написание-простого-dsl-компилятора-на-delphi-3.md"}');export{v as comp,m as data};
