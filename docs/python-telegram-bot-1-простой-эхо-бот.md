---
title: "Python-telegram-bot 1. Простой эхо-бот"
date: "2017-01-23"
categories: 
  - "Python"
tags: 
  - "бот"
---

# {{ $frontmatter.title }}

![Эхо-бот Telegram](images/python_telegram_bot_1.png)

В этом цикле постов описаны возможности [Python-telegram-bot](https://python-telegram-bot.org/) - библиотеки для написания ботов Telegram.

Первым делом [регистрируем](http://way23.ru/%d1%80%d0%b5%d0%b3%d0%b8%d1%81%d1%82%d1%80%d0%b0%d1%86%d0%b8%d1%8f-%d0%b1%d0%be%d1%82%d0%b0-%d0%b2-telegram/) нового бота в Telegram.

Затем устанавливаем библиотеку `python-telegram-bot`

 
pip install python-telegram-bot

Наш бот будет уметь только два действия: отвечать на команду `/start` и в ответ на любое сообщение, которое не является командой, отправлять текст присланного сообщения.

Командой считается сообщение которое начинается с символа "/". Команда `/start` отправляется автоматически боту при добавлении его в список контактов. Но ничего не мешает отправить её после этого вручную.

from telegram.ext import Updater, CommandHandler, MessageHandler, Filters

# токен полученный при регистрации бота
telegram\_token = 'my\_telegram\_token'

# start вызывается после команды /start
def start(bot, update):
    update.message.reply\_text('Привет')

# echo вызывается после любого текстового сообщения
def echo(bot, update):
    update.message.reply\_text(update.message.text)

# создаём основной объект для управления ботом
updater = Updater(telegram\_token)

# регистрируем процедуру start как обработчик команды start
updater.dispatcher.add\_handler(CommandHandler('start', start))

# регистрируем процедуру echo как обработчик текстового сообщения
updater.dispatcher.add\_handler(MessageHandler(Filters.text, echo))

# запускаем бота
updater.start\_polling()
updater.idle()

Запуск бота в консоли

python main.py

Для остановки бота нажмите `ctrl+C`

[Пример на GitHub](https://github.com/Kverde/way23_examples/tree/master/python_telegram_bot/echo_bot)
