import{o as Qu}from"./BXWtuYvb.js";var zs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Yu=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const o=r[e++];t[n++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=r[e++],u=r[e++],c=r[e++],h=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(h>>10)),t[n++]=String.fromCharCode(56320+(h&1023))}else{const o=r[e++],u=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},qo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const o=r[s],u=s+1<r.length,c=u?r[s+1]:0,h=s+2<r.length,f=h?r[s+2]:0,m=o>>2,A=(o&3)<<4|c>>4;let R=(c&15)<<2|f>>6,S=f&63;h||(S=64,u||(R=64)),n.push(e[m],e[A],e[R],e[S])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Bo(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Yu(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const o=e[r.charAt(s++)],c=s<r.length?e[r.charAt(s)]:0;++s;const f=s<r.length?e[r.charAt(s)]:64;++s;const A=s<r.length?e[r.charAt(s)]:64;if(++s,o==null||c==null||f==null||A==null)throw new Xu;const R=o<<2|c>>4;if(n.push(R),f!==64){const S=c<<4&240|f>>2;if(n.push(S),A!==64){const D=f<<6&192|A;n.push(D)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Xu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ju=function(r){const t=Bo(r);return qo.encodeByteArray(t,!0)},Wn=function(r){return Ju(r).replace(/\./g,"")},Zu=function(r){try{return qo.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=()=>tl().__FIREBASE_DEFAULTS__,nl=()=>{if(typeof process>"u"||typeof zs>"u")return;const r=zs.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},rl=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Zu(r[1]);return t&&JSON.parse(t)},ci=()=>{try{return el()||nl()||rl()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},il=r=>{var t,e;return(e=(t=ci())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},sl=r=>{const t=il(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},jo=()=>{var r;return(r=ci())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Wn(JSON.stringify(e)),Wn(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ll(){var r;const t=(r=ci())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cl(){return!ll()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hl(){try{return typeof indexedDB=="object"}catch{return!1}}function dl(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="FirebaseError";class Ae extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=fl,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$o.prototype.create)}}class $o{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?pl(o,n):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new Ae(s,c,n)}}function pl(r,t){return r.replace(ml,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const ml=/\{\$([^}]+)}/g;function Gr(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const o=r[s],u=t[s];if(Gs(o)&&Gs(u)){if(!Gr(o,u))return!1}else if(o!==u)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function Gs(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(r){return r&&r._delegate?r._delegate:r}class rn{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new ol;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(yl(t))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch{}}}}clearInstance(t=Xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xt){return this.instances.has(t)}getOptions(t=Xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&u.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),o=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:_l(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Xt){return this.component?this.component.multipleInstances?t:Xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _l(r){return r===Xt?void 0:r}function yl(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new gl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(q||(q={}));const vl={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Tl=q.INFO,Il={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Al=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Il[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zo{constructor(t){this.name=t,this._logLevel=Tl,this._logHandler=Al,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Rl(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Rl(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Kr="@firebase/app",Ks="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new zo("@firebase/app"),Pl="@firebase/app-compat",Vl="@firebase/analytics-compat",Sl="@firebase/analytics",Cl="@firebase/app-check-compat",bl="@firebase/app-check",Dl="@firebase/auth",Nl="@firebase/auth-compat",kl="@firebase/database",Ol="@firebase/data-connect",xl="@firebase/database-compat",Ml="@firebase/functions",Ll="@firebase/functions-compat",Fl="@firebase/installations",Ul="@firebase/installations-compat",Bl="@firebase/messaging",ql="@firebase/messaging-compat",jl="@firebase/performance",$l="@firebase/performance-compat",zl="@firebase/remote-config",Gl="@firebase/remote-config-compat",Kl="@firebase/storage",Wl="@firebase/storage-compat",Hl="@firebase/firestore",Ql="@firebase/vertexai-preview",Yl="@firebase/firestore-compat",Xl="firebase",Jl="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]",Zl={[Kr]:"fire-core",[Pl]:"fire-core-compat",[Sl]:"fire-analytics",[Vl]:"fire-analytics-compat",[bl]:"fire-app-check",[Cl]:"fire-app-check-compat",[Dl]:"fire-auth",[Nl]:"fire-auth-compat",[kl]:"fire-rtdb",[Ol]:"fire-data-connect",[xl]:"fire-rtdb-compat",[Ml]:"fire-fn",[Ll]:"fire-fn-compat",[Fl]:"fire-iid",[Ul]:"fire-iid-compat",[Bl]:"fire-fcm",[ql]:"fire-fcm-compat",[jl]:"fire-perf",[$l]:"fire-perf-compat",[zl]:"fire-rc",[Gl]:"fire-rc-compat",[Kl]:"fire-gcs",[Wl]:"fire-gcs-compat",[Hl]:"fire-fst",[Yl]:"fire-fst-compat",[Ql]:"fire-vertex","fire-js":"fire-js",[Xl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new Map,tc=new Map,Hr=new Map;function Ws(r,t){try{r.container.addComponent(t)}catch(e){Ot.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Qn(r){const t=r.name;if(Hr.has(t))return Ot.debug(`There were multiple attempts to register component ${t}.`),!1;Hr.set(t,r);for(const e of Hn.values())Ws(e,r);for(const e of tc.values())Ws(e,r);return!0}function ec(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new $o("app","Firebase",nc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=Jl;function sc(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw jt.create("bad-app-name",{appName:String(s)});if(e||(e=jo()),!e)throw jt.create("no-options");const o=Hn.get(s);if(o){if(Gr(e,o.options)&&Gr(n,o.config))return o;throw jt.create("duplicate-app",{appName:s})}const u=new El(s);for(const h of Hr.values())u.addComponent(h);const c=new rc(e,n,u);return Hn.set(s,c),c}function oc(r=Wr){const t=Hn.get(r);if(!t&&r===Wr&&jo())return sc();if(!t)throw jt.create("no-app",{appName:r});return t}function Xe(r,t,e){var n;let s=(n=Zl[r])!==null&&n!==void 0?n:r;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ot.warn(c.join(" "));return}Qn(new rn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="firebase-heartbeat-database",uc=1,sn="firebase-heartbeat-store";let Br=null;function Go(){return Br||(Br=Qu(ac,uc,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(sn)}catch(e){console.warn(e)}}}}).catch(r=>{throw jt.create("idb-open",{originalErrorMessage:r.message})})),Br}async function lc(r){try{const e=(await Go()).transaction(sn),n=await e.objectStore(sn).get(Ko(r));return await e.done,n}catch(t){if(t instanceof Ae)Ot.warn(t.message);else{const e=jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ot.warn(e.message)}}}async function Hs(r,t){try{const n=(await Go()).transaction(sn,"readwrite");await n.objectStore(sn).put(t,Ko(r)),await n.done}catch(e){if(e instanceof Ae)Ot.warn(e.message);else{const n=jt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(n.message)}}}function Ko(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=1024,hc=30*24*60*60*1e3;class dc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new pc(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Qs();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=hc}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Ot.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qs(),{heartbeatsToSend:n,unsentEntries:s}=fc(this._heartbeatsCache.heartbeats),o=Wn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ot.warn(e),""}}}function Qs(){return new Date().toISOString().substring(0,10)}function fc(r,t=cc){const e=[];let n=r.slice();for(const s of r){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),Ys(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ys(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class pc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hl()?dl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await lc(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ys(r){return Wn(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(r){Qn(new rn("platform-logger",t=>new wl(t),"PRIVATE")),Qn(new rn("heartbeat",t=>new dc(t),"PRIVATE")),Xe(Kr,Ks,r),Xe(Kr,Ks,"esm2017"),Xe("fire-js","")}mc("");var Xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zt,Wo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,E,I){for(var g=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)g[bt-2]=arguments[bt];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],E=v.g[2];var I=v.g[3],g=p+(I^_&(E^I))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(E^I&(_^E))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(_^E^I)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(E^(_|~I))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}n.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=_;)s(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){s(this,y),E=0;break}}else for(;I<p;)if(y[E++]=v[I++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=p},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)v[_++]=this.g[p]>>>y&255;return v};function o(v,p){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function u(v,p){this.h=p;for(var _=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==p||(_[E]=I,y=!1)}this.g=_}var c={};function h(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return b(f(-v));for(var p=[],_=1,y=0;v>=_;y++)p[y]=v/_|0,_*=4294967296;return new u(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return b(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=A,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var A=h(0),R=h(1),S=h(16777216);r=u.prototype,r.m=function(){if(O(this))return-b(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(O(this))return"-"+b(this).toString(v);for(var p=f(Math.pow(v,6)),_=this,y="";;){var E=rt(_,p).g;_=z(_,E.j(p));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,D(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function O(v){return v.h==-1}r.l=function(v){return v=z(this,v),O(v)?-1:D(v)?0:1};function b(v){for(var p=v.g.length,_=[],y=0;y<p;y++)_[y]=~v.g[y];return new u(_,~v.h).add(R)}r.abs=function(){return O(this)?b(this):this},r.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,_[E]=g<<16|I}return new u(_,_[_.length-1]&-2147483648?-1:0)};function z(v,p){return v.add(b(p))}r.j=function(v){if(D(this)||D(v))return A;if(O(this))return O(v)?b(this).j(b(v)):b(b(this).j(v));if(O(v))return b(this.j(b(v)));if(0>this.l(S)&&0>v.l(S))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,bt=v.i(E)>>>16,Ce=v.i(E)&65535;_[2*y+2*E]+=g*Ce,K(_,2*y+2*E),_[2*y+2*E+1]+=I*Ce,K(_,2*y+2*E+1),_[2*y+2*E+1]+=g*bt,K(_,2*y+2*E+1),_[2*y+2*E+2]+=I*bt,K(_,2*y+2*E+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new u(_,0)};function K(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function H(v,p){this.g=v,this.h=p}function rt(v,p){if(D(p))throw Error("division by zero");if(D(v))return new H(A,A);if(O(v))return p=rt(b(v),p),new H(b(p.g),b(p.h));if(O(p))return p=rt(v,b(p)),new H(b(p.g),p.h);if(30<v.g.length){if(O(v)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=p;0>=y.l(v);)_=Ct(_),y=Ct(y);var E=st(_,1),I=st(y,1);for(y=st(y,2),_=st(_,2);!D(y);){var g=I.add(y);0>=g.l(v)&&(E=E.add(_),I=g),y=st(y,1),_=st(_,1)}return p=z(v,E.j(p)),new H(E,p)}for(E=A;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(_),g=I.j(p);O(g)||0<g.l(v);)_-=y,I=f(_),g=I.j(p);D(I)&&(I=R),E=E.add(I),v=z(v,g)}return new H(E,v)}r.A=function(v){return rt(this,v).h},r.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&v.i(y);return new u(_,this.h&v.h)},r.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|v.i(y);return new u(_,this.h|v.h)},r.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^v.i(y);return new u(_,this.h^v.h)};function Ct(v){for(var p=v.g.length+1,_=[],y=0;y<p;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(_,v.h)}function st(v,p){var _=p>>5;p%=32;for(var y=v.g.length-_,E=[],I=0;I<y;I++)E[I]=0<p?v.i(I+_)>>>p|v.i(I+_+1)<<32-p:v.i(I+_);return new u(E,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Wo=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=m,Zt=u}).apply(typeof Xs<"u"?Xs:typeof self<"u"?self:typeof window<"u"?window:{});var Fn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ho,We,Qo,jn,Qr,Yo,Xo,Jo;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fn=="object"&&Fn];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function s(i,a){if(a)t:{var l=n;i=i.split(".");for(var d=0;d<i.length-1;d++){var T=i[d];if(!(T in l))break t;l=l[T]}i=i[i.length-1],d=l[i],a=a(d),a!=d&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,d=!1,T={next:function(){if(!d&&l<i.length){var w=l++;return{value:a(w,i[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function m(i,a,l){return i.call.apply(i.bind,arguments)}function A(i,a,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),i.apply(a,T)}}return function(){return i.apply(a,arguments)}}function R(i,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:A,R.apply(null,arguments)}function S(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function D(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,T,w){for(var C=Array(arguments.length-2),W=2;W<arguments.length;W++)C[W-2]=arguments[W];return a.prototype[T].apply(d,C)}}function O(i){const a=i.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=i[d];return l}return[]}function b(i,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const T=i.length||0,w=d.length||0;i.length=T+w;for(let C=0;C<w;C++)i[T+C]=d[C]}else i.push(d)}}class z{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(i){return/^[\s\xa0]*$/.test(i)}function H(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function rt(i){return rt[" "](i),i}rt[" "]=function(){};var Ct=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function st(i,a,l){for(const d in i)a.call(l,i[d],d,i)}function v(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function p(i){const a={};for(const l in i)a[l]=i[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let l,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(l in d)i[l]=d[l];for(let w=0;w<_.length;w++)l=_[w],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function E(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function I(i){c.setTimeout(()=>{throw i},0)}function g(){var i=gr;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class bt{constructor(){this.h=this.g=null}add(a,l){const d=Ce.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var Ce=new z(()=>new pu,i=>i.reset());class pu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let be,De=!1,gr=new bt,zi=()=>{const i=c.Promise.resolve(void 0);be=()=>{i.then(mu)}};var mu=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){I(l)}var a=Ce;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}De=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var gu=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return i}();function Ne(i,a){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Ct){t:{try{rt(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:_u[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ne.aa.h.call(this)}}D(Ne,ht);var _u={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),yu=0;function Eu(i,a,l,d,T){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=T,this.key=++yu,this.da=this.fa=!1}function vn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Tn(i){this.src=i,this.g={},this.h=0}Tn.prototype.add=function(i,a,l,d,T){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var C=yr(i,a,d,T);return-1<C?(a=i[C],l||(a.fa=!1)):(a=new Eu(a,this.src,w,!!d,T),a.fa=l,i.push(a)),a};function _r(i,a){var l=a.type;if(l in i.g){var d=i.g[l],T=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=T)&&Array.prototype.splice.call(d,T,1),w&&(vn(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function yr(i,a,l,d){for(var T=0;T<i.length;++T){var w=i[T];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==d)return T}return-1}var Er="closure_lm_"+(1e6*Math.random()|0),vr={};function Gi(i,a,l,d,T){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Gi(i,a[w],l,d,T);return null}return l=Hi(l),i&&i[En]?i.K(a,l,f(d)?!!d.capture:!!d,T):vu(i,a,l,!1,d,T)}function vu(i,a,l,d,T,w){if(!a)throw Error("Invalid event type");var C=f(T)?!!T.capture:!!T,W=Ir(i);if(W||(i[Er]=W=new Tn(i)),l=W.add(a,l,d,C,w),l.proxy)return l;if(d=Tu(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)gu||(T=C),T===void 0&&(T=!1),i.addEventListener(a.toString(),d,T);else if(i.attachEvent)i.attachEvent(Wi(a.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Tu(){function i(l){return a.call(i.src,i.listener,l)}const a=Iu;return i}function Ki(i,a,l,d,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)Ki(i,a[w],l,d,T);else d=f(d)?!!d.capture:!!d,l=Hi(l),i&&i[En]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],l=yr(w,l,d,T),-1<l&&(vn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=Ir(i))&&(a=i.g[a.toString()],i=-1,a&&(i=yr(a,l,d,T)),(l=-1<i?a[i]:null)&&Tr(l))}function Tr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[En])_r(a.i,i);else{var l=i.type,d=i.proxy;a.removeEventListener?a.removeEventListener(l,d,i.capture):a.detachEvent?a.detachEvent(Wi(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=Ir(a))?(_r(l,i),l.h==0&&(l.src=null,a[Er]=null)):vn(i)}}}function Wi(i){return i in vr?vr[i]:vr[i]="on"+i}function Iu(i,a){if(i.da)i=!0;else{a=new Ne(a,this);var l=i.listener,d=i.ha||i.src;i.fa&&Tr(i),i=l.call(d,a)}return i}function Ir(i){return i=i[Er],i instanceof Tn?i:null}var Ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hi(i){return typeof i=="function"?i:(i[Ar]||(i[Ar]=function(a){return i.handleEvent(a)}),i[Ar])}function dt(){Lt.call(this),this.i=new Tn(this),this.M=this,this.F=null}D(dt,Lt),dt.prototype[En]=!0,dt.prototype.removeEventListener=function(i,a,l,d){Ki(this,i,a,l,d)};function yt(i,a){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=a.type||a,typeof a=="string")a=new ht(a,i);else if(a instanceof ht)a.target=a.target||i;else{var T=a;a=new ht(d,i),y(a,T)}if(T=!0,l)for(var w=l.length-1;0<=w;w--){var C=a.g=l[w];T=In(C,d,!0,a)&&T}if(C=a.g=i,T=In(C,d,!0,a)&&T,T=In(C,d,!1,a)&&T,l)for(w=0;w<l.length;w++)C=a.g=l[w],T=In(C,d,!1,a)&&T}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],d=0;d<l.length;d++)vn(l[d]);delete i.g[a],i.h--}}this.F=null},dt.prototype.K=function(i,a,l,d){return this.i.add(String(i),a,!1,l,d)},dt.prototype.L=function(i,a,l,d){return this.i.add(String(i),a,!0,l,d)};function In(i,a,l,d){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,w=0;w<a.length;++w){var C=a[w];if(C&&!C.da&&C.capture==l){var W=C.listener,ot=C.ha||C.src;C.fa&&_r(i.i,C),T=W.call(ot,d)!==!1&&T}}return T&&!d.defaultPrevented}function Qi(i,a,l){if(typeof i=="function")l&&(i=R(i,l));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function Yi(i){i.g=Qi(()=>{i.g=null,i.i&&(i.i=!1,Yi(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class Au extends Lt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Yi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ke(i){Lt.call(this),this.h=i,this.g={}}D(ke,Lt);var Xi=[];function Ji(i){st(i.g,function(a,l){this.g.hasOwnProperty(l)&&Tr(a)},i),i.g={}}ke.prototype.N=function(){ke.aa.N.call(this),Ji(this)},ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wr=c.JSON.stringify,wu=c.JSON.parse,Ru=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Rr(){}Rr.prototype.h=null;function Zi(i){return i.h||(i.h=i.i())}function ts(){}var Oe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pr(){ht.call(this,"d")}D(Pr,ht);function Vr(){ht.call(this,"c")}D(Vr,ht);var Wt={},es=null;function An(){return es=es||new dt}Wt.La="serverreachability";function ns(i){ht.call(this,Wt.La,i)}D(ns,ht);function xe(i){const a=An();yt(a,new ns(a))}Wt.STAT_EVENT="statevent";function rs(i,a){ht.call(this,Wt.STAT_EVENT,i),this.stat=a}D(rs,ht);function Et(i){const a=An();yt(a,new rs(a,i))}Wt.Ma="timingevent";function is(i,a){ht.call(this,Wt.Ma,i),this.size=a}D(is,ht);function Me(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function Le(){this.g=!0}Le.prototype.xa=function(){this.g=!1};function Pu(i,a,l,d,T,w){i.info(function(){if(i.g)if(w)for(var C="",W=w.split("&"),ot=0;ot<W.length;ot++){var j=W[ot].split("=");if(1<j.length){var ft=j[0];j=j[1];var pt=ft.split("_");C=2<=pt.length&&pt[1]=="type"?C+(ft+"="+j+"&"):C+(ft+"=redacted&")}}else C=null;else C=w;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+a+`
`+l+`
`+C})}function Vu(i,a,l,d,T,w,C){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+a+`
`+l+`
`+w+" "+C})}function ue(i,a,l,d){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+Cu(i,l)+(d?" "+d:"")})}function Su(i,a){i.info(function(){return"TIMEOUT: "+a})}Le.prototype.info=function(){};function Cu(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var w=T[0];if(w!="noop"&&w!="stop"&&w!="close")for(var C=1;C<T.length;C++)T[C]=""}}}}return wr(l)}catch{return a}}var wn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ss={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sr;function Rn(){}D(Rn,Rr),Rn.prototype.g=function(){return new XMLHttpRequest},Rn.prototype.i=function(){return{}},Sr=new Rn;function Ft(i,a,l,d){this.j=i,this.i=a,this.l=l,this.R=d||1,this.U=new ke(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new os}function os(){this.i=null,this.g="",this.h=!1}var as={},Cr={};function br(i,a,l){i.L=1,i.v=Cn(Dt(a)),i.m=l,i.P=!0,us(i,null)}function us(i,a){i.F=Date.now(),Pn(i),i.A=Dt(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Is(l.i,"t",d),i.C=0,l=i.j.J,i.h=new os,i.g=Bs(i.j,l?a:null,!i.m),0<i.O&&(i.M=new Au(R(i.Y,i,i.g),i.O)),a=i.U,l=i.g,d=i.ca;var T="readystatechange";Array.isArray(T)||(T&&(Xi[0]=T.toString()),T=Xi);for(var w=0;w<T.length;w++){var C=Gi(l,T[w],d||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),xe(),Pu(i.i,i.u,i.A,i.l,i.R,i.m)}Ft.prototype.ca=function(i){i=i.target;const a=this.M;a&&Nt(i)==3?a.j():this.Y(i)},Ft.prototype.Y=function(i){try{if(i==this.g)t:{const pt=Nt(this.g);var a=this.g.Ba();const he=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Cs(this.g)))){this.J||pt!=4||a==7||(a==8||0>=he?xe(3):xe(2)),Dr(this);var l=this.g.Z();this.X=l;e:if(ls(this)){var d=Cs(this.g);i="";var T=d.length,w=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),Fe(this);var C="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,i+=this.h.i.decode(d[a],{stream:!(w&&a==T-1)});d.length=0,this.h.g+=i,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,Vu(this.i,this.u,this.A,this.l,this.R,pt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ot=this.g;if((W=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(W)){var j=W;break e}}j=null}if(l=j)ue(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nr(this,l);else{this.o=!1,this.s=3,Et(12),Ht(this),Fe(this);break t}}if(this.P){l=!0;let At;for(;!this.J&&this.C<C.length;)if(At=bu(this,C),At==Cr){pt==4&&(this.s=4,Et(14),l=!1),ue(this.i,this.l,null,"[Incomplete Response]");break}else if(At==as){this.s=4,Et(15),ue(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else ue(this.i,this.l,At,null),Nr(this,At);if(ls(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||C.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)ue(this.i,this.l,C,"[Invalid Chunked Response]"),Ht(this),Fe(this);else if(0<C.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Fr(ft),ft.M=!0,Et(11))}}else ue(this.i,this.l,C,null),Nr(this,C);pt==4&&Ht(this),this.o&&!this.J&&(pt==4?Ms(this.j,this):(this.o=!1,Pn(this)))}else Wu(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),Ht(this),Fe(this)}}}catch{}finally{}};function ls(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function bu(i,a){var l=i.C,d=a.indexOf(`
`,l);return d==-1?Cr:(l=Number(a.substring(l,d)),isNaN(l)?as:(d+=1,d+l>a.length?Cr:(a=a.slice(d,d+l),i.C=d+l,a)))}Ft.prototype.cancel=function(){this.J=!0,Ht(this)};function Pn(i){i.S=Date.now()+i.I,cs(i,i.I)}function cs(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Me(R(i.ba,i),a)}function Dr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Ft.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Su(this.i,this.A),this.L!=2&&(xe(),Et(17)),Ht(this),this.s=2,Fe(this)):cs(this,this.S-i)};function Fe(i){i.j.G==0||i.J||Ms(i.j,i)}function Ht(i){Dr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Ji(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Nr(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||kr(l.h,i))){if(!i.K&&kr(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)xn(l),kn(l);else break t;Lr(l),Et(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=Me(R(l.Za,l),6e3));if(1>=fs(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Yt(l,11)}else if((i.K||l.g==i)&&xn(l),!K(a))for(T=l.Da.g.parse(a),a=0;a<T.length;a++){let j=T[a];if(l.T=j[0],j=j[1],l.G==2)if(j[0]=="c"){l.K=j[1],l.ia=j[2];const ft=j[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const pt=j[4];pt!=null&&(l.Aa=pt,l.j.info("SVER="+l.Aa));const he=j[5];he!=null&&typeof he=="number"&&0<he&&(d=1.5*he,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const At=i.g;if(At){const Ln=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ln){var w=d.h;w.g||Ln.indexOf("spdy")==-1&&Ln.indexOf("quic")==-1&&Ln.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Or(w,w.h),w.h=null))}if(d.D){const Ur=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;Ur&&(d.ya=Ur,Q(d.I,d.D,Ur))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var C=i;if(d.qa=Us(d,d.J?d.ia:null,d.W),C.K){ps(d.h,C);var W=C,ot=d.L;ot&&(W.I=ot),W.B&&(Dr(W),Pn(W)),d.g=C}else Os(d);0<l.i.length&&On(l)}else j[0]!="stop"&&j[0]!="close"||Yt(l,7);else l.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Yt(l,7):Mr(l):j[0]!="noop"&&l.l&&l.l.ta(j),l.v=0)}}xe(4)}catch{}}var Du=class{constructor(i,a){this.g=i,this.map=a}};function hs(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ds(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function fs(i){return i.h?1:i.g?i.g.size:0}function kr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Or(i,a){i.g?i.g.add(a):i.h=a}function ps(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}hs.prototype.cancel=function(){if(this.i=ms(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ms(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return O(i.i)}function Nu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],l=i.length,d=0;d<l;d++)a.push(i[d]);return a}a=[],l=0;for(d in i)a[l++]=i[d];return a}function ku(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const d in i)a[l++]=d;return a}}}function gs(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=ku(i),d=Nu(i),T=d.length,w=0;w<T;w++)a.call(void 0,d[w],l&&l[w],i)}var _s=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ou(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),T=null;if(0<=d){var w=i[l].substring(0,d);T=i[l].substring(d+1)}else w=i[l];a(w,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Qt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Qt){this.h=i.h,Vn(this,i.j),this.o=i.o,this.g=i.g,Sn(this,i.s),this.l=i.l;var a=i.i,l=new qe;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),ys(this,l),this.m=i.m}else i&&(a=String(i).match(_s))?(this.h=!1,Vn(this,a[1]||"",!0),this.o=Ue(a[2]||""),this.g=Ue(a[3]||"",!0),Sn(this,a[4]),this.l=Ue(a[5]||"",!0),ys(this,a[6]||"",!0),this.m=Ue(a[7]||"")):(this.h=!1,this.i=new qe(null,this.h))}Qt.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Be(a,Es,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Be(a,Es,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Be(l,l.charAt(0)=="/"?Lu:Mu,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Be(l,Uu)),i.join("")};function Dt(i){return new Qt(i)}function Vn(i,a,l){i.j=l?Ue(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function Sn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function ys(i,a,l){a instanceof qe?(i.i=a,Bu(i.i,i.h)):(l||(a=Be(a,Fu)),i.i=new qe(a,i.h))}function Q(i,a,l){i.i.set(a,l)}function Cn(i){return Q(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ue(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Be(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,xu),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function xu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Es=/[#\/\?@]/g,Mu=/[#\?:]/g,Lu=/[#\?]/g,Fu=/[#\?@]/g,Uu=/#/g;function qe(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Ut(i){i.g||(i.g=new Map,i.h=0,i.i&&Ou(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=qe.prototype,r.add=function(i,a){Ut(this),this.i=null,i=le(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function vs(i,a){Ut(i),a=le(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function Ts(i,a){return Ut(i),a=le(i,a),i.g.has(a)}r.forEach=function(i,a){Ut(this),this.g.forEach(function(l,d){l.forEach(function(T){i.call(a,T,d,this)},this)},this)},r.na=function(){Ut(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const T=i[d];for(let w=0;w<T.length;w++)l.push(a[d])}return l},r.V=function(i){Ut(this);let a=[];if(typeof i=="string")Ts(this,i)&&(a=a.concat(this.g.get(le(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},r.set=function(i,a){return Ut(this),this.i=null,i=le(this,i),Ts(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},r.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function Is(i,a,l){vs(i,a),0<l.length&&(i.i=null,i.g.set(le(i,a),O(l)),i.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const w=encodeURIComponent(String(d)),C=this.V(d);for(d=0;d<C.length;d++){var T=w;C[d]!==""&&(T+="="+encodeURIComponent(String(C[d]))),i.push(T)}}return this.i=i.join("&")};function le(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Bu(i,a){a&&!i.j&&(Ut(i),i.i=null,i.g.forEach(function(l,d){var T=d.toLowerCase();d!=T&&(vs(this,d),Is(this,T,l))},i)),i.j=a}function qu(i,a){const l=new Le;if(c.Image){const d=new Image;d.onload=S(Bt,l,"TestLoadImage: loaded",!0,a,d),d.onerror=S(Bt,l,"TestLoadImage: error",!1,a,d),d.onabort=S(Bt,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=S(Bt,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else a(!1)}function ju(i,a){const l=new Le,d=new AbortController,T=setTimeout(()=>{d.abort(),Bt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:d.signal}).then(w=>{clearTimeout(T),w.ok?Bt(l,"TestPingServer: ok",!0,a):Bt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Bt(l,"TestPingServer: error",!1,a)})}function Bt(i,a,l,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(l)}catch{}}function $u(){this.g=new Ru}function zu(i,a,l){const d=l||"";try{gs(i,function(T,w){let C=T;f(T)&&(C=wr(T)),a.push(d+w+"="+encodeURIComponent(C))})}catch(T){throw a.push(d+"type="+encodeURIComponent("_badmap")),T}}function bn(i){this.l=i.Ub||null,this.j=i.eb||!1}D(bn,Rr),bn.prototype.g=function(){return new Dn(this.l,this.j)},bn.prototype.i=function(i){return function(){return i}}({});function Dn(i,a){dt.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Dn,dt),r=Dn.prototype,r.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,$e(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,je(this)),this.readyState=0},r.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,$e(this)),this.g&&(this.readyState=3,$e(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;As(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function As(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}r.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?je(this):$e(this),this.readyState==3&&As(this)}},r.Ra=function(i){this.g&&(this.response=this.responseText=i,je(this))},r.Qa=function(i){this.g&&(this.response=i,je(this))},r.ga=function(){this.g&&je(this)};function je(i){i.readyState=4,i.l=null,i.j=null,i.v=null,$e(i)}r.setRequestHeader=function(i,a){this.u.append(i,a)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function $e(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Dn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ws(i){let a="";return st(i,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function xr(i,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=ws(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):Q(i,a,l))}function J(i){dt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(J,dt);var Gu=/^https?$/i,Ku=["POST","PUT"];r=J.prototype,r.Ha=function(i){this.J=i},r.ea=function(i,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sr.g(),this.v=this.o?Zi(this.o):Zi(Sr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){Rs(this,w);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)l.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())l.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),T=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ku,a,void 0))||d||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of l)this.g.setRequestHeader(w,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ss(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){Rs(this,w)}};function Rs(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Ps(i),Nn(i)}function Ps(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,yt(this,"complete"),yt(this,"abort"),Nn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nn(this,!0)),J.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Vs(this):this.bb())},r.bb=function(){Vs(this)};function Vs(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Nt(i)!=4||i.Z()!=2)){if(i.u&&Nt(i)==4)Qi(i.Ea,0,i);else if(yt(i,"readystatechange"),Nt(i)==4){i.h=!1;try{const C=i.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=C===0){var T=String(i.D).match(_s)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),d=!Gu.test(T?T.toLowerCase():"")}l=d}if(l)yt(i,"complete"),yt(i,"success");else{i.m=6;try{var w=2<Nt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",Ps(i)}}finally{Nn(i)}}}}function Nn(i,a){if(i.g){Ss(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||yt(i,"ready");try{l.onreadystatechange=d}catch{}}}function Ss(i){i.I&&(c.clearTimeout(i.I),i.I=null)}r.isActive=function(){return!!this.g};function Nt(i){return i.g?i.g.readyState:0}r.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),wu(a)}};function Cs(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Wu(i){const a={};i=(i.g&&2<=Nt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(K(i[d]))continue;var l=E(i[d]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[T]||[];a[T]=w,w.push(l)}v(a,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ze(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function bs(i){this.Aa=0,this.i=[],this.j=new Le,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ze("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ze("baseRetryDelayMs",5e3,i),this.cb=ze("retryDelaySeedMs",1e4,i),this.Wa=ze("forwardChannelMaxRetries",2,i),this.wa=ze("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new hs(i&&i.concurrentRequestLimit),this.Da=new $u,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=bs.prototype,r.la=8,r.G=1,r.connect=function(i,a,l,d){Et(0),this.W=i,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=Us(this,null,this.W),On(this)};function Mr(i){if(Ds(i),i.G==3){var a=i.U++,l=Dt(i.I);if(Q(l,"SID",i.K),Q(l,"RID",a),Q(l,"TYPE","terminate"),Ge(i,l),a=new Ft(i,i.j,a),a.L=2,a.v=Cn(Dt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Bs(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Pn(a)}Fs(i)}function kn(i){i.g&&(Fr(i),i.g.cancel(),i.g=null)}function Ds(i){kn(i),i.u&&(c.clearTimeout(i.u),i.u=null),xn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function On(i){if(!ds(i.h)&&!i.s){i.s=!0;var a=i.Ga;be||zi(),De||(be(),De=!0),gr.add(a,i),i.B=0}}function Hu(i,a){return fs(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Me(R(i.Ga,i,a),Ls(i,i.B)),i.B++,!0)}r.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const T=new Ft(this,this.j,i);let w=this.o;if(this.S&&(w?(w=p(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(T.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=ks(this,T,a),l=Dt(this.I),Q(l,"RID",i),Q(l,"CVER",22),this.D&&Q(l,"X-HTTP-Session-Id",this.D),Ge(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(ws(w)))+"&"+a:this.m&&xr(l,this.m,w)),Or(this.h,T),this.Ua&&Q(l,"TYPE","init"),this.P?(Q(l,"$req",a),Q(l,"SID","null"),T.T=!0,br(T,l,null)):br(T,l,a),this.G=2}}else this.G==3&&(i?Ns(this,i):this.i.length==0||ds(this.h)||Ns(this))};function Ns(i,a){var l;a?l=a.l:l=i.U++;const d=Dt(i.I);Q(d,"SID",i.K),Q(d,"RID",l),Q(d,"AID",i.T),Ge(i,d),i.m&&i.o&&xr(d,i.m,i.o),l=new Ft(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=ks(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Or(i.h,l),br(l,d,a)}function Ge(i,a){i.H&&st(i.H,function(l,d){Q(a,d,l)}),i.l&&gs({},function(l,d){Q(a,d,l)})}function ks(i,a,l){l=Math.min(i.i.length,l);var d=i.l?R(i.l.Na,i.l,i):null;t:{var T=i.i;let w=-1;for(;;){const C=["count="+l];w==-1?0<l?(w=T[0].g,C.push("ofs="+w)):w=0:C.push("ofs="+w);let W=!0;for(let ot=0;ot<l;ot++){let j=T[ot].g;const ft=T[ot].map;if(j-=w,0>j)w=Math.max(0,T[ot].g-100),W=!1;else try{zu(ft,C,"req"+j+"_")}catch{d&&d(ft)}}if(W){d=C.join("&");break t}}}return i=i.i.splice(0,l),a.D=i,d}function Os(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;be||zi(),De||(be(),De=!0),gr.add(a,i),i.v=0}}function Lr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Me(R(i.Fa,i),Ls(i,i.v)),i.v++,!0)}r.Fa=function(){if(this.u=null,xs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Me(R(this.ab,this),i)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),kn(this),xs(this))};function Fr(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function xs(i){i.g=new Ft(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Dt(i.qa);Q(a,"RID","rpc"),Q(a,"SID",i.K),Q(a,"AID",i.T),Q(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&Q(a,"TO",i.ja),Q(a,"TYPE","xmlhttp"),Ge(i,a),i.m&&i.o&&xr(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Cn(Dt(a)),l.m=null,l.P=!0,us(l,i)}r.Za=function(){this.C!=null&&(this.C=null,kn(this),Lr(this),Et(19))};function xn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Ms(i,a){var l=null;if(i.g==a){xn(i),Fr(i),i.g=null;var d=2}else if(kr(i.h,a))l=a.D,ps(i.h,a),d=1;else return;if(i.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var T=i.B;d=An(),yt(d,new is(d,l)),On(i)}else Os(i);else if(T=a.s,T==3||T==0&&0<a.X||!(d==1&&Hu(i,a)||d==2&&Lr(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),T){case 1:Yt(i,5);break;case 4:Yt(i,10);break;case 3:Yt(i,6);break;default:Yt(i,2)}}}function Ls(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function Yt(i,a){if(i.j.info("Error code "+a),a==2){var l=R(i.fb,i),d=i.Xa;const T=!d;d=new Qt(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Vn(d,"https"),Cn(d),T?qu(d.toString(),l):ju(d.toString(),l)}else Et(2);i.G=0,i.l&&i.l.sa(a),Fs(i),Ds(i)}r.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Fs(i){if(i.G=0,i.ka=[],i.l){const a=ms(i.h);(a.length!=0||i.i.length!=0)&&(b(i.ka,a),b(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function Us(i,a,l){var d=l instanceof Qt?Dt(l):new Qt(l);if(d.g!="")a&&(d.g=a+"."+d.g),Sn(d,d.s);else{var T=c.location;d=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var w=new Qt(null);d&&Vn(w,d),a&&(w.g=a),T&&Sn(w,T),l&&(w.l=l),d=w}return l=i.D,a=i.ya,l&&a&&Q(d,l,a),Q(d,"VER",i.la),Ge(i,d),d}function Bs(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new J(new bn({eb:l})):new J(i.pa),a.Ha(i.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function qs(){}r=qs.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Mn(){}Mn.prototype.g=function(i,a){return new vt(i,a)};function vt(i,a){dt.call(this),this.g=new bs(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!K(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new ce(this)}D(vt,dt),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Mr(this.g)},vt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=wr(i),i=l);a.i.push(new Du(a.Ya++,i)),a.G==3&&On(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,Mr(this.g),delete this.g,vt.aa.N.call(this)};function js(i){Pr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}D(js,Pr);function $s(){Vr.call(this),this.status=1}D($s,Vr);function ce(i){this.g=i}D(ce,qs),ce.prototype.ua=function(){yt(this.g,"a")},ce.prototype.ta=function(i){yt(this.g,new js(i))},ce.prototype.sa=function(i){yt(this.g,new $s)},ce.prototype.ra=function(){yt(this.g,"b")},Mn.prototype.createWebChannel=Mn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Jo=function(){return new Mn},Xo=function(){return An()},Yo=Wt,Qr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wn.NO_ERROR=0,wn.TIMEOUT=8,wn.HTTP_ERROR=6,jn=wn,ss.COMPLETE="complete",Qo=ss,ts.EventType=Oe,Oe.OPEN="a",Oe.CLOSE="b",Oe.ERROR="c",Oe.MESSAGE="d",dt.prototype.listen=dt.prototype.K,We=ts,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Ho=J}).apply(typeof Fn<"u"?Fn:typeof self<"u"?self:typeof window<"u"?window:{});const Js="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let we="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new zo("@firebase/firestore");function Ke(){return ne.logLevel}function k(r,...t){if(ne.logLevel<=q.DEBUG){const e=t.map(hi);ne.debug(`Firestore (${we}): ${r}`,...e)}}function xt(r,...t){if(ne.logLevel<=q.ERROR){const e=t.map(hi);ne.error(`Firestore (${we}): ${r}`,...e)}}function ge(r,...t){if(ne.logLevel<=q.WARN){const e=t.map(hi);ne.warn(`Firestore (${we}): ${r}`,...e)}}function hi(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r="Unexpected state"){const t=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: `+r;throw xt(t),new Error(t)}function G(r,t){r||M()}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Ae{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class gc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class _c{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class yc{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0);let n=this.i;const s=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new te;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new te,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new te)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string"),new Zo(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string"),new gt(t)}}class Ec{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vc{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Ec(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ic{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){G(this.o===void 0);const n=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(G(typeof e.token=="string"),this.R=e.token,new Tc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Ac(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%t.length))}return n}}function $(r,t){return r<t?-1:r>t?1:0}function _e(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new nt(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new nt(0,0))}static max(){return new L(new nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(),n===void 0?n=t.length-e:n>t.length-e&&M(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return on.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof on?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends on{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const wc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends on{construct(t,e,n){return new ut(t,e,n)}static isValidIdentifier(t){return wc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(n+=c,s++):(o(),s++)}if(o(),u)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(Y.fromString(t))}static fromName(t){return new x(Y.fromString(t).popFirst(5))}static empty(){return new x(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new Y(t.slice()))}}function Rc(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=L.fromTimestamp(n===1e9?new nt(e+1,0):new nt(e,n));return new zt(s,x.empty(),t)}function Pc(r){return new zt(r.readTime,r.key,-1)}class zt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new zt(L.min(),x.empty(),-1)}static max(){return new zt(L.max(),x.empty(),-1)}}function Vc(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(r.documentKey,t.documentKey),e!==0?e:$(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Sc)throw r;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,n)=>{e(t)})}static reject(t){return new V((e,n)=>{n(t)})}static waitFor(t){return new V((e,n)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},h=>n(h))}),u=!0,o===s&&e()})}static or(t){let e=V.resolve(!1);for(const n of t)e=e.next(s=>s?V.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new V((n,s)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{u[f]=m,++c,c===o&&n(u)},m=>s(m))}})}static doWhile(t,e){return new V((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function bc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function pn(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}di.oe=-1;function sr(r){return r==null}function Yn(r){return r===0&&1/r==-1/0}function Dc(r){return typeof r=="number"&&Number.isInteger(r)&&!Yn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Re(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function ea(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Un(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Un(this.root,t,this.comparator,!1)}getReverseIterator(){return new Un(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Un(this.root,t,this.comparator,!0)}}class Un{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??at.RED,this.left=s??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new at(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return at.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,s,o){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new to(this.data.getIterator())}getIteratorFrom(t){return new to(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class to{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new wt([])}unionWith(t){let e=new lt(ut.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _e(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new na("Invalid base64 string: "+o):o}}(t);return new ct(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const Nc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(r){if(G(!!r),typeof r=="string"){let t=0;const e=Nc.exec(r);if(G(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Z(r.seconds),nanos:Z(r.nanos)}}function Z(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function re(r){return typeof r=="string"?ct.fromBase64String(r):ct.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function pi(r){const t=r.mapValue.fields.__previous_value__;return fi(t)?pi(t):t}function an(r){const t=Gt(r.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e,n,s,o,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class un{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new un("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof un&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ie(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?fi(r)?4:xc(r)?9007199254740991:Oc(r)?10:11:M()}function St(r,t){if(r===t)return!0;const e=ie(r);if(e!==ie(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return an(r).isEqual(an(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Gt(s.timestampValue),c=Gt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,o){return re(s.bytesValue).isEqual(re(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(r,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=Z(s.doubleValue),c=Z(o.doubleValue);return u===c?Yn(u)===Yn(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return _e(r.arrayValue.values||[],t.arrayValue.values||[],St);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Zs(u)!==Zs(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!St(u[h],c[h])))return!1;return!0}(r,t);default:return M()}}function ln(r,t){return(r.values||[]).find(e=>St(e,t))!==void 0}function ye(r,t){if(r===t)return 0;const e=ie(r),n=ie(t);if(e!==n)return $(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=Z(o.integerValue||o.doubleValue),h=Z(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return eo(r.timestampValue,t.timestampValue);case 4:return eo(an(r),an(t));case 5:return $(r.stringValue,t.stringValue);case 6:return function(o,u){const c=re(o),h=re(u);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=$(c[f],h[f]);if(m!==0)return m}return $(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=$(Z(o.latitude),Z(u.latitude));return c!==0?c:$(Z(o.longitude),Z(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return no(r.arrayValue,t.arrayValue);case 10:return function(o,u){var c,h,f,m;const A=o.fields||{},R=u.fields||{},S=(c=A.value)===null||c===void 0?void 0:c.arrayValue,D=(h=R.value)===null||h===void 0?void 0:h.arrayValue,O=$(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((m=D==null?void 0:D.values)===null||m===void 0?void 0:m.length)||0);return O!==0?O:no(S,D)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===Bn.mapValue&&u===Bn.mapValue)return 0;if(o===Bn.mapValue)return 1;if(u===Bn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let A=0;A<h.length&&A<m.length;++A){const R=$(h[A],m[A]);if(R!==0)return R;const S=ye(c[h[A]],f[m[A]]);if(S!==0)return S}return $(h.length,m.length)}(r.mapValue,t.mapValue);default:throw M()}}function eo(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return $(r,t);const e=Gt(r),n=Gt(t),s=$(e.seconds,n.seconds);return s!==0?s:$(e.nanos,n.nanos)}function no(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=ye(e[s],n[s]);if(o)return o}return $(e.length,n.length)}function Ee(r){return Yr(r)}function Yr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Gt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return re(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return x.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=Yr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of n)o?o=!1:s+=",",s+=`${u}:${Yr(e.fields[u])}`;return s+"}"}(r.mapValue):M()}function ro(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Xr(r){return!!r&&"integerValue"in r}function mi(r){return!!r&&"arrayValue"in r}function io(r){return!!r&&"nullValue"in r}function so(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function $n(r){return!!r&&"mapValue"in r}function Oc(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Je(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Re(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Je(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Je(r.arrayValue.values[e]);return t}return Object.assign({},r)}function xc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!$n(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Je(e)}setAll(t){let e=ut.emptyPath(),n={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,s),n={},s=[],e=c.popLast()}u?n[c.lastSegment()]=Je(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());$n(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return St(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];$n(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Re(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new It(Je(this.value))}}function ra(r){const t=[];return Re(r.fields,(e,n)=>{const s=new ut([e]);if($n(n)){const o=ra(n.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,n,s,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),It.empty(),0)}static newFoundDocument(t,e,n,s){return new _t(t,1,e,L.min(),n,s,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),It.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e){this.position=t,this.inclusive=e}}function oo(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],u=r.position[s];if(o.field.isKeyField()?n=x.comparator(x.fromName(u.referenceValue),e.key):n=ye(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ao(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!St(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Mc(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{}class et extends ia{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Fc(t,e,n):e==="array-contains"?new qc(t,n):e==="in"?new jc(t,n):e==="not-in"?new $c(t,n):e==="array-contains-any"?new zc(t,n):new et(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Uc(t,n):new Bc(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ye(e,this.value)):e!==null&&ie(this.value)===ie(e)&&this.matchesComparison(ye(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rt extends ia{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Rt(t,e)}matches(t){return sa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function sa(r){return r.op==="and"}function oa(r){return Lc(r)&&sa(r)}function Lc(r){for(const t of r.filters)if(t instanceof Rt)return!1;return!0}function Jr(r){if(r instanceof et)return r.field.canonicalString()+r.op.toString()+Ee(r.value);if(oa(r))return r.filters.map(t=>Jr(t)).join(",");{const t=r.filters.map(e=>Jr(e)).join(",");return`${r.op}(${t})`}}function aa(r,t){return r instanceof et?function(n,s){return s instanceof et&&n.op===s.op&&n.field.isEqual(s.field)&&St(n.value,s.value)}(r,t):r instanceof Rt?function(n,s){return s instanceof Rt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,u,c)=>o&&aa(u,s.filters[c]),!0):!1}(r,t):void M()}function ua(r){return r instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Ee(e.value)}`}(r):r instanceof Rt?function(e){return e.op.toString()+" {"+e.getFilters().map(ua).join(" ,")+"}"}(r):"Filter"}class Fc extends et{constructor(t,e,n){super(t,e,n),this.key=x.fromName(n.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Uc extends et{constructor(t,e){super(t,"in",e),this.keys=la("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Bc extends et{constructor(t,e){super(t,"not-in",e),this.keys=la("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function la(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>x.fromName(n.referenceValue))}class qc extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return mi(e)&&ln(e.arrayValue,this.value)}}class jc extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ln(this.value.arrayValue,e)}}class $c extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(ln(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ln(this.value.arrayValue,e)}}class zc extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!mi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>ln(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e=null,n=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function uo(r,t=null,e=[],n=[],s=null,o=null,u=null){return new Gc(r,t,e,n,s,o,u)}function gi(r){const t=F(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Jr(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),sr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ee(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ee(n)).join(",")),t.ue=e}return t.ue}function _i(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Mc(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!aa(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!ao(r.startAt,t.startAt)&&ao(r.endAt,t.endAt)}function Zr(r){return x.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e=null,n=[],s=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Kc(r,t,e,n,s,o,u,c){return new Pe(r,t,e,n,s,o,u,c)}function yi(r){return new Pe(r)}function lo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ca(r){return r.collectionGroup!==null}function Ze(r){const t=F(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new lt(ut.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new cn(o,n))}),e.has(ut.keyField().canonicalString())||t.ce.push(new cn(ut.keyField(),n))}return t.ce}function Pt(r){const t=F(r);return t.le||(t.le=Wc(t,Ze(r))),t.le}function Wc(r,t){if(r.limitType==="F")return uo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new cn(s.field,o)});const e=r.endAt?new Xn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Xn(r.startAt.position,r.startAt.inclusive):null;return uo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function ti(r,t){const e=r.filters.concat([t]);return new Pe(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function ei(r,t,e){return new Pe(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function or(r,t){return _i(Pt(r),Pt(t))&&r.limitType===t.limitType}function ha(r){return`${gi(Pt(r))}|lt:${r.limitType}`}function de(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ua(s)).join(", ")}]`),sr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ee(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ee(s)).join(",")),`Target(${n})`}(Pt(r))}; limitType=${r.limitType})`}function ar(r,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):x.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,s){for(const o of Ze(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(u,c,h){const f=oo(u,c,h);return u.inclusive?f<=0:f<0}(n.startAt,Ze(n),s)||n.endAt&&!function(u,c,h){const f=oo(u,c,h);return u.inclusive?f>=0:f>0}(n.endAt,Ze(n),s))}(r,t)}function Hc(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function da(r){return(t,e)=>{let n=!1;for(const s of Ze(r)){const o=Qc(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Qc(r,t,e){const n=r.field.isKeyField()?x.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?ye(h,f):M()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Re(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return ea(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=new X(x.comparator);function Mt(){return Yc}const fa=new X(x.comparator);function He(...r){let t=fa;for(const e of r)t=t.insert(e.key,e);return t}function pa(r){let t=fa;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Jt(){return tn()}function ma(){return tn()}function tn(){return new Ve(r=>r.toString(),(r,t)=>r.isEqual(t))}const Xc=new X(x.comparator),Jc=new lt(x.comparator);function U(...r){let t=Jc;for(const e of r)t=t.add(e);return t}const Zc=new lt($);function th(){return Zc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yn(t)?"-0":t}}function ga(r){return{integerValue:""+r}}function eh(r,t){return Dc(t)?ga(t):Ei(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this._=void 0}}function nh(r,t,e){return r instanceof Jn?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&fi(o)&&(o=pi(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):r instanceof hn?ya(r,t):r instanceof dn?Ea(r,t):function(s,o){const u=_a(s,o),c=co(u)+co(s.Pe);return Xr(u)&&Xr(s.Pe)?ga(c):Ei(s.serializer,c)}(r,t)}function rh(r,t,e){return r instanceof hn?ya(r,t):r instanceof dn?Ea(r,t):e}function _a(r,t){return r instanceof Zn?function(n){return Xr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Jn extends ur{}class hn extends ur{constructor(t){super(),this.elements=t}}function ya(r,t){const e=va(t);for(const n of r.elements)e.some(s=>St(s,n))||e.push(n);return{arrayValue:{values:e}}}class dn extends ur{constructor(t){super(),this.elements=t}}function Ea(r,t){let e=va(t);for(const n of r.elements)e=e.filter(s=>!St(s,n));return{arrayValue:{values:e}}}class Zn extends ur{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function co(r){return Z(r.integerValue||r.doubleValue)}function va(r){return mi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function ih(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof hn&&s instanceof hn||n instanceof dn&&s instanceof dn?_e(n.elements,s.elements,St):n instanceof Zn&&s instanceof Zn?St(n.Pe,s.Pe):n instanceof Jn&&s instanceof Jn}(r.transform,t.transform)}class sh{constructor(t,e){this.version=t,this.transformResults=e}}class kt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kt}static exists(t){return new kt(void 0,t)}static updateTime(t){return new kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function zn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class lr{}function Ta(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Aa(r.key,kt.none()):new mn(r.key,r.data,kt.none());{const e=r.data,n=It.empty();let s=new lt(ut.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),s=s.add(o)}return new se(r.key,n,new wt(s.toArray()),kt.none())}}function oh(r,t,e){r instanceof mn?function(s,o,u){const c=s.value.clone(),h=fo(s.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof se?function(s,o,u){if(!zn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=fo(s.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(Ia(s)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function en(r,t,e,n){return r instanceof mn?function(o,u,c,h){if(!zn(o.precondition,u))return c;const f=o.value.clone(),m=po(o.fieldTransforms,h,u);return f.setAll(m),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof se?function(o,u,c,h){if(!zn(o.precondition,u))return c;const f=po(o.fieldTransforms,h,u),m=u.data;return m.setAll(Ia(o)),m.setAll(f),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,u,c){return zn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function ah(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),o=_a(n.transform,s||null);o!=null&&(e===null&&(e=It.empty()),e.set(n.field,o))}return e||null}function ho(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&_e(n,s,(o,u)=>ih(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class mn extends lr{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class se extends lr{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ia(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function fo(r,t,e){const n=new Map;G(r.length===e.length);for(let s=0;s<e.length;s++){const o=r[s],u=o.transform,c=t.data.field(o.field);n.set(o.field,rh(u,c,e[s]))}return n}function po(r,t,e){const n=new Map;for(const s of r){const o=s.transform,u=e.data.field(s.field);n.set(s.field,nh(o,u,t))}return n}class Aa extends lr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uh extends lr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&oh(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=en(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=en(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ma();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const h=Ta(u,c);h!==null&&n.set(s.key,h),u.isValidDocument()||u.convertToNoDocument(L.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&_e(this.mutations,t.mutations,(e,n)=>ho(e,n))&&_e(this.baseMutations,t.baseMutations,(e,n)=>ho(e,n))}}class vi{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){G(t.mutations.length===n.length);let s=function(){return Xc}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,n[u].version);return new vi(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,B;function dh(r){switch(r){default:return M();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function wa(r){if(r===void 0)return xt("GRPC error has no .code"),P.UNKNOWN;switch(r){case tt.OK:return P.OK;case tt.CANCELLED:return P.CANCELLED;case tt.UNKNOWN:return P.UNKNOWN;case tt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case tt.INTERNAL:return P.INTERNAL;case tt.UNAVAILABLE:return P.UNAVAILABLE;case tt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case tt.NOT_FOUND:return P.NOT_FOUND;case tt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case tt.ABORTED:return P.ABORTED;case tt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case tt.DATA_LOSS:return P.DATA_LOSS;default:return M()}}(B=tt||(tt={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=new Zt([4294967295,4294967295],0);function mo(r){const t=fh().encode(r),e=new Wo;return e.update(t),new Uint8Array(e.digest())}function go(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Zt([e,n],0),new Zt([s,o],0)]}class Ti{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Qe(`Invalid padding: ${e}`);if(n<0)throw new Qe(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Qe(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Qe(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Zt.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(Zt.fromNumber(n)));return s.compare(ph)===1&&(s=new Zt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=mo(t),[n,s]=go(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Ti(o,s,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.Ie===0)return;const e=mo(t),[n,s]=go(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Qe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,gn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new cr(L.min(),s,new X($),Mt(),U())}}class gn{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new gn(n,e,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class Ra{constructor(t,e){this.targetId=t,this.me=e}}class Pa{constructor(t,e,n=ct.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class _o{constructor(){this.fe=0,this.ge=Eo(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),n=U();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:M()}}),new gn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Eo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class mh{constructor(t){this.Le=t,this.Be=new Map,this.ke=Mt(),this.qe=yo(),this.Qe=new X($)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Zr(o))if(n===0){const u=new x(o.path);this.Ue(e,u,_t.newNoDocument(u,L.min()))}else G(n===1);else{const u=this.Ye(e);if(u!==n){const c=this.Ze(t),h=c?this.Xe(c,t,u):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let u,c;try{u=re(n).toUint8Array()}catch(h){if(h instanceof na)return ge("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Ti(u,s,o)}catch(h){return ge(h instanceof Qe?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const u=this.Le.tt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const c=this.Je(u);if(c){if(o.current&&Zr(c.target)){const h=new x(c.target.path);this.ke.get(h)!==null||this.it(u,h)||this.Ue(u,h,_t.newNoDocument(h,t))}o.be&&(e.set(u,o.ve()),o.Ce())}});let n=U();this.qe.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const s=new cr(t,e,this.Qe,this.ke,n);return this.ke=Mt(),this.qe=yo(),this.Qe=new X($),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new _o,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new lt($),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new _o),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function yo(){return new X(x.comparator)}function Eo(){return new X(x.comparator)}const gh={asc:"ASCENDING",desc:"DESCENDING"},_h={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yh={and:"AND",or:"OR"};class Eh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ni(r,t){return r.useProto3Json||sr(t)?t:{value:t}}function tr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Va(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function vh(r,t){return tr(r,t.toTimestamp())}function Vt(r){return G(!!r),L.fromTimestamp(function(e){const n=Gt(e);return new nt(n.seconds,n.nanos)}(r))}function Ii(r,t){return ri(r,t).canonicalString()}function ri(r,t){const e=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Sa(r){const t=Y.fromString(r);return G(ka(t)),t}function ii(r,t){return Ii(r.databaseId,t.path)}function qr(r,t){const e=Sa(t);if(e.get(1)!==r.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new x(ba(e))}function Ca(r,t){return Ii(r.databaseId,t)}function Th(r){const t=Sa(r);return t.length===4?Y.emptyPath():ba(t)}function si(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ba(r){return G(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function vo(r,t,e){return{name:ii(r,t),fields:e.value.mapValue.fields}}function Ih(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(G(m===void 0||typeof m=="string"),ct.fromBase64String(m||"")):(G(m===void 0||m instanceof Buffer||m instanceof Uint8Array),ct.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const m=f.code===void 0?P.UNKNOWN:wa(f.code);return new N(m,f.message||"")}(u);e=new Pa(n,s,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=qr(r,n.document.name),o=Vt(n.document.updateTime),u=n.document.createTime?Vt(n.document.createTime):L.min(),c=new It({mapValue:{fields:n.document.fields}}),h=_t.newFoundDocument(s,o,u,c),f=n.targetIds||[],m=n.removedTargetIds||[];e=new Gn(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=qr(r,n.document),o=n.readTime?Vt(n.readTime):L.min(),u=_t.newNoDocument(s,o),c=n.removedTargetIds||[];e=new Gn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=qr(r,n.document),o=n.removedTargetIds||[];e=new Gn([],o,s,null)}else{if(!("filter"in t))return M();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,u=new hh(s,o),c=n.targetId;e=new Ra(c,u)}}return e}function Ah(r,t){let e;if(t instanceof mn)e={update:vo(r,t.key,t.value)};else if(t instanceof Aa)e={delete:ii(r,t.key)};else if(t instanceof se)e={update:vo(r,t.key,t.data),updateMask:Nh(t.fieldMask)};else{if(!(t instanceof uh))return M();e={verify:ii(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const c=u.transform;if(c instanceof Jn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof hn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof dn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Zn)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw M()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:vh(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(r,t.precondition)),e}function wh(r,t){return r&&r.length>0?(G(t!==void 0),r.map(e=>function(s,o){let u=s.updateTime?Vt(s.updateTime):Vt(o);return u.isEqual(L.min())&&(u=Vt(o)),new sh(u,s.transformResults||[])}(e,t))):[]}function Rh(r,t){return{documents:[Ca(r,t.path)]}}function Ph(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ca(r,s);const o=function(f){if(f.length!==0)return Na(Rt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(m=>function(R){return{field:fe(R.field),direction:Ch(R.dir)}}(m))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=ni(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function Vh(r){let t=Th(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){G(n===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(A){const R=Da(A);return R instanceof Rt&&oa(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(R=>function(D){return new cn(pe(D.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(A){let R;return R=typeof A=="object"?A.value:A,sr(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(A){const R=!!A.before,S=A.values||[];return new Xn(S,R)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const R=!A.before,S=A.values||[];return new Xn(S,R)}(e.endAt)),Kc(t,s,u,o,c,"F",h,f)}function Sh(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Da(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=pe(e.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=pe(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=pe(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=pe(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(r):r.fieldFilter!==void 0?function(e){return et.create(pe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Rt.create(e.compositeFilter.filters.map(n=>Da(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(r):M()}function Ch(r){return gh[r]}function bh(r){return _h[r]}function Dh(r){return yh[r]}function fe(r){return{fieldPath:r.canonicalString()}}function pe(r){return ut.fromServerFormat(r.fieldPath)}function Na(r){return r instanceof et?function(e){if(e.op==="=="){if(so(e.value))return{unaryFilter:{field:fe(e.field),op:"IS_NAN"}};if(io(e.value))return{unaryFilter:{field:fe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(so(e.value))return{unaryFilter:{field:fe(e.field),op:"IS_NOT_NAN"}};if(io(e.value))return{unaryFilter:{field:fe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fe(e.field),op:bh(e.op),value:e.value}}}(r):r instanceof Rt?function(e){const n=e.getFilters().map(s=>Na(s));return n.length===1?n[0]:{compositeFilter:{op:Dh(e.op),filters:n}}}(r):M()}function Nh(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ka(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e,n,s,o=L.min(),u=L.min(),c=ct.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t){this.ct=t}}function Oh(r){const t=Vh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ei(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this.un=new Mh}addToCollectionParentIndex(t,e){return this.un.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(zt.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(zt.min())}updateCollectionGroup(t,e,n){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class Mh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new lt(Y.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new lt(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new ve(0)}static kn(){return new ve(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.changes=new Ve(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?V.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&en(n.mutation,s,wt.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,U()).next(()=>n))}getLocalViewOfDocuments(t,e,n=U()){const s=Jt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let u=He();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=Jt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,U()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,s){let o=Mt();const u=tn(),c=function(){return tn()}();return e.forEach((h,f)=>{const m=n.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof se)?o=o.insert(f.key,f):m!==void 0?(u.set(f.key,m.mutation.getFieldMask()),en(m.mutation,f,m.mutation.getFieldMask(),nt.now())):u.set(f.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>u.set(f,m)),e.forEach((f,m)=>{var A;return c.set(f,new Fh(m,(A=u.get(f))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const n=tn();let s=new X((u,c)=>u-c),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=n.get(h)||wt.empty();m=c.applyToLocalView(f,m),n.set(h,m);const A=(s.get(c.batchId)||U()).add(h);s=s.insert(c.batchId,A)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,A=ma();m.forEach(R=>{if(!o.has(R)){const S=Ta(e.get(R),n.get(R));S!==null&&A.set(R,S),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return V.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(u){return x.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ca(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):V.resolve(Jt());let c=-1,h=o;return u.next(f=>V.forEach(f,(m,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(m)?V.resolve():this.remoteDocumentCache.getEntry(t,m).next(R=>{h=h.insert(m,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,U())).next(m=>({batchId:c,changes:pa(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(n=>{let s=He();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let u=He();return this.indexManager.getCollectionParents(t,o).next(c=>V.forEach(c,h=>{const f=function(A,R){return new Pe(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,s).next(m=>{m.forEach((A,R)=>{u=u.insert(A,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(u=>{o.forEach((h,f)=>{const m=f.getKey();u.get(m)===null&&(u=u.insert(m,_t.newInvalidDocument(m)))});let c=He();return u.forEach((h,f)=>{const m=o.get(h);m!==void 0&&en(m.mutation,f,wt.empty(),nt.now()),ar(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return V.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Vt(s.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Oh(s.bundledQuery),readTime:Vt(s.readTime)}}(e)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.overlays=new X(x.comparator),this.Ir=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Jt();return V.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.ht(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),V.resolve()}getOverlaysForCollection(t,e,n){const s=Jt(),o=e.length+1,u=new x(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&s.set(h.getKey(),h)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new X((f,m)=>f-m);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let m=o.get(f.largestBatchId);m===null&&(m=Jt(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=Jt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=s)););return V.resolve(c)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const u=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new ch(e,n));let o=this.Ir.get(e);o===void 0&&(o=U(),this.Ir.set(e,o)),this.Ir.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.Tr=new lt(it.Er),this.dr=new lt(it.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new it(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new it(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new x(new Y([])),n=new it(e,t),s=new it(e,t+1),o=[];return this.dr.forEachInRange([n,s],u=>{this.Vr(u),o.push(u.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new x(new Y([])),n=new it(e,t),s=new it(e,t+1);let o=U();return this.dr.forEachInRange([n,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new it(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class it{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return x.comparator(t.key,e.key)||$(t.wr,e.wr)}static Ar(t,e){return $(t.wr,e.wr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new lt(it.Er)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new lh(o,e,n,s);this.mutationQueue.push(u);for(const c of s)this.br=this.br.add(new it(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return V.resolve(u)}lookupMutationBatch(t,e){return V.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.vr(n),o=s<0?0:s;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new it(e,0),s=new it(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,s],u=>{const c=this.Dr(u.wr);o.push(c)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new lt($);return e.forEach(s=>{const o=new it(s,0),u=new it(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],c=>{n=n.add(c.wr)})}),V.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;x.isDocumentKey(o)||(o=o.child(""));const u=new it(new x(o),0);let c=new lt($);return this.br.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.wr)),!0)},u),V.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(n=>{const s=this.Dr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){G(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return V.forEach(e.mutations,s=>{const o=new it(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new it(e,0),s=this.br.firstAfterOrEqual(n);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t){this.Mr=t,this.docs=function(){return new X(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,u=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return V.resolve(n?n.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let n=Mt();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():_t.newInvalidDocument(s))}),V.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=Mt();const u=e.path,c=new x(u.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Vc(Pc(m),n)<=0||(s.has(m.key)||ar(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,n,s){M()}Or(t,e){return V.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Gh(this)}getSize(t){return V.resolve(this.size)}}class Gh extends Lh{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(n)}),V.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t){this.persistence=t,this.Nr=new Ve(e=>gi(e),_i),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ai,this.targetCount=0,this.kr=ve.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,s)=>e(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),V.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new ve(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Kn(e),V.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.Nr.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),V.waitFor(o).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return V.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),V.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return V.resolve(n)}containsKey(t,e){return V.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,e){this.qr={},this.overlays={},this.Qr=new di(0),this.Kr=!1,this.Kr=!0,this.$r=new jh,this.referenceDelegate=t(this),this.Ur=new Kh(this),this.indexManager=new xh,this.remoteDocumentCache=function(s){return new zh(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new kh(e),this.Gr=new Bh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new qh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new $h(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){k("MemoryPersistence","Starting transaction:",t);const s=new Hh(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return V.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class Hh extends Cc{constructor(t){super(),this.currentSequenceNumber=t}}class wi{constructor(t){this.persistence=t,this.Jr=new Ai,this.Yr=null}static Zr(t){return new wi(t)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),V.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),V.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,n=>{const s=x.fromPath(n);return this.ei(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return V.or([()=>V.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=s}static Wi(t,e){let n=U(),s=U();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ri(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return cl()?8:bc(ul())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.Yi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Zi(t,e,s,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Qh;return this.Xi(t,e,u).next(c=>{if(o.result=c,this.zi)return this.es(t,e,u,c.size)})}).next(()=>o.result)}es(t,e,n,s){return n.documentReadCount<this.ji?(Ke()<=q.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",de(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Ke()<=q.DEBUG&&k("QueryEngine","Query:",de(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(Ke()<=q.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",de(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Pt(e))):V.resolve())}Yi(t,e){if(lo(e))return V.resolve(null);let n=Pt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ei(e,null,"F"),n=Pt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=U(...o);return this.Ji.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.ts(e,c);return this.ns(e,f,u,h.readTime)?this.Yi(t,ei(e,null,"F")):this.rs(t,f,e,h)}))})))}Zi(t,e,n,s){return lo(e)||s.isEqual(L.min())?V.resolve(null):this.Ji.getDocuments(t,n).next(o=>{const u=this.ts(e,o);return this.ns(e,u,n,s)?V.resolve(null):(Ke()<=q.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),de(e)),this.rs(t,u,e,Rc(s,-1)).next(c=>c))})}ts(t,e){let n=new lt(da(t));return e.forEach((s,o)=>{ar(t,o)&&(n=n.add(o))}),n}ns(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,n){return Ke()<=q.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",de(e)),this.Ji.getDocumentsMatchingQuery(t,e,zt.min(),n)}rs(t,e,n,s){return this.Ji.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e,n,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new X($),this._s=new Ve(o=>gi(o),_i),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Uh(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Jh(r,t,e,n){return new Xh(r,t,e,n)}async function Oa(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let h=U();for(const f of s){u.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(f=>({hs:f,removedBatchIds:u,addedBatchIds:c}))})})}function Zh(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,m){const A=f.batch,R=A.keys();let S=V.resolve();return R.forEach(D=>{S=S.next(()=>m.getEntry(h,D)).next(O=>{const b=f.docVersions.get(D);G(b!==null),O.version.compareTo(b)<0&&(A.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),m.addEntry(O)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,A))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=U();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function xa(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function td(r,t){const e=F(r),n=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((m,A)=>{const R=s.get(A);if(!R)return;c.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,A).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,A)));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?S=S.withResumeToken(ct.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),s=s.insert(A,S),function(O,b,z){return O.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(R,S,m)&&c.push(e.Ur.updateTargetData(o,S))});let h=Mt(),f=U();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(ed(o,u,t.documentUpdates).next(m=>{h=m.Ps,f=m.Is})),!n.isEqual(L.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(A=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(m)}return V.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.os=s,o))}function ed(r,t,e){let n=U(),s=U();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Mt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):k("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Ps:u,Is:s}})}function nd(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function rd(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Ur.getTargetData(n,t).next(o=>o?(s=o,V.resolve(s)):e.Ur.allocateTargetId(n).next(u=>(s=new qt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function oi(r,t,e){const n=F(r),s=n.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!pn(u))throw u;k("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.os=n.os.remove(t),n._s.delete(s.target)}function To(r,t,e){const n=F(r);let s=L.min(),o=U();return n.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,m){const A=F(h),R=A._s.get(m);return R!==void 0?V.resolve(A.os.get(R)):A.Ur.getTargetData(f,m)}(n,u,Pt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>n.ss.getDocumentsMatchingQuery(u,t,e?s:L.min(),e?o:U())).next(c=>(id(n,Hc(t),c),{documents:c,Ts:o})))}function id(r,t,e){let n=r.us.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.us.set(t,n)}class Io{constructor(){this.activeTargetIds=th()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class sd{constructor(){this.so=new Io,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Io,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn=null;function jr(){return qn===null?qn=function(){return 268435456+Math.round(2147483648*Math.random())}():qn++,"0x"+qn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class ld extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,n,s,o,u){const c=jr(),h=this.xo(e,n.toUriEncodedString());k("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,u),this.No(e,h,f,s).then(m=>(k("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw ge("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",s),m})}Lo(e,n,s,o,u,c){return this.Mo(e,n,s,o,u)}Oo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+we}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}xo(e,n){const s=ad[e];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,s){const o=jr();return new Promise((u,c)=>{const h=new Ho;h.setWithCredentials(!0),h.listenOnce(Qo.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case jn.NO_ERROR:const m=h.getResponseJson();k(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),u(m);break;case jn.TIMEOUT:k(mt,`RPC '${t}' ${o} timed out`),c(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case jn.HTTP_ERROR:const A=h.getStatus();if(k(mt,`RPC '${t}' ${o} failed with status:`,A,"response text:",h.getResponseText()),A>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const D=function(b){const z=b.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(z)>=0?z:P.UNKNOWN}(S.status);c(new N(D,S.message))}else c(new N(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new N(P.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{k(mt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);k(mt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,n,15)})}Bo(t,e,n){const s=jr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Jo(),c=Xo(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");k(mt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const A=u.createWebChannel(m,h);let R=!1,S=!1;const D=new ud({Io:b=>{S?k(mt,`Not sending because RPC '${t}' stream ${s} is closed:`,b):(R||(k(mt,`Opening RPC '${t}' stream ${s} transport.`),A.open(),R=!0),k(mt,`RPC '${t}' stream ${s} sending:`,b),A.send(b))},To:()=>A.close()}),O=(b,z,K)=>{b.listen(z,H=>{try{K(H)}catch(rt){setTimeout(()=>{throw rt},0)}})};return O(A,We.EventType.OPEN,()=>{S||(k(mt,`RPC '${t}' stream ${s} transport opened.`),D.yo())}),O(A,We.EventType.CLOSE,()=>{S||(S=!0,k(mt,`RPC '${t}' stream ${s} transport closed`),D.So())}),O(A,We.EventType.ERROR,b=>{S||(S=!0,ge(mt,`RPC '${t}' stream ${s} transport errored:`,b),D.So(new N(P.UNAVAILABLE,"The operation could not be completed")))}),O(A,We.EventType.MESSAGE,b=>{var z;if(!S){const K=b.data[0];G(!!K);const H=K,rt=H.error||((z=H[0])===null||z===void 0?void 0:z.error);if(rt){k(mt,`RPC '${t}' stream ${s} received error:`,rt);const Ct=rt.status;let st=function(_){const y=tt[_];if(y!==void 0)return wa(y)}(Ct),v=rt.message;st===void 0&&(st=P.INTERNAL,v="Unknown error status: "+Ct+" with message "+rt.message),S=!0,D.So(new N(st,v)),A.close()}else k(mt,`RPC '${t}' stream ${s} received:`,K),D.bo(K)}}),O(c,Yo.STAT_EVENT,b=>{b.stat===Qr.PROXY?k(mt,`RPC '${t}' stream ${s} detected buffering proxy`):b.stat===Qr.NOPROXY&&k(mt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}function $r(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(r){return new Eh(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,e,n=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-n);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,e,n,s,o,u,c,h){this.ui=t,this.Ho=n,this.Jo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ma(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(xt(e.toString()),xt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===e&&this.P_(n,s)},n=>{t(()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return k("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cd extends La{constructor(t,e,n,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Ih(this.serializer,t),n=function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?Vt(u.readTime):L.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=si(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=Zr(h)?{documents:Rh(o,h)}:{query:Ph(o,h)._t},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Va(o,u.resumeToken);const f=ni(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(L.min())>0){c.readTime=tr(o,u.snapshotVersion.toTimestamp());const f=ni(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=Sh(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=si(this.serializer),e.removeTarget=t,this.a_(e)}}class hd extends La{constructor(t,e,n,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return G(!!t.streamToken),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){G(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=wh(t.writeResults,t.commitTime),n=Vt(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=si(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Ah(this.serializer,n))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Mo(t,ri(e,n),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}Lo(t,e,n,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Lo(t,ri(e,n),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(P.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class fd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xt(e),this.D_=!1):k("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(u=>{n.enqueueAndForget(async()=>{oe(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=F(h);f.L_.add(4),await _n(f),f.q_.set("Unknown"),f.L_.delete(4),await dr(f)}(this))})}),this.q_=new fd(n,s)}}async function dr(r){if(oe(r))for(const t of r.B_)await t(!0)}async function _n(r){for(const t of r.B_)await t(!1)}function Fa(r,t){const e=F(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Ci(e)?Si(e):Se(e).r_()&&Vi(e,t))}function Pi(r,t){const e=F(r),n=Se(e);e.N_.delete(t),n.r_()&&Ua(e,t),e.N_.size===0&&(n.r_()?n.o_():oe(e)&&e.q_.set("Unknown"))}function Vi(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Se(r).A_(t)}function Ua(r,t){r.Q_.xe(t),Se(r).R_(t)}function Si(r){r.Q_=new mh({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),Se(r).start(),r.q_.v_()}function Ci(r){return oe(r)&&!Se(r).n_()&&r.N_.size>0}function oe(r){return F(r).L_.size===0}function Ba(r){r.Q_=void 0}async function md(r){r.q_.set("Online")}async function gd(r){r.N_.forEach((t,e)=>{Vi(r,t)})}async function _d(r,t){Ba(r),Ci(r)?(r.q_.M_(t),Si(r)):r.q_.set("Unknown")}async function yd(r,t,e){if(r.q_.set("Online"),t instanceof Pa&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,u),s.N_.delete(c),s.Q_.removeTarget(c))}(r,t)}catch(n){k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await er(r,n)}else if(t instanceof Gn?r.Q_.Ke(t):t instanceof Ra?r.Q_.He(t):r.Q_.We(t),!e.isEqual(L.min()))try{const n=await xa(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.Q_.rt(u);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(f);m&&o.N_.set(f,m.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,f)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(ct.EMPTY_BYTE_STRING,m.snapshotVersion)),Ua(o,h);const A=new qt(m.target,h,f,m.sequenceNumber);Vi(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){k("RemoteStore","Failed to raise snapshot:",n),await er(r,n)}}async function er(r,t,e){if(!pn(t))throw t;r.L_.add(1),await _n(r),r.q_.set("Offline"),e||(e=()=>xa(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await dr(r)})}function qa(r,t){return t().catch(e=>er(r,e,t))}async function fr(r){const t=F(r),e=Kt(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Ed(t);)try{const s=await nd(t.localStore,n);if(s===null){t.O_.length===0&&e.o_();break}n=s.batchId,vd(t,s)}catch(s){await er(t,s)}ja(t)&&$a(t)}function Ed(r){return oe(r)&&r.O_.length<10}function vd(r,t){r.O_.push(t);const e=Kt(r);e.r_()&&e.V_&&e.m_(t.mutations)}function ja(r){return oe(r)&&!Kt(r).n_()&&r.O_.length>0}function $a(r){Kt(r).start()}async function Td(r){Kt(r).p_()}async function Id(r){const t=Kt(r);for(const e of r.O_)t.m_(e.mutations)}async function Ad(r,t,e){const n=r.O_.shift(),s=vi.from(n,t,e);await qa(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await fr(r)}async function wd(r,t){t&&Kt(r).V_&&await async function(n,s){if(function(u){return dh(u)&&u!==P.ABORTED}(s.code)){const o=n.O_.shift();Kt(n).s_(),await qa(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s)),await fr(n)}}(r,t),ja(r)&&$a(r)}async function wo(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const n=oe(e);e.L_.add(3),await _n(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await dr(e)}async function Rd(r,t){const e=F(r);t?(e.L_.delete(2),await dr(e)):t||(e.L_.add(2),await _n(e),e.q_.set("Unknown"))}function Se(r){return r.K_||(r.K_=function(e,n,s){const o=F(e);return o.w_(),new cd(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Eo:md.bind(null,r),Ro:gd.bind(null,r),mo:_d.bind(null,r),d_:yd.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),Ci(r)?Si(r):r.q_.set("Unknown")):(await r.K_.stop(),Ba(r))})),r.K_}function Kt(r){return r.U_||(r.U_=function(e,n,s){const o=F(e);return o.w_(),new hd(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Td.bind(null,r),mo:wd.bind(null,r),f_:Id.bind(null,r),g_:Ad.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await fr(r)):(await r.U_.stop(),r.O_.length>0&&(k("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const u=Date.now()+n,c=new bi(t,e,u,s,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Di(r,t){if(xt("AsyncQueue",`${t}: ${r}`),pn(r))return new N(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.comparator=t?(e,n)=>t(e,n)||x.comparator(e.key,n.key):(e,n)=>x.comparator(e.key,n.key),this.keyedMap=He(),this.sortedSet=new X(this.comparator)}static emptySet(t){return new me(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof me)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new me;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.W_=new X(x.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):M():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Te{constructor(t,e,n,s,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,s,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Te(t,e,me.emptySet(e),u,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&or(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Vd{constructor(){this.queries=Po(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const s=F(e),o=s.queries;s.queries=Po(),o.forEach((u,c)=>{for(const h of c.j_)h.onError(n)})})(this,new N(P.ABORTED,"Firestore shutting down"))}}function Po(){return new Ve(r=>ha(r),or)}async function Sd(r,t){const e=F(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(n=2):(o=new Pd,n=t.J_()?0:1);try{switch(n){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const c=Di(u,`Initialization of query '${de(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Ni(e)}async function Cd(r,t){const e=F(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const u=o.j_.indexOf(t);u>=0&&(o.j_.splice(u,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function bd(r,t){const e=F(r);let n=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const c of u.j_)c.X_(s)&&(n=!0);u.z_=s}}n&&Ni(e)}function Dd(r,t,e){const n=F(r),s=n.queries.get(t);if(s)for(const o of s.j_)o.onError(e);n.queries.delete(t)}function Ni(r){r.Y_.forEach(t=>{t.next()})}var ai,Vo;(Vo=ai||(ai={})).ea="default",Vo.Cache="cache";class Nd{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Te(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Te.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==ai.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t){this.key=t}}class Ga{constructor(t){this.key=t}}class kd{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=U(),this.mutatedKeys=U(),this.Aa=da(t),this.Ra=new me(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Ro,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,A)=>{const R=s.get(m),S=ar(this.query,A)?A:null,D=!!R&&this.mutatedKeys.has(R.key),O=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let b=!1;R&&S?R.data.isEqual(S.data)?D!==O&&(n.track({type:3,doc:S}),b=!0):this.ga(R,S)||(n.track({type:2,doc:S}),b=!0,(h&&this.Aa(S,h)>0||f&&this.Aa(S,f)<0)&&(c=!0)):!R&&S?(n.track({type:0,doc:S}),b=!0):R&&!S&&(n.track({type:1,doc:R}),b=!0,(h||f)&&(c=!0)),b&&(S?(u=u.add(S),o=O?o.add(m):o.delete(m)):(u=u.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const m=this.query.limitType==="F"?u.last():u.first();u=u.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{Ra:u,fa:n,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const u=t.fa.G_();u.sort((m,A)=>function(S,D){const O=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return O(S)-O(D)}(m.type,A.type)||this.Aa(m.doc,A.doc)),this.pa(n),s=s!=null&&s;const c=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,f=h!==this.Ea;return this.Ea=h,u.length!==0||f?{snapshot:new Te(this.query,t.Ra,o,u,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ro,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=U(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new Ga(n))}),this.da.forEach(n=>{t.has(n)||e.push(new za(n))}),e}ba(t){this.Ta=t.Ts,this.da=U();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Te.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Od{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class xd{constructor(t){this.key=t,this.va=!1}}class Md{constructor(t,e,n,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new Ve(c=>ha(c),or),this.Ma=new Map,this.xa=new Set,this.Oa=new X(x.comparator),this.Na=new Map,this.La=new Ai,this.Ba={},this.ka=new Map,this.qa=ve.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Ld(r,t,e=!0){const n=Xa(r);let s;const o=n.Fa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await Ka(n,t,e,!0),s}async function Fd(r,t){const e=Xa(r);await Ka(e,t,!0,!1)}async function Ka(r,t,e,n){const s=await rd(r.localStore,Pt(t)),o=s.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Ud(r,t,o,u==="current",s.resumeToken)),r.isPrimaryClient&&e&&Fa(r.remoteStore,s),c}async function Ud(r,t,e,n,s){r.Ka=(A,R,S)=>async function(O,b,z,K){let H=b.view.ma(z);H.ns&&(H=await To(O.localStore,b.query,!1).then(({documents:v})=>b.view.ma(v,H)));const rt=K&&K.targetChanges.get(b.targetId),Ct=K&&K.targetMismatches.get(b.targetId)!=null,st=b.view.applyChanges(H,O.isPrimaryClient,rt,Ct);return Co(O,b.targetId,st.wa),st.snapshot}(r,A,R,S);const o=await To(r.localStore,t,!0),u=new kd(t,o.Ts),c=u.ma(o.documents),h=gn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),f=u.applyChanges(c,r.isPrimaryClient,h);Co(r,e,f.wa);const m=new Od(t,e,u);return r.Fa.set(t,m),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),f.snapshot}async function Bd(r,t,e){const n=F(r),s=n.Fa.get(t),o=n.Ma.get(s.targetId);if(o.length>1)return n.Ma.set(s.targetId,o.filter(u=>!or(u,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await oi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Pi(n.remoteStore,s.targetId),ui(n,s.targetId)}).catch(fn)):(ui(n,s.targetId),await oi(n.localStore,s.targetId,!0))}async function qd(r,t){const e=F(r),n=e.Fa.get(t),s=e.Ma.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Pi(e.remoteStore,n.targetId))}async function jd(r,t,e){const n=Qd(r);try{const s=await function(u,c){const h=F(u),f=nt.now(),m=c.reduce((S,D)=>S.add(D.key),U());let A,R;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=Mt(),O=U();return h.cs.getEntries(S,m).next(b=>{D=b,D.forEach((z,K)=>{K.isValidDocument()||(O=O.add(z))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,D)).next(b=>{A=b;const z=[];for(const K of c){const H=ah(K,A.get(K.key).overlayedDocument);H!=null&&z.push(new se(K.key,H,ra(H.value.mapValue),kt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,z,c)}).next(b=>{R=b;const z=b.applyToLocalDocumentSet(A,O);return h.documentOverlayCache.saveOverlays(S,b.batchId,z)})}).then(()=>({batchId:R.batchId,changes:pa(A)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(u,c,h){let f=u.Ba[u.currentUser.toKey()];f||(f=new X($)),f=f.insert(c,h),u.Ba[u.currentUser.toKey()]=f}(n,s.batchId,e),await yn(n,s.changes),await fr(n.remoteStore)}catch(s){const o=Di(s,"Failed to persist write");e.reject(o)}}async function Wa(r,t){const e=F(r);try{const n=await td(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Na.get(o);u&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.va=!0:s.modifiedDocuments.size>0?G(u.va):s.removedDocuments.size>0&&(G(u.va),u.va=!1))}),await yn(e,n,t)}catch(n){await fn(n)}}function So(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Fa.forEach((o,u)=>{const c=u.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const h=F(u);h.onlineState=c;let f=!1;h.queries.forEach((m,A)=>{for(const R of A.j_)R.Z_(c)&&(f=!0)}),f&&Ni(h)}(n.eventManager,t),s.length&&n.Ca.d_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function $d(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Na.get(t),o=s&&s.key;if(o){let u=new X(x.comparator);u=u.insert(o,_t.newNoDocument(o,L.min()));const c=U().add(o),h=new cr(L.min(),new Map,new X($),u,c);await Wa(n,h),n.Oa=n.Oa.remove(o),n.Na.delete(t),ki(n)}else await oi(n.localStore,t,!1).then(()=>ui(n,t,e)).catch(fn)}async function zd(r,t){const e=F(r),n=t.batch.batchId;try{const s=await Zh(e.localStore,t);Qa(e,n,null),Ha(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await yn(e,s)}catch(s){await fn(s)}}async function Gd(r,t,e){const n=F(r);try{const s=await function(u,c){const h=F(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next(A=>(G(A!==null),m=A.keys(),h.mutationQueue.removeMutationBatch(f,A))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(n.localStore,t);Qa(n,t,e),Ha(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await yn(n,s)}catch(s){await fn(s)}}function Ha(r,t){(r.ka.get(t)||[]).forEach(e=>{e.resolve()}),r.ka.delete(t)}function Qa(r,t,e){const n=F(r);let s=n.Ba[n.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),n.Ba[n.currentUser.toKey()]=s}}function ui(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(n=>{r.La.containsKey(n)||Ya(r,n)})}function Ya(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(Pi(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),ki(r))}function Co(r,t,e){for(const n of e)n instanceof za?(r.La.addReference(n.key,t),Kd(r,n)):n instanceof Ga?(k("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||Ya(r,n.key)):M()}function Kd(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(k("SyncEngine","New document in limbo: "+e),r.xa.add(n),ki(r))}function ki(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new x(Y.fromString(t)),n=r.qa.next();r.Na.set(n,new xd(e)),r.Oa=r.Oa.insert(e,n),Fa(r.remoteStore,new qt(Pt(yi(e.path)),n,"TargetPurposeLimboResolution",di.oe))}}async function yn(r,t,e){const n=F(r),s=[],o=[],u=[];n.Fa.isEmpty()||(n.Fa.forEach((c,h)=>{u.push(n.Ka(h,t,e).then(f=>{var m;if((f||e)&&n.isPrimaryClient){const A=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,A?"current":"not-current")}if(f){s.push(f);const A=Ri.Wi(h.targetId,f);o.push(A)}}))}),await Promise.all(u),n.Ca.d_(s),await async function(h,f){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>V.forEach(f,R=>V.forEach(R.$i,S=>m.persistence.referenceDelegate.addReference(A,R.targetId,S)).next(()=>V.forEach(R.Ui,S=>m.persistence.referenceDelegate.removeReference(A,R.targetId,S)))))}catch(A){if(!pn(A))throw A;k("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const R=A.targetId;if(!A.fromCache){const S=m.os.get(R),D=S.snapshotVersion,O=S.withLastLimboFreeSnapshotVersion(D);m.os=m.os.insert(R,O)}}}(n.localStore,o))}async function Wd(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const n=await Oa(e.localStore,t);e.currentUser=t,function(o,u){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new N(P.CANCELLED,u))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await yn(e,n.hs)}}function Hd(r,t){const e=F(r),n=e.Na.get(t);if(n&&n.va)return U().add(n.key);{let s=U();const o=e.Ma.get(t);if(!o)return s;for(const u of o){const c=e.Fa.get(u);s=s.unionWith(c.view.Va)}return s}}function Xa(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=$d.bind(null,t),t.Ca.d_=bd.bind(null,t.eventManager),t.Ca.$a=Dd.bind(null,t.eventManager),t}function Qd(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=zd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Gd.bind(null,t),t}class nr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=hr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Jh(this.persistence,new Yh,t.initialUser,this.serializer)}Ga(t){return new Wh(wi.Zr,this.serializer)}Wa(t){return new sd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nr.provider={build:()=>new nr};class li{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>So(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wd.bind(null,this.syncEngine),await Rd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Vd}()}createDatastore(t){const e=hr(t.databaseInfo.databaseId),n=function(o){return new ld(o)}(t.databaseInfo);return function(o,u,c,h){return new dd(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,u,c){return new pd(n,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>So(this.syncEngine,e,0),function(){return Ao.D()?new Ao:new od}())}createSyncEngine(t,e){return function(s,o,u,c,h,f,m){const A=new Md(s,o,u,c,h,f);return m&&(A.Qa=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);k("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await _n(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}li.provider={build:()=>new li};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):xt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,e,n,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=ta.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{k("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(k("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Di(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function zr(r,t){r.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Oa(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function bo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Jd(r);k("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>wo(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>wo(t.remoteStore,s)),r._onlineComponents=t}async function Jd(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await zr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;ge("Error using user provided cache. Falling back to memory cache: "+e),await zr(r,new nr)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await zr(r,new nr);return r._offlineComponents}async function Ja(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await bo(r,r._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await bo(r,new li))),r._onlineComponents}function Zd(r){return Ja(r).then(t=>t.syncEngine)}async function Do(r){const t=await Ja(r),e=t.eventManager;return e.onListen=Ld.bind(null,t.syncEngine),e.onUnlisten=Bd.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Fd.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=qd.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(r,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function tf(r,t,e,n){if(t===!0&&n===!0)throw new N(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function ko(r){if(!x.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Oo(r){if(x.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function pr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M()}function nn(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=pr(r);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Za((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class mr{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gc;switch(n.type){case"firstParty":return new vc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=No.get(e);n&&(k("ComponentProvider","Removing Datastore"),No.delete(e),n.terminate())}(this),Promise.resolve()}}function ef(r,t,e,n={}){var s;const o=(r=nn(r,mr))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&ge("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let c,h;if(typeof n.mockUserToken=="string")c=n.mockUserToken,h=gt.MOCK_USER;else{c=al(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new gt(f)}r._authCredentials=new _c(new Zo(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ae(this.firestore,t,this._query)}}class Tt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $t(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Tt(this.firestore,t,this._key)}}class $t extends ae{constructor(t,e,n){super(t,e,yi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Tt(this.firestore,null,new x(t))}withConverter(t){return new $t(this.firestore,t,this._path)}}function Rf(r,t,...e){if(r=ee(r),tu("collection","path",t),r instanceof mr){const n=Y.fromString(t,...e);return Oo(n),new $t(r,null,n)}{if(!(r instanceof Tt||r instanceof $t))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return Oo(n),new $t(r.firestore,null,n)}}function nf(r,t,...e){if(r=ee(r),arguments.length===1&&(t=ta.newId()),tu("doc","path",t),r instanceof mr){const n=Y.fromString(t,...e);return ko(n),new Tt(r,null,new x(n))}{if(!(r instanceof Tt||r instanceof $t))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return ko(n),new Tt(r.firestore,r instanceof $t?r.converter:null,new x(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ma(this,"async_queue_retry"),this.Vu=()=>{const n=$r();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=$r();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=$r();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new te;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!pn(t))throw t;k("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(n);throw xt("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=bi.createAndSchedule(this,t,e,n,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&M()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Lo(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of n)if(o in s&&typeof s[o]=="function")return!0;return!1}(r,["next","error","complete"])}class rr extends mr{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Mo,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Mo(t),this._firestoreClient=void 0,await t}}}function Pf(r,t){const e=typeof r=="object"?r:oc(),n=typeof r=="string"?r:"(default)",s=ec(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=sl("firestore");o&&ef(s,...o)}return s}function eu(r){if(r._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||rf(r),r._firestoreClient}function rf(r){var t,e,n;const s=r._freezeSettings(),o=function(c,h,f,m){return new kc(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Za(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new Xd(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ie(ct.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ie(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=/^__.*__$/;class of{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,e,this.fieldTransforms):new mn(t,this.data,e,this.fieldTransforms)}}function ru(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Li{constructor(t,e,n,s,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Li(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.Ou(t),s}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return ir(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(ru(this.Cu)&&sf.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class af{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||hr(t)}Qu(t,e,n,s=!1){return new Li({Cu:t,methodName:e,qu:n,path:ut.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iu(r){const t=r._freezeSettings(),e=hr(r._databaseId);return new af(r._databaseId,!!t.ignoreUndefinedProperties,e)}function uf(r,t,e,n,s,o={}){const u=r.Qu(o.merge||o.mergeFields?2:0,t,e,s);au("Data must be an object, but it was:",u,n);const c=su(n,u);let h,f;if(o.merge)h=new wt(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const m=[];for(const A of o.mergeFields){const R=cf(t,A,e);if(!u.contains(R))throw new N(P.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);df(m,R)||m.push(R)}h=new wt(m),f=u.fieldTransforms.filter(A=>h.covers(A.field))}else h=null,f=u.fieldTransforms;return new of(new It(c),h,f)}function lf(r,t,e,n=!1){return Fi(e,r.Qu(n?4:3,t))}function Fi(r,t){if(ou(r=ee(r)))return au("Unsupported field value:",t,r),su(r,t);if(r instanceof nu)return function(n,s){if(!ru(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,s){const o=[];let u=0;for(const c of n){let h=Fi(c,s.Lu(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,s){if((n=ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return eh(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=nt.fromDate(n);return{timestampValue:tr(s.serializer,o)}}if(n instanceof nt){const o=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:tr(s.serializer,o)}}if(n instanceof xi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ie)return{bytesValue:Va(s.serializer,n._byteString)};if(n instanceof Tt){const o=s.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw s.Bu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ii(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Mi)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ei(c.serializer,h)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${pr(n)}`)}(r,t)}function su(r,t){const e={};return ea(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Re(r,(n,s)=>{const o=Fi(s,t.Mu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function ou(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof nt||r instanceof xi||r instanceof Ie||r instanceof Tt||r instanceof nu||r instanceof Mi)}function au(r,t,e){if(!ou(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=pr(e);throw n==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+n)}}function cf(r,t,e){if((t=ee(t))instanceof Oi)return t._internalPath;if(typeof t=="string")return uu(r,t);throw ir("Field path arguments must be of type string or ",r,!1,void 0,e)}const hf=new RegExp("[~\\*/\\[\\]]");function uu(r,t,e){if(t.search(hf)>=0)throw ir(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Oi(...t.split("."))._internalPath}catch{throw ir(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ir(r,t,e,n,s){const o=n&&!n.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${n}`),u&&(h+=` in document ${s}`),h+=")"),new N(P.INVALID_ARGUMENT,c+r+h)}function df(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ff(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ui("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ff extends lu{data(){return super.data()}}function Ui(r,t){return typeof t=="string"?uu(r,t):t instanceof Oi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bi{}class cu extends Bi{}function Vf(r,t,...e){let n=[];t instanceof Bi&&n.push(t),n=n.concat(e),function(o){const u=o.filter(h=>h instanceof ji).length,c=o.filter(h=>h instanceof qi).length;if(u>1||u>0&&c>0)throw new N(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class qi extends cu{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new qi(t,e,n)}_apply(t){const e=this._parse(t);return hu(t._query,e),new ae(t.firestore,t.converter,ti(t._query,e))}_parse(t){const e=iu(t.firestore);return function(o,u,c,h,f,m,A){let R;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Uo(A,m);const S=[];for(const D of A)S.push(Fo(h,o,D));R={arrayValue:{values:S}}}else R=Fo(h,o,A)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Uo(A,m),R=lf(c,u,A,m==="in"||m==="not-in");return et.create(f,m,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class ji extends Bi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ji(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Rt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let u=s;const c=o.getFlattenedFilters();for(const h of c)hu(u,h),u=ti(u,h)}(t._query,e),new ae(t.firestore,t.converter,ti(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $i extends cu{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new $i(t,e)}_apply(t){const e=function(s,o,u){if(s.startAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cn(o,u)}(t._query,this._field,this._direction);return new ae(t.firestore,t.converter,function(s,o){const u=s.explicitOrderBy.concat([o]);return new Pe(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Sf(r,t="asc"){const e=t,n=Ui("orderBy",r);return $i._create(n,e)}function Fo(r,t,e){if(typeof(e=ee(e))=="string"){if(e==="")throw new N(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ca(t)&&e.indexOf("/")!==-1)throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(Y.fromString(e));if(!x.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ro(r,new x(n))}if(e instanceof Tt)return ro(r,e._key);throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pr(e)}.`)}function Uo(r,t){if(!Array.isArray(r)||r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function hu(r,t){const e=function(s,o){for(const u of s)for(const c of u.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class mf{convertValue(t,e="none"){switch(ie(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Re(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,s;const o=(s=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(u=>Z(u.doubleValue));return new Mi(o)}convertGeoPoint(t){return new xi(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=pi(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(an(t));default:return null}}convertTimestamp(t){const e=Gt(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);G(ka(n));const s=new un(n.get(1),n.get(3)),o=new x(n.popFirst(5));return s.isEqual(e)||xt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class du extends lu{constructor(t,e,n,s,o,u){super(t,e,n,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Kn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ui("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Kn extends du{data(t={}){return super.data(t)}}class _f{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Ye(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Kn(this._firestore,this._userDataWriter,n.key,n,new Ye(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(c=>{const h=new Kn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ye(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Kn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ye(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),m=u.indexOf(c.doc.key)),{type:yf(c.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function yf(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class fu extends mf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ie(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Tt(this.firestore,null,e)}}function Cf(r,t){const e=nn(r.firestore,rr),n=nf(r),s=gf(r.converter,t);return Ef(e,[uf(iu(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,kt.exists(!1))]).then(()=>n)}function bf(r,...t){var e,n,s;r=ee(r);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof t[u]!="object"||Lo(t[u])||(o=t[u],u++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Lo(t[u])){const A=t[u];t[u]=(e=A.next)===null||e===void 0?void 0:e.bind(A),t[u+1]=(n=A.error)===null||n===void 0?void 0:n.bind(A),t[u+2]=(s=A.complete)===null||s===void 0?void 0:s.bind(A)}let h,f,m;if(r instanceof Tt)f=nn(r.firestore,rr),m=yi(r._key.path),h={next:A=>{t[u]&&t[u](vf(f,r,A))},error:t[u+1],complete:t[u+2]};else{const A=nn(r,ae);f=nn(A.firestore,rr),m=A._query;const R=new fu(f);h={next:S=>{t[u]&&t[u](new _f(f,R,A,S))},error:t[u+1],complete:t[u+2]},pf(r._query)}return function(R,S,D,O){const b=new Yd(O),z=new Nd(S,b,D);return R.asyncQueue.enqueueAndForget(async()=>Sd(await Do(R),z)),()=>{b.Za(),R.asyncQueue.enqueueAndForget(async()=>Cd(await Do(R),z))}}(eu(f),m,c,h)}function Ef(r,t){return function(n,s){const o=new te;return n.asyncQueue.enqueueAndForget(async()=>jd(await Zd(n),s,o)),o.promise}(eu(r),t)}function vf(r,t,e){const n=e.docs.get(t._key),s=new fu(r);return new du(r,s,t._key,n,new Ye(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){we=s})(ic),Qn(new rn("firestore",(n,{instanceIdentifier:s,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new rr(new yc(n.getProvider("auth-internal")),new Ic(n.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new un(f.options.projectId,m)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Xe(Js,"4.7.3",t),Xe(Js,"4.7.3","esm2017")})();export{Sf as a,Cf as b,Rf as c,Pf as g,sc as i,bf as o,Vf as q,Xe as r};
