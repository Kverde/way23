import{_ as e,c as i,a as n,b as l,t as d,o as c}from"./app-DvfQ69-Y.js";const p={},r={id:"frontmatter-title",tabindex:"-1"},t={class:"header-anchor",href:"#frontmatter-title"};function v(a,s){return c(),i("div",null,[n("h1",r,[n("a",t,[n("span",null,d(a.$frontmatter.title),1)])]),s[0]||(s[0]=l(`<p>Перевод статьи <a href="https://www.geeksforgeeks.org/static-and-dynamic-scoping/" target="_blank" rel="noopener noreferrer">Static and Dynamic Scoping</a>.</p><p>Область видимости переменной <code>x</code> это область программы в которой использование имени <code>x</code> ссылается на объявление этой переменной. Одна из причин использование областей видимости — сохранить переменные в разных частях программы отличными друг от друга. Количество коротких имён для переменных ограничено и программисты используют общепринятые имена (например <code>i</code> для индекса массива). В любой программе среднего размера одинаковые названия переменных используются в разных частях программы.</p><p>Области видимости делятся на два вида: статические и динамические.</p><h2 id="статические-области-видимости" tabindex="-1"><a class="header-anchor" href="#статические-области-видимости"><span>Статические области видимости</span></a></h2><p>Статические области видимости (Static scoping) так же называются лексическими областями видимости (Lexical scoping). В этих областях видимости имена переменных всегда ссылаются на окружение более верхнего уровня. Это свойство текста программы и не связано со стеком вызовов во время выполнения. Статические области видимости упрощают написание модульного кода, так как программист вычисляет область видимости просто смотря на код. В отличии от этого, динамические области видимости требуют от разработчика учитывать все возможные варианты динамического контекста.</p><p>В большинстве языков программирования, включая C, C++ и Java, используются статические области видимости: привязка переменных может быть определена по тексту программы и не зависит от стека вызовов функций во время выполнения.</p><p>Для примера рассмотрим программу написанную ниже. Программа выводит 10, так как значение возвращаемое <code>f()</code> не зависит от того откуда вызвана функция (<code>g()</code> вызывает её и имеет свою переменную <code>x</code> со значением 20). <code>f()</code> всегда возвращает значение глобальной переменной <code>x</code>.</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code><span class="line">// программа на C демонстрирующая статические области видимости</span>
<span class="line">#include&lt;stdio.h&gt; </span>
<span class="line">int x = 10; </span>
<span class="line"></span>
<span class="line">// Вызывается из g() </span>
<span class="line">int f() </span>
<span class="line">{ </span>
<span class="line">   return x; </span>
<span class="line">} </span>
<span class="line"></span>
<span class="line">// g() содержит переменную с именем x и вызывает f() </span>
<span class="line">int g() </span>
<span class="line">{ </span>
<span class="line">   int x = 20; </span>
<span class="line">   return f(); </span>
<span class="line">} </span>
<span class="line"></span>
<span class="line">int main() </span>
<span class="line">{ </span>
<span class="line">  printf(&quot;%d&quot;, g()); // 10</span>
<span class="line">  printf(&quot;\\n&quot;); </span>
<span class="line">  return 0; </span>
<span class="line">} </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В примере компилятор сначала ищет переменную в текущем блоке, затем в глобальных переменных.</p><h2 id="динамические-области-видимости" tabindex="-1"><a class="header-anchor" href="#динамические-области-видимости"><span>Динамические области видимости</span></a></h2><p>Динамическими области видимости необычны для современных языков программирования: каждый идентификатор имеет глобальный стек привязок и при поиске значения используется самая последняя привязка. Другими словами, сначала компилятор ищет имя в текущем блоке, а затем последовательно во всех вызвавших текущий блок функциях.</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code><span class="line">// Так как динамические области видимости необычны</span>
<span class="line">// мы рассмотрим следующий псевдокод. Он выведет 20 </span>
<span class="line">// на языке с динамическими областями видимости</span>
<span class="line"></span>
<span class="line">int x = 10; </span>
<span class="line"></span>
<span class="line">// Called by g() </span>
<span class="line">int f() </span>
<span class="line">{ </span>
<span class="line">   return x; </span>
<span class="line">} </span>
<span class="line"></span>
<span class="line">// g() содержит переменную с именем x и вызывает f()</span>
<span class="line">int g() </span>
<span class="line">{ </span>
<span class="line">   int x = 20; </span>
<span class="line">   return f(); </span>
<span class="line">} </span>
<span class="line"></span>
<span class="line">main() </span>
<span class="line">{ </span>
<span class="line">  printf(g()); // 20</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="статические-vs-динамические" tabindex="-1"><a class="header-anchor" href="#статические-vs-динамические"><span>Статические vs динамические</span></a></h2><p>В большинстве языков программирования используются статические области видимости: код легче понимать, достаточно посмотреть на текст программы чтобы понять область видимости переменной.</p><p>При использовании динамических областей видимости недостаточно знать где написан код, нужно знать как он запускается. Каждый раз при запуске функции создаётся новая область видимости.</p><p>Perl поддерживает как статические так и динамические области видимости. Ключевое слово <code>my</code> определяет статическую область видимости локальной переменной, а ключевое слово <code>local</code> динамическую область видимости локальной переменной.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"># Код на Perl демонстрирующий динамическую область видимости</span>
<span class="line">$x = 10; </span>
<span class="line">sub f  </span>
<span class="line">{  </span>
<span class="line">   return $x;  </span>
<span class="line">} </span>
<span class="line">sub g  </span>
<span class="line">{  </span>
<span class="line">   # Так как используется local, переменная x в динамической области видимости</span>
<span class="line">   local $x = 20;  </span>
<span class="line"></span>
<span class="line">   return f();  </span>
<span class="line">} </span>
<span class="line">print g().&quot;\\n&quot;; # 20</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17))])}const m=e(p,[["render",v]]),o=JSON.parse('{"path":"/%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D0%B8-%D0%B4%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8-%D0%B2.html","title":"Статические и динамические области видимости","lang":"ru-RU","frontmatter":{"title":"Статические и динамические области видимости","date":"2020-02-11","categories":["Языки программирования"],"tags":["перевод","области-видимости"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"статические-и-динамические-области-в.md"}');export{m as comp,o as data};
