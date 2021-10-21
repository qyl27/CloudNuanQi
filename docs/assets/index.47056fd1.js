import{o as l,c as u,F as c,a as s,b as d,t as f,d as h,e as _}from"./vendor.773d758d.js";const m=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};m();var g="/assets/heater.c5ee62e8.png";var p=(r,n)=>{for(const[a,o]of n)r[a]=o;return r};const b={name:"HeaterImg"},v={id:"heater",src:g,alt:"\u4E91\u6696\u6C14\uFF08\u56FE\u7247\u6765\u6E90\u4E8E\u7F51\u7EDC\uFF09",title:"\u4E91\u6696\u6C14\uFF08\u56FE\u7247\u6765\u6E90\u4E8E\u7F51\u7EDC\uFF09"};function y(r,n,a,o,e,t){return l(),u("img",v)}var $=p(b,[["render",y],["__scopeId","data-v-bc7e3e8e"]]);const x={name:"Title"},F=s("h1",null,"\u4E91\u6696\u6C14",-1),C=s("h2",null,"\u4E91\u4E0A\u7684\u6696\u6C14\uFF0C\u4F60\u6211\u5171\u4EAB\uFF01",-1),I=s("p",null,[d(" \u7F34\u7EB3\u53D6\u6696\u8D39\u540E\u70B9\u51FB\u5F00\u59CB\u4F9B\u6696\u6309\u94AE\u5373\u53EF\u53D6\u6696\u3002"),s("br"),s("small",null,"\u7248\u672C\uFF1A1.0")],-1);function N(r,n,a,o,e,t){return l(),u(c,null,[F,C,I],64)}var k=p(x,[["render",N]]);const E={name:"HeatingCharge",data:function(){return{text:"\u5F00\u59CB\u4F9B\u6696",enabled:!1,temperature:-15,charge:0,has_alerted_35:!1,has_alerted_nega100:!1}},methods:{onCharge:function(r){this.charge+=100},toggleEnabled:function(r){if(this.enabled=!this.enabled,this.enabled)if(this.charge-.2>0){this.text="\u505C\u6B62\u4F9B\u6696",alert("\u4F9B\u6696\u5DF2\u5F00\u59CB\uFF0C\u62B1\u4F4F\u4F60\u7684\u8BBE\u5907\u5C31\u80FD\u611F\u53D7\u5230\u6E29\u6696\u5566ww");return}else alert("\u8BF7\u7F34\u7EB3\u53D6\u6696\u8D39\uFF01");this.stop()},stop(){this.enabled=!1,this.text="\u5F00\u59CB\u4F9B\u6696"}},mounted(){setInterval(function(){if(this.enabled)if(this.charge-.2>=0)this.temperature+=.01,this.charge-=.2;else{this.stop();return}else if(this.temperature>=-273.15){this.temperature-=.005;return}this.enabled&&this.temperature.toFixed(2)==="35.00"&&alert("\u6696\u6C14\u5DF2\u7ECF\u6BD4\u7535\u8111\u8FD8\u70ED\u4E86\u3002"),this.enabled&&this.temperature.toFixed(2)==="60.00"&&(confirm("\u518D\u8FD9\u6837\u5B50\u4E0B\u53BB\u5C31\u8981\u88AB\u70E7\u719F\u5566\uFF01\u8FD8\u8981\u7EE7\u7EED\u4E48\uFF1F")||this.stop()),this.enabled&&this.temperature.toFixed(2)==="100.00"&&alert("\u5927\u51AC\u5929\u7684\uFF0C\u4E00\u5B9A\u8981\u591A\u559D\u5F00\u6C34\u3002")}.bind(this),1e3)}},H=s("br",null,null,-1),L=s("span",null," | ",-1);function O(r,n,a,o,e,t){return l(),u(c,null,[s("p",null,[d(" \u53D6\u6696\u8D39\uFF1A\uFFE5 "+f(r.charge.toFixed(2))+" ",1),H,d(" \u5BA4\u5185\u6E29\u5EA6\uFF1A"+f(r.temperature.toFixed(2))+" \u2103 ",1)]),s("button",{onClick:n[0]||(n[0]=(...i)=>t.onCharge&&t.onCharge(...i))},"\u4EA4\u53D6\u6696\u8D39"),L,s("button",{onClick:n[1]||(n[1]=(...i)=>t.toggleEnabled&&t.toggleEnabled(...i))},f(r.text),1)],64)}var w=p(E,[["render",O]]);const A={setup(r){return(n,a)=>(l(),u(c,null,[h(k),h($),h(w)],64))}};_(A).mount("#app");
