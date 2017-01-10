<template>
  <div id="app">
    <router-view></router-view>
    <div class="toolbar row common-toolbar" v-show="comConf.isFooter">
        <router-link class="col-auto" to="/home">
          <i class="iconfont">&#xe600;</i>
          <span>首页</span>
        </router-link>
        <router-link class="col-auto" to="/center">
          <i class="iconfont">&#xe601;</i>
          <span>个人中心</span>
        </router-link>
    </div>
  </div>
</template>

<script>
  require('./css/base.scss')
  require('./css/header.scss')
  require('./css/footer.scss')

  export default {
    data: function(){
        return {
            transitionName: 'slide-left'
        }
    },
    created: function(){
        this.$store.commit('COM_CONF', {isFooter: true})
    },
    computed: {
      comConf: function(){
        return this.$store.getters.comConf
      }
    }
  }
</script>