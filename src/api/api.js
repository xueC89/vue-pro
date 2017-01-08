
import axios from 'axios'

export default {

    indexGetList: function(cb){
        axios.get('/index/indexList').then(function(res){
            if(res.data.data.code === 1000){
                setTimeout(function(){
                    cb(res.data.data.data)
                }, 0)
            }
        })
    },

    indexGetPic: function(cb) {
        axios.get('/index/getPic').then(function(res){
            if(res.data.data.code === 1000){
                setTimeout(function() {
                    cb(res.data.data.data)
                }, 0);
            }
        })
    },

    centerGetInfo: function(cb) {
        axios.get('/center/getInfo').then(function(res){
            if(res.data.data.code === 1000){
                setTimeout(function() {
                    cb(res.data.data.data)
                }, 0);
            }
        })
    },
    
    articleGetList: function(cb) {
        axios.get('/article/getArticle').then(function(res){
            if(res.data.data.code === 1000){
                setTimeout(function() {
                    cb(res.data.data.data)
                }, 0);
            }
        })
    },

    articleGetContent: function(cb) {
        axios.get('/article/getContent').then(function(res){
            if(res.data.data.code === 1000){
                setTimeout(function() {
                    cb(res.data.data.data)
                }, 0);
            }
        })
    }
}