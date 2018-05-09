<template>
	<div class="list">
		<div class="login-panel">
			账号：<input type="text">
			密码：<input type="password">
			<button class="login" @click="login">登录</button>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery'
	export default {
		created() {
			this.check()
		},
		methods: {
			check: function() {
				$.ajax({
					url: '/api/passport/checkLogin',
					// type: 'post',
					crossDomain: true,
					xhrFields: { withCredentials: true },
					// dataType: 'jsonp',
					success: function(data) {
						console.log(data);
						// alert(JSON.stringify(data));
					}
				})
			},

			login: function () {
				$.ajax({
					url: '/api/passport/login',
					type: 'post',
					data: {
						username: 'demo8',
						password: '123456'
					},
					success: function(data) {
						console.log(data);
						// alert(JSON.stringify(data));
					}
				})
			}
		}
	}
</script>