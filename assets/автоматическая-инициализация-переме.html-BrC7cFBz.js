import{_ as a,c as i,a as n,b as l,t as r,o as d}from"./app-DvfQ69-Y.js";const c={},p={id:"frontmatter-title",tabindex:"-1"},t={class:"header-anchor",href:"#frontmatter-title"};function v(e,s){return d(),i("div",null,[n("h1",p,[n("a",t,[n("span",null,r(e.$frontmatter.title),1)])]),s[0]||(s[0]=l(`<p>Переменные в Delphi можно разделить на три типа</p><ul><li>Глобальные</li><li>Локальные</li><li>Поля объектов</li></ul><p>Разные типы имеют свои особенности инициализация по умолчанию. Глобальные переменные — переменные которые объявлены в теле модуля всегда инициализируются автоматически. Например, числовые типы всегда будут равны нулю.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">implementation</span>
<span class="line"></span>
<span class="line">{$R *.dfm}</span>
<span class="line"></span>
<span class="line">var</span>
<span class="line">  GlobalVar: Integer;</span>
<span class="line"></span>
<span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">begin</span>
<span class="line">  ShowMessage(IntToStr(GlobalVar)); // 0</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Локальные переменные — переменные объявленные внутри функций, процедур или методов не инициализируются автоматически. Их значение можно считать случайным. Например, следующий код будет выводить разное сообщение при каждом запуске программы</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button2Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  LocalVar: Integer;</span>
<span class="line">begin</span>
<span class="line">  ShowMessage(IntToStr(LocalVar)); // 345342 или другие случайное число</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Опаснее всего ситуация с объектными типами.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button2Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  LocalVar: TObject;</span>
<span class="line">begin</span>
<span class="line">  ShowMessage(BoolToStr(LocalVar = nil, True));  // False</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В переменной находится случайны адрес, следовательно вызов методов и изменение полей приведёт к непредсказуемым результатам.</p><p>Поля объекта инициализируются также как глобальные переменные, причём до того как начнёт выполнятся код из конструктора.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TMyClass = class</span>
<span class="line">    FVar: Integer;</span>
<span class="line">    constructor Create;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">{ TMyClass }</span>
<span class="line"></span>
<span class="line">constructor TMyClass.Create;</span>
<span class="line">begin</span>
<span class="line">  ShowMessage(IntToStr(FVar)); // 0</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure TForm1.Button3Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  Obj: TMyClass;</span>
<span class="line">begin</span>
<span class="line">  Obj := TMyClass.Create;</span>
<span class="line">  FreeAndNil(Obj);</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="выводы" tabindex="-1"><a class="header-anchor" href="#выводы"><span>Выводы</span></a></h2><p>Глобальные и локальные перемеренные обязательно нужно инициализировать в явном виде, это позволяет избежать большого количества проблем и повышает читаемость.</p><p>Поля объектов можно инициализировать в конструкторе. Это обязательно нужно делать для некоторых типов, например, для Variant, так как <a href="http://way23.ru/%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-null-%D0%B8-unassigned-%D1%82%D0%B8/" target="_blank" rel="noopener noreferrer">по умолчанию они равны Unassigned</a>. Для строк и чисел особого смысла в инициализации нулями и пустыми строками нет, возможно, для унификации.</p><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки"><span>Ссылки</span></a></h2><p><a href="http://docwiki.embarcadero.com/RADStudio/Rio/en/Variables_(Delphi)" target="_blank" rel="noopener noreferrer">Раздел документации</a> про переменные.</p>`,16))])}const u=a(c,[["render",v]]),m=JSON.parse('{"path":"/%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5.html","title":"Автоматическая инициализация переменных в Delphi","lang":"ru-RU","frontmatter":{"title":"Автоматическая инициализация переменных в Delphi","date":"2019-04-19","categories":["Delphi"],"tags":["Delphi","совершенный-код"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"автоматическая-инициализация-переме.md"}');export{u as comp,m as data};
