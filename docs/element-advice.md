---
title: "Советы по мессенджеру Element"
date: "2023-08-17"
categories:
  - "Информационная безопасность"
tags:
  - "Element"
---

# {{ $frontmatter.title }}

Отдельные страницы с инструкциями:

* [Регистрация в Element.io](регистрация-в-element-io.md)
* [Запуск нескольких профилей в Element](element-profiles.md) (и хранение профиля в криптоконтейнере).

Документация, инструкции:

* [Документация к Matrix на примере Element](https://matrix.org/docs/chat_basics/matrix-for-im/)
* [Русскоязычное сообщество протокола Матрикс (Matrix)](https://ru-matrix.org/wiki/Главная)
* [Курс по Element на Matrix](https://www.youtube.com/watch?v=eS54NhMrxzs&list=PLeDR6lYFEHWG_trdDtfY8A9JiNRpmUDd7&pp=iAQB)
* [Matrix at Darmstadt University of Applied Sciences](https://its.h-da.io/element-docs/en/)

## Оглавление

[[toc]]

## 1. Просмотр устройств пользователя

В профиле пользователя видны устройства с которых есть сессии пользователя. Таким способом можно определить кто из участников пользуется Windows или смартфоном.

![](images/elemnt-advices-01.png)

## 2. Список сессий

Удаляйте неиспользуемые сессии через вкладку `Sessions` в настройках Element.

![](images/elemnt-advices-02.png)

## 3. Массовое сообщение в комнатах

В комнате можно отметить определенного человека если отметить его ник начиная с символа `@`, например, `@petrov`.

Участник комнаты с ролью `администратор` (и, возможно, с ролью `модератор`) может отправлять массовые сообщения с помощью ключевого слова `@room`.

## 4. Подключение через прокси

Можно запустить Element так, чтобы трафик проходил через Tor или другой транспорт. Для этого используется консольный параметр

```
--proxy-server=address:port
```

Описание параметра находится на странице [документации Electron](https://www.electronjs.org/docs/latest/api/command-line-switches).

Список остальных консольных параметров можно посмотреть командой

```
/opt/Element/element-desktop --help
```

