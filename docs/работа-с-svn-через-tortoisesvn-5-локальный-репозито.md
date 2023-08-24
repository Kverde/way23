---
title: "Работа с SVN через TortoiseSVN. 5. Локальный репозиторий, структура репозитория, перебазирование"
date: "2019-08-12"
categories: 
  - "Системы контроля версий (VCS)"
tags: 
  - "svn"
  - "tortoisesvn"
---

# {{ $frontmatter.title }}

## Локальный репозиторий

TortoiseSVN позволяет создавать хранилище локально, без использования сервера. Такая возможность подходит, например, для экспериментов с SVN.

Для создания репозитория выберите пункт меню **TortoiseSVN — Create repository here** на пустом каталоге.

![TortoiseSVN create repository](images/tortoisesvn_5_01.png)

Создан пустой репозиторий. Удобнее работать с репозиторием со стандартной структурой — с каталогами **trunk**, **branches** и **tags**. Нажмите **Create folder structure**, в появившимся окне, для создания стандартных каталогов.

![TortoiseSVN create repository](images/tortoisesvn_5_02.png)

Чтобы начать пользоваться репозиторием выгружаем рабочую копию. Адрес репозитория отображается в **Repo-browser**:

![TortoiseSVN repo-browser](images/tortoisesvn_5_03.png) ![TortoiseSVN repo-browser](images/tortoisesvn_5_04.png)

## Перебазирование

Адрес сервера с SVN иногда меняется. В этом случае можно выгрузить рабочую копию заново, а старый каталог удалить, если репозиторий большой то выгрузка займет значительное время. Перебазирование позволяет сделать тоже самое и не тратить время на выгрузку репозитория. При перебазировании меняется только адрес репозитория, всё остальное остаётся без изменений.

Предположим каталог с репозиторием переименован с **Rep** на **NewRep**.

![Репоиторий и рабочая копия](images/tortoisesvn_5_05.png)

Соответственно, команда обновления, как и остальные, перестала работать на рабочей копии.

![TortoiseSVn update](images/tortoisesvn_5_06.png)

Применим команду **Relocate**.

![TortoiseSVN Relocate](images/tortoisesvn_5_07.png) ![TortoiseSVN Relocate](images/tortoisesvn_5_08.png)

Изменим адрес репозитория на новый.

![TortoiseSVN Relocate](images/tortoisesvn_5_09.png)

Теперь команда обновления снова работает.

![TortoiseSVN update](images/tortoisesvn_5_10.png)

## Ссылки

- [Документация TortoiseSVN. Создание репозитория](https://tortoisesvn.net/docs/release/TortoiseSVN_ru/tsvn-repository.html#tsvn-repository-create-tortoisesvn).
- [Документация TortoiseSVN. Перебазирование](https://tortoisesvn.net/docs/release/TortoiseSVN_ru/tsvn-dug-relocate.html).
