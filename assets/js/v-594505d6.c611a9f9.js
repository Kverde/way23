"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[7499],{38477:(e,t,s)=>{s.r(t),s.d(t,{data:()=>p});const p={key:"v-594505d6",path:"/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-svn-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-tortoisesvn-3-%D0%BA%D0%BE%D0%BD%D1%84%D0%BB%D0%B8%D0%BA%D1%82%D1%8B.html",title:"Работа с SVN через TortoiseSVN. 3. Конфликты",lang:"ru-RU",frontmatter:{title:"Работа с SVN через TortoiseSVN. 3. Конфликты",date:"2017-01-20",categories:["Системы контроля версий (VCS)"],tags:["svn","tortoisesvn"]},excerpt:"",headers:[],filePathRelative:"работа-с-svn-через-tortoisesvn-3-конфликты.md",git:{updatedTime:1692859375e3}}},81752:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var p=s(66252),r=s(3577);const o={id:"frontmatter-title",tabindex:"-1"},i=(0,p._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),n=(0,p.Uk)("В "),a={href:"http://way23.ru/%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%b0-%d1%81-svn-%d1%87%d0%b5%d1%80%d0%b5%d0%b7-tortoisesvn-2-%d0%bf%d1%80%d0%be%d1%81%d0%bc%d0%be%d1%82%d1%80-%d0%b8%d0%b7%d0%bc%d0%b5%d0%bd%d0%b5%d0%bd%d0%b8%d0%b9/",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("предыдущей части"),g=(0,p.Uk)(" был рассмотрен случай когда слияние изменений Пети и Васи произошло автоматически. Сейчас рассмотрим ситуацию когда Вася и Петя делают одновременно изменения которые SVN не может слить автоматически."),d=(0,p.uE)('<p>Вася посчитал что приветствие нужно выводить для него тоже и использует для этого недавно добавленную функцию. Он вносит изменения в файл и фиксирует.</p><p>def hello(name): if name == None: print(&#39;hello!&#39;) else: print(&#39;hello &#39; + name + &#39;!&#39;)</p><p>def hello2(name1, name2): hello(name1) hello(name2)</p><p>hello2(&#39;Petya&#39;, &#39;Vasya&#39;)</p><p><img src="images/tortoisesvn_25.png" alt="Диалог фиксации TortoiseSVN"></p><p>Одновременно с этим Петя тоже вспомнил что нужно бы добавить приветствие для Васи. Об обновлении он забыл и отредактировал старую версию файла.</p><p>def hello(name): if name == None: print(&#39;hello!&#39;) else: print(&#39;hello &#39; + name + &#39;!&#39;)</p><p>hello(&#39;Petya and Vasya&#39;) print(&#39;Bye!&#39;)</p><p><img src="images/tortoisesvn_26.png" alt="Диалог фиксации TortoiseSVN"></p><p>Как и ожидалось, сообщение о том что файл был изменен и Петя редактировал старую версию.</p><p><img src="images/tortoisesvn_27.png" alt="Сообщение о неудачной фиксации"></p><p>Петя нажимает ОК, и выбирает Обновить</p><p><img src="images/tortoisesvn_28.png" alt="Диалог Обновить или отменить?"></p><p>В этот раз слияние не удалось, ведь Петя редактировал туже самую строку изменения в которой зафиксировал недавно Вася.</p><p><img src="images/tortoisesvn_29.png" alt="Сообщение о конфликте при фиксации"></p><p>После нажатия ОК снова появляется окно фиксации. Только файл в котором возник конфликт изменений выделен красным цветом.</p><p><img src="images/tortoisesvn_30.png" alt="Диалог фиксации при возникновении конфликта"></p><p>Теперь чтобы зафиксировать нужно разрешить конфликт. Петя делает двойной клик на файле и открывается редактор конфликтов.</p><p><img src="images/tortoisesvn_31.png" alt="Окно TortoiseMerge во время редактирования конфликта"></p><p>Петя замечает что в репозиторий уже было добавлено приветствие для Васи с помощью отдельной функции и решает оставить этот вариант вместо своего. Петя нажимает <em>Использовать этот текстовый блок</em> на строке из репозитория</p><p><img src="images/tortoisesvn_32.png" alt="Контекстное меню TrtoiseMerge"></p><p><img src="images/tortoisesvn_33.png" alt="Результирующий файл в TortoiseMerge"></p><p>Кроме приветствия Петя добавил в код еще одну строку. Её тоже нужно поместить в результирующий файл <img src="images/tortoisesvn_34.png" alt="Контекстное меню TrtoiseMerge"></p><p><img src="images/tortoisesvn_35.png" alt="Результирующий файл в TortoiseMerge"></p><p>Больше конфликтов в файле нет. Петя отмечает что конфликты улажены и закрывает файл.</p><p><img src="images/tortoisesvn_36.png" alt="Кнопка Пометить как улаженный"></p><p>В окне фиксации файл перестал выделятся красным - в нем больше нет конфликтов.</p><p><img src="images/tortoisesvn_37.png" alt="Диалог фиксации TortoiseSVN после улаживания конфликта"></p><p>Петя изменяет комментарий, отмечает файл и фиксирует изменения.</p><p><img src="images/tortoisesvn_38.png" alt="Диалог фиксации TortoiseSVN"></p>',30),m={render:function(e,t){const s=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[(0,p._)("h1",o,[i,(0,p.Uk)(" "+(0,r.zw)(e.$frontmatter.title),1)]),(0,p._)("p",null,[n,(0,p._)("a",a,[l,(0,p.Wm)(s)]),g]),d],64)}}}}]);