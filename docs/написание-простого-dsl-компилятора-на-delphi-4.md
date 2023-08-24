---
title: "Написание простого DSL компилятора на Delphi (4. Парсер)"
date: "2019-06-07"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
  - "перевод"
  - "компиляторы"
---

# {{ $frontmatter.title }}

Перевод поста [Writing a Simple DSL Compiler with Delphi (4. Parser)](https://www.thedelphigeek.com/2017/09/writing-simple-dsl-compiler-with-delphi_29.html).

Эта статья представляет собой описание парсера используемого для моего игрушечного языка программирования. Если вы только начинаете читать эту серию, то я бы рекомендовал вам начать с [этого поста](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-0/).

Пожалуйста, имейте в виду, что эта статья описывают начальную реализацию парсера. Если вы хотите просматривать код во время чтения статьи, убедитесь, что вы переключились на ветку [dsl\_v1](https://github.com/gabr42/SimpleDSLCompiler/tree/dsl_v1).

После перерыва я вернулся к серии про мой "игрушечный компилятор". Сейчас я опишу работу парсера — части кода которая читает входной поток (обычно в форме [токенов](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-3/)) и генерирует внутреннее представление программы (в моём случае [абстрактное синтаксическое дерево](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-2/)).

Цель моего проекта была в изучении шагов компиляции и парсер был просто обязательным злом с которым я должен был иметь дело. Вот почему он написан в довольно примитивной форме, без использования улучшений как [Pratt parser](http://journal.stuffwithstuff.com/2011/03/19/pratt-parsers-expression-parsing-made-easy/).

Мой парсер представлен как очень простой интерфейс. Он будет принимать код для разбора (как строку), ссылку на токинизатор которые должен использоваться для чтения входного потока и ссылку на корневой элемент результирующего AST. Функция вернёт False если разбор не удастся, в этом случае вызывающая сторона может преобразовать интерфейс парсера к `ISimpleDSLErrorInfo` для получения большей информации об ошибке.

```delphi
type
  ISimpleDSLParser = interface ['{73F3CBB3-3DEF-4573-B079-7EFB00631560}']
    function Parse(const code: string; const tokenizer: ISimpleDSLTokenizer;
      const ast: ISimpleDSLAST): boolean;
  end;
```

Так как программа на моём языке содержит только функции, то реализация функции `Parse` очень простая. Она заполняет несколько полей чтобы любая часть парсера имела доступ до соответствующей информации, инициализирует буфер предварительного просмотра (`FLookaheadIdent`) и разбирает функцию за функцией пока разбор не будет ошибки или токинезатор не сообщит что он достиг конца кода.

```delphi
function TSimpleDSLParser.Parse(const code: string;   const tokenizer: ISimpleDSLTokenizer;
  const ast: ISimpleDSLAST): boolean;
begin
  Result := false;
  FTokenizer := tokenizer;
  FAST := ast;
  FLookaheadIdent := #0;

  tokenizer.Initialize(code);
  while not tokenizer.IsAtEnd do
    if not ParseFunction then
      Exit;

  Result := true;
end;
```

Я не собираюсь показывать весь код парсера в этой короткой статье, только метод `ParseFunction`. Он ожидает найти идентификатор (название функции), с последующей левой круглой скобкой, с последующим, возможно пустым, списком разделённым запятыми идентификаторов (параметры функции), с последующей круглой закрывающейся скобкой и последующим блоком (тело функции).

`ParseFunction` сначала берет идентификатор (название функции). Затем создаёт запись в глобальной таблице функций потому что она может нам понадобится в других частях парсера если функция рекурсивно вызывает себя. По этой же причине она также будет сохранять интерфейс элемента AST функции в `FContext.CurrentFunc`.

Затем она проверяет токен `tkLeftParen`. Если он присутствует, она войдёт в цикл с поиском идентификаторов (названий параметров) либо закрывающей скобки (конец списка параметров) и сохранит все имена параметров в AST (`func.ParamNames.Add`).

Если всё хорошо, она вызовет `ParseBlock` для разбора тела функции и сохранит результат в AST (`func.Body := block`).

```delphi
function TSimpleDSLParser.ParseFunction: boolean;
var
  block   : IASTBlock;
  expected: TTokenKinds;
  func    : IASTFunction;
  funcName: string;
  ident   : string;
  token   : TTokenKind;
begin
  Result := false;

  /// function = identifier "(" [ identifier { "," identifier } ] ")" block

  // function name
  if not FetchToken([tkIdent], funcName, token) then
    Exit(token = tkEOF);

  func := AST.CreateFunction;
  func.Name := funcName;

  // we might need this function in the global table for recursive calls
  AST.Functions.Add(func);

  FContext.CurrentFunc := func;
  try

    // "("
    if not FetchToken([tkLeftParen]) then
      Exit;

    // parameter list, including ")"
    expected := [tkIdent, tkRightParen];
    repeat
      if not FetchToken(expected, ident, token) then
        Exit;
      if token = tkRightParen then
        break //repeat
      else if token = tkIdent then begin
        func.ParamNames.Add(ident);
        expected := expected - [tkIdent] + [tkComma, tkRightParen];
      end
      else if token = tkComma then
        expected := expected + [tkIdent] - [tkComma, tkRightParen]
      else begin
        LastError := 'Internal error in ParseFunction';
        Exit;
      end;
    until false;

    // function body
    if not ParseBlock(block) then
      Exit;

    func.Body := block;
    Result := true;
  finally
    FContext.CurrentFunc := nil;
  end;
end;
```

Токены всегда выбираются функцией `FetchToken` которая принимает список допустимых токенов, пропуская все пробелы и возвращает найденную пару токен\\идентификатор (или набор информации об ошибке включая положение в коде если встретился ошибочный токен).

```delphi
function TSimpleDSLParser.FetchToken(allowed: TTokenKinds; var ident: string;
  var token: TTokenKind): boolean;
var
  loc: TPoint;
begin
  Result := false;
  while GetToken(token, ident) do
    if token in allowed then
      Exit(true)
    else if token = tkWhitespace then
      // do nothing
    else begin
      loc := FTokenizer.CurrentLocation;
      LastError := Format('Invalid syntax in line %d, character %d',         [loc.X, loc.Y]);
      Exit;
    end;
end;
```

Так же как токинезатор, парсер использует подход "помести назад" (push back). Когда он обнаруживает что прочитал лишний токен, он может поместить его обратно вызовом `PushBack`. Функция `GetToken` сначала смотрит в этот буфер и вызывает `tokenizer.GetToken` если буфер пустой.

```delphi
procedure TSimpleDSLParser.PushBack(token: TTokenKind; const ident: string);
begin
  Assert(FLookaheadIdent = #0, 'TSimpleDSLParser: Lookahead buffer is not empty');
  FLookaheadToken := token;
  FLookaheadIdent := ident;
end;

function TSimpleDSLParser.GetToken(var token: TTokenKind; var ident: string): boolean;
begin
  if FLookaheadIdent <> #0 then begin
    token := FLookaheadToken;
    ident := FLookaheadIdent;
    FLookaheadIdent := #0;
    Result := true;
  end
  else
    Result := FTokenizer.GetToken(token, ident);
end;
```

Как вы можете видеть, парсер действительно очень скучный кусок кода, следующий подходу "это ожидаемый токен, какой следующий?". Конечно, жизнь становится сложнее когда имеешь дело в более сложным синтаксисом, в котором парсер иногда не может точно решить по какому пути следовать и должен пробовать несколько вариантов. Но это тема для отдельного поста.
