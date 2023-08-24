---
title: "Оператор case без begin/end в Delphi"
date: "2019-07-31"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
  - "перевод"
---

# {{ $frontmatter.title }}

Перевод поста [The case of a missing begin/end](https://www.thedelphigeek.com/2019/07/the-case-of-missing-beginend.html).

Delphi никогда не перестаёт удивлять меня... Вы знали что это правильный синтаксис?

```delphi
case a of
  0: Writeln(0);
  else
    Writeln('else');
    Writeln(a);
end;
```

Этот код компилируется и работает точно как следующий фрагмент.

```delpgi
case a of
  0: Writeln(0);
  else begin
    Writeln('else');
    Writeln(a);
  end;
end;
```

Я лично никогда бы не убрал `begin/end` внутри оператора `case/else`, но не все согласяться с этим. Я нашёл такой пример в очень (ОЧЕНЬ!) старом кода (он был написан на Delphi 2) и я был довольно удивлён, что он компилируется.

Anton Alisov предложил форматировать первый пример так:

```delphi
case a of
  0: Writeln(0);
else
  Writeln('else');
  Writeln(a);
end;
```

Я думаю так код выглядит более понятно.
