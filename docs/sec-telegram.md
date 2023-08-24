---
title: "Настройки приватности Telegram"
date: "2021-10-20"
categories:
  - "Информационная безопасность"
tags:
  - "Telegram"
---

# {{ $frontmatter.title }}

Инструкция по настройке Telegram для повышения приватности. Помните, что мессенджер привязанный к вашему номеру телефона по умолчанию можно считать открытым и настройки это не исправят.

Отключите [видимость телефонного номера](https://book.cyberyozh.com/ru/kak-deanonimiziruyut-oppozicionerov-i-narkotorgovcev-v-telegram/).

```
Settings -> Privacy and Security -> Phone number
```

Отключите [p2p соединения в звонках](https://book.cyberyozh.com/ru/deanonimizaciya-polzovatelej-messendzherov-pri-pomoschi-p2p-soedineniya/).

```
Settings -> Privacy and Security -> Calls -> Peer-to-peer in calls
```

Включите двухфакторную аутентификацию

```
Settings -> Privacy and Security -> Two-step verification
```

## Хранение файлов

Телеграм по умолчанию скачивает и сохраняет все файлы. Чтобы на ПК не попали [вредные файлы](https://book.cyberyozh.com/ru/tajnaya-ugroza-ili-fajly-s-messendzherov/) включите автоматическую очистку каталога с файлами и отключите автоматическую загрузку файлов.

```
Settings -> Advanced -> Download path
Temp folder, cleared on logout or uninstall

Settings -> Advanced -> Automatic media download
Отключить для всех типов файлов
```

Аналогичные настройки есть на мобильных устройствах.
