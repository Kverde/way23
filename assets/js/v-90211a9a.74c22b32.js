"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[4252],{92721:(e,t,p)=>{p.r(t),p.d(t,{data:()=>o});const o={key:"v-90211a9a",path:"/%D0%BF%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D1%83-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-ssh-%D0%B8-putty.html",title:"Подключение к серверу через SSH и PuTTY",lang:"ru-RU",frontmatter:{title:"Подключение к серверу через SSH и PuTTY",date:"2017-01-14",categories:["Программы"],tags:["ssh","putty"]},excerpt:"",headers:[],filePathRelative:"подключение-к-серверу-через-ssh-и-putty.md",git:{updatedTime:1692859375e3}}},51267:(e,t,p)=>{p.r(t),p.d(t,{default:()=>U});var o=p(66252),a=p(3577);const n={id:"frontmatter-title",tabindex:"-1"},s=(0,o._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),r=(0,o._)("p",null,"Вводить логин и пароль каждый раз для подключения к серверу занимает время. В этой инструкции написано как настроить подключение чтобы подключатся двойным кликом по ярлыку.",-1),c=(0,o.Uk)("Скачиваем "),d={href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html",target:"_blank",rel:"noopener noreferrer"},i=(0,o.Uk)("PuTTY"),u=(0,o.Uk)(". Архив с полным набором файлов ("),l=(0,o._)("em",null,"A .ZIP file containing all the binaries (except PuTTYtel), and also the help files",-1),g=(0,o.Uk)("). "),m={href:"https://the.earth.li/~sgtatham/putty/latest/x86/putty.zip",target:"_blank",rel:"noopener noreferrer"},h=(0,o.Uk)("Прямая ссылка"),D=(0,o.Uk)("."),T=(0,o.uE)('<p>Для авторизации используется два ключа: публичный и приватный. Приватный остается у клиента, публичный размещается на сервере. Для генерации ключей используется программа <code>PUTTYGEN.EXE</code> из архива PuTTY.</p><p>Запускаем <code>PUTTYGEN.EXE</code>, проверяем что тип ключа SSH-2 RSA и размер 2048.</p><p><img src="images/putty_1.png" alt="PUTTYGEN генерация ключа"></p><p>Нажимаем <code>Generate</code> и водим курсором по окну приложения. На основе перемещений мыши генерируется ключ.</p><p><img src="images/putty_2.png" alt="PUTTYGEN сохранение ключа"></p><p>Комментарий и фраза-пароль настраивается при необходимости. Нажимаем <code>Save private key</code> и выбираем имя файла куда сохранить приватный ключ.</p><p>PUTTYGEN сохраняет приватный ключ в файле собственного формата. Причем файл содержит как приватный так и публичный ключ, поэтому можно не сохранять публичный ключ отдельно.</p><p>Теперь запускаем <code>PUTTY.EXE</code></p><p>На форме <code>Session</code> вводим IP сервера.</p><p><img src="images/putty_3.png" alt="PYTTU ввод адреса сервера"></p><p>На форме <code>Connection-&gt;Data</code> вводим логин пользователя на сервере.</p><p><img src="images/putty_4.png" alt="PYTTU настройка логина"></p><p>На форме <code>Connection-&gt;SSH-&gt;Auth</code> указываем путь к ранее сохранному файлу приватного ключа.</p><p><img src="images/putty_5.png" alt="PYTTU настройка пути к файлу приватного ключа"></p><p>Возвращаемся на форму <code>Session</code> вводим название подключения, идентификатор пригодится дальше при настройке ярлыка. Нажимаем <code>Save</code> и <code>Open</code>.</p><p><img src="images/putty_6.png" alt="PYTTU сохранение сессии"></p><p>При подключении появляется сообщение о том что сервер не принял наш ключ.</p><p>Using username &quot;user&quot;. Server refused our key user@89.213.21.221&#39;s password:</p><p>Установим публичный ключ на сервере. Пользователь уже введен из настройки, вводим пароль. После подключении текущий каталог - каталог пользователя. В файле <code>.ssh/authorized_keys</code> список публичный ключей по которым доступно подключение до этого сервера. Открываем файл в текстовом редакторе</p><p>nano .ssh/authorized_keys</p><p><img src="images/putty_8.png" alt="редактирование ssh/authorized_keys через nano"></p><p>Теперь вставим в <code>authorized_keys</code> публичный ключ. Для этого скопируем из сохраненного <code>PUTTYGEN.EXE</code> файла строки:</p><p>Public-Lines: 6 AAAAB3NvrC1yc2EAAAABJQAAAQEA8LWRSY3ExxjZ2XH5kXIZzu/Nw4lAU0yKQSYK TFDXCfuInICkpz0/c7O0xZph/pEmAj9UTgtB24hs5EhIHRJF+mtE5pirLlbe5JGo nRpBj4MSatkQlvUffI6CM5FKDNJicD9Dd8qBxJMHvo9+f4mHDmKNVDs4LNMONepq YXJvoz8PQrfn2z98IrUJaqvCpdKwBhScn0k/Lz9KvPInZkANlnI00y0mrdy3WMqV jD5GGmUGCFb5L/0blQ9ad/aMpOFv33PZU9Gp7Db3sts4Rs3votkM9SCzgXop1MJ9 g4AgflpUlXSRGsZqJsgIegemvJHpt2jBtm8ekaPOCEPWmAiU7Q==</p><p>Объединим строки ключа в одну и допишем в начало тип ключа <code>ssh-rsa</code></p><p>ssh-rsa AAAAB3NvrC1yc2EAAAABJQAAAQEA8LWRSY3ExxjZ2XH5kXIZzu/Nw4lAU0yKQSYKTFDXCfuInICkpz0/c7O0xZph/pEmAj9UTgtB24hs5EhIHRJF+mtE5pirLlbe5JGonRpBj4MSatkQlvUffI6CM5FKDNJicD9Dd8qBxJMHvo9+f4mHDmKNVDs4LNMONepqYXJvoz8PQrfn2z98IrUJaqvCpdKwBhScn0k/Lz9KvPInZkANlnI00y0mrdy3WMqVjD5GGmUGCFb5L/0blQ9ad/aMpOFv33PZU9Gp7Db3sts4Rs3votkM9SCzgXop1MJ9g4AgflpUlXSRGsZqJsgIegemvJHpt2jBtm8ekaPOCEPWmAiU7Q==</p><p>Копируем получившуюся строку, переходим обратно в <code>nano</code>. Для вставки в окно PUTTY нажмите ПКМ. Выходим из <code>nano</code> с сохранением файла</p><p>ctrl+X Y Enter</p><p>Вводим <code>Exit</code> для закрытия подключения.</p><p>Теперь создаем ярлык для <code>PUTTY.EXE</code> и добавляем параметр <code>-load</code> с названием ранее сохраненного подключения.</p><p><img src="images/putty_9.png" alt="Ярлык с параметром для автоматического подключения"></p><p>Запускаем ярлык и подключаемся к серверу</p><p>Using username &quot;user&quot;. Authenticating with public key &quot;work_pc&quot; Welcome to Ubuntu 16.04.1 LTS (GNU/Linux 4.4.0-57-generic x86_64)</p>',32),U={render:function(e,t){const p=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("h1",n,[s,(0,o.Uk)(" "+(0,a.zw)(e.$frontmatter.title),1)]),r,(0,o._)("p",null,[c,(0,o._)("a",d,[i,(0,o.Wm)(p)]),u,l,g,(0,o._)("a",m,[h,(0,o.Wm)(p)]),D]),T],64)}}}}]);