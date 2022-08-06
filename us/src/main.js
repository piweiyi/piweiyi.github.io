import Vue from 'vue'
import App from './App.vue'
import router from './router' //引入路由
import store from './store/index' //引入store
import '@/utils/viewUi.js'
import 'view-design/dist/styles/iview.css' // 引入iview的样式表
import '@/assets/style/iconfont/iconfont.css'
import '@/assets/style/viewDesign.less'
import '@/assets/style/rem.js' //配置px转rem，做屏幕自适应
import Particle from '@/components/particle/index.vue'; // 鼠标粒子特效
import $ from 'jquery'
window.jQuery = $
window.$ = $

Vue.component('Particle', Particle)

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
