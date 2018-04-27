import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/admin',
	routes: [
		{
			path: '/',
			component: () => import('../backend/layout.vue'),
			children: [
				{
					path: '',
					component: () => import('../backend/index.vue'),
					name: 'index',
				},
				{
					path: 'adduser',
					component: () => import('../backend/adduser.vue'),
					name: 'adduser',
				},
				{
					path: 'category',
					component: () => import('../backend/category.vue'),
					name: 'category',
				},
				{
					path: 'addarticle',
					component: () => import('../backend/addarticle.vue'),
					name: 'addarticle',
				},
			]
		},
		{
			path: '*',
			component: () => import('../backend/notFound.vue')
		},
	]
})


// import Vue from 'vue'
// import Router from 'vue-router'
// import layout from '../backend/layout.vue'
// import index from '../backend/index.vue'
// import adduser from '../backend/adduser.vue'
// import category from '../backend/category.vue'
// import addarticle from '../backend/addarticle.vue'
// import notFound from '../backend/notFound.vue'

// Vue.use(Router)

// export default new Router({
// 	routes: [
// 		{
// 			path: '/',
// 			component: layout,
// 			children: [
// 				{
// 					path: '',
// 					component: index,
// 					name: 'index',
// 				},
// 				{
// 					path: 'adduser',
// 					component: adduser,
// 					name: 'adduser',
// 				},
// 				{
// 					path: 'category',
// 					component: category,
// 					name: 'category',
// 				},
// 				{
// 					path: 'addarticle',
// 					component: addarticle,
// 					name: 'addarticle',
// 				},
// 			]
// 		},
// 		{
// 			path: '*',
// 			component: notFound
// 		},
// 	]
// })
