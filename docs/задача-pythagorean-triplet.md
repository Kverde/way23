---
title: "Задача Pythagorean Triplet"
date: "2020-02-06"
categories: 
  - "Python"
  - "Алгоритмы"
tags: 
  - "математика"
  - "Алгоритмы"
---

# {{ $frontmatter.title }}

## Условие

Дано число \[latex\]N\[/latex\]. Найти все пифагоровы тройки такие что \[latex\]a + b + c = N\[/latex\]. Пифагоровы тройки удовлетворяют условиям \[latex\]a^2 + b^2 = c^2\[/latex\] и \[latex\]a \\lt b \\lt c\[/latex\].

## Решение

Простейшее решение перебором даёт сложность \[latex\]O(n^2)\[/latex\]:

```псевдокод
for a in range(n):
  for b in range(a + 1, n):
    c = N - a - b
    if is_triplet(a, b, c):
      add_result(a, b, c)
```

Оптимизации на сокращение перебора в случае когда он дальше не имеет смысла не влияют на порядок роста.

Эту же задачу можно решить за \[latex\]O(n)\[/latex\]. Из условий задачи следуют два уравнения:

- \[latex\]a + b + c = N\[/latex\]
- \[latex\]a^2 + b^2 = c^2\[/latex\]

\[latex\]N\[/latex\] является константой. Примем так же за константу \[latex\]a\[/latex\]. Остаётся система из двух уравнений с двумя неизвестными. Последовательно решаем её.

- \[latex\]c = N - a - b\[/latex\] (1)
- \[latex\]c^2 - b^2 = a^2\[/latex\]
- \[latex\](c - b)(c + b) = a^2\[/latex\] (2)
- \[latex\](n - a - b - b)(n - a - b + b) = a^2\[/latex\] (подставляем 1 в 2)
- \[latex\](n - a - 2b)(n - a) = a^2\[/latex\]
- \[latex\]n^2 - an - 2nb - an + a^2 + 2ab = a^2\[/latex\]
- \[latex\]n^2 - 2an - 2nb + 2ab = 0\[/latex\]
- \[latex\](2a - 2n)b = 2an - n^2\[/latex\]
- \[latex\]b = \\frac{2an - n^2}{2a - 2n}\[/latex\]
- \[latex\]c = N - a - b\[/latex\]

Используя формулы для вычисления \[latex\]b\[/latex\] и \[latex\]c\[/latex\] в цикле по \[latex\]a\[/latex\] находим все пифагоровы тройки.

```python
def triplets_with_sum(number):
    res = []
    n = number
    for a in range(1, number):
        b = (2 * a * n - n ** 2) / (2 * a - 2 * n)
        c = n - b - a

        if round(b) == b and a < b < c:
            res.append([a, b, c])

    return res
```
