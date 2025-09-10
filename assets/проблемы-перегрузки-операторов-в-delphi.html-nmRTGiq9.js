import{_ as i,c as a,a as n,b as l,t as d,o as c}from"./app-DvfQ69-Y.js";const p={},r={id:"frontmatter-title",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title"};function u(e,s){return c(),a("div",null,[n("h1",r,[n("a",v,[n("span",null,d(e.$frontmatter.title),1)])]),s[0]||(s[0]=l(`<p>Вольный перевод поста <a href="https://sergworks.wordpress.com/2013/04/10/on-the-operator-overloading-in-delphi/" target="_blank" rel="noopener noreferrer">On the operator overloading in Delphi</a>.</p><p>Перегрузка операторов в Delphi является простой если запись не содержит в себе полей-ссылок на объекты в куче. Чтобы проиллюстрировать эту проблему рассмотрим следующий (некорректный!) пример:</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">program DelphiDemo;</span>
<span class="line"></span>
<span class="line">{$APPTYPE CONSOLE}</span>
<span class="line"></span>
<span class="line">uses</span>
<span class="line">  SysUtils;</span>
<span class="line"></span>
<span class="line">type</span>
<span class="line">  Adder = record</span>
<span class="line">  private</span>
<span class="line">    FRef: PInteger;</span>
<span class="line">    function GetMemory: Integer;</span>
<span class="line">    procedure SetMemory(AValue: Integer);</span>
<span class="line">  public</span>
<span class="line">    procedure Init(AValue: Integer = 0);</span>
<span class="line">    procedure Done;</span>
<span class="line">    class operator Add(const A, B: Adder): Adder;</span>
<span class="line">    property Memory: Integer read GetMemory write SetMemory;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">{ Adder }</span>
<span class="line"></span>
<span class="line">class operator Adder.Add(const A, B: Adder): Adder;</span>
<span class="line">begin</span>
<span class="line">// !!! Утечка памяти</span>
<span class="line">  New(Result.FRef);</span>
<span class="line">  Result.Memory:= A.Memory + B.Memory;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure Adder.Done;</span>
<span class="line">begin</span>
<span class="line">  Dispose(FRef);</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function Adder.GetMemory: Integer;</span>
<span class="line">begin</span>
<span class="line">  Result:= FRef^;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure Adder.Init(AValue: Integer);</span>
<span class="line">begin</span>
<span class="line">  New(FRef);</span>
<span class="line">  FRef^:= AValue;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure Adder.SetMemory(AValue: Integer);</span>
<span class="line">begin</span>
<span class="line">  FRef^:= AValue;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure Test;</span>
<span class="line">var</span>
<span class="line">  A, B, C: Adder;</span>
<span class="line"></span>
<span class="line">begin</span>
<span class="line">  A.Init(1);</span>
<span class="line">  B.Init(2);</span>
<span class="line">  C.Init();</span>
<span class="line">  C := A + B;</span>
<span class="line">  Writeln(C.Memory);</span>
<span class="line">  C.Done;</span>
<span class="line">  B.Done;</span>
<span class="line">  A.Done;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">begin</span>
<span class="line">  ReportMemoryLeaksOnShutdown:= True;</span>
<span class="line">  try</span>
<span class="line">    Test;</span>
<span class="line">  except</span>
<span class="line">    on E: Exception do</span>
<span class="line">      Writeln(E.ClassName, &#39;: &#39;, E.Message);</span>
<span class="line">  end;</span>
<span class="line">  ReadLn;</span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Строка <code>#59 (C:= A + B)</code> работает следующим образом:</p><ul><li>Временная запись <code>Result</code> помещается в стек</li><li>Временная запись заполняется суммой <code>A + B</code> (метод <code>Adder.Add</code>)</li><li>Временная запись присваивается (поверхностным копированием) переменной <code>C</code></li><li>Временная запись убирается со стека</li></ul><p>Код работает правильно если <code>Adder</code> не содержит ссылок на кучу, <code>FRef</code> в экземпляре <code>Adder</code> делает ситуацию более сложной. Вы должны всегда инициализировать поле <code>FRef</code> для каждого экземпляра <code>Adder</code>, но вы не можете финализировать временную запись которая создана на строке <code>#59</code>. (также не можете финализировать запись которая инициализируется в строке <code>#58</code> и теряется в строке <code>#59</code>).</p><p>Единственный путь исправить утечку памяти — закомпостировать строку <code>#58</code>, но это не будет работать в более сложных случаях, например, когда переменная должна участвовать в выражении справа.</p><p>Правильное решение использует автоматическое управление памятью вместо простых указателей. Ниже решение использующее интерфейс:</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">program DelphiDemo2;</span>
<span class="line"></span>
<span class="line">{$APPTYPE CONSOLE}</span>
<span class="line"></span>
<span class="line">uses</span>
<span class="line">  SysUtils, Classes;</span>
<span class="line"></span>
<span class="line">type</span>
<span class="line">  IAdder = interface</span>
<span class="line">    function GetMemory: Integer;</span>
<span class="line">    procedure SetMemory(AValue: Integer);</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TAdderRef = class(TInterfacedObject, IAdder)</span>
<span class="line">  private</span>
<span class="line">    FMemory: Integer;</span>
<span class="line">    function GetMemory: Integer;</span>
<span class="line">    procedure SetMemory(AValue: Integer);</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  Adder = record</span>
<span class="line">  private</span>
<span class="line">    FRef: IAdder;</span>
<span class="line">    function GetMemory: Integer;</span>
<span class="line">    procedure SetMemory(AValue: Integer);</span>
<span class="line">  public</span>
<span class="line">    procedure Init(AValue: Integer = 0);</span>
<span class="line">    procedure Done;</span>
<span class="line">    class operator Add(const A, B: Adder): Adder;</span>
<span class="line">    property Memory: Integer read GetMemory write SetMemory;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">{ TAdderRef }</span>
<span class="line"></span>
<span class="line">function TAdderRef.GetMemory: Integer;</span>
<span class="line">begin</span>
<span class="line">  Result:= FMemory;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure TAdderRef.SetMemory(AValue: Integer);</span>
<span class="line">begin</span>
<span class="line">  FMemory:= AValue;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">{ Adder }</span>
<span class="line"></span>
<span class="line">class operator Adder.Add(const A, B: Adder): Adder;</span>
<span class="line">begin</span>
<span class="line">  Result.FRef:= TAdderRef.Create;</span>
<span class="line">  Result.Memory:= A.Memory + B.Memory;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure Adder.Init(AValue: Integer);</span>
<span class="line">begin</span>
<span class="line">  FRef:= TAdderRef.Create;</span>
<span class="line">  FRef.SetMemory(AValue);</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure Adder.Done;</span>
<span class="line">begin</span>
<span class="line">  FRef:= nil;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">function Adder.GetMemory: Integer;</span>
<span class="line">begin</span>
<span class="line">  Result:= FRef.GetMemory;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure Adder.SetMemory(AValue: Integer);</span>
<span class="line">begin</span>
<span class="line">  FRef.SetMemory(AValue);</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure Test;</span>
<span class="line">var</span>
<span class="line">  A, B, C: Adder;</span>
<span class="line"></span>
<span class="line">begin</span>
<span class="line">  A.Init(1);</span>
<span class="line">  B.Init(2);</span>
<span class="line">//  C.Init();</span>
<span class="line">  C:= A + B;</span>
<span class="line">  Writeln(C.Memory);</span>
<span class="line">//  C.Done;</span>
<span class="line">//  B.Done;</span>
<span class="line">//  A.Done;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">begin</span>
<span class="line">  ReportMemoryLeaksOnShutdown:= True;</span>
<span class="line">  try</span>
<span class="line">    Test;</span>
<span class="line">  except</span>
<span class="line">    on E: Exception do</span>
<span class="line">      Writeln(E.ClassName, &#39;: &#39;, E.Message);</span>
<span class="line">  end;</span>
<span class="line">  ReadLn;</span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Полезный побочный эффект при таком подходе в том что вам не нужно инициализировать или финализировать поле <code>FRef</code> вручную (но вы можете это делать). Несколько строк в процедуре <code>Test</code>, показанной выше, закомментированы потому, что они больше не нужны, но они могут быть раскомментированы и код продолжит верно работать — автоматическое управление памятью для интерфейсов обеспечит это.</p><p>Очень интересно знать как обсуждаемая проблема решается в C++. Стандартный C++ подход полностью отличается — он требует перегрузки оператора присваивания (возможность, которую Delphi не поддерживает) и написания конструктора копирования (другая концепция отсутствующая в Delphi). Я планирую обсудить это позже.</p>`,11))])}const b=i(p,[["render",u]]),t=JSON.parse('{"path":"/%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%8B-%D0%BF%D0%B5%D1%80%D0%B5%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BE%D0%B2-%D0%B2-delphi.html","title":"Проблемы перегрузки операторов в Delphi","lang":"ru-RU","frontmatter":{"title":"Проблемы перегрузки операторов в Delphi","date":"2019-05-14","categories":["Delphi"],"tags":["Delphi","перевод"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"проблемы-перегрузки-операторов-в-delphi.md"}');export{b as comp,t as data};
