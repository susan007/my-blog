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
                        ['/WEB/JS/js运算符',' js 运算符']
                    ]
                }, {
                    title: 'CSS',
                    collapsable: true,
                    children: [
                        ['/WEB/CSS/bilibili', '前端动画小记---bilibili ( ゜-゜)つロ客户下载小动画'],
                        ['/WEB/CSS/background-position为什么会出现负值？', 'background-position为什么会出现负值？'],
                        ['/WEB/CSS/svg日出', 'svg动画之日出']
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
                        ['/WEB/VUE/vue08', 'vue-cli脚手架之其他文件解释']
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
                        ['/WEB/ES6/集合','集合']
                    ]
                }
            ],
            '/SOURCE/': [
                {
                    title: '杂谈',
                    collapsable: true,
                    children: [
                        ['/SOURCE/数据可视化框架','数据可视化框架收集'],
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
