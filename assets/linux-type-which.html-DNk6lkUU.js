import{_ as e,c as i,a as s,b as l,t as r,o as c}from"./app-DvfQ69-Y.js";const p={},d={id:"frontmatter-title",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title"};function t(a,n){return c(),i("div",null,[s("h1",d,[s("a",u,[s("span",null,r(a.$frontmatter.title),1)])]),n[0]||(n[0]=l(`<p>При запуске любой команды в Bash может запуститься внутренняя команда Bash или внешняя программа. Для того чтобы определить, что запустится используется команда <code>type</code>.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~$ <span class="token builtin class-name">type</span> <span class="token function">ls</span></span>
<span class="line"><span class="token function">ls</span> is aliased to \`ls <span class="token parameter variable">--color</span><span class="token operator">=</span>auto&#39;</span>
<span class="line">user@debian-server:~$ <span class="token builtin class-name">type</span> <span class="token builtin class-name">cd</span></span>
<span class="line"><span class="token builtin class-name">cd</span> is a shell <span class="token builtin class-name">builtin</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Параметр <code>-t</code> заставляет команду выводить описание в виде одного слова.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~$ <span class="token builtin class-name">type</span> <span class="token parameter variable">-t</span> <span class="token function">ls</span></span>
<span class="line"><span class="token builtin class-name">alias</span></span>
<span class="line">user@debian-server:~$ <span class="token builtin class-name">type</span> <span class="token parameter variable">-t</span> <span class="token builtin class-name">cd</span></span>
<span class="line"><span class="token builtin class-name">builtin</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>А параметр <code>-a</code> показывает все возможные варианты</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~$ <span class="token builtin class-name">type</span> <span class="token parameter variable">-a</span> <span class="token function">ls</span></span>
<span class="line"><span class="token function">ls</span> is aliased to \`ls <span class="token parameter variable">--color</span><span class="token operator">=</span>auto&#39;</span>
<span class="line"><span class="token function">ls</span> is /usr/bin/ls</span>
<span class="line"><span class="token function">ls</span> is /bin/ls</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Команда <code>which</code> выполняет похожую функцию — выводит путь к фалу который будет запущен при запуске команды. <code>which</code> — внешняя программа, поэтому она не работает со внутренними командами баш и не показывает синонимы, в отличии от команду <code>type</code>.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~$ <span class="token function">which</span> <span class="token function">ls</span></span>
<span class="line">/usr/bin/ls</span>
<span class="line">user@debian-server:~$ <span class="token function">which</span> <span class="token parameter variable">-a</span> <span class="token function">ls</span></span>
<span class="line">/usr/bin/ls</span>
<span class="line">/bin/ls</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ещё одна команда <code>whereis</code>, кроме пути к файлу, показывает файлы <code>man</code> и файлы с исходным кодом, при их наличии.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~$ <span class="token function">whereis</span> <span class="token function">ls</span></span>
<span class="line">ls: /usr/bin/ls /usr/share/man/man1/ls.1.gz</span>
<span class="line">user@debian-server:~$ <span class="token function">whereis</span> <span class="token function">tar</span></span>
<span class="line">tar: /usr/bin/tar /usr/share/man/man1/tar.1.gz</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>С помощью параметров можно выводить только файлы разного типа: <code>-b</code> — исполняемые файлы, <code>-m</code> — файлы <code>man</code> и <code>s</code> — файлы исходного кода.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~$ <span class="token function">whereis</span> <span class="token parameter variable">-b</span> <span class="token function">tar</span></span>
<span class="line">tar: /usr/bin/tar</span>
<span class="line">user@debian-server:~$ <span class="token function">whereis</span> <span class="token parameter variable">-m</span> <span class="token function">tar</span></span>
<span class="line">tar: /usr/share/man/man1/tar.1.gz</span>
<span class="line">user@debian-server:~$ <span class="token function">whereis</span> <span class="token parameter variable">-s</span> <span class="token function">tar</span></span>
<span class="line">tar:</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Параметр <code>-l</code> заставляет команду <code>whereis</code> вывести все пути в которых она производит поиск.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~$ <span class="token function">whereis</span> <span class="token parameter variable">-l</span></span>
<span class="line">bin: /usr/bin</span>
<span class="line">bin: /usr/sbin</span>
<span class="line">bin: /usr/lib/x86_64-linux-gnu</span>
<span class="line">bin: /usr/lib</span>
<span class="line">bin: /usr/lib32</span>
<span class="line">bin: /usr/lib64</span>
<span class="line">bin: /etc</span>
<span class="line">bin: /usr/games</span>
<span class="line">bin: /usr/local/bin</span>
<span class="line">bin: /usr/local/sbin</span>
<span class="line">bin: /usr/local/etc</span>
<span class="line">bin: /usr/local/lib</span>
<span class="line">bin: /usr/local/games</span>
<span class="line">bin: /usr/include</span>
<span class="line">bin: /usr/local</span>
<span class="line">bin: /usr/libexec</span>
<span class="line">bin: /usr/share</span>
<span class="line">man: /usr/share/man/ko</span>
<span class="line">man: /usr/share/man/sr</span>
<span class="line">man: /usr/share/man/fr</span>
<span class="line">man: /usr/share/man/man7</span>
<span class="line">man: /usr/share/man/uk</span>
<span class="line">man: /usr/share/man/pl</span>
<span class="line">man: /usr/share/man/es</span>
<span class="line">man: /usr/share/man/pt</span>
<span class="line">man: /usr/share/man/id</span>
<span class="line">man: /usr/share/man/man6</span>
<span class="line">man: /usr/share/man/nl</span>
<span class="line">man: /usr/share/man/man4</span>
<span class="line">man: /usr/share/man/pt_BR</span>
<span class="line">man: /usr/share/man/man5</span>
<span class="line">man: /usr/share/man/zh_TW</span>
<span class="line">man: /usr/share/man/sv</span>
<span class="line">man: /usr/share/man/man2</span>
<span class="line">man: /usr/share/man/zh_CN</span>
<span class="line">man: /usr/share/man/fr.UTF-8</span>
<span class="line">man: /usr/share/man/cs</span>
<span class="line">man: /usr/share/man/ro</span>
<span class="line">man: /usr/share/man/da</span>
<span class="line">man: /usr/share/man/it</span>
<span class="line">man: /usr/share/man/tr</span>
<span class="line">man: /usr/share/man/man3</span>
<span class="line">man: /usr/share/man/fr.ISO8859-1</span>
<span class="line">man: /usr/share/man/ru</span>
<span class="line">man: /usr/share/man/ja</span>
<span class="line">man: /usr/share/man/fi</span>
<span class="line">man: /usr/share/man/de</span>
<span class="line">man: /usr/share/man/man1</span>
<span class="line">man: /usr/share/man/sl</span>
<span class="line">man: /usr/share/man/man8</span>
<span class="line">man: /usr/share/man/hu</span>
<span class="line">man: /usr/share/info</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14))])}const v=e(p,[["render",t]]),b=JSON.parse('{"path":"/linux-type-which.html","title":"Как определить откуда запускается команда в bash (type, which, whereis)","lang":"ru-RU","frontmatter":{"title":"Как определить откуда запускается команда в bash (type, which, whereis)","date":"2023-12-26","categories":["Linux"],"tags":["type","which","whereis"]},"git":{"updatedTime":1703582944000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"f40b205303c7d6a7d11eb31cf5254d7da5705c34","time":1703582944000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"upd"}]},"filePathRelative":"linux-type-which.md"}');export{v as comp,b as data};
