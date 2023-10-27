---
title: "lsb_release — узнать версию дистрибутива Linux"
date: "2023-10-27"
categories:
  - "Linux"
tags:
  - "lsb_release"
---

# {{ $frontmatter.title }}

Команда `lsb_release` возвращает информацию о дистрибутиве Linux. Параметр `-a` заставляет команду возвратить всю имеющуюся информацию.

```
lsb_release -a
```

Примеры результатов:

```
No LSB modules are available.
Distributor ID:	Debian
Description:	Debian GNU/Linux 12 (bookworm)
Release:	12
Codename:	bookworm
```

```
No LSB modules are available.
Distributor ID:	Parrot
Description:	Parrot OS 5.3 (Electro Ara)
Release:	5.3
Codename:	ara
```
