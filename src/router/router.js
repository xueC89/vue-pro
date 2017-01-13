import Vue from 'vue'

import Home from '../components/home.vue'
import Center from '../components/center.vue'
import Article from '../components/article.vue'
import EditName from '../components/editName.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {path: '', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/center', component: Center},
    // {path: '/article', component: Article}
    {path: '/article/:id', name: 'article', component: Article},
    {path: '/editName', component: EditName}
]

const router = new VueRouter({
    routes,
    linkActiveClass:'active'    //router-link的选中状态的class，也有一个默认的值
})

export default router