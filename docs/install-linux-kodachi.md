---
title: "Установка Linux Kodachi"
date: "2022-03-31"
categories: 
  - "Информационная безопасность"
  - "Операционные системы"
tags: 
  - "Kodachi"
---

# {{ $frontmatter.title }}

По этой инструкции вы сможете установить и настроить Linux Kodachi в двух вариантах: с зашифрованным разделом для информации и с полностью зашифрованной операционной системой.

## Установка с зашифрованным разделом для данных

Способ описанный ниже позволяет поставить Linux Kodachi на флешку, при этом операционная система будет неизменяемая (все обновления и настройки будут стираться после перезагрузки) но будет доступен зашифрованный раздел для хранения информации.

Инструкция основана на описании на [сайте Linux Kodachi](https://www.digi77.com/linux-kodachi/) в разделе Persistence. 

1. Скачать последнюю версию [дистрибутива Linux Kodachi](https://sourceforge.net/projects/linuxkodachi/files/latest/download).

2. Скачать программу для создания загрузочных дисков  [YUMI](https://www.pendrivelinux.com/yumi-multiboot-usb-creator/).

3. Установите программу для разметки USB накопителя на разделы. Например, бесплатную [AOMEI Partition Assistant](https://www.diskpart.com/free-partition-manager.html), далее скриншоты будут показаны из неё.

4. Разделите флешку на два раздела используя программу из пункта 3. Сначала удалите все разделы.

![Удаление разделов](images/install-kodachi/linux_kodachi_make_partitions_1.png)

4.1 Создайте первый раздел и отформатируйте его в FAT32, назовите его `LKOS` (Linux Kodachi OS) и установить Primary Partition. Это будет диск для операционной системы.

![Содание раздела на USB-накопителе](images/install-kodachi/linux_kodachi_make_partitions_2.png)

![Содание раздела на USB-накопителе](images/install-kodachi/linux_kodachi_make_partitions_3.png)

4.2 Второй раздел отформатируйте так же в FAT32, и назовите `LK0S` (Обратите внимание что вместо буквы «O» используется ноль) и установить Logical Partition. Это будет диск для данных.

![Содание раздела на USB-накопителе](images/install-kodachi/linux_kodachi_make_partitions_4.png)

5. Запустите программу YUMI. Выберите нужный USB-накопитель и iso образ системы и запустите установку.

![Настройка YUMI](images/install-kodachi/linux_kodachi_yumi.png)

6. Запустите Linux Kodachi с флешки используя настройки BIOS.

7. После запуска нажмите на кнопку в левом нижнем углу экрана и выберите в меню `Settings -> Disks`. Выберите раздел раздел `LK0S` и отформатируйте его с отмеченным переключателем `Password protect volume (LUKS)`.

## Зашифрованная операцонная система

1. Скачать последнюю версию [дистрибутива Linux Kodachi](https://sourceforge.net/projects/linuxkodachi/files/latest/download).

2. Скачать программу для создания загрузочных дисков  [Rufus](https://rufus.ie/ru/).

3. Запустите программу Rufus. Выберите нужный USB-накопитель и iso образ системы и запустите установку.

![Настройка Rufus](images/install-kodachi/linux_kodachi_rufus.png)

4. Запустите Linux Kodachi с флешки в режиме `Full RAM mode`, режим выбирается при загрузке операционной системы

5. На рабочем столе запустите приложение `Install_Kodachi_Offline.desktop`. Следуйте рекомендациям диалога установки системы.

5.1. Окно `Welcome`. Выберите язык системы

5.2. Окно `Keyboard layout`. Выберите раскладку клавиатуры

5.3. Окно `Wireless`. Не подключайте интернет, нажмите, `Continue`

5.4. Окно `Update and other software`. Оставьте без изменений.

5.5. Окно `Installation type`. Выберите `Erase disk and install Linux` и отметьте `Encrypt the new Linux installation for security`.

5.6. Окно `Choose a security key`. Установите пароль к зашифрованному разделу и отметьте переключатель `Overwrite empty disc space`.

5.7. Окно `Erase disk and install Linux`. Выберите в выпадающем диске флешку. Внимание! Неверный выбор сломает основную систему на устройстве. Может появится предупреждение об изменения на диске, нажимайте `Continue`.

5.8. Окно `Where are you?`. Пропустите окно.

6. Окно `Who are you?`. Введите пароль пользователя и установите переключатель в значение `Require my password to log in`.

Перезапустите систему.
