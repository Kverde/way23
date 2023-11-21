---
title: "Установка i2p в Linux"
date: "2023-11-21"
categories:
  - "Информационная безопасность"
tags:
  - "i2p"
---

# {{ $frontmatter.title }}

Для установки i2p скачайте файл `.jar` с [сайта i2p](https://geti2p.net/en/download), ссылка находится в разделе «Download I2P for Linux / BSD / Solaris». Для установки запустите команду

```bash
java -jar i2pinstall_2.3.0.jar
```

Во время установки можно выбрать каталог для установки. По умолчанию создается каталог в домашней директории пользователя. Для запуска зайдите в каталог программы и запустите i2p командой `start`:

```bash
./i2prouter start
Starting I2P Service...
Waiting for I2P Service....
running: PID:2030
```

После старта, в браузере откроется ссылка `http://127.0.0.1:7657/welcome`. Пойдите шаги инструкции настройки i2p. После завершения откроется I2P Router Console.

Консоль i2p может быть в двух состояниях: сокращенное и расширенное. Переключение производится кликом на логотип i2p.

![](images/i2p-install/i2p-install-01.png)

![](images/i2p-install/i2p-install-02.png)

Чтобы подключаться к i2p сайта нужно [настроить браузер](https://geti2p.net/en/about/browser-config). Для настройки Firefox зайдите в настройки и откройте раздел `Network Settings`.

![](images/i2p-install/i2p-install-03.png)

Установите `Manual proxy configuration` и HTTP Proxy: адрес `127.0.0.1` и порт `4444`. Проверьте, что в разделе `No proxy`, находятся `localhost, 127.0.0.1`. Теперь будут работать i2p-сайты, проверим это: зайдите в консоли в почту, а затем перейдите по ссылке `Create Account`.

![](images/i2p-install/i2p-install-04.png)

![](images/i2p-install/i2p-install-05.png)

Откроется страница сайта `http://hq.postman.i2p` на которой можно создать себе почтовый ящик.

![](images/i2p-install/i2p-install-06.png)

Для остановки i2p используйте команду

```bash
./i2prouter stop
Stopping I2P Service...
Stopped I2P Service.
```

При решении проблем с i2p могут помочь логи со страницы `http://127.0.0.1:7657/logs`, ссылка на эту страницу находится в расширенном левом меню. Так же можно запустить i2p специальным скриптом, возможно, он выведет больше информации чем стандартный запуск.

```bash
./runplain.sh
```