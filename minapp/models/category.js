import { Http } from "../utils/http"
class Category {
  

    /*获得所有分类*/
    static async  getCategoryType() {
        var param = {
            url: 'category/all',
            sCallback: function (data) {
                callback && callback(data);
            }
        };
        this.request(param);
    }
    /*获得某种分类的商品*/
    static async getProductsByCategory(id) {
        var param = {
            url: 'product/by_category?id='+id,
            sCallback: function (data) {
                callback && callback(data);
            }
        };
        this.request(param);
    }
}

export{Category};