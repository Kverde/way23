---
title: "Как скопировать форматированный текст с caute.ru"
date: "2021-09-28"
categories:
  - "Другое"
---

# {{ $frontmatter.title }}

При копировании текста с [caute.ru](http://caute.ru/) и вставке его в Word или GoogleDocs теряется формирование: выделения текста, заголовки и др. Способ как скопировать текст с форматированием:

1. Открыть страницу сайта в Google Chrome;
2. Нажать `ctrl+shift-j`;
3. Ввести в консоль текст `document.removeEventListener('copy', addLink);` и нажать `Enter`.

После этого текст будет копироваться с форматированием.

![](images/copy-caute.png)

Другой, более простой вариант, использовать зеркало [caute.tk](http://www.caute.tk/).
