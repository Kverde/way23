---
title: "Размещаем VuePress HelloWold на GitHub Pages"
date: "2020-12-15"
categories: 
  - "Frontend"
tags: 
  - "vuepress"
---

# {{ $frontmatter.title }}

[VuePress](https://vuepress.vuejs.org) — генератор статических сайтов. Упрощённо, вы пишите несколько файлов в Markdown, запускаете генератор и эти несколько файлов преобразуются в страницы сайта. Причем сайт не требует хостинга с возможностью выполнения скриптов, достаточно отображения статических файлов.

Рассмотрим HelloWold от установки всех приложений до деплоя сайта на [GitHub Pages](https://pages.github.com/). Полный текст примера [находится в репозитории](https://github.com/Kverde/VuePress/tree/master/HelloWorld).

## Устанавливаем приложения

VuePress основан на JavaScript фрейморвке [Vue](https://vuejs.org) поэтому для его работы нужен [Node.js](https://nodejs.org/en/), установите его. Для удобной работы с зависимостями установите [yarn](https://classic.yarnpkg.com/en/).

## Создаём проект

Создайте каталог `HelloWold`, зайдите в него и создайте файл `01_CreateProject.bat` с текстом

```bat
call yarn init
call yarn add -D vuepress

pause
```

Bat файл нужен вместо запуска команд вручную, так как, создавая его, решение задачи становится [воспроизводимым](https://way23.ru/воспроизводимость-задач/). Это значительно повышает эффективность работы в долгосрочной перспективе.

После запуска `01_CreateProject.bat` yarn создаст проект (можете не вводить никаких данных и нажимать Enter) и установит VuePress. В каталоге `HelloWold` появится новый файл, откройте его и добавьте в него следующий скрипт:

```json
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
```

Должно получится примерно так:

```json
{
  "name": "HelloWorld",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {
    "vuepress": "^1.7.1"
  },
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

Не пропустите запятую перед полем `"scripts"`.

## Создаём главную страницу

В каталоге `HelloWold` создайте каталог `docs`, а в нём файл `Readme.md` с содержанием:

```md
# My site

HelloWold
```

## Запускаем сайт

Создайте файл `02_RunProject.bat` с текстом:

```bat
call yarn docs:dev

pause
```

Запустите его. Сейчас сайт запущен локально, откройте его по адресу [localhost:8080](http://localhost:8080/).

## Выкладываем проект на GitHub Pages

[Настройте доступ к GitHub по SSH](https://way23.ru/работа-с-github-по-ssh/) и создайте новый репозиторий.

Перед загрузкой на GitHub в проект необходимо добавить настройку базового пути. Для этого создайте файл `docs/.vuepress/config.js`.

```js
module.exports = {
  base: "/REPO/"
}
```

Замените REPO на имя вашего репозитория, слешы перед и после названия обязательны. Затем создайте файл `02_RunProject.bat` с текстом:

```bat
call yarn docs:build

pause
```

Запустите его. Этот скрипт собирает проект, собранный проект готов к фиксации на GitHub.

Для деплоя создайте ещё один файл `04_DeployProject.bat` с текстом

```bat
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:USENAME/REPO.git master:gh-pages

pause
```

Только замените `USENAME` на имя аккаунта GitHub, а `REPO` на имя репозитория. Запустите файл. После успешной фиксации проект окажется в репозитории.

Теперь зайдите в настройки репоизтория и выберите ветку `gh-pages` в настройках GitHub Pages.

![Настройка GitHub Pages в параметрах репозитория](images/VuePressHelloWorld_GitHubSetting.png)

Переходите по ссылке `https://USERNAME.github.io/REPO/` и проверяйте работу сайта.

## Ссылки

- [VuePress Getting Started](https://vuepress.vuejs.org/guide/getting-started.html)
- [VuePress Deploying](https://vuepress.vuejs.org/guide/deploy.html)
