<template>
    <div class="view">
        <mt-header title="首页" class="navbar common-navbar">
            <div slot="left">城市</div>
            <div slot="right">搜索</div>
        </mt-header>
        <div class="page-content">
            <mt-swipe :auto="5000" class="home-swipe">
                <mt-swipe-item v-for="img in indexPicsData"><img :src="img.pic" :alt="img.title"></mt-swipe-item>
            </mt-swipe>
            <div class="row home-nav">
                <router-link class="col-auto" to="">
                    <i class="iconfont color-green">&#xe611;</i>
                    <span>附近商家</span>
                </router-link>
                <router-link class="col-auto" to="">
                    <i class="iconfont color-red">&#xe622;</i>
                    <span>扫码支付</span>
                </router-link>
                <router-link class="col-auto" to="">
                    <i class="iconfont color-orange">&#xe607;</i>
                    <span>免费吃</span>
                </router-link>
                <router-link class="col-auto" to="">
                    <i class="iconfont color-lightblue">&#xe614;</i>
                    <span>我的订单</span>
                </router-link>
            </div>

            <div class="home-tag-title">
                <i class="iconfont">&#xe60d;</i> 特别推荐
            </div>

            <index-list :list-data="indexListData"></index-list>
        </div>
    </div>
</template>

<script>
require('../css/home.scss')
import api from '../api/api.js'
import List from './component/list'
import {mapGetters} from 'vuex'

export default {
    methods: {

    },
    created() {
        var vm = this;
        vm.$store.commit('COM_CONF', {isFooter: true})

        vm.$store.dispatch('indexGetPics').then(function(){
            vm.$store.dispatch('indexGetList')
        })

    },
    components: {
        indexList: List
    },
    computed: mapGetters({
        indexListData: 'indexListData',
        indexPicsData: 'indexPicsData'
    })
}
</script>
