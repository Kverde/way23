import{_ as i,c as a,a as s,b as l,t,o as d}from"./app-DvfQ69-Y.js";const r={},p={id:"frontmatter-title",tabindex:"-1"},c={class:"header-anchor",href:"#frontmatter-title"};function m(e,n){return d(),a("div",null,[s("h1",p,[s("a",c,[s("span",null,t(e.$frontmatter.title),1)])]),n[0]||(n[0]=l(`<p>Пост написан на основе части 3.2 книги Intermediate Python. Obi Ike-Nwosu.</p><p>Программа на Python состоит из логических строк ограниченных токеном <strong>NEWLINE</strong>. Каждая логическая строка эквивалентна простому оператору. Составные операторы формируются из нескольких логических строк.</p><p>Логическая строка создаётся из одной или нескольких физических строк используя явные или не явные правила объединения строк. Физическая строка — это последовательность символов завершающаяся символами перевода строки (end-of-line sequence). Python неявно рассматривает физические строки как логические, устраняя необходимость в точке с запятой для разделения выражений. Однако точка с запятой может использоваться для разделения одной физической строки на несколько логических:</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python"><pre><code><span class="line">&gt;&gt;&gt; i = 5; print i;</span>
<span class="line">5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Несколько физических строк в явном виде объединяются в одну логическую символом &quot;\\&quot;:</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python"><pre><code><span class="line">&gt;&gt;&gt; name = &quot;Obi Ike-Nwosu&quot;</span>
<span class="line">&gt;&gt;&gt; cleaned_name = name.replace(&quot;-&quot;, &quot; &quot;). \\</span>
<span class="line">... replace(&quot; &quot;, &quot;&quot;)</span>
<span class="line">&gt;&gt;&gt; cleaned_name</span>
<span class="line">&#39;ObiIkeNwosu&#39;</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Физические строки соединяются неявно, без использования символа продолжения строки (&quot;\\&quot;), когда выражение находится в тройных строковых кавычках, заключено в скобки <code>(...)</code>, <code>[...]</code>, или <code>{...}</code>.</p><p>Python содержит два типа операторов.</p><p>Простые операторы занимающие одиночные логические строки. Они включают в себя присваивание, yield и др. Общий синтаксис простых операторов:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">simple_stmt ::= expression_stmt</span>
<span class="line">            | assert_stmt</span>
<span class="line">            | assignment_stmt</span>
<span class="line">            | augmented_assignment_stmt</span>
<span class="line">            | pass_stmt</span>
<span class="line">            | del_stmt</span>
<span class="line">            | return_stmt</span>
<span class="line">            | yield_stmt</span>
<span class="line">            | raise_stmt</span>
<span class="line">            | break_stmt</span>
<span class="line">            | continue_stmt</span>
<span class="line">            | import_stmt</span>
<span class="line">            | global_stmt</span>
<span class="line">            | nonlocal_stmt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Составные операторы занимающие несколько логических строк. Они включают в себя выражения циклов while и for. Общий синтаксис составных операторов:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">compound_stmt ::= if_stmt</span>
<span class="line">              | while_stmt</span>
<span class="line">              | for_stmt</span>
<span class="line">              | try_stmt</span>
<span class="line">              | with_stmt</span>
<span class="line">              | funcdef</span>
<span class="line">              | classdef</span>
<span class="line"></span>
<span class="line">suite ::= stmt_list NEWLINE | NEWLINE INDENT statement+ DEDENT</span>
<span class="line"></span>
<span class="line">statement ::= stmt_list NEWLINE | compound_stmt</span>
<span class="line"></span>
<span class="line">stmt_list ::= simple_stmt (&quot;;&quot; simple_stmt)* [&quot;;&quot;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Составные операторы содержат одно или несколько предложений (clause). Предложение состоит из заголовка (header) и тела (suite). Заголовки предложений для одного составного оператора имеют одинаковый отступ и начинаются с уникального идентификатора (while, if и т.д.) и с двоеточия. Составной оператор <strong>if</strong> определяется так:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">if_stmt ::=  &quot;if&quot; expression &quot;:&quot; suite</span>
<span class="line">             ( &quot;elif&quot; expression &quot;:&quot; suite )*</span>
<span class="line">             [&quot;else&quot; &quot;:&quot; suite]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Выполнение тела предложения контролируется заголовком:</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python"><pre><code><span class="line">&gt;&gt;&gt; num = 6</span>
<span class="line"># оператор if является составным оператором</span>
<span class="line">    # Заголовок предложения контролирует выполнение следующего блока с отступом</span>
<span class="line">&gt;&gt;&gt; if num % 2 == 0:</span>
<span class="line">        # блок тела с отступом</span>
<span class="line">...     print(&quot;The number {} is even&quot;.format(num))</span>
<span class="line">...</span>
<span class="line">The number 6 is even</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Тело (suite) может быть набором из одного или нескольких операторов который следуют за двоеточием заголовка, в этом случае, операторы разделяются точкой с запятой:</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python"><pre><code><span class="line">&gt;&gt;&gt; x = 1</span>
<span class="line">&gt;&gt;&gt; y = 2</span>
<span class="line">&gt;&gt;&gt; z = 3</span>
<span class="line">&gt;&gt;&gt; if x &lt; y &lt; z: print(x); print(y); print(z)</span>
<span class="line">...</span>
<span class="line">1</span>
<span class="line">2</span>
<span class="line">3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Но обычно тело (suite) записывается со следующей после заголовка строки в виде одного или нескольких операторов с отступом:</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python"><pre><code><span class="line">&gt;&gt;&gt; x = 1</span>
<span class="line">&gt;&gt;&gt; y = 2</span>
<span class="line">&gt;&gt;&gt; z = 3</span>
<span class="line">&gt;&gt;&gt; if x &lt; y &lt; z:</span>
<span class="line">...    print(x)</span>
<span class="line">...    print(y);</span>
<span class="line">...    print(z)</span>
<span class="line">...</span>
<span class="line">1</span>
<span class="line">2</span>
<span class="line">3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Отступы используются для обозначения блоков кода таких как тела функций, условий, циклов и классов. Ведущий пробел в начале логической строки используется для вычисления отступа для этой строки, который, в свою очередь, используется для определения группировки оператора. Отступ используемый в теле блока всегда должен совпадать с отступом первого оператора в блоке.</p><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки"><span>Ссылки</span></a></h2><ul><li><a href="https://docs.python.org/3.3/reference/compound_stmts.html" target="_blank" rel="noopener noreferrer">Compound statements</a></li></ul>`,23))])}const v=i(r,[["render",m]]),o=JSON.parse('{"path":"/python-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8-%D0%B8-%D0%BE%D1%82%D1%81%D1%82%D1%83%D0%BF%D1%8B.html","title":"Python. Выражение, строки и отступы","lang":"ru-RU","frontmatter":{"title":"Python. Выражение, строки и отступы","date":"2019-10-04","categories":["Python"],"tags":["intermediate-python"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"python-выражение-строки-и-отступы.md"}');export{v as comp,o as data};
