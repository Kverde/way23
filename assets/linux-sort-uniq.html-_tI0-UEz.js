import{_ as t,c as r,a as s,b as c,t as d,e,w as i,r as o,o as u,d as l}from"./app-DvfQ69-Y.js";const v={},b={id:"frontmatter-title",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title"},k={class:"table-of-contents"};function h(p,n){const a=o("router-link");return u(),r("div",null,[s("h1",b,[s("a",m,[s("span",null,d(p.$frontmatter.title),1)])]),s("nav",k,[s("ul",null,[s("li",null,[e(a,{to:"#sort"},{default:i(()=>n[0]||(n[0]=[l("sort")])),_:1})]),s("li",null,[e(a,{to:"#uniq"},{default:i(()=>n[1]||(n[1]=[l("uniq")])),_:1})])])]),n[2]||(n[2]=c(`<h2 id="sort" tabindex="-1"><a class="header-anchor" href="#sort"><span>sort</span></a></h2><p>Команда <code>sort</code> сортирует входящую последовательность строк.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> lines.txt </span>
<span class="line">bob</span>
<span class="line">alica</span>
<span class="line">stive</span>
<span class="line">patrik</span>
<span class="line">user@debian-server:~/test$ <span class="token function">cat</span> lines.txt <span class="token operator">|</span> <span class="token function">sort</span></span>
<span class="line">alica</span>
<span class="line">bob</span>
<span class="line">patrik</span>
<span class="line">stive</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Параметр <code>-r</code> сортирует в обратном порядке</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> lines.txt <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span></span>
<span class="line">stive</span>
<span class="line">patrik</span>
<span class="line">bob</span>
<span class="line">alica</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Параметр <code>-n</code> заставляет <code>sort</code> правильно сортировать цифры.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> numbers.txt </span>
<span class="line"><span class="token number">20</span></span>
<span class="line"><span class="token number">4</span></span>
<span class="line"><span class="token number">1</span></span>
<span class="line"><span class="token number">100</span></span>
<span class="line"><span class="token number">15</span></span>
<span class="line"><span class="token number">33</span></span>
<span class="line">user@debian-server:~/test$ <span class="token function">cat</span> numbers.txt <span class="token operator">|</span> <span class="token function">sort</span></span>
<span class="line"><span class="token number">1</span></span>
<span class="line"><span class="token number">100</span></span>
<span class="line"><span class="token number">15</span></span>
<span class="line"><span class="token number">20</span></span>
<span class="line"><span class="token number">33</span></span>
<span class="line"><span class="token number">4</span></span>
<span class="line">user@debian-server:~/test$ <span class="token function">cat</span> numbers.txt <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-n</span></span>
<span class="line"><span class="token number">1</span></span>
<span class="line"><span class="token number">4</span></span>
<span class="line"><span class="token number">15</span></span>
<span class="line"><span class="token number">20</span></span>
<span class="line"><span class="token number">33</span></span>
<span class="line"><span class="token number">100</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uniq" tabindex="-1"><a class="header-anchor" href="#uniq"><span>uniq</span></a></h2><p>Команда <code>uniq</code> возвращает только уникальные строки из входящего потока, но она распознает одинаковые строки только если ни идут друг за другом. Поэтому перед уникализацей строки нужно отсортировать.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> names.txt </span>
<span class="line">bob</span>
<span class="line">alica</span>
<span class="line">bob</span>
<span class="line">stive</span>
<span class="line">patrik</span>
<span class="line">alica</span>
<span class="line">alica</span>
<span class="line">user@debian-server:~/test$ <span class="token function">cat</span> names.txt <span class="token operator">|</span> <span class="token function">uniq</span></span>
<span class="line">bob</span>
<span class="line">alica</span>
<span class="line">bob</span>
<span class="line">stive</span>
<span class="line">patrik</span>
<span class="line">alica</span>
<span class="line">user@debian-server:~/test$ <span class="token function">cat</span> names.txt <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span></span>
<span class="line">alica</span>
<span class="line">bob</span>
<span class="line">patrik</span>
<span class="line">stive</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Можно вывести только строки которые встречались один раз.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> names.txt <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-u</span></span>
<span class="line">patrik</span>
<span class="line">stive</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Или добавить в вывод количество повторений</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> names.txt <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span></span>
<span class="line">      <span class="token number">3</span> alica</span>
<span class="line">      <span class="token number">2</span> bob</span>
<span class="line">      <span class="token number">1</span> patrik</span>
<span class="line">      <span class="token number">1</span> stive</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Вывести только уникальные строки можно и командой <code>sort</code> с параметром <code>-u</code>.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> names.txt <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-u</span></span>
<span class="line">alica</span>
<span class="line">bob</span>
<span class="line">patrik</span>
<span class="line">stive</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16))])}const g=t(v,[["render",h]]),x=JSON.parse('{"path":"/linux-sort-uniq.html","title":"Команды sort и uniq в Linux","lang":"ru-RU","frontmatter":{"title":"Команды sort и uniq в Linux","date":"2023-12-02","categories":["Linux"],"tags":["sort","uniq"]},"git":{"updatedTime":1701533327000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"6eb3bc84118993ab5cde578b8637acc610c38a14","time":1701533327000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"add posts"}]},"filePathRelative":"linux-sort-uniq.md"}');export{g as comp,x as data};
