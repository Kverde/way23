import{_ as e,c as i,a as s,b as l,t,o as p}from"./app-DvfQ69-Y.js";const c={},d={id:"frontmatter-title",tabindex:"-1"},r={class:"header-anchor",href:"#frontmatter-title"};function v(a,n){return p(),i("div",null,[s("h1",d,[s("a",r,[s("span",null,t(a.$frontmatter.title),1)])]),n[0]||(n[0]=l(`<p>Программа <code>diff</code> показывает различия между двумя файлами. Различия можно понимать как описания тог, что нужно сделать, чтобы изменить первый так, чтобы он стал идентичен второму. Возьмем три файла, два из них одинаковые а третий отличается и сравним их командой <code>diff</code>.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> names1.txt </span>
<span class="line">bob</span>
<span class="line">alica</span>
<span class="line">piter</span>
<span class="line">david</span>
<span class="line">user@debian-server:~/test$ <span class="token function">cat</span> names2.txt </span>
<span class="line">bob</span>
<span class="line">alica</span>
<span class="line">piter</span>
<span class="line">david</span>
<span class="line">user@debian-server:~/test$ <span class="token function">cat</span> names3.txt </span>
<span class="line">bob</span>
<span class="line">alika</span>
<span class="line">piter</span>
<span class="line">ethan</span>
<span class="line">david</span>
<span class="line">user@debian-server:~/test$ <span class="token function">diff</span> names1.txt names2.txt </span>
<span class="line">user@debian-server:~/test$ <span class="token function">diff</span> names1.txt names3.txt </span>
<span class="line">2c2</span>
<span class="line"><span class="token operator">&lt;</span> alica</span>
<span class="line">---</span>
<span class="line"><span class="token operator">&gt;</span> alika</span>
<span class="line">3a4</span>
<span class="line"><span class="token operator">&gt;</span> ethan</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Команда <code>diff</code> поддерживает несколько форматов вывода, например, можно вывести строки файлов в виде двух колонок, различия будут помечены специальными символами.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">diff</span> <span class="token parameter variable">-y</span> names1.txt names3.txt </span>
<span class="line">bob				  				bob</span>
<span class="line">alica							  <span class="token operator">|</span>	alika</span>
<span class="line">piter								piter</span>
<span class="line">							      <span class="token operator">&gt;</span>	ethan</span>
<span class="line">david								david</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Примеры вывода в других форматах:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">diff</span> <span class="token parameter variable">-u</span> names1.txt names3.txt </span>
<span class="line">--- names1.txt	<span class="token number">2023</span>-12-03 06:01:32.572236158 <span class="token parameter variable">-0500</span></span>
<span class="line">+++ names3.txt	<span class="token number">2023</span>-12-03 06:04:25.722884812 <span class="token parameter variable">-0500</span></span>
<span class="line">@@ -1,4 +1,5 @@</span>
<span class="line"> bob</span>
<span class="line"><span class="token parameter variable">-alica</span></span>
<span class="line">+alika</span>
<span class="line"> piter</span>
<span class="line">+ethan</span>
<span class="line"> david</span>
<span class="line">user@debian-server:~/test$ <span class="token function">diff</span> <span class="token parameter variable">-ed</span> names1.txt names3.txt </span>
<span class="line">3a</span>
<span class="line">ethan</span>
<span class="line"><span class="token builtin class-name">.</span></span>
<span class="line">2c</span>
<span class="line">alika</span>
<span class="line"><span class="token builtin class-name">.</span></span>
<span class="line">user@debian-server:~/test$ <span class="token function">man</span> <span class="token function">diff</span></span>
<span class="line">user@debian-server:~/test$ <span class="token function">diff</span> <span class="token parameter variable">-n</span> names1.txt names3.txt </span>
<span class="line">d2 <span class="token number">1</span></span>
<span class="line">a2 <span class="token number">1</span></span>
<span class="line">alika</span>
<span class="line">a3 <span class="token number">1</span></span>
<span class="line">ethan</span>
<span class="line">user@debian-server:~/test$ <span class="token function">diff</span> <span class="token parameter variable">-c</span> names1.txt names3.txt </span>
<span class="line">*** names1.txt	<span class="token number">2023</span>-12-03 06:01:32.572236158 <span class="token parameter variable">-0500</span></span>
<span class="line">--- names3.txt	<span class="token number">2023</span>-12-03 06:04:25.722884812 <span class="token parameter variable">-0500</span></span>
<span class="line">***************</span>
<span class="line">*** <span class="token number">1,4</span> ****</span>
<span class="line">  bob</span>
<span class="line"><span class="token operator">!</span> alica</span>
<span class="line">  piter</span>
<span class="line">  david</span>
<span class="line">--- <span class="token number">1,5</span> ----</span>
<span class="line">  bob</span>
<span class="line"><span class="token operator">!</span> alika</span>
<span class="line">  piter</span>
<span class="line">+ ethan</span>
<span class="line">  david</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6))])}const u=e(c,[["render",v]]),b=JSON.parse('{"path":"/linix-diff.html","title":"Команда diff в Linux","lang":"ru-RU","frontmatter":{"title":"Команда diff в Linux","date":"2023-12-03","categories":["Linux"],"tags":["diff"]},"git":{"updatedTime":1701603846000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"23e843e489f31726fe1aeac7841469fc2f2147eb","time":1701603846000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"add posts"}]},"filePathRelative":"linix-diff.md"}');export{u as comp,b as data};
