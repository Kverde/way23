---
title: "Настройка OBS Studio для записи видео с рабочего стола на Windows 10 на ноутбуке ASUS"
date: "2020-05-14"
categories: 
  - "Программы"
tags: 
  - "obs-studio"
---

# {{ $frontmatter.title }}

Сразу после установки [OBS Studio](https://obsproject.com/) вместо записи рабочего стола отображается чёрный экран. Проблема воспроизводится на ноутбуках ASUS (видеокарта Nvidia). Описание решения на [официальном сайте OBS Studio](https://obsproject.com/forum/threads/laptop-black-screen-when-capturing-read-here-first.5965/).

Для решения проблемы открываем `Graphics Settings`:

![Открываем графические настройки](images/obs_01.png)

В выпадающем списке выбираем `Classic App`, нажимаем кнопку `browse` и выбираем программу OBS Studio, по умолчанию располагается по пути

```
C:\Program Files\obs-studio\bin\64bit\obs64.exe
```

или по пути по которому программа была установлена:

![Выбор приложения OBS Studio](images/obs_02.png)

Нажимаем `Options`:

![Настройки для OBS Studio](images/obs_03.png)

В появившемся окне выбираем режим и нажимаем кнопку `Save`:

![Выбор режима для приложения](images/obs_04.png)

Если запланировано использовать захват экрана для захвата рабочего стола то выберите `Power Saving`.

Если запланировано снимать видео из игр или использовать кодировщик NVENC выберите `High Performance`.
