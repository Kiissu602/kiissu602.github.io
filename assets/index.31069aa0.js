import{o as d,c as l,p as u,a as v,b as a,r as _,d as c,e as m,l as h,_ as g,f as $,g as b,F as y}from"./vendor.ce503fa9.js";const k=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};k();var w="/assets/profile_pic.9bb4f42a.jpg";var p=(s,n)=>{const i=s.__vccOpts||s;for(const[r,e]of n)i[r]=e;return i};const x={},I=s=>(u("data-v-0c206074"),s=s(),v(),s),D=I(()=>a("img",{src:w,alt:"",class:"profile"},null,-1)),N=[D];function S(s,n){return d(),l("div",null,N)}var C=p(x,[["render",S],["__scopeId","data-v-0c206074"]]);const A={components:{Image:C}},F={class:"details-box"},L=a("div",{class:"details"},[a("div",{class:"name"},"Pichai Namwan"),a("div",null,"Full Stack Developer"),a("div",null,"Newly Graduate From Chaingmai University")],-1);function O(s,n,i,r,e,o){const t=_("Image");return d(),l("div",F,[a("div",null,[c(t)]),L])}var B=p(A,[["render",O]]);const P={},V={class:"contact-box"},E={class:"contact"},K={class:"ico"},M=m('<div class="text" data-v-2d1a38ce><div data-v-2d1a38ce>Chomphu Saraphi Chiang Mai</div><a href="tel:0612705695" data-v-2d1a38ce><div class="tel" data-v-2d1a38ce>061-2705695</div></a><a href="mailto:pichai.n602@gmail.com" data-v-2d1a38ce><div class="email" data-v-2d1a38ce>pichai.n602@gmail.com</div></a></div>',1),j={class:"clickable"},q={href:"https://www.facebook.com/poolmean.devil",target:"_blank"},G={href:"https://www.instagram.com/_mi.nie/?hl=en",target:"_blank"},U={href:"https://github.com/Kiissu602",target:"_blank"},z={href:"https://www.linkedin.com/in/pichai-namwan-193a96234",target:"_blank"};function H(s,n,i,r,e,o){const t=_("fa");return d(),l("div",V,[a("div",E,[a("div",K,[a("div",null,[c(t,{icon:["fas","location-pin"],class:"fai"})]),a("div",null,[c(t,{icon:["fas","phone"],class:"fai"})]),a("div",null,[c(t,{icon:["fas","envelope"],class:"fai"})])]),M]),a("div",j,[a("a",q,[c(t,{icon:["fab","facebook"],class:"fai facebook"})]),a("a",G,[c(t,{icon:["fab","instagram"],class:"fai instagram"})]),a("a",U,[c(t,{icon:["fab","github"],class:"fai github"})]),a("a",z,[c(t,{icon:["fab","linkedin"],class:"fai linkedin"})])])])}var J=p(P,[["render",H],["__scopeId","data-v-2d1a38ce"]]);const Q={components:{Details:B,Ico:J}},R={class:"card"},T={class:"card-title"};function W(s,n,i,r,e,o){const t=_("Details"),f=_("Ico");return d(),l("div",R,[a("div",T,[c(t),c(f)])])}var X=p(Q,[["render",W],["__scopeId","data-v-6b4426b8"]]);const Y={components:{Desktop:X}};function Z(s,n,i,r,e,o){const t=_("Desktop");return d(),l("main",null,[c(t)])}var ee=p(Y,[["render",Z]]);h.add(g,$);b(ee).component("fa",y).mount("#app");
