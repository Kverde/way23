"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[8298],{83933:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-442a21d0",path:"/python-%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5.html",title:"Python. Наследование",lang:"ru-RU",frontmatter:{title:"Python. Наследование",date:"2019-10-31",categories:["Python"],tags:["ооп","intermediate-python"]},excerpt:"",headers:[{level:2,title:"Ключевое слово super",slug:"ключевое-слово-super",children:[]},{level:2,title:"Множественное наследование",slug:"множественное-наследование",children:[]},{level:2,title:"Множественном наследование и super",slug:"множественном-наследование-и-super",children:[]}],filePathRelative:"python-наследование.md",git:{updatedTime:1692859375e3}}},54598:(n,s,a)=>{a.r(s),a.d(s,{default:()=>k});var p=a(66252),t=a(3577);const e={id:"frontmatter-title",tabindex:"-1"},o=(0,p._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),c=(0,p.Uk)("Перевод параграфа 6.4 Inheritance из книги "),l={href:"https://leanpub.com/intermediatepython",target:"_blank",rel:"noopener noreferrer"},u=(0,p.Uk)("Intermediate Python"),r=(0,p.Uk)("."),i=(0,p.uE)('<p>Наследование — это механизм создания новых классов. Наследники специализируют или изменяют базовые классы добавляя в них новую функциональность. Python поддерживает множественное наследование как C++. Пример одиночного наследования в Python:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Account</span><span class="token punctuation">:</span>\n    <span class="token triple-quoted-string string">&quot;&quot;&quot;base class for representing user accounts&quot;&quot;&quot;</span>\n    num_accounts <span class="token operator">=</span> <span class="token number">0</span>\n\n    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> balance<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name\n        self<span class="token punctuation">.</span>balance <span class="token operator">=</span> balance\n        Account<span class="token punctuation">.</span>num_accounts <span class="token operator">+=</span> <span class="token number">1</span>\n\n    <span class="token keyword">def</span> <span class="token function">del_account</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        Account<span class="token punctuation">.</span>num_accounts <span class="token operator">-=</span> <span class="token number">1</span>\n\n    <span class="token keyword">def</span> <span class="token function">__getattr__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token triple-quoted-string string">&quot;&quot;&quot;handle attribute reference for non-existent attribute&quot;&quot;&quot;</span>\n        <span class="token keyword">return</span> <span class="token string">&quot;Hey I dont see any attribute called {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n\n    <span class="token keyword">def</span> <span class="token function">deposit</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> amt<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        self<span class="token punctuation">.</span>balance <span class="token operator">=</span> self<span class="token punctuation">.</span>balance <span class="token operator">+</span> amt\n\n    <span class="token keyword">def</span> <span class="token function">withdraw</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> amt<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        self<span class="token punctuation">.</span>balance <span class="token operator">=</span> self<span class="token punctuation">.</span>balance <span class="token operator">-</span> amt\n\n    <span class="token keyword">def</span> <span class="token function">inquiry</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token string">&quot;Name={}, balance={}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>balance<span class="token punctuation">)</span>\n\n<span class="token keyword">class</span> <span class="token class-name">SavingsAccount</span><span class="token punctuation">(</span>Account<span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> balance<span class="token punctuation">,</span> rate<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">,</span> balance<span class="token punctuation">)</span>\n        self<span class="token punctuation">.</span>rate <span class="token operator">=</span> rate\n\n    <span class="token keyword">def</span> <span class="token function">__repr__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token string">&quot;SavingsAccount({}, {}, {})&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>balance<span class="token punctuation">,</span> self<span class="token punctuation">.</span>rate<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>acct <span class="token operator">=</span> SavingsAccount<span class="token punctuation">(</span><span class="token string">&quot;Obi&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token builtin">repr</span><span class="token punctuation">(</span>acct<span class="token punctuation">)</span>\nSavingsAccount<span class="token punctuation">(</span>Obi<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="ключевое-слово-super" tabindex="-1"><a class="header-anchor" href="#ключевое-слово-super" aria-hidden="true">#</a> Ключевое слово super</h2><p>В одиночной иерархии наследования <code>super</code> используется для ссылки на родительский класс без явного указания на него. Это похоже на метод <code>super</code> в Java. <code>super</code> применяется при переопределении метода, когда требуется вызвать родительскую версию переопределяемого метода. В примере выше, метод <code>__init__</code> в классе <code>SavingsAccount</code> переопределён, но с помощью <code>super</code> вызывается метод <code>__init__</code> родительского класса. При множественном наследовании <code>super</code> играет более важную роль.</p><h2 id="множественное-наследование" tabindex="-1"><a class="header-anchor" href="#множественное-наследование" aria-hidden="true">#</a> Множественное наследование</h2><p>В множественном наследовании класс может иметь несколько родительских классов. Одной из сложностей такого вида наследования является поиск нужной версии метода при его вызове. Представим что класс <code>D</code> наследник классов <code>B</code> и <code>C</code> и нужно вызывать метод родительского класса когда оба родителя имеют этот метод. В Python эта ситуация решается алгоритмом Method Resolution Order (MRO), он определяет как производится поиск метода в классе и всех базовых классах. Порядок методов вычисляется в момент определения класса и сохраняется в поле класса <code>__mro__</code>.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">def</span> <span class="token function">meth</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token string">&quot;A&quot;</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">def</span> <span class="token function">meth</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token string">&quot;B&quot;</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">def</span> <span class="token function">meth</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token string">&quot;C&quot;</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">class</span> <span class="token class-name">D</span><span class="token punctuation">(</span>B<span class="token punctuation">,</span> C<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">def</span> <span class="token function">meth</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token string">&quot;X&quot;</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> D<span class="token punctuation">.</span>__mro__\n<span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;__main__.D&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;__main__.B&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;__main__.C&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;__main__.A&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;object&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Алгоритм MRO состоит из двух шагов: поиск в глубину слева направо по всем классам в иерархии и удаление повторявшихся классов, кроме последнего вхождения.</p><p>В примере выше поиск в глубину по всем классам выдаёт такой список классов:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token punctuation">[</span>D<span class="token punctuation">,</span> B<span class="token punctuation">,</span> A<span class="token punctuation">,</span> C<span class="token punctuation">,</span> A<span class="token punctuation">,</span> <span class="token builtin">object</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Затем удаление повторяющихся классов, кроме последнего вхождения:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token punctuation">[</span>D<span class="token punctuation">,</span> B<span class="token punctuation">,</span> C<span class="token punctuation">,</span> A<span class="token punctuation">,</span> <span class="token builtin">object</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Обратите внимание что если предок явно не задан, то класс наследуются от класса <code>object</code>.</p><h2 id="множественном-наследование-и-super" tabindex="-1"><a class="header-anchor" href="#множественном-наследование-и-super" aria-hidden="true">#</a> Множественном наследование и super</h2><p>Рассмотрим иерархию из прошлого примера. Класс <code>A</code> объявляет метод переопределяемый классами <code>B</code>, <code>C</code> и <code>D</code>. Предположим есть требование чтобы все методы вызывались, они сохраняют данные в каждом классе где объявлены, пропуск вызова приведёт к потере данных. Такое требование реализуется с помощью метода <code>super</code> и MRO:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n    <span class="token keyword">def</span> <span class="token function">meth</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token string">&quot;save A&#39;s data&quot;</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;saving A&#39;s data&quot;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n    <span class="token keyword">def</span> <span class="token function">meth</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token string">&quot;save B&#39;s data&quot;</span>\n        <span class="token builtin">super</span><span class="token punctuation">(</span>B<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>meth<span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;saving B&#39;s data&quot;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n    <span class="token keyword">def</span> <span class="token function">meth</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token string">&quot;save C&#39;s data&quot;</span>\n        <span class="token builtin">super</span><span class="token punctuation">(</span>C<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>meth<span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;saving C&#39;s data&quot;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">class</span> <span class="token class-name">D</span><span class="token punctuation">(</span>B<span class="token punctuation">,</span> C<span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n    <span class="token keyword">def</span> <span class="token function">meth</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token string">&quot;save D&#39;s data&quot;</span>\n        <span class="token builtin">super</span><span class="token punctuation">(</span>D<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>meth<span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;saving D&#39;s data&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>Предположим метод <code>self.meth()</code> вызывается из экземпляра класса <code>D</code>. Тогда <code>super(D, self).meth()</code> найдёт и вызовет метод <code>B.meth(self)</code>, так как <code>B</code> первый базовый класс следующий за <code>D</code> в <code>D.__mro__</code> и <code>B</code> определяет метод <code>meth</code>.</p><p>Теперь <code>B.meth</code> вызывает <code>super(B, self).meth()</code> и так как <code>self</code> является экземпляром класса <code>D</code>, следующий класс после <code>B</code> это <code>C</code> (<code>D.__mro__ = [D, B, C, A]</code>) и поиск <code>meth</code> продолжается.</p><p>Следующим вызывается <code>C.meth</code>, который в свою очередь вызывает <code>super(C, self).meth()</code>.</p><p>Следующий после <code>C</code> класс в MRO это <code>A</code> и вызывается метод <code>A.meth</code>. Это исходное определение <code>meth</code>, поэтому вызов <code>super</code> не производится.</p><p>Используя <code>super</code> и MRO, интерпретатор находит и вызывает все версии метода <code>meth</code> реализованные в каждом класс иерархии.</p><p>Несмотря на всё сказанное, множественного наследования лучше избегать, потому, что для более сложных иерархий, вызовы могут быть намного сложнее чем в приведённых примерах.</p>',24),k={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[(0,p._)("h1",e,[o,(0,p.Uk)(" "+(0,t.zw)(n.$frontmatter.title),1)]),(0,p._)("p",null,[c,(0,p._)("a",l,[u,(0,p.Wm)(a)]),r]),i],64)}}}}]);