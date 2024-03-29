---
title: "Ликбез SVN"
date: "2019-08-14"
categories: 
  - "Системы контроля версий (VCS)"
tags: 
  - "svn"
  - "tortoisesvn"
  - "разработка-по"
---

# {{ $frontmatter.title }}

В компании где я работаю, при вводе новых разработчиков в команду, бывали сложности с освоением SVN. Для ускорения ввода новых разработчиков в проект мы стали применять поход который назвали Ликбез SVN. Он заключается в следующем:

1. Сформирован набор последовательных действий в TortoiseSVN. Дополнительно приложено видео с записью этих действий.
2. Разработчик пробует проделать действия самостоятельно, разбирается как работает то что не понятно.
3. Новый разработчик демонстрирует более опытному как выполнять эти действия. Бывают дополнительные вопросы, обсуждения или пояснения.
4. Если видно что тема не понята на достаточном уровне, то проводится "пересдача".
5. После успешной демонстрации разработчику рекомендуется проделать все действия ещё раз самостоятельно.

В среднем, даже без предварительной работы с системами контроля версий, такой ликбез проходиться за день-два. После этого вопросов по работе с SVN обычно не возникает.

## Ликбез SVN

Все действия выполняются в TortoiseSVN.

1. Создать репозиторий с названием **rep** (через TortoiseSVN) со стандартной структурой каталогов.
2. Выгрузить рабочую копию из репозитория **rep** ветка **trunk**.
3. Сделать четыре фиксации в рабочую копию (фиксируются только нужные файлы, лишние добавляются в список игнорирования).
    1. Новый проект на Delphi (GUI приложение).
    2. Добавлена кнопка.
    3. Добавлен обработчик для кнопки с **ShowMessage**.
    4. Добавлена вторая кнопка со вторым обработчиком с **ShowMessage**.
4. Показать как посмотреть какая ветка выгружена в рабочей копии.
5. Показать как посмотреть какая ревизия выгружена в рабочей копии.
6. Показать как посмотреть изменения во 2-ой фиксации.
7. Показать как посмотреть какие изменения внесены в рабочую копию или что изменений нет.
    1. Внести изменения в файлы в рабочей копии.
    2. Убрать изменения в рабочей копии.
8. Выгрузить в рабочую копию ревизию 3.
9. Обновить рабочую копию до последней ревизии.
10. Добавить ветку в репозиторий.
11. Показать как посмотреть список веток в репозитории.
12. Переключать рабочую копию на другую ветку.
13. Добавить две фиксации в ветке.
    1. Изменить текст внутри **ShowMessage**.
    2. Добавить третью кнопку.
14. Убрать изменения в одной из фиксаций в **trunk**.
15. Сделать слияние из ветки в **trunk** двух ревизий, каждую ревизию сливать отдельной фиксацией.
16. Показать как посмотреть полную историю изменений во всех ревизиях со всех веток.
17. Показать как воспроизвести конфликт в рабочей копии при выполнении обновления.
18. Показать как воспроизвести конфликт в рабочей копии при выполнении слияния из ветки.
19. Показать как разрешить конфликт.
20. Показать как посмотреть кто последний менял отдельные строки в файле.
21. Переименовать файл с сохранением истории изменений файла.
    1. Переместить файл в новый каталог с сохранением истории изменений файла.
22. Показать как посмотреть свойства (svn property) репозитория.
23. Показать как посмотреть свойства (svn property) файла.
24. Подключить один репозиторий к другому через свойство svn:externals ссылка должна быть на определенную ревизию, не на **HEAD**.
25. Зафиксировать изменения в подключенном репозитории и обновить ссылку в основном.
26. Создать патч (заплатку).
27. Применить патч (заплатку).
