---
title: "Права на директории в Linux"
date: "2023-11-15"
categories:
  - "Linux"
tags:
  - "chmod"
---

# {{ $frontmatter.title }}

Назначение [прав доступа](linux-chmod.md) для директорий в Linux не очевидно. Сразу не понятно, чем отличается право на запись от права на выполнения и как все три вида прав работают по отдельности.

Прежде всего, права на запись в каталог (`-w-`) не отличаются от отсутствия прав на каталог (`---`).

Право на чтение для каталога (`-r-`) влияет только на одно — на возможность просмотра списка файлов в каталоге, причем без права на выполнение, эта возможность тоже ограничена: можно увидеть только названия файлов, без дополнительной информации.

Для проверки создадим каталог и файл, внутри каталога.

```bash
user@debian-server:~$ mkdir /tmp/test
user@debian-server:~$ cd /tmp/test
user@debian-server:/tmp/test$ echo hello > hello.txt
user@debian-server:/tmp/test$ cd ..
```

Теперь установим права для владельца файла только для чтения, а остальные обнулим.

```bash
user@debian-server:/tmp$ chmod 400 test
user@debian-server:/tmp$ stat test
  File: test
  Size: 4096      	Blocks: 8          IO Block: 4096   directory
Device: 8,1	Inode: 654090      Links: 2
Access: (0400/dr--------)  Uid: ( 1000/    user)   Gid: ( 1000/    user)
Access: 2023-11-15 11:03:01.202353818 -0500
Modify: 2023-11-15 11:03:09.550303047 -0500
Change: 2023-11-15 11:03:23.474218359 -0500
 Birth: 2023-11-15 11:03:01.202353818 -0500
user@debian-server:/tmp$ ls test
ls: cannot access 'test/hello.txt': Permission denied
hello.txt
user@debian-server:/tmp$ cd test
bash: cd: test: Permission denied
```

Команда 'ls' сработала, хоть и с ограничениями, а вот перейти в каталог, с помощью `cd` уже нельзя.

Теперь рассмотрим право на выполнение (`--x`). Это право отвечает за возможность заходить в каталог, читать файлы и даже менять файлы. Основное ограничение без права на запись (`r--`) в том, что не будет доступен список файлов через команду `ls` и не будет работать автодополнение названия файла через `TAB`. По сути, это означает что можно работать с уже созданными файлами, но нужно знать их имена. Проверим это.

```bash
user@debian-server:/tmp$ chmod 100 test
user@debian-server:/tmp$ stat test
  File: test
  Size: 4096      	Blocks: 8          IO Block: 4096   directory
Device: 8,1	Inode: 654090      Links: 2
Access: (0100/d--x------)  Uid: ( 1000/    user)   Gid: ( 1000/    user)
Access: 2023-11-15 11:03:38.898124529 -0500
Modify: 2023-11-15 11:03:09.550303047 -0500
Change: 2023-11-15 11:09:44.975892865 -0500
 Birth: 2023-11-15 11:03:01.202353818 -0500
user@debian-server:/tmp$ cd test
user@debian-server:/tmp/test$ ls
ls: cannot open directory '.': Permission denied
user@debian-server:/tmp/test$ echo test >> hello.txt
user@debian-server:/tmp/test$ cat hello.txt
hello
test
```

Ещё одна особенность — если у каталога нет права на выполнение (`--x`), то нельзя будет войти через `cd` и в дочернии каталоги, даже если у них будет это право.

Права на запись (`-w-`) добавляют возможность создавать, удалять и переименовывать файлы.

## Ссылки

* [Execute vs Read bit. How do directory permissions in Linux work?](https://unix.stackexchange.com/questions/21251/execute-vs-read-bit-how-do-directory-permissions-in-linux-work)
