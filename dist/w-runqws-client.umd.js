/*!
 * w-runqws-client v1.0.8
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("ws")):"function"==typeof define&&define.amd?define(["ws"],t):(e=e||self,e["w-runqws-client"]=t(e.ws))})(this,function(e){'use strict';var se=Math.max,ce=Math.ceil,de=Math.min;function t(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){return t={exports:{}},e(t,t.exports),t.exports}function o(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ue&&Ue in Object(e)?we(e):Ee(e)}function i(e){var t=n(e);return null!=e&&("object"==t||"function"==t)}function a(e){return!!Me&&Me in e}function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function c(e){var t=n(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function d(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function u(e){var t=this.__data__=new ge(e);this.size=t.size}function l(e,t,n){var r=e[t];gt.call(e,t)&&ue(r,n)&&(n!==void 0||t in e)||pt(e,t,n)}function p(e){return null!=e&&"object"==n(e)}function y(e,t){var r=n(e);return t=null==t?9007199254740991:t,!!t&&("number"==r||"symbol"!=r&&Bt.test(e))&&-1<e&&0==e%1&&e<t}function g(e,t,n,r,o,i){var a,s=1&t,c=2&t;if(n&&(a=o?n(e,r,o,i):n(e)),void 0!==a)return a;if(!ze(e))return e;var d=Ot(e);if(!d){var u=Cn(e),l="[object Function]"==u||"[object GeneratorFunction]"==u;if(wt(e))return tn(e,s);if("[object Object]"!=u&&"[object Arguments]"!=u&&(!l||o)){if(!lr[u])return o?e:{};a=tr(e,u,s)}else if(a=c||l?{}:or(e),!s)return c?_n(e,en(a,e)):ln(e,Gt(a,e))}else if(a=Vn(e),!s)return nn(e,a);i||(i=new ct);var p=i.get(e);if(p)return p;i.set(e,a),ur(e)?e.forEach(function(r){a.add(g(r,t,n,r,e,i))}):sr(e)&&e.forEach(function(r,o){a.set(o,g(r,t,n,o,e,i))});var y=4&t?c?xn:jn:c?keysIn:qt,f=d?void 0:y(e);return dt(f||e,function(r,o){f&&(o=r,r=e[o]),ft(a,o,g(r,t,n,o,e,i))}),a}function f(e){return"symbol"==n(e)||_t(e)&&Pe(e)=="[object Symbol]"}function b(e,t){if(Ot(e))return!1;var r=n(e);return!!("number"==r||"symbol"==r||"boolean"==r||null==e||yr(e))||fr.test(e)||!gr.test(e)||null!=t&&e in Object(t)}function h(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(h.Cache||st),n}function _(e){if("string"==typeof e)return e;if(Ot(e))return mr(e,_)+"";if(yr(e))return Ar?Ar.call(e):"";var t=e+"";return"0"==t&&1/e==-jr?"-0":t}function m(){return"undefined"==typeof self?"undefined"==typeof window?"undefined"==typeof global?null:global:window:self}function j(){var e="undefined"!=typeof window&&"undefined"!=typeof window.document,t="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,n="undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node;e=e||t;var o={isBrowser:e,isWebWorker:t,isNode:n};return o}function x(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t||"[object AsyncFunction]"===t}function A(t){function n(){x(t.open)&&t.open()}function r(){x(t.close)&&t.close()}function o(e){x(t.message)&&t.message(e)}function i(e){x(t.error)&&t.error(e),a.close()}var a=null;t.url||(t.url="ws://localhost:8080"),t.token||(t.token="*");var s,c=j().isBrowser;s=c?m().WebSocket:e;try{a=new s(t.url+"/?token="+t.token)}catch(e){a=null}return null===a?{error:"can not new MixWS"}:(c?(a.onopen=n,a.onmessage=function(e){var t=e.data;o(t)},a.onclose=r,a.onerror=i):(a.on("open",n),a.on("message",o),a.on("close",r),a.on("error",i)),a)}function k(){var e,t,n=new Promise(function(){e=arguments[0],t=arguments[1]});return n.resolve=e,n.reject=t,n}function O(e){var t=Object.prototype.toString.call(e);return"[object String]"===t}function S(e){return!!(O(e)&&""!==e)}function w(e){var t=Object.prototype.toString.call(e);return"[object Number]"===t}function B(e){var t=!1;return S(e)?t=!isNaN(+e):w(e)&&(t=!0),t}function L(e){if(!B(e))return 0;var t=Dr(e);return t}function E(e){return!!B(e)&&(e=L(e),Fr(e))}function U(e){if(!B(e))return 0;e=L(e);var t=Rr(e);return"0"===t+""?0:t}function P(e){if(!E(e))return!1;var t=0<U(e);return t}function z(){var e,t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:32,n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],o=[],a=n.length;if(P(t))for(e=0;e<t;e++)o[e]=n[0|Math.random()*a];else if("rfc4122"===t){o[8]=o[13]=o[18]=o[23]="-",o[14]="4";var s;for(e=0;36>e;e++)o[e]||(s=0|16*Math.random(),o[e]=n[19===e?8|3&s:s])}else return"";var c=o.join("");return c}function T(e){var t=Object.prototype.toString.call(e);return"[object Object]"===t}function I(e){if(T(e)){for(var t in e)return!0;return!1}return!1}function N(e,t){return I(e)?S(t)?Br(e,t,""):"":""}function M(e){if(!S(e)&&!B(e))return"";return e+""}function D(e,t){var n=N(e,t);return n=M(n),n}function Q(e,t,r){if(!ze(r))return!1;var o=n(t);return!("number"==o?!($t(r)&&Lt(t,r.length)):!("string"==o&&t in r))&&ue(r[t],e)}function F(e){var t=Object.prototype.toString.call(e);return"[object Uint8Array]"===t}function C(e){var t=Object.prototype.toString.call(e);return"[object Uint16Array]"===t}function W(e,t){return S(e)?P(t)?e.substr(0,t):"":""}function R(e,t){if(!S(e))return"";if(!P(t))return"";var n=e.length-t;return 0>n&&(n=0),e.substr(n,t)}function V(e,t){return S(e)?P(t)?R(e,e.length-t):"":""}function H(e){if(!F(e))return"";var t=ro.create(e),n=t.toString(no);return n}function $(e){if(!O(e))return new Uint8Array;for(var t,n=no.parse(e),r=n.words,o=n.sigBytes,a=new Uint8Array(o),s=0;s<o;s++)t=255&r[s>>>2]>>>24-8*(s%4),a[s]=t;return a}function q(e){return C(e)?new Uint8Array(e):new Uint8Array}function G(e){return C(e)?H(q(e)):""}function J(e){return F(e)?new Uint16Array(e):new Uint16Array}function X(e){if(!O(e))return new Uint16Array;var t=$(e),n=J(t);return n}function Y(e){var t=Object.prototype.toString.call(e);return"[object Undefined]"===t}function Z(e){var t=Object.prototype.toString.call(e);return"[object Array]"===t}function K(e){function t(e,t){return 0<=n.indexOf("Uint8Array")&&(t=oo.u8arr2b64(t)),0<=n.indexOf("Uint16Array")&&(t=oo.u16arr2b64(t)),t}var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"Uint8Array";if(Y(e))return"";if(O(n))n=[n];else if(Z(n));else return"";var r="";try{r=JSON.stringify(e,t)}catch(e){r=""}return r}function ee(e,t,n,r,o){var i=K(n),a=$r(i,t),s=z(),c=a.length;eo(a,function(t,n){t=Jr(t,"");var i="".concat(s,"|").concat(n,"|").concat(c,"|").concat(t);e.send(i,function(e){e&&Te(o)&&o(e)}),Te(r)&&r(100*((n+1)/c))})}function te(e){function t(e,t){return 0<=n.indexOf("Uint8Array")&&(t=oo.b642u8arr(t)),0<=n.indexOf("Uint16Array")&&(t=oo.b642u16arr(t)),t}var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"Uint8Array";if(O(n))n=[n];else if(Z(n));else return{};var r={};try{r=JSON.parse(e,t)}catch(e){r={}}return r}function ne(e,t){return!!T(e)&&!!S(t)&&t in e}function re(e,t){var n=vo(e,"|"),r=n[0],o=Nr(n[1]),i=Nr(n[2]),a=Jr(Oo(n,3),"|");if(ne(Lo,r)||(Lo[r]={}),Lo[r]["_"+o]=a,o===i-1){var s="";eo(Bo(i),function(e){s+=Lo[r]["_"+e]}),delete Lo[r];var c=te(s);t(c)}}function oe(e){function t(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];setTimeout(function(){a.emit.apply(a,[e].concat(n))},1)}function n(){function n(){t("open")}function c(){o||(t("openOnce"),o=!0)}function d(){t("close"),r()}function u(e){t("error",{msg:"websocket error",err:e}),i.close()}function l(e){re(e,p)}function p(e){var n=D(e,"_mode");if("execute"!==n)"broadcast"===n?t("broadcast",Br(e,"data")):"deliver"===n?t("deliver",Br(e,"data")):u({msg:"can not find _mode in data",err:e});else if(Br(e,"_id")&&Br(e,"output")){var r=Br(e,"_id"),o=Br(e,"output");s.emit(r,o)}else t("error",{msg:"can not find _id and output in data",err:e})}function y(n,r){i.readyState===i.OPEN&&ee(i,e.strSplitLength,n,r,function(e){t("error",{msg:"can not send message",err:e})})}e.url||(e.url="ws://localhost:8080"),e.token||(e.token="*"),e.strSplitLength||(e.strSplitLength=1e6);var g={url:e.url,token:e.token,open:function(){n(),c()},close:function(){d()},message:function(e){l(e)},error:function(e){u(e)}};try{i=new A(g)}catch(e){return t("error",{msg:"can not create websocket",err:e}),void r()}return Br(i,"error")?(t("error",{msg:"can not create websocket",err:"can not new MixWS in WWebsocketClient"}),void r()):void(a.removeAllListeners("triggerExecute"),a.on("triggerExecute",function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=2<arguments.length?arguments[2]:void 0,r=3<arguments.length?arguments[3]:void 0,o=z();y({_mode:"execute",_id:o,func:e,input:t},r),s.on(o,function(e){n(e),s.removeAllListeners(o)})}),a.removeAllListeners("triggerBroadcast"),a.on("triggerBroadcast",function(e,t){y({_mode:"broadcast",data:e},t)}),a.removeAllListeners("triggerDeliver"),a.on("triggerDeliver",function(e,t){y({_mode:"deliver",data:e},t)}))}function r(){setTimeout(function(){t("reconn"),n()},1e3)}var o=!1,i=null,a=new Lr,s=new Lr;return a.execute=function(e,n){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){},o=k();return t("triggerExecute",e,n,function(e){o.resolve(e)},r),o},a.broadcast=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){};t("triggerBroadcast",e,n)},a.deliver=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){};t("triggerDeliver",e,n)},n(),a}function ie(){var e={};return{on:function(t,n){e[t]||(e[t]=[]),e[t].push(n)},emit:function(t){if(e[t]){for(var n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0;a<e[t].length;a++){var s;(s=e[t])[a].apply(s,r)}}}}}function ae(){function e(e){r.push(e),(0>=t.takeNumLimit||n<t.takeNumLimit)&&o.emit("message",r)}var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};t.takeNumLimit||(t.takeNumLimit=0);var n=0,r=[],o=new ie;return o.get=function(){if(0<r.length){n+=1;var e=r.splice(0,1)[0];return e}return null},o.cb=function(){n-=1,0<r.length&&o.emit("message",r)},o.push=e,o}e=e&&e.hasOwnProperty("default")?e["default"]:e;var ue=function(e,t){return e===t||e!==e&&t!==t},le=function(e,t){for(var n=e.length;n--;)if(ue(e[n][0],t))return n;return-1},pe=Array.prototype,ye=pe.splice;t.prototype.clear=function(){this.__data__=[],this.size=0},t.prototype["delete"]=function(e){var t=this.__data__,n=le(t,e);if(0>n)return!1;var r=t.length-1;return n==r?t.pop():ye.call(t,n,1),--this.size,!0},t.prototype.get=function(e){var t=this.__data__,n=le(t,e);return 0>n?void 0:t[n][1]},t.prototype.has=function(e){return-1<le(this.__data__,e)},t.prototype.set=function(e,t){var n=this.__data__,r=le(n,e);return 0>r?(++this.size,n.push([e,t])):n[r][1]=t,this};var ge=t,fe="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,be="object"==n(fe)&&fe&&fe.Object===Object&&fe,he=be,_e="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,me=he||_e||Function("return this")(),je=me,xe=je.Symbol,Ae=xe,ke=Object.prototype,ve=ke.hasOwnProperty,Oe=ke.toString,Se=Ae?Ae.toStringTag:void 0,we=function(e){var t=ve.call(e,Se),n=e[Se];try{e[Se]=void 0;var r=!0}catch(t){}var o=Oe.call(e);return r&&(t?e[Se]=n:delete e[Se]),o},Be=Object.prototype,Le=Be.toString,Ee=function(e){return Le.call(e)},Ue=Ae?Ae.toStringTag:void 0,Pe=o,ze=i,Te=function(e){if(!ze(e))return!1;var t=Pe(e);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},Ie=je["__core-js_shared__"],Ne=Ie,Me=function(){var e=/[^.]+$/.exec(Ne&&Ne.keys&&Ne.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),De=Function.prototype,Qe=De.toString,Fe=function(e){if(null!=e){try{return Qe.call(e)}catch(t){}try{return e+""}catch(t){}}return""},Ce=/[\\^$.*+?()[\]{}|]/g,We=/^\[object .+?Constructor\]$/,Re=Function.prototype,Ve=Object.prototype,He=Re.toString,$e=Ve.hasOwnProperty,qe=RegExp("^"+He.call($e).replace(Ce,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ge=function(e){if(!ze(e)||a(e))return!1;var t=Te(e)?qe:We;return t.test(Fe(e))},Je=function(e,t){return null==e?void 0:e[t]},Xe=function(e,t){var n=Je(e,t);return Ge(n)?n:void 0},Ye=Xe(je,"Map"),Ze=Ye,Ke=Xe(Object,"create"),et=Ke,tt=Object.prototype,nt=tt.hasOwnProperty,rt=Object.prototype,ot=rt.hasOwnProperty;s.prototype.clear=function(){this.__data__=et?et(null):{},this.size=0},s.prototype["delete"]=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},s.prototype.get=function(e){var t=this.__data__;if(et){var n=t[e];return n==="__lodash_hash_undefined__"?void 0:n}return nt.call(t,e)?t[e]:void 0},s.prototype.has=function(e){var t=this.__data__;return et?t[e]!==void 0:ot.call(t,e)},s.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=et&&void 0===t?"__lodash_hash_undefined__":t,this};var it=s,at=function(e,t){var n=e.__data__;return c(t)?n["string"==typeof t?"string":"hash"]:n.map};d.prototype.clear=function(){this.size=0,this.__data__={hash:new it,map:new(Ze||ge),string:new it}},d.prototype["delete"]=function(e){var t=at(this,e)["delete"](e);return this.size-=t?1:0,t},d.prototype.get=function(e){return at(this,e).get(e)},d.prototype.has=function(e){return at(this,e).has(e)},d.prototype.set=function(e,t){var n=at(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};var st=d;u.prototype.clear=function(){this.__data__=new ge,this.size=0},u.prototype["delete"]=function(e){var t=this.__data__,n=t["delete"](e);return this.size=t.size,n},u.prototype.get=function(e){return this.__data__.get(e)},u.prototype.has=function(e){return this.__data__.has(e)},u.prototype.set=function(e,t){var n=this.__data__;if(n instanceof ge){var r=n.__data__;if(!Ze||199>r.length)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new st(r)}return n.set(e,t),this.size=n.size,this};var ct=u,dt=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!(!1===t(e[n],n,e)););return e},ut=function(){try{var e=Xe(Object,"defineProperty");return e({},"",{}),e}catch(t){}}(),lt=ut,pt=function(e,t,n){"__proto__"==t&&lt?lt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},yt=Object.prototype,gt=yt.hasOwnProperty,ft=l,bt=function(e,t,n,r){var o=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var s=t[i],c=r?r(n[s],e[s],s,n,e):void 0;c===void 0&&(c=e[s]),o?pt(n,s,c):ft(n,s,c)}return n},ht=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},_t=p,mt=function(e){return _t(e)&&Pe(e)=="[object Arguments]"},jt=Object.prototype,xt=jt.hasOwnProperty,At=jt.propertyIsEnumerable,kt=mt(function(){return arguments}())?mt:function(e){return _t(e)&&xt.call(e,"callee")&&!At.call(e,"callee")},vt=Array.isArray,Ot=vt,St=function(){return!1},wt=r(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n,i=o?je.Buffer:void 0,a=i?i.isBuffer:void 0;e.exports=a||St}),Bt=/^(?:0|[1-9]\d*)$/,Lt=y,Et=function(e){return"number"==typeof e&&-1<e&&0==e%1&&e<=9007199254740991},Ut={};Ut["[object Float32Array]"]=Ut["[object Float64Array]"]=Ut["[object Int8Array]"]=Ut["[object Int16Array]"]=Ut["[object Int32Array]"]=Ut["[object Uint8Array]"]=Ut["[object Uint8ClampedArray]"]=Ut["[object Uint16Array]"]=Ut["[object Uint32Array]"]=!0,Ut["[object Arguments]"]=Ut["[object Array]"]=Ut["[object ArrayBuffer]"]=Ut["[object Boolean]"]=Ut["[object DataView]"]=Ut["[object Date]"]=Ut["[object Error]"]=Ut["[object Function]"]=Ut["[object Map]"]=Ut["[object Number]"]=Ut["[object Object]"]=Ut["[object RegExp]"]=Ut["[object Set]"]=Ut["[object String]"]=Ut["[object WeakMap]"]=!1;var Pt=function(e){return function(t){return e(t)}},zt=r(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n,i=o&&he.process,a=function(){try{var e=r&&r.require&&r.require("util").types;return e?e:i&&i.binding&&i.binding("util")}catch(t){}}();e.exports=a}),Tt=zt&&zt.isTypedArray,It=Tt?Pt(Tt):function(e){return _t(e)&&Et(e.length)&&!!Ut[Pe(e)]},Nt=Object.prototype,Mt=Nt.hasOwnProperty,Dt=function(e,t){var n=Ot(e),r=!n&&kt(e),o=!n&&!r&&wt(e),i=!n&&!r&&!o&&It(e),a=n||r||o||i,s=a?ht(e.length,String):[],c=s.length;for(var d in e)(t||Mt.call(e,d))&&!(a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Lt(d,c)))&&s.push(d);return s},Qt=Object.prototype,Ft=function(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||Qt;return e===n},Ct=function(e,t){return function(n){return e(t(n))}},Wt=Ct(Object.keys,Object),Rt=Object.prototype,Vt=Rt.hasOwnProperty,Ht=function(e){if(!Ft(e))return Wt(e);var t=[];for(var n in Object(e))Vt.call(e,n)&&"constructor"!=n&&t.push(n);return t},$t=function(e){return null!=e&&Et(e.length)&&!Te(e)},qt=function(e){return $t(e)?Dt(e):Ht(e)},Gt=function(e,t){return e&&bt(t,qt(t),e)},Jt=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t},Xt=Object.prototype,Yt=Xt.hasOwnProperty,Zt=function(e){if(!ze(e))return Jt(e);var t=Ft(e),n=[];for(var r in e)("constructor"!=r||!t&&Yt.call(e,r))&&n.push(r);return n},Kt=function(e){return $t(e)?Dt(e,!0):Zt(e)},en=function(e,t){return e&&bt(t,Kt(t),e)},tn=r(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n,i=o?je.Buffer:void 0,a=i?i.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=a?a(n):new e.constructor(n);return e.copy(r),r}}),nn=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t},rn=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i},on=function(){return[]},an=Object.prototype,sn=an.propertyIsEnumerable,cn=Object.getOwnPropertySymbols,dn=cn?function(e){return null==e?[]:(e=Object(e),rn(cn(e),function(t){return sn.call(e,t)}))}:on,un=dn,ln=function(e,t){return bt(e,un(e),t)},pn=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},yn=Ct(Object.getPrototypeOf,Object),gn=yn,fn=Object.getOwnPropertySymbols,bn=fn?function(e){for(var t=[];e;)pn(t,un(e)),e=gn(e);return t}:on,hn=bn,_n=function(e,t){return bt(e,hn(e),t)},mn=function(e,t,n){var r=t(e);return Ot(e)?r:pn(r,n(e))},jn=function(e){return mn(e,qt,un)},xn=function(e){return mn(e,Kt,hn)},An=Xe(je,"DataView"),kn=An,vn=Xe(je,"Promise"),On=vn,Sn=Xe(je,"Set"),wn=Sn,Bn=Xe(je,"WeakMap"),Ln=Bn,En="[object Map]",Un="[object Promise]",Pn="[object Set]",zn="[object WeakMap]",Tn="[object DataView]",In=Fe(kn),Nn=Fe(Ze),Mn=Fe(On),Dn=Fe(wn),Qn=Fe(Ln),Fn=Pe;(kn&&Fn(new kn(new ArrayBuffer(1)))!=Tn||Ze&&Fn(new Ze)!=En||On&&Fn(On.resolve())!=Un||wn&&Fn(new wn)!=Pn||Ln&&Fn(new Ln)!=zn)&&(Fn=function(e){var t=Pe(e),n=t=="[object Object]"?e.constructor:void 0,r=n?Fe(n):"";if(r)switch(r){case In:return Tn;case Nn:return En;case Mn:return Un;case Dn:return Pn;case Qn:return zn;}return t});var Cn=Fn,Wn=Object.prototype,Rn=Wn.hasOwnProperty,Vn=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&Rn.call(e,"index")&&(n.index=e.index,n.input=e.input),n},Hn=je.Uint8Array,$n=Hn,qn=function(e){var t=new e.constructor(e.byteLength);return new $n(t).set(new $n(e)),t},Gn=function(e,t){var n=t?qn(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)},Jn=/\w*$/,Xn=function(e){var t=new e.constructor(e.source,Jn.exec(e));return t.lastIndex=e.lastIndex,t},Yn=Ae?Ae.prototype:void 0,Zn=Yn?Yn.valueOf:void 0,Kn=function(e){return Zn?Object(Zn.call(e)):{}},er=function(e,t){var n=t?qn(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)},tr=function(e,t,n){var r=e.constructor;return"[object ArrayBuffer]"===t?qn(e):"[object Boolean]"===t||"[object Date]"===t?new r(+e):"[object DataView]"===t?Gn(e,n):"[object Float32Array]"===t||"[object Float64Array]"===t||"[object Int8Array]"===t||"[object Int16Array]"===t||"[object Int32Array]"===t||"[object Uint8Array]"===t||"[object Uint8ClampedArray]"===t||"[object Uint16Array]"===t||"[object Uint32Array]"===t?er(e,n):"[object Map]"===t?new r:"[object Number]"===t||"[object String]"===t?new r(e):"[object RegExp]"===t?Xn(e):"[object Set]"===t?new r:"[object Symbol]"===t?Kn(e):void 0},nr=Object.create,rr=function(){function e(){}return function(t){if(!ze(t))return{};if(nr)return nr(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),or=function(e){return"function"!=typeof e.constructor||Ft(e)?{}:rr(gn(e))},ir=zt&&zt.isMap,ar=ir?Pt(ir):function(e){return _t(e)&&Cn(e)=="[object Map]"},sr=ar,cr=zt&&zt.isSet,dr=cr?Pt(cr):function(e){return _t(e)&&Cn(e)=="[object Set]"},ur=dr,lr={};lr["[object Arguments]"]=lr["[object Array]"]=lr["[object ArrayBuffer]"]=lr["[object DataView]"]=lr["[object Boolean]"]=lr["[object Date]"]=lr["[object Float32Array]"]=lr["[object Float64Array]"]=lr["[object Int8Array]"]=lr["[object Int16Array]"]=lr["[object Int32Array]"]=lr["[object Map]"]=lr["[object Number]"]=lr["[object Object]"]=lr["[object RegExp]"]=lr["[object Set]"]=lr["[object String]"]=lr["[object Symbol]"]=lr["[object Uint8Array]"]=lr["[object Uint8ClampedArray]"]=lr["[object Uint16Array]"]=lr["[object Uint32Array]"]=!0,lr["[object Error]"]=lr["[object Function]"]=lr["[object WeakMap]"]=!1;var pr=function(e){return g(e,5)},yr=f,gr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fr=/^\w*$/;h.Cache=st;var br=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,hr=/\\(\\)?/g,_r=function(e){var t=h(e,function(e){return 500===n.size&&n.clear(),e}),n=t.cache;return t}(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(br,function(e,n,r,o){t.push(r?o.replace(hr,"$1"):n||e)}),t}),mr=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},jr=1/0,xr=Ae?Ae.prototype:void 0,Ar=xr?xr.toString:void 0,kr=_,vr=function(e){return null==e?"":kr(e)},Or=function(e,t){return Ot(e)?e:b(e,t)?[e]:_r(vr(e))},Sr=function(e){if("string"==typeof e||yr(e))return e;var t=e+"";return"0"==t&&1/e==-(1/0)?"-0":t},wr=function(e,t){t=Or(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[Sr(t[n++])];return n&&n==r?e:void 0},Br=function(e,t,n){var r=null==e?void 0:wr(e,t);return r===void 0?n:r},Lr=r(function(e){(function(t){function r(){}function o(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function i(e){return function(){return this[e].apply(this,arguments)}}function a(e){return!!("function"==typeof e||e instanceof RegExp)||!!(e&&"object"===n(e))&&a(e.listener)}var s=r.prototype,c=t.EventEmitter;s.getListeners=function(e){var t,n,r=this._getEvents();if(e instanceof RegExp)for(n in t={},r)r.hasOwnProperty(n)&&e.test(n)&&(t[n]=r[n]);else t=r[e]||(r[e]=[]);return t},s.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},s.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},s.addListener=function(e,t){if(!a(t))throw new TypeError("listener must be a function");var r,i=this.getListenersAsObject(e),s="object"===n(t);for(r in i)i.hasOwnProperty(r)&&-1===o(i[r],t)&&i[r].push(s?t:{listener:t,once:!1});return this},s.on=i("addListener"),s.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},s.once=i("addOnceListener"),s.defineEvent=function(e){return this.getListeners(e),this},s.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},s.removeListener=function(e,t){var n,r,i=this.getListenersAsObject(e);for(r in i)i.hasOwnProperty(r)&&(n=o(i[r],t),-1!==n&&i[r].splice(n,1));return this},s.off=i("removeListener"),s.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},s.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},s.manipulateListeners=function(e,t,r){var o,a,s=e?this.removeListener:this.addListener,c=e?this.removeListeners:this.addListeners;if("object"===n(t)&&!(t instanceof RegExp))for(o in t)t.hasOwnProperty(o)&&(a=t[o])&&("function"==typeof a?s.call(this,o,a):c.call(this,o,a));else for(o=r.length;o--;)s.call(this,t,r[o]);return this},s.removeEvent=function(e){var t,r=n(e),o=this._getEvents();if("string"===r)delete o[e];else if(e instanceof RegExp)for(t in o)o.hasOwnProperty(t)&&e.test(t)&&delete o[t];else delete this._events;return this},s.removeAllListeners=i("removeEvent"),s.emitEvent=function(e,t){var n,r,o,a,s,c=this.getListenersAsObject(e);for(a in c)if(c.hasOwnProperty(a))for(n=c[a].slice(0),o=0;o<n.length;o++)r=n[o],!0===r.once&&this.removeListener(e,r.listener),s=r.listener.apply(this,t||[]),s===this._getOnceReturnValue()&&this.removeListener(e,r.listener);return this},s.trigger=i("emitEvent"),s.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},s.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},s._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},s._getEvents=function(){return this._events||(this._events={})},r.noConflict=function(){return t.EventEmitter=c,r},e.exports?e.exports=r:t.EventEmitter=r})("undefined"==typeof window?fe||{}:window)}),Er=0/0,Ur=/^\s+|\s+$/g,Pr=/^[-+]0x[0-9a-f]+$/i,zr=/^0b[01]+$/i,Tr=/^0o[0-7]+$/i,Ir=parseInt,Nr=function(e){if("number"==typeof e)return e;if(yr(e))return Er;if(ze(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ze(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Ur,"");var n=zr.test(e);return n||Tr.test(e)?Ir(e.slice(2),n?2:8):Pr.test(e)?Er:+e},Mr=1/0,Dr=function(e){if(!e)return 0===e?e:0;if(e=Nr(e),e===Mr||e===-Mr){var t=0>e?-1:1;return 1.7976931348623157e+308*t}return e===e?e:0},Qr=function(e){var t=Dr(e),n=t%1;return t===t?n?t-n:t:0},Fr=function(e){return"number"==typeof e&&e==Qr(e)},Cr=je.isFinite,Wr=function(e){var t=Math[e];return function(e,n){if(e=Nr(e),n=null==n?0:de(Qr(n),292),n&&Cr(e)){var r=(vr(e)+"e").split("e"),o=t(r[0]+"e"+(+r[1]+n));return r=(vr(o)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return t(e)}}("round"),Rr=Wr,Vr=function(e,t,n){var r=-1,o=e.length;0>t&&(t=-t>o?0:o+t),n=n>o?o:n,0>n&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(o);++r<o;)i[r]=e[r+t];return i},Hr=Q,$r=function(e,t,n){t=(n?Hr(e,t,n):void 0===t)?1:se(Qr(t),0);var r=null==e?0:e.length;if(!r||1>t)return[];for(var o=0,i=0,a=Array(ce(r/t));o<r;)a[i++]=Vr(e,o,o+=t);return a},qr=Array.prototype,Gr=qr.join,Jr=function(e,t){return null==e?"":Gr.call(e,t)},Xr=function(e){return function(t,n,r){for(var o=-1,i=Object(t),a=r(t),s=a.length;s--;){var c=a[e?s:++o];if(!1===n(i[c],c,i))break}return t}}(),Yr=function(e,t){return function(n,r){if(null==n)return n;if(!$t(n))return e(n,r);for(var o=n.length,i=t?o:-1,a=Object(n);(t?i--:++i<o)&&!(!1===r(a[i],i,a)););return n}}(function(e,t){return e&&Xr(e,t,qt)}),Zr=function(e){return e},Kr=function(e){return"function"==typeof e?e:Zr},eo=function(e,t){var n=Ot(e)?dt:Yr;return n(e,Kr(t))},to=r(function(e,t){(function(n,r){e.exports=t=r()})(fe,function(){var e=e||function(e,t){var n=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),r={},o=r.lib={},i=o.Base=function(){return{extend:function(e){var t=n(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),a=o.WordArray=i.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=n==t?4*e.length:n},toString:function(e){return(e||c).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,o=e.sigBytes;if(this.clamp(),r%4)for(var a,s=0;s<o;s++)a=255&n[s>>>2]>>>24-8*(s%4),t[r+s>>>2]|=a<<24-8*((r+s)%4);else for(var s=0;s<o;s+=4)t[r+s>>>2]=n[s>>>2];return this.sigBytes+=o,this},clamp:function(){var e=this.words,t=this.sigBytes;e[t>>>2]&=4294967295<<32-8*(t%4),e.length=ce(t/4)},clone:function e(){var e=i.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n,o,s=[],c=function(t){var t=t,n=987654321,r=4294967295;return function(){n=36969*(65535&n)+(n>>16)&r,t=18e3*(65535&t)+(t>>16)&r;var o=(n<<16)+t&r;return o/=4294967296,o+=.5,o*(.5<e.random()?1:-1)}},r=0;r<t;r+=4)o=c(4294967296*(n||e.random())),n=987654071*o(),s.push(0|4294967296*o());return new a.init(s,t)}}),s=r.enc={},c=s.Hex={stringify:function(e){for(var t,n=e.words,r=e.sigBytes,o=[],a=0;a<r;a++)t=255&n[a>>>2]>>>24-8*(a%4),o.push((t>>>4).toString(16)),o.push((15&t).toString(16));return o.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-4*(r%8);return new a.init(n,t/2)}},d=s.Latin1={stringify:function(e){for(var t=(0,eval)("this").String.fromCharCode,n,r=e.words,o=e.sigBytes,a=[],s=0;s<o;s++)n=255&r[s>>>2]>>>24-8*(s%4),a.push(t(n));return a.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-8*(r%4);return new a.init(n,t)}},u=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(d.stringify(e)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(e){return d.parse(unescape(encodeURIComponent(e)))}},l=o.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=u.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(e){var t=this._data,n=t.words,r=t.sigBytes,o=this.blockSize,i=r/(4*o);i=e?ce(i):se((0|i)-this._minBufferSize,0);var s=i*o,c=de(4*s,r);if(s){for(var d=0;d<s;d+=o)this._doProcessBlock(n,d);var u=n.splice(0,s);t.sigBytes-=c}return new a.init(u,c)},clone:function e(){var e=i.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),p=o.Hasher=l.extend({cfg:i.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new y.HMAC.init(e,n).finalize(t)}}}),y=r.algo={};return r}(Math);return e})}),no=r(function(e,t){(function(n,r){e.exports=t=r(to)})(fe,function(e){return function(){function t(e,t,n){for(var r=[],a=0,s=0;s<t;s++)if(s%4){var c=n[e.charCodeAt(s-1)]<<2*(s%4),d=n[e.charCodeAt(s)]>>>6-2*(s%4);r[a>>>2]|=(c|d)<<24-8*(a%4),a++}return o.create(r,a)}var n=e,r=n.lib,o=r.WordArray,i=n.enc,a=i.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp();for(var o=[],a=0;a<n;a+=3)for(var s=255&t[a>>>2]>>>24-8*(a%4),c=255&t[a+1>>>2]>>>24-8*((a+1)%4),d=255&t[a+2>>>2]>>>24-8*((a+2)%4),u=0;4>u&&a+.75*u<n;u++)o.push(r.charAt(63&(s<<16|c<<8|d)>>>6*(3-u)));var l=r.charAt(64);if(l)for(;o.length%4;)o.push(l);return o.join("")},parse:function(e){var n=e.length,r=this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var i=0;i<r.length;i++)o[r.charCodeAt(i)]=i}var a=r.charAt(64);if(a){var s=e.indexOf(a);-1!==s&&(n=s)}return t(e,n,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),e.enc.Base64})}),ro=r(function(e,t){(function(n,r){e.exports=t=r(to)})(fe,function(e){return function(){if("function"==typeof ArrayBuffer){var t=e.lib,n=t.WordArray,r=n.init,o=n.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var t=e.byteLength,n=[],o=0;o<t;o++)n[o>>>2]|=e[o]<<24-8*(o%4);r.call(this,n,t)}else r.apply(this,arguments)};o.prototype=n}}(),e.lib.WordArray})}),oo={tagU8A:"[Uint8Array]::",u8arr2b64:function(e){return F(e)?"[Uint8Array]::"+H(e):e},b642u8arr:function(e){return O(e)&&"[Uint8Array]::"===W(e,14)?(e=V(e,14),$(e)):e},tagU16A:"[Uint16Array]::",u16arr2b64:function(e){return C(e)?"[Uint16Array]::"+G(e):e},b642u16arr:function(e){return O(e)&&"[Uint16Array]::"===W(e,15)?(e=V(e,15),X(e)):e}},v=function(e,t,n){var r=e.length;return n=void 0===n?r:n,!t&&n>=r?e:Vr(e,t,n)},io=RegExp("["+"\\u200d"+"\\ud800-\\udfff"+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"\\ufe0e\\ufe0f"+"]"),ao=function(e){return io.test(e)},so=zt&&zt.isRegExp,co=so?Pt(so):function(e){return _t(e)&&Pe(e)=="[object RegExp]"},uo=function(e){return e.split("")},lo="\\ud800-\\udfff",po="["+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"]",yo="\\ud83c[\\udffb-\\udfff]",go="[^"+lo+"]",fo="(?:\\ud83c[\\udde6-\\uddff]){2}",bo="[\\ud800-\\udbff][\\udc00-\\udfff]",ho="(?:"+po+"|"+yo+")"+"?",_o="["+"\\ufe0e\\ufe0f"+"]?",mo="(?:"+"\\u200d"+"(?:"+[go,fo,bo].join("|")+")"+_o+ho+")*",jo="(?:"+[go+po+"?",po,fo,bo,"["+lo+"]"].join("|")+")",xo=RegExp(yo+"(?="+yo+")|"+jo+(_o+ho+mo),"g"),Ao=function(e){return e.match(xo)||[]},ko=function(e){return ao(e)?Ao(e):uo(e)},vo=function(e,t,n){return(n&&"number"!=typeof n&&Hr(e,t,n)&&(t=n=void 0),n=void 0===n?4294967295:n>>>0,!n)?[]:(e=vr(e),e&&("string"==typeof t||null!=t&&!co(t))&&(t=kr(t),!t&&ao(e))?v(ko(e),0,n):e.split(t,n))},Oo=function(e,t,r){var o=null==e?0:e.length;return o?(t=r||void 0===t?1:Qr(t),Vr(e,0>t?0:t,o)):[]},So=function(e,t,n,r){for(var o=-1,i=se(ce((t-e)/(n||1)),0),a=Array(i);i--;)a[r?i:++o]=e,e+=n;return a},wo=function(e){return function(t,n,r){return r&&"number"!=typeof r&&Hr(t,n,r)&&(n=r=void 0),t=Dr(t),void 0===n?(n=t,t=0):n=Dr(n),r=void 0===r?t<n?1:-1:Dr(r),So(t,n,r,e)}}(),Bo=wo,Lo={};return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};e=pr(e),e.url||(e.url="ws://localhost:8080"),e.token||(e.token="*"),e.takeNumLimit||(e.takeNumLimit=0);var t=new oe(e),n=new ae(e);return n.on("message",function(){var e=n.get();e&&t.emit("queueChange",Br(e,"topic",null),Br(e,"id",null),Br(e,"input",null),Br(e,"output",null),Br(e,"state",null),function(){n.cb()})}),t.on("deliver",function(e){var t=Br(e,"topic",null);t&&n.push(e)}),t.pushQueue=function(e,n){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return t.execute("pushQueue",{topic:e,input:n,option:r})},t.modifyQueue=function(e,n,r,o,i){return t.execute("modifyQueue",{topic:e,id:n,input:r,output:o,state:i})},t.subTopic=function(e){return t.execute("subTopic",{topic:e})},t.unsubTopic=function(e){return t.execute("unsubTopic",{topic:e})},t.getQueueByTopic=function(e){return t.execute("getQueueByTopic",{topic:e})},t.getQueueByID=function(e){return t.execute("getQueueByID",{id:e})},t.getQueueByIDs=function(e){return t.execute("getQueueByIDs",{ids:e})},t.getQueueByMatches=function(e){return t.execute("getQueueByMatches",{find:e})},t.delQueueByTopic=function(e){return t.execute("delQueueByTopic",{topic:e})},t.delQueueByID=function(e){return t.execute("delQueueByID",{id:e})},t.delQueueByIDs=function(e){return t.execute("delQueueByIDs",{ids:e})},t.delQueueByMatches=function(e){return t.execute("delQueueByMatches",{find:e})},t}});
//# sourceMappingURL=w-runqws-client.umd.js.map
