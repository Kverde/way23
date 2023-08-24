---
title: "PL/SQL developer. 4. Отладка"
date: "2019-04-13"
categories: 
  - "Программы"
tags: 
  - "plsql_developer"
  - "oracle"
---

# {{ $frontmatter.title }}

Простой пример использования отладки в Pl/Sql developer. Предположим, нам нужно отладить функцию `test.sya_hello`.

Открываем TestWindow и заполняем в нём код для проверки функции.

![](images/pl_sql_dev_01.png)

![](images/pl_sql_dev_02.png)

Теперь откроем код функции, это можно сделать по ПКМ на имени функции в коде

![](images/pl_sql_dev_03.png)

На нужной строке ставим точку остановки

![](images/pl_sql_dev_04.png)

![](images/pl_sql_dev_05.png)

Обязательно нужно проверить что у отлаживаемого объекта добавлена отладочная информация (Add debug information)

![](images/pl_sql_dev_06.png)

Теперь в TestWindow нажимаем кнопку **Start debugger** или **F9**. Внизу можно указать переменные, значения которых нужно просматривать.

![](images/pl_sql_dev_07.png)

При нажатии Ctrl+R произойдёт выполнение кода до указанной точки остановки.

![](images/pl_sql_dev_08.png)

Код функции

```delphi
create or replace function test.say_hello return varchar2 is
  Result varchar2(100);
begin
  Result := 'h';
  Result := Result || 'e';
  Result := Result || 'l';
  Result := Result || 'l';
  Result := Result || 'o';  
  return(Result);
end;
```

Код в TestWindow

```delphi
declare  
  str varchar(100);
begin
  str := 'azaza';
  str := test.say_hello;
  dbms_output.put_line(str);  
end;
```
