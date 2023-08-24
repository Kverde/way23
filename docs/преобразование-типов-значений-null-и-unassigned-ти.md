---
title: "Преобразование типов значений Null и Unassigned типа Variant в Delphi"
date: "2019-04-18"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
---

# {{ $frontmatter.title }}

## Конвертация Unassigned

Если переменная с типом `Variant` не инициализирована то она имеет значение `Unassigned`, даже если это поле класса:

```delphi
type
  TMyClass = class
    FVar: Variant;
  end;

procedure TForm1.Button3Click(Sender: TObject);
var
  Obj: TMyClass;
  Flag: Boolean;
begin
  Obj := TMyClass.Create;
  try
    Flag := Obj.FVar = Unassigned;

    ShowMessage(BoolToStr(Flag, True)); // True
  finally
    FreeAndNil(Obj);
  end;
end;
```

Возможны следующие случаи преобразования `Unassigned` в другие типы данных:

```delphi
procedure TForm1.Button1Click(Sender: TObject);
var
  v: Variant;
  i: Integer;
  s: string;
  b: Boolean;
  d: TDateTime;
begin
  i := v; // 0
  s := v; // пустая строка
  b := v; // False
  d := v; // 30.12.1899

  ShowMessage(IntToStr(i));
  ShowMessage(s);
  ShowMessage(BoolToStr(b, True));
  ShowMessage(DateTimeToStr(d));
end;
```

Значение `Unassigned` нужно иметь в виду при работе с `Variant`. Но с практической точки зрения более интересно поведение в случае значения `null`. Например, он часто встречается при получении значения из поля датасета (`TField`) через свойство `Value`.

## Конвертация Null

Конвертация `null` зависит от значения логической глобальной переменной `System.Variants.NullStrictConvert`. Её значение по умолчанию равно `True` и при попытке конвертации `null` появляется исключение `EVariantTypeCastError`. Если же значение `NullStrictConvert` равно `False`, то по умолчанию `null` преобразуется аналогично `Unassigned`.

```delphi
procedure TForm1.Button1Click(Sender: TObject);
var
  v: Variant;
  i: Integer;
  s: string;
  b: Boolean;
  d: TDateTime;
begin
  NullStrictConvert := False;

  v := null;
  i := v; // 0
  s := v; // пустая строка
  b := v; // False
  d := v; // 30.12.1899

  ShowMessage(IntToStr(i));
  ShowMessage(s);
  ShowMessage(BoolToStr(b, True));
  ShowMessage(DateTimeToStr(d));
end;
```

Есть особенность для типа `String`. Можно задать какой строке будет равен `null`. Например

```delphi
procedure TForm1.Button2Click(Sender: TObject);
var
  v: Variant;
  s: string;
begin
  NullStrictConvert := False;
  NullAsStringValue := 'my_null';

  v := null;
  s := v; 

  ShowMessage(s); // my_null
end;
```

## Выражения

Если `null` участвует в выражении то результат выражения будет `null`.

```delphi
procedure TForm1.Button2Click(Sender: TObject);
var
  v: Variant;
  s: string;
begin
  NullStrictConvert := False;
  NullAsStringValue := 'null';

  v := null + 2;
  s := v;

  ShowMessage(s); // null
end;
```

Ситуация с `Unassigned` интереснее. Вероятно, срабатывает такое же преобразование как при конвертации, в данном примере к 0. Описания в документации нет.

```delphi
procedure TForm1.Button2Click(Sender: TObject);
var
  v: Variant;
  s: string;
begin
  v := v + 2;
  s := v;

  ShowMessage(s); // 2
end;
```

## Сравнения

Поведение `null` при сравнении зависит от глобальных переменных `NullEqualityRule` и `NullMagnitudeRule`.

`NullEqualityRule` определяет результат операторов "=" и "<>" (равно и не равно). У этой переменной возможны три значения

- `ncrError` — сравнение с `null` вызывает исключение
- `ncrStrict` — результат сравнение с `null` всегда равен `False`
- `ncrLoose` (по умолчанию) — `null` равен другому `null` и не равен другим значениям

```delphi
procedure TForm1.Button1Click(Sender: TObject);
var
  v: Variant;
  flag: Boolean;
begin
  v := null;
  flag := v = null;

  ShowMessage(BoolToStr(flag, True)); // True 
end;

procedure TForm1.Button2Click(Sender: TObject);
var
  v: Variant;
  flag: Boolean;
begin
  NullEqualityRule := ncrStrict;
  v := null;
  flag := v = null;

  ShowMessage(BoolToStr(flag, True)); // False 
end;

procedure TForm1.Button3Click(Sender: TObject);
var
  v: Variant;
  flag: Boolean;
begin
  NullEqualityRule := ncrError;
  v := null;
  flag := v = null; // Исключение EVariantInvalidNullOpError

  ShowMessage(BoolToStr(flag, True));
end;
```

`NullMagnitudeRule` определяет результат операторов "<" и ">" (больше и меньше). Значения этой переменной аналогичны `NullEqualityRule`

- `ncrError` — сравнение с `null` вызывает исключение
- `ncrStrict` — результат сравнение с `null` всегда равен `False`
- `ncrLoose` (по умолчанию) — `null` считается меньше любого другого значения

```delphi
procedure TForm1.Button2Click(Sender: TObject);
var
  v: Variant;
  flag: Boolean;
begin
  v := null;
  flag := v < -1;

  ShowMessage(BoolToStr(flag, True)); // True
end;
```

Интересный случай сравнения null с null

```delphi
procedure TForm1.Button2Click(Sender: TObject);
var
  v: Variant;
  flag: Boolean;
begin
  v := null;
  flag := v < null;

  ShowMessage(BoolToStr(flag, True)); // False
end;
```

## Выводы

- Переменные типа `Variant` нужно всегда инициализировать, даже если они являются переменным класса, чтобы не сталкиваться с `Unassigned`.
- Во всех случаях при работе с `Variant` нужно учитывать `null`.
- Менять или не менять значение по умолчанию переменной `NullStrictConvert` вопрос открытый.

## Ссылки

- [Документация](http://docwiki.embarcadero.com/RADStudio/Rio/en/Variant_Types_(Delphi)) по типу Variant.
