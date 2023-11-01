---
title: "Базовые операции с файлами и каталогами в Linux"
date: "2023-11-01"
categories:
  - "Linux"
tags:
  - "Файловая система"
---

# {{ $frontmatter.title }}

В Linux используется отличная от Windows структура каталогов.

* Для разделителя между каталогами используется косая черта `/`
* Все каталоги начинаются из коневого каталога `/`

Примеры каталогов:

* `/`
* `/etc`
* `/home`
* `/home/user`

Обычно, в консоли выводится текущий пользователь и текущий каталог, например:

```
bob@server:/home$
```

Показывает что: текущий пользователь `bob` на машине `server` находится в каталоге `/home`. Символ `$` означает окончания строки терминала после которой можно вводить команду, а так же, что сейчас идет работа под обычным пользователем. Если в систему войти под пользователем `root`, то вместо `$` будет `#`:

```
bob@server:/home#
```

Текущий каталог так же можно вывести командой `pwd` (print working directory).

```
bob@server:/home$ pwd
/home
```

Команда `cd` (change directory) меняет текущий каталог. Параметр команды означает в какой каталог перейти.

```
bob@server:/home$ cd /bin
bob@server:/bin$ 
```

У каждого пользователя есть свой домашний каталок, если запустить команду `cd` без параметров то текущим каталогом станет домашний каталог пользователя.

```
bob@server:/home$ cd
bob@server:~$ 
```

Специальный символ `~` указывает на домашний каталог пользователя. Его можно использовать для быстрого перехода к нужному каталогу.

```
bob@server:/etc$ cd ~/img
bob@server:~/img$ 
```

Чтобы посмотреть список файлов и каталогов находящихся в текущей директории используется команда `ls`.

```
bob@server:~$ ls
img
```

В Linux имена скрытых файлов и каталогов начинаются с точки и команда `ls` не показывает их по умолчанию. Чтобы вывести их добавьте к команде параметр `-a`.

```
bob@server:~$ ls -a
. .. img
```

Два псевдокаталога `.` и `..` присутствуют в каждом каталоге. Они означают ссылку на текущий каталог и ссылку на родительский каталог соответственно.

```
bob@server:~/img$ cd ..
bob@server:~/$
```

```
bob@server:~/$ cd ./img
bob@server:~/img$
```

Параметр `-R` в команде `ls` заставляет команду рекурсивно обходить все дочерние каталоги и выводить всё их содержимое. А параметр `-l` добавляет в вывод полную информацию про файлы и каталоги: размер и права доступа.

Пути в Linux делятся на два вида: абсолютные и относительные. Абсолютные пути начинаются с косой черты `/`, а относительные с названия каталога каталога.

```
bob@server:~/$ cd /img
bob@server:/img$

bob@server:~/$ cd img
bob@server:~/img$
```

Особый параметр `-` в команде `cd` означает переход в предыдущий каталог.

```
bob@server:/bin$ cd
bob@server:~$ cd -
bob@server:/bin$
```
 