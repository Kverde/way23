---
title: "Поиск файлов в Linux (find)"
date: "2023-11-30"
categories:
  - "Linux"
tags:
  - "find"
---

# {{ $frontmatter.title }}

Для поиска файлов применяется команда `find`. Рассмотрим работу команды на примере следующего дерева каталогов:

```bash
user@debian-server:~/test$ tree
.
├── data
│   ├── data1.dat
│   ├── data2.dat
│   └── readme.txt
├── data.dat
├── file1.txt
└── file2.txt

2 directories, 6 files
```

Если запустить `find` без параметров то команда рекурсивно выведет все названия файлов и каталогов.

```bash
user@debian-server:~/test$ find
.
./file1.txt
./data.dat
./file2.txt
./data
./data/data2.dat
./data/readme.txt
./data/data1.dat
```

С помощью параметров можно указывать фильтры для поиска. Фильтр по имени — параметр `-name`.

```bash
user@debian-server:~/test$ find -name readme.txt
./data/readme.txt
```

Можно искать по маске

```bash
user@debian-server:~/test$ find -name '*.dat'
./data.dat
./data/data2.dat
./data/data1.dat
```

Можно искать с указанием размера, символ `c` означает, единицу измерения — байты.

```bash
user@debian-server:~/test$ find -size 6c
./data/data2.dat
user@debian-server:~/test$ ls -l ./data/data2.dat
-rw-r--r-- 1 user user 6 ноя 30 13:38 ./data/data2.dat
```

Так же можно указать тип: файл, директория, ссылка:

```bash
user@debian-server:~/test$ find -type f
./file1.txt
./data.dat
./file2.txt
./data/data2.dat
./data/readme.txt
./data/data1.dat
```

С помощью параметра `-exec` можно выполнить определенное действие над всеми найденными файлами. После `-exec` должна идти команда, в том месте где должно стоять имя файла символы `{}` а в конце команды `\;`.

```bash
user@debian-server:~/test$ find -size 6c -exec file {} \;
./data/data2.dat: ASCII text
```

