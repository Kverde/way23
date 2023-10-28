---
title: "Подключение к базе данных PostgreSQL через DBeaver"
date: "2023-10-28"
categories:
  - "Базы данных"
tags:
  - "DBeaver"
---

# {{ $frontmatter.title }}

[DBeaver](https://dbeaver.io/) — графический клиент для баз данных. Сначала [установите DBeaver](linux-install-deb.md).

Если тема графического интерфейса, установленная по умолчанию, неудобная, то можете поменять её в настройках: `Windows` — `User Interface` — `Appearance` — `Theme`. Например, установите `Classic`.

Выберите пункт меню `Database` — `New Database Connection`. Из разных баз данных выберите PostgreSQL.

В появившимся окне заполните `Host`, `Port`, в разделе `Authentication` поля `Username` и `Password`.

Через кнопку `Test connection...` проверьте работу подключения. При первом подключении DBeaver предложит установить драйвер для работы с PostgreSQL, установите его. Если все нормально, то сохраните подключение кнопкой `Finish`.

Нажмите на новое подключение правой кнопкой мыши. И выберите пункт меню `SQL Editor` — `Open SQL script`.

В окне скрипта введите запрос:

```
select now()
```

Нажмите `Ctrl+Enter` — скрипт выполнится и DBeaver отобразит результаты под окном с текстом запроса.