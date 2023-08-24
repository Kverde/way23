---
title: "Dokku. Команды для управления приложениями"
date: "2017-01-22"
categories: 
  - "Программы"
tags: 
  - "dokku"
---

# {{ $frontmatter.title }}

Чтобы получить справку по командам для управления приложениями наберите

dokku apps:help 

Всего доступно четыре команды

dokku apps                                           # List your apps
dokku apps:create # Create a new app
dokku apps:destroy # Permanently destroy an app
dokku apps:rename # Rename an app

## Список приложений

Для вывода списка приложений наберите команду

dokku apps

\=====> My Apps
node-js-app
python-app

Для отключения вывода дополнительной информации команд Dokku используйте флаг `--quiet`.

dokku --quiet apps

node-js-app
python-app

## Ручное создание приложений

Обычный шаблон создания приложений на Dokku - настройка приложения перед развёртыванием. Для создания приложений используйте команду

dokku apps:create node-js-app

Creating node-js-app... done

После создания вы можете настроить приложение и развернуть его когда все будет готово. Это удобно в случаях если вам нужно:

- Настроить домены и ssl-сертификаты
- Настроить базы данных и связать их приложением
- Установить переменные окружения

## Удаление развёрнутых приложений

Если вам нужно удалить приложение используйте команду `apps:destroy`. Перед любым опасным действием Dokku требует подтверждения. Команда удаление не исключение и попросит еще раз ввести название приложения прежде чем удалить его.

dokku apps:destroy node-js-app

 !     WARNING: Potentially Destructive Action
 !     This command will destroy node-js-app (including all add-ons).
 !     To proceed, type "node-js-app"

> node-js-app
Destroying node-js-app (including all add-ons)

Для того чтобы удалить приложения без подтверждения используйте флаг `--force`

dokku --force apps:destroy node-js-app

Destroying node-js-app (including all add-ons)

Команда удаления приложения удалит все связи сервисов с приложением и все настройки приложения. Но сервисы сохранят свои данные для использования в будущем.

## Переименование развернутого приложения

Для переименования развёрнутого приложения используйте команду `apps:rename`. Приложение должно быть развернуто хотя бы один раз чтобы операция переименования завершилась успешно.

dokku apps:rename node-js-app io-js-app

Destroying node-js-app (including all add-ons)
-----> Cleaning up...
-----> Building io-js-app from herokuish...
-----> Adding BUILD\_ENV to build environment...
-----> Node.js app detected

-----> Creating runtime environment

...

=====> Application deployed:
       http://io-js-app.ci.dokku.me

Renaming node-js-app to io-js-app... done

Эта команда копирует все содержимое приложения в новую директорию с выбранным именем, удаляет старое приложение, собирает и развёртывает новое. Все переменные окружения, включая ссылки на базы данных сохраняются.

## Ссылки

[Документация Dokku](http://dokku.viewdocs.io/dokku/deployment/application-management/)
