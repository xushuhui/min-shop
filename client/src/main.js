import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
       '^pages/me/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#AB956D',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    "tabBar":{
      "list":[{
          "pagePath":"pages/books/main",
          "iconPath":"static/img/book.png",
          "selectedIconPath":"static/img/book-active.png",
          "text":"图书"
        },{
          "pagePath":"pages/comments/main",
          "iconPath":"static/img/todo.png",
          "selectedIconPath":"static/img/todo-active.png",
          "text":"评论"
        },{
          "pagePath":"pages/me/main",
          "iconPath":"static/img/todo.png",
          "selectedIconPath":"static/img/me-active.png",
          "text":"我的"
        }],
        "backgroundColor": "#F5F5F5",
        "selectedColor": "#AB956D",
        "color": "#989898",
        "borderStyle": "white",
        "position":"bottom"
    },
  }
}
