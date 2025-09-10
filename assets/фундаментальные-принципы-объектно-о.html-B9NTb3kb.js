import{_ as i,c as a,a as n,b as l,t as d,o as c}from"./app-DvfQ69-Y.js";const r={},p={id:"frontmatter-title",tabindex:"-1"},t={class:"header-anchor",href:"#frontmatter-title"};function v(s,e){return c(),a("div",null,[n("h1",p,[n("a",t,[n("span",null,d(s.$frontmatter.title),1)])]),e[0]||(e[0]=l(`<p>Вольный перевод статьи <a href="https://schellingerhout.github.io/design%20patterns/OODesign1/" target="_blank" rel="noopener noreferrer">Fundamental Object Oriented Design principles (Part 1): Abstraction</a></p><p>Рассмотрим принцип Абстракции используемый в объектно ориентированных языках программирования.</p><p>Это первая часть серии об объектно ориентированном проектировании. Для того чтобы понять почему изучение шаблонов проектирования важно, мы должны начать с рассмотрения того что такое хороший объектно ориентированный дизайн приложения.</p><p>ОО-языки предоставляют уникальные возможности, которые содействуют хорошему дизайну приложения. Рассматриваемые принципы проектирования могут быть применены и для не объектно ориентированных языков, но с большими сложностями.</p><p>Эта статья предполагает что вы знакомы как минимум с одним ОО языком программирования. C++, Delphi, C# и Java являются примерами объектно ориентированных языков. Настоящий ОО язык программирования имеет классы, объекты и очень часто интерфейсы.</p><h2 id="что-такое-абстракция" tabindex="-1"><a class="header-anchor" href="#что-такое-абстракция"><span>Что такое Абстракция?</span></a></h2><p>Абстракция, в общем смысле, означает оперирование кодом и структурой данных на высоком уровне, без необходимости понимания конкретной природы структуры данных. Ниже я опишу конкретные формы абстракции лежащие в основе ООП. Большинство из них должны быть знакомы вам, но я перечислю их в явной форме для того чтобы ссылаться на них из более сложных принципов проектирования в будущих постах.</p><h2 id="взаимодеиствие-с-объектами-используя-информацию-описанную-в-классе" tabindex="-1"><a class="header-anchor" href="#взаимодеиствие-с-объектами-используя-информацию-описанную-в-классе"><span>Взаимодействие с объектами используя информацию описанную в классе</span></a></h2><p>Объектно ориентированные языки программирования содержат концепцию классов. Класс — это определение, которое используется для создания объектов. Мы можем оперировать объектом через свойства и методы объявленные в классе, без понимания их действительной реализации. Также мы можем ожидать одинакового поведения от объектов одного и того же класса.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">var</span>
<span class="line">  LCircle: TCircle;</span>
<span class="line">  LArea: double;</span>
<span class="line">begin</span>
<span class="line">  LCircle := TCircle.Create; // Мы берём класс TCircle и создаём на основе него объект</span>
<span class="line"></span>
<span class="line">  // Мы можем устанавливать свойства в то время как объект будет сам обрабатывать побочные эффекты</span>
<span class="line">  LCircle.Radius := 3; </span>
<span class="line"></span>
<span class="line">  // Мы можем вызывать высокоуровневые методы объекта</span>
<span class="line">  LCircle.Translate(10, 15);</span>
<span class="line">  LArea := LCircle.GetArea();</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Пока никаких сюрпризов. Всё что нам нужно было определено в <code>TCircle</code> и мы знаем что мы можем использовать свойства и методы класса который мы использовали для создания объекта.</p><h2 id="взаимодеиствие-с-объектами-через-информацию-описанную-в-классе-предке" tabindex="-1"><a class="header-anchor" href="#взаимодеиствие-с-объектами-через-информацию-описанную-в-классе-предке"><span>Взаимодействие с объектами через информацию описанную в классе-предке</span></a></h2><p>Объектно ориентированные языки программирования позволяют наследовать классы. При правильно ОО проектировании классы потомки к предкам находятся в отношении &quot;является&quot;. Для примера мы можем наследовать классы <code>TLine</code> и <code>TArc</code> от класса <code>TCurve</code>. В этом примере предполагаем, что TCurve определяет тип линии (<code>LineType</code>).</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure SetLinetype(ACurveList: TList&lt;TCurve&gt;; ALineType: Linetype_Enum); // Linetype_Enum не определено в этом посте</span>
<span class="line">var</span>
<span class="line">  LCurve: TCurve;</span>
<span class="line">begin</span>
<span class="line">  for LCurve in ACurveList do</span>
<span class="line">    LCurve.LineType := ALineType;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В этом примере мы не беспокоимся о том содержит ли список линии (<code>TLine</code>) или дуги (<code>TArc</code>) или другие неизвестные типы. Нас волнует только чтобы объекты были типа <code>TCurve</code> (или его наследники). Но нам не нужно знать действительно ли <code>TCurve</code> сейчас является <code>TArc</code> или <code>TLine</code>.</p><h2 id="взаимодеиствие-с-объектом-используя-информацию-описанную-в-виртуальном-или-абстрактном-классе" tabindex="-1"><a class="header-anchor" href="#взаимодеиствие-с-объектом-используя-информацию-описанную-в-виртуальном-или-абстрактном-классе"><span>Взаимодействие с объектом используя информацию описанную в виртуальном (или абстрактном) классе</span></a></h2><p>Рассматривая класс <code>TCurve</code> мы можем представить что он может быть абстракцией любого количества типов, не только <code>TArc</code> и <code>TLine</code>. Например, у нас может класс <code>TSpline</code> или <code>TElipseArc</code> которые тоже относятся через отношение &quot;является&quot; классу <code>TCurve</code> как к предку. Если подумать о геометрической кривой в общем виде мы можем представить методы и свойства которые могут быть абстрагированы. Например, мы можем сказать &quot;кривая может иметь только одну точку начала и одну точку окончания&quot;, так что мы можем объявить функцию которая возвращает начальную точку и конечную точку.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line"></span>
<span class="line">  TCurve = class</span>
<span class="line">  public</span>
<span class="line">    function GetStartPoint: TPoint; virtual; abstract;   // TPoint не определён в этом посте</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TArc = class(TCurve)</span>
<span class="line">  public</span>
<span class="line">    function GetStartPoint: TPoint; override; </span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TLine = class(TCurve)</span>
<span class="line">  public</span>
<span class="line">    function GetStartPoint: TPoint; override;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ключевое слово <strong>virtual</strong> в Delphi означает, что даже если мы вызовем этот метод в родительском типе (<code>TCurve</code>), то будет использоваться реализация наиболее специфичного класса (<code>TArc</code> или <code>TLine</code>). Потомки могут заменить реализацию на свою собственную. Мы рассмотрим это более подробно в концепции Полиморфизма в 3 части.</p><p>Для понимания давайте рассмотрим следующее</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">var</span>
<span class="line">  LCurve1, LCurve2, LCurve3: TCurve; // Все переменные объявлены с типом родителя</span>
<span class="line">  LStartPoint1, LStartPoint1, LStartPoint3: TPoint;  // TPoint не опредлён в этом посте</span>
<span class="line">begin</span>
<span class="line">  LCurve1 := nil;</span>
<span class="line">  LCurve2 := nil;</span>
<span class="line">  LCurve3 := nil;</span>
<span class="line"></span>
<span class="line">  try</span>
<span class="line">    LCurve1 := TArc.Create;  // Создаются объекты типов потомков, но присваиваются переменной с типом предка</span>
<span class="line">    LCurve2 := TLine.Create;</span>
<span class="line">    LCurve3 := TCurve.Create; // Допустимая инструкция, так как класс не помечен как абстрактный, абстрактный только отдельный метод</span>
<span class="line"></span>
<span class="line">    LStartPoint1 := LCurve1.GetStartPoint; // Будет вызван TArc.GetStartPoint</span>
<span class="line">    LStartPoint1 := LCurve2.GetStartPoint; // Будет вызван TLine.GetStartPoint</span>
<span class="line">    // LStartPoint3 := LCurve3.GetStartPoint; // Будет вызван an abstract error</span>
<span class="line">  finally</span>
<span class="line">    LCurve3.Free;</span>
<span class="line">    LCurve2.Free;</span>
<span class="line">    LCurve1.Free;</span>
<span class="line"> end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>При объявлении <code>GetStartPoint</code> в классе <code>TArc</code> мы использовали директиву <strong>override</strong>. Если затем мы ссылаемся на объект через переменную типа <code>TCurve</code> и вызываем <code>GetStartPoint</code> то будет вызван <code>TArc.GetStartPoint</code>. Ключевое слово <strong>abstract</strong> в Delphi означает что если мы вызовем <code>GetStartPoint</code> у потомка который не предоставляет реализацию то мы получим &quot;Abstract Error&quot;, эта ошибка означает что метод не был переопределён в потомках. Если мы уберём ключевое слово <strong>abstract</strong> то нам нужно обязательно добавить базовую реализацию на уровне класса <code>TCurve</code>. Если потомки не реализуют этот метод то будет вызываться базовая реализация без появления исключения.</p><p>Другой уровень абстракции - сделать весь класс абстрактным. Имеет смысл делать класс абстрактным если он настолько высоко в иерархии, что нет смысла создавать объекты этого класса. В данный момент проверки компилятара при создании объектов такого класса нет, но она может появится в будущих версиях.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">TCurve = class abstract</span>
<span class="line">public</span>
<span class="line">   function GetStartPoint: TPoint; virtual; abstract;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="абстракция-через-интерфеисы" tabindex="-1"><a class="header-anchor" href="#абстракция-через-интерфеисы"><span>Абстракция через интерфейсы</span></a></h2><p>Существует заблуждение что интерфейсы это просто абстрактные классы. В случае классов между классом-потомком и классом-предком (включая абстрактные классы) существует отношение &quot;является&quot;. Наиболее распространённое отношение между классом и интерфейсом — &quot;поддерживает&quot;. Интерфейс может рассматриваться как контракт. Если класс поддерживает интерфейс, то класс берет на себя обязательство выполнить требования интерфейса, или делегировать их. Подробнее про делегирования интерфейсов будет в следующих статьях.</p><p>Интерфейсы даже более абстрактны чем абстрактные классы: один интерфейс может быть применён для нескольких иерархий классов одновременно. Можно даже создать свою иерархию наследования интерфейсов независящую от иерархии наследования классов к которым эти интерфейсы применяются. По сравнению с интерфейсами иерархии классов содержат структуры и функции которые трудно менять.</p><p>Рассмотрим пример который показывает отличия интерфейса от абстрактного класса.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">  IComparable = interface(IInterface)</span>
<span class="line">    function CompareTo(AObject: TObject): Integer;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Очевидно что эта сущность не может войти не в одну конкретную иерархию классов. Этот интерфейс может быть применён к любому классу который потенциально можно сравнивать с другим классом. Фактически интерфейс <code>IComparable</code> должен применяется ко многим иерархиям классов. Применённый к классу интерфейс заставляет реализовать метод в классе. Мы же ссылаемся на этот метод на высоком уровне абстракции интерфейса. Ниже пример процедуры которая сортирует любой список объектов которые поддерживают интерфейс <code>IComparable</code>.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure SortComparableList(AList: TList&lt;IComparable&gt;);</span>
<span class="line">    procedure QuickSort(ALeftIdx, ARightIdx: Integer);</span>
<span class="line">    var</span>
<span class="line">      i, j : Integer;</span>
<span class="line">      LPivotItem: TObject;</span>
<span class="line">      LTempItem: IComparable;</span>
<span class="line">    begin</span>
<span class="line">      repeat</span>
<span class="line">        i := ALeftIdx;</span>
<span class="line">        j := ARightIdx;</span>
<span class="line"></span>
<span class="line">        LPivotItem := TObject(AList[(ALeftIdx + ARightIdx) shr 1]);</span>
<span class="line"></span>
<span class="line">        repeat</span>
<span class="line">          while AList[i].CompareTo(LPivotItem) &lt; 0 do</span>
<span class="line">            Inc(i);</span>
<span class="line">          while AList[j].CompareTo(LPivotItem) &gt; 0 do</span>
<span class="line">            Dec(j);</span>
<span class="line">          if i &lt;= j then</span>
<span class="line">          begin</span>
<span class="line">            if (i &lt;&gt; j) then</span>
<span class="line">            begin</span>
<span class="line">              LTempItem := Items[i];</span>
<span class="line">              Items[i] := Items[j];</span>
<span class="line">              Items[j] := LTempItem;</span>
<span class="line">            end;</span>
<span class="line">            Inc(i);</span>
<span class="line">            Dec(j);</span>
<span class="line">          end;</span>
<span class="line">        until i &gt; j;</span>
<span class="line">        if ALeftIdx &lt; j then</span>
<span class="line">          QuickSort(ALeftIdx, j);</span>
<span class="line">        ALeftIdx := i;</span>
<span class="line">      until i &gt;= ARightIdx;</span>
<span class="line">    end;</span>
<span class="line"></span>
<span class="line">begin</span>
<span class="line">  if AList.Count &gt; 1 then</span>
<span class="line">    QuickSort( 0, AList.Count - 1);</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="в-итоге" tabindex="-1"><a class="header-anchor" href="#в-итоге"><span>В итоге</span></a></h2><p>Абстракция позволяет нам фокусироваться только на той области кода которая важна для нас. Она позволяет нам обобщать функциональность повышая читаемость и упрощая повторное использование кода. Также она упрощает понимание того что происходит в программе на высоком уровне.</p>`,33))])}const o=i(r,[["render",v]]),m=JSON.parse('{"path":"/%D1%84%D1%83%D0%BD%D0%B4%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF%D1%8B-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE.html","title":"Фундаментальные принципы объектно ориентированного проектирования (Часть 1): Абстракция","lang":"ru-RU","frontmatter":{"title":"Фундаментальные принципы объектно ориентированного проектирования (Часть 1): Абстракция","date":"2019-05-08","categories":["Delphi"],"tags":["Delphi","совершенный-код","ооп","перевод"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"фундаментальные-принципы-объектно-о.md"}');export{o as comp,m as data};
