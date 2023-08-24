---
title: "Установка пакетов в контейнер Dokku через плагин dokku-apt"
date: "2020-06-07"
categories: 
  - "Python"
  - "Программы"
tags: 
  - "dokku"
---

# {{ $frontmatter.title }}

Если приложение зависит от пакетов, то эти пакеты необходимо установить при разворачивании приложения. Плагин [dokku-apt](https://github.com/dokku-community/dokku-apt) автоматизирует установку пакетов.

Рассмотрим простейший случай — нужно только установить пакеты. Сначала устанавливаем плагин:

```bash
sudo dokku plugin:install https://github.com/dokku-community/dokku-apt apt
```

Создаём в корне проекта файл `apt-packages` со списком пакетов:

```
libasound2-plugins
libsox-fmt-all
libsox-dev
sox
nano
```

Фиксируем и пушим в Dokku изменения. Указанные пакеты будут установлены во время разворачивания приложения.

Кроме установки пакетов плагин позволяет добавлять в контейнер репозитории с исходниками и системные переменные. Примеры указаны на [странице плагина](https://github.com/dokku-community/dokku-apt).
