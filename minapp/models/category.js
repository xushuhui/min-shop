import { Http } from "../utils/http"
class Category {
  

    /*获得所有分类*/
    static async  getCategoryType() {
        
        return await Http.request({
            url: `category/all`
        })
    }
    /*获得某种分类的商品*/
    static async getProductsByCategory(id) {

        return await Http.request({
            url: `product/by_category?id=`+id
        })
    }
}

export{Category};