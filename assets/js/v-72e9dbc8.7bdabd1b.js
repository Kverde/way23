"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[1989],{38454:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-72e9dbc8",path:"/%D0%BA%D0%B0%D0%BA-%D1%81%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D1%84%D0%B0%D0%B9%D0%BB-%D0%B8%D0%B7-dokku-docker-%D0%B2-windows.html",title:"Как скопировать файл из dokku/docker в windows?",lang:"ru-RU",frontmatter:{title:"Как скопировать файл из dokku/docker в windows?",date:"2020-05-31",categories:["Программы"],tags:["putty","dokku","docker"]},excerpt:"",headers:[{level:2,title:"Копирование файла из docker",slug:"копирование-фаила-из-docker",children:[]},{level:2,title:"Копирование файла через ssh",slug:"копирование-фаила-через-ssh",children:[]}],filePathRelative:"как-скопировать-файл-из-dokku-docker-в-windows.md",git:{updatedTime:1692859375e3}}},12060:(e,n,s)=>{s.r(n),s.d(n,{default:()=>U});var a=s(66252),r=s(3577);const d={id:"frontmatter-title",tabindex:"-1"},l=(0,a._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),c=(0,a._)("p",null,"Разделим задачу на два этапа:",-1),o=(0,a._)("ol",null,[(0,a._)("li",null,"Скопировать файл на основную систему из docker."),(0,a._)("li",null,"Скопировать файл из Linux на Windows через ssh.")],-1),t=(0,a._)("h2",{id:"копирование-фаила-из-docker",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#копирование-фаила-из-docker","aria-hidden":"true"},"#"),(0,a.Uk)(" Копирование файла из docker")],-1),i=(0,a.Uk)("Находим название нужного контейнера "),p={href:"https://docs.docker.com/engine/reference/commandline/ps/",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("командой"),k=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker <span class="token function">ps</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Название контейнеров находится в колонке <code>NAMES</code>:</p><p><img src="images/dokku_copy_01.png" alt="команда docker ps"></p><p>Команда выводит только запущенные контейнеры <code>dockku</code>.</p>',4),h=(0,a.Uk)("Затем копируем файл на основную систему "),D={href:"https://docs.docker.com/engine/reference/commandline/cp/",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("командой"),b=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker <span class="token function">cp</span> контейне:имя_файла_в_контейнере путь_куда_скопировать\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Например:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> docker <span class="token function">cp</span> zarbot.web.1:/app/work_folder/out.mp3 ~/out.mp3\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="копирование-фаила-через-ssh" tabindex="-1"><a class="header-anchor" href="#копирование-фаила-через-ssh" aria-hidden="true">#</a> Копирование файла через ssh</h2>',4),g=(0,a.Uk)("Для копирования файл воспользуемся "),B=(0,a._)("code",null,"pscp.exe",-1),_=(0,a.Uk)(" из набора "),v={href:"https://way23.ru/%D0%BF%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D1%83-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-ssh-%D0%B8-putty/",target:"_blank",rel:"noopener noreferrer"},f=(0,a.Uk)("PuTTY"),w=(0,a.Uk)(":"),x=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pscp.exe логин@адрес_сервера:имя_файла путь_куда_скопировать\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Например:</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>pscp.exe kverde@192.168.1.35:/home/kverde/out.mp3 f:\\\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),U={render:function(e,n){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h1",d,[l,(0,a.Uk)(" "+(0,r.zw)(e.$frontmatter.title),1)]),c,o,t,(0,a._)("p",null,[i,(0,a._)("a",p,[u,(0,a.Wm)(s)])]),k,(0,a._)("p",null,[h,(0,a._)("a",D,[m,(0,a.Wm)(s)])]),b,(0,a._)("p",null,[g,B,_,(0,a._)("a",v,[f,(0,a.Wm)(s)]),w]),x],64)}}}}]);