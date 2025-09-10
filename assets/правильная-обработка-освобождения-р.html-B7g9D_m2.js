import{_ as a,c as i,a as n,b as l,t as d,o as r}from"./app-DvfQ69-Y.js";const c={},p={id:"frontmatter-title",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title"};function b(e,s){return r(),i("div",null,[n("h1",p,[n("a",v,[n("span",null,d(e.$frontmatter.title),1)])]),s[0]||(s[0]=l(`<p>Есть много разных вариантов как можно использовать конструкцию <code>try...finally</code> для освобождения ресурсов. Многие из них работают неверно в особых ситуациях. Рассмотрим несколько вариантов подробнее.</p><p>Все рассматриваемые случаи относятся к коду внутри методов, когда переменные объектов являются локальными переменными метода. Для примера рассматривается выделение о освобождение памяти для объектов, но тоже самое может быть применено к другим типам ресурсов.</p><p>Прежде всего, установим <code>ReportMemoryLeaksOnShutdown := True</code> в <code>dpr</code> файле, для того чтобы отслеживать утечки памяти.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">program Project1;</span>
<span class="line"></span>
<span class="line">uses</span>
<span class="line">  Vcl.Forms,</span>
<span class="line">  Unit1 in &#39;Unit1.pas&#39; {Form1};</span>
<span class="line"></span>
<span class="line">{$R *.res}</span>
<span class="line"></span>
<span class="line">begin</span>
<span class="line">  ReportMemoryLeaksOnShutdown := True;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="создание-одного-объекта" tabindex="-1"><a class="header-anchor" href="#создание-одного-объекта"><span>Создание одного объекта</span></a></h2><p>Правильная последовательность такая</p><ul><li>Сначала создание объекта и присвоение его переменной</li><li>Работа с объектом в блоке <code>try</code></li><li>Освобождение объекта в блоке <code>finally</code></li></ul><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TMyClass = class</span>
<span class="line">    procedure Start;</span>
<span class="line">    constructor Create;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">{ TMyClass }</span>
<span class="line"></span>
<span class="line">procedure TMyClass.Start;</span>
<span class="line">begin</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">constructor TMyClass.Create;</span>
<span class="line">begin</span>
<span class="line"></span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  Obj: TMyClass;</span>
<span class="line">begin</span>
<span class="line">  Obj := TMyClass.Create;</span>
<span class="line">  try</span>
<span class="line">    Obj.Start;</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Obj);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Принципиально важный момент: блок <code>try</code> начинается <strong>сразу</strong> после создания объекта. Никаких дополнительных действий между ними нет. Рассмотрим ситуацию когда есть какие-то промежуточные действия, внутри них может возникнуть исключение.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure OtherAction;</span>
<span class="line">begin</span>
<span class="line">  raise Exception.Create(&#39;Big error&#39;);</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  Obj: TMyClass;</span>
<span class="line">begin</span>
<span class="line">  Obj := TMyClass.Create;</span>
<span class="line">  OtherAction; // Исключение, процедура дальше не выполняется, объект Obj не уничтожается. </span>
<span class="line">  try</span>
<span class="line">    Obj.Start;</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Obj);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Проверяется утечка довольно просто, запустить приложение, нажать кнопку — появится сообщение об ошибке, закрыть приложение и появится сообщение об утечке памяти. Поэтому <strong>между создание объекта и <code>try</code> не должно быть никаких действий</strong>.</p><p>Рассмотрим ещё одну ситуацию — объект создаётся внутри блока <code>try</code>.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  Obj: TMyClass;</span>
<span class="line">begin</span>
<span class="line">  try</span>
<span class="line">    Obj := TMyClass.Create;</span>
<span class="line">    Obj.Start;</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Obj);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В обычной ситуации, всё нормально. Но, предположим, что в конструкторе объекта возникает исключение.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">constructor TMyClass.Create;</span>
<span class="line">begin</span>
<span class="line">  raise Exception.Create(&#39;Big error&#39;);</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>При возникновении исключения в конструкторе автоматически вызывается деструктор (подробнее описано в <a href="https://web.archive.org/web/20180727220321/http://www.delphikingdom.ru/asp/viewitem.asp?catalogid=1392#SubSubHeader_2_6_17" target="_blank" rel="noopener noreferrer">этой статье</a>) а затем управление переходит в блок <code>finally</code>. Важный момент: присвоения не происходит, значение в <code>Obj</code> не меняется. Так как локальные переменные <a href="http://way23.ru/%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5/" target="_blank" rel="noopener noreferrer">не инициализируются по умолчанию</a>, то в <code>Obj</code> находится случайна ссылка. В блоке <code>finally</code> вызывается <code>FreeAndNil</code> в ходе которого вызывается деструктор. Таким образом освобождается память по случайному адресу, что приводит к непредсказуемым последствиям и трудноуловимым ошибкам.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  Obj: TMyClass; // Obj не инициализируются и содержит случайны адрес</span>
<span class="line">begin</span>
<span class="line">  try</span>
<span class="line">    Obj := TMyClass.Create; // Исключение, значение obj не меняется, управление передаётся в finally</span>
<span class="line">    Obj.Start;</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Obj); // попытка освобождения памяти по случайному адресу</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Поэтому <strong>никогда нельзя создавать объект внутри try если переменная объекта не инициализирована</strong>. Можно дополнительно инициализировать переменную:</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  Obj: TMyClass;</span>
<span class="line">begin</span>
<span class="line">  Obj := nil;</span>
<span class="line">  try</span>
<span class="line">    Obj := TMyClass.Create;</span>
<span class="line">    Obj.Start;</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Obj);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Но это занимает одну лишнюю строку, не имеет дополнительного смысла. Таким образом правилен только первый описанный вариант.</p><h2 id="создание-нескольких-объектов" tabindex="-1"><a class="header-anchor" href="#создание-нескольких-объектов"><span>Создание нескольких объектов</span></a></h2><p>Ситуация когда создаётся несколько объектов немного сложнее. Рассмотрим создание двух объектов. Самый простой способ — использовать вложенные <code>try</code>, с учётом все описанных выше особенностей:</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  Obj1: TMyClass1;</span>
<span class="line">  Obj2: TMyClass2;</span>
<span class="line">begin</span>
<span class="line">  Obj1 := TMyClass1.Create;</span>
<span class="line">  try</span>
<span class="line">    Obj2 := TMyClass2.Create;</span>
<span class="line">    try</span>
<span class="line">      Obj1.Start;</span>
<span class="line">      Obj2.Start;</span>
<span class="line">    finally</span>
<span class="line">      FreeAndNil(Obj2);</span>
<span class="line">    end;</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Obj1);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Такой способ имеет существенный недостаток — постоянно увеличивающийся уровень вложенности, особенно если нужно создать больше 2х объектов.</p><p>Попробуем убрать вложенность</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  Obj1: TMyClass1;</span>
<span class="line">  Obj2: TMyClass2;</span>
<span class="line">begin</span>
<span class="line">  Obj1 := TMyClass1.Create;</span>
<span class="line">  Obj2 := TMyClass2.Create;</span>
<span class="line">  try</span>
<span class="line">    Obj1.Start;</span>
<span class="line">    Obj2.Start;</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Obj1);</span>
<span class="line">    FreeAndNil(Obj2);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В обычной ситуации всё работает правильно. Но если исключение возникает в конструкторе второго объекта, то снова получаем утечку памяти.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">constructor TMyClass2.Create;</span>
<span class="line">begin</span>
<span class="line">  raise Exception.Create(&#39;Big error&#39;);</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  Obj1: TMyClass1;</span>
<span class="line">  Obj2: TMyClass2;</span>
<span class="line">begin</span>
<span class="line">  Obj1 := TMyClass1.Create; // Создаётся объект</span>
<span class="line">  Obj2 := TMyClass2.Create; // Исключение, метод дальше не выполняется</span>
<span class="line">  try</span>
<span class="line">    Obj1.Start;</span>
<span class="line">    Obj2.Start;</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Obj1);</span>
<span class="line">    FreeAndNil(Obj2);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Рассмотрим примерно такую же ситуацию, но когда создание двух объектов в блоке <code>try</code>.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">constructor TMyClass2.Create;</span>
<span class="line">begin</span>
<span class="line">  raise Exception.Create(&#39;Big error&#39;);</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  Obj1: TMyClass1;</span>
<span class="line">  Obj2: TMyClass2;</span>
<span class="line">begin</span>
<span class="line">  try</span>
<span class="line">    Obj1 := TMyClass1.Create; </span>
<span class="line">    Obj2 := TMyClass2.Create;</span>
<span class="line"></span>
<span class="line">    Obj1.Start;</span>
<span class="line">    Obj2.Start;</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Obj1);</span>
<span class="line">    FreeAndNil(Obj2);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ситуация полностью совпадает с той, что происходит когда один объект создаётся в блоке <code>try</code> — в случае исключения в конструкторе любого из объектов происходит освобождение памяти по случайному адресу.</p><p>В итоге правильный вариант:</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  Obj1: TMyClass1;</span>
<span class="line">  Obj2: TMyClass2;</span>
<span class="line">begin</span>
<span class="line">  Obj1 := nil;</span>
<span class="line">  Obj2 := nil;</span>
<span class="line"></span>
<span class="line">  try</span>
<span class="line">    Obj1 := TMyClass1.Create;</span>
<span class="line">    Obj2 := TMyClass2.Create;</span>
<span class="line"></span>
<span class="line">    Obj1.Start;</span>
<span class="line">    Obj2.Start;</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Obj1);</span>
<span class="line">    FreeAndNil(Obj2);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Сначала происходит инициализация переменных: потом их создание в защищённом блоке. При такой последовательности действий, при любых ситуациях, ресурсы будут освобождены.</p><p><strong>Ссылки:</strong></p><ul><li>Статья <a href="https://habr.com/ru/post/104377/" target="_blank" rel="noopener noreferrer">Заповеди молодого разработчика Delphi</a></li><li><a href="http://docwiki.embarcadero.com/Libraries/Rio/en/System.ReportMemoryLeaksOnShutdown" target="_blank" rel="noopener noreferrer">Описание</a> ReportMemoryLeaksOnShutdown</li></ul>`,36))])}const u=a(c,[["render",b]]),m=JSON.parse('{"path":"/%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0-%D0%BE%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F-%D1%80.html","title":"Правильная обработка освобождения ресурсов через try...finally в Delphi","lang":"ru-RU","frontmatter":{"title":"Правильная обработка освобождения ресурсов через try...finally в Delphi","date":"2019-04-20","categories":["Delphi"],"tags":["Delphi"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"правильная-обработка-освобождения-р.md"}');export{u as comp,m as data};
