
import * as types from '../mutation'

const state = {
    isFooter: false //是否显示底部
}

const actions = {
    comConf({commit}, settings){
        commit(types.COM_CONF, settings)
    }
}

const getters = {
    comConf: state => state
}

const mutations = {
    [types.COM_CONF](state, settings){
        state = Object.assign(state, settings)
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}