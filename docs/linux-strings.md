---
title: "Программа strings в Linux"
date: "2023-12-02"
categories:
  - "Linux"
tags:
  - "strings"
---

# {{ $frontmatter.title }}

Программа `strings` достаёт все текстовые строки из файла. Если её нет в системе, нужно установить пакет `binutils`.

```bash
sudo apt install binutils
```

Для текстовых файлов, `strings` работает очевидным образом.

```bash
user@debian-server:~/test$ cat lines.txt 
bob
alica
stive
patrik
user@debian-server:~/test$ strings lines.txt 
alica
stive
patrik
```

Строка `bob` не отобразилась, так как по умолчанию `strings` выводит только строки больше или равные 4 символом, это поведение переопределяется параметром `-n`.

```bash
user@debian-server:~/test$ strings -n 2 lines.txt 
bob
alica
stive
patrik
```

Команда `strings` применяется чтобы получать набор строк из бинарных файлов.

```bash
user@debian-server:~/test$ strings /bin/passwd | head
/lib64/ld-linux-x86-64.so.2
_ITM_deregisterTMCloneTable
audit_open
__gmon_start__
_ITM_registerTMCloneTable
pam_start
pam_strerror
pam_chauthtok
pam_end
misc_conv
```