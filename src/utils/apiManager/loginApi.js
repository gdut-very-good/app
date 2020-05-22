import {Request} from "@/utils/apiManager/request";
import {getResult} from "@/utils/apiManager/response";

class LoginApi extends Request{
    async login(data) {
        return getResult(await this.post('/user/login', data))
    }

    async register(data) {
        return getResult(await this.post('/user/', data))
    }

    async changeUserInfo(data) {
        return getResult(await this.put('/user/', data))
    }

    async uploadHeadIcon(data) {
        return getResult(await this.upload('/user/upload', data))
    }
}

export const loginModules = new LoginApi()