(function(){const Q=document.createElement("link").relList;if(Q&&Q.supports&&Q.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))m(w);new MutationObserver(w=>{for(const K of w)if(K.type==="childList")for(const it of K.addedNodes)it.tagName==="LINK"&&it.rel==="modulepreload"&&m(it)}).observe(document,{childList:!0,subtree:!0});function G(w){const K={};return w.integrity&&(K.integrity=w.integrity),w.referrerPolicy&&(K.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?K.credentials="include":w.crossOrigin==="anonymous"?K.credentials="omit":K.credentials="same-origin",K}function m(w){if(w.ep)return;w.ep=!0;const K=G(w);fetch(w.href,K)}})();var cc={exports:{}},xn={};var vd;function ty(){if(vd)return xn;vd=1;var A=Symbol.for("react.transitional.element"),Q=Symbol.for("react.fragment");function G(m,w,K){var it=null;if(K!==void 0&&(it=""+K),w.key!==void 0&&(it=""+w.key),"key"in w){K={};for(var xt in w)xt!=="key"&&(K[xt]=w[xt])}else K=w;return w=K.ref,{$$typeof:A,type:m,key:it,ref:w!==void 0?w:null,props:K}}return xn.Fragment=Q,xn.jsx=G,xn.jsxs=G,xn}var bd;function ey(){return bd||(bd=1,cc.exports=ty()),cc.exports}var _=ey(),rc={exports:{}},L={};var _d;function ay(){if(_d)return L;_d=1;var A=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),it=Symbol.for("react.context"),xt=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),pt=Symbol.iterator;function Lt(o){return o===null||typeof o!="object"?null:(o=pt&&o[pt]||o["@@iterator"],typeof o=="function"?o:null)}var Gt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,B={};function J(o,x,D){this.props=o,this.context=x,this.refs=B,this.updater=D||Gt}J.prototype.isReactComponent={},J.prototype.setState=function(o,x){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,x,"setState")},J.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function R(){}R.prototype=J.prototype;function zt(o,x,D){this.props=o,this.context=x,this.refs=B,this.updater=D||Gt}var Ut=zt.prototype=new R;Ut.constructor=zt,O(Ut,J.prototype),Ut.isPureReactComponent=!0;var te=Array.isArray;function lt(){}var H={H:null,A:null,T:null,S:null},At=Object.prototype.hasOwnProperty;function ht(o,x,D){var C=D.ref;return{$$typeof:A,type:o,key:x,ref:C!==void 0?C:null,props:D}}function Me(o,x){return ht(o.type,x,o.props)}function fe(o){return typeof o=="object"&&o!==null&&o.$$typeof===A}function Vt(o){var x={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(D){return x[D]})}var Aa=/\/+/g;function qe(o,x){return typeof o=="object"&&o!==null&&o.key!=null?Vt(""+o.key):x.toString(36)}function xe(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(lt,lt):(o.status="pending",o.then(function(x){o.status==="pending"&&(o.status="fulfilled",o.value=x)},function(x){o.status==="pending"&&(o.status="rejected",o.reason=x)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function v(o,x,D,C,V){var k=typeof o;(k==="undefined"||k==="boolean")&&(o=null);var ut=!1;if(o===null)ut=!0;else switch(k){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(o.$$typeof){case A:case Q:ut=!0;break;case I:return ut=o._init,v(ut(o._payload),x,D,C,V)}}if(ut)return V=V(o),ut=C===""?"."+qe(o,0):C,te(V)?(D="",ut!=null&&(D=ut.replace(Aa,"$&/")+"/"),v(V,x,D,"",function(Cl){return Cl})):V!=null&&(fe(V)&&(V=Me(V,D+(V.key==null||o&&o.key===V.key?"":(""+V.key).replace(Aa,"$&/")+"/")+ut)),x.push(V)),1;ut=0;var Zt=C===""?".":C+":";if(te(o))for(var Tt=0;Tt<o.length;Tt++)C=o[Tt],k=Zt+qe(C,Tt),ut+=v(C,x,D,k,V);else if(Tt=Lt(o),typeof Tt=="function")for(o=Tt.call(o),Tt=0;!(C=o.next()).done;)C=C.value,k=Zt+qe(C,Tt++),ut+=v(C,x,D,k,V);else if(k==="object"){if(typeof o.then=="function")return v(xe(o),x,D,C,V);throw x=String(o),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return ut}function T(o,x,D){if(o==null)return o;var C=[],V=0;return v(o,C,"","",function(k){return x.call(D,k,V++)}),C}function Y(o){if(o._status===-1){var x=o._result;x=x(),x.then(function(D){(o._status===0||o._status===-1)&&(o._status=1,o._result=D)},function(D){(o._status===0||o._status===-1)&&(o._status=2,o._result=D)}),o._status===-1&&(o._status=0,o._result=x)}if(o._status===1)return o._result.default;throw o._result}var rt=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},mt={map:T,forEach:function(o,x,D){T(o,function(){x.apply(this,arguments)},D)},count:function(o){var x=0;return T(o,function(){x++}),x},toArray:function(o){return T(o,function(x){return x})||[]},only:function(o){if(!fe(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return L.Activity=U,L.Children=mt,L.Component=J,L.Fragment=G,L.Profiler=w,L.PureComponent=zt,L.StrictMode=m,L.Suspense=N,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,L.__COMPILER_RUNTIME={__proto__:null,c:function(o){return H.H.useMemoCache(o)}},L.cache=function(o){return function(){return o.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(o,x,D){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var C=O({},o.props),V=o.key;if(x!=null)for(k in x.key!==void 0&&(V=""+x.key),x)!At.call(x,k)||k==="key"||k==="__self"||k==="__source"||k==="ref"&&x.ref===void 0||(C[k]=x[k]);var k=arguments.length-2;if(k===1)C.children=D;else if(1<k){for(var ut=Array(k),Zt=0;Zt<k;Zt++)ut[Zt]=arguments[Zt+2];C.children=ut}return ht(o.type,V,C)},L.createContext=function(o){return o={$$typeof:it,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:K,_context:o},o},L.createElement=function(o,x,D){var C,V={},k=null;if(x!=null)for(C in x.key!==void 0&&(k=""+x.key),x)At.call(x,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&(V[C]=x[C]);var ut=arguments.length-2;if(ut===1)V.children=D;else if(1<ut){for(var Zt=Array(ut),Tt=0;Tt<ut;Tt++)Zt[Tt]=arguments[Tt+2];V.children=Zt}if(o&&o.defaultProps)for(C in ut=o.defaultProps,ut)V[C]===void 0&&(V[C]=ut[C]);return ht(o,k,V)},L.createRef=function(){return{current:null}},L.forwardRef=function(o){return{$$typeof:xt,render:o}},L.isValidElement=fe,L.lazy=function(o){return{$$typeof:I,_payload:{_status:-1,_result:o},_init:Y}},L.memo=function(o,x){return{$$typeof:z,type:o,compare:x===void 0?null:x}},L.startTransition=function(o){var x=H.T,D={};H.T=D;try{var C=o(),V=H.S;V!==null&&V(D,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(lt,rt)}catch(k){rt(k)}finally{x!==null&&D.types!==null&&(x.types=D.types),H.T=x}},L.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},L.use=function(o){return H.H.use(o)},L.useActionState=function(o,x,D){return H.H.useActionState(o,x,D)},L.useCallback=function(o,x){return H.H.useCallback(o,x)},L.useContext=function(o){return H.H.useContext(o)},L.useDebugValue=function(){},L.useDeferredValue=function(o,x){return H.H.useDeferredValue(o,x)},L.useEffect=function(o,x){return H.H.useEffect(o,x)},L.useEffectEvent=function(o){return H.H.useEffectEvent(o)},L.useId=function(){return H.H.useId()},L.useImperativeHandle=function(o,x,D){return H.H.useImperativeHandle(o,x,D)},L.useInsertionEffect=function(o,x){return H.H.useInsertionEffect(o,x)},L.useLayoutEffect=function(o,x){return H.H.useLayoutEffect(o,x)},L.useMemo=function(o,x){return H.H.useMemo(o,x)},L.useOptimistic=function(o,x){return H.H.useOptimistic(o,x)},L.useReducer=function(o,x,D){return H.H.useReducer(o,x,D)},L.useRef=function(o){return H.H.useRef(o)},L.useState=function(o){return H.H.useState(o)},L.useSyncExternalStore=function(o,x,D){return H.H.useSyncExternalStore(o,x,D)},L.useTransition=function(){return H.H.useTransition()},L.version="19.2.4",L}var Sd;function mc(){return Sd||(Sd=1,rc.exports=ay()),rc.exports}var Ee=mc(),oc={exports:{}},zn={},fc={exports:{}},dc={};var xd;function ly(){return xd||(xd=1,(function(A){function Q(v,T){var Y=v.length;v.push(T);t:for(;0<Y;){var rt=Y-1>>>1,mt=v[rt];if(0<w(mt,T))v[rt]=T,v[Y]=mt,Y=rt;else break t}}function G(v){return v.length===0?null:v[0]}function m(v){if(v.length===0)return null;var T=v[0],Y=v.pop();if(Y!==T){v[0]=Y;t:for(var rt=0,mt=v.length,o=mt>>>1;rt<o;){var x=2*(rt+1)-1,D=v[x],C=x+1,V=v[C];if(0>w(D,Y))C<mt&&0>w(V,D)?(v[rt]=V,v[C]=Y,rt=C):(v[rt]=D,v[x]=Y,rt=x);else if(C<mt&&0>w(V,Y))v[rt]=V,v[C]=Y,rt=C;else break t}}return T}function w(v,T){var Y=v.sortIndex-T.sortIndex;return Y!==0?Y:v.id-T.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var K=performance;A.unstable_now=function(){return K.now()}}else{var it=Date,xt=it.now();A.unstable_now=function(){return it.now()-xt}}var N=[],z=[],I=1,U=null,pt=3,Lt=!1,Gt=!1,O=!1,B=!1,J=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,zt=typeof setImmediate<"u"?setImmediate:null;function Ut(v){for(var T=G(z);T!==null;){if(T.callback===null)m(z);else if(T.startTime<=v)m(z),T.sortIndex=T.expirationTime,Q(N,T);else break;T=G(z)}}function te(v){if(O=!1,Ut(v),!Gt)if(G(N)!==null)Gt=!0,lt||(lt=!0,Vt());else{var T=G(z);T!==null&&xe(te,T.startTime-v)}}var lt=!1,H=-1,At=5,ht=-1;function Me(){return B?!0:!(A.unstable_now()-ht<At)}function fe(){if(B=!1,lt){var v=A.unstable_now();ht=v;var T=!0;try{t:{Gt=!1,O&&(O=!1,R(H),H=-1),Lt=!0;var Y=pt;try{e:{for(Ut(v),U=G(N);U!==null&&!(U.expirationTime>v&&Me());){var rt=U.callback;if(typeof rt=="function"){U.callback=null,pt=U.priorityLevel;var mt=rt(U.expirationTime<=v);if(v=A.unstable_now(),typeof mt=="function"){U.callback=mt,Ut(v),T=!0;break e}U===G(N)&&m(N),Ut(v)}else m(N);U=G(N)}if(U!==null)T=!0;else{var o=G(z);o!==null&&xe(te,o.startTime-v),T=!1}}break t}finally{U=null,pt=Y,Lt=!1}T=void 0}}finally{T?Vt():lt=!1}}}var Vt;if(typeof zt=="function")Vt=function(){zt(fe)};else if(typeof MessageChannel<"u"){var Aa=new MessageChannel,qe=Aa.port2;Aa.port1.onmessage=fe,Vt=function(){qe.postMessage(null)}}else Vt=function(){J(fe,0)};function xe(v,T){H=J(function(){v(A.unstable_now())},T)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(v){v.callback=null},A.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):At=0<v?Math.floor(1e3/v):5},A.unstable_getCurrentPriorityLevel=function(){return pt},A.unstable_next=function(v){switch(pt){case 1:case 2:case 3:var T=3;break;default:T=pt}var Y=pt;pt=T;try{return v()}finally{pt=Y}},A.unstable_requestPaint=function(){B=!0},A.unstable_runWithPriority=function(v,T){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var Y=pt;pt=v;try{return T()}finally{pt=Y}},A.unstable_scheduleCallback=function(v,T,Y){var rt=A.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?rt+Y:rt):Y=rt,v){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=Y+mt,v={id:I++,callback:T,priorityLevel:v,startTime:Y,expirationTime:mt,sortIndex:-1},Y>rt?(v.sortIndex=Y,Q(z,v),G(N)===null&&v===G(z)&&(O?(R(H),H=-1):O=!0,xe(te,Y-rt))):(v.sortIndex=mt,Q(N,v),Gt||Lt||(Gt=!0,lt||(lt=!0,Vt()))),v},A.unstable_shouldYield=Me,A.unstable_wrapCallback=function(v){var T=pt;return function(){var Y=pt;pt=T;try{return v.apply(this,arguments)}finally{pt=Y}}}})(dc)),dc}var zd;function ny(){return zd||(zd=1,fc.exports=ly()),fc.exports}var pc={exports:{}},Xt={};var Ad;function iy(){if(Ad)return Xt;Ad=1;var A=mc();function Q(N){var z="https://react.dev/errors/"+N;if(1<arguments.length){z+="?args[]="+encodeURIComponent(arguments[1]);for(var I=2;I<arguments.length;I++)z+="&args[]="+encodeURIComponent(arguments[I])}return"Minified React error #"+N+"; visit "+z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function G(){}var m={d:{f:G,r:function(){throw Error(Q(522))},D:G,C:G,L:G,m:G,X:G,S:G,M:G},p:0,findDOMNode:null},w=Symbol.for("react.portal");function K(N,z,I){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:U==null?null:""+U,children:N,containerInfo:z,implementation:I}}var it=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function xt(N,z){if(N==="font")return"";if(typeof z=="string")return z==="use-credentials"?z:""}return Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,Xt.createPortal=function(N,z){var I=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z||z.nodeType!==1&&z.nodeType!==9&&z.nodeType!==11)throw Error(Q(299));return K(N,z,null,I)},Xt.flushSync=function(N){var z=it.T,I=m.p;try{if(it.T=null,m.p=2,N)return N()}finally{it.T=z,m.p=I,m.d.f()}},Xt.preconnect=function(N,z){typeof N=="string"&&(z?(z=z.crossOrigin,z=typeof z=="string"?z==="use-credentials"?z:"":void 0):z=null,m.d.C(N,z))},Xt.prefetchDNS=function(N){typeof N=="string"&&m.d.D(N)},Xt.preinit=function(N,z){if(typeof N=="string"&&z&&typeof z.as=="string"){var I=z.as,U=xt(I,z.crossOrigin),pt=typeof z.integrity=="string"?z.integrity:void 0,Lt=typeof z.fetchPriority=="string"?z.fetchPriority:void 0;I==="style"?m.d.S(N,typeof z.precedence=="string"?z.precedence:void 0,{crossOrigin:U,integrity:pt,fetchPriority:Lt}):I==="script"&&m.d.X(N,{crossOrigin:U,integrity:pt,fetchPriority:Lt,nonce:typeof z.nonce=="string"?z.nonce:void 0})}},Xt.preinitModule=function(N,z){if(typeof N=="string")if(typeof z=="object"&&z!==null){if(z.as==null||z.as==="script"){var I=xt(z.as,z.crossOrigin);m.d.M(N,{crossOrigin:I,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0})}}else z==null&&m.d.M(N)},Xt.preload=function(N,z){if(typeof N=="string"&&typeof z=="object"&&z!==null&&typeof z.as=="string"){var I=z.as,U=xt(I,z.crossOrigin);m.d.L(N,I,{crossOrigin:U,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0,type:typeof z.type=="string"?z.type:void 0,fetchPriority:typeof z.fetchPriority=="string"?z.fetchPriority:void 0,referrerPolicy:typeof z.referrerPolicy=="string"?z.referrerPolicy:void 0,imageSrcSet:typeof z.imageSrcSet=="string"?z.imageSrcSet:void 0,imageSizes:typeof z.imageSizes=="string"?z.imageSizes:void 0,media:typeof z.media=="string"?z.media:void 0})}},Xt.preloadModule=function(N,z){if(typeof N=="string")if(z){var I=xt(z.as,z.crossOrigin);m.d.m(N,{as:typeof z.as=="string"&&z.as!=="script"?z.as:void 0,crossOrigin:I,integrity:typeof z.integrity=="string"?z.integrity:void 0})}else m.d.m(N)},Xt.requestFormReset=function(N){m.d.r(N)},Xt.unstable_batchedUpdates=function(N,z){return N(z)},Xt.useFormState=function(N,z,I){return it.H.useFormState(N,z,I)},Xt.useFormStatus=function(){return it.H.useHostTransitionStatus()},Xt.version="19.2.4",Xt}var Td;function uy(){if(Td)return pc.exports;Td=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(Q){console.error(Q)}}return A(),pc.exports=iy(),pc.exports}var Dd;function sy(){if(Dd)return zn;Dd=1;var A=ny(),Q=mc(),G=uy();function m(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function K(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function it(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xt(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function N(t){if(K(t)!==t)throw Error(m(188))}function z(t){var e=t.alternate;if(!e){if(e=K(t),e===null)throw Error(m(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return N(n),t;if(i===l)return N(n),e;i=i.sibling}throw Error(m(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,l=i;break}if(s===l){u=!0,l=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,l=n;break}if(s===l){u=!0,l=i,a=n;break}s=s.sibling}if(!u)throw Error(m(189))}}if(a.alternate!==l)throw Error(m(190))}if(a.tag!==3)throw Error(m(188));return a.stateNode.current===a?t:e}function I(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=I(t),e!==null)return e;t=t.sibling}return null}var U=Object.assign,pt=Symbol.for("react.element"),Lt=Symbol.for("react.transitional.element"),Gt=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),zt=Symbol.for("react.context"),Ut=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),ht=Symbol.for("react.activity"),Me=Symbol.for("react.memo_cache_sentinel"),fe=Symbol.iterator;function Vt(t){return t===null||typeof t!="object"?null:(t=fe&&t[fe]||t["@@iterator"],typeof t=="function"?t:null)}var Aa=Symbol.for("react.client.reference");function qe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Aa?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case J:return"Profiler";case B:return"StrictMode";case te:return"Suspense";case lt:return"SuspenseList";case ht:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Gt:return"Portal";case zt:return t.displayName||"Context";case R:return(t._context.displayName||"Context")+".Consumer";case Ut:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return e=t.displayName||null,e!==null?e:qe(t.type)||"Memo";case At:e=t._payload,t=t._init;try{return qe(t(e))}catch{}}return null}var xe=Array.isArray,v=Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=G.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},rt=[],mt=-1;function o(t){return{current:t}}function x(t){0>mt||(t.current=rt[mt],rt[mt]=null,mt--)}function D(t,e){mt++,rt[mt]=t.current,t.current=e}var C=o(null),V=o(null),k=o(null),ut=o(null);function Zt(t,e){switch(D(k,e),D(V,t),D(C,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Lf(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Lf(e),t=Gf(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}x(C),D(C,t)}function Tt(){x(C),x(V),x(k)}function Cl(t){t.memoizedState!==null&&D(ut,t);var e=C.current,a=Gf(e,t.type);e!==a&&(D(V,t),D(C,a))}function Tn(t){V.current===t&&(x(C),x(V)),ut.current===t&&(x(ut),vn._currentValue=Y)}var Xi,yc;function Ta(t){if(Xi===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Xi=e&&e[1]||"",yc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+t+yc}var Zi=!1;function Ki(t,e){if(!t||Zi)return"";Zi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(h){var y=h}Reflect.construct(t,[],S)}else{try{S.call()}catch(h){y=h}t.call(S.prototype)}}else{try{throw Error()}catch(h){y=h}(S=t())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(h){if(h&&y&&typeof h.stack=="string")return[h.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var c=u.split(`
`),p=s.split(`
`);for(n=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(l===c.length||n===p.length)for(l=c.length-1,n=p.length-1;1<=l&&0<=n&&c[l]!==p[n];)n--;for(;1<=l&&0<=n;l--,n--)if(c[l]!==p[n]){if(l!==1||n!==1)do if(l--,n--,0>n||c[l]!==p[n]){var g=`
`+c[l].replace(" at new "," at ");return t.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",t.displayName)),g}while(1<=l&&0<=n);break}}}finally{Zi=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ta(a):""}function Od(t,e){switch(t.tag){case 26:case 27:case 5:return Ta(t.type);case 16:return Ta("Lazy");case 13:return t.child!==e&&e!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return Ki(t.type,!1);case 11:return Ki(t.type.render,!1);case 1:return Ki(t.type,!0);case 31:return Ta("Activity");default:return""}}function hc(t){try{var e="",a=null;do e+=Od(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ji=Object.prototype.hasOwnProperty,ki=A.unstable_scheduleCallback,Fi=A.unstable_cancelCallback,wd=A.unstable_shouldYield,Rd=A.unstable_requestPaint,ee=A.unstable_now,qd=A.unstable_getCurrentPriorityLevel,gc=A.unstable_ImmediatePriority,vc=A.unstable_UserBlockingPriority,Dn=A.unstable_NormalPriority,Ud=A.unstable_LowPriority,bc=A.unstable_IdlePriority,Bd=A.log,jd=A.unstable_setDisableYieldValue,Ml=null,ae=null;function Ie(t){if(typeof Bd=="function"&&jd(t),ae&&typeof ae.setStrictMode=="function")try{ae.setStrictMode(Ml,t)}catch{}}var le=Math.clz32?Math.clz32:Qd,Hd=Math.log,Yd=Math.LN2;function Qd(t){return t>>>=0,t===0?32:31-(Hd(t)/Yd|0)|0}var En=256,Cn=262144,Mn=4194304;function Da(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Nn(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Da(l):(u&=s,u!==0?n=Da(u):a||(a=s&~t,a!==0&&(n=Da(a))))):(s=l&~i,s!==0?n=Da(s):u!==0?n=Da(u):a||(a=l&~t,a!==0&&(n=Da(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function Nl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Ld(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _c(){var t=Mn;return Mn<<=1,(Mn&62914560)===0&&(Mn=4194304),t}function Wi(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Ol(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Gd(t,e,a,l,n,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var s=t.entanglements,c=t.expirationTimes,p=t.hiddenUpdates;for(a=u&~a;0<a;){var g=31-le(a),S=1<<g;s[g]=0,c[g]=-1;var y=p[g];if(y!==null)for(p[g]=null,g=0;g<y.length;g++){var h=y[g];h!==null&&(h.lane&=-536870913)}a&=~S}l!==0&&Sc(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Sc(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-le(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function xc(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-le(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function zc(t,e){var a=e&-e;return a=(a&42)!==0?1:$i(a),(a&(t.suspendedLanes|e))!==0?0:a}function $i(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ac(){var t=T.p;return t!==0?t:(t=window.event,t===void 0?32:fd(t.type))}function Tc(t,e){var a=T.p;try{return T.p=t,e()}finally{T.p=a}}var ta=Math.random().toString(36).slice(2),Bt="__reactFiber$"+ta,Jt="__reactProps$"+ta,Xa="__reactContainer$"+ta,Ii="__reactEvents$"+ta,Vd="__reactListeners$"+ta,Xd="__reactHandles$"+ta,Dc="__reactResources$"+ta,wl="__reactMarker$"+ta;function tu(t){delete t[Bt],delete t[Jt],delete t[Ii],delete t[Vd],delete t[Xd]}function Za(t){var e=t[Bt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Xa]||a[Bt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Ff(t);t!==null;){if(a=t[Bt])return a;t=Ff(t)}return e}t=a,a=t.parentNode}return null}function Ka(t){if(t=t[Bt]||t[Xa]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Rl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(m(33))}function Ja(t){var e=t[Dc];return e||(e=t[Dc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Rt(t){t[wl]=!0}var Ec=new Set,Cc={};function Ea(t,e){ka(t,e),ka(t+"Capture",e)}function ka(t,e){for(Cc[t]=e,t=0;t<e.length;t++)Ec.add(e[t])}var Zd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mc={},Nc={};function Kd(t){return Ji.call(Nc,t)?!0:Ji.call(Mc,t)?!1:Zd.test(t)?Nc[t]=!0:(Mc[t]=!0,!1)}function On(t,e,a){if(Kd(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function wn(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Ue(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function de(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jd(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eu(t){if(!t._valueTracker){var e=Oc(t)?"checked":"value";t._valueTracker=Jd(t,e,""+t[e])}}function wc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=Oc(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function Rn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var kd=/[\n"\\]/g;function pe(t){return t.replace(kd,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function au(t,e,a,l,n,i,u,s){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+de(e)):t.value!==""+de(e)&&(t.value=""+de(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?lu(t,u,de(e)):a!=null?lu(t,u,de(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+de(s):t.removeAttribute("name")}function Rc(t,e,a,l,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){eu(t);return}a=a!=null?""+de(a):"",e=e!=null?""+de(e):a,s||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=s?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),eu(t)}function lu(t,e,a){e==="number"&&Rn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Fa(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+de(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function qc(t,e,a){if(e!=null&&(e=""+de(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+de(a):""}function Uc(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(m(92));if(xe(l)){if(1<l.length)throw Error(m(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=de(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),eu(t)}function Wa(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Fd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bc(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||Fd.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function jc(t,e,a){if(e!=null&&typeof e!="object")throw Error(m(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&Bc(t,n,l)}else for(var i in e)e.hasOwnProperty(i)&&Bc(t,i,e[i])}function nu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$d=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qn(t){return $d.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Be(){}var iu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $a=null,Pa=null;function Hc(t){var e=Ka(t);if(e&&(t=e.stateNode)){var a=t[Jt]||null;t:switch(t=e.stateNode,e.type){case"input":if(au(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pe(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[Jt]||null;if(!n)throw Error(m(90));au(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&wc(l)}break t;case"textarea":qc(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Fa(t,!!a.multiple,e,!1)}}}var su=!1;function Yc(t,e,a){if(su)return t(e,a);su=!0;try{var l=t(e);return l}finally{if(su=!1,($a!==null||Pa!==null)&&(Si(),$a&&(e=$a,t=Pa,Pa=$a=null,Hc(e),t)))for(e=0;e<t.length;e++)Hc(t[e])}}function ql(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Jt]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(m(231,e,typeof a));return a}var je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(je)try{var Ul={};Object.defineProperty(Ul,"passive",{get:function(){cu=!0}}),window.addEventListener("test",Ul,Ul),window.removeEventListener("test",Ul,Ul)}catch{cu=!1}var ea=null,ru=null,Un=null;function Qc(){if(Un)return Un;var t,e=ru,a=e.length,l,n="value"in ea?ea.value:ea.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var u=a-t;for(l=1;l<=u&&e[a-l]===n[i-l];l++);return Un=n.slice(t,1<l?1-l:void 0)}function Bn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function jn(){return!0}function Lc(){return!1}function kt(t){function e(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(a=t[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jn:Lc,this.isPropagationStopped=Lc,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),e}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=kt(Ca),Bl=U({},Ca,{view:0,detail:0}),Pd=kt(Bl),ou,fu,jl,Yn=U({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jl&&(jl&&t.type==="mousemove"?(ou=t.screenX-jl.screenX,fu=t.screenY-jl.screenY):fu=ou=0,jl=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),Gc=kt(Yn),Id=U({},Yn,{dataTransfer:0}),tp=kt(Id),ep=U({},Bl,{relatedTarget:0}),du=kt(ep),ap=U({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),lp=kt(ap),np=U({},Ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ip=kt(np),up=U({},Ca,{data:0}),Vc=kt(up),sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function op(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rp[t])?!!e[t]:!1}function pu(){return op}var fp=U({},Bl,{key:function(t){if(t.key){var e=sp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(t){return t.type==="keypress"?Bn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dp=kt(fp),pp=U({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xc=kt(pp),mp=U({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),yp=kt(mp),hp=U({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),gp=kt(hp),vp=U({},Yn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bp=kt(vp),_p=U({},Ca,{newState:0,oldState:0}),Sp=kt(_p),xp=[9,13,27,32],mu=je&&"CompositionEvent"in window,Hl=null;je&&"documentMode"in document&&(Hl=document.documentMode);var zp=je&&"TextEvent"in window&&!Hl,Zc=je&&(!mu||Hl&&8<Hl&&11>=Hl),Kc=" ",Jc=!1;function kc(t,e){switch(t){case"keyup":return xp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ia=!1;function Ap(t,e){switch(t){case"compositionend":return Fc(e);case"keypress":return e.which!==32?null:(Jc=!0,Kc);case"textInput":return t=e.data,t===Kc&&Jc?null:t;default:return null}}function Tp(t,e){if(Ia)return t==="compositionend"||!mu&&kc(t,e)?(t=Qc(),Un=ru=ea=null,Ia=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zc&&e.locale!=="ko"?null:e.data;default:return null}}var Dp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Dp[t.type]:e==="textarea"}function $c(t,e,a,l){$a?Pa?Pa.push(l):Pa=[l]:$a=l,e=Ci(e,"onChange"),0<e.length&&(a=new Hn("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Yl=null,Ql=null;function Ep(t){Uf(t,0)}function Qn(t){var e=Rl(t);if(wc(e))return t}function Pc(t,e){if(t==="change")return e}var Ic=!1;if(je){var yu;if(je){var hu="oninput"in document;if(!hu){var tr=document.createElement("div");tr.setAttribute("oninput","return;"),hu=typeof tr.oninput=="function"}yu=hu}else yu=!1;Ic=yu&&(!document.documentMode||9<document.documentMode)}function er(){Yl&&(Yl.detachEvent("onpropertychange",ar),Ql=Yl=null)}function ar(t){if(t.propertyName==="value"&&Qn(Ql)){var e=[];$c(e,Ql,t,uu(t)),Yc(Ep,e)}}function Cp(t,e,a){t==="focusin"?(er(),Yl=e,Ql=a,Yl.attachEvent("onpropertychange",ar)):t==="focusout"&&er()}function Mp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qn(Ql)}function Np(t,e){if(t==="click")return Qn(e)}function Op(t,e){if(t==="input"||t==="change")return Qn(e)}function wp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ne=typeof Object.is=="function"?Object.is:wp;function Ll(t,e){if(ne(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Ji.call(e,n)||!ne(t[n],e[n]))return!1}return!0}function lr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nr(t,e){var a=lr(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=lr(a)}}function ir(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ir(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ur(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Rn(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Rn(t.document)}return e}function gu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Rp=je&&"documentMode"in document&&11>=document.documentMode,tl=null,vu=null,Gl=null,bu=!1;function sr(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||tl==null||tl!==Rn(l)||(l=tl,"selectionStart"in l&&gu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Gl&&Ll(Gl,l)||(Gl=l,l=Ci(vu,"onSelect"),0<l.length&&(e=new Hn("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=tl)))}function Ma(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var el={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},_u={},cr={};je&&(cr=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Na(t){if(_u[t])return _u[t];if(!el[t])return t;var e=el[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in cr)return _u[t]=e[a];return t}var rr=Na("animationend"),or=Na("animationiteration"),fr=Na("animationstart"),qp=Na("transitionrun"),Up=Na("transitionstart"),Bp=Na("transitioncancel"),dr=Na("transitionend"),pr=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function ze(t,e){pr.set(t,e),Ea(e,[t])}var Ln=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},me=[],al=0,xu=0;function Gn(){for(var t=al,e=xu=al=0;e<t;){var a=me[e];me[e++]=null;var l=me[e];me[e++]=null;var n=me[e];me[e++]=null;var i=me[e];if(me[e++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&mr(a,n,i)}}function Vn(t,e,a,l){me[al++]=t,me[al++]=e,me[al++]=a,me[al++]=l,xu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function zu(t,e,a,l){return Vn(t,e,a,l),Xn(t)}function Oa(t,e){return Vn(t,null,null,e),Xn(t)}function mr(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-le(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function Xn(t){if(50<fn)throw fn=0,ws=null,Error(m(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ll={};function jp(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ie(t,e,a,l){return new jp(t,e,a,l)}function Au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function He(t,e){var a=t.alternate;return a===null?(a=ie(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function yr(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Zn(t,e,a,l,n,i){var u=0;if(l=t,typeof t=="function")Au(t)&&(u=1);else if(typeof t=="string")u=Gm(t,a,C.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ht:return t=ie(31,a,e,n),t.elementType=ht,t.lanes=i,t;case O:return wa(a.children,n,i,e);case B:u=8,n|=24;break;case J:return t=ie(12,a,e,n|2),t.elementType=J,t.lanes=i,t;case te:return t=ie(13,a,e,n),t.elementType=te,t.lanes=i,t;case lt:return t=ie(19,a,e,n),t.elementType=lt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zt:u=10;break t;case R:u=9;break t;case Ut:u=11;break t;case H:u=14;break t;case At:u=16,l=null;break t}u=29,a=Error(m(130,t===null?"null":typeof t,"")),l=null}return e=ie(u,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function wa(t,e,a,l){return t=ie(7,t,l,e),t.lanes=a,t}function Tu(t,e,a){return t=ie(6,t,null,e),t.lanes=a,t}function hr(t){var e=ie(18,null,null,0);return e.stateNode=t,e}function Du(t,e,a){return e=ie(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var gr=new WeakMap;function ye(t,e){if(typeof t=="object"&&t!==null){var a=gr.get(t);return a!==void 0?a:(e={value:t,source:e,stack:hc(e)},gr.set(t,e),e)}return{value:t,source:e,stack:hc(e)}}var nl=[],il=0,Kn=null,Vl=0,he=[],ge=0,aa=null,Ne=1,Oe="";function Ye(t,e){nl[il++]=Vl,nl[il++]=Kn,Kn=t,Vl=e}function vr(t,e,a){he[ge++]=Ne,he[ge++]=Oe,he[ge++]=aa,aa=t;var l=Ne;t=Oe;var n=32-le(l)-1;l&=~(1<<n),a+=1;var i=32-le(e)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Ne=1<<32-le(e)+n|a<<n|l,Oe=i+t}else Ne=1<<i|a<<n|l,Oe=t}function Eu(t){t.return!==null&&(Ye(t,1),vr(t,1,0))}function Cu(t){for(;t===Kn;)Kn=nl[--il],nl[il]=null,Vl=nl[--il],nl[il]=null;for(;t===aa;)aa=he[--ge],he[ge]=null,Oe=he[--ge],he[ge]=null,Ne=he[--ge],he[ge]=null}function br(t,e){he[ge++]=Ne,he[ge++]=Oe,he[ge++]=aa,Ne=e.id,Oe=e.overflow,aa=t}var jt=null,gt=null,tt=!1,la=null,ve=!1,Mu=Error(m(519));function na(t){var e=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xl(ye(e,t)),Mu}function _r(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[Bt]=t,e[Jt]=l,a){case"dialog":W("cancel",e),W("close",e);break;case"iframe":case"object":case"embed":W("load",e);break;case"video":case"audio":for(a=0;a<pn.length;a++)W(pn[a],e);break;case"source":W("error",e);break;case"img":case"image":case"link":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"input":W("invalid",e),Rc(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":W("invalid",e);break;case"textarea":W("invalid",e),Uc(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||Yf(e.textContent,a)?(l.popover!=null&&(W("beforetoggle",e),W("toggle",e)),l.onScroll!=null&&W("scroll",e),l.onScrollEnd!=null&&W("scrollend",e),l.onClick!=null&&(e.onclick=Be),e=!0):e=!1,e||na(t,!0)}function Sr(t){for(jt=t.return;jt;)switch(jt.tag){case 5:case 31:case 13:ve=!1;return;case 27:case 3:ve=!0;return;default:jt=jt.return}}function ul(t){if(t!==jt)return!1;if(!tt)return Sr(t),tt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Js(t.type,t.memoizedProps)),a=!a),a&&gt&&na(t),Sr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));gt=kf(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));gt=kf(t)}else e===27?(e=gt,va(t.type)?(t=Ps,Ps=null,gt=t):gt=e):gt=jt?_e(t.stateNode.nextSibling):null;return!0}function Ra(){gt=jt=null,tt=!1}function Nu(){var t=la;return t!==null&&(Pt===null?Pt=t:Pt.push.apply(Pt,t),la=null),t}function Xl(t){la===null?la=[t]:la.push(t)}var Ou=o(null),qa=null,Qe=null;function ia(t,e,a){D(Ou,e._currentValue),e._currentValue=a}function Le(t){t._currentValue=Ou.current,x(Ou)}function wu(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Ru(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=n;for(var c=0;c<e.length;c++)if(s.context===e[c]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),wu(i.return,a,t),l||(u=null);break t}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(m(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),wu(u,a,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function sl(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(m(387));if(u=u.memoizedProps,u!==null){var s=n.type;ne(n.pendingProps.value,u.value)||(t!==null?t.push(s):t=[s])}}else if(n===ut.current){if(u=n.alternate,u===null)throw Error(m(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(vn):t=[vn])}n=n.return}t!==null&&Ru(e,t,a,l),e.flags|=262144}function Jn(t){for(t=t.firstContext;t!==null;){if(!ne(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ua(t){qa=t,Qe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ht(t){return xr(qa,t)}function kn(t,e){return qa===null&&Ua(t),xr(t,e)}function xr(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Qe===null){if(t===null)throw Error(m(308));Qe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Qe=Qe.next=e;return a}var Hp=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Yp=A.unstable_scheduleCallback,Qp=A.unstable_NormalPriority,Ct={$$typeof:zt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new Hp,data:new Map,refCount:0}}function Zl(t){t.refCount--,t.refCount===0&&Yp(Qp,function(){t.controller.abort()})}var Kl=null,Uu=0,cl=0,rl=null;function Lp(t,e){if(Kl===null){var a=Kl=[];Uu=0,cl=Hs(),rl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Uu++,e.then(zr,zr),e}function zr(){if(--Uu===0&&Kl!==null){rl!==null&&(rl.status="fulfilled");var t=Kl;Kl=null,cl=0,rl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Gp(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ar=v.S;v.S=function(t,e){rf=ee(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Lp(t,e),Ar!==null&&Ar(t,e)};var Ba=o(null);function Bu(){var t=Ba.current;return t!==null?t:yt.pooledCache}function Fn(t,e){e===null?D(Ba,Ba.current):D(Ba,e.pool)}function Tr(){var t=Bu();return t===null?null:{parent:Ct._currentValue,pool:t}}var ol=Error(m(460)),ju=Error(m(474)),Wn=Error(m(542)),$n={then:function(){}};function Dr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Er(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Be,Be),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Mr(t),t;default:if(typeof e.status=="string")e.then(Be,Be);else{if(t=yt,t!==null&&100<t.shellSuspendCounter)throw Error(m(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Mr(t),t}throw Ha=e,ol}}function ja(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ha=a,ol):a}}var Ha=null;function Cr(){if(Ha===null)throw Error(m(459));var t=Ha;return Ha=null,t}function Mr(t){if(t===ol||t===Wn)throw Error(m(483))}var fl=null,Jl=0;function Pn(t){var e=Jl;return Jl+=1,fl===null&&(fl=[]),Er(fl,t,e)}function kl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function In(t,e){throw e.$$typeof===pt?Error(m(525)):(t=Object.prototype.toString.call(e),Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Nr(t){function e(f,r){if(t){var d=f.deletions;d===null?(f.deletions=[r],f.flags|=16):d.push(r)}}function a(f,r){if(!t)return null;for(;r!==null;)e(f,r),r=r.sibling;return null}function l(f){for(var r=new Map;f!==null;)f.key!==null?r.set(f.key,f):r.set(f.index,f),f=f.sibling;return r}function n(f,r){return f=He(f,r),f.index=0,f.sibling=null,f}function i(f,r,d){return f.index=d,t?(d=f.alternate,d!==null?(d=d.index,d<r?(f.flags|=67108866,r):d):(f.flags|=67108866,r)):(f.flags|=1048576,r)}function u(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function s(f,r,d,b){return r===null||r.tag!==6?(r=Tu(d,f.mode,b),r.return=f,r):(r=n(r,d),r.return=f,r)}function c(f,r,d,b){var q=d.type;return q===O?g(f,r,d.props.children,b,d.key):r!==null&&(r.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===At&&ja(q)===r.type)?(r=n(r,d.props),kl(r,d),r.return=f,r):(r=Zn(d.type,d.key,d.props,null,f.mode,b),kl(r,d),r.return=f,r)}function p(f,r,d,b){return r===null||r.tag!==4||r.stateNode.containerInfo!==d.containerInfo||r.stateNode.implementation!==d.implementation?(r=Du(d,f.mode,b),r.return=f,r):(r=n(r,d.children||[]),r.return=f,r)}function g(f,r,d,b,q){return r===null||r.tag!==7?(r=wa(d,f.mode,b,q),r.return=f,r):(r=n(r,d),r.return=f,r)}function S(f,r,d){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Tu(""+r,f.mode,d),r.return=f,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Lt:return d=Zn(r.type,r.key,r.props,null,f.mode,d),kl(d,r),d.return=f,d;case Gt:return r=Du(r,f.mode,d),r.return=f,r;case At:return r=ja(r),S(f,r,d)}if(xe(r)||Vt(r))return r=wa(r,f.mode,d,null),r.return=f,r;if(typeof r.then=="function")return S(f,Pn(r),d);if(r.$$typeof===zt)return S(f,kn(f,r),d);In(f,r)}return null}function y(f,r,d,b){var q=r!==null?r.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return q!==null?null:s(f,r,""+d,b);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Lt:return d.key===q?c(f,r,d,b):null;case Gt:return d.key===q?p(f,r,d,b):null;case At:return d=ja(d),y(f,r,d,b)}if(xe(d)||Vt(d))return q!==null?null:g(f,r,d,b,null);if(typeof d.then=="function")return y(f,r,Pn(d),b);if(d.$$typeof===zt)return y(f,r,kn(f,d),b);In(f,d)}return null}function h(f,r,d,b,q){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return f=f.get(d)||null,s(r,f,""+b,q);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Lt:return f=f.get(b.key===null?d:b.key)||null,c(r,f,b,q);case Gt:return f=f.get(b.key===null?d:b.key)||null,p(r,f,b,q);case At:return b=ja(b),h(f,r,d,b,q)}if(xe(b)||Vt(b))return f=f.get(d)||null,g(r,f,b,q,null);if(typeof b.then=="function")return h(f,r,d,Pn(b),q);if(b.$$typeof===zt)return h(f,r,d,kn(r,b),q);In(r,b)}return null}function E(f,r,d,b){for(var q=null,et=null,M=r,Z=r=0,P=null;M!==null&&Z<d.length;Z++){M.index>Z?(P=M,M=null):P=M.sibling;var at=y(f,M,d[Z],b);if(at===null){M===null&&(M=P);break}t&&M&&at.alternate===null&&e(f,M),r=i(at,r,Z),et===null?q=at:et.sibling=at,et=at,M=P}if(Z===d.length)return a(f,M),tt&&Ye(f,Z),q;if(M===null){for(;Z<d.length;Z++)M=S(f,d[Z],b),M!==null&&(r=i(M,r,Z),et===null?q=M:et.sibling=M,et=M);return tt&&Ye(f,Z),q}for(M=l(M);Z<d.length;Z++)P=h(M,f,Z,d[Z],b),P!==null&&(t&&P.alternate!==null&&M.delete(P.key===null?Z:P.key),r=i(P,r,Z),et===null?q=P:et.sibling=P,et=P);return t&&M.forEach(function(za){return e(f,za)}),tt&&Ye(f,Z),q}function j(f,r,d,b){if(d==null)throw Error(m(151));for(var q=null,et=null,M=r,Z=r=0,P=null,at=d.next();M!==null&&!at.done;Z++,at=d.next()){M.index>Z?(P=M,M=null):P=M.sibling;var za=y(f,M,at.value,b);if(za===null){M===null&&(M=P);break}t&&M&&za.alternate===null&&e(f,M),r=i(za,r,Z),et===null?q=za:et.sibling=za,et=za,M=P}if(at.done)return a(f,M),tt&&Ye(f,Z),q;if(M===null){for(;!at.done;Z++,at=d.next())at=S(f,at.value,b),at!==null&&(r=i(at,r,Z),et===null?q=at:et.sibling=at,et=at);return tt&&Ye(f,Z),q}for(M=l(M);!at.done;Z++,at=d.next())at=h(M,f,Z,at.value,b),at!==null&&(t&&at.alternate!==null&&M.delete(at.key===null?Z:at.key),r=i(at,r,Z),et===null?q=at:et.sibling=at,et=at);return t&&M.forEach(function(Im){return e(f,Im)}),tt&&Ye(f,Z),q}function dt(f,r,d,b){if(typeof d=="object"&&d!==null&&d.type===O&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Lt:t:{for(var q=d.key;r!==null;){if(r.key===q){if(q=d.type,q===O){if(r.tag===7){a(f,r.sibling),b=n(r,d.props.children),b.return=f,f=b;break t}}else if(r.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===At&&ja(q)===r.type){a(f,r.sibling),b=n(r,d.props),kl(b,d),b.return=f,f=b;break t}a(f,r);break}else e(f,r);r=r.sibling}d.type===O?(b=wa(d.props.children,f.mode,b,d.key),b.return=f,f=b):(b=Zn(d.type,d.key,d.props,null,f.mode,b),kl(b,d),b.return=f,f=b)}return u(f);case Gt:t:{for(q=d.key;r!==null;){if(r.key===q)if(r.tag===4&&r.stateNode.containerInfo===d.containerInfo&&r.stateNode.implementation===d.implementation){a(f,r.sibling),b=n(r,d.children||[]),b.return=f,f=b;break t}else{a(f,r);break}else e(f,r);r=r.sibling}b=Du(d,f.mode,b),b.return=f,f=b}return u(f);case At:return d=ja(d),dt(f,r,d,b)}if(xe(d))return E(f,r,d,b);if(Vt(d)){if(q=Vt(d),typeof q!="function")throw Error(m(150));return d=q.call(d),j(f,r,d,b)}if(typeof d.then=="function")return dt(f,r,Pn(d),b);if(d.$$typeof===zt)return dt(f,r,kn(f,d),b);In(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,r!==null&&r.tag===6?(a(f,r.sibling),b=n(r,d),b.return=f,f=b):(a(f,r),b=Tu(d,f.mode,b),b.return=f,f=b),u(f)):a(f,r)}return function(f,r,d,b){try{Jl=0;var q=dt(f,r,d,b);return fl=null,q}catch(M){if(M===ol||M===Wn)throw M;var et=ie(29,M,null,f.mode);return et.lanes=b,et.return=f,et}}}var Ya=Nr(!0),Or=Nr(!1),ua=!1;function Hu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function sa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ca(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(nt&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=Xn(t),mr(t,null,a),e}return Vn(t,l,e,a),Xn(t)}function Fl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,xc(t,a)}}function Qu(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Lu=!1;function Wl(){if(Lu){var t=rl;if(t!==null)throw t}}function $l(t,e,a,l){Lu=!1;var n=t.updateQueue;ua=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var c=s,p=c.next;c.next=null,u===null?i=p:u.next=p,u=c;var g=t.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==u&&(s===null?g.firstBaseUpdate=p:s.next=p,g.lastBaseUpdate=c))}if(i!==null){var S=n.baseState;u=0,g=p=c=null,s=i;do{var y=s.lane&-536870913,h=y!==s.lane;if(h?($&y)===y:(l&y)===y){y!==0&&y===cl&&(Lu=!0),g!==null&&(g=g.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var E=t,j=s;y=e;var dt=a;switch(j.tag){case 1:if(E=j.payload,typeof E=="function"){S=E.call(dt,S,y);break t}S=E;break t;case 3:E.flags=E.flags&-65537|128;case 0:if(E=j.payload,y=typeof E=="function"?E.call(dt,S,y):E,y==null)break t;S=U({},S,y);break t;case 2:ua=!0}}y=s.callback,y!==null&&(t.flags|=64,h&&(t.flags|=8192),h=n.callbacks,h===null?n.callbacks=[y]:h.push(y))}else h={lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(p=g=h,c=S):g=g.next=h,u|=y;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;h=s,s=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);g===null&&(c=S),n.baseState=c,n.firstBaseUpdate=p,n.lastBaseUpdate=g,i===null&&(n.shared.lanes=0),pa|=u,t.lanes=u,t.memoizedState=S}}function wr(t,e){if(typeof t!="function")throw Error(m(191,t));t.call(e)}function Rr(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)wr(a[t],e)}var dl=o(null),ti=o(0);function qr(t,e){t=We,D(ti,t),D(dl,e),We=t|e.baseLanes}function Gu(){D(ti,We),D(dl,dl.current)}function Vu(){We=ti.current,x(dl),x(ti)}var ue=o(null),be=null;function ra(t){var e=t.alternate;D(Dt,Dt.current&1),D(ue,t),be===null&&(e===null||dl.current!==null||e.memoizedState!==null)&&(be=t)}function Xu(t){D(Dt,Dt.current),D(ue,t),be===null&&(be=t)}function Ur(t){t.tag===22?(D(Dt,Dt.current),D(ue,t),be===null&&(be=t)):oa()}function oa(){D(Dt,Dt.current),D(ue,ue.current)}function se(t){x(ue),be===t&&(be=null),x(Dt)}var Dt=o(0);function ei(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ws(a)||$s(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ge=0,X=null,ot=null,Mt=null,ai=!1,pl=!1,Qa=!1,li=0,Pl=0,ml=null,Vp=0;function _t(){throw Error(m(321))}function Zu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ne(t[a],e[a]))return!1;return!0}function Ku(t,e,a,l,n,i){return Ge=i,X=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,v.H=t===null||t.memoizedState===null?bo:ss,Qa=!1,i=a(l,n),Qa=!1,pl&&(i=jr(e,a,l,n)),Br(t),i}function Br(t){v.H=en;var e=ot!==null&&ot.next!==null;if(Ge=0,Mt=ot=X=null,ai=!1,Pl=0,ml=null,e)throw Error(m(300));t===null||Nt||(t=t.dependencies,t!==null&&Jn(t)&&(Nt=!0))}function jr(t,e,a,l){X=t;var n=0;do{if(pl&&(ml=null),Pl=0,pl=!1,25<=n)throw Error(m(301));if(n+=1,Mt=ot=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}v.H=_o,i=e(a,l)}while(pl);return i}function Xp(){var t=v.H,e=t.useState()[0];return e=typeof e.then=="function"?Il(e):e,t=t.useState()[0],(ot!==null?ot.memoizedState:null)!==t&&(X.flags|=1024),e}function Ju(){var t=li!==0;return li=0,t}function ku(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Fu(t){if(ai){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ai=!1}Ge=0,Mt=ot=X=null,pl=!1,Pl=li=0,ml=null}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?X.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function Et(){if(ot===null){var t=X.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var e=Mt===null?X.memoizedState:Mt.next;if(e!==null)Mt=e,ot=t;else{if(t===null)throw X.alternate===null?Error(m(467)):Error(m(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},Mt===null?X.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Il(t){var e=Pl;return Pl+=1,ml===null&&(ml=[]),t=Er(ml,t,e),e=X,(Mt===null?e.memoizedState:Mt.next)===null&&(e=e.alternate,v.H=e===null||e.memoizedState===null?bo:ss),t}function ii(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Il(t);if(t.$$typeof===zt)return Ht(t)}throw Error(m(438,String(t)))}function Wu(t){var e=null,a=X.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=X.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=ni(),X.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=Me;return e.index++,a}function Ve(t,e){return typeof e=="function"?e(t):e}function ui(t){var e=Et();return $u(e,ot,t)}function $u(t,e,a){var l=t.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var s=u=null,c=null,p=e,g=!1;do{var S=p.lane&-536870913;if(S!==p.lane?($&S)===S:(Ge&S)===S){var y=p.revertLane;if(y===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),S===cl&&(g=!0);else if((Ge&y)===y){p=p.next,y===cl&&(g=!0);continue}else S={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(s=c=S,u=i):c=c.next=S,X.lanes|=y,pa|=y;S=p.action,Qa&&a(i,S),i=p.hasEagerState?p.eagerState:a(i,S)}else y={lane:S,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(s=c=y,u=i):c=c.next=y,X.lanes|=S,pa|=S;p=p.next}while(p!==null&&p!==e);if(c===null?u=i:c.next=s,!ne(i,t.memoizedState)&&(Nt=!0,g&&(a=rl,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=c,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Pu(t){var e=Et(),a=e.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);ne(i,e.memoizedState)||(Nt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function Hr(t,e,a){var l=X,n=Et(),i=tt;if(i){if(a===void 0)throw Error(m(407));a=a()}else a=e();var u=!ne((ot||n).memoizedState,a);if(u&&(n.memoizedState=a,Nt=!0),n=n.queue,es(Lr.bind(null,l,n,t),[t]),n.getSnapshot!==e||u||Mt!==null&&Mt.memoizedState.tag&1){if(l.flags|=2048,yl(9,{destroy:void 0},Qr.bind(null,l,n,a,e),null),yt===null)throw Error(m(349));i||(Ge&127)!==0||Yr(l,e,a)}return a}function Yr(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=X.updateQueue,e===null?(e=ni(),X.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Qr(t,e,a,l){e.value=a,e.getSnapshot=l,Gr(e)&&Vr(t)}function Lr(t,e,a){return a(function(){Gr(e)&&Vr(t)})}function Gr(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ne(t,a)}catch{return!0}}function Vr(t){var e=Oa(t,2);e!==null&&It(e,t,2)}function Iu(t){var e=Kt();if(typeof t=="function"){var a=t;if(t=a(),Qa){Ie(!0);try{a()}finally{Ie(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:t},e}function Xr(t,e,a,l){return t.baseState=a,$u(t,ot,typeof l=="function"?l:Ve)}function Zp(t,e,a,l,n){if(ri(t))throw Error(m(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};v.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,Zr(e,i)):(i.next=a.next,e.pending=a.next=i)}}function Zr(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=v.T,u={};v.T=u;try{var s=a(n,l),c=v.S;c!==null&&c(u,s),Kr(t,e,s)}catch(p){ts(t,e,p)}finally{i!==null&&u.types!==null&&(i.types=u.types),v.T=i}}else try{i=a(n,l),Kr(t,e,i)}catch(p){ts(t,e,p)}}function Kr(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Jr(t,e,l)},function(l){return ts(t,e,l)}):Jr(t,e,a)}function Jr(t,e,a){e.status="fulfilled",e.value=a,kr(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Zr(t,a)))}function ts(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,kr(e),e=e.next;while(e!==l)}t.action=null}function kr(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Fr(t,e){return e}function Wr(t,e){if(tt){var a=yt.formState;if(a!==null){t:{var l=X;if(tt){if(gt){e:{for(var n=gt,i=ve;n.nodeType!==8;){if(!i){n=null;break e}if(n=_e(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){gt=_e(n.nextSibling),l=n.data==="F!";break t}}na(l)}l=!1}l&&(e=a[0])}}return a=Kt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},a.queue=l,a=ho.bind(null,X,l),l.dispatch=a,l=Iu(!1),i=us.bind(null,X,!1,l.queue),l=Kt(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=Zp.bind(null,X,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function $r(t){var e=Et();return Pr(e,ot,t)}function Pr(t,e,a){if(e=$u(t,e,Fr)[0],t=ui(Ve)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Il(e)}catch(u){throw u===ol?Wn:u}else l=e;e=Et();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(X.flags|=2048,yl(9,{destroy:void 0},Kp.bind(null,n,a),null)),[l,i,t]}function Kp(t,e){t.action=e}function Ir(t){var e=Et(),a=ot;if(a!==null)return Pr(e,a,t);Et(),e=e.memoizedState,a=Et();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function yl(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=X.updateQueue,e===null&&(e=ni(),X.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function to(){return Et().memoizedState}function si(t,e,a,l){var n=Kt();X.flags|=t,n.memoizedState=yl(1|e,{destroy:void 0},a,l===void 0?null:l)}function ci(t,e,a,l){var n=Et();l=l===void 0?null:l;var i=n.memoizedState.inst;ot!==null&&l!==null&&Zu(l,ot.memoizedState.deps)?n.memoizedState=yl(e,i,a,l):(X.flags|=t,n.memoizedState=yl(1|e,i,a,l))}function eo(t,e){si(8390656,8,t,e)}function es(t,e){ci(2048,8,t,e)}function Jp(t){X.flags|=4;var e=X.updateQueue;if(e===null)e=ni(),X.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function ao(t){var e=Et().memoizedState;return Jp({ref:e,nextImpl:t}),function(){if((nt&2)!==0)throw Error(m(440));return e.impl.apply(void 0,arguments)}}function lo(t,e){return ci(4,2,t,e)}function no(t,e){return ci(4,4,t,e)}function io(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uo(t,e,a){a=a!=null?a.concat([t]):null,ci(4,4,io.bind(null,e,t),a)}function as(){}function so(t,e){var a=Et();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&Zu(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function co(t,e){var a=Et();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&Zu(e,l[1]))return l[0];if(l=t(),Qa){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[l,e],l}function ls(t,e,a){return a===void 0||(Ge&1073741824)!==0&&($&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=ff(),X.lanes|=t,pa|=t,a)}function ro(t,e,a,l){return ne(a,e)?a:dl.current!==null?(t=ls(t,a,l),ne(t,e)||(Nt=!0),t):(Ge&42)===0||(Ge&1073741824)!==0&&($&261930)===0?(Nt=!0,t.memoizedState=a):(t=ff(),X.lanes|=t,pa|=t,e)}function oo(t,e,a,l,n){var i=T.p;T.p=i!==0&&8>i?i:8;var u=v.T,s={};v.T=s,us(t,!1,e,a);try{var c=n(),p=v.S;if(p!==null&&p(s,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var g=Gp(c,l);tn(t,e,g,oe(t))}else tn(t,e,l,oe(t))}catch(S){tn(t,e,{then:function(){},status:"rejected",reason:S},oe())}finally{T.p=i,u!==null&&s.types!==null&&(u.types=s.types),v.T=u}}function kp(){}function ns(t,e,a,l){if(t.tag!==5)throw Error(m(476));var n=fo(t).queue;oo(t,n,e,Y,a===null?kp:function(){return po(t),a(l)})}function fo(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:Y},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function po(t){var e=fo(t);e.next===null&&(e=t.alternate.memoizedState),tn(t,e.next.queue,{},oe())}function is(){return Ht(vn)}function mo(){return Et().memoizedState}function yo(){return Et().memoizedState}function Fp(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=oe();t=sa(a);var l=ca(e,t,a);l!==null&&(It(l,e,a),Fl(l,e,a)),e={cache:qu()},t.payload=e;return}e=e.return}}function Wp(t,e,a){var l=oe();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ri(t)?go(e,a):(a=zu(t,e,a,l),a!==null&&(It(a,t,l),vo(a,e,l)))}function ho(t,e,a){var l=oe();tn(t,e,a,l)}function tn(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ri(t))go(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,ne(s,u))return Vn(t,e,n,0),yt===null&&Gn(),!1}catch{}if(a=zu(t,e,n,l),a!==null)return It(a,t,l),vo(a,e,l),!0}return!1}function us(t,e,a,l){if(l={lane:2,revertLane:Hs(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ri(t)){if(e)throw Error(m(479))}else e=zu(t,a,l,2),e!==null&&It(e,t,2)}function ri(t){var e=t.alternate;return t===X||e!==null&&e===X}function go(t,e){pl=ai=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function vo(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,xc(t,a)}}var en={readContext:Ht,use:ii,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t};en.useEffectEvent=_t;var bo={readContext:Ht,use:ii,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:eo,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,si(4194308,4,io.bind(null,e,t),a)},useLayoutEffect:function(t,e){return si(4194308,4,t,e)},useInsertionEffect:function(t,e){si(4,2,t,e)},useMemo:function(t,e){var a=Kt();e=e===void 0?null:e;var l=t();if(Qa){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=Kt();if(a!==void 0){var n=a(e);if(Qa){Ie(!0);try{a(e)}finally{Ie(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Wp.bind(null,X,t),[l.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:function(t){t=Iu(t);var e=t.queue,a=ho.bind(null,X,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:as,useDeferredValue:function(t,e){var a=Kt();return ls(a,t,e)},useTransition:function(){var t=Iu(!1);return t=oo.bind(null,X,t.queue,!0,!1),Kt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=X,n=Kt();if(tt){if(a===void 0)throw Error(m(407));a=a()}else{if(a=e(),yt===null)throw Error(m(349));($&127)!==0||Yr(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,eo(Lr.bind(null,l,i,t),[t]),l.flags|=2048,yl(9,{destroy:void 0},Qr.bind(null,l,i,a,e),null),a},useId:function(){var t=Kt(),e=yt.identifierPrefix;if(tt){var a=Oe,l=Ne;a=(l&~(1<<32-le(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=li++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Vp++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:is,useFormState:Wr,useActionState:Wr,useOptimistic:function(t){var e=Kt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=us.bind(null,X,!0,a),a.dispatch=e,[t,e]},useMemoCache:Wu,useCacheRefresh:function(){return Kt().memoizedState=Fp.bind(null,X)},useEffectEvent:function(t){var e=Kt(),a={impl:t};return e.memoizedState=a,function(){if((nt&2)!==0)throw Error(m(440));return a.impl.apply(void 0,arguments)}}},ss={readContext:Ht,use:ii,useCallback:so,useContext:Ht,useEffect:es,useImperativeHandle:uo,useInsertionEffect:lo,useLayoutEffect:no,useMemo:co,useReducer:ui,useRef:to,useState:function(){return ui(Ve)},useDebugValue:as,useDeferredValue:function(t,e){var a=Et();return ro(a,ot.memoizedState,t,e)},useTransition:function(){var t=ui(Ve)[0],e=Et().memoizedState;return[typeof t=="boolean"?t:Il(t),e]},useSyncExternalStore:Hr,useId:mo,useHostTransitionStatus:is,useFormState:$r,useActionState:$r,useOptimistic:function(t,e){var a=Et();return Xr(a,ot,t,e)},useMemoCache:Wu,useCacheRefresh:yo};ss.useEffectEvent=ao;var _o={readContext:Ht,use:ii,useCallback:so,useContext:Ht,useEffect:es,useImperativeHandle:uo,useInsertionEffect:lo,useLayoutEffect:no,useMemo:co,useReducer:Pu,useRef:to,useState:function(){return Pu(Ve)},useDebugValue:as,useDeferredValue:function(t,e){var a=Et();return ot===null?ls(a,t,e):ro(a,ot.memoizedState,t,e)},useTransition:function(){var t=Pu(Ve)[0],e=Et().memoizedState;return[typeof t=="boolean"?t:Il(t),e]},useSyncExternalStore:Hr,useId:mo,useHostTransitionStatus:is,useFormState:Ir,useActionState:Ir,useOptimistic:function(t,e){var a=Et();return ot!==null?Xr(a,ot,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:yo};_o.useEffectEvent=ao;function cs(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:U({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var rs={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=oe(),n=sa(l);n.payload=e,a!=null&&(n.callback=a),e=ca(t,n,l),e!==null&&(It(e,t,l),Fl(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=oe(),n=sa(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=ca(t,n,l),e!==null&&(It(e,t,l),Fl(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=oe(),l=sa(a);l.tag=2,e!=null&&(l.callback=e),e=ca(t,l,a),e!==null&&(It(e,t,a),Fl(e,t,a))}};function So(t,e,a,l,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):e.prototype&&e.prototype.isPureReactComponent?!Ll(a,l)||!Ll(n,i):!0}function xo(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&rs.enqueueReplaceState(e,e.state,null)}function La(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=U({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function zo(t){Ln(t)}function Ao(t){console.error(t)}function To(t){Ln(t)}function oi(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Do(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function os(t,e,a){return a=sa(a),a.tag=3,a.payload={element:null},a.callback=function(){oi(t,e)},a}function Eo(t){return t=sa(t),t.tag=3,t}function Co(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){Do(e,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Do(e,a,l),typeof n!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function $p(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&sl(e,a,n,!0),a=ue.current,a!==null){switch(a.tag){case 31:case 13:return be===null?xi():a.alternate===null&&St===0&&(St=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===$n?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Us(t,l,n)),!1;case 22:return a.flags|=65536,l===$n?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Us(t,l,n)),!1}throw Error(m(435,a.tag))}return Us(t,l,n),xi(),!1}if(tt)return e=ue.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==Mu&&(t=Error(m(422),{cause:l}),Xl(ye(t,a)))):(l!==Mu&&(e=Error(m(423),{cause:l}),Xl(ye(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=ye(l,a),n=os(t.stateNode,l,n),Qu(t,n),St!==4&&(St=2)),!1;var i=Error(m(520),{cause:l});if(i=ye(i,a),on===null?on=[i]:on.push(i),St!==4&&(St=2),e===null)return!0;l=ye(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=os(a.stateNode,l,t),Qu(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Eo(n),Co(n,t,a,l),Qu(a,n),!1}a=a.return}while(a!==null);return!1}var fs=Error(m(461)),Nt=!1;function Yt(t,e,a,l){e.child=t===null?Or(e,null,a,l):Ya(e,t.child,a,l)}function Mo(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var u={};for(var s in l)s!=="ref"&&(u[s]=l[s])}else u=l;return Ua(e),l=Ku(t,e,a,u,i,n),s=Ju(),t!==null&&!Nt?(ku(t,e,n),Xe(t,e,n)):(tt&&s&&Eu(e),e.flags|=1,Yt(t,e,l,n),e.child)}function No(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Au(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,Oo(t,e,i,l,n)):(t=Zn(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!bs(t,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Ll,a(u,l)&&t.ref===e.ref)return Xe(t,e,n)}return e.flags|=1,t=He(i,l),t.ref=e.ref,t.return=e,e.child=t}function Oo(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(Ll(i,l)&&t.ref===e.ref)if(Nt=!1,e.pendingProps=l=i,bs(t,n))(t.flags&131072)!==0&&(Nt=!0);else return e.lanes=t.lanes,Xe(t,e,n)}return ds(t,e,a,l,n)}function wo(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return Ro(t,e,i,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fn(e,i!==null?i.cachePool:null),i!==null?qr(e,i):Gu(),Ur(e);else return l=e.lanes=536870912,Ro(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Fn(e,i.cachePool),qr(e,i),oa(),e.memoizedState=null):(t!==null&&Fn(e,null),Gu(),oa());return Yt(t,e,n,a),e.child}function an(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ro(t,e,a,l,n){var i=Bu();return i=i===null?null:{parent:Ct._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&Fn(e,null),Gu(),Ur(e),t!==null&&sl(t,e,l,!0),e.childLanes=n,null}function fi(t,e){return e=pi({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function qo(t,e,a){return Ya(e,t.child,null,a),t=fi(e,e.pendingProps),t.flags|=2,se(e),e.memoizedState=null,t}function Pp(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(tt){if(l.mode==="hidden")return t=fi(e,l),e.lanes=536870912,an(null,t);if(Xu(e),(t=gt)?(t=Jf(t,ve),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:aa!==null?{id:Ne,overflow:Oe}:null,retryLane:536870912,hydrationErrors:null},a=hr(t),a.return=e,e.child=a,jt=e,gt=null)):t=null,t===null)throw na(e);return e.lanes=536870912,null}return fi(e,l)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Xu(e),n)if(e.flags&256)e.flags&=-257,e=qo(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(m(558));else if(Nt||sl(t,e,a,!1),n=(a&t.childLanes)!==0,Nt||n){if(l=yt,l!==null&&(u=zc(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Oa(t,u),It(l,t,u),fs;xi(),e=qo(t,e,a)}else t=i.treeContext,gt=_e(u.nextSibling),jt=e,tt=!0,la=null,ve=!1,t!==null&&br(e,t),e=fi(e,l),e.flags|=4096;return e}return t=He(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function di(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(m(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function ds(t,e,a,l,n){return Ua(e),a=Ku(t,e,a,l,void 0,n),l=Ju(),t!==null&&!Nt?(ku(t,e,n),Xe(t,e,n)):(tt&&l&&Eu(e),e.flags|=1,Yt(t,e,a,n),e.child)}function Uo(t,e,a,l,n,i){return Ua(e),e.updateQueue=null,a=jr(e,l,a,n),Br(t),l=Ju(),t!==null&&!Nt?(ku(t,e,i),Xe(t,e,i)):(tt&&l&&Eu(e),e.flags|=1,Yt(t,e,a,i),e.child)}function Bo(t,e,a,l,n){if(Ua(e),e.stateNode===null){var i=ll,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ht(u)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=rs,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},Hu(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ht(u):ll,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(cs(e,a,u,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&rs.enqueueReplaceState(i,i.state,null),$l(e,l,i,n),Wl(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,c=La(a,s);i.props=c;var p=i.context,g=a.contextType;u=ll,typeof g=="object"&&g!==null&&(u=Ht(g));var S=a.getDerivedStateFromProps;g=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||p!==u)&&xo(e,i,l,u),ua=!1;var y=e.memoizedState;i.state=y,$l(e,l,i,n),Wl(),p=e.memoizedState,s||y!==p||ua?(typeof S=="function"&&(cs(e,a,S,l),p=e.memoizedState),(c=ua||So(e,a,c,l,y,p,u))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=p),i.props=l,i.state=p,i.context=u,l=c):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,Yu(t,e),u=e.memoizedProps,g=La(a,u),i.props=g,S=e.pendingProps,y=i.context,p=a.contextType,c=ll,typeof p=="object"&&p!==null&&(c=Ht(p)),s=a.getDerivedStateFromProps,(p=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==S||y!==c)&&xo(e,i,l,c),ua=!1,y=e.memoizedState,i.state=y,$l(e,l,i,n),Wl();var h=e.memoizedState;u!==S||y!==h||ua||t!==null&&t.dependencies!==null&&Jn(t.dependencies)?(typeof s=="function"&&(cs(e,a,s,l),h=e.memoizedState),(g=ua||So(e,a,g,l,y,h,c)||t!==null&&t.dependencies!==null&&Jn(t.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,h,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,h,c)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=h),i.props=l,i.state=h,i.context=c,l=g):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,di(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=Ya(e,t.child,null,n),e.child=Ya(e,null,a,n)):Yt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=Xe(t,e,n),t}function jo(t,e,a,l){return Ra(),e.flags|=256,Yt(t,e,a,l),e.child}var ps={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ms(t){return{baseLanes:t,cachePool:Tr()}}function ys(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=re),t}function Ho(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(Dt.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(tt){if(n?ra(e):oa(),(t=gt)?(t=Jf(t,ve),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:aa!==null?{id:Ne,overflow:Oe}:null,retryLane:536870912,hydrationErrors:null},a=hr(t),a.return=e,e.child=a,jt=e,gt=null)):t=null,t===null)throw na(e);return $s(t)?e.lanes=32:e.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(oa(),n=e.mode,s=pi({mode:"hidden",children:s},n),l=wa(l,n,a,null),s.return=e,l.return=e,s.sibling=l,e.child=s,l=e.child,l.memoizedState=ms(a),l.childLanes=ys(t,u,a),e.memoizedState=ps,an(null,l)):(ra(e),hs(e,s))}var c=t.memoizedState;if(c!==null&&(s=c.dehydrated,s!==null)){if(i)e.flags&256?(ra(e),e.flags&=-257,e=gs(t,e,a)):e.memoizedState!==null?(oa(),e.child=t.child,e.flags|=128,e=null):(oa(),s=l.fallback,n=e.mode,l=pi({mode:"visible",children:l.children},n),s=wa(s,n,a,null),s.flags|=2,l.return=e,s.return=e,l.sibling=s,e.child=l,Ya(e,t.child,null,a),l=e.child,l.memoizedState=ms(a),l.childLanes=ys(t,u,a),e.memoizedState=ps,e=an(null,l));else if(ra(e),$s(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var p=u.dgst;u=p,l=Error(m(419)),l.stack="",l.digest=u,Xl({value:l,source:null,stack:null}),e=gs(t,e,a)}else if(Nt||sl(t,e,a,!1),u=(a&t.childLanes)!==0,Nt||u){if(u=yt,u!==null&&(l=zc(u,a),l!==0&&l!==c.retryLane))throw c.retryLane=l,Oa(t,l),It(u,t,l),fs;Ws(s)||xi(),e=gs(t,e,a)}else Ws(s)?(e.flags|=192,e.child=t.child,e=null):(t=c.treeContext,gt=_e(s.nextSibling),jt=e,tt=!0,la=null,ve=!1,t!==null&&br(e,t),e=hs(e,l.children),e.flags|=4096);return e}return n?(oa(),s=l.fallback,n=e.mode,c=t.child,p=c.sibling,l=He(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,p!==null?s=He(p,s):(s=wa(s,n,a,null),s.flags|=2),s.return=e,l.return=e,l.sibling=s,e.child=l,an(null,l),l=e.child,s=t.child.memoizedState,s===null?s=ms(a):(n=s.cachePool,n!==null?(c=Ct._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=Tr(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=ys(t,u,a),e.memoizedState=ps,an(t.child,l)):(ra(e),a=t.child,t=a.sibling,a=He(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function hs(t,e){return e=pi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function pi(t,e){return t=ie(22,t,null,e),t.lanes=0,t}function gs(t,e,a){return Ya(e,t.child,null,a),t=hs(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yo(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),wu(t.return,e,a)}function vs(t,e,a,l,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Qo(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Dt.current,s=(u&2)!==0;if(s?(u=u&1|2,e.flags|=128):u&=1,D(Dt,u),Yt(t,e,l,a),l=tt?Vl:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yo(t,a,e);else if(t.tag===19)Yo(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&ei(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),vs(e,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ei(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}vs(e,!0,a,null,i,l);break;case"together":vs(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Xe(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),pa|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(sl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(m(153));if(e.child!==null){for(t=e.child,a=He(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=He(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function bs(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Jn(t)))}function Ip(t,e,a){switch(e.tag){case 3:Zt(e,e.stateNode.containerInfo),ia(e,Ct,t.memoizedState.cache),Ra();break;case 27:case 5:Cl(e);break;case 4:Zt(e,e.stateNode.containerInfo);break;case 10:ia(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Xu(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(ra(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Ho(t,e,a):(ra(e),t=Xe(t,e,a),t!==null?t.sibling:null);ra(e);break;case 19:var n=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(sl(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return Qo(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),D(Dt,Dt.current),l)break;return null;case 22:return e.lanes=0,wo(t,e,a,e.pendingProps);case 24:ia(e,Ct,t.memoizedState.cache)}return Xe(t,e,a)}function Lo(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Nt=!0;else{if(!bs(t,a)&&(e.flags&128)===0)return Nt=!1,Ip(t,e,a);Nt=(t.flags&131072)!==0}else Nt=!1,tt&&(e.flags&1048576)!==0&&vr(e,Vl,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=ja(e.elementType),e.type=t,typeof t=="function")Au(t)?(l=La(t,l),e.tag=1,e=Bo(null,e,t,l,a)):(e.tag=0,e=ds(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===Ut){e.tag=11,e=Mo(null,e,t,l,a);break t}else if(n===H){e.tag=14,e=No(null,e,t,l,a);break t}}throw e=qe(t)||t,Error(m(306,e,""))}}return e;case 0:return ds(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=La(l,e.pendingProps),Bo(t,e,l,n,a);case 3:t:{if(Zt(e,e.stateNode.containerInfo),t===null)throw Error(m(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,Yu(t,e),$l(e,l,null,a);var u=e.memoizedState;if(l=u.cache,ia(e,Ct,l),l!==i.cache&&Ru(e,[Ct],a,!0),Wl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=jo(t,e,l,a);break t}else if(l!==n){n=ye(Error(m(424)),e),Xl(n),e=jo(t,e,l,a);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,gt=_e(t.firstChild),jt=e,tt=!0,la=null,ve=!0,a=Or(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ra(),l===n){e=Xe(t,e,a);break t}Yt(t,e,l,a)}e=e.child}return e;case 26:return di(t,e),t===null?(a=If(e.type,null,e.pendingProps,null))?e.memoizedState=a:tt||(a=e.type,t=e.pendingProps,l=Mi(k.current).createElement(a),l[Bt]=e,l[Jt]=t,Qt(l,a,t),Rt(l),e.stateNode=l):e.memoizedState=If(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Cl(e),t===null&&tt&&(l=e.stateNode=Wf(e.type,e.pendingProps,k.current),jt=e,ve=!0,n=gt,va(e.type)?(Ps=n,gt=_e(l.firstChild)):gt=n),Yt(t,e,e.pendingProps.children,a),di(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&tt&&((n=l=gt)&&(l=Mm(l,e.type,e.pendingProps,ve),l!==null?(e.stateNode=l,jt=e,gt=_e(l.firstChild),ve=!1,n=!0):n=!1),n||na(e)),Cl(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,Js(n,i)?l=null:u!==null&&Js(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Ku(t,e,Xp,null,null,a),vn._currentValue=n),di(t,e),Yt(t,e,l,a),e.child;case 6:return t===null&&tt&&((t=a=gt)&&(a=Nm(a,e.pendingProps,ve),a!==null?(e.stateNode=a,jt=e,gt=null,t=!0):t=!1),t||na(e)),null;case 13:return Ho(t,e,a);case 4:return Zt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Ya(e,null,l,a):Yt(t,e,l,a),e.child;case 11:return Mo(t,e,e.type,e.pendingProps,a);case 7:return Yt(t,e,e.pendingProps,a),e.child;case 8:return Yt(t,e,e.pendingProps.children,a),e.child;case 12:return Yt(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,ia(e,e.type,l.value),Yt(t,e,l.children,a),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,Ua(e),n=Ht(n),l=l(n),e.flags|=1,Yt(t,e,l,a),e.child;case 14:return No(t,e,e.type,e.pendingProps,a);case 15:return Oo(t,e,e.type,e.pendingProps,a);case 19:return Qo(t,e,a);case 31:return Pp(t,e,a);case 22:return wo(t,e,a,e.pendingProps);case 24:return Ua(e),l=Ht(Ct),t===null?(n=Bu(),n===null&&(n=yt,i=qu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},Hu(e),ia(e,Ct,n)):((t.lanes&a)!==0&&(Yu(t,e),$l(e,null,null,a),Wl()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),ia(e,Ct,l)):(l=i.cache,ia(e,Ct,l),l!==n.cache&&Ru(e,[Ct],a,!0))),Yt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(m(156,e.tag))}function Ze(t){t.flags|=4}function _s(t,e,a,l,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(yf())t.flags|=8192;else throw Ha=$n,ju}else t.flags&=-16777217}function Go(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!nd(e))if(yf())t.flags|=8192;else throw Ha=$n,ju}function mi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?_c():536870912,t.lanes|=e,bl|=e)}function ln(t,e){if(!tt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function tm(t,e,a){var l=e.pendingProps;switch(Cu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return vt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Le(Ct),Tt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ul(e)?Ze(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Nu())),vt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Ze(e),i!==null?(vt(e),Go(e,i)):(vt(e),_s(e,n,null,l,a))):i?i!==t.memoizedState?(Ze(e),vt(e),Go(e,i)):(vt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ze(e),vt(e),_s(e,n,t,l,a)),null;case 27:if(Tn(e),a=k.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ze(e);else{if(!l){if(e.stateNode===null)throw Error(m(166));return vt(e),null}t=C.current,ul(e)?_r(e):(t=Wf(n,l,a),e.stateNode=t,Ze(e))}return vt(e),null;case 5:if(Tn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ze(e);else{if(!l){if(e.stateNode===null)throw Error(m(166));return vt(e),null}if(i=C.current,ul(e))_r(e);else{var u=Mi(k.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Bt]=e,i[Jt]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(Qt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ze(e)}}return vt(e),_s(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Ze(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(m(166));if(t=k.current,ul(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=jt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[Bt]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Yf(t.nodeValue,a)),t||na(e,!0)}else t=Mi(t).createTextNode(l),t[Bt]=e,e.stateNode=t}return vt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=ul(e),a!==null){if(t===null){if(!l)throw Error(m(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(557));t[Bt]=e}else Ra(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;vt(e),t=!1}else a=Nu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(se(e),e):(se(e),null);if((e.flags&128)!==0)throw Error(m(558))}return vt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ul(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(m(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[Bt]=e}else Ra(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;vt(e),n=!1}else n=Nu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(se(e),e):(se(e),null)}return se(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),mi(e,e.updateQueue),vt(e),null);case 4:return Tt(),t===null&&Gs(e.stateNode.containerInfo),vt(e),null;case 10:return Le(e.type),vt(e),null;case 19:if(x(Dt),l=e.memoizedState,l===null)return vt(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)ln(l,!1);else{if(St!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=ei(t),i!==null){for(e.flags|=128,ln(l,!1),t=i.updateQueue,e.updateQueue=t,mi(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)yr(a,t),a=a.sibling;return D(Dt,Dt.current&1|2),tt&&Ye(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&ee()>bi&&(e.flags|=128,n=!0,ln(l,!1),e.lanes=4194304)}else{if(!n)if(t=ei(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,mi(e,t),ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!tt)return vt(e),null}else 2*ee()-l.renderingStartTime>bi&&a!==536870912&&(e.flags|=128,n=!0,ln(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ee(),t.sibling=null,a=Dt.current,D(Dt,n?a&1|2:a&1),tt&&Ye(e,l.treeForkCount),t):(vt(e),null);case 22:case 23:return se(e),Vu(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),a=e.updateQueue,a!==null&&mi(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&x(Ba),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Le(Ct),vt(e),null;case 25:return null;case 30:return null}throw Error(m(156,e.tag))}function em(t,e){switch(Cu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Le(Ct),Tt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Tn(e),null;case 31:if(e.memoizedState!==null){if(se(e),e.alternate===null)throw Error(m(340));Ra()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(se(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(m(340));Ra()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return x(Dt),null;case 4:return Tt(),null;case 10:return Le(e.type),null;case 22:case 23:return se(e),Vu(),t!==null&&x(Ba),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Le(Ct),null;case 25:return null;default:return null}}function Vo(t,e){switch(Cu(e),e.tag){case 3:Le(Ct),Tt();break;case 26:case 27:case 5:Tn(e);break;case 4:Tt();break;case 31:e.memoizedState!==null&&se(e);break;case 13:se(e);break;case 19:x(Dt);break;case 10:Le(e.type);break;case 22:case 23:se(e),Vu(),t!==null&&x(Ba);break;case 24:Le(Ct)}}function nn(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(s){ct(e,e.return,s)}}function fa(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var u=l.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=e;var c=a,p=s;try{p()}catch(g){ct(n,c,g)}}}l=l.next}while(l!==i)}}catch(g){ct(e,e.return,g)}}function Xo(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Rr(e,a)}catch(l){ct(t,t.return,l)}}}function Zo(t,e,a){a.props=La(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){ct(t,e,l)}}function un(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){ct(t,e,n)}}function we(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ct(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ct(t,e,n)}else a.current=null}function Ko(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ct(t,t.return,n)}}function Ss(t,e,a){try{var l=t.stateNode;zm(l,t.type,a,e),l[Jt]=e}catch(n){ct(t,t.return,n)}}function Jo(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&va(t.type)||t.tag===4}function xs(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Jo(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zs(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Be));else if(l!==4&&(l===27&&va(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(zs(t,e,a),t=t.sibling;t!==null;)zs(t,e,a),t=t.sibling}function yi(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(yi(t,e,a),t=t.sibling;t!==null;)yi(t,e,a),t=t.sibling}function ko(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qt(e,l,a),e[Bt]=t,e[Jt]=a}catch(i){ct(t,t.return,i)}}var Ke=!1,Ot=!1,As=!1,Fo=typeof WeakSet=="function"?WeakSet:Set,qt=null;function am(t,e){if(t=t.containerInfo,Zs=Bi,t=ur(t),gu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var u=0,s=-1,c=-1,p=0,g=0,S=t,y=null;e:for(;;){for(var h;S!==a||n!==0&&S.nodeType!==3||(s=u+n),S!==i||l!==0&&S.nodeType!==3||(c=u+l),S.nodeType===3&&(u+=S.nodeValue.length),(h=S.firstChild)!==null;)y=S,S=h;for(;;){if(S===t)break e;if(y===a&&++p===n&&(s=u),y===i&&++g===l&&(c=u),(h=S.nextSibling)!==null)break;S=y,y=S.parentNode}S=h}a=s===-1||c===-1?null:{start:s,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ks={focusedElem:t,selectionRange:a},Bi=!1,qt=e;qt!==null;)if(e=qt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,qt=t;else for(;qt!==null;){switch(e=qt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=e,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var E=La(a.type,n);t=l.getSnapshotBeforeUpdate(E,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(j){ct(a,a.return,j)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Fs(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Fs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(m(163))}if(t=e.sibling,t!==null){t.return=e.return,qt=t;break}qt=e.return}}function Wo(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ke(t,a),l&4&&nn(5,a);break;case 1:if(ke(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){ct(a,a.return,u)}else{var n=La(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){ct(a,a.return,u)}}l&64&&Xo(a),l&512&&un(a,a.return);break;case 3:if(ke(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Rr(t,e)}catch(u){ct(a,a.return,u)}}break;case 27:e===null&&l&4&&ko(a);case 26:case 5:ke(t,a),e===null&&l&4&&Ko(a),l&512&&un(a,a.return);break;case 12:ke(t,a);break;case 31:ke(t,a),l&4&&Io(t,a);break;case 13:ke(t,a),l&4&&tf(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=fm.bind(null,a),Om(t,a))));break;case 22:if(l=a.memoizedState!==null||Ke,!l){e=e!==null&&e.memoizedState!==null||Ot,n=Ke;var i=Ot;Ke=l,(Ot=e)&&!i?Fe(t,a,(a.subtreeFlags&8772)!==0):ke(t,a),Ke=n,Ot=i}break;case 30:break;default:ke(t,a)}}function $o(t){var e=t.alternate;e!==null&&(t.alternate=null,$o(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&tu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var bt=null,Ft=!1;function Je(t,e,a){for(a=a.child;a!==null;)Po(t,e,a),a=a.sibling}function Po(t,e,a){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(Ml,a)}catch{}switch(a.tag){case 26:Ot||we(a,e),Je(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ot||we(a,e);var l=bt,n=Ft;va(a.type)&&(bt=a.stateNode,Ft=!1),Je(t,e,a),yn(a.stateNode),bt=l,Ft=n;break;case 5:Ot||we(a,e);case 6:if(l=bt,n=Ft,bt=null,Je(t,e,a),bt=l,Ft=n,bt!==null)if(Ft)try{(bt.nodeType===9?bt.body:bt.nodeName==="HTML"?bt.ownerDocument.body:bt).removeChild(a.stateNode)}catch(i){ct(a,e,i)}else try{bt.removeChild(a.stateNode)}catch(i){ct(a,e,i)}break;case 18:bt!==null&&(Ft?(t=bt,Zf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),El(t)):Zf(bt,a.stateNode));break;case 4:l=bt,n=Ft,bt=a.stateNode.containerInfo,Ft=!0,Je(t,e,a),bt=l,Ft=n;break;case 0:case 11:case 14:case 15:fa(2,a,e),Ot||fa(4,a,e),Je(t,e,a);break;case 1:Ot||(we(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Zo(a,e,l)),Je(t,e,a);break;case 21:Je(t,e,a);break;case 22:Ot=(l=Ot)||a.memoizedState!==null,Je(t,e,a),Ot=l;break;default:Je(t,e,a)}}function Io(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{El(t)}catch(a){ct(e,e.return,a)}}}function tf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{El(t)}catch(a){ct(e,e.return,a)}}function lm(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Fo),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Fo),e;default:throw Error(m(435,t.tag))}}function hi(t,e){var a=lm(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var n=dm.bind(null,t,l);l.then(n,n)}})}function Wt(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,u=e,s=u;t:for(;s!==null;){switch(s.tag){case 27:if(va(s.type)){bt=s.stateNode,Ft=!1;break t}break;case 5:bt=s.stateNode,Ft=!1;break t;case 3:case 4:bt=s.stateNode.containerInfo,Ft=!0;break t}s=s.return}if(bt===null)throw Error(m(160));Po(i,u,n),bt=null,Ft=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)ef(e,t),e=e.sibling}var Ae=null;function ef(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wt(e,t),$t(t),l&4&&(fa(3,t,t.return),nn(3,t),fa(5,t,t.return));break;case 1:Wt(e,t),$t(t),l&512&&(Ot||a===null||we(a,a.return)),l&64&&Ke&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ae;if(Wt(e,t),$t(t),l&512&&(Ot||a===null||we(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[wl]||i[Bt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Qt(i,l,a),i[Bt]=t,Rt(i),l=i;break t;case"link":var u=ad("link","href",n).get(l+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break e}}i=n.createElement(l),Qt(i,l,a),n.head.appendChild(i);break;case"meta":if(u=ad("meta","content",n).get(l+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break e}}i=n.createElement(l),Qt(i,l,a),n.head.appendChild(i);break;default:throw Error(m(468,l))}i[Bt]=t,Rt(i),l=i}t.stateNode=l}else ld(n,t.type,t.stateNode);else t.stateNode=ed(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?ld(n,t.type,t.stateNode):ed(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Ss(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wt(e,t),$t(t),l&512&&(Ot||a===null||we(a,a.return)),a!==null&&l&4&&Ss(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wt(e,t),$t(t),l&512&&(Ot||a===null||we(a,a.return)),t.flags&32){n=t.stateNode;try{Wa(n,"")}catch(E){ct(t,t.return,E)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Ss(t,n,a!==null?a.memoizedProps:n)),l&1024&&(As=!0);break;case 6:if(Wt(e,t),$t(t),l&4){if(t.stateNode===null)throw Error(m(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(E){ct(t,t.return,E)}}break;case 3:if(wi=null,n=Ae,Ae=Ni(e.containerInfo),Wt(e,t),Ae=n,$t(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{El(e.containerInfo)}catch(E){ct(t,t.return,E)}As&&(As=!1,af(t));break;case 4:l=Ae,Ae=Ni(t.stateNode.containerInfo),Wt(e,t),$t(t),Ae=l;break;case 12:Wt(e,t),$t(t);break;case 31:Wt(e,t),$t(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,hi(t,l)));break;case 13:Wt(e,t),$t(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vi=ee()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,hi(t,l)));break;case 22:n=t.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,p=Ke,g=Ot;if(Ke=p||n,Ot=g||c,Wt(e,t),Ot=g,Ke=p,$t(t),l&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||c||Ke||Ot||Ga(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){c=a=e;try{if(i=c.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=c.stateNode;var S=c.memoizedProps.style,y=S!=null&&S.hasOwnProperty("display")?S.display:null;s.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(E){ct(c,c.return,E)}}}else if(e.tag===6){if(a===null){c=e;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(E){ct(c,c.return,E)}}}else if(e.tag===18){if(a===null){c=e;try{var h=c.stateNode;n?Kf(h,!0):Kf(c.stateNode,!1)}catch(E){ct(c,c.return,E)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,hi(t,a))));break;case 19:Wt(e,t),$t(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,hi(t,l)));break;case 30:break;case 21:break;default:Wt(e,t),$t(t)}}function $t(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Jo(l)){a=l;break}l=l.return}if(a==null)throw Error(m(160));switch(a.tag){case 27:var n=a.stateNode,i=xs(t);yi(t,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Wa(u,""),a.flags&=-33);var s=xs(t);yi(t,s,u);break;case 3:case 4:var c=a.stateNode.containerInfo,p=xs(t);zs(t,p,c);break;default:throw Error(m(161))}}catch(g){ct(t,t.return,g)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function af(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;af(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ke(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Wo(t,e.alternate,e),e=e.sibling}function Ga(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:fa(4,e,e.return),Ga(e);break;case 1:we(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Zo(e,e.return,a),Ga(e);break;case 27:yn(e.stateNode);case 26:case 5:we(e,e.return),Ga(e);break;case 22:e.memoizedState===null&&Ga(e);break;case 30:Ga(e);break;default:Ga(e)}t=t.sibling}}function Fe(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:Fe(n,i,a),nn(4,i);break;case 1:if(Fe(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){ct(l,l.return,p)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)wr(c[n],s)}catch(p){ct(l,l.return,p)}}a&&u&64&&Xo(i),un(i,i.return);break;case 27:ko(i);case 26:case 5:Fe(n,i,a),a&&l===null&&u&4&&Ko(i),un(i,i.return);break;case 12:Fe(n,i,a);break;case 31:Fe(n,i,a),a&&u&4&&Io(n,i);break;case 13:Fe(n,i,a),a&&u&4&&tf(n,i);break;case 22:i.memoizedState===null&&Fe(n,i,a),un(i,i.return);break;case 30:break;default:Fe(n,i,a)}e=e.sibling}}function Ts(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Zl(a))}function Ds(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zl(t))}function Te(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lf(t,e,a,l),e=e.sibling}function lf(t,e,a,l){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Te(t,e,a,l),n&2048&&nn(9,e);break;case 1:Te(t,e,a,l);break;case 3:Te(t,e,a,l),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zl(t)));break;case 12:if(n&2048){Te(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){ct(e,e.return,c)}}else Te(t,e,a,l);break;case 31:Te(t,e,a,l);break;case 13:Te(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?Te(t,e,a,l):sn(t,e):i._visibility&2?Te(t,e,a,l):(i._visibility|=2,hl(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Ts(u,e);break;case 24:Te(t,e,a,l),n&2048&&Ds(e.alternate,e);break;default:Te(t,e,a,l)}}function hl(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,s=a,c=l,p=u.flags;switch(u.tag){case 0:case 11:case 15:hl(i,u,s,c,n),nn(8,u);break;case 23:break;case 22:var g=u.stateNode;u.memoizedState!==null?g._visibility&2?hl(i,u,s,c,n):sn(i,u):(g._visibility|=2,hl(i,u,s,c,n)),n&&p&2048&&Ts(u.alternate,u);break;case 24:hl(i,u,s,c,n),n&&p&2048&&Ds(u.alternate,u);break;default:hl(i,u,s,c,n)}e=e.sibling}}function sn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:sn(a,l),n&2048&&Ts(l.alternate,l);break;case 24:sn(a,l),n&2048&&Ds(l.alternate,l);break;default:sn(a,l)}e=e.sibling}}var cn=8192;function gl(t,e,a){if(t.subtreeFlags&cn)for(t=t.child;t!==null;)nf(t,e,a),t=t.sibling}function nf(t,e,a){switch(t.tag){case 26:gl(t,e,a),t.flags&cn&&t.memoizedState!==null&&Vm(a,Ae,t.memoizedState,t.memoizedProps);break;case 5:gl(t,e,a);break;case 3:case 4:var l=Ae;Ae=Ni(t.stateNode.containerInfo),gl(t,e,a),Ae=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=cn,cn=16777216,gl(t,e,a),cn=l):gl(t,e,a));break;default:gl(t,e,a)}}function uf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function rn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];qt=l,cf(l,t)}uf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sf(t),t=t.sibling}function sf(t){switch(t.tag){case 0:case 11:case 15:rn(t),t.flags&2048&&fa(9,t,t.return);break;case 3:rn(t);break;case 12:rn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,gi(t)):rn(t);break;default:rn(t)}}function gi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];qt=l,cf(l,t)}uf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:fa(8,e,e.return),gi(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,gi(e));break;default:gi(e)}t=t.sibling}}function cf(t,e){for(;qt!==null;){var a=qt;switch(a.tag){case 0:case 11:case 15:fa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,qt=l;else t:for(a=t;qt!==null;){l=qt;var n=l.sibling,i=l.return;if($o(l),l===a){qt=null;break t}if(n!==null){n.return=i,qt=n;break t}qt=i}}}var nm={getCacheForType:function(t){var e=Ht(Ct),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Ht(Ct).controller.signal}},im=typeof WeakMap=="function"?WeakMap:Map,nt=0,yt=null,F=null,$=0,st=0,ce=null,da=!1,vl=!1,Es=!1,We=0,St=0,pa=0,Va=0,Cs=0,re=0,bl=0,on=null,Pt=null,Ms=!1,vi=0,rf=0,bi=1/0,_i=null,ma=null,wt=0,ya=null,_l=null,$e=0,Ns=0,Os=null,of=null,fn=0,ws=null;function oe(){return(nt&2)!==0&&$!==0?$&-$:v.T!==null?Hs():Ac()}function ff(){if(re===0)if(($&536870912)===0||tt){var t=Cn;Cn<<=1,(Cn&3932160)===0&&(Cn=262144),re=t}else re=536870912;return t=ue.current,t!==null&&(t.flags|=32),re}function It(t,e,a){(t===yt&&(st===2||st===9)||t.cancelPendingCommit!==null)&&(Sl(t,0),ha(t,$,re,!1)),Ol(t,a),((nt&2)===0||t!==yt)&&(t===yt&&((nt&2)===0&&(Va|=a),St===4&&ha(t,$,re,!1)),Re(t))}function df(t,e,a){if((nt&6)!==0)throw Error(m(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Nl(t,e),n=l?cm(t,e):qs(t,e,!0),i=l;do{if(n===0){vl&&!l&&ha(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!um(a)){n=qs(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var s=t;n=on;var c=s.current.memoizedState.isDehydrated;if(c&&(Sl(s,u).flags|=256),u=qs(s,u,!1),u!==2){if(Es&&!c){s.errorRecoveryDisabledLanes|=i,Va|=i,n=4;break t}i=Pt,Pt=n,i!==null&&(Pt===null?Pt=i:Pt.push.apply(Pt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Sl(t,0),ha(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(m(345));case 4:if((e&4194048)!==e)break;case 6:ha(l,e,re,!da);break t;case 2:Pt=null;break;case 3:case 5:break;default:throw Error(m(329))}if((e&62914560)===e&&(n=vi+300-ee(),10<n)){if(ha(l,e,re,!da),Nn(l,0,!0)!==0)break t;$e=e,l.timeoutHandle=Vf(pf.bind(null,l,a,Pt,_i,Ms,e,re,Va,bl,da,i,"Throttled",-0,0),n);break t}pf(l,a,Pt,_i,Ms,e,re,Va,bl,da,i,null,-0,0)}}break}while(!0);Re(t)}function pf(t,e,a,l,n,i,u,s,c,p,g,S,y,h){if(t.timeoutHandle=-1,S=e.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Be},nf(e,i,S);var E=(i&62914560)===i?vi-ee():(i&4194048)===i?rf-ee():0;if(E=Xm(S,E),E!==null){$e=i,t.cancelPendingCommit=E(Sf.bind(null,t,e,i,a,l,n,u,s,c,g,S,null,y,h)),ha(t,i,u,!p);return}}Sf(t,e,i,a,l,n,u,s,c)}function um(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ne(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ha(t,e,a,l){e&=~Cs,e&=~Va,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-le(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Sc(t,a,e)}function Si(){return(nt&6)===0?(dn(0),!1):!0}function Rs(){if(F!==null){if(st===0)var t=F.return;else t=F,Qe=qa=null,Fu(t),fl=null,Jl=0,t=F;for(;t!==null;)Vo(t.alternate,t),t=t.return;F=null}}function Sl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Dm(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$e=0,Rs(),yt=t,F=a=He(t.current,null),$=e,st=0,ce=null,da=!1,vl=Nl(t,e),Es=!1,bl=re=Cs=Va=pa=St=0,Pt=on=null,Ms=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-le(l),i=1<<n;e|=t[n],l&=~i}return We=e,Gn(),a}function mf(t,e){X=null,v.H=en,e===ol||e===Wn?(e=Cr(),st=3):e===ju?(e=Cr(),st=4):st=e===fs?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ce=e,F===null&&(St=1,oi(t,ye(e,t.current)))}function yf(){var t=ue.current;return t===null?!0:($&4194048)===$?be===null:($&62914560)===$||($&536870912)!==0?t===be:!1}function hf(){var t=v.H;return v.H=en,t===null?en:t}function gf(){var t=v.A;return v.A=nm,t}function xi(){St=4,da||($&4194048)!==$&&ue.current!==null||(vl=!0),(pa&134217727)===0&&(Va&134217727)===0||yt===null||ha(yt,$,re,!1)}function qs(t,e,a){var l=nt;nt|=2;var n=hf(),i=gf();(yt!==t||$!==e)&&(_i=null,Sl(t,e)),e=!1;var u=St;t:do try{if(st!==0&&F!==null){var s=F,c=ce;switch(st){case 8:Rs(),u=6;break t;case 3:case 2:case 9:case 6:ue.current===null&&(e=!0);var p=st;if(st=0,ce=null,xl(t,s,c,p),a&&vl){u=0;break t}break;default:p=st,st=0,ce=null,xl(t,s,c,p)}}sm(),u=St;break}catch(g){mf(t,g)}while(!0);return e&&t.shellSuspendCounter++,Qe=qa=null,nt=l,v.H=n,v.A=i,F===null&&(yt=null,$=0,Gn()),u}function sm(){for(;F!==null;)vf(F)}function cm(t,e){var a=nt;nt|=2;var l=hf(),n=gf();yt!==t||$!==e?(_i=null,bi=ee()+500,Sl(t,e)):vl=Nl(t,e);t:do try{if(st!==0&&F!==null){e=F;var i=ce;e:switch(st){case 1:st=0,ce=null,xl(t,e,i,1);break;case 2:case 9:if(Dr(i)){st=0,ce=null,bf(e);break}e=function(){st!==2&&st!==9||yt!==t||(st=7),Re(t)},i.then(e,e);break t;case 3:st=7;break t;case 4:st=5;break t;case 7:Dr(i)?(st=0,ce=null,bf(e)):(st=0,ce=null,xl(t,e,i,7));break;case 5:var u=null;switch(F.tag){case 26:u=F.memoizedState;case 5:case 27:var s=F;if(u?nd(u):s.stateNode.complete){st=0,ce=null;var c=s.sibling;if(c!==null)F=c;else{var p=s.return;p!==null?(F=p,zi(p)):F=null}break e}}st=0,ce=null,xl(t,e,i,5);break;case 6:st=0,ce=null,xl(t,e,i,6);break;case 8:Rs(),St=6;break t;default:throw Error(m(462))}}rm();break}catch(g){mf(t,g)}while(!0);return Qe=qa=null,v.H=l,v.A=n,nt=a,F!==null?0:(yt=null,$=0,Gn(),St)}function rm(){for(;F!==null&&!wd();)vf(F)}function vf(t){var e=Lo(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?zi(t):F=e}function bf(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Uo(a,e,e.pendingProps,e.type,void 0,$);break;case 11:e=Uo(a,e,e.pendingProps,e.type.render,e.ref,$);break;case 5:Fu(e);default:Vo(a,e),e=F=yr(e,We),e=Lo(a,e,We)}t.memoizedProps=t.pendingProps,e===null?zi(t):F=e}function xl(t,e,a,l){Qe=qa=null,Fu(e),fl=null,Jl=0;var n=e.return;try{if($p(t,n,e,a,$)){St=1,oi(t,ye(a,t.current)),F=null;return}}catch(i){if(n!==null)throw F=n,i;St=1,oi(t,ye(a,t.current)),F=null;return}e.flags&32768?(tt||l===1?t=!0:vl||($&536870912)!==0?t=!1:(da=t=!0,(l===2||l===9||l===3||l===6)&&(l=ue.current,l!==null&&l.tag===13&&(l.flags|=16384))),_f(e,t)):zi(e)}function zi(t){var e=t;do{if((e.flags&32768)!==0){_f(e,da);return}t=e.return;var a=tm(e.alternate,e,We);if(a!==null){F=a;return}if(e=e.sibling,e!==null){F=e;return}F=e=t}while(e!==null);St===0&&(St=5)}function _f(t,e){do{var a=em(t.alternate,t);if(a!==null){a.flags&=32767,F=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){F=t;return}F=t=a}while(t!==null);St=6,F=null}function Sf(t,e,a,l,n,i,u,s,c){t.cancelPendingCommit=null;do Ai();while(wt!==0);if((nt&6)!==0)throw Error(m(327));if(e!==null){if(e===t.current)throw Error(m(177));if(i=e.lanes|e.childLanes,i|=xu,Gd(t,a,i,u,s,c),t===yt&&(F=yt=null,$=0),_l=e,ya=t,$e=a,Ns=i,Os=n,of=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,pm(Dn,function(){return Df(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=v.T,v.T=null,n=T.p,T.p=2,u=nt,nt|=4;try{am(t,e,a)}finally{nt=u,T.p=n,v.T=l}}wt=1,xf(),zf(),Af()}}function xf(){if(wt===1){wt=0;var t=ya,e=_l,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var l=T.p;T.p=2;var n=nt;nt|=4;try{ef(e,t);var i=Ks,u=ur(t.containerInfo),s=i.focusedElem,c=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&ir(s.ownerDocument.documentElement,s)){if(c!==null&&gu(s)){var p=c.start,g=c.end;if(g===void 0&&(g=p),"selectionStart"in s)s.selectionStart=p,s.selectionEnd=Math.min(g,s.value.length);else{var S=s.ownerDocument||document,y=S&&S.defaultView||window;if(y.getSelection){var h=y.getSelection(),E=s.textContent.length,j=Math.min(c.start,E),dt=c.end===void 0?j:Math.min(c.end,E);!h.extend&&j>dt&&(u=dt,dt=j,j=u);var f=nr(s,j),r=nr(s,dt);if(f&&r&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==r.node||h.focusOffset!==r.offset)){var d=S.createRange();d.setStart(f.node,f.offset),h.removeAllRanges(),j>dt?(h.addRange(d),h.extend(r.node,r.offset)):(d.setEnd(r.node,r.offset),h.addRange(d))}}}}for(S=[],h=s;h=h.parentNode;)h.nodeType===1&&S.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<S.length;s++){var b=S[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Bi=!!Zs,Ks=Zs=null}finally{nt=n,T.p=l,v.T=a}}t.current=e,wt=2}}function zf(){if(wt===2){wt=0;var t=ya,e=_l,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var l=T.p;T.p=2;var n=nt;nt|=4;try{Wo(t,e.alternate,e)}finally{nt=n,T.p=l,v.T=a}}wt=3}}function Af(){if(wt===4||wt===3){wt=0,Rd();var t=ya,e=_l,a=$e,l=of;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?wt=5:(wt=0,_l=ya=null,Tf(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(ma=null),Pi(a),e=e.stateNode,ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(Ml,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=v.T,n=T.p,T.p=2,v.T=null;try{for(var i=t.onRecoverableError,u=0;u<l.length;u++){var s=l[u];i(s.value,{componentStack:s.stack})}}finally{v.T=e,T.p=n}}($e&3)!==0&&Ai(),Re(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===ws?fn++:(fn=0,ws=t):fn=0,dn(0)}}function Tf(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Zl(e)))}function Ai(){return xf(),zf(),Af(),Df()}function Df(){if(wt!==5)return!1;var t=ya,e=Ns;Ns=0;var a=Pi($e),l=v.T,n=T.p;try{T.p=32>a?32:a,v.T=null,a=Os,Os=null;var i=ya,u=$e;if(wt=0,_l=ya=null,$e=0,(nt&6)!==0)throw Error(m(331));var s=nt;if(nt|=4,sf(i.current),lf(i,i.current,u,a),nt=s,dn(0,!1),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(Ml,i)}catch{}return!0}finally{T.p=n,v.T=l,Tf(t,e)}}function Ef(t,e,a){e=ye(a,e),e=os(t.stateNode,e,2),t=ca(t,e,2),t!==null&&(Ol(t,2),Re(t))}function ct(t,e,a){if(t.tag===3)Ef(t,t,a);else for(;e!==null;){if(e.tag===3){Ef(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ma===null||!ma.has(l))){t=ye(a,t),a=Eo(2),l=ca(e,a,2),l!==null&&(Co(a,l,e,t),Ol(l,2),Re(l));break}}e=e.return}}function Us(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new im;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(Es=!0,n.add(a),t=om.bind(null,t,e,a),e.then(t,t))}function om(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,yt===t&&($&a)===a&&(St===4||St===3&&($&62914560)===$&&300>ee()-vi?(nt&2)===0&&Sl(t,0):Cs|=a,bl===$&&(bl=0)),Re(t)}function Cf(t,e){e===0&&(e=_c()),t=Oa(t,e),t!==null&&(Ol(t,e),Re(t))}function fm(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Cf(t,a)}function dm(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(m(314))}l!==null&&l.delete(e),Cf(t,a)}function pm(t,e){return ki(t,e)}var Ti=null,zl=null,Bs=!1,Di=!1,js=!1,ga=0;function Re(t){t!==zl&&t.next===null&&(zl===null?Ti=zl=t:zl=zl.next=t),Di=!0,Bs||(Bs=!0,ym())}function dn(t,e){if(!js&&Di){js=!0;do for(var a=!1,l=Ti;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-le(42|t)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,wf(l,i))}else i=$,i=Nn(l,l===yt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Nl(l,i)||(a=!0,wf(l,i));l=l.next}while(a);js=!1}}function mm(){Mf()}function Mf(){Di=Bs=!1;var t=0;ga!==0&&Tm()&&(t=ga);for(var e=ee(),a=null,l=Ti;l!==null;){var n=l.next,i=Nf(l,e);i===0?(l.next=null,a===null?Ti=n:a.next=n,n===null&&(zl=a)):(a=l,(t!==0||(i&3)!==0)&&(Di=!0)),l=n}wt!==0&&wt!==5||dn(t),ga!==0&&(ga=0)}function Nf(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-le(i),s=1<<u,c=n[u];c===-1?((s&a)===0||(s&l)!==0)&&(n[u]=Ld(s,e)):c<=e&&(t.expiredLanes|=s),i&=~s}if(e=yt,a=$,a=Nn(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(st===2||st===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Fi(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Nl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&Fi(l),Pi(a)){case 2:case 8:a=vc;break;case 32:a=Dn;break;case 268435456:a=bc;break;default:a=Dn}return l=Of.bind(null,t),a=ki(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&Fi(l),t.callbackPriority=2,t.callbackNode=null,2}function Of(t,e){if(wt!==0&&wt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ai()&&t.callbackNode!==a)return null;var l=$;return l=Nn(t,t===yt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(df(t,l,e),Nf(t,ee()),t.callbackNode!=null&&t.callbackNode===a?Of.bind(null,t):null)}function wf(t,e){if(Ai())return null;df(t,e,!0)}function ym(){Em(function(){(nt&6)!==0?ki(gc,mm):Mf()})}function Hs(){if(ga===0){var t=cl;t===0&&(t=En,En<<=1,(En&261888)===0&&(En=256)),ga=t}return ga}function Rf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:qn(""+t)}function qf(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function hm(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=Rf((n[Jt]||null).action),u=l.submitter;u&&(e=(e=u[Jt]||null)?Rf(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var s=new Hn("action","action",null,l,n);t.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ga!==0){var c=u?qf(n,u):new FormData(n);ns(a,{pending:!0,data:c,method:n.method,action:i},null,c)}}else typeof i=="function"&&(s.preventDefault(),c=u?qf(n,u):new FormData(n),ns(a,{pending:!0,data:c,method:n.method,action:i},i,c))},currentTarget:n}]})}}for(var Ys=0;Ys<Su.length;Ys++){var Qs=Su[Ys],gm=Qs.toLowerCase(),vm=Qs[0].toUpperCase()+Qs.slice(1);ze(gm,"on"+vm)}ze(rr,"onAnimationEnd"),ze(or,"onAnimationIteration"),ze(fr,"onAnimationStart"),ze("dblclick","onDoubleClick"),ze("focusin","onFocus"),ze("focusout","onBlur"),ze(qp,"onTransitionRun"),ze(Up,"onTransitionStart"),ze(Bp,"onTransitionCancel"),ze(dr,"onTransitionEnd"),ka("onMouseEnter",["mouseout","mouseover"]),ka("onMouseLeave",["mouseout","mouseover"]),ka("onPointerEnter",["pointerout","pointerover"]),ka("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pn));function Uf(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var u=l.length-1;0<=u;u--){var s=l[u],c=s.instance,p=s.currentTarget;if(s=s.listener,c!==i&&n.isPropagationStopped())break t;i=s,n.currentTarget=p;try{i(n)}catch(g){Ln(g)}n.currentTarget=null,i=c}else for(u=0;u<l.length;u++){if(s=l[u],c=s.instance,p=s.currentTarget,s=s.listener,c!==i&&n.isPropagationStopped())break t;i=s,n.currentTarget=p;try{i(n)}catch(g){Ln(g)}n.currentTarget=null,i=c}}}}function W(t,e){var a=e[Ii];a===void 0&&(a=e[Ii]=new Set);var l=t+"__bubble";a.has(l)||(Bf(e,t,2,!1),a.add(l))}function Ls(t,e,a){var l=0;e&&(l|=4),Bf(a,t,l,e)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function Gs(t){if(!t[Ei]){t[Ei]=!0,Ec.forEach(function(a){a!=="selectionchange"&&(bm.has(a)||Ls(a,!1,t),Ls(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ei]||(e[Ei]=!0,Ls("selectionchange",!1,e))}}function Bf(t,e,a,l){switch(fd(e)){case 2:var n=Jm;break;case 8:n=km;break;default:n=lc}a=n.bind(null,e,a,t),n=void 0,!cu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function Vs(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var s=l.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=l.return;u!==null;){var c=u.tag;if((c===3||c===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Za(s),u===null)return;if(c=u.tag,c===5||c===6||c===26||c===27){l=i=u;continue t}s=s.parentNode}}l=l.return}Yc(function(){var p=i,g=uu(a),S=[];t:{var y=pr.get(t);if(y!==void 0){var h=Hn,E=t;switch(t){case"keypress":if(Bn(a)===0)break t;case"keydown":case"keyup":h=dp;break;case"focusin":E="focus",h=du;break;case"focusout":E="blur",h=du;break;case"beforeblur":case"afterblur":h=du;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=yp;break;case rr:case or:case fr:h=lp;break;case dr:h=gp;break;case"scroll":case"scrollend":h=Pd;break;case"wheel":h=bp;break;case"copy":case"cut":case"paste":h=ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Xc;break;case"toggle":case"beforetoggle":h=Sp}var j=(e&4)!==0,dt=!j&&(t==="scroll"||t==="scrollend"),f=j?y!==null?y+"Capture":null:y;j=[];for(var r=p,d;r!==null;){var b=r;if(d=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||d===null||f===null||(b=ql(r,f),b!=null&&j.push(mn(r,b,d))),dt)break;r=r.return}0<j.length&&(y=new h(y,E,null,a,g),S.push({event:y,listeners:j}))}}if((e&7)===0){t:{if(y=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",y&&a!==iu&&(E=a.relatedTarget||a.fromElement)&&(Za(E)||E[Xa]))break t;if((h||y)&&(y=g.window===g?g:(y=g.ownerDocument)?y.defaultView||y.parentWindow:window,h?(E=a.relatedTarget||a.toElement,h=p,E=E?Za(E):null,E!==null&&(dt=K(E),j=E.tag,E!==dt||j!==5&&j!==27&&j!==6)&&(E=null)):(h=null,E=p),h!==E)){if(j=Gc,b="onMouseLeave",f="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(j=Xc,b="onPointerLeave",f="onPointerEnter",r="pointer"),dt=h==null?y:Rl(h),d=E==null?y:Rl(E),y=new j(b,r+"leave",h,a,g),y.target=dt,y.relatedTarget=d,b=null,Za(g)===p&&(j=new j(f,r+"enter",E,a,g),j.target=d,j.relatedTarget=dt,b=j),dt=b,h&&E)e:{for(j=_m,f=h,r=E,d=0,b=f;b;b=j(b))d++;b=0;for(var q=r;q;q=j(q))b++;for(;0<d-b;)f=j(f),d--;for(;0<b-d;)r=j(r),b--;for(;d--;){if(f===r||r!==null&&f===r.alternate){j=f;break e}f=j(f),r=j(r)}j=null}else j=null;h!==null&&jf(S,y,h,j,!1),E!==null&&dt!==null&&jf(S,dt,E,j,!0)}}t:{if(y=p?Rl(p):window,h=y.nodeName&&y.nodeName.toLowerCase(),h==="select"||h==="input"&&y.type==="file")var et=Pc;else if(Wc(y))if(Ic)et=Op;else{et=Mp;var M=Cp}else h=y.nodeName,!h||h.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?p&&nu(p.elementType)&&(et=Pc):et=Np;if(et&&(et=et(t,p))){$c(S,et,a,g);break t}M&&M(t,y,p),t==="focusout"&&p&&y.type==="number"&&p.memoizedProps.value!=null&&lu(y,"number",y.value)}switch(M=p?Rl(p):window,t){case"focusin":(Wc(M)||M.contentEditable==="true")&&(tl=M,vu=p,Gl=null);break;case"focusout":Gl=vu=tl=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,sr(S,a,g);break;case"selectionchange":if(Rp)break;case"keydown":case"keyup":sr(S,a,g)}var Z;if(mu)t:{switch(t){case"compositionstart":var P="onCompositionStart";break t;case"compositionend":P="onCompositionEnd";break t;case"compositionupdate":P="onCompositionUpdate";break t}P=void 0}else Ia?kc(t,a)&&(P="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(P="onCompositionStart");P&&(Zc&&a.locale!=="ko"&&(Ia||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ia&&(Z=Qc()):(ea=g,ru="value"in ea?ea.value:ea.textContent,Ia=!0)),M=Ci(p,P),0<M.length&&(P=new Vc(P,t,null,a,g),S.push({event:P,listeners:M}),Z?P.data=Z:(Z=Fc(a),Z!==null&&(P.data=Z)))),(Z=zp?Ap(t,a):Tp(t,a))&&(P=Ci(p,"onBeforeInput"),0<P.length&&(M=new Vc("onBeforeInput","beforeinput",null,a,g),S.push({event:M,listeners:P}),M.data=Z)),hm(S,t,p,a,g)}Uf(S,e)})}function mn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Ci(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=ql(t,a),n!=null&&l.unshift(mn(t,n,i)),n=ql(t,e),n!=null&&l.push(mn(t,n,i))),t.tag===3)return l;t=t.return}return[]}function _m(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function jf(t,e,a,l,n){for(var i=e._reactName,u=[];a!==null&&a!==l;){var s=a,c=s.alternate,p=s.stateNode;if(s=s.tag,c!==null&&c===l)break;s!==5&&s!==26&&s!==27||p===null||(c=p,n?(p=ql(a,i),p!=null&&u.unshift(mn(a,p,c))):n||(p=ql(a,i),p!=null&&u.push(mn(a,p,c)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var Sm=/\r\n?/g,xm=/\u0000|\uFFFD/g;function Hf(t){return(typeof t=="string"?t:""+t).replace(Sm,`
`).replace(xm,"")}function Yf(t,e){return e=Hf(e),Hf(t)===e}function ft(t,e,a,l,n,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Wa(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Wa(t,""+l);break;case"className":wn(t,"class",l);break;case"tabIndex":wn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":wn(t,a,l);break;case"style":jc(t,l,i);break;case"data":if(e!=="object"){wn(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=qn(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&ft(t,e,"name",n.name,n,null),ft(t,e,"formEncType",n.formEncType,n,null),ft(t,e,"formMethod",n.formMethod,n,null),ft(t,e,"formTarget",n.formTarget,n,null)):(ft(t,e,"encType",n.encType,n,null),ft(t,e,"method",n.method,n,null),ft(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=qn(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Be);break;case"onScroll":l!=null&&W("scroll",t);break;case"onScrollEnd":l!=null&&W("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=qn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":W("beforetoggle",t),W("toggle",t),On(t,"popover",l);break;case"xlinkActuate":Ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ue(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ue(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ue(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ue(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":On(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wd.get(a)||a,On(t,a,l))}}function Xs(t,e,a,l,n,i){switch(a){case"style":jc(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Wa(t,l):(typeof l=="number"||typeof l=="bigint")&&Wa(t,""+l);break;case"onScroll":l!=null&&W("scroll",t);break;case"onScrollEnd":l!=null&&W("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Be);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cc.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),i=t[Jt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,n);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):On(t,a,l)}}}function Qt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",t),W("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:ft(t,e,i,u,a,null)}}n&&ft(t,e,"srcSet",a.srcSet,a,null),l&&ft(t,e,"src",a.src,a,null);return;case"input":W("invalid",t);var s=i=u=n=null,c=null,p=null;for(l in a)if(a.hasOwnProperty(l)){var g=a[l];if(g!=null)switch(l){case"name":n=g;break;case"type":u=g;break;case"checked":c=g;break;case"defaultChecked":p=g;break;case"value":i=g;break;case"defaultValue":s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,e));break;default:ft(t,e,l,g,a,null)}}Rc(t,i,s,c,p,u,n,!1);return;case"select":W("invalid",t),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":l=s;default:ft(t,e,n,s,a,null)}e=i,a=u,t.multiple=!!l,e!=null?Fa(t,!!l,e,!1):a!=null&&Fa(t,!!l,a,!0);return;case"textarea":W("invalid",t),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(m(91));break;default:ft(t,e,u,s,a,null)}Uc(t,l,n,i);return;case"option":for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null)&&(c==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":ft(t,e,c,l,a,null));return;case"dialog":W("beforetoggle",t),W("toggle",t),W("cancel",t),W("close",t);break;case"iframe":case"object":W("load",t);break;case"video":case"audio":for(l=0;l<pn.length;l++)W(pn[l],t);break;case"image":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"embed":case"source":case"link":W("error",t),W("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:ft(t,e,p,l,a,null)}return;default:if(nu(e)){for(g in a)a.hasOwnProperty(g)&&(l=a[g],l!==void 0&&Xs(t,e,g,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&ft(t,e,s,l,a,null))}function zm(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,c=null,p=null,g=null;for(h in a){var S=a[h];if(a.hasOwnProperty(h)&&S!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":c=S;default:l.hasOwnProperty(h)||ft(t,e,h,null,l,S)}}for(var y in l){var h=l[y];if(S=a[y],l.hasOwnProperty(y)&&(h!=null||S!=null))switch(y){case"type":i=h;break;case"name":n=h;break;case"checked":p=h;break;case"defaultChecked":g=h;break;case"value":u=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(m(137,e));break;default:h!==S&&ft(t,e,y,h,l,S)}}au(t,u,s,c,p,g,i,n);return;case"select":h=u=s=y=null;for(i in a)if(c=a[i],a.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":h=c;default:l.hasOwnProperty(i)||ft(t,e,i,null,l,c)}for(n in l)if(i=l[n],c=a[n],l.hasOwnProperty(n)&&(i!=null||c!=null))switch(n){case"value":y=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==c&&ft(t,e,n,i,l,c)}e=s,a=u,l=h,y!=null?Fa(t,!!a,y,!1):!!l!=!!a&&(e!=null?Fa(t,!!a,e,!0):Fa(t,!!a,a?[]:"",!1));return;case"textarea":h=y=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ft(t,e,s,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":y=n;break;case"defaultValue":h=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==i&&ft(t,e,u,n,l,i)}qc(t,y,h);return;case"option":for(var E in a)y=a[E],a.hasOwnProperty(E)&&y!=null&&!l.hasOwnProperty(E)&&(E==="selected"?t.selected=!1:ft(t,e,E,null,l,y));for(c in l)y=l[c],h=a[c],l.hasOwnProperty(c)&&y!==h&&(y!=null||h!=null)&&(c==="selected"?t.selected=y&&typeof y!="function"&&typeof y!="symbol":ft(t,e,c,y,l,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var j in a)y=a[j],a.hasOwnProperty(j)&&y!=null&&!l.hasOwnProperty(j)&&ft(t,e,j,null,l,y);for(p in l)if(y=l[p],h=a[p],l.hasOwnProperty(p)&&y!==h&&(y!=null||h!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,e));break;default:ft(t,e,p,y,l,h)}return;default:if(nu(e)){for(var dt in a)y=a[dt],a.hasOwnProperty(dt)&&y!==void 0&&!l.hasOwnProperty(dt)&&Xs(t,e,dt,void 0,l,y);for(g in l)y=l[g],h=a[g],!l.hasOwnProperty(g)||y===h||y===void 0&&h===void 0||Xs(t,e,g,y,l,h);return}}for(var f in a)y=a[f],a.hasOwnProperty(f)&&y!=null&&!l.hasOwnProperty(f)&&ft(t,e,f,null,l,y);for(S in l)y=l[S],h=a[S],!l.hasOwnProperty(S)||y===h||y==null&&h==null||ft(t,e,S,y,l,h)}function Qf(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Am(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&Qf(u)){for(u=0,s=n.responseEnd,l+=1;l<a.length;l++){var c=a[l],p=c.startTime;if(p>s)break;var g=c.transferSize,S=c.initiatorType;g&&Qf(S)&&(c=c.responseEnd,u+=g*(c<s?1:(s-p)/(c-p)))}if(--l,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Zs=null,Ks=null;function Mi(t){return t.nodeType===9?t:t.ownerDocument}function Lf(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gf(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Js(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ks=null;function Tm(){var t=window.event;return t&&t.type==="popstate"?t===ks?!1:(ks=t,!0):(ks=null,!1)}var Vf=typeof setTimeout=="function"?setTimeout:void 0,Dm=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,Em=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(t){return Xf.resolve(null).then(t).catch(Cm)}:Vf;function Cm(t){setTimeout(function(){throw t})}function va(t){return t==="head"}function Zf(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),El(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")yn(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[wl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&yn(t.ownerDocument.body);a=n}while(a);El(e)}function Kf(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Fs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Fs(a),tu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Mm(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[wl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=_e(t.nextSibling),t===null)break}return null}function Nm(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_e(t.nextSibling),t===null))return null;return t}function Jf(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=_e(t.nextSibling),t===null))return null;return t}function Ws(t){return t.data==="$?"||t.data==="$~"}function $s(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Om(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function _e(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ps=null;function kf(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return _e(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Ff(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Wf(t,e,a){switch(e=Mi(a),t){case"html":if(t=e.documentElement,!t)throw Error(m(452));return t;case"head":if(t=e.head,!t)throw Error(m(453));return t;case"body":if(t=e.body,!t)throw Error(m(454));return t;default:throw Error(m(451))}}function yn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);tu(t)}var Se=new Map,$f=new Set;function Ni(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Pe=T.d;T.d={f:wm,r:Rm,D:qm,C:Um,L:Bm,m:jm,X:Ym,S:Hm,M:Qm};function wm(){var t=Pe.f(),e=Si();return t||e}function Rm(t){var e=Ka(t);e!==null&&e.tag===5&&e.type==="form"?po(e):Pe.r(t)}var Al=typeof document>"u"?null:document;function Pf(t,e,a){var l=Al;if(l&&typeof e=="string"&&e){var n=pe(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),$f.has(n)||($f.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),Qt(e,"link",t),Rt(e),l.head.appendChild(e)))}}function qm(t){Pe.D(t),Pf("dns-prefetch",t,null)}function Um(t,e){Pe.C(t,e),Pf("preconnect",t,e)}function Bm(t,e,a){Pe.L(t,e,a);var l=Al;if(l&&t&&e){var n='link[rel="preload"][as="'+pe(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+pe(a.imageSizes)+'"]')):n+='[href="'+pe(t)+'"]';var i=n;switch(e){case"style":i=Tl(t);break;case"script":i=Dl(t)}Se.has(i)||(t=U({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Se.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(hn(i))||e==="script"&&l.querySelector(gn(i))||(e=l.createElement("link"),Qt(e,"link",t),Rt(e),l.head.appendChild(e)))}}function jm(t,e){Pe.m(t,e);var a=Al;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+pe(l)+'"][href="'+pe(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Dl(t)}if(!Se.has(i)&&(t=U({rel:"modulepreload",href:t},e),Se.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gn(i)))return}l=a.createElement("link"),Qt(l,"link",t),Rt(l),a.head.appendChild(l)}}}function Hm(t,e,a){Pe.S(t,e,a);var l=Al;if(l&&t){var n=Ja(l).hoistableStyles,i=Tl(t);e=e||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=l.querySelector(hn(i)))s.loading=5;else{t=U({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Se.get(i))&&Is(t,a);var c=u=l.createElement("link");Rt(c),Qt(c,"link",t),c._p=new Promise(function(p,g){c.onload=p,c.onerror=g}),c.addEventListener("load",function(){s.loading|=1}),c.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Oi(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function Ym(t,e){Pe.X(t,e);var a=Al;if(a&&t){var l=Ja(a).hoistableScripts,n=Dl(t),i=l.get(n);i||(i=a.querySelector(gn(n)),i||(t=U({src:t,async:!0},e),(e=Se.get(n))&&tc(t,e),i=a.createElement("script"),Rt(i),Qt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Qm(t,e){Pe.M(t,e);var a=Al;if(a&&t){var l=Ja(a).hoistableScripts,n=Dl(t),i=l.get(n);i||(i=a.querySelector(gn(n)),i||(t=U({src:t,async:!0,type:"module"},e),(e=Se.get(n))&&tc(t,e),i=a.createElement("script"),Rt(i),Qt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function If(t,e,a,l){var n=(n=k.current)?Ni(n):null;if(!n)throw Error(m(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Tl(a.href),a=Ja(n).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Tl(a.href);var i=Ja(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(hn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),Se.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Se.set(t,a),i||Lm(n,t,a,u.state))),e&&l===null)throw Error(m(528,""));return u}if(e&&l!==null)throw Error(m(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Dl(a),a=Ja(n).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,t))}}function Tl(t){return'href="'+pe(t)+'"'}function hn(t){return'link[rel="stylesheet"]['+t+"]"}function td(t){return U({},t,{"data-precedence":t.precedence,precedence:null})}function Lm(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Qt(e,"link",a),Rt(e),t.head.appendChild(e))}function Dl(t){return'[src="'+pe(t)+'"]'}function gn(t){return"script[async]"+t}function ed(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+pe(a.href)+'"]');if(l)return e.instance=l,Rt(l),l;var n=U({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Rt(l),Qt(l,"style",n),Oi(l,a.precedence,t),e.instance=l;case"stylesheet":n=Tl(a.href);var i=t.querySelector(hn(n));if(i)return e.state.loading|=4,e.instance=i,Rt(i),i;l=td(a),(n=Se.get(n))&&Is(l,n),i=(t.ownerDocument||t).createElement("link"),Rt(i);var u=i;return u._p=new Promise(function(s,c){u.onload=s,u.onerror=c}),Qt(i,"link",l),e.state.loading|=4,Oi(i,a.precedence,t),e.instance=i;case"script":return i=Dl(a.src),(n=t.querySelector(gn(i)))?(e.instance=n,Rt(n),n):(l=a,(n=Se.get(i))&&(l=U({},a),tc(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),Rt(n),Qt(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(m(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Oi(l,a.precedence,t));return e.instance}function Oi(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var s=l[u];if(s.dataset.precedence===e)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Is(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function tc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var wi=null;function ad(t,e,a){if(wi===null){var l=new Map,n=wi=new Map;n.set(a,l)}else n=wi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[wl]||i[Bt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var s=l.get(u);s?s.push(i):l.set(u,[i])}}return l}function ld(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Gm(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function nd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Vm(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Tl(l.href),i=e.querySelector(hn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ri.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,Rt(i);return}i=e.ownerDocument||e,l=td(l),(n=Se.get(n))&&Is(l,n),i=i.createElement("link"),Rt(i);var u=i;u._p=new Promise(function(s,c){u.onload=s,u.onerror=c}),Qt(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ri.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var ec=0;function Xm(t,e){return t.stylesheets&&t.count===0&&Ui(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Ui(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&ec===0&&(ec=62500*Am());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ui(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>ec?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ri(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var qi=null;function Ui(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,qi=new Map,e.forEach(Zm,t),qi=null,Ri.call(t))}function Zm(t,e){if(!(e.state.loading&4)){var a=qi.get(t);if(a)var l=a.get(null);else{a=new Map,qi.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=e.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Ri.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var vn={$$typeof:zt,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Km(t,e,a,l,n,i,u,s,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function id(t,e,a,l,n,i,u,s,c,p,g,S){return t=new Km(t,e,a,u,c,p,g,S,s),e=1,i===!0&&(e|=24),i=ie(3,null,null,e),t.current=i,i.stateNode=t,e=qu(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},Hu(i),t}function ud(t){return t?(t=ll,t):ll}function sd(t,e,a,l,n,i){n=ud(n),l.context===null?l.context=n:l.pendingContext=n,l=sa(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ca(t,l,e),a!==null&&(It(a,t,e),Fl(a,t,e))}function cd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function ac(t,e){cd(t,e),(t=t.alternate)&&cd(t,e)}function rd(t){if(t.tag===13||t.tag===31){var e=Oa(t,67108864);e!==null&&It(e,t,67108864),ac(t,67108864)}}function od(t){if(t.tag===13||t.tag===31){var e=oe();e=$i(e);var a=Oa(t,e);a!==null&&It(a,t,e),ac(t,e)}}var Bi=!0;function Jm(t,e,a,l){var n=v.T;v.T=null;var i=T.p;try{T.p=2,lc(t,e,a,l)}finally{T.p=i,v.T=n}}function km(t,e,a,l){var n=v.T;v.T=null;var i=T.p;try{T.p=8,lc(t,e,a,l)}finally{T.p=i,v.T=n}}function lc(t,e,a,l){if(Bi){var n=nc(l);if(n===null)Vs(t,e,l,ji,a),dd(t,l);else if(Wm(n,t,e,a,l))l.stopPropagation();else if(dd(t,l),e&4&&-1<Fm.indexOf(t)){for(;n!==null;){var i=Ka(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Da(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var c=1<<31-le(u);s.entanglements[1]|=c,u&=~c}Re(i),(nt&6)===0&&(bi=ee()+500,dn(0))}}break;case 31:case 13:s=Oa(i,2),s!==null&&It(s,i,2),Si(),ac(i,2)}if(i=nc(l),i===null&&Vs(t,e,l,ji,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Vs(t,e,l,null,a)}}function nc(t){return t=uu(t),ic(t)}var ji=null;function ic(t){if(ji=null,t=Za(t),t!==null){var e=K(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=it(e),t!==null)return t;t=null}else if(a===31){if(t=xt(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ji=t,null}function fd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qd()){case gc:return 2;case vc:return 8;case Dn:case Ud:return 32;case bc:return 268435456;default:return 32}default:return 32}}var uc=!1,ba=null,_a=null,Sa=null,bn=new Map,_n=new Map,xa=[],Fm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dd(t,e){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":bn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(e.pointerId)}}function Sn(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Ka(e),e!==null&&rd(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Wm(t,e,a,l,n){switch(e){case"focusin":return ba=Sn(ba,t,e,a,l,n),!0;case"dragenter":return _a=Sn(_a,t,e,a,l,n),!0;case"mouseover":return Sa=Sn(Sa,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,Sn(bn.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,_n.set(i,Sn(_n.get(i)||null,t,e,a,l,n)),!0}return!1}function pd(t){var e=Za(t.target);if(e!==null){var a=K(e);if(a!==null){if(e=a.tag,e===13){if(e=it(a),e!==null){t.blockedOn=e,Tc(t.priority,function(){od(a)});return}}else if(e===31){if(e=xt(a),e!==null){t.blockedOn=e,Tc(t.priority,function(){od(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=nc(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);iu=l,a.target.dispatchEvent(l),iu=null}else return e=Ka(a),e!==null&&rd(e),t.blockedOn=a,!1;e.shift()}return!0}function md(t,e,a){Hi(t)&&a.delete(e)}function $m(){uc=!1,ba!==null&&Hi(ba)&&(ba=null),_a!==null&&Hi(_a)&&(_a=null),Sa!==null&&Hi(Sa)&&(Sa=null),bn.forEach(md),_n.forEach(md)}function Yi(t,e){t.blockedOn===e&&(t.blockedOn=null,uc||(uc=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,$m)))}var Qi=null;function yd(t){Qi!==t&&(Qi=t,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){Qi===t&&(Qi=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(ic(l||a)===null)continue;break}var i=Ka(a);i!==null&&(t.splice(e,3),e-=3,ns(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function El(t){function e(c){return Yi(c,t)}ba!==null&&Yi(ba,t),_a!==null&&Yi(_a,t),Sa!==null&&Yi(Sa,t),bn.forEach(e),_n.forEach(e);for(var a=0;a<xa.length;a++){var l=xa[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)pd(a),a.blockedOn===null&&xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Jt]||null;if(typeof i=="function")u||yd(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Jt]||null)s=u.formAction;else if(ic(n)!==null)continue}else s=u.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),yd(a)}}}function hd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function sc(t){this._internalRoot=t}Li.prototype.render=sc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(m(409));var a=e.current,l=oe();sd(a,l,t,e,null,null)},Li.prototype.unmount=sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;sd(t.current,2,null,t,null,null),Si(),e[Xa]=null}};function Li(t){this._internalRoot=t}Li.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ac();t={blockedOn:null,target:t,priority:e};for(var a=0;a<xa.length&&e!==0&&e<xa[a].priority;a++);xa.splice(a,0,t),a===0&&pd(t)}};var gd=Q.version;if(gd!=="19.2.4")throw Error(m(527,gd,"19.2.4"));T.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(m(188)):(t=Object.keys(t).join(","),Error(m(268,t)));return t=z(e),t=t!==null?I(t):null,t=t===null?null:t.stateNode,t};var Pm={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{Ml=Gi.inject(Pm),ae=Gi}catch{}}return zn.createRoot=function(t,e){if(!w(t))throw Error(m(299));var a=!1,l="",n=zo,i=Ao,u=To;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=id(t,1,!1,null,null,a,l,null,n,i,u,hd),t[Xa]=e.current,Gs(t),new sc(e)},zn.hydrateRoot=function(t,e,a){if(!w(t))throw Error(m(299));var l=!1,n="",i=zo,u=Ao,s=To,c=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),e=id(t,1,!0,e,a??null,l,n,c,i,u,s,hd),e.context=ud(null),a=e.current,l=oe(),l=$i(l),n=sa(l),n.callback=null,ca(a,n,l),a=l,e.current.lanes=a,Ol(e,a),Re(e),t[Xa]=e.current,Gs(t),new Li(e)},zn.version="19.2.4",zn}var Ed;function cy(){if(Ed)return oc.exports;Ed=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(Q){console.error(Q)}}return A(),oc.exports=sy(),oc.exports}var ry=cy();const De={chapters:[{id:1,title:"Introduction to Data Science",description:"What is data science and why it matters",lessons:[{id:"1-1",title:"What is Data Science?",duration:"10 min",content:`
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
### 🎯 Practice Exercise

**Exercise: Data Science in Your World**

1. Pick an industry you're interested in (gaming, music, sports, etc.)
2. List 3 questions that data science could answer in that industry
3. For each question, identify what data you'd need to collect
4. Classify each question as descriptive, diagnostic, predictive, or prescriptive

\`\`\`python
# Example template:
industry = "Music Streaming"
questions = {
    "descriptive": "What are the top 10 most-played songs this month?",
    "diagnostic": "Why did user engagement drop in Q3?",
    "predictive": "Which new artists will go viral next quarter?",
    "prescriptive": "What playlist recommendations maximize listening time?"
}

for q_type, question in questions.items():
    print(f"[{q_type.upper()}] {question}")
\`\`\`

Try creating your own for a different industry!

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
### 🎯 Practice Exercise

**Exercise: NumPy Array Workout**

Try these challenges in a Jupyter notebook:

\`\`\`python
import numpy as np

# Challenge 1: Create a 5x5 identity matrix
identity = np.eye(5)
print("Identity matrix:
", identity)

# Challenge 2: Create an array of 20 evenly spaced values between 0 and 1
linspace_arr = np.linspace(0, 1, 20)
print("
Linspace:", linspace_arr)

# Challenge 3: Create a 3x3 matrix of random integers between 1 and 100
random_matrix = np.random.randint(1, 101, size=(3, 3))
print("
Random matrix:
", random_matrix)

# Challenge 4: Calculate the mean of each row and column
print("Row means:", random_matrix.mean(axis=1))
print("Column means:", random_matrix.mean(axis=0))

# Challenge 5: Normalize the matrix (subtract mean, divide by std)
normalized = (random_matrix - random_matrix.mean()) / random_matrix.std()
print("
Normalized:
", normalized)
\`\`\`

**Bonus:** Create a function that generates a "heatmap" using NumPy arrays and prints it with symbols (█ for high values, ░ for low values).

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
### 🎯 Practice Exercise

**Exercise: NumPy Advanced Operations**

\`\`\`python
import numpy as np

# Challenge 1: Broadcasting - Add a bias vector to each row
matrix = np.random.randn(4, 3)
bias = np.array([1.0, -0.5, 0.2])
result = matrix + bias
print("Broadcasted result:
", result)

# Challenge 2: Solve this system of equations using np.linalg.solve
# 2x + 3y = 8
# 4x + y = 10
A = np.array([[2, 3], [4, 1]])
b = np.array([8, 10])
solution = np.linalg.solve(A, b)
print(f"
x = {solution[0]:.2f}, y = {solution[1]:.2f}")

# Challenge 3: Use np.where to categorize test scores
scores = np.array([92, 65, 78, 45, 88, 55, 73, 96])
grades = np.where(scores >= 90, 'A',
         np.where(scores >= 80, 'B',
         np.where(scores >= 70, 'C',
         np.where(scores >= 60, 'D', 'F'))))
print("
Grades:", grades)
\`\`\`

Try modifying the score thresholds and adding a +/- system (A+, A, A-, etc.)!

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
### 🎯 Practice Exercise

**Exercise: Pandas DataFrame Explorer**

\`\`\`python
import pandas as pd

# Create a sample dataset
data = {
    'name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'],
    'department': ['Engineering', 'Marketing', 'Engineering', 'Sales', 'Marketing', 'Sales'],
    'salary': [95000, 65000, 88000, 72000, 71000, 68000],
    'years_exp': [5, 2, 4, 3, 3, 1],
    'rating': [4.5, 3.8, 4.2, 4.0, 4.7, 3.5]
}
df = pd.DataFrame(data)

# Challenge 1: Filter employees with salary > 70000 AND rating > 4.0
high_performers = df[(df['salary'] > 70000) & (df['rating'] > 4.0)]
print("High performers:
", high_performers)

# Challenge 2: Calculate average salary by department
avg_salary = df.groupby('department')['salary'].mean()
print("
Avg salary by dept:
", avg_salary)

# Challenge 3: Add a 'salary_per_year_exp' column
df['salary_per_year'] = df['salary'] / df['years_exp']
print("
Salary efficiency:
", df[['name', 'salary_per_year']])

# Challenge 4: Sort by rating descending, then by salary descending
sorted_df = df.sort_values(['rating', 'salary'], ascending=[False, False])
print("
Sorted:
", sorted_df)
\`\`\`

**Bonus:** Add 5 more employees and create a "promotion_eligible" column based on custom criteria.

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
### 🎯 Practice Exercise

**Exercise: Advanced Pandas Operations**

\`\`\`python
import pandas as pd
import numpy as np

# Create two related DataFrames
orders = pd.DataFrame({
    'order_id': range(1, 8),
    'customer_id': [101, 102, 101, 103, 102, 104, 101],
    'product': ['Laptop', 'Phone', 'Tablet', 'Laptop', 'Laptop', 'Phone', 'Phone'],
    'amount': [1200, 800, 450, 1200, 1200, 800, 800],
    'date': pd.date_range('2024-01-01', periods=7)
})

customers = pd.DataFrame({
    'customer_id': [101, 102, 103, 104, 105],
    'name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'city': ['NYC', 'LA', 'NYC', 'Chicago', 'LA']
})

# Challenge 1: Merge orders with customer names
merged = orders.merge(customers, on='customer_id', how='left')
print(merged)

# Challenge 2: Create a pivot table - total spend per customer per product
pivot = orders.pivot_table(values='amount', index='customer_id', 
                           columns='product', aggfunc='sum', fill_value=0)
print("
Pivot table:
", pivot)

# Challenge 3: Calculate running total of amounts per customer
orders['running_total'] = orders.groupby('customer_id')['amount'].cumsum()
print("
Running totals:
", orders[['order_id', 'customer_id', 'amount', 'running_total']])
\`\`\`

**Bonus:** Find which city generates the most revenue and which product is most popular per city.

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
### 🎯 Practice Exercise

**Exercise: Clean a Messy Dataset**

\`\`\`python
import pandas as pd
import numpy as np

# Create a deliberately messy dataset
messy_data = pd.DataFrame({
    'Name': ['Alice', 'bob', 'CHARLIE', None, 'Eve', 'Alice'],
    'Age': [25, 300, 35, 28, -5, 25],
    'Email': ['alice@email.com', 'bob@email', 'charlie@email.com', 
              'diana@email.com', None, 'alice@email.com'],
    'Salary': ['$50,000', '$60,000', None, '$45,000', '$70,000', '$50,000'],
    'Join_Date': ['2024-01-15', '01/20/2024', '2024-02-01', 
                  'invalid', '2024-03-10', '2024-01-15']
})

print("MESSY DATA:")
print(messy_data)

# Challenge 1: Standardize names (Title Case)
messy_data['Name'] = messy_data['Name'].str.title()

# Challenge 2: Handle invalid ages (replace with NaN if outside 18-100)
messy_data.loc[~messy_data['Age'].between(18, 100), 'Age'] = np.nan

# Challenge 3: Clean salary column (remove $ and commas, convert to float)
messy_data['Salary'] = messy_data['Salary'].str.replace('[$,]', '', regex=True).astype(float)

# Challenge 4: Remove duplicates
messy_data = messy_data.drop_duplicates()

# Challenge 5: Fill missing values appropriately
messy_data['Age'] = messy_data['Age'].fillna(messy_data['Age'].median())

print("
CLEANED DATA:")
print(messy_data)
\`\`\`

Try adding more types of mess (extra whitespace, mixed data types) and cleaning them!

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
### 🎯 Practice Exercise

**Exercise: Outlier Detection Workshop**

\`\`\`python
import pandas as pd
import numpy as np

# Generate dataset with outliers
np.random.seed(42)
normal_data = np.random.normal(100, 15, 100)  # Mean 100, std 15
outliers = np.array([200, 250, 10, 5, 300])
data = np.concatenate([normal_data, outliers])
df = pd.DataFrame({'value': data})

# Challenge 1: Detect outliers using IQR method
Q1 = df['value'].quantile(0.25)
Q3 = df['value'].quantile(0.75)
IQR = Q3 - Q1
lower = Q1 - 1.5 * IQR
upper = Q3 + 1.5 * IQR
outliers_iqr = df[(df['value'] < lower) | (df['value'] > upper)]
print(f"IQR method found {len(outliers_iqr)} outliers")

# Challenge 2: Detect outliers using Z-score method
from scipy import stats
z_scores = np.abs(stats.zscore(df['value']))
outliers_z = df[z_scores > 3]
print(f"Z-score method found {len(outliers_z)} outliers")

# Challenge 3: Compare methods - which found more?
print(f"
IQR range: [{lower:.1f}, {upper:.1f}]")
print(f"Z-score threshold: mean ± 3*std = [{df['value'].mean()-3*df['value'].std():.1f}, {df['value'].mean()+3*df['value'].std():.1f}]")
\`\`\`

**Bonus:** Implement a function that lets you choose between "remove", "cap", or "replace with median" strategies for handling outliers.

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
### 🎯 Practice Exercise

**Exercise: Build a Multi-Panel Dashboard**

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

# Sample data
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
revenue = [12000, 15000, 13500, 17000, 16000, 19000]
expenses = [10000, 11000, 10500, 12000, 11500, 13000]
customers = [150, 180, 165, 210, 195, 240]

fig, axes = plt.subplots(2, 2, figsize=(12, 8))
fig.suptitle('Business Dashboard Q1-Q2 2024', fontsize=16)

# Panel 1: Revenue vs Expenses (line chart)
axes[0,0].plot(months, revenue, 'g-o', label='Revenue')
axes[0,0].plot(months, expenses, 'r-s', label='Expenses')
axes[0,0].set_title('Revenue vs Expenses')
axes[0,0].legend()
axes[0,0].set_ylabel('Amount ($)')

# Panel 2: Profit (bar chart)
profit = [r - e for r, e in zip(revenue, expenses)]
colors = ['green' if p > 0 else 'red' for p in profit]
axes[0,1].bar(months, profit, color=colors)
axes[0,1].set_title('Monthly Profit')
axes[0,1].set_ylabel('Profit ($)')

# Panel 3: Customer growth (area chart)
axes[1,0].fill_between(months, customers, alpha=0.3, color='blue')
axes[1,0].plot(months, customers, 'b-o')
axes[1,0].set_title('Customer Growth')
axes[1,0].set_ylabel('Customers')

# Panel 4: Revenue distribution (pie chart)
axes[1,1].pie(revenue, labels=months, autopct='%1.1f%%')
axes[1,1].set_title('Revenue Distribution')

plt.tight_layout()
plt.savefig('dashboard.png', dpi=150)
plt.show()
\`\`\`

Try customizing colors, adding gridlines, and annotating key data points!

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
### 🎯 Practice Exercise

**Exercise: Statistical Visualization with Seaborn**

\`\`\`python
import seaborn as sns
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Create a realistic dataset
np.random.seed(42)
n = 200
df = pd.DataFrame({
    'study_hours': np.random.normal(5, 2, n).clip(0, 12),
    'sleep_hours': np.random.normal(7, 1.5, n).clip(3, 12),
    'exam_score': np.random.normal(75, 12, n).clip(0, 100),
    'grade_level': np.random.choice(['Freshman', 'Sophomore', 'Junior', 'Senior'], n)
})
df['exam_score'] += df['study_hours'] * 3  # Add correlation

# Challenge 1: Create a pairplot colored by grade level
sns.pairplot(df, hue='grade_level', palette='Set2')
plt.suptitle('Student Performance Relationships', y=1.02)
plt.show()

# Challenge 2: Create a heatmap of correlations
plt.figure(figsize=(8, 6))
corr = df.select_dtypes(include=[np.number]).corr()
sns.heatmap(corr, annot=True, cmap='coolwarm', center=0)
plt.title('Correlation Heatmap')
plt.show()

# Challenge 3: Box plot of exam scores by grade level
plt.figure(figsize=(8, 5))
sns.boxplot(data=df, x='grade_level', y='exam_score', 
            order=['Freshman', 'Sophomore', 'Junior', 'Senior'])
plt.title('Exam Scores by Grade Level')
plt.show()
\`\`\`

**Bonus:** Create a violin plot comparing study hours across grade levels and add a swarm plot overlay.

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
### 🎯 Practice Exercise

**Exercise: Complete EDA on a Dataset**

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Create a sample e-commerce dataset
np.random.seed(42)
n = 500
df = pd.DataFrame({
    'customer_age': np.random.normal(35, 12, n).astype(int).clip(18, 70),
    'purchase_amount': np.random.lognormal(4, 0.8, n).round(2),
    'items_bought': np.random.poisson(3, n) + 1,
    'category': np.random.choice(['Electronics', 'Clothing', 'Books', 'Home'], n),
    'is_return': np.random.choice([True, False], n, p=[0.15, 0.85])
})

# Step 1: Quick overview
print("Shape:", df.shape)
print("
Data Types:
", df.dtypes)
print("
Describe:
", df.describe())
print("
Null counts:
", df.isnull().sum())

# Step 2: Distribution analysis
fig, axes = plt.subplots(1, 3, figsize=(15, 4))
df['customer_age'].hist(ax=axes[0], bins=20, color='skyblue')
axes[0].set_title('Age Distribution')
df['purchase_amount'].hist(ax=axes[1], bins=30, color='salmon')
axes[1].set_title('Purchase Amount Distribution')
df['items_bought'].hist(ax=axes[2], bins=10, color='lightgreen')
axes[2].set_title('Items Bought Distribution')
plt.tight_layout()
plt.show()

# Step 3: Key insight - return rate by category
return_rate = df.groupby('category')['is_return'].mean() * 100
print("
Return Rate by Category:")
print(return_rate.sort_values(ascending=False))
\`\`\`

Document 3 insights you discover and suggest 2 business actions based on the data!

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
### 🎯 Practice Exercise

**Exercise: Advanced EDA Techniques**

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Create time-series dataset
dates = pd.date_range('2023-01-01', '2024-12-31', freq='D')
np.random.seed(42)
df = pd.DataFrame({
    'date': dates,
    'sales': np.random.normal(1000, 200, len(dates)) + 
             np.sin(np.arange(len(dates)) * 2 * np.pi / 365) * 300,
    'website_visits': np.random.poisson(500, len(dates)),
})
df['conversion_rate'] = (df['sales'] / df['website_visits'] / 10).clip(0.01, 0.15)

# Challenge 1: Rolling averages
df['sales_7d_avg'] = df['sales'].rolling(7).mean()
df['sales_30d_avg'] = df['sales'].rolling(30).mean()

plt.figure(figsize=(14, 5))
plt.plot(df['date'], df['sales'], alpha=0.3, label='Daily')
plt.plot(df['date'], df['sales_7d_avg'], label='7-day avg')
plt.plot(df['date'], df['sales_30d_avg'], label='30-day avg', linewidth=2)
plt.legend()
plt.title('Sales Trend with Rolling Averages')
plt.show()

# Challenge 2: Month-over-month comparison
df['month'] = df['date'].dt.month
df['year'] = df['date'].dt.year
monthly = df.groupby(['year', 'month'])['sales'].sum().unstack(0)
monthly.plot(kind='bar', figsize=(12, 5))
plt.title('Monthly Sales Comparison: 2023 vs 2024')
plt.show()
\`\`\`

**Bonus:** Calculate the correlation between website visits and sales, and determine the lag that maximizes correlation.

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
### 🎯 Practice Exercise

**Exercise: Descriptive Statistics in Action**

\`\`\`python
import pandas as pd
import numpy as np
from scipy import stats

# Sample dataset: exam scores from two classes
np.random.seed(42)
class_a = np.random.normal(78, 10, 30).clip(0, 100).round(1)
class_b = np.random.normal(82, 8, 30).clip(0, 100).round(1)

# Challenge 1: Calculate all descriptive stats for both classes
for name, data in [('Class A', class_a), ('Class B', class_b)]:
    print(f"
{name}:")
    print(f"  Mean: {np.mean(data):.1f}")
    print(f"  Median: {np.median(data):.1f}")
    print(f"  Mode: {stats.mode(data, keepdims=True).mode[0]:.1f}")
    print(f"  Std Dev: {np.std(data):.1f}")
    print(f"  Skewness: {stats.skew(data):.3f}")
    print(f"  Kurtosis: {stats.kurtosis(data):.3f}")
    print(f"  IQR: {np.percentile(data, 75) - np.percentile(data, 25):.1f}")

# Challenge 2: Which class has more consistent scores?
print(f"
Coefficient of Variation:")
print(f"  Class A: {np.std(class_a)/np.mean(class_a)*100:.1f}%")
print(f"  Class B: {np.std(class_b)/np.mean(class_b)*100:.1f}%")
print("Lower CV = more consistent")
\`\`\`

**Bonus:** Create a side-by-side box plot and histogram for both classes.

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
### 🎯 Practice Exercise

**Exercise: Hypothesis Testing Practice**

\`\`\`python
import numpy as np
from scipy import stats

# Scenario: A/B test for a website button color
np.random.seed(42)

# Group A (blue button): 1000 visitors, conversion rate ~5%
group_a = np.random.binomial(1, 0.05, 1000)

# Group B (green button): 1000 visitors, conversion rate ~6.5%
group_b = np.random.binomial(1, 0.065, 1000)

print(f"Group A conversion: {group_a.mean()*100:.1f}%")
print(f"Group B conversion: {group_b.mean()*100:.1f}%")

# Challenge 1: Two-sample t-test
t_stat, p_value = stats.ttest_ind(group_a, group_b)
print(f"
t-test: t={t_stat:.3f}, p={p_value:.4f}")
print(f"Significant at 0.05? {'Yes' if p_value < 0.05 else 'No'}")

# Challenge 2: Chi-square test for proportions
from scipy.stats import chi2_contingency
table = [[group_a.sum(), len(group_a) - group_a.sum()],
         [group_b.sum(), len(group_b) - group_b.sum()]]
chi2, p_chi, dof, expected = chi2_contingency(table)
print(f"
Chi-square: χ²={chi2:.3f}, p={p_chi:.4f}")

# Challenge 3: Calculate effect size (Cohen's h)
import math
p1, p2 = group_a.mean(), group_b.mean()
h = 2 * (math.asin(math.sqrt(p2)) - math.asin(math.sqrt(p1)))
print(f"
Effect size (Cohen's h): {h:.3f}")
print(f"Effect: {'Small' if abs(h) < 0.3 else 'Medium' if abs(h) < 0.5 else 'Large'}")
\`\`\`

Try changing the sample sizes and conversion rates to see how they affect statistical significance!

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
### 🎯 Practice Exercise

**Exercise: Your Own Data Science Project**

Apply everything you've learned! Follow these steps:

1. **Find a dataset** — Try [kaggle.com/datasets](https://kaggle.com/datasets)
2. **Define 3 questions** you want to answer
3. **Load and explore** the data with Pandas
4. **Clean** any messy data (missing values, outliers)
5. **Visualize** key patterns with Matplotlib/Seaborn
6. **Analyze** with statistics
7. **Present** your findings

\`\`\`python
# Project template
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Step 1: Load your data
# df = pd.read_csv('your_dataset.csv')

# Step 2: Initial exploration
# print(df.shape, df.dtypes, df.describe())

# Step 3: Clean data
# Handle missing values, outliers, type conversions

# Step 4: EDA and visualization
# Create at least 5 different charts

# Step 5: Statistical analysis
# Test at least one hypothesis

# Step 6: Write your conclusions
# What did you find? What actions do you recommend?
\`\`\`

Share your project on GitHub or Kaggle to build your portfolio!

          `}]}]};const Nd=(...A)=>A.filter((Q,G,m)=>!!Q&&Q.trim()!==""&&m.indexOf(Q)===G).join(" ").trim();const oy=A=>A.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const fy=A=>A.replace(/^([A-Z])|[\s-_]+(\w)/g,(Q,G,m)=>m?m.toUpperCase():G.toLowerCase());const Cd=A=>{const Q=fy(A);return Q.charAt(0).toUpperCase()+Q.slice(1)};var dy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const py=A=>{for(const Q in A)if(Q.startsWith("aria-")||Q==="role"||Q==="title")return!0;return!1};const my=Ee.forwardRef(({color:A="currentColor",size:Q=24,strokeWidth:G=2,absoluteStrokeWidth:m,className:w="",children:K,iconNode:it,...xt},N)=>Ee.createElement("svg",{ref:N,...dy,width:Q,height:Q,stroke:A,strokeWidth:m?Number(G)*24/Number(Q):G,className:Nd("lucide",w),...!K&&!py(xt)&&{"aria-hidden":"true"},...xt},[...it.map(([z,I])=>Ee.createElement(z,I)),...Array.isArray(K)?K:[K]]));const Ce=(A,Q)=>{const G=Ee.forwardRef(({className:m,...w},K)=>Ee.createElement(my,{ref:K,iconNode:Q,className:Nd(`lucide-${oy(Cd(A))}`,`lucide-${A}`,m),...w}));return G.displayName=Cd(A),G};const yy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],hy=Ce("book-open",yy);const gy=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Md=Ce("chart-column",gy);const vy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Vi=Ce("chevron-right",vy);const by=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],An=Ce("circle-check",by);const _y=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Sy=Ce("clock",_y);const xy=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],zy=Ce("house",xy);const Ay=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Ty=Ce("lightbulb",Ay);const Dy=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ey=Ce("menu",Dy);const Cy=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],My=Ce("play",Cy);const Ny=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Oy=Ce("triangle-alert",Ny);const wy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ry=Ce("x",wy);function qy(){const[A,Q]=Ee.useState(!1),[G,m]=Ee.useState("home"),[w,K]=Ee.useState(null),[it,xt]=Ee.useState([]);Ee.useEffect(()=>{const O=localStorage.getItem("datasci-learning-progress");O&&xt(JSON.parse(O))},[]);const N=O=>{const B=[...it,O];xt(B),localStorage.setItem("datasci-learning-progress",JSON.stringify(B))},z=De.chapters.reduce((O,B)=>O+B.lessons.length,0),I=Math.round(it.length/z*100),U=O=>{K(O),m("lesson"),Q(!1),window.scrollTo(0,0)},pt=()=>{if(!w)return null;for(let O=0;O<De.chapters.length;O++){const B=De.chapters[O];for(let J=0;J<B.lessons.length;J++)if(B.lessons[J].id===w.id){if(J<B.lessons.length-1)return B.lessons[J+1];if(O<De.chapters.length-1)return De.chapters[O+1].lessons[0]}}return null},Lt=()=>{if(!w)return null;for(let O=0;O<De.chapters.length;O++){const B=De.chapters[O];for(let J=0;J<B.lessons.length;J++)if(B.lessons[J].id===w.id){if(J>0)return B.lessons[J-1];if(O>0){const R=De.chapters[O-1];return R.lessons[R.lessons.length-1]}}}return null},Gt=O=>{const B=O.trim().split(`
`),J=[];let R=0,zt=!1,Ut=[],te="";for(;R<B.length;){const lt=B[R];if(lt.startsWith("```")){zt?(J.push(_.jsxs("div",{className:"code-block",children:[_.jsxs("div",{className:"code-header",children:[_.jsx("span",{className:"code-language",children:te}),_.jsx("button",{className:"code-copy",onClick:()=>navigator.clipboard.writeText(Ut.join(`
`)),children:"Copy"})]}),_.jsx("div",{className:"code-content",children:_.jsx("pre",{children:Ut.join(`
`)})})]},`code-${R}`)),zt=!1):(zt=!0,te=lt.slice(3).trim()||"text",Ut=[]),R++;continue}if(zt){Ut.push(lt),R++;continue}if(lt.includes("<tip>")){let H=[];for(R++;R<B.length&&!B[R].includes("</tip>");)H.push(B[R]),R++;J.push(_.jsxs("div",{className:"tip-box",children:[_.jsxs("div",{className:"tip-box-header",children:[_.jsx(Ty,{size:18}),_.jsx("span",{children:"Pro Tip"})]}),_.jsx("p",{children:H.join(" ").replace("💡 ","")})]},`tip-${R}`)),R++;continue}if(lt.includes("<warning>")){let H=[];for(R++;R<B.length&&!B[R].includes("</warning>");)H.push(B[R]),R++;J.push(_.jsxs("div",{className:"warning-box",children:[_.jsxs("div",{className:"warning-box-header",children:[_.jsx(Oy,{size:18}),_.jsx("span",{children:"Warning"})]}),_.jsx("p",{children:H.join(" ").replace("⚠️ ","")})]},`warn-${R}`)),R++;continue}if(lt.startsWith("## ")){J.push(_.jsx("h2",{children:lt.slice(3)},`h2-${R}`)),R++;continue}if(lt.startsWith("### ")){J.push(_.jsx("h3",{children:lt.slice(4)},`h3-${R}`)),R++;continue}if(lt.includes("|")&&B[R+1]?.includes("---")){const H=lt.split("|").filter(ht=>ht.trim()).map(ht=>ht.trim());R+=2;const At=[];for(;R<B.length&&B[R].includes("|");)At.push(B[R].split("|").filter(ht=>ht.trim()).map(ht=>ht.trim())),R++;J.push(_.jsx("div",{style:{overflowX:"auto",margin:"20px 0"},children:_.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",background:"var(--bg-card)",borderRadius:"12px",overflow:"hidden"},children:[_.jsx("thead",{children:_.jsx("tr",{children:H.map((ht,Me)=>_.jsx("th",{style:{padding:"12px 16px",textAlign:"left",borderBottom:"1px solid var(--border-color)",color:"var(--accent-primary)"},children:ht},Me))})}),_.jsx("tbody",{children:At.map((ht,Me)=>_.jsx("tr",{children:ht.map((fe,Vt)=>_.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--border-color)",color:"var(--text-secondary)"},children:_.jsx("span",{dangerouslySetInnerHTML:{__html:fe.replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--text-primary)">$1</strong>').replace(/`(.*?)`/g,'<code style="background:rgba(20,184,166,0.1);padding:2px 6px;border-radius:4px;font-size:13px">$1</code>')}})},Vt))},Me))})]})},`table-${R}`));continue}if(lt.startsWith("- ")||lt.startsWith("* ")){const H=[];for(;R<B.length&&(B[R].startsWith("- ")||B[R].startsWith("* "));)H.push(B[R].slice(2)),R++;J.push(_.jsx("ul",{children:H.map((At,ht)=>_.jsx("li",{dangerouslySetInnerHTML:{__html:At.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(20,184,166,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},ht))},`ul-${R}`));continue}if(/^\d+\. /.test(lt)){const H=[];for(;R<B.length&&/^\d+\. /.test(B[R]);)H.push(B[R].replace(/^\d+\. /,"")),R++;J.push(_.jsx("ol",{children:H.map((At,ht)=>_.jsx("li",{dangerouslySetInnerHTML:{__html:At.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(20,184,166,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},ht))},`ol-${R}`));continue}lt.trim()&&J.push(_.jsx("p",{dangerouslySetInnerHTML:{__html:lt.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(20,184,166,0.1);padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:14px">$1</code>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank" style="color:var(--accent-cyan)">$1</a>')}},`p-${R}`)),R++}return J};return _.jsxs("div",{className:"app-container",children:[_.jsx("div",{className:"bg-grid"}),_.jsx("div",{className:"bg-noise"}),_.jsx("div",{className:"gradient-orb orb-primary"}),_.jsx("div",{className:"gradient-orb orb-cyan"}),_.jsx("div",{className:"gradient-orb orb-secondary"}),_.jsx("button",{className:"mobile-menu-btn",onClick:()=>Q(!A),children:A?_.jsx(Ry,{size:24}):_.jsx(Ey,{size:24})}),_.jsx("div",{className:`sidebar-overlay ${A?"open":""}`,onClick:()=>Q(!1)}),_.jsxs("aside",{className:`sidebar ${A?"open":""}`,children:[_.jsxs("div",{className:"sidebar-header",children:[_.jsx("div",{className:"sidebar-logo",children:_.jsx(Md,{size:24})}),_.jsx("span",{className:"sidebar-title",children:"Data Science"})]}),_.jsxs("nav",{className:"sidebar-nav",children:[_.jsxs("div",{className:`nav-item ${G==="home"?"active":""}`,onClick:()=>{m("home"),Q(!1)},children:[_.jsx(zy,{size:20,className:"nav-item-icon"}),_.jsx("span",{children:"Home"})]}),De.chapters.map(O=>_.jsxs("div",{className:"nav-section",children:[_.jsxs("div",{className:"nav-section-title",children:["Ch ",O.id,": ",O.title]}),O.lessons.map(B=>_.jsxs("div",{className:`nav-item ${w?.id===B.id?"active":""}`,onClick:()=>U(B),children:[it.includes(B.id)?_.jsx(An,{size:18,className:"nav-item-icon",style:{color:"var(--accent-green)"}}):_.jsx(hy,{size:18,className:"nav-item-icon"}),_.jsx("span",{children:B.title})]},B.id))]},O.id))]}),_.jsxs("div",{style:{marginTop:"auto",padding:"20px",borderTop:"1px solid var(--border-color)"},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:[_.jsx("span",{children:"Progress"}),_.jsxs("span",{children:[I,"%"]})]}),_.jsx("div",{className:"progress-bar",children:_.jsx("div",{className:"progress-fill",style:{width:`${I}%`}})})]})]}),_.jsxs("main",{className:"main-content",children:[G==="home"&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"hero",children:[_.jsxs("div",{className:"hero-badge",children:[_.jsx(Md,{size:16}),_.jsx("span",{children:"Data Science Course"})]}),_.jsxs("h1",{className:"hero-title",children:["Master",_.jsx("br",{}),_.jsx("span",{children:"Data Science"})]}),_.jsx("p",{className:"hero-subtitle",children:"Learn Pandas, NumPy, data visualization, and statistical analysis. Transform raw data into insights!"}),_.jsxs("button",{className:"nav-button primary",onClick:()=>U(De.chapters[0].lessons[0]),style:{margin:"0 auto"},children:[_.jsx(My,{size:20}),"Start Learning"]})]}),_.jsxs("div",{style:{marginBottom:"48px"},children:[_.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px"},children:"Course Chapters"}),De.chapters.map(O=>{const B=O.lessons.filter(J=>it.includes(J.id)).length;return _.jsxs("div",{className:"chapter-card",onClick:()=>U(O.lessons[0]),children:[_.jsx("div",{className:"chapter-number",children:O.id}),_.jsxs("div",{className:"chapter-info",children:[_.jsx("div",{className:"chapter-title",children:O.title}),_.jsxs("div",{className:"chapter-meta",children:[O.description," • ",O.lessons.length," lessons",B>0&&_.jsxs("span",{style:{color:"var(--accent-green)",marginLeft:"8px"},children:["(",B,"/",O.lessons.length," complete)"]})]})]}),_.jsx(Vi,{size:24,style:{color:"var(--text-muted)"}})]},O.id)})]}),_.jsxs("div",{className:"glass-card",style:{textAlign:"center"},children:[_.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px"},children:"What You'll Learn"}),_.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"By the end, you'll be able to analyze any dataset:"}),_.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},children:["NumPy Arrays","Pandas DataFrames","Data Cleaning","Visualization","Statistics","ML Basics"].map(O=>_.jsxs("div",{style:{padding:"16px",background:"rgba(20, 184, 166, 0.1)",borderRadius:"12px",border:"1px solid rgba(20, 184, 166, 0.2)"},children:[_.jsx(An,{size:24,style:{color:"var(--accent-primary)",marginBottom:"8px"}}),_.jsx("div",{style:{fontWeight:"500"},children:O})]},O))})]})]}),G==="lesson"&&w&&_.jsxs("div",{className:"lesson-container",children:[_.jsxs("div",{className:"lesson-header",children:[_.jsxs("div",{className:"lesson-breadcrumb",children:[_.jsx("a",{href:"#",onClick:O=>{O.preventDefault(),m("home")},children:"Home"}),_.jsx(Vi,{size:16}),_.jsx("span",{children:w.title})]}),_.jsx("h1",{className:"lesson-title",children:w.title}),_.jsxs("div",{className:"lesson-meta",children:[_.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[_.jsx(Sy,{size:16}),w.duration]}),it.includes(w.id)&&_.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--accent-green)"},children:[_.jsx(An,{size:16}),"Completed"]})]})]}),_.jsx("div",{className:"lesson-content",children:Gt(w.content)}),!it.includes(w.id)&&_.jsxs("button",{className:"nav-button primary",style:{width:"100%",justifyContent:"center",marginTop:"32px"},onClick:()=>N(w.id),children:[_.jsx(An,{size:20}),"Mark as Complete"]}),_.jsxs("div",{className:"lesson-nav",children:[Lt()?_.jsxs("button",{className:"nav-button",onClick:()=>U(Lt()),children:[_.jsx(Vi,{size:20,style:{transform:"rotate(180deg)"}}),"Previous"]}):_.jsx("div",{}),pt()?_.jsxs("button",{className:"nav-button primary",onClick:()=>U(pt()),children:["Next Lesson",_.jsx(Vi,{size:20})]}):_.jsxs("button",{className:"nav-button primary",onClick:()=>m("home"),children:["Finish Course",_.jsx(An,{size:20})]})]})]})]})]})}ry.createRoot(document.getElementById("root")).render(_.jsx(Ee.StrictMode,{children:_.jsx(qy,{})}));
