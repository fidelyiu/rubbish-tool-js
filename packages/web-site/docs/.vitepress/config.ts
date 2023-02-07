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
    sidebar: [
      { text: "Date 日期", link: "/Date/index.md" },
      { text: "Dom dom", link: "/Dom/index.md" },
      { text: "Line 线段", link: "/Line/index.md" },
      { text: "List 数组", link: "/List/index.md" },
      { text: "Num 数字", link: "/Num/index.md" },
      { text: "Obj 对象", link: "/Obj/index.md" },
      { text: "Random 随机", link: "/Random/index.md" },
      { text: "Str 字符串", link: "/Str/index.md" },
      { text: "Time 时间戳", link: "/Time/index.md" },
    ],
  },
});
