import{_ as e,c as i,a as n,b as a,t as d,o as r}from"./app-DvfQ69-Y.js";const c={},p={id:"frontmatter-title",tabindex:"-1"},t={class:"header-anchor",href:"#frontmatter-title"};function v(l,s){return r(),i("div",null,[n("h1",p,[n("a",t,[n("span",null,d(l.$frontmatter.title),1)])]),s[0]||(s[0]=a(`<p>Алгоритм <a href="https://en.wikipedia.org/wiki/Flood_fill" target="_blank" rel="noopener noreferrer">Flood fill</a> возвращает замкнутую область внутри массива. Кроме областей связанных с графикой, алгоритм может применяется для поиска замкнутых областей в игре Го и для сходных задач.</p><p>Алгоритм основан на рекурсии. Проверяется заданный элемент массива, затем процедура вызывается для всех соседних элементов:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">Flood_fill(node)</span>
<span class="line">  Если node не подходит по условиям то завершить функцию</span>
<span class="line"></span>
<span class="line">  Обработать node</span>
<span class="line"></span>
<span class="line">  Вызывать Flood_fill для всех соседних с node элементов</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Реализация на Python:</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python"><pre><code><span class="line">F_SPACE = 0</span>
<span class="line">F_WALL = 1</span>
<span class="line"></span>
<span class="line">field = [</span>
<span class="line">    [0, 1, 1, 1],</span>
<span class="line">    [1, 0, 0, 0],</span>
<span class="line">    [0, 0, 1, 1],</span>
<span class="line">    [0, 1, 0, 0]</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">def flood_fill(field, x, y, w, h,  res):</span>
<span class="line">    if x &lt; 0 or y &lt; 0 or x &gt;= w or y &gt;= h:</span>
<span class="line">        return</span>
<span class="line"></span>
<span class="line">    if field[y][x] == F_WALL:</span>
<span class="line">        return</span>
<span class="line"></span>
<span class="line">    if (x, y) in res:</span>
<span class="line">        return</span>
<span class="line"></span>
<span class="line">    res.add((x, y))</span>
<span class="line"></span>
<span class="line">    flood_fill(field, x - 1, y, w, h, res)</span>
<span class="line">    flood_fill(field, x + 1, y, w, h, res)</span>
<span class="line">    flood_fill(field, x, y + 1, w, h, res)</span>
<span class="line">    flood_fill(field, x, y - 1, w, h, res)</span>
<span class="line"></span>
<span class="line">res = set()</span>
<span class="line"></span>
<span class="line">res.clear()</span>
<span class="line">flood_fill(field, 0, 0, 4, 4, res)</span>
<span class="line">print(res) # {(0, 0)}</span>
<span class="line"></span>
<span class="line">res.clear()</span>
<span class="line">flood_fill(field, 1, 0, 4, 4, res)</span>
<span class="line">print(res) # set()</span>
<span class="line"></span>
<span class="line">res.clear()</span>
<span class="line">flood_fill(field, 1, 1, 4, 4, res)</span>
<span class="line">print(res) # {(1, 2), (3, 1), (2, 1), (1, 1), (0, 3), (0, 2)}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Алгоритм легко модифицируется для случая с трёхмерным массивом или если нужно учитывать соседние элементы по диагоналям.</p>`,6))])}const m=e(c,[["render",v]]),u=JSON.parse('{"path":"/%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC-flood-fill-%D0%BD%D0%B0-python.html","title":"Алгоритм Flood fill на Python","lang":"ru-RU","frontmatter":{"title":"Алгоритм Flood fill на Python","date":"2020-03-19","categories":["Python"],"tags":["Алгоритмы"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"алгоритм-flood-fill-на-python.md"}');export{m as comp,u as data};
