---
title: "Ссылки на файлы в Linux"
date: "2023-11-26"
categories:
  - "Linux"
tags:
  - "ln"
  - "ls"
---

# {{ $frontmatter.title }}

В Linux можно создать два вида ссылок на файлы: жесткая ссылка и символическая ссылка. 

Жесткая ссылка, это по сути, второе название файла. Дело в том, что название файла хранится не в самом фале, а в каталоге, который содержит файл. Сам файл уникально идентифицируется по индексному дескриптору. Можно сделать несколько ссылок на один файл, с одним и тем же индексным дескриптором — это и будет жесткой ссылкой. Файл не будет удален пока будет существовать хотя бы одна ссылка.

Посмотреть индексный дескриптор можно командами `stat` и `ls -li`. Команда `ls` так же показывает количество жестких ссылок на файл после прав доступа. Создаются жесткие ссылки командой `ln`.

```bash
user@debian-server:~/test$ touch file.txt
user@debian-server:~/test$ stat file.txt 
  File: file.txt
  Size: 0         	Blocks: 0          IO Block: 4096   regular empty file
Device: 8,1	Inode: 1086409     Links: 1
Access: (0644/-rw-r--r--)  Uid: ( 1000/    user)   Gid: ( 1000/    user)
Access: 2023-11-25 14:36:44.515934214 -0500
Modify: 2023-11-25 14:36:44.515934214 -0500
Change: 2023-11-25 14:36:44.515934214 -0500
 Birth: 2023-11-25 14:36:44.515934214 -0500
user@debian-server:~/test$ ls -li
total 0
1086409 -rw-r--r-- 1 user user 0 ноя 25 14:36 file.txt

user@debian-server:~/test$ ln file.txt link.txt
user@debian-server:~/test$ stat link.txt 
  File: link.txt
  Size: 0         	Blocks: 0          IO Block: 4096   regular empty file
Device: 8,1	Inode: 1086409     Links: 2
Access: (0644/-rw-r--r--)  Uid: ( 1000/    user)   Gid: ( 1000/    user)
Access: 2023-11-25 14:36:44.515934214 -0500
Modify: 2023-11-25 14:36:44.515934214 -0500
Change: 2023-11-25 14:38:45.836093696 -0500
 Birth: 2023-11-25 14:36:44.515934214 -0500
user@debian-server:~/test$ ls -li
total 0
1086409 -rw-r--r-- 2 user user 0 ноя 25 14:36 file.txt
1086409 -rw-r--r-- 2 user user 0 ноя 25 14:36 link.txt
```

Жесткие ссылки можно создать только внутри одной файловой системы: например, не получится создать жесткую ссылку с одного диска на другой.

В отличии от жестких ссылок, который по сути, являются ссылками на один и тот же файл, символические ссылки это отдельный файл, который содержит путь к другому файлу. Создаются символические ссылки командой `ln` с параметром `-s`.

```bash
user@debian-server:~/test$ ln -s file.txt slink.txt
user@debian-server:~/test$ ls -li
total 0
1086409 -rw-r--r-- 2 user user 0 ноя 25 14:36 file.txt
1086409 -rw-r--r-- 2 user user 0 ноя 25 14:36 link.txt
1086405 lrwxrwxrwx 1 user user 8 ноя 25 14:47 slink.txt -> file.txt
user@debian-server:~/test$ stat slink.txt
  File: slink.txt -> file.txt
  Size: 8         	Blocks: 0          IO Block: 4096   symbolic link
Device: 8,1	Inode: 1086405     Links: 1
Access: (0777/lrwxrwxrwx)  Uid: ( 1000/    user)   Gid: ( 1000/    user)
Access: 2023-11-25 14:47:42.345498037 -0500
Modify: 2023-11-25 14:47:36.533511149 -0500
Change: 2023-11-25 14:47:36.533511149 -0500
 Birth: 2023-11-25 14:47:36.533511149 -0500
```

Символическая ссылка — это строка с точным именем файла, который был передан в команду `ln`, поэтому можно использовать как относительные так и абсолютные пути.

```bash
user@debian-server:~/test$ ln -s /home/user/test/file.txt slink2.txt
user@debian-server:~/test$ ls -li
total 0
1086409 -rw-r--r-- 2 user user  0 ноя 25 14:36 file.txt
1086409 -rw-r--r-- 2 user user  0 ноя 25 14:36 link.txt
1086411 lrwxrwxrwx 1 user user 24 ноя 25 14:50 slink2.txt -> /home/user/test/file.txt
1086405 lrwxrwxrwx 1 user user  8 ноя 25 14:47 slink.txt -> file.txt
```

В данном примере все ссылки ссылаются на один файл:

```bash
user@debian-server:~/test$ echo hello >> file.txt
user@debian-server:~/test$ cat link.txt 
hello
user@debian-server:~/test$ cat slink.txt 
hello
user@debian-server:~/test$ cat slink2.txt 
hello
```

Права у всех жестких ссылок на один файл совпадают, так как права относятся к файлу.

```bash
user@debian-server:~/test$ chmod o+x link.txt 
user@debian-server:~/test$ ls -li
total 8
1086409 -rw-r--r-x 2 user user  6 ноя 25 14:52 file.txt
1086409 -rw-r--r-x 2 user user  6 ноя 25 14:52 link.txt
1086411 lrwxrwxrwx 1 user user 24 ноя 25 14:50 slink2.txt -> /home/user/test/file.txt
1086405 lrwxrwxrwx 1 user user  8 ноя 25 14:47 slink.txt -> file.txt
```

Права у символических ссылок не имеют значения, так как для доступа к файлу применяются права файла, который находится по указанному пути.

В команде `ls` первый символ равен `-` у всех жестких ссылок на файл, а у символических ссылок этот символ равен `l`.