---
title: "Стандартный потоки Linux: stdin, stdout, stderr"
date: "2023-11-02"
categories:
  - "Linux"
tags:
  - "stdin"
  - "stdout"
  - "stderr"
---

# {{ $frontmatter.title }}

Чтобы программы можно было использовать вместе необходим способ передачи данных из одной программы в другую. В Linux такой механизм реализован через стандартные потоки, всего их три:

* `stdin` — стандартный ввод
* `stdout` — стандартный вывод
* `stderr` — стандартный вывод ошибок

Большинство программ умеют принимать данные через `stdin` и возвращать данные через `stdout`. Для примера, запустим следующий скрипт на Python в консоли:

```
print('Стандартный вывод')
raise Exception('Стандартный поток ошибок')
```

```
python3 script.py
Стандартный вывод
Traceback (most recent call last):
  File "/home/user/test/script.py", line 2, in <module>
    raise Exception('Стандартный поток ошибок')
Exception: Стандартный поток ошибок
```

Такой результат получается из-за того, что консоль при запуске программы выводит все что программа передает в `stdout` и в `stderr`. Для переправления `stdout` в файл используется команда `>`:

```
python3 script.py > log.txt
Traceback (most recent call last):
  File "/home/user/test/script.py", line 2, in <module>
    raise Exception('Стандартный поток ошибок')
Exception: Стандартный поток ошибок
```

```
cat log.txt
Стандартный вывод
```

Для перенаправления патока ошибок аналогичная команда `2>`:

```
python3 script.py 2> err.txt
Стандартный вывод
```

```
cat err.txt 
Traceback (most recent call last):
  File "/home/user/test/script.py", line 2, in <module>
    raise Exception('Стандартный поток ошибок')
Exception: Стандартный поток ошибок
```

Цифра 2 означает номер потока, все три потока имеют номера: `stdin` — 0, `stdout` — 1, `stderr` — 2. Поэтому для перенаправления потока вывода можно так же написать `1>`. Команды `1>` и `2>` переписывают файл, если же нужно только дописывать в файл, то используются следующие команды: `1>>` и `2>>`. Если нужно перенаправить оба потока в файл, то используется команда `&>`.

```
python3 script.py &> log.txt
```

```
cat log.txt
Стандартный вывод
Traceback (most recent call last):
  File "/home/petro/Desktop/test/script.py", line 2, in <module>
    raise Exception('Стандартный поток ошибок')
Exception: Стандартный поток ошибок
```

Для того чтобы на стандартный ввод программы поступили данные из файла используется команда `<`.

```
grep root -c < /etc/passwd
2
```

Все вышеперечисленные команды перенаправляют потоки в файл и из файла. Команда `|` переправляет `stdout` одной программы в `stdin` другой. С помощью этой команды можно строить цепочки программ с последовательной обработкой данных.

```
cat /etc/passwd | grep user | head
```

Кроме вышеуказанных перенаправлений ввода есть ещё две похожие команды управляющие потоками данных. Первая команда `<<<` позволяет передать на стандартный поток ввода строку текста.

```bash
user@debian-server:~/test$ cat file.txt 
file.txt
user@debian-server:~/test$ cat - file.txt <<< "stdin input"
stdin input
file.txt
```

Параметр `-` заставляет команду `cat` принимать ввод не только из файлов, но и из `stdin`.

Команда `<<` делает тоже самое, но позволяет передать многострочные текст.

```bash
user@debian-server:~/test$ cat - file.txt << EOF
> first line
> second line
> EOF
first line
second line
file.txt
```

Вместо `EOF` можно использовать любой маркер начала и окончания ввода данных.