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
					path: 'article',
					component: () => import('../backend/article.vue'),
					name: 'article',
				},
				{
					path: 'articleDetail/:id',
					component: () => import('../backend/articleDetail.vue'),
					name: 'articleDetail',
				},
				{
					path: 'addarticle',
					component: () => import('../backend/addarticle.vue'),
					name: 'addarticle',
				},
			]
		},
		{
			path: '/login',
			component: () => import('../backend/login.vue')
		},
		{
			path: '*',
			component: () => import('../backend/notFound.vue')
		},
	]
})