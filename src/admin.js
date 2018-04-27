import Vue from 'vue'
import App from './App.vue'
import router from './router/admin.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});