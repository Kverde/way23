---
title: "Встроенные функции Python для работы с коллекциями (sorted, filter, zip, reversed, len)"
date: "2019-11-13"
categories: 
  - "Python"
---

# {{ $frontmatter.title }}

## sorted()

Возвращает новый сортированный список (**list**) из элементов **iterable**.

```python
print(sorted([5, 6, 2, 0])) # [0, 2, 5, 6]
```

Порядок элементов изменяется аргументом **key**. Переданная в **key** функция применяется к каждому элементу. Результат функции используется для определения порядка элементов:

```python
def neg(n):
    return -n

print(sorted([5, 6, 2, 0], key = neg)) # [6, 5, 2, 0]
```

Логический аргумент **reverse** задаёт обратную сортировку:

```python
print(sorted([5, 6, 2, 0], reverse = True)) # [6, 5, 2, 0]
```

[Описание других способов сортировки](https://way23.ru/python-сортировка/).

## zip(\*iterables)

Одновременно перебирает элементы из нескольких итерируемых объектов. Возвращает итератор кортежей, в котором каждый i-тый кортеж содержит i-тый элемент из каждого аргумента.

```python
a = [1, 2, 3]
b = [4, 5, 6]
c = [7, 8, 9]

print(*zip(a, b, c), sep='\n')

# (1, 4, 7)
# (2, 5, 8)
# (3, 6, 9)
```

Перебор заканчивается при завершении самого короткого аргумента:

```python
a = [1, 2, 3]
b = [4, 5, 6]
c = [7, 8]

print(*zip(a, b, c), sep='\n')

# (1, 4, 7)
# (2, 5, 8)
```

При одном аргументе **zip()** возвращает кортежи из одного элемента:

```python
a = [1, 2, 3]

print(*zip(a), sep='\n')

# (1,)
# (2,)
# (3,)
```

При пустом списке аргументов **zip()** возвращает пустой итератор:

```python
print(*zip(), sep='\n')
```

Эквивалентный код на Python:

```python
def zip(*iterables):
    # zip('ABCD', 'xy') --> Ax By
    sentinel = object()
    iterators = [iter(it) for it in iterables]
    while iterators:
        result = []
        for it in iterators:
            elem = next(it, sentinel)
            if elem is sentinel:
                return
            result.append(elem)
        yield tuple(result)
```

**zip()** используется со списками разных размеров только когда не имеют значения последние элементы самых больших списков. Если эти элементы имеют значение используйте `itertools.zip_longest()`.

**zip()** вместе с оператором \* может использоваться чтобы распаковать (unzip) список:

```python
>>>
>>> x = [1, 2, 3]
>>> y = [4, 5, 6]
>>> zipped = zip(x, y)
>>> list(zipped)
[(1, 4), (2, 5), (3, 6)]
>>> x2, y2 = zip(*zip(x, y))
>>> x == list(x2) and y == list(y2)
True
```

Одновременный перебор двух коллекций:

```python
a = 'hello'
b = 'hel1o'

for i, j in zip(a, b):
    if i != j:
        print(i, j)

# l 1
```

## filter(function, iterable)

Фильтрует элементы, возвращает только те элементы для которых **function** возвращает **True**.

```python
def is_even(x):
    return x % 2 == 0

a = [0, 1, 2, 3, 4, 5, 6]

print(*filter(is_even, a))
# 0 2 4 6

# эквивалентно генератору
print(*(item for item in a if is_even(item)))
# 0 2 4 6
```

Если **function** равен **None** то удаляются все элементы равные **False**:

```python
print(*filter(None, a))
# 1 2 3 4 5 6

# эквивалентно генератору
print(*(item for item in a if item))
# 1 2 3 4 5 6
```

## reversed(seq)

Переворачивает последовательность задом наперёд.

```python
print(*reversed([1, 2, 3])) # 3 2 1
```

**seq** должен быть объектом с методом `__reversed__()`:

```
class MyNumber():
    def __init__(self, num):
        self.num = num

    def __reversed__(self):
        return int(''.join(reversed(str(self.num))))

x = MyNumber(123)
print(reversed(x)) # 321
```

или поддерживать протокол последовательностей: методы `__len__()` и `__getitem__()` с целочисленными аргументами начиная с 0.

```python

class MyNumber():
    def __init__(self, num):
        self.num = num

    def __len__(self):
        return len(str(self.num))

    def __getitem__(self, item):
        return str(self.num)[item]

x = MyNumber(123)
print(*reversed(x)) # 3 2 1
```

## len(s)

Возвращает длину (количество элементов) объекта. Аргумент может быть последовательностью (string, bytes, tuple, list, range) или коллекцией (dictionary, set, frozen set).

```python
print(len([1, 2, 5])) # 3
print(len({2, 3}))    # 2
print(len('hello'))   # 5

print(len([])) # 0
```

## Ссылки

- [Built-in Functions](https://docs.python.org/3/library/functions.html)
