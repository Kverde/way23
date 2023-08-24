---
title: "Python. Наследование"
date: "2019-10-31"
categories: 
  - "Python"
tags: 
  - "ооп"
  - "intermediate-python"
---

# {{ $frontmatter.title }}

Перевод параграфа 6.4 Inheritance из книги [Intermediate Python](https://leanpub.com/intermediatepython).

Наследование — это механизм создания новых классов. Наследники специализируют или изменяют базовые классы добавляя в них новую функциональность. Python поддерживает множественное наследование как C++. Пример одиночного наследования в Python:

```python
class Account:
    """base class for representing user accounts"""
    num_accounts = 0

    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
        Account.num_accounts += 1

    def del_account(self):
        Account.num_accounts -= 1

    def __getattr__(self, name):
        """handle attribute reference for non-existent attribute"""
        return "Hey I dont see any attribute called {}".format(name)

    def deposit(self, amt):
        self.balance = self.balance + amt

    def withdraw(self, amt):
        self.balance = self.balance - amt

    def inquiry(self):
        return "Name={}, balance={}".format(self.name, self.balance)

class SavingsAccount(Account):

    def __init__(self, name, balance, rate):
        super().__init__(name, balance)
        self.rate = rate

    def __repr__(self):
        return "SavingsAccount({}, {}, {})".format(self.name, self.balance, self.rate)
```

```python
>>>acct = SavingsAccount("Obi", 10, 1)
>>>repr(acct)
SavingsAccount(Obi, 10, 1)
```

## Ключевое слово super

В одиночной иерархии наследования `super` используется для ссылки на родительский класс без явного указания на него. Это похоже на метод `super` в Java. `super` применяется при переопределении метода, когда требуется вызвать родительскую версию переопределяемого метода. В примере выше, метод `__init__` в классе `SavingsAccount` переопределён, но с помощью `super` вызывается метод `__init__` родительского класса. При множественном наследовании `super` играет более важную роль.

## Множественное наследование

В множественном наследовании класс может иметь несколько родительских классов. Одной из сложностей такого вида наследования является поиск нужной версии метода при его вызове. Представим что класс `D` наследник классов `B` и `C` и нужно вызывать метод родительского класса когда оба родителя имеют этот метод. В Python эта ситуация решается алгоритмом Method Resolution Order (MRO), он определяет как производится поиск метода в классе и всех базовых классах. Порядок методов вычисляется в момент определения класса и сохраняется в поле класса `__mro__`.

```python
>>> class A:
... def meth(self): return "A"
...
>>> class B(A):
... def meth(self): return "B"
...
>>> class C(A):
... def meth(self): return "C"
...
>>> class D(B, C):
... def meth(self): return "X"
...
```

```python
>>>
>>> D.__mro__
(<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>)
>>>
```

Алгоритм MRO состоит из двух шагов: поиск в глубину слева направо по всем классам в иерархии и удаление повторявшихся классов, кроме последнего вхождения.

В примере выше поиск в глубину по всем классам выдаёт такой список классов:

```python
[D, B, A, C, A, object]
```

Затем удаление повторяющихся классов, кроме последнего вхождения:

```python
[D, B, C, A, object]
```

Обратите внимание что если предок явно не задан, то класс наследуются от класса `object`.

## Множественном наследование и super

Рассмотрим иерархию из прошлого примера. Класс `A` объявляет метод переопределяемый классами `B`, `C` и `D`. Предположим есть требование чтобы все методы вызывались, они сохраняют данные в каждом классе где объявлены, пропуск вызова приведёт к потере данных. Такое требование реализуется с помощью метода `super` и MRO:

```python
class A(object):

    def meth(self):
        "save A's data"
        print("saving A's data")

class B(A):

    def meth(self):
        "save B's data"
        super(B, self).meth()
        print("saving B's data")

class C(A):

    def meth(self):
        "save C's data"
        super(C, self).meth()
        print("saving C's data")

class D(B, C):

    def meth(self):
        "save D's data"
        super(D, self).meth()
        print("saving D's data")
```

Предположим метод `self.meth()` вызывается из экземпляра класса `D`. Тогда `super(D, self).meth()` найдёт и вызовет метод `B.meth(self)`, так как `B` первый базовый класс следующий за `D` в `D.__mro__` и `B` определяет метод `meth`.

Теперь `B.meth` вызывает `super(B, self).meth()` и так как `self` является экземпляром класса `D`, следующий класс после `B` это `C` (`D.__mro__ = [D, B, C, A]`) и поиск `meth` продолжается.

Следующим вызывается `C.meth`, который в свою очередь вызывает `super(C, self).meth()`.

Следующий после `C` класс в MRO это `A` и вызывается метод `A.meth`. Это исходное определение `meth`, поэтому вызов `super` не производится.

Используя `super` и MRO, интерпретатор находит и вызывает все версии метода `meth` реализованные в каждом класс иерархии.

Несмотря на всё сказанное, множественного наследования лучше избегать, потому, что для более сложных иерархий, вызовы могут быть намного сложнее чем в приведённых примерах.
