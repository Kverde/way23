---
title: "Переключение между пользователями через su и смена пароля пользователя"
date: "2023-11-14"
categories:
  - "Linux"
tags:
  - "su"
  - "passwd"
---

# {{ $frontmatter.title }}

Команда `su` позволяет переключаться между пользователями. При переходе в другого пользователя нужно ввести пароль целевого пользователя.

```bash
user@debian-server:~$ pwd
/home/user
user@debian-server:/home$ su --login user01
Password:
user01@debian-server:~$ pwd
/home/user01
```

Параметр `--login` влияет на очистку системных переменных и некоторые другие вещи, например, текущий каталог. Переключить пользователя можно и без этого параметра.

При вызове без параметров, команда `su` переходит в суперпользователя.

```
user@debian-server:~$ su
Password: 
root@debian-server:/home/user# 
```

Команда `passwd` меняет пароль пользователя. При вызове без параметров, команда будет изменять пароль текущего пользователя. Для смены пароля нужно ввести пароль 

```
user01@debian-server:~$ passwd
Changing password for user01.
Current password: 
New password: 
Retype new password: 
passwd: password updated successfully
```

С правами суперпользователя можно изменить пароль любого пользователя, причем знать пароль пользователя не требуется.

```
user@debian-server:~$ sudo passwd user01
[sudo] password for user: 
New password: 
Retype new password: 
passwd: password updated successfully
```
