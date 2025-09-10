import{_ as a,c as i,a as s,b as l,t as r,o as t}from"./app-DvfQ69-Y.js";const d={},p={id:"frontmatter-title",tabindex:"-1"},c={class:"header-anchor",href:"#frontmatter-title"};function m(n,e){return t(),i("div",null,[s("h1",p,[s("a",c,[s("span",null,r(n.$frontmatter.title),1)])]),e[0]||(e[0]=l(`<p>Другой варианта алгоритма <a href="https://way23.ru/%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC-%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B2%D1%81%D0%B5%D1%85-%D0%BF%D0%BE%D0%B4%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2/" target="_blank" rel="noopener noreferrer">генерации всех подмножеств</a>. Сначала пример.</p><p>Дано множество из 5 элементов.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[1, 2, 3, 4, 5]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Возьмём пятизначное двоичное число и поставим в соответствие каждой цифре этого числа один из элементов исходного множества. Таким способом мы можем задавать подмножества исходного пятиэелементного множества.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">10101 = [1, 3, 5]</span>
<span class="line">00011 = [4, 5]</span>
<span class="line">00000 = []</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Если взять все числа от 00000 до 11111 то они будут соответствовать всем подмножествам исходного множества. В десятичной системе эти числа соответствуют числам от 0 до [latex]2^5 - 1[/latex].</p><p>Исходя из этих размышлений, формируем алгоритм:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line"># функция возвращает множество  </span>
<span class="line"># из элементов set отмеченных единицей в mask</span>
<span class="line">get_elements(set, mask)</span>
<span class="line"></span>
<span class="line">n = длина исходного множества</span>
<span class="line">result = пустое множество</span>
<span class="line">Для каждого i в диапазоне от 0 до 2**n - 1</span>
<span class="line">  bits = число i в двоичной форме</span>
<span class="line">  new_element = get_elements(исходное множество, bits)</span>
<span class="line">  добавить new_element в result </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Реализация на Python</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python"><pre><code><span class="line">source_set = [1, 2, 3]</span>
<span class="line">print(source_set)</span>
<span class="line"></span>
<span class="line">def get_elements(source, mask):</span>
<span class="line">    result = []</span>
<span class="line">    for n in range(len(source)):</span>
<span class="line">        if mask &amp; 1 == 1:</span>
<span class="line">            result.append(source[n])</span>
<span class="line">        mask = mask &gt;&gt; 1</span>
<span class="line">    return result</span>
<span class="line"></span>
<span class="line">def power_set(source):</span>
<span class="line">    result = []</span>
<span class="line"></span>
<span class="line">    for i in range(2 ** len(source)):</span>
<span class="line">        result.append(get_elements(source, i))</span>
<span class="line"></span>
<span class="line">    return result</span>
<span class="line"></span>
<span class="line">print(power_set(source_set))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Для работы с битам используются <a href="https://docs.python.org/3/library/stdtypes.html#bitwise-operations-on-integer-types" target="_blank" rel="noopener noreferrer">битовые операции</a> с целыми числами.</p>`,11))])}const v=a(d,[["render",m]]),o=JSON.parse('{"path":"/%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D1%81%D0%B5%D1%85-%D0%BF%D0%BE%D0%B4%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E.html","title":"Генерация всех подмножеств с помощью двоичного представления числа","lang":"ru-RU","frontmatter":{"title":"Генерация всех подмножеств с помощью двоичного представления числа","date":"2019-09-22","categories":["Алгоритмы"],"tags":["Python","множества"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"генерация-всех-подмножеств-с-помощью.md"}');export{v as comp,o as data};
