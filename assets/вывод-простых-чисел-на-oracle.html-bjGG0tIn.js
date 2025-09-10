import{_ as e,c as p,a,b as l,t as i,o as m}from"./app-DvfQ69-Y.js";const c={},t={id:"frontmatter-title",tabindex:"-1"},r={class:"header-anchor",href:"#frontmatter-title"};function d(n,s){return m(),p("div",null,[a("h1",t,[a("a",r,[a("span",null,i(n.$frontmatter.title),1)])]),s[0]||(s[0]=l(`<p>Задача с <a href="https://www.hackerrank.com/challenges/print-prime-numbers/problem" target="_blank" rel="noopener noreferrer">Hackerrank</a>:</p><blockquote><p>Напишите запрос выводящий простые числа меньшие или равные 1000.</p></blockquote><p>Пример вывода постых чисел меньших или равных 10:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">2&amp;3&amp;5&amp;7</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="решение" tabindex="-1"><a class="header-anchor" href="#решение"><span>Решение</span></a></h2><p>Разложим задачу на подзадачи:</p><ol><li>Вывести список чисел от 2 до 1000</li><li>Отфильтровать из списка только простые числа</li><li>Объединить результат в одну строку</li></ol><p>Для вывода списка чисел воспользуемся <code>connect by</code></p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre><code><span class="line"><span class="token keyword">select</span> </span>
<span class="line">  <span class="token keyword">level</span> <span class="token operator">+</span> <span class="token number">1</span> n </span>
<span class="line"><span class="token keyword">from</span> </span>
<span class="line">  dual </span>
<span class="line"><span class="token keyword">connect</span> <span class="token keyword">by</span> </span>
<span class="line">  <span class="token keyword">level</span> <span class="token operator">&lt;=</span> <span class="token number">999</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В результате появляется список строк с числами от 2 до 1000. Теперь нужно оставить только простые числа. Простые числа делятся только на единицу и на самих себя. Проверим это с помощью подзапроса. Так как в подзапросе понадобится тот же список чисел то вынесем его в <code>with</code>:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre><code><span class="line"><span class="token keyword">with</span> nums <span class="token keyword">as</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token keyword">select</span> </span>
<span class="line">  <span class="token keyword">level</span> <span class="token operator">+</span> <span class="token number">1</span> n </span>
<span class="line"><span class="token keyword">from</span> </span>
<span class="line">  dual </span>
<span class="line"><span class="token keyword">connect</span> <span class="token keyword">by</span> </span>
<span class="line">  <span class="token keyword">level</span> <span class="token operator">&lt;=</span> <span class="token number">999</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> nums</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>И добавим подзапрос:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre><code><span class="line"><span class="token keyword">with</span> nums <span class="token keyword">as</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token keyword">select</span> </span>
<span class="line">  <span class="token keyword">level</span> <span class="token operator">+</span> <span class="token number">1</span> n </span>
<span class="line"><span class="token keyword">from</span> </span>
<span class="line">  dual </span>
<span class="line"><span class="token keyword">connect</span> <span class="token keyword">by</span> </span>
<span class="line">  <span class="token keyword">level</span> <span class="token operator">&lt;=</span> <span class="token number">999</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">select</span> </span>
<span class="line">  <span class="token operator">*</span> </span>
<span class="line"><span class="token keyword">from</span> </span>
<span class="line">  nums n1</span>
<span class="line"><span class="token keyword">where</span> </span>
<span class="line">  <span class="token operator">not</span> <span class="token keyword">exists</span> <span class="token punctuation">(</span><span class="token keyword">select</span> </span>
<span class="line">                <span class="token operator">*</span> </span>
<span class="line">              <span class="token keyword">from</span> </span>
<span class="line">                nums n2 </span>
<span class="line">              <span class="token keyword">where</span> </span>
<span class="line">                n2<span class="token punctuation">.</span>n <span class="token operator">&lt;&gt;</span> n1<span class="token punctuation">.</span>n </span>
<span class="line">                <span class="token operator">and</span> <span class="token function">mod</span><span class="token punctuation">(</span>n1<span class="token punctuation">.</span>n<span class="token punctuation">,</span> n2<span class="token punctuation">.</span>n<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">              <span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Теперь осталось только соединить строки в одну. Для этого воспользуемся функцией <code>listagg</code>:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">with nums as</span>
<span class="line">(select </span>
<span class="line">  level + 1 n </span>
<span class="line">from </span>
<span class="line">  dual </span>
<span class="line">connect by </span>
<span class="line">  level &lt;= 999)</span>
<span class="line"></span>
<span class="line">select </span>
<span class="line">  listagg(n, &#39;&amp;&#39;) within group (order by n) n </span>
<span class="line">from </span>
<span class="line">  nums n1</span>
<span class="line">where </span>
<span class="line">  not exists (select </span>
<span class="line">                * </span>
<span class="line">              from </span>
<span class="line">                nums n2 </span>
<span class="line">              where </span>
<span class="line">                n2.n &lt;&gt; n1.n </span>
<span class="line">                and mod(n1.n, n2.n) = 0</span>
<span class="line">              )</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В результате получаем:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">2&amp;3&amp;5&amp;7&amp;11&amp;13&amp;17&amp;19&amp;23&amp;29&amp;31&amp;37&amp;41&amp;43&amp;47&amp;53&amp;59&amp;61&amp;67&amp;71&amp;73&amp;79&amp;83&amp;89&amp;97&amp;101&amp;103&amp;107&amp;109&amp;113&amp;127&amp;131&amp;137&amp;139&amp;149&amp;151&amp;157&amp;163&amp;167&amp;173&amp;179&amp;181&amp;191&amp;193&amp;197&amp;199&amp;211&amp;223&amp;227&amp;229&amp;233&amp;239&amp;241&amp;251&amp;257&amp;263&amp;269&amp;271&amp;277&amp;281&amp;283&amp;293&amp;307&amp;311&amp;313&amp;317&amp;331&amp;337&amp;347&amp;349&amp;353&amp;359&amp;367&amp;373&amp;379&amp;383&amp;389&amp;397&amp;401&amp;409&amp;419&amp;421&amp;431&amp;433&amp;439&amp;443&amp;449&amp;457&amp;461&amp;463&amp;467&amp;479&amp;487&amp;491&amp;499&amp;503&amp;509&amp;521&amp;523&amp;541&amp;547&amp;557&amp;563&amp;569&amp;571&amp;577&amp;587&amp;593&amp;599&amp;601&amp;607&amp;613&amp;617&amp;619&amp;631&amp;641&amp;643&amp;647&amp;653&amp;659&amp;661&amp;673&amp;677&amp;683&amp;691&amp;701&amp;709&amp;719&amp;727&amp;733&amp;739&amp;743&amp;751&amp;757&amp;761&amp;769&amp;773&amp;787&amp;797&amp;809&amp;811&amp;821&amp;823&amp;827&amp;829&amp;839&amp;853&amp;857&amp;859&amp;863&amp;877&amp;881&amp;883&amp;887&amp;907&amp;911&amp;919&amp;929&amp;937&amp;941&amp;947&amp;953&amp;967&amp;971&amp;977&amp;983&amp;991&amp;997</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,17))])}const u=e(c,[["render",d]]),v=JSON.parse('{"path":"/%D0%B2%D1%8B%D0%B2%D0%BE%D0%B4-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%8B%D1%85-%D1%87%D0%B8%D1%81%D0%B5%D0%BB-%D0%BD%D0%B0-oracle.html","title":"Вывод простых чисел на Oracle","lang":"ru-RU","frontmatter":{"title":"Вывод простых чисел на Oracle","date":"2020-04-17","categories":["Базы данных"],"tags":["sql","oracle"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"вывод-простых-чисел-на-oracle.md"}');export{u as comp,v as data};
