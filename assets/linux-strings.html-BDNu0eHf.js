import{_ as a,c as i,a as s,b as l,t,o as r}from"./app-DvfQ69-Y.js";const d={},c={id:"frontmatter-title",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title"};function o(e,n){return r(),i("div",null,[s("h1",c,[s("a",p,[s("span",null,t(e.$frontmatter.title),1)])]),n[0]||(n[0]=l(`<p>Программа <code>strings</code> достаёт все текстовые строки из файла. Если её нет в системе, нужно установить пакет <code>binutils</code>.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> binutils</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Для текстовых файлов, <code>strings</code> работает очевидным образом.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> lines.txt </span>
<span class="line">bob</span>
<span class="line">alica</span>
<span class="line">stive</span>
<span class="line">patrik</span>
<span class="line">user@debian-server:~/test$ strings lines.txt </span>
<span class="line">alica</span>
<span class="line">stive</span>
<span class="line">patrik</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Строка <code>bob</code> не отобразилась, так как по умолчанию <code>strings</code> выводит только строки больше или равные 4 символом, это поведение переопределяется параметром <code>-n</code>.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ strings <span class="token parameter variable">-n</span> <span class="token number">2</span> lines.txt </span>
<span class="line">bob</span>
<span class="line">alica</span>
<span class="line">stive</span>
<span class="line">patrik</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Команда <code>strings</code> применяется чтобы получать набор строк из бинарных файлов.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ strings /bin/passwd <span class="token operator">|</span> <span class="token function">head</span></span>
<span class="line">/lib64/ld-linux-x86-64.so.2</span>
<span class="line">_ITM_deregisterTMCloneTable</span>
<span class="line">audit_open</span>
<span class="line">__gmon_start__</span>
<span class="line">_ITM_registerTMCloneTable</span>
<span class="line">pam_start</span>
<span class="line">pam_strerror</span>
<span class="line">pam_chauthtok</span>
<span class="line">pam_end</span>
<span class="line">misc_conv</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8))])}const v=a(d,[["render",o]]),m=JSON.parse('{"path":"/linux-strings.html","title":"Программа strings в Linux","lang":"ru-RU","frontmatter":{"title":"Программа strings в Linux","date":"2023-12-02","categories":["Linux"],"tags":["strings"]},"git":{"updatedTime":1701533327000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"6eb3bc84118993ab5cde578b8637acc610c38a14","time":1701533327000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"add posts"}]},"filePathRelative":"linux-strings.md"}');export{v as comp,m as data};
