---
title: "Просмотр размера файла в Linux (ls, du)"
date: "2023-12-04"
categories:
  - "Linux"
tags:
  - "du"
  - "ls"
---

# {{ $frontmatter.title }}

Рассмотрим следующую структуру файлов:

```bash
user@debian-server:~/test$ tree
.
├── dir
│   ├── file3.txt
│   └── file4.txt
├── file1.txt
└── file2.txt

2 directories, 4 files
```

Точный размер того сколько занимают файлы можно получить командой `ls` с параметром `-l`.

```bash
user@debian-server:~/test$ ls -l
total 12
drwxr-xr-x 2 user user 4096 дек  4 09:40 dir
-rw-r--r-- 1 user user    3 дек  4 09:40 file1.txt
-rw-r--r-- 1 user user    7 дек  4 09:40 file2.txt
```

По умолчанию размер выводится в байтах, чтобы размер был представлен в удобных единицах измерения можно добавить параметр `-h`.

```bash
user@debian-server:~/test$ ls -lh
total 12K
drwxr-xr-x 2 user user 4,0K дек  4 09:40 dir
-rw-r--r-- 1 user user    3 дек  4 09:40 file1.txt
-rw-r--r-- 1 user user    7 дек  4 09:40 file2.txt
```

Для файлов ничего не изменилось, их размер так и остался в байтах, а вот для директории он теперь показан в килобайтах. Однако, для директорий `ls` выводит неверные данные. Чтобы получить размер директории нужно использовать команду `du`. Только стоит учесть, что в отличии от `ls`, команда `du` показывает реальное количество блоков на диске занятых файлом. Параметр `-a` заставляет команду выводить информацию про все файлы и директории, а `-h` аналогичен параметру в команде `ls`.

```bash
user@debian-server:~/test$ du -ah
4,0K	./file1.txt
4,0K	./dir/file4.txt
4,0K	./dir/file3.txt
12K	./dir
4,0K	./file2.txt
24K	.
```