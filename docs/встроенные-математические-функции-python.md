---
title: "Встроенные математические функции Python"
date: "2019-11-07"
categories: 
  - "Python"
---

# {{ $frontmatter.title }}

Стандартные функции доступные без подключения модулей.

## abs(x)

Возвращает модуль числа. Аргумент **x** может быть целым (int) или вещественным (float) числом.

```python
a = -1
b = -2.4
c = 5
print(abs(a)) # 1
print(abs(b)) # 2.4
print(abs(c)) # 5
```

Для комплексных чисел возвращает длину вектора изображающего комплексное число:

```python
c = complex(3, 4)
print(abs(c)) ## 5.0
```

Если **x** определяет метод `__abs__()`, то `abs(x)` вернёт `x.__abs__()`.

```python
class MyNumber():
    def __init__(self, num):
        self.num = num

    def __abs__(self):
        return -abs(self.num)

x = MyNumber(10)
print(abs(x)) # -10
```

## pow(base, exp\[, mod\])

Возвращает **base** в степени **exp**:

```python
print(pow(2, 10)) # 1024
print(2 ** 10)    # 1024
```

Допустима отрицательная и вещественная степень:

```python
print(pow(2, -2)) # 0.25
print(pow(64, 0.5)) # 8.0
```

Если указан третий аргумент **mod**, функция вернёт остаток по модулю:

```python
print(pow(2, 10, 100))  # 24
print(pow(2, 10) % 100) # 24
```

## divmod(a, b)

Для целых аргументов возвращается кортеж с целочисленным результатом деления и остатком от деления.

```python
print(divmod(10, 3)) # (3, 1) 
print((10 // 3, 10 % 3)) # (3, 1)
```

## round(number\[, ndigits\])

Возвращает число округлённое с точностью **ndigits** знаков после запятой.

```python
print(round(2.1234, 2)) # 2.12
print(round(2.7, 2)) # 2.7
```

Если **ndigits** пропущено или равно **None**, функция возвращает ближайшее к **number** целое число.

```python
print(round(2.11)) # 2
print(round(2.5)) # 2
print(round(2.7)) # 3
```

## oct(x)

Конвертирует целое число в строку с восьмеричным числом с префиксом "0o".

```python
print(oct(8)) # 0o10
print(oct(-58)) # -0o72
```

Если **x** не объект типа **int** то используется метод `__index__()` возвращающий целое число.

```python
class MyNumber():
    def __init__(self, num):
        self.num = num

    def __index__(self):
        return round(self.num)

x = MyNumber(9.2)
print(oct(x)) # 0o11
```

## bin(x)

Конвертирует целое число в строку с двоичным числом с префиксом "0b".

```python
print(bin(8)) # 0o1000
print(bin(-58)) # -0b111010
```

Если **x** не объект типа **int** то используется метод `__index__()` возвращающий целое число.

```python
class MyNumber():
    def __init__(self, num):
        self.num = num

    def __index__(self):
        return round(self.num)

x = MyNumber(9.2)
print(bin(x)) # 0b1001
```

## hex(x)

Конвертирует целое число в строку с шестнадцатеричным числом с префиксом "0x".

```python
print(hex(256)) # 0x100
print(hex(-58)) # -0x3a
```

Если **x** не объект типа **int** то используется метод `__index__()` возвращающий целое число.

```python
class MyNumber():
    def __init__(self, num):
        self.num = num

    def __index__(self):
        return round(self.num)

x = MyNumber(9.2)
print(hex(x)) # 0b1001
```

## Ссылки

- [Built-in Functions](https://docs.python.org/3/library/functions.html)
