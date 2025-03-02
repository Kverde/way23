"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[9479],{11636:(e,t,n)=>{n.r(t),n.d(t,{data:()=>r});const r={key:"v-68551d59",path:"/linux-cron.html",title:"Создание переодических заданий через cron в Linux",lang:"ru-RU",frontmatter:{title:"Создание переодических заданий через cron в Linux",date:"2023-11-05",categories:["Linux"],tags:["cron"]},excerpt:"",headers:[{level:2,title:"Ссылки",slug:"ссылки",children:[]}],filePathRelative:"linux-cron.md",git:{updatedTime:1699789216e3}}},4168:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(66252),a=n(3577);const l={id:"frontmatter-title",tabindex:"-1"},c=(0,r._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),o=(0,r.uE)('<p>Cron — приложение для периодического запуска заданий в операционной системе.</p><p>Для проверки того, что сейчас работает демон cron запустите команду</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> systemctl status cron.service\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Автоматические задания размешаются в файлах в формате <code>crontab</code> в каталоге <code>/var/spool/cron/crontab</code>. Для каждого пользователя создаётся отдельный файл название которого совпадает с именем пользователя. Добавлять и редактировать эти файлы нужно через специальное приложение <code>crontab</code>.</p><ul><li><code>crontaЬ -l</code> — посмотреть файл текущего пользователя</li><li><code>crontab -e</code> — добавить или изменить файл текущего пользователя</li><li><code>crontab -r</code> — удалить файл текущего пользователя</li></ul><p>Параметр <code>crontab -u username</code> позволяет выполнить те же команды для других пользователей.</p><p>В файле <code>crontab</code> каждая строка означает отдельное задание. Сначала идет период с которым должно выполняться задание, а потом команда. Период состои из 5 цифр:</p><ul><li>Минута</li><li>Час</li><li>День месяца</li><li>Месяца</li><li>Порядковые номер недели</li></ul><p>Если вместо цифры стоит символ <code>*</code> то это означает любой из возможных вариантов. Таким образом самый частый период который можно установить — каждую минуту будет выглядеть так: <code>* * * * *</code>.</p><p>Пример команды:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>* * * * * echo &#39;text&#39; &gt;&gt; /home/user/cron-result.txt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Для систем использующих systemd логи cron можно посмотреть командой</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo journalctl -S today -u cron\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки" aria-hidden="true">#</a> Ссылки</h2>',14),i={href:"https://crontab.guru/",target:"_blank",rel:"noopener noreferrer"},d=(0,r.Uk)("crontab.guru"),s=(0,r.Uk)(" — разъясняет время в формате crontab."),u={render:function(e,t){const n=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("h1",l,[c,(0,r.Uk)(" "+(0,a.zw)(e.$frontmatter.title),1)]),o,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",i,[d,(0,r.Wm)(n)]),s])])],64)}}}}]);