---
title: "Написание простого DSL компилятора на Delphi (6. Дамп AST)"
date: "2019-06-09"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
  - "перевод"
  - "компиляторы"
---

# {{ $frontmatter.title }}

Перевод поста [Writing a Simple DSL Compiler with Delphi (6. AST Dumper)](https://www.thedelphigeek.com/2017/10/writing-simple-dsl-compiler-with-delphi_14.html).

Эта статья представляет описание инструмента для тестирования моего игрушечного языка программирования. Если вы только начинаете читать эту серию, то я бы рекомендовал вам начать с [этого поста](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-0/).

Пожалуйста, имейте в виду, что эта статья описывают начальную реализацию парсера. Если вы хотите просматривать код во время чтения статьи, убедитесь, что вы переключились на ветку [dsl\_v1](https://github.com/gabr42/SimpleDSLCompiler/tree/dsl_v1).

Теперь, когда мы имеем работающий [токинезатор](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-3/) и [парсер](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-4/) генерирующие на выходе [AST](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-2/), мы можем начать работать над компилятором. Тем не менее, было бы отлично проверить корректность выходных данных парсера. Или по другому — нам нужны модульные тесты.

Тем не менее, написание модульных тестов для древовидных структур очень утомительная операция. В следующем посту я покажу тест для дерева в котором только пять листьев и это уже будет процесс который лучше пропустить. К счастью, мы можем сделать что-то более весёлое — мы можем написать код, который воссоздаст оригинальную программу из AST.

Чтобы сделать это, мы напишем генератор кода который вместо машинного кода генерирует исходную программу. Мы можем сделать просто поместив новую фабрику `codegen` в гибкий [каркас компилятора](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-5/).

```delphi
sl := TStringList.Create;
try
  compiler := CreateSimpleDSLCompiler;
  compiler.CodegenFactory := 
    function: ISimpleDSLCodegen 
    begin 
      Result := CreateSimpleDSLCodegenDump(sl); 
    end;
  compiler.Compile(CMultiProcCode);
  Writeln(sl.Text);
finally FreeAndNil(sl); end;
```

`codegen` будет сохранять результирующую программу в список строк `sl`, который мы можем передать в анонимную процедуру (`CodegenFactory`) из-за полезного [захвата переменной](http://docwiki.embarcadero.com/RADStudio/Tokyo/en/Anonymous_Methods_in_Delphi#Variable_Binding_Mechanism).

Наш генератор кода — `TSimpleDSLCodegenDump` должен реализовывать интерфейс `ISimpleDSLCodegen` содержащий одну функцию — `Generate`. Эта функция берет AST и возвращает что-то запускаемое — `ISimpleDSLProgram`. Поскольку наш код не знает как создавать запускаемую программу, он будет возвращать `nil` в этом параметре.

```delphi
type
  ISimpleDSLCodegen = interface ['{C359C174-E324-4709-86EF-EE61AFE3B1FD}']
    function Generate(const ast: ISimpleDSLAST; var runnable: ISimpleDSLProgram): boolean;
  end;
```

Полезные данные будут сохранены в список строк (`TStringList`) который передан в конструктор.

```delphi
constructor TSimpleDSLCodegenDump.Create(dump: TStringList);
begin
  inherited Create;
  FDump := dump;
end;
```

Основная функция генерации кода сохраняет ссылку на AST в поле так что мы имеем доступ к нему из всех методов и затем восстаёт исходный код функция за функцией вызовами `DumpFunction`.

```delphi
function TSimpleDSLCodegenDump.Generate(const ast: ISimpleDSLAST;
  var runnable: ISimpleDSLProgram): boolean;
var
  i: integer;
begin
  FErrors := false;
  FAST := ast;
  for i := 0 to ast.Functions.Count - 1 do begin
    if i > 0 then begin
      WritelnText;
      WritelnText;
    end;
    DumpFunction(ast.Functions[i]);
  end;
  FDump.Text := FText;
  Result := not FErrors;
end;
```

Код программы собирается в поле `FText: string`. Два вспомогательных метода `WritelnText` используются для добавления данных в это поле.

```delphi
procedure TSimpleDSLCodegenDump.WritelnText(const s: string);
begin
  WriteText(s);
  WriteText(#13#10);
end;

procedure TSimpleDSLCodegenDump.WriteText(const s: string);
begin
  FText := FText + s;
end;
```

Я покажу только две части этого "генератора кода" так как он довольно скучен. Как первый пример, эта функция записывает исходный код одной функции.

```delphi
procedure TSimpleDSLCodegenDump.DumpFunction(const func: TASTFunction);
begin
  FCurrentFunc := func;
  WriteText(Format('%s(%s) ', [func.Name, ''.Join(',', func.ParamNames.ToArray)]));
  DumpBlock('', func.Body);
  FCurrentFunc := nil;
end;
```

Ссылка на текущую функцию сохраняется снаружи так как она нужна нам в методе который записывает название переменной (не показан здесь). Затем мы записываем название функции, с последующим списком параметров. Хелпер `Join` для строк соединяет параметры в одну строку с разделителем в виде запятой. В конце мы вызываем `DumpBlock` для записи тела функции.

Во втором примере, метод `DumpExpression`, записывает выражение. Он вызывает `DumpTerm` для записи первого слагаемого, записывает оператор (если он есть) и записывает второе слагаемое.

```delphi
procedure TSimpleDSLCodegenDump.DumpExpression(const expr: TASTExpression);
begin
  DumpTerm(expr.Term1);
  case expr.BinaryOp of
    opNone:        Exit;
    opAdd:         WriteText(' + ');
    opSubtract:    WriteText(' - ');
    opCompareLess: WriteText(' < ');
    else begin
      WritelnText('*** Unexpected operator');
      FErrors := true;
    end;
  end;
  DumpTerm(expr.Term2);
end
```

Если мы запустим этот "генератор кода" на простой программе вычисляющей i-тое число Фибоначчи, то...

```delphi
'fib(i) {                          '#13#10 +
'  if i < 3 {                      '#13#10 +
'    return 1                      '#13#10 +
'  } else {                        '#13#10 +
'    return fib(i-2) + fib(i-1)    '#13#10 +
'  }                               '#13#10 +
'}                                 ' 
```

...мы увидим что результат довольно близок к оригиналу

```c
fib(i) {
  if i < 3  {
    return 1
  }  else  {
    return fib(i - 2) + fib(i - 1)
  }
}
```

Разделители немного отличаются, но это не имеет значения так как мой игрушечный язык игнорирует пробельные символы. Это даёт нам уверенность что AST действительно правильно сгенерированно (как минимум в некоторых случаях). Чтобы быть более уверенными в правильной работе парсера мы могли бы написать больше тестов... или мы можем просто поиграть с компилятором, написать больше программ и проверить что они работают корректно. Однако, чтобы это сделать нам нужен сам компилятор.
