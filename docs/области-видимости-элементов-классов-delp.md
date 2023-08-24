---
title: "Области видимости элементов классов Delphi"
date: "2019-05-07"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
---

# {{ $frontmatter.title }}

Для контроля доступа к полям, методам и свойствам классов используются области видимости. В Delphi есть следующие области видимости:

- public
- published
- strict private
- private
- strict protected
- protected

Рассмотрим их на примерах.

## public

Элементы секции **public** не имеют ограничений доступа. Они доступны отовсюду: из методов своего класса, из методов других классов, из своего модуля и из других модулей.

```delphi
unit uCircle;

interface

type
  TCircle = class
  public
    FRadius: Integer;

    function Area: Extended;
  end;

implementation

{ TCircle }

function TCircle.Area: Extended;
begin
  Result := FRadius * FRadius * Pi;    // Поле доступно внутри класса
end;

end.
```

```delphi
unit uCheckCircle;

interface

procedure CheckCircle;

implementation

uses
  System.SysUtils,
  Vcl.Dialogs,
  uCircle;

procedure CheckCircle;
var
  Circle: TCircle;
begin
  Circle := TCircle.Create;
  try
    Circle.FRadius := 2; // Поле доступно снаружи
    ShowMessage(FloatToStr(Circle.FRadius));
  finally
    FreeAndNil(Circle);
  end;
end;

end.
```

```delphi
uses
  uCheckCircle;

procedure TForm1.Button1Click(Sender: TObject);
begin
  CheckCircle;
end;
```

## published

Видимость элементов в секции **published** полностью аналогична секции **public**. В этом посте рассматривается только поведение касающееся видимости, подробнее в различиях связанных с RTTI описано [в документации](http://docwiki.embarcadero.com/RADStudio/Rio/en/Private,_Protected,_Public,_and_Published_Declarations).

## Область по умолчанию

Если не указывать область видимости то она будет аналогичной области **public**.

```delphi
unit uCircle;

interface

type
  TCircle = class
    FRadius: Integer;

    function Area: Extended;
  end;

implementation

{ TCircle }

function TCircle.Area: Extended;
begin
  Result := FRadius * FRadius * Pi;    // Поле доступно внутри класса
end;

end.
```

Аналогично поле видно и из других модулей.

## strict private

Самая ограниченная область видимости. Элементы в секции **private** доступны только из методов класса. К ним нет доступа из методов других объектов, независимо от модуля в котором они находятся. Также к ним нет доступа из наследников данного объекта.

```delphi
unit uCircle;

interface

type
  TCircle = class
  strict private
    FRadius: Integer;

  public
    function Area: Extended;
  end;

procedure CheckCircle;

implementation

uses
  System.SysUtils,
  Vcl.Dialogs;

{ TCircle }

function TCircle.Area: Extended;
begin
  Result := FRadius * FRadius * Pi;    // Поле доступно внутри класса
end;

procedure CheckCircle;
var
  Circle: TCircle;
begin
  Circle := TCircle.Create;
  try
    Circle.FRadius := 2; // ошибка компиляции
    ShowMessage(FloatToStr(Circle.FRadius));
  finally
    FreeAndNil(Circle);
  end;
end;

end.
```

## private

Секция **private** совпадает с секцией **strict private**, за исключением того что все элементы этой секции доступны из любого метода любого класса в том же модуле в котором объявлен класс.

```delphi
unit uCircle;

interface

type
  TCircle = class
  private
    FRadius: Integer;

  public
    function Area: Extended;
  end;

procedure CheckCircle;

implementation

uses
  System.SysUtils,
  Vcl.Dialogs;

{ TCircle }

function TCircle.Area: Extended;
begin
  Result := FRadius * FRadius * Pi;    // Поле доступно внутри класса
end;

procedure CheckCircle;
var
  Circle: TCircle;
begin
  Circle := TCircle.Create;
  try
    Circle.FRadius := 2; // работает
    ShowMessage(FloatToStr(Circle.FRadius));
  finally
    FreeAndNil(Circle);
  end;
end;

end.
```

Если перенести процедуру `CheckCircle` в другой модуль то произойдёт ошибка компиляции, так как `FRadius` уже будет недоступен.

## strict protected

Элементы объявленные с секции **strict protected** доступны только из методов самого класса и из классов потомков. От модуля в котором они находятся это не зависит.

```delphi
unit uCircle;

interface

type
  TCircle = class
  strict protected
    FRadius: Integer;
  public
    function Area: Extended;
  end;

  TSuperCircle = class(TCircle)
  public
    function Diameter: Extended;
  end;

procedure CheckCircle;

implementation

uses
  System.SysUtils,
  Vcl.Dialogs;

{ TCircle }

function TCircle.Area: Extended;
begin
  Result := FRadius * FRadius * Pi;    // Поле доступно внутри класса
end;

{ TSuperCircle }

function TSuperCircle.Diameter: Extended;
begin
  Result := FRadius * 2; // Поле доступно в потомке
end;

procedure CheckCircle;
var
  Circle: TCircle;
begin
  Circle := TCircle.Create;
  try
    Circle.FRadius := 2; // но вне класса также недоступно
    ShowMessage(FloatToStr(Circle.FRadius));
  finally
    FreeAndNil(Circle);
  end;
end;

end.
```

## protected

Секция **protected** совпадает с секцией **strict protected**, за исключением того что все элементы этой секции доступны из любого метода в том же модуле в котором объявлен класс. Ситуация аналогичная **private** и **strict private**.

## Ссылки

- [Документация Delphi](http://docwiki.embarcadero.com/RADStudio/Rio/en/Classes_and_Objects_(Delphi)#Private.2C_Protected.2C_and_Public_Members)
- ["Дружественность" в Delphi](https://www.gunsmoker.ru/2013/02/delphi-friendliness.html)
