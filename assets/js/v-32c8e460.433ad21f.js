"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[5547],{25318:(e,a,n)=>{n.r(a),n.d(a,{data:()=>l});const l={key:"v-32c8e460",path:"/restore-data-oracle.html",title:"Как восстановить удаленные данные из Oracle?",lang:"ru-RU",frontmatter:{title:"Как восстановить удаленные данные из Oracle?",date:"2022-02-07",categories:["Базы данных"],tags:["Oracle"]},excerpt:"",headers:[{level:2,title:"Ретроспективный запрос",slug:"ретроспективныи-запрос",children:[{level:3,title:"Ссылки",slug:"ссылки",children:[]}]},{level:2,title:"Восстановление таблицы из корзины",slug:"восстановление-таблицы-из-корзины",children:[{level:3,title:"Ссылки",slug:"ссылки-1",children:[]}]}],filePathRelative:"restore-data-oracle.md",git:{updatedTime:1692859375e3}}},79914:(e,a,n)=>{n.r(a),n.d(a,{default:()=>v});var l=n(66252),r=n(3577);const s={id:"frontmatter-title",tabindex:"-1"},t=(0,l._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=(0,l.uE)('<p>Способы восстановления данных в БД Oracle после фиксации (commit).</p><h2 id="ретроспективныи-запрос" tabindex="-1"><a class="header-anchor" href="#ретроспективныи-запрос" aria-hidden="true">#</a> Ретроспективный запрос</h2><p>Ретроспективный запрос позволяет восстановить недавно удалённые данные. Данные будут выведены на указанное в запросе время. Время доступности старых данных зависит от настроек базы данных.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select \n  count(*) \nfrom \n  tablename as of timestamp to_timestamp(&#39;2004-03-29 13:34:12&#39;, &#39;YYYY-MM-DD HH24:MI:SS&#39;);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',4),c=(0,l.Uk)("Ретроспективный запрос "),d={href:"https://docs.oracle.com/cd/E11882_01/appdev.112/e41502/adfns_flashback.htm#ADFNS1010",target:"_blank",rel:"noopener noreferrer"},u=(0,l.Uk)("не может быть использован"),p=(0,l.Uk)(" со следующими типами данных:"),o=(0,l._)("ul",null,[(0,l._)("li",null,"BFILE"),(0,l._)("li",null,"BLOB"),(0,l._)("li",null,"CLOB"),(0,l._)("li",null,"NCLOB")],-1),b=(0,l._)("h3",{id:"ссылки",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#ссылки","aria-hidden":"true"},"#"),(0,l.Uk)(" Ссылки")],-1),h={href:"https://oracle-base.com/articles/10g/flashback-query-10g",target:"_blank",rel:"noopener noreferrer"},m=(0,l.Uk)("Flashback Query (AS OF) in Oracle Database 10g"),g=(0,l.uE)('<h2 id="восстановление-таблицы-из-корзины" tabindex="-1"><a class="header-anchor" href="#восстановление-таблицы-из-корзины" aria-hidden="true">#</a> Восстановление таблицы из корзины</h2><p>Если таблица была полностью удалена (drop), то есть возможность восстановить её из корзины.</p><p>Для этого найдите таблицу в корзине</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select \n  *\nfrom\n  dba_recyclebin t\nwhere \n  original_name = &#39;table_name&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Возьмите название таблицы в корзине из колонки <strong>OBJECT_NAME</strong> и восстановить таблицу командой</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>flashback table \n  owner.&quot;BIN$2vv3nR/wSHyzgnIdqcBGJA==$0&quot; \nto before drop \nrename to new_table_name;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="ссылки-1" tabindex="-1"><a class="header-anchor" href="#ссылки-1" aria-hidden="true">#</a> Ссылки</h3>',7),_={href:"https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_9012.htm",target:"_blank",rel:"noopener noreferrer"},f=(0,l.Uk)("Flashback table"),v={render:function(e,a){const n=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("h1",s,[t,(0,l.Uk)(" "+(0,r.zw)(e.$frontmatter.title),1)]),i,(0,l._)("p",null,[c,(0,l._)("a",d,[u,(0,l.Wm)(n)]),p]),o,b,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",h,[m,(0,l.Wm)(n)])])]),g,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",_,[f,(0,l.Wm)(n)])])])],64)}}}}]);