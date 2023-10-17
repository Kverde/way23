---
title: "Установка сервера Debian на VirtualBox"
date: "2023-10-13"
categories:
  - "Операционные системы"
tags:
  - "Debian"
  - "VirtualBox"
---

# {{ $frontmatter.title }}

Debian не содержит отдельной версии для серверов, при установки на сервер нужно не устанавливать GUI рабочего стола. Скачайте [последнюю стабильную версию](https://www.debian.org/CD/http-ftp/#stable) Debian, лучше взять DVD образ.

[Создайте новую виртуальную машину](virtualbox-создание-и-настройка-виртуальной-м.md) в VirtualBox. В последних версия VirtualBox отключите автоматическую установку.

![](images/debian-vb/debian-01.png)

Зайдите в настройки виртуальной машины и измените сетевой адаптер на `Bridget adapter`.

После запуска виртуальной машины выберите консольный вариант установки:

![](images/debian-vb/debian-02.png)

Установите подходящий `hostname`, он пригодится для подключения к виртуальной машине по SSH.

![](images/debian-vb/debian-02-1.png)

В следующих шагах оставляйте настройки по умолчанию, выберите подходящий пароль для root, имя пользователя и пароль для пользователя.

Откажитесь от предложений установить дополнительные компоненты, подключится к сети и отправлять отчеты об установках пакетов.

![](images/debian-vb/debian-03.png)

![](images/debian-vb/debian-04.png)

![](images/debian-vb/debian-05.png)

Во время шага выбора компонентов отключите `Debian desktop environment` и включите `SSH server`.

![](images/debian-vb/debian-06.png)

Во время вопроса о том устанавливать ли GRUB выберите `yes`. 

![](images/debian-vb/debian-07.png)

Затем выберите устройство, чтобы не вводить его название вручную.

![](images/debian-vb/debian-08.png)

При установке Debian без графического окружения автоматически не устанавливаются пакеты, нужные для работы сети. Для возможности установки пакетов из онлайн репозиториев, а не с диска, измените файл `/etc/apt/sources.list`:

```
su -l # войти в режим суперпользователя
nano /etc/apt/sources.list
```

Удалите из него все строки (`ctrl+k`) и введете следующую строку:

```
deb http://deb.debian.org/debian bookworm main
```

Теперь установите `sudo` ([Советы после установки Debian](https://wiki.debian.org/DebianInstall#Post-Install_Tips)):

```
apt update
apt install sudo
adduser user sudo # добавить пользователя user в группу sudo 
exit # выйти из режима суперпользователя
```

Описание команды `adduser` из `man`:

> Add an existing user to an existing group. If called with two non-option arguments, adduser will add  an  existing user to an existing group.

Добавление пользователя в группу `sudo` нужно, чтобы у пользователя была возможность использовать команду `sudo`. Чтобы добавление в группу сработало выйдите из пользователя командой `logout` и снова введите логин и пароль.

Теперь установите пакеты для работы сети:

```
sudo apt install network-manager 
sudo apt install net-tools 
```

И затем обновите все пакеты:

```
sudo apt update
sudo apt upgrade
```

Выключите виртуальную машину и запустите виртуальную машину в фоновом режиме. Теперь вы можете подключится к серверу по ssh из консоли используя имя сервера и пользователя указанные при установке.

```
ssh user@debian-server
```
