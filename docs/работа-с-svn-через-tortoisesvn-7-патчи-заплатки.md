---
title: "Работа с SVN через TortoiseSVN. 7. Патчи (заплатки)"
date: "2019-08-17"
categories: 
  - "Системы контроля версий (VCS)"
tags: 
  - "svn"
  - "tortoisesvn"
---

# {{ $frontmatter.title }}

TortoiseSVN содержит функции экспорта изменения рабочей копии в файл и применения этих изменений к другой рабочей копии. Эти возможности используются, например, для организации pre-commit review.

Для создания патча выберите в меню TortoiseSVN пункт **Create patch...**.

![TortoiseSVN Create patch](images/tortoisesvn_07_01.png)

Появиться окно с выбором файлов, изменения из которых войдут в патч. Обычно, нужно выбрать все.

![TortoiseSVN Create patch](images/tortoisesvn_07_02.png)

Затем появиться диалог с выбором имени и расположения файла патча и в конце отобразиться содержимое патча в специальном окне TortoiseSVN.

![TortoiseSVN patch](images/tortoisesvn_07_03.png)

Патч агрегирует изменения всех файлов проекта. Пути к файлам формируются относительно каталога из которого он создаётся. Поэтому применять патч нужно к тому же каталогу. Чтобы избежать путаницы создавайте патчи с корня рабочей копии.

Просматривать патч можно через просмотрщик TortoiseSVN или применив патч к рабочей копии.

![TortoiseSVN Apply patch](images/tortoisesvn_07_04.png)

Патч является простым текстовым файлом — просматривается в любом текстовом редакторе. Но без применения патча к рабочей копии видно только ближайшие к изменениям строки. Пример текста патча:

```
Index: uFormMain.dfm
===================================================================
--- uFormMain.dfm   (revision 2)
+++ uFormMain.dfm   (working copy)
@@ -13,4 +13,13 @@
   OldCreateOrder = False
   PixelsPerInch = 96
   TextHeight = 13
+  object Button1: TButton
+    Left = 288
+    Top = 160
+    Width = 75
+    Height = 25
+    Caption = 'Button1'
+    TabOrder = 0
+    OnClick = Button1Click
+  end
 end
Index: uFormMain.pas
===================================================================
--- uFormMain.pas   (revision 2)
+++ uFormMain.pas   (working copy)
@@ -4,10 +4,12 @@

 uses
   Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
- Vcl.Controls, Vcl.Forms, Vcl.Dialogs;
+  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls;

 type
   TForm1 = class(TForm)
+    Button1: TButton;
+    procedure Button1Click(Sender: TObject);
   private
     { Private declarations }
   public
@@ -21,4 +23,9 @@

 {$R *.dfm}

+procedure TForm1.Button1Click(Sender: TObject);
+begin
+  ShowMessage('Hello World!');
+end;
+
 end.
```
