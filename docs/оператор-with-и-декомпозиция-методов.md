---
title: "Оператор with и декомпозиция методов в Delphi"
date: "2019-07-10"
categories: 
  - "Delphi"
tags: 
  - "Delphi"
  - "совершенный-код"
---

# {{ $frontmatter.title }}

У нас в команде запрещён к использованию оператор `with`. Основная причина в [проблемах с надёжность кода с with](https://www.transl-gunsmoker.ru/2010/09/with.html). Существует и другая сторона работы с `with`. Часто его применение указывает на плохую организацию кода и переместив код в более адекватное место оператор `with` станет просто не нужен. Рассмотрим два примера.

## Перемещение кода

Иногда `with` используется для формы или датамодуля чтобы установить свойства, возможно, вызывать несколько методов.

```delphi
procedure TFrmVrachStac.tbDiagrClick(Sender: TObject);
var
  FormChart: TFormChart;
begin
  FormChart := TFormChart.Create(nil);
  try
    with FormChart do
      begin
        Caption :=  'Результаты измерений температуры, других исследований и процедур';
        LFio.Caption      :=  MTVrachStac.FieldByName('fio').AsString;
        LDATE_B.Caption   :=  MTVrachStac.FieldByName('date_b').AsString;
        LAGE.Caption      :=  MTVrachStac.FieldByName('age').AsString;
        LCHAMBER.Caption  :=  MTVrachStac.FieldByName('chamb').AsString;
        LNIB.Caption      :=  MTVrachStac.FieldByName('n_map').AsString;
        id_ill            :=  mt_id_ill;
        width   :=  Glob_main_form.Width  - 100;
        height  :=  Glob_main_form.Height - 150;
      end;
```

В таком случае лучше оформить весь блок кода внутри формы `FormChart` в виде метода. А вместо `with` сделать вызов этого метода. Ещё лучше когда у вызыващие формы есть специальный интерфейс (не в смысле типа в Delphi, а в смысле API) через который идёт работа с формой.

## Декомпозиция функций

Задача — перебрать все записи в датасете. Код может быть примерно такой

```delphi
procedure TMyForm.MyFunction(ASourceDataSet: TDataSet);
var
  LItem: TPMRItem;
  Mark1: TBookMark;
begin
  Mark1 := ASourceDataSet.GetBookmark;

  with ASourceDataSet do
  begin
    DisableControls;
    First;
    try
      while not eof do
      begin
        LItem := TPMRItem.Create;
        with LItem do
        begin
```

Оператор `with` применяется к датасету чтобы не писать его название несколько раз. В тоже самое время этот оператор создаёт лишнюю вложенность, затрудняет чтение, особенно если смотреть только `diff` в svn. В такой ситуации метод можно разделить на два: один проходит цикл по датасету, другой обрабатывает отдельную запись.

```delphi
procedure TMyForm.MyFunction(ASourceDataSet: TDataSet);
var
  LItem: TPMRItem;
  Mark1: TBookMark;
begin
  Mark1 := ASourceDataSet.GetBookmark;

  ASourceDataSet.DisableControls;
  ASourceDataSet.First;
  try
    while not ASourceDataSet.eof do
      ProcessOneRow(ASourceDataSet <...> )
```

В метод `ProcessOneRow` можно даже не передавать весь датасет а только нужные поля. Таким подходом значительно уменьшается вложенность, `with` становится не нужен.
