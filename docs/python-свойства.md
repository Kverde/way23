---
title: "Python. Свойства"
date: "2020-02-21"
categories: 
  - "Python"
tags: 
  - "Python"
---

# {{ $frontmatter.title }}

Перевод статьи [Python @property](https://www.programiz.com/python-programming/property).

Python поддерживает концепцию свойств упрощающих объектно ориентированное программирование. Прежде чем погрузится глубже в детали свойств, рассмотрим зачем могут быть нужны свойства.

## Начальный пример

Представим что вы решили сделать класс хранящий температуру в градусах Цельсия. Он также должен реализовывать метод для конвертации температуры в градусы Фаренгейта. Реализуем класс так:

```python
class Celsius:
    def __init__(self, temperature = 0):
        self.temperature = temperature

    def to_fahrenheit(self):
        return (self.temperature * 1.8) + 32
```

Затем создаём объект этого класса и меняем значение температуры как пожелаем:

```python
>>> # создание нового объекта
>>> man = Celsius()
>>> # установка температуры
>>> man.temperature = 37
>>> # получение значения температуры
>>> man.temperature
37
>>> # конвертация в градусы Фаренгейта
>>> man.to_fahrenheit()
98.60000000000001
```

Дополнительные десятичные разряды при конвертации в градусы Фаренгейта происходят из-за арифметической ошибки с плавающей запятой (попробуйте сложить `1.1 + 2.2` в интерпретаторе).

Когда мы присваиваем или извлекаем атрибут объекта, такой как `temperature`, Python ищет его в словаре объекта `__dict__`.

```python
>>> man.__dict__
{'temperature': 37}
```

Внутри интерпретатора `man.temperature` становится `man.__dict__['temperature']`.

Теперь представим что наш класс стал популярным, много клиентов стали использовать его в своих программах. Однажды, важный клиент пришёл в нам и сообщил что температура не может быть ниже -273 градусов Цельсия. Затем он попросил реализовать это ограничение значения. Прислушавшись к этому предложению мы реализуем его и выпускаем новую версию нашего класса.

## Использование геттеров и сеттеров

Очевидным решением будет скрыть атрибут `temperature` (сделать его приватным) и определить интерфейс в виде геттера и сеттера для управления полем.

```python
class Celsius:
    def __init__(self, temperature = 0):
        self.set_temperature(temperature)

    def to_fahrenheit(self):
        return (self.get_temperature() * 1.8) + 32

    # new update
    def get_temperature(self):
        return self._temperature

    def set_temperature(self, value):
        if value < -273:
            raise ValueError("Temperature below -273 is not possible")
        self._temperature = value
```

Добавлены методы `get_temperature()` и `set_temperature()`, имя поле `temperature` заменено на `_temperature`. Подчёркивание в начале имени используется для обозначения приватных переменных в Python.

```python
>>> c = Celsius(-277)
Traceback (most recent call last):
...
ValueError: Temperature below -273 is not possible
>>> c = Celsius(37)
>>> c.get_temperature()
37
>>> c.set_temperature(10)
>>> c.set_temperature(-300)
Traceback (most recent call last):
...
ValueError: Temperature below -273 is not possible
```

Изменения успешно реализуют новые ограничения. Мы больше не можем установить температуру ниже -273.

В языке Python нет приватных переменных. Существуют нормы которым придерживаются разработчики, но язык сам не применяет ограничения.

```python
>>> c._temperature = -300
>>> c.get_temperature()
-300
```

Но это не является большой проблемой. Гораздо хуже то что все клиенты использующие предыдущую версию класса должны изменить свой код с `obj.temperature` на `obj.get_temperature()` и все присвоения `obj.temperature = val` на `obj.set_temperature(val)`. Наше обновление не поддерживает обратную совместимость. Свойства помогают решить эту проблему.

## Свойства

Добавление ограничений в класс в стиле Python:

```python
class Celsius:
    def __init__(self, temperature = 0):
        self.temperature = temperature

    def to_fahrenheit(self):
        return (self.temperature * 1.8) + 32

    def get_temperature(self):
        print("Getting value")
        return self._temperature

    def set_temperature(self, value):
        if value < -273:
            raise ValueError("Temperature below -273 is not possible")
        print("Setting value")
        self._temperature = value

    temperature = property(get_temperature,set_temperature)
```

Мы добавили функции `print()` внутрь `get_temperature()` и `set_temperature()` чтобы ясно видеть когда они запускаются.

Последняя строка кода создаёт объект свойства `temperature`. Свойство присоединяет некоторый код (`get_temperature` и `set_temperature`) к атрибутту класса (`temperature`).

Код извлекающий значение из `temperature` автоматически вызывает `get_temperature()` вместо поиска по словарю (`__dict__`). Таким же образом, код присваивающий значение `temperature` автоматически вызовет `set_temperature()`.

```python
>>> c = Celsius()
Setting value
```

После создания объекта появляется сообщение из метода `set_temperature()`. Это происходит потому что при создании объекта вызывается метод `__init__()`, а в нём приходит присвоение `self.temperature = temperature`. Присвоение автоматически вызывает `set_temperature()`.

```python
>>> c.temperature
Getting value
0
```

Любой запрос к полю, такой как `c.temperature` автоматически вызывает `get_temperature()`. Ещё несколько примеров:

```python
>>> c.temperature = 37
Setting value
>>> c.to_fahrenheit()
Getting value
98.60000000000001
```

При использовании свойств мы изменяем класс и реализуем ограничения значения без изменений в клиентском коде. Наша реализация обладает обратной совместимостью.

Обратите внимание, что значение температуры хранится в приватной переменной `_temperature`. Атрибут `temperature` является объектом свойства который предоставляет интерфейс доступа к этой приватной переменной.

## Глубокое погружение в свойства

В Python, `property()` это встроенная функция с сигнатурой

```python
property(fget=None, fset=None, fdel=None, doc=None)
```

- fget - функция для получения значения атрибута
- fset - функция для установки значения атрибута
- fdel - функция для удаления атрибута
- doc - строка с комментарием

Все аргументы не обязательны, объект свойства может быть создан так:

```python
>>> property()
<property object at 0x0000000003239B38>
```

Объект свойства имеет три метода: `getter()`, `setter()` и `deleter()` для указания `fget`, `fset` и `fdel` после создания объекта. Это означает что строка

```python
temperature = property(get_temperature, set_temperature)
```

эквивалентна коду

```python
# make empty property
temperature = property()
# assign fget
temperature = temperature.getter(get_temperature)
# assign fset
temperature = temperature.setter(set_temperature)
```

Используя декоратор мы можем избежать создания лишних имён `get_temperature` и `set_temperature`.

```python
class Celsius:
    def __init__(self, temperature = 0):
        self._temperature = temperature

    def to_fahrenheit(self):
        return (self.temperature * 1.8) + 32

    @property
    def temperature(self):
        print("Getting value")
        return self._temperature

    @temperature.setter
    def temperature(self, value):
        if value < -273:
            raise ValueError("Temperature below -273 is not possible")
        print("Setting value")
        self._temperature = value
```

Использования декоратора простой и рекомендуемый способ создания свойств.
