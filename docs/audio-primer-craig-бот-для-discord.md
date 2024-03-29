---
title: "Audio Primer. Бот Craig для Discord"
date: "2020-05-24"
categories: 
  - "Программы"
tags: 
  - "перевод"
  - "discord"
---

# {{ $frontmatter.title }}

Перевод [Audio Primer](https://craig.chat/home/newbie.html).

Вы хотите что-то записать, но ничего не знаете об звукозаписи? Начините с чтения этого текста.

Первое. Craig предоставляет звук в виде нескольких файлов, каждый из которых соответствует отдельному оратору. Это называется multi-track recording (отдельный поток аудио называется «track») и это основная особенность Craig. Благодаря тому что треки сохраняются раздельно, вы можете вырезать или отредактировать каждый трек независимо. Если один из ораторов слишком тихий, вы можете увеличить его громкость без влияния на остальных. Если другой спикер кашляет вы можете удалить его, без удаления остальных. Для того чтобы свести все треки в один используйте аудио-редактор, такой как [Audacity](https://www.audacityteam.org/).

Craig упаковывает файлы в zip-архив. Такие архивы используются для упаковки нескольких файлов в один. Все современные десктопные системы поддерживают работу с zip-архивами. Для работы через мобильные устройства установите архиватор.

Существует большое количество форматов для кодирования цифровые аудио данных. Разные форматы имеют свои преимущества и недостатки. Классическая и простейшая технология это файл `WAW` или `raw PCM waveform`. Ключевое слово здесь — `raw` (сырой, не обработанный): waw-файлы это необработанные данные и имеют большой размер. Настолько большие, что их невозможно рассылать через интернет. По этой причине, Craig предлагает только waw-файлы с пониженным качеством, используйте их только если у вас нет другого выбора. Если вы используете поддерживаемую операционную систему, то Craig предложит вам сжатый файл с исходным качеством и программу для конвертации его в waw-файл. Если вы не хотите использовать случайные программы на вашем компьютере, используйте другой формат.

Обычно, данные передаются через интернет в форматах со сжатием. Для сжатия звука есть два варианта: сжатие с потерями (losslessly compressed) и сжатие без потерь (lossily compressed). Сжатие без потерь требует больше места чем сжатие с потерями, немного меньше чем необработанные данные (waw-файл), и не не теряет никакой информации по сравнению с waw-файлами. Сжатие без потерь не имеет других недостатков кроме размера. Самый популярные форма сжатие звука без потерь это `FLAC` (Free Lossless Audio Codec). Craig использует `FLAC` как основной. Если ваши программы поддерживают `FLAC` и у вас достаточно быстрое соединение с интернетом то выбирайте `FLAC`. У Apple есть собственный, немного уступающий `FLAC` формат, `ALAC`. Другие форматы, поддерживаются не так широко как `FLAC` и `ALAC`.

Если сжатие без потерь вам не подходит, то остаётся сжатие с потерями. Сжатие с потерями уменьшает размер данных, но теряет информацию по сравнению с оригиналом — ухудшается качество. Количество форматов файлов со сжатием с потерями очень велико. Moving Picture Experts Group (MPEG) определяет набор распространённых форматов считающихся международными. Среди них `AAC` (Advanced Audio Codin), так же известный как `MPEG-4`, наиболее широко распространённый формат. `AAC` предоставляет великолепное качество в отношении к размеру. Если вы не можете использовать `FLAC`, то используйте `AAC`.

Craig поддерживает набор lossy-форматов: `MPEG-4`, `HE-AAC`, `Opus` и `Ogg Vorbis`. `HE-AAC` это улучшенная версия `AAC`, не немного менее широко поддерживаемый. Качество файла `HE-AAC` примерно совпадает с файлом `AAC`, но размер обычно меньше. `Opus` используется Discord и это лучший lossy-формат сегодня, но он не достаточно широко поддерживается аудио-редакторами. `Opus` не обременён патентами, если это важно для вас. `Ogg Vorbis` не так широко поддерживается как `AAC`, но поддерживается шире чем `FLAC` или `Opus` и так же не обременён патентами.

Наконец MP3-файлы. Много людей считают `MP3` синонимом «аудио-файл». Сперва, устраним заблуждение: `MP3` это не `MPEG-3` и это не непосредственно препроцессор для `MPEG-4`. `MP3` это третий звуковой стандарт в **первом** стандарте MPEG. Другими словами `MP3` это `MPEG-1`. Далее я будут называть этот формат `MPEG-1`. Craig не поддерживает `MPEG-1` по следующим причинам:

- Один из параметров сжатия с потерями это битрейт. Битрейт это количество бит (наименьшая порция цифровой информации) требуемых на одну секунду звуковых данных. Битрейт часто используется для измерения качества, но это ошибка: не один из современных форматов не использует неизменное количество бит в секунду (константный битрейт). Используется разное количество бит, в зависимости от того сколько места требуется для сохранения постоянного качества. Некоторая информация, например тишина, требует для хранения меньше места.
- `MPEG-1` формально устарел. Даже MPEG не хочет чтобы вы использовали `MPEG-1`. Стандарта `MPEG-3` не было, так как люди называли `MPEG-1` «MP3».
- `MPEG-1` не может обеспечить такое же качество как `AAC`.
- `MPEG-1` это не тот формат который «хотят» ваши программы. Вся музыка Apple, например, распространяется в `AAC` с 2003 года. Ваш MP3-проигрыватель на самом деле AAC-проигрыватель. То же самое с Android. Файлы `MP4` (формат `MPEG-4`) используют звук `AAC`. Видео на YouTube передаётся в `AAC` или `Opus`. Discord и Skype это `Opus`. Все браузеры поддерживают `AAC` или `Opus` (часто оба этих формата). `MPEG-1` используют люди которые не знают об этом, или те кто купил MP3-проигрыватель в 1999 году.
- «MP3» это симптом большой темы нежелания адаптироваться и понимать. Вы знаете что ваши gif-файлы это не gif-файлы? Ваши «гифы» это WebP или WebM, так как `gif` это крайне устаревший и неэффективный формат. Так как браузеры обычно заботятся о формате «gif-файлов», экосистема web готова скрыть это от вас и продолжать считать эти файлы «gif-файлами», даже если они уже совсем не `gif`. К сожалению звуковое программное обеспечение шире и то же самое не получится сделать с `MP3`. Пользователи должны быть достаточно образованными чтобы их не обманывали устаревшие технологии.

Если у вас остались вопросы, свободно задавайте их на [Craig's discord server](https://discord.gg/ASdCXjM).
