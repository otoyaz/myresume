import Vue from 'vue'
import App from './components/myexperience'
// import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(Element)
new Vue({
    render: h => h(App)
}).$mount('#app')