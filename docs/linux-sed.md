---
title: "Потоковый текстовый редактор sed"
date: "2023-12-21"
categories:
  - "Linux"
tags:
  - "sed"
---

# {{ $frontmatter.title }}

Стандартный способ запуска редактор `sed` с указанием скрипта и входного файла. Можно указать несколько файлов в этом случае они будут соединены и операции с ними будут происходить как с одним большим файлом. Результаты команда отправляет в `stdout`.

```bash
user@debian-server:~/test$ cat file.txt 
first line
second line
third line
user@debian-server:~/test$ sed s/line/LINE/ file.txt 
first LINE
second LINE
third LINE
user@debian-server:~/test$ cat file.txt 
first line
second line
third line
```

С опцией `-i` команда `sed` изменит входной файл.

```bash
user@debian-server:~/test$ sed -i s/line/LINE/ file.txt 
user@debian-server:~/test$ cat file.txt 
first LINE
second LINE
third LINE
```

Скрипт `sed` поддерживает разные команды. Команда `s` — замена текста с помощью регулярных выражений, её полный синтаксис следующий `s/regexp/replacement/flags`. По умолчанию команда `s` заменяет только первое вхождение в строке, а с флагом `g` — все вхождения.

```bash
user@debian-server:~/test$ cat file.txt 
first LINE LINE
second LINE LINE
third LINE LINE
user@debian-server:~/test$ sed s/LINE/line/ file.txt 
first line LINE
second line LINE
third line LINE
user@debian-server:~/test$ sed s/LINE/line/g file.txt 
first line line
second line line
third line line
```

Команда `d` удаляет строки из входного потока.

```bash
user@debian-server:~/test$ sed 2d file.txt 
first LINE LINE
third LINE LINE
user@debian-server:~/test$ sed 2,3d file.txt 
first LINE LINE
```

Команда `a` добавляет текст после указанной строки.

```bash
user@debian-server:~/test$ sed '2a\  subline' file.txt 
first LINE LINE
second LINE LINE
  subline
third LINE LINE
```

Редактор `sed` поддерживает другие сложные возможности: сложные замены с регулярными выражениями, условные конструкции.

## Ссылки

* [Documentation: sed, a stream editor](https://www.gnu.org/software/sed/manual/sed.html#sed-commands-list)