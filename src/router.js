import Vue from 'vue'
import VueRouter from 'vue-router'
import Account   from './components/base/account'
import Setfun from './components/base/setfun'
import Report from './components/base/report'
import Setmember from './components/base/setmember'
import Kefu from './components/base/kefu'
Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes : [
		{
			path : '/' ,
			redirect : '/setfun'
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
		}
	]
})
