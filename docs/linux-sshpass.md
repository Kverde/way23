---
title: "Передача пароля через консоль при подключении через ssh (sshpass)"
date: "2023-11-30"
categories:
  - "Linux"
tags:
  - "ssh"
  - "sshpass"
---

# {{ $frontmatter.title }}

Чтобы автоматизировать передачу пароля через ssh есть отдельная команда sshpass. Пароль задается через параметр `-p` а затем идет команда обычного подключения по ssh.

```bash
sshpass -p password ssh user@server
```
