---
title: "Как добавить SSH ключ на сервер"
date: "2023-10-14"
categories:
  - "Информационная безопасность"
tags:
  - "SSH"
---

# {{ $frontmatter.title }}

Чтобы при каждом подключении к серверу не вводить логин и пароль удобно использовать SSH. Для того чтобы добавить SSH ключ выполните следующие команды.

Сначала сгенерируйте ключ

```
ssh-keygen -f ./.ssh/debian-server
```

В параметре `-f` указано название файла ключа, ключи хранятся в каталоге `.ssh` в домашнем каталоге пользователя.

Теперь нужно передать открытый ключ на сервер и прописать его там в настройках пользователя. Для этого выполните команду

```
ssh-copy-id -i ./.ssh/debian-server user@debian-server
```

В параметре `-i` передано название файла ключа. `user@debian-server` — адрес сервера в формате `пользователь@адрес_сервера`. После запуска команды придется один раз ввести пароль пользователя.

После этого появится возможность подключаться к серверу без пароля:

```
ssh user@debian-server
```

Чтобы [убрать сообщение](https://www.debian.org/releases/bookworm/amd64/release-notes/ch-information.html#non-free-split) при команде `apt update` создайте файл

```
sudo nano /etc/apt/apt.conf.d/no-bookworm-firmware.conf
```

И введите в него следующий текст:

```
# Description:
# https://www.debian.org/releases/bookworm/amd64/release-notes/ch-information.html#non-free-split

APT::Get::Update::SourceListWarnings::NonFreeFirmware "false";
```

Чтобы выйти из подключения введите команду

```
exit
```
