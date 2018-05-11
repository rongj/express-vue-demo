<template>
    <div class="pit-post-form">
        <el-breadcrumb separator="/" class="breadcrumb mb25">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/article' }">文章管理</el-breadcrumb-item>
            <el-breadcrumb-item>{{type==='update' ? '文章编辑' : '新增文章'}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form ref="myForm" :model="articleDetail" label-width="80px"
                 class="pit-common">
            <el-form-item label="标题" prop="title">
                <el-input v-model="articleDetail.title"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop="markdown">
                 <mavon-editor v-model="articleDetail.content"/>
            </el-form-item>
            <el-form-item>
                <el-button>取 消</el-button>
                <el-button type="primary" v-if="type==='update'" @click="handleUpdate">修 改</el-button>
                <el-button type="primary" v-if="type==='create'" @click="handleCreate">发 布</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import { mapState } from 'vuex'

    export default {
        components: {
            mavonEditor
        },
        data() {
            return {
                type: 'create',
                href: location.href,
                id: null
            }
        },
        computed: {
            ...mapState(['articleDetail'])
        },
        created(){
            this.type = this.$route.params.type
            if(this.type === 'update') {
                this.id = this.$route.params.id
                this.$store.dispatch('getArticleDetail', { id: this.id })
            } else {
                this.$store.commit('saveArticleDetail', {})
            }
        },
        watch: {
            '$route': function(to, from) {
                if(to.name !== 'articleEdit') return
                 if(to.params.type === 'update') {
                    this.$store.dispatch('getArticleDetail', { id: this.$route.params.id })
                } else if (to.params.type === 'create') {
                    this.type = this.$route.params.type
                    this.$store.commit('saveArticleDetail', {})
                }
            }
        },
        methods: {
            handleUpdate: function () {
                this.$store.dispatch('updateArticle', this.articleDetail).then(res => {
                    if(res.code === 200) {
                        this.$message.success(res.msg)
                        this.$router.push('/articleDetail/'+this.id)                        
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            },

            handleCreate: function () {
                this.$store.dispatch('createArticle', this.articleDetail).then(res => {
                    if(res.code === 200) {
                        this.$message.success(res.msg)
                        this.$router.push('/articleDetail/'+res.data.id)                        
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            }
        },
    }
</script>

<style lang="scss">
    .pit-common {
        margin: 20px;
        min-width: 800px;
    }

</style>