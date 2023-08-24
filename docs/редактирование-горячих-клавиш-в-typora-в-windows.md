---
title: "Редактирование горячих клавиш в Typora в Windows"
date: "2020-07-25"
categories: 
  - "Программы"
tags: 
  - "typora"
---

# {{ $frontmatter.title }}

Добавим горячую клавишу к пункту меню `Paragraph - Footnotes`:

![Typora Footnotes](images/typora_hotkey01.png)

Откройте настройки командой `File - Preferences`:

![Открыть настройки Typora](images/typora_hotkey02.png)

Нажмите кнопку `Open Advanced Settings` в группе `General`:

![Открыть дополнительные настройки Typora](images/typora_hotkey03.png)

Откроется папка с файлами дополнительных настроек, в ней откройте файл `conf.user.json`:

![Файл дополнительных настроек Typora](images/typora_hotkey04.png)

Добавьте название пункта меню и горячие клавиши по примеру:

```json
  // Custom key binding, which will override the default ones.
  "keyBinding": {
    // for example: 
    // "Always on Top": "Ctrl+Shift+P"
    "Footnotes": "Ctrl+F"

  },
```

Перезапустите Typora, горячая клавиша будет работать и отображться в меню:

![Новая горячая клавиша Typora](images/typora_hotkey05.png)

Такими способом можно редактировать и другие горячие клавиши.

## Ссылки

- [Документация Typora - Shortcut Keys](https://support.typora.io/Shortcut-Keys/)
