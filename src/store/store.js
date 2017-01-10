
import Vue from 'vue'
import Vuex from 'vuex';

import com from './modules/com'
import index from './modules/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        com,
        index
    },
    strict: process.env.NODE_ENV !== 'production' //是否开启严格模式
})

export default store