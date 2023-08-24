---
title: "Написание простого DSL компилятора на Delphi (2. Абстрактное синтаксическое дерево)"
date: "2019-06-05"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
  - "перевод"
  - "компиляторы"
---

# {{ $frontmatter.title }}

Перевод поста [Writing a Simple DSL Compiler with Delphi (2. Abstract Syntax Tree)](https://www.thedelphigeek.com/2017/08/writing-simple-dsl-compiler-with-delphi_28.html).

Эта статья представляет собой описание абстрактного синтаксического дерева, используемого для представления "Языка". Если вы только начинаете читать эту серию, то я бы рекомендовал вам начать с [этого поста](http://way23.ru/написание-простого-dsl-компилятора-на-delphi-0/).

Пожалуйста, имейте в виду, что эта статья описывают начальную реализацию AST. Если вы хотите просматривать код во время чтения статьи, убедитесь, что вы переключились на ветку [dsl\_v1](https://github.com/gabr42/SimpleDSLCompiler/tree/dsl_v1).

[Абстрактное синтаксическое дерево](https://ru.wikipedia.org/wiki/Абстрактное_синтаксическое_дерево) является, проще говоря, символическим представлением программы в виде дерева.

В то время как текстовое представление программы хорошо подходит для нас, людей, компьютерам тяжело с ним справляться. Поэтому специальная часть любого интерпретатора или компилятора, называемая [парсер](https://ru.wikipedia.org/wiki/Синтаксический_анализатор), читает входной поток и преобразует его в машиночитаемый формат — AST. Это дерево может использоваться для множества целей. Мы можем, например, скормить его [интерпретатору](https://ru.wikipedia.org/wiki/Интерпретатор) который запустит программу для нас, или мы можем скормить его [компилятору](https://ru.wikipedia.org/wiki/Компилятор) для генерации запускаемого модуля, или [кросс-компилятору](https://ru.wikipedia.org/wiki/Кросс-компилятор) для генерации эквивалентной программы на другом языке программирования.

В действительности, этот процесс обычно еще более сложный. Парсер использует специальный входной модуль называемый [токинизатор](https://ru.wikipedia.org/wiki/Лексический_анализ) для чтения входного потока и компилятор обычно не создаёт исполняемый модуль напрямую, но производит несколько файлов, которые линкуются в конечную программу.

В случая моего игрушечного проекта компилятора, парсер использует отдельный токинизатор, а компилятор не создаёт запускаемый файл непорсредственно, а производит несколько файлов которые [линкуются](https://ru.wikipedia.org/wiki/Компоновщик) в конечную программу.

В случае моего игрушечного компилятора, парсер использует отдельный токинизатор, в то время как все вроцессы вывода (такие как компилятор) генерируют код, без дополнительных шагов (например, линковки).

![Структура компилятора](images/architecture.png "Структура компилятора")

Достаточно очевидно, что AST является центральной частью всего проекта и поэтому я решил рассказать о нём перед токинизатором и парсером.

В моём случае (и позвольте мне напомнить вам снова, что всё последующее описание применяется к ветке [dsl\_v1](https://github.com/gabr42/SimpleDSLCompiler/tree/dsl_v1)), AST программы начинается с очень простого интерфейса `ISimpleDSLAST`. (я буду показывать все типы в сокращённой форме без геттеров и сеттеров).

```delphi
IASTFunctions = interface
  function  Add(const func: IASTFunction): integer;
  function  Count: integer;
  function  IndexOf(const name: string): integer;
  property Items[idxFunction: integer]: IASTFunction read GetItems; default;
end; { IASTFunctions }

ISimpleDSLAST = interface
   property Functions: IASTFunctions read GetFunctions;
end;
```

Программа в "Языке" это не более чем коллекция функций и интерфейс отражает это.

Каждая функция имеет имя, список параметров и тело.

```delphi
TParameterList = TList<string>;

IASTFunction = interface ['{FA4F603A-FE89-40D4-8F96-5607E4EBE511}']
   property Name: string read GetName write SetName;
   property ParamNames: TParameterList read GetParamNames;
   property Body: IASTBlock read GetBody write SetBody;
end;
```

Тело функции не более чем коллекция операторов.

```delphi
TStatementList = TList;

IASTBlock = interface
   property Statements: TStatementList read GetStatements;
end;
```

Оператором является либо оператор **if**, либо оператор **return**. Других вариантов нет.

```delphi
TASTStatementType = (stIf, stReturn);

IASTStatement = interface
end; { IASTStatement }
```

`IASTStatement` это просто родительский интерфейс для всех интерфейсов операторов и никогда не создаётся сам по себе.

Оператор **return** имеет только одну часть — выражение, которое вычисляется и затем возвращается в виде результат функции.

```delphi
IASTReturnStatement = interface(IASTStatement)
   property Expression: IASTExpression read GetExpression write SetExpression;
end;
```

Оператор **if** более сложный. Он имеет условие (которое тоже является выражением) и следующие за **then** и **else** блоки. (и, как мы уже знаем, блок это просто коллекция операторов)

```delphi
IASTIfStatement = interface(IASTStatement)
   property Condition: IASTExpression read GetCondition write SetCondition;
   property ThenBlock: IASTBlock read GetThenBlock write SetThenBlock;
   property ElseBlock: IASTBlock read GetElseBlock write SetElseBlock;
end;
```

Выражение может содержать слагаемое или бинарную операцию с двумя слагаемыми. На данный момент поддерживаются только три операции: сложение, вычитание и сравнение. В Языке нет унарных операторов, так вы не можете написать такой оператор `return -3`, а должны использовать такую форму `return 0-3`.

```delphi
TBinaryOperation = (opNone, opAdd, opSubtract, opCompareLess);
IASTExpression = interface
   property Term1: IASTTerm read GetTerm1 write SetTerm1;
   property Term2: IASTTerm read GetTerm2 write SetTerm2;
   property BinaryOp: TBinaryOperation read GetBinaryOp write SetBinaryOp;
end;
```

Слагаемое может быть константой, переменной или вызовом функции.

```delphi
TASTTermType = (termConstant, termVariable, termFunctionCall);

IASTTerm = interface
end;
```

`IASTTerm`, также как `IASTStatement`, является родительским интерфейсом

Константа — просто числовое значение, вычислимое парсером.

```delphi
IASTTermConstant = interface(IASTTerm)
   property Value: integer read GetValue write SetValue;
end;
```

_Переменные_ в действительности имеют неверное название. Язык не поддерживает переменные. В коде могут быть только ссылки на параметры функций. Так как вложенные функции не поддерживаются, то каждый параметр может быть представлен своим индексом в списке параметров (который, также вычисляется парсером).

```delphi
IASTTermVariable = interface(IASTTerm)
   property VariableIdx: integer read GetVariableIdx write SetVariableIdx;
end;
```

И последняя часть AST — _вызов функции_ содержит индекс вызываемой нами функции и список параметров которые мы передаём в функцию. Параметры являются выражением.

```delphi
TExpressionList = TList;
IASTTermFunctionCall = interface(IASTTerm)
   property FunctionIdx: integer read GetFunctionIdx write SetFunctionIdx;
   property Parameters: TExpressionList read GetParameters;
end;
```

В действительности, в модуле `SimpleDSLCompiler.AST` больше ничего нет кроме этого набора интерфейсов и очень тривиальных объектов реализующих их. Этой информации достаточно чтобы представлять семантику оригинальной программы (форматирование теряется во время парсинга) и дальше она может быть подана на вход компилятору.
