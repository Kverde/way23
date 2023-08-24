---
title: "Чекл-лист по чистке VK"
date: "2021-10-01"
categories:
  - "Информационная безопасность"
tags:
  - "VK"
---

# {{ $frontmatter.title }}

[[TOC]]

Для того чтобы задуматься об удалении информации из VK достаточно обратить внимание на [политику Mail.ru Group в области персональных данных](https://habr.com/ru/post/583102/).  Полностью удалить информацию с серверов, конечно, не получиться, но можно удалить то, что возможно, из открытого доступа.

## Чек-лист

1. Информация о себе
2. Посты на странице и репосты
3. [Личные сообщения и чаты](https://vk.com/im)
4. [Группы](https://vk.com/groups), [Удаление созданных групп](https://vk.com/faq18382)
5. [Друзья](https://vk.com/friends)
6. [Фотографии](https://vk.com/albums2285329)
7. [Аудиозаписи](https://vk.com/audios2285329)
8. [Лайки](https://vk.com/feed?section=likes)
9. [Комментарии](https://vk.com/feed?section=comments)
10. [Файлы](https://vk.com/docs)
11. [Закладки](https://vk.com/bookmarks)
12. [Видеозаписи](https://vk.com/video)
13. [Клипы](https://vk.com/clips2285329)

## Настройки

В настройках, прежде всего, включите двухфакторную аутентификацию:

```
Настройки — Безопасность — Подтверждение входа
```

и установите максимальные настройки приватности

```
Настройки — Приватность
```

## Автоматизация

Если постов, лайков или другой информации было много, то удаление займет время. Можно попробовать автоматизировать, но VK будет этому сопротивляться, как минимум нужно будет постоянно вводить капчу. Пример скрипта для удаления лайков (основа взята [здесь](https://knep.ru/tech/delete-vk-likes.html)):

```
// Открыть страницу с лайками
// Прокрутить вниз до конца
// Нажать ctrl+shift+j
// Скопировать код в консоль

(function () {
'use strict'; if (!confirm('Удалить все лайки?')) return;
var deletePostLink = document.body.querySelectorAll('a.like_btn[onclick^="Likes.toggle"]');
for (var i = 0; i < deletePostLink.length; i++)
{ deletePostLink[i].click(); }
alert(deletePostLink.length + ' likes deleted'); }
());

PostBottomActionLikeIcon PostBottomActionLikeIcon--active

(async function () {
'use strict';
const deletePostLink = document.body.querySelectorAll('div.PostBottomActionLikeIcon--active');
if (!confirm('Удалить ' + deletePostLink.length + ' лайков?')) return;
let count = 0;
for (let i = 0; i < Math.min(deletePostLink.length, 100); i++)
{ deletePostLink[i].click();
  await new Promise(r => setTimeout(r, 600));
  console.log('delete like ' + i);
  while(true) {
    const box_title = document.body.querySelector('.box_title');
    await new Promise(r => setTimeout(r, 100));
    if (!box_title) {
      break;
    }
  }
  count += 1;
}
alert(count + ' likes deleted'); }
());

```

## Наполнение новыми данными

После очистки варианта два: либо отказаться от VK, либо если он нужен то продолжить использовать. Во втором случае лучше наполнить его подписками на развлекательные паблики и группы, сделать несколько репостов.
