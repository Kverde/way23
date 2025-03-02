"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[1388],{96997:(e,s,a)=>{a.r(s),a.d(s,{data:()=>n});const n={key:"v-06ea8c88",path:"/pg-dump.html",title:"Создание дампа PostgreSQL",lang:"ru-RU",frontmatter:{title:"Создание дампа PostgreSQL",date:"2023-11-17",categories:["Базы данных"],tags:["PostgreSQL"]},excerpt:"",headers:[{level:2,title:"Ссылки",slug:"ссылки",children:[]}],filePathRelative:"pg-dump.md",git:{updatedTime:1700233723e3}}},99799:(e,s,a)=>{a.r(s),a.d(s,{default:()=>i});var n=a(66252),r=a(3577);const p={id:"frontmatter-title",tabindex:"-1"},t=(0,n._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),o=(0,n.uE)('<p>Для того, чтобы создать дамп PostgreSQL достаточно вызвать команду <code>pg_dump</code>, она вернет в <code>stdout</code> sql-скрипт, воссоздающий текущее состояние базы данных. Если имя пользователя системы отлично от имени пользователя БД, то его нужно указать через параметр <code>-U</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pg_dump -U postgres <span class="token operator">&gt;</span> dump.sql\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Можно сразу сжать дамп, чтобы он занимал меньше места.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pg_dump -U postgres <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> dump.sql.gz\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Если же нужно создать дамп базы данных в контейнере Docker, то это можно сделать через команду <code>docker exec</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker <span class="token builtin class-name">exec</span> container-db pg_dump -U postgres <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> dump.sql.gz\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Чтобы восстановить базу из дампа достаточно выполнить sql-скрипт. Для этого можно использовать команду <code>psql</code>. Параметр <code>-U</code> так же определяет пользователя базы данных, а параметр <code>-d</code> базу данных.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>psql -U user -d mydb <span class="token operator">&lt;</span> proofreader_dump.sql \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки" aria-hidden="true">#</a> Ссылки</h2>',9),l={href:"https://postgrespro.ru/docs/postgresql/12/backup-dump#backup-dump-restore",target:"_blank",rel:"noopener noreferrer"},d=(0,n.Uk)("Документация postgrespro: Резервное копирование и восстановление"),c={href:"https://postgrespro.ru/docs/postgresql/12/app-pgdump",target:"_blank",rel:"noopener noreferrer"},u=(0,n.Uk)("Документация postgrespro: pg_dump"),i={render:function(e,s){const a=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("h1",p,[t,(0,n.Uk)(" "+(0,r.zw)(e.$frontmatter.title),1)]),o,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",l,[d,(0,n.Wm)(a)])]),(0,n._)("li",null,[(0,n._)("a",c,[u,(0,n.Wm)(a)])])])],64)}}}}]);