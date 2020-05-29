import {Request} from "@/utils/apiManager/request";
import {getResult} from "@/utils/apiManager/response";

class my extends Request{
    //获取用户的邮票
    async getStamp() {
        return getResult(await this.get('/stamp/?page=1&pageSize=10'))
    }
    //获取未读取的邮件
    async getNotice() {
        return getResult(await this.get('/notice/'))
    }
    //删除树洞
    async deleteTree(data) {
        return getResult(await this.delete('/tree-hole/' + data))
    }
    //获取单个树洞的信息
    async getSingleTreeHole(data) {
        return getResult(await this.get('/tree-hole/'+data))
    }
    //获取自己的树洞列表
    async getMyTreeHole() {
        return getResult(await this.get('/tree-hole/me'))
    }

}
export const myApi = new my()