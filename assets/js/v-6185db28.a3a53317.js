"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[3932],{15586:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-6185db28",path:"/linux-fdisk.html",title:"Разметка диска в Linux с помощью fdisk",lang:"ru-RU",frontmatter:{title:"Разметка диска в Linux с помощью fdisk",date:"2023-12-13",categories:["Linux"],tags:["fdisk"]},excerpt:"",headers:[{level:2,title:"Ссылки",slug:"ссылки",children:[]}],filePathRelative:"linux-fdisk.md",git:{updatedTime:1702479871e3}}},77755:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var e=a(66252),p=a(3577);const l={id:"frontmatter-title",tabindex:"-1"},t=(0,e._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),r=(0,e.uE)('<p>Сначала добавим диск, в VirtualBox это делается в настройках виртуальной машины. Добавим новый диск размером 1гб.</p><p><img src="images/linux-fdisk/linux-fdisk-01.png" alt=""></p><p><img src="images/linux-fdisk/linux-fdisk-02.png" alt=""></p><p><img src="images/linux-fdisk/linux-fdisk-03.png" alt=""></p><p><img src="images/linux-fdisk/linux-fdisk-04.png" alt=""></p><p><img src="images/linux-fdisk/linux-fdisk-05.png" alt=""></p><p><img src="images/linux-fdisk/linux-fdisk-06.png" alt=""></p><p>Проверим, что в системе появился второй диск</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>┌─<span class="token punctuation">[</span>user@parrot<span class="token punctuation">]</span>─<span class="token punctuation">[</span>~<span class="token punctuation">]</span>\n└──╼ <span class="token variable">$ls</span> /dev <span class="token operator">|</span> <span class="token function">grep</span> -E ^sd\nsda\nsda1\nsdb\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Так же диски можно посмотреть через <code>fdisk</code> с параметром <code>-l</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>┌─<span class="token punctuation">[</span>user@parrot<span class="token punctuation">]</span>─<span class="token punctuation">[</span>~<span class="token punctuation">]</span>\n└──╼ <span class="token variable">$sudo</span> <span class="token function">fdisk</span> -l\nDisk /dev/sda: <span class="token number">30</span> GiB, <span class="token number">32212254720</span> bytes, <span class="token number">62914560</span> sectors\nDisk model: VBOX HARDDISK   \nUnits: sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes\nSector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes\nI/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes\nDisklabel type: dos\nDisk identifier: 0x5bfff3f8\n\nDevice     Boot Start      End  Sectors Size Id Type\n/dev/sda1  *     <span class="token number">2048</span> <span class="token number">62910539</span> <span class="token number">62908492</span>  30G <span class="token number">83</span> Linux\n\n\nDisk /dev/sdb: <span class="token number">1</span> GiB, <span class="token number">1073741824</span> bytes, <span class="token number">2097152</span> sectors\nDisk model: VBOX HARDDISK   \nUnits: sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes\nSector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes\nI/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>Запустим <code>fdisk</code> и передадим ему путь к диску.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>┌─<span class="token punctuation">[</span>✗<span class="token punctuation">]</span>─<span class="token punctuation">[</span>user@parrot<span class="token punctuation">]</span>─<span class="token punctuation">[</span>~<span class="token punctuation">]</span>\n└──╼ <span class="token variable">$sudo</span> <span class="token function">fdisk</span> /dev/sdb\n\nWelcome to <span class="token function">fdisk</span> <span class="token punctuation">(</span>util-linux <span class="token number">2.36</span>.1<span class="token punctuation">)</span>.\nChanges will remain <span class="token keyword">in</span> memory only, <span class="token keyword">until</span> you decide to <span class="token function">write</span> them.\nBe careful before using the <span class="token function">write</span> command.\n\nDevice does not contain a recognized partition table.\nCreated a new DOS disklabel with disk identifier 0x9ccf78a2.\n\nCommand <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Создадим на диске таблицу разделов GPT</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Command (m for help): g\nCreated a new GPT disklabel (GUID: 298E01AB-6142-C446-AB5B-EF5AF4D7D40D).\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Добавим один раздел размером 400мб.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Command (m for help): n\nPartition number (1-128, default 1): 1\nFirst sector (2048-2097118, default 2048): \nLast sector, +/-sectors or +/-size{K,M,G,T,P} (2048-2097118, default 2097118): +400M\n\nCreated a new partition 1 of type &#39;Linux filesystem&#39; and of size 400 MiB.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>И второй на всё оставшееся место:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Command (m for help): n\nPartition number (2-128, default 2): 2\nFirst sector (821248-2097118, default 821248): \nLast sector, +/-sectors or +/-size{K,M,G,T,P} (821248-2097118, default 2097118): \n\nCreated a new partition 2 of type &#39;Linux filesystem&#39; and of size 623 MiB.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Запишем изменения командой <code>w</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Command (m for help): w\nThe partition table has been altered.\nCalling ioctl() to re-read partition table.\nSyncing disks.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Проверим ещё раз список дисков, теперь на втором диске присутствуют два раздела.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>┌─<span class="token punctuation">[</span>user@parrot<span class="token punctuation">]</span>─<span class="token punctuation">[</span>~<span class="token punctuation">]</span>\n└──╼ <span class="token variable">$sudo</span> <span class="token function">fdisk</span> -l\nDisk /dev/sda: <span class="token number">30</span> GiB, <span class="token number">32212254720</span> bytes, <span class="token number">62914560</span> sectors\nDisk model: VBOX HARDDISK   \nUnits: sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes\nSector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes\nI/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes\nDisklabel type: dos\nDisk identifier: 0x5bfff3f8\n\nDevice     Boot Start      End  Sectors Size Id Type\n/dev/sda1  *     <span class="token number">2048</span> <span class="token number">62910539</span> <span class="token number">62908492</span>  30G <span class="token number">83</span> Linux\n\n\nDisk /dev/sdb: <span class="token number">1</span> GiB, <span class="token number">1073741824</span> bytes, <span class="token number">2097152</span> sectors\nDisk model: VBOX HARDDISK   \nUnits: sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes\nSector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes\nI/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes\nDisklabel type: gpt\nDisk identifier: 298E01AB-6142-C446-AB5B-EF5AF4D7D40D\n\nDevice      Start     End Sectors  Size Type\n/dev/sdb1    <span class="token number">2048</span>  <span class="token number">821247</span>  <span class="token number">819200</span>  400M Linux filesystem\n/dev/sdb2  <span class="token number">821248</span> <span class="token number">2097118</span> <span class="token number">1275871</span>  623M Linux filesystem\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>Так же посмотреть список дисков и связанные с ними разделы можно командой <code>lsblk</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>┌─<span class="token punctuation">[</span>user@parrot<span class="token punctuation">]</span>─<span class="token punctuation">[</span>~<span class="token punctuation">]</span>\n└──╼ <span class="token variable">$lsblk</span>\nNAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT\nsda      <span class="token number">8</span>:0    <span class="token number">0</span>   30G  <span class="token number">0</span> disk \n└─sda1   <span class="token number">8</span>:1    <span class="token number">0</span>   30G  <span class="token number">0</span> part /home\nsdb      <span class="token number">8</span>:16   <span class="token number">0</span>    1G  <span class="token number">0</span> disk \n├─sdb1   <span class="token number">8</span>:17   <span class="token number">0</span>  400M  <span class="token number">0</span> part \n└─sdb2   <span class="token number">8</span>:18   <span class="token number">0</span>  623M  <span class="token number">0</span> part \nsr0     <span class="token number">11</span>:0    <span class="token number">1</span> 1024M  <span class="token number">0</span> rom  \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки" aria-hidden="true">#</a> Ссылки</h2>',26),i={href:"https://basis.gnulinux.pro/ru/latest/basis/22/22._%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0_%D1%81_%D0%B4%D0%B8%D1%81%D0%BA%D0%B0%D0%BC%D0%B8.html",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("basis.gnulinux.pro: 22. Работа с дисками"),u={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("h1",l,[t,(0,e.Uk)(" "+(0,p.zw)(n.$frontmatter.title),1)]),r,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",i,[c,(0,e.Wm)(a)])])])],64)}}}}]);