"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[2093],{69394:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-3f26a24d",path:"/linux-atime-ctime-mtime.html",title:"Временные метки файлов Linux: atime, ctime, mtime",lang:"ru-RU",frontmatter:{title:"Временные метки файлов Linux: atime, ctime, mtime",date:"2023-11-04",categories:["Linux"],tags:["Файловая система"]},excerpt:"",headers:[],filePathRelative:"linux-atime-ctime-mtime.md",git:{updatedTime:1699114079e3}}},9468:(n,s,a)=>{a.r(s),a.d(s,{default:()=>k});var e=a(66252),p=a(3577);const t={id:"frontmatter-title",tabindex:"-1"},l=(0,e._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),c=(0,e.uE)('<p>Каждый файл в Linux содержит три временные метки:</p><ul><li>Access timestamp (atime) — время получения последнего доступа к файлу</li><li>Modified timestamp (mtime) — время последнего изменения содержимого файла</li><li>Change timestamp (ctime) — время последнего изменения метаданных файла</li></ul><p>Для получения информации про эти метки воспользуемся командой <code>stat</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@server:~$ <span class="token function">touch</span> text.txt\nuser@server:~$ <span class="token function">stat</span> text.txt \n  File: text.txt\n  Size: <span class="token number">0</span>         \tBlocks: <span class="token number">0</span>          IO Block: <span class="token number">4096</span>   regular empty <span class="token function">file</span>\nDevice: 2ah/42d\tInode: <span class="token number">2005276</span>     Links: <span class="token number">1</span>\nAccess: <span class="token punctuation">(</span>0644/-rw-r--r--<span class="token punctuation">)</span>  Uid: <span class="token punctuation">(</span> <span class="token number">1000</span>/   petro<span class="token punctuation">)</span>   Gid: <span class="token punctuation">(</span> <span class="token number">1003</span>/   petro<span class="token punctuation">)</span>\nAccess: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:44:12.338153174 +0500\nModify: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:44:12.338153174 +0500\nChange: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:44:12.338153174 +0500\n Birth: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:44:12.338153174 +0500\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Все временные метки содержат одинаковое значение. Команда <code>touch</code>, кроме создания файла, так же обновляет значение всех временных меток. Попробуем вызвать её ещё раз:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@server:~$ <span class="token function">touch</span> text.txt\nuser@server:~$ <span class="token function">stat</span> text.txt \n  File: text.txt\n  Size: <span class="token number">0</span>         \tBlocks: <span class="token number">0</span>          IO Block: <span class="token number">4096</span>   regular empty <span class="token function">file</span>\nDevice: 2ah/42d\tInode: <span class="token number">2005276</span>     Links: <span class="token number">1</span>\nAccess: <span class="token punctuation">(</span>0644/-rw-r--r--<span class="token punctuation">)</span>  Uid: <span class="token punctuation">(</span> <span class="token number">1000</span>/   petro<span class="token punctuation">)</span>   Gid: <span class="token punctuation">(</span> <span class="token number">1003</span>/   petro<span class="token punctuation">)</span>\nAccess: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:47:47.171490511 +0500\nModify: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:47:47.171490511 +0500\nChange: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:47:47.171490511 +0500\n Birth: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:44:12.338153174 +0500\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Время создания файла не изменилось, зато все остальные метки изменились. Допишем в файл данные и проверим метки времени.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@server:~$ <span class="token builtin class-name">echo</span> text <span class="token operator">&gt;&gt;</span> text.txt\nuser@server:~$ <span class="token function">stat</span> text.txt \n  File: text.txt\n  Size: <span class="token number">5</span>         \tBlocks: <span class="token number">8</span>          IO Block: <span class="token number">4096</span>   regular <span class="token function">file</span>\nDevice: 2ah/42d\tInode: <span class="token number">2005276</span>     Links: <span class="token number">1</span>\nAccess: <span class="token punctuation">(</span>0644/-rw-r--r--<span class="token punctuation">)</span>  Uid: <span class="token punctuation">(</span> <span class="token number">1000</span>/   petro<span class="token punctuation">)</span>   Gid: <span class="token punctuation">(</span> <span class="token number">1003</span>/   petro<span class="token punctuation">)</span>\nAccess: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:47:47.171490511 +0500\nModify: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:51:27.904827845 +0500\nChange: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:51:27.904827845 +0500\n Birth: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:44:12.338153174 +0500\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Изменилось время изменения содержимого и метаданных. Теперь попробуем изменить только метаданные файла.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@server:~$ <span class="token function">chmod</span> +w text.txt\nuser@server:~$ <span class="token function">stat</span> text.txt \n  File: text.txt\n  Size: <span class="token number">5</span>         \tBlocks: <span class="token number">8</span>          IO Block: <span class="token number">4096</span>   regular <span class="token function">file</span>\nDevice: 2ah/42d\tInode: <span class="token number">2005276</span>     Links: <span class="token number">1</span>\nAccess: <span class="token punctuation">(</span>0644/-rw-r--r--<span class="token punctuation">)</span>  Uid: <span class="token punctuation">(</span> <span class="token number">1000</span>/   petro<span class="token punctuation">)</span>   Gid: <span class="token punctuation">(</span> <span class="token number">1003</span>/   petro<span class="token punctuation">)</span>\nAccess: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:47:47.171490511 +0500\nModify: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:51:27.904827845 +0500\nChange: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:56:56.424833839 +0500\n Birth: <span class="token number">2023</span>-11-04 <span class="token number">20</span>:44:12.338153174 +0500\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Изменилось только ctime.</p>',11),r=(0,e.Uk)("Можно заметить, что операции чтения, например, "),u=(0,e._)("code",null,"cat text.txt",-1),o=(0,e.Uk)(" не влияют на atime. Это связано с тем, что изменение этого параметра "),i={href:"https://superuser.com/questions/464290/why-is-cat-not-changing-the-access-time",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Uk)("отключено по-умолчанию из-за нагрузки на диск"),m=(0,e.Uk)(" — каждое чтение диска требует записи на диск."),k={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("h1",t,[l,(0,e.Uk)(" "+(0,p.zw)(n.$frontmatter.title),1)]),c,(0,e._)("p",null,[r,u,o,(0,e._)("a",i,[b,(0,e.Wm)(a)]),m])],64)}}}}]);