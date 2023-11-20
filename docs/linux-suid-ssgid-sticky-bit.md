---
title: "Особые виды прав в Linux: SUID, SGID и Sticky bit"
date: "2023-11-20"
categories:
  - "Linux"
tags:
  - "chmod"
---

# {{ $frontmatter.title }}

Кроме прав на чтение, запись и исполнение, в Linux есть три особых вида прав для файлов и каталогов: SUID, SGID и Sticky bit.

SUID используется только для файлов. При выполнении файла с признаком SUID, файл выполняется не с правами запустившего его пользователя, а с правами владельца файла. Такой вид прав установлен у программы `passwd`, чтобы она могла редактировать пароли пользователя в файле `shadow`, доступ на запись в этот файл есть только у `root`.

```bash
user@debian-server:~$ ls -l /etc/shadow
-rw-r----- 1 root shadow 1051 ноя 14 06:38 /etc/shadow
user@debian-server:~$ ls -l /bin/passwd
-rwsr-xr-x 1 root root 68248 мар 23  2023 /bin/passwd
```

В командах `ls` и `stat` метка SUID отображается в позиции права на выполнения в разделе для пользователя. Если у файла есть права на выполнение и SUID то в этом месте будет стоять маленькая `s` — `rws`, а если прав на выполнения файла нет, то большая — `rwS`. То же самое совпадает с меткой SUID, только она находится в разделе прав для группы.

Флаг SUID [не работает в bash скриптах](https://unix.stackexchange.com/questions/364/allow-setuid-on-shell-scripts).

SGID может применяться аналогично SUID, при запуске файла используются права группы не того кто запустил, а права группы файла. Но у SGID есть и другое применение: в каталоге с такими правами файлы создаются не с группой создателя файла, а с группой родительского каталога.

Проверим это, для этого создадим каталог и создадим в нем два файла: первый без SGID у каталога, а второй после выставления метки SGID.

```bash
user@debian-server:~/test$ mkdir parent
user@debian-server:~/test$ chgrp docker parent
user@debian-server:~/test$ ls -l
total 4
drwxr-xr-x 2 user docker 4096 ноя 20 09:01 parent

user@debian-server:~/test$ touch ./parent/file1.txt

user@debian-server:~/test$ chmod g+s parent
user@debian-server:~/test$ ls -l
total 4
drwxr-sr-x 2 user docker 4096 ноя 20 09:04 parent

user@debian-server:~/test$ touch ./parent/file2.txt

user@debian-server:~/test$ ls -l ./parent
total 0
-rw-r--r-- 1 user user   0 ноя 20 09:03 file1.txt
-rw-r--r-- 1 user docker 0 ноя 20 09:04 file2.txt
```

Параметр Sticky bit отображается в разделе прав для остальных, так же как с SUID и SGID, только вместо символа `s` используется символ `t`. Если этот параметр установлен у каталога, то файлы из этого каталога может удалить только их владелец. Проверим это, создадим каталог, в нем несколько файлов с разными владельцами и попробуем их удалить без признака Sticky bit и с этим признаком.

```bash
user@debian-server:~/test$ ls -l
total 4
drwxr-xrwx 2 root root 4096 ноя 20 09:22 parent
user@debian-server:~/test$ ls -l ./parent
total 0
-rw-r--r-- 1 user01 user01 0 ноя 20 09:18 file1.txt
-rw-r--r-- 1 user   user   0 ноя 20 09:18 file2.txt
-rw-r--r-- 1 user01 user01 0 ноя 20 09:18 file3.txt
-rw-r--r-- 1 user   user   0 ноя 20 09:18 file4.txt
```

Без Sticky bit файлы удаляются.

```bash
user@debian-server:~/test$ rm -f ./parent/file1.txt 
user@debian-server:~/test$ rm -f ./parent/file2.txt 
user@debian-server:~/test$ ls -l ./parent
total 0
-rw-r--r-- 1 user01 user01 0 ноя 20 09:18 file3.txt
-rw-r--r-- 1 user   user   0 ноя 20 09:18 file4.txt
```

Теперь добавим Sticky bit и попробуем удалить файлы.

```bash
user@debian-server:~/test$ sudo chmod o+t ./parent
user@debian-server:~/test$ ls -l
total 4
drwxr-xrwt 2 root root 4096 ноя 20 09:23 parent

user@debian-server:~/test$ rm -f ./parent/file3.txt 
rm: cannot remove './parent/file3.txt': Operation not permitted
user@debian-server:~/test$ rm -f ./parent/file4.txt 
user@debian-server:~/test$ ls -l ./parent
total 0
-rw-r--r-- 1 user01 user01 0 ноя 20 09:18 file3.txt
```

## Ссылки

* [Права в Linux (chown, chmod, SUID, GUID, sticky bit, ACL, umask)](https://habr.com/ru/articles/469667/)
* [Основы GNU/Linux: 20. Права на файлы](https://basis.gnulinux.pro/ru/latest/basis/20/20._Права_на_файлы.html)
