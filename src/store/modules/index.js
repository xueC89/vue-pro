
import api from '../../api/api'
import * as types from '../mutation'

const state = {
    index: {
        list: [],
        pics: []
    }
}

const getters = {
    indexListData: state => state.index.list,
    indexPicsData: state => state.index.pics
}

const actions = {
    indexGetList({commit}){
        api.articleGetList(function(res){
            commit(types.INDEX_GET_LIST, {res})
        })
    },

    indexGetPics({commit}){
        api.indexGetPic(function(res){
            commit(types.INDEX_GET_PICS, {res})
        })
    }
}

const mutations = {
    [types.INDEX_GET_LIST](state, {res}){
        for(let i=0; i<res.length; i++){
            state.index.list.push(res[i]);
        }
    },
    [types.INDEX_GET_PICS](state, {res}){
        state.index.pics = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}