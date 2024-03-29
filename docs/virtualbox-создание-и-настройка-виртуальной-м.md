---
title: "VirtualBox создание и настройка виртуальной машины"
date: "2017-01-29"
categories: 
  - "Операционные системы"
tags: 
  - "virtualbox"
---

# {{ $frontmatter.title }}

![Oracle VirtualBox](images/4d4dcb96ba6b6264dc9d5c776bb93a22.png)

Я использую виртуальную машину для проверки работы новых программ и экспериментов, чтобы не делать рискованные операции на рабочем сервере. [VurtualBox](https://www.virtualbox.org/wiki/Downloads) - программа в которой можно создавать и запускать виртуальные машины. На них можно поставить любую ОС и работать с ней как будто она находится на отдельной машине.

Операционная система на которой установлен VirtualBox называется хостовой. ОС которая выполняется на виртуальной машине - гостевой.

## Настройка VirtualBox

Заходим в настройки и устанавливаем путь в котором будут хранится файлы виртуальных машин. Для одной виртуальной машины желательно иметь свободными на диске от 8гб для Linux и от 20гб для Windows.

![Запуск настроек VirtualBox](images/virtualbox_1.png)

![Установка каталога для виртуальных машин](images/virtualbox_2.png)

## Создание новой виртуальной машины

Запускаем VirtualBox, нажимаем кнопку _Создать_ на панели инструментов.

![Новая виртуальная машина](images/vm_create_1.png)

Вводим название виртуальной машины и выбираем тип операционной системы

![Имя тип системы](images/vm_create_2.png)

Устанавливаем размер оперативной памяти, можно оставить по умолчанию.

![Размер оперативной памяти виртуальной машины](images/vm_create_3.png)

Выбираем создать новый жесткий диск. Жесткий диск для виртуальной машины будет сохранен в виде файла. По умолчанию он сохранится в каталог указанный при настройке VirtualBox.

![Размер жёсткого диска виртуальной машины](images/vm_create_4.png)

Выбор типа жесткого диска. Оставляем значение по умолчанию - VDI.

![Тип образа жёсткого диска](images/vm_create_5.png)

Устанавливаем формат хранения. Я выбираю динамический, он быстрее создается.

![Динамический или фиксированный жеский диск](images/vm_create_6.png)

А вот и выбор пути по которому сохранить файл жесткого диска.

![Путь к файлу жеского диска](images/vm_create_7.png)

## Настройка виртуальной машины

Виртуальная машина создана. Перед установкой операционной системы ВМ требует дополнительной настройки.

![Настройки виртуальной машины](images/vm_create_8.png)

Форма `Сеть->Адаптер 1` изменяем тип подключения на _Сетевой мост_. Это нужно чтобы с гостевой операционной системы был доступен интернет, и одновременно мы могли с хостовой операционной системы обращаться к гостевой по сети.

![Выбор типа сетевой карты виртуальной машины](images/vm_create_9.png)

На форме `Носители` выбираем файл `iso` образа операционной системы которую собираемся устанавливать.

![Установка загрузочного диска](images/vm_create_10.png)
