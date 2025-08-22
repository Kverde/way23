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
3. Ввести следующий текст в консоль и нажать `Enter`.

```
document.addEventListener('copy', function(e) {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    
    // Если ничего не выделено — выходим
    if (!selectedText) return;

    // Получаем HTML выделенного фрагмента
    const range = selection.getRangeAt(0);
    const clonedSelection = range.cloneContents();
    const div = document.createElement('div');
    div.appendChild(clonedSelection);
    const selectedHtml = div.innerHTML;

    // Устанавливаем и plain, и html
    e.clipboardData.setData('text/plain', selectedText);
    e.clipboardData.setData('text/html', selectedHtml);

    // Важно: предотвращаем стандартное поведение,
    // чтобы не сработал старый обработчик (с добавлением ссылки)
    e.preventDefault();

    // Выделение НЕ должно исчезнуть!
}, true);
```

После этого текст будет копироваться с форматированием.

![](/images/copy-caute.png)

Другой, более простой вариант, использовать зеркало [caute.tk](http://www.caute.tk/).
