import{_ as a,c as i,a as e,b as l,t as d,o as r}from"./app-DvfQ69-Y.js";const t={},c={id:"frontmatter-title",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title"};function o(s,n){return r(),i("div",null,[e("h1",c,[e("a",p,[e("span",null,d(s.$frontmatter.title),1)])]),n[0]||(n[0]=l(`<p>Перевод поста <a href="https://www.thedelphigeek.com/2019/07/the-case-of-missing-beginend.html" target="_blank" rel="noopener noreferrer">The case of a missing begin/end</a>.</p><p>Delphi никогда не перестаёт удивлять меня... Вы знали что это правильный синтаксис?</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">case a of</span>
<span class="line">  0: Writeln(0);</span>
<span class="line">  else</span>
<span class="line">    Writeln(&#39;else&#39;);</span>
<span class="line">    Writeln(a);</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Этот код компилируется и работает точно как следующий фрагмент.</p><div class="language-delpgi line-numbers-mode" data-highlighter="prismjs" data-ext="delpgi"><pre><code><span class="line">case a of</span>
<span class="line">  0: Writeln(0);</span>
<span class="line">  else begin</span>
<span class="line">    Writeln(&#39;else&#39;);</span>
<span class="line">    Writeln(a);</span>
<span class="line">  end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Я лично никогда бы не убрал <code>begin/end</code> внутри оператора <code>case/else</code>, но не все согласяться с этим. Я нашёл такой пример в очень (ОЧЕНЬ!) старом кода (он был написан на Delphi 2) и я был довольно удивлён, что он компилируется.</p><p>Anton Alisov предложил форматировать первый пример так:</p><div class="language-delphi line-numbers-mode" data-highlighter="prismjs" data-ext="delphi"><pre><code><span class="line">case a of</span>
<span class="line">  0: Writeln(0);</span>
<span class="line">else</span>
<span class="line">  Writeln(&#39;else&#39;);</span>
<span class="line">  Writeln(a);</span>
<span class="line">end;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Я думаю так код выглядит более понятно.</p>`,9))])}const v=a(t,[["render",o]]),u=JSON.parse('{"path":"/%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-case-%D0%B1%D0%B5%D0%B7-begin-end-%D0%B2-delphi.html","title":"Оператор case без begin/end в Delphi","lang":"ru-RU","frontmatter":{"title":"Оператор case без begin/end в Delphi","date":"2019-07-31","categories":["Delphi"],"tags":["Delphi","перевод"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"оператор-case-без-begin-end-в-delphi.md"}');export{v as comp,u as data};
