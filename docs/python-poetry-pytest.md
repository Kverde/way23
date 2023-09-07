---
title: "Шаблон проекта Python с Poetry и pytest"
date: "2023-09-07"
categories:
  - "Python"
tags:
  - "Poetry"
  - "pytest"
---

# {{ $frontmatter.title }}

Для установки [pytest](https://docs.pytest.org/) в виртуальное окружение выполните команды:

```
poetry init
poetry add -D pytest
```

При этом `pytest` будет добавлен в зависимости времени разработки.

Тесты будут находится в каталоге `tests`, этот каталог должен быть пакетом Python, поэтому в нем необходим файл `__init__.py`. Итоговая структура каталогов:

```
.
├── main.py
├── my_math
│   ├── mul.py
├── poetry.lock
├── pyproject.toml
└── tests
    ├── __init__.py
    ├── test_mul.py
    └── test_sum.py
```

Обращение к модулям проекта из файлов тестов `test_sum.py` и `test_mul.py` происходит следующим образом:

```
from main import sum2

from my_math.mul import mul2
```

Для запуска тестов используйте команду

```
poetry run pytest
```

Эта команда автоматически найдет все файлы с тестами в каталоге `tests` и запустит тесты.

Пример находится в [репозитории pytest-template](https://github.com/Kverde/pytest-template).