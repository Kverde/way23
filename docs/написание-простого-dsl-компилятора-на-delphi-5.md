---
title: "Написание простого DSL компилятора на Delphi (5. Фреймворк)"
date: "2019-06-08"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
  - "перевод"
  - "компиляторы"
---

# {{ $frontmatter.title }}

Перевод поста [Writing a Simple DSL Compiler with Delphi (5. Framework)](https://www.thedelphigeek.com/2017/10/writing-simple-dsl-compiler-with-delphi.html).

Эта статья представляет собой описание фреймворка используемого для проекта моего языка программирования. Если вы только начинаете читать эту серию, то я бы рекомендовал вам начать с [этого поста](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-0/).

Сейчас у нас есть работающий [парсер](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-4/) который преобразует строку кода в [абстрактное синтаксическое дерево](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-2/). Однако ещё не время писать о самой интересной части — компиляторе — сначала мы должны сделать интеграцию и тестирование.

Мой игрушечный компилятор использует очень простой фреймворк доступ к которому производится через интерфейс `ISimpleDSLCompiler` (модуль `SimpleDSLCompiler`). Уместная часть интерфейса показана ниже:

```delphi
type
  ISimpleDSLCompiler = interface ['{7CF78EC7-023B-4571-B310-42873921B0BC}']
    function  Codegen: boolean;
    function  Compile(const code: string): boolean;
    function  Parse(const code: string): boolean;
    property AST: ISimpleDSLAST read GetAST;
    property Code: ISimpleDSLProgram read GetCode;
    property ASTFactory: TSimpleDSLASTFactory       read GetASTFactory write SetASTFactory;
    property CodegenFactory: TSimpleDSLCodegenFactory       read GetCodegenFactory write SetCodegenFactory;
    property ParserFactory: TSimpleDSLParserFactory       read GetParserFactory write SetParserFactory;
    property TokenizerFactory: TSimpleDSLTokenizerFactory       read GetTokenizerFactory write SetTokenizerFactory;
   end;
```

Фреймворк представляет функции для разбора входных данных (`Parse`), генерации исполняемого кода (`Codegen`) и оба эти действия в один шаг (`Compile`), но он понятия не имеет как это делать. Вся функциональность реализована снаружи — через токинизатор, парсер и движок генерации кода что который создаётся в фабричном методе (`TokenizerFactory`).

Чтобы сделать конфигурацию простой, `TSimpleDSLCompiler.Create` устанавливает фабрики по умолчанию, создавая типичные классы движков. Если вы хотите подключить свою собственную реализацию отдельного шага, вы можете сделать это установив подходящее свойство `XXXFactory` перед вызовом любой функции этого интерфейса. Мы будем использовать эту возможность для реализации "AST Dumper" в следующей части этого блога.

```delphi
constructor TSimpleDSLCompiler.Create;
begin
  inherited Create;
  ASTFactory := CreateSimpleDSLAST;
  CodegenFactory := CreateSimpleDSLCodegen;
  ParserFactory := CreateSimpleDSLParser;
  TokenizerFactory := CreateSimpleDSLTokenizer;
end;
```

Давайте быстро взглянем на все три функции API. Самая важная — `Compile`, не делает ничего кроме вызова парсера и (если обрабатываемый код корректен) генератора кода. Здесь нет ничего особенного.

```delphi
function TSimpleDSLCompiler.Compile(const code: string): boolean;
begin
  Result := Parse(code);
  if Result then
    Result := Codegen;
end;
```

Вторая — `Parse`, создаёт движки парсера и токинезатора, подготавливает AST (`FAST`) и вызывает метод парсера `Parse`. Большинство из этого просто обвязка, и вся реальная работа делается в `parser.Parse`.

```delphi
function TSimpleDSLCompiler.Parse(const code: string): boolean;
var
  parser   : ISimpleDSLParser;
  tokenizer: ISimpleDSLTokenizer;
begin
  LastError := '';
  parser := ParserFactory();
  tokenizer := TokenizerFactory();
  FAST := ASTFactory();
  Result := parser.Parse(code, tokenizer, FAST);
  if not Result then begin
    FAST := nil;
    LastError := (parser as ISimpleDSLErrorInfo).ErrorInfo;
  end
end;
```

Последний — `Codegen` такой же простой. После нескольких проверок он создаёт движок генерации кода и вызывает его метод `Generate` передавая в него AST. Мы не рассматривали генератор кода, так что пока достаточно сказать, что генератор кода предоставляет одну функцию — `Generate` которая конвертирует `ISimpleDSLAST` в `ISimpleDSLProgram`.

```delphi
function TSimpleDSLCompiler.Codegen: boolean;
var
  codegen  : ISimpleDSLCodegen;
begin
  LastError := '';
  if not assigned(FAST) then
    Exit(SetError('Nothing to do'))
  else begin
    codegen := CodegenFactory();
    Result := codegen.Generate(FAST, FCode);
    if not Result then begin
      FCode := nil;
      LastError := (codegen as ISimpleDSLErrorInfo).ErrorInfo;
    end;
  end;
end;
```

Всё это позволяет нам очень просто вызывать компилятор:

```delphi
compiler := CreateSimpleDSLCompiler;
if not compiler.Compile(CMultiProcCode) then
  Writeln('Compilation/codegen error: ' +     (compiler as ISimpleDSLErrorInfo).ErrorInfo); 
```

В следующей части мы увидим как можно сохранить сгенерированное AST в текстовую форму заменой `CodegenFactory`.
