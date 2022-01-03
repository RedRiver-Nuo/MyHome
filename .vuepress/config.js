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
        },
        { text: 'Css', 
          items:[
            {text: 'Css', link: '/docs/Css/00/'},
            {text: 'Css技巧', link: '/docs/Css/01/Cssqt'},

          ]
        },
        { text: 'Javascript', 
          items:[
            {text: 'Javascript', link: '/docs/JavaScript/'},
          ]
        },
        { text: 'JQuery', 
        items:[
          {text: 'JQuery', link: '/docs/JQuery/'},
        ]
      },
        { text: '服务器阶段', 
          items:[
            {text: 'Ajax', link: '/docs/aserver/'},
            {text: 'Git', link: '/docs/Git/Git'}
          ]
        },
        { text: '微信小程序', 
          items:[
            {text: '微信小程序', link: '/docs/wx/'},
          ]
        },
        { text: 'Vue', 
          items:[
            {text: 'Vue', link: '/docs/Vue/'},
          ]
        },

        ]
      }, 
      
      { text: '分享', 
        icon: 'reco-message',
        items: [
          { text: '学习资源', 
          items:[
            {text: '前端路线', link: '/docs/share/'},
          ]
        },
        { text: '问题解决', 
          items:[
            {text: 'Git问题', link: '/docs/share/GitProblem/Git'}
          ]
        }
        ]
      }, 

      { text: 'TimeLine', link: '/timeline/'},//时间轴
      { text: 'Contact', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' },
          { text: 'GitHub', link: ' https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-zh.md', icon: 'reco-github' },
         

        ]
      }
    ],
    // 侧边栏
    sidebar: {
      '/docs/Css/00/': [
        '',
        'CssGj',
        'Cssydd'
       
      ],
      '/docs/JavaScript/': [
        '',
        'ES6',
        'DOM',
        'PC'
      ],
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 4, // 在导航栏菜单中所占的位置，默认2
        // text: 'Category' 
        text: '分类' 
        // 默认 “分类”
      },
      // tag: {
      //   location: 4, // 在导航栏菜单中所占的位置，默认3
      //   text: '标签' // 默认 “标签Tag”
      // }
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
    author: '诺同学',
    // 作者头像
    authorAvatar: '/he.jpg',
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
