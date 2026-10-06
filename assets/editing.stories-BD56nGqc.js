import{j as r}from"./jsx-runtime-Cnbe3ryz.js";import{u as z,w as U,a as Wt,f as to}from"./index-iBx7lKYd.js";import{r as d}from"./index-3dRrDZpt.js";import{T as go}from"./TableCore-Y75h2oha.js";import{c as fo}from"./places-Dp9r7e0L.js";import{a7 as mo,a2 as zt,a8 as Ot,a9 as bo,l as m,j as pt,k as xe,u as ut,_ as Oe,m as ee,n as h,o as gt,s as H,a3 as Bt,a6 as J,aa as ao,ab as oo,ac as no,ad as ro,ae as io}from"./menu-DvyBTqNz.js";import{c as Ht}from"./createSvgIcon-isdANo2I.js";import{m as ho,a as Ze}from"./employees-CL5oqWiT.js";import{T as vo}from"./fixtures-P-DSdYmm.js";import{c as Ce}from"./play-kit-Bu4SXy9H.js";import{w as yo,d as xo,t as Co,S as ko}from"./scene-kit-BsKxVgS1.js";import{D as wo}from"./reference-kit-BHZHy2IZ.js";import{a as Eo}from"./table-core-base-DFRq_Vzl.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./types-reference-CMrm5GSt.js";const $o=e=>{const t=d.useRef({});return d.useEffect(()=>{t.current=e}),t.current};function Qt(e){return typeof e.normalize<"u"?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function Io(e={}){const{ignoreAccents:t=!0,ignoreCase:n=!0,limit:i,matchFrom:c="any",stringify:p,trim:b=!1}=e;return(u,{inputValue:y,getOptionLabel:I})=>{let x=b?y.trim():y;n&&(x=x.toLowerCase()),t&&(x=Qt(x));const C=x?u.filter(D=>{let k=(p||I)(D);return n&&(k=k.toLowerCase()),t&&(k=Qt(k)),c==="start"?k.indexOf(x)===0:k.indexOf(x)>-1}):u;return typeof i=="number"?C.slice(0,i):C}}function St(e,t){for(let n=0;n<e.length;n+=1)if(t(e[n]))return n;return-1}const Oo=Io(),Jt=5,So=e=>{var t;return e.current!==null&&((t=e.current.parentElement)==null?void 0:t.contains(document.activeElement))};function Ro(e){const{unstable_isActiveElementInListbox:t=So,unstable_classNamePrefix:n="Mui",autoComplete:i=!1,autoHighlight:c=!1,autoSelect:p=!1,blurOnSelect:b=!1,clearOnBlur:u=!e.freeSolo,clearOnEscape:y=!1,componentName:I="useAutocomplete",defaultValue:x=e.multiple?[]:null,disableClearable:C=!1,disableCloseOnSelect:D=!1,disabled:k,disabledItemsFocusable:F=!1,disableListWrap:B=!1,filterOptions:L=Oo,filterSelectedOptions:P=!1,freeSolo:w=!1,getOptionDisabled:j,getOptionKey:te,getOptionLabel:ae=o=>{var a;return(a=o.label)!=null?a:o},groupBy:_,handleHomeEndKeys:R=!e.freeSolo,id:N,includeInputInList:we=!1,inputValue:Ee,isOptionEqualToValue:oe=(o,a)=>o===a,multiple:E=!1,onChange:he,onClose:ie,onHighlightChange:je,onInputChange:se,onOpen:Se,open:We,openOnFocus:V=!1,options:He,readOnly:Re=!1,selectOnFocus:Ue=!e.freeSolo,value:mt}=e,ne=mo(N);let Q=ae;Q=o=>{const a=ae(o);return typeof a!="string"?String(a):a};const Ke=d.useRef(!1),bt=d.useRef(!0),q=d.useRef(null),re=d.useRef(null),[De,Tt]=d.useState(null),[Z,Ge]=d.useState(-1),ht=c?0:-1,K=d.useRef(ht),[g,Ut]=zt({controlled:mt,default:x,name:I}),[O,ve]=zt({controlled:Ee,default:"",name:I,state:"inputValue"}),[Fe,vt]=d.useState(!1),Pe=d.useCallback((o,a)=>{if(!(E?g.length<a.length:a!==null)&&!u)return;let s;if(E)s="";else if(a==null)s="";else{const f=Q(a);s=typeof f=="string"?f:""}O!==s&&(ve(s),se&&se(o,s,"reset"))},[Q,O,E,se,ve,u,g]),[$e,yt]=zt({controlled:We,default:!1,name:I,state:"open"}),[Lt,xt]=d.useState(!0),Ct=!E&&g!=null&&O===Q(g),X=$e&&!Re,A=X?L(He.filter(o=>!(P&&(E?g:[g]).some(a=>a!==null&&oe(o,a)))),{inputValue:Ct&&Lt?"":O,getOptionLabel:Q}):[],de=$o({filteredOptions:A,value:g,inputValue:O});d.useEffect(()=>{const o=g!==de.value;Fe&&!o||w&&!o||Pe(null,g)},[g,Pe,Fe,de.value,w]);const Qe=$e&&A.length>0&&!Re,Ne=Ot(o=>{o===-1?q.current.focus():De.querySelector(`[data-tag-index="${o}"]`).focus()});d.useEffect(()=>{E&&Z>g.length-1&&(Ge(-1),Ne(-1))},[g,E,Z,Ne]);function Me(o,a){if(!re.current||o<0||o>=A.length)return-1;let l=o;for(;;){const s=re.current.querySelector(`[data-option-index="${l}"]`),f=F?!1:!s||s.disabled||s.getAttribute("aria-disabled")==="true";if(s&&s.hasAttribute("tabindex")&&!f)return l;if(a==="next"?l=(l+1)%A.length:l=(l-1+A.length)%A.length,l===o)return-1}}const ge=Ot(({event:o,index:a,reason:l="auto"})=>{if(K.current=a,a===-1?q.current.removeAttribute("aria-activedescendant"):q.current.setAttribute("aria-activedescendant",`${ne}-option-${a}`),je&&je(o,a===-1?null:A[a],l),!re.current)return;const s=re.current.querySelector(`[role="option"].${n}-focused`);s&&(s.classList.remove(`${n}-focused`),s.classList.remove(`${n}-focusVisible`));let f=re.current;if(re.current.getAttribute("role")!=="listbox"&&(f=re.current.parentElement.querySelector('[role="listbox"]')),!f)return;if(a===-1){f.scrollTop=0;return}const S=re.current.querySelector(`[data-option-index="${a}"]`);if(S&&(S.classList.add(`${n}-focused`),l==="keyboard"&&S.classList.add(`${n}-focusVisible`),f.scrollHeight>f.clientHeight&&l!=="mouse"&&l!=="touch")){const T=S,ce=f.clientHeight+f.scrollTop,It=T.offsetTop+T.offsetHeight;It>ce?f.scrollTop=It-f.clientHeight:T.offsetTop-T.offsetHeight*(_?1.3:0)<f.scrollTop&&(f.scrollTop=T.offsetTop-T.offsetHeight*(_?1.3:0))}}),pe=Ot(({event:o,diff:a,direction:l="next",reason:s="auto"})=>{if(!X)return;const S=Me((()=>{const T=A.length-1;if(a==="reset")return ht;if(a==="start")return 0;if(a==="end")return T;const ce=K.current+a;return ce<0?ce===-1&&we?-1:B&&K.current!==-1||Math.abs(a)>1?0:T:ce>T?ce===T+1&&we?-1:B||Math.abs(a)>1?T:0:ce})(),l);if(ge({index:S,reason:s,event:o}),i&&a!=="reset")if(S===-1)q.current.value=O;else{const T=Q(A[S]);q.current.value=T,T.toLowerCase().indexOf(O.toLowerCase())===0&&O.length>0&&q.current.setSelectionRange(O.length,T.length)}}),ze=()=>{const o=(a,l)=>{const s=a?Q(a):"",f=l?Q(l):"";return s===f};if(K.current!==-1&&de.filteredOptions&&de.filteredOptions.length!==A.length&&de.inputValue===O&&(E?g.length===de.value.length&&de.value.every((a,l)=>Q(g[l])===Q(a)):o(de.value,g))){const a=de.filteredOptions[K.current];if(a)return St(A,l=>Q(l)===Q(a))}return-1},Je=d.useCallback(()=>{if(!X)return;const o=ze();if(o!==-1){K.current=o;return}const a=E?g[0]:g;if(A.length===0||a==null){pe({diff:"reset"});return}if(re.current){if(a!=null){const l=A[K.current];if(E&&l&&St(g,f=>oe(l,f))!==-1)return;const s=St(A,f=>oe(f,a));s===-1?pe({diff:"reset"}):ge({index:s});return}if(K.current>=A.length-1){ge({index:A.length-1});return}ge({index:K.current})}},[A.length,E?!1:g,P,pe,ge,X,O,E]),jt=Ot(o=>{bo(re,o),o&&Je()});d.useEffect(()=>{Je()},[Je]);const le=o=>{$e||(yt(!0),xt(!0),Se&&Se(o))},ye=(o,a)=>{$e&&(yt(!1),ie&&ie(o,a))},fe=(o,a,l,s)=>{if(E){if(g.length===a.length&&g.every((f,S)=>f===a[S]))return}else if(g===a)return;he&&he(o,a,l,s),Ut(a)},qe=d.useRef(!1),Ae=(o,a,l="selectOption",s="options")=>{let f=l,S=a;if(E){S=Array.isArray(g)?g.slice():[];const T=St(S,ce=>oe(a,ce));T===-1?S.push(a):s!=="freeSolo"&&(S.splice(T,1),f="removeOption")}Pe(o,S),fe(o,S,f,{option:a}),!D&&(!o||!o.ctrlKey&&!o.metaKey)&&ye(o,f),(b===!0||b==="touch"&&qe.current||b==="mouse"&&!qe.current)&&q.current.blur()};function kt(o,a){if(o===-1)return-1;let l=o;for(;;){if(a==="next"&&l===g.length||a==="previous"&&l===-1)return-1;const s=De.querySelector(`[data-tag-index="${l}"]`);if(!s||!s.hasAttribute("tabindex")||s.disabled||s.getAttribute("aria-disabled")==="true")l+=a==="next"?1:-1;else return l}}const wt=(o,a)=>{if(!E)return;O===""&&ye(o,"toggleInput");let l=Z;Z===-1?O===""&&a==="previous"&&(l=g.length-1):(l+=a==="next"?1:-1,l<0&&(l=0),l===g.length&&(l=-1)),l=kt(l,a),Ge(l),Ne(l)},Et=o=>{Ke.current=!0,ve(""),se&&se(o,"","clear"),fe(o,E?[]:null,"clear")},Dt=o=>a=>{if(o.onKeyDown&&o.onKeyDown(a),!a.defaultMuiPrevented&&(Z!==-1&&["ArrowLeft","ArrowRight"].indexOf(a.key)===-1&&(Ge(-1),Ne(-1)),a.which!==229))switch(a.key){case"Home":X&&R&&(a.preventDefault(),pe({diff:"start",direction:"next",reason:"keyboard",event:a}));break;case"End":X&&R&&(a.preventDefault(),pe({diff:"end",direction:"previous",reason:"keyboard",event:a}));break;case"PageUp":a.preventDefault(),pe({diff:-Jt,direction:"previous",reason:"keyboard",event:a}),le(a);break;case"PageDown":a.preventDefault(),pe({diff:Jt,direction:"next",reason:"keyboard",event:a}),le(a);break;case"ArrowDown":a.preventDefault(),pe({diff:1,direction:"next",reason:"keyboard",event:a}),le(a);break;case"ArrowUp":a.preventDefault(),pe({diff:-1,direction:"previous",reason:"keyboard",event:a}),le(a);break;case"ArrowLeft":wt(a,"previous");break;case"ArrowRight":wt(a,"next");break;case"Enter":if(K.current!==-1&&X){const l=A[K.current],s=j?j(l):!1;if(a.preventDefault(),s)return;Ae(a,l,"selectOption"),i&&q.current.setSelectionRange(q.current.value.length,q.current.value.length)}else w&&O!==""&&Ct===!1&&(E&&a.preventDefault(),Ae(a,O,"createOption","freeSolo"));break;case"Escape":X?(a.preventDefault(),a.stopPropagation(),ye(a,"escape")):y&&(O!==""||E&&g.length>0)&&(a.preventDefault(),a.stopPropagation(),Et(a));break;case"Backspace":if(E&&!Re&&O===""&&g.length>0){const l=Z===-1?g.length-1:Z,s=g.slice();s.splice(l,1),fe(a,s,"removeOption",{option:g[l]})}break;case"Delete":if(E&&!Re&&O===""&&g.length>0&&Z!==-1){const l=Z,s=g.slice();s.splice(l,1),fe(a,s,"removeOption",{option:g[l]})}break}},Kt=o=>{vt(!0),V&&!Ke.current&&le(o)},Be=o=>{if(t(re)){q.current.focus();return}vt(!1),bt.current=!0,Ke.current=!1,p&&K.current!==-1&&X?Ae(o,A[K.current],"blur"):p&&w&&O!==""?Ae(o,O,"blur","freeSolo"):u&&Pe(o,g),ye(o,"blur")},G=o=>{const a=o.target.value;O!==a&&(ve(a),xt(!1),se&&se(o,a,"input")),a===""?!C&&!E&&fe(o,null,"clear"):le(o)},W=o=>{const a=Number(o.currentTarget.getAttribute("data-option-index"));K.current!==a&&ge({event:o,index:a,reason:"mouse"})},ue=o=>{ge({event:o,index:Number(o.currentTarget.getAttribute("data-option-index")),reason:"touch"}),qe.current=!0},Gt=o=>{const a=Number(o.currentTarget.getAttribute("data-option-index"));Ae(o,A[a],"selectOption"),qe.current=!1},Ft=o=>a=>{const l=g.slice();l.splice(o,1),fe(a,l,"removeOption",{option:g[o]})},Nt=o=>{$e?ye(o,"toggleInput"):le(o)},Mt=o=>{o.currentTarget.contains(o.target)&&o.target.getAttribute("id")!==ne&&o.preventDefault()},$t=o=>{o.currentTarget.contains(o.target)&&(q.current.focus(),Ue&&bt.current&&q.current.selectionEnd-q.current.selectionStart===0&&q.current.select(),bt.current=!1)},Ye=o=>{!k&&(O===""||!$e)&&Nt(o)};let Te=w&&O.length>0;Te=Te||(E?g.length>0:g!==null);let _e=A;return _&&(_e=A.reduce((o,a,l)=>{const s=_(a);return o.length>0&&o[o.length-1].group===s?o[o.length-1].options.push(a):o.push({key:l,index:l,group:s,options:[a]}),o},[])),k&&Fe&&Be(),{getRootProps:(o={})=>m({"aria-owns":Qe?`${ne}-listbox`:null},o,{onKeyDown:Dt(o),onMouseDown:Mt,onClick:$t}),getInputLabelProps:()=>({id:`${ne}-label`,htmlFor:ne}),getInputProps:()=>({id:ne,value:O,onBlur:Be,onFocus:Kt,onChange:G,onMouseDown:Ye,"aria-activedescendant":X?"":null,"aria-autocomplete":i?"both":"list","aria-controls":Qe?`${ne}-listbox`:void 0,"aria-expanded":Qe,autoComplete:"off",ref:q,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:k}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:Et}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:Nt}),getTagProps:({index:o})=>m({key:o,"data-tag-index":o,tabIndex:-1},!Re&&{onDelete:Ft(o)}),getListboxProps:()=>({role:"listbox",id:`${ne}-listbox`,"aria-labelledby":`${ne}-label`,ref:jt,onMouseDown:o=>{o.preventDefault()}}),getOptionProps:({index:o,option:a})=>{var l;const s=(E?g:[g]).some(S=>S!=null&&oe(a,S)),f=j?j(a):!1;return{key:(l=te==null?void 0:te(a))!=null?l:Q(a),tabIndex:-1,role:"option",id:`${ne}-option-${o}`,onMouseMove:W,onClick:Gt,onTouchStart:ue,"data-option-index":o,"aria-disabled":f,"aria-selected":s}},id:ne,inputValue:O,value:g,dirty:Te,expanded:X&&De,popupOpen:X,focused:Fe||Z!==-1,anchorEl:De,setAnchorEl:Tt,focusedTag:Z,groupedOptions:_e}}function Po(e){return pt("MuiListSubheader",e)}xe("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const Ao=["className","color","component","disableGutters","disableSticky","inset"],To=e=>{const{classes:t,color:n,disableGutters:i,inset:c,disableSticky:p}=e,b={root:["root",n!=="default"&&`color${h(n)}`,!i&&"gutters",c&&"inset",!p&&"sticky"]};return gt(b,Po,t)},Lo=H("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="default"&&t[`color${h(n.color)}`],!n.disableGutters&&t.gutters,n.inset&&t.inset,!n.disableSticky&&t.sticky]}})(({theme:e,ownerState:t})=>m({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},t.color==="primary"&&{color:(e.vars||e).palette.primary.main},t.color==="inherit"&&{color:"inherit"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.inset&&{paddingLeft:72},!t.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper})),so=d.forwardRef(function(t,n){const i=ut({props:t,name:"MuiListSubheader"}),{className:c,color:p="default",component:b="li",disableGutters:u=!1,disableSticky:y=!1,inset:I=!1}=i,x=Oe(i,Ao),C=m({},i,{color:p,component:b,disableGutters:u,disableSticky:y,inset:I}),D=To(C);return r.jsx(Lo,m({as:b,className:ee(D.root,c),ref:n,ownerState:C},x))});so.muiSkipListHighlight=!0;function jo(e){return pt("MuiIconButton",e)}const Do=xe("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Fo=["edge","children","className","color","disabled","disableFocusRipple","size"],No=e=>{const{classes:t,disabled:n,color:i,edge:c,size:p}=e,b={root:["root",n&&"disabled",i!=="default"&&`color${h(i)}`,c&&`edge${h(c)}`,`size${h(p)}`]};return gt(b,jo,t)},Mo=H(Bt,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="default"&&t[`color${h(n.color)}`],n.edge&&t[`edge${h(n.edge)}`],t[`size${h(n.size)}`]]}})(({theme:e,ownerState:t})=>m({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:J.alpha(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>{var n;const i=(n=(e.vars||e).palette)==null?void 0:n[t.color];return m({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&m({color:i==null?void 0:i.main},!t.disableRipple&&{"&:hover":m({},i&&{backgroundColor:e.vars?`rgba(${i.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:J.alpha(i.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Do.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),lo=d.forwardRef(function(t,n){const i=ut({props:t,name:"MuiIconButton"}),{edge:c=!1,children:p,className:b,color:u="default",disabled:y=!1,disableFocusRipple:I=!1,size:x="medium"}=i,C=Oe(i,Fo),D=m({},i,{edge:c,color:u,disabled:y,disableFocusRipple:I,size:x}),k=No(D);return r.jsx(Mo,m({className:ee(k.root,b),centerRipple:!0,focusRipple:!I,disabled:y,ref:n},C,{ownerState:D,children:p}))}),zo=Ht(r.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function qo(e){return pt("MuiChip",e)}const $=xe("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),Bo=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],_o=e=>{const{classes:t,disabled:n,size:i,color:c,iconColor:p,onDelete:b,clickable:u,variant:y}=e,I={root:["root",y,n&&"disabled",`size${h(i)}`,`color${h(c)}`,u&&"clickable",u&&`clickableColor${h(c)}`,b&&"deletable",b&&`deletableColor${h(c)}`,`${y}${h(c)}`],label:["label",`label${h(i)}`],avatar:["avatar",`avatar${h(i)}`,`avatarColor${h(c)}`],icon:["icon",`icon${h(i)}`,`iconColor${h(p)}`],deleteIcon:["deleteIcon",`deleteIcon${h(i)}`,`deleteIconColor${h(c)}`,`deleteIcon${h(y)}Color${h(c)}`]};return gt(I,qo,t)},Vo=H("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{color:i,iconColor:c,clickable:p,onDelete:b,size:u,variant:y}=n;return[{[`& .${$.avatar}`]:t.avatar},{[`& .${$.avatar}`]:t[`avatar${h(u)}`]},{[`& .${$.avatar}`]:t[`avatarColor${h(i)}`]},{[`& .${$.icon}`]:t.icon},{[`& .${$.icon}`]:t[`icon${h(u)}`]},{[`& .${$.icon}`]:t[`iconColor${h(c)}`]},{[`& .${$.deleteIcon}`]:t.deleteIcon},{[`& .${$.deleteIcon}`]:t[`deleteIcon${h(u)}`]},{[`& .${$.deleteIcon}`]:t[`deleteIconColor${h(i)}`]},{[`& .${$.deleteIcon}`]:t[`deleteIcon${h(y)}Color${h(i)}`]},t.root,t[`size${h(u)}`],t[`color${h(i)}`],p&&t.clickable,p&&i!=="default"&&t[`clickableColor${h(i)})`],b&&t.deletable,b&&i!=="default"&&t[`deletableColor${h(i)}`],t[y],t[`${y}${h(i)}`]]}})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return m({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${$.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${$.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:n,fontSize:e.typography.pxToRem(12)},[`& .${$.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${$.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${$.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${$.icon}`]:m({marginLeft:5,marginRight:-6},t.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},t.iconColor===t.color&&m({color:e.vars?e.vars.palette.Chip.defaultIconColor:n},t.color!=="default"&&{color:"inherit"})),[`& .${$.deleteIcon}`]:m({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:J.alpha(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:J.alpha(e.palette.text.primary,.4)}},t.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},t.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`:J.alpha(e.palette[t.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].contrastText}})},t.size==="small"&&{height:24},t.color!=="default"&&{backgroundColor:(e.vars||e).palette[t.color].main,color:(e.vars||e).palette[t.color].contrastText},t.onDelete&&{[`&.${$.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:J.alpha(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},t.onDelete&&t.color!=="default"&&{[`&.${$.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}})},({theme:e,ownerState:t})=>m({},t.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:J.alpha(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${$.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:J.alpha(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},t.clickable&&t.color!=="default"&&{[`&:hover, &.${$.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}}),({theme:e,ownerState:t})=>m({},t.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${$.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${$.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${$.avatar}`]:{marginLeft:4},[`& .${$.avatarSmall}`]:{marginLeft:2},[`& .${$.icon}`]:{marginLeft:4},[`& .${$.iconSmall}`]:{marginLeft:2},[`& .${$.deleteIcon}`]:{marginRight:5},[`& .${$.deleteIconSmall}`]:{marginRight:3}},t.variant==="outlined"&&t.color!=="default"&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:J.alpha(e.palette[t.color].main,.7)}`,[`&.${$.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:J.alpha(e.palette[t.color].main,e.palette.action.hoverOpacity)},[`&.${$.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:J.alpha(e.palette[t.color].main,e.palette.action.focusOpacity)},[`& .${$.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:J.alpha(e.palette[t.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].main}}})),Wo=H("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:n}=e,{size:i}=n;return[t.label,t[`label${h(i)}`]]}})(({ownerState:e})=>m({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.variant==="outlined"&&{paddingLeft:11,paddingRight:11},e.size==="small"&&{paddingLeft:8,paddingRight:8},e.size==="small"&&e.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function Yt(e){return e.key==="Backspace"||e.key==="Delete"}const Ho=d.forwardRef(function(t,n){const i=ut({props:t,name:"MuiChip"}),{avatar:c,className:p,clickable:b,color:u="default",component:y,deleteIcon:I,disabled:x=!1,icon:C,label:D,onClick:k,onDelete:F,onKeyDown:B,onKeyUp:L,size:P="medium",variant:w="filled",tabIndex:j,skipFocusWhenDisabled:te=!1}=i,ae=Oe(i,Bo),_=d.useRef(null),R=ao(_,n),N=V=>{V.stopPropagation(),F&&F(V)},we=V=>{V.currentTarget===V.target&&Yt(V)&&V.preventDefault(),B&&B(V)},Ee=V=>{V.currentTarget===V.target&&(F&&Yt(V)?F(V):V.key==="Escape"&&_.current&&_.current.blur()),L&&L(V)},oe=b!==!1&&k?!0:b,E=oe||F?Bt:y||"div",he=m({},i,{component:E,disabled:x,size:P,color:u,iconColor:d.isValidElement(C)&&C.props.color||u,onDelete:!!F,clickable:oe,variant:w}),ie=_o(he),je=E===Bt?m({component:y||"div",focusVisibleClassName:ie.focusVisible},F&&{disableRipple:!0}):{};let se=null;F&&(se=I&&d.isValidElement(I)?d.cloneElement(I,{className:ee(I.props.className,ie.deleteIcon),onClick:N}):r.jsx(zo,{className:ee(ie.deleteIcon),onClick:N}));let Se=null;c&&d.isValidElement(c)&&(Se=d.cloneElement(c,{className:ee(ie.avatar,c.props.className)}));let We=null;return C&&d.isValidElement(C)&&(We=d.cloneElement(C,{className:ee(ie.icon,C.props.className)})),r.jsxs(Vo,m({as:E,className:ee(ie.root,p),disabled:oe&&x?!0:void 0,onClick:k,onKeyDown:we,onKeyUp:Ee,ref:R,tabIndex:te&&x?-1:j,ownerState:he},je,ae,{children:[Se||We,r.jsx(Wo,{className:ee(ie.label),ownerState:he,children:D}),se]}))}),me=xe("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),qt=m({},me,xe("MuiInput",["root","underline","input"])),Zt=m({},me,xe("MuiOutlinedInput",["root","notchedOutline","input"])),Ve=m({},me,xe("MuiFilledInput",["root","underline","input"])),Uo=Ht(r.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Ko=Ht(r.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");function Go(e){return pt("MuiAutocomplete",e)}const v=xe("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var Xt,ea;const Qo=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionKey","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],Jo=["ref"],Yo=["key"],Zo=["key"],Xo=e=>{const{classes:t,disablePortal:n,expanded:i,focused:c,fullWidth:p,hasClearIcon:b,hasPopupIcon:u,inputFocused:y,popupOpen:I,size:x}=e,C={root:["root",i&&"expanded",c&&"focused",p&&"fullWidth",b&&"hasClearIcon",u&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",y&&"inputFocused"],tag:["tag",`tagSize${h(x)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",I&&"popupIndicatorOpen"],popper:["popper",n&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return gt(C,Go,t)},en=H("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{fullWidth:i,hasClearIcon:c,hasPopupIcon:p,inputFocused:b,size:u}=n;return[{[`& .${v.tag}`]:t.tag},{[`& .${v.tag}`]:t[`tagSize${h(u)}`]},{[`& .${v.inputRoot}`]:t.inputRoot},{[`& .${v.input}`]:t.input},{[`& .${v.input}`]:b&&t.inputFocused},t.root,i&&t.fullWidth,p&&t.hasPopupIcon,c&&t.hasClearIcon]}})({[`&.${v.focused} .${v.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${v.clearIndicator}`]:{visibility:"visible"}},[`& .${v.tag}`]:{margin:3,maxWidth:"calc(100% - 6px)"},[`& .${v.inputRoot}`]:{[`.${v.hasPopupIcon}&, .${v.hasClearIcon}&`]:{paddingRight:30},[`.${v.hasPopupIcon}.${v.hasClearIcon}&`]:{paddingRight:56},[`& .${v.input}`]:{width:0,minWidth:30}},[`& .${qt.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${qt.root}.${me.sizeSmall}`]:{[`& .${qt.input}`]:{padding:"2px 4px 3px 0"}},[`& .${Zt.root}`]:{padding:9,[`.${v.hasPopupIcon}&, .${v.hasClearIcon}&`]:{paddingRight:39},[`.${v.hasPopupIcon}.${v.hasClearIcon}&`]:{paddingRight:65},[`& .${v.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${v.endAdornment}`]:{right:9}},[`& .${Zt.root}.${me.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${v.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${Ve.root}`]:{paddingTop:19,paddingLeft:8,[`.${v.hasPopupIcon}&, .${v.hasClearIcon}&`]:{paddingRight:39},[`.${v.hasPopupIcon}.${v.hasClearIcon}&`]:{paddingRight:65},[`& .${Ve.input}`]:{padding:"7px 4px"},[`& .${v.endAdornment}`]:{right:9}},[`& .${Ve.root}.${me.sizeSmall}`]:{paddingBottom:1,[`& .${Ve.input}`]:{padding:"2.5px 4px"}},[`& .${me.hiddenLabel}`]:{paddingTop:8},[`& .${Ve.root}.${me.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${v.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${Ve.root}.${me.hiddenLabel}.${me.sizeSmall}`]:{[`& .${v.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${v.input}`]:{flexGrow:1,textOverflow:"ellipsis",opacity:0},variants:[{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{[`& .${v.tag}`]:{margin:2,maxWidth:"calc(100% - 4px)"}}},{props:{inputFocused:!0},style:{[`& .${v.input}`]:{opacity:1}}},{props:{multiple:!0},style:{[`& .${v.inputRoot}`]:{flexWrap:"wrap"}}}]}),tn=H("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(e,t)=>t.endAdornment})({position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)"}),an=H(lo,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(e,t)=>t.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),on=H(lo,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:e},t)=>m({},t.popupIndicator,e.popupOpen&&t.popupIndicatorOpen)})({padding:2,marginRight:-2,variants:[{props:{popupOpen:!0},style:{transform:"rotate(180deg)"}}]}),nn=H(no,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${v.option}`]:t.option},t.popper,n.disablePortal&&t.popperDisablePortal]}})(({theme:e})=>({zIndex:(e.vars||e).zIndex.modal,variants:[{props:{disablePortal:!0},style:{position:"absolute"}}]})),rn=H(oo,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(e,t)=>t.paper})(({theme:e})=>m({},e.typography.body1,{overflow:"auto"})),sn=H("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(e,t)=>t.loading})(({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"})),ln=H("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(e,t)=>t.noOptions})(({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"})),cn=H("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(e,t)=>t.listbox})(({theme:e})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${v.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[e.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${v.focused}`]:{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${v.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:J.alpha(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${v.focused}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:J.alpha(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${v.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:J.alpha(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}}})),dn=H(so,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(e,t)=>t.groupLabel})(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,top:-8})),pn=H("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(e,t)=>t.groupUl})({padding:0,[`& .${v.option}`]:{paddingLeft:24}}),un=d.forwardRef(function(t,n){var i,c,p,b;const u=ut({props:t,name:"MuiAutocomplete"}),{autoComplete:y=!1,autoHighlight:I=!1,autoSelect:x=!1,blurOnSelect:C=!1,ChipProps:D,className:k,clearIcon:F=Xt||(Xt=r.jsx(Uo,{fontSize:"small"})),clearOnBlur:B=!u.freeSolo,clearOnEscape:L=!1,clearText:P="Clear",closeText:w="Close",componentsProps:j={},defaultValue:te=u.multiple?[]:null,disableClearable:ae=!1,disableCloseOnSelect:_=!1,disabled:R=!1,disabledItemsFocusable:N=!1,disableListWrap:we=!1,disablePortal:Ee=!1,filterSelectedOptions:oe=!1,forcePopupIcon:E="auto",freeSolo:he=!1,fullWidth:ie=!1,getLimitTagsText:je=s=>`+${s}`,getOptionLabel:se,groupBy:Se,handleHomeEndKeys:We=!u.freeSolo,includeInputInList:V=!1,limitTags:He=-1,ListboxComponent:Re="ul",ListboxProps:Ue,loading:mt=!1,loadingText:ne="Loading…",multiple:Q=!1,noOptionsText:Ke="No options",openOnFocus:bt=!1,openText:q="Open",PaperComponent:re=oo,PopperComponent:De=no,popupIcon:Tt=ea||(ea=r.jsx(Ko,{})),readOnly:Z=!1,renderGroup:Ge,renderInput:ht,renderOption:K,renderTags:g,selectOnFocus:Ut=!u.freeSolo,size:O="medium",slotProps:ve={}}=u,Fe=Oe(u,Qo),{getRootProps:vt,getInputProps:Pe,getInputLabelProps:$e,getPopupIndicatorProps:yt,getClearProps:Lt,getTagProps:xt,getListboxProps:Ct,getOptionProps:X,value:A,dirty:de,expanded:Qe,id:Ne,popupOpen:Me,focused:ge,focusedTag:pe,anchorEl:ze,setAnchorEl:Je,inputValue:jt,groupedOptions:le}=Ro(m({},u,{componentName:"Autocomplete"})),ye=!ae&&!R&&de&&!Z,fe=(!he||E===!0)&&E!==!1,{onMouseDown:qe}=Pe(),{ref:Ae}=Ue??{},kt=Ct(),{ref:wt}=kt,Et=Oe(kt,Jo),Dt=ao(wt,Ae),Be=se||(s=>{var f;return(f=s.label)!=null?f:s}),G=m({},u,{disablePortal:Ee,expanded:Qe,focused:ge,fullWidth:ie,getOptionLabel:Be,hasClearIcon:ye,hasPopupIcon:fe,inputFocused:pe===-1,popupOpen:Me,size:O}),W=Xo(G);let ue;if(Q&&A.length>0){const s=f=>m({className:W.tag,disabled:R},xt(f));g?ue=g(A,s,G):ue=A.map((f,S)=>{const T=s({index:S}),{key:ce}=T,It=Oe(T,Yo);return r.jsx(Ho,m({label:Be(f),size:O},It,D),ce)})}if(He>-1&&Array.isArray(ue)){const s=ue.length-He;!ge&&s>0&&(ue=ue.splice(0,He),ue.push(r.jsx("span",{className:W.tag,children:je(s)},ue.length)))}const Ft=Ge||(s=>r.jsxs("li",{children:[r.jsx(dn,{className:W.groupLabel,ownerState:G,component:"div",children:s.group}),r.jsx(pn,{className:W.groupUl,ownerState:G,children:s.children})]},s.key)),Mt=K||((s,f)=>{const{key:S}=s,T=Oe(s,Zo);return r.jsx("li",m({},T,{children:Be(f)}),S)}),$t=(s,f)=>{const S=X({option:s,index:f});return Mt(m({},S,{className:W.option}),s,{selected:S["aria-selected"],index:f,inputValue:jt},G)},Ye=(i=ve.clearIndicator)!=null?i:j.clearIndicator,Te=(c=ve.paper)!=null?c:j.paper,_e=(p=ve.popper)!=null?p:j.popper,o=(b=ve.popupIndicator)!=null?b:j.popupIndicator,a=s=>r.jsx(nn,m({as:De,disablePortal:Ee,style:{width:ze?ze.clientWidth:null},ownerState:G,role:"presentation",anchorEl:ze,open:Me},_e,{className:ee(W.popper,_e==null?void 0:_e.className),children:r.jsx(rn,m({ownerState:G,as:re},Te,{className:ee(W.paper,Te==null?void 0:Te.className),children:s}))}));let l=null;return le.length>0?l=a(r.jsx(cn,m({as:Re,className:W.listbox,ownerState:G},Et,Ue,{ref:Dt,children:le.map((s,f)=>Se?Ft({key:s.key,group:s.group,children:s.options.map((S,T)=>$t(S,s.index+T))}):$t(s,f))}))):mt&&le.length===0?l=a(r.jsx(sn,{className:W.loading,ownerState:G,children:ne})):le.length===0&&!he&&!mt&&(l=a(r.jsx(ln,{className:W.noOptions,ownerState:G,role:"presentation",onMouseDown:s=>{s.preventDefault()},children:Ke}))),r.jsxs(d.Fragment,{children:[r.jsx(en,m({ref:n,className:ee(W.root,k),ownerState:G},vt(Fe),{children:ht({id:Ne,disabled:R,fullWidth:!0,size:O==="small"?"small":void 0,InputLabelProps:$e(),InputProps:m({ref:Je,className:W.inputRoot,startAdornment:ue,onClick:s=>{s.target===s.currentTarget&&qe(s)}},(ye||fe)&&{endAdornment:r.jsxs(tn,{className:W.endAdornment,ownerState:G,children:[ye?r.jsx(an,m({},Lt(),{"aria-label":P,title:P,ownerState:G},Ye,{className:ee(W.clearIndicator,Ye==null?void 0:Ye.className),children:F})):null,fe?r.jsx(on,m({},yt(),{disabled:R,"aria-label":Me?w:q,title:Me?w:q,ownerState:G},o,{className:ee(W.popupIndicator,o==null?void 0:o.className),children:Tt})):null]})}),inputProps:m({className:W.input,disabled:R,readOnly:Z},Pe())})})),ze?l:null]})});function gn(e){return pt("MuiCircularProgress",e)}xe("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const fn=["className","color","disableShrink","size","style","thickness","value","variant"];let Pt=e=>e,ta,aa,oa,na;const Ie=44,mn=io(ta||(ta=Pt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),bn=io(aa||(aa=Pt`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),hn=e=>{const{classes:t,variant:n,color:i,disableShrink:c}=e,p={root:["root",n,`color${h(i)}`],svg:["svg"],circle:["circle",`circle${h(n)}`,c&&"circleDisableShrink"]};return gt(p,gn,t)},vn=H("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`color${h(n.color)}`]]}})(({ownerState:e,theme:t})=>m({display:"inline-block"},e.variant==="determinate"&&{transition:t.transitions.create("transform")},e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&ro(oa||(oa=Pt`
      animation: ${0} 1.4s linear infinite;
    `),mn)),yn=H("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),xn=H("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.circle,t[`circle${h(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>m({stroke:"currentColor"},e.variant==="determinate"&&{transition:t.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&ro(na||(na=Pt`
      animation: ${0} 1.4s ease-in-out infinite;
    `),bn)),Cn=d.forwardRef(function(t,n){const i=ut({props:t,name:"MuiCircularProgress"}),{className:c,color:p="primary",disableShrink:b=!1,size:u=40,style:y,thickness:I=3.6,value:x=0,variant:C="indeterminate"}=i,D=Oe(i,fn),k=m({},i,{color:p,disableShrink:b,size:u,thickness:I,value:x,variant:C}),F=hn(k),B={},L={},P={};if(C==="determinate"){const w=2*Math.PI*((Ie-I)/2);B.strokeDasharray=w.toFixed(3),P["aria-valuenow"]=Math.round(x),B.strokeDashoffset=`${((100-x)/100*w).toFixed(3)}px`,L.transform="rotate(-90deg)"}return r.jsx(vn,m({className:ee(F.root,c),style:m({width:u,height:u},L,y),ownerState:k,ref:n,role:"progressbar"},P,D,{children:r.jsx(yn,{className:F.svg,ownerState:k,viewBox:`${Ie/2} ${Ie/2} ${Ie} ${Ie}`,children:r.jsx(xn,{className:F.circle,style:B,ownerState:k,cx:Ie,cy:Ie,r:(Ie-I)/2,fill:"none",strokeWidth:I})})}))}),co=d.createContext(null),po=e=>e.options.meta,kn=(e,t,n,i,c)=>{const[p,b]=d.useState(Array.isArray(e)?e:[]),[u,y]=d.useState("idle"),[I,x]=d.useState(0),C=d.useRef(0);return d.useEffect(()=>{if(!n)return;if(Array.isArray(e)){b(e.filter(L=>L.toLowerCase().includes(t.toLowerCase())));return}const D=i.env;if(!D)return;const k=new AbortController,F=++C.current;y("loading");const B=setTimeout(()=>{e({query:t,row:i.row,table:i.table,env:D,signal:k.signal}).then(L=>{F===C.current&&(b(L),y("idle"))}).catch(()=>{k.signal.aborted||F!==C.current||y("error")})},c);return()=>{clearTimeout(B),k.abort()}},[n,t,I]),{options:p,status:u,retry:()=>x(D=>D+1)}},wn=(e,t)=>`${e.id}:${t}`,En=({value:e,save:t})=>{const n=!!t&&t!=="pending";let i;return t&&(i=n?"error":"pending"),r.jsxs("span",{"data-save":i,title:n?t:void 0,style:{display:"inline-flex",alignItems:"center",gap:6,color:n?"#B42318":void 0},children:[e,i==="pending"&&r.jsx(Cn,{size:12}),n&&r.jsx("span",{"aria-hidden":!0,children:"⚠"})]})},ra=(e,{debounce:t=250}={})=>function({cell:i,row:c,column:p,table:b,getValue:u}){var P;const y=i.tcEditing().isEditing(),I=d.useContext(co),x=po(b),C=String(u()??""),[D,k]=d.useState(""),{options:F,status:B,retry:L}=kn(e,D,y,{row:c,table:b,env:I},Array.isArray(e)?0:t);return d.useEffect(()=>{y&&k("")},[y]),y?r.jsx(un,{open:!0,autoHighlight:!0,disablePortal:!1,options:F,value:C||null,inputValue:D,filterOptions:w=>w,loading:B==="loading",loadingText:"Loading…",noOptionsText:B==="error"?r.jsxs("span",{"data-load-error":!0,children:["Could not load."," ",r.jsx("button",{type:"button",onMouseDown:w=>w.preventDefault(),onClick:L,children:"Retry"})]}):"No options",onInputChange:(w,j,te)=>{te==="input"&&k(j)},onChange:(w,j)=>{j&&Promise.resolve(x.onEdit(c.id,p.id,j)).catch(()=>{}),i.tcEditing().stop()},onClose:(w,j)=>{j==="blur"&&i.tcEditing().stop()},sx:{width:"100%"},renderInput:w=>r.jsx("div",{ref:w.InputProps.ref,style:{width:"100%"},children:r.jsx("input",{...w.inputProps,autoFocus:!0,"data-editor":!0,"aria-label":`Edit ${p.id}`,placeholder:C,style:{width:"100%",font:"inherit",border:"none",outline:"none",background:"transparent"}})})}):r.jsx(En,{value:C,save:(P=x.saveState)==null?void 0:P[wn(c,p.id)]})},{useArgs:$n}=__STORYBOOK_MODULE_PREVIEW_API__,In=["A1","A2","B1","B2","B3","C1","C2"],On={Platform:["Developer","Lead Developer","Architect","SRE"],Payments:["Analyst","Developer","Risk Analyst","QA"],Mobile:["QA","iOS Developer","Android Developer","Designer"],Data:["Lead Developer","Data Engineer","Data Scientist","Analyst"]},Sn=({query:e,row:t,table:n,env:i,signal:c})=>i.request("/api/roles",{team:t.original.team,project:po(n).projectId,region:i.user.region,q:e},c),Rn=vo,uo=[Ze("name","Name",190),Ze("team","Team",130),Ze("role","Role",180),Ze("level","Level",100),Ze("country","Country",130)],Pn=uo.map(e=>e.id),An=(e,t)=>uo.map(n=>{const i=n.id;if(!t.includes(i))return n;let c=Rn;return e==="rich"&&i==="role"&&(c=ra(Sn)),e==="rich"&&i==="level"&&(c=ra(In)),{...n,cell:c,meta:fo({editable:!0})}}),Tn={pending:"#008ACE",ok:"#1E7B34",aborted:"#8A8FA3",error:"#B42318"},Ln=({entries:e})=>r.jsxs("aside",{"data-request-log":!0,"aria-label":"Request log",style:{width:320,flexShrink:0,overflow:"auto",fontSize:12,fontFamily:"ui-monospace, Menlo, monospace",borderLeft:"1px solid #EBEDF5",paddingLeft:12},children:[r.jsx("div",{style:{fontWeight:700,marginBottom:6},children:"Requests"}),e.length===0&&r.jsx("div",{style:{color:"#8A8FA3"},children:"Edit a Role to send one."}),e.map(t=>r.jsxs("div",{"data-request":t.id,"data-status":t.status,style:{marginBottom:8},children:[r.jsx("span",{style:{color:Tn[t.status],fontWeight:700},children:t.status})," ","#",t.id," ",t.ms!==void 0?`${t.ms} ms`:"",t.results!==void 0?` · ${t.results} results`:"",r.jsxs("div",{style:{color:"#4A4E5E",wordBreak:"break-all"},children:["GET ",t.url,"?",Object.entries(t.params).map(([n,i])=>`${n}=${i}`).join("&")]})]},t.id))]}),jn=({args:e,hint:t,updateArgs:n})=>{const[i,c]=d.useState(()=>ho(30)),[p,b]=d.useState([]),[u,y]=d.useState({}),I=d.useRef(0),x=d.useRef(e);x.current=e;const C=d.useMemo(()=>An(e.editors,e.editable),[e.editors,e.editable]),D=d.useMemo(()=>({user:{region:"EU"},request:(L,P,w)=>{const j=++I.current,te=Date.now(),ae=_=>b(R=>R.map(N=>N.id===j?{...N,..._}:N));return b(_=>[{id:j,url:L,params:P,status:"pending"},..._].slice(0,12)),new Promise((_,R)=>{const N=setTimeout(()=>{const we=Date.now()-te;if(x.current.failLoad){ae({status:"error",ms:we}),R(new Error("500"));return}const Ee=P.q.toLowerCase(),oe=(On[P.team]??[]).filter(E=>E.toLowerCase().includes(Ee));ae({status:"ok",ms:we,results:oe.length}),_(oe)},x.current.latency);w.addEventListener("abort",()=>{clearTimeout(N),ae({status:"aborted",ms:Date.now()-te}),R(new DOMException("Aborted","AbortError"))})})}}),[]),k=d.useCallback(async(L,P,w)=>{var ae,_;(_=(ae=x.current).onEdit)==null||_.call(ae,L,P,w);const j=`${L}:${P}`;let te="";if(c(R=>R.map(N=>N.id!==L?N:(te=String(N[P]??""),{...N,[P]:w}))),x.current.editors!=="text"){if(y(R=>({...R,[j]:"pending"})),await new Promise(R=>{setTimeout(R,x.current.latency)}),x.current.failSave){c(R=>R.map(N=>N.id===L?{...N,[P]:te}:N)),y(R=>({...R,[j]:`Not saved: the server refused "${w}"`}));return}y(R=>{const N={...R};return delete N[j],N})}},[]),F=d.useMemo(()=>({projectId:"PNL-7",onEdit:k,saveState:u}),[k,u]),B=r.jsx(go,{data:i,columns:C,getRowId:L=>L.id,readOnly:e.readOnly,meta:F,state:{editingCell:e.editingCell},onEditingCellChange:L=>{var w;const P=Eo(L,e.editingCell);(w=e.onEditingCellChange)==null||w.call(e,P),n({editingCell:P})}});return r.jsx(ko,{hint:t,children:r.jsx(co.Provider,{value:D,children:e.editors==="rich"?r.jsxs("div",{style:{display:"flex",gap:12,height:"100%"},children:[r.jsx("div",{style:{flex:1,minWidth:0},children:B}),r.jsx(Ln,{entries:p})]}):B})})},Dn=`import { createContext, useContext } from 'react'
import { TableCore, coreMeta } from '@pnl-simulation/table-core'

// 1. Where the request parameters come from
//    - the row:     row.original.team
//    - the table:   table.options.meta.projectId   (the screen passes meta)
//    - the context: useContext(Api).user.region    (any provider above the table)
const loadRoles = ({ query, row, table, api, signal }) =>
  api.get('/api/roles', {
    team: row.original.team,
    project: table.options.meta.projectId,
    region: api.user.region,
    q: query,
  }, { signal })

// 2. The cell: shows the value, or the editor while it is being edited.
//    The editor debounces typing, aborts the previous request (signal) and
//    ignores a late answer of an old one; Enter / click picks and saves.
const RoleCell = (ctx) => {
  const api = useContext(Api)
  return ctx.cell.tcEditing().isEditing()
    ? <AsyncAutocomplete load={(query, signal) => loadRoles({ ...ctx, api, query, signal })}
        onPick={(v) => ctx.table.options.meta.onEdit(ctx.row.id, 'role', v)} />
    : <SavedValue value={ctx.getValue()} state={ctx.table.options.meta.saveState} />
}

// 3. The screen saves: optimistic, pending, rolled back on failure.
const onEdit = async (rowId, columnId, value) => { /* setData, await api.save, rollback */ }

<Api.Provider value={api}>
  <TableCore
    data={employees}
    columns={[{ id: 'role', accessorKey: 'role', cell: RoleCell, meta: coreMeta({ editable: true }) }]}
    getRowId={(e) => e.id}
    meta={{ projectId: 'PNL-7', onEdit, saveState }}
  />
</Api.Provider>`,ia=e=>e.editors==="rich"?Dn:`import { useState } from 'react'
import {
  TableCore,
  coreMeta,
  type EditingCellState,
} from '@pnl-simulation/table-core'

// The column's cell renders the editor while cell.tcEditing().isEditing().
const columns = employeeColumns.map((c) =>
  ${Co(e.editable)}.includes(c.id)
    ? { ...c, cell: TextEditorCell, meta: coreMeta({ editable: true }) }
    : c
)

export const EmployeesTable = ({ employees, save }: Props) => {
  // Optional: own it to know which cell is being edited.
  const [editingCell, setEditingCell] = useState<EditingCellState>(null)

  return (
    <TableCore
      data={employees}
      columns={columns}
      getRowId={(e) => e.id}${e.readOnly?`
      readOnly`:""}
      meta={{ onEdit: save }}
      state={{ editingCell }}
      onEditingCellChange={setEditingCell}
    />
  )
}`,tr={title:"Tables/Table Core/Features/Editing",tags:["autodocs"],decorators:[yo],render:function(t,{parameters:n}){const[,i]=$n();return r.jsx(jn,{args:t,hint:n.hint,updateArgs:i})},args:{editors:"text",editable:["name","role"],readOnly:!1,editingCell:null,latency:600,failLoad:!1,failSave:!1},argTypes:{editors:{description:"`text`: plain inputs. `rich`: Role = async autocomplete, Level = autocomplete over a list, with a request log.",options:["text","rich"],control:{type:"radio"},table:{category:"demo editors"}},editable:{name:"column meta editable",description:"Columns that open an editor.",options:Pn,control:"check",table:{category:"columns"}},readOnly:{description:"No editing at all, and no selection checkboxes.",control:"boolean"},editingCell:{name:"state.editingCell",description:"The cell being edited: `{ rowId, columnId }` or `null`.",control:"object",table:{category:"state"}},latency:{name:"server: latency, ms",control:{type:"range",min:0,max:3e3,step:100},table:{category:"fake server"}},failLoad:{name:"server: options fail",control:"boolean",table:{category:"fake server"}},failSave:{name:"server: save fails",control:"boolean",table:{category:"fake server"}},onEditingCellChange:{action:"onEditingCellChange",table:{disable:!0}},onEdit:{action:"meta.onEdit (save)",table:{disable:!0}}},parameters:{layout:"fullscreen",sceneCode:ia,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:xo(ia),description:{component:`${wo}


**Editing**: the user changes values right in the cells. The screen decides which columns are editable, what the editor is and how a value is saved.

- **Start**: Enter, F2 or a double-click on an editable cell opens its editor. **Finish**: Enter saves and moves down, Tab saves and moves right, Esc cancels.
- **Any editor.** The editor is the column's own cell (\`cell.tcEditing().isEditing()\`): a text input, an autocomplete, a date picker — the table only says *when*.
- **Anything the editor needs** is at hand: the **row** (\`row.original\`), the **table** (\`table.options.meta\` — the screen's callbacks and ids) and any **React context** above the table (API client, user).
- **Async**: options can come from a request (debounced, the previous one aborted, stale answers ignored, loading / error with Retry); saving can be async too (pending, rolled back on failure).`}}}},M=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},ke=e=>U(()=>{const t=e.querySelector("[role=grid]");if(!t||!t.querySelector("[data-cell]"))throw new Error("grid not ready");return t}),Y=(e,t,n)=>e.querySelector(`[data-row-index="${t}"][data-col-index="${n}"]`),Le=(e,t,n)=>{var i;return((i=Y(e,t,n))==null?void 0:i.textContent)??""},At=e=>e.querySelector("[data-editor]"),be=e=>U(()=>{const t=At(e);if(!t)throw new Error("editor not open");return t}),_t=e=>U(()=>M(!At(e),"editor closed")),lt=e=>{const t=e.querySelector('[data-selection="active"]');return t?`${t.dataset.rowIndex}:${t.dataset.colIndex}`:"none"},Vt=async(e,t)=>{var n,i;(i=(n=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value"))==null?void 0:n.set)==null||i.call(e,t),e.dispatchEvent(new Event("input",{bubbles:!0})),await new Promise(c=>{setTimeout(c,50)})},ct=(e,t)=>e.dispatchEvent(new KeyboardEvent("keydown",{key:t,bubbles:!0})),dt=e=>Array.from(e.querySelectorAll("[data-request]")),Fn=e=>U(()=>Wt(document.body).getByRole("option",{name:e}),{timeout:4e3}),Xe={tags:["kb:editing-start"],name:"1 · Start editing",parameters:{hint:r.jsxs(r.Fragment,{children:["Click a ",r.jsx("b",{children:"Name"})," cell and press ",r.jsx("b",{children:"Enter"})," or ",r.jsx("b",{children:"F2"}),", or double-click it: the editor opens. Watch ",r.jsx("code",{children:"state.editingCell"}),"."]})},play:async e=>{if(Ce(e))return;const{canvasElement:t}=e;await ke(t),await z.click(Y(t,0,0)),await z.keyboard("{Enter}"),ct(await be(t),"Escape"),await _t(t),await z.keyboard("{F2}"),ct(await be(t),"Escape"),await _t(t),await z.dblClick(Y(t,1,0)),await be(t)}},et={tags:["kb:editing-save"],name:"2 · Enter and Tab save",parameters:{hint:r.jsxs(r.Fragment,{children:["Edit a ",r.jsx("b",{children:"Name"})," and press ",r.jsx("b",{children:"Enter"}),": saved, the cell below is active. Edit a ",r.jsx("b",{children:"Role"})," and press ",r.jsx("b",{children:"Tab"}),": saved, the next cell is active. ",r.jsx("i",{children:"Actions"})," shows the save."]})},play:async e=>{if(Ce(e))return;const{canvasElement:t}=e;await ke(t),await z.click(Y(t,0,0)),await z.keyboard("{Enter}");let n=await be(t);await Vt(n,"Renamed"),ct(n,"Enter"),await U(()=>M(Le(t,0,0)==="Renamed","saved on Enter")),await U(()=>M(lt(t)==="1:0",`down, at ${lt(t)}`)),await z.click(Y(t,2,2)),await z.keyboard("{Enter}"),n=await be(t),await Vt(n,"Architect"),ct(n,"Tab"),await U(()=>M(Le(t,2,2)==="Architect","saved on Tab")),await U(()=>M(lt(t)==="2:3",`right, at ${lt(t)}`))}},tt={tags:["kb:editing-cancel"],name:"3 · Esc cancels",parameters:{hint:r.jsxs(r.Fragment,{children:["Start editing a ",r.jsx("b",{children:"Name"}),", type something and press ",r.jsx("b",{children:"Esc"}),": the old value stays."]})},play:async e=>{if(Ce(e))return;const{canvasElement:t}=e;await ke(t);const n=Le(t,0,0);await z.click(Y(t,0,0)),await z.keyboard("{Enter}");const i=await be(t);await Vt(i,"Not saved"),ct(i,"Escape"),await _t(t),M(Le(t,0,0)===n,"value unchanged")}},at={tags:["kb:editing-not-editable"],name:"4 · Not editable",parameters:{hint:r.jsxs(r.Fragment,{children:[r.jsx("b",{children:"Team"})," has no ",r.jsx("code",{children:"meta.editable"}),": Enter and double-click do nothing. Switch ",r.jsx("code",{children:"readOnly"})," on: no cell opens an editor."]})},play:async e=>{if(Ce(e))return;const{canvasElement:t}=e;await ke(t),await z.click(Y(t,0,1)),await z.keyboard("{Enter}"),await z.dblClick(Y(t,0,1)),M(!At(t),"no editor on Team")}},ot={tags:["kb:editing-read-only"],name:"5 · Read only",args:{readOnly:!0},parameters:{hint:r.jsxs(r.Fragment,{children:[r.jsx("code",{children:"readOnly"}),": Name and Role are editable columns, but nothing opens. Navigation still works."]})},play:async e=>{if(Ce(e))return;const{canvasElement:t}=e;await ke(t),await z.dblClick(Y(t,0,0)),await z.keyboard("{Enter}"),M(!At(t),"no editor"),await z.keyboard("{ArrowDown}"),await U(()=>M(lt(t)==="1:0","still moves"))}},ft={editors:"rich",editable:["name","role","level"]},nt={tags:["kb:editing-autocomplete"],name:"6 · Autocomplete",args:{...ft},parameters:{hint:r.jsxs(r.Fragment,{children:["Edit a ",r.jsx("b",{children:"Level"}),": a list opens, typing filters it, ↑ / ↓ and"," ",r.jsx("b",{children:"Enter"})," pick, a click picks too. The list is fixed — no request."]})},play:async e=>{if(Ce(e))return;const{canvasElement:t}=e;await ke(t),await z.dblClick(Y(t,0,3));const n=await be(t);to.change(n,{target:{value:"C"}}),await U(()=>M(!Wt(document.body).queryByRole("option",{name:"B1"}),"filtered")),await z.click(await Fn("C2")),await U(()=>M(Le(t,0,3).startsWith("C2"),"picked")),M(dt(t).length===0,"no request for a fixed list")}},rt={tags:["kb:editing-async-options"],name:"7 · Async options: row, table, context",args:{...ft},parameters:{hint:r.jsxs(r.Fragment,{children:["Edit a ",r.jsx("b",{children:"Role"}),": the options come from a request. See it in"," ",r.jsx("i",{children:"Requests"}),": ",r.jsx("code",{children:"team"})," is from the ",r.jsx("b",{children:"row"}),","," ",r.jsx("code",{children:"project"})," from the ",r.jsx("b",{children:"table"})," (",r.jsx("code",{children:"options.meta"}),"),"," ",r.jsx("code",{children:"region"})," from a ",r.jsx("b",{children:"React context"}),", ",r.jsx("code",{children:"q"})," is what you type. Rows of another team get other roles."]})},play:async e=>{if(Ce(e))return;const{canvasElement:t}=e;await ke(t);const n=Le(t,0,1);await z.dblClick(Y(t,0,2)),await be(t),await U(()=>{var b;const p=dt(t)[0];M((p==null?void 0:p.dataset.status)==="ok","request answered"),M(((b=p.textContent)==null?void 0:b.includes(`team=${n}`))&&p.textContent.includes("project=PNL-7")&&p.textContent.includes("region=EU"),`params from row, table, context: ${p.textContent}`)},{timeout:4e3});const i=Wt(document.body).getAllByRole("option")[0],c=i.textContent??"";await z.click(i),await U(()=>M(Y(t,0,2).querySelector('[data-save="pending"]'),"saving")),await U(()=>{M(Le(t,0,2)===c,"saved"),M(!Y(t,0,2).querySelector("[data-save]"),"save finished")},{timeout:4e3})}},it={tags:["kb:editing-typing"],name:"8 · Typing: debounce and abort",args:{...ft,latency:1500},parameters:{hint:r.jsxs(r.Fragment,{children:["Edit a ",r.jsx("b",{children:"Role"})," and type quickly: a request goes out only after a pause (250 ms); when you type again, the running one is ",r.jsx("b",{children:"aborted"}),", and an old answer never replaces a newer one."]})},play:async e=>{if(Ce(e))return;const{canvasElement:t}=e;await ke(t),await z.dblClick(Y(t,0,2));const n=await be(t);await U(()=>M(dt(t).length===1,"first"),{timeout:3e3}),to.change(n,{target:{value:"de"}}),await U(()=>{var c;const i=dt(t);M(i.some(p=>p.dataset.status==="aborted"),"the first one aborted"),M(i[0].dataset.status==="ok","the last one answered"),M((c=i[0].textContent)==null?void 0:c.includes("q=de"),"with the new query")},{timeout:5e3})}},st={tags:["kb:editing-failures"],name:"9 · Failures: load and save",args:{...ft,failLoad:!0,latency:300},parameters:{hint:r.jsxs(r.Fragment,{children:["The server fails: editing a ",r.jsx("b",{children:"Role"})," says ",r.jsx("i",{children:"Could not load"})," with"," ",r.jsx("b",{children:"Retry"}),". Switch ",r.jsx("i",{children:"options fail"})," off and ",r.jsx("i",{children:"save fails"})," on: a picked value shows, then rolls back with ⚠ and the reason on hover."]})},play:async e=>{var n;if(Ce(e))return;const{canvasElement:t}=e;await ke(t),await z.dblClick(Y(t,0,2)),await be(t),await U(()=>M(document.querySelector("[data-load-error]"),"error with Retry shown"),{timeout:4e3}),M(((n=dt(t)[0])==null?void 0:n.dataset.status)==="error","logged as error")}},Rt={tags:["kb:editing-playground"],args:{...ft},parameters:{hint:r.jsx(r.Fragment,{children:"Everything together: text, fixed-list and async editors; turn the fake server's latency and failures in the controls."})}};var sa,la,ca,da,pa;Xe.parameters={...Xe.parameters,docs:{...(sa=Xe.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  tags: ['kb:editing-start'],
  name: '1 · Start editing',
  parameters: {
    hint: <>
                Click a <b>Name</b> cell and press <b>Enter</b> or <b>F2</b>, or
                double-click it: the editor opens. Watch <code>state.editingCell</code>.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(cell(canvasElement, 0, 0));
    await userEvent.keyboard('{Enter}');
    press(await openEditor(canvasElement), 'Escape');
    await closed(canvasElement);
    await userEvent.keyboard('{F2}');
    press(await openEditor(canvasElement), 'Escape');
    await closed(canvasElement);
    await userEvent.dblClick(cell(canvasElement, 1, 0));
    await openEditor(canvasElement);
  }
}`,...(ca=(la=Xe.parameters)==null?void 0:la.docs)==null?void 0:ca.source},description:{story:"Enter, F2 or double-click open the editor.",...(pa=(da=Xe.parameters)==null?void 0:da.docs)==null?void 0:pa.description}}};var ua,ga,fa,ma,ba;et.parameters={...et.parameters,docs:{...(ua=et.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  tags: ['kb:editing-save'],
  name: '2 · Enter and Tab save',
  parameters: {
    hint: <>
                Edit a <b>Name</b> and press <b>Enter</b>: saved, the cell below is
                active. Edit a <b>Role</b> and press <b>Tab</b>: saved, the next cell is
                active. <i>Actions</i> shows the save.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(cell(canvasElement, 0, 0));
    await userEvent.keyboard('{Enter}');
    let input = await openEditor(canvasElement);
    await typeInto(input, 'Renamed');
    press(input, 'Enter');
    await waitFor(() => check(text(canvasElement, 0, 0) === 'Renamed', 'saved on Enter'));
    await waitFor(() => check(active(canvasElement) === '1:0', \`down, at \${active(canvasElement)}\`));
    await userEvent.click(cell(canvasElement, 2, 2));
    await userEvent.keyboard('{Enter}');
    input = await openEditor(canvasElement);
    await typeInto(input, 'Architect');
    press(input, 'Tab');
    await waitFor(() => check(text(canvasElement, 2, 2) === 'Architect', 'saved on Tab'));
    await waitFor(() => check(active(canvasElement) === '2:3', \`right, at \${active(canvasElement)}\`));
  }
}`,...(fa=(ga=et.parameters)==null?void 0:ga.docs)==null?void 0:fa.source},description:{story:"Enter saves and moves down; Tab saves and moves right.",...(ba=(ma=et.parameters)==null?void 0:ma.docs)==null?void 0:ba.description}}};var ha,va,ya,xa,Ca;tt.parameters={...tt.parameters,docs:{...(ha=tt.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  tags: ['kb:editing-cancel'],
  name: '3 · Esc cancels',
  parameters: {
    hint: <>
                Start editing a <b>Name</b>, type something and press <b>Esc</b>: the
                old value stays.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const before = text(canvasElement, 0, 0);
    await userEvent.click(cell(canvasElement, 0, 0));
    await userEvent.keyboard('{Enter}');
    const input = await openEditor(canvasElement);
    await typeInto(input, 'Not saved');
    press(input, 'Escape');
    await closed(canvasElement);
    check(text(canvasElement, 0, 0) === before, 'value unchanged');
  }
}`,...(ya=(va=tt.parameters)==null?void 0:va.docs)==null?void 0:ya.source},description:{story:"Esc cancels: the value stays.",...(Ca=(xa=tt.parameters)==null?void 0:xa.docs)==null?void 0:Ca.description}}};var ka,wa,Ea,$a,Ia;at.parameters={...at.parameters,docs:{...(ka=at.parameters)==null?void 0:ka.docs,source:{originalSource:`{
  tags: ['kb:editing-not-editable'],
  name: '4 · Not editable',
  parameters: {
    hint: <>
                <b>Team</b> has no <code>meta.editable</code>: Enter and double-click do
                nothing. Switch <code>readOnly</code> on: no cell opens an editor.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(cell(canvasElement, 0, 1));
    await userEvent.keyboard('{Enter}');
    await userEvent.dblClick(cell(canvasElement, 0, 1));
    check(!editor(canvasElement), 'no editor on Team');
  }
}`,...(Ea=(wa=at.parameters)==null?void 0:wa.docs)==null?void 0:Ea.source},description:{story:"Columns without meta.editable do nothing.",...(Ia=($a=at.parameters)==null?void 0:$a.docs)==null?void 0:Ia.description}}};var Oa,Sa,Ra,Pa,Aa;ot.parameters={...ot.parameters,docs:{...(Oa=ot.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  tags: ['kb:editing-read-only'],
  name: '5 · Read only',
  args: {
    readOnly: true
  },
  parameters: {
    hint: <>
                <code>readOnly</code>: Name and Role are editable columns, but nothing
                opens. Navigation still works.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.dblClick(cell(canvasElement, 0, 0));
    await userEvent.keyboard('{Enter}');
    check(!editor(canvasElement), 'no editor');
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => check(active(canvasElement) === '1:0', 'still moves'));
  }
}`,...(Ra=(Sa=ot.parameters)==null?void 0:Sa.docs)==null?void 0:Ra.source},description:{story:"readOnly: nothing is editable.",...(Aa=(Pa=ot.parameters)==null?void 0:Pa.docs)==null?void 0:Aa.description}}};var Ta,La,ja,Da,Fa;nt.parameters={...nt.parameters,docs:{...(Ta=nt.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  tags: ['kb:editing-autocomplete'],
  name: '6 · Autocomplete',
  args: {
    ...rich
  },
  parameters: {
    hint: <>
                Edit a <b>Level</b>: a list opens, typing filters it, ↑ / ↓ and{' '}
                <b>Enter</b> pick, a click picks too. The list is fixed — no request.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.dblClick(cell(canvasElement, 0, 3));
    const input = await openEditor(canvasElement);
    fireEvent.change(input, {
      target: {
        value: 'C'
      }
    });
    await waitFor(() => check(!within(document.body).queryByRole('option', {
      name: 'B1'
    }), 'filtered'));
    await userEvent.click(await option('C2'));
    await waitFor(() => check(text(canvasElement, 0, 3).startsWith('C2'), 'picked'));
    check(requests(canvasElement).length === 0, 'no request for a fixed list');
  }
}`,...(ja=(La=nt.parameters)==null?void 0:La.docs)==null?void 0:ja.source},description:{story:"An autocomplete over a fixed list.",...(Fa=(Da=nt.parameters)==null?void 0:Da.docs)==null?void 0:Fa.description}}};var Na,Ma,za,qa,Ba;rt.parameters={...rt.parameters,docs:{...(Na=rt.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  tags: ['kb:editing-async-options'],
  name: '7 · Async options: row, table, context',
  args: {
    ...rich
  },
  parameters: {
    hint: <>
                Edit a <b>Role</b>: the options come from a request. See it in{' '}
                <i>Requests</i>: <code>team</code> is from the <b>row</b>,{' '}
                <code>project</code> from the <b>table</b> (<code>options.meta</code>),{' '}
                <code>region</code> from a <b>React context</b>, <code>q</code> is what
                you type. Rows of another team get other roles.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const team = text(canvasElement, 0, 1);
    await userEvent.dblClick(cell(canvasElement, 0, 2));
    await openEditor(canvasElement);
    await waitFor(() => {
      const first = requests(canvasElement)[0];
      check(first?.dataset.status === 'ok', 'request answered');
      check(first.textContent?.includes(\`team=\${team}\`) && first.textContent.includes('project=PNL-7') && first.textContent.includes('region=EU'), \`params from row, table, context: \${first.textContent}\`);
    }, {
      timeout: 4000
    });
    const pick = within(document.body).getAllByRole('option')[0];
    const value = pick.textContent ?? '';
    await userEvent.click(pick);
    await waitFor(() => check(cell(canvasElement, 0, 2).querySelector('[data-save="pending"]'), 'saving'));
    await waitFor(() => {
      check(text(canvasElement, 0, 2) === value, 'saved');
      check(!cell(canvasElement, 0, 2).querySelector('[data-save]'), 'save finished');
    }, {
      timeout: 4000
    });
  }
}`,...(za=(Ma=rt.parameters)==null?void 0:Ma.docs)==null?void 0:za.source},description:{story:"Async options; the request takes params from the row, table and context.",...(Ba=(qa=rt.parameters)==null?void 0:qa.docs)==null?void 0:Ba.description}}};var _a,Va,Wa,Ha,Ua;it.parameters={...it.parameters,docs:{...(_a=it.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  tags: ['kb:editing-typing'],
  name: '8 · Typing: debounce and abort',
  args: {
    ...rich,
    latency: 1500
  },
  parameters: {
    hint: <>
                Edit a <b>Role</b> and type quickly: a request goes out only after a
                pause (250 ms); when you type again, the running one is <b>aborted</b>,
                and an old answer never replaces a newer one.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.dblClick(cell(canvasElement, 0, 2));
    const input = await openEditor(canvasElement);
    // Wait for the first request to be on its way, then type.
    await waitFor(() => check(requests(canvasElement).length === 1, 'first'), {
      timeout: 3000
    });
    fireEvent.change(input, {
      target: {
        value: 'de'
      }
    });
    await waitFor(() => {
      const all = requests(canvasElement);
      check(all.some(r => r.dataset.status === 'aborted'), 'the first one aborted');
      check(all[0].dataset.status === 'ok', 'the last one answered');
      check(all[0].textContent?.includes('q=de'), 'with the new query');
    }, {
      timeout: 5000
    });
  }
}`,...(Wa=(Va=it.parameters)==null?void 0:Va.docs)==null?void 0:Wa.source},description:{story:"Typing fast: one request per pause, the older ones aborted.",...(Ua=(Ha=it.parameters)==null?void 0:Ha.docs)==null?void 0:Ua.description}}};var Ka,Ga,Qa,Ja,Ya;st.parameters={...st.parameters,docs:{...(Ka=st.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
  tags: ['kb:editing-failures'],
  name: '9 · Failures: load and save',
  args: {
    ...rich,
    failLoad: true,
    latency: 300
  },
  parameters: {
    hint: <>
                The server fails: editing a <b>Role</b> says <i>Could not load</i> with{' '}
                <b>Retry</b>. Switch <i>options fail</i> off and <i>save fails</i> on: a
                picked value shows, then rolls back with ⚠ and the reason on hover.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.dblClick(cell(canvasElement, 0, 2));
    await openEditor(canvasElement);
    await waitFor(() => check(document.querySelector('[data-load-error]'), 'error with Retry shown'), {
      timeout: 4000
    });
    check(requests(canvasElement)[0]?.dataset.status === 'error', 'logged as error');
  }
}`,...(Qa=(Ga=st.parameters)==null?void 0:Ga.docs)==null?void 0:Qa.source},description:{story:"Failures: options fail with Retry; a failed save rolls back.",...(Ya=(Ja=st.parameters)==null?void 0:Ja.docs)==null?void 0:Ya.description}}};var Za,Xa,eo;Rt.parameters={...Rt.parameters,docs:{...(Za=Rt.parameters)==null?void 0:Za.docs,source:{originalSource:`{
  tags: ['kb:editing-playground'],
  args: {
    ...rich
  },
  parameters: {
    hint: <>
                Everything together: text, fixed-list and async editors; turn the fake
                server&apos;s latency and failures in the controls.
            </>
  }
}`,...(eo=(Xa=Rt.parameters)==null?void 0:Xa.docs)==null?void 0:eo.source}}};const ar=["Start","Save","Cancel","NotEditable","ReadOnly","Autocomplete","AsyncOptions","Typing","Failures","Playground"];export{rt as AsyncOptions,nt as Autocomplete,tt as Cancel,st as Failures,at as NotEditable,Rt as Playground,ot as ReadOnly,et as Save,Xe as Start,it as Typing,ar as __namedExportsOrder,tr as default};
