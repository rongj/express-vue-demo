<template>
	<div class="main-wrap">
		<div class="header-wrap">
			<div class="main-header clearfix">
				<div class="header-logo fl">
					<h2>我的个人网站</h2>
				</div>
				<div class="header-nav fl">
					<a href="">文章</a>
					<a href="">归档</a>
					<a href="">demo</a>
				</div>
				<div class="header-search fr">
					<form class="search-form">
						<input type="search" placeholder="输入关键字搜索">
					</form>
				</div>
			</div>
		</div>	
		<div class="main-content">
			<div class="panel-list clearfix">
				<div class="panel-item" v-for="(item, i) in itemlist" :key="i">
					<a :href="`category/${item.id}`">
						<div class="panel-icon">
							<img :src="item.img" alt="">
						</div>
						<div class="panel-title">
							<span>1</span>
							<h3>{{item.name}}</h3>
						</div>
						<p>{{item.descript}}</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				itemlist: [
					{
						id: 1,
						name: 'HTML5',
						img: '/images/html5.jpg',
						descript: '下一代的HTML'
					},
					{
						id: 2,
						name: 'CSS3',
						img: '/images/css3.jpg',
						descript: 'CSS技术的升级版本'
					},
					{
						id: 3,
						name: 'JavaScript',
						img: '/images/js.jpg',
						descript: '互联网最流行的脚本语言'
					},
					{
						id: 4,
						name: 'Nodejs',
						img: '/images/nodejs.jpg',
						descript: '事件驱动、非阻塞式 I/O'
					},
					{
						id: 5,
						name: 'Typescript',
						img: '/images/ts.jpg',
						descript: 'JavaScript的超集'
					},
					{
						id: 6,
						name: 'Python',
						img: '/images/python.jpg',
						descript: '人生苦短，我学Python'
					},
					{
						id: 7,
						name: 'PHP',
						img: '/images/php.jpg',
						descript: '世界上最好的编程语言'
					},
					{
						id: 8,
						name: 'Linux',
						img: '/images/linux.jpg',
						descript: '性能稳定的多用户网络操作系统'
					},
					// {
					// 	id: 1,
					// 	name: 'Go',
					// 	img: '/images/go.jpg',
					// 	descript: '下一代的 HTML'
					// },
					// {
					// 	id: 1,
					// 	name: 'Java',
					// 	img: '/images/java.jpg',
					// 	descript: '下一代的 HTML'
					// },
					// {
					// 	id: 1,
					// 	name: 'Ruby',
					// 	img: '/images/ruby.jpg',
					// 	descript: '下一代的 HTML'
					// },
					// {
					// 	id: 1,
					// 	name: '大数据',
					// 	img: '/images/bigdata.jpg',
					// 	descript: '下一代的 HTML'
					// },
					{
						id: 9,
						name: 'Tools',
						img: '/images/tools.jpg',
						descript: '工欲善其事，必先利其器'
					},
					{
						id: 10,
						name: 'UI',
						img: '/images/photoshop.jpg',
						descript: '大道至简'
					},
					{
						id: 11,
						name: 'Jobs',
						img: '/images/webapp.jpg',
						descript: '程序员招聘指南'
					},
				]
			}
		}
	}
</script>

<style lang="scss">
body {
	background: #f5f5f5;
}

.main-header, .main-content, .page-header {
	max-width: 1400px;
	min-width: 320px;
	width: 100%;
	margin: 0 auto;
}

.header-wrap{
	background: #ffffff;
    box-shadow: 0 0 43px #ddd;
	height: 70px;
	margin-bottom: 30px;
}
.main-header {
	
}
.header-logo {
	line-height: 70px;
	font-size: 0;
	img {
		height: 50px;
	}
	h2 {
		font-size: 24px;
		display: inline-block;
		vertical-align: middle;
		font-weight: 600;
		font-family: '微軟正黑體';
	}
}

.header-nav {
	margin-top: 15px;
	margin-left: 50px;
	a {
		display: block;
		float: left;
		line-height: 40px;
		margin-right: 30px;
		font-size: 16px;
	}
}

.search-form {
	display: block;
	width: 200px;
	position: relative;
	height: 50px;
	line-height: 50px;
	margin-top: 10px;
	input {
		display: block;
		width: 100%;
		line-height: 50px;
		background: none;
		border: none;
		outline: none;
		font-size: 14px;
		text-align: center;
	}
	&.active {
		border-bottom: 1px solid #4787fb;
		input {
			text-align: left;
		}
	}
}

