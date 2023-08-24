---
title: "Конструкторы записей (record) в Delphi"
date: "2019-05-11"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
  - "перевод"
---

# {{ $frontmatter.title }}

Вольный перевод поста [Record Constructors in Delphi](https://sergworks.wordpress.com/2012/03/13/record-constructors-in-delphi/)

Конструкторы записей в Delphi — особенность языка которая вызывает вопросы. Зачем они нужны и когда их использовать вместо методов записей? В [документации Delphi](http://docwiki.embarcadero.com/RADStudio/en/Structured_Types#Records_.28advanced.29) написано следующее:

> Records are constructed automatically, using a default no-argument constructor, but classes must be explicitly constructed. Because records have a default no-argument constructor, any user-defined record constructor must have one or more parameters.
> 
> Записи создаются автоматически, используя конструктор по умолчанию без параметров, а классы должны создаваться в явном виде. Из-за того что записи имеют конструктор по умолчанию без параметров любой определённый пользователем конструктор должен содержать как минимум один параметр.

Приведённая выше документация ничего не объясняет. В Delphi не существует такой вещи как "конструктор по умолчанию без параметров". Сразу возникает ещё один вопрос — почему в Delphi запрещены конструкторы без параметров и разрешены с параметрами?

На самом деле конструкторы записей в Delphi это просто специальный синтаксис для методов записей.

Предположим, вам нужна запись которая реализует комплексные числа и требуется метод инициализации. Вы можете использовать функцию

```delphi
type
  TComplex = record
    Re, Im: Double;
    function Create(ARe, AIm: Double): TComplex;
  end;

  function TComplex.Create(ARe, AIm: Double): TComplex;
  begin
    Result.Re:= ARe;
    Result.Im:= AIm;
  end;
```

или процедуру

```delphi
type
  TComplex = record
    Re, Im: Double;
    procedure Create(ARe, AIm: Double);
  end;

  procedure TComplex.Create(ARe, AIm: Double);
  begin
    Re:= ARe;
    Im:= AIm;
  end;
```

Используя конструктор в записи вы можете совместить обе формы

```delphi
type
  TComplex = record
    Re, Im: Double;
    constructor Create(ARe, AIm: Double);
  end;

  constructor TComplex.Create(ARe, AIm: Double);
  begin
    Re:= ARe;
    Im:= AIm;
  end;
```

Можно вызывать конструктор как функцию

```delphi
var 
  C: TComplex;
begin
  C:= TComplex.Create(0, 0);
end.
```

или как процедуру

```delphi
var 
  C: TComplex;
begin
  C.Create(0, 0);
end.
```

Обе формы корректны.

Пример выше может быть слишком упрошенным и выглядеть искусственно, но иногда возможность вызывать метод записи как функцию и как процедуру полезна и удобна.
