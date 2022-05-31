
import { Http } from "../utils/http"
class My{
    
    //得到用户信息
    static async  getUserInfo(cb){
        var that=this;
        wx.login({
            success: function () {
                wx.getUserInfo({
                    success: function (res) {
                        typeof cb == "function" && cb(res.userInfo);

                        //将用户昵称 提交到服务器
                        if(!that.onPay) {
                            that._updateUserInfo(res.userInfo);
                        }

                    },
                    fail:function(res){
                        typeof cb == "function" && cb({
                            avatarUrl:'../../imgs/icon/user@default.png',
                            nickName:'零食小贩'
                        });
                    }
                });
            },

        })
    }

    /*更新用户信息到服务器*/
    static async   _updateUserInfo(res){
        

        return await Http.request({
            url: `user/wx_info`,
            method: 'POST',
            data: {nickname:res.nickName,extend:JSON.stringify(res)},
        })
    }
}



export {My}