---
title: "Встроенные функции Python для ввода и вывода (print, input)"
date: "2019-11-14"
categories: 
  - "Python"
---

# {{ $frontmatter.title }}

## print(\*objects, sep=' ', end='\\n', file=sys.stdout, flush=False)

Печатает объекты в текстовый поток.

```python
print(1, 'hi', True)
# 1 hi True
```

Именованный параметр **sep** задаёт разделитель между элементами. Если параметр не установлен или равен **None** используется пробел.

```python
print(1, 2, 3, sep=', ')
# 1, 2, 3
```

Именованный параметр **end** задаёт текст печатаемый к конце. Если параметр не установлен или равен **None** используется перевод строки.

```python
print(1, 2, 3, sep=', ', end=';\n')
# 1, 2, 3;
```

Все не именованные аргументы преобразуются в строки функцией **str()**:

```python
class MyNumber():
    def __init__(self, num):
        self.num = num

    def __str__(self):
        return 'even' if self.num % 2 == 0 else 'odd'

x = MyNumber(10)
print(x)  # even
```

**print()** без аргументов печатает **end** — перевод строки.

Аргумент **file** должен быть объектом с методом `write(string)`. Если аргумент не задан или равен **None** то используется `sys.stdout`.

Обычно выходной поток, указанный в **file**, буферизуется. Если аргумент **flush** установлен в **True**, то после каждой записи данные записываются принудительно.

## input(\[prompt\])

Если задан аргумент **prompt**, он будет выведен в стандартный поток вывода без перевода на новую строку. Затем функция читает строку из входного потока, преобразовывает её в строку, удаляет завершающий перевод строки и возвращает результат. Если достигнут конц потока (EOF) выбрасывается исключение [EOFError](https://docs.python.org/3/library/exceptions.html#EOFError).

```python
>>>
>>> s = input('--> ')  
--> Monty Python's Flying Circus
>>> s  
"Monty Python's Flying Circus"
```

## Ссылки

- [Built-in Functions](https://docs.python.org/3/library/functions.html)
