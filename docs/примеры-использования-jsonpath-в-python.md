---
title: "Примеры использования JSONPath в Python"
date: "2020-03-06"
categories: 
  - "Python"
tags: 
  - "Python"
  - "перевод"
---

# {{ $frontmatter.title }}

Перевод статьи [Python JSONPath Examples](https://www.journaldev.com/33265/python-jsonpath-examples).

## Что такое JSONPath?

JSONPath это язык запросов к JSON. Он очень похож на язык запросов XPath для XML. Вы формируете строку запроса и получаете нужное значение. Такое подход экономит память, так как необходимости разбазарить JSON полностью.

## Библиотеки Python для JSONPath

Существует много JSONPath-библиотек для Python.

[jsonpath](https://pypi.org/project/jsonpath/): это портированая из Perl и JavaScript версия JSONPath.

[jsonpath-rw](https://pypi.org/project/jsonpath-rw/): полностью Python-реализация JSONPath. Объект выражения JSONPath это объект первого класса, простой для анализа, преобразования, обработки, печати и расширения. Модуль [jsonpath-rw-ext](https://pypi.org/project/jsonpath-rw-ext/) расширяет функционал библиотеки.

[jsonpath-ng](https://pypi.org/project/jsonpath-ng/): окончательная реализация JSONPath цель которой соответствие стандарту, включая арифметические и бинарные сравнения. Эта библиотека соединяет модули `jsonpath-rw` и `jsonpath-rw-ext` и расширяет их.

## Какую библиотеку использовать?

Модуль `jsonpath-ng` самый развитый и написан на чистом Python. Он поддерживает Python 2 и Python 3. Мы будем использовать этот модуль для примеров.

Установка модуля:

```
pip3.7 install jsonpath-ng
```

## Разбор JSON

Рассмотрим пример разбора JSON и получения значения требуемого атрибута.

```python
import json

from jsonpath_ng import jsonpath, parse

json_string = '{"id":1, "name":"Pankaj"}'
json_data = json.loads(json_string)

jsonpath_expression = parse('$.id')

match = jsonpath_expression.find(json_data)

print(match)
print("id value is", match[0].value)
```

Вывод программы:

```
[DatumInContext(value=1, path=Fields('id'), context=DatumInContext(value={'id': 1, 'name': 'Pankaj'}, path=Root(), context=None))]
id value is 1
```

Мы используем модуль `json` для преобразования строки JSON в словарь.

## Расписка списка

Ключи JSON могут содержать списки значений. Мы можем использовать JSONPath для анализа списоков и получения значений.

Предположим, что у нас есть JSON-файл `db.json` с следующим содержимым:

```json
{
  "employees": [
    {
      "id": 1,
      "name": "Pankaj",
      "salary": "10000"
    },
    {
      "name": "David",
      "salary": "5000",
      "id": 2
    }
  ]
}
```

Мы хотим разобрать этот JSON-файл и получить список идентификаторов сотрудников.

```python
import json
from jsonpath_ng import jsonpath, parse

with open("db.json", 'r') as json_file:
    json_data = json.load(json_file)

print(json_data)

jsonpath_expression = parse('employees[*].id')

for match in jsonpath_expression.find(json_data):
    print(f'Employee id: {match.value}')
```

Вывод программы:

```
{'employees': [{'id': 1, 'name': 'Pankaj', 'salary': '10000'}, {'name': 'David', 'salary': '5000', 'id': 2}]}
Employee id: 1
Employee id: 2
```

Рекомендовано к чтению [Python f-strings – PEP 498 – Literal String Interpolation](https://www.journaldev.com/23592/python-f-strings-literal-string-interpolation).

Для получения данных в виде списка используйте генератор списков:

```python
emp_ids_list = [match.value for match in jsonpath_expression.find(json_data)]
print(emp_ids_list)  # [1, 2]
```

## Заключение

JSONPath предоставляет простой способ разбора JSON и извлечения конкретных значений. Это очень полезно когда данных в JSON много, а нам интересны только некоторые значения.
