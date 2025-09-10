import{_ as e,c as l,a as n,b as i,t,o as p}from"./app-DvfQ69-Y.js";const c={},o={id:"frontmatter-title",tabindex:"-1"},r={class:"header-anchor",href:"#frontmatter-title"};function d(a,s){return p(),l("div",null,[n("h1",o,[n("a",r,[n("span",null,t(a.$frontmatter.title),1)])]),s[0]||(s[0]=i(`<p><a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">MongoDB</a> — документная база данных. Данные хранятся в виде коллекций (аналог таблиц в реляционной БД) и документов (аналог строк таблицах в реляционной БД). Документы — JSON объекты.</p><h2 id="запуск" tabindex="-1"><a class="header-anchor" href="#запуск"><span>Запуск</span></a></h2><p>Запустить MongoDB проще всего через <a href="https://www.mongodb.com/resources/products/compatibilities/docker" target="_blank" rel="noopener noreferrer">docker</a>.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">docker run -d --name mongodb \\</span>
<span class="line">    -p 27017:27017 \\</span>
<span class="line">    mongodb/mongodb-community-server:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb-shell-mongosh" tabindex="-1"><a class="header-anchor" href="#mongodb-shell-mongosh"><span>MongoDB Shell (mongosh)</span></a></h2><p>MongoDB содержит консольное приложение для управление базой данных <a href="https://www.mongodb.com/docs/mongodb-shell/" target="_blank" rel="noopener noreferrer">MongoDB Shell</a>.</p><p>Для запуска MongoDB Shell внутри контейнера введите</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mongodb mongosh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Пример использования:</p><div class="language-mongosh line-numbers-mode" data-highlighter="prismjs" data-ext="mongosh"><pre><code><span class="line">test&gt; show dbs</span>
<span class="line">admin   40.00 KiB</span>
<span class="line">config  12.00 KiB</span>
<span class="line">local   40.00 KiB</span>
<span class="line">test&gt; use mydb</span>
<span class="line">switched to db mydb</span>
<span class="line">mydb&gt; db.users.insertMany([</span>
<span class="line">... { name: &quot;Mike&quot;, age: 19, verified: true },</span>
<span class="line">... { name: &quot;Bob&quot;, age: 31, email: &quot;bob@gmail.com&quot; }</span>
<span class="line">... ])</span>
<span class="line">{</span>
<span class="line">  acknowledged: true,</span>
<span class="line">  insertedIds: {</span>
<span class="line">    &#39;0&#39;: ObjectId(&#39;677a772ab01230826d567a2b&#39;),</span>
<span class="line">    &#39;1&#39;: ObjectId(&#39;677a772ab01230826d567a2c&#39;)</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">mydb&gt; db.users.find()</span>
<span class="line">[</span>
<span class="line">  {</span>
<span class="line">    _id: ObjectId(&#39;677a772ab01230826d567a2b&#39;),</span>
<span class="line">    name: &#39;Mike&#39;,</span>
<span class="line">    age: 19,</span>
<span class="line">    verified: true</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    _id: ObjectId(&#39;677a772ab01230826d567a2c&#39;),</span>
<span class="line">    name: &#39;Bob&#39;,</span>
<span class="line">    age: 31,</span>
<span class="line">    email: &#39;bob@gmail.com&#39;</span>
<span class="line">  }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="пример-на-python" tabindex="-1"><a class="header-anchor" href="#пример-на-python"><span>Пример на Python</span></a></h2><p>Пример использования библиотеки <a href="https://github.com/mongodb/mongo-python-driver" target="_blank" rel="noopener noreferrer">pymongo</a> (<a href="https://pymongo.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">документация</a>):</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">from</span> pymongo <span class="token keyword">import</span> MongoClient</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Подключаемся к MongoDB (по умолчанию на localhost:27017)</span></span>
<span class="line">client <span class="token operator">=</span> MongoClient<span class="token punctuation">(</span><span class="token string">&#39;debian-server&#39;</span><span class="token punctuation">,</span> <span class="token number">27017</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Создаем базу данных</span></span>
<span class="line">db <span class="token operator">=</span> client<span class="token punctuation">[</span><span class="token string">&#39;mydatabase&#39;</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Создаем коллекцию</span></span>
<span class="line">collection <span class="token operator">=</span> db<span class="token punctuation">[</span><span class="token string">&#39;mycollection&#39;</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Вставляем документ в коллекцию</span></span>
<span class="line">document <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;city&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;New York&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">collection<span class="token punctuation">.</span>insert_one<span class="token punctuation">(</span>document<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Извлекаем документ из коллекции</span></span>
<span class="line">result <span class="token operator">=</span> collection<span class="token punctuation">.</span>find_one<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Alice&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Выводим результат</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Закрываем соединение</span></span>
<span class="line">client<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ввод программы:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{&#39;_id&#39;: ObjectId(&#39;677a8e6b91551c7424c1c6c0&#39;), &#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 30, &#39;city&#39;: &#39;New York&#39;}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки"><span>Ссылки</span></a></h2><ul><li><a href="https://www.youtube.com/watch?v=xDNxTbwKROo" target="_blank" rel="noopener noreferrer">MongoDB: Все, что нужно знать за 30 минут</a></li><li><a href="https://mongoplayground.net" target="_blank" rel="noopener noreferrer">MongoPlayground.net</a></li><li><a href="https://www.youtube.com/watch?v=HdYAQC69Kg0" target="_blank" rel="noopener noreferrer">Развенчиваем мифы о MongoDB. Павел Перекалов</a></li><li><a href="https://www.youtube.com/watch?v=AJNvjctEj6c" target="_blank" rel="noopener noreferrer">Петр Зайцев — MySQL и MongoDB - когда что лучше использовать?</a></li><li><a href="https://www.youtube.com/watch?v=ZLOFOxsDJIY" target="_blank" rel="noopener noreferrer">Остаться в живых. Крупный проект на одной NoSQL / Айк Саргсян (Юла)</a></li></ul>`,17))])}const m=e(c,[["render",d]]),b=JSON.parse('{"path":"/db-mongodb.html","title":"Базы данных: MongoDB","lang":"ru-RU","frontmatter":{"title":"Базы данных: MongoDB","date":"2025-01-05","categories":["Базы данных"],"tags":["MongoDB","Документная БД"]},"git":{"updatedTime":1736090436000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":2,"url":"https://github.com/Petro"}],"changelog":[{"hash":"c1aba343375c8c27f0722e03c4b08535b188fac8","time":1736090436000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"upd"},{"hash":"dbd6a22371a47f662239ec05bdcebed4b6aa704b","time":1736085339000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"upd"}]},"filePathRelative":"db-mongodb.md"}');export{m as comp,b as data};
