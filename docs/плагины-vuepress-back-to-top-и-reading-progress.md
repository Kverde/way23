---
title: "Плагины VuePress back-to-top и reading-progress"
date: "2021-01-07"
categories: 
  - "Frontend"
tags: 
  - "vuepress"
---

# {{ $frontmatter.title }}

Рассмотрим установку и работу плагинов [plugin-back-to-top](https://v1.vuepress.vuejs.org/plugin/official/plugin-back-to-top.html) и [plugin-reading-progress](https://github.com/tolking/vuepress-plugin-reading-progress).

За основу возьмем [HelloWorld проект](https://way23.ru/размещаем-vuepress-hellowold-на-github-pages/). Полная версия примера размещена в [этом репозитории](https://github.com/Kverde/VuePress/tree/master/Plugins01).

## back-to-top

Плагин добавляет кнопку которая скролит страницу наверх. Кнопка появляется только если страницы прокручена по вертикали.

Для установки добавляем команду в скрипт создания проекта `01_CreateProject.bat`:

```
call yarn init
call yarn add -D vuepress
call yarn add -D @vuepress/plugin-back-to-top
```

И активируем плагин в `config.js`:

```
module.exports = {
  base: "/VuePress/",
  plugins: [
    '@vuepress/back-to-top'
  ]
}
```

Запускаем сайт, скролим вниз и видим появившуюся кнопку:

![Плагин VuePress scroll to top](images/vuepress_plugin_scrolltotop.png)

## reading-progress

Плагин добавляет индикатор показывающий насколько страница прокручена вниз. Это удобно при чтении с телефона, где скроллбар отображается только в процессе прокрутки.

Для установки добавляем команду в скрипт создания проекта `01_CreateProject.bat`:

```
call yarn init
call yarn add -D vuepress
call yarn add -D @vuepress/plugin-back-to-top
call yarn add -D vuepress-plugin-reading-progress
```

И активируем плагин в `config.js`:

```
module.exports = {
  base: "/VuePress/",
  plugins: [
    '@vuepress/back-to-top',
    'reading-progress'
  ]
}
```

При прокрутке отображается прогресс чтения:

![Плагин VuePress reading progress](images/vuepress_plugin_reading_progress.png)

Плагин позволяет настроить отображения индикатора только на некоторых страницах: как глобально в настройках, так и для каждой странице отдельно. Пример глабальной настройки включающей индикатор везде кроме главной страницы:

```
  ['reading-progress', {readingDir: /[^/]+$/}]
```
