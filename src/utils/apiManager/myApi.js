import {Request} from "@/utils/apiManager/request";
import {getResult} from "@/utils/apiManager/response";

class my extends Request{
    //获取用户的邮票
    async getStamp() {
        return getResult(await this.get('/stamp/?page=1&pageSize=10'))
    }
}
export const myApi = new my()