---
title: "Как добавить ярлык на рабочий стол в Ubuntu"
date: "2023-07-18"
categories:
  - "Операционные системы"
tags:
  - "Linux"
---

# {{ $frontmatter.title }}

Создайте файл `program.desktop` со следующим содержанием:


```
[Desktop Entry]
Version=1.0
Name=program
Type=Application
Exec=/path_to_program
Terminal=false
StartupNotify=true
```

Замените `program` на название программы и `/path_to_program` на путь к программе.

Затем сделайте этот файл запускаемым через `chmod` или через свойства ярлыка:

![](images/ubuntu_desktop_01.png)

На последнем шаге нажмите правую кнопку мыши на ярлыке и выберите пункт `Allow Launching`.

Если после этого ярлык не будет работать, то проверьте следующее:

1. Запускается ли программа если в консоли запустить команду указанную в параметре `Exec` ярлыка;

2. Проверьте ярлык командой `desktop-file-validate program.desktop` ([desktop-file-utils](https://www.freedesktop.org/wiki/Software/desktop-file-utils/)).

