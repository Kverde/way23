"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[9632],{1528:(e,t,n)=>{n.r(t),n.d(t,{data:()=>a});const a={key:"v-3b7dc78c",path:"/python-poetry.html",title:"Создание виртуального окружения Python через Poetry",lang:"ru-RU",frontmatter:{title:"Создание виртуального окружения Python через Poetry",date:"2023-09-02",categories:["Python"],tags:["poetry"]},excerpt:"",headers:[],filePathRelative:"python-poetry.md",git:{updatedTime:1693670002e3}}},16333:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(66252),r=n(3577);const s={id:"frontmatter-title",tabindex:"-1"},l=(0,a._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d={href:"https://python-poetry.org/",target:"_blank",rel:"noopener noreferrer"},o=(0,a.Uk)("Poetry"),p=(0,a.Uk)(" — менеджер зависимостей для Python."),i=(0,a.uE)('<p>После установки установите параметр <code>virtualenvs.in-project</code> в <code>True</code>, чтобы Poetry всегда использовал каталог <code>.venv</code> в каталоге проекта для виртуального окружения.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>poetry config virtualenvs.in-project true\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Для создания конфигурации используйте команду</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>poetry init\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>В результате появится файл <code>pyproject.toml</code>.</p><p>Если нужно установить виртуальное окружение и зависимости в уже созданном проекте, например, после загрузки репозитория проекта используйте команду</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>poetry install\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Файл <code>poetry.lock</code> хранит точные версии всех зависимостей и должен фиксироваться в системе контроля версий.</p><p>Для добавления зависимости используйте команды</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>poetry add Pillow\npoetry add Pillow --dev\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Параметр <code>--dev</code> добавляет зависимости необходимые для разработки, без параметров команда добавляет продуктовую зависимость.</p><p>Для запуска команды внутри виртуального окружения используйте команду</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>poetry run python main.py\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Так же можно войти в виртуальное окружение командой</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>poetry shell\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',15),c={render:function(e,t){const n=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h1",s,[l,(0,a.Uk)(" "+(0,r.zw)(e.$frontmatter.title),1)]),(0,a._)("p",null,[(0,a._)("a",d,[o,(0,a.Wm)(n)]),p]),i],64)}}}}]);