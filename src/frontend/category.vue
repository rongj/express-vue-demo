<template>
	<div class="main-wrap">
		<div class="page-header-wrap">
			<div class="page-header">
				<h2>JavaScript</h2>
				<p>互联网最流行的脚本语言</p>
				<a class="el-icon-close" href="/"></a>
				<a class="header-back" href="/"><i class="el-icon-arrow-left"></i>返回</a>
			</div>
		</div>
		<div class="main-content">
			<div class="nav-list">
				<span class="nav-item" :class="{'active': activeIndex === 0}" @click="onHandleTab(0)">相关框架/库</span>
				<span class="nav-item" :class="{'active': activeIndex === 1}" @click="onHandleTab(1)">我的学习笔记</span>
				<!-- <span class="nav-item" :class="{'active': activeIndex === 2}" @click="onHandleTab(2)">论坛社区</span> -->
			</div>
			<div class="tab-content">
				<div class="tab-panel tab-frame" v-show="activeIndex === 0">
					<div class="frame-list">
						<div class="panel-item" v-for="(item, i) in itemlist" :key="i">
							<a href="javascript:;" @click="toggleLinks(i)">
								<div class="panel-icon">
									<img :src="item.img" alt="">
								</div>
								<div class="panel-title">
									<span class=""><em class="el-icon-document"></em>5</span>
									<h3>{{item.name}}</h3>
								</div>
								<p>{{item.descript}}</p>
								<i :class="openList.indexOf(i) > -1 ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
							</a>
							<div class="frame-links clearfix" v-show="openList.indexOf(i) > -1"></div>

						</div>
					</div>
				</div>
				<div class="tab-panel tab-posts" v-show="activeIndex === 1">
					<ul class="post-list">
						<li class="post-item" v-for="(item, i) in itemlist" :key="i">
							<a href="">
								<div class="post-txt">
									<h2>如何实现一个python的web后端框架</h2>
									<div class="post-info">
										<span class="post-date">2017-11-11 11:11</span>
										<span class="post-tags">
											<em class="el-tag el-tag--default">django</em>
											<em class="el-tag el-tag--success">python</em>
										</span>
									</div>
									<p>可以看到非常多，这里说明一下wsgi.input 就是我们的表单传值可以看到我们做web通常需要的PATH_INFO，HTTP_USER_AGENT,QUERY_STRING,REQUEST_METHOD,SERVER_PROTOCAOL都在里面了即是说，这个environ参数给我提供了我们要的网络的所有环境参数而对于start_response这个参数，官方的说明是：</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
				<!-- <div class="tab-panel tab-forum" v-show="activeIndex === 2"></div> -->
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
						name: 'React.js',
						img: '/images/react.jpg',
						descript: '声明式的，高效的，灵活的Js库'
					},
					{
						id: 2,
						name: 'Vue',
						img: '/images/vue.jpg',
						descript: '直观、快速、简洁的 MVVM 框架'
					},
					{
						id: 3,
						name: 'Angular',
						img: '/images/angular.jpg',
						descript: 'Google推出的MVVM框架'
					},
					{
						id: 4,
						name: 'Es6',
						img: '/images/es.jpg',
						descript: 'JavaScript语言的下一个版本'
					},
				],
				activeIndex: 0,
				openList: []
			}
		},
		methods: {
			onHandleTab(i) {
				this.activeIndex = i;
			},

			toggleLinks(i) {
				console.log(i);
				if(this.openList.indexOf(i) > -1) {
					this.openList = this.openList.filter(l => l != i)
				} else {
					this.openList.push(i)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-header {
		position: relative;
		padding: 0 10px;
		h2 {
			font-size: 28px;
			font-weight: 400;
			font-family: Raleway;
			padding-top: 4px;
		}
		p {
			font-size: 12px;
		}
		a {
			color: #fff;
		}
		.el-icon-close {
			position: absolute;
			right: 10px;
			top: 25px;
			font-size: 16px;
			cursor: pointer;
		}
		.header-back {
			display: none;
		}
	}

	.frame-links {
		// display: none;
	}

	.nav-list {
		text-align: center;
		margin: 20px auto;
		border-bottom: 1px solid #dfe4ed;
		.nav-item {
			margin: 0 20px;
			height: 40px;
			line-height: 40px;
			display: inline-block;
			font-size: 14px;
			font-weight: 500;
			color: #2d2f33;
			position: relative;
			cursor: pointer;
			&.active {
				color: #37b5ff;
				border-bottom: 2px solid #37b5ff;
				font-weight: bold;
			}
		}
	}

	.frame-list .panel-item i {
		display: none;
	}

	@media screen and (max-width: 768px) {
		body {
			background: #fff;
		}
		.page-header-wrap {
			height: 44px;
		}
		.page-header {
			height: 44px;
			line-height: 44px;
			h2 {
				text-align: center;
				padding-top: 0;
				font-size: 20px;
				font-weight: 600;
			}
			.el-icon-close, p {
				display: none;
			}
			.header-back {
				display: block;
				position: absolute;
				left: 10px;
				top: 0;
				font-size: 16px;
				i {
					vertical-align: -1px;
					margin-right: 3px;
				}
			}
		}
		.nav-list {
			margin: 0 auto;
		}
		.main-content {
			background: #f8f8f8;
		}
		.tab-content {
			margin-top: -1px;
		}
		.frame-list .panel-item i {
			display: block;
			position: absolute;
			right: 15px;
			top: 42px;
			color: #ddd;
		}
		.frame-links {
			clear: both;
			margin: 0 15px;
			border-top: 1px solid #f5f5f5;
			background: #fff;
			margin-bottom: -1px;
			a {
				display: block;
				width: 50%;
				float: left;
				line-height: 40px;
				text-align: center;
				font-size: 14px;
				color: #666;
				border-bottom: 1px solid #f5f5f5;
				border-right: 1px solid #f5f5f5;
				background: #fff;
				&:nth-child(2n) {
					border-right: none;
				}
			}
		}
	}
</style>