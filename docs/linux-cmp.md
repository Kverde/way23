---
title: "Сравнение файлов в Linux (cmp)"
date: "2023-12-05"
categories:
  - "Linux"
tags:
  - "cmp"
---

# {{ $frontmatter.title }}

Команда `cmp` сравнивает два файла и выдаёт есть ли между ними различия. Для примеров используем несколько файлов:

```bash
user@debian-server:~/test$ cat file1.txt 
abcdef
user@debian-server:~/test$ cat file2.txt 
abcdef
user@debian-server:~/test$ cat file3.txt 
abcdefgh
user@debian-server:~/test$ cat file4.txt 
abzdwf
```

Если два файла полностью совпадают, то команда ничего не возвращает.

```bash
user@debian-server:~/test$ cmp file1.txt file2.txt 
user@debian-server:~/test$ 
```

В случае если один файл больше другого и начальная часть большего файла совпадает с меньшим файлом `cmp` выдаст сообщение о том, что меньший файл закончился (EOF — End Of File).

```bash
user@debian-server:~/test$ cmp file1.txt file3.txt 
cmp: EOF on file1.txt after byte 6, in line 1
```

Если в файлах есть различие, то `cmp` остановится на первом различающемся байте и выдаст сообщение с его номером.

```bash
user@debian-server:~/test$ cmp file1.txt file4.txt 
file1.txt file4.txt differ: byte 3, line 1
```

С параметром `-b` команда `cmp` выведет значения различающегося байта.

```bash
user@debian-server:~/test$ cmp -b file1.txt file4.txt 
file1.txt file4.txt differ: byte 3, line 1 is 143 c 172 z
```

А с параметром `-l` весь список различающихся байт.

```bash
user@debian-server:~/test$ cmp -l file1.txt file4.txt 
3 143 172
5 145 167
```

Параметры можно скомбинировать

```bash
user@debian-server:~/test$ cmp -lb file1.txt file4.txt 
3 143 c    172 z
5 145 e    167 w
```