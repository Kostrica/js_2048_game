parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r){return o(r)||n(r)||t(r)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(r,e){if(r){if("string"==typeof r)return i(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(r,e):void 0}}function n(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function o(r){if(Array.isArray(r))return i(r)}function i(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var a,c,f=document.querySelector(".controls"),s=document.querySelector(".game-field"),u=s.rows,l=r(u),d=document.querySelector(".message-start"),m=document.querySelector(".message-win"),v=document.querySelector(".message-lose"),h=document.querySelector(".game-score"),y="field-cell",L=4,b=200,p=M(),T=0,g=!0,k=!1,w=!1;function M(){return l.map(function(e){return r(e.cells).map(function(r){return r.innerHTML})})}function A(){return Math.floor(Math.random()*L)}function S(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(r){if(!k&&g&&!w){var e,t,n;e=Math.random()<.9?2:4;do{t=A(),n=A()}while(""!==p[t][n]);p[t][n]=e}return S(r-1)}}function H(){if(g&&!w)for(var r=0;r<L;r++)for(var e=1;e<L;e++)if(p[e][r])for(var t=e;t>0;){if(p[t-1][r]){if(p[t-1][r]===p[t][r]){p[t-1][r]*=2,T+=p[t-1][r],h.innerHTML=T,p[t][r]="";break}break}p[t-1][r]=p[t][r],p[t][r]="",t--}}function q(){if(g&&!w)for(var r=0;r<L;r++)for(var e=L-2;e>=0;e--)if(p[r][e])for(var t=e;t+1<L;){if(p[r][t+1]){if(p[r][t]===p[r][t+1]){p[r][t+1]*=2,T+=p[r][t+1],h.innerHTML=T,p[r][t]="";break}break}p[r][t+1]=p[r][t],p[r][t]="",t++}}function D(){if(g&&!w)for(var r=0;r<L;r++)for(var e=L-2;e>=0;e--)if(p[e][r])for(var t=e;t+1<L;){if(p[t+1][r]){if(p[t+1][r]===p[t][r]){p[t+1][r]*=2,T+=p[t+1][r],h.innerHTML=T,p[t][r]="";break}break}p[t+1][r]=p[t][r],p[t][r]="",t++}}function E(){if(g&&!w)for(var r=0;r<L;r++)for(var e=1;e<L;e++)if(p[r][e])for(var t=e;t-1>=0;){if(p[r][t-1]){if(p[r][t]===p[r][t-1]){p[r][t-1]*=2,T+=p[r][t-1],h.innerHTML=T,p[r][t]="";break}break}p[r][t-1]=p[r][t],p[r][t]="",t--}}function j(){for(var r=0,e=0;e<L;e++)for(var t=0;t<L;t++)a[e][t]!==c[e][t]&&r++;k=!r}function I(){if(p.map(function(r){return r.findIndex(function(r){return""===r})}).every(function(r){return-1===r})){for(var r=0,e=0;e<L;e++)for(var t=1;t<L;t++)p[e][t]!==p[e][t-1]&&p[t][e]!==p[t-1][e]||r++;g=r}}function O(){p.forEach(function(r,e){r.forEach(function(r,t){u[e].cells[t].innerHTML=r,u[e].cells[t].className=y,r&&u[e].cells[t].classList.add("".concat(y,"--").concat(r)),2048===r&&(w=!0)})})}function R(){d.classList.contains("hidden")||d.classList.add("hidden"),m.classList.contains("hidden")||m.classList.add("hidden"),v.classList.contains("hidden")||v.classList.add("hidden"),w&&m.classList.remove("hidden"),g||v.classList.remove("hidden")}f.addEventListener("click",function(r){var e=r.target.closest(".start"),t=r.target.closest(".restart");e&&(e.classList.remove("start"),e.classList.add("restart"),e.innerHTML="Restart",R(),S(2),setTimeout(function(){return O()},b)),t&&(g=!0,k=!1,w=!1,T=0,h.innerHTML=T,p.map(function(r){return r.fill("")}),R(),O(),S(2),setTimeout(function(){return O()},b))}),document.addEventListener("keydown",function(r){switch(r.code){case"ArrowUp":r.preventDefault(),a=M(),H(),O(),c=M(),j(),S(),I(),setTimeout(function(){O(),R()},b);break;case"ArrowRight":r.preventDefault(),a=M(),q(),O(),c=M(),j(),S(),I(),setTimeout(function(){O(),R()},b);break;case"ArrowDown":r.preventDefault(),a=M(),D(),O(),c=M(),j(),S(),I(),setTimeout(function(){O(),R()},b);break;case"ArrowLeft":r.preventDefault(),a=M(),E(),O(),c=M(),j(),S(),I(),setTimeout(function(){O(),R()},b)}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.30301336.js.map