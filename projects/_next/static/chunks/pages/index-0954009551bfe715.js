(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(b,a){"use strict";a.Z=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}},5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(8694)}])},8045:function(e,a,b){"use strict";var c,f=b(9361).Z,g=b(4941).Z,h=b(3929).Z;Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a){var F,G,c=a.src,H=a.sizes,Q=a.unoptimized,E=void 0!==Q&&Q,R=a.priority,S=void 0!==R&&R,I=a.loading,T=a.lazyRoot,ae=void 0===T?null:T,af=a.lazyBoundary,ag=a.className,ah=a.quality,J=a.width,K=a.height,ai=a.style,U=a.objectFit,V=a.objectPosition,W=a.onLoadingComplete,X=a.placeholder,Y=void 0===X?"empty":X,L=a.blurDataURL,aj=q(a,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),ak=i.useContext(m.ImageConfigContext),Z=i.useMemo(function(){var a=s||ak||k.imageConfigDefault,b=h(a.deviceSizes).concat(h(a.imageSizes)).sort(function(a,b){return a-b}),c=a.deviceSizes.sort(function(a,b){return a-b});return o({},a,{allSizes:b,deviceSizes:c})},[ak]),d=aj,e=H?"responsive":"intrinsic";"layout"in d&&(d.layout&&(e=d.layout),delete d.layout);var M=A;if("loader"in d){if(d.loader){var ay,az=d.loader;M=function(a){a.config;var b=q(a,["config"]);return az(b)}}delete d.loader}var $="";if(x(c)){var n=w(c)?c.default:c;if(!n.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(n)));if(L=L||n.blurDataURL,$=n.src,(!e||"fill"!==e)&&(K=K||n.height,J=J||n.width,!n.height||!n.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(n)))}c="string"==typeof c?c:$;var v=z(J),B=z(K),_=z(ah),D=!S&&("lazy"===I|| void 0===I);(c.startsWith("data:")||c.startsWith("blob:"))&&(E=!0,D=!1),t.has(c)&&(D=!1),r&&(E=!0);var aa=g(i.useState(!1),2),al=aa[0],am=aa[1],N=g(l.useIntersection({rootRef:ae,rootMargin:af||"200px",disabled:!D}),3),an=N[0],ao=N[1],ap=N[2],ab=!D||ao,b={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},O={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},P=!1,aq=Object.assign({},ai,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:U,objectPosition:V}),ar="blur"!==Y||al?{}:{backgroundSize:U||"cover",backgroundPosition:V||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(L,'")')};if("fill"===e)b.display="block",b.position="absolute",b.top=0,b.left=0,b.bottom=0,b.right=0;else if(void 0!==v&& void 0!==B){var ac=B/v,as=isNaN(ac)?"100%":"".concat(100*ac,"%");"responsive"===e?(b.display="block",b.position="relative",P=!0,O.paddingTop=as):"intrinsic"===e?(b.display="inline-block",b.position="relative",b.maxWidth="100%",P=!0,O.maxWidth="100%",F="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(v,"%27%20height=%27").concat(B,"%27/%3e")):"fixed"===e&&(b.display="inline-block",b.position="relative",b.width=v,b.height=B)}var p={src:u,srcSet:void 0,sizes:void 0};ab&&(p=y({config:Z,src:c,unoptimized:E,layout:e,width:v,quality:_,sizes:H,loader:M}));var at=c,aA="imagesrcset",ad="imagesizes";ad="imageSizes";var au=(f(G={},"imageSrcSet",p.srcSet),f(G,ad,p.sizes),G),av=i.default.useLayoutEffect,aw=i.useRef(W),aB=i.useRef(c);i.useEffect(function(){aw.current=W},[W]),av(function(){aB.current!==c&&(ap(),aB.current=c)},[ap,c]);var ax=o({isLazy:D,imgAttributes:p,heightInt:B,widthInt:v,qualityInt:_,layout:e,className:ag,imgStyle:aq,blurStyle:ar,loading:I,config:Z,unoptimized:E,placeholder:Y,loader:M,srcString:at,onLoadingCompleteRef:aw,setBlurComplete:am,setIntersection:an,isVisible:ab,noscriptSizes:H},d);return i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:b},P?i.default.createElement("span",{style:O},F?i.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:F}):null):null,i.default.createElement(C,Object.assign({},ax))),S?i.default.createElement(j.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+p.src+p.srcSet+p.sizes,rel:"preload",as:"image",href:p.srcSet?void 0:p.src},au))):null)};var i=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=p();if(b&&b.has(a))return b.get(a);var c={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=f?Object.getOwnPropertyDescriptor(a,d):null;e&&(e.get||e.set)?Object.defineProperty(c,d,e):c[d]=a[d]}return c.default=a,b&&b.set(a,c),c}(b(7294)),j=(c=b(5443),c&&c.__esModule?c:{default:c}),k=b(9309),l=b(7190),m=b(9977);b(3794);var n=b(2392);function o(){return(o=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function p(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return p=function(){return a},a}function q(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}var d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalUnoptimized:!0},r=(d.experimentalRemotePatterns,d.experimentalUnoptimized),s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalUnoptimized:!0},t=new Set,u="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",v=new Map([["default",function(a){var c=a.config,b=a.src,d=a.width,e=a.quality;return b.endsWith(".svg")&&!c.dangerouslyAllowSVG?b:"".concat(n.normalizePathTrailingSlash(c.path),"?url=").concat(encodeURIComponent(b),"&w=").concat(d,"&q=").concat(e||75)}],["imgix",function(b){var e=b.config,f=b.src,g=b.width,c=b.quality,d=new URL("".concat(e.path).concat(D(f))),a=d.searchParams;return a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||g.toString()),c&&a.set("q",c.toString()),d.href}],["cloudinary",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=["f_auto","c_limit","w_"+d,"q_"+(e||"auto")].join(",")+"/";return"".concat(b.path).concat(f).concat(D(c))}],["akamai",function(a){var b=a.config,c=a.src,d=a.width;return"".concat(b.path).concat(D(c),"?imwidth=").concat(d)}],["custom",function(a){var b=a.src;throw Error('Image with src "'.concat(b,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(a){return void 0!==a.default}function x(a){var b;return"object"==typeof a&&(w(a)|| void 0!==(b=a).src)}function y(a){var d=a.config,e=a.src,g=a.unoptimized,i=a.layout,j=a.width,k=a.quality,b=a.sizes,l=a.loader;if(g)return{src:e,srcSet:void 0,sizes:void 0};var f=function(d,b,a,e){var i=d.deviceSizes,f=d.allSizes;if(e&&("fill"===a||"responsive"===a)){for(var j=/(^|\s)(1?\d?\d)vw/g,c=[];k=j.exec(e);k)c.push(parseInt(k[2]));if(c.length){var k,g,l=.01*(g=Math).min.apply(g,h(c));return{widths:f.filter(function(a){return a>=i[0]*l}),kind:"w"}}return{widths:f,kind:"w"}}return"number"!=typeof b||"fill"===a||"responsive"===a?{widths:i,kind:"w"}:{widths:h(new Set([b,2*b].map(function(a){return f.find(function(b){return b>=a})||f[f.length-1]}))),kind:"x"}}(d,j,i,b),c=f.widths,m=f.kind,n=c.length-1;return{sizes:b||"w"!==m?b:"100vw",srcSet:c.map(function(a,b){return"".concat(l({config:d,src:e,quality:k,width:a})," ").concat("w"===m?a:b+1).concat(m)}).join(", "),src:l({config:d,src:e,quality:k,width:c[n]})}}function z(a){return"number"==typeof a?a:"string"==typeof a?parseInt(a,10):void 0}function A(a){var b,c=(null==(b=a.config)?void 0:b.loader)||"default",d=v.get(c);if(d)return d(a);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(k.VALID_LOADERS.join(", "),". Received: ").concat(c))}function B(a,b,c,d,e,f){a&&a.src!==u&&a["data-loaded-src"]!==b&&(a["data-loaded-src"]=b,("decode"in a?a.decode():Promise.resolve()).catch(function(){}).then(function(){if(a.parentNode&&(t.add(b),"blur"===d&&f(!0),null==e?void 0:e.current)){var c=a.naturalWidth,g=a.naturalHeight;e.current({naturalWidth:c,naturalHeight:g})}}))}var C=function(a){var k=a.imgAttributes,l=(a.heightInt,a.widthInt),m=a.qualityInt,b=a.layout,d=a.className,e=a.imgStyle,n=a.blurStyle,f=a.isLazy,g=a.placeholder,c=a.loading,h=a.srcString,p=a.config,r=a.unoptimized,s=a.loader,t=a.onLoadingCompleteRef,u=a.setBlurComplete,v=a.setIntersection,x=a.onLoad,z=a.onError,w=(a.isVisible,a.noscriptSizes),j=q(a,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return c=f?"lazy":c,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",Object.assign({},j,k,{decoding:"async","data-nimg":b,className:d,style:o({},e,n),ref:i.useCallback(function(a){v(a),(null==a?void 0:a.complete)&&B(a,h,b,g,t,u)},[v,h,b,g,t,u,]),onLoad:function(a){B(a.currentTarget,h,b,g,t,u),x&&x(a)},onError:function(a){"blur"===g&&u(!0),z&&z(a)}})),(f||"blur"===g)&&i.default.createElement("noscript",null,i.default.createElement("img",Object.assign({},j,y({config:p,src:h,unoptimized:r,layout:b,width:l,quality:m,sizes:w,loader:s}),{decoding:"async","data-nimg":b,style:e,className:d,loading:c}))))};function D(a){return"/"===a[0]?a.slice(1):a}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},7190:function(c,a,b){"use strict";var d=b(4941).Z;Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(a){var j=a.rootRef,k=a.rootMargin,l=a.disabled||!g,p=e.useRef(),b=d(e.useState(!1),2),c=b[0],q=b[1],i=d(e.useState(null),2),m=i[0],n=i[1];e.useEffect(function(){if(g){if(p.current&&(p.current(),p.current=void 0),!l&&!c)return m&&m.tagName&&(p.current=h(m,function(a){return a&&q(a)},{root:null==j?void 0:j.current,rootMargin:k})),function(){null==p.current||p.current(),p.current=void 0}}else if(!c){var a=f.requestIdleCallback(function(){return q(!0)});return function(){return f.cancelIdleCallback(a)}}},[m,l,k,j,c]);var o=e.useCallback(function(){q(!1)},[]);return[n,c,o]};var e=b(7294),f=b(9311),g="function"==typeof IntersectionObserver;function h(b,c,d){var a=k(d),g=a.id,e=a.observer,f=a.elements;return f.set(b,c),e.observe(b),function(){if(f.delete(b),e.unobserve(b),0===f.size){e.disconnect(),i.delete(g);var a=j.findIndex(function(a){return a.root===g.root&&a.margin===g.margin});a> -1&&j.splice(a,1)}}}var i=new Map,j=[];function k(b){var a,c={root:b.root||null,margin:b.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(a=i.get(d)))return a;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},b);return a={id:c,observer:f,elements:e},j.push(c),i.set(c,a),a}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),c.exports=a.default)},8694:function(d,b,a){"use strict";a.r(b),a.d(b,{default:function(){return l}});var e=a(5893);a(9008);var c=a(5675),f=a.n(c),g={src:"/_next/static/media/logo.f60ff2bd.png",height:545,width:575,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAk0lEQVR42gGIAHf/AIwAlhGepKzru+jHmcwJ1gAAfAqMzpn/qv+9/8z/1r7/AQB7h4D/jvmm/sD+1fnf/+NwAG7Kcf92/Zn/2//l/ej/67UAX8Zf/1v9Sv+5//r8+v/zsQBSdk3/Q/oj/QD9fvvk//5gAAAAQbY1/yf/J/8A/xWlAAAAPgAAAjB/JMwUyTJ0dQCfAMV/TpM5eQd3AAAAAElFTkSuQmCC"},h={src:"/_next/static/media/temper.9ef3e91a.png",height:295,width:295,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8klEQVR4nBWOTUrDUBSF73l/SSUZdNDSPYjooAgKVVfhVAriOlqwLkIXUxxkJlTEieBA1E5sQWhIm/Q27/ZlfA7f9+H75pcgqm+9eTJiTkhIBDLTpG/Xej3Dx/DzLBI3hSBqxtjHBAJKlEVhiit8DX/ea787XPKSV/XKOjjquA4nOrFE9Irp9bPM87mwMFqmRV7qACLquq604zYwuXzgvMqNIkW9pEepSUlB06L8o6IuthgNxpmGPveVZ95srbMRmQPDgWhFJMP9xeSo+q8yKSUFIF48NZXKqDyEDzA6HRMv+FjF6jHI+0HfJLyE5104vu0BNVhxDdmwQxcAAAAASUVORK5CYII="},i={src:"/_next/static/media/speeduphosting.74580aa7.png",height:388,width:388,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA10lEQVR42mMAAYvgRcwg2jJ0CXt0wx8WENs6qJ+RAQRMAheAGGDgEj5DxcK3s8QubJ4siG/u3czEAAKWIYuSrEIWLLMJXzZBxy5lmZq+jDgDMjAPnr/aOmzZMqugmZNVjd3nw8R1LF35GLzDS3ntotblWoXMmapq4nVMXt/2m661r5KKkVOUsqHjEgZ1M78ubbucI2pmIeuU9HSDFQ2cngMlFykaOL5QMnBsZVDUM9eW1WDwBhmpbuqlrGLkOBXEVjV2rlc1dvJmQAb6Fk4sDCAgpM8EEwMAFYA1Kbd8xZIAAAAASUVORK5CYII="};function j(a){return(0,e.jsxs)("div",{className:"planbutton",children:[(0,e.jsx)("button",{className:"inline-block",children:(0,e.jsx)(f(),{src:a.img,alt:a.alt,width:186,height:186,loading:"lazy"})}),(0,e.jsx)("p",{className:"font-semibold text-white text-xl",children:a.alt}),(0,e.jsxs)("p",{className:"font-light text-white text-lg",children:["\u2022 ",(0,e.jsx)("span",{className:"font-medium",children:"Work done on project:"})," ",(0,e.jsx)("br",{})," ",(0,e.jsxs)("span",{className:"text-lime-400",children:[" ",a.work," "]}),(0,e.jsx)("br",{}),"\u2022 ",(0,e.jsx)("span",{className:"font-medium",children:"Languages used: "})," ",(0,e.jsx)("br",{})," ",(0,e.jsxs)("span",{className:"text-cyan-400",children:[" ",a.languages," "]}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{})]}),(0,e.jsx)("div",{className:"z-20",children:(0,e.jsx)("a",{href:a.website,children:(0,e.jsx)("button",{alt:"Visit",className:"inline-block align-middle button",children:"Visit"})})})]})}function k(a){return"["+a.join("], [")+"]"}a(4298);var l=function(){return(0,e.jsxs)("div",{children:[(0,e.jsx)("title",{children:"LucaForever's Website"}),(0,e.jsxs)("nav",{className:"nav",children:[(0,e.jsx)("a",{href:"https://lucaforever.com",className:"float-right py-[16px]",children:"Home"}),(0,e.jsx)("a",{href:".",className:"float-right py-[16px]",children:"Projects"}),(0,e.jsx)("a",{href:"#about",className:"float-right py-[16px]",children:"About Me"}),(0,e.jsx)("a",{href:"#contact",className:"float-right py-[16px]",children:"Contact"}),(0,e.jsx)("a",{href:"https://lucaforever.com",className:"float-left py-[10px]",children:(0,e.jsx)(f(),{src:g,alt:"logo",width:36,height:36,loading:"lazy"})})]}),(0,e.jsx)("div",{className:"background blur-[9px]"}),(0,e.jsxs)("div",{className:"absolute w-full h-full text-slate-200 z-5",children:[(0,e.jsx)("div",{className:"flex w-full h-3/6 items-center justify-center flex-col",children:(0,e.jsx)("span",{className:"text-4xl drop-shadow-2x bg-slightblack w-[12.5rem] h-[3rem] rounded-2xl text-center",children:"Projects"})}),(0,e.jsxs)("div",{className:"flex w-full h-1/6 items-center justify-center flex-row gap-4",children:[(0,e.jsx)(j,{img:h,alt:"Temper Client",website:"https://temper.tk/",work:k(["Main Application","Website","API","Backend"]),languages:k(["Java","JavaScript","C#","Bash","HTML","CSS"])}),(0,e.jsx)(j,{img:i,alt:"SpeedUp Hosting",website:"https://speeduphosting.com/",int:1,work:k(["Cloudflare Backend","Website"]),languages:k(["JavaScript","HTML","CSS"])})]})]})]})}},9008:function(b,c,a){a(5443)},5675:function(a,c,b){a.exports=b(8045)},4298:function(b,c,a){a(699)}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])