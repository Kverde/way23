"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[1754],{60391:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-5c04f11d",path:"/linux-type-which.html",title:"Как определить откуда запускается команда в bash (type, which, whereis)",lang:"ru-RU",frontmatter:{title:"Как определить откуда запускается команда в bash (type, which, whereis)",date:"2023-12-26",categories:["Linux"],tags:["type","which","whereis"]},excerpt:"",headers:[],filePathRelative:"linux-type-which.md",git:{updatedTime:1703582944e3}}},65928:(n,s,a)=>{a.r(s),a.d(s,{default:()=>b});var e=a(66252),r=a(3577);const l={id:"frontmatter-title",tabindex:"-1"},p=(0,e._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=(0,e.uE)('<p>При запуске любой команды в Bash может запуститься внутренняя команда Bash или внешняя программа. Для того чтобы определить, что запустится используется команда <code>type</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@debian-server:~$ <span class="token builtin class-name">type</span> <span class="token function">ls</span>\n<span class="token function">ls</span> is aliased to `ls --color<span class="token operator">=</span>auto&#39;\nuser@debian-server:~$ <span class="token builtin class-name">type</span> <span class="token builtin class-name">cd</span>\n<span class="token builtin class-name">cd</span> is a shell <span class="token builtin class-name">builtin</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Параметр <code>-t</code> заставляет команду выводить описание в виде одного слова.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@debian-server:~$ <span class="token builtin class-name">type</span> -t <span class="token function">ls</span>\n<span class="token builtin class-name">alias</span>\nuser@debian-server:~$ <span class="token builtin class-name">type</span> -t <span class="token builtin class-name">cd</span>\n<span class="token builtin class-name">builtin</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>А параметр <code>-a</code> показывает все возможные варианты</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@debian-server:~$ <span class="token builtin class-name">type</span> -a <span class="token function">ls</span>\n<span class="token function">ls</span> is aliased to `ls --color<span class="token operator">=</span>auto&#39;\n<span class="token function">ls</span> is /usr/bin/ls\n<span class="token function">ls</span> is /bin/ls\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Команда <code>which</code> выполняет похожую функцию — выводит путь к фалу который будет запущен при запуске команды. <code>which</code> — внешняя программа, поэтому она не работает со внутренними командами баш и не показывает синонимы, в отличии от команду <code>type</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@debian-server:~$ <span class="token function">which</span> <span class="token function">ls</span>\n/usr/bin/ls\nuser@debian-server:~$ <span class="token function">which</span> -a <span class="token function">ls</span>\n/usr/bin/ls\n/bin/ls\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Ещё одна команда <code>whereis</code>, кроме пути к файлу, показывает файлы <code>man</code> и файлы с исходным кодом, при их наличии.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@debian-server:~$ <span class="token function">whereis</span> <span class="token function">ls</span>\nls: /usr/bin/ls /usr/share/man/man1/ls.1.gz\nuser@debian-server:~$ <span class="token function">whereis</span> <span class="token function">tar</span>\ntar: /usr/bin/tar /usr/share/man/man1/tar.1.gz\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>С помощью параметров можно выводить только файлы разного типа: <code>-b</code> — исполняемые файлы, <code>-m</code> — файлы <code>man</code> и <code>s</code> — файлы исходного кода.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@debian-server:~$ <span class="token function">whereis</span> -b <span class="token function">tar</span>\ntar: /usr/bin/tar\nuser@debian-server:~$ <span class="token function">whereis</span> -m <span class="token function">tar</span>\ntar: /usr/share/man/man1/tar.1.gz\nuser@debian-server:~$ <span class="token function">whereis</span> -s <span class="token function">tar</span>\ntar:\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Параметр <code>-l</code> заставляет команду <code>whereis</code> вывести все пути в которых она производит поиск.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@debian-server:~$ <span class="token function">whereis</span> -l\nbin: /usr/bin\nbin: /usr/sbin\nbin: /usr/lib/x86_64-linux-gnu\nbin: /usr/lib\nbin: /usr/lib32\nbin: /usr/lib64\nbin: /etc\nbin: /usr/games\nbin: /usr/local/bin\nbin: /usr/local/sbin\nbin: /usr/local/etc\nbin: /usr/local/lib\nbin: /usr/local/games\nbin: /usr/include\nbin: /usr/local\nbin: /usr/libexec\nbin: /usr/share\nman: /usr/share/man/ko\nman: /usr/share/man/sr\nman: /usr/share/man/fr\nman: /usr/share/man/man7\nman: /usr/share/man/uk\nman: /usr/share/man/pl\nman: /usr/share/man/es\nman: /usr/share/man/pt\nman: /usr/share/man/id\nman: /usr/share/man/man6\nman: /usr/share/man/nl\nman: /usr/share/man/man4\nman: /usr/share/man/pt_BR\nman: /usr/share/man/man5\nman: /usr/share/man/zh_TW\nman: /usr/share/man/sv\nman: /usr/share/man/man2\nman: /usr/share/man/zh_CN\nman: /usr/share/man/fr.UTF-8\nman: /usr/share/man/cs\nman: /usr/share/man/ro\nman: /usr/share/man/da\nman: /usr/share/man/it\nman: /usr/share/man/tr\nman: /usr/share/man/man3\nman: /usr/share/man/fr.ISO8859-1\nman: /usr/share/man/ru\nman: /usr/share/man/ja\nman: /usr/share/man/fi\nman: /usr/share/man/de\nman: /usr/share/man/man1\nman: /usr/share/man/sl\nman: /usr/share/man/man8\nman: /usr/share/man/hu\nman: /usr/share/info\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div>',14),b={render:function(n,s){return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("h1",l,[p,(0,e.Uk)(" "+(0,r.zw)(n.$frontmatter.title),1)]),i],64)}}}}]);