---
title: "Плагин VuePress для отображения формул vuepress-plugin-katex"
date: "2021-01-08"
categories: 
  - "Frontend"
tags: 
  - "vuepress"
---

# {{ $frontmatter.title }}

Плагин [vuepress-plugin-katex](https://github.com/maginapp/vuepress-plugin-katex) основан на плагине [markdown-it-texmath](https://github.com/goessner/markdown-it-texmath) который использует для рендера формул [KaTeX](https://katex.org/) (Аналог [MathJax](https://www.mathjax.org/)).

Рассмотрим установку и работу этого плагина. За основу возьмем [HelloWorld проект](https://way23.ru/размещаем-vuepress-hellowold-на-github-pages/). Полная версия примера размещена в [этом репозитории](https://github.com/Kverde/VuePress/tree/master/katex).

Сначала, включим плагин в скрипт установки `01_CreateProject.bat`:

```
call yarn init
call yarn add -D vuepress
call yarn add -D @maginapp/vuepress-plugin-katex
```

Затем включим его в `config.js`:

```
module.exports = {
    base: "/VuePress/",
    plugins: [
        ['@maginapp/vuepress-plugin-katex']
    ]
}
```

По умолчанию для добавления формул используются символы `$` (есть и [другие варианты](https://github.com/goessner/markdown-it-texmath#features)). Причем, есть два способа встраивания: внутри строки и отдельным блоком. Рассмотрим пример в `Readme.md`:

```md
# My site

Формула квадратного $ax^2 + bx + c$ уравнения показывает...

Примером является формула

$$
x + y + z = \frac{a + b}{c^2}
$$

которая показывает зависимость...
```

При запуске сайта код преобразуется в формулы:

![](images/vuepress_katex.png)
