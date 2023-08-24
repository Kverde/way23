---
title: "Python. Абстрактные базовые классы"
date: "2019-10-30"
categories: 
  - "Python"
tags: 
  - "ооп"
  - "intermediate-python"
---

# {{ $frontmatter.title }}

Перевод параграфа 6.7 Abstract Base Classes из книги [Intermediate Python](https://leanpub.com/intermediatepython).

Чтобы классы реализовывали заданный набор методов в статически типизированных языках, таких как Java, используются интерфейсы и абстрактные классы.

Простая реализация такого контракта в Python — добавить в базовый класс методы по умолчанию, выбрасывающие исключение `NotImplementedError`. Такое решение неполное: наследники могут не переопределить все методы базового класса, а проблема обнаружится только во время выполнения программы.

Рассмотрим другую ситуацию — использование одного объекта для замещения другого. [Заместитель](https://ru.wikipedia.org/wiki/Заместитель_(шаблон_проектирования)) перехватывает все вызовы и передаёт их в скрываемый объект. Заместитель реализует все нужные методы, но проверку типа через `isinstance` он не проходит, так как имеет тип отличный от замещаемого объекта.

В Python такие задачи решаются через абстрактные базовые классы, реализуемые модулем `abc`. Этот модуль определяет мета-класс и набор декораторов. Для определения абстрактного базового класса мы устанавливаем `ABCMeta` как мета-класс абстрактного класса и помечаем декораторами `@abstractmethod` и `@abstractproperty` методы и свойства которые должны быть реализованы в неабстрактных потомках.

Если потомки не реализуют абстрактные методы и свойства то не смогут создавать объекты:

```python
from abc import ABCMeta, abstractmethod

class Vehicle(object):

    __meta-class__ = ABCMeta

    @abstractmethod

    def change_gear(self):
        pass

    @abstractmethod
    def start_engine(self):
        pass

class Car(Vehicle):

    def __init__(self, make, model, color):
        self.make = make
        self.model = model
        self.color = color
```

```python
# abstract methods not implemented
>>> car = Car("Toyota", "Avensis", "silver")

Traceback (most recent call last):
File "<stdin>", line 1, in <module>
TypeError: Can't instantiate abstract class Car with abstract methods change_gear, start_engine
```

Как только класс реализовал все абстрактные методы появляется возможность создавать объекты:

```python
from abc import ABCMeta, abstractmethod

class Vehicle(object):

    __meta-class__ = ABCMeta

    @abstractmethod
    def change_gear(self):
        pass

    @abstractmethod
    def start_engine(self):
        pass

class Car(Vehicle):

    def __init__(self, make, model, color):
        self.make = make
        self.model = model
        self.color = color

    def change_gear(self):
        print("Changing gear")

    def start_engine(self):
        print("Changing engine")
```

```python
>>> car = Car("Toyota", "Avensis", "silver")
>>> print(isinstance(car, Vehicle))
True
```

Абстрактные классы позволяет регистрировать существующие классы как часть своей иерархии, не проводя проверок на реализацию методов и свойств. Это простое решение второй проблемы открывающей параграф. Абстрактный класс регистрирует класс заместитель и проверка `isinstance` возвращает корректное значение:

```python
from abc import ABCMeta, abstractmethod

class Vehicle(object):

    __meta-class__ = ABCMeta

    @abstractmethod
    def change_gear(self):
        pass

    @abstractmethod
    def start_engine(self):
        pass

class Car(object):
    def __init__(self, make, model, color):
        self.make = make
        self.model = model
        self.color = color
```

```python
>>> Vehicle.register(Car)
>>> car = Car("Toyota", "Avensis", "silver")
>>> print(isinstance(car, Vehicle))
True
```

Абстрактные базовые классы широко используются в библиотеке Python. Они предоставляют средство для группировки классов, например, числовых типов, которые имеют относительно плоскую иерархию. Модуль `collections` также содержит абстрактные базовые классы для различных наборов операций с множествами, последовательностями и словарями. Абстрактные базовые классы Python предоставляют возможность применять контракты между классами такие же как интерфейсы в Java.
