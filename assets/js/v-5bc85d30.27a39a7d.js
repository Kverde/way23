"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[269],{38391:(e,n,t)=>{t.r(n),t.d(n,{data:()=>a});const a={key:"v-5bc85d30",path:"/%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC-%D1%81.html",title:"Программирование в функциональном стиле в Delphi",lang:"ru-RU",frontmatter:{title:"Программирование в функциональном стиле в Delphi",date:"2019-05-13",categories:["Delphi"],tags:["Delphi","совершенный-код","перевод","функциональное-программирование"]},excerpt:"",headers:[],filePathRelative:"программирование-в-функциональном-с.md",git:{updatedTime:1692859375e3}}},5619:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var a=t(66252),r=t(3577);const s={id:"frontmatter-title",tabindex:"-1"},l=(0,a._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=(0,a.Uk)("Вольный перевод поста "),p={href:"https://sergworks.wordpress.com/2012/02/04/functional-programming-style-in-delphi/",target:"_blank",rel:"noopener noreferrer"},o=(0,a.Uk)("Functional programming style in Delphi"),c=(0,a.Uk)("."),d=(0,a.uE)('<p>Парадигма функционального программирования находит свой путь даже в Delphi — императивном языке без сборщика мусора. Рассмотрим следующий пример кода, который меняет заголовок кнопки используя расширенный RTTI (требуется версия Delphi 2010 или выше).</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>procedure TForm1.Button1Click(Sender: TObject);\nvar\n  Ctx: TRttiContext;\n  P: TRttiProperty;\n  T: TRttiType;\nbegin\n  T:= Ctx.GetType(TButton);\n  P:= T.GetProperty(&#39;Caption&#39;);\n  P.SetValue(Button1, &#39;RTTI&#39;);\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>При анализе этого кода обратите внимание на следующее:</p><ul><li>Тип <code>TRttiContext</code> - запись (record); вам не нужно создавать и уничтожать переменную с типом запись в том виде как это делается для объектов.</li><li><code>TRttiProperty</code> и <code>TRttiType</code> - классы; Экземпляры этих классов создаются соответствующими методами классов <code>TRttiType</code> и <code>TRttiContext</code>, но вам не нужно уничтожать их самостоятельно — лежащая в основе них расширенная реализация RTTI заботится об этом сама.</li></ul><p>В результате код может переписан в функциональном стиле:</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>procedure TForm1.Button1Click(Sender: TObject);\nbegin\n  TRttiContext.Create.GetType(TButton).GetProperty(&#39;Caption&#39;).SetValue(Button1, &#39;RTTI&#39;);\nend;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Все переменные стали не нужны и нет утечек памяти.</p>',7),u={render:function(e,n){const t=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h1",s,[l,(0,a.Uk)(" "+(0,r.zw)(e.$frontmatter.title),1)]),(0,a._)("p",null,[i,(0,a._)("a",p,[o,(0,a.Wm)(t)]),c]),d],64)}}}}]);