---
title: "Dokku. Переменные окружения"
date: "2017-09-09"
categories: 
  - "Программы"
tags: 
  - "dokku"
---

# {{ $frontmatter.title }}

Обычно приложения требуют некоторых настроек для запуска. В Dokku настройки приложения хранятся в переменных окружения. Переменные окружения могут содержать секретные данные, такие как пароли или ключи от APi, не рекомендуется хранить эти данные в репозитории приложения.

Плагин `config` поддерживает следующие команды для управления переменными:

config (|--global)                                   Display all global or app-specific config vars
config:get (|--global) KEY                           Display a global or app-specific config value
config:set (|--global) KEY1=VALUE1 \[KEY2=VALUE2 ...\] Set one or more config vars
config:unset (|--global) KEY1 \[KEY2 ...\]             Unset one or more config vars

Переменные можно добавлять для каждого приложения отдельно или глобально на все. При совпадении имен выше приоритет у переменные определенных для отдельного приложения.

## Просмотр переменных

Для просмотра списка переменных используйте команды

dokku config my\_app\_name
dokku config --global

## Добавление переменных

Команда добавления

dokku config:set node-js-app ENV=prod 

Можно добавлять сразу несколько переменных

dokku config:set node-js-app ENV=prod COMPILE\_ASSETS=1

Для добавления значения с пробелами используйте кавычки

dokku config:set --global my\_var="with space"

-----> Setting config vars
       my\_var: with space

или экранируйте символы слешем

dokku config:set --global my\_var=with\\ spa\\"ce
-----> Setting config vars
       my\_var: with spa"ce

При добавлении и удалении переменной приложение перезапускается, чтобы этого избежать добавьте флаг `--no-restart`

dokku config:set --no-restart --global my\_var=value 

## Удаление переменных

Команда удаления переменных

dokku config:unset --global my\_var test

-----> Unsetting my\_var
-----> Unsetting test

[Документация Dokku](http://dokku.viewdocs.io/dokku/configuration/environment-variables/)
