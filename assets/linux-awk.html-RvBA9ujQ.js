import{_ as e,c as i,a as s,b as l,t as p,o as t}from"./app-DvfQ69-Y.js";const c={},r={id:"frontmatter-title",tabindex:"-1"},d={class:"header-anchor",href:"#frontmatter-title"};function u(a,n){return t(),i("div",null,[s("h1",r,[s("a",d,[s("span",null,p(a.$frontmatter.title),1)])]),n[0]||(n[0]=l(`<p>Код на языке программирования awk состоит не просто из последовательного набора операторов, как в императивном языке, а из набора правил, каждое правило состоит из шаблона и команды.</p><div class="language-awk line-numbers-mode" data-highlighter="prismjs" data-ext="awk"><pre><code><span class="line">шаблон <span class="token punctuation">{</span>команда<span class="token punctuation">}</span></span>
<span class="line">шаблон <span class="token punctuation">{</span>команда<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Правила разделяются новой строкой — на одной строке одно правило. awk — интерпретируемый язык, поэтому его можно запускать непосредственно из Bash. В команде, шаблон или правило могут отсутствовать, но не оба одновременно. В следующей программе отсутствует правило, а одна команда выводит каждую строку.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> text.txt </span>
<span class="line">one</span>
<span class="line">two</span>
<span class="line">three</span>
<span class="line">user@debian-server:~/test$ <span class="token function">awk</span> <span class="token string">&#39;{print $0}&#39;</span> text.txt </span>
<span class="line">one</span>
<span class="line">two</span>
<span class="line">three</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Первым параметром программы <code>awk</code> передается код программы на языке awk, а остальные параметры — файлы для обработки. Программу можно перенести в отдельный файл и запускать <code>awk</code> с параметром <code>-f</code>.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> script.awk </span>
<span class="line"><span class="token punctuation">{</span> print <span class="token variable">$0</span> <span class="token punctuation">}</span></span>
<span class="line">user@debian-server:~/test$ <span class="token function">awk</span> <span class="token parameter variable">-f</span> script.awk text.txt </span>
<span class="line">one</span>
<span class="line">two</span>
<span class="line">three</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Интерпретатор awk последовательно читает входные файлы, разбивает их на строки и каждую строку сравнивает с шаблоном в каждом правиле. Если шаблон подходит, то выполняется команда из этого правила. Если шаблон не указан, как в примере выше, то команда выполняется для каждой строки. Следующая программа содержит два одинаковых правила, поэтому на выходе строки дублируются.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> script.awk </span>
<span class="line"><span class="token punctuation">{</span> print <span class="token variable">$0</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">{</span> print <span class="token variable">$0</span> <span class="token punctuation">}</span></span>
<span class="line">user@debian-server:~/test$ <span class="token function">awk</span> <span class="token parameter variable">-f</span> script.awk text.txt </span>
<span class="line">one</span>
<span class="line">one</span>
<span class="line">two</span>
<span class="line">two</span>
<span class="line">three</span>
<span class="line">three</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Если указан шаблон, то правило срабатывает в случае когда, строка входного соответствует шаблону. Шаблоны указываются в виде регулярных выражений ограниченных символами <code>/</code>.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> script.awk </span>
<span class="line"><span class="token punctuation">{</span> print <span class="token variable">$0</span> <span class="token punctuation">}</span></span>
<span class="line">/two/ <span class="token punctuation">{</span> print <span class="token variable">$0</span> <span class="token punctuation">}</span></span>
<span class="line">user@debian-server:~/test$ <span class="token function">awk</span> <span class="token parameter variable">-f</span> script.awk text.txt </span>
<span class="line">one</span>
<span class="line">two</span>
<span class="line">two</span>
<span class="line">three</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В шаблоне могут быть указаны специальные значения: <code>BEGIN</code> и <code>END</code>, эти значения означают начало работы программы и окончание работы программы соответственно.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> script.awk </span>
<span class="line">BEGIN <span class="token punctuation">{</span> print <span class="token string">&quot;start reading file&quot;</span> <span class="token punctuation">}</span></span>
<span class="line">END <span class="token punctuation">{</span> print <span class="token string">&quot;finish reading file&quot;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">{</span> print <span class="token variable">$0</span> <span class="token punctuation">}</span></span>
<span class="line">/two/ <span class="token punctuation">{</span> print <span class="token variable">$0</span> <span class="token punctuation">}</span></span>
<span class="line">user@debian-server:~/test$ <span class="token function">awk</span> <span class="token parameter variable">-f</span> script.awk text.txt</span>
<span class="line">start reading <span class="token function">file</span></span>
<span class="line">one</span>
<span class="line">two</span>
<span class="line">two</span>
<span class="line">three</span>
<span class="line">finish reading <span class="token function">file</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Переменная <code>$0</code> хранит значение текущей строки. Поэтому команда <code>print $0</code> выводит текущую строку. Интерпретатор awk, кроме того, что делит входной файл на строки, так же делит строки на поля. По умолчанию, разделителями полей являются пробельные символы. Переменные <code>$1</code>, <code>$2</code>, <code>$3</code> и т. д. возвращают отдельные поля.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">cat</span> customers.txt </span>
<span class="line">Tom Smith <span class="token number">2000</span></span>
<span class="line">Sam Brown <span class="token number">3000</span></span>
<span class="line">Mark Adams <span class="token number">2500</span></span>
<span class="line">Paul Ins <span class="token number">4200</span></span>
<span class="line">John Smith <span class="token number">2800</span></span>
<span class="line">Tim Cook <span class="token number">2800</span></span>
<span class="line">user@debian-server:~/test$ <span class="token function">nano</span> script.awk </span>
<span class="line">user@debian-server:~/test$ <span class="token function">awk</span> <span class="token string">&#39;{ print $1 }&#39;</span> customers.txt </span>
<span class="line">Tom</span>
<span class="line">Sam</span>
<span class="line">Mark</span>
<span class="line">Paul</span>
<span class="line">John</span>
<span class="line">Tim</span>
<span class="line">user@debian-server:~/test$ <span class="token function">awk</span> <span class="token string">&#39;{ print $2 }&#39;</span> customers.txt </span>
<span class="line">Smith</span>
<span class="line">Brown</span>
<span class="line">Adams</span>
<span class="line">Ins</span>
<span class="line">Smith</span>
<span class="line">Cook</span>
<span class="line">user@debian-server:~/test$ <span class="token function">awk</span> <span class="token string">&#39;{ print $3 }&#39;</span> customers.txt </span>
<span class="line"><span class="token number">2000</span></span>
<span class="line"><span class="token number">3000</span></span>
<span class="line"><span class="token number">2500</span></span>
<span class="line"><span class="token number">4200</span></span>
<span class="line"><span class="token number">2800</span></span>
<span class="line"><span class="token number">2800</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Внутри команды можно не просто выводить поля, но и писать более сложный код. В следующем примере используется операция деления и конкатенация строк.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">awk</span> <span class="token string">&#39;{ print $3 / 10 &quot;$&quot; }&#39;</span> customers.txt </span>
<span class="line"><span class="token number">200</span>$</span>
<span class="line"><span class="token number">300</span>$</span>
<span class="line"><span class="token number">250</span>$</span>
<span class="line"><span class="token number">420</span>$</span>
<span class="line"><span class="token number">280</span>$</span>
<span class="line"><span class="token number">280</span>$</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Можно изменить значение одного поля и вывести всю строк.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">awk</span> <span class="token string">&#39;{ $1 = &quot;xxx&quot;; $2 = &quot;xxx&quot;; print $0 }&#39;</span> customers.txt </span>
<span class="line">xxx xxx <span class="token number">2000</span></span>
<span class="line">xxx xxx <span class="token number">3000</span></span>
<span class="line">xxx xxx <span class="token number">2500</span></span>
<span class="line">xxx xxx <span class="token number">4200</span></span>
<span class="line">xxx xxx <span class="token number">2800</span></span>
<span class="line">xxx xxx <span class="token number">2800</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Разделитель полей можно изменить через параметр <code>-F</code> команды <code>awk</code>.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">awk</span> -F: <span class="token string">&#39;{ print $1 }&#39;</span> /etc/passwd </span>
<span class="line">root</span>
<span class="line">daemon</span>
<span class="line">bin</span>
<span class="line">sys</span>
<span class="line"><span class="token function">sync</span></span>
<span class="line">games</span>
<span class="line"><span class="token punctuation">..</span>.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ещё несколько специальных переменных:</p><ul><li><code>NF</code> — количество полей в текущей записи</li><li><code>NR</code> — номер строки во всем входном потоке</li><li><code>FNR</code> — номер строки в текущем файле</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">user@debian-server:~/test$ <span class="token function">awk</span> <span class="token string">&#39;{ print NR &quot;(&quot; FNR &quot;):&quot; $0 }&#39;</span> text.txt text.txt </span>
<span class="line"><span class="token number">1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>:one</span>
<span class="line"><span class="token number">2</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>:two</span>
<span class="line"><span class="token number">3</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>:three</span>
<span class="line"><span class="token number">4</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>:one</span>
<span class="line"><span class="token number">5</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>:two</span>
<span class="line"><span class="token number">6</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>:three</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки"><span>Ссылки</span></a></h2><ul><li><a href="https://www.gnu.org/software/gawk/manual/gawk.html" target="_blank" rel="noopener noreferrer">awk documentation</a></li><li><a href="https://learnxinyminutes.com/docs/awk/" target="_blank" rel="noopener noreferrer">Learn awk in Y minutes</a></li></ul>`,25))])}const v=e(c,[["render",u]]),m=JSON.parse('{"path":"/linux-awk.html","title":"Язык программирования awk","lang":"ru-RU","frontmatter":{"title":"Язык программирования awk","date":"2023-12-28","categories":["Языки программирования"],"tags":["awk"]},"git":{"updatedTime":1703754347000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"0ed4420fa725c5c2dcdf2f6559ef592066c3a749","time":1703754347000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"upd"}]},"filePathRelative":"linux-awk.md"}');export{v as comp,m as data};
