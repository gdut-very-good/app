import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import login from '@/views/loginPage/login'
import Index from "@/views/IndexPage/Index";
import userInfoPage from "@/views/IndexPage/userInfoPage/userInfoPage";
import userInfo from "@/views/IndexPage/userInfoPage/userInfo";

Vue.use(Router);

const ysyRouter = [

]

export const router = new Router({
	routes: [
		{
			path: '/',
			name: 'userInfo',
			component: userInfo
		},
		{
		    path: '/index',
            name : 'Index',
            component: Index,
			children: [
				{
					path: 'userInfoPage',
					name: 'userInfoPage',
					component: userInfoPage
				},
				{
					path: 'userInfo',
					name: 'userInfo',
					component: userInfo
				},
			]
        }
	]
});
