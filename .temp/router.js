import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import login from '@/views/loginPage/login'
import Index from "@/views/IndexPage/Index";
import set from "@/views/IndexPage/userInfoPage/set/set";
import userInfo from "@/views/IndexPage/userInfoPage/userInfo";
import stamp from "@/views/IndexPage/userInfoPage/stamp/stamp";
import writeLetter from "@/views/IndexPage/writeLetter/writeLetter";
import changeInfo from "@/views/IndexPage/userInfoPage/set/changeInfo/changeInfo";
import draftPage from "@/views/IndexPage/draftPage/draftPage";
import IslandPage from "@/views/IndexPage/islandPage/IslandPage";
import IslandDefault from "@/views/IndexPage/islandPage/IslandDetail/IslandDetail";
import PostDetail from "@/views/IndexPage/islandPage/IslandDetail/postDetail/PostDetail";

Vue.use(Router);


export const router = new Router({
	routes: [
		{
			path: '/',
			name: 'login',
			component: login
		},
		{
		    path: '/index',
            name : 'Index',
            component: Index,
			children: [
				{
					path: 'userInfo',
					name: 'userInfo',
					component: userInfo,
				},
				{
					path: 'writeLetter',
					name: 'writeLetter',
					component: writeLetter,
				},
				{
					path: 'userInfo/set',
					name: 'set',
					component: set
				},
				{
					path: 'userInfo/set/changeInfo',
					name: 'changeInfo',
					component: changeInfo
				},
				{
					path: 'userInfo/stamp',
					name: 'stamp',
					component: stamp
				},
				{
					path : 'draft',
					name : 'draft',
					component : draftPage
				},
				{
					path : 'island',
					name : 'island',
					component : IslandPage
				}
			]
        }
	]
});
