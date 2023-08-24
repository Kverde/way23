---
title: "WinMerge — сравнение файлов"
date: "2019-07-08"
categories: 
  - "Программы"
tags: 
  - "svn"
  - "tortoisesvn"
---

# {{ $frontmatter.title }}

[WinMerge](http://winmerge.org/?lang=ru) позволяет сравнить два текстовых файла и показывает отличия в них. Работает также как утилиты из систем контроля версий, например, вместе с [TortoiseSVN](https://way23.ru/%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%b0-%d1%81-svn-%d1%87%d0%b5%d1%80%d0%b5%d0%b7-tortoisesvn-1-%d0%b2%d1%8b%d0%b3%d1%80%d1%83%d0%b7%d0%ba%d0%b0-%d1%84%d0%b8%d0%ba%d1%81%d0%b0%d1%86%d0%b8%d1%8f/) устанавливается [TortoiseMerge](https://tortoisesvn.net/TortoiseMerge.html).

## Сравнение двух файлов

Запускаем WinMerge и нажимаем кнопку Open на панели инструментов.

![Кнопка Open в панели инструментовWinMege](images/img1.png)

Выбираем два файла и нажимаем Compare.

![Диалог открытия файлов WinMerge](images/img2.png)

Открывается вкладка со сравнением, выделены отличающиеся в файлах строки.

![Сравнение файлов в WinMerge](images/img3.png)

## Сравнение двух текстов

Если файлов нет, а нужно просто сравнить два текста, то для этого подойдёт кнопка NewDocument.

![Кнопка NewDocument в WinMerge](images/img4.png)

В появившейся вкладке вводим в левую и правую панели сравниваемые тексты и нажимаем кнопку Refresh.

![Заполнение текстов для сравнения в WinMerge](images/img5.png)

Получаем подсветку различий в текстах.

![Сравнение текстов в WinMerge](images/img6.png)

## Установка по умолчанию в TortoiseSVN

WinMerge можно установить как инструмент слияний в TortoiseSVN взамен стандартного TortoiseMerge. Мне больше нравится стандартный, поэтому я его не меняю. Посмотреть какой установлен и изменить можно в меню TortoiseSVN — Settings — MergeTool.

![Настройки TortoiseSVN](images/img7.png) ![Установка инструмента слияния в TortoiseSVN](images/img8.png)
