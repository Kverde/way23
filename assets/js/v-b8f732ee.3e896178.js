"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[7310],{78005:(s,n,e)=>{e.r(n),e.d(n,{data:()=>a});const a={key:"v-b8f732ee",path:"/linux-strings.html",title:"Программа strings в Linux",lang:"ru-RU",frontmatter:{title:"Программа strings в Linux",date:"2023-12-02",categories:["Linux"],tags:["strings"]},excerpt:"",headers:[],filePathRelative:"linux-strings.md",git:{updatedTime:1701533327e3}}},40534:(s,n,e)=>{e.r(n),e.d(n,{default:()=>p});var a=e(66252),r=e(3577);const l={id:"frontmatter-title",tabindex:"-1"},i=(0,a._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),t=(0,a.uE)('<p>Программа <code>strings</code> достаёт все текстовые строки из файла. Если её нет в системе, нужно установить пакет <code>binutils</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> binutils\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Для текстовых файлов, <code>strings</code> работает очевидным образом.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@debian-server:~/test$ <span class="token function">cat</span> lines.txt \nbob\nalica\nstive\npatrik\nuser@debian-server:~/test$ strings lines.txt \nalica\nstive\npatrik\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Строка <code>bob</code> не отобразилась, так как по умолчанию <code>strings</code> выводит только строки больше или равные 4 символом, это поведение переопределяется параметром <code>-n</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@debian-server:~/test$ strings -n <span class="token number">2</span> lines.txt \nbob\nalica\nstive\npatrik\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Команда <code>strings</code> применяется чтобы получать набор строк из бинарных файлов.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@debian-server:~/test$ strings /bin/passwd <span class="token operator">|</span> <span class="token function">head</span>\n/lib64/ld-linux-x86-64.so.2\n_ITM_deregisterTMCloneTable\naudit_open\n__gmon_start__\n_ITM_registerTMCloneTable\npam_start\npam_strerror\npam_chauthtok\npam_end\nmisc_conv\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',8),p={render:function(s,n){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h1",l,[i,(0,a.Uk)(" "+(0,r.zw)(s.$frontmatter.title),1)]),t],64)}}}}]);