(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-22499fbc"],{7230:function(e,t,r){"use strict";r("a99b")},"7db0":function(e,t,r){"use strict";var a=r("23e7"),o=r("b727").find,i=r("44d2"),l=r("ae40"),s=(r="find",!0);l=l(r);r in[]&&Array(1)[r]((function(){s=!1})),a({target:"Array",proto:!0,forced:s||!l},{find:function(e){return o(this,e,1<arguments.length?arguments[1]:void 0)}}),i(r)},"96cf":function(e,t,r){e=function(e){"use strict";var t,r=Object.prototype,a=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function n(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{n({},"")}catch(r){n=function(e,t,r){return e[t]=r}}function p(e,r,a,o){var i,l,s,n;r=r&&r.prototype instanceof f?r:f,r=Object.create(r.prototype),o=new j(o||[]);return r._invoke=(i=e,l=a,s=o,n=c,function(e,r){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===e)throw r;return T()}for(s.method=e,s.arg=r;;){var a=s.delegate;if(a){var o=function e(r,a){var o=r.iterator[a.method];if(o===t){if(a.delegate=null,"throw"===a.method){if(r.iterator.return&&(a.method="return",a.arg=t,e(r,a),"throw"===a.method))return b;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}if(o=m(o,r.iterator,a.arg),"throw"===o.type)return a.method="throw",a.arg=o.arg,a.delegate=null,b;o=o.arg;return o?o.done?(a[r.resultName]=o.value,a.next=r.nextLoc,"return"!==a.method&&(a.method="next",a.arg=t),a.delegate=null,b):o:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,b)}(a,s);if(o){if(o===b)continue;return o}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(n===c)throw n=h,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);if(n=d,o=m(i,l,s),"normal"===o.type){if(n=s.done?h:u,o.arg!==b)return{value:o.arg,done:s.done}}else"throw"===o.type&&(n=h,s.method="throw",s.arg=o.arg)}}),r}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=p;var c="suspendedStart",u="suspendedYield",d="executing",h="completed",b={};function f(){}function g(){}function v(){}var _={};_[i]=function(){return this},o=Object.getPrototypeOf,o=o&&o(o(L([]))),o&&o!==r&&a.call(o,i)&&(_=o);var y=v.prototype=f.prototype=Object.create(_);function $(e){["next","throw","return"].forEach((function(t){n(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){var r;this._invoke=function(o,i){function l(){return new t((function(r,l){!function r(o,i,l,s){if(o=m(e[o],e,i),"throw"!==o.type){var n=o.arg;i=n.value;return i&&"object"==typeof i&&a.call(i,"__await")?t.resolve(i.__await).then((function(e){r("next",e,l,s)}),(function(e){r("throw",e,l,s)})):t.resolve(i).then((function(e){n.value=e,l(n)}),(function(e){return r("throw",e,l,s)}))}s(o.arg)}(o,i,r,l)}))}return r=r?r.then(l,l):l()}}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function L(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1;r=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return r.next=r}}return{next:T}}function T(){return{value:t,done:!0}}return((g.prototype=y.constructor=v).constructor=g).displayName=n(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){return e="function"==typeof e&&e.constructor,!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,n(e,s,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},$(x.prototype),x.prototype[l]=function(){return this},e.AsyncIterator=x,e.async=function(t,r,a,o,i){void 0===i&&(i=Promise);var l=new x(p(t,r,a,o),i);return e.isGeneratorFunction(r)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},$(y),n(y,s,"Generator"),y[i]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t,r=[];for(t in e)r.push(t);return r.reverse(),function t(){for(;r.length;){var a=r.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(a,o){return s.type="throw",s.arg=e,r.next=a,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;0<=i;--i){var l=this.tryEntries[i],s=l.completion;if("root"===l.tryLoc)return o("end");if(l.tryLoc<=this.prev){var n=a.call(l,"catchLoc"),p=a.call(l,"finallyLoc");if(n&&p){if(this.prev<l.catchLoc)return o(l.catchLoc,!0);if(this.prev<l.finallyLoc)return o(l.finallyLoc)}else if(n){if(this.prev<l.catchLoc)return o(l.catchLoc,!0)}else{if(!p)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return o(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}var l=(i=i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc?null:i)?i.completion:{};return l.type=e,l.arg=t,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a,o=r.completion;return"throw"===o.type&&(a=o.arg,S(r)),a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,a){return this.delegate={iterator:L(e),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=t),b}},e}(e.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},a99b:function(e,t,r){},fd98:function(e,t,r){"use strict";r.r(t),r("4de4"),r("7db0"),r("c975"),r("d81d"),r("a434"),r("b0c0"),r("d3b7"),r("ac1f"),r("1276");var a=r("5530");function o(e,t,r,a,o,i,l){try{var s=e[i](l),n=s.value}catch(e){return void r(e)}s.done?t(n):Promise.resolve(n).then(a,o)}r("96cf");var i=r("b85c"),l=r("90b9"),s=r("5880"),n=r("3228"),p=r("7aa9"),m=r("9a36");a={name:"Problem",components:{Accordion:function(){return r.e("chunk-b2238846").then(r.bind(null,"a2e7"))},CodeMirror:function(){return Promise.all([r.e("chunk-5dccc4e4"),r.e("chunk-1d0c4d32")]).then(r.bind(null,"ac13"))},Editor:function(){return r.e("chunk-13f2b59d").then(r.bind(null,"a956"))}},data:function(){return{rules:{title:{required:!0,message:"Title is required",trigger:"blur"},input_description:{required:!0,message:"Input Description is required",trigger:"blur"},output_description:{required:!0,message:"Output Description is required",trigger:"blur"}},loadingCompile:!1,mode:"",contest:{},codeTemplate:{},pid:null,contestID:null,contestProblem:{displayId:null,displayTitle:null,cid:null,pid:null},problem:{id:null,title:"",problemId:"",description:"",input:"",output:"",timeLimit:1e3,memoryLimit:256,stackLimit:128,difficulty:0,auth:1,codeShare:!0,examples:[],spj:!1,spjLanguage:"",spjCode:"",spjCompileOk:!1,uploadTestcaseDir:"",testCaseScore:[],isRemote:!1,isUploadCase:!0,type:0,hint:"",source:"",cid:null},problemTags:[],problemLanguages:[],problemSamples:[],problemCodeTemplate:[],reProblem:{},testCaseUploaded:!1,allLanguage:[],allSpjLanguage:[],allTags:[],allTagsTmp:[],inputVisible:!1,tagInput:"",title:"",spjMode:"",disableRuleType:!1,routeName:"",uploadTestcaseDir:"",uploadFileUrl:"",error:{tags:"",spj:"",languages:"",testCase:""},PROBLEM_LEVEL_RESERVE:{},spjRecord:{spjCode:"",spjLanguage:""}}},mounted:function(){var e=this;this.PROBLEM_LEVEL_RESERVE=Object.assign({},m.h),this.routeName=this.$route.name;var t=this.$route.params.contestId;this.uploadFileUrl="/api/file/upload-testcase-zip","admin-edit-problem"===this.routeName||"admin-edit-contest-problem"===this.routeName?this.mode="edit":this.mode="add",n.a.admin_getAllProblemTagList("ALL").then((function(t){e.allTags=t.data.data;var r,a=Object(i.a)(t.data.data);try{for(a.s();!(r=a.n()).done;){var o=r.value;e.allTagsTmp.push({value:o.name,oj:o.oj})}}catch(t){a.e(t)}finally{a.f()}})).catch((function(){})),n.a.getLanguages(this.$route.params.problemId,!1).then((function(r){var a=r.data.data;e.allLanguage=a;for(var o=0;o<a.length;o++)1==a[o].isSpj&&e.allSpjLanguage.push(a[o]);e.problem=e.reProblem={id:null,problemId:"",title:"",description:"",input:"",output:"",timeLimit:1e3,memoryLimit:256,stackLimit:128,difficulty:0,auth:1,codeShare:!0,examples:[],spj:!1,spjLanguage:"",spjCode:"",spjCompileOk:!1,isUploadCase:!0,uploadTestcaseDir:"",testCaseScore:[],contestProblem:{},type:0,hint:"",source:"",cid:null},(e.contestID=t)&&(e.problem.cid=e.reProblem.cid=t,e.problem.auth=e.reProblem.auth=3,e.disableRuleType=!0,n.a.admin_getContest(t).then((function(t){e.problem.type=e.reProblem.type=t.data.data.type,e.contest=t.data.data}))),e.problem.spjLanguage="C",e.init()}))},watch:{$route:function(){this.routeName=this.$route.name,"admin-edit-problem"===this.routeName||"admin-edit-contest-problem"===this.routeName?this.mode="edit":this.mode="add",this.$refs.form.resetFields(),this.problem=this.reProblem,this.problemTags=[],this.problemLanguages=[],this.problemSamples=[],this.problemCodeTemplate=[],this.codeTemplate=[],this.init()},problemLanguages:function(e){var t,r=this,a={},o=(e=JSON.parse(JSON.stringify(e)).sort(),Object(i.a)(e));try{for(o.s();!(t=o.n()).done;)!function(){var e,o,i,l=t.value;void 0===r.codeTemplate[l]?(e=r.allLanguage.find((function(e){return e.name===l})),(i=r.problemCodeTemplate)&&(o=i.find((function(t){return t.lid==e.id}))),a[l]=null==o?{id:null,status:!1,code:e.codeTemplate,mode:e.contentType}:{id:o.id,status:!0,code:o.code,mode:e.contentType}):a[l]=r.codeTemplate[l]}()}catch(e){o.e(e)}finally{o.f()}this.codeTemplate=a},"problem.spjLanguage":function(e){var t=this;this.allSpjLanguage.length&&(this.spjMode=this.allSpjLanguage.find((function(e){return e.name==t.problem.spjLanguage&&1==e.isSpj})).contentType)}},methods:{init:function(){var e=this;if("edit"===this.mode){this.pid=this.$route.params.problemId,this.title=this.$i18n.t("m.Edit_Problem");var t={"admin-edit-problem":"admin_getProblem","admin-edit-contest-problem":"admin_getContestProblem"}[this.routeName];n.a[t](this.pid).then((function(t){t=t.data.data,t.spjCompileOk=!1,t.uploadTestcaseDir="",t.testCaseScore=[],t.spj=!0,t.spjCode||(t.spjCode="",t.spj=!1),t.spjLanguage=t.spjLanguage||"C",e.spjRecord.spjLanguage=t.spjLanguage,e.spjRecord.spjCode=t.spjCode,e.problem=t,e.problem.examples=l.a.stringToExamples(t.examples),e.problem.examples[0].isOpen=!0,e.testCaseUploaded=!0,n.a.admin_getProblemCases(e.pid,e.problem.isUploadCase).then((function(t){e.problem.isUploadCase?e.problem.testCaseScore=t.data.data:(e.problemSamples=t.data.data,e.problemSamples[0].isOpen=!0)}))})),"admin_getContestProblem"===t&&n.a.admin_getContestProblemInfo(this.pid,this.contestID).then((function(t){e.contestProblem=t.data.data})),this.getProblemCodeTemplateAndLanguage(),n.a.admin_getProblemTags(this.pid).then((function(t){e.problemTags=t.data.data}))}else{this.addExample(),this.testCaseUploaded=!1,this.title=this.$i18n.t("m.Create_Problem");var r,a=Object(i.a)(this.allLanguage);try{for(a.s();!(r=a.n()).done;){var o=r.value;this.problemLanguages.push(o.name)}}catch(t){a.e(t)}finally{a.f()}}},getProblemCodeTemplateAndLanguage:function(){var e,t=this;return e=regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,e.next=3,n.a.getProblemCodeTemplate(r.pid).then((function(e){r.problemCodeTemplate=e.data.data}));case 3:n.a.getProblemLanguages(r.pid).then((function(e){for(var t=e.data.data,a=0;a<t.length;a++)r.problemLanguages.push(t[a].name)}));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,i){var l=e.apply(t,r);function s(e){o(l,a,i,s,n,"next",e)}function n(e){o(l,a,i,s,n,"throw",e)}s(void 0)}))}()},switchSpj:function(){var e=this;this.testCaseUploaded?this.$confirm(this.$i18n.t("m.Change_Judge_Method"),"Tips",{confirmButtonText:this.$i18n.t("m.OK"),cancelButtonText:this.$i18n.t("m.Cancel"),type:"warning"}).then((function(){e.problem.spj=!e.problem.spj,e.resetTestCase()})).catch((function(){})):this.problem.spj=!this.problem.spj},querySearch:function(e,t){var r="ME";this.problem.isRemote&&(r=this.problem.problemId.split("-")[0]);var a=this.allTagsTmp.filter((function(e){return e.oj==r}));t(e?a.filter((function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())})):a)},changeContent:function(e){this.announcement.content=e},resetTestCase:function(){this.testCaseUploaded=!1,this.problem.testCaseScore=[],this.problem.uploadTestcaseDir=""},selectTag:function(e){for(var t=0;t<this.problemTags.length;t++)if(this.problemTags[t].name==e.value)return p.a.warning(this.$i18n.t("m.Add_Tag_Error")),void(this.tagInput="");this.tagInput=e.value},addTag:function(e){var t={name:this.tagInput};if(this.tagInput){for(var r=0;r<this.problemTags.length;r++)if(this.problemTags[r].name==this.tagInput)return p.a.warning(this.$i18n.t("m.Add_Tag_Error")),void(this.tagInput="");this.problemTags.push(t),this.inputVisible=!1,this.tagInput=""}},closeTag:function(e){this.problemTags.splice(this.problemTags.map((function(e){return e.name})).indexOf(e),1)},problemTypeChange:function(e){if(1==e)for(var t=this.problemSamples.length,r=parseInt(100/t),a=100-r*t,o=0;o<t;o++)this.problemSamples[o].score=t-a<=o?r+1:r},addExample:function(){this.problem.examples.push({input:"",output:"",isOpen:!0})},changeExampleVisible:function(e,t){this.problem.examples[e].isOpen=t},addSample:function(){this.mode,this.problemSamples.push({input:"",output:"",score:0==this.problem.type?null:0,pid:this.pid,isOpen:!0})},deleteExample:function(e){this.problem.examples.splice(e,1)},deleteSample:function(e){this.problemSamples.splice(e,1)},changeSampleVisible:function(e,t){this.problemSamples[e].isOpen=t},uploadSucceeded:function(e){if(200!=e.status)return p.a.error(e.msg),void(this.testCaseUploaded=!1);p.a.success(this.$i18n.t("m.Upload_Testcase_Successfully"));for(var t=e.data.fileList,r=parseInt(100/t.length),a=100-r*t.length,o=0;o<t.length;o++)r&&(o>=t.length-a?t[o].score=r+1:t[o].score=r),!t[o].output&&this.problem.spj&&(t[o].output="-"),t[o].pid=this.problem.id;this.problem.testCaseScore=t,this.testCaseUploaded=!0,this.problem.uploadTestcaseDir=e.data.fileListDir},uploadFailed:function(){p.a.error(this.$i18n.t("m.Upload_Testcase_Failed"))},compileSPJ:function(){var e=this,t={pid:this.problem.id,spjSrc:this.problem.spjCode,spjLanguage:this.problem.spjLanguage};this.loadingCompile=!0,n.a.compileSPJ(t).then((function(t){e.loadingCompile=!1,e.problem.spjCompileOk=!0,e.error.spj="",p.a.success(t.data.msg)}),(function(t){e.loadingCompile=!1,e.problem.spjCompileOk=!1;var r=e.$createElement;e.$msgbox({title:"Compile Error",type:"error",message:r("pre",t.data.msg),showCancelButton:!1,closeOnClickModal:!1,customClass:"dialog-compile-error"})}))},submit:function(){var e=this;if(this.problem.problemId){if(this.contestID){if(!this.contestProblem.displayId)return void p.a.error(this.$i18n.t("m.Contest_Display_ID")+" "+this.$i18n.t("m.is_required"));if(!this.contestProblem.displayTitle)return void p.a.error(this.$i18n.t("m.Contest_Display_Title")+" "+this.$i18n.t("m.is_required"))}if(this.problem.examples.length||this.problem.isRemote){if(!this.problem.isRemote)if(this.problem.isUploadCase){if(!this.testCaseUploaded)return this.error.testCase=this.$i18n.t("m.Judge_Samples")+" "+this.$i18n.t("m.is_required"),void p.a.error(this.error.testCase);if(1==this.problem.type)for(var t=0;t<this.problemSamples.length;t++){if(""==this.problemSamples[t].score)return void p.a.error(this.$i18n.t("m.Problem_Sample")+(t+1)+" "+this.$i18n.t("m.Score_must_be_an_integer"));try{if(parseInt(this.problemSamples[t].score)<0)return void p.a.error(this.$i18n.t("m.Problem_Sample")+(t+1)+" "+this.$i18n.t("m.Score_must_be_greater_than_or_equal_to_0"))}catch(t){return void p.a.error(this.$i18n.t("m.Score_must_be_an_integer"))}}}else{if(!this.problemSamples.length)return void p.a.error(this.$i18n.t("m.Judge_Samples")+" "+this.$i18n.t("m.is_required"));var r,a=Object(i.a)(this.problemSamples);try{for(a.s();!(r=a.n()).done;){var o=r.value;if(!o.input&&!o.output)return void p.a.error(this.$i18n.t("m.Sample_Input")+" or "+this.$i18n.t("m.Sample_Output")+" "+this.$i18n.t("m.is_required"))}}catch(t){a.e(t)}finally{a.f()}if(1==this.problem.type)for(var s=0;s<this.problemSamples.length;s++){if(""==this.problemSamples[s].score)return void p.a.error(this.$i18n.t("m.Problem_Sample")+(s+1)+" "+this.$i18n.t("m.Score_must_be_an_integer"));try{if(parseInt(this.problemSamples[s].score)<0)return void p.a.error(this.$i18n.t("m.Problem_Sample")+(s+1)+" "+this.$i18n.t("m.Score_must_be_greater_than_or_equal_to_0"))}catch(t){return void p.a.error(this.$i18n.t("m.Score_must_be_an_integer"))}}}if(!this.problemTags.length)return this.error.tags=this.$i18n.t("m.Tags")+" "+this.$i18n.t("m.is_required"),void p.a.error(this.error.tags);if(this.problem.spj&&(this.problem.spjCode?this.problem.spjCompileOk||(this.error.spj=this.$i18n.t("m.Spj_Code_not_Compile_Success")):(this.error.spj=this.$i18n.t("m.Spj_Code")+" "+this.$i18n.t("m.is_required"),p.a.error(this.error.spj)),this.error.spj))p.a.error(this.error.spj);else{if(!this.problemLanguages.length)return this.error.languages=this.$i18n.t("m.Language")+" "+this.$i18n.t("m.is_required"),void p.a.error(this.error.languages);var m={"admin-create-problem":"admin_createProblem","admin-edit-problem":"admin_editProblem","admin-create-contest-problem":"admin_createContestProblem","admin-edit-contest-problem":"admin_editContestProblem"}[this.routeName];"editContestProblem"===m&&(this.problem.cid=this.contest.id),"admin_createProblem"!==m&&"admin_createContestProblem"!==m||(this.problem.author=this.userInfo.username);var c="ME";this.problem.isRemote&&(c=this.problem.problemId.split("-")[0]);for(var u=Object.assign([],this.problemTags),d=0;d<u.length;d++){var h,b=Object(i.a)(this.allTags);try{for(b.s();!(h=b.n()).done;){var f=h.value;if(u[d].name==f.name&&f.oj==c){u[d]=f;break}}}catch(t){b.e(t)}finally{b.f()}}this.problemCodeTemplate=[];for(var g=Object.assign([],this.problemLanguages),v=0;v<g.length;v++){g[v]={name:g[v]};var _,y=Object(i.a)(this.allLanguage);try{for(y.s();!(_=y.n()).done;){var $=_.value;if(g[v].name==$.name){g[v]=$,this.codeTemplate[$.name].status&&this.problemCodeTemplate.push({id:this.codeTemplate[$.name].id,pid:this.pid,code:this.codeTemplate[$.name].code,lid:$.id,status:this.codeTemplate[$.name].status});break}}}catch(t){y.e(t)}finally{y.f()}}var x={};this.problem.spj?this.spjRecord.spjLanguage==this.problem.spjLanguage&&this.spjRecord.spjCode==this.problem.spjCode||(x.changeSpj=!0):this.spjRecord.spjCode||(x.changeSpj=!0,this.problem.spjCode=null,this.problem.spjLanguage=null),x.problem=Object.assign({},this.problem),x.problem.examples=l.a.examplesToString(this.problem.examples),x.codeTemplates=this.problemCodeTemplate,x.tags=u,x.languages=g,x.isUploadTestCase=this.problem.isUploadCase,x.uploadTestcaseDir=this.problem.uploadTestcaseDir,x.isSpj=this.problem.spj,this.problem.isUploadCase?x.samples=this.problem.testCaseScore:x.samples=this.problemSamples,n.a[m](x).then((function(t){"admin-create-contest-problem"===e.routeName||"admin-edit-contest-problem"===e.routeName?(t.data.data&&(e.contestProblem.pid=t.data.data.pid,e.contestProblem.cid=e.$route.params.contestId),n.a.admin_setContestProblemInfo(e.contestProblem).then((function(t){p.a.success("success"),e.$router.push({name:"admin-contest-problem-list",params:{contestId:e.$route.params.contestId}})}))):(p.a.success("success"),e.$router.push({name:"admin-problem-list"}))})).catch((function(){}))}}else p.a.error(this.$i18n.t("m.Problem_Examples")+" "+this.$i18n.t("m.is_required"))}else p.a.error(this.$i18n.t("m.Problem_Display_ID")+" "+this.$i18n.t("m.is_required"))}},computed:Object(a.a)({},Object(s.mapGetters)(["userInfo"]))},r("7230"),s=r("2877"),a=Object(s.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"problem"},[r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",{staticClass:"panel-title home-title"},[e._v(e._s(e.title))])]),r("el-form",{ref:"form",attrs:{model:e.problem,rules:e.rules,"label-position":"top","label-width":"70px"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"problemId",label:e.$t("m.Problem_Display_ID"),required:""}},[r("el-input",{attrs:{placeholder:e.$t("m.Problem_Display_ID"),disabled:e.problem.isRemote},model:{value:e.problem.problemId,callback:function(t){e.$set(e.problem,"problemId",t)},expression:"problem.problemId"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"title",label:e.$t("m.Title"),required:""}},[r("el-input",{attrs:{placeholder:e.$t("m.Title")},model:{value:e.problem.title,callback:function(t){e.$set(e.problem,"title",t)},expression:"problem.title"}})],1)],1)],1),e.contestID?r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:12,xs:24}},[r("el-form-item",{attrs:{label:e.$t("m.Contest_Display_Title"),required:""}},[r("el-input",{attrs:{placeholder:e.$t("m.Contest_Display_Title")},model:{value:e.contestProblem.displayTitle,callback:function(t){e.$set(e.contestProblem,"displayTitle",t)},expression:"contestProblem.displayTitle"}})],1)],1),r("el-col",{attrs:{md:12,xs:24}},[r("el-form-item",{attrs:{label:e.$t("m.Contest_Display_ID"),required:""}},[r("el-input",{attrs:{placeholder:e.$t("m.Contest_Display_ID")},model:{value:e.contestProblem.displayId,callback:function(t){e.$set(e.contestProblem,"displayId",t)},expression:"contestProblem.displayId"}})],1)],1)],1):e._e(),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"description",label:e.$t("m.Description"),required:""}},[r("Editor",{attrs:{value:e.problem.description},on:{"update:value":function(t){return e.$set(e.problem,"description",t)}}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:6,xs:24}},[r("el-form-item",{attrs:{label:e.$t("m.Time_Limit")+"(ms)",required:""}},[r("el-input",{attrs:{type:"Number",placeholder:e.$t("m.Time_Limit"),disabled:e.problem.isRemote},model:{value:e.problem.timeLimit,callback:function(t){e.$set(e.problem,"timeLimit",t)},expression:"problem.timeLimit"}})],1)],1),r("el-col",{attrs:{md:6,xs:24}},[r("el-form-item",{attrs:{label:e.$t("m.Memory_Limit")+"(mb)",required:""}},[r("el-input",{attrs:{type:"Number",placeholder:e.$t("m.Memory_Limit"),disabled:e.problem.isRemote},model:{value:e.problem.memoryLimit,callback:function(t){e.$set(e.problem,"memoryLimit",t)},expression:"problem.memoryLimit"}})],1)],1),r("el-col",{attrs:{md:6,xs:24}},[r("el-form-item",{attrs:{label:e.$t("m.Stack_Limit")+"(mb)",required:""}},[r("el-input",{attrs:{type:"Number",placeholder:e.$t("m.Stack_Limit"),disabled:e.problem.isRemote},model:{value:e.problem.stackLimit,callback:function(t){e.$set(e.problem,"stackLimit",t)},expression:"problem.stackLimit"}})],1)],1),r("el-col",{attrs:{md:6,xs:24}},[r("el-form-item",{attrs:{label:e.$t("m.Level"),required:""}},[r("el-select",{staticClass:"difficulty-select",attrs:{placeholder:"Enter the level of problem"},model:{value:e.problem.difficulty,callback:function(t){e.$set(e.problem,"difficulty",t)},expression:"problem.difficulty"}},e._l(e.PROBLEM_LEVEL_RESERVE,(function(e,t,a){return r("el-option",{key:a,attrs:{label:t,value:e}})})),1)],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"input_description",label:e.$t("m.Input"),required:""}},[r("Editor",{attrs:{value:e.problem.input},on:{"update:value":function(t){return e.$set(e.problem,"input",t)}}})],1)],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"output_description",label:e.$t("m.Output"),required:""}},[r("Editor",{attrs:{value:e.problem.output},on:{"update:value":function(t){return e.$set(e.problem,"output",t)}}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:4,xs:24}},[r("el-form-item",{attrs:{label:e.$t("m.Auth")}},[r("el-select",{attrs:{size:"small"},model:{value:e.problem.auth,callback:function(t){e.$set(e.problem,"auth",t)},expression:"problem.auth"}},[r("el-option",{attrs:{label:e.$t("m.Public_Problem"),value:1}}),r("el-option",{attrs:{label:e.$t("m.Private_Problem"),value:2}}),r("el-option",{attrs:{label:e.$t("m.Contest_Problem"),value:3}})],1)],1)],1),r("el-col",{attrs:{md:4,xs:24}},[r("el-form-item",{attrs:{label:e.$t("m.Code_Shareable")}},[r("el-switch",{attrs:{"active-text":"","inactive-text":""},model:{value:e.problem.codeShare,callback:function(t){e.$set(e.problem,"codeShare",t)},expression:"problem.codeShare"}})],1)],1),r("el-col",{attrs:{md:16,xs:24}},[r("el-form-item",{attrs:{label:e.$t("m.Tags"),required:""}},[e._l(e.problemTags,(function(t){return r("el-tag",{key:t.name,staticStyle:{"margin-right":"7px","margin-top":"4px"},attrs:{closable:"","close-transition":!1,size:"small"},on:{close:function(r){return e.closeTag(t.name)}}},[e._v(e._s(t.name))])})),e.inputVisible?r("el-autocomplete",{staticClass:"input-new-tag",attrs:{size:"mini","trigger-on-focus":!0,"fetch-suggestions":e.querySearch},on:{click:e.selectTag,select:e.addTag},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTag(t)}},model:{value:e.tagInput,callback:function(t){e.tagInput=t},expression:"tagInput"}}):r("el-tooltip",{attrs:{effect:"dark",content:e.$t("m.Add"),placement:"top"}},[r("el-button",{staticClass:"button-new-tag",attrs:{size:"small",icon:"el-icon-plus"},on:{click:function(t){e.inputVisible=!0}}})],1)],2)],1)],1),r("el-row",[r("el-col",{attrs:{md:24,xs:24}},[r("el-form-item",{attrs:{label:e.$t("m.Languages"),error:e.error.languages,required:""}},[r("el-checkbox-group",{model:{value:e.problemLanguages,callback:function(t){e.problemLanguages=t},expression:"problemLanguages"}},e._l(e.allLanguage,(function(e){return r("el-tooltip",{key:e.name,staticClass:"spj-radio",attrs:{effect:"dark",content:e.description,placement:"top-start"}},[r("el-checkbox",{attrs:{label:e.name}})],1)})),1)],1)],1)],1),r("div",[r("div",{staticClass:"panel-title home-title"},[e._v(" "+e._s(e.$t("m.Problem_Examples"))+" "),r("el-popover",{attrs:{placement:"right",trigger:"hover"}},[r("p",[e._v(" "+e._s(e.$t("m.Problem_Examples_Desc"))+" ")]),r("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})])],1),e._l(e.problem.examples,(function(t,a){return r("el-form-item",{key:"example"+a},[r("Accordion",{attrs:{title:e.$t("m.Problem_Example")+(a+1),isOpen:!!t.isOpen,index:a},on:{changeVisible:e.changeExampleVisible}},[r("el-button",{attrs:{slot:"header",type:"danger",size:"small",icon:"el-icon-delete"},on:{click:function(t){return e.deleteExample(a)}},slot:"header"},[e._v(" "+e._s(e.$t("m.Delete"))+" ")]),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{xs:24,md:12}},[r("el-form-item",{attrs:{label:e.$t("m.Example_Input"),required:""}},[r("el-input",{staticStyle:{"white-space":"pre-line"},attrs:{rows:5,type:"textarea",placeholder:e.$t("m.Example_Input")},model:{value:t.input,callback:function(r){e.$set(t,"input",r)},expression:"example.input"}})],1)],1),r("el-col",{attrs:{xs:24,md:12}},[r("el-form-item",{attrs:{label:e.$t("m.Example_Output"),required:""}},[r("el-input",{attrs:{rows:5,type:"textarea",placeholder:e.$t("m.Example_Output")},model:{value:t.output,callback:function(r){e.$set(t,"output",r)},expression:"example.output"}})],1)],1)],1)],1)],1)}))],2),r("div",{staticClass:"add-example-btn"},[r("el-button",{staticClass:"add-examples",attrs:{icon:"el-icon-plus",type:"small"},on:{click:function(t){return e.addExample()}}},[e._v(e._s(e.$t("m.Add_Example"))+" ")])],1),e.problem.isRemote?e._e():[r("div",{staticClass:"panel-title home-title"},[e._v(" "+e._s(e.$t("m.Special_Judge"))+" "),r("el-popover",{attrs:{placement:"right",trigger:"hover"}},[r("p",[e._v(e._s(e.$t("m.Special_Judge_Tips1")))]),r("p",[e._v("1. "+e._s(e.$t("m.Special_Judge_Tips2")))]),r("p",[e._v("2. "+e._s(e.$t("m.Special_Judge_Tips3")))]),r("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})])],1),r("el-form-item",{attrs:{label:"",error:e.error.spj}},[r("el-col",{attrs:{span:24}},[r("el-checkbox",{nativeOn:{click:function(t){return t.preventDefault(),e.switchSpj()}},model:{value:e.problem.spj,callback:function(t){e.$set(e.problem,"spj",t)},expression:"problem.spj"}},[e._v(e._s(e.$t("m.Use_Special_Judge")))])],1)],1),e.problem.spj?r("el-form-item",[r("Accordion",{attrs:{title:e.$t("m.Special_Judge_Code")}},[r("template",{slot:"header"},[r("span",{staticStyle:{"margin-right":"5px"}},[e._v(e._s(e.$t("m.SPJ_language"))+"：")]),r("el-radio-group",{model:{value:e.problem.spjLanguage,callback:function(t){e.$set(e.problem,"spjLanguage",t)},expression:"problem.spjLanguage"}},e._l(e.allSpjLanguage,(function(t){return r("el-tooltip",{key:t.name,staticClass:"spj-radio",attrs:{effect:"dark",content:t.description,placement:"top-start"}},[r("el-radio",{attrs:{label:t.name}},[e._v(e._s(t.name))])],1)})),1),r("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small",icon:"el-icon-folder-checked",loading:e.loadingCompile},on:{click:e.compileSPJ}},[e._v(e._s(e.$t("m.Compile"))+" ")])],1),r("code-mirror",{attrs:{mode:e.spjMode},model:{value:e.problem.spjCode,callback:function(t){e.$set(e.problem,"spjCode",t)},expression:"problem.spjCode"}})],2)],1):e._e()],r("el-form-item",{staticStyle:{"margin-top":"20px"},attrs:{label:e.$t("m.Hint")}},[r("Editor",{attrs:{value:e.problem.hint},on:{"update:value":function(t){return e.$set(e.problem,"hint",t)}}})],1),r("el-form-item",{attrs:{label:e.$t("m.Code_Template")}},[r("el-row",e._l(e.codeTemplate,(function(t,a){return r("el-col",{key:"template"+a,attrs:{span:24}},[r("el-form-item",[r("el-checkbox",{model:{value:t.status,callback:function(r){e.$set(t,"status",r)},expression:"v.status"}},[e._v(e._s(a))]),t.status?r("div",[r("code-mirror",{attrs:{mode:t.mode},model:{value:t.code,callback:function(r){e.$set(t,"code",r)},expression:"v.code"}})],1):e._e()],1)],1)})),1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("m.Type")}},[r("el-radio-group",{attrs:{disabled:e.disableRuleType||e.problem.isRemote},on:{change:e.problemTypeChange},model:{value:e.problem.type,callback:function(t){e.$set(e.problem,"type",t)},expression:"problem.type"}},[r("el-radio",{attrs:{label:0}},[e._v("ACM")]),r("el-radio",{attrs:{label:1}},[e._v("OI")])],1)],1)],1)],1),e.problem.isRemote?e._e():r("el-row",{attrs:{gutter:20}},[r("div",{staticClass:"panel-title home-title"},[e._v(" "+e._s(e.$t("m.Judge_Samples"))+" "),r("el-popover",{attrs:{placement:"right",trigger:"hover"}},[r("p",[e._v(e._s(e.$t("m.Sample_Tips")))]),r("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})])],1),r("el-switch",{staticStyle:{margin:"10px 0"},attrs:{"active-text":e.$t("m.Use_Upload_File"),"inactive-text":e.$t("m.Use_Manual_Input")},model:{value:e.problem.isUploadCase,callback:function(t){e.$set(e.problem,"isUploadCase",t)},expression:"problem.isUploadCase"}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.problem.isUploadCase,expression:"problem.isUploadCase"}]},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{error:e.error.testcase}},[r("el-upload",{attrs:{action:e.uploadFileUrl,name:"file","show-file-list":!0,"on-success":e.uploadSucceeded,"on-error":e.uploadFailed}},[r("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-upload"}},[e._v(e._s(e.$t("m.Choose_File")))])],1)],1)],1),r("el-col",{attrs:{span:24}},[r("vxe-table",{attrs:{stripe:"","auto-resize":"",data:e.problem.testCaseScore,align:"center"}},[r("vxe-table-column",{attrs:{field:"input",title:e.$t("m.Sample_Input_File"),"min-width":"100"}}),r("vxe-table-column",{attrs:{field:"output",title:e.$t("m.Sample_Output_File"),"min-width":"100"}}),r("vxe-table-column",{attrs:{field:"score",title:e.$t("m.Score"),"min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("el-input",{attrs:{size:"small",placeholder:e.$t("m.Score"),disabled:1!=e.problem.type},model:{value:a.score,callback:function(t){e.$set(a,"score",t)},expression:"row.score"}})]}}],null,!1,2438456298)})],1)],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.problem.isUploadCase,expression:"!problem.isUploadCase"}]},[e._l(e.problemSamples,(function(t,a){return r("el-form-item",{key:"sample"+a},[r("Accordion",{attrs:{title:e.$t("m.Problem_Sample")+(a+1),isOpen:!!t.isOpen,index:a},on:{changeVisible:e.changeSampleVisible}},[r("el-button",{attrs:{slot:"header",type:"danger",size:"small",icon:"el-icon-delete"},on:{click:function(t){return e.deleteSample(a)}},slot:"header"},[e._v(" "+e._s(e.$t("m.Delete"))+" ")]),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{xs:24,md:12}},[r("el-form-item",{attrs:{label:e.$t("m.Sample_Input"),required:""}},[r("el-input",{attrs:{rows:5,type:"textarea",placeholder:e.$t("m.Sample_Input")},model:{value:t.input,callback:function(r){e.$set(t,"input",r)},expression:"sample.input"}})],1)],1),r("el-col",{attrs:{xs:24,md:12}},[r("el-form-item",{attrs:{label:e.$t("m.Sample_Output"),required:""}},[r("el-input",{attrs:{rows:5,type:"textarea",placeholder:e.$t("m.Sample_Output")},model:{value:t.output,callback:function(r){e.$set(t,"output",r)},expression:"sample.output"}})],1)],1),r("el-col",{directives:[{name:"show",rawName:"v-show",value:1==e.problem.type,expression:"problem.type == 1"}],attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("m.Score")}},[r("el-input",{attrs:{type:"number",size:"small",placeholder:e.$t("m.Score")},model:{value:t.score,callback:function(r){e.$set(t,"score",r)},expression:"sample.score"}})],1)],1)],1)],1)],1)})),r("div",{staticClass:"add-sample-btn"},[r("el-button",{staticClass:"add-samples",attrs:{icon:"el-icon-plus",type:"small"},on:{click:function(t){return e.addSample()}}},[e._v(e._s(e.$t("m.Add_Sample"))+" ")])],1)],2)],1),r("el-form-item",{attrs:{label:e.$t("m.Source")}},[r("el-input",{attrs:{placeholder:e.$t("m.Source")},model:{value:e.problem.source,callback:function(t){e.$set(e.problem,"source",t)},expression:"problem.source"}})],1),e.problem.isRemote?e._e():r("el-form-item",{attrs:{label:e.$t("m.Auto_Remove_the_Blank_at_the_End_of_Code")}},[r("el-switch",{attrs:{"active-text":"","inactive-text":""},model:{value:e.problem.isRemoveEndBlank,callback:function(t){e.$set(e.problem,"isRemoveEndBlank",t)},expression:"problem.isRemoveEndBlank"}})],1),e.problem.isRemote?e._e():r("el-form-item",{attrs:{label:e.$t("m.Publish_the_Judging_Result_of_Test_Data")}},[r("el-switch",{attrs:{"active-text":"","inactive-text":""},model:{value:e.problem.openCaseResult,callback:function(t){e.$set(e.problem,"openCaseResult",t)},expression:"problem.openCaseResult"}})],1),r("el-button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(t){return e.submit()}}},[e._v(e._s(e.$t("m.Save")))])],2)],1)],1)}),[],!1,null,"2a60e228",null);t.default=a.exports}}]);