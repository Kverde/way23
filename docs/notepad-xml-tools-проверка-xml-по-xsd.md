---
title: "Notepad++ XML Tools, проверка xml по xsd"
date: "2020-01-22"
categories: 
  - "Программы"
tags: 
  - "notepad"
---

# {{ $frontmatter.title }}

Описание работы с плагином для [Notepad++](https://notepad-plus-plus.org/) XML Tools:

- Установка
- Автоматическая првоерка XML
- Форматирование XML
- Проверка XML по XSD

## Установка XML Tools

Заходим в Управление плагинами:

![Управление плагинами Notepad++](images/notepad_xmltools_01.png)

Выбираем XML Tools и нажимаем установить:

![Установка XML Tools в Notepad++](images/notepad_xmltools_02.png)

## Проверка xml

При сохранении xml-фала плагин проверяет корректность xml и выдаёт ошибки:

```
XML Parsing error at line 3:

Extra content at the end of the document
```

![Проверка XML в Notepad++](images/notepad_xmltools_03.png)

Проверка не работает с кодировкой `widows-1251`, чтобы работала проверка преобразуйте xml в `utf-8`:

![Смена кодировки XML файла ](images/notepad_xmltools_04.png)

В заголовке файла так же необходимо указать кодировку:

```xml
<?xml version="1.0" encoding="utf-8"?>
```

Если автоматическая проверка не нужна то можно её отключить `XML Tools - Enable XML syntax auto-check`:

![форматирование XML Notepad++](images/notepad_xmltools_06.png)

## Форматирование

Чтобы привести xml-документ к читаемому виду выберите пункт `Pretty XML (XML only - xml with line break)` в меню плагина:

![Автоматическая проверка xml Notepad++](images/notepad_xmltools_05.png)

## Проверка по xsd

Перед проверкой xsd происходит проверка xml файла, поэтому, как было написано выше, кодировка файла должна быть `utf-8`.

Для проверки по xsd выберите пункт `XML Tools - Validate now`.

![Проверка XSD Notepad++](images/notepad_xmltools_07.png)

В появившемся окне выберите файл XSD.

![Проверка XSD Notepad++](images/notepad_xmltools_08.png)

Ссылка на XSD может быть уже указана в XML, тогда выбирать файл не нужно. После выбора появится окно со списком ошибок:

![Проверка XSD Notepad++](images/notepad_xmltools_09.png)
