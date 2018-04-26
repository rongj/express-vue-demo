<template>
	<div class="layout">
		<div class="layout-header">
			<div class="header-logo fl">
			<router-link to="/" tag="h2">后台管理系统</router-link>
			</div>
			<div class="header-menu fr">
				<el-menu background-color="#324157" text-color="#fff" active-text-color="#fff" class="el-menu-demo" mode="horizontal">
					<el-submenu index="1">
						<template slot="title">管理员</template>
						<el-menu-item index="1-1">修改密码</el-menu-item>
						<el-menu-item index="1-2">个人信息</el-menu-item>
						<el-menu-item index="logout" @click="logout">退出</el-menu-item>
					</el-submenu>
					<el-menu-item index="2"><a href="/">网站前台</a></el-menu-item>
				</el-menu>
			</div>
		</div>
		<el-row class="layout-main">
			<el-col :xs="6" :sm="4" class="layout-left">
				<el-menu :default-active="defaultActive" class="el-menu-vertical-demo" router>
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-menu"></i>用户管理</template>
						<el-menu-item index="users">所有用户</el-menu-item>
						<el-menu-item index="adduser">添加用户</el-menu-item>
						<el-menu-item index="userinfo">个人信息</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>分类管理</template>
						<el-menu-item index="category">所有分类</el-menu-item>
						<el-menu-item index="subplate">所有板块</el-menu-item>
						 <el-menu-item index="tag">所有标签</el-menu-item> 
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-menu"></i>文章管理</template>
						<el-menu-item index="article">文章列表</el-menu-item>
						<el-menu-item index="addarticle">添加文章</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-menu"></i>日志管理</template>
						<el-menu-item index="log">所有日志</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :xs="18" :sm="20" class="layout-right">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import api from '../api/api'

	export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},

		created(){
			api.checkLogined().then(res => {
				if(res.data.code !== 200) {
					this.$router.push('login')
				}
			})
		},

		methods: {	
			logout() {
				api.logout().then(res => {
					if(res.data.code === 200) {
						this.$router.push('login')
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../scss/mixin';
	.layout {
		position: relative;
		width: 100%;
		height: 100%;
		.layout-header {
			position: fixed;
			width: 100%;
			height: 60px;
			z-index: 9;
			top: 0;
			background: $tc;
			color: $otc;
		}
		.layout-main {
			position: absolute;
			width: 100%;
			min-width: 768px;
			top: 60px;
			bottom: 0;
			overflow: auto;
		}
		.layout-left {
			height: 100%;
			overflow-x: hidden;
			overflow-y: auto;
			background: $bgc;
		}

		.layout-right {
			height: 100%;
			overflow-x: hidden;
			overflow-y: auto;
			padding: 20px;
		}
	}

	.layout-header {
		h2 {
			line-height: 60px;
			font-size: 20px;
			text-indent: 20px;
		}
	}
</style>