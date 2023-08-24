---
title: "Python. Функция property()"
date: "2020-02-20"
categories: 
  - "Python"
tags: 
  - "Python"
  - "перевод"
---

# {{ $frontmatter.title }}

Перевод статьи [Python | property() function](https://www.geeksforgeeks.org/python-property-function/).

Функция `property()` создаёт новое свойство. Свойство — это атрибут класса с которым связаны функции чтения и записи.

```python
property(fget, fset, fdel, doc)
```

Параметры:

- fget() – используется для получения значения атрибута
- fset() – используется для установки значения атрибута
- fdel() – используется для удаления атрибута
- doc() – строка с документацией (docstring) для атрибута

Функция `property()` возвращает свойство с данными геттером, сеттером и deleter.

Вызванная без аргументов функция `property()` возвращает свойство без геттера, сеттера и deleter.

Если не задан `doc` то `property()` берёт docstring из геттера.

```python
# Пример использования функции property()

class Alphabet: 
    def __init__(self, value): 
        self._value = value 

    def getValue(self): 
        print('Getting value') 
        return self._value 

    def setValue(self, value): 
        print('Setting value to ' + value) 
        self._value = value 

    def delValue(self): 
        print('Deleting value') 
        del self._value 

    value = property(getValue, setValue, delValue, ) 

# passing the value 
x = Alphabet('GeeksforGeeks') 
print(x.value) 

x.value = 'GfG'

del x.value 
```

```
Output:

Getting value
GeeksforGeeks
Setting value to GfG
Deleting value
```

## Декоратор

При использовании декоратора сперва укажите что метод `value()` является свойством класса Alphabet, затем используя имя свойства (`value`) задайте сеттер, геттер и deleter. Результат работы декоратора `@property` аналогичен функции `property()`:

```python
# Пример использования декоратора @property

class Alphabet: 
    def __init__(self, value): 
        self._value = value 

    @property
    def value(self): 
        print('Getting value') 
        return self._value 

    @value.setter 
    def value(self, value): 
        print('Setting value to ' + value) 
        self._value = value 

    @value.deleter 
    def value(self): 
        print('Deleting value') 
        del self._value 

# passing the value 
x = Alphabet('Peter') 
print(x.value) 

x.value = 'Diesel'

del x.value 
```

```
Output:

Getting value
Peter
Setting value to Diesel
Deleting value
```

Декораторы часто применяются чтобы добавить новые функции в уже существующий код. Это называется метапрограммирование: одна часть программы изменяют другую часть программы во время компиляции. Функцию `property()` (и декоратор) позволяет изменить наш класс (например, добавить ограничения значений свойства) без необходимости менять код использующий наш класс.
