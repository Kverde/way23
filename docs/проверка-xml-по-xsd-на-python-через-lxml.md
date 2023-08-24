---
title: "Проверка xml по xsd на Python через lxml"
date: "2020-01-23"
categories: 
  - "Python"
tags: 
  - "Python"
  - "xml"
  - "xsd"
---

# {{ $frontmatter.title }}

В библиотеке [lxml](https://lxml.de/index.html) содержаться [функции для проверки xml по xsd](https://lxml.de/validation.html). Пример кода:

```python
from lxml import etree

# Загрузка xsd схемы
xsd_file_name = r'schema.xsd'
schema_root = etree.parse(xsd_file_name)
schema = etree.XMLSchema(schema_root)

# Загрузка xml

xml_filename = 'file.xml'
xml = etree.parse(xml_filename)

# Проверка

if not schema.validate(xml):
    print(schema.error_log)
```

Метод `validate` возвращает `False` если xml не проходит проверку по схеме. Свойство `error_log` содержит список несоответствий xml схеме из xsd.
