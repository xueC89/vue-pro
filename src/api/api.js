
import axios from 'axios'

export default {

    indexGetList: function(cb){
        axios.get('/index/getList').then(function(res){
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
    }
    
}