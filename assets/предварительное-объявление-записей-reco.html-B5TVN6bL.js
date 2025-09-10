import{_ as a,c as i,a as n,b as l,t as d,o as c}from"./app-DvfQ69-Y.js";const r={},p={id:"frontmatter-title",tabindex:"-1"},t={class:"header-anchor",href:"#frontmatter-title"};function v(e,s){return c(),i("div",null,[n("h1",p,[n("a",t,[n("span",null,d(e.$frontmatter.title),1)])]),s[0]||(s[0]=l(`<p>Вольный перевод поста <a href="https://www.thedelphigeek.com/2017/03/forward-record-declaration.html" target="_blank" rel="noopener noreferrer">Forward record declaration</a>.</p><p>Предварительная объявление не новая концепция. Она уже присутствовала в оригинальном Паскале Вирта, где она позволяла программистам делать только одну вещь — вызывать процедуру A из процедуры B и вызывать процедуру B из процедуры A. В те времена не было интерфейсов, классов, модулей, только процедуры и функции. Вот пример</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure ProcA; forward;</span>
<span class="line"></span>
<span class="line">procedure ProcB;</span>
<span class="line">begin</span>
<span class="line">  ProcA;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure ProcA;</span>
<span class="line">begin</span>
<span class="line">  ProcB;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Более знакомая современная концепция — предварительное объявление для классов и интерфейсов.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TClassA = class;</span>
<span class="line"></span>
<span class="line">  TClassB = class</span>
<span class="line">    ObjA: TClassA;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TClassA = class</span>
<span class="line">    ObjB: TClassB;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  IIntfA = interface;</span>
<span class="line"></span>
<span class="line">  IIntfB = interface</span>
<span class="line">    function Other: IIntfA;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  IIntfA = interface</span>
<span class="line">    function Other: IIntfB;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В тоже время в Object Pascal нет концепции предварительного объявления записей. Следующий код не компилируется</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TRecA = record;</span>
<span class="line"></span>
<span class="line">  TRecB = record</span>
<span class="line">    function Other: TRecA;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TRecA = record</span>
<span class="line">    function Other: TRecB;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Существует трюк который позволяет достичь аналогичной функциональности с помощью другого синтаксического сахара - record helpers. Мы можем удалить объявление <code>TRecB.Other</code> из <code>TRecB</code> и потом снова добавить его через хелпер для <code>TRecB</code>.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TRecB = record</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TRecA = record</span>
<span class="line">    function Other: TRecB;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TRecBHelper = record helper for TRecB</span>
<span class="line">    function Other: TRecA;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Но помните, что это решение менее стабильно: другой код может скрыть функционал <code>TRecBHelper</code> введя свой собственный хелпер для <code>TRecB</code>. (противная особенность языка которая действительно должна быть исправлена уже давно)</p>`,10))])}const m=a(r,[["render",v]]),u=JSON.parse('{"path":"/%D0%BF%D1%80%D0%B5%D0%B4%D0%B2%D0%B0%D1%80%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5-%D0%BE%D0%B1%D1%8A%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B5%D0%B9-reco.html","title":"Предварительное объявление записей (record) в Delphi","lang":"ru-RU","frontmatter":{"title":"Предварительное объявление записей (record) в Delphi","date":"2019-05-09","categories":["Delphi"],"tags":["Delphi","перевод"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"предварительное-объявление-записей-reco.md"}');export{m as comp,u as data};
