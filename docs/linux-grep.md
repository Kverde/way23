---
title: "Команда grep в Linux"
date: "2023-12-06"
categories:
  - "Linux"
tags:
  - "grep"
---

# {{ $frontmatter.title }}

Команда `grep` возвращает строки из файла попадающие под определенное условие. Для примера возьмем файл со [случайным списком мест](https://github.com/dominictarr/random-name/blob/master/places.txt) и применим к нему `grep`. В простейшем случае нужно в `grep` нужно передать шаблон для поиска и имя файла, программа вернет все строки файла в которых шаблон является подстрокой.


```bash
user@debian-server:~/test$ grep ozo file.txt 
Bozoo
Carrizozo
```

Вместо имени файла данные можно передать через `stdin`.

```bash
user@debian-server:~/test$ cat file.txt | grep ozo
Bozoo
Carrizozo
```

По умолчанию поиск регистрозависимый, для регистронезависимого поиска применяется параметр `-i`.

```bash
user@debian-server:~/test$ grep -i ozo file.txt 
Bozoo
Carrizozo
Ozona
```

С помощью параметра `-e` можно передать несколько шаблонов.

```bash
user@debian-server:~/test$ grep -e ozo -e roz file.txt 
Bozoo
Carrizozo
Corozal
Crozet
Crozier
```

По умолчанию `grep` выдает строку, при любом совпадении с шаблоном, с параметром `-w` строка будет выведена только если шаблон присутствует в ней в виде отдельного файла.

```bash
user@debian-server:~/test$ grep -i Aguila file.txt 
Aguila
Aguilar
user@debian-server:~/test$ grep -iw Aguila file.txt 
Aguila
```

Параметр `-x` заставит `grep` выдавать строку если она полностью совпадает с шаблонов. Так как в файле примере каждая строка состоит из одного слова, то результат совпадает с `-w`.

```bash
user@debian-server:~/test$ grep -ix Aguila file.txt 
Aguila
```

С параметром `-c` команда выведет только количество найденных строк.

```bash
user@debian-server:~/test$ grep -c ozo file.txt 
2
```

Параметр `-v` заставляет искать только строки в которых нет совпадения с шаблоном. Проверим это, сумма строк без `-v` и с `-v` должна совпасть с общим количеством строк в файле.

```bash
user@debian-server:~/test$ grep -cv ozo file.txt 
10194
user@debian-server:~/test$ wc -l file.txt 
10196 file.txt
```

У команды `grep` много других параметров, например, она может выводить номера строк и имена файлов.

```bash
user@debian-server:~/test$ grep -n ozo file.txt 
1035:Bozoo
1494:Carrizozo
user@debian-server:~/test$ grep -H ozo file.txt 
file.txt:Bozoo
file.txt:Carrizozo
```

Параметр `-E` позволяет применять в поиске регулярные выражения.

```bash
user@debian-server:~/test$ grep -E '^A..(nd|st)' file.txt 
Acosta
Amanda
Amistad
Arendtsville
Aristes
Aviston
Avondale
Awendaw
```

## Ссылки

* [Grep documentation](https://www.gnu.org/software/grep/manual/grep.html)