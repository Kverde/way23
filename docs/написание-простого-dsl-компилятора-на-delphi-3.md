---
title: "Написание простого DSL компилятора на Delphi (3. Токинезатор)"
date: "2019-06-06"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
  - "перевод"
  - "компиляторы"
---

# {{ $frontmatter.title }}

Перевод поста \[Writing a Simple DSL Compiler with Delphi (3. Tokenizer\])\]([https://www.thedelphigeek.com/2017/09/writing-simple-dsl-compiler-with-delphi.html](https://www.thedelphigeek.com/2017/09/writing-simple-dsl-compiler-with-delphi.html)).

Эта статья представляет собой описание токинезатора используемого для представления "Языка". Если вы только начинаете читать эту серию, то я бы рекомендовал вам начать с [этого поста](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-0/).

Пожалуйста, имейте в виду, что эта статья описывает начальную реализацию токинезатора. Если вы хотите просматривать код во время чтения статьи, убедитесь, что вы переключились на ветку [dsl\_v1](https://github.com/gabr42/SimpleDSLCompiler/tree/dsl_v1).

С этой статьёй я перемещаюсь в важную часть проекта — код который читает исходный код и превращает его в красивое абстрактное синтаксическое дерево. Другими словами, я буду говорить о парсере.

Я должен признать что потратил на парсер так мало времени, как мог. В конце концов, моя основная цель конвертировать AST в запускаемый код, не разбор текста. Тем не менее, нельзя написать компилятор без написания парсера.

Если вы хотите сделать что-то с данными, то вы должны

1. Знать формат в котором они записаны.
2. Написать код который читает входной поток, разбирает его и создаёт в памяти структуры наполненные данными.

Первая задача любого хорошего программиста это создание библиотеки которая будет делать самую трудную работу за него. Так было незадолго до того как такие инструменты появились в области написания компиляторов.

Программисты очень скоро поняли что анализ текста в действительности состоит из двух шагов. На первом шаге вы хотите разделить данныйе на токены (лексемы). Каждый токен представляет собой небольшую часть входных данных имеющую определённое значение. Например, если вы разделите оператор Паскаля

```delphi
a := func(i+42);
```

на отдельные токены, то вы получите

- identifier:a
- whitespace
- becomes
- whitespace
- identifier:func
- left-parent
- identifier:i
- plus
- number:42
- right-parent
- semicolon

Некоторые символы сразу сопоставляются с собственными токенами, например, ";" становится `semicolon`. А некоторые сгруппированы, например, "42" становится `number` со значением 42.

Вторая часть — парсер использует последовательность токенов производимых токинезатором и пробует понять смысл (семантику) — то есть как токены вписываются в формальную спецификацию языка. Это будет тема следующей статьи.

Из-за такого разделения вспомогательные утилиты тоже делятся на две области — одни помогают создавать токинезаторы а другие парсеры. В терминах Unix, например, у нас есть Lex для лексического анализа (токинезация) и Yacc (Yet Another Compiler Compiler) для семантического анализа. В мире Паскаля у нас тоже есть инструменты для генерации компиляторов. Существует довольно приличный [порт на Delphi](https://github.com/RomanYankovsky/ndyacclex), [Plex+Pyacc](http://wiki.freepascal.org/Plex_and_Pyacc) для FreePascal, довольно старый и неподдерживаемый (но бесплатный) [Delphi Compiler Generator](http://www.soft-gems.net/index.php/tools/delphi-compiler-generator) и возможно несколько других инструментов, которых я не нашёл при поверхностным поиске.

Вернёмся назад к теме разговора.

В моём случае язык крайне простой и следовательно токинезатор тоже. Вместо использования специализированных инструментов я просто пошёл дальше и написал его. Как вы уведите, это очень просто.

## Токены

Рассмотрим демонстрационную программу из [первой части](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-1/)

```c
fib(i) {
  if i < 3 {
    return 1
  } else {
    return fib(i-2) + fib(i-1)
  }
}
```

Из этого примера мы можем угадать все токены используемые в Языке

- identifier ("fib", "i", "if", "return" ...)
- number ("1", "2", "3")
- whitespace
- left parenthesis ("(")
- right parenthesis (")")
- left curly bracket ("{")
- right curly bracket ("}")
- less than ("<")
- plus ("+")
- minus ("-")

Есть только два токена которые не покрывает этот пример

- comma (",")
- semicolon (";")

Первый используется для разделения параметров в определении функции и при вызове функции. Второй используется для разделения операторов, но не появляется в этом примере, так как является необязательным непосредственно перед закрывающей фигурной скобкой.

Следующий тип из модуля `SimpleDSL.Compiler.Tokenizer` перечисляет все варианты. В дополнение к уже обсуждённым типам токенов используются:

- `tkUnknown` для представления неожиданных входных данных.
- `tkEOF` как сигнал что достигнут конец входного потока.

```delphi
type
  TTokenKind = (tkUnknown, tkWhitespace,
                tkIdent, tkNumber,
                tkLeftParen, tkRightParen, tkLeftCurly, tkRightCurly,
                tkLessThan, tkPlus, tkMinus,
                tkComma, tkSemicolon,

                tkEOF);
```

## Интерфейс

Токинезатор доступен через очень простой интерфейс

```delphi
ISimpleDSLTokenizer = interface
  function  CurrentLocation: TPoint;
  function  GetToken(var kind: TTokenKind; var identifier: string): boolean;
  procedure Initialize(const code: string);
  function  IsAtEnd: boolean;
end;
```

Очень важная функция `GetToken`. Она возвращает следующий токен из входного потока — `kind` содержит тип токена и `identifier` содержит последовательность символов представляющих токен. Функция возвращает `False` когда достигнут конец входного потока.

Другие функции вспомогательные.

- `IsAtEnd` возвращает `True` когда достигнут конец входного потока.
- `CurrentLocation` возвращает текущую строку и номер символа, это удобно для сообщений об ошибках.
- `Initialize` — инициализирует токинизатор.

```delphi
procedure TSimpleDSLTokenizer.Initialize(const code: string);
begin
  FProgram.Text := code;
  FNextLine := 0;
  FNextChar := 1;
  FLookahead := #0;
  FLastLine := FProgram.Count - 1;
  if FLastLine >= 0 then begin
    FLastLineLen := Length(FProgram[FLastLine]);
    FCurrentLine := FProgram[FNextLine];
  end;

end;
```

Программа хранится внутри `TStringList` `FProgram`. Другие переменные отслеживают текущее положение и чаще используются в методе `GetChar`.

## Чтение входного потока

Давайте взглянем на метод `GetToken`.

```delphi
function TSimpleDSLTokenizer.GetToken(var kind: TTokenKind; var identifier: string): boolean;
var
  ch: char;
begin
  identifier := '';
  Result := GetChar(ch);
  if not Result then begin
    kind := tkEOF;
    Exit;
  end;
  case ch of
    '(': kind := tkLeftParen;
    ')': kind := tkRightParen;
    '{': kind := tkLeftCurly;
    '}': kind := tkRightCurly;
    '+': kind := tkPlus;
    '-': kind := tkMinus;
    '<': kind := tkLessThan;
    ',': kind := tkComma;
    ';': kind := tkSemicolon;
    else if ch.IsLetter then begin
      kind := tkIdent;
      identifier := ch + GetIdent;
    end
    else if CharInSet(ch, ['0'..'9']) then begin
      kind := tkNumber;
      identifier := ch + GetNumber;
    end
    else if ch.IsWhiteSpace then begin
      kind := tkWhitespace;
      SkipWhitespace;
    end
    else
      kind := tkUnknown;
  end;

end;
```

Сначала он считывает следующий символ из потока (через `GetChar`) и завершается если следующего символа нет. Затем обрабатывает все односимвольные токены сразу. После этого идет обработка особых случаев — чтение идентификаторов, строк, и пробелов через методы `GetIdent`, `GetNumber` и `SkipWhitespace` соответственно.

`GetIdent` и `GetNumber` очень похожи, так что я сфокусируюсь на одном из них.

```delphi
function TSimpleDSLTokenizer.GetIdent: string;
var
  ch: char;
begin
  Result := '';
  while GetChar(ch) do begin
    if ch.IsLetter or ch.IsNumber or (ch = '_') then
      Result := Result + ch
    else begin
      PushBack(ch);
      Exit;
    end;
  end;

end;
```

Так как `GetToken` уже прочитал первый символ идентификатора, то `GetIdent` собирает вместе все следующие символы которые являются либо буквой, либо цифрой, либо символом подчёркивания. (и как вы можете видеть, код использует хелперы для типа `Char` - `IsLetter` и `IsNumber` — так что идентификаторы действительно поддерживают Юникод)

Когда появляется неподходящий для идентификатора символ, простейшее решение это просто сказать "Оп, я прочитал слишком много, пожалуйста помести этот последний символ обратно для обработки".

## Одно-символьный буфер

Раз мы только что прочитали на один символ больше, эта операция "пожалуйста, верни последний `GetChar`" обрабатывается простым одно-символьным буфером используемым в `PushBack` и в `GetChar`.

```delphi
procedure TSimpleDSLTokenizer.PushBack(ch: char);
begin
  Assert(FLookahead = #0, 'TSimpleDSLTokenizer: Lookahead buffer is not empty');
  FLookahead := ch;
end;

function TSimpleDSLTokenizer.GetChar(var ch: char): boolean;
begin
  if FLookahead <> #0 then begin
    ch := FLookahead;
    FLookahead := #0;
    Result := true;
  end
  else begin
    Result := not IsAtEnd;
    if Result then begin
      ch := FCurrentLine[FNextChar];
      Inc(FNextChar);
      if FNextChar > Length(FCurrentLine) then begin
        Inc(FNextLine);
        if FNextLine < FProgram.Count then
          FCurrentLine := FProgram[FNextLine];
        FNextChar := 1;
      end;
    end;
  end;
end;
```

`PushBack` просто сохраняет текущий буфер в `FLookahead` (если буфер не пуст, что может произойти только если в токенизере баг). `GetChar` содержит немного больше работы — в дополнение к обработке буфера `FLookahead` он должен также обрабатывать условие окончания строки текста.

Подход _PushBack_ используется также в `GetNumber` и в `SkipWhitespace` (для деталей смотрите код) и в парсере, как мы скоро увидим.
