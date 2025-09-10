import{_ as a,c as i,a as e,b as l,t,o as c}from"./app-DvfQ69-Y.js";const r="/images/copy-caute.png",d={},o={id:"frontmatter-title",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title"};function m(s,n){return c(),i("div",null,[e("h1",o,[e("a",p,[e("span",null,t(s.$frontmatter.title),1)])]),n[0]||(n[0]=l(`<p>При копировании текста с <a href="http://caute.ru/" target="_blank" rel="noopener noreferrer">caute.ru</a> и вставке его в Word или GoogleDocs теряется формирование: выделения текста, заголовки и др. Способ как скопировать текст с форматированием:</p><ol><li>Открыть страницу сайта в Google Chrome;</li><li>Нажать <code>ctrl+shift-j</code>;</li><li>Ввести следующий текст в консоль и нажать <code>Enter</code>.</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">document.addEventListener(&#39;copy&#39;, function(e) {</span>
<span class="line">    const selection = window.getSelection();</span>
<span class="line">    const selectedText = selection.toString();</span>
<span class="line">    </span>
<span class="line">    // Если ничего не выделено — выходим</span>
<span class="line">    if (!selectedText) return;</span>
<span class="line"></span>
<span class="line">    // Получаем HTML выделенного фрагмента</span>
<span class="line">    const range = selection.getRangeAt(0);</span>
<span class="line">    const clonedSelection = range.cloneContents();</span>
<span class="line">    const div = document.createElement(&#39;div&#39;);</span>
<span class="line">    div.appendChild(clonedSelection);</span>
<span class="line">    const selectedHtml = div.innerHTML;</span>
<span class="line"></span>
<span class="line">    // Устанавливаем и plain, и html</span>
<span class="line">    e.clipboardData.setData(&#39;text/plain&#39;, selectedText);</span>
<span class="line">    e.clipboardData.setData(&#39;text/html&#39;, selectedHtml);</span>
<span class="line"></span>
<span class="line">    // Важно: предотвращаем стандартное поведение,</span>
<span class="line">    // чтобы не сработал старый обработчик (с добавлением ссылки)</span>
<span class="line">    e.preventDefault();</span>
<span class="line"></span>
<span class="line">    // Выделение НЕ должно исчезнуть!</span>
<span class="line">}, true);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>После этого текст будет копироваться с форматированием.</p><p><img src="`+r+'" alt=""></p><p>Другой, более простой вариант, использовать зеркало <a href="http://www.caute.tk/" target="_blank" rel="noopener noreferrer">caute.tk</a>.</p>',6))])}const v=a(d,[["render",m]]),b=JSON.parse('{"path":"/copy-caute.html","title":"Как скопировать форматированный текст с caute.ru","lang":"ru-RU","frontmatter":{"title":"Как скопировать форматированный текст с caute.ru","date":"2021-09-28","categories":["Другое"]},"git":{"updatedTime":1755844169000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":3,"url":"https://github.com/Petro"}],"changelog":[{"hash":"158e1421cc15c873dc5afeec30188bfe003a7265","time":1755844169000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"Update copy-caute.md"},{"hash":"711f4e23d676eb57130f06703f8ce3ad7d6a7937","time":1744621280000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"Обновлены библиотеки"},{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"copy-caute.md"}');export{v as comp,b as data};
