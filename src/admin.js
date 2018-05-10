import Vue from 'vue'
import App from './App.vue'
import router from './router/admin'
import store  from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

const app = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});