!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.bespoke=e()}}(function(){return function e(n,t,r){function i(a,s){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n){var t=function(e,n){var t=1===e.nodeType?e:document.querySelector(e),r=[].filter.call(t.children,function(e){return"SCRIPT"!==e.nodeName}),i=r[0],o={},a=function(e,n){r[e]&&(l("deactivate",c(i,n)),i=r[e],l("activate",c(i,n)))},s=function(e,n){return arguments.length?(l("slide",c(r[e],n))&&a(e,n),void 0):r.indexOf(i)},u=function(e,n){var t=r.indexOf(i)+e;l(e>0?"next":"prev",c(i,n))&&a(t,n)},f=function(e,n){return(o[e]||(o[e]=[])).push(n),function(){o[e]=o[e].filter(function(e){return e!==n})}},l=function(e,n){return(o[e]||[]).reduce(function(e,t){return e&&t(n)!==!1},!0)},c=function(e,n){return n=n||{},n.index=r.indexOf(e),n.slide=e,n},d={on:f,fire:l,slide:s,next:u.bind(null,1),prev:u.bind(null,-1),parent:t,slides:r};return(n||[]).forEach(function(e){e(d)}),a(0),d};n.exports={from:t}},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var t=n;t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.backdrop=e()}}(function(){return function e(n,t,r){function i(a,s){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n){n.exports=function(){return function(e){function n(n){var t=n.getAttribute("data-bespoke-backdrop");if(t){var r=document.createElement("div");return r.className=t,r.classList.add("bespoke-backdrop"),e.parent.appendChild(r),r}}function t(n){if(n){var t=o.indexOf(n),a=e.slide();r(n,"active"),r(n,"inactive"),r(n,"before"),r(n,"after"),t!==a?(i(n,"inactive"),i(n,a>t?"before":"after")):i(n,"active")}}function r(e,n){e.classList.remove("bespoke-backdrop-"+n)}function i(e,n){e.classList.add("bespoke-backdrop-"+n)}var o;o=e.slides.map(n),e.on("activate",function(){o.forEach(t)})}}},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var t=n;t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.bullets=e()}}(function(){return function e(n,t,r){function i(a,s){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n){n.exports=function(e){return function(n){var t,r,i=n.slides.map(function(n){return[].slice.call(n.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),o=function(){var e=t+1;return u(1)?(s(t,r+1),!1):(i[e]&&s(e,0),void 0)},a=function(){var e=t-1;return u(-1)?(s(t,r-1),!1):(i[e]&&s(e,i[e].length-1),void 0)},s=function(e,n){t=e,r=n,i.forEach(function(t,r){t.forEach(function(t,i){t.classList.add("bespoke-bullet"),e>r||r===e&&n>=i?(t.classList.add("bespoke-bullet-active"),t.classList.remove("bespoke-bullet-inactive")):(t.classList.add("bespoke-bullet-inactive"),t.classList.remove("bespoke-bullet-active"))})})},u=function(e){return void 0!==i[t][r+e]};n.on("next",o),n.on("prev",a),n.on("slide",function(e){s(e.index,0)}),s(0,0)}}},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var t=n;t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.classes=e()}}(function(){return function e(n,t,r){function i(a,s){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n){n.exports=function(){return function(e){var n=function(e,n){e.classList.add("bespoke-"+n)},t=function(e,n){e.className=e.className.replace(new RegExp("bespoke-"+n+"(\\s|$)","g")," ").trim()},r=function(r,i){var o=e.slides[e.slide()],a=i-e.slide(),s=a>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(t.bind(null,r)),r!==o&&["inactive",s,s+"-"+Math.abs(a)].map(n.bind(null,r))};n(e.parent,"parent"),e.slides.map(function(e){n(e,"slide")}),e.on("activate",function(i){e.slides.map(r),n(i.slide,"active"),t(i.slide,"inactive")})}}},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var t=n;t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.hash=e()}}(function(){return function e(n,t,r){function i(a,s){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n){n.exports=function(){return function(e){var n=function(){var n=window.location.hash.slice(1),r=parseInt(n,10);n&&(r?t(r-1):e.slides.forEach(function(e,r){e.getAttribute("data-bespoke-hash")===n&&t(r)}))},t=function(n){var t=n>-1&&n<e.slides.length?n:0;t!==e.slide()&&e.slide(t)};setTimeout(function(){n(),e.on("activate",function(e){var n=e.slide.getAttribute("data-bespoke-hash");window.location.hash=n||e.index+1}),window.addEventListener("hashchange",n)},0)}}},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var t=n;t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.convenient=e()}}(function(){return function e(n,t,r){function i(a,s){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n){"use strict";var t,r="convenient",i=function(e){return e("return this")()}(Function),o={logger:{log:function(){console.log.apply(console,arguments)}}},a=function(){var e={};e.logger={},e.logger.log=i.convenientOptions&&i.convenientOptions.logger&&i.convenientOptions.logger.log||o.logger.log,i.convenientOptions=e},s={},u=[],f=function(e){if(!e)throw t.generateErrorObject("deck must be defined.");var n=u.some(function(n){return n.deck===e});return n},l=function(e){var n=f(e);n||u.push({deck:e,storage:{}})},c=function(e,n){if(!e)throw t.generateErrorObject("pluginName must be defined.");if(!n)throw t.generateErrorObject("deck must be defined.");var r=s.getDeckStorage(n),i=!(!r||!r[e]);return i},d=function(e,n){if(!e)throw t.generateErrorObject("pluginName must be defined.");if(!n)throw t.generateErrorObject("deck must be defined.");var r=s.getDeckStorage(n);r||(l(n),r=s.getDeckStorage(n)),r[e]={}},p=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},g=function(){a()};s.builder=function(e){if(!e)throw t.generateErrorObject("The plugin options were not properly defined.");if("string"==typeof e&&(e={pluginName:e}),"string"!=typeof e.pluginName)throw t.generateErrorObject("The plugin name was not properly defined.");var n={},r="bespoke."+e.pluginName,o=function(e){return new Error(r+": "+e)},a=e.pluginName,u=function(e){return a+"."+e},f=function(e,n,t,r,i,o){var a=s.createEventData.call(e,n,t,r,i,o);return a},l=function(e,n,t,r,i){return e.fire(u(n),f(e,a,n,t,r,i))},p=function(){var e=[r];i.convenientOptions.logger.log.apply(i.convenientOptions.logger.log,e.concat(s.copyArray(arguments)))},g=function(n){var r=c(e.pluginName,n);if(r)throw t.generateErrorObject("The '"+e.pluginName+"' plugin has already been activated for this deck, can't activate it twice.")},h=function(e){var t={};return t.createEventData=n.createEventData.bind(this,e),t.fire=n.fire.bind(this,e),t.getStorage=n.getStorage.bind(this,e),t.log=n.log.bind(this,e),t},m=function(n){var t;return g(n),d(e.pluginName,n),t=h(n)},v=function(){n.createEventData=f.bind(this),n.generateErrorObject=o.bind(this),n.fire=l.bind(this),n.log=p.bind(this),n.activateDeck=m.bind(this),n.getStorage=s.getDeckPluginStorage.bind(this,e.pluginName)},y=function(){v()};return y(),n},s.getDeckStorage=function(e){if(!e)throw t.generateErrorObject("deck must be defined.");var n=null;return u.some(function(t){return t.deck===e?(n=t.storage,!0):!1}),n},s.getDeckPluginStorage=function(e,n){if(!e)throw t.generateErrorObject("pluginName must be defined.");if(!n)throw t.generateErrorObject("deck must be defined.");var r=s.getDeckStorage(n);if(!r)throw t.generateErrorObject("storage was not initiated for this deck.");return r[e]},s.createEventData=function(e,n,t,r,i){return i=i||{},i.eventNamespace=e||null,i.eventName=n||null,i.innerEvent=t||null,p(r)?(i.index=r,i.slide=this.slides[r]):(i.index=this.slides.indexOf(r),i.slide=r),i},s.copyArray=function(e){return[].slice.call(e,0)},t=s.builder(r),g(),n.exports=s},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var t=n;t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.jumpy=e()}}(function(){return function e(n,t,r){function i(a,s){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n){"use strict";var t="jumpy",r=function(e){return e("return this")()}(Function),i=r.bespoke&&r.bespoke.plugins&&r.bespoke.plugins.convenient||e("bespoke-convenient"),o=i.builder(t),a={END:35,HOME:36},s=function(e){for(var n=e;n>9;)n-=48;return n},u=function(e){var n=e>=48&&57>=e||e>=96&&105>=e;return n},f={firstIndex:function(){var e=0;return e},lastIndex:function(){var e=Math.max(0,this.slides.length-1);return e},first:function(e){var n=this.firstIndex(),t=o.fire(this,"first",null,n,e)&&this.slide(n,e);return t},last:function(e){var n=this.lastIndex(),t=o.fire(this,"last",null,n,e)&&this.slide(n,e);return t}},l=function(){var e=function(e){var n=["firstIndex","lastIndex","first","last"],t={},r=function(){n.forEach(function(n){t[n]=e[n],e[n]=f[n].bind(e)})},i=function(n){var t,r,i=!1;return n.altKey||n.ctrlKey||n.metaKey||n.shiftKey?!1:(i=i||n.which===a.END&&o.fire(e,"end",n)&&!e.last(),i=i||n.which===a.HOME&&o.fire(e,"home",n)&&!e.first(),u(n.which)&&(t=s(n.which),r=(t-1+10)%10,i=i||o.fire(e,"jump",n,r)&&!e.slide(r)),i&&n.preventDefault(),!i)},l=function(){document.addEventListener("keydown",i,!1)},c=function(){r(),l()};c()};return e};n.exports=l},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var t=n;t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.keys=e()}}(function(){return function e(n,t,r){function i(a,s){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n){n.exports=function(e){return function(n){var t="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which||t&&39==e.which||!t&&40==e.which)&&n.next(),(33==e.which||t&&37==e.which||!t&&38==e.which)&&n.prev()})}}},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var t=n;t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.progress=e()}}(function(){return function e(n,t,r){function i(a,s){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n){n.exports=function(e){return function(n){var t=document.createElement("div"),r=document.createElement("div"),i="vertical"===e?"height":"width";t.className="bespoke-progress-parent",r.className="bespoke-progress-bar",t.appendChild(r),n.parent.appendChild(t),n.on("activate",function(e){r.style[i]=100*e.index/(n.slides.length-1)+"%"})}}},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var t=n;t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.scale=e()}}(function(){return function e(n,t,r){function i(a,s){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n){n.exports=function(e){return function(n){var t=n.parent,r=n.slides[0],i=r.offsetHeight,o=r.offsetWidth,a="zoom"===e||"zoom"in t.style&&"transform"!==e,s=function(e){var n=document.createElement("div");return n.className="bespoke-scale-parent",e.parentNode.insertBefore(n,e),n.appendChild(e),n},u=a?n.slides:n.slides.map(s),f=function(e){var n="Moz Webkit O ms".split(" ");return n.reduce(function(n,r){return r+e in t.style?r+e:n},e.toLowerCase())}("Transform"),l=a?function(e,n){n.style.zoom=e}:function(e,n){n.style[f]="scale("+e+")"},c=function(){var e=t.offsetWidth/o,n=t.offsetHeight/i;u.forEach(l.bind(null,Math.min(e,n)))};window.addEventListener("resize",c),c()}}},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var t=n;t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.state=e()}}(function(){return function e(n,t,r){function i(a,s){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n){n.exports=function(){return function(e){var n=function(n,t){var r=t.slide.getAttribute("data-bespoke-state");r&&r.split(" ").forEach(function(t){e.parent.classList[n](t)})};e.on("activate",n.bind(null,"add")),e.on("deactivate",n.bind(null,"remove"))}}},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var t=n;t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.touch=e()}}(function(){return function e(n,t,r){function i(a,s){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n){n.exports=function(e){return function(n){var t,r,i="vertical"==e?"Y":"X";n.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(t=e.touches[0]["page"+i],r=0)}),n.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),r=e.touches[0]["page"+i]-t)}),n.parent.addEventListener("touchend",function(){Math.abs(r)>50&&n[r>0?"prev":"next"]()})}}},{}]},{},[1])(1)});var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,n=_self.Prism={util:{encode:function(e){return e instanceof t?new t(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=n.util.clone(e[i]));return r;case"Array":return e.map&&e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var r=n.util.clone(n.languages[e]);for(var i in t)r[i]=t[i];return r},insertBefore:function(e,t,r,i){i=i||n.languages;var o=i[e];if(2==arguments.length){r=arguments[1];for(var a in r)r.hasOwnProperty(a)&&(o[a]=r[a]);return o}var s={};for(var u in o)if(o.hasOwnProperty(u)){if(u==t)for(var a in r)r.hasOwnProperty(a)&&(s[a]=r[a]);s[u]=o[u]}return n.languages.DFS(n.languages,function(n,t){t===i[e]&&n!=e&&(this[n]=s)}),i[e]=s},DFS:function(e,t,r){for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],r||i),"Object"===n.util.type(e[i])?n.languages.DFS(e[i],t):"Array"===n.util.type(e[i])&&n.languages.DFS(e[i],t,i))}},highlightAll:function(e,t){for(var r,i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),o=0;r=i[o++];)n.highlightElement(r,e===!0,t)},highlightElement:function(r,i,o){for(var a,s,u=r;u&&!e.test(u.className);)u=u.parentNode;if(u&&(a=(u.className.match(e)||[,""])[1],s=n.languages[a]),r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+a,u=r.parentNode,/pre/i.test(u.nodeName)&&(u.className=u.className.replace(e,"").replace(/\s+/g," ")+" language-"+a),s){var f=r.textContent;if(f){f=f.replace(/^(?:\r?\n|\r)/,"");var l={element:r,language:a,grammar:s,code:f};if(n.hooks.run("before-highlight",l),i&&_self.Worker){var c=new Worker(n.filename);c.onmessage=function(e){l.highlightedCode=t.stringify(JSON.parse(e.data),a),n.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,o&&o.call(l.element),n.hooks.run("after-highlight",l)},c.postMessage(JSON.stringify({language:l.language,code:l.code}))}else l.highlightedCode=n.highlight(l.code,l.grammar,l.language),n.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,o&&o.call(r),n.hooks.run("after-highlight",l)}}},highlight:function(e,r,i){var o=n.tokenize(e,r);return t.stringify(n.util.encode(o),i)},tokenize:function(e,t){var r=n.Token,i=[e],o=t.rest;if(o){for(var a in o)t[a]=o[a];delete t.rest}e:for(var a in t)if(t.hasOwnProperty(a)&&t[a]){var s=t[a];s="Array"===n.util.type(s)?s:[s];for(var u=0;u<s.length;++u){var f=s[u],l=f.inside,c=!!f.lookbehind,d=0,p=f.alias;f=f.pattern||f;for(var g=0;g<i.length;g++){var h=i[g];if(i.length>e.length)break e;if(!(h instanceof r)){f.lastIndex=0;var m=f.exec(h);if(m){c&&(d=m[1].length);var v=m.index-1+d,m=m[0].slice(d),y=m.length,b=v+y,w=h.slice(0,v+1),k=h.slice(b+1),x=[g,1];w&&x.push(w);var E=new r(a,l?n.tokenize(m,l):m,p);x.push(E),k&&x.push(k),Array.prototype.splice.apply(i,x)}}}}}return i},hooks:{all:{},add:function(e,t){var r=n.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=n.hooks.all[e];if(r&&r.length)for(var i,o=0;i=r[o++];)i(t)}}},t=n.Token=function(e,n,t){this.type=e,this.content=n,this.alias=t};if(t.stringify=function(e,r,i){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return t.stringify(n,r,e)}).join("");var o={type:e.type,content:t.stringify(e.content,r,i),tag:"span",classes:["token",e.type],attributes:{},language:r,parent:i};if("comment"==o.type&&(o.attributes.spellcheck="true"),e.alias){var a="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(o.classes,a)}n.hooks.run("wrap",o);var s="";for(var u in o.attributes)s+=u+'="'+(o.attributes[u]||"")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'" '+s+">"+o.content+"</"+o.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),r=t.language,i=t.code;_self.postMessage(JSON.stringify(n.util.encode(n.tokenize(i,n.languages[r])))),_self.close()},!1),_self.Prism):_self.Prism;var r=document.getElementsByTagName("script");return r=r[r.length-1],r&&(n.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",n.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css},alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/(?!\d)[a-z0-9_$]+(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript},alias:"language-javascript"}}),function(){self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(n){for(var t,r=n.getAttribute("data-src"),i=n,o=/\blang(?:uage)?-(?!\*)(\w+)\b/i;i&&!o.test(i.className);)i=i.parentNode;if(i&&(t=(n.className.match(o)||[,""])[1]),!t){var a=(r.match(/\.(\w+)$/)||[,""])[1];t=e[a]||a}var s=document.createElement("code");s.className="language-"+t,n.textContent="",s.textContent="Loading…",n.appendChild(s);var u=new XMLHttpRequest;u.open("GET",r,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(s.textContent=u.responseText,Prism.highlightElement(s)):s.textContent=u.status>=400?"✖ Error "+u.status+" while fetching file: "+u.statusText:"✖ Error: File does not exist or is empty")},u.send(null)})},self.Prism.fileHighlight())}();var deck=bespoke.from("article",[bespoke.plugins.classes(),bespoke.plugins.bullets("li, .bullet"),bespoke.plugins.backdrop(),bespoke.plugins.scale(),bespoke.plugins.hash(),bespoke.plugins.progress(),bespoke.plugins.state(),bespoke.plugins.touch(),bespoke.plugins.jumpy()]);!function(){var e,n,t=function(e,n){e||[].slice.call(e,0).forEach(n)};t(document.styleSheets,function(r){t(r.rules,function(t){t.style&&t.style.backgroundImage&&(e=t.style.backgroundImage.match(/url\((.*)\)/),e&&(n=new Image,n.src=e[1]))})})}(),function(){document.addEventListener("keyup",function(e){39==e.which&&deck.next(),37==e.which&&deck.prev(),38==e.which&&deck.first(),40==e.which&&deck.last()}),document.addEventListener("click",function(){return deck.next(),!1})}();