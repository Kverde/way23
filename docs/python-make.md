---
title: "Использование make для проекта на Python и Poetry"
date: "2023-09-07"
categories:
  - "Python"
tags:
  - "Poetry"
  - "make"
---

# {{ $frontmatter.title }}

Чтобы каждый раз не вводить длинные команды [Poetry](python-poetry.md) удобно использовать [make](https://www.gnu.org/software/make/). Для этого создайте файл `makefile` с набором команд.

```
run:
	poetry run python main.py

install:
	poetry install

test:
	poetry run pytest
```

Каждая команда начинается с названия и двоеточия. На следующей строке, начиная с [символа табуляции](https://symbl.cc/en/0009/), находится текст команды. Наличие символа табуляции важно, без него `make` работать не будет.

Чтобы вызывать команду наберите `make` и название команды:

```
make test
make run
```
