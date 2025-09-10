import{_ as i,c as a,a as n,b as l,t as d,o as c}from"./app-DvfQ69-Y.js";const p={},r={id:"frontmatter-title",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title"};function u(e,s){return c(),a("div",null,[n("h1",r,[n("a",v,[n("span",null,d(e.$frontmatter.title),1)])]),s[0]||(s[0]=l(`<p>Для контроля доступа к полям, методам и свойствам классов используются области видимости. В Delphi есть следующие области видимости:</p><ul><li>public</li><li>published</li><li>strict private</li><li>private</li><li>strict protected</li><li>protected</li></ul><p>Рассмотрим их на примерах.</p><h2 id="public" tabindex="-1"><a class="header-anchor" href="#public"><span>public</span></a></h2><p>Элементы секции <strong>public</strong> не имеют ограничений доступа. Они доступны отовсюду: из методов своего класса, из методов других классов, из своего модуля и из других модулей.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">unit uCircle;</span>
<span class="line"></span>
<span class="line">interface</span>
<span class="line"></span>
<span class="line">type</span>
<span class="line">  TCircle = class</span>
<span class="line">  public</span>
<span class="line">    FRadius: Integer;</span>
<span class="line"></span>
<span class="line">    function Area: Extended;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">implementation</span>
<span class="line"></span>
<span class="line">{ TCircle }</span>
<span class="line"></span>
<span class="line">function TCircle.Area: Extended;</span>
<span class="line">begin</span>
<span class="line">  Result := FRadius * FRadius * Pi;    // Поле доступно внутри класса</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">unit uCheckCircle;</span>
<span class="line"></span>
<span class="line">interface</span>
<span class="line"></span>
<span class="line">procedure CheckCircle;</span>
<span class="line"></span>
<span class="line">implementation</span>
<span class="line"></span>
<span class="line">uses</span>
<span class="line">  System.SysUtils,</span>
<span class="line">  Vcl.Dialogs,</span>
<span class="line">  uCircle;</span>
<span class="line"></span>
<span class="line">procedure CheckCircle;</span>
<span class="line">var</span>
<span class="line">  Circle: TCircle;</span>
<span class="line">begin</span>
<span class="line">  Circle := TCircle.Create;</span>
<span class="line">  try</span>
<span class="line">    Circle.FRadius := 2; // Поле доступно снаружи</span>
<span class="line">    ShowMessage(FloatToStr(Circle.FRadius));</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Circle);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">uses</span>
<span class="line">  uCheckCircle;</span>
<span class="line"></span>
<span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">begin</span>
<span class="line">  CheckCircle;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="published" tabindex="-1"><a class="header-anchor" href="#published"><span>published</span></a></h2><p>Видимость элементов в секции <strong>published</strong> полностью аналогична секции <strong>public</strong>. В этом посте рассматривается только поведение касающееся видимости, подробнее в различиях связанных с RTTI описано <a href="http://docwiki.embarcadero.com/RADStudio/Rio/en/Private,_Protected,_Public,_and_Published_Declarations" target="_blank" rel="noopener noreferrer">в документации</a>.</p><h2 id="область-по-умолчанию" tabindex="-1"><a class="header-anchor" href="#область-по-умолчанию"><span>Область по умолчанию</span></a></h2><p>Если не указывать область видимости то она будет аналогичной области <strong>public</strong>.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">unit uCircle;</span>
<span class="line"></span>
<span class="line">interface</span>
<span class="line"></span>
<span class="line">type</span>
<span class="line">  TCircle = class</span>
<span class="line">    FRadius: Integer;</span>
<span class="line"></span>
<span class="line">    function Area: Extended;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">implementation</span>
<span class="line"></span>
<span class="line">{ TCircle }</span>
<span class="line"></span>
<span class="line">function TCircle.Area: Extended;</span>
<span class="line">begin</span>
<span class="line">  Result := FRadius * FRadius * Pi;    // Поле доступно внутри класса</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Аналогично поле видно и из других модулей.</p><h2 id="strict-private" tabindex="-1"><a class="header-anchor" href="#strict-private"><span>strict private</span></a></h2><p>Самая ограниченная область видимости. Элементы в секции <strong>private</strong> доступны только из методов класса. К ним нет доступа из методов других объектов, независимо от модуля в котором они находятся. Также к ним нет доступа из наследников данного объекта.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">unit uCircle;</span>
<span class="line"></span>
<span class="line">interface</span>
<span class="line"></span>
<span class="line">type</span>
<span class="line">  TCircle = class</span>
<span class="line">  strict private</span>
<span class="line">    FRadius: Integer;</span>
<span class="line"></span>
<span class="line">  public</span>
<span class="line">    function Area: Extended;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">procedure CheckCircle;</span>
<span class="line"></span>
<span class="line">implementation</span>
<span class="line"></span>
<span class="line">uses</span>
<span class="line">  System.SysUtils,</span>
<span class="line">  Vcl.Dialogs;</span>
<span class="line"></span>
<span class="line">{ TCircle }</span>
<span class="line"></span>
<span class="line">function TCircle.Area: Extended;</span>
<span class="line">begin</span>
<span class="line">  Result := FRadius * FRadius * Pi;    // Поле доступно внутри класса</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure CheckCircle;</span>
<span class="line">var</span>
<span class="line">  Circle: TCircle;</span>
<span class="line">begin</span>
<span class="line">  Circle := TCircle.Create;</span>
<span class="line">  try</span>
<span class="line">    Circle.FRadius := 2; // ошибка компиляции</span>
<span class="line">    ShowMessage(FloatToStr(Circle.FRadius));</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Circle);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="private" tabindex="-1"><a class="header-anchor" href="#private"><span>private</span></a></h2><p>Секция <strong>private</strong> совпадает с секцией <strong>strict private</strong>, за исключением того что все элементы этой секции доступны из любого метода любого класса в том же модуле в котором объявлен класс.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">unit uCircle;</span>
<span class="line"></span>
<span class="line">interface</span>
<span class="line"></span>
<span class="line">type</span>
<span class="line">  TCircle = class</span>
<span class="line">  private</span>
<span class="line">    FRadius: Integer;</span>
<span class="line"></span>
<span class="line">  public</span>
<span class="line">    function Area: Extended;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">procedure CheckCircle;</span>
<span class="line"></span>
<span class="line">implementation</span>
<span class="line"></span>
<span class="line">uses</span>
<span class="line">  System.SysUtils,</span>
<span class="line">  Vcl.Dialogs;</span>
<span class="line"></span>
<span class="line">{ TCircle }</span>
<span class="line"></span>
<span class="line">function TCircle.Area: Extended;</span>
<span class="line">begin</span>
<span class="line">  Result := FRadius * FRadius * Pi;    // Поле доступно внутри класса</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure CheckCircle;</span>
<span class="line">var</span>
<span class="line">  Circle: TCircle;</span>
<span class="line">begin</span>
<span class="line">  Circle := TCircle.Create;</span>
<span class="line">  try</span>
<span class="line">    Circle.FRadius := 2; // работает</span>
<span class="line">    ShowMessage(FloatToStr(Circle.FRadius));</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Circle);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Если перенести процедуру <code>CheckCircle</code> в другой модуль то произойдёт ошибка компиляции, так как <code>FRadius</code> уже будет недоступен.</p><h2 id="strict-protected" tabindex="-1"><a class="header-anchor" href="#strict-protected"><span>strict protected</span></a></h2><p>Элементы объявленные с секции <strong>strict protected</strong> доступны только из методов самого класса и из классов потомков. От модуля в котором они находятся это не зависит.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">unit uCircle;</span>
<span class="line"></span>
<span class="line">interface</span>
<span class="line"></span>
<span class="line">type</span>
<span class="line">  TCircle = class</span>
<span class="line">  strict protected</span>
<span class="line">    FRadius: Integer;</span>
<span class="line">  public</span>
<span class="line">    function Area: Extended;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  TSuperCircle = class(TCircle)</span>
<span class="line">  public</span>
<span class="line">    function Diameter: Extended;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">procedure CheckCircle;</span>
<span class="line"></span>
<span class="line">implementation</span>
<span class="line"></span>
<span class="line">uses</span>
<span class="line">  System.SysUtils,</span>
<span class="line">  Vcl.Dialogs;</span>
<span class="line"></span>
<span class="line">{ TCircle }</span>
<span class="line"></span>
<span class="line">function TCircle.Area: Extended;</span>
<span class="line">begin</span>
<span class="line">  Result := FRadius * FRadius * Pi;    // Поле доступно внутри класса</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">{ TSuperCircle }</span>
<span class="line"></span>
<span class="line">function TSuperCircle.Diameter: Extended;</span>
<span class="line">begin</span>
<span class="line">  Result := FRadius * 2; // Поле доступно в потомке</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure CheckCircle;</span>
<span class="line">var</span>
<span class="line">  Circle: TCircle;</span>
<span class="line">begin</span>
<span class="line">  Circle := TCircle.Create;</span>
<span class="line">  try</span>
<span class="line">    Circle.FRadius := 2; // но вне класса также недоступно</span>
<span class="line">    ShowMessage(FloatToStr(Circle.FRadius));</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Circle);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="protected" tabindex="-1"><a class="header-anchor" href="#protected"><span>protected</span></a></h2><p>Секция <strong>protected</strong> совпадает с секцией <strong>strict protected</strong>, за исключением того что все элементы этой секции доступны из любого метода в том же модуле в котором объявлен класс. Ситуация аналогичная <strong>private</strong> и <strong>strict private</strong>.</p><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки"><span>Ссылки</span></a></h2><ul><li><a href="http://docwiki.embarcadero.com/RADStudio/Rio/en/Classes_and_Objects_(Delphi)#Private.2C_Protected.2C_and_Public_Members" target="_blank" rel="noopener noreferrer">Документация Delphi</a></li><li><a href="https://www.gunsmoker.ru/2013/02/delphi-friendliness.html" target="_blank" rel="noopener noreferrer">&quot;Дружественность&quot; в Delphi</a></li></ul>`,28))])}const m=i(p,[["render",u]]),b=JSON.parse('{"path":"/%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8-%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2-delp.html","title":"Области видимости элементов классов Delphi","lang":"ru-RU","frontmatter":{"title":"Области видимости элементов классов Delphi","date":"2019-05-07","categories":["Delphi"],"tags":["Delphi"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"области-видимости-элементов-классов-delp.md"}');export{m as comp,b as data};
