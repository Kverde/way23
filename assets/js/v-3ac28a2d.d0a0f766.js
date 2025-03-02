"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[3712],{73201:(e,t,a)=>{a.r(t),a.d(t,{data:()=>r});const r={key:"v-3ac28a2d",path:"/%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B3%D0%BE-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0-try-except-%D0%B2-delphi.html",title:"Использование пустого блока try...except в Delphi",lang:"ru-RU",frontmatter:{title:"Использование пустого блока try...except в Delphi",date:"2019-05-22",categories:["Delphi"],tags:["Delphi","совершенный-код"]},excerpt:"",headers:[{level:2,title:"1. Исключения для исключений, не для логики",slug:"_1-исключения-для-исключении-не-для-логики",children:[]},{level:2,title:"2. Трудности с отладкой",slug:"_2-трудности-с-отладкои",children:[]},{level:2,title:"3. Временное решение",slug:"_3-временное-решение",children:[]},{level:2,title:"4. Запись в лог",slug:"_4-запись-в-лог",children:[]}],filePathRelative:"использование-пустого-блока-try-except-в-delphi.md",git:{updatedTime:1692859375e3}}},87937:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r=a(66252),n=a(3577);const l={id:"frontmatter-title",tabindex:"-1"},i=(0,r._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=(0,r.uE)('<p>Есть несколько доводов чтобы никогда не использовать пустой блок <code>try...except</code>, такой как</p><div class="language-delphi ext-delphi line-numbers-mode"><pre class="language-delphi"><code>try\n  &lt;какой-то код&gt;\nexcept\nend\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>А причин чтобы применять такую конструкцию мне найти не удалось.</p><h2 id="_1-исключения-для-исключении-не-для-логики" tabindex="-1"><a class="header-anchor" href="#_1-исключения-для-исключении-не-для-логики" aria-hidden="true">#</a> 1. Исключения для исключений, не для логики</h2><p>Исключения нужны для <strong>непредвиденных</strong> ситуаций. Если ситуация рассматривается как ожидаемая или вероятная, то нужно использовать обычные условия.</p><p>Например, если файл который открывает программа всегда находится в требуемом месте и нет причин ожидать что его не будет, то проверку можно организовать через исключения. Если же файл может переместить пользователь и <strong>логика работы программы допускает или позволяет это сделать</strong>, то обработка должна быть организована другими средствами — не исключениями.</p><p>Следовательно, блокирование исключения не имеет смысла. Если какая-то проблема предполагалась, то надо обработать её через условия. Если возможны какие-то исключения и их нужно обрабатывать, то должен быть какой-то код в внутри <code>except</code>. Если же не первое не второе то зачем этот пустой блок?</p><h2 id="_2-трудности-с-отладкои" tabindex="-1"><a class="header-anchor" href="#_2-трудности-с-отладкои" aria-hidden="true">#</a> 2. Трудности с отладкой</h2>',8),s=(0,r.Uk)("Сокрытие ошибки без сообщения затрудняет поиск проблемы. Программа просто ведёт себя не так как ожидается, никакого сообщения нет, что смотреть в первую очередь непонятно. Если бы выходило исключение то проблемное место было бы проще найти (например при использовании "),p={href:"https://www.eurekalog.com",target:"_blank",rel:"noopener noreferrer"},h=(0,r.Uk)("EurekaLog"),c=(0,r.Uk)("), была бы хоть какая-то информация о проблеме."),o=(0,r.uE)('<h2 id="_3-временное-решение" tabindex="-1"><a class="header-anchor" href="#_3-временное-решение" aria-hidden="true">#</a> 3. Временное решение</h2><p>Предположим, появляется ошибка причина которой непонятна. Участок кода не критичен и чтобы её скрыть применяется такая конструкция.</p><p>Такой подход допустим временно, если ситуация критичная и нужно срочно решить проблему. Но это именно <strong>временное решение</strong>. Дальше всё равно нужно разобраться и исправить корень проблемы. Если этого не сделать, то не решённая должным образом проблема может проявиться и другим способом. А для получения дополнительной информации, чтобы было проще искать проблему, можно например использовать логирование в блоке <code>except</code>, вместо того чтобы оставлять его пустым.</p><h2 id="_4-запись-в-лог" tabindex="-1"><a class="header-anchor" href="#_4-запись-в-лог" aria-hidden="true">#</a> 4. Запись в лог</h2><p>Даже если это действительно какая-то особая ситуация, то можно как минимум записать это в лог и потом решить что делать. Ситуация не останется незамеченной, при любом странном поведении можно будет просмотреть этот лог.</p>',5),u={render:function(e,t){const a=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("h1",l,[i,(0,r.Uk)(" "+(0,n.zw)(e.$frontmatter.title),1)]),d,(0,r._)("p",null,[s,(0,r._)("a",p,[h,(0,r.Wm)(a)]),c]),o],64)}}}}]);