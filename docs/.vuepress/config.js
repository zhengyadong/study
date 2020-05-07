module.exports = {
    title: 'vue3.0学习总结',  // 设置网站标题
    description : 'vue3.0',
    dest:'./dist',  // 默认在.vuepress目录下
    base : '/study/',
    head:[
        ['link', {rel:'icon',href:'/logo.jpg'}],
        ['link', {rel:'stylesheet',href:'/css/style.css'}],
        ['script', {charset:'utf-8',src:'/js/main.js'}]
    ],
    themeConfig : {
      nav : require('./nav'),
    //   [
    //       { text: '接口定义', link: '/apiword',
    //       items: [
    //         {text:'初级', link:'/foo/study'},
    //         {text:'中级', link:'/foo/study2'}
    //     ] },
    //       { text: '接口字段定义', link: '/api' },
    //       { text: '附录：错误码', link: '/error' }
    //   ],
      sidebar: require('./sidebar'),
    //   {
    //       '/' : [
    //             "/", //指的是根目录的md文件 也就是 README.md 里面的内容
    //           "apiword",  //根目录创建 apiword.md文件
    //           "api",//根目录创建 api.md文件
    //           "error" //根目录创建 error.md文件
    //       ]
    //   },
      sidebarDepth : 2
    }
  }