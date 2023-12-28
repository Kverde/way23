---
title: "Язык программирования awk"
date: "2023-12-28"
categories:
  - "Языки программирования"
tags:
  - "awk"
---

# {{ $frontmatter.title }}

Код на языке программирования awk состоит не просто из последовательного набора операторов, как в императивном языке, а из набора правил, каждое правило состоит из шаблона и команды.

```awk
шаблон {команда}
шаблон {команда}
```

Правила разделяются новой строкой — на одной строке одно правило. awk — интерпретируемый язык, поэтому его можно запускать непосредственно из Bash. В команде, шаблон или правило могут отсутствовать, но не оба одновременно. В следующей программе отсутствует правило, а одна команда выводит каждую строку.

```bash
user@debian-server:~/test$ cat text.txt 
one
two
three
user@debian-server:~/test$ awk '{print $0}' text.txt 
one
two
three
```

Первым параметром программы `awk` передается код программы на языке awk, а остальные параметры — файлы для обработки. Программу можно перенести в отдельный файл и запускать `awk` с параметром `-f`.

```bash
user@debian-server:~/test$ cat script.awk 
{ print $0 }
user@debian-server:~/test$ awk -f script.awk text.txt 
one
two
three
```

Интерпретатор awk последовательно читает входные файлы, разбивает их на строки и каждую строку сравнивает с шаблоном в каждом правиле. Если шаблон подходит, то выполняется команда из этого правила. Если шаблон не указан, как в примере выше, то команда выполняется для каждой строки. Следующая программа содержит два одинаковых правила, поэтому на выходе строки дублируются.

```bash
user@debian-server:~/test$ cat script.awk 
{ print $0 }
{ print $0 }
user@debian-server:~/test$ awk -f script.awk text.txt 
one
one
two
two
three
three
```

Если указан шаблон, то правило срабатывает в случае когда, строка входного соответствует шаблону. Шаблоны указываются в виде регулярных выражений ограниченных символами `/`.

```bash
user@debian-server:~/test$ cat script.awk 
{ print $0 }
/two/ { print $0 }
user@debian-server:~/test$ awk -f script.awk text.txt 
one
two
two
three
```

В шаблоне могут быть указаны специальные значения: `BEGIN` и `END`, эти значения означают начало работы программы и окончание работы программы соответственно.

```bash
user@debian-server:~/test$ cat script.awk 
BEGIN { print "start reading file" }
END { print "finish reading file" }
{ print $0 }
/two/ { print $0 }
user@debian-server:~/test$ awk -f script.awk text.txt
start reading file
one
two
two
three
finish reading file
```

Переменная `$0` хранит значение текущей строки. Поэтому команда `print $0` выводит текущую строку. Интерпретатор awk, кроме того, что делит входной файл на строки, так же делит строки на поля. По умолчанию, разделителями полей являются пробельные символы. Переменные `$1`, `$2`, `$3` и т. д. возвращают отдельные поля.

```bash
user@debian-server:~/test$ cat customers.txt 
Tom Smith 2000
Sam Brown 3000
Mark Adams 2500
Paul Ins 4200
John Smith 2800
Tim Cook 2800
user@debian-server:~/test$ nano script.awk 
user@debian-server:~/test$ awk '{ print $1 }' customers.txt 
Tom
Sam
Mark
Paul
John
Tim
user@debian-server:~/test$ awk '{ print $2 }' customers.txt 
Smith
Brown
Adams
Ins
Smith
Cook
user@debian-server:~/test$ awk '{ print $3 }' customers.txt 
2000
3000
2500
4200
2800
2800
```

Внутри команды можно не просто выводить поля, но и писать более сложный код. В следующем примере используется операция деления и конкатенация строк.

```bash
user@debian-server:~/test$ awk '{ print $3 / 10 "$" }' customers.txt 
200$
300$
250$
420$
280$
280$
```

Можно изменить значение одного поля и вывести всю строк.

```bash
user@debian-server:~/test$ awk '{ $1 = "xxx"; $2 = "xxx"; print $0 }' customers.txt 
xxx xxx 2000
xxx xxx 3000
xxx xxx 2500
xxx xxx 4200
xxx xxx 2800
xxx xxx 2800
```

Разделитель полей можно изменить через параметр `-F` команды `awk`.

```bash
user@debian-server:~/test$ awk -F: '{ print $1 }' /etc/passwd 
root
daemon
bin
sys
sync
games
...
```

Ещё несколько специальных переменных:

* `NF` — количество полей в текущей записи
* `NR` — номер строки во всем входном потоке
* `FNR` — номер строки в текущем файле

```bash
user@debian-server:~/test$ awk '{ print NR "(" FNR "):" $0 }' text.txt text.txt 
1(1):one
2(2):two
3(3):three
4(1):one
5(2):two
6(3):three
```

## Ссылки

* [awk documentation](https://www.gnu.org/software/gawk/manual/gawk.html)
* [Learn awk in Y minutes](https://learnxinyminutes.com/docs/awk/)
