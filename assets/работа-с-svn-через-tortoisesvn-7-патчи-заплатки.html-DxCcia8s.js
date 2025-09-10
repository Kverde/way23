import{_ as i,c as a,a as s,b as l,t as r,o as t}from"./app-DvfQ69-Y.js";const p="/images/tortoisesvn_07_01.png",c="/images/tortoisesvn_07_02.png",d="/images/tortoisesvn_07_03.png",o="/images/tortoisesvn_07_04.png",v={},m={id:"frontmatter-title",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title"};function b(e,n){return t(),a("div",null,[s("h1",m,[s("a",u,[s("span",null,r(e.$frontmatter.title),1)])]),n[0]||(n[0]=l('<p>TortoiseSVN содержит функции экспорта изменения рабочей копии в файл и применения этих изменений к другой рабочей копии. Эти возможности используются, например, для организации pre-commit review.</p><p>Для создания патча выберите в меню TortoiseSVN пункт <strong>Create patch...</strong>.</p><p><img src="'+p+'" alt="TortoiseSVN Create patch"></p><p>Появиться окно с выбором файлов, изменения из которых войдут в патч. Обычно, нужно выбрать все.</p><p><img src="'+c+'" alt="TortoiseSVN Create patch"></p><p>Затем появиться диалог с выбором имени и расположения файла патча и в конце отобразиться содержимое патча в специальном окне TortoiseSVN.</p><p><img src="'+d+'" alt="TortoiseSVN patch"></p><p>Патч агрегирует изменения всех файлов проекта. Пути к файлам формируются относительно каталога из которого он создаётся. Поэтому применять патч нужно к тому же каталогу. Чтобы избежать путаницы создавайте патчи с корня рабочей копии.</p><p>Просматривать патч можно через просмотрщик TortoiseSVN или применив патч к рабочей копии.</p><p><img src="'+o+`" alt="TortoiseSVN Apply patch"></p><p>Патч является простым текстовым файлом — просматривается в любом текстовом редакторе. Но без применения патча к рабочей копии видно только ближайшие к изменениям строки. Пример текста патча:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">Index: uFormMain.dfm</span>
<span class="line">===================================================================</span>
<span class="line">--- uFormMain.dfm   (revision 2)</span>
<span class="line">+++ uFormMain.dfm   (working copy)</span>
<span class="line">@@ -13,4 +13,13 @@</span>
<span class="line">   OldCreateOrder = False</span>
<span class="line">   PixelsPerInch = 96</span>
<span class="line">   TextHeight = 13</span>
<span class="line">+  object Button1: TButton</span>
<span class="line">+    Left = 288</span>
<span class="line">+    Top = 160</span>
<span class="line">+    Width = 75</span>
<span class="line">+    Height = 25</span>
<span class="line">+    Caption = &#39;Button1&#39;</span>
<span class="line">+    TabOrder = 0</span>
<span class="line">+    OnClick = Button1Click</span>
<span class="line">+  end</span>
<span class="line"> end</span>
<span class="line">Index: uFormMain.pas</span>
<span class="line">===================================================================</span>
<span class="line">--- uFormMain.pas   (revision 2)</span>
<span class="line">+++ uFormMain.pas   (working copy)</span>
<span class="line">@@ -4,10 +4,12 @@</span>
<span class="line"></span>
<span class="line"> uses</span>
<span class="line">   Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,</span>
<span class="line">- Vcl.Controls, Vcl.Forms, Vcl.Dialogs;</span>
<span class="line">+  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls;</span>
<span class="line"></span>
<span class="line"> type</span>
<span class="line">   TForm1 = class(TForm)</span>
<span class="line">+    Button1: TButton;</span>
<span class="line">+    procedure Button1Click(Sender: TObject);</span>
<span class="line">   private</span>
<span class="line">     { Private declarations }</span>
<span class="line">   public</span>
<span class="line">@@ -21,4 +23,9 @@</span>
<span class="line"></span>
<span class="line"> {$R *.dfm}</span>
<span class="line"></span>
<span class="line">+procedure TForm1.Button1Click(Sender: TObject);</span>
<span class="line">+begin</span>
<span class="line">+  ShowMessage(&#39;Hello World!&#39;);</span>
<span class="line">+end;</span>
<span class="line">+</span>
<span class="line"> end.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12))])}const g=i(v,[["render",b]]),h=JSON.parse('{"path":"/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-svn-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-tortoisesvn-7-%D0%BF%D0%B0%D1%82%D1%87%D0%B8-%D0%B7%D0%B0%D0%BF%D0%BB%D0%B0%D1%82%D0%BA%D0%B8.html","title":"Работа с SVN через TortoiseSVN. 7. Патчи (заплатки)","lang":"ru-RU","frontmatter":{"title":"Работа с SVN через TortoiseSVN. 7. Патчи (заплатки)","date":"2019-08-17","categories":["Системы контроля версий (VCS)"],"tags":["svn","tortoisesvn"]},"git":{"updatedTime":1744621280000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":2,"url":"https://github.com/Petro"}],"changelog":[{"hash":"711f4e23d676eb57130f06703f8ce3ad7d6a7937","time":1744621280000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"Обновлены библиотеки"},{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"работа-с-svn-через-tortoisesvn-7-патчи-заплатки.md"}');export{g as comp,h as data};
