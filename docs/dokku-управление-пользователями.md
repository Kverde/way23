---
title: "Dokku. Управление пользователями"
date: "2022-06-28"
categories: 
  - "Программы"
tags: 
  - "dokku"
---

# {{ $frontmatter.title }}

При отправке изменений в репозиторий, предпочтительный метод авторизации в Dokku — SSH. Команды для управления ключами:

```
ssh-keys:add <name> [/path/to/key]                 # Add a new public key by pipe or path
ssh-keys:list [--format text|json] [<name>]        # List of all authorized Dokku public ssh keys
ssh-keys:remove [--fingerprint fingerprint|<name>] # Remove SSH public key by name
```

## Просмотр ключей

Для просмотра списка добавленных ключей используйте команду

```
dokku ssh-keys:list
```

Результат:

```
SHA256:ABC123ABC123+abc123abc123Zabc123abcZ123abc NAME="admin" SSHCOMMAND_ALLOWED_KEYS="no-agent-forwarding,no-user-rc,no-X11-forwarding,no-port-forwarding"
```

Результат содержит следующую информацию:

* SSH Key Fingerprint.
* Название ключа (KEY_NAME)
* В параметре `SSHCOMMAND_ALLOWED_KEYS` находится список настроек SSH, опции разделены запятой

Ключ определённого пользователя можно запросить доавив ещё один аргумент:

```
dokku ssh-keys:list admin
```

Параметр `--format` определяет формат вывода, поддверживаются `text` и `json`.

```
dokku ssh-keys:list --format json
```

Параметр работает так же для отдельного пользователя:

```
dokku ssh-keys:list --format json admin
```

## Добавление ключей


Ключи добавляются командой `ssh-keys:add`. Команда вернет отпечаток (fingerprint) ключа.

```
dokku ssh-keys:add KEY_NAME path/to/id_rsa.pub
```

Результат:

```
SHA256:ABC123ABC123+abc123abc123Zabc123abcZ123abc
```

KEY_NAME это имя, которое будет использоваться для ссылок на добавленный ключ. Включение слова `admin` в имя даёт пользователю права на добавление дополнительных ключей удалённо.

KEY_NAME уникальное имя ключа, попытка использовать имя второй раз приведет к ошибке. Пользователь SSH (Git) всегда `dokku` и используется для всех действий.

Администраторы и `root` могут добавлять ключи удалённо добавляя `dokku` в свои команды:

```
cat ~/.ssh/id_rsa.pub | ssh root@dokku.me dokku ssh-keys:add KEY_NAME
```

Если вы используете Vagrant, то вы можете так же использовать `vagrant-acl-add`:

```
cat ~/.ssh/id_rsa.pub | make vagrant-acl-add
```

## Удаление ключей

Имя ключа уникально и может использоваться для удаления ключа:

```
dokku ssh-keys:remove KEY_NAME
```

Ключ так же может быть удалён по отпечатку:

```
dokku ssh-keys:remove --fingerprint FINGERPRINT
```

## Ссылки

Документация по Dokku - [User Management](https://dokku.com/docs/deployment/user-management/)
