import{_ as e,c as i,a as n,b as l,t as c,o as d}from"./app-DvfQ69-Y.js";const p={},r={id:"frontmatter-title",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title"};function u(a,s){return d(),i("div",null,[n("h1",r,[n("a",v,[n("span",null,c(a.$frontmatter.title),1)])]),s[0]||(s[0]=l(`<p>Вольный перевод статьи <a href="https://schellingerhout.github.io/design%20patterns/design-patterns-creational-delphi/" target="_blank" rel="noopener noreferrer">Gang-of-Four Creational Design Pattern Examples in Delphi</a></p><p>Специализированная для Delphi версия Порождающих паттернов из книги “Design Patterns: Elements of Reusable Object-Oriented Software”.</p><h3 id="абстрактная-фабрика-abstract-factory" tabindex="-1"><a class="header-anchor" href="#абстрактная-фабрика-abstract-factory"><span>Абстрактная фабрика (Abstract Factory)</span></a></h3><p>Абстрактная фабрика это класс который создаёт компонент и возвращает его в виде базового (абстрактного) типа. Потребитель (код который использует фабрику) не видит реализацию ни фабрики, ни объектов которые она производит, а работает только с базовыми типами.</p><p>В этом примере используются интерфейсы вместо абстрактных классов, которые используются в примерах в книге. Любое количество конкретных классов могут реализовывать интерфейс фабрики.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">unit IntfMazeFactory;</span>
<span class="line"></span>
<span class="line">interface</span>
<span class="line">uses</span>
<span class="line">  system.generics.collections;</span>
<span class="line"></span>
<span class="line">type</span>
<span class="line"></span>
<span class="line">IMaze = interface</span>
<span class="line"> // Определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">IWall = interface</span>
<span class="line"> // Определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">IRoom = interface</span>
<span class="line"> // Определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">IDoor = interface</span>
<span class="line"> // Определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">IMazeFactory = interface</span>
<span class="line">  function MakeMaze: IMaze;</span>
<span class="line">  function MakeWall: IWall;</span>
<span class="line">  function MakeRoom(ANumber: integer): TArray&lt;IRoom&gt;;</span>
<span class="line">  function MakeDoor(AFromRoom, AToRoom: IRoom): IDoor;  </span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">// Мы можем использовать фабрику как параметр, например</span>
<span class="line">//   MazeGame.CreateMaze(AFactory);</span>
<span class="line">// MazeGame может создать лабиринт не привязываясь </span>
<span class="line">// к конкретной реализации фабрики или тем более </span>
<span class="line">// к конкретным реализациям объектов которые она производит</span>
<span class="line"></span>
<span class="line">implementation</span>
<span class="line"></span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="сборщик-builder" tabindex="-1"><a class="header-anchor" href="#сборщик-builder"><span>Сборщик (Builder)</span></a></h3><p>Сборщик похож на Абстрактную фабрику, но предоставляет потребителю более высокий уровень абстракции. Фабрика предоставляет методы для создания отдельных элементов, а Сборщик собирает готовый продукт. Вид продукта и его состав может определятся через параметры.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">unit IntfMazeBuilder;</span>
<span class="line"></span>
<span class="line">interface</span>
<span class="line"></span>
<span class="line">type</span>
<span class="line"></span>
<span class="line">IMazeBuilder = interface</span>
<span class="line">  procedure BuildMaze;</span>
<span class="line">  procedure BuildRoom(ANumber: integer);</span>
<span class="line">  procedure BuildDoor(AFromRoomIndex, AToRoomIndex: integer); </span>
<span class="line"></span>
<span class="line">  function GetMaze: IMaze; </span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">// Сборщик также можно передавать в виде параметра </span>
<span class="line">//   LMaze := MazeGame.CreateMaze(ABuilder);</span>
<span class="line">// MazeGame также как и с фабрикой не привязывается к конкретной </span>
<span class="line">// реализации объектов лабиринта. Отличия от фабрики в том что</span>
<span class="line">// потребитель (MazeGame) может даже не знать о </span>
<span class="line">// блоках, порядке и связях между частями лабиринта</span>
<span class="line"></span>
<span class="line">implementation</span>
<span class="line"></span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="фабричныи-метод-factory-method" tabindex="-1"><a class="header-anchor" href="#фабричныи-метод-factory-method"><span>Фабричный метод (Factory Method)</span></a></h3><p>Фабричный метод это виртуальный метод, создающий продукты. Он может быть переопределён для расширения производимого набора классов.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">unit IntfFactoryMethod;</span>
<span class="line"></span>
<span class="line">interface</span>
<span class="line"></span>
<span class="line">type</span>
<span class="line"></span>
<span class="line">IProduct = interface</span>
<span class="line"> // Определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">TAbstractProductCreator = class abstract</span>
<span class="line">public</span>
<span class="line">  function CreateProduct(AProductID: integer): IProduct; virtual;  </span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">// Шаблон проектирования действительно строится на основе одного метода.</span>
<span class="line">// Метод которые создаёт продукты должен быть виртуальным </span>
<span class="line">// и может быть переопределён потомками.</span>
<span class="line">// В методе может быть заложена логика для создания некоторых видов объектов по умолчанию. </span>
<span class="line">// В дальнейшем эта логика расширяется в потомках. </span>
<span class="line">// Обработка вызова, при создании методом объекта, идёт обычным путём </span>
<span class="line">// по иерархии наследования от потомков к предкам.</span>
<span class="line"></span>
<span class="line">implementation</span>
<span class="line"></span>
<span class="line">uses    </span>
<span class="line">    ProductTags; // Предполагаем что идентификаторы продуктов определены здесь</span>
<span class="line"></span>
<span class="line">Type</span>
<span class="line"></span>
<span class="line">TBaseProductA = class(TInterfacedObnject, IProduct)</span>
<span class="line"> // Определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">TBaseProductB = class(TInterfacedObnject, IProduct)</span>
<span class="line"> // Определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function TAbstractProductCreator.CreateProduct(AProductID: integer): IProduct;</span>
<span class="line">begin</span>
<span class="line">    // Потомки должны добавлять свои случаи и проваливаться в наследуемый метод</span>
<span class="line">   Case AProductID of </span>
<span class="line">     ProductTags.BaseProductA:</span>
<span class="line">        result := TBaseProductA.Create;</span>
<span class="line">     ProductTags.BaseProductB:</span>
<span class="line">        result := TBaseProductB.Create;</span>
<span class="line">    else</span>
<span class="line">        raise EProductIDUnkownException.Create;</span>
<span class="line">   end;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Мы можем переопределить метод и расширить реализацию. Более конкретные реализации фабрики могут добавлять любое количество новых продуктов, переопределять создание продуктов или прятать их.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">unit ConcreateFactoryMethod;</span>
<span class="line"></span>
<span class="line">interface</span>
<span class="line">uses</span>
<span class="line">    intfFactoryMethod;</span>
<span class="line"></span>
<span class="line">type</span>
<span class="line"></span>
<span class="line">TConcreteProductCreator = class(TAbstractProductCreator)</span>
<span class="line">public</span>
<span class="line">  function CreateProduct(AProductID: integer): IProduct; override;  </span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">// Фабричный метод, создающий продукты, виртуальный и может быть переопределён </span>
<span class="line"></span>
<span class="line">implementation</span>
<span class="line"></span>
<span class="line">uses    </span>
<span class="line">    ProductTags; // Предполагаем что идентификаторы продуктов определены здесь</span>
<span class="line"></span>
<span class="line">Type</span>
<span class="line"></span>
<span class="line">TAdvancedProductX = class(TInterfacedObnject, IProduct)</span>
<span class="line"> // Определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">TAdvancedProductY = class(TProductA)</span>
<span class="line"> // Определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function TConcreteProductCreator.CreateProduct(AProductID: integer): IProduct;</span>
<span class="line">begin</span>
<span class="line">   Case AProductID of</span>
<span class="line"></span>
<span class="line">     ProductTags.AdvancedProductX:</span>
<span class="line">        result := TAdvancedProductX.Create;</span>
<span class="line">     ProdcutTags.BaseProductA,  ProductTags.AdvancedProductY: // Мы можем скрыть некоторые виды продуктов или перезаписать их</span>
<span class="line">        result := TAdvancedProductY.Create;</span>
<span class="line">    else</span>
<span class="line">      result := inherited;</span>
<span class="line">   end;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="одиночка-singleton" tabindex="-1"><a class="header-anchor" href="#одиночка-singleton"><span>Одиночка (Singleton)</span></a></h3><p>Я редко реализую этот паттерн и предпочитаю чистый абстрактный класс с классовыми свойствами и методами. Этот паттерн особенно сложно реализуется в Delphi потому, что всегда есть конструктор унаследованный от TObject. Так что не получается реализовать паттерн, так как описано в книге. Единственный путь - спрятать конструктор и предоставлять интерфейс вместо класса.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">unit SingletonMazeFactory;</span>
<span class="line"></span>
<span class="line">interface</span>
<span class="line">uses</span>
<span class="line">  IntfMazeFactory;</span>
<span class="line"></span>
<span class="line">Function MazeFactoryInstance: IMazeFactory;</span>
<span class="line"></span>
<span class="line">implementation</span>
<span class="line"></span>
<span class="line">type</span>
<span class="line"></span>
<span class="line">TMazeFactory = class(TInterfacedObject, IMazeFactory)</span>
<span class="line">private </span>
<span class="line"></span>
<span class="line">private</span>
<span class="line">  class var FInstance: IMazeFactory; </span>
<span class="line"></span>
<span class="line">  class function GetInstance: IMazeFactory; static;</span>
<span class="line">public</span>
<span class="line">  Constructor Create;</span>
<span class="line"></span>
<span class="line">  function MakeMaze: IMaze;</span>
<span class="line">  function MakeWall: IWall;</span>
<span class="line">  function MakeRoom(ANumber: integer): TArray&lt;IRoom&gt;;</span>
<span class="line">  function MakeDoor(AFromRoom, AToRoom: IRoom): IDoor;  </span>
<span class="line"></span>
<span class="line">  class property Instance: IMazeFactory read GetInstance;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">Function MazeFactoryInstance: IMazeFactory</span>
<span class="line">begin</span>
<span class="line">  result := TMazeFactory.Instance;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">class function TMazeFactory.GetInstance: IMazeFactory;</span>
<span class="line">begin</span>
<span class="line">  if FInstance = nil then</span>
<span class="line">    FInstance := TMazeFactory.Create;</span>
<span class="line">  result := FInstance; </span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function TMazeFactory.MakeMaze: IMaze;</span>
<span class="line">begin</span>
<span class="line">   // Определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">constructor TMazeFactory.Create;</span>
<span class="line">begin</span>
<span class="line">  inherited Create;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function TMazeFactory.MakeWall: IWall;</span>
<span class="line">begin</span>
<span class="line">   // Определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function TMazeFactory.MakeRoom(ANumber: integer): TArray&lt;IRoom&gt;;</span>
<span class="line">begin</span>
<span class="line">   // Определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function TMazeFactory.MakeDoor(AFromRoom: IRoom; AToRoom: IRoom): IDoor;</span>
<span class="line">begin</span>
<span class="line">   // Определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="прототип-prototype" tabindex="-1"><a class="header-anchor" href="#прототип-prototype"><span>Прототип (Prototype)</span></a></h3><p>Это мой любимый паттерн. Для его использования передавайте экземпляры прототипов в конструктор. Затем используйте их для создания клонов в фабрике. Такой подход предоставляет возможности для расширения, когда у вас нет доступа до кода (похоже на плагины или расширения определяемые пользователем).</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">unit IntfMazeFactory;</span>
<span class="line"></span>
<span class="line">interface</span>
<span class="line">uses</span>
<span class="line">  system.generics.collections;</span>
<span class="line"></span>
<span class="line">type</span>
<span class="line"></span>
<span class="line">IMaze = interface</span>
<span class="line">  function Clone: IMaze;</span>
<span class="line"></span>
<span class="line"> // Остальное определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">IWall = interface</span>
<span class="line">  function Clone: IWall;</span>
<span class="line"> // Остальное определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">IRoom = interface</span>
<span class="line">  function Clone: IRoom;</span>
<span class="line"></span>
<span class="line"> // Остальное определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">IDoor = interface</span>
<span class="line">  function Clone: IDoor;</span>
<span class="line">  procedure Initialize(AFromRoom, AToRoom: IRoom); //mutator</span>
<span class="line"> // Остальное определение не важно для примера</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">TMazePrototypeFactory = Class </span>
<span class="line">private</span>
<span class="line">  FProtoMaze: IMaze; </span>
<span class="line">  FProtoWall: IWall; </span>
<span class="line">  FProtoRoom: IRoom; </span>
<span class="line">  FProtoDoor: IDoor;</span>
<span class="line">public</span>
<span class="line">  constructor Create(AMaze: IMaze; AWall: IWall; ARoom: IRoom; ADoor: IDoor);</span>
<span class="line"></span>
<span class="line">  function MakeMaze: IMaze;</span>
<span class="line">  function MakeWall: IWall;</span>
<span class="line">  function MakeRoom(ANumber: integer): TArray&lt;IRoom&gt;;</span>
<span class="line">  function MakeDoor(AFromRoom, AToRoom: IRoom): IDoor;  </span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">// Мы можем использовать фабрику как параметр</span>
<span class="line">//   MazeGame.CreateMaze(AFactory);</span>
<span class="line"></span>
<span class="line">implementation</span>
<span class="line"></span>
<span class="line">constructor TMazePrototypeFactory.Create(AMaze: IMaze; AWall: IWall; ARoom: IRoom; ADoor: IDoor);</span>
<span class="line">begin</span>
<span class="line">  inherited Create;</span>
<span class="line">  FProtoMaze := AMaze; </span>
<span class="line">  FProtoWall := AWall; </span>
<span class="line">  FProtoRoom := ARoom; </span>
<span class="line">  FProtoDoor := ADoor;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function TMazePrototypeFactory.MakeMaze: IMaze;</span>
<span class="line">begin</span>
<span class="line">  result := FProtoMaze.Clone;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function TMazePrototypeFactory.MakeWall: IWall;</span>
<span class="line">begin</span>
<span class="line">  result := FProtoWall.Clone;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function TMazePrototypeFactory.MakeRoom(ANumber: integer): TArray&lt;IRoom&gt;;</span>
<span class="line">begin</span>
<span class="line">  for i := 1 to ANumber do</span>
<span class="line">    result.Add(FProtoRoom.Clone);</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function TMazePrototypeFactory.MakeDoor(AFromRoom: IRoom; AToRoom: IRoom): IDoor;</span>
<span class="line">begin</span>
<span class="line">  result := ARoom.Clone;</span>
<span class="line">  result.Initialize(AFromRoom, AToRoom);</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20))])}const m=e(p,[["render",u]]),o=JSON.parse('{"path":"/%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B-%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D0%B4%D0%B0%D1%8E%D1%89%D0%B8%D1%85-%D0%BF%D0%B0%D1%82%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B2-%D0%B8%D0%B7-%D0%B1%D0%B0%D0%BD.html","title":"Примеры порождающих паттернов из Банды четырёх (GoF) на Delphi","lang":"ru-RU","frontmatter":{"title":"Примеры порождающих паттернов из Банды четырёх (GoF) на Delphi","date":"2019-04-16","categories":["Delphi"],"tags":["Delphi","паттерны","совершенный-код","перевод"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"примеры-порождающих-паттернов-из-бан.md"}');export{m as comp,o as data};
