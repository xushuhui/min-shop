import { Http } from "../utils/http"
class Home {
   

    /*banner图片信息*/
    static async getBannerData(){

        return await Http.request({
            url: `banner/1`
        })
    }
    /*首页主题*/
    static async getThemeData(){
      
        return await Http.request({
            url: `theme?ids=1,2,3`
        })
    }

    /*首页部分商品*/
    static async getProductorData(){
        return await Http.request({
            url: `product/recent`
        })
    }
  
};

export {Home};