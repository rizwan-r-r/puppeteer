"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89719],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),m=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=m(e.components);return a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(t),f=n,g=s["".concat(l,".").concat(f)]||s[f]||u[f]||p;return t?a.createElement(g,i(i({ref:r},c),{},{components:t})):a.createElement(g,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=s;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<p;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},46967:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var a=t(87462),n=(t(67294),t(3905));const p={sidebar_label:"Page.mainFrame"},i="Page.mainFrame() method",o={unversionedId:"api/puppeteer.page.mainframe",id:"version-16.1.1/api/puppeteer.page.mainframe",title:"Page.mainFrame() method",description:"Signature:",source:"@site/versioned_docs/version-16.1.1/api/puppeteer.page.mainframe.md",sourceDirName:"api",slug:"/api/puppeteer.page.mainframe",permalink:"/api/puppeteer.page.mainframe",draft:!1,tags:[],version:"16.1.1",frontMatter:{sidebar_label:"Page.mainFrame"},sidebar:"sidebar",previous:{title:"Page.keyboard",permalink:"/api/puppeteer.page.keyboard"},next:{title:"Page",permalink:"/api/puppeteer.page"}},l={},m=[{value:"Remarks",id:"remarks",level:2}],c={toc:m};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pagemainframe-method"},"Page.mainFrame() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  mainFrame(): Frame;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.frame"},"Frame")),(0,n.kt)("p",null,"The page's main frame."),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Page is guaranteed to have a main frame which persists during navigations."))}u.isMDXComponent=!0}}]);