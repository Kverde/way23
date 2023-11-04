---
title: "Временные метки файлов Linux: atime, ctime, mtime"
date: "2023-11-04"
categories:
  - "Linux"
tags:
  - "Файловая система"
---

# {{ $frontmatter.title }}

Каждый файл в Linux содержит три временные метки:

* Access timestamp (atime) — время получения последнего доступа к файлу
* Modified timestamp (mtime) — время последнего изменения содержимого файла
* Change timestamp (ctime)  — время последнего изменения метаданных файла

Для получения информации про эти метки воспользуемся командой `stat`:

```bash
user@server:~$ touch text.txt
user@server:~$ stat text.txt 
  File: text.txt
  Size: 0         	Blocks: 0          IO Block: 4096   regular empty file
Device: 2ah/42d	Inode: 2005276     Links: 1
Access: (0644/-rw-r--r--)  Uid: ( 1000/   petro)   Gid: ( 1003/   petro)
Access: 2023-11-04 20:44:12.338153174 +0500
Modify: 2023-11-04 20:44:12.338153174 +0500
Change: 2023-11-04 20:44:12.338153174 +0500
 Birth: 2023-11-04 20:44:12.338153174 +0500
```

Все временные метки содержат одинаковое значение. Команда `touch`, кроме создания файла, так же обновляет значение всех временных меток. Попробуем вызвать её ещё раз:

```bash
user@server:~$ touch text.txt
user@server:~$ stat text.txt 
  File: text.txt
  Size: 0         	Blocks: 0          IO Block: 4096   regular empty file
Device: 2ah/42d	Inode: 2005276     Links: 1
Access: (0644/-rw-r--r--)  Uid: ( 1000/   petro)   Gid: ( 1003/   petro)
Access: 2023-11-04 20:47:47.171490511 +0500
Modify: 2023-11-04 20:47:47.171490511 +0500
Change: 2023-11-04 20:47:47.171490511 +0500
 Birth: 2023-11-04 20:44:12.338153174 +0500
```

Время создания файла не изменилось, зато все остальные метки изменились. Допишем в файл данные и проверим метки времени.

```bash
user@server:~$ echo text >> text.txt
user@server:~$ stat text.txt 
  File: text.txt
  Size: 5         	Blocks: 8          IO Block: 4096   regular file
Device: 2ah/42d	Inode: 2005276     Links: 1
Access: (0644/-rw-r--r--)  Uid: ( 1000/   petro)   Gid: ( 1003/   petro)
Access: 2023-11-04 20:47:47.171490511 +0500
Modify: 2023-11-04 20:51:27.904827845 +0500
Change: 2023-11-04 20:51:27.904827845 +0500
 Birth: 2023-11-04 20:44:12.338153174 +0500
```

Изменилось время изменения содержимого и метаданных. Теперь попробуем изменить только метаданные файла.

```bash
user@server:~$ chmod +w text.txt
user@server:~$ stat text.txt 
  File: text.txt
  Size: 5         	Blocks: 8          IO Block: 4096   regular file
Device: 2ah/42d	Inode: 2005276     Links: 1
Access: (0644/-rw-r--r--)  Uid: ( 1000/   petro)   Gid: ( 1003/   petro)
Access: 2023-11-04 20:47:47.171490511 +0500
Modify: 2023-11-04 20:51:27.904827845 +0500
Change: 2023-11-04 20:56:56.424833839 +0500
 Birth: 2023-11-04 20:44:12.338153174 +0500
```

Изменилось только ctime.

Можно заметить, что операции чтения, например, `cat text.txt` не влияют на atime. Это связано с тем, что изменение этого параметра [отключено по-умолчанию из-за нагрузки на диск](https://superuser.com/questions/464290/why-is-cat-not-changing-the-access-time) — каждое чтение диска требует записи на диск.