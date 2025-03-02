"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[5685],{29111:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-1c12d0e8",path:"/%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-%D0%B2%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B1%D0%BB%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B2-oracle.html",title:"Пример взаимоблокировки в Oracle",lang:"ru-RU",frontmatter:{title:"Пример взаимоблокировки в Oracle",date:"2019-08-28",categories:["Базы данных"],tags:["oracle"]},excerpt:"",headers:[{level:2,title:"Ссылки",slug:"ссылки",children:[]}],filePathRelative:"пример-взаимоблокировки-в-oracle.md",git:{updatedTime:1692859375e3}}},26939:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(66252),e=a(3577);const p={id:"frontmatter-title",tabindex:"-1"},o=(0,t._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=(0,t.uE)('<p>Взаимная блокировка двух сессий происходит когда сессии натыкаются на блокировку друг друга. Продемонстрировать такое поведение можно на таблице с двумя строками.</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">table</span> test<span class="token punctuation">.</span>emp<span class="token punctuation">;</span>\n\n<span class="token keyword">create</span> <span class="token keyword">table</span> test<span class="token punctuation">.</span>emp\n<span class="token punctuation">(</span>\n  rid  <span class="token keyword">integer</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>\n  name varchar2<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">alter</span> <span class="token keyword">table</span> test<span class="token punctuation">.</span>emp\n  <span class="token keyword">add</span> <span class="token keyword">constraint</span> table_pk <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>rid<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">insert</span> <span class="token keyword">into</span> test<span class="token punctuation">.</span>emp <span class="token punctuation">(</span>rid<span class="token punctuation">,</span> name<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;запись 1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">insert</span> <span class="token keyword">into</span> test<span class="token punctuation">.</span>emp <span class="token punctuation">(</span>rid<span class="token punctuation">,</span> name<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;запись 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">commit</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Следующая последовательность запросов update приводит к взаимной блокировке.</p><table class="wp-block-table aligncenter"><tbody><tr><td><strong>Сессия 1</strong></td><td><strong>Сессия 2</strong></td></tr><tr><td><code>update test.emp set name = &#39;11&#39; where rid = 1;</code></td><td></td></tr><tr><td></td><td><code>update test.emp set name = &#39;22&#39; where rid = 2;</code></td></tr><tr><td><code>update test.emp set name = &#39;22&#39; where rid = 2;</code></td><td></td></tr><tr><td><code>Сеанс зависает</code></td><td></td></tr><tr><td></td><td><code>update test.emp set name = &#39;11&#39; where rid = 1;</code></td></tr><tr><td></td><td><code>ORA-00060: взаимная блокировка при ожидании ресурса</code></td></tr></tbody></table><p>Ошибка ORA-00060, как написано в документации, может появиться в случайной из этих сессий.</p><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки" aria-hidden="true">#</a> Ссылки</h2>',6),r={href:"http://citforum.ru/database/oracle/deadlock/2.shtml",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("Подробная статья про взаимоблокировки"),u={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("h1",p,[o,(0,t.Uk)(" "+(0,e.zw)(n.$frontmatter.title),1)]),l,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",r,[c,(0,t.Wm)(a)])])])],64)}}}}]);