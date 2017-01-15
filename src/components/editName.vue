<template>
    <div class="view">
        <mt-header title="修改用户名" class="navbar common-navbar">
            <mt-button slot="left" @click="goBack">返回</mt-button>
        </mt-header>
        <div class="page-content">
            <div class="edit-name-box">
                <input type="text" name="" id="" class="edit-name" v-model="name">
                <mt-button size="large" type="primary" @click="saveName">保存</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data: function(){
        var vm = this
        return {
            name: ''
        }
    },
    methods: {
        goBack: function(){
            this.$router.go(-1);
        },
        saveName() {
            this.$store.commit('CENTER_USER_NAME', this.name)
        }
    },
    created (){
        var vm = this;
        vm.$store.commit('COM_CONF', {isFooter: false})
        vm.name = vm.userName;
    },
    computed: mapGetters({
        userName: 'centerUserName'
    })
}
</script>