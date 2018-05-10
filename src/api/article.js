"use strict";

import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3080/'

const article = {
	// 增
	createArticle: data => {
		return axios({
			url: '/api/article/create',
			method: 'post',
			params: data
		})
	},

	// 删
	deleteArticle: data => {
		return axios({
			url: `/api/article/delete/${data.id}`,
			method: 'post',
			params: data
		})
	},

	// 改
	updateArticle: data => {
		return axios({
			url: `/api/article/update/${data.id}`,
			method: 'post',
			params: data
		})
	},

	// 查
	showArticle: data => {
		return axios({
			url: `/api/article/${data.id}`,
			method: 'get',
			params: data
		})
	},

	// 列表
	getArticle: data => {
		return axios({
			url: `/api/article/get`,
			method: 'get',
			params: data
		})
	},
}

export default article;