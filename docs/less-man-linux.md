---
title: "less, man и help в Linux"
date: "2023-11-09"
categories:
  - "Linux"
tags:
  - "less"
  - "more"
  - "man"
---

# {{ $frontmatter.title }}

[[toc]]

## less

less — программа для чтения текстовых файлов. less позволяет просматривать большие файлы, так как не читает файл полностью перед запуском. Для запуска наберите команду

```
less file.txt
```

Основные горячие клавиши:

* `q` — выйти из редактора
* `h` — войти в справочную систему less, выйти так же можно через `q`
* `j` — перейти на строку вперед
* `k` — перейти на строку назад
* `f` — перейти на экран вперед
* `b` — перейти на экран назад

Для поиска введите `\pattern`, где вместо `pattern` может быть любой текст и нажмите `Enter`. `n` — переход к следующему найденному фрагменту, `N` — переход к предыдущему.

Существует схожая с `less` программа `more`. `more` содержит меньше функций, поэтому при наличии `less` можно всегда использовать `less`.

## man

man — справочная система Linux. По сути, при запуске man открывается определенный файл справочной системы через less. Для просмотра справки о программе или команде нужно указать её название в параметре.

```
man ls
```

Справочная система делится на несколько разделов и иногда одно и то же название находится в нескольких разделах. Например, есть команда `passwd` и файл `/etc/passwd`. Чтобы получить информацию про команду достаточно написать

```
man passwd
```

А чтобы посмотреть описание файла 

```
man 5 passwd
```

Номер 5 — раздел справочной системы. Полный список разделов:

```
  1   Executable programs or shell commands
  2   System calls (functions provided by the kernel)
  3   Library calls (functions within program libraries)
  4   Special files (usually found in /dev)
  5   File formats and conventions, e.g. /etc/passwd
  6   Games
  7   Miscellaneous (including  macro  packages  and  conventions),  e.g.
      man(7), groff(7), man-pages(7)
  8   System administration commands (usually only for root)
  9   Kernel routines [Non standard]
```

Этот список находится внутри описания к самому man, т.е. получен командой

```
man man
```

## help

Некоторые команды, такие как `cd` не являются отдельными программа, а командами внутри bash. Для них нет страницы `man` и информацию по ним можно получить командой `help`.

```bash
help cd
```