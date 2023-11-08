---
title: "Группы пользователей Linux в Debian"
date: "2023-11-08"
categories:
  - "Linux"
tags:
  - "Группы пользователей"
  - "groups"
  - "addgroup"
  - "delgroup"
---

# {{ $frontmatter.title }}

Каждый пользователь Linux принадлежит к определённому списку групп. Группы нужны, чтобы гибко настраивать права и доступы к разным частями системы.

Список всех групп находится в файле `/etc/group`. Каждая строка содержит одну запись о группе, значения полей разделены символом `:`, список полей следующий:

1. Название группы
2. Пароль группы
3. Числовой идентификатор группы (GID)
5. Список пользователей в группе, разделитель — запятая

Пример строки из файла `/etc/group`:

```
vboxusers:x:142:user1,user2
```

Если в поле `Пароль группы` находится символ `x`, то хеши паролей хранятся в файле `/etc/gshadow`.

Команда `groups` возвращает список групп в которые входит текущий пользователь, если вызвать её без параметров. Если вызывать с параметром — именем пользователя, то команда вернет список групп в которые входит переданный пользователь.

```bash
user@server:~$ groups
user cdrom floppy sudo audio dip video plugdev netdev bluetooth vboxusers lpadmin scanner docker
```

Чтобы добавить пользователя в уже существующую группу, в Debian, используется команда `adduser` с двумя параметрами: имя пользователя и имя группы. Эту команду необходимо выполнять из под пользователя `root`.

```bash
root@server:~# adduser user sudo
Adding user `user' to group `sudo' ...
Adding user user to group sudo
Done.
```

Для добавления группы, в Debian, используется команда `addgroup`.

```bash
user@server:~$ sudo addgroup mygroup
Adding group `mygroup' (GID 1004) ...
Done.
```

Для удаления групп, в Debian, используется команда `delgroup`.

```bash
user@server:~$ sudo delgroup mygroup
Removing group `mygroup' ...
Done.
```
