---
title: "Vagrant 2: запуск проекта внутри Vagrant"
date: "2023-11-23"
categories:
  - "Программы"
tags:
  - "Vagrant"
---

# {{ $frontmatter.title }}

[После установки Vagrant](vagrant01-install.md), для удобной работы, Vagrant файл следует дополнительно настроить.

Чтобы проект был доступен вне виртуальный машины нужно пробросить порт из виртуальной машины на порт хоста. Строка ниже делает порт `80` виртуальной машины на хосте по адресу `127.0.0.1:5555`.

```ruby
  config.vm.network "forwarded_port", guest: 80, host: 5555, host_ip: "127.0.0.1"
```

Для того, чтобы в виртуальной машине был сразу установлен Docker, добавьте команду

```ruby
  config.vm.provision :docker
```

Чтобы пробросить в виртуальную машину код приложения добавьте команду

```ruby
  config.vm.synced_folder "./host_path", "/vm_path"
```

В виртуальную машину можно отправить команду, например, для запуска приложения.

```bash
	vagrant ssh -c 'docker compose -f /path/docker-compose.yml up -d --build'
```