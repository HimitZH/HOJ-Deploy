(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-123a5c86"],{"1a5b":function(t,e,i){},"1df3":function(t,e,i){"use strict";i("1a5b")},"22a2":function(t,e,i){"use strict";var o=i("3228"),n=i("7aa9"),l={name:"add-problem-from-public",props:["contestID","trainingID"],data:function(){return{page:1,limit:10,total:0,loading:!1,problems:[],contest:{},keyword:""}},mounted:function(){var t=this;this.contestID?o.a.admin_getContest(this.contestID).then((function(e){t.contest=e.data.data,t.getPublicProblem(1)})).catch((function(){})):this.trainingID&&this.getPublicProblem(1)},methods:{getPublicProblem:function(t){var e=this;this.loading=!0;var i={keyword:this.keyword,currentPage:t,limit:this.limit,problemType:this.contest.type,cid:this.contest.id,tid:this.trainingID};t=null;this.contestID?t="admin_getContestProblemList":this.trainingID&&(t="admin_getTrainingProblemList"),o.a[t](i).then((function(t){e.loading=!1,e.total=t.data.data.problemList.total,e.problems=t.data.data.problemList.records})).catch((function(){e.loading=!1}))},handleAddProblem:function(t,e){var i=this;this.contestID?this.$prompt(this.$i18n.t("m.Enter_The_Problem_Display_ID_in_the_Contest"),"Tips").then((function(e){e=e.value,e={pid:t,cid:i.contestID,displayId:e},o.a.admin_addContestProblemFromPublic(e).then((function(t){i.$emit("on-change"),n.a.success(i.$i18n.t("m.Add_Successfully")),i.getPublicProblem(i.page)}),(function(){}))}),(function(){})):(e={pid:t,tid:this.trainingID,displayId:e},o.a.admin_addTrainingProblemFromPublic(e).then((function(t){i.$emit("on-change"),n.a.success(i.$i18n.t("m.Add_Successfully")),i.getPublicProblem(i.page)}),(function(){})))},filterByKeyword:function(){this.getPublicProblem(this.page)}}};i("1df3"),i=i("2877"),l=Object(i.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"text-align":"center"}},[null!=t.contest.type?i("div",{staticStyle:{"margin-bottom":"10px"}},[i("span",{staticClass:"tips"},[t._v(t._s(0==t.contest.type?t.$t("m.ACM_Contest_Add_From_Public_Problem_Tips"):t.$t("m.OI_Contest_Add_From_Public_Problem_Tips")))])]):t._e(),i("vxe-input",{staticStyle:{"margin-bottom":"10px"},attrs:{placeholder:t.$t("m.Enter_keyword"),type:"search",size:"medium"},on:{"search-click":t.filterByKeyword},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.filterByKeyword(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),i("vxe-table",{attrs:{data:t.problems,loading:t.loading,"auto-resize":"",stripe:"",align:"center"}},[i("vxe-table-column",{attrs:{title:"ID","min-width":"100",field:"problemId"}}),i("vxe-table-column",{attrs:{"min-width":"150",title:t.$t("m.Title"),field:"title"}}),i("vxe-table-column",{attrs:{title:t.$t("m.Option"),align:"center","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[i("el-tooltip",{attrs:{effect:"dark",content:t.$t("m.Add"),placement:"top"}},[i("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"primary"},nativeOn:{click:function(e){return t.handleAddProblem(o.id,o.problemId)}}})],1)]}}])})],1),i("el-pagination",{staticClass:"page",attrs:{layout:"prev, pager, next","page-size":t.limit,"current-page":t.page,total:t.total},on:{"current-change":t.getPublicProblem,"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],1)}),[],!1,null,"644514e2",null);e.a=l.exports},"31fe":function(t,e,i){},bf76:function(t,e,i){"use strict";i("31fe")},f375:function(t,e,i){"use strict";i.r(e),i("b0c0");var o=i("5530"),n=i("3228"),l=i("90b9"),a=i("22a2"),r=i("7aa9"),s=i("9a36"),c=i("5880");c={name:"ProblemList",components:{AddPublicProblem:a.a},data:function(){return{total:0,query:{problemListAuth:0,oj:"All",pageSize:10,keyword:"",currentPage:1,contestId:null},problemList:[],contestProblemMap:{},loading:!1,routeName:"",currentProblemID:"",currentRow:{},addProblemDialogVisible:!1,AddRemoteOJProblemDialogVisible:!1,addRemoteOJproblemLoading:!1,otherOJName:"HDU",otherOJProblemId:"",REMOTE_OJ:{},displayId:"",showPagination:!1,predefineColors:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585"]}},mounted:function(){this.init()},computed:Object(o.a)(Object(o.a)({},Object(c.mapGetters)(["userInfo","isSuperAdmin","isProblemAdmin"])),{},{isContest:function(){return!("admin-problem-list"==this.routeName&&!this.query.contestId)}}),methods:{init:function(){this.routeName=this.$route.name;var t=this.$route.query;this.query.currentPage=t.currentPage||1,this.query.pageSize=t.pageSize||10,this.query.keyword=t.keyword,this.query.problemListAuth=t.problemListAuth?parseInt(t.problemListAuth):0,this.query.oj=t.oj||"All",this.query.contestId=this.$route.params.contestId,this.contestProblemMap={},this.getProblemList(),this.REMOTE_OJ=Object.assign({},s.k)},goEdit:function(t){"admin-problem-list"===this.routeName?this.$router.push({name:"admin-edit-problem",params:{problemId:t},query:{back:this.$route.fullPath}}):"admin-contest-problem-list"===this.routeName&&this.$router.push({name:"admin-edit-contest-problem",params:{problemId:t,contestId:this.query.contestId}})},goCreateProblem:function(){"admin-problem-list"===this.routeName?this.$router.push({name:"admin-create-problem",query:{back:this.$route.fullPath}}):"admin-contest-problem-list"===this.routeName&&this.$router.push({name:"admin-create-contest-problem",params:{contestId:this.query.contestId}})},pushRouter:function(){this.query.contestId?this.$router.push({name:"admin-contest-problem-list",query:this.query,params:{contestId:this.query.contestId}}):this.$router.push({name:"admin-problem-list",query:this.query})},currentChange:function(t){this.query.currentPage=t,this.pushRouter()},onPageSizeChange:function(t){this.query.pageSize=t,this.pushRouter()},getProblemList:function(){var t=this,e={limit:this.query.pageSize,currentPage:this.query.currentPage,keyword:this.query.keyword,cid:this.query.contestId,oj:this.query.oj};0!=this.problemListAuth&&(e.auth=this.query.problemListAuth),this.loading=!0,"admin-problem-list"===this.routeName?n.a.admin_getProblemList(e).then((function(e){t.loading=!1,t.total=e.data.data.total,t.problemList=e.data.data.records,t.showPagination=!0}),(function(e){t.loading=!1,t.showPagination=!0})):n.a.admin_getContestProblemList(e).then((function(e){t.loading=!1,t.total=e.data.data.problemList.total,t.problemList=e.data.data.problemList.records,t.contestProblemMap=e.data.data.contestProblemMap,t.showPagination=!0}),(function(e){t.loading=!1,t.showPagination=!0}))},changeProblemAuth:function(t){var e=this;n.a.admin_changeProblemAuth(t).then((function(t){r.a.success(e.$i18n.t("m.Update_Successfully"))}))},deleteProblem:function(t){var e=this;this.$confirm(this.$i18n.t("m.Delete_Problem_Tips"),"Tips",{type:"warning"}).then((function(){var i="admin-problem-list"===e.routeName?"admin_deleteProblem":"admin_deleteContestProblem";n.a[i](t,null).then((function(t){r.a.success(e.$i18n.t("m.Delete_successfully")),e.getProblemList()})).catch((function(){}))}),(function(){}))},removeProblem:function(t){var e=this;this.$confirm(this.$i18n.t("m.Remove_Contest_Problem_Tips"),"Tips",{type:"warning"}).then((function(){n.a.admin_deleteContestProblem(t,e.query.contestId).then((function(t){r.a.success("success"),e.getProblemList()})).catch((function(){}))}),(function(){}))},updateProblem:function(t){var e=this,i=Object.assign({},t);t="",t=this.query.contestId?(i.contest_id=this.query.contestId,"admin_editContestProblem"):"admin_editProblem";n.a[t](i).then((function(t){r.a.success(e.$i18n.t("m.Update_Successfully")),e.getProblemList()})).catch((function(){}))},downloadTestCase:function(t){var e=this;l.a.downloadFile("/api/file/download-testcase?pid="+t).then((function(){e.$alert(e.$i18n.t("m.Download_Testcase_Success"),"Tips")}))},ProblemListChangeFilter:function(){this.pushRouter()},filterByKeyword:function(){this.pushRouter()},addRemoteOJProblem:function(){var t,e=this;this.otherOJProblemId?this.displayId||!this.query.contestId?(this.addRemoteOJproblemLoading=!0,t="",t=this.query.contestId?"admin_addContestRemoteOJProblem":"admin_addRemoteOJProblem",n.a[t](this.otherOJName,this.otherOJProblemId,this.query.contestId,this.displayId).then((function(t){e.addRemoteOJproblemLoading=!1,e.AddRemoteOJProblemDialogVisible=!1,r.a.success(e.$i18n.t("m.Add_Successfully")),e.currentChange(1)}),(function(t){e.addRemoteOJproblemLoading=!1}))):r.a.error(this.$i18n.t("m.The_Problem_Display_ID_in_the_Contest_is_required")):r.a.error(this.$i18n.t("m.Problem_ID_is_required"))},changeContestProblemColor:function(t,e){var i=this;n.a.admin_setContestProblemInfo({id:t,color:e}).then((function(t){r.a.success(i.$i18n.t("m.Update_Balloon_Color_Successfully"))}))}},watch:{$route:function(t,e){this.init()}}},i("bf76"),i=i("2877"),c=Object(i.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-card",[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",{staticClass:"panel-title home-title"},[t._v(t._s(t.query.contestId?t.$t("m.Contest_Problem_List"):t.$t("m.Problem_List")))]),i("div",{staticClass:"filter-row"},[i("span",[i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:t.goCreateProblem}},[t._v(t._s(t.$t("m.Create"))+" ")])],1),t.query.contestId?i("span",[i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(e){t.addProblemDialogVisible=!0}}},[t._v(t._s(t.$t("m.Add_From_Public_Problem"))+" ")])],1):t._e(),i("span",[i("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-plus"},on:{click:function(e){t.AddRemoteOJProblemDialogVisible=!0}}},[t._v(t._s(t.$t("m.Add_Rmote_OJ_Problem"))+" ")])],1),i("span",[i("vxe-input",{attrs:{placeholder:t.$t("m.Enter_keyword"),type:"search",size:"medium"},on:{"search-click":t.filterByKeyword},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.filterByKeyword(e)}},model:{value:t.query.keyword,callback:function(e){t.$set(t.query,"keyword",e)},expression:"query.keyword"}})],1),i("span",[i("el-select",{staticStyle:{width:"180px"},attrs:{size:"small"},on:{change:t.ProblemListChangeFilter},model:{value:t.query.oj,callback:function(e){t.$set(t.query,"oj",e)},expression:"query.oj"}},[i("el-option",{attrs:{label:t.$t("m.All_Problem"),value:"All"}}),i("el-option",{attrs:{label:t.$t("m.My_OJ"),value:"Mine"}}),t._l(t.REMOTE_OJ,(function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.key}})}))],2)],1),t.query.contestId?t._e():i("span",[i("el-select",{staticStyle:{width:"180px"},attrs:{size:"small"},on:{change:t.ProblemListChangeFilter},model:{value:t.query.problemListAuth,callback:function(e){t.$set(t.query,"problemListAuth",e)},expression:"query.problemListAuth"}},[i("el-option",{attrs:{label:t.$t("m.All_Problem"),value:0}}),i("el-option",{attrs:{label:t.$t("m.Public_Problem"),value:1}}),i("el-option",{attrs:{label:t.$t("m.Private_Problem"),value:2}}),i("el-option",{attrs:{label:t.$t("m.Contest_Problem"),value:3}})],1)],1)])]),i("vxe-table",{ref:"adminProblemList",attrs:{stripe:"","auto-resize":"",data:t.problemList,loading:t.loading,align:"center"}},[i("vxe-table-column",{attrs:{"min-width":"64",field:"id",title:"ID"}}),t.isContest?i("vxe-table-column",{attrs:{"min-width":"150",title:t.$t("m.Original_Display"),align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return e=e.row,[t.query.contestId?i("p",[t._v(" "+t._s(t.$t("m.Display_ID"))+"："+t._s(e.problemId)+" ")]):t._e(),t.query.contestId?i("p",[t._v(t._s(t.$t("m.Title"))+"："+t._s(e.title))]):i("span",[t._v(t._s(e.problemId))])]}}])}):i("vxe-table-column",{attrs:{"min-width":"100",field:"problemId",title:t.$t("m.Display_ID")}}),t.isContest?i("vxe-table-column",{attrs:{"min-width":"150",title:t.$t("m.Contest_Display"),align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[t.contestProblemMap[o.id]?i("p",[t._v(" "+t._s(t.$t("m.Display_ID"))+"："+t._s(t.contestProblemMap[o.id].displayId)+" ")]):t._e(),t.contestProblemMap[o.id]?i("p",[t._v(" "+t._s(t.$t("m.Title"))+"："+t._s(t.contestProblemMap[o.id].displayTitle)+" ")]):t._e(),t.contestProblemMap[o.id]?i("span",[t._v(" "+t._s(t.$t("m.Balloon_Color"))+"："),i("el-color-picker",{staticStyle:{"vertical-align":"middle"},attrs:{"show-alpha":"",predefine:t.predefineColors,size:"small"},on:{change:function(e){return t.changeContestProblemColor(t.contestProblemMap[o.id].id,t.contestProblemMap[o.id].color)}},model:{value:t.contestProblemMap[o.id].color,callback:function(e){t.$set(t.contestProblemMap[o.id],"color",e)},expression:"contestProblemMap[row.id].color"}})],1):i("span",[t._v(t._s(o.title))])]}}])}):i("vxe-table-column",{attrs:{field:"title","min-width":"150",title:t.$t("m.Title"),"show-overflow":""}}),i("vxe-table-column",{attrs:{field:"author","min-width":"130",title:t.$t("m.Author"),"show-overflow":""}}),i("vxe-table-column",{attrs:{"min-width":"120",title:t.$t("m.Created_Time")},scopedSlots:t._u([{key:"default",fn:function(e){return e=e.row,[t._v(" "+t._s(t._f("localtime")(e.gmtCreate))+" ")]}}])}),i("vxe-table-column",{attrs:{"min-width":"96",field:"modifiedUser",title:t.$t("m.Modified_User"),"show-overflow":""}}),i("vxe-table-column",{attrs:{"min-width":"120",title:t.$t("m.Auth")},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[i("el-select",{attrs:{size:"small",disabled:!t.isSuperAdmin&&!t.isProblemAdmin&&!t.query.contestId},on:{change:function(e){return t.changeProblemAuth(o)}},model:{value:o.auth,callback:function(e){t.$set(o,"auth",e)},expression:"row.auth"}},[i("el-option",{attrs:{label:t.$t("m.Public_Problem"),value:1,disabled:!t.isSuperAdmin&&!t.isProblemAdmin}}),i("el-option",{attrs:{label:t.$t("m.Private_Problem"),value:2}}),i("el-option",{attrs:{label:t.$t("m.Contest_Problem"),value:3,disabled:!t.query.contestId}})],1)]}}])}),i("vxe-table-column",{attrs:{title:"Option","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[t.isSuperAdmin||t.isProblemAdmin||o.author==t.userInfo.username?i("el-tooltip",{attrs:{effect:"dark",content:t.$t("m.Edit"),placement:"top"}},[i("el-button",{attrs:{icon:"el-icon-edit-outline",size:"mini",type:"primary"},nativeOn:{click:function(e){return t.goEdit(o.id)}}})],1):t._e(),t.isSuperAdmin||t.isProblemAdmin?i("el-tooltip",{attrs:{effect:"dark",content:t.$t("m.Download_Testcase"),placement:"top"}},[i("el-button",{attrs:{icon:"el-icon-download",size:"mini",type:"success"},nativeOn:{click:function(e){return t.downloadTestCase(o.id)}}})],1):t._e(),t.query.contestId?i("el-tooltip",{attrs:{effect:"dark",content:t.$t("m.Remove"),placement:"top"}},[i("el-button",{attrs:{icon:"el-icon-close",size:"mini",type:"warning"},nativeOn:{click:function(e){return t.removeProblem(o.id)}}})],1):t._e(),t.isSuperAdmin||t.isProblemAdmin?i("el-tooltip",{attrs:{effect:"dark",content:t.$t("m.Delete"),placement:"top"}},[i("el-button",{attrs:{icon:"el-icon-delete-solid",size:"mini",type:"danger"},nativeOn:{click:function(e){return t.deleteProblem(o.id)}}})],1):t._e()]}}])})],1),i("div",{staticClass:"panel-options"},[t.showPagination?i("el-pagination",{staticClass:"page",attrs:{layout:"prev, pager, next, sizes","page-size":t.query.pageSize,total:t.total,"current-page":t.query.currentPage,"page-sizes":[10,30,50,100]},on:{"current-change":t.currentChange,"update:currentPage":function(e){return t.$set(t.query,"currentPage",e)},"update:current-page":function(e){return t.$set(t.query,"currentPage",e)},"size-change":t.onPageSizeChange}}):t._e()],1)],1),t.query.contestId?i("el-dialog",{attrs:{title:t.$t("m.Add_Contest_Problem"),width:"90%",visible:t.addProblemDialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.addProblemDialogVisible=e}}},[i("AddPublicProblem",{attrs:{contestID:t.query.contestId},on:{"on-change":t.getProblemList}})],1):t._e(),i("el-dialog",{attrs:{title:t.$t("m.Add_Rmote_OJ_Problem"),width:"350px",visible:t.AddRemoteOJProblemDialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.AddRemoteOJProblemDialogVisible=e}}},[i("el-form",[i("el-form-item",{attrs:{label:t.$t("m.Remote_OJ")}},[i("el-select",{attrs:{size:"small"},model:{value:t.otherOJName,callback:function(e){t.otherOJName=e},expression:"otherOJName"}},t._l(t.REMOTE_OJ,(function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.key}})})),1)],1),i("el-form-item",{attrs:{label:t.$t("m.Problem_ID"),required:""}},[i("el-input",{attrs:{size:"small"},model:{value:t.otherOJProblemId,callback:function(e){t.otherOJProblemId=e},expression:"otherOJProblemId"}})],1),t.query.contestId?i("el-form-item",{attrs:{label:t.$t("m.Enter_The_Problem_Display_ID_in_the_Contest"),required:""}},[i("el-input",{attrs:{size:"small"},model:{value:t.displayId,callback:function(e){t.displayId=e},expression:"displayId"}})],1):t._e(),i("el-form-item",{staticStyle:{"text-align":"center"}},[i("el-button",{attrs:{type:"primary",icon:"el-icon-plus",loading:t.addRemoteOJproblemLoading},on:{click:t.addRemoteOJProblem}},[t._v(t._s(t.$t("m.Add"))+" ")])],1)],1)],1)],1)}),[],!1,null,"7367a142",null);e.default=c.exports}}]);