"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[4291],{80273:(n,a,s)=>{s.r(a),s.d(a,{data:()=>r});const r={key:"v-7a9eb116",path:"/%D0%BE%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D1%8F-%D1%81%D1%82%D1%80%D0%BE%D0%BA-%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85-%D0%B8-%D0%B4%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5.html",title:"Отличия строк, статических и динамических массивов в Delphi",lang:"ru-RU",frontmatter:{title:"Отличия строк, статических и динамических массивов в Delphi",date:"2019-08-18",categories:["Delphi"],tags:["Delphi"]},excerpt:"",headers:[],filePathRelative:"отличия-строк-статических-и-динамиче.md",git:{updatedTime:1692859375e3}}},91792:(n,a,s)=>{s.r(a),s.d(a,{default:()=>m});var r=s(66252),e=s(3577);const l={id:"frontmatter-title",tabindex:"-1"},p=(0,r._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),b=(0,r.uE)('<p>Массивы и строки отличаются поведением при присваивании переменных. В случае строк, после присваивания и изменения значения в одной из переменных, создаётся новая строка. Примерно так же работают статические массивы (мне не удалось найти описание в документации). В отличии от них, динамические массивы просто присваиваются по ссылке.</p><p>Следующий участок кода демонстрирует различия в поведении:</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>function ArrayToStr(const AArray: array of Integer): string;\nvar\n  i: Integer;\nbegin\n  Result := &#39;&#39;;\n  for i in AArray do\n    Result := Result + IntToStr(i);\nend;\n\nprocedure TForm1.Button1Click(Sender: TObject);\nvar\n  str1, str2: string;\n  array_static1, array_static2: array[0..2] of Integer;\n  array1, array2: array of Integer;\nbegin\n  Memo1.Clear;\n  Memo2.Clear;\n  Memo3.Clear;\n\n  // string\n\n  str1 := &#39;123&#39;;\n\n  str2 := str1;\n  str2[1] := &#39;5&#39;;\n\n  Memo1.Lines.Add(str1); // 123\n  Memo1.Lines.Add(str2); // 532\n\n  // array[0..2] of Integer\n\n  array_static1[0] := 1;\n  array_static1[1] := 2;\n  array_static1[2] := 3;\n\n  array_static2 := array_static1;\n  array_static2[0] := 5;\n\n  Memo2.Lines.Add(ArrayToStr(array_static1)); // 123\n  Memo2.Lines.Add(ArrayToStr(array_static2)); // 532\n\n  // array of Integer\n\n  SetLength(array1, 3);\n  array1[0] := 1;\n  array1[1] := 2;\n  array1[2] := 3;\n\n  array2 := array1;\n  array2[0] := 5;\n\n  Memo3.Lines.Add(ArrayToStr(array1)); // 532\n  Memo3.Lines.Add(ArrayToStr(array2)); // 532\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div>',3),i=(0,r.Uk)("Детальное объяснение поведения строк в "),t={href:"http://www.delphikingdom.com/asp/viewitem.asp?catalogid=1184",target:"_blank",rel:"noopener noreferrer"},c=(0,r.Uk)("статье на DelphiKingdom"),u=(0,r.Uk)(" пункт 2.16. Представление строк в памяти."),m={render:function(n,a){const s=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("h1",l,[p,(0,r.Uk)(" "+(0,e.zw)(n.$frontmatter.title),1)]),b,(0,r._)("p",null,[i,(0,r._)("a",t,[c,(0,r.Wm)(s)]),u])],64)}}}}]);