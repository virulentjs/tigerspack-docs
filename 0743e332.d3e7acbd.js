(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return y})),n.d(t,"rightToc",(function(){return B})),n.d(t,"default",(function(){return h}));var o=n(1),r=n(9),u=n(0),a=n.n(u),c=n(173),i=n(178),d=n(16),m=n.n(d),b=n(181),l=function(e){var t=e.children,n=Object(r.a)(e,["children"]);return a.a.createElement("div",{style:{padding:"5px",display:"inline-block"}},a.a.createElement(b.Button,n,t))};l.propTypes={type:m.a.oneOf(["button","submit","reset"]),scales:m.a.oneOf(["small","normal","big"]),theme:m.a.oneOf(["primary","secondary","cancel","dark","gray"]),outline:m.a.bool},l.defaultProps={scales:"normal",theme:"primary",outline:!1};var p=l,s={id:"button",title:"Button",sidebar_label:"Button"},y={id:"components/button",title:"Button",description:"import Playground from './Playground'",source:"@site/docs/components/button.mdx",permalink:"/docs/components/button",editUrl:"https://github.com/tigerspack/tigerspack-docs/edit/master/docs/components/button.mdx",sidebar_label:"Button",sidebar:"someSidebar",previous:{title:"Alert",permalink:"/docs/components/alert"},next:{title:"Card",permalink:"/docs/components/card"}},B=[{value:"Default button",id:"default-button",children:[]},{value:"Rounded buttons",id:"rounded-buttons",children:[]},{value:"Text buttons",id:"text-buttons",children:[]},{value:"Outline buttons",id:"outline-buttons",children:[]},{value:"Sizes",id:"sizes",children:[]},{value:"Disabled",id:"disabled",children:[]}],O={rightToc:B};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Buttons make common actions more obvious and help users more easily perform them. Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them."),Object(c.b)("h2",{id:"default-button"},"Default button"),Object(c.b)(i.a,{mdxType:"Playground"},Object(c.b)(p,{theme:"primary",mdxType:"Button"},"Primary"),Object(c.b)(p,{theme:"yellow",mdxType:"Button"},"Yellow"),Object(c.b)(p,{theme:"danger",mdxType:"Button"},"Danger"),Object(c.b)(p,{theme:"warning",mdxType:"Button"},"Warning"),Object(c.b)(p,{theme:"success",mdxType:"Button"},"Success"),Object(c.b)(p,{theme:"info",mdxType:"Button"},"Info"),Object(c.b)(p,{theme:"dark",mdxType:"Button"},"Dark"),Object(c.b)(p,{theme:"light",mdxType:"Button"},"Light")),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Button theme="primary">Primary</Button>\n<Button theme="yellow">Yellow</Button>\n<Button theme="danger">Danger</Button>\n<Button theme="warning">Warning</Button>\n<Button theme="success">Success</Button>\n<Button theme="info">Info</Button>\n<Button theme="dark">Dark</Button>\n<Button theme="light">Light</Button>\n')),Object(c.b)("h2",{id:"rounded-buttons"},"Rounded buttons"),Object(c.b)(i.a,{mdxType:"Playground"},Object(c.b)(p,{type:"rounded",theme:"primary",mdxType:"Button"},"Primary"),Object(c.b)(p,{type:"rounded",theme:"yellow",mdxType:"Button"},"Yellow"),Object(c.b)(p,{type:"rounded",theme:"danger",mdxType:"Button"},"Danger"),Object(c.b)(p,{type:"rounded",theme:"warning",mdxType:"Button"},"Warning"),Object(c.b)(p,{type:"rounded",theme:"success",mdxType:"Button"},"Success"),Object(c.b)(p,{type:"rounded",theme:"info",mdxType:"Button"},"Info"),Object(c.b)(p,{type:"rounded",theme:"dark",mdxType:"Button"},"Dark"),Object(c.b)(p,{type:"rounded",theme:"light",mdxType:"Button"},"Light")),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Button type="rounded" theme="primary">Primary</Button>\n<Button type="rounded" theme="yellow">Yellow</Button>\n<Button type="rounded" theme="danger">Danger</Button>\n<Button type="rounded" theme="warning">Warning</Button>\n<Button type="rounded" theme="success">Success</Button>\n<Button type="rounded" theme="info">Info</Button>\n<Button type="rounded" theme="dark">Dark</Button>\n<Button type="rounded" theme="light">Light</Button>\n')),Object(c.b)("h2",{id:"text-buttons"},"Text buttons"),Object(c.b)(i.a,{mdxType:"Playground"},Object(c.b)(p,{type:"text",theme:"primary",mdxType:"Button"},"Primary"),Object(c.b)(p,{type:"text",theme:"danger",mdxType:"Button"},"Danger"),Object(c.b)(p,{type:"text",theme:"warning",mdxType:"Button"},"Warning"),Object(c.b)(p,{type:"text",theme:"success",mdxType:"Button"},"Success"),Object(c.b)(p,{type:"text",theme:"info",mdxType:"Button"},"Info")),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Button type="text" theme="primary">Primary</Button>\n<Button type="text" theme="danger">Danger</Button>\n<Button type="text" theme="warning">Warning</Button>\n<Button type="text" theme="success">Success</Button>\n<Button type="text" theme="info">Info</Button>\n')),Object(c.b)("h2",{id:"outline-buttons"},"Outline buttons"),Object(c.b)(i.a,{mdxType:"Playground"},Object(c.b)(p,{type:"outline",theme:"primary",mdxType:"Button"},"Primary"),Object(c.b)(p,{type:"outline",theme:"danger",mdxType:"Button"},"Danger"),Object(c.b)(p,{type:"outline",theme:"warning",mdxType:"Button"},"Warning"),Object(c.b)(p,{type:"outline",theme:"success",mdxType:"Button"},"Success"),Object(c.b)(p,{type:"outline",theme:"info",mdxType:"Button"},"Info")),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Button type="outline" theme="primary">Primary</Button>\n<Button type="outline" theme="danger">Danger</Button>\n<Button type="outline" theme="warning">Warning</Button>\n<Button type="outline" theme="success">Success</Button>\n<Button type="outline" theme="info">Info</Button>\n')),Object(c.b)("h2",{id:"sizes"},"Sizes"),Object(c.b)(i.a,{mdxType:"Playground"},Object(c.b)(p,{size:"small",mdxType:"Button"},"Small"),Object(c.b)(p,{size:"medium",mdxType:"Button"},"Medium"),Object(c.b)(p,{size:"large",mdxType:"Button"},"Large")),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Button size="small">Small</Button>\n<Button size="medium">Medium</Button>\n<Button size="large">Large</Button>\n')),Object(c.b)("h2",{id:"disabled"},"Disabled"),Object(c.b)(i.a,{mdxType:"Playground"},Object(c.b)(p,{disabled:!0,mdxType:"Button"},"Primary"),Object(c.b)(p,{disabled:!0,type:"rounded",mdxType:"Button"},"Primary"),Object(c.b)(p,{disabled:!0,type:"text",mdxType:"Button"},"Primary"),Object(c.b)(p,{disabled:!0,type:"outline",mdxType:"Button"},"Primary")),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Button disabled>Primary</Button>\n<Button disabled type="rounded">Primary</Button>\n<Button disabled type="text">Primary</Button>\n<Button disabled type="outline">Primary</Button>\n')))}h.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var o=n(0),r=n.n(o);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),m=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=m(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),b=m(n),p=o,s=b["".concat(a,".").concat(p)]||b[p]||l[p]||u;return n?r.a.createElement(s,c({ref:t},d,{components:n})):r.a.createElement(s,c({ref:t},d))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<u;d++)a[d]=n[d];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";var o=n(0),r=n.n(o);t.a=function(e){var t=e.children;if("undefined"==typeof window)return null;return r.a.createElement("div",{style:{border:"1px solid rgba(125,125,125,0.3)",borderBottom:"none",borderRadius:"5px 5px 0 0",padding:"10px"}},t)}}}]);