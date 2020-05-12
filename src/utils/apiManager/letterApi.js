import {Request} from "@/utils/apiManager/request";
import {getResult} from "@/utils/apiManager/response";

class LetterApi extends Request{
    async getBoomFriend() {
        return getResult(await this.get('/friend'))
    }
}

export const letter = new LetterApi()