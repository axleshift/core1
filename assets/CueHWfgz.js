import{o as t}from"./CFK1l90-.js";var e={};
/**
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
 */const n=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,h=e>>2,u=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),r.push(n[h],n[u],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(n(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(i>>10)),e[r++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==a||null==c)throw new s;const h=e<<2|o>>4;if(r.push(h),64!==a){const t=o<<4&240|a>>2;if(r.push(t),64!==c){const t=a<<6&192|c;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i=function(t){return function(t){const e=n(t);return r.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
/**
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
 */
const o=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,a=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&function(t){try{return r.decodeString(t,!0)}catch(n){console.error("base64Decode failed: ",n)}return null}(t[1]);return e&&JSON.parse(e)},c=()=>{try{return o()||(()=>{if("undefined"==typeof process)return;const t=e.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||a()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},h=t=>{const e=(t=>{var e,n;return null===(n=null===(e=c())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},u=()=>{var t;return null===(t=c())||void 0===t?void 0:t.config};
/**
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
 */
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
 */function d(){return!function(){var t;const e=null===(t=c())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class f extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,f.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,p.prototype.create)}}class p{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?function(t,e){return t.replace(g,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new f(r,o,n)}}const g=/\{\$([^}]+)}/g;function m(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(y(n)&&y(i)){if(!m(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function y(t){return null!==t&&"object"==typeof t}
/**
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
 */function v(t){return t&&t._delegate?t._delegate:t}class w{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const _="[DEFAULT]";
/**
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
 */class E{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new l;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:_})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=_){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=_){return this.instances.has(t)}getOptions(t=_){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(s)&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===_?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(s){}var r;return n||null}normalizeInstanceIdentifier(t=_){return this.component?this.component.multipleInstances?t:_:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class b{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new E(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */var T,I;(I=T||(T={}))[I.DEBUG=0]="DEBUG",I[I.VERBOSE=1]="VERBOSE",I[I.INFO=2]="INFO",I[I.WARN=3]="WARN",I[I.ERROR=4]="ERROR",I[I.SILENT=5]="SILENT";const S={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},C=T.INFO,A={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},D=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=A[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class N{constructor(t){this.name=t,this._logLevel=C,this._logHandler=D,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in T))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?S[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...t),this._logHandler(this,T.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...t),this._logHandler(this,T.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,T.INFO,...t),this._logHandler(this,T.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,T.WARN,...t),this._logHandler(this,T.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...t),this._logHandler(this,T.ERROR,...t)}}
/**
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
 */class k{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const R="@firebase/app",x="0.10.13",O=new N("@firebase/app"),L="@firebase/app-compat",M="@firebase/analytics-compat",P="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",q="@firebase/database",j="@firebase/data-connect",$="@firebase/database-compat",z="@firebase/functions",K="@firebase/functions-compat",G="@firebase/installations",H="@firebase/installations-compat",Q="@firebase/messaging",W="@firebase/messaging-compat",Y="@firebase/performance",X="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",rt="@firebase/vertexai-preview",st="@firebase/firestore-compat",it="firebase",ot="[DEFAULT]",at={[R]:"fire-core",[L]:"fire-core-compat",[P]:"fire-analytics",[M]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[q]:"fire-rtdb",[j]:"fire-data-connect",[$]:"fire-rtdb-compat",[z]:"fire-fn",[K]:"fire-fn-compat",[G]:"fire-iid",[H]:"fire-iid-compat",[Q]:"fire-fcm",[W]:"fire-fcm-compat",[Y]:"fire-perf",[X]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[st]:"fire-fst-compat",[rt]:"fire-vertex","fire-js":"fire-js",[it]:"fire-js-all"},ct=new Map,ht=new Map,ut=new Map;function lt(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dt(t){const e=t.name;if(ut.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;ut.set(e,t);for(const n of ct.values())lt(n,t);for(const n of ht.values())lt(n,t);return!0}
/**
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
 */
const ft=new p("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
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
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new w("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
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
 */function gt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:ot,automaticDataCollectionEnabled:!1},e),s=r.name;if("string"!=typeof s||!s)throw ft.create("bad-app-name",{appName:String(s)});if(n||(n=u()),!n)throw ft.create("no-options");const i=ct.get(s);if(i){if(m(n,i.options)&&m(r,i.config))return i;throw ft.create("duplicate-app",{appName:s})}const o=new b(s);for(const c of ut.values())o.addComponent(c);const a=new pt(n,r,o);return ct.set(s,a),a}function mt(t,e,n){var r;let s=null!==(r=at[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${s}" with version "${e}":`];return i&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}dt(new w(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
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
 */const yt="firebase-heartbeat-store";let vt=null;function wt(){return vt||(vt=t("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(yt)}catch(n){console.warn(n)}}}).catch((t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})}))),vt}async function _t(t,e){try{const n=(await wt()).transaction(yt,"readwrite"),r=n.objectStore(yt);await r.put(e,Et(t)),await n.done}catch(n){if(n instanceof f)O.warn(n.message);else{const t=ft.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});O.warn(t.message)}}}function Et(t){return`${t.name}!${t.options.appId}`}
/**
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
 */class bt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new It(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Tt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}catch(n){O.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Tt(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),St(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),St(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),s=i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return O.warn(e),""}}}function Tt(){return(new Date).toISOString().substring(0,10)}class It{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await wt()).transaction(yt),n=await e.objectStore(yt).get(Et(t));return await e.done,n}catch(e){if(e instanceof f)O.warn(e.message);else{const t=ft.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});O.warn(t.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return _t(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return _t(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function St(t){return i(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */var Ct;Ct="",dt(new w("platform-logger",(t=>new k(t)),"PRIVATE")),dt(new w("heartbeat",(t=>new bt(t)),"PRIVATE")),mt(R,x,Ct),mt(R,x,"esm2017"),mt("fire-js","");var At,Dt,Nt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;o=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=n+(o<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(s^i))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(s^i))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(s^i))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^i&(n^s))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^i&(n^s))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^i&(n^s))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^i&(n^s))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^s^i)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^i)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^i)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^i)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(s^(n|~i))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(i|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(s^(n|~i))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(i|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(s^(n|~i))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(i|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((i=(e=n+((o=e+(s^(n|~i))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=i+((o=s+(e^(i|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}function r(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=0|t[s];r&&i==e||(n[s]=i,r=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}(e,(function(){this.blockSize=-1})),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var r=e-this.blockSize,s=this.B,i=this.h,o=0;o<e;){if(0==i)for(;o<=r;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(s[i++]=t.charCodeAt(o++),i==this.blockSize){n(this,s),i=0;break}}else for(;o<e;)if(s[i++]=t[o++],i==this.blockSize){n(this,s),i=0;break}}this.h=i,this.o+=e},e.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var s={};function i(t){return-128<=t&&128>t?function(t,e){var n=s;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new r([0|t],0>t?-1:0)})):new r([0|t],0>t?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(0>t)return d(o(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=4294967296;return new r(e,0)}var a=i(0),c=i(1),h=i(16777216);function u(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function l(t){return-1==t.h}function d(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new r(n,~t.h).add(c)}function f(t,e){return t.add(d(e))}function p(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function m(t,e){if(u(e))throw Error("division by zero");if(u(t))return new g(a,a);if(l(t))return e=m(d(t),e),new g(d(e.g),d(e.h));if(l(e))return e=m(t,d(e)),new g(d(e.g),e.h);if(30<t.g.length){if(l(t)||l(e))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=e;0>=r.l(t);)n=y(n),r=y(r);var s=v(n,1),i=v(r,1);for(r=v(r,2),n=v(n,2);!u(r);){var h=i.add(r);0>=h.l(t)&&(s=s.add(n),i=h),r=v(r,1),n=v(n,1)}return e=f(t,s.j(e)),new g(s,e)}for(s=a;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),h=(i=o(n)).j(e);l(h)||0<h.l(t);)h=(i=o(n-=r)).j(e);u(i)&&(i=c),s=s.add(i),t=f(t,h)}return new g(s,t)}function y(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.i(s)<<1|t.i(s-1)>>>31;return new r(n,t.h)}function v(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],o=0;o<s;o++)i[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new r(i,t.h)}(t=r.prototype).m=function(){if(l(this))return-d(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(u(this))return"0";if(l(this))return"-"+d(this).toString(t);for(var e=o(Math.pow(t,6)),n=this,r="";;){var s=m(n,e).g,i=((0<(n=f(n,s.j(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(u(n=s))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return l(t=f(this,t))?-1:u(t)?0:1},t.abs=function(){return l(this)?d(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var o=s+(65535&this.i(i))+(65535&t.i(i)),a=(o>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);s=a>>>16,o&=65535,a&=65535,n[i]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(u(this)||u(t))return a;if(l(this))return l(t)?d(this).j(d(t)):d(d(this).j(t));if(l(t))return d(this.j(d(t)));if(0>this.l(h)&&0>t.l(h))return o(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var c=this.i(s)>>>16,f=65535&this.i(s),g=t.i(i)>>>16,m=65535&t.i(i);n[2*s+2*i]+=f*m,p(n,2*s+2*i),n[2*s+2*i+1]+=c*m,p(n,2*s+2*i+1),n[2*s+2*i+1]+=f*g,p(n,2*s+2*i+1),n[2*s+2*i+2]+=c*g,p(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new r(n,0)},t.A=function(t){return m(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.i(s)&t.i(s);return new r(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.i(s)|t.i(s);return new r(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.i(s)^t.i(s);return new r(n,this.h^t.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,Dt=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),s=a,i=0;i<e.length;i+=8){var c=Math.min(8,e.length-i),h=parseInt(e.substring(i,i+c),n);8>c?(c=o(Math.pow(n,c)),s=s.j(c).add(o(h))):s=(s=s.j(r)).add(o(h))}return s},At=r}).apply(void 0!==Nt?Nt:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var kt,Rt,xt,Ot,Lt,Mt,Pt,Ft,Vt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};var n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Vt&&Vt];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(t,r){if(r)t:{var s=n;t=t.split(".");for(var i=0;i<t.length-1;i++){var o=t[i];if(!(o in s))break t;s=s[o]}(r=r(i=s[t=t[t.length-1]]))!=i&&null!=r&&e(s,t,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(t){return t||function(){return function(t,e){t instanceof String&&(t+="");var n=0,r=!1,s={next:function(){if(!r&&n<t.length){var s=n++;return{value:e(s,t[s]),done:!1}}return r=!0,{done:!0,value:void 0}}};return s[Symbol.iterator]=function(){return s},s}(this,(function(t,e){return e}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},s=this||self;function i(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function c(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function h(t,e,n){return(h=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:c).apply(null,arguments)}function u(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function l(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function d(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function f(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(i(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}function p(t){return/^[\s\xa0]*$/.test(t)}function g(){var t=s.navigator;return t&&(t=t.userAgent)?t:""}function m(t){return m[" "](t),t}m[" "]=function(){};var y=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function v(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function w(t){const e={};for(const n in t)e[n]=t[n];return e}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<_.length;e++)n=_[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function b(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function T(t){s.setTimeout((()=>{throw t}),0)}function I(){var t=N;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var S=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new C),(t=>t.reset()));class C{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let A,D=!1,N=new class{constructor(){this.h=this.g=null}add(t,e){const n=S.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},k=()=>{const t=s.Promise.resolve(void 0);A=()=>{t.then(R)}};var R=()=>{for(var t;t=I();){try{t.h.call(t.g)}catch(n){T(n)}var e=S;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}D=!1};function x(){this.s=this.s,this.C=this.C}function O(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}x.prototype.s=!1,x.prototype.ma=function(){this.s||(this.s=!0,this.N())},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},O.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};s.addEventListener("test",t,e),s.removeEventListener("test",t,e)}catch(n){}return t}();function M(t,e){if(O.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(y){t:{try{m(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:P[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&M.aa.h.call(this)}}l(M,O);var P={2:"touch",3:"pen",4:"mouse"};M.prototype.h=function(){M.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),V=0;function U(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++V,this.da=this.fa=!1}function B(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function q(t){this.src=t,this.g={},this.h=0}function j(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=Array.prototype.indexOf.call(s,e,void 0);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(B(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function $(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.da&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}q.prototype.add=function(t,e,n,r,s){var i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);var o=$(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new U(e,this.src,i,!!r,s)).fa=n,t.push(e)),e};var z="closure_lm_"+(1e6*Math.random()|0),K={};function G(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)G(t,e[i],n,r,s);return null}return n=Z(n),t&&t[F]?t.K(e,n,o(r)?!!r.capture:!!r,s):function(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var a=o(s)?!!s.capture:!!s,c=X(t);if(c||(t[z]=c=new q(t)),n=c.add(e,n,r,a,i),n.proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Y;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)L||(s=a),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(W(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}(t,e,n,!1,r,s)}function H(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)H(t,e[i],n,r,s);else r=o(r)?!!r.capture:!!r,n=Z(n),t&&t[F]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=$(i=t.g[e],n,r,s))&&(B(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=X(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$(e,n,r,s)),(n=-1<t?e[t]:null)&&Q(n))}function Q(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[F])j(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(W(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=X(e))?(j(n,t),0==n.h&&(n.src=null,e[z]=null)):B(t)}}}function W(t){return t in K?K[t]:K[t]="on"+t}function Y(t,e){if(t.da)t=!0;else{e=new M(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&Q(t),t=n.call(r,e)}return t}function X(t){return(t=t[z])instanceof q?t:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(t){return"function"==typeof t?t:(t[J]||(t[J]=function(e){return t.handleEvent(e)}),t[J])}function tt(){x.call(this),this.i=new q(this),this.M=this,this.F=null}function et(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"==typeof e)e=new O(e,t);else if(e instanceof O)e.target=e.target||t;else{var s=e;E(e=new O(r,t),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=nt(o,r,!0,e)&&s}if(s=nt(o=e.g=t,r,!0,e)&&s,s=nt(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)s=nt(o=e.g=n[i],r,!1,e)&&s}function nt(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&j(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}function rt(t,e,n){if("function"==typeof t)n&&(t=h(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=h(t.handleEvent,t)}return 2147483647<Number(e)?-1:s.setTimeout(t,e||0)}function st(t){t.g=rt((()=>{t.g=null,t.i&&(t.i=!1,st(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}l(tt,x),tt.prototype[F]=!0,tt.prototype.removeEventListener=function(t,e,n,r){H(this,t,e,n,r)},tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)B(n[r]);delete e.g[t],e.h--}}this.F=null},tt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},tt.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class it extends x{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:st(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(t){x.call(this),this.h=t,this.g={}}l(ot,x);var at=[];function ct(t){v(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Q(t)}),t),t.g={}}ot.prototype.N=function(){ot.aa.N.call(this),ct(this)},ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ht=s.JSON.stringify,ut=s.JSON.parse,lt=class{stringify(t){return s.JSON.stringify(t,void 0)}parse(t){return s.JSON.parse(t,void 0)}};function dt(){}function ft(t){return t.h||(t.h=t.i())}function pt(){}dt.prototype.h=null;var gt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mt(){O.call(this,"d")}function yt(){O.call(this,"c")}l(mt,O),l(yt,O);var vt={},wt=null;function _t(){return wt=wt||new tt}function Et(t){O.call(this,vt.La,t)}function bt(t){const e=_t();et(e,new Et(e))}function Tt(t,e){O.call(this,vt.STAT_EVENT,t),this.stat=e}function It(t){const e=_t();et(e,new Tt(e,t))}function St(t,e){O.call(this,vt.Ma,t),this.size=e}function Ct(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return s.setTimeout((function(){t()}),e)}function At(){this.g=!0}function Dt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return ht(n)}catch(a){return e}}(t,n)+(r?" "+r:"")}))}vt.La="serverreachability",l(Et,O),vt.STAT_EVENT="statevent",l(Tt,O),vt.Ma="timingevent",l(St,O),At.prototype.xa=function(){this.g=!1},At.prototype.info=function(){};var Nt,Ut={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function qt(){}function jt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $t}function $t(){this.i=null,this.g="",this.h=!1}l(qt,dt),qt.prototype.g=function(){return new XMLHttpRequest},qt.prototype.i=function(){return{}},Nt=new qt;var zt={},Kt={};function Gt(t,e,n){t.L=1,t.v=ve(fe(e)),t.m=n,t.P=!0,Ht(t,null)}function Ht(t,e){t.F=Date.now(),Yt(t),t.A=fe(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Re(n.i,"t",r),t.C=0,n=t.j.J,t.h=new $t,t.g=wn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new it(h(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var s="readystatechange";Array.isArray(s)||(s&&(at[0]=s.toString()),s=at);for(var i=0;i<s.length;i++){var o=G(n,s[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?w(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),bt(),function(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.i,t.u,t.A,t.l,t.R,t.m)}function Qt(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function Wt(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Kt:(n=Number(e.substring(n,r)),isNaN(n)?zt:(r+=1)+n>e.length?Kt:(e=e.slice(r,r+n),t.C=r+n,e))}function Yt(t){t.S=Date.now()+t.I,Xt(t,t.I)}function Xt(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ct(h(t.ba,t),e)}function Jt(t){t.B&&(s.clearTimeout(t.B),t.B=null)}function Zt(t){0==t.j.G||t.J||pn(t.j,t)}function te(t){Jt(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,ct(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ee(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||oe(n.h,t)))if(!t.K&&oe(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fn(n),nn(n)}un(n),It(18)}}else n.za=s[1],0<n.za-n.T&&37500>s[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ct(h(n.Za,n),6e3));if(1>=ie(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else mn(n,11)}else if((t.K||n.g==t)&&fn(n),!p(e))for(s=n.Da.g.parse(e),e=0;e<s.length;e++){let h=s[e];if(n.T=h[0],h=h[1],2==n.G)if("c"==h[0]){n.K=h[1],n.ia=h[2];const e=h[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const s=h[4];null!=s&&(n.Aa=s,n.j.info("SVER="+n.Aa));const u=h[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(ae(i,i.h),i.h=null))}if(r.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,ye(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=t;if((r=n).qa=vn(r,r.J?r.ia:null,r.W),o.K){ce(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&(Jt(a),Yt(a)),r.g=o}else hn(r);0<n.i.length&&sn(n)}else"stop"!=h[0]&&"close"!=h[0]||mn(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?mn(n,7):en(n):"noop"!=h[0]&&n.l&&n.l.ta(h),n.v=0)}bt()}catch(u){}}jt.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==Xe(t)?e.j():this.Y(t)},jt.prototype.Y=function(t){try{if(t==this.g)t:{const d=Xe(this.g);var e=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||Je(this.g)))){this.J||4!=d||7==e||bt(),Jt(this);var n=this.g.Z();this.X=n;e:if(Qt(this)){var r=Je(this.g);t="";var i=r.length,o=4==Xe(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){te(this),Zt(this);var a="";break e}this.h.i=new s.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(o&&e==i-1)});r.length=0,this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,h=this.g;if((c=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(c)){var u=c;break e}}u=null}if(!(n=u)){this.o=!1,this.s=3,It(12),te(this),Zt(this);break t}Dt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ee(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<a.length;){if(t=Wt(this,a),t==Kt){4==d&&(this.s=4,It(14),n=!1),Dt(this.i,this.l,null,"[Incomplete Response]");break}if(t==zt){this.s=4,It(15),Dt(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Dt(this.i,this.l,t,null),ee(this,t)}if(Qt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,It(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var l=this.j;l.g==this&&l.ba&&!l.M&&(l.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),ln(l),l.M=!0,It(11))}}else Dt(this.i,this.l,a,"[Invalid Chunked Response]"),te(this),Zt(this)}else Dt(this.i,this.l,a,null),ee(this,a);4==d&&te(this),this.o&&!this.J&&(4==d?pn(this.j,this):(this.o=!1,Yt(this)))}else(function(t){const e={};t=(t.g&&2<=Xe(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(p(t[r]))continue;var n=b(t[r]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),te(this),Zt(this)}}}catch(d){}},jt.prototype.cancel=function(){this.J=!0,te(this)},jt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.i,this.A),2!=this.L&&(bt(),It(17)),te(this),this.s=2,Zt(this)):Xt(this,this.S-t)};var ne=class{constructor(t,e){this.g=t,this.map=e}};function re(t){this.l=t||10,s.PerformanceNavigationTiming?t=0<(t=s.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function se(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ie(t){return t.h?1:t.g?t.g.size:0}function oe(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ae(t,e){t.g?t.g.add(e):t.h=e}function ce(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function he(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return d(t.i)}function ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(i(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(i(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(i(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),s=r.length,o=0;o<s;o++)e.call(void 0,r[o],n&&n[o],t)}re.prototype.cancel=function(){if(this.i=he(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var le=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function de(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof de){this.h=t.h,pe(this,t.j),this.o=t.o,this.g=t.g,ge(this,t.s),this.l=t.l;var e=t.i,n=new Ae;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),me(this,n),this.m=t.m}else t&&(e=String(t).match(le))?(this.h=!1,pe(this,e[1]||"",!0),this.o=we(e[2]||""),this.g=we(e[3]||"",!0),ge(this,e[4]),this.l=we(e[5]||"",!0),me(this,e[6]||"",!0),this.m=we(e[7]||"")):(this.h=!1,this.i=new Ae(null,this.h))}function fe(t){return new de(t)}function pe(t,e,n){t.j=n?we(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ge(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function me(t,e,n){e instanceof Ae?(t.i=e,function(t,e){e&&!t.j&&(De(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ne(this,e),Re(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=_e(e,Se)),t.i=new Ae(e,t.h))}function ye(t,e,n){t.i.set(e,n)}function ve(t){return ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function we(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _e(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ee),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ee(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}de.prototype.toString=function(){var t=[],e=this.j;e&&t.push(_e(e,be,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(_e(e,be,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(_e(n,"/"==n.charAt(0)?Ie:Te,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",_e(n,Ce)),t.join("")};var be=/[#\/\?@]/g,Te=/[#\?:]/g,Ie=/[#\?]/g,Se=/[#\?@]/g,Ce=/#/g;function Ae(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function De(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ne(t,e){De(t),e=xe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ke(t,e){return De(t),e=xe(t,e),t.g.has(e)}function Re(t,e,n){Ne(t,e),0<n.length&&(t.i=null,t.g.set(xe(t,e),d(n)),t.h+=n.length)}function xe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Oe(t,e,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(i){}}function Le(){this.g=new lt}function Me(t,e,n){const r=n||"";try{ue(t,(function(t,n){let s=t;o(t)&&(s=ht(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Pe(t){this.l=t.Ub||null,this.j=t.eb||!1}function Fe(t,e){tt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Ve(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function Ue(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Be(t)}function Be(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function qe(t){let e="";return v(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function je(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=qe(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ye(t,e,n))}function $e(t){tt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(t=Ae.prototype).add=function(t,e){De(this),this.i=null,t=xe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){De(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){De(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let t=0;t<s.length;t++)n.push(e[r])}return n},t.V=function(t){De(this);let e=[];if("string"==typeof t)ke(this,t)&&(e=e.concat(this.g.get(xe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return De(this),this.i=null,ke(this,t=xe(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&0<(t=this.V(t)).length?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")},l(Pe,dt),Pe.prototype.g=function(){return new Fe(this.l,this.j)},Pe.prototype.i=function(t){return function(){return t}}({}),l(Fe,tt),(t=Fe.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,Be(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||s).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ue(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==s.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ve(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ue(this):Be(this),3==this.readyState&&Ve(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,Ue(this))},t.Qa=function(t){this.g&&(this.response=t,Ue(this))},t.ga=function(){this.g&&Ue(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Fe.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),l($e,tt);var ze=/^https?$/i,Ke=["POST","PUT"];function Ge(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,He(t),We(t)}function He(t){t.A||(t.A=!0,et(t,"complete"),et(t,"error"))}function Qe(t){if(t.h&&void 0!==r&&(!t.v[1]||4!=Xe(t)||2!=t.Z()))if(t.u&&4==Xe(t))rt(t.Ea,0,t);else if(et(t,"readystatechange"),4==Xe(t)){t.h=!1;try{const r=t.Z();t:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===r){var o=String(t.D).match(le)[1]||null;!o&&s.self&&s.self.location&&(o=s.self.location.protocol.slice(0,-1)),i=!ze.test(o?o.toLowerCase():"")}n=i}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var a=2<Xe(t)?t.g.statusText:""}catch(c){a=""}t.l=a+" ["+t.Z()+"]",He(t)}}finally{We(t)}}}function We(t,e){if(t.g){Ye(t);const r=t.g,s=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||et(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Ye(t){t.I&&(s.clearTimeout(t.I),t.I=null)}function Xe(t){return t.g?t.g.readyState:0}function Je(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ze(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tn(t){this.Aa=0,this.i=[],this.j=new At,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ze("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ze("baseRetryDelayMs",5e3,t),this.cb=Ze("retryDelaySeedMs",1e4,t),this.Wa=Ze("forwardChannelMaxRetries",2,t),this.wa=Ze("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new re(t&&t.concurrentRequestLimit),this.Da=new Le,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function en(t){if(rn(t),3==t.G){var e=t.U++,n=fe(t.I);if(ye(n,"SID",t.K),ye(n,"RID",e),ye(n,"TYPE","terminate"),an(t,n),(e=new jt(t,t.j,e)).L=2,e.v=ve(fe(n)),n=!1,s.navigator&&s.navigator.sendBeacon)try{n=s.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&s.Image&&((new Image).src=e.v,n=!0),n||(e.g=wn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),Yt(e)}yn(t)}function nn(t){t.g&&(ln(t),t.g.cancel(),t.g=null)}function rn(t){nn(t),t.u&&(s.clearTimeout(t.u),t.u=null),fn(t),t.h.cancel(),t.s&&("number"==typeof t.s&&s.clearTimeout(t.s),t.s=null)}function sn(t){if(!se(t.h)&&!t.s){t.s=!0;var e=t.Ga;A||k(),D||(A(),D=!0),N.add(e,t),t.B=0}}function on(t,e){var n;n=e?e.l:t.U++;const r=fe(t.I);ye(r,"SID",t.K),ye(r,"RID",n),ye(r,"AID",t.T),an(t,r),t.m&&t.o&&je(r,t.m,t.o),n=new jt(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=cn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),ae(t.h,n),Gt(n,r,e)}function an(t,e){t.H&&v(t.H,(function(t,n){ye(e,n,t)})),t.l&&ue({},(function(t,n){ye(e,n,t)}))}function cn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?h(t.l.Na,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=s[a].g;const c=s[a].map;if(n-=e,0>n)e=Math.max(0,s[a].g-100),o=!1;else try{Me(c,t,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function hn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;A||k(),D||(A(),D=!0),N.add(e,t),t.v=0}}function un(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Ct(h(t.Fa,t),gn(t,t.v)),t.v++,!0)}function ln(t){null!=t.A&&(s.clearTimeout(t.A),t.A=null)}function dn(t){t.g=new jt(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=fe(t.qa);ye(e,"RID","rpc"),ye(e,"SID",t.K),ye(e,"AID",t.T),ye(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&ye(e,"TO",t.ja),ye(e,"TYPE","xmlhttp"),an(t,e),t.m&&t.o&&je(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=ve(fe(e)),n.m=null,n.P=!0,Ht(n,t)}function fn(t){null!=t.C&&(s.clearTimeout(t.C),t.C=null)}function pn(t,e){var n=null;if(t.g==e){fn(t),ln(t),t.g=null;var r=2}else{if(!oe(t.h,e))return;n=e.D,ce(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var s=t.B;et(r=_t(),new St(r,n)),sn(t)}else hn(t);else if(3==(s=e.s)||0==s&&0<e.X||!(1==r&&function(t,e){return!(ie(t.h)>=t.h.j-(t.s?1:0)||(t.s?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa)||(t.s=Ct(h(t.Ga,t,e),gn(t,t.B)),t.B++,0)))}(t,e)||2==r&&un(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:mn(t,5);break;case 4:mn(t,10);break;case 3:mn(t,6);break;default:mn(t,2)}}function gn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function mn(t,e){if(t.j.info("Error code "+e),2==e){var n=h(t.fb,t),r=t.Xa;const e=!r;r=new de(r||"//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||pe(r,"https"),ve(r),e?function(t,e){const n=new At;if(s.Image){const r=new Image;r.onload=u(Oe,n,"TestLoadImage: loaded",!0,e,r),r.onerror=u(Oe,n,"TestLoadImage: error",!1,e,r),r.onabort=u(Oe,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=u(Oe,n,"TestLoadImage: timeout",!1,e,r),s.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(r.toString(),n):function(t,e){new At;const n=new AbortController,r=setTimeout((()=>{n.abort(),Oe(0,0,!1,e)}),1e4);fetch(t,{signal:n.signal}).then((t=>{clearTimeout(r),t.ok?Oe(0,0,!0,e):Oe(0,0,!1,e)})).catch((()=>{clearTimeout(r),Oe(0,0,!1,e)}))}(r.toString(),n)}else It(2);t.G=0,t.l&&t.l.sa(e),yn(t),rn(t)}function yn(t){if(t.G=0,t.ka=[],t.l){const e=he(t.h);0==e.length&&0==t.i.length||(f(t.ka,e),f(t.ka,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.ra()}}function vn(t,e,n){var r=n instanceof de?fe(n):new de(n);if(""!=r.g)e&&(r.g=e+"."+r.g),ge(r,r.s);else{var i=s.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new de(null);r&&pe(o,r),e&&(o.g=e),i&&ge(o,i),n&&(o.l=n),r=o}return n=t.D,e=t.ya,n&&e&&ye(r,n,e),ye(r,"VER",t.la),an(t,r),r}function wn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ca&&!t.pa?new $e(new Pe({eb:n})):new $e(t.pa)).Ha(t.J),e}function _n(){}function En(){}function bn(t,e){tt.call(this),this.g=new tn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!p(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!p(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Sn(this)}function Tn(t){mt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function In(){yt.call(this),this.status=1}function Sn(t){this.g=t}(t=$e.prototype).Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nt.g(),this.v=this.o?ft(this.o):ft(Nt),this.g.onreadystatechange=h(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void Ge(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=s.FormData&&t instanceof s.FormData,!(0<=Array.prototype.indexOf.call(Ke,e,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ye(this),this.u=!0,this.g.send(t),this.u=!1}catch(o){Ge(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),We(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),We(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qe(this):this.bb())},t.bb=function(){Qe(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<Xe(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ut(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=tn.prototype).la=8,t.G=1,t.connect=function(t,e,n,r){It(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=vn(this,null,this.W),sn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new jt(this,this.j,t);let i=this.o;if(this.S&&(i?(i=w(i),E(i,this.S)):i=this.S),null!==this.m||this.O||(s.H=i,i=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cn(this,s,e),ye(n=fe(this.I),"RID",t),ye(n,"CVER",22),this.D&&ye(n,"X-HTTP-Session-Id",this.D),an(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(qe(i)))+"&"+e:this.m&&je(n,this.m,i)),ae(this.h,s),this.Ua&&ye(n,"TYPE","init"),this.P?(ye(n,"$req",e),ye(n,"SID","null"),s.T=!0,Gt(s,n,null)):Gt(s,n,e),this.G=2}}else 3==this.G&&(t?on(this,t):0==this.i.length||se(this.h)||on(this))},t.Fa=function(){if(this.u=null,dn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Ct(h(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),nn(this),dn(this))},t.Za=function(){null!=this.C&&(this.C=null,nn(this),un(this),It(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=_n.prototype).ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},En.prototype.g=function(t,e){return new bn(t,e)},l(bn,tt),bn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bn.prototype.close=function(){en(this.g)},bn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.u&&((n={}).__data__=ht(t),t=n);e.i.push(new ne(e.Ya++,t)),3==e.G&&sn(e)},bn.prototype.N=function(){this.g.l=null,delete this.j,en(this.g),delete this.g,bn.aa.N.call(this)},l(Tn,mt),l(In,yt),l(Sn,_n),Sn.prototype.ua=function(){et(this.g,"a")},Sn.prototype.ta=function(t){et(this.g,new Tn(t))},Sn.prototype.sa=function(t){et(this.g,new In)},Sn.prototype.ra=function(){et(this.g,"b")},En.prototype.createWebChannel=En.prototype.g,bn.prototype.send=bn.prototype.o,bn.prototype.open=bn.prototype.m,bn.prototype.close=bn.prototype.close,Ft=function(){return new En},Pt=function(){return _t()},Mt=vt,Lt={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ut.NO_ERROR=0,Ut.TIMEOUT=8,Ut.HTTP_ERROR=6,Ot=Ut,Bt.COMPLETE="complete",xt=Bt,pt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",tt.prototype.listen=tt.prototype.K,Rt=pt,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,kt=$e}).apply(void 0!==Vt?Vt:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Ut="@firebase/firestore";
/**
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
 */class Bt{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");
/**
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
 */
let qt="10.14.0";
/**
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
 */const jt=new N("@firebase/firestore");function $t(){return jt.logLevel}function zt(t,...e){if(jt.logLevel<=T.DEBUG){const n=e.map(Ht);jt.debug(`Firestore (${qt}): ${t}`,...n)}}function Kt(t,...e){if(jt.logLevel<=T.ERROR){const n=e.map(Ht);jt.error(`Firestore (${qt}): ${t}`,...n)}}function Gt(t,...e){if(jt.logLevel<=T.WARN){const n=e.map(Ht);jt.warn(`Firestore (${qt}): ${t}`,...n)}}function Ht(t){if("string"==typeof t)return t;try{
/**
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
    */
return e=t,JSON.stringify(e)}catch(n){return t}var e}
/**
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
 */function Qt(t="Unexpected state"){const e=`FIRESTORE (${qt}) INTERNAL ASSERTION FAILED: `+t;throw Kt(e),new Error(e)}function Wt(t,e){t||Qt()}function Yt(t,e){return t}
/**
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
 */const Xt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Jt extends f{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class Zt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class te{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ee{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Bt.UNAUTHENTICATED)))}shutdown(){}}class ne{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class re{constructor(t){this.t=t,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Wt(void 0===this.o);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zt,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{zt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(zt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zt)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(zt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Wt("string"==typeof e.accessToken),new te(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Wt(null===t||"string"==typeof t),new Bt(t)}}class se{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ie{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new se(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class oe{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ae{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Wt(void 0===this.o);const n=t=>{null!=t.error&&zt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,zt("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{zt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):zt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Wt("string"==typeof t.token),this.R=t.token,new oe(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
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
 */function ce(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class he{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=ce(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%62))}return n}}function ue(t,e){return t<e?-1:t>e?1:0}function le(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
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
 */class de{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Jt(Xt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Jt(Xt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Jt(Xt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Jt(Xt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return de.fromMillis(Date.now())}static fromDate(t){return de.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new de(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ue(this.nanoseconds,t.nanoseconds):ue(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class fe{constructor(t){this.timestamp=t}static fromTimestamp(t){return new fe(t)}static min(){return new fe(new de(0,0))}static max(){return new fe(new de(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class pe{constructor(t,e,n){void 0===e?e=0:e>t.length&&Qt(),void 0===n?n=t.length-e:n>t.length-e&&Qt(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===pe.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof pe?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ge extends pe{construct(t,e,n){return new ge(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Jt(Xt.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ge(e)}static emptyPath(){return new ge([])}}const me=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ye extends pe{construct(t,e,n){return new ye(t,e,n)}static isValidIdentifier(t){return me.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ye.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ye(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Jt(Xt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Jt(Xt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Jt(Xt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new Jt(Xt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ye(e)}static emptyPath(){return new ye([])}}
/**
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
 */class ve{constructor(t){this.path=t}static fromPath(t){return new ve(ge.fromString(t))}static fromName(t){return new ve(ge.fromString(t).popFirst(5))}static empty(){return new ve(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ge.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ge.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ve(new ge(t.slice()))}}function we(t){return new _e(t.readTime,t.key,-1)}class _e{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new _e(fe.min(),ve.empty(),-1)}static max(){return new _e(fe.max(),ve.empty(),-1)}}function Ee(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ve.comparator(t.documentKey,e.documentKey),0!==n?n:ue(t.largestBatchId,e.largestBatchId)
/**
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
 */)}class be{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
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
 */async function Te(t){if(t.code!==Xt.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;zt("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Ie{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Qt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ie(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ie?e:Ie.resolve(e)}catch(e){return Ie.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ie.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ie.reject(e)}static resolve(t){return new Ie(((e,n)=>{e(t)}))}static reject(t){return new Ie(((e,n)=>{n(t)}))}static waitFor(t){return new Ie(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=Ie.resolve(!1);for(const n of t)e=e.next((t=>t?Ie.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Ie(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new Ie(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}function Se(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */class Ce{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function Ae(t){return null==t}function De(t){return 0===t&&1/t==-1/0}
/**
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
 */
function Ne(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ke(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Re(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */Ce.oe=-1;class xe{constructor(t,e){this.comparator=t,this.root=e||Le.EMPTY}insert(t,e){return new xe(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(t){return new xe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Le.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Oe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Oe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Oe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Oe(this.root,t,this.comparator,!0)}}class Oe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Le{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Le.RED,this.left=null!=r?r:Le.EMPTY,this.right=null!=s?s:Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Le(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Le.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Qt();if(this.right.isRed())throw Qt();const t=this.left.check();if(t!==this.right.check())throw Qt();return t+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1,Le.EMPTY=new class{constructor(){this.size=0}get key(){throw Qt()}get value(){throw Qt()}get color(){throw Qt()}get left(){throw Qt()}get right(){throw Qt()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Me{constructor(t){this.comparator=t,this.data=new xe(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Pe(this.data.getIterator())}getIteratorFrom(t){return new Pe(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Me))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Me(this.comparator);return e.data=t,e}}class Pe{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */class Fe{constructor(t){this.fields=t,t.sort(ye.comparator)}static empty(){return new Fe([])}unionWith(t){let e=new Me(ye.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Fe(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return le(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
 */class Ve extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */class Ue{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ve("Invalid base64 string: "+e):e}}(t);return new Ue(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ue(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ue(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const Be=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qe(t){if(Wt(!!t),"string"==typeof t){let e=0;const n=Be.exec(t);if(Wt(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function $e(t){return"string"==typeof t?Ue.fromBase64String(t):Ue.fromUint8Array(t)}
/**
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
 */function ze(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ke(t){const e=t.mapValue.fields.__previous_value__;return ze(e)?Ke(e):e}function Ge(t){const e=qe(t.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}
/**
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
 */class He{constructor(t,e,n,r,s,i,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Qe{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Qe("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Qe&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const We={fields:{__type__:{stringValue:"__max__"}}};function Ye(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ze(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */(t)?9007199254740991:function(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(t)?10:11:Qt()}function Xe(t,e){if(t===e)return!0;const n=Ye(t);if(n!==Ye(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ge(t).isEqual(Ge(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=qe(t.timestampValue),r=qe(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,$e(t.bytesValue).isEqual($e(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return je(t.geoPointValue.latitude)===je(e.geoPointValue.latitude)&&je(t.geoPointValue.longitude)===je(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return je(t.integerValue)===je(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=je(t.doubleValue),r=je(e.doubleValue);return n===r?De(n)===De(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return le(t.arrayValue.values||[],e.arrayValue.values||[],Xe);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Ne(n)!==Ne(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Xe(n[s],r[s])))return!1;return!0}(t,e);default:return Qt()}var r}function Je(t,e){return void 0!==(t.values||[]).find((t=>Xe(t,e)))}function Ze(t,e){if(t===e)return 0;const n=Ye(t),r=Ye(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=je(t.integerValue||t.doubleValue),r=je(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return tn(t.timestampValue,e.timestampValue);case 4:return tn(Ge(t),Ge(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(t,e){const n=$e(t),r=$e(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=ue(n[s],r[s]);if(0!==t)return t}return ue(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ue(je(t.latitude),je(e.latitude));return 0!==n?n:ue(je(t.longitude),je(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return en(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,s,i;const o=t.fields||{},a=e.fields||{},c=null===(n=o.value)||void 0===n?void 0:n.arrayValue,h=null===(r=a.value)||void 0===r?void 0:r.arrayValue,u=ue((null===(s=null==c?void 0:c.values)||void 0===s?void 0:s.length)||0,(null===(i=null==h?void 0:h.values)||void 0===i?void 0:i.length)||0);return 0!==u?u:en(c,h)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===We&&e===We)return 0;if(t===We)return 1;if(e===We)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=ue(r[o],i[o]);if(0!==t)return t;const e=Ze(n[r[o]],s[i[o]]);if(0!==e)return e}return ue(r.length,i.length)}(t.mapValue,e.mapValue);default:throw Qt()}}function tn(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ue(t,e);const n=qe(t),r=qe(e),s=ue(n.seconds,r.seconds);return 0!==s?s:ue(n.nanos,r.nanos)}function en(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=Ze(n[s],r[s]);if(t)return t}return ue(n.length,r.length)}function nn(t){return rn(t)}function rn(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=qe(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$e(t.bytesValue).toBase64():"referenceValue"in t?function(t){return ve.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=rn(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${rn(t.fields[s])}`;return n+"}"}(t.mapValue):Qt()}function sn(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function on(t){return!!t&&"integerValue"in t}function an(t){return!!t&&"arrayValue"in t}function cn(t){return!!t&&"nullValue"in t}function hn(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function un(t){return!!t&&"mapValue"in t}function ln(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ke(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ln(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ln(t.arrayValue.values[n]);return e}return Object.assign({},t)}class dn{constructor(t){this.value=t}static empty(){return new dn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!un(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ln(e)}setAll(t){let e=ye.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=ln(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());un(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Xe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];un(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ke(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new dn(ln(this.value))}}function fn(t){const e=[];return ke(t.fields,((t,n)=>{const r=new ye([t]);if(un(n)){const t=fn(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Fe(e)
/**
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
 */}class pn{constructor(t,e,n,r,s,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new pn(t,0,fe.min(),fe.min(),fe.min(),dn.empty(),0)}static newFoundDocument(t,e,n,r){return new pn(t,1,e,fe.min(),n,r,0)}static newNoDocument(t,e){return new pn(t,2,e,fe.min(),fe.min(),dn.empty(),0)}static newUnknownDocument(t,e){return new pn(t,3,e,fe.min(),fe.min(),dn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(fe.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof pn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class gn{constructor(t,e){this.position=t,this.inclusive=e}}function mn(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?ve.comparator(ve.fromName(o.referenceValue),n.key):Ze(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function yn(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xe(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class vn{constructor(t,e="asc"){this.field=t,this.dir=e}}function wn(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class _n{}class En extends _n{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Dn(t,e,n):"array-contains"===e?new xn(t,n):"in"===e?new On(t,n):"not-in"===e?new Ln(t,n):"array-contains-any"===e?new Mn(t,n):new En(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Nn(t,n):new kn(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Ze(e,this.value)):null!==e&&Ye(this.value)===Ye(e)&&this.matchesComparison(Ze(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Qt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bn extends _n{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new bn(t,e)}matches(t){return Tn(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Tn(t){return"and"===t.op}function In(t){return function(t){for(const e of t.filters)if(e instanceof bn)return!1;return!0}(t)&&Tn(t)}function Sn(t){if(t instanceof En)return t.field.canonicalString()+t.op.toString()+nn(t.value);if(In(t))return t.filters.map((t=>Sn(t))).join(",");{const e=t.filters.map((t=>Sn(t))).join(",");return`${t.op}(${e})`}}function Cn(t,e){return t instanceof En?(n=t,(r=e)instanceof En&&n.op===r.op&&n.field.isEqual(r.field)&&Xe(n.value,r.value)):t instanceof bn?function(t,e){return e instanceof bn&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&Cn(n,e.filters[r])),!0)}(t,e):void Qt();var n,r}function An(t){return t instanceof En?`${(e=t).field.canonicalString()} ${e.op} ${nn(e.value)}`:t instanceof bn?function(t){return t.op.toString()+" {"+t.getFilters().map(An).join(" ,")+"}"}(t):"Filter";var e}class Dn extends En{constructor(t,e,n){super(t,e,n),this.key=ve.fromName(n.referenceValue)}matches(t){const e=ve.comparator(t.key,this.key);return this.matchesComparison(e)}}class Nn extends En{constructor(t,e){super(t,"in",e),this.keys=Rn("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class kn extends En{constructor(t,e){super(t,"not-in",e),this.keys=Rn("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Rn(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ve.fromName(t.referenceValue)))}class xn extends En{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return an(e)&&Je(e.arrayValue,this.value)}}class On extends En{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Je(this.value.arrayValue,e)}}class Ln extends En{constructor(t,e){super(t,"not-in",e)}matches(t){if(Je(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Je(this.value.arrayValue,e)}}class Mn extends En{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!an(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Je(this.value.arrayValue,t)))}}
/**
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
 */class Pn{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ue=null}}function Fn(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Pn(t,e,n,r,s,i,o)}function Vn(t){const e=Yt(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Sn(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Ae(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>nn(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>nn(t))).join(",")),e.ue=t}return e.ue}function Un(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wn(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cn(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yn(t.startAt,e.startAt)&&yn(t.endAt,e.endAt)}function Bn(t){return ve.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
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
 */class qn{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jn(t){return new qn(t)}function $n(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function zn(t){return null!==t.collectionGroup}function Kn(t){const e=Yt(t);if(null===e.ce){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(t){let e=new Me(ye.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new vn(r,n))})),t.has(ye.keyField().canonicalString())||e.ce.push(new vn(ye.keyField(),n))}return e.ce}function Gn(t){const e=Yt(t);return e.le||(e.le=function(t,e){if("F"===t.limitType)return Fn(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new vn(t.field,e)}));const n=t.endAt?new gn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gn(t.startAt.position,t.startAt.inclusive):null;return Fn(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}(e,Kn(t))),e.le}function Hn(t,e){const n=t.filters.concat([e]);return new qn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qn(t,e,n){return new qn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wn(t,e){return Un(Gn(t),Gn(e))&&t.limitType===e.limitType}function Yn(t){return`${Vn(Gn(t))}|lt:${t.limitType}`}function Xn(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>An(t))).join(", ")}]`),Ae(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>nn(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>nn(t))).join(",")),`Target(${e})`}(Gn(t))}; limitType=${t.limitType})`}function Jn(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ve.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Kn(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=mn(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,Kn(n),r)||n.endAt&&!function(t,e,n){const r=mn(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,Kn(n),r)));var n,r}function Zn(t){return(e,n)=>{let r=!1;for(const s of Kn(t)){const t=tr(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function tr(t,e,n){const r=t.field.isKeyField()?ve.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?Ze(r,s):Qt()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Qt()}}
/**
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
 */class er{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ke(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return Re(this.inner)}size(){return this.innerSize}}
/**
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
 */const nr=new xe(ve.comparator);function rr(){return nr}const sr=new xe(ve.comparator);function ir(...t){let e=sr;for(const n of t)e=e.insert(n.key,n);return e}function or(t){let e=sr;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ar(){return hr()}function cr(){return hr()}function hr(){return new er((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ur=new xe(ve.comparator),lr=new Me(ve.comparator);function dr(...t){let e=lr;for(const n of t)e=e.add(n);return e}const fr=new Me(ue);
/**
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
 */
function pr(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:De(e)?"-0":e}}function gr(t){return{integerValue:""+t}}function mr(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!De(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?gr(e):pr(t,e)}
/**
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
 */class yr{constructor(){this._=void 0}}function vr(t,e,n){return t instanceof Er?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&ze(e)&&(e=Ke(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof br?Tr(t,e):t instanceof Ir?Sr(t,e):function(t,e){const n=_r(t,e),r=Ar(n)+Ar(t.Pe);return on(n)&&on(t.Pe)?gr(r):pr(t.serializer,r)}(t,e)}function wr(t,e,n){return t instanceof br?Tr(t,e):t instanceof Ir?Sr(t,e):n}function _r(t,e){return t instanceof Cr?on(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null;var n,r}class Er extends yr{}class br extends yr{constructor(t){super(),this.elements=t}}function Tr(t,e){const n=Dr(e);for(const r of t.elements)n.some((t=>Xe(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Ir extends yr{constructor(t){super(),this.elements=t}}function Sr(t,e){let n=Dr(e);for(const r of t.elements)n=n.filter((t=>!Xe(t,r)));return{arrayValue:{values:n}}}class Cr extends yr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ar(t){return je(t.integerValue||t.doubleValue)}function Dr(t){return an(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Nr{constructor(t,e){this.version=t,this.transformResults=e}}class kr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kr}static exists(t){return new kr(void 0,t)}static updateTime(t){return new kr(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Rr(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class xr{}function Or(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new $r(t.key,kr.none()):new Vr(t.key,t.data,kr.none());{const n=t.data,r=dn.empty();let s=new Me(ye.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new Ur(t.key,r,new Fe(s.toArray()),kr.none())}}function Lr(t,e,n){var r;t instanceof Vr?function(t,e,n){const r=t.value.clone(),s=qr(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(t,e,n){if(!Rr(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=qr(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Br(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function Mr(t,e,n,r){return t instanceof Vr?function(t,e,n,r){if(!Rr(t.precondition,e))return n;const s=t.value.clone(),i=jr(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(t,e,n,r){if(!Rr(t.precondition,e))return n;const s=jr(t.fieldTransforms,r,e),i=e.data;return i.setAll(Br(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):(s=e,i=n,Rr(t.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):i);var s,i}function Pr(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=_r(r.transform,t||null);null!=s&&(null===n&&(n=dn.empty()),n.set(r.field,s))}return n||null}function Fr(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&le(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof br&&r instanceof br||n instanceof Ir&&r instanceof Ir?le(n.elements,r.elements,Xe):n instanceof Cr&&r instanceof Cr?Xe(n.Pe,r.Pe):n instanceof Er&&r instanceof Er);var n,r}(t,e))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,r}class Vr extends xr{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ur extends xr{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Br(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function qr(t,e,n){const r=new Map;Wt(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,wr(o,a,n[s]))}return r}function jr(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,vr(t,i,e))}return r}class $r extends xr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zr extends xr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class Kr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Lr(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Mr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Mr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=cr();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Or(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(fe.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),dr())}isEqual(t){return this.batchId===t.batchId&&le(this.mutations,t.mutations,((t,e)=>Fr(t,e)))&&le(this.baseMutations,t.baseMutations,((t,e)=>Fr(t,e)))}}class Gr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Wt(t.mutations.length===n.length);let r=function(){return ur}();const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Gr(t,e,n,r)}}
/**
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
 */class Hr{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class Qr{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
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
 */var Wr,Yr;function Xr(t){if(void 0===t)return Kt("GRPC error has no .code"),Xt.UNKNOWN;switch(t){case Wr.OK:return Xt.OK;case Wr.CANCELLED:return Xt.CANCELLED;case Wr.UNKNOWN:return Xt.UNKNOWN;case Wr.DEADLINE_EXCEEDED:return Xt.DEADLINE_EXCEEDED;case Wr.RESOURCE_EXHAUSTED:return Xt.RESOURCE_EXHAUSTED;case Wr.INTERNAL:return Xt.INTERNAL;case Wr.UNAVAILABLE:return Xt.UNAVAILABLE;case Wr.UNAUTHENTICATED:return Xt.UNAUTHENTICATED;case Wr.INVALID_ARGUMENT:return Xt.INVALID_ARGUMENT;case Wr.NOT_FOUND:return Xt.NOT_FOUND;case Wr.ALREADY_EXISTS:return Xt.ALREADY_EXISTS;case Wr.PERMISSION_DENIED:return Xt.PERMISSION_DENIED;case Wr.FAILED_PRECONDITION:return Xt.FAILED_PRECONDITION;case Wr.ABORTED:return Xt.ABORTED;case Wr.OUT_OF_RANGE:return Xt.OUT_OF_RANGE;case Wr.UNIMPLEMENTED:return Xt.UNIMPLEMENTED;case Wr.DATA_LOSS:return Xt.DATA_LOSS;default:return Qt()}}(Yr=Wr||(Wr={}))[Yr.OK=0]="OK",Yr[Yr.CANCELLED=1]="CANCELLED",Yr[Yr.UNKNOWN=2]="UNKNOWN",Yr[Yr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Yr[Yr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Yr[Yr.NOT_FOUND=5]="NOT_FOUND",Yr[Yr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Yr[Yr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Yr[Yr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Yr[Yr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Yr[Yr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Yr[Yr.ABORTED=10]="ABORTED",Yr[Yr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Yr[Yr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Yr[Yr.INTERNAL=13]="INTERNAL",Yr[Yr.UNAVAILABLE=14]="UNAVAILABLE",Yr[Yr.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
const Jr=new At([4294967295,4294967295],0);function Zr(t){const e=(new TextEncoder).encode(t),n=new Dt;return n.update(e),new Uint8Array(n.digest())}function ts(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new At([n,r],0),new At([s,i],0)]}class es{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ns(`Invalid padding: ${e}`);if(n<0)throw new ns(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new ns(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new ns(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=At.fromNumber(this.Ie)}Ee(t,e,n){let r=t.add(e.multiply(At.fromNumber(n)));return 1===r.compare(Jr)&&(r=new At([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ie)return!1;const e=Zr(t),[n,r]=ts(e);for(let s=0;s<this.hashCount;s++){const t=this.Ee(n,r,s);if(!this.de(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),i=new es(s,r,e);return n.forEach((t=>i.insert(t))),i}insert(t){if(0===this.Ie)return;const e=Zr(t),[n,r]=ts(e);for(let s=0;s<this.hashCount;s++){const t=this.Ee(n,r,s);this.Ae(t)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class rs{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,ss.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new rs(fe.min(),r,new xe(ue),rr(),dr())}}class ss{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ss(n,e,dr(),dr(),dr())}}
/**
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
 */class is{constructor(t,e,n,r){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=r}}class os{constructor(t,e){this.targetId=t,this.me=e}}class as{constructor(t,e,n=Ue.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class cs{constructor(){this.fe=0,this.ge=ls(),this.pe=Ue.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=dr(),e=dr(),n=dr();return this.ge.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Qt()}})),new ss(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=ls()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Wt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hs{constructor(t){this.Le=t,this.Be=new Map,this.ke=rr(),this.qe=us(),this.Qe=new xe(ue)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,(e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:Qt()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((t,n)=>{this.ze(n)&&e(n)}))}He(t){const e=t.targetId,n=t.me.count,r=this.Je(e);if(r){const s=r.target;if(Bn(s))if(0===n){const t=new ve(s.path);this.Ue(e,t,pn.newNoDocument(t,fe.min()))}else Wt(1===n);else{const r=this.Ye(e);if(r!==n){const n=this.Ze(t),s=n?this.Xe(n,t,r):1;if(0!==s){this.je(e);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,t)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let i,o;try{i=$e(n).toUint8Array()}catch(a){if(a instanceof Ve)return Gt("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new es(i,r,s)}catch(a){return Gt(a instanceof ns?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Ie?null:o}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const s=this.Le.tt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.Ue(e,n,null),r++)})),r}rt(t){const e=new Map;this.Be.forEach(((n,r)=>{const s=this.Je(r);if(s){if(n.current&&Bn(s.target)){const e=new ve(s.target.path);null!==this.ke.get(e)||this.it(r,e)||this.Ue(r,e,pn.newNoDocument(e,t))}n.be&&(e.set(r,n.ve()),n.Ce())}}));let n=dr();this.qe.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Je(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.ke.forEach(((e,n)=>n.setReadTime(t)));const r=new rs(t,e,this.Qe,this.ke,n);return this.ke=rr(),this.qe=us(),this.Qe=new xe(ue),r}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new cs,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Me(ue),this.qe=this.qe.insert(t,e)),e}ze(t){const e=null!==this.Je(t);return e||zt("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new cs),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.Ue(t,e,null)}))}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function us(){return new xe(ve.comparator)}function ls(){return new xe(ve.comparator)}const ds=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fs=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ps=(()=>({and:"AND",or:"OR"}))();class gs{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ms(t,e){return t.useProto3Json||Ae(e)?e:{value:e}}function ys(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vs(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ws(t,e){return ys(t,e.toTimestamp())}function _s(t){return Wt(!!t),fe.fromTimestamp(function(t){const e=qe(t);return new de(e.seconds,e.nanos)}(t))}function Es(t,e){return bs(t,e).canonicalString()}function bs(t,e){const n=(r=t,new ge(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===e?n:n.child(e)}function Ts(t){const e=ge.fromString(t);return Wt(qs(e)),e}function Is(t,e){return Es(t.databaseId,e.path)}function Ss(t,e){const n=Ts(e);if(n.get(1)!==t.databaseId.projectId)throw new Jt(Xt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Jt(Xt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ve(Ds(n))}function Cs(t,e){return Es(t.databaseId,e)}function As(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ds(t){return Wt(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ns(t,e,n){return{name:Is(t,e),fields:n.value.mapValue.fields}}function ks(t,e){return{documents:[Cs(t,e.path)]}}function Rs(t,e){const n={structuredQuery:{}},r=e.path;let s;null!==e.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Cs(t,s);const i=function(t){if(0!==t.length)return Us(bn.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map((t=>{return{field:Fs((e=t).field),direction:Ls(e.dir)};var e}))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ms(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{_t:n,parent:s};var c}function xs(t){let e=function(t){const e=Ts(t);return 4===e.length?ge.emptyPath():Ds(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Wt(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=Os(t);return e instanceof bn&&In(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new vn(Vs((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ae(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new gn(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new gn(n,e)}(n.endAt)),function(t,e,n,r,s,i,o,a){return new qn(t,e,n,r,s,i,o,a)}(e,s,o,i,a,"F",c,h)}function Os(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Vs(t.unaryFilter.field);return En.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Vs(t.unaryFilter.field);return En.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Vs(t.unaryFilter.field);return En.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Vs(t.unaryFilter.field);return En.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Qt()}}(t):void 0!==t.fieldFilter?(e=t,En.create(Vs(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Qt()}}(e.fieldFilter.op),e.fieldFilter.value)):void 0!==t.compositeFilter?function(t){return bn.create(t.compositeFilter.filters.map((t=>Os(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Qt()}}(t.compositeFilter.op))}(t):Qt();var e}function Ls(t){return ds[t]}function Ms(t){return fs[t]}function Ps(t){return ps[t]}function Fs(t){return{fieldPath:t.canonicalString()}}function Vs(t){return ye.fromServerFormat(t.fieldPath)}function Us(t){return t instanceof En?function(t){if("=="===t.op){if(hn(t.value))return{unaryFilter:{field:Fs(t.field),op:"IS_NAN"}};if(cn(t.value))return{unaryFilter:{field:Fs(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(hn(t.value))return{unaryFilter:{field:Fs(t.field),op:"IS_NOT_NAN"}};if(cn(t.value))return{unaryFilter:{field:Fs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fs(t.field),op:Ms(t.op),value:t.value}}}(t):t instanceof bn?function(t){const e=t.getFilters().map((t=>Us(t)));return 1===e.length?e[0]:{compositeFilter:{op:Ps(t.op),filters:e}}}(t):Qt()}function Bs(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function qs(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */class js{constructor(t,e,n,r,s=fe.min(),i=fe.min(),o=Ue.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new js(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new js(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
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
 */class $s{constructor(t){this.ct=t}}function zs(t){const e=xs({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Qn(e,e.limit,"L"):e}
/**
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
 */class Ks{constructor(){this.un=new Gs}addToCollectionParentIndex(t,e){return this.un.add(e),Ie.resolve()}getCollectionParents(t,e){return Ie.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return Ie.resolve()}deleteFieldIndex(t,e){return Ie.resolve()}deleteAllFieldIndexes(t){return Ie.resolve()}createTargetIndexes(t,e){return Ie.resolve()}getDocumentsMatchingTarget(t,e){return Ie.resolve(null)}getIndexType(t,e){return Ie.resolve(0)}getFieldIndexes(t,e){return Ie.resolve([])}getNextCollectionGroupToUpdate(t){return Ie.resolve(null)}getMinOffset(t,e){return Ie.resolve(_e.min())}getMinOffsetFromCollectionGroup(t,e){return Ie.resolve(_e.min())}updateCollectionGroup(t,e,n){return Ie.resolve()}updateIndexEntries(t,e){return Ie.resolve()}}class Gs{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Me(ge.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Me(ge.comparator)).toArray()}}
/**
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
 */class Hs{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Hs(0)}static kn(){return new Hs(-1)}}
/**
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
 */class Qs{constructor(){this.changes=new er((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pn.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ie.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */
/**
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
 */class Ws{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class Ys{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Mr(n.mutation,t,Fe.empty(),de.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,dr()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=dr()){const r=ar();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=ir();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ar();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,dr())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=rr();const i=hr(),o=hr();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Ur)?s=s.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),Mr(o.mutation,e,o.mutation.getFieldMask(),de.now())):i.set(e.key,Fe.empty())})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ws(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=hr();let r=new xe(((t,e)=>t-e)),s=dr();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Fe.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||dr()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,h=cr();c.forEach((t=>{if(!s.has(t)){const r=Or(e.get(t),n.get(t));null!==r&&h.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,h))}return Ie.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return s=e,ve.isDocumentKey(s.path)&&null===s.collectionGroup&&0===s.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):zn(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r);var s}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):Ie.resolve(ar());let o=-1,a=s;return i.next((e=>Ie.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?Ie.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,dr()))).next((t=>({batchId:o,changes:or(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ve(e)).next((t=>{let e=ir();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let i=ir();return this.indexManager.getCollectionParents(t,s).next((o=>Ie.forEach(o,(o=>{const a=(c=e,h=o.child(s),new qn(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,h;return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r)))).next((t=>{s.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,pn.newInvalidDocument(r)))}));let n=ir();return t.forEach(((t,r)=>{const i=s.get(t);void 0!==i&&Mr(i.mutation,r,Fe.empty(),de.now()),Jn(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
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
 */class Xs{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return Ie.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,{id:(n=e).id,version:n.version,createTime:_s(n.createTime)}),Ie.resolve();var n}getNamedQuery(t,e){return Ie.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,{name:(n=e).name,query:zs(n.bundledQuery),readTime:_s(n.readTime)}),Ie.resolve();var n}}
/**
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
 */class Js{constructor(){this.overlays=new xe(ve.comparator),this.Ir=new Map}getOverlay(t,e){return Ie.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ar();return Ie.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ht(t,e,r)})),Ie.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Ir.delete(n)),Ie.resolve()}getOverlaysForCollection(t,e,n){const r=ar(),s=e.length+1,i=new ve(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Ie.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new xe(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=ar(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ar(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return Ie.resolve(o)}ht(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Hr(e,n));let s=this.Ir.get(e);void 0===s&&(s=dr(),this.Ir.set(e,s)),this.Ir.set(e,s.add(n.key))}}
/**
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
 */class Zs{constructor(){this.sessionToken=Ue.EMPTY_BYTE_STRING}getSessionToken(t){return Ie.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,Ie.resolve()}}
/**
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
 */class ti{constructor(){this.Tr=new Me(ei.Er),this.dr=new Me(ei.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new ei(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Vr(new ei(t,e))}mr(t,e){t.forEach((t=>this.removeReference(t,e)))}gr(t){const e=new ve(new ge([])),n=new ei(e,t),r=new ei(e,t+1),s=[];return this.dr.forEachInRange([n,r],(t=>{this.Vr(t),s.push(t.key)})),s}pr(){this.Tr.forEach((t=>this.Vr(t)))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new ve(new ge([])),n=new ei(e,t),r=new ei(e,t+1);let s=dr();return this.dr.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new ei(t,0),n=this.Tr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ei{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return ve.comparator(t.key,e.key)||ue(t.wr,e.wr)}static Ar(t,e){return ue(t.wr,e.wr)||ve.comparator(t.key,e.key)}}
/**
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
 */class ni{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Me(ei.Er)}checkEmpty(t){return Ie.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Kr(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.br=this.br.add(new ei(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ie.resolve(i)}lookupMutationBatch(t,e){return Ie.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.vr(n),s=r<0?0:r;return Ie.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Ie.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(t){return Ie.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ei(e,0),r=new ei(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,r],(t=>{const e=this.Dr(t.wr);s.push(e)})),Ie.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Me(ue);return e.forEach((t=>{const e=new ei(t,0),r=new ei(t,Number.POSITIVE_INFINITY);this.br.forEachInRange([e,r],(t=>{n=n.add(t.wr)}))})),Ie.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;ve.isDocumentKey(s)||(s=s.child(""));const i=new ei(new ve(s),0);let o=new Me(ue);return this.br.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.wr)),!0)}),i),Ie.resolve(this.Cr(o))}Cr(t){const e=[];return t.forEach((t=>{const n=this.Dr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Wt(0===this.Fr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return Ie.forEach(e.mutations,(r=>{const s=new ei(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.br=n}))}On(t){}containsKey(t,e){const n=new ei(e,0),r=this.br.firstAfterOrEqual(n);return Ie.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ie.resolve()}Fr(t,e){return this.vr(t)}vr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class ri{constructor(t){this.Mr=t,this.docs=new xe(ve.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ie.resolve(n?n.document.mutableCopy():pn.newInvalidDocument(e))}getEntries(t,e){let n=rr();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():pn.newInvalidDocument(t))})),Ie.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=rr();const i=e.path,o=new ve(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||Ee(we(o),n)<=0||(r.has(o.key)||Jn(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Ie.resolve(s)}getAllFromCollectionGroup(t,e,n,r){Qt()}Or(t,e){return Ie.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new si(this)}getSize(t){return Ie.resolve(this.size)}}class si extends Qs{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(n)})),Ie.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}
/**
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
 */class ii{constructor(t){this.persistence=t,this.Nr=new er((t=>Vn(t)),Un),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ti,this.targetCount=0,this.kr=Hs.Bn()}forEachTarget(t,e){return this.Nr.forEach(((t,n)=>e(n))),Ie.resolve()}getLastRemoteSnapshotVersion(t){return Ie.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ie.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),Ie.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),Ie.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Hs(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,Ie.resolve()}updateTargetData(t,e){return this.Kn(e),Ie.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,Ie.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Nr.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Nr.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Ie.waitFor(s).next((()=>r))}getTargetCount(t){return Ie.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return Ie.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),Ie.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),Ie.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),Ie.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return Ie.resolve(n)}containsKey(t,e){return Ie.resolve(this.Br.containsKey(e))}}
/**
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
 */class oi{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Ce(0),this.Kr=!1,this.Kr=!0,this.$r=new Zs,this.referenceDelegate=t(this),this.Ur=new ii(this),this.indexManager=new Ks,this.remoteDocumentCache=new ri((t=>this.referenceDelegate.Wr(t))),this.serializer=new $s(e),this.Gr=new Xs(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Js,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new ni(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){zt("MemoryPersistence","Starting transaction:",t);const r=new ai(this.Qr.next());return this.referenceDelegate.zr(),n(r).next((t=>this.referenceDelegate.jr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Hr(t,e){return Ie.or(Object.values(this.qr).map((n=>()=>n.containsKey(t,e))))}}class ai extends be{constructor(t){super(),this.currentSequenceNumber=t}}class ci{constructor(t){this.persistence=t,this.Jr=new ti,this.Yr=null}static Zr(t){return new ci(t)}get Xr(){if(this.Yr)return this.Yr;throw Qt()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),Ie.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),Ie.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),Ie.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach((t=>this.Xr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Xr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ie.forEach(this.Xr,(n=>{const r=ve.fromPath(n);return this.ei(t,r).next((t=>{t||e.removeEntry(r,fe.min())}))})).next((()=>(this.Yr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ei(t,e).next((t=>{t?this.Xr.delete(e.toString()):this.Xr.add(e.toString())}))}Wr(t){return 0}ei(t,e){return Ie.or([()=>Ie.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}
/**
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
 */class hi{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=r}static Wi(t,e){let n=dr(),r=dr();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new hi(t,e.fromCache,n,r)}}
/**
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
 */class ui{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
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
 */class li{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=d()?8:function(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.Yi(t,e).next((t=>{s.result=t})).next((()=>{if(!s.result)return this.Zi(t,e,r,n).next((t=>{s.result=t}))})).next((()=>{if(s.result)return;const n=new ui;return this.Xi(t,e,n).next((r=>{if(s.result=r,this.zi)return this.es(t,e,n,r.size)}))})).next((()=>s.result))}es(t,e,n,r){return n.documentReadCount<this.ji?($t()<=T.DEBUG&&zt("QueryEngine","SDK will not create cache indexes for query:",Xn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Ie.resolve()):($t()<=T.DEBUG&&zt("QueryEngine","Query:",Xn(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?($t()<=T.DEBUG&&zt("QueryEngine","The SDK decides to create cache indexes for query:",Xn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Gn(e))):Ie.resolve())}Yi(t,e){if($n(e))return Ie.resolve(null);let n=Gn(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Qn(e,null,"F"),n=Gn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const s=dr(...r);return this.Ji.getDocuments(t,s).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.ts(e,r);return this.ns(e,i,s,n.readTime)?this.Yi(t,Qn(e,null,"F")):this.rs(t,i,e,n)}))))})))))}Zi(t,e,n,r){return $n(e)||r.isEqual(fe.min())?Ie.resolve(null):this.Ji.getDocuments(t,n).next((s=>{const i=this.ts(e,s);return this.ns(e,i,n,r)?Ie.resolve(null):($t()<=T.DEBUG&&zt("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Xn(e)),this.rs(t,i,e,function(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(1e9===r?new de(n+1,0):new de(n,r));return new _e(s,ve.empty(),e)}(r,-1)).next((t=>t)))}))}ts(t,e){let n=new Me(Zn(t));return e.forEach(((e,r)=>{Jn(t,r)&&(n=n.add(r))})),n}ns(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(t,e,n){return $t()<=T.DEBUG&&zt("QueryEngine","Using full collection scan to execute query:",Xn(e)),this.Ji.getDocumentsMatchingQuery(t,e,_e.min(),n)}rs(t,e,n,r){return this.Ji.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
 */class di{constructor(t,e,n,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new xe(ue),this._s=new er((t=>Vn(t)),Un),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ys(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.os)))}}async function fi(t,e){const n=Yt(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.ls(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=dr();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({hs:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function pi(t){const e=Yt(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function gi(t,e){const n=Yt(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Ur.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Ur.addMatchingKeys(t,i.addedDocuments,a))));let h=c.withSequenceNumber(t.currentSequenceNumber);var u,l,d;null!==e.targetMismatches.get(a)?h=h.withResumeToken(Ue.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):i.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(i.resumeToken,r)),s=s.insert(a,h),l=h,d=i,(0===(u=c).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Ur.updateTargetData(t,h))}));let a=rr(),c=dr();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n){let r=dr(),s=dr();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=rr();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(fe.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):zt("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Ps:r,Is:s}}))}(t,i,e.documentUpdates).next((t=>{a=t.Ps,c=t.Is}))),!r.isEqual(fe.min())){const e=n.Ur.getLastRemoteSnapshotVersion(t).next((e=>n.Ur.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Ie.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.os=s,t)))}function mi(t,e){const n=Yt(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}async function yi(t,e,n){const r=Yt(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(o){if(!Se(o))throw o;zt("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function vi(t,e,n){const r=Yt(t);let s=fe.min(),i=dr();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=Yt(t),s=r._s.get(n);return void 0!==s?Ie.resolve(r.os.get(s)):r.Ur.getTargetData(e,n)}(r,t,Gn(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.ss.getDocumentsMatchingQuery(t,e,n?s:fe.min(),n?i:dr()))).next((t=>(function(t,e,n){let r=t.us.get(e)||fe.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.us.set(e,r)}(r,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,Ts:i})))))}class wi{constructor(){this.activeTargetIds=fr}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _i{constructor(){this.so=new wi,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new wi,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class Ei{_o(t){}shutdown(){}}
/**
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
 */class bi{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){zt("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){zt("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let Ti=null;function Ii(){return null===Ti?Ti=268435456+Math.round(2147483648*Math.random()):Ti++,"0x"+Ti.toString(16)
/**
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
 */}const Si={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class Ci{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}
/**
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
 */const Ai="WebChannelConnection";class Di extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=e+"://"+t.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(t,e,n,r,s){const i=Ii(),o=this.xo(t,e.toUriEncodedString());zt("RestConnection",`Sending RPC '${t}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,r,s),this.No(t,o,a,n).then((e=>(zt("RestConnection",`Received RPC '${t}' ${i}: `,e),e)),(e=>{throw Gt("RestConnection",`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e}))}Lo(t,e,n,r,s,i){return this.Mo(t,e,n,r,s)}Oo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+qt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}xo(t,e){const n=Si[t];return`${this.Do}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,r){const s=Ii();return new Promise(((i,o)=>{const a=new kt;a.setWithCredentials(!0),a.listenOnce(xt.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Ot.NO_ERROR:const e=a.getResponseJson();zt(Ai,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),i(e);break;case Ot.TIMEOUT:zt(Ai,`RPC '${t}' ${s} timed out`),o(new Jt(Xt.DEADLINE_EXCEEDED,"Request time out"));break;case Ot.HTTP_ERROR:const n=a.getStatus();if(zt(Ai,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Xt).indexOf(e)>=0?e:Xt.UNKNOWN}(e.status);o(new Jt(t,e.message))}else o(new Jt(Xt.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Jt(Xt.UNAVAILABLE,"Connection failed."));break;default:Qt()}}finally{zt(Ai,`RPC '${t}' ${s} completed.`)}}));const c=JSON.stringify(r);zt(Ai,`RPC '${t}' ${s} sending request:`,r),a.send(e,"POST",c,n,15)}))}Bo(t,e,n){const r=Ii(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Ft(),o=Pt(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Oo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const h=s.join("");zt(Ai,`Creating RPC '${t}' stream ${r}: ${h}`,a);const u=i.createWebChannel(h,a);let l=!1,d=!1;const f=new Ci({Io:e=>{d?zt(Ai,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(zt(Ai,`Opening RPC '${t}' stream ${r} transport.`),u.open(),l=!0),zt(Ai,`RPC '${t}' stream ${r} sending:`,e),u.send(e))},To:()=>u.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(u,Rt.EventType.OPEN,(()=>{d||(zt(Ai,`RPC '${t}' stream ${r} transport opened.`),f.yo())})),p(u,Rt.EventType.CLOSE,(()=>{d||(d=!0,zt(Ai,`RPC '${t}' stream ${r} transport closed`),f.So())})),p(u,Rt.EventType.ERROR,(e=>{d||(d=!0,Gt(Ai,`RPC '${t}' stream ${r} transport errored:`,e),f.So(new Jt(Xt.UNAVAILABLE,"The operation could not be completed")))})),p(u,Rt.EventType.MESSAGE,(e=>{var n;if(!d){const s=e.data[0];Wt(!!s);const i=s,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){zt(Ai,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Wr[t];if(void 0!==e)return Xr(e)}(e),s=o.message;void 0===n&&(n=Xt.INTERNAL,s="Unknown error status: "+e+" with message "+o.message),d=!0,f.So(new Jt(n,s)),u.close()}else zt(Ai,`RPC '${t}' stream ${r} received:`,s),f.bo(s)}})),p(o,Mt.STAT_EVENT,(e=>{e.stat===Lt.PROXY?zt(Ai,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===Lt.NOPROXY&&zt(Ai,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.wo()}),0),f}}function Ni(){return"undefined"!=typeof document?document:null}
/**
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
 */function ki(t){return new gs(t,!0)}
/**
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
 */class Ri{constructor(t,e,n=1e3,r=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-n);r>0&&zt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),t()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
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
 */class xi{constructor(t,e,n,r,s,i,o,a){this.ui=t,this.Ho=n,this.Jo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ri(t,e)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==t?this.t_.reset():e&&e.code===Xt.RESOURCE_EXHAUSTED?(Kt(e.toString()),Kt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===Xt.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Yo===e&&this.P_(t,n)}),(e=>{t((()=>{const t=new Jt(Xt.UNKNOWN,"Fetching auth token failed: "+e.message);return this.I_(t)}))}))}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((t=>{n((()=>this.I_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.e_?this.E_(t):this.onNext(t)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(t){return zt("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget((()=>this.Yo===t?e():(zt("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Oi extends xi{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Qt(),i=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(Wt(void 0===e||"string"==typeof e),Ue.fromBase64String(e||"")):(Wt(void 0===e||e instanceof Buffer||e instanceof Uint8Array),Ue.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?Xt.UNKNOWN:Xr(t.code);return new Jt(e,t.message||"")}(a);n=new as(s,i,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ss(t,r.document.name),i=_s(r.document.updateTime),o=r.document.createTime?_s(r.document.createTime):fe.min(),a=new dn({mapValue:{fields:r.document.fields}}),c=pn.newFoundDocument(s,i,o,a),h=r.targetIds||[],u=r.removedTargetIds||[];n=new is(h,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ss(t,r.document),i=r.readTime?_s(r.readTime):fe.min(),o=pn.newNoDocument(s,i),a=r.removedTargetIds||[];n=new is([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ss(t,r.document),i=r.removedTargetIds||[];n=new is([],i,s,null)}else{if(!("filter"in e))return Qt();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:s}=t,i=new Qr(r,s),o=t.targetId;n=new os(o,i)}}var r;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return fe.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?fe.min():e.readTime?_s(e.readTime):fe.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=As(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Bn(r)?{documents:ks(t,r)}:{query:Rs(t,r)._t},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=vs(t,e.resumeToken);const r=ms(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(fe.min())>0){n.readTime=ys(t,e.snapshotVersion.toTimestamp());const r=ms(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Qt()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=As(this.serializer),e.removeTarget=t,this.a_(e)}}class Li extends xi{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return Wt(!!t.streamToken),this.lastStreamToken=t.streamToken,Wt(!t.writeResults||0===t.writeResults.length),this.listener.f_()}onNext(t){Wt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=function(t,e){return t&&t.length>0?(Wt(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?_s(t.updateTime):_s(e);return n.isEqual(fe.min())&&(n=_s(e)),new Nr(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=_s(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=As(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Vr)n={update:Ns(t,e.key,e.value)};else if(e instanceof $r)n={delete:Is(t,e.key)};else if(e instanceof Ur)n={update:Ns(t,e.key,e.data),updateMask:Bs(e.fieldMask)};else{if(!(e instanceof zr))return Qt();n={verify:Is(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Er)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof br)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ir)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Cr)return{fieldPath:e.field.canonicalString(),increment:n.Pe};throw Qt()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(s=e.precondition).updateTime?{updateTime:ws(r,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Qt())),n;var r,s}(this.serializer,t)))};this.a_(e)}}
/**
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
 */class Mi extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new Jt(Xt.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.Mo(t,bs(e,n),r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Xt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Jt(Xt.UNKNOWN,t.toString())}))}Lo(t,e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Lo(t,bs(e,n),r,i,o,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Xt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Jt(Xt.UNKNOWN,t.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Pi{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(t){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,"Online"===t&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Kt(e),this.D_=!1):zt("OnlineStateTracker",e)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
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
 */class Fi{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o((t=>{n.enqueueAndForget((async()=>{Gi(this)&&(zt("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Yt(t);e.L_.add(4),await Ui(e),e.q_.set("Unknown"),e.L_.delete(4),await Vi(e)}(this))}))})),this.q_=new Pi(n,r)}}async function Vi(t){if(Gi(t))for(const e of t.B_)await e(!0)}async function Ui(t){for(const e of t.B_)await e(!1)}function Bi(t,e){const n=Yt(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Ki(n)?zi(n):uo(n).r_()&&ji(n,e))}function qi(t,e){const n=Yt(t),r=uo(n);n.N_.delete(e),r.r_()&&$i(n,e),0===n.N_.size&&(r.r_()?r.o_():Gi(n)&&n.q_.set("Unknown"))}function ji(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}uo(t).A_(e)}function $i(t,e){t.Q_.xe(e),uo(t).R_(e)}function zi(t){t.Q_=new hs({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),uo(t).start(),t.q_.v_()}function Ki(t){return Gi(t)&&!uo(t).n_()&&t.N_.size>0}function Gi(t){return 0===Yt(t).L_.size}function Hi(t){t.Q_=void 0}async function Qi(t){t.q_.set("Online")}async function Wi(t){t.N_.forEach(((e,n)=>{ji(t,e)}))}async function Yi(t,e){Hi(t),Ki(t)?(t.q_.M_(e),zi(t)):t.q_.set("Unknown")}async function Xi(t,e,n){if(t.q_.set("Online"),e instanceof as&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.N_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.N_.delete(r),t.Q_.removeTarget(r))}(t,e)}catch(r){zt("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ji(t,r)}else if(e instanceof is?t.Q_.Ke(e):e instanceof os?t.Q_.He(e):t.Q_.We(e),!n.isEqual(fe.min()))try{const e=await pi(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Q_.rt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.N_.get(r);s&&t.N_.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.N_.get(e);if(!r)return;t.N_.set(e,r.withResumeToken(Ue.EMPTY_BYTE_STRING,r.snapshotVersion)),$i(t,e);const s=new js(r.target,e,n,r.sequenceNumber);ji(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(s){zt("RemoteStore","Failed to raise snapshot:",s),await Ji(t,s)}}async function Ji(t,e,n){if(!Se(e))throw e;t.L_.add(1),await Ui(t),t.q_.set("Offline"),n||(n=()=>pi(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{zt("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Vi(t)}))}function Zi(t,e){return e().catch((n=>Ji(t,n,e)))}async function to(t){const e=Yt(t),n=lo(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;eo(e);)try{const t=await mi(e.localStore,r);if(null===t){0===e.O_.length&&n.o_();break}r=t.batchId,no(e,t)}catch(s){await Ji(e,s)}ro(e)&&so(e)}function eo(t){return Gi(t)&&t.O_.length<10}function no(t,e){t.O_.push(e);const n=lo(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ro(t){return Gi(t)&&!lo(t).n_()&&t.O_.length>0}function so(t){lo(t).start()}async function io(t){lo(t).p_()}async function oo(t){const e=lo(t);for(const n of t.O_)e.m_(n.mutations)}async function ao(t,e,n){const r=t.O_.shift(),s=Gr.from(r,e,n);await Zi(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await to(t)}async function co(t,e){e&&lo(t).V_&&await async function(t,e){if(function(t){switch(t){default:return Qt();case Xt.CANCELLED:case Xt.UNKNOWN:case Xt.DEADLINE_EXCEEDED:case Xt.RESOURCE_EXHAUSTED:case Xt.INTERNAL:case Xt.UNAVAILABLE:case Xt.UNAUTHENTICATED:return!1;case Xt.INVALID_ARGUMENT:case Xt.NOT_FOUND:case Xt.ALREADY_EXISTS:case Xt.PERMISSION_DENIED:case Xt.FAILED_PRECONDITION:case Xt.ABORTED:case Xt.OUT_OF_RANGE:case Xt.UNIMPLEMENTED:case Xt.DATA_LOSS:return!0}}(n=e.code)&&n!==Xt.ABORTED){const n=t.O_.shift();lo(t).s_(),await Zi(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await to(t)}var n}(t,e),ro(t)&&so(t)}async function ho(t,e){const n=Yt(t);n.asyncQueue.verifyOperationInProgress(),zt("RemoteStore","RemoteStore received new credentials");const r=Gi(n);n.L_.add(3),await Ui(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Vi(n)}function uo(t){return t.K_||(t.K_=function(t,e,n){const r=Yt(t);return r.w_(),new Oi(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Eo:Qi.bind(null,t),Ro:Wi.bind(null,t),mo:Yi.bind(null,t),d_:Xi.bind(null,t)}),t.B_.push((async e=>{e?(t.K_.s_(),Ki(t)?zi(t):t.q_.set("Unknown")):(await t.K_.stop(),Hi(t))}))),t.K_}function lo(t){return t.U_||(t.U_=function(t,e,n){const r=Yt(t);return r.w_(),new Li(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:io.bind(null,t),mo:co.bind(null,t),f_:oo.bind(null,t),g_:ao.bind(null,t)}),t.B_.push((async e=>{e?(t.U_.s_(),await to(t)):(await t.U_.stop(),t.O_.length>0&&(zt("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))}))),t.U_
/**
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
 */}class fo{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new fo(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Jt(Xt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function po(t,e){if(Kt("AsyncQueue",`${e}: ${t}`),Se(t))return new Jt(Xt.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class go{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ve.comparator(e.key,n.key):(t,e)=>ve.comparator(t.key,e.key),this.keyedMap=ir(),this.sortedSet=new xe(this.comparator)}static emptySet(t){return new go(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof go))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new go;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class mo{constructor(){this.W_=new xe(ve.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?0!==t.type&&3===n.type?this.W_=this.W_.insert(e,t):3===t.type&&1!==n.type?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.W_=this.W_.remove(e):1===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):Qt():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class yo{constructor(t,e,n,r,s,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new yo(t,e,go.emptySet(e),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Wn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class vo{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((t=>t.J_()))}}class wo{constructor(){this.queries=_o(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(t,e){const n=Yt(t),r=n.queries;n.queries=_o(),r.forEach(((t,n)=>{for(const r of n.j_)r.onError(e)}))}(this,new Jt(Xt.ABORTED,"Firestore shutting down"))}}function _o(){return new er((t=>Yn(t)),Wn)}function Eo(t,e){const n=Yt(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.j_)t.X_(s)&&(r=!0);e.z_=s}}r&&To(n)}function bo(t,e,n){const r=Yt(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function To(t){t.Y_.forEach((t=>{t.next()}))}var Io,So;(So=Io||(Io={})).ea="default",So.Cache="cache";class Co{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new yo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==e;return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}oa(t){t=yo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Io.Cache}}
/**
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
 */class Ao{constructor(t){this.key=t}}class Do{constructor(t){this.key=t}}class No{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=dr(),this.mutatedKeys=dr(),this.Aa=Zn(t),this.Ra=new go(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new mo,r=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const h=r.get(t),u=Jn(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;h&&u?h.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.ga(h,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Aa(u,a)>0||c&&this.Aa(u,c)<0)&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(a||c)&&(o=!0)),f&&(u?(i=i.add(u),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Ra:i,fa:n,ns:o,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const i=t.fa.G_();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Qt()}};return n(t)-n(e)}(t.type,e.type)||this.Aa(t.doc,e.doc))),this.pa(n),r=null!=r&&r;const o=e&&!r?this.ya():[],a=0===this.da.size&&this.current&&!r?1:0,c=a!==this.Ea;return this.Ea=a,0!==i.length||c?{snapshot:new yo(this.query,t.Ra,s,i,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new mo,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=dr(),this.Ra.forEach((t=>{this.Sa(t.key)&&(this.da=this.da.add(t.key))}));const e=[];return t.forEach((t=>{this.da.has(t)||e.push(new Do(t))})),this.da.forEach((n=>{t.has(n)||e.push(new Ao(n))})),e}ba(t){this.Ta=t.Ts,this.da=dr();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return yo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class ko{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ro{constructor(t){this.key=t,this.va=!1}}class xo{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Ca={},this.Fa=new er((t=>Yn(t)),Wn),this.Ma=new Map,this.xa=new Set,this.Oa=new xe(ve.comparator),this.Na=new Map,this.La=new ti,this.Ba={},this.ka=new Map,this.qa=Hs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function Oo(t,e,n=!0){const r=ta(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Mo(r,e,n,!0),s}async function Lo(t,e){const n=ta(t);await Mo(n,e,!0,!1)}async function Mo(t,e,n,r){const s=await function(t,e){const n=Yt(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Ur.getTargetData(t,e).next((s=>s?(r=s,Ie.resolve(r)):n.Ur.allocateTargetId(t).next((s=>(r=new js(e,s,"TargetPurposeListen",t.currentSequenceNumber),n.Ur.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.os.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(t.targetId,t),n._s.set(e,t.targetId)),t}))}(t.localStore,Gn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await async function(t,e,n,r,s){t.Ka=(e,n,r)=>async function(t,e,n,r){let s=e.view.ma(n);s.ns&&(s=await vi(t.localStore,e.query,!1).then((({documents:t})=>e.view.ma(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(s,t.isPrimaryClient,i,o);return Qo(t,e.targetId,a.wa),a.snapshot}(t,e,n,r);const i=await vi(t.localStore,e,!0),o=new No(e,i.Ts),a=o.ma(i.documents),c=ss.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,s),h=o.applyChanges(a,t.isPrimaryClient,c);Qo(t,n,h.wa);const u=new ko(e,n,o);return t.Fa.set(e,u),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}(t,e,i,"current"===o,s.resumeToken)),t.isPrimaryClient&&n&&Bi(t.remoteStore,s),a}async function Po(t,e,n){const r=Yt(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter((t=>!Wn(t,e)))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await yi(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&qi(r.remoteStore,s.targetId),Go(r,s.targetId)})).catch(Te)):(Go(r,s.targetId),await yi(r.localStore,s.targetId,!0))}async function Fo(t,e){const n=Yt(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qi(n.remoteStore,r.targetId))}async function Vo(t,e,n){const r=function(t){const e=Yt(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jo.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$o.bind(null,e),e}(t);try{const t=await function(t,e){const n=Yt(t),r=de.now(),s=e.reduce(((t,e)=>t.add(e.key)),dr());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=rr(),c=dr();return n.cs.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=Pr(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Ur(t.key,e,fn(e.value.mapValue),kr.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:or(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Ba[t.currentUser.toKey()];r||(r=new xe(ue)),r=r.insert(e,n),t.Ba[t.currentUser.toKey()]=r}(r,t.batchId,n),await Xo(r,t.changes),await to(r.remoteStore)}catch(s){const t=po(s,"Failed to persist write");n.reject(t)}}async function Uo(t,e){const n=Yt(t);try{const t=await gi(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Na.get(e);r&&(Wt(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.va=!0:t.modifiedDocuments.size>0?Wt(r.va):t.removedDocuments.size>0&&(Wt(r.va),r.va=!1))})),await Xo(n,t,e)}catch(r){await Te(r)}}function Bo(t,e,n){const r=Yt(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Fa.forEach(((n,r)=>{const s=r.view.Z_(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Yt(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.j_)s.Z_(e)&&(r=!0)})),r&&To(n)}(r.eventManager,e),t.length&&r.Ca.d_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qo(t,e,n){const r=Yt(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let t=new xe(ve.comparator);t=t.insert(i,pn.newNoDocument(i,fe.min()));const n=dr().add(i),s=new rs(fe.min(),new Map,new xe(ue),t,n);await Uo(r,s),r.Oa=r.Oa.remove(i),r.Na.delete(e),Yo(r)}else await yi(r.localStore,e,!1).then((()=>Go(r,e,n))).catch(Te)}async function jo(t,e){const n=Yt(t),r=e.batch.batchId;try{const t=await function(t,e){const n=Yt(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=Ie.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Wt(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=dr();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);Ko(n,r,null),zo(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xo(n,t)}catch(s){await Te(s)}}async function $o(t,e,n){const r=Yt(t);try{const t=await function(t,e){const n=Yt(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Wt(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Ko(r,e,n),zo(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xo(r,t)}catch(s){await Te(s)}}function zo(t,e){(t.ka.get(e)||[]).forEach((t=>{t.resolve()})),t.ka.delete(e)}function Ko(t,e,n){const r=Yt(t);let s=r.Ba[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Go(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach((e=>{t.La.containsKey(e)||Ho(t,e)}))}function Ho(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);null!==n&&(qi(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Yo(t))}function Qo(t,e,n){for(const r of n)r instanceof Ao?(t.La.addReference(r.key,e),Wo(t,r)):r instanceof Do?(zt("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Ho(t,r.key)):Qt()}function Wo(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(zt("SyncEngine","New document in limbo: "+n),t.xa.add(r),Yo(t))}function Yo(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ve(ge.fromString(e)),r=t.qa.next();t.Na.set(r,new Ro(n)),t.Oa=t.Oa.insert(n,r),Bi(t.remoteStore,new js(Gn(jn(n.path)),r,"TargetPurposeLimboResolution",Ce.oe))}}async function Xo(t,e,n){const r=Yt(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach(((t,a)=>{o.push(r.Ka(a,e,n).then((t=>{var e;if((t||n)&&r.isPrimaryClient){const s=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,s?"current":"not-current")}if(t){s.push(t);const e=hi.Wi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.Ca.d_(s),await async function(t,e){const n=Yt(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ie.forEach(e,(e=>Ie.forEach(e.$i,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Ie.forEach(e.Ui,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(r){if(!Se(r))throw r;zt("LocalStore","Failed to update sequence numbers: "+r)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.os.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(t,s)}}}(r.localStore,i))}async function Jo(t,e){const n=Yt(t);if(!n.currentUser.isEqual(e)){zt("SyncEngine","User change. New user:",e.toKey());const t=await fi(n.localStore,e);n.currentUser=e,s="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).ka.forEach((t=>{t.forEach((t=>{t.reject(new Jt(Xt.CANCELLED,s))}))})),r.ka.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Xo(n,t.hs)}var r,s}function Zo(t,e){const n=Yt(t),r=n.Na.get(e);if(r&&r.va)return dr().add(r.key);{let t=dr();const r=n.Ma.get(e);if(!r)return t;for(const e of r){const r=n.Fa.get(e);t=t.unionWith(r.view.Va)}return t}}function ta(t){const e=Yt(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zo.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qo.bind(null,e),e.Ca.d_=Eo.bind(null,e.eventManager),e.Ca.$a=bo.bind(null,e.eventManager),e}class ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ki(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return function(t,e,n,r){return new di(t,e,n,r)}(this.persistence,new li,t.initialUser,this.serializer)}Ga(t){return new oi(ci.Zr,this.serializer)}Wa(t){return new _i}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ea.provider={build:()=>new ea};class na{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Bo(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jo.bind(null,this.syncEngine),await async function(t,e){const n=Yt(t);e?(n.L_.delete(2),await Vi(n)):e||(n.L_.add(2),await Ui(n),n.q_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new wo}createDatastore(t){const e=ki(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Di(r));var r;return function(t,e,n,r){return new Mi(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>Bo(this.syncEngine,t,0),i=bi.D()?new bi:new Ei,new Fi(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new xo(t,e,n,r,s,i);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=Yt(t);zt("RemoteStore","RemoteStore shutting down."),e.L_.add(5),await Ui(e),e.k_.shutdown(),e.q_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}na.provider={build:()=>new na};
/**
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
 */
/**
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
 */
class ra{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Kt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}
/**
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
 */class sa{constructor(t,e,n,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Bt.UNAUTHENTICATED,this.clientId=he.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,(async t=>{zt("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(zt("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=po(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ia(t,e){t.asyncQueue.verifyOperationInProgress(),zt("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await fi(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function oa(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){zt("FirestoreClient","Using user provided OfflineComponentProvider");try{await ia(t,t._uninitializedComponentsProvider._offline)}catch(e){const s=e;if(!("FirebaseError"===(n=s).name?n.code===Xt.FAILED_PRECONDITION||n.code===Xt.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw s;Gt("Error using user provided cache. Falling back to memory cache: "+s),await ia(t,new ea)}}else zt("FirestoreClient","Using default OfflineComponentProvider"),await ia(t,new ea);var n;return t._offlineComponents}(t);zt("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>ho(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ho(e.remoteStore,n))),t._onlineComponents=e}async function aa(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(zt("FirestoreClient","Using user provided OnlineComponentProvider"),await oa(t,t._uninitializedComponentsProvider._online)):(zt("FirestoreClient","Using default OnlineComponentProvider"),await oa(t,new na))),t._onlineComponents}async function ca(t){const e=await aa(t),n=e.eventManager;return n.onListen=Oo.bind(null,e.syncEngine),n.onUnlisten=Po.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Lo.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Fo.bind(null,e.syncEngine),n
/**
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
 */}function ha(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
 */}const ua=new Map;
/**
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
 */function la(t,e,n){if(!n)throw new Jt(Xt.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function da(t){if(!ve.isDocumentKey(t))throw new Jt(Xt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fa(t){if(ve.isDocumentKey(t))throw new Jt(Xt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pa(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Qt()}function ga(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Jt(Xt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pa(t);throw new Jt(Xt.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */class ma{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Jt(Xt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Jt(Xt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new Jt(Xt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ha(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Jt(Xt.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Jt(Xt.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Jt(Xt.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class ya{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ma({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Jt(Xt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Jt(Xt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ma(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ee;switch(t.type){case"firstParty":return new ie(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Jt(Xt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ua.get(t);e&&(zt("ComponentProvider","Removing Datastore"),ua.delete(t),e.terminate())}(this),Promise.resolve()}}function va(t,e,n,r={}){var s;const o=(t=ga(t,ya))._getSettings(),a=`${e}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==a&&Gt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Bt.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[i(JSON.stringify({alg:"none",type:"JWT"})),i(JSON.stringify(o)),""].join(".")}
/**
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
 */(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new Jt(Xt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Bt(o)}t._authCredentials=new ne(new te(e,n))}}
/**
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
 */class wa{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new wa(this.firestore,t,this._query)}}class _a{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ea(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _a(this.firestore,t,this._key)}}class Ea extends wa{constructor(t,e,n){super(t,e,jn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _a(this.firestore,null,new ve(t))}withConverter(t){return new Ea(this.firestore,t,this._path)}}function ba(t,e,...n){if(t=v(t),la("collection","path",e),t instanceof ya){const r=ge.fromString(e,...n);return fa(r),new Ea(t,null,r)}{if(!(t instanceof _a||t instanceof Ea))throw new Jt(Xt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return fa(r),new Ea(t.firestore,null,r)}}
/**
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
 */
class Ta{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ri(this,"async_queue_retry"),this.Vu=()=>{const t=Ni();t&&zt("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()},this.mu=t;const e=Ni();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ni();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise((()=>{}));const e=new Zt;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Pu.push(t),this.pu())))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Se(t))throw t;zt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(t){const e=this.mu.then((()=>(this.du=!0,t().catch((t=>{this.Eu=t,this.du=!1;throw Kt("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.du=!1,t))))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=fo.createAndSchedule(this,t,e,n,(t=>this.yu(t)));return this.Tu.push(r),r}fu(){this.Eu&&Qt()}verifyOperationInProgress(){}async wu(){let t;do{t=this.mu,await t}while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then((()=>{this.Tu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Tu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.wu()}))}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Ia(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}(t,["next","error","complete"])}class Sa extends ya{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Ta,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ta(t),this._firestoreClient=void 0,await t}}}function Ca(t,e){const n="string"==typeof t?t:"(default)",r=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}("object"==typeof t?t:function(t=ot){const e=ct.get(t);if(!e&&t===ot&&u())return gt();if(!e)throw ft.create("no-app",{appName:t});return e}(),"firestore").getImmediate({identifier:n});if(!r._initialized){const t=h("firestore");t&&va(r,...t)}return r}function Aa(t){if(t._terminated)throw new Jt(Xt.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||function(t){var e,n,r;const s=t._freezeSettings(),i=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",c=t._persistenceKey,h=s,new He(o,a,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ha(h.experimentalLongPollingOptions),h.useFetchStreams));var o,a,c,h;t._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new sa(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
/**
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
 */(t),t._firestoreClient}class Da{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Da(Ue.fromBase64String(t))}catch(e){throw new Jt(Xt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Da(Ue.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class Na{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Jt(Xt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ye(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */class ka{constructor(t){this._methodName=t}}
/**
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
 */class Ra{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Jt(Xt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Jt(Xt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ue(this._lat,t._lat)||ue(this._long,t._long)}}
/**
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
 */class xa{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
/**
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
 */const Oa=/^__.*__$/;class La{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ur(t,this.data,this.fieldMask,e,this.fieldTransforms):new Vr(t,this.data,e,this.fieldTransforms)}}function Ma(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Qt()}}class Pa{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Pa(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Fu({path:n,xu:!1});return r.Ou(t),r}Nu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Ha(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(0===t.length)throw this.Bu("Document fields must not be empty");if(Ma(this.Cu)&&Oa.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Fa{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ki(t)}Qu(t,e,n,r=!1){return new Pa({Cu:t,methodName:e,qu:n,path:ye.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Va(t){const e=t._freezeSettings(),n=ki(t._databaseId);return new Fa(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ua(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);$a("Data must be an object, but it was:",o,r);const a=qa(r,o);let c,h;if(i.merge)c=new Fe(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=za(e,r,n);if(!o.contains(s))throw new Jt(Xt.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Qa(t,s)||t.push(s)}c=new Fe(t),h=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,h=o.fieldTransforms;return new La(new dn(a),c,h)}function Ba(t,e){if(ja(t=v(t)))return $a("Unsupported field value:",e,t),qa(t,e);if(t instanceof ka)return function(t,e){if(!Ma(e.Cu))throw e.Bu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Bu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&4!==e.Cu)throw e.Bu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=Ba(s,e.Lu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=v(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return mr(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=de.fromDate(t);return{timestampValue:ys(e.serializer,n)}}if(t instanceof de){const n=new de(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ys(e.serializer,n)}}if(t instanceof Ra)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Da)return{bytesValue:vs(e.serializer,t._byteString)};if(t instanceof _a){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Es(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof xa)return n=e,{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw n.Bu("VectorValues must only contain numeric values.");return pr(n.serializer,t)}))}}}}};var n;throw e.Bu(`Unsupported field value: ${pa(t)}`)}(t,e)}function qa(t,e){const n={};return Re(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ke(t,((t,r)=>{const s=Ba(r,e.Mu(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function ja(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof de||t instanceof Ra||t instanceof Da||t instanceof _a||t instanceof ka||t instanceof xa)}function $a(t,e,n){if(!ja(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=pa(n);throw"an object"===r?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}var r}function za(t,e,n){if((e=v(e))instanceof Na)return e._internalPath;if("string"==typeof e)return Ga(t,e);throw Ha("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ka=new RegExp("[~\\*/\\[\\]]");function Ga(t,e,n){if(e.search(Ka)>=0)throw Ha(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Na(...e.split("."))._internalPath}catch(r){throw Ha(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ha(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Jt(Xt.INVALID_ARGUMENT,a+t+c)}function Qa(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
 */class Wa{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _a(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ya(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Xa("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ya extends Wa{data(){return super.data()}}function Xa(t,e){return"string"==typeof e?Ga(t,e):e instanceof Na?e._internalPath:e._delegate._internalPath}
/**
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
 */class Ja{}class Za extends Ja{}function tc(t,e,...n){let r=[];e instanceof Ja&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof nc)).length,n=t.filter((t=>t instanceof ec)).length;if(e>1||e>0&&n>0)throw new Jt(Xt.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ec extends Za{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new ec(t,e,n)}_apply(t){const e=this._parse(t);return ac(t._query,e),new wa(t.firestore,t.converter,Hn(t._query,e))}_parse(t){const e=Va(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new Jt(Xt.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){oc(o,i);const e=[];for(const n of o)e.push(ic(r,t,n));a={arrayValue:{values:e}}}else a=ic(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||oc(o,i),a=function(t,e,n,r=!1){return Ba(n,t.Qu(r?4:3,e))}(n,e,o,"in"===i||"not-in"===i);return En.create(s,i,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class nc extends Ja{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new nc(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:bn.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const s of r)ac(n,s),n=Hn(n,s)}(t._query,e),new wa(t.firestore,t.converter,Hn(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class rc extends Za{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new rc(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Jt(Xt.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Jt(Xt.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vn(e,n)}(t._query,this._field,this._direction);return new wa(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new qn(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function sc(t,e="asc"){const n=e,r=Xa("orderBy",t);return rc._create(r,n)}function ic(t,e,n){if("string"==typeof(n=v(n))){if(""===n)throw new Jt(Xt.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zn(e)&&-1!==n.indexOf("/"))throw new Jt(Xt.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!ve.isDocumentKey(r))throw new Jt(Xt.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sn(t,new ve(r))}if(n instanceof _a)return sn(t,n._key);throw new Jt(Xt.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pa(n)}.`)}function oc(t,e){if(!Array.isArray(t)||0===t.length)throw new Jt(Xt.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ac(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Jt(Xt.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Jt(Xt.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class cc{convertValue(t,e="none"){switch(Ye(t)){case 0:return null;case 1:return t.booleanValue;case 2:return je(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes($e(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Qt()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ke(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertVectorValue(t){var e,n,r;const s=null===(r=null===(n=null===(e=t.fields)||void 0===e?void 0:e.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((t=>je(t.doubleValue)));return new xa(s)}convertGeoPoint(t){return new Ra(je(t.latitude),je(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ke(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ge(t));default:return null}}convertTimestamp(t){const e=qe(t);return new de(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ge.fromString(t);Wt(qs(n));const r=new Qe(n.get(1),n.get(3)),s=new ve(n.popFirst(5));return r.isEqual(e)||Kt(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
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
 */
/**
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
 */
class hc{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class uc extends Wa{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Xa("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class lc extends uc{data(t={}){return super.data(t)}}class dc{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new hc(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new lc(this._firestore,this._userDataWriter,n.key,n,new hc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Jt(Xt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new lc(t._firestore,t._userDataWriter,n.doc.key,n.doc,new hc(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new lc(t._firestore,t._userDataWriter,e.doc.key,e.doc,new hc(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:fc(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function fc(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Qt()}}class pc extends cc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Da(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new _a(this.firestore,null,e)}}function gc(t,e){const n=ga(t.firestore,Sa),r=function(t,e,...n){if(t=v(t),1===arguments.length&&(e=he.newId()),la("doc","path",e),t instanceof ya){const r=ge.fromString(e,...n);return da(r),new _a(t,null,new ve(r))}{if(!(t instanceof _a||t instanceof Ea))throw new Jt(Xt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return da(r),new _a(t.firestore,t instanceof Ea?t.converter:null,new ve(r))}}(t),s=function(t,e){let n;return n=t?t.toFirestore(e):e,n}(t.converter,e);return function(t,e){return function(t,e){const n=new Zt;return t.asyncQueue.enqueueAndForget((async()=>Vo(await function(t){return aa(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(Aa(t),e)}(n,[Ua(Va(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,kr.exists(!1))]).then((()=>r))}function mc(t,...e){var n,r,s;t=v(t);let i={includeMetadataChanges:!1,source:"default"},o=0;"object"!=typeof e[o]||Ia(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ia(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let c,h,u;if(t instanceof _a)h=ga(t.firestore,Sa),u=jn(t._key.path),c={next:n=>{e[o]&&e[o](function(t,e,n){const r=n.docs.get(e._key),s=new pc(t);return new uc(t,s,e._key,r,new hc(n.hasPendingWrites,n.fromCache),e.converter)}(h,t,n))},error:e[o+1],complete:e[o+2]};else{const n=ga(t,wa);h=ga(n.firestore,Sa),u=n._query;const r=new pc(h);c={next:t=>{e[o]&&e[o](new dc(h,r,n,t))},error:e[o+1],complete:e[o+2]},function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Jt(Xt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query)}return function(t,e,n,r){const s=new ra(r),i=new Co(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>async function(e,n){const r=Yt(e);let s=3;const i=n.query;let o=r.queries.get(i);o?!o.H_()&&n.J_()&&(s=2):(o=new vo,s=n.J_()?0:1);try{switch(s){case 0:o.z_=await r.onListen(i,!0);break;case 1:o.z_=await r.onListen(i,!1);break;case 2:await r.onFirstRemoteStoreListen(i)}}catch(t){const r=po(t,`Initialization of query '${Xn(n.query)}' failed`);return void n.onError(r)}r.queries.set(i,o),o.j_.push(n),n.Z_(r.onlineState),o.z_&&n.X_(o.z_)&&To(r)}(await ca(t),i))),()=>{s.Za(),t.asyncQueue.enqueueAndForget((async()=>async function(t,e){const n=Yt(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const t=i.j_.indexOf(e);t>=0&&(i.j_.splice(t,1),0===i.j_.length?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}(await ca(t),i)))}}(Aa(h),u,a,c)}!function(t,e=!0){qt="10.14.1",dt(new w("firestore",((t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new Sa(new re(t.getProvider("auth-internal")),new ae(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Jt(Xt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qe(t.options.projectId,e)}(s,n),s);return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),mt(Ut,"4.7.3",t),mt(Ut,"4.7.3","esm2017")}();export{sc as a,gc as b,ba as c,Ca as g,gt as i,mc as o,tc as q,mt as r};
