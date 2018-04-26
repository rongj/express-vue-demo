import Vue from 'vue'
import Router from 'vue-router'

import home from '../frontend/home.vue'
import category from '../frontend/category.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/',
	routes: [
		{
			path: '/',
			component: home,
			name: 'home',
		},
		{
			path: '/category/:id',
			component: category,
			name: 'category',
		},
	]
})
