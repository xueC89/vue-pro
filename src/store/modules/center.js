
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
        state.center.userName = res.name;
        state.center.userAvatar = res.pic;
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}