!function(e){function r(r){for(var t,o,c=r[0],i=r[1],a=r[2],d=r[3]||[],s=0,l=[];s<c.length;s++)o=c[s],k[o]&&l.push(k[o][0]),k[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(T&&T(r),d.forEach(function(e){if(void 0===k[e]){k[e]=null;var r=document.createElement("link");r.crossOrigin="anonymous",M.nc&&r.setAttribute("nonce",M.nc),r.rel="prefetch",r.as="script",r.href=A(e),document.head.appendChild(r)}});l.length;)l.shift()();return I.push.apply(I,a||[]),n()}function n(){for(var e,r=0;r<I.length;r++){for(var n=I[r],t=!0,o=1;o<n.length;o++){var c=n[o];0!==k[c]&&(t=!1)}t&&(I.splice(r--,1),e=M(M.s=n[0]))}return e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,r){if(!_[e]||!O[e])return;for(var n in O[e]=!1,r)Object.prototype.hasOwnProperty.call(r,n)&&(y[n]=r[n]);0===--m&&0===w&&P()}(e,r),t&&t(e,r)};var o,c=!0,i="c533aa3ead60de154af2",a=1e4,d={},s=[],l=[];function u(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"===typeof e)r._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"===typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},check:D,apply:x,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var r=p.indexOf(e);r>=0&&p.splice(r,1)},data:d[e]};return o=void 0,r}var p=[],f="idle";function h(e){f=e;for(var r=0;r<p.length;r++)p[r].call(null,e)}var v,y,b,m=0,w=0,g={},O={},_={};function j(e){return+e+""===e?+e:e}function D(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return c=e,h("check"),(r=a,r=r||1e4,new Promise(function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,o=M.p+""+i+".hot-update.json";t.open("GET",o,!0),t.timeout=r,t.send(null)}catch(c){return n(c)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+o+" failed."));else{try{var r=JSON.parse(t.responseText)}catch(c){return void n(c)}e(r)}}})).then(function(e){if(!e)return h("idle"),null;O={},g={},_=e.c,b=e.h,h("prepare");var r=new Promise(function(e,r){v={resolve:e,reject:r}});for(var n in y={},k)E(n);return"prepare"===f&&0===w&&0===m&&P(),r});var r}function E(e){_[e]?(O[e]=!0,m++,function(e){var r=document.createElement("script");r.charset="utf-8",r.src=M.p+""+e+"."+i+".hot-update.js",r.crossOrigin="anonymous",document.head.appendChild(r)}(e)):g[e]=!0}function P(){h("ready");var e=v;if(v=null,e)if(c)Promise.resolve().then(function(){return x(c)}).then(function(r){e.resolve(r)},function(r){e.reject(r)});else{var r=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&r.push(j(n));e.resolve(r)}}function x(r){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,t,o,c,a;function l(e){for(var r=[e],n={},t=r.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,a=o.chain;if((c=H[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var d=0;d<c.parents.length;d++){var s=c.parents[d],l=H[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([s]),moduleId:i,parentId:s};-1===r.indexOf(s)&&(l.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),u(n[s],[i])):(delete n[s],r.push(s),t.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function u(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}r=r||{};var p={},v=[],m={},w=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var O;a=j(g);var D=!1,E=!1,P=!1,x="";switch((O=y[g]?l(a):{type:"disposed",moduleId:g}).chain&&(x="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":r.onDeclined&&r.onDeclined(O),r.ignoreDeclined||(D=new Error("Aborted because of self decline: "+O.moduleId+x));break;case"declined":r.onDeclined&&r.onDeclined(O),r.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+x));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(O),r.ignoreUnaccepted||(D=new Error("Aborted because "+a+" is not accepted"+x));break;case"accepted":r.onAccepted&&r.onAccepted(O),E=!0;break;case"disposed":r.onDisposed&&r.onDisposed(O),P=!0;break;default:throw new Error("Unexception type "+O.type)}if(D)return h("abort"),Promise.reject(D);if(E)for(a in m[a]=y[a],u(v,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,a)&&(p[a]||(p[a]=[]),u(p[a],O.outdatedDependencies[a]));P&&(u(v,[O.moduleId]),m[a]=w)}var I,A=[];for(t=0;t<v.length;t++)a=v[t],H[a]&&H[a].hot._selfAccepted&&A.push({module:a,errorHandler:H[a].hot._selfAccepted});h("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete k[e]}(e)});for(var q,S,U=v.slice();U.length>0;)if(a=U.pop(),c=H[a]){var T={},R=c.hot._disposeHandlers;for(o=0;o<R.length;o++)(n=R[o])(T);for(d[a]=T,c.hot.active=!1,delete H[a],delete p[a],o=0;o<c.children.length;o++){var C=H[c.children[o]];C&&((I=C.parents.indexOf(a))>=0&&C.parents.splice(I,1))}}for(a in p)if(Object.prototype.hasOwnProperty.call(p,a)&&(c=H[a]))for(S=p[a],o=0;o<S.length;o++)q=S[o],(I=c.children.indexOf(q))>=0&&c.children.splice(I,1);for(a in h("apply"),i=b,m)Object.prototype.hasOwnProperty.call(m,a)&&(e[a]=m[a]);var J=null;for(a in p)if(Object.prototype.hasOwnProperty.call(p,a)&&(c=H[a])){S=p[a];var L=[];for(t=0;t<S.length;t++)if(q=S[t],n=c.hot._acceptedDependencies[q]){if(-1!==L.indexOf(n))continue;L.push(n)}for(t=0;t<L.length;t++){n=L[t];try{n(S)}catch(X){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:a,dependencyId:S[t],error:X}),r.ignoreErrored||J||(J=X)}}}for(t=0;t<A.length;t++){var N=A[t];a=N.module,s=[a];try{M(a)}catch(X){if("function"===typeof N.errorHandler)try{N.errorHandler(X)}catch(G){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:a,error:G,originalError:X}),r.ignoreErrored||J||(J=G),J||(J=X)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:a,error:X}),r.ignoreErrored||J||(J=X)}}return J?(h("fail"),Promise.reject(J)):(h("idle"),new Promise(function(e){e(v)}))}var H={},k={1:0},I=[];function A(e){return M.p+"static/js/"+({2:"src-basics-technical-faq",3:"src-basics-the-basics",4:"src-index",5:"src-lib-js",6:"src-lib-ts",7:"src-protocol-consensus",8:"src-quick-start",9:"src-tutorials-multiplayergame",10:"src-tutorials-oracle",11:"src-tutorials-token"}[e]||e)+"."+{2:"7199260d",3:"aec1f68b",4:"3f52078b",5:"6f89b81c",6:"1da9b484",7:"a71a05db",8:"0ed0ee97",9:"bcaaea46",10:"12a10f35",11:"a8f49a4f",13:"ad96fd7d"}[e]+".js"}function M(r){if(H[r])return H[r].exports;var n=H[r]={i:r,l:!1,exports:{},hot:u(r),parents:(l=s,s=[],l),children:[]};return e[r].call(n.exports,n,n.exports,function(e){var r=H[e];if(!r)return M;var n=function(n){return r.hot.active?(H[n]?-1===H[n].parents.indexOf(e)&&H[n].parents.push(e):(s=[e],o=n),-1===r.children.indexOf(n)&&r.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),M(n)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(r){M[e]=r}}};for(var c in M)Object.prototype.hasOwnProperty.call(M,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(n,c,t(c));return n.e=function(e){return"ready"===f&&h("prepare"),w++,M.e(e).then(r,function(e){throw r(),e});function r(){w--,"prepare"===f&&(g[e]||E(e),0===w&&0===m&&P())}},n.t=function(e,r){return 1&r&&(e=n(e)),M.t(e,-2&r)},n}(r)),n.l=!0,n.exports}M.e=function(e){var r=[],n=k[e];if(0!==n)if(n)r.push(n[2]);else{var t=new Promise(function(r,t){n=k[e]=[r,t]});r.push(n[2]=t);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,M.nc&&c.setAttribute("nonce",M.nc),c.src=A(e),0!==c.src.indexOf(window.location.origin+"/")&&(c.crossOrigin="anonymous"),o=function(r){c.onerror=c.onload=null,clearTimeout(i);var n=k[e];if(0!==n){if(n){var t=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src,a=new Error("Loading chunk "+e+" failed.\n("+t+": "+o+")");a.type=t,a.request=o,n[1](a)}k[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(r)},M.m=e,M.c=H,M.d=function(e,r,n){M.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},M.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,r){if(1&r&&(e=M(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(M.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)M.d(n,t,function(r){return e[r]}.bind(null,t));return n},M.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(r,"a",r),r},M.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},M.p="/",M.oe=function(e){throw console.error(e),e},M.h=function(){return i};var q=window.webpackJsonp=window.webpackJsonp||[],S=q.push.bind(q);q.push=r,q=q.slice();for(var U=0;U<q.length;U++)r(q[U]);var T=S;n()}([]);
//# sourceMappingURL=runtime~app.c533aa3ead60de154af2.js.map