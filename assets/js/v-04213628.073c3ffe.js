"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[1592],{94543:(e,d,a)=>{a.r(d),a.d(d,{data:()=>c});const c={key:"v-04213628",path:"/debian-adduser.html",title:"Добавление пользователей в Debian",lang:"ru-RU",frontmatter:{title:"Добавление пользователей в Debian",date:"2023-11-06",categories:["Linux"],tags:["adduser","chfn"]},excerpt:"",headers:[],filePathRelative:"debian-adduser.md",git:{updatedTime:1699277005e3}}},39154:(e,d,a)=>{a.r(d),a.d(d,{default:()=>s});var c=a(66252),t=a(3577);const i={id:"frontmatter-title",tabindex:"-1"},l=(0,c._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),o=(0,c.uE)('<p>Для добавления пользователей в Debian используется команда <code>adduser</code>. Обязательный аргумент — имя пользователя.</p><p>Список пользователей находится в файле <code>/etc/passwd</code> (<code>man 5 passwd</code>). Каждая строка соответствует одному пользователю. Значения параметров разделены символом <code>:</code>. Список параметров:</p><ol><li>Имя пользователя</li><li>Хеш пароля</li><li>Идентификатор пользователя (UID)</li><li>Идентификатор группы пользователя</li><li>Информация о пользователе</li><li>Домашняя директория пользователя</li><li>Оболочка пользователя</li></ol><p>Пример строки в файле <code>/etc/passwd</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user01:x:1001:1001:user01,,,:/home/user01:/bin/bash\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Поле <code>Информация о пользователе</code> содержит реальное имя пользователя, телефон и подобные данные. Изменить эту информацию можно командой <code>chfn</code>.</p><p>По умолчанию, домашние каталоги пользователей находятся внутри каталога <code>/home</code>. Если в поле <code>Оболочка пользователя</code> стоит значение <code>nologin</code>, то пользователю запрещён вход в систему.</p><p>Если хеш пароля содержит только один символ <code>x</code>, то хеш пароля находится в другом файле <code>/etc/shadow</code>. Этот файл, так же как <code>passwd</code> в каждой строчке хранит данные одного пользователя, значения разделяются символом <code>:</code>. Первые поля в этом списке:</p><ul><li>Имя пользователя</li><li>Хеш пароля</li><li>Дата последнего изменения пароля</li></ul><p>Остальные поля определяют функции связанные с изменением пароля. Пример строки из файле <code>shadow</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user01:$y$j9T$Pw/zwOjbUl10vVwXJHGnt/$lJ8.dfAdkQXfzXrQg6Pv5TYKdjgYwpugwR0EF86i0C/:19667:0:99999:7:::\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Настройки по умолчанию нового пользователя можно переопределить в файле <code>/etc/adduser.conf</code>.</p>',12),s={render:function(e,d){return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c._)("h1",i,[l,(0,c.Uk)(" "+(0,t.zw)(e.$frontmatter.title),1)]),o],64)}}}}]);