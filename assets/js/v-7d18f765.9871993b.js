"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[3037],{15422:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-7d18f765",path:"/python-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%BA%D0%BE%D1%80%D1%82%D0%B5%D0%B6-%D0%BC%D0%BD%D0%BE.html",title:"Python. Структуры данных: список, кортеж, множество, словарь",lang:"ru-RU",frontmatter:{title:"Python. Структуры данных: список, кортеж, множество, словарь",date:"2020-02-08",categories:["Python"],tags:["перевод","intermediate-python"]},excerpt:"",headers:[{level:2,title:"Списки",slug:"списки",children:[]},{level:2,title:"Кортежи",slug:"кортежи",children:[]},{level:2,title:"Множества",slug:"множества",children:[]},{level:2,title:"Словари",slug:"словари",children:[]}],filePathRelative:"python-структуры-данных-список-кортеж-мно.md",git:{updatedTime:1692859375e3}}},59905:(n,s,a)=>{a.r(s),a.d(s,{default:()=>k});var p=a(66252),t=a(3577);const e={id:"frontmatter-title",tabindex:"-1"},o=(0,p._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),c=(0,p.Uk)("Перевод параграфа 3.6 Data Structures из книги "),l={href:"https://leanpub.com/intermediatepython",target:"_blank",rel:"noopener noreferrer"},r=(0,p.Uk)("Intermediate Python"),u=(0,p.Uk)("."),i=(0,p.uE)('<p>Python содержит встроенные типы данных: списки, кортежи, словари.</p><h2 id="списки" tabindex="-1"><a class="header-anchor" href="#списки" aria-hidden="true">#</a> Списки</h2><p>Чтобы создать список используйте квадратные скобки или функцию <code>list()</code>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment"># Пустой список</span>\nmy_list2 <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># Пустой список</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Список сохраняет порядок элементов с которым создаётся или в котором элементы добавляются. Списки являются последовательностями и поддерживают доступ к элементам по индексу, другие свойства последовательностей будут описаны в следующих главах.</p><p>Первый элемент списка находится под индексом 0, последний — на единицу меньше длины списка.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;obi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ike&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nwosu&quot;</span><span class="token punctuation">]</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n<span class="token string">&#39;obi&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\n<span class="token string">&#39;ike&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>\n<span class="token string">&#39;nwosu&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Метод <code>append()</code> добавляет элемент в список.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;obi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ike&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nwosu&quot;</span><span class="token punctuation">]</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;nkem&quot;</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> names\n<span class="token punctuation">[</span><span class="token string">&quot;obi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ike&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nwosu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nkem&quot;</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Метод <code>insert()</code> добавляет элемент в любое место списка.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;obi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ike&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nwosu&quot;</span><span class="token punctuation">]</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;nkem&quot;</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> names\n<span class="token punctuation">[</span><span class="token string">&quot;obi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nkem&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ike&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nwosu&quot;</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Оператор <code>+</code> объединяет два и более списка.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;obi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ike&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nwosu&quot;</span><span class="token punctuation">]</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;James&quot;</span><span class="token punctuation">]</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name <span class="token operator">+</span> name1\n<span class="token punctuation">[</span><span class="token string">&quot;obi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ike&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nwosu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;James&quot;</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Для просмотра всех методов списка запустите команду <code>help(list)</code>.</p><h2 id="кортежи" tabindex="-1"><a class="header-anchor" href="#кортежи" aria-hidden="true">#</a> Кортежи</h2><p>Кортеж тоже является последовательностью и создается элементами разделёнными запятыми:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> companies <span class="token operator">=</span> <span class="token string">&quot;Google&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Microsoft&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tesla&quot;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> companies\n<span class="token punctuation">(</span><span class="token string">&#39;Google&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Microsoft&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tesla&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>При определении непустого кортежа скобки не обязательны, но они становятся обязательными когда кортеж является частью большего выражения. Пустой кортеж создаётся пустой парой скобок:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> companies <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span>companies<span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;tuple&#39;</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>При определении кортежа с одним элементом запятая за ним обязательна.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> company <span class="token operator">=</span> <span class="token string">&quot;Google&quot;</span><span class="token punctuation">,</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span>company<span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;tuple&#39;</span><span class="token operator">&gt;</span>\n\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> company <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&quot;Google&quot;</span><span class="token punctuation">,</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span>company<span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;tuple&#39;</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Пропуск запятой означает что задано обычное значение, не кортеж.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> company <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&quot;Google&quot;</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> company\n<span class="token string">&#39;Google&#39;</span>\n\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span>company<span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;str&#39;</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Кортежи индексируются как списки, но неизменямы.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> companies <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&quot;Google&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Microsoft&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Palantir&quot;</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> companies<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n<span class="token string">&#39;Google&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> companies<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Boeing&quot;</span>\nTraceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>\nFile <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>\nTypeError<span class="token punctuation">:</span> <span class="token string">&#39;tuple&#39;</span> <span class="token builtin">object</span> does <span class="token keyword">not</span> support item assignment\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>В тоже время, если элементом кортежа является изменяемые объект, такой как список, то он может быть изменен.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> companies <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;lockheedMartin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Boeing&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;Google&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Microsoft&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> companies\n<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;lockheedMartin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Boeing&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;Google&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Microsoft&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> companies<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;SpaceX&quot;</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> companies\n<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;lockheedMartin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Boeing&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SpaceX&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;Google&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Microsoft&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="множества" tabindex="-1"><a class="header-anchor" href="#множества" aria-hidden="true">#</a> Множества</h2><p>Множества это неупорядоченные коллекции объектов не содержащие дубликатов. Пустое множество создаётся функцией <code>set()</code> или фигурными скобками <code>{}</code>. Множества неупорядоченны поэтому к элементам множества нельзя обратится по индексу. Множества, за исключением frozen set, изменяемы.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> basket <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;apple&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pear&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;banana&#39;</span><span class="token punctuation">]</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> basket_set <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> basket_set\n<span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> basket_set<span class="token punctuation">.</span>update<span class="token punctuation">(</span>basket<span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> basket_set\n<span class="token punctuation">{</span><span class="token string">&#39;pear&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;banana&#39;</span><span class="token punctuation">}</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> basket_set<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;clementine&quot;</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> basket_set\n<span class="token punctuation">{</span><span class="token string">&#39;pear&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;banana&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;clementine&#39;</span><span class="token punctuation">}</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> basket_set<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> basket_set\n<span class="token punctuation">{</span><span class="token string">&#39;pear&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;banana&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;clementine&#39;</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="словари" tabindex="-1"><a class="header-anchor" href="#словари" aria-hidden="true">#</a> Словари</h2><p>Словарь в Python похож на ассоциативный массив или хеш-таблицу в других языках. Словари индексируются по неизменяемому ключу. Для создания словаря используются фигурные скобки <code>{}</code> или функция <code>dict()</code>. Словарь — неупорядоченное множество пар ключ-значение в которых ключ уникален. Пример инициализации словаря:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>ages <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;obi&quot;</span><span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span>\n<span class="token string">&quot;nkem&quot;</span><span class="token punctuation">:</span> <span class="token number">23</span><span class="token punctuation">,</span>\n<span class="token string">&quot;Chris&quot;</span><span class="token punctuation">:</span> <span class="token number">23</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Основные операции словаря это сохранение значения по ключу и доступ к значению по ключу. Доступ к значению осуществляется через квадратные скобки:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> ages<span class="token punctuation">[</span><span class="token string">&quot;obi&quot;</span><span class="token punctuation">]</span>\n<span class="token number">24</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Словари изменяемы: значения связанные с ключами могут менятся, добавлятся и удалятся.</p><p>Структуры данных Python не ограничиваются приведёнными в этом разделе. Например, модуль <code>collections</code> содержит очереди, деки и другие коллекции. В то же время структуры приведённые в этом разделе используются в большинстве приложений на Python.</p><p>Используйте функцию help с параметром в виде названия типа данных для детального изучения типа.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>help(list)\nhelp(tuple)\nhelp(set)\nhelp(dict)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',39),k={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[(0,p._)("h1",e,[o,(0,p.Uk)(" "+(0,t.zw)(n.$frontmatter.title),1)]),(0,p._)("p",null,[c,(0,p._)("a",l,[r,(0,p.Wm)(a)]),u]),i],64)}}}}]);