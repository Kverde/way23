"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[6990],{41810:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-7d1da286",path:"/%D0%B2%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-python-%D0%B4%D0%BB%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B-%D1%81-%D0%BA%D0%BE%D0%BB%D0%BB.html",title:"Встроенные функции Python для работы с коллекциями (min, max, sum, all, any, enumerate)",lang:"ru-RU",frontmatter:{title:"Встроенные функции Python для работы с коллекциями (min, max, sum, all, any, enumerate)",date:"2019-11-12",categories:["Python"]},excerpt:"",headers:[{level:2,title:"max",slug:"max",children:[]},{level:2,title:"min",slug:"min",children:[]},{level:2,title:"sum(iterable, /, start=0)",slug:"sum-iterable-start-0",children:[]},{level:2,title:"all(iterable)",slug:"all-iterable",children:[]},{level:2,title:"any(iterable)",slug:"any-iterable",children:[]},{level:2,title:"enumerate(iterable, start=0)",slug:"enumerate-iterable-start-0",children:[]},{level:2,title:"Ссылки",slug:"ссылки",children:[]}],filePathRelative:"встроенные-функции-python-для-работы-с-колл.md",git:{updatedTime:1692859375e3}}},18435:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var p=a(66252),t=a(3577);const e={id:"frontmatter-title",tabindex:"-1"},o=(0,p._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),c=(0,p.uE)('<h2 id="max" tabindex="-1"><a class="header-anchor" href="#max" aria-hidden="true">#</a> max</h2><ul><li>max(iterable, *[, key, default])</li><li>max(arg1, arg2, *args[, key])</li></ul><p>Функция возвращает максимальный элемент. Две версии функции отличаются аргументами: с итерируемым объектом и со списком аргументов.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 8</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 8</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Если коллекция пустая возникнет исключение</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># ValueError</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Именованный аргумент <strong>default</strong> используется чтобы избежать исключения. Функция <strong>max</strong> возвращает <strong>default</strong> только если коллекция пустая:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 0</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 3</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Порядок элементов изменяется аргументом <strong>key</strong>. Переданная в <strong>key</strong> функция применяется к каждому элементу. Результат функции используется для определения порядка элементов:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">neg</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> <span class="token operator">-</span>n\n\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">=</span>neg<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="min" tabindex="-1"><a class="header-anchor" href="#min" aria-hidden="true">#</a> min</h2><ul><li>min(iterable, *[, key, default])</li><li>min(arg1, arg2, *args[, key])</li></ul><p>Возвращает минимальный элемент. Две версии функции отличаются аргументами: с итерируемым объектом и со списком аргументов.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 2</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">min</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Если коллекция пустая возникнет исключение</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># ValueError</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Именованный аргумент <strong>default</strong> используется чтобы избежать исключения. Функция <strong>min</strong> возвращает <strong>default</strong> только если коллекция пустая:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 0</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Порядок элементов изменяется аргументом <strong>key</strong>. Переданная в <strong>key</strong> функция применяется к каждому элементу. Результат функции используется для определения порядка элементов:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">neg</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> <span class="token operator">-</span>n\n\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">=</span>neg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 8</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="sum-iterable-start-0" tabindex="-1"><a class="header-anchor" href="#sum-iterable-start-0" aria-hidden="true">#</a> sum(iterable, /, start=0)</h2><p>Возвращает сумму элементов <strong>iterable</strong>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 6</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1.0</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 0</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Необязательный аргумент <strong>start</strong> задаёт начальное значение:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> start<span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 8</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> start<span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="all-iterable" tabindex="-1"><a class="header-anchor" href="#all-iterable" aria-hidden="true">#</a> all(iterable)</h2><p>Возвращает <strong>True</strong> если все элементы <strong>iterable</strong> равны <strong>True</strong>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>\n\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Другие типы данных преобразуются к <strong>bool</strong>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Если <strong>iterable</strong> пустой, то функция вернёт <strong>True</strong>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Функция <strong>all()</strong> эквивалента следующему коду:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">all</span><span class="token punctuation">(</span>iterable<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">for</span> element <span class="token keyword">in</span> iterable<span class="token punctuation">:</span>\n        <span class="token keyword">if</span> <span class="token keyword">not</span> element<span class="token punctuation">:</span>\n            <span class="token keyword">return</span> <span class="token boolean">False</span>\n    <span class="token keyword">return</span> <span class="token boolean">True</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="any-iterable" tabindex="-1"><a class="header-anchor" href="#any-iterable" aria-hidden="true">#</a> any(iterable)</h2><p>Возвращает <strong>True</strong> если хотя бы один из элементов <strong>iterable</strong> равен <strong>True</strong>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">any</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">any</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>\n\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">any</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Другие типы данных преобразуются к <strong>bool</strong>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">any</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">any</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">any</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Если <strong>iterable</strong> пустой, то функция вернёт <strong>False</strong>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">any</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Функция <strong>any()</strong> эквивалента следующему коду:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">any</span><span class="token punctuation">(</span>iterable<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">for</span> element <span class="token keyword">in</span> iterable<span class="token punctuation">:</span>\n        <span class="token keyword">if</span> element<span class="token punctuation">:</span>\n            <span class="token keyword">return</span> <span class="token boolean">True</span>\n    <span class="token keyword">return</span> <span class="token boolean">False</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="enumerate-iterable-start-0" tabindex="-1"><a class="header-anchor" href="#enumerate-iterable-start-0" aria-hidden="true">#</a> enumerate(iterable, start=0)</h2><p>Перебирает коллекцию и возвращает одновременно элемент и его индекс. С помощью <strong>enumerate()</strong> такой цикл</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>\n<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token comment"># 0 a</span>\n<span class="token comment"># 1 b</span>\n<span class="token comment"># 2 c</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>заменяется на</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>\n<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>\n\n<span class="token comment"># 0 a</span>\n<span class="token comment"># 1 b</span>\n<span class="token comment"># 2 c</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>enumerate()</strong> возвращает не коллекцию, а интегрируемый объект, это нужно учитывать при выводе:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token builtin">enumerate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment"># (0, &#39;a&#39;) (1, &#39;b&#39;) (2, &#39;c&#39;)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Аргумент <strong>start</strong> задаёт индекс начала отчёта:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token builtin">enumerate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> start <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> \n<span class="token comment"># (3, &#39;a&#39;) (4, &#39;b&#39;) (5, &#39;c&#39;)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Функция <strong>enumerate()</strong> эквивалента следующему коду:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">enumerate</span><span class="token punctuation">(</span>sequence<span class="token punctuation">,</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    n <span class="token operator">=</span> start\n    <span class="token keyword">for</span> elem <span class="token keyword">in</span> sequence<span class="token punctuation">:</span>\n        <span class="token keyword">yield</span> n<span class="token punctuation">,</span> elem\n        n <span class="token operator">+=</span> <span class="token number">1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки" aria-hidden="true">#</a> Ссылки</h2>',55),l={href:"https://docs.python.org/3/library/functions.html",target:"_blank",rel:"noopener noreferrer"},u=(0,p.Uk)("Built-in Functions"),i={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[(0,p._)("h1",e,[o,(0,p.Uk)(" "+(0,t.zw)(n.$frontmatter.title),1)]),c,(0,p._)("ul",null,[(0,p._)("li",null,[(0,p._)("a",l,[u,(0,p.Wm)(a)])])])],64)}}}}]);