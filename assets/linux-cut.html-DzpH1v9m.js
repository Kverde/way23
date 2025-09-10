import{_ as a,c as i,a as s,b as l,t,o as c}from"./app-DvfQ69-Y.js";const r={},d={id:"frontmatter-title",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title"};function o(n,e){return c(),i("div",null,[s("h1",d,[s("a",p,[s("span",null,t(n.$frontmatter.title),1)])]),e[0]||(e[0]=l(`<p>Утилита <code>cut</code> выводит определенную часть каждой строки файла. Например, если файл представляет собой таблицу с разделителем <code>TAB</code>, то можно вывести определенные колонки из этого файла.</p><p>Для примера создадим файл с таблицей (разделители <code>TAB</code>)</p><div class="language-file.txt line-numbers-mode" data-highlighter="prismjs" data-ext="file.txt"><pre><code><span class="line">id	name	salary</span>
<span class="line">1	Bob	60</span>
<span class="line">2	Alica 20</span>
<span class="line">3	Piter	50</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Для вывода колонки используется параметр <code>-f</code> и номер колонки.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cut</span> <span class="token parameter variable">-f</span> <span class="token number">2</span> file.txt </span>
<span class="line">name</span>
<span class="line">Bob</span>
<span class="line">Alica</span>
<span class="line">Piter</span>
<span class="line">user@debian-server:~/test$ <span class="token function">cut</span> <span class="token parameter variable">-f</span> <span class="token number">3</span> file.txt </span>
<span class="line">salary</span>
<span class="line"><span class="token number">60</span></span>
<span class="line"><span class="token number">20</span></span>
<span class="line"><span class="token number">50</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Через парамтер <code>-d</code> можно задать другой разделитель. <code>cut</code> может вывести определенные символы (<code>-c</code>) или байты (<code>-b</code>) с каждой строки.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cut</span> <span class="token parameter variable">-c</span> <span class="token number">3</span>-6 file.txt </span>
<span class="line">	nam</span>
<span class="line">Bob	</span>
<span class="line">Alic</span>
<span class="line">Pite</span>
<span class="line">user@debian-server:~/test$ <span class="token function">cut</span> <span class="token parameter variable">-b</span> <span class="token number">3</span>-6 file.txt </span>
<span class="line">	nam</span>
<span class="line">Bob	</span>
<span class="line">Alic</span>
<span class="line">Pite</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7))])}const m=a(r,[["render",o]]),v=JSON.parse('{"path":"/linux-cut.html","title":"Утилита cut в Linux","lang":"ru-RU","frontmatter":{"title":"Утилита cut в Linux","date":"2023-11-29","categories":["Linux"],"tags":["cut"]},"git":{"updatedTime":1701282644000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":2,"url":"https://github.com/Petro"}],"changelog":[{"hash":"a61b2e2035cc8e9d4dbf7c5f09a414946c6d1d31","time":1701282644000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"fix"},{"hash":"be44b1afb3163ae9c344b8acc3ca67baea76bd5f","time":1701278651000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"add post about cut"}]},"filePathRelative":"linux-cut.md"}');export{m as comp,v as data};
