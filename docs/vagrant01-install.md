---
title: "Vagrant 1: Установка Vagrant и запуск виртуальной машины из локального образа"
date: "2023-11-22"
categories:
  - "Программы"
tags:
  - "Vagrant"
---

# {{ $frontmatter.title }}

[Vagrant](https://www.vagrantup.com/) — средство для конфигурации и управления виртуальными машинами. Vagrant удобен для разработки программного обеспечения, так как конфигурации виртуальной машины можно хранить в системе контроля версий. Кроме программы Vagrant предоставляет хранилище виртуальных машин похожее на Docker Hub.

[[toc]]

## Установка Vagrant в Debian

Скачайте `.rpm` файл со [страницы загрузки Vagrant](https://developer.hashicorp.com/vagrant/install). Чтобы установить пакет, сначала его нужно конвертировать в `.deb`. Для этого можно воспользоваться программой `alien`.

```bash
sudo apt install alien
sudo alien ./vagrant-2.4.0-1.x86_64.rpm 
```

После этого установить образ

```bash
sudo apt install ./vagrant-2.4.0-1.x86_64.deb
```

## запуск виртуальной машины

[Хранилище образов](https://app.vagrantup.com/) виртуальных машин сейчас недоступно из России, поэтому воспользуемся скачанным образом. Скачайте любой образ, например, [Debian 12](https://app.vagrantup.com/generic/boxes/debian12), версию для VirtualBox.

Создайте новый каталог, войдите в него и выполните инициализацию Vagrant.

```bash
mkdir project
cd ./project
vagrant init
```

После этого в каталоге появится Vagrantfile, в нем будет шаблон скрипта с комментариями. Измените следующую строку

```
config.vm.box = "base"
```

на 

```
  config.vm.box = "generic/debian12"
  config.vm.box_url = "file:///home/user/images/vagrant-generic-debian12"
```

В параметре `config.vm.box_url` должен быть путь к скачанной ранее виртуальной машине.

Для старта виртуальной машине введите команду

```bash
vagrant up
```

Чтобы подключится к виртуальной машине

```bash
vagrant ssh
```

Остановить виртуальную машину

```bash
vagrant halt
```

И удалить виртуальную машину

```bash
vagrant destroy
```