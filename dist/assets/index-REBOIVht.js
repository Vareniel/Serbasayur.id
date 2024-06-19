(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function r(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(a){if(a.ep)return;a.ep=!0;const c=r(a);fetch(a.href,c)}})();var ps=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},Ft=Li,cl=Es,dl=fl,ul=$i,hl=Ci,pl=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Es(t){for(var n=[],r=0,l=0,a="",c;(c=pl.exec(t))!=null;){var u=c[0],p=c[1],m=c.index;if(a+=t.slice(l,m),l=m+u.length,p){a+=p[1];continue}a&&(n.push(a),a="");var b=c[2],y=c[3],k=c[4],S=c[5],P=c[6],N=c[7],J=P==="+"||P==="*",V=P==="?"||P==="*",z=b||"/",G=k||S||(N?".*":"[^"+z+"]+?");n.push({name:y||r++,prefix:b||"",delimiter:z,optional:V,repeat:J,pattern:ml(G)})}return l<t.length&&(a+=t.substr(l)),a&&n.push(a),n}function fl(t){return $i(Es(t))}function $i(t){for(var n=new Array(t.length),r=0;r<t.length;r++)typeof t[r]=="object"&&(n[r]=new RegExp("^"+t[r].pattern+"$"));return function(l){for(var a="",c=l||{},u=0;u<t.length;u++){var p=t[u];if(typeof p=="string"){a+=p;continue}var m=c[p.name],b;if(m==null){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to be defined')}if(ps(m)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but received "'+m+'"');if(m.length===0){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var y=0;y<m.length;y++){if(b=encodeURIComponent(m[y]),!n[u].test(b))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'", but received "'+b+'"');a+=(y===0?p.prefix:p.delimiter)+b}continue}if(b=encodeURIComponent(m),!n[u].test(b))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but received "'+b+'"');a+=p.prefix+b}return a}}function di(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function ml(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function xs(t,n){return t.keys=n,t}function Si(t){return t.sensitive?"":"i"}function gl(t,n){var r=t.source.match(/\((?!\?)/g);if(r)for(var l=0;l<r.length;l++)n.push({name:l,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return xs(t,n)}function vl(t,n,r){for(var l=[],a=0;a<t.length;a++)l.push(Li(t[a],n,r).source);var c=new RegExp("(?:"+l.join("|")+")",Si(r));return xs(c,n)}function bl(t,n,r){for(var l=Es(t),a=Ci(l,r),c=0;c<l.length;c++)typeof l[c]!="string"&&n.push(l[c]);return xs(a,n)}function Ci(t,n){n=n||{};for(var r=n.strict,l=n.end!==!1,a="",c=t[t.length-1],u=typeof c=="string"&&/\/$/.test(c),p=0;p<t.length;p++){var m=t[p];if(typeof m=="string")a+=di(m);else{var b=di(m.prefix),y=m.pattern;m.repeat&&(y+="(?:"+b+y+")*"),m.optional?b?y="(?:"+b+"("+y+"))?":y="("+y+")?":y=b+"("+y+")",a+=y}}return r||(a=(u?a.slice(0,-2):a)+"(?:\\/(?=$))?"),l?a+="$":a+=r&&u?"":"(?=\\/|$)",new RegExp("^"+a,Si(n))}function Li(t,n,r){return n=n||[],ps(n)?r||(r={}):(r=n,n=[]),t instanceof RegExp?gl(t,n):ps(t)?vl(t,n,r):bl(t,n,r)}Ft.parse=cl;Ft.compile=dl;Ft.tokensToFunction=ul;Ft.tokensToRegExp=hl;var wt=typeof document<"u",ye=typeof window<"u",kn=typeof history<"u",yl=typeof process<"u",fs=wt&&document.ontouchstart?"touchstart":"click",je=ye&&!!(window.history.location||window.location);function Y(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}Y.prototype.configure=function(t){var n=t||{};this._window=n.window||ye&&window,this._decodeURLComponents=n.decodeURLComponents!==!1,this._popstate=n.popstate!==!1&&ye,this._click=n.click!==!1&&wt,this._hashbang=!!n.hashbang;var r=this._window;this._popstate?r.addEventListener("popstate",this._onpopstate,!1):ye&&r.removeEventListener("popstate",this._onpopstate,!1),this._click?r.document.addEventListener(fs,this.clickHandler,!1):wt&&r.document.removeEventListener(fs,this.clickHandler,!1),this._hashbang&&ye&&!kn?r.addEventListener("hashchange",this._onpopstate,!1):ye&&r.removeEventListener("hashchange",this._onpopstate,!1)};Y.prototype.base=function(t){if(arguments.length===0)return this._base;this._base=t};Y.prototype._getBase=function(){var t=this._base;if(t)return t;var n=ye&&this._window&&this._window.location;return ye&&this._hashbang&&n&&n.protocol==="file:"&&(t=n.pathname),t};Y.prototype.strict=function(t){if(arguments.length===0)return this._strict;this._strict=t};Y.prototype.start=function(t){var n=t||{};if(this.configure(n),n.dispatch!==!1){this._running=!0;var r;if(je){var l=this._window,a=l.location;this._hashbang&&~a.hash.indexOf("#!")?r=a.hash.substr(2)+a.search:this._hashbang?r=a.search+a.hash:r=a.pathname+a.search+a.hash}this.replace(r,null,!0,n.dispatch)}};Y.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(fs,this.clickHandler,!1),ye&&t.removeEventListener("popstate",this._onpopstate,!1),ye&&t.removeEventListener("hashchange",this._onpopstate,!1)}};Y.prototype.show=function(t,n,r,l){var a=new Ht(t,n,this),c=this.prevContext;return this.prevContext=a,this.current=a.path,r!==!1&&this.dispatch(a,c),a.handled!==!1&&l!==!1&&a.pushState(),a};Y.prototype.back=function(t,n){var r=this;if(this.len>0){var l=this._window;kn&&l.history.back(),this.len--}else setTimeout(t?function(){r.show(t,n)}:function(){r.show(r._getBase(),n)})};Y.prototype.redirect=function(t,n){var r=this;typeof t=="string"&&typeof n=="string"&&En.call(this,t,function(l){setTimeout(function(){r.replace(n)},0)}),typeof t=="string"&&typeof n>"u"&&setTimeout(function(){r.replace(t)},0)};Y.prototype.replace=function(t,n,r,l){var a=new Ht(t,n,this),c=this.prevContext;return this.prevContext=a,this.current=a.path,a.init=r,a.save(),l!==!1&&this.dispatch(a,c),a};Y.prototype.dispatch=function(t,n){var r=0,l=0,a=this;function c(){var p=a.exits[l++];if(!p)return u();p(n,c)}function u(){var p=a.callbacks[r++];if(t.path!==a.current){t.handled=!1;return}if(!p)return _l.call(a,t);p(t,u)}n?c():u()};Y.prototype.exit=function(t,n){if(typeof t=="function")return this.exit("*",t);for(var r=new qt(t,null,this),l=1;l<arguments.length;++l)this.exits.push(r.middleware(arguments[l]))};Y.prototype.clickHandler=function(t){if(this._which(t)===1&&!(t.metaKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented){var n=t.target,r=t.path||(t.composedPath?t.composedPath():null);if(r){for(var l=0;l<r.length;l++)if(r[l].nodeName&&r[l].nodeName.toUpperCase()==="A"&&r[l].href){n=r[l];break}}for(;n&&n.nodeName.toUpperCase()!=="A";)n=n.parentNode;if(!(!n||n.nodeName.toUpperCase()!=="A")){var a=typeof n.href=="object"&&n.href.constructor.name==="SVGAnimatedString";if(!(n.hasAttribute("download")||n.getAttribute("rel")==="external")){var c=n.getAttribute("href");if(!(!this._hashbang&&this._samePath(n)&&(n.hash||c==="#"))&&!(c&&c.indexOf("mailto:")>-1)&&!(a?n.target.baseVal:n.target)&&!(!a&&!this.sameOrigin(n.href))){var u=a?n.href.baseVal:n.pathname+n.search+(n.hash||"");u=u[0]!=="/"?"/"+u:u,yl&&u.match(/^\/[a-zA-Z]:\//)&&(u=u.replace(/^\/[a-zA-Z]:\//,"/"));var p=u,m=this._getBase();u.indexOf(m)===0&&(u=u.substr(m.length)),this._hashbang&&(u=u.replace("#!","")),!(m&&p===u&&(!je||this._window.location.protocol!=="file:"))&&(t.preventDefault(),this.show(p))}}}}};Y.prototype._onpopstate=function(){var t=!1;return ye?(wt&&document.readyState==="complete"?t=!0:window.addEventListener("load",function(){setTimeout(function(){t=!0},0)}),function(r){if(t){var l=this;if(r.state){var a=r.state.path;l.replace(a,r.state)}else if(je){var c=l._window.location;l.show(c.pathname+c.search+c.hash,void 0,void 0,!1)}}}):function(){}}();Y.prototype._which=function(t){return t=t||ye&&this._window.event,t.which==null?t.button:t.which};Y.prototype._toURL=function(t){var n=this._window;if(typeof URL=="function"&&je)return new URL(t,n.location.toString());if(wt){var r=n.document.createElement("a");return r.href=t,r}};Y.prototype.sameOrigin=function(t){if(!t||!je)return!1;var n=this._toURL(t),r=this._window,l=r.location;return l.protocol===n.protocol&&l.hostname===n.hostname&&(l.port===n.port||l.port===""&&(n.port==80||n.port==443))};Y.prototype._samePath=function(t){if(!je)return!1;var n=this._window,r=n.location;return t.pathname===r.pathname&&t.search===r.search};Y.prototype._decodeURLEncodedURIComponent=function(t){return typeof t!="string"?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t};function Ti(){var t=new Y;function n(){return En.apply(t,arguments)}return n.callbacks=t.callbacks,n.exits=t.exits,n.base=t.base.bind(t),n.strict=t.strict.bind(t),n.start=t.start.bind(t),n.stop=t.stop.bind(t),n.show=t.show.bind(t),n.back=t.back.bind(t),n.redirect=t.redirect.bind(t),n.replace=t.replace.bind(t),n.dispatch=t.dispatch.bind(t),n.exit=t.exit.bind(t),n.configure=t.configure.bind(t),n.sameOrigin=t.sameOrigin.bind(t),n.clickHandler=t.clickHandler.bind(t),n.create=Ti,Object.defineProperty(n,"len",{get:function(){return t.len},set:function(r){t.len=r}}),Object.defineProperty(n,"current",{get:function(){return t.current},set:function(r){t.current=r}}),n.Context=Ht,n.Route=qt,n}function En(t,n){if(typeof t=="function")return En.call(this,"*",t);if(typeof n=="function")for(var r=new qt(t,null,this),l=1;l<arguments.length;++l)this.callbacks.push(r.middleware(arguments[l]));else typeof t=="string"?this[typeof n=="string"?"redirect":"show"](t,n):this.start(t)}function _l(t){if(!t.handled){var n,r=this,l=r._window;r._hashbang?n=je&&this._getBase()+l.location.hash.replace("#!",""):n=je&&l.location.pathname+l.location.search,n!==t.canonicalPath&&(r.stop(),t.handled=!1,je&&(l.location.href=t.canonicalPath))}}function wl(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ht(t,n,r){var l=this.page=r||En,a=l._window,c=l._hashbang,u=l._getBase();t[0]==="/"&&t.indexOf(u)!==0&&(t=u+(c?"#!":"")+t);var p=t.indexOf("?");this.canonicalPath=t;var m=new RegExp("^"+wl(u));if(this.path=t.replace(m,"")||"/",c&&(this.path=this.path.replace("#!","")||"/"),this.title=wt&&a.document.title,this.state=n||{},this.state.path=t,this.querystring=~p?l._decodeURLEncodedURIComponent(t.slice(p+1)):"",this.pathname=l._decodeURLEncodedURIComponent(~p?t.slice(0,p):t),this.params={},this.hash="",!c){if(!~this.path.indexOf("#"))return;var b=this.path.split("#");this.path=this.pathname=b[0],this.hash=l._decodeURLEncodedURIComponent(b[1])||"",this.querystring=this.querystring.split("#")[0]}}Ht.prototype.pushState=function(){var t=this.page,n=t._window,r=t._hashbang;t.len++,kn&&n.history.pushState(this.state,this.title,r&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};Ht.prototype.save=function(){var t=this.page;kn&&t._window.history.replaceState(this.state,this.title,t._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function qt(t,n,r){var l=this.page=r||As,a=n||{};a.strict=a.strict||l._strict,this.path=t==="*"?"(.*)":t,this.method="GET",this.regexp=Ft(this.path,this.keys=[],a)}qt.prototype.middleware=function(t){var n=this;return function(r,l){if(n.match(r.path,r.params))return r.routePath=n.path,t(r,l);l()}};qt.prototype.match=function(t,n){var r=this.keys,l=t.indexOf("?"),a=~l?t.slice(0,l):t,c=this.regexp.exec(decodeURIComponent(a));if(!c)return!1;delete n[0];for(var u=1,p=c.length;u<p;++u){var m=r[u-1],b=this.page._decodeURLEncodedURIComponent(c[u]);(b!==void 0||!hasOwnProperty.call(n,m.name))&&(n[m.name]=b)}return!0};var As=Ti(),R=As,kl=As;R.default=kl;var El=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xl={exports:{}};/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,n){(function(r,l){t.exports=l()})(El,function(){const r=new Map,l={set(i,e,s){r.has(i)||r.set(i,new Map);const o=r.get(i);o.has(e)||o.size===0?o.set(e,s):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get:(i,e)=>r.has(i)&&r.get(i).get(e)||null,remove(i,e){if(!r.has(i))return;const s=r.get(i);s.delete(e),s.size===0&&r.delete(i)}},a="transitionend",c=i=>(i&&window.CSS&&window.CSS.escape&&(i=i.replace(/#([^\s"#']+)/g,(e,s)=>`#${CSS.escape(s)}`)),i),u=i=>{i.dispatchEvent(new Event(a))},p=i=>!(!i||typeof i!="object")&&(i.jquery!==void 0&&(i=i[0]),i.nodeType!==void 0),m=i=>p(i)?i.jquery?i[0]:i:typeof i=="string"&&i.length>0?document.querySelector(c(i)):null,b=i=>{if(!p(i)||i.getClientRects().length===0)return!1;const e=getComputedStyle(i).getPropertyValue("visibility")==="visible",s=i.closest("details:not([open])");if(!s)return e;if(s!==i){const o=i.closest("summary");if(o&&o.parentNode!==s||o===null)return!1}return e},y=i=>!i||i.nodeType!==Node.ELEMENT_NODE||!!i.classList.contains("disabled")||(i.disabled!==void 0?i.disabled:i.hasAttribute("disabled")&&i.getAttribute("disabled")!=="false"),k=i=>{if(!document.documentElement.attachShadow)return null;if(typeof i.getRootNode=="function"){const e=i.getRootNode();return e instanceof ShadowRoot?e:null}return i instanceof ShadowRoot?i:i.parentNode?k(i.parentNode):null},S=()=>{},P=i=>{i.offsetHeight},N=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,J=[],V=()=>document.documentElement.dir==="rtl",z=i=>{var e;e=()=>{const s=N();if(s){const o=i.NAME,d=s.fn[o];s.fn[o]=i.jQueryInterface,s.fn[o].Constructor=i,s.fn[o].noConflict=()=>(s.fn[o]=d,i.jQueryInterface)}},document.readyState==="loading"?(J.length||document.addEventListener("DOMContentLoaded",()=>{for(const s of J)s()}),J.push(e)):e()},G=(i,e=[],s=i)=>typeof i=="function"?i(...e):s,Ae=(i,e,s=!0)=>{if(!s)return void G(i);const o=(f=>{if(!f)return 0;let{transitionDuration:g,transitionDelay:_}=window.getComputedStyle(f);const E=Number.parseFloat(g),x=Number.parseFloat(_);return E||x?(g=g.split(",")[0],_=_.split(",")[0],1e3*(Number.parseFloat(g)+Number.parseFloat(_))):0})(e)+5;let d=!1;const h=({target:f})=>{f===e&&(d=!0,e.removeEventListener(a,h),G(i))};e.addEventListener(a,h),setTimeout(()=>{d||u(e)},o)},Be=(i,e,s,o)=>{const d=i.length;let h=i.indexOf(e);return h===-1?!s&&o?i[d-1]:i[0]:(h+=s?1:-1,o&&(h=(h+d)%d),i[Math.max(0,Math.min(h,d-1))])},$n=/[^.]*(?=\..*)\.|.*/,xt=/\..*/,ae=/::\d+$/,pe={};let _e=1;const At={mouseenter:"mouseover",mouseleave:"mouseout"},It=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Pe(i,e){return e&&`${e}::${_e++}`||i.uidEvent||_e++}function Sn(i){const e=Pe(i);return i.uidEvent=e,pe[e]=pe[e]||{},pe[e]}function oe(i,e,s=null){return Object.values(i).find(o=>o.callable===e&&o.delegationSelector===s)}function We(i,e,s){const o=typeof e=="string",d=o?s:e||s;let h=Ls(i);return It.has(h)||(h=i),[o,d,h]}function $t(i,e,s,o,d){if(typeof e!="string"||!i)return;let[h,f,g]=We(e,s,o);e in At&&(f=(L=>function($){if(!$.relatedTarget||$.relatedTarget!==$.delegateTarget&&!$.delegateTarget.contains($.relatedTarget))return L.call(this,$)})(f));const _=Sn(i),E=_[g]||(_[g]={}),x=oe(E,f,h?s:null);if(x)return void(x.oneOff=x.oneOff&&d);const w=Pe(f,e.replace($n,"")),O=h?function(I,L,$){return function T(q){const W=I.querySelectorAll(L);for(let{target:D}=q;D&&D!==this;D=D.parentNode)for(const B of W)if(B===D)return Ln(q,{delegateTarget:D}),T.oneOff&&v.off(I,q.type,L,$),$.apply(D,[q])}}(i,s,f):function(I,L){return function $(T){return Ln(T,{delegateTarget:I}),$.oneOff&&v.off(I,T.type,L),L.apply(I,[T])}}(i,f);O.delegationSelector=h?s:null,O.callable=f,O.oneOff=d,O.uidEvent=w,E[w]=O,i.addEventListener(g,O,h)}function Cn(i,e,s,o,d){const h=oe(e[s],o,d);h&&(i.removeEventListener(s,h,!!d),delete e[s][h.uidEvent])}function zi(i,e,s,o){const d=e[s]||{};for(const[h,f]of Object.entries(d))h.includes(o)&&Cn(i,e,s,f.callable,f.delegationSelector)}function Ls(i){return i=i.replace(xt,""),At[i]||i}const v={on(i,e,s,o){$t(i,e,s,o,!1)},one(i,e,s,o){$t(i,e,s,o,!0)},off(i,e,s,o){if(typeof e!="string"||!i)return;const[d,h,f]=We(e,s,o),g=f!==e,_=Sn(i),E=_[f]||{},x=e.startsWith(".");if(h===void 0){if(x)for(const w of Object.keys(_))zi(i,_,w,e.slice(1));for(const[w,O]of Object.entries(E)){const I=w.replace(ae,"");g&&!e.includes(I)||Cn(i,_,f,O.callable,O.delegationSelector)}}else{if(!Object.keys(E).length)return;Cn(i,_,f,h,d?s:null)}},trigger(i,e,s){if(typeof e!="string"||!i)return null;const o=N();let d=null,h=!0,f=!0,g=!1;e!==Ls(e)&&o&&(d=o.Event(e,s),o(i).trigger(d),h=!d.isPropagationStopped(),f=!d.isImmediatePropagationStopped(),g=d.isDefaultPrevented());const _=Ln(new Event(e,{bubbles:h,cancelable:!0}),s);return g&&_.preventDefault(),f&&i.dispatchEvent(_),_.defaultPrevented&&d&&d.preventDefault(),_}};function Ln(i,e={}){for(const[s,o]of Object.entries(e))try{i[s]=o}catch{Object.defineProperty(i,s,{configurable:!0,get:()=>o})}return i}function Ts(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function Tn(i){return i.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const Oe={setDataAttribute(i,e,s){i.setAttribute(`data-bs-${Tn(e)}`,s)},removeDataAttribute(i,e){i.removeAttribute(`data-bs-${Tn(e)}`)},getDataAttributes(i){if(!i)return{};const e={},s=Object.keys(i.dataset).filter(o=>o.startsWith("bs")&&!o.startsWith("bsConfig"));for(const o of s){let d=o.replace(/^bs/,"");d=d.charAt(0).toLowerCase()+d.slice(1,d.length),e[d]=Ts(i.dataset[o])}return e},getDataAttribute:(i,e)=>Ts(i.getAttribute(`data-bs-${Tn(e)}`))};class St{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,s){const o=p(s)?Oe.getDataAttribute(s,"config"):{};return{...this.constructor.Default,...typeof o=="object"?o:{},...p(s)?Oe.getDataAttributes(s):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,s=this.constructor.DefaultType){for(const[d,h]of Object.entries(s)){const f=e[d],g=p(f)?"element":(o=f)==null?`${o}`:Object.prototype.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(h).test(g))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${d}" provided type "${g}" but expected type "${h}".`)}var o}}class we extends St{constructor(e,s){super(),(e=m(e))&&(this._element=e,this._config=this._getConfig(s),l.set(this._element,this.constructor.DATA_KEY,this))}dispose(){l.remove(this._element,this.constructor.DATA_KEY),v.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,s,o=!0){Ae(e,s,o)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return l.get(m(e),this.DATA_KEY)}static getOrCreateInstance(e,s={}){return this.getInstance(e)||new this(e,typeof s=="object"?s:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const Pn=i=>{let e=i.getAttribute("data-bs-target");if(!e||e==="#"){let s=i.getAttribute("href");if(!s||!s.includes("#")&&!s.startsWith("."))return null;s.includes("#")&&!s.startsWith("#")&&(s=`#${s.split("#")[1]}`),e=s&&s!=="#"?s.trim():null}return e?e.split(",").map(s=>c(s)).join(","):null},A={find:(i,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,i)),findOne:(i,e=document.documentElement)=>Element.prototype.querySelector.call(e,i),children:(i,e)=>[].concat(...i.children).filter(s=>s.matches(e)),parents(i,e){const s=[];let o=i.parentNode.closest(e);for(;o;)s.push(o),o=o.parentNode.closest(e);return s},prev(i,e){let s=i.previousElementSibling;for(;s;){if(s.matches(e))return[s];s=s.previousElementSibling}return[]},next(i,e){let s=i.nextElementSibling;for(;s;){if(s.matches(e))return[s];s=s.nextElementSibling}return[]},focusableChildren(i){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(s=>`${s}:not([tabindex^="-"])`).join(",");return this.find(e,i).filter(s=>!y(s)&&b(s))},getSelectorFromElement(i){const e=Pn(i);return e&&A.findOne(e)?e:null},getElementFromSelector(i){const e=Pn(i);return e?A.findOne(e):null},getMultipleElementsFromSelector(i){const e=Pn(i);return e?A.find(e):[]}},Gt=(i,e="hide")=>{const s=`click.dismiss${i.EVENT_KEY}`,o=i.NAME;v.on(document,s,`[data-bs-dismiss="${o}"]`,function(d){if(["A","AREA"].includes(this.tagName)&&d.preventDefault(),y(this))return;const h=A.getElementFromSelector(this)||this.closest(`.${o}`);i.getOrCreateInstance(h)[e]()})},Ps=".bs.alert",Gi=`close${Ps}`,Vi=`closed${Ps}`;class Ct extends we{static get NAME(){return"alert"}close(){if(v.trigger(this._element,Gi).defaultPrevented)return;this._element.classList.remove("show");const e=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),v.trigger(this._element,Vi),this.dispose()}static jQueryInterface(e){return this.each(function(){const s=Ct.getOrCreateInstance(this);if(typeof e=="string"){if(s[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);s[e](this)}})}}Gt(Ct,"close"),z(Ct);const Os='[data-bs-toggle="button"]';class Lt extends we{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(e){return this.each(function(){const s=Lt.getOrCreateInstance(this);e==="toggle"&&s[e]()})}}v.on(document,"click.bs.button.data-api",Os,i=>{i.preventDefault();const e=i.target.closest(Os);Lt.getOrCreateInstance(e).toggle()}),z(Lt);const it=".bs.swipe",Qi=`touchstart${it}`,Xi=`touchmove${it}`,Yi=`touchend${it}`,Ji=`pointerdown${it}`,Zi=`pointerup${it}`,ea={endCallback:null,leftCallback:null,rightCallback:null},ta={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Vt extends St{constructor(e,s){super(),this._element=e,e&&Vt.isSupported()&&(this._config=this._getConfig(s),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return ea}static get DefaultType(){return ta}static get NAME(){return"swipe"}dispose(){v.off(this._element,it)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),G(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=40)return;const s=e/this._deltaX;this._deltaX=0,s&&G(s>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(v.on(this._element,Ji,e=>this._start(e)),v.on(this._element,Zi,e=>this._end(e)),this._element.classList.add("pointer-event")):(v.on(this._element,Qi,e=>this._start(e)),v.on(this._element,Xi,e=>this._move(e)),v.on(this._element,Yi,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType==="pen"||e.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Fe=".bs.carousel",Ms=".data-api",Tt="next",at="prev",ot="left",Qt="right",na=`slide${Fe}`,On=`slid${Fe}`,sa=`keydown${Fe}`,ra=`mouseenter${Fe}`,ia=`mouseleave${Fe}`,aa=`dragstart${Fe}`,oa=`load${Fe}${Ms}`,la=`click${Fe}${Ms}`,Rs="carousel",Xt="active",Ds=".active",js=".carousel-item",ca=Ds+js,da={ArrowLeft:Qt,ArrowRight:ot},ua={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ha={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class lt extends we{constructor(e,s){super(e,s),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=A.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Rs&&this.cycle()}static get Default(){return ua}static get DefaultType(){return ha}static get NAME(){return"carousel"}next(){this._slide(Tt)}nextWhenVisible(){!document.hidden&&b(this._element)&&this.next()}prev(){this._slide(at)}pause(){this._isSliding&&u(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?v.one(this._element,On,()=>this.cycle()):this.cycle())}to(e){const s=this._getItems();if(e>s.length-1||e<0)return;if(this._isSliding)return void v.one(this._element,On,()=>this.to(e));const o=this._getItemIndex(this._getActive());if(o===e)return;const d=e>o?Tt:at;this._slide(d,s[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&v.on(this._element,sa,e=>this._keydown(e)),this._config.pause==="hover"&&(v.on(this._element,ra,()=>this.pause()),v.on(this._element,ia,()=>this._maybeEnableCycle())),this._config.touch&&Vt.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of A.find(".carousel-item img",this._element))v.on(s,aa,o=>o.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(ot)),rightCallback:()=>this._slide(this._directionToOrder(Qt)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new Vt(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const s=da[e.key];s&&(e.preventDefault(),this._slide(this._directionToOrder(s)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const s=A.findOne(Ds,this._indicatorsElement);s.classList.remove(Xt),s.removeAttribute("aria-current");const o=A.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);o&&(o.classList.add(Xt),o.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const s=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=s||this._config.defaultInterval}_slide(e,s=null){if(this._isSliding)return;const o=this._getActive(),d=e===Tt,h=s||Be(this._getItems(),o,d,this._config.wrap);if(h===o)return;const f=this._getItemIndex(h),g=w=>v.trigger(this._element,w,{relatedTarget:h,direction:this._orderToDirection(e),from:this._getItemIndex(o),to:f});if(g(na).defaultPrevented||!o||!h)return;const _=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(f),this._activeElement=h;const E=d?"carousel-item-start":"carousel-item-end",x=d?"carousel-item-next":"carousel-item-prev";h.classList.add(x),P(h),o.classList.add(E),h.classList.add(E),this._queueCallback(()=>{h.classList.remove(E,x),h.classList.add(Xt),o.classList.remove(Xt,x,E),this._isSliding=!1,g(On)},o,this._isAnimated()),_&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return A.findOne(ca,this._element)}_getItems(){return A.find(js,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return V()?e===ot?at:Tt:e===ot?Tt:at}_orderToDirection(e){return V()?e===at?ot:Qt:e===at?Qt:ot}static jQueryInterface(e){return this.each(function(){const s=lt.getOrCreateInstance(this,e);if(typeof e!="number"){if(typeof e=="string"){if(s[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);s[e]()}}else s.to(e)})}}v.on(document,la,"[data-bs-slide], [data-bs-slide-to]",function(i){const e=A.getElementFromSelector(this);if(!e||!e.classList.contains(Rs))return;i.preventDefault();const s=lt.getOrCreateInstance(e),o=this.getAttribute("data-bs-slide-to");return o?(s.to(o),void s._maybeEnableCycle()):Oe.getDataAttribute(this,"slide")==="next"?(s.next(),void s._maybeEnableCycle()):(s.prev(),void s._maybeEnableCycle())}),v.on(window,oa,()=>{const i=A.find('[data-bs-ride="carousel"]');for(const e of i)lt.getOrCreateInstance(e)}),z(lt);const Pt=".bs.collapse",pa=`show${Pt}`,fa=`shown${Pt}`,ma=`hide${Pt}`,ga=`hidden${Pt}`,va=`click${Pt}.data-api`,Mn="show",ct="collapse",Yt="collapsing",ba=`:scope .${ct} .${ct}`,Rn='[data-bs-toggle="collapse"]',ya={parent:null,toggle:!0},_a={parent:"(null|element)",toggle:"boolean"};class dt extends we{constructor(e,s){super(e,s),this._isTransitioning=!1,this._triggerArray=[];const o=A.find(Rn);for(const d of o){const h=A.getSelectorFromElement(d),f=A.find(h).filter(g=>g===this._element);h!==null&&f.length&&this._triggerArray.push(d)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ya}static get DefaultType(){return _a}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(d=>d!==this._element).map(d=>dt.getOrCreateInstance(d,{toggle:!1}))),e.length&&e[0]._isTransitioning||v.trigger(this._element,pa).defaultPrevented)return;for(const d of e)d.hide();const s=this._getDimension();this._element.classList.remove(ct),this._element.classList.add(Yt),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Yt),this._element.classList.add(ct,Mn),this._element.style[s]="",v.trigger(this._element,fa)},this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||v.trigger(this._element,ma).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,P(this._element),this._element.classList.add(Yt),this._element.classList.remove(ct,Mn);for(const s of this._triggerArray){const o=A.getElementFromSelector(s);o&&!this._isShown(o)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0,this._element.style[e]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Yt),this._element.classList.add(ct),v.trigger(this._element,ga)},this._element,!0)}_isShown(e=this._element){return e.classList.contains(Mn)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=m(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Rn);for(const s of e){const o=A.getElementFromSelector(s);o&&this._addAriaAndCollapsedClass([s],this._isShown(o))}}_getFirstLevelChildren(e){const s=A.find(ba,this._config.parent);return A.find(e,this._config.parent).filter(o=>!s.includes(o))}_addAriaAndCollapsedClass(e,s){if(e.length)for(const o of e)o.classList.toggle("collapsed",!s),o.setAttribute("aria-expanded",s)}static jQueryInterface(e){const s={};return typeof e=="string"&&/show|hide/.test(e)&&(s.toggle=!1),this.each(function(){const o=dt.getOrCreateInstance(this,s);if(typeof e=="string"){if(o[e]===void 0)throw new TypeError(`No method named "${e}"`);o[e]()}})}}v.on(document,va,Rn,function(i){(i.target.tagName==="A"||i.delegateTarget&&i.delegateTarget.tagName==="A")&&i.preventDefault();for(const e of A.getMultipleElementsFromSelector(this))dt.getOrCreateInstance(e,{toggle:!1}).toggle()}),z(dt);var ne="top",le="bottom",ce="right",se="left",Jt="auto",ut=[ne,le,ce,se],ze="start",ht="end",Ns="clippingParents",Dn="viewport",pt="popper",Bs="reference",jn=ut.reduce(function(i,e){return i.concat([e+"-"+ze,e+"-"+ht])},[]),Nn=[].concat(ut,[Jt]).reduce(function(i,e){return i.concat([e,e+"-"+ze,e+"-"+ht])},[]),Fs="beforeRead",Hs="read",qs="afterRead",Ks="beforeMain",Us="main",Ws="afterMain",zs="beforeWrite",Gs="write",Vs="afterWrite",Qs=[Fs,Hs,qs,Ks,Us,Ws,zs,Gs,Vs];function Ie(i){return i?(i.nodeName||"").toLowerCase():null}function de(i){if(i==null)return window;if(i.toString()!=="[object Window]"){var e=i.ownerDocument;return e&&e.defaultView||window}return i}function Ge(i){return i instanceof de(i).Element||i instanceof Element}function fe(i){return i instanceof de(i).HTMLElement||i instanceof HTMLElement}function Bn(i){return typeof ShadowRoot<"u"&&(i instanceof de(i).ShadowRoot||i instanceof ShadowRoot)}const Fn={name:"applyStyles",enabled:!0,phase:"write",fn:function(i){var e=i.state;Object.keys(e.elements).forEach(function(s){var o=e.styles[s]||{},d=e.attributes[s]||{},h=e.elements[s];fe(h)&&Ie(h)&&(Object.assign(h.style,o),Object.keys(d).forEach(function(f){var g=d[f];g===!1?h.removeAttribute(f):h.setAttribute(f,g===!0?"":g)}))})},effect:function(i){var e=i.state,s={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,s.popper),e.styles=s,e.elements.arrow&&Object.assign(e.elements.arrow.style,s.arrow),function(){Object.keys(e.elements).forEach(function(o){var d=e.elements[o],h=e.attributes[o]||{},f=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:s[o]).reduce(function(g,_){return g[_]="",g},{});fe(d)&&Ie(d)&&(Object.assign(d.style,f),Object.keys(h).forEach(function(g){d.removeAttribute(g)}))})}},requires:["computeStyles"]};function $e(i){return i.split("-")[0]}var Ve=Math.max,Zt=Math.min,ft=Math.round;function Hn(){var i=navigator.userAgentData;return i!=null&&i.brands&&Array.isArray(i.brands)?i.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Xs(){return!/^((?!chrome|android).)*safari/i.test(Hn())}function mt(i,e,s){e===void 0&&(e=!1),s===void 0&&(s=!1);var o=i.getBoundingClientRect(),d=1,h=1;e&&fe(i)&&(d=i.offsetWidth>0&&ft(o.width)/i.offsetWidth||1,h=i.offsetHeight>0&&ft(o.height)/i.offsetHeight||1);var f=(Ge(i)?de(i):window).visualViewport,g=!Xs()&&s,_=(o.left+(g&&f?f.offsetLeft:0))/d,E=(o.top+(g&&f?f.offsetTop:0))/h,x=o.width/d,w=o.height/h;return{width:x,height:w,top:E,right:_+x,bottom:E+w,left:_,x:_,y:E}}function qn(i){var e=mt(i),s=i.offsetWidth,o=i.offsetHeight;return Math.abs(e.width-s)<=1&&(s=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:i.offsetLeft,y:i.offsetTop,width:s,height:o}}function Ys(i,e){var s=e.getRootNode&&e.getRootNode();if(i.contains(e))return!0;if(s&&Bn(s)){var o=e;do{if(o&&i.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Me(i){return de(i).getComputedStyle(i)}function wa(i){return["table","td","th"].indexOf(Ie(i))>=0}function He(i){return((Ge(i)?i.ownerDocument:i.document)||window.document).documentElement}function en(i){return Ie(i)==="html"?i:i.assignedSlot||i.parentNode||(Bn(i)?i.host:null)||He(i)}function Js(i){return fe(i)&&Me(i).position!=="fixed"?i.offsetParent:null}function Ot(i){for(var e=de(i),s=Js(i);s&&wa(s)&&Me(s).position==="static";)s=Js(s);return s&&(Ie(s)==="html"||Ie(s)==="body"&&Me(s).position==="static")?e:s||function(o){var d=/firefox/i.test(Hn());if(/Trident/i.test(Hn())&&fe(o)&&Me(o).position==="fixed")return null;var h=en(o);for(Bn(h)&&(h=h.host);fe(h)&&["html","body"].indexOf(Ie(h))<0;){var f=Me(h);if(f.transform!=="none"||f.perspective!=="none"||f.contain==="paint"||["transform","perspective"].indexOf(f.willChange)!==-1||d&&f.willChange==="filter"||d&&f.filter&&f.filter!=="none")return h;h=h.parentNode}return null}(i)||e}function Kn(i){return["top","bottom"].indexOf(i)>=0?"x":"y"}function Mt(i,e,s){return Ve(i,Zt(e,s))}function Zs(i){return Object.assign({},{top:0,right:0,bottom:0,left:0},i)}function er(i,e){return e.reduce(function(s,o){return s[o]=i,s},{})}const tr={name:"arrow",enabled:!0,phase:"main",fn:function(i){var e,s=i.state,o=i.name,d=i.options,h=s.elements.arrow,f=s.modifiersData.popperOffsets,g=$e(s.placement),_=Kn(g),E=[se,ce].indexOf(g)>=0?"height":"width";if(h&&f){var x=function(K,H){return Zs(typeof(K=typeof K=="function"?K(Object.assign({},H.rects,{placement:H.placement})):K)!="number"?K:er(K,ut))}(d.padding,s),w=qn(h),O=_==="y"?ne:se,I=_==="y"?le:ce,L=s.rects.reference[E]+s.rects.reference[_]-f[_]-s.rects.popper[E],$=f[_]-s.rects.reference[_],T=Ot(h),q=T?_==="y"?T.clientHeight||0:T.clientWidth||0:0,W=L/2-$/2,D=x[O],B=q-w[E]-x[I],M=q/2-w[E]/2+W,j=Mt(D,M,B),F=_;s.modifiersData[o]=((e={})[F]=j,e.centerOffset=j-M,e)}},effect:function(i){var e=i.state,s=i.options.element,o=s===void 0?"[data-popper-arrow]":s;o!=null&&(typeof o!="string"||(o=e.elements.popper.querySelector(o)))&&Ys(e.elements.popper,o)&&(e.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function gt(i){return i.split("-")[1]}var ka={top:"auto",right:"auto",bottom:"auto",left:"auto"};function nr(i){var e,s=i.popper,o=i.popperRect,d=i.placement,h=i.variation,f=i.offsets,g=i.position,_=i.gpuAcceleration,E=i.adaptive,x=i.roundOffsets,w=i.isFixed,O=f.x,I=O===void 0?0:O,L=f.y,$=L===void 0?0:L,T=typeof x=="function"?x({x:I,y:$}):{x:I,y:$};I=T.x,$=T.y;var q=f.hasOwnProperty("x"),W=f.hasOwnProperty("y"),D=se,B=ne,M=window;if(E){var j=Ot(s),F="clientHeight",K="clientWidth";j===de(s)&&Me(j=He(s)).position!=="static"&&g==="absolute"&&(F="scrollHeight",K="scrollWidth"),(d===ne||(d===se||d===ce)&&h===ht)&&(B=le,$-=(w&&j===M&&M.visualViewport?M.visualViewport.height:j[F])-o.height,$*=_?1:-1),d!==se&&(d!==ne&&d!==le||h!==ht)||(D=ce,I-=(w&&j===M&&M.visualViewport?M.visualViewport.width:j[K])-o.width,I*=_?1:-1)}var H,X=Object.assign({position:g},E&&ka),ue=x===!0?function(Ee,re){var ge=Ee.x,ve=Ee.y,Q=re.devicePixelRatio||1;return{x:ft(ge*Q)/Q||0,y:ft(ve*Q)/Q||0}}({x:I,y:$},de(s)):{x:I,y:$};return I=ue.x,$=ue.y,_?Object.assign({},X,((H={})[B]=W?"0":"",H[D]=q?"0":"",H.transform=(M.devicePixelRatio||1)<=1?"translate("+I+"px, "+$+"px)":"translate3d("+I+"px, "+$+"px, 0)",H)):Object.assign({},X,((e={})[B]=W?$+"px":"",e[D]=q?I+"px":"",e.transform="",e))}const Un={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(i){var e=i.state,s=i.options,o=s.gpuAcceleration,d=o===void 0||o,h=s.adaptive,f=h===void 0||h,g=s.roundOffsets,_=g===void 0||g,E={placement:$e(e.placement),variation:gt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:d,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,nr(Object.assign({},E,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:f,roundOffsets:_})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,nr(Object.assign({},E,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:_})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var tn={passive:!0};const Wn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(i){var e=i.state,s=i.instance,o=i.options,d=o.scroll,h=d===void 0||d,f=o.resize,g=f===void 0||f,_=de(e.elements.popper),E=[].concat(e.scrollParents.reference,e.scrollParents.popper);return h&&E.forEach(function(x){x.addEventListener("scroll",s.update,tn)}),g&&_.addEventListener("resize",s.update,tn),function(){h&&E.forEach(function(x){x.removeEventListener("scroll",s.update,tn)}),g&&_.removeEventListener("resize",s.update,tn)}},data:{}};var Ea={left:"right",right:"left",bottom:"top",top:"bottom"};function nn(i){return i.replace(/left|right|bottom|top/g,function(e){return Ea[e]})}var xa={start:"end",end:"start"};function sr(i){return i.replace(/start|end/g,function(e){return xa[e]})}function zn(i){var e=de(i);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Gn(i){return mt(He(i)).left+zn(i).scrollLeft}function Vn(i){var e=Me(i),s=e.overflow,o=e.overflowX,d=e.overflowY;return/auto|scroll|overlay|hidden/.test(s+d+o)}function rr(i){return["html","body","#document"].indexOf(Ie(i))>=0?i.ownerDocument.body:fe(i)&&Vn(i)?i:rr(en(i))}function Rt(i,e){var s;e===void 0&&(e=[]);var o=rr(i),d=o===((s=i.ownerDocument)==null?void 0:s.body),h=de(o),f=d?[h].concat(h.visualViewport||[],Vn(o)?o:[]):o,g=e.concat(f);return d?g:g.concat(Rt(en(f)))}function Qn(i){return Object.assign({},i,{left:i.x,top:i.y,right:i.x+i.width,bottom:i.y+i.height})}function ir(i,e,s){return e===Dn?Qn(function(o,d){var h=de(o),f=He(o),g=h.visualViewport,_=f.clientWidth,E=f.clientHeight,x=0,w=0;if(g){_=g.width,E=g.height;var O=Xs();(O||!O&&d==="fixed")&&(x=g.offsetLeft,w=g.offsetTop)}return{width:_,height:E,x:x+Gn(o),y:w}}(i,s)):Ge(e)?function(o,d){var h=mt(o,!1,d==="fixed");return h.top=h.top+o.clientTop,h.left=h.left+o.clientLeft,h.bottom=h.top+o.clientHeight,h.right=h.left+o.clientWidth,h.width=o.clientWidth,h.height=o.clientHeight,h.x=h.left,h.y=h.top,h}(e,s):Qn(function(o){var d,h=He(o),f=zn(o),g=(d=o.ownerDocument)==null?void 0:d.body,_=Ve(h.scrollWidth,h.clientWidth,g?g.scrollWidth:0,g?g.clientWidth:0),E=Ve(h.scrollHeight,h.clientHeight,g?g.scrollHeight:0,g?g.clientHeight:0),x=-f.scrollLeft+Gn(o),w=-f.scrollTop;return Me(g||h).direction==="rtl"&&(x+=Ve(h.clientWidth,g?g.clientWidth:0)-_),{width:_,height:E,x,y:w}}(He(i)))}function ar(i){var e,s=i.reference,o=i.element,d=i.placement,h=d?$e(d):null,f=d?gt(d):null,g=s.x+s.width/2-o.width/2,_=s.y+s.height/2-o.height/2;switch(h){case ne:e={x:g,y:s.y-o.height};break;case le:e={x:g,y:s.y+s.height};break;case ce:e={x:s.x+s.width,y:_};break;case se:e={x:s.x-o.width,y:_};break;default:e={x:s.x,y:s.y}}var E=h?Kn(h):null;if(E!=null){var x=E==="y"?"height":"width";switch(f){case ze:e[E]=e[E]-(s[x]/2-o[x]/2);break;case ht:e[E]=e[E]+(s[x]/2-o[x]/2)}}return e}function vt(i,e){e===void 0&&(e={});var s=e,o=s.placement,d=o===void 0?i.placement:o,h=s.strategy,f=h===void 0?i.strategy:h,g=s.boundary,_=g===void 0?Ns:g,E=s.rootBoundary,x=E===void 0?Dn:E,w=s.elementContext,O=w===void 0?pt:w,I=s.altBoundary,L=I!==void 0&&I,$=s.padding,T=$===void 0?0:$,q=Zs(typeof T!="number"?T:er(T,ut)),W=O===pt?Bs:pt,D=i.rects.popper,B=i.elements[L?W:O],M=function(re,ge,ve,Q){var Se=ge==="clippingParents"?function(U){var ie=Rt(en(U)),be=["absolute","fixed"].indexOf(Me(U).position)>=0&&fe(U)?Ot(U):U;return Ge(be)?ie.filter(function(Ke){return Ge(Ke)&&Ys(Ke,be)&&Ie(Ke)!=="body"}):[]}(re):[].concat(ge),Ce=[].concat(Se,[ve]),_t=Ce[0],Z=Ce.reduce(function(U,ie){var be=ir(re,ie,Q);return U.top=Ve(be.top,U.top),U.right=Zt(be.right,U.right),U.bottom=Zt(be.bottom,U.bottom),U.left=Ve(be.left,U.left),U},ir(re,_t,Q));return Z.width=Z.right-Z.left,Z.height=Z.bottom-Z.top,Z.x=Z.left,Z.y=Z.top,Z}(Ge(B)?B:B.contextElement||He(i.elements.popper),_,x,f),j=mt(i.elements.reference),F=ar({reference:j,element:D,strategy:"absolute",placement:d}),K=Qn(Object.assign({},D,F)),H=O===pt?K:j,X={top:M.top-H.top+q.top,bottom:H.bottom-M.bottom+q.bottom,left:M.left-H.left+q.left,right:H.right-M.right+q.right},ue=i.modifiersData.offset;if(O===pt&&ue){var Ee=ue[d];Object.keys(X).forEach(function(re){var ge=[ce,le].indexOf(re)>=0?1:-1,ve=[ne,le].indexOf(re)>=0?"y":"x";X[re]+=Ee[ve]*ge})}return X}function Aa(i,e){e===void 0&&(e={});var s=e,o=s.placement,d=s.boundary,h=s.rootBoundary,f=s.padding,g=s.flipVariations,_=s.allowedAutoPlacements,E=_===void 0?Nn:_,x=gt(o),w=x?g?jn:jn.filter(function(L){return gt(L)===x}):ut,O=w.filter(function(L){return E.indexOf(L)>=0});O.length===0&&(O=w);var I=O.reduce(function(L,$){return L[$]=vt(i,{placement:$,boundary:d,rootBoundary:h,padding:f})[$e($)],L},{});return Object.keys(I).sort(function(L,$){return I[L]-I[$]})}const or={name:"flip",enabled:!0,phase:"main",fn:function(i){var e=i.state,s=i.options,o=i.name;if(!e.modifiersData[o]._skip){for(var d=s.mainAxis,h=d===void 0||d,f=s.altAxis,g=f===void 0||f,_=s.fallbackPlacements,E=s.padding,x=s.boundary,w=s.rootBoundary,O=s.altBoundary,I=s.flipVariations,L=I===void 0||I,$=s.allowedAutoPlacements,T=e.options.placement,q=$e(T),W=_||(q!==T&&L?function(U){if($e(U)===Jt)return[];var ie=nn(U);return[sr(U),ie,sr(ie)]}(T):[nn(T)]),D=[T].concat(W).reduce(function(U,ie){return U.concat($e(ie)===Jt?Aa(e,{placement:ie,boundary:x,rootBoundary:w,padding:E,flipVariations:L,allowedAutoPlacements:$}):ie)},[]),B=e.rects.reference,M=e.rects.popper,j=new Map,F=!0,K=D[0],H=0;H<D.length;H++){var X=D[H],ue=$e(X),Ee=gt(X)===ze,re=[ne,le].indexOf(ue)>=0,ge=re?"width":"height",ve=vt(e,{placement:X,boundary:x,rootBoundary:w,altBoundary:O,padding:E}),Q=re?Ee?ce:se:Ee?le:ne;B[ge]>M[ge]&&(Q=nn(Q));var Se=nn(Q),Ce=[];if(h&&Ce.push(ve[ue]<=0),g&&Ce.push(ve[Q]<=0,ve[Se]<=0),Ce.every(function(U){return U})){K=X,F=!1;break}j.set(X,Ce)}if(F)for(var _t=function(U){var ie=D.find(function(be){var Ke=j.get(be);if(Ke)return Ke.slice(0,U).every(function(hn){return hn})});if(ie)return K=ie,"break"},Z=L?3:1;Z>0&&_t(Z)!=="break";Z--);e.placement!==K&&(e.modifiersData[o]._skip=!0,e.placement=K,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function lr(i,e,s){return s===void 0&&(s={x:0,y:0}),{top:i.top-e.height-s.y,right:i.right-e.width+s.x,bottom:i.bottom-e.height+s.y,left:i.left-e.width-s.x}}function cr(i){return[ne,ce,le,se].some(function(e){return i[e]>=0})}const dr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(i){var e=i.state,s=i.name,o=e.rects.reference,d=e.rects.popper,h=e.modifiersData.preventOverflow,f=vt(e,{elementContext:"reference"}),g=vt(e,{altBoundary:!0}),_=lr(f,o),E=lr(g,d,h),x=cr(_),w=cr(E);e.modifiersData[s]={referenceClippingOffsets:_,popperEscapeOffsets:E,isReferenceHidden:x,hasPopperEscaped:w},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":x,"data-popper-escaped":w})}},ur={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(i){var e=i.state,s=i.options,o=i.name,d=s.offset,h=d===void 0?[0,0]:d,f=Nn.reduce(function(x,w){return x[w]=function(O,I,L){var $=$e(O),T=[se,ne].indexOf($)>=0?-1:1,q=typeof L=="function"?L(Object.assign({},I,{placement:O})):L,W=q[0],D=q[1];return W=W||0,D=(D||0)*T,[se,ce].indexOf($)>=0?{x:D,y:W}:{x:W,y:D}}(w,e.rects,h),x},{}),g=f[e.placement],_=g.x,E=g.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=_,e.modifiersData.popperOffsets.y+=E),e.modifiersData[o]=f}},Xn={name:"popperOffsets",enabled:!0,phase:"read",fn:function(i){var e=i.state,s=i.name;e.modifiersData[s]=ar({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},hr={name:"preventOverflow",enabled:!0,phase:"main",fn:function(i){var e=i.state,s=i.options,o=i.name,d=s.mainAxis,h=d===void 0||d,f=s.altAxis,g=f!==void 0&&f,_=s.boundary,E=s.rootBoundary,x=s.altBoundary,w=s.padding,O=s.tether,I=O===void 0||O,L=s.tetherOffset,$=L===void 0?0:L,T=vt(e,{boundary:_,rootBoundary:E,padding:w,altBoundary:x}),q=$e(e.placement),W=gt(e.placement),D=!W,B=Kn(q),M=B==="x"?"y":"x",j=e.modifiersData.popperOffsets,F=e.rects.reference,K=e.rects.popper,H=typeof $=="function"?$(Object.assign({},e.rects,{placement:e.placement})):$,X=typeof H=="number"?{mainAxis:H,altAxis:H}:Object.assign({mainAxis:0,altAxis:0},H),ue=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Ee={x:0,y:0};if(j){if(h){var re,ge=B==="y"?ne:se,ve=B==="y"?le:ce,Q=B==="y"?"height":"width",Se=j[B],Ce=Se+T[ge],_t=Se-T[ve],Z=I?-K[Q]/2:0,U=W===ze?F[Q]:K[Q],ie=W===ze?-K[Q]:-F[Q],be=e.elements.arrow,Ke=I&&be?qn(be):{width:0,height:0},hn=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Jr=hn[ge],Zr=hn[ve],pn=Mt(0,F[Q],Ke[Q]),tl=D?F[Q]/2-Z-pn-Jr-X.mainAxis:U-pn-Jr-X.mainAxis,nl=D?-F[Q]/2+Z+pn+Zr+X.mainAxis:ie+pn+Zr+X.mainAxis,cs=e.elements.arrow&&Ot(e.elements.arrow),sl=cs?B==="y"?cs.clientTop||0:cs.clientLeft||0:0,ei=(re=ue==null?void 0:ue[B])!=null?re:0,rl=Se+nl-ei,ti=Mt(I?Zt(Ce,Se+tl-ei-sl):Ce,Se,I?Ve(_t,rl):_t);j[B]=ti,Ee[B]=ti-Se}if(g){var ni,il=B==="x"?ne:se,al=B==="x"?le:ce,nt=j[M],fn=M==="y"?"height":"width",si=nt+T[il],ri=nt-T[al],ds=[ne,se].indexOf(q)!==-1,ii=(ni=ue==null?void 0:ue[M])!=null?ni:0,ai=ds?si:nt-F[fn]-K[fn]-ii+X.altAxis,oi=ds?nt+F[fn]+K[fn]-ii-X.altAxis:ri,li=I&&ds?function(ol,ll,us){var ci=Mt(ol,ll,us);return ci>us?us:ci}(ai,nt,oi):Mt(I?ai:si,nt,I?oi:ri);j[M]=li,Ee[M]=li-nt}e.modifiersData[o]=Ee}},requiresIfExists:["offset"]};function Ia(i,e,s){s===void 0&&(s=!1);var o,d,h=fe(e),f=fe(e)&&function(w){var O=w.getBoundingClientRect(),I=ft(O.width)/w.offsetWidth||1,L=ft(O.height)/w.offsetHeight||1;return I!==1||L!==1}(e),g=He(e),_=mt(i,f,s),E={scrollLeft:0,scrollTop:0},x={x:0,y:0};return(h||!h&&!s)&&((Ie(e)!=="body"||Vn(g))&&(E=(o=e)!==de(o)&&fe(o)?{scrollLeft:(d=o).scrollLeft,scrollTop:d.scrollTop}:zn(o)),fe(e)?((x=mt(e,!0)).x+=e.clientLeft,x.y+=e.clientTop):g&&(x.x=Gn(g))),{x:_.left+E.scrollLeft-x.x,y:_.top+E.scrollTop-x.y,width:_.width,height:_.height}}function $a(i){var e=new Map,s=new Set,o=[];function d(h){s.add(h.name),[].concat(h.requires||[],h.requiresIfExists||[]).forEach(function(f){if(!s.has(f)){var g=e.get(f);g&&d(g)}}),o.push(h)}return i.forEach(function(h){e.set(h.name,h)}),i.forEach(function(h){s.has(h.name)||d(h)}),o}var pr={placement:"bottom",modifiers:[],strategy:"absolute"};function fr(){for(var i=arguments.length,e=new Array(i),s=0;s<i;s++)e[s]=arguments[s];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function sn(i){i===void 0&&(i={});var e=i,s=e.defaultModifiers,o=s===void 0?[]:s,d=e.defaultOptions,h=d===void 0?pr:d;return function(f,g,_){_===void 0&&(_=h);var E,x,w={placement:"bottom",orderedModifiers:[],options:Object.assign({},pr,h),modifiersData:{},elements:{reference:f,popper:g},attributes:{},styles:{}},O=[],I=!1,L={state:w,setOptions:function(T){var q=typeof T=="function"?T(w.options):T;$(),w.options=Object.assign({},h,w.options,q),w.scrollParents={reference:Ge(f)?Rt(f):f.contextElement?Rt(f.contextElement):[],popper:Rt(g)};var W,D,B=function(M){var j=$a(M);return Qs.reduce(function(F,K){return F.concat(j.filter(function(H){return H.phase===K}))},[])}((W=[].concat(o,w.options.modifiers),D=W.reduce(function(M,j){var F=M[j.name];return M[j.name]=F?Object.assign({},F,j,{options:Object.assign({},F.options,j.options),data:Object.assign({},F.data,j.data)}):j,M},{}),Object.keys(D).map(function(M){return D[M]})));return w.orderedModifiers=B.filter(function(M){return M.enabled}),w.orderedModifiers.forEach(function(M){var j=M.name,F=M.options,K=F===void 0?{}:F,H=M.effect;if(typeof H=="function"){var X=H({state:w,name:j,instance:L,options:K});O.push(X||function(){})}}),L.update()},forceUpdate:function(){if(!I){var T=w.elements,q=T.reference,W=T.popper;if(fr(q,W)){w.rects={reference:Ia(q,Ot(W),w.options.strategy==="fixed"),popper:qn(W)},w.reset=!1,w.placement=w.options.placement,w.orderedModifiers.forEach(function(H){return w.modifiersData[H.name]=Object.assign({},H.data)});for(var D=0;D<w.orderedModifiers.length;D++)if(w.reset!==!0){var B=w.orderedModifiers[D],M=B.fn,j=B.options,F=j===void 0?{}:j,K=B.name;typeof M=="function"&&(w=M({state:w,options:F,name:K,instance:L})||w)}else w.reset=!1,D=-1}}},update:(E=function(){return new Promise(function(T){L.forceUpdate(),T(w)})},function(){return x||(x=new Promise(function(T){Promise.resolve().then(function(){x=void 0,T(E())})})),x}),destroy:function(){$(),I=!0}};if(!fr(f,g))return L;function $(){O.forEach(function(T){return T()}),O=[]}return L.setOptions(_).then(function(T){!I&&_.onFirstUpdate&&_.onFirstUpdate(T)}),L}}var Sa=sn(),Ca=sn({defaultModifiers:[Wn,Xn,Un,Fn]}),Yn=sn({defaultModifiers:[Wn,Xn,Un,Fn,ur,or,hr,tr,dr]});const mr=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Ws,afterRead:qs,afterWrite:Vs,applyStyles:Fn,arrow:tr,auto:Jt,basePlacements:ut,beforeMain:Ks,beforeRead:Fs,beforeWrite:zs,bottom:le,clippingParents:Ns,computeStyles:Un,createPopper:Yn,createPopperBase:Sa,createPopperLite:Ca,detectOverflow:vt,end:ht,eventListeners:Wn,flip:or,hide:dr,left:se,main:Us,modifierPhases:Qs,offset:ur,placements:Nn,popper:pt,popperGenerator:sn,popperOffsets:Xn,preventOverflow:hr,read:Hs,reference:Bs,right:ce,start:ze,top:ne,variationPlacements:jn,viewport:Dn,write:Gs},Symbol.toStringTag,{value:"Module"})),gr="dropdown",Qe=".bs.dropdown",Jn=".data-api",La="ArrowUp",vr="ArrowDown",Ta=`hide${Qe}`,Pa=`hidden${Qe}`,Oa=`show${Qe}`,Ma=`shown${Qe}`,br=`click${Qe}${Jn}`,yr=`keydown${Qe}${Jn}`,Ra=`keyup${Qe}${Jn}`,bt="show",Xe='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Da=`${Xe}.${bt}`,rn=".dropdown-menu",ja=V()?"top-end":"top-start",Na=V()?"top-start":"top-end",Ba=V()?"bottom-end":"bottom-start",Fa=V()?"bottom-start":"bottom-end",Ha=V()?"left-start":"right-start",qa=V()?"right-start":"left-start",Ka={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ua={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ke extends we{constructor(e,s){super(e,s),this._popper=null,this._parent=this._element.parentNode,this._menu=A.next(this._element,rn)[0]||A.prev(this._element,rn)[0]||A.findOne(rn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Ka}static get DefaultType(){return Ua}static get NAME(){return gr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(y(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!v.trigger(this._element,Oa,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const s of[].concat(...document.body.children))v.on(s,"mouseover",S);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(bt),this._element.classList.add(bt),v.trigger(this._element,Ma,e)}}hide(){if(y(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!v.trigger(this._element,Ta,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))v.off(s,"mouseover",S);this._popper&&this._popper.destroy(),this._menu.classList.remove(bt),this._element.classList.remove(bt),this._element.setAttribute("aria-expanded","false"),Oe.removeDataAttribute(this._menu,"popper"),v.trigger(this._element,Pa,e)}}_getConfig(e){if(typeof(e=super._getConfig(e)).reference=="object"&&!p(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${gr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(mr===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:p(this._config.reference)?e=m(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const s=this._getPopperConfig();this._popper=Yn(e,this._menu,s)}_isShown(){return this._menu.classList.contains(bt)}_getPlacement(){const e=this._parent;if(e.classList.contains("dropend"))return Ha;if(e.classList.contains("dropstart"))return qa;if(e.classList.contains("dropup-center"))return"top";if(e.classList.contains("dropdown-center"))return"bottom";const s=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains("dropup")?s?Na:ja:s?Fa:Ba}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(s=>Number.parseInt(s,10)):typeof e=="function"?s=>e(s,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Oe.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...G(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:s}){const o=A.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(d=>b(d));o.length&&Be(o,s,e===vr,!o.includes(s)).focus()}static jQueryInterface(e){return this.each(function(){const s=ke.getOrCreateInstance(this,e);if(typeof e=="string"){if(s[e]===void 0)throw new TypeError(`No method named "${e}"`);s[e]()}})}static clearMenus(e){if(e.button===2||e.type==="keyup"&&e.key!=="Tab")return;const s=A.find(Da);for(const o of s){const d=ke.getInstance(o);if(!d||d._config.autoClose===!1)continue;const h=e.composedPath(),f=h.includes(d._menu);if(h.includes(d._element)||d._config.autoClose==="inside"&&!f||d._config.autoClose==="outside"&&f||d._menu.contains(e.target)&&(e.type==="keyup"&&e.key==="Tab"||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const g={relatedTarget:d._element};e.type==="click"&&(g.clickEvent=e),d._completeHide(g)}}static dataApiKeydownHandler(e){const s=/input|textarea/i.test(e.target.tagName),o=e.key==="Escape",d=[La,vr].includes(e.key);if(!d&&!o||s&&!o)return;e.preventDefault();const h=this.matches(Xe)?this:A.prev(this,Xe)[0]||A.next(this,Xe)[0]||A.findOne(Xe,e.delegateTarget.parentNode),f=ke.getOrCreateInstance(h);if(d)return e.stopPropagation(),f.show(),void f._selectMenuItem(e);f._isShown()&&(e.stopPropagation(),f.hide(),h.focus())}}v.on(document,yr,Xe,ke.dataApiKeydownHandler),v.on(document,yr,rn,ke.dataApiKeydownHandler),v.on(document,br,ke.clearMenus),v.on(document,Ra,ke.clearMenus),v.on(document,br,Xe,function(i){i.preventDefault(),ke.getOrCreateInstance(this).toggle()}),z(ke);const _r="backdrop",wr="show",kr=`mousedown.bs.${_r}`,Wa={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},za={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Er extends St{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Wa}static get DefaultType(){return za}static get NAME(){return _r}show(e){if(!this._config.isVisible)return void G(e);this._append();const s=this._getElement();this._config.isAnimated&&P(s),s.classList.add(wr),this._emulateAnimation(()=>{G(e)})}hide(e){this._config.isVisible?(this._getElement().classList.remove(wr),this._emulateAnimation(()=>{this.dispose(),G(e)})):G(e)}dispose(){this._isAppended&&(v.off(this._element,kr),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=m(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),v.on(e,kr,()=>{G(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Ae(e,this._getElement(),this._config.isAnimated)}}const an=".bs.focustrap",Ga=`focusin${an}`,Va=`keydown.tab${an}`,xr="backward",Qa={autofocus:!0,trapElement:null},Xa={autofocus:"boolean",trapElement:"element"};class Ar extends St{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Qa}static get DefaultType(){return Xa}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),v.off(document,an),v.on(document,Ga,e=>this._handleFocusin(e)),v.on(document,Va,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,v.off(document,an))}_handleFocusin(e){const{trapElement:s}=this._config;if(e.target===document||e.target===s||s.contains(e.target))return;const o=A.focusableChildren(s);o.length===0?s.focus():this._lastTabNavDirection===xr?o[o.length-1].focus():o[0].focus()}_handleKeydown(e){e.key==="Tab"&&(this._lastTabNavDirection=e.shiftKey?xr:"forward")}}const Ir=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",$r=".sticky-top",on="padding-right",Sr="margin-right";class Zn{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,on,s=>s+e),this._setElementAttributes(Ir,on,s=>s+e),this._setElementAttributes($r,Sr,s=>s-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,on),this._resetElementAttributes(Ir,on),this._resetElementAttributes($r,Sr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,s,o){const d=this.getWidth();this._applyManipulationCallback(e,h=>{if(h!==this._element&&window.innerWidth>h.clientWidth+d)return;this._saveInitialAttribute(h,s);const f=window.getComputedStyle(h).getPropertyValue(s);h.style.setProperty(s,`${o(Number.parseFloat(f))}px`)})}_saveInitialAttribute(e,s){const o=e.style.getPropertyValue(s);o&&Oe.setDataAttribute(e,s,o)}_resetElementAttributes(e,s){this._applyManipulationCallback(e,o=>{const d=Oe.getDataAttribute(o,s);d!==null?(Oe.removeDataAttribute(o,s),o.style.setProperty(s,d)):o.style.removeProperty(s)})}_applyManipulationCallback(e,s){if(p(e))s(e);else for(const o of A.find(e,this._element))s(o)}}const me=".bs.modal",Ya=`hide${me}`,Ja=`hidePrevented${me}`,Cr=`hidden${me}`,Lr=`show${me}`,Za=`shown${me}`,eo=`resize${me}`,to=`click.dismiss${me}`,no=`mousedown.dismiss${me}`,so=`keydown.dismiss${me}`,ro=`click${me}.data-api`,Tr="modal-open",Pr="show",es="modal-static",io={backdrop:!0,focus:!0,keyboard:!0},ao={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ye extends we{constructor(e,s){super(e,s),this._dialog=A.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Zn,this._addEventListeners()}static get Default(){return io}static get DefaultType(){return ao}static get NAME(){return"modal"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||v.trigger(this._element,Lr,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Tr),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){this._isShown&&!this._isTransitioning&&(v.trigger(this._element,Ya).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Pr),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){v.off(window,me),v.off(this._dialog,me),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Er({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ar({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const s=A.findOne(".modal-body",this._dialog);s&&(s.scrollTop=0),P(this._element),this._element.classList.add(Pr),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,v.trigger(this._element,Za,{relatedTarget:e})},this._dialog,this._isAnimated())}_addEventListeners(){v.on(this._element,so,e=>{e.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),v.on(window,eo,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),v.on(this._element,no,e=>{v.one(this._element,to,s=>{this._element===e.target&&this._element===s.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Tr),this._resetAdjustments(),this._scrollBar.reset(),v.trigger(this._element,Cr)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(v.trigger(this._element,Ja).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(es)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(es),this._queueCallback(()=>{this._element.classList.remove(es),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,s=this._scrollBar.getWidth(),o=s>0;if(o&&!e){const d=V()?"paddingLeft":"paddingRight";this._element.style[d]=`${s}px`}if(!o&&e){const d=V()?"paddingRight":"paddingLeft";this._element.style[d]=`${s}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,s){return this.each(function(){const o=Ye.getOrCreateInstance(this,e);if(typeof e=="string"){if(o[e]===void 0)throw new TypeError(`No method named "${e}"`);o[e](s)}})}}v.on(document,ro,'[data-bs-toggle="modal"]',function(i){const e=A.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&i.preventDefault(),v.one(e,Lr,o=>{o.defaultPrevented||v.one(e,Cr,()=>{b(this)&&this.focus()})});const s=A.findOne(".modal.show");s&&Ye.getInstance(s).hide(),Ye.getOrCreateInstance(e).toggle(this)}),Gt(Ye),z(Ye);const Re=".bs.offcanvas",Or=".data-api",oo=`load${Re}${Or}`,Mr="show",Rr="showing",Dr="hiding",jr=".offcanvas.show",lo=`show${Re}`,co=`shown${Re}`,uo=`hide${Re}`,Nr=`hidePrevented${Re}`,Br=`hidden${Re}`,ho=`resize${Re}`,po=`click${Re}${Or}`,fo=`keydown.dismiss${Re}`,mo={backdrop:!0,keyboard:!0,scroll:!1},go={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class De extends we{constructor(e,s){super(e,s),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return mo}static get DefaultType(){return go}static get NAME(){return"offcanvas"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||v.trigger(this._element,lo,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Zn().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Rr),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Mr),this._element.classList.remove(Rr),v.trigger(this._element,co,{relatedTarget:e})},this._element,!0))}hide(){this._isShown&&(v.trigger(this._element,uo).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Dr),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Mr,Dr),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Zn().reset(),v.trigger(this._element,Br)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=!!this._config.backdrop;return new Er({className:"offcanvas-backdrop",isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{this._config.backdrop!=="static"?this.hide():v.trigger(this._element,Nr)}:null})}_initializeFocusTrap(){return new Ar({trapElement:this._element})}_addEventListeners(){v.on(this._element,fo,e=>{e.key==="Escape"&&(this._config.keyboard?this.hide():v.trigger(this._element,Nr))})}static jQueryInterface(e){return this.each(function(){const s=De.getOrCreateInstance(this,e);if(typeof e=="string"){if(s[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);s[e](this)}})}}v.on(document,po,'[data-bs-toggle="offcanvas"]',function(i){const e=A.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),y(this))return;v.one(e,Br,()=>{b(this)&&this.focus()});const s=A.findOne(jr);s&&s!==e&&De.getInstance(s).hide(),De.getOrCreateInstance(e).toggle(this)}),v.on(window,oo,()=>{for(const i of A.find(jr))De.getOrCreateInstance(i).show()}),v.on(window,ho,()=>{for(const i of A.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(i).position!=="fixed"&&De.getOrCreateInstance(i).hide()}),Gt(De),z(De);const Fr={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},vo=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),bo=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,yo=(i,e)=>{const s=i.nodeName.toLowerCase();return e.includes(s)?!vo.has(s)||!!bo.test(i.nodeValue):e.filter(o=>o instanceof RegExp).some(o=>o.test(s))},_o={allowList:Fr,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},wo={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},ko={entry:"(string|element|function|null)",selector:"(string|element)"};class Eo extends St{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return _o}static get DefaultType(){return wo}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[d,h]of Object.entries(this._config.content))this._setContent(e,h,d);const s=e.children[0],o=this._resolvePossibleFunction(this._config.extraClass);return o&&s.classList.add(...o.split(" ")),s}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[s,o]of Object.entries(e))super._typeCheckConfig({selector:s,entry:o},ko)}_setContent(e,s,o){const d=A.findOne(o,e);d&&((s=this._resolvePossibleFunction(s))?p(s)?this._putElementInTemplate(m(s),d):this._config.html?d.innerHTML=this._maybeSanitize(s):d.textContent=s:d.remove())}_maybeSanitize(e){return this._config.sanitize?function(s,o,d){if(!s.length)return s;if(d&&typeof d=="function")return d(s);const h=new window.DOMParser().parseFromString(s,"text/html"),f=[].concat(...h.body.querySelectorAll("*"));for(const g of f){const _=g.nodeName.toLowerCase();if(!Object.keys(o).includes(_)){g.remove();continue}const E=[].concat(...g.attributes),x=[].concat(o["*"]||[],o[_]||[]);for(const w of E)yo(w,x)||g.removeAttribute(w.nodeName)}return h.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return G(e,[this])}_putElementInTemplate(e,s){if(this._config.html)return s.innerHTML="",void s.append(e);s.textContent=e.textContent}}const xo=new Set(["sanitize","allowList","sanitizeFn"]),ts="fade",ln="show",Hr=".modal",qr="hide.bs.modal",Dt="hover",ns="focus",Ao={AUTO:"auto",TOP:"top",RIGHT:V()?"left":"right",BOTTOM:"bottom",LEFT:V()?"right":"left"},Io={allowList:Fr,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},$o={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Je extends we{constructor(e,s){if(mr===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,s),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Io}static get DefaultType(){return $o}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),v.off(this._element.closest(Hr),qr,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=v.trigger(this._element,this.constructor.eventName("show")),s=(k(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const o=this._getTipElement();this._element.setAttribute("aria-describedby",o.getAttribute("id"));const{container:d}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(d.append(o),v.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(o),o.classList.add(ln),"ontouchstart"in document.documentElement)for(const h of[].concat(...document.body.children))v.on(h,"mouseover",S);this._queueCallback(()=>{v.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!v.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(ln),"ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))v.off(e,"mouseover",S);this._activeTrigger.click=!1,this._activeTrigger[ns]=!1,this._activeTrigger[Dt]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),v.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const s=this._getTemplateFactory(e).toHtml();if(!s)return null;s.classList.remove(ts,ln),s.classList.add(`bs-${this.constructor.NAME}-auto`);const o=(d=>{do d+=Math.floor(1e6*Math.random());while(document.getElementById(d));return d})(this.constructor.NAME).toString();return s.setAttribute("id",o),this._isAnimated()&&s.classList.add(ts),s}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Eo({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ts)}_isShown(){return this.tip&&this.tip.classList.contains(ln)}_createPopper(e){const s=G(this._config.placement,[this,e,this._element]),o=Ao[s.toUpperCase()];return Yn(this._element,e,this._getPopperConfig(o))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(s=>Number.parseInt(s,10)):typeof e=="function"?s=>e(s,this._element):e}_resolvePossibleFunction(e){return G(e,[this._element])}_getPopperConfig(e){const s={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:o=>{this._getTipElement().setAttribute("data-popper-placement",o.state.placement)}}]};return{...s,...G(this._config.popperConfig,[s])}}_setListeners(){const e=this._config.trigger.split(" ");for(const s of e)if(s==="click")v.on(this._element,this.constructor.eventName("click"),this._config.selector,o=>{this._initializeOnDelegatedTarget(o).toggle()});else if(s!=="manual"){const o=s===Dt?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),d=s===Dt?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");v.on(this._element,o,this._config.selector,h=>{const f=this._initializeOnDelegatedTarget(h);f._activeTrigger[h.type==="focusin"?ns:Dt]=!0,f._enter()}),v.on(this._element,d,this._config.selector,h=>{const f=this._initializeOnDelegatedTarget(h);f._activeTrigger[h.type==="focusout"?ns:Dt]=f._element.contains(h.relatedTarget),f._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},v.on(this._element.closest(Hr),qr,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,s){clearTimeout(this._timeout),this._timeout=setTimeout(e,s)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const s=Oe.getDataAttributes(this._element);for(const o of Object.keys(s))xo.has(o)&&delete s[o];return e={...s,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:m(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[s,o]of Object.entries(this._config))this.constructor.Default[s]!==o&&(e[s]=o);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const s=Je.getOrCreateInstance(this,e);if(typeof e=="string"){if(s[e]===void 0)throw new TypeError(`No method named "${e}"`);s[e]()}})}}z(Je);const So={...Je.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Co={...Je.DefaultType,content:"(null|string|element|function)"};class cn extends Je{static get Default(){return So}static get DefaultType(){return Co}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const s=cn.getOrCreateInstance(this,e);if(typeof e=="string"){if(s[e]===void 0)throw new TypeError(`No method named "${e}"`);s[e]()}})}}z(cn);const ss=".bs.scrollspy",Lo=`activate${ss}`,Kr=`click${ss}`,To=`load${ss}.data-api`,yt="active",rs="[href]",Ur=".nav-link",Po=`${Ur}, .nav-item > ${Ur}, .list-group-item`,Oo={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Mo={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class jt extends we{constructor(e,s){super(e,s),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Oo}static get DefaultType(){return Mo}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=m(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(s=>Number.parseFloat(s))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(v.off(this._config.target,Kr),v.on(this._config.target,Kr,rs,e=>{const s=this._observableSections.get(e.target.hash);if(s){e.preventDefault();const o=this._rootElement||window,d=s.offsetTop-this._element.offsetTop;if(o.scrollTo)return void o.scrollTo({top:d,behavior:"smooth"});o.scrollTop=d}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(s=>this._observerCallback(s),e)}_observerCallback(e){const s=f=>this._targetLinks.get(`#${f.target.id}`),o=f=>{this._previousScrollData.visibleEntryTop=f.target.offsetTop,this._process(s(f))},d=(this._rootElement||document.documentElement).scrollTop,h=d>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=d;for(const f of e){if(!f.isIntersecting){this._activeTarget=null,this._clearActiveClass(s(f));continue}const g=f.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(h&&g){if(o(f),!d)return}else h||g||o(f)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=A.find(rs,this._config.target);for(const s of e){if(!s.hash||y(s))continue;const o=A.findOne(decodeURI(s.hash),this._element);b(o)&&(this._targetLinks.set(decodeURI(s.hash),s),this._observableSections.set(s.hash,o))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(yt),this._activateParents(e),v.trigger(this._element,Lo,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains("dropdown-item"))A.findOne(".dropdown-toggle",e.closest(".dropdown")).classList.add(yt);else for(const s of A.parents(e,".nav, .list-group"))for(const o of A.prev(s,Po))o.classList.add(yt)}_clearActiveClass(e){e.classList.remove(yt);const s=A.find(`${rs}.${yt}`,e);for(const o of s)o.classList.remove(yt)}static jQueryInterface(e){return this.each(function(){const s=jt.getOrCreateInstance(this,e);if(typeof e=="string"){if(s[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);s[e]()}})}}v.on(window,To,()=>{for(const i of A.find('[data-bs-spy="scroll"]'))jt.getOrCreateInstance(i)}),z(jt);const Ze=".bs.tab",Ro=`hide${Ze}`,Do=`hidden${Ze}`,jo=`show${Ze}`,No=`shown${Ze}`,Bo=`click${Ze}`,Fo=`keydown${Ze}`,Ho=`load${Ze}`,qo="ArrowLeft",Wr="ArrowRight",Ko="ArrowUp",zr="ArrowDown",is="Home",Gr="End",et="active",Vr="fade",as="show",Qr=".dropdown-toggle",os=`:not(${Qr})`,Xr='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ls=`.nav-link${os}, .list-group-item${os}, [role="tab"]${os}, ${Xr}`,Uo=`.${et}[data-bs-toggle="tab"], .${et}[data-bs-toggle="pill"], .${et}[data-bs-toggle="list"]`;class tt extends we{constructor(e){super(e),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),v.on(this._element,Fo,s=>this._keydown(s)))}static get NAME(){return"tab"}show(){const e=this._element;if(this._elemIsActive(e))return;const s=this._getActiveElem(),o=s?v.trigger(s,Ro,{relatedTarget:e}):null;v.trigger(e,jo,{relatedTarget:s}).defaultPrevented||o&&o.defaultPrevented||(this._deactivate(s,e),this._activate(e,s))}_activate(e,s){e&&(e.classList.add(et),this._activate(A.getElementFromSelector(e)),this._queueCallback(()=>{e.getAttribute("role")==="tab"?(e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),v.trigger(e,No,{relatedTarget:s})):e.classList.add(as)},e,e.classList.contains(Vr)))}_deactivate(e,s){e&&(e.classList.remove(et),e.blur(),this._deactivate(A.getElementFromSelector(e)),this._queueCallback(()=>{e.getAttribute("role")==="tab"?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),v.trigger(e,Do,{relatedTarget:s})):e.classList.remove(as)},e,e.classList.contains(Vr)))}_keydown(e){if(![qo,Wr,Ko,zr,is,Gr].includes(e.key))return;e.stopPropagation(),e.preventDefault();const s=this._getChildren().filter(d=>!y(d));let o;if([is,Gr].includes(e.key))o=s[e.key===is?0:s.length-1];else{const d=[Wr,zr].includes(e.key);o=Be(s,e.target,d,!0)}o&&(o.focus({preventScroll:!0}),tt.getOrCreateInstance(o).show())}_getChildren(){return A.find(ls,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,s){this._setAttributeIfNotExists(e,"role","tablist");for(const o of s)this._setInitialAttributesOnChild(o)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const s=this._elemIsActive(e),o=this._getOuterElement(e);e.setAttribute("aria-selected",s),o!==e&&this._setAttributeIfNotExists(o,"role","presentation"),s||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const s=A.getElementFromSelector(e);s&&(this._setAttributeIfNotExists(s,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(s,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,s){const o=this._getOuterElement(e);if(!o.classList.contains("dropdown"))return;const d=(h,f)=>{const g=A.findOne(h,o);g&&g.classList.toggle(f,s)};d(Qr,et),d(".dropdown-menu",as),o.setAttribute("aria-expanded",s)}_setAttributeIfNotExists(e,s,o){e.hasAttribute(s)||e.setAttribute(s,o)}_elemIsActive(e){return e.classList.contains(et)}_getInnerElement(e){return e.matches(ls)?e:A.findOne(ls,e)}_getOuterElement(e){return e.closest(".nav-item, .list-group-item")||e}static jQueryInterface(e){return this.each(function(){const s=tt.getOrCreateInstance(this);if(typeof e=="string"){if(s[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);s[e]()}})}}v.on(document,Bo,Xr,function(i){["A","AREA"].includes(this.tagName)&&i.preventDefault(),y(this)||tt.getOrCreateInstance(this).show()}),v.on(window,Ho,()=>{for(const i of A.find(Uo))tt.getOrCreateInstance(i)}),z(tt);const qe=".bs.toast",Wo=`mouseover${qe}`,zo=`mouseout${qe}`,Go=`focusin${qe}`,Vo=`focusout${qe}`,Qo=`hide${qe}`,Xo=`hidden${qe}`,Yo=`show${qe}`,Jo=`shown${qe}`,Yr="hide",dn="show",un="showing",Zo={animation:"boolean",autohide:"boolean",delay:"number"},el={animation:!0,autohide:!0,delay:5e3};class Nt extends we{constructor(e,s){super(e,s),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return el}static get DefaultType(){return Zo}static get NAME(){return"toast"}show(){v.trigger(this._element,Yo).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Yr),P(this._element),this._element.classList.add(dn,un),this._queueCallback(()=>{this._element.classList.remove(un),v.trigger(this._element,Jo),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(v.trigger(this._element,Qo).defaultPrevented||(this._element.classList.add(un),this._queueCallback(()=>{this._element.classList.add(Yr),this._element.classList.remove(un,dn),v.trigger(this._element,Xo)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(dn),super.dispose()}isShown(){return this._element.classList.contains(dn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,s){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=s;break;case"focusin":case"focusout":this._hasKeyboardInteraction=s}if(s)return void this._clearTimeout();const o=e.relatedTarget;this._element===o||this._element.contains(o)||this._maybeScheduleHide()}_setListeners(){v.on(this._element,Wo,e=>this._onInteraction(e,!0)),v.on(this._element,zo,e=>this._onInteraction(e,!1)),v.on(this._element,Go,e=>this._onInteraction(e,!0)),v.on(this._element,Vo,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const s=Nt.getOrCreateInstance(this,e);if(typeof e=="string"){if(s[e]===void 0)throw new TypeError(`No method named "${e}"`);s[e](this)}})}}return Gt(Nt),z(Nt),{Alert:Ct,Button:Lt,Carousel:lt,Collapse:dt,Dropdown:ke,Modal:Ye,Offcanvas:De,Popover:cn,ScrollSpy:jt,Tab:tt,Toast:Nt,Tooltip:Je}})})(xl);const te={render(){return`
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="logo">
              <a href="/"><img height="50px" src="../images/logo1.png" alt="Serba Sayur ID"></a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form id="search-form" class="w-100 d-flex me-auto my-2 mx-4 mx-md-3 mx-sm-0 my-lg-0 mb-2 mb-lg-0">
                <div class="input-group w-100 position-relative">
                  <input id="search-input" class="form-control ps-5" type="search" placeholder="Ayo hidup sehat dan cari kebutuhanmu disini!" aria-label="Search">
                  <span class="input-group-text position-absolute top-50 start-0 translate-middle-y border-0 bg-transparent"><i class="fas fa-search icon-search"></i></span>
                </div>
              </form>
              <ul class="navbar-nav mx-3 mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link d-none d-lg-block" aria-current="page" href="/notification"><i class="fa-sharp fa-regular fa-bell icon"></i></a>
                  <a class="nav-link d-lg-none" aria-current="page" href="/notification">Notifikasi</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-none d-lg-block" href="/chat"><i class="fa-sharp fa-regular fa-comment-dots icon"></i></a>
                  <a class="nav-link d-lg-none" href="/chat">Pesan</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-none d-lg-block" href="/order"><i class="fas fa-shopping-cart icon"></i></a>
                  <a class="nav-link d-lg-none" href="/order">Keranjang</a>
                </li>
                <li class="nav-item d-none d-lg-block">
                  <div class="ms-2"><img height="25px" src="../images/icon3.png" alt="" /></div>
                </li>
                <li class="nav-item ms-2 d-flex flex-column flex-sm-row">
                  ${localStorage.getItem("isLoggedIn")?`
                    <!-- Jika pengguna sudah login, tampilkan tombol Profil dan Keluar -->
                    <a href="/profile" class="btn text-white me-sm-2 mb-2 mb-sm-0" style="background-color: #4DC38C;">Profil</a>
                    <button id="logout-button" class="btn text-success" style="background-color: #D9D9D9;">Keluar</button>
                    `:`
                    <!-- Jika pengguna belum login, tampilkan tombol Masuk dan Daftar -->
                    <a href="/login" type="button" class="btn text-white me-sm-2 mb-2 mb-sm-0" style="background-color: #4DC38C;">Masuk</a>
                    <a href="/register" type="button" class="btn text-success" style="background-color: #D9D9D9;">Daftar</a>
                    `}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    `},afterRender(){document.getElementById("search-form").addEventListener("submit",a=>{a.preventDefault();const c=document.getElementById("search-input").value;c&&R(`/search/${c}`)});const n=document.getElementById("logout-button");n&&n.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userId"),R.redirect("/login")});const r=localStorage.getItem("isLoggedIn");document.querySelectorAll(".nav-item .nav-link").forEach(a=>{a.addEventListener("click",c=>{c.preventDefault();const u=a.getAttribute("href");R(r?u:"/login")})})}},xe="https://serbasayur-id-back-end.up.railway.app";async function xn(){const t=await fetch(`${xe}/products`);if(!t.ok)throw new Error("Failed to fetch products");const n=await t.json();let r=[];if(Array.isArray(n))r=n;else if(n&&n.data&&Array.isArray(n.data.products))r=n.data.products;else throw new Error("Invalid data format for products");return r.forEach(l=>{l.imageUrl=`${xe}/image/${l.image}`}),r}async function An(t){const n=await fetch(`${xe}/products/${t}`);if(!n.ok)throw new Error(`Failed to fetch product with id ${t}`);return n.json()}async function Al(t){try{const n=await fetch(`${xe}/products`,{method:"POST",body:t});if(!n.ok){const l=await n.json();throw new Error(l.message||"Gagal menambahkan produk")}return await n.json()}catch(n){throw console.error("Gagal menambahkan produk:",n.message),new Error(`Gagal menambahkan produk: ${n.message}`)}}async function Il(t,n){try{const r=new FormData;r.append("nama",n.nama),r.append("id_kategori",n.id_kategori),r.append("deskripsi",n.deskripsi),r.append("harga",n.harga),r.append("kuantitas",n.kuantitas),r.append("rating",n.rating),n.image&&r.append("image",n.image);const l=await fetch(`${xe}/products/${t}`,{method:"PUT",body:r});if(!l.ok){const c=await l.json();throw new Error(c.message||"Gagal memperbarui produk")}return await l.json()}catch(r){throw console.error("Gagal memperbarui produk:",r.message),new Error(`Gagal memperbarui produk: ${r.message}`)}}async function $l(t){const n=await fetch(`${xe}/products/${t}`,{method:"DELETE"});if(!n.ok)throw new Error("Failed to delete product");return n.json()}async function Sl(t){const n=await fetch(`${xe}/products?category=${t}`);if(!n.ok)throw new Error(`Failed to fetch products for category ${t}`);const r=await n.json();let l=[];if(Array.isArray(r))l=r;else if(r&&r.data&&Array.isArray(r.data.products))l=r.data.products;else throw new Error("Invalid data format for products");return l.forEach(a=>{a.imageUrl=`${xe}/image/${a.image}`}),l}async function Cl(t){const n=await fetch(`${xe}/products?id_produk=${t}`);if(!n.ok)throw new Error(`Failed to fetch search results for query: ${t}`);return n.json()}async function rt(){const t=await fetch(`${xe}/categories`);if(!t.ok)throw new Error("Failed to fetch categories");return(await t.json()).data.categories}async function Ll(t){const n=await fetch(`${xe}/categories`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok)throw new Error("Failed to add category");return(await n.json()).data}const Kt="https://serbasayur-id-back-end.up.railway.app";async function Is(){const t=await fetch(`${Kt}/users`);if(!t.ok)throw new Error("Failed to fetch users");return t.json()}async function bn(t){const n=await fetch(`${Kt}/users/${t}`);if(!n.ok)throw new Error(`Failed to fetch user with id ${t}`);return n.json()}async function Tl(t){const n=await fetch(`${Kt}/users`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok)throw new Error("Failed to add user");return n.json()}async function Pl(t,n){const r=await fetch(`${Kt}/users/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error("Failed to update user");return r.json()}async function Ol(t,n){try{const r=await fetch(`${Kt}/users`);if(!r.ok)throw new Error("Failed to fetch users");const a=(await r.json()).data.users;if(!Array.isArray(a))throw new Error("Expected an array of users");const c=a.find(u=>u.email===t&&u.password===n);if(console.log(a),c)return localStorage.setItem("isLoggedIn",!0),localStorage.setItem("userId",c.id_user),c;throw alert("Invalid email or password"),new Error("Invalid email or password")}catch(r){throw console.error("Failed to login:",r.message),new Error("Failed to login")}}var Ml=typeof global=="object"&&global&&global.Object===Object&&global,Rl=typeof self=="object"&&self&&self.Object===Object&&self,Dl=Ml||Rl||Function("return this")(),yn=Dl.Symbol,Pi=Object.prototype,jl=Pi.hasOwnProperty,Nl=Pi.toString,Bt=yn?yn.toStringTag:void 0;function Bl(t){var n=jl.call(t,Bt),r=t[Bt];try{t[Bt]=void 0;var l=!0}catch{}var a=Nl.call(t);return l&&(n?t[Bt]=r:delete t[Bt]),a}var Fl=Object.prototype,Hl=Fl.toString;function ql(t){return Hl.call(t)}var Kl="[object Null]",Ul="[object Undefined]",ui=yn?yn.toStringTag:void 0;function Wl(t){return t==null?t===void 0?Ul:Kl:ui&&ui in Object(t)?Bl(t):ql(t)}function zl(t){return t!=null&&typeof t=="object"}var Gl="[object Symbol]";function Vl(t){return typeof t=="symbol"||zl(t)&&Wl(t)==Gl}var Ql=/\s/;function Xl(t){for(var n=t.length;n--&&Ql.test(t.charAt(n)););return n}var Yl=/^\s+/;function Jl(t){return t&&t.slice(0,Xl(t)+1).replace(Yl,"")}function hi(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}var pi=NaN,Zl=/^[-+]0x[0-9a-f]+$/i,ec=/^0b[01]+$/i,tc=/^0o[0-7]+$/i,nc=parseInt;function sc(t){if(typeof t=="number")return t;if(Vl(t))return pi;if(hi(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=hi(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=Jl(t);var r=ec.test(t);return r||tc.test(t)?nc(t.slice(2),r?2:8):Zl.test(t)?pi:+t}var fi=1/0,rc=17976931348623157e292;function ic(t){if(!t)return t===0?t:0;if(t=sc(t),t===fi||t===-fi){var n=t<0?-1:1;return n*rc}return t===t?t:0}function ac(t){var n=ic(t),r=n%1;return n===n?r?n-r:n:0}function oc(t,n,r){var l=-1,a=t.length;n<0&&(n=-n>a?0:a+n),r=r>a?a:r,r<0&&(r+=a),a=n>r?0:r-n>>>0,n>>>=0;for(var c=Array(a);++l<a;)c[l]=t[l+n];return c}var lc=Math.ceil,cc=Math.max;function $s(t,n,r){n===void 0?n=1:n=cc(ac(n),0);var l=t==null?0:t.length;if(!l||n<1)return[];for(var a=0,c=0,u=Array(lc(l/n));a<l;)u[c++]=oc(t,a,a+=n);return u}const Oi=()=>{const t=document.getElementById("increaseQty"),n=document.getElementById("decreaseQty"),r=document.getElementById("quantity");t&&n&&r?(t.addEventListener("click",()=>{r.value=parseInt(r.value)+1}),n.addEventListener("click",()=>{r.value>1&&(r.value=parseInt(r.value)-1)})):console.error("One or more elements not found.")},dc=t=>{const n='<span class="rating" style="color: #4dc38c; font-size: 2rem">★</span>'.repeat(Math.floor(t)),r=t%1!==0?'<span style="color: #4dc38c; font-size: 2rem">★</span>':"",l='<span style="color: #4dc38c; font-size: 2rem">☆</span>'.repeat(Math.floor(5-t));return`${n}${r}${l}`},Ut=t=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(t),mi={async render(){try{const[t,n]=await Promise.all([xn(),rt()]);if(!Array.isArray(t)||!Array.isArray(n))throw new Error("Invalid data format for products or categories");const r=n.find(m=>m.nama_kategori.toLowerCase()==="Sayuran Segar".toLowerCase());if(!r)throw new Error("Kategori 'Sayuran Segar' tidak ditemukan");const l=t.filter(m=>m.id_kategori===r.id_kategori).slice(0,9),a={lg:2,md:3,sm:6};return`
        <div class="container mt-5">
          <h2 class="text-center mb-4 py-2 title-product">Sayuran Segar</h2>
          <div id="vegetable-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${$s(l,3).map((m,b)=>{const y=m.map(k=>`
            <div class="col-4 col-md-${a.md} col-lg-${a.lg}">
              <div class="card h-100" data-id="${k.id_produk}">
                <img height="100px" src="${k.imageUrl}" class="img-fluid" alt="${k.nama}">
                <div class="card-body d-flex flex-column flex-lg-column flex-md-column flex-sm-column text-center">
                  <a href="/detail/${k.id_produk}" class="text-decoration-none text-black product-link" data-id="${k.id_produk}">
                    <p class="card-title text-sm" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${k.nama}</p>
                  </a>
                  <div class="mt-auto">
                    <p class="card-text fw-bold text-sm">${Ut(k.harga)}</p>
                  </div>
                  <div class="">
                    <button class="btn-sm btn-cart rounded-3 p-2 mt-1" type="submit" data-id="${k.id_produk}">masukan keranjang</button>
                  </div>
                </div>
              </div>
            </div>
          `).join("");return`
          <div class="carousel-item ${b===0?"active":""}">
            <div class="row justify-content-center">
              ${y}
            </div>
          </div>
        `}).join("")}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#vegetable-carousel" data-bs-slide="prev">
              <span class="prev-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-left"></i></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#vegetable-carousel" data-bs-slide="next">
              <span class="next-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      `}catch(t){return console.error(t),"<div>Error fetching products. Please try again later.</div>"}},afterRender(){try{const t=localStorage.getItem("userId"),n=document.querySelectorAll(".product-link")}catch{}}},uc={async render(){try{const[t,n]=await Promise.all([xn(),rt()]);if(!Array.isArray(t)||!Array.isArray(n))throw new Error("Invalid data format for products or categories");const r=n.find(m=>m.nama_kategori.toLowerCase()==="Buah-Buahan".toLowerCase());if(!r)throw new Error("Kategori 'Buah-buahan' tidak ditemukan");const l=t.filter(m=>m.id_kategori===r.id_kategori).slice(0,9),a={lg:2,md:3,sm:6};return`
        <div class="container mt-5">
          <h2 class="text-center mb-4 py-2 title-product">Buah-buahan</h2>
          <div id="fruits-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${$s(l,3).map((m,b)=>{const y=m.map(k=>`
            <div class="col-4 col-md-${a.md} col-lg-${a.lg}">
              <div class="card h-100" data-id="${k.id_produk}">
                <img height="100px" src="${k.imageUrl}" class="img-fluid" alt="${k.nama}">
                <div class="card-body d-flex flex-column flex-lg-column flex-md-column flex-sm-column text-center">
                  <a href="/detail/${k.id_produk}" class="text-decoration-none text-black product-link" data-id="${k.id_produk}">
                    <p class="card-title text-sm" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${k.nama}</p>
                  </a>
                  <div class="mt-auto">
                    <p class="card-text fw-bold text-sm">${Ut(k.harga)}</p>
                  </div>
                  <div class="">
                    <button class="btn-sm btn-cart rounded-3 p-2 mt-1">masukan keranjang</button>
                  </div>
                </div>
              </div>
            </div>
          `).join("");return`
          <div class="carousel-item ${b===0?"active":""}">
            <div class="row justify-content-center">
              ${y}
            </div>
          </div>
        `}).join("")}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#fruits-carousel" data-bs-slide="prev">
              <span class="prev-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-left"></i></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#fruits-carousel" data-bs-slide="next">
              <span class="next-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      `}catch(t){return console.error(t),"<div>Error fetching products. Please try again later.</div>"}},afterRender(){document.querySelectorAll(".product-link").forEach(n=>{n.addEventListener("click",r=>{r.preventDefault();const l=r.target.closest(".product-link").getAttribute("data-id");R(`/detail/${l}`)})})}},hc={async render(){try{const[t,n]=await Promise.all([xn(),rt()]);if(!Array.isArray(t)||!Array.isArray(n))throw new Error("Invalid data format for products or categories");const r=["Sayuran Segar","Buah-Buahan"],l=t.filter(k=>{const S=n.find(P=>P.id_kategori===k.id_kategori);return S&&!r.includes(S.nama_kategori)}),u=pc(l).slice(0,9),p={lg:2,md:3,sm:6};return`
        <div class="container mt-5">
          <h2 class="text-center mb-4 py-2 title-product">Produk Lainnya</h2>
          <div id="other-cards-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${$s(u,3).map((k,S)=>{const P=k.map(N=>`
            <div class="col-4 col-md-${p.md} col-lg-${p.lg}">
              <div class="card h-100" data-id="${N.id_produk}">
                <img height="100px" src="${N.imageUrl}" class="img-fluid" alt="${N.nama}">
                <div class="card-body d-flex flex-column flex-lg-column flex-md-column flex-sm-column text-center">
                  <a href="/detail/${N.id_produk}" class="text-decoration-none text-black product-link" data-id="${N.id_produk}">
                    <p class="card-title text-sm" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${N.nama}</p>
                  </a>
                  <div class="mt-auto">
                    <p class="card-text fw-bold text-sm">${Ut(N.harga)}</p>
                  </div>
                  <div class="">
                    <button class="btn-sm btn-cart rounded-3 p-2 mt-1">masukan keranjang</button>
                  </div>
                </div>
              </div>
            </div>
          `).join("");return`
          <div class="carousel-item ${S===0?"active":""}">
            <div class="row justify-content-center">
              ${P}
            </div>
          </div>
        `}).join("")}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#other-cards-carousel" data-bs-slide="prev">
              <span class="prev-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-left"></i></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#other-cards-carousel" data-bs-slide="next">
              <span class="next-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      `}catch(t){return console.error(t),"<div>Error fetching products. Please try again later.</div>"}},afterRender(){document.querySelectorAll(".product-link").forEach(n=>{n.addEventListener("click",r=>{r.preventDefault();const l=r.target.closest(".product-link").getAttribute("data-id");R(`/detail/${l}`)})})}};function pc(t){for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t}const Mi=[{id:1,name:"Sayuran Segar",image:"sayuran-segar.png"},{id:2,name:"Buah-Buahan",image:"buah-buahan.png"},{id:3,name:"Herbal dan Rempah",image:"herbal-dan-rempah.png"},{id:4,name:"Kacang-Kacangan",image:"kacang-kacangan.png"},{id:5,name:"Buah Kering",image:"buah-kering.png"},{id:6,name:"Minuman Sehat",image:"minuman-sehat.png"},{id:7,name:"Sayuran Organik",image:"sayuran-organik.png"},{id:8,name:"Produk Olahan",image:"produk-olahan.png"},{id:9,name:"Bibit dan Benih",image:"bibit-dan-benih.png"},{id:10,name:"Peralatan Berkebun",image:"peralatan-berkebun.png"},{id:11,name:"Makanan Ringan Sehat",image:"makanan-ringan-sehat.png"},{id:12,name:"Paket Hemat dan Bundel",image:"paket-hemat-dan-bundel.png"}],fc={async render(){return`
      <div class="home-category mt-5">
        <div class="category-header-section text-center">
          <div class="category-header-section__header">
            <h2 class="category-header-section__header__title">Kategori</h2>
          </div>
          <div class="category-header-section__content">
            <div class="image-category">
              <ul class="category-list mt-5 mb-5">
                ${Mi.map(n=>`
          <li class="category-item">
            <a class="category-grid" href="/c/${n.name}">
              <div class="item-wrap">
                <div class="item-wrap__image">
                  <div class="category-image">
                    <img class="category-image__placement" src="../images/categories/${n.image}">
                  </div>
                </div>
                <div class="item-wrap__image-title">
                  ${n.name}
                </div>
              </div>
            </a>
          </li>
        `).join("")}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `}},Te={async render(){return`
      <footer>
        <div class="container mt-4 footer-container">
          <div class="footer-section" id="footer-about">
            <h2>Tentang Kami</h2>
            <p>Kami menyediakan berbagai sayuran segar, buah-buahan, minuman sehat, dan produk berkualitas lainnya langsung dari petani lokal. Berkomitmen untuk kesehatan dan kesejahteraan Anda.</p>
          </div>
          <div class="footer-section" id="footer-links">
            <h2>Sebarsayur.id</h2>
            <ul>
              <li><a href="#">Beranda</a></li>
              <li><a href="#">Belanja</a></li>
              <li><a href="#">Tentang Kami</a></li>
              <li><a href="#">Kontak</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div class="footer-section" id="footer-contact">
            <h2>Kontak Kami</h2>
            <p><span class="footer-icon"><i class="fas fa-map-marker-alt"></i></span> Jalan Sehat No. 123, Jakarta</p>
            <p><span class="footer-icon"><i class="fas fa-phone"></i></span> +62 123 4567 890</p>
            <p><span class="footer-icon"><i class="fas fa-envelope"></i></span> <a href="mailto:info@sebarsayur.id">info@sebarsayur.id</a></p>
          </div>
          <div class="footer-section" id="footer-follow">
            <h2>Ikuti Kami</h2>
            <div class="social-icons">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
          <div class="footer-section" id="footer-logo">
            <img src="../images/logo1.png" alt="Logo Sebarsayur.id">
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2024 Serba Sayur Id. All Rights Reserved.</p>
        </div>
      </footer>
    `}},ms={async render(){const t=await te.render(),n=await mi.render(),r=await uc.render(),l=await fc.render(),a=await hc.render(),c=await Te.render();return`
      ${t}
      <div class="container hero mt-3">
        <div class="row">
            <a href="/about"><img src="../images/hero.png" alt="Hero Image" class="img-fluid" /></a>
        </div>
      </div>
      ${n}
      ${r}
      ${a}
      ${l}
      ${c}
    `},async afterRender(){await te.afterRender(),mi.afterRender()}},mc={async render(){return`
        <div id="login-page">
          <div class="login-container text-center">
            <div class="login-card">
              <img src="../images/logo1.png" alt="Logo" class="logo">
              <form id="login-form">
                <div class="input-group">
                  <div class="input-container">
                    <label for="email"></label>
                    <div class=""><i class="fas fa-user"></i></div>
                    <input type="email" id="email" name="email" placeholder="EMAIL" required>
                  </div>
                </div>
                <div class="input-group">
                  <div class="input-container">
                    <label for="password"></label>
                    <div class=""><i class="fas fa-lock"></i></div>
                    <input type="password" id="password" name="password" placeholder="PASSWORD" required>
                  </div>
                </div>
                <button type="submit" class="login-button">Login</button>
              </form>
              <p class="register-link">Don't have an account? <a href="/register">Register</a></p>
            </div>
          </div>
        </div>
      `},async afterRender(){document.getElementById("login-form").addEventListener("submit",async n=>{n.preventDefault();const r=document.getElementById("email").value,l=document.getElementById("password").value;try{const a=await login(r,l);console.log("Login berhasil:",a),sessionStorage.setItem("currentUser",JSON.stringify(a)),window.location.href="/"}catch(a){console.error("Login gagal:",a.message),alert(a.message)}})}},gc={async render(){return`
      ${await mc.render()}
    `},async afterRender(){localStorage.getItem("isLoggedIn"),document.getElementById("login-form").addEventListener("submit",async n=>{n.preventDefault();const r=document.getElementById("email").value,l=document.getElementById("password").value;try{const a=await Ol(r,l);localStorage.setItem("isLoggedIn",!0),R.redirect("/")}catch(a){console.error("Failed to login:",a)}})}},vc={async render(){return`
      <div id="register-page">
        <div class="register-container text-center">
          <div class="register-card">
            <img src="../images/logo1.png" alt="Logo" class="logo">
            <form id="register-form">
              <div class="input-group">
                <div class="input-container">
                  <label for="username"></label>
                  <div class=""><i class="fas fa-user"></i></div>
                  <input type="text" id="username" name="username" placeholder="USERNAME" required>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="email"></label>
                  <div class=""><i class="fas fa-user"></i></div>
                  <input type="email" id="email" name="email" placeholder="EMAIL" required>
                  <span id="email-error" class="error-message"></span>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="password"></label>
                  <div class=""><i class="fas fa-lock"></i></div>
                  <input type="password" id="password" name="password" placeholder="PASSWORD" required>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="phone"></label>
                  <div class=""><i class="fas fa-phone"></i></div>
                  <input type="tel" id="phone" name="phone" placeholder="PHONE" required>
                  <span id="phone-error" class="error-message"></span>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="address"></label>
                  <div class=""><i class="fas fa-home"></i></div>
                  <input type="text" id="address" name="address" placeholder="ADDRESS" required>
                </div>
              </div>
              <button type="submit" class="register-button">Register</button>
            </form>
            <p class="login-link">Have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    `}},bc={async render(){return vc.render()},async afterRender(){document.querySelector("#register-page form").addEventListener("submit",async n=>{n.preventDefault();const r=document.getElementById("username").value,l=document.getElementById("email").value,a=document.getElementById("password").value,c=document.getElementById("phone").value,u=document.getElementById("address").value,p={username:r,email:l,password:a,nomor_telepon:c,alamat:u};try{const b=(await Is()).data.users;if(!Array.isArray(b))throw new Error("Failed to fetch users");const y=b.some(P=>P.email===l),k=b.some(P=>P.nomor_telepon===c);if(y){alert("Email sudah digunakan, silakan gunakan email lain.");return}if(k){alert("Nomor telepon sudah digunakan, silakan gunakan nomor telepon lain.");return}const S=await Tl(p);document.getElementById("username").value="",document.getElementById("email").value="",document.getElementById("password").value="",document.getElementById("phone").value="",document.getElementById("address").value="",R.redirect("/login")}catch(m){console.error("Failed to register:",m)}})}},In="https://serbasayur-id-back-end.up.railway.app";async function yc(t){try{const n=await fetch(`${In}/carts/${t}`);if(!n.ok)throw new Error("Failed to fetch carts");return(await n.json()).data.carts}catch(n){throw console.error("Error fetching carts:",n.message),n}}function _c(){const t=new Date,n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0"),a=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0"),u=String(t.getSeconds()).padStart(2,"0");return`${n}-${r}-${l} ${a}:${c}:${u}`}async function wc(t){try{const n=await fetch(`${In}/carts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id_user:t.id_user,create_at:_c()})});if(!n.ok){const l=await n.json();throw new Error(l.message||"Failed to add cart")}return(await n.json()).data}catch(n){throw console.error("Failed to add cart:",n.message),n}}async function kc(t){try{const n=await fetch(`${In}/cartitems/${t}`);if(!n.ok)throw new Error("Failed to fetch cart items");return(await n.json()).data.cart_items}catch(n){throw console.error("Error fetching cart items:",n),n}}async function Ec(t,n,r){try{const l=await fetch(`${In}/cartitems`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id_cart:t,id_produk:n,quantity:r})});if(!l.ok){const c=await l.json();throw new Error(c.message||"Failed to add cart item")}return(await l.json()).data}catch(l){throw console.error("Failed to add cart item:",l.message),l}}const xc={async render(t){try{const n=await An(t),r=localStorage.getItem("userId");if(n.status==="success"){const l=n.data.product,a=`https://serbasayur-id-back-end.up.railway.app/image/${l.image}`;return`
          ${await te.render()}
          <div class="container my-5">
            <div class="row">
              <div class="col-12 col-md-5 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
                <img class="img-fluid" src="${a}" alt="${l.nama}" />
              </div>
              <div class="col-12 col-md-7 text-center text-md-start">
                <h3 class="detail-name">${l.nama}</h3>
                <p class="detail-price">${Ut(l.harga)}/kg</p>
                <p>${dc(l.rating)}</p>
                <p>Qty: ${l.kuantitas}</p>
                <div class="d-flex flex-column flex-md-row align-items-center mb-3">
                  <div class="d-flex align-items-center mb-3 mb-md-0">
                    <button id="decreaseQty" class="btn btn-outline-success">-</button>
                    <input type="number" id="quantity" value="1" class="form-control text-center mx-2" style="width: 60px;">
                    <button id="increaseQty" class="btn btn-outline-success">+</button>
                  </div>
                  <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button id="addToCart" class="btn btn-success btn-cart p-2 mx-2">+ Keranjang</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container mt-5">
            <ul class="nav nav-underline" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active text-success"
                  id="detail-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#detail"
                  type="button"
                  role="tab"
                  aria-controls="detail"
                  aria-selected="true"
                >
                  Detail
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link text-success"
                  id="specs-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#specs"
                  type="button"
                  role="tab"
                  aria-controls="specs"
                  aria-selected="false"
                >
                  Spesifikasi
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link text-success"
                  id="review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#review"
                  type="button"
                  role="tab"
                  aria-controls="review"
                  aria-selected="false"
                >
                  Review
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="detail"
                role="tabpanel"
                aria-labelledby="detail-tab"
              >
                <p>${l.deskripsi}</p>
              </div>
              <div
                class="tab-pane fade"
                id="specs"
                role="tabpanel"
                aria-labelledby="specs-tab"
              >
                <p>${l.specifications}</p>
              </div>
              <div
                class="tab-pane fade"
                id="review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <p>Bintang : ${l.rating}</p>
              </div>
            </div>
          </div>
          ${await Te.render()}
        `}else throw new Error("Failed to fetch product or user details")}catch(n){return console.error(n),"<div>Error fetching product details. Please try again later.</div>"}},afterRender(t){te.afterRender(),Oi(),document.getElementById("addToCart").addEventListener("click",async()=>{try{const r=localStorage.getItem("userId");if(!r){alert("Tidak bisa memasukkan ke Keranjang, Anda belum login."),R.redirect("/login");return}const a=(await wc({id_user:r})).id_cart,c=parseInt(document.getElementById("quantity").value,10),u=await Ec(a,t,c);alert("Produk berhasil ditambahkan ke keranjang!")}catch(r){console.error("Error adding product to cart:",r.message),alert("Gagal menambahkan produk ke keranjang. Silakan coba lagi.")}})}},Ac={async render(){return`
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="logo">
              <a href="/"><img height="50px" src="../images/logo1.png" alt="Serba Sayur ID"></a>
            </div>
          </div>
        </nav>
      </div>
    `},afterRender(){document.getElementById("search-form").addEventListener("submit",n=>{n.preventDefault();const r=document.getElementById("search-input").value;r&&R(`/search/${r}`)})}},Ic={async render(){try{const t=localStorage.getItem("userId");if(!t)throw new Error("User not logged in");const n=await bn(t);if(n.status==="success")return`
          <div class="container">
            <h2 class="section-title green fw-semibold">ALAMAT KIRIM</h2>
            <div class="address-wrapper d-flex">
              <h2 class="address-body fw-light">${n.data.user.alamat}</h2>
              <a href="" class="address-change text-center"><h2>UBAH</h2></a>
            </div>
          </div>
        `;throw new Error("Failed to fetch user details")}catch(t){return console.error("Error fetching address:",t.message),"<div>Error fetching address. Please try again later.</div>"}}},$c={async render(){return`
        <div class="container">
            <h2 class="section-title fw-semibold">PENGIRIMAN</h2>
            <div class="shipment-wrapper d-flex">
                <select class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Pilih</option>
                <option value="Next Day">Next Day</option>
                <option value="Kargo">Kargo</option>
                <option value="Reguler">Reguler</option>
                <option value="Same Day">Same Day</option>
            </select>
                <h1 class="shipment-price fw-normal">Rp25.000</h1>
            </div>
        </div>
        `}},Sc={async render(){return`
        <div class="payment-container d-flex">
            <h1 class="payment-title fw-semibold">Pilih Metode Pembayaran</h1>
            <select id="paymentMethod" class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Pilih</option>
                <option value="QRIS">QRIS</option>
                <option value="Transfer Bank">Transfer Bank</option>
                <option value="Gopay">Gopay</option>
                <option value="Paypal">Paypal</option>
                <option value="Cash On Delivery">Cash On Delivery</option>
            </select>
        </div>        
        `}},Ss="https://serbasayur-id-back-end.up.railway.app";async function gi(t,n,r,l){try{console.log({id_user:t,tanggal_order:n,status:r,total_harga:l});const a=await fetch(`${Ss}/orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id_user:t,tanggal_order:n,status:r,total_harga:l})});if(!a.ok)throw new Error("Failed to add order");return await a.json()}catch(a){throw new Error(`Failed to add order: ${a.message}`)}}async function Cc(t,n,r,l){try{const a=await fetch(`${Ss}/orderitems`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id_order:t,id_produk:n,kuantitas:r,harga_satuan:l})});if(!a.ok){const c=await a.text();throw new Error(`Failed to add order item: ${a.status} ${c}`)}return a.json()}catch(a){throw console.error("Error in addOrderItem:",a.message),a}}async function Lc(t){try{const n=await fetch(`${Ss}/orderitems/${t}`);if(!n.ok)throw new Error("Failed to fetch order items");return(await n.json()).data.order_items}catch(n){throw console.error("Error fetching order items:",n.message),n}}const Tc="https://serbasayur-id-back-end.up.railway.app";async function Pc(t){try{const n=await fetch(`${Tc}/payments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok)throw new Error("Failed to add payment");return await n.json()}catch(n){throw console.error("Error adding payment:",n),n}}const Oc={async render(){try{const t=localStorage.getItem("currentOrderId"),n=await Lc(t),r=[];for(const u of n){const p=await An(u.id_produk);if(p.data.product){const m=p.data.product;r.push({id_produk:m.id_produk,nama:m.nama,harga:m.harga,quantity:u.kuantitas,image:m.image})}}const l=r.map((u,p)=>`
            <div class="border rounded-3 m-3" key="${u.id_produk}">
              <h4 class="section-title ms-5 my-2">Serbasayur.id</h4>
              <div class="d-flex">
                <div class="border border-2 ms-5 mb-3 mt-2">
                  <img width="100px" src="https://serbasayur-id-back-end.up.railway.app/image/${u.image}" alt="${u.image}" />
                </div>
                <div class="mx-5 d-flex flex-column align-content-center w-100">
                  <h4>Produk ${u.nama}</h4>
                  <p>Harga: Rp${u.harga}</p>
                  <div class="d-flex justify-content-between">
                    <div class="form-check form-check-reverse mt-2">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked-${u.id_produk}" checked>
                      <label class="form-check-label" for="flexCheckChecked-${u.id_produk}"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).join(""),c=r.reduce((u,p)=>{const m=parseFloat(p.harga),b=parseInt(p.quantity);return isNaN(m)||isNaN(b)?u:u+m*b},0)+25e3;return`
        ${await Ac.render()}
        <div id="checkout-page">
          <h1 class="checkout-title fw-semibold">Checkout</h1>
          ${await Ic.render()}
          ${l}
          ${await $c.render()}
          ${await Sc.render()}
          <div class="total-price-container d-flex">
            <h2 class="price-total__title fw-normal">Total Harga</h2>
            <h1 class="price-total__value fw-normal">Rp${c}</h1>
          </div> 
          <div class="d-flex justify-content-end w-100 mt-2">
            <button id="payButton" class="pay text-center w-25 h-25">Bayar</button>
          </div>
        </div>
        ${await Te.render()}
      `}catch(t){return console.error("Error rendering CheckoutPage:",t),"<div>Error rendering CheckoutPage. Please try again later.</div>"}},async afterRender(){document.getElementById("payButton").addEventListener("click",async()=>{try{const n=localStorage.getItem("currentOrderId"),r=`${new Date().toISOString().slice(0,19).replace("T"," ")}`,l=document.getElementById("paymentMethod").value,a=await Pc({id_order:n,payment_date:r,amount:total,payment_method:l,payment_status:"Berhasil"});alert("Berhasil menambahkan ke pembayaran!"),window.location.href="/"}catch(n){console.error("Error adding all product to payment:",n.message),alert("Gagal menambahkan ke pembayaran. Silakan coba lagi.")}})}},Mc={render(t){return`
    <div class="d-flex align-items-center">
        <button id="decreaseQty" class="btn btn-outline-success">-</button>
        <input type="number" id="quantity" value="${t}" class="form-control text-center mx-2" style="width: 60px;">
        <button id="increaseQty" class="btn btn-outline-success">+</button>
    </div>
      `}};async function vi(){const t=localStorage.getItem("userId"),n=await yc(t),r=[],l=[];for(const a of n){const c=await kc(a.id_cart);r.push(...c)}for(const a of r){const c=await An(a.id_produk);l.push(Object.assign(c.data.product,{quantity:a.quantity}))}return console.log(l),l}var mn=0;const Rc={async render(){try{const t=localStorage.getItem("userId"),n=`${new Date().toISOString().slice(0,19).replace("T"," ")}`,l=await gi(t,n,"Belum bayar",mn);localStorage.setItem("currentOrderId",l.data.id_order);const a=await vi(),c=a.map((p,m)=>`
            <div class="border rounded-3 m-3" key="${p.id_produk}">
              <h4 class="section-title ms-5 my-2">Serbasayur.id</h4>
              <div class="d-flex">
                <div class="border border-2 ms-5 mb-3 mt-2">
                  <img width="100px" src="https://serbasayur-id-back-end.up.railway.app/image/${p.image}" alt="${p.image}" /> <!-- Sesuaikan path gambar -->
                </div>
                <div class="mx-5 d-flex flex-column align-content-center w-100">
                  <h4>Produk ${p.nama}</h4> <!-- Sesuaikan nama produk -->
                  <p>Harga: Rp${p.harga}</p> <!-- Sesuaikan harga produk -->
                  <div class="d-flex justify-content-between">
                    ${Mc.render(p.quantity)}
                    <div class="form-check form-check-reverse mt-2">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked-${p.id_produk}" checked>
                      <label class="form-check-label" for="flexCheckChecked-${p.id_produk}"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).join(""),u=a.reduce((p,m)=>p+m.harga*m.quantity,0);return mn=u,console.log(mn),`
        ${await te.render()}
        <div class="container d-flex gap-3 my-5">
          <div class="container">
            <div class="bakul d-flex justify-content-between">
              <h4>Bakul</h4>
              <div class="form-check d-flex">
                <p class="me-5">pilih semua panenmu</p>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedAll" checked>
                <label class="form-check-label" for="flexCheckCheckedAll"></label>
              </div>
            </div>
            <div class="border border-2 rounded-3">
              ${c}
            </div>
          </div>
          <div class="w-25 h-25 mt-5 border rounded-3 p-3">
            <h4 class="section-title my-2">Rincian Pesan</h4>
            <p class="border border-bottom border-grey"></p>
            <div class="d-flex justify-content-between">
              <p>Total Harga</p>
              <p>Rp${u}</p> <!-- Jumlah total harga disesuaikan -->
            </div>
            <button id="pay" class="btn btn-success w-100">Bayar</button>
          </div>
        </div>
        ${await Te.render()}
      `}catch(t){return console.error("Error rendering CartPage:",t),"<div>Error rendering CartPage. Please try again later.</div>"}},async afterRender(){te.afterRender(),Oi();const t=await vi();document.getElementById("pay").addEventListener("click",async()=>{try{const r=localStorage.getItem("userId"),l=`${new Date().toISOString().slice(0,19).replace("T"," ")}`,a=await gi(r,l,"Belum bayar",mn);console.log(a);const c=a.data.id_order;for(const u of t){const p=parseInt(u.quantity,10),m=parseInt(u.harga,10),b=await Cc(c,u.id_produk,p,m)}localStorage.setItem("currentOrderId",c),alert("Berhasil menambahkan ke pesanan!"),window.location.href="/checkout"}catch(r){console.error("Error adding all product to order:",r.message),alert("Gagal menambahkan ke pesanan. Silakan coba lagi.")}})}},_n={async render(){return`
      <div class="ctg-container me-4 rounded border">
        <h4 class="ctg-container__title bg-body-tertiary rounded-top p-3">Kategori</h4>
        <ul class="ctg-container__body mb-3">
          ${Mi.map(n=>`
          <li class="ctg-container__content px-4">
            <a href="/c/${n.name}" class="category-link" data-category="${n.name}">
              ${n.name}
            </a>
          </li>
        `).join("")}
        </ul>
      </div>
    `},async afterRender(){document.querySelectorAll(".category-link").forEach(n=>{n.addEventListener("click",r=>{r.preventDefault();const l=r.target.getAttribute("data-category");R(`/c/${l}`)})})}},Ri={async render(t){try{if(!Array.isArray(t))throw new Error("Products is not an array");return`
                <div class="product-cards-container d-grid">
                    ${t.map(r=>`
                <div class="product-card border shadow-sm bg-body-tertiary rounded">
                    <img src="https://serbasayur-id-back-end.up.railway.app/image/${r.image}" alt="${r.nama}" class="product-image w-100 rounded-top border-bottom">
                    <div class="product-card__body p-3 text-center bg-white rounded-bottom w-100">
                        <div class="product-name fw-light fs-6 mb-4 text-elip"><a href="/detail/${r.id_produk}">${r.nama}</a></div>
                        <p class="product-price fw-bolder green-t mb-1 w-100">${Ut(r.harga)}</p>
                        <button class="btn-sm btn-cart rounded-3 p-2 w-100 green-t cart-res">Masukan Keranjang</button>
                    </div>
                </div>
            `).join("")}
                </div>
            `}catch(n){return console.error(n),"<div>Error fetching products. Please try again later.</div>"}}},Dc={async render(t,n,r){const l=r.find(u=>u.nama_kategori===t),a=n.filter(u=>u.id_kategori===l.id_kategori),c=await Ri.render(a);return`
      <div class="product-shelf mt-3">
        <h6>Menampilkan ${a.length} produk untuk kategori <b>"${t}"</b></h6>
        <div class="product-wrapper">
          <div class="product-list mt-3">
            ${c}
          </div>
        </div>
      </div>
    `}},jc={async render({category:t}){try{const n=await Sl(t),r=await rt(),l=await _n.render();if(n.length>=0){const a=await Dc.render(t,n,r);return`
                    ${await te.render()}
                    <div class="cp-container mt-5 mb-5">
                        ${l}
                        ${a}
                    </div>
                    ${await Te.render()}
                    `}else throw new Error("Failed to fetch product details")}catch(n){return console.error(n),`
      ${await te.render()}
      <div style="height: calc(100vh - 66px)">Found Empty Product.<a href="../">Back</a></div>
      ${await Te.render()}
      `}},async afterRender(){await te.afterRender(),await _n.afterRender()}};function Ne(t){return Array.isArray?Array.isArray(t):Ni(t)==="[object Array]"}const Nc=1/0;function Bc(t){if(typeof t=="string")return t;let n=t+"";return n=="0"&&1/t==-Nc?"-0":n}function Fc(t){return t==null?"":Bc(t)}function Le(t){return typeof t=="string"}function Di(t){return typeof t=="number"}function Hc(t){return t===!0||t===!1||qc(t)&&Ni(t)=="[object Boolean]"}function ji(t){return typeof t=="object"}function qc(t){return ji(t)&&t!==null}function he(t){return t!=null}function hs(t){return!t.trim().length}function Ni(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Kc="Incorrect 'index' type",Uc=t=>`Invalid value for key ${t}`,Wc=t=>`Pattern length exceeds max of ${t}.`,zc=t=>`Missing ${t} property in key`,Gc=t=>`Property 'weight' in key '${t}' must be a positive integer`,bi=Object.prototype.hasOwnProperty;class Vc{constructor(n){this._keys=[],this._keyMap={};let r=0;n.forEach(l=>{let a=Bi(l);this._keys.push(a),this._keyMap[a.id]=a,r+=a.weight}),this._keys.forEach(l=>{l.weight/=r})}get(n){return this._keyMap[n]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Bi(t){let n=null,r=null,l=null,a=1,c=null;if(Le(t)||Ne(t))l=t,n=yi(t),r=gs(t);else{if(!bi.call(t,"name"))throw new Error(zc("name"));const u=t.name;if(l=u,bi.call(t,"weight")&&(a=t.weight,a<=0))throw new Error(Gc(u));n=yi(u),r=gs(u),c=t.getFn}return{path:n,id:r,weight:a,src:l,getFn:c}}function yi(t){return Ne(t)?t:t.split(".")}function gs(t){return Ne(t)?t.join("."):t}function Qc(t,n){let r=[],l=!1;const a=(c,u,p)=>{if(he(c))if(!u[p])r.push(c);else{let m=u[p];const b=c[m];if(!he(b))return;if(p===u.length-1&&(Le(b)||Di(b)||Hc(b)))r.push(Fc(b));else if(Ne(b)){l=!0;for(let y=0,k=b.length;y<k;y+=1)a(b[y],u,p+1)}else u.length&&a(b,u,p+1)}};return a(t,Le(n)?n.split("."):n,0),l?r:r[0]}const Xc={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Yc={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,n)=>t.score===n.score?t.idx<n.idx?-1:1:t.score<n.score?-1:1},Jc={location:0,threshold:.6,distance:100},Zc={useExtendedSearch:!1,getFn:Qc,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var C={...Yc,...Xc,...Jc,...Zc};const ed=/[^ ]+/g;function td(t=1,n=3){const r=new Map,l=Math.pow(10,n);return{get(a){const c=a.match(ed).length;if(r.has(c))return r.get(c);const u=1/Math.pow(c,.5*t),p=parseFloat(Math.round(u*l)/l);return r.set(c,p),p},clear(){r.clear()}}}class Cs{constructor({getFn:n=C.getFn,fieldNormWeight:r=C.fieldNormWeight}={}){this.norm=td(r,3),this.getFn=n,this.isCreated=!1,this.setIndexRecords()}setSources(n=[]){this.docs=n}setIndexRecords(n=[]){this.records=n}setKeys(n=[]){this.keys=n,this._keysMap={},n.forEach((r,l)=>{this._keysMap[r.id]=l})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Le(this.docs[0])?this.docs.forEach((n,r)=>{this._addString(n,r)}):this.docs.forEach((n,r)=>{this._addObject(n,r)}),this.norm.clear())}add(n){const r=this.size();Le(n)?this._addString(n,r):this._addObject(n,r)}removeAt(n){this.records.splice(n,1);for(let r=n,l=this.size();r<l;r+=1)this.records[r].i-=1}getValueForItemAtKeyId(n,r){return n[this._keysMap[r]]}size(){return this.records.length}_addString(n,r){if(!he(n)||hs(n))return;let l={v:n,i:r,n:this.norm.get(n)};this.records.push(l)}_addObject(n,r){let l={i:r,$:{}};this.keys.forEach((a,c)=>{let u=a.getFn?a.getFn(n):this.getFn(n,a.path);if(he(u)){if(Ne(u)){let p=[];const m=[{nestedArrIndex:-1,value:u}];for(;m.length;){const{nestedArrIndex:b,value:y}=m.pop();if(he(y))if(Le(y)&&!hs(y)){let k={v:y,i:b,n:this.norm.get(y)};p.push(k)}else Ne(y)&&y.forEach((k,S)=>{m.push({nestedArrIndex:S,value:k})})}l.$[c]=p}else if(Le(u)&&!hs(u)){let p={v:u,n:this.norm.get(u)};l.$[c]=p}}}),this.records.push(l)}toJSON(){return{keys:this.keys,records:this.records}}}function Fi(t,n,{getFn:r=C.getFn,fieldNormWeight:l=C.fieldNormWeight}={}){const a=new Cs({getFn:r,fieldNormWeight:l});return a.setKeys(t.map(Bi)),a.setSources(n),a.create(),a}function nd(t,{getFn:n=C.getFn,fieldNormWeight:r=C.fieldNormWeight}={}){const{keys:l,records:a}=t,c=new Cs({getFn:n,fieldNormWeight:r});return c.setKeys(l),c.setIndexRecords(a),c}function gn(t,{errors:n=0,currentLocation:r=0,expectedLocation:l=0,distance:a=C.distance,ignoreLocation:c=C.ignoreLocation}={}){const u=n/t.length;if(c)return u;const p=Math.abs(l-r);return a?u+p/a:p?1:u}function sd(t=[],n=C.minMatchCharLength){let r=[],l=-1,a=-1,c=0;for(let u=t.length;c<u;c+=1){let p=t[c];p&&l===-1?l=c:!p&&l!==-1&&(a=c-1,a-l+1>=n&&r.push([l,a]),l=-1)}return t[c-1]&&c-l>=n&&r.push([l,c-1]),r}const st=32;function rd(t,n,r,{location:l=C.location,distance:a=C.distance,threshold:c=C.threshold,findAllMatches:u=C.findAllMatches,minMatchCharLength:p=C.minMatchCharLength,includeMatches:m=C.includeMatches,ignoreLocation:b=C.ignoreLocation}={}){if(n.length>st)throw new Error(Wc(st));const y=n.length,k=t.length,S=Math.max(0,Math.min(l,k));let P=c,N=S;const J=p>1||m,V=J?Array(k):[];let z;for(;(z=t.indexOf(n,N))>-1;){let ae=gn(n,{currentLocation:z,expectedLocation:S,distance:a,ignoreLocation:b});if(P=Math.min(ae,P),N=z+y,J){let pe=0;for(;pe<y;)V[z+pe]=1,pe+=1}}N=-1;let G=[],Ae=1,Be=y+k;const $n=1<<y-1;for(let ae=0;ae<y;ae+=1){let pe=0,_e=Be;for(;pe<_e;)gn(n,{errors:ae,currentLocation:S+_e,expectedLocation:S,distance:a,ignoreLocation:b})<=P?pe=_e:Be=_e,_e=Math.floor((Be-pe)/2+pe);Be=_e;let At=Math.max(1,S-_e+1),It=u?k:Math.min(S+_e,k)+y,Pe=Array(It+2);Pe[It+1]=(1<<ae)-1;for(let oe=It;oe>=At;oe-=1){let We=oe-1,$t=r[t.charAt(We)];if(J&&(V[We]=+!!$t),Pe[oe]=(Pe[oe+1]<<1|1)&$t,ae&&(Pe[oe]|=(G[oe+1]|G[oe])<<1|1|G[oe+1]),Pe[oe]&$n&&(Ae=gn(n,{errors:ae,currentLocation:We,expectedLocation:S,distance:a,ignoreLocation:b}),Ae<=P)){if(P=Ae,N=We,N<=S)break;At=Math.max(1,2*S-N)}}if(gn(n,{errors:ae+1,currentLocation:S,expectedLocation:S,distance:a,ignoreLocation:b})>P)break;G=Pe}const xt={isMatch:N>=0,score:Math.max(.001,Ae)};if(J){const ae=sd(V,p);ae.length?m&&(xt.indices=ae):xt.isMatch=!1}return xt}function id(t){let n={};for(let r=0,l=t.length;r<l;r+=1){const a=t.charAt(r);n[a]=(n[a]||0)|1<<l-r-1}return n}class Hi{constructor(n,{location:r=C.location,threshold:l=C.threshold,distance:a=C.distance,includeMatches:c=C.includeMatches,findAllMatches:u=C.findAllMatches,minMatchCharLength:p=C.minMatchCharLength,isCaseSensitive:m=C.isCaseSensitive,ignoreLocation:b=C.ignoreLocation}={}){if(this.options={location:r,threshold:l,distance:a,includeMatches:c,findAllMatches:u,minMatchCharLength:p,isCaseSensitive:m,ignoreLocation:b},this.pattern=m?n:n.toLowerCase(),this.chunks=[],!this.pattern.length)return;const y=(S,P)=>{this.chunks.push({pattern:S,alphabet:id(S),startIndex:P})},k=this.pattern.length;if(k>st){let S=0;const P=k%st,N=k-P;for(;S<N;)y(this.pattern.substr(S,st),S),S+=st;if(P){const J=k-st;y(this.pattern.substr(J),J)}}else y(this.pattern,0)}searchIn(n){const{isCaseSensitive:r,includeMatches:l}=this.options;if(r||(n=n.toLowerCase()),this.pattern===n){let N={isMatch:!0,score:0};return l&&(N.indices=[[0,n.length-1]]),N}const{location:a,distance:c,threshold:u,findAllMatches:p,minMatchCharLength:m,ignoreLocation:b}=this.options;let y=[],k=0,S=!1;this.chunks.forEach(({pattern:N,alphabet:J,startIndex:V})=>{const{isMatch:z,score:G,indices:Ae}=rd(n,N,J,{location:a+V,distance:c,threshold:u,findAllMatches:p,minMatchCharLength:m,includeMatches:l,ignoreLocation:b});z&&(S=!0),k+=G,z&&Ae&&(y=[...y,...Ae])});let P={isMatch:S,score:S?k/this.chunks.length:1};return S&&l&&(P.indices=y),P}}class Ue{constructor(n){this.pattern=n}static isMultiMatch(n){return _i(n,this.multiRegex)}static isSingleMatch(n){return _i(n,this.singleRegex)}search(){}}function _i(t,n){const r=t.match(n);return r?r[1]:null}class ad extends Ue{constructor(n){super(n)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(n){const r=n===this.pattern;return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class od extends Ue{constructor(n){super(n)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(n){const l=n.indexOf(this.pattern)===-1;return{isMatch:l,score:l?0:1,indices:[0,n.length-1]}}}class ld extends Ue{constructor(n){super(n)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(n){const r=n.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class cd extends Ue{constructor(n){super(n)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(n){const r=!n.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,n.length-1]}}}class dd extends Ue{constructor(n){super(n)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(n){const r=n.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[n.length-this.pattern.length,n.length-1]}}}class ud extends Ue{constructor(n){super(n)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(n){const r=!n.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,n.length-1]}}}class qi extends Ue{constructor(n,{location:r=C.location,threshold:l=C.threshold,distance:a=C.distance,includeMatches:c=C.includeMatches,findAllMatches:u=C.findAllMatches,minMatchCharLength:p=C.minMatchCharLength,isCaseSensitive:m=C.isCaseSensitive,ignoreLocation:b=C.ignoreLocation}={}){super(n),this._bitapSearch=new Hi(n,{location:r,threshold:l,distance:a,includeMatches:c,findAllMatches:u,minMatchCharLength:p,isCaseSensitive:m,ignoreLocation:b})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(n){return this._bitapSearch.searchIn(n)}}class Ki extends Ue{constructor(n){super(n)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(n){let r=0,l;const a=[],c=this.pattern.length;for(;(l=n.indexOf(this.pattern,r))>-1;)r=l+c,a.push([l,r-1]);const u=!!a.length;return{isMatch:u,score:u?0:1,indices:a}}}const vs=[ad,Ki,ld,cd,ud,dd,od,qi],wi=vs.length,hd=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,pd="|";function fd(t,n={}){return t.split(pd).map(r=>{let l=r.trim().split(hd).filter(c=>c&&!!c.trim()),a=[];for(let c=0,u=l.length;c<u;c+=1){const p=l[c];let m=!1,b=-1;for(;!m&&++b<wi;){const y=vs[b];let k=y.isMultiMatch(p);k&&(a.push(new y(k,n)),m=!0)}if(!m)for(b=-1;++b<wi;){const y=vs[b];let k=y.isSingleMatch(p);if(k){a.push(new y(k,n));break}}}return a})}const md=new Set([qi.type,Ki.type]);class gd{constructor(n,{isCaseSensitive:r=C.isCaseSensitive,includeMatches:l=C.includeMatches,minMatchCharLength:a=C.minMatchCharLength,ignoreLocation:c=C.ignoreLocation,findAllMatches:u=C.findAllMatches,location:p=C.location,threshold:m=C.threshold,distance:b=C.distance}={}){this.query=null,this.options={isCaseSensitive:r,includeMatches:l,minMatchCharLength:a,findAllMatches:u,ignoreLocation:c,location:p,threshold:m,distance:b},this.pattern=r?n:n.toLowerCase(),this.query=fd(this.pattern,this.options)}static condition(n,r){return r.useExtendedSearch}searchIn(n){const r=this.query;if(!r)return{isMatch:!1,score:1};const{includeMatches:l,isCaseSensitive:a}=this.options;n=a?n:n.toLowerCase();let c=0,u=[],p=0;for(let m=0,b=r.length;m<b;m+=1){const y=r[m];u.length=0,c=0;for(let k=0,S=y.length;k<S;k+=1){const P=y[k],{isMatch:N,indices:J,score:V}=P.search(n);if(N){if(c+=1,p+=V,l){const z=P.constructor.type;md.has(z)?u=[...u,...J]:u.push(J)}}else{p=0,c=0,u.length=0;break}}if(c){let k={isMatch:!0,score:p/c};return l&&(k.indices=u),k}}return{isMatch:!1,score:1}}}const bs=[];function vd(...t){bs.push(...t)}function ys(t,n){for(let r=0,l=bs.length;r<l;r+=1){let a=bs[r];if(a.condition(t,n))return new a(t,n)}return new Hi(t,n)}const wn={AND:"$and",OR:"$or"},_s={PATH:"$path",PATTERN:"$val"},ws=t=>!!(t[wn.AND]||t[wn.OR]),bd=t=>!!t[_s.PATH],yd=t=>!Ne(t)&&ji(t)&&!ws(t),ki=t=>({[wn.AND]:Object.keys(t).map(n=>({[n]:t[n]}))});function Ui(t,n,{auto:r=!0}={}){const l=a=>{let c=Object.keys(a);const u=bd(a);if(!u&&c.length>1&&!ws(a))return l(ki(a));if(yd(a)){const m=u?a[_s.PATH]:c[0],b=u?a[_s.PATTERN]:a[m];if(!Le(b))throw new Error(Uc(m));const y={keyId:gs(m),pattern:b};return r&&(y.searcher=ys(b,n)),y}let p={children:[],operator:c[0]};return c.forEach(m=>{const b=a[m];Ne(b)&&b.forEach(y=>{p.children.push(l(y))})}),p};return ws(t)||(t=ki(t)),l(t)}function _d(t,{ignoreFieldNorm:n=C.ignoreFieldNorm}){t.forEach(r=>{let l=1;r.matches.forEach(({key:a,norm:c,score:u})=>{const p=a?a.weight:null;l*=Math.pow(u===0&&p?Number.EPSILON:u,(p||1)*(n?1:c))}),r.score=l})}function wd(t,n){const r=t.matches;n.matches=[],he(r)&&r.forEach(l=>{if(!he(l.indices)||!l.indices.length)return;const{indices:a,value:c}=l;let u={indices:a,value:c};l.key&&(u.key=l.key.src),l.idx>-1&&(u.refIndex=l.idx),n.matches.push(u)})}function kd(t,n){n.score=t.score}function Ed(t,n,{includeMatches:r=C.includeMatches,includeScore:l=C.includeScore}={}){const a=[];return r&&a.push(wd),l&&a.push(kd),t.map(c=>{const{idx:u}=c,p={item:n[u],refIndex:u};return a.length&&a.forEach(m=>{m(c,p)}),p})}class Et{constructor(n,r={},l){this.options={...C,...r},this.options.useExtendedSearch,this._keyStore=new Vc(this.options.keys),this.setCollection(n,l)}setCollection(n,r){if(this._docs=n,r&&!(r instanceof Cs))throw new Error(Kc);this._myIndex=r||Fi(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(n){he(n)&&(this._docs.push(n),this._myIndex.add(n))}remove(n=()=>!1){const r=[];for(let l=0,a=this._docs.length;l<a;l+=1){const c=this._docs[l];n(c,l)&&(this.removeAt(l),l-=1,a-=1,r.push(c))}return r}removeAt(n){this._docs.splice(n,1),this._myIndex.removeAt(n)}getIndex(){return this._myIndex}search(n,{limit:r=-1}={}){const{includeMatches:l,includeScore:a,shouldSort:c,sortFn:u,ignoreFieldNorm:p}=this.options;let m=Le(n)?Le(this._docs[0])?this._searchStringList(n):this._searchObjectList(n):this._searchLogical(n);return _d(m,{ignoreFieldNorm:p}),c&&m.sort(u),Di(r)&&r>-1&&(m=m.slice(0,r)),Ed(m,this._docs,{includeMatches:l,includeScore:a})}_searchStringList(n){const r=ys(n,this.options),{records:l}=this._myIndex,a=[];return l.forEach(({v:c,i:u,n:p})=>{if(!he(c))return;const{isMatch:m,score:b,indices:y}=r.searchIn(c);m&&a.push({item:c,idx:u,matches:[{score:b,value:c,norm:p,indices:y}]})}),a}_searchLogical(n){const r=Ui(n,this.options),l=(p,m,b)=>{if(!p.children){const{keyId:k,searcher:S}=p,P=this._findMatches({key:this._keyStore.get(k),value:this._myIndex.getValueForItemAtKeyId(m,k),searcher:S});return P&&P.length?[{idx:b,item:m,matches:P}]:[]}const y=[];for(let k=0,S=p.children.length;k<S;k+=1){const P=p.children[k],N=l(P,m,b);if(N.length)y.push(...N);else if(p.operator===wn.AND)return[]}return y},a=this._myIndex.records,c={},u=[];return a.forEach(({$:p,i:m})=>{if(he(p)){let b=l(r,p,m);b.length&&(c[m]||(c[m]={idx:m,item:p,matches:[]},u.push(c[m])),b.forEach(({matches:y})=>{c[m].matches.push(...y)}))}}),u}_searchObjectList(n){const r=ys(n,this.options),{keys:l,records:a}=this._myIndex,c=[];return a.forEach(({$:u,i:p})=>{if(!he(u))return;let m=[];l.forEach((b,y)=>{m.push(...this._findMatches({key:b,value:u[y],searcher:r}))}),m.length&&c.push({idx:p,item:u,matches:m})}),c}_findMatches({key:n,value:r,searcher:l}){if(!he(r))return[];let a=[];if(Ne(r))r.forEach(({v:c,i:u,n:p})=>{if(!he(c))return;const{isMatch:m,score:b,indices:y}=l.searchIn(c);m&&a.push({score:b,key:n,value:c,idx:u,norm:p,indices:y})});else{const{v:c,n:u}=r,{isMatch:p,score:m,indices:b}=l.searchIn(c);p&&a.push({score:m,key:n,value:c,norm:u,indices:b})}return a}}Et.version="7.0.0";Et.createIndex=Fi;Et.parseIndex=nd;Et.config=C;Et.parseQuery=Ui;vd(gd);const xd={async render(t,n){const r={keys:["nama"],threshold:.3},c=new Et(n,r).search(t).map(p=>p.item),u=await Ri.render(c);return`
        <div class="product-shelf mt-3">
            <h6>Menampilkan ${c.length} produk untuk pencarian <b>"${t}"</b></h6>
            <div class="product-wrapper">
                <div class="product-list mt-3">
                    ${u}
                </div>
            </div>
        </div>
        `}},Ad={async render({query:t}){try{const n=await Cl(t),r=await _n.render();if(n.status==="success"){const l=n.data.products,a=await xd.render(t,l);return`
                    ${await te.render()}
                    <div class="cp-container mt-5 mb-5">
                        ${r}
                        ${a}
                    </div>
                    ${await Te.render()}
                    `}else throw new Error("Failed to fetch search results")}catch(n){return console.error(n),"<div>Error fetching search results. Please try again later.</div>"}},async afterRender(){await te.afterRender(),await _n.afterRender()}},Id={async render(){return`
      <div class="hero-about position-relative text-center d-flex justify-content-center align-items-center" 
           style="margin: auto; width: 100vw; background: url('../images/about-bg.png') no-repeat bottom center; height: calc(100vh - 66px); background-size: 90vh;   font-family: 'poppins', sans-serif;">
        <div class="hero-about_title p-5 rounded" style="opacity: 0.9; margin-bottom: 40vh">
          <h1>Selamat Datang di <span style="color: #4dc38c;">Serbasayur.id!</span></h1>
        </div>
      </div>
    `}},$d={async render(){return`
        ${await te.render()}
        ${await Id.render()}
        <div class="shadow">
            <div class="company-desc">
                <div class="image-desc">
                    <img class="shadow" src="../images/petani.jpg" alt="Petani">
                </div>
                <h4 class="mt-0 ms-4 fw-light">Serbasayur.id menjawab tantangan dalam memperoleh sayuran segar langsung dari petani lokal. Kami bertujuan untuk meningkatkan aksesibilitas dan kualitas dibandingkan pasar konvensional, memastikan keberlanjutan ekonomi petani lokal.</h4>
            </div>
        </div>
        <div>
            <div class="company-desc">
                <h4 class="mt-0 fw-light text-end">Menjadi platform terdepan untuk mendapatkan sayuran segar langsung dari petani lokal, mempromosikan pertanian berkelanjutan dan gaya hidup sehat.</h4>
                <div class="image-desc ms-4">
                    <img class="shadow" src="../images/vision.jpg" alt="Petani">
                </div>
            </div>
        </div>
        <div class="shadow">
            <div class="company-desc">
                <div class="image-desc">
                    <img class="shadow" src="../images/petani.jpg" alt="Petani">
                </div>
                <div class="company-mission ms-4">
                    <h2 class="card-title mt-5" style="font-weight: bold; color: #28a745;">Misi Kami</h2>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Memberikan akses mudah ke sayuran segar dari petani lokal.</li>
                        <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Memastikan harga yang adil untuk petani dan konsumen.</li>
                        <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Mempromosikan praktik pertanian yang berkelanjutan.</li>
                        <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Meningkatkan kualitas dan kesegaran sayuran yang tersedia bagi konsumen.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <h2 class="card-title mt-5 text-center" style="font-weight: bold; color: #28a745;">Tim Kami</h2>
            <p class="card-text text-center">
            Tim kami yang berdedikasi terdiri dari:
            </p>
            <ul class="company-desc pt-2 list-group list-group-flush">
                <li class="list-group-item" style="border: 0; padding-left: 0;"><strong>Rio dan Hanan:</strong> Pengembang Front-End yang bertanggung jawab untuk mengimplementasikan desain UI/UX, berkolaborasi dengan tim back-end untuk integrasi, menguji responsivitas, dan memperbaiki masalah.</li>
                <li class="list-group-item" style="border: 0; padding-left: 0;"><strong>Fauzan:</strong> Pengembang Back-End yang bertanggung jawab untuk merancang dan mengimplementasikan sistem backend, struktur database, pengembangan API, dan pengujian integrasi.</li>
            </ul>
        </div>
        ${await Te.render()}
        `},async afterRender(){te.afterRender()}},Sd={async render(){const t=localStorage.getItem("userId"),r=(await bn(t)).data.user;return`
      ${await te.render()}
      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col-md-3">
            <div class="list-group">
              <div class="list-group-item list-group-item-action active" aria-current="true">
                Akun
              </div>
              <button class="list-group-item list-group-item-action" id="logout-button-profile">Logout</button>
            </div>
          </div>
          <div class="col-md-9">
            <div class="card">
              <div class="card-header">
                Profile
              </div>
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" value="${r.username}" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" value="${r.email}" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="form-label">Nomor Telepon</label>
                    <input type="text" class="form-control" id="phone" value="${r.nomor_telepon}" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="address" class="form-label">Alamat</label>
                    <input type="text" class="form-control" id="address" value="${r.alamat}" disabled>
                  </div>
                </form>
                <a href="/profile/edit-profile" class="btn btn-primary mt-3">Ubah Data</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${await Te.render()}
    `},async afterRender(){await te.afterRender();const t=document.getElementById("logout-button-profile");t&&t.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userId"),R.redirect("/login")})}},Cd={async render(){const t=localStorage.getItem("userId"),r=(await bn(t)).data.user;return`
      ${await te.render()}
      <div class="container mt-3 mb-5">
        <div class="row">
          <div class="col-md-3 mt-4">
            <div class="list-group">
              <div class="list-group-item list-group-item-action active" aria-current="true">
                Akun
              </div>
              <button class="list-group-item list-group-item-action" id="logout-button-profile">Logout</button>
            </div>
          </div>
          <div class="col-md-9 mt-4">
            <div class="card">
              <div class="card-header">
                Edit Profile
              </div>
              <div class="card-body">
                <form id="edit-profile-form">
                  <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" value="${r.username}">
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" value="${r.email}">
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="form-label">Nomor Telepon</label>
                    <input type="text" class="form-control" id="phone" value="${r.nomor_telepon}">
                  </div>
                  <div class="mb-3">
                    <label for="address" class="form-label">Alamat</label>
                    <input type="text" class="form-control" id="address" value="${r.alamat}">
                  </div>
                  <div class="mb-3">
                    <label for="currentPassword" class="form-label">Password Lama</label>
                    <input type="password" class="form-control" id="currentPassword" placeholder="••••••••" required>
                  </div>
                  <div class="mb-3">
                    <label for="newPassword" class="form-label">Password Baru</label>
                    <input type="password" class="form-control" id="newPassword" placeholder="••••••••" required>
                  </div>
                  <button type="submit" class="btn btn-success mt-3">Simpan Perubahan</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${await Te.render()}
    `},async afterRender(){document.getElementById("edit-profile-form").addEventListener("submit",async n=>{n.preventDefault();const r=localStorage.getItem("userId"),a=(await bn(r)).data.user,c=document.getElementById("currentPassword").value,u=document.getElementById("newPassword").value,p={username:document.getElementById("username").value,email:document.getElementById("email").value,nomor_telepon:document.getElementById("phone").value,alamat:document.getElementById("address").value,password:a.password};if(c&&u)if(c===a.password)p.password=u;else{alert("Password lama tidak sesuai");return}try{await Pl(r,p),alert("Data berhasil diperbarui"),R.redirect("/profile")}catch(m){console.error("Failed to update user:",m.message),alert("Gagal memperbarui data")}});const t=document.getElementById("logout-button-profile");t&&t.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userId"),R.redirect("/login")}),await te.afterRender()}},kt={async render(){return`
      <!-- =============== Navigation ================ -->
      <div class="navigation">
          <ul>
              <!-- Logo -->
              <li>
                  <a href="/dashboard">
                      <span class="icon mx-2">
                          <img width="230px" class="img-fluid" src="../images/logo1.png" alt="" />
                      </span>
                  </a>
              </li>
  
              <!-- Dashboard -->
              <li>
                  <a href="/dashboard">
                      <span class="icon">
                          <ion-icon name="home-outline"></ion-icon>
                      </span>
                      <span class="title">Dashboard</span>
                  </a>
              </li>
  
              <!-- Customers -->
              <li>
                  <a href="/dashboard/customers">
                      <span class="icon">
                          <ion-icon name="people-outline"></ion-icon>
                      </span>
                      <span class="title">Customers</span>
                  </a>
              </li>
  
              <!-- Dropdown Produk -->
              <li class="nav-item dropdown">
                  <a class="nav-link" href="#" role="button" id="navbarDropdownProduk" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="icon">
                          <ion-icon name="archive-outline"></ion-icon>
                      </span>
                      <span class="title">Produk</span>
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="/dashboard">Produk</a></li>
                      <hr />
                      <li><a class="dropdown-item" href="/dashboard/addProduk">Add Produk</a></li>
                      <li><a class="dropdown-item" href="/dashboard/category">Kategori</a></li>
                      <li><a class="dropdown-item" href="/dashboard/listProduk">List Produk</a></li>
                  </ul>
              </li>
  
              <!-- Dropdown Order -->
              <li class="nav-item dropdown">
                  <a class="nav-link" href="#" role="button" id="navbarDropdownOrder" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="icon">
                          <ion-icon name="archive-outline"></ion-icon>
                      </span>
                      <span class="title">Order</span>
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Order</a></li>
                      <hr />
                      <li><a class="dropdown-item" href="#">Add Produk</a></li>
                      <li><a class="dropdown-item" href="#">Kategori</a></li>
                      <li><a class="dropdown-item" href="#">List Produk</a></li>
                  </ul>
              </li>
  
              <!-- Dropdown Settings -->
              <li class="nav-item dropdown">
                  <a class="nav-link" href="#" role="button" id="navbarDropdownSettings" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="icon">
                          <ion-icon name="settings-outline"></ion-icon>
                      </span>
                      <span class="title">Settings</span>
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Setting</a></li>
                      <hr />
                      <li><a class="dropdown-item" href="/dashboard/register">Add Account Admin</a></li>
                      <li><a class="dropdown-item" href="#">Profile Admin</a></li>
                  </ul>
              </li>
  
              <!-- Logout -->
              <li>
                  <a href="#" id="logoutBtn">
                      <span class="icon">
                          <ion-icon name="log-out-outline"></ion-icon>
                      </span>
                      <span class="title">Logout</span>
                  </a>
              </li>
          </ul>
      </div>
    `},afterRender(){const t=document.getElementById("logoutBtn");t&&t.addEventListener("click",()=>{sessionStorage.removeItem("currentAdmin"),R.redirect("/dashboard/login")})}};function vn({numbers:t,cardName:n,icon:r}){return`
      <div class="card">
        <div>
          <div class="numbers fs-3">${t}</div>
          <div class="cardName">${n}</div>
        </div>
        <div class="iconBx">
          <ion-icon name="${r}"></ion-icon>
        </div>
      </div>
    `}function Ld(){return`
                <div class="recentOrders">
                    <div class="cardHeader">
                        <h2>Recent Orders</h2>
                        <a href="#" class="btn">View All</a>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span class="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span class="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span class="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span class="status inProgress">In Progress</span></td>
                            </tr>

                            <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span class="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span class="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span class="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span class="status inProgress">In Progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    `}const Ei={async render(){try{const n=(await Is()).data.users;if(!Array.isArray(n)||n.length===0)throw new Error("Failed to fetch users or empty user list.");return`
        <div class="recentCustomers">
          <div class="cardHeader">
            <h2>Recent Customers</h2>
          </div>
          <table>
            ${n.slice(0,5).map((a,c)=>`
          <tr>
            <td>
              <h4>${a.username} <br> <span>${a.nomor_telepon}</span></h4>
            </td>
          </tr>
        `).join("")}
          </table>
        </div>
      `}catch(t){return console.error("Failed to fetch and display recent customers:",t),"<p>Failed to load recent customers. Please try again later.</p>"}},async afterRender(){}},Wt=()=>{const t=document.querySelectorAll(".navigation li");function n(){t.forEach(c=>{c.classList.remove("hovered")}),this.classList.add("hovered")}t.forEach(c=>c.addEventListener("mouseover",n));const r=document.querySelector(".toggle"),l=document.querySelector(".navigation"),a=document.querySelector(".main");r&&l&&a?r.onclick=()=>{l.classList.toggle("active"),a.classList.toggle("active")}:console.error("Toggle, navigation, or main elements not found.")},Td={async render(){return`
      <div class="container-dashboard ms-0">
        ${await kt.render()}
        <div class="main">
          <div class="topbar">
            <div class="toggle">
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            <div class="search">
              <label>
                <input type="text" placeholder="Search here">
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>
          </div>
          <div class="cardBox">
            ${vn({numbers:"1,504",cardName:"Views",icon:"eye-outline"})}
            ${vn({numbers:"80",cardName:"Penjualan",icon:"cart-outline"})}
            ${vn({numbers:"284",cardName:"Comments",icon:"chatbubbles-outline"})}
            ${vn({numbers:"Rp 240.000",cardName:"Pemasukan",icon:"cash-outline"})}
          </div>
          <div class="details">
            ${Ld()}
            ${await Ei.render()}
          </div>
        </div>
      </div>
    `},async afterRender(){Wt(),await kt.afterRender(),await Ei.afterRender()}},xi={async render(){try{return`
        <div class="container mt-5">
          <h2>Tambah Produk</h2>
          <form id="addProdukForm" enctype="multipart/form-data">
            <div class="mb-3">
              <label for="nama" class="form-label">Nama:</label>
              <input type="text" class="form-control" id="nama" name="nama" required>
            </div>
            <div class="mb-3">
              <label for="deskripsi" class="form-label">Deskripsi:</label>
              <textarea class="form-control" id="deskripsi" name="deskripsi" required></textarea>
            </div>
            <div class="mb-3">
              <label for="harga" class="form-label">Harga:</label>
              <input type="number" class="form-control" id="harga" name="harga" required>
            </div>
            <div class="mb-3">
              <label for="image" class="form-label">Image:</label>
              <input type="file" class="form-control" id="image" name="image" accept="image/*" required>
            </div>
            <div class="mb-3">
              <label for="kuantitas" class="form-label">Kuantitas:</label>
              <input type="number" class="form-control" id="kuantitas" name="kuantitas" required>
            </div>
            <div class="mb-3">
              <label for="id_kategori" class="form-label">Kategori:</label>
              <select class="form-select" id="id_kategori" name="id_kategori" required>
                <option value="">Pilih Kategori</option>
                ${(await rt()).map(r=>`<option value="${r.id_kategori}">${r.nama_kategori}</option>`).join("")}
              </select>
            </div>
            <div class="mb-3">
              <label for="rating" class="form-label">Rating:</label>
              <input type="number" class="form-control" id="rating" name="rating" required>
            </div>
            <button type="submit" class="btn btn-success mb-4">Tambah Produk</button>
          </form>
        </div>
      `}catch(t){console.error("Failed to fetch categories:",t),alert("Gagal mengambil kategori. Silakan coba lagi.")}},async afterRender(){const t=document.getElementById("addProdukForm");t.addEventListener("submit",async n=>{n.preventDefault();const r=new FormData(t);try{const l=await Al(r);document.getElementById("nama").value="",document.getElementById("deskripsi").value="",document.getElementById("harga").value="",document.getElementById("image").value="",document.getElementById("kuantitas").value="",document.getElementById("id_kategori").value="",document.getElementById("rating").value="",alert("Produk berhasil ditambahkan!")}catch(l){console.error("Gagal menambahkan produk:",l.message),alert("Gagal menambahkan produk. Silakan coba lagi.")}})}},Pd={async render(){const t=await xi.render();return`
        <div class="container-dashboard ms-0">
            ${await kt.render()}
            <div class="main">
                <div class="topbar">
                    <div class="toggle">
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>
                    <div class="search">
                        <label>
                            <input type="text" placeholder="Search here">
                            <ion-icon name="search-outline"></ion-icon>
                        </label>
                    </div>
                    <div class="user">
                        <img src="../images/admin/customer01.jpg" alt="">
                    </div>
            </div>
            ${t}
        </div>
        `},async afterRender(){Wt(),await xi.afterRender()}},ks={async render(){return`
      <div class="container mt-5">
        <h2>List Kategori</h2>
        <ul class="list-group mb-5" id="categoryList">
          <!-- Item list kategori akan diisi melalui JavaScript -->
        </ul>
      </div>
    `},async afterRender(){try{const t=await rt(),n=document.getElementById("categoryList");t.forEach(r=>{const l=document.createElement("li");l.className="list-group-item",l.textContent=r.nama_kategori,n.appendChild(l)})}catch(t){console.error("Failed to fetch categories:",t),alert("Gagal mengambil kategori. Silakan coba lagi.")}},addCategoryToList(t){const n=document.getElementById("categoryList"),r=document.createElement("li");r.className="list-group-item",r.textContent=t.nama_kategori,n.appendChild(r)}},Ai={async render(){return`
      <div class="container mt-5" id="kategori-page">
        <h2>Tambah Kategori</h2>
        <form id="addKategoriForm">
          <div class="mb-3">
            <label for="namaKategori" class="form-label">Nama Kategori:</label>
            <input type="text" class="form-control" id="namaKategori" required>
          </div>
          <button type="submit" class="btn btn-primary">Tambah Kategori</button>
        </form>
      </div>
    `},async afterRender(){const t=document.querySelector("#addKategoriForm");t?t.addEventListener("submit",async n=>{n.preventDefault();const l={nama_kategori:document.getElementById("namaKategori").value};try{const a=await Ll(l);document.getElementById("namaKategori").value="",ks.addCategoryToList(l)}catch(a){console.error("Failed to add category:",a),alert("Gagal menambahkan kategori")}}):console.error("Form not found in DOM")}},Od={async render(){const t=await Ai.render(),n=await ks.render();return`
      <div class="container-dashboard ms-0">
        ${await kt.render()}
        <div class="main">
          <div class="topbar">
            <div class="toggle">
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            <div class="search">
              <label>
                <input type="text" placeholder="Search here">
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>
            <div class="user">
              <img src="../images/admin/customer01.jpg" alt="">
            </div>
          </div>
          ${t}
          ${n}
        </div>
      </div>
    `},async afterRender(){Wt(),await Ai.afterRender(),await ks.afterRender()}},Ii={async render(t){const n=t.map((a,c)=>`
      <tr>
        <td>${c+1}</td>
        <td>${a.nama}</td>
        <td>${a.deskripsi}</td>
        <td>${a.harga}</td>
        <td>${a.id_kategori}</td>
        <td>${a.kuantitas}</td>
        <td><img src="${a.imageUrl}" alt="${a.nama}" style="width: 100px;"></td>
        <td>${a.rating}</td>
        <td>
          <div class="d-flex">
            <button class="btn edit-button" data-id="${a.id_produk}" data-bs-toggle="modal" data-bs-target="#editModal"><i class="fa-solid fa-pen-to-square icon"></i></button>
            <button class="btn delete-button" data-id="${a.id_produk}"><i class="fa-solid fa-trash icon"></i></button>
          </div>
        </td>
      </tr>
    `).join(""),l=(await rt()).map(a=>`<option value="${a.id_kategori}">${a.nama_kategori}</option>`).join("");return`
      <div class="container mt-5 mx-2">
        <h2>List Produk</h2>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Deskripsi</th>
                <th>Harga</th>
                <th>Kategori</th>
                <th>Kuantitas</th>
                <th>Image</th>
                <th>Rating</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody id="produkList">
              ${n}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Edit Modal -->
      <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">Edit Produk</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="edit-form" enctype="multipart/form-data">
                <input type="hidden" id="edit-id" name="id"> <!-- Input hidden untuk menyimpan ID produk -->
                <div class="mb-3">
                  <label for="edit-nama" class="form-label">Nama:</label>
                  <input type="text" class="form-control" id="edit-nama" name="nama" required>
                </div>
                <div class="mb-3">
                  <label for="edit-deskripsi" class="form-label">Deskripsi:</label>
                  <textarea class="form-control" id="edit-deskripsi" name="deskripsi" required></textarea>
                </div>
                <div class="mb-3">
                  <label for="edit-harga" class="form-label">Harga:</label>
                  <input type="number" class="form-control" id="edit-harga" name="harga" required>
                </div>
                <div class="mb-3">
                  <label for="edit-image" class="form-label">Gambar:</label>
                  <div class="d-flex gap-3">
                    <img width="50" id="edit-gambar-preview" src="" alt="Preview Gambar" style="max-width: 200px;">
                    <input type="file" class="form-control" id="edit-image" name="image" accept="image/*">
                  </div>
                </div>
                <div class="mb-3">
                  <label for="edit-kuantitas" class="form-label">Kuantitas:</label>
                  <input type="number" class="form-control" id="edit-kuantitas" name="kuantitas" required>
                </div>
                <div class="mb-3">
                  <label for="edit-id_kategori" class="form-label">Kategori:</label>
                  <select class="form-select" id="edit-id_kategori" name="id_kategori" required>
                    <option value="">Pilih Kategori</option>
                    ${l}
                  </select>
                </div>
                <div class="mb-3">
                  <label for="edit-rating" class="form-label">Rating:</label>
                  <input type="number" class="form-control" id="edit-rating" name="rating" required>
                </div>
                <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `},async afterRender(){document.querySelectorAll(".edit-button").forEach(l=>{l.addEventListener("click",async()=>{const a=l.dataset.id;if(!a){console.error("ID Produk tidak terdefinisi"),alert("ID Produk tidak ditemukan. Silakan coba lagi.");return}try{const c=await An(a);if(c.status==="success"){const u=c.data.product,p=`https://serbasayur-id-back-end.up.railway.app/image/${u.image}`;document.getElementById("edit-nama").value=u.nama,document.getElementById("edit-deskripsi").value=u.deskripsi,document.getElementById("edit-harga").value=u.harga,document.getElementById("edit-kuantitas").value=u.kuantitas,document.getElementById("edit-id_kategori").value=u.id_kategori,document.getElementById("edit-rating").value=u.rating;const m=document.getElementById("edit-gambar-preview");m.src=p,document.getElementById("edit-id").value=a}}catch(c){console.error("Gagal memuat detail produk:",c),alert("Gagal memuat detail produk. Silakan coba lagi.")}})}),document.getElementById("edit-form").addEventListener("submit",async l=>{l.preventDefault();const a={nama:document.getElementById("edit-nama").value,deskripsi:document.getElementById("edit-deskripsi").value,harga:document.getElementById("edit-harga").value,kuantitas:document.getElementById("edit-kuantitas").value,id_kategori:document.getElementById("edit-id_kategori").value,rating:document.getElementById("edit-rating").value},c=document.getElementById("edit-image");c.files.length>0&&(a.image=c.files[0]);const u=document.getElementById("edit-id").value;try{await Il(u,a),alert("Produk diperbarui"),location.reload()}catch(p){console.error("Gagal memperbarui produk:",p),alert("Gagal memperbarui produk. Silakan coba lagi.")}}),document.querySelectorAll(".delete-button").forEach(l=>{l.addEventListener("click",async()=>{const a=l.dataset.id;try{(await $l(a)).status==="success"?(alert("Produk dihapus"),location.reload()):alert("Gagal menghapus produk. Silakan coba lagi.")}catch(c){console.error("Gagal menghapus produk:",c),alert("Gagal menghapus produk. Silakan coba lagi.")}})})}},Md={async render(){try{const t=await xn(),n=await Ii.render(t);return`
        <div class="container-dashboard ms-0">
          ${await kt.render()}
          <div class="main">
            <div class="topbar">
              <div class="toggle">
                <ion-icon name="menu-outline"></ion-icon>
              </div>
              <div class="search">
                <label>
                  <input type="text" placeholder="Search here">
                  <ion-icon name="search-outline"></ion-icon>
                </label>
              </div>
              <div class="user">
                <img src="../images/admin/customer01.jpg" alt="">
              </div>
            </div>
            <div class="container w-100">
              ${n}
            </div>
          </div>
        </div>
      `}catch(t){return console.error("Failed to render ListProdukPage:",t),"<p>Failed to load products. Please try again later.</p>"}},async afterRender(){await Ii.afterRender(),Wt()}},Rd={async render(t){try{if(!Array.isArray(t))throw new Error("Expected an array of users");return`
          <div class="container mt-5 mx-2">
            <h2 class="text-center">List Customers</h2>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Alamat</th>
                    <th>Telepon</th>
                  </tr>
                </thead>
                <tbody id="userList">
                  ${t.map((r,l)=>`
            <tr>
              <td>${l+1}</td>
              <td>${r.username}</td>
              <td>${r.email}</td>
              <td>${r.alamat}</td>
              <td>${r.nomor_telepon}</td>
            </tr>
          `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `}catch(n){return console.error("Error rendering user list:",n),"<p>Failed to render user list. Please try again later.</p>"}}},Dd={async render(){try{const t=await Is();if(!t||!t.status==="success")throw new Error("Failed to fetch users");const n=t.data&&Array.isArray(t.data.users)?t.data.users:[];console.log("Users:",n);const r=await Rd.render(n);return`
        <div class="container-dashboard ms-0">
          ${await kt.render()}
          <div class="main">
            <div class="topbar">
              <div class="toggle">
                <ion-icon name="menu-outline"></ion-icon>
              </div>
              <div class="search">
                <label>
                  <input type="text" placeholder="Search here">
                  <ion-icon name="search-outline"></ion-icon>
                </label>
              </div>
              <div class="user">
                <img src="../images/admin/customer01.jpg" alt="">
              </div>
            </div>
            <div class="container w-100">
            ${r}
            </div>
          </div>
        </div>
      `}catch(t){return console.error("Failed to render CustomerPage:",t),"<p>Failed to load customers. Please try again later.</p>"}},afterRender:()=>{Wt()}},Wi="https://serbasayur-id-back-end.up.railway.app";async function jd(t,n){try{const r=await fetch(`${Wi}/admins`);if(!r.ok)throw new Error("Failed to fetch users");const a=(await r.json()).data.admins;if(console.log(a),!Array.isArray(a))throw new Error("Expected an array of users");const c=a.find(u=>u.username===t&&u.password===n);if(console.log(a),c)return localStorage.setItem("isLoggedIn",!0),localStorage.setItem("adminId",c.id_admin),c;throw alert("Invalid username or password"),new Error("Invalid username or password")}catch(r){throw console.error("Failed to login:",r.message),new Error("Failed to login")}}async function Nd(t){try{const n=await fetch(`${Wi}/admins`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok)throw new Error("Network response was not ok");return await n.json()}catch(n){throw console.error("There was a problem with the fetch operation:",n),n}}const Bd={async render(){return`
      <div id="register-page">
        <div class="register-container text-center">
          <div class="register-card">
            <img src="../images/logo1.png" alt="Logo" class="logo">
            <form id="register-form">
              <div class="input-group">
                <div class="input-container">
                  <label for="username"></label>
                  <div class=""><i class="fas fa-user"></i></div>
                  <input type="text" id="username" name="username" placeholder="USERNAME" required>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="email"></label>
                  <div class=""><i class="fas fa-envelope"></i></div>
                  <input type="email" id="email" name="email" placeholder="EMAIL" required>
                  <span id="email-error" class="error-message"></span>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="password"></label>
                  <div class=""><i class="fas fa-lock"></i></div>
                  <input type="password" id="password" name="password" placeholder="PASSWORD" required>
                </div>
              </div>
              <button type="submit" class="register-button">Register</button>
            </form>
            <p class="login-link">Have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    `},async afterRender(){const t=document.querySelector("#register-form");t.addEventListener("submit",async n=>{n.preventDefault();const r={username:document.getElementById("username").value,email:document.getElementById("email").value,password:document.getElementById("password").value};try{const l=await Nd(r);t.reset(),R.redirect("/dashboard/login"),alert("Registration successful!")}catch(l){console.error("Error during registration:",l),alert("Registration failed. Please try again later.")}})}},Fd={async render(){return`
      <div id="login-page">
        <div class="login-container text-center">
          <div class="login-card">
            <img src="../images/logo1.png" alt="Logo" class="logo">
            <h5 style="color: #4dc38c">Login Admin</h5>
            <form id="login-form">
              <div class="input-group">
                <div class="input-container">
                  <label for="username"></label>
                  <div class=""><i class="fas fa-user"></i></div>
                  <input type="text" id="username" name="username" placeholder="USERNAME" required>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="password"></label>
                  <div class=""><i class="fas fa-lock"></i></div>
                  <input type="password" id="password" name="password" placeholder="PASSWORD" required>
                </div>
              </div>
              <button type="submit" class="login-button">Login</button>
            </form>
            <p class="register-link">Don't have an account? <a href="dashboard/register">Register</a></p>
          </div>
        </div>
      </div>
    `},async afterRender(){document.getElementById("login-form").addEventListener("submit",async n=>{n.preventDefault();const r=document.getElementById("username").value,l=document.getElementById("password").value;try{const a=await jd(r,l);a&&(sessionStorage.setItem("currentAdmin",JSON.stringify(a)),R.redirect("/dashboard"))}catch(a){console.error("Login gagal:",a.message),alert(a.message)}})}},Hd=document.getElementById("app"),ee=async(t,n)=>{Hd.innerHTML=await t.render(n),t.afterRender&&t.afterRender(n)},zt=async(t,n)=>{if(!JSON.parse(sessionStorage.getItem("currentAdmin"))&&t.pathname!=="/dashboard/login"&&t.pathname!=="/dashboard/register"){R.redirect("/dashboard/login");return}n()};R("/",async()=>{await ee(ms)});R("/login",()=>ee(gc));R("/register",async()=>{await ee(bc)});R("/detail/:id",async t=>{const{id:n}=t.params;await ee(xc,n)});R("/about",()=>ee($d));R("/checkout",()=>ee(Oc));R("/order",()=>ee(Rc));R("/dashboard",zt,()=>ee(Td));R("/profile",()=>ee(Sd));R("/profile/edit-profile",()=>ee(Cd));R("/dashboard/addProduk",zt,()=>ee(Pd));R("/dashboard/Category",zt,()=>ee(Od));R("/dashboard/listProduk",zt,()=>ee(Md));R("/dashboard/customers",zt,()=>ee(Dd));R("/dashboard/register",()=>ee(Bd));R("/dashboard/login",()=>ee(Fd));R("/c/:category",async t=>{const{category:n}=t.params;await ee(jc,{category:n})});R("/search/:query",async t=>{const{query:n}=t.params;await ee(Ad,{query:n})});R();document.addEventListener("DOMContentLoaded",async()=>{const t=document.getElementById("app");t.innerHTML=await ms.render(),ms.afterRender(),R()});