.panel-item {
	width: 25%;
	float: left;
	padding: 0 15px;
	margin: 30px 0;
	a {
		display: block;
		background: #fff;
		box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
		border-radius: 4px;
		transition: all 0.3s;
		&:hover {
			box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
			transform: translate3d(0, -5px, 0);
		}
	}
	p {
		clear: both;
		padding: 10px;
		margin: 0 20px;
		font-size: 14px;
		color: #bdbdbd;
		text-align: center;
		border-top: 1px solid #eee;
	}
}
.panel-icon {
	float: left;
	width: 86px;
	height: 86px;
	margin: -20px 20px 20px;
	box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.1), 0 4px 25px 0px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.1);
	img {
		width: 100%;
		height: 100%;
		// display: none;
	}
}
.panel-title {
	text-align: right;
	padding: 15px 20px;
	span {
		display: block;
		height: 20px;
		color: #999;
		font-size: 12px;
		font-family: Raleway;
		font-size: 14px;
		em {
			margin-right: 2px;
			font-size: 12px;
			vertical-align: -2px;
		}
	}
	h3 {
		font-size: 24px;
		font-weight: 300;
		font-family: Raleway;
	}
}
@media screen and (max-width: 1200px) {
	.panel-item {
		width: 33.33%;
	}
}
@media screen and (max-width: 900px) {
	.panel-item {
		width: 50%;
	}
}
@media screen and (max-width: 768px) {
	.main-header {
		background: #fff;
		margin-bottom: 0;
	}
	.panel-item {
		width: 100%;
		padding: 0;
		margin: 0;
		border-top: 1px solid #e8e8e8;
		background: #fff;
		position: relative;
		&:last-child {
			border-bottom: 1px solid #e8e8e8;
			overflow: hidden;
		}
		a {
			box-shadow: none;
			border-radius: 0;
			display: block;
			&:hover {
				box-shadow: none;
				transform: none;
			}
		}
		p {
			float: left;
			clear: inherit;
			border: none;
			text-align: left;
			width: calc(100% - 74px);
			margin: 5px 0 0;
			padding: 0;
		}
	}
	.panel-icon {
		margin: 15px;
		width: 44px;
		height: 44px;
		box-shadow: none;
	}
	.panel-title {
		text-align: left;
		float: left;
		padding: 0;
		h3 {
			font-size: 18px;
			margin-top: 15px;
		}
		span {
			position: absolute;
			right: 15px;
			top: 15px;

		}
	}
}
.page-header-wrap {
	height: 60px;
	background: #37b5ff;
	color: #fff;
}

.post-list {
	.post-item {
		box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
		margin: 30px 15px;
		padding: 15px;
		background: #fff;
		transition: all 0.3s;
		&:hover {
			box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
			transform: translate3d(0, -5px, 0);
		}
		a {
			display: block;
		}
	}
	.post-img {
		
	}
	.post-txt {
		h2 {
			font-size: 24px;
			margin-bottom: 10px;
		}
		p {
			word-break: break-all;
			font-size: 16px;
			color: #666;
			line-height: 24px;
		}
	}
	.post-info {
		margin-bottom: 10px;
	}
	.post-date {
		color: #999;
		font-size: 14px;
	}
	.post-tags {
		margin-left: 20px;
		em {
			font-style: normal;
		}
	}
}
.el-tag.el-tag--info {
	background-color: hsla(220,8%,56%,.1);
	border-color: hsla(220,8%,56%,.2);
	color: #878d99;
}

.el-tag.el-tag--default {
	background-color: rgba(64,158,255,.1);
	color: #409eff;
	border: 1px solid rgba(64,158,255,.2);
}

@media screen and (max-width: 768px) {
	.post-list {
		.post-item {
			box-shadow: none;
			margin: 0;
			border-top: 1px solid #e8e8e8;
			&:last-child {
				border-bottom: 1px solid #e8e8e8;
			}
			&:hover {
				box-shadow: none;
				transform: none;
			}
		}
		.post-txt {
			h2 {
				font-size: 16px;
				margin-bottom: 5px;
				font-weight: 600;
			}
			p {
				display: -webkit-box;
				-webkit-box-orient: vertical;
				overflow : hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				font-size: 14px;
			}
		}
		.post-info {
			margin-bottom: 5px;
		}
		.post-date {
			font-size: 12px;
		}
	}
}
</style>