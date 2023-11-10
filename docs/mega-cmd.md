---
title: "Настройка облачного хранилища MEGA на сервере Debian без GUI"
date: "2023-11-11"
categories:
  - "Блог"
tags:
  - "way23"
---

# {{ $frontmatter.title }}

[MEGA CMD](https://mega.io/cmd) — приложение облачного хранилища MEGA для систем без графического интерфейса.

Для работы с MEGA CMD скачайте и установите пакет:

```
user@debian-server
:~$ wget https://mega.nz/linux/repo/Debian_12/amd64/megacmd-Debian_12_amd64.deb
user@debian-server:~$ sudo apt install ./megacmd-Debian_12_amd64.deb 
```

После установки, становятся доступны команды MEGA-CMD. Они все начинаются с `mega-`, наберите начало команды и нажмите два раза `TAB`, чтобы увидеть их все.

Первой командой нужно авторизоваться в MEGA:

```
mega-login login password
```

Чтобы сбросить авторизацию используется команда:

```
mega-logout --keep-session
```

Необязательный параметр `--keep-session` определяет сохранять ли настройки сессии, например, пути для бекапов и синхронизации, которые описаны ниже.

Чтобы сделать каталог в котором будут синхронизироваться файлы используется команда `mega-sync`.

```
mkdir /home/user/MEGA
mega-sync /home/user/MEGA /files
```

Первый параметр — путь на сервере, второй — в облачном хранилище. Если запустить команду `mega-sync` без параметров, то она вернет список всех синхронизируемых путей. Для удаления пути используется параметр `-d` с идентификатором пути из списка.

```
mega-sync -d id
```

Для бекапов есть отдельная команда `mega-backup`. Она так же принимает путь на сервере и путь в облачном хранилище. В параметре `--period=` устанавливается периодичность резервного копирования в формате [cron](linux-cron.md). Количество хранимых копий можно передать через параметр `--num-backups`.

```
backup /home/user/backup /backup --period="0 0 4 * * *" --num-backups=10
```

Перечисленные выше команды, по сути, являются клиентами и отправляют запросы в основной сервис `mega-cmd-service`. Этот сервис не запускается автоматически при перезагрузке, поэтому требуются дополнительные настройки, чтобы он включался после запуска сервера, например, модуль для systemd:

```
[Unit]
Description=Mega-CMD systemd service
After=network.target
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=on-failure
RestartSec=1
User=root
ExecStart=/usr/bin/mega-cmd-server

[Install]
WantedBy=multi-user.target
```

Вы можете создать его командой

```
sudo systemctl edit --full mega-cmd.service
```

А затем включить сервис

```
sudo systemctl start mega-cmd
sudo systemctl enable mega-cmd
```

## Ссылки

* [Репозиторий с кодом MEGA CMD](https://github.com/meganz/MEGAcmd)
* [MEGAcmd Readme](https://github.com/meganz/MEGAcmd/blob/master/README.md)
* [MEGAcmd User Guide](https://github.com/meganz/MEGAcmd/blob/master/UserGuide.md)
* [MEGA-BACKUPS - Backing up folders with MEGAcmd](https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/BACKUPS.md)

