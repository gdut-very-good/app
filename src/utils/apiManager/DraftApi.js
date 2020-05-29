import {getResult} from "@/utils/apiManager/response";
import {Request} from "./request";
class DraftApi extends Request{
	async getDraftList(data) {
		return getResult(await this.get('/letter/draft', data))
	}
}

export const draftApiModule = new DraftApi();
