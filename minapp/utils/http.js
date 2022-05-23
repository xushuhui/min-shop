import {
    promisic
} from "util.js"
import {
    config
} from "../config/config.js"
class Http {
    static async request({
        url,
        data,
        method = 'GET'
    }) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appKey: config.appKey
            }

        })
        return res.data

    }

}
export {
    Http
}
