"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[4534],{84549:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-30367e97",path:"/%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B-yaml-%D0%B2-python.html",title:"Примеры yaml в Python",lang:"ru-RU",frontmatter:{title:"Примеры yaml в Python",date:"2020-05-29",categories:["Python"],tags:["yaml"]},excerpt:"",headers:[{level:2,title:"Примеры",slug:"примеры",children:[]},{level:2,title:"Список",slug:"список",children:[]},{level:2,title:"Словарь",slug:"словарь",children:[]},{level:2,title:"Словарь списков",slug:"словарь-списков",children:[]},{level:2,title:"Список словарей",slug:"список-словареи",children:[]},{level:2,title:"Список списков",slug:"список-списков",children:[]},{level:2,title:"Словарь словарей",slug:"словарь-словареи",children:[]},{level:2,title:"Несколько документов в одном файле",slug:"несколько-документов-в-одном-фаиле",children:[]}],filePathRelative:"примеры-yaml-в-python.md",git:{updatedTime:1692859375e3}}},38385:(n,s,a)=>{a.r(s),a.d(s,{default:()=>g});var p=a(66252),e=a(3577);const t={id:"frontmatter-title",tabindex:"-1"},l=(0,p._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),c=(0,p.Uk)("YAML — это текстовый формат формат разметки. Для загрузки файлов YAML в Python используется модуль "),o={href:"https://pyyaml.org/",target:"_blank",rel:"noopener noreferrer"},u=(0,p.Uk)("PyYAML"),i=(0,p.Uk)(". Ниже несколько примеров преобразования структур YAML в структуры Python."),r=(0,p.Uk)("Файлы YAML взяты из "),k={href:"https://yaml.org/spec/1.2/spec.html",target:"_blank",rel:"noopener noreferrer"},m=(0,p.Uk)("спецификации"),b=(0,p.Uk)("."),d=(0,p.uE)('<h2 id="примеры" tabindex="-1"><a class="header-anchor" href="#примеры" aria-hidden="true">#</a> Примеры</h2><p>Код для загрузки файлов YAML:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> yaml\n\nconfig <span class="token operator">=</span> yaml<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;config.yaml&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Loader<span class="token operator">=</span>yaml<span class="token punctuation">.</span>Loader<span class="token punctuation">)</span>\n\n<span class="token keyword">print</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="список" tabindex="-1"><a class="header-anchor" href="#список" aria-hidden="true">#</a> Список</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> Mark McGwire\n<span class="token punctuation">-</span> Sammy Sosa\n<span class="token punctuation">-</span> Ken Griffey\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token punctuation">[</span><span class="token string">&#39;Mark McGwire&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sammy Sosa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Ken Griffey&#39;</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="словарь" tabindex="-1"><a class="header-anchor" href="#словарь" aria-hidden="true">#</a> Словарь</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">hr</span><span class="token punctuation">:</span>  <span class="token number">65</span>    <span class="token comment"># Home runs</span>\n<span class="token key atrule">avg</span><span class="token punctuation">:</span> <span class="token number">0.278</span> <span class="token comment"># Batting average</span>\n<span class="token key atrule">rbi</span><span class="token punctuation">:</span> <span class="token number">147</span>   <span class="token comment"># Runs Batted In</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token punctuation">{</span><span class="token string">&#39;hr&#39;</span><span class="token punctuation">:</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token string">&#39;avg&#39;</span><span class="token punctuation">:</span> <span class="token number">0.278</span><span class="token punctuation">,</span> <span class="token string">&#39;rbi&#39;</span><span class="token punctuation">:</span> <span class="token number">147</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="словарь-списков" tabindex="-1"><a class="header-anchor" href="#словарь-списков" aria-hidden="true">#</a> Словарь списков</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">american</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> Boston Red Sox\n  <span class="token punctuation">-</span> Detroit Tigers\n  <span class="token punctuation">-</span> New York Yankees\n<span class="token key atrule">national</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> New York Mets\n  <span class="token punctuation">-</span> Chicago Cubs\n  <span class="token punctuation">-</span> Atlanta Braves\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token punctuation">{</span><span class="token string">&#39;american&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Boston Red Sox&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Detroit Tigers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;New York Yankees&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n <span class="token string">&#39;national&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;New York Mets&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Chicago Cubs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Atlanta Braves&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="список-словареи" tabindex="-1"><a class="header-anchor" href="#список-словареи" aria-hidden="true">#</a> Список словарей</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span>\n  <span class="token key atrule">name</span><span class="token punctuation">:</span> Mark McGwire\n  <span class="token key atrule">hr</span><span class="token punctuation">:</span>   <span class="token number">65</span>\n  <span class="token key atrule">avg</span><span class="token punctuation">:</span>  <span class="token number">0.278</span>\n<span class="token punctuation">-</span>\n  <span class="token key atrule">name</span><span class="token punctuation">:</span> Sammy Sosa\n  <span class="token key atrule">hr</span><span class="token punctuation">:</span>   <span class="token number">63</span>\n  <span class="token key atrule">avg</span><span class="token punctuation">:</span>  <span class="token number">0.288</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mark McGwire&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hr&#39;</span><span class="token punctuation">:</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token string">&#39;avg&#39;</span><span class="token punctuation">:</span> <span class="token number">0.278</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Sammy Sosa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hr&#39;</span><span class="token punctuation">:</span> <span class="token number">63</span><span class="token punctuation">,</span> <span class="token string">&#39;avg&#39;</span><span class="token punctuation">:</span> <span class="token number">0.288</span><span class="token punctuation">}</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="список-списков" tabindex="-1"><a class="header-anchor" href="#список-списков" aria-hidden="true">#</a> Список списков</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token punctuation">[</span>name        <span class="token punctuation">,</span> hr<span class="token punctuation">,</span> avg  <span class="token punctuation">]</span>\n<span class="token punctuation">-</span> <span class="token punctuation">[</span>Mark McGwire<span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">0.278</span><span class="token punctuation">]</span>\n<span class="token punctuation">-</span> <span class="token punctuation">[</span>Sammy Sosa  <span class="token punctuation">,</span> <span class="token number">63</span><span class="token punctuation">,</span> <span class="token number">0.288</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hr&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;avg&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> \n <span class="token punctuation">[</span><span class="token string">&#39;Mark McGwire&#39;</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">0.278</span><span class="token punctuation">]</span><span class="token punctuation">,</span> \n <span class="token punctuation">[</span><span class="token string">&#39;Sammy Sosa&#39;</span><span class="token punctuation">,</span> <span class="token number">63</span><span class="token punctuation">,</span> <span class="token number">0.288</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="словарь-словареи" tabindex="-1"><a class="header-anchor" href="#словарь-словареи" aria-hidden="true">#</a> Словарь словарей</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">Mark McGwire</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">hr</span><span class="token punctuation">:</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token key atrule">avg</span><span class="token punctuation">:</span> <span class="token number">0.278</span><span class="token punctuation">}</span>\n<span class="token key atrule">Sammy Sosa</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token key atrule">hr</span><span class="token punctuation">:</span> <span class="token number">63</span><span class="token punctuation">,</span>\n    <span class="token key atrule">avg</span><span class="token punctuation">:</span> <span class="token number">0.288</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token punctuation">{</span><span class="token string">&#39;Mark McGwire&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;hr&#39;</span><span class="token punctuation">:</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token string">&#39;avg&#39;</span><span class="token punctuation">:</span> <span class="token number">0.278</span><span class="token punctuation">}</span><span class="token punctuation">,</span> \n <span class="token string">&#39;Sammy Sosa&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;hr&#39;</span><span class="token punctuation">:</span> <span class="token number">63</span><span class="token punctuation">,</span> <span class="token string">&#39;avg&#39;</span><span class="token punctuation">:</span> <span class="token number">0.288</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="несколько-документов-в-одном-фаиле" tabindex="-1"><a class="header-anchor" href="#несколько-документов-в-одном-фаиле" aria-hidden="true">#</a> Несколько документов в одном файле</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Ranking of 1998 home runs</span>\n<span class="token punctuation">---</span>\n<span class="token punctuation">-</span> Mark McGwire\n<span class="token punctuation">-</span> Sammy Sosa\n<span class="token punctuation">-</span> Ken Griffey\n\n<span class="token comment"># Team ranking</span>\n<span class="token punctuation">---</span>\n<span class="token punctuation">-</span> Chicago Cubs\n<span class="token punctuation">-</span> St Louis Cardinals\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>config <span class="token operator">=</span> yaml<span class="token punctuation">.</span>load_all<span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;config.yaml&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Loader<span class="token operator">=</span>yaml<span class="token punctuation">.</span>Loader<span class="token punctuation">)</span>\n\n<span class="token keyword">for</span> item <span class="token keyword">in</span> config<span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n\n<span class="token comment"># [&#39;Mark McGwire&#39;, &#39;Sammy Sosa&#39;, &#39;Ken Griffey&#39;]</span>\n<span class="token comment"># [&#39;Chicago Cubs&#39;, &#39;St Louis Cardinals&#39;]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',24),g={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[(0,p._)("h1",t,[l,(0,p.Uk)(" "+(0,e.zw)(n.$frontmatter.title),1)]),(0,p._)("p",null,[c,(0,p._)("a",o,[u,(0,p.Wm)(a)]),i]),(0,p._)("p",null,[r,(0,p._)("a",k,[m,(0,p.Wm)(a)]),b]),d],64)}}}}]);