import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Rubbish-tool",
  description: "The toolbox of methods at your fingertips in js.",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: "Rubbish-tool",
    socialLinks: [
      { icon: "github", link: "https://github.com/fidelyiu/rubbish-tool-js" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Fidel Yiu",
    },
    nav: [
      { text: "指引", link: "/guide/index.md" },
      { text: "工具", link: "/tool/Date/index.md" },
    ],
    sidebar: {
      "/tool/": [
        { text: "Date 日期", link: "/tool/Date/index.md" },
        { text: "Dom dom", link: "/tool/Dom/index.md" },
        { text: "Line 线段", link: "/tool/Line/index.md" },
        { text: "List 数组", link: "/tool/List/index.md" },
        { text: "Num 数字", link: "/tool/Num/index.md" },
        { text: "Obj 对象", link: "/tool/Obj/index.md" },
        { text: "Random 随机", link: "/tool/Random/index.md" },
        { text: "Str 字符串", link: "/tool/Str/index.md" },
        { text: "Time 时间戳", link: "/tool/Time/index.md" },
      ],
    },
  },
});
