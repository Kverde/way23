---
title: "Python. Статические и классовые методы"
date: "2019-10-28"
categories: 
  - "Python"
tags: 
  - "ооп"
  - "intermediate-python"
---

# {{ $frontmatter.title }}

Перевод параграфа 6.5 Static and Class Methods из книги [Intermediate Python](https://leanpub.com/intermediatepython).

По умолчанию методы определённые в классе работают с экземплярами класса. Для определения статических и классовых методов применяются декораторы `@staticmethod` и `@classmethod`.

## Статичные методы

Статичные методы это обычные функции внутри пространства имён класса. Ссылка на статичный метод из класса возвращает функцию вместо несвязанного метода:

```python
class Account(object):
    num_accounts = 0

    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
        Account.num_accounts += 1

    def del_account(self):
        Account.num_accounts -= 1

    def deposit(self, amt):
        self.balance = self.balance + amt

    def withdraw(self, amt):
        self.balance = self.balance - amt

    def inquiry(self):
        return "Name={}, balance={}".format(self.name, self.balance)

    @staticmethod
    def static_test_method():
        return "Current Account"
```

```python
>>> Account.static_test_method
<function Account.static_test_method at 0x101b846a8>
```

Декоратор `@staticmethod` используется для определения статического метода. Такой метод не требует аргумента `self`.

Статичные методы предоставляют механизм для организации кода. Метод связывается с классом и может быть переопределён в потомках.

В отличии от обычных методов, являющихся обёртками над функциями, статичные методы возвращают функцию без изменений.

## Классовые методы

Классовые методы работают с классами вместо экземпляров классов. Классовый метод создаётся декоратором `@classmethod`. В первый аргумент такого метода передаётся ссылка на класс вместо экземпляра объекта:

```python
import json

class Account(object):
    num_accounts = 0

    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
        Account.num_accounts += 1

    def del_account(self):
        Account.num_accounts -= 1

    def deposit(self, amt):
        self.balance = self.balance + amt

    def withdraw(self, amt):
        self.balance = self.balance - amt

    def inquiry(self):
        return "Name={}, balance={}".format(self.name, self.balance)

    @classmethod
    def from_json(cls, params_json):
        params = json.loads(params_json)
        return cls(params.get("name"), params.get("balance"))

    @staticmethod
    def type():
        return "Current Account"
```

Пример использования классовых методов — фабрики для создания объектов. Представьте что данные для класса `Account` приходят в различных форматах: кортежи, JSON, строки. Возможности определить несколько методов `__init__` нет, поэтому классовые методы удобны для этой ситуации. Приведённый выше класс `Account` инициализируется строкой с JSON, для этого мы определили классовый метод `from_json` который принимает строку, извлекает параметры из JSON и создаёт объект используя извлечённые параметры.

Другой пример классового метода — [dict.fromkeys](https://docs.python.org/3/library/stdtypes.html#dict.fromkeys). Этот метод создаёт словарь из последовательности ключей и значений.
