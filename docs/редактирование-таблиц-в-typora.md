---
title: "Редактирование таблиц в Typora"
date: "2019-08-29"
categories: 
  - "Программы"
tags: 
  - "перевод"
  - "typora"
---

# {{ $frontmatter.title }}

Перевод страницы документации Typora [Table Editing](http://support.typora.io/Table-Editing/).

## Таблицы в Markdown

Typora поддерживает синтаксис таблиц [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/). Следующий текст в markdown-файле будет преобразован в таблицу.

|Первый заголовок | Второй заголовок|
|------------ | -------------|
|Содержимое ячейки 1 | Содержимое ячейки 2|
|Содержимое первой колонки | Содержимое второй колонки|

## Редактирование таблиц в Typora

Для создания и изменения таблиц используйте markdown разметку, либо расширенные возможности GUI: контекстное меню, горячие клавиши, drag & move и всплывающие подсказки.

![Меню таблицы в Typora](images/typoa_table_01.png)

### Создание таблиц в Typora

Для создания таблицы в Typora просто напишите заголовок таблицы в markdown.

```md
|First Header | Second Header|
```

И затем нажмите Enter.

Также таблица вставляется через главное меню **Paragraph->Table**, или сочетанием клавиш `Ctrl+T`.

Минимальная таблица состоит из заголовка, одной строки и одного столбца.

### Добавление строки в таблицу

Нажмите `Command/Ctrl+Enter` для вставки пустой строки под текущей строкой таблицы, либо используйте контекстное меню.

### Удаление строки из таблицы

Команда удаления доступна в контекстном меню.

### Добавление и удаление колонки в таблице

Сделайте клик правой кнопкой мыши на ячейке таблицы, и в подменю **table** контекстного меню, есть пункты для добавления и удаления колонок таблицы.

### Изменение размера таблицы

Поставьте курсор внутри таблицы и над заголовком таблицы появиться всплывающая подсказка. Нажмите на самую левую иконку, и вам будет доступно изменение размера таблицы как в самых продвинутых редакторах.

Если вы хотите добавить в таблицу более чем 6 столбцов или 10 строк, нажмите на поле ввода внизу и ввести нужно число.

![Подсказка для таблиц Typora](images/typoa_table_02.png)

### Выравнивание текста в колонке

В [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/), выравнивание в колонке настраивается по такому примеру:

| Default | Left  | Right | Center |
| ------- | :---- | ----: | :----: |
| cell1   | cell2 | cell3 | cell4  |

В Typora, вы можете просто изменить выравнивание текста в колонке выбором подходящей иконки из всплывающей подсказки на таблице.

При установке выравнивания, Typora добавит атрибут `style="text-align: left"` в выбранную колонку (`<td>`), но окончательное выравнивание определяется после применения правил CSS текущей темы и пользовательских CSS.

### Перемещение строк и столбцов

Переместите мышь на левую (верхнюю) границу строки (колонки) и используйте drag & drop.
