"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[9097],{73352:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-44f7d51e",path:"/python-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F-property.html",title:"Python. Функция property()",lang:"ru-RU",frontmatter:{title:"Python. Функция property()",date:"2020-02-20",categories:["Python"],tags:["Python","перевод"]},excerpt:"",headers:[{level:2,title:"Декоратор",slug:"декоратор",children:[]}],filePathRelative:"python-функция-property.md",git:{updatedTime:1692859375e3}}},58189:(n,s,a)=>{a.r(s),a.d(s,{default:()=>k});var e=a(66252),p=a(3577);const t={id:"frontmatter-title",tabindex:"-1"},l=(0,e._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),o=(0,e.Uk)("Перевод статьи "),c={href:"https://www.geeksforgeeks.org/python-property-function/",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("Python | property() function"),r=(0,e.Uk)("."),i=(0,e.uE)('<p>Функция <code>property()</code> создаёт новое свойство. Свойство — это атрибут класса с которым связаны функции чтения и записи.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">property</span><span class="token punctuation">(</span>fget<span class="token punctuation">,</span> fset<span class="token punctuation">,</span> fdel<span class="token punctuation">,</span> doc<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Параметры:</p><ul><li>fget() – используется для получения значения атрибута</li><li>fset() – используется для установки значения атрибута</li><li>fdel() – используется для удаления атрибута</li><li>doc() – строка с документацией (docstring) для атрибута</li></ul><p>Функция <code>property()</code> возвращает свойство с данными геттером, сеттером и deleter.</p><p>Вызванная без аргументов функция <code>property()</code> возвращает свойство без геттера, сеттера и deleter.</p><p>Если не задан <code>doc</code> то <code>property()</code> берёт docstring из геттера.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># Пример использования функции property()</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Alphabet</span><span class="token punctuation">:</span> \n    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span> \n        self<span class="token punctuation">.</span>_value <span class="token operator">=</span> value \n\n    <span class="token keyword">def</span> <span class="token function">getValue</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> \n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Getting value&#39;</span><span class="token punctuation">)</span> \n        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_value \n\n    <span class="token keyword">def</span> <span class="token function">setValue</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span> \n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Setting value to &#39;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span> \n        self<span class="token punctuation">.</span>_value <span class="token operator">=</span> value \n\n    <span class="token keyword">def</span> <span class="token function">delValue</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> \n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Deleting value&#39;</span><span class="token punctuation">)</span> \n        <span class="token keyword">del</span> self<span class="token punctuation">.</span>_value \n\n    value <span class="token operator">=</span> <span class="token builtin">property</span><span class="token punctuation">(</span>getValue<span class="token punctuation">,</span> setValue<span class="token punctuation">,</span> delValue<span class="token punctuation">,</span> <span class="token punctuation">)</span> \n\n<span class="token comment"># passing the value </span>\nx <span class="token operator">=</span> Alphabet<span class="token punctuation">(</span><span class="token string">&#39;GeeksforGeeks&#39;</span><span class="token punctuation">)</span> \n<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>value<span class="token punctuation">)</span> \n\nx<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;GfG&#39;</span>\n\n<span class="token keyword">del</span> x<span class="token punctuation">.</span>value \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Output:\n\nGetting value\nGeeksforGeeks\nSetting value to GfG\nDeleting value\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="декоратор" tabindex="-1"><a class="header-anchor" href="#декоратор" aria-hidden="true">#</a> Декоратор</h2><p>При использовании декоратора сперва укажите что метод <code>value()</code> является свойством класса Alphabet, затем используя имя свойства (<code>value</code>) задайте сеттер, геттер и deleter. Результат работы декоратора <code>@property</code> аналогичен функции <code>property()</code>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># Пример использования декоратора @property</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Alphabet</span><span class="token punctuation">:</span> \n    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span> \n        self<span class="token punctuation">.</span>_value <span class="token operator">=</span> value \n\n    <span class="token decorator annotation punctuation">@property</span>\n    <span class="token keyword">def</span> <span class="token function">value</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> \n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Getting value&#39;</span><span class="token punctuation">)</span> \n        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_value \n\n    <span class="token decorator annotation punctuation">@value<span class="token punctuation">.</span>setter</span> \n    <span class="token keyword">def</span> <span class="token function">value</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span> \n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Setting value to &#39;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span> \n        self<span class="token punctuation">.</span>_value <span class="token operator">=</span> value \n\n    <span class="token decorator annotation punctuation">@value<span class="token punctuation">.</span>deleter</span> \n    <span class="token keyword">def</span> <span class="token function">value</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> \n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Deleting value&#39;</span><span class="token punctuation">)</span> \n        <span class="token keyword">del</span> self<span class="token punctuation">.</span>_value \n\n<span class="token comment"># passing the value </span>\nx <span class="token operator">=</span> Alphabet<span class="token punctuation">(</span><span class="token string">&#39;Peter&#39;</span><span class="token punctuation">)</span> \n<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>value<span class="token punctuation">)</span> \n\nx<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;Diesel&#39;</span>\n\n<span class="token keyword">del</span> x<span class="token punctuation">.</span>value \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Output:\n\nGetting value\nPeter\nSetting value to Diesel\nDeleting value\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Декораторы часто применяются чтобы добавить новые функции в уже существующий код. Это называется метапрограммирование: одна часть программы изменяют другую часть программы во время компиляции. Функцию <code>property()</code> (и декоратор) позволяет изменить наш класс (например, добавить ограничения значений свойства) без необходимости менять код использующий наш класс.</p>',14),k={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("h1",t,[l,(0,e.Uk)(" "+(0,p.zw)(n.$frontmatter.title),1)]),(0,e._)("p",null,[o,(0,e._)("a",c,[u,(0,e.Wm)(a)]),r]),i],64)}}}}]);