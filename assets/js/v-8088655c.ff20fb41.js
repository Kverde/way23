"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[964],{31280:(e,t,r)=>{r.r(t),r.d(t,{data:()=>s});const s={key:"v-8088655c",path:"/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-svn-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-tortoisesvn-6-%D0%B8%D0%B3%D0%BD%D0%BE%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB.html",title:"Работа с SVN через TortoiseSVN. 6. Игнорирование файлов, перемещение файлов",lang:"ru-RU",frontmatter:{title:"Работа с SVN через TortoiseSVN. 6. Игнорирование файлов, перемещение файлов",date:"2019-08-13",categories:["Системы контроля версий (VCS)"],tags:["svn","tortoisesvn"]},excerpt:"",headers:[{level:2,title:"Игнорирование файлов",slug:"игнорирование-фаилов",children:[]},{level:2,title:"Перемещение файлов",slug:"перемещение-фаилов",children:[]},{level:2,title:"Ссылки",slug:"ссылки",children:[]}],filePathRelative:"работа-с-svn-через-tortoisesvn-6-игнорирование-файл.md",git:{updatedTime:1692859375e3}}},73683:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var s=r(66252),n=r(3577);const o={id:"frontmatter-title",tabindex:"-1"},i=(0,s._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),a=(0,s.uE)('<h2 id="игнорирование-фаилов" tabindex="-1"><a class="header-anchor" href="#игнорирование-фаилов" aria-hidden="true">#</a> Игнорирование файлов</h2><p>В диалоге фиксации всегда нужно проверять что</p><ul><li>все нужные файлы будут зафиксированы</li><li>не будет зафиксировано лишних файлов</li></ul><p>Проверка упрощается если лишние файлы просто не будут отображаться. Чтобы скрыть файл нажмите на него ПКМ в диалоге фиксации и выберите в меню <strong>Add to ignore list</strong>.</p><p><img src="images/tortoisesvn_6_01.png" alt="TortoiseSVN добавление в список игнорирования"></p><p>Скрыть можно как отдельный файл, так и группу файлов подходящих под маску. В репозиториях с программами на Delphi в список игнорирования всегда добавляются файлы с расширением *<strong>.dcu</strong>.</p><p>Просмотреть и отредактировать список игнорирования можно в свойствах корневого каталога.</p><p><img src="images/tortoisesvn_6_02.png" alt="TortoiseSVN свойства"></p><p><img src="images/tortoisesvn_6_03.png" alt="TortoiseSVN свойства ignore"></p><p>Двойным кликом по свойству <strong>svn:ignore</strong> открывается редактор свойства.</p><p><img src="images/tortoisesvn_6_04.png" alt="TortoiseSVN свойство ignore"></p><h2 id="перемещение-фаилов" tabindex="-1"><a class="header-anchor" href="#перемещение-фаилов" aria-hidden="true">#</a> Перемещение файлов</h2>',12),l=(0,s.Uk)("Иногда файлы в проекте перемещаются в другие каталоги. Например, при изменении архитектуры приложения. Если просто скопировать файл и удалить старый то на новом файле не будет отображаться история изменения и не будет работать "),D={href:"https://way23.ru/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-svn-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-tortoisesvn-4-%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BE-%D1%80%D0%B5%D0%B2%D0%B8%D0%B7/",target:"_blank",rel:"noopener noreferrer"},g=(0,s.Uk)("авторство"),p=(0,s.Uk)("."),B=(0,s.uE)('<p>Чтобы история изменений файла работала, файл нужно перенести средствами TortoiseSVN. Для этого перетащите файл <strong>правой кнопкой мыши</strong> в новый каталог. После перетаскивания появиться меню. Если не требуется переименование файла, а только перенос в другой каталог, то выбирайте <strong>SVN Move versioned items(s) here</strong>.</p><p><img src="images/tortoisesvn_6_05.png" alt="TortoiseSVN перемещение файла"></p><p>После такого переноса история и авторство будут работать на новом файле.</p><p>Тоже самое относиться к переименованию файлов. Для переименования используется отдельная команда <strong>Rename</strong>.</p><p><img src="images/tortoisesvn_6_06.png" alt="TortoiseSVn Rename"></p><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки" aria-hidden="true">#</a> Ссылки</h2>',6),h={href:"https://tortoisesvn.net/docs/release/TortoiseSVN_ru/tsvn-dug-ignore.html",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Uk)("Документация TortoiseSVN. Игнорирование файлов и папок."),u={href:"https://tortoisesvn.net/docs/release/TortoiseSVN_ru/tsvn-dug-ignore.html",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Uk)("Документация TortoiseSVN. Перемещение файлов и папок."),m={render:function(e,t){const r=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("h1",o,[i,(0,s.Uk)(" "+(0,n.zw)(e.$frontmatter.title),1)]),a,(0,s._)("p",null,[l,(0,s._)("a",D,[g,(0,s.Wm)(r)]),p]),B,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",h,[d,(0,s.Wm)(r)])]),(0,s._)("li",null,[(0,s._)("a",u,[c,(0,s.Wm)(r)])])])],64)}}}}]);