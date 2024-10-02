import{r as Ce,_ as Pe,R as mt,b as Ee,c as Se,P as m,d as gn}from"./index-aI191j7q.js";var Ut=Ce.forwardRef(function(t,e){var n=t.children,a=t.active,r=t.as,i=r===void 0?"a":r,s=t.className,o=t.disabled,c=Pe(t,["children","active","as","className","disabled"]);return mt.createElement(i,Ee({className:Se(s,{active:a,disabled:o})},a&&{"aria-current":"page"},i==="a"&&o&&{"aria-disabled":!0,tabIndex:-1},(i==="a"||i==="button")&&{onClick:function(l){l.preventDefault,!o&&c.onClick&&c.onClick(l)}},{disabled:o},c,{ref:e}),n)});Ut.propTypes={active:m.bool,as:m.elementType,children:m.node,className:m.string,disabled:m.bool};Ut.displayName="CLink";var Ie=Ce.forwardRef(function(t,e){var n,a=t.children,r=t.as,i=r===void 0?"button":r,s=t.className,o=t.color,c=t.shape,l=t.size,u=t.type,p=u===void 0?"button":u,d=t.variant,b=Pe(t,["children","as","className","color","shape","size","type","variant"]);return mt.createElement(Ut,Ee({as:b.href?"a":i},!b.href&&{type:p},{className:Se("btn",(n={},n["btn-".concat(o)]=o&&!d,n["btn-".concat(d,"-").concat(o)]=o&&d,n["btn-".concat(l)]=l,n),c,s)},b,{ref:e}),a)});Ie.propTypes={as:m.elementType,children:m.node,className:m.string,color:gn,shape:m.string,size:m.oneOf(["sm","lg"]),type:m.oneOf(["button","submit","reset"]),variant:m.oneOf(["outline","ghost"])};Ie.displayName="CButton";const Zt=()=>{};let Wt={},Le={},Me=null,Te={mark:Zt,measure:Zt};try{typeof window<"u"&&(Wt=window),typeof document<"u"&&(Le=document),typeof MutationObserver<"u"&&(Me=MutationObserver),typeof performance<"u"&&(Te=performance)}catch{}const{userAgent:te=""}=Wt.navigator||{},j=Wt,g=Le,ee=Me,st=Te;j.document;const _=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",ze=~te.indexOf("MSIE")||~te.indexOf("Trident/");var h="classic",_e="duotone",O="sharp",w="sharp-duotone",hn=[h,_e,O,w],bn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},ne={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},yn=["kit"],vn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,xn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,An={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},kn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},On={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},wn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Nn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Cn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Fe={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Pn=["solid","regular","light","thin","duotone","brands"],Re=[1,2,3,4,5,6,7,8,9,10],En=Re.concat([11,12,13,14,15,16,17,18,19,20]),J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sn=[...Object.keys(wn),...Pn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY].concat(Re.map(t=>"".concat(t,"x"))).concat(En.map(t=>"w-".concat(t))),In={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ln={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Mn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ae={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const T="___FONT_AWESOME___",wt=16,je="fa",De="svg-inline--fa",X="data-fa-i2svg",Nt="data-fa-pseudo-element",Tn="data-fa-pseudo-element-pending",Ht="data-prefix",Xt="data-icon",re="fontawesome-i2svg",zn="async",_n=["HTML","HEAD","STYLE","SCRIPT"],Ye=(()=>{try{return!0}catch{return!1}})(),Ue=[h,O,w];function rt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[h]}})}const We={...Fe};We[h]={...Fe[h],...ne.kit,...ne["kit-duotone"]};const W=rt(We),Ct={...Cn};Ct[h]={...Ct[h],...ae.kit,...ae["kit-duotone"]};const nt=rt(Ct),Pt={...Nn};Pt[h]={...Pt[h],...Mn.kit};const H=rt(Pt),Et={...On};Et[h]={...Et[h],...Ln.kit};const Fn=rt(Et),Rn=vn,He="fa-layers-text",jn=xn,Dn={...bn};rt(Dn);const Yn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yt=J,K=new Set;Object.keys(nt[h]).map(K.add.bind(K));Object.keys(nt[O]).map(K.add.bind(K));Object.keys(nt[w]).map(K.add.bind(K));const Un=[...yn,...Sn],tt=j.FontAwesomeConfig||{};function Wn(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Hn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Hn(Wn(n));r!=null&&(tt[a]=r)});const Xe={styleDefault:"solid",familyDefault:"classic",cssPrefix:je,replacementClass:De,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tt.familyPrefix&&(tt.cssPrefix=tt.familyPrefix);const q={...Xe,...tt};q.autoReplaceSvg||(q.observeMutations=!1);const f={};Object.keys(Xe).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(e){q[t]=e,et.forEach(n=>n(f))},get:function(){return q[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,et.forEach(e=>e(f))},get:function(){return q.cssPrefix}});j.FontAwesomeConfig=f;const et=[];function Xn(t){return et.push(t),()=>{et.splice(et.indexOf(t),1)}}const F=wt,S={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Gn(t){if(!t||!_)return;const e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=g.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return g.head.insertBefore(e,a),t}const Bn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function at(){let t=12,e="";for(;t-- >0;)e+=Bn[Math.random()*62|0];return e}function Q(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Gt(t){return t.classList?Q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ge(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $n(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ge(t[n]),'" '),"").trim()}function dt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Bt(t){return t.size!==S.size||t.x!==S.x||t.y!==S.y||t.rotate!==S.rotate||t.flipX||t.flipY}function Vn(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(s," ").concat(o)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:l}}function Kn(t){let{transform:e,width:n=wt,height:a=wt,startCentered:r=!1}=t,i="";return r&&ze?i+="translate(".concat(e.x/F-n/2,"em, ").concat(e.y/F-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/F,"em), calc(-50% + ").concat(e.y/F,"em)) "):i+="translate(".concat(e.x/F,"em, ").concat(e.y/F,"em) "),i+="scale(".concat(e.size/F*(e.flipX?-1:1),", ").concat(e.size/F*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var qn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Be(){const t=je,e=De,n=f.cssPrefix,a=f.replacementClass;let r=qn;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let ie=!1;function vt(){f.autoAddCss&&!ie&&(Gn(Be()),ie=!0)}var Qn={mixout(){return{dom:{css:Be,insertCss:vt}}},hooks(){return{beforeDOMElementCreation(){vt()},beforeI2svg(){vt()}}}};const z=j||{};z[T]||(z[T]={});z[T].styles||(z[T].styles={});z[T].hooks||(z[T].hooks={});z[T].shims||(z[T].shims=[]);var I=z[T];const $e=[],Ve=function(){g.removeEventListener("DOMContentLoaded",Ve),lt=1,$e.map(t=>t())};let lt=!1;_&&(lt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),lt||g.addEventListener("DOMContentLoaded",Ve));function Jn(t){_&&(lt?setTimeout(t,0):$e.push(t))}function it(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ge(t):"<".concat(e," ").concat($n(n),">").concat(a.map(it).join(""),"</").concat(e,">")}function se(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var xt=function(e,n,a,r){var i=Object.keys(e),s=i.length,o=n,c,l,u;for(a===void 0?(c=1,u=e[i[0]]):(c=0,u=a);c<s;c++)l=i[c],u=o(u,e[l],l,e);return u};function Zn(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function St(t){const e=Zn(t);return e.length===1?e[0].toString(16):null}function ta(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function oe(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function It(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=oe(e);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,oe(e)):I.styles[t]={...I.styles[t]||{},...r},t==="fas"&&It("fa",e)}const{styles:U,shims:ea}=I,na={[h]:Object.values(H[h]),[O]:Object.values(H[O]),[w]:Object.values(H[w])};let $t=null,Ke={},qe={},Qe={},Je={},Ze={};const aa={[h]:Object.keys(W[h]),[O]:Object.keys(W[O]),[w]:Object.keys(W[w])};function ra(t){return~Un.indexOf(t)}function ia(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ra(r)?r:null}const tn=()=>{const t=a=>xt(U,(r,i,s)=>(r[s]=xt(i,a,{}),r),{});Ke=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=i}),a)),qe=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=i}),a)),Ze=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(o=>{a[o]=i}),a});const e="far"in U||f.autoFetchSvg,n=xt(ea,(a,r)=>{const i=r[0];let s=r[1];const o=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});Qe=n.names,Je=n.unicodes,$t=pt(f.styleDefault,{family:f.familyDefault})};Xn(t=>{$t=pt(t.styleDefault,{family:f.familyDefault})});tn();function Vt(t,e){return(Ke[t]||{})[e]}function sa(t,e){return(qe[t]||{})[e]}function R(t,e){return(Ze[t]||{})[e]}function en(t){return Qe[t]||{prefix:null,iconName:null}}function oa(t){const e=Je[t],n=Vt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function D(){return $t}const Kt=()=>({prefix:null,iconName:null,rest:[]});function pt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=h}=e,a=W[n][t],r=nt[n][t]||nt[n][a],i=t in I.styles?t:null;return r||i||null}const ca={[h]:Object.keys(H[h]),[O]:Object.keys(H[O]),[w]:Object.keys(H[w])};function gt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,a={[h]:"".concat(f.cssPrefix,"-").concat(h),[O]:"".concat(f.cssPrefix,"-").concat(O),[w]:"".concat(f.cssPrefix,"-").concat(w)};let r=null,i=h;const s=hn.filter(c=>c!==_e);s.forEach(c=>{(t.includes(a[c])||t.some(l=>ca[c].includes(l)))&&(i=c)});const o=t.reduce((c,l)=>{const u=ia(f.cssPrefix,l);if(U[l]?(l=na[i].includes(l)?Fn[i][l]:l,r=l,c.prefix=l):aa[i].indexOf(l)>-1?(r=l,c.prefix=pt(l,{family:i})):u?c.iconName=u:l!==f.replacementClass&&!s.some(p=>l===a[p])&&c.rest.push(l),!n&&c.prefix&&c.iconName){const p=r==="fa"?en(c.iconName):{},d=R(c.prefix,c.iconName);p.prefix&&(r=null),c.iconName=p.iconName||d||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!U.far&&U.fas&&!f.autoFetchSvg&&(c.prefix="fas")}return c},Kt());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===O&&(U.fass||f.autoFetchSvg)&&(o.prefix="fass",o.iconName=R(o.prefix,o.iconName)||o.iconName),!o.prefix&&i===w&&(U.fasds||f.autoFetchSvg)&&(o.prefix="fasds",o.iconName=R(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=D()||"fas"),o}class la{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},It(i,r[i]);const s=H[h][i];s&&It(s,r[i]),tn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:o}=a[r],c=o[2];e[i]||(e[i]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(e[i][l]=o)}),e[i][s]=o}),e}}let ce=[],B={};const V={},fa=Object.keys(V);function ua(t,e){let{mixoutsTo:n}=e;return ce=t,B={},Object.keys(V).forEach(a=>{fa.indexOf(a)===-1&&delete V[a]}),ce.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{B[s]||(B[s]=[]),B[s].push(i[s])})}a.provides&&a.provides(V)}),n}function Lt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(B[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function G(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(B[t]||[]).forEach(i=>{i.apply(null,n)})}function Y(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return V[t]?V[t].apply(null,e):void 0}function Mt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||D();if(e)return e=R(n,e)||e,se(nn.definitions,n,e)||se(I.styles,n,e)}const nn=new la,ma=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,G("noAuto")},da={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(G("beforeI2svg",t),Y("pseudoElements2svg",t),Y("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,Jn(()=>{ga({autoReplaceSvgRoot:e}),G("watch",t)})}},pa={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:R(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=pt(t[0]);return{prefix:n,iconName:R(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(Rn))){const e=gt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||D(),iconName:R(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=D();return{prefix:e,iconName:R(e,t)||t}}}},N={noAuto:ma,config:f,dom:da,parse:pa,library:nn,findIconDefinition:Mt,toHtml:it},ga=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=g}=t;(Object.keys(I.styles).length>0||f.autoFetchSvg)&&_&&f.autoReplaceSvg&&N.dom.i2svg({node:e})};function ht(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>it(n))}}),Object.defineProperty(t,"node",{get:function(){if(!_)return;const n=g.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ha(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(Bt(s)&&n.found&&!a.found){const{width:o,height:c}=n,l={x:o/c/2,y:.5};r.style=dt({...i,"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function ba(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(f.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:s},children:a}]}]}function qt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:o,maskId:c,titleId:l,extra:u,watchable:p=!1}=t,{width:d,height:b}=n.found?n:e,k=a==="fak",C=[f.replacementClass,r?"".concat(f.cssPrefix,"-").concat(r):""].filter(P=>u.classes.indexOf(P)===-1).filter(P=>P!==""||!!P).concat(u.classes).join(" ");let y={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":r,class:C,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(b)}};const x=k&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/b*16*.0625,"em")}:{};p&&(y.attributes[X]=""),o&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(l||at())},children:[o]}),delete y.attributes.title);const v={...y,prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:i,symbol:s,styles:{...x,...u.styles}},{children:A,attributes:M}=n.found&&e.found?Y("generateAbstractMask",v)||{children:[],attributes:{}}:Y("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=A,v.attributes=M,s?ba(v):ha(v)}function le(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:o=!1}=t,c={...s.attributes,...i?{title:i}:{},class:s.classes.join(" ")};o&&(c[X]="");const l={...s.styles};Bt(r)&&(l.transform=Kn({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const u=dt(l);u.length>0&&(c.style=u);const p=[];return p.push({tag:"span",attributes:c,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function ya(t){const{content:e,title:n,extra:a}=t,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},i=dt(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:At}=I;function Tt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(yt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(yt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(yt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const va={found:!1,width:512,height:512};function xa(t,e){!Ye&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function zt(t,e){let n=e;return e==="fa"&&f.styleDefault!==null&&(e=D()),new Promise((a,r)=>{if(n==="fa"){const i=en(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&At[e]&&At[e][t]){const i=At[e][t];return a(Tt(i))}xa(t,e),a({...va,icon:f.showMissingIcons&&t?Y("missingIconAbstract")||{}:{}})})}const fe=()=>{},_t=f.measurePerformance&&st&&st.mark&&st.measure?st:{mark:fe,measure:fe},Z='FA "6.6.0"',Aa=t=>(_t.mark("".concat(Z," ").concat(t," begins")),()=>an(t)),an=t=>{_t.mark("".concat(Z," ").concat(t," ends")),_t.measure("".concat(Z," ").concat(t),"".concat(Z," ").concat(t," begins"),"".concat(Z," ").concat(t," ends"))};var Qt={begin:Aa,end:an};const ot=()=>{};function ue(t){return typeof(t.getAttribute?t.getAttribute(X):null)=="string"}function ka(t){const e=t.getAttribute?t.getAttribute(Ht):null,n=t.getAttribute?t.getAttribute(Xt):null;return e&&n}function Oa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function wa(){return f.autoReplaceSvg===!0?ct.replace:ct[f.autoReplaceSvg]||ct.replace}function Na(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function Ca(t){return g.createElement(t)}function rn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Na:Ca}=e;if(typeof t=="string")return g.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(rn(i,{ceFn:n}))}),a}function Pa(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ct={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(rn(n),e)}),e.getAttribute(X)===null&&f.keepOriginalSource){let n=g.createComment(Pa(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Gt(e).indexOf(f.replacementClass))return ct.replace(t);const a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===f.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>it(i)).join(`
`);e.setAttribute(X,""),e.innerHTML=r}};function me(t){t()}function sn(t,e){const n=typeof e=="function"?e:ot;if(t.length===0)n();else{let a=me;f.mutateApproach===zn&&(a=j.requestAnimationFrame||me),a(()=>{const r=wa(),i=Qt.begin("mutate");t.map(r),i(),n()})}}let Jt=!1;function on(){Jt=!0}function Ft(){Jt=!1}let ft=null;function de(t){if(!ee||!f.observeMutations)return;const{treeCallback:e=ot,nodeCallback:n=ot,pseudoElementsCallback:a=ot,observeMutationsRoot:r=g}=t;ft=new ee(i=>{if(Jt)return;const s=D();Q(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!ue(o.addedNodes[0])&&(f.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&f.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&ue(o.target)&&~Yn.indexOf(o.attributeName))if(o.attributeName==="class"&&ka(o.target)){const{prefix:c,iconName:l}=gt(Gt(o.target));o.target.setAttribute(Ht,c||s),l&&o.target.setAttribute(Xt,l)}else Oa(o.target)&&n(o.target)})}),_&&ft.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ea(){ft&&ft.disconnect()}function Sa(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function Ia(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=gt(Gt(t));return r.prefix||(r.prefix=D()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=sa(r.prefix,t.innerText)||Vt(r.prefix,St(t.innerText))),!r.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function La(t){const e=Q(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return f.autoA11y&&(n?e["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||at()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ma(){return{iconName:null,title:null,titleId:null,prefix:null,transform:S,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ia(t),i=La(t),s=Lt("parseNodeAttributes",{},t);let o=e.styleParser?Sa(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:S,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i},...s}}const{styles:Ta}=I;function cn(t){const e=f.autoReplaceSvg==="nest"?pe(t,{styleParser:!1}):pe(t);return~e.extra.classes.indexOf(He)?Y("generateLayersText",t,e):Y("generateSvgReplacementMutation",t,e)}let L=new Set;Ue.map(t=>{L.add("fa-".concat(t))});Object.keys(W[h]).map(L.add.bind(L));Object.keys(W[O]).map(L.add.bind(L));Object.keys(W[w]).map(L.add.bind(L));L=[...L];function ge(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();const n=g.documentElement.classList,a=u=>n.add("".concat(re,"-").concat(u)),r=u=>n.remove("".concat(re,"-").concat(u)),i=f.autoFetchSvg?L:Ue.map(u=>"fa-".concat(u)).concat(Object.keys(Ta));i.includes("fa")||i.push("fa");const s=[".".concat(He,":not([").concat(X,"])")].concat(i.map(u=>".".concat(u,":not([").concat(X,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=Q(t.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const c=Qt.begin("onTree"),l=o.reduce((u,p)=>{try{const d=cn(p);d&&u.push(d)}catch(d){Ye||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,p)=>{Promise.all(l).then(d=>{sn(d,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(d=>{c(),p(d)})})}function za(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cn(t).then(n=>{n&&sn([n],e)})}function _a(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Mt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Mt(r||{})),t(a,{...n,mask:r})}}const Fa=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=S,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:o=null,classes:c=[],attributes:l={},styles:u={}}=e;if(!t)return;const{prefix:p,iconName:d,icon:b}=t;return ht({type:"icon",...t},()=>(G("beforeDOMElementCreation",{iconDefinition:t,params:e}),f.autoA11y&&(s?l["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(o||at()):(l["aria-hidden"]="true",l.focusable="false")),qt({icons:{main:Tt(b),mask:r?Tt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:d,transform:{...S,...n},symbol:a,title:s,maskId:i,titleId:o,extra:{attributes:l,styles:u,classes:c}})))};var Ra={mixout(){return{icon:_a(Fa)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ge,t.nodeCallback=za,t}}},provides(t){t.i2svg=function(e){const{node:n=g,callback:a=()=>{}}=e;return ge(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:o,symbol:c,mask:l,maskId:u,extra:p}=n;return new Promise((d,b)=>{Promise.all([zt(a,s),l.iconName?zt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[C,y]=k;d([e,qt({icons:{main:C,mask:y},prefix:s,iconName:a,transform:o,symbol:c,maskId:u,title:r,titleId:i,extra:p,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const o=dt(s);o.length>0&&(a.style=o);let c;return Bt(i)&&(c=Y("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},ja={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ht({type:"layer"},()=>{G("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Da={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return ht({type:"counter",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),ya({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},Ya={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=S,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return ht({type:"text",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),le({content:t,transform:{...S,...n},title:a,extra:{attributes:i,styles:s,classes:["".concat(f.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,o=null;if(ze){const c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/c,o=l.height/c}return f.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,le({content:e.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}};const Ua=new RegExp('"',"ug"),he=[1105920,1112319],be={FontAwesome:{normal:"fas",400:"fas"},...kn,...An,...In},Rt=Object.keys(be).reduce((t,e)=>(t[e.toLowerCase()]=be[e],t),{}),Wa=Object.keys(Rt).reduce((t,e)=>{const n=Rt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ha(t){const e=t.replace(Ua,""),n=ta(e,0),a=n>=he[0]&&n<=he[1],r=e.length===2?e[0]===e[1]:!1;return{value:St(r?e[0]:e),isSecondary:a||r}}function Xa(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Rt[n]||{})[r]||Wa[n]}function ye(t,e){const n="".concat(Tn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=Q(t.children).filter(d=>d.getAttribute(Nt)===e)[0],o=j.getComputedStyle(t,e),c=o.getPropertyValue("font-family"),l=c.match(jn),u=o.getPropertyValue("font-weight"),p=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),a();if(l&&p!=="none"&&p!==""){const d=o.getPropertyValue("content");let b=Xa(c,u);const{value:k,isSecondary:C}=Ha(d),y=l[0].startsWith("FontAwesome");let x=Vt(b,k),v=x;if(y){const A=oa(k);A.iconName&&A.prefix&&(x=A.iconName,b=A.prefix)}if(x&&!C&&(!s||s.getAttribute(Ht)!==b||s.getAttribute(Xt)!==v)){t.setAttribute(n,v),s&&t.removeChild(s);const A=Ma(),{extra:M}=A;M.attributes[Nt]=e,zt(x,b).then(P=>{const dn=qt({...A,icons:{main:P,mask:Kt()},prefix:b,iconName:v,extra:M,watchable:!0}),bt=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(bt,t.firstChild):t.appendChild(bt),bt.outerHTML=dn.map(pn=>it(pn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ga(t){return Promise.all([ye(t,"::before"),ye(t,"::after")])}function Ba(t){return t.parentNode!==document.head&&!~_n.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Nt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ve(t){if(_)return new Promise((e,n)=>{const a=Q(t.querySelectorAll("*")).filter(Ba).map(Ga),r=Qt.begin("searchPseudoElements");on(),Promise.all(a).then(()=>{r(),Ft(),e()}).catch(()=>{r(),Ft(),n()})})}var $a={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ve,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=g}=e;f.searchPseudoElements&&ve(n)}}};let xe=!1;var Va={mixout(){return{dom:{unwatch(){on(),xe=!0}}}},hooks(){return{bootstrap(){de(Lt("mutationObserverCallbacks",{}))},noAuto(){Ea()},watch(t){const{observeMutationsRoot:e}=t;xe?Ft():de(Lt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ae=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Ka={mixout(){return{parse:{transform:t=>Ae(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ae(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(o," ").concat(c," ").concat(l)},p={transform:"translate(".concat(i/2*-1," -256)")},d={outer:s,inner:u,path:p};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const kt={x:0,y:0,width:"100%",height:"100%"};function ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function qa(t){return t.tag==="g"?t.children:[t]}var Qa={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?gt(n.split(" ").map(r=>r.trim())):Kt();return a.prefix||(a.prefix=D()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:o}=e;const{width:c,icon:l}=r,{width:u,icon:p}=i,d=Vn({transform:o,containerWidth:u,iconWidth:c}),b={tag:"rect",attributes:{...kt,fill:"white"}},k=l.children?{children:l.children.map(ke)}:{},C={tag:"g",attributes:{...d.inner},children:[ke({tag:l.tag,attributes:{...l.attributes,...d.path},...k})]},y={tag:"g",attributes:{...d.outer},children:[C]},x="mask-".concat(s||at()),v="clip-".concat(s||at()),A={tag:"mask",attributes:{...kt,id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[b,y]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:qa(p)},A]};return n.push(M,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(x,")"),...kt}}),{children:n,attributes:a}}}},Ja={provides(t){let e=!1;j.matchMedia&&(e=j.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...r,attributeName:"opacity"},s={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Za={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},tr=[Qn,Ra,ja,Da,Ya,$a,Va,Ka,Qa,Ja,Za];ua(tr,{mixoutsTo:N});N.noAuto;N.config;N.library;N.dom;const jt=N.parse;N.findIconDefinition;N.toHtml;const er=N.icon;N.layer;N.text;N.counter;function Oe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Oe(Object(n),!0).forEach(function(a){$(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ut(t){"@babel/helpers - typeof";return ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ut(t)}function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function ar(t,e){if(t==null)return{};var n=nr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Dt(t){return rr(t)||ir(t)||sr(t)||or()}function rr(t){if(Array.isArray(t))return Yt(t)}function ir(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function sr(t,e){if(t){if(typeof t=="string")return Yt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yt(t,e)}}function Yt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function or(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,s=t.shake,o=t.flash,c=t.spin,l=t.spinPulse,u=t.spinReverse,p=t.pulse,d=t.fixedWidth,b=t.inverse,k=t.border,C=t.listItem,y=t.flip,x=t.size,v=t.rotation,A=t.pull,M=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":o,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":p,"fa-fw":d,"fa-inverse":b,"fa-border":k,"fa-li":C,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},$(e,"fa-".concat(x),typeof x<"u"&&x!==null),$(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),$(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),$(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(M).map(function(P){return M[P]?P:null}).filter(function(P){return P})}function lr(t){return t=t-0,t===t}function ln(t){return lr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var fr=["style"];function ur(t){return t.charAt(0).toUpperCase()+t.slice(1)}function mr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=ln(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[ur(r)]=i:e[r]=i,e},{})}function fn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(c){return fn(t,c)}),r=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.attrs.className=u,delete e.attributes.class;break;case"style":c.attrs.style=mr(u);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=u:c.attrs[ln(l)]=u}return c},{attrs:{}}),i=n.style,s=i===void 0?{}:i,o=ar(n,fr);return r.attrs.style=E(E({},r.attrs.style),s),t.apply(void 0,[e.tag,E(E({},r.attrs),o)].concat(Dt(a)))}var un=!1;try{un=!0}catch{}function dr(){if(!un&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function we(t){if(t&&ut(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(jt.icon)return jt.icon(t);if(t===null)return null;if(t&&ut(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ot(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?$({},t,e):{}}var Ne={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},mn=mt.forwardRef(function(t,e){var n=E(E({},Ne),t),a=n.icon,r=n.mask,i=n.symbol,s=n.className,o=n.title,c=n.titleId,l=n.maskId,u=we(a),p=Ot("classes",[].concat(Dt(cr(n)),Dt((s||"").split(" ")))),d=Ot("transform",typeof n.transform=="string"?jt.transform(n.transform):n.transform),b=Ot("mask",we(r)),k=er(u,E(E(E(E({},p),d),b),{},{symbol:i,title:o,titleId:c,maskId:l}));if(!k)return dr("Could not find icon",u),null;var C=k.abstract,y={ref:e};return Object.keys(n).forEach(function(x){Ne.hasOwnProperty(x)||(y[x]=n[x])}),pr(C[0],y)});mn.displayName="FontAwesomeIcon";mn.propTypes={beat:m.bool,border:m.bool,beatFade:m.bool,bounce:m.bool,className:m.string,fade:m.bool,flash:m.bool,mask:m.oneOfType([m.object,m.array,m.string]),maskId:m.string,fixedWidth:m.bool,inverse:m.bool,flip:m.oneOf([!0,!1,"horizontal","vertical","both"]),icon:m.oneOfType([m.object,m.array,m.string]),listItem:m.bool,pull:m.oneOf(["right","left"]),pulse:m.bool,rotation:m.oneOf([0,90,180,270]),shake:m.bool,size:m.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:m.bool,spinPulse:m.bool,spinReverse:m.bool,symbol:m.oneOfType([m.bool,m.string]),title:m.string,titleId:m.string,transform:m.oneOfType([m.string,m.object]),swapOpacity:m.bool};var pr=fn.bind(null,mt.createElement);const hr={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},br={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},yr={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]},vr={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},xr={prefix:"fas",iconName:"file-word",icon:[384,512,[],"f1c2","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM111 257.1l26.8 89.2 31.6-90.3c3.4-9.6 12.5-16.1 22.7-16.1s19.3 6.4 22.7 16.1l31.6 90.3L273 257.1c3.8-12.7 17.2-19.9 29.9-16.1s19.9 17.2 16.1 29.9l-48 160c-3 10-12 16.9-22.4 17.1s-19.8-6.2-23.2-16.1L192 336.6l-33.3 95.3c-3.4 9.8-12.8 16.3-23.2 16.1s-19.5-7.1-22.4-17.1l-48-160c-3.8-12.7 3.4-26.1 16.1-29.9s26.1 3.4 29.9 16.1z"]},Ar={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"]},kr={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Or={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},wr={prefix:"fas",iconName:"ship",icon:[576,512,[128674],"f21a","M192 32c0-17.7 14.3-32 32-32L352 0c17.7 0 32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 128 44.4 14.8c23.1 7.7 29.5 37.5 11.5 53.9l-101 92.6c-16.2 9.4-34.7 15.1-50.9 15.1c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-16.2 0-34.7-5.7-50.9-15.1l-101-92.6c-18-16.5-11.6-46.2 11.5-53.9L96 240l0-128c0-26.5 21.5-48 48-48l48 0 0-32zM160 218.7l107.8-35.9c13.1-4.4 27.3-4.4 40.5 0L416 218.7l0-90.7-256 0 0 90.7zM306.5 421.9C329 437.4 356.5 448 384 448c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 501.7 417 512 384 512c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 437.2 165.1 448 192 448c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"]},Nr={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Cr={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},Pr={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"]},Er={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Sr={prefix:"fas",iconName:"circle-half-stroke",icon:[512,512,[9680,"adjust"],"f042","M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},Ir={prefix:"fas",iconName:"peso-sign",icon:[384,512,[],"e222","M64 32C46.3 32 32 46.3 32 64l0 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 64 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 80 0c68.4 0 127.7-39 156.8-96l19.2 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-.7 0c.5-5.3 .7-10.6 .7-16s-.2-10.7-.7-16l.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-19.2 0C303.7 71 244.4 32 176 32L64 32zm190.4 96L96 128l0-32 80 0c30.5 0 58.2 12.2 78.4 32zM96 192l190.9 0c.7 5.2 1.1 10.6 1.1 16s-.4 10.8-1.1 16L96 224l0-32zm158.4 96c-20.2 19.8-47.9 32-78.4 32l-80 0 0-32 158.4 0z"]},Lr={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};export{Ut as C,mn as F,Ie as a,Ar as b,br as c,hr as d,Pr as e,Or as f,Lr as g,Sr as h,Cr as i,Nr as j,wr as k,Er as l,Ir as m,xr as n,kr as o,yr as p,vr as q};
