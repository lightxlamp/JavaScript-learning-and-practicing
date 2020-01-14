!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(n.i,o,i),o.locals?o.locals:{});n.exports=a},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a={};function s(n,e,t){for(var r=0;r<e.length;r++){var o={css:e[r][1],media:e[r][2],sourceMap:e[r][3]};a[n][r]?a[n][r](o):a[n].push(h(o,t))}}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,c=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function d(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=c(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(n,e){var t,r,o;if(e.singleton){var i=m++;t=p||(p=l(e)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=l(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o()),n=t.base?n+t.base:n,e=e||[],a[n]||(a[n]=[]),s(n,e,t),function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){a[n]||(a[n]=[]),s(n,e,t);for(var r=e.length;r<a[n].length;r++)a[n][r]();a[n].length=e.length,0===a[n].length&&delete a[n]}}}},function(n,e,t){(e=t(3)(!1)).push([n.i,"/**\r\n * Body CSS\r\n */\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nhtml,\r\nbody,\r\ninput,\r\ntextarea,\r\nbutton {\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n}\r\n\r\n/**\r\n  * Sidebar CSS\r\n\r\n  */\r\n#sidebar {\r\n  background-color: #e57373;\r\n  padding: 15px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  #sidebar {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 180px;\r\n    height: 100%;\r\n    padding-top: 30px;\r\n  }\r\n}\r\n\r\n/**\r\n  * Content CSS\r\n  */\r\n@media (min-width: 768px) {\r\n  #content {\r\n    margin-left: 180px;\r\n  }\r\n}\r\n\r\n.floating-btn {\r\n  position: fixed;\r\n  bottom: 50px;\r\n  right: 50px;\r\n}\r\n\r\n.modalWindow {\r\n  max-width: 600px;\r\n  max-height: 350px;\r\n  margin: 100px auto;\r\n  overflow-y: auto;\r\n  background: #fff;\r\n}\r\n\r\n.modalWindow h1 {\r\n  text-align: center;\r\n}\r\n\r\n.modalWindow .modal-content {\r\n  padding: 1rem;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n}\r\n",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,s,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},function(n,e,t){"use strict";t.r(e);t(0);class r{static create(n){return fetch("https://question-js-proj.firebaseio.com/questions.json",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then(n=>n.json()).then(e=>(console.log("response: ",e),n.id=e.name,n)).then(o).then(r.renderListOfQuestions)}static getQuestionsFromDB(n){return n?fetch(`https://question-js-proj.firebaseio.com/questions.json?auth=${n}`,{method:"GET"}).then(n=>n.json()).then(n=>n&&n.error?`<p class='error'>${n.error}</p>`:n?Object.keys(n).map(e=>({...n[e],id:e})):[]):Promise.resolve("<p class='error'>Invalid user or password</p>")}static renderListOfQuestions(){const n=i(),e=n.length?n.map(a).join(""):'<div class="mui--text-headline">No questions yet</div>';document.getElementById("listOfQuestions").innerHTML=e}static listToHTML(n){return n.length?`<ol>${n.map(n=>`<li>${n.text}</li>`).join("")}</ol>`:"<p>No questions yet</p>"}}function o(n){const e=i();e.push(n),localStorage.setItem("questions",JSON.stringify(e))}function i(){return JSON.parse(localStorage.getItem("questions")||"[]")}function a(n){return`<div class="mui--text-title">${n.text}</div>\n    <div class="mui--text-black-54">\n      By <a href="#">Stas</a> ${n.date}\n    </div>`}function s(n){return n.length>=3&&n.length<=256}function l(n,e){const t=document.createElement("div");t.classList.add("modalWindow");const r=`\n    <h1>${n}</h1>\n    <div class="modal-content">${e}</div>\n  `;t.innerHTML=r,mui.overlay("on",t)}console.log("App working...");const u=document.getElementById("myForm"),c=u.querySelector("#questionTextField"),d=u.querySelector("#submitBtn"),f=document.getElementById("modalBtn");function p(n){n.preventDefault();const e=n.target.querySelector("#email").value,t=n.target.querySelector("#password").value,o=n.target.querySelector("#loginBtn");o.disabled=!0,function(n,e){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDtz5gze8pDIqYxZhROoLPbIYoLFHQ4G3w",{method:"POST",body:JSON.stringify({email:n,password:e,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then(n=>n.json()).then(n=>n.idToken)}(e,t).then(r.getQuestionsFromDB).then(m).then(()=>o.disabled=!1)}function m(n){"string"==typeof n?l("Error",n):l("List of questions",r.listToHTML(n))}window.addEventListener("load",r.renderListOfQuestions),u.addEventListener("submit",(function(n){n.preventDefault();let e="";s(c.value)&&(e={text:c.value,date:moment().format("DD/MM/YYYY")},fetch("https://jsonplaceholder.typicode.com/users").then(n=>(console.log(n),console.log(n.json),n.json())).then(n=>{console.log(n)}));d.disabled=!0,console.log("Question"+JSON.stringify(e,null,4)),r.create(e).then(()=>{c.value="",c.className="",d.disabled=!1})})),c.addEventListener("input",(function(){d.disabled=!s(c.value)})),f.addEventListener("click",(function(){l("Authorization",'\n        <form class="mui-form" id="authForm">\n            <legend>Ask a question</legend>\n            <div\n                class="mui-textfield mui-textfield--float-label"\n                id="textField"\n            >\n                <input\n                    type="email"\n                    id="email"\n                    required\n                />\n                <label for="email">Email</label>\n            </div>\n\n            <div\n                class="mui-textfield mui-textfield--float-label"\n                id="textField"\n            >\n                <input\n                type="password"\n                id="password"\n                required\n                />\n\n                <label for="password">Password</label>\n            </div>\n\n            <button\n                id="loginBtn"\n                type="submit"\n                class="mui-btn mui-btn mui-btn--primary"\n                >\n                Login\n            </button>\n        </form>'),document.getElementById("authForm").addEventListener("submit",p)}))}]);