---
title: "Typora. Список задач"
date: "2019-09-16"
categories: 
  - "Программы"
tags: 
  - "перевод"
  - "typora"
---

# {{ $frontmatter.title }}

Перевод страницы документации Typora [Task List — Easy Way to Record Todos](https://support.typora.io/Task-List/).

## Базовое использование

Введите следующий markdown и он будет отображён в виде списка задач.

```
- [ ] Эта задача не выполнена.
- [x] Эта задача выполнена.
```

## Быстрый способ изменит статус

Просто нажмите на флажок текущей задачи, или выберите пункт меню **Paragraph → Task Status**. Доступна настройка горячих клавиш для этого действия.

## Вычерчивание завешенных задач

Для того чтобы завешенные задачи автоматически зачёркивались, как здесь

![Список задач в Typora](images/typora_task_list.png)

Добавьте следующий пользовательский CSS:

```
.task-list-done {
    /* styles for completed tasks */
    text-decoration: line-through;
}
.task-list-not-done {
    /* styles for incomplete tasks */
}
```

Вы можете также добавить CSS для уменьшения контрастности заверенных задач добавив что-то вроде `color: #777` в селектор `.task-list-done`.

Как добавить этот CSS, пожалуйста, читайте [Add Custom CSS](https://support.typora.io/Add-Custom-CSS/).
