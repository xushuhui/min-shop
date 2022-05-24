import { Http } from "../utils/http"
class Theme {

    static async getProductorData(id) {

        return await Http.request({
            url: `theme/${id}`
        })
    }
};

export { Theme };