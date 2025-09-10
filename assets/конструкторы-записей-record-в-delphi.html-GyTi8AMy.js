import{_ as a,c as i,a as e,b as l,t as r,o as d}from"./app-DvfQ69-Y.js";const p={},c={id:"frontmatter-title",tabindex:"-1"},t={class:"header-anchor",href:"#frontmatter-title"};function o(s,n){return d(),i("div",null,[e("h1",c,[e("a",t,[e("span",null,r(s.$frontmatter.title),1)])]),n[0]||(n[0]=l(`<p>Вольный перевод поста <a href="https://sergworks.wordpress.com/2012/03/13/record-constructors-in-delphi/" target="_blank" rel="noopener noreferrer">Record Constructors in Delphi</a></p><p>Конструкторы записей в Delphi — особенность языка которая вызывает вопросы. Зачем они нужны и когда их использовать вместо методов записей? В <a href="http://docwiki.embarcadero.com/RADStudio/en/Structured_Types#Records_.28advanced.29" target="_blank" rel="noopener noreferrer">документации Delphi</a> написано следующее:</p><blockquote><p>Records are constructed automatically, using a default no-argument constructor, but classes must be explicitly constructed. Because records have a default no-argument constructor, any user-defined record constructor must have one or more parameters.</p><p>Записи создаются автоматически, используя конструктор по умолчанию без параметров, а классы должны создаваться в явном виде. Из-за того что записи имеют конструктор по умолчанию без параметров любой определённый пользователем конструктор должен содержать как минимум один параметр.</p></blockquote><p>Приведённая выше документация ничего не объясняет. В Delphi не существует такой вещи как &quot;конструктор по умолчанию без параметров&quot;. Сразу возникает ещё один вопрос — почему в Delphi запрещены конструкторы без параметров и разрешены с параметрами?</p><p>На самом деле конструкторы записей в Delphi это просто специальный синтаксис для методов записей.</p><p>Предположим, вам нужна запись которая реализует комплексные числа и требуется метод инициализации. Вы можете использовать функцию</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TComplex = record</span>
<span class="line">    Re, Im: Double;</span>
<span class="line">    function Create(ARe, AIm: Double): TComplex;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  function TComplex.Create(ARe, AIm: Double): TComplex;</span>
<span class="line">  begin</span>
<span class="line">    Result.Re:= ARe;</span>
<span class="line">    Result.Im:= AIm;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>или процедуру</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TComplex = record</span>
<span class="line">    Re, Im: Double;</span>
<span class="line">    procedure Create(ARe, AIm: Double);</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  procedure TComplex.Create(ARe, AIm: Double);</span>
<span class="line">  begin</span>
<span class="line">    Re:= ARe;</span>
<span class="line">    Im:= AIm;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Используя конструктор в записи вы можете совместить обе формы</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TComplex = record</span>
<span class="line">    Re, Im: Double;</span>
<span class="line">    constructor Create(ARe, AIm: Double);</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">  constructor TComplex.Create(ARe, AIm: Double);</span>
<span class="line">  begin</span>
<span class="line">    Re:= ARe;</span>
<span class="line">    Im:= AIm;</span>
<span class="line">  end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Можно вызывать конструктор как функцию</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">var </span>
<span class="line">  C: TComplex;</span>
<span class="line">begin</span>
<span class="line">  C:= TComplex.Create(0, 0);</span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>или как процедуру</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">var </span>
<span class="line">  C: TComplex;</span>
<span class="line">begin</span>
<span class="line">  C.Create(0, 0);</span>
<span class="line">end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Обе формы корректны.</p><p>Пример выше может быть слишком упрошенным и выглядеть искусственно, но иногда возможность вызывать метод записи как функцию и как процедуру полезна и удобна.</p>`,17))])}const u=a(p,[["render",o]]),v=JSON.parse('{"path":"/%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80%D1%8B-%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B5%D0%B9-record-%D0%B2-delphi.html","title":"Конструкторы записей (record) в Delphi","lang":"ru-RU","frontmatter":{"title":"Конструкторы записей (record) в Delphi","date":"2019-05-11","categories":["Delphi"],"tags":["Delphi","перевод"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"конструкторы-записей-record-в-delphi.md"}');export{u as comp,v as data};
