import{_ as a,c as i,a as s,b as l,t as d,o as t}from"./app-DvfQ69-Y.js";const r={},c={id:"frontmatter-title",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title"};function o(n,e){return t(),i("div",null,[s("h1",c,[s("a",p,[s("span",null,d(n.$frontmatter.title),1)])]),e[0]||(e[0]=l(`<p>Стандартный способ запуска редактор <code>sed</code> с указанием скрипта и входного файла. Можно указать несколько файлов в этом случае они будут соединены и операции с ними будут происходить как с одним большим файлом. Результаты команда отправляет в <code>stdout</code>.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> file.txt </span>
<span class="line">first line</span>
<span class="line">second line</span>
<span class="line">third line</span>
<span class="line">user@debian-server:~/test$ <span class="token function">sed</span> s/line/LINE/ file.txt </span>
<span class="line">first LINE</span>
<span class="line">second LINE</span>
<span class="line">third LINE</span>
<span class="line">user@debian-server:~/test$ <span class="token function">cat</span> file.txt </span>
<span class="line">first line</span>
<span class="line">second line</span>
<span class="line">third line</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>С опцией <code>-i</code> команда <code>sed</code> изменит входной файл.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">sed</span> <span class="token parameter variable">-i</span> s/line/LINE/ file.txt </span>
<span class="line">user@debian-server:~/test$ <span class="token function">cat</span> file.txt </span>
<span class="line">first LINE</span>
<span class="line">second LINE</span>
<span class="line">third LINE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Скрипт <code>sed</code> поддерживает разные команды. Команда <code>s</code> — замена текста с помощью регулярных выражений, её полный синтаксис следующий <code>s/regexp/replacement/flags</code>. По умолчанию команда <code>s</code> заменяет только первое вхождение в строке, а с флагом <code>g</code> — все вхождения.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> file.txt </span>
<span class="line">first LINE LINE</span>
<span class="line">second LINE LINE</span>
<span class="line">third LINE LINE</span>
<span class="line">user@debian-server:~/test$ <span class="token function">sed</span> s/LINE/line/ file.txt </span>
<span class="line">first line LINE</span>
<span class="line">second line LINE</span>
<span class="line">third line LINE</span>
<span class="line">user@debian-server:~/test$ <span class="token function">sed</span> s/LINE/line/g file.txt </span>
<span class="line">first line line</span>
<span class="line">second line line</span>
<span class="line">third line line</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Команда <code>d</code> удаляет строки из входного потока.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">sed</span> 2d file.txt </span>
<span class="line">first LINE LINE</span>
<span class="line">third LINE LINE</span>
<span class="line">user@debian-server:~/test$ <span class="token function">sed</span> <span class="token number">2</span>,3d file.txt </span>
<span class="line">first LINE LINE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Команда <code>a</code> добавляет текст после указанной строки.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">sed</span> <span class="token string">&#39;2a\\  subline&#39;</span> file.txt </span>
<span class="line">first LINE LINE</span>
<span class="line">second LINE LINE</span>
<span class="line">  subline</span>
<span class="line">third LINE LINE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Редактор <code>sed</code> поддерживает другие сложные возможности: сложные замены с регулярными выражениями, условные конструкции.</p><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки"><span>Ссылки</span></a></h2><ul><li><a href="https://www.gnu.org/software/sed/manual/sed.html#sed-commands-list" target="_blank" rel="noopener noreferrer">Documentation: sed, a stream editor</a></li></ul>`,13))])}const v=a(r,[["render",o]]),m=JSON.parse('{"path":"/linux-sed.html","title":"Потоковый текстовый редактор sed","lang":"ru-RU","frontmatter":{"title":"Потоковый текстовый редактор sed","date":"2023-12-21","categories":["Linux"],"tags":["sed"]},"git":{"updatedTime":1703165027000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"fe8b1cb6bf64c5d9f1c2a314a7ad1487155552fc","time":1703165027000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"upd"}]},"filePathRelative":"linux-sed.md"}');export{v as comp,m as data};
