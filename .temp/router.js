import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import login from '@/views/loginPage/login'
import Index from "@/views/IndexPage/Index";

Vue.use(Router);

export const router = new Router({
	routes: [
		// {
		// 	path: '/',
		// 	name: 'login',
		// 	component: login
		// },
		{
		    path: '/',
            name : 'Index',
            component: Index
        }
	]
});
