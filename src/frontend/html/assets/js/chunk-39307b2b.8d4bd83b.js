(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-39307b2b"],{"347a":function(t,e,s){"use strict";s("9d15")},"9a3b":function(t,e,s){"use strict";var a=s("fb6a"),n=s("5530"),o=s("3228"),r=(a=s("5880"),s("9a36"));e.a={methods:{getContestRankData:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,s=1<arguments.length&&void 0!==arguments[1]&&arguments[1];this.showChart&&!s&&this.$refs.chart.showLoading({maskColor:"rgba(250, 250, 250, 0.8)"});var a={currentPage:e,limit:this.limit,cid:this.$route.params.contestID,forceRefresh:!!this.forceUpdate};o.a.getContestRank(a).then((function(a){t.showChart&&!s&&t.$refs.chart.hideLoading(),t.total=a.data.data.total,1===e&&t.applyToChart(a.data.data.records.slice(0,10)),t.applyToTable(a.data.data.records)}))},handleAutoRefresh:function(t){var e=this;1==t?this.refreshFunc=setInterval((function(){e.page=1,e.getContestRankData(1,!0)}),1e4):clearInterval(this.refreshFunc)}},computed:Object(n.a)(Object(n.a)(Object(n.a)({},Object(a.mapGetters)(["isContestAdmin"])),Object(a.mapState)({contest:function(t){return t.contest.contest},contestProblems:function(t){return t.contest.contestProblems}})),{},{showChart:{get:function(){return this.$store.state.contest.itemVisible.chart},set:function(t){this.$store.commit("changeContestItemVisible",{chart:t})}},showTable:{get:function(){return this.$store.state.contest.itemVisible.table},set:function(t){this.$store.commit("changeContestItemVisible",{table:t})}},forceUpdate:{get:function(){return this.$store.state.contest.forceUpdate},set:function(t){this.$store.commit("changeRankForceUpdate",{value:t})}},refreshDisabled:function(){return this.contest.status===r.a.ENDED}}),beforeDestroy:function(){clearInterval(this.refreshFunc)}}},"9d15":function(t,e,s){},d6c9:function(t,e,s){"use strict";s.r(e),s("99af"),s("4160"),s("b64b"),s("d3b7"),s("159b"),s("a4d3"),s("e01a"),s("d28b"),s("3ca3"),s("ddb0");var a=s("06c5");function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var s=[],a=!0,n=!1,o=void 0;try{for(var r,i=t[Symbol.iterator]();!(a=(r=i.next()).done)&&(s.push(r.value),!e||s.length!==e);a=!0);}catch(t){n=!0,o=t}finally{try{a||null==i.return||i.return()}finally{if(n)throw o}}return s}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=s("b85c"),r=s("5530"),i=s("4a89"),l=s.n(i),c=(i=s("c32d"),s.n(i)),u=(i=s("5880"),s("ffb0")),d=s("90b9");r={name:"ACMContestRank",mixins:[s("9a3b").a],components:{Pagination:function(){return Promise.resolve().then(s.bind(null,"5072"))},Avatar:l.a},data:function(){return{total:0,page:1,limit:30,autoRefresh:!1,contestID:"",dataRank:[],options:{title:{text:this.$i18n.t("m.Top_10_Teams"),left:"center",top:0},dataZoom:[{type:"inside",filterMode:"none",xAxisIndex:[0],start:0,end:100}],toolbox:{show:!0,feature:{saveAsImage:{show:!0,title:this.$i18n.t("m.save_as_image")}},right:"0"},tooltip:{trigger:"axis",axisPointer:{type:"cross",axis:"x"}},legend:{orient:"horizontal",x:"center",top:"8%",right:0,data:[],formatter:function(t){return d.a.breakLongWords(t,16)},textStyle:{fontSize:12}},grid:{x:80,x2:100,left:"5%",top:"25%",right:"5%",bottom:"10%"},xAxis:[{type:"time",splitLine:!1,axisPointer:{show:!0,snap:!0}}],yAxis:[{type:"category",boundaryGap:!1,data:[0]}],series:[]}}},mounted:function(){this.contestID=this.$route.params.contestID,this.getContestRankData(1),this.addChartCategory(this.contestProblems)},methods:Object(r.a)(Object(r.a)({},Object(i.mapActions)(["getContestProblems"])),{},{getUserTotalSubmit:function(t){this.$router.push({name:"ContestSubmissionList",query:{username:t}})},getUserHomeByUsername:function(t,e){this.$router.push({name:"UserHome",query:{username:e,uid:t}})},getContestProblemById:function(t){this.$router.push({name:"ContestProblemDetails",params:{contestID:this.contestID,problemID:t}})},cellClassName:function(t){var e=t.row,s=(t.rowIndex,t.column);t=t.columnIndex;return"username"===s.property&&e.userCellClassName?e.userCellClassName:"id"!==s.property&&"rating"!==s.property&&"totalTime"!==s.property&&"username"!==s.property&&"realname"!==s.property?this.isContestAdmin?e.cellClassName[[this.contestProblems[t-5].displayId]]:e.cellClassName[[this.contestProblems[t-4].displayId]]:void 0},applyToTable:function(t){var e=JSON.parse(JSON.stringify(t));e.forEach((function(t,s){var a=t.submissionInfo,n={};Object.keys(a).forEach((function(t){e[s][t]=a[t],e[s][t].ACTime=u.a.secondFormat(e[s][t].ACTime);var o=a[t];o.isFirstAC?n[t]="first-ac":o.isAC?n[t]="ac":null!=o.tryNum&&0<o.tryNum?n[t]="try":0!=o.errorNum&&(n[t]="wa")})),e[s].cellClassName=n,"female"==e[s].gender&&(e[s].userCellClassName="bg-female")})),this.dataRank=e},addChartCategory:function(t){for(var e=[],s=0;s<=t.length;++s)e.push(s);this.options.yAxis[0].data=e},applyToChart:function(t){var e=this,s=[],a=[];t.forEach((function(t){s.push(t[e.contest.rankShowName]);var r=t.submissionInfo,i=[];Object.keys(r).forEach((function(t){r[t].isAC&&i.push(r[t].ACTime)})),i.sort((function(t,e){return t-e}));var l=[];l.push([e.contest.startTime,0]);var u,d=Object(o.a)(i.entries());try{for(d.s();!(u=d.n()).done;){var m=n(u.value,2),h=m[0],f=m[1],p=c()(e.contest.startTime).add(f,"seconds").format();l.push([p,h+1])}}catch(t){d.e(t)}finally{d.f()}a.push({name:t[e.contest.rankShowName],type:"line",data:l})})),this.options.legend.data=s,this.options.series=a},parseTotalTime:function(t){return u.a.secondFormat(t)},downloadRankCSV:function(){d.a.downloadFile("/api/file/download-contest-rank?cid=".concat(this.$route.params.contestID,"&forceRefresh=").concat(!!this.forceUpdate))}}),watch:{contestProblems:function(t,e){0!=t.length&&this.addChartCategory(this.contestProblems)}},computed:{contest:function(){return this.$store.state.contest.contest},isMobileView:function(){return window.screen.width<768}}},s("347a"),i=s("2877"),r=Object(i.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-card",{attrs:{shadow:""}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"panel-title"},[t._v(t._s(t.$t("m.Contest_Rank")))]),s("span",{staticStyle:{float:"right","font-size":"20px"}},[s("el-popover",{attrs:{trigger:"hover",placement:"left-start"}},[s("i",{staticClass:"el-icon-s-tools",attrs:{slot:"reference"},slot:"reference"}),s("div",{attrs:{id:"switches"}},[s("p",[s("span",[t._v(t._s(t.$t("m.Chart")))]),s("el-switch",{model:{value:t.showChart,callback:function(e){t.showChart=e},expression:"showChart"}})],1),s("p",[s("span",[t._v(t._s(t.$t("m.Table")))]),s("el-switch",{model:{value:t.showTable,callback:function(e){t.showTable=e},expression:"showTable"}})],1),s("p",[s("span",[t._v(t._s(t.$t("m.Auto_Refresh"))+"(10s)")]),s("el-switch",{attrs:{disabled:t.refreshDisabled},on:{change:t.handleAutoRefresh},model:{value:t.autoRefresh,callback:function(e){t.autoRefresh=e},expression:"autoRefresh"}})],1),t.isContestAdmin?[s("p",[s("span",[t._v(t._s(t.$t("m.Force_Update")))]),s("el-switch",{attrs:{disabled:t.refreshDisabled},model:{value:t.forceUpdate,callback:function(e){t.forceUpdate=e},expression:"forceUpdate"}})],1)]:t._e(),[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.downloadRankCSV}},[t._v(t._s(t.$t("m.Download_as_CSV")))])]],2)])],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showChart,expression:"showChart"}],staticClass:"echarts"},[s("ECharts",{ref:"chart",attrs:{options:t.options,autoresize:!0}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showTable,expression:"showTable"}]},[s("vxe-table",{attrs:{round:"",border:"","auto-resize":"",size:"medium",align:"center",data:t.dataRank,"cell-class-name":t.cellClassName,"seq-config":{startIndex:(this.page-1)*this.limit}}},[s("vxe-table-column",{attrs:{field:"id",type:"seq",width:"50",fixed:"left"}}),t.isMobileView?s("vxe-table-column",{attrs:{field:"username","min-width":"300",title:t.$t("m.User"),"header-align":"center",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[s("avatar",{attrs:{username:a[t.contest.rankShowName],inline:!0,size:37,color:"#FFF",src:a.avatar,title:a[t.contest.rankShowName]}}),s("span",{staticStyle:{float:"right","text-align":"right"}},[s("a",{on:{click:function(e){return t.getUserHomeByUsername(a.uid,a.username)}}},[s("span",{staticClass:"contest-username"},["female"==a.gender?s("span",{staticClass:"female-flag"},[t._v("Girl")]):t._e(),t._v(t._s(a[t.contest.rankShowName]))]),a.school?s("span",{staticClass:"contest-school"},[t._v(t._s(a.school))]):t._e()])])]}}])}):s("vxe-table-column",{attrs:{field:"username",fixed:"left","min-width":"300",title:t.$t("m.User"),"header-align":"center",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[s("avatar",{attrs:{username:a[t.contest.rankShowName],inline:!0,size:37,color:"#FFF",src:a.avatar,title:a[t.contest.rankShowName]}}),s("span",{staticStyle:{float:"right","text-align":"right"}},[s("a",{on:{click:function(e){return t.getUserHomeByUsername(a.uid,a.username)}}},[s("span",{staticClass:"contest-username"},["female"==a.gender?s("span",{staticClass:"female-flag"},[t._v("Girl")]):t._e(),t._v(t._s(a[t.contest.rankShowName]))]),a.school?s("span",{staticClass:"contest-school"},[t._v(t._s(a.school))]):t._e()])])]}}],null,!1,3985709549)}),t.isContestAdmin?s("vxe-table-column",{attrs:{field:"realname","min-width":"96",title:t.$t("m.RealName")}}):t._e(),s("vxe-table-column",{attrs:{field:"rating",title:t.$t("m.AC")+" / "+t.$t("m.Total"),"min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[s("span",[t._v(t._s(a.ac)+" / "),s("a",{staticStyle:{color:"rgb(87, 163, 243)"},on:{click:function(e){return t.getUserTotalSubmit(a.username)}}},[t._v(t._s(a.total))])])]}}])}),s("vxe-table-column",{attrs:{field:"totalTime",title:t.$t("m.TotalTime"),"min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return e=e.row,[s("span",[t._v(t._s(t.parseTotalTime(e.totalTime)))])]}}])}),t._l(t.contestProblems,(function(e){return s("vxe-table-column",{key:e.displayId,attrs:{"min-width":"120"},scopedSlots:t._u([{key:"header",fn:function(){return[e.color?s("span",{staticStyle:{"vertical-align":"top"}},[s("svg",{staticClass:"icon",attrs:{t:"1633685184463",viewBox:"0 0 1088 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5840",width:"25",height:"25"}},[s("path",{attrs:{d:"M575.872 849.408c-104.576 0-117.632-26.56-119.232-31.808-6.528-22.528 32.896-70.592 63.744-96.768l-1.728-2.624c137.6-42.688 243.648-290.112 243.648-433.472A284.544 284.544 0 0 0 478.016 0a284.544 284.544 0 0 0-284.288 284.736c0 150.4 116.352 415.104 263.744 438.336-25.152 29.568-50.368 70.784-39.104 108.928 12.608 43.136 62.72 63.232 157.632 63.232 7.872 0 11.52 9.408 4.352 19.52-21.248 29.248-77.888 63.424-167.68 63.424V1024c138.944 0 215.936-74.816 215.936-126.528a46.72 46.72 0 0 0-16.32-36.608 56.32 56.32 0 0 0-36.416-11.456zM297.152 297.472c0 44.032-38.144 25.344-38.144-38.656 0-108.032 85.248-195.712 190.592-195.712 62.592 0 81.216 39.232 38.08 39.232-105.152 0.064-190.528 87.04-190.528 195.136z",fill:e.color,"p-id":"5841"}})])]):t._e(),s("span",[s("a",{staticClass:"emphasis",staticStyle:{color:"#495060"},on:{click:function(s){return t.getContestProblemById(e.displayId)}}},[t._v(t._s(e.displayId))])])]},proxy:!0},{key:"default",fn:function(a){return a=a.row,[a.submissionInfo[e.displayId]?s("span",[a.submissionInfo[e.displayId].isAC?s("span",[t._v(t._s(a.submissionInfo[e.displayId].ACTime)),s("br")]):t._e(),null==a.submissionInfo[e.displayId].tryNum&&0!=a.submissionInfo[e.displayId].errorNum?s("span",[t._v(" (-"+t._s(0<a.submissionInfo[e.displayId].errorNum?a.submissionInfo[e.displayId].errorNum:0)+") ")]):t._e(),null!=a.submissionInfo[e.displayId].tryNum?s("span",[0<a.submissionInfo[e.displayId].errorNum?[t._v(" (-"+t._s(a.submissionInfo[e.displayId].errorNum)+")+")]:t._e(),t._v("("+t._s(a.submissionInfo[e.displayId].tryNum)+t._s(1<a.submissionInfo[e.displayId].tryNum?" tries":" try")+") ")],2):t._e()]):t._e()]}}],null,!0)})}))],2)],1),s("Pagination",{attrs:{total:t.total,"page-size":t.limit,current:t.page,layout:"prev, pager, next, sizes"},on:{"update:pageSize":function(e){t.limit=e},"update:page-size":function(e){t.limit=e},"update:current":function(e){t.page=e},"on-change":t.getContestRankData,"on-page-size-change":function(e){return t.getContestRankData(1)}}})],1)}),[],!1,null,"7b5e9ea8",null);e.default=r.exports}}]);