---
title: "Встроенные функции Python для работы с коллекциями (min, max, sum, all, any, enumerate)"
date: "2019-11-12"
categories: 
  - "Python"
---

# {{ $frontmatter.title }}

## max

- max(iterable, \*\[, key, default\])
- max(arg1, arg2, \*args\[, key\])

Функция возвращает максимальный элемент. Две версии функции отличаются аргументами: с итерируемым объектом и со списком аргументов.

```python
print(max([3, 5, 8, 2])) # 8
print(max(3, 5, 8, 2)) # 8
```

Если коллекция пустая возникнет исключение

```python
print(max([], )) # ValueError
```

Именованный аргумент **default** используется чтобы избежать исключения. Функция **max** возвращает **default** только если коллекция пустая:

```python
print(max([], default=0)) # 0
print(max([2, 3], default=5)) # 3
```

Порядок элементов изменяется аргументом **key**. Переданная в **key** функция применяется к каждому элементу. Результат функции используется для определения порядка элементов:

```python
def neg(n):
    return -n

print(max([3, 5, 8, 2], key=neg))  # 2
```

## min

- min(iterable, \*\[, key, default\])
- min(arg1, arg2, \*args\[, key\])

Возвращает минимальный элемент. Две версии функции отличаются аргументами: с итерируемым объектом и со списком аргументов.

```python
print(min([3, 5, 8, 2])) # 2
print(min(3, 5, 8, 2)) # 2
```

Если коллекция пустая возникнет исключение

```python
print(min([], )) # ValueError
```

Именованный аргумент **default** используется чтобы избежать исключения. Функция **min** возвращает **default** только если коллекция пустая:

```python
print(min([], default=0)) # 0
print(min([2], default=0)) # 2
```

Порядок элементов изменяется аргументом **key**. Переданная в **key** функция применяется к каждому элементу. Результат функции используется для определения порядка элементов:

```python
def neg(n):
    return -n

print(min([3, 5, 8, 2], key=neg)) # 8
```

## sum(iterable, /, start=0)

Возвращает сумму элементов **iterable**:

```python
print(sum([1, 2, 3])) # 6
print(sum([0.2, 0.3, 0.5])) # 1.0
print(sum([])) # 0
```

Необязательный аргумент **start** задаёт начальное значение:

```python
print(sum([1, 2, 3], start= 2)) # 8
print(sum([], start= 2)) # 2
```

## all(iterable)

Возвращает **True** если все элементы **iterable** равны **True**:

```python
print(all([True, True, True])) # True
print(all([True, False, True])) # False

print(all(map(lambda x: x % 2 == 0, [2, 4, 6, 8]))) # True
```

Другие типы данных преобразуются к **bool**:

```python
print(all([1, 2, 3])) # True
print(all([1, 2, 0])) # False
print(all([[1], []])) # False
```

Если **iterable** пустой, то функция вернёт **True**:

```python
print(all([])) # True
```

Функция **all()** эквивалента следующему коду:

```python
def all(iterable):
    for element in iterable:
        if not element:
            return False
    return True
```

## any(iterable)

Возвращает **True** если хотя бы один из элементов **iterable** равен **True**:

```python
print(any([False, False, False])) # False
print(any([False, True, False])) # True

print(any(map(lambda x: x % 2 != 0, [2, 4, 5, 8]))) # True
```

Другие типы данных преобразуются к **bool**:

```python
print(any([0, 0, 0])) # False
print(any([0, 6, 0])) # True
print(any([[1], []])) # True
```

Если **iterable** пустой, то функция вернёт **False**:

```python
print(any([])) # False
```

Функция **any()** эквивалента следующему коду:

```python
def any(iterable):
    for element in iterable:
        if element:
            return True
    return False
```

## enumerate(iterable, start=0)

Перебирает коллекцию и возвращает одновременно элемент и его индекс. С помощью **enumerate()** такой цикл

```python
a = ['a', 'b', 'c']
for i in range(len(a)):
    print(i, a[i])

# 0 a
# 1 b
# 2 c
```

заменяется на

```python
a = ['a', 'b', 'c']
for i, v in enumerate(a):
    print(i, v)

# 0 a
# 1 b
# 2 c
```

**enumerate()** возвращает не коллекцию, а интегрируемый объект, это нужно учитывать при выводе:

```python
print(*enumerate(['a', 'b', 'c']))
# (0, 'a') (1, 'b') (2, 'c')
```

Аргумент **start** задаёт индекс начала отчёта:

```python
print(*enumerate(['a', 'b', 'c'], start = 3)) 
# (3, 'a') (4, 'b') (5, 'c')
```

Функция **enumerate()** эквивалента следующему коду:

```python
def enumerate(sequence, start = 0):
    n = start
    for elem in sequence:
        yield n, elem
        n += 1
```

## Ссылки

- [Built-in Functions](https://docs.python.org/3/library/functions.html)
