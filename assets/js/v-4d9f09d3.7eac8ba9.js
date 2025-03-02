"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[8494],{85430:(e,n,l)=>{l.r(n),l.d(n,{data:()=>a});const a={key:"v-4d9f09d3",path:"/less-man-linux.html",title:"Справка по Linux (man, less, more, help, whatis и info)",lang:"ru-RU",frontmatter:{title:"Справка по Linux (man, less, more, help, whatis и info)",date:"2023-11-09",categories:["Linux"],tags:["less","more","help","info","man","whatis"]},excerpt:"",headers:[{level:2,title:"Команда man",slug:"команда-man",children:[]},{level:2,title:"Программа less",slug:"программа-less",children:[]},{level:2,title:"Команда whatis",slug:"команда-whatis",children:[]},{level:2,title:"Команда help",slug:"команда-help",children:[]},{level:2,title:"Параметры -h и --help",slug:"параметры-h-и-help",children:[]},{level:2,title:"Ссылки",slug:"ссылки",children:[]}],filePathRelative:"less-man-linux.md",git:{updatedTime:1703582944e3}}},7366:(e,n,l)=>{l.r(n),l.d(n,{default:()=>T});var a=l(66252),s=l(3577);const d={id:"frontmatter-title",tabindex:"-1"},i=(0,a._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),o={class:"table-of-contents"},c=(0,a.Uk)("Команда man"),r=(0,a.Uk)("Программа less"),t=(0,a.Uk)("Команда whatis"),p=(0,a.Uk)("Команда help"),u=(0,a.Uk)("Параметры -h и --help"),h=(0,a.Uk)("Ссылки"),m=(0,a.uE)('<p>В Linux есть несколько способов получить документацию к программам. Самый распространенный способ — команда <code>man</code>.</p><h2 id="команда-man" tabindex="-1"><a class="header-anchor" href="#команда-man" aria-hidden="true">#</a> Команда man</h2><p><code>man</code> — справочная система Linux. Для просмотра справки о программе или команде нужно указать её название в параметре.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>man ls\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Справочная система делится на несколько разделов и иногда одно и то же название находится в нескольких разделах. Например, есть команда <code>passwd</code> и файл <code>/etc/passwd</code>. Чтобы получить информацию про команду достаточно написать</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>man passwd\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>А чтобы посмотреть описание файла</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>man 5 passwd\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Номер 5 — раздел справочной системы. Полный список разделов:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  1   Executable programs or shell commands\n  2   System calls (functions provided by the kernel)\n  3   Library calls (functions within program libraries)\n  4   Special files (usually found in /dev)\n  5   File formats and conventions, e.g. /etc/passwd\n  6   Games\n  7   Miscellaneous (including  macro  packages  and  conventions),  e.g.\n      man(7), groff(7), man-pages(7)\n  8   System administration commands (usually only for root)\n  9   Kernel routines [Non standard]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Этот список находится внутри описания к самому man, т.е. получен командой</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>man man\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>При запуске <code>man</code> открывается определенный файл справочной системы через программу <code>less</code>.</p><h2 id="программа-less" tabindex="-1"><a class="header-anchor" href="#программа-less" aria-hidden="true">#</a> Программа less</h2><p><code>less</code> — программа для чтения текстовых файлов. <code>less</code> позволяет просматривать большие файлы, так как не читает файл полностью перед запуском. Для запуска наберите команду</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>less file.txt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Основные горячие клавиши:</p><ul><li><code>q</code> — выйти из редактора</li><li><code>h</code> — войти в справочную систему less, выйти так же можно через <code>q</code></li><li><code>j</code> — перейти на строку вперед</li><li><code>k</code> — перейти на строку назад</li><li><code>f</code> — перейти на экран вперед</li><li><code>b</code> — перейти на экран назад</li></ul><p>Для поиска введите <code>\\pattern</code>, где вместо <code>pattern</code> может быть любой текст и нажмите <code>Enter</code>. <code>n</code> — переход к следующему найденному фрагменту, <code>N</code> — переход к предыдущему.</p><p>Существует схожая с <code>less</code> программа <code>more</code>. <code>more</code> содержит меньше функций, поэтому при наличии <code>less</code> можно всегда использовать <code>less</code>.</p><h2 id="команда-whatis" tabindex="-1"><a class="header-anchor" href="#команда-whatis" aria-hidden="true">#</a> Команда whatis</h2><p>Команда <code>whatis</code> возвращает часть <code>man</code> — короткое однострочное описание.</p><h2 id="команда-help" tabindex="-1"><a class="header-anchor" href="#команда-help" aria-hidden="true">#</a> Команда help</h2><p>Команда <code>man</code> не покажет информацию про некоторые команды, например, <code>cd</code>, так как эта команда не отдельное приложение, а команда оболочки bash. Чтобы узнать справку к таким командам используется специальная команда <code>help</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">help</span> <span class="token builtin class-name">cd</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="параметры-h-и-help" tabindex="-1"><a class="header-anchor" href="#параметры-h-и-help" aria-hidden="true">#</a> Параметры -h и --help</h2><p>Часто команды поддерживают параметры <code>-h</code> и <code>--help</code> для вывода инструкции. Их тоже можно использовать, если другие команды не находят информации о программе.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> --help\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>## Команда info</p>',29),b=(0,a.Uk)("Программы "),g={href:"https://www.gnu.org/",target:"_blank",rel:"noopener noreferrer"},f=(0,a.Uk)("GNU"),v=(0,a.Uk)(" используют и рекомендуют использовать более современный формат для документации чем "),x=(0,a._)("code",null,"man",-1),w=(0,a.Uk)(" — программу "),k=(0,a._)("code",null,"info",-1),_=(0,a.Uk)(" и документацию в формате "),U={href:"https://www.gnu.org/software/texinfo/",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("Texinfo"),W=(0,a.Uk)(". И формата Texinfo можно автоматически генерировать html-страницы с документацией, PDF и другие форматы."),L=(0,a.uE)('<p>Запуск справки похож на использование <code>man</code> — достаточно указать <code>info</code> и раздел.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>info <span class="token function">ls</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Основное отличие от <code>man</code> — справочная система <code>info</code> делится на разделы и и поддерживает ссылки между разделами.</p><p>Программа <code>info</code> не открывает <code>less</code>, а использует свою систему горячих клавиш. Основные из них:</p><ul><li><code>q</code> — выход из программы</li><li><code>h</code> — просмотр справки о программе <code>info</code></li><li><code>H</code> — просмотр списка горячих клавиш</li><li><code>Space</code> — переход на следующую страницу</li><li><code>Backspace</code> — переход на предыдущую страницу</li><li><code>n</code> — перейти к следующему разделу</li><li><code>p</code> — перейти к предыдущему разделу</li><li><code>s</code> + текст — поиск</li><li><code>}</code> — перейти к следующему найденному элементу</li><li><code>{</code> — перейти к предыдущему найденному элементу</li></ul><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки" aria-hidden="true">#</a> Ссылки</h2>',6),N={href:"https://www.gnu.org/software/texinfo/manual/info-stnd/info-stnd.html",target:"_blank",rel:"noopener noreferrer"},S=(0,a.Uk)("Stand-alone GNU Info"),E={href:"https://www.gnu.org/software/texinfo/",target:"_blank",rel:"noopener noreferrer"},G=(0,a.Uk)("GNU Texinfo"),T={render:function(e,n){const l=(0,a.up)("RouterLink"),T=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h1",d,[i,(0,a.Uk)(" "+(0,s.zw)(e.$frontmatter.title),1)]),(0,a._)("nav",o,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(l,{to:"#команда-man"},{default:(0,a.w5)((()=>[c])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{to:"#программа-less"},{default:(0,a.w5)((()=>[r])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{to:"#команда-whatis"},{default:(0,a.w5)((()=>[t])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{to:"#команда-help"},{default:(0,a.w5)((()=>[p])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{to:"#параметры-h-и-help"},{default:(0,a.w5)((()=>[u])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{to:"#ссылки"},{default:(0,a.w5)((()=>[h])),_:1})])])]),m,(0,a._)("p",null,[b,(0,a._)("a",g,[f,(0,a.Wm)(T)]),v,x,w,k,_,(0,a._)("a",U,[y,(0,a.Wm)(T)]),W]),L,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",N,[S,(0,a.Wm)(T)])]),(0,a._)("li",null,[(0,a._)("a",E,[G,(0,a.Wm)(T)])])])],64)}}}}]);