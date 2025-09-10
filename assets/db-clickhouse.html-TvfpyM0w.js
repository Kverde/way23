import{_ as e,c as i,a as s,b as l,t as p,o as c}from"./app-DvfQ69-Y.js";const t={},r={id:"frontmatter-title",tabindex:"-1"},d={class:"header-anchor",href:"#frontmatter-title"};function o(a,n){return c(),i("div",null,[s("h1",r,[s("a",d,[s("span",null,p(a.$frontmatter.title),1)])]),n[0]||(n[0]=l(`<p><a href="https://clickhouse.com" target="_blank" rel="noopener noreferrer">ClickHouse</a> (<a href="https://github.com/ClickHouse/ClickHouse" target="_blank" rel="noopener noreferrer">GitHub</a>) — колоночная база данных. ClickHouse используется для больших хранилищ данных для ускорения аналитических запросов. ClickHouse направлен на OLAP.</p><p>Для запросов ClickHouse использует свой язык похожий на SQL.</p><h2 id="запуск" tabindex="-1"><a class="header-anchor" href="#запуск"><span>Запуск</span></a></h2><p>Запустить ClickHouse проще всего через <a href="https://hub.docker.com/r/clickhouse/clickhouse-server/" target="_blank" rel="noopener noreferrer">docker</a>.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> clickhouse-server <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">8123</span>:8123 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">9000</span>:9000 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--ulimit</span> <span class="token assign-left variable">nofile</span><span class="token operator">=</span><span class="token number">262144</span>:262144 <span class="token punctuation">\\</span></span>
<span class="line">  yandex/clickhouse-server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clickhouse-client" tabindex="-1"><a class="header-anchor" href="#clickhouse-client"><span>clickhouse-client</span></a></h2><p>ClickHouser предоставляет консольную программу для управления базой данных <a href="https://clickhouse.com/docs/en/integrations/sql-clients/cli" target="_blank" rel="noopener noreferrer">clickhouse-client</a>.</p><p>Для запуска в контейнере docker Наберите команду</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> clickhouse-server clickhouse-client</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Пример работы. Создаём базу данных:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">b0e4b554a392 :) CREATE DATABASE IF NOT EXISTS newdb;</span>
<span class="line"></span>
<span class="line">CREATE DATABASE IF NOT EXISTS newdb</span>
<span class="line"></span>
<span class="line">Query id: 5b5867ab-ab57-4bd5-a902-78e7a1b75fd9</span>
<span class="line"></span>
<span class="line">Ok.</span>
<span class="line"></span>
<span class="line">0 rows in set. Elapsed: 0.023 sec. </span>
<span class="line"></span>
<span class="line">b0e4b554a392 :) USE newdb;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Подключается к базе данных:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">USE newdb</span>
<span class="line"></span>
<span class="line">Query id: 62ba7f5f-9479-4734-bad8-27b2563028fe</span>
<span class="line"></span>
<span class="line">Ok.</span>
<span class="line"></span>
<span class="line">0 rows in set. Elapsed: 0.003 sec.</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Создаём таблицу в базе данных:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">b0e4b554a392 :) CREATE TABLE user (</span>
<span class="line">                    id UInt32,</span>
<span class="line">                    name String,</span>
<span class="line">                    created_at DateTime</span>
<span class="line">                ) ENGINE = MergeTree()</span>
<span class="line">                ORDER BY id;</span>
<span class="line"></span>
<span class="line">CREATE TABLE user</span>
<span class="line">(</span>
<span class="line">    \`id\` UInt32,</span>
<span class="line">    \`name\` String,</span>
<span class="line">    \`created_at\` DateTime</span>
<span class="line">)</span>
<span class="line">ENGINE = MergeTree</span>
<span class="line">ORDER BY id</span>
<span class="line"></span>
<span class="line">Query id: cd391f57-f554-4033-b733-aab58a3d2513</span>
<span class="line"></span>
<span class="line">Ok.</span>
<span class="line"></span>
<span class="line">0 rows in set. Elapsed: 0.029 sec. </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Выводим все таблицы в базе данных:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">b0e4b554a392 :) SHOW TABLES;</span>
<span class="line"></span>
<span class="line">SHOW TABLES</span>
<span class="line"></span>
<span class="line">Query id: b9678529-dcd8-478f-92eb-406487b29094</span>
<span class="line"></span>
<span class="line">┌─name─┐</span>
<span class="line">│ user │</span>
<span class="line">└──────┘</span>
<span class="line"></span>
<span class="line">1 rows in set. Elapsed: 0.009 sec.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="пример-на-python" tabindex="-1"><a class="header-anchor" href="#пример-на-python"><span>Пример на Python</span></a></h2><p>Пример использования библиотеки <a href="https://github.com/mymarilyn/clickhouse-driver" target="_blank" rel="noopener noreferrer">clickhouse-driver</a> (<a href="https://clickhouse-driver.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">документация</a>):</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">from</span> clickhouse_driver <span class="token keyword">import</span> Client</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Создаем подключение к ClickHouse</span></span>
<span class="line">client <span class="token operator">=</span> Client<span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">9000</span><span class="token punctuation">)</span>  <span class="token comment"># Замените &#39;localhost&#39; на адрес вашего сервера ClickHouse</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Создаем таблицу (если она еще не существует)</span></span>
<span class="line">client<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token triple-quoted-string string">&#39;&#39;&#39;</span>
<span class="line">CREATE TABLE IF NOT EXISTS test_table (</span>
<span class="line">    id UInt32,</span>
<span class="line">    name String,</span>
<span class="line">    age UInt8</span>
<span class="line">) ENGINE = MergeTree()</span>
<span class="line">ORDER BY id</span>
<span class="line">&#39;&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Добавляем данные в таблицу</span></span>
<span class="line">data <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;Charlie&#39;</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">client<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;INSERT INTO test_table (id, name, age) VALUES&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Выбираем данные из таблицы</span></span>
<span class="line">result <span class="token operator">=</span> client<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;SELECT * FROM test_table&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Выводим результаты</span></span>
<span class="line"><span class="token keyword">for</span> row <span class="token keyword">in</span> result<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Закрываем соединение (необязательно, так как клиент автоматически закрывает соединение при завершении работы)</span></span>
<span class="line">client<span class="token punctuation">.</span>disconnect<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ввод программы:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">(1, &#39;Alice&#39;, 30)</span>
<span class="line">(2, &#39;Bob&#39;, 25)</span>
<span class="line">(3, &#39;Charlie&#39;, 35)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки"><span>Ссылки</span></a></h2><ul><li><a href="https://www.youtube.com/watch?v=PLMSA_gDdyM" target="_blank" rel="noopener noreferrer">Что нужно знать об архитектуре ClickHouse / Алексей Зателепин (Яндекс)</a></li><li><a href="https://www.youtube.com/watch?v=vbhSrZxm66E" target="_blank" rel="noopener noreferrer">005. Как работает ClickHouse, лекция в ШАД</a> — детально про алгоритмы и способ хранения данных</li></ul>`,24))])}const v=e(t,[["render",o]]),m=JSON.parse('{"path":"/db-clickhouse.html","title":"Базы данных: ClickHouse","lang":"ru-RU","frontmatter":{"title":"Базы данных: ClickHouse","date":"2025-01-05","categories":["Базы данных"],"tags":["ClickHouse","Колоночные БД"]},"git":{"updatedTime":1736157487000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":2,"url":"https://github.com/Petro"}],"changelog":[{"hash":"8588a7e549464ca14ae4b7337b3fbc00272cbf72","time":1736157487000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"upd"},{"hash":"75fe6462099fe7cb741be5c1f863750c8d94a531","time":1736152187000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"upd"}]},"filePathRelative":"db-clickhouse.md"}');export{v as comp,m as data};
