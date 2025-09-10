import{_ as e,c as i,a as s,b as l,t as r,o as d}from"./app-DvfQ69-Y.js";const c={},p={id:"frontmatter-title",tabindex:"-1"},t={class:"header-anchor",href:"#frontmatter-title"};function v(a,n){return d(),i("div",null,[s("h1",p,[s("a",t,[s("span",null,r(a.$frontmatter.title),1)])]),n[0]||(n[0]=l(`<p>Массивы и строки отличаются поведением при присваивании переменных. В случае строк, после присваивания и изменения значения в одной из переменных, создаётся новая строка. Примерно так же работают статические массивы (мне не удалось найти описание в документации). В отличии от них, динамические массивы просто присваиваются по ссылке.</p><p>Следующий участок кода демонстрирует различия в поведении:</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">function ArrayToStr(const AArray: array of Integer): string;</span>
<span class="line">var</span>
<span class="line">  i: Integer;</span>
<span class="line">begin</span>
<span class="line">  Result := &#39;&#39;;</span>
<span class="line">  for i in AArray do</span>
<span class="line">    Result := Result + IntToStr(i);</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  str1, str2: string;</span>
<span class="line">  array_static1, array_static2: array[0..2] of Integer;</span>
<span class="line">  array1, array2: array of Integer;</span>
<span class="line">begin</span>
<span class="line">  Memo1.Clear;</span>
<span class="line">  Memo2.Clear;</span>
<span class="line">  Memo3.Clear;</span>
<span class="line"></span>
<span class="line">  // string</span>
<span class="line"></span>
<span class="line">  str1 := &#39;123&#39;;</span>
<span class="line"></span>
<span class="line">  str2 := str1;</span>
<span class="line">  str2[1] := &#39;5&#39;;</span>
<span class="line"></span>
<span class="line">  Memo1.Lines.Add(str1); // 123</span>
<span class="line">  Memo1.Lines.Add(str2); // 532</span>
<span class="line"></span>
<span class="line">  // array[0..2] of Integer</span>
<span class="line"></span>
<span class="line">  array_static1[0] := 1;</span>
<span class="line">  array_static1[1] := 2;</span>
<span class="line">  array_static1[2] := 3;</span>
<span class="line"></span>
<span class="line">  array_static2 := array_static1;</span>
<span class="line">  array_static2[0] := 5;</span>
<span class="line"></span>
<span class="line">  Memo2.Lines.Add(ArrayToStr(array_static1)); // 123</span>
<span class="line">  Memo2.Lines.Add(ArrayToStr(array_static2)); // 532</span>
<span class="line"></span>
<span class="line">  // array of Integer</span>
<span class="line"></span>
<span class="line">  SetLength(array1, 3);</span>
<span class="line">  array1[0] := 1;</span>
<span class="line">  array1[1] := 2;</span>
<span class="line">  array1[2] := 3;</span>
<span class="line"></span>
<span class="line">  array2 := array1;</span>
<span class="line">  array2[0] := 5;</span>
<span class="line"></span>
<span class="line">  Memo3.Lines.Add(ArrayToStr(array1)); // 532</span>
<span class="line">  Memo3.Lines.Add(ArrayToStr(array2)); // 532</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Детальное объяснение поведения строк в <a href="http://www.delphikingdom.com/asp/viewitem.asp?catalogid=1184" target="_blank" rel="noopener noreferrer">статье на DelphiKingdom</a> пункт 2.16. Представление строк в памяти.</p>`,4))])}const u=e(c,[["render",v]]),o=JSON.parse('{"path":"/%D0%BE%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D1%8F-%D1%81%D1%82%D1%80%D0%BE%D0%BA-%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85-%D0%B8-%D0%B4%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5.html","title":"Отличия строк, статических и динамических массивов в Delphi","lang":"ru-RU","frontmatter":{"title":"Отличия строк, статических и динамических массивов в Delphi","date":"2019-08-18","categories":["Delphi"],"tags":["Delphi"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"отличия-строк-статических-и-динамиче.md"}');export{u as comp,o as data};
