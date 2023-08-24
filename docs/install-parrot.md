---
title: "Установка Parrot OS"
date: "2022-04-21"
categories: 
  - "Операционные системы"
  - "Информационная безопасность"
tags: 
  - "Parrot OS"
---

# {{ $frontmatter.title }}

[Parrot](https://www.parrotsec.org/) — Дистрибутив Linux основанный на Debian Stable, может работать на USB-накопителе с шифрованием разделов.

## Инструкций по установке

Общая схема установки: сначала записываем образ Parrot на флешку (без шифрования, Live-USB), затем запускаем систему с флешки и на эту же флешку устанавливаем систему в обычном режиме и с шифрованием разделов.

Для установки понадобится флешка размером от 64 Гб, например, из [этого списка](https://www.minitool.com/news/fastest-usb-flash-drive.html).

Скачайте [образ системы](https://www.parrotsec.org/download/), выберите версию Security Edition. Скачать можно как напрямую, так и через Torrent.

![Download Parrot OS Security Edition](images/parrot_install/parrot_install_01.png)

Скачайте [Balena Etcher](https://www.balena.io/etcher/), запустите и запишите через него образ на флешку.

![Balena Etcher](images/parrot_install/parrot_install_02.png)

Загрузитесь с установленного на флешку образа. При запуске выберите `Advanced Modes...` и `RAM mode`.

![Run Parrot OS RAM mode](images/parrot_install/parrot_install_03.png)

![Run Parrot OS RAM mode](images/parrot_install/parrot_install_04.png)

После запуска, выберите на рабочем столе `Install Parrot`.

![Click Install Parrot](images/parrot_install/parrot_install_05.png)

В первом окне можно выбрать язык системы. Лучше его не менять. Нажмите `Next`.

![Install Parrot Welcome](images/parrot_install/parrot_install_06.png)

При выборе региона тоже ничего не меняйте.

![Install Parrot Location](images/parrot_install/parrot_install_07.png)

Так же оставьте стандартные настройки клавиатуры, при необходимости всё можно будет настроить позже.

![Install Parrot Keyboard](images/parrot_install/parrot_install_08.png)

Наиболее важный раздел. Внимательно проверьте все параметры. В списке дисков выберите флешку (1). Установите опцию `Erase disk` (2). Включите шифрование `Encrypt system` (3) и введите пароль (4).

![Install Parrot Partitions](images/parrot_install/parrot_install_09.png)

Введите имя пользователя и пароль от системы.

![Install Parrot Users](images/parrot_install/parrot_install_10.png)

В следующем окне нажмите `Install`.

![Install Parrot Summary](images/parrot_install/parrot_install_11.png)

Могут появится предупреждения, нажмите, `Install now`.

![Install Parrot Install](images/parrot_install/parrot_install_12.png)

После установки и перезагрузки система готова к работе.
