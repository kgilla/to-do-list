!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=9)}([function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function d(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],s=n.base?a[0]+n.base:a[0],c=t[s]||0,l="".concat(s," ").concat(c);t[s]=c+1;var u=d(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:b(f,n),references:1}),r.push(l)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function m(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var g=null,p=0;function b(e,n){var t,r,o;if(n.singleton){var a=p++;t=g||(g=c(n)),r=f.bind(null,t,a,!1),o=f.bind(null,t,a,!0)}else t=c(n),r=m.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=d(t[r]);i[o].references--}for(var a=s(e,n),c=0;c<t.length;c++){var l=d(t[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=a}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,d=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([o]).join("\n")}var i,d,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){var r=t(0),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]),e.exports=n},function(e,n,t){var r=t(0),o=t(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,n,t){var r=t(1),o=t(6),a=t(7),i=t(8);n=r(!1);var d=o(a),s=o(i);n.push([e.i,'@font-face {\n  font-family: "myFont";\n  src: url('+d+"), url("+s+');\n  font-weight: 600;\n  font-style: normal;\n}\n\nhtml {\n  font-size: 16px;\n}\n\n* {\n  line-height: 1.5;\n  box-sizing: border-box;\n  font-family: "myFont";\n  color: #222;\n}\n\nbody {\n  display: grid;\n  min-height: 100vh;\n  max-width: 100vw;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 5rem 5rem 1fr;\n  font-family: "myFont";\n  color: rgb(74, 95, 120);\n  box-sizing: border-box;\n}\n\n/* top header */\n\n#top-banner {\n  height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-area: 1/1/2/6;\n  background: rgb(24, 37, 56);\n}\n\n#brand {\n  color: #fff;\n  font-size: 2.5rem;\n  text-decoration: none;\n}\n\n/* sub-header */\n\n#sub-header {\n  grid-area: 2/1/3/6;\n  display: grid;\n  align-self: center;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 5rem;\n  background: #203148;\n}\n\n#project-header-box {\n  grid-column: 1/2;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n#new-project-header {\n  color: #fff;\n  font-size: 1.8rem;\n}\n\n#new-project {\n  padding: 0.333rem 0.666rem;\n  background: #0288d1;\n  border: #039be5 solid 0.1rem;\n  border-radius: 50%;\n  text-decoration: none;\n  color: #fff;\n  font-size: 2rem;\n}\n\n/* green hovers */\n#new-project:hover,\n.save-changes:hover,\n#new-task:hover,\n#form-submit:hover {\n  background: #039be5;\n}\n\n#new-task {\n  grid-column: 5/ 6;\n  place-self: center;\n  width: 66%;\n  height: 50%;\n  background: #0288d1;\n  border: #039be5 solid 0.1rem;\n  border-radius: 0.25rem;\n  color: #fff;\n  font-size: 1.5rem;\n}\n\n/* side nav */\n\n#side-nav {\n  grid-area: 3/1/8/2;\n  border-right: solid 0.1rem #d4e6f1;\n  padding: 0.5rem;\n  overflow: hidden;\n}\n\n#project-form {\n  flex: 1;\n  padding: 0.5rem;\n  margin: 0.5rem 0;\n  border: 0.1rem solid #aaa;\n  border-radius: 0.25rem;\n  font-size: 1rem;\n}\n\n#projects {\n  display: flex;\n  flex-direction: column;\n}\n\n.project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1.2rem;\n  text-decoration: none;\n  padding: 0.8rem 0.4rem;\n  margin: 0.2rem 0;\n}\n\n.project:hover {\n  background: #d4e6f1;\n  border-radius: 0.25rem;\n}\n\n/* main stuff */\n\n#main {\n  grid-area: 3/2/8/6;\n  font-family: "myFont";\n}\n\n#project-heading {\n  font-size: 2rem;\n}\n\n#content,\n#project-heading {\n  margin: 2vw 5vw;\n}\n\n/* task stuff */\n\n.task-box {\n  box-shadow: 0 4px 2px -2px #aaa;\n}\n\n/* regular task size */\n.task-regular {\n  display: grid;\n  grid-template-columns: 5rem repeat(1, 1fr);\n  grid-template-rows: 5rem;\n  align-items: center;\n  margin: 1rem 0;\n  background: #fff;\n}\n.task-regular:hover {\n}\n\n.complete-button {\n  grid-column: 1/2;\n  height: 50%;\n  width: 50%;\n  place-self: center;\n  border: 0.2rem solid #aaa;\n  border-radius: 50%;\n  outline: none;\n}\n\n.title-regular {\n  grid-column: 2/4;\n  padding: 0 2rem;\n  font-size: 1.5rem;\n}\n\n.date-regular {\n  grid-column: 4/6;\n  padding: 0 2rem;\n  font-size: 1.5rem;\n  color: #555;\n}\n\n/* expanded task */\n\n.task-expanded {\n  height: 15rem;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  grid-gap: 0.2rem;\n  padding: 0.5rem;\n  border: 0.1rem solid #ddd;\n  border-radius: 0.25rem;\n  background: #fff;\n}\n\n.title-expanded {\n  grid-area: 1/1/2/4;\n  font-size: 1.8rem;\n  place-self: center;\n}\n\n.date-expanded {\n  grid-area: 3/1/4/2;\n  border: 0.1rem solid #aaa;\n  border-radius: 0.25rem;\n  font-size: 1.2rem;\n}\n\n.description-expanded {\n  grid-area: 1/4/7/7;\n  padding: 0.5rem;\n  border: 0.1rem solid #aaa;\n  border-radius: 0.25rem;\n  resize: none;\n  font-size: 1.2rem;\n}\n\n.save-changes {\n  grid-area: 5/1/6/3;\n  background: #0288d1;\n  border: #039be5 solid 0.1rem;\n  border-radius: 0.25rem;\n  color: #fff;\n  font-size: 1.2rem;\n}\n\n.delete-task {\n  grid-area: 5/3/6/4;\n  width: 60%;\n  justify-self: center;\n  background: #a93226;\n  border: 0.1rem solid #ddd;\n  border-radius: 0.25rem;\n  color: #fff;\n  font-size: 1.2rem;\n}\n.grow {\n}\n\n.text-done {\n  text-decoration: line-through;\n}\n\n.task-complete {\n  border: none;\n  background: #229954;\n  /* border: 0.2rem solid #333; */\n}\n\n.high {\n  border: 0.2rem solid #a93226;\n  background: #d98880;\n}\n\n.medium {\n  border: 0.2rem solid #d4ac0d;\n  background: #f9e79f;\n}\n\n.low {\n  border: 0.2rem solid #229954;\n  background: #a9dfbf;\n}\n\n/* form stuff */\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: fixed;\n  right: 33vw;\n  top: 20vh;\n  height: 60vh;\n  width: 33vw;\n  padding: 1.5rem;\n  background: rgb(243, 245, 249);\n  border: solid #aaa 0.1rem;\n  border-radius: 0.25rem;\n  font-family: "myFont";\n}\n\n.form-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.form-input {\n  width: 100%;\n  border: 0.1rem solid #d4e6f1;\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n  font-size: 1rem;\n}\n\n.form-label {\n  padding: 0.5rem 0;\n  font-size: 1rem;\n}\n\n.form-input:focus {\n  border: #2e86c1 0.1rem solid;\n}\n\n#form-heading {\n  font-size: 1.5rem;\n}\n\n#form-textarea {\n  height: 15rem;\n  resize: none;\n}\n\n#form-submit {\n  width: 100%;\n  padding: 0.5rem 0;\n  background: #0288d1;\n  border: #039be5 solid 0.1rem;\n  border-radius: 0.25rem;\n  color: #fff;\n  font-size: 1rem;\n}\n\n#form-overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  min-height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n/* class toggles */\n\n.hidden {\n  display: none;\n}\n\n.selected {\n  background: #d4e6f1;\n  border-radius: 5px;\n}\n',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"1b0809d519837cb7aad36a73433f655c.ttf"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"03523cf578d69fa923226ff457b92d90.ttf"},function(e,n,t){"use strict";t.r(n);t(2),t(4);const r=(()=>{let e=[];const n=e=>({name:e,tasks:[]}),t=e=>{window.localStorage.setItem(e.name,JSON.stringify(e))};return{index:e,create:r=>{let a=n(r);e.push(a),t(a),o.newProjectChanger(a)},projectMaker:n}})(),o=(()=>{const e=document.querySelector("#content"),n=document.querySelector("#new-project"),t=document.querySelector("#projects"),o=document.querySelector("#new-task"),i=document.querySelector("#project-heading"),d=document.querySelector("#form-overlay"),s=document.querySelector("#task-form"),c=document.querySelector("#form-submit");let l=!1,u="";const f=(e,n,t,r)=>{let o=document.createElement(e);return Object.keys(n).forEach(e=>{o.setAttribute(e,n[e])}),o.textContent=t,r.appendChild(o),o},m=()=>{z(u),i.textContent=u.name,t.firstChild.classList.toggle("selected")},g=()=>{let e=document.querySelector(".selected").getAttribute("data");y(),t.childNodes[e].classList.toggle("selected"),i.textContent=u.name,z(u)},p=e=>{document.querySelector(".selected").classList.toggle("selected"),e.currentTarget.classList.toggle("selected"),u=r.index[e.currentTarget.getAttribute("data")],g()},b=()=>{t.removeChild(t.lastChild),l=!1},h=()=>{let e=f("input",{placeholder:"Project Name",id:"project-form"},"",t);e.addEventListener("keydown",v),e.focus(),l=!0},v=e=>{"Enter"==e.key&&(b(),r.create(e.target.value))},y=()=>{t.innerHTML="",r.index.forEach((e,n)=>((e,n)=>{let r=f("div",{class:"project",data:n},"",t);f("h3",{class:"project-name"},e.name,r),f("h3",{class:"project-count"},""+e.tasks.length,r),r.addEventListener("click",p)})(e,n))},k=()=>{d.classList.toggle("hidden"),s.classList.toggle("hidden")},x=e=>{e.target!=e.currentTarget.firstChild&&(e.currentTarget.classList.toggle("hidden"),e.currentTarget.nextSibling.classList.toggle("hidden"))},w=e=>{let n=j(e.currentTarget.parentNode);e.currentTarget.classList.toggle(n.priority),e.currentTarget.classList.toggle("task-complete"),e.currentTarget.parentNode.children[1].classList.toggle("text-done"),e.currentTarget.parentNode.children[2].classList.toggle("text-done")},j=e=>u.tasks[e.getAttribute("data")],S=e=>{let n=j(e.currentTarget.parentNode);n.description=e.currentTarget.previousSibling.value,n.dueDate=e.currentTarget.previousSibling.previousSibling.value,(e=>{let n=e.currentTarget.parentNode.parentNode;n.firstChild.classList.toggle("hidden"),n.lastChild.classList.toggle("hidden")})(e),z(u)},L=e=>{u.tasks.splice(e.currentTarget.parentNode.getAttribute("data"),1),g()},T=(n,t)=>{let r=f("div",{class:"task-box",data:t},"",e),o=f("div",{class:"task-regular",data:t},"",r),a=f("div",{class:"hidden task-expanded",data:t},"",r);o.addEventListener("click",x),((e,n)=>{let t=f("a",{class:"complete-button "+e.priority},"",n);f("h2",{class:"title-regular"},e.title,n),f("p",{class:"date-regular"},e.dueDate,n),t.addEventListener("click",w)})(n,o),((e,n)=>{f("h2",{class:"title-expanded"},e.title,n);let t={class:"date-expanded",type:"date",value:e.dueDate};f("input",t,"",n),f("textarea",{class:"description-expanded"},e.description,n);let r=f("button",{class:"save-changes"},"Save Task",n),o=f("button",{class:"delete-task"},"Delete",n);r.addEventListener("click",S),o.addEventListener("click",L)})(n,a)},z=n=>{e.innerHTML="",n.tasks.forEach((e,n)=>T(e,n))};return d.addEventListener("click",()=>{event.target==d&&k()}),o.addEventListener("click",k),c.addEventListener("click",()=>{let e=document.querySelector('input[type="radio"]:checked').value,n=[s[0].value,s[1].value,e,s[5].value];a.create(n,u),k()}),n.addEventListener("click",()=>{1==l?b():h()}),{renderTasks:z,renderProjects:y,newProjectChanger:e=>{u=e,y(),z(u),i.textContent=u.name,t.lastChild.classList.toggle("selected")},render:g,init:e=>{u=e,y(),m()}}})(),a=(()=>{const e=(e,n,t,r)=>({title:e,dueDate:n,priority:t,description:r});return{create:(n,t)=>{let r=e(...n);t.tasks.push(r),o.render()},taskMaker:e}})();(()=>{let e=window.localStorage.key(0),n=JSON.parse(window.localStorage.getItem(e));console.log(n),o.init(n)})()}]);