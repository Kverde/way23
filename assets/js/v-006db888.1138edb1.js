"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[5373],{21800:(e,t,r)=>{r.r(t),r.d(t,{data:()=>i});const i={key:"v-006db888",path:"/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-github-%D0%BF%D0%BE-ssh.html",title:"Работа с GitHub по SSH",lang:"ru-RU",frontmatter:{title:"Работа с GitHub по SSH",date:"2017-01-18",categories:["Программы"],tags:["ssh","автоматизация","git"]},excerpt:"",headers:[{level:2,title:"Генерация ключа",slug:"генерация-ключа",children:[]},{level:2,title:"Сохранение приватного ключа",slug:"сохранение-приватного-ключа",children:[]},{level:2,title:"Загрузка публичного ключа на GitHub",slug:"загрузка-публичного-ключа-на-github",children:[]}],filePathRelative:"работа-с-github-по-ssh.md",git:{updatedTime:1692859375e3}}},27160:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var i=r(66252),a=r(3577);const d={id:"frontmatter-title",tabindex:"-1"},s=(0,i._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=(0,i.Uk)("Для работы "),n={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},p=(0,i.Uk)("Github"),l=(0,i.Uk)(" я использую "),g={href:"https://desktop.github.com/",target:"_blank",rel:"noopener noreferrer"},b=(0,i.Uk)("GUI приложение от Github"),o=(0,i.Uk)(" и консольный клиент. В этой заметке речь пойдет о втором варианте, а именно о настройке SSH, чтобы фиксировать код без ввода логина и пароля."),u=(0,i.Uk)("Скачиваем и устанавливаем "),_={href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"},c=(0,i.Uk)("Git"),m=(0,i.Uk)("."),k=(0,i._)("h2",{id:"генерация-ключа",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#генерация-ключа","aria-hidden":"true"},"#"),(0,i.Uk)(" Генерация ключа")],-1),f=(0,i.Uk)("Для генерации ключа воспользуемся "),U={href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html",target:"_blank",rel:"noopener noreferrer"},G=(0,i.Uk)("PUTTYGEN.EXE"),H=(0,i.Uk)(". Принцип тот же что и для "),S={href:"http://way23.ru/%d0%bf%d0%be%d0%b4%d0%ba%d0%bb%d1%8e%d1%87%d0%b5%d0%bd%d0%b8%d0%b5-%d0%ba-%d1%81%d0%b5%d1%80%d0%b2%d0%b5%d1%80%d1%83-%d1%87%d0%b5%d1%80%d0%b5%d0%b7-ssh-%d0%b8-putty/",target:"_blank",rel:"noopener noreferrer"},w=(0,i.Uk)("подключения к серверу"),y=(0,i.Uk)(" - приватный ключ на машине которая подключается к GitHub, публичный ключ в GitHub."),T=(0,i.uE)('<p>Если ключа еще нет то генерируем его, если он уже создан раньше то загружаем.</p><p><img src="images/git_ssh_import_key.png" alt="PUTTYGEN загрузка ключа"></p><h2 id="сохранение-приватного-ключа" tabindex="-1"><a class="header-anchor" href="#сохранение-приватного-ключа" aria-hidden="true">#</a> Сохранение приватного ключа</h2><p>Импортируем ключ в формат OpenSSH. Сохранить полученный файл нужно под именем .ssh\\id_rsa в каталоге пользователя.</p><p><img src="images/git_ssh_export_key.png" alt="PUTTYGEN экспорт ключа в OpenSSH формат"></p><p>Пример полного пути к id_rsa C:\\Users\\QQQ\\.ssh\\id_rsa</p><p>Ключ в файле с таким именем используется для подключения по SSH по умолчанию. В случае если ключей несколько для разных серверов, потребуется дополнительная настройка - используется файл .ssh\\config.</p><h2 id="загрузка-публичного-ключа-на-github" tabindex="-1"><a class="header-anchor" href="#загрузка-публичного-ключа-на-github" aria-hidden="true">#</a> Загрузка публичного ключа на GitHub</h2><p>Копируем публичный ключ из текстового поля PUTTYGEN</p><p><img src="images/git_ssh_import_github1.png" alt="PUTTYGEN копирование ключа"></p><p>Заходим в настройки GitHub пункт <code>SSH and GPG keys</code>. Нажимаем <code>New SSH key</code>.</p><p><img src="images/git_ssh_import_github3.png" alt="добаление ключа на GitHub"></p><p><img src="images/git_ssh_import_github2.png" alt="добаление ключа на GitHub"></p><p>Запускаем консоль и клонируем репозиторий</p><p>git clone git@github.com:Kverde/way23_examples.git</p><p><img src="images/git_ssh_import_github4.png" alt="подключение по ssh"></p>',16),D={render:function(e,t){const r=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("h1",d,[s,(0,i.Uk)(" "+(0,a.zw)(e.$frontmatter.title),1)]),(0,i._)("p",null,[h,(0,i._)("a",n,[p,(0,i.Wm)(r)]),l,(0,i._)("a",g,[b,(0,i.Wm)(r)]),o]),(0,i._)("p",null,[u,(0,i._)("a",_,[c,(0,i.Wm)(r)]),m]),k,(0,i._)("p",null,[f,(0,i._)("a",U,[G,(0,i.Wm)(r)]),H,(0,i._)("a",S,[w,(0,i.Wm)(r)]),y]),T],64)}}}}]);