(function(){const G=document.createElement("link").relList;if(G&&G.supports&&G.supports("modulepreload"))return;for(const R of document.querySelectorAll('link[rel="modulepreload"]'))m(R);new MutationObserver(R=>{for(const K of R)if(K.type==="childList")for(const it of K.addedNodes)it.tagName==="LINK"&&it.rel==="modulepreload"&&m(it)}).observe(document,{childList:!0,subtree:!0});function L(R){const K={};return R.integrity&&(K.integrity=R.integrity),R.referrerPolicy&&(K.referrerPolicy=R.referrerPolicy),R.crossOrigin==="use-credentials"?K.credentials="include":R.crossOrigin==="anonymous"?K.credentials="omit":K.credentials="same-origin",K}function m(R){if(R.ep)return;R.ep=!0;const K=L(R);fetch(R.href,K)}})();var cc={exports:{}},xn={};var vd;function ty(){if(vd)return xn;vd=1;var A=Symbol.for("react.transitional.element"),G=Symbol.for("react.fragment");function L(m,R,K){var it=null;if(K!==void 0&&(it=""+K),R.key!==void 0&&(it=""+R.key),"key"in R){K={};for(var xt in R)xt!=="key"&&(K[xt]=R[xt])}else K=R;return R=K.ref,{$$typeof:A,type:m,key:it,ref:R!==void 0?R:null,props:K}}return xn.Fragment=G,xn.jsx=L,xn.jsxs=L,xn}var bd;function ey(){return bd||(bd=1,cc.exports=ty()),cc.exports}var _=ey(),fc={exports:{}},Q={};var _d;function ay(){if(_d)return Q;_d=1;var A=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),it=Symbol.for("react.context"),xt=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),pt=Symbol.iterator;function Qt(r){return r===null||typeof r!="object"?null:(r=pt&&r[pt]||r["@@iterator"],typeof r=="function"?r:null)}var Lt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,j={};function J(r,x,D){this.props=r,this.context=x,this.refs=j,this.updater=D||Lt}J.prototype.isReactComponent={},J.prototype.setState=function(r,x){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,x,"setState")},J.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function U(){}U.prototype=J.prototype;function zt(r,x,D){this.props=r,this.context=x,this.refs=j,this.updater=D||Lt}var qt=zt.prototype=new U;qt.constructor=zt,N(qt,J.prototype),qt.isPureReactComponent=!0;var te=Array.isArray;function lt(){}var B={H:null,A:null,T:null,S:null},At=Object.prototype.hasOwnProperty;function gt(r,x,D){var M=D.ref;return{$$typeof:A,type:r,key:x,ref:M!==void 0?M:null,props:D}}function Ce(r,x){return gt(r.type,x,r.props)}function oe(r){return typeof r=="object"&&r!==null&&r.$$typeof===A}function Vt(r){var x={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(D){return x[D]})}var Aa=/\/+/g;function we(r,x){return typeof r=="object"&&r!==null&&r.key!=null?Vt(""+r.key):x.toString(36)}function xe(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(lt,lt):(r.status="pending",r.then(function(x){r.status==="pending"&&(r.status="fulfilled",r.value=x)},function(x){r.status==="pending"&&(r.status="rejected",r.reason=x)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function v(r,x,D,M,V){var k=typeof r;(k==="undefined"||k==="boolean")&&(r=null);var ut=!1;if(r===null)ut=!0;else switch(k){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(r.$$typeof){case A:case G:ut=!0;break;case P:return ut=r._init,v(ut(r._payload),x,D,M,V)}}if(ut)return V=V(r),ut=M===""?"."+we(r,0):M,te(V)?(D="",ut!=null&&(D=ut.replace(Aa,"$&/")+"/"),v(V,x,D,"",function(Ml){return Ml})):V!=null&&(oe(V)&&(V=Ce(V,D+(V.key==null||r&&r.key===V.key?"":(""+V.key).replace(Aa,"$&/")+"/")+ut)),x.push(V)),1;ut=0;var Zt=M===""?".":M+":";if(te(r))for(var Tt=0;Tt<r.length;Tt++)M=r[Tt],k=Zt+we(M,Tt),ut+=v(M,x,D,k,V);else if(Tt=Qt(r),typeof Tt=="function")for(r=Tt.call(r),Tt=0;!(M=r.next()).done;)M=M.value,k=Zt+we(M,Tt++),ut+=v(M,x,D,k,V);else if(k==="object"){if(typeof r.then=="function")return v(xe(r),x,D,M,V);throw x=String(r),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return ut}function T(r,x,D){if(r==null)return r;var M=[],V=0;return v(r,M,"","",function(k){return x.call(D,k,V++)}),M}function Y(r){if(r._status===-1){var x=r._result;x=x(),x.then(function(D){(r._status===0||r._status===-1)&&(r._status=1,r._result=D)},function(D){(r._status===0||r._status===-1)&&(r._status=2,r._result=D)}),r._status===-1&&(r._status=0,r._result=x)}if(r._status===1)return r._result.default;throw r._result}var ft=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},mt={map:T,forEach:function(r,x,D){T(r,function(){x.apply(this,arguments)},D)},count:function(r){var x=0;return T(r,function(){x++}),x},toArray:function(r){return T(r,function(x){return x})||[]},only:function(r){if(!oe(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return Q.Activity=q,Q.Children=mt,Q.Component=J,Q.Fragment=L,Q.Profiler=R,Q.PureComponent=zt,Q.StrictMode=m,Q.Suspense=O,Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,Q.__COMPILER_RUNTIME={__proto__:null,c:function(r){return B.H.useMemoCache(r)}},Q.cache=function(r){return function(){return r.apply(null,arguments)}},Q.cacheSignal=function(){return null},Q.cloneElement=function(r,x,D){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var M=N({},r.props),V=r.key;if(x!=null)for(k in x.key!==void 0&&(V=""+x.key),x)!At.call(x,k)||k==="key"||k==="__self"||k==="__source"||k==="ref"&&x.ref===void 0||(M[k]=x[k]);var k=arguments.length-2;if(k===1)M.children=D;else if(1<k){for(var ut=Array(k),Zt=0;Zt<k;Zt++)ut[Zt]=arguments[Zt+2];M.children=ut}return gt(r.type,V,M)},Q.createContext=function(r){return r={$$typeof:it,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:K,_context:r},r},Q.createElement=function(r,x,D){var M,V={},k=null;if(x!=null)for(M in x.key!==void 0&&(k=""+x.key),x)At.call(x,M)&&M!=="key"&&M!=="__self"&&M!=="__source"&&(V[M]=x[M]);var ut=arguments.length-2;if(ut===1)V.children=D;else if(1<ut){for(var Zt=Array(ut),Tt=0;Tt<ut;Tt++)Zt[Tt]=arguments[Tt+2];V.children=Zt}if(r&&r.defaultProps)for(M in ut=r.defaultProps,ut)V[M]===void 0&&(V[M]=ut[M]);return gt(r,k,V)},Q.createRef=function(){return{current:null}},Q.forwardRef=function(r){return{$$typeof:xt,render:r}},Q.isValidElement=oe,Q.lazy=function(r){return{$$typeof:P,_payload:{_status:-1,_result:r},_init:Y}},Q.memo=function(r,x){return{$$typeof:z,type:r,compare:x===void 0?null:x}},Q.startTransition=function(r){var x=B.T,D={};B.T=D;try{var M=r(),V=B.S;V!==null&&V(D,M),typeof M=="object"&&M!==null&&typeof M.then=="function"&&M.then(lt,ft)}catch(k){ft(k)}finally{x!==null&&D.types!==null&&(x.types=D.types),B.T=x}},Q.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},Q.use=function(r){return B.H.use(r)},Q.useActionState=function(r,x,D){return B.H.useActionState(r,x,D)},Q.useCallback=function(r,x){return B.H.useCallback(r,x)},Q.useContext=function(r){return B.H.useContext(r)},Q.useDebugValue=function(){},Q.useDeferredValue=function(r,x){return B.H.useDeferredValue(r,x)},Q.useEffect=function(r,x){return B.H.useEffect(r,x)},Q.useEffectEvent=function(r){return B.H.useEffectEvent(r)},Q.useId=function(){return B.H.useId()},Q.useImperativeHandle=function(r,x,D){return B.H.useImperativeHandle(r,x,D)},Q.useInsertionEffect=function(r,x){return B.H.useInsertionEffect(r,x)},Q.useLayoutEffect=function(r,x){return B.H.useLayoutEffect(r,x)},Q.useMemo=function(r,x){return B.H.useMemo(r,x)},Q.useOptimistic=function(r,x){return B.H.useOptimistic(r,x)},Q.useReducer=function(r,x,D){return B.H.useReducer(r,x,D)},Q.useRef=function(r){return B.H.useRef(r)},Q.useState=function(r){return B.H.useState(r)},Q.useSyncExternalStore=function(r,x,D){return B.H.useSyncExternalStore(r,x,D)},Q.useTransition=function(){return B.H.useTransition()},Q.version="19.2.4",Q}var Sd;function mc(){return Sd||(Sd=1,fc.exports=ay()),fc.exports}var Ee=mc(),rc={exports:{}},zn={},oc={exports:{}},dc={};var xd;function ly(){return xd||(xd=1,(function(A){function G(v,T){var Y=v.length;v.push(T);t:for(;0<Y;){var ft=Y-1>>>1,mt=v[ft];if(0<R(mt,T))v[ft]=T,v[Y]=mt,Y=ft;else break t}}function L(v){return v.length===0?null:v[0]}function m(v){if(v.length===0)return null;var T=v[0],Y=v.pop();if(Y!==T){v[0]=Y;t:for(var ft=0,mt=v.length,r=mt>>>1;ft<r;){var x=2*(ft+1)-1,D=v[x],M=x+1,V=v[M];if(0>R(D,Y))M<mt&&0>R(V,D)?(v[ft]=V,v[M]=Y,ft=M):(v[ft]=D,v[x]=Y,ft=x);else if(M<mt&&0>R(V,Y))v[ft]=V,v[M]=Y,ft=M;else break t}}return T}function R(v,T){var Y=v.sortIndex-T.sortIndex;return Y!==0?Y:v.id-T.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var K=performance;A.unstable_now=function(){return K.now()}}else{var it=Date,xt=it.now();A.unstable_now=function(){return it.now()-xt}}var O=[],z=[],P=1,q=null,pt=3,Qt=!1,Lt=!1,N=!1,j=!1,J=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,zt=typeof setImmediate<"u"?setImmediate:null;function qt(v){for(var T=L(z);T!==null;){if(T.callback===null)m(z);else if(T.startTime<=v)m(z),T.sortIndex=T.expirationTime,G(O,T);else break;T=L(z)}}function te(v){if(N=!1,qt(v),!Lt)if(L(O)!==null)Lt=!0,lt||(lt=!0,Vt());else{var T=L(z);T!==null&&xe(te,T.startTime-v)}}var lt=!1,B=-1,At=5,gt=-1;function Ce(){return j?!0:!(A.unstable_now()-gt<At)}function oe(){if(j=!1,lt){var v=A.unstable_now();gt=v;var T=!0;try{t:{Lt=!1,N&&(N=!1,U(B),B=-1),Qt=!0;var Y=pt;try{e:{for(qt(v),q=L(O);q!==null&&!(q.expirationTime>v&&Ce());){var ft=q.callback;if(typeof ft=="function"){q.callback=null,pt=q.priorityLevel;var mt=ft(q.expirationTime<=v);if(v=A.unstable_now(),typeof mt=="function"){q.callback=mt,qt(v),T=!0;break e}q===L(O)&&m(O),qt(v)}else m(O);q=L(O)}if(q!==null)T=!0;else{var r=L(z);r!==null&&xe(te,r.startTime-v),T=!1}}break t}finally{q=null,pt=Y,Qt=!1}T=void 0}}finally{T?Vt():lt=!1}}}var Vt;if(typeof zt=="function")Vt=function(){zt(oe)};else if(typeof MessageChannel<"u"){var Aa=new MessageChannel,we=Aa.port2;Aa.port1.onmessage=oe,Vt=function(){we.postMessage(null)}}else Vt=function(){J(oe,0)};function xe(v,T){B=J(function(){v(A.unstable_now())},T)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(v){v.callback=null},A.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):At=0<v?Math.floor(1e3/v):5},A.unstable_getCurrentPriorityLevel=function(){return pt},A.unstable_next=function(v){switch(pt){case 1:case 2:case 3:var T=3;break;default:T=pt}var Y=pt;pt=T;try{return v()}finally{pt=Y}},A.unstable_requestPaint=function(){j=!0},A.unstable_runWithPriority=function(v,T){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var Y=pt;pt=v;try{return T()}finally{pt=Y}},A.unstable_scheduleCallback=function(v,T,Y){var ft=A.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ft+Y:ft):Y=ft,v){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=Y+mt,v={id:P++,callback:T,priorityLevel:v,startTime:Y,expirationTime:mt,sortIndex:-1},Y>ft?(v.sortIndex=Y,G(z,v),L(O)===null&&v===L(z)&&(N?(U(B),B=-1):N=!0,xe(te,Y-ft))):(v.sortIndex=mt,G(O,v),Lt||Qt||(Lt=!0,lt||(lt=!0,Vt()))),v},A.unstable_shouldYield=Ce,A.unstable_wrapCallback=function(v){var T=pt;return function(){var Y=pt;pt=T;try{return v.apply(this,arguments)}finally{pt=Y}}}})(dc)),dc}var zd;function ny(){return zd||(zd=1,oc.exports=ly()),oc.exports}var pc={exports:{}},Xt={};var Ad;function iy(){if(Ad)return Xt;Ad=1;var A=mc();function G(O){var z="https://react.dev/errors/"+O;if(1<arguments.length){z+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)z+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+O+"; visit "+z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function L(){}var m={d:{f:L,r:function(){throw Error(G(522))},D:L,C:L,L,m:L,X:L,S:L,M:L},p:0,findDOMNode:null},R=Symbol.for("react.portal");function K(O,z,P){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:q==null?null:""+q,children:O,containerInfo:z,implementation:P}}var it=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function xt(O,z){if(O==="font")return"";if(typeof z=="string")return z==="use-credentials"?z:""}return Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,Xt.createPortal=function(O,z){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z||z.nodeType!==1&&z.nodeType!==9&&z.nodeType!==11)throw Error(G(299));return K(O,z,null,P)},Xt.flushSync=function(O){var z=it.T,P=m.p;try{if(it.T=null,m.p=2,O)return O()}finally{it.T=z,m.p=P,m.d.f()}},Xt.preconnect=function(O,z){typeof O=="string"&&(z?(z=z.crossOrigin,z=typeof z=="string"?z==="use-credentials"?z:"":void 0):z=null,m.d.C(O,z))},Xt.prefetchDNS=function(O){typeof O=="string"&&m.d.D(O)},Xt.preinit=function(O,z){if(typeof O=="string"&&z&&typeof z.as=="string"){var P=z.as,q=xt(P,z.crossOrigin),pt=typeof z.integrity=="string"?z.integrity:void 0,Qt=typeof z.fetchPriority=="string"?z.fetchPriority:void 0;P==="style"?m.d.S(O,typeof z.precedence=="string"?z.precedence:void 0,{crossOrigin:q,integrity:pt,fetchPriority:Qt}):P==="script"&&m.d.X(O,{crossOrigin:q,integrity:pt,fetchPriority:Qt,nonce:typeof z.nonce=="string"?z.nonce:void 0})}},Xt.preinitModule=function(O,z){if(typeof O=="string")if(typeof z=="object"&&z!==null){if(z.as==null||z.as==="script"){var P=xt(z.as,z.crossOrigin);m.d.M(O,{crossOrigin:P,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0})}}else z==null&&m.d.M(O)},Xt.preload=function(O,z){if(typeof O=="string"&&typeof z=="object"&&z!==null&&typeof z.as=="string"){var P=z.as,q=xt(P,z.crossOrigin);m.d.L(O,P,{crossOrigin:q,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0,type:typeof z.type=="string"?z.type:void 0,fetchPriority:typeof z.fetchPriority=="string"?z.fetchPriority:void 0,referrerPolicy:typeof z.referrerPolicy=="string"?z.referrerPolicy:void 0,imageSrcSet:typeof z.imageSrcSet=="string"?z.imageSrcSet:void 0,imageSizes:typeof z.imageSizes=="string"?z.imageSizes:void 0,media:typeof z.media=="string"?z.media:void 0})}},Xt.preloadModule=function(O,z){if(typeof O=="string")if(z){var P=xt(z.as,z.crossOrigin);m.d.m(O,{as:typeof z.as=="string"&&z.as!=="script"?z.as:void 0,crossOrigin:P,integrity:typeof z.integrity=="string"?z.integrity:void 0})}else m.d.m(O)},Xt.requestFormReset=function(O){m.d.r(O)},Xt.unstable_batchedUpdates=function(O,z){return O(z)},Xt.useFormState=function(O,z,P){return it.H.useFormState(O,z,P)},Xt.useFormStatus=function(){return it.H.useHostTransitionStatus()},Xt.version="19.2.4",Xt}var Td;function uy(){if(Td)return pc.exports;Td=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(G){console.error(G)}}return A(),pc.exports=iy(),pc.exports}var Dd;function sy(){if(Dd)return zn;Dd=1;var A=ny(),G=mc(),L=uy();function m(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function K(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function it(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xt(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(K(t)!==t)throw Error(m(188))}function z(t){var e=t.alternate;if(!e){if(e=K(t),e===null)throw Error(m(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return O(n),t;if(i===l)return O(n),e;i=i.sibling}throw Error(m(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,l=i;break}if(s===l){u=!0,l=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,l=n;break}if(s===l){u=!0,l=i,a=n;break}s=s.sibling}if(!u)throw Error(m(189))}}if(a.alternate!==l)throw Error(m(190))}if(a.tag!==3)throw Error(m(188));return a.stateNode.current===a?t:e}function P(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=P(t),e!==null)return e;t=t.sibling}return null}var q=Object.assign,pt=Symbol.for("react.element"),Qt=Symbol.for("react.transitional.element"),Lt=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),zt=Symbol.for("react.context"),qt=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),gt=Symbol.for("react.activity"),Ce=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function Vt(t){return t===null||typeof t!="object"?null:(t=oe&&t[oe]||t["@@iterator"],typeof t=="function"?t:null)}var Aa=Symbol.for("react.client.reference");function we(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Aa?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case J:return"Profiler";case j:return"StrictMode";case te:return"Suspense";case lt:return"SuspenseList";case gt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Lt:return"Portal";case zt:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case qt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return e=t.displayName||null,e!==null?e:we(t.type)||"Memo";case At:e=t._payload,t=t._init;try{return we(t(e))}catch{}}return null}var xe=Array.isArray,v=G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=L.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ft=[],mt=-1;function r(t){return{current:t}}function x(t){0>mt||(t.current=ft[mt],ft[mt]=null,mt--)}function D(t,e){mt++,ft[mt]=t.current,t.current=e}var M=r(null),V=r(null),k=r(null),ut=r(null);function Zt(t,e){switch(D(k,e),D(V,t),D(M,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Qo(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Qo(e),t=Lo(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}x(M),D(M,t)}function Tt(){x(M),x(V),x(k)}function Ml(t){t.memoizedState!==null&&D(ut,t);var e=M.current,a=Lo(e,t.type);e!==a&&(D(V,t),D(M,a))}function Tn(t){V.current===t&&(x(M),x(V)),ut.current===t&&(x(ut),vn._currentValue=Y)}var Xi,yc;function Ta(t){if(Xi===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Xi=e&&e[1]||"",yc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+t+yc}var Zi=!1;function Ki(t,e){if(!t||Zi)return"";Zi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(g){var y=g}Reflect.construct(t,[],S)}else{try{S.call()}catch(g){y=g}t.call(S.prototype)}}else{try{throw Error()}catch(g){y=g}(S=t())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(g){if(g&&y&&typeof g.stack=="string")return[g.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var c=u.split(`
`),p=s.split(`
`);for(n=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(l===c.length||n===p.length)for(l=c.length-1,n=p.length-1;1<=l&&0<=n&&c[l]!==p[n];)n--;for(;1<=l&&0<=n;l--,n--)if(c[l]!==p[n]){if(l!==1||n!==1)do if(l--,n--,0>n||c[l]!==p[n]){var h=`
`+c[l].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=l&&0<=n);break}}}finally{Zi=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ta(a):""}function Nd(t,e){switch(t.tag){case 26:case 27:case 5:return Ta(t.type);case 16:return Ta("Lazy");case 13:return t.child!==e&&e!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return Ki(t.type,!1);case 11:return Ki(t.type.render,!1);case 1:return Ki(t.type,!0);case 31:return Ta("Activity");default:return""}}function gc(t){try{var e="",a=null;do e+=Nd(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ji=Object.prototype.hasOwnProperty,ki=A.unstable_scheduleCallback,Fi=A.unstable_cancelCallback,Rd=A.unstable_shouldYield,Ud=A.unstable_requestPaint,ee=A.unstable_now,wd=A.unstable_getCurrentPriorityLevel,hc=A.unstable_ImmediatePriority,vc=A.unstable_UserBlockingPriority,Dn=A.unstable_NormalPriority,qd=A.unstable_LowPriority,bc=A.unstable_IdlePriority,jd=A.log,Hd=A.unstable_setDisableYieldValue,Cl=null,ae=null;function Pe(t){if(typeof jd=="function"&&Hd(t),ae&&typeof ae.setStrictMode=="function")try{ae.setStrictMode(Cl,t)}catch{}}var le=Math.clz32?Math.clz32:Gd,Bd=Math.log,Yd=Math.LN2;function Gd(t){return t>>>=0,t===0?32:31-(Bd(t)/Yd|0)|0}var En=256,Mn=262144,Cn=4194304;function Da(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function On(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Da(l):(u&=s,u!==0?n=Da(u):a||(a=s&~t,a!==0&&(n=Da(a))))):(s=l&~i,s!==0?n=Da(s):u!==0?n=Da(u):a||(a=l&~t,a!==0&&(n=Da(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function Ol(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Qd(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _c(){var t=Cn;return Cn<<=1,(Cn&62914560)===0&&(Cn=4194304),t}function Wi(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Nl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ld(t,e,a,l,n,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var s=t.entanglements,c=t.expirationTimes,p=t.hiddenUpdates;for(a=u&~a;0<a;){var h=31-le(a),S=1<<h;s[h]=0,c[h]=-1;var y=p[h];if(y!==null)for(p[h]=null,h=0;h<y.length;h++){var g=y[h];g!==null&&(g.lane&=-536870913)}a&=~S}l!==0&&Sc(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Sc(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-le(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function xc(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-le(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function zc(t,e){var a=e&-e;return a=(a&42)!==0?1:$i(a),(a&(t.suspendedLanes|e))!==0?0:a}function $i(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ii(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ac(){var t=T.p;return t!==0?t:(t=window.event,t===void 0?32:od(t.type))}function Tc(t,e){var a=T.p;try{return T.p=t,e()}finally{T.p=a}}var ta=Math.random().toString(36).slice(2),jt="__reactFiber$"+ta,Jt="__reactProps$"+ta,Xa="__reactContainer$"+ta,Pi="__reactEvents$"+ta,Vd="__reactListeners$"+ta,Xd="__reactHandles$"+ta,Dc="__reactResources$"+ta,Rl="__reactMarker$"+ta;function tu(t){delete t[jt],delete t[Jt],delete t[Pi],delete t[Vd],delete t[Xd]}function Za(t){var e=t[jt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Xa]||a[jt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Fo(t);t!==null;){if(a=t[jt])return a;t=Fo(t)}return e}t=a,a=t.parentNode}return null}function Ka(t){if(t=t[jt]||t[Xa]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ul(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(m(33))}function Ja(t){var e=t[Dc];return e||(e=t[Dc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ut(t){t[Rl]=!0}var Ec=new Set,Mc={};function Ea(t,e){ka(t,e),ka(t+"Capture",e)}function ka(t,e){for(Mc[t]=e,t=0;t<e.length;t++)Ec.add(e[t])}var Zd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cc={},Oc={};function Kd(t){return Ji.call(Oc,t)?!0:Ji.call(Cc,t)?!1:Zd.test(t)?Oc[t]=!0:(Cc[t]=!0,!1)}function Nn(t,e,a){if(Kd(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Rn(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function qe(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function de(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jd(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eu(t){if(!t._valueTracker){var e=Nc(t)?"checked":"value";t._valueTracker=Jd(t,e,""+t[e])}}function Rc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=Nc(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function Un(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var kd=/[\n"\\]/g;function pe(t){return t.replace(kd,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function au(t,e,a,l,n,i,u,s){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+de(e)):t.value!==""+de(e)&&(t.value=""+de(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?lu(t,u,de(e)):a!=null?lu(t,u,de(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+de(s):t.removeAttribute("name")}function Uc(t,e,a,l,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){eu(t);return}a=a!=null?""+de(a):"",e=e!=null?""+de(e):a,s||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=s?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),eu(t)}function lu(t,e,a){e==="number"&&Un(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Fa(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+de(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function wc(t,e,a){if(e!=null&&(e=""+de(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+de(a):""}function qc(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(m(92));if(xe(l)){if(1<l.length)throw Error(m(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=de(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),eu(t)}function Wa(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Fd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jc(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||Fd.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Hc(t,e,a){if(e!=null&&typeof e!="object")throw Error(m(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&jc(t,n,l)}else for(var i in e)e.hasOwnProperty(i)&&jc(t,i,e[i])}function nu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$d=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wn(t){return $d.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function je(){}var iu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $a=null,Ia=null;function Bc(t){var e=Ka(t);if(e&&(t=e.stateNode)){var a=t[Jt]||null;t:switch(t=e.stateNode,e.type){case"input":if(au(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pe(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[Jt]||null;if(!n)throw Error(m(90));au(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&Rc(l)}break t;case"textarea":wc(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Fa(t,!!a.multiple,e,!1)}}}var su=!1;function Yc(t,e,a){if(su)return t(e,a);su=!0;try{var l=t(e);return l}finally{if(su=!1,($a!==null||Ia!==null)&&(Si(),$a&&(e=$a,t=Ia,Ia=$a=null,Bc(e),t)))for(e=0;e<t.length;e++)Bc(t[e])}}function wl(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Jt]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(m(231,e,typeof a));return a}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(He)try{var ql={};Object.defineProperty(ql,"passive",{get:function(){cu=!0}}),window.addEventListener("test",ql,ql),window.removeEventListener("test",ql,ql)}catch{cu=!1}var ea=null,fu=null,qn=null;function Gc(){if(qn)return qn;var t,e=fu,a=e.length,l,n="value"in ea?ea.value:ea.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var u=a-t;for(l=1;l<=u&&e[a-l]===n[i-l];l++);return qn=n.slice(t,1<l?1-l:void 0)}function jn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hn(){return!0}function Qc(){return!1}function kt(t){function e(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(a=t[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hn:Qc,this.isPropagationStopped=Qc,this}return q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),e}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=kt(Ma),jl=q({},Ma,{view:0,detail:0}),Id=kt(jl),ru,ou,Hl,Yn=q({},jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hl&&(Hl&&t.type==="mousemove"?(ru=t.screenX-Hl.screenX,ou=t.screenY-Hl.screenY):ou=ru=0,Hl=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:ou}}),Lc=kt(Yn),Pd=q({},Yn,{dataTransfer:0}),tp=kt(Pd),ep=q({},jl,{relatedTarget:0}),du=kt(ep),ap=q({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),lp=kt(ap),np=q({},Ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ip=kt(np),up=q({},Ma,{data:0}),Vc=kt(up),sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rp(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fp[t])?!!e[t]:!1}function pu(){return rp}var op=q({},jl,{key:function(t){if(t.key){var e=sp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(t){return t.type==="keypress"?jn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dp=kt(op),pp=q({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xc=kt(pp),mp=q({},jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),yp=kt(mp),gp=q({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),hp=kt(gp),vp=q({},Yn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bp=kt(vp),_p=q({},Ma,{newState:0,oldState:0}),Sp=kt(_p),xp=[9,13,27,32],mu=He&&"CompositionEvent"in window,Bl=null;He&&"documentMode"in document&&(Bl=document.documentMode);var zp=He&&"TextEvent"in window&&!Bl,Zc=He&&(!mu||Bl&&8<Bl&&11>=Bl),Kc=" ",Jc=!1;function kc(t,e){switch(t){case"keyup":return xp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pa=!1;function Ap(t,e){switch(t){case"compositionend":return Fc(e);case"keypress":return e.which!==32?null:(Jc=!0,Kc);case"textInput":return t=e.data,t===Kc&&Jc?null:t;default:return null}}function Tp(t,e){if(Pa)return t==="compositionend"||!mu&&kc(t,e)?(t=Gc(),qn=fu=ea=null,Pa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zc&&e.locale!=="ko"?null:e.data;default:return null}}var Dp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Dp[t.type]:e==="textarea"}function $c(t,e,a,l){$a?Ia?Ia.push(l):Ia=[l]:$a=l,e=Mi(e,"onChange"),0<e.length&&(a=new Bn("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Yl=null,Gl=null;function Ep(t){qo(t,0)}function Gn(t){var e=Ul(t);if(Rc(e))return t}function Ic(t,e){if(t==="change")return e}var Pc=!1;if(He){var yu;if(He){var gu="oninput"in document;if(!gu){var tf=document.createElement("div");tf.setAttribute("oninput","return;"),gu=typeof tf.oninput=="function"}yu=gu}else yu=!1;Pc=yu&&(!document.documentMode||9<document.documentMode)}function ef(){Yl&&(Yl.detachEvent("onpropertychange",af),Gl=Yl=null)}function af(t){if(t.propertyName==="value"&&Gn(Gl)){var e=[];$c(e,Gl,t,uu(t)),Yc(Ep,e)}}function Mp(t,e,a){t==="focusin"?(ef(),Yl=e,Gl=a,Yl.attachEvent("onpropertychange",af)):t==="focusout"&&ef()}function Cp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gn(Gl)}function Op(t,e){if(t==="click")return Gn(e)}function Np(t,e){if(t==="input"||t==="change")return Gn(e)}function Rp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ne=typeof Object.is=="function"?Object.is:Rp;function Ql(t,e){if(ne(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Ji.call(e,n)||!ne(t[n],e[n]))return!1}return!0}function lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nf(t,e){var a=lf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=lf(a)}}function uf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Un(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Un(t.document)}return e}function hu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Up=He&&"documentMode"in document&&11>=document.documentMode,tl=null,vu=null,Ll=null,bu=!1;function cf(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||tl==null||tl!==Un(l)||(l=tl,"selectionStart"in l&&hu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ll&&Ql(Ll,l)||(Ll=l,l=Mi(vu,"onSelect"),0<l.length&&(e=new Bn("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=tl)))}function Ca(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var el={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},_u={},ff={};He&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Oa(t){if(_u[t])return _u[t];if(!el[t])return t;var e=el[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in ff)return _u[t]=e[a];return t}var rf=Oa("animationend"),of=Oa("animationiteration"),df=Oa("animationstart"),wp=Oa("transitionrun"),qp=Oa("transitionstart"),jp=Oa("transitioncancel"),pf=Oa("transitionend"),mf=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function ze(t,e){mf.set(t,e),Ea(e,[t])}var Qn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},me=[],al=0,xu=0;function Ln(){for(var t=al,e=xu=al=0;e<t;){var a=me[e];me[e++]=null;var l=me[e];me[e++]=null;var n=me[e];me[e++]=null;var i=me[e];if(me[e++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&yf(a,n,i)}}function Vn(t,e,a,l){me[al++]=t,me[al++]=e,me[al++]=a,me[al++]=l,xu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function zu(t,e,a,l){return Vn(t,e,a,l),Xn(t)}function Na(t,e){return Vn(t,null,null,e),Xn(t)}function yf(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-le(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function Xn(t){if(50<on)throw on=0,Rs=null,Error(m(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ll={};function Hp(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ie(t,e,a,l){return new Hp(t,e,a,l)}function Au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Be(t,e){var a=t.alternate;return a===null?(a=ie(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function gf(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Zn(t,e,a,l,n,i){var u=0;if(l=t,typeof t=="function")Au(t)&&(u=1);else if(typeof t=="string")u=Lm(t,a,M.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case gt:return t=ie(31,a,e,n),t.elementType=gt,t.lanes=i,t;case N:return Ra(a.children,n,i,e);case j:u=8,n|=24;break;case J:return t=ie(12,a,e,n|2),t.elementType=J,t.lanes=i,t;case te:return t=ie(13,a,e,n),t.elementType=te,t.lanes=i,t;case lt:return t=ie(19,a,e,n),t.elementType=lt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zt:u=10;break t;case U:u=9;break t;case qt:u=11;break t;case B:u=14;break t;case At:u=16,l=null;break t}u=29,a=Error(m(130,t===null?"null":typeof t,"")),l=null}return e=ie(u,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function Ra(t,e,a,l){return t=ie(7,t,l,e),t.lanes=a,t}function Tu(t,e,a){return t=ie(6,t,null,e),t.lanes=a,t}function hf(t){var e=ie(18,null,null,0);return e.stateNode=t,e}function Du(t,e,a){return e=ie(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var vf=new WeakMap;function ye(t,e){if(typeof t=="object"&&t!==null){var a=vf.get(t);return a!==void 0?a:(e={value:t,source:e,stack:gc(e)},vf.set(t,e),e)}return{value:t,source:e,stack:gc(e)}}var nl=[],il=0,Kn=null,Vl=0,ge=[],he=0,aa=null,Oe=1,Ne="";function Ye(t,e){nl[il++]=Vl,nl[il++]=Kn,Kn=t,Vl=e}function bf(t,e,a){ge[he++]=Oe,ge[he++]=Ne,ge[he++]=aa,aa=t;var l=Oe;t=Ne;var n=32-le(l)-1;l&=~(1<<n),a+=1;var i=32-le(e)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Oe=1<<32-le(e)+n|a<<n|l,Ne=i+t}else Oe=1<<i|a<<n|l,Ne=t}function Eu(t){t.return!==null&&(Ye(t,1),bf(t,1,0))}function Mu(t){for(;t===Kn;)Kn=nl[--il],nl[il]=null,Vl=nl[--il],nl[il]=null;for(;t===aa;)aa=ge[--he],ge[he]=null,Ne=ge[--he],ge[he]=null,Oe=ge[--he],ge[he]=null}function _f(t,e){ge[he++]=Oe,ge[he++]=Ne,ge[he++]=aa,Oe=e.id,Ne=e.overflow,aa=t}var Ht=null,ht=null,tt=!1,la=null,ve=!1,Cu=Error(m(519));function na(t){var e=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xl(ye(e,t)),Cu}function Sf(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[jt]=t,e[Jt]=l,a){case"dialog":W("cancel",e),W("close",e);break;case"iframe":case"object":case"embed":W("load",e);break;case"video":case"audio":for(a=0;a<pn.length;a++)W(pn[a],e);break;case"source":W("error",e);break;case"img":case"image":case"link":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"input":W("invalid",e),Uc(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":W("invalid",e);break;case"textarea":W("invalid",e),qc(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||Yo(e.textContent,a)?(l.popover!=null&&(W("beforetoggle",e),W("toggle",e)),l.onScroll!=null&&W("scroll",e),l.onScrollEnd!=null&&W("scrollend",e),l.onClick!=null&&(e.onclick=je),e=!0):e=!1,e||na(t,!0)}function xf(t){for(Ht=t.return;Ht;)switch(Ht.tag){case 5:case 31:case 13:ve=!1;return;case 27:case 3:ve=!0;return;default:Ht=Ht.return}}function ul(t){if(t!==Ht)return!1;if(!tt)return xf(t),tt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Js(t.type,t.memoizedProps)),a=!a),a&&ht&&na(t),xf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));ht=ko(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));ht=ko(t)}else e===27?(e=ht,va(t.type)?(t=Is,Is=null,ht=t):ht=e):ht=Ht?_e(t.stateNode.nextSibling):null;return!0}function Ua(){ht=Ht=null,tt=!1}function Ou(){var t=la;return t!==null&&(It===null?It=t:It.push.apply(It,t),la=null),t}function Xl(t){la===null?la=[t]:la.push(t)}var Nu=r(null),wa=null,Ge=null;function ia(t,e,a){D(Nu,e._currentValue),e._currentValue=a}function Qe(t){t._currentValue=Nu.current,x(Nu)}function Ru(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Uu(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=n;for(var c=0;c<e.length;c++)if(s.context===e[c]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Ru(i.return,a,t),l||(u=null);break t}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(m(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Ru(u,a,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function sl(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(m(387));if(u=u.memoizedProps,u!==null){var s=n.type;ne(n.pendingProps.value,u.value)||(t!==null?t.push(s):t=[s])}}else if(n===ut.current){if(u=n.alternate,u===null)throw Error(m(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(vn):t=[vn])}n=n.return}t!==null&&Uu(e,t,a,l),e.flags|=262144}function Jn(t){for(t=t.firstContext;t!==null;){if(!ne(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function qa(t){wa=t,Ge=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Bt(t){return zf(wa,t)}function kn(t,e){return wa===null&&qa(t),zf(t,e)}function zf(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ge===null){if(t===null)throw Error(m(308));Ge=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ge=Ge.next=e;return a}var Bp=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Yp=A.unstable_scheduleCallback,Gp=A.unstable_NormalPriority,Mt={$$typeof:zt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new Bp,data:new Map,refCount:0}}function Zl(t){t.refCount--,t.refCount===0&&Yp(Gp,function(){t.controller.abort()})}var Kl=null,qu=0,cl=0,fl=null;function Qp(t,e){if(Kl===null){var a=Kl=[];qu=0,cl=Bs(),fl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return qu++,e.then(Af,Af),e}function Af(){if(--qu===0&&Kl!==null){fl!==null&&(fl.status="fulfilled");var t=Kl;Kl=null,cl=0,fl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Lp(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Tf=v.S;v.S=function(t,e){co=ee(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Qp(t,e),Tf!==null&&Tf(t,e)};var ja=r(null);function ju(){var t=ja.current;return t!==null?t:yt.pooledCache}function Fn(t,e){e===null?D(ja,ja.current):D(ja,e.pool)}function Df(){var t=ju();return t===null?null:{parent:Mt._currentValue,pool:t}}var rl=Error(m(460)),Hu=Error(m(474)),Wn=Error(m(542)),$n={then:function(){}};function Ef(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mf(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(je,je),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Of(t),t;default:if(typeof e.status=="string")e.then(je,je);else{if(t=yt,t!==null&&100<t.shellSuspendCounter)throw Error(m(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Of(t),t}throw Ba=e,rl}}function Ha(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ba=a,rl):a}}var Ba=null;function Cf(){if(Ba===null)throw Error(m(459));var t=Ba;return Ba=null,t}function Of(t){if(t===rl||t===Wn)throw Error(m(483))}var ol=null,Jl=0;function In(t){var e=Jl;return Jl+=1,ol===null&&(ol=[]),Mf(ol,t,e)}function kl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Pn(t,e){throw e.$$typeof===pt?Error(m(525)):(t=Object.prototype.toString.call(e),Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Nf(t){function e(o,f){if(t){var d=o.deletions;d===null?(o.deletions=[f],o.flags|=16):d.push(f)}}function a(o,f){if(!t)return null;for(;f!==null;)e(o,f),f=f.sibling;return null}function l(o){for(var f=new Map;o!==null;)o.key!==null?f.set(o.key,o):f.set(o.index,o),o=o.sibling;return f}function n(o,f){return o=Be(o,f),o.index=0,o.sibling=null,o}function i(o,f,d){return o.index=d,t?(d=o.alternate,d!==null?(d=d.index,d<f?(o.flags|=67108866,f):d):(o.flags|=67108866,f)):(o.flags|=1048576,f)}function u(o){return t&&o.alternate===null&&(o.flags|=67108866),o}function s(o,f,d,b){return f===null||f.tag!==6?(f=Tu(d,o.mode,b),f.return=o,f):(f=n(f,d),f.return=o,f)}function c(o,f,d,b){var w=d.type;return w===N?h(o,f,d.props.children,b,d.key):f!==null&&(f.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===At&&Ha(w)===f.type)?(f=n(f,d.props),kl(f,d),f.return=o,f):(f=Zn(d.type,d.key,d.props,null,o.mode,b),kl(f,d),f.return=o,f)}function p(o,f,d,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==d.containerInfo||f.stateNode.implementation!==d.implementation?(f=Du(d,o.mode,b),f.return=o,f):(f=n(f,d.children||[]),f.return=o,f)}function h(o,f,d,b,w){return f===null||f.tag!==7?(f=Ra(d,o.mode,b,w),f.return=o,f):(f=n(f,d),f.return=o,f)}function S(o,f,d){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Tu(""+f,o.mode,d),f.return=o,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qt:return d=Zn(f.type,f.key,f.props,null,o.mode,d),kl(d,f),d.return=o,d;case Lt:return f=Du(f,o.mode,d),f.return=o,f;case At:return f=Ha(f),S(o,f,d)}if(xe(f)||Vt(f))return f=Ra(f,o.mode,d,null),f.return=o,f;if(typeof f.then=="function")return S(o,In(f),d);if(f.$$typeof===zt)return S(o,kn(o,f),d);Pn(o,f)}return null}function y(o,f,d,b){var w=f!==null?f.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return w!==null?null:s(o,f,""+d,b);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Qt:return d.key===w?c(o,f,d,b):null;case Lt:return d.key===w?p(o,f,d,b):null;case At:return d=Ha(d),y(o,f,d,b)}if(xe(d)||Vt(d))return w!==null?null:h(o,f,d,b,null);if(typeof d.then=="function")return y(o,f,In(d),b);if(d.$$typeof===zt)return y(o,f,kn(o,d),b);Pn(o,d)}return null}function g(o,f,d,b,w){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return o=o.get(d)||null,s(f,o,""+b,w);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Qt:return o=o.get(b.key===null?d:b.key)||null,c(f,o,b,w);case Lt:return o=o.get(b.key===null?d:b.key)||null,p(f,o,b,w);case At:return b=Ha(b),g(o,f,d,b,w)}if(xe(b)||Vt(b))return o=o.get(d)||null,h(f,o,b,w,null);if(typeof b.then=="function")return g(o,f,d,In(b),w);if(b.$$typeof===zt)return g(o,f,d,kn(f,b),w);Pn(f,b)}return null}function E(o,f,d,b){for(var w=null,et=null,C=f,Z=f=0,I=null;C!==null&&Z<d.length;Z++){C.index>Z?(I=C,C=null):I=C.sibling;var at=y(o,C,d[Z],b);if(at===null){C===null&&(C=I);break}t&&C&&at.alternate===null&&e(o,C),f=i(at,f,Z),et===null?w=at:et.sibling=at,et=at,C=I}if(Z===d.length)return a(o,C),tt&&Ye(o,Z),w;if(C===null){for(;Z<d.length;Z++)C=S(o,d[Z],b),C!==null&&(f=i(C,f,Z),et===null?w=C:et.sibling=C,et=C);return tt&&Ye(o,Z),w}for(C=l(C);Z<d.length;Z++)I=g(C,o,Z,d[Z],b),I!==null&&(t&&I.alternate!==null&&C.delete(I.key===null?Z:I.key),f=i(I,f,Z),et===null?w=I:et.sibling=I,et=I);return t&&C.forEach(function(za){return e(o,za)}),tt&&Ye(o,Z),w}function H(o,f,d,b){if(d==null)throw Error(m(151));for(var w=null,et=null,C=f,Z=f=0,I=null,at=d.next();C!==null&&!at.done;Z++,at=d.next()){C.index>Z?(I=C,C=null):I=C.sibling;var za=y(o,C,at.value,b);if(za===null){C===null&&(C=I);break}t&&C&&za.alternate===null&&e(o,C),f=i(za,f,Z),et===null?w=za:et.sibling=za,et=za,C=I}if(at.done)return a(o,C),tt&&Ye(o,Z),w;if(C===null){for(;!at.done;Z++,at=d.next())at=S(o,at.value,b),at!==null&&(f=i(at,f,Z),et===null?w=at:et.sibling=at,et=at);return tt&&Ye(o,Z),w}for(C=l(C);!at.done;Z++,at=d.next())at=g(C,o,Z,at.value,b),at!==null&&(t&&at.alternate!==null&&C.delete(at.key===null?Z:at.key),f=i(at,f,Z),et===null?w=at:et.sibling=at,et=at);return t&&C.forEach(function(Pm){return e(o,Pm)}),tt&&Ye(o,Z),w}function dt(o,f,d,b){if(typeof d=="object"&&d!==null&&d.type===N&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Qt:t:{for(var w=d.key;f!==null;){if(f.key===w){if(w=d.type,w===N){if(f.tag===7){a(o,f.sibling),b=n(f,d.props.children),b.return=o,o=b;break t}}else if(f.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===At&&Ha(w)===f.type){a(o,f.sibling),b=n(f,d.props),kl(b,d),b.return=o,o=b;break t}a(o,f);break}else e(o,f);f=f.sibling}d.type===N?(b=Ra(d.props.children,o.mode,b,d.key),b.return=o,o=b):(b=Zn(d.type,d.key,d.props,null,o.mode,b),kl(b,d),b.return=o,o=b)}return u(o);case Lt:t:{for(w=d.key;f!==null;){if(f.key===w)if(f.tag===4&&f.stateNode.containerInfo===d.containerInfo&&f.stateNode.implementation===d.implementation){a(o,f.sibling),b=n(f,d.children||[]),b.return=o,o=b;break t}else{a(o,f);break}else e(o,f);f=f.sibling}b=Du(d,o.mode,b),b.return=o,o=b}return u(o);case At:return d=Ha(d),dt(o,f,d,b)}if(xe(d))return E(o,f,d,b);if(Vt(d)){if(w=Vt(d),typeof w!="function")throw Error(m(150));return d=w.call(d),H(o,f,d,b)}if(typeof d.then=="function")return dt(o,f,In(d),b);if(d.$$typeof===zt)return dt(o,f,kn(o,d),b);Pn(o,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,f!==null&&f.tag===6?(a(o,f.sibling),b=n(f,d),b.return=o,o=b):(a(o,f),b=Tu(d,o.mode,b),b.return=o,o=b),u(o)):a(o,f)}return function(o,f,d,b){try{Jl=0;var w=dt(o,f,d,b);return ol=null,w}catch(C){if(C===rl||C===Wn)throw C;var et=ie(29,C,null,o.mode);return et.lanes=b,et.return=o,et}}}var Ya=Nf(!0),Rf=Nf(!1),ua=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function sa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ca(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(nt&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=Xn(t),yf(t,null,a),e}return Vn(t,l,e,a),Xn(t)}function Fl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,xc(t,a)}}function Gu(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Qu=!1;function Wl(){if(Qu){var t=fl;if(t!==null)throw t}}function $l(t,e,a,l){Qu=!1;var n=t.updateQueue;ua=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var c=s,p=c.next;c.next=null,u===null?i=p:u.next=p,u=c;var h=t.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==u&&(s===null?h.firstBaseUpdate=p:s.next=p,h.lastBaseUpdate=c))}if(i!==null){var S=n.baseState;u=0,h=p=c=null,s=i;do{var y=s.lane&-536870913,g=y!==s.lane;if(g?($&y)===y:(l&y)===y){y!==0&&y===cl&&(Qu=!0),h!==null&&(h=h.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var E=t,H=s;y=e;var dt=a;switch(H.tag){case 1:if(E=H.payload,typeof E=="function"){S=E.call(dt,S,y);break t}S=E;break t;case 3:E.flags=E.flags&-65537|128;case 0:if(E=H.payload,y=typeof E=="function"?E.call(dt,S,y):E,y==null)break t;S=q({},S,y);break t;case 2:ua=!0}}y=s.callback,y!==null&&(t.flags|=64,g&&(t.flags|=8192),g=n.callbacks,g===null?n.callbacks=[y]:g.push(y))}else g={lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(p=h=g,c=S):h=h.next=g,u|=y;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;g=s,s=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);h===null&&(c=S),n.baseState=c,n.firstBaseUpdate=p,n.lastBaseUpdate=h,i===null&&(n.shared.lanes=0),pa|=u,t.lanes=u,t.memoizedState=S}}function Uf(t,e){if(typeof t!="function")throw Error(m(191,t));t.call(e)}function wf(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Uf(a[t],e)}var dl=r(null),ti=r(0);function qf(t,e){t=We,D(ti,t),D(dl,e),We=t|e.baseLanes}function Lu(){D(ti,We),D(dl,dl.current)}function Vu(){We=ti.current,x(dl),x(ti)}var ue=r(null),be=null;function fa(t){var e=t.alternate;D(Dt,Dt.current&1),D(ue,t),be===null&&(e===null||dl.current!==null||e.memoizedState!==null)&&(be=t)}function Xu(t){D(Dt,Dt.current),D(ue,t),be===null&&(be=t)}function jf(t){t.tag===22?(D(Dt,Dt.current),D(ue,t),be===null&&(be=t)):ra()}function ra(){D(Dt,Dt.current),D(ue,ue.current)}function se(t){x(ue),be===t&&(be=null),x(Dt)}var Dt=r(0);function ei(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ws(a)||$s(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Le=0,X=null,rt=null,Ct=null,ai=!1,pl=!1,Ga=!1,li=0,Il=0,ml=null,Vp=0;function _t(){throw Error(m(321))}function Zu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ne(t[a],e[a]))return!1;return!0}function Ku(t,e,a,l,n,i){return Le=i,X=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,v.H=t===null||t.memoizedState===null?br:ss,Ga=!1,i=a(l,n),Ga=!1,pl&&(i=Bf(e,a,l,n)),Hf(t),i}function Hf(t){v.H=en;var e=rt!==null&&rt.next!==null;if(Le=0,Ct=rt=X=null,ai=!1,Il=0,ml=null,e)throw Error(m(300));t===null||Ot||(t=t.dependencies,t!==null&&Jn(t)&&(Ot=!0))}function Bf(t,e,a,l){X=t;var n=0;do{if(pl&&(ml=null),Il=0,pl=!1,25<=n)throw Error(m(301));if(n+=1,Ct=rt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}v.H=_r,i=e(a,l)}while(pl);return i}function Xp(){var t=v.H,e=t.useState()[0];return e=typeof e.then=="function"?Pl(e):e,t=t.useState()[0],(rt!==null?rt.memoizedState:null)!==t&&(X.flags|=1024),e}function Ju(){var t=li!==0;return li=0,t}function ku(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Fu(t){if(ai){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ai=!1}Le=0,Ct=rt=X=null,pl=!1,Il=li=0,ml=null}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?X.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Et(){if(rt===null){var t=X.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=Ct===null?X.memoizedState:Ct.next;if(e!==null)Ct=e,rt=t;else{if(t===null)throw X.alternate===null?Error(m(467)):Error(m(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Ct===null?X.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(t){var e=Il;return Il+=1,ml===null&&(ml=[]),t=Mf(ml,t,e),e=X,(Ct===null?e.memoizedState:Ct.next)===null&&(e=e.alternate,v.H=e===null||e.memoizedState===null?br:ss),t}function ii(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pl(t);if(t.$$typeof===zt)return Bt(t)}throw Error(m(438,String(t)))}function Wu(t){var e=null,a=X.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=X.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=ni(),X.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=Ce;return e.index++,a}function Ve(t,e){return typeof e=="function"?e(t):e}function ui(t){var e=Et();return $u(e,rt,t)}function $u(t,e,a){var l=t.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var s=u=null,c=null,p=e,h=!1;do{var S=p.lane&-536870913;if(S!==p.lane?($&S)===S:(Le&S)===S){var y=p.revertLane;if(y===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),S===cl&&(h=!0);else if((Le&y)===y){p=p.next,y===cl&&(h=!0);continue}else S={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(s=c=S,u=i):c=c.next=S,X.lanes|=y,pa|=y;S=p.action,Ga&&a(i,S),i=p.hasEagerState?p.eagerState:a(i,S)}else y={lane:S,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(s=c=y,u=i):c=c.next=y,X.lanes|=S,pa|=S;p=p.next}while(p!==null&&p!==e);if(c===null?u=i:c.next=s,!ne(i,t.memoizedState)&&(Ot=!0,h&&(a=fl,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=c,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Iu(t){var e=Et(),a=e.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);ne(i,e.memoizedState)||(Ot=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function Yf(t,e,a){var l=X,n=Et(),i=tt;if(i){if(a===void 0)throw Error(m(407));a=a()}else a=e();var u=!ne((rt||n).memoizedState,a);if(u&&(n.memoizedState=a,Ot=!0),n=n.queue,es(Lf.bind(null,l,n,t),[t]),n.getSnapshot!==e||u||Ct!==null&&Ct.memoizedState.tag&1){if(l.flags|=2048,yl(9,{destroy:void 0},Qf.bind(null,l,n,a,e),null),yt===null)throw Error(m(349));i||(Le&127)!==0||Gf(l,e,a)}return a}function Gf(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=X.updateQueue,e===null?(e=ni(),X.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Qf(t,e,a,l){e.value=a,e.getSnapshot=l,Vf(e)&&Xf(t)}function Lf(t,e,a){return a(function(){Vf(e)&&Xf(t)})}function Vf(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ne(t,a)}catch{return!0}}function Xf(t){var e=Na(t,2);e!==null&&Pt(e,t,2)}function Pu(t){var e=Kt();if(typeof t=="function"){var a=t;if(t=a(),Ga){Pe(!0);try{a()}finally{Pe(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:t},e}function Zf(t,e,a,l){return t.baseState=a,$u(t,rt,typeof l=="function"?l:Ve)}function Zp(t,e,a,l,n){if(fi(t))throw Error(m(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};v.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,Kf(e,i)):(i.next=a.next,e.pending=a.next=i)}}function Kf(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=v.T,u={};v.T=u;try{var s=a(n,l),c=v.S;c!==null&&c(u,s),Jf(t,e,s)}catch(p){ts(t,e,p)}finally{i!==null&&u.types!==null&&(i.types=u.types),v.T=i}}else try{i=a(n,l),Jf(t,e,i)}catch(p){ts(t,e,p)}}function Jf(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){kf(t,e,l)},function(l){return ts(t,e,l)}):kf(t,e,a)}function kf(t,e,a){e.status="fulfilled",e.value=a,Ff(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Kf(t,a)))}function ts(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,Ff(e),e=e.next;while(e!==l)}t.action=null}function Ff(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Wf(t,e){return e}function $f(t,e){if(tt){var a=yt.formState;if(a!==null){t:{var l=X;if(tt){if(ht){e:{for(var n=ht,i=ve;n.nodeType!==8;){if(!i){n=null;break e}if(n=_e(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ht=_e(n.nextSibling),l=n.data==="F!";break t}}na(l)}l=!1}l&&(e=a[0])}}return a=Kt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wf,lastRenderedState:e},a.queue=l,a=gr.bind(null,X,l),l.dispatch=a,l=Pu(!1),i=us.bind(null,X,!1,l.queue),l=Kt(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=Zp.bind(null,X,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function If(t){var e=Et();return Pf(e,rt,t)}function Pf(t,e,a){if(e=$u(t,e,Wf)[0],t=ui(Ve)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Pl(e)}catch(u){throw u===rl?Wn:u}else l=e;e=Et();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(X.flags|=2048,yl(9,{destroy:void 0},Kp.bind(null,n,a),null)),[l,i,t]}function Kp(t,e){t.action=e}function tr(t){var e=Et(),a=rt;if(a!==null)return Pf(e,a,t);Et(),e=e.memoizedState,a=Et();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function yl(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=X.updateQueue,e===null&&(e=ni(),X.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function er(){return Et().memoizedState}function si(t,e,a,l){var n=Kt();X.flags|=t,n.memoizedState=yl(1|e,{destroy:void 0},a,l===void 0?null:l)}function ci(t,e,a,l){var n=Et();l=l===void 0?null:l;var i=n.memoizedState.inst;rt!==null&&l!==null&&Zu(l,rt.memoizedState.deps)?n.memoizedState=yl(e,i,a,l):(X.flags|=t,n.memoizedState=yl(1|e,i,a,l))}function ar(t,e){si(8390656,8,t,e)}function es(t,e){ci(2048,8,t,e)}function Jp(t){X.flags|=4;var e=X.updateQueue;if(e===null)e=ni(),X.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function lr(t){var e=Et().memoizedState;return Jp({ref:e,nextImpl:t}),function(){if((nt&2)!==0)throw Error(m(440));return e.impl.apply(void 0,arguments)}}function nr(t,e){return ci(4,2,t,e)}function ir(t,e){return ci(4,4,t,e)}function ur(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sr(t,e,a){a=a!=null?a.concat([t]):null,ci(4,4,ur.bind(null,e,t),a)}function as(){}function cr(t,e){var a=Et();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&Zu(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function fr(t,e){var a=Et();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&Zu(e,l[1]))return l[0];if(l=t(),Ga){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[l,e],l}function ls(t,e,a){return a===void 0||(Le&1073741824)!==0&&($&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=ro(),X.lanes|=t,pa|=t,a)}function rr(t,e,a,l){return ne(a,e)?a:dl.current!==null?(t=ls(t,a,l),ne(t,e)||(Ot=!0),t):(Le&42)===0||(Le&1073741824)!==0&&($&261930)===0?(Ot=!0,t.memoizedState=a):(t=ro(),X.lanes|=t,pa|=t,e)}function or(t,e,a,l,n){var i=T.p;T.p=i!==0&&8>i?i:8;var u=v.T,s={};v.T=s,us(t,!1,e,a);try{var c=n(),p=v.S;if(p!==null&&p(s,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=Lp(c,l);tn(t,e,h,re(t))}else tn(t,e,l,re(t))}catch(S){tn(t,e,{then:function(){},status:"rejected",reason:S},re())}finally{T.p=i,u!==null&&s.types!==null&&(u.types=s.types),v.T=u}}function kp(){}function ns(t,e,a,l){if(t.tag!==5)throw Error(m(476));var n=dr(t).queue;or(t,n,e,Y,a===null?kp:function(){return pr(t),a(l)})}function dr(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:Y},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function pr(t){var e=dr(t);e.next===null&&(e=t.alternate.memoizedState),tn(t,e.next.queue,{},re())}function is(){return Bt(vn)}function mr(){return Et().memoizedState}function yr(){return Et().memoizedState}function Fp(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=re();t=sa(a);var l=ca(e,t,a);l!==null&&(Pt(l,e,a),Fl(l,e,a)),e={cache:wu()},t.payload=e;return}e=e.return}}function Wp(t,e,a){var l=re();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fi(t)?hr(e,a):(a=zu(t,e,a,l),a!==null&&(Pt(a,t,l),vr(a,e,l)))}function gr(t,e,a){var l=re();tn(t,e,a,l)}function tn(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(fi(t))hr(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,ne(s,u))return Vn(t,e,n,0),yt===null&&Ln(),!1}catch{}if(a=zu(t,e,n,l),a!==null)return Pt(a,t,l),vr(a,e,l),!0}return!1}function us(t,e,a,l){if(l={lane:2,revertLane:Bs(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fi(t)){if(e)throw Error(m(479))}else e=zu(t,a,l,2),e!==null&&Pt(e,t,2)}function fi(t){var e=t.alternate;return t===X||e!==null&&e===X}function hr(t,e){pl=ai=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function vr(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,xc(t,a)}}var en={readContext:Bt,use:ii,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t};en.useEffectEvent=_t;var br={readContext:Bt,use:ii,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:ar,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,si(4194308,4,ur.bind(null,e,t),a)},useLayoutEffect:function(t,e){return si(4194308,4,t,e)},useInsertionEffect:function(t,e){si(4,2,t,e)},useMemo:function(t,e){var a=Kt();e=e===void 0?null:e;var l=t();if(Ga){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=Kt();if(a!==void 0){var n=a(e);if(Ga){Pe(!0);try{a(e)}finally{Pe(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Wp.bind(null,X,t),[l.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:function(t){t=Pu(t);var e=t.queue,a=gr.bind(null,X,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:as,useDeferredValue:function(t,e){var a=Kt();return ls(a,t,e)},useTransition:function(){var t=Pu(!1);return t=or.bind(null,X,t.queue,!0,!1),Kt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=X,n=Kt();if(tt){if(a===void 0)throw Error(m(407));a=a()}else{if(a=e(),yt===null)throw Error(m(349));($&127)!==0||Gf(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,ar(Lf.bind(null,l,i,t),[t]),l.flags|=2048,yl(9,{destroy:void 0},Qf.bind(null,l,i,a,e),null),a},useId:function(){var t=Kt(),e=yt.identifierPrefix;if(tt){var a=Ne,l=Oe;a=(l&~(1<<32-le(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=li++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Vp++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:is,useFormState:$f,useActionState:$f,useOptimistic:function(t){var e=Kt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=us.bind(null,X,!0,a),a.dispatch=e,[t,e]},useMemoCache:Wu,useCacheRefresh:function(){return Kt().memoizedState=Fp.bind(null,X)},useEffectEvent:function(t){var e=Kt(),a={impl:t};return e.memoizedState=a,function(){if((nt&2)!==0)throw Error(m(440));return a.impl.apply(void 0,arguments)}}},ss={readContext:Bt,use:ii,useCallback:cr,useContext:Bt,useEffect:es,useImperativeHandle:sr,useInsertionEffect:nr,useLayoutEffect:ir,useMemo:fr,useReducer:ui,useRef:er,useState:function(){return ui(Ve)},useDebugValue:as,useDeferredValue:function(t,e){var a=Et();return rr(a,rt.memoizedState,t,e)},useTransition:function(){var t=ui(Ve)[0],e=Et().memoizedState;return[typeof t=="boolean"?t:Pl(t),e]},useSyncExternalStore:Yf,useId:mr,useHostTransitionStatus:is,useFormState:If,useActionState:If,useOptimistic:function(t,e){var a=Et();return Zf(a,rt,t,e)},useMemoCache:Wu,useCacheRefresh:yr};ss.useEffectEvent=lr;var _r={readContext:Bt,use:ii,useCallback:cr,useContext:Bt,useEffect:es,useImperativeHandle:sr,useInsertionEffect:nr,useLayoutEffect:ir,useMemo:fr,useReducer:Iu,useRef:er,useState:function(){return Iu(Ve)},useDebugValue:as,useDeferredValue:function(t,e){var a=Et();return rt===null?ls(a,t,e):rr(a,rt.memoizedState,t,e)},useTransition:function(){var t=Iu(Ve)[0],e=Et().memoizedState;return[typeof t=="boolean"?t:Pl(t),e]},useSyncExternalStore:Yf,useId:mr,useHostTransitionStatus:is,useFormState:tr,useActionState:tr,useOptimistic:function(t,e){var a=Et();return rt!==null?Zf(a,rt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:yr};_r.useEffectEvent=lr;function cs(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:q({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var fs={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=re(),n=sa(l);n.payload=e,a!=null&&(n.callback=a),e=ca(t,n,l),e!==null&&(Pt(e,t,l),Fl(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=re(),n=sa(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=ca(t,n,l),e!==null&&(Pt(e,t,l),Fl(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=re(),l=sa(a);l.tag=2,e!=null&&(l.callback=e),e=ca(t,l,a),e!==null&&(Pt(e,t,a),Fl(e,t,a))}};function Sr(t,e,a,l,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):e.prototype&&e.prototype.isPureReactComponent?!Ql(a,l)||!Ql(n,i):!0}function xr(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&fs.enqueueReplaceState(e,e.state,null)}function Qa(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=q({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function zr(t){Qn(t)}function Ar(t){console.error(t)}function Tr(t){Qn(t)}function ri(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Dr(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function rs(t,e,a){return a=sa(a),a.tag=3,a.payload={element:null},a.callback=function(){ri(t,e)},a}function Er(t){return t=sa(t),t.tag=3,t}function Mr(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){Dr(e,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Dr(e,a,l),typeof n!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function $p(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&sl(e,a,n,!0),a=ue.current,a!==null){switch(a.tag){case 31:case 13:return be===null?xi():a.alternate===null&&St===0&&(St=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===$n?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),qs(t,l,n)),!1;case 22:return a.flags|=65536,l===$n?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),qs(t,l,n)),!1}throw Error(m(435,a.tag))}return qs(t,l,n),xi(),!1}if(tt)return e=ue.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==Cu&&(t=Error(m(422),{cause:l}),Xl(ye(t,a)))):(l!==Cu&&(e=Error(m(423),{cause:l}),Xl(ye(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=ye(l,a),n=rs(t.stateNode,l,n),Gu(t,n),St!==4&&(St=2)),!1;var i=Error(m(520),{cause:l});if(i=ye(i,a),rn===null?rn=[i]:rn.push(i),St!==4&&(St=2),e===null)return!0;l=ye(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=rs(a.stateNode,l,t),Gu(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Er(n),Mr(n,t,a,l),Gu(a,n),!1}a=a.return}while(a!==null);return!1}var os=Error(m(461)),Ot=!1;function Yt(t,e,a,l){e.child=t===null?Rf(e,null,a,l):Ya(e,t.child,a,l)}function Cr(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var u={};for(var s in l)s!=="ref"&&(u[s]=l[s])}else u=l;return qa(e),l=Ku(t,e,a,u,i,n),s=Ju(),t!==null&&!Ot?(ku(t,e,n),Xe(t,e,n)):(tt&&s&&Eu(e),e.flags|=1,Yt(t,e,l,n),e.child)}function Or(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Au(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,Nr(t,e,i,l,n)):(t=Zn(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!bs(t,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Ql,a(u,l)&&t.ref===e.ref)return Xe(t,e,n)}return e.flags|=1,t=Be(i,l),t.ref=e.ref,t.return=e,e.child=t}function Nr(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(Ql(i,l)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=l=i,bs(t,n))(t.flags&131072)!==0&&(Ot=!0);else return e.lanes=t.lanes,Xe(t,e,n)}return ds(t,e,a,l,n)}function Rr(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return Ur(t,e,i,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fn(e,i!==null?i.cachePool:null),i!==null?qf(e,i):Lu(),jf(e);else return l=e.lanes=536870912,Ur(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Fn(e,i.cachePool),qf(e,i),ra(),e.memoizedState=null):(t!==null&&Fn(e,null),Lu(),ra());return Yt(t,e,n,a),e.child}function an(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ur(t,e,a,l,n){var i=ju();return i=i===null?null:{parent:Mt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&Fn(e,null),Lu(),jf(e),t!==null&&sl(t,e,l,!0),e.childLanes=n,null}function oi(t,e){return e=pi({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function wr(t,e,a){return Ya(e,t.child,null,a),t=oi(e,e.pendingProps),t.flags|=2,se(e),e.memoizedState=null,t}function Ip(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(tt){if(l.mode==="hidden")return t=oi(e,l),e.lanes=536870912,an(null,t);if(Xu(e),(t=ht)?(t=Jo(t,ve),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:aa!==null?{id:Oe,overflow:Ne}:null,retryLane:536870912,hydrationErrors:null},a=hf(t),a.return=e,e.child=a,Ht=e,ht=null)):t=null,t===null)throw na(e);return e.lanes=536870912,null}return oi(e,l)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Xu(e),n)if(e.flags&256)e.flags&=-257,e=wr(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(m(558));else if(Ot||sl(t,e,a,!1),n=(a&t.childLanes)!==0,Ot||n){if(l=yt,l!==null&&(u=zc(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Na(t,u),Pt(l,t,u),os;xi(),e=wr(t,e,a)}else t=i.treeContext,ht=_e(u.nextSibling),Ht=e,tt=!0,la=null,ve=!1,t!==null&&_f(e,t),e=oi(e,l),e.flags|=4096;return e}return t=Be(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function di(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(m(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function ds(t,e,a,l,n){return qa(e),a=Ku(t,e,a,l,void 0,n),l=Ju(),t!==null&&!Ot?(ku(t,e,n),Xe(t,e,n)):(tt&&l&&Eu(e),e.flags|=1,Yt(t,e,a,n),e.child)}function qr(t,e,a,l,n,i){return qa(e),e.updateQueue=null,a=Bf(e,l,a,n),Hf(t),l=Ju(),t!==null&&!Ot?(ku(t,e,i),Xe(t,e,i)):(tt&&l&&Eu(e),e.flags|=1,Yt(t,e,a,i),e.child)}function jr(t,e,a,l,n){if(qa(e),e.stateNode===null){var i=ll,u=a.contextType;typeof u=="object"&&u!==null&&(i=Bt(u)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fs,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},Bu(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?Bt(u):ll,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(cs(e,a,u,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&fs.enqueueReplaceState(i,i.state,null),$l(e,l,i,n),Wl(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,c=Qa(a,s);i.props=c;var p=i.context,h=a.contextType;u=ll,typeof h=="object"&&h!==null&&(u=Bt(h));var S=a.getDerivedStateFromProps;h=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||p!==u)&&xr(e,i,l,u),ua=!1;var y=e.memoizedState;i.state=y,$l(e,l,i,n),Wl(),p=e.memoizedState,s||y!==p||ua?(typeof S=="function"&&(cs(e,a,S,l),p=e.memoizedState),(c=ua||Sr(e,a,c,l,y,p,u))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=p),i.props=l,i.state=p,i.context=u,l=c):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,Yu(t,e),u=e.memoizedProps,h=Qa(a,u),i.props=h,S=e.pendingProps,y=i.context,p=a.contextType,c=ll,typeof p=="object"&&p!==null&&(c=Bt(p)),s=a.getDerivedStateFromProps,(p=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==S||y!==c)&&xr(e,i,l,c),ua=!1,y=e.memoizedState,i.state=y,$l(e,l,i,n),Wl();var g=e.memoizedState;u!==S||y!==g||ua||t!==null&&t.dependencies!==null&&Jn(t.dependencies)?(typeof s=="function"&&(cs(e,a,s,l),g=e.memoizedState),(h=ua||Sr(e,a,h,l,y,g,c)||t!==null&&t.dependencies!==null&&Jn(t.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,g,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,g,c)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=g),i.props=l,i.state=g,i.context=c,l=h):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,di(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=Ya(e,t.child,null,n),e.child=Ya(e,null,a,n)):Yt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=Xe(t,e,n),t}function Hr(t,e,a,l){return Ua(),e.flags|=256,Yt(t,e,a,l),e.child}var ps={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ms(t){return{baseLanes:t,cachePool:Df()}}function ys(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=fe),t}function Br(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(Dt.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(tt){if(n?fa(e):ra(),(t=ht)?(t=Jo(t,ve),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:aa!==null?{id:Oe,overflow:Ne}:null,retryLane:536870912,hydrationErrors:null},a=hf(t),a.return=e,e.child=a,Ht=e,ht=null)):t=null,t===null)throw na(e);return $s(t)?e.lanes=32:e.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(ra(),n=e.mode,s=pi({mode:"hidden",children:s},n),l=Ra(l,n,a,null),s.return=e,l.return=e,s.sibling=l,e.child=s,l=e.child,l.memoizedState=ms(a),l.childLanes=ys(t,u,a),e.memoizedState=ps,an(null,l)):(fa(e),gs(e,s))}var c=t.memoizedState;if(c!==null&&(s=c.dehydrated,s!==null)){if(i)e.flags&256?(fa(e),e.flags&=-257,e=hs(t,e,a)):e.memoizedState!==null?(ra(),e.child=t.child,e.flags|=128,e=null):(ra(),s=l.fallback,n=e.mode,l=pi({mode:"visible",children:l.children},n),s=Ra(s,n,a,null),s.flags|=2,l.return=e,s.return=e,l.sibling=s,e.child=l,Ya(e,t.child,null,a),l=e.child,l.memoizedState=ms(a),l.childLanes=ys(t,u,a),e.memoizedState=ps,e=an(null,l));else if(fa(e),$s(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var p=u.dgst;u=p,l=Error(m(419)),l.stack="",l.digest=u,Xl({value:l,source:null,stack:null}),e=hs(t,e,a)}else if(Ot||sl(t,e,a,!1),u=(a&t.childLanes)!==0,Ot||u){if(u=yt,u!==null&&(l=zc(u,a),l!==0&&l!==c.retryLane))throw c.retryLane=l,Na(t,l),Pt(u,t,l),os;Ws(s)||xi(),e=hs(t,e,a)}else Ws(s)?(e.flags|=192,e.child=t.child,e=null):(t=c.treeContext,ht=_e(s.nextSibling),Ht=e,tt=!0,la=null,ve=!1,t!==null&&_f(e,t),e=gs(e,l.children),e.flags|=4096);return e}return n?(ra(),s=l.fallback,n=e.mode,c=t.child,p=c.sibling,l=Be(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,p!==null?s=Be(p,s):(s=Ra(s,n,a,null),s.flags|=2),s.return=e,l.return=e,l.sibling=s,e.child=l,an(null,l),l=e.child,s=t.child.memoizedState,s===null?s=ms(a):(n=s.cachePool,n!==null?(c=Mt._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=Df(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=ys(t,u,a),e.memoizedState=ps,an(t.child,l)):(fa(e),a=t.child,t=a.sibling,a=Be(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function gs(t,e){return e=pi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function pi(t,e){return t=ie(22,t,null,e),t.lanes=0,t}function hs(t,e,a){return Ya(e,t.child,null,a),t=gs(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yr(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Ru(t.return,e,a)}function vs(t,e,a,l,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Gr(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Dt.current,s=(u&2)!==0;if(s?(u=u&1|2,e.flags|=128):u&=1,D(Dt,u),Yt(t,e,l,a),l=tt?Vl:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yr(t,a,e);else if(t.tag===19)Yr(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&ei(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),vs(e,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ei(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}vs(e,!0,a,null,i,l);break;case"together":vs(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Xe(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),pa|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(sl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(m(153));if(e.child!==null){for(t=e.child,a=Be(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Be(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function bs(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Jn(t)))}function Pp(t,e,a){switch(e.tag){case 3:Zt(e,e.stateNode.containerInfo),ia(e,Mt,t.memoizedState.cache),Ua();break;case 27:case 5:Ml(e);break;case 4:Zt(e,e.stateNode.containerInfo);break;case 10:ia(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Xu(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(fa(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Br(t,e,a):(fa(e),t=Xe(t,e,a),t!==null?t.sibling:null);fa(e);break;case 19:var n=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(sl(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return Gr(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),D(Dt,Dt.current),l)break;return null;case 22:return e.lanes=0,Rr(t,e,a,e.pendingProps);case 24:ia(e,Mt,t.memoizedState.cache)}return Xe(t,e,a)}function Qr(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ot=!0;else{if(!bs(t,a)&&(e.flags&128)===0)return Ot=!1,Pp(t,e,a);Ot=(t.flags&131072)!==0}else Ot=!1,tt&&(e.flags&1048576)!==0&&bf(e,Vl,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=Ha(e.elementType),e.type=t,typeof t=="function")Au(t)?(l=Qa(t,l),e.tag=1,e=jr(null,e,t,l,a)):(e.tag=0,e=ds(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===qt){e.tag=11,e=Cr(null,e,t,l,a);break t}else if(n===B){e.tag=14,e=Or(null,e,t,l,a);break t}}throw e=we(t)||t,Error(m(306,e,""))}}return e;case 0:return ds(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=Qa(l,e.pendingProps),jr(t,e,l,n,a);case 3:t:{if(Zt(e,e.stateNode.containerInfo),t===null)throw Error(m(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,Yu(t,e),$l(e,l,null,a);var u=e.memoizedState;if(l=u.cache,ia(e,Mt,l),l!==i.cache&&Uu(e,[Mt],a,!0),Wl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Hr(t,e,l,a);break t}else if(l!==n){n=ye(Error(m(424)),e),Xl(n),e=Hr(t,e,l,a);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ht=_e(t.firstChild),Ht=e,tt=!0,la=null,ve=!0,a=Rf(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ua(),l===n){e=Xe(t,e,a);break t}Yt(t,e,l,a)}e=e.child}return e;case 26:return di(t,e),t===null?(a=Po(e.type,null,e.pendingProps,null))?e.memoizedState=a:tt||(a=e.type,t=e.pendingProps,l=Ci(k.current).createElement(a),l[jt]=e,l[Jt]=t,Gt(l,a,t),Ut(l),e.stateNode=l):e.memoizedState=Po(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ml(e),t===null&&tt&&(l=e.stateNode=Wo(e.type,e.pendingProps,k.current),Ht=e,ve=!0,n=ht,va(e.type)?(Is=n,ht=_e(l.firstChild)):ht=n),Yt(t,e,e.pendingProps.children,a),di(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&tt&&((n=l=ht)&&(l=Cm(l,e.type,e.pendingProps,ve),l!==null?(e.stateNode=l,Ht=e,ht=_e(l.firstChild),ve=!1,n=!0):n=!1),n||na(e)),Ml(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,Js(n,i)?l=null:u!==null&&Js(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Ku(t,e,Xp,null,null,a),vn._currentValue=n),di(t,e),Yt(t,e,l,a),e.child;case 6:return t===null&&tt&&((t=a=ht)&&(a=Om(a,e.pendingProps,ve),a!==null?(e.stateNode=a,Ht=e,ht=null,t=!0):t=!1),t||na(e)),null;case 13:return Br(t,e,a);case 4:return Zt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Ya(e,null,l,a):Yt(t,e,l,a),e.child;case 11:return Cr(t,e,e.type,e.pendingProps,a);case 7:return Yt(t,e,e.pendingProps,a),e.child;case 8:return Yt(t,e,e.pendingProps.children,a),e.child;case 12:return Yt(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,ia(e,e.type,l.value),Yt(t,e,l.children,a),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,qa(e),n=Bt(n),l=l(n),e.flags|=1,Yt(t,e,l,a),e.child;case 14:return Or(t,e,e.type,e.pendingProps,a);case 15:return Nr(t,e,e.type,e.pendingProps,a);case 19:return Gr(t,e,a);case 31:return Ip(t,e,a);case 22:return Rr(t,e,a,e.pendingProps);case 24:return qa(e),l=Bt(Mt),t===null?(n=ju(),n===null&&(n=yt,i=wu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},Bu(e),ia(e,Mt,n)):((t.lanes&a)!==0&&(Yu(t,e),$l(e,null,null,a),Wl()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),ia(e,Mt,l)):(l=i.cache,ia(e,Mt,l),l!==n.cache&&Uu(e,[Mt],a,!0))),Yt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(m(156,e.tag))}function Ze(t){t.flags|=4}function _s(t,e,a,l,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(yo())t.flags|=8192;else throw Ba=$n,Hu}else t.flags&=-16777217}function Lr(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!nd(e))if(yo())t.flags|=8192;else throw Ba=$n,Hu}function mi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?_c():536870912,t.lanes|=e,bl|=e)}function ln(t,e){if(!tt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function tm(t,e,a){var l=e.pendingProps;switch(Mu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return vt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Qe(Mt),Tt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ul(e)?Ze(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ou())),vt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Ze(e),i!==null?(vt(e),Lr(e,i)):(vt(e),_s(e,n,null,l,a))):i?i!==t.memoizedState?(Ze(e),vt(e),Lr(e,i)):(vt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ze(e),vt(e),_s(e,n,t,l,a)),null;case 27:if(Tn(e),a=k.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ze(e);else{if(!l){if(e.stateNode===null)throw Error(m(166));return vt(e),null}t=M.current,ul(e)?Sf(e):(t=Wo(n,l,a),e.stateNode=t,Ze(e))}return vt(e),null;case 5:if(Tn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ze(e);else{if(!l){if(e.stateNode===null)throw Error(m(166));return vt(e),null}if(i=M.current,ul(e))Sf(e);else{var u=Ci(k.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[jt]=e,i[Jt]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(Gt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ze(e)}}return vt(e),_s(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Ze(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(m(166));if(t=k.current,ul(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=Ht,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[jt]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Yo(t.nodeValue,a)),t||na(e,!0)}else t=Ci(t).createTextNode(l),t[jt]=e,e.stateNode=t}return vt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=ul(e),a!==null){if(t===null){if(!l)throw Error(m(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(557));t[jt]=e}else Ua(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;vt(e),t=!1}else a=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(se(e),e):(se(e),null);if((e.flags&128)!==0)throw Error(m(558))}return vt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ul(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(m(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[jt]=e}else Ua(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;vt(e),n=!1}else n=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(se(e),e):(se(e),null)}return se(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),mi(e,e.updateQueue),vt(e),null);case 4:return Tt(),t===null&&Ls(e.stateNode.containerInfo),vt(e),null;case 10:return Qe(e.type),vt(e),null;case 19:if(x(Dt),l=e.memoizedState,l===null)return vt(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)ln(l,!1);else{if(St!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=ei(t),i!==null){for(e.flags|=128,ln(l,!1),t=i.updateQueue,e.updateQueue=t,mi(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)gf(a,t),a=a.sibling;return D(Dt,Dt.current&1|2),tt&&Ye(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&ee()>bi&&(e.flags|=128,n=!0,ln(l,!1),e.lanes=4194304)}else{if(!n)if(t=ei(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,mi(e,t),ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!tt)return vt(e),null}else 2*ee()-l.renderingStartTime>bi&&a!==536870912&&(e.flags|=128,n=!0,ln(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ee(),t.sibling=null,a=Dt.current,D(Dt,n?a&1|2:a&1),tt&&Ye(e,l.treeForkCount),t):(vt(e),null);case 22:case 23:return se(e),Vu(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),a=e.updateQueue,a!==null&&mi(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&x(ja),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Qe(Mt),vt(e),null;case 25:return null;case 30:return null}throw Error(m(156,e.tag))}function em(t,e){switch(Mu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qe(Mt),Tt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Tn(e),null;case 31:if(e.memoizedState!==null){if(se(e),e.alternate===null)throw Error(m(340));Ua()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(se(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(m(340));Ua()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return x(Dt),null;case 4:return Tt(),null;case 10:return Qe(e.type),null;case 22:case 23:return se(e),Vu(),t!==null&&x(ja),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Qe(Mt),null;case 25:return null;default:return null}}function Vr(t,e){switch(Mu(e),e.tag){case 3:Qe(Mt),Tt();break;case 26:case 27:case 5:Tn(e);break;case 4:Tt();break;case 31:e.memoizedState!==null&&se(e);break;case 13:se(e);break;case 19:x(Dt);break;case 10:Qe(e.type);break;case 22:case 23:se(e),Vu(),t!==null&&x(ja);break;case 24:Qe(Mt)}}function nn(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(s){ct(e,e.return,s)}}function oa(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var u=l.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=e;var c=a,p=s;try{p()}catch(h){ct(n,c,h)}}}l=l.next}while(l!==i)}}catch(h){ct(e,e.return,h)}}function Xr(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{wf(e,a)}catch(l){ct(t,t.return,l)}}}function Zr(t,e,a){a.props=Qa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){ct(t,e,l)}}function un(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){ct(t,e,n)}}function Re(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ct(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ct(t,e,n)}else a.current=null}function Kr(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ct(t,t.return,n)}}function Ss(t,e,a){try{var l=t.stateNode;zm(l,t.type,a,e),l[Jt]=e}catch(n){ct(t,t.return,n)}}function Jr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&va(t.type)||t.tag===4}function xs(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Jr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zs(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=je));else if(l!==4&&(l===27&&va(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(zs(t,e,a),t=t.sibling;t!==null;)zs(t,e,a),t=t.sibling}function yi(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(yi(t,e,a),t=t.sibling;t!==null;)yi(t,e,a),t=t.sibling}function kr(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Gt(e,l,a),e[jt]=t,e[Jt]=a}catch(i){ct(t,t.return,i)}}var Ke=!1,Nt=!1,As=!1,Fr=typeof WeakSet=="function"?WeakSet:Set,wt=null;function am(t,e){if(t=t.containerInfo,Zs=ji,t=sf(t),hu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var u=0,s=-1,c=-1,p=0,h=0,S=t,y=null;e:for(;;){for(var g;S!==a||n!==0&&S.nodeType!==3||(s=u+n),S!==i||l!==0&&S.nodeType!==3||(c=u+l),S.nodeType===3&&(u+=S.nodeValue.length),(g=S.firstChild)!==null;)y=S,S=g;for(;;){if(S===t)break e;if(y===a&&++p===n&&(s=u),y===i&&++h===l&&(c=u),(g=S.nextSibling)!==null)break;S=y,y=S.parentNode}S=g}a=s===-1||c===-1?null:{start:s,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ks={focusedElem:t,selectionRange:a},ji=!1,wt=e;wt!==null;)if(e=wt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,wt=t;else for(;wt!==null;){switch(e=wt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=e,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var E=Qa(a.type,n);t=l.getSnapshotBeforeUpdate(E,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(H){ct(a,a.return,H)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Fs(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Fs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(m(163))}if(t=e.sibling,t!==null){t.return=e.return,wt=t;break}wt=e.return}}function Wr(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ke(t,a),l&4&&nn(5,a);break;case 1:if(ke(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){ct(a,a.return,u)}else{var n=Qa(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){ct(a,a.return,u)}}l&64&&Xr(a),l&512&&un(a,a.return);break;case 3:if(ke(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{wf(t,e)}catch(u){ct(a,a.return,u)}}break;case 27:e===null&&l&4&&kr(a);case 26:case 5:ke(t,a),e===null&&l&4&&Kr(a),l&512&&un(a,a.return);break;case 12:ke(t,a);break;case 31:ke(t,a),l&4&&Pr(t,a);break;case 13:ke(t,a),l&4&&to(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=om.bind(null,a),Nm(t,a))));break;case 22:if(l=a.memoizedState!==null||Ke,!l){e=e!==null&&e.memoizedState!==null||Nt,n=Ke;var i=Nt;Ke=l,(Nt=e)&&!i?Fe(t,a,(a.subtreeFlags&8772)!==0):ke(t,a),Ke=n,Nt=i}break;case 30:break;default:ke(t,a)}}function $r(t){var e=t.alternate;e!==null&&(t.alternate=null,$r(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&tu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var bt=null,Ft=!1;function Je(t,e,a){for(a=a.child;a!==null;)Ir(t,e,a),a=a.sibling}function Ir(t,e,a){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(Cl,a)}catch{}switch(a.tag){case 26:Nt||Re(a,e),Je(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Nt||Re(a,e);var l=bt,n=Ft;va(a.type)&&(bt=a.stateNode,Ft=!1),Je(t,e,a),yn(a.stateNode),bt=l,Ft=n;break;case 5:Nt||Re(a,e);case 6:if(l=bt,n=Ft,bt=null,Je(t,e,a),bt=l,Ft=n,bt!==null)if(Ft)try{(bt.nodeType===9?bt.body:bt.nodeName==="HTML"?bt.ownerDocument.body:bt).removeChild(a.stateNode)}catch(i){ct(a,e,i)}else try{bt.removeChild(a.stateNode)}catch(i){ct(a,e,i)}break;case 18:bt!==null&&(Ft?(t=bt,Zo(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),El(t)):Zo(bt,a.stateNode));break;case 4:l=bt,n=Ft,bt=a.stateNode.containerInfo,Ft=!0,Je(t,e,a),bt=l,Ft=n;break;case 0:case 11:case 14:case 15:oa(2,a,e),Nt||oa(4,a,e),Je(t,e,a);break;case 1:Nt||(Re(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Zr(a,e,l)),Je(t,e,a);break;case 21:Je(t,e,a);break;case 22:Nt=(l=Nt)||a.memoizedState!==null,Je(t,e,a),Nt=l;break;default:Je(t,e,a)}}function Pr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{El(t)}catch(a){ct(e,e.return,a)}}}function to(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{El(t)}catch(a){ct(e,e.return,a)}}function lm(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Fr),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Fr),e;default:throw Error(m(435,t.tag))}}function gi(t,e){var a=lm(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var n=dm.bind(null,t,l);l.then(n,n)}})}function Wt(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,u=e,s=u;t:for(;s!==null;){switch(s.tag){case 27:if(va(s.type)){bt=s.stateNode,Ft=!1;break t}break;case 5:bt=s.stateNode,Ft=!1;break t;case 3:case 4:bt=s.stateNode.containerInfo,Ft=!0;break t}s=s.return}if(bt===null)throw Error(m(160));Ir(i,u,n),bt=null,Ft=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)eo(e,t),e=e.sibling}var Ae=null;function eo(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wt(e,t),$t(t),l&4&&(oa(3,t,t.return),nn(3,t),oa(5,t,t.return));break;case 1:Wt(e,t),$t(t),l&512&&(Nt||a===null||Re(a,a.return)),l&64&&Ke&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ae;if(Wt(e,t),$t(t),l&512&&(Nt||a===null||Re(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Rl]||i[jt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Gt(i,l,a),i[jt]=t,Ut(i),l=i;break t;case"link":var u=ad("link","href",n).get(l+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break e}}i=n.createElement(l),Gt(i,l,a),n.head.appendChild(i);break;case"meta":if(u=ad("meta","content",n).get(l+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break e}}i=n.createElement(l),Gt(i,l,a),n.head.appendChild(i);break;default:throw Error(m(468,l))}i[jt]=t,Ut(i),l=i}t.stateNode=l}else ld(n,t.type,t.stateNode);else t.stateNode=ed(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?ld(n,t.type,t.stateNode):ed(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Ss(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wt(e,t),$t(t),l&512&&(Nt||a===null||Re(a,a.return)),a!==null&&l&4&&Ss(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wt(e,t),$t(t),l&512&&(Nt||a===null||Re(a,a.return)),t.flags&32){n=t.stateNode;try{Wa(n,"")}catch(E){ct(t,t.return,E)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Ss(t,n,a!==null?a.memoizedProps:n)),l&1024&&(As=!0);break;case 6:if(Wt(e,t),$t(t),l&4){if(t.stateNode===null)throw Error(m(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(E){ct(t,t.return,E)}}break;case 3:if(Ri=null,n=Ae,Ae=Oi(e.containerInfo),Wt(e,t),Ae=n,$t(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{El(e.containerInfo)}catch(E){ct(t,t.return,E)}As&&(As=!1,ao(t));break;case 4:l=Ae,Ae=Oi(t.stateNode.containerInfo),Wt(e,t),$t(t),Ae=l;break;case 12:Wt(e,t),$t(t);break;case 31:Wt(e,t),$t(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gi(t,l)));break;case 13:Wt(e,t),$t(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vi=ee()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gi(t,l)));break;case 22:n=t.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,p=Ke,h=Nt;if(Ke=p||n,Nt=h||c,Wt(e,t),Nt=h,Ke=p,$t(t),l&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||c||Ke||Nt||La(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){c=a=e;try{if(i=c.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=c.stateNode;var S=c.memoizedProps.style,y=S!=null&&S.hasOwnProperty("display")?S.display:null;s.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(E){ct(c,c.return,E)}}}else if(e.tag===6){if(a===null){c=e;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(E){ct(c,c.return,E)}}}else if(e.tag===18){if(a===null){c=e;try{var g=c.stateNode;n?Ko(g,!0):Ko(c.stateNode,!1)}catch(E){ct(c,c.return,E)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,gi(t,a))));break;case 19:Wt(e,t),$t(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gi(t,l)));break;case 30:break;case 21:break;default:Wt(e,t),$t(t)}}function $t(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Jr(l)){a=l;break}l=l.return}if(a==null)throw Error(m(160));switch(a.tag){case 27:var n=a.stateNode,i=xs(t);yi(t,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Wa(u,""),a.flags&=-33);var s=xs(t);yi(t,s,u);break;case 3:case 4:var c=a.stateNode.containerInfo,p=xs(t);zs(t,p,c);break;default:throw Error(m(161))}}catch(h){ct(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ao(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ao(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ke(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Wr(t,e.alternate,e),e=e.sibling}function La(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:oa(4,e,e.return),La(e);break;case 1:Re(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Zr(e,e.return,a),La(e);break;case 27:yn(e.stateNode);case 26:case 5:Re(e,e.return),La(e);break;case 22:e.memoizedState===null&&La(e);break;case 30:La(e);break;default:La(e)}t=t.sibling}}function Fe(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:Fe(n,i,a),nn(4,i);break;case 1:if(Fe(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){ct(l,l.return,p)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Uf(c[n],s)}catch(p){ct(l,l.return,p)}}a&&u&64&&Xr(i),un(i,i.return);break;case 27:kr(i);case 26:case 5:Fe(n,i,a),a&&l===null&&u&4&&Kr(i),un(i,i.return);break;case 12:Fe(n,i,a);break;case 31:Fe(n,i,a),a&&u&4&&Pr(n,i);break;case 13:Fe(n,i,a),a&&u&4&&to(n,i);break;case 22:i.memoizedState===null&&Fe(n,i,a),un(i,i.return);break;case 30:break;default:Fe(n,i,a)}e=e.sibling}}function Ts(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Zl(a))}function Ds(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zl(t))}function Te(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lo(t,e,a,l),e=e.sibling}function lo(t,e,a,l){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Te(t,e,a,l),n&2048&&nn(9,e);break;case 1:Te(t,e,a,l);break;case 3:Te(t,e,a,l),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zl(t)));break;case 12:if(n&2048){Te(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){ct(e,e.return,c)}}else Te(t,e,a,l);break;case 31:Te(t,e,a,l);break;case 13:Te(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?Te(t,e,a,l):sn(t,e):i._visibility&2?Te(t,e,a,l):(i._visibility|=2,gl(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Ts(u,e);break;case 24:Te(t,e,a,l),n&2048&&Ds(e.alternate,e);break;default:Te(t,e,a,l)}}function gl(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,s=a,c=l,p=u.flags;switch(u.tag){case 0:case 11:case 15:gl(i,u,s,c,n),nn(8,u);break;case 23:break;case 22:var h=u.stateNode;u.memoizedState!==null?h._visibility&2?gl(i,u,s,c,n):sn(i,u):(h._visibility|=2,gl(i,u,s,c,n)),n&&p&2048&&Ts(u.alternate,u);break;case 24:gl(i,u,s,c,n),n&&p&2048&&Ds(u.alternate,u);break;default:gl(i,u,s,c,n)}e=e.sibling}}function sn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:sn(a,l),n&2048&&Ts(l.alternate,l);break;case 24:sn(a,l),n&2048&&Ds(l.alternate,l);break;default:sn(a,l)}e=e.sibling}}var cn=8192;function hl(t,e,a){if(t.subtreeFlags&cn)for(t=t.child;t!==null;)no(t,e,a),t=t.sibling}function no(t,e,a){switch(t.tag){case 26:hl(t,e,a),t.flags&cn&&t.memoizedState!==null&&Vm(a,Ae,t.memoizedState,t.memoizedProps);break;case 5:hl(t,e,a);break;case 3:case 4:var l=Ae;Ae=Oi(t.stateNode.containerInfo),hl(t,e,a),Ae=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=cn,cn=16777216,hl(t,e,a),cn=l):hl(t,e,a));break;default:hl(t,e,a)}}function io(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function fn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];wt=l,so(l,t)}io(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)uo(t),t=t.sibling}function uo(t){switch(t.tag){case 0:case 11:case 15:fn(t),t.flags&2048&&oa(9,t,t.return);break;case 3:fn(t);break;case 12:fn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,hi(t)):fn(t);break;default:fn(t)}}function hi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];wt=l,so(l,t)}io(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:oa(8,e,e.return),hi(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,hi(e));break;default:hi(e)}t=t.sibling}}function so(t,e){for(;wt!==null;){var a=wt;switch(a.tag){case 0:case 11:case 15:oa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,wt=l;else t:for(a=t;wt!==null;){l=wt;var n=l.sibling,i=l.return;if($r(l),l===a){wt=null;break t}if(n!==null){n.return=i,wt=n;break t}wt=i}}}var nm={getCacheForType:function(t){var e=Bt(Mt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Bt(Mt).controller.signal}},im=typeof WeakMap=="function"?WeakMap:Map,nt=0,yt=null,F=null,$=0,st=0,ce=null,da=!1,vl=!1,Es=!1,We=0,St=0,pa=0,Va=0,Ms=0,fe=0,bl=0,rn=null,It=null,Cs=!1,vi=0,co=0,bi=1/0,_i=null,ma=null,Rt=0,ya=null,_l=null,$e=0,Os=0,Ns=null,fo=null,on=0,Rs=null;function re(){return(nt&2)!==0&&$!==0?$&-$:v.T!==null?Bs():Ac()}function ro(){if(fe===0)if(($&536870912)===0||tt){var t=Mn;Mn<<=1,(Mn&3932160)===0&&(Mn=262144),fe=t}else fe=536870912;return t=ue.current,t!==null&&(t.flags|=32),fe}function Pt(t,e,a){(t===yt&&(st===2||st===9)||t.cancelPendingCommit!==null)&&(Sl(t,0),ga(t,$,fe,!1)),Nl(t,a),((nt&2)===0||t!==yt)&&(t===yt&&((nt&2)===0&&(Va|=a),St===4&&ga(t,$,fe,!1)),Ue(t))}function oo(t,e,a){if((nt&6)!==0)throw Error(m(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Ol(t,e),n=l?cm(t,e):ws(t,e,!0),i=l;do{if(n===0){vl&&!l&&ga(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!um(a)){n=ws(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var s=t;n=rn;var c=s.current.memoizedState.isDehydrated;if(c&&(Sl(s,u).flags|=256),u=ws(s,u,!1),u!==2){if(Es&&!c){s.errorRecoveryDisabledLanes|=i,Va|=i,n=4;break t}i=It,It=n,i!==null&&(It===null?It=i:It.push.apply(It,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Sl(t,0),ga(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(m(345));case 4:if((e&4194048)!==e)break;case 6:ga(l,e,fe,!da);break t;case 2:It=null;break;case 3:case 5:break;default:throw Error(m(329))}if((e&62914560)===e&&(n=vi+300-ee(),10<n)){if(ga(l,e,fe,!da),On(l,0,!0)!==0)break t;$e=e,l.timeoutHandle=Vo(po.bind(null,l,a,It,_i,Cs,e,fe,Va,bl,da,i,"Throttled",-0,0),n);break t}po(l,a,It,_i,Cs,e,fe,Va,bl,da,i,null,-0,0)}}break}while(!0);Ue(t)}function po(t,e,a,l,n,i,u,s,c,p,h,S,y,g){if(t.timeoutHandle=-1,S=e.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:je},no(e,i,S);var E=(i&62914560)===i?vi-ee():(i&4194048)===i?co-ee():0;if(E=Xm(S,E),E!==null){$e=i,t.cancelPendingCommit=E(So.bind(null,t,e,i,a,l,n,u,s,c,h,S,null,y,g)),ga(t,i,u,!p);return}}So(t,e,i,a,l,n,u,s,c)}function um(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ne(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ga(t,e,a,l){e&=~Ms,e&=~Va,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-le(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Sc(t,a,e)}function Si(){return(nt&6)===0?(dn(0),!1):!0}function Us(){if(F!==null){if(st===0)var t=F.return;else t=F,Ge=wa=null,Fu(t),ol=null,Jl=0,t=F;for(;t!==null;)Vr(t.alternate,t),t=t.return;F=null}}function Sl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Dm(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$e=0,Us(),yt=t,F=a=Be(t.current,null),$=e,st=0,ce=null,da=!1,vl=Ol(t,e),Es=!1,bl=fe=Ms=Va=pa=St=0,It=rn=null,Cs=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-le(l),i=1<<n;e|=t[n],l&=~i}return We=e,Ln(),a}function mo(t,e){X=null,v.H=en,e===rl||e===Wn?(e=Cf(),st=3):e===Hu?(e=Cf(),st=4):st=e===os?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ce=e,F===null&&(St=1,ri(t,ye(e,t.current)))}function yo(){var t=ue.current;return t===null?!0:($&4194048)===$?be===null:($&62914560)===$||($&536870912)!==0?t===be:!1}function go(){var t=v.H;return v.H=en,t===null?en:t}function ho(){var t=v.A;return v.A=nm,t}function xi(){St=4,da||($&4194048)!==$&&ue.current!==null||(vl=!0),(pa&134217727)===0&&(Va&134217727)===0||yt===null||ga(yt,$,fe,!1)}function ws(t,e,a){var l=nt;nt|=2;var n=go(),i=ho();(yt!==t||$!==e)&&(_i=null,Sl(t,e)),e=!1;var u=St;t:do try{if(st!==0&&F!==null){var s=F,c=ce;switch(st){case 8:Us(),u=6;break t;case 3:case 2:case 9:case 6:ue.current===null&&(e=!0);var p=st;if(st=0,ce=null,xl(t,s,c,p),a&&vl){u=0;break t}break;default:p=st,st=0,ce=null,xl(t,s,c,p)}}sm(),u=St;break}catch(h){mo(t,h)}while(!0);return e&&t.shellSuspendCounter++,Ge=wa=null,nt=l,v.H=n,v.A=i,F===null&&(yt=null,$=0,Ln()),u}function sm(){for(;F!==null;)vo(F)}function cm(t,e){var a=nt;nt|=2;var l=go(),n=ho();yt!==t||$!==e?(_i=null,bi=ee()+500,Sl(t,e)):vl=Ol(t,e);t:do try{if(st!==0&&F!==null){e=F;var i=ce;e:switch(st){case 1:st=0,ce=null,xl(t,e,i,1);break;case 2:case 9:if(Ef(i)){st=0,ce=null,bo(e);break}e=function(){st!==2&&st!==9||yt!==t||(st=7),Ue(t)},i.then(e,e);break t;case 3:st=7;break t;case 4:st=5;break t;case 7:Ef(i)?(st=0,ce=null,bo(e)):(st=0,ce=null,xl(t,e,i,7));break;case 5:var u=null;switch(F.tag){case 26:u=F.memoizedState;case 5:case 27:var s=F;if(u?nd(u):s.stateNode.complete){st=0,ce=null;var c=s.sibling;if(c!==null)F=c;else{var p=s.return;p!==null?(F=p,zi(p)):F=null}break e}}st=0,ce=null,xl(t,e,i,5);break;case 6:st=0,ce=null,xl(t,e,i,6);break;case 8:Us(),St=6;break t;default:throw Error(m(462))}}fm();break}catch(h){mo(t,h)}while(!0);return Ge=wa=null,v.H=l,v.A=n,nt=a,F!==null?0:(yt=null,$=0,Ln(),St)}function fm(){for(;F!==null&&!Rd();)vo(F)}function vo(t){var e=Qr(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?zi(t):F=e}function bo(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=qr(a,e,e.pendingProps,e.type,void 0,$);break;case 11:e=qr(a,e,e.pendingProps,e.type.render,e.ref,$);break;case 5:Fu(e);default:Vr(a,e),e=F=gf(e,We),e=Qr(a,e,We)}t.memoizedProps=t.pendingProps,e===null?zi(t):F=e}function xl(t,e,a,l){Ge=wa=null,Fu(e),ol=null,Jl=0;var n=e.return;try{if($p(t,n,e,a,$)){St=1,ri(t,ye(a,t.current)),F=null;return}}catch(i){if(n!==null)throw F=n,i;St=1,ri(t,ye(a,t.current)),F=null;return}e.flags&32768?(tt||l===1?t=!0:vl||($&536870912)!==0?t=!1:(da=t=!0,(l===2||l===9||l===3||l===6)&&(l=ue.current,l!==null&&l.tag===13&&(l.flags|=16384))),_o(e,t)):zi(e)}function zi(t){var e=t;do{if((e.flags&32768)!==0){_o(e,da);return}t=e.return;var a=tm(e.alternate,e,We);if(a!==null){F=a;return}if(e=e.sibling,e!==null){F=e;return}F=e=t}while(e!==null);St===0&&(St=5)}function _o(t,e){do{var a=em(t.alternate,t);if(a!==null){a.flags&=32767,F=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){F=t;return}F=t=a}while(t!==null);St=6,F=null}function So(t,e,a,l,n,i,u,s,c){t.cancelPendingCommit=null;do Ai();while(Rt!==0);if((nt&6)!==0)throw Error(m(327));if(e!==null){if(e===t.current)throw Error(m(177));if(i=e.lanes|e.childLanes,i|=xu,Ld(t,a,i,u,s,c),t===yt&&(F=yt=null,$=0),_l=e,ya=t,$e=a,Os=i,Ns=n,fo=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,pm(Dn,function(){return Do(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=v.T,v.T=null,n=T.p,T.p=2,u=nt,nt|=4;try{am(t,e,a)}finally{nt=u,T.p=n,v.T=l}}Rt=1,xo(),zo(),Ao()}}function xo(){if(Rt===1){Rt=0;var t=ya,e=_l,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var l=T.p;T.p=2;var n=nt;nt|=4;try{eo(e,t);var i=Ks,u=sf(t.containerInfo),s=i.focusedElem,c=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&uf(s.ownerDocument.documentElement,s)){if(c!==null&&hu(s)){var p=c.start,h=c.end;if(h===void 0&&(h=p),"selectionStart"in s)s.selectionStart=p,s.selectionEnd=Math.min(h,s.value.length);else{var S=s.ownerDocument||document,y=S&&S.defaultView||window;if(y.getSelection){var g=y.getSelection(),E=s.textContent.length,H=Math.min(c.start,E),dt=c.end===void 0?H:Math.min(c.end,E);!g.extend&&H>dt&&(u=dt,dt=H,H=u);var o=nf(s,H),f=nf(s,dt);if(o&&f&&(g.rangeCount!==1||g.anchorNode!==o.node||g.anchorOffset!==o.offset||g.focusNode!==f.node||g.focusOffset!==f.offset)){var d=S.createRange();d.setStart(o.node,o.offset),g.removeAllRanges(),H>dt?(g.addRange(d),g.extend(f.node,f.offset)):(d.setEnd(f.node,f.offset),g.addRange(d))}}}}for(S=[],g=s;g=g.parentNode;)g.nodeType===1&&S.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<S.length;s++){var b=S[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}ji=!!Zs,Ks=Zs=null}finally{nt=n,T.p=l,v.T=a}}t.current=e,Rt=2}}function zo(){if(Rt===2){Rt=0;var t=ya,e=_l,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var l=T.p;T.p=2;var n=nt;nt|=4;try{Wr(t,e.alternate,e)}finally{nt=n,T.p=l,v.T=a}}Rt=3}}function Ao(){if(Rt===4||Rt===3){Rt=0,Ud();var t=ya,e=_l,a=$e,l=fo;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Rt=5:(Rt=0,_l=ya=null,To(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(ma=null),Ii(a),e=e.stateNode,ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(Cl,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=v.T,n=T.p,T.p=2,v.T=null;try{for(var i=t.onRecoverableError,u=0;u<l.length;u++){var s=l[u];i(s.value,{componentStack:s.stack})}}finally{v.T=e,T.p=n}}($e&3)!==0&&Ai(),Ue(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===Rs?on++:(on=0,Rs=t):on=0,dn(0)}}function To(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Zl(e)))}function Ai(){return xo(),zo(),Ao(),Do()}function Do(){if(Rt!==5)return!1;var t=ya,e=Os;Os=0;var a=Ii($e),l=v.T,n=T.p;try{T.p=32>a?32:a,v.T=null,a=Ns,Ns=null;var i=ya,u=$e;if(Rt=0,_l=ya=null,$e=0,(nt&6)!==0)throw Error(m(331));var s=nt;if(nt|=4,uo(i.current),lo(i,i.current,u,a),nt=s,dn(0,!1),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(Cl,i)}catch{}return!0}finally{T.p=n,v.T=l,To(t,e)}}function Eo(t,e,a){e=ye(a,e),e=rs(t.stateNode,e,2),t=ca(t,e,2),t!==null&&(Nl(t,2),Ue(t))}function ct(t,e,a){if(t.tag===3)Eo(t,t,a);else for(;e!==null;){if(e.tag===3){Eo(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ma===null||!ma.has(l))){t=ye(a,t),a=Er(2),l=ca(e,a,2),l!==null&&(Mr(a,l,e,t),Nl(l,2),Ue(l));break}}e=e.return}}function qs(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new im;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(Es=!0,n.add(a),t=rm.bind(null,t,e,a),e.then(t,t))}function rm(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,yt===t&&($&a)===a&&(St===4||St===3&&($&62914560)===$&&300>ee()-vi?(nt&2)===0&&Sl(t,0):Ms|=a,bl===$&&(bl=0)),Ue(t)}function Mo(t,e){e===0&&(e=_c()),t=Na(t,e),t!==null&&(Nl(t,e),Ue(t))}function om(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Mo(t,a)}function dm(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(m(314))}l!==null&&l.delete(e),Mo(t,a)}function pm(t,e){return ki(t,e)}var Ti=null,zl=null,js=!1,Di=!1,Hs=!1,ha=0;function Ue(t){t!==zl&&t.next===null&&(zl===null?Ti=zl=t:zl=zl.next=t),Di=!0,js||(js=!0,ym())}function dn(t,e){if(!Hs&&Di){Hs=!0;do for(var a=!1,l=Ti;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-le(42|t)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Ro(l,i))}else i=$,i=On(l,l===yt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ol(l,i)||(a=!0,Ro(l,i));l=l.next}while(a);Hs=!1}}function mm(){Co()}function Co(){Di=js=!1;var t=0;ha!==0&&Tm()&&(t=ha);for(var e=ee(),a=null,l=Ti;l!==null;){var n=l.next,i=Oo(l,e);i===0?(l.next=null,a===null?Ti=n:a.next=n,n===null&&(zl=a)):(a=l,(t!==0||(i&3)!==0)&&(Di=!0)),l=n}Rt!==0&&Rt!==5||dn(t),ha!==0&&(ha=0)}function Oo(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-le(i),s=1<<u,c=n[u];c===-1?((s&a)===0||(s&l)!==0)&&(n[u]=Qd(s,e)):c<=e&&(t.expiredLanes|=s),i&=~s}if(e=yt,a=$,a=On(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(st===2||st===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Fi(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ol(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&Fi(l),Ii(a)){case 2:case 8:a=vc;break;case 32:a=Dn;break;case 268435456:a=bc;break;default:a=Dn}return l=No.bind(null,t),a=ki(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&Fi(l),t.callbackPriority=2,t.callbackNode=null,2}function No(t,e){if(Rt!==0&&Rt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ai()&&t.callbackNode!==a)return null;var l=$;return l=On(t,t===yt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(oo(t,l,e),Oo(t,ee()),t.callbackNode!=null&&t.callbackNode===a?No.bind(null,t):null)}function Ro(t,e){if(Ai())return null;oo(t,e,!0)}function ym(){Em(function(){(nt&6)!==0?ki(hc,mm):Co()})}function Bs(){if(ha===0){var t=cl;t===0&&(t=En,En<<=1,(En&261888)===0&&(En=256)),ha=t}return ha}function Uo(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wn(""+t)}function wo(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function gm(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=Uo((n[Jt]||null).action),u=l.submitter;u&&(e=(e=u[Jt]||null)?Uo(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var s=new Bn("action","action",null,l,n);t.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ha!==0){var c=u?wo(n,u):new FormData(n);ns(a,{pending:!0,data:c,method:n.method,action:i},null,c)}}else typeof i=="function"&&(s.preventDefault(),c=u?wo(n,u):new FormData(n),ns(a,{pending:!0,data:c,method:n.method,action:i},i,c))},currentTarget:n}]})}}for(var Ys=0;Ys<Su.length;Ys++){var Gs=Su[Ys],hm=Gs.toLowerCase(),vm=Gs[0].toUpperCase()+Gs.slice(1);ze(hm,"on"+vm)}ze(rf,"onAnimationEnd"),ze(of,"onAnimationIteration"),ze(df,"onAnimationStart"),ze("dblclick","onDoubleClick"),ze("focusin","onFocus"),ze("focusout","onBlur"),ze(wp,"onTransitionRun"),ze(qp,"onTransitionStart"),ze(jp,"onTransitionCancel"),ze(pf,"onTransitionEnd"),ka("onMouseEnter",["mouseout","mouseover"]),ka("onMouseLeave",["mouseout","mouseover"]),ka("onPointerEnter",["pointerout","pointerover"]),ka("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pn));function qo(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var u=l.length-1;0<=u;u--){var s=l[u],c=s.instance,p=s.currentTarget;if(s=s.listener,c!==i&&n.isPropagationStopped())break t;i=s,n.currentTarget=p;try{i(n)}catch(h){Qn(h)}n.currentTarget=null,i=c}else for(u=0;u<l.length;u++){if(s=l[u],c=s.instance,p=s.currentTarget,s=s.listener,c!==i&&n.isPropagationStopped())break t;i=s,n.currentTarget=p;try{i(n)}catch(h){Qn(h)}n.currentTarget=null,i=c}}}}function W(t,e){var a=e[Pi];a===void 0&&(a=e[Pi]=new Set);var l=t+"__bubble";a.has(l)||(jo(e,t,2,!1),a.add(l))}function Qs(t,e,a){var l=0;e&&(l|=4),jo(a,t,l,e)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function Ls(t){if(!t[Ei]){t[Ei]=!0,Ec.forEach(function(a){a!=="selectionchange"&&(bm.has(a)||Qs(a,!1,t),Qs(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ei]||(e[Ei]=!0,Qs("selectionchange",!1,e))}}function jo(t,e,a,l){switch(od(e)){case 2:var n=Jm;break;case 8:n=km;break;default:n=lc}a=n.bind(null,e,a,t),n=void 0,!cu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function Vs(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var s=l.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=l.return;u!==null;){var c=u.tag;if((c===3||c===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Za(s),u===null)return;if(c=u.tag,c===5||c===6||c===26||c===27){l=i=u;continue t}s=s.parentNode}}l=l.return}Yc(function(){var p=i,h=uu(a),S=[];t:{var y=mf.get(t);if(y!==void 0){var g=Bn,E=t;switch(t){case"keypress":if(jn(a)===0)break t;case"keydown":case"keyup":g=dp;break;case"focusin":E="focus",g=du;break;case"focusout":E="blur",g=du;break;case"beforeblur":case"afterblur":g=du;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=yp;break;case rf:case of:case df:g=lp;break;case pf:g=hp;break;case"scroll":case"scrollend":g=Id;break;case"wheel":g=bp;break;case"copy":case"cut":case"paste":g=ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Xc;break;case"toggle":case"beforetoggle":g=Sp}var H=(e&4)!==0,dt=!H&&(t==="scroll"||t==="scrollend"),o=H?y!==null?y+"Capture":null:y;H=[];for(var f=p,d;f!==null;){var b=f;if(d=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||d===null||o===null||(b=wl(f,o),b!=null&&H.push(mn(f,b,d))),dt)break;f=f.return}0<H.length&&(y=new g(y,E,null,a,h),S.push({event:y,listeners:H}))}}if((e&7)===0){t:{if(y=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",y&&a!==iu&&(E=a.relatedTarget||a.fromElement)&&(Za(E)||E[Xa]))break t;if((g||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,g?(E=a.relatedTarget||a.toElement,g=p,E=E?Za(E):null,E!==null&&(dt=K(E),H=E.tag,E!==dt||H!==5&&H!==27&&H!==6)&&(E=null)):(g=null,E=p),g!==E)){if(H=Lc,b="onMouseLeave",o="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(H=Xc,b="onPointerLeave",o="onPointerEnter",f="pointer"),dt=g==null?y:Ul(g),d=E==null?y:Ul(E),y=new H(b,f+"leave",g,a,h),y.target=dt,y.relatedTarget=d,b=null,Za(h)===p&&(H=new H(o,f+"enter",E,a,h),H.target=d,H.relatedTarget=dt,b=H),dt=b,g&&E)e:{for(H=_m,o=g,f=E,d=0,b=o;b;b=H(b))d++;b=0;for(var w=f;w;w=H(w))b++;for(;0<d-b;)o=H(o),d--;for(;0<b-d;)f=H(f),b--;for(;d--;){if(o===f||f!==null&&o===f.alternate){H=o;break e}o=H(o),f=H(f)}H=null}else H=null;g!==null&&Ho(S,y,g,H,!1),E!==null&&dt!==null&&Ho(S,dt,E,H,!0)}}t:{if(y=p?Ul(p):window,g=y.nodeName&&y.nodeName.toLowerCase(),g==="select"||g==="input"&&y.type==="file")var et=Ic;else if(Wc(y))if(Pc)et=Np;else{et=Cp;var C=Mp}else g=y.nodeName,!g||g.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?p&&nu(p.elementType)&&(et=Ic):et=Op;if(et&&(et=et(t,p))){$c(S,et,a,h);break t}C&&C(t,y,p),t==="focusout"&&p&&y.type==="number"&&p.memoizedProps.value!=null&&lu(y,"number",y.value)}switch(C=p?Ul(p):window,t){case"focusin":(Wc(C)||C.contentEditable==="true")&&(tl=C,vu=p,Ll=null);break;case"focusout":Ll=vu=tl=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,cf(S,a,h);break;case"selectionchange":if(Up)break;case"keydown":case"keyup":cf(S,a,h)}var Z;if(mu)t:{switch(t){case"compositionstart":var I="onCompositionStart";break t;case"compositionend":I="onCompositionEnd";break t;case"compositionupdate":I="onCompositionUpdate";break t}I=void 0}else Pa?kc(t,a)&&(I="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(Zc&&a.locale!=="ko"&&(Pa||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pa&&(Z=Gc()):(ea=h,fu="value"in ea?ea.value:ea.textContent,Pa=!0)),C=Mi(p,I),0<C.length&&(I=new Vc(I,t,null,a,h),S.push({event:I,listeners:C}),Z?I.data=Z:(Z=Fc(a),Z!==null&&(I.data=Z)))),(Z=zp?Ap(t,a):Tp(t,a))&&(I=Mi(p,"onBeforeInput"),0<I.length&&(C=new Vc("onBeforeInput","beforeinput",null,a,h),S.push({event:C,listeners:I}),C.data=Z)),gm(S,t,p,a,h)}qo(S,e)})}function mn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Mi(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=wl(t,a),n!=null&&l.unshift(mn(t,n,i)),n=wl(t,e),n!=null&&l.push(mn(t,n,i))),t.tag===3)return l;t=t.return}return[]}function _m(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ho(t,e,a,l,n){for(var i=e._reactName,u=[];a!==null&&a!==l;){var s=a,c=s.alternate,p=s.stateNode;if(s=s.tag,c!==null&&c===l)break;s!==5&&s!==26&&s!==27||p===null||(c=p,n?(p=wl(a,i),p!=null&&u.unshift(mn(a,p,c))):n||(p=wl(a,i),p!=null&&u.push(mn(a,p,c)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var Sm=/\r\n?/g,xm=/\u0000|\uFFFD/g;function Bo(t){return(typeof t=="string"?t:""+t).replace(Sm,`
`).replace(xm,"")}function Yo(t,e){return e=Bo(e),Bo(t)===e}function ot(t,e,a,l,n,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Wa(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Wa(t,""+l);break;case"className":Rn(t,"class",l);break;case"tabIndex":Rn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Rn(t,a,l);break;case"style":Hc(t,l,i);break;case"data":if(e!=="object"){Rn(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=wn(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&ot(t,e,"name",n.name,n,null),ot(t,e,"formEncType",n.formEncType,n,null),ot(t,e,"formMethod",n.formMethod,n,null),ot(t,e,"formTarget",n.formTarget,n,null)):(ot(t,e,"encType",n.encType,n,null),ot(t,e,"method",n.method,n,null),ot(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=wn(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=je);break;case"onScroll":l!=null&&W("scroll",t);break;case"onScrollEnd":l!=null&&W("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=wn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":W("beforetoggle",t),W("toggle",t),Nn(t,"popover",l);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Nn(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wd.get(a)||a,Nn(t,a,l))}}function Xs(t,e,a,l,n,i){switch(a){case"style":Hc(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Wa(t,l):(typeof l=="number"||typeof l=="bigint")&&Wa(t,""+l);break;case"onScroll":l!=null&&W("scroll",t);break;case"onScrollEnd":l!=null&&W("scrollend",t);break;case"onClick":l!=null&&(t.onclick=je);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mc.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),i=t[Jt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,n);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Nn(t,a,l)}}}function Gt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",t),W("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:ot(t,e,i,u,a,null)}}n&&ot(t,e,"srcSet",a.srcSet,a,null),l&&ot(t,e,"src",a.src,a,null);return;case"input":W("invalid",t);var s=i=u=n=null,c=null,p=null;for(l in a)if(a.hasOwnProperty(l)){var h=a[l];if(h!=null)switch(l){case"name":n=h;break;case"type":u=h;break;case"checked":c=h;break;case"defaultChecked":p=h;break;case"value":i=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(m(137,e));break;default:ot(t,e,l,h,a,null)}}Uc(t,i,s,c,p,u,n,!1);return;case"select":W("invalid",t),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":l=s;default:ot(t,e,n,s,a,null)}e=i,a=u,t.multiple=!!l,e!=null?Fa(t,!!l,e,!1):a!=null&&Fa(t,!!l,a,!0);return;case"textarea":W("invalid",t),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(m(91));break;default:ot(t,e,u,s,a,null)}qc(t,l,n,i);return;case"option":for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null)&&(c==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":ot(t,e,c,l,a,null));return;case"dialog":W("beforetoggle",t),W("toggle",t),W("cancel",t),W("close",t);break;case"iframe":case"object":W("load",t);break;case"video":case"audio":for(l=0;l<pn.length;l++)W(pn[l],t);break;case"image":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"embed":case"source":case"link":W("error",t),W("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:ot(t,e,p,l,a,null)}return;default:if(nu(e)){for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!==void 0&&Xs(t,e,h,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&ot(t,e,s,l,a,null))}function zm(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,c=null,p=null,h=null;for(g in a){var S=a[g];if(a.hasOwnProperty(g)&&S!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":c=S;default:l.hasOwnProperty(g)||ot(t,e,g,null,l,S)}}for(var y in l){var g=l[y];if(S=a[y],l.hasOwnProperty(y)&&(g!=null||S!=null))switch(y){case"type":i=g;break;case"name":n=g;break;case"checked":p=g;break;case"defaultChecked":h=g;break;case"value":u=g;break;case"defaultValue":s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,e));break;default:g!==S&&ot(t,e,y,g,l,S)}}au(t,u,s,c,p,h,i,n);return;case"select":g=u=s=y=null;for(i in a)if(c=a[i],a.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":g=c;default:l.hasOwnProperty(i)||ot(t,e,i,null,l,c)}for(n in l)if(i=l[n],c=a[n],l.hasOwnProperty(n)&&(i!=null||c!=null))switch(n){case"value":y=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==c&&ot(t,e,n,i,l,c)}e=s,a=u,l=g,y!=null?Fa(t,!!a,y,!1):!!l!=!!a&&(e!=null?Fa(t,!!a,e,!0):Fa(t,!!a,a?[]:"",!1));return;case"textarea":g=y=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ot(t,e,s,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":y=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==i&&ot(t,e,u,n,l,i)}wc(t,y,g);return;case"option":for(var E in a)y=a[E],a.hasOwnProperty(E)&&y!=null&&!l.hasOwnProperty(E)&&(E==="selected"?t.selected=!1:ot(t,e,E,null,l,y));for(c in l)y=l[c],g=a[c],l.hasOwnProperty(c)&&y!==g&&(y!=null||g!=null)&&(c==="selected"?t.selected=y&&typeof y!="function"&&typeof y!="symbol":ot(t,e,c,y,l,g));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in a)y=a[H],a.hasOwnProperty(H)&&y!=null&&!l.hasOwnProperty(H)&&ot(t,e,H,null,l,y);for(p in l)if(y=l[p],g=a[p],l.hasOwnProperty(p)&&y!==g&&(y!=null||g!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,e));break;default:ot(t,e,p,y,l,g)}return;default:if(nu(e)){for(var dt in a)y=a[dt],a.hasOwnProperty(dt)&&y!==void 0&&!l.hasOwnProperty(dt)&&Xs(t,e,dt,void 0,l,y);for(h in l)y=l[h],g=a[h],!l.hasOwnProperty(h)||y===g||y===void 0&&g===void 0||Xs(t,e,h,y,l,g);return}}for(var o in a)y=a[o],a.hasOwnProperty(o)&&y!=null&&!l.hasOwnProperty(o)&&ot(t,e,o,null,l,y);for(S in l)y=l[S],g=a[S],!l.hasOwnProperty(S)||y===g||y==null&&g==null||ot(t,e,S,y,l,g)}function Go(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Am(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&Go(u)){for(u=0,s=n.responseEnd,l+=1;l<a.length;l++){var c=a[l],p=c.startTime;if(p>s)break;var h=c.transferSize,S=c.initiatorType;h&&Go(S)&&(c=c.responseEnd,u+=h*(c<s?1:(s-p)/(c-p)))}if(--l,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Zs=null,Ks=null;function Ci(t){return t.nodeType===9?t:t.ownerDocument}function Qo(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lo(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Js(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ks=null;function Tm(){var t=window.event;return t&&t.type==="popstate"?t===ks?!1:(ks=t,!0):(ks=null,!1)}var Vo=typeof setTimeout=="function"?setTimeout:void 0,Dm=typeof clearTimeout=="function"?clearTimeout:void 0,Xo=typeof Promise=="function"?Promise:void 0,Em=typeof queueMicrotask=="function"?queueMicrotask:typeof Xo<"u"?function(t){return Xo.resolve(null).then(t).catch(Mm)}:Vo;function Mm(t){setTimeout(function(){throw t})}function va(t){return t==="head"}function Zo(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),El(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")yn(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Rl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&yn(t.ownerDocument.body);a=n}while(a);El(e)}function Ko(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Fs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Fs(a),tu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Cm(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Rl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=_e(t.nextSibling),t===null)break}return null}function Om(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_e(t.nextSibling),t===null))return null;return t}function Jo(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=_e(t.nextSibling),t===null))return null;return t}function Ws(t){return t.data==="$?"||t.data==="$~"}function $s(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Nm(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function _e(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Is=null;function ko(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return _e(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Fo(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Wo(t,e,a){switch(e=Ci(a),t){case"html":if(t=e.documentElement,!t)throw Error(m(452));return t;case"head":if(t=e.head,!t)throw Error(m(453));return t;case"body":if(t=e.body,!t)throw Error(m(454));return t;default:throw Error(m(451))}}function yn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);tu(t)}var Se=new Map,$o=new Set;function Oi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ie=T.d;T.d={f:Rm,r:Um,D:wm,C:qm,L:jm,m:Hm,X:Ym,S:Bm,M:Gm};function Rm(){var t=Ie.f(),e=Si();return t||e}function Um(t){var e=Ka(t);e!==null&&e.tag===5&&e.type==="form"?pr(e):Ie.r(t)}var Al=typeof document>"u"?null:document;function Io(t,e,a){var l=Al;if(l&&typeof e=="string"&&e){var n=pe(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),$o.has(n)||($o.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),Gt(e,"link",t),Ut(e),l.head.appendChild(e)))}}function wm(t){Ie.D(t),Io("dns-prefetch",t,null)}function qm(t,e){Ie.C(t,e),Io("preconnect",t,e)}function jm(t,e,a){Ie.L(t,e,a);var l=Al;if(l&&t&&e){var n='link[rel="preload"][as="'+pe(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+pe(a.imageSizes)+'"]')):n+='[href="'+pe(t)+'"]';var i=n;switch(e){case"style":i=Tl(t);break;case"script":i=Dl(t)}Se.has(i)||(t=q({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Se.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(gn(i))||e==="script"&&l.querySelector(hn(i))||(e=l.createElement("link"),Gt(e,"link",t),Ut(e),l.head.appendChild(e)))}}function Hm(t,e){Ie.m(t,e);var a=Al;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+pe(l)+'"][href="'+pe(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Dl(t)}if(!Se.has(i)&&(t=q({rel:"modulepreload",href:t},e),Se.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hn(i)))return}l=a.createElement("link"),Gt(l,"link",t),Ut(l),a.head.appendChild(l)}}}function Bm(t,e,a){Ie.S(t,e,a);var l=Al;if(l&&t){var n=Ja(l).hoistableStyles,i=Tl(t);e=e||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=l.querySelector(gn(i)))s.loading=5;else{t=q({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Se.get(i))&&Ps(t,a);var c=u=l.createElement("link");Ut(c),Gt(c,"link",t),c._p=new Promise(function(p,h){c.onload=p,c.onerror=h}),c.addEventListener("load",function(){s.loading|=1}),c.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ni(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function Ym(t,e){Ie.X(t,e);var a=Al;if(a&&t){var l=Ja(a).hoistableScripts,n=Dl(t),i=l.get(n);i||(i=a.querySelector(hn(n)),i||(t=q({src:t,async:!0},e),(e=Se.get(n))&&tc(t,e),i=a.createElement("script"),Ut(i),Gt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Gm(t,e){Ie.M(t,e);var a=Al;if(a&&t){var l=Ja(a).hoistableScripts,n=Dl(t),i=l.get(n);i||(i=a.querySelector(hn(n)),i||(t=q({src:t,async:!0,type:"module"},e),(e=Se.get(n))&&tc(t,e),i=a.createElement("script"),Ut(i),Gt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Po(t,e,a,l){var n=(n=k.current)?Oi(n):null;if(!n)throw Error(m(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Tl(a.href),a=Ja(n).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Tl(a.href);var i=Ja(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(gn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),Se.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Se.set(t,a),i||Qm(n,t,a,u.state))),e&&l===null)throw Error(m(528,""));return u}if(e&&l!==null)throw Error(m(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Dl(a),a=Ja(n).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,t))}}function Tl(t){return'href="'+pe(t)+'"'}function gn(t){return'link[rel="stylesheet"]['+t+"]"}function td(t){return q({},t,{"data-precedence":t.precedence,precedence:null})}function Qm(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Gt(e,"link",a),Ut(e),t.head.appendChild(e))}function Dl(t){return'[src="'+pe(t)+'"]'}function hn(t){return"script[async]"+t}function ed(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+pe(a.href)+'"]');if(l)return e.instance=l,Ut(l),l;var n=q({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Ut(l),Gt(l,"style",n),Ni(l,a.precedence,t),e.instance=l;case"stylesheet":n=Tl(a.href);var i=t.querySelector(gn(n));if(i)return e.state.loading|=4,e.instance=i,Ut(i),i;l=td(a),(n=Se.get(n))&&Ps(l,n),i=(t.ownerDocument||t).createElement("link"),Ut(i);var u=i;return u._p=new Promise(function(s,c){u.onload=s,u.onerror=c}),Gt(i,"link",l),e.state.loading|=4,Ni(i,a.precedence,t),e.instance=i;case"script":return i=Dl(a.src),(n=t.querySelector(hn(i)))?(e.instance=n,Ut(n),n):(l=a,(n=Se.get(i))&&(l=q({},a),tc(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ut(n),Gt(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(m(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Ni(l,a.precedence,t));return e.instance}function Ni(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var s=l[u];if(s.dataset.precedence===e)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Ps(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function tc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ri=null;function ad(t,e,a){if(Ri===null){var l=new Map,n=Ri=new Map;n.set(a,l)}else n=Ri,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[Rl]||i[jt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var s=l.get(u);s?s.push(i):l.set(u,[i])}}return l}function ld(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Lm(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function nd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Vm(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Tl(l.href),i=e.querySelector(gn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ui.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,Ut(i);return}i=e.ownerDocument||e,l=td(l),(n=Se.get(n))&&Ps(l,n),i=i.createElement("link"),Ut(i);var u=i;u._p=new Promise(function(s,c){u.onload=s,u.onerror=c}),Gt(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ui.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var ec=0;function Xm(t,e){return t.stylesheets&&t.count===0&&qi(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&qi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&ec===0&&(ec=62500*Am());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&qi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>ec?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ui(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wi=null;function qi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wi=new Map,e.forEach(Zm,t),wi=null,Ui.call(t))}function Zm(t,e){if(!(e.state.loading&4)){var a=wi.get(t);if(a)var l=a.get(null);else{a=new Map,wi.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=e.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Ui.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var vn={$$typeof:zt,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Km(t,e,a,l,n,i,u,s,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function id(t,e,a,l,n,i,u,s,c,p,h,S){return t=new Km(t,e,a,u,c,p,h,S,s),e=1,i===!0&&(e|=24),i=ie(3,null,null,e),t.current=i,i.stateNode=t,e=wu(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},Bu(i),t}function ud(t){return t?(t=ll,t):ll}function sd(t,e,a,l,n,i){n=ud(n),l.context===null?l.context=n:l.pendingContext=n,l=sa(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ca(t,l,e),a!==null&&(Pt(a,t,e),Fl(a,t,e))}function cd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function ac(t,e){cd(t,e),(t=t.alternate)&&cd(t,e)}function fd(t){if(t.tag===13||t.tag===31){var e=Na(t,67108864);e!==null&&Pt(e,t,67108864),ac(t,67108864)}}function rd(t){if(t.tag===13||t.tag===31){var e=re();e=$i(e);var a=Na(t,e);a!==null&&Pt(a,t,e),ac(t,e)}}var ji=!0;function Jm(t,e,a,l){var n=v.T;v.T=null;var i=T.p;try{T.p=2,lc(t,e,a,l)}finally{T.p=i,v.T=n}}function km(t,e,a,l){var n=v.T;v.T=null;var i=T.p;try{T.p=8,lc(t,e,a,l)}finally{T.p=i,v.T=n}}function lc(t,e,a,l){if(ji){var n=nc(l);if(n===null)Vs(t,e,l,Hi,a),dd(t,l);else if(Wm(n,t,e,a,l))l.stopPropagation();else if(dd(t,l),e&4&&-1<Fm.indexOf(t)){for(;n!==null;){var i=Ka(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Da(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var c=1<<31-le(u);s.entanglements[1]|=c,u&=~c}Ue(i),(nt&6)===0&&(bi=ee()+500,dn(0))}}break;case 31:case 13:s=Na(i,2),s!==null&&Pt(s,i,2),Si(),ac(i,2)}if(i=nc(l),i===null&&Vs(t,e,l,Hi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Vs(t,e,l,null,a)}}function nc(t){return t=uu(t),ic(t)}var Hi=null;function ic(t){if(Hi=null,t=Za(t),t!==null){var e=K(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=it(e),t!==null)return t;t=null}else if(a===31){if(t=xt(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Hi=t,null}function od(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wd()){case hc:return 2;case vc:return 8;case Dn:case qd:return 32;case bc:return 268435456;default:return 32}default:return 32}}var uc=!1,ba=null,_a=null,Sa=null,bn=new Map,_n=new Map,xa=[],Fm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dd(t,e){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":bn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(e.pointerId)}}function Sn(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Ka(e),e!==null&&fd(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Wm(t,e,a,l,n){switch(e){case"focusin":return ba=Sn(ba,t,e,a,l,n),!0;case"dragenter":return _a=Sn(_a,t,e,a,l,n),!0;case"mouseover":return Sa=Sn(Sa,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,Sn(bn.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,_n.set(i,Sn(_n.get(i)||null,t,e,a,l,n)),!0}return!1}function pd(t){var e=Za(t.target);if(e!==null){var a=K(e);if(a!==null){if(e=a.tag,e===13){if(e=it(a),e!==null){t.blockedOn=e,Tc(t.priority,function(){rd(a)});return}}else if(e===31){if(e=xt(a),e!==null){t.blockedOn=e,Tc(t.priority,function(){rd(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=nc(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);iu=l,a.target.dispatchEvent(l),iu=null}else return e=Ka(a),e!==null&&fd(e),t.blockedOn=a,!1;e.shift()}return!0}function md(t,e,a){Bi(t)&&a.delete(e)}function $m(){uc=!1,ba!==null&&Bi(ba)&&(ba=null),_a!==null&&Bi(_a)&&(_a=null),Sa!==null&&Bi(Sa)&&(Sa=null),bn.forEach(md),_n.forEach(md)}function Yi(t,e){t.blockedOn===e&&(t.blockedOn=null,uc||(uc=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,$m)))}var Gi=null;function yd(t){Gi!==t&&(Gi=t,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){Gi===t&&(Gi=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(ic(l||a)===null)continue;break}var i=Ka(a);i!==null&&(t.splice(e,3),e-=3,ns(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function El(t){function e(c){return Yi(c,t)}ba!==null&&Yi(ba,t),_a!==null&&Yi(_a,t),Sa!==null&&Yi(Sa,t),bn.forEach(e),_n.forEach(e);for(var a=0;a<xa.length;a++){var l=xa[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)pd(a),a.blockedOn===null&&xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Jt]||null;if(typeof i=="function")u||yd(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Jt]||null)s=u.formAction;else if(ic(n)!==null)continue}else s=u.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),yd(a)}}}function gd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function sc(t){this._internalRoot=t}Qi.prototype.render=sc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(m(409));var a=e.current,l=re();sd(a,l,t,e,null,null)},Qi.prototype.unmount=sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;sd(t.current,2,null,t,null,null),Si(),e[Xa]=null}};function Qi(t){this._internalRoot=t}Qi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ac();t={blockedOn:null,target:t,priority:e};for(var a=0;a<xa.length&&e!==0&&e<xa[a].priority;a++);xa.splice(a,0,t),a===0&&pd(t)}};var hd=G.version;if(hd!=="19.2.4")throw Error(m(527,hd,"19.2.4"));T.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(m(188)):(t=Object.keys(t).join(","),Error(m(268,t)));return t=z(e),t=t!==null?P(t):null,t=t===null?null:t.stateNode,t};var Im={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{Cl=Li.inject(Im),ae=Li}catch{}}return zn.createRoot=function(t,e){if(!R(t))throw Error(m(299));var a=!1,l="",n=zr,i=Ar,u=Tr;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=id(t,1,!1,null,null,a,l,null,n,i,u,gd),t[Xa]=e.current,Ls(t),new sc(e)},zn.hydrateRoot=function(t,e,a){if(!R(t))throw Error(m(299));var l=!1,n="",i=zr,u=Ar,s=Tr,c=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),e=id(t,1,!0,e,a??null,l,n,c,i,u,s,gd),e.context=ud(null),a=e.current,l=re(),l=$i(l),n=sa(l),n.callback=null,ca(a,n,l),a=l,e.current.lanes=a,Nl(e,a),Ue(e),t[Xa]=e.current,Ls(t),new Qi(e)},zn.version="19.2.4",zn}var Ed;function cy(){if(Ed)return rc.exports;Ed=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(G){console.error(G)}}return A(),rc.exports=sy(),rc.exports}var fy=cy();const De={chapters:[{id:1,title:"Introduction to Data Science",description:"What is data science and why it matters",lessons:[{id:"1-1",title:"What is Data Science?",duration:"10 min",content:`
## Welcome to Data Science! 📊

Data Science is the art and science of extracting meaningful insights from data. It combines statistics, programming, and domain expertise to solve real-world problems.

### Why Data Science Matters

Every organization generates massive amounts of data:
- **Tech Companies** — User behavior, clicks, purchases
- **Healthcare** — Patient records, medical imaging, drug trials
- **Finance** — Transactions, market data, risk assessment
- **Retail** — Sales, inventory, customer preferences
- **Sports** — Player performance, game statistics

Data Scientists turn this raw data into actionable insights!

### The Data Science Process

| Step | Description | Tools |
|------|-------------|-------|
| **1. Define the Problem** | What question are we trying to answer? | Domain expertise |
| **2. Collect Data** | Gather relevant data from various sources | SQL, APIs, Web scraping |
| **3. Clean Data** | Handle missing values, outliers, inconsistencies | Pandas, NumPy |
| **4. Explore Data** | Understand patterns and relationships | Matplotlib, Seaborn |
| **5. Model Data** | Build predictive or descriptive models | Scikit-learn, TensorFlow |
| **6. Communicate** | Present findings to stakeholders | Jupyter, Dashboards |

### Key Skills for Data Scientists

\`\`\`
Programming:
├── Python (most popular)
├── R (statistics-focused)
├── SQL (database queries)
└── Command Line

Mathematics:
├── Statistics & Probability
├── Linear Algebra
├── Calculus
└── Optimization

Domain Skills:
├── Business Understanding
├── Communication
├── Critical Thinking
└── Visualization
\`\`\`

### Your Data Science Toolkit

\`\`\`python
# Essential Python libraries
import pandas as pd       # Data manipulation
import numpy as np        # Numerical computing
import matplotlib.pyplot as plt  # Visualization
import seaborn as sns     # Statistical visualization
import sklearn            # Machine learning
\`\`\`

<tip>
💡 You don't need to be an expert in everything! Most data scientists specialize in certain areas. Start with Python, Pandas, and basic statistics.
</tip>

### Types of Data Science Problems

**1. Descriptive Analytics** — What happened?
\`\`\`
"Total sales last quarter were $2.5M"
"Website traffic increased by 15%"
\`\`\`

**2. Diagnostic Analytics** — Why did it happen?
\`\`\`
"Sales dropped because of supply chain issues"
"Traffic increased due to viral social media post"
\`\`\`

**3. Predictive Analytics** — What will happen?
\`\`\`
"We predict sales will increase 10% next quarter"
"Customer churn probability is 25%"
\`\`\`

**4. Prescriptive Analytics** — What should we do?
\`\`\`
"Offer a 15% discount to high-churn-risk customers"
"Increase inventory by 20% for the holiday season"
\`\`\`

### Real-World Data Science Applications

| Industry | Application | Impact |
|----------|-------------|--------|
| Netflix | Recommendation system | 75% of watched content |
| Amazon | Dynamic pricing | Billions in revenue |
| Spotify | Discover Weekly | 40M users weekly |
| Healthcare | Disease prediction | Early intervention |
| Finance | Fraud detection | $billions saved |

### Career Paths in Data Science

\`\`\`
Data Analyst
    ↓
Data Scientist
    ↓
Senior Data Scientist
    ↓
Lead/Principal Data Scientist
    ↓
Chief Data Officer

Alternative paths:
├── Machine Learning Engineer
├── Data Engineer
├── Business Intelligence Analyst
└── Research Scientist
\`\`\`

<warning>
⚠️ Data Science is not just about algorithms! Understanding the business problem and communicating results effectively are equally important skills.
</warning>

### Setting Up Your Environment

\`\`\`bash
# Install Python with Anaconda (recommended)
# Download from: https://www.anaconda.com/

# Or use pip
pip install pandas numpy matplotlib seaborn scikit-learn jupyter

# Start Jupyter Notebook
jupyter notebook
\`\`\`

Let's begin your data science journey! 🚀
          `},{id:"1-2",title:"Python Basics for Data Science",duration:"15 min",content:`
## Python Fundamentals for Data Science 🐍

Python is the most popular language for data science. Let's cover the essentials!

### Why Python?

- **Easy to learn** — Clean, readable syntax
- **Rich ecosystem** — Thousands of libraries
- **Community** — Huge support community
- **Versatility** — Web, automation, ML, everything!

### Basic Data Types

\`\`\`python
# Numbers
integer = 42
float_num = 3.14
scientific = 1.5e6  # 1,500,000

# Strings
name = "Data Science"
multiline = """
This is a
multiline string
"""

# Booleans
is_active = True
is_empty = False

# None (null/empty value)
result = None

# Type checking
print(type(42))      # <class 'int'>
print(type(3.14))    # <class 'float'>
print(type("hello")) # <class 'str'>
\`\`\`

### Collections

\`\`\`python
# Lists - ordered, mutable
numbers = [1, 2, 3, 4, 5]
mixed = [1, "two", 3.0, True]
numbers.append(6)
numbers[0] = 100
print(numbers)  # [100, 2, 3, 4, 5, 6]

# Tuples - ordered, immutable
coordinates = (10, 20)
rgb = (255, 128, 0)
# rgb[0] = 200  # Error! Can't modify

# Dictionaries - key-value pairs
person = {
    "name": "Alice",
    "age": 30,
    "city": "NYC"
}
print(person["name"])  # Alice
person["email"] = "alice@email.com"

# Sets - unique values only
unique_nums = {1, 2, 3, 3, 4, 4}
print(unique_nums)  # {1, 2, 3, 4}
\`\`\`

### List Comprehensions

A powerful Python feature for creating lists:

\`\`\`python
# Traditional way
squares = []
for x in range(10):
    squares.append(x ** 2)

# List comprehension (Pythonic way!)
squares = [x ** 2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition
evens = [x for x in range(20) if x % 2 == 0]
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Dictionary comprehension
square_dict = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# With transformation
names = ["alice", "bob", "charlie"]
upper_names = [name.upper() for name in names]
# ['ALICE', 'BOB', 'CHARLIE']
\`\`\`

<tip>
💡 List comprehensions are not just shorter — they're often faster than traditional loops because they're optimized by Python!
</tip>

### Functions

\`\`\`python
# Basic function
def greet(name):
    return f"Hello, {name}!"

print(greet("Data Scientist"))

# Default parameters
def power(base, exponent=2):
    return base ** exponent

print(power(5))      # 25
print(power(5, 3))   # 125

# Multiple return values
def stats(numbers):
    return min(numbers), max(numbers), sum(numbers)/len(numbers)

minimum, maximum, average = stats([1, 2, 3, 4, 5])

# Lambda functions (anonymous)
square = lambda x: x ** 2
add = lambda a, b: a + b

# Useful with map, filter
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x%2==0, numbers))
\`\`\`

### Working with Files

\`\`\`python
# Reading a file
with open('data.txt', 'r') as file:
    content = file.read()
    # or line by line:
    # lines = file.readlines()

# Writing to a file
with open('output.txt', 'w') as file:
    file.write("Hello, World!")

# Reading CSV (basic - use pandas for data science!)
import csv
with open('data.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# JSON
import json
data = {"name": "Alice", "age": 30}
json_string = json.dumps(data)  # To JSON string
parsed = json.loads(json_string)  # From JSON string
\`\`\`

### Error Handling

\`\`\`python
# Try-except blocks
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    print("This always runs")

# Useful for data loading
def safe_load_data(filepath):
    try:
        with open(filepath, 'r') as f:
            return f.read()
    except FileNotFoundError:
        print(f"File not found: {filepath}")
        return None
\`\`\`

### Classes (Object-Oriented Programming)

\`\`\`python
class DataAnalyzer:
    def __init__(self, data):
        self.data = data
        self.cleaned = False
    
    def clean(self):
        # Remove None values
        self.data = [x for x in self.data if x is not None]
        self.cleaned = True
        return self
    
    def summary(self):
        return {
            "count": len(self.data),
            "mean": sum(self.data) / len(self.data),
            "min": min(self.data),
            "max": max(self.data)
        }

# Usage
analyzer = DataAnalyzer([1, 2, None, 4, 5, None, 7])
analyzer.clean()
print(analyzer.summary())
# {'count': 5, 'mean': 3.8, 'min': 1, 'max': 7}
\`\`\`

<warning>
⚠️ While you can write your own data analysis classes, in practice you'll use Pandas which provides all this functionality (and much more) out of the box!
</warning>

Now you have the Python foundation for data science! 🎯
          `}]},{id:2,title:"NumPy Fundamentals",description:"Numerical computing with arrays",lessons:[{id:"2-1",title:"Introduction to NumPy Arrays",duration:"14 min",content:`
## NumPy — The Foundation of Data Science 🔢

NumPy (Numerical Python) is the fundamental library for numerical computing in Python. It provides powerful N-dimensional arrays and mathematical functions.

### Why NumPy?

\`\`\`python
# Python lists are slow for numerical operations
python_list = list(range(1000000))

# NumPy arrays are MUCH faster (10-100x)
import numpy as np
numpy_array = np.arange(1000000)
\`\`\`

| Operation | Python List | NumPy Array |
|-----------|-------------|-------------|
| Element-wise multiply | Loop required | arr * 2 |
| Sum | sum(list) | arr.sum() |
| Mean | sum(list)/len(list) | arr.mean() |
| Speed | Slow | 10-100x faster |

### Creating Arrays

\`\`\`python
import numpy as np

# From Python list
arr = np.array([1, 2, 3, 4, 5])
print(arr)  # [1 2 3 4 5]

# 2D array (matrix)
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])
print(matrix)
# [[1 2 3]
#  [4 5 6]
#  [7 8 9]]

# Specify data type
float_arr = np.array([1, 2, 3], dtype=np.float64)

# Common array creation functions
zeros = np.zeros((3, 4))      # 3x4 array of zeros
ones = np.ones((2, 3))        # 2x3 array of ones
empty = np.empty((2, 2))      # Uninitialized (fast)
full = np.full((3, 3), 7)     # 3x3 array filled with 7

# Sequences
range_arr = np.arange(0, 10, 2)     # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5)     # [0, 0.25, 0.5, 0.75, 1.0]

# Identity matrix
identity = np.eye(3)
# [[1. 0. 0.]
#  [0. 1. 0.]
#  [0. 0. 1.]]

# Random arrays
random = np.random.rand(3, 3)         # Uniform [0, 1)
randn = np.random.randn(3, 3)         # Standard normal
randint = np.random.randint(0, 10, (3, 3))  # Random integers
\`\`\`

### Array Properties

\`\`\`python
arr = np.array([[1, 2, 3], [4, 5, 6]])

print(arr.shape)      # (2, 3) - rows, columns
print(arr.ndim)       # 2 - number of dimensions
print(arr.size)       # 6 - total elements
print(arr.dtype)      # int64 - data type
print(arr.itemsize)   # 8 - bytes per element
print(arr.nbytes)     # 48 - total bytes
\`\`\`

### Indexing and Slicing

\`\`\`python
arr = np.array([10, 20, 30, 40, 50])

# Basic indexing
print(arr[0])      # 10
print(arr[-1])     # 50

# Slicing [start:stop:step]
print(arr[1:4])    # [20 30 40]
print(arr[::2])    # [10 30 50] - every 2nd element
print(arr[::-1])   # [50 40 30 20 10] - reversed

# 2D array indexing
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

print(matrix[0, 0])    # 1
print(matrix[1, 2])    # 6
print(matrix[0])       # [1 2 3] - first row
print(matrix[:, 0])    # [1 4 7] - first column
print(matrix[:2, :2])  # [[1 2], [4 5]] - top-left 2x2

# Boolean indexing
arr = np.array([1, 2, 3, 4, 5, 6])
print(arr[arr > 3])    # [4 5 6]
print(arr[arr % 2 == 0])  # [2 4 6]

# Fancy indexing
print(arr[[0, 2, 4]])  # [1 3 5] - elements at indices 0, 2, 4
\`\`\`

<tip>
💡 NumPy slices return **views**, not copies! Modifying a slice modifies the original array. Use \`.copy()\` if you need a true copy.
</tip>

### Reshaping Arrays

\`\`\`python
arr = np.arange(12)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

# Reshape
reshaped = arr.reshape(3, 4)
print(reshaped)
# [[ 0  1  2  3]
#  [ 4  5  6  7]
#  [ 8  9 10 11]]

# Reshape with -1 (infer dimension)
auto = arr.reshape(2, -1)  # 2 rows, auto-calculate columns
print(auto.shape)  # (2, 6)

# Flatten (multi-D to 1D)
flat = reshaped.flatten()  # Returns copy
ravel = reshaped.ravel()   # Returns view

# Transpose
transposed = reshaped.T
print(transposed.shape)  # (4, 3)

# Add dimension
arr_1d = np.array([1, 2, 3])
row_vector = arr_1d[np.newaxis, :]  # (1, 3)
col_vector = arr_1d[:, np.newaxis]  # (3, 1)
\`\`\`

### Array Mathematics

\`\`\`python
a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

# Element-wise operations
print(a + b)   # [ 6  8 10 12]
print(a - b)   # [-4 -4 -4 -4]
print(a * b)   # [ 5 12 21 32]
print(a / b)   # [0.2  0.33 0.43 0.5]
print(a ** 2)  # [ 1  4  9 16]

# Broadcasting (different shapes)
print(a * 2)   # [2 4 6 8]
print(a + 10)  # [11 12 13 14]

# Aggregations
print(a.sum())    # 10
print(a.mean())   # 2.5
print(a.std())    # 1.118
print(a.min())    # 1
print(a.max())    # 4
print(a.cumsum()) # [ 1  3  6 10] - cumulative sum

# Along axes (for 2D)
matrix = np.array([[1, 2], [3, 4], [5, 6]])
print(matrix.sum(axis=0))  # [9 12] - sum each column
print(matrix.sum(axis=1))  # [3 7 11] - sum each row
\`\`\`

<warning>
⚠️ Be careful with integer division! In NumPy, integer arrays divided by integers still give integers. Use \`a / b.astype(float)\` if you need decimal results.
</warning>

NumPy is the foundation — master it before moving to Pandas! 💪
          `},{id:"2-2",title:"Advanced NumPy Operations",duration:"12 min",content:`
## Advanced NumPy — Broadcasting, Linear Algebra & More 🔬

Let's explore more powerful NumPy features used in data science and machine learning.

### Broadcasting Rules

Broadcasting allows NumPy to perform operations on arrays with different shapes:

\`\`\`python
import numpy as np

# Scalar broadcast
arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr * 2)
# [[ 2  4  6]
#  [ 8 10 12]]

# 1D with 2D
row = np.array([1, 2, 3])
matrix = np.array([[1, 1, 1], [2, 2, 2], [3, 3, 3]])
print(matrix + row)
# [[2 3 4]
#  [3 4 5]
#  [4 5 6]]

# Column broadcast
col = np.array([[10], [20], [30]])
print(matrix + col)
# [[11 11 11]
#  [22 22 22]
#  [33 33 33]]
\`\`\`

\`\`\`
Broadcasting Rules:
1. If arrays have different ndim, prepend 1s to smaller shape
2. Arrays with size 1 along a dimension act as if they had the size of the larger array
3. An error is raised if sizes don't match and neither is 1

Example:
(3, 4) + (4,) → (3, 4) + (1, 4) → Valid!
(3, 4) + (3,) → Error! 4 != 3
\`\`\`

### Linear Algebra

\`\`\`python
import numpy as np

# Matrix multiplication
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Using @ operator (Python 3.5+)
print(A @ B)
# [[19 22]
#  [43 50]]

# Using np.dot
print(np.dot(A, B))  # Same result

# Matrix-vector multiplication
v = np.array([1, 2])
print(A @ v)  # [ 5 11]

# Transpose
print(A.T)
# [[1 3]
#  [2 4]]

# Determinant
print(np.linalg.det(A))  # -2.0

# Inverse
print(np.linalg.inv(A))
# [[-2.   1. ]
#  [ 1.5 -0.5]]

# Eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)
print("Eigenvalues:", eigenvalues)

# Solve linear equations (Ax = b)
A = np.array([[3, 1], [1, 2]])
b = np.array([9, 8])
x = np.linalg.solve(A, b)
print(x)  # [2. 3.] → 3*2 + 1*3 = 9, 1*2 + 2*3 = 8
\`\`\`

<tip>
💡 Matrix multiplication with \`@\` is much more readable than \`np.dot()\`. Use it for cleaner code!
</tip>

### Statistical Functions

\`\`\`python
data = np.random.randn(1000)  # 1000 random normal values

# Basic statistics
print(f"Mean: {np.mean(data):.4f}")
print(f"Median: {np.median(data):.4f}")
print(f"Std Dev: {np.std(data):.4f}")
print(f"Variance: {np.var(data):.4f}")

# Percentiles
print(f"25th percentile: {np.percentile(data, 25):.4f}")
print(f"75th percentile: {np.percentile(data, 75):.4f}")

# Min, Max, Range
print(f"Min: {np.min(data):.4f}")
print(f"Max: {np.max(data):.4f}")
print(f"Range: {np.ptp(data):.4f}")  # peak to peak

# Correlation coefficient
x = np.random.randn(100)
y = x * 2 + np.random.randn(100) * 0.5
correlation = np.corrcoef(x, y)
print(f"Correlation: {correlation[0, 1]:.4f}")

# Histogram bins
hist, bin_edges = np.histogram(data, bins=10)
print("Bin counts:", hist)
\`\`\`

### Conditional Logic

\`\`\`python
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# np.where - conditional selection
result = np.where(arr > 5, arr, 0)
print(result)  # [ 0  0  0  0  0  6  7  8  9 10]

# Multiple conditions
result = np.where(arr > 7, "high",
          np.where(arr > 3, "medium", "low"))
print(result)
# ['low' 'low' 'low' 'medium' 'medium' 'medium' 'medium' 'high' 'high' 'high']

# np.select for multiple conditions
conditions = [
    arr < 3,
    (arr >= 3) & (arr < 7),
    arr >= 7
]
choices = ["low", "medium", "high"]
result = np.select(conditions, choices)
print(result)

# Clip values (limit range)
print(np.clip(arr, 3, 8))  # [3 3 3 4 5 6 7 8 8 8]
\`\`\`

### Sorting and Searching

\`\`\`python
arr = np.array([3, 1, 4, 1, 5, 9, 2, 6])

# Sort (returns copy)
sorted_arr = np.sort(arr)
print(sorted_arr)  # [1 1 2 3 4 5 6 9]

# Sort in-place
arr_copy = arr.copy()
arr_copy.sort()

# Get sorted indices
indices = np.argsort(arr)
print(indices)  # [1 3 6 0 2 4 7 5]
print(arr[indices])  # Sorted array

# Reverse sort
print(arr[np.argsort(arr)[::-1]])  # Descending

# Find unique values
arr2 = np.array([1, 2, 2, 3, 3, 3, 4])
print(np.unique(arr2))  # [1 2 3 4]
print(np.unique(arr2, return_counts=True))
# (array([1, 2, 3, 4]), array([1, 2, 3, 1]))

# Search sorted (for binary search in sorted array)
sorted_arr = np.array([1, 3, 5, 7, 9])
print(np.searchsorted(sorted_arr, 4))  # 2 (insert position)
\`\`\`

### Stacking and Splitting

\`\`\`python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Vertical stack (row-wise)
print(np.vstack([a, b]))
# [[1 2 3]
#  [4 5 6]]

# Horizontal stack (column-wise)
print(np.hstack([a, b]))
# [1 2 3 4 5 6]

# Column stack
print(np.column_stack([a, b]))
# [[1 4]
#  [2 5]
#  [3 6]]

# Concatenate along axis
matrix = np.array([[1, 2], [3, 4]])
print(np.concatenate([matrix, matrix], axis=0))  # Vertical
print(np.concatenate([matrix, matrix], axis=1))  # Horizontal

# Splitting
arr = np.arange(12).reshape(3, 4)
print(np.hsplit(arr, 2))  # Split into 2 horizontally
print(np.vsplit(arr, 3))  # Split into 3 vertically
\`\`\`

<warning>
⚠️ NumPy operations often return views, not copies. Be careful when modifying arrays — you might accidentally change the original!
</warning>

You now have a solid NumPy foundation! 🎓
          `}]},{id:3,title:"Pandas Essentials",description:"Data manipulation and analysis",lessons:[{id:"3-1",title:"Introduction to Pandas",duration:"15 min",content:`
## Pandas — The Data Analysis Powerhouse 🐼

Pandas is THE library for data manipulation and analysis in Python. It provides two main data structures: Series (1D) and DataFrame (2D).

### Series — 1D Labeled Array

\`\`\`python
import pandas as pd
import numpy as np

# Create Series from list
s = pd.Series([10, 20, 30, 40, 50])
print(s)
# 0    10
# 1    20
# 2    30
# 3    40
# 4    50
# dtype: int64

# Custom index
s = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
print(s['b'])  # 20

# From dictionary
d = {'apple': 100, 'banana': 200, 'cherry': 150}
s = pd.Series(d)
print(s)

# Series operations
print(s.sum())      # 450
print(s.mean())     # 150
print(s.max())      # 200
print(s > 100)      # Boolean Series
\`\`\`

### DataFrame — 2D Labeled Data

\`\`\`python
# Create DataFrame from dictionary
data = {
    'name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'age': [25, 30, 35, 28],
    'city': ['NYC', 'LA', 'Chicago', 'NYC'],
    'salary': [50000, 60000, 70000, 55000]
}
df = pd.DataFrame(data)
print(df)
#       name  age     city  salary
# 0    Alice   25      NYC   50000
# 1      Bob   30       LA   60000
# 2  Charlie   35  Chicago   70000
# 3    Diana   28      NYC   55000

# Basic information
print(df.shape)      # (4, 4)
print(df.columns)    # Index(['name', 'age', 'city', 'salary'])
print(df.dtypes)     # Data types per column
print(df.info())     # Summary info
print(df.describe()) # Statistical summary
\`\`\`

### Reading and Writing Data

\`\`\`python
# CSV files
df = pd.read_csv('data.csv')
df.to_csv('output.csv', index=False)

# Excel files
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')
df.to_excel('output.xlsx', index=False)

# JSON
df = pd.read_json('data.json')
df.to_json('output.json')

# From URL
url = 'https://example.com/data.csv'
df = pd.read_csv(url)

# Reading large files
df = pd.read_csv('large_file.csv', 
                 nrows=1000,        # Read only first 1000 rows
                 usecols=['col1', 'col2'])  # Only specific columns
\`\`\`

<tip>
💡 Use \`pd.read_csv('file.csv', nrows=5)\` to quickly peek at large files without loading everything into memory!
</tip>

### Selecting Data

\`\`\`python
# Select column
print(df['name'])           # Returns Series
print(df[['name', 'age']])  # Returns DataFrame

# Select rows by index
print(df.loc[0])            # By label
print(df.iloc[0])           # By position
print(df.loc[0:2])          # Label-based slicing (inclusive!)
print(df.iloc[0:2])         # Position-based slicing (exclusive)

# Select specific cell
print(df.loc[0, 'name'])    # 'Alice'
print(df.iloc[0, 0])        # 'Alice'

# Select multiple rows and columns
print(df.loc[0:2, ['name', 'city']])
print(df.iloc[0:2, [0, 2]])

# Boolean selection (filtering)
print(df[df['age'] > 28])
print(df[df['city'] == 'NYC'])

# Multiple conditions
print(df[(df['age'] > 25) & (df['salary'] > 55000)])
print(df[(df['city'] == 'NYC') | (df['city'] == 'LA')])

# isin for multiple values
print(df[df['city'].isin(['NYC', 'LA'])])

# Query method (SQL-like)
print(df.query('age > 28 and salary > 50000'))
\`\`\`

### Adding and Modifying Columns

\`\`\`python
# Add new column
df['bonus'] = df['salary'] * 0.1
df['full_name'] = df['name'] + ' Smith'

# Conditional column
df['senior'] = df['age'] >= 30
df['level'] = np.where(df['salary'] > 60000, 'high', 'low')

# Apply function to column
df['name_length'] = df['name'].apply(len)
df['name_upper'] = df['name'].str.upper()

# Multiple conditions with np.select
conditions = [
    df['salary'] < 55000,
    (df['salary'] >= 55000) & (df['salary'] < 65000),
    df['salary'] >= 65000
]
choices = ['low', 'medium', 'high']
df['salary_level'] = np.select(conditions, choices)

# Rename columns
df = df.rename(columns={'name': 'full_name', 'city': 'location'})

# Drop columns
df = df.drop(columns=['bonus', 'level'])
\`\`\`

### Sorting Data

\`\`\`python
# Sort by column
df_sorted = df.sort_values('age')
df_sorted = df.sort_values('salary', ascending=False)

# Sort by multiple columns
df_sorted = df.sort_values(['city', 'age'], ascending=[True, False])

# Sort by index
df_sorted = df.sort_index()

# Get top/bottom N
print(df.nlargest(3, 'salary'))
print(df.nsmallest(3, 'age'))
\`\`\`

<warning>
⚠️ Most Pandas operations return a NEW DataFrame. Use \`inplace=True\` to modify the original, or reassign: \`df = df.sort_values('age')\`
</warning>

### Handling Missing Data

\`\`\`python
# Check for missing values
print(df.isnull().sum())  # Count per column
print(df.isnull().any())  # Any missing per column?

# Drop rows with missing values
df_clean = df.dropna()
df_clean = df.dropna(subset=['age', 'salary'])  # Only check specific columns

# Fill missing values
df['salary'] = df['salary'].fillna(0)
df['salary'] = df['salary'].fillna(df['salary'].mean())
df['city'] = df['city'].fillna('Unknown')

# Forward/backward fill
df['value'] = df['value'].fillna(method='ffill')  # Forward fill
df['value'] = df['value'].fillna(method='bfill')  # Backward fill

# Interpolate
df['value'] = df['value'].interpolate()
\`\`\`

Pandas is your best friend for data analysis! 🤝
          `},{id:"3-2",title:"Advanced Pandas Operations",duration:"15 min",content:`
## Advanced Pandas — GroupBy, Merge, and Pivot 🔥

Let's master the operations that make Pandas truly powerful!

### GroupBy — Split-Apply-Combine

\`\`\`python
import pandas as pd
import numpy as np

# Sample data
df = pd.DataFrame({
    'city': ['NYC', 'LA', 'NYC', 'Chicago', 'LA', 'NYC'],
    'department': ['Sales', 'Sales', 'IT', 'IT', 'IT', 'Sales'],
    'salary': [50000, 60000, 70000, 65000, 55000, 75000],
    'years': [2, 5, 3, 4, 1, 6]
})

# Basic groupby
print(df.groupby('city')['salary'].mean())
# city
# Chicago    65000
# LA         57500
# NYC        65000

# Multiple aggregations
print(df.groupby('city')['salary'].agg(['mean', 'min', 'max', 'count']))

# Group by multiple columns
print(df.groupby(['city', 'department'])['salary'].mean())

# Multiple columns, multiple aggregations
agg_result = df.groupby('city').agg({
    'salary': ['mean', 'sum'],
    'years': ['mean', 'max']
})
print(agg_result)

# Named aggregations (cleaner output)
result = df.groupby('city').agg(
    avg_salary=('salary', 'mean'),
    total_salary=('salary', 'sum'),
    employee_count=('salary', 'count'),
    avg_years=('years', 'mean')
)
print(result)

# Custom aggregation function
def salary_range(x):
    return x.max() - x.min()

print(df.groupby('city')['salary'].agg(salary_range))
\`\`\`

<tip>
💡 GroupBy operations are lazy — they don't compute until you apply an aggregation function. This makes chaining efficient!
</tip>

### Transform and Apply

\`\`\`python
# Transform - returns same-sized output
df['salary_normalized'] = df.groupby('city')['salary'].transform(
    lambda x: (x - x.mean()) / x.std()
)

# Calculate percentage of group total
df['pct_of_city_total'] = df.groupby('city')['salary'].transform(
    lambda x: x / x.sum() * 100
)

# Fill missing with group mean
df['salary'] = df.groupby('city')['salary'].transform(
    lambda x: x.fillna(x.mean())
)

# Apply - flexible function application
def get_top_earner(group):
    return group.loc[group['salary'].idxmax()]

top_earners = df.groupby('city').apply(get_top_earner)
print(top_earners)
\`\`\`

### Merging DataFrames (Joins)

\`\`\`python
# Sample DataFrames
employees = pd.DataFrame({
    'emp_id': [1, 2, 3, 4],
    'name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'dept_id': [10, 20, 10, 30]
})

departments = pd.DataFrame({
    'dept_id': [10, 20, 40],
    'dept_name': ['Engineering', 'Marketing', 'HR']
})

# Inner join (only matching rows)
merged = pd.merge(employees, departments, on='dept_id', how='inner')
print(merged)
#    emp_id     name  dept_id    dept_name
# 0       1    Alice       10  Engineering
# 1       3  Charlie       10  Engineering
# 2       2      Bob       20    Marketing

# Left join (all from left, matching from right)
merged = pd.merge(employees, departments, on='dept_id', how='left')
# Diana's dept_name will be NaN

# Right join (all from right, matching from left)
merged = pd.merge(employees, departments, on='dept_id', how='right')
# HR department will have NaN for employee info

# Outer join (all rows from both)
merged = pd.merge(employees, departments, on='dept_id', how='outer')

# Different column names
sales = pd.DataFrame({
    'emp_no': [1, 2, 3],
    'sales': [100, 200, 150]
})
merged = pd.merge(employees, sales, left_on='emp_id', right_on='emp_no')
\`\`\`

### Concatenating DataFrames

\`\`\`python
df1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
df2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})

# Vertical concatenation (stack)
combined = pd.concat([df1, df2], ignore_index=True)
print(combined)
#    A  B
# 0  1  3
# 1  2  4
# 2  5  7
# 3  6  8

# Horizontal concatenation
combined = pd.concat([df1, df2], axis=1)

# With different columns
df3 = pd.DataFrame({'A': [1, 2], 'C': [5, 6]})
combined = pd.concat([df1, df3])  # B and C will have NaN
\`\`\`

### Pivot Tables

\`\`\`python
# Sample sales data
sales = pd.DataFrame({
    'date': ['2024-01', '2024-01', '2024-02', '2024-02', '2024-01', '2024-02'],
    'product': ['A', 'B', 'A', 'B', 'A', 'A'],
    'region': ['East', 'East', 'East', 'West', 'West', 'West'],
    'revenue': [100, 150, 120, 200, 90, 110]
})

# Pivot table
pivot = pd.pivot_table(
    sales,
    values='revenue',
    index='product',
    columns='region',
    aggfunc='sum'
)
print(pivot)
# region    East  West
# product              
# A          220   200
# B          150   200

# Multiple aggregations
pivot = pd.pivot_table(
    sales,
    values='revenue',
    index='product',
    columns='region',
    aggfunc=['sum', 'mean', 'count']
)

# With margins (totals)
pivot = pd.pivot_table(
    sales,
    values='revenue',
    index='product',
    columns='region',
    aggfunc='sum',
    margins=True,
    margins_name='Total'
)
\`\`\`

### Reshaping Data

\`\`\`python
# Melt (wide to long format)
df_wide = pd.DataFrame({
    'name': ['Alice', 'Bob'],
    'math': [90, 85],
    'science': [88, 92]
})

df_long = pd.melt(df_wide, 
                  id_vars=['name'],
                  value_vars=['math', 'science'],
                  var_name='subject',
                  value_name='score')
print(df_long)
#     name  subject  score
# 0  Alice     math     90
# 1    Bob     math     85
# 2  Alice  science     88
# 3    Bob  science     92

# Pivot (long to wide format)
df_wide_again = df_long.pivot(index='name', columns='subject', values='score')
\`\`\`

<warning>
⚠️ When merging large DataFrames, be careful about memory! Use \`merge\` indicators (\`indicator=True\`) to debug join issues.
</warning>

You can now wrangle any dataset! 💪
          `}]},{id:4,title:"Data Cleaning",description:"Preparing real-world messy data",lessons:[{id:"4-1",title:"Handling Messy Data",duration:"14 min",content:`
## Data Cleaning — The 80% of Data Science 🧹

Real-world data is MESSY. Data scientists spend most of their time cleaning data. Let's master this essential skill!

### Common Data Problems

\`\`\`
1. Missing values
2. Duplicate rows
3. Inconsistent formatting
4. Wrong data types
5. Outliers
6. Inconsistent categories
7. Encoding issues
\`\`\`

### Exploring Your Data First

\`\`\`python
import pandas as pd
import numpy as np

# Load data
df = pd.read_csv('messy_data.csv')

# First look
print(df.head())        # First 5 rows
print(df.tail())        # Last 5 rows
print(df.sample(5))     # Random 5 rows
print(df.shape)         # (rows, columns)

# Data types
print(df.dtypes)
print(df.info())

# Statistical summary
print(df.describe())        # Numerical columns
print(df.describe(include='all'))  # All columns

# Check for missing values
print(df.isnull().sum())
print(df.isnull().sum() / len(df) * 100)  # Percentage missing

# Unique values
for col in df.columns:
    print(f"{col}: {df[col].nunique()} unique values")
\`\`\`

### Handling Missing Values

\`\`\`python
# Identify patterns
import seaborn as sns
import matplotlib.pyplot as plt

# Visualize missing data
sns.heatmap(df.isnull(), cbar=True, yticklabels=False)
plt.title('Missing Values Pattern')
plt.show()

# Strategy 1: Drop rows with missing values
df_clean = df.dropna()                    # Drop all rows with any NaN
df_clean = df.dropna(thresh=3)            # Keep rows with at least 3 non-NaN values
df_clean = df.dropna(subset=['age', 'income'])  # Drop only if these columns are NaN

# Strategy 2: Fill with constants
df['category'] = df['category'].fillna('Unknown')
df['quantity'] = df['quantity'].fillna(0)

# Strategy 3: Fill with statistics
df['age'] = df['age'].fillna(df['age'].mean())
df['age'] = df['age'].fillna(df['age'].median())  # Better for skewed data

# Strategy 4: Fill by group
df['age'] = df.groupby('city')['age'].transform(
    lambda x: x.fillna(x.median())
)

# Strategy 5: Forward/backward fill (time series)
df['value'] = df['value'].fillna(method='ffill')

# Strategy 6: Interpolation
df['temperature'] = df['temperature'].interpolate(method='linear')
\`\`\`

<tip>
💡 The best strategy depends on your data! For critical analyses, dropping rows is safest. For machine learning, filling with median often works well.
</tip>

### Handling Duplicates

\`\`\`python
# Check for duplicates
print(df.duplicated().sum())  # Count of duplicate rows

# View duplicates
print(df[df.duplicated(keep=False)])  # All duplicates

# Drop duplicates
df_clean = df.drop_duplicates()  # Keep first occurrence
df_clean = df.drop_duplicates(keep='last')  # Keep last
df_clean = df.drop_duplicates(keep=False)   # Remove ALL duplicates

# Duplicates based on specific columns
df_clean = df.drop_duplicates(subset=['name', 'email'])

# Find duplicates in specific column
print(df[df['email'].duplicated(keep=False)])
\`\`\`

### Fixing Data Types

\`\`\`python
# Check current types
print(df.dtypes)

# Convert to numeric (coerce errors to NaN)
df['age'] = pd.to_numeric(df['age'], errors='coerce')
df['price'] = pd.to_numeric(df['price'].str.replace('$', '').str.replace(',', ''))

# Convert to datetime
df['date'] = pd.to_datetime(df['date'])
df['date'] = pd.to_datetime(df['date'], format='%m/%d/%Y')
df['date'] = pd.to_datetime(df['date'], errors='coerce')

# Convert to categorical (memory efficient)
df['category'] = df['category'].astype('category')

# Convert boolean
df['is_active'] = df['is_active'].map({'Yes': True, 'No': False, 'Y': True, 'N': False})

# Extract components from datetime
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day_of_week'] = df['date'].dt.day_name()
\`\`\`

### String Cleaning

\`\`\`python
# Access string methods with .str
df['name'] = df['name'].str.strip()        # Remove whitespace
df['name'] = df['name'].str.lower()        # Lowercase
df['name'] = df['name'].str.upper()        # Uppercase
df['name'] = df['name'].str.title()        # Title Case

# Replace patterns
df['phone'] = df['phone'].str.replace('-', '')
df['phone'] = df['phone'].str.replace(r'[^0-9]', '', regex=True)

# Extract with regex
df['area_code'] = df['phone'].str.extract(r'\\((\\d{3})\\)')

# Split strings
df[['first_name', 'last_name']] = df['full_name'].str.split(' ', n=1, expand=True)

# Contains
df['has_gmail'] = df['email'].str.contains('@gmail.com')

# Fix inconsistent categories
df['city'] = df['city'].str.strip().str.title()
# Before: [' new york', 'New York', 'NEW YORK ', 'new york']
# After:  ['New York', 'New York', 'New York', 'New York']
\`\`\`

### Standardizing Categories

\`\`\`python
# Check unique values
print(df['status'].unique())
# ['Active', 'active', 'ACTIVE', 'inactive', 'Inactive', 'pending']

# Map to standard values
status_map = {
    'Active': 'active',
    'active': 'active',
    'ACTIVE': 'active',
    'inactive': 'inactive',
    'Inactive': 'inactive',
    'pending': 'pending'
}
df['status'] = df['status'].map(status_map)

# Or use replace
df['status'] = df['status'].str.lower().replace({
    'actve': 'active',  # Fix typos too
    'activ': 'active'
})

# Fuzzy matching for messy categories
from fuzzywuzzy import process

def match_category(value, choices, threshold=80):
    match, score = process.extractOne(value, choices)
    return match if score >= threshold else value

standard_cities = ['New York', 'Los Angeles', 'Chicago']
df['city'] = df['city'].apply(lambda x: match_category(x, standard_cities))
\`\`\`

<warning>
⚠️ Always validate your cleaning operations! Compare row counts, check value distributions, and verify that transformations preserved data integrity.
</warning>

Clean data = reliable analysis! 🎯
          `},{id:"4-2",title:"Outliers and Validation",duration:"12 min",content:`
## Outliers and Data Validation 🔍

Outliers can skew your analysis and break your models. Let's learn to detect and handle them!

### Detecting Outliers

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Sample data with outliers
np.random.seed(42)
data = np.random.normal(100, 15, 1000)
data = np.append(data, [200, 250, 10, 5])  # Add outliers
df = pd.DataFrame({'value': data})

# Visual detection
fig, axes = plt.subplots(1, 3, figsize=(15, 4))

# Box plot
axes[0].boxplot(df['value'])
axes[0].set_title('Box Plot')

# Histogram
axes[1].hist(df['value'], bins=50)
axes[1].set_title('Histogram')

# Scatter plot (with index)
axes[2].scatter(range(len(df)), df['value'], alpha=0.5)
axes[2].set_title('Scatter Plot')

plt.tight_layout()
plt.show()
\`\`\`

### Statistical Methods for Outliers

\`\`\`python
# Method 1: Z-Score
from scipy import stats

z_scores = np.abs(stats.zscore(df['value']))
outliers_zscore = df[z_scores > 3]  # More than 3 std from mean
print(f"Z-Score outliers: {len(outliers_zscore)}")

# Method 2: IQR (Interquartile Range)
Q1 = df['value'].quantile(0.25)
Q3 = df['value'].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

outliers_iqr = df[(df['value'] < lower_bound) | (df['value'] > upper_bound)]
print(f"IQR outliers: {len(outliers_iqr)}")
print(f"Bounds: [{lower_bound:.2f}, {upper_bound:.2f}]")

# Method 3: Percentile-based
lower = df['value'].quantile(0.01)
upper = df['value'].quantile(0.99)
outliers_pct = df[(df['value'] < lower) | (df['value'] > upper)]
\`\`\`

<tip>
💡 IQR method is more robust to outliers than Z-Score, since it uses median-based statistics rather than mean/std.
</tip>

### Handling Outliers

\`\`\`python
# Option 1: Remove outliers
df_clean = df[(df['value'] >= lower_bound) & (df['value'] <= upper_bound)]

# Option 2: Cap/Floor (Winsorization)
df['value_capped'] = df['value'].clip(lower=lower_bound, upper=upper_bound)

# Option 3: Replace with NaN and impute
df['value_nan'] = df['value'].copy()
df.loc[(df['value'] < lower_bound) | (df['value'] > upper_bound), 'value_nan'] = np.nan
df['value_imputed'] = df['value_nan'].fillna(df['value_nan'].median())

# Option 4: Log transform (for right-skewed data)
df['value_log'] = np.log1p(df['value'])  # log(1+x) handles zeros

# Option 5: Separate analysis
outliers_df = df[(df['value'] < lower_bound) | (df['value'] > upper_bound)]
normal_df = df[(df['value'] >= lower_bound) & (df['value'] <= upper_bound)]
\`\`\`

### Data Validation

\`\`\`python
# Create validation functions
def validate_dataframe(df):
    issues = []
    
    # Check for missing values
    missing = df.isnull().sum()
    if missing.any():
        issues.append(f"Missing values: {dict(missing[missing > 0])}")
    
    # Check for duplicates
    dupes = df.duplicated().sum()
    if dupes > 0:
        issues.append(f"Duplicate rows: {dupes}")
    
    # Check data types
    if df['age'].dtype != 'int64' and df['age'].dtype != 'float64':
        issues.append("Age should be numeric")
    
    # Check value ranges
    if df['age'].min() < 0 or df['age'].max() > 150:
        issues.append("Age values out of reasonable range")
    
    if (df['email'].str.contains('@') == False).any():
        issues.append("Invalid email addresses found")
    
    return issues

# Run validation
issues = validate_dataframe(df)
if issues:
    print("Data validation failed:")
    for issue in issues:
        print(f"  - {issue}")
else:
    print("Data validation passed!")
\`\`\`

### Using Assertions

\`\`\`python
# Assert statements for data quality checks
def clean_and_validate(df):
    # Make a copy
    df = df.copy()
    
    # Clean
    df['age'] = pd.to_numeric(df['age'], errors='coerce')
    df['email'] = df['email'].str.lower().str.strip()
    
    # Validate with assertions
    assert df['age'].between(0, 150).all() or df['age'].isna().any(), \\
        "Age values out of range"
    assert df['email'].str.contains('@').all() or df['email'].isna().any(), \\
        "Invalid email format found"
    assert len(df) > 0, "DataFrame is empty after cleaning"
    
    return df

# Use try-except for production
try:
    df_clean = clean_and_validate(df)
    print("Data cleaned successfully!")
except AssertionError as e:
    print(f"Validation error: {e}")
\`\`\`

### Creating a Data Quality Report

\`\`\`python
def data_quality_report(df):
    report = {
        'Total Rows': len(df),
        'Total Columns': len(df.columns),
        'Duplicate Rows': df.duplicated().sum(),
        'Total Missing Values': df.isnull().sum().sum(),
        'Missing Percentage': f"{df.isnull().sum().sum() / df.size * 100:.2f}%",
    }
    
    # Per column stats
    column_stats = []
    for col in df.columns:
        stats = {
            'Column': col,
            'Type': str(df[col].dtype),
            'Missing': df[col].isnull().sum(),
            'Missing %': f"{df[col].isnull().sum() / len(df) * 100:.1f}%",
            'Unique': df[col].nunique(),
            'Sample Values': str(df[col].dropna().head(3).tolist())[:50]
        }
        column_stats.append(stats)
    
    print("=== DATA QUALITY REPORT ===")
    for key, value in report.items():
        print(f"{key}: {value}")
    
    print("\\n=== COLUMN STATISTICS ===")
    col_df = pd.DataFrame(column_stats)
    print(col_df.to_string(index=False))
    
    return report, col_df

report, col_stats = data_quality_report(df)
\`\`\`

<warning>
⚠️ Document your data cleaning decisions! Future analysts (including future you) need to understand why certain values were removed or modified.
</warning>

Clean, validated data is the foundation of trustworthy analysis! ✅
          `}]},{id:5,title:"Data Visualization",description:"Creating compelling charts and graphs",lessons:[{id:"5-1",title:"Matplotlib Fundamentals",duration:"14 min",content:`
## Matplotlib — The Foundation of Python Visualization 📈

Matplotlib is the most widely used plotting library in Python. Master it and you can create any visualization!

### Basic Plotting

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

# Simple line plot
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y)
plt.title('Sine Wave')
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.grid(True)
plt.show()

# Multiple lines
plt.figure(figsize=(10, 6))
plt.plot(x, np.sin(x), label='sin(x)')
plt.plot(x, np.cos(x), label='cos(x)')
plt.legend()
plt.title('Trigonometric Functions')
plt.show()
\`\`\`

### Line Styles and Colors

\`\`\`python
# Line styles
plt.figure(figsize=(10, 6))
plt.plot(x, y, 'r-', linewidth=2, label='solid red')
plt.plot(x, y + 0.5, 'b--', linewidth=2, label='dashed blue')
plt.plot(x, y + 1, 'g:', linewidth=2, label='dotted green')
plt.plot(x, y + 1.5, 'm-.', linewidth=2, label='dash-dot magenta')
plt.legend()
plt.show()

# Format string: 'color marker linestyle'
# Colors: r g b c m y k w
# Markers: . o ^ s * + x
# Lines: - -- -. :

# With markers
plt.plot(x[::10], y[::10], 'ro-', markersize=8, label='with markers')
\`\`\`

### Scatter Plots

\`\`\`python
# Basic scatter
np.random.seed(42)
x = np.random.randn(100)
y = x + np.random.randn(100) * 0.5

plt.figure(figsize=(10, 6))
plt.scatter(x, y, c='blue', alpha=0.6, edgecolors='black')
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Scatter Plot')
plt.show()

# Colored by third variable
colors = np.random.randn(100)
sizes = np.abs(colors) * 100

plt.figure(figsize=(10, 6))
scatter = plt.scatter(x, y, c=colors, s=sizes, cmap='viridis', alpha=0.6)
plt.colorbar(scatter, label='Color Value')
plt.title('Scatter with Color and Size')
plt.show()
\`\`\`

### Bar Charts

\`\`\`python
# Vertical bars
categories = ['A', 'B', 'C', 'D', 'E']
values = [23, 45, 56, 78, 32]

plt.figure(figsize=(10, 6))
plt.bar(categories, values, color='steelblue', edgecolor='black')
plt.xlabel('Category')
plt.ylabel('Value')
plt.title('Bar Chart')
plt.show()

# Horizontal bars
plt.figure(figsize=(10, 6))
plt.barh(categories, values, color='coral')
plt.xlabel('Value')
plt.ylabel('Category')
plt.title('Horizontal Bar Chart')
plt.show()

# Grouped bars
x = np.arange(len(categories))
width = 0.35
values2 = [30, 35, 45, 65, 40]

plt.figure(figsize=(10, 6))
plt.bar(x - width/2, values, width, label='Group 1')
plt.bar(x + width/2, values2, width, label='Group 2')
plt.xticks(x, categories)
plt.legend()
plt.title('Grouped Bar Chart')
plt.show()
\`\`\`

<tip>
💡 Use \`plt.tight_layout()\` before \`plt.show()\` to automatically adjust spacing and prevent label cutoffs!
</tip>

### Histograms

\`\`\`python
# Basic histogram
data = np.random.randn(1000)

plt.figure(figsize=(10, 6))
plt.hist(data, bins=30, color='steelblue', edgecolor='black', alpha=0.7)
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Histogram')
plt.show()

# Multiple histograms
data1 = np.random.normal(0, 1, 1000)
data2 = np.random.normal(2, 1.5, 1000)

plt.figure(figsize=(10, 6))
plt.hist(data1, bins=30, alpha=0.5, label='Data 1')
plt.hist(data2, bins=30, alpha=0.5, label='Data 2')
plt.legend()
plt.title('Overlapping Histograms')
plt.show()
\`\`\`

### Subplots

\`\`\`python
# Multiple plots in one figure
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Plot 1
axes[0, 0].plot(x, np.sin(x))
axes[0, 0].set_title('Sine')

# Plot 2
axes[0, 1].plot(x, np.cos(x), 'r')
axes[0, 1].set_title('Cosine')

# Plot 3
axes[1, 0].scatter(np.random.randn(50), np.random.randn(50))
axes[1, 0].set_title('Scatter')

# Plot 4
axes[1, 1].bar(['A', 'B', 'C'], [3, 7, 5])
axes[1, 1].set_title('Bar')

plt.tight_layout()
plt.show()

# Different sized subplots
fig = plt.figure(figsize=(12, 8))
ax1 = fig.add_subplot(2, 2, 1)  # Top left
ax2 = fig.add_subplot(2, 2, 2)  # Top right
ax3 = fig.add_subplot(2, 1, 2)  # Bottom (spans both columns)

ax1.plot(x, np.sin(x))
ax2.plot(x, np.cos(x))
ax3.plot(x, np.tan(x))
plt.tight_layout()
plt.show()
\`\`\`

### Customization

\`\`\`python
# Professional styling
plt.style.use('seaborn-v0_8-whitegrid')  # Or: 'ggplot', 'dark_background'

fig, ax = plt.subplots(figsize=(10, 6))

# Plot with customization
ax.plot(x, np.sin(x), color='#2ecc71', linewidth=2.5, label='sin(x)')

# Customize axes
ax.set_xlim(0, 10)
ax.set_ylim(-1.5, 1.5)
ax.set_xlabel('Time (s)', fontsize=12)
ax.set_ylabel('Amplitude', fontsize=12)
ax.set_title('Customized Sine Wave', fontsize=14, fontweight='bold')

# Grid
ax.grid(True, linestyle='--', alpha=0.7)

# Legend
ax.legend(loc='upper right', frameon=True, shadow=True)

# Annotations
ax.annotate('Peak', xy=(np.pi/2, 1), xytext=(2, 1.2),
            arrowprops=dict(arrowstyle='->', color='red'),
            fontsize=10)

# Spines
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

plt.tight_layout()
plt.savefig('my_plot.png', dpi=300, bbox_inches='tight')
plt.show()
\`\`\`

<warning>
⚠️ Always call \`plt.savefig()\` BEFORE \`plt.show()\`! After showing, the figure is cleared.
</warning>

Matplotlib gives you complete control over every aspect of your visualizations! 🎨
          `},{id:"5-2",title:"Seaborn for Statistical Visualization",duration:"14 min",content:`
## Seaborn — Beautiful Statistical Graphics 📊

Seaborn is built on Matplotlib and makes statistical visualization easy and beautiful!

### Setup and Styling

\`\`\`python
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# Set style
sns.set_theme(style="whitegrid")  # darkgrid, white, dark, ticks

# Load example dataset
tips = sns.load_dataset('tips')
print(tips.head())
#    total_bill   tip     sex smoker  day    time  size
# 0       16.99  1.01  Female     No  Sun  Dinner     2
# 1       10.34  1.66    Male     No  Sun  Dinner     3
\`\`\`

### Distribution Plots

\`\`\`python
# Histogram + KDE
plt.figure(figsize=(10, 6))
sns.histplot(tips['total_bill'], kde=True, bins=30)
plt.title('Distribution of Total Bill')
plt.show()

# KDE only
plt.figure(figsize=(10, 6))
sns.kdeplot(data=tips, x='total_bill', hue='time', fill=True)
plt.title('Bill Distribution by Time')
plt.show()

# Multiple distributions
plt.figure(figsize=(10, 6))
sns.histplot(data=tips, x='total_bill', hue='day', multiple='stack')
plt.title('Bills by Day')
plt.show()
\`\`\`

### Categorical Plots

\`\`\`python
# Box plot
plt.figure(figsize=(10, 6))
sns.boxplot(data=tips, x='day', y='total_bill', hue='time')
plt.title('Bill Distribution by Day and Time')
plt.show()

# Violin plot (box + KDE)
plt.figure(figsize=(10, 6))
sns.violinplot(data=tips, x='day', y='total_bill', hue='sex', split=True)
plt.title('Bill Distribution by Day and Sex')
plt.show()

# Strip plot (individual points)
plt.figure(figsize=(10, 6))
sns.stripplot(data=tips, x='day', y='total_bill', hue='sex', dodge=True, alpha=0.7)
plt.title('Individual Bills by Day')
plt.show()

# Swarm plot (no overlap)
plt.figure(figsize=(10, 6))
sns.swarmplot(data=tips, x='day', y='total_bill', hue='sex', dodge=True)
plt.title('Swarm Plot of Bills')
plt.show()

# Bar plot (with confidence intervals)
plt.figure(figsize=(10, 6))
sns.barplot(data=tips, x='day', y='total_bill', hue='sex', errorbar='sd')
plt.title('Average Bill by Day and Sex')
plt.show()
\`\`\`

<tip>
💡 Combine strip/swarm plots with box/violin plots to show both distribution and individual points!
</tip>

### Relationship Plots

\`\`\`python
# Scatter plot with regression
plt.figure(figsize=(10, 6))
sns.regplot(data=tips, x='total_bill', y='tip', scatter_kws={'alpha': 0.5})
plt.title('Tip vs Total Bill with Regression Line')
plt.show()

# Scatter with multiple variables
plt.figure(figsize=(10, 6))
sns.scatterplot(data=tips, x='total_bill', y='tip', 
                hue='time', style='sex', size='size',
                sizes=(50, 200), alpha=0.7)
plt.title('Tip vs Total Bill (Multiple Variables)')
plt.show()

# lmplot - regression by groups
g = sns.lmplot(data=tips, x='total_bill', y='tip', 
               hue='time', col='sex', height=5)
g.fig.suptitle('Regression by Time and Sex', y=1.02)
plt.show()

# Joint plot (scatter + marginal histograms)
sns.jointplot(data=tips, x='total_bill', y='tip', kind='hex')
plt.show()

# Pair plot (all pairwise relationships)
sns.pairplot(tips, hue='time', height=2.5)
plt.show()
\`\`\`

### Heatmaps

\`\`\`python
# Correlation heatmap
plt.figure(figsize=(8, 6))
correlation = tips.select_dtypes(include=[np.number]).corr()
sns.heatmap(correlation, annot=True, cmap='coolwarm', center=0)
plt.title('Correlation Heatmap')
plt.show()

# Pivot table heatmap
pivot = tips.pivot_table(values='tip', index='day', columns='time', aggfunc='mean')
plt.figure(figsize=(8, 6))
sns.heatmap(pivot, annot=True, fmt='.2f', cmap='YlGnBu')
plt.title('Average Tip by Day and Time')
plt.show()

# Clustermap (with hierarchical clustering)
sns.clustermap(correlation, annot=True, cmap='coolwarm', center=0)
plt.show()
\`\`\`

### FacetGrid for Multi-Plot Grids

\`\`\`python
# Create a grid of plots
g = sns.FacetGrid(tips, col='time', row='sex', height=4)
g.map(sns.histplot, 'total_bill')
g.add_legend()
plt.show()

# With custom function
g = sns.FacetGrid(tips, col='day', col_wrap=2, height=4)
g.map_dataframe(sns.scatterplot, x='total_bill', y='tip', hue='sex')
g.add_legend()
plt.show()

# catplot - categorical FacetGrid
g = sns.catplot(data=tips, x='day', y='total_bill', 
                hue='sex', col='time',
                kind='box', height=5)
plt.show()

# relplot - relational FacetGrid
g = sns.relplot(data=tips, x='total_bill', y='tip',
                hue='sex', style='smoker', col='time',
                kind='scatter', height=5)
plt.show()
\`\`\`

### Saving Publication-Ready Figures

\`\`\`python
# High-quality figure
fig, ax = plt.subplots(figsize=(10, 6), dpi=150)
sns.boxplot(data=tips, x='day', y='total_bill', hue='time', ax=ax)
ax.set_xlabel('Day of Week', fontsize=12)
ax.set_ylabel('Total Bill ($)', fontsize=12)
ax.set_title('Restaurant Bills by Day', fontsize=14, fontweight='bold')
ax.legend(title='Meal Time')

# Save in multiple formats
fig.savefig('bills_by_day.png', dpi=300, bbox_inches='tight')
fig.savefig('bills_by_day.pdf', bbox_inches='tight')
fig.savefig('bills_by_day.svg', bbox_inches='tight')
plt.show()
\`\`\`

<warning>
⚠️ When presenting, consider colorblind-friendly palettes! Use \`sns.color_palette('colorblind')\` or \`cmap='viridis'\`.
</warning>

Seaborn makes beautiful statistical visualizations effortless! ✨
          `}]},{id:6,title:"Exploratory Data Analysis",description:"Discovering insights in your data",lessons:[{id:"6-1",title:"EDA Workflow",duration:"15 min",content:`
## Exploratory Data Analysis — Finding Stories in Data 🔍

EDA is the process of investigating data to discover patterns, spot anomalies, and form hypotheses. It's where the magic begins!

### The EDA Checklist

\`\`\`
✅ 1. Load and inspect the data
✅ 2. Understand data types and structure
✅ 3. Check for missing values
✅ 4. Analyze distributions (univariate)
✅ 5. Explore relationships (bivariate)
✅ 6. Look for patterns (multivariate)
✅ 7. Identify outliers and anomalies
✅ 8. Document findings and questions
\`\`\`

### Step 1: Initial Inspection

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
df = pd.read_csv('sales_data.csv')

# First look
print("Shape:", df.shape)
print("\\nFirst few rows:")
print(df.head())

print("\\nColumn types:")
print(df.dtypes)

print("\\nBasic info:")
print(df.info())

print("\\nStatistical summary:")
print(df.describe())

# For categorical columns
print("\\nCategorical summary:")
print(df.describe(include=['object']))
\`\`\`

### Step 2: Missing Value Analysis

\`\`\`python
# Count missing values
missing = df.isnull().sum()
missing_pct = (df.isnull().sum() / len(df) * 100).round(2)

missing_df = pd.DataFrame({
    'Missing Count': missing,
    'Missing %': missing_pct
}).sort_values('Missing %', ascending=False)

print(missing_df[missing_df['Missing Count'] > 0])

# Visualize missing data
plt.figure(figsize=(12, 6))
sns.heatmap(df.isnull(), cbar=True, yticklabels=False, cmap='viridis')
plt.title('Missing Value Pattern')
plt.show()

# Check if missing values are random (MCAR) or systematic
# Compare distributions with and without missing
for col in df.columns[df.isnull().any()]:
    print(f"\\n{col} - Distribution of other features when {col} is missing vs not missing:")
    df_missing = df[df[col].isnull()]
    df_not_missing = df[df[col].notna()]
    # Compare means of numeric columns
    for num_col in df.select_dtypes(include=[np.number]).columns:
        if num_col != col:
            print(f"  {num_col}: {df_missing[num_col].mean():.2f} vs {df_not_missing[num_col].mean():.2f}")
\`\`\`

### Step 3: Univariate Analysis

\`\`\`python
# Numeric columns - distribution
numeric_cols = df.select_dtypes(include=[np.number]).columns

fig, axes = plt.subplots(len(numeric_cols), 2, figsize=(14, 4*len(numeric_cols)))

for i, col in enumerate(numeric_cols):
    # Histogram
    axes[i, 0].hist(df[col].dropna(), bins=30, edgecolor='black', alpha=0.7)
    axes[i, 0].set_title(f'{col} - Distribution')
    axes[i, 0].axvline(df[col].mean(), color='red', linestyle='--', label='Mean')
    axes[i, 0].axvline(df[col].median(), color='green', linestyle='--', label='Median')
    axes[i, 0].legend()
    
    # Box plot
    axes[i, 1].boxplot(df[col].dropna())
    axes[i, 1].set_title(f'{col} - Box Plot')

plt.tight_layout()
plt.show()

# Categorical columns - value counts
categorical_cols = df.select_dtypes(include=['object']).columns

for col in categorical_cols:
    print(f"\\n{col}:")
    print(df[col].value_counts())
    print(f"Unique values: {df[col].nunique()}")
    
    # Bar plot
    plt.figure(figsize=(10, 4))
    df[col].value_counts().head(20).plot(kind='bar')
    plt.title(f'{col} - Value Counts')
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()
\`\`\`

<tip>
💡 Compare mean vs median! If they're very different, your data is skewed. Median is more robust to outliers.
</tip>

### Step 4: Bivariate Analysis

\`\`\`python
# Numeric vs Numeric - correlation
correlation = df.select_dtypes(include=[np.number]).corr()

plt.figure(figsize=(12, 10))
mask = np.triu(np.ones_like(correlation, dtype=bool))
sns.heatmap(correlation, mask=mask, annot=True, fmt='.2f', 
            cmap='RdBu_r', center=0, square=True)
plt.title('Correlation Matrix')
plt.show()

# Find strong correlations
strong_corr = []
for i in range(len(correlation.columns)):
    for j in range(i):
        if abs(correlation.iloc[i, j]) > 0.5:
            strong_corr.append({
                'Var1': correlation.columns[i],
                'Var2': correlation.columns[j],
                'Correlation': correlation.iloc[i, j]
            })

print("Strong correlations (|r| > 0.5):")
print(pd.DataFrame(strong_corr).sort_values('Correlation', key=abs, ascending=False))

# Scatter plots for strong correlations
for corr in strong_corr[:5]:  # Top 5
    plt.figure(figsize=(8, 6))
    sns.regplot(data=df, x=corr['Var1'], y=corr['Var2'])
    plt.title(f"{corr['Var1']} vs {corr['Var2']} (r={corr['Correlation']:.2f})")
    plt.show()
\`\`\`

### Step 5: Categorical vs Numeric Analysis

\`\`\`python
# For each categorical column, analyze numeric distribution
target_numeric = 'sales'  # Your main numeric variable

for cat_col in categorical_cols:
    if df[cat_col].nunique() < 10:  # Only for low cardinality
        fig, axes = plt.subplots(1, 2, figsize=(14, 5))
        
        # Box plot
        df.boxplot(column=target_numeric, by=cat_col, ax=axes[0])
        axes[0].set_title(f'{target_numeric} by {cat_col}')
        
        # Mean comparison
        df.groupby(cat_col)[target_numeric].mean().plot(kind='bar', ax=axes[1])
        axes[1].set_title(f'Mean {target_numeric} by {cat_col}')
        
        plt.suptitle('')
        plt.tight_layout()
        plt.show()
        
        # Statistical test
        from scipy import stats
        groups = [group[target_numeric].dropna().values 
                  for name, group in df.groupby(cat_col)]
        if len(groups) == 2:
            stat, p_value = stats.ttest_ind(*groups)
            print(f"T-test for {cat_col}: p-value = {p_value:.4f}")
        else:
            stat, p_value = stats.f_oneway(*groups)
            print(f"ANOVA for {cat_col}: p-value = {p_value:.4f}")
\`\`\`

<warning>
⚠️ Correlation ≠ Causation! Just because two variables are correlated doesn't mean one causes the other.
</warning>

EDA reveals the story hidden in your data! 📖
          `},{id:"6-2",title:"Advanced EDA Techniques",duration:"12 min",content:`
## Advanced EDA — Deeper Insights 🔬

Let's explore more sophisticated techniques for understanding your data!

### Time Series Analysis

\`\`\`python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Convert to datetime
df['date'] = pd.to_datetime(df['date'])
df = df.set_index('date').sort_index()

# Time series plot
plt.figure(figsize=(14, 6))
plt.plot(df.index, df['sales'])
plt.title('Sales Over Time')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.show()

# Resample to different frequencies
daily = df['sales']
weekly = df['sales'].resample('W').mean()
monthly = df['sales'].resample('M').mean()

fig, axes = plt.subplots(3, 1, figsize=(14, 10))
daily.plot(ax=axes[0], title='Daily')
weekly.plot(ax=axes[1], title='Weekly Average')
monthly.plot(ax=axes[2], title='Monthly Average')
plt.tight_layout()
plt.show()

# Decomposition (trend, seasonal, residual)
from statsmodels.tsa.seasonal import seasonal_decompose

result = seasonal_decompose(monthly.dropna(), model='additive', period=12)

fig, axes = plt.subplots(4, 1, figsize=(14, 10))
result.observed.plot(ax=axes[0], title='Observed')
result.trend.plot(ax=axes[1], title='Trend')
result.seasonal.plot(ax=axes[2], title='Seasonal')
result.resid.plot(ax=axes[3], title='Residual')
plt.tight_layout()
plt.show()

# Rolling statistics
df['rolling_mean'] = df['sales'].rolling(window=7).mean()
df['rolling_std'] = df['sales'].rolling(window=7).std()

plt.figure(figsize=(14, 6))
plt.plot(df.index, df['sales'], label='Actual', alpha=0.5)
plt.plot(df.index, df['rolling_mean'], label='7-day Mean', color='red')
plt.fill_between(df.index, 
                 df['rolling_mean'] - 2*df['rolling_std'],
                 df['rolling_mean'] + 2*df['rolling_std'],
                 alpha=0.2, color='red', label='±2 std')
plt.legend()
plt.title('Sales with Rolling Statistics')
plt.show()
\`\`\`

### Segmentation Analysis

\`\`\`python
# Customer segmentation example
# RFM Analysis (Recency, Frequency, Monetary)

# Calculate RFM metrics
today = df['order_date'].max()
rfm = df.groupby('customer_id').agg({
    'order_date': lambda x: (today - x.max()).days,  # Recency
    'order_id': 'count',  # Frequency
    'amount': 'sum'  # Monetary
}).rename(columns={
    'order_date': 'recency',
    'order_id': 'frequency',
    'amount': 'monetary'
})

# Create quartile-based scores
rfm['R_score'] = pd.qcut(rfm['recency'], 4, labels=[4, 3, 2, 1])  # Lower is better
rfm['F_score'] = pd.qcut(rfm['frequency'].rank(method='first'), 4, labels=[1, 2, 3, 4])
rfm['M_score'] = pd.qcut(rfm['monetary'].rank(method='first'), 4, labels=[1, 2, 3, 4])

rfm['RFM_score'] = rfm['R_score'].astype(str) + rfm['F_score'].astype(str) + rfm['M_score'].astype(str)

# Segment customers
def segment_customer(row):
    if row['R_score'] >= 3 and row['F_score'] >= 3 and row['M_score'] >= 3:
        return 'Champions'
    elif row['R_score'] >= 3 and row['F_score'] >= 2:
        return 'Loyal Customers'
    elif row['R_score'] >= 3 and row['M_score'] >= 3:
        return 'Potential Loyalists'
    elif row['R_score'] <= 2 and row['F_score'] >= 3:
        return 'At Risk'
    elif row['R_score'] <= 2 and row['F_score'] <= 2:
        return 'Lost'
    else:
        return 'Others'

rfm['segment'] = rfm.apply(segment_customer, axis=1)
print(rfm['segment'].value_counts())

# Visualize segments
plt.figure(figsize=(10, 6))
rfm['segment'].value_counts().plot(kind='bar')
plt.title('Customer Segments')
plt.xticks(rotation=45)
plt.show()
\`\`\`

<tip>
💡 RFM analysis is a powerful technique used in marketing. It helps identify who your best customers are and who needs attention!
</tip>

### Feature Engineering for EDA

\`\`\`python
# Create derived features
df['date'] = pd.to_datetime(df['date'])

# Time-based features
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day_of_week'] = df['date'].dt.dayofweek
df['day_name'] = df['date'].dt.day_name()
df['is_weekend'] = df['day_of_week'].isin([5, 6])
df['quarter'] = df['date'].dt.quarter

# Binning continuous variables
df['age_group'] = pd.cut(df['age'], 
                         bins=[0, 18, 35, 50, 65, 100],
                         labels=['Under 18', '18-35', '36-50', '51-65', '65+'])

df['income_bracket'] = pd.qcut(df['income'], 
                               q=5, 
                               labels=['Very Low', 'Low', 'Medium', 'High', 'Very High'])

# Interaction features
df['value_per_unit'] = df['total_value'] / df['quantity']
df['price_to_income'] = df['price'] / df['income']

# Analyze new features
for col in ['day_name', 'is_weekend', 'age_group', 'quarter']:
    plt.figure(figsize=(10, 5))
    df.groupby(col)['sales'].mean().plot(kind='bar')
    plt.title(f'Average Sales by {col}')
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()
\`\`\`

### Automated EDA Tools

\`\`\`python
# pandas-profiling (ydata-profiling)
from ydata_profiling import ProfileReport

profile = ProfileReport(df, title='Data Analysis Report', explorative=True)
profile.to_file('eda_report.html')

# Sweetviz
import sweetviz as sv

report = sv.analyze(df)
report.show_html('sweetviz_report.html')

# Compare two datasets
report = sv.compare([df_train, 'Training'], [df_test, 'Testing'])
report.show_html('comparison_report.html')

# D-Tale (interactive)
import dtale
d = dtale.show(df)
d.open_browser()
\`\`\`

### Creating an EDA Summary Report

\`\`\`python
def generate_eda_summary(df, target=None):
    """Generate a text summary of EDA findings."""
    summary = []
    
    summary.append(f"Dataset has {df.shape[0]:,} rows and {df.shape[1]} columns.")
    
    # Missing values
    missing = df.isnull().sum().sum()
    if missing > 0:
        summary.append(f"Total missing values: {missing:,} ({missing/df.size*100:.1f}%)")
    else:
        summary.append("No missing values found.")
    
    # Duplicates
    dupes = df.duplicated().sum()
    summary.append(f"Duplicate rows: {dupes:,}")
    
    # Numeric summary
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    summary.append(f"\\nNumeric columns ({len(numeric_cols)}): {', '.join(numeric_cols)}")
    
    # Categorical summary
    cat_cols = df.select_dtypes(include=['object']).columns
    summary.append(f"Categorical columns ({len(cat_cols)}): {', '.join(cat_cols)}")
    
    # Skewed columns
    skewed = []
    for col in numeric_cols:
        skew = df[col].skew()
        if abs(skew) > 1:
            skewed.append(f"{col} (skew={skew:.2f})")
    if skewed:
        summary.append(f"\\nHighly skewed columns: {', '.join(skewed)}")
    
    # Target variable insights
    if target and target in df.columns:
        summary.append(f"\\nTarget: {target}")
        summary.append(f"  Mean: {df[target].mean():.2f}")
        summary.append(f"  Median: {df[target].median():.2f}")
        summary.append(f"  Std: {df[target].std():.2f}")
    
    return "\\n".join(summary)

print(generate_eda_summary(df, target='sales'))
\`\`\`

<warning>
⚠️ Automated EDA tools are great for quick overviews, but don't replace domain expertise and critical thinking!
</warning>

EDA is an iterative process — keep exploring! 🔄
          `}]},{id:7,title:"Statistical Analysis",description:"Making data-driven decisions",lessons:[{id:"7-1",title:"Descriptive Statistics",duration:"12 min",content:`
## Descriptive Statistics — Summarizing Your Data 📏

Descriptive statistics help you understand and communicate the key characteristics of your data.

### Measures of Central Tendency

\`\`\`python
import pandas as pd
import numpy as np
from scipy import stats

data = [23, 25, 27, 28, 29, 30, 31, 35, 45, 100]

# Mean - average value
mean = np.mean(data)
print(f"Mean: {mean:.2f}")  # 37.3 (affected by outlier 100)

# Median - middle value
median = np.median(data)
print(f"Median: {median:.2f}")  # 29.5 (robust to outliers)

# Mode - most frequent value
mode = stats.mode(data, keepdims=True)
print(f"Mode: {mode.mode[0]}")  # All unique, no real mode

# Trimmed mean - mean after removing extremes
trimmed = stats.trim_mean(data, 0.1)  # Remove 10% from each end
print(f"Trimmed Mean (10%): {trimmed:.2f}")

# When to use which?
# Mean: Symmetric data, no outliers
# Median: Skewed data, outliers present
# Mode: Categorical data, finding most common value
\`\`\`

### Measures of Spread

\`\`\`python
# Variance - average squared deviation from mean
variance = np.var(data, ddof=1)  # ddof=1 for sample variance
print(f"Variance: {variance:.2f}")

# Standard deviation - square root of variance
std = np.std(data, ddof=1)
print(f"Standard Deviation: {std:.2f}")

# Range
range_val = np.max(data) - np.min(data)
print(f"Range: {range_val}")

# Interquartile Range (IQR) - robust to outliers
q75, q25 = np.percentile(data, [75, 25])
iqr = q75 - q25
print(f"IQR: {iqr}")
print(f"Q1: {q25}, Q3: {q75}")

# Coefficient of Variation (CV) - relative variability
cv = (std / mean) * 100
print(f"CV: {cv:.2f}%")

# Mean Absolute Deviation (MAD)
mad = np.mean(np.abs(data - np.mean(data)))
print(f"MAD: {mad:.2f}")
\`\`\`

<tip>
💡 Use IQR instead of standard deviation when outliers are present. IQR focuses on the middle 50% of data!
</tip>

### Shape Measures

\`\`\`python
# Skewness - asymmetry of distribution
skew = stats.skew(data)
print(f"Skewness: {skew:.2f}")
# Positive: Right-tailed (mean > median)
# Negative: Left-tailed (mean < median)
# Near 0: Symmetric

# Kurtosis - "tailedness" of distribution
kurt = stats.kurtosis(data)
print(f"Kurtosis: {kurt:.2f}")
# Positive: Heavy tails (more outliers than normal)
# Negative: Light tails (fewer outliers than normal)
# Near 0: Similar to normal distribution

# Visualize skewness
import matplotlib.pyplot as plt
import seaborn as sns

fig, axes = plt.subplots(1, 3, figsize=(15, 4))

# Right-skewed
right_skewed = np.random.exponential(2, 1000)
axes[0].hist(right_skewed, bins=30, edgecolor='black')
axes[0].set_title(f'Right Skewed (skew={stats.skew(right_skewed):.2f})')

# Symmetric
symmetric = np.random.normal(0, 1, 1000)
axes[1].hist(symmetric, bins=30, edgecolor='black')
axes[1].set_title(f'Symmetric (skew={stats.skew(symmetric):.2f})')

# Left-skewed
left_skewed = -np.random.exponential(2, 1000)
axes[2].hist(left_skewed, bins=30, edgecolor='black')
axes[2].set_title(f'Left Skewed (skew={stats.skew(left_skewed):.2f})')

plt.tight_layout()
plt.show()
\`\`\`

### Percentiles and Quantiles

\`\`\`python
# Percentiles
percentiles = [10, 25, 50, 75, 90, 95, 99]
for p in percentiles:
    print(f"{p}th percentile: {np.percentile(data, p):.2f}")

# Five-number summary
print("\\nFive-number summary:")
print(f"  Min: {np.min(data)}")
print(f"  Q1: {np.percentile(data, 25)}")
print(f"  Median: {np.median(data)}")
print(f"  Q3: {np.percentile(data, 75)}")
print(f"  Max: {np.max(data)}")

# Using Pandas describe
df = pd.DataFrame({'values': data})
print(df.describe())
\`\`\`

### Grouped Statistics

\`\`\`python
# Statistics by group
df = pd.DataFrame({
    'category': ['A', 'A', 'B', 'B', 'C', 'C', 'A', 'B', 'C'],
    'value': [10, 15, 20, 25, 30, 35, 12, 22, 32]
})

# Multiple statistics per group
stats_by_group = df.groupby('category')['value'].agg([
    'count',
    'mean',
    'std',
    'min',
    ('q25', lambda x: x.quantile(0.25)),
    'median',
    ('q75', lambda x: x.quantile(0.75)),
    'max'
])
print(stats_by_group)

# Custom aggregation
def describe_group(x):
    return pd.Series({
        'mean': x.mean(),
        'std': x.std(),
        'cv': x.std() / x.mean() * 100,
        'skew': x.skew(),
        'n': len(x)
    })

detailed_stats = df.groupby('category')['value'].apply(describe_group).unstack()
print(detailed_stats)
\`\`\`

<warning>
⚠️ Always report measures of spread along with central tendency! A mean without standard deviation tells only half the story.
</warning>

Descriptive statistics are the foundation of data understanding! 📊
          `},{id:"7-2",title:"Hypothesis Testing",duration:"15 min",content:`
## Hypothesis Testing — Making Data-Driven Decisions 🎯

Hypothesis testing helps you make decisions based on data, quantifying uncertainty along the way.

### The Hypothesis Testing Framework

\`\`\`
1. State null hypothesis (H₀) and alternative (H₁)
2. Choose significance level (α, usually 0.05)
3. Calculate test statistic
4. Find p-value
5. Make decision: reject H₀ if p-value < α
\`\`\`

### T-Tests — Comparing Means

\`\`\`python
from scipy import stats
import numpy as np

# One-sample t-test
# H₀: population mean = 100
# H₁: population mean ≠ 100
sample = [98, 102, 104, 97, 101, 99, 103, 100, 98, 102]
t_stat, p_value = stats.ttest_1samp(sample, 100)
print(f"One-sample t-test: t={t_stat:.3f}, p={p_value:.4f}")
if p_value < 0.05:
    print("Reject H₀: Mean is significantly different from 100")
else:
    print("Fail to reject H₀: No significant difference from 100")

# Two-sample t-test (independent groups)
# H₀: means are equal
# H₁: means are different
group_a = [85, 90, 88, 92, 87, 91, 89, 86, 90, 88]
group_b = [78, 82, 80, 85, 79, 83, 81, 84, 82, 80]

t_stat, p_value = stats.ttest_ind(group_a, group_b)
print(f"\\nTwo-sample t-test: t={t_stat:.3f}, p={p_value:.4f}")

# Check assumptions - equal variances?
levene_stat, levene_p = stats.levene(group_a, group_b)
print(f"Levene's test (equal variances): p={levene_p:.4f}")

# If variances unequal, use Welch's t-test
t_stat, p_value = stats.ttest_ind(group_a, group_b, equal_var=False)
print(f"Welch's t-test: t={t_stat:.3f}, p={p_value:.4f}")

# Paired t-test (same subjects, before/after)
# H₀: no difference between before and after
before = [150, 155, 160, 145, 140, 165, 155, 150, 160, 145]
after = [145, 148, 155, 140, 138, 160, 150, 145, 155, 142]

t_stat, p_value = stats.ttest_rel(before, after)
print(f"\\nPaired t-test: t={t_stat:.3f}, p={p_value:.4f}")
print(f"Mean difference: {np.mean(np.array(before) - np.array(after)):.2f}")
\`\`\`

<tip>
💡 Use paired t-test when comparing the same subjects before/after treatment. Use independent t-test when comparing different groups!
</tip>

### ANOVA — Comparing Multiple Groups

\`\`\`python
# One-way ANOVA
# H₀: all group means are equal
# H₁: at least one mean is different
group_1 = [85, 90, 88, 92, 87]
group_2 = [78, 82, 80, 85, 79]
group_3 = [92, 95, 94, 98, 93]

f_stat, p_value = stats.f_oneway(group_1, group_2, group_3)
print(f"One-way ANOVA: F={f_stat:.3f}, p={p_value:.4f}")

# Post-hoc analysis if ANOVA is significant
if p_value < 0.05:
    from statsmodels.stats.multicomp import pairwise_tukeyhsd
    
    # Prepare data
    import pandas as pd
    data = group_1 + group_2 + group_3
    groups = ['G1']*len(group_1) + ['G2']*len(group_2) + ['G3']*len(group_3)
    
    tukey = pairwise_tukeyhsd(data, groups, alpha=0.05)
    print("\\nTukey HSD Post-hoc:")
    print(tukey)
\`\`\`

### Chi-Square Tests — Categorical Data

\`\`\`python
# Chi-square test of independence
# H₀: variables are independent
# H₁: variables are associated

# Contingency table
observed = np.array([
    [50, 30, 20],  # Group A
    [30, 40, 30],  # Group B
    [20, 30, 50]   # Group C
])

chi2, p_value, dof, expected = stats.chi2_contingency(observed)
print(f"Chi-square test: χ²={chi2:.3f}, p={p_value:.4f}, dof={dof}")
print("\\nExpected frequencies:")
print(expected)

# Chi-square goodness of fit
# H₀: data follows expected distribution
observed = [45, 35, 20]
expected = [100/3, 100/3, 100/3]  # Expected if uniform

chi2, p_value = stats.chisquare(observed, expected)
print(f"\\nGoodness of fit: χ²={chi2:.3f}, p={p_value:.4f}")
\`\`\`

### Correlation Tests

\`\`\`python
# Pearson correlation (linear relationship, normal data)
x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
y = [2.1, 4.2, 5.8, 8.1, 10.2, 12.1, 13.9, 16.0, 18.1, 20.0]

r, p_value = stats.pearsonr(x, y)
print(f"Pearson correlation: r={r:.3f}, p={p_value:.4f}")

# Spearman correlation (monotonic relationship, ordinal data)
rho, p_value = stats.spearmanr(x, y)
print(f"Spearman correlation: ρ={rho:.3f}, p={p_value:.4f}")

# Kendall's tau (another rank correlation)
tau, p_value = stats.kendalltau(x, y)
print(f"Kendall's tau: τ={tau:.3f}, p={p_value:.4f}")
\`\`\`

### Effect Size

\`\`\`python
# P-value tells you IF there's an effect
# Effect size tells you HOW BIG the effect is

# Cohen's d for t-tests
def cohens_d(group1, group2):
    n1, n2 = len(group1), len(group2)
    var1, var2 = np.var(group1, ddof=1), np.var(group2, ddof=1)
    pooled_std = np.sqrt(((n1-1)*var1 + (n2-1)*var2) / (n1+n2-2))
    return (np.mean(group1) - np.mean(group2)) / pooled_std

d = cohens_d(group_a, group_b)
print(f"Cohen's d: {d:.3f}")
# Interpretation:
# |d| < 0.2: small effect
# |d| 0.2-0.8: medium effect
# |d| > 0.8: large effect

# Effect size for ANOVA (eta-squared)
def eta_squared(groups):
    all_data = np.concatenate(groups)
    grand_mean = np.mean(all_data)
    
    ss_between = sum(len(g) * (np.mean(g) - grand_mean)**2 for g in groups)
    ss_total = np.sum((all_data - grand_mean)**2)
    
    return ss_between / ss_total

eta2 = eta_squared([group_1, group_2, group_3])
print(f"Eta-squared: {eta2:.3f}")
\`\`\`

<warning>
⚠️ Statistical significance ≠ practical significance! A tiny effect can be statistically significant with large sample sizes. Always report effect sizes!
</warning>

Hypothesis testing helps you make confident, data-driven decisions! 🎲
          `}]},{id:8,title:"Real-World Data Project",description:"Complete end-to-end analysis",lessons:[{id:"8-1",title:"Project: Sales Data Analysis",duration:"20 min",content:`
## Complete Data Science Project 📊

Let's put everything together with a real-world sales data analysis project!

### Project Overview

\`\`\`
Business Problem:
- Analyze retail sales data to identify:
  1. Sales trends and seasonality
  2. Best-performing products and categories
  3. Customer segments
  4. Actionable recommendations

Dataset: 
- 2 years of sales transactions
- Customer demographics
- Product information
\`\`\`

### Step 1: Data Loading and Initial Exploration

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime

# Load data
df = pd.read_csv('sales_data.csv')

# First look
print("Dataset Shape:", df.shape)
print("\\nColumn Types:")
print(df.dtypes)
print("\\nFirst few rows:")
print(df.head())

# Missing values
print("\\nMissing Values:")
print(df.isnull().sum())

# Basic statistics
print("\\nNumerical Summary:")
print(df.describe())
\`\`\`

### Step 2: Data Cleaning

\`\`\`python
# Convert date columns
df['order_date'] = pd.to_datetime(df['order_date'])
df['ship_date'] = pd.to_datetime(df['ship_date'])

# Handle missing values
df['region'] = df['region'].fillna('Unknown')
df['discount'] = df['discount'].fillna(0)

# Remove duplicates
print(f"Duplicates: {df.duplicated().sum()}")
df = df.drop_duplicates()

# Create derived features
df['year'] = df['order_date'].dt.year
df['month'] = df['order_date'].dt.month
df['quarter'] = df['order_date'].dt.quarter
df['day_of_week'] = df['order_date'].dt.day_name()
df['profit_margin'] = df['profit'] / df['sales']
df['days_to_ship'] = (df['ship_date'] - df['order_date']).dt.days

# Check for outliers
for col in ['sales', 'profit', 'quantity']:
    Q1 = df[col].quantile(0.25)
    Q3 = df[col].quantile(0.75)
    IQR = Q3 - Q1
    outliers = df[(df[col] < Q1 - 1.5*IQR) | (df[col] > Q3 + 1.5*IQR)]
    print(f"{col}: {len(outliers)} outliers ({len(outliers)/len(df)*100:.1f}%)")

print("\\nData cleaned! Shape:", df.shape)
\`\`\`

### Step 3: Exploratory Data Analysis

\`\`\`python
# Sales Overview
total_sales = df['sales'].sum()
total_profit = df['profit'].sum()
avg_order = df['sales'].mean()

print(f"Total Sales: \${total_sales:,.2f}")
print(f"Total Profit: \${total_profit:,.2f}")
print(f"Average Order: \${avg_order:.2f}")
print(f"Profit Margin: {total_profit/total_sales*100:.1f}%")

# Sales over time
monthly_sales = df.groupby(['year', 'month']).agg({
    'sales': 'sum',
    'profit': 'sum',
    'order_id': 'nunique'
}).reset_index()

fig, axes = plt.subplots(2, 1, figsize=(14, 10))

# Sales trend
monthly_sales['date'] = pd.to_datetime(monthly_sales[['year', 'month']].assign(day=1))
axes[0].plot(monthly_sales['date'], monthly_sales['sales'], marker='o')
axes[0].set_title('Monthly Sales Trend', fontsize=14)
axes[0].set_ylabel('Sales ($)')
axes[0].tick_params(axis='x', rotation=45)

# Order count trend
axes[1].bar(monthly_sales['date'], monthly_sales['order_id'], width=20)
axes[1].set_title('Monthly Order Count', fontsize=14)
axes[1].set_ylabel('Number of Orders')
axes[1].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.show()

# Category analysis
category_stats = df.groupby('category').agg({
    'sales': 'sum',
    'profit': 'sum',
    'order_id': 'nunique',
    'quantity': 'sum'
}).round(2)
category_stats['profit_margin'] = (category_stats['profit'] / category_stats['sales'] * 100).round(1)
category_stats = category_stats.sort_values('sales', ascending=False)
print("\\nCategory Performance:")
print(category_stats)

# Visualize categories
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

category_stats['sales'].plot(kind='bar', ax=axes[0], color='steelblue')
axes[0].set_title('Sales by Category')
axes[0].set_ylabel('Sales ($)')
axes[0].tick_params(axis='x', rotation=45)

category_stats['profit_margin'].plot(kind='bar', ax=axes[1], color='coral')
axes[1].set_title('Profit Margin by Category')
axes[1].set_ylabel('Profit Margin (%)')
axes[1].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.show()
\`\`\`

<tip>
💡 Always start with high-level metrics before diving into details. Executives want the summary first!
</tip>

### Step 4: Deep Dive Analysis

\`\`\`python
# Regional analysis
region_stats = df.groupby('region').agg({
    'sales': 'sum',
    'profit': 'sum',
    'customer_id': 'nunique'
}).round(2)
region_stats.columns = ['Total Sales', 'Total Profit', 'Unique Customers']
region_stats['Avg per Customer'] = (region_stats['Total Sales'] / region_stats['Unique Customers']).round(2)
print("\\nRegional Performance:")
print(region_stats.sort_values('Total Sales', ascending=False))

# Customer segmentation (RFM)
today = df['order_date'].max()
rfm = df.groupby('customer_id').agg({
    'order_date': lambda x: (today - x.max()).days,
    'order_id': 'nunique',
    'sales': 'sum'
}).rename(columns={
    'order_date': 'recency',
    'order_id': 'frequency',
    'sales': 'monetary'
})

# Quartile-based scoring
for col in ['recency', 'frequency', 'monetary']:
    if col == 'recency':
        rfm[f'{col}_score'] = pd.qcut(rfm[col], 4, labels=[4, 3, 2, 1])
    else:
        rfm[f'{col}_score'] = pd.qcut(rfm[col].rank(method='first'), 4, labels=[1, 2, 3, 4])

rfm['rfm_score'] = rfm['recency_score'].astype(int) + rfm['frequency_score'].astype(int) + rfm['monetary_score'].astype(int)

# Segment customers
def segment(row):
    if row['rfm_score'] >= 10:
        return 'Champions'
    elif row['rfm_score'] >= 7:
        return 'Loyal'
    elif row['rfm_score'] >= 4:
        return 'At Risk'
    else:
        return 'Lost'

rfm['segment'] = rfm.apply(segment, axis=1)

print("\\nCustomer Segments:")
print(rfm['segment'].value_counts())

# Visualize segments
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

rfm['segment'].value_counts().plot(kind='pie', autopct='%1.1f%%', ax=axes[0])
axes[0].set_title('Customer Segment Distribution')

segment_monetary = rfm.groupby('segment')['monetary'].mean()
segment_monetary.plot(kind='bar', ax=axes[1], color='steelblue')
axes[1].set_title('Average Spending by Segment')
axes[1].set_ylabel('Avg Monetary Value ($)')

plt.tight_layout()
plt.show()
\`\`\`

### Step 5: Key Findings and Recommendations

\`\`\`python
# Create summary report
findings = """
=== SALES DATA ANALYSIS REPORT ===

1. OVERALL PERFORMANCE
   - Total Revenue: \${:,.0f}
   - Total Profit: \${:,.0f}
   - Overall Profit Margin: {:.1f}%
   - Average Order Value: \${:.2f}

2. TOP PERFORMERS
   - Best Category: {} (\${:,.0f})
   - Most Profitable Region: {}
   - Peak Month: {} {}

3. CUSTOMER INSIGHTS
   - Total Customers: {:,}
   - Champions (best customers): {:.1f}%
   - At Risk customers: {:.1f}%

4. RECOMMENDATIONS
   a) Focus marketing on {} category - highest profit margin
   b) Target At Risk customers with re-engagement campaigns
   c) Optimize shipping - {} region has longest delivery times
   d) Prepare for Q{} - historically highest sales quarter
"""

# Fill in the findings
print(findings.format(
    total_sales,
    total_profit,
    total_profit/total_sales*100,
    avg_order,
    category_stats.index[0],
    category_stats['sales'].iloc[0],
    region_stats['Total Profit'].idxmax(),
    monthly_sales.loc[monthly_sales['sales'].idxmax(), 'month'],
    monthly_sales.loc[monthly_sales['sales'].idxmax(), 'year'],
    df['customer_id'].nunique(),
    (rfm['segment'] == 'Champions').sum() / len(rfm) * 100,
    (rfm['segment'] == 'At Risk').sum() / len(rfm) * 100,
    category_stats['profit_margin'].idxmax(),
    df.groupby('region')['days_to_ship'].mean().idxmax(),
    monthly_sales.groupby(monthly_sales['date'].dt.quarter)['sales'].sum().idxmax()
))
\`\`\`

<warning>
⚠️ Always tie your analysis back to business value! Data insights are only useful if they lead to actionable decisions.
</warning>

Congratulations! You've completed a full data science project! 🎉

### What You've Learned

\`\`\`
✅ NumPy for numerical computing
✅ Pandas for data manipulation
✅ Matplotlib & Seaborn for visualization
✅ Data cleaning techniques
✅ Exploratory Data Analysis
✅ Statistical analysis
✅ Customer segmentation
✅ Building data-driven recommendations
\`\`\`

Keep practicing with new datasets and problems! 🚀
          `}]}]};const Od=(...A)=>A.filter((G,L,m)=>!!G&&G.trim()!==""&&m.indexOf(G)===L).join(" ").trim();const ry=A=>A.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const oy=A=>A.replace(/^([A-Z])|[\s-_]+(\w)/g,(G,L,m)=>m?m.toUpperCase():L.toLowerCase());const Md=A=>{const G=oy(A);return G.charAt(0).toUpperCase()+G.slice(1)};var dy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const py=A=>{for(const G in A)if(G.startsWith("aria-")||G==="role"||G==="title")return!0;return!1};const my=Ee.forwardRef(({color:A="currentColor",size:G=24,strokeWidth:L=2,absoluteStrokeWidth:m,className:R="",children:K,iconNode:it,...xt},O)=>Ee.createElement("svg",{ref:O,...dy,width:G,height:G,stroke:A,strokeWidth:m?Number(L)*24/Number(G):L,className:Od("lucide",R),...!K&&!py(xt)&&{"aria-hidden":"true"},...xt},[...it.map(([z,P])=>Ee.createElement(z,P)),...Array.isArray(K)?K:[K]]));const Me=(A,G)=>{const L=Ee.forwardRef(({className:m,...R},K)=>Ee.createElement(my,{ref:K,iconNode:G,className:Od(`lucide-${ry(Md(A))}`,`lucide-${A}`,m),...R}));return L.displayName=Md(A),L};const yy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],gy=Me("book-open",yy);const hy=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Cd=Me("chart-column",hy);const vy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Vi=Me("chevron-right",vy);const by=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],An=Me("circle-check",by);const _y=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Sy=Me("clock",_y);const xy=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],zy=Me("house",xy);const Ay=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Ty=Me("lightbulb",Ay);const Dy=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ey=Me("menu",Dy);const My=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Cy=Me("play",My);const Oy=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ny=Me("triangle-alert",Oy);const Ry=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Uy=Me("x",Ry);function wy(){const[A,G]=Ee.useState(!1),[L,m]=Ee.useState("home"),[R,K]=Ee.useState(null),[it,xt]=Ee.useState([]);Ee.useEffect(()=>{const N=localStorage.getItem("datasci-learning-progress");N&&xt(JSON.parse(N))},[]);const O=N=>{const j=[...it,N];xt(j),localStorage.setItem("datasci-learning-progress",JSON.stringify(j))},z=De.chapters.reduce((N,j)=>N+j.lessons.length,0),P=Math.round(it.length/z*100),q=N=>{K(N),m("lesson"),G(!1),window.scrollTo(0,0)},pt=()=>{if(!R)return null;for(let N=0;N<De.chapters.length;N++){const j=De.chapters[N];for(let J=0;J<j.lessons.length;J++)if(j.lessons[J].id===R.id){if(J<j.lessons.length-1)return j.lessons[J+1];if(N<De.chapters.length-1)return De.chapters[N+1].lessons[0]}}return null},Qt=()=>{if(!R)return null;for(let N=0;N<De.chapters.length;N++){const j=De.chapters[N];for(let J=0;J<j.lessons.length;J++)if(j.lessons[J].id===R.id){if(J>0)return j.lessons[J-1];if(N>0){const U=De.chapters[N-1];return U.lessons[U.lessons.length-1]}}}return null},Lt=N=>{const j=N.trim().split(`
`),J=[];let U=0,zt=!1,qt=[],te="";for(;U<j.length;){const lt=j[U];if(lt.startsWith("```")){zt?(J.push(_.jsxs("div",{className:"code-block",children:[_.jsxs("div",{className:"code-header",children:[_.jsx("span",{className:"code-language",children:te}),_.jsx("button",{className:"code-copy",onClick:()=>navigator.clipboard.writeText(qt.join(`
`)),children:"Copy"})]}),_.jsx("div",{className:"code-content",children:_.jsx("pre",{children:qt.join(`
`)})})]},`code-${U}`)),zt=!1):(zt=!0,te=lt.slice(3).trim()||"text",qt=[]),U++;continue}if(zt){qt.push(lt),U++;continue}if(lt.includes("<tip>")){let B=[];for(U++;U<j.length&&!j[U].includes("</tip>");)B.push(j[U]),U++;J.push(_.jsxs("div",{className:"tip-box",children:[_.jsxs("div",{className:"tip-box-header",children:[_.jsx(Ty,{size:18}),_.jsx("span",{children:"Pro Tip"})]}),_.jsx("p",{children:B.join(" ").replace("💡 ","")})]},`tip-${U}`)),U++;continue}if(lt.includes("<warning>")){let B=[];for(U++;U<j.length&&!j[U].includes("</warning>");)B.push(j[U]),U++;J.push(_.jsxs("div",{className:"warning-box",children:[_.jsxs("div",{className:"warning-box-header",children:[_.jsx(Ny,{size:18}),_.jsx("span",{children:"Warning"})]}),_.jsx("p",{children:B.join(" ").replace("⚠️ ","")})]},`warn-${U}`)),U++;continue}if(lt.startsWith("## ")){J.push(_.jsx("h2",{children:lt.slice(3)},`h2-${U}`)),U++;continue}if(lt.startsWith("### ")){J.push(_.jsx("h3",{children:lt.slice(4)},`h3-${U}`)),U++;continue}if(lt.includes("|")&&j[U+1]?.includes("---")){const B=lt.split("|").filter(gt=>gt.trim()).map(gt=>gt.trim());U+=2;const At=[];for(;U<j.length&&j[U].includes("|");)At.push(j[U].split("|").filter(gt=>gt.trim()).map(gt=>gt.trim())),U++;J.push(_.jsx("div",{style:{overflowX:"auto",margin:"20px 0"},children:_.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",background:"var(--bg-card)",borderRadius:"12px",overflow:"hidden"},children:[_.jsx("thead",{children:_.jsx("tr",{children:B.map((gt,Ce)=>_.jsx("th",{style:{padding:"12px 16px",textAlign:"left",borderBottom:"1px solid var(--border-color)",color:"var(--accent-primary)"},children:gt},Ce))})}),_.jsx("tbody",{children:At.map((gt,Ce)=>_.jsx("tr",{children:gt.map((oe,Vt)=>_.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--border-color)",color:"var(--text-secondary)"},children:_.jsx("span",{dangerouslySetInnerHTML:{__html:oe.replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--text-primary)">$1</strong>').replace(/`(.*?)`/g,'<code style="background:rgba(20,184,166,0.1);padding:2px 6px;border-radius:4px;font-size:13px">$1</code>')}})},Vt))},Ce))})]})},`table-${U}`));continue}if(lt.startsWith("- ")||lt.startsWith("* ")){const B=[];for(;U<j.length&&(j[U].startsWith("- ")||j[U].startsWith("* "));)B.push(j[U].slice(2)),U++;J.push(_.jsx("ul",{children:B.map((At,gt)=>_.jsx("li",{dangerouslySetInnerHTML:{__html:At.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(20,184,166,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},gt))},`ul-${U}`));continue}if(/^\d+\. /.test(lt)){const B=[];for(;U<j.length&&/^\d+\. /.test(j[U]);)B.push(j[U].replace(/^\d+\. /,"")),U++;J.push(_.jsx("ol",{children:B.map((At,gt)=>_.jsx("li",{dangerouslySetInnerHTML:{__html:At.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(20,184,166,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},gt))},`ol-${U}`));continue}lt.trim()&&J.push(_.jsx("p",{dangerouslySetInnerHTML:{__html:lt.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(20,184,166,0.1);padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:14px">$1</code>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank" style="color:var(--accent-cyan)">$1</a>')}},`p-${U}`)),U++}return J};return _.jsxs("div",{className:"app-container",children:[_.jsx("div",{className:"bg-grid"}),_.jsx("div",{className:"bg-noise"}),_.jsx("div",{className:"gradient-orb orb-primary"}),_.jsx("div",{className:"gradient-orb orb-cyan"}),_.jsx("div",{className:"gradient-orb orb-secondary"}),_.jsx("button",{className:"mobile-menu-btn",onClick:()=>G(!A),children:A?_.jsx(Uy,{size:24}):_.jsx(Ey,{size:24})}),_.jsx("div",{className:`sidebar-overlay ${A?"open":""}`,onClick:()=>G(!1)}),_.jsxs("aside",{className:`sidebar ${A?"open":""}`,children:[_.jsxs("div",{className:"sidebar-header",children:[_.jsx("div",{className:"sidebar-logo",children:_.jsx(Cd,{size:24})}),_.jsx("span",{className:"sidebar-title",children:"Data Science"})]}),_.jsxs("nav",{className:"sidebar-nav",children:[_.jsxs("div",{className:`nav-item ${L==="home"?"active":""}`,onClick:()=>{m("home"),G(!1)},children:[_.jsx(zy,{size:20,className:"nav-item-icon"}),_.jsx("span",{children:"Home"})]}),De.chapters.map(N=>_.jsxs("div",{className:"nav-section",children:[_.jsxs("div",{className:"nav-section-title",children:["Ch ",N.id,": ",N.title]}),N.lessons.map(j=>_.jsxs("div",{className:`nav-item ${R?.id===j.id?"active":""}`,onClick:()=>q(j),children:[it.includes(j.id)?_.jsx(An,{size:18,className:"nav-item-icon",style:{color:"var(--accent-green)"}}):_.jsx(gy,{size:18,className:"nav-item-icon"}),_.jsx("span",{children:j.title})]},j.id))]},N.id))]}),_.jsxs("div",{style:{marginTop:"auto",padding:"20px",borderTop:"1px solid var(--border-color)"},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:[_.jsx("span",{children:"Progress"}),_.jsxs("span",{children:[P,"%"]})]}),_.jsx("div",{className:"progress-bar",children:_.jsx("div",{className:"progress-fill",style:{width:`${P}%`}})})]})]}),_.jsxs("main",{className:"main-content",children:[L==="home"&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"hero",children:[_.jsxs("div",{className:"hero-badge",children:[_.jsx(Cd,{size:16}),_.jsx("span",{children:"Data Science Course"})]}),_.jsxs("h1",{className:"hero-title",children:["Master",_.jsx("br",{}),_.jsx("span",{children:"Data Science"})]}),_.jsx("p",{className:"hero-subtitle",children:"Learn Pandas, NumPy, data visualization, and statistical analysis. Transform raw data into insights!"}),_.jsxs("button",{className:"nav-button primary",onClick:()=>q(De.chapters[0].lessons[0]),style:{margin:"0 auto"},children:[_.jsx(Cy,{size:20}),"Start Learning"]})]}),_.jsxs("div",{style:{marginBottom:"48px"},children:[_.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px"},children:"Course Chapters"}),De.chapters.map(N=>{const j=N.lessons.filter(J=>it.includes(J.id)).length;return _.jsxs("div",{className:"chapter-card",onClick:()=>q(N.lessons[0]),children:[_.jsx("div",{className:"chapter-number",children:N.id}),_.jsxs("div",{className:"chapter-info",children:[_.jsx("div",{className:"chapter-title",children:N.title}),_.jsxs("div",{className:"chapter-meta",children:[N.description," • ",N.lessons.length," lessons",j>0&&_.jsxs("span",{style:{color:"var(--accent-green)",marginLeft:"8px"},children:["(",j,"/",N.lessons.length," complete)"]})]})]}),_.jsx(Vi,{size:24,style:{color:"var(--text-muted)"}})]},N.id)})]}),_.jsxs("div",{className:"glass-card",style:{textAlign:"center"},children:[_.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px"},children:"What You'll Learn"}),_.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"By the end, you'll be able to analyze any dataset:"}),_.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},children:["NumPy Arrays","Pandas DataFrames","Data Cleaning","Visualization","Statistics","ML Basics"].map(N=>_.jsxs("div",{style:{padding:"16px",background:"rgba(20, 184, 166, 0.1)",borderRadius:"12px",border:"1px solid rgba(20, 184, 166, 0.2)"},children:[_.jsx(An,{size:24,style:{color:"var(--accent-primary)",marginBottom:"8px"}}),_.jsx("div",{style:{fontWeight:"500"},children:N})]},N))})]})]}),L==="lesson"&&R&&_.jsxs("div",{className:"lesson-container",children:[_.jsxs("div",{className:"lesson-header",children:[_.jsxs("div",{className:"lesson-breadcrumb",children:[_.jsx("a",{href:"#",onClick:N=>{N.preventDefault(),m("home")},children:"Home"}),_.jsx(Vi,{size:16}),_.jsx("span",{children:R.title})]}),_.jsx("h1",{className:"lesson-title",children:R.title}),_.jsxs("div",{className:"lesson-meta",children:[_.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[_.jsx(Sy,{size:16}),R.duration]}),it.includes(R.id)&&_.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--accent-green)"},children:[_.jsx(An,{size:16}),"Completed"]})]})]}),_.jsx("div",{className:"lesson-content",children:Lt(R.content)}),!it.includes(R.id)&&_.jsxs("button",{className:"nav-button primary",style:{width:"100%",justifyContent:"center",marginTop:"32px"},onClick:()=>O(R.id),children:[_.jsx(An,{size:20}),"Mark as Complete"]}),_.jsxs("div",{className:"lesson-nav",children:[Qt()?_.jsxs("button",{className:"nav-button",onClick:()=>q(Qt()),children:[_.jsx(Vi,{size:20,style:{transform:"rotate(180deg)"}}),"Previous"]}):_.jsx("div",{}),pt()?_.jsxs("button",{className:"nav-button primary",onClick:()=>q(pt()),children:["Next Lesson",_.jsx(Vi,{size:20})]}):_.jsxs("button",{className:"nav-button primary",onClick:()=>m("home"),children:["Finish Course",_.jsx(An,{size:20})]})]})]})]})]})}fy.createRoot(document.getElementById("root")).render(_.jsx(Ee.StrictMode,{children:_.jsx(wy,{})}));
