(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3f05cad6"],{5465:function(e,t,l){"use strict";l("f253")},a15b:function(e,t,l){"use strict";var i=l("23e7"),o=l("44ad"),a=l("fc6a"),s=(l=l("a640"),[].join);o=o!=Object,l=l("join",",");i({target:"Array",proto:!0,forced:o||!l},{join:function(e){return s.call(a(this),void 0===e?",":e)}})},b156:function(e,t,l){"use strict";l.r(t),l("a15b"),l("fb6a");var i=l("b85c"),o=l("3228"),a=l("90b9"),s=l("7aa9"),r={name:"import_and_export",data:function(){return{fileList1:[],fileList2:[],fileList3:[],page:1,limit:10,total:0,loadingProblems:!1,loadingImporting:!1,keyword:"",problems:[],selected_problems:[]}},mounted:function(){this.getProblems()},methods:{handleSelectionChange:function(e){e=e.records,this.selected_problems=e},handlechangeAll:function(){this.selected_problems=this.$refs.xTable.getCheckboxRecords()},getProblems:function(){var e=this,t={keyword:this.keyword,currentPage:0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,limit:this.limit,oj:"Mine"};this.loadingProblems=!0,o.a.admin_getProblemList(t).then((function(t){e.problems=t.data.data.records,e.total=t.data.data.total,e.loadingProblems=!1}))},exportProblems:function(){var e=[];if(this.selected_problems.length<=0)s.a.error(this.$i18n.t("m.Export_Problem_NULL_Tips"));else{var t,l=Object(i.a)(this.selected_problems);try{for(l.s();!(t=l.n()).done;){var o=t.value;e.push("pid="+o.id)}}catch(e){l.e(e)}finally{l.f()}var r="/api/file/export-problem?"+e.join("&");a.a.downloadFile(r)}},submitUpload:function(e){this.$refs[e].submit()},onFile1Change:function(e,t){this.fileList1=t.slice(-1)},onFile2Change:function(e,t){this.fileList2=t.slice(-1)},onFile3Change:function(e,t){this.fileList3=t.slice(-1)},uploadSucceeded:function(e){200!=e.status?s.a.error(e.msg):(s.a.success(e.msg),this.getProblems())},uploadFailed:function(){s.a.error("Upload failed")},filterByKeyword:function(){this.getProblems()}}};l("5465"),l=l("2877"),r=Object(l.a)(r,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",[t("el-card",[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",{staticClass:"panel-title home-title"},[e._v(e._s(e.$t("m.Export_Problem")))]),t("div",{staticClass:"filter-row"},[t("span",[t("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-arrow-down"},on:{click:e.exportProblems}},[e._v(e._s(e.$t("m.Export"))+" ")])],1),t("span",[t("vxe-input",{attrs:{placeholder:e.$t("m.Enter_keyword"),type:"search",size:"medium"},on:{"search-click":e.filterByKeyword},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.filterByKeyword(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)])]),t("vxe-table",{ref:"xTable",attrs:{data:e.problems,stripe:"","auto-resize":"",loading:e.loadingProblems,"checkbox-config":{labelField:"",highlight:!0,range:!0}},on:{"checkbox-change":e.handleSelectionChange,"checkbox-all":e.handlechangeAll}},[t("vxe-table-column",{attrs:{type:"checkbox",width:"60"}}),t("vxe-table-column",{attrs:{title:"ID","min-width":"100",field:"id"}}),t("vxe-table-column",{attrs:{"min-width":"150",title:e.$t("m.Title"),field:"title"}}),t("vxe-table-column",{attrs:{"min-width":"150",field:"author",title:e.$t("m.Author")}}),t("vxe-table-column",{attrs:{field:"gmtCreate",title:e.$t("m.Created_Time")},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[e._v(" "+e._s(e._f("localtime")(t.create_time))+" ")]}}])})],1),t("div",{staticClass:"panel-options"},[t("el-pagination",{staticClass:"page",attrs:{layout:"prev, pager, next","page-size":e.limit,total:e.total},on:{"current-change":e.getProblems}})],1)],1),t("el-card",{staticStyle:{"margin-top":"15px"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",{staticClass:"panel-title home-title"},[e._v(e._s(e.$t("m.Import_Problem")))])]),t("el-upload",{ref:"HOJ",attrs:{action:"/api/file/import-problem",name:"file","file-list":e.fileList1,"show-file-list":!0,"with-credentials":!0,limit:3,"on-change":e.onFile1Change,"auto-upload":!1,"on-success":e.uploadSucceeded,"on-error":e.uploadFailed}},[t("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",icon:"el-icon-folder-opened"},slot:"trigger"},[e._v(e._s(e.$t("m.Choose_File")))]),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success",icon:"el-icon-upload"},on:{click:function(t){return e.submitUpload("HOJ")}}},[e._v(e._s(e.$t("m.Upload")))])],1)],1),t("el-card",{staticStyle:{"margin-top":"15px"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",{staticClass:"panel-title home-title"},[e._v(e._s(e.$t("m.Import_QDOJ_Problem")))])]),t("el-upload",{ref:"QDOJ",attrs:{action:"/api/file/import-qdoj-problem",name:"file","file-list":e.fileList2,"show-file-list":!0,"with-credentials":!0,limit:3,"on-change":e.onFile2Change,"auto-upload":!1,"on-success":e.uploadSucceeded,"on-error":e.uploadFailed}},[t("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",icon:"el-icon-folder-opened"},slot:"trigger"},[e._v(e._s(e.$t("m.Choose_File")))]),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success",icon:"el-icon-upload"},on:{click:function(t){return e.submitUpload("QDOJ")}}},[e._v(e._s(e.$t("m.Upload")))])],1)],1),t("el-card",{staticStyle:{"margin-top":"15px"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",{staticClass:"panel-title home-title"},[e._v(e._s(e.$t("m.Import_FPS_Problem")))])]),t("el-upload",{ref:"FPS",attrs:{action:"/api/file/import-fps-problem",name:"file","file-list":e.fileList3,"show-file-list":!0,"with-credentials":!0,limit:3,"on-change":e.onFile3Change,"auto-upload":!1,"on-success":e.uploadSucceeded,"on-error":e.uploadFailed}},[t("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",icon:"el-icon-folder-opened"},slot:"trigger"},[e._v(e._s(e.$t("m.Choose_File")))]),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success",icon:"el-icon-upload"},on:{click:function(t){return e.submitUpload("FPS")}}},[e._v(e._s(e.$t("m.Upload")))])],1)],1)],1)}),[],!1,null,"4d07e831",null);t.default=r.exports},f253:function(e,t,l){}}]);