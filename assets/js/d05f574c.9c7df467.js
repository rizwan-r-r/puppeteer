"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[150201],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(r),f=n,d=c["".concat(l,".").concat(f)]||c[f]||s[f]||o;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},697540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=r(487462),n=(r(667294),r(603905));const o={sidebar_label:"Frame.waitForTimeout"},i="Frame.waitForTimeout() method",p={unversionedId:"api/puppeteer.frame.waitfortimeout",id:"version-15.3.0/api/puppeteer.frame.waitfortimeout",title:"Frame.waitForTimeout() method",description:"Causes your script to wait for the given number of milliseconds.",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.frame.waitfortimeout.md",sourceDirName:"api",slug:"/api/puppeteer.frame.waitfortimeout",permalink:"/15.3.0/api/puppeteer.frame.waitfortimeout",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"Frame.waitForTimeout"},sidebar:"sidebar",previous:{title:"Frame.waitForSelector_1",permalink:"/15.3.0/api/puppeteer.frame.waitforselector_1"},next:{title:"Frame.waitForXPath",permalink:"/15.3.0/api/puppeteer.frame.waitforxpath"}},l={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],u={toc:m};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"framewaitfortimeout-method"},"Frame.waitForTimeout() method"),(0,n.kt)("p",null,"Causes your script to wait for the given number of milliseconds."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  waitForTimeout(milliseconds: number): Promise<void>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"milliseconds"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"the number of milliseconds to wait.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"It's generally recommended to not wait for a number of seconds, but instead use , ",(0,n.kt)("a",{parentName:"p",href:"/15.3.0/api/puppeteer.frame.waitforxpath"},"Frame.waitForXPath()")," or ",(0,n.kt)("a",{parentName:"p",href:"/15.3.0/api/puppeteer.frame.waitforfunction"},"Frame.waitForFunction()")," to wait for exactly the conditions you want."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Wait for 1 second:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"await frame.waitForTimeout(1000);\n")))}s.isMDXComponent=!0}}]);