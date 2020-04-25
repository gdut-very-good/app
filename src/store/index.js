import Vue from 'vue'
import Vuex from 'vuex'

// 需要提供install方法
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		count : 0
	},
	mutations: {},
	actions: {},
	modules: {
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
		}
	}
});
