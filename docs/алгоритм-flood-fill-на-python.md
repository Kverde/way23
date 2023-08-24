---
title: "Алгоритм Flood fill на Python"
date: "2020-03-19"
categories: 
  - "Python"
tags: 
  - "Алгоритмы"
---

# {{ $frontmatter.title }}

Алгоритм [Flood fill](https://en.wikipedia.org/wiki/Flood_fill) возвращает замкнутую область внутри массива. Кроме областей связанных с графикой, алгоритм может применяется для поиска замкнутых областей в игре Го и для сходных задач.

Алгоритм основан на рекурсии. Проверяется заданный элемент массива, затем процедура вызывается для всех соседних элементов:

```
Flood_fill(node)
  Если node не подходит по условиям то завершить функцию

  Обработать node

  Вызывать Flood_fill для всех соседних с node элементов
```

Реализация на Python:

```Python
F_SPACE = 0
F_WALL = 1

field = [
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 1, 0, 0]
]

def flood_fill(field, x, y, w, h,  res):
    if x < 0 or y < 0 or x >= w or y >= h:
        return

    if field[y][x] == F_WALL:
        return

    if (x, y) in res:
        return

    res.add((x, y))

    flood_fill(field, x - 1, y, w, h, res)
    flood_fill(field, x + 1, y, w, h, res)
    flood_fill(field, x, y + 1, w, h, res)
    flood_fill(field, x, y - 1, w, h, res)

res = set()

res.clear()
flood_fill(field, 0, 0, 4, 4, res)
print(res) # {(0, 0)}

res.clear()
flood_fill(field, 1, 0, 4, 4, res)
print(res) # set()

res.clear()
flood_fill(field, 1, 1, 4, 4, res)
print(res) # {(1, 2), (3, 1), (2, 1), (1, 1), (0, 3), (0, 2)}
```

Алгоритм легко модифицируется для случая с трёхмерным массивом или если нужно учитывать соседние элементы по диагоналям.
