---
title: "Базовые операции с файлами и каталогами в Linux 2"
date: "2023-11-03"
categories:
  - "Linux"
tags:
  - "Файловая система"
---

# {{ $frontmatter.title }}

Для создания каталога используется команда `mkdir`.

```
mkdir folder
```

Можно создать несколько каталогов

```
mkdir folder1 folder2 folder3
```

Чтобы создать несколько вложенных директорий используйте параметр `-p`.

```
mkdir parent/child
```

Команда `rmdir` удаляет пустую директорию.

```
rmdir folder1
```

Создать файл можно командой `touch`.

```
touch test.txt
```

Удалить файл командой `rm`.

```
rm test.txt
```

Чтобы удалить не пустую директорию запустите команду `rm` в параметром `-r`.

```
rm -r folder
```

Команда `cp` копирует файл или каталог.

```
cp source.txt dest.txt
```

Команда `mv` перемещает файл или каталог.

```
mv source.txt dest.txt
```

Чтобы получить дерево каталогов в консоли удобно использовать команду `tree`.

```
user@debian-server:~$ tree
.
└── folder
    └── test2.txt

2 directories, 1 file
```

Эта команда может быть не установлена по умолчанию, для установки наберите команду

```
sudo apt install tree
```