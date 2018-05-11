"use strict";

import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3080/'

const passport = {
	// 登录
	login: data => {
		return axios({
			url: '/api/passport/login',
			method: 'post',
			params: data
		})
	},

	// 登出
	logout: () => {
		return axios({
			url: '/api/passport/logout',
			method: 'get',
		})
	},

	// 检查是否登录
	checkLogin: () => {
		return axios({
			url: '/api/passport/checkLogin',
			withCredentials: true,
			method: 'get'
		})
	}
}

export default passport;