---
title: "Установка Oracle Instant Client в Windows"
date: "2017-09-13"
categories: 
  - "Базы данных"
tags: 
  - "oracle"
---

# {{ $frontmatter.title }}

[Instant Client](http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html) — сокращенная версия клиента Oracle.

Установка состоит из трех этапов:

1. Загрузка файлов Instant Client
2. Установка системных переменных
3. Настройка подключения - файл tnsnames.ora

### Скачивание файлов

Скачиваем [три пакета Instant Client](http://www.oracle.com/technetwork/topics/winsoft-085727.html). Обычно я использую 32х версию, проблем не было.

- Instant Client Package - Basic: All files required to run OCI, OCCI, and JDBC-OCI applications
- Instant Client Package - SQL\*Plus: Additional libraries and executable for running SQL\*Plus with Instant Client
- Instant Client Package - SDK: Additional header files and an example makefile for developing Oracle applications with Instant Client

Пакет Basic — основной пакет. Sql\*Plus — консольный клиент, полезен для проверки настройки. Пакет SDK нужен для подключения к Oracle через Python.

Распаковываем их в один каталог, например, `C:\oracle`.

### Установка системных переменных

Затем редактируем [системные переменные](http://way23.ru/rapid-environment-editor-%d1%80%d0%b5%d0%b4%d0%b0%d0%ba%d1%82%d0%be%d1%80-%d1%81%d0%b8%d1%81%d1%82%d0%b5%d0%bc%d0%bd%d1%8b%d1%85-%d0%bf%d0%b5%d1%80%d0%b5%d0%bc%d0%b5%d0%bd%d0%bd%d1%8b%d1%85-windows/)

Добавляем `C:\oracle` в `PATH`

Создаем новую переменную `TNS_ADMIN=C:\oracle`

В зависимости от используемой кодировки БД нужно добавить переменную `NLS_LANG=RUSSIAN_RUSSIA.CL8MSWIN1251`

### Настройка подключения

В каталоге `C:\oracle` создаем новый файл `tnsnames.ora` со списком баз данных и параметров подключения к ним.

Пример:

 
MY\_DATABASE =
  (DESCRIPTION =
    (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.1.2)(PORT = 1521))
    (CONNECT\_DATA =
      (SERVICE\_NAME = my\_test\_db)
    )
  )

### Проверка подключения

Запускаем SqlPlus

 
chcp 1251
sqlplus system/my\_password@MY\_DATABASE

Если появилась ошибка

Ошибка: Приложению не удалось запуститься, поскольку MSVCP110.dll не был найден.

то нужно установить [Microsoft Visual C++ 2010 Redistributable Package (x86)](https://www.microsoft.com/ru-ru/download/details.aspx?id=5555).

Если ошибка

Ошибка: Приложению не удалось запуститься, поскольку MSVCP120.dll не был найден.

то [Microsoft Visual C++ 2013 Redistributable Package](https://www.microsoft.com/ru-RU/download/details.aspx?id=40784).

И на всякий случай ссылка на [Microsoft Visual C++ 2015 Redistributable Package](https://www.microsoft.com/ru-ru/download/details.aspx?id=48145).

Если все верно, то произойдет подключение к БД ![SqlPlus - подключение к БД](images/1.png)
