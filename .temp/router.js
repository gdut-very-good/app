import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import login from '@/views/loginPage/login'
import Index from "@/views/IndexPage/Index";
import set from "@/views/IndexPage/userInfoPage/set/set";
import userInfo from "@/views/IndexPage/userInfoPage/userInfo";
import stamp from "@/views/IndexPage/userInfoPage/stamp/stamp";
import writeLetter from "@/views/IndexPage/writeLetter/writeLetter/writeLetter";
import jiaonangList from "@/views/IndexPage/writeLetter/jiaonangList/jiaonangList";
import shudongList from "@/views/IndexPage/writeLetter/shudongList/shudongList";
import friendInfo from "@/views/IndexPage/writeLetter/writeLetter/friendInfo/friendInfo";
import letterMessage from "@/views/IndexPage/writeLetter/writeLetter/letterMessage/letterMessage";
import shudong from '@/views/IndexPage/writeLetter/shudong/shudong'
import jiaonang from "@/views/IndexPage/writeLetter/jiaonang/jiaonang";
import letterIndex from "@/views/IndexPage/writeLetter/letterIndex";
import changeInfo from "@/views/IndexPage/userInfoPage/set/changeInfo/changeInfo";
import draftPage from "@/views/IndexPage/draftPage/draftPage";
import IslandPage from "@/views/IndexPage/islandPage/IslandPage";
import message from "@/views/IndexPage/userInfoPage/message/message";
import managerTree from "@/views/IndexPage/userInfoPage/managerTree/managerTree";
import singleTree from "@/views/IndexPage/userInfoPage/managerTree/singleTree/singleTree";
import letter from "@/views/IndexPage/writeLetter/letter/letter";
import envelope from "@/views/IndexPage/writeLetter/letter/envelope/envelope";
import submitEnvelope from "@/views/IndexPage/writeLetter/letter/submitEnvelope/submitEnvelope";
import IslandDefault from "@/views/IndexPage/islandPage/IslandDetail/IslandDetail";
import PostDetail from "@/views/IndexPage/islandPage/IslandDetail/postDetail/PostDetail";

Vue.use(Router);

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}


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
					path: 'userInfo',
					name: 'userInfo',
					component: userInfo,
				},
				{
					path: 'letterMessage',
					name: 'letterMessage',
					component: letterMessage,
				},
				{
					path: 'letterIndex',
					name: 'letterIndex',
					component: letterIndex,
					children: [
						{
							path: 'writeLetter',
							name: 'writeLetter',
							component: writeLetter,
						},
						{
							path: 'jiaonangList',
							name: 'jiaonangList',
							component: jiaonangList,
						},
						{
							path: 'shudongList',
							name: 'shudongList',
							component: shudongList,
						},
					]
				},
				{
					path: 'jiaonang',
					name: 'jiaonang',
					component: jiaonang,
				},
				{
					path: 'shudong',
					name: 'shudong',
					component: shudong,
				},
				{
					path: 'userInfo/set',
					name: 'set',
					component: set
				},
				{
					path: 'letterIndex/writeLetter/letter',
					name: 'envelope',
					component: envelope,
				},
				// {
				// 	path: 'letterIndex/writeLetter/envelope',
				// 	name: 'envelope',
				// 	component: envelope,
				// },
				{
					path: 'letterIndex/writeLetter/envelope',
					name: 'envelope',
					component: envelope,
				},
				{
					path: 'letterIndex/writeLetter/submitEnvelope',
					name: 'submitEnvelope',
					component: submitEnvelope,
				},
				{
					path: 'userInfo/set/changeInfo',
					name: 'changeInfo',
					component: changeInfo
				},
				{
					path: 'userInfo/managerTree',
					name: 'managerTree',
					component: managerTree
				},
				{
					path: 'userInfo/managerTree/singleTree',
					name: 'singleTree',
					component: singleTree
				},
				{
					path: 'userInfo/stamp',
					name: 'stamp',
					component: stamp
				},
				{
					path: 'userInfo/message',
					name: 'message',
					component: message
				},
				{
					path : 'draftPage',
					name : 'draftPage',
					component : draftPage
				},
				{
					path : 'IslandPage',
					name : 'IslandPage',
					component : IslandPage
				},
			]
        }
	]
});
