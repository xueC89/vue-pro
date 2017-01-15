
import * as types from '../mutation'
import api from '../../api/api'

const state = {
    center: {
        userName: '',
        userAvatar: ''
    }
}

const getters = {
    centerUserName: state => state.center.userName,
    centerUserAvatar: state => state.center.userAvatar
}

const actions = {
    centerGetUserInfo({commit}){
        api.centerGetUserInfo(function(res){
            commit(types.CENTER_USER_INFO, {res})
        })
    }
}

const mutations = {
    [types.CENTER_USER_INFO](state, {res}){
        if(!state.center.userName){
            state.center.userName = res.name;
            state.center.userAvatar = res.pic;
        }
    },
    [types.CENTER_USER_NAME](state, name){
        state.center.userName = name;
        log(state.center.userName)
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}