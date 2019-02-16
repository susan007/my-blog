module.exports = {
    title: '静静是小花',
    details: '个人博客搭建',
    // base: '/my-blog/',//当打包到my-blog博客的时候才设置这个路径
    base: '/',
    description: '认识你自己',
    head: [
        ['link', {rel: 'icon', href: `/flower.png`}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],

    ],
    serviceWorker: true,
    themeConfig: {
        //添加导航栏
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '前端',
                link: '/WEB/'
            },
            {
                text: '闲聊',
                link: '/SOURCE/'
            },
            {
                text: '关于',
                link: '/PERSONAL/'
            },
            // {
            //     text: 'Languages',
            //     items: [
            //         {text: 'English', link: '/language/english'},
            //         {text: '简体中文', link: '/language/chinese'}
            //     ]
            // }
        ],
        sidebar: {
            '/WEB/': [
                {
                    title: 'JS',
                    collapsable: true,
                    children: [
                        ['/WEB/JS/javascript之for循环的几种写法', 'javascript之for循环的几种写法'],
                        ['/WEB/JS/javascript运算符之等于', 'javascript运算符之==和==='],
                        ['/WEB/JS/javascript原型', 'javascript之原型'],
                        ['/WEB/JS/js运算符',' js 运算符'],
                        ['/WEB/JS/数组', '数组之增删改'],
                        ['/WEB/JS/assign', 'assign()方法'],
                        ['/WEB/JS/json', 'js中的json'],
                        ['/WEB/JS/js练习1', 'js练习之对象']
                    ]
                }, {
                    title: 'CSS',
                    collapsable: true,
                    children: [
                        ['/WEB/CSS/bilibili', '前端动画小记---bilibili ( ゜-゜)つロ客户下载小动画'],
                        ['/WEB/CSS/background-position为什么会出现负值？', 'background-position为什么会出现负值？'],
                        ['/WEB/CSS/svg日出', 'svg动画之日出'],
                        ['/WEB/CSS/单位', '单位之px-em-rem']
                    ]
                }, {
                    title: 'VUE',
                    collapsable: true,
                    children: [
                        ['/WEB/VUE/vue01', 'vue-cli脚手架目录一览'],
                        ['/WEB/VUE/vue02', 'vue-cli脚手架之build文件夹上半部'],
                        ['/WEB/VUE/vue03', 'vue-cli脚手架之webpack.base.conf.js'],
                        ['/WEB/VUE/vue04', 'vue-cli脚手架之webpack.dev.conf.js'],
                        ['/WEB/VUE/vue05', 'vue-cli脚手架之webpack.prod.conf.js'],
                        ['/WEB/VUE/vue06', 'vue-cli脚手架之webpack.test.conf.js'],
                        ['/WEB/VUE/vue07', 'vue-cli脚手架之package.json'],
                        ['/WEB/VUE/vue08', 'vue-cli脚手架之其他文件解释'],
                        ['/WEB/VUE/vuex', 'Vuex的初体验'],
                        ['/WEB/VUE/vue-router', 'vue-router的使用'],
                        ['/WEB/VUE/vue使用第三方库', 'vue中使用第三方库的几种方式'],
                        ['/WEB/VUE/插件', 'vue插件编写'],
                        ['/WEB/VUE/插槽', 'vue插槽使用'],
                        ['/WEB/VUE/传值', 'vue组件间通讯']
                    ]
                }, {
                    title: 'HTTP',
                    collapsable: true,
                    children: [
                        ['/WEB/HTTP/httpCode','http-status-code 必知必会']
                    ]
                },{
                title: 'ES6',
                    collapsable: true,
                    children: [
                        ['/WEB/ES6/var-let-const','var、let和const'],
                        ['/WEB/ES6/模板字符串','Es6模板字符串'],
                        ['/WEB/ES6/解构', '解构'],
                        ['/WEB/ES6/箭头函数', '箭头函数'],
                        ['/WEB/ES6/Es6运行环境', 'Es6执行环境搭建'],
                        ['/WEB/ES6/集合','集合'],
                        ['/WEB/ES6/Promise', 'Promise使用']
                    ]
                }
            ],
            '/SOURCE/': [
                {
                    title: '杂谈',
                    collapsable: true,
                    children: [
                        ['/SOURCE/句子迷', '***句子迷***'],
                        ['/SOURCE/数据可视化框架','数据可视化框架收集'],
                        ['/SOURCE/travis-ci','自动化构建工具'],
                        ['/SOURCE/node-oom','node编译内存溢出'],
                        ['/SOURCE/electron', '使用electron开发桌面应用'],
                        ['/SOURCE/深渊巨坑的attr', '深渊巨坑的attr'],
                        ['/SOURCE/node升级引发的问题', 'node升级引发的问题'],
                        ['/SOURCE/require', 'Unresolved function or method require()'],
                        ['/SOURCE/puzzlers学习', 'puzzlers学习'],
                        ['/SOURCE/机器学习', '机器学习环境搭建'],
                        ['/SOURCE/vuepress注意', 'vuepress中的坑'],
                        ['/SOURCE/express', 'express使用'],
                        ['/SOURCE/webpack', 'webpack相关'],
                        ['/SOURCE/获取页面源码', 'js获取当前页面源码的两种方式'],
                        ['/SOURCE/规范', '前端开发规范'],
                        ['/SOURCE/chimee', 'Html5播放器之Chimee初次接触']
                    ]
                },
            ],
            '/PERSONAL/': [
                {
                    title: '个人介绍',
                    collapsable: true,
                    children: [
                        ['/PERSONAL/个人简介', '个人简介'],
                    ]
                },
                {
                    title: '开源项目',
                    collapsable: true,
                    children: [
                        ['/PERSONAL/开源项目一', '开源项目'],
                    ]
                }
            ]
        }
    }

}

