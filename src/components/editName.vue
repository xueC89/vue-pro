<template>
    <div class="view">
        <mt-header title="修改用户名" class="navbar common-navbar">
            <mt-button slot="left" @click="goBack">返回</mt-button>
        </mt-header>
        <div class="page-content">
            <div class="edit-name-box">
                <input type="text" name="" id="" class="edit-name" :value="userName" v-on:keyup.delete="delShowFn">
                <span class="del" :class="{show: delShow}">X</span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data: function(){
        return {
            delShow: false
        }
    },
    methods: {
        goBack: function(){
            this.$router.go(-1);
        },
        delShowFn: function(){
            this.delShow = true;
        }
    },
    created (){
        var vm = this;
        vm.$store.commit('COM_CONF', {isFooter: false})
        
        log( this.delShow)
    },
    computed: mapGetters({
        userName: 'centerUserName'
    })
}
</script>