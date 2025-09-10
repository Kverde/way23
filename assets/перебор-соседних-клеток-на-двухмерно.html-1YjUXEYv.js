import{_ as e,c as a,a as n,b as l,t as d,o as r}from"./app-DvfQ69-Y.js";const c={},p={id:"frontmatter-title",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title"};function u(i,s){return r(),a("div",null,[n("h1",p,[n("a",v,[n("span",null,d(i.$frontmatter.title),1)])]),s[0]||(s[0]=l(`<p>Рассмотрим задачу похожую на игру Сапёр</p><blockquote><p>Дано прямоугольное поле размером n на m. В поле каждая клетка обозначена либо символом точки (&#39;.&#39;) точкой либо звёздочки (&#39;*&#39;). Точка означает пустое поле поле, звёздочка мину. Вывести на экран поле такого же размера где вместо точек указанна цифра - количество мин рядом с этой клеткой.</p></blockquote><p>Далее описан способ перебора соседних клеток у определённой клетки для решения этой задачи. В двух вариантах: когда поле ограниченно, и когда неограниченно - клетка справа поля граничит с клеткой слева, клетки сверху граничат с клетками снизу. Похожий способ можно применять для сходных случаев перебора, например при переборе клеток шахматной доски куда может сходить конь.</p><h3 id="ограниченное-поле" tabindex="-1"><a class="header-anchor" href="#ограниченное-поле"><span>Ограниченное поле</span></a></h3><p>С клетками которые не находятся на границе поля проблем нет, можно просто последовательно перебрать все восемь вариантов <code>field[y - 1][x - 1]</code>, <code>field[y - 1][x]</code> и тд. Но с клетками на границах такое не проходит - будет выход за границу списка. Первый вариант который приходит в голову добавить к каждому варианту условия:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">if y &gt; 0 and x &gt; 0:</span>
<span class="line">    if field\\[y - 1\\]\\[x - 1\\] == &#39;\\*&#39;:</span>
<span class="line">        count += 1</span>
<span class="line"></span>
<span class="line">if y &gt; 0:</span>
<span class="line">    if field\\[y - 1\\]\\[x\\] == &#39;\\*&#39;:</span>
<span class="line">        count += 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>и так все варианты. Решение рабочее, но есть более простой и наглядный вариант. Перебираем в цикле все варианты смещений, от -1 до 1 по x и по y, а затем одним условием проверяем возможна ли проверяемая позиция.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">def countWithBorder(field, w, h, x, y):</span>
<span class="line">    if field\\[y\\]\\[x\\] == &#39;\\*&#39;:</span>
<span class="line">        return &#39;\\*&#39;</span>
<span class="line"></span>
<span class="line">    r = 0</span>
<span class="line">    for dx in range(-1, 2):</span>
<span class="line">        for dy in range(-1, 2):</span>
<span class="line">            if dx == 0 and dy == 0:</span>
<span class="line">                continue</span>
<span class="line"></span>
<span class="line">            curX = x + dx</span>
<span class="line">            curY = y + dy</span>
<span class="line"></span>
<span class="line">            if 0 &lt;= curX &lt; w and 0 &lt;= curY &lt; h:</span>
<span class="line">                if field\\[curY\\]\\[curX\\] == &#39;\\*&#39;:</span>
<span class="line">                    r += 1</span>
<span class="line">    return str(r)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="неограниченное-поле" tabindex="-1"><a class="header-anchor" href="#неограниченное-поле"><span>Неограниченное поле</span></a></h3><p>Для неограниченного поля воспользуемся тем же способом, с применением оператора получения <a href="http://way23.ru/%D0%BE%D1%81%D0%BE%D0%B1%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B9-%D1%86%D0%B5%D0%BB%D0%BE%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE/" target="_blank" rel="noopener noreferrer">остатка</a>. Для решения этой задачи знак остатка должен совпадать со знаком делителя, как в Python. Проверять через <code>if</code> в этом случае вообще ничего не придется, так как у любой клетки есть соседи.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">def countWithoutBorder(field, w, h, x, y):</span>
<span class="line">    if field\\[y\\]\\[x\\] == &#39;\\*&#39;:</span>
<span class="line">        return &#39;\\*&#39;</span>
<span class="line"></span>
<span class="line">    r = 0</span>
<span class="line">    for dx in range(-1, 2):</span>
<span class="line">        for dy in range(-1, 2):</span>
<span class="line">            if dx == 0 and dy == 0:</span>
<span class="line">                continue</span>
<span class="line"></span>
<span class="line">            curX = (x + dx) % w</span>
<span class="line">            curY = (y + dy) % h</span>
<span class="line"></span>
<span class="line">            if field\\[curY\\]\\[curX\\] == &#39;\\*&#39;:</span>
<span class="line">                r += 1</span>
<span class="line">    return str(r)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="полныи-код-примера" tabindex="-1"><a class="header-anchor" href="#полныи-код-примера"><span>Полный код примера</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">w, h = \\[int(i) for i in input().split()\\]</span>
<span class="line"></span>
<span class="line">field = \\[\\]</span>
<span class="line">for i in range(h):</span>
<span class="line">    field.append(input())</span>
<span class="line"></span>
<span class="line">def countWithBorder(field, w, h, x, y):</span>
<span class="line">    if field\\[y\\]\\[x\\] == &#39;\\*&#39;:</span>
<span class="line">        return &#39;\\*&#39;</span>
<span class="line"></span>
<span class="line">    r = 0</span>
<span class="line">    for dx in range(-1, 2):</span>
<span class="line">        for dy in range(-1, 2):</span>
<span class="line">            if dx == 0 and dy == 0:</span>
<span class="line">                continue</span>
<span class="line"></span>
<span class="line">            curX = x + dx</span>
<span class="line">            curY = y + dy</span>
<span class="line"></span>
<span class="line">            if 0 &lt;= curX &lt; w and 0 &lt;= curY &lt; h:</span>
<span class="line">                if field\\[curY\\]\\[curX\\] == &#39;\\*&#39;:</span>
<span class="line">                    r += 1</span>
<span class="line">    return str(r)</span>
<span class="line"></span>
<span class="line">def countWithoutBorder(field, w, h, x, y):</span>
<span class="line">    if field\\[y\\]\\[x\\] == &#39;\\*&#39;:</span>
<span class="line">        return &#39;\\*&#39;</span>
<span class="line"></span>
<span class="line">    r = 0</span>
<span class="line">    for dx in range(-1, 2):</span>
<span class="line">        for dy in range(-1, 2):</span>
<span class="line">            if dx == 0 and dy == 0:</span>
<span class="line">                continue</span>
<span class="line"></span>
<span class="line">            curX = (x + dx) % w</span>
<span class="line">            curY = (y + dy) % h</span>
<span class="line"></span>
<span class="line">            if field\\[curY\\]\\[curX\\] == &#39;\\*&#39;:</span>
<span class="line">                r += 1</span>
<span class="line">    return str(r)</span>
<span class="line"></span>
<span class="line">def printFiled(filed, h):</span>
<span class="line">    for y in range(h):</span>
<span class="line">        print(resultFiled\\[y\\])</span>
<span class="line"></span>
<span class="line">print()</span>
<span class="line"></span>
<span class="line">resultFiled = \\[\\]</span>
<span class="line">for y in range(h):</span>
<span class="line">    resultFiled.append(&#39;&#39;)</span>
<span class="line">    for x in range(w):</span>
<span class="line">        resultFiled\\[y\\] = resultFiled\\[y\\] + countWithBorder(field, w, h, x, y)</span>
<span class="line">printFiled(resultFiled, h)</span>
<span class="line">print()</span>
<span class="line"></span>
<span class="line">resultFiled = \\[\\]</span>
<span class="line">for y in range(h):</span>
<span class="line">    resultFiled.append(&#39;&#39;)</span>
<span class="line">    for x in range(w):</span>
<span class="line">        resultFiled\\[y\\] = resultFiled\\[y\\] + countWithoutBorder(field, w, h, x, y)</span>
<span class="line">printFiled(resultFiled, h)</span>
<span class="line">print()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">4 5</span>
<span class="line">\\*...</span>
<span class="line">\\*...</span>
<span class="line">.\\*..</span>
<span class="line">....</span>
<span class="line">\\*...</span>
<span class="line"></span>
<span class="line">\\*200</span>
<span class="line">\\*310</span>
<span class="line">2\\*10</span>
<span class="line">2210</span>
<span class="line">\\*100</span>
<span class="line"></span>
<span class="line">\\*303</span>
<span class="line">\\*312</span>
<span class="line">2\\*11</span>
<span class="line">2211</span>
<span class="line">\\*202</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14))])}const m=e(c,[["render",u]]),b=JSON.parse('{"path":"/%D0%BF%D0%B5%D1%80%D0%B5%D0%B1%D0%BE%D1%80-%D1%81%D0%BE%D1%81%D0%B5%D0%B4%D0%BD%D0%B8%D1%85-%D0%BA%D0%BB%D0%B5%D1%82%D0%BE%D0%BA-%D0%BD%D0%B0-%D0%B4%D0%B2%D1%83%D1%85%D0%BC%D0%B5%D1%80%D0%BD%D0%BE.html","title":"Перебор соседних клеток на двухмерном поле","lang":"ru-RU","frontmatter":{"title":"Перебор соседних клеток на двухмерном поле","date":"2017-09-21","categories":["Python","Алгоритмы"],"tags":["Python"]},"git":{"updatedTime":1752043801000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":2,"url":"https://github.com/Petro"}],"changelog":[{"hash":"c3020fc8cf02a71c22fe91676d867a3f376c3a51","time":1752043801000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"upd"},{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"перебор-соседних-клеток-на-двухмерно.md"}');export{m as comp,b as data};
