---
title: "Проблемы перегрузки операторов в Delphi"
date: "2019-05-14"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
  - "перевод"
---

# {{ $frontmatter.title }}

Вольный перевод поста [On the operator overloading in Delphi](https://sergworks.wordpress.com/2013/04/10/on-the-operator-overloading-in-delphi/).

Перегрузка операторов в Delphi является простой если запись не содержит в себе полей-ссылок на объекты в куче. Чтобы проиллюстрировать эту проблему рассмотрим следующий (некорректный!) пример:

```delphi
program DelphiDemo;

{$APPTYPE CONSOLE}

uses
  SysUtils;

type
  Adder = record
  private
    FRef: PInteger;
    function GetMemory: Integer;
    procedure SetMemory(AValue: Integer);
  public
    procedure Init(AValue: Integer = 0);
    procedure Done;
    class operator Add(const A, B: Adder): Adder;
    property Memory: Integer read GetMemory write SetMemory;
  end;

{ Adder }

class operator Adder.Add(const A, B: Adder): Adder;
begin
// !!! Утечка памяти
  New(Result.FRef);
  Result.Memory:= A.Memory + B.Memory;
end;

procedure Adder.Done;
begin
  Dispose(FRef);
end;

function Adder.GetMemory: Integer;
begin
  Result:= FRef^;
end;

procedure Adder.Init(AValue: Integer);
begin
  New(FRef);
  FRef^:= AValue;
end;

procedure Adder.SetMemory(AValue: Integer);
begin
  FRef^:= AValue;
end;

procedure Test;
var
  A, B, C: Adder;

begin
  A.Init(1);
  B.Init(2);
  C.Init();
  C := A + B;
  Writeln(C.Memory);
  C.Done;
  B.Done;
  A.Done;
end;

begin
  ReportMemoryLeaksOnShutdown:= True;
  try
    Test;
  except
    on E: Exception do
      Writeln(E.ClassName, ': ', E.Message);
  end;
  ReadLn;
end.
```

Строка `#59 (C:= A + B)` работает следующим образом:

- Временная запись `Result` помещается в стек
- Временная запись заполняется суммой `A + B` (метод `Adder.Add`)
- Временная запись присваивается (поверхностным копированием) переменной `C`
- Временная запись убирается со стека

Код работает правильно если `Adder` не содержит ссылок на кучу, `FRef` в экземпляре `Adder` делает ситуацию более сложной. Вы должны всегда инициализировать поле `FRef` для каждого экземпляра `Adder`, но вы не можете финализировать временную запись которая создана на строке `#59`. (также не можете финализировать запись которая инициализируется в строке `#58` и теряется в строке `#59`).

Единственный путь исправить утечку памяти — закомпостировать строку `#58`, но это не будет работать в более сложных случаях, например, когда переменная должна участвовать в выражении справа.

Правильное решение использует автоматическое управление памятью вместо простых указателей. Ниже решение использующее интерфейс:

```delphi
program DelphiDemo2;

{$APPTYPE CONSOLE}

uses
  SysUtils, Classes;

type
  IAdder = interface
    function GetMemory: Integer;
    procedure SetMemory(AValue: Integer);
  end;

  TAdderRef = class(TInterfacedObject, IAdder)
  private
    FMemory: Integer;
    function GetMemory: Integer;
    procedure SetMemory(AValue: Integer);
  end;

  Adder = record
  private
    FRef: IAdder;
    function GetMemory: Integer;
    procedure SetMemory(AValue: Integer);
  public
    procedure Init(AValue: Integer = 0);
    procedure Done;
    class operator Add(const A, B: Adder): Adder;
    property Memory: Integer read GetMemory write SetMemory;
  end;

{ TAdderRef }

function TAdderRef.GetMemory: Integer;
begin
  Result:= FMemory;
end;

procedure TAdderRef.SetMemory(AValue: Integer);
begin
  FMemory:= AValue;
end;

{ Adder }

class operator Adder.Add(const A, B: Adder): Adder;
begin
  Result.FRef:= TAdderRef.Create;
  Result.Memory:= A.Memory + B.Memory;
end;

procedure Adder.Init(AValue: Integer);
begin
  FRef:= TAdderRef.Create;
  FRef.SetMemory(AValue);
end;

procedure Adder.Done;
begin
  FRef:= nil;
end;

function Adder.GetMemory: Integer;
begin
  Result:= FRef.GetMemory;
end;

procedure Adder.SetMemory(AValue: Integer);
begin
  FRef.SetMemory(AValue);
end;

procedure Test;
var
  A, B, C: Adder;

begin
  A.Init(1);
  B.Init(2);
//  C.Init();
  C:= A + B;
  Writeln(C.Memory);
//  C.Done;
//  B.Done;
//  A.Done;
end;

begin
  ReportMemoryLeaksOnShutdown:= True;
  try
    Test;
  except
    on E: Exception do
      Writeln(E.ClassName, ': ', E.Message);
  end;
  ReadLn;
end.
```

Полезный побочный эффект при таком подходе в том что вам не нужно инициализировать или финализировать поле `FRef` вручную (но вы можете это делать). Несколько строк в процедуре `Test`, показанной выше, закомментированы потому, что они больше не нужны, но они могут быть раскомментированы и код продолжит верно работать — автоматическое управление памятью для интерфейсов обеспечит это.

Очень интересно знать как обсуждаемая проблема решается в C++. Стандартный C++ подход полностью отличается — он требует перегрузки оператора присваивания (возможность, которую Delphi не поддерживает) и написания конструктора копирования (другая концепция отсутствующая в Delphi). Я планирую обсудить это позже.
