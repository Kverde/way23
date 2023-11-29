---
title: "Утилита cut в Linux"
date: "2023-11-29"
categories:
  - "Linux"
tags:
  - "cut"
---

# {{ $frontmatter.title }}

Утилита `cut` выводит определенную часть каждой строки файла. Например, если файл представляет собой таблицу с разделителем `TAB`, то можно вывести определенные колонки из этого файла.

Для примера создадим файл с таблицей (разделители `TAB`)

```file.txt
id	name	salary
1	Bob	60
2	Alica 20
3	Piter	50
```

Для вывода колонки используется параметр `-f` и номер колонки.

```bash
user@debian-server:~/test$ cut -f 2 file.txt 
name
Bob
Alica
Piter
user@debian-server:~/test$ cut -f 3 file.txt 
salary
60
20
50
```

Через парамтер `-d` можно задать другой разделитель. `cut` может вывести определенные символы (`-c`) или байты (`-b`) с каждой строки.

```bash
user@debian-server:~/test$ cut -c 3-6 file.txt 
	nam
Bob	
Alic
Pite
user@debian-server:~/test$ cut -b 3-6 file.txt 
	nam
Bob	
Alic
Pite
```