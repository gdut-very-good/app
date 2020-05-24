import {Request} from "@/utils/apiManager/request";
import {getResult} from "@/utils/apiManager/response";

class LetterApi extends Request{
    //获取炮友列表
    async getBoomFriend() {
        return getResult(await this.get('/friend'))
    }
    //根据某一个userId查询用户信息
    async getSingleInfo(data) {
        return getResult(await this.get('/user/' + data))
    }
    //获取笔友之间的信件
    async getFriendLetter(data) {
        return getResult(await this.get('/letter/?friendId=' + data))
    }
    //用户新增加树洞
    async addTree(data) {
        return getResult(await this.post('/tree-hole', data))
    }
    //获取树洞列表
    async getHoleList() {
        return getResult(await this.get('/tree-hole'))
    }
}

export const letter = new LetterApi()