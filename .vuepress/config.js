module.exports = {
  "title": "忘魂儿",
  "description": " 喜 欢 你 ❤ ，有 缘 人！",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/y.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }
    ],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }
    ],
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "来源",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "关于",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/XUCAT-Coder",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "资源"
      }
    },
    "friendLink": [
      {
        "title": "XUCAT-Coder",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1654176206@qq.com",
        "link": "https://github.com/XUCAT-Coder"
      },
      {
        "title": "忘魂儿",
        "desc": "welcome to bilibili!",
        "email": "1654176206@qq.com",
        "link": "https://space.bilibili.com/26477180/article",
        
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/x.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "wanghuner",
    "authorAvatar": "/x.jpg",
    "record": "吉ICP备2021001610号-1",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: [ 'wanko','haru1', 'haru2', 'shizuku'],
        clean: false,
        messages: {
          welcome: '你,我构成了我们 ',
          home: '喜欢你，有缘人',
          theme: '希望你也能喜欢我的其他小伙伴。',
          close: '仍故里,痴痴地望着你'
        },
        width: 240,
        height: 352,
        modelStyle: {
          right: '10px', bottom: '-60px', opacity: '0.9' 
        },
        messageStyle:{
           right: '10px', bottom: '200px' 
        },
        btnStyle:{
          right: '1px', bottom: '40px'
        }
      }
    ],
    [
      //先安装在配置， npm install @vuepress-plugin-meting --save
      'meting', {
        
        meting: {
          
         auto:"https://music.163.com/#/playlist?id=4941661257"
       }
       ,          // 不配置该项的话不会出现全局播放器
        aplayer: {
          lrcType: 3,
          autoplay:true,
          order: 'random'
        },
        mobile :{
          // 手机端去掉cover图
          cover: false,
        }
      }
    ],
    [
      //彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ],
    [
      //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      "dynamic-title",
      {
        showIcon: "/bs.png",
        showText: "欢迎回家！",
        hideIcon: "/z.png",
        hideText: "别离开我！",
        recoverTime: 2000
      }
    ],
    [
      //图片放大插件 先安装在配置， npm install @vuepress-plugin-medium-zoom --save
      '@vuepressplugin-medium-zoom', {
        selector: '.page img',
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(25,18,25,0.9)',
          scrollOffset: 40
        }
      }
    ],
    [
     //插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save
      'flowchart'
    ],
    [
      //插件广场的sitemap插件 先安装在配置 npm install vuepress-plugin-sitemap --save
      'sitemap', {
        hostname: 'https://www.glassysky.site'
      }
    ],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      tip: {
        content: "复制成功!"
      }
    }],
    ["@vuepress-yard/vuepress-plugin-window",{
      title: "忘魂儿の公告",  //vuepress公告插件 先安装在配置 npm install @vuepress-yard/vuepress-plugin-window --save
      contentInfo: {
        title: "欢迎各位小可爱 ！",
        needImg: true,
        imgUrl: "https://uploadstatic.mihoyo.com/contentweb/20200103/2020010311083818450.png",
        content: "喜欢up的可以点个赞~！",
        contentStyle: ""
      },
      bottomInfo: {
        btnText: '关于',
        linkTo: 'https://space.bilibili.com/26477180/article'
      },
      closeOnce: true
    }],
    [
      'cursor-effects',
      {
         size: 2, // size of the particle, default: 2
         shape: ['star' | 'circle'], // shape of the particle, default: 'star'
         zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
   ],

  ]
  
}