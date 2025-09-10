import{_ as a,c as i,a as n,b as l,t as d,o as r}from"./app-DvfQ69-Y.js";const c={},p={id:"frontmatter-title",tabindex:"-1"},t={class:"header-anchor",href:"#frontmatter-title"};function o(e,s){return r(),i("div",null,[n("h1",p,[n("a",t,[n("span",null,d(e.$frontmatter.title),1)])]),s[0]||(s[0]=l(`<p>Вольный перевод статьи <a href="https://schellingerhout.github.io/design%20patterns/OODesign3/" target="_blank" rel="noopener noreferrer">Fundamental Object Oriented Design principles (Part 3): Polymorphism</a>.</p><p>Рассмотрим Полиморфизм предоставляемый объектно ориентированными языками программирования.</p><p>Это третья часть серии об объектно ориентированном проектировании. Для того чтобы понять почему изучение шаблонов проектирования важно, мы должны начать с рассмотрения того что такое хороший объектно ориентированный дизайн приложения. Объектно ориентированные языки предоставляют уникальные возможности которые содействуют хорошему дизайну приложения.</p><p>Рассматриваемые принципы проектирования применены для не объектно ориентированных языков, но с большими сложностями.</p><h2 id="что-такое-полиморфизм" tabindex="-1"><a class="header-anchor" href="#что-такое-полиморфизм"><span>Что такое Полиморфизм?</span></a></h2><p>Когда мы ссылаемся на объект мы хотим чтобы его поведение определялось типом объекта, а не типом ссылки которую мы используем. Обращение может идти даже через абстрактный тип (например, class abstract в Delphi), всё равно должны вызываться методы типа конкретного экземпляра объекта на который указывает ссылка. Это суть полиморфизма. Как вы видели в <a href="https://way23.ru/%D1%84%D1%83%D0%BD%D0%B4%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF%D1%8B-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE/" target="_blank" rel="noopener noreferrer">разделе про абстракцию</a> мы можем взаимодействовать с объектами через переменную с типом класса-предка, хотя объект, на который ссылается переменная, на самом деле является экземпляром класса-потомка.</p><p>Наиболее общее понимание полиморфизма в том что метод может быть виртуальным. Это означает что класс-потомок может переопределить метод и заменить реализацию предка на свою собственную.</p><h2 id="переопределение-виртуального-метода" tabindex="-1"><a class="header-anchor" href="#переопределение-виртуального-метода"><span>Переопределение виртуального метода</span></a></h2><p>Мы рассмотрели некоторые вещи когда рассматривали <a href="https://way23.ru/%D1%84%D1%83%D0%BD%D0%B4%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF%D1%8B-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE/" target="_blank" rel="noopener noreferrer">концепцию абстракции</a> через виртуальный метод, но в том случае базовый метод был абстрактный и не имел реализации.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TCurve = class</span>
<span class="line">  public</span>
<span class="line">     function GetStartPoint: TPoint; virtual; abstract;   // TPoint не объявлен в этом посте</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TArc = class(TCurve)</span>
<span class="line">  public</span>
<span class="line">    function GetStartPoint: TPoint; override;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TLine = class(TCurve)</span>
<span class="line">  public</span>
<span class="line">    function GetStartPoint: TPoint; override;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Давайте используем похожую структуру, но сделаем замену более явной. Наш метод заменит метод определённый в предке.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TDog = class</span>
<span class="line">  public</span>
<span class="line">    function Bark: string; virtual;   // Woof!</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TPoodle = class(TDog)</span>
<span class="line">  public</span>
<span class="line">    // это метод подменяет однодоменный метод в TDog</span>
<span class="line">    function Bark: string; override;   // Yap!</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TToyPoodle = class(TPoodle)</span>
<span class="line">  public</span>
<span class="line">    // это метод подменяет однодоменный метод в TDog и в TPoodle</span>
<span class="line">    function Bark: string; override; // Yip!</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Если мы создали объекты классов <code>TPoodle</code>, <code>TToyPoodle</code> или <code>TDog</code> и ссылаемся на них через переменную типа TDog то мы можем вызвать метод <code>Bark()</code>, причём будет вызван метод именно того класса к которому относится реальный объект, мы даже можем не знать что именно это за класс.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">// Если в переменной ADogList содержаться объекты классов TPoodle, TDog и TToyPoodle то функция вернёт &quot;Yap! Woof! Yip!&quot;</span>
<span class="line"></span>
<span class="line">function MidnightChoir(ADogList: TList&lt;TDog&gt;) : string;</span>
<span class="line">var</span>
<span class="line">  LDog : TDog;</span>
<span class="line">  LBarkString: string;</span>
<span class="line">begin</span>
<span class="line">  for LDog in ADogList do</span>
<span class="line">    LBarkString := LBarkString + &#39; &#39; + LDog.Bark(); // Нам не требуется знать действительный тип объекта. Всегда будет вызван подходящий метод Bark</span>
<span class="line">  result := copy(LBarkString, 2, Length(LBarkString)-1);     // удаляем &#39; &#39;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="перезагрузка-функции-и-перегрузка-операторов" tabindex="-1"><a class="header-anchor" href="#перезагрузка-функции-и-перегрузка-операторов"><span>Перезагрузка функций и перегрузка операторов</span></a></h2><p>Мы обычно не думаем о перегрузке (<code>overload</code>) как о полиморфизме, но она также позволяет добавить в класс больше функциональности оставляя интерфейс более сжатым. Часто этот тип полиморфизма применяется и без ООП. При вызове перегруженной функции объекта корректный метод выбирается на основе названия функции и списка параметров функции, которые уникальны для каждой перегруженного метода.</p><p>Ниже общий пример использования полиморфизма через перегрузку функций. Объект потока (<code>TMyStreamReader1</code>) содержит методы для чтения данных: <code>ReadBoolean</code>, <code>ReadDouble</code>, <code>ReadInteger</code>. При использовании объекта придётся в каждом случае проверять тип переменной и использовать соответствующую функцию. Гораздо проще вызвать метод <code>Read</code> и получить вызов корректной версии метода в зависимости от сигнатуры (<code>TMyStreamReader2</code>).</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">TMyStreamReader1 = class(TMyGenericStreamReader)</span>
<span class="line">public</span>
<span class="line"> function ReadBoolean(var Buffer: Boolean): Longint;</span>
<span class="line"> function ReadInteger(var Buffer: Integer): Longint;</span>
<span class="line"> function ReadSingle(var Buffer: Single): Longint;</span>
<span class="line"> function ReadDouble(var Buffer: Double): Longint;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">TMyStreamReader2 = class(TMyGenericStreamReader)</span>
<span class="line">public</span>
<span class="line"> function ReadData(var Buffer: Boolean): Longint; overload;</span>
<span class="line"> function ReadData(var Buffer: Integer): Longint; overload;</span>
<span class="line"> function ReadData(var Buffer: Single): Longint; overload;</span>
<span class="line"> function ReadData(var Buffer: Double): Longint; overload;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Перегрузка операторов идентична с перегрузкой функций, но имеет небольшие отличия в синтаксисе. Операторы обычно не применяются к классам. Левая и правая сторона от инфиксного оператора становятся двумя аргументами, возвращаемое значение определяет результат функции.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">PointRecord = record</span>
<span class="line">  x,y,z : double;</span>
<span class="line"></span>
<span class="line"> class operator Multiply(P1: PointRecord; P2: PointRecord): Double; // скалярное произведение P1*P2</span>
<span class="line"> class operator Multiply(P: PointRecord; d: double): PointRec; // d*P</span>
<span class="line"> class operator Multiply(d: double; P: PointRecord): PointRec; // P*d</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="наследование" tabindex="-1"><a class="header-anchor" href="#наследование"><span>Наследование</span></a></h2><p>Мы уже видели что можем унаследовать одни класс от другого и переопределить виртуальные (<code>virtual</code>) методы родительского класса. Если не переопределять виртуальные методы, то они унаследуются из родительского класса. Например, если мы объявим публичный не виртуальный метод <code>TDog.Pant()</code>, то мы увидим его когда будем ссылаться на наш объект через более специфичный класс (класс-потомок).</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TDog = class</span>
<span class="line">  public</span>
<span class="line">    function Pant: string; </span>
<span class="line">    function Bark: string; virtual;   // Woof!</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  THound = class(TDog) // наследуется из TDog, но не переопределяет Bark(). Если мы вызовем Bark, то мы получим Woof! объявленный в TDog </span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TPoodle = class(TDog)</span>
<span class="line">  public</span>
<span class="line">   // Этот метод заменит одноимённый в TDog </span>
<span class="line">   function Bark: string; override;   // Yap!</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TMaltesePoodle = class(TPoodle) // Наследуется из TPoodle, но не переопределяет Bark(). Если мы вызовем Bark, то получим Yap! объявленный в TPoodle</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="субтипирование" tabindex="-1"><a class="header-anchor" href="#субтипирование"><span>Субтипирование</span></a></h2><p>Субтипирование (Subtyping) применяется к наследованию интерфейсов. Думаю, что название &quot;субтипирование&quot; неудачное потому что классы связываются через отношение &quot;является&quot; со своими предками и каждый класс в сущности более специализированный тип своего родителя. &quot;Расширение интерфейса&quot; может быть технически более корректным термином. В этом случае интерфейс который наследуется от другого действительно расширяет контракт, наследуемый интерфейс может добавлять больше требований к определению, но не может убирать их. В надуманном примере ниже любой объект который реализует <code>IEquatable</code> должен также полностью удовлетворять <code>IComparable</code>.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  IComparable = interface(IInterface)</span>
<span class="line">    function CompareTo(AObject: TObject): Integer;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  IEquatable = interface(IComparable)</span>
<span class="line">    function EqualTo(AObject: TObject): Boolean;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Расширение интерфейса не диктует путь которым классы должны реализовывать сигнатуры указанных функций, оно только требует чтобы функции присутствовали. Объекты которые удовлетворяют требованиям конкретного интерфейса должны также также удовлетворять требованиям полной иерархии этого интерфейса.</p><p>Существуют случаи когда наследование интерфейса действительно представляет субтипирование. Это случай когда интерфейс определяется похожим на чистый абстрактный класс. В этом случае мы можем иметь псевдо-отношение &quot;является&quot; между интерфейсам.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  IMyABCList = Interface</span>
<span class="line">    // Детали не важны. Предполагайте что интерфейс определяет индексирование, добавление и удаление элементов</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  IMyEnumerableABCList = Interface(IMyABCList)</span>
<span class="line">    function GetEnumerator: IEnumerator;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>IMyEnumerableABCList</code> действительно выглядит как подтип <code>IMyABCList</code>. Можно применить эту иерархию интерфейсов к классам независимо от их структуры наследования. Сигнатуры определения методов и свойств наследуются от супертипа к подтипу, но поведения реализованных методов не определено в подтипах (или вообще в интерфейсах).</p><p>Интерфейсы сами по себе являются полиморфными помощниками. Они не содержат конкретного когда. когда мы ссылаемся на объект через интерфейс фактическая реализация обеспечивается объектом и его иерархией, мы знаем только что контракт интерфейса выполнен.</p><h2 id="резюме" tabindex="-1"><a class="header-anchor" href="#резюме"><span>Резюме</span></a></h2><p>Полиморфизм редуцирует большое количество методов к нескольким, в которых специализация выводится из конкретного типа, сигнатуры параметров, или объекта который удовлетворяет интерфейсу.</p>`,33))])}const u=a(c,[["render",o]]),m=JSON.parse('{"path":"/%D1%84%D1%83%D0%BD%D0%B4%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF%D1%8B-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE-3.html","title":"Фундаментальные принципы объектно ориентированного проектирования (Часть 3): Полиморфизм","lang":"ru-RU","frontmatter":{"title":"Фундаментальные принципы объектно ориентированного проектирования (Часть 3): Полиморфизм","date":"2019-07-24","categories":["Delphi"],"tags":["Delphi","ооп","перевод"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"фундаментальные-принципы-объектно-о-3.md"}');export{u as comp,m as data};
