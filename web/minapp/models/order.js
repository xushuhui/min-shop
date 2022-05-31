
import { Http } from "../utils/http"
class Order {

    constructor() {

        this._storageKeyName = 'newOrder';
    }

    /*下订单*/
    static async doOrder(param) {
        return await Http.request({
            url: 'order',
            method: 'POST',
            data: param

        })

    }

    /*
    * 拉起微信支付
    * params:
    * norderNumber - {int} 订单id
    * return：
    *
    * */
    static async execPay(orderNumber) {
        const order = await Http.request({
            url: 'pay/pre_order',
            method: 'POST',
            data: { id: orderNumber }

        })

     
        try {
            const res = await  wx.requestPayment({
                'timeStamp': order.timeStamp.toString(),
                'nonceStr': order.nonceStr,
                'package': order.package,
                'signType': order.signType,
                'paySign': order.paySign,
    
            });
            wx.redirectTo({
                url: `/pages/pay-success/pay-success?oid=${oid}`
            })
        } catch (e) {
            wx.redirectTo({
                url: `/pages/my-order/my-order?key=${1}`
            })
        }
    }

    /*获得所有订单,pageIndex 从1开始*/
    static async getOrders(pageIndex) {
        var allParams = {
            url: 'order/by_user',
            data: { page: pageIndex },
            type: 'get',
            sCallback: function (data) {
                callback && callback(data);  //1 未支付  2，已支付  3，已发货，4已支付，但库存不足
            }
        };
        this.request(allParams);
        
    }

    /*获得订单的具体内容*/
    static async getOrderInfoById(id) {
        var that = this;
        var allParams = {
            url: 'order/' + id,
            sCallback: function (data) {
                callback && callback(data);
            },
            eCallback: function () {

            }
        };
        this.request(allParams);
    }

    /*本地缓存 保存／更新*/
    static execSetStorageSync(data) {
        wx.setStorageSync(this._storageKeyName, data);
    };

    /*是否有新的订单*/
    static hasNewOrder() {
        var flag = wx.getStorageSync(this._storageKeyName);
        return flag == true;
    }

}

export { Order };