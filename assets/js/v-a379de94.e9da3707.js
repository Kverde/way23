"use strict";(self.webpackChunkway23=self.webpackChunkway23||[]).push([[6324],{90233:(e,i,p)=>{p.r(i),p.d(i,{data:()=>t});const t={key:"v-a379de94",path:"/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B8-delphi-%D0%B2%D0%BE-%D0%B2%D0%BD%D0%B5%D1%88%D0%BD%D0%B5%D0%BC-%D1%84%D0%B0%D0%B9%D0%BB.html",title:"Конфигурации сборки Delphi во внешнем файле",lang:"ru-RU",frontmatter:{title:"Конфигурации сборки Delphi во внешнем файле",date:"2017-01-19",categories:["Delphi"],tags:["Delphi","ci"]},excerpt:"",headers:[],filePathRelative:"конфигурации-сборки-delphi-во-внешнем-файл.md",git:{updatedTime:1692859375e3}}},98363:(e,i,p)=>{p.r(i),p.d(i,{default:()=>m});var t=p(66252),l=p(3577);const o={id:"frontmatter-title",tabindex:"-1"},d=(0,t._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),n=(0,t._)("p",null,"При сборке исполняемого файла для тестирования и при сборке готовой версии для пользователей используются разные настройки компилятора. В Delphi для этого применяются конфигурации сборки. В этом посте описано как настроить хранение этих настроек во внешних файлах. Внешние файлы удобно использовать когда проектов много - настройка каждого отдельно занимает время, увеличивается вероятность ошибок, а если понадобятся изменения то придется обновить все проекты.",-1),c=(0,t.Uk)("Описание подходит для Delphi 2010 и более новых версий. Общие рекомендации по настройке параметров компилятора в "),a={href:"http://www.gunsmoker.ru/2009/04/delphi_19.html",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Uk)("этой статье"),g=(0,t.Uk)("."),u=(0,t.uE)('<p>Список конфигураций находится в ветке <code>Build Configurations</code> в менеджере проекта.</p><p><img src="images/delphi_build_config_1.png" alt="Список конфигураций"></p><p>Откроем настройки для просмотра подробностей</p><p><img src="images/delphi_build_config_2.png" alt="Конфигурации сборки"> <img src="images/delphi_build_config_3.png" alt="Редактор конфигураций"></p><p>В новом проекте три конфигурации</p><ul><li><code>Debug</code> - для отладки и тестирования;</li><li><code>Release</code> - готовая версия;</li><li><code>All configurations</code> - родительская конфигурация для всех остальных конфигураций.</li></ul><p>Конфигурации можно добавлять и у удалять (в том числе <code>Debug</code> и <code>Release</code>). Конфигурация <code>All configurations</code> не удаляемая, в ней указываются общие для всех конфигураций настройки.</p><p>В версиях Delphi которые это поддерживают, под отдельные платформы настраиваются свои конфигурации. Мне этим пользоваться не приходилось, поэтому в этом посте будет настроена конфигурация только под win32.</p><p>Создадим новый файл настроек для конфигурации Debug</p><p><img src="images/delphi_build_config_new_option_set.png" alt="Добавления нового optset"></p><p>Сохраним его рядом с файлом проекта в отдельный каталог</p><p><code>config/debug.optset</code></p><p>Теперь отредактируем его</p><p><img src="images/delphi_build_config_edit_1_option_set.png" alt="Редактирование optset"></p><p>Включим <code>Oweflow checking</code> и <code>Range checking</code></p><p><img src="images/delphi_build_config_edit_option_set.png" alt="Редактирование optset"></p><p>Перейдем в редактор конфигурации <code>Debug</code> для проверки</p><p><img src="images/delphi_build_edit_debug.png" alt="Редактирование параметров Debug"> <img src="images/delphi_build_debug_with_optset.png" alt="Настройки Debug с внешним файлом"></p><p>Настройки перекрывают друг друга в следующей последовательности: самый низкой приоритет у родительской конфигурации <code>All configurations</code>, потом из подключенного файла <code>debug.optset</code>, потом настройки проекта.</p><p>Сейчас в проекте такая ситуация для <code>Oweflow checking</code>:</p><ul><li>В <code>All configurations</code> значение не заданно (not set)</li><li>В <code>debug.optset</code> значение True</li><li>В проекте значение неопределенно и берется из <code>dubug.optset</code> (переопределенное значение выделяется жирным)</li></ul><p>Создадим второй проект и подключим к нему конфигурацию из внешнего файла.</p><p><img src="images/delphi_build_config_apply.png" alt="Подключение файла настроек к проекту"> <img src="images/delphi_build_edit_applay2.png" alt="Подключение файла настроек к проекту"></p><p>Путь к файлу получается выбрать только полный, но в настройках проекта сохраняется относительный. Поэтому проблем при хранении файла конфигурации в системе контроля версий не будет.</p><p>Теперь при изменении настроек в optset они автоматически изменятся во всех связанных проектах.</p><p>Проверим это. Изменим в файле <code>debug.optset</code> строку</p><p>true</p><p>на</p><p>false</p><p>Теперь открываем настройки любого проекта и видим что значение изменилось. В некоторых версиях Delphi старое значение отображается до перезапуска IDE.</p><p><img src="images/delphi_build_edit_end.png" alt="Обновленные настройки Debug"></p>',31),s={href:"https://github.com/Kverde/way23_examples/tree/master/Delphi/BuildConfigurations",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Uk)("Пример на GitHub"),D={href:"http://docwiki.embarcadero.com/RADStudio/XE6/en/Build_Configurations_Overview",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("Build Configurations Overview"),m={render:function(e,i){const p=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("h1",o,[d,(0,t.Uk)(" "+(0,l.zw)(e.$frontmatter.title),1)]),n,(0,t._)("p",null,[c,(0,t._)("a",a,[r,(0,t.Wm)(p)]),g]),u,(0,t._)("p",null,[(0,t._)("a",s,[_,(0,t.Wm)(p)])]),(0,t._)("p",null,[(0,t._)("a",D,[h,(0,t.Wm)(p)])])],64)}}}}]);