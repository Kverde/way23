---
title: "Предварительное объявление записей (record) в Delphi"
date: "2019-05-09"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
  - "перевод"
---

# {{ $frontmatter.title }}

Вольный перевод поста [Forward record declaration](https://www.thedelphigeek.com/2017/03/forward-record-declaration.html).

Предварительная объявление не новая концепция. Она уже присутствовала в оригинальном Паскале Вирта, где она позволяла программистам делать только одну вещь — вызывать процедуру A из процедуры B и вызывать процедуру B из процедуры A. В те времена не было интерфейсов, классов, модулей, только процедуры и функции. Вот пример

```delphi
procedure ProcA; forward;

procedure ProcB;
begin
  ProcA;
end;

procedure ProcA;
begin
  ProcB;
end;
```

Более знакомая современная концепция — предварительное объявление для классов и интерфейсов.

```delphi
type
  TClassA = class;

  TClassB = class
    ObjA: TClassA;
  end;

  TClassA = class
    ObjB: TClassB;
  end;

  IIntfA = interface;

  IIntfB = interface
    function Other: IIntfA;
  end;

  IIntfA = interface
    function Other: IIntfB;
  end;
```

В тоже время в Object Pascal нет концепции предварительного объявления записей. Следующий код не компилируется

```delphi
type
  TRecA = record;

  TRecB = record
    function Other: TRecA;
  end;

  TRecA = record
    function Other: TRecB;
  end;
```

Существует трюк который позволяет достичь аналогичной функциональности с помощью другого синтаксического сахара - record helpers. Мы можем удалить объявление `TRecB.Other` из `TRecB` и потом снова добавить его через хелпер для `TRecB`.

```delphi
type
  TRecB = record
  end;

  TRecA = record
    function Other: TRecB;
  end;

  TRecBHelper = record helper for TRecB
    function Other: TRecA;
  end;
```

Но помните, что это решение менее стабильно: другой код может скрыть функционал `TRecBHelper` введя свой собственный хелпер для `TRecB`. (противная особенность языка которая действительно должна быть исправлена уже давно)
