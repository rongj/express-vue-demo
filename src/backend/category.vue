<template>
	<div class="main-panel">
		<el-breadcrumb separator="/" class="breadcrumb mb25">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/category' }">分类管理</el-breadcrumb-item>
			<el-breadcrumb-item>所有类别</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="main-content">
			<div class="table-bar mb10">
				<el-button size="mini" type="primary" icon="el-icon-circle-plus-outline" @click="handleAdd">添加类别</el-button>
			</div>
			<el-table :data="tableData" border style="width: 100%" class="table-align-center">
				<el-table-column prop="id" label="类别id"></el-table-column>
				<el-table-column prop="name" label="类别名称"></el-table-column>
				<el-table-column label="类别图标" class-name="item-icon">
					<template slot-scope="scope">
						<img :src="scope.row.cover">
					</template>
				</el-table-column>
				<el-table-column prop="describe" label="类别描述"></el-table-column>
				<el-table-column prop="weight" label="类别排序"></el-table-column>
				<el-table-column prop="is_active" label="是否显示">
					<template slot-scope="scope">{{scope.row.is_active ? '是' : '否'}}</template>
				</el-table-column>
				<el-table-column prop="updated_at" label="最后编辑时间"></el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<el-dialog :title="editType === 1 ? '添加类别' : '编辑类别'" :visible.sync="showPlateDialog">
			<el-form :model="form">
				<el-form-item label="类别名称" label-width="80px">
					<el-input v-model="form.name" placeholder="请输入类别名称"></el-input>
				</el-form-item>
				<el-form-item label="类别图标" label-width="80px">
					<el-upload class="avatar-uploader" 
						action="/api/file/upload"
						name="plate-cover"
						:show-file-list="false"
						:on-success="handleUploadSuccess"
						:before-upload="beforeUpload">
					  	<img v-show="form.cover" :src="form.cover" class="avatar">
						<i v-show="!form.cover" class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
				</el-form-item>
				<el-form-item label="类别描述" label-width="80px">
					<el-input v-model="form.describe" type="textarea" autosize placeholder="请输入类别描述"></el-input>
				</el-form-item>
				<el-form-item label="类别排序" label-width="80px">
					<el-input v-model="form.weight" min="0" max="99" type="number"></el-input>
				</el-form-item>
				<el-form-item label="是否显示" label-width="80px">
					<el-switch v-model="form.is_active"></el-switch>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="showPlateDialog=false">取 消</el-button>
				<el-button type="primary" @click="handleSavePlate">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
	import api from '../api/api'
	export default {
		data() {
			return {
				tableData: [],
				showPlateDialog : false,
				editType: 1,
				form: {
					name: '',
					cover: '',
					describe: '',
					weight: '',
					is_active: 1,
				},
			}
		},

		created(){
			this.getAllCategory();
		},

		methods: {
			// 获取所有类别
			getAllCategory() {
				api.getAllCategory().then(res => {
					if(res.data.code === 200) {
						this.tableData = res.data.data;
					}
				}).catch(err => {
					console.error(err);
				})
			},

			// 添加类别
			handleAdd() {
				this.showPlateDialog = true;
				this.form = {
					weight: 0,
					is_active: 1,
					cover: ''
				};
				this.editType = 1;
			},

			// 编辑类别
			handleEdit(index, row) {
				this.showPlateDialog = true;
				console.log(row);
				this.form = row;
				this.editType = 2;
			},

			// 删除类别
			handleDelete(index, row) {
				this.$confirm('此操作将永久删除该类别及该类别下的所有子板块, 是否继续?', '', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					api.deleteCategory({
						id: row.id
					}).then(res => {
						if(res.data.code === 200) {
							this.$message({
								type: 'success',
								message: '删除成功!'
							});
							this.getAllCategory();
						}
					}).catch(() => {});
				})
			},

			handleUploadSuccess(res, file) {
				if(res.code === 200) {
					this.form.cover = res.data.url;
				}
				// this.form.cover = URL.createObjectURL(file.raw);
			},
			beforeUpload(file) {},

	      	handleSavePlate() {
	      		if(this.editType === 2) {
					api.updateCategory(this.form).then(res => {
						if(res.data.code === 200) {
							this.showPlateDialog = false;
							this.$message({
								message: '修改成功',
								type: 'success'
							});
							this.getAllCategory();
						}
					}).catch(err => {
						console.error(err);
					})
	      		} else if (this.editType === 1) {
					api.addCategory(this.form).then(res => {
						if(res.data.code === 200) {
							this.showPlateDialog = false;
							this.$message({
								message: '添加成功',
								type: 'success'
							});
							this.getAllCategory();
						}
					}).catch(err => {
						console.error(err);
					})
	      		}
	      	}
		}
	}
</script>
<style lang="scss">
	.table-align-center {
		td, th{
			text-align: center;
		}
		th {
			white-space: nowrap;
		}
	}
	.item-icon {
		img {
			width: 40px;
		}
	}
	.avatar-uploader {
		font-size: 0;
		color: #8c939d;
		width: 78px;
		height: 78px;
		line-height: 76px;
		text-align: center;
		border: 1px solid #ebebeb;
		border-radius: 3px;
		transition: .2s;
		img {
			width: 100%;
			height: 100%;
		}
		&:hover {
			border-color: #409eff;
		}
		i {
			font-size: 28px;
			line-height: 76px;
		}
	}
</style>