import { createApp } from 'vue'
import App from './06_引用元素和组件/App.vue'
import animated from 'animate.css'

//  webpack 会进行分包操作
// import("./05_异步组件的使用/utils/math").then(res=>{
//     res.sum(3,2);
// })
// App.use(animated)
createApp(App).use(animated).mount('#app')
