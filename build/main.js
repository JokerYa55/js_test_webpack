(()=>{"use strict";var e={99:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"body{background-color:#000}#app{margin-bottom:20px}#form1_id{display:flex;flex-direction:column;background-color:aqua;height:500px}.inputItem{margin-top:5px;margin-bottom:5px;margin-left:5px}.promt-style{background-color:#ff0;position:fixed;right:35%;top:15%;width:347px;height:160px;display:block;z-index:99999999}",""]);const i=o},28:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"p {\r\n    color: red;\r\n}",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],l=i[s]||0,d="".concat(s," ").concat(l);i[s]=l+1;var p=n(d),f={css:u[1],media:u[2],sourceMap:u[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:d,updater:o(f,r),references:1}),a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var u=r(e,o),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),u=n.n(c),s=n(216),l=n.n(s),d=n(589),p=n.n(d),f=n(28),m={};m.styleTagTransform=p(),m.setAttributes=u(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var v=n(99),h={};function b(e,t){var n=document.createElement("div");return n.id=e,null!=t&&""!==t&&(n.className=t),n}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),e}h.styleTagTransform=p(),h.setAttributes=u(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;var E=function(){function e(t){y(this,e),this.baseElement=t}return x(e,[{key:"show",value:function(){var e=b("form1_id"),t=b("input","inputItem"),n=b("input","inputItem"),r=b("button","inputItem"),o=document.createElement("input");o.type="text",o.id="username_id",t.append(o);var i=document.createElement("input");i.type="password",i.id="password_id",n.append(i);var a=document.createElement("button");a.innerText="test",a.addEventListener("click",(function(){console.log("button"),(new w).show()})),r.append(a),e.append(t),e.append(n),e.append(r),this.baseElement.append(e)}},{key:"clear",value:function(){for(;this.baseElement.firstChild;)this.baseElement.firstChild.remove()}}]),e}(),w=function(){function e(){y(this,e)}return x(e,[{key:"show",value:function(){var e=b("promt_id","promt-style");e.innerText="test",document.body.append(e)}},{key:"hide",value:function(){}}]),e}(),k=document.getElementById("app");console.log(k);var I=new E(k);document.getElementById("btn1").addEventListener("click",(function(){console.log("btn1"),I.show()})),document.getElementById("btn2").addEventListener("click",(function(){I.clear(),console.log("btn2")})),document.getElementById("btn3").addEventListener("click",(function(){console.log("btn3")}))})()})();