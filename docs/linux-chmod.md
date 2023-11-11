---
title: "Установка прав на файлы в Linux с помощью chmod"
date: "2023-11-11"
categories:
  - "Linux"
tags:
  - "chmod"
---

# {{ $frontmatter.title }}

Посмотреть прав на файл в Linux можно командой `stat`.

```
user@debian-server:~$ mkdir /tmp/test
user@debian-server:~$ cd /tmp/test
user@debian-server:/tmp/test$ touch file.txt
user@debian-server:/tmp/test$ stat file.txt
  File: file.txt
  Size: 0         	Blocks: 0          IO Block: 4096   regular empty file
Device: 8,1	Inode: 654091      Links: 1
Access: (0644/-rw-r--r--)  Uid: ( 1000/    user)   Gid: ( 1000/    user)
Access: 2023-11-11 03:26:23.439716105 -0500
Modify: 2023-11-11 03:26:23.439716105 -0500
Change: 2023-11-11 03:26:23.439716105 -0500
 Birth: 2023-11-11 03:26:23.439716105 -0500
```

В первой строке, которая начинается с `Access:`, находится информация про права на файл:

* `(0644/-rw-r--r--)` — тип файла и права
* `Uid: ( 1000/    user)` — владелец файла
* `Gid: ( 1000/    user)` — группа владельца файла

В строке `-rw-r--r--` первый символ означает тип файла, в данном случае `-` означает простой файл. Если бы это была директория то символ был бы `d`, есть и другие типы файлов. Следующие параметры группируются на три части по три символа:

* `rw-` — права для владельца файла
* `r--` — права для группы владельца файла 
* `r--` — права для остальных пользователей

Сами права бывают трех видов:

* `r` — чтение (read)
* `w` — запись (write)
* `x` — выполнение (execute)

С помощью команды `chmod` можно изменить права. Первым параметром нужно передать группу прав:

* `u` — права владельца (user)
* `g` — права группы (group)
* `o` — права для всех остальных (other)
* `a` — указывается если нужно добавить или убрать право для всех (all)

Затем `+` для добавления права и `-` для снятия. И последним символом тип права: `r`, `w` или `x`. Например:

```
user@debian-server:/tmp/test$ chmod o+x file.txt
user@debian-server:/tmp/test$ stat file.txt 
...
Access: (0645/-rw-r--r-x)  Uid: ( 1000/    user)   Gid: ( 1000/    user)
```

```
user@debian-server:/tmp/test$ chmod a+w file.txt
user@debian-server:/tmp/test$ stat file.txt 
...
Access: (0667/-rw-rw-rwx)  Uid: ( 1000/    user)   Gid: ( 1000/    user)
```

```
user@debian-server:/tmp/test$ chmod g-w file.txt
user@debian-server:/tmp/test$ stat file.txt 
...
Access: (0647/-rw-r--rwx)  Uid: ( 1000/    user)   Gid: ( 1000/    user)
```

Есть способ задать все три вида прав одновременно. Для этого применяется число из трех цифр от 0 до 7. Первая цифра означает права владельца, вторая группы, а третья для остальных пользователей. Эти цифры в двоичном виде представляют набор флагов, для трех видов прав: `rwx`.

* `0` — `000` — `---`
* `1` — `001` — `--x`
* `2` — `010` — `-w-`
* `3` — `011` — `-wx`
* `4` — `100` — `r--`
* `5` — `101` — `r-x`
* `6` — `110` — `rw-`
* `7` — `111` — `rwx`


```
user@debian-server:/tmp/test$ chmod 764 file.txt
user@debian-server:/tmp/test$ stat file.txt 
...
Access: (0764/-rwxrw-r--)  Uid: ( 1000/    user)   Gid: ( 1000/    user)
```

Параметр `-R` команды `chmod` позволяет рекурсивно изменить права у содержимого каталога.