"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[7657],{47518:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-39e460dc",path:"/%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%8B-%D0%BF%D0%B5%D1%80%D0%B5%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BE%D0%B2-%D0%B2-delphi.html",title:"Проблемы перегрузки операторов в Delphi",lang:"ru-RU",frontmatter:{title:"Проблемы перегрузки операторов в Delphi",date:"2019-05-14",categories:["Delphi"],tags:["Delphi","перевод"]},excerpt:"",headers:[],filePathRelative:"проблемы-перегрузки-операторов-в-delphi.md",git:{updatedTime:1692859375e3}}},6728:(n,e,s)=>{s.r(e),s.d(e,{default:()=>d});var a=s(66252),r=s(3577);const l={id:"frontmatter-title",tabindex:"-1"},p=(0,a._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),b=(0,a.Uk)("Вольный перевод поста "),i={href:"https://sergworks.wordpress.com/2013/04/10/on-the-operator-overloading-in-delphi/",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("On the operator overloading in Delphi"),u=(0,a.Uk)("."),m=(0,a.uE)('<p>Перегрузка операторов в Delphi является простой если запись не содержит в себе полей-ссылок на объекты в куче. Чтобы проиллюстрировать эту проблему рассмотрим следующий (некорректный!) пример:</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>program DelphiDemo;\n\n{$APPTYPE CONSOLE}\n\nuses\n  SysUtils;\n\ntype\n  Adder = record\n  private\n    FRef: PInteger;\n    function GetMemory: Integer;\n    procedure SetMemory(AValue: Integer);\n  public\n    procedure Init(AValue: Integer = 0);\n    procedure Done;\n    class operator Add(const A, B: Adder): Adder;\n    property Memory: Integer read GetMemory write SetMemory;\n  end;\n\n{ Adder }\n\nclass operator Adder.Add(const A, B: Adder): Adder;\nbegin\n// !!! Утечка памяти\n  New(Result.FRef);\n  Result.Memory:= A.Memory + B.Memory;\nend;\n\nprocedure Adder.Done;\nbegin\n  Dispose(FRef);\nend;\n\nfunction Adder.GetMemory: Integer;\nbegin\n  Result:= FRef^;\nend;\n\nprocedure Adder.Init(AValue: Integer);\nbegin\n  New(FRef);\n  FRef^:= AValue;\nend;\n\nprocedure Adder.SetMemory(AValue: Integer);\nbegin\n  FRef^:= AValue;\nend;\n\nprocedure Test;\nvar\n  A, B, C: Adder;\n\nbegin\n  A.Init(1);\n  B.Init(2);\n  C.Init();\n  C := A + B;\n  Writeln(C.Memory);\n  C.Done;\n  B.Done;\n  A.Done;\nend;\n\nbegin\n  ReportMemoryLeaksOnShutdown:= True;\n  try\n    Test;\n  except\n    on E: Exception do\n      Writeln(E.ClassName, &#39;: &#39;, E.Message);\n  end;\n  ReadLn;\nend.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><p>Строка <code>#59 (C:= A + B)</code> работает следующим образом:</p><ul><li>Временная запись <code>Result</code> помещается в стек</li><li>Временная запись заполняется суммой <code>A + B</code> (метод <code>Adder.Add</code>)</li><li>Временная запись присваивается (поверхностным копированием) переменной <code>C</code></li><li>Временная запись убирается со стека</li></ul><p>Код работает правильно если <code>Adder</code> не содержит ссылок на кучу, <code>FRef</code> в экземпляре <code>Adder</code> делает ситуацию более сложной. Вы должны всегда инициализировать поле <code>FRef</code> для каждого экземпляра <code>Adder</code>, но вы не можете финализировать временную запись которая создана на строке <code>#59</code>. (также не можете финализировать запись которая инициализируется в строке <code>#58</code> и теряется в строке <code>#59</code>).</p><p>Единственный путь исправить утечку памяти — закомпостировать строку <code>#58</code>, но это не будет работать в более сложных случаях, например, когда переменная должна участвовать в выражении справа.</p><p>Правильное решение использует автоматическое управление памятью вместо простых указателей. Ниже решение использующее интерфейс:</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>program DelphiDemo2;\n\n{$APPTYPE CONSOLE}\n\nuses\n  SysUtils, Classes;\n\ntype\n  IAdder = interface\n    function GetMemory: Integer;\n    procedure SetMemory(AValue: Integer);\n  end;\n\n  TAdderRef = class(TInterfacedObject, IAdder)\n  private\n    FMemory: Integer;\n    function GetMemory: Integer;\n    procedure SetMemory(AValue: Integer);\n  end;\n\n  Adder = record\n  private\n    FRef: IAdder;\n    function GetMemory: Integer;\n    procedure SetMemory(AValue: Integer);\n  public\n    procedure Init(AValue: Integer = 0);\n    procedure Done;\n    class operator Add(const A, B: Adder): Adder;\n    property Memory: Integer read GetMemory write SetMemory;\n  end;\n\n{ TAdderRef }\n\nfunction TAdderRef.GetMemory: Integer;\nbegin\n  Result:= FMemory;\nend;\n\nprocedure TAdderRef.SetMemory(AValue: Integer);\nbegin\n  FMemory:= AValue;\nend;\n\n{ Adder }\n\nclass operator Adder.Add(const A, B: Adder): Adder;\nbegin\n  Result.FRef:= TAdderRef.Create;\n  Result.Memory:= A.Memory + B.Memory;\nend;\n\nprocedure Adder.Init(AValue: Integer);\nbegin\n  FRef:= TAdderRef.Create;\n  FRef.SetMemory(AValue);\nend;\n\nprocedure Adder.Done;\nbegin\n  FRef:= nil;\nend;\n\nfunction Adder.GetMemory: Integer;\nbegin\n  Result:= FRef.GetMemory;\nend;\n\nprocedure Adder.SetMemory(AValue: Integer);\nbegin\n  FRef.SetMemory(AValue);\nend;\n\nprocedure Test;\nvar\n  A, B, C: Adder;\n\nbegin\n  A.Init(1);\n  B.Init(2);\n//  C.Init();\n  C:= A + B;\n  Writeln(C.Memory);\n//  C.Done;\n//  B.Done;\n//  A.Done;\nend;\n\nbegin\n  ReportMemoryLeaksOnShutdown:= True;\n  try\n    Test;\n  except\n    on E: Exception do\n      Writeln(E.ClassName, &#39;: &#39;, E.Message);\n  end;\n  ReadLn;\nend.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br></div></div><p>Полезный побочный эффект при таком подходе в том что вам не нужно инициализировать или финализировать поле <code>FRef</code> вручную (но вы можете это делать). Несколько строк в процедуре <code>Test</code>, показанной выше, закомментированы потому, что они больше не нужны, но они могут быть раскомментированы и код продолжит верно работать — автоматическое управление памятью для интерфейсов обеспечит это.</p><p>Очень интересно знать как обсуждаемая проблема решается в C++. Стандартный C++ подход полностью отличается — он требует перегрузки оператора присваивания (возможность, которую Delphi не поддерживает) и написания конструктора копирования (другая концепция отсутствующая в Delphi). Я планирую обсудить это позже.</p>',10),d={render:function(n,e){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h1",l,[p,(0,a.Uk)(" "+(0,r.zw)(n.$frontmatter.title),1)]),(0,a._)("p",null,[b,(0,a._)("a",i,[c,(0,a.Wm)(s)]),u]),m],64)}}}}]);