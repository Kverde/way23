---
title: "Команда wc в Linix"
date: "2023-11-27"
categories:
  - "Linux"
tags:
  - "wc"
---

# {{ $frontmatter.title }}

Утилита `wc` подсчитывает в возвращает количество новых строк в базе, количество слов и количество байт в файле. `wc` считает словом любую последовательность непробельных символов. 

Создадим файл

```text
First line

Third line !
```

Запустим команду `wc`:

```bash
user@debian-server:~/test$ wc test.txt 
 3  5 25 test.txt
```

В файле `test.txt` 3 строки, 5 слов, 25 байт. Параметры можно выводить отдельно:

* `-l, --lines` — количество строк
* `-w, --words` — количество слов
* `-c, --bytes` — количество байт
* `-m, --chars` — количество символов

```bash
user@debian-server:~/test$ wc -l test.txt 
3 test.txt
user@debian-server:~/test$ wc -w test.txt 
5 test.txt
user@debian-server:~/test$ wc -c test.txt 
25 test.txt
user@debian-server:~/test$ wc -m test.txt 
25 test.txt
```