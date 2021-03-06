import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

import router from './router/router.js'
import store from './store/store'

import mock from './server/mock'

Vue.config.debug = true

window.log = console.log

Vue.use(MintUI)

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
