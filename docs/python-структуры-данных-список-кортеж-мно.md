---
title: "Python. Структуры данных: список, кортеж, множество, словарь"
date: "2020-02-08"
categories: 
  - "Python"
tags: 
  - "перевод"
  - "intermediate-python"
---

# {{ $frontmatter.title }}

Перевод параграфа 3.6 Data Structures из книги [Intermediate Python](https://leanpub.com/intermediatepython).

Python содержит встроенные типы данных: списки, кортежи, словари.

## Списки

Чтобы создать список используйте квадратные скобки или функцию `list()`:

```python
my_list1 = [] # Пустой список
my_list2 = list() # Пустой список
```

Список сохраняет порядок элементов с которым создаётся или в котором элементы добавляются. Списки являются последовательностями и поддерживают доступ к элементам по индексу, другие свойства последовательностей будут описаны в следующих главах.

Первый элемент списка находится под индексом 0, последний — на единицу меньше длины списка.

```python
>>> name = ["obi", "ike", "nwosu"]
>>> name[0]
'obi'
>>> name[1]
'ike'
>>> name[2]
'nwosu'
```

Метод `append()` добавляет элемент в список.

```python
>>> name = ["obi", "ike", "nwosu"]
>>> name.append("nkem")
>>> names
["obi", "ike", "nwosu", "nkem"]
```

Метод `insert()` добавляет элемент в любое место списка.

```python
>>> name = ["obi", "ike", "nwosu"]
>>> name.insert(1, "nkem")
>>> names
["obi", "nkem", "ike", "nwosu"]
```

Оператор `+` объединяет два и более списка.

```python
>>> name = ["obi", "ike", "nwosu"]
>>> name1 = ["James"]
>>> name + name1
["obi", "ike", "nwosu", "James"]
```

Для просмотра всех методов списка запустите команду `help(list)`.

## Кортежи

Кортеж тоже является последовательностью и создается элементами разделёнными запятыми:

```python
>>> companies = "Google", "Microsoft", "Tesla"
>>> companies
('Google', 'Microsoft', 'Tesla')
```

При определении непустого кортежа скобки не обязательны, но они становятся обязательными когда кортеж является частью большего выражения. Пустой кортеж создаётся пустой парой скобок:

```python
>>> companies = ()
>>> type(companies)
<class 'tuple'>
```

При определении кортежа с одним элементом запятая за ним обязательна.

```python
>>> company = "Google",
>>> type(company)
<class 'tuple'>

>>> company = ("Google",)
>>> type(company)
<class 'tuple'>
```

Пропуск запятой означает что задано обычное значение, не кортеж.

```python
>>> company = ("Google")
>>> company
'Google'

>>> type(company)
<class 'str'>
```

Кортежи индексируются как списки, но неизменямы.

```python
>>> companies = ("Google", "Microsoft", "Palantir")
>>> companies[0]
'Google'
>>> companies[0] = "Boeing"
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
```

В тоже время, если элементом кортежа является изменяемые объект, такой как список, то он может быть изменен.

```python
>>> companies = (["lockheedMartin", "Boeing"], ["Google", "Microsoft"])
>>> companies
(['lockheedMartin', 'Boeing'], ['Google', 'Microsoft'])
>>> companies[0].append("SpaceX")
>>> companies
(['lockheedMartin', 'Boeing', 'SpaceX'], ['Google', 'Microsoft'])
```

## Множества

Множества это неупорядоченные коллекции объектов не содержащие дубликатов. Пустое множество создаётся функцией `set()` или фигурными скобками `{}`. Множества неупорядоченны поэтому к элементам множества нельзя обратится по индексу. Множества, за исключением frozen set, изменяемы.

```python
>>> basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
>>> basket_set = set()
>>> basket_set
set()
>>> basket_set.update(basket)
>>> basket_set
{'pear', 'orange', 'apple', 'banana'}
>>> basket_set.add("clementine")
>>> basket_set
{'pear', 'orange', 'apple', 'banana', 'clementine'}
>>> basket_set.remove("apple")
>>> basket_set
{'pear', 'orange', 'banana', 'clementine'}
```

## Словари

Словарь в Python похож на ассоциативный массив или хеш-таблицу в других языках. Словари индексируются по неизменяемому ключу. Для создания словаря используются фигурные скобки `{}` или функция `dict()`. Словарь — неупорядоченное множество пар ключ-значение в которых ключ уникален. Пример инициализации словаря:

```python
ages = {"obi": 24,
"nkem": 23,
"Chris": 23
}
```

Основные операции словаря это сохранение значения по ключу и доступ к значению по ключу. Доступ к значению осуществляется через квадратные скобки:

```python
>>> ages["obi"]
24
```

Словари изменяемы: значения связанные с ключами могут менятся, добавлятся и удалятся.

Структуры данных Python не ограничиваются приведёнными в этом разделе. Например, модуль `collections` содержит очереди, деки и другие коллекции. В то же время структуры приведённые в этом разделе используются в большинстве приложений на Python.

Используйте функцию help с параметром в виде названия типа данных для детального изучения типа.

```
help(list)
help(tuple)
help(set)
help(dict)
```
