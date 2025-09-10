import{_ as a,c as i,a as n,b as l,t as r,o as d}from"./app-DvfQ69-Y.js";const t={},c={id:"frontmatter-title",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title"};function o(s,e){return d(),i("div",null,[n("h1",c,[n("a",p,[n("span",null,r(s.$frontmatter.title),1)])]),e[0]||(e[0]=l(`<p>У нас в команде запрещён к использованию оператор <code>with</code>. Основная причина в <a href="https://www.transl-gunsmoker.ru/2010/09/with.html" target="_blank" rel="noopener noreferrer">проблемах с надёжность кода с with</a>. Существует и другая сторона работы с <code>with</code>. Часто его применение указывает на плохую организацию кода и переместив код в более адекватное место оператор <code>with</code> станет просто не нужен. Рассмотрим два примера.</p><h2 id="перемещение-кода" tabindex="-1"><a class="header-anchor" href="#перемещение-кода"><span>Перемещение кода</span></a></h2><p>Иногда <code>with</code> используется для формы или датамодуля чтобы установить свойства, возможно, вызывать несколько методов.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TFrmVrachStac.tbDiagrClick(Sender: TObject);</span>
<span class="line">var</span>
<span class="line">  FormChart: TFormChart;</span>
<span class="line">begin</span>
<span class="line">  FormChart := TFormChart.Create(nil);</span>
<span class="line">  try</span>
<span class="line">    with FormChart do</span>
<span class="line">      begin</span>
<span class="line">        Caption :=  &#39;Результаты измерений температуры, других исследований и процедур&#39;;</span>
<span class="line">        LFio.Caption      :=  MTVrachStac.FieldByName(&#39;fio&#39;).AsString;</span>
<span class="line">        LDATE_B.Caption   :=  MTVrachStac.FieldByName(&#39;date_b&#39;).AsString;</span>
<span class="line">        LAGE.Caption      :=  MTVrachStac.FieldByName(&#39;age&#39;).AsString;</span>
<span class="line">        LCHAMBER.Caption  :=  MTVrachStac.FieldByName(&#39;chamb&#39;).AsString;</span>
<span class="line">        LNIB.Caption      :=  MTVrachStac.FieldByName(&#39;n_map&#39;).AsString;</span>
<span class="line">        id_ill            :=  mt_id_ill;</span>
<span class="line">        width   :=  Glob_main_form.Width  - 100;</span>
<span class="line">        height  :=  Glob_main_form.Height - 150;</span>
<span class="line">      end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В таком случае лучше оформить весь блок кода внутри формы <code>FormChart</code> в виде метода. А вместо <code>with</code> сделать вызов этого метода. Ещё лучше когда у вызыващие формы есть специальный интерфейс (не в смысле типа в Delphi, а в смысле API) через который идёт работа с формой.</p><h2 id="декомпозиция-функции" tabindex="-1"><a class="header-anchor" href="#декомпозиция-функции"><span>Декомпозиция функций</span></a></h2><p>Задача — перебрать все записи в датасете. Код может быть примерно такой</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TMyForm.MyFunction(ASourceDataSet: TDataSet);</span>
<span class="line">var</span>
<span class="line">  LItem: TPMRItem;</span>
<span class="line">  Mark1: TBookMark;</span>
<span class="line">begin</span>
<span class="line">  Mark1 := ASourceDataSet.GetBookmark;</span>
<span class="line"></span>
<span class="line">  with ASourceDataSet do</span>
<span class="line">  begin</span>
<span class="line">    DisableControls;</span>
<span class="line">    First;</span>
<span class="line">    try</span>
<span class="line">      while not eof do</span>
<span class="line">      begin</span>
<span class="line">        LItem := TPMRItem.Create;</span>
<span class="line">        with LItem do</span>
<span class="line">        begin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Оператор <code>with</code> применяется к датасету чтобы не писать его название несколько раз. В тоже самое время этот оператор создаёт лишнюю вложенность, затрудняет чтение, особенно если смотреть только <code>diff</code> в svn. В такой ситуации метод можно разделить на два: один проходит цикл по датасету, другой обрабатывает отдельную запись.</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">procedure TMyForm.MyFunction(ASourceDataSet: TDataSet);</span>
<span class="line">var</span>
<span class="line">  LItem: TPMRItem;</span>
<span class="line">  Mark1: TBookMark;</span>
<span class="line">begin</span>
<span class="line">  Mark1 := ASourceDataSet.GetBookmark;</span>
<span class="line"></span>
<span class="line">  ASourceDataSet.DisableControls;</span>
<span class="line">  ASourceDataSet.First;</span>
<span class="line">  try</span>
<span class="line">    while not ASourceDataSet.eof do</span>
<span class="line">      ProcessOneRow(ASourceDataSet &lt;...&gt; )</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В метод <code>ProcessOneRow</code> можно даже не передавать весь датасет а только нужные поля. Таким подходом значительно уменьшается вложенность, <code>with</code> становится не нужен.</p>`,11))])}const v=a(t,[["render",o]]),u=JSON.parse('{"path":"/%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-with-%D0%B8-%D0%B4%D0%B5%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D1%8F-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%B2.html","title":"Оператор with и декомпозиция методов в Delphi","lang":"ru-RU","frontmatter":{"title":"Оператор with и декомпозиция методов в Delphi","date":"2019-07-10","categories":["Delphi"],"tags":["Delphi","совершенный-код"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"оператор-with-и-декомпозиция-методов.md"}');export{v as comp,u as data};
