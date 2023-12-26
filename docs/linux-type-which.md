---
title: "Как определить откуда запускается команда в bash (type, which, whereis)"
date: "2023-12-26"
categories:
  - "Linux"
tags:
  - "type"
  - "which"
  - "whereis"
---

# {{ $frontmatter.title }}

При запуске любой команды в Bash может запуститься внутренняя команда Bash или внешняя программа. Для того чтобы определить, что запустится используется команда `type`.

```bash
user@debian-server:~$ type ls
ls is aliased to `ls --color=auto'
user@debian-server:~$ type cd
cd is a shell builtin
```

Параметр `-t` заставляет команду выводить описание в виде одного слова.

```bash
user@debian-server:~$ type -t ls
alias
user@debian-server:~$ type -t cd
builtin
```

А параметр `-a` показывает все возможные варианты

```bash
user@debian-server:~$ type -a ls
ls is aliased to `ls --color=auto'
ls is /usr/bin/ls
ls is /bin/ls
```

Команда `which` выполняет похожую функцию — выводит путь к фалу который будет запущен при запуске команды. `which` — внешняя программа, поэтому она не работает со внутренними командами баш и не показывает синонимы, в отличии от команду `type`.

```bash
user@debian-server:~$ which ls
/usr/bin/ls
user@debian-server:~$ which -a ls
/usr/bin/ls
/bin/ls
```

Ещё одна команда `whereis`, кроме пути к файлу, показывает файлы `man` и файлы с исходным кодом, при их наличии.

```bash
user@debian-server:~$ whereis ls
ls: /usr/bin/ls /usr/share/man/man1/ls.1.gz
user@debian-server:~$ whereis tar
tar: /usr/bin/tar /usr/share/man/man1/tar.1.gz
```

С помощью параметров можно выводить только файлы разного типа: `-b` — исполняемые файлы, `-m` — файлы `man` и `s` — файлы исходного кода.

```bash
user@debian-server:~$ whereis -b tar
tar: /usr/bin/tar
user@debian-server:~$ whereis -m tar
tar: /usr/share/man/man1/tar.1.gz
user@debian-server:~$ whereis -s tar
tar:
```

Параметр `-l` заставляет команду `whereis` вывести все пути в которых она производит поиск.

```bash
user@debian-server:~$ whereis -l
bin: /usr/bin
bin: /usr/sbin
bin: /usr/lib/x86_64-linux-gnu
bin: /usr/lib
bin: /usr/lib32
bin: /usr/lib64
bin: /etc
bin: /usr/games
bin: /usr/local/bin
bin: /usr/local/sbin
bin: /usr/local/etc
bin: /usr/local/lib
bin: /usr/local/games
bin: /usr/include
bin: /usr/local
bin: /usr/libexec
bin: /usr/share
man: /usr/share/man/ko
man: /usr/share/man/sr
man: /usr/share/man/fr
man: /usr/share/man/man7
man: /usr/share/man/uk
man: /usr/share/man/pl
man: /usr/share/man/es
man: /usr/share/man/pt
man: /usr/share/man/id
man: /usr/share/man/man6
man: /usr/share/man/nl
man: /usr/share/man/man4
man: /usr/share/man/pt_BR
man: /usr/share/man/man5
man: /usr/share/man/zh_TW
man: /usr/share/man/sv
man: /usr/share/man/man2
man: /usr/share/man/zh_CN
man: /usr/share/man/fr.UTF-8
man: /usr/share/man/cs
man: /usr/share/man/ro
man: /usr/share/man/da
man: /usr/share/man/it
man: /usr/share/man/tr
man: /usr/share/man/man3
man: /usr/share/man/fr.ISO8859-1
man: /usr/share/man/ru
man: /usr/share/man/ja
man: /usr/share/man/fi
man: /usr/share/man/de
man: /usr/share/man/man1
man: /usr/share/man/sl
man: /usr/share/man/man8
man: /usr/share/man/hu
man: /usr/share/info
```
