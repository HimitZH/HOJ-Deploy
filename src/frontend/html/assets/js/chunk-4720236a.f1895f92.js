(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4720236a"],{9157:function(t,a,e){"use strict";e("d98c")},c7d5:function(t,a,e){"use strict";e.r(a),e("c975"),e("a434");var i=e("7aa9"),l=e("3228"),n=e("9a36"),s={data:function(){return{tagOj:"ME",REMOTE_OJ:{},getTagListLoading:!1,tagList:[],addTagDialogVisible:!1,upsertTitle:"Add_Tag",upsertTagBtn:"To_Add",upsertTagLoading:!1,tag:{id:null,name:null,color:null,oj:"ME"}}},mounted:function(){this.REMOTE_OJ=Object.assign({},n.i),this.getProblemTagList()},methods:{getProblemTagList:function(){var t=this;this.getTagListLoading=!0,l.a.getProblemTagList(this.tagOj).then((function(a){t.tagList=a.data.data,t.getTagListLoading=!1}),(function(a){t.getTagListLoading=!1}))},deleteTag:function(t){var a=this;this.$confirm(this.$i18n.t("m.Delete_Tag_Tips"),"Tips",{type:"warning"}).then((function(){l.a.admin_deleteTag(t.id).then((function(e){i.a.success(a.$i18n.t("m.Delete_successfully")),a.tagList.splice(a.tagList.indexOf(t),1)})).catch((function(){}))}),(function(){}))},openTagDialog:function(t,a){"add"==t?(this.upsertTitle="Add_Tag",this.upsertTagBtn="To_Add",this.tag={id:null,name:null,color:null,oj:this.tagOj}):(this.upsertTitle="Update_Tag",this.upsertTagBtn="To_Update",this.tag=Object.assign({},a)),this.addTagDialogVisible=!0},upsertTag:function(){var t=this;this.tag.id?(this.upsertTagLoading=!0,l.a.admin_updateTag(this.tag).then((function(a){t.upsertTagLoading=!1,i.a.success(t.$i18n.t("m.Update_Successfully")),t.tagList.push(a.data.data),t.addTagDialogVisible=!1,t.getProblemTagList()}),(function(a){t.upsertTagLoading=!1}))):(this.upsertTagLoading=!0,l.a.admin_addTag(this.tag).then((function(a){t.upsertTagLoading=!1,i.a.success(t.$i18n.t("m.Add_Successfully")),t.tagList.push(a.data.data),t.addTagDialogVisible=!1}),(function(a){t.upsertTagLoading=!1})))}}};e("9157"),e=e("2877"),s=Object(e.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"panel-title home-title"},[t._v(t._s(t.$t("m.Admin_Tag")))]),e("div",{staticClass:"filter"},[e("span",[e("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(a){return t.openTagDialog("add",null)}}},[t._v(t._s(t.$t("m.Add_Tag"))+" ")])],1),e("span",[e("el-select",{staticStyle:{width:"150px"},attrs:{size:"small"},on:{change:t.getProblemTagList},model:{value:t.tagOj,callback:function(a){t.tagOj=a},expression:"tagOj"}},[e("el-option",{attrs:{label:t.$t("m.All_Problem"),value:"ALL"}}),e("el-option",{attrs:{label:t.$t("m.My_OJ"),value:"ME"}}),t._l(t.REMOTE_OJ,(function(t,a){return e("el-option",{key:a,attrs:{label:t.name,value:t.key}})}))],2)],1)])]),t._l(t.tagList,(function(a,i){return e("el-tag",{key:i,staticClass:"tag",attrs:{closable:"",color:a.color||"#409eff",effect:"dark","disable-transitions":!1},on:{close:function(e){return t.deleteTag(a)},click:function(e){return t.openTagDialog("update",a)}}},[t._v(" "+t._s(a.name)+" ")])})),e("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return t.openTagDialog("add",null)}}},[t._v("+ New Tag")])],2),e("el-dialog",{attrs:{title:t.$t("m."+t.upsertTitle),width:"350px",visible:t.addTagDialogVisible},on:{"update:visible":function(a){t.addTagDialogVisible=a},"close-on-click-modal":!1}},[e("el-form",[e("el-form-item",{attrs:{label:t.$t("m.Tag_Name"),required:""}},[e("el-input",{attrs:{size:"small"},model:{value:t.tag.name,callback:function(a){t.$set(t.tag,"name",a)},expression:"tag.name"}})],1),e("el-form-item",{attrs:{label:t.$t("m.Tag_Color"),required:""}},[e("el-color-picker",{model:{value:t.tag.color,callback:function(a){t.$set(t.tag,"color",a)},expression:"tag.color"}})],1),e("el-form-item",{attrs:{label:t.$t("m.Tag_Attribution"),required:""}},[e("el-select",{staticStyle:{width:"150px"},attrs:{size:"small"},model:{value:t.tag.oj,callback:function(a){t.$set(t.tag,"oj",a)},expression:"tag.oj"}},[e("el-option",{attrs:{label:t.$t("m.My_OJ"),value:"ME"}}),t._l(t.REMOTE_OJ,(function(t,a){return e("el-option",{key:a,attrs:{label:t.name,value:t.key}})}))],2)],1),e("el-form-item",{staticStyle:{"text-align":"center"}},[e("el-button",{attrs:{type:"primary",loading:t.upsertTagLoading},on:{click:t.upsertTag}},[t._v(t._s(t.$t("m."+t.upsertTagBtn))+" ")])],1)],1)],1)],1)}),[],!1,null,"59b08ec2",null);a.default=s.exports},d98c:function(t,a,e){}}]);