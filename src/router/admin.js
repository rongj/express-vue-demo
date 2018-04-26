import Vue from 'vue'
import Router from 'vue-router'
import layout from '../backend/layout.vue'
import index from '../backend/index.vue'
import login from '../backend/login.vue'
import users from '../backend/users.vue'
import adduser from '../backend/adduser.vue'
import userinfo from '../backend/userinfo.vue'
import category from '../backend/category.vue'
import subplate from '../backend/subplate.vue'
import tag from '../backend/tag.vue'
import article from '../backend/article.vue'
import addarticle from '../backend/addarticle.vue'
import editarticle from '../backend/editarticle.vue'
import log from '../backend/log.vue'
import notFound from '../backend/notFound.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/admin',
	routes: [
		{
			path: '/',
			component: layout,
			children: [
				{
					path: '',
					component: index,
					name: 'index',
				},
				{
					path: 'users',
					component: users,
					name: 'users',
				},
				{
					path: 'adduser',
					component: adduser,
					name: 'adduser',
				},
				{
					path: 'userinfo',
					component: userinfo,
					name: 'userinfo',
				},
				{
					path: 'category',
					component: category,
					name: 'category',
				},
				{
					path: 'subplate',
					component: subplate,
					name: 'subplate',
				},
				{
					path: 'tag',
					component: tag,
					name: 'tag',
				},
				{
					path: 'article',
					component: article,
					name: 'article',
				},
				{
					path: 'addarticle',
					component: addarticle,
					name: 'addarticle',
				},
				{
					path: 'editarticle',
					component: editarticle,
					name: 'editarticle',
				},
				{
					path: 'log',
					component: log,
					name: 'log',
				},
			]
		},
		{
			path: '/login',
			component: login,
			name: 'login',
		},
		{
			path: '*',
			component: notFound
		},
	]
})
