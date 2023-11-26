---
title: "Команда file в Linux"
date: "2023-11-26"
categories:
  - "Linux"
tags:
  - "file"
---

# {{ $frontmatter.title }}

Команда `file` определяет тип файла. Рассмотрим несколько примеров.


```bash
user@debian-server:~/test$ echo text > test.txt
user@debian-server:~/test$ file test.txt
test.txt: ASCII text
user@debian-server:~/test$ echo кирилица >> test.txt 
user@debian-server:~/test$ file test.txt
test.txt: Unicode text, UTF-8 text
```

Добавим в файл `file.txt` текст

```json
{
  "JOHN": {
    "name": "john",
    "active": false,
    "age": 30,
    "roles": [
      {
        "name": "admin",
        "id": 1
      },
      {
        "name": "sales",
        "id": 2
      }
    ]
  }
}
```

`file` верно определить тип файла:

```bash
user@debian-server:~/test$ file test.txt
test.txt: JSON text data
```

Ещё пара примеров:

```bash
user@debian-server:~/test$ file /dev/null 
/dev/null: character special (1/3)
user@debian-server:~/test$ file /bin/passwd 
/bin/passwd: setuid ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=01ab545446a1b88176d74a89d1ca8151266dfb41, for GNU/Linux 3.2.0, stripped
```

Для определения типа файла `file` происходит в три этапа:

1. Проверка системной информации о файле, аналогично команде `stat`. таким способом можно сразу понять тип объектов которые представлены в файловой системе, но, например, являются устройствами. Таким способом определяет тип файла `/dev/null`.

2. Затем `file` пытается определить тип файла на основе заданного набора эвристик. Например, по тому, что в определённой позиции файла находится определенные идентификатор.

3. На последнем этапе производится проверка символов, чтобы определить является ли файл текстовым файлом.

Если какой-то этап позволяет точно определить тип файла, то следующие не выполняются.

С параметром `-i` команда выдает mime-тип файла:

```bash
user@debian-server:~/test$ file -i test.txt 
test.txt: application/json; charset=us-ascii
```

Попробуем добавить в команду `file` поддержку своего типа файла. Для этого отредактируем файл `/etc/magic`

```bash
sudo nano /etc/magic 
```

И добавим в него строку

```
0 string MFF My file format
```

Формат файла `magic` следующий: каждая строка представляет один тест. Сначала идет смещение, потом тип данных которые должны находится по этому смещению, а потом сами данные. Последняя часть — выводимое сообщение.

Теперь проверим, наполним файл `file.txt` следующим текстом:

```
MFF

This is my file
```

И проверим:

```bash
user@debian-server:~/test$ file test.txt 
test.txt: My file format
```