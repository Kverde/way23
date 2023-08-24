---
title: "Flameshot — скриншоты в Linux"
date: "2022-06-29"
categories: 
  - "Блог"
tags: 
  - "way23"
---

# {{ $frontmatter.title }}

[Flameshot](https://flameshot.org) программа аналогичная [Joxi](http://way23.ru/joxi-быстрое-создание-скриншотов.html) для быстрого создания скриншотов. На скриншоты можно сразу внести пометки, добавить текст или стрелки. В Ubuntu устанавливается через `Ubuntu Software`.

## Настройка глобальной горячей клавиши

Настроим открытие Flameshot при нажатии на `PrtSqr`. Для этого нужно убрать с этой клавиши стандартную команду и назначить новую.

Откройте настройки и выберите раздел `Keyboard Shortcuts`, в поиск введите `print`, выберите пункт `Save a screenshot to Pictures`. 

![](images/flameshot/flameshot_02.png)

В появившемся окне нажмите `Backspace`, чтобы отключить горячую клавишу и затем кнопку `Set`.

![](images/flameshot/flameshot_03.png)

![](images/flameshot/flameshot_04.png)

Сотрите значение в писке, прокрутите список вниз и нажмите кнопку `+` для добавления новой клавиши.

![](images/flameshot/flameshot_05.png)

Заполните поля:

* Name: Flameshot
* Command: `flameshot gui`
* Горячую клавишу установите `PrnScr`

![](images/flameshot/flameshot_06.png)

Закройте настройки и проверьте работу, по кнопке `PrnScr` должен появиться интерфейс Flameshot.

## Ссылки

* [Инструкция к Flameshot](https://flameshot.org/docs/guide/key-bindings/)

