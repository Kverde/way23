---
title: "Отключение напоминания про Mi Messaging в Android"
date: "2023-09-29"
categories:
  - "Android"
tags:
  - "Mi Messaging"
---

# {{ $frontmatter.title }}

На Redmi Note, при просмотре сообщений SMS всегда появляется предложение включить Mi Messaging. Чтобы отключить это предложение проделайте следующие действия.

Установите [ADB AppControl](https://adbappcontrol.com/ru/). Эта программа работает только на Windows, можно установить внутрь [VirtualBox](virtualbox-создание-и-настройка-виртуальной-м.md).

Включите режим отладки по USB на телефоне: `Settings` — `Additional settings` — `Developer options` — `USB debugging`.

Запустите ADB AppControl. Подключите телефон по USB к компьютеру, если используете VirtualBox то пробросьте USB в виртуальную машину, отсоедините шнур USB от компьютера и подсоедините снова.

В телефоне появится запрос на одобрение отладки. После одобрения, ADB AppControl должен будет найти подключенный телефон. Включите отладку по wifi кнопкой в правом верхнем углу ADB AppControl и отсоедините кабель.

В ADB AppControl найдите приложение `com.xiaomi.simactivate.service` и отключите его.

Совет найден на [форуме](https://4pda.to/forum/index.php?showtopic=1027208&st=60).
