<template>
    <div class="page-infinite-wrapper home-list" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
            <li v-for="item in doList" class="page-infinite-listitem">
                <router-link class="home-list-link" :to="{name: 'article', params: {id: item.articleId}}">
                    <div class="logo"><img :src="item.logo" alt=""></div>
                    <div class="content">
                        <div class="name">{{ item.title }}</div>
                        <div class="address">
                            {{ item.introduction }}
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
</template>

<script>
require('../../css/list.scss')
import api from '../../api/api.js'

    export default {
        data(){
            return {
                loading: false,
                allLoaded: false,
                wrapperHeight: 0
            }
        },
        methods: {
            loadMore() {
                var t = this;
                this.loading = true;
                setTimeout(() => {
                    /*let last = this.doList[this.doList.length - 1];
                    for (let i = 1; i <= 5; i++) {
                        this.doList.push(last + i);
                    }*/
                    api.articleGetList(function(res){
                        for(let i=0; i<res.length; i++){
                            t.doList.push(res[i]);
                        }
                    })
                    this.loading = false;
                }, 2500);
            }
        },
        mounted() {
            var t = this;
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
            /*for (var i = 1; i <= 10; i++) {
                this.doList.push(i)
            }*/
        },
        props: {
            listData: {
                type: Array,
                default: function(){
                    return []
                }
            }
        },
        computed: {
            doList: function(){
                return this.listData
            }
        }
    }
</script>