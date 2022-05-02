(function(){"use strict";var t={3927:function(t,e,n){var i=n(144),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{staticClass:"hero",attrs:{"fill-height":"",fluid:"",align:"center",justify:"center"}},[n("v-row",[n("v-col",{attrs:{align:"center"}},[n("v-card",{staticStyle:{width:"600px"}},[n("v-row",[n("v-col",{attrs:{align:"left"}},[n("v-file-input",{staticStyle:{width:"300px","margin-left":"20px","margin-top":"8px"},attrs:{"truncate-length":"50",accept:".zip"},on:{change:t.fileChange}})],1),n("v-col",{attrs:{align:"right"}},[n("v-card-actions",[n("v-btn",{staticStyle:{"margin-top":"10px"},attrs:{color:"info",loading:t.loading_results,disabled:t.disabled_results},on:{click:t.getResults}},[t._v(" Results ")]),n("v-btn",{staticStyle:{"margin-top":"10px"},attrs:{color:"info",loading:t.loading_pdf,disabled:t.disabled_pdf},on:{click:t.getPDF}},[t._v(" PDF Report ")])],1)],1)],1),t.visible_results?n("v-row",[n("v-col",[n("pre",{staticStyle:{"text-align":"left","margin-left":"30px","margin-bottom":"20px"}},[t._v(t._s(t._f("pretty")(t.text)))])])],1):t._e()],1)],1)],1)],1)],1)},l=[],o=n(9669),s=n.n(o),a={name:"App",data(){return{loading_results:!1,loading_pdf:!1,disabled_results:!0,disabled_pdf:!0,file:"",visible_results:!1,text:""}},filters:{pretty:function(t){return JSON.stringify(JSON.parse(t),null,2)}},methods:{fileChange(t){this.file=t,null!=this.file?(this.disabled_results=!1,this.disabled_pdf=!1):(this.disabled_results=!0,this.disabled_pdf=!0,this.visible_results=!1)},getResults:function(){this.loading_results=!0,this.disabled_pdf=!0;let t=new FormData;t.append("file",this.file),s().post("http://winstonlutz.herokuapp.com/results/",t,{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"multipart/form-data"}}).then((t=>{console.log(JSON.stringify(t.data)),this.text=JSON.stringify(t.data,null,2),this.loading_results=!1,this.disabled_pdf=!1,this.visible_results=!0})).catch((t=>{console.log(t),this.loading_results=!1,this.disabled_pdf=!1}))},getPDF:function(){this.loading_pdf=!0,this.disabled_results=!0;let t=new FormData;t.append("file",this.file),s().post("http://winstonlutz.herokuapp.com/pdf/",t,{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"multipart/form-data"}}).then((t=>{this.loading_pdf=!1,this.disabled_results=!1;const e=window.URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,document.body.appendChild(n),n.click()})).catch((t=>{console.log(t),this.loading_pdf=!1,this.disabled_results=!1}))}}},d=a,u=n(1001),c=n(3453),f=n.n(c),p=n(7524),h=n(680),g=n(3237),v=n(7118),b=n(2102),_=n(247),y=n(9025),m=n(2877),w=(0,u.Z)(d,r,l,!1,null,"20d00767",null),O=w.exports;f()(w,{VApp:p.Z,VBtn:h.Z,VCard:g.Z,VCardActions:v.h7,VCol:b.Z,VContainer:_.Z,VFileInput:y.Z,VRow:m.Z});var x=n(1910);i.Z.use(x.Z);var C=new x.Z({});i.Z.config.productionTip=!1,new i.Z({vuetify:C,render:t=>t(O)}).$mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var l=e[i]={exports:{}};return t[i](l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,l){if(!i){var o=1/0;for(u=0;u<t.length;u++){i=t[u][0],r=t[u][1],l=t[u][2];for(var s=!0,a=0;a<i.length;a++)(!1&l||o>=l)&&Object.keys(n.O).every((function(t){return n.O[t](i[a])}))?i.splice(a--,1):(s=!1,l<o&&(o=l));if(s){t.splice(u--,1);var d=r();void 0!==d&&(e=d)}}return e}l=l||0;for(var u=t.length;u>0&&t[u-1][2]>l;u--)t[u]=t[u-1];t[u]=[i,r,l]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,l,o=i[0],s=i[1],a=i[2],d=0;if(o.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(a)var u=a(n)}for(e&&e(i);d<o.length;d++)l=o[d],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(u)},i=self["webpackChunkwl_front"]=self["webpackChunkwl_front"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3927)}));i=n.O(i)})();
//# sourceMappingURL=app.ab52db39.js.map