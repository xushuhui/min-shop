import config from './config'

function request(url, method,data){
    return new Promise((reslove,reject)=> {
        wx.request({
            url: config.host + url,
            data: data,
            method:method,
            header: {
                'content-type': 'application/json',
                'token': wx.getStorageSync('token')
            },
            success: function (res) {
               if(res.data.error_code == 0){
                   reslove(res.data.data);
               }else{
                   reject(res.data)
               }
            },
            fail: function (err) {
            
                //that._processError(err);
               
            }
        });
    })
}
function get(url,method = 'get') {
    request(url,method)
}
function post(url,method = 'post',data) {
    request(url,method,data)
}
export {
    get,post
}