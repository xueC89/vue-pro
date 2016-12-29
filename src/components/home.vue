<template>
    <div class="view">
        <mt-header title="首页" class="navbar common-navbar">
            <div slot="left">城市</div>
            <div slot="right">搜索</div>
        </mt-header>
        <div class="page-content">
            <mt-swipe :auto="5000" class="home-swipe">
                <mt-swipe-item v-for="img in imgs"><img :src="img.pic" :alt="img.title"></mt-swipe-item>
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
            <div class="page-infinite-wrapper home-list" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
                <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
                    <li v-for="item in list" class="page-infinite-listitem">
                        <router-link class="home-list-link" to="">
                            <div class="logo"><img src="../images/01.jpg" alt=""></div>
                            <div class="content">
                                <div class="name">必胜客 {{ item }}</div>
                                <div class="address">
								    台江区康城路宝龙城市广场负一层宝龙城市广场宝龙城市广场宝龙城市广场
								</div>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <p v-show="loading" class="page-infinite-loading">
                    <mt-spinner type="fading-circle"></mt-spinner>
                    加载中...
                </p>
            </div>
        </div>
    </div>
</template>

<script>
require('../css/home.scss')
import api from '../api/api.js'

export default {
    data(){
        return {
            imgs: [],
            loading: false,
            list: [],
            allLoaded: false,
			wrapperHeight: 0
        }
    },
    methods: {
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 5; i++) {
                    this.list.push(last + i);
                }
                this.loading = false;
            }, 2500);
        }
    },
    mounted() {
        var t = this;
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
        for (var i = 1; i <= 10; i++) {
            this.list.push(i)
        }

        var dataImg = t.imgs;
        api.indexGetPic(function(res){
            for(let i=0; i<res.length; i++){
                dataImg.push(res[i]);
            }
        })
    }
}
</script>
