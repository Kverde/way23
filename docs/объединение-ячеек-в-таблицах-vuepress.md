---
title: "Объединение ячеек в таблицах VuePress"
date: "2021-01-09"
categories: 
  - "Frontend"
tags: 
  - "vuepress"
---

# {{ $frontmatter.title }}

Стандартные MD-таблицы в VuePress не поддерживают объединение ячеек. Эту функцию можно добавить плагином [markdown-it-multimd-table](https://github.com/RedBug312/markdown-it-multimd-table), он соедержит следующие возможности:

- Объединение ячеек по горизонтали;
- Объединение ячеек по вертикали;
- Разделение ячеек;
- Сложные заголовки у таблиц;
- Пропуск заголовка у таблиц;
- Блочный контент внутри ячеек, такой как списки, код и др.

Рассмотрим установку и работу этого плагина. За основу возьмем [HelloWorld проект](https://way23.ru/размещаем-vuepress-hellowold-на-github-pages/). Полная версия примера размещена в [этом репозитории](https://github.com/Kverde/VuePress/tree/master/multimd_table).

Сначала, включим плагин в скрипт установки `01_CreateProject.bat`:

```
call yarn init
call yarn add -D vuepress
call yarn add -D markdown-it-multimd-table

pause
```

Затем включим его в `config.js`:

```
module.exports = {
  base: "/VuePress/",
  markdown: {
      plugins: {
         'markdown-it-multimd-table': {
              multiline:  true,
              rowspan:    true,
              headerless: true
            }
        }
    }
}
```

Синтаксис таблиц основан на синтаксисе [MultiMarkdown](https://fletcher.github.io/MultiMarkdown-6/syntax/tables.html).

Попробуем отобразить сложную таблицу

```md
| Тема                 |          Примеры            ||
| ^^                   |   Правильно   | Неправильно  |
| -------------------- | :-----------: | -----------: |
|Объявление переменных | ```          | ```           | \
|                      | var a = 2    | var a, b = 2  | \
|                      | ```          | ```           ||
| Наследование         | Главное не множественное     ||
[Справочник программиста]        
```

Результат:

![Сложная таблица в VuePress](images/vuepress_multimd_table.png)
