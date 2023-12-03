---
title: "Команда tr в Linux"
date: "2023-12-03"
categories:
  - "Linux"
tags:
  - "tr"
---

# {{ $frontmatter.title }}

Команда `tr` (translate) позволяет удалить или подменить символы во входящем потоке. Для удаления символов используется параметр `-d` и список символов для удаления.

```bash
user@debian-server:~/test$ echo abcdadbc | tr -d ac
bddb
```

Вместо перечисления символов можно указать диапазон.

```bash
user@debian-server:~/test$ echo ABcdabCD | tr -d a-z
ABCD
```

Если убрать параметр `-d` и добавить второй список символов, то вместо удаления команда заменит символы из первого списка на символы из второго. Таким способом можно, например, привести все символы к нижнему регистру.

```bash
user@debian-server:~/test$ echo ABcdabCD | tr A-Z a-z
abcdabcd
```

Таким способом можно смещать буквы на определенное расстояние (шифр Цезаря).

```bash
user@debian-server:~/test$ echo abcd | tr a-z b-za
bcde
```