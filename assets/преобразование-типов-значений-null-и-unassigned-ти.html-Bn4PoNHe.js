import{_ as l,c as a,a as n,b as i,t as d,o as c}from"./app-DvfQ69-Y.js";const r={},p={id:"frontmatter-title",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title"};function u(e,s){return c(),a("div",null,[n("h1",p,[n("a",v,[n("span",null,d(e.$frontmatter.title),1)])]),s[0]||(s[0]=i(`<h2 id="конвертация-unassigned" tabindex="-1"><a class="header-anchor" href="#конвертация-unassigned"><span>Конвертация Unassigned</span></a></h2><p>Если переменная с типом <code>Variant</code> не инициализирована то она имеет значение <code>Unassigned</code>, даже если это поле класса:</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">type</span>
<span class="line">  TMyClass = class</span>
<span class="line">    FVar: Variant;</span>
<span class="line">  end;</span>
<span class="line"></span>
<span class="line">procedure TForm1.Button3Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  Obj: TMyClass;</span>
<span class="line">  Flag: Boolean;</span>
<span class="line">begin</span>
<span class="line">  Obj := TMyClass.Create;</span>
<span class="line">  try</span>
<span class="line">    Flag := Obj.FVar = Unassigned;</span>
<span class="line"></span>
<span class="line">    ShowMessage(BoolToStr(Flag, True)); // True</span>
<span class="line">  finally</span>
<span class="line">    FreeAndNil(Obj);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Возможны следующие случаи преобразования <code>Unassigned</code> в другие типы данных:</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  v: Variant;</span>
<span class="line">  i: Integer;</span>
<span class="line">  s: string;</span>
<span class="line">  b: Boolean;</span>
<span class="line">  d: TDateTime;</span>
<span class="line">begin</span>
<span class="line">  i := v; // 0</span>
<span class="line">  s := v; // пустая строка</span>
<span class="line">  b := v; // False</span>
<span class="line">  d := v; // 30.12.1899</span>
<span class="line"></span>
<span class="line">  ShowMessage(IntToStr(i));</span>
<span class="line">  ShowMessage(s);</span>
<span class="line">  ShowMessage(BoolToStr(b, True));</span>
<span class="line">  ShowMessage(DateTimeToStr(d));</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Значение <code>Unassigned</code> нужно иметь в виду при работе с <code>Variant</code>. Но с практической точки зрения более интересно поведение в случае значения <code>null</code>. Например, он часто встречается при получении значения из поля датасета (<code>TField</code>) через свойство <code>Value</code>.</p><h2 id="конвертация-null" tabindex="-1"><a class="header-anchor" href="#конвертация-null"><span>Конвертация Null</span></a></h2><p>Конвертация <code>null</code> зависит от значения логической глобальной переменной <code>System.Variants.NullStrictConvert</code>. Её значение по умолчанию равно <code>True</code> и при попытке конвертации <code>null</code> появляется исключение <code>EVariantTypeCastError</code>. Если же значение <code>NullStrictConvert</code> равно <code>False</code>, то по умолчанию <code>null</code> преобразуется аналогично <code>Unassigned</code>.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  v: Variant;</span>
<span class="line">  i: Integer;</span>
<span class="line">  s: string;</span>
<span class="line">  b: Boolean;</span>
<span class="line">  d: TDateTime;</span>
<span class="line">begin</span>
<span class="line">  NullStrictConvert := False;</span>
<span class="line"></span>
<span class="line">  v := null;</span>
<span class="line">  i := v; // 0</span>
<span class="line">  s := v; // пустая строка</span>
<span class="line">  b := v; // False</span>
<span class="line">  d := v; // 30.12.1899</span>
<span class="line"></span>
<span class="line">  ShowMessage(IntToStr(i));</span>
<span class="line">  ShowMessage(s);</span>
<span class="line">  ShowMessage(BoolToStr(b, True));</span>
<span class="line">  ShowMessage(DateTimeToStr(d));</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Есть особенность для типа <code>String</code>. Можно задать какой строке будет равен <code>null</code>. Например</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button2Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  v: Variant;</span>
<span class="line">  s: string;</span>
<span class="line">begin</span>
<span class="line">  NullStrictConvert := False;</span>
<span class="line">  NullAsStringValue := &#39;my_null&#39;;</span>
<span class="line"></span>
<span class="line">  v := null;</span>
<span class="line">  s := v; </span>
<span class="line"></span>
<span class="line">  ShowMessage(s); // my_null</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="выражения" tabindex="-1"><a class="header-anchor" href="#выражения"><span>Выражения</span></a></h2><p>Если <code>null</code> участвует в выражении то результат выражения будет <code>null</code>.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button2Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  v: Variant;</span>
<span class="line">  s: string;</span>
<span class="line">begin</span>
<span class="line">  NullStrictConvert := False;</span>
<span class="line">  NullAsStringValue := &#39;null&#39;;</span>
<span class="line"></span>
<span class="line">  v := null + 2;</span>
<span class="line">  s := v;</span>
<span class="line"></span>
<span class="line">  ShowMessage(s); // null</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ситуация с <code>Unassigned</code> интереснее. Вероятно, срабатывает такое же преобразование как при конвертации, в данном примере к 0. Описания в документации нет.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button2Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  v: Variant;</span>
<span class="line">  s: string;</span>
<span class="line">begin</span>
<span class="line">  v := v + 2;</span>
<span class="line">  s := v;</span>
<span class="line"></span>
<span class="line">  ShowMessage(s); // 2</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="сравнения" tabindex="-1"><a class="header-anchor" href="#сравнения"><span>Сравнения</span></a></h2><p>Поведение <code>null</code> при сравнении зависит от глобальных переменных <code>NullEqualityRule</code> и <code>NullMagnitudeRule</code>.</p><p><code>NullEqualityRule</code> определяет результат операторов &quot;=&quot; и &quot;&lt;&gt;&quot; (равно и не равно). У этой переменной возможны три значения</p><ul><li><code>ncrError</code> — сравнение с <code>null</code> вызывает исключение</li><li><code>ncrStrict</code> — результат сравнение с <code>null</code> всегда равен <code>False</code></li><li><code>ncrLoose</code> (по умолчанию) — <code>null</code> равен другому <code>null</code> и не равен другим значениям</li></ul><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  v: Variant;</span>
<span class="line">  flag: Boolean;</span>
<span class="line">begin</span>
<span class="line">  v := null;</span>
<span class="line">  flag := v = null;</span>
<span class="line"></span>
<span class="line">  ShowMessage(BoolToStr(flag, True)); // True </span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure TForm1.Button2Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  v: Variant;</span>
<span class="line">  flag: Boolean;</span>
<span class="line">begin</span>
<span class="line">  NullEqualityRule := ncrStrict;</span>
<span class="line">  v := null;</span>
<span class="line">  flag := v = null;</span>
<span class="line"></span>
<span class="line">  ShowMessage(BoolToStr(flag, True)); // False </span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure TForm1.Button3Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  v: Variant;</span>
<span class="line">  flag: Boolean;</span>
<span class="line">begin</span>
<span class="line">  NullEqualityRule := ncrError;</span>
<span class="line">  v := null;</span>
<span class="line">  flag := v = null; // Исключение EVariantInvalidNullOpError</span>
<span class="line"></span>
<span class="line">  ShowMessage(BoolToStr(flag, True));</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>NullMagnitudeRule</code> определяет результат операторов &quot;&lt;&quot; и &quot;&gt;&quot; (больше и меньше). Значения этой переменной аналогичны <code>NullEqualityRule</code></p><ul><li><code>ncrError</code> — сравнение с <code>null</code> вызывает исключение</li><li><code>ncrStrict</code> — результат сравнение с <code>null</code> всегда равен <code>False</code></li><li><code>ncrLoose</code> (по умолчанию) — <code>null</code> считается меньше любого другого значения</li></ul><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button2Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  v: Variant;</span>
<span class="line">  flag: Boolean;</span>
<span class="line">begin</span>
<span class="line">  v := null;</span>
<span class="line">  flag := v &lt; -1;</span>
<span class="line"></span>
<span class="line">  ShowMessage(BoolToStr(flag, True)); // True</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Интересный случай сравнения null с null</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TForm1.Button2Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  v: Variant;</span>
<span class="line">  flag: Boolean;</span>
<span class="line">begin</span>
<span class="line">  v := null;</span>
<span class="line">  flag := v &lt; null;</span>
<span class="line"></span>
<span class="line">  ShowMessage(BoolToStr(flag, True)); // False</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="выводы" tabindex="-1"><a class="header-anchor" href="#выводы"><span>Выводы</span></a></h2><ul><li>Переменные типа <code>Variant</code> нужно всегда инициализировать, даже если они являются переменным класса, чтобы не сталкиваться с <code>Unassigned</code>.</li><li>Во всех случаях при работе с <code>Variant</code> нужно учитывать <code>null</code>.</li><li>Менять или не менять значение по умолчанию переменной <code>NullStrictConvert</code> вопрос открытый.</li></ul><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки"><span>Ссылки</span></a></h2><ul><li><a href="http://docwiki.embarcadero.com/RADStudio/Rio/en/Variant_Types_(Delphi)" target="_blank" rel="noopener noreferrer">Документация</a> по типу Variant.</li></ul>`,30))])}const t=l(r,[["render",u]]),m=JSON.parse('{"path":"/%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-null-%D0%B8-unassigned-%D1%82%D0%B8.html","title":"Преобразование типов значений Null и Unassigned типа Variant в Delphi","lang":"ru-RU","frontmatter":{"title":"Преобразование типов значений Null и Unassigned типа Variant в Delphi","date":"2019-04-18","categories":["Delphi"],"tags":["Delphi"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"преобразование-типов-значений-null-и-unassigned-ти.md"}');export{t as comp,m as data};
