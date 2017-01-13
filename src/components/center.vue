<template>
    <div class="view">
        <mt-header title="个人中心" class="navbar common-navbar"></mt-header>
        <div class="page-content">
            <div class="center-header">
                <div class="info">
                    <img :src="userAvatar" alt="">
                    <span>{{userName}}</span>
                </div>
                <div class="edit">
                    <router-link to="/editName"><i class="iconfont">&#xe621;</i></router-link>
                </div>
            </div>  

            <div class="center-list">
                <ul>
                    <li>
                        <router-link to="">
                            <div class="item-media">
                                <i class="iconfont">&#xe613;</i>
                            </div>
                            <div class="item-inner">我的订单</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <div class="item-media">
                                <i class="iconfont">&#xe614;</i>
                            </div>
                            <div class="item-inner">我的优惠券</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <div class="item-media">
                                <i class="iconfont">&#xe615;</i>
                            </div>
                            <div class="item-inner">我的余额</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <div class="item-media">
                                <i class="iconfont">&#xe60e;</i>
                            </div>
                            <div class="item-inner">设置</div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
require('../css/center.scss')
import {mapGetters} from 'vuex'

export default {
    created (){
        var vm = this;
        vm.$store.commit('COM_CONF', {isFooter: true});

        vm.$store.dispatch('centerGetUserInfo');

    },
    computed: mapGetters({
        userName: 'centerUserName',
        userAvatar: 'centerUserAvatar'
    })
}
</script>