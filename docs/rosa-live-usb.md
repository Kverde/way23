---
title: "Rosa ImageWriter для создания Live-USB на Linux"
date: "2023-09-28"
categories:
  - "Операционные системы"
tags:
  - "Live-USB"
---

# {{ $frontmatter.title }}

Для того чтобы создать Live-USB или записать операционную систему на флешку, чтобы с неё установить на компьютер нужна специальная программа. [Rosa ImageWrite](https://www.rosalinux.ru/how-to-write/) ([описание программы](http://wiki.rosalab.ru/ru/index.php/ROSA_ImageWriter)) — это такая программа с открытым исходным кодом, она записывает iso-образ операционный системы на USB-флешку.

Для запуска скачайте архив, разорхивируйте его и запустите программу с правами администратора:

```
sudo ./RosaImageWriter 
```

![](images/rosa-image-writer.png)

В интерфейсе программы есть только два поля: путь к iso-образу и флешка для записи образа.
