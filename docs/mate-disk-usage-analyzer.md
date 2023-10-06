---
title: "Анализ занятого места на диске через MATE Disk Usage Analyzer"
date: "2023-10-06"
categories:
  - "Программы"
tags:
  - "MATE"
---

# {{ $frontmatter.title }}

[MATE Disk Usage Analyzer](https://software.opensuse.org/package/mate-disk-usage-analyzer)  — программа для анализа занятого места на диске. Она в удобном виде отображает какие файлы и каталоги занимают больше всего места.

![](images/mate/disk-analyzer01.png)

Чтобы сканировать всю файловую систему вберите в главном меню пункт `Analyzer` — `Scan Filesystem`. Такое же действие можно сделать через панель инструментов.

![](images/mate/disk-analyzer02.png)

![](images/mate/disk-analyzer03.png)

В настройках `Edit` — `Preferences` можно исключить часть разделов из сканирования.

![](images/mate/disk-analyzer04.png)

Кроме отображения дерева каталогов с сортировкой по размету, доступно два вида визуализации: Treemap и Ring Chart.

![](images/mate/disk-analyzer05.png)

![](images/mate/disk-analyzer06.png)

На Treemap диаграмме в виде ячеек отображаются узлы дерева. В дереве, из примера ниже, у каждого узла указан размер, например, `c3` — узел `c` с размером `3`. Размер внутренних узлов равен сумме всех дочерних. В соответствующей этому дереву Treemap диаграмме для каждого листового узла появляется своя ячейка. Размер ячейки пропорционален размеру узла.

![](images/mate/disk-analyzer07.png)

В документации есть ссылка на [историю диаграмм вида Treemap](http://www.cs.umd.edu/hcil/treemap-history/index.shtml).
