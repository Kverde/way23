module.exports = {
  lang: "ru-RU",
  title: "Way23",
  base: "/",
  description: "Блог о программировании",
  head: [
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["meta", { name: "yandex-verification", content: "bbf10c47bf8b55fb" }],
    ["link", { rel: "icon", href: "/assets/favicons/favicon.svg" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/favicons/mask-icon.svg",
        color: "red",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/assets/favicons/apple-touch-icon.png",
      },
    ],
    ["link", { rel: "manifest", href: "manifest.json" }],

    // <!-- revisionme -->
    [
      "script",
      {},
      `
	    var __rm__config = {
        projectId: '-Mibn7-xoaevC6Q4qq9f',
        locale: 'ru',
        contextWidget: 0,
        embedBtn: 0,
        floatingBtn: 1,
        floatingBtnPosition: 'left',
        floatingBtnStyle: 'light',
			};
    `,
    ],
    [
      "script",
      {
        src: "https://widget.revisionme.com/app.js",
        defer: "defer",
        id: "rm_app_script",
      },
    ],
    // <!-- /revisionme -->
  ],
  themeConfig: {
    sidebar: false,
    contributors: false,
    lastUpdatedText: "Последниее изменение",
    navbar: [
      { text: "Главная", link: "/" },
      { text: "По категориям", link: "/categories.md" },
      { text: "Контакты", link: "/contacts.md" },
    ],
  },

  extendsMarkdown: (md) => {
    md.use(require("markdown-it-footnote"));
    md.use(require("markdown-it-multimd-table"), {
      multiline: true,
      rowspan: true,
      headerless: true,
    });
  },
}
