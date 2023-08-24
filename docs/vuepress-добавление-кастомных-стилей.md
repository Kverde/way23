---
title: "VuePress добавление кастомных стилей"
date: "2020-12-17"
categories: 
  - "Frontend"
tags: 
  - "vuepress"
---

# {{ $frontmatter.title }}

Рассмотрим задачу выделения отдельных заголовков разными цветами. Разобьём задачу на две: сначала добавим к определенным заголовкам специальные CSS-классы, а затем добавим стили для этих классов.

За основу возьмем [HelloWorld проект из прошлого поста](https://way23.ru/размещаем-vuepress-hellowold-на-github-pages/). Полная версия примера размещена в [этом репозитории](https://github.com/Kverde/VuePress/tree/master/CustomStyle).

## Установка плагина markdown-it-attrs

Плагин [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs) позволяет добавить атрибуты для любого блока разметки.

Для установки плагина дополним `01_CreateProject.bat` новой командой

```bat
call yarn init

call yarn add -D vuepress
call yarn add -D markdown-it-attrs

pause
```

Затем добавим плагин в `config.js`:

```js
module.exports = {
    base: "/VuePress/",
    markdown: {
        plugins: {
            'markdown-it-attrs': {}
        }
    }
}
```

## Маркировка Markdown

Теперь укажем внутри `Readme.md` несколько свойств.

```md
# Проверим работу

## Новая модель {.red}

С другой стороны новая модель организационной деятельности напрямую зависит от системы масштабного изменения ряда параметров.

## Системный анализ {.blue}

Практический опыт показывает, что консультация с профессионалами из IT требует от нас системного анализа экономической целесообразности принимаемых решений?
```

Такой код

```md
# header {.style-me}
```

Преобразуется в

```html
<h1 class="style-me">header</h1>
```

## Добавление стиля

Для того чтобы добавить к сайту новый стиль создадим файл `docs\.vuepress\styles\index.styl`:

```css
.red {
    color: red;
}

.blue {
    color: blue;
}
```

Проверим результат:

![Разный цвет заголовков](images/VuePress_CustomStyles.png)
