"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[4001],{99401:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-5713fafa",path:"/triangle-quest.html",title:"Triangle Quest",lang:"ru-RU",frontmatter:{title:"Triangle Quest",date:"2019-10-27",categories:["Python","Алгоритмы"],tags:["математика"]},excerpt:"",headers:[],filePathRelative:"triangle-quest.md",git:{updatedTime:1692859375e3}}},44026:(n,s,a)=>{a.r(s),a.d(s,{default:()=>m});var e=a(66252),t=a(3577);const p={id:"frontmatter-title",tabindex:"-1"},o=(0,e._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=(0,e.Uk)("Разберём две математические задачи с Hackerrank: "),c={href:"https://www.hackerrank.com/challenges/python-quest-1/problem",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("Triangle Quest"),i=(0,e.Uk)(" и "),u={href:"https://www.hackerrank.com/challenges/triangle-quest-2/problem",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("Triangle Quest 2"),d=(0,e.Uk)("."),b=(0,e.uE)('<p>Дано число от 1 до 9 и нужно вывести треугольники из чисел заданного вида. Для числа 4 в первой задаче:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1\n22\n333\n4444\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>а во второй:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1\n121\n12321\n1234321\n123454321\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Для вывода допустимо использовать только один цикл, процедуру <code>print</code> и математические операции:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span> <span class="token comment"># можно менять только эту строку</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Чтобы решить эти задачи, нужно научится генерировать строку треугольника по её номеру.</p><p>Количество цифр в строке треугольника пропорционально номеру строки. Возводя 10 в степень мы получаем число с заданным количество цифр. Но степень 10 нам не подходит, вот если бы можно было сгенерировать число заданной длины состоящее из единиц, то умножив его на номер строки мы бы получили требуемую строку.</p><p>Каким образом можно получить из числа 100 число 11? Из 100 вычитаем единицу и получаем 99, остаётся только поделить 99 на 9. Этот способ позволяет генерировать числа состоящие из единиц заданной длины.</p><p>Осталось собрать всё вместе:</p><table><thead><tr><th>Формула</th><th>i = 4</th></tr></thead><tbody><tr><td><code>10 ** i</code></td><td><code>10 ** 4 = 10000</code></td></tr><tr><td><code>10 ** i - 1</code></td><td><code>10000 - 1 = 9999</code></td></tr><tr><td><code>(10 ** i - 1) // 9</code></td><td><code>9999 // 9 = 1111</code></td></tr><tr><td><code>((10 ** i - 1) // 9) * i</code></td><td><code>1111 * 4 = 4444</code></td></tr></tbody></table><p>Решение можно упростить, убрав вычитание единицы, так как используется целочисленное деление. Но с вычитанием решение выглядит нагляднее.</p><p>После решения первой, вторая задача решается совсем просто. Достаточно заметить закономерность умножения чисел состоящих из единиц на самих себя:</p><ul><li><code>11 * 11 = 121</code></li><li><code>111 * 111 = 12321</code></li><li><code>1111 * 1111 = 1234321</code></li></ul><p>Решение на Python:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">**</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">9</span> <span class="token operator">*</span> i<span class="token punctuation">)</span>\n\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">**</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',16),m={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("h1",p,[o,(0,e.Uk)(" "+(0,t.zw)(n.$frontmatter.title),1)]),(0,e._)("p",null,[l,(0,e._)("a",c,[r,(0,e.Wm)(a)]),i,(0,e._)("a",u,[k,(0,e.Wm)(a)]),d]),b],64)}}}}]);