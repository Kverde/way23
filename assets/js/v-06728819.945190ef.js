"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[1817],{50191:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t={key:"v-06728819",path:"/%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BF%D0%B0%D0%BA%D0%B5%D1%82%D0%BE%D0%B2-%D0%B2-%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80-dokku-%D1%87%D0%B5%D1%80%D0%B5%D0%B7.html",title:"Установка пакетов в контейнер Dokku через плагин dokku-apt",lang:"ru-RU",frontmatter:{title:"Установка пакетов в контейнер Dokku через плагин dokku-apt",date:"2020-06-07",categories:["Python","Программы"],tags:["dokku"]},excerpt:"",headers:[],filePathRelative:"установка-пакетов-в-контейнер-dokku-через.md",git:{updatedTime:1692859375e3}}},51794:(e,n,a)=>{a.r(n),a.d(n,{default:()=>b});var t=a(66252),s=a(3577);const r={id:"frontmatter-title",tabindex:"-1"},l=(0,t._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=(0,t.Uk)("Если приложение зависит от пакетов, то эти пакеты необходимо установить при разворачивании приложения. Плагин "),o={href:"https://github.com/dokku-community/dokku-apt",target:"_blank",rel:"noopener noreferrer"},p=(0,t.Uk)("dokku-apt"),i=(0,t.Uk)(" автоматизирует установку пакетов."),k=(0,t.uE)('<p>Рассмотрим простейший случай — нужно только установить пакеты. Сначала устанавливаем плагин:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> dokku plugin:install https://github.com/dokku-community/dokku-apt <span class="token function">apt</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Создаём в корне проекта файл <code>apt-packages</code> со списком пакетов:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>libasound2-plugins\nlibsox-fmt-all\nlibsox-dev\nsox\nnano\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Фиксируем и пушим в Dokku изменения. Указанные пакеты будут установлены во время разворачивания приложения.</p>',5),d=(0,t.Uk)("Кроме установки пакетов плагин позволяет добавлять в контейнер репозитории с исходниками и системные переменные. Примеры указаны на "),c={href:"https://github.com/dokku-community/dokku-apt",target:"_blank",rel:"noopener noreferrer"},D=(0,t.Uk)("странице плагина"),m=(0,t.Uk)("."),b={render:function(e,n){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("h1",r,[l,(0,t.Uk)(" "+(0,s.zw)(e.$frontmatter.title),1)]),(0,t._)("p",null,[u,(0,t._)("a",o,[p,(0,t.Wm)(a)]),i]),k,(0,t._)("p",null,[d,(0,t._)("a",c,[D,(0,t.Wm)(a)]),m])],64)}}}}]);