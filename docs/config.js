module.exports = {
  title: '组件库',  // 设置网站标题
  description : 'component',    // 
  dest:'./dist',  // 默认在.vuepress目录下
  base : '/',
  head:[
      // ['link', {rel:'icon',href:'/logo.jpg'}],
      // ['link', {rel:'stylesheet',href:'/css/style.css'}],
      // ['script', {charset:'utf-8',src:'/js/main.js'}]
  ],
  themeConfig : {
    nav : require('./nav'),
    sidebar: require('./sidebar'),
    sidebarDepth : 2
  }
}