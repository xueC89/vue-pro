<template>
    <div class="view">
        <mt-header class="navbar common-navbar">
            <router-link to="/" slot="left">
                <mt-button>返回</mt-button>
            </router-link>
        </mt-header>
        <div class="article-pic">
            <img :src=" pic " alt="">
        </div>
        <div class="article-info">
            <span>{{ name }}</span>
            <span>{{ date }}</span>
        </div>
        <div class="article-content">
            {{ content }}
        </div>
    </div>
</template>

<script>
require('../css/article.scss');
import api from '../api/api.js'

export default {
    data(){
        return {
            'id': '',
            'content': '',
            'pic': '',
            'title': '',
            'date': '',
            'name': ''
        }
    },
    created: function(){
        this.$store.commit('COM_CONF', {isFooter: false})
    },
    mounted(){
        var vm = this;
        this.id = this.$route.params.id;
        api.articleGetContent(function(res){
            vm.content = res.content;
            vm.pic = res.pic;
            vm.title = res.title;
            vm.name = res.name;
            vm.date = res.date;
        })

    }

}

</script>