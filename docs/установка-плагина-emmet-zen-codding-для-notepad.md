---
title: "Установка плагина Emmet (Zen-codding) для Notepad++"
date: "2020-06-10"
categories: 
  - "Программы"
tags: 
  - "notepad"
  - "emmet"
---

# {{ $frontmatter.title }}

![Логотип Emmit](images/emmet_setup_01.png)

[Emmet](https://emmet.io/) — это плагин для редактора ускоряющий ввод HTML, CSS и XML разметки. Работает это так: вы вводите набор сокращений, нажимаете горячую клавишу и сокращение разворачивается в правильный блок разметки. Emmet реализован для многих популярных редакторов, в том числе для Notepad++.

Начнём установку. Сперва установите Python Script, он нужен для работы Emmet. Откройте `Plugins->Plugin Admin`, найдите там `PythonScript` и запустите установку.

В `Plugin Admin` нет плагина Emmet, поэтому скачайте его вручную [по ссылке](http://download.emmet.io/npp/emmet-npp.zip). Если у вас установлен Notepad++ 64х тогда скачайте [версию отсюда](https://github.com/emmetio/npp/issues/19#issuecomment-383800041). Версия Notepad++ отображается в окне `?->About Notepad++` или при нажатии `F1`.

Затем откройте каталог плагинов через меню: `Plugins->Open Plugin Folder`. Внутри него создайте каталог `EmmetNPP`. В него поместите dll из скачанного архива и разархивируйте внутренности папки `EmmetNPP` тоже из архива.

Перезапустите Notepad++, меню `Emmet` находится в пункте `Plugins`. Горячие клавиши для замены сокращений отображаются справа от пункта меню.

![Меню Emmit в Notepad++](images/emmet_setup_02.png)

Горячие клавиши настраиваются на форме `Settings->Shortcut mapper->Plugin commands`. Удобно установить клавишу **Tab** для разворачивания сокращения.
