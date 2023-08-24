---
title: "Отключение EXIF на телефоне"
date: "2021-10-25"
categories: 
  - "Информационная безопасность"
tags: 
  - "EXIF"
---

# {{ $frontmatter.title }}

Фотографии, сделанные цифровыми фотоаппаратами содержат метаданные: координаты места съемки, информация о камере и об изображении. Для хранения используется формат [EXIF](https://ru.wikipedia.org/wiki/EXIF). Наличие этих данных упрощает [идентификацию пользователя](https://book.cyberyozh.com/ru/chto-mozhno-vyiyasnit-po-fotografii-v-seti-ustanovlenie-lichnosti-ip-adresa-mesta-semki-i-mnogoe-drugoe/), приславшего фотографию. 

Для проверки наличия и просмотра содержимого EXIF сделайте фотографию со смартфона и загрузите на специальный сервис, например, [thexifer.net](https://www.thexifer.net) или [onlineexifviewer.com](https://onlineexifviewer.com).

## Удаление EXIF

Отключите добавление геометки на Android в настройках приложения Camera, название настройки отличается в разных оболочках, но обычно содержит слово «location» или «geo», [инструкции для разных моделей на сайте Google](https://support.google.com/photos/answer/9921876).

Отключить добавление координат в фотографию может быть недостаточно, так как EXIF содержит и другую информация. Удалить EXIF полностью можно с помощью [специального ПО](https://book.cyberyozh.com/ru/prosmotr-izmenenie-i-udalenie-metadannyh-izobrazhenij-v-macos/).