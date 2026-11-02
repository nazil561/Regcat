var eD=Object.defineProperty;var tD=(r,e,t)=>e in r?eD(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var q=(r,e,t)=>tD(r,typeof e!="symbol"?e+"":e,t);/**
 * @license
 * Copyright 2025 Google LLC
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
 */const nD=()=>{};var uf={};/**
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
 */const Gp=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rD=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],a=r[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,a=o?r[s+1]:0,u=s+2<r.length,l=u?r[s+2]:0,B=i>>2,d=(i&3)<<4|a>>4;let C=(a&15)<<2|l>>6,g=l&63;u||(g=64,o||(C=64)),n.push(t[B],t[d],t[C],t[g])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Gp(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):rD(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],a=s<r.length?t[r.charAt(s)]:0;++s;const l=s<r.length?t[r.charAt(s)]:64;++s;const d=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new sD;const C=i<<2|a>>4;if(n.push(C),l!==64){const g=a<<4&240|l>>2;if(n.push(g),d!==64){const m=l<<6&192|d;n.push(m)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class sD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iD=function(r){const e=Gp(r);return Up.encodeByteArray(e,!0)},_u=function(r){return iD(r).replace(/\./g,"")},Hp=function(r){try{return Up.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oD=()=>qp().__FIREBASE_DEFAULTS__,aD=()=>{if(typeof process>"u"||typeof uf>"u")return;const r=uf.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},uD=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Hp(r[1]);return e&&JSON.parse(e)},Wu=()=>{try{return nD()||oD()||aD()||uD()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},jp=r=>{var e,t;return(t=(e=Wu())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},Jp=r=>{const e=jp(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Kp=()=>{var r;return(r=Wu())==null?void 0:r.config},zp=r=>{var e;return(e=Wu())==null?void 0:e[`_${r}`]};/**
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
 */class Qp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Wp(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[_u(JSON.stringify(t)),_u(JSON.stringify(o)),""].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function $p(){var e;const r=(e=Wu())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function BD(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function hD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dD(){const r=et();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Yp(){return!$p()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xp(){return!$p()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Zp(){try{return typeof indexedDB=="object"}catch{return!1}}function fD(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function uO(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const CD="FirebaseError";class In extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=CD,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?pD(i,n):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new In(s,a,n)}}function pD(r,e){try{let t=0,n="";for(;t<r.length;){const s=r.indexOf("{$",t);if(s===-1){n+=r.substring(t);break}const i=r.indexOf("}",s+2);if(i===-1){n+=r.substring(t);break}const o=r.substring(s+2,i),a=e[o];n+=r.substring(t,s)+(a!=null?String(a):`<${o}?>`),t=i+1}return n}catch{return r}}function gD(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Xt(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(cf(i)&&cf(o)){if(!Xt(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function cf(r){return r!==null&&typeof r=="object"}/**
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
 */function ea(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function fo(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Co(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function mD(r,e){const t=new _D(r,e);return t.subscribe.bind(t)}class _D{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");ED(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=tl),s.error===void 0&&(s.error=tl),s.complete===void 0&&(s.complete=tl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ED(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function tl(){}/**
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
 */const ID=1e3,DD=2,yD=4*60*60*1e3,wD=.5;function cO(r,e=ID,t=DD){const n=e*Math.pow(t,r),s=Math.round(wD*n*(Math.random()-.5)*2);return Math.min(yD,n+s)}/**
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
 */function Ie(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Rr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $u(r){return(await fetch(r,{credentials:"include"})).ok}class Cr{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qr="[DEFAULT]";/**
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
 */class TD{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Qp;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RD(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);n===a&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:AD(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AD(r){return r===qr?void 0:r}function RD(r){return r.instantiationMode==="EAGER"}/**
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
 */class vD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new TD(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(fe||(fe={}));const bD={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},PD=fe.INFO,SD={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},ND=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=SD[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fB{constructor(e){this.name=e,this._logLevel=PD,this._logHandler=ND,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const OD=(r,e)=>e.some(t=>r instanceof t);let lf,Bf;function FD(){return lf||(lf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LD(){return Bf||(Bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eg=new WeakMap,Al=new WeakMap,tg=new WeakMap,nl=new WeakMap,CB=new WeakMap;function xD(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(lr(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&eg.set(t,r)}).catch(()=>{}),CB.set(e,r),e}function VD(r){if(Al.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Al.set(r,e)}let Rl={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Al.get(r);if(e==="objectStoreNames")return r.objectStoreNames||tg.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return lr(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function kD(r){Rl=r(Rl)}function MD(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(rl(this),e,...t);return tg.set(n,e.sort?e.sort():[e]),lr(n)}:LD().includes(r)?function(...e){return r.apply(rl(this),e),lr(eg.get(this))}:function(...e){return lr(r.apply(rl(this),e))}}function GD(r){return typeof r=="function"?MD(r):(r instanceof IDBTransaction&&VD(r),OD(r,FD())?new Proxy(r,Rl):r)}function lr(r){if(r instanceof IDBRequest)return xD(r);if(nl.has(r))return nl.get(r);const e=GD(r);return e!==r&&(nl.set(r,e),CB.set(e,r)),e}const rl=r=>CB.get(r);function UD(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),a=lr(o);return n&&o.addEventListener("upgradeneeded",u=>{n(lr(o.result),u.oldVersion,u.newVersion,lr(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const HD=["get","getKey","getAll","getAllKeys","count"],qD=["put","add","delete","clear"],sl=new Map;function hf(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(sl.get(e))return sl.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=qD.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||HD.includes(t)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let l=u.store;return n&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&u.done]))[0]};return sl.set(e,i),i}kD(r=>({...r,get:(e,t,n)=>hf(e,t)||r.get(e,t,n),has:(e,t)=>!!hf(e,t)||r.has(e,t)}));/**
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
 */class jD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(JD(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function JD(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vl="@firebase/app",df="0.16.2";/**
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
 */const Sn=new fB("@firebase/app"),KD="@firebase/app-compat",zD="@firebase/analytics-compat",QD="@firebase/analytics",WD="@firebase/app-check-compat",$D="@firebase/app-check",YD="@firebase/auth",XD="@firebase/auth-compat",ZD="@firebase/database",ey="@firebase/data-connect",ty="@firebase/database-compat",ny="@firebase/functions",ry="@firebase/functions-compat",sy="@firebase/installations",iy="@firebase/installations-compat",oy="@firebase/messaging",ay="@firebase/messaging-compat",uy="@firebase/performance",cy="@firebase/performance-compat",ly="@firebase/remote-config",By="@firebase/remote-config-compat",hy="@firebase/storage",dy="@firebase/storage-compat",fy="@firebase/firestore",Cy="@firebase/ai",py="@firebase/firestore-compat",gy="firebase",my="12.19.0";/**
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
 */const Eu="[DEFAULT]",_y={[vl]:"fire-core",[KD]:"fire-core-compat",[QD]:"fire-analytics",[zD]:"fire-analytics-compat",[$D]:"fire-app-check",[WD]:"fire-app-check-compat",[YD]:"fire-auth",[XD]:"fire-auth-compat",[ZD]:"fire-rtdb",[ey]:"fire-data-connect",[ty]:"fire-rtdb-compat",[ny]:"fire-fn",[ry]:"fire-fn-compat",[sy]:"fire-iid",[iy]:"fire-iid-compat",[oy]:"fire-fcm",[ay]:"fire-fcm-compat",[uy]:"fire-perf",[cy]:"fire-perf-compat",[ly]:"fire-rc",[By]:"fire-rc-compat",[hy]:"fire-gcs",[dy]:"fire-gcs-compat",[fy]:"fire-fst",[py]:"fire-fst-compat",[Cy]:"fire-vertex","fire-js":"fire-js",[gy]:"fire-js-all"};/**
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
 */const Iu=new Map,Ey=new Map,bl=new Map;function ff(r,e){try{r.container.addComponent(e)}catch(t){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function cs(r){const e=r.name;if(bl.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;bl.set(e,r);for(const t of Iu.values())ff(t,r);for(const t of Ey.values())ff(t,r);return!0}function Ti(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Iy(r,e,t=Eu){Ti(r,e).clearInstance(t)}function kt(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Dy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wn=new Zo("app","Firebase",Dy);/**
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
 */class yy{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
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
 */const ys=my;function wy(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Eu,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw wn.create("bad-app-name",{appName:String(s)});if(t||(t=Kp()),!t)throw wn.create("no-options");const i=Iu.get(s);if(i)if(Xt(t,i.options)){if(Xt(n,i.config))return i;throw wn.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw wn.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new vD(s);for(const u of bl.values())o.addComponent(u);const a=new yy(t,n,o);return Iu.set(s,a),a}function pB(r=Eu){const e=Iu.get(r);if(!e&&r===Eu&&Kp())return wy();if(!e)throw wn.create("no-app",{appName:r});return e}function hn(r,e,t){let n=_y[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(o.join(" "));return}cs(new Cr(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const Ty="firebase-heartbeat-database",Ay=1,Lo="firebase-heartbeat-store";let il=null;function ng(){return il||(il=UD(Ty,Ay,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Lo)}catch(t){console.warn(t)}}}}).catch(r=>{throw wn.create("idb-open",{originalErrorMessage:r.message})})),il}async function Ry(r){try{const t=(await ng()).transaction(Lo),n=await t.objectStore(Lo).get(rg(r));return await t.done,n}catch(e){if(e instanceof In)Sn.warn(e.message);else{const t=wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(t.message)}}}async function Cf(r,e){try{const n=(await ng()).transaction(Lo,"readwrite");await n.objectStore(Lo).put(e,rg(r)),await n.done}catch(t){if(t instanceof In)Sn.warn(t.message);else{const n=wn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Sn.warn(n.message)}}}function rg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const vy=1024,by=30;class Py{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ny(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>by){const o=Oy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Sn.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=pf(),{heartbeatsToSend:n,unsentEntries:s}=Sy(this._heartbeatsCache.heartbeats),i=_u(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Sn.warn(t),""}}}function pf(){return new Date().toISOString().substring(0,10)}function Sy(r,e=vy){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gf(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),gf(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Ny{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zp()?fD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ry(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Cf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Cf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function gf(r){return _u(JSON.stringify({version:2,heartbeats:r})).length}function Oy(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function Fy(r){cs(new Cr("platform-logger",e=>new jD(e),"PRIVATE")),cs(new Cr("heartbeat",e=>new Py(e),"PRIVATE")),hn(vl,df,r),hn(vl,df,"esm2020"),hn("fire-js","")}/**
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
 */Fy("");var Ly="firebase",xy="12.19.0";/**
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
 */hn(Ly,xy,"app");function sg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vy=sg,ig=new Zo("auth","Firebase",sg());/**
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
 */const Du=new fB("@firebase/auth");function ru(r,...e){Du.logLevel<=fe.WARN&&Du.warn(`Auth (${ys}): ${r}`,...e)}function su(r,...e){Du.logLevel<=fe.ERROR&&Du.error(`Auth (${ys}): ${r}`,...e)}/**
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
 */function Zt(r,...e){throw mB(r,...e)}function dn(r,...e){return mB(r,...e)}function gB(r,e,t){const n={...Vy(),[e]:t};return new Zo("auth","Firebase",n).create(e,{appName:r.name})}function vn(r){return gB(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mB(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return ig.create(r,...e)}function oe(r,e,...t){if(!r)throw mB(e,...t)}function Tn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw su(e),new Error(e)}function Nn(r,e){r||Tn(e)}/**
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
 */function Pl(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function ky(){return mf()==="http:"||mf()==="https:"}function mf(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function My(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ky()||BD()||"connection"in navigator)?navigator.onLine:!0}function Gy(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ta{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nn(t>e,"Short delay should be less than long delay!"),this.isMobile=cD()||hD()}get(){return My()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _B(r,e){Nn(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class og{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Uy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Hy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qy=new ta(3e4,6e4);function vr(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function br(r,e,t,n,s={}){return ag(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const a=ea({...o,key:r.config.apiKey}).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const l={method:e,headers:u,...i};return lD()||(l.referrerPolicy="strict-origin-when-cross-origin"),r.emulatorConfig&&Rr(r.emulatorConfig.host)&&(l.credentials="include"),og.fetch()(await ug(r,r.config.apiHost,t,a),l)})}async function ag(r,e,t){r._canInitEmulator=!1;const n={...Uy,...e};try{const s=new Jy(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ka(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ka(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ka(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw ka(r,"user-disabled",o);const B=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw gB(r,B,l);Zt(r,B)}}catch(s){if(s instanceof In)throw s;Zt(r,"network-request-failed",{message:String(s)})}}async function na(r,e,t,n,s={}){const i=await br(r,e,t,n,s);return"mfaPendingCredential"in i&&Zt(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function ug(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?_B(r.config,s):`${r.config.apiScheme}://${s}`;return Hy.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function jy(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(dn(this.auth,"network-request-failed")),qy.get())})}}function ka(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=dn(r,e,n);return s.customData._tokenResponse=t,s}function _f(r){return r!==void 0&&r.enterprise!==void 0}class Ky{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function zy(r,e){return br(r,"GET","/v2/recaptchaConfig",vr(r,e))}/**
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
 */async function Qy(r,e){return br(r,"POST","/v1/accounts:delete",e)}async function yu(r,e){return br(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Eo(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wy(r,e=!1){const t=Ie(r),n=await t.getIdToken(e),s=EB(n);oe(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Eo(ol(s.auth_time)),issuedAtTime:Eo(ol(s.iat)),expirationTime:Eo(ol(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ol(r){return Number(r)*1e3}function EB(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return su("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hp(t);return s?JSON.parse(s):(su("Failed to decode base64 JWT payload"),null)}catch(s){return su("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ef(r){const e=EB(r);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xo(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof In&&$y(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function $y({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Yy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wu(r){var d;const e=r.auth,t=await r.getIdToken(),n=await xo(r,yu(e,{idToken:t}));oe(n==null?void 0:n.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?cg(s.providerUserInfo):[],o=Zy(r.providerData,i),a=r.isAnonymous,u=!(r.email&&s.passwordHash)&&!(o!=null&&o.length),l=a?u:!1,B={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Sl(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(r,B)}async function Xy(r){const e=Ie(r);await wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zy(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function cg(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function ew(r,e){const t=await ag(r,{},async()=>{const n=ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await ug(r,s,"/v1/token",`key=${i}`),a=await r._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:a,body:n};return r.emulatorConfig&&Rr(r.emulatorConfig.host)&&(u.credentials="include"),og.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function tw(r,e){return br(r,"POST","/v2/accounts:revokeToken",vr(r,e))}/**
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
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ef(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const t=Ef(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await ew(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Ys;return n&&(oe(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function zn(r,e){oe(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Wt{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new Yy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await xo(this,this.stsTokenManager.getToken(this.auth,e));return oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Wy(this,e)}reload(){return Xy(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await wu(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await xo(this,Qy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,u=t._redirectEventId??void 0,l=t.createdAt??void 0,B=t.lastLoginAt??void 0,{uid:d,emailVerified:C,isAnonymous:g,providerData:m,stsTokenManager:w}=t;oe(d&&w,e,"internal-error");const S=Ys.fromJSON(this.name,w);oe(typeof d=="string",e,"internal-error"),zn(n,e.name),zn(s,e.name),oe(typeof C=="boolean",e,"internal-error"),oe(typeof g=="boolean",e,"internal-error"),zn(i,e.name),zn(o,e.name),zn(a,e.name),zn(u,e.name),zn(l,e.name),zn(B,e.name);const G=new Wt({uid:d,auth:e,email:s,emailVerified:C,displayName:n,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:S,createdAt:l,lastLoginAt:B});return m&&Array.isArray(m)&&(G.providerData=m.map(j=>({...j}))),u&&(G._redirectEventId=u),G}static async _fromIdTokenResponse(e,t,n=!1){const s=new Ys;s.updateFromServerResponse(t);const i=new Wt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await wu(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?cg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ys;a.updateFromIdToken(n);const u=new Wt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Sl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,l),u}}/**
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
 */const If=new Map;function An(r){Nn(r instanceof Function,"Expected a class definition");let e=If.get(r);return e?(Nn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,If.set(r,e),e)}/**
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
 */class lg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lg.type="NONE";const Df=lg;/**
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
 */function iu(r,e,t){return`firebase:${r}:${e}:${t}`}class rs{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=iu(this.userKey,s.apiKey,i),this.fullPersistenceKey=iu("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await yu(this.auth,{idToken:e}).catch(()=>{});return t?Wt._fromGetAccountInfoResponse(this.auth,t,e):null}return Wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new rs(An(Df),e,n);const s=(await Promise.all(t.map(async l=>{try{if(await l._isAvailable())return l}catch{return}}))).filter(l=>l);let i=s[0]||An(Df);const o=iu(n,e.config.apiKey,e.name);let a=null;for(const l of t)try{const B=await l._get(o);if(B){let d;if(typeof B=="string"){const C=await yu(e,{idToken:B}).catch(()=>{});if(!C)break;d=await Wt._fromGetAccountInfoResponse(e,C,B)}else d=Wt._fromJSON(e,B);l!==i&&(a=d),i=l;break}}catch{}const u=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new rs(i,e,n):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new rs(i,e,n))}}/**
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
 */function yf(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pg(e))return"Blackberry";if(gg(e))return"Webos";if(hg(e))return"Safari";if((e.includes("chrome/")||dg(e))&&!e.includes("edge/"))return"Chrome";if(Cg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Bg(r=et()){return/firefox\//i.test(r)}function hg(r=et()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dg(r=et()){return/crios\//i.test(r)}function fg(r=et()){return/iemobile/i.test(r)}function Cg(r=et()){return/android/i.test(r)}function pg(r=et()){return/blackberry/i.test(r)}function gg(r=et()){return/webos/i.test(r)}function IB(r=et()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function nw(r=et()){var e;return IB(r)&&!!((e=window.navigator)!=null&&e.standalone)}function rw(){return dD()&&document.documentMode===10}function mg(r=et()){return IB(r)||Cg(r)||gg(r)||pg(r)||/windows phone/i.test(r)||fg(r)}/**
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
 */function _g(r,e=[]){let t;switch(r){case"Browser":t=yf(et());break;case"Worker":t=`${yf(et())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ys}/${n}`}/**
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
 */class sw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function iw(r,e={}){return br(r,"GET","/v2/passwordPolicy",vr(r,e))}/**
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
 */const ow=6;class aw{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ow,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class uw{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wf(this),this.idTokenSubscription=new wf(this),this.beforeStateQueue=new sw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ig,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=An(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted){try{this.persistenceManager=await rs.create(this,e)}catch(o){ru(`Failed to initialize persistence: ${o}`),this.persistenceManager=await rs.create(this,[])}finally{(n=this._resolvePersistenceManagerAvailable)==null||n.call(this)}if(!this._deleted){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(o){ru(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yu(this,{idToken:e}),n=await Wt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=n==null?void 0:n._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(n=u.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kt(this.app))return Promise.reject(vn(this));const t=e?Ie(e):null;return t&&oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iw(this),t=new aw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await tw(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&An(e)||this._popupRedirectResolver;oe(t,this,"argument-error"),this.redirectPersistenceManager=await rs.create(this,[An(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}).catch(u=>{if(!o)if(typeof t!="function"&&t.error)t.error(u);else if(n)n(u);else throw u}),typeof t=="function"){const u=e.addObserver(t,n,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const n=(t==null?void 0:t.message)||String(t),s=gB(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw s.customData={originalError:t},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_g(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&ru(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ws(r){return Ie(r)}class wf{constructor(e){this.auth=e,this.observer=null,this.addObserver=mD(t=>this.observer=t)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cw(r){Yu=r}function Eg(r){return Yu.loadJS(r)}function lw(){return Yu.recaptchaEnterpriseScript}function Bw(){return Yu.gapiScript}function hw(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class dw{constructor(){this.enterprise=new fw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class fw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
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
 */const Cw="recaptcha-enterprise",Ig="NO_RECAPTCHA",Tf="onFirebaseAuthREInstanceReady";class Zn{constructor(e){this.type=Cw,this.auth=ws(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{zy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ky(u);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(u=>{a(u)})})}function s(i,o,a){const u=window.grecaptcha;_f(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Ig)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dw().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(async a=>{if(!t&&_f(window.grecaptcha)&&Zn.scriptInjectionDeferred)await Zn.scriptInjectionDeferred.promise,s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=lw();u.length!==0&&(u+=a+`&onload=${Tf}`),Zn.scriptInjectionDeferred=new Qp,window[Tf]=()=>{var l;(l=Zn.scriptInjectionDeferred)==null||l.resolve()},Eg(u).then(()=>{var l;return(l=Zn.scriptInjectionDeferred)==null?void 0:l.promise}).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}Zn.scriptInjectionDeferred=null;async function Af(r,e,t,n=!1,s=!1){const i=new Zn(r);let o;if(s)o=Ig;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return n?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Nl(r,e,t,n,s){var i;if((i=r._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Af(r,e,t,t==="getOobCode");return n(r,o)}else return n(r,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Af(r,e,t,t==="getOobCode");return n(r,a)}else return Promise.reject(o)})}/**
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
 */function pw(r,e){const t=Ti(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Xt(i,e??{}))return s;Zt(s,"already-initialized")}return t.initialize({options:e})}function gw(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(An);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function mw(r,e,t){const n=ws(r);oe(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Dg(e),{host:o,port:a}=_w(e),u=a===null?"":`:${a}`,l={url:`${i}//${o}${u}/`},B=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){oe(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),oe(Xt(l,n.config.emulator)&&Xt(B,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=l,n.emulatorConfig=B,n.settings.appVerificationDisabledForTesting=!0,Rr(o)?$u(`${i}//${o}${u}`):Ew()}function Dg(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function _w(r){const e=Dg(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Rf(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Rf(o)}}}function Rf(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Ew(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class DB{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,t){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function Iw(r,e){return br(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Dw(r,e){return na(r,"POST","/v1/accounts:signInWithPassword",vr(r,e))}/**
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
 */async function yw(r,e){return na(r,"POST","/v1/accounts:signInWithEmailLink",vr(r,e))}async function ww(r,e){return na(r,"POST","/v1/accounts:signInWithEmailLink",vr(r,e))}/**
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
 */class Vo extends DB{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Vo(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Vo(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nl(e,t,"signInWithPassword",Dw);case"emailLink":return yw(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nl(e,n,"signUpPassword",Iw);case"emailLink":return ww(e,{idToken:t,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xs(r,e){return na(r,"POST","/v1/accounts:signInWithIdp",vr(r,e))}/**
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
 */const Tw="http://localhost";class ls extends DB{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new ls(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Xs(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xs(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xs(e,t)}buildRequest(){const e={requestUri:Tw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ea(t)}return e}}/**
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
 */function Aw(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rw(r){const e=fo(Co(r)).link,t=e?fo(Co(e)).deep_link_id:null,n=fo(Co(r)).deep_link_id;return(n?fo(Co(n)).link:null)||n||t||e||r}class yB{constructor(e){const t=fo(Co(e)),n=t.apiKey??null,s=t.oobCode??null,i=Aw(t.mode??null);oe(n&&s&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Rw(e);try{return new yB(t)}catch{return null}}}/**
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
 */class Ai{constructor(){this.providerId=Ai.PROVIDER_ID}static credential(e,t){return Vo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=yB.parseLink(t);return oe(n,"argument-error"),Vo._fromEmailAndCode(e,n.code,n.tenantId)}}Ai.PROVIDER_ID="password";Ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ra extends yg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class er extends ra{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
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
 */class tr extends ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ls._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tr.credential(t,n)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
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
 */class nr extends ra{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
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
 */class rr extends ra{constructor(){super("twitter.com")}static credential(e,t){return ls._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rr.credential(t,n)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */async function vw(r,e){return na(r,"POST","/v1/accounts:signUp",vr(r,e))}/**
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
 */class Bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await Wt._fromIdTokenResponse(e,n,s),o=vf(n);return new Bs({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=vf(n);return new Bs({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function vf(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Tu extends In{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Tu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Tu(e,t,n,s)}}function wg(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Tu._fromErrorAndOperation(r,i,e,n):i})}async function bw(r,e,t=!1){const n=await xo(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Bs._forOperation(r,"link",n)}/**
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
 */async function Pw(r,e,t=!1){const{auth:n}=r;if(kt(n.app))return Promise.reject(vn(n));const s="reauthenticate";try{const i=await xo(r,wg(n,s,e,r),t);oe(i.idToken,n,"internal-error");const o=EB(i.idToken);oe(o,n,"internal-error");const{sub:a}=o;return oe(r.uid===a,n,"user-mismatch"),Bs._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Zt(n,"user-mismatch"),i}}/**
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
 */async function Tg(r,e,t=!1){if(kt(r.app))return Promise.reject(vn(r));const n="signIn",s=await wg(r,n,e),i=await Bs._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function Sw(r,e){return Tg(ws(r),e)}/**
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
 */async function Ag(r){const e=ws(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lO(r,e,t){if(kt(r.app))return Promise.reject(vn(r));const n=ws(r),o=await Nl(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vw).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Ag(r),u}),a=await Bs._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(a.user),a}function BO(r,e,t){return kt(r.app)?Promise.reject(vn(r)):Sw(Ie(r),Ai.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Ag(r),n})}function Nw(r,e,t,n){return Ie(r).onIdTokenChanged(e,t,n)}function Ow(r,e,t){return Ie(r).beforeAuthStateChanged(e,t)}function hO(r,e,t,n){return Ie(r).onAuthStateChanged(e,t,n)}const Au="__sak";/**
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
 */class Rg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Au,"1"),this.storage.removeItem(Au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Fw=1e3,Lw=10;class vg extends Rg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);rw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Lw):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Fw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vg.type="LOCAL";const xw=vg;/**
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
 */class bg extends Rg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bg.type="SESSION";const Pg=bg;/**
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
 */function Vw(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Xu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Xu(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,i)),u=await Vw(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xu.receivers=[];/**
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
 */function wB(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class kw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const l=wB("",20);s.port1.start();const B=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(d){const C=d;if(C.data.eventId===l)switch(C.data.status){case"ack":clearTimeout(B),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(C.data.response);break;default:clearTimeout(B),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fn(){return window}function Mw(r){fn().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Sg(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function Gw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Uw(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function Hw(){return Sg()?self:null}/**
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
 */const Ng="firebaseLocalStorageDb",qw=1,Ru="firebaseLocalStorage",Og="fbase_key";class sa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zu(r,e){return r.transaction([Ru],e?"readwrite":"readonly").objectStore(Ru)}function jw(){const r=indexedDB.deleteDatabase(Ng);return new sa(r).toPromise()}function Fg(){const r=indexedDB.open(Ng,qw);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Ru,{keyPath:Og})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Ru)?e(n):(n.close(),await jw(),e(await Fg()))})})}async function bf(r,e,t){const n=Zu(r,!0).put({[Og]:e,value:t});return new sa(n).toPromise()}async function Jw(r,e){const t=Zu(r,!1).get(e),n=await new sa(t).toPromise();return n===void 0?null:n.value}function Pf(r,e){const t=Zu(r,!0).delete(e);return new sa(t).toPromise()}const Kw=800,zw=3;class Lg{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Fg(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>zw)throw n;if(this.dbPromise){const s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Sg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xu._getInstance(Hw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Gw(),!this.activeServiceWorker)return;this.sender=new kw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Uw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await bf(e,Au,"1"),await Pf(e,Au)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>bf(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Jw(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Pf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=Zu(s,!1).getAll();return new sa(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||ru(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Lg.type="LOCAL";const Qw=Lg;new ta(3e4,6e4);/**
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
 */function Ww(r,e){return e?An(e):(oe(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class TB extends DB{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $w(r){return Tg(r.auth,new TB(r),r.bypassAuthState)}function Yw(r){const{auth:e,user:t}=r;return oe(t,e,"internal-error"),Pw(t,new TB(r),r.bypassAuthState)}async function Xw(r){const{auth:e,user:t}=r;return oe(t,e,"internal-error"),bw(t,new TB(r),r.bypassAuthState)}/**
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
 */class xg{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $w;case"linkViaPopup":case"linkViaRedirect":return Xw;case"reauthViaPopup":case"reauthViaRedirect":return Yw;default:Zt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zw=new ta(2e3,1e4);class $s extends xg{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,$s.currentPopupAction&&$s.currentPopupAction.cancel(),$s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=wB();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zw.get())};e()}}$s.currentPopupAction=null;/**
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
 */const eT="pendingRedirect",ou=new Map;class tT extends xg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ou.get(this.auth._key());if(!e){try{const n=await nT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ou.set(this.auth._key(),e)}return this.bypassAuthState||ou.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nT(r,e){const t=iT(e),n=sT(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function rT(r,e){ou.set(r._key(),e)}function sT(r){return An(r._redirectPersistence)}function iT(r){return iu(eT,r.config.apiKey,r.name)}async function oT(r,e,t=!1){if(kt(r.app))return Promise.reject(vn(r));const n=ws(r),s=Ww(n,e),o=await new tT(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const aT=10*60*1e3;class uT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Vg(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(dn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sf(e))}saveEventToCache(e){this.cachedEventUids.add(Sf(e)),this.lastProcessedEventTime=Date.now()}}function Sf(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Vg({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cT(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vg(r);default:return!1}}/**
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
 */async function lT(r,e={}){return br(r,"GET","/v1/projects",e)}/**
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
 */const BT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hT=/^https?/;async function dT(r){if(r.config.emulator)return;const{authorizedDomains:e}=await lT(r);for(const t of e)try{if(fT(t))return}catch{}Zt(r,"unauthorized-domain")}function fT(r){const e=Pl(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!hT.test(t))return!1;if(BT.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const CT=new ta(3e4,6e4);function Nf(){const r=fn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function pT(r){return new Promise((e,t)=>{var s,i,o;function n(){Nf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nf(),t(dn(r,"network-request-failed"))},timeout:CT.get()})}if((i=(s=fn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=fn().gapi)!=null&&o.load)n();else{const a=hw("iframefcb");return fn()[a]=()=>{gapi.load?n():t(dn(r,"network-request-failed"))},Eg(`${Bw()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw au=null,e})}let au=null;function gT(r){return au=au||pT(r),au}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const mT=new ta(5e3,15e3),_T="__/auth/iframe",ET="emulator/auth/iframe",IT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yT(r){const e=r.config;oe(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?_B(e,ET):`https://${r.config.authDomain}/${_T}`,n={apiKey:e.apiKey,appName:r.name,v:ys},s=DT.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${ea(n).slice(1)}`}async function wT(r){const e=await gT(r),t=fn().gapi;return oe(t,r,"internal-error"),e.open({where:document.body,url:yT(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IT,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=dn(r,"network-request-failed"),a=fn().setTimeout(()=>{i(o)},mT.get());function u(){fn().clearTimeout(a),s(n)}n.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const TT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AT=500,RT=600,vT="_blank",bT="http://localhost";class Of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PT(r,e,t,n=AT,s=RT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const u={...TT,width:n.toString(),height:s.toString(),top:i,left:o},l=et().toLowerCase();t&&(a=dg(l)?vT:t),Bg(l)&&(e=e||bT,u.scrollbars="yes");const B=Object.entries(u).reduce((C,[g,m])=>`${C}${g}=${m},`,"");if(nw(l)&&a!=="_self")return ST(e||"",a),new Of(null);const d=window.open(e||"",a,B);oe(d,r,"popup-blocked");try{d.focus()}catch{}return new Of(d)}function ST(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const NT="__/auth/handler",OT="emulator/auth/handler",FT=encodeURIComponent("fac");async function Ff(r,e,t,n,s,i){oe(r.config.authDomain,r,"auth-domain-config-required"),oe(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:ys,eventId:s};if(e instanceof yg){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",gD(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[B,d]of Object.entries({}))o[B]=d}if(e instanceof ra){const B=e.getScopes().filter(d=>d!=="");B.length>0&&(o.scopes=B.join(","))}r.tenantId&&(o.tid=r.tenantId);const a=o;for(const B of Object.keys(a))a[B]===void 0&&delete a[B];const u=await r._getAppCheckToken(),l=u?`#${FT}=${encodeURIComponent(u)}`:"";return`${LT(r)}?${ea(a).slice(1)}${l}`}function LT({config:r}){return r.emulator?_B(r,OT):`https://${r.authDomain}/${NT}`}/**
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
 */const al="webStorageSupport";class xT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pg,this._completeRedirectFn=oT,this._overrideRedirectResult=rT}async _openPopup(e,t,n,s){var o;Nn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Ff(e,t,n,Pl(),s);return PT(e,i,wB())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Ff(e,t,n,Pl(),s);return Mw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Nn(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await wT(e),n=new uT(e);return t.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(al,{type:al},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[al];i!==void 0&&t(!!i),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mg()||hg()||IB()}}const VT=xT;var Lf="@firebase/auth",xf="1.13.6";/**
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
 */class kT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function MT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GT(r){cs(new Cr("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:a,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_g(r)},l=new uw(n,s,i,u);return gw(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),cs(new Cr("auth-internal",e=>{const t=ws(e.getProvider("auth").getImmediate());return(n=>new kT(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Lf,xf,MT(r)),hn(Lf,xf,"esm2020")}/**
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
 */const UT=5*60,HT=zp("authIdTokenMaxAge")||UT;let Vf=null;const qT=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>HT)return;const s=t==null?void 0:t.token;Vf!==s&&(Vf=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dO(r=pB()){const e=Ti(r,"auth");if(e.isInitialized())return e.getImmediate();const t=pw(r,{popupRedirectResolver:VT,persistence:[Qw,xw,Pg]}),n=zp("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=qT(i.toString());Ow(t,o,()=>o(t.currentUser)),Nw(t,a=>o(a))}}const s=jp("auth");return s&&mw(t,`http://${s}`),t}function jT(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}cw({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=dn("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",jT().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GT("Browser");var kf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,kg;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,I){function y(){}y.prototype=I.prototype,A.F=I.prototype,A.prototype=new y,A.prototype.constructor=A,A.D=function(b,v,F){for(var D=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)D[wt-2]=arguments[wt];return I.prototype[v].apply(b,D)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,I,y){y||(y=0);const b=Array(16);if(typeof I=="string")for(var v=0;v<16;++v)b[v]=I.charCodeAt(y++)|I.charCodeAt(y++)<<8|I.charCodeAt(y++)<<16|I.charCodeAt(y++)<<24;else for(v=0;v<16;++v)b[v]=I[y++]|I[y++]<<8|I[y++]<<16|I[y++]<<24;I=A.g[0],y=A.g[1],v=A.g[2];let F=A.g[3],D;D=I+(F^y&(v^F))+b[0]+3614090360&4294967295,I=y+(D<<7&4294967295|D>>>25),D=F+(v^I&(y^v))+b[1]+3905402710&4294967295,F=I+(D<<12&4294967295|D>>>20),D=v+(y^F&(I^y))+b[2]+606105819&4294967295,v=F+(D<<17&4294967295|D>>>15),D=y+(I^v&(F^I))+b[3]+3250441966&4294967295,y=v+(D<<22&4294967295|D>>>10),D=I+(F^y&(v^F))+b[4]+4118548399&4294967295,I=y+(D<<7&4294967295|D>>>25),D=F+(v^I&(y^v))+b[5]+1200080426&4294967295,F=I+(D<<12&4294967295|D>>>20),D=v+(y^F&(I^y))+b[6]+2821735955&4294967295,v=F+(D<<17&4294967295|D>>>15),D=y+(I^v&(F^I))+b[7]+4249261313&4294967295,y=v+(D<<22&4294967295|D>>>10),D=I+(F^y&(v^F))+b[8]+1770035416&4294967295,I=y+(D<<7&4294967295|D>>>25),D=F+(v^I&(y^v))+b[9]+2336552879&4294967295,F=I+(D<<12&4294967295|D>>>20),D=v+(y^F&(I^y))+b[10]+4294925233&4294967295,v=F+(D<<17&4294967295|D>>>15),D=y+(I^v&(F^I))+b[11]+2304563134&4294967295,y=v+(D<<22&4294967295|D>>>10),D=I+(F^y&(v^F))+b[12]+1804603682&4294967295,I=y+(D<<7&4294967295|D>>>25),D=F+(v^I&(y^v))+b[13]+4254626195&4294967295,F=I+(D<<12&4294967295|D>>>20),D=v+(y^F&(I^y))+b[14]+2792965006&4294967295,v=F+(D<<17&4294967295|D>>>15),D=y+(I^v&(F^I))+b[15]+1236535329&4294967295,y=v+(D<<22&4294967295|D>>>10),D=I+(v^F&(y^v))+b[1]+4129170786&4294967295,I=y+(D<<5&4294967295|D>>>27),D=F+(y^v&(I^y))+b[6]+3225465664&4294967295,F=I+(D<<9&4294967295|D>>>23),D=v+(I^y&(F^I))+b[11]+643717713&4294967295,v=F+(D<<14&4294967295|D>>>18),D=y+(F^I&(v^F))+b[0]+3921069994&4294967295,y=v+(D<<20&4294967295|D>>>12),D=I+(v^F&(y^v))+b[5]+3593408605&4294967295,I=y+(D<<5&4294967295|D>>>27),D=F+(y^v&(I^y))+b[10]+38016083&4294967295,F=I+(D<<9&4294967295|D>>>23),D=v+(I^y&(F^I))+b[15]+3634488961&4294967295,v=F+(D<<14&4294967295|D>>>18),D=y+(F^I&(v^F))+b[4]+3889429448&4294967295,y=v+(D<<20&4294967295|D>>>12),D=I+(v^F&(y^v))+b[9]+568446438&4294967295,I=y+(D<<5&4294967295|D>>>27),D=F+(y^v&(I^y))+b[14]+3275163606&4294967295,F=I+(D<<9&4294967295|D>>>23),D=v+(I^y&(F^I))+b[3]+4107603335&4294967295,v=F+(D<<14&4294967295|D>>>18),D=y+(F^I&(v^F))+b[8]+1163531501&4294967295,y=v+(D<<20&4294967295|D>>>12),D=I+(v^F&(y^v))+b[13]+2850285829&4294967295,I=y+(D<<5&4294967295|D>>>27),D=F+(y^v&(I^y))+b[2]+4243563512&4294967295,F=I+(D<<9&4294967295|D>>>23),D=v+(I^y&(F^I))+b[7]+1735328473&4294967295,v=F+(D<<14&4294967295|D>>>18),D=y+(F^I&(v^F))+b[12]+2368359562&4294967295,y=v+(D<<20&4294967295|D>>>12),D=I+(y^v^F)+b[5]+4294588738&4294967295,I=y+(D<<4&4294967295|D>>>28),D=F+(I^y^v)+b[8]+2272392833&4294967295,F=I+(D<<11&4294967295|D>>>21),D=v+(F^I^y)+b[11]+1839030562&4294967295,v=F+(D<<16&4294967295|D>>>16),D=y+(v^F^I)+b[14]+4259657740&4294967295,y=v+(D<<23&4294967295|D>>>9),D=I+(y^v^F)+b[1]+2763975236&4294967295,I=y+(D<<4&4294967295|D>>>28),D=F+(I^y^v)+b[4]+1272893353&4294967295,F=I+(D<<11&4294967295|D>>>21),D=v+(F^I^y)+b[7]+4139469664&4294967295,v=F+(D<<16&4294967295|D>>>16),D=y+(v^F^I)+b[10]+3200236656&4294967295,y=v+(D<<23&4294967295|D>>>9),D=I+(y^v^F)+b[13]+681279174&4294967295,I=y+(D<<4&4294967295|D>>>28),D=F+(I^y^v)+b[0]+3936430074&4294967295,F=I+(D<<11&4294967295|D>>>21),D=v+(F^I^y)+b[3]+3572445317&4294967295,v=F+(D<<16&4294967295|D>>>16),D=y+(v^F^I)+b[6]+76029189&4294967295,y=v+(D<<23&4294967295|D>>>9),D=I+(y^v^F)+b[9]+3654602809&4294967295,I=y+(D<<4&4294967295|D>>>28),D=F+(I^y^v)+b[12]+3873151461&4294967295,F=I+(D<<11&4294967295|D>>>21),D=v+(F^I^y)+b[15]+530742520&4294967295,v=F+(D<<16&4294967295|D>>>16),D=y+(v^F^I)+b[2]+3299628645&4294967295,y=v+(D<<23&4294967295|D>>>9),D=I+(v^(y|~F))+b[0]+4096336452&4294967295,I=y+(D<<6&4294967295|D>>>26),D=F+(y^(I|~v))+b[7]+1126891415&4294967295,F=I+(D<<10&4294967295|D>>>22),D=v+(I^(F|~y))+b[14]+2878612391&4294967295,v=F+(D<<15&4294967295|D>>>17),D=y+(F^(v|~I))+b[5]+4237533241&4294967295,y=v+(D<<21&4294967295|D>>>11),D=I+(v^(y|~F))+b[12]+1700485571&4294967295,I=y+(D<<6&4294967295|D>>>26),D=F+(y^(I|~v))+b[3]+2399980690&4294967295,F=I+(D<<10&4294967295|D>>>22),D=v+(I^(F|~y))+b[10]+4293915773&4294967295,v=F+(D<<15&4294967295|D>>>17),D=y+(F^(v|~I))+b[1]+2240044497&4294967295,y=v+(D<<21&4294967295|D>>>11),D=I+(v^(y|~F))+b[8]+1873313359&4294967295,I=y+(D<<6&4294967295|D>>>26),D=F+(y^(I|~v))+b[15]+4264355552&4294967295,F=I+(D<<10&4294967295|D>>>22),D=v+(I^(F|~y))+b[6]+2734768916&4294967295,v=F+(D<<15&4294967295|D>>>17),D=y+(F^(v|~I))+b[13]+1309151649&4294967295,y=v+(D<<21&4294967295|D>>>11),D=I+(v^(y|~F))+b[4]+4149444226&4294967295,I=y+(D<<6&4294967295|D>>>26),D=F+(y^(I|~v))+b[11]+3174756917&4294967295,F=I+(D<<10&4294967295|D>>>22),D=v+(I^(F|~y))+b[2]+718787259&4294967295,v=F+(D<<15&4294967295|D>>>17),D=y+(F^(v|~I))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+I&4294967295,A.g[1]=A.g[1]+(v+(D<<21&4294967295|D>>>11))&4294967295,A.g[2]=A.g[2]+v&4294967295,A.g[3]=A.g[3]+F&4294967295}n.prototype.v=function(A,I){I===void 0&&(I=A.length);const y=I-this.blockSize,b=this.C;let v=this.h,F=0;for(;F<I;){if(v==0)for(;F<=y;)s(this,A,F),F+=this.blockSize;if(typeof A=="string"){for(;F<I;)if(b[v++]=A.charCodeAt(F++),v==this.blockSize){s(this,b),v=0;break}}else for(;F<I;)if(b[v++]=A[F++],v==this.blockSize){s(this,b),v=0;break}}this.h=v,this.o+=I},n.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var I=1;I<A.length-8;++I)A[I]=0;I=this.o*8;for(var y=A.length-8;y<A.length;++y)A[y]=I&255,I/=256;for(this.v(A),A=Array(16),I=0,y=0;y<4;++y)for(let b=0;b<32;b+=8)A[I++]=this.g[y]>>>b&255;return A};function i(A,I){var y=a;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=I(A)}function o(A,I){this.h=I;const y=[];let b=!0;for(let v=A.length-1;v>=0;v--){const F=A[v]|0;b&&F==I||(y[v]=F,b=!1)}this.g=y}var a={};function u(A){return-128<=A&&A<128?i(A,function(I){return new o([I|0],I<0?-1:0)}):new o([A|0],A<0?-1:0)}function l(A){if(isNaN(A)||!isFinite(A))return d;if(A<0)return S(l(-A));const I=[];let y=1;for(let b=0;A>=y;b++)I[b]=A/y|0,y*=4294967296;return new o(I,0)}function B(A,I){if(A.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(A.charAt(0)=="-")return S(B(A.substring(1),I));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=l(Math.pow(I,8));let b=d;for(let F=0;F<A.length;F+=8){var v=Math.min(8,A.length-F);const D=parseInt(A.substring(F,F+v),I);v<8?(v=l(Math.pow(I,v)),b=b.j(v).add(l(D))):(b=b.j(y),b=b.add(l(D)))}return b}var d=u(0),C=u(1),g=u(16777216);r=o.prototype,r.m=function(){if(w(this))return-S(this).m();let A=0,I=1;for(let y=0;y<this.g.length;y++){const b=this.i(y);A+=(b>=0?b:4294967296+b)*I,I*=4294967296}return A},r.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(m(this))return"0";if(w(this))return"-"+S(this).toString(A);const I=l(Math.pow(A,6));var y=this;let b="";for(;;){const v=re(y,I).g;y=G(y,v.j(I));let F=((y.g.length>0?y.g[0]:y.h)>>>0).toString(A);if(y=v,m(y))return F+b;for(;F.length<6;)F="0"+F;b=F+b}},r.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function m(A){if(A.h!=0)return!1;for(let I=0;I<A.g.length;I++)if(A.g[I]!=0)return!1;return!0}function w(A){return A.h==-1}r.l=function(A){return A=G(this,A),w(A)?-1:m(A)?0:1};function S(A){const I=A.g.length,y=[];for(let b=0;b<I;b++)y[b]=~A.g[b];return new o(y,~A.h).add(C)}r.abs=function(){return w(this)?S(this):this},r.add=function(A){const I=Math.max(this.g.length,A.g.length),y=[];let b=0;for(let v=0;v<=I;v++){let F=b+(this.i(v)&65535)+(A.i(v)&65535),D=(F>>>16)+(this.i(v)>>>16)+(A.i(v)>>>16);b=D>>>16,F&=65535,D&=65535,y[v]=D<<16|F}return new o(y,y[y.length-1]&-2147483648?-1:0)};function G(A,I){return A.add(S(I))}r.j=function(A){if(m(this)||m(A))return d;if(w(this))return w(A)?S(this).j(S(A)):S(S(this).j(A));if(w(A))return S(this.j(S(A)));if(this.l(g)<0&&A.l(g)<0)return l(this.m()*A.m());const I=this.g.length+A.g.length,y=[];for(var b=0;b<2*I;b++)y[b]=0;for(b=0;b<this.g.length;b++)for(let v=0;v<A.g.length;v++){const F=this.i(b)>>>16,D=this.i(b)&65535,wt=A.i(v)>>>16,xr=A.i(v)&65535;y[2*b+2*v]+=D*xr,j(y,2*b+2*v),y[2*b+2*v+1]+=F*xr,j(y,2*b+2*v+1),y[2*b+2*v+1]+=D*wt,j(y,2*b+2*v+1),y[2*b+2*v+2]+=F*wt,j(y,2*b+2*v+2)}for(A=0;A<I;A++)y[A]=y[2*A+1]<<16|y[2*A];for(A=I;A<2*I;A++)y[A]=0;return new o(y,0)};function j(A,I){for(;(A[I]&65535)!=A[I];)A[I+1]+=A[I]>>>16,A[I]&=65535,I++}function Y(A,I){this.g=A,this.h=I}function re(A,I){if(m(I))throw Error("division by zero");if(m(A))return new Y(d,d);if(w(A))return I=re(S(A),I),new Y(S(I.g),S(I.h));if(w(I))return I=re(A,S(I)),new Y(S(I.g),I.h);if(A.g.length>30){if(w(A)||w(I))throw Error("slowDivide_ only works with positive integers.");for(var y=C,b=I;b.l(A)<=0;)y=ce(y),b=ce(b);var v=le(y,1),F=le(b,1);for(b=le(b,2),y=le(y,2);!m(b);){var D=F.add(b);D.l(A)<=0&&(v=v.add(y),F=D),b=le(b,1),y=le(y,1)}return I=G(A,v.j(I)),new Y(v,I)}for(v=d;A.l(I)>=0;){for(y=Math.max(1,Math.floor(A.m()/I.m())),b=Math.ceil(Math.log(y)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),F=l(y),D=F.j(I);w(D)||D.l(A)>0;)y-=b,F=l(y),D=F.j(I);m(F)&&(F=C),v=v.add(F),A=G(A,D)}return new Y(v,A)}r.B=function(A){return re(this,A).h},r.and=function(A){const I=Math.max(this.g.length,A.g.length),y=[];for(let b=0;b<I;b++)y[b]=this.i(b)&A.i(b);return new o(y,this.h&A.h)},r.or=function(A){const I=Math.max(this.g.length,A.g.length),y=[];for(let b=0;b<I;b++)y[b]=this.i(b)|A.i(b);return new o(y,this.h|A.h)},r.xor=function(A){const I=Math.max(this.g.length,A.g.length),y=[];for(let b=0;b<I;b++)y[b]=this.i(b)^A.i(b);return new o(y,this.h^A.h)};function ce(A){const I=A.g.length+1,y=[];for(let b=0;b<I;b++)y[b]=A.i(b)<<1|A.i(b-1)>>>31;return new o(y,A.h)}function le(A,I){const y=I>>5;I%=32;const b=A.g.length-y,v=[];for(let F=0;F<b;F++)v[F]=I>0?A.i(F+y)>>>I|A.i(F+y+1)<<32-I:A.i(F+y);return new o(v,A.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,kg=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=B,Br=o}).apply(typeof kf<"u"?kf:typeof self<"u"?self:typeof window<"u"?window:{});var Ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mg,po,Gg,uu,Ol,Ug,Hg,qg;(function(){var r,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ma=="object"&&Ma];for(var h=0;h<c.length;++h){var f=c[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function s(c,h){if(h)e:{var f=n;c=c.split(".");for(var p=0;p<c.length-1;p++){var O=c[p];if(!(O in f))break e;f=f[O]}c=c[c.length-1],p=f[c],h=h(p),h!=p&&h!=null&&e(f,c,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(h){var f=[],p;for(p in h)Object.prototype.hasOwnProperty.call(h,p)&&f.push([p,h[p]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function u(c,h,f){return c.call.apply(c.bind,arguments)}function l(c,h,f){return l=u,l.apply(null,arguments)}function B(c,h){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),c.apply(this,p)}}function d(c,h){function f(){}f.prototype=h.prototype,c.Z=h.prototype,c.prototype=new f,c.prototype.constructor=c,c.Ob=function(p,O,L){for(var $=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)$[Be-2]=arguments[Be];return h.prototype[O].apply(p,$)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function g(c){const h=c.length;if(h>0){const f=Array(h);for(let p=0;p<h;p++)f[p]=c[p];return f}return[]}function m(c,h){for(let p=1;p<arguments.length;p++){const O=arguments[p];var f=typeof O;if(f=f!="object"?f:O?Array.isArray(O)?"array":f:"null",f=="array"||f=="object"&&typeof O.length=="number"){f=c.length||0;const L=O.length||0;c.length=f+L;for(let $=0;$<L;$++)c[f+$]=O[$]}else c.push(O)}}class w{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function S(c){o.setTimeout(()=>{throw c},0)}function G(){var c=A;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class j{constructor(){this.h=this.g=null}add(h,f){const p=Y.get();p.set(h,f),this.h?this.h.next=p:this.g=p,this.h=p}}var Y=new w(()=>new re,c=>c.reset());class re{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,le=!1,A=new j,I=()=>{const c=Promise.resolve(void 0);ce=()=>{c.then(y)}};function y(){for(var c;c=G();){try{c.h.call(c.g)}catch(f){S(f)}var h=Y;h.j(c),h.h<100&&(h.h++,c.next=h.g,h.g=c)}le=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var F=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return c}();function D(c){return/^[\s\xa0]*$/.test(c)}function wt(c,h){v.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,h)}d(wt,v),wt.prototype.init=function(c,h){const f=this.type=c.type,p=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget,h||(f=="mouseover"?h=c.fromElement:f=="mouseout"&&(h=c.toElement)),this.relatedTarget=h,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&wt.Z.h.call(this)},wt.prototype.h=function(){wt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var xr="closure_listenable_"+(Math.random()*1e6|0),DI=0;function yI(c,h,f,p,O){this.listener=c,this.proxy=null,this.src=h,this.type=f,this.capture=!!p,this.ha=O,this.key=++DI,this.da=this.fa=!1}function ya(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function wa(c,h,f){for(const p in c)h.call(f,c[p],p,c)}function wI(c,h){for(const f in c)h.call(void 0,c[f],f,c)}function od(c){const h={};for(const f in c)h[f]=c[f];return h}const ad="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ud(c,h){let f,p;for(let O=1;O<arguments.length;O++){p=arguments[O];for(f in p)c[f]=p[f];for(let L=0;L<ad.length;L++)f=ad[L],Object.prototype.hasOwnProperty.call(p,f)&&(c[f]=p[f])}}function Ta(c){this.src=c,this.g={},this.h=0}Ta.prototype.add=function(c,h,f,p,O){const L=c.toString();c=this.g[L],c||(c=this.g[L]=[],this.h++);const $=Nc(c,h,p,O);return $>-1?(h=c[$],f||(h.fa=!1)):(h=new yI(h,this.src,L,!!p,O),h.fa=f,c.push(h)),h};function Sc(c,h){const f=h.type;if(f in c.g){var p=c.g[f],O=Array.prototype.indexOf.call(p,h,void 0),L;(L=O>=0)&&Array.prototype.splice.call(p,O,1),L&&(ya(h),c.g[f].length==0&&(delete c.g[f],c.h--))}}function Nc(c,h,f,p){for(let O=0;O<c.length;++O){const L=c[O];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==p)return O}return-1}var Oc="closure_lm_"+(Math.random()*1e6|0),Fc={};function cd(c,h,f,p,O){if(Array.isArray(h)){for(let L=0;L<h.length;L++)cd(c,h[L],f,p,O);return null}return f=hd(f),c&&c[xr]?c.J(h,f,a(p)?!!p.capture:!1,O):TI(c,h,f,!1,p,O)}function TI(c,h,f,p,O,L){if(!h)throw Error("Invalid event type");const $=a(O)?!!O.capture:!!O;let Be=xc(c);if(Be||(c[Oc]=Be=new Ta(c)),f=Be.add(h,f,p,$,L),f.proxy)return f;if(p=AI(),f.proxy=p,p.src=c,p.listener=f,c.addEventListener)F||(O=$),O===void 0&&(O=!1),c.addEventListener(h.toString(),p,O);else if(c.attachEvent)c.attachEvent(Bd(h.toString()),p);else if(c.addListener&&c.removeListener)c.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function AI(){function c(f){return h.call(c.src,c.listener,f)}const h=RI;return c}function ld(c,h,f,p,O){if(Array.isArray(h))for(var L=0;L<h.length;L++)ld(c,h[L],f,p,O);else p=a(p)?!!p.capture:!!p,f=hd(f),c&&c[xr]?(c=c.i,L=String(h).toString(),L in c.g&&(h=c.g[L],f=Nc(h,f,p,O),f>-1&&(ya(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete c.g[L],c.h--)))):c&&(c=xc(c))&&(h=c.g[h.toString()],c=-1,h&&(c=Nc(h,f,p,O)),(f=c>-1?h[c]:null)&&Lc(f))}function Lc(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[xr])Sc(h.i,c);else{var f=c.type,p=c.proxy;h.removeEventListener?h.removeEventListener(f,p,c.capture):h.detachEvent?h.detachEvent(Bd(f),p):h.addListener&&h.removeListener&&h.removeListener(p),(f=xc(h))?(Sc(f,c),f.h==0&&(f.src=null,h[Oc]=null)):ya(c)}}}function Bd(c){return c in Fc?Fc[c]:Fc[c]="on"+c}function RI(c,h){if(c.da)c=!0;else{h=new wt(h,this);const f=c.listener,p=c.ha||c.src;c.fa&&Lc(c),c=f.call(p,h)}return c}function xc(c){return c=c[Oc],c instanceof Ta?c:null}var Vc="__closure_events_fn_"+(Math.random()*1e9>>>0);function hd(c){return typeof c=="function"?c:(c[Vc]||(c[Vc]=function(h){return c.handleEvent(h)}),c[Vc])}function Bt(){b.call(this),this.i=new Ta(this),this.M=this,this.G=null}d(Bt,b),Bt.prototype[xr]=!0,Bt.prototype.removeEventListener=function(c,h,f,p){ld(this,c,h,f,p)};function _t(c,h){var f,p=c.G;if(p)for(f=[];p;p=p.G)f.push(p);if(c=c.M,p=h.type||h,typeof h=="string")h=new v(h,c);else if(h instanceof v)h.target=h.target||c;else{var O=h;h=new v(p,c),ud(h,O)}O=!0;let L,$;if(f)for($=f.length-1;$>=0;$--)L=h.g=f[$],O=Aa(L,p,!0,h)&&O;if(L=h.g=c,O=Aa(L,p,!0,h)&&O,O=Aa(L,p,!1,h)&&O,f)for($=0;$<f.length;$++)L=h.g=f[$],O=Aa(L,p,!1,h)&&O}Bt.prototype.N=function(){if(Bt.Z.N.call(this),this.i){var c=this.i;for(const h in c.g){const f=c.g[h];for(let p=0;p<f.length;p++)ya(f[p]);delete c.g[h],c.h--}}this.G=null},Bt.prototype.J=function(c,h,f,p){return this.i.add(String(c),h,!1,f,p)},Bt.prototype.K=function(c,h,f,p){return this.i.add(String(c),h,!0,f,p)};function Aa(c,h,f,p){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let L=0;L<h.length;++L){const $=h[L];if($&&!$.da&&$.capture==f){const Be=$.listener,Xe=$.ha||$.src;$.fa&&Sc(c.i,$),O=Be.call(Xe,p)!==!1&&O}}return O&&!p.defaultPrevented}function vI(c,h){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=l(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(c,h||0)}function dd(c){c.g=vI(()=>{c.g=null,c.i&&(c.i=!1,dd(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class bI extends b{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:dd(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qi(c){b.call(this),this.h=c,this.g={}}d(qi,b);var fd=[];function Cd(c){wa(c.g,function(h,f){this.g.hasOwnProperty(f)&&Lc(h)},c),c.g={}}qi.prototype.N=function(){qi.Z.N.call(this),Cd(this)},qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kc=o.JSON.stringify,PI=o.JSON.parse,SI=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function pd(){}function gd(){}var ji={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Mc(){v.call(this,"d")}d(Mc,v);function Gc(){v.call(this,"c")}d(Gc,v);var Vr={},md=null;function Ra(){return md=md||new Bt}Vr.Ia="serverreachability";function _d(c){v.call(this,Vr.Ia,c)}d(_d,v);function Ji(c){const h=Ra();_t(h,new _d(h))}Vr.STAT_EVENT="statevent";function Ed(c,h){v.call(this,Vr.STAT_EVENT,c),this.stat=h}d(Ed,v);function Et(c){const h=Ra();_t(h,new Ed(h,c))}Vr.Ja="timingevent";function Id(c,h){v.call(this,Vr.Ja,c),this.size=h}d(Id,v);function Ki(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},h)}function zi(){this.g=!0}zi.prototype.ua=function(){this.g=!1};function NI(c,h,f,p,O,L){c.info(function(){if(c.g)if(L){var $="",Be=L.split("&");for(let Re=0;Re<Be.length;Re++){var Xe=Be[Re].split("=");if(Xe.length>1){const st=Xe[0];Xe=Xe[1];const nn=st.split("_");$=nn.length>=2&&nn[1]=="type"?$+(st+"="+Xe+"&"):$+(st+"=redacted&")}}}else $=null;else $=L;return"XMLHTTP REQ ("+p+") [attempt "+O+"]: "+h+`
`+f+`
`+$})}function OI(c,h,f,p,O,L,$){c.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+O+"]: "+h+`
`+f+`
`+L+" "+$})}function Fs(c,h,f,p){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+LI(c,f)+(p?" "+p:"")})}function FI(c,h){c.info(function(){return"TIMEOUT: "+h})}zi.prototype.info=function(){};function LI(c,h){if(!c.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(c=0;c<L.length;c++)if(Array.isArray(L[c])){var f=L[c];if(!(f.length<2)){var p=f[1];if(Array.isArray(p)&&!(p.length<1)){var O=p[0];if(O!="noop"&&O!="stop"&&O!="close")for(let $=1;$<p.length;$++)p[$]=""}}}}return kc(L)}catch{return h}}var va={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Dd={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},yd;function Uc(){}d(Uc,pd),Uc.prototype.g=function(){return new XMLHttpRequest},yd=new Uc;function Qi(c){return encodeURIComponent(String(c))}function xI(c){var h=1;c=c.split(":");const f=[];for(;h>0&&c.length;)f.push(c.shift()),h--;return c.length&&f.push(c.join(":")),f}function Un(c,h,f,p){this.j=c,this.i=h,this.l=f,this.S=p||1,this.V=new qi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new wd}function wd(){this.i=null,this.g="",this.h=!1}var Td={},Hc={};function qc(c,h,f){c.M=1,c.A=Pa(tn(h)),c.u=f,c.R=!0,Ad(c,null)}function Ad(c,h){c.F=Date.now(),ba(c),c.B=tn(c.A);var f=c.B,p=c.S;Array.isArray(p)||(p=[String(p)]),Md(f.i,"t",p),c.C=0,f=c.j.L,c.h=new wd,c.g=rf(c.j,f?h:null,!c.u),c.P>0&&(c.O=new bI(l(c.Y,c,c.g),c.P)),h=c.V,f=c.g,p=c.ba;var O="readystatechange";Array.isArray(O)||(O&&(fd[0]=O.toString()),O=fd);for(let L=0;L<O.length;L++){const $=cd(f,O[L],p||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=c.J?od(c.J):{},c.u?(c.v||(c.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,h)):(c.v="GET",c.g.ea(c.B,c.v,null,h)),Ji(),NI(c.i,c.v,c.B,c.l,c.S,c.u)}Un.prototype.ba=function(c){c=c.target;const h=this.O;h&&jn(c)==3?h.j():this.Y(c)},Un.prototype.Y=function(c){try{if(c==this.g)e:{const Be=jn(this.g),Xe=this.g.ya(),Re=this.g.ca();if(!(Be<3)&&(Be!=3||this.g&&(this.h.h||this.g.la()||Kd(this.g)))){this.K||Be!=4||Xe==7||(Xe==8||Re<=0?Ji(3):Ji(2)),jc(this);var h=this.g.ca();this.X=h;var f=VI(this);if(this.o=h==200,OI(this.i,this.v,this.B,this.l,this.S,Be,h),this.o){if(this.U&&!this.L){t:{if(this.g){var p,O=this.g;if((p=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(p)){var L=p;break t}}L=null}if(c=L)Fs(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Jc(this,c);else{this.o=!1,this.m=3,Et(12),kr(this),Wi(this);break e}}if(this.R){c=!0;let st;for(;!this.K&&this.C<f.length;)if(st=kI(this,f),st==Hc){Be==4&&(this.m=4,Et(14),c=!1),Fs(this.i,this.l,null,"[Incomplete Response]");break}else if(st==Td){this.m=4,Et(15),Fs(this.i,this.l,f,"[Invalid Chunk]"),c=!1;break}else Fs(this.i,this.l,st,null),Jc(this,st);if(Rd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Be!=4||f.length!=0||this.h.h||(this.m=1,Et(16),c=!1),this.o=this.o&&c,!c)Fs(this.i,this.l,f,"[Invalid Chunked Response]"),kr(this),Wi(this);else if(f.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Zc($),$.P=!0,Et(11))}}else Fs(this.i,this.l,f,null),Jc(this,f);Be==4&&kr(this),this.o&&!this.K&&(Be==4?Zd(this.j,this):(this.o=!1,ba(this)))}else XI(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),kr(this),Wi(this)}}}catch{}finally{}};function VI(c){if(!Rd(c))return c.g.la();const h=Kd(c.g);if(h==="")return"";let f="";const p=h.length,O=jn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return kr(c),Wi(c),"";c.h.i=new o.TextDecoder}for(let L=0;L<p;L++)c.h.h=!0,f+=c.h.i.decode(h[L],{stream:!(O&&L==p-1)});return h.length=0,c.h.g+=f,c.C=0,c.h.g}function Rd(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function kI(c,h){var f=c.C,p=h.indexOf(`
`,f);return p==-1?Hc:(f=Number(h.substring(f,p)),isNaN(f)?Td:(p+=1,p+f>h.length?Hc:(h=h.slice(p,p+f),c.C=p+f,h)))}Un.prototype.cancel=function(){this.K=!0,kr(this)};function ba(c){c.T=Date.now()+c.H,vd(c,c.H)}function vd(c,h){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Ki(l(c.aa,c),h)}function jc(c){c.D&&(o.clearTimeout(c.D),c.D=null)}Un.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(FI(this.i,this.B),this.M!=2&&(Ji(),Et(17)),kr(this),this.m=2,Wi(this)):vd(this,this.T-c)};function Wi(c){c.j.I==0||c.K||Zd(c.j,c)}function kr(c){jc(c);var h=c.O;h&&typeof h.dispose=="function"&&h.dispose(),c.O=null,Cd(c.V),c.g&&(h=c.g,c.g=null,h.abort(),h.dispose())}function Jc(c,h){try{var f=c.j;if(f.I!=0&&(f.g==c||Kc(f.h,c))){if(!c.L&&Kc(f.h,c)&&f.I==3){try{var p=f.Ba.g.parse(h)}catch{p=null}if(Array.isArray(p)&&p.length==3){var O=p;if(O[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<c.F)La(f),Oa(f);else break e;Xc(f),Et(18)}}else f.xa=O[1],0<f.xa-f.K&&O[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Ki(l(f.Va,f),6e3));Sd(f.h)<=1&&f.ta&&(f.ta=void 0)}else Gr(f,11)}else if((c.L||f.g==c)&&La(f),!D(h))for(O=f.Ba.g.parse(h),h=0;h<O.length;h++){let Re=O[h];const st=Re[0];if(!(st<=f.K))if(f.K=st,Re=Re[1],f.I==2)if(Re[0]=="c"){f.M=Re[1],f.ba=Re[2];const nn=Re[3];nn!=null&&(f.ka=nn,f.j.info("VER="+f.ka));const Ur=Re[4];Ur!=null&&(f.za=Ur,f.j.info("SVER="+f.za));const Jn=Re[5];Jn!=null&&typeof Jn=="number"&&Jn>0&&(p=1.5*Jn,f.O=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Kn=c.g;if(Kn){const Va=Kn.g?Kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Va){var L=p.h;L.g||Va.indexOf("spdy")==-1&&Va.indexOf("quic")==-1&&Va.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(zc(L,L.h),L.h=null))}if(p.G){const el=Kn.g?Kn.g.getResponseHeader("X-HTTP-Session-Id"):null;el&&(p.wa=el,Oe(p.J,p.G,el))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-c.F,f.j.info("Handshake RTT: "+f.T+"ms")),p=f;var $=c;if(p.na=nf(p,p.L?p.ba:null,p.W),$.L){Nd(p.h,$);var Be=$,Xe=p.O;Xe&&(Be.H=Xe),Be.D&&(jc(Be),ba(Be)),p.g=$}else Yd(p);f.i.length>0&&Fa(f)}else Re[0]!="stop"&&Re[0]!="close"||Gr(f,7);else f.I==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Gr(f,7):Yc(f):Re[0]!="noop"&&f.l&&f.l.qa(Re),f.A=0)}}Ji(4)}catch{}}var MI=class{constructor(c,h){this.g=c,this.map=h}};function bd(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Pd(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Sd(c){return c.h?1:c.g?c.g.size:0}function Kc(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function zc(c,h){c.g?c.g.add(h):c.h=h}function Nd(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}bd.prototype.cancel=function(){if(this.i=Od(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Od(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const f of c.g.values())h=h.concat(f.G);return h}return g(c.i)}var Fd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GI(c,h){if(c){c=c.split("&");for(let f=0;f<c.length;f++){const p=c[f].indexOf("=");let O,L=null;p>=0?(O=c[f].substring(0,p),L=c[f].substring(p+1)):O=c[f],h(O,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Hn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;c instanceof Hn?(this.l=c.l,$i(this,c.j),this.o=c.o,this.g=c.g,Yi(this,c.u),this.h=c.h,Qc(this,Gd(c.i)),this.m=c.m):c&&(h=String(c).match(Fd))?(this.l=!1,$i(this,h[1]||"",!0),this.o=Xi(h[2]||""),this.g=Xi(h[3]||"",!0),Yi(this,h[4]),this.h=Xi(h[5]||"",!0),Qc(this,h[6]||"",!0),this.m=Xi(h[7]||"")):(this.l=!1,this.i=new eo(null,this.l))}Hn.prototype.toString=function(){const c=[];var h=this.j;h&&c.push(Zi(h,Ld,!0),":");var f=this.g;return(f||h=="file")&&(c.push("//"),(h=this.o)&&c.push(Zi(h,Ld,!0),"@"),c.push(Qi(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&c.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&c.push("/"),c.push(Zi(f,f.charAt(0)=="/"?qI:HI,!0))),(f=this.i.toString())&&c.push("?",f),(f=this.m)&&c.push("#",Zi(f,JI)),c.join("")},Hn.prototype.resolve=function(c){const h=tn(this);let f=!!c.j;f?$i(h,c.j):f=!!c.o,f?h.o=c.o:f=!!c.g,f?h.g=c.g:f=c.u!=null;var p=c.h;if(f)Yi(h,c.u);else if(f=!!c.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var O=h.h.lastIndexOf("/");O!=-1&&(p=h.h.slice(0,O+1)+p)}if(O=p,O==".."||O==".")p="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){p=O.lastIndexOf("/",0)==0,O=O.split("/");const L=[];for(let $=0;$<O.length;){const Be=O[$++];Be=="."?p&&$==O.length&&L.push(""):Be==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),p&&$==O.length&&L.push("")):(L.push(Be),p=!0)}p=L.join("/")}else p=O}return f?h.h=p:f=c.i.toString()!=="",f?Qc(h,Gd(c.i)):f=!!c.m,f&&(h.m=c.m),h};function tn(c){return new Hn(c)}function $i(c,h,f){c.j=f?Xi(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function Yi(c,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);c.u=h}else c.u=null}function Qc(c,h,f){h instanceof eo?(c.i=h,KI(c.i,c.l)):(f||(h=Zi(h,jI)),c.i=new eo(h,c.l))}function Oe(c,h,f){c.i.set(h,f)}function Pa(c){return Oe(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Xi(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Zi(c,h,f){return typeof c=="string"?(c=encodeURI(c).replace(h,UI),f&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function UI(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ld=/[#\/\?@]/g,HI=/[#\?:]/g,qI=/[#\?]/g,jI=/[#\?@]/g,JI=/#/g;function eo(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function Mr(c){c.g||(c.g=new Map,c.h=0,c.i&&GI(c.i,function(h,f){c.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}r=eo.prototype,r.add=function(c,h){Mr(this),this.i=null,c=Ls(this,c);let f=this.g.get(c);return f||this.g.set(c,f=[]),f.push(h),this.h+=1,this};function xd(c,h){Mr(c),h=Ls(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function Vd(c,h){return Mr(c),h=Ls(c,h),c.g.has(h)}r.forEach=function(c,h){Mr(this),this.g.forEach(function(f,p){f.forEach(function(O){c.call(h,O,p,this)},this)},this)};function kd(c,h){Mr(c);let f=[];if(typeof h=="string")Vd(c,h)&&(f=f.concat(c.g.get(Ls(c,h))));else for(c=Array.from(c.g.values()),h=0;h<c.length;h++)f=f.concat(c[h]);return f}r.set=function(c,h){return Mr(this),this.i=null,c=Ls(this,c),Vd(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},r.get=function(c,h){return c?(c=kd(this,c),c.length>0?String(c[0]):h):h};function Md(c,h,f){xd(c,h),f.length>0&&(c.i=null,c.g.set(Ls(c,h),g(f)),c.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(let p=0;p<h.length;p++){var f=h[p];const O=Qi(f);f=kd(this,f);for(let L=0;L<f.length;L++){let $=O;f[L]!==""&&($+="="+Qi(f[L])),c.push($)}}return this.i=c.join("&")};function Gd(c){const h=new eo;return h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),h}function Ls(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function KI(c,h){h&&!c.j&&(Mr(c),c.i=null,c.g.forEach(function(f,p){const O=p.toLowerCase();p!=O&&(xd(this,p),Md(this,O,f))},c)),c.j=h}function zI(c,h){const f=new zi;if(o.Image){const p=new Image;p.onload=B(qn,f,"TestLoadImage: loaded",!0,h,p),p.onerror=B(qn,f,"TestLoadImage: error",!1,h,p),p.onabort=B(qn,f,"TestLoadImage: abort",!1,h,p),p.ontimeout=B(qn,f,"TestLoadImage: timeout",!1,h,p),o.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=c}else h(!1)}function QI(c,h){const f=new zi,p=new AbortController,O=setTimeout(()=>{p.abort(),qn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:p.signal}).then(L=>{clearTimeout(O),L.ok?qn(f,"TestPingServer: ok",!0,h):qn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),qn(f,"TestPingServer: error",!1,h)})}function qn(c,h,f,p,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),p(f)}catch{}}function WI(){this.g=new SI}function Wc(c){this.i=c.Sb||null,this.h=c.ab||!1}d(Wc,pd),Wc.prototype.g=function(){return new Sa(this.i,this.h)};function Sa(c,h){Bt.call(this),this.H=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Sa,Bt),r=Sa.prototype,r.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=h,this.readyState=1,no(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(h.body=c),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,to(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,no(this)),this.g&&(this.readyState=3,no(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ud(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ud(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?to(this):no(this),this.readyState==3&&Ud(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,to(this))},r.Na=function(c){this.g&&(this.response=c,to(this))},r.ga=function(){this.g&&to(this)};function to(c){c.readyState=4,c.l=null,c.j=null,c.B=null,no(c)}r.setRequestHeader=function(c,h){this.A.append(c,h)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,c.push(f[0]+": "+f[1]),f=h.next();return c.join(`\r
`)};function no(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Hd(c){let h="";return wa(c,function(f,p){h+=p,h+=":",h+=f,h+=`\r
`}),h}function $c(c,h,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Hd(f),typeof c=="string"?f!=null&&Qi(f):Oe(c,h,f))}function Ge(c){Bt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Ge,Bt);var $I=/^https?$/i,YI=["POST","PUT"];r=Ge.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,h,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():yd.g(),this.g.onreadystatechange=C(l(this.Ca,this));try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(L){qd(this,L);return}if(c=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var O in p)f.set(O,p[O]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const L of p.keys())f.set(L,p.get(L));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),O=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(YI,h,void 0)>=0)||p||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of f)this.g.setRequestHeader(L,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(L){qd(this,L)}};function qd(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.o=5,jd(c),Na(c)}function jd(c){c.A||(c.A=!0,_t(c,"complete"),_t(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,_t(this,"complete"),_t(this,"abort"),Na(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Na(this,!0)),Ge.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Jd(this):this.Xa())},r.Xa=function(){Jd(this)};function Jd(c){if(c.h&&typeof i<"u"){if(c.v&&jn(c)==4)setTimeout(c.Ca.bind(c),0);else if(_t(c,"readystatechange"),jn(c)==4){c.h=!1;try{const L=c.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var p;if(p=L===0){let $=String(c.D).match(Fd)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),p=!$I.test($?$.toLowerCase():"")}f=p}if(f)_t(c,"complete"),_t(c,"success");else{c.o=6;try{var O=jn(c)>2?c.g.statusText:""}catch{O=""}c.l=O+" ["+c.ca()+"]",jd(c)}}finally{Na(c)}}}}function Na(c,h){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const f=c.g;c.g=null,h||_t(c,"ready");try{f.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function jn(c){return c.g?c.g.readyState:0}r.ca=function(){try{return jn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),PI(h)}};function Kd(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function XI(c){const h={};c=(c.g&&jn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<c.length;p++){if(D(c[p]))continue;var f=xI(c[p]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[O]||[];h[O]=L,L.push(f)}wI(h,function(p){return p.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ro(c,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[c]||h}function zd(c){this.za=0,this.i=[],this.j=new zi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ro("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ro("baseRetryDelayMs",5e3,c),this.Za=ro("retryDelaySeedMs",1e4,c),this.Ta=ro("forwardChannelMaxRetries",2,c),this.va=ro("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new bd(c&&c.concurrentRequestLimit),this.Ba=new WI,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=zd.prototype,r.ka=8,r.I=1,r.connect=function(c,h,f,p){Et(0),this.W=c,this.H=h||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.J=nf(this,null,this.W),Fa(this)};function Yc(c){if(Qd(c),c.I==3){var h=c.V++,f=tn(c.J);if(Oe(f,"SID",c.M),Oe(f,"RID",h),Oe(f,"TYPE","terminate"),so(c,f),h=new Un(c,c.j,h),h.M=2,h.A=Pa(tn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=rf(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ba(h)}tf(c)}function Oa(c){c.g&&(Zc(c),c.g.cancel(),c.g=null)}function Qd(c){Oa(c),c.v&&(o.clearTimeout(c.v),c.v=null),La(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function Fa(c){if(!Pd(c.h)&&!c.m){c.m=!0;var h=c.Ea;ce||I(),le||(ce(),le=!0),A.add(h,c),c.D=0}}function ZI(c,h){return Sd(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=h.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Ki(l(c.Ea,c,h),ef(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const O=new Un(this,this.j,c);let L=this.o;if(this.U&&(L?(L=od(L),ud(L,this.U)):L=this.U),this.u!==null||this.R||(O.J=L,L=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(h+=p,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=$d(this,O,h),f=tn(this.J),Oe(f,"RID",c),Oe(f,"CVER",22),this.G&&Oe(f,"X-HTTP-Session-Id",this.G),so(this,f),L&&(this.R?h="headers="+Qi(Hd(L))+"&"+h:this.u&&$c(f,this.u,L)),zc(this.h,O),this.Ra&&Oe(f,"TYPE","init"),this.S?(Oe(f,"$req",h),Oe(f,"SID","null"),O.U=!0,qc(O,f,null)):qc(O,f,h),this.I=2}}else this.I==3&&(c?Wd(this,c):this.i.length==0||Pd(this.h)||Wd(this))};function Wd(c,h){var f;h?f=h.l:f=c.V++;const p=tn(c.J);Oe(p,"SID",c.M),Oe(p,"RID",f),Oe(p,"AID",c.K),so(c,p),c.u&&c.o&&$c(p,c.u,c.o),f=new Un(c,c.j,f,c.D+1),c.u===null&&(f.J=c.o),h&&(c.i=h.G.concat(c.i)),h=$d(c,f,1e3),f.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),zc(c.h,f),qc(f,p,h)}function so(c,h){c.H&&wa(c.H,function(f,p){Oe(h,p,f)}),c.l&&wa({},function(f,p){Oe(h,p,f)})}function $d(c,h,f){f=Math.min(c.i.length,f);const p=c.l?l(c.l.Ka,c.l,c):null;e:{var O=c.i;let Be=-1;for(;;){const Xe=["count="+f];Be==-1?f>0?(Be=O[0].g,Xe.push("ofs="+Be)):Be=0:Xe.push("ofs="+Be);let Re=!0;for(let st=0;st<f;st++){var L=O[st].g;const nn=O[st].map;if(L-=Be,L<0)Be=Math.max(0,O[st].g-100),Re=!1;else try{L="req"+L+"_"||"";try{var $=nn instanceof Map?nn:Object.entries(nn);for(const[Ur,Jn]of $){let Kn=Jn;a(Jn)&&(Kn=kc(Jn)),Xe.push(L+Ur+"="+encodeURIComponent(Kn))}}catch(Ur){throw Xe.push(L+"type="+encodeURIComponent("_badmap")),Ur}}catch{p&&p(nn)}}if(Re){$=Xe.join("&");break e}}$=void 0}return c=c.i.splice(0,f),h.G=c,$}function Yd(c){if(!c.g&&!c.v){c.Y=1;var h=c.Da;ce||I(),le||(ce(),le=!0),A.add(h,c),c.A=0}}function Xc(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Ki(l(c.Da,c),ef(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,Xd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Ki(l(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),Oa(this),Xd(this))};function Zc(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function Xd(c){c.g=new Un(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var h=tn(c.na);Oe(h,"RID","rpc"),Oe(h,"SID",c.M),Oe(h,"AID",c.K),Oe(h,"CI",c.F?"0":"1"),!c.F&&c.ia&&Oe(h,"TO",c.ia),Oe(h,"TYPE","xmlhttp"),so(c,h),c.u&&c.o&&$c(h,c.u,c.o),c.O&&(c.g.H=c.O);var f=c.g;c=c.ba,f.M=1,f.A=Pa(tn(h)),f.u=null,f.R=!0,Ad(f,c)}r.Va=function(){this.C!=null&&(this.C=null,Oa(this),Xc(this),Et(19))};function La(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Zd(c,h){var f=null;if(c.g==h){La(c),Zc(c),c.g=null;var p=2}else if(Kc(c.h,h))f=h.G,Nd(c.h,h),p=1;else return;if(c.I!=0){if(h.o)if(p==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var O=c.D;p=Ra(),_t(p,new Id(p,f)),Fa(c)}else Yd(c);else if(O=h.m,O==3||O==0&&h.X>0||!(p==1&&ZI(c,h)||p==2&&Xc(c)))switch(f&&f.length>0&&(h=c.h,h.i=h.i.concat(f)),O){case 1:Gr(c,5);break;case 4:Gr(c,10);break;case 3:Gr(c,6);break;default:Gr(c,2)}}}function ef(c,h){let f=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(f*=2),f*h}function Gr(c,h){if(c.j.info("Error code "+h),h==2){var f=l(c.bb,c),p=c.Ua;const O=!p;p=new Hn(p||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||$i(p,"https"),Pa(p),O?zI(p.toString(),f):QI(p.toString(),f)}else Et(2);c.I=0,c.l&&c.l.pa(h),tf(c),Qd(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function tf(c){if(c.I=0,c.ja=[],c.l){const h=Od(c.h);(h.length!=0||c.i.length!=0)&&(m(c.ja,h),m(c.ja,c.i),c.h.i.length=0,g(c.i),c.i.length=0),c.l.oa()}}function nf(c,h,f){var p=f instanceof Hn?tn(f):new Hn(f);if(p.g!="")h&&(p.g=h+"."+p.g),Yi(p,p.u);else{var O=o.location;p=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const L=new Hn(null);p&&$i(L,p),h&&(L.g=h),O&&Yi(L,O),f&&(L.h=f),p=L}return f=c.G,h=c.wa,f&&h&&Oe(p,f,h),Oe(p,"VER",c.ka),so(c,p),p}function rf(c,h,f){if(h&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Aa&&!c.ma?new Ge(new Wc({ab:f})):new Ge(c.ma),h.Fa(c.L),h}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function sf(){}r=sf.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function xa(){}xa.prototype.g=function(c,h){return new Ot(c,h)};function Ot(c,h){Bt.call(this),this.g=new zd(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(c?c["X-WebChannel-Client-Profile"]=h.sa:c={"X-WebChannel-Client-Profile":h.sa}),this.g.U=c,(c=h&&h.Qb)&&!D(c)&&(this.g.u=c),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!D(h)&&(this.g.G=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new xs(this)}d(Ot,Bt),Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){Yc(this.g)},Ot.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var f={};f.__data__=c,c=f}else this.v&&(f={},f.__data__=kc(c),c=f);h.i.push(new MI(h.Ya++,c)),h.I==3&&Fa(h)},Ot.prototype.N=function(){this.g.l=null,delete this.j,Yc(this.g),delete this.g,Ot.Z.N.call(this)};function of(c){Mc.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const f in h){c=f;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}d(of,Mc);function af(){Gc.call(this),this.status=1}d(af,Gc);function xs(c){this.g=c}d(xs,sf),xs.prototype.ra=function(){_t(this.g,"a")},xs.prototype.qa=function(c){_t(this.g,new of(c))},xs.prototype.pa=function(c){_t(this.g,new af)},xs.prototype.oa=function(){_t(this.g,"b")},xa.prototype.createWebChannel=xa.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,qg=function(){return new xa},Hg=function(){return Ra()},Ug=Vr,Ol={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},va.NO_ERROR=0,va.TIMEOUT=8,va.HTTP_ERROR=6,uu=va,Dd.COMPLETE="complete",Gg=Dd,gd.EventType=ji,ji.OPEN="a",ji.CLOSE="b",ji.ERROR="c",ji.MESSAGE="d",Bt.prototype.listen=Bt.prototype.J,po=gd,Ge.prototype.listenOnce=Ge.prototype.K,Ge.prototype.getLastError=Ge.prototype.Ha,Ge.prototype.getLastErrorCode=Ge.prototype.ya,Ge.prototype.getStatus=Ge.prototype.ca,Ge.prototype.getResponseJson=Ge.prototype.La,Ge.prototype.getResponseText=Ge.prototype.la,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Fa,Mg=Ge}).apply(typeof Ma<"u"?Ma:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.9.1
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository [object Object]
* @license MIT
*/var ve,H=(ve=class{},q(ve,"FOLD_CASE",1),q(ve,"LITERAL",2),q(ve,"CLASS_NL",4),q(ve,"DOT_NL",8),q(ve,"ONE_LINE",16),q(ve,"NON_GREEDY",32),q(ve,"PERL_X",64),q(ve,"UNICODE_GROUPS",128),q(ve,"WAS_DOLLAR",256),q(ve,"LOOKBEHIND",512),q(ve,"MATCH_NL",ve.CLASS_NL|ve.DOT_NL),q(ve,"PERL",ve.CLASS_NL|ve.ONE_LINE|ve.PERL_X|ve.UNICODE_GROUPS),q(ve,"POSIX",0),q(ve,"UNANCHORED",0),q(ve,"ANCHOR_START",1),q(ve,"ANCHOR_BOTH",2),ve);const Vs={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},ko=128,Fl=new Int32Array(ko),Ll=new Int32Array(ko),Ga=65535;for(let r=0;r<ko;r++)r>=97&&r<=122?Fl[r]=r-32:Fl[r]=r,r>=65&&r<=90?Ll[r]=r+32:Ll[r]=r;var Tl,M=(Tl=class{static toUpperCase(r){if(r<ko)return Fl[r];const e=String.fromCodePoint(r).toUpperCase(),t=e.codePointAt(0)>Ga?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),s=n.codePointAt(0)>Ga?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}static toLowerCase(r){if(r<ko)return Ll[r];const e=String.fromCodePoint(r).toLowerCase(),t=e.codePointAt(0)>Ga?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),s=n.codePointAt(0)>Ga?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}},q(Tl,"CODES",Object.freeze({"\x07":7,"\b":8,"	":9,"\n":10,"\v":11,"\f":12,"\r":13," ":32,'"':34,$:36,"&":38,"'":39,"(":40,")":41,"*":42,"+":43,"-":45,".":46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,":":58,"<":60,">":62,"?":63,A:65,B:66,C:67,F:70,P:80,Q:81,U:85,Z:90,"[":91,"\\":92,"]":93,"^":94,_:95,"`":96,a:97,b:98,f:102,i:105,m:109,n:110,r:114,s:115,t:116,v:118,x:120,z:122,"{":123,"|":124,"}":125})),Tl),_=class{constructor(r,e=!1){this.data=r,this.isStride1=e,this.SIZE=e?2:3}getLo(r){return this.data[r*this.SIZE]}getHi(r){return this.data[r*this.SIZE+1]}getStride(r){return this.isStride1?1:this.data[r*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const JT="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-",jg=new Uint8Array(256);for(let r=0;r<64;r++)jg[JT.charCodeAt(r)]=r;const Jg=r=>{const e=[];let t=0,n=0;for(let s=0;s<r.length;s++){const i=jg[r.charCodeAt(s)];t|=(i&31)<<n,i&32?n+=5:(e.push(t),t=0,n=0)}return e},E=(r,e)=>{const t=Jg(r),n=e?t.length/2:t.length/3,s=new Uint32Array(n*3);let i=0,o=0;for(let a=0;a<n;a++)i+=t[o++],s[a*3]=i,i+=t[o++],s[a*3+1]=i,s[a*3+2]=e?1:t[o++];return s},KT=r=>{const e=Jg(r),t=new Map;let n=0;for(let s=0;s<e.length;s+=2){n+=e[s];const i=e[s+1],o=i>>>1^-(i&1);t.set(n,n+o)}return t};var Ua=class{constructor(r){this.initializer=r,this.cache=new Map}has(r){return r in this.initializer}get(r){if(this.cache.has(r))return this.cache.get(r);const e=this.initializer[r],t=e?e():null;return this.cache.set(r,t),t}},Xn,Ft=(Xn=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=KT("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new _(E("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}},q(Xn,"_CASE_ORBIT",null),q(Xn,"_Print",null),q(Xn,"CATEGORIES",new Ua({C:()=>new _(E("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new _(E("AfgDgB",!0)),Cf:()=>new _(E("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new _(E("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new _(E("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new _(E("gg2B--B",!0)),L:()=>new _(E("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new _(E("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new _(E("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new _(E("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new _(E("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new _(E("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new _(E("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new _(E("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new _(E("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new _(E("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new _(E("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new _(E("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new _(E("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new _(E("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new _(E("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new _(E("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new _(E("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new _(E("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new _(E("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new _(E("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new _(E("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new _(E("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new _(E("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new _(E("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new _(E("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new _(E("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new _(E("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new _(E("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new _(E("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new _(E("ohIA",!0)),Zp:()=>new _(E("phIA",!0)),Zs:()=>new _(E("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new _(E("wBJIFbF",!0)),Alphabetic:()=>new _(E("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new _(E("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new _(E("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new _(E("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new _(E("7-8DE",!0)),Emoji_Modifier_Base:()=>new _(E("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new _(E("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new _(E("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new _(E("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new _(E("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new _(E("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new _(E("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new _(E("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new _(E("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new _(E("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),q(Xn,"SCRIPTS",new Ua({Adlam:()=>new _(E("go6DrCFJFB",!0)),Ahom:()=>new _(E("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new _(E("ggxCmS",!0)),Arabic:()=>new _(E("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new _(E("xpBlBDxBDCks9BE",!0)),Avestan:()=>new _(E("g4iC1BEG",!0)),Balinese:()=>new _(E("g4GsCCxB",!0)),Bamum:()=>new _(E("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new _(E("w26CdDF",!0)),Batak:()=>new _(E("g+GzBJD",!0)),Bengali:()=>new _(E("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new _(E("g17CYDY",!0)),Bhaiksuki:()=>new _(E("ggnCICsBCNLc",!0)),Bopomofo:()=>new _(E("qXB6wLqBxDf",!0)),Brahmi:()=>new _(E("ggkCtCFjBKA",!0)),Braille:()=>new _(E("ggK-H",!0)),Buginese:()=>new _(E("gwGbDB",!0)),Buhid:()=>new _(E("g6FT",!0)),Canadian_Aboriginal:()=>new _(E("ggF-TxRlC7tgCP",!0)),Carian:()=>new _(E("g1gCwB",!0)),Caucasian_Albanian:()=>new _(E("wphCzBMA",!0)),Chakma:()=>new _(E("gokC0BCR",!0)),Cham:()=>new _(E("gwqB2BKNDJDD",!0)),Cherokee:()=>new _(E("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new _(E("w9jCb",!0)),Common:()=>new _(E("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new _(E("ifNxkKzDGG",!0)),Cuneiform:()=>new _(E("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new _(E("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new _(E("w8rCiD",!0)),Cyrillic:()=>new _(E("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new _(E("gghCvC",!0)),Devanagari:()=>new _(E("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new _(E("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new _(E("ggmC7B",!0)),Duployan:()=>new _(E("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new _(E("ggsC1iBL68D",!0)),Elbasan:()=>new _(E("gohCnB",!0)),Elymaic:()=>new _(E("g-jCW",!0)),Ethiopic:()=>new _(E("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new _(E("gqjClBEcJB",!0)),Georgian:()=>new _(E("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new _(E("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new _(E("w5gCa",!0)),Grantha:()=>new _(E("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new _(E("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new _(E("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new _(E("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new _(E("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new _(E("go4C5B",!0)),Han:()=>new _(E("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new _(E("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new _(E("gojCnBJJ",!0)),Hanunoo:()=>new _(E("g5FU",!0)),Hatran:()=>new _(E("gniCSCBGE",!0)),Hebrew:()=>new _(E("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new _(E("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new _(E("giiCVCI",!0)),Inherited:()=>new _(E("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new _(E("g7iCSGH",!0)),Inscriptional_Parthian:()=>new _(E("g6iCVDH",!0)),Javanese:()=>new _(E("gsqBtCDJFB",!0)),Kaithi:()=>new _(E("gkkCiCLA",!0)),Kannada:()=>new _(E("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new _(E("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new _(E("g4nCQCoBEc",!0)),Kayah_Li:()=>new _(E("goqBtBCA",!0)),Kharoshthi:()=>new _(E("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new _(E("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new _(E("g8F9CDJHJnPf",!0)),Khojki:()=>new _(E("gwkCRCuB",!0)),Khudawadi:()=>new _(E("w1kC6BGJ",!0)),Kirat_Rai:()=>new _(E("gq7C5B",!0)),Lao:()=>new _(E("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new _(E("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new _(E("ggH3BEOEC",!0)),Limbu:()=>new _(E("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new _(E("gwhC2JKVLH",!0)),Linear_B:()=>new _(E("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new _(E("wmpBvBx1eA",!0)),Lycian:()=>new _(E("g0gCc",!0)),Lydian:()=>new _(E("gpiCZGA",!0)),Mahajani:()=>new _(E("wqkCmB",!0)),Makasar:()=>new _(E("g3nCY",!0)),Malayalam:()=>new _(E("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new _(E("giCbDA",!0)),Manichaean:()=>new _(E("g2iCmBFL",!0)),Marchen:()=>new _(E("wjnCfDVCN",!0)),Masaram_Gondi:()=>new _(E("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new _(E("gy7C6C",!0)),Meetei_Mayek:()=>new _(E("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new _(E("gg6DkGDP",!0)),Meroitic_Cursive:()=>new _(E("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new _(E("gsiCf",!0)),Miao:()=>new _(E("g47CqCF4BIQ",!0)),Modi:()=>new _(E("gwlCkCMJ",!0)),Mongolian:()=>new _(E("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new _(E("gy6CeCJFB",!0)),Multani:()=>new _(E("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new _(E("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new _(E("gkiCeJI",!0)),Nag_Mundari:()=>new _(E("wm5DpB",!0)),Nandinagari:()=>new _(E("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new _(E("gsGrBFZHKEB",!0)),Newa:()=>new _(E("gglC7CCE",!0)),Nko:()=>new _(E("g+B6BDC",!0)),Nushu:()=>new _(E("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new _(E("go4DsBENDJFB",!0)),Ogham:()=>new _(E("g0Fc",!0)),Ol_Chiki:()=>new _(E("wiHvB",!0)),Ol_Onal:()=>new _(E("wu5DqBFA",!0)),Old_Hungarian:()=>new _(E("gkjCyBOyBIF",!0)),Old_Italic:()=>new _(E("g4gCjBKC",!0)),Old_North_Arabian:()=>new _(E("g0iCf",!0)),Old_Permic:()=>new _(E("w6gCqB",!0)),Old_Persian:()=>new _(E("g9gCjBFN",!0)),Old_Sogdian:()=>new _(E("g4jCnB",!0)),Old_South_Arabian:()=>new _(E("gziCf",!0)),Old_Turkic:()=>new _(E("ggjCoC",!0)),Old_Uyghur:()=>new _(E("w7jCZ",!0)),Oriya:()=>new _(E("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new _(E("wlhCjBFjB",!0)),Osmanya:()=>new _(E("gkhCdDJ",!0)),Pahawh_Hmong:()=>new _(E("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new _(E("gjiCf",!0)),Pau_Cin_Hau:()=>new _(E("g2mC4B",!0)),Phags_Pa:()=>new _(E("giqB3B",!0)),Phoenician:()=>new _(E("goiCbEA",!0)),Psalter_Pahlavi:()=>new _(E("g8iCRIDNG",!0)),Rejang:()=>new _(E("wpqBjBMA",!0)),Runic:()=>new _(E("g1FqCEK",!0)),Samaritan:()=>new _(E("ggCtBDO",!0)),Saurashtra:()=>new _(E("gkqBlCJL",!0)),Sharada:()=>new _(E("gskC-ChsCH",!0)),Shavian:()=>new _(E("wihCvB",!0)),Siddham:()=>new _(E("gslC1BDlB",!0)),Sidetic:()=>new _(E("gqiCZ",!0)),SignWriting:()=>new _(E("gg2DrUQECO",!0)),Sinhala:()=>new _(E("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new _(E("w5jCpB",!0)),Sora_Sompeng:()=>new _(E("wmkCYIJ",!0)),Soyombo:()=>new _(E("wymCyC",!0)),Sundanese:()=>new _(E("g8G-BhIH",!0)),Sunuwar:()=>new _(E("g+mChBPJ",!0)),Syloti_Nagri:()=>new _(E("ggqBsB",!0)),Syriac:()=>new _(E("g4BNC7BDCxIK",!0)),Tagalog:()=>new _(E("g4FVKA",!0)),Tagbanwa:()=>new _(E("g7FMCCCB",!0)),Tai_Le:()=>new _(E("wqGdDE",!0)),Tai_Tham:()=>new _(E("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new _(E("g0qBiCZE",!0)),Tai_Yo:()=>new _(E("g25DeCVJB",!0)),Takri:()=>new _(E("g0lC5BHJ",!0)),Tamil:()=>new _(E("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new _(E("wz6CuCCJ",!0)),Tangut:()=>new _(E("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new _(E("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new _(E("g8BxB",!0)),Thai:()=>new _(E("hwD5BGb",!0)),Tibetan:()=>new _(E("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new _(E("wpL3BIBPA",!0)),Tirhuta:()=>new _(E("gklCnCJJ",!0)),Todhri:()=>new _(E("guhCzB",!0)),Tolong_Siki:()=>new _(E("wtnCrBFJ",!0)),Toto:()=>new _(E("w04De",!0)),Tulu_Tigalari:()=>new _(E("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new _(E("g8gCdCA",!0)),Unknown:()=>new _(E("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new _(E("gopBrJ",!0)),Vithkuqi:()=>new _(E("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new _(E("g24D5BGA",!0)),Warang_Citi:()=>new _(E("glmCyCNA",!0)),Yezidi:()=>new _(E("g0jCpBCCDB",!0)),Yi:()=>new _(E("ggoBskBE2B",!0)),Zanabazar_Square:()=>new _(E("gwmCnC",!0))})),q(Xn,"FOLD_CATEGORIES",new Ua({L:()=>new _(E("laA",!0)),LC:()=>new _(E("laA",!0)),Ll:()=>new _(E("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new _(E("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new _(E("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new _(E("5cgBgBlgHAB",!1)),Mn:()=>new _(E("5cgBgBlgHAB",!1)),Emoji:()=>new _(E("8mJA",!0)),Extended_Pictographic:()=>new _(E("8mJA",!0)),Lowercase:()=>new _(E("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new _(E("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new _(E("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),q(Xn,"FOLD_SCRIPT",new Ua({Common:()=>new _(E("8cgBgB",!1)),Greek:()=>new _(E("1FwUwU",!1)),Inherited:()=>new _(E("5cgBgBlgHAB",!1))})),Xn),De,ee=(De=class{static isUnsearchable(e){return e===De.RUNE_ERROR||e>=De.MIN_HIGH_SURROGATE&&e<=De.MAX_LOW_SURROGATE}static is32(e,t){let n=0,s=e.length;for(;n<s;){const i=n+Math.floor((s-n)/2),o=e.getLo(i),a=e.getHi(i);if(o<=t&&t<=a){const u=e.getStride(i);return(t-o)%u===0}t<o?s=i:n=i+1}return!1}static is(e,t){if(t<=De.MAX_LATIN1){for(let n=0;n<e.length;n++){if(t>e.getHi(n))continue;const s=e.getLo(n);if(t<s)return!1;const i=e.getStride(n);return(t-s)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&De.is32(e,t)}static isPrint(e){return e<=De.MAX_LATIN1?e>=32&&e<De.MAX_ASCII||e>=161&&e!==173:De.is(Ft.Print,e)}static simpleFold(e){if(Ft.CASE_ORBIT.has(e))return Ft.CASE_ORBIT.get(e);if(e<=De.MAX_ASCII){const t=M.toLowerCase(e);return t!==e?t:M.toUpperCase(e)}return e}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=De.MAX_ASCII&&t<=De.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let n=De.simpleFold(e);n!==e;n=De.simpleFold(n))if(n===t)return!0;return!1}},q(De,"MAX_RUNE",1114111),q(De,"RUNE_ERROR",65533),q(De,"MAX_ASCII",127),q(De,"MAX_LATIN1",255),q(De,"MAX_BMP",65535),q(De,"MIN_FOLD",65),q(De,"MAX_FOLD",125251),q(De,"MIN_HIGH_SURROGATE",55296),q(De,"MAX_HIGH_SURROGATE",56319),q(De,"MIN_LOW_SURROGATE",56320),q(De,"MAX_LOW_SURROGATE",57343),q(De,"MIN_SUPPLEMENTARY_CODE_POINT",65536),De);const AB=256,Kg=new Uint8Array(AB);for(let r=0;r<AB;r++)Kg[r]=97<=r&&r<=122||65<=r&&r<=90||48<=r&&r<=57||r===95?1:0;let ul=null,cl=null;var Le,X=(Le=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||Object.prototype.toString.call(e)==="[object Uint8Array]"}static isalnum(e){return M.CODES[0]<=e&&e<=M.CODES[9]||M.CODES.a<=e&&e<=M.CODES.z||M.CODES.A<=e&&e<=M.CODES.Z}static unhex(e){return M.CODES[0]<=e&&e<=M.CODES[9]?e-M.CODES[0]:M.CODES.a<=e&&e<=M.CODES.f?e-M.CODES.a+10:M.CODES.A<=e&&e<=M.CODES.F?e-M.CODES.A+10:-1}static escapeRune(e){let t="";if(ee.isPrint(e))Le.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case M.CODES['"']:t+='\\"';break;case M.CODES["\\"]:t+="\\\\";break;case M.CODES["	"]:t+="\\t";break;case M.CODES[`
`]:t+="\\n";break;case M.CODES["\r"]:t+="\\r";break;case M.CODES["\b"]:t+="\\b";break;case M.CODES["\f"]:t+="\\f";break;default:{let n=e.toString(16);e<256?(t+="\\x",n.length===1&&(t+="0"),t+=n):t+=`\\x{${n}}`;break}}return t}static stringToRunes(e){const t=String(e),n=[];let s=0;for(;s<t.length;){const i=t.codePointAt(s);n.push(i),s+=i>ee.MAX_BMP?2:1}return new Int32Array(n)}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<AB?Kg[e]===1:!1}static emptyOpContext(e,t){let n=0;return e<0&&(n|=Le.EMPTY_BEGIN_TEXT|Le.EMPTY_BEGIN_LINE),e===10&&(n|=Le.EMPTY_BEGIN_LINE),t<0&&(n|=Le.EMPTY_END_TEXT|Le.EMPTY_END_LINE),t===10&&(n|=Le.EMPTY_END_LINE),Le.isWordRune(e)!==Le.isWordRune(t)?n|=Le.EMPTY_WORD_BOUNDARY:n|=Le.EMPTY_NO_WORD_BOUNDARY,n}static quoteMeta(e){return e.split("").map(t=>Le.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>ee.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return ul||(ul=new TextEncoder),ul.encode(e);{let t=[],n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===ee.MIN_HIGH_SURROGATE&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===ee.MIN_LOW_SURROGATE?(i=ee.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){cl||(cl=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return cl.decode(t)}else{let t=[],n=0,s=0;for(;n<e.length;){let i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[n++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[n++],a=e[n++],u=e[n++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-ee.MIN_SUPPLEMENTARY_CODE_POINT;t[s++]=String.fromCharCode(ee.MIN_HIGH_SURROGATE+(l>>10)),t[s++]=String.fromCharCode(ee.MIN_LOW_SURROGATE+(l&1023))}else{let o=e[n++],a=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")}}},q(Le,"METACHARACTERS","\\.+*?()|[]{}^$"),q(Le,"EMPTY_BEGIN_LINE",1),q(Le,"EMPTY_END_LINE",2),q(Le,"EMPTY_BEGIN_TEXT",4),q(Le,"EMPTY_END_TEXT",8),q(Le,"EMPTY_WORD_BOUNDARY",16),q(Le,"EMPTY_NO_WORD_BOUNDARY",32),q(Le,"EMPTY_ALL",-1),Le);const zg=(r=[],e=0)=>{const t=Object.create(null);for(let n=0;n<r.length;n++){const s=r[n],i=e+n;t[s]=i,t[i]=s}return Object.freeze(t)};var cr,hs=(cr=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===cr.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===cr.Encoding.UTF_16}},q(cr,"Encoding",zg(["UTF_16","UTF_8"])),cr),Mf=class extends hs{constructor(r=null){super(),this.bytes=r}getEncoding(){return hs.Encoding.UTF_8}asCharSequence(){return X.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},zT=class extends hs{constructor(r=null){super(),this.charSequence=r}getEncoding(){return hs.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return X.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},Xr=class{static utf16(r){return new zT(r)}static utf8(r){return X.isByteArray(r)?new Mf(r):new Mf(X.stringToUtf8ByteArray(r))}},Dt=class{static EOF(){return-8}constructor(){this.start=0,this.end=0}canCheckPrefix(){return!0}endPos(){return this.end-this.start}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},zt,QT=(zt=class extends Dt{constructor(e,t=0,n=e.length){super(),this.bytes=e,this.start=t,this.end=n}hasString(e,t){const n=e.bytes;if(n.length===0)return!0;const s=this.indexOf(this.bytes,n,this.start+t);return s!==-1&&s<=this.end-n.length}hasAnyString(e,t){return e.automaton8().searchUTF8(this.bytes,this.start+t,this.end)}step(e){if(e+=this.start,e>=this.end)return Dt.EOF();const t=this.bytes[e]&255;if(t<128)return t<<3|1;let n,s,i=128,o=191;if(t>=194&&t<=223)n=2,s=t&31;else if(t>=224&&t<=239)n=3,s=t&15,t===224?i=160:t===237&&(o=159);else if(t>=240&&t<=244)n=4,s=t&7,t===240?i=144:t===244&&(o=143);else return zt.RUNE_ERROR_STEP;if(e+n>this.end)return zt.RUNE_ERROR_STEP;const a=this.bytes[e+1]&255;if(a<i||a>o)return zt.RUNE_ERROR_STEP;if(s=s<<6|a&63,n>2){const u=this.bytes[e+2]&255;if((u&192)!==128)return zt.RUNE_ERROR_STEP;if(s=s<<6|u&63,n>3){const l=this.bytes[e+3]&255;if((l&192)!==128)return zt.RUNE_ERROR_STEP;s=s<<6|l&63}}return s<<3|n}index(e,t){t+=this.start;const n=this.indexOf(this.bytes,e.prefixUTF8,t);return n<0?n:n-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let s=e-1;if(t=this.bytes[s--],t>=128){let i=e-4;for(i<this.start&&(i=this.start);s>=i&&(this.bytes[s]&192)===128;)s--;s<this.start&&(s=this.start);const o=this.step(s-this.start);t=s+(o&7)===e?o>>3:ee.RUNE_ERROR}}const n=e<this.end?this.step(e-this.start)>>3:-1;return X.emptyOpContext(t,n)}indexOf(e,t,n=0){let s=t.length;if(s===0)return n<=this.end?n:-1;const i=t[0];let o=this.end-s;const a=typeof e.indexOf=="function";let u=n;for(;u<=o;){if(a){if(u=e.indexOf(i,u),u===-1||u>o)return-1}else{for(;u<=o&&e[u]!==i;)u++;if(u>o)return-1}let l=!0;for(let B=1;B<s;B++)if(e[u+B]!==t[B]){l=!1;break}if(l)return u;u++}return-1}prefixLength(e){return e.prefixUTF8.length}},q(zt,"RUNE_ERROR_STEP",ee.RUNE_ERROR<<3|1),zt),WT=class extends Dt{constructor(r,e=0,t=r.length){super(),this.charSequence=r,this.start=e,this.end=t}hasString(r,e){const t=this.charSequence.indexOf(r.str,this.start+e);return t!==-1&&t<=this.end-r.str.length}hasAnyString(r,e){return r.automaton16().searchUTF16(this.charSequence,this.start+e,this.end)}step(r){if(r+=this.start,r>=this.end)return Dt.EOF();const e=this.charSequence.charCodeAt(r);if(e<ee.MIN_HIGH_SURROGATE||e>ee.MAX_HIGH_SURROGATE||r+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(r+1);return t>=ee.MIN_LOW_SURROGATE&&t<=ee.MAX_LOW_SURROGATE?(e-ee.MIN_HIGH_SURROGATE)*1024+(t-ee.MIN_LOW_SURROGATE)+ee.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(r,e){e+=this.start;const t=this.charSequence.indexOf(r.prefix,e);return t<0||t>this.end-r.prefix.length?-1:t-e}context(r){r+=this.start;const e=r>this.start&&r<=this.end?this.charSequence.charCodeAt(r-1):-1,t=r<this.end?this.charSequence.charCodeAt(r):-1;return X.emptyOpContext(e,t)}prefixLength(r){return r.prefix.length}},Fe=class{static fromUTF8(r,e=0,t=r.length){return new QT(r,e,t)}static fromUTF16(r,e=0,t=r.length){return new WT(r,e,t)}},ia=class extends Error{constructor(r){super(r),this.name="RE2JSException"}},Pe=class extends ia{constructor(r,e=null){let t=`error parsing regexp: ${r}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=r,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},ll=class extends ia{constructor(r){super(r),this.name="RE2JSCompileException"}},Tt=class extends ia{constructor(r){super(r),this.name="RE2JSGroupException"}},$T=class extends ia{constructor(r){super(r),this.name="RE2JSFlagsException"}},vu=class extends ia{constructor(r){super(r),this.name="RE2JSInternalException"}},ts,Gf=(ts=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{const s=n.codePointAt(0);return s===M.CODES["\\"]||s===M.CODES.$?`\\${n}`:n}).join(""):e.indexOf("$")<0?e:e.split("").map(n=>n.codePointAt(0)===M.CODES.$?"$$":n).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.hasNamedGroups=Object.keys(this.namedGroups).length>0,this.numberOfInstructions=n.numberOfInstructions(),this.lookbehindState=null,t instanceof hs?this.resetMatcherInput(t):X.isByteArray(t)?this.resetMatcherInput(Xr.utf8(t)):this.resetMatcherInput(Xr.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof hs||(X.isByteArray(e)?e=Xr.utf8(e):e=Xr.utf16(e)),this.matcherInput=e,this.lookbehindState!==null?this.lookbehindState.reset():this.lookbehindState=this.patternInput.re2().createLookbehindState(),this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Tt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Tt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new Tt(`group '${e}' not found`);e=s}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new Tt("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(!Number.isInteger(e)||e<0||e>this.patternGroupCount)throw new Tt(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new Tt("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount,this.lookbehindState);if(!n[0])throw new Tt("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,H.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,H.ANCHOR_START)}find(e=null){if(e!==null){if(!Number.isInteger(e)||e<0||e>this.matcherInputLength)throw new Tt(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?Fe.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):Fe.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,H.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1,this.lookbehindState);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?X.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const s=this.start(),i=this.end();return this.appendPos<s&&(n+=this.substring(this.appendPos,s)),this.appendPos=i,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const s=e.length;let i=0;for(;i<s;){const o=e.codePointAt(i);if(o===M.CODES["\\"]){if(n<i&&(t+=e.substring(n,i)),i++,i>=s)throw new Tt("character to be escaped is missing");n=i,i++;continue}if(o===M.CODES.$){if(n<i&&(t+=e.substring(n,i)),i+1>=s)throw new Tt("Illegal group reference: group index is missing");const a=e.codePointAt(i+1);if(M.CODES[0]<=a&&a<=M.CODES[9]){let u=a-M.CODES[0],l=i+2;for(;l<s;l++){const d=e.codePointAt(l);if(d<M.CODES[0]||d>M.CODES[9]||u*10+d-M.CODES[0]>this.patternGroupCount)break;u=u*10+d-M.CODES[0]}if(u>this.patternGroupCount)throw new Tt(`n > number of groups: ${u}`);const B=this.group(u);B!==null&&(t+=B),i=l,n=i}else if(a===M.CODES["{"]){let u=i+2;for(;u<s&&e.codePointAt(u)!==M.CODES["}"];)u++;if(u>=s)throw new Tt("named capture group is missing trailing '}'");const l=e.substring(i+2,u),B=this.group(l);B!==null&&(t+=B),i=u+1,n=i}else throw new Tt("Illegal group reference");continue}i++}return n<s&&(t+=e.substring(n,s)),t}appendReplacementInternalJs(e){const t=o=>o>=48&&o<=57,n=this.patternGroupCount;let s="",i=0;for(;i<e.length;){const o=e.indexOf("$",i);if(o<0)break;s+=e.substring(i,o),i=o;const a=e.charCodeAt(i+1);if(a===M.CODES.$)s+="$",i+=2;else if(a===M.CODES["&"])s+=this.group(0),i+=2;else if(a===M.CODES["`"])s+=this.substring(0,this.start(0)),i+=2;else if(a===M.CODES["'"])s+=this.substring(this.end(0),this.matcherInputLength),i+=2;else if(t(a)){let u=1,l=a-48;const B=e.charCodeAt(i+2);if(t(B)&&l*10+B-48<=n&&(u=2,l=l*10+B-48),l>=1&&l<=n){const d=this.group(l);d!==null&&(s+=d)}else s+=e.substring(i,i+1+u);i+=1+u}else if(a===M.CODES["<"]&&this.hasNamedGroups){const u=e.indexOf(">",i+2);if(u<0)s+="$<",i+=2;else{const l=e.substring(i+2,u);if(Object.prototype.hasOwnProperty.call(this.namedGroups,l)){const B=this.group(l);B!==null&&(s+=B)}i=u+1}}else s+="$",i+=1}return s+e.substring(i)}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,n=!1){let s="";this.reset();const i=typeof e=="function";let o=null;if(i){if(this.groupCount()>=ts.MAX_REPLACER_ARGS)throw new Tt("Too many capture groups to safely invoke replacer function");o=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(e,o):this.appendReplacement(e,n),!!t););return s+=this.appendTail(),s}appendReplacementFunc(e,t){let n="";const s=this.start(),i=this.end();this.appendPos<s&&(n+=this.substring(this.appendPos,s)),this.appendPos=i;const o=this.matchArray();return o.push(s,t),this.hasNamedGroups&&o.push(this.namedGroupsObject()),n+=String(e(...o)),n}matchArray(){const e=[this.group(0)];for(let t=1;t<=this.patternGroupCount;t++){const n=this.group(t);e.push(n===null?void 0:n)}return e}namedGroupsObject(){if(!this.hasNamedGroups)return;const e=this.getNamedGroups();for(const t in e)e[t]===null&&(e[t]=void 0);return e}},q(ts,"MAX_REPLACER_ARGS",65535),ts),pe,x=(pe=class{static isRuneOp(e){return pe.RUNE<=e&&e<=pe.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=X.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=new Int32Array(0),this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&H.FOLD_CASE?ee.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&H.FOLD_CASE?ee.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case pe.ALT:return`alt -> ${this.out}, ${this.arg}`;case pe.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case pe.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case pe.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case pe.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case pe.FAIL:return"fail";case pe.NOP:return`nop -> ${this.out}`;case pe.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case pe.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case pe.RUNE:return this.runes===null?"rune <null>":["rune ",pe.escapeRunes(this.runes),this.arg&H.FOLD_CASE?"/i":""," -> ",this.out].join("");case pe.RUNE1:return`rune1 ${pe.escapeRunes(this.runes)} -> ${this.out}`;case pe.RUNE_ANY:return`any -> ${this.out}`;case pe.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},q(pe,"ALT",1),q(pe,"ALT_MATCH",2),q(pe,"CAPTURE",3),q(pe,"EMPTY_WIDTH",4),q(pe,"FAIL",5),q(pe,"MATCH",6),q(pe,"NOP",7),q(pe,"RUNE",8),q(pe,"RUNE1",9),q(pe,"RUNE_ANY",10),q(pe,"RUNE_ANY_NOT_NL",11),q(pe,"LB_WRITE",12),q(pe,"LB_CHECK",13),pe),ns,Uf=(ns=class{constructor(e){this.sparse=new Int32Array(e),this.densePcs=new Int32Array(e),this.denseCaps=null,this.size=0,this.ncap=0,this.mainThreads=0}init(e){this.ncap=e;const t=Math.min(this.densePcs.length,ns.INITIAL_THREADS)*e;(!this.denseCaps||this.denseCaps.length<t)&&(this.denseCaps=new Int32Array(t))}growCaps(e){const t=this.densePcs.length*this.ncap,n=new Int32Array(Math.min(t,Math.max(e,2*this.denseCaps.length)));n.set(this.denseCaps),this.denseCaps=n}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.densePcs[t]=e,t}clear(){this.size=0,this.mainThreads=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}},q(ns,"INITIAL_THREADS",32),ns),YT=class{constructor(r){this.pos=-1,this.pcs=new Int32Array(r.numInst()),this.size=0,this.lbTable=new Int32Array(r.numLb+1)}reset(){this.pos=-1,this.size=0}},XT=class Qg{static fromRE2(e){const t=new Qg;return t.prog=e.prog,t.re2=e,t.q0=new Uf(t.prog.numInst()),t.q1=new Uf(t.prog.numInst()),t.addStack=new Int32Array(2*(t.prog.numInst()+1)),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.addStack=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?X.emptyInts():X.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n,s=null){const i=this.re2.cond;if(i===X.EMPTY_ALL||(n===H.ANCHOR_START||n===H.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);const o=this.prog.numLb>0,a=t;let u=t,l=!1;o&&(s!==null&&s.pos>=0&&s.pos<=t?(u=s.pos,l=!0):u=0);let B=o&&s!==null,d=this.q0,C=this.q1,g=e.step(u),m=g>>3,w=g&7,S=-1,G=0;g!==Dt.EOF()&&(g=e.step(u+w),S=g>>3,G=g&7);let j;for(u===0?j=X.emptyOpContext(-1,m):j=e.context(u),o&&(l?this.restoreLookbehinds(s,d,j):this.spawnLookbehinds(d,u,j));;){if(d.mainThreads===0){if(i&X.EMPTY_BEGIN_TEXT&&u!==0||(n===H.ANCHOR_START||n===H.ANCHOR_BOTH)&&u!==0||this.matched)break;if(this.prog.numLb===0&&d.isEmpty()&&this.re2.prefix.length!==0&&S!==this.re2.prefixRune&&e.canCheckPrefix()){const ce=e.index(this.re2,u);if(ce<0)break;u+=ce,g=e.step(u),m=g>>3,w=g&7,g=e.step(u+w),S=g>>3,G=g&7,j=e.context(u)}}u>=a&&(B&&(this.saveLookbehinds(s,d,u),B=!1),!this.matched&&(u===0||n===H.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=u),this.add(d,this.prog.start,u,this.matchcap,0,j)));const Y=u+w;if(j=e.context(Y),this.step(d,C,u,Y,m,j,n,u===e.endPos()),w===0||this.ncap===0&&this.matched)break;u+=w,m=S,w=G,m!==-1&&(g=e.step(u+w),S=g>>3,G=g&7);const re=d;d=C,C=re}return d.clear(),C.clear(),this.matched}matchSet(e,t,n){const s=this.re2.cond;if(s===X.EMPTY_ALL)return[];if((n===H.ANCHOR_START||n===H.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,a=this.q0,u=this.q1,l=e.step(i),B=l>>3,d=l&7,C=-1,g=0;l!==Dt.EOF()&&(l=e.step(i+d),C=l>>3,g=l&7);let m=i===0?X.emptyOpContext(-1,B):e.context(i);const w=new Set;for(this.prog.numLb>0&&this.spawnLookbehinds(a,i,m);!(a.mainThreads===0&&(s&X.EMPTY_BEGIN_TEXT&&i!==0||(n===H.ANCHOR_START||n===H.ANCHOR_BOTH)&&i!==0));){(i===0||n===H.UNANCHORED)&&i>=o&&this.add(a,this.prog.start,i,this.matchcap,0,m);const S=i+d;m=e.context(S);for(let j=0;j<a.size;j++){const Y=a.densePcs[j],re=this.prog.inst[Y],ce=j*this.ncap;let le=!1;switch(re.op){case x.MATCH:if(n===H.ANCHOR_BOTH&&i!==e.endPos())break;w.add(re.arg);break;case x.RUNE:le=re.matchRune(B);break;case x.RUNE1:le=B===re.runes[0];break;case x.RUNE_ANY:le=!0;break;case x.RUNE_ANY_NOT_NL:le=B!==10;break;default:continue}le&&this.add(u,re.out,S,a.denseCaps,ce,m)}if(a.clear(),d===0)break;i+=d,B=C,d=g,B!==-1&&(l=e.step(i+d),C=l>>3,g=l&7);const G=a;a=u,u=G}return u.clear(),Array.from(w).sort((S,G)=>S-G)}step(e,t,n,s,i,o,a,u){const l=this.re2.longest;for(let B=0;B<e.size;B++){const d=e.densePcs[B],C=B*this.ncap;if(l&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[C])continue;const g=this.prog.inst[d];let m=!1;switch(g.op){case x.MATCH:if(a===H.ANCHOR_BOTH&&!u)break;if(this.ncap>0&&(!l||!this.matched||this.matchcap[1]<n)){e.denseCaps[C+1]=n;for(let w=0;w<this.ncap;w++)this.matchcap[w]=e.denseCaps[C+w]}l||(e.size=0),this.matched=!0;break;case x.RUNE:m=g.matchRune(i);break;case x.RUNE1:m=i===g.runes[0];break;case x.RUNE_ANY:m=!0;break;case x.RUNE_ANY_NOT_NL:m=i!==10;break;default:continue}m&&this.add(t,g.out,s,e.denseCaps,C,o)}e.clear()}spawnLookbehinds(e,t,n){for(let s=0;s<this.prog.lbStarts.length;s++)this.add(e,this.prog.lbStarts[s],t,this.matchcap,0,n)}restoreLookbehinds(e,t,n){this.lbTable.set(e.lbTable);for(let s=0;s<e.size;s++)this.add(t,e.pcs[s],e.pos,this.matchcap,0,n)}saveLookbehinds(e,t,n){let s=0;for(let i=0;i<t.size;i++){const o=t.densePcs[i];this.prog.lbInst[o]===1&&x.isRuneOp(this.prog.inst[o].op)&&(e.pcs[s++]=o)}e.size=s,e.pos=n,e.lbTable.set(this.lbTable)}add(e,t,n,s,i,o){const a=this.addStack;let u=0;for(;;){for(;t!==0&&!e.contains(t);){const B=e.add(t),d=this.prog.inst[t];switch(d.op){case x.FAIL:t=0;break;case x.ALT:case x.ALT_MATCH:a[u++]=d.arg,a[u++]=0,t=d.out;break;case x.EMPTY_WIDTH:t=d.arg&~o?0:d.out;break;case x.NOP:t=d.out;break;case x.CAPTURE:d.arg<this.ncap&&(a[u++]=-d.arg-1,a[u++]=s[i+d.arg],s[i+d.arg]=n),t=d.out;break;case x.LB_WRITE:this.lbTable[Math.abs(d.arg)]=n,t=d.out;break;case x.LB_CHECK:d.arg>0?t=this.lbTable[d.arg]===n?d.out:0:t=this.lbTable[-d.arg]!==n?d.out:0;break;case x.MATCH:case x.RUNE:case x.RUNE1:case x.RUNE_ANY:case x.RUNE_ANY_NOT_NL:if(this.prog.lbInst[t]===0&&e.mainThreads++,this.ncap>0){const C=B*this.ncap;C+this.ncap>e.denseCaps.length&&e.growCaps(C+this.ncap);for(let g=0;g<this.ncap;g++)e.denseCaps[C+g]=s[i+g]}t=0;break;default:throw new vu("unhandled")}}if(u===0)return;u-=2;const l=a[u];l<0?(s[i-l-1]=a[u+1],t=0):t=l}}};const ZT=(r,e,t)=>{let n=-2128831035;for(let s=0;s<r.length;s++)n^=r[s],n=Math.imul(n,16777619);n^=e,n=Math.imul(n,16777619);for(let s=0;s<t.length;s++)n^=t[s],n=Math.imul(n,16777619);return n},Hf=(r,e)=>{if(r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0},qf=(r,e,t,n)=>r.flag===t&&Hf(r.nfaStates,e)&&Hf(r.matchIDs,n),Bl=[],io=-1;var Ha=class{constructor(r,e,t){this.nfaStates=r,this.flag=e,this.isMatch=(e&Wg.FLAG_MATCH)!==0,this.matchIDs=t,this.next=null,this.nextAnchored=null}},Ee,Wg=(Ee=class{constructor(e,t=8388608){this.prog=e,this.maxMem=t,this.stateCache=new Map,this.stateCount=0,this.startStates=new Map,this.failed=!1;for(let n=0;n<e.numInst();n++){const s=e.getInst(n).op;if(s===x.LB_WRITE||s===x.LB_CHECK){this.failed=!0;break}}this.computeRuneClasses(),this.stateBudget=t,this.memBudget=t}computeRuneClasses(){const e=new Set,t=(s,i)=>{e.add(s),e.add(i+1)};for(let s=0;s<this.prog.numInst();s++){const i=this.prog.getInst(s);switch(i.op){case x.RUNE:case x.RUNE1:if(i.runes.length===1){if(t(i.runes[0],i.runes[0]),i.arg&H.FOLD_CASE)for(let o=ee.simpleFold(i.runes[0]);o!==i.runes[0];o=ee.simpleFold(o))t(o,o)}else for(let o=0;o<i.runes.length;o+=2)t(i.runes[o],i.runes[o+1]);break;case x.RUNE_ANY_NOT_NL:t(10,10);break;case x.EMPTY_WIDTH:i.arg&(X.EMPTY_BEGIN_LINE|X.EMPTY_END_LINE)&&t(10,10),i.arg&(X.EMPTY_WORD_BOUNDARY|X.EMPTY_NO_WORD_BOUNDARY)&&(t(48,57),t(65,90),t(95,95),t(97,122))}}e.delete(0),this.classBounds=Int32Array.from(e).sort(),this.numClasses=this.classBounds.length+1;const n=new Int32Array(ee.MAX_LATIN1+1);for(let s=0;s<=ee.MAX_LATIN1;s++)n[s]=this.searchClass(s);this.latin1Class=n}runeClass(e){return e<=ee.MAX_LATIN1?this.latin1Class[e]:this.searchClass(e)}searchClass(e){const t=this.classBounds;let n=0,s=t.length;for(;n<s;){const i=n+s>>1;t[i]<=e?n=i+1:s=i}return n}closure(e,t){const n=new Set,s=Array.from(e);let i=0;for(;s.length>0;){const o=s.pop();if(o===0||n.has(o))continue;n.add(o);const a=this.prog.getInst(o);switch(a.op){case x.ALT:case x.ALT_MATCH:s.push(a.out),s.push(a.arg);break;case x.NOP:case x.CAPTURE:s.push(a.out);break;case x.EMPTY_WIDTH:i|=a.arg,a.arg&~t||s.push(a.out)}}return{pcs:Array.from(n).sort((o,a)=>o-a),needflags:i}}getState(e,t,n){const s=ZT(e,t,n),i=this.stateCache.get(s);if(i instanceof Ha){if(qf(i,e,t,n))return i}else if(i!==void 0){for(let u=0;u<i.length;u++)if(qf(i[u],e,t,n))return i[u]}const o=Ee.stateCost(e,n);if(this.memBudget<o)return null;this.memBudget-=o;const a=new Ha(e,t,n);return i===void 0?this.stateCache.set(s,a):i instanceof Ha?this.stateCache.set(s,[i,a]):i.push(a),this.stateCount++,a}static stateCost(e,t){const n=t.length===0?0:Ee.ARRAY_OVERHEAD+Ee.ELEMENT_SIZE*t.length;return Ee.STATE_OVERHEAD+Ee.ELEMENT_SIZE*e.length+n}*cachedStates(){for(const e of this.stateCache.values())e instanceof Ha?yield e:yield*e}makeState(e,t,n){const s=this.closure(e,t&Ee.FLAG_EMPTY_MASK);let i=t;return s.needflags===0&&(i&=Ee.FLAG_MATCH),i|=s.needflags<<Ee.FLAG_NEED_SHIFT,this.getState(s.pcs,i,n)}allocTable(e,t){const n=this.numClasses+1,s=Ee.TABLE_OVERHEAD+Ee.ELEMENT_SIZE*n;if(this.memBudget<s)return null;this.memBudget-=s;const i=new Array(n).fill(null);return t===H.UNANCHORED?e.next=i:e.nextAnchored=i,i}clearCache(){this.stateCache.clear(),this.stateCount=0,this.startStates.clear(),this.memBudget=this.stateBudget}resetCache(e){return this.clearCache(),this.getState(e.nfaStates,e.flag,e.matchIDs)}step(e,t,n,s){let i=s===H.UNANCHORED?e.next:e.nextAnchored;if(i!==null){const j=i[t];if(j!==null)return j}else if(i=this.allocTable(e,s),i===null)return null;const o=e.flag>>>Ee.FLAG_NEED_SHIFT,a=e.flag&Ee.FLAG_EMPTY_MASK;let u=a,l=0;n===10&&(u|=X.EMPTY_END_LINE,l|=X.EMPTY_BEGIN_LINE),n===io&&(u|=X.EMPTY_END_LINE|X.EMPTY_END_TEXT);const B=(e.flag&Ee.FLAG_LAST_WORD)!==0,d=n!==io&&X.isWordRune(n);u|=d===B?X.EMPTY_NO_WORD_BOUNDARY:X.EMPTY_WORD_BOUNDARY;let C=e.nfaStates;u&~a&o&&(C=this.closure(C,u).pcs);const g=[];let m=!1,w=Bl;for(let j=0;j<C.length;j++){const Y=this.prog.getInst(C[j]);Y.op===x.MATCH?(m||(m=!0,w=[]),w.push(Y.arg)):n!==io&&x.isRuneOp(Y.op)&&Y.matchRune(n)&&g.push(Y.out)}w.length>1&&w.sort((j,Y)=>j-Y),s===H.UNANCHORED&&n!==io&&g.push(this.prog.start);let S=l;m&&(S|=Ee.FLAG_MATCH),d&&(S|=Ee.FLAG_LAST_WORD);const G=this.makeState(g,S,w);return G===null?null:(i[t]=G,G)}start(e,t){const n=e.context(t);let s;if(n&X.EMPTY_BEGIN_TEXT)s=X.EMPTY_BEGIN_TEXT|X.EMPTY_BEGIN_LINE;else if(n&X.EMPTY_BEGIN_LINE)s=X.EMPTY_BEGIN_LINE;else{const o=e.step(t),a=o>=0&&X.isWordRune(o>>3);s=(n&X.EMPTY_WORD_BOUNDARY)!==0!==a?Ee.FLAG_LAST_WORD:0}let i=this.startStates.get(s);if(i===void 0){if(i=this.makeState([this.prog.start],s,Bl),i===null&&(this.clearCache(),i=this.makeState([this.prog.start],s,Bl),i===null))return null;this.startStates.set(s,i)}return i}stepOrReset(e,t,n,s,i,o){let a=this.step(e,t,n,s);if(a!==null)return a;if(o.resetPos>=0&&i-o.resetPos<Ee.PROGRESS_PER_STATE*this.stateCount)return null;o.resetPos=i;const u=this.resetCache(e);return u===null?null:(a=this.step(u,t,n,s),a)}run(e,t,n,s,i){const o=e.endPos(),a=this.latin1Class,u=n===H.UNANCHORED,l={resetPos:-1};let B=t;for(;B<o;){const d=e.step(B),C=d>>3,g=d&7;if(g===0)break;const m=C<=ee.MAX_LATIN1?a[C]:this.runeClass(C);let w=u&&s.next!==null?s.next[m]:null;if(w===null&&(w=this.stepOrReset(s,m,C,n,B,l),w===null))return null;if(s=w,s.isMatch&&i(s,!1))return!0;if(!u&&s.nfaStates.length===0)return!1;B+=g}return s=this.stepOrReset(s,this.numClasses,io,n,B,l),s===null?null:s.isMatch&&i(s,!0)}match(e,t,n){if(this.failed)return null;if((n===H.ANCHOR_START||n===H.ANCHOR_BOTH)&&t!==0)return!1;const s=this.start(e,t);return s===null?null:this.run(e,t,n,s,(i,o)=>n!==H.ANCHOR_BOTH||o)}matchSet(e,t,n){if(this.failed)return null;if((n===H.ANCHOR_START||n===H.ANCHOR_BOTH)&&t!==0)return[];const s=this.start(e,t);if(s===null)return null;const i=new Set,o=(a,u)=>{if(n!==H.ANCHOR_BOTH||u)for(let l=0;l<a.matchIDs.length;l++)i.add(a.matchIDs[l]);return!1};return this.run(e,t,n,s,o)===null?null:Array.from(i).sort((a,u)=>a-u)}},q(Ee,"FLAG_EMPTY_MASK",255),q(Ee,"FLAG_MATCH",256),q(Ee,"FLAG_LAST_WORD",512),q(Ee,"FLAG_NEED_SHIFT",16),q(Ee,"STATE_OVERHEAD",150),q(Ee,"ARRAY_OVERHEAD",40),q(Ee,"ELEMENT_SIZE",8),q(Ee,"TABLE_OVERHEAD",48),q(Ee,"PROGRESS_PER_STATE",10),Ee);const eA=32,tA=500,hl=256,nA=262144;var rA=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(hl),this.jobArg=new Uint8Array(hl),this.jobPos=new Int32Array(hl),this.jobLen=0,this.visited=new Uint32Array(0)}reset(r,e,t){this.end=e,this.jobLen=0,this.ncap=t;const n=r.numInst()*(e+1)+eA-1>>>5;this.visited.length<n?this.visited=new Uint32Array(n):this.visited.fill(0,0,n),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(r,e){const t=r*(this.end+1)+e,n=t>>>5,s=1<<(t&31);return this.visited[n]&s?!1:(this.visited[n]|=s,!0)}push(r,e,t,n){if(r.prog.getInst(e).op!==x.FAIL&&(n||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const s=this.jobPc.length*2,i=new Int32Array(s);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(s);o.set(this.jobArg),this.jobArg=o;const a=new Int32Array(s);a.set(this.jobPos),this.jobPos=a}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=n?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(r,e,t,n,s){const i=r.longest;for(this.push(r,t,n,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],a=this.jobArg[this.jobLen]===1,u=this.jobPos[this.jobLen],l=!0;for(;!(!l&&!this.shouldVisit(o,u));){l=!1;const B=r.prog.getInst(o);switch(B.op){case x.FAIL:break;case x.ALT:if(a){a=!1,o=B.arg;continue}else{this.push(r,o,u,!0),o=B.out;continue}case x.ALT_MATCH:{const d=r.prog.getInst(B.out);if(x.isRuneOp(d.op)){this.push(r,B.arg,u,!1),o=B.arg,u=this.end;continue}this.push(r,B.out,this.end,!1),o=B.out;continue}case x.RUNE:{const d=e.step(u);if(d===Dt.EOF()||!B.matchRune(d>>3))break;u+=d&7,o=B.out;continue}case x.RUNE1:{const d=e.step(u);if(d===Dt.EOF()||d>>3!==B.runes[0])break;u+=d&7,o=B.out;continue}case x.RUNE_ANY_NOT_NL:{const d=e.step(u);if(d===Dt.EOF()||d>>3===10)break;u+=d&7,o=B.out;continue}case x.RUNE_ANY:{const d=e.step(u);if(d===Dt.EOF())break;u+=d&7,o=B.out;continue}case x.CAPTURE:if(a){this.cap[B.arg]=u;break}else{B.arg<this.ncap&&(this.push(r,o,this.cap[B.arg],!0),this.cap[B.arg]=u),o=B.out;continue}case x.EMPTY_WIDTH:{const d=e.context(u);if(B.arg&~d)break;o=B.out;continue}case x.NOP:o=B.out;continue;case x.MATCH:{if(s===H.ANCHOR_BOTH&&u!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=u);const d=this.matchcap[1];if((d===-1||i&&u>0&&u>d)&&this.matchcap.set(this.cap),!i||u===this.end)return!0;break}case x.LB_WRITE:case x.LB_CHECK:throw new vu("Backtracker cannot evaluate Lookbehind instructions");default:throw new vu("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const qa=[];var ja=class $g{static shouldBacktrack(e){return e.numInst()<=tA}static maxBitStateLen(e){return $g.shouldBacktrack(e)?Math.floor(nA/e.numInst()):0}static execute(e,t,n,s,i){const o=e.cond;if(o===X.EMPTY_ALL||(s===H.ANCHOR_START||s===H.ANCHOR_BOTH)&&n!==0||o&X.EMPTY_BEGIN_TEXT&&n!==0)return null;const a=qa.length>0?qa.pop():new rA,u=t.endPos();a.reset(e.prog,u,i);let l=!1;if(o&X.EMPTY_BEGIN_TEXT||s===H.ANCHOR_START||s===H.ANCHOR_BOTH)a.ncap>0&&(a.cap[0]=n),a.tryBacktrack(e,t,e.prog.start,n,s)&&(l=!0);else{let d=-1;for(;n<=u&&d!==0;n+=d){if(e.prefix.length>0){const g=t.index(e,n);if(g<0)break;n+=g}if(a.ncap>0&&(a.cap[0]=n),a.tryBacktrack(e,t,e.prog.start,n,s)){l=!0;break}const C=t.step(n);d=C===Dt.EOF()?0:C&7}}if(!l)return qa.push(a),null;const B=i===0?[]:X.toArray(a.matchcap.subarray(0,i));return qa.push(a),B}},jf=class{constructor(r){this.sparse=new Uint32Array(r),this.dense=new Uint32Array(r),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(r){return r<this.sparse.length&&this.sparse[r]<this.size&&this.dense[this.sparse[r]]===r}insert(r){this.contains(r)||this.insertNew(r)}insertNew(r){r>=this.sparse.length||(this.sparse[r]=this.size,this.dense[this.size]=r,this.size++)}};const sA=(r,e,t,n)=>{const s=r.length,i=e.length;let o=0,a=0;const u=[],l=[];let B=!0,d=-1;const C=g=>{const m=g?r:e,w=g?o:a,S=g?t:n;return d>0&&m[w]<=u[d]?!1:(u.push(m[w],m[w+1]),g?o+=2:a+=2,d+=2,l.push(S),!0)};for(;o<s||a<i;)if(a>=i?B=C(!0):o>=s||e[a]<r[o]?B=C(!1):B=C(!0),!B)return null;return{merged:u,next:l}};var iA=class{constructor(r){this.start=r.start,this.numCap=r.numCap,this.inst=new Array(r.inst.length);for(let e=0;e<r.inst.length;e++){const t=r.inst[e],n=new x(t.op);n.out=t.out,n.arg=t.arg,n.runes=t.runes?new Int32Array(t.runes):new Int32Array(0),n.next=null,this.inst[e]=n}}};const oA=r=>{const e=new iA(r);for(let t=0;t<e.inst.length;t++){const n=e.inst[t];if(n.op!==x.ALT&&n.op!==x.ALT_MATCH)continue;let s="out",i="arg",o=e.inst[n[i]];if(o.op!==x.ALT&&o.op!==x.ALT_MATCH&&(s="arg",i="out",o=e.inst[n[i]],o.op!==x.ALT&&o.op!==x.ALT_MATCH))continue;const a=e.inst[n[s]];if(a.op===x.ALT||a.op===x.ALT_MATCH)continue;let u="out",l="arg",B=!1;o.out===t?B=!0:o.arg===t&&(B=!0,u="arg",l="out"),B&&(o[u]=n[s]),n[s]===o[u]&&(n[i]=o[l])}return e},aA=r=>{if(r.inst.length>=1e3)return null;const e=new jf(r.inst.length),t=new jf(r.inst.length),n=new Array(r.inst.length),s=new Array(r.inst.length).fill(!1),i=o=>{let a=!0;const u=r.inst[o];if(t.contains(o))return!0;switch(t.insert(o),u.op){case x.ALT:case x.ALT_MATCH:{a=i(u.out)&&i(u.arg);let l=s[u.out],B=s[u.arg];if(l&&B)return!1;if(B){const m=u.out;u.out=u.arg,u.arg=m;const w=l;l=B,B=w}l&&(s[o]=!0,u.op=x.ALT_MATCH);const d=n[u.out]||[],C=n[u.arg]||[],g=sA(d,C,u.out,u.arg);if(!g)return!1;n[o]=new Int32Array(g.merged),u.next=new Uint32Array(g.next);break}case x.CAPTURE:case x.EMPTY_WIDTH:case x.NOP:a=i(u.out),s[o]=s[u.out],n[o]=n[u.out]?new Int32Array(n[u.out]):new Int32Array(0),u.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(u.out);break;case x.MATCH:case x.FAIL:s[o]=u.op===x.MATCH;break;case x.RUNE:{if(s[o]=!1,u.next&&u.next.length>0)break;if(e.insert(u.out),!u.runes||u.runes.length===0){n[o]=new Int32Array(0),u.next=new Uint32Array([u.out]);break}let l=[];if(u.runes.length===1&&u.arg&H.FOLD_CASE){const B=u.runes[0];l.push(B,B);for(let d=ee.simpleFold(B);d!==B;d=ee.simpleFold(d))l.push(d,d);l.sort((d,C)=>d-C)}else for(let B=0;B<u.runes.length;B++)l.push(u.runes[B]);n[o]=new Int32Array(l),u.next=new Uint32Array(Math.floor(l.length/2)+1).fill(u.out),u.op=x.RUNE;break}case x.RUNE1:{if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out);let l=[];if(u.arg&H.FOLD_CASE){const B=u.runes[0];l.push(B,B);for(let d=ee.simpleFold(B);d!==B;d=ee.simpleFold(d))l.push(d,d);l.sort((d,C)=>d-C)}else l.push(u.runes[0],u.runes[0]);n[o]=new Int32Array(l),u.next=new Uint32Array(Math.floor(l.length/2)+1).fill(u.out),u.op=x.RUNE;break}case x.RUNE_ANY:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),n[o]=new Int32Array([0,ee.MAX_RUNE]),u.next=new Uint32Array([u.out]);break;case x.RUNE_ANY_NOT_NL:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),n[o]=new Int32Array([0,9,11,ee.MAX_RUNE]),u.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(u.out)}return a};for(e.clear(),e.insert(r.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<r.inst.length;o++)n[o]&&(r.inst[o].runes=n[o]);return r},uA=(r,e)=>{for(let t=0;t<e.inst.length;t++){const n=e.inst[t];switch(n.op){case x.ALT:case x.ALT_MATCH:case x.RUNE:break;case x.CAPTURE:case x.EMPTY_WIDTH:case x.NOP:case x.MATCH:case x.FAIL:r.inst[t].next=null;break;case x.RUNE1:case x.RUNE_ANY:case x.RUNE_ANY_NOT_NL:r.inst[t].next=null,r.inst[t].op=n.op,r.inst[t].runes=n.runes?new Int32Array(n.runes):new Int32Array(0)}}};var Jf=class Yg{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==x.EMPTY_WIDTH||!(t.arg&X.EMPTY_BEGIN_TEXT))return null;let n=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===x.ALT||e.inst[i].op===x.ALT_MATCH){n=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],a=e.inst[o.out].op;switch(o.op){case x.ALT:case x.ALT_MATCH:if(a===x.MATCH||e.inst[o.arg].op===x.MATCH)return null;break;case x.EMPTY_WIDTH:if(a===x.MATCH){if((o.arg&X.EMPTY_END_TEXT)===X.EMPTY_END_TEXT)continue;return null}break;default:if(a===x.MATCH&&n)return null}}let s=oA(e);return s=aA(s),s!==null&&uA(s,e),s}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===x.ALT_MATCH?e.out:0}static execute(e,t,n,s,i){const o=e.onepass;if(!o)return null;const a=new Int32Array(i).fill(-1);let u=!1,l=t.step(n),B=l>>3,d=l&7,C=Dt.EOF(),g=-1,m=0;l!==Dt.EOF()&&(C=t.step(n+d),C!==Dt.EOF()&&(g=C>>3,m=C&7));let w=n===0?X.emptyOpContext(-1,B):t.context(n),S=o.start,G;for(;;){switch(G=o.inst[S],S=G.out,G.op){case x.MATCH:return s===H.ANCHOR_BOTH&&n!==t.endPos()?null:(u=!0,a.length>0&&(a[0]=0,a[1]=n),i===0?[]:X.toArray(a));case x.RUNE:if(!G.matchRune(B))return null;break;case x.RUNE1:if(B!==G.runes[0])return null;break;case x.RUNE_ANY:break;case x.RUNE_ANY_NOT_NL:if(B===10)return null;break;case x.ALT:case x.ALT_MATCH:S=Yg.next(G,B);continue;case x.FAIL:return null;case x.NOP:continue;case x.EMPTY_WIDTH:if(G.arg&~w)return null;continue;case x.CAPTURE:G.arg<a.length&&(a[G.arg]=n);continue;default:throw new vu("bad inst")}if(d===0)break;w=X.emptyOpContext(B,g),n+=d,B=g,d=m,B!==-1&&(C=t.step(n+d),C!==Dt.EOF()?(g=C>>3,m=C&7):(g=-1,m=0))}return u?i===0?[]:X.toArray(a):null}},ne,T=(ne=class{static isPseudoOp(e){return e>=ne.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===M.CODES["-"]?"\\":""}static fromRegexp(e){const t=new ne(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=ne.emptySubs(),this.runes=new Int32Array(0),this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=ne.emptySubs(),this.runes=new Int32Array(0),this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case ne.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case ne.Op.EMPTY_MATCH:e+="(?:)";break;case ne.Op.STAR:case ne.Op.PLUS:case ne.Op.QUEST:case ne.Op.REPEAT:{const t=this.subs[0];switch(t.op>ne.Op.CAPTURE||t.op===ne.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case ne.Op.STAR:e+="*";break;case ne.Op.PLUS:e+="+";break;case ne.Op.QUEST:e+="?";break;case ne.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}"}this.flags&H.NON_GREEDY&&(e+="?");break}case ne.Op.CONCAT:for(let t of this.subs)t.op===ne.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case ne.Op.ALTERNATE:{let t="";for(let n of this.subs)e+=t,t="|",e+=n.appendTo();break}case ne.Op.LITERAL:this.flags&H.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=X.escapeRune(t);this.flags&H.FOLD_CASE&&(e+=")");break;case ne.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case ne.Op.ANY_CHAR:e+="(?s:.)";break;case ne.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case ne.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case ne.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==ne.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case ne.Op.BEGIN_TEXT:e+="\\A";break;case ne.Op.END_TEXT:this.flags&H.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case ne.Op.BEGIN_LINE:e+="^";break;case ne.Op.END_LINE:e+="$";break;case ne.Op.WORD_BOUNDARY:e+="\\b";break;case ne.Op.NO_WORD_BOUNDARY:e+="\\B";break;case ne.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===ee.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const n=this.runes[t]+1,s=this.runes[t+1]-1;e+=ne.quoteIfHyphen(n),e+=X.escapeRune(n),n!==s&&(e+="-",e+=ne.quoteIfHyphen(s),e+=X.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const n=this.runes[t],s=this.runes[t+1];e+=ne.quoteIfHyphen(n),e+=X.escapeRune(n),n!==s&&(e+="-",e+=ne.quoteIfHyphen(s),e+=X.escapeRune(s))}e+="]";break;default:e+=this.op}return e}maxCap(){let e=0;if(this.op===ne.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const n=t.maxCap();e<n&&(e=n)}return e}equals(e){if(!(e!==null&&e instanceof ne)||this.op!==e.op)return!1;switch(this.op){case ne.Op.END_TEXT:if((this.flags&H.WAS_DOLLAR)!==(e.flags&H.WAS_DOLLAR))return!1;break;case ne.Op.LITERAL:case ne.Op.CHAR_CLASS:if((this.flags&H.FOLD_CASE)!==(e.flags&H.FOLD_CASE))return!1;if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case ne.Op.ALTERNATE:case ne.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case ne.Op.STAR:case ne.Op.PLUS:case ne.Op.QUEST:if((this.flags&H.NON_GREEDY)!==(e.flags&H.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case ne.Op.REPEAT:if((this.flags&H.NON_GREEDY)!==(e.flags&H.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case ne.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case ne.Op.PLB:case ne.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1}return!0}},q(ne,"Op",zg(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),ne),RB=class{static walk(r,e){const t=[];let n=r,s;for(;;){if(n.subs.length===0)s=e.leaf(n);else{const i=e.enter(n);if(i.result===void 0){t.push({re:n,state:i,i:0}),n=n.subs[0];continue}s=i.result}for(;;){if(t.length===0)return s;const i=t[t.length-1];if(e.child(i.re,i.state,s,i.i),i.i++,i.state.result===void 0&&i.i<i.re.subs.length){n=i.re.subs[i.i];break}t.pop(),s=i.state.result!==void 0?i.state.result:e.leave(i.re,i.state)}}}},Kf=class{constructor(r,e){const t=new Map,n=[0],s=[0],i=[0],o=[0];for(const m of r){let w=0;for(let S=0;S<m.length;S++){const G=w*e+m[S];let j=t.get(G);j===void 0&&(j=n.length,t.set(G,j),n.push(w),s.push(m[S]),i.push(i[w]+1),o.push(0)),w=j}o[w]=1}const a=n.length,u=new Int32Array(a-1);for(let m=1;m<a;m++)u[m-1]=m;u.sort((m,w)=>n[m]-n[w]||s[m]-s[w]);const l=new Int32Array(a+1);for(let m=1;m<a;m++)l[n[m]+1]++;for(let m=0;m<a;m++)l[m+1]+=l[m];const B=new Int32Array(a-1);for(let m=0;m<u.length;m++)B[m]=s[u[m]];this.childStart=l,this.childUnit=B,this.childNode=u;const d=new Int32Array(a);for(let m=0;m<a;m++)d[m]=m;d.sort((m,w)=>i[m]-i[w]);const C=new Int32Array(a),g=Uint8Array.from(o);for(let m=1;m<a;m++){const w=d[m],S=n[w];if(S!==0){let G=C[S],j=this.next(G,s[w]);for(;j<0&&G!==0;)G=C[G],j=this.next(G,s[w]);C[w]=j>=0?j:0}g[w]|=g[C[w]]}this.fail=C,this.match=g}next(r,e){let t=this.childStart[r],n=this.childStart[r+1];const s=this.childUnit;for(;t<n;){const i=t+n>>1,o=s[i];if(o===e)return this.childNode[i];o<e?t=i+1:n=i}return-1}advance(r,e){for(;;){const t=this.next(r,e);if(t>=0)return t;if(r===0)return 0;r=this.fail[r]}}searchUTF16(r,e,t){let n=0;for(let s=e;s<t;s++)if(n=this.advance(n,r.charCodeAt(s)),this.match[n]===1)return!0;return!1}searchUTF8(r,e,t){let n=0;for(let s=e;s<t;s++)if(n=this.advance(n,r[s]),this.match[n]===1)return!0;return!1}},Vt,he=(Vt=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.cost=e===Vt.Type.EXACT?1:0,this.allExact=!1,this.ac16=null,this.ac8=null}automaton16(){if(this.ac16===null){const e=this.subs.map(t=>{const n=new Array(t.str.length);for(let s=0;s<t.str.length;s++)n[s]=t.str.charCodeAt(s);return n});this.ac16=new Kf(e,65536)}return this.ac16}automaton8(){return this.ac8===null&&(this.ac8=new Kf(this.subs.map(e=>e.bytes),256)),this.ac8}eval(e,t){switch(this.type){case Vt.Type.NONE:return!0;case Vt.Type.EXACT:return e.hasString(this,t);case Vt.Type.AND:for(let n=0;n<this.subs.length;n++)if(!this.subs[n].eval(e,t))return!1;return!0;case Vt.Type.OR:if(this.allExact)return e.hasAnyString(this,t);for(let n=0;n<this.subs.length;n++)if(this.subs[n].eval(e,t))return!0;return!1;default:return!0}}},q(Vt,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),q(Vt,"MAX_SCANS",32),q(Vt,"MAX_AC_UNITS",1<<18),Vt),Qt,cA=(Qt=class{static build(e){return e?RB.walk(e,Qt.WALKER):new he(he.Type.NONE)}static leaf(e){if(e.op!==T.Op.LITERAL)return new he(he.Type.NONE);if(e.runes.length===0||e.flags&H.FOLD_CASE)return new he(he.Type.NONE);let t="";for(let s=0;s<e.runes.length;s++){if(ee.isUnsearchable(e.runes[s]))return new he(he.Type.NONE);t+=String.fromCodePoint(e.runes[s])}const n=new he(he.Type.EXACT);return n.str=t,n.bytes=X.stringToUtf8ByteArray(n.str),n}static enter(e){switch(e.op){case T.Op.CAPTURE:case T.Op.PLUS:return{sub:null};case T.Op.REPEAT:return e.min>=1?{sub:null}:{result:new he(he.Type.NONE)};case T.Op.CONCAT:return{pf:new he(he.Type.AND),subs:[]};case T.Op.ALTERNATE:return{pf:new he(he.Type.OR),subs:[]};default:return{result:new he(he.Type.NONE)}}}static child(e,t,n){if(t.subs===void 0){t.sub=n;return}if(t.pf.type===he.Type.AND){if(n.type===he.Type.NONE)return;if(n.type===he.Type.AND){for(let s=0;s<n.subs.length;s++)t.subs.push(n.subs[s]);return}t.subs.push(n);return}if(n.type===he.Type.NONE){t.result=new he(he.Type.NONE);return}if(n.type===he.Type.OR){for(let s=0;s<n.subs.length;s++)t.subs.push(n.subs[s]);return}t.subs.push(n)}static leave(e,t){if(t.subs===void 0)return t.sub;const n=t.pf,s=new Set,i=[];for(const l of t.subs){if(l.type===he.Type.EXACT){if(s.has(l.str))continue;s.add(l.str)}i.push(l)}if(n.type===he.Type.AND){const l=[];let B=0;for(const d of i)B+d.cost>he.MAX_SCANS||(l.push(d),B+=d.cost);return l.length===0?new he(he.Type.NONE):l.length===1?l[0]:(n.subs=l,n.cost=B,n)}if(i.length===0)return new he(he.Type.NONE);if(i.length===1)return i[0];n.subs=i;let o=!0,a=0,u=0;for(const l of i)l.type!==he.Type.EXACT?o=!1:u+=l.bytes.length,a+=l.cost;return o?u>he.MAX_AC_UNITS?new he(he.Type.NONE):(n.allExact=!0,n.cost=1,n):a>he.MAX_SCANS?new he(he.Type.NONE):(n.cost=a,n)}},q(Qt,"WALKER",{leaf:e=>Qt.leaf(e),enter:e=>Qt.enter(e),child:(e,t,n)=>Qt.child(e,t,n),leave:(e,t)=>Qt.leave(e,t)}),Qt),qt=class{constructor(r=0,e=0){this.head=r,this.tail=e}},lA=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0,this.lbInst=null}getInst(r){return this.inst[r]}numInst(){return this.inst.length}addInst(r){this.inst.push(new x(r))}markLookbehindInsts(){const r=new Uint8Array(this.inst.length),e=this.lbStarts.slice();for(;e.length>0;){const t=e.pop();if(t===0||r[t]===1)continue;r[t]=1;const n=this.inst[t];switch(n.op){case x.ALT:case x.ALT_MATCH:e.push(n.out,n.arg);break;case x.MATCH:case x.FAIL:break;default:e.push(n.out)}}this.lbInst=r}skipNop(r){let e=this.inst[r];for(;e.op===x.NOP||e.op===x.CAPTURE;)e=this.inst[r],r=e.out;return e}prefix(){let r="",e=this.skipNop(this.start);if(!x.isRuneOp(e.op)||e.runes.length!==1)return[e.op===x.MATCH,r];for(;x.isRuneOp(e.op)&&e.runes.length===1&&!(e.arg&H.FOLD_CASE)&&!ee.isUnsearchable(e.runes[0]);)r+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===x.MATCH,r]}startCond(){let r=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case x.EMPTY_WIDTH:r|=t.arg;break;case x.FAIL:return-1;case x.CAPTURE:case x.NOP:break;default:break e}e=t.out}return r}patch(r,e){let t=r.head;for(;t!==0;){const n=this.inst[t>>1];t&1?(t=n.arg,n.arg=e):(t=n.out,n.out=e)}}append(r,e){if(r.head===0)return e;if(e.head===0)return r;const t=this.inst[r.tail>>1];return r.tail&1?t.arg=e.head:t.out=e.head,new qt(r.head,e.tail)}toString(){let r="";for(let e=0;e<this.inst.length;e++){const t=r.length;r+=e,e===this.start&&(r+="*"),r+="        ".substring(r.length-t),r+=this.inst[e],r+=`
`}return r}};const BA=new Int32Array([0,M.CODES[`
`]-1,M.CODES[`
`]+1,ee.MAX_RUNE]),zf=new Int32Array([0,ee.MAX_RUNE]);var Ja=class{constructor(r=0,e=new qt,t=!1){this.i=r,this.out=e,this.nullable=t}},hA=class xl{static compileRegexp(e){const t=new xl,n=t.compile(e);return t.prog.patch(n.out,t.newInst(x.MATCH).i),t.prog.start=n.i,t.prog.markLookbehindInsts(),t.prog}static compileSet(e){const t=new xl;if(e.length===0)return t.prog.start=t.newInst(x.FAIL).i,t.prog.markLookbehindInsts(),t.prog;let n=[];for(let i=0;i<e.length;i++){t.lbOffset=t.prog.numLb;const o=t.compile(e[i]),a=t.newInst(x.MATCH);t.prog.getInst(a.i).arg=i,t.prog.patch(o.out,a.i),n.push(o.i)}let s=n[0];for(let i=1;i<n.length;i++){const o=t.newInst(x.ALT),a=t.prog.getInst(o.i);a.out=s,a.arg=n[i],s=o.i}return t.prog.start=s,t.prog.markLookbehindInsts(),t.prog}constructor(){this.prog=new lA,this.newInst(x.FAIL),this.lbOffset=0,this.runeCache=new Map,this.walker={leaf:e=>this.leaf(e),enter:e=>this.enter(e),child:(e,t,n)=>this.child(e,t,n),leave:(e,t)=>this.leave(e,t)}}newInst(e){return this.prog.addInst(e),new Ja(this.prog.numInst()-1,new qt,!0)}nop(){const e=this.newInst(x.NOP);return e.out=new qt(e.i<<1,e.i<<1),e}fail(){return new Ja}cap(e){const t=this.newInst(x.CAPTURE);return t.out=new qt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?(this.prog.patch(e.out,0),this.prog.patch(t.out,0),this.fail()):(this.prog.patch(e.out,t.i),new Ja(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const n=this.newInst(x.ALT),s=this.prog.getInst(n.i);return s.out=e.i,s.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(x.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new qt(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new qt(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){if(e.i===0)return this.nop();const n=this.newInst(x.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new qt(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new qt(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.i===0?this.nop():e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return e.i===0?this.fail():new Ja(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(x.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new qt(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(x.RUNE);n.nullable=!1;const s=this.prog.getInst(n.i);return s.runes=e,t&=H.FOLD_CASE,(e.length!==1||ee.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,n.out=new qt(n.i<<1,n.i<<1),!(t&H.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=x.RUNE1:e.length===2&&e[0]===0&&e[1]===ee.MAX_RUNE?s.op=x.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===M.CODES[`
`]-1&&e[2]===M.CODES[`
`]+1&&e[3]===ee.MAX_RUNE&&(s.op=x.RUNE_ANY_NOT_NL),n}lookBehind(e,t){const n=Math.sign(t)*(Math.abs(t)+this.lbOffset),s=this.newInst(x.LB_WRITE);this.prog.getInst(s.i).arg=n;const i=this.rune(zf,0),o=this.star(i,!0),a=this.cat(o,e);this.prog.patch(a.out,s.i);const u=this.newInst(x.LB_CHECK);return this.prog.getInst(u.i).arg=n,this.prog.lbStarts.push(a.i),Math.abs(n)>this.prog.numLb&&(this.prog.numLb=Math.abs(n)),u.out=new qt(u.i<<1,u.i<<1),u}compile(e){return RB.walk(e,this.walker)}leaf(e){switch(e.op){case T.Op.NO_MATCH:return this.fail();case T.Op.EMPTY_MATCH:return this.nop();case T.Op.LITERAL:{if(e.runes.length===0)return this.nop();let t=null;for(let n of e.runes){let s=this.runeCache.get(n);s===void 0&&(s=new Int32Array([n]),this.runeCache.set(n,s));const i=this.rune(s,e.flags);t=t===null?i:this.cat(t,i)}return t}case T.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case T.Op.ANY_CHAR_NOT_NL:return this.rune(BA,0);case T.Op.ANY_CHAR:return this.rune(zf,0);case T.Op.BEGIN_LINE:return this.empty(X.EMPTY_BEGIN_LINE);case T.Op.END_LINE:return this.empty(X.EMPTY_END_LINE);case T.Op.BEGIN_TEXT:return this.empty(X.EMPTY_BEGIN_TEXT);case T.Op.END_TEXT:return this.empty(X.EMPTY_END_TEXT);case T.Op.WORD_BOUNDARY:return this.empty(X.EMPTY_WORD_BOUNDARY);case T.Op.NO_WORD_BOUNDARY:return this.empty(X.EMPTY_NO_WORD_BOUNDARY);case T.Op.CONCAT:case T.Op.ALTERNATE:return this.nop();default:throw new ll("regexp: unhandled case in compile")}}enter(e){switch(e.op){case T.Op.PLB:case T.Op.NLB:case T.Op.STAR:case T.Op.PLUS:case T.Op.QUEST:return{sub:null};case T.Op.CAPTURE:return{bra:this.cap(e.cap<<1),sub:null};case T.Op.CONCAT:case T.Op.ALTERNATE:return{f:null};default:throw new ll("regexp: unhandled case in compile")}}child(e,t,n){e.op===T.Op.CONCAT?t.f=t.f===null?n:this.cat(t.f,n):e.op===T.Op.ALTERNATE?t.f=t.f===null?n:this.alt(t.f,n):t.sub=n}leave(e,t){switch(e.op){case T.Op.PLB:case T.Op.NLB:return this.lookBehind(t.sub,e.lb);case T.Op.CAPTURE:{const n=this.cap(e.cap<<1|1);return this.cat(this.cat(t.bra,t.sub),n)}case T.Op.STAR:return this.star(t.sub,(e.flags&H.NON_GREEDY)!==0);case T.Op.PLUS:return this.plus(t.sub,(e.flags&H.NON_GREEDY)!==0);case T.Op.QUEST:return this.quest(t.sub,(e.flags&H.NON_GREEDY)!==0);case T.Op.CONCAT:case T.Op.ALTERNATE:return t.f;default:throw new ll("regexp: unhandled case in compile")}}},qe,dA=(qe=class{static simplify(e){return e===null?null:RB.walk(e,qe.WALKER)}static leaf(e){if(e.op===T.Op.CHAR_CLASS){if(e.runes===null)return e;if(e.runes.length===0)return new T(T.Op.NO_MATCH);if(e.runes.length===2&&e.runes[0]===0&&e.runes[1]===ee.MAX_RUNE)return new T(T.Op.ANY_CHAR);if(e.runes.length===4&&e.runes[0]===0&&e.runes[1]===M.CODES[`
`]-1&&e.runes[2]===M.CODES[`
`]+1&&e.runes[3]===ee.MAX_RUNE)return new T(T.Op.ANY_CHAR_NOT_NL)}return e}static enter(e){switch(e.op){case T.Op.PLB:case T.Op.NLB:case T.Op.CAPTURE:case T.Op.STAR:case T.Op.PLUS:case T.Op.QUEST:return{sub:null};case T.Op.CONCAT:case T.Op.ALTERNATE:return{subs:[],changed:!1};case T.Op.REPEAT:return e.min===0&&e.max===0?{result:new T(T.Op.EMPTY_MATCH)}:{sub:null};default:return{result:e}}}static child(e,t,n,s){if(t.subs===void 0){t.sub=n;return}if(n!==e.subs[s]&&(t.changed=!0),e.op===T.Op.CONCAT){if(n.op===T.Op.NO_MATCH){t.result=new T(T.Op.NO_MATCH);return}if(n.op===T.Op.EMPTY_MATCH){t.changed=!0;return}if(n.op===T.Op.CONCAT){t.changed=!0;for(let i=0;i<n.subs.length;i++)t.subs.push(n.subs[i]);return}}else{if(n.op===T.Op.NO_MATCH){t.changed=!0;return}if(n.op===T.Op.ALTERNATE){t.changed=!0;for(let i=0;i<n.subs.length;i++)t.subs.push(n.subs[i]);return}}t.subs.push(n)}static leave(e,t){switch(e.op){case T.Op.PLB:case T.Op.NLB:case T.Op.CAPTURE:{const n=t.sub;if(n!==e.subs[0]){const s=T.fromRegexp(e);return s.runes=new Int32Array(0),s.subs=[n],s}return e}case T.Op.CONCAT:case T.Op.ALTERNATE:if(t.changed){const n=t.subs;if(n.length===0)return new T(e.op===T.Op.CONCAT?T.Op.EMPTY_MATCH:T.Op.NO_MATCH);if(n.length===1)return n[0];const s=T.fromRegexp(e);return s.runes=new Int32Array(0),s.subs=n,s}return e;case T.Op.STAR:case T.Op.PLUS:case T.Op.QUEST:return qe.simplify1(e.op,e.flags,t.sub,e);case T.Op.REPEAT:return qe.simplifyRepeat(e,t.sub);default:return e}}static simplifyRepeat(e,t){if(e.max===-1){if(e.min===0)return qe.simplify1(T.Op.STAR,e.flags,t,null);if(e.min===1)return qe.simplify1(T.Op.PLUS,e.flags,t,null);const s=[];for(let i=0;i<e.min-1;i++)s.push(t);return s.push(qe.simplify1(T.Op.PLUS,e.flags,t,null)),qe.concat(s)}if(e.min===1&&e.max===1)return t;let n=null;if(e.min>0){n=[];for(let s=0;s<e.min;s++)n.push(t)}if(e.max>e.min){let s=qe.simplify1(T.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++)s=qe.simplify1(T.Op.QUEST,e.flags,qe.concat([t,s]),null);if(n===null)return s;n.push(s)}return n!==null?qe.concat(n):new T(T.Op.NO_MATCH)}static concat(e){const t=[];for(let s=0;s<e.length;s++){const i=e[s];if(i.op===T.Op.NO_MATCH)return new T(T.Op.NO_MATCH);if(i.op!==T.Op.EMPTY_MATCH){if(i.op===T.Op.CONCAT){for(let o=0;o<i.subs.length;o++)t.push(i.subs[o]);continue}t.push(i)}}if(t.length===0)return new T(T.Op.EMPTY_MATCH);if(t.length===1)return t[0];const n=new T(T.Op.CONCAT);return n.subs=t,n}static simplify1(e,t,n,s){if(n.op===T.Op.EMPTY_MATCH)return n;if(n.op===T.Op.NO_MATCH)return e===T.Op.PLUS?n:new T(T.Op.EMPTY_MATCH);if(e===n.op&&(t&H.NON_GREEDY)===(n.flags&H.NON_GREEDY))return n;if(s!==null&&s.op===e&&(s.flags&H.NON_GREEDY)===(t&H.NON_GREEDY)&&n===s.subs[0])return s;const i=new T(e);return i.flags=t,i.subs=[n],i}},q(qe,"WALKER",{leaf:e=>qe.leaf(e),enter:e=>qe.enter(e),child:(e,t,n,s)=>qe.child(e,t,n,s),leave:(e,t)=>qe.leave(e,t)}),qe),me=class{constructor(r,e){this.sign=r,this.cls=e}};const Qf=[48,57],Wf=[9,10,12,13,32,32],$f=[48,57,65,90,95,95,97,122],Yf=new Map([["\\d",new me(1,Qf)],["\\D",new me(-1,Qf)],["\\s",new me(1,Wf)],["\\S",new me(-1,Wf)],["\\w",new me(1,$f)],["\\W",new me(-1,$f)]]),Xf=[48,57,65,90,97,122],Zf=[65,90,97,122],eC=[0,127],tC=[9,9,32,32],nC=[0,31,127,127],rC=[48,57],sC=[33,126],iC=[97,122],oC=[32,126],aC=[33,47,58,64,91,96,123,126],uC=[9,13,32,32],cC=[65,90],lC=[48,57,65,90,95,95,97,122],BC=[48,57,65,70,97,102],hC=new Map([["[:alnum:]",new me(1,Xf)],["[:^alnum:]",new me(-1,Xf)],["[:alpha:]",new me(1,Zf)],["[:^alpha:]",new me(-1,Zf)],["[:ascii:]",new me(1,eC)],["[:^ascii:]",new me(-1,eC)],["[:blank:]",new me(1,tC)],["[:^blank:]",new me(-1,tC)],["[:cntrl:]",new me(1,nC)],["[:^cntrl:]",new me(-1,nC)],["[:digit:]",new me(1,rC)],["[:^digit:]",new me(-1,rC)],["[:graph:]",new me(1,sC)],["[:^graph:]",new me(-1,sC)],["[:lower:]",new me(1,iC)],["[:^lower:]",new me(-1,iC)],["[:print:]",new me(1,oC)],["[:^print:]",new me(-1,oC)],["[:punct:]",new me(1,aC)],["[:^punct:]",new me(-1,aC)],["[:space:]",new me(1,uC)],["[:^space:]",new me(-1,uC)],["[:upper:]",new me(1,cC)],["[:^upper:]",new me(-1,cC)],["[:word:]",new me(1,lC)],["[:^word:]",new me(-1,lC)],["[:xdigit:]",new me(1,BC)],["[:^xdigit:]",new me(-1,BC)]]);var Hr=class cu{static charClassToString(e,t){let n="[";for(let s=0;s<t;s+=2){s>0&&(n+=" ");const i=e[s],o=e[s+1];i===o?n+=`0x${i.toString(16)}`:n+=`0x${i.toString(16)}-0x${o.toString(16)}`}return n+="]",n}static sortRanges(e,t){const n=t>>1,s=new Array(n);for(let o=0;o<n;o++)s[o]=o;s.sort((o,a)=>e[2*o]-e[2*a]||e[2*a+1]-e[2*o+1]);const i=e.slice(0,t);for(let o=0;o<n;o++)e[2*o]=i[2*s[o]],e[2*o+1]=i[2*s[o]+1]}constructor(e=X.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.r instanceof Int32Array?this.len===this.r.length?this.r:this.r.subarray(0,this.len):new Int32Array(this.len===this.r.length?this.r:this.r.slice(0,this.len))}toGrowableArray(){return Array.isArray(this.r)?(this.r.length=this.len,this.r):Array.from(this.r.subarray(0,this.len))}cleanClass(){if(this.len<4)return this;cu.sortRanges(this.r,this.len);let e=2;for(let t=2;t<this.len;t+=2){const n=this.r[t],s=this.r[t+1];if(n<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=n,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return t&H.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let n=2;n<=4;n+=2)if(this.len>=n){const s=this.r[this.len-n],i=this.r[this.len-n+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-n]=e),t>i&&(this.r[this.len-n+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=ee.MIN_FOLD&&t>=ee.MAX_FOLD)return this.appendRange(e,t);if(t<ee.MIN_FOLD||e>ee.MAX_FOLD)return this.appendRange(e,t);e<ee.MIN_FOLD&&(this.appendRange(e,ee.MIN_FOLD-1),e=ee.MIN_FOLD),t>ee.MAX_FOLD&&(this.appendRange(ee.MAX_FOLD+1,t),t=ee.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let s=ee.simpleFold(n);s!==n;s=ee.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const s=e[n],i=e[n+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=ee.MAX_RUNE&&this.appendRange(t,ee.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),s=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(n,s);continue}for(let o=n;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const s=e.getLo(n),i=e.getHi(n),o=e.getStride(n);if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let a=s;a<=i;a+=o)t<=a-1&&this.appendRange(t,a-1),t=a+1}return t<=ee.MAX_RUNE&&this.appendRange(t,ee.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const s=this.r[n],i=this.r[n+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=ee.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=ee.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let n=e.cls;return t&&(n=new cu().appendFoldedClass(n).cleanClass().toArray()),this.appendClassWithSign(n,e.sign)}toString(){return cu.charClassToString(this.r,this.len)}},fA=class{constructor(r){this.str=r,this.position=0}pos(){return this.position}rewindTo(r){this.position=r}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(r){this.position+=r}skipString(r){this.position+=r.length}pop(){const r=this.str.codePointAt(this.position);return this.position+=X.charCount(r),r}lookingAt(r){return this.str.startsWith(r,this.position)}rest(){return this.str.substring(this.position)}from(r){return this.str.substring(r,this.position)}toString(){return this.rest()}},Q,CA=(Q=class{static unicodeTable(e){return e==="Any"?{tab:Q.ANY_TABLE,fold:Q.ANY_TABLE,sign:1}:e==="Ascii"?{tab:Q.ASCII_TABLE,fold:Q.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:Ft.CATEGORIES.get("Cn"),fold:Ft.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:Ft.CATEGORIES.get("LC"),fold:Ft.FOLD_CATEGORIES.get("LC"),sign:1}:Ft.CATEGORIES.has(e)?{tab:Ft.CATEGORIES.get(e),fold:Ft.FOLD_CATEGORIES.get(e),sign:1}:Ft.SCRIPTS.has(e)?{tab:Ft.SCRIPTS.get(e),fold:Ft.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<ee.MIN_FOLD||e>ee.MAX_FOLD)return e;let t=e;const n=e;for(e=ee.simpleFold(e);e!==n;e=ee.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===T.Op.EMPTY_MATCH)return null;if(e.op===T.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===T.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new T(T.Op.LITERAL);return n.flags=t,n.runes=X.stringToRunes(e),n}static parse(e,t){return new Q(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const n=Q.parseInt(e);if(n===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=n;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=Q.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),n<0||n>1e3||s===-2||s>1e3||s>=0&&n>s)throw new Pe(Q.ERR_INVALID_REPEAT_SIZE,e.from(t));return n<<16|s&ee.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==M.CODES._&&!X.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=M.CODES[0]&&e.peek()<=M.CODES[9];)e.skip(1);const n=e.from(t);return n.length===0||n.length>1&&n.codePointAt(0)===M.CODES[0]?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===T.Op.LITERAL&&e.runes.length===1||e.op===T.Op.CHAR_CLASS||e.op===T.Op.ANY_CHAR_NOT_NL||e.op===T.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case T.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case T.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case T.Op.ANY_CHAR_NOT_NL:return t!==M.CODES[`
`];case T.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case T.Op.ANY_CHAR:break;case T.Op.ANY_CHAR_NOT_NL:Q.matchRune(t,M.CODES[`
`])&&(e.op=T.Op.ANY_CHAR);break;case T.Op.CHAR_CLASS:{const n=new Hr(Array.isArray(e.runes)?e.runes:Array.from(e.runes));t.op===T.Op.LITERAL?n.appendLiteral(t.runes[0],t.flags):n.appendClass(t.runes),e.runes=n.toGrowableArray();break}case T.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=T.Op.CHAR_CLASS,e.runes=new Hr().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toGrowableArray()}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new Pe(Q.ERR_TRAILING_BACKSLASH);let n=e.pop();e:switch(n){case M.CODES[1]:case M.CODES[2]:case M.CODES[3]:case M.CODES[4]:case M.CODES[5]:case M.CODES[6]:case M.CODES[7]:if(!e.more()||e.peek()<M.CODES[0]||e.peek()>M.CODES[7])break;case M.CODES[0]:{let s=n-M.CODES[0];for(let i=1;i<3&&!(!e.more()||e.peek()<M.CODES[0]||e.peek()>M.CODES[7]);i++)s=s*8+e.peek()-M.CODES[0],e.skip(1);return s}case M.CODES.x:{if(!e.more())break;if(n=e.pop(),n===M.CODES["{"]){let o=0,a=0;for(;;){if(!e.more())break e;if(n=e.pop(),n===M.CODES["}"])break;const u=X.unhex(n);if(u<0||(a=a*16+u,a>ee.MAX_RUNE))break e;o++}if(o===0)break e;return a}const s=X.unhex(n);if(!e.more())break;n=e.pop();const i=X.unhex(n);if(s<0||i<0)break;return s*16+i}case M.CODES.a:return M.CODES["\x07"];case M.CODES.f:return M.CODES["\f"];case M.CODES.n:return M.CODES[`
`];case M.CODES.r:return M.CODES["\r"];case M.CODES.t:return M.CODES["	"];case M.CODES.v:return M.CODES["\v"];default:if(n<=ee.MAX_ASCII&&!X.isalnum(n))return n}throw new Pe(Q.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new Pe(Q.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?Q.parseEscape(e):e.pop()}static hasCapture(e){if(e===null)return!1;if(e.op===T.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(Q.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new T(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>Q.MAX_RUNES)throw new Pe(Q.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===T.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(Q.MAX_SIZE/this.repeats)?this.repeats=Q.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(Q.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>Q.MAX_SIZE)throw new Pe(Q.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case T.Op.LITERAL:n=e.runes.length;break;case T.Op.PLB:case T.Op.NLB:case T.Op.CAPTURE:case T.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case T.Op.PLUS:case T.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case T.Op.CONCAT:for(let s of e.subs)n=n+this.calcSize(s);break;case T.Op.ALTERNATE:for(let s of e.subs)n=n+this.calcSize(s);e.subs.length>1&&(n=n+e.subs.length-1);break;case T.Op.REPEAT:{let s=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?n=2+s:n=1+e.min*s;break}n=e.max*s+(e.max-e.min);break}}return n=Math.max(1,n),this.size===null&&(this.size=new Map),this.size.set(e,n),n}checkHeight(e){if(!(this.numRegexp<Q.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>Q.MAX_HEIGHT)throw new Pe(Q.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let n=1;for(let s of e.subs){const i=this.calcHeight(s);n<1+i&&(n=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!T.isPseudoOp(this.stack[t-1].op);)t--;return this.stack.splice(t,e-t)}push(e){if(this.numRunes+=e.runes.length,e.op===T.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=T.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===T.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&ee.simpleFold(e.runes[0])===e.runes[2]&&ee.simpleFold(e.runes[2])===e.runes[0]||e.op===T.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&ee.simpleFold(e.runes[0])===e.runes[1]&&ee.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|H.FOLD_CASE))return null;e.op=T.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|H.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const n=this.stack.length;if(n<2)return!1;const s=this.stack[n-1],i=this.stack[n-2];if(s.op!==T.Op.LITERAL||i.op!==T.Op.LITERAL||(s.flags&H.FOLD_CASE)!==(i.flags&H.FOLD_CASE))return!1;Array.isArray(i.runes)||(i.runes=Array.from(i.runes));for(let o=0;o<s.runes.length;o++)i.runes.push(s.runes[o]);return e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1)}newLiteral(e,t){const n=this.newRegexp(T.Op.LITERAL);return n.flags=t,t&H.FOLD_CASE&&(e=Q.minFoldRune(e)),n.runes=[e],n}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,n,s,i,o){let a=this.flags;if(a&H.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),a^=H.NON_GREEDY),o!==-1))throw new Pe(Q.ERR_INVALID_REPEAT_OP,i.from(o));const u=this.stack.length;if(u===0)throw new Pe(Q.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const l=this.stack[u-1];if(T.isPseudoOp(l.op))throw new Pe(Q.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const B=this.newRegexp(e);if(B.min=t,B.max=n,B.flags=a,B.subs=[l],this.stack[u-1]=B,this.checkLimits(B),e===T.Op.REPEAT&&(t>=2||n>=2)&&!this.repeatIsValid(B,1e3))throw new Pe(Q.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===T.Op.REPEAT){let n=e.max;if(n===0)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(T.Op.EMPTY_MATCH)):this.push(this.collapse(e,T.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(T.Op.NO_MATCH)):this.push(this.collapse(e,T.Op.ALTERNATE))}cleanAlt(e){e.op===T.Op.CHAR_CLASS&&(e.runes=new Hr(Array.from(e.runes)).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===ee.MAX_RUNE?(e.runes=new Int32Array(0),e.op=T.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===M.CODES[`
`]-1&&e.runes[2]===M.CODES[`
`]+1&&e.runes[3]===ee.MAX_RUNE&&(e.runes=new Int32Array(0),e.op=T.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let n=0;for(let a of e)n+=a.op===t?a.subs.length:1;let s=new Array(n).fill(null),i=0;for(let a of e)if(a.op===t){for(let u=0;u<a.subs.length;u++)s[i++]=a.subs[u];this.reuse(a)}else s[i++]=a;let o=this.newRegexp(t);if(o.subs=s,t===T.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const a=o;o=o.subs[0],this.reuse(a)}return o}factor(e){if(e.length<2)return e;let t=0,n=e.length,s=0,i=null,o=0,a=0,u=0;for(let B=0;B<=n;B++){let d=null,C=0,g=0;if(B<n){let m=e[t+B];if(m.op===T.Op.CONCAT&&m.subs.length>0&&(m=m.subs[0]),m.op===T.Op.LITERAL&&(d=m.runes,C=m.runes.length,g=m.flags&H.FOLD_CASE),g===a){let w=0;for(;w<o&&w<C&&i[w]===d[w];)w++;if(w>0){o=w;continue}}}if(B!==u)if(B===u+1)e[s++]=e[t+u];else{const m=this.newRegexp(T.Op.LITERAL);m.flags=a,m.runes=i.slice(0,o);for(let G=u;G<B;G++)e[t+G]=this.removeLeadingString(e[t+G],o),this.checkLimits(e[t+G]);const w=this.collapse(e.slice(t+u,t+B),T.Op.ALTERNATE),S=this.newRegexp(T.Op.CONCAT);S.subs=[m,w],e[s++]=S}u=B,i=d,o=C,a=g}n=s,t=0,u=0,s=0;let l=null;for(let B=0;B<=n;B++){let d=null;if(!(B<n&&(d=Q.leadingRegexp(e[t+B]),l!==null&&l.equals(d)&&(Q.isCharClass(l)||l.op===T.Op.REPEAT&&l.min===l.max&&Q.isCharClass(l.subs[0]))))){if(B!==u)if(B===u+1)e[s++]=e[t+u];else{const C=l;for(let w=u;w<B;w++){const S=w!==u;e[t+w]=this.removeLeadingRegexp(e[t+w],S),this.checkLimits(e[t+w])}const g=this.collapse(e.slice(t+u,t+B),T.Op.ALTERNATE),m=this.newRegexp(T.Op.CONCAT);m.subs=[C,g],e[s++]=m}u=B,l=d}}n=s,t=0,u=0,s=0;for(let B=0;B<=n;B++)if(!(B<n&&Q.isCharClass(e[t+B]))){if(B!==u)if(B===u+1)e[s++]=e[t+u];else{let d=u;for(let g=u+1;g<B;g++){const m=e[t+d],w=e[t+g];(m.op<w.op||m.op===w.op&&(m.runes!==null?m.runes.length:0)<(w.runes!==null?w.runes.length:0))&&(d=g)}const C=e[t+u];e[t+u]=e[t+d],e[t+d]=C;for(let g=u+1;g<B;g++)Q.mergeCharClass(e[t+u],e[t+g]),this.reuse(e[t+g]);this.cleanAlt(e[t+u]),e[s++]=e[t+u]}B<n&&(e[s++]=e[t+B]),u=B+1}n=s,t=0,u=0,s=0;for(let B=0;B<n;++B)B+1<n&&e[t+B].op===T.Op.EMPTY_MATCH&&e[t+B+1].op===T.Op.EMPTY_MATCH||(e[s++]=e[t+B]);return n=s,t=0,e.slice(t,n)}removeLeadingString(e,t){if(e.op===T.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===T.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=T.Op.EMPTY_MATCH,e.subs=T.emptySubs();break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length)}return e}return e.op===T.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=T.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===T.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=T.Op.EMPTY_MATCH,e.subs=T.emptySubs();break;case 1:{const n=e;e=e.subs[0],this.reuse(n);break}}return e}return t&&this.reuse(e),this.newRegexp(T.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&H.LITERAL)return Q.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,n=-1;const s=new fA(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case M.CODES["("]:if(this.flags&H.LOOKBEHIND){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if(this.flags&H.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(T.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case M.CODES["|"]:this.parseVerticalBar(),s.skip(1);break;case M.CODES[")"]:this.parseRightParen(),s.skip(1);break;case M.CODES["^"]:this.flags&H.ONE_LINE?this.op(T.Op.BEGIN_TEXT):this.op(T.Op.BEGIN_LINE),s.skip(1);break;case M.CODES.$:this.flags&H.ONE_LINE?this.op(T.Op.END_TEXT).flags|=H.WAS_DOLLAR:this.op(T.Op.END_LINE),s.skip(1);break;case M.CODES["."]:this.flags&H.DOT_NL?this.op(T.Op.ANY_CHAR):this.op(T.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case M.CODES["["]:this.parseClass(s);break;case M.CODES["*"]:case M.CODES["+"]:case M.CODES["?"]:{i=s.pos();let o=null;switch(s.pop()){case M.CODES["*"]:o=T.Op.STAR;break;case M.CODES["+"]:o=T.Op.PLUS;break;case M.CODES["?"]:o=T.Op.QUEST}this.repeat(o,t,n,i,s,e);break}case M.CODES["{"]:{const o=s.pos(),a=Q.parseRepeat(s);if(a<0){s.rewindTo(o),this.literal(s.pop());break}i=o,t=a>>16,n=(a&ee.MAX_BMP)<<16>>16,this.repeat(T.Op.REPEAT,t,n,i,s,e);break}case M.CODES["\\"]:{const o=s.pos();if(s.skip(1),this.flags&H.PERL_X&&s.more())switch(s.pop()){case M.CODES.A:this.op(T.Op.BEGIN_TEXT);break e;case M.CODES.b:this.op(T.Op.WORD_BOUNDARY);break e;case M.CODES.B:this.op(T.Op.NO_WORD_BOUNDARY);break e;case M.CODES.C:throw new Pe(Q.ERR_INVALID_ESCAPE,"\\C");case M.CODES.Q:{let l=s.rest();const B=l.indexOf("\\E");B>=0?(l=l.substring(0,B),s.skipString(l),s.skipString("\\E")):s.skipString(l);let d=0;for(;d<l.length;){const C=l.codePointAt(d);this.literal(C),d+=X.charCount(C)}break e}case M.CODES.z:this.op(T.Op.END_TEXT);break e;default:s.rewindTo(o)}else s.rewindTo(o);const a=this.newRegexp(T.Op.CHAR_CLASS);if(a.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const l=new Hr;if(this.parseUnicodeClass(s,l)){a.runes=l.toArray(),this.push(a);break e}}const u=new Hr;if(this.parsePerlClassEscape(s,u)){a.runes=u.toArray(),this.push(a);break e}s.rewindTo(o),this.reuse(a),this.literal(Q.parseEscape(s));break}default:this.literal(s.pop())}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new Pe(Q.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),n=e.rest();if(n.startsWith("(?P<")||n.startsWith("(?<")){const a=n.charAt(2)==="P"?4:3,u=n.indexOf(">");if(u<0)throw new Pe(Q.ERR_INVALID_NAMED_CAPTURE,n);const l=n.substring(a,u);if(e.skipString(l),e.skip(a+1),!Q.isValidCaptureName(l))throw new Pe(Q.ERR_INVALID_NAMED_CAPTURE,n.substring(0,u+1));const B=this.op(T.Op.LEFT_PAREN);if(B.cap=++this.numCap,this.namedGroups[l])throw new Pe(Q.ERR_DUPLICATE_NAMED_CAPTURE,l);this.namedGroups[l]=this.numCap,B.name=l;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const a=e.pop();switch(a){case M.CODES.i:s|=H.FOLD_CASE,o=!0;break;case M.CODES.m:s&=-17,o=!0;break;case M.CODES.s:s|=H.DOT_NL,o=!0;break;case M.CODES.U:s|=H.NON_GREEDY,o=!0;break;case M.CODES["-"]:if(i<0)break e;i=-1,s=~s,o=!1;break;case M.CODES[":"]:case M.CODES[")"]:if(i<0){if(!o)break e;s=~s}a===M.CODES[":"]&&this.op(T.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new Pe(Q.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(T.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(T.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(T.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===T.Op.VERTICAL_BAR&&Q.isCharClass(this.stack[e-1])&&Q.isCharClass(this.stack[e-3])){let t=this.stack[e-1],n=this.stack[e-3];if(t.op>n.op){const s=n;n=t,t=s,this.stack[e-3]=n}return Q.mergeCharClass(n,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],n=this.stack[e-2];if(n.op===T.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Pe(Q.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==T.Op.LEFT_PAREN)throw new Pe(Q.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(Q.hasCapture(e))throw new Pe(Q.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=T.Op.PLB:t.op=T.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=T.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const n=e.pos();if(!(this.flags&H.PERL_X)||!e.more()||e.pop()!==M.CODES["\\"]||!e.more())return!1;e.pop();const s=e.from(n),i=Yf.has(s)?Yf.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&H.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const n=e.rest(),s=n.indexOf(":]");if(s<0)return!1;const i=n.substring(0,s+2);e.skipString(i);const o=hC.has(i)?hC.get(i):null;if(o===null)throw new Pe(Q.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&H.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const n=e.pos();if(!(this.flags&H.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===M.CODES.P&&(s=-1),!e.more())throw e.rewindTo(n),new Pe(Q.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==M.CODES["{"])o=X.runeToString(i);else{const B=e.rest(),d=B.indexOf("}");if(d<0)throw e.rewindTo(n),new Pe(Q.ERR_INVALID_CHAR_RANGE,e.rest());o=B.substring(0,d),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===M.CODES["^"]&&(s=0-s,o=o.substring(1));const a=Q.unicodeTable(o);if(a===null)throw new Pe(Q.ERR_INVALID_CHAR_RANGE,e.from(n));a.sign<0&&(s=0-s);const u=a.tab,l=a.fold;if(!(this.flags&H.FOLD_CASE)||l===null)t.appendTableWithSign(u,s);else{const B=new Hr().appendTable(u).appendTable(l).cleanClass().toArray();t.appendClassWithSign(Array.from(B),s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const n=this.newRegexp(T.Op.CHAR_CLASS);n.flags=this.flags;const s=new Hr;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&H.CLASS_NL||s.appendRange(M.CODES[`
`],M.CODES[`
`]));let o=!0;for(;!e.more()||e.peek()!==M.CODES["]"]||o;){if(e.more()&&e.lookingAt("-")&&!(this.flags&H.PERL_X)&&!o){const B=e.rest();if(B==="-"||!B.startsWith("-]"))throw e.rewindTo(t),new Pe(Q.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const a=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(a)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(a);const u=Q.parseClassChar(e,t);let l=u;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(l=Q.parseClassChar(e,t),l<u)throw new Pe(Q.ERR_INVALID_CHAR_RANGE,e.from(a))}this.flags&H.FOLD_CASE?s.appendFoldedRange(u,l):s.appendRange(u,l)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),n.runes=s.toArray(),this.push(n)}},q(Q,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),q(Q,"ERR_INVALID_CHAR_RANGE","invalid character class range"),q(Q,"ERR_INVALID_ESCAPE","invalid escape sequence"),q(Q,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),q(Q,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),q(Q,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),q(Q,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),q(Q,"ERR_MISSING_BRACKET","missing closing ]"),q(Q,"ERR_MISSING_PAREN","missing closing )"),q(Q,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),q(Q,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),q(Q,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),q(Q,"ERR_UNEXPECTED_PAREN","unexpected )"),q(Q,"ERR_NESTING_DEPTH","expression nests too deeply"),q(Q,"ERR_LARGE","expression too large"),q(Q,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),q(Q,"MAX_HEIGHT",1e3),q(Q,"MAX_SIZE",1398101),q(Q,"MAX_RUNES",33554432),q(Q,"ANY_TABLE",new _(new Uint32Array([0,ee.MAX_RUNE,1]))),q(Q,"ASCII_TABLE",new _(new Uint32Array([0,127,1]))),q(Q,"ASCII_FOLD_TABLE",new _(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),Q),pA=class jr{static initTest(e){const t=jr.compile(e),n=new jr(t.expr,t.prog,t.numSubexp,t.longest);return n.cond=t.cond,n.prefix=t.prefix,n.prefixUTF8=t.prefixUTF8,n.prefixComplete=t.prefixComplete,n.prefixRune=t.prefixRune,n.prefilter=t.prefilter,n.namedGroups=t.namedGroups,n}static compile(e){return jr.compileImpl(e,H.PERL,!1)}static compilePOSIX(e){return jr.compileImpl(e,H.POSIX,!0)}static compileImpl(e,t,n){let s=CA.parse(e,t);const i=s.maxCap(),o=s.namedGroups;s=dA.simplify(s);const a=cA.build(s),u=hA.compileRegexp(s),l=new jr(e,u,i,n);l.prefilter=a.type===he.Type.NONE?null:a;const[B,d]=u.prefix();return l.prefixComplete=B,l.prefix=d,l.prefixUTF8=X.stringToUtf8ByteArray(l.prefix),l.prefix.length>0&&(l.prefixRune=l.prefix.codePointAt(0)),l.namedGroups=o,l}static match(e,t){return jr.compile(e).match(t)}constructor(e,t,n=0,s=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.namedGroups=Object.create(null),this.machinePool=[],this.lazyDFA=null,this.onepass=Jf.compile(this.prog),this.prefilter=null}get dfa(){return this.lazyDFA===null&&(this.lazyDFA=new Wg(this.prog)),this.lazyDFA}matchPrefixComplete(e,t,n,s){if((n===H.ANCHOR_START||n===H.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const a=e.prefixLength(this);if(n===H.UNANCHORED){const u=e.index(this,t);if(u<0)return null;i=t+u,o=i+a}else if(n===H.ANCHOR_BOTH){if(e.endPos()!==a||e.index(this,0)!==0)return null;i=0,o=a}else if(n===H.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=a}if(i<0)return null;if(s>0){const u=new Int32Array(s).fill(-1);return u[0]=i,u[1]=o,Array.from(u)}return[]}createLookbehindState(){return this.prog.numLb>0?new YT(this.prog):null}executeEngine(e,t,n,s,i=null){if(this.prefixComplete&&(s===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,n,s);if(this.prefilter!==null&&n===H.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return Jf.execute(this,e,t,n,s);if(s>0)return this.prog.numLb===0&&e.endPos()<=ja.maxBitStateLen(this.prog)?ja.execute(this,e,t,n,s):this.doExecuteNFA(e,t,n,s,i);if(this.prog.numLb===0){const o=this.dfa.match(e,t,n);if(o!==null)return o?[]:null;if(e.endPos()<=ja.maxBitStateLen(this.prog))return ja.execute(this,e,t,n,s)}return this.doExecuteNFA(e,t,n,s,i)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,s,i=null){let o=this.get();o||(o=XT.fromRE2(this)),o.init(s);const a=o.match(e,t,n,i)?o.submatches():null;return this.put(o),a}match(e){return this.executeEngine(Fe.fromUTF16(e),0,H.UNANCHORED,0)!==null}matchWithGroup(e,t,n,s,i,o=null){return e instanceof hs||(X.isByteArray(e)?e=Xr.utf8(e):e=Xr.utf16(e)),this.matchMachineInput(e,t,n,s,i,o)}matchMachineInput(e,t,n,s,i,o=null){if(t>n)return[!1,null];const a=e.isUTF16Encoding()?Fe.fromUTF16(e.asCharSequence(),0,n):Fe.fromUTF8(e.asBytes(),0,n),u=this.executeEngine(a,t,s,2*i,o);return u===null?[!1,null]:[!0,u]}matchUTF8(e){return this.executeEngine(Fe.fromUTF8(e),0,H.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let s=0,i=0,o="";const a=Fe.fromUTF16(e),u=this.createLookbehindState();let l=0;for(;i<=e.length;){const B=this.executeEngine(a,i,H.UNANCHORED,2,u);if(B===null||B.length===0)break;o+=e.substring(s,B[0]),(B[1]>s||B[0]===0)&&(o+=t(e.substring(B[0],B[1])),l++),s=B[1];const d=a.step(i)&7;if(i+d>B[1]?i+=d:i+1>B[1]?i++:i=B[1],l>=n)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let n=new Array(t).fill(-1);for(let s=0;s<e.length;s++)n[s]=e[s];e=n}return e}allMatches(e,t,n=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,a=0,u=-1;const l=this.createLookbehindState();for(;a<t&&o<=i;){const B=this.executeEngine(e,o,H.UNANCHORED,this.prog.numCap,l);if(B===null||B.length===0)break;let d=!0;if(B[1]===o){B[0]===u&&(d=!1);const C=e.step(o);C<0?o=i+1:o+=C&7}else o=B[1];u=B[1],d&&(s.push(n(this.pad(B))),a++)}return s}findUTF8(e){const t=this.executeEngine(Fe.fromUTF8(e),0,H.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(Fe.fromUTF8(e),0,H.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(Fe.fromUTF16(e),0,H.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(Fe.fromUTF16(e),0,H.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(Fe.fromUTF8(e),0,H.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.slice(t[2*s],t[2*s+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(Fe.fromUTF8(e),0,H.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(Fe.fromUTF16(e),0,H.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.substring(t[2*s],t[2*s+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(Fe.fromUTF16(e),0,H.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches(Fe.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return n.length===0?null:n}findAllUTF8Index(e,t){const n=this.allMatches(Fe.fromUTF8(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAll(e,t){const n=this.allMatches(Fe.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return n.length===0?null:n}findAllIndex(e,t){const n=this.allMatches(Fe.fromUTF16(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches(Fe.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches(Fe.fromUTF8(e),t);return n.length===0?null:n}findAllSubmatch(e,t){const n=this.allMatches(Fe.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches(Fe.fromUTF16(e),t);return n.length===0?null:n}},gA=class Js{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let n="",s=!1,i=e.length;i===0&&(n="(?:)",s=!0);let o=!1,a=0;for(;a<i;){let l=e[a];if(l==="\\"){if(a+1<i)switch(l=e[a+1],l){case"\\":n+="\\\\",a+=2;continue;case"c":if(a+2<i){let C=e[a+2].charCodeAt(0);if(C>=65&&C<=90||C>=97&&C<=122){let g=C%32;n+="\\x",n+=(g>>4).toString(16).toUpperCase(),n+=(g&15).toString(16).toUpperCase(),a+=3,s=!0;continue}}n+="c",a+=2,s=!0;continue;case"u":if(a+2<i){if(e[a+2]==="{"){let C=a+3,g=!1,m=!1;for(;C<i;){const w=e[C];if(w==="}"){m=!0;break}if(!Js.isHexadecimal(w))break;g=!0,C++}if(m&&g){n+="\\x",a+=2,s=!0;continue}}else if(a+5<i){let C=!0;for(let g=0;g<4;g++)if(!Js.isHexadecimal(e[a+2+g])){C=!1;break}if(C){n+="\\x{"+e.substring(a+2,a+6)+"}",a+=6,s=!0;continue}}}n+="u",a+=2,s=!0;continue;case"x":{let C=!1;if(a+2<i&&e[a+2]==="{"){let g=a+3,m=!1,w=!1;for(;g<i;){const S=e[g];if(S==="}"){w=!0;break}if(!Js.isHexadecimal(S))break;m=!0,g++}w&&m&&(C=!0)}else a+3<i&&Js.isHexadecimal(e[a+2])&&Js.isHexadecimal(e[a+3])&&(C=!0);C?(n+="\\x",a+=2):(n+="x",a+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":n+="\\"+l,a+=2;continue;default:{let C=e.codePointAt(a+1);if(C>=48&&C<=57||C>=65&&C<=90||C>=97&&C<=122){let g=X.charCount(C);n+=e.substring(a+1,a+1+g),a+=g+1,s=!0}else{n+="\\";let g=X.charCount(C);n+=e.substring(a+1,a+1+g),a+=g+1}continue}}}else if(l==="/"){n+="\\/",a+=1,s=!0;continue}else if(l==="["){if(!o&&e[a+1]==="]"){n+="[^\\x00-\\x{10FFFF}]",a+=2,s=!0;continue}if(!o&&e[a+1]==="^"&&e[a+2]==="]"){n+="[\\x00-\\x{10FFFF}]",a+=3,s=!0;continue}o=!0}else if(l==="]")o=!1;else if(!o&&l==="("&&a+2<i&&e[a+1]==="?"&&e[a+2]==="<"&&a+3<i&&!"=!>)".includes(e[a+3])){n+="(?P<",a+=3,s=!0;continue}let B=e.codePointAt(a),d=X.charCount(B);n+=e.substring(a,a+d),a+=d}const u=s?n:e;return t.length>0?`(?${t})${u}`:u}};const dC=(r,e)=>{const t=r.matchArray();return t.index=r.start(0),t.input=e,t.groups=r.namedGroupsObject(),t};var Qe,vB=(Qe=class{static quote(e){return X.quoteMeta(e)}static quoteReplacement(e,t=!1){return Gf.quoteReplacement(e,t)}static translateRegExp(e){return gA.translate(e)}static compile(e,t=0){let n=e;if(t&Qe.CASE_INSENSITIVE&&(n=`(?i)${n}`),t&Qe.DOTALL&&(n=`(?s)${n}`),t&Qe.MULTILINE&&(n=`(?m)${n}`),t&-544)throw new $T("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=H.PERL;t&Qe.DISABLE_UNICODE_GROUPS&&(s&=-129),t&Qe.LOOKBEHINDS&&(s|=H.LOOKBEHIND);const i=new Qe(e,t);return i.re2Input=pA.compileImpl(n,s,(t&Qe.LONGEST_MATCH)!==0),i}static matches(e,t){return Qe.compile(e).testExact(t)}static initTest(e,t,n){if(e==null)throw new Error("pattern is null");if(n==null)throw new Error("re2 is null");const s=new Qe(e,t);return s.re2Input=n,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return X.isByteArray(e)&&(e=Xr.utf8(e)),new Gf(this,e)}test(e){return X.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=X.isByteArray(e)?Fe.fromUTF8(e):Fe.fromUTF16(e);return this.re2Input.executeEngine(t,0,H.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);return t.find()?dC(t,e):null}split(e,t=0){const n=this.matcher(e),s=[];let i=0,o=0;for(;n.find();){if(o===0&&n.end()===0){o=n.end();continue}if(t>0&&s.length===t-1)break;if(o===n.start()){if(t===0){i+=1,o=n.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.start())),o=n.end()}if(t===0&&o!==n.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.inputLength()))}return(t!==0||s.length===0&&!(o===n.inputLength()&&o>0))&&s.push(n.substring(o,n.inputLength())),s}*matchAll(e){const t=this.matcher(e);for(;t.find();)yield dC(t,e)}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},q(Qe,"CASE_INSENSITIVE",Vs.CASE_INSENSITIVE),q(Qe,"DOTALL",Vs.DOTALL),q(Qe,"MULTILINE",Vs.MULTILINE),q(Qe,"DISABLE_UNICODE_GROUPS",Vs.DISABLE_UNICODE_GROUPS),q(Qe,"LONGEST_MATCH",Vs.LONGEST_MATCH),q(Qe,"LOOKBEHINDS",Vs.LOOKBEHINDS),Qe);/**
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
 */class Xg{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}/**
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
 */let Ri="12.19.0";function mA(r){Ri=r}/**
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
 */const pr=new fB("@firebase/firestore");function Ks(){return pr.logLevel}function _A(r){pr.setLogLevel(r)}function U(r,...e){if(pr.logLevel<=fe.DEBUG){const t=e.map(bB);pr.debug(`Firestore (${Ri}): ${r}`,...t)}}function je(r,...e){if(pr.logLevel<=fe.ERROR){const t=e.map(bB);pr.error(`Firestore (${Ri}): ${r}`,...t)}}function tt(r,...e){if(pr.logLevel<=fe.WARN){const t=e.map(bB);pr.warn(`Firestore (${Ri}): ${r}`,...t)}}function bB(r){if(typeof r=="string")return r;try{return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function Z(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Zg(r,n,t)}function Zg(r,e,t){let n=`FIRESTORE (${Ri}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw je(n),new Error(n)}function J(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Zg(e,s,n)}function EA(r,e){r||Z(57014,e)}function W(r,e){return r}/**
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
 */function IA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class ec{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=IA(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function ie(r,e){return r<e?-1:r>e?1:0}function Vl(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return dl(s)===dl(i)?ie(s,i):dl(s)?1:-1}return ie(r.length,e.length)}const DA=55296,yA=57343;function dl(r){const e=r.charCodeAt(0);return e>=DA&&e<=yA}function ni(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function em(r){return r+"\0"}/**
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
 */class be{constructor(e,t){this.comparator=e,this.root=t||ct.EMPTY}insert(e,t){return new be(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ka(this.root,e,this.comparator,!0)}}class Ka{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??ct.RED,this.left=s??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new ct(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class we{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fC(this.data.getIterator())}getIteratorFrom(e){return new fC(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new we(this.comparator);return t.data=e,t}}class fC{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ks(r){return r.hasNext()?r.getNext():void 0}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends In{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */const on="__name__";class rn{constructor(e,t,n){t===void 0?t=0:t>e.length&&Z(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&Z(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=rn.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ie(e.length,t.length)}static compareSegments(e,t){const n=rn.isNumericId(e),s=rn.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?rn.extractNumericId(e).compare(rn.extractNumericId(t)):Vl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Br.fromString(e.substring(4,e.length-2))}}class ue extends rn{construct(e,t,n){return new ue(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new k(N.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const wA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Je=class zs extends rn{construct(e,t,n){return new zs(e,t,n)}static isValidIdentifier(e){return wA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zs.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===on}static keyField(){return new zs([on])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new k(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new k(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new k(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(n+=a,s++):(i(),s++)}if(i(),o)throw new k(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new zs(t)}static emptyPath(){return new zs([])}};/**
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
 */class Rt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Rt([])}unionWith(e){let t=new we(Je.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Rt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ni(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */function bu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Pr(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function PB(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function tm(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ue.fromString(e))}static fromName(e){return new K(ue.fromString(e).popFirst(5))}static empty(){return new K(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ue(e.slice()))}}/**
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
 */function SB(r,e,t){if(!t)throw new k(N.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function nm(r,e,t,n){if(e===!0&&n===!0)throw new k(N.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function CC(r){if(!K.isDocumentKey(r))throw new k(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function pC(r){if(K.isDocumentKey(r))throw new k(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function oa(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function tc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Z(12329,{type:typeof r})}function de(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new k(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=tc(r);throw new k(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function rm(r,e){if(e<=0)throw new k(N.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function $e(r,e){const t={typeString:r};return e&&(t.value=e),t}function Ts(r,e){if(!oa(r))throw new k(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new k(N.INVALID_ARGUMENT,t);return!0}/**
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
 */const gC=-62135596800,mC=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*mC);return new _e(t,n)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new k(N.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return _e._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,n;if(e>=0n)t=Number(e/1000000000n),n=Number(e%1000000000n);else{const s=e%1000000000n;s===0n?(t=Number(e/1000000000n),n=0):(t=Number(e/1000000000n-1n),n=Number(s+1000000000n))}return new _e(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new k(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new k(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<gC)throw new k(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mC}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new k(N.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ts(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gC;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:$e("string",_e._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
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
 */class sm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function TA(){return typeof atob<"u"}/**
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
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sm("Invalid base64 string: "+i):i}}(e);return new Ne(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const AA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(r){if(J(!!r,39018),typeof r=="string"){let e=0;const t=AA.exec(r);if(J(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Se(r.seconds),nanos:Se(r.nanos)}}function Se(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Fn(r){return typeof r=="string"?Ne.fromBase64String(r):Ne.fromUint8Array(r)}/**
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
 */const im="server_timestamp",om="__type__",am="__previous_value__",um="__local_write_time__";function aa(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[om])==null?void 0:n.stringValue)===im}function ua(r){const e=r.mapValue.fields[am];return aa(e)?ua(e):e}function ri(r){const e=On(r.mapValue.fields[um].timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class RA{constructor(e,t,n,s,i,o,a,u,l,B,d,C,g){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l,this.isUsingEmulator=B,this.apiKey=d,this._customHeaders=C,this.grpcFlowControlWindow=g}}const Mo="(default)";class gr{constructor(e,t){this.projectId=e,this.database=t||Mo}static empty(){return new gr("","")}get isDefaultDatabase(){return this.database===Mo}isEqual(e){return e instanceof gr&&e.projectId===this.projectId&&e.database===this.database}}function vA(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new k(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gr(r.options.projectId,e)}/**
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
 */const hr=-1;function ca(r){return r==null}function si(r){return r===0&&1/r==-1/0}function cm(r){return typeof r=="number"&&Number.isInteger(r)&&!si(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}function bA(r){return typeof r=="string"}/**
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
 */const NB="__type__",lm="__max__",ar={mapValue:{fields:{__type__:{stringValue:lm}}}},OB="__vector__",ds="value",Cn={nullValue:"NULL_VALUE"},St={booleanValue:!0},at={booleanValue:!1};function Ye(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?aa(r)?4:Bm(r)?9007199254740991:Cs(r)?10:11:Z(28295,{value:r})}function Jt(r,e,t){if(r===e)return!0;const n=Ye(r);if(n!==Ye(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ri(r).isEqual(ri(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=On(i.timestampValue),u=On(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,o){return Fn(i.bytesValue).isEqual(Fn(o.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,o){return Se(i.geoPointValue.latitude)===Se(o.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(o.geoPointValue.longitude)}(r,e);case 2:return function(i,o,a){if("integerValue"in i&&"integerValue"in o)return Se(i.integerValue)===Se(o.integerValue);let u,l;if("doubleValue"in i&&"doubleValue"in o)u=Se(i.doubleValue),l=Se(o.doubleValue);else{if(!(a!=null&&a.i))return!1;u=Se(i.integerValue??i.doubleValue),l=Se(o.integerValue??o.doubleValue)}return u===l?!!(a!=null&&a.o)||si(u)===si(l):!!(a===void 0||a.u)&&isNaN(u)&&isNaN(l)}(r,e,t);case 9:return ni(r.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>Jt(s,i,t));case 10:case 11:return function(i,o,a){const u=i.mapValue.fields||{},l=o.mapValue.fields||{};if(bu(u)!==bu(l))return!1;for(const B in u)if(u.hasOwnProperty(B)&&(l[B]===void 0||!Jt(u[B],l[B],a)))return!1;return!0}(r,e,t);default:return Z(52216,{left:r})}}function Go(r,e){return(r.values||[]).find(t=>Jt(t,e))!==void 0}function gt(r,e){if(r===e)return 0;const t=Ye(r),n=Ye(e);if(t!==n)return ie(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return ie(r.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Se(i.integerValue||i.doubleValue),u=Se(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(r,e);case 3:return _C(r.timestampValue,e.timestampValue);case 4:return _C(ri(r),ri(e));case 5:return Vl(r.stringValue,e.stringValue);case 6:return function(i,o){const a=Fn(i),u=Fn(o);return a.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const B=ie(a[l],u[l]);if(B!==0)return B}return ie(a.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ie(Se(i.latitude),Se(o.latitude));return a!==0?a:ie(Se(i.longitude),Se(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return EC(r.arrayValue,e.arrayValue);case 10:return function(i,o){var C,g,m,w;const a=i.fields||{},u=o.fields||{},l=(C=a[ds])==null?void 0:C.arrayValue,B=(g=u[ds])==null?void 0:g.arrayValue,d=ie(((m=l==null?void 0:l.values)==null?void 0:m.length)||0,((w=B==null?void 0:B.values)==null?void 0:w.length)||0);return d!==0?d:EC(l,B)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===ar.mapValue&&o===ar.mapValue)return 0;if(i===ar.mapValue)return 1;if(o===ar.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),l=o.fields||{},B=Object.keys(l);u.sort(),B.sort();for(let d=0;d<u.length&&d<B.length;++d){const C=Vl(u[d],B[d]);if(C!==0)return C;const g=gt(a[u[d]],l[B[d]]);if(g!==0)return g}return ie(u.length,B.length)}(r.mapValue,e.mapValue);default:throw Z(23264,{l:t})}}function _C(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ie(r,e);const t=On(r),n=On(e),s=ie(t.seconds,n.seconds);return s!==0?s:ie(t.nanos,n.nanos)}function EC(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=gt(t[s],n[s]);if(i!==void 0&&i!==0)return i}return ie(t.length,n.length)}function ii(r){return kl(r)}function kl(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=On(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Fn(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return K.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=kl(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${kl(t.fields[o])}`;return s+"}"}(r.mapValue):Z(61005,{value:r})}function lu(r){switch(Ye(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ua(r);return e?16+lu(e):16;case 5:return 2*r.stringValue.length;case 6:return Fn(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+lu(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Pr(n.fields,(i,o)=>{s+=i.length+lu(o)}),s}(r.mapValue);default:throw Z(13486,{value:r})}}function fs(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function an(r){return!!r&&"integerValue"in r}function Zr(r){return!!r&&"doubleValue"in r}function mr(r){return an(r)||Zr(r)}function _r(r){return!!r&&"arrayValue"in r}function Mt(r){return!!r&&"nullValue"in r}function Nt(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ss(r){return!!r&&"mapValue"in r}function Cs(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[NB])==null?void 0:n.stringValue)===OB}function Ml(r){var e,t;return(t=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[ds])==null?void 0:t.arrayValue}function Io(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Pr(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Io(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Io(r.arrayValue.values[t]);return e}return{...r}}function Bm(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===lm}const hm={mapValue:{fields:{[NB]:{stringValue:OB},[ds]:{arrayValue:{}}}}};function PA(r){return"nullValue"in r?Cn:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?fs(gr.empty(),K.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Cs(r)?hm:{mapValue:{}}:Z(35942,{value:r})}function SA(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?fs(gr.empty(),K.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?hm:"mapValue"in r?Cs(r)?{mapValue:{}}:ar:Z(61959,{value:r})}function IC(r,e){const t=gt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function DC(r,e){const t=gt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(t)}setAll(e){let t=Je.emptyPath(),n={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=a.popLast()}o?n[a.lastSegment()]=Io(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];ss(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Pr(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Ze(Io(this.value))}}function dm(r){const e=[];return Pr(r.fields,(t,n)=>{const s=new Je([t]);if(ss(n)){const i=dm(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Rt(e)}/**
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
 */function nc(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:si(e)?"-0":e}}function FB(r){return{integerValue:""+r}}function vi(r,e,t){return cm(e)?FB(e):nc(r,e)}/**
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
 */class rc{constructor(){this._=void 0}}function NA(r,e,t){return r instanceof oi?function(s,i){const o={fields:{[om]:{stringValue:im},[um]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&aa(i)&&(i=ua(i)),i&&(o.fields[am]=i),{mapValue:o}}(t,e):r instanceof ps?Cm(r,e):r instanceof gs?pm(r,e):r instanceof ms?function(s,i){const o=fm(s,i),a=Pu(o)+Pu(s.h);return an(o)&&an(s.h)?FB(a):nc(s.serializer,a)}(r,e):r instanceof ai?function(s,i){return yC(s,i,Math.min)}(r,e):r instanceof ui?function(s,i){return yC(s,i,Math.max)}(r,e):void 0}function OA(r,e,t){return r instanceof ps?Cm(r,e):r instanceof gs?pm(r,e):t}function fm(r,e){return r instanceof ms?mr(e)?e:{integerValue:0}:null}class oi extends rc{}class ps extends rc{constructor(e){super(),this.elements=e}}function Cm(r,e){const t=gm(e);for(const n of r.elements)t.some(s=>Jt(s,n))||t.push(n);return{arrayValue:{values:t}}}class gs extends rc{constructor(e){super(),this.elements=e}}function pm(r,e){let t=gm(e);for(const n of r.elements)t=t.filter(s=>!Jt(s,n));return{arrayValue:{values:t}}}class LB extends rc{constructor(e,t){super(),this.serializer=e,this.h=t}}class ms extends LB{}class ai extends LB{}class ui extends LB{}function yC(r,e,t){if(!mr(e))return r.h;const n=t(Pu(e),Pu(r.h));return an(e)&&an(r.h)?FB(n):nc(r.serializer,n)}function Pu(r){return Se(r.integerValue||r.doubleValue)}function gm(r){return _r(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class As{constructor(e,t){this.field=e,this.transform=t}}function FA(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof ps&&s instanceof ps||n instanceof gs&&s instanceof gs?ni(n.elements,s.elements,Jt):n instanceof ms&&s instanceof ms||n instanceof ai&&s instanceof ai||n instanceof ui&&s instanceof ui?Jt(n.h,s.h):n instanceof oi&&s instanceof oi}(r.transform,e.transform)}class LA{constructor(e,t){this.version=e,this.transformResults=t}}class Ve{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class sc{}function mm(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Pi(r.key,Ve.none()):new bi(r.key,r.data,Ve.none());{const t=r.data,n=Ze.empty();let s=new we(Je.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Vn(r.key,n,new Rt(s.toArray()),Ve.none())}}function xA(r,e,t){r instanceof bi?function(s,i,o){const a=s.value.clone(),u=TC(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(r,e,t):r instanceof Vn?function(s,i,o){if(!Bu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=TC(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(_m(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Do(r,e,t,n){return r instanceof bi?function(i,o,a,u){if(!Bu(i.precondition,o))return a;const l=i.value.clone(),B=AC(i.fieldTransforms,u,o);return l.setAll(B),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(r,e,t,n):r instanceof Vn?function(i,o,a,u){if(!Bu(i.precondition,o))return a;const l=AC(i.fieldTransforms,u,o),B=o.data;return B.setAll(_m(i)),B.setAll(l),o.convertToFoundDocument(o.version,B).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(r,e,t,n):function(i,o,a){return Bu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(r,e,t)}function VA(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=fm(n.transform,s||null);i!=null&&(t===null&&(t=Ze.empty()),t.set(n.field,i))}return t||null}function wC(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ni(n,s,(i,o)=>FA(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class bi extends sc{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vn extends sc{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _m(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function TC(r,e,t){const n=new Map;J(r.length===t.length,32656,{T:t.length,P:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,a=e.data.field(i.field);n.set(i.field,OA(o,a,t[s]))}return n}function AC(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,NA(i,o,e))}return n}class Pi extends sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xB extends sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Er{constructor(e,t){this.position=e,this.inclusive=t}}function RC(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=K.comparator(K.fromName(o.referenceValue),t.key):n=gt(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function vC(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Jt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Em{}class Ce extends Em{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new kA(e,t,n):t==="array-contains"?new UA(e,n):t==="in"?new Am(e,n):t==="not-in"?new HA(e,n):t==="array-contains-any"?new qA(e,n):new Ce(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new MA(e,n):new GA(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(gt(t,this.value)):t!==null&&Ye(this.value)===Ye(t)&&this.matchesComparison(gt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Te extends Em{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new Te(e,t)}matches(e){return ci(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function ci(r){return r.op==="and"}function Gl(r){return r.op==="or"}function VB(r){return Im(r)&&ci(r)}function Im(r){for(const e of r.filters)if(e instanceof Te)return!1;return!0}function Ul(r){if(r instanceof Ce)return r.field.canonicalString()+r.op.toString()+ii(r.value);if(VB(r))return r.filters.map(e=>Ul(e)).join(",");{const e=r.filters.map(t=>Ul(t)).join(",");return`${r.op}(${e})`}}function Dm(r,e){return r instanceof Ce?function(n,s){return s instanceof Ce&&n.op===s.op&&n.field.isEqual(s.field)&&Jt(n.value,s.value)}(r,e):r instanceof Te?function(n,s){return s instanceof Te&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,a)=>i&&Dm(o,s.filters[a]),!0):!1}(r,e):void Z(19439)}function ym(r,e){const t=r.filters.concat(e);return Te.create(t,r.op)}function wm(r){return r instanceof Ce?function(t){return`${t.field.canonicalString()} ${t.op} ${ii(t.value)}`}(r):r instanceof Te?function(t){return t.op.toString()+" {"+t.getFilters().map(wm).join(" ,")+"}"}(r):"Filter"}class kA extends Ce{constructor(e,t,n){super(e,t,n),this.key=K.fromName(n.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class MA extends Ce{constructor(e,t){super(e,"in",t),this.keys=Tm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class GA extends Ce{constructor(e,t){super(e,"not-in",t),this.keys=Tm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Tm(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>K.fromName(n.referenceValue))}class UA extends Ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _r(t)&&Go(t.arrayValue,this.value)}}class Am extends Ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Go(this.value.arrayValue,t)}}class HA extends Ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Go(this.value.arrayValue,t)}}class qA extends Ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_r(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Go(this.value.arrayValue,n))}}/**
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
 */class Uo{constructor(e,t="asc"){this.field=e,this.dir=t}}function jA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new _e(0,0))}static max(){return new te(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xe{constructor(e,t,n,s,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xe(e,0,te.min(),te.min(),te.min(),Ze.empty(),0)}static newFoundDocument(e,t,n,s){return new xe(e,1,t,te.min(),n,s,0)}static newNoDocument(e,t){return new xe(e,2,t,te.min(),te.min(),Ze.empty(),0)}static newUnknownDocument(e,t){return new xe(e,3,t,te.min(),te.min(),Ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */const li=-1;class Bi{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function Hl(r){return r.fields.find(e=>e.kind===2)}function Jr(r){return r.fields.filter(e=>e.kind!==2)}function JA(r,e){let t=ie(r.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let n=0;n<Math.min(r.fields.length,e.fields.length);++n)if(t=KA(r.fields[n],e.fields[n]),t!==0)return t;return ie(r.fields.length,e.fields.length)}Bi.UNKNOWN_ID=-1;class is{constructor(e,t){this.fieldPath=e,this.kind=t}}function KA(r,e){const t=Je.comparator(r.fieldPath,e.fieldPath);return t!==0?t:ie(r.kind,e.kind)}class hi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new hi(0,Ut.min())}}function Rm(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=te.fromTimestamp(n===1e9?new _e(t+1,0):new _e(t,n));return new Ut(s,K.empty(),e)}function vm(r){return new Ut(r.readTime,r.key,li)}class Ut{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ut(te.min(),K.empty(),li)}static max(){return new Ut(te.max(),K.empty(),li)}}function kB(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(r.documentKey,e.documentKey),t!==0?t:ie(r.largestBatchId,e.largestBatchId))}/**
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
 */class zA{constructor(e,t=null,n=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function ql(r,e=null,t=[],n=[],s=null,i=null,o=null){return new zA(r,e,t,n,s,i,o)}function Su(r){const e=W(r);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Ul(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),ca(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ii(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ii(n)).join(",")),e.R=t}return e.R}function MB(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!jA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Dm(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!vC(r.startAt,e.startAt)&&vC(r.endAt,e.endAt)}function yn(r){return!!r.isCorePipeline}function GB(r){return!!r.path&&K.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Nu(r,e){return r.filters.filter(t=>t instanceof Ce&&t.field.isEqual(e))}function bC(r,e,t){let n=Cn,s=!0;for(const i of Nu(r,e)){let o=Cn,a=!0;switch(i.op){case"<":case"<=":o=PA(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Cn}IC({value:n,inclusive:s},{value:o,inclusive:a})<0&&(n=o,s=a)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];IC({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function PC(r,e,t){let n=ar,s=!0;for(const i of Nu(r,e)){let o=ar,a=!0;switch(i.op){case">=":case">":o=SA(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=ar}DC({value:n,inclusive:s},{value:o,inclusive:a})>0&&(n=o,s=a)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];DC({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class kn{constructor(e,t=null,n=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function bm(r,e,t,n,s,i,o,a){return new kn(r,e,t,n,s,i,o,a)}function Si(r){return new kn(r)}function SC(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function QA(r){return K.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function UB(r){return r.collectionGroup!==null}function Zs(r){const e=W(r);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new we(Je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new Uo(i,n))}),t.has(Je.keyField().canonicalString())||e.A.push(new Uo(Je.keyField(),n))}return e.A}function Ct(r){const e=W(r);return e.V||(e.V=Sm(e,Zs(r))),e.V}function Pm(r){const e=W(r);return e.m||(e.m=Sm(e,r.explicitOrderBy)),e.m}function Sm(r,e){if(r.limitType==="F")return ql(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Uo(s.field,i)});const t=r.endAt?new Er(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Er(r.startAt.position,r.startAt.inclusive):null;return ql(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function jl(r,e){const t=r.filters.concat([e]);return new kn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function WA(r,e){const t=r.explicitOrderBy.concat([e]);return new kn(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function Ou(r,e,t){return new kn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function $A(r,e){return new kn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,e,r.endAt)}function YA(r,e){return new kn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,e)}function Nm(r,e){return MB(Ct(r),Ct(e))&&r.limitType===e.limitType}function yo(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>wm(s)).join(", ")}]`),ca(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ii(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ii(s)).join(",")),`Target(${n})`}(Ct(r))}; limitType=${r.limitType})`}function ic(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):K.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of Zs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,a,u){const l=RC(o,a,u);return o.inclusive?l<=0:l<0}(n.startAt,Zs(n),s)||n.endAt&&!function(o,a,u){const l=RC(o,a,u);return o.inclusive?l>=0:l>0}(n.endAt,Zs(n),s))}(r,e)}function oc(r){return(e,t)=>{let n=!1;for(const s of Zs(r)){const i=XA(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function XA(r,e,t){const n=r.field.isKeyField()?K.comparator(e.key,t.key):function(i,o,a){const u=o.data.field(i),l=a.data.field(i);return u!==null&&l!==null?gt(u,l):Z(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return Z(19790,{direction:r.dir})}}/**
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
 */class ZA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ze,ge;function Om(r){switch(r){case N.OK:return Z(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return Z(15467,{code:r})}}function Fm(r){if(r===void 0)return je("GRPC error has no .code"),N.UNKNOWN;switch(r){case ze.OK:return N.OK;case ze.CANCELLED:return N.CANCELLED;case ze.UNKNOWN:return N.UNKNOWN;case ze.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ze.INTERNAL:return N.INTERNAL;case ze.UNAVAILABLE:return N.UNAVAILABLE;case ze.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ze.NOT_FOUND:return N.NOT_FOUND;case ze.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ze.ABORTED:return N.ABORTED;case ze.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ze.DATA_LOSS:return N.DATA_LOSS;default:return Z(39323,{code:r})}}(ge=ze||(ze={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Pr(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return tm(this.inner)}size(){return this.innerSize}}/**
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
 */const eR=new be(K.comparator);function We(){return eR}const Lm=new be(K.comparator);function zr(...r){let e=Lm;for(const t of r)e=e.insert(t.key,t);return e}function xm(r){let e=Lm;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function jt(){return wo()}function Vm(){return wo()}function wo(){return new Mn(r=>r.toString(),(r,e)=>r.isEqual(e))}const tR=new be(K.comparator),nR=new we(K.comparator);function ae(...r){let e=nR;for(const t of r)e=e.add(t);return e}const rR=new we(ie);function HB(){return rR}/**
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
 */let To=null;function sR(r){if(To)throw new Error("a TestingHooksSpi instance is already set");To=r}/**
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
 */function km(){return new TextEncoder}/**
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
 */const iR=new Br([4294967295,4294967295],0);function NC(r){const e=km().encode(r),t=new kg;return t.update(e),new Uint8Array(t.digest())}function OC(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Br([t,n],0),new Br([s,i],0)]}class qB{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new go(`Invalid padding: ${t}`);if(n<0)throw new go(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new go(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new go(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=Br.fromNumber(this.p)}v(e,t,n){let s=e.add(t.multiply(Br.fromNumber(n)));return s.compare(iR)===1&&(s=new Br([s.getBits(0),s.getBits(1)],0)),s.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.p===0)return!1;const t=NC(e),[n,s]=OC(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,s,i);if(!this.D(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qB(i,s,t);return n.forEach(a=>o.insert(a)),o}insert(e){if(this.p===0)return;const t=NC(e),[n,s]=OC(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,s,i);this.C(o)}}C(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ni{constructor(e,t,n,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,la.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ni(te.min(),s,new be(ie),We(),We(),ae())}}class la{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new la(n,t,ae(),ae(),ae())}}/**
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
 */class hu{constructor(e,t,n,s){this.F=e,this.removedTargetIds=t,this.key=n,this.O=s}}class Mm{constructor(e,t){this.targetId=e,this.M=t}}class Gm{constructor(e,t,n=Ne.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class FC{constructor(e){this.targetId=e,this.N=0,this.L=LC(),this.B=Ne.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return this.N!==0}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=ae(),t=ae(),n=ae();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:Z(38017,{changeType:i})}}),new la(this.B,this.U,e,t,n)}G(){this.k=!1,this.L=LC()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,J(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const oo="WatchChangeAggregator";class oR{constructor(e){this.X=e,this.ee=new Map,this.te=We(),this.ne=za(),this.re=We(),this.ie=za(),this.se=new be(ie)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,t=>{const n=this.ee.get(t);if(n)switch(e.state){case 0:this.ce(t)&&n.K(e.resumeToken);break;case 1:n.Y(),n.q||n.G(),n.K(e.resumeToken);break;case 2:n.Y(),n.q||this.removeTarget(t);break;case 3:this.ce(t)&&(n.Z(),n.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),n.K(e.resumeToken));break;default:Z(56790,{state:e.state})}else U(oo,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach((n,s)=>{this.ce(s)&&t(s)})}Ee(e){var t;return yn(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:GB(e)}he(e){const t=e.targetId,n=e.M.count,s=this.Te(t);if(s){const i=s.target;if(this.Ee(i))if(n===0){const o=new K(yn(i)?ue.fromString(i.getPipelineDocuments()[0]):i.path);this.ae(t,o,xe.newNoDocument(o,te.min()))}else J(n===1,20013,"Single document existence filter with count: "+n);else{const o=this.Pe(t);if(o!==n){const a=this.Ie(e),u=a?this.Re(a,e,o):1;if(u!==0){this.le(t);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,l)}To==null||To.Ae(function(B,d,C,g,m){var G,j,Y;const w={localCacheCount:B,existenceFilterCount:d.count,databaseId:C.database,projectId:C.projectId},S=d.unchangedNames;return S&&(w.bloomFilter={applied:m===0,hashCount:(S==null?void 0:S.hashCount)??0,bitmapLength:((j=(G=S==null?void 0:S.bits)==null?void 0:G.bitmap)==null?void 0:j.length)??0,padding:((Y=S==null?void 0:S.bits)==null?void 0:Y.padding)??0,mightContain:re=>(g==null?void 0:g.mightContain(re))??!1}),w}(o,e.M,this.X.Ve(),a,u))}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=Fn(n).toUint8Array()}catch(u){if(u instanceof sm)return tt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new qB(o,s,i)}catch(u){return tt(u instanceof go?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.p===0?null:a}Re(e,t,n){return t.M.count===n-this.de(e,t.targetId)?0:2}de(e,t){const n=this.X.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.X.Ve(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.ae(t,i,null),s++)}),s}fe(e){const t=new Map;this.ee.forEach((i,o)=>{const a=this.Te(o);if(a){if(i.current&&this.Ee(a.target)){const u=yn(a.target)?ue.fromString(a.target.getPipelineDocuments()[0]):a.target.path,l=new K(u);this.me(l).has(o)||this.pe(o,l)||this.ae(o,l,xe.newNoDocument(l,e))}i.$&&(t.set(o,i.W()),i.G())}});let n=ae();this.ie.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Te(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(n=n.add(i))}),this.te.forEach((i,o)=>o.setReadTime(e)),this.re.forEach((i,o)=>o.setReadTime(e));const s=new Ni(e,t,this.se,this.te,this.re,n);return this.te=We(),this.ne=za(),this.re=We(),this.ie=za(),this.se=new be(ie),s}oe(e,t){const n=this.ee.get(e);if(!n||!this.ce(e))return void U(oo,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.pe(e,t.key)?2:0;n.j(t.key,s),yn(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,n){const s=this.ee.get(e);s&&this.ce(e)?(this.pe(e,t)?s.j(t,1):s.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),n&&(yn(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t,n):this.te=this.te.insert(t,n))):U(oo,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const n=t.W();return this.X.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}J(e){let t=this.ee.get(e);t||(U(oo,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new FC(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new we(ie),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new we(ie),this.ne=this.ne.insert(e,t)),t}ce(e){const t=this.Te(e)!==null;return t||U(oo,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return t===void 0||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new FC(e)),this.X.getRemoteKeysForTarget(e).forEach(t=>{this.ae(e,t,null)})}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function za(){return new be(K.comparator)}function LC(){return new be(K.comparator)}const aR={asc:"ASCENDING",desc:"DESCENDING"},uR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cR={and:"AND",or:"OR"};class lR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Jl(r,e){return r.useProto3Json||ca(e)?e:{value:e}}function os(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jB(r){const e=On(r);return new _e(e.seconds,e.nanos)}function Um(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function du(r,e){return os(r,e.toTimestamp())}function Ke(r){return J(!!r,49232),te.fromTimestamp(jB(r))}function JB(r,e){return Kl(r,e).canonicalString()}function Kl(r,e){const t=function(s){return new ue(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Hm(r){const e=ue.fromString(r);return J(Xm(e),10190,{key:e.toString()}),e}function di(r,e){return JB(r.databaseId,e.path)}function pn(r,e){const t=Hm(e);if(t.get(1)!==r.databaseId.projectId)throw new k(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new k(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new K(Jm(t))}function qm(r,e){return JB(r.databaseId,e)}function jm(r){const e=Hm(r);return e.length===4?ue.emptyPath():Jm(e)}function zl(r){return new ue(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Jm(r){return J(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function xC(r,e,t){return{name:di(r,e),fields:t.value.mapValue.fields}}function ac(r,e,t){const n=pn(r,e.name),s=Ke(e.updateTime),i=e.createTime?Ke(e.createTime):te.min(),o=new Ze({mapValue:{fields:e.fields}}),a=xe.newFoundDocument(n,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function BR(r,e){return"found"in e?function(n,s){J(!!s.found,43571),s.found.name,s.found.updateTime;const i=pn(n,s.found.name),o=Ke(s.found.updateTime),a=s.found.createTime?Ke(s.found.createTime):te.min(),u=new Ze({mapValue:{fields:s.found.fields}});return xe.newFoundDocument(i,o,a,u)}(r,e):"missing"in e?function(n,s){J(!!s.missing,3894),J(!!s.readTime,22933);const i=pn(n,s.missing),o=Ke(s.readTime);return xe.newNoDocument(i,o)}(r,e):Z(7234,{result:e})}function hR(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Z(39313,{state:l})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,B){return l.useProto3Json?(J(B===void 0||typeof B=="string",58123),Ne.fromBase64String(B||"")):(J(B===void 0||B instanceof Buffer||B instanceof Uint8Array,16193),Ne.fromUint8Array(B||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const B=l.code===void 0?N.UNKNOWN:Fm(l.code);return new k(B,l.message||"")}(o);t=new Gm(n,s,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=pn(r,n.document.name),i=Ke(n.document.updateTime),o=n.document.createTime?Ke(n.document.createTime):te.min(),a=new Ze({mapValue:{fields:n.document.fields}}),u=xe.newFoundDocument(s,i,o,a),l=n.targetIds||[],B=n.removedTargetIds||[];t=new hu(l,B,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=pn(r,n.document),i=n.readTime?Ke(n.readTime):te.min(),o=xe.newNoDocument(s,i),a=n.removedTargetIds||[];t=new hu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=pn(r,n.document),i=n.removedTargetIds||[];t=new hu([],i,s,null)}else{if(!("filter"in e))return Z(11601,{we:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new ZA(s,i),a=n.targetId;t=new Mm(a,o)}}return t}function Ho(r,e){let t;if(e instanceof bi)t={update:xC(r,e.key,e.value)};else if(e instanceof Pi)t={delete:di(r,e.key)};else if(e instanceof Vn)t={update:xC(r,e.key,e.data),updateMask:mR(e.fieldMask)};else{if(!(e instanceof xB))return Z(16599,{be:e.type});t={verify:di(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const a=o.transform;if(a instanceof oi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ps)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof gs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ms)return{fieldPath:o.field.canonicalString(),increment:a.h};if(a instanceof ai)return{fieldPath:o.field.canonicalString(),minimum:a.h};if(a instanceof ui)return{fieldPath:o.field.canonicalString(),maximum:a.h};throw Z(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:du(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z(27497)}(r,e.precondition)),t}function Ql(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Ve.updateTime(Ke(i.updateTime)):i.exists!==void 0?Ve.exists(i.exists):Ve.none()}(e.currentDocument):Ve.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let u=null;if("setToServerValue"in a)J(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),u=new oi;else if("appendMissingElements"in a){const B=a.appendMissingElements.values||[];u=new ps(B)}else if("removeAllFromArray"in a){const B=a.removeAllFromArray.values||[];u=new gs(B)}else"increment"in a?u=new ms(o,a.increment):"minimum"in a?u=new ai(o,a.minimum):"maximum"in a?u=new ui(o,a.maximum):Z(16584,{proto:a});const l=Je.fromServerFormat(a.fieldPath);return new As(l,u)}(r,s)):[];if(e.update){e.update.name;const s=pn(r,e.update.name),i=new Ze({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const l=u.fieldPaths||[];return new Rt(l.map(B=>Je.fromServerFormat(B)))}(e.updateMask);return new Vn(s,i,o,t,n)}return new bi(s,i,t,n)}if(e.delete){const s=pn(r,e.delete);return new Pi(s,t)}if(e.verify){const s=pn(r,e.verify);return new xB(s,t)}return Z(1463,{proto:e})}function dR(r,e){return r&&r.length>0?(J(e!==void 0,14353),r.map(t=>function(s,i){let o=s.updateTime?Ke(s.updateTime):Ke(i);return o.isEqual(te.min())&&(o=Ke(i)),new LA(o,s.transformResults||[])}(t,e))):[]}function Km(r,e){return{documents:[qm(r,e.path)]}}function uc(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=qm(r,s);const i=function(l){if(l.length!==0)return Ym(Te.create(l,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(B=>function(C){return{field:sr(C.field),direction:CR(C.dir)}}(B))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Jl(r,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{Se:t,parent:s}}function zm(r,e,t,n){const{Se:s,parent:i}=uc(r,e),o={},a=[];let u=0;return t.forEach(l=>{const B=n?l.alias:"aggregate_"+u++;o[B]=l.alias,l.aggregateType==="count"?a.push({alias:B,count:{}}):l.aggregateType==="avg"?a.push({alias:B,avg:{field:sr(l.fieldPath)}}):l.aggregateType==="sum"&&a.push({alias:B,sum:{field:sr(l.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:s.structuredQuery},parent:s.parent},ve:o,parent:i}}function Qm(r){let e=jm(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){J(n===1,65062);const B=t.from[0];B.allDescendants?s=B.collectionId:e=e.child(B.collectionId)}let i=[];t.where&&(i=function(d){const C=$m(d);return C instanceof Te&&VB(C)?C.getFilters():[C]}(t.where));let o=[];t.orderBy&&(o=function(d){return d.map(C=>function(m){return new Uo(Qs(m.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(C))}(t.orderBy));let a=null;t.limit&&(a=function(d){let C;return C=typeof d=="object"?d.value:d,ca(C)?null:C}(t.limit));let u=null;t.startAt&&(u=function(d){const C=!!d.before,g=d.values||[];return new Er(g,C)}(t.startAt));let l=null;return t.endAt&&(l=function(d){const C=!d.before,g=d.values||[];return new Er(g,C)}(t.endAt)),bm(e,s,o,i,a,"F",u,l)}function fR(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Wm(r,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(r))}}}}function $m(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Qs(t.unaryFilter.field);return Ce.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Qs(t.unaryFilter.field);return Ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qs(t.unaryFilter.field);return Ce.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qs(t.unaryFilter.field);return Ce.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(r):r.fieldFilter!==void 0?function(t){return Ce.create(Qs(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Te.create(t.compositeFilter.filters.map(n=>$m(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(t.compositeFilter.op))}(r):Z(30097,{filter:r})}function CR(r){return aR[r]}function pR(r){return uR[r]}function gR(r){return cR[r]}function sr(r){return{fieldPath:r.canonicalString()}}function Qs(r){return Je.fromServerFormat(r.fieldPath)}function Ym(r){return r instanceof Ce?function(t){if(t.op==="=="){if(Nt(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NAN"}};if(Mt(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Nt(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NOT_NAN"}};if(Mt(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(t.field),op:pR(t.op),value:t.value}}}(r):r instanceof Te?function(t){const n=t.getFilters().map(s=>Ym(s));return n.length===1?n[0]:{compositeFilter:{op:gR(t.op),filters:n}}}(r):Z(54877,{filter:r})}function mR(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xm(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function Zm(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}function qo(r,e){const t={fields:{}};return e.forEach((n,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=n._toProto(r)}),{mapValue:t}}function e_(r){return{stringValue:r}}/**
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
 */function Rs(r){return new lR(r,!0)}/**
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
 */class At{constructor(e){this._byteString=e}static fromBase64String(e){try{return new At(Ne.fromBase64String(e))}catch(t){throw new k(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new At(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ts(e,At._jsonSchema))return At.fromBase64String(e.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:$e("string",At._jsonSchemaVersion),bytes:$e("string")};/**
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
 */class vs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new k(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function t_(){return new vs(on)}/**
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
 */class Dn{constructor(e){this._methodName=e}}/**
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
 */class $t{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new k(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new k(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$t._jsonSchemaVersion}}static fromJSON(e){if(Ts(e,$t._jsonSchema))return new $t(e.latitude,e.longitude)}}$t._jsonSchemaVersion="firestore/geoPoint/1.0",$t._jsonSchema={type:$e("string",$t._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */class ut{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class n_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ot.UNAUTHENTICATED))}shutdown(){}}class _R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ER{constructor(e){this.De=e,this.currentUser=ot.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.Ce===void 0,42304);let n=this.xe;const s=u=>this.xe!==n?(n=this.xe,t(u)):Promise.resolve();let i=new ut;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new ut,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),o())};this.De.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.De.getImmediate({optional:!0});u?a(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ut)}},0),o()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.xe!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(J(typeof n.accessToken=="string",31837,{Oe:n}),new n_(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string",2055,{Me:e}),new ot(e)}}class IR{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class DR{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n}getToken(){return Promise.resolve(new IR(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable(()=>t(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yR{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,kt(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){J(this.Ce===void 0,3512);const n=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.$e;return this.$e=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.Ke)return Promise.resolve(new Wl(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new Wl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}class wR{getToken(){return Promise.resolve(new Wl(""))}invalidateToken(){}start(e,t){}shutdown(){}}function s_(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */class TR{Qe(e){}shutdown(){}}/**
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
 */const VC="ConnectivityMonitor";class kC{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){U(VC,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){U(VC,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qa=null;function $l(){return Qa===null?Qa=function(){return 268435456+Math.round(2147483648*Math.random())}():Qa++,"0x"+Qa.toString(16)}/**
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
 */const fl="RestConnection",AR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class RR{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${n}/databases/${s}`,this.tt=this.databaseId.database===Mo?`project_id=${n}`:`project_id=${n}&database_id=${s}`}nt(e,t,n,s,i){const o=$l(),a=this.rt(e,t.toUriEncodedString());U(fl,`Sending RPC '${e}' ${o}:`,a,n);const u={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(u,s,i);const{host:l}=new URL(a),B=Rr(l);return this.st(e,a,u,n,B).then(d=>(U(fl,`Received RPC '${e}' ${o}: `,d),d),d=>{throw tt(fl,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",n),d})}_t(e,t,n,s,i,o){return this.nt(e,t,n,s,i)}it(e,t,n){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ri}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}rt(e,t){const n=AR[e];let s=`${this.Xe}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class vR{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
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
 */const ht="WebChannelConnection",ao=(r,e,t)=>{r.listen(e,n=>{try{t(n)}catch(s){setTimeout(()=>{throw s},0)}})};class ei extends RR{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!ei.yt){const e=Hg();ao(e,Ug.STAT_EVENT,t=>{t.stat===Ol.PROXY?U(ht,"STAT_EVENT: detected buffering proxy"):t.stat===Ol.NOPROXY&&U(ht,"STAT_EVENT: detected no buffering proxy")}),ei.yt=!0}}st(e,t,n,s,i){const o=$l();return new Promise((a,u)=>{const l=new Mg;l.setWithCredentials(!0),l.listenOnce(Gg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case uu.NO_ERROR:const d=l.getResponseJson();U(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case uu.TIMEOUT:U(ht,`RPC '${e}' ${o} timed out`),u(new k(N.DEADLINE_EXCEEDED,"Request time out"));break;case uu.HTTP_ERROR:const C=l.getStatus();if(U(ht,`RPC '${e}' ${o} failed with status:`,C,"response text:",l.getResponseText()),C>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const w=function(G){const j=G.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(j)>=0?j:N.UNKNOWN}(m.status);u(new k(w,m.message))}else u(new k(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new k(N.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{wt:e,streamId:o,bt:l.getLastErrorCode(),St:l.getLastError()})}}finally{U(ht,`RPC '${e}' ${o} completed.`)}});const B=JSON.stringify(s);U(ht,`RPC '${e}' ${o} sending request:`,s),l.send(t,"POST",B,n,15)})}vt(e,t,n){const s=$l(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.it(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=i.join("");U(ht,`Creating RPC '${e}' stream ${s}: ${l}`,a);const B=o.createWebChannel(l,a);this.Dt(B);let d=!1,C=!1;const g=new vR({ot:m=>{C?U(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,m):(d||(U(ht,`Opening RPC '${e}' stream ${s} transport.`),B.open(),d=!0),U(ht,`RPC '${e}' stream ${s} sending:`,m),B.send(m))},ut:()=>B.close()});return ao(B,po.EventType.OPEN,()=>{C||(U(ht,`RPC '${e}' stream ${s} transport opened.`),g.Rt())}),ao(B,po.EventType.CLOSE,()=>{C||(C=!0,U(ht,`RPC '${e}' stream ${s} transport closed`),g.Vt(),this.xt(B))}),ao(B,po.EventType.ERROR,m=>{C||(C=!0,tt(ht,`RPC '${e}' stream ${s} transport errored. Name:`,m.name,"Message:",m.message),g.Vt(new k(N.UNAVAILABLE,"The operation could not be completed")))}),ao(B,po.EventType.MESSAGE,m=>{var w;if(!C){const S=m.data[0];J(!!S,16349);const G=S,j=(G==null?void 0:G.error)||((w=G[0])==null?void 0:w.error);if(j){U(ht,`RPC '${e}' stream ${s} received error:`,j);const Y=j.status;let re=function(A){const I=ze[A];if(I!==void 0)return Fm(I)}(Y),ce=j.message;Y==="NOT_FOUND"&&ce.includes("database")&&ce.includes("does not exist")&&ce.includes(this.databaseId.database)&&tt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),re===void 0&&(re=N.INTERNAL,ce="Unknown error status: "+Y+" with message "+j.message),C=!0,g.Vt(new k(re,ce)),B.close()}else U(ht,`RPC '${e}' stream ${s} received:`,S),g.dt(S)}}),ei.gt(),setTimeout(()=>{g.At()},0),g}terminate(){this.ft.forEach(e=>e.close()),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter(t=>t===e)}it(e,t,n){super.it(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return qg()}}/**
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
 */function bR(r){return new ei(r)}ei.yt=!1;class KB{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=n,this.Ot=s,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),n=Math.max(0,Date.now()-this.Bt),s=Math.max(0,t-n);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,s,()=>(this.Bt=Date.now(),e())),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
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
 */const MC="PersistentStream";class i_{constructor(e,t,n,s,i,o,a,u){this.Ct=e,this.Kt=n,this.Qt=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new KB(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,()=>this.tn()))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(je(t.toString()),je("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Wt===t&&this.un(n,s)},n=>{e(()=>{const s=new k(N.UNKNOWN,"Fetching auth token failed: "+n.message);return this.cn(s)})})}un(e,t){const n=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct(()=>{n(()=>this.listener.ct())}),this.stream.Et(()=>{n(()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,()=>(this.Yt()&&(this.state=3),Promise.resolve())),this.listener.Et()))}),this.stream.Tt(s=>{n(()=>this.cn(s))}),this.stream.onMessage(s=>{n(()=>++this.jt==1?this.hn(s):this.onNext(s))})}Zt(){this.state=5,this.Ht.kt(async()=>{this.state=0,this.start()})}cn(e){return U(MC,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget(()=>this.Wt===e?t():(U(MC,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PR extends i_{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=hR(this.serializer,e),n=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Ke(o.readTime):te.min()}(e);return this.listener.Tn(t,n)}Pn(e){const t={};t.database=zl(this.serializer),t.addTarget=function(i,o){let a;const u=o.target;if(a=yn(u)?{pipelineQuery:Wm(i,u)}:GB(u)?{documents:Km(i,u)}:{query:uc(i,u).Se},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Um(i,o.resumeToken);const l=Jl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=os(i,o.snapshotVersion.toTimestamp());const l=Jl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const n=fR(this.serializer,e);n&&(t.labels=n),this.nn(t)}In(e){const t={};t.database=zl(this.serializer),t.removeTarget=e,this.nn(t)}}class SR extends i_{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return J(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){J(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=dR(e.writeResults,e.commitTime),n=Ke(e.commitTime);return this.listener.dn(n,t)}fn(){const e={};e.database=zl(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Ho(this.serializer,n))};this.nn(t)}}/**
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
 */class NR{}class OR extends NR{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.mn=!1}pn(){if(this.mn)throw new k(N.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,n,s){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.nt(e,Kl(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(N.UNKNOWN,i.toString())})}_t(e,t,n,s,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection._t(e,Kl(t,n),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(N.UNKNOWN,o.toString())})}terminate(){this.mn=!0,this.connection.terminate()}}function FR(r,e,t,n){return new OR(r,e,t,n)}/**
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
 */const LR="ComponentProvider",GC=new Map;function xR(r,e,t,n,s){return new RA(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s_(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n,s._customHeaders,s.grpcFlowControlWindow)}/**
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
 */const UC={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},o_=41943040;class dt{static withCacheSize(e){return new dt(e,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}dt.DEFAULT_COLLECTION_PERCENTILE=10,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dt.DEFAULT=new dt(o_,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dt.DISABLED=new dt(-1,0,0);/**
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
 */class vt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.gn(n),this.yn=n=>t.writeSequenceNumber(n))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}vt.wn=-1;/**
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
 */const a_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class u_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Sr(r){if(r.code!==N.FAILED_PRECONDITION||r.message!==a_)throw r;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,n)=>{t(e)})}static reject(e){return new P((t,n)=>{n(e)})}static waitFor(e){return new P((t,n)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},u=>n(u))}),o=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const n of e)t=t.next(s=>s?P.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new P((n,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const l=u;t(e[l]).next(B=>{o[l]=B,++a,a===i&&n(o)},B=>s(B))}})}static doWhile(e,t){return new P((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
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
 */const xt="SimpleDb";class cc{static open(e,t,n,s){try{return new cc(t,e.transaction(s,n))}catch(i){throw new Ao(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.bn=new ut,this.transaction.oncomplete=()=>{this.bn.resolve()},this.transaction.onabort=()=>{t.error?this.bn.reject(new Ao(e,t.error)):this.bn.resolve()},this.transaction.onerror=n=>{const s=zB(n.target.error);this.bn.reject(new Ao(e,s))}}get Sn(){return this.bn.promise}abort(e){e&&this.bn.reject(e),this.aborted||(U(xt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}vn(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new kR(t)}}class gn{static delete(e){return U(xt,"Removing database:",e),Qr(qp().indexedDB.deleteDatabase(e)).toPromise()}static Ye(){if(!Zp())return!1;if(gn.Dn())return!0;const e=et(),t=gn.xn(e),n=0<t&&t<10,s=c_(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static Dn(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static Cn(e,t){return e.store(t)}static xn(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.Fn=n,this.On=null,gn.xn(et())===12.2&&je("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async Mn(e){return this.db||(U(xt,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new Ao(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new k(N.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new k(N.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Ao(e,o))},s.onupgradeneeded=i=>{U(xt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.Fn.Nn(o,s.transaction,i.oldVersion,this.version).next(()=>{U(xt,"Database upgrade to version "+this.version+" complete")})}})),this.Ln&&(this.db.onversionchange=t=>this.Ln(t)),this.db}Bn(e){this.Ln=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.Mn(e);const a=cc.open(this.db,e,i?"readonly":"readwrite",n),u=s(a).next(l=>(a.vn(),l)).catch(l=>(a.abort(l),P.reject(l))).toPromise();return u.catch(()=>{}),await a.Sn,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(U(xt,"Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function c_(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class VR{constructor(e){this.Un=e,this.kn=!1,this.qn=null}get isDone(){return this.kn}get $n(){return this.qn}set cursor(e){this.Un=e}done(){this.kn=!0}Kn(e){this.qn=e}delete(){return Qr(this.Un.delete())}}class Ao extends k{constructor(e,t){super(N.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Nr(r){return r.name==="IndexedDbTransactionError"}class kR{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(U(xt,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(U(xt,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Qr(n)}add(e){return U(xt,"ADD",this.store.name,e,e),Qr(this.store.add(e))}get(e){return Qr(this.store.get(e)).next(t=>(t===void 0&&(t=null),U(xt,"GET",this.store.name,e,t),t))}delete(e){return U(xt,"DELETE",this.store.name,e),Qr(this.store.delete(e))}count(){return U(xt,"COUNT",this.store.name),Qr(this.store.count())}Qn(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new P((o,a)=>{i.onerror=u=>{a(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(n),o=[];return this.Wn(i,(a,u)=>{o.push(u)}).next(()=>o)}}Gn(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new P((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}zn(e,t){U(xt,"DELETE ALL",this.store.name);const n=this.options(e,t);n.jn=!1;const s=this.cursor(n);return this.Wn(s,(i,o,a)=>a.delete())}Hn(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.Wn(s,t)}Jn(e){const t=this.cursor({});return new P((n,s)=>{t.onerror=i=>{const o=zB(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():n()}):n()}})}Wn(e,t){const n=[];return new P((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const u=new VR(a),l=t(a.primaryKey,a.value,u);if(l instanceof P){const B=l.catch(d=>(u.done(),P.reject(d)));n.push(B)}u.isDone?s():u.$n===null?a.continue():a.continue(u.$n)}}).next(()=>P.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.jn?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Qr(r){return new P((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=zB(n.target.error);t(s)}})}let HC=!1;function zB(r){const e=gn.xn(et());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return HC||(HC=!0,setTimeout(()=>{throw n},0)),n}}return r}/**
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
 */const qC="LruGarbageCollector",l_=1048576;function jC([r,e],[t,n]){const s=ie(r,t);return s===0?ie(e,n):s}class MR{constructor(e){this.Yn=e,this.buffer=new we(jC),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();jC(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class B_{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){U(qC,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Nr(t)?U(qC,"Ignoring IndexedDB error during garbage collection: ",t):await Sr(t)}await this.nr(3e5)})}}class GR{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return P.resolve(vt.wn);const n=new MR(t);return this.rr.forEachTarget(e,s=>n.er(s.sequenceNumber)).next(()=>this.rr.sr(e,s=>n.er(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.rr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(UC)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),UC):this._r(e,t))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let n,s,i,o,a,u,l;const B=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(n=d,a=Date.now(),this.removeTargets(e,n,t))).next(d=>(i=d,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(d=>(l=Date.now(),Ks()<=fe.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-B}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${d} documents in `+(l-u)+`ms
Total Duration: ${l-B}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function h_(r,e){return new GR(r,e)}/**
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
 */const d_="firestore.googleapis.com",JC=!0;class KC{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new k(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=d_,this.ssl=JC}else this.host=e.host,this.ssl=e.ssl??JC;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=o_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<l_)throw new k(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(nm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=s_(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new k(N.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new k(N.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new k(N.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new k(N.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(n,s){if(n===s)return!0;if(!n||!s)return!1;const i=Object.keys(n),o=Object.keys(s);if(i.length!==o.length)return!1;for(const a of i)if(n[a]!==s[a])return!1;return!0}(this._customHeaders,e._customHeaders)}}let Ba=class{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new KC({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new k(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new KC(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new r_;switch(n.type){case"firstParty":return new DR(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=GC.get(t);n&&(U(LR,"Removing Datastore"),GC.delete(t),n.terminate())}(this),Promise.resolve()}};function f_(r,e,t,n={}){var l;r=de(r,Ba);const s=Rr(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},a=`${e}:${t}`;s&&$u(`https://${a}`),i.host!==d_&&i.host!==a&&tt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:a,ssl:s,emulatorOptions:n};if(!Xt(u,o)&&(r._setSettings(u),n.mockUserToken)){let B,d;if(typeof n.mockUserToken=="string")B=n.mockUserToken,d=ot.MOCK_USER;else{B=Wp(n.mockUserToken,(l=r._app)==null?void 0:l.options.projectId);const C=n.mockUserToken.sub||n.mockUserToken.user_id;if(!C)throw new k(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ot(C)}r._authCredentials=new _R(new n_(B,d))}}/**
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
 */class nt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new nt(this.firestore,e,this._query)}}class ye{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ye(this.firestore,e,this._key)}toJSON(){return{type:ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Ts(t,ye._jsonSchema))return new ye(e,n||null,new K(ue.fromString(t.referencePath)))}}ye._jsonSchemaVersion="firestore/documentReference/1.0",ye._jsonSchema={type:$e("string",ye._jsonSchemaVersion),referencePath:$e("string")};class Yt extends nt{constructor(e,t,n){super(e,t,Si(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ye(this.firestore,null,new K(e))}withConverter(e){return new Yt(this.firestore,e,this._path)}}function UR(r,e,...t){if(r=Ie(r),SB("collection","path",e),r instanceof Ba){const n=ue.fromString(e,...t);return pC(n),new Yt(r,null,n)}{if(!(r instanceof ye||r instanceof Yt))throw new k(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ue.fromString(e,...t));return pC(n),new Yt(r.firestore,null,n)}}function HR(r,e){if(r=de(r,Ba),SB("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new k(N.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new nt(r,null,function(n){return new kn(ue.emptyPath(),n)}(e))}function C_(r,e,...t){if(r=Ie(r),arguments.length===1&&(e=ec.newId()),SB("doc","path",e),r instanceof Ba){const n=ue.fromString(e,...t);return CC(n),new ye(r,null,new K(n))}{if(!(r instanceof ye||r instanceof Yt))throw new k(N.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ue.fromString(e,...t));return CC(n),new ye(r.firestore,r instanceof Yt?r.converter:null,new K(n))}}function qR(r,e){return r=Ie(r),e=Ie(e),(r instanceof ye||r instanceof Yt)&&(e instanceof ye||e instanceof Yt)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function QB(r,e){return r=Ie(r),e=Ie(e),r instanceof nt&&e instanceof nt&&r.firestore===e.firestore&&Nm(r._query,e._query)&&r.converter===e.converter}/**
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
 */class yt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ts(e,yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new yt(e.vectorValues);throw new k(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yt._jsonSchemaVersion="firestore/vectorValue/1.0",yt._jsonSchema={type:$e("string",yt._jsonSchemaVersion),vectorValues:$e("object")};/**
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
 */const jR=/^__.*__$/;class JR{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Vn(e,this.data,this.fieldMask,t,this.fieldTransforms):new bi(e,this.data,t,this.fieldTransforms)}}class p_{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Vn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function g_(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{dataSource:r})}}class lc{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new lc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Fu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(g_(this.dataSource)&&jR.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class KR{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Rs(e)}createContext(e,t,n,s=!1){return new lc({dataSource:e,methodName:t,targetDoc:n,path:Je.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bs(r){const e=r._freezeSettings(),t=Rs(r._databaseId);return new KR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Bc(r,e,t,n,s,i={}){const o=r.createContext(i.merge||i.mergeFields?2:0,e,t,s);rh("Data must be an object, but it was:",o,n);const a=E_(n,o);let u,l;if(i.merge)u=new Rt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const B=[];for(const d of i.mergeFields){const C=en(e,d,t);if(!o.contains(C))throw new k(N.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);y_(B,C)||B.push(C)}u=new Rt(B),l=o.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,l=o.fieldTransforms;return new JR(new Ze(a),u,l)}class ha extends Dn{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ha}}function m_(r,e,t){return new lc({dataSource:3,targetDoc:e.settings.targetDoc,methodName:r._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class WB extends Dn{_toFieldTransform(e){return new As(e.path,new oi)}isEqual(e){return e instanceof WB}}class $B extends Dn{constructor(e,t){super(e),this.ar=t}_toFieldTransform(e){const t=m_(this,e,!0),n=this.ar.map(i=>mn(i,t)),s=new ps(n);return new As(e.path,s)}isEqual(e){return e instanceof $B&&Xt(this.ar,e.ar)}}class YB extends Dn{constructor(e,t){super(e),this.ar=t}_toFieldTransform(e){const t=m_(this,e,!0),n=this.ar.map(i=>mn(i,t)),s=new gs(n);return new As(e.path,s)}isEqual(e){return e instanceof YB&&Xt(this.ar,e.ar)}}class XB extends Dn{constructor(e,t){super(e),this.ur=t}_toFieldTransform(e){const t=new ms(e.serializer,vi(e.serializer,this.ur));return new As(e.path,t)}isEqual(e){return e instanceof XB&&(this.ur===e.ur||Number.isNaN(this.ur)&&Number.isNaN(e.ur))}}class ZB extends Dn{constructor(e,t){super(e),this.ur=t}_toFieldTransform(e){const t=new ai(e.serializer,vi(e.serializer,this.ur));return new As(e.path,t)}isEqual(e){return e instanceof ZB&&(this.ur===e.ur||Number.isNaN(this.ur)&&Number.isNaN(e.ur))}}class eh extends Dn{constructor(e,t){super(e),this.ur=t}_toFieldTransform(e){const t=new ui(e.serializer,vi(e.serializer,this.ur));return new As(e.path,t)}isEqual(e){return e instanceof eh&&(this.ur===e.ur||Number.isNaN(this.ur)&&Number.isNaN(e.ur))}}function th(r,e,t,n){const s=r.createContext(1,e,t);rh("Data must be an object, but it was:",s,n);const i=[],o=Ze.empty();Pr(n,(u,l)=>{const B=sh(e,u,t);l=Ie(l);const d=s.childContextForFieldPath(B);if(l instanceof ha)i.push(B);else{const C=mn(l,d);C!=null&&(i.push(B),o.set(B,C))}});const a=new Rt(i);return new p_(o,a,s.fieldTransforms)}function nh(r,e,t,n,s,i){const o=r.createContext(1,e,t),a=[en(e,n,t)],u=[s];if(i.length%2!=0)throw new k(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<i.length;C+=2)a.push(en(e,i[C])),u.push(i[C+1]);const l=[],B=Ze.empty();for(let C=a.length-1;C>=0;--C)if(!y_(l,a[C])){const g=a[C];let m=u[C];m=Ie(m);const w=o.childContextForFieldPath(g);if(m instanceof ha)l.push(g);else{const S=mn(m,w);S!=null&&(l.push(g),B.set(g,S))}}const d=new Rt(l);return new p_(B,d,o.fieldTransforms)}function __(r,e,t,n=!1){return mn(t,r.createContext(n?4:3,e))}function mn(r,e,t){if(D_(r=Ie(r)))return rh("Unsupported field value:",e,r),E_(r,e);if(r instanceof Dn)return function(s,i){if(!g_(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const o=[];let a=0;for(const u of s){let l=mn(u,i.childContextForArray(a));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),a++}return{arrayValue:{values:o}}}(r,e)}return function(s,i,o){if((s=Ie(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return vi(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const a=_e.fromDate(s);return{timestampValue:os(i.serializer,a)}}if(s instanceof _e){const a=new _e(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:os(i.serializer,a)}}if(I_(s)){const a=_e.fromInstant(s),u=new _e(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:os(i.serializer,u)}}if(s instanceof $t)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof At)return{bytesValue:Um(i.serializer,s._byteString)};if(s instanceof ye){const a=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(a))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:JB(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof yt)return function(u,l){const B=u instanceof yt?u.toArray():u;return{mapValue:{fields:{[NB]:{stringValue:OB},[ds]:{arrayValue:{values:B.map(C=>{if(typeof C!="number")throw l.createError("VectorValues must only contain numeric values.");return nc(l.serializer,C)})}}}}}}(s,i);if(Zm(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${tc(s)}`)}(r,e)}function E_(r,e){const t={};return tm(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pr(r,(n,s)=>{const i=mn(s,e.childContextForField(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function I_(r){if(typeof r!="object"||r===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&r instanceof Temporal.Instant)return!0;const e=r;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function D_(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof _e||r instanceof $t||r instanceof At||r instanceof ye||r instanceof Dn||r instanceof yt||I_(r)||Zm(r))}function rh(r,e,t){if(!D_(t)||!oa(t)){const n=tc(t);throw n==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+n)}}function en(r,e,t){if((e=Ie(e))instanceof vs)return e._internalPath;if(typeof e=="string")return sh(r,e);throw Fu("Field path arguments must be of type string or ",r,!1,void 0,t)}const zR=new RegExp("[~\\*/\\[\\]]");function sh(r,e,t){if(e.search(zR)>=0)throw Fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new vs(...e.split("."))._internalPath}catch{throw Fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Fu(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new k(N.INVALID_ARGUMENT,a+r+u)}function y_(r,e){return r.some(t=>t.isEqual(e))}function w_(r){return typeof r._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class mt{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=Ze.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let a;i.nestedOptions&&oa(o)?a={mapValue:{fields:new mt(i.nestedOptions).getOptionsProto(t,o)}}:o&&(a=mn(o,t)??void 0),a&&n.set(Je.fromServerFormat(i.serverName),a)}}return n}getOptionsProto(e,t,n){const s=this._getKnownOptions(t,e);if(n){const i=new Map(PB(n,(o,a)=>[Je.fromServerFormat(a),o!==void 0?mn(o,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
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
 */function QR(r){return typeof r=="object"&&r!==null&&!!("nullValue"in r&&(r.nullValue===null||r.nullValue==="NULL_VALUE")||"booleanValue"in r&&(r.booleanValue===null||typeof r.booleanValue=="boolean")||"integerValue"in r&&(r.integerValue===null||typeof r.integerValue=="number"||typeof r.integerValue=="string")||"doubleValue"in r&&(r.doubleValue===null||typeof r.doubleValue=="number")||"timestampValue"in r&&(r.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(r.timestampValue))||"stringValue"in r&&(r.stringValue===null||typeof r.stringValue=="string")||"bytesValue"in r&&(r.bytesValue===null||r.bytesValue instanceof Uint8Array)||"referenceValue"in r&&(r.referenceValue===null||typeof r.referenceValue=="string")||"geoPointValue"in r&&(r.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(r.geoPointValue))||"arrayValue"in r&&(r.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(r.arrayValue))||"mapValue"in r&&(r.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!oa(t.fields))}(r.mapValue))||"fieldReferenceValue"in r&&(r.fieldReferenceValue===null||typeof r.fieldReferenceValue=="string")||"functionValue"in r&&(r.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(r.functionValue))||"pipelineValue"in r&&(r.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(r.pipelineValue)))}/**
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
 */function WR(){return new ha("deleteField")}function $R(){return new WB("serverTimestamp")}function YR(...r){return new $B("arrayUnion",r)}function XR(...r){return new YB("arrayRemove",r)}function ZR(r){return new XB("increment",r)}function ev(r){return new ZB("minimum",r)}function tv(r){return new eh("maximum",r)}function T_(r){return new yt(r)}/**
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
 */function z(r){let e;return r instanceof Ps?r:(e=oa(r)?ov(r):r instanceof Array?av(r):A_(r,void 0),e)}function Cl(r){if(r instanceof Ps)return r;if(r instanceof yt)return jo(r);if(Array.isArray(r))return jo(T_(r));throw new Error("Unsupported value: "+typeof r)}function ih(r){return bA(r)?fu(r):z(r)}class Ps{constructor(){this._protoValueType="ProtoValue"}add(e){return new V("add",[this,z(e)],"add")}asBoolean(){if(this instanceof Ir)return this;if(this instanceof Ns)return new v_(this);if(this instanceof Ss)return new iv(this);if(this instanceof V)return new R_(this);throw new k("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new V("subtract",[this,z(e)],"subtract")}multiply(e){return new V("multiply",[this,z(e)],"multiply")}divide(e){return new V("divide",[this,z(e)],"divide")}mod(e){return new V("mod",[this,z(e)],"mod")}equal(e){return new V("equal",[this,z(e)],"equal").asBoolean()}notEqual(e){return new V("not_equal",[this,z(e)],"notEqual").asBoolean()}lessThan(e){return new V("less_than",[this,z(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new V("less_than_or_equal",[this,z(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new V("greater_than",[this,z(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new V("greater_than_or_equal",[this,z(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map(s=>z(s));return new V("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new V("array_contains",[this,z(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new mo(e.map(z),"arrayContainsAll"):e;return new V("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new mo(e.map(z),"arrayContainsAny"):e;return new V("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new V("array_reverse",[this])}arrayLength(){return new V("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new mo(e.map(z),"equalAny"):e;return new V("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new mo(e.map(z),"notEqualAny"):e;return new V("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new V("exists",[this],"exists").asBoolean()}charLength(){return new V("char_length",[this],"charLength")}like(e){return new V("like",[this,z(e)],"like").asBoolean()}regexContains(e){return new V("regex_contains",[this,z(e)],"regexContains").asBoolean()}regexFind(e){return new V("regex_find",[this,z(e)],"regexFind")}regexFindAll(e){return new V("regex_find_all",[this,z(e)],"regexFindAll")}regexMatch(e){return new V("regex_match",[this,z(e)],"regexMatch").asBoolean()}stringContains(e){return new V("string_contains",[this,z(e)],"stringContains").asBoolean()}startsWith(e){return new V("starts_with",[this,z(e)],"startsWith").asBoolean()}endsWith(e){return new V("ends_with",[this,z(e)],"endsWith").asBoolean()}toLower(){return new V("to_lower",[this],"toLower")}toUpper(){return new V("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(z(e)),new V("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(z(e)),new V("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(z(e)),new V("rtrim",t,"rtrim")}type(){return new V("type",[this])}isType(e){return new V("is_type",[this,jo(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(z);return new V("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new V("string_index_of",[this,z(e)],"stringIndexOf")}stringRepeat(e){return new V("string_repeat",[this,z(e)],"stringRepeat")}stringReplaceAll(e,t){return new V("string_replace_all",[this,z(e),z(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new V("string_replace_one",[this,z(e),z(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(z);return new V("concat",[this,...n],"concat")}reverse(){return new V("reverse",[this],"reverse")}arrayFilter(e,t){return new V("array_filter",[this,z(e),t],"arrayFilter")}arrayTransform(e,t){return new V("array_transform",[this,z(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new V("array_transform",[this,z(e),z(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,z(e)];return t!==void 0&&n.push(z(t)),new V("array_slice",n,"arraySlice")}arrayFirst(){return new V("array_first",[this],"arrayFirst")}arrayFirstN(e){return new V("array_first_n",[this,z(e)],"arrayFirstN")}arrayLast(){return new V("array_last",[this],"arrayLast")}arrayLastN(e){return new V("array_last_n",[this,z(e)],"arrayLastN")}arrayMaximum(){return new V("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new V("maximum_n",[this,z(e)],"arrayMaximumN")}arrayMinimum(){return new V("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new V("minimum_n",[this,z(e)],"arrayMinimumN")}arrayIndexOf(e){return new V("array_index_of",[this,z(e),z("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new V("array_index_of",[this,z(e),z("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new V("array_index_of_all",[this,z(e)],"arrayIndexOfAll")}byteLength(){return new V("byte_length",[this],"byteLength")}ceil(){return new V("ceil",[this])}floor(){return new V("floor",[this])}abs(){return new V("abs",[this])}exp(){return new V("exp",[this])}mapGet(e){return new V("map_get",[this,jo(e)],"mapGet")}mapSet(e,t,...n){const s=[this,z(e),z(t),...n.map(z)];return new V("map_set",s,"mapSet")}mapKeys(){return new V("map_keys",[this],"mapKeys")}mapValues(){return new V("map_values",[this],"mapValues")}mapEntries(){return new V("map_entries",[this],"mapEntries")}getField(e){return new V("get_field",[this,z(e)],"get_field")}count(){return Lt._create("count",[this],"count")}sum(){return Lt._create("sum",[this],"sum")}average(){return Lt._create("average",[this],"average")}minimum(){return Lt._create("minimum",[this],"minimum")}maximum(){return Lt._create("maximum",[this],"maximum")}first(){return Lt._create("first",[this],"first")}last(){return Lt._create("last",[this],"last")}arrayAgg(){return Lt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return Lt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return Lt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new V("maximum",[this,...n.map(z)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new V("minimum",[this,...n.map(z)],"minimum")}vectorLength(){return new V("vector_length",[this],"vectorLength")}cosineDistance(e){return new V("cosine_distance",[this,Cl(e)],"cosineDistance")}dotProduct(e){return new V("dot_product",[this,Cl(e)],"dotProduct")}euclideanDistance(e){return new V("euclidean_distance",[this,Cl(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new V("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new V("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new V("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new V("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new V("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new V("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new V("timestamp_add",[this,z(e),z(t)],"timestampAdd")}timestampSubtract(e,t){return new V("timestamp_subtract",[this,z(e),z(t)],"timestampSubtract")}timestampDiff(e,t){return new V("timestamp_diff",[this,ih(e),z(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,z(e)];return t&&n.push(z(t)),new V("timestamp_extract",n,"timestampExtract")}documentId(){return new V("document_id",[this],"documentId")}parent(){return new V("parent",[this],"parent")}substring(e,t){const n=z(e);return new V("substring",t===void 0?[this,n]:[this,n,z(t)],"substring")}arrayGet(e){return new V("array_get",[this,z(e)],"arrayGet")}isError(){return new V("is_error",[this],"isError").asBoolean()}ifError(e){const t=new V("if_error",[this,z(e)],"ifError");return e instanceof Ir?t.asBoolean():t}isAbsent(){return new V("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new V("map_remove",[this,z(e)],"mapRemove")}mapMerge(e,...t){const n=z(e),s=t.map(z);return new V("map_merge",[this,n,...s],"mapMerge")}pow(e){return new V("pow",[this,z(e)])}trunc(e){return e===void 0?new V("trunc",[this]):new V("trunc",[this,z(e)],"trunc")}round(e){return e===void 0?new V("round",[this]):new V("round",[this,z(e)],"round")}collectionId(){return new V("collection_id",[this])}length(){return new V("length",[this])}ln(){return new V("ln",[this])}sqrt(){return new V("sqrt",[this])}stringReverse(){return new V("string_reverse",[this])}ifAbsent(e){return new V("if_absent",[this,z(e)],"ifAbsent")}ifNull(e){return new V("if_null",[this,z(e)],"ifNull")}coalesce(e,...t){return new V("coalesce",[this,z(e),...t.map(z)],"coalesce")}join(e){return new V("join",[this,z(e)],"join")}log10(){return new V("log10",[this])}arraySum(){return new V("sum",[this])}split(e){return new V("split",[this,z(e)])}timestampTruncate(e,t){const n=[this,z(e)];return t&&n.push(z(t)),new V("timestamp_trunc",n)}ascending(){return uv(this)}descending(){return cv(this)}as(e){return new rv(this,e,"as")}}class Lt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const s=new Lt(e,t);return s._methodName=n,s}as(e){return new nv(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class nv{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class rv{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class mo extends Ps{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map(t=>t._toProto(e))}}}_readUserData(e){this.cr.forEach(t=>t._readUserData(e))}}class Ss extends Ps{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new V("geo_distance",[this,z(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function fu(r){return sv(r,"field")}function sv(r,e){return new Ss(typeof r=="string"?on===r?t_()._internalPath:en("field",r):r._internalPath,e)}class Ns extends Ps{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Ns(e,void 0);return t._protoValue=e,t}_toProto(e){return J(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,QR(this._protoValue)||(this._protoValue=mn(this.value,e))}}function jo(r,e){return A_(r,"constant")}function A_(r,e){const t=new Ns(r,e);return typeof r=="boolean"?new v_(t):t}class V extends Ps{constructor(e,t,n,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),s!==void 0&&(this._options=s)}get _optionsUtil(){return new mt({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(n=>n._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Ir extends Ps{get _methodName(){return this._expr._methodName}countIf(){return Lt._create("count_if",[this],"countIf")}not(){return new V("not",[this],"not").asBoolean()}conditional(e,t){return new V("conditional",[this,e,t],"conditional")}ifError(e){const t=z(e),n=new V("if_error",[this,t],"ifError");return t instanceof Ir?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class R_ extends Ir{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class v_ extends Ir{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class iv extends Ir{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function ov(r,e){const t=[];for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n)){const s=r[n];t.push(jo(n)),t.push(z(s))}return new V("map",t,"map")}function av(r){return function(t,n){return new V("array",t.map(s=>z(s)),n)}(r,"array")}function uv(r){return new oh(ih(r),"ascending","ascending")}function cv(r){return new oh(ih(r),"descending","descending")}class oh{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:e_(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class Ht{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class b_ extends Ht{get _name(){return"add_fields"}get _optionsUtil(){return new mt({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[qo(e,this.fields)]}}_readUserData(e){super._readUserData(e),yr(this.fields,e)}}class P_ extends Ht{get _name(){return"aggregate"}get _optionsUtil(){return new mt({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[qo(e,this.accumulators),qo(e,this.groups)]}}_readUserData(e){super._readUserData(e),yr(this.groups,e),yr(this.accumulators,e)}}class S_ extends Ht{get _name(){return"distinct"}get _optionsUtil(){return new mt({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[qo(e,this.groups)]}}_readUserData(e){super._readUserData(e),yr(this.groups,e)}}class da extends Ht{get _name(){return"collection"}get _optionsUtil(){return new mt({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class fa extends Ht{get _name(){return"collection_group"}get _optionsUtil(){return new mt({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class hc extends Ht{get _name(){return"database"}get _optionsUtil(){return new mt({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class dc extends Ht{get _name(){return"documents"}get _optionsUtil(){return new mt({})}constructor(e,t){if(super(t),!e||e.length===0)throw new k(N.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(n);if(s.size!==n.length)throw new k(N.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=n,this.Pr=s}_toProto(e){return{...super._toProto(e),args:this.Tr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class Ca extends Ht{get _name(){return"where"}get _optionsUtil(){return new mt({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),yr(this.condition,e)}}class Dr extends Ht{get _name(){return"limit"}get _optionsUtil(){return new mt({})}constructor(e,t){J(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[vi(e,this.limit)]}}}class zC extends Ht{get _name(){return"offset"}get _optionsUtil(){return new mt({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[vi(e,this.offset)]}}}class lv extends Ht{get _name(){return"select"}get _optionsUtil(){return new mt({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[qo(e,this.selections)]}}_readUserData(e){super._readUserData(e),yr(this.selections,e)}}class un extends Ht{get _name(){return"sort"}get _optionsUtil(){return new mt({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),yr(this.orderings,e)}}class ah extends Ht{get _name(){return"replace_with"}get _optionsUtil(){return new mt({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),e_(ah.Ir)]}}_readUserData(e){super._readUserData(e),yr(this.map,e)}}ah.Ir="full_replace";function yr(r,e){return w_(r)?r._readUserData(e):Array.isArray(r)?r.forEach(t=>t._readUserData(e)):r instanceof Map?r.forEach(t=>t._readUserData(e)):Object.values(r).forEach(t=>t._readUserData(e)),r}/**
 * @license
 * Copyright 2026 Google LLC
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
 */class Ro{constructor(e,t,n,s){this._db=e,this.userDataReader=t,this._userDataWriter=n,this.stages=s}Vr(e,t){const n=this.userDataReader.createContext(3,e);return w_(t)?t._readUserData(n):Array.isArray(t)?t.forEach(s=>s._readUserData(n)):t.forEach(s=>s._readUserData(n)),t}where(e){const t=this.stages.map(n=>n);return this.Vr("where",e),t.push(new Ca(e,{})),new Ro(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(n=>n);return t.push(new Dr(e,{})),new Ro(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const n=this.stages.map(s=>s);return"orderings"in e?n.push(new un(this.Vr("sort",e.orderings),{})):n.push(new un(this.Vr("sort",[e,...t]),{})),new Ro(this._db,this.userDataReader,this._userDataWriter,n)}dr(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class ft{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return pa(this)}getPipelineCollectionGroup(){return uh(this)}getPipelineCollectionId(){return N_(this)}getPipelineDocuments(){return Lu(this)}getPipelineFlavor(){return function(t){let n="exact";return t.stages.forEach((s,i)=>{s._name!==S_.name&&s._name!==P_.name||(n="keyless"),s._name===lv.name&&n==="exact"&&(n="augmented"),s._name===b_.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")}),n}(this)}getPipelineSourceType(){return bn(this)}}function bn(r){const e=r.stages[0];return e instanceof da||e instanceof fa||e instanceof hc||e instanceof dc?e._name:"unknown"}function pa(r){if(bn(r)==="collection")return r.stages[0].hr}function uh(r){if(bn(r)==="collection_group")return r.stages[0].collectionId}function N_(r){switch(bn(r)){case"collection":return ue.fromString(pa(r)).lastSegment();case"collection_group":return uh(r);default:return}}function Lu(r){if(bn(r)==="documents")return r.stages[0].Tr}class R{constructor(e,t){this.type=e,this.value=t}static mr(){return new R("ERROR",void 0)}static pr(){return new R("UNSET",void 0)}static gr(){return new R("NULL",Cn)}static newValue(e){return Mt(e)?new R("NULL",Cn):function(n){return!!n&&"booleanValue"in n}(e)?new R("BOOLEAN",e):an(e)?new R("INT",e):Zr(e)?new R("DOUBLE",e):function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue}(e)?new R("TIMESTAMP",e):function(n){return!!n&&"stringValue"in n}(e)?new R("STRING",e):function(n){return!!n&&"bytesValue"in n}(e)?new R("BYTES",e):e.referenceValue?new R("REFERENCE",e):e.geoPointValue?new R("GEO_POINT",e):_r(e)?new R("ARRAY",e):Cs(e)?new R("VECTOR",e):ss(e)?new R("MAP",e):new R("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function vo(r){if(!r.yr())return r.value}function O_(r){return r instanceof Ir?r._expr:r}function se(r){if((r=O_(r))instanceof Ss)return new Bv(r);if(r instanceof Ns)return new hv(r);if(r instanceof mo)return new dv(r);if(r instanceof V){if(r.name==="add")return new pv(r);if(r.name==="subtract")return new gv(r);if(r.name==="multiply")return new mv(r);if(r.name==="divide")return new _v(r);if(r.name==="mod")return new Ev(r);if(r.name==="and")return new Iv(r);if(r.name==="equal")return new Ov(r);if(r.name==="not_equal")return new Fv(r);if(r.name==="less_than")return new Lv(r);if(r.name==="less_than_or_equal")return new xv(r);if(r.name==="greater_than")return new Vv(r);if(r.name==="greater_than_or_equal")return new kv(r);if(r.name==="array_concat")return new Mv(r);if(r.name==="array_reverse")return new Gv(r);if(r.name==="array_contains")return new Uv(r);if(r.name==="array_contains_all")return new Hv(r);if(r.name==="array_contains_any")return new qv(r);if(r.name==="array_length")return new jv(r);if(r.name==="array_element")return new Jv(r);if(r.name==="equal_any")return new F_(r);if(r.name==="not_equal_any")return new yv(r);if(r.name==="is_nan")return new wv(r);if(r.name==="is_not_nan")return new Tv(r);if(r.name==="is_null")return new Av(r);if(r.name==="is_not_null")return new Rv(r);if(r.name==="is_error")return new vv(r);if(r.name==="exists")return new bv(r);if(r.name==="not")return new fc(r);if(r.name==="or")return new Dv(r);if(r.name==="xor")return new ch(r);if(r.name==="conditional")return new Pv(r);if(r.name==="maximum")return new Sv(r);if(r.name==="minimum")return new Nv(r);if(r.name==="reverse")return new Kv(r);if(r.name==="replace_first")return new zv(r);if(r.name==="replace_all")return new Qv(r);if(r.name==="char_length")return new Wv(r);if(r.name==="byte_length")return new $v(r);if(r.name==="like")return new Yv(r);if(r.name==="regex_contains")return new Xv(r);if(r.name==="regex_match")return new Zv(r);if(r.name==="string_contains")return new eb(r);if(r.name==="starts_with")return new tb(r);if(r.name==="ends_with")return new nb(r);if(r.name==="to_lower")return new rb(r);if(r.name==="to_upper")return new sb(r);if(r.name==="trim")return new ib(r);if(r.name==="string_concat")return new ob(r);if(r.name==="map_get")return new ab(r);if(r.name==="cosine_distance")return new ub(r);if(r.name==="dot_product")return new cb(r);if(r.name==="euclidean_distance")return new lb(r);if(r.name==="vector_length")return new Bb(r);if(r.name==="unix_micros_to_timestamp")return new pb(r);if(r.name==="timestamp_to_unix_micros")return new _b(r);if(r.name==="unix_millis_to_timestamp")return new gb(r);if(r.name==="timestamp_to_unix_millis")return new Eb(r);if(r.name==="unix_seconds_to_timestamp")return new mb(r);if(r.name==="timestamp_to_unix_seconds")return new Ib(r);if(r.name==="timestamp_add")return new Db(r);if(r.name==="timestamp_subtract")return new yb(r)}throw new Error(`Unknown Expr : ${r}`)}class Bv{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===on)return R.newValue({referenceValue:di(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return R.newValue({timestampValue:du(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return R.newValue({timestampValue:du(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?aa(n)?R.newValue(function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:du(i.serializer,te.fromTimestamp(ri(o)))};if(i.serverTimestampBehavior==="previous"){const a=ua(o);if(a)return a}return{nullValue:"NULL_VALUE"}}(e,n)):R.newValue(n):R.pr()}}class hv{constructor(e){this.expr=e}evaluate(e,t){return R.newValue(this.expr._getValue())}}class dv{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.cr.map(s=>se(s).evaluate(e,t));return n.some(s=>s.yr())?R.mr():R.newValue({arrayValue:{values:n.map(s=>s.value)}})}}function lt(r){return Zr(r)?Number(r.doubleValue):Number(r.integerValue)}function _n(r){return BigInt(r.integerValue)}const fv=BigInt("0x7fffffffffffffff"),Cv=-BigInt("0x8000000000000000");class ga{constructor(e){this.expr=e}evaluate(e,t){J(this.expr.params.length>=2,24778);const n=se(this.expr.params[0]).evaluate(e,t),s=se(this.expr.params[1]).evaluate(e,t);let i=this.br(n,s);for(const o of this.expr.params.slice(2)){const a=se(o).evaluate(e,t);i=this.br(i,a)}return i}br(e,t){if(e.yr()||t.yr())return R.mr();if(e.wr()||t.wr())return R.gr();const n=e.value,s=t.value;if(!Zr(n)&&!an(n)||!Zr(s)&&!an(s))return R.mr();if(Zr(n)||Zr(s)){const i=this.Sr(n,s);return i?R.newValue(i):R.mr()}if(an(n)&&an(s)){const i=this.vr(n,s);return i===void 0?R.mr():typeof i=="number"?R.newValue({doubleValue:i}):i<Cv||i>fv?R.mr():R.newValue({integerValue:`${i}`})}return R.mr()}}function Ln(r,e){return Ye(r)!==Ye(e)?"TYPE_MISMATCH":Nt(r)||Nt(e)?"NOT_EQ":Mt(r)&&Mt(e)?"EQ":Mt(r)||Mt(e)?"NULL":_r(r)&&_r(e)?function(n,s){var o,a,u;if(((o=n.values)==null?void 0:o.length)!==((a=s.values)==null?void 0:a.length))return"NOT_EQ";let i=!1;for(let l=0;l<(((u=n.values)==null?void 0:u.length)??0);l++){const B=n.values[l],d=s.values[l];switch(Ln(B,d)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:Z(44609,{Dr:B,Cr:d})}}return i?"NULL":"EQ"}(r.arrayValue,e.arrayValue):Cs(r)&&Cs(e)||ss(r)&&ss(e)?function(n,s){const i=n.fields||{},o=s.fields||{};if(bu(i)!==bu(o))return"NOT_EQ";let a=!1;for(const u in i)if(i.hasOwnProperty(u)){if(o[u]===void 0)return"NOT_EQ";switch(Ln(i[u],o[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":a=!0}}return a?"NULL":"EQ"}(r.mapValue,e.mapValue):function(n,s){return Jt(n,s,{u:!1,i:!0,o:!0})}(r,e)?"EQ":"NOT_EQ"}class pv extends ga{vr(e,t){return _n(e)+_n(t)}Sr(e,t){return{doubleValue:lt(e)+lt(t)}}}class gv extends ga{constructor(e){super(e),this.expr=e}vr(e,t){return _n(e)-_n(t)}Sr(e,t){return{doubleValue:lt(e)-lt(t)}}}class mv extends ga{constructor(e){super(e),this.expr=e}vr(e,t){return _n(e)*_n(t)}Sr(e,t){return{doubleValue:lt(e)*lt(t)}}}class _v extends ga{constructor(e){super(e),this.expr=e}vr(e,t){const n=_n(t);if(n!==BigInt(0))return _n(e)/n}Sr(e,t){const n=lt(t);return n===0?{doubleValue:si(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:lt(e)/n}}}class Ev extends ga{constructor(e){super(e),this.expr=e}vr(e,t){const n=_n(t);if(n!==BigInt(0))return _n(e)%n}Sr(e,t){const n=lt(t);if(n!==0)return{doubleValue:lt(e)%n}}}class Iv{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const a=se(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!((i=a.value)!=null&&i.booleanValue))return R.newValue(at);break;case"NULL":s=!0;break;default:n=!0}}return n?R.mr():s?R.gr():R.newValue(St)}}class fc{constructor(e){this.expr=e}evaluate(e,t){var s;J(this.expr.params.length===1,9634);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return R.newValue({booleanValue:!((s=n.value)!=null&&s.booleanValue)});case"NULL":return R.gr();default:return R.mr()}}}class Dv{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const a=se(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if((i=a.value)!=null&&i.booleanValue)return R.newValue(St);break;case"NULL":s=!0;break;default:n=!0}}return n?R.mr():s?R.gr():R.newValue(at)}}class ch{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const a=se(o).evaluate(e,t);switch(a.type){case"BOOLEAN":n=ch.xor(n,!!((i=a.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return R.mr()}}return s?R.gr():R.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class F_{constructor(e){this.expr=e}evaluate(e,t){var o,a;J(this.expr.params.length===2,55094);let n=!1;const s=se(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return R.mr()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return R.mr()}if(n)return R.gr();for(const u of((a=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:a.values)??[])switch(Mt(s.value)&&Mt(u)?"EQ":Ln(s.value,u)){case"EQ":return R.newValue(St);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Z(44608,{value:s.value,candidate:u})}return n?R.gr():R.newValue(at)}}class yv{constructor(e){this.expr=e}evaluate(e,t){return new fc(new V("not",[new V("equal_any",this.expr.params)])).evaluate(e,t)}}class wv{constructor(e){this.expr=e}evaluate(e,t){J(this.expr.params.length===1,23322);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return R.newValue(at);case"DOUBLE":return R.newValue({booleanValue:isNaN(lt(n.value))});case"NULL":return R.gr();default:return R.mr()}}}class Tv{constructor(e){this.expr=e}evaluate(e,t){return J(this.expr.params.length===1,50406),new fc(new V("not",[new V("is_nan",this.expr.params)])).evaluate(e,t)}}class Av{constructor(e){this.expr=e}evaluate(e,t){switch(J(this.expr.params.length===1,23123),se(this.expr.params[0]).evaluate(e,t).type){case"NULL":return R.newValue(St);case"UNSET":case"ERROR":return R.mr();default:return R.newValue(at)}}}class Rv{constructor(e){this.expr=e}evaluate(e,t){return J(this.expr.params.length===1,23167),new fc(new V("not",[new V("is_null",this.expr.params)])).evaluate(e,t)}}class vv{constructor(e){this.expr=e}evaluate(e,t){return J(this.expr.params.length===1,5228),se(this.expr.params[0]).evaluate(e,t).type==="ERROR"?R.newValue(St):R.newValue(at)}}class bv{constructor(e){this.expr=e}evaluate(e,t){switch(J(this.expr.params.length===1,6877),se(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return R.mr();case"UNSET":return R.newValue(at);default:return R.newValue(St)}}}class Pv{constructor(e){this.expr=e}evaluate(e,t){var s;J(this.expr.params.length===3,11706);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return(s=n.value)!=null&&s.booleanValue?se(this.expr.params[1]).evaluate(e,t):se(this.expr.params[2]).evaluate(e,t);case"NULL":return se(this.expr.params[2]).evaluate(e,t);default:return R.mr()}}}class Sv{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(i=>se(i).evaluate(e,t));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||gt(i.value,s.value)>0?i:s}return s===void 0?R.gr():s}}class Nv{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(i=>se(i).evaluate(e,t));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||gt(i.value,s.value)<0?i:s}return s===void 0?R.gr():s}}class Oi{constructor(e){this.expr=e}evaluate(e,t){J(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return R.mr()}const s=se(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return R.mr()}return this.Fr(n,s)}}class Ov extends Oi{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return R.newValue(St);if(e.wr()||t.wr()||Nt(e.value)||Nt(t.value)||Ye(e.value)!==Ye(t.value))return R.newValue(at);switch(Ln(e.value,t.value)){case"EQ":return R.newValue(St);case"NOT_EQ":return R.newValue(at);case"NULL":return R.gr();default:Z(44615,{left:e,right:t})}}}class Fv extends Oi{constructor(e){super(e),this.expr=e}Fr(e,t){switch(Ln(e.value,t.value)){case"EQ":return R.newValue(at);case"NOT_EQ":case"TYPE_MISMATCH":return R.newValue(St);case"NULL":return R.gr();default:Z(44614,{left:e,right:t})}}}class Lv extends Oi{constructor(e){super(e),this.expr=e}Fr(e,t){return Ye(e.value)!==Ye(t.value)||Nt(e.value)||Nt(t.value)?R.newValue(at):R.newValue({booleanValue:gt(e.value,t.value)<0})}}class xv extends Oi{constructor(e){super(e),this.expr=e}Fr(e,t){return Ye(e.value)!==Ye(t.value)||Nt(e.value)||Nt(t.value)?R.newValue(at):Ln(e.value,t.value)==="EQ"?R.newValue(St):R.newValue({booleanValue:gt(e.value,t.value)<0})}}class Vv extends Oi{constructor(e){super(e),this.expr=e}Fr(e,t){return Ye(e.value)!==Ye(t.value)||Nt(e.value)||Nt(t.value)?R.newValue(at):R.newValue({booleanValue:gt(e.value,t.value)>0})}}class kv extends Oi{constructor(e){super(e),this.expr=e}Fr(e,t){return Ye(e.value)!==Ye(t.value)||Nt(e.value)||Nt(t.value)?R.newValue(at):Ln(e.value,t.value)==="EQ"?R.newValue(St):R.newValue({booleanValue:gt(e.value,t.value)>0})}}class Mv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Gv{constructor(e){this.expr=e}evaluate(e,t){var s;J(this.expr.params.length===1,216);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return R.gr();case"ARRAY":{const i=((s=n.value.arrayValue)==null?void 0:s.values)??[];return R.newValue({arrayValue:{values:[...i].reverse()}})}default:return R.mr()}}}class Uv{constructor(e){this.expr=e}evaluate(e,t){return J(this.expr.params.length===2,52884),new F_(new V("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class Hv{constructor(e){this.expr=e}evaluate(e,t){var u,l,B,d;J(this.expr.params.length===2,1392);let n=!1;const s=se(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return R.mr()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return R.mr()}if(n)return R.gr();const o=((l=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:l.values)??[],a=((d=(B=s.value)==null?void 0:B.arrayValue)==null?void 0:d.values)??[];for(const C of o){let g=!1;n=!1;for(const m of a){switch(Mt(C)&&Mt(m)?"EQ":Ln(C,m)){case"EQ":g=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Z(44613,{value:m,search:C})}if(g)break}if(!g)return R.newValue(at)}return R.newValue(St)}}class qv{constructor(e){this.expr=e}evaluate(e,t){var u,l,B,d;J(this.expr.params.length===2,2680);let n=!1;const s=se(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return R.mr()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return R.mr()}if(n)return R.gr();const o=((l=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:l.values)??[],a=((d=(B=s.value)==null?void 0:B.arrayValue)==null?void 0:d.values)??[];for(const C of a)for(const g of o)switch(Mt(C)&&Mt(g)?"EQ":Ln(C,g)){case"EQ":return R.newValue(St);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Z(60403,{value:C,search:g})}return n?R.gr():R.newValue(at)}}class jv{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;J(this.expr.params.length===1,38605);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return R.gr();case"ARRAY":return R.newValue({integerValue:`${((o=(i=(s=n.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return R.mr()}}}class Jv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Kv{constructor(e){this.expr=e}evaluate(e,t){var s,i;J(this.expr.params.length===1,1508);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return R.gr();case"BYTES":{const o=(s=n.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const a=Ne.fromBase64String(o).toUint8Array();return a.reverse(),R.newValue({bytesValue:Ne.fromUint8Array(a).toBase64()})}return R.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=n.value)==null?void 0:i.stringValue,a=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),u=Array.from(a,l=>l.segment).reverse();return R.newValue({stringValue:u.join("")})}default:return R.mr()}}}class zv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Qv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Wv{constructor(e){this.expr=e}evaluate(e,t){J(this.expr.params.length===1,19400);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return R.gr();case"STRING":{const s=function(o){let a=0;for(let u=0;u<o.length;u++){const l=o.codePointAt(u);if(l===void 0)return;if(l<=65535)if(l>=55296&&l<=57343)if(l<=56319){const B=o.codePointAt(u+1);B!==void 0&&B>=56320&&B<=57343?(a+=1,u++):a+=1}else a+=1;else a+=1;else{if(!(l<=1114111))return;a+=1,u++}}return a}(n.value.stringValue);return s===void 0?R.mr():R.newValue({integerValue:s})}default:return R.mr()}}}class $v{constructor(e){this.expr=e}evaluate(e,t){var s,i;J(this.expr.params.length===1,8486);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const o=(s=n.value)==null?void 0:s.bytesValue;return typeof o=="string"?R.newValue({integerValue:Ne.fromBase64String(o).toUint8Array().length}):R.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=function(u){let l=0;for(let B=0;B<u.length;B++){const d=u.codePointAt(B);if(d===void 0)return;if(d>=55296&&d<=57343){if(!(d<=56319))return;{const C=u.codePointAt(B+1);if(C===void 0||!(C>=56320&&C<=57343))return;l+=4,B++}}else if(d<=127)l+=1;else if(d<=2047)l+=2;else if(d<=65535)l+=3;else{if(!(d<=1114111))return;l+=4,B++}}return l}((i=n.value)==null?void 0:i.stringValue);return o===void 0?R.mr():R.newValue({integerValue:o})}case"NULL":return R.gr();default:return R.mr()}}}class Fi{constructor(e){this.expr=e}evaluate(e,t){var o,a;J(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const s=se(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":n=!0;break;default:return R.mr()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return R.mr()}return n?R.gr():this.Or((o=s.value)==null?void 0:o.stringValue,(a=i.value)==null?void 0:a.stringValue)}}class Yv extends Fi{Or(e,t){try{const n=function(o){let a="";for(let u=0;u<o.length;u++){const l=o.charAt(u);switch(l){case"_":a+=".";break;case"%":a+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":a+="\\"+l;break;default:a+=l}}return"^"+a+"$"}(t),s=vB.compile(n);return R.newValue({booleanValue:s.matches(e)})}catch(n){return tt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),R.mr()}}}class Xv extends Fi{Or(e,t){try{const n=vB.compile(t);return R.newValue({booleanValue:n.test(e)})}catch{return tt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),R.mr()}}}class Zv extends Fi{Or(e,t){try{return R.newValue({booleanValue:vB.compile(t).matches(e)})}catch{return tt(`Invalid regex pattern found in regex_match: ${t}, returning error`),R.mr()}}}class eb extends Fi{Or(e,t){return R.newValue({booleanValue:e.includes(t)})}}class tb extends Fi{Or(e,t){return R.newValue({booleanValue:e.startsWith(t)})}}class nb extends Fi{Or(e,t){return R.newValue({booleanValue:e.endsWith(t)})}}class rb{constructor(e){this.expr=e}evaluate(e,t){var s,i;J(this.expr.params.length===1,29079);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return R.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return R.gr();default:return R.mr()}}}class sb{constructor(e){this.expr=e}evaluate(e,t){var s,i;J(this.expr.params.length===1,60487);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return R.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return R.gr();default:return R.mr()}}}class ib{constructor(e){this.expr=e}evaluate(e,t){var s,i;J(this.expr.params.length===1,28544);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return R.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return R.gr();default:return R.mr()}}}class ob{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(o=>se(o).evaluate(e,t));let s="",i=!1;for(const o of n)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return R.mr()}return i?R.gr():R.newValue({stringValue:s})}}class ab{constructor(e){this.expr=e}evaluate(e,t){var o,a,u,l;J(this.expr.params.length===2,4483);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return R.pr();case"MAP":break;default:return R.mr()}const s=se(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return R.mr();const i=(l=(a=(o=n.value)==null?void 0:o.mapValue)==null?void 0:a.fields)==null?void 0:l[(u=s.value)==null?void 0:u.stringValue];return i===void 0?R.pr():R.newValue(i)}}class lh{constructor(e){this.expr=e}evaluate(e,t){var l,B;J(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const s=se(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":n=!0;break;default:return R.mr()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return R.mr()}if(n)return R.gr();const o=Ml(s.value),a=Ml(i.value);if(o===void 0||a===void 0||((l=o.values)==null?void 0:l.length)!==((B=a.values)==null?void 0:B.length))return R.mr();const u=this.Mr(o,a);return u===void 0||isNaN(u)?R.mr():R.newValue({doubleValue:u})}}class ub extends lh{Mr(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return;let i=0,o=0,a=0;for(let l=0;l<n.length;l++){if(!mr(n[l])||!mr(s[l]))return;const B=lt(n[l]),d=lt(s[l]);i+=B*d,o+=B*B,a+=d*d}const u=Math.sqrt(o)*Math.sqrt(a);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class cb extends lh{Mr(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!mr(n[o])||!mr(s[o]))return;i+=lt(n[o])*lt(s[o])}return i}}class lb extends lh{Mr(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!mr(n[o])||!mr(s[o]))return;const a=lt(n[o]),u=lt(s[o]);i+=Math.pow(a-u,2)}return Math.sqrt(i)}}class Bb{constructor(e){this.expr=e}evaluate(e,t){var s;J(this.expr.params.length===1,39044);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const i=Ml(n.value);return R.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return R.gr();default:return R.mr()}}}const Jo=BigInt(-62135596800),Ko=BigInt(253402300799),xu=BigInt(1e3),dr=BigInt(1e6),hb=Jo*xu,db=Ko*xu+BigInt(999),fb=Jo*dr,Cb=Ko*dr+BigInt(999999);function Bh(r){return r>=fb&&r<=Cb}function L_(r){return r>=Jo&&r<=Ko}function zo(r,e){const t=BigInt(r);return!(t<Jo||t>Ko)&&!(e<0||e>=1e9)&&(t!==Jo||e===0)&&!(t===Ko&&e>999999999)}function x_(r,e){return e<0?{seconds:r-1,nanos:e+1e9}:{seconds:r,nanos:e}}function hh(r){return BigInt(r.seconds)*dr+BigInt(Math.trunc(r.nanoseconds/1e3))}class dh{constructor(e){this.expr=e}evaluate(e,t){J(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return R.gr();default:return R.mr()}}}class pb extends dh{toTimestamp(e){if(!Bh(e))return R.mr();let t=Number(e/dr),n=Number(e%dr*BigInt(1e3));const s=x_(t,n);return t=s.seconds,n=s.nanos,zo(t,n)?R.newValue({timestampValue:{seconds:t,nanos:n}}):R.mr()}}class gb extends dh{toTimestamp(e){if(!function(o){return o>=hb&&o<=db}(e))return R.mr();let t=Number(e/xu),n=Number(e%xu*BigInt(1e6));const s=x_(t,n);return t=s.seconds,n=s.nanos,zo(t,n)?R.newValue({timestampValue:{seconds:t,nanos:n}}):R.mr()}}class mb extends dh{toTimestamp(e){if(!L_(e))return R.mr();const t=Number(e);return R.newValue({timestampValue:{seconds:t,nanos:0}})}}class fh{constructor(e){this.expr=e}evaluate(e,t){J(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return R.gr();default:return R.mr()}const s=jB(n.value.timestampValue);return zo(s.seconds,s.nanoseconds)?this.Nr(s):R.mr()}}class _b extends fh{Nr(e){const t=hh(e);return Bh(t)?R.newValue({integerValue:`${t.toString()}`}):R.mr()}}class Eb extends fh{Nr(e){const t=hh(e),n=t/BigInt(1e3),s=t%BigInt(1e3);return n>BigInt(0)||s===BigInt(0)?R.newValue({integerValue:n.toString()}):R.newValue({integerValue:(n-BigInt(1)).toString()})}}class Ib extends fh{Nr(e){const t=BigInt(e.seconds);return L_(t)?R.newValue({integerValue:t.toString()}):R.mr()}}class V_{constructor(e){this.expr=e}evaluate(e,t){J(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const s=se(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return R.mr()}const i=se(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=function(j){switch(j){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),o===void 0)return R.mr();break;case"NULL":n=!0;break;default:return R.mr()}const a=se(this.expr.params[2]).evaluate(e,t);switch(a.type){case"INT":break;case"NULL":n=!0;break;default:return R.mr()}if(n)return R.gr();const u=BigInt(a.value.integerValue);let l;try{switch(o){case"microsecond":l=u;break;case"millisecond":l=u*BigInt(1e3);break;case"second":l=u*BigInt(1e6);break;case"minute":l=u*BigInt(6e7);break;case"hour":l=u*BigInt(36e8);break;case"day":l=u*BigInt(864e8);break;default:return R.mr()}if(o!=="microsecond"&&u!==BigInt(0)&&l/u!==BigInt(this.Lr(o)))return R.mr()}catch(G){return tt(`Error during timestamp arithmetic: ${G}`),R.mr()}const B=jB(s.value.timestampValue);if(!zo(B.seconds,B.nanoseconds))return R.mr();const d=hh(B),C=this.Br(d,l);if(!Bh(C))return R.mr();const g=Number(C/dr),m=C%dr,w=Number((m<0?m+dr:m)*BigInt(1e3)),S=m<0?g-1:g;return zo(S,w)?R.newValue({timestampValue:{seconds:S,nanos:w}}):R.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class Db extends V_{Br(e,t){return e+t}}class yb extends V_{Br(e,t){return e-t}}function Qo(r){if((r=O_(r))instanceof Ss)return`fld(${r.fieldName})`;if(r instanceof Ns)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof ye?`ref(${t.path})`:t instanceof yt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(r.value)})`;if(r instanceof V)return`fn(${r.name},[${r.params.map(Qo).join(",")}])`;if(r.expressionType==="ListOfExpressions")return`list([${r.cr.map(Qo).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(r,null,2)}`)}function wb(r){if(r instanceof b_)return`${r._name}(${Wa(r.fields)})`;if(r instanceof P_){let e=`${r._name}(${Wa(r.accumulators)})`;return r.groups.size>0&&(e+=`grouping(${Wa(r.groups)})`),e}if(r instanceof S_)return`${r._name}(${Wa(r.groups)})`;if(r instanceof da)return`${r._name}(${r.hr})`;if(r instanceof fa)return`${r._name}(${r.collectionId})`;if(r instanceof hc)return`${r._name}()`;if(r instanceof dc)return`${r._name}(${r.Tr.sort()})`;if(r instanceof Ca)return`${r._name}(${Qo(r.condition)})`;if(r instanceof Dr)return`${r._name}(${r.limit})`;if(r instanceof un)return`${r._name}(${function(t){return t.map(n=>`${Qo(n.expr)}${n.direction}`).join(",")}(r.orderings)})`;throw new Error(`Unrecognized stage ${r._name}`)}function Wa(r){return`${Array.from(r.entries()).sort().map(([e,t])=>`${e}=${Qo(t)}`).join(",")}`}function Pn(r){return r.stages.map(e=>wb(e)).join("|")}function k_(r,e){return Pn(r)===Pn(e)}function Me(r){return r instanceof ft}function QC(r){return Me(r)?Pn(r):yo(r)}function M_(r){return Me(r)?Pn(r):function(t){return`${Su(Ct(t))}|lt:${t.limitType}`}(r)}function Cc(r,e){return r instanceof ft&&e instanceof ft?k_(r,e):!(r instanceof ft&&!(e instanceof ft)||!(r instanceof ft)&&e instanceof ft)&&Nm(r,e)}function pc(r){return yn(r)?Pn(r):Su(r)}function Ch(r,e){return r instanceof ft&&e instanceof ft?k_(r,e):!(r instanceof ft&&!(e instanceof ft)||!(r instanceof ft)&&e instanceof ft)&&MB(r,e)}function Tb(r,e){const t=function(s){let i=!1;const o=[];for(const a of s)if(a instanceof un)if(i=!0,a.orderings.some(u=>u.expr instanceof Ss&&u.expr.fieldName===on))o.push(a);else{const u=a.orderings.map(l=>l);u.push(fu(on).ascending()),o.push(new un(u,{}))}else a instanceof Dr&&(i||(o.push(new un([fu(on).ascending()],{})),i=!0)),o.push(a);return i||o.push(new un([fu(on).ascending()],{})),o}(r.stages);if(r.userDataReader){const n=r.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(n))}return new ft(r.userDataReader.serializer,t,e)}/**
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
 */class ph{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xA(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Do(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Do(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Vm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const u=mm(o,a);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ae())}isEqual(e){return this.batchId===e.batchId&&ni(this.mutations,e.mutations,(t,n)=>wC(t,n))&&ni(this.baseMutations,e.baseMutations,(t,n)=>wC(t,n))}}class gh{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){J(e.mutations.length===n.length,58842,{Ur:e.mutations.length,kr:n.length});let s=function(){return tR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new gh(e,t,n,s)}}/**
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
 */const Vu="";function pt(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=WC(e)),e=Ab(r.get(t),e);return WC(e)}function Ab(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case Vu:t+="";break;default:t+=i}}return t}function WC(r){return r+Vu+""}function cn(r){const e=r.length;if(J(e>=2,64408,{path:r}),e===2)return J(r.charAt(0)===Vu&&r.charAt(1)==="",56145,{path:r}),ue.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(Vu,i);switch((o<0||o>t)&&Z(50515,{path:r}),r.charAt(o+1)){case"":const a=r.substring(i,o);let u;s.length===0?u=a:(s+=a,u=s,s=""),n.push(u);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:Z(61167,{path:r})}i=o+2}return new ue(n)}/**
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
 */const Kr="remoteDocuments",ma="owner",Ms="owner",Wo="mutationQueues",Rb="userId",Kt="mutations",$C="batchId",es="userMutationsIndex",YC=["userId","batchId"];/**
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
 */function Cu(r,e){return[r,pt(e)]}function G_(r,e,t){return[r,pt(e),t]}const vb={},fi="documentMutations",ku="remoteDocumentsV14",bb=["prefixPath","collectionGroup","readTime","documentId"],pu="documentKeyIndex",Pb=["prefixPath","collectionGroup","documentId"],U_="collectionGroupIndex",Sb=["collectionGroup","readTime","prefixPath","documentId"],$o="remoteDocumentGlobal",Yl="remoteDocumentGlobalKey",Ci="targets",H_="queryTargetsIndex",Nb=["canonicalId","targetId"],pi="targetDocuments",Ob=["targetId","path"],mh="documentTargetsIndex",Fb=["path","targetId"],Mu="targetGlobalKey",as="targetGlobal",Yo="collectionParents",Lb=["collectionId","parent"],gi="clientMetadata",xb="clientId",gc="bundles",Vb="bundleId",mc="namedQueries",kb="name",_h="indexConfiguration",Mb="indexId",Xl="collectionGroupIndex",Gb="collectionGroup",bo="indexState",Ub=["indexId","uid"],q_="sequenceNumberIndex",Hb=["uid","sequenceNumber"],Po="indexEntries",qb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],j_="documentKeyIndex",jb=["indexId","uid","orderedDocumentKey"],_c="documentOverlays",Jb=["userId","collectionPath","documentId"],Zl="collectionPathOverlayIndex",Kb=["userId","collectionPath","largestBatchId"],J_="collectionGroupOverlayIndex",zb=["userId","collectionGroup","largestBatchId"],Eh="globals",Qb="name",K_=[Wo,Kt,fi,Kr,Ci,ma,as,pi,gi,$o,Yo,gc,mc],Wb=[...K_,_c],z_=[Wo,Kt,fi,ku,Ci,ma,as,pi,gi,$o,Yo,gc,mc,_c],Q_=z_,Ih=[...Q_,_h,bo,Po],$b=Ih,W_=[...Ih,Eh],Yb=W_;/**
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
 */function $_(r,e,t){const n=r.store(Kt),s=r.store(fi),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=n.Hn({range:o},(B,d,C)=>(a++,C.delete()));i.push(u.next(()=>{J(a===1,47070,{batchId:t.batchId})}));const l=[];for(const B of t.mutations){const d=G_(e,B.key.path,t.batchId);i.push(s.delete(d)),l.push(B.key)}return P.waitFor(i).next(()=>l)}function Gu(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw Z(14731);e=r.noDocument}return JSON.stringify(e).length}/**
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
 */class eB extends u_{constructor(e,t){super(),this.qr=e,this.currentSequenceNumber=t}}function rt(r,e){const t=W(r);return gn.Cn(t.qr,e)}/**
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
 */class Dh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ln{constructor(e,t,n,s,i=te.min(),o=te.min(),a=Ne.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Y_{constructor(e){this.$r=e}}function Xb(r,e){let t;if(e.document)t=ac(r.$r,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=K.fromSegments(e.noDocument.path),s=Es(e.noDocument.readTime);t=xe.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return Z(56709);{const n=K.fromSegments(e.unknownDocument.path),s=Es(e.unknownDocument.version);t=xe.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new _e(s[0],s[1]);return te.fromTimestamp(i)}(e.readTime)),t}function XC(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Uu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:di(i,o.key),fields:o.data.value.mapValue.fields,updateTime:os(i,o.version.toTimestamp()),createTime:os(i,o.createTime.toTimestamp())}}(r.$r,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:_s(e.version)};else{if(!e.isUnknownDocument())return Z(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:_s(e.version)}}return n}function Uu(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function _s(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Es(r){const e=new _e(r.seconds,r.nanoseconds);return te.fromTimestamp(e)}function Wr(r,e){const t=(e.baseMutations||[]).map(i=>Ql(r.$r,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>Ql(r.$r,i)),s=_e.fromMillis(e.localWriteTimeMs);return new ph(e.batchId,s,t,n)}function _o(r,e){const t=Es(e.readTime),n=e.lastLimboFreeSnapshotVersion!==void 0?Es(e.lastLimboFreeSnapshotVersion):te.min();let s;return s=function(o){return o.structuredPipeline!==void 0}(e.query)?function(o,a){var B,d;const u=o.structuredPipeline;J((((B=u==null?void 0:u.pipeline)==null?void 0:B.stages)??[]).length>0,1845);const l=(d=u==null?void 0:u.pipeline)==null?void 0:d.stages.map(Zb);return new ft(a,l)}(e.query,r.$r):function(o){return o.documents!==void 0}(e.query)?function(o){const a=o.documents.length;return J(a===1,1966,{count:a}),Ct(Si(jm(o.documents[0])))}(e.query):function(o){return Ct(Qm(o))}(e.query),new ln(s,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Ne.fromBase64String(e.resumeToken))}function X_(r,e){const t=_s(e.snapshotVersion),n=_s(e.lastLimboFreeSnapshotVersion);let s;s=yn(e.target)?Wm(r.$r,e.target):GB(e.target)?Km(r.$r,e.target):uc(r.$r,e.target).Se;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:pc(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Ec(r){const e=Qm({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ou(e,e.limit,"L"):e}function $a(r,e){return new Dh(e.largestBatchId,Ql(r.$r,e.overlayMutation))}function ZC(r,e){const t=e.path.lastSegment();return[r,pt(e.path.popLast()),t]}function ep(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:_s(n.readTime),documentKey:pt(n.documentKey.path),largestBatchId:n.largestBatchId}}function Zb(r){switch(r.name){case"collection":return new da(r.args[0].referenceValue,{});case"collection_group":return new fa(r.args[1].stringValue,{});case"database":return new hc({});case"documents":return new dc(r.args.map(e=>e.referenceValue),{});case"where":return new Ca(tB(r.args[0]),{});case"limit":{const e=r.args[0].integerValue??r.args[0].doubleValue;return new Dr(typeof e=="number"?e:Number(e),{})}case"sort":return new un(r.args.map(e=>function(n){var i,o;const s=(i=n.mapValue)==null?void 0:i.fields;return new oh(tB(s.expression),(o=s.direction)==null?void 0:o.stringValue,"orderingFromProto")}(e)),{});default:throw new Error(`Stage type: ${r.name} not supported.`)}}function tB(r){return r.fieldReferenceValue?new Ss(en("_exprFromProto",r.fieldReferenceValue),"_exprFromProto"):r.functionValue?function(t){var n;return new V(t.functionValue.name,((n=t.functionValue.args)==null?void 0:n.map(tB))||[])}(r):Ns._fromProto(r)}class Ic{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Kr={}}static Qr(e,t,n,s){J(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new Ic(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Qn(e).Hn({index:es,range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=Ws(e),o=Qn(e);return o.add({}).next(a=>{J(typeof a=="number",49019);const u=new ph(a,t,n,s),l=function(g,m,w){const S=w.baseMutations.map(j=>Ho(g.$r,j)),G=w.mutations.map(j=>Ho(g.$r,j));return{userId:m,batchId:w.batchId,localWriteTimeMs:w.localWriteTime.toMillis(),baseMutations:S,mutations:G}}(this.serializer,this.userId,u),B=[];let d=new we((C,g)=>ie(C.canonicalString(),g.canonicalString()));for(const C of s){const g=G_(this.userId,C.key.path,a);d=d.add(C.key.path.popLast()),B.push(o.put(l)),B.push(i.put(g,vb))}return d.forEach(C=>{B.push(this.indexManager.addToCollectionParentIndex(e,C))}),e.addOnCommittedListener(()=>{this.Kr[a]=u.keys()}),P.waitFor(B).next(()=>u)})}lookupMutationBatch(e,t){return Qn(e).get(t).next(n=>n?(J(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),Wr(this.serializer,n)):null)}Wr(e,t){return this.Kr[t]?P.resolve(this.Kr[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Kr[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Qn(e).Hn({index:es,range:s},(o,a,u)=>{a.userId===this.userId&&(J(a.batchId>=n,47524,{Gr:n}),i=Wr(this.serializer,a)),u.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=hr;return Qn(e).Hn({index:es,range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,hr],[this.userId,Number.POSITIVE_INFINITY]);return Qn(e).Qn(es,t).next(n=>n.map(s=>Wr(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Cu(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return Ws(e).Hn({range:s},(o,a,u)=>{const[l,B,d]=o,C=cn(B);if(l===this.userId&&t.path.isEqual(C))return Qn(e).get(d).next(g=>{if(!g)throw Z(61480,{zr:o,batchId:d});J(g.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:g.userId,batchId:d}),i.push(Wr(this.serializer,g))});u.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new we(ie);const s=[];return t.forEach(i=>{const o=Cu(this.userId,i.path),a=IDBKeyRange.lowerBound(o),u=Ws(e).Hn({range:a},(l,B,d)=>{const[C,g,m]=l,w=cn(g);C===this.userId&&i.path.isEqual(w)?n=n.add(m):d.done()});s.push(u)}),P.waitFor(s).next(()=>this.jr(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=Cu(this.userId,n),o=IDBKeyRange.lowerBound(i);let a=new we(ie);return Ws(e).Hn({range:o},(u,l,B)=>{const[d,C,g]=u,m=cn(C);d===this.userId&&n.isPrefixOf(m)?m.length===s&&(a=a.add(g)):B.done()}).next(()=>this.jr(e,a))}jr(e,t){const n=[],s=[];return t.forEach(i=>{s.push(Qn(e).get(i).next(o=>{if(o===null)throw Z(35274,{batchId:i});J(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(Wr(this.serializer,o))}))}),P.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return $_(e.qr,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Hr(t.batchId)}),P.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Hr(e){delete this.Kr[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return P.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Ws(e).Hn({range:n},(i,o,a)=>{if(i[0]===this.userId){const u=cn(i[1]);s.push(u)}else a.done()}).next(()=>{J(s.length===0,56720,{Jr:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return Z_(e,this.userId,t)}Yr(e){return eE(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:hr,lastStreamToken:""})}}function Z_(r,e,t){const n=Cu(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return Ws(r).Hn({range:i,jn:!0},(a,u,l)=>{const[B,d,C]=a;B===e&&d===s&&(o=!0),l.done()}).next(()=>o)}function Qn(r){return rt(r,Kt)}function Ws(r){return rt(r,fi)}function eE(r){return rt(r,Wo)}/**
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
 */class eP{getBundleMetadata(e,t){return tp(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Es(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return tp(e).put(function(s){return{bundleId:s.id,createTime:_s(Ke(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return np(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:Ec(i.bundledQuery),readTime:Es(i.readTime)}}(n)})}saveNamedQuery(e,t){return np(e).put(function(s){return{name:s.name,readTime:_s(Ke(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function tp(r){return rt(r,gc)}function np(r){return rt(r,mc)}/**
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
 */class Dc{constructor(e,t){this.serializer=e,this.userId=t}static Qr(e,t){const n=t.uid||"";return new Dc(e,n)}getOverlay(e,t){return Gs(e).get(ZC(this.userId,t)).next(n=>n?$a(this.serializer,n):null)}getOverlays(e,t){const n=jt();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}getAllOverlays(e,t){const n=jt();return Gs(e).Hn((s,i)=>{const o=$a(this.serializer,i);o.largestBatchId>t&&n.set(o.getKey(),o)}).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const a=new Dh(t,o);s.push(this.Zr(e,a))}),P.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(pt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Gs(e).zn(Zl,a))}),P.waitFor(i)}getOverlaysForCollection(e,t,n){const s=jt(),i=pt(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Gs(e).Qn(Zl,o).next(a=>{for(const u of a){const l=$a(this.serializer,u);s.set(l.getKey(),l)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=jt();let o;const a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Gs(e).Hn({index:J_,range:a},(u,l,B)=>{const d=$a(this.serializer,l);i.size()<s||d.largestBatchId===o?(i.set(d.getKey(),d),o=d.largestBatchId):B.done()}).next(()=>i)}Zr(e,t){return Gs(e).put(function(s,i,o){const[a,u,l]=ZC(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:l,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ho(s.$r,o.mutation)}}(this.serializer,this.userId,t))}}function Gs(r){return rt(r,_c)}/**
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
 */class tP{Xr(e){return rt(e,Eh)}getSessionToken(e){return this.Xr(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?Ne.fromUint8Array(n):Ne.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Xr(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class $r{constructor(){}ei(e,t){this.ti(e,t),t.ni()}ti(e,t){if("nullValue"in e)this.ri(t,5);else if("booleanValue"in e)this.ri(t,10),t.ii(e.booleanValue?1:0);else if("integerValue"in e)this.ri(t,15),t.ii(Se(e.integerValue));else if("doubleValue"in e){const n=Se(e.doubleValue);isNaN(n)?this.ri(t,13):(this.ri(t,15),si(n)?t.ii(0):t.ii(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ri(t,20),typeof n=="string"&&(n=On(n)),t.si(`${n.seconds||""}`),t.ii(n.nanos||0)}else if("stringValue"in e)this._i(e.stringValue,t),this.oi(t);else if("bytesValue"in e)this.ri(t,30),t.ai(Fn(e.bytesValue)),this.oi(t);else if("referenceValue"in e)this.ui(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ri(t,45),t.ii(n.latitude||0),t.ii(n.longitude||0)}else"mapValue"in e?Bm(e)?this.ri(t,Number.MAX_SAFE_INTEGER):Cs(e)?this.ci(e.mapValue,t):(this.li(e.mapValue,t),this.oi(t)):"arrayValue"in e?(this.Ei(e.arrayValue,t),this.oi(t)):Z(19022,{hi:e})}_i(e,t){this.ri(t,25),this.Ti(e,t)}Ti(e,t){t.si(e)}li(e,t){const n=e.fields||{};this.ri(t,55);for(const s of Object.keys(n))this._i(s,t),this.ti(n[s],t)}ci(e,t){var o,a;const n=e.fields||{};this.ri(t,53);const s=ds,i=((a=(o=n[s].arrayValue)==null?void 0:o.values)==null?void 0:a.length)||0;this.ri(t,15),t.ii(Se(i)),this._i(s,t),this.ti(n[s],t)}Ei(e,t){const n=e.values||[];this.ri(t,50);for(const s of n)this.ti(s,t)}ui(e,t){this.ri(t,37),K.fromName(e).path.forEach(n=>{this.ri(t,60),this.Ti(n,t)})}ri(e,t){e.ii(t)}oi(e){e.ii(2)}}$r.Pi=new $r;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=255;function nP(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function rp(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=nP(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class rP{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ii(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ri(n.value),n=t.next();this.Ai()}Vi(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.di(n.value),n=t.next();this.fi()}mi(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ri(n);else if(n<2048)this.Ri(960|n>>>6),this.Ri(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ri(480|n>>>12),this.Ri(128|63&n>>>6),this.Ri(128|63&n);else{const s=t.codePointAt(0);this.Ri(240|s>>>18),this.Ri(128|63&s>>>12),this.Ri(128|63&s>>>6),this.Ri(128|63&s)}}this.Ai()}pi(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.di(n);else if(n<2048)this.di(960|n>>>6),this.di(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.di(480|n>>>12),this.di(128|63&n>>>6),this.di(128|63&n);else{const s=t.codePointAt(0);this.di(240|s>>>18),this.di(128|63&s>>>12),this.di(128|63&s>>>6),this.di(128|63&s)}}this.fi()}gi(e){const t=this.yi(e),n=rp(t);this.wi(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}bi(e){const t=this.yi(e),n=rp(t);this.wi(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}Si(){this.Di(Us),this.Di(255)}xi(){this.Ci(Us),this.Ci(255)}reset(){this.position=0}seed(e){this.wi(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fi(){return this.buffer.slice(0,this.position)}yi(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Ri(e){const t=255&e;t===0?(this.Di(0),this.Di(255)):t===Us?(this.Di(Us),this.Di(0)):this.Di(t)}di(e){const t=255&e;t===0?(this.Ci(0),this.Ci(255)):t===Us?(this.Ci(Us),this.Ci(0)):this.Ci(e)}Ai(){this.Di(0),this.Di(1)}fi(){this.Ci(0),this.Ci(1)}Di(e){this.wi(1),this.buffer[this.position++]=e}Ci(e){this.wi(1),this.buffer[this.position++]=~e}wi(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class sP{constructor(e){this.Oi=e}ai(e){this.Oi.Ii(e)}si(e){this.Oi.mi(e)}ii(e){this.Oi.gi(e)}ni(){this.Oi.Si()}}class iP{constructor(e){this.Oi=e}ai(e){this.Oi.Vi(e)}si(e){this.Oi.pi(e)}ii(e){this.Oi.bi(e)}ni(){this.Oi.xi()}}class uo{constructor(){this.Oi=new rP,this.ascending=new sP(this.Oi),this.descending=new iP(this.Oi)}seed(e){this.Oi.seed(e)}Mi(e){return e===0?this.ascending:this.descending}Fi(){return this.Oi.Fi()}reset(){this.Oi.reset()}}/**
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
 */class Yr{constructor(e,t,n,s){this.Ni=e,this.Li=t,this.Bi=n,this.Ui=s}ki(){const e=this.Ui.length,t=e===0||this.Ui[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.Ui,0),t!==e?n.set([0],this.Ui.length):++n[n.length-1],new Yr(this.Ni,this.Li,this.Bi,n)}qi(e,t,n){return{indexId:this.Ni,uid:e,arrayValue:gu(this.Bi),directionalValue:gu(this.Ui),orderedDocumentKey:gu(t),documentKey:n.path.toArray()}}$i(e,t,n){const s=this.qi(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function Wn(r,e){let t=r.Ni-e.Ni;return t!==0?t:(t=sp(r.Bi,e.Bi),t!==0?t:(t=sp(r.Ui,e.Ui),t!==0?t:K.comparator(r.Li,e.Li)))}function sp(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function gu(r){return Xp()?function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n}(r):r}function ip(r){return typeof r!="string"?r:function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(r)}class op{constructor(e){this.Ki=new we((t,n)=>Je.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Qi=e.orderBy,this.Wi=[];for(const t of e.filters){const n=t;n.isInequality()?this.Ki=this.Ki.add(n):this.Wi.push(n)}}get Gi(){return this.Ki.size>1}zi(e){if(J(e.collectionGroup===this.collectionId,49279),this.Gi)return!1;const t=Hl(e);if(t!==void 0&&!this.ji(t))return!1;const n=Jr(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.ji(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Ki.size>0){const a=this.Ki.getIterator().getNext();if(!s.has(a.field.canonicalString())){const u=n[i];if(!this.Hi(a,u)||!this.Ji(this.Qi[o++],u))return!1}++i}for(;i<n.length;++i){const a=n[i];if(o>=this.Qi.length||!this.Ji(this.Qi[o++],a))return!1}return!0}Yi(){if(this.Gi)return null;let e=new we(Je.comparator);const t=[];for(const n of this.Wi)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new is(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new is(n.field,0))}for(const n of this.Qi)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new is(n.field,n.dir==="asc"?0:1)));return new Bi(Bi.UNKNOWN_ID,this.collectionId,t,hi.empty())}ji(e){for(const t of this.Wi)if(this.Hi(t,e))return!0;return!1}Hi(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}Ji(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function tE(r){var t,n;if(J(r instanceof Ce||r instanceof Te,20012),r instanceof Ce){if(r instanceof Am){const s=((n=(t=r.value.arrayValue)==null?void 0:t.values)==null?void 0:n.map(i=>Ce.create(r.field,"==",i)))||[];return Te.create(s,"or")}return r}const e=r.filters.map(s=>tE(s));return Te.create(e,r.op)}function oP(r){if(r.getFilters().length===0)return[];const e=sB(tE(r));return J(nE(e),7391),nB(e)||rB(e)?[e]:e.getFilters()}function nB(r){return r instanceof Ce}function rB(r){return r instanceof Te&&VB(r)}function nE(r){return nB(r)||rB(r)||function(t){if(t instanceof Te&&Gl(t)){for(const n of t.getFilters())if(!nB(n)&&!rB(n))return!1;return!0}return!1}(r)}function sB(r){if(J(r instanceof Ce||r instanceof Te,34018),r instanceof Ce)return r;if(r.filters.length===1)return sB(r.filters[0]);const e=r.filters.map(n=>sB(n));let t=Te.create(e,r.op);return t=Hu(t),nE(t)?t:(J(t instanceof Te,64498),J(ci(t),40251),J(t.filters.length>1,57927),t.filters.reduce((n,s)=>yh(n,s)))}function yh(r,e){let t;return J(r instanceof Ce||r instanceof Te,38388),J(e instanceof Ce||e instanceof Te,25473),t=r instanceof Ce?e instanceof Ce?function(s,i){return Te.create([s,i],"and")}(r,e):ap(r,e):e instanceof Ce?ap(e,r):function(s,i){if(J(s.filters.length>0&&i.filters.length>0,48005),ci(s)&&ci(i))return ym(s,i.getFilters());const o=Gl(s)?s:i,a=Gl(s)?i:s,u=o.filters.map(l=>yh(l,a));return Te.create(u,"or")}(r,e),Hu(t)}function ap(r,e){if(ci(e))return ym(e,r.getFilters());{const t=e.filters.map(n=>yh(r,n));return Te.create(t,"or")}}function Hu(r){if(J(r instanceof Ce||r instanceof Te,11850),r instanceof Ce)return r;const e=r.getFilters();if(e.length===1)return Hu(e[0]);if(Im(r))return r;const t=e.map(s=>Hu(s)),n=[];return t.forEach(s=>{s instanceof Ce?n.push(s):s instanceof Te&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:Te.create(n,r.op)}/**
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
 */class aP{constructor(){this.Zi=new wh}addToCollectionParentIndex(e,t){return this.Zi.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Ut.min())}updateCollectionGroup(e,t,n){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class wh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new we(ue.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new we(ue.comparator)).toArray()}}/**
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
 */const up="IndexedDbIndexManager",Ya=new Uint8Array(0);class uP{constructor(e,t){this.databaseId=t,this.Xi=new wh,this.es=new Mn(n=>Su(n),(n,s)=>MB(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xi.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.Xi.add(t)});const i={collectionId:n,parent:pt(s)};return cp(e).put(i)}return P.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[em(t),""],!1,!0);return cp(e).Qn(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(cn(o.parent))}return n})}addFieldIndex(e,t){const n=co(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=qs(e);return i.next(a=>{o.put(ep(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=co(e),s=qs(e),i=Hs(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=co(e),n=Hs(e),s=qs(e);return t.zn().next(()=>n.zn()).next(()=>s.zn())}createTargetIndexes(e,t){return P.forEach(this.ts(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new op(n).Yi();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=Hs(e);let s=!0;const i=new Map;return P.forEach(this.ts(t),o=>this.ns(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=ae();const a=[];return P.forEach(i,(u,l)=>{U(up,`Using index ${function(Y){return`id=${Y.indexId}|cg=${Y.collectionGroup}|f=${Y.fields.map(re=>`${re.fieldPath}:${re.kind}`).join(",")}`}(u)} to execute ${Su(t)}`);const B=function(Y,re){const ce=Hl(re);if(ce===void 0)return null;for(const le of Nu(Y,ce.fieldPath))switch(le.op){case"array-contains-any":return le.value.arrayValue.values||[];case"array-contains":return[le.value]}return null}(l,u),d=function(Y,re){const ce=new Map;for(const le of Jr(re))for(const A of Nu(Y,le.fieldPath))switch(A.op){case"==":case"in":ce.set(le.fieldPath.canonicalString(),A.value);break;case"not-in":case"!=":return ce.set(le.fieldPath.canonicalString(),A.value),Array.from(ce.values())}return null}(l,u),C=function(Y,re){const ce=[];let le=!0;for(const A of Jr(re)){const I=A.kind===0?bC(Y,A.fieldPath,Y.startAt):PC(Y,A.fieldPath,Y.startAt);ce.push(I.value),le&&(le=I.inclusive)}return new Er(ce,le)}(l,u),g=function(Y,re){const ce=[];let le=!0;for(const A of Jr(re)){const I=A.kind===0?PC(Y,A.fieldPath,Y.endAt):bC(Y,A.fieldPath,Y.endAt);ce.push(I.value),le&&(le=I.inclusive)}return new Er(ce,le)}(l,u),m=this.rs(u,l,C),w=this.rs(u,l,g),S=this.ss(u,l,d),G=this._s(u.indexId,B,m,C.inclusive,w,g.inclusive,S);return P.forEach(G,j=>n.Gn(j,t.limit).next(Y=>{Y.forEach(re=>{const ce=K.fromSegments(re.documentKey);o.has(ce)||(o=o.add(ce),a.push(ce))})}))}).next(()=>a)}return P.resolve(null)})}ts(e){let t=this.es.get(e);return t||(e.filters.length===0?t=[e]:t=oP(Te.create(e.filters,"and")).map(n=>ql(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.es.set(e,t),t)}_s(e,t,n,s,i,o,a){const u=(t!=null?t.length:1)*Math.max(n.length,i.length),l=u/(t!=null?t.length:1),B=[];for(let d=0;d<u;++d){const C=t?this.us(t[d/l]):Ya,g=this.cs(e,C,n[d%l],s),m=this.ls(e,C,i[d%l],o),w=a.map(S=>this.cs(e,C,S,!0));B.push(...this.createRange(g,m,w))}return B}cs(e,t,n,s){const i=new Yr(e,K.empty(),t,n);return s?i:i.ki()}ls(e,t,n,s){const i=new Yr(e,K.empty(),t,n);return s?i.ki():i}ns(e,t){const n=new op(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)n.zi(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let n=2;const s=this.ts(t);return P.forEach(s,i=>this.ns(e,i).next(o=>{o?n!==0&&o.fields.length<function(u){let l=new we(Je.comparator),B=!1;for(const d of u.filters)for(const C of d.getFlattenedFilters())C.field.isKeyField()||(C.op==="array-contains"||C.op==="array-contains-any"?B=!0:l=l.add(C.field));for(const d of u.orderBy)d.field.isKeyField()||(l=l.add(d.field));return l.size+(B?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Es(e,t){const n=new uo;for(const s of Jr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Mi(s.kind);$r.Pi.ei(i,o)}return n.Fi()}us(e){const t=new uo;return $r.Pi.ei(e,t.Mi(0)),t.Fi()}hs(e,t){const n=new uo;return $r.Pi.ei(fs(this.databaseId,t),n.Mi(function(i){const o=Jr(i);return o.length===0?0:o[o.length-1].kind}(e))),n.Fi()}ss(e,t,n){if(n===null)return[];let s=[];s.push(new uo);let i=0;for(const o of Jr(e)){const a=n[i++];for(const u of s)if(this.Ts(t,o.fieldPath)&&_r(a))s=this.Ps(s,o,a);else{const l=u.Mi(o.kind);$r.Pi.ei(a,l)}}return this.Is(s)}rs(e,t,n){return this.ss(e,t,n.position)}Is(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Fi();return t}Ps(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const a of s){const u=new uo;u.seed(a.Fi()),$r.Pi.ei(o,u.Mi(t.kind)),i.push(u)}return i}Ts(e,t){return!!e.filters.find(n=>n instanceof Ce&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=co(e),s=qs(e);return(t?n.Qn(Xl,IDBKeyRange.bound(t,t)):n.Qn()).next(i=>{const o=[];return P.forEach(i,a=>s.get([a.indexId,this.uid]).next(u=>{o.push(function(B,d){const C=d?new hi(d.sequenceNumber,new Ut(Es(d.readTime),new K(cn(d.documentKey)),d.largestBatchId)):hi.empty(),g=B.fields.map(([m,w])=>new is(Je.fromServerFormat(m),w));return new Bi(B.indexId,B.collectionGroup,g,C)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:ie(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=co(e),i=qs(e);return this.Rs(e).next(o=>s.Qn(Xl,IDBKeyRange.bound(t,t)).next(a=>P.forEach(a,u=>i.put(ep(u.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return P.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(n.set(s.collectionGroup,a),P.forEach(a,u=>this.As(e,s,u).next(l=>{const B=this.Vs(i,u);return l.isEqual(B)?P.resolve():this.ds(e,i,u,l,B)}))))})}fs(e,t,n,s){return Hs(e).put(s.qi(this.uid,this.hs(n,t.key),t.key))}ps(e,t,n,s){return Hs(e).delete(s.$i(this.uid,this.hs(n,t.key),t.key))}As(e,t,n){const s=Hs(e);let i=new we(Wn);return s.Hn({index:j_,range:IDBKeyRange.only([n.indexId,this.uid,gu(this.hs(n,t))])},(o,a)=>{i=i.add(new Yr(n.indexId,t,ip(a.arrayValue),ip(a.directionalValue)))}).next(()=>i)}Vs(e,t){let n=new we(Wn);const s=this.Es(t,e);if(s==null)return n;const i=Hl(t);if(i!=null){const o=e.data.field(i.fieldPath);if(_r(o))for(const a of o.arrayValue.values||[])n=n.add(new Yr(t.indexId,e.key,this.us(a),s))}else n=n.add(new Yr(t.indexId,e.key,Ya,s));return n}ds(e,t,n,s,i){U(up,"Updating index entries for document '%s'",t.key);const o=[];return function(u,l,B,d,C){const g=u.getIterator(),m=l.getIterator();let w=ks(g),S=ks(m);for(;w||S;){let G=!1,j=!1;if(w&&S){const Y=B(w,S);Y<0?j=!0:Y>0&&(G=!0)}else w!=null?j=!0:G=!0;G?(d(S),S=ks(m)):j?(C(w),w=ks(g)):(w=ks(g),S=ks(m))}}(s,i,Wn,a=>{o.push(this.fs(e,t,n,a))},a=>{o.push(this.ps(e,t,n,a))}),P.waitFor(o)}Rs(e){let t=1;return qs(e).Hn({index:q_,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,a)=>Wn(o,a)).filter((o,a,u)=>!a||Wn(o,u[a-1])!==0);const s=[];s.push(e);for(const o of n){const a=Wn(o,e),u=Wn(o,t);if(a===0)s[0]=e.ki();else if(a>0&&u<0)s.push(o),s.push(o.ki());else if(u>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.gs(s[o],s[o+1]))return[];const a=s[o].$i(this.uid,Ya,K.empty()),u=s[o+1].$i(this.uid,Ya,K.empty());i.push(IDBKeyRange.bound(a,u))}return i}gs(e,t){return Wn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(lp)}getMinOffset(e,t){return P.mapArray(this.ts(t),n=>this.ns(e,n).next(s=>s||Z(44426))).next(lp)}}function cp(r){return rt(r,Yo)}function Hs(r){return rt(r,Po)}function co(r){return rt(r,_h)}function qs(r){return rt(r,bo)}function lp(r){J(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;kB(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Ut(e.readTime,e.documentKey,t)}/**
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
 */class xn{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new xn(0)}static bs(){return new xn(-1)}}/**
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
 */class cP{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Ss(e).next(t=>{const n=new xn(t.highestTargetId);return t.highestTargetId=n.next(),this.vs(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ss(e).next(t=>te.fromTimestamp(new _e(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ss(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Ss(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.vs(e,s)))}addTargetData(e,t){return this.Ds(e,t).next(()=>this.Ss(e).next(n=>(n.targetCount+=1,this.xs(t,n),this.vs(e,n))))}updateTargetData(e,t){return this.Ds(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>js(e).delete(t.targetId)).next(()=>this.Ss(e)).next(n=>(J(n.targetCount>0,8065),n.targetCount-=1,this.vs(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return js(e).Hn((o,a)=>{const u=_o(this.serializer,a);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))}).next(()=>P.waitFor(i)).next(()=>s)}forEachTarget(e,t){return js(e).Hn((n,s)=>{const i=_o(this.serializer,s);t(i)})}Ss(e){return Bp(e).get(Mu).next(t=>(J(t!==null,2888),t))}vs(e,t){return Bp(e).put(Mu,t)}Ds(e,t){return js(e).put(X_(this.serializer,t))}xs(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Ss(e).next(t=>t.targetCount)}getTargetData(e,t){const n=pc(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return js(e).Hn({range:s,index:H_},(o,a,u)=>{const l=_o(this.serializer,a);Ch(t,l.target)&&(i=l,u.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=ir(e);return t.forEach(o=>{const a=pt(o.path);s.push(i.put({targetId:n,path:a})),s.push(this.referenceDelegate.addReference(e,n,o))}),P.waitFor(s)}removeMatchingKeys(e,t,n){const s=ir(e);return P.forEach(t,i=>{const o=pt(i.path);return P.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=ir(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=ir(e);let i=ae();return s.Hn({range:n,jn:!0},(o,a,u)=>{const l=cn(o[1]),B=new K(l);i=i.add(B)}).next(()=>i)}containsKey(e,t){const n=pt(t.path),s=IDBKeyRange.bound([n],[em(n)],!1,!0);let i=0;return ir(e).Hn({index:mh,jn:!0,range:s},([o,a],u,l)=>{o!==0&&(i++,l.done())}).next(()=>i>0)}ye(e,t){return js(e).get(t).next(n=>n?_o(this.serializer,n):null)}}function js(r){return rt(r,Ci)}function Bp(r){return rt(r,as)}function ir(r){return rt(r,pi)}/**
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
 */class lP{constructor(e,t){this.db=e,this.garbageCollector=h_(this,t)}ir(e){const t=this.Cs(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Cs(e){let t=0;return this.sr(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}sr(e,t){return this.Fs(e,(n,s)=>t(s))}addReference(e,t,n){return Xa(e,n)}removeReference(e,t,n){return Xa(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Xa(e,t)}Os(e,t){return function(s,i){let o=!1;return eE(s).Jn(a=>Z_(s,a,i).next(u=>(u&&(o=!0),P.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Fs(e,(o,a)=>{if(a<=t){const u=this.Os(e,o).next(l=>{if(!l)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,te.min()),ir(e).delete(function(d){return[0,pt(d.path)]}(o))))});s.push(u)}}).next(()=>P.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Xa(e,t)}Fs(e,t){const n=ir(e);let s,i=vt.wn;return n.Hn({index:mh},([o,a],{path:u,sequenceNumber:l})=>{o===0?(i!==vt.wn&&t(new K(cn(s)),i),i=l,s=u):i=vt.wn}).next(()=>{i!==vt.wn&&t(new K(cn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Xa(r,e){return ir(r).put(function(n,s){return{targetId:0,path:pt(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}// Copyright 2024 Google LLC* @license
function rE(r,e){var n;let t=e;for(const s of r.stages)t=BP({serializer:r.serializer,serverTimestampBehavior:(n=r.listenOptions)==null?void 0:n.serverTimestampBehavior},s,t);return t}function yc(r,e){return rE(r,[e]).length>0}function sE(r,e){return Me(r)?yc(r,e):ic(r,e)}function BP(r,e,t){if(e instanceof da)return function(s,i,o){return o.filter(a=>a.isFoundDocument()&&`/${a.key.getCollectionPath().canonicalString()}`===i.hr)}(0,e,t);if(e instanceof Ca)return function(s,i,o){return o.filter(a=>{const u=vo(se(i.condition).evaluate(s,a));return u!==void 0&&Jt(u,St)})}(r,e,t);if(e instanceof fa)return function(s,i,o){return o.filter(a=>a.isFoundDocument()&&a.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof hc)return function(s,i,o){return o.filter(a=>a.isFoundDocument())}(0,0,t);if(e instanceof dc)return function(s,i,o){return o.filter(a=>a.isFoundDocument()&&i.Pr.has(a.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof Dr)return function(s,i,o){return o.slice(0,i.limit)}(0,e,t);if(e instanceof un)return function(s,i,o){const a=i.orderings.map(u=>({Ms:se(u.expr),direction:u.direction}));return[...o].sort((u,l)=>{for(const{Ms:B,direction:d}of a){const C=vo(B.evaluate(s,u)),g=vo(B.evaluate(s,l)),m=gt(C??Cn,g??Cn);if(m!==0)return d==="ascending"?m:-m}return 0})}(r,e,t);throw new Error(`Unknown stage: ${e._name}`)}function qu(r){const e=function(n){for(let s=n.stages.length-1;s>=0;s--){const i=n.stages[s];if(i instanceof un)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(r);return(t,n)=>{for(const s of e){const i=vo(se(s.expr).evaluate({serializer:r.serializer},t)),o=vo(se(s.expr).evaluate({serializer:r.serializer},n)),a=gt(i||Cn,o||Cn);if(a!==0)return s.direction==="ascending"?a:-a}return 0}}function pl(r){for(let e=r.stages.length-1;e>=0;e--){const t=r.stages[e];if(t instanceof Dr)return{limit:t.limit}}}/**
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
 */class iE{constructor(){this.changes=new Mn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?P.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hP{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return $n(e).put(n)}removeEntry(e,t,n){return $n(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Uu(o),a[a.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Ns(e,n)))}getEntry(e,t){let n=xe.newInvalidDocument(t);return $n(e).Hn({index:pu,range:IDBKeyRange.only(lo(t))},(s,i)=>{n=this.Ls(t,i)}).next(()=>n)}Bs(e,t){let n={size:0,document:xe.newInvalidDocument(t)};return $n(e).Hn({index:pu,range:IDBKeyRange.only(lo(t))},(s,i)=>{n={document:this.Ls(t,i),size:Gu(i)}}).next(()=>n)}getEntries(e,t){let n=We();return this.Us(e,t,(s,i)=>{const o=this.Ls(s,i);n=n.insert(s,o)}).next(()=>n)}getAllEntries(e){let t=We();return $n(e).Hn((n,s)=>{const i=this.Ls(K.fromSegments(s.prefixPath.concat(s.collectionGroup,s.documentId)),s);t=t.insert(i.key,i)}).next(()=>t)}ks(e,t){let n=We(),s=new be(K.comparator);return this.Us(e,t,(i,o)=>{const a=this.Ls(i,o);n=n.insert(i,a),s=s.insert(i,Gu(o))}).next(()=>({documents:n,qs:s}))}Us(e,t,n){if(t.isEmpty())return P.resolve();let s=new we(fp);t.forEach(u=>s=s.add(u));const i=IDBKeyRange.bound(lo(s.first()),lo(s.last())),o=s.getIterator();let a=o.getNext();return $n(e).Hn({index:pu,range:i},(u,l,B)=>{const d=K.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&fp(a,d)<0;)n(a,null),a=o.getNext();a&&a.isEqual(d)&&(n(a,l),a=o.hasNext()?o.getNext():null),a?B.Kn(lo(a)):B.done()}).next(()=>{for(;a;)n(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=Me(t)?ue.fromString(pa(t)):t.path,a=[o.popLast().toArray(),o.lastSegment(),Uu(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return $n(e).Qn(IDBKeyRange.bound(a,u,!0)).next(l=>{i==null||i.incrementDocumentReadCount(l.length);let B=We();for(const d of l){const C=this.Ls(K.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);C.isFoundDocument()&&(sE(t,C)||s.has(C.key))&&(B=B.insert(C.key,C))}return B})}getAllFromCollectionGroup(e,t,n,s){let i=We();const o=dp(t,n),a=dp(t,Ut.max());return $n(e).Hn({index:U_,range:IDBKeyRange.bound(o,a,!0)},(u,l,B)=>{const d=this.Ls(K.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(d.key,d),i.size===s&&B.done()}).next(()=>i)}newChangeBuffer(e){return new dP(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return hp(e).get(Yl).next(t=>(J(!!t,20021),t))}Ns(e,t){return hp(e).put(Yl,t)}Ls(e,t){if(t){const n=Xb(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(te.min())))return n}return xe.newInvalidDocument(e)}}function oE(r){return new hP(r)}class dP extends iE{constructor(e,t){super(),this.$s=e,this.trackRemovals=t,this.Ks=new Mn(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new we((i,o)=>ie(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Ks.get(i);if(t.push(this.$s.removeEntry(e,i,a.readTime)),o.isValidDocument()){const u=XC(this.$s.serializer,o);s=s.add(i.path.popLast());const l=Gu(u);n+=l-a.size,t.push(this.$s.addEntry(e,i,u))}else if(n-=a.size,this.trackRemovals){const u=XC(this.$s.serializer,o.convertToNoDocument(te.min()));t.push(this.$s.addEntry(e,i,u))}}),s.forEach(i=>{t.push(this.$s.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.$s.updateMetadata(e,n)),P.waitFor(t)}getFromCache(e,t){return this.$s.Bs(e,t).next(n=>(this.Ks.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.$s.ks(e,t).next(({documents:n,qs:s})=>(s.forEach((i,o)=>{this.Ks.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function hp(r){return rt(r,$o)}function $n(r){return rt(r,ku)}function lo(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function dp(r,e){const t=e.documentKey.path.toArray();return[r,Uu(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function fp(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=ie(t[i],n[i]),s)return s;return s=ie(t.length,n.length),s||(s=ie(t[t.length-2],n[n.length-2]),s||ie(t[t.length-1],n[n.length-1]))}/**
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
 */class fP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class aE{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Do(n.mutation,s,Rt.empty(),_e.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,ae()).next(()=>n))}getLocalViewOfDocuments(e,t,n=ae()){const s=jt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=zr();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=jt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ae()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,n,s){let i=We();const o=wo(),a=function(){return wo()}();return t.forEach((u,l)=>{const B=n.get(l.key);s.has(l.key)&&(B===void 0||B.mutation instanceof Vn)?i=i.insert(l.key,l):B!==void 0?(o.set(l.key,B.mutation.getFieldMask()),Do(B.mutation,l,B.mutation.getFieldMask(),_e.now())):o.set(l.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((l,B)=>o.set(l,B)),t.forEach((l,B)=>a.set(l,new fP(B,o.get(l)??null))),a))}recalculateAndSaveOverlays(e,t){const n=wo();let s=new be((o,a)=>o-a),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=t.get(u);if(l===null)return;let B=n.get(u)||Rt.empty();B=a.applyToLocalView(l,B),n.set(u,B);const d=(s.get(a.batchId)||ae()).add(u);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,B=u.value,d=Vm();B.forEach(C=>{if(!i.has(C)){const g=mm(t.get(C),n.get(C));g!==null&&d.set(C,g),i=i.add(C)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,d))}return P.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return Me(t)?this.getDocumentsMatchingPipeline(e,t,n,s):QA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):UB(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):P.resolve(jt());let a=li,u=i;return o.next(l=>P.forEach(l,(B,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(B)?P.resolve():this.remoteDocumentCache.getEntry(e,B).next(C=>{u=u.insert(B,C)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,u,l,ae())).next(B=>({batchId:a,changes:xm(B)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(n=>{let s=zr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=zr();return this.indexManager.getCollectionParents(e,i).next(a=>P.forEach(a,u=>{const l=function(d,C){return new kn(C,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,n,s).next(B=>{B.forEach((d,C)=>{o=o.insert(d,C)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>this.retrieveMatchingLocalDocuments(i,o,a=>ic(t,a)))}getDocumentsMatchingPipeline(e,t,n,s){if(bn(t)==="collection_group"){const i=uh(t);let o=zr();return this.indexManager.getCollectionParents(e,i).next(a=>P.forEach(a,u=>{const l=function(d,C){const g=d.stages.map(m=>m instanceof fa?new da(C.canonicalString(),{}):m);return new ft(d.serializer,g)}(t,u.child(i));return this.getDocumentsMatchingPipeline(e,l,n,s).next(B=>{B.forEach((d,C)=>{o=o.insert(d,C)})})}).next(()=>o))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next(o=>{switch(i=o,bn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s);case"documents":let a=ae();for(const u of Lu(t))a=a.add(K.fromPath(u));return this.remoteDocumentCache.getEntries(e,a);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new k("invalid-argument",`Invalid pipeline source to execute offline: ${Pn(t)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(i,o,a=>yc(t,a)))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach((i,o)=>{const a=o.getKey();t.get(a)===null&&(t=t.insert(a,xe.newInvalidDocument(a)))});let s=zr();return t.forEach((i,o)=>{const a=e.get(i);a!==void 0&&Do(a.mutation,o,Rt.empty(),_e.now()),n(o)&&(s=s.insert(i,o))}),s}getOverlaysForPipeline(e,t,n){switch(bn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,ue.fromString(pa(t)),n);case"collection_group":throw new k("invalid-argument",`Unexpected collection group pipeline: ${Pn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Lu(t).map(s=>K.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new k("invalid-argument",`Failed to get overlays for pipeline: ${Pn(t)}`)}}}/**
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
 */class CP{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return P.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ke(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,function(s){return{name:s.name,query:Ec(s.bundledQuery),readTime:Ke(s.readTime)}}(t)),P.resolve()}}/**
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
 */class pP{constructor(){this.overlays=new be(K.comparator),this.Gs=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const n=jt();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}getAllOverlays(e,t){const n=jt();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&n.set(s,i)}),P.resolve(n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.Zr(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Gs.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Gs.delete(n)),P.resolve()}getOverlaysForCollection(e,t,n){const s=jt(),i=t.length+1,o=new K(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new be((l,B)=>l-B);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>n){let B=i.get(l.largestBatchId);B===null&&(B=jt(),i=i.insert(l.largestBatchId,B)),B.set(l.getKey(),l)}}const a=jt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,B)=>a.set(l,B)),!(a.size()>=s)););return P.resolve(a)}Zr(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Gs.get(s.largestBatchId).delete(n.key);this.Gs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Dh(t,n));let i=this.Gs.get(t);i===void 0&&(i=ae(),this.Gs.set(t,i)),this.Gs.set(t,i.add(n.key))}}/**
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
 */class gP{constructor(){this.sessionToken=Ne.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class Th{constructor(){this.zs=new we(it.js),this.Hs=new we(it.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const n=new it(e,t);this.zs=this.zs.add(n),this.Hs=this.Hs.add(n)}Ys(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Zs(new it(e,t))}Xs(e,t){e.forEach(n=>this.removeReference(n,t))}e_(e){const t=new K(new ue([])),n=new it(t,e),s=new it(t,e+1),i=[];return this.Hs.forEachInRange([n,s],o=>{this.Zs(o),i.push(o.key)}),i}t_(){this.zs.forEach(e=>this.Zs(e))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new K(new ue([])),n=new it(t,e),s=new it(t,e+1);let i=ae();return this.Hs.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new it(e,0),n=this.zs.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class it{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return K.comparator(e.key,t.key)||ie(e.r_,t.r_)}static Js(e,t){return ie(e.r_,t.r_)||K.comparator(e.key,t.key)}}/**
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
 */class mP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new we(it.js)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ph(i,t,n,s);this.mutationQueue.push(o);for(const a of s)this.i_=this.i_.add(new it(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.__(n),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?hr:this.Gr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new it(t,0),s=new it(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([n,s],o=>{const a=this.s_(o.r_);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new we(ie);return t.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,o],a=>{n=n.add(a.r_)})}),P.resolve(this.o_(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;K.isDocumentKey(i)||(i=i.child(""));const o=new it(new K(i),0);let a=new we(ie);return this.i_.forEachWhile(u=>{const l=u.key.path;return!!n.isPrefixOf(l)&&(l.length===s&&(a=a.add(u.r_)),!0)},o),P.resolve(this.o_(a))}o_(e){const t=[];return e.forEach(n=>{const s=this.s_(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){J(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.i_;return P.forEach(t.mutations,s=>{const i=new it(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.i_=n})}Hr(e){}containsKey(e,t){const n=new it(t,0),s=this.i_.firstAfterOrEqual(n);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class _P{constructor(e){this.u_=e,this.docs=function(){return new be(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.u_(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return P.resolve(n?n.document.mutableCopy():xe.newInvalidDocument(t))}getEntries(e,t){let n=We();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():xe.newInvalidDocument(s))}),P.resolve(n)}getAllEntries(e){let t=We();return this.docs.forEach((n,s)=>{t=t.insert(n,s.document)}),P.resolve(t)}getDocumentsMatchingQuery(e,t,n,s){let i,o;Me(t)?(i=ue.fromString(pa(t)),o=B=>yc(t,B)):(i=t.path,o=B=>ic(t,B));let a=We();const u=new K(i.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:B,value:{document:d}}=l.getNext();if(!i.isPrefixOf(B.path))break;B.path.length>i.length+1||kB(vm(d),n)<=0||(s.has(d.key)||o(d))&&(a=a.insert(d.key,d.mutableCopy()))}return P.resolve(a)}getAllFromCollectionGroup(e,t,n,s){Z(9500)}c_(e,t){return P.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new EP(this)}getSize(e){return P.resolve(this.size)}}class EP extends iE{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.$s.addEntry(e,s)):this.$s.removeEntry(n)}),P.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
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
 */class IP{constructor(e){this.persistence=e,this.l_=new Mn(t=>pc(t),Ch),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.E_=0,this.h_=new Th,this.targetCount=0,this.T_=xn.ws()}forEachTarget(e,t){return this.l_.forEach((n,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.E_&&(this.E_=t),P.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new xn(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Ds(t),P.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.l_.forEach((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.l_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const n=this.l_.get(t)||null;return P.resolve(n)}addMatchingKeys(e,t,n){return this.h_.Ys(t,n),P.resolve()}removeMatchingKeys(e,t,n){this.h_.Xs(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),P.resolve()}getMatchingKeysForTargetId(e,t){const n=this.h_.n_(t);return P.resolve(n)}containsKey(e,t){return P.resolve(this.h_.containsKey(t))}}/**
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
 */class Ah{constructor(e,t){this.P_={},this.overlays={},this.I_=new vt(0),this.R_=!1,this.R_=!0,this.A_=new gP,this.referenceDelegate=e(this),this.V_=new IP(this),this.indexManager=new aP,this.remoteDocumentCache=function(s){return new _P(s)}(n=>this.referenceDelegate.d_(n)),this.serializer=new Y_(t),this.f_=new CP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new pP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.P_[e.toKey()];return n||(n=new mP(t,this.referenceDelegate),this.P_[e.toKey()]=n),n}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,n){U("MemoryPersistence","Starting transaction:",e);const s=new DP(this.I_.next());return this.referenceDelegate.m_(),n(s).next(i=>this.referenceDelegate.p_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}g_(e,t){return P.or(Object.values(this.P_).map(n=>()=>n.containsKey(e,t)))}}class DP extends u_{constructor(e){super(),this.currentSequenceNumber=e}}class wc{constructor(e){this.persistence=e,this.y_=new Th,this.w_=null}static b_(e){return new wc(e)}get S_(){if(this.w_)return this.w_;throw Z(60996)}addReference(e,t,n){return this.y_.addReference(n,t),this.S_.delete(n.toString()),P.resolve()}removeReference(e,t,n){return this.y_.removeReference(n,t),this.S_.add(n.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),P.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach(s=>this.S_.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.S_.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.S_,n=>{const s=K.fromPath(n);return this.v_(e,s).next(i=>{i||t.removeEntry(s,te.min())})}).next(()=>(this.w_=null,t.apply(e)))}updateLimboDocument(e,t){return this.v_(e,t).next(n=>{n?this.S_.delete(t.toString()):this.S_.add(t.toString())})}d_(e){return 0}v_(e,t){return P.or([()=>P.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class ju{constructor(e,t){this.persistence=e,this.D_=new Mn(n=>pt(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=h_(this,t)}static b_(e,t){return new ju(e,t)}m_(){}p_(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Cs(e){let t=0;return this.sr(e,n=>{t++}).next(()=>t)}sr(e,t){return P.forEach(this.D_,(n,s)=>this.Os(e,n,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.c_(e,o=>this.Os(e,o,t).next(a=>{a||(n++,i.removeEntry(o,te.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),P.resolve()}removeReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),P.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=lu(e.data.value)),t}Os(e,t,n){return P.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.D_.get(t);return P.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class yP{constructor(e){this.serializer=e}Nn(e,t,n,s){const i=new cc("createOrUpgrade",t);n<1&&s>=1&&(function(u){u.createObjectStore(ma)}(e),function(u){u.createObjectStore(Wo,{keyPath:Rb}),u.createObjectStore(Kt,{keyPath:$C,autoIncrement:!0}).createIndex(es,YC,{unique:!0}),u.createObjectStore(fi)}(e),Cp(e),function(u){u.createObjectStore(Kr)}(e));let o=P.resolve();return n<3&&s>=3&&(n!==0&&(function(u){u.deleteObjectStore(pi),u.deleteObjectStore(Ci),u.deleteObjectStore(as)}(e),Cp(e)),o=o.next(()=>function(u){const l=u.store(as),B={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:te.min().toTimestamp(),targetCount:0};return l.put(Mu,B)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(u,l){return l.store(Kt).Qn().next(d=>{u.deleteObjectStore(Kt),u.createObjectStore(Kt,{keyPath:$C,autoIncrement:!0}).createIndex(es,YC,{unique:!0});const C=l.store(Kt),g=d.map(m=>C.put(m));return P.waitFor(g)})}(e,i))),o=o.next(()=>{(function(u){u.createObjectStore(gi,{keyPath:xb})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.x_(i))),n<6&&s>=6&&(o=o.next(()=>(function(u){u.createObjectStore($o)}(e),this.C_(i)))),n<7&&s>=7&&(o=o.next(()=>this.F_(i))),n<8&&s>=8&&(o=o.next(()=>this.O_(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.M_(i))),n<11&&s>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(gc,{keyPath:Vb})})(e),function(u){u.createObjectStore(mc,{keyPath:kb})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(u){const l=u.createObjectStore(_c,{keyPath:Jb});l.createIndex(Zl,Kb,{unique:!1}),l.createIndex(J_,zb,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(u){const l=u.createObjectStore(ku,{keyPath:bb});l.createIndex(pu,Pb),l.createIndex(U_,Sb)}(e)).next(()=>this.N_(e,i)).next(()=>e.deleteObjectStore(Kr))),n<14&&s>=14&&(o=o.next(()=>this.L_(e,i))),n<15&&s>=15&&(o=o.next(()=>function(u){u.createObjectStore(_h,{keyPath:Mb,autoIncrement:!0}).createIndex(Xl,Gb,{unique:!1}),u.createObjectStore(bo,{keyPath:Ub}).createIndex(q_,Hb,{unique:!1}),u.createObjectStore(Po,{keyPath:qb}).createIndex(j_,jb,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore(bo).clear()}).next(()=>{t.objectStore(Po).clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(Eh,{keyPath:Qb})})(e)})),n<18&&s>=18&&Xp()&&(o=o.next(()=>{t.objectStore(bo).clear()}).next(()=>{t.objectStore(Po).clear()})),o}C_(e){let t=0;return e.store(Kr).Hn((n,s)=>{t+=Gu(s)}).next(()=>{const n={byteSize:t};return e.store($o).put(Yl,n)})}x_(e){const t=e.store(Wo),n=e.store(Kt);return t.Qn().next(s=>P.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,hr],[i.userId,i.lastAcknowledgedBatchId]);return n.Qn(es,o).next(a=>P.forEach(a,u=>{J(u.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const l=Wr(this.serializer,u);return $_(e,i.userId,l).next(()=>{})}))}))}F_(e){const t=e.store(pi),n=e.store(Kr);return e.store(as).get(Mu).next(s=>{const i=[];return n.Hn((o,a)=>{const u=new ue(o),l=function(d){return[0,pt(d)]}(u);i.push(t.get(l).next(B=>B?P.resolve():(d=>t.put({targetId:0,path:pt(d),sequenceNumber:s.highestListenSequenceNumber}))(u)))}).next(()=>P.waitFor(i))})}O_(e,t){e.createObjectStore(Yo,{keyPath:Lb});const n=t.store(Yo),s=new wh,i=o=>{if(s.add(o)){const a=o.lastSegment(),u=o.popLast();return n.put({collectionId:a,parent:pt(u)})}};return t.store(Kr).Hn({jn:!0},(o,a)=>{const u=new ue(o);return i(u.popLast())}).next(()=>t.store(fi).Hn({jn:!0},([o,a,u],l)=>{const B=cn(a);return i(B.popLast())}))}M_(e){const t=e.store(Ci);return t.Hn((n,s)=>{const i=_o(this.serializer,s),o=X_(this.serializer,i);return t.put(o)})}N_(e,t){const n=t.store(Kr),s=[];return n.Hn((i,o)=>{const a=t.store(ku),u=function(d){return d.document?new K(ue.fromString(d.document.name).popFirst(5)):d.noDocument?K.fromSegments(d.noDocument.path):d.unknownDocument?K.fromSegments(d.unknownDocument.path):Z(36783)}(o).path.toArray(),l={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>P.waitFor(s))}L_(e,t){const n=t.store(Kt),s=oE(this.serializer),i=new Ah(wc.b_,this.serializer.$r);return n.Qn().next(o=>{const a=new Map;return o.forEach(u=>{let l=a.get(u.userId)??ae();Wr(this.serializer,u).keys().forEach(B=>l=l.add(B)),a.set(u.userId,l)}),P.forEach(a,(u,l)=>{const B=new ot(l),d=Dc.Qr(this.serializer,B),C=i.getIndexManager(B),g=Ic.Qr(B,this.serializer,C,i.referenceDelegate);return new aE(s,g,d,C).recalculateAndSaveOverlaysForDocumentKeys(new eB(t,vt.wn),u).next()})})}}function Cp(r){r.createObjectStore(pi,{keyPath:Ob}).createIndex(mh,Fb,{unique:!0}),r.createObjectStore(Ci,{keyPath:"targetId"}).createIndex(H_,Nb,{unique:!0}),r.createObjectStore(as)}const Yn="IndexedDbPersistence",gl=18e5,ml=5e3,_l="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",uE="main";class Rh{constructor(e,t,n,s,i,o,a,u,l,B,d=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Ct=i,this.window=o,this.document=a,this.B_=l,this.U_=B,this.k_=d,this.I_=null,this.R_=!1,this.isPrimary=!1,this.networkEnabled=!0,this.q_=null,this.inForeground=!1,this.K_=null,this.Q_=null,this.W_=Number.NEGATIVE_INFINITY,this.G_=C=>Promise.resolve(),!Rh.Ye())throw new k(N.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new lP(this,s),this.z_=t+uE,this.serializer=new Y_(u),this.j_=new gn(this.z_,this.k_,new yP(this.serializer)),this.A_=new tP,this.V_=new cP(this.referenceDelegate,this.serializer),this.remoteDocumentCache=oE(this.serializer),this.f_=new eP,this.window&&this.window.localStorage?this.H_=this.window.localStorage:(this.H_=null,B===!1&&je(Yn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.J_().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(N.FAILED_PRECONDITION,_l);return this.Y_(),this.Z_(),this.X_(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.V_.getHighestSequenceNumber(e))}).then(e=>{this.I_=new vt(e,this.B_)}).then(()=>{this.R_=!0}).catch(e=>(this.j_&&this.j_.close(),Promise.reject(e)))}eo(e){return this.G_=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.j_.Bn(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ct.enqueueAndForget(async()=>{this.started&&await this.J_()}))}J_(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Za(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.no(e).next(t=>{t||(this.isPrimary=!1,this.Ct.enqueueRetryable(()=>this.G_(!1)))})}).next(()=>this.ro(e)).next(t=>this.isPrimary&&!t?this.io(e).next(()=>!1):!!t&&this.so(e).next(()=>!0))).catch(e=>{if(Nr(e))return U(Yn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U(Yn,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ct.enqueueRetryable(()=>this.G_(e)),this.isPrimary=e})}no(e){return Bo(e).get(Ms).next(t=>P.resolve(this._o(t)))}oo(e){return Za(e).delete(this.clientId)}async ao(){if(this.isPrimary&&!this.uo(this.W_,gl)){this.W_=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=rt(t,gi);return n.Qn().next(s=>{const i=this.co(s,gl),o=s.filter(a=>i.indexOf(a)===-1);return P.forEach(o,a=>n.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.H_)for(const t of e)this.H_.removeItem(this.lo(t.clientId))}}X_(){this.Q_=this.Ct.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.J_().then(()=>this.ao()).then(()=>this.X_()))}_o(e){return!!e&&e.ownerId===this.clientId}ro(e){return this.U_?P.resolve(!0):Bo(e).get(Ms).next(t=>{if(t!==null&&this.uo(t.leaseTimestampMs,ml)&&!this.Eo(t.ownerId)){if(this._o(t)&&this.networkEnabled)return!0;if(!this._o(t)){if(!t.allowTabSynchronization)throw new k(N.FAILED_PRECONDITION,_l);return!1}}return!(!this.networkEnabled||!this.inForeground)||Za(e).Qn().next(n=>this.co(n,ml).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&U(Yn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.R_=!1,this.ho(),this.Q_&&(this.Q_.cancel(),this.Q_=null),this.To(),this.Po(),await this.j_.runTransaction("shutdown","readwrite",[ma,gi],e=>{const t=new eB(e,vt.wn);return this.io(t).next(()=>this.oo(t))}),this.j_.close(),this.Io()}co(e,t){return e.filter(n=>this.uo(n.updateTimeMs,t)&&!this.Eo(n.clientId))}Ro(){return this.runTransaction("getActiveClients","readonly",e=>Za(e).Qn().next(t=>this.co(t,gl).map(n=>n.clientId)))}get started(){return this.R_}getGlobalsCache(){return this.A_}getMutationQueue(e,t){return Ic.Qr(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new uP(e,this.serializer.$r.databaseId)}getDocumentOverlayCache(e){return Dc.Qr(this.serializer,e)}getBundleCache(){return this.f_}runTransaction(e,t,n){U(Yn,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(u){return u===18?Yb:u===17?W_:u===16?$b:u===15?Ih:u===14?Q_:u===13?z_:u===12?Wb:u===11?K_:void Z(60245)}(this.k_);let o;return this.j_.runTransaction(e,s,i,a=>(o=new eB(a,this.I_?this.I_.next():vt.wn),t==="readwrite-primary"?this.no(o).next(u=>!!u||this.ro(o)).next(u=>{if(!u)throw je(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ct.enqueueRetryable(()=>this.G_(!1)),new k(N.FAILED_PRECONDITION,a_);return n(o)}).next(u=>this.so(o).next(()=>u)):this.Ao(o).next(()=>n(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ao(e){return Bo(e).get(Ms).next(t=>{if(t!==null&&this.uo(t.leaseTimestampMs,ml)&&!this.Eo(t.ownerId)&&!this._o(t)&&!(this.U_||this.allowTabSynchronization&&t.allowTabSynchronization))throw new k(N.FAILED_PRECONDITION,_l)})}so(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Bo(e).put(Ms,t)}static Ye(){return gn.Ye()}io(e){const t=Bo(e);return t.get(Ms).next(n=>this._o(n)?(U(Yn,"Releasing primary lease."),t.delete(Ms)):P.resolve())}uo(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(je(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Y_(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.K_=()=>{this.Ct.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.J_()))},this.document.addEventListener("visibilitychange",this.K_),this.inForeground=this.document.visibilityState==="visible")}To(){this.K_&&(this.document.removeEventListener("visibilitychange",this.K_),this.K_=null)}Z_(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.q_=()=>{this.ho();const t=/(?:Version|Mobile)\/1[456]/;Yp()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ct.enterRestrictedMode(!0),this.Ct.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.q_))}Po(){this.q_&&(this.window.removeEventListener("pagehide",this.q_),this.q_=null)}Eo(e){var t;try{const n=((t=this.H_)==null?void 0:t.getItem(this.lo(e)))!==null;return U(Yn,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return je(Yn,"Failed to get zombied client id.",n),!1}}ho(){if(this.H_)try{this.H_.setItem(this.lo(this.clientId),String(Date.now()))}catch(e){je("Failed to set zombie client id.",e)}}Io(){if(this.H_)try{this.H_.removeItem(this.lo(this.clientId))}catch{}}lo(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Bo(r){return rt(r,ma)}function Za(r){return rt(r,gi)}function vh(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class bh{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Vo=n,this.fo=s}static mo(e,t){let n=ae(),s=ae();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bh(e,t.fromCache,n,s)}}/**
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
 */function wP(r,e){return K.comparator(r.key,e.key)}/**
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
 */class TP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cE{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=function(){return Yp()?8:c_(et())>0?6:4}()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.vo(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Do(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new TP;return this.xo(e,t,o).next(a=>{if(i.result=a,this.yo)return this.Co(e,t,o,a.size)})}).next(()=>i.result)}Co(e,t,n,s){return Me(t)?P.resolve():n.documentReadCount<this.wo?(Ks()<=fe.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",yo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),P.resolve()):(Ks()<=fe.DEBUG&&U("QueryEngine","Query:",yo(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.bo*s?(Ks()<=fe.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",yo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ct(t))):P.resolve())}vo(e,t){if(Me(t))return P.resolve(null);let n=t;if(SC(n))return P.resolve(null);let s=Ct(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ou(n,null,"F"),s=Ct(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const a=ae(...o);return this.So.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,s).next(l=>{const B=this.Fo(n,u);return this.Oo(n,B,a,l.readTime)?this.vo(e,Ou(n,null,"F")):this.Mo(e,B,n,l)}))})))}Do(e,t,n,s){return(Me(t)?function(o){for(const a of o.stages){if(a instanceof Dr||a instanceof zC)return!1;if(a instanceof Ca){if(a.condition instanceof R_&&a.condition._expr.name==="exists"&&a.condition._expr.params[0]instanceof Ss&&a.condition._expr.params[0].fieldName===on)continue;return!1}}return!0}(t):SC(t))||s.isEqual(te.min())?P.resolve(null):this.So.getDocuments(e,n).next(i=>{const o=this.Fo(t,i);return this.Oo(t,o,n,s)?P.resolve(null):(Ks()<=fe.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),QC(t)),this.Mo(e,o,t,Rm(s,li)).next(a=>a))})}Fo(e,t){let n,s;return Me(e)?(n=new we(wP),s=i=>yc(e,i)):(n=new we(oc(e)),s=i=>ic(e,i)),t.forEach((i,o)=>{s(o)&&(n=n.add(o))}),n}Oo(e,t,n,s){if(Me(e))return function(a){return a.stages.some(u=>u instanceof Dr||u instanceof zC)}(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}xo(e,t,n){return Ks()<=fe.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",QC(t)),this.So.getDocumentsMatchingQuery(e,t,Ut.min(),n)}Mo(e,t,n,s){return this.So.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Ph="LocalStore",AP=3e8;class RP{constructor(e,t,n,s){this.persistence=e,this.No=t,this.serializer=s,this.Lo=new be(ie),this.Bo=new Mn(i=>pc(i),Ch),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(n)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aE(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Lo))}}function lE(r,e,t,n){return new RP(r,e,t,n)}async function BE(r,e){const t=W(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.qo(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],a=[];let u=ae();for(const l of s){o.push(l.batchId);for(const B of l.mutations)u=u.add(B.key)}for(const l of i){a.push(l.batchId);for(const B of l.mutations)u=u.add(B.key)}return t.localDocuments.getDocuments(n,u).next(l=>({$o:l,removedBatchIds:o,addedBatchIds:a}))})})}function vP(r,e){const t=W(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return function(a,u,l,B){const d=l.batch,C=d.keys();let g=P.resolve();return C.forEach(m=>{g=g.next(()=>B.getEntry(u,m)).next(w=>{const S=l.docVersions.get(m);J(S!==null,48541),w.version.compareTo(S)<0&&(d.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),B.addEntry(w)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,d))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(a){let u=ae();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function hE(r){const e=W(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.V_.getLastRemoteSnapshotVersion(t))}function bP(r,e){const t=W(r),n=e.snapshotVersion;let s=t.Lo;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.ko.newChangeBuffer({trackRemovals:!0});s=t.Lo;const a=[];e.targetChanges.forEach((B,d)=>{const C=s.get(d);if(!C)return;a.push(t.V_.removeMatchingKeys(i,B.removedDocuments,d).next(()=>t.V_.addMatchingKeys(i,B.addedDocuments,d)));let g=C.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Ne.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):B.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(B.resumeToken,n)),s=s.insert(d,g),function(w,S,G){return w.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=AP?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(C,g,B)&&a.push(t.V_.updateTargetData(i,g))});let u=We(),l=ae();if(e.documentUpdates.forEach(B=>{e.resolvedLimboDocuments.has(B)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,B))}),a.push(dE(i,o,e.documentUpdates).next(B=>{u=B.Ko,l=B.Qo})),!n.isEqual(te.min())){const B=t.V_.getLastRemoteSnapshotVersion(i).next(d=>t.V_.setTargetsMetadata(i,i.currentSequenceNumber,n));a.push(B)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,l)).next(()=>u)}).then(i=>(t.Lo=s,i))}function dE(r,e,t){let n=ae(),s=ae();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=We();return t.forEach((a,u)=>{const l=i.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):U(Ph,"Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Ko:o,Qo:s}})}function PP(r,e){const t=W(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=hr),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function mi(r,e){const t=W(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.V_.getTargetData(n,e).next(i=>i?(s=i,P.resolve(s)):t.V_.allocateTargetId(n).next(o=>(s=new ln(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.V_.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Lo.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Lo=t.Lo.insert(n.targetId,n),t.Bo.set(e,n.targetId)),n})}async function _i(r,e,t){const n=W(r),s=n.Lo.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Nr(o))throw o;U(Ph,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Lo=n.Lo.remove(e),n.Bo.delete(s.target)}function Ju(r,e,t){const n=W(r);let s=te.min(),i=ae();return n.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,B){const d=W(u),C=d.Bo.get(B);return C!==void 0?P.resolve(d.Lo.get(C)):d.V_.getTargetData(l,B)}(n,o,Me(e)?e:Ct(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,n.V_.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>n.No.getDocumentsMatchingQuery(o,e,t?s:te.min(),t?i:ae())).next(a=>(CE(n,a),{documents:a,Wo:i})))}function fE(r,e){const t=W(r),n=W(t.V_),s=t.Lo.get(e);return s?Promise.resolve(s.target??null):t.persistence.runTransaction("Get target data","readonly",i=>n.ye(i,e).next(o=>(o==null?void 0:o.target)??null))}function iB(r,e){const t=W(r),n=t.Uo.get(e)||te.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.ko.getAllFromCollectionGroup(s,e,Rm(n,li),Number.MAX_SAFE_INTEGER)).then(s=>(CE(t,s),s))}function CE(r,e){e.forEach((t,n)=>{const s=n.key.getCollectionGroup(),i=r.Uo.get(s)||te.min();n.readTime.compareTo(i)>0&&r.Uo.set(s,n.readTime)})}async function SP(r,e,t,n){const s=W(r);let i=ae(),o=We();for(const l of t){const B=e.Go(l.metadata.name);l.document&&(i=i.add(B));const d=e.zo(l);d.setReadTime(e.jo(l.metadata.readTime)),o=o.insert(B,d)}const a=s.ko.newChangeBuffer({trackRemovals:!0}),u=await mi(s,function(B){return Ct(Si(ue.fromString(`__bundle__/docs/${B}`)))}(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",l=>dE(l,a,o).next(B=>(a.apply(l),B)).next(B=>s.V_.removeMatchingKeysForTargetId(l,u.targetId).next(()=>s.V_.addMatchingKeys(l,i,u.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(l,B.Ko,B.Qo)).next(()=>B.Ko)))}async function NP(r,e,t=ae()){const n=await mi(r,Ct(Ec(e.bundledQuery))),s=W(r);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=Ke(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return s.f_.saveNamedQuery(i,e);const a=n.withResumeToken(Ne.EMPTY_BYTE_STRING,o);return s.Lo=s.Lo.insert(a.targetId,a),s.V_.updateTargetData(i,a).next(()=>s.V_.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>s.V_.addMatchingKeys(i,t,n.targetId)).next(()=>s.f_.saveNamedQuery(i,e))})}/**
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
 */class pE{constructor(e,t){this.Ho=e,this.byteLength=t}Jo(){return"metadata"in this.Ho}}/**
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
 */function pp(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class OP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve())))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(je(t),this.Xo=!1):U("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
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
 */const En="RemoteStore";class FP{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new xn(1e3),this.ca=new xn(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe(o=>{n.enqueueAndForget(async()=>{Or(this)&&(U(En,"Restarting streams for network reachability change."),await async function(u){const l=W(u);l.la.add(4),await Li(l),l.Ta.set("Unknown"),l.la.delete(4),await _a(l)}(this))})}),this.Ta=new OP(n,s)}}async function _a(r){if(Or(r))for(const e of r.Ea)await e(!0)}async function Li(r){for(const e of r.Ea)await e(!1)}function oB(r,e){return r.oa.get(e)||void 0}function Tc(r,e){const t=W(r),n=oB(t,e.targetId);if(n!==void 0&&t._a.has(n))return;const s=function(a,u){const l=oB(a,u);l!==void 0&&a.aa.delete(l);const B=function(C,g){return g%2!=0?C.ca.next():C.ua.next()}(a,u);return a.oa.set(u,B),a.aa.set(B,u),B}(t,e.targetId);U(En,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new ln(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t._a.set(s,i),Oh(t)?Nh(t):Vi(t).Yt()&&Sh(t,i)}function Ei(r,e){const t=W(r),n=Vi(t),s=oB(t,e);U(En,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t._a.delete(s),t.oa.delete(e),t.aa.delete(s),n.Yt()&&gE(t,s),t._a.size===0&&(n.Yt()?n.en():Or(t)&&t.Ta.set("Unknown"))}function Sh(r,e){if(r.Pa.J(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=r.aa.get(e.targetId);if(t===void 0)return void U(En,"SDK target ID not found for remote ID: "+e.targetId);const n=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}Vi(r).Pn(e)}function gE(r,e){r.Pa.J(e),Vi(r).In(e)}function Nh(r){r.Pa=new oR({getRemoteKeysForTarget:e=>{const t=r.aa.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):ae()},ye:e=>r._a.get(e)||null,Ve:()=>r.datastore.serializer.databaseId}),Vi(r).start(),r.Ta.ea()}function Oh(r){return Or(r)&&!Vi(r).Jt()&&r._a.size>0}function Or(r){return W(r).la.size===0}function mE(r){r.Pa=void 0}async function LP(r){r.Ta.set("Online")}async function xP(r){r._a.forEach((e,t)=>{Sh(r,e)})}async function VP(r,e){mE(r),Oh(r)?(r.Ta.ra(e),Nh(r)):r.Ta.set("Unknown")}async function kP(r,e,t){if(r.Ta.set("Online"),e instanceof Gm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds){if(s._a.has(a)){const u=s.aa.get(a);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.oa.delete(u),s.aa.delete(a)),s._a.delete(a)}s.Pa.removeTarget(a)}}(r,e)}catch(n){U(En,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ku(r,n)}else if(e instanceof hu?r.Pa._e(e):e instanceof Mm?r.Pa.he(e):r.Pa.ue(e),!t.isEqual(te.min()))try{const n=await hE(r.localStore);t.compareTo(n)>=0&&await function(i,o){const a=i.Pa.fe(o);a.targetChanges.forEach((l,B)=>{if(l.resumeToken.approximateByteSize()>0){const d=i._a.get(B);d&&i._a.set(B,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,B)=>{const d=i._a.get(l);if(!d)return;i._a.set(l,d.withResumeToken(Ne.EMPTY_BYTE_STRING,d.snapshotVersion)),gE(i,l);const C=new ln(d.target,l,B,d.sequenceNumber);Sh(i,C)});const u=function(B,d){const C=new Map;d.targetChanges.forEach((m,w)=>{const S=B.aa.get(w);S!==void 0&&C.set(S,m)});let g=new be(ie);return d.targetMismatches.forEach((m,w)=>{const S=B.aa.get(m);S!==void 0&&(g=g.insert(S,w))}),new Ni(d.snapshotVersion,C,g,d.documentUpdates,d.augmentedDocumentUpdates,d.resolvedLimboDocuments)}(i,a);return i.remoteSyncer.applyRemoteEvent(u)}(r,t)}catch(n){U(En,"Failed to raise snapshot:",n),await Ku(r,n)}}async function Ku(r,e,t){if(!Nr(e))throw e;r.la.add(1),await Li(r),r.Ta.set("Offline"),t||(t=()=>hE(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{U(En,"Retrying IndexedDB access"),await t(),r.la.delete(1),await _a(r)})}function _E(r,e){return e().catch(t=>Ku(r,t,e))}async function xi(r){const e=W(r),t=wr(e);let n=e.sa.length>0?e.sa[e.sa.length-1].batchId:hr;for(;MP(e);)try{const s=await PP(e.localStore,n);if(s===null){e.sa.length===0&&t.en();break}n=s.batchId,GP(e,s)}catch(s){await Ku(e,s)}EE(e)&&IE(e)}function MP(r){return Or(r)&&r.sa.length<10}function GP(r,e){r.sa.push(e);const t=wr(r);t.Yt()&&t.Rn&&t.An(e.mutations)}function EE(r){return Or(r)&&!wr(r).Jt()&&r.sa.length>0}function IE(r){wr(r).start()}async function UP(r){wr(r).fn()}async function HP(r){const e=wr(r);for(const t of r.sa)e.An(t.mutations)}async function qP(r,e,t){const n=r.sa.shift(),s=gh.from(n,e,t);await _E(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await xi(r)}async function jP(r,e){e&&wr(r).Rn&&await async function(n,s){if(function(o){return Om(o)&&o!==N.ABORTED}(s.code)){const i=n.sa.shift();wr(n).Xt(),await _E(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xi(n)}}(r,e),EE(r)&&IE(r)}async function gp(r,e){const t=W(r);t.asyncQueue.verifyOperationInProgress(),U(En,"RemoteStore received new credentials");const n=Or(t);t.la.add(3),await Li(t),n&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await _a(t)}async function aB(r,e){const t=W(r);e?(t.la.delete(2),await _a(t)):e||(t.la.add(2),await Li(t),t.Ta.set("Unknown"))}function Vi(r){return r.Ia||(r.Ia=function(t,n,s){const i=W(t);return i.pn(),new PR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{ct:LP.bind(null,r),Et:xP.bind(null,r),Tt:VP.bind(null,r),Tn:kP.bind(null,r)}),r.Ea.push(async e=>{e?(r.Ia.Xt(),Oh(r)?Nh(r):r.Ta.set("Unknown")):(await r.Ia.stop(),mE(r))})),r.Ia}function wr(r){return r.Ra||(r.Ra=function(t,n,s){const i=W(t);return i.pn(),new SR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{ct:()=>Promise.resolve(),Et:UP.bind(null,r),Tt:jP.bind(null,r),Vn:HP.bind(null,r),dn:qP.bind(null,r)}),r.Ea.push(async e=>{e?(r.Ra.Xt(),await xi(r)):(await r.Ra.stop(),r.sa.length>0&&(U(En,`Stopping write stream with ${r.sa.length} pending writes`),r.sa=[]))})),r.Ra}/**
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
 */class Ac{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):je("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Fh{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,a=new Fh(e,t,o,s,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ki(r,e){if(je("AsyncQueue",`${e}: ${r}`),Nr(r))return new k(N.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class JP{constructor(e,t){this.da=e,this.serializer=t,this.metadata=new ut,this.buffer=new Uint8Array,this.fa=function(){return new TextDecoder("utf-8")}(),this.ma().then(n=>{n&&n.Jo()?this.metadata.resolve(n.Ho.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.Ho)}`))},n=>this.metadata.reject(n))}close(){return this.da.cancel()}async getMetadata(){return this.metadata.promise}async pa(){return await this.getMetadata(),this.ma()}async ma(){const e=await this.ga();if(e===null)return null;const t=this.fa.decode(e),n=Number(t);isNaN(n)&&this.ya(`length string (${t}) is not valid number`);const s=await this.wa(n);return new pE(JSON.parse(s),e.length+n)}ba(){return this.buffer.findIndex(e=>e===123)}async ga(){for(;this.ba()<0&&!await this.Sa(););if(this.buffer.length===0)return null;const e=this.ba();e<0&&this.ya("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async wa(e){for(;this.buffer.length<e;)await this.Sa()&&this.ya("Reached the end of bundle when more is expected.");const t=this.fa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ya(e){throw this.da.cancel(),new Error(`Invalid bundle format: ${e}`)}async Sa(){const e=await this.da.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class KP{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let n=this.pa();if(!n||!n.Jo())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(n==null?void 0:n.Ho)}`);this.metadata=n;do n=this.pa(),n!==null&&this.elements.push(n);while(n!==null)}getMetadata(){return this.metadata}va(){return this.elements}pa(){if(this.cursor===this.bundleData.length)return null;const e=this.ga(),t=this.wa(e);return new pE(JSON.parse(t),e)}wa(e){if(this.cursor+e>this.bundleData.length)throw new k(N.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}ga(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}const So="IndexBackfiller";class zP{constructor(e,t){this.asyncQueue=e,this.Da=t,this.task=null}start(){this.xa(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}xa(e){U(So,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.Da.Ca();U(So,`Documents written: ${t}`)}catch(t){Nr(t)?U(So,"Ignoring IndexedDB error during index backfill: ",t):await Sr(t)}await this.xa(6e4)})}}class QP{constructor(e,t){this.localStore=e,this.persistence=t}async Ca(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.Fa(t,e))}Fa(e,t){const n=new Set;let s=t,i=!0;return P.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return U(So,`Processing collection: ${o}`),this.Oa(e,o,s).next(a=>{s-=a,n.add(o)});i=!1})).next(()=>t-s)}Oa(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.Ma(s,i)).next(a=>(U(So,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}Ma(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=vm(i);kB(o,n)>0&&(n=o)}),new Ut(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */const DE="firestore_clients";function mp(r,e){return`${DE}_${r}_${e}`}const yE="firestore_mutations";function _p(r,e,t){let n=`${yE}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const wE="firestore_targets";function El(r,e){return`${wE}_${r}_${e}`}/**
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
 */const sn="SharedClientState";class zu{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Na(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new k(s.error.code,s.error.message))),o?new zu(e,t,s.state,i):(je(sn,`Failed to parse mutation state for ID '${t}': ${n}`),null)}La(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class No{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Na(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new k(n.error.code,n.error.message))),i?new No(e,n.state,s):(je(sn,`Failed to parse target state for ID '${e}': ${t}`),null)}La(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Qu{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Na(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=HB();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=cm(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Qu(e,i):(je(sn,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Lh{constructor(e,t){this.clientId=e,this.onlineState=t}static Na(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Lh(t.clientId,t.onlineState):(je(sn,`Failed to parse online state: ${e}`),null)}}class uB{constructor(){this.activeTargetIds=HB()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Il{constructor(e,t,n,s,i){this.window=e,this.Ct=t,this.persistenceKey=n,this.ka=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.qa=this.$a.bind(this),this.Ka=new be(ie),this.started=!1,this.Qa=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Wa=mp(this.persistenceKey,this.ka),this.Ga=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ka=this.Ka.insert(this.ka,new uB),this.za=new RegExp(`^${DE}_${o}_([^_]*)$`),this.ja=new RegExp(`^${yE}_${o}_(\\d+)(?:_(.*))?$`),this.Ha=new RegExp(`^${wE}_${o}_(\\d+)$`),this.Ja=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Ya=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.qa)}static Ye(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ro();for(const n of e){if(n===this.ka)continue;const s=this.getItem(mp(this.persistenceKey,n));if(s){const i=Qu.Na(n,s);i&&(this.Ka=this.Ka.insert(i.clientId,i))}}this.Za();const t=this.storage.getItem(this.Ja);if(t){const n=this.Xa(t);n&&this.eu(n)}for(const n of this.Qa)this.$a(n);this.Qa=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ga,JSON.stringify(e))}getAllActiveQueryTargets(){return this.tu(this.Ka)}isActiveQueryTarget(e){let t=!1;return this.Ka.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.nu(e,"pending")}updateMutationState(e,t,n){this.nu(e,t,n),this.ru(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(El(this.persistenceKey,e));if(s){const i=No.Na(e,s);i&&(n=i.state)}}return t&&this.iu.Ba(e),this.Za(),n}removeLocalQueryTarget(e){this.iu.Ua(e),this.Za()}isLocalQueryTarget(e){return this.iu.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(El(this.persistenceKey,e))}updateQueryState(e,t,n){this.su(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.ru(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this._u(e)}notifyBundleLoaded(e){this.ou(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.qa),this.removeItem(this.Wa),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return U(sn,"READ",e,t),t}setItem(e,t){U(sn,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){U(sn,"REMOVE",e),this.storage.removeItem(e)}$a(e){const t=e;if(t.storageArea===this.storage){if(U(sn,"EVENT",t.key,t.newValue),t.key===this.Wa)return void je("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ct.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.za.test(t.key)){if(t.newValue==null){const n=this.au(t.key);return this.uu(n,null)}{const n=this.cu(t.key,t.newValue);if(n)return this.uu(n.clientId,n)}}else if(this.ja.test(t.key)){if(t.newValue!==null){const n=this.lu(t.key,t.newValue);if(n)return this.Eu(n)}}else if(this.Ha.test(t.key)){if(t.newValue!==null){const n=this.hu(t.key,t.newValue);if(n)return this.Tu(n)}}else if(t.key===this.Ja){if(t.newValue!==null){const n=this.Xa(t.newValue);if(n)return this.eu(n)}}else if(t.key===this.Ga){const n=function(i){let o=vt.wn;if(i!=null)try{const a=JSON.parse(i);J(typeof a=="number",30636,{Pu:i}),o=a}catch(a){je(sn,"Failed to read sequence number from WebStorage",a)}return o}(t.newValue);n!==vt.wn&&this.sequenceNumberHandler(n)}else if(t.key===this.Ya){const n=this.Iu(t.newValue);await Promise.all(n.map(s=>this.syncEngine.Ru(s)))}}}else this.Qa.push(t)})}}get iu(){return this.Ka.get(this.ka)}Za(){this.setItem(this.Wa,this.iu.La())}nu(e,t,n){const s=new zu(this.currentUser,e,t,n),i=_p(this.persistenceKey,this.currentUser,e);this.setItem(i,s.La())}ru(e){const t=_p(this.persistenceKey,this.currentUser,e);this.removeItem(t)}_u(e){const t={clientId:this.ka,onlineState:e};this.storage.setItem(this.Ja,JSON.stringify(t))}su(e,t,n){const s=El(this.persistenceKey,e),i=new No(e,t,n);this.setItem(s,i.La())}ou(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Ya,t)}au(e){const t=this.za.exec(e);return t?t[1]:null}cu(e,t){const n=this.au(e);return Qu.Na(n,t)}lu(e,t){const n=this.ja.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return zu.Na(new ot(i),s,t)}hu(e,t){const n=this.Ha.exec(e),s=Number(n[1]);return No.Na(s,t)}Xa(e){return Lh.Na(e)}Iu(e){return JSON.parse(e)}async Eu(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Au(e.batchId,e.state,e.error);U(sn,`Ignoring mutation for non-active user ${e.user.uid}`)}Tu(e){return this.syncEngine.Vu(e.targetId,e.state,e.error)}uu(e,t){const n=t?this.Ka.insert(e,t):this.Ka.remove(e),s=this.tu(this.Ka),i=this.tu(n),o=[],a=[];return i.forEach(u=>{s.has(u)||o.push(u)}),s.forEach(u=>{i.has(u)||a.push(u)}),this.syncEngine.du(o,a).then(()=>{this.Ka=n})}eu(e){this.Ka.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}tu(e){let t=HB();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class TE{constructor(){this.fu=new uB,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,n){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new uB,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */function AE(){return typeof window<"u"?window:null}function mu(){return typeof document<"u"?document:null}/**
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
 */class fr{static emptySet(e){return new fr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||K.comparator(t.key,n.key):(t,n)=>K.comparator(t.key,n.key),this.keyedMap=zr(),this.sortedSet=new be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new fr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class Ep{constructor(){this.pu=new be(K.comparator)}track(e){const t=e.doc.key,n=this.pu.get(t);n?e.type!==0&&n.type===3?this.pu=this.pu.insert(t,e):e.type===3&&n.type!==1?this.pu=this.pu.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.pu=this.pu.remove(t):e.type===1&&n.type===2?this.pu=this.pu.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):Z(63341,{we:e,gu:n}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal((t,n)=>{e.push(n)}),e}}class Is{constructor(e,t,n,s,i,o,a,u,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Is(e,t,fr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class WP{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some(e=>e.vu())}}class $P{constructor(){this.queries=Ip(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,n){const s=W(t),i=s.queries;s.queries=Ip(),i.forEach((o,a)=>{for(const u of a.bu)u.onError(n)})})(this,new k(N.ABORTED,"Firestore shutting down"))}}function Ip(){return new Mn(r=>M_(r),Cc)}async function xh(r,e){const t=W(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Su()&&e.vu()&&(n=2):(i=new WP,n=e.vu()?0:1);try{switch(n){case 0:i.wu=await t.onListen(s,!0);break;case 1:i.wu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=ki(o,`Initialization of query '${Me(e.query)?Pn(e.query):yo(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.bu.push(e),e.xu(t.onlineState),i.wu&&e.Cu(i.wu)&&kh(t)}async function Vh(r,e){const t=W(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.bu.indexOf(e);o>=0&&(i.bu.splice(o,1),i.bu.length===0?s=e.vu()?0:1:!i.Su()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function YP(r,e){const t=W(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.bu)a.Cu(s)&&(n=!0);o.wu=s}}n&&kh(t)}function XP(r,e,t){const n=W(r),s=n.queries.get(e);if(s)for(const i of s.bu)i.onError(t);n.queries.delete(e)}function kh(r){r.Du.forEach(e=>{e.next()})}var cB;(function(r){r.Default="default",r.Cache="cache"})(cB||(cB={}));class Mh{constructor(e,t,n){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=n||{}}Cu(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new Is(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache||!this.vu())return!0;const n=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Bu(e){e=Is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==cB.Cache}}/**
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
 */class Dp{constructor(e){this.serializer=e}Go(e){return pn(this.serializer,e)}zo(e){return e.metadata.exists?ac(this.serializer,e.document,!1):xe.newNoDocument(this.Go(e.metadata.name),this.jo(e.metadata.readTime))}jo(e){return Ke(e)}}class Gh{constructor(e,t){this.Uu=e,this.serializer=t,this.ku=[],this.qu=[],this.collectionGroups=new Set,this.progress=RE(e)}get queries(){return this.ku}get documents(){return this.qu}$u(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ho.namedQuery)this.ku.push(e.Ho.namedQuery);else if(e.Ho.documentMetadata){this.qu.push({metadata:e.Ho.documentMetadata}),e.Ho.documentMetadata.exists||++t;const n=ue.fromString(e.Ho.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Ho.document&&(this.qu[this.qu.length-1].document=e.Ho.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}Ku(e){const t=new Map,n=new Dp(this.serializer);for(const s of e)if(s.metadata.queries){const i=n.Go(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||ae()).add(i);t.set(o,a)}}return t}async Qu(e){const t=await SP(e,new Dp(this.serializer),this.qu,this.Uu.id),n=this.Ku(this.documents);for(const s of this.ku)await NP(e,s,n.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Wu:this.collectionGroups,Gu:t}}}function RE(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class vE{constructor(e){this.key=e}}class bE{constructor(e){this.key=e}}class PE{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=ae(),this.mutatedKeys=ae(),this.Ju=Me(e)?qu(e):oc(e),this.Yu=new fr(this.Ju)}get Zu(){return this.zu}Xu(e,t){const n=t?t.ec:new Ep,s=t?t.Yu:this.Yu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const[u,l]=this.tc(this.query,s);e.inorderTraversal((d,C)=>{const g=s.get(d),m=sE(this.query,C)?C:null,w=!!g&&this.mutatedKeys.has(g.key),S=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let G=!1;g&&m?g.data.isEqual(m.data)?w!==S&&(n.track({type:3,doc:m}),G=!0):this.nc(g,m)||(n.track({type:2,doc:m}),G=!0,(u&&this.Ju(m,u)>0||l&&this.Ju(m,l)<0)&&(a=!0)):!g&&m?(n.track({type:0,doc:m}),G=!0):g&&!m&&(n.track({type:1,doc:g}),G=!0,(u||l)&&(a=!0)),G&&(m?(o=o.add(m),i=S?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))});const B=this.rc(this.query);if(B)if(Me(this.query)){const d=[];o.forEach(m=>d.push(m));const C=rE(this.query,d);let g=new fr(qu(this.query));for(const m of C)g=g.add(m);o.forEach(m=>{g.has(m.key)||(i=i.delete(m.key),n.track({type:1,doc:m}))}),o=g}else{const d=this.sc(this.query);for(;o.size>B;){const C=d==="F"?o.last():o.first();o=o.delete(C.key),i=i.delete(C.key),n.track({type:1,doc:C})}}return{Yu:o,ec:n,Oo:a,mutatedKeys:i}}rc(e){var t;return Me(e)?(t=pl(e))==null?void 0:t.limit:e.limit||void 0}sc(e){if(Me(e)){const t=pl(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){var n;if(Me(e)){const s=(n=pl(e))==null?void 0:n.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.rc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const o=e.ec.yu();o.sort((B,d)=>function(g,m){const w=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{we:S})}};return w(g)-w(m)}(B.type,d.type)||this.Ju(B.doc,d.doc)),this._c(n),s=s??!1;const a=t&&!s?this.oc():[],u=this.Hu.size===0&&this.current&&!s?1:0,l=u!==this.ju;return this.ju=u,o.length!==0||l?{snapshot:new Is(this.query,e.Yu,i,o,e.mutatedKeys,u===0,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),ac:a}:{ac:a}}xu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new Ep,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach(t=>this.zu=this.zu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.zu=this.zu.delete(t)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=ae(),this.Yu.forEach(n=>{this.uc(n.key)&&(this.Hu=this.Hu.add(n.key))});const t=[];return e.forEach(n=>{this.Hu.has(n)||t.push(new bE(n))}),this.Hu.forEach(n=>{e.has(n)||t.push(new vE(n))}),t}cc(e){this.zu=e.Wo,this.Hu=ae();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return Is.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,this.ju===0,this.hasCachedResults)}}const Fr="SyncEngine";class ZP{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class eS{constructor(e){this.key=e,this.Ec=!1}}class tS{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hc={},this.Tc=new Mn(a=>M_(a),Cc),this.Pc=new Map,this.Ic=new Set,this.Rc=new be(K.comparator),this.Ac=new Map,this.Vc=new Th,this.dc={},this.fc=new Map,this.mc=xn.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function nS(r,e,t=!0){const n=Rc(r);let s;const i=n.Tc.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lc()):s=await SE(n,e,t,!0),s}async function rS(r,e){const t=Rc(r);await SE(t,e,!0,!1)}async function SE(r,e,t,n){const s=await mi(r.localStore,Me(e)?e:Ct(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let a;return n&&(a=await Uh(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Tc(r.remoteStore,s),a}async function Uh(r,e,t,n,s){r.yc=(d,C,g)=>async function(w,S,G,j){let Y=S.view.Xu(G);Y.Oo&&(Y=await Ju(w.localStore,S.query,!1).then(({documents:A})=>S.view.Xu(A,Y)));const re=j&&j.targetChanges.get(S.targetId),ce=j&&j.targetMismatches.get(S.targetId)!=null,le=S.view.applyChanges(Y,w.isPrimaryClient,re,ce);return lB(w,S.targetId,le.ac),le.snapshot}(r,d,C,g);const i=await Ju(r.localStore,e,!0),o=new PE(e,i.Wo),a=o.Xu(i.documents),u=la.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),l=o.applyChanges(a,r.isPrimaryClient,u);lB(r,t,l.ac);const B=new ZP(e,t,o);return r.Tc.set(e,B),r.Pc.has(t)?r.Pc.get(t).push(e):r.Pc.set(t,[e]),l.snapshot}async function sS(r,e,t){const n=W(r),s=n.Tc.get(e),i=n.Pc.get(s.targetId);if(i.length>1)return n.Pc.set(s.targetId,i.filter(o=>!Cc(o,e))),void n.Tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _i(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Ei(n.remoteStore,s.targetId),Ii(n,s.targetId)}).catch(Sr)):(Ii(n,s.targetId),await _i(n.localStore,s.targetId,!0))}async function iS(r,e){const t=W(r),n=t.Tc.get(e),s=t.Pc.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Ei(t.remoteStore,n.targetId))}async function oS(r,e,t){const n=Jh(r);try{const s=await function(o,a){const u=W(o),l=_e.now(),B=a.reduce((g,m)=>g.add(m.key),ae());let d,C;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let m=We(),w=ae();return u.ko.getEntries(g,B).next(S=>{m=S,m.forEach((G,j)=>{j.isValidDocument()||(w=w.add(G))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,m)).next(S=>{d=S;const G=[];for(const j of a){const Y=VA(j,d.get(j.key).overlayedDocument);Y!=null&&G.push(new Vn(j.key,Y,dm(Y.value.mapValue),Ve.exists(!0)))}return u.mutationQueue.addMutationBatch(g,l,G,a)}).next(S=>{C=S;const G=S.applyToLocalDocumentSet(d,w);return u.documentOverlayCache.saveOverlays(g,S.batchId,G)})}).then(()=>({batchId:C.batchId,changes:xm(d)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let l=o.dc[o.currentUser.toKey()];l||(l=new be(ie)),l=l.insert(a,u),o.dc[o.currentUser.toKey()]=l}(n,s.batchId,t),await Gn(n,s.changes),await xi(n.remoteStore)}catch(s){const i=ki(s,"Failed to persist write");t.reject(i)}}async function NE(r,e){const t=W(r);try{const n=await bP(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ac.get(i);o&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Ec=!0:s.modifiedDocuments.size>0?J(o.Ec,14607):s.removedDocuments.size>0&&(J(o.Ec,42227),o.Ec=!1))}),await Gn(t,n,e)}catch(n){await Sr(n)}}function yp(r,e,t){const n=W(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tc.forEach((i,o)=>{const a=o.view.xu(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=W(o);u.onlineState=a;let l=!1;u.queries.forEach((B,d)=>{for(const C of d.bu)C.xu(a)&&(l=!0)}),l&&kh(u)}(n.eventManager,e),s.length&&n.hc.Tn(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function aS(r,e,t){const n=W(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Ac.get(e),i=s&&s.key;if(i){let o=new be(K.comparator);o=o.insert(i,xe.newNoDocument(i,te.min()));const a=ae().add(i),u=new Ni(te.min(),new Map,new be(ie),o,We(),a);await NE(n,u),n.Rc=n.Rc.remove(i),n.Ac.delete(e),jh(n)}else await _i(n.localStore,e,!1).then(()=>Ii(n,e,t)).catch(Sr)}async function uS(r,e){const t=W(r),n=e.batch.batchId;try{const s=await vP(t.localStore,e);qh(t,n,null),Hh(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Gn(t,s)}catch(s){await Sr(s)}}async function cS(r,e,t){const n=W(r);try{const s=await function(o,a){const u=W(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let B;return u.mutationQueue.lookupMutationBatch(l,a).next(d=>(J(d!==null,37113),B=d.keys(),u.mutationQueue.removeMutationBatch(l,d))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,B,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,B)).next(()=>u.localDocuments.getDocuments(l,B))})}(n.localStore,e);qh(n,e,t),Hh(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Gn(n,s)}catch(s){await Sr(s)}}async function lS(r,e){const t=W(r);Or(t.remoteStore)||U(Fr,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(o){const a=W(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(t.localStore);if(n===hr)return void e.resolve();const s=t.fc.get(n)||[];s.push(e),t.fc.set(n,s)}catch(n){const s=ki(n,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function Hh(r,e){(r.fc.get(e)||[]).forEach(t=>{t.resolve()}),r.fc.delete(e)}function qh(r,e,t){const n=W(r);let s=n.dc[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.dc[n.currentUser.toKey()]=s}}function Ii(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Pc.get(e))r.Tc.delete(n),t&&r.hc.wc(n,t);r.Pc.delete(e),r.isPrimaryClient&&r.Vc.e_(e).forEach(n=>{r.Vc.containsKey(n)||OE(r,n)})}function OE(r,e){r.Ic.delete(e.path.canonicalString());const t=r.Rc.get(e);t!==null&&(Ei(r.remoteStore,t),r.Rc=r.Rc.remove(e),r.Ac.delete(t),jh(r))}function lB(r,e,t){for(const n of t)n instanceof vE?(r.Vc.addReference(n.key,e),BS(r,n)):n instanceof bE?(U(Fr,"Document no longer in limbo: "+n.key),r.Vc.removeReference(n.key,e),r.Vc.containsKey(n.key)||OE(r,n.key)):Z(19791,{bc:n})}function BS(r,e){const t=e.key,n=t.path.canonicalString();r.Rc.get(t)||r.Ic.has(n)||(U(Fr,"New document in limbo: "+t),r.Ic.add(n),jh(r))}function jh(r){for(;r.Ic.size>0&&r.Rc.size<r.maxConcurrentLimboResolutions;){const e=r.Ic.values().next().value;r.Ic.delete(e);const t=new K(ue.fromString(e)),n=r.mc.next();r.Ac.set(n,new eS(t)),r.Rc=r.Rc.insert(t,n),Tc(r.remoteStore,new ln(Ct(Si(t.path)),n,"TargetPurposeLimboResolution",vt.wn))}}async function Gn(r,e,t){const n=W(r),s=[],i=[],o=[];n.Tc.isEmpty()||(n.Tc.forEach((a,u)=>{o.push(n.yc(u,e,t).then(l=>{var B;if((l||t)&&n.isPrimaryClient){const d=l?!l.fromCache:(B=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:B.current;n.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(l){s.push(l);const d=bh.mo(u.targetId,l);i.push(d)}}))}),await Promise.all(o),n.hc.Tn(s),await async function(u,l){const B=W(u);try{await B.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>P.forEach(l,C=>P.forEach(C.Vo,g=>B.persistence.referenceDelegate.addReference(d,C.targetId,g)).next(()=>P.forEach(C.fo,g=>B.persistence.referenceDelegate.removeReference(d,C.targetId,g)))))}catch(d){if(!Nr(d))throw d;U(Ph,"Failed to update sequence numbers: "+d)}for(const d of l){const C=d.targetId;if(!d.fromCache){const g=B.Lo.get(C),m=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(m);B.Lo=B.Lo.insert(C,w)}}}(n.localStore,i))}async function hS(r,e){const t=W(r);if(!t.currentUser.isEqual(e)){U(Fr,"User change. New user:",e.toKey());const n=await BE(t.localStore,e);t.currentUser=e,function(i,o){i.fc.forEach(a=>{a.forEach(u=>{u.reject(new k(N.CANCELLED,o))})}),i.fc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Gn(t,n.$o)}}function dS(r,e){const t=W(r),n=t.Ac.get(e);if(n&&n.Ec)return ae().add(n.key);{let s=ae();const i=t.Pc.get(e);if(!i)return s;for(const o of i??[]){const a=t.Tc.get(o);s=s.unionWith(a.view.Zu)}return s}}async function fS(r,e){const t=W(r),n=await Ju(t.localStore,e.query,!0),s=e.view.cc(n);return t.isPrimaryClient&&lB(t,e.targetId,s.ac),s}async function CS(r,e){const t=W(r);return iB(t.localStore,e).then(n=>Gn(t,n))}async function pS(r,e,t,n){const s=W(r),i=await function(a,u){const l=W(a),B=W(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",d=>B.Wr(d,u).next(C=>C?l.localDocuments.getDocuments(d,C):P.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await xi(s.remoteStore):t==="acknowledged"||t==="rejected"?(qh(s,e,n||null),Hh(s,e),function(a,u){W(W(a).mutationQueue).Hr(u)}(s.localStore,e)):Z(6720,"Unknown batchState",{Sc:t}),await Gn(s,i)):U(Fr,"Cannot apply mutation batch with id: "+e)}async function gS(r,e){const t=W(r);if(Rc(t),Jh(t),e===!0&&t.gc!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await wp(t,n.toArray());t.gc=!0,await aB(t.remoteStore,!0);for(const i of s)Tc(t.remoteStore,i)}else if(e===!1&&t.gc!==!1){const n=[];let s=Promise.resolve();t.Pc.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(Ii(t,o),_i(t.localStore,o,!0))),Ei(t.remoteStore,o)}),await s,await wp(t,n),function(o){const a=W(o);a.Ac.forEach((u,l)=>{Ei(a.remoteStore,l)}),a.Vc.t_(),a.Ac=new Map,a.Rc=new be(K.comparator)}(t),t.gc=!1,await aB(t.remoteStore,!1)}}async function wp(r,e,t){const n=W(r),s=[],i=[];for(const o of e){let a;const u=n.Pc.get(o);if(u&&u.length!==0){a=await mi(n.localStore,Me(u[0])?u[0]:Ct(u[0]));for(const l of u){const B=n.Tc.get(l),d=await fS(n,B);d.snapshot&&i.push(d.snapshot)}}else{const l=await fE(n.localStore,o);a=await mi(n.localStore,l),await Uh(n,FE(l),o,!1,a.resumeToken)}s.push(a)}return n.hc.Tn(i),s}function FE(r){return yn(r)?r:bm(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function mS(r){return function(t){return W(W(t).persistence).Ro()}(W(r).localStore)}async function _S(r,e,t,n){const s=W(r);if(s.gc)return void U(Fr,"Ignoring unexpected query state notification.");const i=s.Pc.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{let o;if(Me(i[0]))switch(bn(i[0])){case"collection_group":case"collection":o=await iB(s.localStore,N_(i[0]));break;case"documents":o=await function(l,B){const d=W(l),C=ae(...Lu(B).map(g=>K.fromPath(g)));return d.persistence.runTransaction("Get documents for pipeline","readonly",g=>d.ko.getEntries(g,C)).then(g=>g)}(s.localStore,i[0]);break;default:tt(""),o=zr()}else o=await iB(s.localStore,function(l){return l.collectionGroup||(l.path.length%2==1?l.path.lastSegment():l.path.get(l.path.length-2))}(i[0]));const a=Ni.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ne.EMPTY_BYTE_STRING);await Gn(s,o,a);break}case"rejected":await _i(s.localStore,e,!0),Ii(s,e,n);break;default:Z(64155,t)}}async function ES(r,e,t){const n=Rc(r);if(n.gc){for(const s of e){if(n.Pc.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){U(Fr,"Adding an already active target "+s);continue}const i=await fE(n.localStore,s),o=await mi(n.localStore,i);await Uh(n,FE(i),o.targetId,!1,o.resumeToken),Tc(n.remoteStore,o)}for(const s of t)n.Pc.has(s)&&await _i(n.localStore,s,!1).then(()=>{Ei(n.remoteStore,s),Ii(n,s)}).catch(Sr)}}function Rc(r){const e=W(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=NE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aS.bind(null,e),e.hc.Tn=YP.bind(null,e.eventManager),e.hc.wc=XP.bind(null,e.eventManager),e}function Jh(r){const e=W(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cS.bind(null,e),e}function IS(r,e,t){const n=W(r);(async function(i,o,a){try{const u=await o.getMetadata();if(await function(g,m){const w=W(g),S=Ke(m.createTime);return w.persistence.runTransaction("hasNewerBundle","readonly",G=>w.f_.getBundleMetadata(G,m.id)).then(G=>!!G&&G.createTime.compareTo(S)>=0)}(i.localStore,u))return await o.close(),a._completeWith(function(g){return{taskState:"Success",documentsLoaded:g.totalDocuments,bytesLoaded:g.totalBytes,totalDocuments:g.totalDocuments,totalBytes:g.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(RE(u));const l=new Gh(u,o.serializer);let B=await o.pa();for(;B;){const C=await l.$u(B);C&&a._updateProgress(C),B=await o.pa()}const d=await l.Qu(i.localStore);return await Gn(i,d.Gu,void 0),await function(g,m){const w=W(g);return w.persistence.runTransaction("Save bundle","readwrite",S=>w.f_.saveBundleMetadata(S,m))}(i.localStore,u),a._completeWith(d.progress),Promise.resolve(d.Wu)}catch(u){return tt(Fr,`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(n,e,t).then(s=>{n.sharedClientState.notifyBundleLoaded(s)})}class Di{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rs(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return lE(this.persistence,new cE,e.initialUser,this.serializer)}Dc(e){return new Ah(wc.b_,this.serializer)}vc(e){return new TE}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Di.provider={build:()=>new Di};class Kh extends Di{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){J(this.persistence.referenceDelegate instanceof ju,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new B_(n,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?dt.withCacheSize(this.cacheSizeBytes):dt.DEFAULT;return new Ah(n=>ju.b_(n,t),this.serializer)}}class zh extends Di{constructor(e,t,n){super(),this.Oc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Oc.initialize(this,e),await Jh(this.Oc.syncEngine),await xi(this.Oc.remoteStore),await this.persistence.eo(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}xc(e){return lE(this.persistence,new cE,e.initialUser,this.serializer)}Cc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new B_(n,e.asyncQueue,t)}Fc(e,t){const n=new QP(t,this.persistence);return new zP(e.asyncQueue,n)}Dc(e){const t=vh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?dt.withCacheSize(this.cacheSizeBytes):dt.DEFAULT;return new Rh(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,AE(),mu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}vc(e){return new TE}}class LE extends zh{constructor(e,t){super(e,t,!1),this.Oc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Oc.syncEngine;this.sharedClientState instanceof Il&&(this.sharedClientState.syncEngine={Au:pS.bind(null,t),Vu:_S.bind(null,t),du:ES.bind(null,t),Ro:mS.bind(null,t),Ru:CS.bind(null,t)},await this.sharedClientState.start()),await this.persistence.eo(async n=>{await gS(this.Oc.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}vc(e){const t=AE();if(!Il.Ye(t))throw new k(N.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=vh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Il(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Tr{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>yp(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=hS.bind(null,this.syncEngine),await aB(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $P}()}createDatastore(e){const t=Rs(e.databaseInfo.databaseId),n=bR(e.databaseInfo);return FR(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,a){return new FP(n,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>yp(this.syncEngine,t,0),function(){return kC.Ye()?new kC:new TR}())}createSyncEngine(e,t){return function(s,i,o,a,u,l,B){const d=new tS(s,i,o,a,u,l);return B&&(d.gc=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=W(s);U(En,"RemoteStore shutting down."),i.la.add(5),await Li(i),i.ha.shutdown(),i.Ta.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Tr.provider={build:()=>new Tr};/**
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
 */let DS=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new k(N.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(s,i){const o=W(s),a={documents:i.map(d=>di(o.serializer,d))},u=await o._t("BatchGetDocuments",o.serializer.databaseId,ue.emptyPath(),a,i.length),l=new Map;u.forEach(d=>{const C=BR(o.serializer,d);l.set(C.key.toString(),C)});const B=[];return i.forEach(d=>{const C=l.get(d.toString());J(!!C,55234,{key:d}),B.push(C)}),B}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Pi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const s=K.fromPath(n);this.mutations.push(new xB(s,this.precondition(s)))}),await async function(n,s){const i=W(n),o={writes:s.map(a=>Ho(i.serializer,a))};await i.nt("Commit",i.serializer.databaseId,ue.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Z(50498,{Mc:e.constructor.name});t=te.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new k(N.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(te.min())?Ve.exists(!1):Ve.updateTime(t):Ve.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(te.min()))throw new k(N.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ve.updateTime(t)}return Ve.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
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
 */class yS{constructor(e,t,n,s,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=s,this.deferred=i,this.Nc=n.maxAttempts,this.Ht=new KB(this.asyncQueue,"transaction_retry")}Lc(){this.Nc-=1,this.Bc()}Bc(){this.Ht.kt(async()=>{const e=new DS(this.datastore),t=this.Uc(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.kc(s)}))}).catch(n=>{this.kc(n)})})}Uc(e){try{const t=this.updateFunction(e);return!ca(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}kc(e){this.Nc>0&&this.qc(e)?(this.Nc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bc(),Promise.resolve()))):this.deferred.reject(e)}qc(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Om(t)}return!1}}/**
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
 */const Ar="FirestoreClient";class wS{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=ec.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{U(Ar,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(U(Ar,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ki(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Dl(r,e){r.asyncQueue.verifyOperationInProgress(),U(Ar,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await BE(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Tp(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Qh(r);U(Ar,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>gp(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>gp(e.remoteStore,s)),r._onlineComponents=e}async function Qh(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){U(Ar,"Using user provided OfflineComponentProvider");try{await Dl(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;tt("Error using user provided cache. Falling back to memory cache: "+t),await Dl(r,new Di)}}else U(Ar,"Using default OfflineComponentProvider"),await Dl(r,new Kh(void 0));return r._offlineComponents}async function vc(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(U(Ar,"Using user provided OnlineComponentProvider"),await Tp(r,r._uninitializedComponentsProvider._online)):(U(Ar,"Using default OnlineComponentProvider"),await Tp(r,new Tr))),r._onlineComponents}function xE(r){return Qh(r).then(e=>e.persistence)}function Mi(r){return Qh(r).then(e=>e.localStore)}function VE(r){return vc(r).then(e=>e.remoteStore)}function Wh(r){return vc(r).then(e=>e.syncEngine)}function kE(r){return vc(r).then(e=>e.datastore)}async function yi(r){const e=await vc(r),t=e.eventManager;return t.onListen=nS.bind(null,e.syncEngine),t.onUnlisten=sS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=iS.bind(null,e.syncEngine),t}function TS(r){return r.asyncQueue.enqueue(async()=>{const e=await xE(r),t=await VE(r);return e.setNetworkEnabled(!0),function(s){const i=W(s);return i.la.delete(0),_a(i)}(t)})}function AS(r){return r.asyncQueue.enqueue(async()=>{const e=await xE(r),t=await VE(r);return e.setNetworkEnabled(!1),async function(s){const i=W(s);i.la.add(0),await Li(i),i.Ta.set("Offline")}(t)})}function RS(r,e,t,n){const s=new Ac(n),i=new Mh(e,s,t);return r.asyncQueue.enqueueAndForget(async()=>xh(await yi(r),i)),()=>{s.Va(),r.asyncQueue.enqueueAndForget(async()=>Vh(await yi(r),i))}}function vS(r,e){const t=new ut;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await function(l,B){const d=W(l);return d.persistence.runTransaction("read document","readonly",C=>d.localDocuments.getDocument(C,B))}(s,i);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new k(N.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=ki(a,`Failed to get document '${i} from cache`);o.reject(u)}}(await Mi(r),e,t)),t.promise}function ME(r,e,t={}){const n=new ut;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,l){const B=new Ac({next:C=>{B.Va(),o.enqueueAndForget(()=>Vh(i,d));const g=C.docs.has(a);!g&&C.fromCache?l.reject(new k(N.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&C.fromCache&&u&&u.source==="server"?l.reject(new k(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(C)},error:C=>l.reject(C)}),d=new Mh(Si(a.path),B,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return xh(i,d)}(await yi(r),r.asyncQueue,e,t,n)),n.promise}function bS(r,e){const t=new ut;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await Ju(s,i,!0),u=new PE(i,a.Wo),l=u.Xu(a.documents),B=u.applyChanges(l,!1);o.resolve(B.snapshot)}catch(a){const u=ki(a,`Failed to execute query '${i} against cache`);o.reject(u)}}(await Mi(r),e,t)),t.promise}function GE(r,e,t={}){const n=new ut;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,l){const B=new Ac({next:C=>{B.Va(),o.enqueueAndForget(()=>Vh(i,d)),C.fromCache&&u.source==="server"?l.reject(new k(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(C)},error:C=>l.reject(C)}),d=new Mh(a instanceof Ro?Tb(a):a,B,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return xh(i,d)}(await yi(r),r.asyncQueue,e,t,n)),n.promise}function PS(r,e,t){const n=new ut;return r.asyncQueue.enqueueAndForget(async()=>{try{const s=await kE(r);n.resolve(async function(o,a,u){var w;const l=W(o),{request:B,ve:d,parent:C}=zm(l.serializer,Pm(a),u);l.connection.Ze||delete B.parent;const g=(await l._t("RunAggregationQuery",l.serializer.databaseId,C,B,1)).filter(S=>!!S.result);J(g.length===1,64727);const m=(w=g[0].result)==null?void 0:w.aggregateFields;return Object.keys(m).reduce((S,G)=>(S[d[G]]=m[G],S),{})}(s,e,t))}catch(s){n.reject(s)}}),n.promise}function SS(r,e){const t=new ut;return r.asyncQueue.enqueueAndForget(async()=>oS(await Wh(r),e,t)),t.promise}function NS(r,e){const t=new Ac(e);return r.asyncQueue.enqueueAndForget(async()=>function(s,i){W(s).Du.add(i),i.next()}(await yi(r),t)),()=>{t.Va(),r.asyncQueue.enqueueAndForget(async()=>function(s,i){W(s).Du.delete(i)}(await yi(r),t))}}function OS(r,e,t){const n=new ut;return r.asyncQueue.enqueueAndForget(async()=>{const s=await kE(r);new yS(r.asyncQueue,s,t,e,n).Lc()}),n.promise}function FS(r,e,t,n){const s=function(o,a){let u;return u=typeof o=="string"?km().encode(o):o,function(B,d){return new JP(B,d)}(function(B,d){if(B instanceof Uint8Array)return pp(B,d);if(B instanceof ArrayBuffer)return pp(new Uint8Array(B),d);if(B instanceof ReadableStream)return B.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(t,Rs(e));r.asyncQueue.enqueueAndForget(async()=>{IS(await Wh(r),s,n)})}function LS(r,e){return r.asyncQueue.enqueue(async()=>function(n,s){const i=W(n);return i.persistence.runTransaction("Get named query","readonly",o=>i.f_.getNamedQuery(o,s))}(await Mi(r),e))}function UE(r,e){return function(n,s){return new KP(n,s)}(r,e)}function xS(r,e){return r.asyncQueue.enqueue(async()=>async function(n,s){const i=W(n),o=i.indexManager,a=[];return i.persistence.runTransaction("Configure indexes","readwrite",u=>o.getFieldIndexes(u).next(l=>function(d,C,g,m,w){d=[...d],C=[...C],d.sort(g),C.sort(g);const S=d.length,G=C.length;let j=0,Y=0;for(;j<G&&Y<S;){const re=g(d[Y],C[j]);re<0?w(d[Y++]):re>0?m(C[j++]):(j++,Y++)}for(;j<G;)m(C[j++]);for(;Y<S;)w(d[Y++])}(l,s,JA,B=>{a.push(o.addFieldIndex(u,B))},B=>{a.push(o.deleteFieldIndex(u,B))})).next(()=>P.waitFor(a)))}(await Mi(r),e))}function VS(r,e){return r.asyncQueue.enqueue(async()=>function(n,s){W(n).No.yo=s}(await Mi(r),e))}function kS(r){return r.asyncQueue.enqueue(async()=>function(t){const n=W(t),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",i=>s.deleteAllFieldIndexes(i))}(await Mi(r)))}/**
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
 */let Xo=class{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(en("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},MS=class extends Xo{data(){return super.data()}};/**
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
 */class $h{convertValue(e,t="none"){switch(Ye(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Pr(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[ds].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Se(o.doubleValue));return new yt(t)}convertGeoPoint(e){return new $t(Se(e.latitude),Se(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ua(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ri(e));default:return null}}convertTimestamp(e){const t=On(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ue.fromString(e);J(Xm(n),9688,{name:e});const s=new gr(n.get(1),n.get(3)),i=new K(n.popFirst(5));return s.isEqual(t)||je(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function bc(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class Yh extends $h{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ye(this.firestore,null,t)}}/**
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
 */const Ap="AsyncQueue";class Rp{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new KB(this,"async_queue_retry"),this.Hc=()=>{const n=mu();n&&U(Ap,"Visibility state changed to "+n.visibilityState),this.Ht.$t()},this.Jc=e;const t=mu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=mu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise(()=>{});const t=new ut;return this.Zc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$c.push(e),this.Xc()))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!Nr(e))throw e;U(Ap,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt(()=>this.Xc())}}Zc(e){const t=this.Jc.then(()=>(this.Gc=!0,e().catch(n=>{throw this.Wc=n,this.Gc=!1,je("INTERNAL UNHANDLED ERROR: ",vp(n)),n}).then(n=>(this.Gc=!1,n))));return this.Jc=t,t}enqueueAfterDelay(e,t,n){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const s=Fh.createAndSchedule(this,e,t,n,i=>this.el(i));return this.Qc.push(s),s}Yc(){this.Wc&&Z(47125,{tl:vp(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then(()=>{this.Qc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()})}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function vp(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */class HE{constructor(){this._progressObserver={},this._taskCompletionResolver=new ut,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const GS=-1;class Ae extends Ba{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Rp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rp(e),this._firestoreClient=void 0,await e}}}function US(r,e,t){t||(t=Mo);const n=Ti(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(Xt(i,e))return s;throw new k(N.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new k(N.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<l_)throw new k(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Rr(e.host)&&$u(e.host),n.initialize({options:e,instanceIdentifier:t})}function HS(r,e){const t=typeof r=="object"?r:pB(),n=typeof r=="string"?r:e||Mo,s=Ti(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Jp("firestore");i&&f_(s,...i)}return s}function ke(r){if(r._terminated)throw new k(N.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||qE(r),r._firestoreClient}function qE(r){var n,s,i,o;const e=r._freezeSettings(),t=xR(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new wS(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(r._componentsProvider))}function qS(r,e){tt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return jE(r,Tr.provider,{build:n=>new zh(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function jS(r){tt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();jE(r,Tr.provider,{build:t=>new LE(t,e.cacheSizeBytes)})}function jE(r,e,t){if((r=de(r,Ae))._firestoreClient||r._terminated)throw new k(N.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new k(N.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},qE(r)}function JS(r){if(r._initialized&&!r._terminated)throw new k(N.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ut;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!gn.Ye())return Promise.resolve();const s=n+uE;await gn.delete(s)}(vh(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function KS(r){return function(t){const n=new ut;return t.asyncQueue.enqueueAndForget(async()=>lS(await Wh(t),n)),n.promise}(ke(r=de(r,Ae)))}function zS(r){return TS(ke(r=de(r,Ae)))}function QS(r){return AS(ke(r=de(r,Ae)))}function WS(r){return Iy(r.app,"firestore",r._databaseId.database),r._delete()}function BB(r,e){const t=ke(r=de(r,Ae)),n=new HE;return FS(t,r._databaseId,e,n),n}function JE(r,e){return LS(ke(r=de(r,Ae)),e).then(t=>t?new nt(r,null,t.query):null)}/**
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
 */class Lr extends $h{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ye(this.firestore,null,t)}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */const KE="NOT SUPPORTED";class Rn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bt extends Xo{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(en("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=bt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function $S(r,e,t){if(Ts(e,bt._jsonSchema)){if(e.bundle===KE)throw new k(N.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Rs(r._databaseId),s=UE(e.bundle,n),i=s.va(),o=new Gh(s.getMetadata(),n);for(const B of i)o.$u(B);const a=o.documents;if(a.length!==1)throw new k(N.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${a.length} documents.`);const u=ac(n,a[0].document),l=new K(ue.fromString(e.bundleName));return new bt(r,new Yh(r),l,u,new Rn(!1,!1),t||null)}}bt._jsonSchemaVersion="firestore/documentSnapshot/1.0",bt._jsonSchema={type:$e("string",bt._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class Oo extends bt{data(e={}){return super.data(e)}}class Pt{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Rn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Oo(this._firestore,this._userDataWriter,n.key,n,new Rn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new k(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{Me(s._snapshot.query)?qu(s._snapshot.query):oc(s.query._query);const u=new Oo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Rn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new Oo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Rn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,B=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),B=o.indexOf(a.doc.key)),{type:XS(a.type),doc:u,oldIndex:l,newIndex:B}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Pt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ec.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function YS(r,e,t){if(Ts(e,Pt._jsonSchema)){if(e.bundle===KE)throw new k(N.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Rs(r._databaseId),s=UE(e.bundle,n),i=s.va(),o=new Gh(s.getMetadata(),n);for(const g of i)o.$u(g);if(o.queries.length!==1)throw new k(N.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const a=Ec(o.queries[0].bundledQuery),u=Me(a)?qu(a):oc(a),l=o.documents;let B=new fr(u);l.map(g=>{const m=ac(n,g.document);B=B.add(m)});const d=Is.fromInitialDocuments(a,B,ae(),!1,!1),C=new nt(r,t||null,a);return new Pt(r,new Yh(r),C,d)}}function XS(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:r})}}function ZS(r,e){return r instanceof bt&&e instanceof bt?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof Pt&&e instanceof Pt&&r._firestore===e._firestore&&QB(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */Pt._jsonSchemaVersion="firestore/querySnapshot/1.0",Pt._jsonSchema={type:$e("string",Pt._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};/**
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
 */function e0(r){var n;const e=ke(de(r.firestore,Ae)),t=(n=e._onlineComponents)==null?void 0:n.datastore.serializer;return t===void 0?null:uc(t,Ct(r._query)).Se}function t0(r,e){var i;const t=PB(e,(o,a)=>new Xg(a,o.aggregateType,o._internalFieldPath)),n=ke(de(r.firestore,Ae)),s=(i=n._onlineComponents)==null?void 0:i.datastore.serializer;return s===void 0?null:zm(s,Pm(r._query),t,!0).request}/**
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
 */class wi{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class zE{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new Ze({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
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
 */function QE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xh{}class Gi extends Xh{}function n0(r,e,...t){let n=[];e instanceof Xh&&n.push(e),n=n.concat(t),function(i){const o=i.filter(u=>u instanceof Os).length,a=i.filter(u=>u instanceof Ui).length;if(o>1||o>0&&a>0)throw new k(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Ui extends Gi{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ui(e,t,n)}_apply(e){const t=this._parse(e);return $E(e._query,t),new nt(e.firestore,e.converter,jl(e._query,t))}_parse(e){const t=bs(e.firestore);return function(i,o,a,u,l,B,d){let C;if(l.isKeyField()){if(B==="array-contains"||B==="array-contains-any")throw new k(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${B}' queries on documentId().`);if(B==="in"||B==="not-in"){Pp(d,B);const m=[];for(const w of d)m.push(bp(u,i,w));C={arrayValue:{values:m}}}else C=bp(u,i,d)}else B!=="in"&&B!=="not-in"&&B!=="array-contains-any"||Pp(d,B),C=__(a,o,d,B==="in"||B==="not-in");return Ce.create(l,B,C)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function r0(r,e,t){const n=e,s=en("where",r);return Ui._create(s,n,t)}class Os extends Xh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Os(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Te.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)$E(o,u),o=jl(o,u)}(e._query,t),new nt(e.firestore,e.converter,jl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function s0(...r){return r.forEach(e=>YE("or",e)),Os._create("or",r)}function i0(...r){return r.forEach(e=>YE("and",e)),Os._create("and",r)}class Pc extends Gi{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Pc(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new k(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Uo(i,o)}(e._query,this._field,this._direction);return new nt(e.firestore,e.converter,WA(e._query,t))}}function o0(r,e="asc"){const t=e,n=en("orderBy",r);return Pc._create(n,t)}class Ea extends Gi{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Ea(e,t,n)}_apply(e){return new nt(e.firestore,e.converter,Ou(e._query,this._limit,this._limitType))}}function a0(r){return rm("limit",r),Ea._create("limit",r,"F")}function u0(r){return rm("limitToLast",r),Ea._create("limitToLast",r,"L")}class Ia extends Gi{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Ia(e,t,n)}_apply(e){const t=WE(e,this.type,this._docOrFields,this._inclusive);return new nt(e.firestore,e.converter,$A(e._query,t))}}function c0(...r){return Ia._create("startAt",r,!0)}function l0(...r){return Ia._create("startAfter",r,!1)}class Da extends Gi{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Da(e,t,n)}_apply(e){const t=WE(e,this.type,this._docOrFields,this._inclusive);return new nt(e.firestore,e.converter,YA(e._query,t))}}function B0(...r){return Da._create("endBefore",r,!1)}function h0(...r){return Da._create("endAt",r,!0)}function WE(r,e,t,n){if(t[0]=Ie(t[0]),t[0]instanceof Xo)return function(i,o,a,u,l){if(!u)throw new k(N.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const B=[];for(const d of Zs(i))if(d.field.isKeyField())B.push(fs(o,u.key));else{const C=u.data.field(d.field);if(aa(C))throw new k(N.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(C===null){const g=d.field.canonicalString();throw new k(N.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}B.push(C)}return new Er(B,l)}(r._query,r.firestore._databaseId,e,t[0]._document,n);{const s=bs(r.firestore);return function(o,a,u,l,B,d){const C=o.explicitOrderBy;if(B.length>C.length)throw new k(N.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let m=0;m<B.length;m++){const w=B[m];if(C[m].field.isKeyField()){if(typeof w!="string")throw new k(N.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof w}`);if(!UB(o)&&w.indexOf("/")!==-1)throw new k(N.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${w}' contains a slash.`);const S=o.path.child(ue.fromString(w));if(!K.isDocumentKey(S))throw new k(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${S}' is not because it contains an odd number of segments.`);const G=new K(S);g.push(fs(a,G))}else{const S=__(u,l,w);g.push(S)}}return new Er(g,d)}(r._query,r.firestore._databaseId,s,e,t,n)}}function bp(r,e,t){if(typeof(t=Ie(t))=="string"){if(t==="")throw new k(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!UB(e)&&t.indexOf("/")!==-1)throw new k(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ue.fromString(t));if(!K.isDocumentKey(n))throw new k(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return fs(r,new K(n))}if(t instanceof ye)return fs(r,t._key);throw new k(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tc(t)}.`)}function Pp(r,e){if(!Array.isArray(r)||r.length===0)throw new k(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $E(r,e){const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new k(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function YE(r,e){if(!(e instanceof Ui||e instanceof Os))throw new k(N.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}function d0(r){return new wi("sum",en("sum",r))}function f0(r){return new wi("avg",en("average",r))}function XE(){return new wi("count")}function C0(r,e){var t,n;return r instanceof wi&&e instanceof wi&&r.aggregateType===e.aggregateType&&((t=r._internalFieldPath)==null?void 0:t.canonicalString())===((n=e._internalFieldPath)==null?void 0:n.canonicalString())}function p0(r,e){return QB(r.query,e.query)&&Xt(r.data(),e.data())}/**
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
 */function ti(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}function g0(r){return ZE(r,{count:XE()})}function ZE(r,e){const t=de(r.firestore,Ae),n=ke(t),s=PB(e,(i,o)=>new Xg(o,i.aggregateType,i._internalFieldPath));return PS(n,r._query,s).then(i=>function(a,u,l){const B=new Lr(a);return new zE(u,B,l)}(t,r,i))}class m0{constructor(e){this.kind="memory",this._onlineComponentProvider=Tr.provider,this._offlineComponentProvider=e!=null&&e.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new Kh(void 0)}}toJSON(){return{kind:this.kind}}}class _0{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=eI(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class E0{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Di.provider}toJSON(){return{kind:this.kind}}}class I0{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new Kh(e)}}toJSON(){return{kind:this.kind}}}function D0(){return new E0}function y0(r){return new I0(r==null?void 0:r.cacheSizeBytes)}function w0(r){return new m0(r)}function T0(r){return new _0(r)}class A0{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Tr.provider,this._offlineComponentProvider={build:t=>new zh(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class R0{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Tr.provider,this._offlineComponentProvider={build:t=>new LE(t,e==null?void 0:e.cacheSizeBytes)}}}function eI(r){return new A0(r==null?void 0:r.forceOwnership)}function v0(){return new R0}/**
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
 */const b0={maxAttempts:5};/**
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
 */class tI{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=bs(e)}set(e,t,n){this._verifyNotCommitted();const s=ur(e,this._firestore),i=bc(s.converter,t,n),o=Bc(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(o.toMutation(s._key,Ve.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=ur(e,this._firestore);let o;return o=typeof(t=Ie(t))=="string"||t instanceof vs?nh(this._dataReader,"WriteBatch.update",i._key,t,n,s):th(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ur(e,this._firestore);return this._mutations=this._mutations.concat(new Pi(t._key,Ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ur(r,e){if((r=Ie(r)).firestore!==e)throw new k(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */let P0=class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=bs(e)}get(e){const t=ur(e,this._firestore),n=new Yh(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return Z(24041);const i=s[0];if(i.isFoundDocument())return new Xo(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new Xo(this._firestore,n,t._key,null,t.converter);throw Z(18433,{doc:i})})}set(e,t,n){const s=ur(e,this._firestore),i=bc(s.converter,t,n),o=Bc(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,o),this}update(e,t,n,...s){const i=ur(e,this._firestore);let o;return o=typeof(t=Ie(t))=="string"||t instanceof vs?nh(this._dataReader,"Transaction.update",i._key,t,n,s):th(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=ur(e,this._firestore);return this._transaction.delete(t._key),this}};/**
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
 */class nI extends P0{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ur(e,this._firestore),n=new Lr(this._firestore);return super.get(e).then(s=>new bt(this._firestore,n,t._key,s._document,new Rn(!1,!1),t.converter))}}function S0(r,e,t){r=de(r,Ae);const n={...b0,...t};(function(o){if(o.maxAttempts<1)throw new k(N.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n);const s=ke(r);return OS(s,i=>e(new nI(r,i)),n)}/**
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
 */function N0(r){r=de(r,ye);const e=de(r.firestore,Ae),t=ke(e);return ME(t,r._key).then(n=>Zh(e,r,n))}function O0(r){r=de(r,ye);const e=de(r.firestore,Ae),t=ke(e),n=new Lr(e);return vS(t,r._key).then(s=>new bt(e,n,r._key,s,new Rn(s!==null&&s.hasLocalMutations,!0),r.converter))}function F0(r){r=de(r,ye);const e=de(r.firestore,Ae),t=ke(e);return ME(t,r._key,{source:"server"}).then(n=>Zh(e,r,n))}function L0(r){r=de(r,nt);const e=de(r.firestore,Ae),t=ke(e),n=new Lr(e);return QE(r._query),GE(t,r._query).then(s=>new Pt(e,n,r,s))}function x0(r){r=de(r,nt);const e=de(r.firestore,Ae),t=ke(e),n=new Lr(e);return bS(t,r._query).then(s=>new Pt(e,n,r,s))}function V0(r){r=de(r,nt);const e=de(r.firestore,Ae),t=ke(e),n=new Lr(e);return GE(t,r._query,{source:"server"}).then(s=>new Pt(e,n,r,s))}function k0(r,e,t){r=de(r,ye);const n=de(r.firestore,Ae),s=bc(r.converter,e,t),i=bs(n);return Hi(n,[Bc(i,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Ve.none())])}function M0(r,e,t,...n){r=de(r,ye);const s=de(r.firestore,Ae),i=bs(s);let o;return o=typeof(e=Ie(e))=="string"||e instanceof vs?nh(i,"updateDoc",r._key,e,t,n):th(i,"updateDoc",r._key,e),Hi(s,[o.toMutation(r._key,Ve.exists(!0))])}function G0(r){return Hi(de(r.firestore,Ae),[new Pi(r._key,Ve.none())])}function U0(r,e){const t=de(r.firestore,Ae),n=C_(r),s=bc(r.converter,e),i=bs(r.firestore);return Hi(t,[Bc(i,"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Ve.exists(!1))]).then(()=>n)}function hB(r,...e){var l,B,d;r=Ie(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||ti(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ti(e[n])){const C=e[n];e[n]=(l=C.next)==null?void 0:l.bind(C),e[n+1]=(B=C.error)==null?void 0:B.bind(C),e[n+2]=(d=C.complete)==null?void 0:d.bind(C)}let i,o,a;if(r instanceof ye)o=de(r.firestore,Ae),a=Si(r._key.path),i={next:C=>{e[n]&&e[n](Zh(o,r,C))},error:e[n+1],complete:e[n+2]};else{const C=de(r,nt);o=de(C.firestore,Ae),a=C._query;const g=new Lr(o);i={next:m=>{e[n]&&e[n](new Pt(o,g,C,m))},error:e[n+1],complete:e[n+2]},QE(r._query)}const u=ke(o);return RS(u,a,s,i)}function H0(r,e,...t){const n=Ie(r),s=function(u){const l={bundle:"",bundleName:"",bundleSource:""},B=["bundle","bundleName","bundleSource"];for(const d of B){if(!(d in u)){l.error=`snapshotJson missing required field: ${d}`;break}const C=u[d];if(typeof C!="string"){l.error=`snapshotJson field '${d}' must be a string.`;break}if(C.length===0){l.error=`snapshotJson field '${d}' cannot be an empty string.`;break}d==="bundle"?l.bundle=C:d==="bundleName"?l.bundleName=C:d==="bundleSource"&&(l.bundleSource=C)}return l}(e);if(s.error)throw new k(N.INVALID_ARGUMENT,s.error);let i,o=0;if(typeof t[o]!="object"||ti(t[o])||(i=t[o++]),s.bundleSource==="QuerySnapshot"){let a=null;if(typeof t[o]=="object"&&ti(t[o])){const u=t[o++];a={next:u.next,error:u.error,complete:u.complete}}else a={next:t[o++],error:t[o++],complete:t[o++]};return function(l,B,d,C,g){let m,w=!1;return BB(l,B.bundle).then(()=>JE(l,B.bundleName)).then(G=>{G&&!w&&(g&&G.withConverter(g),m=hB(G,d||{},C))}).catch(G=>(C.error&&C.error(G),()=>{})),()=>{w||(w=!0,m&&m())}}(n,s,i,a,t[o])}if(s.bundleSource==="DocumentSnapshot"){let a=null;if(typeof t[o]=="object"&&ti(t[o])){const u=t[o++];a={next:u.next,error:u.error,complete:u.complete}}else a={next:t[o++],error:t[o++],complete:t[o++]};return function(l,B,d,C,g){let m,w=!1;return BB(l,B.bundle).then(()=>{if(!w){const G=new ye(l,g||null,K.fromPath(B.bundleName));m=hB(G,d||{},C)}}).catch(G=>(C.error&&C.error(G),()=>{})),()=>{w||(w=!0,m&&m())}}(n,s,i,a,t[o])}throw new k(N.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function q0(r,e){r=de(r,Ae);const t=ke(r),n=ti(e)?e:{next:e};return NS(t,n)}function Hi(r,e){const t=ke(r);return SS(t,e)}function Zh(r,e,t){const n=t.docs.get(e._key),s=new Lr(r);return new bt(r,s,e._key,n,new Rn(t.hasPendingWrites,t.fromCache),e.converter)}function j0(r){return r=de(r,Ae),ke(r),new tI(r,e=>Hi(r,e))}/**
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
 */function J0(r,e){r=de(r,Ae);const t=ke(r);if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return tt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=function(i){const o=typeof i=="string"?function(l){try{return JSON.parse(l)}catch(B){throw new k(N.INVALID_ARGUMENT,"Failed to parse JSON: "+(B==null?void 0:B.message))}}(i):i,a=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const l=Sp(u,"collectionGroup"),B=[];if(Array.isArray(u.fields))for(const d of u.fields){const C=Sp(d,"fieldPath"),g=sh("setIndexConfiguration",C);d.arrayConfig==="CONTAINS"?B.push(new is(g,2)):d.order==="ASCENDING"?B.push(new is(g,0)):d.order==="DESCENDING"&&B.push(new is(g,1))}a.push(new Bi(Bi.UNKNOWN_ID,l,B,hi.empty()))}return a}(e);return xS(t,n)}function Sp(r,e){if(typeof r[e]!="string")throw new k(N.INVALID_ARGUMENT,"Missing string value for: "+e);return r[e]}/**
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
 */class rI{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function K0(r){var s;r=de(r,Ae);const e=Np.get(r);if(e)return e;if(((s=ke(r)._uninitializedComponentsProvider)==null?void 0:s._offline.kind)!=="persistent")return null;const n=new rI(r);return Np.set(r,n),n}function z0(r){sI(r,!0)}function Q0(r){sI(r,!1)}function W0(r){const e=ke(r._firestore);kS(e).then(t=>U("deleting all persistent cache indexes succeeded")).catch(t=>tt("deleting all persistent cache indexes failed",t))}function sI(r,e){const t=ke(r._firestore);VS(t,e).then(n=>U(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(n=>tt(`setting persistent cache index auto creation isEnabled=${e} failed`,n))}const Np=new WeakMap;/**
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
 */class $0{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return ed.instance.onExistenceFilterMismatch(e)}}class ed{constructor(){this.t=new Map}static get instance(){return eu||(eu=new ed,sR(eu)),eu}Ae(e){this.t.forEach(t=>t(e))}onExistenceFilterMismatch(e){const t=Symbol(),n=this.t;return n.set(t,e),()=>n.delete(t)}}let eu=null;const Op="@firebase/firestore",Fp="4.17.2";(function(e,t=!0){mA(ys),cs(new Cr("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new Ae(new ER(n.getProvider("auth-internal")),new yR(o,n.getProvider("app-check-internal")),vA(o,s),o);return i={useFetchStreams:t,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),hn(Op,Fp,e),hn(Op,Fp,"esm2020")})();const EO=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:$h,AggregateField:wi,AggregateQuerySnapshot:zE,Bytes:At,CACHE_SIZE_UNLIMITED:GS,CollectionReference:Yt,DocumentReference:ye,DocumentSnapshot:bt,FieldPath:vs,FieldValue:Dn,Firestore:Ae,FirestoreError:k,GeoPoint:$t,LoadBundleTask:HE,PersistentCacheIndexManager:rI,Query:nt,QueryCompositeFilterConstraint:Os,QueryConstraint:Gi,QueryDocumentSnapshot:Oo,QueryEndAtConstraint:Da,QueryFieldFilterConstraint:Ui,QueryLimitConstraint:Ea,QueryOrderByConstraint:Pc,QuerySnapshot:Pt,QueryStartAtConstraint:Ia,SnapshotMetadata:Rn,Timestamp:_e,Transaction:nI,VectorValue:yt,WriteBatch:tI,_AutoId:ec,_ByteString:Ne,_DatabaseId:gr,_DocumentKey:K,_EmptyAppCheckTokenProvider:wR,_EmptyAuthCredentialsProvider:r_,_FieldPath:Je,_TestingHooks:$0,_cast:de,_debugAssert:EA,_internalAggregationQueryToProtoRunAggregationQueryRequest:t0,_internalQueryToProtoQueryTarget:e0,_isBase64Available:TA,_logWarn:tt,_validateIsNotUsedTogether:nm,addDoc:U0,aggregateFieldEqual:C0,aggregateQuerySnapshotEqual:p0,and:i0,arrayRemove:XR,arrayUnion:YR,average:f0,clearIndexedDbPersistence:JS,collection:UR,collectionGroup:HR,connectFirestoreEmulator:f_,count:XE,deleteAllPersistentCacheIndexes:W0,deleteDoc:G0,deleteField:WR,disableNetwork:QS,disablePersistentCacheIndexAutoCreation:Q0,doc:C_,documentId:t_,documentSnapshotFromJSON:$S,enableIndexedDbPersistence:qS,enableMultiTabIndexedDbPersistence:jS,enableNetwork:zS,enablePersistentCacheIndexAutoCreation:z0,endAt:h0,endBefore:B0,ensureFirestoreConfigured:ke,executeWrite:Hi,getAggregateFromServer:ZE,getCountFromServer:g0,getDoc:N0,getDocFromCache:O0,getDocFromServer:F0,getDocs:L0,getDocsFromCache:x0,getDocsFromServer:V0,getFirestore:HS,getPersistentCacheIndexManager:K0,increment:ZR,initializeFirestore:US,limit:a0,limitToLast:u0,loadBundle:BB,maximum:tv,memoryEagerGarbageCollector:D0,memoryLocalCache:w0,memoryLruGarbageCollector:y0,minimum:ev,namedQuery:JE,onSnapshot:hB,onSnapshotResume:H0,onSnapshotsInSync:q0,or:s0,orderBy:o0,persistentLocalCache:T0,persistentMultipleTabManager:v0,persistentSingleTabManager:eI,query:n0,queryEqual:QB,querySnapshotFromJSON:YS,refEqual:qR,runTransaction:S0,serverTimestamp:$R,setDoc:k0,setIndexConfiguration:J0,setLogLevel:_A,snapshotEqual:ZS,startAfter:l0,startAt:c0,sum:d0,terminate:WS,updateDoc:M0,vector:T_,waitForPendingWrites:KS,where:r0,writeBatch:j0},Symbol.toStringTag,{value:"Module"}));/**
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
 */const iI="firebasestorage.googleapis.com",oI="storageBucket",Y0=2*60*1e3,X0=10*60*1e3;/**
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
 */class He extends In{constructor(e,t,n=0){super(yl(e),`Firebase Storage: ${t} (${yl(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,He.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ue;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ue||(Ue={}));function yl(r){return"storage/"+r}function td(){const r="An unknown error occurred, please check the error payload for server response.";return new He(Ue.UNKNOWN,r)}function Z0(r){return new He(Ue.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function eN(r){return new He(Ue.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tN(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new He(Ue.UNAUTHENTICATED,r)}function nN(){return new He(Ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function rN(r){return new He(Ue.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function sN(){return new He(Ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iN(){return new He(Ue.CANCELED,"User canceled the upload/download.")}function oN(r){return new He(Ue.INVALID_URL,"Invalid URL '"+r+"'.")}function aN(r){return new He(Ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function uN(){return new He(Ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+oI+"' property when initializing the app?")}function cN(){return new He(Ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function lN(){return new He(Ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function BN(r){return new He(Ue.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function dB(r){return new He(Ue.INVALID_ARGUMENT,r)}function aI(){return new He(Ue.APP_DELETED,"The Firebase app was deleted.")}function hN(r){return new He(Ue.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Fo(r,e){return new He(Ue.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function ho(r){throw new He(Ue.INTERNAL_ERROR,"Internal error: "+r)}/**
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
 */class Gt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Gt.makeFromUrl(e,t)}catch{return new Gt(e,"")}if(n.path==="")return n;throw aN(e)}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function l(re){re.path_=decodeURIComponent(re.path)}const B="v[A-Za-z0-9_]+",d=t.replace(/[.]/g,"\\."),C="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${B}/b/${s}/o${C}`,"i"),m={bucket:1,path:3},w=t===iI?"(?:storage.googleapis.com|storage.cloud.google.com)":t,S="([^?#]*)",G=new RegExp(`^https?://${w}/${s}/${S}`,"i"),Y=[{regex:a,indices:u,postModify:i},{regex:g,indices:m,postModify:l},{regex:G,indices:{bucket:1,path:2},postModify:l}];for(let re=0;re<Y.length;re++){const ce=Y[re],le=ce.regex.exec(e);if(le){const A=le[ce.indices.bucket];let I=le[ce.indices.path];I||(I=""),n=new Gt(A,I),ce.postModify(n);break}}if(n==null)throw oN(e);return n}}class dN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function fN(r,e,t){let n=1,s=null,i=null,o=!1,a=0;function u(){return a===2}let l=!1;function B(...S){l||(l=!0,e.apply(null,S))}function d(S){s=setTimeout(()=>{s=null,r(g,u())},S)}function C(){i&&clearTimeout(i)}function g(S,...G){if(l){C();return}if(S){C(),B.call(null,S,...G);return}if(u()||o){C(),B.call(null,S,...G);return}n<64&&(n*=2);let Y;a===1?(a=2,Y=0):Y=(n+Math.random())*1e3,d(Y)}let m=!1;function w(S){m||(m=!0,C(),!l&&(s!==null?(S||(a=2),clearTimeout(s),d(0)):S||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,w(!0)},t),w}function CN(r){r(!1)}/**
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
 */function pN(r){return r!==void 0}function gN(r){return typeof r=="object"&&!Array.isArray(r)}function nd(r){return typeof r=="string"||r instanceof String}function Lp(r){return rd()&&r instanceof Blob}function rd(){return typeof Blob<"u"}function xp(r,e,t,n){if(n<e)throw dB(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw dB(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
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
 */function sd(r,e,t){let n=e;return t==null&&(n=`https://${e}`),`${t}://${n}/v0${r}`}function uI(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const s=e(n)+"="+e(r[n]);t=t+s+"&"}return t=t.slice(0,-1),t}var us;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(us||(us={}));/**
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
 */function mN(r,e){const t=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,i=e.indexOf(r)!==-1;return t||s||i}/**
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
 */class _N{constructor(e,t,n,s,i,o,a,u,l,B,d,C=!0,g=!1){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=B,this.connectionFactory_=d,this.retry=C,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,w)=>{this.resolve_=m,this.reject_=w,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new tu(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===us.NO_ERROR,u=i.getStatus();if(!a||mN(u,this.additionalRetryCodes_)&&this.retry){const B=i.getErrorCode()===us.ABORT;n(!1,new tu(!1,null,B));return}const l=this.successCodes_.indexOf(u)!==-1;n(!0,new tu(l,i))})},t=(n,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());pN(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=td();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(s.canceled){const u=this.appDelete_?aI():iN();o(u)}else{const u=sN();o(u)}};this.canceled_?t(!1,new tu(!1,null,!0)):this.backoffId_=fN(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&CN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tu{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function EN(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function IN(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DN(r,e){e&&(r["X-Firebase-GMPID"]=e)}function yN(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function wN(r,e,t,n,s,i,o=!0,a=!1){const u=uI(r.urlParams),l=r.url+u,B=Object.assign({},r.headers);return DN(B,e),EN(B,t),IN(B,i),yN(B,n),new _N(l,r.method,B,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,o,a)}/**
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
 */function TN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function AN(...r){const e=TN();if(e!==void 0){const t=new e;for(let n=0;n<r.length;n++)t.append(r[n]);return t.getBlob()}else{if(rd())return new Blob(r);throw new He(Ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function RN(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
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
 */function vN(r){if(typeof atob>"u")throw BN("base-64");return atob(r)}/**
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
 */const Bn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wl{constructor(e,t){this.data=e,this.contentType=t||null}}function bN(r,e){switch(r){case Bn.RAW:return new wl(cI(e));case Bn.BASE64:case Bn.BASE64URL:return new wl(lI(r,e));case Bn.DATA_URL:return new wl(SN(e),NN(e))}throw td()}function cI(r){const e=[];for(let t=0;t<r.length;t++){let n=r.charCodeAt(t);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=n,o=r.charCodeAt(++t);n=65536|(i&1023)<<10|o&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function PN(r){let e;try{e=decodeURIComponent(r)}catch{throw Fo(Bn.DATA_URL,"Malformed data URL.")}return cI(e)}function lI(r,e){switch(r){case Bn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Fo(r,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Bn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Fo(r,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=vN(e)}catch(s){throw s.message.includes("polyfill")?s:Fo(r,"Invalid character found")}const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}class BI{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Fo(Bn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;n!=null&&(this.base64=ON(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function SN(r){const e=new BI(r);return e.base64?lI(Bn.BASE64,e.rest):PN(e.rest)}function NN(r){return new BI(r).contentType}function ON(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
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
 */class or{constructor(e,t){let n=0,s="";Lp(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Lp(this.data_)){const n=this.data_,s=RN(n,e,t);return s===null?null:new or(s)}else{const n=new Uint8Array(this.data_.buffer,e,t-e);return new or(n,!0)}}static getBlob(...e){if(rd()){const t=e.map(n=>n instanceof or?n.data_:n);return new or(AN.apply(null,t))}else{const t=e.map(o=>nd(o)?bN(Bn.RAW,o).data:o.data_);let n=0;t.forEach(o=>{n+=o.byteLength});const s=new Uint8Array(n);let i=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new or(s,!0)}}uploadData(){return this.data_}}/**
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
 */function hI(r){let e;try{e=JSON.parse(r)}catch{return null}return gN(e)?e:null}/**
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
 */function FN(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function LN(r,e){const t=e.split("/").filter(n=>n.length>0).join("/");return r.length===0?t:r+"/"+t}function dI(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */function xN(r,e){return e}class It{constructor(e,t,n,s){this.server=e,this.local=t||e,this.writable=!!n,this.xform=s||xN}}let nu=null;function VN(r){return!nd(r)||r.length<2?r:dI(r)}function fI(){if(nu)return nu;const r=[];r.push(new It("bucket")),r.push(new It("generation")),r.push(new It("metageneration")),r.push(new It("name","fullPath",!0));function e(i,o){return VN(o)}const t=new It("name");t.xform=e,r.push(t);function n(i,o){return o!==void 0?Number(o):o}const s=new It("size");return s.xform=n,r.push(s),r.push(new It("timeCreated")),r.push(new It("updated")),r.push(new It("md5Hash",null,!0)),r.push(new It("cacheControl",null,!0)),r.push(new It("contentDisposition",null,!0)),r.push(new It("contentEncoding",null,!0)),r.push(new It("contentLanguage",null,!0)),r.push(new It("contentType",null,!0)),r.push(new It("metadata","customMetadata",!0)),nu=r,nu}function kN(r,e){function t(){const n=r.bucket,s=r.fullPath,i=new Gt(n,s);return e._makeStorageReference(i)}Object.defineProperty(r,"ref",{get:t})}function MN(r,e,t){const n={};n.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];n[o.local]=o.xform(n,e[o.server])}return kN(n,r),n}function CI(r,e,t){const n=hI(e);return n===null?null:MN(r,n,t)}function GN(r,e,t,n){const s=hI(e);if(s===null||!nd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const B=r.bucket,d=r.fullPath,C="/b/"+o(B)+"/o/"+o(d),g=sd(C,t,n),m=uI({alt:"media",token:l});return g+m})[0]}function UN(r,e){const t={},n=e.length;for(let s=0;s<n;s++){const i=e[s];i.writable&&(t[i.server]=r[i.local])}return JSON.stringify(t)}class pI{constructor(e,t,n,s){this.url=e,this.method=t,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function gI(r){if(!r)throw td()}function HN(r,e){function t(n,s){const i=CI(r,s,e);return gI(i!==null),i}return t}function qN(r,e){function t(n,s){const i=CI(r,s,e);return gI(i!==null),GN(i,s,r.host,r._protocol)}return t}function mI(r){function e(t,n){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=nN():s=tN():t.getStatus()===402?s=eN(r.bucket):t.getStatus()===403?s=rN(r.path):s=n,s.status=t.getStatus(),s.serverResponse=n.serverResponse,s}return e}function jN(r){const e=mI(r);function t(n,s){let i=e(n,s);return n.getStatus()===404&&(i=Z0(r.path)),i.serverResponse=s.serverResponse,i}return t}function JN(r,e,t){const n=e.fullServerUrl(),s=sd(n,r.host,r._protocol),i="GET",o=r.maxOperationRetryTime,a=new pI(s,i,qN(r,t),o);return a.errorHandler=jN(e),a}function KN(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function zN(r,e,t){const n=Object.assign({},t);return n.fullPath=r.path,n.size=e.size(),n.contentType||(n.contentType=KN(null,e)),n}function QN(r,e,t,n,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let Y="";for(let re=0;re<2;re++)Y=Y+Math.random().toString().slice(2);return Y}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=zN(e,n,s),B=UN(l,t),d="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+B+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,C=`\r
--`+u+"--",g=or.getBlob(d,n,C);if(g===null)throw cN();const m={name:l.fullPath},w=sd(i,r.host,r._protocol),S="POST",G=r.maxUploadRetryTime,j=new pI(w,S,HN(r,t),G);return j.urlParams=m,j.headers=o,j.body=g.uploadData(),j.errorHandler=mI(e),j}/**
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
 */class WN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=us.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=us.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=us.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,s,i){if(this.sent_)throw ho("cannot .send() more than once");if(Rr(e)&&n&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ho("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ho("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ho("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ho("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $N extends WN{initXhr(){this.xhr_.responseType="text"}}function _I(){return new $N}/**
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
 */class Ds{constructor(e,t){this._service=e,t instanceof Gt?this._location=t:this._location=Gt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ds(e,t)}get root(){const e=new Gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dI(this._location.path)}get storage(){return this._service}get parent(){const e=FN(this._location.path);if(e===null)return null;const t=new Gt(this._location.bucket,e);return new Ds(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw hN(e)}}function YN(r,e,t){r._throwIfRoot("uploadBytes");const n=QN(r.storage,r._location,fI(),new or(e,!0),t);return r.storage.makeRequestWithTokens(n,_I).then(s=>({metadata:s,ref:r}))}function XN(r){r._throwIfRoot("getDownloadURL");const e=JN(r.storage,r._location,fI());return r.storage.makeRequestWithTokens(e,_I).then(t=>{if(t===null)throw lN();return t})}function ZN(r,e){const t=LN(r._location.path,e),n=new Gt(r._location.bucket,t);return new Ds(r.storage,n)}/**
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
 */function eO(r){return/^[A-Za-z]+:\/\//.test(r)}function tO(r,e){return new Ds(r,e)}function EI(r,e){if(r instanceof id){const t=r;if(t._bucket==null)throw uN();const n=new Ds(t,t._bucket);return e!=null?EI(n,e):n}else return e!==void 0?ZN(r,e):r}function nO(r,e){if(e&&eO(e)){if(r instanceof id)return tO(r,e);throw dB("To use ref(service, url), the first argument must be a Storage instance.")}else return EI(r,e)}function Vp(r,e){const t=e==null?void 0:e[oI];return t==null?null:Gt.makeFromBucketSpec(t,r)}function rO(r,e,t,n={}){r.host=`${e}:${t}`;const s=Rr(e);s&&$u(`https://${r.host}/b`),r._isUsingEmulator=!0,r._protocol=s?"https":"http";const{mockUserToken:i}=n;i&&(r._overrideAuthToken=typeof i=="string"?i:Wp(i,r.app.options.projectId))}class id{constructor(e,t,n,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=iI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Y0,this._maxUploadRetryTime=X0,this._requests=new Set,s!=null?this._bucket=Gt.makeFromBucketSpec(s,this._host):this._bucket=Vp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gt.makeFromBucketSpec(this._url,e):this._bucket=Vp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ds(this,e)}_makeRequest(e,t,n,s,i=!0){if(this._deleted)return new dN(aI());{const o=wN(e,this._appId,n,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const kp="@firebase/storage",Mp="0.14.5";/**
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
 */const II="storage";function IO(r,e,t){return r=Ie(r),YN(r,e,t)}function DO(r){return r=Ie(r),XN(r)}function yO(r,e){return r=Ie(r),nO(r,e)}function wO(r=pB(),e){r=Ie(r);const n=Ti(r,II).getImmediate({identifier:e}),s=Jp("storage");return s&&sO(n,...s),n}function sO(r,e,t,n={}){rO(r,e,t,n)}/**
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
 */function iO(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new id(t,n,s,e,ys)}function oO(){cs(new Cr(II,iO,"PUBLIC").setMultipleInstances(!0)),hn(kp,Mp,""),hn(kp,Mp,"esm2020")}oO();export{EO as A,Cr as C,Zo as E,In as F,tr as G,fB as L,cs as _,Ti as a,Zp as b,cO as c,uO as d,wy as e,dO as f,Ie as g,HS as h,BD as i,wO as j,C_ as k,yO as l,DO as m,lO as n,UD as o,BO as p,N0 as q,hn as r,k0 as s,hO as t,IO as u,fD as v,n0 as w,r0 as x,UR as y,L0 as z};
