import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "某星落的笔记",
  description: "记录开发时遇到的问题",
  // 启动最后更新日期
  lastUpdated: true ,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '期末',
        // 初始加载时,侧边栏关闭
        collapsed: true,
        items: [
          { text: 'Java简答题', link: '/school/java_question' },
          { text: 'C++函数', link: '/school/cpp_function' },
          { text: '数据结构', link: '/school/data_structure' }
        ]
      },
      {
        text: '杂项',
        // 初始加载时,侧边栏关闭
        collapsed: true,
        items: [
          { text: '常用软件记录', link: '/sundry/software' }
        ]
      }
    ],

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mewhz/notes' }
    ],

    // 页脚设置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present mewhz'
    },

    // 开启本地搜索
    search: {
      provider: 'local'
    }
  }
})
