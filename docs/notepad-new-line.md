---
title: "Настройка формата окончания строк в notepad++"
date: "2021-12-15"
categories: 
  - "Программы"
tags: 
  - "notepad++"
---

# {{ $frontmatter.title }}

Обычно используется три варианта окончания строк

* CR LF
* CR
* LF

CR и LF это символы: [Carriage Return](https://unicode-table.com/en/000D/) и [New Line](https://unicode-table.com/en/000A/). Без дополнительных настроек они не видны в реакторе. Детальнее смотрите статью [Технические аспекты цифровой текстологии](технические-аспекты-текстологии.md).

Чтобы отобразить эти символы в Notepad++ включите настройку

```
View -> Show Symbols -> Show End of Line
```

На статус баре Notepad++ отображает кодировку открытого файла

![notepad_end_line01](images\notepad_end_line01.png)

При клике правой кнопкой мыши появляется меню для смены символов окончания строк в текущем файле

![notepad_end_line02](images\notepad_end_line02.png)

В настройках можно задать символы окончания строк для новых документов

```
Setting -> Preferences... -> New Document -> Format (Line ending)
```

![notepad_end_line03](images\notepad_end_line03.png)