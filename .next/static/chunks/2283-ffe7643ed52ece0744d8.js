"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2283],{2283:function(e,r,t){t.d(r,{cI:function(){return ge}});var s=t(7294),n=e=>"checkbox"===e.type,i=e=>null==e;const c=e=>"object"===typeof e;var u=e=>!i(e)&&!Array.isArray(e)&&c(e)&&!(e instanceof Date),a=e=>e.substring(0,e.search(/.\d/))||e,l=e=>e.filter(Boolean),o=e=>void 0===e,f=(e={},r,t)=>{const s=l(r.split(/[,[\].]+?/)).reduce(((e,r)=>i(e)?e:e[r]),e);return o(s)||s===e?o(e[r])?t:e[r]:s};const d="blur",b="onBlur",y="onChange",g="onSubmit",h="onTouched",m="all",v="undefined",O="max",p="min",j="maxLength",k="minLength",V="pattern",w="required",A="validate";var _=(e,r)=>{const t=Object.assign({},e);return delete t[r],t};const x=s.createContext(null);x.displayName="RHFContext";var R=(e,r,t,s,n=!0)=>e?new Proxy(r,{get:(e,r)=>{if(r in e)return t.current[r]!==m&&(t.current[r]=!n||m),s&&(s.current[r]=!0),e[r]}}):r,S=e=>u(e)&&!Object.keys(e).length,D=(e,r,t)=>S(e)||Object.keys(e).length>=Object.keys(r).length||Object.keys(e).find((e=>r[e]===(!t||m))),C=typeof window!==v&&typeof window.HTMLElement!==v&&typeof document!==v;const F=C?"Proxy"in window:typeof Proxy!==v;var E=(e,r,t,s,n)=>r?Object.assign(Object.assign({},t[e]),{types:Object.assign(Object.assign({},t[e]&&t[e].types?t[e].types:{}),{[s]:n||!0})}):{},N=e=>/^\w*$/.test(e),B=e=>l(e.replace(/["|']|\]/g,"").split(/\.|\[/));function M(e,r,t){let s=-1;const n=N(r)?[r]:B(r),i=n.length,c=i-1;for(;++s<i;){const r=n[s];let i=t;if(s!==c){const t=e[r];i=u(t)||Array.isArray(t)?t:isNaN(+n[s+1])?{}:[]}e[r]=i,e=e[r]}return e}const T=(e,r,t)=>{for(const s of t||Object.keys(e)){const t=f(e,s);if(t){const e=t._f,s=_(t,"_f");if(e&&r(e.name)){if(e.ref.focus&&o(e.ref.focus()))break;if(e.refs){e.refs[0].focus();break}}else u(s)&&T(s,r)}}},I=(e,r={current:{}},t={})=>{for(const s in e.current){const n=e.current[s];if(n){const e=n._f,i=_(n,"_f");M(t,s,e?e.ref.disabled||e.refs&&e.refs.every((e=>e.disabled))?void 0:e.value:Array.isArray(n)?[]:{}),i&&I({current:i},r,t[s])}}return Object.assign(Object.assign({},r.current),t)};var L=e=>i(e)||!c(e);function P(e,r,t){if(L(e)||L(r)||e instanceof Date||r instanceof Date)return e===r;if(!s.isValidElement(e)){const s=Object.keys(e),n=Object.keys(r);if(s.length!==n.length)return!1;for(const i of s){const s=e[i];if(!t||"ref"!==i){const e=r[i];if((u(s)||Array.isArray(s))&&(u(e)||Array.isArray(e))?!P(s,e,t):s!==e)return!1}}}return!0}function W(e,r){if(L(e)||L(r))return r;for(const s in r){const n=e[s],i=r[s];try{e[s]=u(n)&&u(i)||Array.isArray(n)&&Array.isArray(i)?W(n,i):i}catch(t){}}return e}function H(e,r,t,s,n){let i=-1;for(;++i<e.length;){for(const s in e[i])Array.isArray(e[i][s])?(!t[i]&&(t[i]={}),t[i][s]=[],H(e[i][s],f(r[i]||{},s,[]),t[i][s],t[i],s)):P(f(r[i]||{},s),e[i][s])?M(t[i]||{},s):t[i]=Object.assign(Object.assign({},t[i]),{[s]:!0});s&&!t.length&&delete s[n]}return t}var $=(e,r,t)=>W(H(e,r,t.slice(0,e.length)),H(r,e,t.slice(0,e.length)));var q=e=>"boolean"===typeof e;function z(e,r){const t=N(r)?[r]:B(r),s=1==t.length?e:function(e,r){const t=r.slice(0,-1).length;let s=0;for(;s<t;)e=o(e)?s++:e[r[s++]];return e}(e,t),n=t[t.length-1];let i;s&&delete s[n];for(let c=0;c<t.slice(0,-1).length;c++){let r,s=-1;const n=t.slice(0,-(c+1)),a=n.length-1;for(c>0&&(i=e);++s<n.length;){const t=n[s];r=r?r[t]:e[t],a===s&&(u(r)&&S(r)||Array.isArray(r)&&!r.filter((e=>u(e)&&!S(e)||q(e))).length)&&(i?delete i[t]:delete e[t]),i=r}}return e}function G(e,r){const t={};for(const s of e){const e=f(r,s);e&&(N(s)?t[s]=e._f:M(t,s,e._f))}return t}var J=e=>"file"===e.type,K=e=>"select-multiple"===e.type,Q=e=>"radio"===e.type;const U={value:!1,isValid:!1},X={value:!0,isValid:!0};var Y=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!o(e[0].attributes.value)?o(e[0].value)||""===e[0].value?X:{value:e[0].value,isValid:!0}:X:U}return U};const Z={isValid:!1,value:null};var ee=e=>Array.isArray(e)?e.reduce(((e,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:e),Z):Z;function re(e){if(e&&e._f){const t=e._f.ref;if(t.disabled)return;return J(t)?t.files:Q(t)?ee(e._f.refs).value:K(t)?(r=t.options,[...r].filter((({selected:e})=>e)).map((({value:e})=>e))):n(t)?Y(e._f.refs).value:((e,{valueAsNumber:r,valueAsDate:t,setValueAs:s})=>r?""===e?NaN:+e:t?new Date(e):s?s(e):e)(o(t.value)?e._f.ref.value:t.value,e._f)}var r}var te=e=>"function"===typeof e,se=e=>"string"===typeof e,ne=e=>se(e)||s.isValidElement(e),ie=e=>e instanceof RegExp;function ce(e,r,t="validate"){if(ne(e)||q(e)&&!e)return{type:t,message:ne(e)?e:"",ref:r}}var ue=e=>u(e)&&!ie(e)?e:{value:e,message:""},ae=async({_f:{ref:e,refs:r,required:t,maxLength:s,minLength:c,min:a,max:l,pattern:o,validate:f,name:d,value:b}},y)=>{const g={},h=Q(e),m=n(e),v=h||m,_=!b||Array.isArray(b)&&!b.length,x=E.bind(null,d,y,g),R=(r,t,s,n=j,i=k)=>{const c=r?t:s;g[d]=Object.assign({type:r?n:i,message:c,ref:e},x(r?n:i,c))};if(t&&(!h&&!m&&(_||i(b))||q(b)&&!b||m&&!Y(r).isValid||h&&!ee(r).isValid)){const{value:s,message:n}=ne(t)?{value:!!t,message:t}:ue(t);if(s&&(g[d]=Object.assign({type:w,message:n,ref:v?(r||[])[0]||{}:e},x(w,n)),!y))return g}if((!i(a)||!i(l))&&""!==b){let r,t;const s=ue(l),n=ue(a);if(isNaN(b)){const i=e.valueAsDate||new Date(b);se(s.value)&&(r=i>new Date(s.value)),se(n.value)&&(t=i<new Date(n.value))}else{const c=e.valueAsNumber||parseFloat(b);i(s.value)||(r=c>s.value),i(n.value)||(t=c<n.value)}if((r||t)&&(R(!!r,s.message,n.message,O,p),!y))return g}if(se(b)&&!_&&(s||c)){const e=ue(s),r=ue(c),t=!i(e.value)&&b.length>e.value,n=!i(r.value)&&b.length<r.value;if((t||n)&&(R(t,e.message,r.message),!y))return g}if(se(b)&&o&&!_){const{value:r,message:t}=ue(o);if(ie(r)&&!r.test(b)&&(g[d]=Object.assign({type:V,message:t,ref:e},x(V,t)),!y))return g}if(f){const t=v&&r?r[0]:e;if(te(f)){const e=ce(await f(b),t);if(e&&(g[d]=Object.assign(Object.assign({},e),x(A,e.message)),!y))return g}else if(u(f)){let e={};for(const[r,s]of Object.entries(f)){if(!S(e)&&!y)break;const n=ce(await s(b),t,r);n&&(e=Object.assign(Object.assign({},n),x(r,n.message)),y&&(g[d]=e))}if(!S(e)&&(g[d]=Object.assign({ref:t},e),!y))return g}}return g},le=e=>({isOnSubmit:!e||e===g,isOnBlur:e===b,isOnChange:e===y,isOnAll:e===m,isOnTouch:e===h}),oe=e=>e instanceof HTMLElement;class fe{constructor(){this.tearDowns=[]}add(e){this.tearDowns.push(e)}unsubscribe(){for(const e of this.tearDowns)e();this.tearDowns=[]}}class de{constructor(e,r){this.observer=e,this.closed=!1,r.add((()=>this.closed=!0))}next(e){this.closed||this.observer.next(e)}}class be{constructor(){this.observers=[]}next(e){for(const r of this.observers)r.next(e)}subscribe(e){const r=new fe,t=new de(e,r);return this.observers.push(t),r}unsubscribe(){this.observers=[]}}const ye=typeof window===v;function ge({mode:e=g,reValidateMode:r=y,resolver:t,context:c,defaultValues:u={},shouldFocusError:b=!0,criteriaMode:h}={}){const v=s.useRef({}),O=s.useRef(new Set),p=s.useRef(new be),j=s.useRef(new be),k=s.useRef(new be),V=s.useRef(new be),w=s.useRef({}),A=s.useRef(new Set),x=s.useRef(!1),E=s.useRef({}),N=s.useRef({}),B=s.useRef(u),L=s.useRef(!1),W=s.useRef(c),H=s.useRef(t),q=s.useRef(new Set),U=le(e),X=h===m,[Y,Z]=s.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!U.isOnSubmit,errors:{}}),ee=s.useRef({isDirty:!F,dirtyFields:!F,touchedFields:!F,isValidating:!F,isValid:!F,errors:!F}),ne=s.useRef(Y);W.current=c,H.current=t;const ie=()=>ne.current.isValid=P(N.current,E.current)&&S(ne.current.errors),ce=s.useCallback(((e,r,t=!1,s={},n,c)=>{let u=t||(({errors:e,name:r,error:t,validFields:s,fieldsWithValidation:n})=>{const i=o(t),c=f(e,r);return i&&!!c||!i&&!P(c,t,!0)||i&&f(n,r)&&!f(s,r)})({errors:ne.current.errors,error:r,name:e,validFields:N.current,fieldsWithValidation:E.current});const a=f(ne.current.errors,e);if(r?(z(N.current,e),u=u||!a||!P(a,r,!0),M(ne.current.errors,e,r)):((f(E.current,e)||H.current)&&(M(N.current,e,!0),u=u||a),z(ne.current.errors,e)),u&&!i(t)||!S(s)||c){const e=Object.assign(Object.assign({},s),{isValid:H.current?!!n:ie(),errors:ne.current.errors});ne.current=Object.assign(Object.assign({},ne.current),e),p.current.next(c?{}:e)}p.current.next({isValidating:!1})}),[]),ue=s.useCallback(((e,r,t={},s,c)=>{c&&xe(e);const u=f(v.current,e,{})._f;if(u){const c=C&&oe(u.ref)&&i(r)?"":r;if(u.value=r,Q(u.ref)?(u.refs||[]).forEach((e=>e.checked=e.value===c)):J(u.ref)&&!se(c)?u.ref.files=c:K(u.ref)?[...u.ref.options].forEach((e=>e.selected=c.includes(e.value))):n(u.ref)&&u.refs?u.refs.length>1?u.refs.forEach((e=>e.checked=Array.isArray(c)?!!c.find((r=>r===e.value)):c===e.value)):u.refs[0].checked=!!c:u.ref.value=c,s){const t=I(v);M(t,e,r),k.current.next({values:Object.assign(Object.assign({},B.current),t),name:e})}t.shouldDirty&&de(e),t.shouldValidate&&ve(e)}}),[]),fe=s.useCallback(((e,r)=>{if(ee.current.isDirty){const t=I(v);return e&&r&&M(t,e,r),!P(t,B.current)}return!1}),[]),de=s.useCallback(((e,r=!0)=>{if(ee.current.isDirty||ee.current.dirtyFields){const t=!P(f(B.current,e),re(f(v.current,e))),s=f(ne.current.dirtyFields,e),n=ne.current.isDirty;t?M(ne.current.dirtyFields,e,!0):z(ne.current.dirtyFields,e),ne.current.isDirty=fe();const i={isDirty:ne.current.isDirty,dirtyFields:ne.current.dirtyFields},c=ee.current.isDirty&&n!==i.isDirty||ee.current.dirtyFields&&s!==f(ne.current.dirtyFields,e);return c&&r&&p.current.next(i),c?i:{}}return{}}),[]),ge=s.useCallback((async(e,r)=>{const t=(await ae(f(v.current,e),X))[e];return ce(e,t,r),o(t)}),[X]),he=s.useCallback((async(e,r=[])=>{const{errors:t}=await H.current(I(v,B),W.current,{criteriaMode:h,names:r,fields:G(O.current,v.current)});for(const s of e){const e=f(t,s);e?M(ne.current.errors,s,e):z(ne.current.errors,s)}return t}),[h]),me=async e=>{for(const r in e){const t=e[r];if(t){const e=t._f,r=_(t,"_f");if(e){const r=await ae(t,X);r[e.name]?(M(ne.current.errors,e.name,r[e.name]),z(N.current,e.name)):f(E.current,e.name)&&(M(N.current,e.name,!0),z(ne.current.errors,e.name))}r&&await me(r)}}},ve=s.useCallback((async e=>{const r=o(e)?Object.keys(v.current):Array.isArray(e)?e:[e];let t;p.current.next({isValidating:!0}),H.current?t=S(await he(r,o(e)?void 0:r)):o(e)?await me(v.current):await Promise.all(r.map((async e=>await ge(e,null)))),p.current.next({errors:ne.current.errors,isValidating:!1,isValid:H.current?t:ie()})}),[he,ge]),Oe=s.useCallback(((e,r,t)=>Object.entries(r).forEach((([r,s])=>{const n=`${e}.${r}`,i=f(v.current,n);i&&!i._f?Oe(n,s,t):ue(n,s,t,!0,!i)}))),[ve]),pe=e=>L.current||A.current.has(e)||A.current.has((e.match(/\w+/)||[])[0]),je=e=>{let r;const t=f(v.current,e);return!t||S(B.current)&&o(t._f.value)||(r=o(t._f.value)?f(B.current,e):t._f.value,o(r)||ue(e,r)),r},ke=s.useCallback((async({type:e,target:t,target:{value:s,type:i}})=>{let c,u,l=t.name;const b=f(v.current,l);if(b){const y=i?re(b):s,g=e===d,{isOnBlur:m,isOnChange:O}=le(r),k=(({isOnBlur:e,isOnChange:r,isOnTouch:t,isTouched:s,isReValidateOnBlur:n,isReValidateOnChange:i,isBlurEvent:c,isSubmitted:u,isOnAll:a})=>!a&&(!u&&t?!(s||c):(u?n:e)?!c:!(u?i:r)||c))(Object.assign({isBlurEvent:g,isTouched:!!f(ne.current.touchedFields,l),isSubmitted:ne.current.isSubmitted,isReValidateOnBlur:m,isReValidateOnChange:O},U)),V=!g&&pe(l);o(y)||(b._f.value=y);const w=de(l,!1);g&&!f(ne.current.touchedFields,l)&&(M(ne.current.touchedFields,l,!0),w.touchedFields=ne.current.touchedFields);let A=!S(w)||V;if(k)return!g&&j.current.next({name:l,type:e,value:y}),A&&p.current.next(V?{}:w);if(p.current.next({isValidating:!0}),H.current){const{errors:e}=await H.current(I(v,B),W.current,{criteriaMode:h,fields:G([l],v.current),names:[l]}),r=ne.current.isValid;if(c=f(e,l),n(t)&&!c){const r=a(l),t=f(e,r,{});t.type&&t.message&&(c=t),(t||f(ne.current.errors,r))&&(l=r)}u=S(e),r!==u&&(A=!0)}else c=(await ae(b,X))[l];!g&&j.current.next({name:l,type:e,value:y}),ce(l,c,A,w,u,V)}}),[]),Ve=e=>{const r=x.current?I(v,B):B.current;return o(e)?r:se(e)?f(r,e):e.map((e=>f(r,e)))},we=s.useCallback((async(e={})=>{const r=ne.current.isValid;if(t){const{errors:r}=await H.current(Object.assign(Object.assign({},I(v,B)),e),W.current,{criteriaMode:h,fields:G(O.current,v.current)});ne.current.isValid=S(r)}else ie();r!==ne.current.isValid&&p.current.next({isValid:ne.current.isValid})}),[h]),Ae=s.useCallback(((e,r,t)=>{const s=Array.isArray(e),n=x.current?Ve():o(r)?B.current:s?r||{}:{[e]:r};if(o(e))return t&&(L.current=!0),n;const i=[];for(const c of s?e:[e])t&&A.current.add(c),i.push(f(n,c));return s?i:i[0]}),[]),_e=(e,r,t)=>{let s=f(v.current,e);if(s){const i=(e=>Q(e)||n(e))(r);if((i?Array.isArray(s._f.refs)&&l(s._f.refs).find((e=>r.value===e.value&&e===r)):r===s._f.ref)||!s||C&&oe(s._f.ref)&&!oe(r))return;s={_f:i?Object.assign(Object.assign({},s._f),{refs:[...l(s._f.refs||[]).filter((e=>oe(e)&&document.contains(e))),r],ref:{type:r.type,name:e}}):Object.assign(Object.assign({},s._f),{ref:r})},M(v.current,e,s);const c=je(e);(i&&Array.isArray(c)?!P(f(v.current,e)._f.value,c):o(f(v.current,e)._f.value))&&(f(v.current,e)._f.value=re(f(v.current,e))),t&&!U.isOnSubmit&&s&&ee.current.isValid&&ae(s,X).then((r=>{S(r)?M(N.current,e,!0):z(N.current,e),ne.current.isValid&&!S(r)&&Z(Object.assign(Object.assign({},ne.current),{isValid:ie()}))}))}},xe=s.useCallback(((e,r)=>(M(v.current,e,{_f:Object.assign(Object.assign(Object.assign({},f(v.current,e)?Object.assign({ref:(f(v.current,e)._f||{}).ref},f(v.current,e)._f):{ref:{name:e}}),{name:e}),r)}),r&&M(E.current,e,!0),O.current.add(e),je(e),ye?{name:e}:{name:e,onChange:ke,onBlur:ke,ref:t=>t&&_e(e,t,r)})),[B.current]),Re=s.useCallback(((e,r)=>async t=>{t&&t.preventDefault&&(t.preventDefault(),t.persist());let s=Object.assign(Object.assign({},B.current),I(v,B));p.current.next({isSubmitting:!0});try{if(H.current){const{errors:e,values:r}=await H.current(s,W.current,{criteriaMode:h,fields:G(O.current,v.current)});ne.current.errors=e,s=r}else await me(v.current);S(ne.current.errors)&&Object.keys(ne.current.errors).every((e=>f(s,e)))?(p.current.next({errors:{},isSubmitting:!0}),await e(s,t)):(r&&await r(ne.current.errors,t),b&&T(v.current,(e=>f(ne.current.errors,e)),O.current))}finally{ne.current.isSubmitted=!0,p.current.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:S(ne.current.errors),submitCount:ne.current.submitCount+1,errors:ne.current.errors})}}),[b,X,h]),Se=s.useCallback((({keepErrors:e,keepDirty:r,keepIsSubmitted:t,keepTouched:s,keepIsValid:n,keepSubmitCount:i})=>{n||(N.current={},E.current={}),A.current=new Set,L.current=!1,p.current.next({submitCount:i?ne.current.submitCount:0,isDirty:!!r&&ne.current.isDirty,isSubmitted:!!t&&ne.current.isSubmitted,isValid:n?ne.current.isValid:!U.isOnSubmit,dirtyFields:r?ne.current.dirtyFields:{},touchedFields:s?ne.current.touchedFields:{},errors:e?ne.current.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})}),[]);return s.useEffect((()=>{x.current=!0;const e=p.current.subscribe({next(e={}){D(e,ee.current,!0)&&(ne.current=Object.assign(Object.assign({},ne.current),e),Z(ne.current))}}),r=V.current.subscribe({next(e){if(e.fields&&e.name&&ee.current.isValid){const r=I(v);M(r,e.name,e.fields),we(r)}}});return H.current&&ee.current.isValid&&we(),()=>{j.current.unsubscribe(),e.unsubscribe(),r.unsubscribe()}}),[]),{control:s.useMemo((()=>({register:xe,isWatchAllRef:L,watchFieldsRef:A,getFormIsDirty:fe,formStateSubjectRef:p,fieldArraySubjectRef:V,controllerSubjectRef:k,watchSubjectRef:j,watchInternal:Ae,fieldsRef:v,validFieldsRef:N,fieldsWithValidationRef:E,fieldArrayNamesRef:q,readFormStateRef:ee,formStateRef:ne,defaultValuesRef:B,fieldArrayDefaultValuesRef:w})),[]),formState:R(F,Y,ee),trigger:ve,register:xe,handleSubmit:Re,watch:s.useCallback(((e,r)=>te(e)?j.current.subscribe({next:t=>e(Ae(void 0,r),t)}):Ae(e,r,!0)),[]),setValue:s.useCallback(((e,r,t={})=>{x.current=!0;const s=f(v.current,e),n=q.current.has(e);n&&(V.current.next({fields:r,name:e,isReset:!0}),(ee.current.isDirty||ee.current.dirtyFields)&&t.shouldDirty&&(M(ne.current.dirtyFields,e,$(r,f(B.current,e,[]),f(ne.current.dirtyFields,e,[]))),p.current.next({dirtyFields:ne.current.dirtyFields,isDirty:fe(e,r)}))),s&&!s._f||n?Oe(e,r,n?{}:t):ue(e,r,t,!0,!s),pe(e)&&p.current.next({}),j.current.next({name:e,value:r})}),[Oe]),getValues:s.useCallback(Ve,[]),reset:s.useCallback(((e,r={})=>{const t=e||B.current;if(C&&!r.keepValues)for(const n of Object.values(v.current))if(n&&n._f){const e=Array.isArray(n._f.refs)?n._f.refs[0]:n._f.ref;if(oe(e))try{e.closest("form").reset();break}catch(s){}}!r.keepDefaultValues&&(B.current=Object.assign({},t)),r.keepValues||(v.current={},k.current.next({values:Object.assign({},t)}),j.current.next({value:Object.assign({},t)}),V.current.next({fields:Object.assign({},t),isReset:!0})),Se(r)}),[]),clearErrors:s.useCallback((e=>{e&&(Array.isArray(e)?e:[e]).forEach((e=>z(ne.current.errors,e))),p.current.next({errors:e?ne.current.errors:{}})}),[]),unregister:s.useCallback(((e,r={})=>{for(const t of e?Array.isArray(e)?e:[e]:Object.keys(O.current))O.current.delete(t),q.current.delete(t),f(v.current,t)&&(r.keepIsValid||(z(E.current,t),z(N.current,t)),!r.keepError&&z(ne.current.errors,t),!r.keepValue&&z(v.current,t),!r.keepDirty&&z(ne.current.dirtyFields,t),!r.keepTouched&&z(ne.current.touchedFields,t),!r.keepDefaultValue&&z(B.current,t),j.current.next({name:t}));p.current.next(Object.assign(Object.assign(Object.assign({},ne.current),r.keepDirty?{isDirty:fe()}:{}),H.current?{}:{isValid:ie()})),r.keepIsValid||we()}),[]),setError:s.useCallback(((e,r,t)=>{const s=((f(v.current,e)||{_f:{}})._f||{}).ref;M(ne.current.errors,e,Object.assign(Object.assign({},r),{ref:s})),p.current.next({errors:ne.current.errors,isValid:!1}),t&&t.shouldFocus&&s&&s.focus&&s.focus()}),[])}}}}]);