---
title: "Установка Windows Server 2016 на VirtualBox и настройка удаленного подключения"
date: "2017-09-01"
categories:
  - "Операционные системы"
tags:
  - "virtualbox"
  - "windows-server"
---

# {{ $frontmatter.title }}

Устанавливать будем на [VirtualBox](http://way23.ru/virtualbox-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D0%B2%D0%B8%D1%80%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D0%BC/), скачиваем iso образ Windows Server 2016 с [сайта Microsoft](https://www.microsoft.com/ru-ru/evalcenter/evaluate-windows-server-2016) или [раздачу](https://rutracker.org/forum/viewtopic.php?t=5296175) с уже интегрированными обновлениями.

Добавляем и запускаем новую ВМ, начинается процесс установки:

![Выбор языка установщика](images/win_server_1.png)

![Запуск установки](images/win_server_2.png)

Выбираем версию с рабочим столом.

![Выбор версии Windows Server](images/win_server_3.png)

![Лицензионное соглашение](images/win_server_4.png)

![Выбор типа установки](images/win_server_5.png)

![Выбор диска](images/win_server_6.png)

![Установка](images/win_server_7.png)

![Установка пароля](images/win_server_8.png)

![Установка пароля](images/win_server_9.png)

## Настройка удаленного подключения

Открываем окно настроек системы

![Запуск программ свойства системы](images/win_server_10.png)

![Дополнительные параметры системы](images/win_server_11.png)

Включаем удаленный доступ

![Включение удаленного доступа](images/win_server_12.png)

Теперь запишем IP гостевой системы

![Команда ipconfig](images/win_server_13.png)

Переходим в хостовую систему, настраиваем и сохраняем новое подключение

![Запуск RDP](images/win_server_14.png)

![Настройка RDP](images/win_server_15.png)
