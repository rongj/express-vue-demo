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
	}
}

export default passport;