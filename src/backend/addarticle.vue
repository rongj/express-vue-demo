<template>
    <div class="pit-post-form">
        <el-form ref="myForm" :model="article" label-width="80px"
                 class="pit-common">
            <el-form-item label="标题" prop="title">
                <el-input v-model="article.title"></el-input>
            </el-form-item>
            <el-form-item label="分类" prop="category_id">
                <el-select v-model="article.category_id" placeholder="请选择分类">
                    <el-option>HTML5</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="板块" prop="plate_id">
                <el-select v-model="article.category_id" placeholder="请选择板块">
                    <el-option>HTML5</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="封面图">
                <el-upload class="avatar-uploader">
                    <!-- <img v-if="imageUrl" :src="imageUrl" class="post-cover">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
                </el-upload>
            </el-form-item>
            <el-form-item label="内容" prop="markdown">
                 <mavon-editor v-model="content"/>
            </el-form-item>
            <el-form-item>
                <el-button>取 消</el-button>
                <el-button type="primary">确 定</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        components: {
            mavonEditor
        },
        data() {
            return {
                article: {
                    category_id: ''
                },
                content: ''
            }
        }
    }
</script>

<style lang="scss">
    .pit-common {
        margin: 20px;
        min-width: 800px;
    }

</style>