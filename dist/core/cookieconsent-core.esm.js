/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const e='opt-in',t='opt-out',o='data-category';class n{constructor(){this.t={mode:e,revision:0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',secure:!0,sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],C:!1,v:null,S:null,h:null,D:'',T:!0,N:!1,k:!0,j:[],O:!1,A:'',I:!1,R:[],F:[],L:[],M:[],P:!1,J:{},U:{},B:{},G:{},H:{},q:[]},this.K={},this.V={W:'cc:onFirstConsent',X:'cc:onConsent',Y:'cc:onChange'}}}const s=new n,c=(e,t)=>e.indexOf(t),r=(e,t)=>-1!==c(e,t),a=e=>Array.isArray(e),i=e=>'string'==typeof e,l=e=>!!e&&'object'==typeof e&&!a(e),d=e=>'function'==typeof e,f=e=>Object.keys(e),_=e=>Array.from(new Set(e)),u=e=>document.createElement(e),p=(e,t,o)=>e.setAttribute(t,o),m=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},g=(e,t,o)=>e.getAttribute(o?'data-'+t:t),C=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=C(n)}return t},v=()=>{const e={},{R:t,J:o,U:n}=s.o;for(const s of t)e[s]=S(n[s],f(o[s]));return e},y=()=>{const e=s.t.cookie.expiresAfterDays;return d(e)?e(s.o.A):e},S=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!r(n,e))).concat(n.filter((e=>!r(o,e))))},h=e=>{s.o.F=_(e),s.o.A=(()=>{let e='custom';const{F:t,R:o,L:n}=s.o,c=t.length;return c===o.length?e='all':c===n.length&&(e='necessary'),e})()},w=(e,t,o)=>{const{Y:n,X:c,W:r,Z:a,$:i,ee:l}=s.K,f=s.V,_={cookie:s.o.p};e===f.W?d(r)&&r(C(_)):e===f.X?d(c)&&c(C(_)):(_.changedCategories=s.o.j,_.changedServices=s.o.G,d(n)&&n(C(_))),((e,t)=>{dispatchEvent(new CustomEvent(e,{detail:t}))})(e,C(_))},D=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},b=e=>{const{U:t,G:n,R:c,J:a,q:i,p:l,j:f}=s.o;for(const e of c){const o=n[e]||t[e]||[];for(const n of o){const o=a[e][n];if(!o)continue;const{onAccept:s,onReject:c}=o;!o.te&&r(t[e],n)?(o.te=!0,d(s)&&s()):o.te&&!r(t[e],n)&&(o.te=!1,d(c)&&c())}}if(!s.t.manageScriptTags)return;const _=i,C=e||l.categories||[],v=(e,s)=>{if(s>=e.length)return;const c=i[s];if(c.oe)return v(e,s+1);const a=c.ne,l=c.se,d=c.ce,_=r(C,l),y=!!d&&r(t[l],d);if(!d&&!c.re&&_||!d&&c.re&&!_&&r(f,l)||d&&!c.re&&y||d&&c.re&&!y&&r(n[l]||[],d)){c.oe=!0;const t=g(a,'type',!0);m(a,'type',!!t),m(a,o);let n=g(a,'src',!0);n&&m(a,'src',!0);const r=u('script');r.textContent=a.innerHTML;for(const{nodeName:e}of a.attributes)p(r,e,a[e]||g(a,e));t&&(r.type=t),n?r.src=n:n=a.src;const i=!!n&&(!t||['text/javascript','module'].includes(t));if(i&&(r.onload=r.onerror=()=>{v(e,++s)}),a.replaceWith(r),i)return}v(e,++s)};v(_,0)},T=e=>D((()=>localStorage.removeItem(e))),N=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=c(e,t);return o>-1?[e[o]]:[]}},k=e=>{const t=s.o,o=A(),n=(e=>{const t=s.o;return(e?t.R:t.j).filter((e=>{const o=t.I[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.G)for(const n of t.G[e]){const s=t.J[e][n].cookies;if(!r(t.U[e],n)&&s)for(const e of s){const t=N(o,e.name);E(t,e.path,e.domain)}}for(const s of n){const n=t.I[s].autoClear,c=n&&n.cookies||[],a=r(t.j,s),i=!r(t.F,s),l=a&&i;if(e?i:l){n.reloadPage&&l&&(t.O=!0);for(const e of c){const t=N(o,e.name);E(t,e.path,e.domain)}}}},j=e=>{const{hostname:t,protocol:o}=location,{name:n,path:c,domain:a,sameSite:i,useLocalStorage:l,secure:d}=s.t.cookie,f=e?(()=>{const e=s.o.h,t=e?new Date-e:0;return 864e5*y()-t})():864e5*y(),_=new Date;_.setTime(_.getTime()+f),s.o.p.expirationTime=_.getTime();const u=JSON.stringify(s.o.p);let p=n+'='+encodeURIComponent(u)+(0!==f?'; expires='+_.toUTCString():'')+'; Path='+c+'; SameSite='+i;r(t,'.')&&(p+='; Domain='+a),d&&'https:'===o&&(p+='; Secure'),l?((e,t)=>{D((()=>localStorage.setItem(e,t)))})(n,u):document.cookie=p,s.o.p},E=(e,t,o)=>{if(0===e.length)return;const n=o||s.t.cookie.domain,c=t||s.t.cookie.path,r='www.'===n.slice(0,4),a=r&&n.substring(4),i=(e,t)=>{document.cookie=e+'=; path='+c+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)i(t),i(t,n),r&&i(t,a)},x=e=>{const t=e||s.t.cookie.name,o=s.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=D((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,D((()=>localStorage.getItem(n)))||''):O(t,!0),o);var n},O=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},A=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?D((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},I=(o,n=[])=>{((e,t)=>{const{R:o,F:n,L:c,ae:l,B:d,M:_,J:u}=s.o;let p=[];if(e){a(e)?p.push(...e):i(e)&&(p='all'===e?o:[e]);for(const e of o)d[e]=r(p,e)?f(u[e]):[]}else p=[...n,..._];p=p.filter((e=>!r(o,e)||!r(t,e))),p.push(...c),h(p)})(o,n),(e=>{const t=s.o,{B:o,L:n,U:c,J:a,R:i}=t,l=i;t.H=C(c);for(const e of l){const s=a[e],i=f(s),l=o[e]&&o[e].length>0,d=r(n,e);if(0!==i.length){if(c[e]=[],d)c[e].push(...i);else if(l){const t=o[e];c[e].push(...t)}else c[e]=t.B[e];c[e]=_(c[e])}}})(),(()=>{const o=s.o;o.j=s.t.mode===t&&o.T?S(o.M,o.F):S(o.F,o.p.categories);let n=o.j.length>0,c=!1;for(const e of o.R)o.G[e]=S(o.U[e],o.H[e]),o.G[e].length>0&&(c=!0);o.S||(o.S=new Date),o.D||(o.D=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),o.p={categories:C(o.F),revision:s.t.revision,data:o.v,consentTimestamp:o.S.toISOString(),consentId:o.D,services:C(o.U)},o.h&&(o.p.lastConsentTimestamp=o.h.toISOString());let r=!1;const a=n||c;(o.T||a)&&(o.T&&(o.T=!1,r=!0),o.h=o.h?new Date:o.S,o.p.lastConsentTimestamp=o.h.toISOString(),j(),s.t.autoClearCookies&&(r||a)&&k(r),b()),r&&(w(s.V.W),w(s.V.X),s.t.mode===e)||(a&&w(s.V.Y),o.O&&(o.O=!1,location.reload()))})()},R=e=>{const t=s.o.T?[]:s.o.F;return r(t,e)},F=(e,t)=>{const{R:o,J:n}=s.o;if(!(e&&t&&i(t)&&r(o,t)&&0!==f(n[t]).length))return!1;I()},L=(e,t)=>{const o=s.o.T?[]:s.o.U[t]||[];return r(o,e)},M=e=>''!==O(e,!0),P=()=>{k(!0)},J=(e,t,o)=>{let n=[];const s=e=>{if(i(e)){let t=O(e);''!==t&&n.push(t)}else n.push(...A(e))};if(a(e))for(let t of e)s(t);else s(e);E(n,t,o)},U=()=>{const{A:e,U:t}=s.o,{accepted:o,rejected:n}=(()=>{const{T:e,F:t,R:o}=s.o;return{accepted:t,rejected:e?[]:o.filter((e=>!r(t,e)))}})();return C({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:v()})},B=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=u('script'),l(t))for(const e in t)p(o,e,t[e]);var s,c;o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,s=document.head,c=o,s.appendChild(c)}))},G=e=>{let t,o=e.value,n=e.mode,c=!1;const r=s.o;if('update'===n){r.v=t=H('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],c=!0)}else!e&&t||t===o||(t=o,c=!0)}else t=o,c=!0;return c&&(r.v=t,r.p.data=t,j(!0)),c},H=(e,t)=>{const o=x(t);return e?o[e]:o},q=e=>{const t=s.t,o=s.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},z=()=>!s.o.T,K=async e=>{const{o:n,t:c,V:d}=s,_=window;if(!_._ccRun){if(_._ccRun=!0,(e=>{const{ie:n,t:c,o:a}=s,i=c,d=a,{cookie:_}=i,u=s.K,p=e.cookie,m=e.categories,C=f(m)||[],v=navigator,y=document;n.le=y,_.domain=location.hostname,d.i=e,d.I=m,d.R=C,u.W=e.onFirstConsent,u.X=e.onConsent,u.Y=e.onChange;const{mode:S,autoClearCookies:h,revision:w,manageScriptTags:D,hideFromBots:b}=e;S===t&&(i.mode=S),'boolean'==typeof h&&(i.autoClearCookies=h),'boolean'==typeof D&&(i.manageScriptTags=D),'number'==typeof w&&w>=0&&(i.revision=w,d.N=!0),!1===b&&(i.hideFromBots=!1),!0===i.hideFromBots&&v&&(d.P=v.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(v.userAgent)||v.webdriver),l(p)&&(i.cookie={..._,...p}),i.autoClearCookies,d.N,i.manageScriptTags,(e=>{const{I:t,J:o,U:n,B:c,L:r}=s.o;for(let a of e){const e=t[a],i=e.services||{},d=l(i)&&f(i)||[];o[a]={},n[a]=[],c[a]=[],e.readOnly&&(r.push(a),n[a]=d),s.ie.de[a]={};for(let e of d){const t=i[e];t.te=!1,o[a][e]=t}}})(C),(()=>{if(!s.t.manageScriptTags)return;const e=s.o,t=(n=document,c='script['+o+']',n.querySelectorAll(c));var n,c;for(const n of t){let t=g(n,o),s=n.dataset.service||'',c=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),c=!0),'!'===s.charAt(0)&&(s=s.slice(1),c=!0),r(e.R,t)&&(e.q.push({ne:n,oe:!1,re:c,se:t,ce:s}),s)){const o=e.J[t];o[s]||(o[s]={te:!1})}}})()})(e),n.P)return;if((()=>{const e=s.o,o=s.t,n=x(),{categories:c,services:r,consentId:l,consentTimestamp:d,lastConsentTimestamp:f,data:_,revision:u}=n,p=a(c);e.p=n,e.D=l;const m=!!l&&i(l);e.S=d,e.S&&(e.S=new Date(d)),e.h=f,e.h&&(e.h=new Date(f)),e.v=void 0!==_?_:null,e.N&&m&&u!==o.revision&&(e.k=!1),e.T=!(m&&e.k&&e.S&&e.h&&p),o.cookie.useLocalStorage&&!e.T&&(e.T=(new Date).getTime()>(n.expirationTime||0),e.T&&T(o.cookie.name)),e.T,(()=>{const e=s.o;for(const o of e.R){const n=e.I[o];if(n.readOnly||n.enabled){e.M.push(o);const n=e.J[o]||{};for(let s in n)e.B[o].push(s),e.i.mode===t&&e.U[o].push(s)}}})(),e.T?o.mode===t&&(e.F=[...e.M]):(e.U={...e.U,...r},e.B={...e.U},h([...e.L,...c]))})(),z())return b(),w(d.X);c.mode===t&&b(n.M)}},Q=e=>{const{name:t,path:o,domain:c,useLocalStorage:r}=s.t.cookie;e&&(r?T(t):J(t,o,c));for(const{fe:e,_e:t,ue:o}of s.o.m)e.removeEventListener(t,o);const a=new n;for(const e in s)s[e]=a[e];window._ccRun=!1};export{I as acceptCategory,F as acceptService,R as acceptedCategory,L as acceptedService,J as eraseCookies,q as getConfig,H as getCookie,U as getUserPreferences,B as loadScript,P as performAutoclearCookies,Q as reset,K as run,G as setCookieData,z as validConsent,M as validCookie};
