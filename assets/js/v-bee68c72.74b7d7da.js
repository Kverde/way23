"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[3639],{62265:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-bee68c72",path:"/%D1%84%D1%83%D0%BD%D0%B4%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF%D1%8B-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE-3.html",title:"Фундаментальные принципы объектно ориентированного проектирования (Часть 3): Полиморфизм",lang:"ru-RU",frontmatter:{title:"Фундаментальные принципы объектно ориентированного проектирования (Часть 3): Полиморфизм",date:"2019-07-24",categories:["Delphi"],tags:["Delphi","ооп","перевод"]},excerpt:"",headers:[{level:2,title:"Что такое Полиморфизм?",slug:"что-такое-полиморфизм",children:[]},{level:2,title:"Переопределение виртуального метода",slug:"переопределение-виртуального-метода",children:[]},{level:2,title:"Перезагрузка функций и перегрузка операторов",slug:"перезагрузка-функции-и-перегрузка-операторов",children:[]},{level:2,title:"Наследование",slug:"наследование",children:[]},{level:2,title:"Субтипирование",slug:"субтипирование",children:[]},{level:2,title:"Резюме",slug:"резюме",children:[]}],filePathRelative:"фундаментальные-принципы-объектно-о-3.md",git:{updatedTime:1692859375e3}}},97480:(n,e,a)=>{a.r(e),a.d(e,{default:()=>R});var s=a(66252),r=a(3577);const l={id:"frontmatter-title",tabindex:"-1"},i=(0,s._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=(0,s.Uk)("Вольный перевод статьи "),c={href:"https://schellingerhout.github.io/design%20patterns/OODesign3/",target:"_blank",rel:"noopener noreferrer"},b=(0,s.Uk)("Fundamental Object Oriented Design principles (Part 3): Polymorphism"),o=(0,s.Uk)("."),u=(0,s._)("p",null,"Рассмотрим Полиморфизм предоставляемый объектно ориентированными языками программирования.",-1),d=(0,s._)("p",null,"Это третья часть серии об объектно ориентированном проектировании. Для того чтобы понять почему изучение шаблонов проектирования важно, мы должны начать с рассмотрения того что такое хороший объектно ориентированный дизайн приложения. Объектно ориентированные языки предоставляют уникальные возможности которые содействуют хорошему дизайну приложения.",-1),t=(0,s._)("p",null,"Рассматриваемые принципы проектирования применены для не объектно ориентированных языков, но с большими сложностями.",-1),m=(0,s._)("h2",{id:"что-такое-полиморфизм",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#что-такое-полиморфизм","aria-hidden":"true"},"#"),(0,s.Uk)(" Что такое Полиморфизм?")],-1),D=(0,s.Uk)("Когда мы ссылаемся на объект мы хотим чтобы его поведение определялось типом объекта, а не типом ссылки которую мы используем. Обращение может идти даже через абстрактный тип (например, class abstract в Delphi), всё равно должны вызываться методы типа конкретного экземпляра объекта на который указывает ссылка. Это суть полиморфизма. Как вы видели в "),B={href:"https://way23.ru/%D1%84%D1%83%D0%BD%D0%B4%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF%D1%8B-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE/",target:"_blank",rel:"noopener noreferrer"},g=(0,s.Uk)("разделе про абстракцию"),h=(0,s.Uk)(" мы можем взаимодействовать с объектами через переменную с типом класса-предка, хотя объект, на который ссылается переменная, на самом деле является экземпляром класса-потомка."),f=(0,s._)("p",null,"Наиболее общее понимание полиморфизма в том что метод может быть виртуальным. Это означает что класс-потомок может переопределить метод и заменить реализацию предка на свою собственную.",-1),v=(0,s._)("h2",{id:"переопределение-виртуального-метода",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#переопределение-виртуального-метода","aria-hidden":"true"},"#"),(0,s.Uk)(" Переопределение виртуального метода")],-1),T=(0,s.Uk)("Мы рассмотрели некоторые вещи когда рассматривали "),P={href:"https://way23.ru/%D1%84%D1%83%D0%BD%D0%B4%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF%D1%8B-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE/",target:"_blank",rel:"noopener noreferrer"},k=(0,s.Uk)("концепцию абстракции"),y=(0,s.Uk)(" через виртуальный метод, но в том случае базовый метод был абстрактный и не имел реализации."),L=(0,s.uE)('<div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>type\n  TCurve = class\n  public\n     function GetStartPoint: TPoint; virtual; abstract;   // TPoint не объявлен в этом посте\n  end;\n\n  TArc = class(TCurve)\n  public\n    function GetStartPoint: TPoint; override;\n  end;\n\n  TLine = class(TCurve)\n  public\n    function GetStartPoint: TPoint; override;\n  end;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Давайте используем похожую структуру, но сделаем замену более явной. Наш метод заменит метод определённый в предке.</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>type\n  TDog = class\n  public\n    function Bark: string; virtual;   // Woof!\n  end;\n\n  TPoodle = class(TDog)\n  public\n    // это метод подменяет однодоменный метод в TDog\n    function Bark: string; override;   // Yap!\n  end;\n\n  TToyPoodle = class(TPoodle)\n  public\n    // это метод подменяет однодоменный метод в TDog и в TPoodle\n    function Bark: string; override; // Yip!\n  end;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Если мы создали объекты классов <code>TPoodle</code>, <code>TToyPoodle</code> или <code>TDog</code> и ссылаемся на них через переменную типа TDog то мы можем вызвать метод <code>Bark()</code>, причём будет вызван метод именно того класса к которому относится реальный объект, мы даже можем не знать что именно это за класс.</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>// Если в переменной ADogList содержаться объекты классов TPoodle, TDog и TToyPoodle то функция вернёт &quot;Yap! Woof! Yip!&quot;\n\nfunction MidnightChoir(ADogList: TList&lt;TDog&gt;) : string;\nvar\n  LDog : TDog;\n  LBarkString: string;\nbegin\n  for LDog in ADogList do\n    LBarkString := LBarkString + &#39; &#39; + LDog.Bark(); // Нам не требуется знать действительный тип объекта. Всегда будет вызван подходящий метод Bark\n  result := copy(LBarkString, 2, Length(LBarkString)-1);     // удаляем &#39; &#39;\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="перезагрузка-функции-и-перегрузка-операторов" tabindex="-1"><a class="header-anchor" href="#перезагрузка-функции-и-перегрузка-операторов" aria-hidden="true">#</a> Перезагрузка функций и перегрузка операторов</h2><p>Мы обычно не думаем о перегрузке (<code>overload</code>) как о полиморфизме, но она также позволяет добавить в класс больше функциональности оставляя интерфейс более сжатым. Часто этот тип полиморфизма применяется и без ООП. При вызове перегруженной функции объекта корректный метод выбирается на основе названия функции и списка параметров функции, которые уникальны для каждой перегруженного метода.</p><p>Ниже общий пример использования полиморфизма через перегрузку функций. Объект потока (<code>TMyStreamReader1</code>) содержит методы для чтения данных: <code>ReadBoolean</code>, <code>ReadDouble</code>, <code>ReadInteger</code>. При использовании объекта придётся в каждом случае проверять тип переменной и использовать соответствующую функцию. Гораздо проще вызвать метод <code>Read</code> и получить вызов корректной версии метода в зависимости от сигнатуры (<code>TMyStreamReader2</code>).</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>TMyStreamReader1 = class(TMyGenericStreamReader)\npublic\n function ReadBoolean(var Buffer: Boolean): Longint;\n function ReadInteger(var Buffer: Integer): Longint;\n function ReadSingle(var Buffer: Single): Longint;\n function ReadDouble(var Buffer: Double): Longint;\nend;\n\nTMyStreamReader2 = class(TMyGenericStreamReader)\npublic\n function ReadData(var Buffer: Boolean): Longint; overload;\n function ReadData(var Buffer: Integer): Longint; overload;\n function ReadData(var Buffer: Single): Longint; overload;\n function ReadData(var Buffer: Double): Longint; overload;\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Перегрузка операторов идентична с перегрузкой функций, но имеет небольшие отличия в синтаксисе. Операторы обычно не применяются к классам. Левая и правая сторона от инфиксного оператора становятся двумя аргументами, возвращаемое значение определяет результат функции.</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>PointRecord = record\n  x,y,z : double;\n\n class operator Multiply(P1: PointRecord; P2: PointRecord): Double; // скалярное произведение P1*P2\n class operator Multiply(P: PointRecord; d: double): PointRec; // d*P\n class operator Multiply(d: double; P: PointRecord): PointRec; // P*d\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="наследование" tabindex="-1"><a class="header-anchor" href="#наследование" aria-hidden="true">#</a> Наследование</h2><p>Мы уже видели что можем унаследовать одни класс от другого и переопределить виртуальные (<code>virtual</code>) методы родительского класса. Если не переопределять виртуальные методы, то они унаследуются из родительского класса. Например, если мы объявим публичный не виртуальный метод <code>TDog.Pant()</code>, то мы увидим его когда будем ссылаться на наш объект через более специфичный класс (класс-потомок).</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>type\n  TDog = class\n  public\n    function Pant: string; \n    function Bark: string; virtual;   // Woof!\n  end;\n\n  THound = class(TDog) // наследуется из TDog, но не переопределяет Bark(). Если мы вызовем Bark, то мы получим Woof! объявленный в TDog \n  end;\n\n  TPoodle = class(TDog)\n  public\n   // Этот метод заменит одноимённый в TDog \n   function Bark: string; override;   // Yap!\n  end;\n\n  TMaltesePoodle = class(TPoodle) // Наследуется из TPoodle, но не переопределяет Bark(). Если мы вызовем Bark, то получим Yap! объявленный в TPoodle\n  end;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="субтипирование" tabindex="-1"><a class="header-anchor" href="#субтипирование" aria-hidden="true">#</a> Субтипирование</h2><p>Субтипирование (Subtyping) применяется к наследованию интерфейсов. Думаю, что название &quot;субтипирование&quot; неудачное потому что классы связываются через отношение &quot;является&quot; со своими предками и каждый класс в сущности более специализированный тип своего родителя. &quot;Расширение интерфейса&quot; может быть технически более корректным термином. В этом случае интерфейс который наследуется от другого действительно расширяет контракт, наследуемый интерфейс может добавлять больше требований к определению, но не может убирать их. В надуманном примере ниже любой объект который реализует <code>IEquatable</code> должен также полностью удовлетворять <code>IComparable</code>.</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>type\n  IComparable = interface(IInterface)\n    function CompareTo(AObject: TObject): Integer;\n  end;\n\n  IEquatable = interface(IComparable)\n    function EqualTo(AObject: TObject): Boolean;\n  end;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Расширение интерфейса не диктует путь которым классы должны реализовывать сигнатуры указанных функций, оно только требует чтобы функции присутствовали. Объекты которые удовлетворяют требованиям конкретного интерфейса должны также также удовлетворять требованиям полной иерархии этого интерфейса.</p><p>Существуют случаи когда наследование интерфейса действительно представляет субтипирование. Это случай когда интерфейс определяется похожим на чистый абстрактный класс. В этом случае мы можем иметь псевдо-отношение &quot;является&quot; между интерфейсам.</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>type\n  IMyABCList = Interface\n    // Детали не важны. Предполагайте что интерфейс определяет индексирование, добавление и удаление элементов\n  end;\n\n  IMyEnumerableABCList = Interface(IMyABCList)\n    function GetEnumerator: IEnumerator;\n  end;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>IMyEnumerableABCList</code> действительно выглядит как подтип <code>IMyABCList</code>. Можно применить эту иерархию интерфейсов к классам независимо от их структуры наследования. Сигнатуры определения методов и свойств наследуются от супертипа к подтипу, но поведения реализованных методов не определено в подтипах (или вообще в интерфейсах).</p><p>Интерфейсы сами по себе являются полиморфными помощниками. Они не содержат конкретного когда. когда мы ссылаемся на объект через интерфейс фактическая реализация обеспечивается объектом и его иерархией, мы знаем только что контракт интерфейса выполнен.</p><h2 id="резюме" tabindex="-1"><a class="header-anchor" href="#резюме" aria-hidden="true">#</a> Резюме</h2><p>Полиморфизм редуцирует большое количество методов к нескольким, в которых специализация выводится из конкретного типа, сигнатуры параметров, или объекта который удовлетворяет интерфейсу.</p>',24),R={render:function(n,e){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("h1",l,[i,(0,s.Uk)(" "+(0,r.zw)(n.$frontmatter.title),1)]),(0,s._)("p",null,[p,(0,s._)("a",c,[b,(0,s.Wm)(a)]),o]),u,d,t,m,(0,s._)("p",null,[D,(0,s._)("a",B,[g,(0,s.Wm)(a)]),h]),f,v,(0,s._)("p",null,[T,(0,s._)("a",P,[k,(0,s.Wm)(a)]),y]),L],64)}}}}]);