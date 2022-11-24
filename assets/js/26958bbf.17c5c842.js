"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24680],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,p=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=i(r),m=s,y=f["".concat(u,".").concat(m)]||f[m]||l[m]||p;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var p=r.length,o=new Array(p);o[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var i=2;i<p;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},72598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const o={sidebar_label:"HTTPResponse.status"},a="HTTPResponse.status() method",u={unversionedId:"api/puppeteer.httpresponse.status",id:"api/puppeteer.httpresponse.status",title:"HTTPResponse.status() method",description:"Signature:",source:"@site/../docs/api/puppeteer.httpresponse.status.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.status",permalink:"/next/api/puppeteer.httpresponse.status",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"HTTPResponse.status"},sidebar:"api",previous:{title:"HTTPResponse.securityDetails",permalink:"/next/api/puppeteer.httpresponse.securitydetails"},next:{title:"HTTPResponse.statusText",permalink:"/next/api/puppeteer.httpresponse.statustext"}},i={},c=[{value:"Signature:",id:"signature",level:4}],l={toc:c};function f(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",s({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"httpresponsestatus-method"}),"HTTPResponse.status() method"),(0,n.kt)("h4",s({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-typescript"}),"class HTTPResponse {\n  status(): number;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"number"),(0,n.kt)("p",null,"The status code of the response (e.g., 200 for a success)."))}f.isMDXComponent=!0}}]);