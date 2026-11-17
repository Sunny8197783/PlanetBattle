var LA=Object.create;var dx=Object.defineProperty;var OA=Object.getOwnPropertyDescriptor;var UA=Object.getOwnPropertyNames;var PA=Object.getPrototypeOf,IA=Object.prototype.hasOwnProperty;var zA=(i,t,e)=>()=>{if(e)throw e[0];try{return i&&(t=i(i=0)),t}catch(n){throw e=[n],n}};var As=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var BA=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of UA(t))!IA.call(i,s)&&s!==e&&dx(i,s,{get:()=>t[s],enumerable:!(n=OA(t,s))||n.enumerable});return i};var Va=(i,t,e)=>(e=i!=null?LA(PA(i)):{},BA(t||!i||!i.__esModule?dx(e,"default",{value:i,enumerable:!0}):e,i));var nt=zA(()=>{});var Mx=As(Pe=>{"use strict";nt();function tg(i,t){var e=i.length;i.push(t);t:for(;0<e;){var n=e-1>>>1,s=i[n];if(0<Fh(s,t))i[n]=t,i[e]=s,e=n;else break t}}function Rs(i){return i.length===0?null:i[0]}function Gh(i){if(i.length===0)return null;var t=i[0],e=i.pop();if(e!==t){i[0]=e;t:for(var n=0,s=i.length,r=s>>>1;n<r;){var a=2*(n+1)-1,o=i[a],l=a+1,c=i[l];if(0>Fh(o,e))l<s&&0>Fh(c,o)?(i[n]=c,i[l]=e,n=l):(i[n]=o,i[a]=e,n=a);else if(l<s&&0>Fh(c,e))i[n]=c,i[l]=e,n=l;else break t}}return t}function Fh(i,t){var e=i.sortIndex-t.sortIndex;return e!==0?e:i.id-t.id}Pe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(px=performance,Pe.unstable_now=function(){return px.now()}):(Jm=Date,mx=Jm.now(),Pe.unstable_now=function(){return Jm.now()-mx});var px,Jm,mx,Ys=[],Br=[],FA=1,Jn=null,ki=3,eg=!1,wc=!1,Ac=!1,ig=!1,vx=typeof setTimeout=="function"?setTimeout:null,yx=typeof clearTimeout=="function"?clearTimeout:null,gx=typeof setImmediate<"u"?setImmediate:null;function Hh(i){for(var t=Rs(Br);t!==null;){if(t.callback===null)Gh(Br);else if(t.startTime<=i)Gh(Br),t.sortIndex=t.expirationTime,tg(Ys,t);else break;t=Rs(Br)}}function ng(i){if(Ac=!1,Hh(i),!wc)if(Rs(Ys)!==null)wc=!0,Ho||(Ho=!0,Fo());else{var t=Rs(Br);t!==null&&sg(ng,t.startTime-i)}}var Ho=!1,Rc=-1,xx=5,Sx=-1;function bx(){return ig?!0:!(Pe.unstable_now()-Sx<xx)}function jm(){if(ig=!1,Ho){var i=Pe.unstable_now();Sx=i;var t=!0;try{t:{wc=!1,Ac&&(Ac=!1,yx(Rc),Rc=-1),eg=!0;var e=ki;try{e:{for(Hh(i),Jn=Rs(Ys);Jn!==null&&!(Jn.expirationTime>i&&bx());){var n=Jn.callback;if(typeof n=="function"){Jn.callback=null,ki=Jn.priorityLevel;var s=n(Jn.expirationTime<=i);if(i=Pe.unstable_now(),typeof s=="function"){Jn.callback=s,Hh(i),t=!0;break e}Jn===Rs(Ys)&&Gh(Ys),Hh(i)}else Gh(Ys);Jn=Rs(Ys)}if(Jn!==null)t=!0;else{var r=Rs(Br);r!==null&&sg(ng,r.startTime-i),t=!1}}break t}finally{Jn=null,ki=e,eg=!1}t=void 0}}finally{t?Fo():Ho=!1}}}var Fo;typeof gx=="function"?Fo=function(){gx(jm)}:typeof MessageChannel<"u"?($m=new MessageChannel,_x=$m.port2,$m.port1.onmessage=jm,Fo=function(){_x.postMessage(null)}):Fo=function(){vx(jm,0)};var $m,_x;function sg(i,t){Rc=vx(function(){i(Pe.unstable_now())},t)}Pe.unstable_IdlePriority=5;Pe.unstable_ImmediatePriority=1;Pe.unstable_LowPriority=4;Pe.unstable_NormalPriority=3;Pe.unstable_Profiling=null;Pe.unstable_UserBlockingPriority=2;Pe.unstable_cancelCallback=function(i){i.callback=null};Pe.unstable_forceFrameRate=function(i){0>i||125<i?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xx=0<i?Math.floor(1e3/i):5};Pe.unstable_getCurrentPriorityLevel=function(){return ki};Pe.unstable_next=function(i){switch(ki){case 1:case 2:case 3:var t=3;break;default:t=ki}var e=ki;ki=t;try{return i()}finally{ki=e}};Pe.unstable_requestPaint=function(){ig=!0};Pe.unstable_runWithPriority=function(i,t){switch(i){case 1:case 2:case 3:case 4:case 5:break;default:i=3}var e=ki;ki=i;try{return t()}finally{ki=e}};Pe.unstable_scheduleCallback=function(i,t,e){var n=Pe.unstable_now();switch(typeof e=="object"&&e!==null?(e=e.delay,e=typeof e=="number"&&0<e?n+e:n):e=n,i){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=e+s,i={id:FA++,callback:t,priorityLevel:i,startTime:e,expirationTime:s,sortIndex:-1},e>n?(i.sortIndex=e,tg(Br,i),Rs(Ys)===null&&i===Rs(Br)&&(Ac?(yx(Rc),Rc=-1):Ac=!0,sg(ng,e-n))):(i.sortIndex=s,tg(Ys,i),wc||eg||(wc=!0,Ho||(Ho=!0,Fo()))),i};Pe.unstable_shouldYield=bx;Pe.unstable_wrapCallback=function(i){var t=ki;return function(){var e=ki;ki=t;try{return i.apply(this,arguments)}finally{ki=e}}}});var Ex=As((kI,Tx)=>{"use strict";nt();Tx.exports=Mx()});var Ix=As(Wt=>{"use strict";nt();var og=Symbol.for("react.transitional.element"),HA=Symbol.for("react.portal"),GA=Symbol.for("react.fragment"),kA=Symbol.for("react.strict_mode"),VA=Symbol.for("react.profiler"),WA=Symbol.for("react.consumer"),XA=Symbol.for("react.context"),qA=Symbol.for("react.forward_ref"),YA=Symbol.for("react.suspense"),ZA=Symbol.for("react.memo"),Dx=Symbol.for("react.lazy"),QA=Symbol.for("react.activity"),wx=Symbol.iterator;function KA(i){return i===null||typeof i!="object"?null:(i=wx&&i[wx]||i["@@iterator"],typeof i=="function"?i:null)}var Nx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lx=Object.assign,Ox={};function ko(i,t,e){this.props=i,this.context=t,this.refs=Ox,this.updater=e||Nx}ko.prototype.isReactComponent={};ko.prototype.setState=function(i,t){if(typeof i!="object"&&typeof i!="function"&&i!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,i,t,"setState")};ko.prototype.forceUpdate=function(i){this.updater.enqueueForceUpdate(this,i,"forceUpdate")};function Ux(){}Ux.prototype=ko.prototype;function lg(i,t,e){this.props=i,this.context=t,this.refs=Ox,this.updater=e||Nx}var cg=lg.prototype=new Ux;cg.constructor=lg;Lx(cg,ko.prototype);cg.isPureReactComponent=!0;var Ax=Array.isArray;function ag(){}var Ae={H:null,A:null,T:null,S:null},Px=Object.prototype.hasOwnProperty;function ug(i,t,e){var n=e.ref;return{$$typeof:og,type:i,key:t,ref:n!==void 0?n:null,props:e}}function JA(i,t){return ug(i.type,t,i.props)}function hg(i){return typeof i=="object"&&i!==null&&i.$$typeof===og}function jA(i){var t={"=":"=0",":":"=2"};return"$"+i.replace(/[=:]/g,function(e){return t[e]})}var Rx=/\/+/g;function rg(i,t){return typeof i=="object"&&i!==null&&i.key!=null?jA(""+i.key):t.toString(36)}function $A(i){switch(i.status){case"fulfilled":return i.value;case"rejected":throw i.reason;default:switch(typeof i.status=="string"?i.then(ag,ag):(i.status="pending",i.then(function(t){i.status==="pending"&&(i.status="fulfilled",i.value=t)},function(t){i.status==="pending"&&(i.status="rejected",i.reason=t)})),i.status){case"fulfilled":return i.value;case"rejected":throw i.reason}}throw i}function Go(i,t,e,n,s){var r=typeof i;(r==="undefined"||r==="boolean")&&(i=null);var a=!1;if(i===null)a=!0;else switch(r){case"bigint":case"string":case"number":a=!0;break;case"object":switch(i.$$typeof){case og:case HA:a=!0;break;case Dx:return a=i._init,Go(a(i._payload),t,e,n,s)}}if(a)return s=s(i),a=n===""?"."+rg(i,0):n,Ax(s)?(e="",a!=null&&(e=a.replace(Rx,"$&/")+"/"),Go(s,t,e,"",function(c){return c})):s!=null&&(hg(s)&&(s=JA(s,e+(s.key==null||i&&i.key===s.key?"":(""+s.key).replace(Rx,"$&/")+"/")+a)),t.push(s)),1;a=0;var o=n===""?".":n+":";if(Ax(i))for(var l=0;l<i.length;l++)n=i[l],r=o+rg(n,l),a+=Go(n,t,e,r,s);else if(l=KA(i),typeof l=="function")for(i=l.call(i),l=0;!(n=i.next()).done;)n=n.value,r=o+rg(n,l++),a+=Go(n,t,e,r,s);else if(r==="object"){if(typeof i.then=="function")return Go($A(i),t,e,n,s);throw t=String(i),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function kh(i,t,e){if(i==null)return i;var n=[],s=0;return Go(i,n,"","",function(r){return t.call(e,r,s++)}),n}function tR(i){if(i._status===-1){var t=i._result;t=t(),t.then(function(e){(i._status===0||i._status===-1)&&(i._status=1,i._result=e)},function(e){(i._status===0||i._status===-1)&&(i._status=2,i._result=e)}),i._status===-1&&(i._status=0,i._result=t)}if(i._status===1)return i._result.default;throw i._result}var Cx=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)},eR={map:kh,forEach:function(i,t,e){kh(i,function(){t.apply(this,arguments)},e)},count:function(i){var t=0;return kh(i,function(){t++}),t},toArray:function(i){return kh(i,function(t){return t})||[]},only:function(i){if(!hg(i))throw Error("React.Children.only expected to receive a single React element child.");return i}};Wt.Activity=QA;Wt.Children=eR;Wt.Component=ko;Wt.Fragment=GA;Wt.Profiler=VA;Wt.PureComponent=lg;Wt.StrictMode=kA;Wt.Suspense=YA;Wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ae;Wt.__COMPILER_RUNTIME={__proto__:null,c:function(i){return Ae.H.useMemoCache(i)}};Wt.cache=function(i){return function(){return i.apply(null,arguments)}};Wt.cacheSignal=function(){return null};Wt.cloneElement=function(i,t,e){if(i==null)throw Error("The argument must be a React element, but you passed "+i+".");var n=Lx({},i.props),s=i.key;if(t!=null)for(r in t.key!==void 0&&(s=""+t.key),t)!Px.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(n[r]=t[r]);var r=arguments.length-2;if(r===1)n.children=e;else if(1<r){for(var a=Array(r),o=0;o<r;o++)a[o]=arguments[o+2];n.children=a}return ug(i.type,s,n)};Wt.createContext=function(i){return i={$$typeof:XA,_currentValue:i,_currentValue2:i,_threadCount:0,Provider:null,Consumer:null},i.Provider=i,i.Consumer={$$typeof:WA,_context:i},i};Wt.createElement=function(i,t,e){var n,s={},r=null;if(t!=null)for(n in t.key!==void 0&&(r=""+t.key),t)Px.call(t,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(s[n]=t[n]);var a=arguments.length-2;if(a===1)s.children=e;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];s.children=o}if(i&&i.defaultProps)for(n in a=i.defaultProps,a)s[n]===void 0&&(s[n]=a[n]);return ug(i,r,s)};Wt.createRef=function(){return{current:null}};Wt.forwardRef=function(i){return{$$typeof:qA,render:i}};Wt.isValidElement=hg;Wt.lazy=function(i){return{$$typeof:Dx,_payload:{_status:-1,_result:i},_init:tR}};Wt.memo=function(i,t){return{$$typeof:ZA,type:i,compare:t===void 0?null:t}};Wt.startTransition=function(i){var t=Ae.T,e={};Ae.T=e;try{var n=i(),s=Ae.S;s!==null&&s(e,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(ag,Cx)}catch(r){Cx(r)}finally{t!==null&&e.types!==null&&(t.types=e.types),Ae.T=t}};Wt.unstable_useCacheRefresh=function(){return Ae.H.useCacheRefresh()};Wt.use=function(i){return Ae.H.use(i)};Wt.useActionState=function(i,t,e){return Ae.H.useActionState(i,t,e)};Wt.useCallback=function(i,t){return Ae.H.useCallback(i,t)};Wt.useContext=function(i){return Ae.H.useContext(i)};Wt.useDebugValue=function(){};Wt.useDeferredValue=function(i,t){return Ae.H.useDeferredValue(i,t)};Wt.useEffect=function(i,t){return Ae.H.useEffect(i,t)};Wt.useEffectEvent=function(i){return Ae.H.useEffectEvent(i)};Wt.useId=function(){return Ae.H.useId()};Wt.useImperativeHandle=function(i,t,e){return Ae.H.useImperativeHandle(i,t,e)};Wt.useInsertionEffect=function(i,t){return Ae.H.useInsertionEffect(i,t)};Wt.useLayoutEffect=function(i,t){return Ae.H.useLayoutEffect(i,t)};Wt.useMemo=function(i,t){return Ae.H.useMemo(i,t)};Wt.useOptimistic=function(i,t){return Ae.H.useOptimistic(i,t)};Wt.useReducer=function(i,t,e){return Ae.H.useReducer(i,t,e)};Wt.useRef=function(i){return Ae.H.useRef(i)};Wt.useState=function(i){return Ae.H.useState(i)};Wt.useSyncExternalStore=function(i,t,e){return Ae.H.useSyncExternalStore(i,t,e)};Wt.useTransition=function(){return Ae.H.useTransition()};Wt.version="19.2.8"});var Cc=As((qI,zx)=>{"use strict";nt();zx.exports=Ix()});var Fx=As(tn=>{"use strict";nt();var iR=Cc();function Bx(i){var t="https://react.dev/errors/"+i;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+i+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Fr(){}var $i={d:{f:Fr,r:function(){throw Error(Bx(522))},D:Fr,C:Fr,L:Fr,m:Fr,X:Fr,S:Fr,M:Fr},p:0,findDOMNode:null},nR=Symbol.for("react.portal");function sR(i,t,e){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nR,key:n==null?null:""+n,children:i,containerInfo:t,implementation:e}}var Dc=iR.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Vh(i,t){if(i==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$i;tn.createPortal=function(i,t){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Bx(299));return sR(i,t,null,e)};tn.flushSync=function(i){var t=Dc.T,e=$i.p;try{if(Dc.T=null,$i.p=2,i)return i()}finally{Dc.T=t,$i.p=e,$i.d.f()}};tn.preconnect=function(i,t){typeof i=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,$i.d.C(i,t))};tn.prefetchDNS=function(i){typeof i=="string"&&$i.d.D(i)};tn.preinit=function(i,t){if(typeof i=="string"&&t&&typeof t.as=="string"){var e=t.as,n=Vh(e,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;e==="style"?$i.d.S(i,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:n,integrity:s,fetchPriority:r}):e==="script"&&$i.d.X(i,{crossOrigin:n,integrity:s,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};tn.preinitModule=function(i,t){if(typeof i=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var e=Vh(t.as,t.crossOrigin);$i.d.M(i,{crossOrigin:e,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&$i.d.M(i)};tn.preload=function(i,t){if(typeof i=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var e=t.as,n=Vh(e,t.crossOrigin);$i.d.L(i,e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};tn.preloadModule=function(i,t){if(typeof i=="string")if(t){var e=Vh(t.as,t.crossOrigin);$i.d.m(i,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:e,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else $i.d.m(i)};tn.requestFormReset=function(i){$i.d.r(i)};tn.unstable_batchedUpdates=function(i,t){return i(t)};tn.useFormState=function(i,t,e){return Dc.H.useFormState(i,t,e)};tn.useFormStatus=function(){return Dc.H.useHostTransitionStatus()};tn.version="19.2.8"});var kx=As((KI,Gx)=>{"use strict";nt();function Hx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hx)}catch(i){console.error(i)}}Hx(),Gx.exports=Fx()});var tT=As(md=>{"use strict";nt();var di=Ex(),pb=Cc(),rR=kx();function tt(i){var t="https://react.dev/errors/"+i;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+i+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function mb(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function gu(i){var t=i,e=i;if(i.alternate)for(;t.return;)t=t.return;else{i=t;do t=i,(t.flags&4098)!==0&&(e=t.return),i=t.return;while(i)}return t.tag===3?e:null}function gb(i){if(i.tag===13){var t=i.memoizedState;if(t===null&&(i=i.alternate,i!==null&&(t=i.memoizedState)),t!==null)return t.dehydrated}return null}function _b(i){if(i.tag===31){var t=i.memoizedState;if(t===null&&(i=i.alternate,i!==null&&(t=i.memoizedState)),t!==null)return t.dehydrated}return null}function Vx(i){if(gu(i)!==i)throw Error(tt(188))}function aR(i){var t=i.alternate;if(!t){if(t=gu(i),t===null)throw Error(tt(188));return t!==i?null:i}for(var e=i,n=t;;){var s=e.return;if(s===null)break;var r=s.alternate;if(r===null){if(n=s.return,n!==null){e=n;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===e)return Vx(s),i;if(r===n)return Vx(s),t;r=r.sibling}throw Error(tt(188))}if(e.return!==n.return)e=s,n=r;else{for(var a=!1,o=s.child;o;){if(o===e){a=!0,e=s,n=r;break}if(o===n){a=!0,n=s,e=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===e){a=!0,e=r,n=s;break}if(o===n){a=!0,n=r,e=s;break}o=o.sibling}if(!a)throw Error(tt(189))}}if(e.alternate!==n)throw Error(tt(190))}if(e.tag!==3)throw Error(tt(188));return e.stateNode.current===e?i:t}function vb(i){var t=i.tag;if(t===5||t===26||t===27||t===6)return i;for(i=i.child;i!==null;){if(t=vb(i),t!==null)return t;i=i.sibling}return null}var De=Object.assign,oR=Symbol.for("react.element"),Wh=Symbol.for("react.transitional.element"),Bc=Symbol.for("react.portal"),Zo=Symbol.for("react.fragment"),yb=Symbol.for("react.strict_mode"),Xg=Symbol.for("react.profiler"),xb=Symbol.for("react.consumer"),er=Symbol.for("react.context"),H0=Symbol.for("react.forward_ref"),qg=Symbol.for("react.suspense"),Yg=Symbol.for("react.suspense_list"),G0=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),Zg=Symbol.for("react.activity"),lR=Symbol.for("react.memo_cache_sentinel"),Wx=Symbol.iterator;function Nc(i){return i===null||typeof i!="object"?null:(i=Wx&&i[Wx]||i["@@iterator"],typeof i=="function"?i:null)}var cR=Symbol.for("react.client.reference");function Qg(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===cR?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case Zo:return"Fragment";case Xg:return"Profiler";case yb:return"StrictMode";case qg:return"Suspense";case Yg:return"SuspenseList";case Zg:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case Bc:return"Portal";case er:return i.displayName||"Context";case xb:return(i._context.displayName||"Context")+".Consumer";case H0:var t=i.render;return i=i.displayName,i||(i=t.displayName||t.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case G0:return t=i.displayName||null,t!==null?t:Qg(i.type)||"Memo";case Hr:t=i._payload,i=i._init;try{return Qg(i(t))}catch{}}return null}var Fc=Array.isArray,Pt=pb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=rR.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Qa={pending:!1,data:null,method:null,action:null},Kg=[],Qo=-1;function Os(i){return{current:i}}function Ei(i){0>Qo||(i.current=Kg[Qo],Kg[Qo]=null,Qo--)}function we(i,t){Qo++,Kg[Qo]=i.current,i.current=t}var Ls=Os(null),iu=Os(null),Jr=Os(null),Tf=Os(null);function Ef(i,t){switch(we(Jr,t),we(iu,i),we(Ls,null),t.nodeType){case 9:case 11:i=(i=t.documentElement)&&(i=i.namespaceURI)?JS(i):0;break;default:if(i=t.tagName,t=t.namespaceURI)t=JS(t),i=H1(t,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}Ei(Ls),we(Ls,i)}function dl(){Ei(Ls),Ei(iu),Ei(Jr)}function Jg(i){i.memoizedState!==null&&we(Tf,i);var t=Ls.current,e=H1(t,i.type);t!==e&&(we(iu,i),we(Ls,e))}function wf(i){iu.current===i&&(Ei(Ls),Ei(iu)),Tf.current===i&&(Ei(Tf),du._currentValue=Qa)}var fg,Xx;function Xa(i){if(fg===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);fg=t&&t[1]||"",Xx=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fg+i+Xx}var dg=!1;function pg(i,t){if(!i||dg)return"";dg=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(d){var h=d}Reflect.construct(i,[],f)}else{try{f.call()}catch(d){h=d}i.call(f.prototype)}}else{try{throw Error()}catch(d){h=d}(f=i())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(d){if(d&&h&&typeof d.stack=="string")return[d.stack,h.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),a=r[0],o=r[1];if(a&&o){var l=a.split(`
`),c=o.split(`
`);for(s=n=0;n<l.length&&!l[n].includes("DetermineComponentFrameRoot");)n++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(n===l.length||s===c.length)for(n=l.length-1,s=c.length-1;1<=n&&0<=s&&l[n]!==c[s];)s--;for(;1<=n&&0<=s;n--,s--)if(l[n]!==c[s]){if(n!==1||s!==1)do if(n--,s--,0>s||l[n]!==c[s]){var u=`
`+l[n].replace(" at new "," at ");return i.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",i.displayName)),u}while(1<=n&&0<=s);break}}}finally{dg=!1,Error.prepareStackTrace=e}return(e=i?i.displayName||i.name:"")?Xa(e):""}function uR(i,t){switch(i.tag){case 26:case 27:case 5:return Xa(i.type);case 16:return Xa("Lazy");case 13:return i.child!==t&&t!==null?Xa("Suspense Fallback"):Xa("Suspense");case 19:return Xa("SuspenseList");case 0:case 15:return pg(i.type,!1);case 11:return pg(i.type.render,!1);case 1:return pg(i.type,!0);case 31:return Xa("Activity");default:return""}}function qx(i){try{var t="",e=null;do t+=uR(i,e),e=i,i=i.return;while(i);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var jg=Object.prototype.hasOwnProperty,k0=di.unstable_scheduleCallback,mg=di.unstable_cancelCallback,hR=di.unstable_shouldYield,fR=di.unstable_requestPaint,Rn=di.unstable_now,dR=di.unstable_getCurrentPriorityLevel,Sb=di.unstable_ImmediatePriority,bb=di.unstable_UserBlockingPriority,Af=di.unstable_NormalPriority,pR=di.unstable_LowPriority,Mb=di.unstable_IdlePriority,mR=di.log,gR=di.unstable_setDisableYieldValue,_u=null,Cn=null;function qr(i){if(typeof mR=="function"&&gR(i),Cn&&typeof Cn.setStrictMode=="function")try{Cn.setStrictMode(_u,i)}catch{}}var Dn=Math.clz32?Math.clz32:yR,_R=Math.log,vR=Math.LN2;function yR(i){return i>>>=0,i===0?32:31-(_R(i)/vR|0)|0}var Xh=256,qh=262144,Yh=4194304;function qa(i){var t=i&42;if(t!==0)return t;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return i&261888;case 262144:case 524288:case 1048576:case 2097152:return i&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function $f(i,t,e){var n=i.pendingLanes;if(n===0)return 0;var s=0,r=i.suspendedLanes,a=i.pingedLanes;i=i.warmLanes;var o=n&134217727;return o!==0?(n=o&~r,n!==0?s=qa(n):(a&=o,a!==0?s=qa(a):e||(e=o&~i,e!==0&&(s=qa(e))))):(o=n&~r,o!==0?s=qa(o):a!==0?s=qa(a):e||(e=n&~i,e!==0&&(s=qa(e)))),s===0?0:t!==0&&t!==s&&(t&r)===0&&(r=s&-s,e=t&-t,r>=e||r===32&&(e&4194048)!==0)?t:s}function vu(i,t){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&t)===0}function xR(i,t){switch(i){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tb(){var i=Yh;return Yh<<=1,(Yh&62914560)===0&&(Yh=4194304),i}function gg(i){for(var t=[],e=0;31>e;e++)t.push(i);return t}function yu(i,t){i.pendingLanes|=t,t!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function SR(i,t,e,n,s,r){var a=i.pendingLanes;i.pendingLanes=e,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=e,i.entangledLanes&=e,i.errorRecoveryDisabledLanes&=e,i.shellSuspendCounter=0;var o=i.entanglements,l=i.expirationTimes,c=i.hiddenUpdates;for(e=a&~e;0<e;){var u=31-Dn(e),f=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var d=h[u];d!==null&&(d.lane&=-536870913)}e&=~f}n!==0&&Eb(i,n,0),r!==0&&s===0&&i.tag!==0&&(i.suspendedLanes|=r&~(a&~t))}function Eb(i,t,e){i.pendingLanes|=t,i.suspendedLanes&=~t;var n=31-Dn(t);i.entangledLanes|=t,i.entanglements[n]=i.entanglements[n]|1073741824|e&261930}function wb(i,t){var e=i.entangledLanes|=t;for(i=i.entanglements;e;){var n=31-Dn(e),s=1<<n;s&t|i[n]&t&&(i[n]|=t),e&=~s}}function Ab(i,t){var e=t&-t;return e=(e&42)!==0?1:V0(e),(e&(i.suspendedLanes|t))!==0?0:e}function V0(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function W0(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Rb(){var i=ue.p;return i!==0?i:(i=window.event,i===void 0?32:J1(i.type))}function Yx(i,t){var e=ue.p;try{return ue.p=i,t()}finally{ue.p=e}}var ua=Math.random().toString(36).slice(2),Oi="__reactFiber$"+ua,dn="__reactProps$"+ua,Tl="__reactContainer$"+ua,$g="__reactEvents$"+ua,bR="__reactListeners$"+ua,MR="__reactHandles$"+ua,Zx="__reactResources$"+ua,xu="__reactMarker$"+ua;function X0(i){delete i[Oi],delete i[dn],delete i[$g],delete i[bR],delete i[MR]}function Ko(i){var t=i[Oi];if(t)return t;for(var e=i.parentNode;e;){if(t=e[Tl]||e[Oi]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(i=ib(i);i!==null;){if(e=i[Oi])return e;i=ib(i)}return t}i=e,e=i.parentNode}return null}function El(i){if(i=i[Oi]||i[Tl]){var t=i.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return i}return null}function Hc(i){var t=i.tag;if(t===5||t===26||t===27||t===6)return i.stateNode;throw Error(tt(33))}function al(i){var t=i[Zx];return t||(t=i[Zx]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ti(i){i[xu]=!0}var Cb=new Set,Db={};function ro(i,t){pl(i,t),pl(i+"Capture",t)}function pl(i,t){for(Db[i]=t,i=0;i<t.length;i++)Cb.add(t[i])}var TR=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qx={},Kx={};function ER(i){return jg.call(Kx,i)?!0:jg.call(Qx,i)?!1:TR.test(i)?Kx[i]=!0:(Qx[i]=!0,!1)}function cf(i,t,e){if(ER(t))if(e===null)i.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":i.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){i.removeAttribute(t);return}}i.setAttribute(t,""+e)}}function Zh(i,t,e){if(e===null)i.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(t);return}i.setAttribute(t,""+e)}}function Zs(i,t,e,n){if(n===null)i.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(e);return}i.setAttributeNS(t,e,""+n)}}function $n(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Nb(i){var t=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wR(i,t,e){var n=Object.getOwnPropertyDescriptor(i.constructor.prototype,t);if(!i.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,r=n.set;return Object.defineProperty(i,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){e=""+a,r.call(this,a)}}),Object.defineProperty(i,t,{enumerable:n.enumerable}),{getValue:function(){return e},setValue:function(a){e=""+a},stopTracking:function(){i._valueTracker=null,delete i[t]}}}}function t0(i){if(!i._valueTracker){var t=Nb(i)?"checked":"value";i._valueTracker=wR(i,t,""+i[t])}}function Lb(i){if(!i)return!1;var t=i._valueTracker;if(!t)return!0;var e=t.getValue(),n="";return i&&(n=Nb(i)?i.checked?"true":"false":i.value),i=n,i!==e?(t.setValue(i),!0):!1}function Rf(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var AR=/[\n"\\]/g;function is(i){return i.replace(AR,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function e0(i,t,e,n,s,r,a,o){i.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?i.type=a:i.removeAttribute("type"),t!=null?a==="number"?(t===0&&i.value===""||i.value!=t)&&(i.value=""+$n(t)):i.value!==""+$n(t)&&(i.value=""+$n(t)):a!=="submit"&&a!=="reset"||i.removeAttribute("value"),t!=null?i0(i,a,$n(t)):e!=null?i0(i,a,$n(e)):n!=null&&i.removeAttribute("value"),s==null&&r!=null&&(i.defaultChecked=!!r),s!=null&&(i.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?i.name=""+$n(o):i.removeAttribute("name")}function Ob(i,t,e,n,s,r,a,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(i.type=r),t!=null||e!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){t0(i);return}e=e!=null?""+$n(e):"",t=t!=null?""+$n(t):e,o||t===i.value||(i.value=t),i.defaultValue=t}n=n??s,n=typeof n!="function"&&typeof n!="symbol"&&!!n,i.checked=o?i.checked:!!n,i.defaultChecked=!!n,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(i.name=a),t0(i)}function i0(i,t,e){t==="number"&&Rf(i.ownerDocument)===i||i.defaultValue===""+e||(i.defaultValue=""+e)}function ol(i,t,e,n){if(i=i.options,t){t={};for(var s=0;s<e.length;s++)t["$"+e[s]]=!0;for(e=0;e<i.length;e++)s=t.hasOwnProperty("$"+i[e].value),i[e].selected!==s&&(i[e].selected=s),s&&n&&(i[e].defaultSelected=!0)}else{for(e=""+$n(e),t=null,s=0;s<i.length;s++){if(i[s].value===e){i[s].selected=!0,n&&(i[s].defaultSelected=!0);return}t!==null||i[s].disabled||(t=i[s])}t!==null&&(t.selected=!0)}}function Ub(i,t,e){if(t!=null&&(t=""+$n(t),t!==i.value&&(i.value=t),e==null)){i.defaultValue!==t&&(i.defaultValue=t);return}i.defaultValue=e!=null?""+$n(e):""}function Pb(i,t,e,n){if(t==null){if(n!=null){if(e!=null)throw Error(tt(92));if(Fc(n)){if(1<n.length)throw Error(tt(93));n=n[0]}e=n}e==null&&(e=""),t=e}e=$n(t),i.defaultValue=e,n=i.textContent,n===e&&n!==""&&n!==null&&(i.value=n),t0(i)}function ml(i,t){if(t){var e=i.firstChild;if(e&&e===i.lastChild&&e.nodeType===3){e.nodeValue=t;return}}i.textContent=t}var RR=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jx(i,t,e){var n=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?n?i.setProperty(t,""):t==="float"?i.cssFloat="":i[t]="":n?i.setProperty(t,e):typeof e!="number"||e===0||RR.has(t)?t==="float"?i.cssFloat=e:i[t]=(""+e).trim():i[t]=e+"px"}function Ib(i,t,e){if(t!=null&&typeof t!="object")throw Error(tt(62));if(i=i.style,e!=null){for(var n in e)!e.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?i.setProperty(n,""):n==="float"?i.cssFloat="":i[n]="");for(var s in t)n=t[s],t.hasOwnProperty(s)&&e[s]!==n&&Jx(i,s,n)}else for(var r in t)t.hasOwnProperty(r)&&Jx(i,r,t[r])}function q0(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var CR=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),DR=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function uf(i){return DR.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}function ir(){}var n0=null;function Y0(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Jo=null,ll=null;function jx(i){var t=El(i);if(t&&(i=t.stateNode)){var e=i[dn]||null;t:switch(i=t.stateNode,t.type){case"input":if(e0(i,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=i;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+is(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var n=e[t];if(n!==i&&n.form===i.form){var s=n[dn]||null;if(!s)throw Error(tt(90));e0(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<e.length;t++)n=e[t],n.form===i.form&&Lb(n)}break t;case"textarea":Ub(i,e.value,e.defaultValue);break t;case"select":t=e.value,t!=null&&ol(i,!!e.multiple,t,!1)}}}var _g=!1;function zb(i,t,e){if(_g)return i(t,e);_g=!0;try{var n=i(t);return n}finally{if(_g=!1,(Jo!==null||ll!==null)&&(hd(),Jo&&(t=Jo,i=ll,ll=Jo=null,jx(t),i)))for(t=0;t<i.length;t++)jx(i[t])}}function nu(i,t){var e=i.stateNode;if(e===null)return null;var n=e[dn]||null;if(n===null)return null;e=n[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(i=i.type,n=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!n;break t;default:i=!1}if(i)return null;if(e&&typeof e!="function")throw Error(tt(231,t,typeof e));return e}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),s0=!1;if(or)try{Vo={},Object.defineProperty(Vo,"passive",{get:function(){s0=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{s0=!1}var Vo,Yr=null,Z0=null,hf=null;function Bb(){if(hf)return hf;var i,t=Z0,e=t.length,n,s="value"in Yr?Yr.value:Yr.textContent,r=s.length;for(i=0;i<e&&t[i]===s[i];i++);var a=e-i;for(n=1;n<=a&&t[e-n]===s[r-n];n++);return hf=s.slice(i,1<n?1-n:void 0)}function ff(i){var t=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&t===13&&(i=13)):i=t,i===10&&(i=13),32<=i||i===13?i:0}function Qh(){return!0}function $x(){return!1}function pn(i){function t(e,n,s,r,a){this._reactName=e,this._targetInst=s,this.type=n,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in i)i.hasOwnProperty(o)&&(e=i[o],this[o]=e?e(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Qh:$x,this.isPropagationStopped=$x,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Qh)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Qh)},persist:function(){},isPersistent:Qh}),t}var ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=pn(ao),Su=De({},ao,{view:0,detail:0}),NR=pn(Su),vg,yg,Lc,ed=De({},Su,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Q0,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Lc&&(Lc&&i.type==="mousemove"?(vg=i.screenX-Lc.screenX,yg=i.screenY-Lc.screenY):yg=vg=0,Lc=i),vg)},movementY:function(i){return"movementY"in i?i.movementY:yg}}),tS=pn(ed),LR=De({},ed,{dataTransfer:0}),OR=pn(LR),UR=De({},Su,{relatedTarget:0}),xg=pn(UR),PR=De({},ao,{animationName:0,elapsedTime:0,pseudoElement:0}),IR=pn(PR),zR=De({},ao,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),BR=pn(zR),FR=De({},ao,{data:0}),eS=pn(FR),HR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VR(i){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(i):(i=kR[i])?!!t[i]:!1}function Q0(){return VR}var WR=De({},Su,{key:function(i){if(i.key){var t=HR[i.key]||i.key;if(t!=="Unidentified")return t}return i.type==="keypress"?(i=ff(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?GR[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Q0,charCode:function(i){return i.type==="keypress"?ff(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ff(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),XR=pn(WR),qR=De({},ed,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iS=pn(qR),YR=De({},Su,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Q0}),ZR=pn(YR),QR=De({},ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),KR=pn(QR),JR=De({},ed,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),jR=pn(JR),$R=De({},ao,{newState:0,oldState:0}),tC=pn($R),eC=[9,13,27,32],K0=or&&"CompositionEvent"in window,Vc=null;or&&"documentMode"in document&&(Vc=document.documentMode);var iC=or&&"TextEvent"in window&&!Vc,Fb=or&&(!K0||Vc&&8<Vc&&11>=Vc),nS=" ",sS=!1;function Hb(i,t){switch(i){case"keyup":return eC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gb(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var jo=!1;function nC(i,t){switch(i){case"compositionend":return Gb(t);case"keypress":return t.which!==32?null:(sS=!0,nS);case"textInput":return i=t.data,i===nS&&sS?null:i;default:return null}}function sC(i,t){if(jo)return i==="compositionend"||!K0&&Hb(i,t)?(i=Bb(),hf=Z0=Yr=null,jo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fb&&t.locale!=="ko"?null:t.data;default:return null}}var rC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rS(i){var t=i&&i.nodeName&&i.nodeName.toLowerCase();return t==="input"?!!rC[i.type]:t==="textarea"}function kb(i,t,e,n){Jo?ll?ll.push(n):ll=[n]:Jo=n,t=qf(t,"onChange"),0<t.length&&(e=new td("onChange","change",null,e,n),i.push({event:e,listeners:t}))}var Wc=null,su=null;function aC(i){z1(i,0)}function id(i){var t=Hc(i);if(Lb(t))return i}function aS(i,t){if(i==="change")return t}var Vb=!1;or&&(or?(Jh="oninput"in document,Jh||(Sg=document.createElement("div"),Sg.setAttribute("oninput","return;"),Jh=typeof Sg.oninput=="function"),Kh=Jh):Kh=!1,Vb=Kh&&(!document.documentMode||9<document.documentMode));var Kh,Jh,Sg;function oS(){Wc&&(Wc.detachEvent("onpropertychange",Wb),su=Wc=null)}function Wb(i){if(i.propertyName==="value"&&id(su)){var t=[];kb(t,su,i,Y0(i)),zb(aC,t)}}function oC(i,t,e){i==="focusin"?(oS(),Wc=t,su=e,Wc.attachEvent("onpropertychange",Wb)):i==="focusout"&&oS()}function lC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return id(su)}function cC(i,t){if(i==="click")return id(t)}function uC(i,t){if(i==="input"||i==="change")return id(t)}function hC(i,t){return i===t&&(i!==0||1/i===1/t)||i!==i&&t!==t}var Ln=typeof Object.is=="function"?Object.is:hC;function ru(i,t){if(Ln(i,t))return!0;if(typeof i!="object"||i===null||typeof t!="object"||t===null)return!1;var e=Object.keys(i),n=Object.keys(t);if(e.length!==n.length)return!1;for(n=0;n<e.length;n++){var s=e[n];if(!jg.call(t,s)||!Ln(i[s],t[s]))return!1}return!0}function lS(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function cS(i,t){var e=lS(i);i=0;for(var n;e;){if(e.nodeType===3){if(n=i+e.textContent.length,i<=t&&n>=t)return{node:e,offset:t-i};i=n}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=lS(e)}}function Xb(i,t){return i&&t?i===t?!0:i&&i.nodeType===3?!1:t&&t.nodeType===3?Xb(i,t.parentNode):"contains"in i?i.contains(t):i.compareDocumentPosition?!!(i.compareDocumentPosition(t)&16):!1:!1}function qb(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var t=Rf(i.document);t instanceof i.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)i=t.contentWindow;else break;t=Rf(i.document)}return t}function J0(i){var t=i&&i.nodeName&&i.nodeName.toLowerCase();return t&&(t==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||t==="textarea"||i.contentEditable==="true")}var fC=or&&"documentMode"in document&&11>=document.documentMode,$o=null,r0=null,Xc=null,a0=!1;function uS(i,t,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;a0||$o==null||$o!==Rf(n)||(n=$o,"selectionStart"in n&&J0(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Xc&&ru(Xc,n)||(Xc=n,n=qf(r0,"onSelect"),0<n.length&&(t=new td("onSelect","select",null,t,e),i.push({event:t,listeners:n}),t.target=$o)))}function Wa(i,t){var e={};return e[i.toLowerCase()]=t.toLowerCase(),e["Webkit"+i]="webkit"+t,e["Moz"+i]="moz"+t,e}var tl={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},bg={},Yb={};or&&(Yb=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function oo(i){if(bg[i])return bg[i];if(!tl[i])return i;var t=tl[i],e;for(e in t)if(t.hasOwnProperty(e)&&e in Yb)return bg[i]=t[e];return i}var Zb=oo("animationend"),Qb=oo("animationiteration"),Kb=oo("animationstart"),dC=oo("transitionrun"),pC=oo("transitionstart"),mC=oo("transitioncancel"),Jb=oo("transitionend"),jb=new Map,o0="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");o0.push("scrollEnd");function _s(i,t){jb.set(i,t),ro(t,[i])}var Cf=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)},jn=[],el=0,j0=0;function nd(){for(var i=el,t=j0=el=0;t<i;){var e=jn[t];jn[t++]=null;var n=jn[t];jn[t++]=null;var s=jn[t];jn[t++]=null;var r=jn[t];if(jn[t++]=null,n!==null&&s!==null){var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}r!==0&&$b(e,s,r)}}function sd(i,t,e,n){jn[el++]=i,jn[el++]=t,jn[el++]=e,jn[el++]=n,j0|=n,i.lanes|=n,i=i.alternate,i!==null&&(i.lanes|=n)}function $0(i,t,e,n){return sd(i,t,e,n),Df(i)}function lo(i,t){return sd(i,null,null,t),Df(i)}function $b(i,t,e){i.lanes|=e;var n=i.alternate;n!==null&&(n.lanes|=e);for(var s=!1,r=i.return;r!==null;)r.childLanes|=e,n=r.alternate,n!==null&&(n.childLanes|=e),r.tag===22&&(i=r.stateNode,i===null||i._visibility&1||(s=!0)),i=r,r=r.return;return i.tag===3?(r=i.stateNode,s&&t!==null&&(s=31-Dn(e),i=r.hiddenUpdates,n=i[s],n===null?i[s]=[t]:n.push(t),t.lane=e|536870912),r):null}function Df(i){if(50<tu)throw tu=0,R0=null,Error(tt(185));for(var t=i.return;t!==null;)i=t,t=i.return;return i.tag===3?i.stateNode:null}var il={};function gC(i,t,e,n){this.tag=i,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(i,t,e,n){return new gC(i,t,e,n)}function t_(i){return i=i.prototype,!(!i||!i.isReactComponent)}function sr(i,t){var e=i.alternate;return e===null?(e=wn(i.tag,t,i.key,i.mode),e.elementType=i.elementType,e.type=i.type,e.stateNode=i.stateNode,e.alternate=i,i.alternate=e):(e.pendingProps=t,e.type=i.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=i.flags&65011712,e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=i.sibling,e.index=i.index,e.ref=i.ref,e.refCleanup=i.refCleanup,e}function tM(i,t){i.flags&=65011714;var e=i.alternate;return e===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,i.type=e.type,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i}function df(i,t,e,n,s,r){var a=0;if(n=i,typeof i=="function")t_(i)&&(a=1);else if(typeof i=="string")a=y2(i,e,Ls.current)?26:i==="html"||i==="head"||i==="body"?27:5;else t:switch(i){case Zg:return i=wn(31,e,t,s),i.elementType=Zg,i.lanes=r,i;case Zo:return Ka(e.children,s,r,t);case yb:a=8,s|=24;break;case Xg:return i=wn(12,e,t,s|2),i.elementType=Xg,i.lanes=r,i;case qg:return i=wn(13,e,t,s),i.elementType=qg,i.lanes=r,i;case Yg:return i=wn(19,e,t,s),i.elementType=Yg,i.lanes=r,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case er:a=10;break t;case xb:a=9;break t;case H0:a=11;break t;case G0:a=14;break t;case Hr:a=16,n=null;break t}a=29,e=Error(tt(130,i===null?"null":typeof i,"")),n=null}return t=wn(a,e,t,s),t.elementType=i,t.type=n,t.lanes=r,t}function Ka(i,t,e,n){return i=wn(7,i,n,t),i.lanes=e,i}function Mg(i,t,e){return i=wn(6,i,null,t),i.lanes=e,i}function eM(i){var t=wn(18,null,null,0);return t.stateNode=i,t}function Tg(i,t,e){return t=wn(4,i.children!==null?i.children:[],i.key,t),t.lanes=e,t.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},t}var hS=new WeakMap;function ns(i,t){if(typeof i=="object"&&i!==null){var e=hS.get(i);return e!==void 0?e:(t={value:i,source:t,stack:qx(t)},hS.set(i,t),t)}return{value:i,source:t,stack:qx(t)}}var nl=[],sl=0,Nf=null,au=0,ts=[],es=0,aa=null,Cs=1,Ds="";function $s(i,t){nl[sl++]=au,nl[sl++]=Nf,Nf=i,au=t}function iM(i,t,e){ts[es++]=Cs,ts[es++]=Ds,ts[es++]=aa,aa=i;var n=Cs;i=Ds;var s=32-Dn(n)-1;n&=~(1<<s),e+=1;var r=32-Dn(t)+s;if(30<r){var a=s-s%5;r=(n&(1<<a)-1).toString(32),n>>=a,s-=a,Cs=1<<32-Dn(t)+s|e<<s|n,Ds=r+i}else Cs=1<<r|e<<s|n,Ds=i}function e_(i){i.return!==null&&($s(i,1),iM(i,1,0))}function i_(i){for(;i===Nf;)Nf=nl[--sl],nl[sl]=null,au=nl[--sl],nl[sl]=null;for(;i===aa;)aa=ts[--es],ts[es]=null,Ds=ts[--es],ts[es]=null,Cs=ts[--es],ts[es]=null}function nM(i,t){ts[es++]=Cs,ts[es++]=Ds,ts[es++]=aa,Cs=t.id,Ds=t.overflow,aa=i}var Ui=null,Ce=null,ie=!1,jr=null,ss=!1,l0=Error(tt(519));function oa(i){var t=Error(tt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ou(ns(t,i)),l0}function fS(i){var t=i.stateNode,e=i.type,n=i.memoizedProps;switch(t[Oi]=i,t[dn]=n,e){case"dialog":Kt("cancel",t),Kt("close",t);break;case"iframe":case"object":case"embed":Kt("load",t);break;case"video":case"audio":for(e=0;e<hu.length;e++)Kt(hu[e],t);break;case"source":Kt("error",t);break;case"img":case"image":case"link":Kt("error",t),Kt("load",t);break;case"details":Kt("toggle",t);break;case"input":Kt("invalid",t),Ob(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Kt("invalid",t);break;case"textarea":Kt("invalid",t),Pb(t,n.value,n.defaultValue,n.children)}e=n.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||n.suppressHydrationWarning===!0||F1(t.textContent,e)?(n.popover!=null&&(Kt("beforetoggle",t),Kt("toggle",t)),n.onScroll!=null&&Kt("scroll",t),n.onScrollEnd!=null&&Kt("scrollend",t),n.onClick!=null&&(t.onclick=ir),t=!0):t=!1,t||oa(i,!0)}function dS(i){for(Ui=i.return;Ui;)switch(Ui.tag){case 5:case 31:case 13:ss=!1;return;case 27:case 3:ss=!0;return;default:Ui=Ui.return}}function Wo(i){if(i!==Ui)return!1;if(!ie)return dS(i),ie=!0,!1;var t=i.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=i.type,e=!(e!=="form"&&e!=="button")||O0(i.type,i.memoizedProps)),e=!e),e&&Ce&&oa(i),dS(i),t===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(tt(317));Ce=eb(i)}else if(t===31){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(tt(317));Ce=eb(i)}else t===27?(t=Ce,ha(i.type)?(i=z0,z0=null,Ce=i):Ce=t):Ce=Ui?as(i.stateNode.nextSibling):null;return!0}function to(){Ce=Ui=null,ie=!1}function Eg(){var i=jr;return i!==null&&(hn===null?hn=i:hn.push.apply(hn,i),jr=null),i}function ou(i){jr===null?jr=[i]:jr.push(i)}var c0=Os(null),co=null,nr=null;function kr(i,t,e){we(c0,t._currentValue),t._currentValue=e}function rr(i){i._currentValue=c0.current,Ei(c0)}function u0(i,t,e){for(;i!==null;){var n=i.alternate;if((i.childLanes&t)!==t?(i.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),i===e)break;i=i.return}}function h0(i,t,e,n){var s=i.child;for(s!==null&&(s.return=i);s!==null;){var r=s.dependencies;if(r!==null){var a=s.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=e,o=r.alternate,o!==null&&(o.lanes|=e),u0(r.return,e,i),n||(a=null);break t}r=o.next}}else if(s.tag===18){if(a=s.return,a===null)throw Error(tt(341));a.lanes|=e,r=a.alternate,r!==null&&(r.lanes|=e),u0(a,e,i),a=null}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===i){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}}function wl(i,t,e,n){i=null;for(var s=t,r=!1;s!==null;){if(!r){if((s.flags&524288)!==0)r=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var a=s.alternate;if(a===null)throw Error(tt(387));if(a=a.memoizedProps,a!==null){var o=s.type;Ln(s.pendingProps.value,a.value)||(i!==null?i.push(o):i=[o])}}else if(s===Tf.current){if(a=s.alternate,a===null)throw Error(tt(387));a.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(i!==null?i.push(du):i=[du])}s=s.return}i!==null&&h0(t,i,e,n),t.flags|=262144}function Lf(i){for(i=i.firstContext;i!==null;){if(!Ln(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function eo(i){co=i,nr=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Pi(i){return sM(co,i)}function jh(i,t){return co===null&&eo(i),sM(i,t)}function sM(i,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},nr===null){if(i===null)throw Error(tt(308));nr=t,i.dependencies={lanes:0,firstContext:t},i.flags|=524288}else nr=nr.next=t;return e}var _C=typeof AbortController<"u"?AbortController:function(){var i=[],t=this.signal={aborted:!1,addEventListener:function(e,n){i.push(n)}};this.abort=function(){t.aborted=!0,i.forEach(function(e){return e()})}},vC=di.unstable_scheduleCallback,yC=di.unstable_NormalPriority,si={$$typeof:er,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function n_(){return{controller:new _C,data:new Map,refCount:0}}function bu(i){i.refCount--,i.refCount===0&&vC(yC,function(){i.controller.abort()})}var qc=null,f0=0,gl=0,cl=null;function xC(i,t){if(qc===null){var e=qc=[];f0=0,gl=R_(),cl={status:"pending",value:void 0,then:function(n){e.push(n)}}}return f0++,t.then(pS,pS),t}function pS(){if(--f0===0&&qc!==null){cl!==null&&(cl.status="fulfilled");var i=qc;qc=null,gl=0,cl=null;for(var t=0;t<i.length;t++)(0,i[t])()}}function SC(i,t){var e=[],n={status:"pending",value:null,reason:null,then:function(s){e.push(s)}};return i.then(function(){n.status="fulfilled",n.value=t;for(var s=0;s<e.length;s++)(0,e[s])(t)},function(s){for(n.status="rejected",n.reason=s,s=0;s<e.length;s++)(0,e[s])(void 0)}),n}var mS=Pt.S;Pt.S=function(i,t){v1=Rn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&xC(i,t),mS!==null&&mS(i,t)};var Ja=Os(null);function s_(){var i=Ja.current;return i!==null?i:be.pooledCache}function pf(i,t){t===null?we(Ja,Ja.current):we(Ja,t.pool)}function rM(){var i=s_();return i===null?null:{parent:si._currentValue,pool:i}}var Al=Error(tt(460)),r_=Error(tt(474)),rd=Error(tt(542)),Of={then:function(){}};function gS(i){return i=i.status,i==="fulfilled"||i==="rejected"}function aM(i,t,e){switch(e=i[e],e===void 0?i.push(t):e!==t&&(t.then(ir,ir),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw i=t.reason,vS(i),i;default:if(typeof t.status=="string")t.then(ir,ir);else{if(i=be,i!==null&&100<i.shellSuspendCounter)throw Error(tt(482));i=t,i.status="pending",i.then(function(n){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=n}},function(n){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw i=t.reason,vS(i),i}throw ja=t,Al}}function Ya(i){try{var t=i._init;return t(i._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(ja=e,Al):e}}var ja=null;function _S(){if(ja===null)throw Error(tt(459));var i=ja;return ja=null,i}function vS(i){if(i===Al||i===rd)throw Error(tt(483))}var ul=null,lu=0;function $h(i){var t=lu;return lu+=1,ul===null&&(ul=[]),aM(ul,i,t)}function Oc(i,t){t=t.props.ref,i.ref=t!==void 0?t:null}function tf(i,t){throw t.$$typeof===oR?Error(tt(525)):(i=Object.prototype.toString.call(t),Error(tt(31,i==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":i)))}function oM(i){function t(p,g){if(i){var x=p.deletions;x===null?(p.deletions=[g],p.flags|=16):x.push(g)}}function e(p,g){if(!i)return null;for(;g!==null;)t(p,g),g=g.sibling;return null}function n(p){for(var g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function s(p,g){return p=sr(p,g),p.index=0,p.sibling=null,p}function r(p,g,x){return p.index=x,i?(x=p.alternate,x!==null?(x=x.index,x<g?(p.flags|=67108866,g):x):(p.flags|=67108866,g)):(p.flags|=1048576,g)}function a(p){return i&&p.alternate===null&&(p.flags|=67108866),p}function o(p,g,x,S){return g===null||g.tag!==6?(g=Mg(x,p.mode,S),g.return=p,g):(g=s(g,x),g.return=p,g)}function l(p,g,x,S){var M=x.type;return M===Zo?u(p,g,x.props.children,S,x.key):g!==null&&(g.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Hr&&Ya(M)===g.type)?(g=s(g,x.props),Oc(g,x),g.return=p,g):(g=df(x.type,x.key,x.props,null,p.mode,S),Oc(g,x),g.return=p,g)}function c(p,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Tg(x,p.mode,S),g.return=p,g):(g=s(g,x.children||[]),g.return=p,g)}function u(p,g,x,S,M){return g===null||g.tag!==7?(g=Ka(x,p.mode,S,M),g.return=p,g):(g=s(g,x),g.return=p,g)}function f(p,g,x){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Mg(""+g,p.mode,x),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wh:return x=df(g.type,g.key,g.props,null,p.mode,x),Oc(x,g),x.return=p,x;case Bc:return g=Tg(g,p.mode,x),g.return=p,g;case Hr:return g=Ya(g),f(p,g,x)}if(Fc(g)||Nc(g))return g=Ka(g,p.mode,x,null),g.return=p,g;if(typeof g.then=="function")return f(p,$h(g),x);if(g.$$typeof===er)return f(p,jh(p,g),x);tf(p,g)}return null}function h(p,g,x,S){var M=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return M!==null?null:o(p,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wh:return x.key===M?l(p,g,x,S):null;case Bc:return x.key===M?c(p,g,x,S):null;case Hr:return x=Ya(x),h(p,g,x,S)}if(Fc(x)||Nc(x))return M!==null?null:u(p,g,x,S,null);if(typeof x.then=="function")return h(p,g,$h(x),S);if(x.$$typeof===er)return h(p,g,jh(p,x),S);tf(p,x)}return null}function d(p,g,x,S,M){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return p=p.get(x)||null,o(g,p,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Wh:return p=p.get(S.key===null?x:S.key)||null,l(g,p,S,M);case Bc:return p=p.get(S.key===null?x:S.key)||null,c(g,p,S,M);case Hr:return S=Ya(S),d(p,g,x,S,M)}if(Fc(S)||Nc(S))return p=p.get(x)||null,u(g,p,S,M,null);if(typeof S.then=="function")return d(p,g,x,$h(S),M);if(S.$$typeof===er)return d(p,g,x,jh(g,S),M);tf(g,S)}return null}function _(p,g,x,S){for(var M=null,w=null,y=g,b=g=0,R=null;y!==null&&b<x.length;b++){y.index>b?(R=y,y=null):R=y.sibling;var C=h(p,y,x[b],S);if(C===null){y===null&&(y=R);break}i&&y&&C.alternate===null&&t(p,y),g=r(C,g,b),w===null?M=C:w.sibling=C,w=C,y=R}if(b===x.length)return e(p,y),ie&&$s(p,b),M;if(y===null){for(;b<x.length;b++)y=f(p,x[b],S),y!==null&&(g=r(y,g,b),w===null?M=y:w.sibling=y,w=y);return ie&&$s(p,b),M}for(y=n(y);b<x.length;b++)R=d(y,p,b,x[b],S),R!==null&&(i&&R.alternate!==null&&y.delete(R.key===null?b:R.key),g=r(R,g,b),w===null?M=R:w.sibling=R,w=R);return i&&y.forEach(function(O){return t(p,O)}),ie&&$s(p,b),M}function v(p,g,x,S){if(x==null)throw Error(tt(151));for(var M=null,w=null,y=g,b=g=0,R=null,C=x.next();y!==null&&!C.done;b++,C=x.next()){y.index>b?(R=y,y=null):R=y.sibling;var O=h(p,y,C.value,S);if(O===null){y===null&&(y=R);break}i&&y&&O.alternate===null&&t(p,y),g=r(O,g,b),w===null?M=O:w.sibling=O,w=O,y=R}if(C.done)return e(p,y),ie&&$s(p,b),M;if(y===null){for(;!C.done;b++,C=x.next())C=f(p,C.value,S),C!==null&&(g=r(C,g,b),w===null?M=C:w.sibling=C,w=C);return ie&&$s(p,b),M}for(y=n(y);!C.done;b++,C=x.next())C=d(y,p,b,C.value,S),C!==null&&(i&&C.alternate!==null&&y.delete(C.key===null?b:C.key),g=r(C,g,b),w===null?M=C:w.sibling=C,w=C);return i&&y.forEach(function(I){return t(p,I)}),ie&&$s(p,b),M}function m(p,g,x,S){if(typeof x=="object"&&x!==null&&x.type===Zo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Wh:t:{for(var M=x.key;g!==null;){if(g.key===M){if(M=x.type,M===Zo){if(g.tag===7){e(p,g.sibling),S=s(g,x.props.children),S.return=p,p=S;break t}}else if(g.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Hr&&Ya(M)===g.type){e(p,g.sibling),S=s(g,x.props),Oc(S,x),S.return=p,p=S;break t}e(p,g);break}else t(p,g);g=g.sibling}x.type===Zo?(S=Ka(x.props.children,p.mode,S,x.key),S.return=p,p=S):(S=df(x.type,x.key,x.props,null,p.mode,S),Oc(S,x),S.return=p,p=S)}return a(p);case Bc:t:{for(M=x.key;g!==null;){if(g.key===M)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){e(p,g.sibling),S=s(g,x.children||[]),S.return=p,p=S;break t}else{e(p,g);break}else t(p,g);g=g.sibling}S=Tg(x,p.mode,S),S.return=p,p=S}return a(p);case Hr:return x=Ya(x),m(p,g,x,S)}if(Fc(x))return _(p,g,x,S);if(Nc(x)){if(M=Nc(x),typeof M!="function")throw Error(tt(150));return x=M.call(x),v(p,g,x,S)}if(typeof x.then=="function")return m(p,g,$h(x),S);if(x.$$typeof===er)return m(p,g,jh(p,x),S);tf(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,g!==null&&g.tag===6?(e(p,g.sibling),S=s(g,x),S.return=p,p=S):(e(p,g),S=Mg(x,p.mode,S),S.return=p,p=S),a(p)):e(p,g)}return function(p,g,x,S){try{lu=0;var M=m(p,g,x,S);return ul=null,M}catch(y){if(y===Al||y===rd)throw y;var w=wn(29,y,null,p.mode);return w.lanes=S,w.return=p,w}}}var io=oM(!0),lM=oM(!1),Gr=!1;function a_(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function d0(i,t){i=i.updateQueue,t.updateQueue===i&&(t.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function $r(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function ta(i,t,e){var n=i.updateQueue;if(n===null)return null;if(n=n.shared,(ce&2)!==0){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,t=Df(i),$b(i,null,e),t}return sd(i,n,t,e),Df(i)}function Yc(i,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var n=t.lanes;n&=i.pendingLanes,e|=n,t.lanes=e,wb(i,e)}}function wg(i,t){var e=i.updateQueue,n=i.alternate;if(n!==null&&(n=n.updateQueue,e===n)){var s=null,r=null;if(e=e.firstBaseUpdate,e!==null){do{var a={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};r===null?s=r=a:r=r.next=a,e=e.next}while(e!==null);r===null?s=r=t:r=r.next=t}else s=r=t;e={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},i.updateQueue=e;return}i=e.lastBaseUpdate,i===null?e.firstBaseUpdate=t:i.next=t,e.lastBaseUpdate=t}var p0=!1;function Zc(){if(p0){var i=cl;if(i!==null)throw i}}function Qc(i,t,e,n){p0=!1;var s=i.updateQueue;Gr=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?r=c:a.next=c,a=l;var u=i.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(r!==null){var f=s.baseState;a=0,u=c=l=null,o=r;do{var h=o.lane&-536870913,d=h!==o.lane;if(d?(ee&h)===h:(n&h)===h){h!==0&&h===gl&&(p0=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=i,v=o;h=t;var m=e;switch(v.tag){case 1:if(_=v.payload,typeof _=="function"){f=_.call(m,f,h);break t}f=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break t;f=De({},f,h);break t;case 2:Gr=!0}}h=o.callback,h!==null&&(i.flags|=64,d&&(i.flags|=8192),d=s.callbacks,d===null?s.callbacks=[h]:d.push(h))}else d={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=d,l=f):u=u.next=d,a|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);u===null&&(l=f),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,r===null&&(s.shared.lanes=0),ca|=a,i.lanes=a,i.memoizedState=f}}function cM(i,t){if(typeof i!="function")throw Error(tt(191,i));i.call(t)}function uM(i,t){var e=i.callbacks;if(e!==null)for(i.callbacks=null,i=0;i<e.length;i++)cM(e[i],t)}var _l=Os(null),Uf=Os(0);function yS(i,t){i=hr,we(Uf,i),we(_l,t),hr=i|t.baseLanes}function m0(){we(Uf,hr),we(_l,_l.current)}function o_(){hr=Uf.current,Ei(_l),Ei(Uf)}var On=Os(null),rs=null;function Vr(i){var t=i.alternate;we(Ke,Ke.current&1),we(On,i),rs===null&&(t===null||_l.current!==null||t.memoizedState!==null)&&(rs=i)}function g0(i){we(Ke,Ke.current),we(On,i),rs===null&&(rs=i)}function hM(i){i.tag===22?(we(Ke,Ke.current),we(On,i),rs===null&&(rs=i)):Wr(i)}function Wr(){we(Ke,Ke.current),we(On,On.current)}function En(i){Ei(On),rs===i&&(rs=null),Ei(Ke)}var Ke=Os(0);function Pf(i){for(var t=i;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||P0(e)||I0(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break;for(;t.sibling===null;){if(t.return===null||t.return===i)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lr=0,Xt=null,ve=null,ii=null,If=!1,hl=!1,no=!1,zf=0,cu=0,fl=null,bC=0;function We(){throw Error(tt(321))}function l_(i,t){if(t===null)return!1;for(var e=0;e<t.length&&e<i.length;e++)if(!Ln(i[e],t[e]))return!1;return!0}function c_(i,t,e,n,s,r){return lr=r,Xt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pt.H=i===null||i.memoizedState===null?kM:x_,no=!1,r=e(n,s),no=!1,hl&&(r=dM(t,e,n,s)),fM(i),r}function fM(i){Pt.H=uu;var t=ve!==null&&ve.next!==null;if(lr=0,ii=ve=Xt=null,If=!1,cu=0,fl=null,t)throw Error(tt(300));i===null||ri||(i=i.dependencies,i!==null&&Lf(i)&&(ri=!0))}function dM(i,t,e,n){Xt=i;var s=0;do{if(hl&&(fl=null),cu=0,hl=!1,25<=s)throw Error(tt(301));if(s+=1,ii=ve=null,i.updateQueue!=null){var r=i.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Pt.H=VM,r=t(e,n)}while(hl);return r}function MC(){var i=Pt.H,t=i.useState()[0];return t=typeof t.then=="function"?Mu(t):t,i=i.useState()[0],(ve!==null?ve.memoizedState:null)!==i&&(Xt.flags|=1024),t}function u_(){var i=zf!==0;return zf=0,i}function h_(i,t,e){t.updateQueue=i.updateQueue,t.flags&=-2053,i.lanes&=~e}function f_(i){if(If){for(i=i.memoizedState;i!==null;){var t=i.queue;t!==null&&(t.pending=null),i=i.next}If=!1}lr=0,ii=ve=Xt=null,hl=!1,cu=zf=0,fl=null}function en(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ii===null?Xt.memoizedState=ii=i:ii=ii.next=i,ii}function Je(){if(ve===null){var i=Xt.alternate;i=i!==null?i.memoizedState:null}else i=ve.next;var t=ii===null?Xt.memoizedState:ii.next;if(t!==null)ii=t,ve=i;else{if(i===null)throw Xt.alternate===null?Error(tt(467)):Error(tt(310));ve=i,i={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},ii===null?Xt.memoizedState=ii=i:ii=ii.next=i}return ii}function ad(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mu(i){var t=cu;return cu+=1,fl===null&&(fl=[]),i=aM(fl,i,t),t=Xt,(ii===null?t.memoizedState:ii.next)===null&&(t=t.alternate,Pt.H=t===null||t.memoizedState===null?kM:x_),i}function od(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Mu(i);if(i.$$typeof===er)return Pi(i)}throw Error(tt(438,String(i)))}function d_(i){var t=null,e=Xt.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var n=Xt.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=ad(),Xt.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(i),n=0;n<i;n++)e[n]=lR;return t.index++,e}function cr(i,t){return typeof t=="function"?t(i):t}function mf(i){var t=Je();return p_(t,ve,i)}function p_(i,t,e){var n=i.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=e;var s=i.baseQueue,r=n.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}t.baseQueue=s=r,n.pending=null}if(r=i.baseState,s===null)i.memoizedState=r;else{t=s.next;var o=a=null,l=null,c=t,u=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(ee&f)===f:(lr&f)===f){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===gl&&(u=!0);else if((lr&h)===h){c=c.next,h===gl&&(u=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,a=r):l=l.next=f,Xt.lanes|=h,ca|=h;f=c.action,no&&e(r,f),r=c.hasEagerState?c.eagerState:e(r,f)}else h={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,a=r):l=l.next=h,Xt.lanes|=f,ca|=f;c=c.next}while(c!==null&&c!==t);if(l===null?a=r:l.next=o,!Ln(r,i.memoizedState)&&(ri=!0,u&&(e=cl,e!==null)))throw e;i.memoizedState=r,i.baseState=a,i.baseQueue=l,n.lastRenderedState=r}return s===null&&(n.lanes=0),[i.memoizedState,n.dispatch]}function Ag(i){var t=Je(),e=t.queue;if(e===null)throw Error(tt(311));e.lastRenderedReducer=i;var n=e.dispatch,s=e.pending,r=t.memoizedState;if(s!==null){e.pending=null;var a=s=s.next;do r=i(r,a.action),a=a.next;while(a!==s);Ln(r,t.memoizedState)||(ri=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),e.lastRenderedState=r}return[r,n]}function pM(i,t,e){var n=Xt,s=Je(),r=ie;if(r){if(e===void 0)throw Error(tt(407));e=e()}else e=t();var a=!Ln((ve||s).memoizedState,e);if(a&&(s.memoizedState=e,ri=!0),s=s.queue,m_(_M.bind(null,n,s,i),[i]),s.getSnapshot!==t||a||ii!==null&&ii.memoizedState.tag&1){if(n.flags|=2048,vl(9,{destroy:void 0},gM.bind(null,n,s,e,t),null),be===null)throw Error(tt(349));r||(lr&127)!==0||mM(n,t,e)}return e}function mM(i,t,e){i.flags|=16384,i={getSnapshot:t,value:e},t=Xt.updateQueue,t===null?(t=ad(),Xt.updateQueue=t,t.stores=[i]):(e=t.stores,e===null?t.stores=[i]:e.push(i))}function gM(i,t,e,n){t.value=e,t.getSnapshot=n,vM(t)&&yM(i)}function _M(i,t,e){return e(function(){vM(t)&&yM(i)})}function vM(i){var t=i.getSnapshot;i=i.value;try{var e=t();return!Ln(i,e)}catch{return!0}}function yM(i){var t=lo(i,2);t!==null&&fn(t,i,2)}function _0(i){var t=en();if(typeof i=="function"){var e=i;if(i=e(),no){qr(!0);try{e()}finally{qr(!1)}}}return t.memoizedState=t.baseState=i,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:i},t}function xM(i,t,e,n){return i.baseState=e,p_(i,ve,typeof n=="function"?n:cr)}function TC(i,t,e,n,s){if(cd(i))throw Error(tt(485));if(i=t.action,i!==null){var r={payload:s,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};Pt.T!==null?e(!0):r.isTransition=!1,n(r),e=t.pending,e===null?(r.next=t.pending=r,SM(t,r)):(r.next=e.next,t.pending=e.next=r)}}function SM(i,t){var e=t.action,n=t.payload,s=i.state;if(t.isTransition){var r=Pt.T,a={};Pt.T=a;try{var o=e(s,n),l=Pt.S;l!==null&&l(a,o),xS(i,t,o)}catch(c){v0(i,t,c)}finally{r!==null&&a.types!==null&&(r.types=a.types),Pt.T=r}}else try{r=e(s,n),xS(i,t,r)}catch(c){v0(i,t,c)}}function xS(i,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(n){SS(i,t,n)},function(n){return v0(i,t,n)}):SS(i,t,e)}function SS(i,t,e){t.status="fulfilled",t.value=e,bM(t),i.state=e,t=i.pending,t!==null&&(e=t.next,e===t?i.pending=null:(e=e.next,t.next=e,SM(i,e)))}function v0(i,t,e){var n=i.pending;if(i.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=e,bM(t),t=t.next;while(t!==n)}i.action=null}function bM(i){i=i.listeners;for(var t=0;t<i.length;t++)(0,i[t])()}function MM(i,t){return t}function bS(i,t){if(ie){var e=be.formState;if(e!==null){t:{var n=Xt;if(ie){if(Ce){e:{for(var s=Ce,r=ss;s.nodeType!==8;){if(!r){s=null;break e}if(s=as(s.nextSibling),s===null){s=null;break e}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){Ce=as(s.nextSibling),n=s.data==="F!";break t}}oa(n)}n=!1}n&&(t=e[0])}}return e=en(),e.memoizedState=e.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:MM,lastRenderedState:t},e.queue=n,e=FM.bind(null,Xt,n),n.dispatch=e,n=_0(!1),r=y_.bind(null,Xt,!1,n.queue),n=en(),s={state:t,dispatch:null,action:i,pending:null},n.queue=s,e=TC.bind(null,Xt,s,r,e),s.dispatch=e,n.memoizedState=i,[t,e,!1]}function MS(i){var t=Je();return TM(t,ve,i)}function TM(i,t,e){if(t=p_(i,t,MM)[0],i=mf(cr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Mu(t)}catch(a){throw a===Al?rd:a}else n=t;t=Je();var s=t.queue,r=s.dispatch;return e!==t.memoizedState&&(Xt.flags|=2048,vl(9,{destroy:void 0},EC.bind(null,s,e),null)),[n,r,i]}function EC(i,t){i.action=t}function TS(i){var t=Je(),e=ve;if(e!==null)return TM(t,e,i);Je(),t=t.memoizedState,e=Je();var n=e.queue.dispatch;return e.memoizedState=i,[t,n,!1]}function vl(i,t,e,n){return i={tag:i,create:e,deps:n,inst:t,next:null},t=Xt.updateQueue,t===null&&(t=ad(),Xt.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=i.next=i:(n=e.next,e.next=i,i.next=n,t.lastEffect=i),i}function EM(){return Je().memoizedState}function gf(i,t,e,n){var s=en();Xt.flags|=i,s.memoizedState=vl(1|t,{destroy:void 0},e,n===void 0?null:n)}function ld(i,t,e,n){var s=Je();n=n===void 0?null:n;var r=s.memoizedState.inst;ve!==null&&n!==null&&l_(n,ve.memoizedState.deps)?s.memoizedState=vl(t,r,e,n):(Xt.flags|=i,s.memoizedState=vl(1|t,r,e,n))}function ES(i,t){gf(8390656,8,i,t)}function m_(i,t){ld(2048,8,i,t)}function wC(i){Xt.flags|=4;var t=Xt.updateQueue;if(t===null)t=ad(),Xt.updateQueue=t,t.events=[i];else{var e=t.events;e===null?t.events=[i]:e.push(i)}}function wM(i){var t=Je().memoizedState;return wC({ref:t,nextImpl:i}),function(){if((ce&2)!==0)throw Error(tt(440));return t.impl.apply(void 0,arguments)}}function AM(i,t){return ld(4,2,i,t)}function RM(i,t){return ld(4,4,i,t)}function CM(i,t){if(typeof t=="function"){i=i();var e=t(i);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return i=i(),t.current=i,function(){t.current=null}}function DM(i,t,e){e=e!=null?e.concat([i]):null,ld(4,4,CM.bind(null,t,i),e)}function g_(){}function NM(i,t){var e=Je();t=t===void 0?null:t;var n=e.memoizedState;return t!==null&&l_(t,n[1])?n[0]:(e.memoizedState=[i,t],i)}function LM(i,t){var e=Je();t=t===void 0?null:t;var n=e.memoizedState;if(t!==null&&l_(t,n[1]))return n[0];if(n=i(),no){qr(!0);try{i()}finally{qr(!1)}}return e.memoizedState=[n,t],n}function __(i,t,e){return e===void 0||(lr&1073741824)!==0&&(ee&261930)===0?i.memoizedState=t:(i.memoizedState=e,i=x1(),Xt.lanes|=i,ca|=i,e)}function OM(i,t,e,n){return Ln(e,t)?e:_l.current!==null?(i=__(i,e,n),Ln(i,t)||(ri=!0),i):(lr&42)===0||(lr&1073741824)!==0&&(ee&261930)===0?(ri=!0,i.memoizedState=e):(i=x1(),Xt.lanes|=i,ca|=i,t)}function UM(i,t,e,n,s){var r=ue.p;ue.p=r!==0&&8>r?r:8;var a=Pt.T,o={};Pt.T=o,y_(i,!1,t,e);try{var l=s(),c=Pt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=SC(l,n);Kc(i,t,u,Nn(i))}else Kc(i,t,n,Nn(i))}catch(f){Kc(i,t,{then:function(){},status:"rejected",reason:f},Nn())}finally{ue.p=r,a!==null&&o.types!==null&&(a.types=o.types),Pt.T=a}}function AC(){}function y0(i,t,e,n){if(i.tag!==5)throw Error(tt(476));var s=PM(i).queue;UM(i,s,t,Qa,e===null?AC:function(){return IM(i),e(n)})}function PM(i){var t=i.memoizedState;if(t!==null)return t;t={memoizedState:Qa,baseState:Qa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:Qa},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},next:null},i.memoizedState=t,i=i.alternate,i!==null&&(i.memoizedState=t),t}function IM(i){var t=PM(i);t.next===null&&(t=i.alternate.memoizedState),Kc(i,t.next.queue,{},Nn())}function v_(){return Pi(du)}function zM(){return Je().memoizedState}function BM(){return Je().memoizedState}function RC(i){for(var t=i.return;t!==null;){switch(t.tag){case 24:case 3:var e=Nn();i=$r(e);var n=ta(t,i,e);n!==null&&(fn(n,t,e),Yc(n,t,e)),t={cache:n_()},i.payload=t;return}t=t.return}}function CC(i,t,e){var n=Nn();e={lane:n,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},cd(i)?HM(t,e):(e=$0(i,t,e,n),e!==null&&(fn(e,i,n),GM(e,t,n)))}function FM(i,t,e){var n=Nn();Kc(i,t,e,n)}function Kc(i,t,e,n){var s={lane:n,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(cd(i))HM(t,s);else{var r=i.alternate;if(i.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var a=t.lastRenderedState,o=r(a,e);if(s.hasEagerState=!0,s.eagerState=o,Ln(o,a))return sd(i,t,s,0),be===null&&nd(),!1}catch{}if(e=$0(i,t,s,n),e!==null)return fn(e,i,n),GM(e,t,n),!0}return!1}function y_(i,t,e,n){if(n={lane:2,revertLane:R_(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},cd(i)){if(t)throw Error(tt(479))}else t=$0(i,e,n,2),t!==null&&fn(t,i,2)}function cd(i){var t=i.alternate;return i===Xt||t!==null&&t===Xt}function HM(i,t){hl=If=!0;var e=i.pending;e===null?t.next=t:(t.next=e.next,e.next=t),i.pending=t}function GM(i,t,e){if((e&4194048)!==0){var n=t.lanes;n&=i.pendingLanes,e|=n,t.lanes=e,wb(i,e)}}var uu={readContext:Pi,use:od,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We};uu.useEffectEvent=We;var kM={readContext:Pi,use:od,useCallback:function(i,t){return en().memoizedState=[i,t===void 0?null:t],i},useContext:Pi,useEffect:ES,useImperativeHandle:function(i,t,e){e=e!=null?e.concat([i]):null,gf(4194308,4,CM.bind(null,t,i),e)},useLayoutEffect:function(i,t){return gf(4194308,4,i,t)},useInsertionEffect:function(i,t){gf(4,2,i,t)},useMemo:function(i,t){var e=en();t=t===void 0?null:t;var n=i();if(no){qr(!0);try{i()}finally{qr(!1)}}return e.memoizedState=[n,t],n},useReducer:function(i,t,e){var n=en();if(e!==void 0){var s=e(t);if(no){qr(!0);try{e(t)}finally{qr(!1)}}}else s=t;return n.memoizedState=n.baseState=s,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},n.queue=i,i=i.dispatch=CC.bind(null,Xt,i),[n.memoizedState,i]},useRef:function(i){var t=en();return i={current:i},t.memoizedState=i},useState:function(i){i=_0(i);var t=i.queue,e=FM.bind(null,Xt,t);return t.dispatch=e,[i.memoizedState,e]},useDebugValue:g_,useDeferredValue:function(i,t){var e=en();return __(e,i,t)},useTransition:function(){var i=_0(!1);return i=UM.bind(null,Xt,i.queue,!0,!1),en().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,t,e){var n=Xt,s=en();if(ie){if(e===void 0)throw Error(tt(407));e=e()}else{if(e=t(),be===null)throw Error(tt(349));(ee&127)!==0||mM(n,t,e)}s.memoizedState=e;var r={value:e,getSnapshot:t};return s.queue=r,ES(_M.bind(null,n,r,i),[i]),n.flags|=2048,vl(9,{destroy:void 0},gM.bind(null,n,r,e,t),null),e},useId:function(){var i=en(),t=be.identifierPrefix;if(ie){var e=Ds,n=Cs;e=(n&~(1<<32-Dn(n)-1)).toString(32)+e,t="_"+t+"R_"+e,e=zf++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=bC++,t="_"+t+"r_"+e.toString(32)+"_";return i.memoizedState=t},useHostTransitionStatus:v_,useFormState:bS,useActionState:bS,useOptimistic:function(i){var t=en();t.memoizedState=t.baseState=i;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=y_.bind(null,Xt,!0,e),e.dispatch=t,[i,t]},useMemoCache:d_,useCacheRefresh:function(){return en().memoizedState=RC.bind(null,Xt)},useEffectEvent:function(i){var t=en(),e={impl:i};return t.memoizedState=e,function(){if((ce&2)!==0)throw Error(tt(440));return e.impl.apply(void 0,arguments)}}},x_={readContext:Pi,use:od,useCallback:NM,useContext:Pi,useEffect:m_,useImperativeHandle:DM,useInsertionEffect:AM,useLayoutEffect:RM,useMemo:LM,useReducer:mf,useRef:EM,useState:function(){return mf(cr)},useDebugValue:g_,useDeferredValue:function(i,t){var e=Je();return OM(e,ve.memoizedState,i,t)},useTransition:function(){var i=mf(cr)[0],t=Je().memoizedState;return[typeof i=="boolean"?i:Mu(i),t]},useSyncExternalStore:pM,useId:zM,useHostTransitionStatus:v_,useFormState:MS,useActionState:MS,useOptimistic:function(i,t){var e=Je();return xM(e,ve,i,t)},useMemoCache:d_,useCacheRefresh:BM};x_.useEffectEvent=wM;var VM={readContext:Pi,use:od,useCallback:NM,useContext:Pi,useEffect:m_,useImperativeHandle:DM,useInsertionEffect:AM,useLayoutEffect:RM,useMemo:LM,useReducer:Ag,useRef:EM,useState:function(){return Ag(cr)},useDebugValue:g_,useDeferredValue:function(i,t){var e=Je();return ve===null?__(e,i,t):OM(e,ve.memoizedState,i,t)},useTransition:function(){var i=Ag(cr)[0],t=Je().memoizedState;return[typeof i=="boolean"?i:Mu(i),t]},useSyncExternalStore:pM,useId:zM,useHostTransitionStatus:v_,useFormState:TS,useActionState:TS,useOptimistic:function(i,t){var e=Je();return ve!==null?xM(e,ve,i,t):(e.baseState=i,[i,e.queue.dispatch])},useMemoCache:d_,useCacheRefresh:BM};VM.useEffectEvent=wM;function Rg(i,t,e,n){t=i.memoizedState,e=e(n,t),e=e==null?t:De({},t,e),i.memoizedState=e,i.lanes===0&&(i.updateQueue.baseState=e)}var x0={enqueueSetState:function(i,t,e){i=i._reactInternals;var n=Nn(),s=$r(n);s.payload=t,e!=null&&(s.callback=e),t=ta(i,s,n),t!==null&&(fn(t,i,n),Yc(t,i,n))},enqueueReplaceState:function(i,t,e){i=i._reactInternals;var n=Nn(),s=$r(n);s.tag=1,s.payload=t,e!=null&&(s.callback=e),t=ta(i,s,n),t!==null&&(fn(t,i,n),Yc(t,i,n))},enqueueForceUpdate:function(i,t){i=i._reactInternals;var e=Nn(),n=$r(e);n.tag=2,t!=null&&(n.callback=t),t=ta(i,n,e),t!==null&&(fn(t,i,e),Yc(t,i,e))}};function wS(i,t,e,n,s,r,a){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(n,r,a):t.prototype&&t.prototype.isPureReactComponent?!ru(e,n)||!ru(s,r):!0}function AS(i,t,e,n){i=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,n),t.state!==i&&x0.enqueueReplaceState(t,t.state,null)}function so(i,t){var e=t;if("ref"in t){e={};for(var n in t)n!=="ref"&&(e[n]=t[n])}if(i=i.defaultProps){e===t&&(e=De({},e));for(var s in i)e[s]===void 0&&(e[s]=i[s])}return e}function WM(i){Cf(i)}function XM(i){console.error(i)}function qM(i){Cf(i)}function Bf(i,t){try{var e=i.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function RS(i,t,e){try{var n=i.onCaughtError;n(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function S0(i,t,e){return e=$r(e),e.tag=3,e.payload={element:null},e.callback=function(){Bf(i,t)},e}function YM(i){return i=$r(i),i.tag=3,i}function ZM(i,t,e,n){var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=n.value;i.payload=function(){return s(r)},i.callback=function(){RS(t,e,n)}}var a=e.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(i.callback=function(){RS(t,e,n),typeof s!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function DC(i,t,e,n,s){if(e.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=e.alternate,t!==null&&wl(t,e,s,!0),e=On.current,e!==null){switch(e.tag){case 31:case 13:return rs===null?Vf():e.alternate===null&&Xe===0&&(Xe=3),e.flags&=-257,e.flags|=65536,e.lanes=s,n===Of?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([n]):t.add(n),Fg(i,n,s)),!1;case 22:return e.flags|=65536,n===Of?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([n]):e.add(n)),Fg(i,n,s)),!1}throw Error(tt(435,e.tag))}return Fg(i,n,s),Vf(),!1}if(ie)return t=On.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,n!==l0&&(i=Error(tt(422),{cause:n}),ou(ns(i,e)))):(n!==l0&&(t=Error(tt(423),{cause:n}),ou(ns(t,e))),i=i.current.alternate,i.flags|=65536,s&=-s,i.lanes|=s,n=ns(n,e),s=S0(i.stateNode,n,s),wg(i,s),Xe!==4&&(Xe=2)),!1;var r=Error(tt(520),{cause:n});if(r=ns(r,e),$c===null?$c=[r]:$c.push(r),Xe!==4&&(Xe=2),t===null)return!0;n=ns(n,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,i=s&-s,e.lanes|=i,i=S0(e.stateNode,n,i),wg(e,i),!1;case 1:if(t=e.type,r=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ea===null||!ea.has(r))))return e.flags|=65536,s&=-s,e.lanes|=s,s=YM(s),ZM(s,i,e,n),wg(e,s),!1}e=e.return}while(e!==null);return!1}var S_=Error(tt(461)),ri=!1;function Li(i,t,e,n){t.child=i===null?lM(t,null,e,n):io(t,i.child,e,n)}function CS(i,t,e,n,s){e=e.render;var r=t.ref;if("ref"in n){var a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}else a=n;return eo(t),n=c_(i,t,e,a,r,s),o=u_(),i!==null&&!ri?(h_(i,t,s),ur(i,t,s)):(ie&&o&&e_(t),t.flags|=1,Li(i,t,n,s),t.child)}function DS(i,t,e,n,s){if(i===null){var r=e.type;return typeof r=="function"&&!t_(r)&&r.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=r,QM(i,t,r,n,s)):(i=df(e.type,null,n,t,t.mode,s),i.ref=t.ref,i.return=t,t.child=i)}if(r=i.child,!b_(i,s)){var a=r.memoizedProps;if(e=e.compare,e=e!==null?e:ru,e(a,n)&&i.ref===t.ref)return ur(i,t,s)}return t.flags|=1,i=sr(r,n),i.ref=t.ref,i.return=t,t.child=i}function QM(i,t,e,n,s){if(i!==null){var r=i.memoizedProps;if(ru(r,n)&&i.ref===t.ref)if(ri=!1,t.pendingProps=n=r,b_(i,s))(i.flags&131072)!==0&&(ri=!0);else return t.lanes=i.lanes,ur(i,t,s)}return b0(i,t,e,n,s)}function KM(i,t,e,n){var s=n.children,r=i!==null?i.memoizedState:null;if(i===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|e:e,i!==null){for(n=t.child=i.child,s=0;n!==null;)s=s|n.lanes|n.childLanes,n=n.sibling;n=s&~r}else n=0,t.child=null;return NS(i,t,r,e,n)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},i!==null&&pf(t,r!==null?r.cachePool:null),r!==null?yS(t,r):m0(),hM(t);else return n=t.lanes=536870912,NS(i,t,r!==null?r.baseLanes|e:e,e,n)}else r!==null?(pf(t,r.cachePool),yS(t,r),Wr(t),t.memoizedState=null):(i!==null&&pf(t,null),m0(),Wr(t));return Li(i,t,s,e),t.child}function Gc(i,t){return i!==null&&i.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function NS(i,t,e,n,s){var r=s_();return r=r===null?null:{parent:si._currentValue,pool:r},t.memoizedState={baseLanes:e,cachePool:r},i!==null&&pf(t,null),m0(),hM(t),i!==null&&wl(i,t,n,!0),t.childLanes=s,null}function _f(i,t){return t=Ff({mode:t.mode,children:t.children},i.mode),t.ref=i.ref,i.child=t,t.return=i,t}function LS(i,t,e){return io(t,i.child,null,e),i=_f(t,t.pendingProps),i.flags|=2,En(t),t.memoizedState=null,i}function NC(i,t,e){var n=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,i===null){if(ie){if(n.mode==="hidden")return i=_f(t,n),t.lanes=536870912,Gc(null,i);if(g0(t),(i=Ce)?(i=k1(i,ss),i=i!==null&&i.data==="&"?i:null,i!==null&&(t.memoizedState={dehydrated:i,treeContext:aa!==null?{id:Cs,overflow:Ds}:null,retryLane:536870912,hydrationErrors:null},e=eM(i),e.return=t,t.child=e,Ui=t,Ce=null)):i=null,i===null)throw oa(t);return t.lanes=536870912,null}return _f(t,n)}var r=i.memoizedState;if(r!==null){var a=r.dehydrated;if(g0(t),s)if(t.flags&256)t.flags&=-257,t=LS(i,t,e);else if(t.memoizedState!==null)t.child=i.child,t.flags|=128,t=null;else throw Error(tt(558));else if(ri||wl(i,t,e,!1),s=(e&i.childLanes)!==0,ri||s){if(n=be,n!==null&&(a=Ab(n,e),a!==0&&a!==r.retryLane))throw r.retryLane=a,lo(i,a),fn(n,i,a),S_;Vf(),t=LS(i,t,e)}else i=r.treeContext,Ce=as(a.nextSibling),Ui=t,ie=!0,jr=null,ss=!1,i!==null&&nM(t,i),t=_f(t,n),t.flags|=4096;return t}return i=sr(i.child,{mode:n.mode,children:n.children}),i.ref=t.ref,t.child=i,i.return=t,i}function vf(i,t){var e=t.ref;if(e===null)i!==null&&i.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(tt(284));(i===null||i.ref!==e)&&(t.flags|=4194816)}}function b0(i,t,e,n,s){return eo(t),e=c_(i,t,e,n,void 0,s),n=u_(),i!==null&&!ri?(h_(i,t,s),ur(i,t,s)):(ie&&n&&e_(t),t.flags|=1,Li(i,t,e,s),t.child)}function OS(i,t,e,n,s,r){return eo(t),t.updateQueue=null,e=dM(t,n,e,s),fM(i),n=u_(),i!==null&&!ri?(h_(i,t,r),ur(i,t,r)):(ie&&n&&e_(t),t.flags|=1,Li(i,t,e,r),t.child)}function US(i,t,e,n,s){if(eo(t),t.stateNode===null){var r=il,a=e.contextType;typeof a=="object"&&a!==null&&(r=Pi(a)),r=new e(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=x0,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},a_(t),a=e.contextType,r.context=typeof a=="object"&&a!==null?Pi(a):il,r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Rg(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&x0.enqueueReplaceState(r,r.state,null),Qc(t,n,r,s),Zc(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(i===null){r=t.stateNode;var o=t.memoizedProps,l=so(e,o);r.props=l;var c=r.context,u=e.contextType;a=il,typeof u=="object"&&u!==null&&(a=Pi(u));var f=e.getDerivedStateFromProps;u=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==a)&&AS(t,r,n,a),Gr=!1;var h=t.memoizedState;r.state=h,Qc(t,n,r,s),Zc(),c=t.memoizedState,o||h!==c||Gr?(typeof f=="function"&&(Rg(t,e,f,n),c=t.memoizedState),(l=Gr||wS(t,e,l,n,h,c,a))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),r.props=n,r.state=c,r.context=a,n=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,d0(i,t),a=t.memoizedProps,u=so(e,a),r.props=u,f=t.pendingProps,h=r.context,c=e.contextType,l=il,typeof c=="object"&&c!==null&&(l=Pi(c)),o=e.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==f||h!==l)&&AS(t,r,n,l),Gr=!1,h=t.memoizedState,r.state=h,Qc(t,n,r,s),Zc();var d=t.memoizedState;a!==f||h!==d||Gr||i!==null&&i.dependencies!==null&&Lf(i.dependencies)?(typeof o=="function"&&(Rg(t,e,o,n),d=t.memoizedState),(u=Gr||wS(t,e,u,n,h,d,l)||i!==null&&i.dependencies!==null&&Lf(i.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,d,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,d,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===i.memoizedProps&&h===i.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===i.memoizedProps&&h===i.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=d),r.props=n,r.state=d,r.context=l,n=u):(typeof r.componentDidUpdate!="function"||a===i.memoizedProps&&h===i.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===i.memoizedProps&&h===i.memoizedState||(t.flags|=1024),n=!1)}return r=n,vf(i,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,e=n&&typeof e.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,i!==null&&n?(t.child=io(t,i.child,null,s),t.child=io(t,null,e,s)):Li(i,t,e,s),t.memoizedState=r.state,i=t.child):i=ur(i,t,s),i}function PS(i,t,e,n){return to(),t.flags|=256,Li(i,t,e,n),t.child}var Cg={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dg(i){return{baseLanes:i,cachePool:rM()}}function Ng(i,t,e){return i=i!==null?i.childLanes&~e:0,t&&(i|=An),i}function JM(i,t,e){var n=t.pendingProps,s=!1,r=(t.flags&128)!==0,a;if((a=r)||(a=i!==null&&i.memoizedState===null?!1:(Ke.current&2)!==0),a&&(s=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,i===null){if(ie){if(s?Vr(t):Wr(t),(i=Ce)?(i=k1(i,ss),i=i!==null&&i.data!=="&"?i:null,i!==null&&(t.memoizedState={dehydrated:i,treeContext:aa!==null?{id:Cs,overflow:Ds}:null,retryLane:536870912,hydrationErrors:null},e=eM(i),e.return=t,t.child=e,Ui=t,Ce=null)):i=null,i===null)throw oa(t);return I0(i)?t.lanes=32:t.lanes=536870912,null}var o=n.children;return n=n.fallback,s?(Wr(t),s=t.mode,o=Ff({mode:"hidden",children:o},s),n=Ka(n,s,e,null),o.return=t,n.return=t,o.sibling=n,t.child=o,n=t.child,n.memoizedState=Dg(e),n.childLanes=Ng(i,a,e),t.memoizedState=Cg,Gc(null,n)):(Vr(t),M0(t,o))}var l=i.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(Vr(t),t.flags&=-257,t=Lg(i,t,e)):t.memoizedState!==null?(Wr(t),t.child=i.child,t.flags|=128,t=null):(Wr(t),o=n.fallback,s=t.mode,n=Ff({mode:"visible",children:n.children},s),o=Ka(o,s,e,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,io(t,i.child,null,e),n=t.child,n.memoizedState=Dg(e),n.childLanes=Ng(i,a,e),t.memoizedState=Cg,t=Gc(null,n));else if(Vr(t),I0(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var c=a.dgst;a=c,n=Error(tt(419)),n.stack="",n.digest=a,ou({value:n,source:null,stack:null}),t=Lg(i,t,e)}else if(ri||wl(i,t,e,!1),a=(e&i.childLanes)!==0,ri||a){if(a=be,a!==null&&(n=Ab(a,e),n!==0&&n!==l.retryLane))throw l.retryLane=n,lo(i,n),fn(a,i,n),S_;P0(o)||Vf(),t=Lg(i,t,e)}else P0(o)?(t.flags|=192,t.child=i.child,t=null):(i=l.treeContext,Ce=as(o.nextSibling),Ui=t,ie=!0,jr=null,ss=!1,i!==null&&nM(t,i),t=M0(t,n.children),t.flags|=4096);return t}return s?(Wr(t),o=n.fallback,s=t.mode,l=i.child,c=l.sibling,n=sr(l,{mode:"hidden",children:n.children}),n.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=sr(c,o):(o=Ka(o,s,e,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,Gc(null,n),n=t.child,o=i.child.memoizedState,o===null?o=Dg(e):(s=o.cachePool,s!==null?(l=si._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=rM(),o={baseLanes:o.baseLanes|e,cachePool:s}),n.memoizedState=o,n.childLanes=Ng(i,a,e),t.memoizedState=Cg,Gc(i.child,n)):(Vr(t),e=i.child,i=e.sibling,e=sr(e,{mode:"visible",children:n.children}),e.return=t,e.sibling=null,i!==null&&(a=t.deletions,a===null?(t.deletions=[i],t.flags|=16):a.push(i)),t.child=e,t.memoizedState=null,e)}function M0(i,t){return t=Ff({mode:"visible",children:t},i.mode),t.return=i,i.child=t}function Ff(i,t){return i=wn(22,i,null,t),i.lanes=0,i}function Lg(i,t,e){return io(t,i.child,null,e),i=M0(t,t.pendingProps.children),i.flags|=2,t.memoizedState=null,i}function IS(i,t,e){i.lanes|=t;var n=i.alternate;n!==null&&(n.lanes|=t),u0(i.return,t,e)}function Og(i,t,e,n,s,r){var a=i.memoizedState;a===null?i.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:e,tailMode:s,treeForkCount:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=e,a.tailMode=s,a.treeForkCount=r)}function jM(i,t,e){var n=t.pendingProps,s=n.revealOrder,r=n.tail;n=n.children;var a=Ke.current,o=(a&2)!==0;if(o?(a=a&1|2,t.flags|=128):a&=1,we(Ke,a),Li(i,t,n,e),n=ie?au:0,!o&&i!==null&&(i.flags&128)!==0)t:for(i=t.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&IS(i,e,t);else if(i.tag===19)IS(i,e,t);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break t;for(;i.sibling===null;){if(i.return===null||i.return===t)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}switch(s){case"forwards":for(e=t.child,s=null;e!==null;)i=e.alternate,i!==null&&Pf(i)===null&&(s=e),e=e.sibling;e=s,e===null?(s=t.child,t.child=null):(s=e.sibling,e.sibling=null),Og(t,!1,s,e,r,n);break;case"backwards":case"unstable_legacy-backwards":for(e=null,s=t.child,t.child=null;s!==null;){if(i=s.alternate,i!==null&&Pf(i)===null){t.child=s;break}i=s.sibling,s.sibling=e,e=s,s=i}Og(t,!0,e,null,r,n);break;case"together":Og(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function ur(i,t,e){if(i!==null&&(t.dependencies=i.dependencies),ca|=t.lanes,(e&t.childLanes)===0)if(i!==null){if(wl(i,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(i!==null&&t.child!==i.child)throw Error(tt(153));if(t.child!==null){for(i=t.child,e=sr(i,i.pendingProps),t.child=e,e.return=t;i.sibling!==null;)i=i.sibling,e=e.sibling=sr(i,i.pendingProps),e.return=t;e.sibling=null}return t.child}function b_(i,t){return(i.lanes&t)!==0?!0:(i=i.dependencies,!!(i!==null&&Lf(i)))}function LC(i,t,e){switch(t.tag){case 3:Ef(t,t.stateNode.containerInfo),kr(t,si,i.memoizedState.cache),to();break;case 27:case 5:Jg(t);break;case 4:Ef(t,t.stateNode.containerInfo);break;case 10:kr(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,g0(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Vr(t),t.flags|=128,null):(e&t.child.childLanes)!==0?JM(i,t,e):(Vr(t),i=ur(i,t,e),i!==null?i.sibling:null);Vr(t);break;case 19:var s=(i.flags&128)!==0;if(n=(e&t.childLanes)!==0,n||(wl(i,t,e,!1),n=(e&t.childLanes)!==0),s){if(n)return jM(i,t,e);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),we(Ke,Ke.current),n)break;return null;case 22:return t.lanes=0,KM(i,t,e,t.pendingProps);case 24:kr(t,si,i.memoizedState.cache)}return ur(i,t,e)}function $M(i,t,e){if(i!==null)if(i.memoizedProps!==t.pendingProps)ri=!0;else{if(!b_(i,e)&&(t.flags&128)===0)return ri=!1,LC(i,t,e);ri=(i.flags&131072)!==0}else ri=!1,ie&&(t.flags&1048576)!==0&&iM(t,au,t.index);switch(t.lanes=0,t.tag){case 16:t:{var n=t.pendingProps;if(i=Ya(t.elementType),t.type=i,typeof i=="function")t_(i)?(n=so(i,n),t.tag=1,t=US(null,t,i,n,e)):(t.tag=0,t=b0(null,t,i,n,e));else{if(i!=null){var s=i.$$typeof;if(s===H0){t.tag=11,t=CS(null,t,i,n,e);break t}else if(s===G0){t.tag=14,t=DS(null,t,i,n,e);break t}}throw t=Qg(i)||i,Error(tt(306,t,""))}}return t;case 0:return b0(i,t,t.type,t.pendingProps,e);case 1:return n=t.type,s=so(n,t.pendingProps),US(i,t,n,s,e);case 3:t:{if(Ef(t,t.stateNode.containerInfo),i===null)throw Error(tt(387));n=t.pendingProps;var r=t.memoizedState;s=r.element,d0(i,t),Qc(t,n,null,e);var a=t.memoizedState;if(n=a.cache,kr(t,si,n),n!==r.cache&&h0(t,[si],e,!0),Zc(),n=a.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=PS(i,t,n,e);break t}else if(n!==s){s=ns(Error(tt(424)),t),ou(s),t=PS(i,t,n,e);break t}else for(i=t.stateNode.containerInfo,i.nodeType===9?i=i.body:i=i.nodeName==="HTML"?i.ownerDocument.body:i,Ce=as(i.firstChild),Ui=t,ie=!0,jr=null,ss=!0,e=lM(t,null,n,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(to(),n===s){t=ur(i,t,e);break t}Li(i,t,n,e)}t=t.child}return t;case 26:return vf(i,t),i===null?(e=sb(t.type,null,t.pendingProps,null))?t.memoizedState=e:ie||(e=t.type,i=t.pendingProps,n=Yf(Jr.current).createElement(e),n[Oi]=t,n[dn]=i,Ii(n,e,i),Ti(n),t.stateNode=n):t.memoizedState=sb(t.type,i.memoizedProps,t.pendingProps,i.memoizedState),null;case 27:return Jg(t),i===null&&ie&&(n=t.stateNode=V1(t.type,t.pendingProps,Jr.current),Ui=t,ss=!0,s=Ce,ha(t.type)?(z0=s,Ce=as(n.firstChild)):Ce=s),Li(i,t,t.pendingProps.children,e),vf(i,t),i===null&&(t.flags|=4194304),t.child;case 5:return i===null&&ie&&((s=n=Ce)&&(n=a2(n,t.type,t.pendingProps,ss),n!==null?(t.stateNode=n,Ui=t,Ce=as(n.firstChild),ss=!1,s=!0):s=!1),s||oa(t)),Jg(t),s=t.type,r=t.pendingProps,a=i!==null?i.memoizedProps:null,n=r.children,O0(s,r)?n=null:a!==null&&O0(s,a)&&(t.flags|=32),t.memoizedState!==null&&(s=c_(i,t,MC,null,null,e),du._currentValue=s),vf(i,t),Li(i,t,n,e),t.child;case 6:return i===null&&ie&&((i=e=Ce)&&(e=o2(e,t.pendingProps,ss),e!==null?(t.stateNode=e,Ui=t,Ce=null,i=!0):i=!1),i||oa(t)),null;case 13:return JM(i,t,e);case 4:return Ef(t,t.stateNode.containerInfo),n=t.pendingProps,i===null?t.child=io(t,null,n,e):Li(i,t,n,e),t.child;case 11:return CS(i,t,t.type,t.pendingProps,e);case 7:return Li(i,t,t.pendingProps,e),t.child;case 8:return Li(i,t,t.pendingProps.children,e),t.child;case 12:return Li(i,t,t.pendingProps.children,e),t.child;case 10:return n=t.pendingProps,kr(t,t.type,n.value),Li(i,t,n.children,e),t.child;case 9:return s=t.type._context,n=t.pendingProps.children,eo(t),s=Pi(s),n=n(s),t.flags|=1,Li(i,t,n,e),t.child;case 14:return DS(i,t,t.type,t.pendingProps,e);case 15:return QM(i,t,t.type,t.pendingProps,e);case 19:return jM(i,t,e);case 31:return NC(i,t,e);case 22:return KM(i,t,e,t.pendingProps);case 24:return eo(t),n=Pi(si),i===null?(s=s_(),s===null&&(s=be,r=n_(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=e),s=r),t.memoizedState={parent:n,cache:s},a_(t),kr(t,si,s)):((i.lanes&e)!==0&&(d0(i,t),Qc(t,null,null,e),Zc()),s=i.memoizedState,r=t.memoizedState,s.parent!==n?(s={parent:n,cache:n},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),kr(t,si,n)):(n=r.cache,kr(t,si,n),n!==s.cache&&h0(t,[si],e,!0))),Li(i,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(tt(156,t.tag))}function Qs(i){i.flags|=4}function Ug(i,t,e,n,s){if((t=(i.mode&32)!==0)&&(t=!1),t){if(i.flags|=16777216,(s&335544128)===s)if(i.stateNode.complete)i.flags|=8192;else if(M1())i.flags|=8192;else throw ja=Of,r_}else i.flags&=-16777217}function zS(i,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!q1(t))if(M1())i.flags|=8192;else throw ja=Of,r_}function ef(i,t){t!==null&&(i.flags|=4),i.flags&16384&&(t=i.tag!==22?Tb():536870912,i.lanes|=t,yl|=t)}function Uc(i,t){if(!ie)switch(i.tailMode){case"hidden":t=i.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?i.tail=null:e.sibling=null;break;case"collapsed":e=i.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t||i.tail===null?i.tail=null:i.tail.sibling=null:n.sibling=null}}function Re(i){var t=i.alternate!==null&&i.alternate.child===i.child,e=0,n=0;if(t)for(var s=i.child;s!==null;)e|=s.lanes|s.childLanes,n|=s.subtreeFlags&65011712,n|=s.flags&65011712,s.return=i,s=s.sibling;else for(s=i.child;s!==null;)e|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=i,s=s.sibling;return i.subtreeFlags|=n,i.childLanes=e,t}function OC(i,t,e){var n=t.pendingProps;switch(i_(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return e=t.stateNode,n=null,i!==null&&(n=i.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),rr(si),dl(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(i===null||i.child===null)&&(Wo(t)?Qs(t):i===null||i.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Eg())),Re(t),null;case 26:var s=t.type,r=t.memoizedState;return i===null?(Qs(t),r!==null?(Re(t),zS(t,r)):(Re(t),Ug(t,s,null,n,e))):r?r!==i.memoizedState?(Qs(t),Re(t),zS(t,r)):(Re(t),t.flags&=-16777217):(i=i.memoizedProps,i!==n&&Qs(t),Re(t),Ug(t,s,i,n,e)),null;case 27:if(wf(t),e=Jr.current,s=t.type,i!==null&&t.stateNode!=null)i.memoizedProps!==n&&Qs(t);else{if(!n){if(t.stateNode===null)throw Error(tt(166));return Re(t),null}i=Ls.current,Wo(t)?fS(t,i):(i=V1(s,n,e),t.stateNode=i,Qs(t))}return Re(t),null;case 5:if(wf(t),s=t.type,i!==null&&t.stateNode!=null)i.memoizedProps!==n&&Qs(t);else{if(!n){if(t.stateNode===null)throw Error(tt(166));return Re(t),null}if(r=Ls.current,Wo(t))fS(t,r);else{var a=Yf(Jr.current);switch(r){case 1:r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=a.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof n.is=="string"?a.createElement("select",{is:n.is}):a.createElement("select"),n.multiple?r.multiple=!0:n.size&&(r.size=n.size);break;default:r=typeof n.is=="string"?a.createElement(s,{is:n.is}):a.createElement(s)}}r[Oi]=t,r[dn]=n;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=r;t:switch(Ii(r,s,n),s){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Qs(t)}}return Re(t),Ug(t,t.type,i===null?null:i.memoizedProps,t.pendingProps,e),null;case 6:if(i&&t.stateNode!=null)i.memoizedProps!==n&&Qs(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(tt(166));if(i=Jr.current,Wo(t)){if(i=t.stateNode,e=t.memoizedProps,n=null,s=Ui,s!==null)switch(s.tag){case 27:case 5:n=s.memoizedProps}i[Oi]=t,i=!!(i.nodeValue===e||n!==null&&n.suppressHydrationWarning===!0||F1(i.nodeValue,e)),i||oa(t,!0)}else i=Yf(i).createTextNode(n),i[Oi]=t,t.stateNode=i}return Re(t),null;case 31:if(e=t.memoizedState,i===null||i.memoizedState!==null){if(n=Wo(t),e!==null){if(i===null){if(!n)throw Error(tt(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(tt(557));i[Oi]=t}else to(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),i=!1}else e=Eg(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=e),i=!0;if(!i)return t.flags&256?(En(t),t):(En(t),null);if((t.flags&128)!==0)throw Error(tt(558))}return Re(t),null;case 13:if(n=t.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(s=Wo(t),n!==null&&n.dehydrated!==null){if(i===null){if(!s)throw Error(tt(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(tt(317));s[Oi]=t}else to(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),s=!1}else s=Eg(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(En(t),t):(En(t),null)}return En(t),(t.flags&128)!==0?(t.lanes=e,t):(e=n!==null,i=i!==null&&i.memoizedState!==null,e&&(n=t.child,s=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(s=n.alternate.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==s&&(n.flags|=2048)),e!==i&&e&&(t.child.flags|=8192),ef(t,t.updateQueue),Re(t),null);case 4:return dl(),i===null&&C_(t.stateNode.containerInfo),Re(t),null;case 10:return rr(t.type),Re(t),null;case 19:if(Ei(Ke),n=t.memoizedState,n===null)return Re(t),null;if(s=(t.flags&128)!==0,r=n.rendering,r===null)if(s)Uc(n,!1);else{if(Xe!==0||i!==null&&(i.flags&128)!==0)for(i=t.child;i!==null;){if(r=Pf(i),r!==null){for(t.flags|=128,Uc(n,!1),i=r.updateQueue,t.updateQueue=i,ef(t,i),t.subtreeFlags=0,i=e,e=t.child;e!==null;)tM(e,i),e=e.sibling;return we(Ke,Ke.current&1|2),ie&&$s(t,n.treeForkCount),t.child}i=i.sibling}n.tail!==null&&Rn()>Gf&&(t.flags|=128,s=!0,Uc(n,!1),t.lanes=4194304)}else{if(!s)if(i=Pf(r),i!==null){if(t.flags|=128,s=!0,i=i.updateQueue,t.updateQueue=i,ef(t,i),Uc(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!ie)return Re(t),null}else 2*Rn()-n.renderingStartTime>Gf&&e!==536870912&&(t.flags|=128,s=!0,Uc(n,!1),t.lanes=4194304);n.isBackwards?(r.sibling=t.child,t.child=r):(i=n.last,i!==null?i.sibling=r:t.child=r,n.last=r)}return n.tail!==null?(i=n.tail,n.rendering=i,n.tail=i.sibling,n.renderingStartTime=Rn(),i.sibling=null,e=Ke.current,we(Ke,s?e&1|2:e&1),ie&&$s(t,n.treeForkCount),i):(Re(t),null);case 22:case 23:return En(t),o_(),n=t.memoizedState!==null,i!==null?i.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(e&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),e=t.updateQueue,e!==null&&ef(t,e.retryQueue),e=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==e&&(t.flags|=2048),i!==null&&Ei(Ja),null;case 24:return e=null,i!==null&&(e=i.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),rr(si),Re(t),null;case 25:return null;case 30:return null}throw Error(tt(156,t.tag))}function UC(i,t){switch(i_(t),t.tag){case 1:return i=t.flags,i&65536?(t.flags=i&-65537|128,t):null;case 3:return rr(si),dl(),i=t.flags,(i&65536)!==0&&(i&128)===0?(t.flags=i&-65537|128,t):null;case 26:case 27:case 5:return wf(t),null;case 31:if(t.memoizedState!==null){if(En(t),t.alternate===null)throw Error(tt(340));to()}return i=t.flags,i&65536?(t.flags=i&-65537|128,t):null;case 13:if(En(t),i=t.memoizedState,i!==null&&i.dehydrated!==null){if(t.alternate===null)throw Error(tt(340));to()}return i=t.flags,i&65536?(t.flags=i&-65537|128,t):null;case 19:return Ei(Ke),null;case 4:return dl(),null;case 10:return rr(t.type),null;case 22:case 23:return En(t),o_(),i!==null&&Ei(Ja),i=t.flags,i&65536?(t.flags=i&-65537|128,t):null;case 24:return rr(si),null;case 25:return null;default:return null}}function t1(i,t){switch(i_(t),t.tag){case 3:rr(si),dl();break;case 26:case 27:case 5:wf(t);break;case 4:dl();break;case 31:t.memoizedState!==null&&En(t);break;case 13:En(t);break;case 19:Ei(Ke);break;case 10:rr(t.type);break;case 22:case 23:En(t),o_(),i!==null&&Ei(Ja);break;case 24:rr(si)}}function Tu(i,t){try{var e=t.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var s=n.next;e=s;do{if((e.tag&i)===i){n=void 0;var r=e.create,a=e.inst;n=r(),a.destroy=n}e=e.next}while(e!==s)}}catch(o){ge(t,t.return,o)}}function la(i,t,e){try{var n=t.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var r=s.next;n=r;do{if((n.tag&i)===i){var a=n.inst,o=a.destroy;if(o!==void 0){a.destroy=void 0,s=t;var l=e,c=o;try{c()}catch(u){ge(s,l,u)}}}n=n.next}while(n!==r)}}catch(u){ge(t,t.return,u)}}function e1(i){var t=i.updateQueue;if(t!==null){var e=i.stateNode;try{uM(t,e)}catch(n){ge(i,i.return,n)}}}function i1(i,t,e){e.props=so(i.type,i.memoizedProps),e.state=i.memoizedState;try{e.componentWillUnmount()}catch(n){ge(i,t,n)}}function Jc(i,t){try{var e=i.ref;if(e!==null){switch(i.tag){case 26:case 27:case 5:var n=i.stateNode;break;case 30:n=i.stateNode;break;default:n=i.stateNode}typeof e=="function"?i.refCleanup=e(n):e.current=n}}catch(s){ge(i,t,s)}}function Ns(i,t){var e=i.ref,n=i.refCleanup;if(e!==null)if(typeof n=="function")try{n()}catch(s){ge(i,t,s)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(s){ge(i,t,s)}else e.current=null}function n1(i){var t=i.type,e=i.memoizedProps,n=i.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&n.focus();break t;case"img":e.src?n.src=e.src:e.srcSet&&(n.srcset=e.srcSet)}}catch(s){ge(i,i.return,s)}}function Pg(i,t,e){try{var n=i.stateNode;t2(n,i.type,e,t),n[dn]=t}catch(s){ge(i,i.return,s)}}function s1(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&ha(i.type)||i.tag===4}function Ig(i){t:for(;;){for(;i.sibling===null;){if(i.return===null||s1(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&ha(i.type)||i.flags&2||i.child===null||i.tag===4)continue t;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function T0(i,t,e){var n=i.tag;if(n===5||n===6)i=i.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(i,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(i),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=ir));else if(n!==4&&(n===27&&ha(i.type)&&(e=i.stateNode,t=null),i=i.child,i!==null))for(T0(i,t,e),i=i.sibling;i!==null;)T0(i,t,e),i=i.sibling}function Hf(i,t,e){var n=i.tag;if(n===5||n===6)i=i.stateNode,t?e.insertBefore(i,t):e.appendChild(i);else if(n!==4&&(n===27&&ha(i.type)&&(e=i.stateNode),i=i.child,i!==null))for(Hf(i,t,e),i=i.sibling;i!==null;)Hf(i,t,e),i=i.sibling}function r1(i){var t=i.stateNode,e=i.memoizedProps;try{for(var n=i.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Ii(t,n,e),t[Oi]=i,t[dn]=e}catch(r){ge(i,i.return,r)}}var tr=!1,ni=!1,zg=!1,BS=typeof WeakSet=="function"?WeakSet:Set,Mi=null;function PC(i,t){if(i=i.containerInfo,N0=Jf,i=qb(i),J0(i)){if("selectionStart"in i)var e={start:i.selectionStart,end:i.selectionEnd};else t:{e=(e=i.ownerDocument)&&e.defaultView||window;var n=e.getSelection&&e.getSelection();if(n&&n.rangeCount!==0){e=n.anchorNode;var s=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{e.nodeType,r.nodeType}catch{e=null;break t}var a=0,o=-1,l=-1,c=0,u=0,f=i,h=null;e:for(;;){for(var d;f!==e||s!==0&&f.nodeType!==3||(o=a+s),f!==r||n!==0&&f.nodeType!==3||(l=a+n),f.nodeType===3&&(a+=f.nodeValue.length),(d=f.firstChild)!==null;)h=f,f=d;for(;;){if(f===i)break e;if(h===e&&++c===s&&(o=a),h===r&&++u===n&&(l=a),(d=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=d}e=o===-1||l===-1?null:{start:o,end:l}}else e=null}e=e||{start:0,end:0}}else e=null;for(L0={focusedElem:i,selectionRange:e},Jf=!1,Mi=t;Mi!==null;)if(t=Mi,i=t.child,(t.subtreeFlags&1028)!==0&&i!==null)i.return=t,Mi=i;else for(;Mi!==null;){switch(t=Mi,r=t.alternate,i=t.flags,t.tag){case 0:if((i&4)!==0&&(i=t.updateQueue,i=i!==null?i.events:null,i!==null))for(e=0;e<i.length;e++)s=i[e],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((i&1024)!==0&&r!==null){i=void 0,e=t,s=r.memoizedProps,r=r.memoizedState,n=e.stateNode;try{var _=so(e.type,s);i=n.getSnapshotBeforeUpdate(_,r),n.__reactInternalSnapshotBeforeUpdate=i}catch(v){ge(e,e.return,v)}}break;case 3:if((i&1024)!==0){if(i=t.stateNode.containerInfo,e=i.nodeType,e===9)U0(i);else if(e===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":U0(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(tt(163))}if(i=t.sibling,i!==null){i.return=t.return,Mi=i;break}Mi=t.return}}function a1(i,t,e){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Js(i,e),n&4&&Tu(5,e);break;case 1:if(Js(i,e),n&4)if(i=e.stateNode,t===null)try{i.componentDidMount()}catch(a){ge(e,e.return,a)}else{var s=so(e.type,t.memoizedProps);t=t.memoizedState;try{i.componentDidUpdate(s,t,i.__reactInternalSnapshotBeforeUpdate)}catch(a){ge(e,e.return,a)}}n&64&&e1(e),n&512&&Jc(e,e.return);break;case 3:if(Js(i,e),n&64&&(i=e.updateQueue,i!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{uM(i,t)}catch(a){ge(e,e.return,a)}}break;case 27:t===null&&n&4&&r1(e);case 26:case 5:Js(i,e),t===null&&n&4&&n1(e),n&512&&Jc(e,e.return);break;case 12:Js(i,e);break;case 31:Js(i,e),n&4&&c1(i,e);break;case 13:Js(i,e),n&4&&u1(i,e),n&64&&(i=e.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(e=WC.bind(null,e),l2(i,e))));break;case 22:if(n=e.memoizedState!==null||tr,!n){t=t!==null&&t.memoizedState!==null||ni,s=tr;var r=ni;tr=n,(ni=t)&&!r?js(i,e,(e.subtreeFlags&8772)!==0):Js(i,e),tr=s,ni=r}break;case 30:break;default:Js(i,e)}}function o1(i){var t=i.alternate;t!==null&&(i.alternate=null,o1(t)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(t=i.stateNode,t!==null&&X0(t)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Ie=null,un=!1;function Ks(i,t,e){for(e=e.child;e!==null;)l1(i,t,e),e=e.sibling}function l1(i,t,e){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(_u,e)}catch{}switch(e.tag){case 26:ni||Ns(e,t),Ks(i,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:ni||Ns(e,t);var n=Ie,s=un;ha(e.type)&&(Ie=e.stateNode,un=!1),Ks(i,t,e),eu(e.stateNode),Ie=n,un=s;break;case 5:ni||Ns(e,t);case 6:if(n=Ie,s=un,Ie=null,Ks(i,t,e),Ie=n,un=s,Ie!==null)if(un)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(e.stateNode)}catch(r){ge(e,t,r)}else try{Ie.removeChild(e.stateNode)}catch(r){ge(e,t,r)}break;case 18:Ie!==null&&(un?(i=Ie,$S(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.stateNode),Ml(i)):$S(Ie,e.stateNode));break;case 4:n=Ie,s=un,Ie=e.stateNode.containerInfo,un=!0,Ks(i,t,e),Ie=n,un=s;break;case 0:case 11:case 14:case 15:la(2,e,t),ni||la(4,e,t),Ks(i,t,e);break;case 1:ni||(Ns(e,t),n=e.stateNode,typeof n.componentWillUnmount=="function"&&i1(e,t,n)),Ks(i,t,e);break;case 21:Ks(i,t,e);break;case 22:ni=(n=ni)||e.memoizedState!==null,Ks(i,t,e),ni=n;break;default:Ks(i,t,e)}}function c1(i,t){if(t.memoizedState===null&&(i=t.alternate,i!==null&&(i=i.memoizedState,i!==null))){i=i.dehydrated;try{Ml(i)}catch(e){ge(t,t.return,e)}}}function u1(i,t){if(t.memoizedState===null&&(i=t.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Ml(i)}catch(e){ge(t,t.return,e)}}function IC(i){switch(i.tag){case 31:case 13:case 19:var t=i.stateNode;return t===null&&(t=i.stateNode=new BS),t;case 22:return i=i.stateNode,t=i._retryCache,t===null&&(t=i._retryCache=new BS),t;default:throw Error(tt(435,i.tag))}}function nf(i,t){var e=IC(i);t.forEach(function(n){if(!e.has(n)){e.add(n);var s=XC.bind(null,i,n);n.then(s,s)}})}function ln(i,t){var e=t.deletions;if(e!==null)for(var n=0;n<e.length;n++){var s=e[n],r=i,a=t,o=a;t:for(;o!==null;){switch(o.tag){case 27:if(ha(o.type)){Ie=o.stateNode,un=!1;break t}break;case 5:Ie=o.stateNode,un=!1;break t;case 3:case 4:Ie=o.stateNode.containerInfo,un=!0;break t}o=o.return}if(Ie===null)throw Error(tt(160));l1(r,a,s),Ie=null,un=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)h1(t,i),t=t.sibling}var gs=null;function h1(i,t){var e=i.alternate,n=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:ln(t,i),cn(i),n&4&&(la(3,i,i.return),Tu(3,i),la(5,i,i.return));break;case 1:ln(t,i),cn(i),n&512&&(ni||e===null||Ns(e,e.return)),n&64&&tr&&(i=i.updateQueue,i!==null&&(n=i.callbacks,n!==null&&(e=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=e===null?n:e.concat(n))));break;case 26:var s=gs;if(ln(t,i),cn(i),n&512&&(ni||e===null||Ns(e,e.return)),n&4){var r=e!==null?e.memoizedState:null;if(n=i.memoizedState,e===null)if(n===null)if(i.stateNode===null){t:{n=i.type,e=i.memoizedProps,s=s.ownerDocument||s;e:switch(n){case"title":r=s.getElementsByTagName("title")[0],(!r||r[xu]||r[Oi]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(n),s.head.insertBefore(r,s.querySelector("head > title"))),Ii(r,n,e),r[Oi]=i,Ti(r),n=r;break t;case"link":var a=ab("link","href",s).get(n+(e.href||""));if(a){for(var o=0;o<a.length;o++)if(r=a[o],r.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&r.getAttribute("rel")===(e.rel==null?null:e.rel)&&r.getAttribute("title")===(e.title==null?null:e.title)&&r.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){a.splice(o,1);break e}}r=s.createElement(n),Ii(r,n,e),s.head.appendChild(r);break;case"meta":if(a=ab("meta","content",s).get(n+(e.content||""))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute("content")===(e.content==null?null:""+e.content)&&r.getAttribute("name")===(e.name==null?null:e.name)&&r.getAttribute("property")===(e.property==null?null:e.property)&&r.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&r.getAttribute("charset")===(e.charSet==null?null:e.charSet)){a.splice(o,1);break e}}r=s.createElement(n),Ii(r,n,e),s.head.appendChild(r);break;default:throw Error(tt(468,n))}r[Oi]=i,Ti(r),n=r}i.stateNode=n}else ob(s,i.type,i.stateNode);else i.stateNode=rb(s,n,i.memoizedProps);else r!==n?(r===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):r.count--,n===null?ob(s,i.type,i.stateNode):rb(s,n,i.memoizedProps)):n===null&&i.stateNode!==null&&Pg(i,i.memoizedProps,e.memoizedProps)}break;case 27:ln(t,i),cn(i),n&512&&(ni||e===null||Ns(e,e.return)),e!==null&&n&4&&Pg(i,i.memoizedProps,e.memoizedProps);break;case 5:if(ln(t,i),cn(i),n&512&&(ni||e===null||Ns(e,e.return)),i.flags&32){s=i.stateNode;try{ml(s,"")}catch(_){ge(i,i.return,_)}}n&4&&i.stateNode!=null&&(s=i.memoizedProps,Pg(i,s,e!==null?e.memoizedProps:s)),n&1024&&(zg=!0);break;case 6:if(ln(t,i),cn(i),n&4){if(i.stateNode===null)throw Error(tt(162));n=i.memoizedProps,e=i.stateNode;try{e.nodeValue=n}catch(_){ge(i,i.return,_)}}break;case 3:if(Sf=null,s=gs,gs=Zf(t.containerInfo),ln(t,i),gs=s,cn(i),n&4&&e!==null&&e.memoizedState.isDehydrated)try{Ml(t.containerInfo)}catch(_){ge(i,i.return,_)}zg&&(zg=!1,f1(i));break;case 4:n=gs,gs=Zf(i.stateNode.containerInfo),ln(t,i),cn(i),gs=n;break;case 12:ln(t,i),cn(i);break;case 31:ln(t,i),cn(i),n&4&&(n=i.updateQueue,n!==null&&(i.updateQueue=null,nf(i,n)));break;case 13:ln(t,i),cn(i),i.child.flags&8192&&i.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(ud=Rn()),n&4&&(n=i.updateQueue,n!==null&&(i.updateQueue=null,nf(i,n)));break;case 22:s=i.memoizedState!==null;var l=e!==null&&e.memoizedState!==null,c=tr,u=ni;if(tr=c||s,ni=u||l,ln(t,i),ni=u,tr=c,cn(i),n&8192)t:for(t=i.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(e===null||l||tr||ni||Za(i)),e=null,t=i;;){if(t.tag===5||t.tag===26){if(e===null){l=e=t;try{if(r=l.stateNode,s)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{o=l.stateNode;var f=l.memoizedProps.style,h=f!=null&&f.hasOwnProperty("display")?f.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(_){ge(l,l.return,_)}}}else if(t.tag===6){if(e===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){ge(l,l.return,_)}}}else if(t.tag===18){if(e===null){l=t;try{var d=l.stateNode;s?tb(d,!0):tb(l.stateNode,!1)}catch(_){ge(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===i)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break t;for(;t.sibling===null;){if(t.return===null||t.return===i)break t;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=i.updateQueue,n!==null&&(e=n.retryQueue,e!==null&&(n.retryQueue=null,nf(i,e))));break;case 19:ln(t,i),cn(i),n&4&&(n=i.updateQueue,n!==null&&(i.updateQueue=null,nf(i,n)));break;case 30:break;case 21:break;default:ln(t,i),cn(i)}}function cn(i){var t=i.flags;if(t&2){try{for(var e,n=i.return;n!==null;){if(s1(n)){e=n;break}n=n.return}if(e==null)throw Error(tt(160));switch(e.tag){case 27:var s=e.stateNode,r=Ig(i);Hf(i,r,s);break;case 5:var a=e.stateNode;e.flags&32&&(ml(a,""),e.flags&=-33);var o=Ig(i);Hf(i,o,a);break;case 3:case 4:var l=e.stateNode.containerInfo,c=Ig(i);T0(i,c,l);break;default:throw Error(tt(161))}}catch(u){ge(i,i.return,u)}i.flags&=-3}t&4096&&(i.flags&=-4097)}function f1(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var t=i;f1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),i=i.sibling}}function Js(i,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)a1(i,t.alternate,t),t=t.sibling}function Za(i){for(i=i.child;i!==null;){var t=i;switch(t.tag){case 0:case 11:case 14:case 15:la(4,t,t.return),Za(t);break;case 1:Ns(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&i1(t,t.return,e),Za(t);break;case 27:eu(t.stateNode);case 26:case 5:Ns(t,t.return),Za(t);break;case 22:t.memoizedState===null&&Za(t);break;case 30:Za(t);break;default:Za(t)}i=i.sibling}}function js(i,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,s=i,r=t,a=r.flags;switch(r.tag){case 0:case 11:case 15:js(s,r,e),Tu(4,r);break;case 1:if(js(s,r,e),n=r,s=n.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){ge(n,n.return,c)}if(n=r,s=n.updateQueue,s!==null){var o=n.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)cM(l[s],o)}catch(c){ge(n,n.return,c)}}e&&a&64&&e1(r),Jc(r,r.return);break;case 27:r1(r);case 26:case 5:js(s,r,e),e&&n===null&&a&4&&n1(r),Jc(r,r.return);break;case 12:js(s,r,e);break;case 31:js(s,r,e),e&&a&4&&c1(s,r);break;case 13:js(s,r,e),e&&a&4&&u1(s,r);break;case 22:r.memoizedState===null&&js(s,r,e),Jc(r,r.return);break;case 30:break;default:js(s,r,e)}t=t.sibling}}function M_(i,t){var e=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==e&&(i!=null&&i.refCount++,e!=null&&bu(e))}function T_(i,t){i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&bu(i))}function ms(i,t,e,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)d1(i,t,e,n),t=t.sibling}function d1(i,t,e,n){var s=t.flags;switch(t.tag){case 0:case 11:case 15:ms(i,t,e,n),s&2048&&Tu(9,t);break;case 1:ms(i,t,e,n);break;case 3:ms(i,t,e,n),s&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&bu(i)));break;case 12:if(s&2048){ms(i,t,e,n),i=t.stateNode;try{var r=t.memoizedProps,a=r.id,o=r.onPostCommit;typeof o=="function"&&o(a,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(l){ge(t,t.return,l)}}else ms(i,t,e,n);break;case 31:ms(i,t,e,n);break;case 13:ms(i,t,e,n);break;case 23:break;case 22:r=t.stateNode,a=t.alternate,t.memoizedState!==null?r._visibility&2?ms(i,t,e,n):jc(i,t):r._visibility&2?ms(i,t,e,n):(r._visibility|=2,qo(i,t,e,n,(t.subtreeFlags&10256)!==0||!1)),s&2048&&M_(a,t);break;case 24:ms(i,t,e,n),s&2048&&T_(t.alternate,t);break;default:ms(i,t,e,n)}}function qo(i,t,e,n,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=i,a=t,o=e,l=n,c=a.flags;switch(a.tag){case 0:case 11:case 15:qo(r,a,o,l,s),Tu(8,a);break;case 23:break;case 22:var u=a.stateNode;a.memoizedState!==null?u._visibility&2?qo(r,a,o,l,s):jc(r,a):(u._visibility|=2,qo(r,a,o,l,s)),s&&c&2048&&M_(a.alternate,a);break;case 24:qo(r,a,o,l,s),s&&c&2048&&T_(a.alternate,a);break;default:qo(r,a,o,l,s)}t=t.sibling}}function jc(i,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=i,n=t,s=n.flags;switch(n.tag){case 22:jc(e,n),s&2048&&M_(n.alternate,n);break;case 24:jc(e,n),s&2048&&T_(n.alternate,n);break;default:jc(e,n)}t=t.sibling}}var kc=8192;function Xo(i,t,e){if(i.subtreeFlags&kc)for(i=i.child;i!==null;)p1(i,t,e),i=i.sibling}function p1(i,t,e){switch(i.tag){case 26:Xo(i,t,e),i.flags&kc&&i.memoizedState!==null&&x2(e,gs,i.memoizedState,i.memoizedProps);break;case 5:Xo(i,t,e);break;case 3:case 4:var n=gs;gs=Zf(i.stateNode.containerInfo),Xo(i,t,e),gs=n;break;case 22:i.memoizedState===null&&(n=i.alternate,n!==null&&n.memoizedState!==null?(n=kc,kc=16777216,Xo(i,t,e),kc=n):Xo(i,t,e));break;default:Xo(i,t,e)}}function m1(i){var t=i.alternate;if(t!==null&&(i=t.child,i!==null)){t.child=null;do t=i.sibling,i.sibling=null,i=t;while(i!==null)}}function Pc(i){var t=i.deletions;if((i.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var n=t[e];Mi=n,_1(n,i)}m1(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)g1(i),i=i.sibling}function g1(i){switch(i.tag){case 0:case 11:case 15:Pc(i),i.flags&2048&&la(9,i,i.return);break;case 3:Pc(i);break;case 12:Pc(i);break;case 22:var t=i.stateNode;i.memoizedState!==null&&t._visibility&2&&(i.return===null||i.return.tag!==13)?(t._visibility&=-3,yf(i)):Pc(i);break;default:Pc(i)}}function yf(i){var t=i.deletions;if((i.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var n=t[e];Mi=n,_1(n,i)}m1(i)}for(i=i.child;i!==null;){switch(t=i,t.tag){case 0:case 11:case 15:la(8,t,t.return),yf(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,yf(t));break;default:yf(t)}i=i.sibling}}function _1(i,t){for(;Mi!==null;){var e=Mi;switch(e.tag){case 0:case 11:case 15:la(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var n=e.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:bu(e.memoizedState.cache)}if(n=e.child,n!==null)n.return=e,Mi=n;else t:for(e=i;Mi!==null;){n=Mi;var s=n.sibling,r=n.return;if(o1(n),n===e){Mi=null;break t}if(s!==null){s.return=r,Mi=s;break t}Mi=r}}}var zC={getCacheForType:function(i){var t=Pi(si),e=t.data.get(i);return e===void 0&&(e=i(),t.data.set(i,e)),e},cacheSignal:function(){return Pi(si).controller.signal}},BC=typeof WeakMap=="function"?WeakMap:Map,ce=0,be=null,Jt=null,ee=0,me=0,Tn=null,Zr=!1,Rl=!1,E_=!1,hr=0,Xe=0,ca=0,$a=0,w_=0,An=0,yl=0,$c=null,hn=null,E0=!1,ud=0,v1=0,Gf=1/0,kf=null,ea=null,fi=0,ia=null,xl=null,ar=0,w0=0,A0=null,y1=null,tu=0,R0=null;function Nn(){return(ce&2)!==0&&ee!==0?ee&-ee:Pt.T!==null?R_():Rb()}function x1(){if(An===0)if((ee&536870912)===0||ie){var i=qh;qh<<=1,(qh&3932160)===0&&(qh=262144),An=i}else An=536870912;return i=On.current,i!==null&&(i.flags|=32),An}function fn(i,t,e){(i===be&&(me===2||me===9)||i.cancelPendingCommit!==null)&&(Sl(i,0),Qr(i,ee,An,!1)),yu(i,e),((ce&2)===0||i!==be)&&(i===be&&((ce&2)===0&&($a|=e),Xe===4&&Qr(i,ee,An,!1)),Us(i))}function S1(i,t,e){if((ce&6)!==0)throw Error(tt(327));var n=!e&&(t&127)===0&&(t&i.expiredLanes)===0||vu(i,t),s=n?GC(i,t):Bg(i,t,!0),r=n;do{if(s===0){Rl&&!n&&Qr(i,t,0,!1);break}else{if(e=i.current.alternate,r&&!FC(e)){s=Bg(i,t,!1),r=!1;continue}if(s===2){if(r=t,i.errorRecoveryDisabledLanes&r)var a=0;else a=i.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;t:{var o=i;s=$c;var l=o.current.memoizedState.isDehydrated;if(l&&(Sl(o,a).flags|=256),a=Bg(o,a,!1),a!==2){if(E_&&!l){o.errorRecoveryDisabledLanes|=r,$a|=r,s=4;break t}r=hn,hn=s,r!==null&&(hn===null?hn=r:hn.push.apply(hn,r))}s=a}if(r=!1,s!==2)continue}}if(s===1){Sl(i,0),Qr(i,t,0,!0);break}t:{switch(n=i,r=s,r){case 0:case 1:throw Error(tt(345));case 4:if((t&4194048)!==t)break;case 6:Qr(n,t,An,!Zr);break t;case 2:hn=null;break;case 3:case 5:break;default:throw Error(tt(329))}if((t&62914560)===t&&(s=ud+300-Rn(),10<s)){if(Qr(n,t,An,!Zr),$f(n,0,!0)!==0)break t;ar=t,n.timeoutHandle=G1(FS.bind(null,n,e,hn,kf,E0,t,An,$a,yl,Zr,r,"Throttled",-0,0),s);break t}FS(n,e,hn,kf,E0,t,An,$a,yl,Zr,r,null,-0,0)}}break}while(!0);Us(i)}function FS(i,t,e,n,s,r,a,o,l,c,u,f,h,d){if(i.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ir},p1(t,r,f);var _=(r&62914560)===r?ud-Rn():(r&4194048)===r?v1-Rn():0;if(_=S2(f,_),_!==null){ar=r,i.cancelPendingCommit=_(GS.bind(null,i,t,r,e,n,s,a,o,l,u,f,null,h,d)),Qr(i,r,a,!c);return}}GS(i,t,r,e,n,s,a,o,l)}function FC(i){for(var t=i;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var n=0;n<e.length;n++){var s=e[n],r=s.getSnapshot;s=s.value;try{if(!Ln(r(),s))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===i)break;for(;t.sibling===null;){if(t.return===null||t.return===i)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qr(i,t,e,n){t&=~w_,t&=~$a,i.suspendedLanes|=t,i.pingedLanes&=~t,n&&(i.warmLanes|=t),n=i.expirationTimes;for(var s=t;0<s;){var r=31-Dn(s),a=1<<r;n[r]=-1,s&=~a}e!==0&&Eb(i,e,t)}function hd(){return(ce&6)===0?(Eu(0,!1),!1):!0}function A_(){if(Jt!==null){if(me===0)var i=Jt.return;else i=Jt,nr=co=null,f_(i),ul=null,lu=0,i=Jt;for(;i!==null;)t1(i.alternate,i),i=i.return;Jt=null}}function Sl(i,t){var e=i.timeoutHandle;e!==-1&&(i.timeoutHandle=-1,n2(e)),e=i.cancelPendingCommit,e!==null&&(i.cancelPendingCommit=null,e()),ar=0,A_(),be=i,Jt=e=sr(i.current,null),ee=t,me=0,Tn=null,Zr=!1,Rl=vu(i,t),E_=!1,yl=An=w_=$a=ca=Xe=0,hn=$c=null,E0=!1,(t&8)!==0&&(t|=t&32);var n=i.entangledLanes;if(n!==0)for(i=i.entanglements,n&=t;0<n;){var s=31-Dn(n),r=1<<s;t|=i[s],n&=~r}return hr=t,nd(),e}function b1(i,t){Xt=null,Pt.H=uu,t===Al||t===rd?(t=_S(),me=3):t===r_?(t=_S(),me=4):me=t===S_?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tn=t,Jt===null&&(Xe=1,Bf(i,ns(t,i.current)))}function M1(){var i=On.current;return i===null?!0:(ee&4194048)===ee?rs===null:(ee&62914560)===ee||(ee&536870912)!==0?i===rs:!1}function T1(){var i=Pt.H;return Pt.H=uu,i===null?uu:i}function E1(){var i=Pt.A;return Pt.A=zC,i}function Vf(){Xe=4,Zr||(ee&4194048)!==ee&&On.current!==null||(Rl=!0),(ca&134217727)===0&&($a&134217727)===0||be===null||Qr(be,ee,An,!1)}function Bg(i,t,e){var n=ce;ce|=2;var s=T1(),r=E1();(be!==i||ee!==t)&&(kf=null,Sl(i,t)),t=!1;var a=Xe;t:do try{if(me!==0&&Jt!==null){var o=Jt,l=Tn;switch(me){case 8:A_(),a=6;break t;case 3:case 2:case 9:case 6:On.current===null&&(t=!0);var c=me;if(me=0,Tn=null,rl(i,o,l,c),e&&Rl){a=0;break t}break;default:c=me,me=0,Tn=null,rl(i,o,l,c)}}HC(),a=Xe;break}catch(u){b1(i,u)}while(!0);return t&&i.shellSuspendCounter++,nr=co=null,ce=n,Pt.H=s,Pt.A=r,Jt===null&&(be=null,ee=0,nd()),a}function HC(){for(;Jt!==null;)w1(Jt)}function GC(i,t){var e=ce;ce|=2;var n=T1(),s=E1();be!==i||ee!==t?(kf=null,Gf=Rn()+500,Sl(i,t)):Rl=vu(i,t);t:do try{if(me!==0&&Jt!==null){t=Jt;var r=Tn;e:switch(me){case 1:me=0,Tn=null,rl(i,t,r,1);break;case 2:case 9:if(gS(r)){me=0,Tn=null,HS(t);break}t=function(){me!==2&&me!==9||be!==i||(me=7),Us(i)},r.then(t,t);break t;case 3:me=7;break t;case 4:me=5;break t;case 7:gS(r)?(me=0,Tn=null,HS(t)):(me=0,Tn=null,rl(i,t,r,7));break;case 5:var a=null;switch(Jt.tag){case 26:a=Jt.memoizedState;case 5:case 27:var o=Jt;if(a?q1(a):o.stateNode.complete){me=0,Tn=null;var l=o.sibling;if(l!==null)Jt=l;else{var c=o.return;c!==null?(Jt=c,fd(c)):Jt=null}break e}}me=0,Tn=null,rl(i,t,r,5);break;case 6:me=0,Tn=null,rl(i,t,r,6);break;case 8:A_(),Xe=6;break t;default:throw Error(tt(462))}}kC();break}catch(u){b1(i,u)}while(!0);return nr=co=null,Pt.H=n,Pt.A=s,ce=e,Jt!==null?0:(be=null,ee=0,nd(),Xe)}function kC(){for(;Jt!==null&&!hR();)w1(Jt)}function w1(i){var t=$M(i.alternate,i,hr);i.memoizedProps=i.pendingProps,t===null?fd(i):Jt=t}function HS(i){var t=i,e=t.alternate;switch(t.tag){case 15:case 0:t=OS(e,t,t.pendingProps,t.type,void 0,ee);break;case 11:t=OS(e,t,t.pendingProps,t.type.render,t.ref,ee);break;case 5:f_(t);default:t1(e,t),t=Jt=tM(t,hr),t=$M(e,t,hr)}i.memoizedProps=i.pendingProps,t===null?fd(i):Jt=t}function rl(i,t,e,n){nr=co=null,f_(t),ul=null,lu=0;var s=t.return;try{if(DC(i,s,t,e,ee)){Xe=1,Bf(i,ns(e,i.current)),Jt=null;return}}catch(r){if(s!==null)throw Jt=s,r;Xe=1,Bf(i,ns(e,i.current)),Jt=null;return}t.flags&32768?(ie||n===1?i=!0:Rl||(ee&536870912)!==0?i=!1:(Zr=i=!0,(n===2||n===9||n===3||n===6)&&(n=On.current,n!==null&&n.tag===13&&(n.flags|=16384))),A1(t,i)):fd(t)}function fd(i){var t=i;do{if((t.flags&32768)!==0){A1(t,Zr);return}i=t.return;var e=OC(t.alternate,t,hr);if(e!==null){Jt=e;return}if(t=t.sibling,t!==null){Jt=t;return}Jt=t=i}while(t!==null);Xe===0&&(Xe=5)}function A1(i,t){do{var e=UC(i.alternate,i);if(e!==null){e.flags&=32767,Jt=e;return}if(e=i.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(i=i.sibling,i!==null)){Jt=i;return}Jt=i=e}while(i!==null);Xe=6,Jt=null}function GS(i,t,e,n,s,r,a,o,l){i.cancelPendingCommit=null;do dd();while(fi!==0);if((ce&6)!==0)throw Error(tt(327));if(t!==null){if(t===i.current)throw Error(tt(177));if(r=t.lanes|t.childLanes,r|=j0,SR(i,e,r,a,o,l),i===be&&(Jt=be=null,ee=0),xl=t,ia=i,ar=e,w0=r,A0=s,y1=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,qC(Af,function(){return L1(),null})):(i.callbackNode=null,i.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=Pt.T,Pt.T=null,s=ue.p,ue.p=2,a=ce,ce|=4;try{PC(i,t,e)}finally{ce=a,ue.p=s,Pt.T=n}}fi=1,R1(),C1(),D1()}}function R1(){if(fi===1){fi=0;var i=ia,t=xl,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=Pt.T,Pt.T=null;var n=ue.p;ue.p=2;var s=ce;ce|=4;try{h1(t,i);var r=L0,a=qb(i.containerInfo),o=r.focusedElem,l=r.selectionRange;if(a!==o&&o&&o.ownerDocument&&Xb(o.ownerDocument.documentElement,o)){if(l!==null&&J0(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var f=o.ownerDocument||document,h=f&&f.defaultView||window;if(h.getSelection){var d=h.getSelection(),_=o.textContent.length,v=Math.min(l.start,_),m=l.end===void 0?v:Math.min(l.end,_);!d.extend&&v>m&&(a=m,m=v,v=a);var p=cS(o,v),g=cS(o,m);if(p&&g&&(d.rangeCount!==1||d.anchorNode!==p.node||d.anchorOffset!==p.offset||d.focusNode!==g.node||d.focusOffset!==g.offset)){var x=f.createRange();x.setStart(p.node,p.offset),d.removeAllRanges(),v>m?(d.addRange(x),d.extend(g.node,g.offset)):(x.setEnd(g.node,g.offset),d.addRange(x))}}}}for(f=[],d=o;d=d.parentNode;)d.nodeType===1&&f.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var S=f[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Jf=!!N0,L0=N0=null}finally{ce=s,ue.p=n,Pt.T=e}}i.current=t,fi=2}}function C1(){if(fi===2){fi=0;var i=ia,t=xl,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=Pt.T,Pt.T=null;var n=ue.p;ue.p=2;var s=ce;ce|=4;try{a1(i,t.alternate,t)}finally{ce=s,ue.p=n,Pt.T=e}}fi=3}}function D1(){if(fi===4||fi===3){fi=0,fR();var i=ia,t=xl,e=ar,n=y1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?fi=5:(fi=0,xl=ia=null,N1(i,i.pendingLanes));var s=i.pendingLanes;if(s===0&&(ea=null),W0(e),t=t.stateNode,Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(_u,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=Pt.T,s=ue.p,ue.p=2,Pt.T=null;try{for(var r=i.onRecoverableError,a=0;a<n.length;a++){var o=n[a];r(o.value,{componentStack:o.stack})}}finally{Pt.T=t,ue.p=s}}(ar&3)!==0&&dd(),Us(i),s=i.pendingLanes,(e&261930)!==0&&(s&42)!==0?i===R0?tu++:(tu=0,R0=i):tu=0,Eu(0,!1)}}function N1(i,t){(i.pooledCacheLanes&=t)===0&&(t=i.pooledCache,t!=null&&(i.pooledCache=null,bu(t)))}function dd(){return R1(),C1(),D1(),L1()}function L1(){if(fi!==5)return!1;var i=ia,t=w0;w0=0;var e=W0(ar),n=Pt.T,s=ue.p;try{ue.p=32>e?32:e,Pt.T=null,e=A0,A0=null;var r=ia,a=ar;if(fi=0,xl=ia=null,ar=0,(ce&6)!==0)throw Error(tt(331));var o=ce;if(ce|=4,g1(r.current),d1(r,r.current,a,e),ce=o,Eu(0,!1),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(_u,r)}catch{}return!0}finally{ue.p=s,Pt.T=n,N1(i,t)}}function kS(i,t,e){t=ns(e,t),t=S0(i.stateNode,t,2),i=ta(i,t,2),i!==null&&(yu(i,2),Us(i))}function ge(i,t,e){if(i.tag===3)kS(i,i,e);else for(;t!==null;){if(t.tag===3){kS(t,i,e);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ea===null||!ea.has(n))){i=ns(e,i),e=YM(2),n=ta(t,e,2),n!==null&&(ZM(e,n,t,i),yu(n,2),Us(n));break}}t=t.return}}function Fg(i,t,e){var n=i.pingCache;if(n===null){n=i.pingCache=new BC;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(e)||(E_=!0,s.add(e),i=VC.bind(null,i,t,e),t.then(i,i))}function VC(i,t,e){var n=i.pingCache;n!==null&&n.delete(t),i.pingedLanes|=i.suspendedLanes&e,i.warmLanes&=~e,be===i&&(ee&e)===e&&(Xe===4||Xe===3&&(ee&62914560)===ee&&300>Rn()-ud?(ce&2)===0&&Sl(i,0):w_|=e,yl===ee&&(yl=0)),Us(i)}function O1(i,t){t===0&&(t=Tb()),i=lo(i,t),i!==null&&(yu(i,t),Us(i))}function WC(i){var t=i.memoizedState,e=0;t!==null&&(e=t.retryLane),O1(i,e)}function XC(i,t){var e=0;switch(i.tag){case 31:case 13:var n=i.stateNode,s=i.memoizedState;s!==null&&(e=s.retryLane);break;case 19:n=i.stateNode;break;case 22:n=i.stateNode._retryCache;break;default:throw Error(tt(314))}n!==null&&n.delete(t),O1(i,e)}function qC(i,t){return k0(i,t)}var Wf=null,Yo=null,C0=!1,Xf=!1,Hg=!1,Kr=0;function Us(i){i!==Yo&&i.next===null&&(Yo===null?Wf=Yo=i:Yo=Yo.next=i),Xf=!0,C0||(C0=!0,ZC())}function Eu(i,t){if(!Hg&&Xf){Hg=!0;do for(var e=!1,n=Wf;n!==null;){if(!t)if(i!==0){var s=n.pendingLanes;if(s===0)var r=0;else{var a=n.suspendedLanes,o=n.pingedLanes;r=(1<<31-Dn(42|i)+1)-1,r&=s&~(a&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(e=!0,VS(n,r))}else r=ee,r=$f(n,n===be?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||vu(n,r)||(e=!0,VS(n,r));n=n.next}while(e);Hg=!1}}function YC(){U1()}function U1(){Xf=C0=!1;var i=0;Kr!==0&&i2()&&(i=Kr);for(var t=Rn(),e=null,n=Wf;n!==null;){var s=n.next,r=P1(n,t);r===0?(n.next=null,e===null?Wf=s:e.next=s,s===null&&(Yo=e)):(e=n,(i!==0||(r&3)!==0)&&(Xf=!0)),n=s}fi!==0&&fi!==5||Eu(i,!1),Kr!==0&&(Kr=0)}function P1(i,t){for(var e=i.suspendedLanes,n=i.pingedLanes,s=i.expirationTimes,r=i.pendingLanes&-62914561;0<r;){var a=31-Dn(r),o=1<<a,l=s[a];l===-1?((o&e)===0||(o&n)!==0)&&(s[a]=xR(o,t)):l<=t&&(i.expiredLanes|=o),r&=~o}if(t=be,e=ee,e=$f(i,i===t?e:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),n=i.callbackNode,e===0||i===t&&(me===2||me===9)||i.cancelPendingCommit!==null)return n!==null&&n!==null&&mg(n),i.callbackNode=null,i.callbackPriority=0;if((e&3)===0||vu(i,e)){if(t=e&-e,t===i.callbackPriority)return t;switch(n!==null&&mg(n),W0(e)){case 2:case 8:e=bb;break;case 32:e=Af;break;case 268435456:e=Mb;break;default:e=Af}return n=I1.bind(null,i),e=k0(e,n),i.callbackPriority=t,i.callbackNode=e,t}return n!==null&&n!==null&&mg(n),i.callbackPriority=2,i.callbackNode=null,2}function I1(i,t){if(fi!==0&&fi!==5)return i.callbackNode=null,i.callbackPriority=0,null;var e=i.callbackNode;if(dd()&&i.callbackNode!==e)return null;var n=ee;return n=$f(i,i===be?n:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),n===0?null:(S1(i,n,t),P1(i,Rn()),i.callbackNode!=null&&i.callbackNode===e?I1.bind(null,i):null)}function VS(i,t){if(dd())return null;S1(i,t,!0)}function ZC(){s2(function(){(ce&6)!==0?k0(Sb,YC):U1()})}function R_(){if(Kr===0){var i=gl;i===0&&(i=Xh,Xh<<=1,(Xh&261888)===0&&(Xh=256)),Kr=i}return Kr}function WS(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:uf(""+i)}function XS(i,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,i.id&&e.setAttribute("form",i.id),t.parentNode.insertBefore(e,t),i=new FormData(i),e.parentNode.removeChild(e),i}function QC(i,t,e,n,s){if(t==="submit"&&e&&e.stateNode===s){var r=WS((s[dn]||null).action),a=n.submitter;a&&(t=(t=a[dn]||null)?WS(t.formAction):a.getAttribute("formAction"),t!==null&&(r=t,a=null));var o=new td("action","action",null,n,s);i.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Kr!==0){var l=a?XS(s,a):new FormData(s);y0(e,{pending:!0,data:l,method:s.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=a?XS(s,a):new FormData(s),y0(e,{pending:!0,data:l,method:s.method,action:r},r,l))},currentTarget:s}]})}}for(sf=0;sf<o0.length;sf++)rf=o0[sf],qS=rf.toLowerCase(),YS=rf[0].toUpperCase()+rf.slice(1),_s(qS,"on"+YS);var rf,qS,YS,sf;_s(Zb,"onAnimationEnd");_s(Qb,"onAnimationIteration");_s(Kb,"onAnimationStart");_s("dblclick","onDoubleClick");_s("focusin","onFocus");_s("focusout","onBlur");_s(dC,"onTransitionRun");_s(pC,"onTransitionStart");_s(mC,"onTransitionCancel");_s(Jb,"onTransitionEnd");pl("onMouseEnter",["mouseout","mouseover"]);pl("onMouseLeave",["mouseout","mouseover"]);pl("onPointerEnter",["pointerout","pointerover"]);pl("onPointerLeave",["pointerout","pointerover"]);ro("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ro("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ro("onBeforeInput",["compositionend","keypress","textInput","paste"]);ro("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ro("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ro("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hu));function z1(i,t){t=(t&4)!==0;for(var e=0;e<i.length;e++){var n=i[e],s=n.event;n=n.listeners;t:{var r=void 0;if(t)for(var a=n.length-1;0<=a;a--){var o=n[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&s.isPropagationStopped())break t;r=o,s.currentTarget=c;try{r(s)}catch(u){Cf(u)}s.currentTarget=null,r=l}else for(a=0;a<n.length;a++){if(o=n[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&s.isPropagationStopped())break t;r=o,s.currentTarget=c;try{r(s)}catch(u){Cf(u)}s.currentTarget=null,r=l}}}}function Kt(i,t){var e=t[$g];e===void 0&&(e=t[$g]=new Set);var n=i+"__bubble";e.has(n)||(B1(t,i,2,!1),e.add(n))}function Gg(i,t,e){var n=0;t&&(n|=4),B1(e,i,n,t)}var af="_reactListening"+Math.random().toString(36).slice(2);function C_(i){if(!i[af]){i[af]=!0,Cb.forEach(function(e){e!=="selectionchange"&&(KC.has(e)||Gg(e,!1,i),Gg(e,!0,i))});var t=i.nodeType===9?i:i.ownerDocument;t===null||t[af]||(t[af]=!0,Gg("selectionchange",!1,t))}}function B1(i,t,e,n){switch(J1(t)){case 2:var s=T2;break;case 8:s=E2;break;default:s=O_}e=s.bind(null,t,e,i),s=void 0,!s0||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?i.addEventListener(t,e,{capture:!0,passive:s}):i.addEventListener(t,e,!0):s!==void 0?i.addEventListener(t,e,{passive:s}):i.addEventListener(t,e,!1)}function kg(i,t,e,n,s){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)t:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var o=n.stateNode.containerInfo;if(o===s)break;if(a===4)for(a=n.return;a!==null;){var l=a.tag;if((l===3||l===4)&&a.stateNode.containerInfo===s)return;a=a.return}for(;o!==null;){if(a=Ko(o),a===null)return;if(l=a.tag,l===5||l===6||l===26||l===27){n=r=a;continue t}o=o.parentNode}}n=n.return}zb(function(){var c=r,u=Y0(e),f=[];t:{var h=jb.get(i);if(h!==void 0){var d=td,_=i;switch(i){case"keypress":if(ff(e)===0)break t;case"keydown":case"keyup":d=XR;break;case"focusin":_="focus",d=xg;break;case"focusout":_="blur",d=xg;break;case"beforeblur":case"afterblur":d=xg;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=tS;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=OR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=ZR;break;case Zb:case Qb:case Kb:d=IR;break;case Jb:d=KR;break;case"scroll":case"scrollend":d=NR;break;case"wheel":d=jR;break;case"copy":case"cut":case"paste":d=BR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=iS;break;case"toggle":case"beforetoggle":d=tC}var v=(t&4)!==0,m=!v&&(i==="scroll"||i==="scrollend"),p=v?h!==null?h+"Capture":null:h;v=[];for(var g=c,x;g!==null;){var S=g;if(x=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||x===null||p===null||(S=nu(g,p),S!=null&&v.push(fu(g,S,x))),m)break;g=g.return}0<v.length&&(h=new d(h,_,null,e,u),f.push({event:h,listeners:v}))}}if((t&7)===0){t:{if(h=i==="mouseover"||i==="pointerover",d=i==="mouseout"||i==="pointerout",h&&e!==n0&&(_=e.relatedTarget||e.fromElement)&&(Ko(_)||_[Tl]))break t;if((d||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,d?(_=e.relatedTarget||e.toElement,d=c,_=_?Ko(_):null,_!==null&&(m=gu(_),v=_.tag,_!==m||v!==5&&v!==27&&v!==6)&&(_=null)):(d=null,_=c),d!==_)){if(v=tS,S="onMouseLeave",p="onMouseEnter",g="mouse",(i==="pointerout"||i==="pointerover")&&(v=iS,S="onPointerLeave",p="onPointerEnter",g="pointer"),m=d==null?h:Hc(d),x=_==null?h:Hc(_),h=new v(S,g+"leave",d,e,u),h.target=m,h.relatedTarget=x,S=null,Ko(u)===c&&(v=new v(p,g+"enter",_,e,u),v.target=x,v.relatedTarget=m,S=v),m=S,d&&_)e:{for(v=JC,p=d,g=_,x=0,S=p;S;S=v(S))x++;S=0;for(var M=g;M;M=v(M))S++;for(;0<x-S;)p=v(p),x--;for(;0<S-x;)g=v(g),S--;for(;x--;){if(p===g||g!==null&&p===g.alternate){v=p;break e}p=v(p),g=v(g)}v=null}else v=null;d!==null&&ZS(f,h,d,v,!1),_!==null&&m!==null&&ZS(f,m,_,v,!0)}}t:{if(h=c?Hc(c):window,d=h.nodeName&&h.nodeName.toLowerCase(),d==="select"||d==="input"&&h.type==="file")var w=aS;else if(rS(h))if(Vb)w=uC;else{w=lC;var y=oC}else d=h.nodeName,!d||d.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&q0(c.elementType)&&(w=aS):w=cC;if(w&&(w=w(i,c))){kb(f,w,e,u);break t}y&&y(i,h,c),i==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&i0(h,"number",h.value)}switch(y=c?Hc(c):window,i){case"focusin":(rS(y)||y.contentEditable==="true")&&($o=y,r0=c,Xc=null);break;case"focusout":Xc=r0=$o=null;break;case"mousedown":a0=!0;break;case"contextmenu":case"mouseup":case"dragend":a0=!1,uS(f,e,u);break;case"selectionchange":if(fC)break;case"keydown":case"keyup":uS(f,e,u)}var b;if(K0)t:{switch(i){case"compositionstart":var R="onCompositionStart";break t;case"compositionend":R="onCompositionEnd";break t;case"compositionupdate":R="onCompositionUpdate";break t}R=void 0}else jo?Hb(i,e)&&(R="onCompositionEnd"):i==="keydown"&&e.keyCode===229&&(R="onCompositionStart");R&&(Fb&&e.locale!=="ko"&&(jo||R!=="onCompositionStart"?R==="onCompositionEnd"&&jo&&(b=Bb()):(Yr=u,Z0="value"in Yr?Yr.value:Yr.textContent,jo=!0)),y=qf(c,R),0<y.length&&(R=new eS(R,i,null,e,u),f.push({event:R,listeners:y}),b?R.data=b:(b=Gb(e),b!==null&&(R.data=b)))),(b=iC?nC(i,e):sC(i,e))&&(R=qf(c,"onBeforeInput"),0<R.length&&(y=new eS("onBeforeInput","beforeinput",null,e,u),f.push({event:y,listeners:R}),y.data=b)),QC(f,i,c,e,u)}z1(f,t)})}function fu(i,t,e){return{instance:i,listener:t,currentTarget:e}}function qf(i,t){for(var e=t+"Capture",n=[];i!==null;){var s=i,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=nu(i,e),s!=null&&n.unshift(fu(i,s,r)),s=nu(i,t),s!=null&&n.push(fu(i,s,r))),i.tag===3)return n;i=i.return}return[]}function JC(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function ZS(i,t,e,n,s){for(var r=t._reactName,a=[];e!==null&&e!==n;){var o=e,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===n)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=nu(e,r),c!=null&&a.unshift(fu(e,c,l))):s||(c=nu(e,r),c!=null&&a.push(fu(e,c,l)))),e=e.return}a.length!==0&&i.push({event:t,listeners:a})}var jC=/\r\n?/g,$C=/\u0000|\uFFFD/g;function QS(i){return(typeof i=="string"?i:""+i).replace(jC,`
`).replace($C,"")}function F1(i,t){return t=QS(t),QS(i)===t}function _e(i,t,e,n,s,r){switch(e){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||ml(i,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&ml(i,""+n);break;case"className":Zh(i,"class",n);break;case"tabIndex":Zh(i,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Zh(i,e,n);break;case"style":Ib(i,n,r);break;case"data":if(t!=="object"){Zh(i,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||e!=="href")){i.removeAttribute(e);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){i.removeAttribute(e);break}n=uf(""+n),i.setAttribute(e,n);break;case"action":case"formAction":if(typeof n=="function"){i.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(e==="formAction"?(t!=="input"&&_e(i,t,"name",s.name,s,null),_e(i,t,"formEncType",s.formEncType,s,null),_e(i,t,"formMethod",s.formMethod,s,null),_e(i,t,"formTarget",s.formTarget,s,null)):(_e(i,t,"encType",s.encType,s,null),_e(i,t,"method",s.method,s,null),_e(i,t,"target",s.target,s,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){i.removeAttribute(e);break}n=uf(""+n),i.setAttribute(e,n);break;case"onClick":n!=null&&(i.onclick=ir);break;case"onScroll":n!=null&&Kt("scroll",i);break;case"onScrollEnd":n!=null&&Kt("scrollend",i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(tt(61));if(e=n.__html,e!=null){if(s.children!=null)throw Error(tt(60));i.innerHTML=e}}break;case"multiple":i.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":i.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){i.removeAttribute("xlink:href");break}e=uf(""+n),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?i.setAttribute(e,""+n):i.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?i.setAttribute(e,""):i.removeAttribute(e);break;case"capture":case"download":n===!0?i.setAttribute(e,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?i.setAttribute(e,n):i.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?i.setAttribute(e,n):i.removeAttribute(e);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?i.removeAttribute(e):i.setAttribute(e,n);break;case"popover":Kt("beforetoggle",i),Kt("toggle",i),cf(i,"popover",n);break;case"xlinkActuate":Zs(i,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Zs(i,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Zs(i,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Zs(i,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Zs(i,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Zs(i,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Zs(i,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Zs(i,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Zs(i,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":cf(i,"is",n);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=CR.get(e)||e,cf(i,e,n))}}function D0(i,t,e,n,s,r){switch(e){case"style":Ib(i,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(tt(61));if(e=n.__html,e!=null){if(s.children!=null)throw Error(tt(60));i.innerHTML=e}}break;case"children":typeof n=="string"?ml(i,n):(typeof n=="number"||typeof n=="bigint")&&ml(i,""+n);break;case"onScroll":n!=null&&Kt("scroll",i);break;case"onScrollEnd":n!=null&&Kt("scrollend",i);break;case"onClick":n!=null&&(i.onclick=ir);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Db.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(s=e.endsWith("Capture"),t=e.slice(2,s?e.length-7:void 0),r=i[dn]||null,r=r!=null?r[e]:null,typeof r=="function"&&i.removeEventListener(t,r,s),typeof n=="function")){typeof r!="function"&&r!==null&&(e in i?i[e]=null:i.hasAttribute(e)&&i.removeAttribute(e)),i.addEventListener(t,n,s);break t}e in i?i[e]=n:n===!0?i.setAttribute(e,""):cf(i,e,n)}}}function Ii(i,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Kt("error",i),Kt("load",i);var n=!1,s=!1,r;for(r in e)if(e.hasOwnProperty(r)){var a=e[r];if(a!=null)switch(r){case"src":n=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:_e(i,t,r,a,e,null)}}s&&_e(i,t,"srcSet",e.srcSet,e,null),n&&_e(i,t,"src",e.src,e,null);return;case"input":Kt("invalid",i);var o=r=a=s=null,l=null,c=null;for(n in e)if(e.hasOwnProperty(n)){var u=e[n];if(u!=null)switch(n){case"name":s=u;break;case"type":a=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":r=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(tt(137,t));break;default:_e(i,t,n,u,e,null)}}Ob(i,r,o,l,c,a,s,!1);return;case"select":Kt("invalid",i),n=a=r=null;for(s in e)if(e.hasOwnProperty(s)&&(o=e[s],o!=null))switch(s){case"value":r=o;break;case"defaultValue":a=o;break;case"multiple":n=o;default:_e(i,t,s,o,e,null)}t=r,e=a,i.multiple=!!n,t!=null?ol(i,!!n,t,!1):e!=null&&ol(i,!!n,e,!0);return;case"textarea":Kt("invalid",i),r=s=n=null;for(a in e)if(e.hasOwnProperty(a)&&(o=e[a],o!=null))switch(a){case"value":n=o;break;case"defaultValue":s=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(tt(91));break;default:_e(i,t,a,o,e,null)}Pb(i,n,s,r);return;case"option":for(l in e)e.hasOwnProperty(l)&&(n=e[l],n!=null)&&(l==="selected"?i.selected=n&&typeof n!="function"&&typeof n!="symbol":_e(i,t,l,n,e,null));return;case"dialog":Kt("beforetoggle",i),Kt("toggle",i),Kt("cancel",i),Kt("close",i);break;case"iframe":case"object":Kt("load",i);break;case"video":case"audio":for(n=0;n<hu.length;n++)Kt(hu[n],i);break;case"image":Kt("error",i),Kt("load",i);break;case"details":Kt("toggle",i);break;case"embed":case"source":case"link":Kt("error",i),Kt("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in e)if(e.hasOwnProperty(c)&&(n=e[c],n!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:_e(i,t,c,n,e,null)}return;default:if(q0(t)){for(u in e)e.hasOwnProperty(u)&&(n=e[u],n!==void 0&&D0(i,t,u,n,e,void 0));return}}for(o in e)e.hasOwnProperty(o)&&(n=e[o],n!=null&&_e(i,t,o,n,e,null))}function t2(i,t,e,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,a=null,o=null,l=null,c=null,u=null;for(d in e){var f=e[d];if(e.hasOwnProperty(d)&&f!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=f;default:n.hasOwnProperty(d)||_e(i,t,d,null,n,f)}}for(var h in n){var d=n[h];if(f=e[h],n.hasOwnProperty(h)&&(d!=null||f!=null))switch(h){case"type":r=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":a=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(tt(137,t));break;default:d!==f&&_e(i,t,h,d,n,f)}}e0(i,a,o,l,c,u,r,s);return;case"select":d=a=o=h=null;for(r in e)if(l=e[r],e.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":d=l;default:n.hasOwnProperty(r)||_e(i,t,r,null,n,l)}for(s in n)if(r=n[s],l=e[s],n.hasOwnProperty(s)&&(r!=null||l!=null))switch(s){case"value":h=r;break;case"defaultValue":o=r;break;case"multiple":a=r;default:r!==l&&_e(i,t,s,r,n,l)}t=o,e=a,n=d,h!=null?ol(i,!!e,h,!1):!!n!=!!e&&(t!=null?ol(i,!!e,t,!0):ol(i,!!e,e?[]:"",!1));return;case"textarea":d=h=null;for(o in e)if(s=e[o],e.hasOwnProperty(o)&&s!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:_e(i,t,o,null,n,s)}for(a in n)if(s=n[a],r=e[a],n.hasOwnProperty(a)&&(s!=null||r!=null))switch(a){case"value":h=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(tt(91));break;default:s!==r&&_e(i,t,a,s,n,r)}Ub(i,h,d);return;case"option":for(var _ in e)h=e[_],e.hasOwnProperty(_)&&h!=null&&!n.hasOwnProperty(_)&&(_==="selected"?i.selected=!1:_e(i,t,_,null,n,h));for(l in n)h=n[l],d=e[l],n.hasOwnProperty(l)&&h!==d&&(h!=null||d!=null)&&(l==="selected"?i.selected=h&&typeof h!="function"&&typeof h!="symbol":_e(i,t,l,h,n,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in e)h=e[v],e.hasOwnProperty(v)&&h!=null&&!n.hasOwnProperty(v)&&_e(i,t,v,null,n,h);for(c in n)if(h=n[c],d=e[c],n.hasOwnProperty(c)&&h!==d&&(h!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(tt(137,t));break;default:_e(i,t,c,h,n,d)}return;default:if(q0(t)){for(var m in e)h=e[m],e.hasOwnProperty(m)&&h!==void 0&&!n.hasOwnProperty(m)&&D0(i,t,m,void 0,n,h);for(u in n)h=n[u],d=e[u],!n.hasOwnProperty(u)||h===d||h===void 0&&d===void 0||D0(i,t,u,h,n,d);return}}for(var p in e)h=e[p],e.hasOwnProperty(p)&&h!=null&&!n.hasOwnProperty(p)&&_e(i,t,p,null,n,h);for(f in n)h=n[f],d=e[f],!n.hasOwnProperty(f)||h===d||h==null&&d==null||_e(i,t,f,h,n,d)}function KS(i){switch(i){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function e2(){if(typeof performance.getEntriesByType=="function"){for(var i=0,t=0,e=performance.getEntriesByType("resource"),n=0;n<e.length;n++){var s=e[n],r=s.transferSize,a=s.initiatorType,o=s.duration;if(r&&o&&KS(a)){for(a=0,o=s.responseEnd,n+=1;n<e.length;n++){var l=e[n],c=l.startTime;if(c>o)break;var u=l.transferSize,f=l.initiatorType;u&&KS(f)&&(l=l.responseEnd,a+=u*(l<o?1:(o-c)/(l-c)))}if(--n,t+=8*(r+a)/(s.duration/1e3),i++,10<i)break}}if(0<i)return t/i/1e6}return navigator.connection&&(i=navigator.connection.downlink,typeof i=="number")?i:5}var N0=null,L0=null;function Yf(i){return i.nodeType===9?i:i.ownerDocument}function JS(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H1(i,t){if(i===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&t==="foreignObject"?0:i}function O0(i,t){return i==="textarea"||i==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vg=null;function i2(){var i=window.event;return i&&i.type==="popstate"?i===Vg?!1:(Vg=i,!0):(Vg=null,!1)}var G1=typeof setTimeout=="function"?setTimeout:void 0,n2=typeof clearTimeout=="function"?clearTimeout:void 0,jS=typeof Promise=="function"?Promise:void 0,s2=typeof queueMicrotask=="function"?queueMicrotask:typeof jS<"u"?function(i){return jS.resolve(null).then(i).catch(r2)}:G1;function r2(i){setTimeout(function(){throw i})}function ha(i){return i==="head"}function $S(i,t){var e=t,n=0;do{var s=e.nextSibling;if(i.removeChild(e),s&&s.nodeType===8)if(e=s.data,e==="/$"||e==="/&"){if(n===0){i.removeChild(s),Ml(t);return}n--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")n++;else if(e==="html")eu(i.ownerDocument.documentElement);else if(e==="head"){e=i.ownerDocument.head,eu(e);for(var r=e.firstChild;r;){var a=r.nextSibling,o=r.nodeName;r[xu]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||e.removeChild(r),r=a}}else e==="body"&&eu(i.ownerDocument.body);e=s}while(e);Ml(t)}function tb(i,t){var e=i;i=0;do{var n=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),n&&n.nodeType===8)if(e=n.data,e==="/$"){if(i===0)break;i--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||i++;e=n}while(e)}function U0(i){var t=i.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":U0(e),X0(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}i.removeChild(e)}}function a2(i,t,e,n){for(;i.nodeType===1;){var s=e;if(i.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(n){if(!i[xu])switch(t){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(r=i.getAttribute("rel"),r==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(r!==s.rel||i.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||i.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||i.getAttribute("title")!==(s.title==null?null:s.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(r=i.getAttribute("src"),(r!==(s.src==null?null:s.src)||i.getAttribute("type")!==(s.type==null?null:s.type)||i.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(t==="input"&&i.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&i.getAttribute("name")===r)return i}else return i;if(i=as(i.nextSibling),i===null)break}return null}function o2(i,t,e){if(t==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!e||(i=as(i.nextSibling),i===null))return null;return i}function k1(i,t){for(;i.nodeType!==8;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!t||(i=as(i.nextSibling),i===null))return null;return i}function P0(i){return i.data==="$?"||i.data==="$~"}function I0(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState!=="loading"}function l2(i,t){var e=i.ownerDocument;if(i.data==="$~")i._reactRetry=t;else if(i.data!=="$?"||e.readyState!=="loading")t();else{var n=function(){t(),e.removeEventListener("DOMContentLoaded",n)};e.addEventListener("DOMContentLoaded",n),i._reactRetry=n}}function as(i){for(;i!=null;i=i.nextSibling){var t=i.nodeType;if(t===1||t===3)break;if(t===8){if(t=i.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return i}var z0=null;function eb(i){i=i.nextSibling;for(var t=0;i;){if(i.nodeType===8){var e=i.data;if(e==="/$"||e==="/&"){if(t===0)return as(i.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}i=i.nextSibling}return null}function ib(i){i=i.previousSibling;for(var t=0;i;){if(i.nodeType===8){var e=i.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return i;t--}else e!=="/$"&&e!=="/&"||t++}i=i.previousSibling}return null}function V1(i,t,e){switch(t=Yf(e),i){case"html":if(i=t.documentElement,!i)throw Error(tt(452));return i;case"head":if(i=t.head,!i)throw Error(tt(453));return i;case"body":if(i=t.body,!i)throw Error(tt(454));return i;default:throw Error(tt(451))}}function eu(i){for(var t=i.attributes;t.length;)i.removeAttributeNode(t[0]);X0(i)}var os=new Map,nb=new Set;function Zf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var fr=ue.d;ue.d={f:c2,r:u2,D:h2,C:f2,L:d2,m:p2,X:g2,S:m2,M:_2};function c2(){var i=fr.f(),t=hd();return i||t}function u2(i){var t=El(i);t!==null&&t.tag===5&&t.type==="form"?IM(t):fr.r(i)}var Cl=typeof document>"u"?null:document;function W1(i,t,e){var n=Cl;if(n&&typeof t=="string"&&t){var s=is(t);s='link[rel="'+i+'"][href="'+s+'"]',typeof e=="string"&&(s+='[crossorigin="'+e+'"]'),nb.has(s)||(nb.add(s),i={rel:i,crossOrigin:e,href:t},n.querySelector(s)===null&&(t=n.createElement("link"),Ii(t,"link",i),Ti(t),n.head.appendChild(t)))}}function h2(i){fr.D(i),W1("dns-prefetch",i,null)}function f2(i,t){fr.C(i,t),W1("preconnect",i,t)}function d2(i,t,e){fr.L(i,t,e);var n=Cl;if(n&&i&&t){var s='link[rel="preload"][as="'+is(t)+'"]';t==="image"&&e&&e.imageSrcSet?(s+='[imagesrcset="'+is(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(s+='[imagesizes="'+is(e.imageSizes)+'"]')):s+='[href="'+is(i)+'"]';var r=s;switch(t){case"style":r=bl(i);break;case"script":r=Dl(i)}os.has(r)||(i=De({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:i,as:t},e),os.set(r,i),n.querySelector(s)!==null||t==="style"&&n.querySelector(wu(r))||t==="script"&&n.querySelector(Au(r))||(t=n.createElement("link"),Ii(t,"link",i),Ti(t),n.head.appendChild(t)))}}function p2(i,t){fr.m(i,t);var e=Cl;if(e&&i){var n=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+is(n)+'"][href="'+is(i)+'"]',r=s;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Dl(i)}if(!os.has(r)&&(i=De({rel:"modulepreload",href:i},t),os.set(r,i),e.querySelector(s)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Au(r)))return}n=e.createElement("link"),Ii(n,"link",i),Ti(n),e.head.appendChild(n)}}}function m2(i,t,e){fr.S(i,t,e);var n=Cl;if(n&&i){var s=al(n).hoistableStyles,r=bl(i);t=t||"default";var a=s.get(r);if(!a){var o={loading:0,preload:null};if(a=n.querySelector(wu(r)))o.loading=5;else{i=De({rel:"stylesheet",href:i,"data-precedence":t},e),(e=os.get(r))&&D_(i,e);var l=a=n.createElement("link");Ti(l),Ii(l,"link",i),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,xf(a,t,n)}a={type:"stylesheet",instance:a,count:1,state:o},s.set(r,a)}}}function g2(i,t){fr.X(i,t);var e=Cl;if(e&&i){var n=al(e).hoistableScripts,s=Dl(i),r=n.get(s);r||(r=e.querySelector(Au(s)),r||(i=De({src:i,async:!0},t),(t=os.get(s))&&N_(i,t),r=e.createElement("script"),Ti(r),Ii(r,"link",i),e.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(s,r))}}function _2(i,t){fr.M(i,t);var e=Cl;if(e&&i){var n=al(e).hoistableScripts,s=Dl(i),r=n.get(s);r||(r=e.querySelector(Au(s)),r||(i=De({src:i,async:!0,type:"module"},t),(t=os.get(s))&&N_(i,t),r=e.createElement("script"),Ti(r),Ii(r,"link",i),e.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(s,r))}}function sb(i,t,e,n){var s=(s=Jr.current)?Zf(s):null;if(!s)throw Error(tt(446));switch(i){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=bl(e.href),e=al(s).hoistableStyles,n=e.get(t),n||(n={type:"style",instance:null,count:0,state:null},e.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){i=bl(e.href);var r=al(s).hoistableStyles,a=r.get(i);if(a||(s=s.ownerDocument||s,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(i,a),(r=s.querySelector(wu(i)))&&!r._p&&(a.instance=r,a.state.loading=5),os.has(i)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},os.set(i,e),r||v2(s,i,e,a.state))),t&&n===null)throw Error(tt(528,""));return a}if(t&&n!==null)throw Error(tt(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Dl(e),e=al(s).hoistableScripts,n=e.get(t),n||(n={type:"script",instance:null,count:0,state:null},e.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(tt(444,i))}}function bl(i){return'href="'+is(i)+'"'}function wu(i){return'link[rel="stylesheet"]['+i+"]"}function X1(i){return De({},i,{"data-precedence":i.precedence,precedence:null})}function v2(i,t,e,n){i.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=i.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ii(t,"link",e),Ti(t),i.head.appendChild(t))}function Dl(i){return'[src="'+is(i)+'"]'}function Au(i){return"script[async]"+i}function rb(i,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var n=i.querySelector('style[data-href~="'+is(e.href)+'"]');if(n)return t.instance=n,Ti(n),n;var s=De({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return n=(i.ownerDocument||i).createElement("style"),Ti(n),Ii(n,"style",s),xf(n,e.precedence,i),t.instance=n;case"stylesheet":s=bl(e.href);var r=i.querySelector(wu(s));if(r)return t.state.loading|=4,t.instance=r,Ti(r),r;n=X1(e),(s=os.get(s))&&D_(n,s),r=(i.ownerDocument||i).createElement("link"),Ti(r);var a=r;return a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),Ii(r,"link",n),t.state.loading|=4,xf(r,e.precedence,i),t.instance=r;case"script":return r=Dl(e.src),(s=i.querySelector(Au(r)))?(t.instance=s,Ti(s),s):(n=e,(s=os.get(r))&&(n=De({},e),N_(n,s)),i=i.ownerDocument||i,s=i.createElement("script"),Ti(s),Ii(s,"link",n),i.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(tt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,xf(n,e.precedence,i));return t.instance}function xf(i,t,e){for(var n=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=n.length?n[n.length-1]:null,r=s,a=0;a<n.length;a++){var o=n[a];if(o.dataset.precedence===t)r=o;else if(r!==s)break}r?r.parentNode.insertBefore(i,r.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(i,t.firstChild))}function D_(i,t){i.crossOrigin==null&&(i.crossOrigin=t.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=t.referrerPolicy),i.title==null&&(i.title=t.title)}function N_(i,t){i.crossOrigin==null&&(i.crossOrigin=t.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=t.referrerPolicy),i.integrity==null&&(i.integrity=t.integrity)}var Sf=null;function ab(i,t,e){if(Sf===null){var n=new Map,s=Sf=new Map;s.set(e,n)}else s=Sf,n=s.get(e),n||(n=new Map,s.set(e,n));if(n.has(i))return n;for(n.set(i,null),e=e.getElementsByTagName(i),s=0;s<e.length;s++){var r=e[s];if(!(r[xu]||r[Oi]||i==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(t)||"";a=i+a;var o=n.get(a);o?o.push(r):n.set(a,[r])}}return n}function ob(i,t,e){i=i.ownerDocument||i,i.head.insertBefore(e,t==="title"?i.querySelector("head > title"):null)}function y2(i,t,e){if(e===1||t.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(i=t.disabled,typeof t.precedence=="string"&&i==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function q1(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}function x2(i,t,e,n){if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var s=bl(n.href),r=t.querySelector(wu(s));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=Qf.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=r,Ti(r);return}r=t.ownerDocument||t,n=X1(n),(s=os.get(s))&&D_(n,s),r=r.createElement("link"),Ti(r);var a=r;a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),Ii(r,"link",n),e.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(i.count++,e=Qf.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}var Wg=0;function S2(i,t){return i.stylesheets&&i.count===0&&bf(i,i.stylesheets),0<i.count||0<i.imgCount?function(e){var n=setTimeout(function(){if(i.stylesheets&&bf(i,i.stylesheets),i.unsuspend){var r=i.unsuspend;i.unsuspend=null,r()}},6e4+t);0<i.imgBytes&&Wg===0&&(Wg=62500*e2());var s=setTimeout(function(){if(i.waitingForImages=!1,i.count===0&&(i.stylesheets&&bf(i,i.stylesheets),i.unsuspend)){var r=i.unsuspend;i.unsuspend=null,r()}},(i.imgBytes>Wg?50:800)+t);return i.unsuspend=e,function(){i.unsuspend=null,clearTimeout(n),clearTimeout(s)}}:null}function Qf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bf(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Kf=null;function bf(i,t){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Kf=new Map,t.forEach(b2,i),Kf=null,Qf.call(i))}function b2(i,t){if(!(t.state.loading&4)){var e=Kf.get(i);if(e)var n=e.get(null);else{e=new Map,Kf.set(i,e);for(var s=i.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var a=s[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(e.set(a.dataset.precedence,a),n=a)}n&&e.set(null,n)}s=t.instance,a=s.getAttribute("data-precedence"),r=e.get(a)||n,r===n&&e.set(null,s),e.set(a,s),this.count++,n=Qf.bind(this),s.addEventListener("load",n),s.addEventListener("error",n),r?r.parentNode.insertBefore(s,r.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(s,i.firstChild)),t.state.loading|=4}}var du={$$typeof:er,Provider:null,Consumer:null,_currentValue:Qa,_currentValue2:Qa,_threadCount:0};function M2(i,t,e,n,s,r,a,o,l){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gg(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gg(0),this.hiddenUpdates=gg(null),this.identifierPrefix=n,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Y1(i,t,e,n,s,r,a,o,l,c,u,f){return i=new M2(i,t,e,a,l,c,u,f,o),t=1,r===!0&&(t|=24),r=wn(3,null,null,t),i.current=r,r.stateNode=i,t=n_(),t.refCount++,i.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:e,cache:t},a_(r),i}function Z1(i){return i?(i=il,i):il}function Q1(i,t,e,n,s,r){s=Z1(s),n.context===null?n.context=s:n.pendingContext=s,n=$r(t),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=ta(i,n,t),e!==null&&(fn(e,i,t),Yc(e,i,t))}function lb(i,t){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var e=i.retryLane;i.retryLane=e!==0&&e<t?e:t}}function L_(i,t){lb(i,t),(i=i.alternate)&&lb(i,t)}function K1(i){if(i.tag===13||i.tag===31){var t=lo(i,67108864);t!==null&&fn(t,i,67108864),L_(i,67108864)}}function cb(i){if(i.tag===13||i.tag===31){var t=Nn();t=V0(t);var e=lo(i,t);e!==null&&fn(e,i,t),L_(i,t)}}var Jf=!0;function T2(i,t,e,n){var s=Pt.T;Pt.T=null;var r=ue.p;try{ue.p=2,O_(i,t,e,n)}finally{ue.p=r,Pt.T=s}}function E2(i,t,e,n){var s=Pt.T;Pt.T=null;var r=ue.p;try{ue.p=8,O_(i,t,e,n)}finally{ue.p=r,Pt.T=s}}function O_(i,t,e,n){if(Jf){var s=B0(n);if(s===null)kg(i,t,n,jf,e),ub(i,n);else if(A2(s,i,t,e,n))n.stopPropagation();else if(ub(i,n),t&4&&-1<w2.indexOf(i)){for(;s!==null;){var r=El(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=qa(r.pendingLanes);if(a!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;a;){var l=1<<31-Dn(a);o.entanglements[1]|=l,a&=~l}Us(r),(ce&6)===0&&(Gf=Rn()+500,Eu(0,!1))}}break;case 31:case 13:o=lo(r,2),o!==null&&fn(o,r,2),hd(),L_(r,2)}if(r=B0(n),r===null&&kg(i,t,n,jf,e),r===s)break;s=r}s!==null&&n.stopPropagation()}else kg(i,t,n,null,e)}}function B0(i){return i=Y0(i),U_(i)}var jf=null;function U_(i){if(jf=null,i=Ko(i),i!==null){var t=gu(i);if(t===null)i=null;else{var e=t.tag;if(e===13){if(i=gb(t),i!==null)return i;i=null}else if(e===31){if(i=_b(t),i!==null)return i;i=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;i=null}else t!==i&&(i=null)}}return jf=i,null}function J1(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dR()){case Sb:return 2;case bb:return 8;case Af:case pR:return 32;case Mb:return 268435456;default:return 32}default:return 32}}var F0=!1,na=null,sa=null,ra=null,pu=new Map,mu=new Map,Xr=[],w2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ub(i,t){switch(i){case"focusin":case"focusout":na=null;break;case"dragenter":case"dragleave":sa=null;break;case"mouseover":case"mouseout":ra=null;break;case"pointerover":case"pointerout":pu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mu.delete(t.pointerId)}}function Ic(i,t,e,n,s,r){return i===null||i.nativeEvent!==r?(i={blockedOn:t,domEventName:e,eventSystemFlags:n,nativeEvent:r,targetContainers:[s]},t!==null&&(t=El(t),t!==null&&K1(t)),i):(i.eventSystemFlags|=n,t=i.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),i)}function A2(i,t,e,n,s){switch(t){case"focusin":return na=Ic(na,i,t,e,n,s),!0;case"dragenter":return sa=Ic(sa,i,t,e,n,s),!0;case"mouseover":return ra=Ic(ra,i,t,e,n,s),!0;case"pointerover":var r=s.pointerId;return pu.set(r,Ic(pu.get(r)||null,i,t,e,n,s)),!0;case"gotpointercapture":return r=s.pointerId,mu.set(r,Ic(mu.get(r)||null,i,t,e,n,s)),!0}return!1}function j1(i){var t=Ko(i.target);if(t!==null){var e=gu(t);if(e!==null){if(t=e.tag,t===13){if(t=gb(e),t!==null){i.blockedOn=t,Yx(i.priority,function(){cb(e)});return}}else if(t===31){if(t=_b(e),t!==null){i.blockedOn=t,Yx(i.priority,function(){cb(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){i.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Mf(i){if(i.blockedOn!==null)return!1;for(var t=i.targetContainers;0<t.length;){var e=B0(i.nativeEvent);if(e===null){e=i.nativeEvent;var n=new e.constructor(e.type,e);n0=n,e.target.dispatchEvent(n),n0=null}else return t=El(e),t!==null&&K1(t),i.blockedOn=e,!1;t.shift()}return!0}function hb(i,t,e){Mf(i)&&e.delete(t)}function R2(){F0=!1,na!==null&&Mf(na)&&(na=null),sa!==null&&Mf(sa)&&(sa=null),ra!==null&&Mf(ra)&&(ra=null),pu.forEach(hb),mu.forEach(hb)}function of(i,t){i.blockedOn===t&&(i.blockedOn=null,F0||(F0=!0,di.unstable_scheduleCallback(di.unstable_NormalPriority,R2)))}var lf=null;function fb(i){lf!==i&&(lf=i,di.unstable_scheduleCallback(di.unstable_NormalPriority,function(){lf===i&&(lf=null);for(var t=0;t<i.length;t+=3){var e=i[t],n=i[t+1],s=i[t+2];if(typeof n!="function"){if(U_(n||e)===null)continue;break}var r=El(e);r!==null&&(i.splice(t,3),t-=3,y0(r,{pending:!0,data:s,method:e.method,action:n},n,s))}}))}function Ml(i){function t(l){return of(l,i)}na!==null&&of(na,i),sa!==null&&of(sa,i),ra!==null&&of(ra,i),pu.forEach(t),mu.forEach(t);for(var e=0;e<Xr.length;e++){var n=Xr[e];n.blockedOn===i&&(n.blockedOn=null)}for(;0<Xr.length&&(e=Xr[0],e.blockedOn===null);)j1(e),e.blockedOn===null&&Xr.shift();if(e=(i.ownerDocument||i).$$reactFormReplay,e!=null)for(n=0;n<e.length;n+=3){var s=e[n],r=e[n+1],a=s[dn]||null;if(typeof r=="function")a||fb(e);else if(a){var o=null;if(r&&r.hasAttribute("formAction")){if(s=r,a=r[dn]||null)o=a.formAction;else if(U_(s)!==null)continue}else o=a.action;typeof o=="function"?e[n+1]=o:(e.splice(n,3),n-=3),fb(e)}}}function $1(){function i(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(a){return s=a})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),n||setTimeout(e,20)}function e(){if(!n&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,s=null;return navigation.addEventListener("navigate",i),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){n=!0,navigation.removeEventListener("navigate",i),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function P_(i){this._internalRoot=i}pd.prototype.render=P_.prototype.render=function(i){var t=this._internalRoot;if(t===null)throw Error(tt(409));var e=t.current,n=Nn();Q1(e,n,i,t,null,null)};pd.prototype.unmount=P_.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var t=i.containerInfo;Q1(i.current,2,null,i,null,null),hd(),t[Tl]=null}};function pd(i){this._internalRoot=i}pd.prototype.unstable_scheduleHydration=function(i){if(i){var t=Rb();i={blockedOn:null,target:i,priority:t};for(var e=0;e<Xr.length&&t!==0&&t<Xr[e].priority;e++);Xr.splice(e,0,i),e===0&&j1(i)}};var db=pb.version;if(db!=="19.2.8")throw Error(tt(527,db,"19.2.8"));ue.findDOMNode=function(i){var t=i._reactInternals;if(t===void 0)throw typeof i.render=="function"?Error(tt(188)):(i=Object.keys(i).join(","),Error(tt(268,i)));return i=aR(t),i=i!==null?vb(i):null,i=i===null?null:i.stateNode,i};var C2={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Pt,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(zc=__REACT_DEVTOOLS_GLOBAL_HOOK__,!zc.isDisabled&&zc.supportsFiber))try{_u=zc.inject(C2),Cn=zc}catch{}var zc;md.createRoot=function(i,t){if(!mb(i))throw Error(tt(299));var e=!1,n="",s=WM,r=XM,a=qM;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Y1(i,1,!1,null,null,e,n,null,s,r,a,$1),i[Tl]=t.current,C_(i),new P_(t)};md.hydrateRoot=function(i,t,e){if(!mb(i))throw Error(tt(299));var n=!1,s="",r=WM,a=XM,o=qM,l=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(a=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.formState!==void 0&&(l=e.formState)),t=Y1(i,1,!0,t,e??null,n,s,l,r,a,o,$1),t.context=Z1(null),e=t.current,n=Nn(),n=V0(n),s=$r(n),s.callback=null,ta(e,s,n),e=n,t.current.lanes=e,yu(t,e),Us(t),i[Tl]=t.current,C_(i),new pd(t)};md.version="19.2.8"});var nT=As((tz,iT)=>{"use strict";nt();function eT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eT)}catch(i){console.error(i)}}eT(),iT.exports=tT()});var bA=As(Zm=>{"use strict";nt();var TI=Symbol.for("react.transitional.element"),EI=Symbol.for("react.fragment");function SA(i,t,e){var n=null;if(e!==void 0&&(n=""+e),t.key!==void 0&&(n=""+t.key),"key"in t){e={};for(var s in t)s!=="key"&&(e[s]=t[s])}else e=t;return t=e.ref,{$$typeof:TI,type:i,key:n,ref:t!==void 0?t:null,props:e}}Zm.Fragment=EI;Zm.jsx=SA;Zm.jsxs=SA});var Ph=As((IG,MA)=>{"use strict";nt();MA.exports=bA()});nt();var EA=Va(nT(),1);nt();nt();nt();var NT=0,fv=1,LT=2;var Ku=1,OT=2,ec=3,Ta=0,mi=1,Xi=2,br=0,ic=1,zi=2,dv=3,pv=4,UT=5;var bo=100,PT=101,IT=102,zT=103,BT=104,FT=200,HT=201,GT=202,kT=203,mv=204,gv=205,VT=206,WT=207,XT=208,qT=209,YT=210,ZT=211,QT=212,KT=213,JT=214,kd=0,Vd=1,Wd=2,Xl=3,Xd=4,qd=5,Yd=6,Zd=7,_v=0,jT=1,$T=2,Fs=0,Ju=1,ju=2,$u=3,Mo=4,th=5,eh=6,ih=7;var vv=300,To=301,nc=302,yp=303,xp=304,ql=1e3,cs=1001,Qd=1002,Ai=1003,tE=1004;var nh=1005;var Ri=1006,Sp=1007;var Mr=1008;var Fn=1009,yv=1010,xv=1011,sc=1012,bp=1013,Ms=1014,Ts=1015,gi=1016,Mp=1017,Tp=1018,Eo=1020,Sv=35902,bv=35899,Mv=1021,Tv=1022,Es=1023,yr=1026,Tr=1027,Ev=1028,Ep=1029,Ea=1030,wp=1031;var Ap=1033,sh=33776,rh=33777,ah=33778,oh=33779,Rp=35840,Cp=35841,Dp=35842,Np=35843,Lp=36196,Op=37492,Up=37496,Pp=37488,Ip=37489,lh=37490,zp=37491,Bp=37808,Fp=37809,Hp=37810,Gp=37811,kp=37812,Vp=37813,Wp=37814,Xp=37815,qp=37816,Yp=37817,Zp=37818,Qp=37819,Kp=37820,Jp=37821,jp=36492,$p=36494,tm=36495,em=36283,im=36284,ch=36285,nm=36286;var Uu=2300,Kd=2301,Hd=2302,sv=2303,rv=2400,av=2401,ov=2402;var eE=3200;var wv=0,iE=1,Er="",In="srgb",Pu="srgb-linear",Iu="linear",oe="srgb";var Gd=7680;var nE=519,sE=512,rE=513,aE=514,Av=515,oE=516,lE=517,Rv=518,Cv=519,cE=35044;var Dv="300 es",us=2e3,zu=2001;function D2(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function N2(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Bu(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uE(){let i=Bu("canvas");return i.style.display="block",i}var sT={},Yl=null;function Nv(...i){let t="THREE."+i.shift();Yl?Yl("log",t,...i):console.log(t,...i)}function hE(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Nt(...i){i=hE(i);let t="THREE."+i.shift();if(Yl)Yl("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function It(...i){i=hE(i);let t="THREE."+i.shift();if(Yl)Yl("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ou(...i){let t=i.join(" ");t in sT||(sT[t]=!0,Nt(...i))}function fE(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var dE={[kd]:kd,[Wd]:Yd,[Xd]:Xd,[Xl]:qd,[Vd]:Vd,[Yd]:Wd,[Zd]:Zd,[qd]:Xl},Is=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Vi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var I_=Math.PI/180,Jd=180/Math.PI;function uh(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vi[i&255]+Vi[i>>8&255]+Vi[i>>16&255]+Vi[i>>24&255]+"-"+Vi[t&255]+Vi[t>>8&255]+"-"+Vi[t>>16&15|64]+Vi[t>>24&255]+"-"+Vi[e&63|128]+Vi[e>>8&255]+"-"+Vi[e>>16&255]+Vi[e>>24&255]+Vi[n&255]+Vi[n>>8&255]+Vi[n>>16&255]+Vi[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function L2(i,t){return(i%t+t)%t}function z_(i,t,e){return(1-e)*i+e*t}function pE(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lv(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function O2(i,t){if(t.constructor===Float32Array)return i;let e=Lv(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function U2(i,t){if(t.constructor===Float32Array)return i;let e=Lv(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Lt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zs=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],_=r[a+2],v=r[a+3];if(f!==v||l!==h||c!==d||u!==_){let m=l*h+c*d+u*_+f*v;m<0&&(h=-h,d=-d,_=-_,v=-v,m=-m);let p=1-o;if(m<.9995){let g=Math.acos(m),x=Math.sin(g);p=Math.sin(p*g)/x,o=Math.sin(o*g)/x,l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+v*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+v*o;let g=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=g,c*=g,u*=g,f*=g}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],_=r[a+3];return t[e]=o*_+u*f+l*d-c*h,t[e+1]=l*_+u*h+c*f-o*d,t[e+2]=c*_+u*d+o*h-l*f,t[e+3]=u*_-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rT.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rT.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return B_.copy(this).projectOnVector(t),this.sub(B_)}reflect(t){return this.sub(B_.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},B_=new P,rT=new zs,Ht=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],v=s[0],m=s[3],p=s[6],g=s[1],x=s[4],S=s[7],M=s[2],w=s[5],y=s[8];return r[0]=a*v+o*g+l*M,r[3]=a*m+o*x+l*w,r[6]=a*p+o*S+l*y,r[1]=c*v+u*g+f*M,r[4]=c*m+u*x+f*w,r[7]=c*p+u*S+f*y,r[2]=h*v+d*g+_*M,r[5]=h*m+d*x+_*w,r[8]=h*p+d*S+_*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,_=e*f+n*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=f*v,t[1]=(s*c-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=h*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ou("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(F_.makeScale(t,e)),this}rotate(t){return Ou("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(F_.makeRotation(-t)),this}translate(t,e){return Ou("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(F_.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},F_=new Ht,aT=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oT=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function P2(){let i={enabled:!0,workingColorSpace:Pu,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=Wl(s.r),s.g=Wl(s.g),s.b=Wl(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Er?Iu:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pu]:{primaries:t,whitePoint:n,transfer:Iu,toXYZ:aT,fromXYZ:oT,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:aT,fromXYZ:oT,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),i}var Qt=P2();function vr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Nl,jd=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Nl===void 0&&(Nl=Bu("canvas")),Nl.width=t.width,Nl.height=t.height;let s=Nl.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Nl}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Bu("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vr(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vr(e[n]/255)*255):e[n]=vr(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},I2=0,Zl=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:I2++}),this.uuid=uh(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(H_(s[a].image)):r.push(H_(s[a]))}else r=H_(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function H_(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var z2=0,G_=new P,mn=class i extends Is{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=cs,s=cs,r=Ri,a=Mr,o=Es,l=Fn,c=i.DEFAULT_ANISOTROPY,u=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z2++}),this.uuid=uh(),this.name="",this.source=new Zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(G_).x}get height(){return this.source.getSize(G_).y}get depth(){return this.source.getSize(G_).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ql:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case Qd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ql:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case Qd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=vv;mn.DEFAULT_ANISOTROPY=1;var He=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,S=(d+1)/2,M=(p+1)/2,w=(u+h)/4,y=(f+v)/4,b=(_+m)/4;return x>S&&x>M?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=y/n):S>M?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=b/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=y/r,s=b/r),this.set(n,s,r,e),this}let g=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-v)/g,this.z=(h-u)/g,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$d=class extends Is{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new mn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Zl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},je=class extends $d{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fu=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tp=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Le=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,f,h,d,_,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,h,d,_,v,m)}set(t,e,n,s,r,a,o,l,c,u,f,h,d,_,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ll.setFromMatrixColumn(t,0).length(),r=1/Ll.setFromMatrixColumn(t,1).length(),a=1/Ll.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,d=a*f,_=o*u,v=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=h-v*c,e[9]=-o*l,e[2]=v-h*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,d=l*f,_=c*u,v=c*f;e[0]=h+v*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-_,e[6]=v+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,d=l*f,_=c*u,v=c*f;e[0]=h-v*o,e[4]=-a*f,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,d=a*f,_=o*u,v=o*f;e[0]=l*u,e[4]=_*c-d,e[8]=h*c+v,e[1]=l*f,e[5]=v*c+h,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,d=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=v-h*f,e[8]=_*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+_,e[10]=h-v*f}else if(t.order==="XZY"){let h=a*l,d=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+v,e[5]=a*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=o*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(B2,t,F2)}lookAt(t,e,n){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),fa.crossVectors(n,Un),fa.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),fa.crossVectors(n,Un)),fa.normalize(),gd.crossVectors(Un,fa),s[0]=fa.x,s[4]=gd.x,s[8]=Un.x,s[1]=fa.y,s[5]=gd.y,s[9]=Un.y,s[2]=fa.z,s[6]=gd.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],v=n[6],m=n[10],p=n[14],g=n[3],x=n[7],S=n[11],M=n[15],w=s[0],y=s[4],b=s[8],R=s[12],C=s[1],O=s[5],I=s[9],G=s[13],N=s[2],k=s[6],X=s[10],B=s[14],et=s[3],q=s[7],$=s[11],it=s[15];return r[0]=a*w+o*C+l*N+c*et,r[4]=a*y+o*O+l*k+c*q,r[8]=a*b+o*I+l*X+c*$,r[12]=a*R+o*G+l*B+c*it,r[1]=u*w+f*C+h*N+d*et,r[5]=u*y+f*O+h*k+d*q,r[9]=u*b+f*I+h*X+d*$,r[13]=u*R+f*G+h*B+d*it,r[2]=_*w+v*C+m*N+p*et,r[6]=_*y+v*O+m*k+p*q,r[10]=_*b+v*I+m*X+p*$,r[14]=_*R+v*G+m*B+p*it,r[3]=g*w+x*C+S*N+M*et,r[7]=g*y+x*O+S*k+M*q,r[11]=g*b+x*I+S*X+M*$,r[15]=g*R+x*G+S*B+M*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],v=t[7],m=t[11],p=t[15],g=l*d-c*h,x=o*d-c*f,S=o*h-l*f,M=a*d-c*u,w=a*h-l*u,y=a*f-o*u;return e*(v*g-m*x+p*S)-n*(_*g-m*M+p*w)+s*(_*x-v*M+p*y)-r*(_*S-v*w+m*y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],v=t[13],m=t[14],p=t[15],g=e*o-n*a,x=e*l-s*a,S=e*c-r*a,M=n*l-s*o,w=n*c-r*o,y=s*c-r*l,b=u*v-f*_,R=u*m-h*_,C=u*p-d*_,O=f*m-h*v,I=f*p-d*v,G=h*p-d*m,N=g*G-x*I+S*O+M*C-w*R+y*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return t[0]=(o*G-l*I+c*O)*k,t[1]=(s*I-n*G-r*O)*k,t[2]=(v*y-m*w+p*M)*k,t[3]=(h*w-f*y-d*M)*k,t[4]=(l*C-a*G-c*R)*k,t[5]=(e*G-s*C+r*R)*k,t[6]=(m*S-_*y-p*x)*k,t[7]=(u*y-h*S+d*x)*k,t[8]=(a*I-o*C+c*b)*k,t[9]=(n*C-e*I-r*b)*k,t[10]=(_*w-v*S+p*g)*k,t[11]=(f*S-u*w-d*g)*k,t[12]=(o*R-a*O-l*b)*k,t[13]=(e*O-n*R+s*b)*k,t[14]=(v*x-_*M-m*g)*k,t[15]=(u*M-f*x+h*g)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,_=r*f,v=a*u,m=a*f,p=o*f,g=l*c,x=l*u,S=l*f,M=n.x,w=n.y,y=n.z;return s[0]=(1-(v+p))*M,s[1]=(d+S)*M,s[2]=(_-x)*M,s[3]=0,s[4]=(d-S)*w,s[5]=(1-(h+p))*w,s[6]=(m+g)*w,s[7]=0,s[8]=(_+x)*y,s[9]=(m-g)*y,s[10]=(1-(h+v))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ll.set(s[0],s[1],s[2]).length(),o=Ll.set(s[4],s[5],s[6]).length(),l=Ll.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vs.copy(this);let c=1/a,u=1/o,f=1/l;return vs.elements[0]*=c,vs.elements[1]*=c,vs.elements[2]*=c,vs.elements[4]*=u,vs.elements[5]*=u,vs.elements[6]*=u,vs.elements[8]*=f,vs.elements[9]*=f,vs.elements[10]*=f,e.setFromRotationMatrix(vs),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=us,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),_,v;if(l)_=r/(a-r),v=a*r/(a-r);else if(o===us)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===zu)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=us,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),_,v;if(l)_=1/(a-r),v=a/(a-r);else if(o===us)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===zu)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ll=new P,vs=new Le,B2=new P(0,0,0),F2=new P(1,1,1),fa=new P,gd=new P,Un=new P,lT=new Le,cT=new zs,va=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lT.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lT,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cT.setFromEuler(this),this.setFromQuaternion(cT,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};va.DEFAULT_ORDER="XYZ";var Ql=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},H2=0,uT=new P,Ol=new zs,dr=new Le,_d=new P,Ru=new P,G2=new P,k2=new zs,hT=new P(1,0,0),fT=new P(0,1,0),dT=new P(0,0,1),pT={type:"added"},V2={type:"removed"},Ul={type:"childadded",child:null},k_={type:"childremoved",child:null},gn=class i extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H2++}),this.uuid=uh(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new va,n=new zs,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ht}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ol.setFromAxisAngle(t,e),this.quaternion.multiply(Ol),this}rotateOnWorldAxis(t,e){return Ol.setFromAxisAngle(t,e),this.quaternion.premultiply(Ol),this}rotateX(t){return this.rotateOnAxis(hT,t)}rotateY(t){return this.rotateOnAxis(fT,t)}rotateZ(t){return this.rotateOnAxis(dT,t)}translateOnAxis(t,e){return uT.copy(t).applyQuaternion(this.quaternion),this.position.add(uT.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hT,t)}translateY(t){return this.translateOnAxis(fT,t)}translateZ(t){return this.translateOnAxis(dT,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_d.copy(t):_d.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ru.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(Ru,_d,this.up):dr.lookAt(_d,Ru,this.up),this.quaternion.setFromRotationMatrix(dr),s&&(dr.extractRotation(s.matrixWorld),Ol.setFromRotationMatrix(dr),this.quaternion.premultiply(Ol.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pT),Ul.child=t,this.dispatchEvent(Ul),Ul.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(V2),k_.child=t,this.dispatchEvent(k_),k_.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dr.multiply(t.parent.matrixWorld)),t.applyMatrix4(dr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pT),Ul.child=t,this.dispatchEvent(Ul),Ul.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ru,t,G2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ru,k2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gn.DEFAULT_UP=new P(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},W2={type:"move"},Kl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W2)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new oi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},da={h:0,s:0,l:0},vd={h:0,s:0,l:0};function V_(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=In){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=L2(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=V_(a,r,t+1/3),this.g=V_(a,r,t),this.b=V_(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=In){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=In){let n=mE[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}copyLinearToSRGB(t){return this.r=Wl(t.r),this.g=Wl(t.g),this.b=Wl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=In){return Qt.workingToColorSpace(Wi.copy(this),t),Math.round(ne(Wi.r*255,0,255))*65536+Math.round(ne(Wi.g*255,0,255))*256+Math.round(ne(Wi.b*255,0,255))}getHexString(t=In){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Wi.copy(this),e);let n=Wi.r,s=Wi.g,r=Wi.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Wi.copy(this),e),t.r=Wi.r,t.g=Wi.g,t.b=Wi.b,t}getStyle(t=In){Qt.workingToColorSpace(Wi.copy(this),t);let e=Wi.r,n=Wi.g,s=Wi.b;return t!==In?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(da),this.setHSL(da.h+t,da.s+e,da.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(da),t.getHSL(vd);let n=z_(da.h,vd.h,e),s=z_(da.s,vd.s,e),r=z_(da.l,vd.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wi=new wt;wt.NAMES=mE;var mo=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ys=new P,pr=new P,W_=new P,mr=new P,Pl=new P,Il=new P,mT=new P,X_=new P,q_=new P,Y_=new P,Z_=new He,Q_=new He,K_=new He,_a=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ys.subVectors(t,e),s.cross(ys);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ys.subVectors(s,e),pr.subVectors(n,e),W_.subVectors(t,e);let a=ys.dot(ys),o=ys.dot(pr),l=ys.dot(W_),c=pr.dot(pr),u=pr.dot(W_),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,mr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mr.x),l.addScaledVector(a,mr.y),l.addScaledVector(o,mr.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Z_.setScalar(0),Q_.setScalar(0),K_.setScalar(0),Z_.fromBufferAttribute(t,e),Q_.fromBufferAttribute(t,n),K_.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Z_,r.x),a.addScaledVector(Q_,r.y),a.addScaledVector(K_,r.z),a}static isFrontFacing(t,e,n,s){return ys.subVectors(n,e),pr.subVectors(t,e),ys.cross(pr).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ys.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),ys.cross(pr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Pl.subVectors(s,n),Il.subVectors(r,n),X_.subVectors(t,n);let l=Pl.dot(X_),c=Il.dot(X_);if(l<=0&&c<=0)return e.copy(n);q_.subVectors(t,s);let u=Pl.dot(q_),f=Il.dot(q_);if(u>=0&&f<=u)return e.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(Pl,a);Y_.subVectors(t,r);let d=Pl.dot(Y_),_=Il.dot(Y_);if(_>=0&&d<=_)return e.copy(r);let v=d*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Il,o);let m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return mT.subVectors(r,s),o=(f-u)/(f-u+(d-_)),e.copy(s).addScaledVector(mT,o);let p=1/(m+v+h);return a=v*p,o=h*p,e.copy(n).addScaledVector(Pl,a).addScaledVector(Il,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ya=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xs.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xs.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xs.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xs):xs.fromBufferAttribute(r,a),xs.applyMatrix4(t.matrixWorld),this.expandByPoint(xs);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yd.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yd.copy(n.boundingBox)),yd.applyMatrix4(t.matrixWorld),this.union(yd)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xs),xs.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cu),xd.subVectors(this.max,Cu),zl.subVectors(t.a,Cu),Bl.subVectors(t.b,Cu),Fl.subVectors(t.c,Cu),pa.subVectors(Bl,zl),ma.subVectors(Fl,Bl),uo.subVectors(zl,Fl);let e=[0,-pa.z,pa.y,0,-ma.z,ma.y,0,-uo.z,uo.y,pa.z,0,-pa.x,ma.z,0,-ma.x,uo.z,0,-uo.x,-pa.y,pa.x,0,-ma.y,ma.x,0,-uo.y,uo.x,0];return!J_(e,zl,Bl,Fl,xd)||(e=[1,0,0,0,1,0,0,0,1],!J_(e,zl,Bl,Fl,xd))?!1:(Sd.crossVectors(pa,ma),e=[Sd.x,Sd.y,Sd.z],J_(e,zl,Bl,Fl,xd))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xs).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xs).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},gr=[new P,new P,new P,new P,new P,new P,new P,new P],xs=new P,yd=new ya,zl=new P,Bl=new P,Fl=new P,pa=new P,ma=new P,uo=new P,Cu=new P,xd=new P,Sd=new P,ho=new P;function J_(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ho.fromArray(i,r);let o=s.x*Math.abs(ho.x)+s.y*Math.abs(ho.y)+s.z*Math.abs(ho.z),l=t.dot(ho),c=e.dot(ho),u=n.dot(ho);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var ai=new P,bd=new Lt,X2=0,pi=class extends Is{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X2++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cE,this.updateRanges=[],this.gpuType=Ts,this.version=0,this._normalizationScale=t!==void 0?Lv(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bd.fromBufferAttribute(this,e),bd.applyMatrix3(t),this.setXY(e,bd.x,bd.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ai.fromBufferAttribute(this,e),ai.applyMatrix3(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ai.fromBufferAttribute(this,e),ai.applyMatrix4(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ai.fromBufferAttribute(this,e),ai.applyNormalMatrix(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ai.fromBufferAttribute(this,e),ai.transformDirection(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):O2(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):U2(t,this.array)}};var Hu=class extends pi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Gu=class extends pi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qe=class extends pi{constructor(t,e,n){super(new Float32Array(t),e,n)}},q2=new ya,Du=new P,j_=new P,Bs=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):q2.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Du.subVectors(t,this.center);let e=Du.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Du,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(j_.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Du.copy(t.center).add(j_)),this.expandByPoint(Du.copy(t.center).sub(j_))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Y2=0,ls=new Le,$_=new gn,Hl=new P,Pn=new ya,Nu=new ya,wi=new P,Ye=class i extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y2++}),this.uuid=uh(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(D2(t)?Gu:Hu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ls.makeRotationFromQuaternion(t),this.applyMatrix4(ls),this}rotateX(t){return ls.makeRotationX(t),this.applyMatrix4(ls),this}rotateY(t){return ls.makeRotationY(t),this.applyMatrix4(ls),this}rotateZ(t){return ls.makeRotationZ(t),this.applyMatrix4(ls),this}translate(t,e,n){return ls.makeTranslation(t,e,n),this.applyMatrix4(ls),this}scale(t,e,n){return ls.makeScale(t,e,n),this.applyMatrix4(ls),this}lookAt(t){return $_.lookAt(t),$_.updateMatrix(),this.applyMatrix4($_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hl).negate(),this.translate(Hl.x,Hl.y,Hl.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(wi.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(wi),wi.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(wi)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Nu.setFromBufferAttribute(o),this.morphTargetsRelative?(wi.addVectors(Pn.min,Nu.min),Pn.expandByPoint(wi),wi.addVectors(Pn.max,Nu.max),Pn.expandByPoint(wi)):(Pn.expandByPoint(Nu.min),Pn.expandByPoint(Nu.max))}Pn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)wi.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(wi));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wi.fromBufferAttribute(o,c),l&&(Hl.fromBufferAttribute(t,c),wi.add(Hl)),s=Math.max(s,n.distanceToSquared(wi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new P,l[R]=new P;let u=new P,f=new P,h=new P,d=new Lt,_=new Lt,v=new Lt,m=new P,p=new P;function g(R,C,O){c[R]=c[C]=c[O]=1,u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,C),h.fromBufferAttribute(n,O),d.fromBufferAttribute(r,R),_.fromBufferAttribute(r,C),v.fromBufferAttribute(r,O),f.sub(u),h.sub(u),_.sub(d),v.sub(d);let I=1/(_.x*v.y-v.x*_.y);isFinite(I)&&(m.copy(f).multiplyScalar(v.y).addScaledVector(h,-_.y).multiplyScalar(I),p.copy(h).multiplyScalar(_.x).addScaledVector(f,-v.x).multiplyScalar(I),o[R].add(m),o[C].add(m),o[O].add(m),l[R].add(p),l[C].add(p),l[O].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,C=x.length;R<C;++R){let O=x[R],I=O.start,G=O.count;for(let N=I,k=I+G;N<k;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let S=new P,M=new P,w=new P,y=new P;function b(R){w.fromBufferAttribute(s,R),y.copy(w);let C=o[R];S.copy(C),S.sub(w.multiplyScalar(w.dot(C))).normalize(),M.crossVectors(y,C);let I=M.dot(l[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,I)}for(let R=0,C=n.count;R<C;++R)c[R]&&b(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,f=new P;if(t)for(let h=0,d=t.count;h<d;h+=3){let _=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)wi.fromBufferAttribute(t,e),wi.normalize(),t.setXYZ(e,wi.x,wi.y,wi.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),d=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new pi(h,u,f)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tv=new P,Z2=new P,Q2=new Ht,zn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=tv.subVectors(n,e).cross(Z2.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(tv),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Q2.getNormalMatrix(t),s=this.coplanarPoint(tv).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},K2=0,xr=class extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K2++}),this.uuid=uh(),this.name="",this.type="Material",this.blending=ic,this.side=Ta,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mv,this.blendDst=gv,this.blendEquation=bo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gd,this.stencilZFail=Gd,this.stencilZPass=Gd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var _r=new P,ev=new P,Md=new P,Td=new P,go=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_r)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_r.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_r.copy(this.origin).addScaledVector(this.direction,e),_r.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ev.copy(t).add(e).multiplyScalar(.5),Md.copy(e).sub(t).normalize(),Td.copy(this.origin).sub(ev);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Md),o=Td.dot(this.direction),l=-Td.dot(Md),c=Td.lengthSq(),u=Math.abs(1-a*a),f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){let v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ev).addScaledVector(Md,h),d}intersectSphere(t,e){if(t.radius<0)return null;_r.subVectors(t.center,this.origin);let n=_r.dot(this.direction),s=_r.dot(_r)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_r)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,_=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=n.x-a.x,g=n.y-a.y,x=n.z-a.z,S=Math.abs(l),M=Math.abs(c),w=Math.abs(u),y,b,R,C,O,I,G,N,k,X,B,et;if(S>=M&&S>=w?(R=l,I=f,k=_,et=p,l>=0?(y=c,b=u,C=h,O=d,G=v,N=m,X=g,B=x):(y=u,b=c,C=d,O=h,G=m,N=v,X=x,B=g)):M>=w?(R=c,I=h,k=v,et=g,c>=0?(y=u,b=l,C=d,O=f,G=m,N=_,X=x,B=p):(y=l,b=u,C=f,O=d,G=_,N=m,X=p,B=x)):(R=u,I=d,k=m,et=x,u>=0?(y=l,b=c,C=f,O=h,G=_,N=v,X=p,B=g):(y=c,b=l,C=h,O=f,G=v,N=_,X=g,B=p)),R===0)return null;let q=y/R,$=b/R,it=1/R,xt=C-q*I,Bt=O-$*I,Z=G-q*k,ht=N-$*k,bt=X-q*et,Ct=B-$*et,vt=bt*ht-Ct*Z,Vt=xt*Ct-Bt*bt,ti=Z*Bt-ht*xt;if(s){if(vt<0||Vt<0||ti<0)return null}else if((vt<0||Vt<0||ti<0)&&(vt>0||Vt>0||ti>0))return null;let Ut=vt+Vt+ti;if(Ut===0)return null;let de=it*(vt*I+Vt*k+ti*et);return(Ut>0?de<0:de>0)?null:this.at(de/Ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ss=class extends xr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=_v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gT=new Le,fo=new go,Ed=new Bs,_T=new P,wd=new P,Ad=new P,Rd=new P,iv=new P,Cd=new P,vT=new P,Dd=new P,he=class extends gn{constructor(t=new Ye,e=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Cd.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(iv.fromBufferAttribute(f,t),a?Cd.addScaledVector(iv,u):Cd.addScaledVector(iv.sub(e),u))}e.add(Cd)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ed.copy(n.boundingSphere),Ed.applyMatrix4(r),fo.copy(t.ray).recast(t.near),!(Ed.containsPoint(fo.origin)===!1&&(fo.intersectSphere(Ed,_T)===null||fo.origin.distanceToSquared(_T)>(t.far-t.near)**2))&&(gT.copy(r).invert(),fo.copy(t.ray).applyMatrix4(gT),!(n.boundingBox!==null&&fo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fo)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){let m=h[_],p=a[m.materialIndex],g=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=g,M=x;S<M;S+=3){let w=o.getX(S),y=o.getX(S+1),b=o.getX(S+2);s=Nd(this,p,t,n,c,u,f,w,y,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){let g=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);s=Nd(this,a,t,n,c,u,f,g,x,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){let m=h[_],p=a[m.materialIndex],g=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=g,M=x;S<M;S+=3){let w=S,y=S+1,b=S+2;s=Nd(this,p,t,n,c,u,f,w,y,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){let g=m,x=m+1,S=m+2;s=Nd(this,a,t,n,c,u,f,g,x,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function J2(i,t,e,n,s,r,a,o){let l;if(t.side===mi?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ta,o),l===null)return null;Dd.copy(o),Dd.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Dd);return c<e.near||c>e.far?null:{distance:c,point:Dd.clone(),object:i}}function Nd(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,wd),i.getVertexPosition(l,Ad),i.getVertexPosition(c,Rd);let u=J2(i,t,e,n,wd,Ad,Rd,vT);if(u){let f=new P;_a.getBarycoord(vT,wd,Ad,Rd,f),s&&(u.uv=_a.getInterpolatedAttribute(s,o,l,c,f,new Lt)),r&&(u.uv1=_a.getInterpolatedAttribute(r,o,l,c,f,new Lt)),a&&(u.normal=_a.getInterpolatedAttribute(a,o,l,c,f,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new P,materialIndex:0};_a.getNormal(wd,Ad,Rd,h.normal),u.face=h,u.barycoord=f}return u}var ep=class extends mn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ai,u=Ai,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var po=new Bs,j2=new Lt(.5,.5),Ld=new P,_o=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=us,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],_=r[8],v=r[9],m=r[10],p=r[11],g=r[12],x=r[13],S=r[14],M=r[15];if(s[0].setComponents(c-a,d-u,p-_,M-g).normalize(),s[1].setComponents(c+a,d+u,p+_,M+g).normalize(),s[2].setComponents(c+o,d+f,p+v,M+x).normalize(),s[3].setComponents(c-o,d-f,p-v,M-x).normalize(),n)s[4].setComponents(l,h,m,S).normalize(),s[5].setComponents(c-l,d-h,p-m,M-S).normalize();else if(s[4].setComponents(c-l,d-h,p-m,M-S).normalize(),e===us)s[5].setComponents(c+l,d+h,p+m,M+S).normalize();else if(e===zu)s[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),po.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),po.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(po)}intersectsSprite(t){po.center.set(0,0,0);let e=j2.distanceTo(t.center);return po.radius=.7071067811865476+e,po.applyMatrix4(t.matrixWorld),this.intersectsSphere(po)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ld.x=s.normal.x>0?t.max.x:t.min.x,Ld.y=s.normal.y>0?t.max.y:t.min.y,Ld.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ld)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yT=new Le,ip=class i{constructor(){this.coordinateSystem=us,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];yT.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new _o),n[s].setFromProjectionMatrix(yT,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new _o),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var vo=class extends xr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},np=new P,sp=new P,xT=new Le,Lu=new go,Od=new Bs,nv=new P,ST=new P,Jl=class extends gn{constructor(t=new Ye,e=new vo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)np.fromBufferAttribute(e,s-1),sp.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=np.distanceTo(sp);t.setAttribute("lineDistance",new qe(n,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Od.copy(n.boundingSphere),Od.applyMatrix4(s),Od.radius+=r,t.ray.intersectsSphere(Od)===!1)return;xT.copy(s).invert(),Lu.copy(t.ray).applyMatrix4(xT);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=d,m=_-1;v<m;v+=c){let p=u.getX(v),g=u.getX(v+1),x=Ud(this,t,Lu,l,p,g,v);x&&e.push(x)}if(this.isLineLoop){let v=u.getX(_-1),m=u.getX(d),p=Ud(this,t,Lu,l,v,m,_-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=d,m=_-1;v<m;v+=c){let p=Ud(this,t,Lu,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=Ud(this,t,Lu,l,_-1,d,_-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ud(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(np.fromBufferAttribute(o,s),sp.fromBufferAttribute(o,r),e.distanceSqToSegment(np,sp,nv,ST)>n)return;nv.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(nv);if(!(c<t.near||c>t.far))return{distance:c,point:ST.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ku=class extends Jl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},rp=class extends xr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bT=new Le,lv=new go,Pd=new Bs,Id=new P,yo=class extends gn{constructor(t=new Ye,e=new rp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pd.copy(n.boundingSphere),Pd.applyMatrix4(s),Pd.radius+=r,t.ray.intersectsSphere(Pd)===!1)return;bT.copy(s).invert(),lv.copy(t.ray).applyMatrix4(bT);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=h,v=d;_<v;_++){let m=c.getX(_);Id.fromBufferAttribute(f,m),MT(Id,m,l,s,t,e,this)}}else{let h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=h,v=d;_<v;_++)Id.fromBufferAttribute(f,_),MT(Id,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function MT(i,t,e,n,s,r,a){let o=lv.distanceSqToPoint(i);if(o<e){let l=new P;lv.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Vu=class extends mn{constructor(t=[],e=To,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Sr=class extends mn{constructor(t,e,n=Ms,s,r,a,o=Ai,l=Ai,c,u=yr,f=1){if(u!==yr&&u!==Tr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wu=class extends Sr{constructor(t,e=Ms,n=To,s,r,a=Ai,o=Ai,l,c=yr){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xu=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},jl=class i extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,d=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(f,2));function _(v,m,p,g,x,S,M,w,y,b,R){let C=S/y,O=M/b,I=S/2,G=M/2,N=w/2,k=y+1,X=b+1,B=0,et=0,q=new P;for(let $=0;$<X;$++){let it=$*O-G;for(let xt=0;xt<k;xt++){let Bt=xt*C-I;q[v]=Bt*g,q[m]=it*x,q[p]=N,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=w>0?1:-1,u.push(q.x,q.y,q.z),f.push(xt/y),f.push(1-$/b),B+=1}}for(let $=0;$<b;$++)for(let it=0;it<y;it++){let xt=h+it+k*$,Bt=h+it+k*($+1),Z=h+(it+1)+k*($+1),ht=h+(it+1)+k*$;l.push(xt,Bt,ht),l.push(Bt,Z,ht),et+=6}o.addGroup(d,et,R),d+=et,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var bs=class i extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,d=[],_=[],v=[],m=[];for(let p=0;p<u;p++){let g=p*h-a;for(let x=0;x<c;x++){let S=x*f-r;_.push(S,-g,0),v.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<o;g++){let x=g+c*p,S=g+c*(p+1),M=g+1+c*(p+1),w=g+1+c*p;d.push(x,S,w),d.push(S,M,w)}this.setIndex(d),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(v,3)),this.setAttribute("uv",new qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},xo=class i extends Ye{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],f=t,h=(e-t)/s,d=new P,_=new Lt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,u.push(_.x,_.y)}f+=h}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let g=p+m,x=g,S=g+n+1,M=g+n+2,w=g+1;o.push(x,S,w),o.push(S,M,w)}}this.setIndex(o),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var _n=class i extends Ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new P,h=new P,d=[],_=[],v=[],m=[];for(let p=0;p<=n;p++){let g=[],x=p/n,S=a+x*o,M=t*Math.cos(S),w=Math.sqrt(t*t-M*M),y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let b=0;b<=e;b++){let R=b/e,C=s+R*r;f.x=-w*Math.cos(C),f.y=M,f.z=w*Math.sin(C),_.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(R+y,1-x),g.push(c++)}u.push(g)}for(let p=0;p<n;p++)for(let g=0;g<e;g++){let x=u[p][g+1],S=u[p][g],M=u[p+1][g],w=u[p+1][g+1];(p!==0||a>0)&&d.push(x,S,w),(p!==n-1||l<Math.PI)&&d.push(S,M,w)}this.setIndex(d),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(v,3)),this.setAttribute("uv",new qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function wo(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(TT(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(TT(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function qi(i){let t={};for(let e=0;e<i.length;e++){let n=wo(i[e]);for(let s in n)t[s]=n[s]}return t}function TT(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function $2(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ov(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var wr={clone:wo,merge:qi},t3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,se=class extends xr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t3,this.fragmentShader=e3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wo(t.uniforms),this.uniformsGroups=$2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new wt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new He().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$l=class extends se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ap=class extends xr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},op=class extends xr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var qu=class extends vo{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Gl(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function zd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var xa=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let a;i:{n:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break n;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break e}a=e.length;break i}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break e}a=n,n=0;break i}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lp=class extends xa{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rv,endingEnd:rv}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case av:r=t,o=2*e-n;break;case ov:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case av:a=t,l=2*n-e;break;case ov:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,_=(n-e)/(s-e),v=_*_,m=v*_,p=-h*m+2*h*v-h*_,g=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*_+1,x=(-1-d)*m+(1.5+d)*v+.5*_,S=d*m-d*v;for(let M=0;M!==o;++M)r[M]=p*a[u+M]+g*a[c+M]+x*a[l+M]+S*a[f+M];return r}},cp=class extends xa{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},up=class extends xa{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hp=class extends xa{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let _=(n-e)/(s-e),v=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*_;return r}let h=o*2,d=t-1;for(let _=0;_!==o;++_){let v=a[c+_],m=a[l+_],p=d*h+_*2,g=f[p],x=f[p+1],S=t*h+_*2,M=u[S],w=u[S+1],y=n3(n,e,g,M,s);r[_]=gE(y,v,x,w,m)}return r}};function gE(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function i3(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function n3(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=gE(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=i3(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gl(e,this.TimeBufferType),this.values=Gl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Gl(t.times,Array),values:Gl(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),zd(t.settings)&&(n.settings={inTangents:Gl(t.settings.inTangents,Array),outTangents:Gl(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new up(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new cp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new hp(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Uu:e=this.InterpolantFactoryMethodDiscrete;break;case Kd:e=this.InterpolantFactoryMethodLinear;break;case Hd:e=this.InterpolantFactoryMethodSmooth;break;case sv:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Nt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uu;case this.InterpolantFactoryMethodLinear:return Kd;case this.InterpolantFactoryMethodSmooth:return Hd;case this.InterpolantFactoryMethodBezier:return sv}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;zd(this.settings)&&(ET(this.settings.inTangents,t),ET(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;zd(this.settings)&&(wT(this.settings.inTangents,t),wT(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){It("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){It("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&N2(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){It("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Hd,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,h=f-n,d=f+n;for(let _=0;_!==n;++_){let v=e[f+_];if(v!==e[h+_]||v!==e[d+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,zd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ET(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function wT(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Kd;var Sa=class extends Bn{constructor(t,e,n){super(t,e,n)}};Sa.prototype.ValueTypeName="bool";Sa.prototype.ValueBufferType=Array;Sa.prototype.DefaultInterpolation=Uu;Sa.prototype.InterpolantFactoryMethodLinear=void 0;Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var fp=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};fp.prototype.ValueTypeName="color";var dp=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};dp.prototype.ValueTypeName="number";var pp=class extends xa{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)zs.slerpFlat(r,0,a,c-o,a,c,l);return r}},Yu=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new pp(this.times,this.values,this.getValueSize(),t)}};Yu.prototype.ValueTypeName="quaternion";Yu.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends Bn{constructor(t,e,n){super(t,e,n)}};ba.prototype.ValueTypeName="string";ba.prototype.ValueBufferType=Array;ba.prototype.DefaultInterpolation=Uu;ba.prototype.InterpolantFactoryMethodLinear=void 0;ba.prototype.InterpolantFactoryMethodSmooth=void 0;var mp=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};mp.prototype.ValueTypeName="vector";var gp=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_E=new gp,_p=class{constructor(t){this.manager=t!==void 0?t:_E,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};_p.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bd=new P,Fd=new zs,Ps=new P,Zu=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=us,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bd,Fd,Ps),Ps.x===1&&Ps.y===1&&Ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bd,Fd,Ps.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Bd,Fd,Ps),Ps.x===1&&Ps.y===1&&Ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bd,Fd,Ps.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ga=new P,AT=new Lt,RT=new Lt,nn=class extends Zu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jd*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(I_*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(I_*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ga.x,ga.y).multiplyScalar(-t/ga.z),ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ga.x,ga.y).multiplyScalar(-t/ga.z)}getViewSize(t,e){return this.getViewBounds(t,AT,RT),e.subVectors(RT,AT)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(I_*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ma=class extends Zu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var kl=-90,Vl=1,tc=class extends gn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(kl,Vl,t,e);s.layers=this.layers,this.add(s);let r=new nn(kl,Vl,t,e);r.layers=this.layers,this.add(r);let a=new nn(kl,Vl,t,e);a.layers=this.layers,this.add(a);let o=new nn(kl,Vl,t,e);o.layers=this.layers,this.add(o);let l=new nn(kl,Vl,t,e);l.layers=this.layers,this.add(l);let c=new nn(kl,Vl,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===us)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zu)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},vp=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Qu=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=s3.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function s3(){this._document.hidden===!1&&this.reset()}var Uv="\\[\\]\\.:\\/",r3=new RegExp("["+Uv+"]","g"),Pv="[^"+Uv+"]",a3="[^"+Uv.replace("\\.","")+"]",o3=/((?:WC+[\/:])*)/.source.replace("WC",Pv),l3=/(WCOD+)?/.source.replace("WCOD",a3),c3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pv),u3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pv),h3=new RegExp("^"+o3+l3+c3+u3+"$"),f3=["material","materials","bones","map"],cv=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(r3,"")}static parseTrackName(t){let e=h3.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);f3.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;It("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=cv;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iz=new Float32Array(1);var CT=new Le,So=class{constructor(t,e,n=0,s=1/0){this.ray=new go(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):It("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return CT.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(CT),this}intersectObject(t,e=!0,n=[]){return uv(t,this,n,e),n.sort(DT),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)uv(t[s],this,n,e);return n.sort(DT),n}};function DT(i,t){return i.distance-t.distance}function uv(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)uv(r[a],t,e,!0)}}var hv=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Iv(i,t,e,n){let s=d3(n);switch(e){case Mv:return i*t;case Ev:return i*t/s.components*s.byteLength;case Ep:return i*t/s.components*s.byteLength;case Ea:return i*t*2/s.components*s.byteLength;case wp:return i*t*2/s.components*s.byteLength;case Tv:return i*t*3/s.components*s.byteLength;case Es:return i*t*4/s.components*s.byteLength;case Ap:return i*t*4/s.components*s.byteLength;case sh:case rh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ah:case oh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cp:case Np:return Math.max(i,16)*Math.max(t,8)/4;case Rp:case Dp:return Math.max(i,8)*Math.max(t,8)/2;case Lp:case Op:case Pp:case Ip:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Up:case lh:case zp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fp:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hp:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Gp:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kp:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vp:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wp:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xp:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qp:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yp:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zp:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qp:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kp:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jp:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jp:case $p:case tm:return Math.ceil(i/4)*Math.ceil(t/4)*16;case em:case im:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ch:case nm:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d3(i){switch(i){case Fn:case yv:return{byteLength:1,components:1};case sc:case xv:case gi:return{byteLength:2,components:1};case Mp:case Tp:return{byteLength:2,components:4};case Ms:case bp:case Ts:return{byteLength:4,components:1};case Sv:case bv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function FE(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function m3(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){let _=f[h],v=f[d];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){let v=f[d];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var g3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,v3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,E3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,C3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,N3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,L3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,z3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,B3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,F3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,H3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,G3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X3="gl_FragColor = linearToOutputTexel( gl_FragColor );",q3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Z3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Q3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,K3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,j3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iD=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,oD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,lD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gD=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_D=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ED=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CD=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ND=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,UD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ID=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,BD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,FD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,XD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$D=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sN=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_N=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vN=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,EN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ON=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:g3,alphahash_pars_fragment:_3,alphamap_fragment:v3,alphamap_pars_fragment:y3,alphatest_fragment:x3,alphatest_pars_fragment:S3,aomap_fragment:b3,aomap_pars_fragment:M3,batching_pars_vertex:T3,batching_vertex:E3,begin_vertex:w3,beginnormal_vertex:A3,bsdfs:R3,iridescence_fragment:C3,bumpmap_pars_fragment:D3,clipping_planes_fragment:N3,clipping_planes_pars_fragment:L3,clipping_planes_pars_vertex:O3,clipping_planes_vertex:U3,color_fragment:P3,color_pars_fragment:I3,color_pars_vertex:z3,color_vertex:B3,common:F3,defaultnormal_vertex:H3,displacementmap_pars_vertex:G3,displacementmap_vertex:k3,emissivemap_fragment:V3,emissivemap_pars_fragment:W3,colorspace_fragment:X3,colorspace_pars_fragment:q3,envmap_fragment:Y3,envmap_common_pars_fragment:Z3,envmap_pars_fragment:Q3,envmap_pars_vertex:K3,envmap_physical_pars_fragment:oD,envmap_vertex:J3,fog_vertex:j3,fog_pars_vertex:$3,fog_fragment:tD,fog_pars_fragment:eD,gradientmap_pars_fragment:iD,lightmap_pars_fragment:nD,lights_lambert_fragment:sD,lights_lambert_pars_fragment:rD,lights_pars_begin:aD,lights_toon_fragment:lD,lights_toon_pars_fragment:cD,lights_phong_fragment:uD,lights_phong_pars_fragment:hD,lights_physical_fragment:fD,lights_physical_pars_fragment:dD,lights_fragment_begin:pD,lights_fragment_maps:mD,lights_fragment_end:gD,lightprobes_pars_fragment:_D,logdepthbuf_fragment:vD,logdepthbuf_pars_fragment:yD,logdepthbuf_pars_vertex:xD,logdepthbuf_vertex:SD,map_fragment:bD,map_pars_fragment:MD,map_particle_fragment:TD,map_particle_pars_fragment:ED,metalnessmap_fragment:wD,metalnessmap_pars_fragment:AD,morphinstance_vertex:RD,morphcolor_vertex:CD,morphnormal_vertex:DD,morphtarget_pars_vertex:ND,morphtarget_vertex:LD,normal_fragment_begin:OD,normal_fragment_maps:UD,normal_pars_fragment:PD,normal_pars_vertex:ID,normal_vertex:zD,normalmap_pars_fragment:BD,clearcoat_normal_fragment_begin:FD,clearcoat_normal_fragment_maps:HD,clearcoat_pars_fragment:GD,iridescence_pars_fragment:kD,opaque_fragment:VD,packing:WD,premultiplied_alpha_fragment:XD,project_vertex:qD,dithering_fragment:YD,dithering_pars_fragment:ZD,roughnessmap_fragment:QD,roughnessmap_pars_fragment:KD,shadowmap_pars_fragment:JD,shadowmap_pars_vertex:jD,shadowmap_vertex:$D,shadowmask_pars_fragment:tN,skinbase_vertex:eN,skinning_pars_vertex:iN,skinning_vertex:nN,skinnormal_vertex:sN,specularmap_fragment:rN,specularmap_pars_fragment:aN,tonemapping_fragment:oN,tonemapping_pars_fragment:lN,transmission_fragment:cN,transmission_pars_fragment:uN,uv_pars_fragment:hN,uv_pars_vertex:fN,uv_vertex:dN,worldpos_vertex:pN,background_vert:mN,background_frag:gN,backgroundCube_vert:_N,backgroundCube_frag:vN,cube_vert:yN,cube_frag:xN,depth_vert:SN,depth_frag:bN,distance_vert:MN,distance_frag:TN,equirect_vert:EN,equirect_frag:wN,linedashed_vert:AN,linedashed_frag:RN,meshbasic_vert:CN,meshbasic_frag:DN,meshlambert_vert:NN,meshlambert_frag:LN,meshmatcap_vert:ON,meshmatcap_frag:UN,meshnormal_vert:PN,meshnormal_frag:IN,meshphong_vert:zN,meshphong_frag:BN,meshphysical_vert:FN,meshphysical_frag:HN,meshtoon_vert:GN,meshtoon_frag:kN,points_vert:VN,points_frag:WN,shadow_vert:XN,shadow_frag:qN,sprite_vert:YN,sprite_frag:ZN},_t={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Gs={basic:{uniforms:qi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:qi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:qi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:qi([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:qi([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new wt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:qi([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:qi([_t.points,_t.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:qi([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:qi([_t.common,_t.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:qi([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:qi([_t.sprite,_t.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:qi([_t.common,_t.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:qi([_t.lights,_t.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Gs.physical={uniforms:qi([Gs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var sm={r:0,b:0,g:0},QN=new Le,HE=new Ht;HE.set(-1,0,0,0,1,0,0,0,1);function KN(i,t,e,n,s,r){let a=new wt(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(g){let x=g.isScene===!0?g.background:null;if(x&&x.isTexture){let S=g.backgroundBlurriness>0;x=t.get(x,S)}return x}function _(g){let x=!1,S=d(g);S===null?m(a,o):S&&S.isColor&&(m(S,1),x=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(g,x){let S=d(x);S&&S.isCubeTexture?(c===void 0&&(c=new he(new jl(1,1,1),new se({name:"BackgroundCubeMaterial",uniforms:wo(Gs.backgroundCube.uniforms),vertexShader:Gs.backgroundCube.vertexShader,fragmentShader:Gs.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(QN.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(HE),c.material.toneMapped=Qt.getTransfer(S.colorSpace)!==oe,(u!==S||f!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new he(new bs(2,2),new se({name:"BackgroundMaterial",uniforms:wo(Gs.background.uniforms),vertexShader:Gs.background.vertexShader,fragmentShader:Gs.background.fragmentShader,side:Ta,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(S.colorSpace)!==oe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,x){g.getRGB(sm,Ov(i)),e.buffers.color.setClear(sm.r,sm.g,sm.b,x,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),o=x,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:_,addToRenderList:v,dispose:p}}function JN(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(O,I,G,N,k){let X=!1,B=f(O,N,G,I);r!==B&&(r=B,c(r.object)),X=d(O,N,G,k),X&&_(O,N,G,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(O,I,G,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function u(O){return i.deleteVertexArray(O)}function f(O,I,G,N){let k=N.wireframe===!0,X=n[I.id];X===void 0&&(X={},n[I.id]=X);let B=O.isInstancedMesh===!0?O.id:0,et=X[B];et===void 0&&(et={},X[B]=et);let q=et[G.id];q===void 0&&(q={},et[G.id]=q);let $=q[k];return $===void 0&&($=h(l()),q[k]=$),$}function h(O){let I=[],G=[],N=[];for(let k=0;k<e;k++)I[k]=0,G[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:N,object:O,attributes:{},index:null}}function d(O,I,G,N){let k=r.attributes,X=I.attributes,B=0,et=G.getAttributes();for(let q in et)if(et[q].location>=0){let it=k[q],xt=X[q];if(xt===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(xt=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(xt=O.instanceColor)),it===void 0||it.attribute!==xt||xt&&it.data!==xt.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function _(O,I,G,N){let k={},X=I.attributes,B=0,et=G.getAttributes();for(let q in et)if(et[q].location>=0){let it=X[q];it===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(it=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(it=O.instanceColor));let xt={};xt.attribute=it,it&&it.data&&(xt.data=it.data),k[q]=xt,B++}r.attributes=k,r.attributesNum=B,r.index=N}function v(){let O=r.newAttributes;for(let I=0,G=O.length;I<G;I++)O[I]=0}function m(O){p(O,0)}function p(O,I){let G=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;G[O]=1,N[O]===0&&(i.enableVertexAttribArray(O),N[O]=1),k[O]!==I&&(i.vertexAttribDivisor(O,I),k[O]=I)}function g(){let O=r.newAttributes,I=r.enabledAttributes;for(let G=0,N=I.length;G<N;G++)I[G]!==O[G]&&(i.disableVertexAttribArray(G),I[G]=0)}function x(O,I,G,N,k,X,B){B===!0?i.vertexAttribIPointer(O,I,G,k,X):i.vertexAttribPointer(O,I,G,N,k,X)}function S(O,I,G,N){v();let k=N.attributes,X=G.getAttributes(),B=I.defaultAttributeValues;for(let et in X){let q=X[et];if(q.location>=0){let $=k[et];if($===void 0&&(et==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),et==="instanceColor"&&O.instanceColor&&($=O.instanceColor)),$!==void 0){let it=$.normalized,xt=$.itemSize,Bt=t.get($);if(Bt===void 0)continue;let Z=Bt.buffer,ht=Bt.type,bt=Bt.bytesPerElement,Ct=ht===i.INT||ht===i.UNSIGNED_INT||$.gpuType===bp;if($.isInterleavedBufferAttribute){let vt=$.data,Vt=vt.isInterleavedBuffer===!0?vt.stride:vt.itemSize,ti=$.offset;if(vt.isInstancedInterleavedBuffer||vt.isInstancedBufferAttribute){for(let Ut=0;Ut<q.locationSize;Ut++)p(q.location+Ut,vt.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Ut=0;Ut<q.locationSize;Ut++)m(q.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Ut=0;Ut<q.locationSize;Ut++)x(q.location+Ut,xt/q.locationSize,ht,it,Vt*bt,(ti+xt/q.locationSize*Ut)*bt,Ct)}else{if($.isInstancedBufferAttribute){for(let vt=0;vt<q.locationSize;vt++)p(q.location+vt,$.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let vt=0;vt<q.locationSize;vt++)m(q.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let vt=0;vt<q.locationSize;vt++)x(q.location+vt,xt/q.locationSize,ht,it,xt*bt,xt/q.locationSize*vt*bt,Ct)}}else if(B!==void 0){let it=B[et];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(q.location,it);break;case 3:i.vertexAttrib3fv(q.location,it);break;case 4:i.vertexAttrib4fv(q.location,it);break;default:i.vertexAttrib1fv(q.location,it)}}}}g()}function M(){R();for(let O in n){let I=n[O];for(let G in I){let N=I[G];for(let k in N){let X=N[k];for(let B in X)u(X[B].object),delete X[B];delete N[k]}}delete n[O]}}function w(O){if(n[O.id]===void 0)return;let I=n[O.id];for(let G in I){let N=I[G];for(let k in N){let X=N[k];for(let B in X)u(X[B].object),delete X[B];delete N[k]}}delete n[O.id]}function y(O){for(let I in n){let G=n[I];for(let N in G){let k=G[N];if(k[O.id]===void 0)continue;let X=k[O.id];for(let B in X)u(X[B].object),delete X[B];delete k[O.id]}}}function b(O){for(let I in n){let G=n[I],N=O.isInstancedMesh===!0?O.id:0,k=G[N];if(k!==void 0){for(let X in k){let B=k[X];for(let et in B)u(B[et].object),delete B[et];delete k[X]}delete G[N],Object.keys(G).length===0&&delete n[I]}}}function R(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:y,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function jN(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $N(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==Es&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){let b=y===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Fn&&y!==Ts&&!b&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:S,maxSamples:M,samples:w}}function tL(i){let t=this,e=null,n=0,s=!1,r=!1,a=new zn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{let g=r?0:n,x=g*4,S=p.clippingState||null;l.value=S,S=u(_,h,x,d);for(let M=0;M!==x;++M)S[M]=e[M];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,_){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let p=d+v*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=d;x!==v;++x,S+=4)a.copy(f[x]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var dh=class extends je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new jl(5,5,5),r=new se({name:"CubemapFromEquirect",uniforms:wo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mi,blending:br});r.uniforms.tEquirect.value=e;let a=new he(s,r),o=e.minFilter;return e.minFilter===Mr&&(e.minFilter=Ri),new tc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},vE=256,eL=3,iL=20,GE=256,kE=16,nL=3,sL=new P,rL=new wt,am=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new tc(1,10,null),this._boxMesh=new he(new jl(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=sL}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,h=l.autoClearColor,d=l.autoClearDepth,_=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(rL));let m=new tc(n,s,u);return m.position.copy(o),m.update(l,t),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=d,l.autoClearStencil=_,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=SE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(vE,pE(t))}_fromTexture(t,e){t.mapping===To||t.mapping===nc?this._setSize(t.image.length===0?vE:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=yE(t,!1,!1),n=Math.log2(t)-eL;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yE(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===To||t.mapping===nc?(this._cubemapMaterial===null&&(this._cubemapMaterial=SE()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xE()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=aL(),this._integrationMaterial=oL());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/kE);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-nL)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(GE*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=lL());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function yE(i,t,e){return new dh(i,{minFilter:Mr,generateMipmaps:t,type:gi,colorSpace:Pu,depthBuffer:e})}function ph(i,t,e){return new se({name:i,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:mi,blending:br,depthTest:!1,depthWrite:!1})}function aL(){return ph("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${GE}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function oL(){return ph("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:kE}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function lL(){return ph("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${iL}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function xE(){return ph("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function SE(){return ph("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function cL(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===yp||d===xp)if(t.has(h)){let _=t.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let v=new dh(_.height);return v.fromEquirectangularTexture(i,h),t.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let d=h.mapping,_=d===yp||d===xp,v=d===To||d===nc;if(_||v){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new am(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let g=h.image;return _&&g&&g.height>0||v&&g&&l(g)?(n===null&&(n=new am(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===yp?h.mapping=To:d===xp&&(h.mapping=nc),h}function l(h){let d=0,_=6;for(let v=0;v<_;v++)h[v]!==void 0&&d++;return d===_}function c(h){let d=h.target;d.removeEventListener("dispose",c);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function uL(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ou("WebGLRenderer: "+n+" extension not supported."),s}}}function hL(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let v=r.get(_);v&&(t.remove(v),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function u(_){let v=_.attributes;for(let m in v)t.update(v[m],i.ARRAY_BUFFER)}function f(_){let v=_.index,m=_.attributes.position,p=0;if(m===void 0)return;let g=v!==null?v.array.length:m.array.length/3-1,x=m.count>=65535?Gu:Hu,S=new x(Math.ceil(g/3)*6,1),M=S.array;if(v!==null){let y=v.array;p=v.version;for(let b=0,R=0;b<g;b+=3){let C=y[b+0],O=y[b+1],I=y[b+2];M[R++]=C,M[R++]=O,M[R++]=O,M[R++]=I,M[R++]=I,M[R++]=C}}else{p=m.version;for(let y=0,b=0;y<g;y+=3){let R=y+0,C=y+1,O=y+2;M[b++]=R,M[b++]=C,M[b++]=C,M[b++]=O,M[b++]=O,M[b++]=R}}S.version=p;let w=r.get(_);w&&t.remove(w),r.set(_,S)}function h(_){let v=r.get(_);if(v){let m=_.index;m!==null&&v.version<m.version&&f(_)}else f(_);return r.get(_)}function d(){for(let _ in s){let v=s[_].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:h,dispose:d}}function fL(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=h[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function dL(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:It("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function pL(i,t,e){let n=new WeakMap,s=new He;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let R=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],x=0;d===!0&&(x=1),_===!0&&(x=2),v===!0&&(x=3);let S=o.attributes.position.count*x,M=1;S>t.maxTextureSize&&(M=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let w=new Float32Array(S*M*4*f),y=new Fu(w,S,M,f);y.type=Ts,y.needsUpdate=!0;let b=x*4;for(let C=0;C<f;C++){let O=m[C],I=p[C],G=g[C],N=S*M*4*C;for(let k=0;k<O.count;k++){let X=k*b;d===!0&&(s.fromBufferAttribute(O,k),w[N+X+0]=s.x,w[N+X+1]=s.y,w[N+X+2]=s.z,w[N+X+3]=0),_===!0&&(s.fromBufferAttribute(I,k),w[N+X+4]=s.x,w[N+X+5]=s.y,w[N+X+6]=s.z,w[N+X+7]=0),v===!0&&(s.fromBufferAttribute(G,k),w[N+X+8]=s.x,w[N+X+9]=s.y,w[N+X+10]=s.z,w[N+X+11]=G.itemSize===4?s.w:1)}}h={count:f,texture:y,size:new Lt(S,M)},n.set(o,h),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function mL(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var gL={[Ju]:"LINEAR_TONE_MAPPING",[ju]:"REINHARD_TONE_MAPPING",[$u]:"CINEON_TONE_MAPPING",[Mo]:"ACES_FILMIC_TONE_MAPPING",[eh]:"AGX_TONE_MAPPING",[ih]:"NEUTRAL_TONE_MAPPING",[th]:"CUSTOM_TONE_MAPPING"};function _L(i,t,e,n,s,r){let a=new je(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Ye;u.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new qe([0,2,0,0,2,0],2));let f=new $l({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new he(u,f),d=new Ma(-1,1,1,-1,0,1),_=null,v=null,m=!1,p,g=null,x=[],S=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let y=0;y<x.length;y++){let b=x[y];b.setSize&&b.setSize(M,w)}},this.setEffects=function(M){x=M,S=x.length>0&&x[0].isRenderPass===!0;let w=a.width,y=a.height;x.length>0&&o===null&&(o=new je(w,y,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new je(w,y,{type:gi,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&x.some(R=>R.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Sr(w,y),r===!0&&(c.format=Tr,c.type=Eo)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let R=0;R<x.length;R++){let C=x[R];C.setSize&&C.setSize(w,y),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(M,w){if(m||M.toneMapping===Fs&&x.length===0)return!1;if(g=w,w!==null){let y=w.width,b=w.height;(a.width!==y||a.height!==b)&&this.setSize(y,b)}return S===!1&&M.setRenderTarget(a),p=M.toneMapping,M.toneMapping=Fs,!0},this.hasRenderPass=function(){return S},this.end=function(M,w){M.toneMapping=p,m=!0;let y=a,b=o;for(let R=0;R<x.length;R++){let C=x[R];C.enabled!==!1&&(C.render(M,b,y,w),C.needsSwap!==!1&&(y=b,b=b===o?l:o))}if(_!==M.outputColorSpace||v!==M.toneMapping){_=M.outputColorSpace,v=M.toneMapping,f.defines={},Qt.getTransfer(_)===oe&&(f.defines.SRGB_TRANSFER="");let R=gL[v];R&&(f.defines[R]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(g),M.render(h,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var VE=new mn,WE=new Sr(1,1),XE=new Wu(1),qE=new Fu,YE=new tp,ZE=new Vu,bE=[],ME=[],TE=new Float32Array(16),EE=new Float32Array(9),wE=new Float32Array(4);function ac(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bE[s];if(r===void 0&&(r=new Float32Array(s),bE[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function _i(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function vi(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lm(i,t){let e=ME[t];e===void 0&&(e=new Int32Array(t),ME[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vL(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function yL(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_i(e,t))return;i.uniform2fv(this.addr,t),vi(e,t)}}function xL(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_i(e,t))return;i.uniform3fv(this.addr,t),vi(e,t)}}function SL(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_i(e,t))return;i.uniform4fv(this.addr,t),vi(e,t)}}function bL(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_i(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),vi(e,t)}else{if(_i(e,n))return;wE.set(n),i.uniformMatrix2fv(this.addr,!1,wE),vi(e,n)}}function ML(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_i(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),vi(e,t)}else{if(_i(e,n))return;EE.set(n),i.uniformMatrix3fv(this.addr,!1,EE),vi(e,n)}}function TL(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_i(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),vi(e,t)}else{if(_i(e,n))return;TE.set(n),i.uniformMatrix4fv(this.addr,!1,TE),vi(e,n)}}function EL(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wL(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_i(e,t))return;i.uniform2iv(this.addr,t),vi(e,t)}}function AL(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_i(e,t))return;i.uniform3iv(this.addr,t),vi(e,t)}}function RL(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_i(e,t))return;i.uniform4iv(this.addr,t),vi(e,t)}}function CL(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function DL(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_i(e,t))return;i.uniform2uiv(this.addr,t),vi(e,t)}}function NL(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_i(e,t))return;i.uniform3uiv(this.addr,t),vi(e,t)}}function LL(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_i(e,t))return;i.uniform4uiv(this.addr,t),vi(e,t)}}function cm(i){return i.version===0&&(i.compareFunction=Cv,i.needsUpdate=!0),i}function OL(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=cm(WE):r=VE,e.setTexture2D(t||r,s)}function UL(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||YE,s)}function PL(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=cm(XE):r=ZE,e.setTextureCube(t||r,s)}function IL(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qE,s)}function zL(i){switch(i){case 5126:return vL;case 35664:return yL;case 35665:return xL;case 35666:return SL;case 35674:return bL;case 35675:return ML;case 35676:return TL;case 5124:case 35670:return EL;case 35667:case 35671:return wL;case 35668:case 35672:return AL;case 35669:case 35673:return RL;case 5125:return CL;case 36294:return DL;case 36295:return NL;case 36296:return LL;case 35678:case 36198:case 36298:case 36306:case 35682:return OL;case 35679:case 36299:case 36307:return UL;case 35680:case 36300:case 36308:case 36293:return PL;case 36289:case 36303:case 36311:case 36292:return IL}}function BL(i,t){i.uniform1fv(this.addr,t)}function FL(i,t){let e=ac(t,this.size,2);i.uniform2fv(this.addr,e)}function HL(i,t){let e=ac(t,this.size,3);i.uniform3fv(this.addr,e)}function GL(i,t){let e=ac(t,this.size,4);i.uniform4fv(this.addr,e)}function kL(i,t){let e=ac(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function VL(i,t){let e=ac(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function WL(i,t){let e=ac(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function XL(i,t){i.uniform1iv(this.addr,t)}function qL(i,t){i.uniform2iv(this.addr,t)}function YL(i,t){i.uniform3iv(this.addr,t)}function ZL(i,t){i.uniform4iv(this.addr,t)}function QL(i,t){i.uniform1uiv(this.addr,t)}function KL(i,t){i.uniform2uiv(this.addr,t)}function JL(i,t){i.uniform3uiv(this.addr,t)}function jL(i,t){i.uniform4uiv(this.addr,t)}function $L(i,t,e){let n=this.cache,s=t.length,r=lm(e,s);_i(n,r)||(i.uniform1iv(this.addr,r),vi(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=cm(WE):a=VE;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function tO(i,t,e){let n=this.cache,s=t.length,r=lm(e,s);_i(n,r)||(i.uniform1iv(this.addr,r),vi(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||YE,r[a])}function eO(i,t,e){let n=this.cache,s=t.length,r=lm(e,s);_i(n,r)||(i.uniform1iv(this.addr,r),vi(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=cm(XE):a=ZE;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function iO(i,t,e){let n=this.cache,s=t.length,r=lm(e,s);_i(n,r)||(i.uniform1iv(this.addr,r),vi(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qE,r[a])}function nO(i){switch(i){case 5126:return BL;case 35664:return FL;case 35665:return HL;case 35666:return GL;case 35674:return kL;case 35675:return VL;case 35676:return WL;case 5124:case 35670:return XL;case 35667:case 35671:return qL;case 35668:case 35672:return YL;case 35669:case 35673:return ZL;case 5125:return QL;case 36294:return KL;case 36295:return JL;case 36296:return jL;case 35678:case 36198:case 36298:case 36306:case 35682:return $L;case 35679:case 36299:case 36307:return tO;case 35680:case 36300:case 36308:case 36293:return eO;case 36289:case 36303:case 36311:case 36292:return iO}}var Fv=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zL(e.type)}},Hv=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nO(e.type)}},Gv=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},zv=/(\w+)(\])?(\[|\.)?/g;function AE(i,t){i.seq.push(t),i.map[t.id]=t}function sO(i,t,e){let n=i.name,s=n.length;for(zv.lastIndex=0;;){let r=zv.exec(n),a=zv.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){AE(e,c===void 0?new Fv(o,i,t):new Hv(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Gv(o),AE(e,f)),e=f}}}var rc=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);sO(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function RE(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var rO=37297,aO=0;function oO(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var CE=new Ht;function lO(i){Qt._getMatrix(CE,Qt.workingColorSpace,i);let t=`mat3( ${CE.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Iu:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function DE(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+oO(i.getShaderSource(t),o)}else return r}function cO(i,t){let e=lO(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var uO={[Ju]:"Linear",[ju]:"Reinhard",[$u]:"Cineon",[Mo]:"ACESFilmic",[eh]:"AgX",[ih]:"Neutral",[th]:"Custom"};function hO(i,t){let e=uO[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rm=new P;function fO(){Qt.getLuminanceCoefficients(rm);let i=rm.x.toFixed(4),t=rm.y.toFixed(4),e=rm.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dO(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fh).join(`
`)}function pO(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mO(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function fh(i){return i!==""}function NE(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function LE(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gO=/^[ \t]*#include +<([\w\d./]+)>/gm;function kv(i){return i.replace(gO,_O)}function _O(i,t){let e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return kv(e)}var vO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function OE(i){return i.replace(vO,yO)}function yO(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function UE(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var xO={[Ku]:"SHADOWMAP_TYPE_PCF",[ec]:"SHADOWMAP_TYPE_VSM"};function SO(i){return xO[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bO={[nc]:"ENVMAP_MODE_REFRACTION"};function MO(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":bO[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var TO={[_v]:"ENVMAP_BLENDING_MULTIPLY",[jT]:"ENVMAP_BLENDING_MIX",[$T]:"ENVMAP_BLENDING_ADD"};function EO(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":TO[i.combine]||"ENVMAP_BLENDING_NONE"}function wO(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=SO(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=MO(e),f=EO(e),h=dO(e),d=pO(r),_=s.createProgram(),v,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(fh).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(fh).join(`
`),m.length>0&&(m+=`
`)):(v=[UE(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fh).join(`
`),m=[UE(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fs?"#define TONE_MAPPING":"",e.toneMapping!==Fs?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Fs?hO("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,cO("linearToOutputTexel",e.outputColorSpace),fO(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fh).join(`
`)),a=kv(a),a=NE(a,e),a=LE(a,e),o=kv(o),o=NE(o,e),o=LE(o,e),a=OE(a),o=OE(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let g=p+v+a,x=p+m+o,S=RE(s,s.VERTEX_SHADER,g),M=RE(s,s.FRAGMENT_SHADER,x);s.attachShader(_,S),s.attachShader(_,M),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(_)||"",I=s.getShaderInfoLog(S)||"",G=s.getShaderInfoLog(M)||"",N=O.trim(),k=I.trim(),X=G.trim(),B=!0,et=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,M);else{let q=DE(s,S,"vertex"),$=DE(s,M,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+q+`
`+$)}else N!==""?Nt("WebGLProgram: Program Info Log:",N):(k===""||X==="")&&(et=!1);et&&(C.diagnostics={runnable:B,programLog:N,vertexShader:{log:k,prefix:v},fragmentShader:{log:X,prefix:m}})}s.deleteShader(S),s.deleteShader(M),y=new rc(s,_),b=mO(s,_)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,rO)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=aO++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=M,this}var AO=0,Vv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wv(t),e.set(t,n)),n}},Wv=class{constructor(t){this.id=AO++,this.code=t,this.usedTimes=0}};function RO(i){return i===Ea||i===lh||i===ch}function CO(i,t,e,n,s,r){let a=new Ql,o=new Vv,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,b,R,C,O,I){let G=C.fog,N=O.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=t.get(y.envMap||k,X),et=h[y.type],q=n.precision;y.precision!==null&&(q=n.getMaxPrecision(y.precision),q!==y.precision&&Nt("WebGLProgram.getParameters:",y.precision,"not supported, using",q,"instead."));let $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,it=$!==void 0?$.length:0,xt=0;N.morphAttributes.position!==void 0&&(xt=1),N.morphAttributes.normal!==void 0&&(xt=2),N.morphAttributes.color!==void 0&&(xt=3);let Bt,Z,ht,bt;if(et){let gt=Gs[et];Bt=gt.vertexShader,Z=gt.fragmentShader}else{Bt=y.vertexShader,Z=y.fragmentShader;let gt=o.getVertexShaderStage(y),pe=o.getFragmentShaderStage(y);o.update(y,gt,pe),ht=gt.id,bt=pe.id}let Ct=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Vt=O.isInstancedMesh===!0,ti=O.isBatchedMesh===!0,Ut=!!y.map,de=!!y.matcap,xe=!!B,jt=xe&&B.isPMREMTexture===!0,Di=!!y.aoMap,ui=!!y.lightMap,on=!!y.bumpMap&&y.wireframe===!1,Be=!!y.normalMap,ws=!!y.displacementMap,xi=!!y.emissiveMap,Yn=!!y.metalnessMap,Zn=!!y.roughnessMap,Qn=y.anisotropy>0,U=y.clearcoat>0,Kn=y.diffuseRoughness>0,Oe=y.dispersion>0,Ue=y.retroreflectivity>0,mt=y.iridescence>0,hi=y.sheen>0,Dt=y.transmission>0,Gt=Qn&&!!y.anisotropyMap,A=U&&!!y.clearcoatMap,T=U&&!!y.clearcoatNormalMap,F=U&&!!y.clearcoatRoughnessMap,st=Kn&&!!y.diffuseRoughnessMap,j=mt&&!!y.iridescenceMap,ot=mt&&!!y.iridescenceThicknessMap,dt=hi&&!!y.sheenColorMap,Q=hi&&!!y.sheenRoughnessMap,K=!!y.specularMap,ct=!!y.specularColorMap,D=!!y.specularIntensityMap,J=Dt&&!!y.transmissionMap,Y=Dt&&!!y.thicknessMap,ut=!!y.gradientMap,at=!!y.alphaMap,lt=y.alphaTest>0,At=!!y.alphaHash,Yt=!!y.extensions,rt=Fs;y.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(rt=i.toneMapping);let Rt=jt?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,qt={shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:Bt,fragmentShader:Z,defines:y.defines,customVertexShaderID:ht,customFragmentShaderID:bt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:q,batching:ti,batchingColor:ti&&O._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&O.instanceColor!==null,instancingMorph:Vt&&O.morphTexture!==null,outputColorSpace:Ct===null?i.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ut,matcap:de,envMap:xe,envMapMode:xe&&B.mapping,envMapPMREM:jt,envMapMaxLod:jt?Rt.length-1:null,envMapSize:jt?Rt[0].width:null,aoMap:Di,lightMap:ui,bumpMap:on,normalMap:Be,displacementMap:ws,emissiveMap:xi,normalMapObjectSpace:Be&&y.normalMapType===iE,normalMapTangentSpace:Be&&y.normalMapType===wv,packedNormalMap:Be&&y.normalMapType===wv&&RO(y.normalMap.format),metalnessMap:Yn,roughnessMap:Zn,anisotropy:Qn,anisotropyMap:Gt,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:T,clearcoatRoughnessMap:F,diffuseRoughness:Kn,diffuseRoughnessMap:st,dispersion:Oe,retroreflection:Ue,iridescence:mt,iridescenceMap:j,iridescenceThicknessMap:ot,sheen:hi,sheenColorMap:dt,sheenRoughnessMap:Q,specularMap:K,specularColorMap:ct,specularIntensityMap:D,transmission:Dt,transmissionMap:J,thicknessMap:Y,gradientMap:ut,opaque:y.transparent===!1&&y.blending===ic&&y.alphaToCoverage===!1,alphaMap:at,alphaTest:lt,alphaHash:At,combine:y.combine,mapUv:Ut&&d(y.map.channel),aoMapUv:Di&&d(y.aoMap.channel),lightMapUv:ui&&d(y.lightMap.channel),bumpMapUv:on&&d(y.bumpMap.channel),normalMapUv:Be&&d(y.normalMap.channel),displacementMapUv:ws&&d(y.displacementMap.channel),emissiveMapUv:xi&&d(y.emissiveMap.channel),metalnessMapUv:Yn&&d(y.metalnessMap.channel),roughnessMapUv:Zn&&d(y.roughnessMap.channel),anisotropyMapUv:Gt&&d(y.anisotropyMap.channel),clearcoatMapUv:A&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:j&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:Q&&d(y.sheenRoughnessMap.channel),specularMapUv:K&&d(y.specularMap.channel),specularColorMapUv:ct&&d(y.specularColorMap.channel),specularIntensityMapUv:D&&d(y.specularIntensityMap.channel),transmissionMapUv:J&&d(y.transmissionMap.channel),thicknessMapUv:Y&&d(y.thicknessMap.channel),alphaMapUv:at&&d(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Be||Qn),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(Ut||at),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&Be===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:vt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:xt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:I.filter(gt=>gt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:Ut&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===oe,decodeVideoTextureEmissive:xi&&y.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(y.emissiveMap.colorSpace)===oe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xi,flipSided:y.side===mi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Yt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&y.extensions.multiDraw===!0||ti)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function v(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)b.push(R),b.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(m(b,y),p(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function m(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapPMREM),y.push(b.envMapMaxLod),y.push(b.envMapSize),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.diffuseRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.numLightProbeGrids),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function p(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function g(y){let b=h[y.type],R;if(b){let C=Gs[b];R=wr.clone(C.uniforms)}else R=y.uniforms;return R}function x(y,b){let R=u.get(b);return R!==void 0?++R.usedTimes:(R=new wO(i,b,y,s),c.push(R),u.set(b,R)),R}function S(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function M(y){o.remove(y)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:g,acquireProgram:x,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:w}}function DO(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function NO(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function PE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function IE(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,v,m,p){let g=i[t];return g===void 0?(g={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},i[t]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=_,g.materialVariant=a(h),g.groupOrder=v,g.renderOrder=h.renderOrder,g.z=m,g.group=p),t++,g}function l(h,d,_,v,m,p,g){g.reversedDepth===!0&&(m=-m);let x=o(h,d,_,v,m,p);_.transmission>0?n.push(x):_.transparent===!0?s.push(x):e.push(x)}function c(h,d,_,v,m,p){let g=o(h,d,_,v,m,p);_.transmission>0?n.unshift(g):_.transparent===!0?s.unshift(g):e.unshift(g)}function u(h,d){e.length>1&&e.sort(h||NO),n.length>1&&n.sort(d||PE),s.length>1&&s.sort(d||PE)}function f(){for(let h=t,d=i.length;h<d;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function LO(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new IE,i.set(n,[a])):s>=r.length?(a=new IE,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function OO(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new wt};break;case"SpotLight":e={position:new P,direction:new P,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function UO(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var PO=0;function IO(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zO(i){let t=new OO,e=UO(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Le,a=new Le;function o(c){let u=0,f=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,_=0,v=0,m=0,p=0,g=0,x=0,S=0,M=0,w=0,y=0,b=0,R=0,C=0;c.sort(IO);for(let I=0,G=c.length;I<G;I++){let N=c[I],k=N.color,X=N.intensity,B=N.distance,et=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ea?et=N.shadow.map.texture:et=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*X,f+=k.g*X,h+=k.b*X;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],X);C++}else if(N.isSunLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,it=e.get(N);it.shadowIntensity=$.intensity,it.shadowBias=$.bias,it.shadowNormalBias=$.normalBias,it.shadowRadius=$.radius,it.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[_]=it,n.sunShadowMap[_]=et;let xt=$.getViewportCount();for(let Bt=0;Bt<xt;Bt++)n.sunShadowMatrix[v+Bt]=$.getMatrix(Bt),n.sunShadowCascade[v+Bt]=$._cascadeData[Bt];v+=xt,_++}n.sun[d]=q,d++}else if(N.isDirectionalLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,it=e.get(N);it.shadowIntensity=$.intensity,it.shadowBias=$.bias,it.shadowNormalBias=$.normalBias,it.shadowRadius=$.radius,it.shadowMapSize=$.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=N.shadow.matrix,M++}n.directional[m]=q,m++}else if(N.isSpotLight){let q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(k).multiplyScalar(X),q.distance=B,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[g]=q;let $=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,$.updateMatrices(N),N.castShadow&&R++),n.spotLightMatrix[g]=$.matrix,N.castShadow){let it=e.get(N);it.shadowIntensity=$.intensity,it.shadowBias=$.bias,it.shadowNormalBias=$.normalBias,it.shadowRadius=$.radius,it.shadowMapSize=$.mapSize,n.spotShadow[g]=it,n.spotShadowMap[g]=et,y++}g++}else if(N.isRectAreaLight){let q=t.get(N);q.color.copy(k).multiplyScalar(X),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[x]=q,x++}else if(N.isPointLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let $=N.shadow,it=e.get(N);it.shadowIntensity=$.intensity,it.shadowBias=$.bias,it.shadowNormalBias=$.normalBias,it.shadowRadius=$.radius,it.shadowMapSize=$.mapSize,it.shadowCameraNear=$.camera.near,it.shadowCameraFar=$.camera.far,n.pointShadow[p]=it,n.pointShadowMap[p]=et,n.pointShadowMatrix[p]=N.shadow.matrix,w++}n.point[p]=q,p++}else if(N.isHemisphereLight){let q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(X),q.groundColor.copy(N.groundColor).multiplyScalar(X),n.hemi[S]=q,S++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let O=n.hash;(O.sunLength!==d||O.directionalLength!==m||O.pointLength!==p||O.spotLength!==g||O.rectAreaLength!==x||O.hemiLength!==S||O.numSunShadows!==_||O.numDirectionalShadows!==M||O.numPointShadows!==w||O.numSpotShadows!==y||O.numSpotMaps!==b||O.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=g,n.rectArea.length=x,n.point.length=p,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+b-R,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,O.sunLength=d,O.directionalLength=m,O.pointLength=p,O.spotLength=g,O.rectAreaLength=x,O.hemiLength=S,O.numSunShadows=_,O.numDirectionalShadows=M,O.numPointShadows=w,O.numSpotShadows=y,O.numSpotMaps=b,O.numLightProbes=C,n.version=PO++)}function l(c,u){let f=0,h=0,d=0,_=0,v=0,m=0,p=u.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){let S=c[g];if(S.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),f++}else if(S.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(S.isSpotLight){let M=n.spot[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),_++}else if(S.isRectAreaLight){let M=n.rectArea[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function zE(i){let t=new zO(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),s.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function BO(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new zE(i),t.set(s,[o])):r>=a.length?(o=new zE(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var FO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HO=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,GO=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],kO=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],BE=new Le,hh=new P,Bv=new P;function VO(i,t,e){let n=new _o,s=new Lt,r=new Lt,a=new He,o=new ap,l=new op,c={},u=e.maxTextureSize,f={[Ta]:mi,[mi]:Ta,[Xi]:Xi},h=new se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:FO,fragmentShader:HO}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let _=new Ye;_.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new he(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let p=this.type;this.render=function(w,y,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===OT&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ku);let R=i.getRenderTarget(),C=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),I=i.state;I.setBlending(br),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let G=p!==this.type;G&&y.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=w.length;N<k;N++){let X=w[N],B=X.shadow;if(B===void 0){Nt("WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let et=B.getFrameExtents();s.multiply(et),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,B.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=q,B.map===null||G===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ec){if(X.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new je(s.x,s.y,{format:Ea,type:gi,minFilter:Ri,magFilter:Ri,generateMipmaps:!1}),B.map.texture.name=X.name+".shadowMap",B.map.depthTexture=new Sr(s.x,s.y,Ts),B.map.depthTexture.name=X.name+".shadowMapDepth",B.map.depthTexture.format=yr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ai,B.map.depthTexture.magFilter=Ai}else X.isPointLight?(B.map=new dh(s.x),B.map.depthTexture=new Wu(s.x,Ms)):(B.map=new je(s.x,s.y),B.map.depthTexture=new Sr(s.x,s.y,Ms)),B.map.depthTexture.name=X.name+".shadowMap",B.map.depthTexture.format=yr,this.type===Ku?(B.map.depthTexture.compareFunction=q?Rv:Av,B.map.depthTexture.minFilter=Ri,B.map.depthTexture.magFilter=Ri):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ai,B.map.depthTexture.magFilter=Ai);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let $=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();X.isPointLight!==!0&&B.updateMatrices(X,b);let it=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:b.layers;for(let xt=0;xt<$;xt++){let Bt=B.getCamera(xt);if(X.isPointLight){let Z=B.camera,ht=B.matrix,bt=X.distance||Z.far;bt!==Z.far&&(Z.far=bt,Z.updateProjectionMatrix()),hh.setFromMatrixPosition(X.matrixWorld),Z.position.copy(hh),Bv.copy(Z.position),Bv.add(GO[xt]),Z.up.copy(kO[xt]),Z.lookAt(Bv),Z.updateMatrixWorld(),ht.makeTranslation(-hh.x,-hh.y,-hh.z),BE.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),B._frustum.setFromProjectionMatrix(BE,Z.coordinateSystem,Z.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,xt),i.clear();else{xt===0&&(i.setRenderTarget(B.map),i.clear());let Z=B.getViewport(xt);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),I.viewport(a)}n=B.getFrustum(xt),S(y,b,Bt,X,it,this.type)}B.isPointLightShadow!==!0&&this.type===ec&&g(B,b),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(R,C,O)};function g(w,y){let b=t.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new je(s.x,s.y,{format:Ea,type:gi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(y,null,b,h,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(y,null,b,d,v,null)}function x(w,y,b,R){let C=null,O=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)C=O;else if(C=b.isPointLight===!0?l:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let I=C.uuid,G=y.uuid,N=c[I];N===void 0&&(N={},c[I]=N);let k=N[G];k===void 0&&(k=C.clone(),N[G]=k,y.addEventListener("dispose",M)),C=k}if(C.visible=y.visible,C.wireframe=y.wireframe,R===ec?C.side=y.shadowSide!==null?y.shadowSide:y.side:C.side=y.shadowSide!==null?y.shadowSide:f[y.side],C.alphaMap=y.alphaMap,C.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,C.map=y.map,C.clipShadows=y.clipShadows,C.clippingPlanes=y.clippingPlanes,C.clipIntersection=y.clipIntersection,C.displacementMap=y.displacementMap,C.displacementScale=y.displacementScale,C.displacementBias=y.displacementBias,C.wireframeLinewidth=y.wireframeLinewidth,C.linewidth=y.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=i.properties.get(C);I.light=b}return C}function S(w,y,b,R,C,O){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===ec)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let N=t.update(w),k=w.material;if(Array.isArray(k)){let X=N.groups;for(let B=0,et=X.length;B<et;B++){let q=X[B],$=k[q.materialIndex];if($&&$.visible){let it=x(w,$,R,O);w.onBeforeShadow(i,w,y,b,N,it,q),i.renderBufferDirect(b,null,N,it,w,q),w.onAfterShadow(i,w,y,b,N,it,q)}}}else if(k.visible){let X=x(w,k,R,O);w.onBeforeShadow(i,w,y,b,N,X,null),i.renderBufferDirect(b,null,N,X,w,null),w.onAfterShadow(i,w,y,b,N,X,null)}}let G=w.children;for(let N=0,k=G.length;N<k;N++)S(G[N],y,b,R,C,O)}function M(w){w.target.removeEventListener("dispose",M);for(let b in c){let R=c[b],C=w.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function WO(i,t){function e(){let D=!1,J=new He,Y=null,ut=new He(0,0,0,0);return{setMask:function(at){Y!==at&&!D&&(i.colorMask(at,at,at,at),Y=at)},setLocked:function(at){D=at},setClear:function(at,lt,At,Yt,rt){rt===!0&&(at*=Yt,lt*=Yt,At*=Yt),J.set(at,lt,At,Yt),ut.equals(J)===!1&&(i.clearColor(at,lt,At,Yt),ut.copy(J))},reset:function(){D=!1,Y=null,ut.set(-1,0,0,0)}}}function n(){let D=!1,J=!1,Y=null,ut=null,at=null;return{setReversed:function(lt){if(J!==lt){let At=t.get("EXT_clip_control");lt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),J=lt;let Yt=at;at=null,this.setClear(Yt)}},getReversed:function(){return J},setTest:function(lt){lt?vt(i.DEPTH_TEST):Vt(i.DEPTH_TEST)},setMask:function(lt){Y!==lt&&!D&&(i.depthMask(lt),Y=lt)},setFunc:function(lt){if(J&&(lt=dE[lt]),ut!==lt){switch(lt){case kd:i.depthFunc(i.NEVER);break;case Vd:i.depthFunc(i.ALWAYS);break;case Wd:i.depthFunc(i.LESS);break;case Xl:i.depthFunc(i.LEQUAL);break;case Xd:i.depthFunc(i.EQUAL);break;case qd:i.depthFunc(i.GEQUAL);break;case Yd:i.depthFunc(i.GREATER);break;case Zd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=lt}},setLocked:function(lt){D=lt},setClear:function(lt){at!==lt&&(at=lt,J&&(lt=1-lt),i.clearDepth(lt))},reset:function(){D=!1,Y=null,ut=null,at=null,J=!1}}}function s(){let D=!1,J=null,Y=null,ut=null,at=null,lt=null,At=null,Yt=null,rt=null;return{setTest:function(Rt){D||(Rt?vt(i.STENCIL_TEST):Vt(i.STENCIL_TEST))},setMask:function(Rt){J!==Rt&&!D&&(i.stencilMask(Rt),J=Rt)},setFunc:function(Rt,qt,gt){(Y!==Rt||ut!==qt||at!==gt)&&(i.stencilFunc(Rt,qt,gt),Y=Rt,ut=qt,at=gt)},setOp:function(Rt,qt,gt){(lt!==Rt||At!==qt||Yt!==gt)&&(i.stencilOp(Rt,qt,gt),lt=Rt,At=qt,Yt=gt)},setLocked:function(Rt){D=Rt},setClear:function(Rt){rt!==Rt&&(i.clearStencil(Rt),rt=Rt)},reset:function(){D=!1,J=null,Y=null,ut=null,at=null,lt=null,At=null,Yt=null,rt=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,u={},f={},h={},d=new WeakMap,_=[],v=null,m=!1,p=null,g=null,x=null,S=null,M=null,w=null,y=null,b=new wt(0,0,0),R=0,C=!1,O=null,I=null,G=null,N=null,k=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,et=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=et>=1):q.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=et>=2);let $=null,it={},xt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),Z=new He().fromArray(xt),ht=new He().fromArray(Bt);function bt(D,J,Y,ut){let at=new Uint8Array(4),lt=i.createTexture();i.bindTexture(D,lt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<Y;At++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(J+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return lt}let Ct={};Ct[i.TEXTURE_2D]=bt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),vt(i.DEPTH_TEST),a.setFunc(Xl),on(!1),Be(fv),vt(i.CULL_FACE),Di(br);function vt(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Vt(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function ti(D,J){return h[D]!==J?(i.bindFramebuffer(D,J),h[D]=J,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=J),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Ut(D,J){let Y=_,ut=!1;if(D){Y=d.get(J),Y===void 0&&(Y=[],d.set(J,Y));let at=D.textures;if(Y.length!==at.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,At=at.length;lt<At;lt++)Y[lt]=i.COLOR_ATTACHMENT0+lt;Y.length=at.length,ut=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ut=!0);ut&&i.drawBuffers(Y)}function de(D){return v!==D?(i.useProgram(D),v=D,!0):!1}let xe={[bo]:i.FUNC_ADD,[PT]:i.FUNC_SUBTRACT,[IT]:i.FUNC_REVERSE_SUBTRACT};xe[zT]=i.MIN,xe[BT]=i.MAX;let jt={[FT]:i.ZERO,[HT]:i.ONE,[GT]:i.SRC_COLOR,[mv]:i.SRC_ALPHA,[YT]:i.SRC_ALPHA_SATURATE,[XT]:i.DST_COLOR,[VT]:i.DST_ALPHA,[kT]:i.ONE_MINUS_SRC_COLOR,[gv]:i.ONE_MINUS_SRC_ALPHA,[qT]:i.ONE_MINUS_DST_COLOR,[WT]:i.ONE_MINUS_DST_ALPHA,[ZT]:i.CONSTANT_COLOR,[QT]:i.ONE_MINUS_CONSTANT_COLOR,[KT]:i.CONSTANT_ALPHA,[JT]:i.ONE_MINUS_CONSTANT_ALPHA};function Di(D,J,Y,ut,at,lt,At,Yt,rt,Rt){if(D===br){m===!0&&(Vt(i.BLEND),m=!1);return}if(m===!1&&(vt(i.BLEND),m=!0),D!==UT){if(D!==p||Rt!==C){if((g!==bo||M!==bo)&&(i.blendEquation(i.FUNC_ADD),g=bo,M=bo),Rt)switch(D){case ic:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zi:i.blendFunc(i.ONE,i.ONE);break;case dv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pv:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:It("WebGLState: Invalid blending: ",D);break}else switch(D){case ic:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dv:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pv:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",D);break}x=null,S=null,w=null,y=null,b.set(0,0,0),R=0,p=D,C=Rt}return}at=at||J,lt=lt||Y,At=At||ut,(J!==g||at!==M)&&(i.blendEquationSeparate(xe[J],xe[at]),g=J,M=at),(Y!==x||ut!==S||lt!==w||At!==y)&&(i.blendFuncSeparate(jt[Y],jt[ut],jt[lt],jt[At]),x=Y,S=ut,w=lt,y=At),(Yt.equals(b)===!1||rt!==R)&&(i.blendColor(Yt.r,Yt.g,Yt.b,rt),b.copy(Yt),R=rt),p=D,C=!1}function ui(D,J){D.side===Xi?Vt(i.CULL_FACE):vt(i.CULL_FACE);let Y=D.side===mi;J&&(Y=!Y),on(Y),D.blending===ic&&D.transparent===!1?Di(br):Di(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ut=D.stencilWrite;o.setTest(ut),ut&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),xi(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function on(D){O!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),O=D)}function Be(D){D!==NT?(vt(i.CULL_FACE),D!==I&&(D===fv?i.cullFace(i.BACK):D===LT?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Vt(i.CULL_FACE),I=D}function ws(D){D!==G&&(B&&i.lineWidth(D),G=D)}function xi(D,J,Y){D?(vt(i.POLYGON_OFFSET_FILL),(N!==J||k!==Y)&&(N=J,k=Y,a.getReversed()&&(J=-J,Y=-Y),i.polygonOffset(J,Y))):Vt(i.POLYGON_OFFSET_FILL)}function Yn(D){D?vt(i.SCISSOR_TEST):Vt(i.SCISSOR_TEST)}function Zn(D){D===void 0&&(D=i.TEXTURE0+X-1),$!==D&&(i.activeTexture(D),$=D)}function Qn(D,J,Y){Y===void 0&&($===null?Y=i.TEXTURE0+X-1:Y=$);let ut=it[Y];ut===void 0&&(ut={type:void 0,texture:void 0},it[Y]=ut),(ut.type!==D||ut.texture!==J)&&($!==Y&&(i.activeTexture(Y),$=Y),i.bindTexture(D,J||Ct[D]),ut.type=D,ut.texture=J)}function U(){let D=it[$];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Kn(){try{i.compressedTexImage2D(...arguments)}catch(D){It("WebGLState:",D)}}function Oe(){try{i.compressedTexImage3D(...arguments)}catch(D){It("WebGLState:",D)}}function Ue(){try{i.texSubImage2D(...arguments)}catch(D){It("WebGLState:",D)}}function mt(){try{i.texSubImage3D(...arguments)}catch(D){It("WebGLState:",D)}}function hi(){try{i.compressedTexSubImage2D(...arguments)}catch(D){It("WebGLState:",D)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){It("WebGLState:",D)}}function Gt(){try{i.texStorage2D(...arguments)}catch(D){It("WebGLState:",D)}}function A(){try{i.texStorage3D(...arguments)}catch(D){It("WebGLState:",D)}}function T(){try{i.texImage2D(...arguments)}catch(D){It("WebGLState:",D)}}function F(){try{i.texImage3D(...arguments)}catch(D){It("WebGLState:",D)}}function st(D){return f[D]!==void 0?f[D]:i.getParameter(D)}function j(D,J){f[D]!==J&&(i.pixelStorei(D,J),f[D]=J)}function ot(D){Z.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Z.copy(D))}function dt(D){ht.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ht.copy(D))}function Q(D,J){let Y=c.get(J);Y===void 0&&(Y=new WeakMap,c.set(J,Y));let ut=Y.get(D);ut===void 0&&(ut=i.getUniformBlockIndex(J,D.name),i.uniformBlockBinding(J,ut,ut),Y.set(D,ut))}function K(D,J,Y){let at=c.get(J).get(D);l[at]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,at,Y),l[at]=Y)}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},$=null,it={},h={},l={},d=new WeakMap,_=[],v=null,m=!1,p=null,g=null,x=null,S=null,M=null,w=null,y=null,b=new wt(0,0,0),R=0,C=!1,O=null,I=null,G=null,N=null,k=null,Z.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:vt,disable:Vt,bindFramebuffer:ti,drawBuffers:Ut,useProgram:de,setBlending:Di,setMaterial:ui,setFlipSided:on,setCullFace:Be,setLineWidth:ws,setPolygonOffset:xi,setScissorTest:Yn,activeTexture:Zn,bindTexture:Qn,unbindTexture:U,compressedTexImage2D:Kn,compressedTexImage3D:Oe,texImage2D:T,texImage3D:F,pixelStorei:j,getParameter:st,updateUBOMapping:Q,uniformBlockBinding:K,texStorage2D:Gt,texStorage3D:A,texSubImage2D:Ue,texSubImage3D:mt,compressedTexSubImage2D:hi,compressedTexSubImage3D:Dt,scissor:ot,viewport:dt,reset:ct}}function XO(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,u=new WeakMap,f=new Set,h,d=new WeakMap,_=new Set,v=new FinalizationRegistry(A=>_.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,T){return m?new OffscreenCanvas(A,T):Bu("canvas")}function g(A,T,F){let st=1,j=Gt(A);if((j.width>F||j.height>F)&&(st=F/Math.max(j.width,j.height)),st<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ot=Math.floor(st*j.width),dt=Math.floor(st*j.height);h===void 0&&(h=p(ot,dt));let Q=T?p(ot,dt):h;return Q.width=ot,Q.height=dt,Q.getContext("2d").drawImage(A,0,0,ot,dt),Nt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ot+"x"+dt+")."),Q}else return"data"in A&&Nt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function x(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,T,F,st,j,ot=!1){if(A!==null){if(i[A]!==void 0)return i[A];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let dt;st&&(dt=t.get("EXT_texture_norm16"),dt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=T;if(T===i.RED&&(F===i.FLOAT&&(Q=i.R32F),F===i.HALF_FLOAT&&(Q=i.R16F),F===i.UNSIGNED_BYTE&&(Q=i.R8),F===i.UNSIGNED_SHORT&&dt&&(Q=dt.R16_EXT),F===i.SHORT&&dt&&(Q=dt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.R8UI),F===i.UNSIGNED_SHORT&&(Q=i.R16UI),F===i.UNSIGNED_INT&&(Q=i.R32UI),F===i.BYTE&&(Q=i.R8I),F===i.SHORT&&(Q=i.R16I),F===i.INT&&(Q=i.R32I)),T===i.RG&&(F===i.FLOAT&&(Q=i.RG32F),F===i.HALF_FLOAT&&(Q=i.RG16F),F===i.UNSIGNED_BYTE&&(Q=i.RG8),F===i.UNSIGNED_SHORT&&dt&&(Q=dt.RG16_EXT),F===i.SHORT&&dt&&(Q=dt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.RG8UI),F===i.UNSIGNED_SHORT&&(Q=i.RG16UI),F===i.UNSIGNED_INT&&(Q=i.RG32UI),F===i.BYTE&&(Q=i.RG8I),F===i.SHORT&&(Q=i.RG16I),F===i.INT&&(Q=i.RG32I)),T===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),F===i.UNSIGNED_INT&&(Q=i.RGB32UI),F===i.BYTE&&(Q=i.RGB8I),F===i.SHORT&&(Q=i.RGB16I),F===i.INT&&(Q=i.RGB32I)),T===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),F===i.UNSIGNED_INT&&(Q=i.RGBA32UI),F===i.BYTE&&(Q=i.RGBA8I),F===i.SHORT&&(Q=i.RGBA16I),F===i.INT&&(Q=i.RGBA32I)),T===i.RGB&&(F===i.UNSIGNED_SHORT&&dt&&(Q=dt.RGB16_EXT),F===i.SHORT&&dt&&(Q=dt.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),T===i.RGBA){let K=ot?Iu:Qt.getTransfer(j);F===i.FLOAT&&(Q=i.RGBA32F),F===i.HALF_FLOAT&&(Q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Q=K===oe?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&dt&&(Q=dt.RGBA16_EXT),F===i.SHORT&&dt&&(Q=dt.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function y(A,T){let F;return A?T===null||T===Ms||T===Eo?F=i.DEPTH24_STENCIL8:T===Ts?F=i.DEPTH32F_STENCIL8:T===sc&&(F=i.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ms||T===Eo?F=i.DEPTH_COMPONENT24:T===Ts?F=i.DEPTH_COMPONENT32F:T===sc&&(F=i.DEPTH_COMPONENT16),F}function b(A,T){return x(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ai&&A.minFilter!==Ri?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function R(A){let T=new WeakRef(A);n.get(A).__ref=T,_.add(T),v.register(A,T,T)}function C(A){let T=n.get(A).__ref;T!==void 0&&(_.delete(T),v.unregister(T))}function O(A){G(A.target)}function I(A){N(A.target)}function G(A){A.removeEventListener("dispose",O),C(A),X(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function N(A){A.removeEventListener("dispose",I),C(A),et(A)}function k(){for(let A of _){let T=A.deref();T!==void 0&&(T.isRenderTarget===!0?N(T):G(T))}_.clear(),f.clear()}function X(A){let T=n.get(A);if(T.__webglInit===void 0)return;let F=A.source,st=d.get(F);if(st){let j=st[T.__cacheKey];j.usedTimes--,j.usedTimes===0&&B(A),Object.keys(st).length===0&&d.delete(F)}n.remove(A)}function B(A){let T=n.get(A);i.deleteTexture(T.__webglTexture);let F=A.source,st=d.get(F);delete st[T.__cacheKey],a.memory.textures--}function et(A){let T=n.get(A);T.__depthDisposeCallback&&T.__depthDisposeCallback();let F=A.depthTexture;if(F&&F.renderTarget===A&&G(F),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let ot=0;ot<T.__webglFramebuffer[j].length;ot++)i.deleteFramebuffer(T.__webglFramebuffer[j][ot]);else i.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)i.deleteFramebuffer(T.__webglFramebuffer[j]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let st=A.textures;for(let j=0,ot=st.length;j<ot;j++){let dt=n.get(st[j]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(st[j])}n.remove(A)}let q=0;function $(){q=0}function it(){return q}function xt(A){q=A}function Bt(){let A=q;return A>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,A}function Z(A){let T=[];return T.push(A.wrapS),T.push(A.wrapT),T.push(A.wrapR||0),T.push(A.magFilter),T.push(A.minFilter),T.push(A.anisotropy),T.push(A.internalFormat),T.push(A.format),T.push(A.type),T.push(A.generateMipmaps),T.push(A.mipmapsAutoUpdate),T.push(A.premultiplyAlpha),T.push(A.flipY),T.push(A.unpackAlignment),T.push(A.colorSpace),T.join()}function ht(A,T){let F=n.get(A);if(A.isVideoTexture&&hi(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let st=A.image;if(st===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ui(F,A,T);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+T)}function bt(A,T){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){ui(F,A,T);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+T)}function Ct(A,T){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){ui(F,A,T);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+T)}function vt(A,T){let F=n.get(A);if(A.version>0&&F.__version!==A.version){on(F,A,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+T)}let Vt={[ql]:i.REPEAT,[cs]:i.CLAMP_TO_EDGE,[Qd]:i.MIRRORED_REPEAT},ti={[Ai]:i.NEAREST,[tE]:i.NEAREST_MIPMAP_NEAREST,[nh]:i.NEAREST_MIPMAP_LINEAR,[Ri]:i.LINEAR,[Sp]:i.LINEAR_MIPMAP_NEAREST,[Mr]:i.LINEAR_MIPMAP_LINEAR},Ut={[sE]:i.NEVER,[Cv]:i.ALWAYS,[rE]:i.LESS,[Av]:i.LEQUAL,[aE]:i.EQUAL,[Rv]:i.GEQUAL,[oE]:i.GREATER,[lE]:i.NOTEQUAL};function de(A,T){if(T.type===Ts&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ri||T.magFilter===Sp||T.magFilter===nh||T.magFilter===Mr||T.minFilter===Ri||T.minFilter===Sp||T.minFilter===nh||T.minFilter===Mr)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Vt[T.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Vt[T.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Vt[T.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ti[T.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ti[T.minFilter]),T.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ut[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ai||T.minFilter!==nh&&T.minFilter!==Mr||T.type===Ts&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function xe(A,T){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",O),R(T));let st=T.source,j=d.get(st);j===void 0&&(j={},d.set(st,j));let ot=Z(T);if(ot!==A.__cacheKey){j[ot]===void 0&&(j[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[ot].usedTimes++;let dt=j[A.__cacheKey];dt!==void 0&&(j[A.__cacheKey].usedTimes--,dt.usedTimes===0&&B(T)),A.__cacheKey=ot,A.__webglTexture=j[ot].texture}return F}function jt(A,T,F){return Math.floor(Math.floor(A/F)/T)}function Di(A,T,F,st){let ot=A.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,F,st,T.data);else{ot.sort((D,J)=>D.start-J.start);let dt=0;for(let D=1;D<ot.length;D++){let J=ot[dt],Y=ot[D],ut=J.start+J.count,at=jt(Y.start,T.width,4),lt=jt(J.start,T.width,4);Y.start<=ut+1&&at===lt&&jt(Y.start+Y.count-1,T.width,4)===at?J.count=Math.max(J.count,Y.start+Y.count-J.start):(++dt,ot[dt]=Y)}ot.length=dt+1;let Q=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let D=0,J=ot.length;D<J;D++){let Y=ot[D],ut=Math.floor(Y.start/4),at=Math.ceil(Y.count/4),lt=ut%T.width,At=Math.floor(ut/T.width),Yt=at,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,At),e.texSubImage2D(i.TEXTURE_2D,0,lt,At,Yt,rt,F,st,T.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function ui(A,T,F){let st=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(st=i.TEXTURE_3D);let j=xe(A,T),ot=T.source;e.bindTexture(st,A.__webglTexture,i.TEXTURE0+F);let dt=n.get(ot);if(ot.version!==dt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let rt=Qt.getPrimaries(Qt.workingColorSpace),Rt=T.colorSpace===Er?null:Qt.getPrimaries(T.colorSpace),qt=T.colorSpace===Er||rt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let K=g(T.image,!1,s.maxTextureSize);K=Dt(T,K);let ct=r.convert(T.format,T.colorSpace),D=r.convert(T.type),J=w(T.internalFormat,ct,D,T.normalized,T.colorSpace,T.isVideoTexture);de(st,T);let Y,ut=T.mipmaps,at=T.isVideoTexture!==!0,lt=dt.__version===void 0||j===!0,At=ot.dataReady,Yt=b(T,K);if(T.isDepthTexture)J=y(T.format===Tr,T.type),lt&&(at?e.texStorage2D(i.TEXTURE_2D,1,J,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,J,K.width,K.height,0,ct,D,null));else if(T.isDataTexture)if(ut.length>0){at&&lt&&e.texStorage2D(i.TEXTURE_2D,Yt,J,ut[0].width,ut[0].height);for(let rt=0,Rt=ut.length;rt<Rt;rt++)Y=ut[rt],at?At&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Y.width,Y.height,ct,D,Y.data):e.texImage2D(i.TEXTURE_2D,rt,J,Y.width,Y.height,0,ct,D,Y.data);T.generateMipmaps=!1}else at?(lt&&e.texStorage2D(i.TEXTURE_2D,Yt,J,K.width,K.height),At&&Di(T,K,ct,D)):e.texImage2D(i.TEXTURE_2D,0,J,K.width,K.height,0,ct,D,K.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){at&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,J,ut[0].width,ut[0].height,K.depth);for(let rt=0,Rt=ut.length;rt<Rt;rt++)if(Y=ut[rt],T.format!==Es)if(ct!==null)if(at){if(At)if(T.layerUpdates.size>0){let qt=Iv(Y.width,Y.height,T.format,T.type);for(let gt of T.layerUpdates){let pe=Y.data.subarray(gt*qt/Y.data.BYTES_PER_ELEMENT,(gt+1)*qt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,gt,Y.width,Y.height,1,ct,pe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Y.width,Y.height,K.depth,ct,Y.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,J,Y.width,Y.height,K.depth,0,Y.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?At&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Y.width,Y.height,K.depth,ct,D,Y.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,J,Y.width,Y.height,K.depth,0,ct,D,Y.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{at&&lt&&e.texStorage2D(i.TEXTURE_2D,Yt,J,ut[0].width,ut[0].height);for(let rt=0,Rt=ut.length;rt<Rt;rt++)Y=ut[rt],T.format!==Es?ct!==null?at?At&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Y.width,Y.height,ct,Y.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,J,Y.width,Y.height,0,Y.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?At&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Y.width,Y.height,ct,D,Y.data):e.texImage2D(i.TEXTURE_2D,rt,J,Y.width,Y.height,0,ct,D,Y.data)}else if(T.isDataArrayTexture)if(at){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,J,K.width,K.height,K.depth),At)if(T.layerUpdates.size>0){let rt=Iv(K.width,K.height,T.format,T.type);for(let Rt of T.layerUpdates){let qt=K.data.subarray(Rt*rt/K.data.BYTES_PER_ELEMENT,(Rt+1)*rt/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Rt,K.width,K.height,1,ct,D,qt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ct,D,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,ct,D,K.data);else if(T.isData3DTexture)at?(lt&&e.texStorage3D(i.TEXTURE_3D,Yt,J,K.width,K.height,K.depth),At&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ct,D,K.data)):e.texImage3D(i.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,ct,D,K.data);else if(T.isFramebufferTexture){if(lt)if(at)e.texStorage2D(i.TEXTURE_2D,Yt,J,K.width,K.height);else{let rt=K.width,Rt=K.height;for(let qt=0;qt<Yt;qt++)e.texImage2D(i.TEXTURE_2D,qt,J,rt,Rt,0,ct,D,null),rt>>=1,Rt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),K.parentNode!==rt){rt.appendChild(K),f.add(T),rt.onpaint=Rt=>{let qt=Rt.changedElements;for(let gt of f)qt.includes(gt.image)&&(gt.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let qt=i.RGBA,gt=i.RGBA,pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qt,gt,pe,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ut.length>0){if(at&&lt){let rt=Gt(ut[0]);e.texStorage2D(i.TEXTURE_2D,Yt,J,rt.width,rt.height)}for(let rt=0,Rt=ut.length;rt<Rt;rt++)Y=ut[rt],at?At&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,ct,D,Y):e.texImage2D(i.TEXTURE_2D,rt,J,ct,D,Y);T.generateMipmaps=!1}else if(at){if(lt){let rt=Gt(K);e.texStorage2D(i.TEXTURE_2D,Yt,J,rt.width,rt.height)}At&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,D,K)}else e.texImage2D(i.TEXTURE_2D,0,J,ct,D,K);x(T)&&T.mipmapsAutoUpdate===!0&&S(st),dt.__version=ot.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function on(A,T,F){if(T.image.length!==6)return;let st=xe(A,T),j=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);let ot=n.get(j);if(j.version!==ot.__version||st===!0){e.activeTexture(i.TEXTURE0+F);let dt=Qt.getPrimaries(Qt.workingColorSpace),Q=T.colorSpace===Er?null:Qt.getPrimaries(T.colorSpace),K=T.colorSpace===Er||dt===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ct=T.isCompressedTexture||T.image[0].isCompressedTexture,D=T.image[0]&&T.image[0].isDataTexture,J=[];for(let gt=0;gt<6;gt++)!ct&&!D?J[gt]=g(T.image[gt],!0,s.maxCubemapSize):J[gt]=D?T.image[gt].image:T.image[gt],J[gt]=Dt(T,J[gt]);let Y=J[0],ut=r.convert(T.format,T.colorSpace),at=r.convert(T.type),lt=w(T.internalFormat,ut,at,T.normalized,T.colorSpace),At=T.isVideoTexture!==!0,Yt=ot.__version===void 0||st===!0,rt=j.dataReady,Rt=b(T,Y);de(i.TEXTURE_CUBE_MAP,T);let qt;if(T.isDepthTexture){if(lt=y(T.format===Tr,T.type),Yt)if(At)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,lt,Y.width,Y.height);else for(let gt=0;gt<6;gt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,lt,Y.width,Y.height,0,ut,at,null)}else if(ct){At&&Yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,lt,Y.width,Y.height);for(let gt=0;gt<6;gt++){qt=J[gt].mipmaps;for(let pe=0;pe<qt.length;pe++){let Si=qt[pe];T.format!==Es?ut!==null?At?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe,0,0,Si.width,Si.height,ut,Si.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe,lt,Si.width,Si.height,0,Si.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe,0,0,Si.width,Si.height,ut,at,Si.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe,lt,Si.width,Si.height,0,ut,at,Si.data)}}}else{if(qt=T.mipmaps,At&&Yt){qt.length>0&&Rt++;let gt=Gt(J[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,lt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(D){At?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,J[gt].width,J[gt].height,ut,at,J[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,lt,J[gt].width,J[gt].height,0,ut,at,J[gt].data);for(let pe=0;pe<qt.length;pe++){let Ir=qt[pe].image[gt].image;At?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe+1,0,0,Ir.width,Ir.height,ut,at,Ir.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe+1,lt,Ir.width,Ir.height,0,ut,at,Ir.data)}}else{At?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ut,at,J[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,lt,ut,at,J[gt]);for(let pe=0;pe<qt.length;pe++){let Si=qt[pe];At?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe+1,0,0,ut,at,Si.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe+1,lt,ut,at,Si.image[gt])}}}x(T)&&T.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),ot.__version=j.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function Be(A,T,F,st,j,ot){let dt=r.convert(F.format,F.colorSpace),Q=r.convert(F.type),K=w(F.internalFormat,dt,Q,F.normalized,F.colorSpace),ct=n.get(T),D=n.get(F);if(D.__renderTarget=T,!ct.__hasExternalTextures){let J=Math.max(1,T.width>>ot),Y=Math.max(1,T.height>>ot);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,ot,K,J,Y,T.depth,0,dt,Q,null):e.texImage2D(j,ot,K,J,Y,0,dt,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),mt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,j,D.__webglTexture,0,Ue(T)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,j,D.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ws(A,T,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),T.depthBuffer){let st=T.depthTexture,j=st&&st.isDepthTexture?st.type:null,ot=y(T.stencilBuffer,j),dt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue(T),ot,T.width,T.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue(T),ot,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ot,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,A)}else{let st=T.textures;for(let j=0;j<st.length;j++){let ot=st[j],dt=r.convert(ot.format,ot.colorSpace),Q=r.convert(ot.type),K=w(ot.internalFormat,dt,Q,ot.normalized,ot.colorSpace);mt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue(T),K,T.width,T.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue(T),K,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,K,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xi(A,T,F){let st=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(T.depthTexture);j.__renderTarget=T;let ot=st?T.depthTexture.image[0]:T.depthTexture.image;(!j.__webglTexture||ot.width!==T.width||ot.height!==T.height)&&(ot.width=T.width,ot.height=T.height,T.depthTexture.needsUpdate=!0),st?vt(T.depthTexture,0):ht(T.depthTexture,0);let dt=j.__webglTexture,Q=Ue(T),K=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,ct=T.depthTexture.format===Tr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===yr)mt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,K,dt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ct,K,dt,0);else if(T.depthTexture.format===Tr)mt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,K,dt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ct,K,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yn(A){let T=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==A.depthTexture){let st=A.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),st){let j=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,st.removeEventListener("dispose",j)};st.addEventListener("dispose",j),T.__depthDisposeCallback=j}T.__boundDepthTexture=st}if(A.depthTexture&&!T.__autoAllocateDepthBuffer)if(F)for(let st=0;st<6;st++)xi(T.__webglFramebuffer[st],A,st);else A.texture.mipmaps.length>0?xi(T.__webglFramebuffer[0],A,0):xi(T.__webglFramebuffer,A,0);else if(F){T.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[st]),T.__webglDepthbuffer[st]===void 0)T.__webglDepthbuffer[st]=i.createRenderbuffer(),ws(T.__webglDepthbuffer[st],A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=T.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ot)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ws(T.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zn(A,T,F){let st=n.get(A);T!==void 0&&Be(st.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Yn(A)}function Qn(A){let T=A.texture,F=n.get(A),st=n.get(T);A.addEventListener("dispose",I),R(A);let j=A.textures,ot=A.isWebGLCubeRenderTarget===!0,dt=j.length>1;if(dt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=T.version,a.memory.textures++),ot){F.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(T.mipmaps.length>0){F.__webglFramebuffer[Q]=[];for(let K=0;K<T.mipmaps.length;K++)F.__webglFramebuffer[Q][K]=i.createFramebuffer()}else F.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(T.mipmaps.length>0){F.__webglFramebuffer=[];for(let Q=0;Q<T.mipmaps.length;Q++)F.__webglFramebuffer[Q]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(dt)for(let Q=0,K=j.length;Q<K;Q++){let ct=n.get(j[Q]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&mt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){let K=j[Q];F.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Q]);let ct=r.convert(K.format,K.colorSpace),D=r.convert(K.type),J=w(K.internalFormat,ct,D,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),Y=Ue(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,J,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,F.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ws(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),de(i.TEXTURE_CUBE_MAP,T);for(let Q=0;Q<6;Q++)if(T.mipmaps.length>0)for(let K=0;K<T.mipmaps.length;K++)Be(F.__webglFramebuffer[Q][K],A,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,K);else Be(F.__webglFramebuffer[Q],A,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);x(T)?S(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let Q=0,K=j.length;Q<K;Q++){let ct=j[Q],D=n.get(ct),J=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,D.__webglTexture),de(J,ct),Be(F.__webglFramebuffer,A,ct,i.COLOR_ATTACHMENT0+Q,J,0),x(ct)&&S(J)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,st.__webglTexture),de(Q,T),T.mipmaps.length>0)for(let K=0;K<T.mipmaps.length;K++)Be(F.__webglFramebuffer[K],A,T,i.COLOR_ATTACHMENT0,Q,K);else Be(F.__webglFramebuffer,A,T,i.COLOR_ATTACHMENT0,Q,0);x(T)?S(Q):T.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&Yn(A)}function U(A){let T=A.textures;for(let F=0,st=T.length;F<st;F++){let j=T[F];if(x(j)&&j.mipmapsAutoUpdate===!0){let ot=M(A),dt=n.get(j).__webglTexture;e.bindTexture(ot,dt),S(ot),e.unbindTexture()}}}let Kn=[];function Oe(A){if(A.samples>0){if(mt(A)===!1){let T=A.textures,F=A.width,st=A.height,j=i.COLOR_BUFFER_BIT,ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(A),Q=T.length>1;if(Q)for(let ct=0;ct<T.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ct=0;ct<T.length;ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);let D=n.get(T[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,F,st,0,0,F,st,j,i.NEAREST),l===!0&&(Kn.length=0,Kn.push(i.COLOR_ATTACHMENT0+ct),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Kn.push(ot),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Kn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ct=0;ct<T.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);let D=n.get(T[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let T=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Ue(A){return Math.min(s.maxSamples,A.samples)}function mt(A){let T=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function hi(A){let T=a.render.frame;u.get(A)!==T&&(u.set(A,T),A.update())}function Dt(A,T){let F=A.colorSpace,st=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Pu&&F!==Er&&(Qt.getTransfer(F)===oe?(st!==Es||j!==Fn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",F)),T}function Gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Bt,this.resetTextureUnits=$,this.getTextureUnits=it,this.setTextureUnits=xt,this.setTexture2D=ht,this.setTexture2DArray=bt,this.setTexture3D=Ct,this.setTextureCube=vt,this.rebindTextures=Zn,this.setupRenderTarget=Qn,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Yn,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=mt,this.dispose=k}function qO(i,t){function e(n,s=Er){let r,a=Qt.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Mp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sv)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bv)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yv)return i.BYTE;if(n===xv)return i.SHORT;if(n===sc)return i.UNSIGNED_SHORT;if(n===bp)return i.INT;if(n===Ms)return i.UNSIGNED_INT;if(n===Ts)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===Mv)return i.ALPHA;if(n===Tv)return i.RGB;if(n===Es)return i.RGBA;if(n===yr)return i.DEPTH_COMPONENT;if(n===Tr)return i.DEPTH_STENCIL;if(n===Ev)return i.RED;if(n===Ep)return i.RED_INTEGER;if(n===Ea)return i.RG;if(n===wp)return i.RG_INTEGER;if(n===Ap)return i.RGBA_INTEGER;if(n===sh||n===rh||n===ah||n===oh)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sh)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ah)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sh)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rh)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ah)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oh)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rp||n===Cp||n===Dp||n===Np)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rp)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cp)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dp)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Np)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lp||n===Op||n===Up||n===Pp||n===Ip||n===lh||n===zp)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lp||n===Op)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Up)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pp)return r.COMPRESSED_R11_EAC;if(n===Ip)return r.COMPRESSED_SIGNED_R11_EAC;if(n===lh)return r.COMPRESSED_RG11_EAC;if(n===zp)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bp||n===Fp||n===Hp||n===Gp||n===kp||n===Vp||n===Wp||n===Xp||n===qp||n===Yp||n===Zp||n===Qp||n===Kp||n===Jp)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bp)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fp)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hp)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gp)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kp)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vp)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wp)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xp)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qp)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yp)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zp)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qp)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kp)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jp)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jp||n===$p||n===tm)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jp)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$p)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tm)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===em||n===im||n===ch||n===nm)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===em)return r.COMPRESSED_RED_RGTC1_EXT;if(n===im)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nm)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Eo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var YO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZO=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Xu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new se({vertexShader:YO,fragmentShader:ZO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qv=class extends Is{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null,v=typeof XRWebGLBinding<"u",m=new Xv,p={},g=e.getContextAttributes(),x=null,S=null,M=[],w=[],y=new Lt,b=null,R=null,C=new nn;C.viewport=new He;let O=new nn;O.viewport=new He;let I=[C,O],G=new vp,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ht=M[Z];return ht===void 0&&(ht=new Kl,M[Z]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Z){let ht=M[Z];return ht===void 0&&(ht=new Kl,M[Z]=ht),ht.getGripSpace()},this.getHand=function(Z){let ht=M[Z];return ht===void 0&&(ht=new Kl,M[Z]=ht),ht.getHandSpace()};function X(Z){let ht=w.indexOf(Z.inputSource);if(ht===-1)return;let bt=M[ht];bt!==void 0&&(bt.update(Z.inputSource,Z.frame,c||a),bt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",et);for(let Z=0;Z<M.length;Z++){let ht=w[Z];ht!==null&&(w[Z]=null,M[Z].disconnect(ht))}N=null,k=null,m.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(x),d=null,h=null,f=null,s=null,S=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(y.width,y.height,!1),R!==null){let Z=R.camera;Z.fov=R.fov,Z.zoom=R.zoom,Z.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",B),s.addEventListener("inputsourceschange",et),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(y),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ct=null,vt=null;g.depth&&(vt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=g.stencil?Tr:yr,Ct=g.stencil?Eo:Ms);let Vt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Vt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new je(h.textureWidth,h.textureHeight,{format:Es,type:Fn,depthTexture:new Sr(h.textureWidth,h.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let bt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new je(d.framebufferWidth,d.framebufferHeight,{format:Es,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(Z){for(let ht=0;ht<Z.removed.length;ht++){let bt=Z.removed[ht],Ct=w.indexOf(bt);Ct>=0&&(w[Ct]=null,M[Ct].disconnect(bt))}for(let ht=0;ht<Z.added.length;ht++){let bt=Z.added[ht],Ct=w.indexOf(bt);if(Ct===-1){for(let Vt=0;Vt<M.length;Vt++)if(Vt>=w.length){w.push(bt),Ct=Vt;break}else if(w[Vt]===null){w[Vt]=bt,Ct=Vt;break}if(Ct===-1)break}let vt=M[Ct];vt&&vt.connect(bt)}}function q(Z,ht){ht===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ht.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ht=Z.near,bt=Z.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),G.near=O.near=C.near=ht,G.far=O.far=C.far=bt,(N!==G.near||k!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,k=G.far),G.layers.mask=Z.layers.mask|6,C.layers.mask=G.layers.mask&-5,O.layers.mask=G.layers.mask&-3;let Ct=Z.parent,vt=G.cameras;q(G,Ct);for(let Vt=0;Vt<vt.length;Vt++)q(vt[Vt],Ct);G.projectionMatrix.copy(C.projectionMatrix),G.projectionMatrixInverse.copy(C.projectionMatrixInverse),R===null&&Z.isPerspectiveCamera&&(R={camera:Z,fov:Z.fov,zoom:Z.zoom}),$(Z,G,Ct)};function $(Z,ht,bt){bt===null?Z.matrix.copy(ht.matrixWorld):(Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ht.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ht.projectionMatrix),Z.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Jd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Z){return p[Z]};let it=null;function xt(Z,ht){if(u=ht.getViewerPose(c||a),_=ht,u!==null){let bt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Ct=!1;bt.length!==G.cameras.length&&(G.cameras.length=0,Ct=!0);for(let Ut=0;Ut<bt.length;Ut++){let de=bt[Ut],xe=null;if(d!==null)xe=d.getViewport(de);else{let Di=f.getViewSubImage(h,de);xe=Di.viewport,Ut===0&&(t.setRenderTargetTextures(S,Di.colorTexture,Di.depthStencilTexture),t.setRenderTarget(S))}let jt=I[Ut];jt===void 0&&(jt=new nn,jt.layers.enable(Ut),jt.viewport=new He,I[Ut]=jt),jt.matrix.fromArray(de.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(de.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(xe.x,xe.y,xe.width,xe.height),Ut===0&&(G.matrix.copy(jt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ct===!0&&G.cameras.push(jt)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let Ut=f.getDepthInformation(bt[0]);Ut&&Ut.isValid&&Ut.texture&&m.init(Ut,s.renderState)}if(vt&&vt.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let Ut=0;Ut<bt.length;Ut++){let de=bt[Ut].camera;if(de){let xe=p[de];xe||(xe=new Xu,p[de]=xe);let jt=f.getCameraImage(de);xe.sourceTexture=jt}}}}for(let bt=0;bt<M.length;bt++){let Ct=w[bt],vt=M[bt];Ct!==null&&vt!==void 0&&vt.update(Ct,ht,c||a)}it&&it(Z,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),_=null}let Bt=new FE;Bt.setAnimationLoop(xt),this.setAnimationLoop=function(Z){it=Z},this.dispose=function(){}}},QO=new Le,QE=new Ht;QE.set(-1,0,0,0,1,0,0,0,1);function KO(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ov(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,g,x,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,g,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let g=t.get(p),x=g.envMap,S=g.envMapRotation;x&&(m.envMap.value=x,m.envMapRotation.value.setFromMatrix4(QO.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(QE),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,g,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*g,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,g){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let g=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function JO(i,t,e,n){let s={},r={};function a(g,x){let S=x.program;n.uniformBlockBinding(g,S,s[g.id])}function o(g,x){let S=s[g.id];S===void 0&&(_(g),S=l(g),s[g.id]=S,g.addEventListener("dispose",m));let M=x.program;n.updateUBOMapping(g,M);let w=t.render.frame;r[g.id]!==w&&(c(g),r[g.id]=w)}function l(g){let x=i.createBuffer(),S=g.__size,M=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,S,M),i.bindBuffer(i.UNIFORM_BUFFER,null),x}function c(g){let x=s[g.id],S=g.uniforms,M=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,y=S.length;w<y;w++){let b=S[w];if(Array.isArray(b))for(let R=0,C=b.length;R<C;R++)u(b[R],w,R,M);else u(b,w,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(g,x,S,M){if(h(g,x,S,M)===!0){let w=g.__offset,y=g.value;if(Array.isArray(y)){let b=0;for(let R=0;R<y.length;R++){let C=y[R],O=v(C,!0);f(C,g.__data,b),b+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else f(y,g.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,g.__data)}}function f(g,x,S){typeof g=="number"||typeof g=="boolean"?x[S]=g:g.isMatrix3?(x[S]=g.elements[0],x[S+1]=g.elements[1],x[S+2]=g.elements[2],x[S+3]=0,x[S+4]=g.elements[3],x[S+5]=g.elements[4],x[S+6]=g.elements[5],x[S+7]=0,x[S+8]=g.elements[6],x[S+9]=g.elements[7],x[S+10]=g.elements[8],x[S+11]=0):ArrayBuffer.isView(g)?x.set(g.subarray(0,x.length-S),S):g.toArray(x,S)}function h(g,x,S,M){let w=g.value,y=x+"_"+S;if(Array.isArray(w)){M[y]===void 0&&(M[y]=[]);let b=M[y],R=!1;for(let C=0;C<w.length;C++)d(w[C],b,C)===!0&&(R=!0);return R}return d(w,M,y)}function d(g,x,S){if(x[S]===void 0)return typeof g=="number"||typeof g=="boolean"?x[S]=g:ArrayBuffer.isView(g)?x[S]=g.slice():x[S]=g.clone(),!0;{let M=x[S];if(typeof g=="number"||typeof g=="boolean"){if(M!==g)return x[S]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(M.equals(g)===!1)return M.copy(g),!0}}return!1}function _(g){let x=g.uniforms,S=0,M=16;for(let y=0,b=x.length;y<b;y++){let R=Array.isArray(x[y])?x[y]:[x[y]];for(let C=0,O=R.length;C<O;C++){let I=R[C],G=Array.isArray(I.value)?I.value:[I.value],N=Array.isArray(x[y])||Array.isArray(I.value),k=S;for(let B=0,et=G.length;B<et;B++){let q=G[B],$=v(q,N),it=S%M,xt=it%$.boundary,Bt=it+xt;S+=xt,Bt!==0&&M-Bt<$.storage&&(S+=M-Bt),B===0&&(k=S),S+=$.storage}let X=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new X((S-k)/Float32Array.BYTES_PER_ELEMENT),I.__offset=k}}let w=S%M;return w>0&&(S+=M-w),g.__size=S,g.__cache={},this}function v(g,x){let S={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(S.boundary=4,S.storage=4):g.isVector2?(S.boundary=8,S.storage=8):g.isVector3||g.isColor?(S.boundary=16,S.storage=12):g.isVector4?(S.boundary=16,S.storage=16):g.isMatrix3?(S.boundary=16,S.storage=48):g.isMatrix4?(S.boundary=16,S.storage=64):g.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(S.boundary=16,S.storage=g.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",g),x===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(g){let x=g.target;x.removeEventListener("dispose",m),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let g in s)i.deleteBuffer(s[g]);s={},r={}}return{bind:a,update:o,dispose:p}}var jO=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hs=null;function $O(){return Hs===null&&(Hs=new ep(jO,16,16,Ea,gi),Hs.name="DFG_LUT",Hs.minFilter=Ri,Hs.magFilter=Ri,Hs.wrapS=cs,Hs.wrapT=cs,Hs.generateMipmaps=!1,Hs.needsUpdate=!0),Hs}var om=class{constructor(t={}){let{canvas:e=uE(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Fn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let v=d,m=new Set([Ap,wp,Ep]),p=new Set([Fn,Ms,sc,Eo,Mp,Tp]),g=new Uint32Array(4),x=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},M=null,w=null,y=[],b=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,O=!1,I=null,G=null,N=null,k=null;this._outputColorSpace=In;let X=0,B=0,et=null,q=-1,$=null,it=new He,xt=new He,Bt=null,Z=new wt(0),ht=0,bt=e.width,Ct=e.height,vt=1,Vt=null,ti=null,Ut=new He(0,0,bt,Ct),de=new He(0,0,bt,Ct),xe=!1,jt=new _o,Di=new ip,ui=!1,on=!1,Be=new Le,ws=new P,xi=new He,Yn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zn=!1;function Qn(){return et===null?vt:1}let U=n;function Kn(E,L){return e.getContext(E,L)}let Oe,Ue,mt,hi,Dt,Gt,A,T,F,st,j,ot,dt,Q,K,ct,D,J,Y,ut,at,lt,At;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Rt,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),U===null){let L="webgl2";if(U=Kn(L,E),U===null)throw Kn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(E){throw e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),It("WebGLRenderer: "+E.message),E}function Yt(){Oe=new uL(U),Oe.init(),at=new qO(U,Oe),Ue=new $N(U,Oe,t,at),mt=new WO(U,Oe),Ue.reversedDepthBuffer&&h&&mt.buffers.depth.setReversed(!0),G=U.createFramebuffer(),N=U.createFramebuffer(),k=U.createFramebuffer(),hi=new dL(U),Dt=new DO,Gt=new XO(U,Oe,mt,Dt,Ue,at,hi),A=new cL(C),T=new m3(U),lt=new JN(U,T),F=new hL(U,T,hi,lt),st=new mL(U,F,T,lt,hi),J=new pL(U,Ue,Gt),K=new tL(Dt),j=new CO(C,A,Oe,Ue,lt,K),ot=new KO(C,Dt),dt=new LO,Q=new BO(Oe),D=new KN(C,A,mt,st,_,l),ct=new VO(C,st,Ue),At=new JO(U,hi,Ue,mt),Y=new jN(U,Oe,hi),ut=new fL(U,Oe,hi),hi.programs=j.programs,C.capabilities=Ue,C.extensions=Oe,C.properties=Dt,C.renderLists=dt,C.shadowMap=ct,C.state=mt,C.info=hi}v!==Fn&&(R=new _L(v,e.width,e.height,o,s,r));let rt=new qv(C,U);this.xr=rt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=Oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(E){E!==void 0&&(vt=E,this.setSize(bt,Ct,!1))},this.getSize=function(E){return E.set(bt,Ct)},this.setSize=function(E,L,W=!0){if(rt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=E,Ct=L,e.width=Math.floor(E*vt),e.height=Math.floor(L*vt),W===!0&&(e.style.width=E+"px",e.style.height=L+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(bt*vt,Ct*vt).floor()},this.setDrawingBufferSize=function(E,L,W){bt=E,Ct=L,vt=W,e.width=Math.floor(E*W),e.height=Math.floor(L*W),this.setViewport(0,0,E,L)},this.setEffects=function(E){if(v===Fn){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let L=0;L<E.length;L++)if(E[L].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(it)},this.getViewport=function(E){return E.copy(Ut)},this.setViewport=function(E,L,W,z){E.isVector4?Ut.set(E.x,E.y,E.z,E.w):Ut.set(E,L,W,z),mt.viewport(it.copy(Ut).multiplyScalar(Qn()).round())},this.getScissor=function(E){return E.copy(de)},this.setScissor=function(E,L,W,z){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,L,W,z),mt.scissor(xt.copy(de).multiplyScalar(Qn()).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(E){mt.setScissorTest(xe=E)},this.setOpaqueSort=function(E){Vt=E},this.setTransparentSort=function(E){ti=E},this.getClearColor=function(E){return E.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(E=!0,L=!0,W=!0){let z=0;if(E){let H=!1;if(et!==null){let pt=et.texture.format;H=m.has(pt)}if(H){let pt=et.texture.type,St=p.has(pt),ft=D.getClearColor(),yt=D.getClearAlpha(),Et=ft.r,kt=ft.g,$t=ft.b;St?(g[0]=Et,g[1]=kt,g[2]=$t,g[3]=yt,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Et,x[1]=kt,x[2]=$t,x[3]=yt,U.clearBufferiv(U.COLOR,0,x))}else z|=U.COLOR_BUFFER_BIT}L&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),D.dispose(),dt.dispose(),Q.dispose(),Gt.dispose(),Dt.dispose(),A.dispose(),st.dispose(),F.dispose(),lt.dispose(),At.dispose(),j.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",nx),rt.removeEventListener("sessionend",sx),Ha.stop()};function Rt(E){E.preventDefault(),Nv("WebGLRenderer: Context Lost."),O=!0}function qt(){Nv("WebGLRenderer: Context Restored."),O=!1;let E=hi.autoReset,L=ct.enabled,W=ct.autoUpdate,z=ct.needsUpdate,H=ct.type;Yt(),hi.autoReset=E,ct.enabled=L,ct.autoUpdate=W,ct.needsUpdate=z,ct.type=H}function gt(E){It("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pe(E){let L=E.target;L.removeEventListener("dispose",pe),Si(L)}function Si(E){Ir(E),Dt.remove(E)}function Ir(E){let L=Dt.get(E).programs;L!==void 0&&(L.forEach(function(W){j.releaseProgram(W)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,W,z,H,pt){L===null&&(L=Yn);let St=H.isMesh&&H.matrixWorld.determinantAffine()<0,ft=CA(E,L,W,z,H);mt.setMaterial(z,St);let yt=W.index,Et=1;if(z.wireframe===!0){if(yt=F.getWireframeAttribute(W),yt===void 0)return;Et=2}let kt=W.drawRange,$t=W.attributes.position,Mt=kt.start*Et,te=(kt.start+kt.count)*Et;pt!==null&&(Mt=Math.max(Mt,pt.start*Et),te=Math.min(te,(pt.start+pt.count)*Et)),yt!==null?(Mt=Math.max(Mt,0),te=Math.min(te,yt.count)):$t!=null&&(Mt=Math.max(Mt,0),te=Math.min(te,$t.count));let ei=te-Mt;if(ei<0||ei===1/0)return;lt.setup(H,z,ft,W,yt);let Ee,Se=Y;if(yt!==null&&(Ee=T.get(yt),Se=ut,Se.setIndex(Ee)),H.isMesh)z.wireframe===!0?(mt.setLineWidth(z.wireframeLinewidth*Qn()),Se.setMode(U.LINES)):Se.setMode(U.TRIANGLES);else if(H.isLine){let Hi=z.linewidth;Hi===void 0&&(Hi=1),mt.setLineWidth(Hi*Qn()),H.isLineSegments?Se.setMode(U.LINES):H.isLineLoop?Se.setMode(U.LINE_LOOP):Se.setMode(U.LINE_STRIP)}else H.isPoints?Se.setMode(U.POINTS):H.isSprite&&Se.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(Oe.get("WEBGL_multi_draw"))Se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Hi=H._multiDrawStarts,Tt=H._multiDrawCounts,ji=H._multiDrawCount,le=yt?T.get(yt).bytesPerElement:1,Ga=Dt.get(z).currentProgram.getUniforms();for(let Gi=0;Gi<ji;Gi++)Ga.setValue(U,"_gl_DrawID",Gi),Se.render(Hi[Gi]/le,Tt[Gi])}else if(H.isInstancedMesh)Se.renderInstances(Mt,ei,H.count);else if(W.isInstancedBufferGeometry){let Hi=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Tt=Math.min(W.instanceCount,Hi);Se.renderInstances(Mt,ei,Tt)}else Se.render(Mt,ei)};function ix(E,L,W,z){I!==null&&E.isNodeMaterial&&I.setObject(z,E),ui===!0&&K.setState(E,W,!1),E.transparent===!0&&E.side===Xi&&E.forceSinglePass===!1?(E.side=mi,E.needsUpdate=!0,Ec(E,L,z),E.side=Ta,E.needsUpdate=!0,Ec(E,L,z),E.side=Xi):Ec(E,L,z)}this.compile=function(E,L,W=null){W===null&&(W=E),I!==null&&I.renderStart(E,L,W),w=Q.get(W),w.init(L),b.push(w),W.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),I!==null&&I.updateLights(w.state.lightsArray),on=this.localClippingEnabled,ui=K.init(this.clippingPlanes,on),ui===!0&&K.setGlobalState(this.clippingPlanes,L),I!==null&&ct.render(w.state.shadowsArray,W,L);let z=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let pt=H.material;if(pt)if(Array.isArray(pt))for(let St=0;St<pt.length;St++){let ft=pt[St];ix(ft,W,L,H),z.add(ft)}else ix(pt,W,L,H),z.add(pt)}),w=b.pop(),I!==null&&I.renderEnd(),z},this.compileAsync=function(E,L,W=null){let z=this.compile(E,L,W);return new Promise(H=>{function pt(){if(z.forEach(function(St){let yt=Dt.get(St).currentProgram;(yt===void 0||yt.isReady())&&z.delete(St)}),z.size===0){H(E);return}setTimeout(pt,10)}Oe.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Qm=null;function AA(E){Qm&&Qm(E)}function nx(){Ha.stop()}function sx(){Ha.start()}let Ha=new FE;Ha.setAnimationLoop(AA),typeof self<"u"&&Ha.setContext(self),this.setAnimationLoop=function(E){Qm=E,rt.setAnimationLoop(E),E===null?Ha.stop():Ha.start()},rt.addEventListener("sessionstart",nx),rt.addEventListener("sessionend",sx),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;I!==null&&I.renderStart(E,L);let W=rt.enabled===!0&&rt.isPresenting===!0,z=R!==null&&(et===null||W)&&R.begin(C,et);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(L),L=rt.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,L,et),w=Q.get(E,b.length),w.init(L),w.state.textureUnits=Gt.getTextureUnits(),b.push(w),Be.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?Di.setFromArrayCamera(L):jt.setFromProjectionMatrix(Be,us,L.reversedDepth),on=this.localClippingEnabled,ui=K.init(this.clippingPlanes,on),M=dt.get(E,y.length),M.init(),y.push(M),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let St=C.xr.getDepthSensingMesh();St!==null&&Km(St,L,-1/0,C.sortObjects)}Km(E,L,0,C.sortObjects),M.finish(),I!==null&&I.updateLights(w.state.lightsArray),C.sortObjects===!0&&M.sort(Vt,ti),Zn=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Zn&&D.addToRenderList(M,E),this.info.autoReset===!0&&this.info.reset(),ui===!0&&K.beginShadows();let H=w.state.shadowsArray;if(ct.render(H,E,L),ui===!0&&K.endShadows(),(z&&R.hasRenderPass())===!1){let St=M.opaque,ft=M.transmissive;if(w.setupLights(),L.isArrayCamera){let yt=L.cameras;if(ft.length>0)for(let Et=0,kt=yt.length;Et<kt;Et++){let $t=yt[Et];ax(St,ft,E,$t)}Zn&&D.render(E);for(let Et=0,kt=yt.length;Et<kt;Et++){let $t=yt[Et];rx(M,E,$t,$t.viewport)}}else ft.length>0&&ax(St,ft,E,L),Zn&&D.render(E),rx(M,E,L)}et!==null&&B===0&&(Gt.updateMultisampleRenderTarget(et),Gt.updateRenderTargetMipmap(et)),z&&R.end(C),E.isScene===!0&&E.onAfterRender(C,E,L),lt.resetDefaultState(),q=-1,$=null,b.pop(),b.length>0?(w=b[b.length-1],Gt.setTextureUnits(w.state.textureUnits),ui===!0&&K.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,y.pop(),y.length>0?M=y[y.length-1]:M=null,I!==null&&I.renderEnd()};function Km(E,L,W,z){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let St=L.isArrayCamera?Di:jt;if(!E.frustumCulled||E.intersectsFrustum(St)){z&&xi.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Be);let ft=st.update(E),yt=E.material;yt.visible&&M.push(E,ft,yt,W,xi.z,null,L)}}else if(E.isMesh||E.isLine||E.isPoints){let St=L.isArrayCamera?Di:jt;if(!E.frustumCulled||E.intersectsFrustum(St)){let ft=st.update(E),yt=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),xi.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),xi.copy(ft.boundingSphere.center)),xi.applyMatrix4(E.matrixWorld).applyMatrix4(Be)),Array.isArray(yt)){let Et=ft.groups;for(let kt=0,$t=Et.length;kt<$t;kt++){let Mt=Et[kt],te=yt[Mt.materialIndex];te&&te.visible&&M.push(E,ft,te,W,xi.z,Mt,L)}}else yt.visible&&M.push(E,ft,yt,W,xi.z,null,L)}}}let pt=E.children;for(let St=0,ft=pt.length;St<ft;St++)Km(pt[St],L,W,z)}function rx(E,L,W,z){let{opaque:H,transmissive:pt,transparent:St}=E;w.setupLightsView(W),ui===!0&&K.setGlobalState(C.clippingPlanes,W),z&&mt.viewport(it.copy(z)),H.length>0&&zh(H,L,W),pt.length>0&&zh(pt,L,W),St.length>0&&zh(St,L,W),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function ax(E,L,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let Mt=Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new je(1,1,{generateMipmaps:!0,type:Mt?gi:Fn,minFilter:Mr,samples:Math.max(4,Ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let pt=w.state.transmissionRenderTarget[z.id],St=z.viewport||it;pt.setSize(St.z*C.transmissionResolutionScale,St.w*C.transmissionResolutionScale);let ft=C.getRenderTarget(),yt=C.getActiveCubeFace(),Et=C.getActiveMipmapLevel();C.setRenderTarget(pt),C.getClearColor(Z),ht=C.getClearAlpha(),ht<1&&C.setClearColor(16777215,.5),C.clear(),Zn&&D.render(W);let kt=C.toneMapping;C.toneMapping=Fs;let $t=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),ui===!0&&K.setGlobalState(C.clippingPlanes,z),zh(E,W,z),Gt.updateMultisampleRenderTarget(pt),Gt.updateRenderTargetMipmap(pt),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let te=0,ei=L.length;te<ei;te++){let Ee=L[te],{object:Se,geometry:Hi,material:Tt,group:ji}=Ee;if(Tt.side===Xi&&Se.layers.test(z.layers)){let le=Tt.side;Tt.side=mi,Tt.needsUpdate=!0,ox(Se,W,z,Hi,Tt,ji),Tt.side=le,Tt.needsUpdate=!0,Mt=!0}}Mt===!0&&(Gt.updateMultisampleRenderTarget(pt),Gt.updateRenderTargetMipmap(pt))}C.setRenderTarget(ft,yt,Et),C.setClearColor(Z,ht),$t!==void 0&&(z.viewport=$t),C.toneMapping=kt}function zh(E,L,W){let z=L.isScene===!0?L.overrideMaterial:null;for(let H=0,pt=E.length;H<pt;H++){let St=E[H],{object:ft,geometry:yt,group:Et}=St,kt=St.material;kt.allowOverride===!0&&z!==null&&(kt=z),ft.layers.test(W.layers)&&ox(ft,L,W,yt,kt,Et)}}function ox(E,L,W,z,H,pt){I!==null&&H.isNodeMaterial&&I.setObject(E,H),E.onBeforeRender(C,L,W,z,H,pt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(C,L,W,z,E,pt),H.transparent===!0&&H.side===Xi&&H.forceSinglePass===!1?(H.side=mi,H.needsUpdate=!0,C.renderBufferDirect(W,L,z,H,E,pt),H.side=Ta,H.needsUpdate=!0,C.renderBufferDirect(W,L,z,H,E,pt),H.side=Xi):C.renderBufferDirect(W,L,z,H,E,pt),E.onAfterRender(C,L,W,z,H,pt)}function lx(E){let L=0;for(let W of E)W.texture!==null&&L++;return L}function Ec(E,L,W){L.isScene!==!0&&(L=Yn);let z=Dt.get(E),H=w.state.lights,pt=w.state.shadowsArray,St=H.state.version,ft=j.getParameters(E,H.state,pt,L,W,w.state.lightProbeGridArray),yt=j.getProgramCacheKey(ft),Et=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?L.environment:null,z.fog=L.fog;let kt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=A.get(E.envMap||z.environment,kt),z.envMapRotation=z.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Et===void 0&&(E.addEventListener("dispose",pe),Et=new Map,z.programs=Et,z.programVariants=new Map);let $t=Et.get(yt);if($t!==void 0){if(z.currentProgram===$t&&z.lightsStateVersion===St)return ux(E,ft),$t}else ft.uniforms=j.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,W,ft),E.onBeforeCompile(ft,C),$t=j.acquireProgram(ft,yt),Et.set(yt,$t),z.uniforms=ft.uniforms;let Mt=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Mt.clippingPlanes=K.uniform),ux(E,ft),z.needsLights=NA(E),z.lightsStateVersion=St,z.needsLights&&(Mt.ambientLightColor.value=H.state.ambient,Mt.lightProbe.value=H.state.probe,Mt.sunLights.value=H.state.sun,Mt.sunLightShadows.value=H.state.sunShadow,Mt.directionalLights.value=H.state.directional,Mt.directionalLightShadows.value=H.state.directionalShadow,Mt.spotLights.value=H.state.spot,Mt.spotLightShadows.value=H.state.spotShadow,Mt.rectAreaLights.value=H.state.rectArea,Mt.ltc_1.value=H.state.rectAreaLTC1,Mt.ltc_2.value=H.state.rectAreaLTC2,Mt.pointLights.value=H.state.point,Mt.pointLightShadows.value=H.state.pointShadow,Mt.hemisphereLights.value=H.state.hemi,Mt.sunShadowMatrix.value=H.state.sunShadowMatrix,Mt.sunShadowCascade.value=H.state.sunShadowCascade,Mt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Mt.spotLightMatrix.value=H.state.spotLightMatrix,Mt.spotLightMap.value=H.state.spotLightMap,Mt.pointShadowMatrix.value=H.state.pointShadowMatrix),z.numLightProbeGrids=lx(w.state.lightProbeGridArray),z.currentProgram=$t,z.uniformsList=null,$t}function RA(E,L,W,z,H){let pt=Dt.get(E),St=pt.currentProgram.id+","+z+","+H,ft=pt.programVariants.get(St);return ft===void 0?(ft=Ec(E,L,W),pt.programVariants.set(St,ft)):(pt.currentProgram=ft,pt.uniformsList=null,pt.outputColorSpace=z,pt.toneMapping=H),ft}function cx(E){if(E.uniformsList===null){let L=E.currentProgram.getUniforms();E.uniformsList=rc.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function ux(E,L){let W=Dt.get(E);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function CA(E,L,W,z,H){L.isScene!==!0&&(L=Yn),Gt.resetTextureUnits();let pt=L.fog,St=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?L.environment:null,ft=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Qt.workingColorSpace,yt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Et=A.get(z.envMap||St,yt),kt=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$t=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Mt=!!W.morphAttributes.position,te=!!W.morphAttributes.normal,ei=!!W.morphAttributes.color,Ee=Fs;z.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ee=C.toneMapping);let Se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Hi=Se!==void 0?Se.length:0,Tt=Dt.get(z),ji=w.state.lights;if(ui===!0&&(on===!0||E!==$)){let Fe=E===$&&z.id===q;K.setState(z,E,Fe)}let le=!1,Ga=!1;z.version===Tt.__version?Tt.needsLights&&Tt.lightsStateVersion!==ji.state.version||H.isBatchedMesh&&Tt.batching===!1||!H.isBatchedMesh&&Tt.batching===!0||H.isBatchedMesh&&Tt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Tt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Tt.instancing===!1||!H.isInstancedMesh&&Tt.instancing===!0||H.isSkinnedMesh&&Tt.skinning===!1||!H.isSkinnedMesh&&Tt.skinning===!0||H.isInstancedMesh&&Tt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Tt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Tt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Tt.instancingMorph===!1&&H.morphTexture!==null||Tt.envMap!==Et||z.fog===!0&&Tt.fog!==pt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==K.numPlanes||Tt.numIntersection!==K.numIntersection)||Tt.vertexAlphas!==kt||Tt.vertexTangents!==$t||Tt.morphTargets!==Mt||Tt.morphNormals!==te||Tt.morphColors!==ei||Tt.morphTargetsCount!==Hi||Tt.numLightProbeGrids!==lx(w.state.lightProbeGridArray)?le=!0:(Tt.outputColorSpace!==ft||Tt.toneMapping!==Ee)&&(Ga=!0):(le=!0,Tt.__version=z.version);let Gi=Tt.currentProgram;(le===!0||Ga===!0)&&(Gi=Ga===!0?RA(z,L,H,ft,Ee):Ec(z,L,H),I&&z.isNodeMaterial&&I.onUpdateProgram(z,Gi,Tt));let Bh=!1,zr=!1,ka=!1,ae=Gi.getUniforms(),Ni=Tt.uniforms;if(mt.useProgram(Gi.program)&&(Bh=!0,zr=!0,ka=!0),z.id!==q&&(q=z.id,zr=!0),Bh||$!==E){mt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ae.setValue(U,"projectionMatrix",E.projectionMatrix),ae.setValue(U,"viewMatrix",E.matrixWorldInverse);let bi=ae.map.cameraPosition;bi!==void 0&&bi.setValue(U,ws.setFromMatrixPosition(E.matrixWorld)),Ue.logarithmicDepthBuffer&&ae.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ae.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),$!==E&&($=E,zr=!0,ka=!0)}if(Tt.needsLights&&(ji.state.sunShadowMap.length>0&&ae.setValue(U,"sunShadowMap",ji.state.sunShadowMap,Gt),ji.state.directionalShadowMap.length>0&&ae.setValue(U,"directionalShadowMap",ji.state.directionalShadowMap,Gt),ji.state.spotShadowMap.length>0&&ae.setValue(U,"spotShadowMap",ji.state.spotShadowMap,Gt),ji.state.pointShadowMap.length>0&&ae.setValue(U,"pointShadowMap",ji.state.pointShadowMap,Gt)),H.isSkinnedMesh){ae.setOptional(U,H,"bindMatrix"),ae.setOptional(U,H,"bindMatrixInverse");let Fe=H.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ae.setValue(U,"boneTexture",Fe.boneTexture,Gt))}H.isBatchedMesh&&(ae.setOptional(U,H,"batchingTexture"),ae.setValue(U,"batchingTexture",H._matricesTexture,Gt),ae.setOptional(U,H,"batchingIdTexture"),ae.setValue(U,"batchingIdTexture",H._indirectTexture,Gt),ae.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&ae.setValue(U,"batchingColorTexture",H._colorsTexture,Gt));let ps=W.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&J.update(H,W,Gi),(zr||Tt.receiveShadow!==H.receiveShadow)&&(Tt.receiveShadow=H.receiveShadow,ae.setValue(U,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&L.environment!==null&&(Ni.envMapIntensity.value=L.environmentIntensity),Ni.dfgLUT!==void 0&&(Ni.dfgLUT.value=$O()),zr){if(ae.setValue(U,"toneMappingExposure",C.toneMappingExposure),Tt.needsLights&&DA(Ni,ka),pt&&z.fog===!0&&ot.refreshFogUniforms(Ni,pt),ot.refreshMaterialUniforms(Ni,z,vt,Ct,w.state.transmissionRenderTarget[E.id]),Tt.needsLights&&Tt.numLightProbeGrids>0){let Fe=S,bi=0;for(let qs of w.state.lightProbeGridArray)qs.texture!==null&&(Fe.textures[bi]=qs.texture,Fe.min[bi]=qs.boundingBox.min,Fe.max[bi]=qs.boundingBox.max,Fe.resolution[bi]=qs.resolution,bi++);for(let qs in Fe)Fe[qs].length=bi;Ni.probesSH.value=Fe.textures,Ni.probesMin.value=Fe.min,Ni.probesMax.value=Fe.max,Ni.probesResolution.value=Fe.resolution}rc.upload(U,cx(Tt),Ni,Gt)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(rc.upload(U,cx(Tt),Ni,Gt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ae.setValue(U,"center",H.center),ae.setValue(U,"modelViewMatrix",H.modelViewMatrix),ae.setValue(U,"normalMatrix",H.normalMatrix),ae.setValue(U,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){let Fe=z.uniformsGroups;for(let bi=0,qs=Fe.length;bi<qs;bi++){let fx=Fe[bi];At.update(fx,Gi),At.bind(fx,Gi)}}return Gi}function DA(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.sunLights.needsUpdate=L,E.sunLightShadows.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function NA(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(E,L,W){let z=Dt.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Dt.get(E.texture).__webglTexture=L,Dt.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,L){let W=Dt.get(E);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,W=0){et=E,X=L,B=W;let z=null,H=!1,pt=!1;if(E){let ft=Dt.get(E);if(ft.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(U.FRAMEBUFFER,ft.__webglFramebuffer),it.copy(E.viewport),xt.copy(E.scissor),Bt=E.scissorTest,mt.viewport(it),mt.scissor(xt),mt.setScissorTest(Bt),q=-1;return}else if(ft.__webglFramebuffer===void 0)Gt.setupRenderTarget(E);else if(ft.__hasExternalTextures)Gt.rebindTextures(E,Dt.get(E.texture).__webglTexture,Dt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let kt=E.depthTexture;if(ft.__boundDepthTexture!==kt){if(kt!==null&&Dt.has(kt)&&(E.width!==kt.image.width||E.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(E)}}let yt=E.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(pt=!0);let Et=Dt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Et[L])?z=Et[L][W]:z=Et[L],H=!0):E.samples>0&&Gt.useMultisampledRTT(E)===!1?z=Dt.get(E).__webglMultisampledFramebuffer:Array.isArray(Et)?z=Et[W]:z=Et,it.copy(E.viewport),xt.copy(E.scissor),Bt=E.scissorTest}else it.copy(Ut).multiplyScalar(vt).floor(),xt.copy(de).multiplyScalar(vt).floor(),Bt=xe;if(W!==0&&(z=G),mt.bindFramebuffer(U.FRAMEBUFFER,z)&&mt.drawBuffers(E,z),mt.viewport(it),mt.scissor(xt),mt.setScissorTest(Bt),H){let ft=Dt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,ft.__webglTexture,W)}else if(pt){let ft=L;for(let yt=0;yt<E.textures.length;yt++){let Et=Dt.get(E.textures[yt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+yt,Et.__webglTexture,W,ft)}}else if(E!==null&&W!==0){let ft=Dt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,W)}q=-1};function hx(E){let L=Dt.get(E);return(L.__readFormat!==E.format||L.__readType!==E.type)&&(L.__readFormat=E.format,L.__readType=E.type,L.__formatReadable=Ue.textureFormatReadable(E.format),L.__typeReadable=Ue.textureTypeReadable(E.type)),L}this.readRenderTargetPixels=function(E,L,W,z,H,pt,St,ft=0){if(!(E&&E.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St],Array.isArray(yt)&&(yt=yt[0])),yt){mt.bindFramebuffer(U.FRAMEBUFFER,yt);try{let Et=E.textures[ft],kt=Et.format,$t=Et.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);let Mt=hx(Et);if(Mt.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-z&&W>=0&&W<=E.height-H&&U.readPixels(L,W,z,H,at.convert(kt),at.convert($t),pt)}finally{let Et=et!==null?Dt.get(et).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(E,L,W,z,H,pt,St,ft=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St],Array.isArray(yt)&&(yt=yt[0])),yt)if(L>=0&&L<=E.width-z&&W>=0&&W<=E.height-H){mt.bindFramebuffer(U.FRAMEBUFFER,yt);let Et=E.textures[ft],kt=Et.format,$t=Et.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);let Mt=hx(Et);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,te),U.bufferData(U.PIXEL_PACK_BUFFER,pt.byteLength,U.STREAM_READ),U.readPixels(L,W,z,H,at.convert(kt),at.convert($t),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let ei=et!==null?Dt.get(et).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,ei);let Ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await fE(U,Ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,te),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(te),U.deleteSync(Ee),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,L=null,W=0){let z=Math.pow(2,-W),H=Math.floor(E.image.width*z),pt=Math.floor(E.image.height*z),St=L!==null?L.x:0,ft=L!==null?L.y:0;Gt.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,St,ft,H,pt),mt.unbindTexture()},this.copyTextureToTexture=function(E,L,W=null,z=null,H=0,pt=0){let St,ft,yt,Et,kt,$t,Mt,te,ei,Ee=E.isCompressedTexture?E.mipmaps[pt]:E.image;if(W!==null)St=W.max.x-W.min.x,ft=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,Et=W.min.x,kt=W.min.y,$t=W.isBox3?W.min.z:0;else{let ae=Math.pow(2,-H);St=Math.floor(Ee.width*ae),ft=Math.floor(Ee.height*ae),E.isDataArrayTexture?yt=Ee.depth:E.isData3DTexture?yt=Math.floor(Ee.depth*ae):yt=1,Et=0,kt=0,$t=0}z!==null?(Mt=z.x,te=z.y,ei=z.z):(Mt=0,te=0,ei=0);let Se=at.convert(L.format),Hi=at.convert(L.type),Tt;L.isData3DTexture?(Gt.setTexture3D(L,0),Tt=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Gt.setTexture2DArray(L,0),Tt=U.TEXTURE_2D_ARRAY):(Gt.setTexture2D(L,0),Tt=U.TEXTURE_2D),mt.activeTexture(U.TEXTURE0),mt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),mt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),mt.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let ji=mt.getParameter(U.UNPACK_ROW_LENGTH),le=mt.getParameter(U.UNPACK_IMAGE_HEIGHT),Ga=mt.getParameter(U.UNPACK_SKIP_PIXELS),Gi=mt.getParameter(U.UNPACK_SKIP_ROWS),Bh=mt.getParameter(U.UNPACK_SKIP_IMAGES);mt.pixelStorei(U.UNPACK_ROW_LENGTH,Ee.width),mt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ee.height),mt.pixelStorei(U.UNPACK_SKIP_PIXELS,Et),mt.pixelStorei(U.UNPACK_SKIP_ROWS,kt),mt.pixelStorei(U.UNPACK_SKIP_IMAGES,$t);let zr=E.isDataArrayTexture||E.isData3DTexture,ka=L.isDataArrayTexture||L.isData3DTexture;if(E.isDepthTexture){let ae=Dt.get(E),Ni=Dt.get(L),ps=Dt.get(ae.__renderTarget),Fe=Dt.get(Ni.__renderTarget);mt.bindFramebuffer(U.READ_FRAMEBUFFER,ps.__webglFramebuffer),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let bi=0;bi<yt;bi++)zr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.get(E).__webglTexture,H,$t+bi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.get(L).__webglTexture,pt,ei+bi)),U.blitFramebuffer(Et,kt,Et+St,kt+ft,Mt,te,Mt+St,te+ft,U.DEPTH_BUFFER_BIT,U.NEAREST);mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||Dt.has(E)){let ae=Dt.get(E),Ni=Dt.get(L);mt.bindFramebuffer(U.READ_FRAMEBUFFER,N),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,k);for(let ps=0;ps<yt;ps++)zr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ae.__webglTexture,H,$t+ps):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ae.__webglTexture,H),ka?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ni.__webglTexture,pt,ei+ps):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ni.__webglTexture,pt),H!==0?U.blitFramebuffer(Et,kt,Et+St,kt+ft,Mt,te,Mt+St,te+ft,U.COLOR_BUFFER_BIT,U.NEAREST):ka?U.copyTexSubImage3D(Tt,pt,Mt,te,ei+ps,Et,kt,St,ft):U.copyTexSubImage2D(Tt,pt,Mt,te,Et,kt,St,ft);mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ka?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Tt,pt,Mt,te,ei,St,ft,yt,Se,Hi,Ee.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(Tt,pt,Mt,te,ei,St,ft,yt,Se,Ee.data):U.texSubImage3D(Tt,pt,Mt,te,ei,St,ft,yt,Se,Hi,Ee):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pt,Mt,te,St,ft,Se,Hi,Ee.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pt,Mt,te,Ee.width,Ee.height,Se,Ee.data):U.texSubImage2D(U.TEXTURE_2D,pt,Mt,te,St,ft,Se,Hi,Ee);mt.pixelStorei(U.UNPACK_ROW_LENGTH,ji),mt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le),mt.pixelStorei(U.UNPACK_SKIP_PIXELS,Ga),mt.pixelStorei(U.UNPACK_SKIP_ROWS,Gi),mt.pixelStorei(U.UNPACK_SKIP_IMAGES,Bh),pt===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&U.generateMipmap(Tt),mt.unbindTexture()},this.initRenderTarget=function(E){Dt.get(E).__webglFramebuffer===void 0&&Gt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Gt.setTextureCube(E,0):E.isData3DTexture?Gt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Gt.setTexture2DArray(E,0):Gt.setTexture2D(E,0),mt.unbindTexture()},this.resetState=function(){X=0,B=0,et=null,mt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return us}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};nt();nt();var oc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};nt();nt();var Hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},tU=new Ma(-1,1,1,-1,0,1),Yv=class extends Ye{constructor(){super(),this.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qe([0,2,0,0,2,0],2))}},eU=new Yv,Aa=class{constructor(t){this._mesh=new he(eU,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,tU)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var lc=class extends Hn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=wr.clone(t.uniforms),this.material=new se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Aa(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};nt();var mh=class extends Hn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},um=class extends Hn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var hm=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Lt);this._width=n.width,this._height=n.height,e=new je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lc(oc),this.copyPass.material.blending=br,this.timer=new Qu}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}mh!==void 0&&(a instanceof mh?n=!0:a instanceof um&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};nt();nt();var gh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var fm=class extends Hn{constructor(){super(),this.isOutputPass=!0,this.uniforms=wr.clone(gh.uniforms),this.material=new $l({name:gh.name,uniforms:this.uniforms,vertexShader:gh.vertexShader,fragmentShader:gh.fragmentShader}),this._fsQuad=new Aa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ju?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ju?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$u?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===eh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ih?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===th&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};nt();var dm=class extends Hn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new wt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};nt();nt();var KE={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new wt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var cc=class i extends Hn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Lt(t.x,t.y):new Lt(256,256),this.clearColor=new wt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new je(r,a,{type:gi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new je(r,a,{type:gi,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let h=new je(r,a,{type:gi,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=KE;this.highPassUniforms=wr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new se({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Lt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=wr.clone(oc.uniforms),this.blendMaterial=new se({uniforms:this.copyUniforms,vertexShader:oc.vertexShader,fragmentShader:oc.fragmentShader,premultipliedAlpha:!0,blending:zi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new wt,this._oldClearAlpha=1,this._basic=new Ss,this._fsQuad=new Aa(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Lt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new se({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Lt(.5,.5)},direction:{value:new Lt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};cc.BlurDirectionX=new Lt(1,0);cc.BlurDirectionY=new Lt(0,1);nt();nt();function Ar(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function rw(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}var Sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bh={duration:.5,overwrite:!1,delay:0},cy,Bi,ze,fs=1e8,ye=1/fs,ey=Math.PI*2,iU=ey/4,nU=0,aw=Math.sqrt,sU=Math.cos,rU=Math.sin,yi=function(t){return typeof t=="string"},Ze=function(t){return typeof t=="function"},Cr=function(t){return typeof t=="number"},Em=function(t){return typeof t>"u"},Ws=function(t){return typeof t=="object"},xn=function(t){return t!==!1},uy=function(){return typeof window<"u"},pm=function(t){return Ze(t)||yi(t)},ow=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zi=Array.isArray,aU=/random\([^)]+\)/g,oU=/,\s*/g,JE=/(?:-?\.?\d|\.)+/gi,hy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Do=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zv=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fy=/[+-]=-?[.\d]+/,lU=/[^,'"\[\]\s]+/gi,cU=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ke,ks,iy,dy,kn={},vm={},lw,cw=function(t){return(vm=hc(t,kn))&&Qi},wm=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Mh=function(t,e){return!e&&console.warn(t)},uw=function(t,e){return t&&(kn[t]=e)&&vm&&(vm[t]=e)||kn},Th=function(){return 0},uU={suppressEvents:!0,isStart:!0,kill:!1},mm={suppressEvents:!0,kill:!1},hU={suppressEvents:!0},py={},Ca=[],ny={},hw,vn={},Qv={},jE=30,gm=[],my="",gy=function(t){var e=t[0],n,s;if(Ws(e)||Ze(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(s=gm.length;s--&&!gm[s].targetTest(e););n=gm[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new xy(t[s],n)))||t.splice(s,1);return t},Da=function(t){return t._gsap||gy(ds(t))[0]._gsap},_y=function(t,e,n){return(n=t[e])&&Ze(n)?t[e]():Em(n)&&t.getAttribute&&t.getAttribute(e)||n},sn=function(t,e){return(t=t.split(",")).forEach(e)||t},Qe=function(t){return Math.round(t*1e5)/1e5||0},Ge=function(t){return Math.round(t*1e7)/1e7||0},No=function(t,e){var n=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+s:n==="-"?t-s:n==="*"?t*s:t/s},fU=function(t,e){for(var n=e.length,s=0;t.indexOf(e[s])<0&&++s<n;);return s<n},ym=function(){var t=Ca.length,e=Ca.slice(0),n,s;for(ny={},Ca.length=0,n=0;n<t;n++)s=e[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},vy=function(t){return!!(t._initted||t._startAt||t.add)},fw=function(t,e,n,s){Ca.length&&!Bi&&ym(),t.render(e,n,s||!!(Bi&&e<0&&vy(t))),Ca.length&&!Bi&&ym()},dw=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(lU).length<2?e:yi(t)?t.trim():t},pw=function(t){return t},Vn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},dU=function(t){return function(e,n){for(var s in n)s in e||s==="duration"&&t||s==="ease"||(e[s]=n[s])}},hc=function(t,e){for(var n in e)t[n]=e[n];return t},$E=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ws(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},xm=function(t,e){var n={},s;for(s in t)s in e||(n[s]=t[s]);return n},yh=function(t){var e=t.parent||ke,n=t.keyframes?dU(Zi(t.keyframes)):Vn;if(xn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},pU=function(t,e){for(var n=t.length,s=n===e.length;s&&n--&&t[n]===e[n];);return n<0},mw=function(t,e,n,s,r){n===void 0&&(n="_first"),s===void 0&&(s="_last");var a=t[s],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[s]=e,e._prev=a,e.parent=e._dp=t,e},Am=function(t,e,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[s]===e&&(t[s]=r),e._next=e._prev=e.parent=null},Na=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ao=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},mU=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},sy=function(t,e,n,s){return t._startAt&&(Bi?t._startAt.revert(mm):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},gU=function i(t){return!t||t._ts&&i(t.parent)},tw=function(t){return t._repeat?fc(t._tTime,t=t.duration()+t._rDelay)*t:0},fc=function(t,e){var n=Math.floor(t=Ge(t/e));return t&&n===t?n-1:n},Sm=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Rm=function(t){return t._end=Ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||ye)||0))},Cm=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Rm(t),n._dirty||Ao(n,t)),t},gw=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Sm(t.rawTime(),e),(!e._dur||Rh(0,e.totalDuration(),n)-e._tTime>ye)&&e.render(n,!0)),Ao(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ye}},Vs=function(t,e,n,s){return e.parent&&Na(e),e._start=Ge((Cr(n)?n:!n&&bm(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==ke?hs(t,n,e):t._time)+e._delay),e._end=Ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),mw(t,e,"_first","_last",t._sort?"_start":0),bm(e)||(t._recent=e),s||gw(t,e),t._ts<0&&Cm(t,t._tTime),t},_w=function(t,e){return(kn.ScrollTrigger||wm("scrollTrigger",e))&&kn.ScrollTrigger.create(e,t)},vw=function(t,e,n,s,r){if(My(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Bi&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&hw!==yn.frame)return Ca.push(t),t._lazy=[r,s],1},_U=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},bm=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},vU=function(t,e,n,s){var r=t.ratio,a=e<0||!e&&(!t._start&&_U(t)&&!(!t._initted&&bm(t))||(t._ts<0||t._dp._ts<0)&&!bm(t))?0:1,o=t._rDelay,l=0,c,u,f;if(o&&t._repeat&&(l=Rh(0,t._tDur,e),u=fc(l,o),t._yoyo&&u&1&&(a=1-a),u!==fc(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Bi||s||t._zTime===ye||!e&&t._zTime){if(!t._initted&&vw(t,e,s,n,l))return;for(f=t._zTime,t._zTime=e||(n?ye:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&sy(t,e,n,!0),t._onUpdate&&!n&&Gn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Gn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Na(t,1),!n&&!Bi&&(Gn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},yU=function(t,e,n){var s;if(n>e)for(s=t._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},dc=function(t,e,n,s){var r=t._repeat,a=Ge(e)||0,o=t._tTime/t._tDur;return o&&!s&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:Ge(a*(r+1)+t._rDelay*r):a,o>0&&!s&&Cm(t,t._tTime=t._tDur*o),t.parent&&Rm(t),n||Ao(t.parent,t),t},ew=function(t){return t instanceof Yi?Ao(t):dc(t,t._dur)},xU={_start:0,endTime:Th,totalDuration:Th},hs=function i(t,e,n){var s=t.labels,r=t._recent||xU,a=t.duration()>=fs?r.endTime(!1):t._dur,o,l,c;return yi(e)&&(isNaN(e)||e in s)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in s||(s[e]=a),s[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Zi(n)?n[0]:n).totalDuration()),o>1?i(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},xh=function(t,e,n){var s=Cr(e[1]),r=(s?2:1)+(t<2?0:1),a=e[r],o,l;if(s&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=xn(l.vars.inherit)&&l.parent;a.immediateRender=xn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new $e(e[0],a,e[r+1])},La=function(t,e){return t||t===0?e(t):e},Rh=function(t,e,n){return n<t?t:n>e?e:n},Fi=function(t,e){return!yi(t)||!(e=cU.exec(t))?"":e[1]},SU=function(t,e,n){return La(n,function(s){return Rh(t,e,s)})},ry=[].slice,yw=function(t,e){return t&&Ws(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ws(t[0]))&&!t.nodeType&&t!==ks},bU=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(s){var r;return yi(s)&&!e||yw(s,1)?(r=n).push.apply(r,ds(s)):n.push(s)})||n},ds=function(t,e,n){return ze&&!e&&ze.selector?ze.selector(t):yi(t)&&!n&&(iy||!pc())?ry.call((e||dy).querySelectorAll(t),0):Zi(t)?bU(t,n):yw(t)?ry.call(t,0):t?[t]:[]},ay=function(t){return t=ds(t)[0]||Mh("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ds(e,n.querySelectorAll?n:n===t?Mh("Invalid scope")||dy.createElement("div"):t)}},xw=function(t){return t.sort(function(){return .5-Math.random()})},Sw=function(t){if(Ze(t))return t;var e=Ws(t)?t:{each:t},n=Ro(e.ease),s=e.from||0,r=parseFloat(e.base)||0,a={},o=s>0&&s<1,l=isNaN(s)||o,c=e.axis,u=s,f=s;return yi(s)?u=f={center:.5,edges:.5,end:1}[s]||0:!o&&l&&(u=s[0],f=s[1]),function(h,d,_){var v=(_||e).length,m=a[v],p,g,x,S,M,w,y,b,R;if(!m){if(R=e.grid==="auto"?0:(e.grid||[1,fs])[1],!R){for(y=-fs;y<(y=_[R++].getBoundingClientRect().left)&&R<v;);R<v&&R--}for(m=a[v]=[],p=l?Math.min(R,v)*u-.5:s%R,g=R===fs?0:l?v*f/R-.5:s/R|0,y=0,b=fs,w=0;w<v;w++)x=w%R-p,S=g-(w/R|0),m[w]=M=c?Math.abs(c==="y"?S:x):aw(x*x+S*S),M>y&&(y=M),M<b&&(b=M);s==="random"&&xw(m),m.max=y-b,m.min=b,m.v=v=(parseFloat(e.amount)||parseFloat(e.each)*(R>v?v-1:c?c==="y"?v/R:R:Math.max(R,v/R))||0)*(s==="edges"?-1:1),m.b=v<0?r-v:r,m.u=Fi(e.amount||e.each)||0,n=n&&v<0?PU(n):n}return v=(m[h]-m.min)/m.max||0,Ge(m.b+(n?n(v):v)*m.v)+m.u}},oy=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var s=Ge(Math.round(parseFloat(n)/t)*t*e);return(s-s%1)/e+(Cr(n)?0:Fi(n))}},bw=function(t,e){var n=Zi(t),s,r;return!n&&Ws(t)&&(s=n=t.radius||fs,t.values?(t=ds(t.values),(r=!Cr(t[0]))&&(s*=s)):t=oy(t.increment)),La(e,n?Ze(t)?function(a){return r=t(a),Math.abs(r-a)<=s?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=fs,u=0,f=t.length,h,d;f--;)r?(h=t[f].x-o,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-o),h<c&&(c=h,u=f);return u=!s||c<=s?t[u]:a,r||u===a||Cr(a)?u:u+Fi(a)}:oy(t))},Mw=function(t,e,n,s){return La(Zi(t)?!e:n===!0?!!(n=0):!s,function(){return Zi(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*s)/s})},MU=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(s){return e.reduce(function(r,a){return a(r)},s)}},TU=function(t,e){return function(n){return t(parseFloat(n))+(e||Fi(n))}},EU=function(t,e,n){return Ew(t,e,0,1,n)},Tw=function(t,e,n){return La(n,function(s){return t[~~e(s)]})},wU=function i(t,e,n){var s=e-t;return Zi(t)?Tw(t,i(0,t.length),e):La(n,function(r){return(s+(r-t)%s)%s+t})},AU=function i(t,e,n){var s=e-t,r=s*2;return Zi(t)?Tw(t,i(0,t.length-1),e):La(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>s?r-a:a)})},mc=function(t){return t.replace(aU,function(e){var n=e.indexOf("[")+1,s=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(oU);return Mw(n?s:+s[0],n?0:+s[1],+s[2]||1e-5)})},Ew=function(t,e,n,s,r){var a=e-t,o=s-n;return La(r,function(l){return n+((l-t)/a*o||0)})},RU=function i(t,e,n,s){var r=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!r){var a=yi(t),o={},l,c,u,f,h;if(n===!0&&(s=1)&&(n=null),a)t={p:t},e={p:e};else if(Zi(t)&&!Zi(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(i(t[c-1],t[c]));f--,r=function(_){_*=f;var v=Math.min(h,~~_);return u[v](_-v)},n=e}else s||(t=hc(Zi(t)?[]:{},t));if(!u){for(l in e)Sy.call(o,t,l,"get",e[l]);r=function(_){return wy(_,o)||(a?t.p:t)}}}return La(n,r)},iw=function(t,e,n){var s=t.labels,r=fs,a,o,l;for(a in s)o=s[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Gn=function(t,e,n){var s=t.vars,r=s[e],a=ze,o=t._ctx,l,c,u;if(r)return l=s[e+"Params"],c=s.callbackScope||t,n&&Ca.length&&ym(),o&&(ze=o),u=l?r.apply(c,l):r.call(c),ze=a,u},_h=function(t){return Na(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Bi),t.progress()<1&&Gn(t,"onInterrupt"),t},uc,ww=[],Aw=function(t){if(t)if(t=!t.name&&t.default||t,uy()||t.headless){var e=t.name,n=Ze(t),s=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Th,render:wy,add:Sy,kill:XU,modifier:WU,rawVars:0},a={targetTest:0,get:0,getSetter:Dm,aliases:{},register:0};if(pc(),t!==s){if(vn[e])return;Vn(s,Vn(xm(t,r),a)),hc(s.prototype,hc(r,xm(t,a))),vn[s.prop=e]=s,t.targetTest&&(gm.push(s),py[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}uw(e,s),t.register&&t.register(Qi,s,rn)}else ww.push(t)},Me=255,vh={aqua:[0,Me,Me],lime:[0,Me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Me],navy:[0,0,128],white:[Me,Me,Me],olive:[128,128,0],yellow:[Me,Me,0],orange:[Me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Me,0,0],pink:[Me,192,203],cyan:[0,Me,Me],transparent:[Me,Me,Me,0]},Kv=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Me+.5|0},Rw=function(t,e,n){var s=t?Cr(t)?[t>>16,t>>8&Me,t&Me]:0:vh.black,r,a,o,l,c,u,f,h,d,_;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),vh[t])s=vh[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Me,s&Me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Me,t&Me]}else if(t.substr(0,3)==="hsl"){if(s=_=t.match(JE),!e)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,s.length>3&&(s[3]*=1),s[0]=Kv(l+1/3,r,a),s[1]=Kv(l,r,a),s[2]=Kv(l-1/3,r,a);else if(~t.indexOf("="))return s=t.match(hy),n&&s.length<4&&(s[3]=1),s}else s=t.match(JE)||vh.transparent;s=s.map(Number)}return e&&!_&&(r=s[0]/Me,a=s[1]/Me,o=s[2]/Me,f=Math.max(r,a,o),h=Math.min(r,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===r?(a-o)/d+(a<o?6:0):f===a?(o-r)/d+2:(r-a)/d+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),n&&s.length<4&&(s[3]=1),s},Cw=function(t){var e=[],n=[],s=-1;return t.split(Rr).forEach(function(r){var a=r.match(Do)||[];e.push.apply(e,a),n.push(s+=a.length+1)}),e.c=n,e},nw=function(t,e,n){var s="",r=(t+s).match(Rr),a=e?"hsla(":"rgba(",o=0,l,c,u,f;if(!r)return t;if(r=r.map(function(h){return(h=Rw(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Cw(t),l=n.c,l.join(s)!==u.c.join(s)))for(c=t.replace(Rr,"1").split(Do),f=c.length-1;o<f;o++)s+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split(Rr),f=c.length-1;o<f;o++)s+=c[o]+r[o];return s+c[f]},Rr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in vh)i+="|"+t+"\\b";return new RegExp(i+")","gi")})(),CU=/hsl[a]?\(/,yy=function(t){var e=t.join(" "),n;if(Rr.lastIndex=0,Rr.test(e))return n=CU.test(e),t[1]=nw(t[1],n),t[0]=nw(t[0],n,Cw(t[1])),!0},Eh,yn=(function(){var i=Date.now,t=500,e=33,n=i(),s=n,r=1e3/240,a=r,o=[],l,c,u,f,h,d,_=function v(m){var p=i()-s,g=m===!0,x,S,M,w;if((p>t||p<0)&&(n+=p-e),s+=p,M=s-n,x=M-a,(x>0||g)&&(w=++f.frame,h=M-f.time*1e3,f.time=M=M/1e3,a+=x+(x>=r?0:r-x),S=1),g||(l=c(v)),S)for(d=0;d<o.length;d++)o[d](M,h,w,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){lw&&(!iy&&uy()&&(ks=iy=window,dy=ks.document||{},kn.gsap=Qi,(ks.gsapVersions||(ks.gsapVersions=[])).push(Qi.version),cw(vm||ks.GreenSockGlobals||!ks.gsap&&ks||{}),ww.forEach(Aw)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Eh=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Eh=0,c=Th},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),a=f.time*1e3+r},add:function(m,p,g){var x=p?function(S,M,w,y){m(S,M,w,y),f.remove(x)}:m;return f.remove(m),o[g?"unshift":"push"](x),pc(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f})(),pc=function(){return!Eh&&yn.wake()},re={},DU=/^[\d.\-M][\d.\-,\s]/,NU=/["']/g,LU=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),s=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[s]=isNaN(c)?c.replace(NU,"").trim():+c,s=l.substr(o+1).trim();return e},OU=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<n?t.indexOf(")",n+1):n)},UU=function(t){var e=(t+"").split("("),n=re[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[LU(e[1])]:OU(t).split(",").map(dw)):re._CE&&DU.test(t)?re._CE("",t):n},PU=function(t){return function(e){return 1-t(1-e)}},Ro=function(t,e){return t&&(Ze(t)?t:re[t]||UU(t))||e},Lo=function(t,e,n,s){n===void 0&&(n=function(l){return 1-e(1-l)}),s===void 0&&(s=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:s},a;return sn(t,function(o){re[o]=kn[o]=r,re[a=o.toLowerCase()]=n;for(var l in r)re[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=re[o+"."+l]=r[l]}),r},Dw=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Jv=function i(t,e,n){var s=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/ey*(Math.asin(1/s)||0),o=function(u){return u===1?1:s*Math.pow(2,-10*u)*rU((u-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Dw(o);return r=ey/r,l.config=function(c,u){return i(t,c,u)},l},jv=function i(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},s=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Dw(n);return s.config=function(r){return i(t,r)},s};sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Lo(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});re.Linear.easeNone=re.none=re.Linear.easeIn;Lo("Elastic",Jv("in"),Jv("out"),Jv());(function(i,t){var e=1/t,n=2*e,s=2.5*e,r=function(o){return o<e?i*o*o:o<n?i*Math.pow(o-1.5/t,2)+.75:o<s?i*(o-=2.25/t)*o+.9375:i*Math.pow(o-2.625/t,2)+.984375};Lo("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Lo("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Lo("Circ",function(i){return-(aw(1-i*i)-1)});Lo("Sine",function(i){return i===1?1:-sU(i*iU)+1});Lo("Back",jv("in"),jv("out"),jv());re.SteppedEase=re.steps=kn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,s=t+(e?0:1),r=e?1:0,a=1-ye;return function(o){return((s*Rh(0,a,o)|0)+r)*n}}};bh.ease=re["quad.out"];sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return my+=i+","+i+"Params,"});var xy=function(t,e){this.id=nU++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:_y,this.set=e?e.getSetter:Dm},wh=(function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,dc(this,+e.duration,1,1),this.data=e.data,ze&&(this._ctx=ze,ze.data.push(this)),Eh||yn.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,dc(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,s){if(pc(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Cm(this,n),!r._dp||r.parent||gw(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vs(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===ye||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),fw(this,n,s)),this},t.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+tw(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},t.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+tw(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?fc(this._tTime,r)+1:1},t.timeScale=function(n,s){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Sm(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||r>0&&r<o)&&this.totalTime(Rh(-Math.abs(this._delay),o,r),s!==!1),Rm(this),mU(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{pc(),this._ts=this._rts;var s=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==ye,a;if(r)for(this._tTime-=ye,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=s+ye){r=!1;break}a=a._next}this.totalTime(s,r)}return this},t.startTime=function(n){if(arguments.length){this._start=Ge(n);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Vs(s,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Sm(s.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=hU);var s=Bi;return Bi=n,vy(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Bi=s,this},t.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ew(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,ew(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,s){return this.totalTime(hs(this,n),xn(s))},t.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,xn(s)),this._dur||(this._zTime=-ye),this},t.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},t.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},t.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-ye)},t.eventCallback=function(n,s,r){var a=this.vars;return arguments.length>1?(s?(a[n]=s,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete a[n],this):a[n]},t.then=function(n){var s=this,r=s._prom;return new Promise(function(a){var o=Ze(n)?n:pw,l=function(){var u=s.then;s.then=null,r&&r(),Ze(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=u),a(o),s.then=u};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},t.kill=function(){_h(this)},i})();Vn(wh.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var Yi=(function(i){rw(t,i);function t(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=xn(n.sortChildren),ke&&Vs(n.parent||ke,Ar(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&_w(Ar(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(s,r,a){return xh(0,arguments,this),this},e.from=function(s,r,a){return xh(1,arguments,this),this},e.fromTo=function(s,r,a,o){return xh(2,arguments,this),this},e.set=function(s,r,a){return r.duration=0,r.parent=this,yh(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new $e(s,r,hs(this,a),1),this},e.call=function(s,r,a){return Vs(this,$e.delayedCall(0,s,r),a)},e.staggerTo=function(s,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new $e(s,a,hs(this,l)),this},e.staggerFrom=function(s,r,a,o,l,c,u){return a.runBackwards=1,yh(a).immediateRender=xn(a.immediateRender),this.staggerTo(s,r,a,o,l,c,u)},e.staggerFromTo=function(s,r,a,o,l,c,u,f){return o.startAt=a,yh(o).immediateRender=xn(o.immediateRender),this.staggerTo(s,r,o,l,c,u,f)},e.render=function(s,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:Ge(s),f=this._zTime<0!=s<0&&(this._initted||!c),h,d,_,v,m,p,g,x,S,M,w,y;if(this!==ke&&u>l&&s>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,s+=this._time-o),h=u,S=this._start,x=this._ts,p=!x,f&&(c||(o=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,a);if(h=Ge(u%m),u===l?(v=this._repeat,h=c):(M=Ge(u/m),v=~~M,v&&v===M&&(h=c,v--),h>c&&(h=c)),M=fc(this._tTime,m),!o&&this._tTime&&M!==v&&this._tTime-M*m-this._dur<=0&&(M=v),w&&v&1&&(h=c-h,y=1),v!==M&&!this._lock){var b=w&&M&1,R=b===(w&&v&1);if(v<M&&(b=!b),o=b?0:u%c?c:u,this._lock=1,this.render(o||(y?0:Ge(v*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,M=v),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,R&&(this._lock=2,o=b?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=yU(this,Ge(o),Ge(h)),g&&(u-=h-(h=g._start))),this._tTime=u,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,o=0),!o&&u&&c&&!r&&!M&&(Gn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&s>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&g!==d){if(d.parent!==this)return this.render(s,r,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,r,a),h!==this._time||!this._ts&&!p){g=0,_&&(u+=this._zTime=-ye);break}}d=_}else{d=this._last;for(var C=s<0?s:h;d;){if(_=d._prev,(d._act||C<=d._end)&&d._ts&&g!==d){if(d.parent!==this)return this.render(s,r,a);if(d.render(d._ts>0?(C-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(C-d._start)*d._ts,r,a||Bi&&vy(d)),h!==this._time||!this._ts&&!p){g=0,_&&(u+=this._zTime=C?-ye:ye);break}}d=_}}if(g&&!r&&(this.pause(),g.render(h>=o?0:-ye)._zTime=h>=o?1:-1,this._ts))return this._start=S,Rm(this),this.render(s,r,a);this._onUpdate&&!r&&Gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Na(this,1),!r&&!(s<0&&!o)&&(u||o||!l)&&(Gn(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,r){var a=this;if(Cr(r)||(r=hs(this,r,s)),!(s instanceof wh)){if(Zi(s))return s.forEach(function(o){return a.add(o,r)}),this;if(yi(s))return this.addLabel(s,r);if(Ze(s))s=$e.delayedCall(0,s);else return this}return this!==s?Vs(this,s,r):this},e.getChildren=function(s,r,a,o){s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-fs);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof $e?r&&l.push(c):(a&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(s){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===s)return r[a]},e.remove=function(s){return yi(s)?this.removeLabel(s):Ze(s)?this.killTweensOf(s):(s.parent===this&&Am(this,s),s===this._recent&&(this._recent=this._last),Ao(this))},e.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ge(yn.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},e.addLabel=function(s,r){return this.labels[s]=hs(this,r),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,r,a){var o=$e.delayedCall(0,r||Th,a);return o.data="isPause",this._hasPause=1,Vs(this,o,hs(this,s))},e.removePause=function(s){var r=this._first;for(s=hs(this,s);r;)r._start===s&&r.data==="isPause"&&Na(r),r=r._next},e.killTweensOf=function(s,r,a){for(var o=this.getTweensOf(s,a),l=o.length;l--;)Ra!==o[l]&&o[l].kill(s,r);return this},e.getTweensOf=function(s,r){for(var a=[],o=ds(s),l=this._first,c=Cr(r),u;l;)l instanceof $e?fU(l._targets,o)&&(c?(!Ra||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(s,r){r=r||{};var a=this,o=hs(a,s),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=$e.to(a,Vn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ye,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&dc(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},r));return h?_.render(0):_},e.tweenFromTo=function(s,r,a){return this.tweenTo(r,Vn({startAt:{time:hs(this,s)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),iw(this,hs(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),iw(this,hs(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+ye)},e.shiftChildren=function(s,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(s=Ge(s);o;)o._start>=a&&(o._start+=s,o._end+=s),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=s);return Ao(this)},e.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ao(this)},e.totalDuration=function(s){var r=0,a=this,o=a._last,l=fs,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-s:s));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Vs(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Ge(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;dc(a,a===ke&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(s){if(ke._ts&&(fw(ke,Sm(s,ke)),hw=yn.frame),yn.frame>=jE){jE+=Sn.autoSleep||120;var r=ke._first;if((!r||!r._ts)&&Sn.autoSleep&&yn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||yn.sleep()}}},t})(wh);Vn(Yi.prototype,{_lock:0,_hasPause:0,_forcing:0});var IU=function(t,e,n,s,r,a,o){var l=new rn(this._pt,t,e,0,1,Ey,null,r),c=0,u=0,f,h,d,_,v,m,p,g;for(l.b=n,l.e=s,n+="",s+="",(p=~s.indexOf("random("))&&(s=mc(s)),a&&(g=[n,s],a(g,t,e),n=g[0],s=g[1]),h=n.match(Zv)||[];f=Zv.exec(s);)_=f[0],v=s.substring(c,f.index),d?d=(d+1)%5:v.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:v||u===1?v:",",s:m,c:_.charAt(1)==="="?No(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Zv.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=o,(fy.test(s)||p)&&(l.e=0),this._pt=l,l},Sy=function(t,e,n,s,r,a,o,l,c,u){Ze(s)&&(s=s(r||0,t,a));var f=t[e],h=n!=="get"?n:Ze(f)?c?t[e.indexOf("set")||!Ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Ze(f)?c?GU:Lw:Ty,_;if(yi(s)&&(~s.indexOf("random(")&&(s=mc(s)),s.charAt(1)==="="&&(_=No(h,s)+(Fi(h)||0),(_||_===0)&&(s=_))),!u||h!==s||ly)return!isNaN(h*s)&&s!==""?(_=new rn(this._pt,t,e,+h||0,s-(h||0),typeof f=="boolean"?VU:Ow,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!f&&!(e in t)&&wm(e,s),IU.call(this,t,e,h,s,d,l||Sn.stringFilter,c))},zU=function(t,e,n,s,r){if(Ze(t)&&(t=Sh(t,r,e,n,s)),!Ws(t)||t.style&&t.nodeType||Zi(t)||ow(t))return yi(t)?Sh(t,r,e,n,s):t;var a={},o;for(o in t)a[o]=Sh(t[o],r,e,n,s);return a},by=function(t,e,n,s,r,a){var o,l,c,u;if(vn[t]&&(o=new vn[t]).init(r,o.rawVars?e[t]:zU(e[t],s,r,a,n),n,s,a)!==!1&&(n._pt=l=new rn(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==uc))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ra,ly,My=function i(t,e,n){var s=t.vars,r=s.ease,a=s.startAt,o=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.runBackwards,f=s.yoyoEase,h=s.keyframes,d=s.autoRevert,_=t._dur,v=t._startAt,m=t._targets,p=t.parent,g=p&&p.data==="nested"?p.vars.targets:m,x=t._overwrite==="auto"&&!cy,S=t.timeline,M=s.easeReverse||f,w,y,b,R,C,O,I,G,N,k,X,B,et;if(S&&(!h||!r)&&(r="none"),t._ease=Ro(r,bh.ease),t._rEase=M&&(Ro(M)||t._ease),t._from=!S&&!!s.runBackwards,t._from&&(t.ratio=1),!S||h&&!s.stagger){if(G=m[0]?Da(m[0]).harness:0,B=G&&s[G.prop],w=xm(s,py),v&&(v._zTime<0&&v.progress(1),e<0&&u&&o&&!d?v.render(-1,!0):v.revert(u&&_?mm:uU),v._lazy=0),a){if(Na(t._startAt=$e.set(m,Vn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!v&&xn(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Bi||!o&&!d)&&t._startAt.revert(mm),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!v){if(e&&(o=!1),b=Vn({overwrite:!1,data:"isFromStart",lazy:o&&!v&&xn(l),immediateRender:o,stagger:0,parent:p},w),B&&(b[G.prop]=B),Na(t._startAt=$e.set(m,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Bi?t._startAt.revert(mm):t._startAt.render(-1,!0)),t._zTime=e,!o)i(t._startAt,ye,ye);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&xn(l)||l&&!_,y=0;y<m.length;y++){if(C=m[y],I=C._gsap||gy(m)[y]._gsap,t._ptLookup[y]=k={},ny[I.id]&&Ca.length&&ym(),X=g===m?y:g.indexOf(C),G&&(N=new G).init(C,B||w,t,X,g)!==!1&&(t._pt=R=new rn(t._pt,C,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(q){k[q]=R}),N.priority&&(O=1)),!G||B)for(b in w)vn[b]&&(N=by(b,w,t,X,C,g))?N.priority&&(O=1):k[b]=R=Sy.call(t,C,b,"get",w[b],X,g,0,s.stringFilter);t._op&&t._op[y]&&t.kill(C,t._op[y]),x&&t._pt&&(Ra=t,ke.killTweensOf(C,k,t.globalTime(e)),et=!t.parent,Ra=0),t._pt&&l&&(ny[I.id]=1)}O&&Ay(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!et,h&&e<=0&&S.render(fs,!0,!0)},BU=function(t,e,n,s,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return ly=1,t.vars[e]="+=0",My(t,o),ly=0,l?Mh(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(s||s===0)&&!r?s:u.s+(s||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Qe(n)+Fi(f.e)),f.b&&(f.b=u.s+Fi(f.b))},FU=function(t,e){var n=t[0]?Da(t[0]).harness:0,s=n&&n.aliases,r,a,o,l;if(!s)return e;r=hc({},e);for(a in s)if(a in r)for(l=s[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},HU=function(t,e,n,s){var r=e.ease||s||"power1.inOut",a,o;if(Zi(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Sh=function(t,e,n,s,r){return Ze(t)?t.call(e,n,s,r):yi(t)&&~t.indexOf("random(")?mc(t):t},Mm=my+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Nw={};sn(Mm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Nw[i]=1});Mm=Mm.split(",");var $e=(function(i){rw(t,i);function t(n,s,r,a){var o;typeof s=="number"&&(r.duration=s,s=r,r=null),o=i.call(this,a?s:yh(s))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,v=l.defaults,m=l.scrollTrigger,p=s.parent||ke,g=(Zi(n)||ow(n)?Cr(n[0]):"length"in s)?[n]:ds(n),x,S,M,w,y,b,R,C;if(o._targets=g.length?gy(g):Mh("GSAP target "+n+" not found. https://gsap.com",!Sn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||h||pm(c)||pm(u)){s=o.vars;var O=s.easeReverse||s.yoyoEase;if(x=o.timeline=new Yi({data:"nested",defaults:v||{},targets:p&&p.data==="nested"?p.vars.targets:g}),x.kill(),x.parent=x._dp=Ar(o),x._start=0,h||pm(c)||pm(u)){if(w=g.length,R=h&&Sw(h),Ws(h))for(y in h)~Mm.indexOf(y)&&(C||(C={}),C[y]=h[y]);for(S=0;S<w;S++)M=xm(s,Nw),M.stagger=0,O&&(M.easeReverse=O),C&&hc(M,C),b=g[S],M.duration=+Sh(c,Ar(o),S,b,g),M.delay=(+Sh(u,Ar(o),S,b,g)||0)-o._delay,!h&&w===1&&M.delay&&(o._delay=u=M.delay,o._start+=u,M.delay=0),x.to(b,M,R?R(S,b,g):0),x._ease=re.none;x.duration()?c=u=0:o.timeline=0}else if(_){yh(Vn(x.vars.defaults,{ease:"none"})),x._ease=Ro(_.ease||s.ease||"none");var I=0,G,N,k;if(Zi(_))_.forEach(function(X){return x.to(g,X,">")}),x.duration();else{M={};for(y in _)y==="ease"||y==="easeEach"||HU(y,_[y],M,_.easeEach);for(y in M)for(G=M[y].sort(function(X,B){return X.t-B.t}),I=0,S=0;S<G.length;S++)N=G[S],k={ease:N.e,duration:(N.t-(S?G[S-1].t:0))/100*c},k[y]=N.v,x.to(g,k,I),I+=k.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!cy&&(Ra=Ar(o),ke.killTweensOf(g),Ra=0),Vs(p,Ar(o),r),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(f||!c&&!_&&o._start===Ge(p._time)&&xn(f)&&gU(Ar(o))&&p.data!=="nested")&&(o._tTime=-ye,o.render(Math.max(0,-u)||0)),m&&_w(Ar(o),m),o}var e=t.prototype;return e.render=function(s,r,a){var o=this._time,l=this._tDur,c=this._dur,u=s<0,f=s>l-ye&&!u?l:s<ye?0:s,h,d,_,v,m,p,g,x;if(!c)vU(this,s,r,a);else if(f!==this._tTime||!s||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,x=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+s,r,a);if(h=Ge(f%v),f===l?(_=this._repeat,h=c):(m=Ge(f/v),_=~~m,_&&_===m?(h=c,_--):h>c&&(h=c)),p=this._yoyo&&_&1,p&&(h=c-h),m=fc(this._tTime,v),h===o&&!a&&this._initted&&_===m)return this._tTime=f,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==v&&this._initted&&(this._lock=a=1,this.render(Ge(v*_),!0).invalidate()._lock=0)}if(!this._initted){if(vw(this,u?s:h,a,r,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(s,r,a)}if(this._rEase){var S=h<o;if(S!==this._inv){var M=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(S?-1:1)/M:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=g=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=g=this._ease(h/c);if(this._from&&(this.ratio=g=1-g),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!r&&!m&&(Gn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(g,d.d),d=d._next;x&&x.render(s<0?s:x._dur*x._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(u&&sy(this,s,r,a),Gn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Gn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&sy(this,s,!0,!0),(s||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Na(this,1),!r&&!(u&&!o)&&(f||o||p)&&(Gn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},e.resetTo=function(s,r,a,o,l){Eh||yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||My(this,c),u=this._ease(c/this._dur),BU(this,s,r,a,o,u,c,l)?this.resetTo(s,r,a,o,1):(Cm(this,0),this.parent||mw(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?_h(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Bi),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,Ra&&Ra.vars.overwrite!==!0)._first||_h(this),this.parent&&a!==this.timeline.totalDuration()&&dc(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=s?ds(s):o,c=this._ptLookup,u=this._pt,f,h,d,_,v,m,p;if((!r||r==="all")&&pU(o,l))return r==="all"&&(this._pt=0),_h(this);for(f=this._op=this._op||[],r!=="all"&&(yi(r)&&(v={},sn(r,function(g){return v[g]=1}),r=v),r=FU(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],r==="all"?(f[p]=r,_=h,d={}):(d=f[p]=f[p]||{},_=r);for(v in _)m=h&&h[v],m&&((!("kill"in m.d)||m.d.kill(v)===!0)&&Am(this,m,"_pt"),delete h[v]),d!=="all"&&(d[v]=1)}return this._initted&&!this._pt&&u&&_h(this),this},t.to=function(s,r){return new t(s,r,arguments[2])},t.from=function(s,r){return xh(1,arguments)},t.delayedCall=function(s,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(s,r,a){return xh(2,arguments)},t.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(s,r)},t.killTweensOf=function(s,r,a){return ke.killTweensOf(s,r,a)},t})(wh);Vn($e.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});sn("staggerTo,staggerFrom,staggerFromTo",function(i){$e[i]=function(){var t=new Yi,e=ry.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Ty=function(t,e,n){return t[e]=n},Lw=function(t,e,n){return t[e](n)},GU=function(t,e,n,s){return t[e](s.fp,n)},kU=function(t,e,n){return t.setAttribute(e,n)},Dm=function(t,e){return Ze(t[e])?Lw:Em(t[e])&&t.setAttribute?kU:Ty},Ow=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},VU=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ey=function(t,e){var n=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+s,n=n._next;s+=e.c}e.set(e.t,e.p,s,e)},wy=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},WU=function(t,e,n,s){for(var r=this._pt,a;r;)a=r._next,r.p===s&&r.modifier(t,e,n),r=a},XU=function(t){for(var e=this._pt,n,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?Am(this,e,"_pt"):e.dep||(n=1),e=s;return!n},qU=function(t,e,n,s){s.mSet(t,e,s.m.call(s.tween,n,s.mt),s)},Ay=function(t){for(var e=t._pt,n,s,r,a;e;){for(n=e._next,s=r;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:a)?e._prev._next=e:r=e,(e._next=s)?s._prev=e:a=e,e=n}t._pt=r},rn=(function(){function i(e,n,s,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=s,this.r=o||Ow,this.d=l||this,this.set=c||Ty,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=qU,this.m=n,this.mt=r,this.tween=s},i})();sn(my+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return py[i]=1});kn.TweenMax=kn.TweenLite=$e;kn.TimelineLite=kn.TimelineMax=Yi;ke=new Yi({sortChildren:!1,defaults:bh,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sn.stringFilter=yy;var Co=[],_m={},YU=[],sw=0,ZU=0,$v=function(t){return(_m[t]||YU).map(function(e){return e()})},Ah=function(){var t=Date.now(),e=[];t-sw>2&&($v("matchMediaInit"),Co.forEach(function(n){var s=n.queries,r=n.conditions,a,o,l,c;for(o in s)a=ks.matchMedia(s[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),$v("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),sw=t,$v("matchMedia"))},Uw=(function(){function i(e,n){this.selector=n&&ay(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ZU++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,s,r){Ze(n)&&(r=s,s=n,n=Ze);var a=this,o=function(){var c=ze,u=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=ay(r)),ze=a,f=s.apply(a,arguments),Ze(f)&&a._r.push(f),ze=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Ze?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var s=ze;ze=null,n(this),ze=s},t.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof $e&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,s){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Yi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $e)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),s){for(var a=Co.length;a--;)Co[a].id===this.id&&Co.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Ah):o.removeEventListener("change",Ah)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},i})(),QU=(function(){function i(e){this.contexts=[],this.scope=e,ze&&ze.data.push(this)}var t=i.prototype;return t.add=function(n,s,r){Ws(n)||(n={matches:n});var a=new Uw(0,r||this.scope),o=a.conditions={},l,c,u;ze&&!a.selector&&(a.selector=ze.selector),this.contexts.push(a),s=a.add("onMatch",s),a.queries=n;for(c in n)c==="all"?u=1:(l=ks.matchMedia(n[c]),l&&(Co.indexOf(a)<0&&Co.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ah):l.addEventListener("change",Ah),(a._mqs||(a._mqs=[])).push(l)));return u&&s(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i})(),Tm={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(s){return Aw(s)})},timeline:function(t){return new Yi(t)},getTweensOf:function(t,e){return ke.getTweensOf(t,e)},getProperty:function(t,e,n,s){yi(t)&&(t=ds(t)[0]);var r=Da(t||{}).get,a=n?pw:dw;return n==="native"&&(n=""),t&&(e?a((vn[e]&&vn[e].get||r)(t,e,n,s)):function(o,l,c){return a((vn[o]&&vn[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=ds(t),t.length>1){var s=t.map(function(u){return Qi.quickSetter(u,e,n)}),r=s.length;return function(u){for(var f=r;f--;)s[f](u)}}t=t[0]||{};var a=vn[e],o=Da(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var f=new a;uc._pt=0,f.init(t,n?u+n:u,uc,0,[t]),f.render(1,f),uc._pt&&wy(1,uc)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var s,r=Qi.to(t,Vn((s={},s[e]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),a=function(l,c,u){return r.resetTo(e,l,c,u)};return a.tween=r,a},isTweening:function(t){return ke.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ro(t.ease,bh.ease)),$E(bh,t||{})},config:function(t){return $E(Sn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,s=t.plugins,r=t.defaults,a=t.extendTimeline;(s||"").split(",").forEach(function(o){return o&&!vn[o]&&!kn[o]&&Mh(e+" effect requires "+o+" plugin.")}),Qv[e]=function(o,l,c){return n(ds(o),Vn(l||{},r),c)},a&&(Yi.prototype[e]=function(o,l,c){return this.add(Qv[e](o,Ws(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){re[t]=Ro(e)},parseEase:function(t,e){return arguments.length?Ro(t,e):re},getById:function(t){return ke.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Yi(t),s,r;for(n.smoothChildTiming=xn(t.smoothChildTiming),ke.remove(n),n._dp=0,n._time=n._tTime=ke._time,s=ke._first;s;)r=s._next,(e||!(!s._dur&&s instanceof $e&&s.vars.onComplete===s._targets[0]))&&Vs(n,s,s._start-s._delay),s=r;return Vs(ke,n,0),n},context:function(t,e){return t?new Uw(t,e):ze},matchMedia:function(t){return new QU(t)},matchMediaRefresh:function(){return Co.forEach(function(t){var e=t.conditions,n,s;for(s in e)e[s]&&(e[s]=!1,n=1);n&&t.revert()})||Ah()},addEventListener:function(t,e){var n=_m[t]||(_m[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=_m[t],s=n&&n.indexOf(e);s>=0&&n.splice(s,1)},utils:{wrap:wU,wrapYoyo:AU,distribute:Sw,random:Mw,snap:bw,normalize:EU,getUnit:Fi,clamp:SU,splitColor:Rw,toArray:ds,selector:ay,mapRange:Ew,pipe:MU,unitize:TU,interpolate:RU,shuffle:xw},install:cw,effects:Qv,ticker:yn,updateRoot:Yi.updateRoot,plugins:vn,globalTimeline:ke,core:{PropTween:rn,globals:uw,Tween:$e,Timeline:Yi,Animation:wh,getCache:Da,_removeLinkedListItem:Am,reverting:function(){return Bi},context:function(t){return t&&ze&&(ze.data.push(t),t._ctx=ze),ze},suppressOverwrites:function(t){return cy=t}}};sn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Tm[i]=$e[i]});yn.add(Yi.updateRoot);uc=Tm.to({},{duration:0});var KU=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},JU=function(t,e){var n=t._targets,s,r,a;for(s in e)for(r=n.length;r--;)a=t._ptLookup[r][s],a&&(a=a.d)&&(a._pt&&(a=KU(a,s)),a&&a.modifier&&a.modifier(e[s],t,n[r],s))},ty=function(t,e){return{name:t,headless:1,rawVars:1,init:function(s,r,a){a._onInit=function(o){var l,c;if(yi(r)&&(l={},sn(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}JU(o,r)}}}},Qi=Tm.registerPlugin({name:"attr",init:function(t,e,n,s,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],s,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Bi?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ty("roundProps",oy),ty("modifiers"),ty("snap",bw))||Tm;$e.version=Yi.version=Qi.version="3.15.1";lw=1;uy()&&pc();var jU=re.Power0,$U=re.Power1,tP=re.Power2,eP=re.Power3,iP=re.Power4,nP=re.Linear,sP=re.Quad,rP=re.Cubic,aP=re.Quart,oP=re.Quint,lP=re.Strong,cP=re.Elastic,uP=re.Back,hP=re.SteppedEase,fP=re.Bounce,dP=re.Sine,pP=re.Expo,mP=re.Circ;nt();var Pw,Oa,_c,Oy,Io,gP,Iw,Uy,_P=function(){return typeof window<"u"},Nr={},Po=180/Math.PI,vc=Math.PI/180,gc=Math.atan2,zw=1e8,Py=/([A-Z])/g,vP=/(left|right|width|margin|padding|x)/i,yP=/[\s,\(]\S/,Xs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Cy=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},xP=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},SP=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},bP=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},MP=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Xw=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},qw=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},TP=function(t,e,n){return t.style[e]=n},EP=function(t,e,n){return t.style.setProperty(e,n)},wP=function(t,e,n){return t._gsap[e]=n},AP=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},RP=function(t,e,n,s,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},CP=function(t,e,n,s,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Ve="transform",bn=Ve+"Origin",DP=function i(t,e){var n=this,s=this.target,r=s.style,a=s._gsap;if(t in Nr&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Xs[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Dr(s,o)}):this.tfm[t]=a.x?a[t]:Dr(s,t),t===bn&&(this.tfm.zOrigin=a.zOrigin);else return Xs.transform.split(",").forEach(function(o){return i.call(n,o,e)});if(this.props.indexOf(Ve)>=0)return;a.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(bn,e,"")),t=Ve}(r||e)&&this.props.push(t,e,r[t])},Yw=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},NP=function(){var t=this.props,e=this.target,n=e.style,s=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Py,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)s[a]=this.tfm[a];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Uy(),(!r||!r.isStart)&&!n[Ve]&&(Yw(n),s.zOrigin&&n[bn]&&(n[bn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Zw=function(t,e){var n={target:t,props:[],revert:NP,save:DP};return t._gsap||Qi.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(s){return n.save(s)}),n},Qw,Dy=function(t,e){var n=Oa.createElementNS?Oa.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Oa.createElement(t);return n&&n.style?n:Oa.createElement(t)},Wn=function i(t,e,n){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(Py,"-$1").toLowerCase())||s.getPropertyValue(e)||!n&&i(t,yc(e)||e,1)||""},Bw="O,Moz,ms,Ms,Webkit".split(","),yc=function(t,e,n){var s=e||Io,r=s.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Bw[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Bw[a]:"")+t},Ny=function(){_P()&&window.document&&(Pw=window,Oa=Pw.document,_c=Oa.documentElement,Io=Dy("div")||{style:{}},gP=Dy("div"),Ve=yc(Ve),bn=Ve+"Origin",Io.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qw=!!yc("perspective"),Uy=Qi.core.reverting,Oy=1)},Fw=function(t){var e=t.ownerSVGElement,n=Dy("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),r;s.style.display="block",n.appendChild(s),_c.appendChild(n);try{r=s.getBBox()}catch{}return n.removeChild(s),_c.removeChild(n),r},Hw=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Kw=function(t){var e,n;try{e=t.getBBox()}catch{e=Fw(t),n=1}return e&&(e.width||e.height)||n||(e=Fw(t)),e&&!e.width&&!e.x&&!e.y?{x:+Hw(t,["x","cx","x1"])||0,y:+Hw(t,["y","cy","y1"])||0,width:0,height:0}:e},Jw=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Kw(t))},Pa=function(t,e){if(e){var n=t.style,s;e in Nr&&e!==bn&&(e=Ve),n.removeProperty?(s=e.substr(0,2),(s==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(s==="--"?e:e.replace(Py,"-$1").toLowerCase())):n.removeAttribute(e)}},Ua=function(t,e,n,s,r,a){var o=new rn(t._pt,e,n,0,1,a?qw:Xw);return t._pt=o,o.b=s,o.e=r,t._props.push(n),o},Gw={deg:1,rad:1,turn:1},LP={grid:1,flex:1},Ia=function i(t,e,n,s){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Io.style,l=vP.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=s==="px",d=s==="%",_,v,m,p;if(s===a||!r||Gw[s]||Gw[a])return r;if(a!=="px"&&!h&&(r=i(t,e,n,"px")),p=t.getCTM&&Jw(t),(d||a==="%")&&(Nr[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[u],Qe(d?r/_*f:r/100*_);if(o[l?"width":"height"]=f+(h?a:s),v=s!=="rem"&&~e.indexOf("adius")||s==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(v=(t.ownerSVGElement||{}).parentNode),(!v||v===Oa||!v.appendChild)&&(v=Oa.body),m=v._gsap,m&&d&&m.width&&l&&m.time===yn.time&&!m.uncache)return Qe(r/m.width*f);if(d&&(e==="height"||e==="width")){var g=t.style[e];t.style[e]=f+s,_=t[u],g?t.style[e]=g:Pa(t,e)}else(d||a==="%")&&!LP[Wn(v,"display")]&&(o.position=Wn(t,"position")),v===t&&(o.position="static"),v.appendChild(Io),_=Io[u],v.removeChild(Io),o.position="absolute";return l&&d&&(m=Da(v),m.time=yn.time,m.width=v[u]),Qe(h?_*r/f:_&&r?f/_*r:0)},Dr=function(t,e,n,s){var r;return Oy||Ny(),e in Xs&&e!=="transform"&&(e=Xs[e],~e.indexOf(",")&&(e=e.split(",")[0])),Nr[e]&&e!=="transform"?(r=Nh(t,s),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Lm(Wn(t,bn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=Nm[e]&&Nm[e](t,e,n)||Wn(t,e)||_y(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ia(t,e,r,n)+n:r},OP=function(t,e,n,s){if(!n||n==="none"){var r=yc(e,t,1),a=r&&Wn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=Wn(t,"borderTopColor"))}var o=new rn(this._pt,t.style,e,0,1,Ey),l=0,c=0,u,f,h,d,_,v,m,p,g,x,S,M;if(o.b=n,o.e=s,n+="",s+="",s.substring(0,6)==="var(--"&&(s=Wn(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(v=t.style[e],t.style[e]=s,s=Wn(t,e)||s,v?t.style[e]=v:Pa(t,e)),u=[n,s],yy(u),n=u[0],s=u[1],h=n.match(Do)||[],M=s.match(Do)||[],M.length){for(;f=Do.exec(s);)m=f[0],g=s.substring(l,f.index),_?_=(_+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(_=1),m!==(v=h[c++]||"")&&(d=parseFloat(v)||0,S=v.substr((d+"").length),m.charAt(1)==="="&&(m=No(d,m)+S),p=parseFloat(m),x=m.substr((p+"").length),l=Do.lastIndex-x.length,x||(x=x||Sn.units[e]||S,l===s.length&&(s+=x,o.e+=x)),S!==x&&(d=Ia(t,e,v,x)||0),o._pt={_next:o._pt,p:g||c===1?g:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<s.length?s.substring(l,s.length):""}else o.r=e==="display"&&s==="none"?qw:Xw;return fy.test(s)&&(o.e=0),this._pt=o,o},kw={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},UP=function(t){var e=t.split(" "),n=e[0],s=e[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(t=n,n=s,s=t),e[0]=kw[n]||n,e[1]=kw[s]||s,e.join(" ")},PP=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,s=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Nr[o]&&(l=1,o=o==="transformOrigin"?bn:Ve),Pa(n,o);l&&(Pa(n,Ve),a&&(a.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Nh(n,1),a.uncache=1,Yw(s)))}},Nm={clearProps:function(t,e,n,s,r){if(r.data!=="isFromStart"){var a=t._pt=new rn(t._pt,e,n,0,0,PP);return a.u=s,a.pr=-10,a.tween=r,t._props.push(n),1}}},Dh=[1,0,0,1,0,0],jw={},$w=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Vw=function(t){var e=Wn(t,Ve);return $w(e)?Dh:e.substr(7).match(hy).map(Qe)},Iy=function(t,e){var n=t._gsap||Da(t),s=t.style,r=Vw(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Dh:r):(r===Dh&&!t.offsetParent&&t!==_c&&!n.svg&&(l=s.display,s.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,_c.appendChild(t)),r=Vw(t),l?s.display=l:Pa(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):_c.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ly=function(t,e,n,s,r,a){var o=t._gsap,l=r||Iy(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],_=l[1],v=l[2],m=l[3],p=l[4],g=l[5],x=e.split(" "),S=parseFloat(x[0])||0,M=parseFloat(x[1])||0,w,y,b,R;n?l!==Dh&&(y=d*m-_*v)&&(b=S*(m/y)+M*(-v/y)+(v*g-m*p)/y,R=S*(-_/y)+M*(d/y)-(d*g-_*p)/y,S=b,M=R):(w=Kw(t),S=w.x+(~x[0].indexOf("%")?S/100*w.width:S),M=w.y+(~(x[1]||x[0]).indexOf("%")?M/100*w.height:M)),s||s!==!1&&o.smooth?(p=S-c,g=M-u,o.xOffset=f+(p*d+g*v)-p,o.yOffset=h+(p*_+g*m)-g):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=M,o.smooth=!!s,o.origin=e,o.originIsAbsolute=!!n,t.style[bn]="0px 0px",a&&(Ua(a,o,"xOrigin",c,S),Ua(a,o,"yOrigin",u,M),Ua(a,o,"xOffset",f,o.xOffset),Ua(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",S+" "+M)},Nh=function(t,e){var n=t._gsap||new xy(t);if("x"in n&&!e&&!n.uncache)return n;var s=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Wn(t,bn)||"0",u,f,h,d,_,v,m,p,g,x,S,M,w,y,b,R,C,O,I,G,N,k,X,B,et,q,$,it,xt,Bt,Z,ht;return u=f=h=v=m=p=g=x=S=0,d=_=1,n.svg=!!(t.getCTM&&Jw(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[Ve]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ve]!=="none"?l[Ve]:"")),s.scale=s.rotate=s.translate="none"),y=Iy(t,n.svg),n.svg&&(n.uncache?(et=t.getBBox(),c=n.xOrigin-et.x+"px "+(n.yOrigin-et.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),Ly(t,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,y)),M=n.xOrigin||0,w=n.yOrigin||0,y!==Dh&&(O=y[0],I=y[1],G=y[2],N=y[3],u=k=y[4],f=X=y[5],y.length===6?(d=Math.sqrt(O*O+I*I),_=Math.sqrt(N*N+G*G),v=O||I?gc(I,O)*Po:0,g=G||N?gc(G,N)*Po+v:0,g&&(_*=Math.abs(Math.cos(g*vc))),n.svg&&(u-=M-(M*O+w*G),f-=w-(M*I+w*N))):(ht=y[6],Bt=y[7],$=y[8],it=y[9],xt=y[10],Z=y[11],u=y[12],f=y[13],h=y[14],b=gc(ht,xt),m=b*Po,b&&(R=Math.cos(-b),C=Math.sin(-b),B=k*R+$*C,et=X*R+it*C,q=ht*R+xt*C,$=k*-C+$*R,it=X*-C+it*R,xt=ht*-C+xt*R,Z=Bt*-C+Z*R,k=B,X=et,ht=q),b=gc(-G,xt),p=b*Po,b&&(R=Math.cos(-b),C=Math.sin(-b),B=O*R-$*C,et=I*R-it*C,q=G*R-xt*C,Z=N*C+Z*R,O=B,I=et,G=q),b=gc(I,O),v=b*Po,b&&(R=Math.cos(b),C=Math.sin(b),B=O*R+I*C,et=k*R+X*C,I=I*R-O*C,X=X*R-k*C,O=B,k=et),m&&Math.abs(m)+Math.abs(v)>359.9&&(m=v=0,p=180-p),d=Qe(Math.sqrt(O*O+I*I+G*G)),_=Qe(Math.sqrt(X*X+ht*ht)),b=gc(k,X),g=Math.abs(b)>2e-4?b*Po:0,S=Z?1/(Z<0?-Z:Z):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!$w(Wn(t,Ve)),B&&t.setAttribute("transform",B))),Math.abs(g)>90&&Math.abs(g)<270&&(r?(d*=-1,g+=v<=0?180:-180,v+=v<=0?180:-180):(_*=-1,g+=g<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Qe(d),n.scaleY=Qe(_),n.rotation=Qe(v)+o,n.rotationX=Qe(m)+o,n.rotationY=Qe(p)+o,n.skewX=g+o,n.skewY=x+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(s[bn]=Lm(c)),n.xOffset=n.yOffset=0,n.force3D=Sn.force3D,n.renderTransform=n.svg?zP:Qw?tA:IP,n.uncache=0,n},Lm=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ry=function(t,e,n){var s=Fi(e);return Qe(parseFloat(e)+parseFloat(Ia(t,"x",n+"px",s)))+s},IP=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tA(t,e)},Oo="0deg",Ch="0px",Uo=") ",tA=function(t,e){var n=e||this,s=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,v=n.scaleY,m=n.transformPerspective,p=n.force3D,g=n.target,x=n.zOrigin,S="",M=p==="auto"&&t&&t!==1||p===!0;if(x&&(f!==Oo||u!==Oo)){var w=parseFloat(u)*vc,y=Math.sin(w),b=Math.cos(w),R;w=parseFloat(f)*vc,R=Math.cos(w),a=Ry(g,a,y*R*-x),o=Ry(g,o,-Math.sin(w)*-x),l=Ry(g,l,b*R*-x+x)}m!==Ch&&(S+="perspective("+m+Uo),(s||r)&&(S+="translate("+s+"%, "+r+"%) "),(M||a!==Ch||o!==Ch||l!==Ch)&&(S+=l!==Ch||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Uo),c!==Oo&&(S+="rotate("+c+Uo),u!==Oo&&(S+="rotateY("+u+Uo),f!==Oo&&(S+="rotateX("+f+Uo),(h!==Oo||d!==Oo)&&(S+="skew("+h+", "+d+Uo),(_!==1||v!==1)&&(S+="scale("+_+", "+v+Uo),g.style[Ve]=S||"translate(0, 0)"},zP=function(t,e){var n=e||this,s=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,v=n.yOrigin,m=n.xOffset,p=n.yOffset,g=n.forceCSS,x=parseFloat(a),S=parseFloat(o),M,w,y,b,R;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=vc,c*=vc,M=Math.cos(l)*f,w=Math.sin(l)*f,y=Math.sin(l-c)*-h,b=Math.cos(l-c)*h,c&&(u*=vc,R=Math.tan(c-u),R=Math.sqrt(1+R*R),y*=R,b*=R,u&&(R=Math.tan(u),R=Math.sqrt(1+R*R),M*=R,w*=R)),M=Qe(M),w=Qe(w),y=Qe(y),b=Qe(b)):(M=f,b=h,w=y=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=Ia(d,"x",a,"px"),S=Ia(d,"y",o,"px")),(_||v||m||p)&&(x=Qe(x+_-(_*M+v*y)+m),S=Qe(S+v-(_*w+v*b)+p)),(s||r)&&(R=d.getBBox(),x=Qe(x+s/100*R.width),S=Qe(S+r/100*R.height)),R="matrix("+M+","+w+","+y+","+b+","+x+","+S+")",d.setAttribute("transform",R),g&&(d.style[Ve]=R)},BP=function(t,e,n,s,r){var a=360,o=yi(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Po:1),c=l-s,u=s+c+"deg",f,h;return o&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*zw)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*zw)%a-~~(c/a)*a)),t._pt=h=new rn(t._pt,e,n,s,c,xP),h.e=u,h.u="deg",t._props.push(n),h},Ww=function(t,e){for(var n in e)t[n]=e[n];return t},FP=function(t,e,n){var s=Ww({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,_;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ve]=e,o=Nh(n,1),Pa(n,Ve),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ve],a[Ve]=e,o=Nh(n,1),a[Ve]=c);for(l in Nr)c=s[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=Fi(c),_=Fi(u),f=d!==_?Ia(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new rn(t._pt,o,l,f,h-f,Cy),t._pt.u=_||0,t._props.push(l));Ww(o,s)};sn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",s="Bottom",r="Left",a=(t<3?[e,n,s,r]:[e+r,e+n,s+n,s+r]).map(function(o){return t<2?i+o:"border"+o+i});Nm[t>1?"border"+i:i]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(_){return Dr(o,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(_,v){return d[_]=h[v]=h[v]||h[(v-1)/2|0]}),o.init(l,d,f)}});var zy={name:"css",register:Ny,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,s,r){var a=this._props,o=t.style,l=n.vars.startAt,c,u,f,h,d,_,v,m,p,g,x,S,M,w,y,b,R;Oy||Ny(),this.styles=this.styles||Zw(t),b=this.styles.props,this.tween=n;for(v in e)if(v!=="autoRound"&&(u=e[v],!(vn[v]&&by(v,e,n,s,t,r)))){if(d=typeof u,_=Nm[v],d==="function"&&(u=u.call(n,s,t,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=mc(u)),_)_(this,t,v,u,n)&&(y=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(v)+"").trim(),u+="",Rr.lastIndex=0,Rr.test(c)||(m=Fi(c),p=Fi(u),p?m!==p&&(c=Ia(t,v,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,s,r,0,0,v),a.push(v),b.push(v,0,o[v]);else if(d!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,s,t,r):l[v],yi(c)&&~c.indexOf("random(")&&(c=mc(c)),Fi(c+"")||c==="auto"||(c+=Sn.units[v]||Fi(Dr(t,v))||""),(c+"").charAt(1)==="="&&(c=Dr(t,v))):c=Dr(t,v),h=parseFloat(c),g=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),g&&(u=u.substr(2)),f=parseFloat(u),v in Xs&&(v==="autoAlpha"&&(h===1&&Dr(t,"visibility")==="hidden"&&f&&(h=0),b.push("visibility",0,o.visibility),Ua(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),v!=="scale"&&v!=="transform"&&(v=Xs[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in Nr,x){if(this.styles.save(v),R=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Wn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=u,u=Wn(t,"perspective"),C?t.style.perspective=C:Pa(t,"perspective")}f=parseFloat(u)}if(S||(M=t._gsap,M.renderTransform&&!e.parseTransform||Nh(t,e.parseTransform),w=e.smoothOrigin!==!1&&M.smooth,S=this._pt=new rn(this._pt,o,Ve,0,1,M.renderTransform,M,0,-1),S.dep=1),v==="scale")this._pt=new rn(this._pt,M,"scaleY",M.scaleY,(g?No(M.scaleY,g+f):f)-M.scaleY||0,Cy),this._pt.u=0,a.push("scaleY",v),v+="X";else if(v==="transformOrigin"){b.push(bn,0,o[bn]),u=UP(u),M.svg?Ly(t,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&Ua(this,M,"zOrigin",M.zOrigin,p),Ua(this,o,v,Lm(c),Lm(u)));continue}else if(v==="svgOrigin"){Ly(t,u,1,w,0,this);continue}else if(v in jw){BP(this,M,v,h,g?No(h,g+u):u);continue}else if(v==="smoothOrigin"){Ua(this,M,"smooth",M.smooth,u);continue}else if(v==="force3D"){M[v]=u;continue}else if(v==="transform"){FP(this,u,t);continue}}else v in o||(v=yc(v)||v);if(x||(f||f===0)&&(h||h===0)&&!yP.test(u)&&v in o)m=(c+"").substr((h+"").length),f||(f=0),p=Fi(u)||(v in Sn.units?Sn.units[v]:m),m!==p&&(h=Ia(t,v,c,p)),this._pt=new rn(this._pt,x?M:o,v,h,(g?No(h,g+f):f)-h,!x&&(p==="px"||v==="zIndex")&&e.autoRound!==!1?MP:Cy),this._pt.u=p||0,x&&R!==u?(this._pt.b=c,this._pt.e=R,this._pt.r=bP):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=SP);else if(v in o)OP.call(this,t,v,c,g?g+u:u);else if(v in t)this.add(t,v,c||t[v],g?g+u:u,s,r);else if(v!=="parseTransform"){wm(v,u);continue}x||(v in o?b.push(v,0,o[v]):typeof t[v]=="function"?b.push(v,2,t[v]()):b.push(v,1,c||t[v])),a.push(v)}}y&&Ay(this)},render:function(t,e){if(e.tween._time||!Uy())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Dr,aliases:Xs,getSetter:function(t,e,n){var s=Xs[e];return s&&s.indexOf(",")<0&&(e=s),e in Nr&&e!==bn&&(t._gsap.x||Dr(t,"x"))?n&&Iw===n?e==="scale"?AP:wP:(Iw=n||{})&&(e==="scale"?RP:CP):t.style&&!Em(t.style[e])?TP:~e.indexOf("-")?EP:Dm(t,e)},core:{_removeProperty:Pa,_getMatrix:Iy}};Qi.utils.checkPrefix=yc;Qi.core.getStyleSaver=Zw;(function(i,t,e,n){var s=sn(i+","+t+","+e,function(r){Nr[r]=1});sn(t,function(r){Sn.units[r]="deg",jw[r]=1}),Xs[s[13]]=i+","+t,sn(n,function(r){var a=r.split(":");Xs[a[1]]=s[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Sn.units[i]="px"});Qi.registerPlugin(zy);var fe=Qi.registerPlugin(zy)||Qi,N5=fe.core.Tween;nt();nt();var Lr=`
#ifndef OCTAVES
#define OCTAVES 4
#endif

vec3 pwHash3(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float pwNoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(dot(pwHash3(i + vec3(0.0, 0.0, 0.0)), f - vec3(0.0, 0.0, 0.0)),
                     dot(pwHash3(i + vec3(1.0, 0.0, 0.0)), f - vec3(1.0, 0.0, 0.0)), u.x),
                 mix(dot(pwHash3(i + vec3(0.0, 1.0, 0.0)), f - vec3(0.0, 1.0, 0.0)),
                     dot(pwHash3(i + vec3(1.0, 1.0, 0.0)), f - vec3(1.0, 1.0, 0.0)), u.x), u.y),
             mix(mix(dot(pwHash3(i + vec3(0.0, 0.0, 1.0)), f - vec3(0.0, 0.0, 1.0)),
                     dot(pwHash3(i + vec3(1.0, 0.0, 1.0)), f - vec3(1.0, 0.0, 1.0)), u.x),
                 mix(dot(pwHash3(i + vec3(0.0, 1.0, 1.0)), f - vec3(0.0, 1.0, 1.0)),
                     dot(pwHash3(i + vec3(1.0, 1.0, 1.0)), f - vec3(1.0, 1.0, 1.0)), u.x), u.y), u.z);
}

/** \uB300\uB7B5 [-0.6, 0.6] \uBC94\uC704. */
float pwFbm(vec3 p) {
  float amp = 0.5;
  float sum = 0.0;
  for (int i = 0; i < OCTAVES; i++) {
    sum += amp * pwNoise(p);
    p = p * 2.02 + vec3(17.1, 3.7, 9.2);
    amp *= 0.5;
  }
  return sum;
}
`,Ki=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`;var HP=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,GP=`
${Lr}
uniform float uTime;
uniform vec3 uDeep;
uniform vec3 uMid;
uniform vec3 uHot;
varying vec2 vUv;

void main() {
  float lon = (vUv.x * 2.0 - 1.0) * 3.14159265;
  float lat = (vUv.y - 0.5) * 3.14159265;
  vec3 d = vec3(cos(lat) * cos(lon), sin(lat), cos(lat) * sin(lon));

  float t = uTime * 0.012;
  // \uB3C4\uBA54\uC778 \uC6CC\uD551: \uB178\uC774\uC988\uB85C \uC88C\uD45C\uB97C \uD55C \uBC88 \uBE44\uD2BC \uB4A4 \uB2E4\uC2DC \uB178\uC774\uC988\uB97C \uC77D\uB294\uB2E4
  vec3 q = d * 1.6 + vec3(0.0, t, -t * 0.6);
  vec3 warp = vec3(pwFbm(q + 3.1), pwFbm(q + vec3(7.7, 1.3, 4.2)), pwFbm(q - 5.4));
  float n = pwFbm(d * 2.3 + warp * 1.7 + vec3(t * 0.8, 0.0, t));
  float cloud = smoothstep(-0.14, 0.42, n);
  float wisps = smoothstep(0.1, 0.5, pwFbm(d * 5.2 - warp * 2.2));

  // \uC740\uD558 \uB760: \uAE30\uC6B8\uC5B4\uC9C4 \uD55C \uD3C9\uBA74 \uADFC\uCC98\uAC00 \uB354 \uC9D9\uB2E4
  float tilt = d.y * 0.92 + d.z * 0.38;
  float band = exp(-pow(tilt * 1.7 + 0.3 * warp.x, 2.0) * 2.4);

  vec3 col = uDeep * (0.25 + 0.75 * cloud);
  col = mix(col, uMid, cloud * cloud * (0.25 + 0.6 * band));
  col += uHot * wisps * cloud * band * 0.5;
  gl_FragColor = vec4(col, 1.0);
}
`,kP=`
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,VP=`
uniform sampler2D uMap;
uniform float uIntensity;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  vec2 uv = vec2(atan(d.z, d.x) / 6.2831853 + 0.5, asin(clamp(d.y, -1.0, 1.0)) / 3.14159265 + 0.5);
  gl_FragColor = vec4(texture2D(uMap, uv).rgb * uIntensity, 1.0);
  ${Ki}
}
`,WP={3:{width:512,interval:0},4:{width:1024,interval:.5},5:{width:1536,interval:.25}},Om=class{mesh;target;bakeScene=new mo;bakeCamera=new Ma(-1,1,1,-1,0,1);bakeMaterial;bakeQuad;interval=.5;nextBake=0;urgentUntil=0;time=0;constructor(t,e){let[n,s,r]=t;this.bakeMaterial=new se({vertexShader:HP,fragmentShader:GP,defines:{OCTAVES:e},uniforms:{uTime:{value:0},uDeep:{value:new wt(n)},uMid:{value:new wt(s)},uHot:{value:new wt(r)}},depthTest:!1,depthWrite:!1}),this.bakeQuad=new he(new bs(2,2),this.bakeMaterial),this.bakeQuad.frustumCulled=!1,this.bakeScene.add(this.bakeQuad),this.target=this.makeTarget(e),this.mesh=new he(new _n(400,32,20),new se({vertexShader:kP,fragmentShader:VP,uniforms:{uMap:{value:this.target.texture},uIntensity:{value:1}},side:mi,depthWrite:!1,depthTest:!1})),this.mesh.renderOrder=-10,this.mesh.frustumCulled=!1}makeTarget(t){let e=WP[t]??{width:1024,interval:.5};return this.interval=e.interval,new je(e.width,e.width/2,{type:gi,minFilter:Ri,magFilter:Ri,wrapS:ql,wrapT:cs,depthBuffer:!1,generateMipmaps:!1})}setOctaves(t){this.bakeMaterial.defines?.OCTAVES!==t&&(this.bakeMaterial.defines={...this.bakeMaterial.defines,OCTAVES:t},this.bakeMaterial.needsUpdate=!0,this.target.dispose(),this.target=this.makeTarget(t),this.mesh.material.uniforms.uMap.value=this.target.texture,this.nextBake=0)}setPalette(t,e=1.6){let n=this.bakeMaterial.uniforms,s=[n.uDeep,n.uMid,n.uHot];t.slice(0,3).forEach((r,a)=>{let o=new wt(r),l=s[a];l&&fe.to(l.value,{r:o.r,g:o.g,b:o.b,duration:e,ease:"sine.inOut"})}),this.urgentUntil=this.time+e+.1}update(t,e,n){if(this.time=e,this.mesh.position.copy(n),!(e<this.urgentUntil)&&e<this.nextBake)return;this.nextBake=this.interval>0?e+this.interval:Number.POSITIVE_INFINITY,this.bakeMaterial.uniforms.uTime.value=e;let r=t.getRenderTarget();t.setRenderTarget(this.target),t.render(this.bakeScene,this.bakeCamera),t.setRenderTarget(r)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.bakeQuad.geometry.dispose(),this.bakeMaterial.dispose(),this.target.dispose()}};nt();var XP=`
attribute float aSize;
attribute vec3 aColor;
attribute float aPhase;
uniform float uTime;
uniform float uScale;
varying vec3 vColor;
varying float vBig;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float twinkle = 0.72 + 0.28 * sin(uTime * (0.5 + aPhase * 1.9) + aPhase * 43.0);
  vColor = aColor * twinkle;
  vBig = smoothstep(3.2, 5.5, aSize);
  gl_PointSize = aSize * uScale * (0.85 + 0.15 * twinkle);
}
`,qP=`
varying vec3 vColor;
varying float vBig;
void main() {
  vec2 p = gl_PointCoord - 0.5;
  float d = length(p);
  float core = pow(smoothstep(0.5, 0.0, d), 2.4);
  // \uD070 \uBCC4\uC5D0\uB9CC \uC2ED\uC790 \uAD11\uCC44
  float cross = (1.0 - smoothstep(0.0, 0.035, abs(p.x))) + (1.0 - smoothstep(0.0, 0.035, abs(p.y)));
  cross *= smoothstep(0.5, 0.05, d) * 0.35 * vBig;
  float a = core + cross;
  gl_FragColor = vec4(vColor * a * 2.2, a);
  ${Ki}
}
`,YP=["#9db8ff","#cfd8ff","#ffffff","#fff1d6","#ffd2a1","#ffb0a0","#d9b8ff"],Um=class{group=new oi;layers=[];constructor(t,e){let n=[{share:.62,radius:150,size:[1,2.6],spin:.004,parallax:.6},{share:.28,radius:110,size:[1.5,3.8],spin:.007,parallax:1.4},{share:.1,radius:80,size:[2.6,6.5],spin:.011,parallax:2.6}],s=YP.map(r=>new wt(r));for(let[r,a]of n.entries()){let o=t.fork(`stars-${r}`),l=Math.floor(e*a.share),c=new Float32Array(l*3),u=new Float32Array(l*3),f=new Float32Array(l),h=new Float32Array(l);for(let m=0;m<l;m++){let p=o.range(-1,1),g=o.range(0,Math.PI*2),x=Math.sqrt(1-p*p),S=a.radius*o.range(.9,1.1);c[m*3]=x*Math.cos(g)*S,c[m*3+1]=p*S,c[m*3+2]=x*Math.sin(g)*S;let M=o.pick(s),w=o.range(.55,1);u[m*3]=M.r*w,u[m*3+1]=M.g*w,u[m*3+2]=M.b*w,f[m]=a.size[0]+(a.size[1]-a.size[0])*Math.pow(o.next(),3),h[m]=o.next()}let d=new Ye;d.setAttribute("position",new pi(c,3)),d.setAttribute("aColor",new pi(u,3)),d.setAttribute("aSize",new pi(f,1)),d.setAttribute("aPhase",new pi(h,1));let _=new se({vertexShader:XP,fragmentShader:qP,uniforms:{uTime:{value:0},uScale:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,blending:zi}),v=new yo(d,_);v.frustumCulled=!1,v.renderOrder=-9,v.rotation.set(o.range(0,6.28),o.range(0,6.28),0),this.group.add(v),this.layers.push({points:v,spin:a.spin,parallax:a.parallax,share:a.share,max:l})}}setCount(t){for(let e of this.layers)e.points.geometry.setDrawRange(0,Math.min(e.max,Math.floor(t*e.share)))}setScale(t,e){let n=t*Math.max(.75,Math.min(1.5,e/800));for(let s of this.layers)s.points.material.uniforms.uScale.value=n}update(t,e,n){for(let s of this.layers)s.points.rotation.y+=s.spin*t,s.points.position.set(-n.x*s.parallax,-n.y*s.parallax,0),s.points.material.uniforms.uTime.value=e}dispose(){for(let t of this.layers)t.points.geometry.dispose(),t.points.material.dispose();this.layers=[]}};nt();var eA={run:{turns:12,choices:3,rerolls:2,specialChance:.2,seedPrefix:"pw",pool:{dust:30,hydrogen:26,helium:14,carbon:12,oxygen:12,silicon:6,iron:5},specialPool:{comet:3,storm:3,flare:3,frost:3,blackhole:2},counts:{dust:3,hydrogen:2},settleMinTime:.6,settleMaxTime:3.2,settleSpeed:.35},disc:{radius:6.2,dropRadius:6.9,massLimit:220,maxBodies:48,warnAt:.8},physics:{gravity:13,damping:1.6,restitution:.15,substeps:4,dropSpeed:5,spread:.28,contactSlop:.04,mergeTime:.15,catalystRadius:2.8,catalystDelay:.55},camera:{fov:42,workshop:[0,16.5,10],title:[0,6.2,18.5],galaxy:[0,14,22],parallax:.35,fitAspect:.98},feel:{shake:1,hitstop:.06,squash:1,flash:1,haptics:!0,comboPitch:1.0594631},quality:{low:{pixelRatio:1,post:!1,bloom:0,stars:1200,nebulaOctaves:3},medium:{pixelRatio:1.5,post:!0,bloom:.75,stars:2600,nebulaOctaves:4},high:{pixelRatio:2,post:!0,bloom:1,stars:4200,nebulaOctaves:5}},grade:{workshop:{tint:[1.06,.97,1.08],nebula:["#1d0b3a","#8a2f7a","#ff8a4a"],vignette:.55},galaxy:{tint:[.94,1,1.12],nebula:["#06102e","#123a7a","#4ac8ff"],vignette:.65}}};var Ot=eA,iA=["low","medium","high"];function nA(){let i=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=typeof navigator<"u"?navigator.hardwareConcurrency??4:4;return i||t<=4?"medium":"high"}nt();var By=class{handlers=new Map;on(t,e){let n=this.handlers.get(t);return n||(n=new Set,this.handlers.set(t,n)),n.add(e),()=>this.off(t,e)}once(t,e){let n=this.on(t,s=>{n(),e(s)});return n}off(t,e){this.handlers.get(t)?.delete(e)}emit(t,e){let n=this.handlers.get(t);if(n)for(let s of[...n])s(e)}clear(){this.handlers.clear()}},li=new By;nt();function Fy(i){let t=1779033703^i.length;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),3432918353),t=t<<13|t>>>19;return t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),(t^t>>>16)>>>0}var Mn=class i{a;b;c;d;seed;constructor(t){this.seed=String(t);let e=Fy(this.seed);this.a=e,this.b=Fy(`${this.seed}/b`),this.c=Fy(`${this.seed}/c`),this.d=1;for(let n=0;n<12;n++)this.next()}next(){this.a|=0,this.b|=0,this.c|=0,this.d|=0;let t=(this.a+this.b|0)+this.d|0;return this.d=this.d+1|0,this.a=this.b^this.b>>>9,this.b=this.c+(this.c<<3)|0,this.c=this.c<<21|this.c>>>11,this.c=this.c+t|0,(t>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this.next()<t}gaussian(){let t=0;for(let e=0;e<6;e++)t+=this.next();return(t-3)/Math.sqrt(.5)}pick(t){if(t.length===0)throw new Error("Rng.pick: \uBE48 \uBC30\uC5F4");return t[Math.floor(this.next()*t.length)]}weighted(t,e){if(t.length===0)throw new Error("Rng.weighted: \uBE48 \uBC30\uC5F4");let n=t.map(a=>Math.max(0,e(a))),s=n.reduce((a,o)=>a+o,0);if(s<=0)return this.pick(t);let r=this.next()*s;for(let a=0;a<t.length;a++)if(r-=n[a],r<0)return t[a];return t[t.length-1]}shuffle(t){let e=t.slice();for(let n=e.length-1;n>0;n--){let s=Math.floor(this.next()*(n+1)),r=e[n];e[n]=e[s],e[s]=r}return e}fork(t){return new i(`${this.seed}:${t}`)}};function sA(i="pw"){let t=new Uint32Array(2);try{crypto.getRandomValues(t)}catch{t[0]=Date.now()>>>0,t[1]=performance.now()*1e3>>>0}return`${i}-${t[0].toString(36)}${t[1].toString(36)}`}var QP={uniforms:{tDiffuse:{value:null},uTint:{value:new P(1,1,1)},uVignette:{value:.5},uAberration:{value:0},uFlash:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec3 uTint;
    uniform float uVignette;
    uniform float uAberration;
    uniform float uFlash;
    varying vec2 vUv;
    void main() {
      vec2 c = vUv - 0.5;
      float d = dot(c, c);
      vec2 off = c * d * uAberration;
      vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      col *= uTint;
      col *= 1.0 - uVignette * smoothstep(0.06, 0.5, d);
      col = mix(col, vec3(1.0), uFlash);
      gl_FragColor = vec4(col, 1.0);
    }
  `},Lh={title:{camera:Ot.camera.title,grade:"workshop"},workshop:{camera:Ot.camera.workshop,grade:"workshop"},galaxy:{camera:Ot.camera.galaxy,grade:"galaxy"}},Im=class{constructor(t,e,n){this.canvas=t;this.quality=e,this.renderer=new om({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.toneMapping=Mo,this.renderer.toneMappingExposure=1.05,this.renderer.setClearColor(328460,1),this.camera=new nn(Ot.camera.fov,1,.1,1e3),this.camPos.fromArray(Lh[n].camera);let s=new Mn("planet-workshop/sky"),r=Ot.quality[e];this.stars=new Um(s,Ot.quality.high.stars),this.nebula=new Om(Ot.grade[Lh[n].grade].nebula,r.nebulaOctaves),this.scene.add(this.nebula.mesh,this.stars.group),fe.ticker.remove(fe.updateRoot),this.buildComposer(),this.applyQuality(e),this.applyGrade(Lh[n].grade,0);let a=()=>this.resize(),o=c=>{this.pointer.set(c.clientX/window.innerWidth*2-1,-(c.clientY/window.innerHeight*2-1))},l=c=>{c.preventDefault(),li.emit("engine:contextlost",{})};window.addEventListener("resize",a),window.addEventListener("pointermove",o,{passive:!0}),t.addEventListener("webglcontextlost",l),this.offs.push(()=>window.removeEventListener("resize",a),()=>window.removeEventListener("pointermove",o),()=>t.removeEventListener("webglcontextlost",l),li.on("scene:change",({from:c,to:u})=>this.switchScene(c,u)),li.on("quality:change",({quality:c})=>this.applyQuality(c))),this.resize()}canvas;renderer;scene=new mo;camera;stars;nebula;pointer=new Lt;composer=null;bloom=null;grade=null;modules=new Map;active=null;quality;pixelRatio=1;camPos=new P;camLook=new P(0,0,0);smoothPointer=new Lt;fit=1;lastMs=0;time=0;fps=60;frames=0;timeScale=1;offs=[];shakeAmt=0;hitstopTimer=0;shakeEnabled=!0;register(t){this.modules.set(t.id,t),t.root.visible=!1,this.scene.add(t.root)}start(t){this.enter(t,null),this.renderer.setAnimationLoop(e=>this.frame(e))}flash(t,e=.5){if(!this.grade)return;let n=this.grade.uniforms.uFlash;fe.killTweensOf(n),n.value=t,fe.to(n,{value:0,duration:e,ease:"power2.out"})}shake(t){this.shakeEnabled&&(this.shakeAmt=Math.min(.6,this.shakeAmt+t*Ot.feel.shake))}hitstop(t){t<=0||(this.timeScale=.03,clearTimeout(this.hitstopTimer),this.hitstopTimer=window.setTimeout(()=>this.timeScale=1,t*1e3))}cameraTo(t,e=[0,0,0],n=1.4,s="power3.inOut"){let[r,a,o]=t;fe.to(this.camPos,{x:r,y:a,z:o,duration:n,ease:s,overwrite:!0});let[l,c,u]=e;fe.to(this.camLook,{x:l,y:c,z:u,duration:n,ease:s,overwrite:!0})}project(t){return Pm.copy(t).project(this.camera),{x:(Pm.x*.5+.5)*window.innerWidth,y:(-Pm.y*.5+.5)*window.innerHeight}}ray(t,e,n){return n.setFromCamera(new Lt(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),this.camera),n}get dom(){return this.canvas}stats(){let t=this.renderer.info;return{fps:Math.round(this.fps),frames:this.frames,time:+this.time.toFixed(2),calls:t.render.calls,triangles:t.render.triangles,points:t.render.points,programs:t.programs?.length??0,quality:this.quality,pixelRatio:this.pixelRatio,scene:this.active?.id??null,post:this.usePost()}}dispose(){this.renderer.setAnimationLoop(null);for(let t of this.offs)t();for(let t of this.modules.values())t.dispose();this.stars.dispose(),this.nebula.dispose(),this.composer?.dispose(),this.renderer.dispose()}usePost(){return Ot.quality[this.quality].post&&this.composer!==null}buildComposer(){let t=new hm(this.renderer);t.addPass(new dm(this.scene,this.camera)),this.bloom=new cc(new Lt(1,1),.9,.75,.8),t.addPass(this.bloom),this.grade=new lc(QP),t.addPass(this.grade),t.addPass(new fm),this.composer=t}applyQuality(t){this.quality=t;let e=Ot.quality[t];this.pixelRatio=Math.min(window.devicePixelRatio||1,e.pixelRatio),this.renderer.setPixelRatio(this.pixelRatio),this.composer?.setPixelRatio(this.pixelRatio),this.bloom&&(this.bloom.strength=.9*e.bloom),this.grade&&(this.grade.uniforms.uAberration.value=t==="high"?.035:0),this.stars.setCount(e.stars),this.nebula.setOctaves(e.nebulaOctaves),this.resize()}applyGrade(t,e){let n=Ot.grade[t];if(this.grade){let s=this.grade.uniforms.uTint.value;fe.to(s,{x:n.tint[0],y:n.tint[1],z:n.tint[2],duration:e,ease:"sine.inOut"}),fe.to(this.grade.uniforms.uVignette,{value:n.vignette,duration:e,ease:"sine.inOut"})}this.nebula.setPalette(n.nebula,e)}enter(t,e){let n=this.modules.get(t)??this.modules.get("workshop")??null;n!==this.active&&(this.active&&(this.active.exit(t),this.active.root.visible=!1),this.active=n,n&&(n.root.visible=!0,n.enter(e)))}switchScene(t,e){let n=Lh[e];this.cameraTo(n.camera,[0,0,0],1.8),this.enter(e,t),this.active&&this.active.id===e&&this.active.refocus?.(),Lh[t].grade!==n.grade&&this.applyGrade(n.grade,1.6)}resize(){let t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight),n=t/e;this.renderer.setSize(t,e,!1),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.composer?.setSize(t,e),this.camera.aspect=n,this.camera.updateProjectionMatrix(),this.fit=Math.max(1,Ot.camera.fitAspect/n),this.stars.setScale(this.pixelRatio,e);for(let s of this.modules.values())s.onQuality?.(this.pixelRatio);li.emit("engine:resize",{width:t,height:e,aspect:n})}frame(t){let e=Math.min((t-this.lastMs)/1e3||.016,.1);this.lastMs=t,this.time+=e*this.timeScale,this.frames++,fe.updateRoot(this.time),this.fps+=(1/Math.max(e,.001)-this.fps)*.05;let n=1-Math.exp(-e*5);this.smoothPointer.lerp(this.pointer,n);let s=Ot.camera.parallax;if(this.camera.position.copy(this.camPos).multiplyScalar(this.fit).add(Pm.set(this.smoothPointer.x*s,this.smoothPointer.y*s*.6,0)),this.shakeAmt>.001){let r=this.shakeAmt;this.camera.position.x+=(Math.sin(this.time*91)+Math.sin(this.time*47.3))*.5*r,this.camera.position.y+=(Math.sin(this.time*73.1)+Math.sin(this.time*29.7))*.5*r,this.shakeAmt*=Math.exp(-e*9)}this.camera.lookAt(this.camLook),this.nebula.update(this.renderer,this.time,this.camera.position),this.stars.update(e,this.time,this.smoothPointer),this.active?.update(e*this.timeScale,this.time),this.usePost()&&this.composer?this.composer.render(e):this.renderer.render(this.scene,this.camera)}},Pm=new P;nt();nt();nt();var rA=i=>{let t,e=new Set,n=(c,u)=>{let f=typeof c=="function"?c(t):c;if(!Object.is(f,t)){let h=t;t=u??(typeof f!="object"||f===null)?f:Object.assign({},t,f),e.forEach(d=>d(t,h))}},s=()=>t,o={setState:n,getState:s,getInitialState:()=>l,subscribe:c=>(e.add(c),()=>e.delete(c))},l=t=i(n,s,o);return o},aA=(i=>i?rA(i):rA);nt();var zm=Va(Cc(),1);var KP=i=>i;function JP(i,t=KP){let e=zm.default.useSyncExternalStore(i.subscribe,zm.default.useCallback(()=>t(i.getState()),[i,t]),()=>t(i.getInitialState()));return zm.default.useDebugValue(e),e}var oA=i=>{let t=aA(i),e=n=>JP(t,n);return Object.assign(e,t),e},lA=(i=>i?oA(i):oA);nt();var cA="planet-workshop/save",Hy=1;function jP(){return{version:Hy,seed:sA(),settings:{quality:nA(),volume:{master:.8,bgm:.6,sfx:.9},shake:!0,flash:!0,speed:1},collection:[],codex:{elements:[],recipes:[],planets:[]},stats:{runs:0,merges:0,bestCombo:0},pity:0,story:{chapter:0,seen:[]},daily:{}}}var Bm=null,Gy=!0;function Fm(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function uA(i,t){if(!Fm(i)||!Fm(t))return t===void 0?i:t;let e={...i};for(let n of Object.keys(i)){let s=i[n],r=t[n];r!==void 0&&(e[n]=Fm(s)?uA(s,r):typeof r==typeof s?r:s)}return e}function an(){if(Bm)return Bm;let i=jP();try{let t=localStorage.getItem(cA);if(t){let e=JSON.parse(t);Fm(e)&&typeof e.version=="number"&&e.version<=Hy&&(i=uA(i,e),i.version=Hy)}}catch{Gy=!1}return Bm=i,i}function zo(i){let t={...an(),...i};if(Bm=t,Gy)try{localStorage.setItem(cA,JSON.stringify(t))}catch{Gy=!1}return t}nt();var ci=null,Or=null,hA=.7,fA=new Mn("sfx-jitter");function xc(){try{if(!ci){let i=window.AudioContext??window.webkitAudioContext;ci=new i,Or=ci.createGain(),Or.gain.value=hA;let t=ci.createDynamicsCompressor();Or.connect(t).connect(ci.destination)}ci.state==="suspended"&&ci.resume()}catch{ci=null}}function Vy(i){hA=i,Or&&(Or.gain.value=i)}var za=()=>1+(fA.next()-.5)*.1;function Ci(i,t={}){if(!ci||!Or)return;let{type:e="sine",dur:n=.18,gain:s=.25,attack:r=.005,slide:a=1,delay:o=0}=t,l=ci.currentTime+o,c=ci.createOscillator(),u=ci.createGain();c.type=e,c.frequency.setValueAtTime(i,l),a!==1&&c.frequency.exponentialRampToValueAtTime(Math.max(20,i*a),l+n),u.gain.setValueAtTime(1e-4,l),u.gain.exponentialRampToValueAtTime(s,l+r),u.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(u).connect(Or),c.start(l),c.stop(l+n+.02)}function Hm(i,t,e=1200,n=0){if(!ci||!Or)return;let s=ci.currentTime+n,r=Math.floor(ci.sampleRate*i),a=ci.createBuffer(1,r,ci.sampleRate),o=a.getChannelData(0);for(let f=0;f<r;f++)o[f]=(fA.next()*2-1)*(1-f/r);let l=ci.createBufferSource();l.buffer=a;let c=ci.createBiquadFilter();c.type="bandpass",c.frequency.value=e,c.Q.value=.8;let u=ci.createGain();u.gain.value=t,l.connect(c).connect(u).connect(Or),l.start(s)}var ky=i=>880*Math.pow(2,-i*.42),Ji={ui(){Ci(1320*za(),{type:"triangle",dur:.06,gain:.12})},select(){Ci(990*za(),{type:"triangle",dur:.08,gain:.14,slide:1.2})},drop(i){Ci(ky(i)*1.5*za(),{type:"sine",dur:.14,gain:.16,slide:.7})},land(i,t){let e=Math.min(.28,.06+t*.03);Ci(ky(i)*.5*za(),{type:"sine",dur:.12+i*.02,gain:e,slide:.6}),Hm(.06,e*.5,600)},merge(i,t){let e=ky(i)*Math.pow(Ot.feel.comboPitch,Math.max(0,t-1))*za();Ci(e,{type:"triangle",dur:.22,gain:.26,slide:1.5}),Ci(e*2,{type:"sine",dur:.3,gain:.12,delay:.04}),Ci(e*3,{type:"sine",dur:.36,gain:.06,delay:.08})},react(i){let t=523*za();Ci(t,{type:"square",dur:.12,gain:.08}),Ci(t*1.25,{type:"triangle",dur:.2,gain:.16,delay:.07}),Ci(t*1.5,{type:"triangle",dur:.32,gain:.16,delay:.14}),i&&[2,2.5,3].forEach((e,n)=>Ci(t*e,{type:"sine",dur:.4,gain:.1,delay:.25+n*.08}))},special(i){i==="lightning"?Hm(.35,.35,2400):i==="cold"?Ci(1800*za(),{type:"sine",dur:.5,gain:.12,slide:.5}):i==="clear"?Ci(110,{type:"sawtooth",dur:.6,gain:.14,slide:.3}):Ci(660*za(),{type:"triangle",dur:.45,gain:.15,slide:1.8})},warn(){Ci(220,{type:"square",dur:.12,gain:.08}),Ci(220,{type:"square",dur:.12,gain:.08,delay:.18})},condense(){Ci(80,{type:"sawtooth",dur:1.4,gain:.12,slide:4,attack:.6}),Hm(1.4,.12,300)},birth(i){Hm(.8,.3,200),[261.6,329.6,392,523.3,659.3].slice(0,3+Math.min(2,i)).forEach((e,n)=>Ci(e,{type:"triangle",dur:1.6,gain:.12,delay:.1+n*.09,attack:.05}))}};function Sc(i){if(Ot.feel.haptics)try{navigator.vibrate?.(i)}catch{}}var Gm=an();Vy(Gm.settings.volume.master*Gm.settings.volume.sfx);var $P=1,zt=lA((i,t)=>({scene:"title",settings:Gm.settings,collectionCount:Gm.collection.length,ready:!1,run:null,result:null,cinematic:!1,pops:[],galaxySel:null,setReady:()=>i({ready:!0}),goto:e=>{xc(),Ji.ui();let n=t().scene;n!==e&&(i({scene:e,galaxySel:null}),li.emit("scene:change",{from:n,to:e}))},setQuality:e=>{let n={...t().settings,quality:e};i({settings:n}),zo({settings:n}),li.emit("quality:change",{quality:e})},toggle:e=>{let n={...t().settings,[e]:!t().settings[e]};i({settings:n}),zo({settings:n})},setVolume:e=>{let n={...t().settings,volume:{...t().settings.volume,master:e}};i({settings:n}),zo({settings:n}),Vy(e*n.volume.sfx)},select:e=>{xc(),Ji.select(),li.emit("run:select",{index:e})},reroll:()=>{xc(),li.emit("run:reroll",{})},newRun:()=>{xc(),Ji.ui(),i({result:null}),li.emit("run:new",{})},register:e=>{xc(),li.emit("run:register",{name:e})},pop:(e,n=1100)=>{let s=$P++;i({pops:[...t().pops.slice(-8),{...e,id:s}]}),setTimeout(()=>i({pops:t().pops.filter(r=>r.id!==s)}),n)}}));nt();nt();var Wy={version:1,mergeLine:["dust","hydrogen","helium","carbon","oxygen","silicon","iron","neutron"],elements:[{id:"dust",name:"\uC6B0\uC8FC\uBA3C\uC9C0",kind:"base",tier:0,radius:.42,mass:1,color:"#cdb8ff",glow:"#8f7bff",face:"sleepy",hint:"\uC5B4\uB514\uC5D0\uB098 \uC788\uB294 \uBCC4\uC758 \uBD80\uC2A4\uB7EC\uAE30."},{id:"hydrogen",name:"\uC218\uC18C",kind:"base",tier:1,radius:.52,mass:2,color:"#8fdcff",glow:"#3aa8ff",face:"happy",hint:"\uBA3C\uC9C0 \uB458\uC774 \uB9CC\uB098\uBA74 \uAC00\uC7A5 \uAC00\uBCBC\uC6B4 \uAC83\uC774 \uB41C\uB2E4."},{id:"helium",name:"\uD5EC\uB968",kind:"base",tier:2,radius:.63,mass:4,color:"#ffe58a",glow:"#ffb53a",face:"giggle",hint:"\uC218\uC18C\uB07C\uB9AC \uAF2D \uAEF4\uC548\uC73C\uBA74 \uC6C3\uC74C\uC774 \uB09C\uB2E4."},{id:"carbon",name:"\uD0C4\uC18C",kind:"base",tier:3,radius:.75,mass:8,color:"#a9b4d6",glow:"#5d6bb0",face:"calm",hint:"\uD5EC\uB968\uC774 \uBB49\uCE58\uBA74 \uB9CC\uBB3C\uC758 \uBF08\uB300\uAC00 \uB41C\uB2E4."},{id:"oxygen",name:"\uC0B0\uC18C",kind:"base",tier:4,radius:.88,mass:16,color:"#7ef5cf",glow:"#18c79a",face:"happy",hint:"\uD0C4\uC18C \uB2E4\uC74C \uCC28\uB840. \uC228 \uC26C\uB294 \uC0C9."},{id:"silicon",name:"\uADDC\uC18C",kind:"base",tier:5,radius:1.02,mass:32,color:"#f6c08a",glow:"#d9853a",face:"calm",hint:"\uC0B0\uC18C \uB458\uC774 \uAD73\uC73C\uBA74 \uBAA8\uB798\uC758 \uC528\uC557\uC774 \uB41C\uB2E4."},{id:"iron",name:"\uCCA0",kind:"base",tier:6,radius:1.18,mass:64,color:"#ff9a7a",glow:"#e2452f",face:"stern",hint:"\uBCC4\uC774 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCBC\uB824 \uB0B4\uB294 \uAE08\uC18D."},{id:"neutron",name:"\uC911\uC131\uC790 \uD575",kind:"base",tier:7,radius:1.36,mass:128,color:"#f4f0ff",glow:"#b58cff",face:"awe",hint:"\uCCA0\uB9C8\uC800 \uBB34\uB108\uC9C4 \uC790\uB9AC\uC5D0 \uB0A8\uB294 \uAC83."},{id:"water",name:"\uBB3C",kind:"compound",tier:3,radius:.78,mass:10,color:"#6fb7ff",glow:"#2a6dff",face:"happy",hint:"\uAC00\uC7A5 \uAC00\uBCBC\uC6B4 \uAC83\uACFC \uC228 \uC26C\uB294 \uC0C9\uC774 \uB9CC\uB098\uBA74."},{id:"ice",name:"\uC5BC\uC74C",kind:"compound",tier:4,radius:.82,mass:10,color:"#d8f4ff",glow:"#8fd0ff",face:"sleepy",hint:"\uBB3C\uC5D0 \uC6B0\uC8FC\uC758 \uCD94\uC704\uAC00 \uB2FF\uC73C\uBA74."},{id:"amino",name:"\uC544\uBBF8\uB178\uC0B0",kind:"compound",tier:5,radius:.9,mass:20,color:"#c9f77a",glow:"#7fd13a",face:"giggle",hint:"\uBF08\uB300, \uBB3C, \uADF8\uB9AC\uACE0 \uBC88\uCA4D\uC774\uB294 \uD55C \uBC29."},{id:"lifeseed",name:"\uC0DD\uBA85\uC758 \uC528\uC557",kind:"compound",rare:!0,tier:7,radius:1,mass:30,color:"#fff3a8",glow:"#5cff9d",face:"awe",hint:"\uC544\uBBF8\uB178\uC0B0\uC774 \uBB3C\uACFC \uBCC4\uBE5B\uC744 \uD568\uAED8 \uB9CC\uB09C \uB0A0."},{id:"mantle",name:"\uC554\uC11D \uB9E8\uD2C0",kind:"compound",tier:6,radius:1.22,mass:96,color:"#c79a78",glow:"#8a5a3a",face:"stern",hint:"\uBAA8\uB798\uC758 \uC528\uC557\uACFC \uAE08\uC18D\uC774 \uC11C\uB85C\uB97C \uBD99\uB4E0\uB2E4."},{id:"gas",name:"\uAC00\uC2A4 \uC678\uD53C",kind:"compound",tier:4,radius:1.1,mass:12,color:"#ffd0a8",glow:"#ff8f6a",face:"giggle",hint:"\uAC00\uBCBC\uC6B4 \uAC83\uB4E4\uC774 \uC544\uC8FC \uB9CE\uC774 \uBAA8\uC774\uBA74 \uBD80\uD47C\uB2E4."},{id:"lava",name:"\uC6A9\uC554 \uCF54\uC5B4",kind:"compound",tier:6,radius:1.15,mass:70,color:"#ffb04a",glow:"#ff3d1a",face:"stern",hint:"\uAE08\uC18D\uC5D0 \uBCC4\uC758 \uC5F4\uAE30\uB97C \uCB10\uBA74 \uB179\uC544\uB0B4\uB9B0\uB2E4."},{id:"comet",name:"\uD61C\uC131",kind:"special",effect:"comet",radius:.6,mass:3,color:"#bfe9ff",glow:"#7ad0ff",face:"happy",hint:"\uB2FF\uB294 \uACF3\uC5D0 \uBB3C\uC744 \uBFCC\uB9AC\uACE0 \uC0AC\uB77C\uC9C4\uB2E4."},{id:"storm",name:"\uBC88\uAC1C \uAD6C\uB984",kind:"special",effect:"lightning",radius:.66,mass:2,color:"#e9d8ff",glow:"#b07bff",face:"stern",hint:"\uC8FC\uBCC0 \uC6D0\uC18C\uC5D0 \uBC88\uAC1C\uB97C \uB0B4\uB9B0\uB2E4."},{id:"flare",name:"\uD56D\uC131 \uD50C\uB808\uC5B4",kind:"special",effect:"starlight",radius:.66,mass:2,color:"#fff0b0",glow:"#ff9a2a",face:"awe",hint:"\uBCC4\uBE5B\uACFC \uC5F4\uC744 \uD55C\uAEBC\uBC88\uC5D0 \uC3DF\uB294\uB2E4."},{id:"frost",name:"\uC6B0\uC8FC \uB0C9\uAE30",kind:"special",effect:"cold",radius:.6,mass:2,color:"#e6fbff",glow:"#9be4ff",face:"sleepy",hint:"\uB2FF\uC740 \uAC83\uC744 \uCC28\uAC11\uAC8C \uC2DD\uD78C\uB2E4."},{id:"blackhole",name:"\uBE14\uB799\uD640 \uC870\uAC01",kind:"special",effect:"clear",radius:.55,mass:6,color:"#3a2a5a",glow:"#a06bff",face:"calm",hint:"\uC8FC\uBCC0\uC758 \uC791\uC740 \uAC83\uB4E4\uC744 \uC0BC\uCF1C \uC6D0\uBC18\uC744 \uC815\uB9AC\uD55C\uB2E4."}]};var dA={version:1,note:"weight = base + \u03A3(\uAD6C\uC131\uBE44 \xD7 per) (+ \uC870\uAC74 \uCDA9\uC871 \uC2DC bonus). requires\uB97C \uBABB \uCC44\uC6B0\uBA74 \uD6C4\uBCF4\uC5D0\uC11C \uBE60\uC9C4\uB2E4. \uC218\uCE58\uB294 Phase 4 \uBC38\uB7F0\uC2F1\uC5D0\uC11C \uC870\uC815.",planets:[{id:"rocky",name:"\uC554\uC11D \uD589\uC131",grade:"N",shader:"rock",base:10,per:{silicon:30,iron:20,mantle:40,carbon:10},look:{kind:"terrain",low:"#6b5a4e",high:"#a8907a",peak:"#d9c9b6",sea:-1,deep:"#000000",shallow:"#000000",cloud:.15,atmo:"#c9b8ff",emissive:0,ice:.05},desc:"\uB2E8\uB2E8\uD55C \uBC14\uC704\uB85C \uC774\uB8E8\uC5B4\uC9C4 \uAC00\uC7A5 \uD754\uD55C \uD589\uC131."},{id:"dustdwarf",name:"\uBA3C\uC9C0 \uC65C\uC131",grade:"N",shader:"dust",base:12,per:{dust:40,hydrogen:10},look:{kind:"terrain",low:"#5c4f6e",high:"#9a88b0",peak:"#d4c8e6",sea:-1,deep:"#000000",shallow:"#000000",cloud:0,atmo:"#b9a2ff",emissive:0,ice:0},desc:"\uBA3C\uC9C0\uAC00 \uACA8\uC6B0 \uBB49\uCE5C \uC791\uACE0 \uD3EC\uADFC\uD55C \uC65C\uC131."},{id:"ice",name:"\uC5BC\uC74C \uD589\uC131",grade:"R",shader:"ice",base:0,per:{ice:120,water:20},requires:{share:{ice:.3}},look:{kind:"terrain",low:"#7fa9d6",high:"#cfe8ff",peak:"#ffffff",sea:.35,deep:"#2a5d9a",shallow:"#7cc8ff",cloud:.35,atmo:"#9be4ff",emissive:0,ice:.6,aurora:1},desc:"\uC5BC\uC74C \uC9C0\uAC01 \uC704\uB85C \uC624\uB85C\uB77C\uAC00 \uD750\uB978\uB2E4."},{id:"desert",name:"\uC0AC\uB9C9 \uD589\uC131",grade:"R",shader:"desert",base:0,per:{silicon:90,mantle:30},requires:{share:{silicon:.3}},look:{kind:"terrain",low:"#b8743e",high:"#e4ad6a",peak:"#f6dcb0",sea:-1,deep:"#000000",shallow:"#000000",cloud:.08,atmo:"#ffc48a",emissive:0,ice:.04},desc:"\uBAA8\uB798 \uBC14\uB78C\uC774 \uB05D\uC5C6\uC774 \uBD80\uB294 \uBD89\uC740 \uD589\uC131."},{id:"lava",name:"\uC6A9\uC554 \uD589\uC131",grade:"R",shader:"lava",base:0,per:{lava:120,iron:30},requires:{share:{lava:.3}},look:{kind:"terrain",low:"#2a1410",high:"#4a2a20",peak:"#7a4a3a",sea:.42,deep:"#ff3d0a",shallow:"#ffb02a",cloud:.1,atmo:"#ff7a4a",emissive:1,ice:0},desc:"\uAC08\uB77C\uC9C4 \uC9C0\uAC01 \uD2C8\uC73C\uB85C \uC6A9\uC554\uC774 \uBE5B\uB09C\uB2E4."},{id:"gasgiant",name:"\uAC00\uC2A4 \uAC70\uC778",grade:"SR",shader:"gas",base:0,per:{gas:140,helium:30,hydrogen:20},requires:{share:{gas:.35},merges:8},look:{kind:"gas",low:"#c98a5a",high:"#f2d2a6",peak:"#fff1dc",sea:-1,deep:"#8a4a2a",shallow:"#e8b080",cloud:0,atmo:"#ffd0a8",emissive:0,ice:0},desc:"\uAC70\uB300\uD55C \uAC00\uC2A4 \uB760\uAC00 \uCC9C\uCC9C\uD788 \uC18C\uC6A9\uB3CC\uC774\uCE5C\uB2E4."},{id:"ocean",name:"\uBC14\uB2E4 \uD589\uC131",grade:"SR",shader:"ocean",base:0,per:{water:130,ice:20},requires:{share:{water:.4},merges:6},look:{kind:"terrain",low:"#3f8a5a",high:"#8ac27a",peak:"#f2f2e8",sea:.62,deep:"#0d2f6e",shallow:"#2a9ad6",cloud:.45,atmo:"#7ac8ff",emissive:0,ice:.15},desc:"\uD589\uC131 \uC804\uCCB4\uAC00 \uAE4A\uC740 \uBC14\uB2E4\uB85C \uB36E\uC5EC \uC788\uB2E4."},{id:"ringed",name:"\uACE0\uB9AC \uD589\uC131",grade:"SR",shader:"gas",forceRing:!0,base:0,per:{gas:80,ice:80,dust:30},requires:{share:{gas:.2,ice:.15},merges:8},look:{kind:"gas",low:"#7ab0c8",high:"#d6eef2",peak:"#ffffff",sea:-1,deep:"#3a6a8a",shallow:"#a8d8e8",cloud:0,atmo:"#bfe9ff",emissive:0,ice:0},desc:"\uC5BC\uC74C\uACFC \uBA3C\uC9C0\uB85C \uB41C \uACE0\uB9AC\uB97C \uB450\uB978 \uD589\uC131."},{id:"life",name:"\uC0DD\uBA85 \uD589\uC131",grade:"SSR",shader:"terra",base:0,per:{lifeseed:400,water:60,mantle:30},requires:{has:["lifeseed"],share:{water:.15}},look:{kind:"terrain",low:"#2f8a4a",high:"#86c25a",peak:"#efe8d0",sea:.5,deep:"#0a3a7a",shallow:"#28b0c8",cloud:.55,atmo:"#8fd8ff",emissive:0,ice:.12},desc:"\uC0DD\uBA85\uC758 \uC528\uC557\uC774 \uC2F9\uD2BC \uD478\uB978 \uD589\uC131."},{id:"crystal",name:"\uC218\uC815 \uD589\uC131",grade:"SSR",shader:"crystal",base:0,per:{silicon:60,ice:60,neutron:200},requires:{has:["neutron"],share:{silicon:.15,ice:.1}},look:{kind:"terrain",low:"#6a3aa8",high:"#c08aff",peak:"#f2e0ff",sea:.3,deep:"#3a1a8a",shallow:"#9a6aff",cloud:.1,atmo:"#e0b8ff",emissive:.4,ice:0},desc:"\uC218\uC815 \uACB0\uC815\uC774 \uBE5B\uC744 \uAD74\uC808\uC2DC\uD0A4\uB294 \uD589\uC131."},{id:"twin",name:"\uC30D\uB465\uC774 \uD589\uC131",grade:"SSR",shader:"terra",twin:!0,base:0,per:{mantle:80,water:80},requires:{balance:{of:["mantle","water"],tolerance:.08},share:{mantle:.2,water:.2},maxCombo:4},look:{kind:"terrain",low:"#5a7a3a",high:"#b0a070",peak:"#f0ece0",sea:.5,deep:"#103a6a",shallow:"#3aa0c8",cloud:.4,atmo:"#a8d8ff",emissive:0,ice:.1},desc:"\uBC14\uB2E4\uC640 \uB300\uB959\uC774 \uAF2D \uBC18\uC529 \uB098\uB25C \uC30D\uB465\uC774."},{id:"diamond",name:"\uB2E4\uC774\uC544\uBAAC\uB4DC \uD589\uC131",grade:"UR",hidden:!0,shader:"diamond",base:0,per:{carbon:150,neutron:150},requires:{recipes:["diamondcore"],share:{carbon:.25}},look:{kind:"terrain",low:"#9ac8e8",high:"#e8f6ff",peak:"#ffffff",sea:.25,deep:"#4a8ac8",shallow:"#bfe8ff",cloud:0,atmo:"#e8f8ff",emissive:.5,ice:0},desc:"\uD0C4\uC18C\uAC00 \uC555\uCD95\uB418\uC5B4 \uD1B5\uC9F8\uB85C \uB2E4\uC774\uC544\uBAAC\uB4DC\uAC00 \uB410\uB2E4."},{id:"rogue",name:"\uB5A0\uB3CC\uC774 \uD589\uC131",grade:"UR",hidden:!0,shader:"rogue",base:0,per:{dust:60,ice:60},requires:{unstable:!0,maxCombo:6},look:{kind:"terrain",low:"#1e2436",high:"#3a4a66",peak:"#9ab0d0",sea:.3,deep:"#0a1020",shallow:"#1a3050",cloud:0,atmo:"#4a6aa0",emissive:0,ice:.5},desc:"\uD56D\uC131\uC744 \uB5A0\uB098 \uD640\uB85C \uB5A0\uB3C4\uB294 \uCC28\uAC00\uC6B4 \uD589\uC131."},{id:"civilization",name:"\uBB38\uBA85 \uD589\uC131",grade:"UR",hidden:!0,shader:"terra",cityLights:!0,base:0,per:{lifeseed:500,mantle:60,water:60},requires:{has:["lifeseed"],recipes:["lifeseed","mantle","water"],maxCombo:5},look:{kind:"terrain",low:"#3a7a4a",high:"#90b070",peak:"#f0ece0",sea:.5,deep:"#0a3070",shallow:"#2898c0",cloud:.35,atmo:"#8fd0ff",emissive:0,ice:.1},desc:"\uBC24\uC774 \uB418\uBA74 \uB3C4\uC2DC\uC758 \uBD88\uBE5B\uC774 \uBC18\uC9DD\uC778\uB2E4."}]};var pA={version:1,note:"\uAC8C\uC784 \uB0B4 '\uD655\uB960 \uC815\uBCF4' \uD654\uBA74\uC5D0 \uADF8\uB300\uB85C \uACF5\uAC1C\uB418\uB294 \uD45C. gradeMultiplier\uB294 \uC870\uAC74\uC744 \uCC44\uC6B4 \uD6C4\uBCF4\uC758 \uAC00\uC911\uCE58\uC5D0 \uACF1\uD574\uC9C4\uB2E4.",gradeMultiplier:{N:1,R:.9,SR:.6,SSR:.3,UR:.12},pity:{grade:"SSR",softStart:12,softStep:.15,hardAt:30,note:"SSR \uC774\uC0C1\uC774 softStart\uD310 \uB3D9\uC548 \uC548 \uB098\uC624\uBA74 \uD310\uB9C8\uB2E4 SSR \uC774\uC0C1 \uAC00\uC911\uCE58\uC5D0 softStep\uC529 \uB354\uD574 \uACF1\uD55C\uB2E4. hardAt\uD310\uC9F8\uC5D0\uB294 \uC870\uAC74\uC744 \uCC44\uC6B4 SSR \uD6C4\uBCF4\uAC00 \uC788\uC73C\uBA74 \uD655\uC815."},variation:{ringChance:.18,moons:[.45,.3,.17,.08],sizeRange:[.85,1.25],paletteShift:.12}};var Xy={version:1,catalysts:{lightning:{name:"\uBC88\uAC1C",source:"storm"},starlight:{name:"\uD56D\uC131\uBE5B",source:"flare"},heat:{name:"\uC5F4",source:"flare"},cold:{name:"\uC800\uC628",source:"frost"}},recipes:[{id:"water",inputs:["hydrogen","oxygen"],output:"water",fx:"splash",hint:"\uAC00\uBCBC\uC6B4 \uAC83 + \uC228 \uC26C\uB294 \uC0C9"},{id:"ice",inputs:["water"],catalyst:"cold",output:"ice",fx:"freeze",hint:"\uBB3C + \uC6B0\uC8FC\uC758 \uCD94\uC704"},{id:"amino",inputs:["carbon","water"],catalyst:"lightning",output:"amino",fx:"spark",hint:"\uBF08\uB300 + \uBB3C + \uBC88\uCA4D"},{id:"lifeseed",inputs:["amino","water"],catalyst:"starlight",output:"lifeseed",rare:!0,fx:"bloom",hint:"\uC544\uBBF8\uB178\uC0B0 + \uBB3C + \uBCC4\uBE5B"},{id:"mantle",inputs:["silicon","iron"],output:"mantle",fx:"crunch",hint:"\uBAA8\uB798\uC758 \uC528\uC557 + \uAE08\uC18D"},{id:"gas",inputs:["hydrogen","helium"],bulk:3,output:"gas",fx:"puff",hint:"\uAC00\uBCBC\uC6B4 \uAC83\uB4E4\uC774 \uC14B \uC774\uC0C1 \uB9DE\uB2FF\uC744 \uB54C"},{id:"lava",inputs:["iron"],catalyst:"heat",output:"lava",fx:"melt",hint:"\uAE08\uC18D + \uBCC4\uC758 \uC5F4\uAE30"}]};var bc=["N","R","SR","SSR","UR"],Yy=Wy.elements,km=Object.fromEntries(Yy.map(i=>[i.id,i])),qy=Wy.mergeLine,Ur=Xy.recipes,sI=Xy.catalysts,Pr=dA.planets,Mc=Object.fromEntries(Pr.map(i=>[i.id,i])),Xn=pA;function Te(i){let t=km[i];if(!t)throw new Error(`\uC54C \uC218 \uC5C6\uB294 \uC6D0\uC18C: ${i}`);return t}function mA(i){let t=qy.indexOf(i);return t<0||t>=qy.length-1?null:qy[t+1]??null}function gA(i){return Object.entries(sI).filter(([,t])=>t.source===i).map(([t])=>t)}nt();var Oh=i=>bc.indexOf(i);function rI(i,t){let e=i.requires;if(!e)return!0;for(let[n,s]of Object.entries(e.share??{}))if((t.share[n]??0)<s)return!1;for(let n of e.has??[])if(!t.has.has(n))return!1;for(let n of e.recipes??[])if(!t.recipes.has(n))return!1;if(e.merges!==void 0&&t.merges<e.merges||e.maxCombo!==void 0&&t.maxCombo<e.maxCombo||e.unstable!==void 0&&t.unstable!==e.unstable)return!1;if(e.balance){let[n,s]=e.balance.of;if(Math.abs((t.share[n]??0)-(t.share[s]??0))>e.balance.tolerance)return!1}return!0}function aI(i){let t=Xn.pity;return i>=t.softStart?1+(i-t.softStart+1)*t.softStep:1}function Zy(i,t=0){let e=Oh(Xn.pity.grade),n=aI(t),s=[];for(let a of Pr){if(!rI(a,i))continue;let o=a.base;for(let[l,c]of Object.entries(a.per))o+=(i.share[l]??0)*c;o*=Xn.gradeMultiplier[a.grade],Oh(a.grade)>=e&&(o*=n),o>0&&s.push({planet:a,weight:o})}if(t>=Xn.pity.hardAt-1){let a=s.filter(o=>Oh(o.planet.grade)>=e);a.length&&(s=a)}s.length||(s=[{planet:Pr.find(a=>a.id==="dustdwarf")??Pr[0],weight:1}]);let r=s.reduce((a,o)=>a+o.weight,0);return s.map(a=>({...a,weight:a.weight/r})).sort((a,o)=>o.weight-a.weight)}function Qy(i,t){let e=new Mn(`${t}:variant`),n=Xn.variation,s=0,r=e.next(),a=0;for(let o=0;o<n.moons.length;o++)if(a+=n.moons[o],r<a){s=o;break}return{hue:e.range(-n.paletteShift,n.paletteShift),ring:i.forceRing===!0||e.chance(n.ringChance),ringTilt:e.range(-.6,.6),moons:s,size:e.range(n.sizeRange[0],n.sizeRange[1]),cloud:e.range(.75,1.25),sea:e.range(-.06,.06),spin:e.range(.08,.22)*(e.chance(.15)?-1:1),offset:[e.range(-50,50),e.range(-50,50),e.range(-50,50)]}}function _A(i,t,e=0){let n=Zy(i,e),r=new Mn(`${t}:roll`).weighted(n,o=>o.weight),a=`${t}:planet`;return{planet:r.planet,grade:r.planet.grade,seed:a,variant:Qy(r.planet,a),odds:n,pityHit:e>=Xn.pity.softStart&&Oh(r.planet.grade)>=Oh(Xn.pity.grade)}}nt();var oI=`
varying vec3 vObj;
varying vec3 vWorldN;
varying vec3 vWorldPos;
void main() {
  vObj = position;
  vWorldN = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,lI=`
#define OCTAVES 5
${Lr}
uniform float uTime;
uniform float uKind;      // 0 \uC9C0\uD615, 1 \uAC00\uC2A4
uniform vec3 uLow, uHigh, uPeak, uDeep, uShallow, uAtmo;
uniform float uSea, uCloud, uEmissive, uIce, uCity, uAurora;
uniform vec3 uOffset;
uniform vec3 uLight;      // \uC6D4\uB4DC \uAE30\uC900 \uBE5B\uC774 \uC624\uB294 \uBC29\uD5A5
uniform float uReveal;
uniform float uSilhouette;
varying vec3 vObj;
varying vec3 vWorldN;
varying vec3 vWorldPos;

void main() {
  vec3 p = normalize(vObj);
  vec3 q = p * 1.7 + uOffset;
  float h = pwFbm(q) * 1.25 + 0.5;               // \uB300\uB7B5 0~1
  h += pwNoise(q * 6.0) * 0.06;

  vec3 col;
  float isSea = 0.0;
  if (uKind < 0.5) {
    col = mix(uLow, uHigh, smoothstep(0.35, 0.68, h));
    col = mix(col, uPeak, smoothstep(0.7, 0.86, h));
    if (uSea > 0.0) {
      isSea = 1.0 - smoothstep(uSea - 0.01, uSea + 0.01, h);
      vec3 sea = mix(uDeep, uShallow, smoothstep(uSea - 0.22, uSea, h));
      col = mix(col, sea, isSea);
    }
    // \uADF9\uC9C0 \uC5BC\uC74C
    float lat = abs(p.y) + pwNoise(q * 3.0) * 0.12;
    col = mix(col, vec3(0.94, 0.97, 1.0), smoothstep(1.0 - uIce, 1.05 - uIce * 0.9, lat) * step(0.001, uIce));
  } else {
    // \uAC00\uC2A4 \uB760: \uC704\uB3C4 + \uB09C\uB958 \uBE44\uD2C0\uB9BC
    float turb = pwFbm(vec3(p.x * 2.0, p.y * 7.0, p.z * 2.0) + uOffset + vec3(uTime * 0.03, 0.0, 0.0));
    float band = sin(p.y * 16.0 + turb * 5.0) * 0.5 + 0.5;
    float band2 = sin(p.y * 37.0 + turb * 9.0) * 0.5 + 0.5;
    col = mix(uDeep, uShallow, band);
    col = mix(col, uHigh, band2 * 0.35);
    col = mix(col, uPeak, smoothstep(0.75, 1.0, band * band2) * 0.5);
    // \uB300\uC801\uC810
    float spot = 1.0 - smoothstep(0.05, 0.16, length(vec2(atan(p.z, p.x) - 1.0, (p.y + 0.28) * 2.2)));
    col = mix(col, uLow, spot * 0.8);
  }

  // \uC870\uBA85
  vec3 n = normalize(vWorldN);
  vec3 L = normalize(uLight);
  float ndl = dot(n, L);
  float diff = smoothstep(-0.15, 0.6, ndl);
  vec3 lit = col * (0.06 + 0.98 * diff);
  // \uBC14\uB2E4 \uBC18\uC0AC
  vec3 V = normalize(cameraPosition - vWorldPos);
  vec3 H = normalize(L + V);
  lit += vec3(1.0, 0.95, 0.85) * pow(max(dot(n, H), 0.0), 60.0) * isSea * diff * 0.9;

  // \uC6A9\uC554\xB7\uC218\uC815 \uBC1C\uAD11 (\uBC24\uBA74\uC5D0\uC11C\uB3C4 \uBCF4\uC778\uB2E4)
  float lavaMask = uKind < 0.5 ? (uSea > 0.0 ? isSea : smoothstep(0.45, 0.3, h)) : 0.0;
  float flick = 0.8 + 0.2 * sin(uTime * 3.0 + h * 40.0);
  lit += uShallow * lavaMask * uEmissive * flick * 1.4;

  // \uB3C4\uC2DC \uBD88\uBE5B (\uBC24\uBA74, \uC721\uC9C0)
  float night = smoothstep(0.1, -0.25, ndl);
  float city = step(0.86, pwNoise(q * 28.0) * 0.5 + 0.5) * (1.0 - isSea) * night * uCity;
  lit += vec3(1.0, 0.78, 0.4) * city * 2.2;

  // \uAD6C\uB984
  float cl = pwFbm(p * 2.6 + uOffset * 0.7 + vec3(uTime * 0.02, 0.0, uTime * 0.01));
  float cloud = smoothstep(0.5 - uCloud * 0.55, 0.62, cl + 0.25) * step(0.001, uCloud);
  float cloudReveal = smoothstep(0.55, 0.8, uReveal);
  lit = mix(lit, vec3(1.0) * (0.08 + diff), cloud * 0.85 * cloudReveal);

  // \uC624\uB85C\uB77C (\uADF9\uC9C0 \uBC24\uBA74)
  float aur = smoothstep(0.7, 0.85, abs(p.y)) * smoothstep(0.92, 0.82, abs(p.y));
  aur *= 0.6 + 0.4 * sin(atan(p.z, p.x) * 9.0 + uTime * 1.5);
  lit += vec3(0.3, 1.0, 0.7) * aur * uAurora * (0.4 + night) * 0.9;

  // \uB300\uAE30 \uB9BC
  float fres = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  lit += uAtmo * fres * (0.25 + 1.2 * smoothstep(-0.3, 0.6, ndl)) * smoothstep(0.75, 1.0, uReveal);

  // \uCE60\uD574\uC9C0\uB4EF \uB4DC\uB7EC\uB098\uB294 \uC5F0\uCD9C: \uC9C0\uD615 \uB192\uC774 \uC21C\uC11C\uB85C \uCC44\uC6CC\uC9C4\uB2E4
  float paint = smoothstep(h - 0.08, h + 0.08, uReveal * 1.4 - 0.1);
  vec3 core = mix(vec3(1.0, 0.92, 0.75) * 1.6, uAtmo * 0.25, smoothstep(0.0, 0.4, uReveal));
  lit = mix(core, lit, paint);
  lit = mix(lit, vec3(0.0), uSilhouette);

  gl_FragColor = vec4(lit, 1.0);
  ${Ki}
}
`,cI=`
varying vec3 vN;
varying vec3 vWorldPos;
void main() {
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,uI=`
uniform vec3 uAtmo;
uniform vec3 uLight;
uniform float uStrength;
varying vec3 vN;
varying vec3 vWorldPos;
void main() {
  vec3 V = normalize(cameraPosition - vWorldPos);
  float rim = pow(1.0 - abs(dot(normalize(vN), V)), 2.5);
  float day = smoothstep(-0.4, 0.5, dot(normalize(vN), normalize(uLight)));
  float a = rim * (0.25 + 0.9 * day) * uStrength;
  gl_FragColor = vec4(uAtmo * a, a);
  ${Ki}
}
`,hI=`
varying vec2 vUv;
varying vec3 vPos;
void main() { vUv = uv; vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,fI=`
${Lr}
uniform vec3 uColor;
uniform float uInner;
uniform float uOuter;
uniform float uReveal;
uniform vec3 uOffset;
varying vec3 vPos;
void main() {
  float r = (length(vPos.xy) - uInner) / (uOuter - uInner);
  float bands = pwNoise(vec3(r * 30.0, uOffset.x, 0.0)) * 0.5 + 0.5;
  bands *= 0.6 + 0.4 * sin(r * 70.0);
  float edge = smoothstep(0.0, 0.08, r) * smoothstep(1.0, 0.85, r);
  float a = bands * edge * 0.75 * smoothstep(0.85, 1.0, uReveal);
  gl_FragColor = vec4(uColor * (0.6 + bands), a);
  ${Ki}
}
`;function Ba(i,t){let e=new wt(i);return e.offsetHSL(t,0,0),e}var dI=new _n(1,96,64),vA=new _n(1,40,28),Tc=class{group=new oi;body;atmo;ring=null;moons=[];twin=null;radius;spin;constructor(t,e,n={}){let s=t.look,r=e.hue;this.radius=(n.radius??1)*e.size,this.spin=e.spin;let a=s.sea>0?Math.min(.85,s.sea+e.sea):-1,o=n.detail==="lo"?vA:dI,l=new se({vertexShader:oI,fragmentShader:lI,uniforms:{uTime:{value:0},uKind:{value:s.kind==="gas"?1:0},uLow:{value:Ba(s.low,r)},uHigh:{value:Ba(s.high,r)},uPeak:{value:Ba(s.peak,r)},uDeep:{value:Ba(s.deep,r)},uShallow:{value:Ba(s.shallow,r)},uAtmo:{value:Ba(s.atmo,r)},uSea:{value:a},uCloud:{value:s.cloud*e.cloud},uEmissive:{value:s.emissive},uIce:{value:s.ice},uCity:{value:t.cityLights?1:0},uAurora:{value:s.aurora??0},uOffset:{value:new P(...e.offset)},uLight:{value:new P(-.6,.45,.65)},uReveal:{value:1},uSilhouette:{value:0}}});if(this.body=new he(o,l),this.body.scale.setScalar(this.radius),this.body.rotation.z=.35,this.group.add(this.body),this.atmo=new he(o,new se({vertexShader:cI,fragmentShader:uI,uniforms:{uAtmo:l.uniforms.uAtmo,uLight:l.uniforms.uLight,uStrength:{value:1}},transparent:!0,depthWrite:!1,blending:zi,side:mi})),this.atmo.scale.setScalar(this.radius*1.14),this.group.add(this.atmo),e.ring){let u=this.radius*1.45,f=this.radius*2.35;this.ring=new he(new xo(u,f,128,1),new se({vertexShader:hI,fragmentShader:fI,uniforms:{uColor:{value:Ba(s.high,r+.04)},uInner:{value:u},uOuter:{value:f},uReveal:l.uniforms.uReveal,uOffset:l.uniforms.uOffset},transparent:!0,depthWrite:!1,side:Xi})),this.ring.rotation.x=-Math.PI/2+.35+e.ringTilt*.4,this.group.add(this.ring)}let c=new Ss({color:Ba(s.peak,r).multiplyScalar(.8)});for(let u=0;u<e.moons;u++){let f=new he(vA,c);f.scale.setScalar(this.radius*(.1+.05*u)),this.group.add(f),this.moons.push({mesh:f,r:this.radius*(2+u*.55),speed:.6/(1+u*.6),phase:u*2.1+e.offset[0],tilt:.3*(u%2?-1:1)})}if(t.twin){let u=new he(o,l.clone());u.material.uniforms.uOffset.value=new P(...e.offset).multiplyScalar(-1),u.scale.setScalar(this.radius*.72),this.twin=u,this.group.add(u)}}get material(){return this.body.material}setReveal(t){this.material.uniforms.uReveal.value=t,this.atmo.material.uniforms.uStrength.value=Math.max(0,(t-.7)/.3),this.twin&&(this.twin.material.uniforms.uReveal.value=t)}setLight(t){this.material.uniforms.uLight.value.copy(t)}update(t,e){this.body.rotation.y+=this.spin*t,this.material.uniforms.uTime.value=e;for(let n of this.moons){let s=n.phase+e*n.speed;n.mesh.position.set(Math.cos(s)*n.r,Math.sin(s)*n.r*n.tilt,Math.sin(s)*n.r)}if(this.twin){let n=e*.35,s=this.radius*2.6;this.twin.position.set(Math.cos(n)*s,0,Math.sin(n)*s),this.twin.rotation.y+=this.spin*t,this.twin.material.uniforms.uTime.value=e}}dispose(){this.material.dispose(),this.atmo.material.dispose(),this.ring?.geometry.dispose(),this.ring?.material.dispose(),this.moons[0]&&this.moons[0].mesh.material.dispose(),this.twin&&this.twin.material.dispose()}};var pI=`
uniform float uTime;
varying vec3 vN;
varying vec3 vView;
void main() {
  float ndv = max(dot(normalize(vN), normalize(vView)), 0.0);
  vec3 core = vec3(1.0, 0.92, 0.7) * (1.6 + 0.2 * sin(uTime * 2.0));
  vec3 col = mix(vec3(1.0, 0.55, 0.2) * 2.0, core, pow(ndv, 0.6));
  gl_FragColor = vec4(col, 1.0);
  ${Ki}
}
`,mI=`
varying vec3 vN;
varying vec3 vView;
void main() {
  vN = normalMatrix * normal;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = -mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`,gI=`
varying vec2 vUv;
void main() {
  float d = length(vUv - 0.5) * 2.0;
  float a = pow(max(0.0, 1.0 - d), 3.0);
  gl_FragColor = vec4(vec3(1.0, 0.7, 0.35) * a * 1.5, a);
  ${Ki}
}
`,Vm=class{constructor(t){this.engine=t;this.star=new he(new _n(1.3,48,32),new se({vertexShader:mI,fragmentShader:pI,uniforms:{uTime:{value:0}}})),this.glow=new he(new bs(9,9),new se({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:gI,transparent:!0,depthWrite:!1,blending:zi})),this.root.add(this.star,this.glow,this.orbitLines),this.offs.push(li.on("galaxy:refresh",()=>this.dirty=!0))}engine;id="galaxy";root=new oi;orbiters=[];star;glow;orbitLines=new oi;raycaster=new So;dirty=!0;focus=null;offs=[];inputOffs=[];rebuild(){for(let n of this.orbiters)this.root.remove(n.view.group),n.view.dispose();this.orbiters=[];for(let n of[...this.orbitLines.children])n.geometry.dispose(),this.orbitLines.remove(n);let t=an(),e=new vo({color:"#4a6aa8",transparent:!0,opacity:.25});t.collection.forEach((n,s)=>{let r=Mc[n.type];if(!r)return;let a=Qy(r,n.seed),o=new Tc(r,a,{radius:.5,detail:t.collection.length>30?"lo":"hi"}),l=3.4+s*1.15,c={rec:n,view:o,radius:l,speed:1.6/Math.pow(l,1.5),phase:s*2.399,incline:Math.sin(s*1.7)*.08};this.orbiters.push(c),this.root.add(o.group);let u=Array.from({length:129},(f,h)=>{let d=h/128*Math.PI*2;return new P(Math.cos(d)*l,Math.sin(d)*l*c.incline,Math.sin(d)*l)});this.orbitLines.add(new ku(new Ye().setFromPoints(u),e))}),this.dirty=!1}enter(){this.dirty&&this.rebuild(),this.overview();let t=this.engine.dom,e=n=>this.pick(n);t.addEventListener("pointerup",e),this.inputOffs.push(()=>t.removeEventListener("pointerup",e))}exit(){for(let t of this.inputOffs.splice(0))t()}pick(t){this.engine.ray(t.clientX,t.clientY,this.raycaster);let e=null,n=1/0;for(let s of this.orbiters){let r=s.view.group.position,a=this.raycaster.ray.distanceToPoint(r),o=this.raycaster.ray.origin.distanceTo(r);a<s.view.radius*2.2&&o<n&&(e=s,n=o)}this.focus=e,zt.setState({galaxySel:e?.rec??null}),e||this.overview()}overview(){this.focus=null,zt.setState({galaxySel:null});let t=Math.max(1,(3.4+this.orbiters.length*1.15)/9),[e,n,s]=Ot.camera.galaxy;this.engine.cameraTo([e,n*t,s*t],[0,0,0],1.6)}update(t,e){this.star.material.uniforms.uTime.value=e,this.glow.quaternion.copy(this.engine.camera.quaternion);for(let n of this.orbiters){let s=n.phase+e*n.speed;n.view.group.position.set(Math.cos(s)*n.radius,Math.sin(s)*n.radius*n.incline,Math.sin(s)*n.radius),n.view.setLight(yA.copy(n.view.group.position).negate().normalize()),n.view.update(t,e)}if(this.focus){let n=this.focus.view.group.position,s=yA.copy(n).normalize();this.engine.cameraTo([n.x+s.x*2.6,n.y+1.4,n.z+s.z*2.6+.01],[n.x,n.y,n.z],.25,"none")}}dispose(){for(let t of[...this.offs,...this.inputOffs])t();for(let t of this.orbiters)t.view.dispose();this.star.geometry.dispose(),this.star.material.dispose(),this.glow.geometry.dispose(),this.glow.material.dispose()}},yA=new P;nt();var Bo=Va(Cc(),1);nt();nt();var _I=`
uniform float uTime;
uniform float uMass;
uniform float uHalf;
varying vec2 vPos;
void main() {
  vec3 p = position;
  vPos = p.xy / uHalf;
  float r = length(vPos);
  // \uC911\uB825 \uC6B0\uBB3C: \uC911\uC2EC\uC73C\uB85C \uAC08\uC218\uB85D \uC0B4\uC9DD \uAEBC\uC9C4\uB2E4 (PlaneGeometry\uC758 z\uAC00 \uD68C\uC804 \uD6C4 \uC6D4\uB4DC y)
  float well = -0.9 / (1.0 + pow(r * 3.2, 2.0));
  float ripple = sin(r * 14.0 - uTime * 1.6) * 0.035 * uMass * smoothstep(1.1, 0.2, r);
  p.z += well + ripple;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,vI=`
#define OCTAVES 4
${Lr}
uniform float uTime;
uniform float uMass;
uniform float uWarn;
uniform float uRim;
uniform float uDrop;
uniform vec3 uCore;
uniform vec3 uMid;
uniform vec3 uOuter;
varying vec2 vPos;

void main() {
  float r = length(vPos) / uRim;            // 1.0 = \uC6D0\uBC18 \uAC00\uC7A5\uC790\uB9AC(\uC9C8\uB7C9 \uD55C\uACC4 \uBC18\uACBD)
  float ang = atan(vPos.y, vPos.x);

  // \uCF00\uD50C\uB7EC\uC2DD \uCC28\uB4F1 \uD68C\uC804: \uC548\uCABD\uC774 \uB354 \uBE68\uB9AC \uB3C8\uB2E4
  float swirl = ang + 2.6 * log(r + 0.08) - uTime * 0.22 / (0.35 + r);
  vec3 sp = vec3(cos(swirl) * r * 2.4, sin(swirl) * r * 2.4, uTime * 0.03);
  float arms = pwFbm(sp * 1.6) * 0.9 + pwFbm(sp * 4.3 + 9.0) * 0.45;
  arms = smoothstep(-0.25, 0.55, arms);

  float body = smoothstep(1.04, 0.86, r) * smoothstep(0.0, 0.16, r);
  float density = body * (0.22 + 0.78 * arms) * (0.55 + 0.45 * smoothstep(1.0, 0.1, r));

  // \uB4F1\uACE0\uC120: \uC911\uB825 \uC6B0\uBB3C\uC758 \uAE4A\uC774\uB97C \uC77D\uAC8C \uD574 \uC8FC\uB294 \uB3D9\uC2EC\uC6D0
  float rings = 1.0 - smoothstep(0.0, 0.035, abs(fract(pow(r, 0.7) * 6.0 - uTime * 0.02) - 0.5));
  rings *= body * 0.1;

  vec3 col = mix(uOuter, uMid, smoothstep(0.95, 0.35, r));
  col = mix(col, uCore, smoothstep(0.5, 0.0, r));
  vec3 outc = col * density * (0.75 + 0.6 * uMass);
  outc += col * rings;

  // \uC911\uC2EC\uC758 \uC6D0\uC2DC \uD575 \uBC1C\uAD11: \uC9C8\uB7C9\uC774 \uB298\uC218\uB85D \uBC1D\uC544\uC9C4\uB2E4
  float core = exp(-r * 9.0) * (0.9 + 2.2 * uMass) + exp(-r * 30.0) * 1.6;
  outc += uCore * core;

  // \uAC00\uC7A5\uC790\uB9AC \uD55C\uACC4\uC120: \uD3C9\uC18C\uC5D4 \uC740\uC740\uD558\uACE0, \uACBD\uACE0 \uB54C \uB9E5\uB3D9\uD55C\uB2E4
  float pulse = 0.5 + 0.5 * sin(uTime * 7.0);
  float rim = 1.0 - smoothstep(0.0, 0.012, abs(r - 1.0));
  vec3 rimCol = mix(uMid, vec3(1.0, 0.25, 0.2), uWarn);
  outc += rimCol * rim * (0.35 + uWarn * (0.6 + 1.2 * pulse));

  // \uB4DC\uB86D \uADA4\uB3C4: \uD50C\uB808\uC774\uC5B4\uAC00 \uC6D0\uC18C\uB97C \uB193\uB294 \uBC14\uAE65 \uACE0\uB9AC (\uC810\uC120)
  float rd = length(vPos) / uDrop;
  float dash = step(0.5, fract(ang * 18.0 / 6.2831853 + uTime * 0.03));
  float drop = (1.0 - smoothstep(0.0, 0.006, abs(rd - 1.0))) * dash;
  outc += uMid * drop * 0.5;

  float alpha = clamp(density * 0.9 + core + rim * 0.5 + drop * 0.4 + rings, 0.0, 1.0);
  gl_FragColor = vec4(outc, alpha);
  ${Ki}
}
`,yI=`
attribute vec3 aOrbit; // (\uBC18\uC9C0\uB984, \uCD08\uAE30 \uAC01, \uB192\uC774 \uD754\uB4E4\uB9BC \uC704\uC0C1)
attribute float aSize;
uniform float uTime;
uniform float uScale;
varying float vFade;
void main() {
  float r = aOrbit.x;
  float a = aOrbit.y + uTime * 0.55 / pow(max(r, 0.4), 1.5);
  float well = -0.9 / (1.0 + pow(r * 3.2 / ${(Ot.disc.dropRadius*1.12).toFixed(3)}, 2.0));
  vec3 p = vec3(cos(a) * r, well + 0.05 + sin(uTime * 0.7 + aOrbit.z) * 0.06, sin(a) * r);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vFade = 0.6 + 0.4 * sin(uTime * 1.3 + aOrbit.z * 5.0);
  gl_PointSize = aSize * uScale * (18.0 / -mv.z);
}
`,xI=`
uniform vec3 uColor;
varying float vFade;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = pow(smoothstep(0.5, 0.0, d), 2.0) * vFade;
  gl_FragColor = vec4(uColor * a * 1.4, a);
  ${Ki}
}
`,Wm=520,Xm=class{group=new oi;disc;motes;mass=0;warn=0;constructor(t){let{radius:e,dropRadius:n}=Ot.disc,s=n*1.12;this.disc=new he(new bs(s*2,s*2,72,72),new se({vertexShader:_I,fragmentShader:vI,uniforms:{uTime:{value:0},uMass:{value:0},uWarn:{value:0},uHalf:{value:s},uRim:{value:e/s},uDrop:{value:n/s},uCore:{value:new wt("#ffd9a0")},uMid:{value:new wt("#b06bff")},uOuter:{value:new wt("#3b2f9a")}},transparent:!0,depthWrite:!1,blending:zi,side:Xi})),this.disc.rotation.x=-Math.PI/2,this.disc.renderOrder=1,this.group.add(this.disc);let r=t.fork("motes"),a=new Float32Array(Wm*3),o=new Float32Array(Wm);for(let c=0;c<Wm;c++)a[c*3]=e*(.12+.9*Math.sqrt(r.next())),a[c*3+1]=r.range(0,Math.PI*2),a[c*3+2]=r.range(0,Math.PI*2),o[c]=r.range(.6,2.2);let l=new Ye;l.setAttribute("position",new pi(new Float32Array(Wm*3),3)),l.setAttribute("aOrbit",new pi(a,3)),l.setAttribute("aSize",new pi(o,1)),l.boundingSphere=new Bs(new P,e*1.2),this.motes=new yo(l,new se({vertexShader:yI,fragmentShader:xI,uniforms:{uTime:{value:0},uScale:{value:1},uColor:{value:new wt("#ffd7b8")}},transparent:!0,depthWrite:!1,blending:zi})),this.motes.renderOrder=2,this.group.add(this.motes)}setScale(t){this.motes.material.uniforms.uScale.value=t}update(t,e){let n=this.disc.material.uniforms;n.uTime.value=e;let s=1-Math.exp(-t*4);n.uMass.value+=(this.mass-n.uMass.value)*s,n.uWarn.value+=(this.warn-n.uWarn.value)*s,this.motes.material.uniforms.uTime.value=e}dispose(){this.disc.geometry.dispose(),this.disc.material.dispose(),this.motes.geometry.dispose(),this.motes.material.dispose()}};nt();var SI=`
varying vec3 vN;
varying vec3 vViewN;
varying vec3 vPos;
varying vec3 vView;
void main() {
  vN = normal;
  vPos = position;
  vViewN = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = -mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`,bI=`
#define OCTAVES 3
${Lr}
uniform float uTime;
uniform vec3 uColor;
uniform vec3 uGlow;
uniform float uSpecial;
uniform float uFace;
uniform float uFlash;
varying vec3 vN;
varying vec3 vViewN;
varying vec3 vPos;
varying vec3 vView;

float ellipse(vec2 p, vec2 c, vec2 r) { return 1.0 - smoothstep(0.85, 1.0, length((p - c) / r)); }

void main() {
  vec3 n = normalize(vViewN);
  vec3 v = normalize(vView);
  float ndv = clamp(dot(n, v), 0.0, 1.0);
  float fres = pow(1.0 - ndv, 2.2);

  // \uB0B4\uBD80 \uC18C\uC6A9\uB3CC\uC774
  vec3 p = normalize(vPos);
  float a = uTime * 0.6;
  mat2 rot = mat2(cos(a), -sin(a), sin(a), cos(a));
  p.xz = rot * p.xz;
  float swirl = pwFbm(p * 2.4 + vec3(0.0, uTime * 0.25, 0.0)) * 0.5 + 0.5;

  vec3 col = mix(uColor * 0.55, uColor * 1.15, swirl);
  col = mix(col, uGlow, smoothstep(0.55, 0.9, swirl) * 0.45);
  // \uC824\uB9AC \uD558\uC774\uB77C\uC774\uD2B8
  float spec = pow(max(dot(n, normalize(vec3(-0.35, 0.6, 0.75))), 0.0), 28.0);
  col += vec3(1.0) * spec * 0.9;
  col += uGlow * fres * (1.4 + uSpecial * (0.9 + 0.6 * sin(uTime * 6.0)));
  col += uGlow * 0.35 * (1.0 - ndv) * uSpecial;

  // \uC5BC\uAD74: \uD654\uBA74\uC744 \uBCF4\uB294 \uCABD\uC5D0 \uB208 \uB450 \uAC1C\uC640 \uC785
  vec2 f = n.xy;
  float blink = step(0.06, fract(uTime * 0.23 + uFace * 0.37));
  float eyes = ellipse(f, vec2(-0.26, 0.12), vec2(0.075, 0.11 * blink + 0.012))
             + ellipse(f, vec2( 0.26, 0.12), vec2(0.075, 0.11 * blink + 0.012));
  float mouthY = f.y + 0.13 - 0.55 * f.x * f.x;
  float mouth = (1.0 - smoothstep(0.012, 0.03, abs(mouthY))) * step(abs(f.x), 0.13);
  float cheek = ellipse(f, vec2(-0.42, -0.06), vec2(0.1, 0.06)) + ellipse(f, vec2(0.42, -0.06), vec2(0.1, 0.06));
  float face = step(0.0, n.z) * uFace;
  col = mix(col, vec3(0.08, 0.04, 0.12), clamp(eyes + mouth, 0.0, 1.0) * face);
  col += vec3(1.0, 0.45, 0.55) * cheek * face * 0.25;

  col = mix(col, vec3(1.0), uFlash);
  gl_FragColor = vec4(col, 1.0);
  ${Ki}
}
`,Ky=new Map,Jy=new _n(1,40,28);function Uh(i){let t=Ky.get(i);if(t)return t;let e=Te(i);return t=new se({vertexShader:SI,fragmentShader:bI,uniforms:{uTime:{value:0},uColor:{value:new wt(e.color)},uGlow:{value:new wt(e.glow)},uSpecial:{value:e.kind==="special"?1:0},uFace:{value:e.face==="none"?0:1},uFlash:{value:0}}}),Ky.set(i,t),t}function xA(i){for(let t of Ky.values())t.uniforms.uTime.value=i}nt();var qn=Ot.physics,qm=class{seed;rng;choiceRng;bodies=[];events=[];phase="aim";turn=0;turns;choices=[];rerolls;combo=0;maxCombo=0;merges=0;unstable=!1;recipes=new Set;known;nextId=1;sinceDrop=0;constructor(t,e=[]){this.seed=t,this.rng=new Mn(t),this.choiceRng=this.rng.fork("choices"),this.turns=Ot.run.turns,this.rerolls=Ot.run.rerolls,this.known=new Set(e),this.drawChoices()}get turnsLeft(){return this.turns-this.turn}get mass(){let t=0;for(let e of this.bodies)!e.dead&&Te(e.el).kind!=="special"&&(t+=Te(e.el).mass);return t}drawChoices(){let t=this.choiceRng,e=Object.entries(Ot.run.pool),n=Object.entries(Ot.run.specialPool),s=[],r=0;for(;s.length<Ot.run.choices&&r++<50;){let a=s.every(c=>Te(c.el).kind!=="special")&&t.chance(Ot.run.specialChance),[o]=t.weighted(a?n:e,([,c])=>c);if(s.some(c=>c.el===o))continue;let l=Ot.run.counts[o]??1;s.push({el:o,count:l})}this.choices=s}reroll(){return this.rerolls<=0||this.phase!=="aim"?!1:(this.rerolls--,this.drawChoices(),!0)}drop(t,e){let n=this.choices[t];if(!n||this.phase!=="aim")return!1;let s=Ot.disc.dropRadius;for(let r=0;r<n.count;r++){let a=e+(r-(n.count-1)/2)*qn.spread,o=this.spawn(n.el,Math.cos(a)*s,Math.sin(a)*s);o.vx=-Math.cos(a)*qn.dropSpeed,o.vz=-Math.sin(a)*qn.dropSpeed,o.airborne=!0,this.events.push({type:"spawn",body:o,cause:"drop"})}return this.turn++,this.combo=0,this.sinceDrop=0,this.phase="falling",!0}isSettled(){if(this.sinceDrop<Ot.run.settleMinTime)return!1;if(this.sinceDrop>Ot.run.settleMaxTime)return!0;let t=Ot.run.settleSpeed**2;return this.bodies.every(e=>e.dead||e.mergeWith===null&&(Te(e.el).kind!=="special"||e.fired)&&e.vx*e.vx+e.vz*e.vz<t)}step(t){if(this.phase==="done")return;this.sinceDrop+=t;let e=qn.substeps,n=t/e;for(let s=0;s<e;s++)this.substep(n);this.updateMerges(t),this.updateSpecials(t),this.findContacts(),this.bodies=this.bodies.filter(s=>!s.dead),!this.unstable&&(this.mass>Ot.disc.massLimit||this.bodies.length>Ot.disc.maxBodies)&&(this.unstable=!0,this.events.push({type:"unstable"})),this.phase==="falling"&&this.isSettled()&&(this.turn>=this.turns?this.phase="done":(this.phase="aim",this.drawChoices()))}substep(t){let e=Math.exp(-qn.damping*t);for(let s of this.bodies){if(s.dead||s.mergeWith!==null)continue;s.age+=t;let r=Math.hypot(s.x,s.z)||1e-6,a=qn.gravity*Math.min(1,r/1.2);s.vx+=-s.x/r*a*t,s.vz+=-s.z/r*a*t,s.vx*=e,s.vz*=e,s.x+=s.vx*t,s.z+=s.vz*t}let n=this.bodies;for(let s=0;s<n.length;s++){let r=n[s];if(!(r.dead||r.mergeWith!==null))for(let a=s+1;a<n.length;a++){let o=n[a];if(o.dead||o.mergeWith!==null)continue;let l=o.x-r.x,c=o.z-r.z,u=r.r+o.r,f=l*l+c*c;if(f>=u*u)continue;let h=Math.sqrt(f)||1e-4,d=l/h,_=c/h,v=u-h,m=o.inertia/(r.inertia+o.inertia),p=1-m;r.x-=d*v*m,r.z-=_*v*m,o.x+=d*v*p,o.z+=_*v*p;let g=(o.vx-r.vx)*d+(o.vz-r.vz)*_;if(g<0){let x=-(1+qn.restitution)*g;r.vx-=d*x*m,r.vz-=_*x*m,o.vx+=d*x*p,o.vz+=_*x*p;for(let S of[r,o])S.airborne&&(S.airborne=!1,this.events.push({type:"land",body:S,speed:-g}))}}}for(let s of this.bodies)s.airborne&&Math.hypot(s.x,s.z)<s.r+.3&&(s.airborne=!1,this.events.push({type:"land",body:s,speed:Math.hypot(s.vx,s.vz)}))}findContacts(){let t=this.bodies;for(let e=0;e<t.length;e++){let n=t[e];if(!(n.dead||n.mergeWith!==null))for(let s=e+1;s<t.length;s++){let r=t[s];if(r.dead||r.mergeWith!==null||n.mergeWith!==null||!this.touching(n,r))continue;if(n.el===r.el){let o=mA(n.el);o&&this.beginMerge(n,r,o,null);continue}let a=this.recipeFor(n,r);a&&this.beginMerge(n,r,a.output,a.id)}}}touching(t,e,n=qn.contactSlop){let s=t.r+e.r+n,r=e.x-t.x,a=e.z-t.z;return r*r+a*a<=s*s}recipeFor(t,e){for(let n of Ur){if(n.catalyst||n.inputs.length!==2)continue;let[s,r]=n.inputs;if((t.el===s&&e.el===r||t.el===r&&e.el===s)&&!(n.bulk&&2+this.bodies.filter(o=>o!==t&&o!==e&&!o.dead&&n.inputs.includes(o.el)&&(this.touching(o,t,.15)||this.touching(o,e,.15))).length<n.bulk))return n}return null}beginMerge(t,e,n,s){t.mergeWith=e.id,e.mergeWith=t.id,t.mergeT=e.mergeT=0,t.mergeOut=e.mergeOut=n,t.mergeRecipe=e.mergeRecipe=s}updateMerges(t){for(let e of this.bodies){if(e.dead||e.mergeWith===null||e.id>e.mergeWith)continue;let n=this.bodies.find(l=>l.id===e.mergeWith);if(!n||n.dead){e.mergeWith=null;continue}e.mergeT+=t;let s=(e.x*e.inertia+n.x*n.inertia)/(e.inertia+n.inertia),r=(e.z*e.inertia+n.z*n.inertia)/(e.inertia+n.inertia),a=Math.min(1,e.mergeT/qn.mergeTime);if(e.x+=(s-e.x)*a,e.z+=(r-e.z)*a,n.x+=(s-n.x)*a,n.z+=(r-n.z)*a,e.mergeT<qn.mergeTime)continue;let o=this.spawn(e.mergeOut,s,r);if(o.vx=(e.vx+n.vx)/2,o.vz=(e.vz+n.vz)/2,e.dead=n.dead=!0,this.combo++,this.maxCombo=Math.max(this.maxCombo,this.combo),e.mergeRecipe){let l=Ur.find(u=>u.id===e.mergeRecipe),c=this.discover(l.id);this.events.push({type:"remove",body:e,cause:"react"},{type:"remove",body:n,cause:"react"}),this.events.push({type:"react",recipe:l,inputs:[e,n],out:o,first:c,combo:this.combo})}else this.merges++,this.events.push({type:"remove",body:e,cause:"merge"},{type:"remove",body:n,cause:"merge"}),this.events.push({type:"merge",a:e,b:n,out:o,combo:this.combo});this.events.push({type:"spawn",body:o,cause:e.mergeRecipe?"react":"merge"})}}discover(t){return this.recipes.add(t),this.known.has(t)?!1:(this.known.add(t),!0)}updateSpecials(t){for(let e of this.bodies){if(e.dead||e.fired||Te(e.el).kind!=="special"||e.airborne&&e.age<qn.catalystDelay*3||e.age<qn.catalystDelay)continue;e.fired=!0;let n=Te(e.el).effect??"",s=qn.catalystRadius,r=this.bodies.filter(l=>l!==e&&!l.dead&&l.mergeWith===null&&Math.hypot(l.x-e.x,l.z-e.z)<s+l.r),a=0;if(n==="clear")for(let l of r){let c=Te(l.el).tier??9;Te(l.el).kind==="special"||c>1||(l.dead=!0,a++,this.events.push({type:"remove",body:l,cause:"clear"}))}else if(n==="comet")for(let l=0;l<2;l++){let c=this.rng.range(0,Math.PI*2),u=this.spawn("water",e.x+Math.cos(c)*.9,e.z+Math.sin(c)*.9);this.events.push({type:"spawn",body:u,cause:"comet"}),a++}let o=gA(e.el);for(let l of Ur)if(!(!l.catalyst||!o.includes(l.catalyst)))if(l.inputs.length===1)for(let c of r){if(c.dead||c.el!==l.inputs[0])continue;let u=c.el;this.morph(c,l.output),a++,this.events.push({type:"morph",body:c,from:u,recipe:l,first:this.discover(l.id)})}else{let[c,u]=l.inputs;for(let f of r){if(f.dead||f.mergeWith!==null||f.el!==c)continue;let h=r.find(d=>!d.dead&&d.mergeWith===null&&d!==f&&d.el===u&&this.touching(f,d,.25));h&&(this.beginMerge(f,h,l.output,l.id),a++)}}e.dead=!0,this.events.push({type:"special",body:e,effect:o[0]??n,affected:a}),this.events.push({type:"remove",body:e,cause:"special"})}}morph(t,e){let n=Te(e);t.el=e,t.r=n.radius,t.inertia=n.radius*n.radius}spawn(t,e,n){let s=Te(t),r={id:this.nextId++,el:t,x:e,z:n,vx:0,vz:0,r:s.radius,inertia:s.radius*s.radius,age:0,mergeWith:null,mergeT:0,mergeOut:null,mergeRecipe:null,dead:!1,airborne:!1,fired:!1};return this.bodies.push(r),r}summary(){let t={},e=0,n=new Set;for(let r of this.bodies){if(r.dead)continue;let a=km[r.el];!a||a.kind==="special"||(t[r.el]=(t[r.el]??0)+a.mass,e+=a.mass,n.add(r.el))}let s={};for(let[r,a]of Object.entries(t))s[r]=e>0?a/e:0;return{share:s,mass:t,total:e,has:n,recipes:new Set(this.recipes),merges:this.merges,maxCombo:this.maxCombo,unstable:this.unstable}}};var MI=Ot.disc.dropRadius*1.12,jy=i=>-.9/(1+Math.pow(i*3.2/MI,2)),tx=class{group=new oi;ringGeo=new xo(.86,1,64);dotGeo=new _n(1,8,6);rings=[];dots=[];rng=new Mn("fx");take(t,e){let n=t.find(r=>!r.visible);if(n)return n;let s=e();return t.push(s),this.group.add(s),s}ring(t,e,n,s,r,a,o=.5,l=.9){let c=this.take(this.rings,()=>{let u=new he(this.ringGeo,new Ss({transparent:!0,blending:zi,depthWrite:!1,side:Xi}));return u.rotation.x=-Math.PI/2,u.renderOrder=5,u});c.visible=!0,c.position.set(t,e,n),c.material.color.set(s),c.material.opacity=l,c.scale.setScalar(r),fe.killTweensOf([c.scale,c.material]),fe.to(c.scale,{x:a,y:a,z:a,duration:o,ease:"power2.out"}),fe.to(c.material,{opacity:0,duration:o,ease:"power1.in",onComplete:()=>{c.visible=!1}})}burst(t,e,n,s,r,a,o=.08,l=.6){for(let c=0;c<r;c++){let u=this.take(this.dots,()=>{let d=new he(this.dotGeo,new Ss({transparent:!0,blending:zi,depthWrite:!1}));return d.renderOrder=6,d}),f=this.rng.range(0,Math.PI*2),h=a*this.rng.range(.5,1.1);u.visible=!0,u.position.set(t,e,n),u.material.color.set(s),u.material.opacity=1,u.scale.setScalar(o*this.rng.range(.6,1.4)),fe.killTweensOf([u.position,u.material,u.scale]),fe.to(u.position,{x:t+Math.cos(f)*h,z:n+Math.sin(f)*h,y:e+this.rng.range(.1,.6),duration:l,ease:"power2.out"}),fe.to(u.scale,{x:.01,y:.01,z:.01,duration:l,ease:"power1.in"}),fe.to(u.material,{opacity:0,duration:l,onComplete:()=>{u.visible=!1}})}}dispose(){this.ringGeo.dispose(),this.dotGeo.dispose();for(let t of[...this.rings,...this.dots])t.material.dispose()}},$y={splash:"#6fb7ff",freeze:"#d8f4ff",spark:"#e9d8ff",bloom:"#9dffb8",crunch:"#e0a070",puff:"#ffd0a8",melt:"#ff7a2a",lightning:"#c9a8ff",starlight:"#ffe08a",heat:"#ff8a3a",cold:"#bfefff",comet:"#bfe9ff",clear:"#a06bff"},Ym=class{id="workshop";root=new oi;disc;engine;run=null;views=new Map;bodyGroup=new oi;fx=new tx;ghost;aimLine;aimAngle=Math.PI/2;selected=0;aiming=!1;planet=null;roll=null;stage="play";active=!1;syncTimer=0;lastWarn=0;raycaster=new So;plane=new zn(new P(0,1,0),0);hit=new P;offs=[];constructor(t){this.engine=t,this.disc=new Xm(new Mn("planet-workshop/disc")),this.root.add(this.disc.group,this.bodyGroup,this.fx.group),this.ghost=new he(Jy,Uh("dust")),this.ghost.renderOrder=4,this.root.add(this.ghost);let e=new Ye().setFromPoints([new P,new P]);this.aimLine=new Jl(e,new qu({color:"#ffe2c0",dashSize:.25,gapSize:.18,transparent:!0,opacity:.55})),this.root.add(this.aimLine),this.offs.push(li.on("run:select",({index:n})=>{this.selected=n,this.refreshGhost(),this.pushRun()}),li.on("run:reroll",()=>{this.run?.reroll()&&(Ji.select(),this.selected=0,this.refreshGhost(),this.pushRun())}),li.on("run:new",()=>this.newRun()),li.on("run:register",({name:n})=>this.register(n)))}enter(){this.active=!0,this.run?this.pushRun():this.newRun();let t=this.engine.dom,e=a=>this.onPointerMove(a),n=a=>{this.here&&(this.aiming=!0,this.onPointerMove(a))},s=a=>{this.aiming&&(this.aiming=!1,this.onPointerMove(a),this.tryDrop())},r=a=>{if(!(zt.getState().scene!=="workshop"||this.stage!=="play")){if(a.key==="ArrowLeft")this.aimAngle+=.08;else if(a.key==="ArrowRight")this.aimAngle-=.08;else if(a.key===" "||a.key==="Enter")this.tryDrop();else if(["1","2","3"].includes(a.key))zt.getState().select(Number(a.key)-1);else return;this.placeAim()}};t.addEventListener("pointermove",e),t.addEventListener("pointerdown",n),window.addEventListener("pointerup",s),window.addEventListener("keydown",r),this.offs.push(()=>t.removeEventListener("pointermove",e),()=>t.removeEventListener("pointerdown",n),()=>window.removeEventListener("pointerup",s),()=>window.removeEventListener("keydown",r)),this.stage==="play"&&this.here&&this.engine.cameraTo(Ot.camera.workshop),this.stage==="result"&&this.here&&this.engine.cameraTo([0,3,15.5],[0,-1.2,0],1.6)}refocus(){this.stage==="result"?this.engine.cameraTo([0,3,15.5],[0,-1.2,0],1.6):this.stage==="birth"?this.engine.cameraTo([0,8.5,10.5],[0,1.2,0],1.6):this.refreshGhost()}get here(){return zt.getState().scene==="workshop"}exit(){this.active=!1;let t=this.offs.splice(4);for(let e of t)e()}newRun(){let t=an();for(let e of this.views.values())this.bodyGroup.remove(e.mesh);this.views.clear(),this.planet?.dispose(),this.planet&&this.root.remove(this.planet.group),this.planet=null,this.roll=null,this.stage="play",this.disc.group.visible=!0,this.disc.group.scale.setScalar(1),this.selected=0,this.run=new qm(`${t.seed}-${t.stats.runs}`,t.codex.recipes),zt.setState({result:null,cinematic:!1}),this.refreshGhost(),this.pushRun(),this.active&&this.here&&this.engine.cameraTo(Ot.camera.workshop,[0,0,0],1.2)}register(t){let e=this.run,n=this.roll;if(!e||!n||this.stage!=="result")return;let s=an(),r=e.summary(),a={id:`${n.seed}`,seed:n.seed,type:n.planet.id,grade:n.grade,name:t.trim()||n.planet.name,bornAt:Date.now(),composition:Object.fromEntries(Object.entries(r.share).map(([l,c])=>[l,Math.round(c*1e3)/1e3])),favorite:!1},o=bc.indexOf(n.grade)>=bc.indexOf("SSR");zo({collection:[...s.collection,a],codex:{...s.codex,planets:[...new Set([...s.codex.planets,n.planet.id])]},stats:{runs:s.stats.runs+1,merges:s.stats.merges+r.merges,bestCombo:Math.max(s.stats.bestCombo,r.maxCombo)},pity:o?0:s.pity+1}),zt.setState({collectionCount:s.collection.length+1,result:null}),this.run=null,li.emit("galaxy:refresh",{}),zt.getState().goto("galaxy")}onPointerMove(t){this.stage!=="play"||!this.here||(this.engine.ray(t.clientX,t.clientY,this.raycaster),this.raycaster.ray.intersectPlane(this.plane,this.hit)&&(this.aimAngle=Math.atan2(this.hit.z,this.hit.x),this.placeAim()))}placeAim(){let t=Ot.disc.dropRadius,e=Math.cos(this.aimAngle)*t,n=Math.sin(this.aimAngle)*t;this.ghost.position.set(e,.5,n);let s=this.aimLine.geometry.attributes.position;s.setXYZ(0,e,.05,n),s.setXYZ(1,e*.08,jy(.5)+.05,n*.08),s.needsUpdate=!0,this.aimLine.computeLineDistances()}refreshGhost(){let t=this.run?.choices[this.selected]??this.run?.choices[0];t&&(this.run.choices[this.selected]||(this.selected=0),this.ghost.material=Uh(t.el),this.ghost.scale.setScalar(Te(t.el).radius),this.placeAim())}tryDrop(){let t=this.run;if(!t||this.stage!=="play"||t.phase!=="aim"||!this.here)return;let e=t.choices[this.selected];e&&t.drop(this.selected,this.aimAngle)&&(Ji.drop(Te(e.el).tier??1),Sc(8),this.selected=0,this.pushRun())}update(t,e){this.disc.update(t,e),xA(e);let n=this.run;n&&this.stage==="play"&&(n.step(t),this.consume(n.events.splice(0)),n.phase==="done"&&this.startBirth(),this.syncTimer-=t,this.syncTimer<=0&&(this.syncTimer=.15,this.pushRun())),this.syncBodies();let s=this.stage==="play"&&n?.phase==="aim"&&zt.getState().scene==="workshop";this.ghost.visible=s,this.aimLine.visible=s,s&&(this.ghost.position.y=.5+Math.sin(e*4)*.08),this.planet?.update(t,e)}syncBodies(){if(this.run){for(let t of this.run.bodies){let e=this.views.get(t.id);if(!e)continue;let n=Math.hypot(t.x,t.z);e.mesh.position.set(t.x,jy(n)+t.r*.8,t.z);let s=t.r*e.pop.s;e.mesh.scale.set(s*e.squash.xz,s*e.squash.y,s*e.squash.xz)}if(this.run){let t=this.run.mass/Ot.disc.massLimit;this.disc.mass=Math.min(1.2,t),this.disc.warn=t>Ot.disc.warnAt||this.run.unstable?1:0}}}addView(t,e=1){let n=new he(Jy,Uh(t.el));n.renderOrder=3;let s={mesh:n,pop:{s:e},squash:{xz:1,y:1}};return this.views.set(t.id,s),this.bodyGroup.add(n),s}removeView(t){let e=this.views.get(t.id);e&&(this.views.delete(t.id),fe.killTweensOf([e.pop,e.squash]),this.bodyGroup.remove(e.mesh))}worldOf(t){return new P(t.x,jy(Math.hypot(t.x,t.z))+t.r,t.z)}consume(t){let e=zt.getState(),n=Ot.feel;for(let s of t)switch(s.type){case"spawn":{let r=this.addView(s.body,s.cause==="drop"?.6:.25);s.cause==="drop"?(r.squash.xz=1.3,r.squash.y=.7,fe.to(r.pop,{s:1,duration:.35,ease:"back.out(3)"}),fe.to(r.squash,{xz:1,y:1,duration:.5,ease:"elastic.out(1.2, 0.4)"})):fe.to(r.pop,{s:1,duration:.45,ease:"elastic.out(1.1, 0.45)"});break}case"land":{let r=this.views.get(s.body.id),a=Math.min(1,s.speed/6)*n.squash;r&&a>.1&&(r.squash.xz=1+.35*a,r.squash.y=1-.3*a,fe.to(r.squash,{xz:1,y:1,duration:.45,ease:"elastic.out(1.3, 0.35)"}));let o=this.worldOf(s.body);this.fx.burst(o.x,o.y-s.body.r*.7,o.z,"#ffd9c0",5,.8+a,.05,.45),Ji.land(Te(s.body.el).tier??1,s.speed);break}case"merge":case"react":{let r=s.out,a=this.worldOf(r),o=Te(r.el),l=s.combo,c=s.type==="react",u=c?$y[s.recipe.fx]??o.glow:o.glow;this.fx.ring(a.x,a.y-r.r*.5,a.z,u,r.r*.6,r.r*(2.6+l*.4),.55),this.fx.burst(a.x,a.y,a.z,u,c?14:8+l*2,1.4+l*.25,.07,.7);let f=this.views.get(r.id);if(f){let d=f.mesh.material;d.uniforms.uFlash.value=.6,fe.to(d.uniforms.uFlash,{value:0,duration:.3})}this.engine.hitstop(n.hitstop*(c?1.6:1)*Math.min(2,.7+l*.3)),this.engine.shake(.04+l*.03),Sc(c?[10,30,10]:12+l*4);let h=this.engine.project(a);c?(Ji.react(s.first),s.first?this.discover(s.recipe.id,r.el,h):e.pop({text:o.name,x:h.x,y:h.y-30,kind:"react"},900)):Ji.merge(o.tier??1,l),l>=2&&e.pop({text:`${l} \uCF64\uBCF4!`,x:h.x,y:h.y-60,kind:"combo",scale:Math.min(2.2,1+l*.18)},1e3);break}case"morph":{let r=this.views.get(s.body.id);r&&(r.mesh.material=Uh(s.body.el),r.pop.s=.5,fe.to(r.pop,{s:1,duration:.5,ease:"elastic.out(1, 0.4)"}));let a=this.worldOf(s.body);this.fx.burst(a.x,a.y,a.z,$y[s.recipe.fx]??"#fff",8,1.2,.06),Ji.react(s.first);let o=this.engine.project(a);s.first&&this.discover(s.recipe.id,s.body.el,o);break}case"special":{let r=this.worldOf(s.body),a=$y[s.effect]??Te(s.body.el).glow;this.fx.ring(r.x,r.y-.3,r.z,a,.4,Ot.physics.catalystRadius*1.1,.7,1),this.fx.ring(r.x,r.y-.3,r.z,"#ffffff",.2,Ot.physics.catalystRadius*.7,.45,.8),this.fx.burst(r.x,r.y,r.z,a,18,2.6,.08,.8),Ji.special(s.effect),this.engine.shake(.12),Sc(20);let o=this.engine.project(r);e.pop({text:Te(s.body.el).name,sub:s.affected?`${s.affected}\uAC1C\uC5D0 \uD6A8\uACFC`:"\uD6A8\uACFC \uC5C6\uC74C",x:o.x,y:o.y-40,kind:"info"},1100);break}case"remove":this.removeView(s.body);break;case"unstable":{Ji.warn(),Sc([30,40,30]),this.engine.shake(.2),e.pop({text:"\uC6D0\uBC18 \uBD88\uC548\uC815!",sub:"\uC9C8\uB7C9 \uD55C\uACC4\uB97C \uB118\uC5C8\uC5B4\uC694",x:window.innerWidth/2,y:window.innerHeight*.3,kind:"warn"},1800);break}}this.run&&this.run.mass/Ot.disc.massLimit>Ot.disc.warnAt&&this.run.turn!==this.lastWarn&&(this.lastWarn=this.run.turn,Ji.warn())}discover(t,e,n){let s=an();s.codex.recipes.includes(t)||zo({codex:{...s.codex,recipes:[...s.codex.recipes,t],elements:[...new Set([...s.codex.elements,e])]}});let r=Ur.find(a=>a.id===t);this.engine.hitstop(.35),zt.getState().settings.flash&&this.engine.flash(.25,.4),zt.getState().pop({text:`NEW! ${Te(e).name}`,sub:r?.hint,x:n.x,y:n.y,kind:"new"},2200)}startBirth(){let t=this.run;if(!t||this.stage!=="play")return;this.stage="birth";let e=an(),n=t.summary(),s=_A(n,t.seed,e.pity);this.roll=s;let r=bc.indexOf(s.grade),a=r>=2,o=zt.getState().settings.speed||1;this.pushRun(),zt.setState({cinematic:r>=3});let l=[...t.bodies].map(h=>({b:h,v:this.views.get(h.id)})).filter(h=>h.v),c=fe.timeline({timeScale:o});this.engine.cameraTo([0,8.5,10.5],[0,1.2,0],2.2),Ji.condense();let u={t:0},f=l.map(({b:h})=>({r:Math.hypot(h.x,h.z),a:Math.atan2(h.z,h.x)}));c.to(u,{t:1,duration:1.5,ease:"power2.in",onUpdate:()=>{l.forEach(({b:h,v:d},_)=>{let v=f[_],m=v.r*(1-u.t),p=v.a+u.t*5;h.x=Math.cos(p)*m,h.z=Math.sin(p)*m,d.pop.s=1-u.t*.85}),this.disc.mass=.6+u.t*.8}}),r>=3&&c.to({},{duration:.6,onStart:()=>this.engine.shake(.05)}),c.add(()=>{for(let{b:m}of l)this.removeView(m);let h=zt.getState().settings.flash?1:.15;this.engine.flash(.95*h,.9),this.engine.shake(.35),Sc([40,30,60]);let d=a?"#ffd36a":"#ffffff";this.fx.ring(0,.2,0,d,.5,14,1.1,1),this.fx.ring(0,.25,0,a?"#ff9a3a":"#c9a8ff",.3,9,.9,.9),this.fx.burst(0,.6,0,d,40,7,.1,1.2),Ji.birth(r),fe.to(this.disc.group.scale,{x:.01,y:.01,z:.01,duration:.6,ease:"power3.in",onComplete:()=>{this.disc.group.visible=!1}});let _=new Tc(s.planet,s.variant,{radius:2.2});_.group.position.set(0,1.4,0),_.group.scale.setScalar(.01),_.setLight(new P(-.7,.5,.8)),_.setReveal(0),this.planet=_,this.root.add(_.group);let v={v:0};fe.timeline({timeScale:o}).to(_.group.scale,{x:1,y:1,z:1,duration:.9,ease:"back.out(1.6)"}).to(v,{v:1,duration:2.6,ease:"sine.inOut",onUpdate:()=>_.setReveal(v.v)},.2).add(()=>this.showResult(),"-=0.3")})}showResult(){let t=this.run,e=this.roll;if(!t||!e)return;this.stage="result";let n=t.summary(),s=an();zt.setState({cinematic:!1,result:{planetId:e.planet.id,name:e.planet.name,grade:e.grade,desc:e.planet.desc??"",seed:e.seed,composition:n.share,recipes:[...n.recipes],maxCombo:n.maxCombo,merges:n.merges,pityHit:e.pityHit,firstPlanet:!s.codex.planets.includes(e.planet.id)}}),this.pushRun(),this.engine.cameraTo([0,3,15.5],[0,-1.2,0],1.6)}pushRun(){let t=this.run;if(!t)return;let e=an(),n=Zy(t.summary(),e.pity).slice(0,4).map(a=>({id:a.planet.id,name:a.planet.hidden&&!e.codex.planets.includes(a.planet.id)?"???":a.planet.name,grade:a.planet.grade,p:a.weight})),s={turn:t.turn,turns:t.turns,choices:t.choices.map(a=>({...a})),selected:this.selected,rerolls:t.rerolls,mass:t.mass,massLimit:Ot.disc.massLimit,combo:t.combo,maxCombo:t.maxCombo,phase:this.stage==="play"?t.phase==="aim"?"aim":"falling":this.stage,odds:n,unstable:t.unstable},r=zt.getState().run;r&&JSON.stringify(r)===JSON.stringify(s)||(zt.setState({run:s}),s.phase==="aim"&&r?.phase==="falling"&&this.refreshGhost())}onQuality(t){this.disc.setScale(t)}dispose(){for(let t of this.offs)t();this.disc.dispose(),this.fx.dispose(),this.planet?.dispose(),this.aimLine.geometry.dispose(),this.aimLine.material.dispose()}},Fa={N:"#a9a3c0",R:"#6fc3ff",SR:"#ffd36a",SSR:"#ff8ad8",UR:"#b9ff6a"};var V=Va(Ph(),1),wI={low:"\uB0AE\uC74C",medium:"\uC911\uAC04",high:"\uB192\uC74C"};function Ih({id:i,size:t=44}){let e=Te(i);return(0,V.jsx)("span",{className:`orb ${e.kind==="special"?"orb--special":""}`,style:{width:t,height:t,background:`radial-gradient(circle at 35% 30%, #fff8 0, ${e.color} 32%, ${e.glow} 100%)`,boxShadow:`0 0 ${t/2.5}px ${e.glow}`},"aria-hidden":!0,children:(0,V.jsx)("i",{className:"orb__eyes"})})}function AI(){let i=zt(s=>s.goto),t=zt(s=>s.collectionCount),[e,n]=(0,Bo.useState)(null);return(0,V.jsxs)("section",{className:"title",children:[(0,V.jsx)("p",{className:"title__eyebrow",children:"\uC740\uD558 \uBCC0\uB450\uB9AC\uC758 \uC791\uC740 \uACF5\uBC29"}),(0,V.jsx)("h1",{className:"title__logo",children:"\uD589\uC131 \uACF5\uBC29"}),(0,V.jsx)("p",{className:"title__sub",children:t>0?`\uB0B4 \uC740\uD558\uC758 \uD589\uC131 ${t}\uAC1C`:"\uC774 \uC740\uD558\uB294 \uC774\uC81C \uB124\uAC00 \uCC44\uC6B0\uB294 \uAC70\uB2E4."}),(0,V.jsxs)("div",{className:"title__actions",children:[(0,V.jsx)("button",{type:"button",className:"btn btn--primary",onClick:()=>i("workshop"),children:"\uACF5\uBC29 \uC5F4\uAE30"}),(0,V.jsxs)("div",{className:"title__row",children:[t>0&&(0,V.jsx)("button",{type:"button",className:"btn",onClick:()=>i("galaxy"),children:"\uB0B4 \uC740\uD558"}),(0,V.jsx)("button",{type:"button",className:"btn",onClick:()=>n("codex"),children:"\uB3C4\uAC10"}),(0,V.jsx)("button",{type:"button",className:"btn",onClick:()=>n("rates"),children:"\uD655\uB960 \uC815\uBCF4"}),(0,V.jsx)("button",{type:"button",className:"btn",onClick:()=>n("settings"),children:"\uC124\uC815"})]})]}),e==="rates"&&(0,V.jsx)(RI,{onClose:()=>n(null)}),e==="codex"&&(0,V.jsx)(CI,{onClose:()=>n(null)}),e==="settings"&&(0,V.jsx)(DI,{onClose:()=>n(null)})]})}function ex({title:i,onClose:t,children:e}){return(0,V.jsx)("div",{className:"modal",role:"dialog","aria-modal":!0,"aria-label":i,onClick:t,children:(0,V.jsxs)("div",{className:"modal__panel",onClick:n=>n.stopPropagation(),children:[(0,V.jsxs)("header",{className:"modal__head",children:[(0,V.jsx)("h2",{children:i}),(0,V.jsx)("button",{type:"button",className:"btn btn--ghost",onClick:t,"aria-label":"\uB2EB\uAE30",children:"\u2715"})]}),(0,V.jsx)("div",{className:"modal__body",children:e})]})})}function RI({onClose:i}){let t=an().pity;return(0,V.jsxs)(ex,{title:"\uD655\uB960 \uC815\uBCF4",onClose:i,children:[(0,V.jsx)("p",{className:"muted",children:"\uD589\uC131\uC740 \uD310\uC774 \uB05D\uB0A0 \uB54C \uC6D0\uBC18\uC758 \uAD6C\uC131\uBE44\uB85C \uC815\uD574\uC9D1\uB2C8\uB2E4. \uC870\uAC74\uC744 \uCC44\uC6B4 \uD589\uC131\uB9CC \uD6C4\uBCF4\uAC00 \uB418\uACE0, \uC544\uB798 \uB4F1\uAE09 \uBC30\uC728\uC774 \uAC00\uC911\uCE58\uC5D0 \uACF1\uD574\uC9D1\uB2C8\uB2E4."}),(0,V.jsxs)("table",{className:"table",children:[(0,V.jsx)("thead",{children:(0,V.jsxs)("tr",{children:[(0,V.jsx)("th",{children:"\uB4F1\uAE09"}),(0,V.jsx)("th",{children:"\uBC30\uC728"}),(0,V.jsx)("th",{children:"\uD589\uC131"})]})}),(0,V.jsx)("tbody",{children:["N","R","SR","SSR","UR"].map(e=>(0,V.jsxs)("tr",{children:[(0,V.jsx)("td",{style:{color:Fa[e]},children:e}),(0,V.jsxs)("td",{children:["\xD7",Xn.gradeMultiplier[e]]}),(0,V.jsx)("td",{children:Pr.filter(n=>n.grade===e).map(n=>n.hidden?"???":n.name).join(", ")})]},e))})]}),(0,V.jsxs)("p",{className:"muted",children:["\uCC9C\uC7A5: SSR \uC774\uC0C1\uC774 ",Xn.pity.softStart,"\uD310 \uB3D9\uC548 \uC548 \uB098\uC624\uBA74 \uD310\uB9C8\uB2E4 SSR \uC774\uC0C1 \uAC00\uC911\uCE58\uAC00 ",Math.round(Xn.pity.softStep*100),"%\uC529 \uC624\uB974\uACE0, ",Xn.pity.hardAt,"\uD310\uC9F8\uC5D0\uB294 \uC870\uAC74\uC744 \uCC44\uC6B4 SSR \uD6C4\uBCF4\uAC00 \uC788\uC73C\uBA74 \uD655\uC815\uC785\uB2C8\uB2E4. \uD604\uC7AC ",t,"\uD310\uC9F8."]})]})}function CI({onClose:i}){let t=an(),e=new Set(t.codex.recipes),n=new Set(t.codex.planets);return(0,V.jsxs)(ex,{title:"\uB3C4\uAC10",onClose:i,children:[(0,V.jsxs)("h3",{children:["\uB808\uC2DC\uD53C ",e.size,"/",Ur.length]}),(0,V.jsx)("ul",{className:"codex",children:Ur.map(s=>(0,V.jsxs)("li",{className:e.has(s.id)?"":"is-locked",children:[e.has(s.id)?(0,V.jsx)(Ih,{id:s.output,size:28}):(0,V.jsx)("span",{className:"orb orb--locked",style:{width:28,height:28}}),(0,V.jsxs)("span",{children:[(0,V.jsx)("b",{children:e.has(s.id)?Te(s.output).name:"???"}),(0,V.jsx)("small",{children:s.hint})]})]},s.id))}),(0,V.jsxs)("h3",{children:["\uD589\uC131 ",n.size,"/",Pr.length]}),(0,V.jsx)("ul",{className:"codex",children:Pr.map(s=>(0,V.jsxs)("li",{className:n.has(s.id)?"":"is-locked",children:[(0,V.jsx)("span",{className:"grade-chip",style:{color:Fa[s.grade],borderColor:Fa[s.grade]},children:s.grade}),(0,V.jsxs)("span",{children:[(0,V.jsx)("b",{children:n.has(s.id)?s.name:s.hidden?"???":`${s.name} (\uBBF8\uBC1C\uACAC)`}),(0,V.jsx)("small",{children:n.has(s.id)?s.desc:s.hidden?"\uC228\uACA8\uC9C4 \uD589\uC131":"\uC544\uC9C1 \uB9CC\uB4E4\uC9C0 \uBABB\uD588\uC5B4\uC694"})]})]},s.id))}),(0,V.jsx)("h3",{children:"\uC6D0\uC18C"}),(0,V.jsx)("div",{className:"orbs",children:Yy.map(s=>(0,V.jsxs)("span",{className:"orbs__item",title:s.hint,children:[(0,V.jsx)(Ih,{id:s.id,size:26}),(0,V.jsx)("small",{children:s.name})]},s.id))})]})}function DI({onClose:i}){let t=zt(s=>s.settings),e=zt(s=>s.toggle),n=zt(s=>s.setVolume);return(0,V.jsxs)(ex,{title:"\uC124\uC815",onClose:i,children:[(0,V.jsxs)("label",{className:"row",children:[(0,V.jsx)("span",{children:"\uD6A8\uACFC\uC74C"}),(0,V.jsx)("input",{type:"range",min:0,max:1,step:.05,value:t.volume.master,onChange:s=>n(Number(s.target.value))})]}),(0,V.jsxs)("label",{className:"row",children:[(0,V.jsx)("span",{children:"\uD654\uBA74 \uD754\uB4E4\uB9BC"}),(0,V.jsx)("input",{type:"checkbox",checked:t.shake,onChange:()=>e("shake")})]}),(0,V.jsxs)("label",{className:"row",children:[(0,V.jsx)("span",{children:"\uD654\uBA74 \uBC88\uCA4D\uC784 (\uAD11\uACFC\uBBFC\uC131 \uC8FC\uC758)"}),(0,V.jsx)("input",{type:"checkbox",checked:t.flash,onChange:()=>e("flash")})]}),(0,V.jsxs)("div",{className:"row",children:[(0,V.jsx)("span",{children:"\uADF8\uB798\uD53D \uD488\uC9C8"}),(0,V.jsx)(NI,{})]})]})}function NI(){let i=zt(e=>e.settings.quality),t=zt(e=>e.setQuality);return(0,V.jsx)("div",{className:"seg",role:"group","aria-label":"\uADF8\uB798\uD53D \uD488\uC9C8",children:iA.map(e=>(0,V.jsx)("button",{type:"button",className:e===i?"seg__btn is-on":"seg__btn","aria-pressed":e===i,onClick:()=>t(e),children:wI[e]},e))})}function LI(){let i=zt(l=>l.goto),t=zt(l=>l.run),e=zt(l=>l.select),n=zt(l=>l.reroll),s=zt(l=>l.result);if(!t)return null;let r=Math.min(1,t.mass/t.massLimit),a=t.turns-t.turn,o=t.phase==="aim"||t.phase==="falling";return(0,V.jsxs)("section",{className:"hud",children:[(0,V.jsxs)("header",{className:"hud__top",children:[(0,V.jsx)("button",{type:"button",className:"btn btn--ghost",onClick:()=>i("title"),children:"\u2190 \uD0C0\uC774\uD2C0"}),(0,V.jsxs)("div",{className:"hud__stat",children:[(0,V.jsx)("span",{className:"hud__label",children:"\uB0A8\uC740 \uD134"}),(0,V.jsx)("span",{className:"hud__value",children:a})]}),(0,V.jsxs)("div",{className:`hud__stat hud__mass ${r>.8||t.unstable?"is-warn":""}`,children:[(0,V.jsx)("span",{className:"hud__label",children:t.unstable?"\uBD88\uC548\uC815!":"\uC6D0\uBC18 \uC9C8\uB7C9"}),(0,V.jsxs)("span",{className:"hud__value",children:[t.mass,(0,V.jsxs)("small",{children:[" / ",t.massLimit]})]}),(0,V.jsx)("span",{className:"bar",children:(0,V.jsx)("i",{style:{width:`${r*100}%`}})})]})]}),o&&(0,V.jsxs)("aside",{className:"gauge","aria-label":"\uC608\uC0C1 \uACB0\uACFC",children:[(0,V.jsx)("p",{className:"gauge__title",children:"\uC608\uC0C1 \uACB0\uACFC"}),t.odds.map(l=>(0,V.jsxs)("div",{className:"gauge__row",children:[(0,V.jsx)("span",{className:"gauge__grade",style:{color:Fa[l.grade]},children:l.grade}),(0,V.jsx)("span",{className:"gauge__name",children:l.name}),(0,V.jsx)("span",{className:"gauge__bar",children:(0,V.jsx)("i",{style:{width:`${Math.max(3,l.p*100)}%`,background:Fa[l.grade]}})}),(0,V.jsxs)("span",{className:"gauge__p",children:[Math.round(l.p*100),"%"]})]},l.id))]}),o&&(0,V.jsxs)("footer",{className:"hud__bottom",children:[(0,V.jsx)("p",{className:"hud__hint",children:t.phase==="aim"?"\uC6D0\uBC18 \uB458\uB808\uB97C \uB20C\uB7EC \uB5A8\uC5B4\uB728\uB9AC\uC138\uC694":"\uC6D0\uC18C\uAC00 \uC790\uB9AC \uC7A1\uB294 \uC911\u2026"}),(0,V.jsxs)("div",{className:"choices",role:"radiogroup","aria-label":"\uB2E4\uC74C \uC6D0\uC18C",children:[t.choices.map((l,c)=>{let u=Te(l.el);return(0,V.jsxs)("button",{type:"button",role:"radio","aria-checked":c===t.selected,className:`choice ${c===t.selected?"is-on":""} ${u.kind==="special"?"choice--special":""}`,disabled:t.phase!=="aim",onClick:()=>e(c),title:u.hint,children:[(0,V.jsx)(Ih,{id:l.el,size:c===t.selected?46:38}),(0,V.jsxs)("span",{className:"choice__name",children:[u.name,l.count>1&&(0,V.jsxs)("b",{children:[" \xD7",l.count]})]})]},`${l.el}-${c}`)}),(0,V.jsxs)("button",{type:"button",className:"choice choice--reroll",disabled:t.rerolls<=0||t.phase!=="aim",onClick:n,"aria-label":`\uB9AC\uB864 ${t.rerolls}\uD68C \uB0A8\uC74C`,children:[(0,V.jsx)("span",{className:"reroll",children:"\u21BB"}),(0,V.jsxs)("span",{className:"choice__name",children:["\uB9AC\uB864 ",t.rerolls]})]})]})]}),s&&(0,V.jsx)(OI,{})]})}function OI(){let i=zt(o=>o.result),t=zt(o=>o.register),e=zt(o=>o.newRun),[n,s]=(0,Bo.useState)(i.name),r=Fa[i.grade],a=Object.entries(i.composition).sort((o,l)=>l[1]-o[1]).slice(0,5);return(0,V.jsx)("div",{className:`result grade-${i.grade}`,style:{"--grade":r},children:(0,V.jsxs)("div",{className:"result__card",children:[(0,V.jsx)("div",{className:"result__grade",children:i.grade}),(0,V.jsxs)("p",{className:"result__type",children:[Mc[i.planetId]?.name,i.firstPlanet&&(0,V.jsx)("span",{className:"tag",children:"NEW"}),i.pityHit&&(0,V.jsx)("span",{className:"tag",children:"\uCC9C\uC7A5"})]}),(0,V.jsx)("input",{className:"result__name",value:n,maxLength:16,onChange:o=>s(o.target.value),"aria-label":"\uD589\uC131 \uC774\uB984"}),(0,V.jsx)("p",{className:"result__desc",children:i.desc}),(0,V.jsx)("div",{className:"result__comp",children:a.map(([o,l])=>(0,V.jsxs)("span",{className:"comp",children:[(0,V.jsx)(Ih,{id:o,size:18}),Te(o).name," ",Math.round(l*100),"%"]},o))}),(0,V.jsxs)("p",{className:"result__stats",children:["\uD569\uCCB4 ",i.merges,"\uD68C \xB7 \uCD5C\uB300 \uCF64\uBCF4 ",i.maxCombo," \xB7 \uBC18\uC751 ",i.recipes.length,"\uC885"]}),(0,V.jsxs)("div",{className:"result__actions",children:[(0,V.jsx)("button",{type:"button",className:"btn btn--primary",onClick:()=>t(n),children:"\uC740\uD558\uC5D0 \uB4F1\uB85D"}),(0,V.jsx)("button",{type:"button",className:"btn",onClick:e,children:"\uBC84\uB9AC\uACE0 \uD55C \uD310 \uB354"})]})]})})}function UI(){let i=zt(n=>n.goto),t=zt(n=>n.collectionCount),e=zt(n=>n.galaxySel);return(0,V.jsxs)("section",{className:"hud",children:[(0,V.jsxs)("header",{className:"hud__top",children:[(0,V.jsx)("button",{type:"button",className:"btn btn--ghost",onClick:()=>i("title"),children:"\u2190 \uD0C0\uC774\uD2C0"}),(0,V.jsxs)("div",{className:"hud__stat",children:[(0,V.jsx)("span",{className:"hud__label",children:"\uB0B4 \uC740\uD558"}),(0,V.jsx)("span",{className:"hud__value",children:t})]})]}),e?(0,V.jsxs)("div",{className:"planet-info",style:{"--grade":Fa[e.grade]},children:[(0,V.jsx)("span",{className:"grade-chip",children:e.grade}),(0,V.jsx)("h2",{children:e.name}),(0,V.jsxs)("p",{className:"muted",children:[Mc[e.type]?.name," \xB7 ",new Date(e.bornAt).toLocaleDateString("ko-KR")," \uD0C4\uC0DD"]}),(0,V.jsx)("div",{className:"result__comp",children:Object.entries(e.composition).sort((n,s)=>s[1]-n[1]).slice(0,4).map(([n,s])=>(0,V.jsxs)("span",{className:"comp",children:[(0,V.jsx)(Ih,{id:n,size:16}),Te(n).name," ",Math.round(s*100),"%"]},n))})]}):(0,V.jsx)("p",{className:"hud__hint hud__hint--top",children:"\uD589\uC131\uC744 \uB204\uB974\uBA74 \uAC00\uAE4C\uC774 \uBCFC \uC218 \uC788\uC5B4\uC694"}),(0,V.jsx)("footer",{className:"hud__bottom",children:(0,V.jsx)("button",{type:"button",className:"btn btn--primary",onClick:()=>i("workshop"),children:"\uC0C8 \uD589\uC131 \uB9CC\uB4E4\uAE30"})})]})}function PI(){let i=zt(t=>t.pops);return(0,V.jsx)("div",{className:"pops","aria-live":"polite",children:i.map(t=>(0,V.jsxs)("div",{className:`pop pop--${t.kind}`,style:{left:t.x,top:t.y,"--s":t.scale??1},children:[(0,V.jsx)("b",{children:t.text}),t.sub&&(0,V.jsx)("small",{children:t.sub})]},t.id))})}function TA(){let i=zt(s=>s.scene),t=zt(s=>s.cinematic),e=zt(s=>s.settings.shake),n=(0,Bo.useRef)(e);return(0,Bo.useEffect)(()=>{n.current=e,globalThis.__PW_DEBUG__?.setShake?.(e)},[e]),(0,V.jsxs)("div",{className:`ui ui--${i} ${t?"is-cinematic":""}`,children:[i==="title"&&(0,V.jsx)(AI,{}),i==="workshop"&&(0,V.jsx)(LI,{}),i==="galaxy"&&(0,V.jsx)(UI,{}),(0,V.jsx)(PI,{}),(0,V.jsx)("div",{className:"letterbox letterbox--top"}),(0,V.jsx)("div",{className:"letterbox letterbox--bottom"})]})}var wA=Va(Ph(),1);function II(){let i=document.getElementById("stage"),t=document.getElementById("ui");if(!(i instanceof HTMLCanvasElement)||!t)throw new Error("index.html\uC5D0 #stage \uB610\uB294 #ui\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4");let{scene:e,settings:n}=zt.getState(),s=new Im(i,n.quality,e);s.shakeEnabled=n.shake,s.register(new Ym(s)),s.register(new Vm(s)),s.start(e),globalThis.__PW_DEBUG__={stats:()=>s.stats(),camera:()=>s.camera.position.toArray().map(r=>+r.toFixed(2)),flash:r=>s.flash(zt.getState().settings.flash?r:0),setShake:r=>s.shakeEnabled=r,state:()=>zt.getState()},(0,EA.createRoot)(t).render((0,wA.jsx)(TA,{})),zt.getState().setReady()}II();
/*! For license information please see main.js.LEGAL.txt */
