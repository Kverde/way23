---
title: "Написание простого DSL компилятора на Delphi (7. Компилятор AST)"
date: "2019-06-11"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
  - "перевод"
  - "компиляторы"
---

# {{ $frontmatter.title }}

Перевод поста [Writing a Simple DSL Compiler with Delphi (7. AST Compiler)](https://www.thedelphigeek.com/2017/11/writing-simple-dsl-compiler-with-delphi.html).

Эта статья представляет собой описание компилятора AST используемого для проекта моего языка программирования. Если вы только начинаете читать эту серию, то я бы рекомендовал вам начать с [этого поста](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-0/). Как минимум вы должны прочитать предыдущий пост [Intermezzo](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-inte/) так как он разъясняет некоторые части компилятора которых я не касаюсь здесь.

В каркасе моего игрушечного компилятора, компилятор (или `codegen`, как он называется внутри) — часть кода которая реализует интерфейс `ISimpleDSLCodegen`. Этот интерфейс предоставляет только одну функцию, `Generate`, которая принимает абстрактное синтаксическое дерево и преобразует его в объект, который реализует интерфейс `ISimpleDSLProgram`, который позволяет вам вызывать любую функцию скомпилированной программы по имени.

```delphi
type
  TParameters = TArray;
  TFunctionCall = reference to function (const parameters: TParameters): integer;
  ISimpleDSLProgram = interface ['{2B93BEE7-EF20-41F4-B599-4C28131D6655}']
    function  Call(const functionName: string; const params: TParameters;       var return: integer): boolean;
   end;

  ISimpleDSLCodegen = interface ['{C359C174-E324-4709-86EF-EE61AFE3B1FD}']
    function Generate(const ast: ISimpleDSLAST;
      var runnable: ISimpleDSLProgram): boolean;
  end;
```

Компилятор по умолчанию реализован классом `TSimpleDSLCodegen` в модуле `SimpleDSLCompiler.Compiler`. Методы в этом классе в основном занимаются чтением и пониманием AST пока код, фактически, создаётся в методах в модуле `SimpleDSLCompiler.Compiler.Codegen`.

Этот компилятор создаёт программу которая является интерфейсом класса `TSimpleDSLProgram` (также находящемся в `SimpleDSLCompiler.Compiler`).

Функционирование компилятора очень похоже на компилятор представленный в Intermezzo — с одним критичным отличием. Выражения в моём игрушечном языке могут использовать параметры функций как слагаемые. Поэтому вычислитель выражений должен иметь доступ к параметрам текущей функции.

История начинается в методе `TSimpleDSLCodegen.Generate` который для каждой функции в дереве сначала компилирует тело функции (`CompileBlock`) и затем генерирует функциональную обёртку для этого тела (`CodegenFunction`).

```delphi
function TSimpleDSLCodegen.Generate(const ast: ISimpleDSLAST; var runnable:
  ISimpleDSLProgram): boolean;
var
  block      : TStatement;
  i          : integer;
  runnableInt: ISimpleDSLProgramEx;
begin
  Result := false; //to keep compiler happy
  FAST := ast;
  runnable := TSimpleDSLProgram.Create;
  runnableInt := runnable as ISimpleDSLProgramEx;
  for i := 0 to ast.Functions.Count - 1 do begin
    if not CompileBlock(ast.Functions[i].Body, block) then
      Exit;
    runnableInt.DeclareFunction(i, ast.Functions[i].Name,       CodegenFunction(block));
  end;
  Result := true;
end;
```

Давайте начнём с последней функции так как она даст нам больше контекста (каламбур, как вы увидите скоро).

```delphi
type
  PExecContext = ^TExecContext;
   TExecContext = record
    Functions: TArray;
  end;

  TParameters = TArray;

function CodegenFunction(const block: TStatement): TFunction;
begin
  Result :=
    function (execContext: PExecContext; const params: TParameters): integer
    var
      context: TContext;
    begin
      context.Exec := execContext;
      context.Params := params;
      context.Result := 0;
      block(context);
      Result := context.Result;
    end;
end;
```

`CodegenFunction` создаёт основную обёртку в виде анонимного метода для текущей функции. Этот анонимный метод получит контекст выполнения, который позволит этой функции вызывать другие функции. Затем анонимный метод построит контекст функции который грубо соответствует стековому фрейму ([stack frame](https://ru.wikipedia.org/wiki/Стековый_кадр)) производимому "нормальным" компилятором. Этот контекст хранит указатель на контекст выполнения и копию параметров (значений) переданных в функцию. Затем он вызывает `block(context)` для выполнения переданного блока.

Спустимся на один уровень ниже... Функция `TSimpleDSLCodegen.CompileBlock` компилирует каждое выражение в блоке вызовом `CompileStatement` и затем вызывает `CodegenBlock` для обёртки скомпилированных выражений в блок.

```delphi
function CodegenBlock(const statements: TStatements): TStatement;
begin
  Result :=
    procedure (var context: TContext)
    var
      stmt: TStatement;
    begin
      for stmt in statements do
        stmt(context);
    end;
end;
```

Скомпилированный код, который реализует блок, снова является анонимным методом. Он принимает контекст (передаваемый анонимным методом реализующим функцию) и просто передаёт этот же контекст во все выражения в блоке.

Это продолжается и продолжается. Большая часть кода довольна скучна и предсказуема. Например, это метод который генерирует код для оператора `if`.

```delphi
function CodegenIfStatement(const condition: TExpression; const thenBlock,
  elseBlock: TStatement): TStatement;
begin
  Result :=
    procedure (var context: TContext)
    begin
      if condition(context) <> 0 then
        thenBlock(context)
      else
        elseBlock(context);
    end;
end;
```

Вещи становятся интереснее как только мы хотим скомпилировать слагаемое. Слагаемое может представлять константу (целое число), параметр (названный `variable` в codegen так как в будущем может быть добавлена поддержка переменных) или вызовом функции.

```delphi
function TSimpleDSLCodegen.CompileTerm(const astTerm: IASTTerm;   var codeTerm: TExpression): boolean;
var
  termConst   : IASTTermConstant;
  termFuncCall: IASTTermFunctionCall;
  termVar     : IASTTermVariable;
begin
  Result := true;
  if Supports(astTerm, IASTTermConstant, termConst) then
    codeTerm := CodegenConstant(termConst.Value)
  else if Supports(astTerm, IASTTermVariable, termVar) then
    codeTerm := CodegenVariable(termVar.VariableIdx)
  else if Supports(astTerm, IASTTermFunctionCall, termFuncCall) then
    Result := CompileFunctionCall(termFuncCall, codeTerm)
  else
    Result := SetError('*** Unexpected term');
end;
```

Компиляция константы тривиальна. Нам просто нужна функция возвращающая эту константу.

```delphi
function CodegenConstant(value: integer): TExpression;
begin
  Result :=
    function (var context: TContext): integer
    begin
      Result := value;
    end;
end;
```

Доступ к параметрам немного сложнее. AST содержит индекс этого параметра и мы просто должны применить его к свойству `Params` контекста.

```delphi
function CodegenVariable(varIndex: integer): TExpression;
begin
  Result :=
    function (var context: TContext): integer
    begin
      Result := context.Params[varIndex];
    end;
end;
```

Генерация вызова функции немного более сложная. Она должна настроить массив параметров который будет передан в вызов функции, найти корректную функцию через контекст запуска и затем вызывать функцию.

```delphi
function CodegenFunctionCall(funcIndex: integer;   const params: TFuncCallParams): TExpression;
begin
  Result :=
    function (var context: TContext): integer
    var
      funcParams: TParameters;
      iParam    : Integer;
    begin
      SetLength(funcParams, Length(params));
      for iParam := Low(params) to High(params) do
        funcParams[iParam] := params[iParam](context);
      Result := context.Exec.Functions[funcIndex](context.Exec, funcParams);
    end;
end;
```

В конце компилятор производит большой анонимный метод, использующий внутри другие анонимные методы, и который при вызове возвращает результат.

Например, эта минимальная программа ...

```
inc(i) { return i+1 }
```

... генерирует что-то похожее на следующее чудовище. В реальности код даже более странный так как он должен обрабатывать захваченные переменные.

```delphi
function (execContext: PExecContext; const params: TParameters): integer
var
  context: TContext;
begin
  context.Exec := execContext;
  context.Params := params;
  context.Result := 0;
 (procedure (var context: TContext)
  var
    stmt: TStatement;
  begin
    for stmt in [
                procedure (var context: TContext)
                begin
                  context.Result :=
                   (function (var context: TContext): integer
                    begin
                      Result :=
                       (function (var context: TContext): integer
                        begin
                          Result := context.Params[0];
                        end)(context)
                        +
                       (function (var context: TContext): integer
                        begin
                          Result := 1;
                        end)(context);
                    end)(context);
                end
                ]
    do
      stmt(context);
  end)(context);
  Result := context.Result;
end;
```

Он определённо не для слабонервных, но вы не должны смотреть скомпилированный код (конечно, исключая случая отладки компилятора).

Вы можете удивится скорости этого кода. Должен признать — не очень быстро. Я дам вам более точные цифры в следующей части этой серии которая будет описывать интерпретатор для этого языка.
