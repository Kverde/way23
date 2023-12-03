---
title: "Команда diff в Linux"
date: "2023-12-03"
categories:
  - "Linux"
tags:
  - "diff"
---

# {{ $frontmatter.title }}

Программа `diff` показывает различия между двумя файлами. Различия можно понимать как описания тог, что нужно сделать, чтобы изменить первый так, чтобы он стал идентичен второму. Возьмем три файла, два из них одинаковые а третий отличается и сравним их командой `diff`.

```bash
user@debian-server:~/test$ cat names1.txt 
bob
alica
piter
david
user@debian-server:~/test$ cat names2.txt 
bob
alica
piter
david
user@debian-server:~/test$ cat names3.txt 
bob
alika
piter
ethan
david
user@debian-server:~/test$ diff names1.txt names2.txt 
user@debian-server:~/test$ diff names1.txt names3.txt 
2c2
< alica
---
> alika
3a4
> ethan
```

Команда `diff` поддерживает несколько форматов вывода, например, можно вывести строки файлов в виде двух колонок, различия будут помечены специальными символами.

```bash
user@debian-server:~/test$ diff -y names1.txt names3.txt 
bob				  				bob
alica							  |	alika
piter								piter
							      >	ethan
david								david
```

Примеры вывода в других форматах:

```bash
user@debian-server:~/test$ diff -u names1.txt names3.txt 
--- names1.txt	2023-12-03 06:01:32.572236158 -0500
+++ names3.txt	2023-12-03 06:04:25.722884812 -0500
@@ -1,4 +1,5 @@
 bob
-alica
+alika
 piter
+ethan
 david
user@debian-server:~/test$ diff -ed names1.txt names3.txt 
3a
ethan
.
2c
alika
.
user@debian-server:~/test$ man diff
user@debian-server:~/test$ diff -n names1.txt names3.txt 
d2 1
a2 1
alika
a3 1
ethan
user@debian-server:~/test$ diff -c names1.txt names3.txt 
*** names1.txt	2023-12-03 06:01:32.572236158 -0500
--- names3.txt	2023-12-03 06:04:25.722884812 -0500
***************
*** 1,4 ****
  bob
! alica
  piter
  david
--- 1,5 ----
  bob
! alika
  piter
+ ethan
  david
```