/*global Vue*/
import Router from 'vue-router'
import login from '@/views/loginPage/login'
import Index from "@/views/IndexPage/Index";

Vue.use(Router);

const ysyRouter = {

}

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
            component: Index
        }
	]
});
