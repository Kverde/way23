---
title: "Сборка проектов Delphi из консоли"
date: "2017-01-21"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
  - "ci"
---

# {{ $frontmatter.title }}

В этой заметке показано как собирать проекты Delphi с помощью bat-файла. Компиляция из консоли часто используется для сборки [релизной версии](http://way23.ru/%d0%ba%d0%be%d0%bd%d1%84%d0%b8%d0%b3%d1%83%d1%80%d0%b0%d1%86%d0%b8%d0%b8-%d1%81%d0%b1%d0%be%d1%80%d0%ba%d0%b8-delphi-%d0%b2%d0%be-%d0%b2%d0%bd%d0%b5%d1%88%d0%bd%d0%b5%d0%bc-%d1%84%d0%b0%d0%b9%d0%bb/).

Файлы проектов Delphi (.dproj) совместимы с системой сборки MSBuild. Разные версии Delphi требуют разную версия MSBuild поэтому сначала желательно обновить Microsoft .NET Framework.

Также успешная сборка требует специально установленных переменных окружения. Переменные отличаются у каждой версии Delphi. Специальный файл `rsvars.bat` устанавливает их, он находится в `bin`, рядом c `bds.exe`.

Delphi может быть установлен в любой каталог, запишем путь к `rsvars.bat` в [системную переменную](http://way23.ru/rapid-environment-editor-%d1%80%d0%b5%d0%b4%d0%b0%d0%ba%d1%82%d0%be%d1%80-%d1%81%d0%b8%d1%81%d1%82%d0%b5%d0%bc%d0%bd%d1%8b%d1%85-%d0%bf%d0%b5%d1%80%d0%b5%d0%bc%d0%b5%d0%bd%d0%bd%d1%8b%d1%85-windows/) чтобы скрипт выполнялся независимо от того на какой машине выполняется.

Для примера системные переменные для Delphi 2010 и XE6

delphi2010\_path = C:\\Program Files (x86)\\Embarcadero\\Studio\\14.0\\bin
delphiXE6\_path = C:\\Program Files (x86)\\Embarcadero\\RAD Studio\\7.0\\bin

Скрипт для сборки

:: Устанавливаем текущую директорию - путь к файлу скрипта
:: Это нужно из-за того что для файлов проектов используются 
:: относительные пути и скрипт должен выполнятся одинаково 
:: независимо от того где и как он запускается. 
cd %~dp0

:: Устанавливаем переменные для сборки Delphi 2010
call "%delphi2010\_path%rsvars.bat" 

:: Запускаем команду Clean для - удаление результатов 
:: предыдущей сборки (dcu, exe)
c:\\Windows\\Microsoft.NET\\Framework\\v3.5\\MSBuild.exe "Project1.dproj" /target:Clean /p:config="Release"

:: Если произошла ошибка то сразу выходим не выполняя 
:: следующие команды  
if not %ERRORLEVEL% == 0 exit %ERRORLEVEL%

:: Собираем проекта, кофигурация сборки Release
c:\\Windows\\Microsoft.NET\\Framework\\v3.5\\MSBuild.exe "Project1.dproj" /target:Build /p:config="Release"
if not %ERRORLEVEL% == 0 exit %ERRORLEVEL%

:: Устанавливаем переменные для сборки XE6
call "%delphiXE6\_path%rsvars.bat" 

c:\\Windows\\Microsoft.NET\\Framework\\v3.5\\MSBuild.exe "ProjectXE6.dproj" /target:Clean /p:config="Release"
if not %ERRORLEVEL% == 0 exit %ERRORLEVEL%
c:\\Windows\\Microsoft.NET\\Framework\\v3.5\\MSBuild.exe "ProjectXE6.dproj" /target:Build /p:config="Release"
if not %ERRORLEVEL% == 0 exit %ERRORLEVEL%

[Пример на GitHub](https://github.com/Kverde/way23_examples/tree/master/Delphi/CousoleBuild)
