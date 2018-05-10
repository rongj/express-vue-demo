import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import api_article from '../api/article'

const state = {
	article: {
		list: [],
		currentPage: 1,
		pageSize: 10,
		totalCount: 0,
	}
}

const getters = {

}

const actions = {
	getArticleList({ commit }) {
		let { pageSize, currentPage } = state.article;
		api_article.getArticle({
			pageSize: pageSize,
			pageNum: currentPage
		}).then(res => {
			if(res.data.code === 200) {
				let d = res.data.data;
				if(d && d.dataList) {
					commit('saveArticle', {
						list: d.dataList,
						totalCount: d.totalPage * pageSize
					})
				}
			}
		})
	}
}

const mutations = {
	saveArticle(state, payload) {
		state.article = { ...state.article, ...payload }
	}
}

export default new Vuex.Store({
	// strict: true,
    state,
    getters,
    actions,
    mutations
})