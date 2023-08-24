---
title: "Написание простого DSL компилятора на Delphi (Intermezzo)"
date: "2019-06-10"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
  - "перевод"
  - "компиляторы"
  - "грамотное-программирование"
---

# {{ $frontmatter.title }}

Перевод поста [Writing a Simple DSL Compiler with Delphi (Intermezzo)](https://www.thedelphigeek.com/2017/10/writing-simple-dsl-compiler-with-delphi_17.html).

Когда я подготавливал статью про компилятор для моего [игрушечного языкового проекта](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-0/), я обнаружил что концепцию обёртки целой программы в связку анонимных функций (что делает компилятор) чрезвычайно сложна для объяснения. Поэтому я подготовил упрошенную версию компилятора, написанную для очень упрошенного языка... а затем я так и не смог остановится и добавил AST, пакрсер и токинезатор.

Результатом всего этого является программа [introduction.dpr](https://github.com/gabr42/SimpleDSLCompiler/blob/master/introduction.dpr), автономная программа которая содержит полностью язык (очень тривиальный) вместе с полной документацией, написанная в стиле [Грамотного программирования](https://ru.wikipedia.org/wiki/Грамотное_программирование). Упрощено — вы можете читать её сверху вниз как историю.

В качестве intermezzo и для упрощения моего объяснения компилятора, я опишу эту программу здесь полностью, отформатировав её как пост в блог.

## introduction.dpr

Эта программа является мягким введением в тему "compiler-compiler" (программ которые генерируют компиляторы или их части). Она написана в стиле Грамотного программирования и предназначена для чтения от начала до конца.

```delphi
program introduction;
{$APPTYPE CONSOLE}
{$R *.res}
uses
  System.SysUtils,
  System.Classes,
  System.Character,

  System.Generics.Collections;
```

Наша задача: мы хотим вычислять выражения в форме

```
   number1 + number2 + ... + numberN
```

Все числа целые и позитивные, только один оператор — сложение, переполнение игнорируется.

Формально, мы можем описать нашу программу следующей грамматикой

```
S → Term
Term → number
Term → Term '+' Term
```

Пробельные символы игнорируются парсером и следовательно не являются частью грамматики.

Мы начнём с очень простого AST который будет хранить разобранную версию программы

```delphi
type
  TTerm = class abstract
  end; 

  TAST = TTerm;
```

На верху нашего дерева находится 'term' (слагаемое). _Слагаемое_ может быть либо _константой_ либо _сложением_.

_Константа_, как и можно ожидать, содержит целочисленное значение.

Здесь мы непоследовательны — язык позволяет только позитивные числа, но AST более общее и допускает негативные числа. Мы будем просто игнорировать это.

```delphi
  TConstant = class(TTerm)
  strict private
    FValue: integer;
  public
    constructor Create(AValue: integer);
    property Value: integer read FValue write FValue;
  end;
```

_Сложение_ — бинарная операция над двумя _слагаемыми_ (левым и правым).

```delphi
  TAddition = class(TTerm)
  strict private
    FTerm1: TTerm;
    FTerm2: TTerm;
  public
    constructor Create(ATerm1, ATerm2: TTerm);
    destructor  Destroy; override;
    property Term1: TTerm read FTerm1 write FTerm1;
    property Term2: TTerm read FTerm2 write FTerm2;
  end;

constructor TConstant.Create(AValue: integer);
begin
  inherited Create;
  FValue := AValue;
end;

constructor TAddition.Create(ATerm1, ATerm2: TTerm);
begin
  inherited Create;
  FTerm1 := ATerm1;
  FTerm2 := ATerm2;
end;
```

Объект `TAddition` является владельцем своих дочерних объектов.

```delphi
destructor TAddition.Destroy;
begin
  FreeAndNil(FTerm1);
  FreeAndNil(FTerm2);
  inherited;

end;
```

Следующая функция строит AST из массива чисел. Владелец отвечает за уничтожение полученного AST.

```delphi
function CreateAST(const values: TArray): TAST;
var
  iValue: integer;
begin
  if Length(values) = 0 then

    Exit(nil);
```

Мы будем создавать _слагаемые_ из массив в начиная с конца к началу и использовать промежуточные результаты как слагаемые в следующих слагаемых.

```delphi
  Result := TConstant.Create(values[High(values)]);

  for iValue := High(values) - 1 downto Low(values) do
    Result := TAddition.Create(TConstant.Create(values[iValue]), Result);

end;
```

Вызов `CreateAST([1, 2, 3])` создаст следующее AST с тремя узлами:

```delphi
TAddition
   Term1 = TConstant
           Value = 1
   Term2 = TAddition
           Term1 = TConstant
                   Value = 2
           Term2 = TConstant
                   Value = 3
```

Давайте сделаем из этого тест.

Сначала, несколько вспомогательных функций, которые одновременно проверяют и преобразовывают тип.

```delphi
function IsConstant(term: TTerm; out add: TConstant): boolean;
begin
  Result := term is TConstant;
  if Result then
    add := TConstant(term);
end;

function IsAddition(term: TTerm; out add: TAddition): boolean;
begin
  Result := term is TAddition;
  if Result then
    add := TAddition(term);

end;
```

И теперь реальный тест.

```delphi
procedure TestCreateAST;
var
  add1  : TAddition;
  add2  : TAddition;
  ast   : TAST;
  const1: TConstant;
  const2: TConstant;
  const3: TConstant;
begin
  ast := CreateAST([1, 2, 3]);
  try
    if assigned(ast)
       and IsAddition(ast, add1)
       and IsConstant(add1.Term1, const1) and (const1.Value = 1)
       and IsAddition(add1.Term2, add2)
       and IsConstant(add2.Term1, const2) and (const2.Value = 2)
       and IsConstant(add2.Term2, const3) and (const3.Value = 3)
    then
      // everything is fine
    else
      raise Exception.Create('CreateAST is not working correctly!');
  finally FreeAndNil(ast); end;

end;
```

Мы напишем просто парсер который создаст AST из выражения в форме `number1 + number2 + ... numberN`.

Наш "язык" имеет только два токена: 'number' (число) и 'addition' (сложение). Пробельные символы не важны будут игнорироваться токинезатором (лексическим анализатором). Все не распознанные символы будут возвращать токен 'unknown'.

```delphi
type
  TTokenKind = (tkNumber, tkAddition, tkUnknown);
```

Больше информации про токены:

- tkNumber — "\\d+"
- tkAddition — "+"
- "\\s+" — пропускаются
- tkUnknown — принимает всё остальное: "\[^\\d+\\s\]"

Токинезатор и парсер нуждаются только в следующей информации:

- Входная строка.
- Текущая позиция.

Класс `TStringStream` обеспечивает оба эти пункта так что мы будем использовать его.

```delphi
  TParserState = TStringStream;
```

Единственная функция токинезатора возвращает следующий токен и его значение как параметры с модификатором `var` и возвращает `True` если пара токен\\значение была возвращена и `False` если достигнут конец потока.

Эта реализация очень проста, но одновременно крайне неоптимизирована.

```delphi
function GetToken(state: TParserState; var token: TTokenKind; var value: string): boolean;
var
  nextChar: string;
  position: int64;
begin
  repeat
    nextChar := state.ReadString(1);
    Result := (nextChar <> '');
    // Ignore whitespace
  until (not Result) or (not nextChar[1].IsWhiteSpace);

  if Result then begin
    value := nextChar[1];

    // Addition
    if value = '+' then
      token := tkAddition

    // Number
    else if value[1].IsNumber then begin
      token := tkNumber;
      repeat
        position := state.Position;
        nextChar := state.ReadString(1);

        // End of stream, stop
        if nextChar = '' then
          break //repeat

        // Another number, append
        else if nextChar[1].IsNumber then
          value := value + nextChar[1]

        // Read too far, retract
        else begin
          state.Position := position;
          break; //repeat
        end;
      until false;
    end

    // Unexpected input
    else
      token := tkUnknown;
  end;

end;
```

Необходимо несколько тестов для токинезатора..

`ExpectFail(state)` вызывает `GetToken` и ожидает что он вернёт `False`.

```delphi
procedure ExpectFail(state: TParserState);
var
  token: TTokenKind;
  value: string;
begin
  if GetToken(state, token, value) then
    raise Exception.Create('ExpectFail failed');

end;
```

`Expect(State, token, value)` вызывает `GetNextToken` и ожидает что он вернёт `True` и те же токен/значение которые переданы в параметрах.

```delphi
procedure Expect(state: TParserState; expectedToken: TTokenKind;   expectedValue: string);
var
  token: TTokenKind;
  value: string;
begin
  if not GetToken(state, token, value) then
    raise Exception.Create('Expect failed')

  else if token <> expectedToken then
    raise Exception.CreateFmt(            'Expect encountered invalid token kind (%d, expected %d)',
            [Ord(token), Ord(expectedToken)])

  else if value <> expectedValue then
    raise Exception.CreateFmt(            'Expect encountered invalid value (%s, expected %s)',
            [value, expectedValue])
end;

procedure TestGetToken;
var
  state: TParserState;
begin
  state := TParserState.Create('');
  ExpectFail(state);
  FreeAndNil(state);

  state := TParserState.Create('1');
  Expect(state, tkNumber, '1');
  ExpectFail(state);
  FreeAndNil(state);

  state := TParserState.Create('1+22 333 Ab');
  Expect(state, tkNumber, '1');
  Expect(state, tkAddition, '+');
  Expect(state, tkNumber, '22');
  Expect(state, tkNumber, '333');
  Expect(state, tkUnknown, 'A');
  Expect(state, tkUnknown, 'b');
  ExpectFail(state);
  FreeAndNil(state);

end;
```

Парсер принимает любую допустимую строку и преобразует её в AST.

Если программа корректна, он создаст AST для этой программы, вернёт его в параметре `ast` и результат функции будет `True`.

Если программа не корректна, параметр `ast` будет `nil` и результат функции `False`.

Пустой ввод не допускается.

```delphi
function Parse(const prog: string; var ast: TAST): boolean;
var
  accept : TTokenKind;
  numbers: TList;
  state  : TParserState;
  token  : TTokenKind;
  value  : string;
begin
```

Мы можем легко увидеть как показанная грамматика генерирует следующую последовательность токенов:

```
   tkNumber (tkAddition tkNumber)*
```

(Доказательство опущено в качестве упражнения для читателя)

Код проверит синтаксис и извлечёт из строки все числа в `TArray`.

В конце он передаст этот массив в функцию `CreateAST` для создания AST.

```delphi
   ast := nil;
  Result := false;

  state := TParserState.Create(prog);
  try
    numbers := TList.Create;
    try
      accept := tkNumber;
      while GetToken(state, token, value) do begin
        if token <> accept then
          Exit;
        if accept = tkNumber then begin
          numbers.Add(StrToInt(value));
          accept := tkAddition;
        end
        else
          accept := tkNumber;
      end;

      if accept = tkNumber then
        // Last token in the program was tkAddition, which is not allowed.
        Exit;

      if numbers.Count > 0 then begin
        ast := CreateAST(numbers.ToArray);
        Result := true;
      end;
    finally FreeAndNil(numbers); end;
  finally FreeAndNil(state); end;

end;
```

Нам нужно больше тестов...

```delphi
procedure TestParse;
var
  add1  : TAddition;
  add2  : TAddition;
  ast   : TAST;
  const1: TConstant;
  const2: TConstant;
  const3: TConstant;
begin
  if not Parse('1+2 + 3', ast) then
    raise Exception.Create('Parser failed');
  try
    if assigned(ast)
       and IsAddition(ast, add1)
       and IsConstant(add1.Term1, const1) and (const1.Value = 1)
       and IsAddition(add1.Term2, add2)
       and IsConstant(add2.Term1, const2) and (const2.Value = 2)
       and IsConstant(add2.Term2, const3) and (const3.Value = 3)
    then
      // everything is fine
    else
      raise Exception.Create('CreateAST is not working correctly!');
  finally FreeAndNil(ast); end;

  if Parse('1+2 +', ast) then begin
    if assigned(ast) then
      raise Exception.Create('Invalid program resulted in an AST!)')
    else
      raise Exception.Create('Invalid program compiled into an empty AST!');
  end;

end;
```

Для интерпретации этого AST мы будем использовать простую рекурсию.

```delphi
function InterpretAST(ast: TAST): integer;
var
  add1  : TAddition;
  const1: TConstant;
begin
  if not assigned(ast) then
    raise Exception.Create('Result is undefined!');
  // Alternatively, we could use Nullable as result, 
  // with Nullable.Null as a default value.

  if IsConstant(ast, const1) then
    Result := const1.Value
  else if IsAddition(ast, add1) then
    Result := InterpretAST(add1.Term1) + InterpretAST(add1.Term2)
  else
    raise Exception.Create('Internal error. Unknown AST element: ' +      ast.ClassName);

end;
```

Несколько sanity tests всегда приветствуются...

```delphi
procedure TestInterpretAST;

  procedure Test(const testName: string; const values: TArray;    expectedResult: integer);
  var
    ast       : TAST;
    calcResult: integer;
  begin
    ast := CreateAST(values);
    if not assigned(ast) then
      raise Exception.CreateFmt('Compilation failed in test %s', [testName]);

    try
      calcResult := InterpretAST(ast);
      if calcResult <> expectedResult then
        raise Exception.CreateFmt(
                'Evaluation failed in test %s. ' +
                'Calculated result %d <> expected result %d',
                [testName, calcResult, expectedResult]);
    finally
      FreeAndNil(ast);
    end;
  end;

begin
  Test('1', [42], 42);
  Test('2', [1, 2, 3], 6);
  Test('3', [2, -2, 3, -3], 0);

end;
```

Для компиляции этого AST, мы должны:

- Изменить каждый узел с типом 'constant' в анонимную функцию которая возвращает значение этого узла.
- Изменить каждый узел с типом 'summation' в анонимную функцию которая возвращает значение двух параметров.
    - Первый - анонимная функция которая вычисляет значение левого слагаемого и
    - второй - анонимная функция которая вычисляет значение правого слагаемого
- [Механизм связывания переменных](http://docwiki.embarcadero.com/RADStudio/Tokyo/en/Anonymous_Methods_in_Delphi#Variable_Binding_Mechanism) заботится о получении правильных входных данных

```delphi
function MakeConstant(value: integer): TFunc;
begin
  Result :=
    function: integer
    begin
      Result := value;
    end;
end;

function MakeAddition(const term1, term2: TFunc): TFunc;
begin
  Result :=
    function: integer
    begin
      Result := term1() + term2();
    end;
end;
```

Важная точка здесь в том что не `MakeConstant` не `MakeAddition` не делает никаких вычислений. Они просто настраивают анонимный метод и возвращают ссылку на него, что более или менее соответствует созданию объекта и возврату его интерфейса, но с добавление затрат на связывание переменных (variable capturing).

Кстати, так как наш "язык" только вычисляет целочисленные выражения что всегда на выходе даёт целое число, то "функция которая возвращает число" или `TFunc` точно подходит под наши требования.

Для "компиляции" AST мы должны использовать рекурсию так как нам нужно создать дочерне-вычисляемые анонимные функции перед их вычислением (как параметры) для создания анонимной функции вычисляющей родительский узел.

```delphi
function CompileAST(ast: TTerm): TFunc;
var
  add1: TAddition;
  const1: TConstant;
begin
  if IsConstant(ast, const1) then
    // this node represents a constant
    Result := MakeConstant(const1.Value)
  else if IsAddition(ast, add1) then
    // this node represent an expression
    Result := MakeAddition(CompileAST(add1.Term1), CompileAST(add1.Term2))
  else

    raise Exception.Create('Internal error. Unknown AST element: ' +      ast.ClassName);
end;
```

Этот код работает корректно потому что захватывает **значение** `const1.Value`, а не ссылку (указатель) на него. Откуда я это знаю? Потому что функция `TestCompileAST` явным образом проверяет это поведение.

Вызывая `CompileAST(CreateAST[1,2,3])` будет сгенерирована следующая анонимная функция:

```
(*
function: integer
begin
  Result :=
    (function: integer
     begin
       Result := 1;
     end)()
    +
    (function: integer
     begin
       Result :=
         (function: integer
          begin
            Result := 2;
          end)()
         +
         (function: integer
          begin
            Result := 3;
          end)();
     end)();

end;
*)
```

(\*): я знаю что результатом этого будет уточка памяти так как AST не уничтожается.

Трудно проверить что сгенерированная анонимная функция в корректной форме, но мы можем запустить её на некотором числе тестов и надеятся что всё ОК ;)

```delphi
procedure TestCompileAST;

  procedure Test(const testName: string; const prog: string; expectedResult: integer);
  var
    add1      : TAddition;
    ast       : TAST;
    calcResult: integer;
    code      : TFunc;
    const1    : TConstant;
  begin
    if not (Parse(prog, ast) and assigned(ast)) then
      raise Exception.CreateFmt('Parser failed in test %s', [testName]);

    try
      code := CompileAST(ast);
      if not assigned(code) then

        raise Exception.CreateFmt('Compilation failed in test %s', [testName]);
```

Давайте удостоверимся что `ast.Value` был связан по значению а не по ссылке.

Изменение AST сейчас не должно влиять на скомпилированный код.

```delphi
       if (IsAddition(ast, add1) and IsConstant(add1.Term1, const1))
         or IsConstant(ast, const1)
      then
        const1.Value := const1.Value + 1
      else
        raise Exception.CreateFmt('Unexpected AST format in test %s',         [testName]);

      calcResult := code(); //execute the compiled code

      if calcResult <> expectedResult then
        raise Exception.CreateFmt(
                'Evaluation failed in test %s. ' +
                'Codegen result %d <> expected result %d',
                [testName, calcResult, expectedResult]);

    finally
      FreeAndNil(ast);
    end;
  end;

begin
  Test('1', '42', 42);
  Test('2', '1 + 2 + 3', 6);
  Test('3', '2 + 2 +3+3', 10);

end;
```

Если все тесты проходят, мы запустим цикл Чтение-Выполнение-Вывод (Read-Eval-Print Loop) так что пользователь сможет проверить наш компилятор.

```delphi
procedure RunREPL;
var
  ast : TAST;
  prog: string;
begin
  repeat
    Write('Enter an expression (empty line exits): ');
    Readln(prog);
    if prog = '' then
      break;

    if not Parse(prog, ast) then
      Writeln('Syntax is not valid')
    else
      Writeln('Result is: ', CompileAST(ast)());
  until false;
end;

begin
   try
```

Запустим все модульные тесты для проверки корректности программы.

```delphi
     Writeln('Running AST creation tests ...');
    TestCreateAST;

    Writeln('Running tokenizer tests ...');
    TestGetToken;

    Writeln('Running parser test ...');
    TestParse;

    Writeln('Running AST interpreter tests ...');
    TestInterpretAST;

    Writeln('Running AST compilation tests ...');
    TestCompileAST;

    RunREPL;
  except
    on E: Exception do begin
      Writeln(E.ClassName, ': ', E.Message);
      Readln;
    end;
  end;
end.
```
