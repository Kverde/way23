---
title: "Typora. Разрывы страниц"
date: "2019-09-18"
categories: 
  - "Программы"
tags: 
  - "перевод"
  - "typora"
---

# {{ $frontmatter.title }}

Перевод страницы документации Typora [Page Breaks](http://support.typora.io/Page-Breaks/).

## Автоматический разрыв страницы

Чтобы экспортировать PDF с разрывами страниц по заголовкам, откройте каталог тем, и отредактируйте css нужных элементов:

```css
@media print {
  h1 {
    page-break-before: always;
  }

  h1:first-of-type {
    page-break-before: avoid;
  }
}
```

Теперь при экспорте, новая страница будет создаваться перед каждым элементом `h1`, исключая первый.

## Принудительный разрыв страницы

Чтобы вставить принудительный разрыв страницы, введите HTML

```html
<div style="page-break-after: always;"></div>
```
