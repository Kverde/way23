---
title: "Перевод процессов в фон и возвращение назад в Linux (jobs, fg)"
date: "2023-12-02"
categories:
  - "Linux"
tags:
  - "jobs"
  - "fb"
  - "bg"
  - "nc"
---

# {{ $frontmatter.title }}

Linux позволяет отсоединить консоль от от процесса, не останавливая его. Позже можно снова подключится к этому процессу. Для перевода процесса на задний план, используется сочетание клавиш `CTRL+Z`, попробуем запустить `nc` на прослушивание и отправить его на задний план.

```bash
user@debian-server:~/test$ nc -l -p 30001
^Z
[1]+  Stopped                 nc -l -p 30001
```

Команда `jobs` выводит список всех процессов в фоне. В начале каждой строки есть идентификатор процесса.

```bash
user@debian-server:~/test$ jobs
[1]+  Stopped                 nc -l -p 30001
```

Теперь запустим `nc` ещё раз и отправим строку `hello`.

```bash
user@debian-server:~/test$ nc localhost 30001
hello
^C
```

Для подключения процесса к консоли введите команду `fg` и номер процесса.

```bash
user@debian-server:~/test$ fg 1
nc -l -p 30001
hello
```