---
title: "Python. Сортировка"
date: "2019-11-15"
categories: 
  - "Python"
---

# {{ $frontmatter.title }}

Python содержит несколько различных способов сортировки данных. Встроенный метод списков `list.sort()` изменяет вызвавший его список. Встроенная функция **sorted()** создаёт новый сортированный список из итерируемого объекта.

## Простая сортировка

Чтобы отсортировать список по возрастанию вызовите функцию **sorted()**. Функция вернёт новый сортированный список:

```python
>>>
>>> sorted([5, 2, 3, 1, 4])
[1, 2, 3, 4, 5]
```

Метод `list.sort()` сортирует список у которого вызван и возвращает **None**. Если исходный список больше не нужен это может быть немного эффективнее:

```python
>>> a = [5, 2, 3, 1, 4]
>>> a.sort()
>>> a
[1, 2, 3, 4, 5]
```

Метод `list.sort()` определён только для списков. В отличи от него, функция **sorted()** работает с любыми перечисляемыми объектами:

```python
>>> sorted({1: 'D', 2: 'B', 3: 'B', 4: 'E', 5: 'A'})
[1, 2, 3, 4, 5]
```

## Параметр key

Функций `list.sort()` и **sorted()** содержат параметр **key** чтобы указать функцию вызываемую для каждого аргумента перед сравнением.

Пример регистронезависимого сравнения:

```python
>>> sorted("This is a test string from Andrew".split(), key=str.lower)
['a', 'Andrew', 'from', 'is', 'string', 'test', 'This']
```

Функция передаваемая в **key** содержит один аргумент и возвращает ключ используемый для сортировки. Это эффективный подход, так как функция вызывается ровно один раз для каждого элемента.

Общий шаблон для отсортировки сложных объектов — использование одного из индексов как ключа:

```python
>>> student_tuples = [
...     ('john', 'A', 15),
...     ('jane', 'B', 12),
...     ('dave', 'B', 10),
... ]
>>> sorted(student_tuples, key=lambda student: student[2]) # сортировка по возрасту
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
```

Тот же способ работает для объектов с именованными атрибутам:

```python
>>> class Student:
...     def __init__(self, name, grade, age):
...         self.name = name
...         self.grade = grade
...         self.age = age
...     def __repr__(self):
...         return repr((self.name, self.grade, self.age))
```

```python
>>> student_objects = [
...     Student('john', 'A', 15),
...     Student('jane', 'B', 12),
...     Student('dave', 'B', 10),
... ]
>>> sorted(student_objects, key=lambda student: student.age)   # сортировка по возрасту
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
```

## Функции из модуля operator

Шаблон с ключевой функций, показанный выше, используется очень часто, поэтому Python предоставляет функции для быстрого создания функций доступа. Модуль **operator** содержит функции: **itemgetter()**, **attrgetter()**, и **methodcaller()**.

Используя эти функции, примеры выше становятся проще и быстрее:

```python
>>> from operator import itemgetter, attrgetter
```

```python
>>> sorted(student_tuples, key=itemgetter(2))
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
```

```python
>>> sorted(student_objects, key=attrgetter('age'))
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
```

Функции модуля **operator** позволяют несколько уровней сортировки. Для примера, сортировка по классу и по возрасту:

```python
>>> sorted(student_tuples, key=itemgetter(1,2))
[('john', 'A', 15), ('dave', 'B', 10), ('jane', 'B', 12)]
```

```python
>>> sorted(student_objects, key=attrgetter('grade', 'age'))
[('john', 'A', 15), ('dave', 'B', 10), ('jane', 'B', 12)]
```

## Порядок сортировки

Функции `list.sort()` и `sorted()` имеют Параметр **reverse** определяет направление сортировки. При значении **True** сортировка происходит в обратном порядке:

```python
>>> sorted(student_tuples, key=itemgetter(2), reverse=True)
[('john', 'A', 15), ('jane', 'B', 12), ('dave', 'B', 10)]
```

```python
>>> sorted(student_objects, key=attrgetter('age'), reverse=True)
[('john', 'A', 15), ('jane', 'B', 12), ('dave', 'B', 10)]
```

## Стабильность и сложность сортировки

Сортировка гарантировано [стабильная](https://ru.wikipedia.org/wiki/Устойчивая_сортировка). Когда несколько записей имеют одинаковый ключ их порядок всегда сохраняется.

```python
>>> data = [('red', 1), ('blue', 1), ('red', 2), ('blue', 2)]
>>> sorted(data, key=itemgetter(0))
[('blue', 1), ('blue', 2), ('red', 1), ('red', 2)]
```

Заметьте что две записи с `blue` сохраняют исходный порядок, так что `('blue', 1)` гарантировано впереди `('blue', 2)`.

Стабильность сортировки позволяет выполнять сложную сортировку по шагам. Например, для сортировки учеников по классу в возрастающем порядке и затем по возрасту в убывающем порядке. Сначала сортируем по возрасту и затем по классу:

```python
>>> s = sorted(student_objects, key=attrgetter('age'))     # сортировка по вторичному ключу
>>> sorted(s, key=attrgetter('grade'), reverse=True)       # сортировка по первичному ключу
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
```

Эту возможность можно абстрагировать и обернуть в функцию которая принимает список и кортежи из полей и порядка сортировки:

```python
>>> def multisort(xs, specs):
...     for key, reverse in reversed(specs):
...         xs.sort(key=attrgetter(key), reverse=reverse)
...     return xs
>>> multisort(list(student_objects), (('grade', True), ('age', False)))
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
```

Алгоритм [Timsort](https://en.wikipedia.org/wiki/Timsort), используемый в Python, эффективно производит множественные сортировки, так как использует существующий порядок в данных.

## Ссылки

- [Sorting HOW TO](https://docs.python.org/3/howto/sorting.html)
