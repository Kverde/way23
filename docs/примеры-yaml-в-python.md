---
title: "Примеры yaml в Python"
date: "2020-05-29"
categories: 
  - "Python"
tags: 
  - "yaml"
---

# {{ $frontmatter.title }}

YAML — это текстовый формат формат разметки. Для загрузки файлов YAML в Python используется модуль [PyYAML](https://pyyaml.org/). Ниже несколько примеров преобразования структур YAML в структуры Python.

Файлы YAML взяты из [спецификации](https://yaml.org/spec/1.2/spec.html).

## Примеры

Код для загрузки файлов YAML:

```python
import yaml

config = yaml.load(open('config.yaml'), Loader=yaml.Loader)

print(config)
```

## Список

```yaml
- Mark McGwire
- Sammy Sosa
- Ken Griffey
```

```python
['Mark McGwire', 'Sammy Sosa', 'Ken Griffey']
```

## Словарь

```yaml
hr:  65    # Home runs
avg: 0.278 # Batting average
rbi: 147   # Runs Batted In
```

```python
{'hr': 65, 'avg': 0.278, 'rbi': 147}
```

## Словарь списков

```yaml
american:
  - Boston Red Sox
  - Detroit Tigers
  - New York Yankees
national:
  - New York Mets
  - Chicago Cubs
  - Atlanta Braves
```

```python
{'american': ['Boston Red Sox', 'Detroit Tigers', 'New York Yankees'],
 'national': ['New York Mets', 'Chicago Cubs', 'Atlanta Braves']}
```

## Список словарей

```yaml
-
  name: Mark McGwire
  hr:   65
  avg:  0.278
-
  name: Sammy Sosa
  hr:   63
  avg:  0.288
```

```python
[{'name': 'Mark McGwire', 'hr': 65, 'avg': 0.278},
 {'name': 'Sammy Sosa', 'hr': 63, 'avg': 0.288}]
```

## Список списков

```yaml
- [name        , hr, avg  ]
- [Mark McGwire, 65, 0.278]
- [Sammy Sosa  , 63, 0.288]
```

```python
[['name', 'hr', 'avg'], 
 ['Mark McGwire', 65, 0.278], 
 ['Sammy Sosa', 63, 0.288]]
```

## Словарь словарей

```yaml
Mark McGwire: {hr: 65, avg: 0.278}
Sammy Sosa: {
    hr: 63,
    avg: 0.288
  }
```

```python
{'Mark McGwire': {'hr': 65, 'avg': 0.278}, 
 'Sammy Sosa': {'hr': 63, 'avg': 0.288}}
```

## Несколько документов в одном файле

```yaml
# Ranking of 1998 home runs
---
- Mark McGwire
- Sammy Sosa
- Ken Griffey

# Team ranking
---
- Chicago Cubs
- St Louis Cardinals
```

```python
config = yaml.load_all(open('config.yaml'), Loader=yaml.Loader)

for item in config:
    print(item)

# ['Mark McGwire', 'Sammy Sosa', 'Ken Griffey']
# ['Chicago Cubs', 'St Louis Cardinals']
```
