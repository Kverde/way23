---
title: "Выключение Intel RST в BIOS"
date: "2023-09-27"
categories:
  - "BIOS"
tags:
  - "RST"
---

# {{ $frontmatter.title }}

Для установки Ubuntu или основанных на нём дистрибутивов в BIOS должен быть выключен [Intel RST](https://help.ubuntu.com/rst/) (Intel Rapid Storage Technology). В разных ноутбуках операция выключения производится по разному.

## Acer Predator Triton 300

Для входа в BIOS удерживайте клавишу `F2` во время запуска ноутбука. После запуска BIOS перейдите на вкладку `Main` и нажмите `ctrl+S`, после этого появиться строка с параметром `SATA Mode`, установите значение этого параметра `AHCI`.