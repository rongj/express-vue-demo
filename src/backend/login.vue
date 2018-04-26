<template>
	<div class="login-panel">
		<el-form label-width="100px" class="login-form">
			<el-form-item label="用户名">
				<el-input type="username" v-model="username"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input type="password" v-model="password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-checkbox-group v-model="remember">
					<el-checkbox label="记住密码" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="handleLogin">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import api from '../api/api'

	export default {
		data() {
			return {
				username: '',
				password: '',
				remember: true
			}
		},

		created() {
			console.log(this.$route);
		},

		methods: {
			handleLogin() {
				api.login({
					email: this.username,
					password: this.password,
					remember: this.remember
				}).then(res => {
					if(res.data.code === 200) {
						let url = this.$route.query.redictUrl;
						url ? location.replace(url) : this.$router.replace('/')
					} else {
						this.$message.error(res.data.msg)
					}
				}).catch(e => {})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.login-form {
		width: 400px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -200px;
		margin-top: -100px;
	}
</style>