(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1:function(e,n,t){"use strict";var a=t(0),r=t.n(a),c=t(4),i=t.n(c);function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],a=!0,r=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o={Tile:function(e){var n=e.x,t=e.y,c=e.delayIndex,i=l(Object(a.useState)(!1),2),o=i[0],u=i[1];return r.a.createElement("polygon",{className:"tile ".concat(o?"hover":""),points:"".concat(n," ").concat(t,", ").concat(n," ").concat(t+10,", ").concat(n+10," ").concat(t+10,", ").concat(n+10," ").concat(t),style:{animationDelay:.1*c+"s"},onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return setTimeout(function(){return u(!1)},150)}})},Hline:function(e){var n=e.y,t=e.width,a=e.delay,c=void 0===a?.1:a,i=e.delayIndex;return r.a.createElement("path",{className:"lh",d:"M0 ".concat(10*n+10," H").concat(t),style:{animationDelay:i*c+"s"}})},HLines:function(e){var n=e.n,t=e.width,a=e.delay,c=e.reverse;return i.a.range(n).map(function(e,i){return r.a.createElement(o.Hline,{key:i,y:e,width:t,delay:a,delayIndex:c?n-i:i})})},Vline:function(e){var n=e.x,t=e.height,a=e.delay,c=void 0===a?.1:a,i=e.delayIndex;return r.a.createElement("path",{className:"lv",d:"M".concat(10*n+10," 0 V").concat(t),style:{animationDelay:i*c+"s"}})},VLines:function(e){var n=e.n,t=e.height,a=e.delay,c=e.reverse;return i.a.range(n).map(function(e,i){return r.a.createElement(o.Vline,{key:i,x:e,height:t,delay:a,delayIndex:c?n-i:i})})}};n.a=o},539:function(e,n,t){__NEXT_REGISTER_PAGE("/",function(){return e.exports=t(554),{page:e.exports.default}})},554:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=(t(4),t(7)),i=t(1),l=t(8),o=t(67),u=t(68),s=t(5);function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],a=!0,r=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(e){var n=e.pageName,t=s.a[n];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,t),r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"shadow"}),r.a.createElement("div",{className:"tani"},r.a.createElement("svg",{viewBox:"0 0 130 130",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement(i.a.HLines,{n:12,width:130,reverse:!0}),r.a.createElement(i.a.VLines,{n:12,height:130,reverse:!0}),[[40,80],[50,80],[60,80],[70,80],[80,80],[80,70],[80,60],[80,50],[80,40],[70,40],[60,40],[50,40],[40,40],[40,50],[40,60],[50,60],[60,60]].map(function(e,n){var t=d(e,2),a=t[0],c=t[1];return r.a.createElement(i.a.Tile,{key:n,x:a,y:c,delayIndex:n})}))),r.a.createElement("div",{className:"places animated fadeIn slower"},r.a.createElement(l.a,{nologo:!0})),r.a.createElement("div",{className:"social-media animated fadeIn slower"},r.a.createElement(o.a,{accent:!0}),r.a.createElement(u.a,{className:"hide-sm"}))))};n.default=function(){return r.a.createElement(m,{pageName:"index"})}}},[[539,1,0]]]);