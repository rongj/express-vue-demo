<template>
	<el-form label-width="100px" class="login-form">
		<el-form-item label="用户名">
			<el-input type="username" v-model="username"></el-input>
		</el-form-item>
		<el-form-item label="邮箱">
			<el-input type="username" v-model="email"></el-input>
		</el-form-item>
		<el-form-item label="密码">
			<el-input type="password" v-model="password"></el-input>
		</el-form-item>
		<el-form-item label="确认密码">
			<el-input type="password" v-model="passowrd2"></el-input>
		</el-form-item>
		<el-form-item label="用户权限">
			<el-radio-group v-model="role">
				<el-radio label="2">普通用户</el-radio>
				<el-radio label="1">管理员</el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="handleAdduser">确认添加</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import api from '../api/api'

	export default {
		data() {
			return {
				username: '',
				email: '',
				password: '',
				passowrd2: '',
				role: '2'
			}
		},

		methods: {
			handleAdduser() {
				api.register({
					name: this.username,
					password: this.password,
					password_confirmation: this.passowrd2,
					email: this.email,
					role: this.role,
				}).then(res => {
					console.log(res)
					if(res.data.code === 200) {
						this.$message.success('添加用户成功')
					} else {
						this.$message.error(res.data.msg)
					}
				}).catch(e => {})
			}
		}
	}
</script>
<style lang="scss">
	.login-form {
		width: 500px;
	}
</style>