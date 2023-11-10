---
title: "Владелец и группа файла в Linux"
date: "2023-11-10"
categories:
  - "Linux"
tags:
  - "chown"
  - "chgrp"
---

# {{ $frontmatter.title }}

Если создать файл, то его владельцем будет текущий пользователь, а группой владельца файла будет группа пользователя из файла [passwd](debian-adduser.md).

```
user@debian-server:~$ touch file.txt
user@debian-server:~$ stat file.txt
...
Access: (0644/-rw-r--r--)  Uid: ( 1000/    user)   Gid: ( 1000/    user)
...
```

Изменить владельца можно командой `chown`.

```
user@debian-server:~$ sudo chown user02 file.txt 
user@debian-server:~$ stat file.txt
...
Access: (0644/-rw-r--r--)  Uid: ( 1002/  user02)   Gid: ( 1000/    user)
```

Можно одновременно изменить группу и владельца, для этого их нужно разделить символом `:`.

```
user@debian-server:~$ sudo chown user:docker file.txt 
user@debian-server:~$ stat file.txt
...
Access: (0644/-rw-r--r--)  Uid: ( 1000/    user)   Gid: (  995/  docker)
```

Командой `chgrp` можно отдельно изменить группу файла.

```
user@debian-server:~$ chgrp user file.txt 
user@debian-server:~$ stat file.txt
...
Access: (0644/-rw-r--r--)  Uid: ( 1000/    user)   Gid: ( 1000/    user)
```

С помощью команды `newgrp` можно изменить основную группу пользователя. Это изменение будет работать до выполнения команды `exit` или до выхода пользователя из системы.

```
user@debian-server:~$ newgrp docker
user@debian-server:~$ touch file2.txt
user@debian-server:~$ stat file2.txt 
...
Access: (0644/-rw-r--r--)  Uid: ( 1000/    user)   Gid: (  995/  docker)
```