module.exports = {
    title: 'egg-syllabus-framework',
    description: '课程表egg后台基础框架',
    head: [
        ['link', { rel: 'icon', href: '/favicon.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/web_accumulate/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        ['/guide/介绍.md', '介绍'],
                        ['/guide/快速入门.md', '快速入门'],
                        ['/guide/目录结构.md', '目录结构'],
                        ['/guide/日志.md', '日志'],
                        ['/guide/错误码.md', '错误码'],
                        ['/guide/其他.md', '其他'],
                    ]
                },
            ],
            '/theory/': [
                {
                    title: '框架原理',
                    collapsable: false,
                    children: [
                        ['/theory/中间件.md', '中间件'],
                        ['/theory/扩展.md', '扩展'],
                        ['/theory/其他.md', '其他'],
                    ]
                },
            ],
        },
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/介绍' },
            { text: '框架原理', link: '/theory/中间件' },
            { text: 'Git', link: 'https://git.code.tencent.com/stu-syllabus/mini-pro-framework' },
        ],
    }
}
