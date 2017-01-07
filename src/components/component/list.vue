<template>
    <div class="page-infinite-wrapper home-list" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
            <li v-for="item in doList" class="page-infinite-listitem">
                <router-link class="home-list-link" to="">
                    <div class="logo"><img src="../../images/01.jpg" alt=""></div>
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
</template>

<script>
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
                this.loading = true;
                setTimeout(() => {
                    let last = this.doList[this.doList.length - 1];
                    for (let i = 1; i <= 5; i++) {
                        this.doList.push(last + i);
                    }
                    this.loading = false;
                }, 2500);
            }
        },
        mounted() {
            var t = this;
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
            for (var i = 1; i <= 10; i++) {
                this.doList.push(i)
            }
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