/*global Vue*/
import Router from 'vue-router'
import login from '@/views/loginPage/login'
import Index from "@/views/IndexPage/Index";
import userInfoPage from "@/views/IndexPage/userInfoPage/userInfoPage";
import userInfo from "@/views/IndexPage/userInfoPage/userInfo";
import draftPage from "@/views/IndexPage/draftPage/draftPage";
import IslandPage from "@/views/IndexPage/islandPage/IslandPage";
import IslandDefault from "@/views/IndexPage/islandPage/IslandDetail/IslandDetail";
import PostDetail from "@/views/IndexPage/islandPage/IslandDetail/postDetail/PostDetail";

Vue.use(Router);

const ysyRouter = [

];

export const router = new Router({
	routes: [
		{
			path: '/',
			name: 'PostDetail',
			component: PostDetail
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
				{
					path : 'draftPage',
					name : 'draftPage',
					component : draftPage
				}
			]
        }
	]
});
