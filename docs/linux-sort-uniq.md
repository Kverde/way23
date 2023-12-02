---
title: "Команды sort и uniq в Linux"
date: "2023-12-02"
categories:
  - "Linux"
tags:
  - "sort"
  - "uniq"
---

# {{ $frontmatter.title }}

[[toc]]

## sort

Команда `sort` сортирует входящую последовательность строк.

```bash
user@debian-server:~/test$ cat lines.txt 
bob
alica
stive
patrik
user@debian-server:~/test$ cat lines.txt | sort
alica
bob
patrik
stive
```

Параметр `-r` сортирует в обратном порядке

```bash
user@debian-server:~/test$ cat lines.txt | sort -r
stive
patrik
bob
alica
```

Параметр `-n` заставляет `sort` правильно сортировать цифры.

```bash
user@debian-server:~/test$ cat numbers.txt 
20
4
1
100
15
33
user@debian-server:~/test$ cat numbers.txt | sort
1
100
15
20
33
4
user@debian-server:~/test$ cat numbers.txt | sort -n
1
4
15
20
33
100
```

## uniq

Команда `uniq` возвращает только уникальные строки из входящего потока, но она распознает одинаковые строки только если ни идут друг за другом. Поэтому перед уникализацей строки нужно отсортировать.

```bash
user@debian-server:~/test$ cat names.txt 
bob
alica
bob
stive
patrik
alica
alica
user@debian-server:~/test$ cat names.txt | uniq
bob
alica
bob
stive
patrik
alica
user@debian-server:~/test$ cat names.txt | sort | uniq
alica
bob
patrik
stive
```

Можно вывести только строки которые встречались один раз.

```bash
user@debian-server:~/test$ cat names.txt | sort | uniq -u
patrik
stive
```

Или добавить в вывод количество повторений

```bash
user@debian-server:~/test$ cat names.txt | sort | uniq -c
      3 alica
      2 bob
      1 patrik
      1 stive
```

Вывести только уникальные строки можно и командой `sort` с параметром `-u`.

```bash
user@debian-server:~/test$ cat names.txt | sort -u
alica
bob
patrik
stive
```