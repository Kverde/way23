---
title: "PL/SQL Developer. 1. Список подключений и автозамена"
date: "2017-02-08"
categories:
  - "Программы"
tags:
  - "sql"
  - "plsql_developer"
  - "oracle"
---

# {{ $frontmatter.title }}

Описание двух полезны настроек PL/SQL Developer: список подключений и автозамена.

## Fixed Users

Для того чтобы каждый раз не вводить логин и пароль от БД полезно настроить список часто используемых подключений.

Настраивается в `Tools -> Preferences -> Oracle -> Logon History -> Fixed Users`

По одному подключению на строку в формате `[логин]/[пароль]@[идентификатор БД]`

Например `system/pass@DEVELOP system/pass@TEST`

В окне входа этот список доступен в меню по кнопке рядом с полем username

![Окно подключения PLSQL Developer](images/plsql_dev_1.png)

По клику на пункт меню происходит подключение к бд.

## Автозамена

Автозамена настраивается в `Tools -> Preferences -> User Interface -> Editor -> AutoReplace`

Нажимаем Edit...

![Настройка автозамены](images/plsql_dev_2.png)

Вносим строки в формате `[слово]=[автозамена]`

Например `sf=select * from`

Теперь при вводе в редакторе `"sf "` эта строка будет автоматически заменена на `"select * from"`
