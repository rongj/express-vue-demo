webpackJsonp([7],{EK0I:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("c/Bq"),o=a.n(l);for(var i in l)"default"!==i&&function(e){a.d(t,e,function(){return l[e]})}(i);var r=a("byjt");var n=function(e){a("Gxq9")},s=a("U5Ua")(o.a,r.a,!1,n,null,null);t.default=s.exports},Gxq9:function(e,t){},byjt:function(e,t,a){"use strict";var l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-panel"},[a("el-breadcrumb",{staticClass:"breadcrumb mb25",attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/category"}}},[e._v("分类管理")]),e._v(" "),a("el-breadcrumb-item",[e._v("所有类别")])],1),e._v(" "),a("div",{staticClass:"main-content"},[a("div",{staticClass:"table-bar mb10"},[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:e.handleAdd}},[e._v("添加类别")])],1),e._v(" "),a("el-table",{staticClass:"table-align-center",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"类别id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"类别名称"}}),e._v(" "),a("el-table-column",{attrs:{label:"类别图标","class-name":"item-icon"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.cover}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"describe",label:"类别描述"}}),e._v(" "),a("el-table-column",{attrs:{prop:"weight",label:"类别排序"}}),e._v(" "),a("el-table-column",{attrs:{prop:"is_active",label:"是否显示"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.is_active?"是":"否"))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"updated_at",label:"最后编辑时间"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:1===e.editType?"添加类别":"编辑类别",visible:e.showPlateDialog},on:{"update:visible":function(t){e.showPlateDialog=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"类别名称","label-width":"80px"}},[a("el-input",{attrs:{placeholder:"请输入类别名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类别图标","label-width":"80px"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/file/upload",name:"plate-cover","show-file-list":!1,"on-success":e.handleUploadSuccess,"before-upload":e.beforeUpload}},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.form.cover,expression:"form.cover"}],staticClass:"avatar",attrs:{src:e.form.cover}}),e._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:!e.form.cover,expression:"!form.cover"}],staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"类别描述","label-width":"80px"}},[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入类别描述"},model:{value:e.form.describe,callback:function(t){e.$set(e.form,"describe",t)},expression:"form.describe"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类别排序","label-width":"80px"}},[a("el-input",{attrs:{min:"0",max:"99",type:"number"},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否显示","label-width":"80px"}},[a("el-switch",{model:{value:e.form.is_active,callback:function(t){e.$set(e.form,"is_active",t)},expression:"form.is_active"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.showPlateDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleSavePlate}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};t.a=l},"c/Bq":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,o=a("9Qpi");(l=o)&&l.__esModule;t.default={data:function(){return{tableData:[],showPlateDialog:!1,editType:1,form:{name:"",cover:"",describe:"",weight:"",is_active:1}}},created:function(){},methods:{handleAdd:function(){this.showPlateDialog=!0,this.form={weight:0,is_active:1,cover:""},this.editType=1},handleEdit:function(e,t){this.showPlateDialog=!0,this.form=t,this.editType=2},handleDelete:function(e,t){this.$confirm("此操作将永久删除该类别及该类别下的所有子板块, 是否继续?","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){})},handleUploadSuccess:function(e,t){200===e.code&&(this.form.cover=e.data.url)},beforeUpload:function(e){},handleSavePlate:function(){}}}}});