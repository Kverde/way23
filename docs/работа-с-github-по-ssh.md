---
title: "Работа с GitHub по SSH"
date: "2017-01-18"
categories: 
  - "Программы"
tags: 
  - "ssh"
  - "автоматизация"
  - "git"
---

# {{ $frontmatter.title }}

Для работы [Github](https://github.com) я использую [GUI приложение от Github](https://desktop.github.com/) и консольный клиент. В этой заметке речь пойдет о втором варианте, а именно о настройке SSH, чтобы фиксировать код без ввода логина и пароля.

Скачиваем и устанавливаем [Git](https://git-scm.com/download/win).

## Генерация ключа

Для генерации ключа воспользуемся [PUTTYGEN.EXE](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html). Принцип тот же что и для [подключения к серверу](http://way23.ru/%d0%bf%d0%be%d0%b4%d0%ba%d0%bb%d1%8e%d1%87%d0%b5%d0%bd%d0%b8%d0%b5-%d0%ba-%d1%81%d0%b5%d1%80%d0%b2%d0%b5%d1%80%d1%83-%d1%87%d0%b5%d1%80%d0%b5%d0%b7-ssh-%d0%b8-putty/) - приватный ключ на машине которая подключается к GitHub, публичный ключ в GitHub.

Если ключа еще нет то генерируем его, если он уже создан раньше то загружаем.

![PUTTYGEN загрузка ключа](images/git_ssh_import_key.png)

## Сохранение приватного ключа

Импортируем ключ в формат OpenSSH. Сохранить полученный файл нужно под именем .ssh\\id\_rsa в каталоге пользователя.

![PUTTYGEN экспорт ключа в OpenSSH формат](images/git_ssh_export_key.png)

Пример полного пути к id\_rsa C:\\Users\\QQQ\\.ssh\\id\_rsa

Ключ в файле с таким именем используется для подключения по SSH по умолчанию. В случае если ключей несколько для разных серверов, потребуется дополнительная настройка - используется файл .ssh\\config.

## Загрузка публичного ключа на GitHub

Копируем публичный ключ из текстового поля PUTTYGEN

![PUTTYGEN копирование ключа](images/git_ssh_import_github1.png)

Заходим в настройки GitHub пункт `SSH and GPG keys`. Нажимаем `New SSH key`.

![добаление ключа на GitHub](images/git_ssh_import_github3.png)

![добаление ключа на GitHub](images/git_ssh_import_github2.png)

Запускаем консоль и клонируем репозиторий

git clone git@github.com:Kverde/way23\_examples.git

![подключение по ssh](images/git_ssh_import_github4.png)
