---
title: "OCR через Tesseract на Linux"
date: "2025-03-02"
categories: 
  - "Программы"
tags: 
  - "Tesseract"
  - "ImageMagic"
---

# {{ $frontmatter.title }}

[Tesseract](https://github.com/tesseract-ocr/tesseract) — свободное средство для распознавания текста.

Если книга для которой нужно распознать текст в формате PDF, то сначала нужно конфертировать её в набор изображений. Для этого можно использовать соманду `convert` из [ImageMagic](https://imagemagick.org).

```
convert -density 300 +adjoin source.pdf -quality 100 img-%04d.png
```

Для установки Tesseract используйте следующие команды ([список и коды языков](https://tesseract-ocr.github.io/tessdoc/Data-Files-in-different-versions.html)).

```
sudo apt install tesseract-ocr

sudo apt install tesseract-ocr-rus
sudo apt install tesseract-ocr-eng
sudo apt install tesseract-ocr-epo
```

Чтобы оцифровать текст из большого количества изображений проще всего поместить названия файлов изображений в `list.txt` (например, командой `ls`) и затем запустить оцифровку.

```
tesseract list.txt out -l rus+eng
tesseract list.txt out -l epo
```