---
title: "Добавляем favicon в VuePress"
date: "2021-01-07"
categories: 
  - "Frontend"
tags: 
  - "vuepress"
  - "favicon"
---

# {{ $frontmatter.title }}

Будем использовать рекомендации из [этой статьи](https://medium.com/swlh/are-you-using-svg-favicons-yet-a-guide-for-modern-browsers-836a6aace3df) по добавлению favicon в современных форматах.

За основу возьмем [HelloWorld проект](https://way23.ru/размещаем-vuepress-hellowold-на-github-pages/). Полная версия примера размещена в [этом репозитории](https://github.com/Kverde/VuePress/tree/master/favicon).

При генерации сайта VuePress берет файлы из каталога `docs\.vuepress\public`. Там мы и будем размещать файлы иконок. Нам нужно 4 файла, разместим их следующим образом:

- Прямо в каталоге `public` поместим `favicon.ico` размером `32x32`.
- В каталоге `public\assets\favicons` разместим
    - `favicon.svg`
    - `mask-icon.svg` ([Монохромное изображение](https://developer.yoast.com/blog/safari-pinned-tab-icon-mask-icon/))
    - `apple-touch-icon.png` размером `180x180`
    - `google-touch-icon.png` размером `512x512`

Затем добавим файл с манифестом `public\manifest.json`:

```json
{
    "name": "Starter",
    "short_name": "Starter",
    "icons": [{
        "src": "/VuePress/assets/favicons/google-touch-icon.png",
        "sizes": "512x512"
    }],
    "background_color": "#ffffff",
    "theme_color": "#ffffff",
    "display": "fullscreen"
}
```

Обратите внимание на путь к изображению в `src`, если используется настройка VuePress `base` то её необходимо прописать здесь вручную.

Теперь пропишем теги в `head`, через `config.js`:

```js
module.exports = {
  base: "/VuePress/",
  head: [
    ['meta', { name: "theme-color", content: "#ffffff"}],
    ['link', { rel: "icon", href: "/assets/favicons/favicon.svg"}],
    ['link', { rel: "mask-icon", href: "/assets/favicons/mask-icon.svg", color: "red"}],
    ['link', { rel: "apple-touch-icon", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "manifest", href: "manifest.json"}]
  ]  
}
```

Проверяем работу на сайте:

![favicon в VuePress](images/vuepress_favicon.png)
