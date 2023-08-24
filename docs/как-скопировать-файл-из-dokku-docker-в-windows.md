---
title: "Как скопировать файл из dokku/docker в windows?"
date: "2020-05-31"
categories: 
  - "Программы"
tags: 
  - "putty"
  - "dokku"
  - "docker"
---

# {{ $frontmatter.title }}

Разделим задачу на два этапа:

1. Скопировать файл на основную систему из docker.
2. Скопировать файл из Linux на Windows через ssh.

## Копирование файла из docker

Находим название нужного контейнера [командой](https://docs.docker.com/engine/reference/commandline/ps/)

```bash
docker ps
```

Название контейнеров находится в колонке `NAMES`:

![команда docker ps](images/dokku_copy_01.png)

Команда выводит только запущенные контейнеры `dockku`.

Затем копируем файл на основную систему [командой](https://docs.docker.com/engine/reference/commandline/cp/)

```bash
docker cp контейне:имя_файла_в_контейнере путь_куда_скопировать
```

Например:

```bash
sudo docker cp zarbot.web.1:/app/work_folder/out.mp3 ~/out.mp3
```

## Копирование файла через ssh

Для копирования файл воспользуемся `pscp.exe` из набора [PuTTY](https://way23.ru/подключение-к-серверу-через-ssh-и-putty/):

```bash
pscp.exe логин@адрес_сервера:имя_файла путь_куда_скопировать
```

Например:

```cmd
pscp.exe kverde@192.168.1.35:/home/kverde/out.mp3 f:\
```
