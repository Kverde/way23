"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[750],{97651:(e,o,t)=>{t.r(o),t.d(o,{data:()=>a});const a={key:"v-0004d25f",path:"/parrotos-esperanto-layout.html",title:"Настройка раскладки Эсперанто в ParrotOS",lang:"ru-RU",frontmatter:{title:"Настройка раскладки Эсперанто в ParrotOS",date:"2023-07-20",categories:["Операционные системы"],tags:["Эсперанто","Linux"]},excerpt:"",headers:[{level:2,title:"Включение раскладки Эсперанто",slug:"включение-раскладки-эсперанто",children:[]},{level:2,title:"Включение дополнительных типографических символов",slug:"включение-дополнительных-типографических-символов",children:[]}],filePathRelative:"parrotos-esperanto-layout.md",git:{updatedTime:1730265595e3}}},60464:(e,o,t)=>{t.r(o),t.d(o,{default:()=>d});var a=t(66252),l=t(3577);const n={id:"frontmatter-title",tabindex:"-1"},s=(0,a._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),r=(0,a.uE)('<h2 id="включение-раскладки-эсперанто" tabindex="-1"><a class="header-anchor" href="#включение-раскладки-эсперанто" aria-hidden="true">#</a> Включение раскладки Эсперанто</h2><p>В ParrotOS, как и в других дистрибутивах Linux, можно включить поддержку ввода символов эсперанто: ĉ, ŭ, ĥ, ĵ.</p><p>Для настройки откройте <code>Control Center</code> - <code>Keyboard</code>:</p><p><img src="images/linux-esperanto-layiut-01.png" alt=""></p><p>В разделе <code>Adding Esperanto supersigned letters</code> установите переключатель в значение <code>To the corresponding key in a QWERTY layout</code>:</p><p><img src="images/linux-esperanto-layiut-02.png" alt=""></p><p>В разделе <code>Key to choose the 3rd level</code> установите клавишу которая будет изменять ввод символов <code>c</code> в <code>ĉ</code>, <code>h</code> в <code>ĥ</code> и остальных.</p><p><img src="images/linux-esperanto-layiut-03.png" alt=""></p><h2 id="включение-дополнительных-типографических-символов" tabindex="-1"><a class="header-anchor" href="#включение-дополнительных-типографических-символов" aria-hidden="true">#</a> Включение дополнительных типографических символов</h2><p>Чтобы вместе с быквами эсперанто вводить спецсимволы вроде кавычек-елочек <code>«</code> и <code>»</code> в разделе <code>Miscellaneous compatibility options</code> включите переключатель <code>Enable extra typographic characters</code>.</p><p><img src="images/linux-esperanto-layiut-04.png" alt=""></p><p>Эта настройка конфликтует с символами Эсперанто, поэтому придется отредактировать файлы настроек. Настройка раскладок клавиатуры производится через подсистему XKB. Её конфигурационные файлы находятся в каталоге <code>/usr/share/X11/xkb/</code>.</p><p>Откройте файл <code>typo</code> с правами администратора:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo pluma /usr/share/X11/xkb/symbols/typo\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Закоментируйте следующие строки</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    // key &lt;AD07&gt; { [ NoSymbol,   NoSymbol,                 U20B4,              NoSymbol ] }; // &quot;u&quot;\n    \n    // key &lt;AC02&gt; { [ NoSymbol,   NoSymbol,               section,              NoSymbol ] }; // &quot;s&quot;\n    // key &lt;AC06&gt; { [ NoSymbol,   NoSymbol,                 U20BD,              NoSymbol ] }; // &quot;h&quot;\n    // key &lt;AC07&gt; { [ NoSymbol,   NoSymbol,    doublelowquotemark,    singlelowquotemark ] }; // &quot;j&quot;\n    // key &lt;AC08&gt; { [ NoSymbol,   NoSymbol,   leftdoublequotemark,   leftsinglequotemark ] }; // &quot;k&quot;\n\n    // key &lt;AB03&gt; { [ NoSymbol,   NoSymbol,             copyright,                  cent ] }; // &quot;c&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>И чтобы не пропала возможность вводить символы кавычек <code>„</code> и <code>“</code> добавьте две строки:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    key &lt;AD08&gt; { [ NoSymbol,   NoSymbol,    doublelowquotemark,    singlelowquotemark ] }; // &quot;i&quot;\n    key &lt;AD09&gt; { [ NoSymbol,   NoSymbol,   leftdoublequotemark,   leftsinglequotemark ] }; // &quot;o&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Для того, чтобы было можно было быстро печатать символ <code>#</code> на любой раскладке измените строку</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    key &lt;AE03&gt; { [ NoSymbol,   NoSymbol,         threesuperior,            numbersign ] }; // &quot;3&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Теперь перезагрузите настройки XKB:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setxkbmap -layout us,ru\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>После этого будут работать и дополнительные топографические символы и раскладка Эсперанто.</p>',23),d={render:function(e,o){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h1",n,[s,(0,a.Uk)(" "+(0,l.zw)(e.$frontmatter.title),1)]),r],64)}}}}]);