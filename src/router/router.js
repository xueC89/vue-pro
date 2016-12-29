import Vue from 'vue'

import Home from '../components/home.vue'
import Center from '../components/center.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {path: '', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/center', component: Center}
]

const router = new VueRouter({
    routes,
    linkActiveClass:'active'    //router-link的选中状态的class，也有一个默认的值
})

export default router