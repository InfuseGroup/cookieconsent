/*!
* CookieConsent 3.0.0-rc.13
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const e='opt-in',t='opt-out',o='show--consent',n='show--preferences',a='disable--interaction',s='data-category',c='div',r='button',i='aria-hidden',l='btn-group',d='click',f='data-role',_='consentModal',u='preferencesModal';class p{constructor(){this.t={mode:e,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],g:!1,v:null,h:null,C:null,S:'',T:!0,M:!1,D:!1,k:!1,A:!1,N:!1,H:!1,I:!1,V:!1,F:!1,P:[],O:!1,j:!0,R:[],B:!1,G:'',J:!1,L:[],U:[],$:[],q:[],K:!1,W:!1,X:!1,Y:[],Z:[],ee:[],te:{},oe:{},ne:{},ae:{},se:{},ce:[],re:[]},this.ie={le:{},de:{}},this.fe={},this._e={ue:'cc:onFirstConsent',pe:'cc:onConsent',me:'cc:onChange',ge:'cc:onModalShow',be:'cc:onModalHide',ve:'cc:onModalReady'}}}const m=new p,g=(e,t)=>e.indexOf(t),b=(e,t)=>-1!==g(e,t),v=e=>Array.isArray(e),y=e=>'string'==typeof e,h=e=>!!e&&'object'==typeof e&&!v(e),C=e=>'function'==typeof e,w=e=>Object.keys(e),S=e=>Array.from(new Set(e)),T=()=>document.activeElement,x=e=>e.preventDefault(),M=(e,t)=>e.querySelectorAll(t),D=e=>e.dispatchEvent(new Event('change')),E=e=>{const t=document.createElement(e);return e===r&&(t.type=e),t},k=(e,t,o)=>e.setAttribute(t,o),A=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},N=(e,t,o)=>e.getAttribute(o?'data-'+t:t),H=(e,t)=>e.appendChild(t),I=(e,t)=>e.classList.add(t),V=(e,t)=>I(e,'cm__'+t),F=(e,t)=>I(e,'pm__'+t),P=(e,t)=>e.classList.remove(t),O=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=O(n)}return t},j=()=>{const e={},{L:t,te:o,oe:n}=m.o;for(const a of t)e[a]=J(n[a],w(o[a]));return e},R=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),B=(e,t,o,n)=>{e.addEventListener(t,o),n&&m.o.m.push({ye:e,he:t,Ce:o})},G=()=>{const e=m.t.cookie.expiresAfterDays;return C(e)?e(m.o.G):e},J=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!b(n,e))).concat(n.filter((e=>!b(o,e))))},L=e=>{m.o.U=S(e),m.o.G=(()=>{let e='custom';const{U:t,L:o,$:n}=m.o,a=t.length;return a===o.length?e='all':a===n.length&&(e='necessary'),e})()},U=(e,t,o,n)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,f=e||document,_=e=>M(f,`[data-cc="${e}"]`),u=(e,t)=>{x(e),l(t),i(),r()},p=_('show-preferencesModal'),g=_('show-consentModal'),b=_(a+'all'),v=_(a+'necessary'),y=_(a+'custom'),h=m.t.lazyHtmlGeneration;for(const e of p)k(e,'aria-haspopup','dialog'),B(e,d,(e=>{x(e),c()})),h&&B(e,'mouseenter',(e=>{x(e),m.o.A||o(t,n)}),!0);for(let e of g)k(e,'aria-haspopup','dialog'),B(e,d,(e=>{x(e),s(!0)}),!0);for(let e of b)B(e,d,(e=>{u(e,'all')}),!0);for(let e of y)B(e,d,(e=>{u(e)}),!0);for(let e of v)B(e,d,(e=>{u(e,[])}),!0)};let z;const $=e=>{clearTimeout(z),e?I(m.ie.we,a):z=setTimeout((()=>{P(m.ie.we,a)}),500)},q=['[href]',r,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),K=e=>M(e,q),Q=()=>{const{o:e,ie:t}=m,o=(e,t)=>{const o=K(e);t[0]=o[0],t[1]=o[o.length-1]};e.M&&o(t.Se,e.Y),e.A&&o(t.Te,e.Z),e.I=!1,e.H=!1},W=(e,t,o)=>{const{me:n,pe:a,ue:s,be:c,ve:r,ge:i}=m.fe,l=m._e,d={cookie:m.o.p};if(t){const n={modalName:t};return e===l.ge?C(i)&&i(n):e===l.be?C(c)&&c(n):(n.modal=o,C(r)&&r(n)),R(e,n)}e===l.ue?C(s)&&s(O(d)):e===l.pe?C(a)&&a(O(d)):(d.changedCategories=m.o.R,d.changedServices=m.o.ae,C(n)&&n(O(d))),R(e,O(d))},X=e=>{const{oe:t,ae:o,L:n,te:a,ce:c,re:r,p:i,R:l}=m.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.xe&&b(t[e],o)&&C(s)?(n.xe=!0,s()):n.xe&&!b(t[e],o)&&C(c)&&(n.xe=!1,c())}}if(!m.t.manageScriptTags)return;const d=c,f=e||i.categories||[],_=(e,n)=>{if(n<e.length){const a=e[n],c=r[n],i=c.Me,d=c.De,u=b(f,i),p=!!d&&b(t[i],d);if(!c.Ee){let t=!d&&!c.ke&&u,r=d&&!c.ke&&p,f=!d&&c.ke&&!u&&b(l,i),m=d&&c.ke&&!p&&b(o[i]||[],d);if(t||f||r||m){c.Ee=!0;const t=N(a,'type',!0);A(a,'type',!!t),A(a,s);let o=N(a,'src',!0);o&&A(a,'src',!0);const r=E('script');r.textContent=a.innerHTML;for(const{nodeName:e}of a.attributes)k(r,e,a[e]||N(a,e));if(t&&(r.type=t),o?r.src=o:o=a.src,o&&(r.onload=r.onerror=()=>{_(e,++n)}),a.replaceWith(r),o)return}}_(e,++n)}};_(d,0)},Y='bottom',Z='left',ee='center',te='right',oe='inline',ne='wide',ae='pm--',se=['middle','top',Y],ce=[Z,ee,te],re={box:{Ae:[ne,oe],Ne:se,He:ce,Ie:Y,Ve:te},cloud:{Ae:[oe],Ne:se,He:ce,Ie:Y,Ve:ee},bar:{Ae:[oe],Ne:se.slice(1),He:[],Ie:Y,Ve:''}},ie={box:{Ae:[],Ne:[],He:[],Ie:'',Ve:''},bar:{Ae:[ne],Ne:[],He:[Z,te],Ie:'',Ve:Z}},le=e=>{const t=m.o.i.guiOptions,o=t?.consentModal,n=t?.preferencesModal;0===e&&de(m.ie.Se,re,o,'cm--','box','cm'),1===e&&de(m.ie.Te,ie,n,ae,'box','pm')},de=(e,t,o,n,a,s)=>{e.className=s;const c=o?.layout,r=o?.position,i=o?.flipButtons,l=!1!==o?.equalWeightButtons,d=c?.split(' ')||[],f=d[0],_=d[1],u=f in t?f:a,p=t[u],g=b(p.Ae,_)&&_,v=r?.split(' ')||[],y=v[0],h=n===ae?v[0]:v[1],C=b(p.Ne,y)?y:p.Ie,w=b(p.He,h)?h:p.Ve,S=t=>I(e,n+t);S(u),S(g),S(C),S(w),i&&S('flip');const T=s+'__btn--secondary';if('cm'===s){const{Fe:e,Pe:t}=m.ie;e&&(l?P(e,T):I(e,T)),t&&(l?P(t,T):I(t,T))}else{const{Oe:e}=m.ie;e&&(l?P(e,T):I(e,T))}},fe=(e,t)=>{const o=m.o,n=m.ie,{hide:a,hidePreferences:s,acceptCategory:_}=e,p=e=>{_(e),s(),a()},g=o.u&&o.u.preferencesModal;if(!g)return;const b=g.title,v=g.closeIconLabel,C=g.acceptAllBtn,S=g.acceptNecessaryBtn,T=g.savePreferencesBtn,x=g.sections,M=C||S||T;if(n.je)n.Re=E(c),F(n.Re,'body');else{n.je=E(c),I(n.je,'pm-wrapper'),n.Te=E(c),n.Te.style.visibility='hidden',I(n.Te,'pm'),k(n.Te,'role','dialog'),k(n.Te,i,!0),k(n.Te,'aria-modal',!0),k(n.Te,'aria-labelledby','pm__title'),B(n.we,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Be=E(c),F(n.Be,'header'),n.Ge=E(c),F(n.Ge,'title'),n.Ge.id='pm__title',k(n.Ge,'role','heading'),k(n.Ge,'aria-level','2'),n.Je=E(r),F(n.Je,'close-btn'),k(n.Je,'aria-label',g.closeIconLabel||''),B(n.Je,d,s),n.Le=E(c),F(n.Le,'body'),n.Ue=E(c),F(n.Ue,'footer');var D=E(c);I(D,'btns');var A=E(c),N=E(c);F(A,l),F(N,l),H(n.Ue,A),H(n.Ue,N),H(n.Be,n.Ge),H(n.Be,n.Je),H(n.Te,n.Be),H(n.Te,n.Le),M&&H(n.Te,n.Ue),H(n.je,n.Te)}let V;b&&(n.Ge.innerHTML=b,v&&k(n.Je,'aria-label',v)),x&&x.forEach((e=>{const t=e.title,a=e.description,s=e.linkedCategory,l=s&&o.J[s],f=e.cookieTable,_=f?.body,u=f?.caption,p=_?.length>0,m=!!l,b=m&&o.te[s],v=h(b)&&w(b)||[],C=m&&(!!a||!!p||w(b).length>0);var S=E(c);if(F(S,'section'),C||a){var T=E(c);F(T,'section-desc-wrapper')}let x=v.length;if(C&&x>0){const e=E(c);F(e,'section-services');for(const t of v){const o=b[t],n=o?.label||t,a=E(c),r=E(c),i=E(c),d=E(c);F(a,'service'),F(d,'service-title'),F(r,'service-header'),F(i,'service-icon');const f=_e(n,t,l,!0,s);d.innerHTML=n,H(r,i),H(r,d),H(a,r),H(a,f),H(e,a)}H(T,e)}if(t){var M=E(c),D=E(m?r:c);if(F(M,'section-title-wrapper'),F(D,'section-title'),D.innerHTML=t,H(M,D),m){const e=E('span');F(e,'section-arrow'),H(M,e),S.className+='--toggle';const o=_e(t,s,l);let n=g.serviceCounterLabel;if(x>0&&y(n)){let e=E('span');F(e,'badge'),F(e,'service-counter'),k(e,i,!0),k(e,'data-servicecounter',x),n&&(n=n.split('|'),n=n.length>1&&x>1?n[1]:n[0],k(e,'data-counterlabel',n)),e.innerHTML=x+(n?' '+n:''),H(D,e)}if(C){F(S,'section--expandable');var A=s+'-desc';k(D,'aria-expanded',!1),k(D,'aria-controls',A)}H(M,o)}else k(D,'role','heading'),k(D,'aria-level','3');H(S,M)}if(a){var N=E(c);F(N,'section-desc'),N.innerHTML=a,H(T,N)}if(C&&(k(T,i,'true'),T.id=A,((e,t,o)=>{B(D,d,(()=>{t.classList.contains('is-expanded')?(P(t,'is-expanded'),k(o,'aria-expanded','false'),k(e,i,'true')):(I(t,'is-expanded'),k(o,'aria-expanded','true'),k(e,i,'false'))}))})(T,S,D),p)){const e=E('table'),t=E('thead'),o=E('tbody');if(u){const t=E('caption');F(t,'table-caption'),t.innerHTML=u,e.appendChild(t)}F(e,'section-table'),F(t,'table-head'),F(o,'table-body');const a=f.headers,s=w(a),r=n.ze.createDocumentFragment(),i=E('tr');k(i,'role','row');for(const e of s){const t=a[e],o=E('th');o.id='cc__row-'+t,k(o,'role','columnheader'),k(o,'scope','col'),F(o,'table-th'),o.innerHTML=t,H(r,o)}H(i,r),H(t,i);const l=n.ze.createDocumentFragment();for(const e of _){const t=E('tr');k(t,'role','row'),F(t,'table-tr');for(const o of s){const n=a[o],s=e[o],r=E('td'),i=E(c);F(r,'table-td'),k(r,'data-column',n),k(r,'headers','cc__row-'+n),i.insertAdjacentHTML('beforeend',s),H(r,i),H(t,r)}H(l,t)}H(o,l),H(e,t),H(e,o),H(T,e)}(C||a)&&H(S,T);const O=n.Re||n.Le;m?(V||(V=E(c),F(V,'section-toggles')),V.appendChild(S)):V=null,H(O,V||S)})),(C||S)&&(S&&(n.Oe||(n.Oe=E(r),F(n.Oe,'btn'),k(n.Oe,f,'necessary'),H(A,n.Oe),B(n.Oe,d,(()=>p([])))),n.Oe.innerHTML=S),C&&(n.$e||(n.$e=E(r),F(n.$e,'btn'),k(n.$e,f,'all'),H(A,n.$e),B(n.$e,d,(()=>p('all')))),n.$e.innerHTML=C)),T&&(n.qe||(n.qe=E(r),F(n.qe,'btn'),F(n.qe,'btn--secondary'),k(n.qe,f,'save'),H(N,n.qe),B(n.qe,d,(()=>p()))),n.qe.innerHTML=T),n.Re&&(n.Te.replaceChild(n.Re,n.Le),n.Le=n.Re),le(1),o.A||(o.A=!0,W(m._e.ve,u,n.Te),t(e),setTimeout(Q,10),H(n.Ke,n.je),setTimeout((()=>I(n.je,'cc--anim')),100))};function _e(e,o,n,a,c){const r=m.o,l=m.ie,f=E('label'),_=E('input'),u=E('span'),p=E('span'),g=E('span'),v=E('span');if(_.type='checkbox',I(f,'section__toggle-wrapper'),I(_,'section__toggle'),I(g,'toggle__icon-on'),I(v,'toggle__icon-off'),I(u,'toggle__icon'),I(p,'toggle__label'),k(u,i,'true'),a?(I(f,'toggle-service'),k(_,s,c),l.de[c][o]=_):l.le[o]=_,a?(e=>{B(_,'change',(()=>{const t=l.de[e],o=l.le[e];r.ne[e]=[];for(let o in t){const n=t[o];n.checked&&r.ne[e].push(n.value)}o.checked=r.ne[e].length>0}))})(c):(e=>{B(_,d,(()=>{const t=l.de[e],o=_.checked;r.ne[e]=[];for(let n in t)t[n].checked=o,o&&r.ne[e].push(n)}))})(o),_.value=o,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),H(u,v),H(u,g),r.T)(n.readOnly||r.i.mode===t&&n.enabled)&&(_.checked=!0);else if(a){const e=r.oe[c];_.checked=n.readOnly||b(e,o)}else b(r.U,o)&&(_.checked=!0);return n.readOnly&&(_.disabled=!0),H(f,_),H(f,u),H(f,p),f}const ue=(e,t)=>{const o=m.o,n=m.ie,{hide:a,showPreferences:s,acceptCategory:u}=e,p=o.u&&o.u.consentModal;if(!p)return;const g=p.acceptAllBtn,b=p.acceptNecessaryBtn,v=p.showPreferencesBtn,y=p.closeIconLabel,h=p.footer,C=p.label,w=p.title,S=e=>{a(),u(e)};if(!n.Qe){n.Qe=E(c),n.Se=E(c),n.We=E(c),n.Xe=E(c),n.Ye=E(c),I(n.Qe,'cm-wrapper'),I(n.Se,'cm'),V(n.We,'body'),V(n.Xe,'texts'),V(n.Ye,'btns'),k(n.Se,'role','dialog'),k(n.Se,'aria-modal','true'),k(n.Se,i,'false'),k(n.Se,'aria-describedby','cm__desc'),C?k(n.Se,'aria-label',C):w&&k(n.Se,'aria-labelledby','cm__title'),n.Se.style.visibility='hidden';const e='box',t=o.i.guiOptions,a=t?.consentModal,s=(a?.layout||e).split(' ')[0]===e;w&&y&&s&&(n.Pe||(n.Pe=E(r),V(n.Pe,'btn'),V(n.Pe,'btn--close'),B(n.Pe,d,(()=>{S([])})),H(n.We,n.Pe)),k(n.Pe,'aria-label',y)),H(n.We,n.Xe),(g||b||v)&&H(n.We,n.Ye),H(n.Se,n.We),H(n.Qe,n.Se)}w&&(n.Ze||(n.Ze=E(c),n.Ze.className=n.Ze.id='cm__title',k(n.Ze,'role','heading'),k(n.Ze,'aria-level','2'),H(n.Xe,n.Ze)),n.Ze.innerHTML=w);let T=p.description;if(T&&(o.O&&(T=T.replace('{{revisionMessage}}',o.j?'':p.revisionMessage||'')),n.et||(n.et=E(c),n.et.className=n.et.id='cm__desc',H(n.Xe,n.et)),n.et.innerHTML=T),g&&(n.tt||(n.tt=E(r),V(n.tt,'btn'),k(n.tt,f,'all'),B(n.tt,d,(()=>{S('all')}))),n.tt.innerHTML=g),b&&(n.Fe||(n.Fe=E(r),V(n.Fe,'btn'),k(n.Fe,f,'necessary'),B(n.Fe,d,(()=>{S([])}))),n.Fe.innerHTML=b),v&&(n.ot||(n.ot=E(r),V(n.ot,'btn'),V(n.ot,'btn--secondary'),k(n.ot,f,'show'),B(n.ot,'mouseenter',(()=>{o.A||fe(e,t)})),B(n.ot,d,s)),n.ot.innerHTML=v),n.nt||(n.nt=E(c),V(n.nt,l),b&&H(n.nt,n.Fe),g&&H(n.nt,n.tt),(g||b)&&H(n.We,n.nt),H(n.Ye,n.nt)),n.ot&&!n.st&&(n.st=E(c),n.Fe&&n.tt?(V(n.st,l),H(n.st,n.ot),H(n.Ye,n.st)):(H(n.nt,n.ot),V(n.nt,l+'--uneven'))),h){if(!n.ct){let e=E(c),t=E(c);n.ct=E(c),V(e,'footer'),V(t,'links'),V(n.ct,'link-group'),H(t,n.ct),H(e,t),H(n.Se,e)}n.ct.innerHTML=h}le(0),o.M||(o.M=!0,W(m._e.ve,_,n.Se),t(e),setTimeout(Q,10),H(n.Ke,n.Qe),setTimeout((()=>I(n.Qe,'cc--anim')),100)),U(n.We,e,fe,t)},pe=e=>y(e)&&e in m.o._,me=()=>m.o.l||m.o.i.language.default,ge=e=>{e&&(m.o.l=e)},be=async e=>{const t=m.o;let o;o=e&&pe(e)?e:me();let n=t._[o];if(!n)return!1;if(y(n)){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(n);if(!e)return!1;n=e}return t.u=n,ge(o),!0},ve=()=>{let e=m.o.i.language.rtl,t=m.ie.Ke;e&&t&&(v(e)||(e=[e]),b(e,m.o.l)?I(t,'cc--rtl'):P(t,'cc--rtl'))},ye=e=>{const t=m.ie;if(!t.Ke){t.Ke=E(c),t.Ke.id='cc-main',t.Ke.style.position='fixed',t.Ke.style.zIndex='2147483647',ve();let o=m.o.i.root;o&&y(o)&&(o=document.querySelector(o)),(o||t.ze.body).prepend(t.Ke),(({hidePreferences:e})=>{const t=m.ie;B(t.Ke,d,(o=>{const n=m.o;n.F?t.Te.contains(o.target)?n.N=!0:(e(),n.N=!1):n.D&&t.Se.contains(o.target)&&(n.N=!0)}))})(e)}},he=e=>{const{hostname:t,protocol:o}=location,{name:n,path:a,domain:s,sameSite:c}=m.t.cookie,r=encodeURIComponent(JSON.stringify(m.o.p)),i=e?(()=>{const e=m.o.C,t=e?new Date-e:0;return 864e5*G()-t})():864e5*G(),l=new Date;l.setTime(l.getTime()+i);let d=n+'='+r+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;b(t,'.')&&(d+='; Domain='+s),'https:'===o&&(d+='; Secure'),document.cookie=d,m.o.p},Ce=(e,t,o)=>{const n=o||m.t.cookie.domain,a=t||m.t.cookie.path,s='www.'===n.slice(0,4),c=s&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),s&&r(t,c)},we=e=>(e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t})(Se(e||m.t.cookie.name,!0)),Se=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Te=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];if(e)try{e.test(t)&&o.push(t)}catch(e){}else o.push(t)}return o},xe=(o,n=[])=>{((e,t)=>{const{L:o,U:n,$:a,A:s,ne:c,te:r}=m.o;let i=[];if(e){v(e)?i.push(...e):y(e)&&(i='all'===e?o:[e]);for(const e of o)c[e]=b(i,e)?w(r[e]):[]}else i=s?(()=>{const e=m.ie.le;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})():n;i=i.filter((e=>!b(o,e)||!b(t,e))),i.push(...a),L(i)})(o,n),(e=>{const t=m.o,{ne:o,$:n,oe:a,te:s,L:c}=t,r=c;t.se=O(a);for(const e of r){const t=s[e],c=w(t),r=o[e]?.length>0,i=b(n,e);if(0!==c.length){if(a[e]=[],i)a[e].push(...c);else if(r){const t=o[e];a[e].push(...t)}else a[e]=[];a[e]=S(a[e])}}})(),(()=>{const o=m.o;m.t.mode===t&&o.T?o.R=J(o.q,o.U):o.R=J(o.U,o.p.categories);let n=o.R.length>0,a=!1;for(const e of o.L)o.ae[e]=J(o.oe[e],o.se[e]),o.ae[e].length>0&&(a=!0);const s=m.ie.le;for(let e in s)s[e].checked=b(o.U,e);for(const e of o.L){const t=m.ie.de[e],n=o.oe[e];for(const e in t)t[e].checked=b(n,e)}o.h||(o.h=new Date),o.S||(o.S=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),o.p={categories:O(o.U),revision:m.t.revision,data:o.v,consentTimestamp:o.h.toISOString(),consentId:o.S,services:O(o.oe)};let c=!1;(o.T||n||a)&&(o.T&&(o.T=!1,c=!0),o.C?o.C=new Date:o.C=o.h,o.p.lastConsentTimestamp=o.C.toISOString(),he(),m.t.autoClearCookies&&(c||!o.T&&n)&&(e=>{const t=m.o,o=Te();t.B=!1;let n=e?t.L:t.R;n=n.filter((e=>{let o=t.J[e];return!!o&&!o.readOnly&&!!o.autoClear}));for(const a of n){const n=t.J[a].autoClear,s=n?.cookies||[],c=b(t.R,a),r=!b(t.U,a),i=c&&r;if(e&&r||!e&&i){!0===n.reloadPage&&i&&(t.B=!0);for(const e of s){let t=[];const n=e.name,a=e.domain,s=e.path;if(n instanceof RegExp)for(let e of o)n.test(e)&&t.push(e);else{let e=g(o,n);e>-1&&t.push(o[e])}t.length>0&&Ce(t,s,a)}}}})(c),X()),c&&(W(m._e.ue),W(m._e.pe),m.t.mode===e)||((n||a)&&W(m._e.me),o.B&&location.reload())})()},Me=e=>{const t=m.o.T?[]:m.o.U;return b(t,e)},De=(e,t)=>{const{L:o,te:n}=m.o;if(!(e&&t&&y(t)&&b(o,t)&&0!==w(n[t]).length))return!1;((e,t)=>{const o=m.o,{te:n,ne:a,A:s}=o,c=m.ie.de[t]||{},r=m.ie.le[t]||{},i=w(n[t]);if(a[t]=[],y(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,D(c[e])}else if(b(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,D(c[t])}else if(v(e))for(let o of i){const n=b(e,o);n&&a[t].push(o),s&&(c[o].checked=n,D(c[o]))}const l=0===a[t].length;o.U=l?o.U.filter((e=>e!==t)):S([...o.U,t]),s&&(r.checked=!l,D(r))})(e,t),xe()},Ee=(e,t)=>{const o=m.o.T?[]:m.o.oe[t];return b(o,e)},ke=e=>''!==Se(e,!0),Ae=(e,t,o)=>{let n=[];const a=e=>{if(y(e)){let t=Se(e);''!==t&&n.push(t)}else n.push(...Te(e))};if(v(e))for(let t of e)a(t);else a(e);Ce(n,t,o)},Ne=e=>{const{ie:t,o:n}=m;e&&!n.M&&ue(Fe,ye),n.M&&(n.D=!0,n.g&&$(!0),I(t.we,o),k(t.Se,i,'false'),setTimeout((()=>{n.W=T(),n.P=n.Y}),200),W(m._e.ge,_))},He=()=>{const{ie:e,o:t,_e:n}=m;t.M&&(t.D=!1,t.V=!0,t.g&&$(),P(e.we,o),k(e.Se,i,'true'),setTimeout((()=>{t.P=[]}),200),W(n.be,_))},Ie=()=>{const e=m.o;e.A&&e.k||(e.A||fe(Fe,ye),I(m.ie.we,n),k(m.ie.Te,i,'false'),e.k=!0,setTimeout((()=>{e.F=!0}),1),setTimeout((()=>{e.D?e.X=T():e.W=T(),0!==e.Z.length&&(e.Z[0].focus(),e.P=e.Z)}),200),W(m._e.ge,u))},Ve=()=>{const e=m.o;e.k&&(P(m.ie.we,n),k(m.ie.Te,i,'true'),e.k=!1,e.V=!0,setTimeout((()=>{e.F=!1}),1),e.D?(e.X&&e.X.focus(),e.P=e.Y):e.P=[],e.N=!1,W(m._e.be,u))};var Fe={show:Ne,hide:He,showPreferences:Ie,hidePreferences:Ve,acceptCategory:xe};const Pe=async(e,t)=>{if(!pe(e))return!1;const o=m.o;return!(e===me()&&!0!==t||!await be(e)||(ge(e),o.M&&ue(Fe,ye),o.A&&fe(Fe,ye),ve(),Q(),0))},Oe=()=>{const{G:e,oe:t}=m.o,{accepted:o,rejected:n}=(()=>{const{T:e,U:t,L:o}=m.o;return{accepted:t,rejected:e?[]:o.filter((e=>!b(t,e)))}})();return O({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:j()})},je=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=E('script'),h(t))for(const e in t)k(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,H(document.head,o)}))},Re=e=>{let t,o=e.value,n=e.mode,a=!1;const s=m.o;if('update'===n){s.v=t=Be('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],a=!0)}else!e&&t||t===o||(t=o,a=!0)}else t=o,a=!0;return a&&(s.v=t,s.p.data=t,he(!0)),a},Be=(e,t)=>{const o=we(t);return e?o[e]:o},Ge=e=>{const t=m.t,o=m.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},Je=()=>!m.o.T,Le=async e=>{const{o:o,t:n,_e:a}=m,c=window;if(!c._ccRun){if(c._ccRun=!0,(e=>{const{ie:o,t:n,o:a}=m,c=n,r=a,{cookie:i}=c,l=m.fe,d=e.cookie,f=e.categories,_=w(f)||[],u=navigator,p=document;o.ze=p,o.we=p.documentElement,i.domain=location.hostname,r.i=e,r.J=f,r.L=_,r._=e.language.translations,r.g=!!e.disablePageInteraction,l.ue=e.onFirstConsent,l.pe=e.onConsent,l.me=e.onChange,l.be=e.onModalHide,l.ge=e.onModalShow,l.ve=e.onModalReady;const{mode:g,autoShow:v,lazyHtmlGeneration:y,autoClearCookies:C,revision:S,manageScriptTags:T,hideFromBots:x}=e;g===t&&(c.mode=g),'boolean'==typeof C&&(c.autoClearCookies=C),'boolean'==typeof T&&(c.manageScriptTags=T),'number'==typeof S&&S>=0&&(c.revision=S,r.O=!0),'boolean'==typeof v&&(c.autoShow=v),'boolean'==typeof y&&(c.lazyHtmlGeneration=y),!1===x&&(c.hideFromBots=!1),!0===c.hideFromBots&&u&&(r.K=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),h(d)&&(c.cookie={...i,...d}),c.autoClearCookies,r.O,c.manageScriptTags,(e=>{const{J:t,te:o,oe:n,ne:a,$:s}=m.o;for(let c of e){const e=t[c],r=e.services||{},i=h(r)&&w(r)||[];o[c]={},n[c]=[],a[c]=[],e.readOnly&&(s.push(c),n[c]=i),m.ie.de[c]={};for(let e of i){const t=r[e];t.xe=!1,o[c][e]=t}}})(_),(()=>{if(!m.t.manageScriptTags)return;const e=m.o;e.ce=M(m.ie.ze,'script['+s+']'),e.re=[];for(const t of e.ce){let o=N(t,s),n=t.dataset.service||'',a=!1;if(o&&'!'===o.charAt(0)&&(o=o.slice(1),a=!0),'!'===n.charAt(0)&&(n=n.slice(1),a=!0),b(e.L,o)&&(e.re.push({Ee:!1,ke:a,Me:o,De:n}),n)){const t=e.te[o];t[n]||(t[n]={xe:!1})}}})(),ge((()=>{const e=m.o.i.language.autoDetect;if(e){let t;if('browser'===e?t=navigator.language.slice(0,2).toLowerCase():'document'===e&&(t=document.documentElement.lang),pe(t))return t}return me()})())})(e),o.K)return;(()=>{const e=m.o,o=m.t,n=we(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=v(a);e.p=n,e.S=c;const _=!!c&&y(c);e.h=r,e.h&&(e.h=new Date(r)),e.C=i,e.C&&(e.C=new Date(i)),e.v=void 0!==l?l:null,e.O&&_&&d!==o.revision&&(e.j=!1),e.T=!(_&&e.j&&e.h&&e.C&&f),e.T,e.T?o.mode===t&&((()=>{const e=m.o;for(const t of e.L){const o=e.J[t];if(o.enabled||o.readOnly){e.q.push(t);const o=e.te[t]||{};for(let n in o)e.oe[t].push(n)}}})(),e.U=[...e.q]):(e.oe={...e.oe,...s},L([...e.$,...a])),e.ne={...e.oe}})();const r=Je();if(!await be())return!1;if(await(async e=>{U(null,e,fe,ye),m.o.T&&ue(e,ye),m.t.lazyHtmlGeneration||fe(e,ye),(()=>{const e=m.ie,t=m.o;B(e.we,'keydown',(o=>{if('Tab'!==o.key)return;let n=t.P;if(t.V&&!t.D&&!t.k){t.V=!1;const a=e.ze.body;if(T()===a){const t=!!o.shiftKey;if(!t&&a.firstChild===e.Ke)return;return x(o),n=[...K(a)].filter((e=>!(e.matches('#cc-main *')||!e.offsetParent))),n[t?n.length-1:0]?.focus()}}if(n.length>0){const e=T();o.shiftKey?e===n[0]&&(n[1].focus(),x(o)):e===n[1]&&(n[0].focus(),x(o)),t.H||m.o.N||(t.H=!0,!t.I&&x(o),o.shiftKey?n[1].focus():n[0].focus())}!t.H&&(t.I=!0)}),!0)})()})(Fe),n.autoShow&&!r&&Ne(!0),r)return X(),W(a.pe);n.mode===t&&X(o.q)}},Ue=e=>{const{Ke:t,we:s}=m.ie,{name:c,path:r,domain:i}=m.t.cookie;e&&Ae(c,r,i);for(const{ye:e,he:t,Ce:o}of m.o.m)e.removeEventListener(t,o);t?.remove(),s?.classList.remove(a,n,o);const l=new p;for(const e in m)m[e]=l[e];window._ccRun=!1};export{xe as acceptCategory,De as acceptService,Me as acceptedCategory,Ee as acceptedService,Ae as eraseCookies,Ge as getConfig,Be as getCookie,Oe as getUserPreferences,He as hide,Ve as hidePreferences,je as loadScript,Ue as reset,Le as run,Re as setCookieData,Pe as setLanguage,Ne as show,Ie as showPreferences,Je as validConsent,ke as validCookie};
