import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/login'
import Register from './components/register'
import Getpwd from './components/getpwd'
import Account from './components/base/account'
import Setfun from './components/base/setfun'
import Report from './components/base/report'
import Setmember from './components/base/setmember'
import Kefu from './components/base/kefu'
import About from './components/about'
Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes : [
		{
			path : '/' ,
			redirect : '/login'
		},
		{
			path : '/login' ,
			component : Login
		},
		{
			path : '/register',
			component : Register
		},
		{
			path : '/getpwd',
			component : Getpwd
		},	
		{
			path : '/account' ,
			component : Account
		},
		{
			path: '/setfun',
			component : Setfun
		},
		{
			path : '/report',
			component : Report
		},
		{
			path : '/setmember' ,
			component : Setmember
		},
		{
			path : '/kefu',
			component : Kefu
		},
		{
			path : '/about',
			component : About
		}
	]
})
