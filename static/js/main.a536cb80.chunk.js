(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(5),s=n(1),b=(n(10),n(11),n(12),n(4)),r=n.n(b);function d(t,e){return t.find((function(t){return t.id===e}))||t[0]}var o=n(0),l=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,a=function(t){return d(e,n).id===t};return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.title;return Object(o.jsx)("li",{className:r()({"is-active":a(e)}),"data-cy":"Tab",children:Object(o.jsx)("a",{href:"#".concat(e),"data-cy":"TabLink",onClick:function(){return function(t,e){a(t)||c(e)}(e,t)},children:n})},e)}))})}),Object(o.jsx)("div",{className:"block fancy-text","data-cy":"TabContent",children:d(e,n).content})]})},u=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)("tab-1"),e=Object(i.a)(t,2),n=e[0],c=e[1],a=d(u,n);return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(a.title)}),Object(o.jsx)(l,{tabs:u,selectedTabId:n,onTabSelected:function(t){var e=t.id;c(e)}})]})};a.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a536cb80.chunk.js.map