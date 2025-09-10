import{_ as e,c as i,a as s,b as l,t as d,o as t}from"./app-DvfQ69-Y.js";const r={},c={id:"frontmatter-title",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title"};function u(n,a){return t(),i("div",null,[s("h1",c,[s("a",p,[s("span",null,d(n.$frontmatter.title),1)])]),a[0]||(a[0]=l(`<p>Для поиска файлов применяется команда <code>find</code>. Рассмотрим работу команды на примере следующего дерева каталогов:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ tree</span>
<span class="line"><span class="token builtin class-name">.</span></span>
<span class="line">├── data</span>
<span class="line">│   ├── data1.dat</span>
<span class="line">│   ├── data2.dat</span>
<span class="line">│   └── readme.txt</span>
<span class="line">├── data.dat</span>
<span class="line">├── file1.txt</span>
<span class="line">└── file2.txt</span>
<span class="line"></span>
<span class="line"><span class="token number">2</span> directories, <span class="token number">6</span> files</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Если запустить <code>find</code> без параметров то команда рекурсивно выведет все названия файлов и каталогов.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">find</span></span>
<span class="line"><span class="token builtin class-name">.</span></span>
<span class="line">./file1.txt</span>
<span class="line">./data.dat</span>
<span class="line">./file2.txt</span>
<span class="line">./data</span>
<span class="line">./data/data2.dat</span>
<span class="line">./data/readme.txt</span>
<span class="line">./data/data1.dat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>С помощью параметров можно указывать фильтры для поиска. Фильтр по имени — параметр <code>-name</code>.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">find</span> <span class="token parameter variable">-name</span> readme.txt</span>
<span class="line">./data/readme.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Можно искать по маске</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">find</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;*.dat&#39;</span></span>
<span class="line">./data.dat</span>
<span class="line">./data/data2.dat</span>
<span class="line">./data/data1.dat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Можно искать с указанием размера, символ <code>c</code> означает, единицу измерения — байты.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">find</span> <span class="token parameter variable">-size</span> 6c</span>
<span class="line">./data/data2.dat</span>
<span class="line">user@debian-server:~/test$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> ./data/data2.dat</span>
<span class="line">-rw-r--r-- <span class="token number">1</span> user user <span class="token number">6</span> ноя <span class="token number">30</span> <span class="token number">13</span>:38 ./data/data2.dat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Так же можно указать тип: файл, директория, ссылка:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">find</span> <span class="token parameter variable">-type</span> f</span>
<span class="line">./file1.txt</span>
<span class="line">./data.dat</span>
<span class="line">./file2.txt</span>
<span class="line">./data/data2.dat</span>
<span class="line">./data/readme.txt</span>
<span class="line">./data/data1.dat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>С помощью параметра <code>-exec</code> можно выполнить определенное действие над всеми найденными файлами. После <code>-exec</code> должна идти команда, в том месте где должно стоять имя файла символы <code>{}</code> а в конце команды <code>\\;</code>.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">find</span> <span class="token parameter variable">-size</span> 6c <span class="token parameter variable">-exec</span> <span class="token function">file</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span></span>
<span class="line">./data/data2.dat: ASCII text</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,14))])}const v=e(r,[["render",u]]),m=JSON.parse('{"path":"/linux-find.html","title":"Поиск файлов в Linux (find)","lang":"ru-RU","frontmatter":{"title":"Поиск файлов в Linux (find)","date":"2023-11-30","categories":["Linux"],"tags":["find"]},"git":{"updatedTime":1701370451000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"6a5d60bcab6d3a9f62a52c61de3f8775e4ed62f5","time":1701370451000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"add post about find command"}]},"filePathRelative":"linux-find.md"}');export{v as comp,m as data};
