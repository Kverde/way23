import{_ as a,c as i,a as n,b as l,t as d,o as c}from"./app-DvfQ69-Y.js";const p={},r={id:"frontmatter-title",tabindex:"-1"},t={class:"header-anchor",href:"#frontmatter-title"};function v(e,s){return c(),i("div",null,[n("h1",r,[n("a",t,[n("span",null,d(e.$frontmatter.title),1)])]),s[0]||(s[0]=l(`<p>Вольный перевод поста <a href="https://www.thedelphigeek.com/2012/10/automagically-creating-object-fields.html" target="_blank" rel="noopener noreferrer">Automagically Creating Object Fields with RTTI</a></p><p>На работе возникла задача создания иерархии классов, причём классы почти не содержали реализации, только объявление классов, с одним исключением — каждый класс отвечал за создание и уничтожение внутренних объектов. Я задумался, может быть, я могу использовать атрибуты и RTTI чтобы реализовать это поведение в одном месте, вместо того чтобы реализовывать в каждом классе.</p><h2 id="проблема" tabindex="-1"><a class="header-anchor" href="#проблема"><span>Проблема</span></a></h2><p>Мне нужны классы следующего вида</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TObjectB = class</span>
<span class="line">    FData1: integer;</span>
<span class="line">    FData2: string;</span>
<span class="line">    FData3: boolean;</span>
<span class="line">  end; </span>
<span class="line"></span>
<span class="line">  TObjectA = class</span>
<span class="line">  strict private</span>
<span class="line">    FObjectB: TObjectB;</span>
<span class="line">  public</span>
<span class="line">    constructor Create;</span>
<span class="line">    destructor Destroy; override;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">{ TObjectA }</span>
<span class="line"></span>
<span class="line">constructor TObjectA.Create;</span>
<span class="line">begin</span>
<span class="line">  inherited Create;</span>
<span class="line">  FObjectB := TObjectB.Create;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">destructor TObjectA.Destroy;</span>
<span class="line">begin</span>
<span class="line">  FreeAndNil(FObjectB);</span>
<span class="line">  inherited;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Но я слишком ленив чтобы писать в каждом классе раз примерно одинаковый конструктор и деструктор. Что мне делать?</p><h2 id="результат" tabindex="-1"><a class="header-anchor" href="#результат"><span>Результат</span></a></h2><p>Используя надлежащую инфраструктуру, код выше может быть переписан следующим образом</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TObjectB = class</span>
<span class="line">    FData1: integer;</span>
<span class="line">    FData2: string;</span>
<span class="line">    FData3: boolean;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TObjectA = class(TGpManaged)</span>
<span class="line">  strict private</span>
<span class="line">    [GpManaged]</span>
<span class="line">    FObjectB: TObjectB;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Вся реализация скрыта в классе <code>TGpManaged</code>, который описан ниже. Он реализован в модуле <a href="https://github.com/gabr42/GpDelphiUnits/blob/master/src/GpAutoCreate.pas" target="_blank" rel="noopener noreferrer">GpAutoCreate</a>, который является частью моего open-source проекта <a href="https://github.com/gabr42/GpDelphiUnits" target="_blank" rel="noopener noreferrer">GpDelphiUnits</a>, вместе с тестовой программой <code>TestGpAutoCreate</code>.</p><h2 id="решение" tabindex="-1"><a class="header-anchor" href="#решение"><span>Решение</span></a></h2><p>Класс <code>TGpManaged</code> реализует только конструктор и деструктор. Конструктор автоматически создаёт поля в классах-потомках, а деструктор автоматически уничтожает их.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TGpManaged = class</span>
<span class="line">  public</span>
<span class="line">    constructor Create;</span>
<span class="line">    destructor  Destroy; override;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Не всегда хорошая идея автоматически создавать и уничтожать все поля. Поля, управление которыми будет проходить в автоматическом режиме, должны быть помечены атрибутом <code>[GpManaged]</code>, который реализован в этом же модуле.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  GpManagedAttribute = class(TCustomAttribute)</span>
<span class="line">  public type</span>
<span class="line">    TConstructorType = (ctNoParam, ctParBoolean);</span>
<span class="line">   strict private</span>
<span class="line">    FBoolParam      : boolean;</span>
<span class="line">    FConstructorType: TConstructorType;</span>
<span class="line">  public</span>
<span class="line">    class function  IsManaged(const obj: TRttiNamedObject): boolean; static;</span>
<span class="line">    class function GetAttr(const obj: TRttiNamedObject;</span>
<span class="line">      var ma: GpManagedAttribute): boolean; static;</span>
<span class="line">    constructor Create; overload;</span>
<span class="line">    constructor Create(boolParam: boolean); overload;</span>
<span class="line">    property BoolParam: boolean read FBoolParam;</span>
<span class="line">    property ConstructorType: TConstructorType read FConstructorType;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Атрибут может быть указан в двух формах:</p><p>Первая форма <code>[GpManaged]</code> которая будет вызывать конструктор без параметров для создания объекта помеченного атрибутом.</p><p>Вторая форма <code>[GpManaged(false)]</code> или <code>[GpManaged(true)]</code> которая будет вызывать конструктор с одним параметром с типом Boolean для создания объекта помеченного атрибутом.</p><p>Поддержка конструкторов с другими типами параметров может быть добавлена в дальнейшем.</p><p>Вторая форма с параметром конструктора была добавлена специально для создания <code>TObjectList</code>. Вызывая <code>TObjectList.Create</code> будет создан список объектов, который будет отвечать за их уничтожение. Это удобно в большинстве случаев. Тем не менее, если вы хотите чтобы список не отвечал за уничтожение объектов вы можете создать его следующим образом</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">  [GpManaged(false)]</span>
<span class="line">  FList2: TObjectList;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Более детально реализацию <code>GpManagedAttribute</code> вы можете посмотреть в исходном коде.</p><h2 id="создание-объектов" tabindex="-1"><a class="header-anchor" href="#создание-объектов"><span>Создание объектов</span></a></h2><p>Поля помеченные любой версией атрибута <code>[GpManaged]</code> создаются в конструкторе <code>TGpManaged.Create</code>.</p><p>Код сначала обращается к расширенному контексту RTTI и ищет информацию об объекте который создаётся (<code>ctx.GetType(Self.ClassType)</code>). Потом происходит перебор всех полей объявленный в этом объекте.</p><p>Для каждого поля проверяется помечено ли оно атрибутом <code>[GpManaged]</code>. Если поле не отмечено то происходит переход к следующему полю.</p><p>Если же поле помечено <code>[GpManaged]</code>, то происходит цикл по всем методам с именем <code>Create</code> (я намеренно отказался от поддержки конструкторов с другими именами). Для каждого найденного метода происходит проверка, содержит ли он соответствующее число параметров и их типы.</p><p>Если соответствие найдено то используется <code>ctor.Invoke(f.FieldType.AsInstance.MetaclassType)</code> для вызова найденного конструктора. Подходящие параметры конструктора передаются вторым аргументом <code>Invoke</code>. Результат вызова конструктора помещается поле методом <code>f.SetValue</code>.</p><p>Затем вся процедура повторяется для следующего поля.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">constructor TGpManaged.Create;</span>
<span class="line">var</span>
<span class="line">  ctor  : TRttiMethod;</span>
<span class="line">  ctx   : TRttiContext;</span>
<span class="line">  f     : TRttiField;</span>
<span class="line">  ma    : GpManagedAttribute;</span>
<span class="line">  params: TArray&lt;TRttiParameter&gt;;</span>
<span class="line">  t     : TRttiType;</span>
<span class="line">begin</span>
<span class="line">  ctx := TRttiContext.Create;</span>
<span class="line">  t := ctx.GetType(Self.ClassType);</span>
<span class="line">  for f in t.GetFields do begin</span>
<span class="line">    if not GpManagedAttribute.GetAttr(f, ma) then</span>
<span class="line">      continue; //for f</span>
<span class="line">    for ctor in f.FieldType.GetMethods(&#39;Create&#39;) do begin</span>
<span class="line">      if ctor.IsConstructor then begin</span>
<span class="line">        params := ctor.GetParameters;</span>
<span class="line">        if (ma.ConstructorType = GpManagedAttribute.TConstructorType.ctNoParam) and</span>
<span class="line">           (Length(params) = 0) then</span>
<span class="line">        begin</span>
<span class="line">          f.SetValue(Self, ctor.Invoke(f.FieldType.AsInstance.MetaclassType, []));</span>
<span class="line">          break; //for ctor</span>
<span class="line">        end</span>
<span class="line">        else </span>
<span class="line">        if (ma.ConstructorType = </span>
<span class="line">             GpManagedAttribute.TConstructorType.ctParBoolean) and</span>
<span class="line">           (Length(params) = 1) and</span>
<span class="line">           (params[0].ParamType.TypeKind = tkEnumeration) and</span>
<span class="line">           SameText(params[0].paramtype.name, &#39;Boolean&#39;) then</span>
<span class="line">        begin</span>
<span class="line">          f.SetValue(Self, </span>
<span class="line">            ctor.Invoke(f.FieldType.AsInstance.MetaclassType, [ma.BoolParam]));</span>
<span class="line">          break; //for ctor</span>
<span class="line">        end;</span>
<span class="line">      end;</span>
<span class="line">    end; //for ctor</span>
<span class="line">  end; //for f</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="уничтожение-полеи" tabindex="-1"><a class="header-anchor" href="#уничтожение-полеи"><span>Уничтожение полей</span></a></h2><p>Поля очищаются похожим образом, только взамен конструктора вызывается деструктор <code>Destroy</code>. Код проще потому что не требуется проверять каком именно деструктор вызывать.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">destructor TGpManaged.Destroy;</span>
<span class="line">var</span>
<span class="line">  ctx : TRttiContext;</span>
<span class="line">  dtor: TRttiMethod;</span>
<span class="line">  f   : TRttiField;</span>
<span class="line">  t   : TRttiType;</span>
<span class="line">begin</span>
<span class="line">  ctx := TRttiContext.Create;</span>
<span class="line">  t := ctx.GetType(Self.ClassType);</span>
<span class="line">  for f in t.GetFields do begin</span>
<span class="line">    if not GpManagedAttribute.IsManaged(f) then</span>
<span class="line">      continue; //for f</span>
<span class="line">    for dtor in f.FieldType.GetMethods(&#39;Destroy&#39;) do begin</span>
<span class="line">      if dtor.IsDestructor then begin</span>
<span class="line">        dtor.Invoke(f.GetValue(Self), []);</span>
<span class="line">        f.SetValue(Self, nil);</span>
<span class="line">        break; //for dtor</span>
<span class="line">      end;</span>
<span class="line">    end; //for dtor</span>
<span class="line">  end; //for f</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="потенциальные-проблемы" tabindex="-1"><a class="header-anchor" href="#потенциальные-проблемы"><span>Потенциальные проблемы</span></a></h2><p>Вы должны всегда помнить что этот подход намного медленней чем создание объектов обычным образом. Я не делал тестов, но не буду удивлён если автоматическое создание объектов медленнее в 100 раз. Тем не менее, скорость достаточная для управления объектами которые редко создаются и уничтожаются.</p><p>Другая проблема заключается в том, что вы должны изменить предок своих классов на <code>TGpManaged</code>. Если это не подходит для вашей ситуации, но вы всё равно хотите использовать автоматическое управление жизненным циклом объектов, то вы должны скопировать мой код в ваши базовые классы.</p>`,36))])}const u=a(p,[["render",v]]),b=JSON.parse('{"path":"/%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D1%8B%D1%85-%D0%BF.html","title":"Автоматическое создание объектных полей с помощью RTTI в Delphi","lang":"ru-RU","frontmatter":{"title":"Автоматическое создание объектных полей с помощью RTTI в Delphi","date":"2019-05-12","categories":["Delphi"],"tags":["Delphi","rtti"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"автоматическое-создание-объектных-п.md"}');export{u as comp,b as data};
