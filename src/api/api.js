"use strict";

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8088/api/'

const api = {
	// 登录
	login: data => {
		return axios({
		    url: 'login',
		    method: 'post',
            params: data
		})
	},

    // 登出
    logout: () => {
        return axios({
            url: 'logout',
            method: 'get'
        })
    },

    // 注册
    register: data => {
        return axios({
            url: 'register',
            method: 'post',
            params: data
        })
    },

    // 检查用户是否登录
    checkLogined: () => {
        return axios({
            url: 'checkLogined',
            method: 'get',
            withCredentials: true
        })
    },

    // 获取所有类别
    getAllCategory: () => {
        return axios({
            url: 'category/all',
            method: 'get',
        })
    },

	// 添加类别
    addCategory: data => {
        return axios({
            url: 'category/add',
            method: 'post',
            params: data
        })
    },

    // 修改类别
    updateCategory: data => {
        return axios({
            url: 'category/update',
            method: 'post',
            params: data
        })
    },

    // 删除类别
    deleteCategory: data => {
        return axios({
            url: `category/delete/${data.id}`,
            method: 'post',
        })
    },

    // 获取所有板块
    getAllPlate: () => {
        return axios({
            url: 'plate/all',
            method: 'get',
        })
    },

    // 添加板块
    addPlate: data => {
        return axios({
            url: 'plate/add',
            method: 'post',
            params: data
        })
    },

    // 修改板块
    updatePlate: data => {
        return axios({
            url: 'plate/update',
            method: 'post',
            params: data
        })
    },

    // 删除板块
    deletePlate: data => {
        return axios({
            url: `plate/delete/${data.id}`,
            method: 'post',
        })
    },

    // 获取所有标签
    getAllTag: () => {
        return axios({
            url: 'tag/all',
            method: 'get',
        })
    },

    // 添加标签
    createTag: data => {
        return axios({
            url: 'tag/create',
            method: 'post',
            params: data
        })
    },

    // 修改标签
    updateTag: data => {
        return axios({
            url: `tag/update/${data.id}`,
            method: 'post',
            params: data
        })
    },

    // 删除标签
    destroyTag: data => {
        return axios({
            url: `tag/destroy/${data.id}`,
            method: 'post',
        })
    },

    // 获取文章列表
    getPostsList: data => {
        return axios({
            url: 'post/list',
            method: 'get',
            params: data
        })
    },

}

export default api;