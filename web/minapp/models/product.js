import { Http } from "../utils/http"
class Product {
  
    static async getDetailInfo(id){
       
        return await Http.request({
            url: `product/${id}`
        })
    }
};

export {Product}
