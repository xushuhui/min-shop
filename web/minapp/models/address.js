
import { Http } from "../utils/http"

class Address {

    /*获得我自己的收货地址*/
    static async getAddress() {
        return await Http.request({
            url: `address`
        })
    }

    /*保存地址*/
    static async _setUpAddress(res) {
        var formData = {
            name: res.userName,
            province: res.provinceName,
            city: res.cityName,
            country: res.countyName,
            mobile: res.telNumber,
            detail: res.detailInfo
        };
        return formData;
    }

    /*更新保存地址*/
    static async submitAddress(data) {
        data = _setUpAddress(data);


        return await Http.request({
            url: 'address',
            method: 'POST',
            data: data

        })
    }

    /*是否为直辖市*/
    static async isCenterCity(name) {
        var centerCitys = ['北京市', '天津市', '上海市', '重庆市'],
            flag = centerCitys.indexOf(name) >= 0;
        return flag;
    }

    /*
    *根据省市县信息组装地址信息
    * provinceName , province 前者为 微信选择控件返回结果，后者为查询地址时，自己服务器后台返回结果
    */
    static async setAddressInfo(res) {
        var province = res.provinceName || res.province,
            city = res.cityName || res.city,
            country = res.countyName || res.country,
            detail = res.detailInfo || res.detail;
        var totalDetail = city + country + detail;
        //直辖市，取出省部分
        if (!this.isCenterCity(province)) {
            totalDetail = province + totalDetail;
        };
        return totalDetail;
    }
}

export { Address }