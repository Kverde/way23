"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[2083],{707:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-7d0eaf0a",path:"/linux-timeout.html",title:"Команда timeout в Linux",lang:"ru-RU",frontmatter:{title:"Команда timeout в Linux",date:"2023-12-04",categories:["Linux"],tags:["timeout"]},excerpt:"",headers:[],filePathRelative:"linux-timeout.md",git:{updatedTime:1701704085e3}}},58273:(s,n,a)=>{a.r(n),a.d(n,{default:()=>c});var e=a(66252),t=a(3577);const p={id:"frontmatter-title",tabindex:"-1"},l=(0,e._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),o=(0,e.uE)('<p>Команда <code>timeout</code> запускает другую команду и если другая команда все ещё выполняется через заданное время, то завершает её выполнение. Первый параметр — время выполнения, следующие параметры — название команды и параметры команды.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@debian-server:~/test$ <span class="token function">timeout</span> 5s <span class="token function">ping</span> google.com\nPING google.com <span class="token punctuation">(</span><span class="token number">108.177</span>.14.100<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.\n<span class="token number">64</span> bytes from lt-in-f100.1e100.net <span class="token punctuation">(</span><span class="token number">108.177</span>.14.100<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">55</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">42.2</span> ms\n<span class="token number">64</span> bytes from lt-in-f100.1e100.net <span class="token punctuation">(</span><span class="token number">108.177</span>.14.100<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">55</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">42.5</span> ms\n<span class="token number">64</span> bytes from lt-in-f100.1e100.net <span class="token punctuation">(</span><span class="token number">108.177</span>.14.100<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">55</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">42.2</span> ms\n<span class="token number">64</span> bytes from lt-in-f100.1e100.net <span class="token punctuation">(</span><span class="token number">108.177</span>.14.100<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">4</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">55</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">42.7</span> ms\n<span class="token number">64</span> bytes from lt-in-f100.1e100.net <span class="token punctuation">(</span><span class="token number">108.177</span>.14.100<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">5</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">55</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">42.3</span> ms\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Команда начинает выполнятся сразу после выполнения и если закончится до таймаута, то просто ничего дополнительно не произойдет.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user@debian-server:~/test$ <span class="token function">timeout</span> 3s <span class="token builtin class-name">echo</span> <span class="token builtin class-name">test</span>\n<span class="token builtin class-name">test</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Время можно указать в секундах (<code>s</code>), минутах (<code>m</code>), часах (<code>h</code>) и днях (<code>d</code>).</p>',5),c={render:function(s,n){return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("h1",p,[l,(0,e.Uk)(" "+(0,t.zw)(s.$frontmatter.title),1)]),o],64)}}}}]);