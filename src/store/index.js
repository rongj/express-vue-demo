import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import api_passport from '../api/passport'
import api_article from '../api/article'

const state = {
	user: {
		id: null,
		username: '',
	},
	articleList: {
		list: [],
		currentPage: 1,
		pageSize: 10,
		totalCount: 0,
	},

	articleDetail: {
		id: null,
		title: '',
		content: '',
	}
}

const getters = {

}

const actions = {
	// 登录
	login({ commit }, data) {
		return api_passport.login(data).then(res => {
			return res.data
		})
	},

	// 登出
	logout({ commit }) {
		return api_passport.logout().then(res => {
			if(res.data.code === 200) {
				commit('saveUser', {})
				return res.data
			} else {
				return res.data
			}
		})
	},

	// 检查是否登录
	checkLogin({ commit }) {
		return api_passport.checkLogin().then(res => {
			if(res.data.code === 200) {
				commit('saveUser', res.data.data)
			} else {
				return res.data
			}
		})
	},

	// 获取文章列表
	getArticleList({ commit }) {
		let { pageSize, currentPage } = state.articleList;
		api_article.getArticle({
			pageSize: pageSize,
			pageNum: currentPage
		}).then(res => {
			if(res.data.code === 200) {
				let d = res.data.data;
				if(d && d.dataList) {
					commit('saveArticleList', {
						list: d.dataList,
						totalCount: d.pageInfo.totalCount
					})
				}
			}
		})
	},

	// 文章详情
	getArticleDetail({ commit }, data) {
		api_article.showArticle({
			id: data.id
		}).then(res => {
			if(res.data.code === 200) {
				commit('saveArticleDetail', res.data.data)
			}
		})
	},

	// 修改文章
	updateArticle({ commit }, data) {
		return api_article.updateArticle(data).then(res => {
			return res.data
		})
	},

	// 添加文章
	createArticle({ commit }, data) {
		return api_article.createArticle(data).then(res => {
			return res.data
		})
	},

	// 删除文章
	deleteArticle({ commit }, data) {
		return api_article.deleteArticle(data).then(res => {
			return res.data
		})
	}
}


const mutations = {
	saveUser(state, payload) {
		state.user = payload
	},

	saveArticleList(state, payload) {
		state.articleList = { ...state.articleList, ...payload }
	},

	saveArticleDetail(state, payload) {
		state.articleDetail = payload
	},
}

export default new Vuex.Store({
	// strict: true,
    state,
    getters,
    actions,
    mutations
})