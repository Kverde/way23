import{_ as a,c as i,a as n,b as l,t as r,o as t}from"./app-DvfQ69-Y.js";const d={},p={id:"frontmatter-title",tabindex:"-1"},c={class:"header-anchor",href:"#frontmatter-title"};function o(e,s){return t(),i("div",null,[n("h1",p,[n("a",c,[n("span",null,r(e.$frontmatter.title),1)])]),s[0]||(s[0]=l(`<p>Одна из основных практик <a href="https://www.ozon.ru/context/detail/id/140376487/?partner=way23&amp;utm_content=link" target="_blank" rel="noopener noreferrer">Джедайских техник</a> это ведение списка задач. Ведение списка задач позволяет:</p><ul><li>Разгрузить голову — нет необходимости ничего держать в голове, всё записано.</li><li>Задачу нельзя забыть.</li><li>Задачи группируются для <a href="https://ru.wikipedia.org/wiki/%D0%AD%D1%84%D1%84%D0%B5%D0%BA%D1%82_%D0%BC%D0%B0%D1%81%D1%88%D1%82%D0%B0%D0%B1%D0%B0" target="_blank" rel="noopener noreferrer">экономии масштаба</a>.</li></ul><p>Я пробовал приложения, такие как <a href="https://todoist.com/?lang=ru" target="_blank" rel="noopener noreferrer">TodoList</a> и <a href="http://www.micromiles.co/maxdone/ru/" target="_blank" rel="noopener noreferrer">Maxdone</a>, но сейчас остановился на простых тестовых файлах. Файлов два:</p><ul><li>Список задач.txt</li><li>Календарь.txt</li></ul><p>Основной принцип: утром задачи на текущий день переносятся из <strong>Календарь.txt</strong> в <strong>Список задач.txt</strong> и выполняются. Входящие попадают либо в <strong>Список задач.txt</strong> на сегодня, либо в <strong>Календарь.txt</strong> на другой день.</p><h2 id="список-задач-txt" tabindex="-1"><a class="header-anchor" href="#список-задач-txt"><span>Список задач.txt</span></a></h2><p>В файле <strong>Список задач.txt</strong> задачи записаны в свободной форме. Чаще всего по одной задаче на строку, бывают дополнительные или отсутствующие переводы строк для группировки. Иногда бывают подзадачи, выделенные отступом. Формулировки задач краткие, по возможности простые, если нужно с дополнительной информацией, например, временем или телефоном.</p><p>Пример файла <strong>Список задач.txt</strong>:</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code><span class="line">Прочитать документ xxx</span>
<span class="line"></span>
<span class="line">Проверить состояние задачи number</span>
<span class="line"></span>
<span class="line">Записать на страницу https://url информацию про xxx</span>
<span class="line"></span>
<span class="line">Написать xxx про yyy @telegram_login</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="календарь-txt" tabindex="-1"><a class="header-anchor" href="#календарь-txt"><span>Календарь.txt</span></a></h2><p>Файл <strong>Календарь.txt</strong> более структурирован. Есть три раздела</p><ul><li>Дни</li><li>Месяцы</li><li>Шаблоны <ul><li>задачи на день</li><li>задачи на неделю</li><li>задачи на месяц</li></ul></li></ul><p>В дни записываются задачи на определённый день. Обычно дни размечены на неделю вперёд, или немного больше. Задачи которые запланированы на определённое время указываются с этим временем. Выглядит это примерно так</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">===============================</span>
<span class="line">26.03.2019 ВТ</span>
<span class="line"></span>
<span class="line">залача1</span>
<span class="line"></span>
<span class="line">задача2</span>
<span class="line">задача3</span>
<span class="line"></span>
<span class="line">15:00 совещание xxx</span>
<span class="line"></span>
<span class="line">===============================</span>
<span class="line">27.03.2019 СР</span>
<span class="line"></span>
<span class="line">задача x </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>У месяцев структура проще, в них находятся задачи которые требуется выполнить в определённом месяце.</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code><span class="line">===============================</span>
<span class="line">2019 </span>
<span class="line"></span>
<span class="line">Октябрь</span>
<span class="line">  Задача 1</span>
<span class="line">  Задача 1</span>
<span class="line"></span>
<span class="line">Ноябрь</span>
<span class="line">  Продлить страховку</span>
<span class="line">===============================</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В шаблонах хранятся задачи которые нужно выполнять каждый день, неделю и месяц.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">===============================</span>
<span class="line">Ежедневное</span>
<span class="line"></span>
<span class="line">Задача 1</span>
<span class="line">Задача 2</span>
<span class="line">Задача 3</span>
<span class="line"></span>
<span class="line">===============================</span>
<span class="line">Каждую неделю</span>
<span class="line"></span>
<span class="line">Задача 1</span>
<span class="line">Задача 2</span>
<span class="line">Суббота 17:00 Задача 3</span>
<span class="line"></span>
<span class="line">===============================</span>
<span class="line">Каждый месяц</span>
<span class="line"></span>
<span class="line">Задача 1</span>
<span class="line">Задача 2</span>
<span class="line">Задача 3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Каждую неделю я копирую задачи из списков <strong>Ежедневное</strong> и <strong>Каждую неделю</strong> в дни следующей недели. Если планируемая неделя является первой неделей месяца, то ещё добавляю задачи из <strong>Каждый месяц</strong>.</p><h2 id="преимущества-и-недостатки" tabindex="-1"><a class="header-anchor" href="#преимущества-и-недостатки"><span>Преимущества и недостатки</span></a></h2><p>Преимущества текстовых файлов, по сравнению со специальным ПО:</p><ul><li>Максимальная гибкость в описании и форматировании. Можно выделять что-то любыми символами, можно поводами строк, можно отступами.</li><li>Очень быстро и просто поменять, удалить, перенести любую задачу.</li><li>Доступ с любого устройства.</li><li>Полная переносимость, можно хоть на флешку всё сохранить.</li></ul><p>Недостатки:</p><ul><li>Ведение Календаря.txt требует некоторых рутинных действий. При желании автоматизируются.</li><li>Нет тегов, напоминаний и подобных возможностей. А нужны ли?</li><li>Редактирование с телефона неудобно.</li><li>Нет количественной статистики. А нужна ли?</li><li>Нет возможности просто просмотреть список завершённого за неделю, старые задачи просто удаляются. При желании можно сделать, снова вопрос, а нужно ли тратить время?</li></ul><h2 id="используемое-по" tabindex="-1"><a class="header-anchor" href="#используемое-по"><span>Используемое ПО</span></a></h2><p>Файлы хранятся в SVN. Для доступа с ПК — <a href="https://way23.ru/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-svn-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-tortoisesvn-1-%D0%B2%D1%8B%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0-%D1%84%D0%B8%D0%BA%D1%81%D0%B0%D1%86%D0%B8%D1%8F/" target="_blank" rel="noopener noreferrer">TortoiseSVN</a>, с Android — <a href="https://play.google.com/store/apps/details?id=com.valleytg.oasvn.android&amp;hl=ru" target="_blank" rel="noopener noreferrer">OASVN</a>.</p><p>Для редактирования файлов использую <a href="https://notepad-plus-plus.org/" target="_blank" rel="noopener noreferrer">NotePad++</a></p>`,27))])}const u=a(d,[["render",o]]),m=JSON.parse('{"path":"/%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87-%D0%B2-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%BC-%D1%84%D0%B0%D0%B9%D0%BB%D0%B5.html","title":"Список задач в текстовом файле","lang":"ru-RU","frontmatter":{"title":"Список задач в текстовом файле","date":"2019-09-21","categories":["Продуктивность"],"tags":["джедайские-техники"]},"git":{"updatedTime":1692859375000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"3209bc558b0c475cbf4db7fcaea301df0e5d8d66","time":1692859375000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"init"}]},"filePathRelative":"список-задач-в-текстовом-файле.md"}');export{u as comp,m as data};
