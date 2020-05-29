import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/modules/user";

// 需要提供install方法
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		count : 0,
		imageBaseUrl : 'http://island.hellochaos.cn/uploads/',
		defaultImageUrl : 'http://printer.noerror.xyz/appImage/background.png'
	},
	mutations: {},
	actions: {},
	modules: {
        user,
		student : {
			state : {
				id : 1,
				name : "sena",
			},
			modules : {
				card : {
					state : {
						cardId : '123456789'
					}
				}
			}
		},
	}
});
