webpackJsonp([4],{"8t0b":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,l=a("P9l9");(r=l)&&r.__esModule;t.default={data:function(){return{username:"",email:"",password:"",passowrd2:"",role:"2"}},methods:{handleAdduser:function(){}}}},EiVp:function(e,t){},K8nA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("8t0b"),l=a.n(r);for(var s in r)"default"!==s&&function(e){a.d(t,e,function(){return r[e]})}(s);var n=a("TiPD");var o=function(e){a("EiVp")},i=a("U5Ua")(l.a,n.a,!1,o,null,null);t.default=i.exports},TiPD:function(e,t,a){"use strict";var r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{staticClass:"login-form",attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{type:"username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱"}},[a("el-input",{attrs:{type:"username"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"确认密码"}},[a("el-input",{attrs:{type:"password"},model:{value:e.passowrd2,callback:function(t){e.passowrd2=t},expression:"passowrd2"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户权限"}},[a("el-radio-group",{model:{value:e.role,callback:function(t){e.role=t},expression:"role"}},[a("el-radio",{attrs:{label:"2"}},[e._v("普通用户")]),e._v(" "),a("el-radio",{attrs:{label:"1"}},[e._v("管理员")])],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleAdduser}},[e._v("确认添加")])],1)],1)},staticRenderFns:[]};t.a=r}});