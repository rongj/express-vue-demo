<template>
	<div class="main-content">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>文章</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="article-list mt20">
			<el-table
				:data="articleList"
				border
				style="width: 100%">
				<el-table-column
					prop="id"
					label="文章id">
				</el-table-column>
				<el-table-column
					prop="title"
					label="标题">
				</el-table-column>
<!-- 				<el-table-column
					prop="category"
					label="分类">
				</el-table-column>
				<el-table-column
					prop="tags"
					label="标签">
				</el-table-column> -->
				<el-table-column
					prop="user_id"
					label="作者">
				</el-table-column>
				<el-table-column
					prop="created_at"
					label="发布日期">
				</el-table-column>
				<el-table-column
					label="操作">
					<template slot-scope="scope">
						<el-button size="mini">编辑</el-button>
						<el-button size="mini" type="danger">删除</el-button>
					 </template>
				</el-table-column>
			</el-table>
			<el-pagination
				class="fr mt20"
				background
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="page"
				:page-sizes="[10, 15, 20, 50]"
				:page-size="pageSize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total">
			</el-pagination>
		</div>
	</div>
</template>
<script>
	import api from '../api/api'

	export default {
		data() {
			return {
				articleList: [],
				page: 1,
				pageSize: 10,
				total: 0,
			}
		},
		created() {
			this.getPosts()
		},

		methods: {
			// 获取所有版块
			getPosts() {
				api.getPostsList({
					page: this.page,
					pageSize: this.pageSize,
				}).then(res => {
					if(res.data.code === 200) {
						let d = res.data.data
						this.articleList = d.data
						this.total = d.total
					}
				}).catch(err => {
					console.error(err);
				})
			},

			handleSizeChange(val) {
				this.page = 1;
				this.pageSize = val;
				this.getPosts();
			},
			handleCurrentChange(val) {
				this.page = val;
				this.getPosts();
			}
		}
	}
</script>

<style lang="scss">
	.article-list {
	}
</style>