module.exports = {
  // 标题
  title: "从零开始记笔记",  
  // 描述
  description: '2021/12/23_从0开始的学习笔记 .',
  // 资源文件地址
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',//主题
  // 配置
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '笔记', 
        icon: 'reco-message',
        items: [
          { text: 'Html', 
          items:[
            {text: 'Html总结', link: '/docs/Html/'}
          ]
        }
        ]
      }, 
      { text: 'TimeLine', link: '/timeline/'},//时间轴
      { text: 'Contact', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' }
        ]
      }
    ],
    // 侧边栏
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ],
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 3, // 在导航栏菜单中所占的位置，默认2
        // text: 'Category' 
        text: '分类' 
        // 默认 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签Tag”
      }
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'nuo',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2021/12/23'
   
  },
  markdown: {
    // 行数
    lineNumbers: true
  }
}  
