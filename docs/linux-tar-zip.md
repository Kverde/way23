---
title: "Создание и сжатие архивов в Linux: tar и zip"
date: "2023-11-16"
categories:
  - "Linux"
tags:
  - "tar"
  - "zip"
---

# {{ $frontmatter.title }}

Tar — программа для соединения нескольких файлов в один архив. Первым параметром tar принимает команду, а затем идут остальные параметры.

Для создания архива используется команда `--create` или `-c`:

```bash
user01@debian-server:~$ tar -c -f backup.tar file1.txt file2.txt 
user01@debian-server:~$ ls
backup.tar  file1.txt  file2.txt
```

За параметром `-f` следует название файла-архива, который сделает tar. Затем идет список файлов который нужно включить в архив. В архив можно включать как отдельные файлы, так и каталоги с файлами.

Для просмотра списка файлов в архиве используется команда `--list` или `-t`, так же с опцией `-f` и именем архива.

```bash
user01@debian-server:~$ tar -t -f backup.tar 
file1.txt
file2.txt
```

В архиве сохраняются права на файлы, владелец файла и группа файла, всё это можно посмотреть опцией `--verbose` или `-v`:

```bash
user01@debian-server:~$ tar -tv -f backup.tar 
-rw-r--r-- user01/user01     5 2023-11-16 07:46 file1.txt
-rw-r--r-- user01/user01    10 2023-11-16 07:46 file2.txt
```

Для распаковки архива используется команда `--extract` или `-x`, архив распаковывается в текущую директорию.

```bash
user01@debian-server:~$ rm file1.txt file2.txt 
user01@debian-server:~$ ls
backup.tar
user01@debian-server:~$ tar -x -f backup.tar 
user01@debian-server:~$ ls
backup.tar  file1.txt  file2.txt
```

Tar содержит опции для сжатия файлов в архиве, или можно воспользоваться отдельной программой.

Программа gzip позволяет уменьшить размер файлов, сжимая их. По умолчанию gzip берет данные из `stdin` и передаёт их в сжатом виде в `stdout`. Для распаковки файла используется опция `-d`.

```bash
user01@debian-server:~$ cat file1.txt 
text
user01@debian-server:~$ cat file1.txt | gzip > ar.gz
user01@debian-server:~$ cat ar.gz | gzip -d
text
```

Через перенаправление потоков ввода и вывода можно объединить tar и gzip для сжатия архива:

```bash
user01@debian-server:~$ cat file1.txt 
text
user01@debian-server:~$ tar -c file1.txt file2.txt | gzip > files.tar.gz
user01@debian-server:~$ rm file1.txt file2.txt 
user01@debian-server:~$ ls
files.tar.gz
user01@debian-server:~$ cat files.tar.gz | gzip -d | tar -x
user01@debian-server:~$ ls
file1.txt  file2.txt  files.tar.gz
user01@debian-server:~$ cat file1.txt 
text
```

## Ссылки

* [GNU tar: an archiver tool](https://www.gnu.org/software/tar/manual/tar.html)
* [GNU Gzip: General file (de)compression](https://www.gnu.org/software/gzip/manual/gzip.html)