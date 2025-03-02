"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[8064],{23385:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-71ff6158",path:"/%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-null-%D0%B8-unassigned-%D1%82%D0%B8.html",title:"Преобразование типов значений Null и Unassigned типа Variant в Delphi",lang:"ru-RU",frontmatter:{title:"Преобразование типов значений Null и Unassigned типа Variant в Delphi",date:"2019-04-18",categories:["Delphi"],tags:["Delphi"]},excerpt:"",headers:[{level:2,title:"Конвертация Unassigned",slug:"конвертация-unassigned",children:[]},{level:2,title:"Конвертация Null",slug:"конвертация-null",children:[]},{level:2,title:"Выражения",slug:"выражения",children:[]},{level:2,title:"Сравнения",slug:"сравнения",children:[]},{level:2,title:"Выводы",slug:"выводы",children:[]},{level:2,title:"Ссылки",slug:"ссылки",children:[]}],filePathRelative:"преобразование-типов-значений-null-и-unassigned-ти.md",git:{updatedTime:1692859375e3}}},81627:(n,e,s)=>{s.r(e),s.d(e,{default:()=>d});var a=s(66252),l=s(3577);const r={id:"frontmatter-title",tabindex:"-1"},i=(0,a._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=(0,a.uE)('<h2 id="конвертация-unassigned" tabindex="-1"><a class="header-anchor" href="#конвертация-unassigned" aria-hidden="true">#</a> Конвертация Unassigned</h2><p>Если переменная с типом <code>Variant</code> не инициализирована то она имеет значение <code>Unassigned</code>, даже если это поле класса:</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>type\n  TMyClass = class\n    FVar: Variant;\n  end;\n\nprocedure TForm1.Button3Click(Sender: TObject);\nvar\n  Obj: TMyClass;\n  Flag: Boolean;\nbegin\n  Obj := TMyClass.Create;\n  try\n    Flag := Obj.FVar = Unassigned;\n\n    ShowMessage(BoolToStr(Flag, True)); // True\n  finally\n    FreeAndNil(Obj);\n  end;\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>Возможны следующие случаи преобразования <code>Unassigned</code> в другие типы данных:</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>procedure TForm1.Button1Click(Sender: TObject);\nvar\n  v: Variant;\n  i: Integer;\n  s: string;\n  b: Boolean;\n  d: TDateTime;\nbegin\n  i := v; // 0\n  s := v; // пустая строка\n  b := v; // False\n  d := v; // 30.12.1899\n\n  ShowMessage(IntToStr(i));\n  ShowMessage(s);\n  ShowMessage(BoolToStr(b, True));\n  ShowMessage(DateTimeToStr(d));\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>Значение <code>Unassigned</code> нужно иметь в виду при работе с <code>Variant</code>. Но с практической точки зрения более интересно поведение в случае значения <code>null</code>. Например, он часто встречается при получении значения из поля датасета (<code>TField</code>) через свойство <code>Value</code>.</p><h2 id="конвертация-null" tabindex="-1"><a class="header-anchor" href="#конвертация-null" aria-hidden="true">#</a> Конвертация Null</h2><p>Конвертация <code>null</code> зависит от значения логической глобальной переменной <code>System.Variants.NullStrictConvert</code>. Её значение по умолчанию равно <code>True</code> и при попытке конвертации <code>null</code> появляется исключение <code>EVariantTypeCastError</code>. Если же значение <code>NullStrictConvert</code> равно <code>False</code>, то по умолчанию <code>null</code> преобразуется аналогично <code>Unassigned</code>.</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>procedure TForm1.Button1Click(Sender: TObject);\nvar\n  v: Variant;\n  i: Integer;\n  s: string;\n  b: Boolean;\n  d: TDateTime;\nbegin\n  NullStrictConvert := False;\n\n  v := null;\n  i := v; // 0\n  s := v; // пустая строка\n  b := v; // False\n  d := v; // 30.12.1899\n\n  ShowMessage(IntToStr(i));\n  ShowMessage(s);\n  ShowMessage(BoolToStr(b, True));\n  ShowMessage(DateTimeToStr(d));\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>Есть особенность для типа <code>String</code>. Можно задать какой строке будет равен <code>null</code>. Например</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>procedure TForm1.Button2Click(Sender: TObject);\nvar\n  v: Variant;\n  s: string;\nbegin\n  NullStrictConvert := False;\n  NullAsStringValue := &#39;my_null&#39;;\n\n  v := null;\n  s := v; \n\n  ShowMessage(s); // my_null\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="выражения" tabindex="-1"><a class="header-anchor" href="#выражения" aria-hidden="true">#</a> Выражения</h2><p>Если <code>null</code> участвует в выражении то результат выражения будет <code>null</code>.</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>procedure TForm1.Button2Click(Sender: TObject);\nvar\n  v: Variant;\n  s: string;\nbegin\n  NullStrictConvert := False;\n  NullAsStringValue := &#39;null&#39;;\n\n  v := null + 2;\n  s := v;\n\n  ShowMessage(s); // null\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Ситуация с <code>Unassigned</code> интереснее. Вероятно, срабатывает такое же преобразование как при конвертации, в данном примере к 0. Описания в документации нет.</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>procedure TForm1.Button2Click(Sender: TObject);\nvar\n  v: Variant;\n  s: string;\nbegin\n  v := v + 2;\n  s := v;\n\n  ShowMessage(s); // 2\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="сравнения" tabindex="-1"><a class="header-anchor" href="#сравнения" aria-hidden="true">#</a> Сравнения</h2><p>Поведение <code>null</code> при сравнении зависит от глобальных переменных <code>NullEqualityRule</code> и <code>NullMagnitudeRule</code>.</p><p><code>NullEqualityRule</code> определяет результат операторов &quot;=&quot; и &quot;&lt;&gt;&quot; (равно и не равно). У этой переменной возможны три значения</p><ul><li><code>ncrError</code> — сравнение с <code>null</code> вызывает исключение</li><li><code>ncrStrict</code> — результат сравнение с <code>null</code> всегда равен <code>False</code></li><li><code>ncrLoose</code> (по умолчанию) — <code>null</code> равен другому <code>null</code> и не равен другим значениям</li></ul><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>procedure TForm1.Button1Click(Sender: TObject);\nvar\n  v: Variant;\n  flag: Boolean;\nbegin\n  v := null;\n  flag := v = null;\n\n  ShowMessage(BoolToStr(flag, True)); // True \nend;\n\nprocedure TForm1.Button2Click(Sender: TObject);\nvar\n  v: Variant;\n  flag: Boolean;\nbegin\n  NullEqualityRule := ncrStrict;\n  v := null;\n  flag := v = null;\n\n  ShowMessage(BoolToStr(flag, True)); // False \nend;\n\nprocedure TForm1.Button3Click(Sender: TObject);\nvar\n  v: Variant;\n  flag: Boolean;\nbegin\n  NullEqualityRule := ncrError;\n  v := null;\n  flag := v = null; // Исключение EVariantInvalidNullOpError\n\n  ShowMessage(BoolToStr(flag, True));\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p><code>NullMagnitudeRule</code> определяет результат операторов &quot;&lt;&quot; и &quot;&gt;&quot; (больше и меньше). Значения этой переменной аналогичны <code>NullEqualityRule</code></p><ul><li><code>ncrError</code> — сравнение с <code>null</code> вызывает исключение</li><li><code>ncrStrict</code> — результат сравнение с <code>null</code> всегда равен <code>False</code></li><li><code>ncrLoose</code> (по умолчанию) — <code>null</code> считается меньше любого другого значения</li></ul><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>procedure TForm1.Button2Click(Sender: TObject);\nvar\n  v: Variant;\n  flag: Boolean;\nbegin\n  v := null;\n  flag := v &lt; -1;\n\n  ShowMessage(BoolToStr(flag, True)); // True\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Интересный случай сравнения null с null</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>procedure TForm1.Button2Click(Sender: TObject);\nvar\n  v: Variant;\n  flag: Boolean;\nbegin\n  v := null;\n  flag := v &lt; null;\n\n  ShowMessage(BoolToStr(flag, True)); // False\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="выводы" tabindex="-1"><a class="header-anchor" href="#выводы" aria-hidden="true">#</a> Выводы</h2><ul><li>Переменные типа <code>Variant</code> нужно всегда инициализировать, даже если они являются переменным класса, чтобы не сталкиваться с <code>Unassigned</code>.</li><li>Во всех случаях при работе с <code>Variant</code> нужно учитывать <code>null</code>.</li><li>Менять или не менять значение по умолчанию переменной <code>NullStrictConvert</code> вопрос открытый.</li></ul><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки" aria-hidden="true">#</a> Ссылки</h2>',29),c={href:"http://docwiki.embarcadero.com/RADStudio/Rio/en/Variant_Types_(Delphi)",target:"_blank",rel:"noopener noreferrer"},b=(0,a.Uk)("Документация"),u=(0,a.Uk)(" по типу Variant."),d={render:function(n,e){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h1",r,[i,(0,a.Uk)(" "+(0,l.zw)(n.$frontmatter.title),1)]),p,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",c,[b,(0,a.Wm)(s)]),u])])],64)}}}}]);