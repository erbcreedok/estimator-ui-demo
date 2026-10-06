import{j as s}from"./jsx-runtime-Cnbe3ryz.js";import{w as r,u as c,a as h}from"./index-iBx7lKYd.js";import{r as be}from"./index-3dRrDZpt.js";import{d as ao,T as no}from"./TableCore-Y75h2oha.js";import{c as Yn}from"./RowActions-BSIeJGF9.js";import{T as _n,d as oo}from"./TableStatusBar-4NxO8OsQ.js";import{T as Xn,s as ro}from"./TableToolbar-DTYEmPN-.js";import{T as so}from"./toolbar-C5VRlWnq.js";import{p as de,s as io,m as co}from"./fixtures-P-DSdYmm.js";import{c as u}from"./play-kit-Bu4SXy9H.js";import{h as lo}from"./hiding-BQUyP7rl.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./pin-controls-NGLUwJXC.js";const mo=(t,e)=>[{id:"duplicate",label:"Duplicate",onClick:()=>e(a=>{const o=a.findIndex(i=>i.id===t.id),l={...t.original,id:`${t.id}-copy-${a.length}`};return[...a.slice(0,o+1),l,...a.slice(o+1)]})},{id:"exclude",label:"Exclude from calculation",disabledReason:t.original.state==="excluded"?"Already excluded":void 0,onClick:()=>e(a=>a.map(o=>o.id===t.id?{...o,state:"excluded"}:o))},{id:"delete",label:"Delete",onClick:()=>e(a=>a.filter(o=>o.id!==t.id))}].filter(a=>!(a.id==="delete"&&t.original.state==="blocked")),uo=t=>s.jsx(Xn,{table:t}),po=t=>s.jsx(_n,{table:t}),p=({readOnly:t,rowHeight:e,rows:a,withToolbar:o,withStatusBar:l,frameHeight:i="100vh",...d})=>{const[g,y]=be.useState(()=>co(a)),w=be.useCallback((b,f,k)=>{y(to=>to.map(ge=>ge.id===b?{...ge,[f]:k}:ge))},[]);return s.jsx("div",{style:{height:i,padding:16,boxSizing:"border-box"},children:s.jsx(no,{data:g,columns:[...de,Yn(b=>mo(b,y))],getRowId:b=>b.id,readOnly:t,rowHeight:e,meta:{onEdit:w},toolbar:o?uo:void 0,statusBar:l?po:void 0,...d})})},No={title:"Tables/Table Core/Showcase",render:t=>s.jsx(p,{...t}),args:{readOnly:!1,rowHeight:48,rows:12,withToolbar:!0,withStatusBar:!0},argTypes:{rowHeight:{control:{type:"range",min:28,max:64,step:4}}},parameters:{layout:"fullscreen",docs:{codePanel:!0,story:{inline:!1,height:"560px"}}}},m=t=>r(()=>{const e=t.querySelector("[role=grid]");if(!e||!e.querySelector("[data-cell]"))throw new Error("grid not ready");return e}),me=(t,e,a)=>{var o;return(o=t.querySelector(`[data-row-index="${e}"][data-col-index="${a}"]`))==null?void 0:o.textContent},S=t=>t.querySelector('[data-selection="active"]'),le=async(t,e)=>(await c.click(h(await m(t)).getByRole("button",{name:new RegExp(`^${e}`)})),r(()=>h(document.body).getByRole("menu"))),Se=async()=>{const t=!!document.querySelector("[data-column-submenu]");await c.keyboard("{Escape}"),t&&await c.keyboard("{Escape}"),await r(()=>{if(document.querySelector("[role=menu]"))throw new Error("menu open")},{timeout:3e3})},ve=async(t,e,a)=>{await le(t,e),await c.click(h(document.body).getByRole("menuitem",{name:"Sort"}));const o=await r(()=>h(document.body).getByRole("menuitemradio",{name:a}));await c.click(o)},n=(t,e)=>{if(!t)throw new Error(`Story check failed: ${e}`)},q={tags:["kb:showcase-basic"]},B={tags:["kb:showcase-without-toolbar"],name:"Without toolbar (slots omitted)",args:{withToolbar:!1,withStatusBar:!1},play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),n(!e.querySelector("[role=toolbar]"),"no toolbar")}},T={tags:["kb:showcase-sorting"],play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),await ve(e,"Name","Sort A–Z"),await r(()=>n(me(e,0,0)==="Aigerim Sultanova","sorted asc")),n(e.querySelector('[data-chip="sort"]'),"sort chip shown")}},A={tags:["kb:showcase-grouping"],render:t=>s.jsx(p,{...t,initialState:{grouping:["team"],columnPinning:{left:["name"],right:[]}}}),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),n(e.querySelectorAll("[data-group-id]").length===4,"4 group cells in the lane"),n(!e.querySelector('[data-header-id="team"]'),"team left the body columns"),n(e.querySelector('[data-lane-id="team"]'),"team lane header"),n(e.querySelector('[data-chip="group"]'),"group chip");const a=e.querySelector("[data-group-id]");n(((a==null?void 0:a.getBoundingClientRect().height)??0)>=143,"group cell spans its 3 rows");const o=h(a).getByRole("checkbox");await c.click(o),await r(()=>n(o.getAttribute("aria-checked")==="true","group checkbox selects the whole group"))}},O={tags:["kb:showcase-grouping-collapsed"],name:"Grouping · collapse",render:t=>s.jsx(p,{...t,initialState:{grouping:["team"]}}),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=e.querySelectorAll("[data-cell]").length;await c.click(h(e).getAllByRole("button",{name:"Collapse group"})[0]),await r(()=>n(e.querySelector("[data-collapsed-group]"),"placeholder row for the collapsed group")),n(e.querySelectorAll("[data-cell]").length<a,"rows hidden")}},L={tags:["kb:showcase-grouping-two-levels"],name:"Grouping · two levels",render:t=>s.jsx(p,{...t,rows:20,initialState:{grouping:["country","team"]}}),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),n(e.querySelector('[data-group-level="1"]'),"second lane")}},M={tags:["kb:showcase-hidden-grouping"],name:"Hidden grouping (no chip)",render:t=>s.jsx(p,{...t,columns:[io,...de],initialState:{grouping:["state"],columnVisibility:{state:!1}}}),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),n(e.querySelectorAll("[data-group-id]").length===3,"3 groups"),n(!e.querySelector("[data-chip]"),"no chips at all"),n(!e.querySelector("[role=status]"),"no status bar")}},ue={id:"location",label:"Location",columns:["country","tier",{id:"city",optional:!0}]},j={tags:["kb:showcase-column-chains"],name:"Column chains",render:t=>s.jsx(p,{...t,chains:[ue]}),play:async t=>{var l,i,d,g;if(u(t))return;const{canvasElement:e}=t;await m(e);const a=()=>{var y;return((y=e.querySelector("[role=row]"))==null?void 0:y.textContent)??""};n(!a().includes("Tier"),"collapsed: tier hidden"),await c.click(h(e).getByRole("button",{name:"Expand columns"})),await r(()=>n(a().includes("City")&&a().includes("Tier"),"expanded"));const o=y=>e.querySelector(`[data-header-id="${y}"]`);n(["country","tier","city"].every(y=>{var w;return((w=o(y))==null?void 0:w.dataset.chain)==="expanded"}),"members marked expanded"),n(((l=o("country"))==null?void 0:l.dataset.chainPrimary)==="true","primary marked"),n(((i=o("city"))==null?void 0:i.querySelector("[data-chain-toggle]"))&&!((d=o("country"))!=null&&d.querySelector("[data-chain-toggle]")),"collapse button on the last member"),await c.click(h(e).getByRole("button",{name:"Collapse columns"})),await r(()=>n(!a().includes("City"),"collapsed again")),n(!!((g=o("country"))!=null&&g.querySelector("[data-chain-toggle]")),"expand button back on the primary")}},P={tags:["kb:showcase-column-chains-first-shown"],name:"Column chains · first member is shown",render:t=>s.jsx(p,{...t,chains:[ue],initialState:{columnChainExpanded:{location:!0}}}),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=o=>e.querySelector(`[data-header-id="${o}"]`);await E(e,"tier",we(e,"country")+2),await r(()=>{var o;return n(((o=a("tier"))==null?void 0:o.dataset.chainPrimary)==="true","Tier first")}),await c.click(h(e).getByRole("button",{name:"Collapse columns"})),await r(()=>n(!a("country")&&!!a("tier"),"collapsed to Tier"))}},F={tags:["kb:showcase-pinned"],render:t=>s.jsx("div",{style:{width:700},children:s.jsx(p,{...t,initialState:{columnPinning:{left:["name"],right:[]}}})})},H={tags:["kb:showcase-keyboard"],play:async t=>{var a;if(u(t))return;const{canvasElement:e}=t;await m(e),await c.click(e.querySelector('[data-row-index="0"][data-col-index="1"]')),await c.keyboard("{ArrowDown}{ArrowRight}"),await r(()=>{var o;return n(((o=S(e))==null?void 0:o.dataset.colIndex)==="2","moved right")}),n(((a=S(e))==null?void 0:a.dataset.rowIndex)==="1","moved down"),await r(()=>n(document.activeElement===S(e),"focus follows")),await c.keyboard("{End}"),await c.keyboard("{Tab}"),await r(()=>{var o,l;return n(((o=S(e))==null?void 0:o.dataset.rowIndex)==="2"&&((l=S(e))==null?void 0:l.dataset.colIndex)==="0","Tab wraps to next row")}),await c.keyboard("{Shift>}{Tab}{/Shift}"),await r(()=>{var o;return n(((o=S(e))==null?void 0:o.dataset.rowIndex)==="1","Shift+Tab wraps back")}),await c.keyboard("{Shift>}{ArrowLeft}{ArrowLeft}{/Shift}"),await r(()=>n(e.querySelectorAll('[data-selection="range"]').length===2,"range of 3 cells"))}},D={tags:["kb:showcase-editing"],play:async t=>{var o,l,i;if(u(t))return;const{canvasElement:e}=t;await m(e),await c.click(e.querySelector('[data-row-index="0"][data-col-index="0"]')),await c.keyboard("{Enter}");const a=await r(()=>{const d=e.querySelector("[data-editor]");if(!d)throw new Error("editor not open");return d});(l=(o=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value"))==null?void 0:o.set)==null||l.call(a,"Renamed"),a.dispatchEvent(new Event("input",{bubbles:!0})),await new Promise(d=>{setTimeout(d,50)}),a.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0})),await r(()=>n(me(e,0,0)==="Renamed","value committed")),n(((i=S(e))==null?void 0:i.dataset.rowIndex)==="1","moved down after Enter")}},$={tags:["kb:showcase-read-only"],args:{readOnly:!0},play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),await c.dblClick(e.querySelector('[data-row-index="0"][data-col-index="0"]')),await c.keyboard("{Enter}"),n(!e.querySelector("[data-editor]"),"no editor")}},ho=t=>{const[e,a]=be.useState([]);return s.jsxs("div",{children:[s.jsx(p,{...t,frameHeight:"calc(100vh - 36px)",onRowOrderChange:a}),s.jsxs("pre",{"data-row-order":!0,style:{padding:"0 16px",fontSize:12},children:["onRowOrderChange → ",e.join(", ")]})]})},pe={tags:["kb:showcase-row-order"],name:"Row order out (onRowOrderChange)",render:t=>s.jsx(ho,{...t}),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=()=>{var o;return((o=e.querySelector("[data-row-order]"))==null?void 0:o.textContent)??""};n(a().includes("p1, p2, p3"),"initial order"),await ve(e,"Rate","Sort ascending"),await r(()=>n(!a().includes("p1, p2, p3"),"order changed after sort"))}},I={tags:["kb:showcase-large-data"],name:"5 000 rows (virtualized)",args:{rows:5e3},play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),n(e.querySelectorAll("[role=row]").length<60,"virtualized")}},z={tags:["kb:showcase-column-menu"],name:"Column menu · default (sort + group)",play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),await c.click(h(e).getByRole("button",{name:/^Team/}));const a=h(document.body);await r(()=>a.getByRole("menuitem",{name:"Group by Team"})),n(!a.queryByRole("menuitem",{name:"Hide column"}),"hide is not in the default menu"),await c.click(a.getByRole("menuitem",{name:"Group by Team"})),await r(()=>n(e.querySelector('[data-lane-id="team"]'),"grouped via menu"))}},N={tags:["kb:showcase-column-menu-sort-submenu"],name:"Column menu · sort submenu",play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=h(document.body),o=()=>document.querySelector('[data-column-submenu="sort"]');await le(e,"Name");const l=a.getByRole("menuitem",{name:"Sort"});n(l.getAttribute("aria-haspopup")==="menu","Sort has a submenu"),n(!o(),"submenu closed at first"),await c.hover(l),await r(()=>n(o(),"hover opens submenu"),{timeout:3e3}),n(a.getByRole("menuitem",{name:"Clear sort · Nothing is sorted"}).getAttribute("aria-disabled")==="true","clear sort disabled while unsorted"),await c.unhover(l),await r(()=>n(!o(),"leaving closes submenu"),{timeout:3e3}),l.focus(),await c.keyboard("{ArrowRight}"),await r(()=>{var i;return n(((i=document.activeElement)==null?void 0:i.textContent)==="Sort A–Z","focus moved into submenu")}),await c.keyboard("{ArrowLeft}"),await r(()=>n(!o(),"← closes submenu")),await r(()=>{var i,d,g;return n(document.activeElement===l,`focus back on Sort, got ${(i=document.activeElement)==null?void 0:i.tagName} "${(g=(d=document.activeElement)==null?void 0:d.textContent)==null?void 0:g.slice(0,30)}"`)}),n(a.queryByRole("menu"),"main menu still open"),await Se(),await ve(e,"Name","Sort Z–A"),await r(()=>{const i=me(e,0,0)??"",d=me(e,1,0)??"";n(i.localeCompare(d)>0,"sorted Z–A")}),n(!a.queryByRole("menu"),"menu closed after pick"),await le(e,"Name"),await c.click(a.getByRole("menuitem",{name:"Sort"})),await r(()=>n(a.getByRole("menuitemradio",{name:"Sort Z–A"}).getAttribute("aria-checked")==="true","active direction checked")),await c.click(a.getByRole("menuitem",{name:"Clear sort"})),await r(()=>n(!e.querySelector('[data-chip="sort"]'),"sorting cleared")),await le(e,"Rate"),await c.click(a.getByRole("menuitem",{name:"Sort"})),await r(()=>a.getByRole("menuitemradio",{name:"Sort ascending"})),await Se()}},wo={id:"export",getItems:({label:t})=>[{id:"copyValues",label:`Copy ${t} values`,onClick:()=>{}}]},W={tags:["kb:showcase-column-menu-configured"],name:"Column menu · configured",render:t=>s.jsx(p,{...t,columnMenu:{sections:[...ao().sections,lo(),wo]}}),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),await c.click(h(e).getByRole("button",{name:/^Level/}));const a=h(document.body);await r(()=>a.getByRole("menuitem",{name:"Copy Level values"})),await c.click(a.getByRole("menuitem",{name:"Hide column"})),await r(()=>n(!e.querySelector('[data-header-id="level"]'),"level hidden"))}},G={tags:["kb:showcase-column-menu-off"],name:"Column menu · off",render:t=>s.jsx(p,{...t,columnMenu:!1}),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),await c.click(h(e).getByRole("button",{name:/^Name/})),await r(()=>n(me(e,0,0)==="Aigerim Sultanova","sorted by click")),n(!document.querySelector("[role=menu]"),"no menu")}},Z={tags:["kb:showcase-row-actions"],name:"Row actions",play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=e.querySelectorAll('[data-cell][data-column-id="name"]').length;await c.click(h(e).getAllByRole("button",{name:"Row Actions"})[0]);const o=h(document.body);await c.click(await r(()=>o.getByRole("menuitem",{name:"Duplicate"}))),await r(()=>n(e.querySelectorAll('[data-cell][data-column-id="name"]').length===a+1,"row duplicated"))}},R=async(t,e)=>(await c.click(h(t.querySelector("[role=toolbar]")).getByRole("button",{name:e})),r(()=>h(document.body).getByRole("group"))),x=async()=>{var t,e;(e=(t=document.querySelector("[data-panel]"))==null?void 0:t.querySelector("input, button"))==null||e.focus(),await c.keyboard("{Escape}"),await r(()=>{if(document.querySelector("[data-panel]"))throw new Error("panel open")},{timeout:3e3})},U={tags:["kb:showcase-toolbar-and-status-bar"],name:"Toolbar and status bar",play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),n(!e.querySelector("[role=status]"),"no bar at first");let a=h(await R(e,"Sort"));await c.click(a.getByRole("button",{name:"Sort by Team A–Z +"})),await r(()=>{var i;return n(((i=e.querySelector('[data-chip="sort"]'))==null?void 0:i.textContent)==="Team","single sort chip shows the column")}),await c.click(a.getByRole("button",{name:"Sort by Level A–Z +"})),await r(()=>{var i;return n(((i=e.querySelector('[data-chip="sort"]'))==null?void 0:i.textContent)==="2 Sorts",'two sorts collapse into "2 Sorts"')}),await x(),await c.click(e.querySelector('[data-chip="sort"]')),a=h(await r(()=>h(document.body).getByRole("group")));const o=document.querySelector('[data-sort-item="team"]');await c.click(o.querySelector('[data-action="sortDesc"]')),await r(()=>{var i;return n(((i=o.querySelector('[data-action="sortDesc"]'))==null?void 0:i.getAttribute("aria-pressed"))==="true","direction switched")}),await c.click(document.querySelector('[data-sort-item="level"] [data-action="removeSort"]')),await r(()=>{var i;return n(((i=e.querySelector('[data-chip="sort"]'))==null?void 0:i.textContent)==="Team","back to one sort")}),await x(),a=h(await R(e,"Group")),await c.click(a.getByRole("button",{name:"Group by Team"})),await r(()=>n(e.querySelector('[data-lane-id="team"]'),"grouped from toolbar")),await x();const l=Array.from(e.querySelectorAll("[data-chip]")).map(i=>i.dataset.chip);n(l.join(",")==="sort,group",`chip order, got ${l}`),await c.click(e.querySelector("[data-clear-all]")),await r(()=>n(!e.querySelector("[role=status]"),"bar gone"))}},go={id:"export",label:"Export",icon:s.jsx("span",{"aria-hidden":!0,children:"⤓"}),renderPanel:({close:t})=>s.jsx("div",{role:"group","data-panel":"export",style:{padding:12},children:s.jsx("button",{type:"button",onClick:t,children:"Export CSV"})})},V={tags:["kb:showcase-toolbar-configured"],name:"Toolbar · configured",render:t=>s.jsx(p,{...t,toolbar:e=>s.jsx(Xn,{table:e,controls:[ro(),go],start:s.jsx("b",{style:{fontSize:14},children:"People"}),end:s.jsx(so,{children:"Presets"})}),statusBar:e=>s.jsx(_n,{table:e,chips:oo(),adornment:s.jsx("span",{style:{fontSize:12},children:"12 people"})})}),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=h(e.querySelector("[role=toolbar]"));n(!a.queryByRole("button",{name:"Group"}),"no Group control"),n(a.getByRole("button",{name:"Export"}),"custom control"),n(a.getByRole("button",{name:"Presets"}),"end slot"),n(e.querySelector("[role=status]"),"adornment keeps bar"),await R(e,"Export"),await c.click(h(document.body).getByRole("button",{name:"Export CSV"})),await r(()=>n(!document.querySelector('[data-panel="export"]'),"closed"))}},C=t=>Object.fromEntries(Array.from(t.querySelectorAll("[data-header-id]")).map(e=>[e.dataset.headerId,Math.round(e.getBoundingClientRect().width)])),yo=[{...de[0],size:120},de[3],Yn(()=>[])],bo=248,he={tags:["kb:showcase-fill-width"],name:"Fill width",render:t=>s.jsx(p,{...t,columns:yo}),play:async t=>{if(u(t))return;const{canvasElement:e}=t,a=await m(e);if(bo>=a.clientWidth){n(C(e).name===120,"no stretch when narrow");return}await r(()=>n(a.scrollWidth===a.clientWidth,"no horizontal scroll"));const o=C(e),l=Object.values(o).reduce((b,f)=>b+f,0);n(Math.abs(l-a.clientWidth)<=1,`fills ${l}/${a.clientWidth}`),n(o["row-actions"]===48,"row actions stay 48px"),n(o.name>120,"name stretched");const i=e.querySelector('[data-header-id="name"] [data-resizer]'),d=i.getBoundingClientRect(),g=d.left+d.width/2,y=d.top+4,w=(b,f,k)=>f.dispatchEvent(new PointerEvent(b,{bubbles:!0,clientX:k,clientY:y,button:0}));w("pointerdown",i,g),w("pointermove",window,g+40),w("pointerup",window,g+40),await r(()=>n(C(e).name===o.name+40,"resized under the pointer")),o.name+40+80+48<=a.clientWidth?n(a.scrollWidth===a.clientWidth,"still fills"):n(a.scrollWidth>a.clientWidth,"others not below own size"),i.dispatchEvent(new MouseEvent("dblclick",{bubbles:!0})),await r(()=>n(C(e).name===o.name,"reset"))}},K={tags:["kb:showcase-no-fill"],name:"Fill width · off",render:t=>s.jsx(p,{...t,fill:"natural",columns:de.slice(0,3)}),play:async t=>{if(u(t))return;const{canvasElement:e}=t,a=await m(e);n(C(e).name===200,"name keeps 200px");const o=a.querySelector("[data-row-id]"),l=Object.values(C(e)).reduce((i,d)=>i+d,0);n(o&&Math.round(o.getBoundingClientRect().width)===Math.max(l,a.clientWidth),"row spans the table (or the columns, when wider)")}},ye=(t,e)=>Array.from(document.querySelectorAll(t)).map(a=>a.getAttribute(e)??""),Jn=t=>document.querySelector(`${t} [data-drag-handle]`),fe=async t=>{await r(()=>{var a;return n((a=document.activeElement)==null?void 0:a.closest('[class*="MuiPopover-paper"]'),"popover focused")});const e=Jn(t);e==null||e.focus(),n(document.activeElement===e,`handle ${t} focused`)},Y={tags:["kb:showcase-reorder-in-panels"],name:"Panels · reorder",render:t=>s.jsx(p,{...t,initialState:{sorting:[{id:"team",desc:!1},{id:"level",desc:!1}],grouping:["team","level"]}}),play:async t=>{var g,y;if(u(t))return;const{canvasElement:e}=t;await m(e),await c.click(e.querySelector('[data-chip="sort"]')),await fe('[data-sort-item="team"]'),await c.keyboard("{ArrowDown}"),await r(()=>n(ye("[data-sort-item]","data-sort-item").join()==="level,team","sorting reordered")),n(((y=(g=document.activeElement)==null?void 0:g.closest("[data-sort-item]"))==null?void 0:y.getAttribute("data-sort-item"))==="team","focus stays on the moved item"),await x(),await c.click(e.querySelector('[data-chip="group"]'));const a=await r(()=>{const w=Jn('[data-group-item="level"]');if(!w)throw new Error("no handle");return w}),o=document.querySelector('[data-group-item="team"]'),l=a.getBoundingClientRect(),i=o.getBoundingClientRect(),d=(w,b,f)=>b.dispatchEvent(new PointerEvent(w,{bubbles:!0,clientX:l.left+4,clientY:f,button:0}));d("pointerdown",a,l.top+4),d("pointermove",window,i.top+2),d("pointerup",window,i.top+2),await r(()=>n(ye("[data-lane-id]","data-lane-id").join()==="level,team","grouping levels reordered")),await x(),await R(e,"Columns"),await fe('[data-column-item="role"]'),await c.keyboard("{ArrowUp}"),await r(()=>{const w=ye("[data-column-item]","data-column-item");n(w.indexOf("role")<w.indexOf("team"),`column order changed: ${w.join()}`)}),await x()}},v=t=>Array.from(t.querySelectorAll("[data-header-id]")).map(e=>e.dataset.headerId),E=async(t,e,a)=>{const o=t.querySelector(`[data-header-id="${e}"] [data-grip]`);if(!o)throw new Error(`no grip on ${e}`);const l=o.getBoundingClientRect(),i=l.top+l.height/2,d=(g,y,w)=>y.dispatchEvent(new PointerEvent(g,{bubbles:!0,clientX:w,clientY:i,button:0}));d("pointerdown",o,l.left+4),d("pointermove",window,a),d("pointerup",window,a)},_={tags:["kb:showcase-pinned-reorder"],name:"Pinned · reorder",render:t=>s.jsx(p,{...t,initialState:{columnPinning:{left:["name","team"]}}}),play:async t=>{var y,w,b,f;if(u(t))return;const{canvasElement:e}=t;await m(e),n(v(e).slice(0,2).join()==="name,team","start");const a=(y=e.querySelector('[data-header-id="name"]'))==null?void 0:y.getBoundingClientRect();await E(e,"team",((a==null?void 0:a.left)??0)+2),await r(()=>n(v(e).slice(0,2).join()==="team,name","pinned reordered")),n(((w=e.querySelector('[data-header-id="team"]'))==null?void 0:w.getAttribute("data-pinned"))==="left","still pinned");const o=e.querySelector("[role=grid]");await E(e,"team",o.getBoundingClientRect().right-10),await r(()=>n(v(e).slice(0,2).join()==="name,team",`stays in pinned zone: ${v(e).slice(0,3)}`)),await R(e,"Columns"),await fe('[data-pinned-list] [data-column-item="team"]'),await c.keyboard("{ArrowUp}"),await r(()=>n(v(e).slice(0,2).join()==="team,name","reordered from the panel")),await x();const l=k=>e.querySelector(`[data-header-id="${k}"]`),i=l("team"),d=l("name");n(i.style.left==="0px",`team sticks at 0, got ${i.style.left}`),n(d.style.left===`${Math.round(i.getBoundingClientRect().width)}px`,`name sticks after team, got ${d.style.left}`);const g=k=>e.querySelector(`[data-row-index="0"][data-column-id="${k}"]`);n(((b=g("team"))==null?void 0:b.style.left)==="0px"&&((f=g("name"))==null?void 0:f.style.left)===d.style.left,"cells stick like headers")}},X={tags:["kb:showcase-pinned-grouped-column"],name:"Pinned · grouped column",render:t=>s.jsx("div",{style:{width:700},children:s.jsx(p,{...t,initialState:{columnPinning:{left:["name","role"]},grouping:["role"]}})}),play:async t=>{if(u(t))return;const{canvasElement:e}=t,a=await m(e),o=e.querySelector('[data-lane-id="role"]'),l=e.querySelector('[data-header-id="name"]');n(o.dataset.pinned==="left","lane is pinned"),n(l.style.left===`${o.getBoundingClientRect().width}px`,"name after lane");const i=a.getBoundingClientRect().left;a.scrollLeft=300,a.dispatchEvent(new Event("scroll")),await r(()=>{n(Math.round(o.getBoundingClientRect().left-i)===0,"lane header sticks");const d=e.querySelector('[data-group-level="0"]');n(Math.abs(d.getBoundingClientRect().left-i)<=1,`lane block sticks, at ${d.getBoundingClientRect().left-i}`),n(Math.round(l.getBoundingClientRect().left-i)===Math.round(o.getBoundingClientRect().width),"name sticks after the lane"),n(a.dataset.underLeft==="true","edge border on")})}},J={tags:["kb:showcase-pinned-edge-after-lanes"],name:"Pinned · edge after lanes",render:t=>s.jsx("div",{style:{width:700},children:s.jsx(p,{...t,initialState:{columnPinning:{left:["name"]},grouping:["role"]}})}),play:async t=>{if(u(t))return;const{canvasElement:e}=t,a=await m(e);a.scrollLeft=100,a.dispatchEvent(new Event("scroll")),await r(()=>n(a.dataset.underLeft==="false","no border while lane leaves")),a.scrollLeft=260,a.dispatchEvent(new Event("scroll")),await r(()=>n(a.dataset.underLeft==="true","border once Name sticks"))}},we=(t,e)=>{var a;return((a=t.querySelector(`[data-header-id="${e}"]`))==null?void 0:a.getBoundingClientRect().left)??0},Qn=t=>t.querySelector("[role=grid]").getBoundingClientRect().right,eo={columnChainExpanded:{location:!0}},fo=t=>t.querySelector("[data-chain-hint]"),Q={tags:["kb:showcase-chain-required"],name:"Column chains · required members",render:t=>s.jsx(p,{...t,chains:[ue],initialState:eo}),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=v(e).join();await E(e,"rate",we(e,"tier")+2),await E(e,"tier",Qn(e)-10),await new Promise(o=>{setTimeout(o,300)}),n(v(e).join()===a,"order unchanged"),await E(e,"tier",we(e,"country")+2),await r(()=>{const o=v(e);n(o.indexOf("tier")===o.indexOf("country")-1,`tier moved inside the chain: ${o}`)})}},ee={tags:["kb:showcase-chain-optional"],name:"Column chains · optional member leaves and returns",render:t=>s.jsx(p,{...t,chains:[ue],initialState:eo}),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=o=>{var l;return(l=e.querySelector(`[data-header-id="${o}"]`))==null?void 0:l.dataset.chain};await E(e,"city",Qn(e)-10),await r(()=>n(!a("city"),"city left the chain")),await E(e,"city",we(e,"tier")+2),await r(()=>n(a("city")==="expanded","city is back in the chain")),n(!fo(e),"no hint after the drop")}},Ee=async t=>{if(!t)throw new Error("showcase: element not found");await c.click(t)},ke=t=>r(()=>{const e=document.querySelector(t);if(!e)throw new Error(`showcase: ${t}`);return e}),te={tags:["kb:showcase-showcase-overview"],name:"Showcase · overview",render:t=>s.jsx(p,{...t,frameHeight:520,initialState:{grouping:["team"],sorting:[{id:"name",desc:!1}],columnPinning:{left:["name"]}}})},ae={tags:["kb:showcase-showcase-column-menu"],name:"Showcase · column menu",render:t=>s.jsx(p,{...t,frameHeight:520}),play:async t=>{if(t.viewMode==="docs")return;const{canvasElement:e}=t;await m(e),await le(e,"Name"),await Ee(h(document.body).getByRole("menuitem",{name:"Sort"})),await ke('[data-column-submenu="sort"]')}},ne={tags:["kb:showcase-showcase-sorting-panel"],name:"Showcase · sorting panel",render:t=>s.jsx(p,{...t,frameHeight:520,initialState:{sorting:[{id:"team",desc:!1},{id:"level",desc:!0}]}}),play:async t=>{if(t.viewMode==="docs")return;const{canvasElement:e}=t;await m(e),await Ee(e.querySelector('[data-chip="sort"]')),await ke('[data-panel="sorting"]')}},oe={tags:["kb:showcase-showcase-columns-panel"],name:"Showcase · columns panel",render:t=>s.jsx(p,{...t,frameHeight:520,initialState:{columnPinning:{left:["name"]}}}),play:async t=>{if(t.viewMode==="docs")return;const{canvasElement:e}=t;await m(e),await R(e,"Columns")}},re={tags:["kb:showcase-showcase-row-actions"],name:"Showcase · row actions",render:t=>s.jsx(p,{...t,frameHeight:520}),play:async t=>{if(t.viewMode==="docs")return;const{canvasElement:e}=t;await m(e),await Ee(e.querySelector('[aria-label="Row Actions"]')),await ke("[role=menu]")}},se={tags:["kb:showcase-showcase-chain-expanded"],name:"Showcase · column chain",render:t=>s.jsx(p,{...t,frameHeight:520,chains:[ue],initialState:{columnChainExpanded:{location:!0}}})},ie={tags:["kb:showcase-showcase-pinned-lane"],name:"Showcase · pinned lane",render:t=>s.jsx("div",{style:{width:900},children:s.jsx(p,{...t,frameHeight:520,initialState:{columnPinning:{left:["name","role"]},grouping:["role"]}})}),play:async t=>{if(t.viewMode==="docs")return;const{canvasElement:e}=t,a=await m(e);a.scrollLeft=320,a.dispatchEvent(new Event("scroll"))}},ce={tags:["kb:showcase-fixed-height-box"],name:"Fixed height · inside a page",args:{rows:40},render:t=>s.jsxs("div",{style:{padding:24,maxWidth:1100,fontSize:14,color:"#303240"},children:[s.jsx("h3",{style:{margin:"0 0 8px"},children:"Team roster"}),s.jsx("p",{style:{margin:"0 0 12px",color:"#6C6F80"},children:"The table takes the box it is given (here 360px) and scrolls inside it."}),s.jsx("div",{style:{border:"1px solid #E1E3EB",borderRadius:6},children:s.jsx(p,{...t,frameHeight:360})}),s.jsx("p",{style:{margin:"12px 0 0",color:"#6C6F80"},children:"Content below the table stays in the normal page flow."})]})};var xe,Ce,Re,qe,Be;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  tags: ['kb:showcase-basic']
}`,...(Re=(Ce=q.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source},description:{story:"Toolbar + status bar as slots, sorting, resize, reorder.",...(Be=(qe=q.parameters)==null?void 0:qe.docs)==null?void 0:Be.description}}};var Te,Ae,Oe,Le,Me;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  tags: ['kb:showcase-without-toolbar'],
  name: 'Without toolbar (slots omitted)',
  args: {
    withToolbar: false,
    withStatusBar: false
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(!canvasElement.querySelector('[role=toolbar]'), 'no toolbar');
  }
}`,...(Oe=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source},description:{story:"Same table without toolbar and status bar: slots not passed, nothing rendered.",...(Me=(Le=B.parameters)==null?void 0:Le.docs)==null?void 0:Me.description}}};var je,Pe,Fe,He,De;T.parameters={...T.parameters,docs:{...(je=T.parameters)==null?void 0:je.docs,source:{originalSource:`{
  tags: ['kb:showcase-sorting'],
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await sortVia(canvasElement, 'Name', 'Sort A–Z');
    await waitFor(() => check(cellText(canvasElement, 0, 0) === 'Aigerim Sultanova', 'sorted asc'));
    check(canvasElement.querySelector('[data-chip="sort"]'), 'sort chip shown');
  }
}`,...(Fe=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source},description:{story:"Click a header: sorted, chip appears; remove the chip: sorting gone.",...(De=(He=T.parameters)==null?void 0:He.docs)==null?void 0:De.description}}};var $e,Ie,ze,Ne,We;A.parameters={...A.parameters,docs:{...($e=A.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  tags: ['kb:showcase-grouping'],
  render: args => <Demo {...args} initialState={{
    grouping: ['team'],
    columnPinning: {
      left: ['name'],
      right: []
    }
  }} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(canvasElement.querySelectorAll('[data-group-id]').length === 4, '4 group cells in the lane');
    check(!canvasElement.querySelector('[data-header-id="team"]'), 'team left the body columns');
    check(canvasElement.querySelector('[data-lane-id="team"]'), 'team lane header');
    check(canvasElement.querySelector('[data-chip="group"]'), 'group chip');
    const firstBlock = canvasElement.querySelector<HTMLElement>('[data-group-id]');
    check((firstBlock?.getBoundingClientRect().height ?? 0) >= 3 * 48 - 1, 'group cell spans its 3 rows');
    const groupCheckbox = within(firstBlock as HTMLElement).getByRole('checkbox');
    await userEvent.click(groupCheckbox);
    await waitFor(() => check(groupCheckbox.getAttribute('aria-checked') === 'true', 'group checkbox selects the whole group'));
  }
}`,...(ze=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:ze.source},description:{story:`Grouping as in Resource Plan: the grouped column leaves its place and
becomes a lane at the far left — before pinned columns, not pinned itself
(scrolls away horizontally, pinned ones then stick). Each group is one tall
cell spanning its rows, label sticks while scrolling. No group header rows.`,...(We=(Ne=A.parameters)==null?void 0:Ne.docs)==null?void 0:We.description}}};var Ge,Ze,Ue,Ve,Ke;O.parameters={...O.parameters,docs:{...(Ge=O.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  tags: ['kb:showcase-grouping-collapsed'],
  name: 'Grouping · collapse',
  render: args => <Demo {...args} initialState={{
    grouping: ['team']
  }} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const before = canvasElement.querySelectorAll('[data-cell]').length;
    await userEvent.click(within(canvasElement).getAllByRole('button', {
      name: 'Collapse group'
    })[0]);
    await waitFor(() => check(canvasElement.querySelector('[data-collapsed-group]'), 'placeholder row for the collapsed group'));
    check(canvasElement.querySelectorAll('[data-cell]').length < before, 'rows hidden');
  }
}`,...(Ue=(Ze=O.parameters)==null?void 0:Ze.docs)==null?void 0:Ue.source},description:{story:"Collapse a group: one empty row keeps its cell; − in the lane header toggles all.",...(Ke=(Ve=O.parameters)==null?void 0:Ve.docs)==null?void 0:Ke.description}}};var Ye,_e,Xe,Je,Qe;L.parameters={...L.parameters,docs:{...(Ye=L.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  tags: ['kb:showcase-grouping-two-levels'],
  name: 'Grouping · two levels',
  render: args => <Demo {...args} rows={20} initialState={{
    grouping: ['country', 'team']
  }} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(canvasElement.querySelector('[data-group-level="1"]'), 'second lane');
  }
}`,...(Xe=(_e=L.parameters)==null?void 0:_e.docs)==null?void 0:Xe.source},description:{story:"Two levels: Country, then Team — two lanes side by side.",...(Qe=(Je=L.parameters)==null?void 0:Je.docs)==null?void 0:Qe.description}}};var et,tt,at,nt,ot;M.parameters={...M.parameters,docs:{...(et=M.parameters)==null?void 0:et.docs,source:{originalSource:`{
  tags: ['kb:showcase-hidden-grouping'],
  name: 'Hidden grouping (no chip)',
  render: args => <Demo {...args} columns={[stateColumn, ...peopleColumns]} initialState={{
    grouping: ['state'],
    columnVisibility: {
      state: false
    }
  }} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(canvasElement.querySelectorAll('[data-group-id]').length === 3, '3 groups');
    check(!canvasElement.querySelector('[data-chip]'), 'no chips at all');
    check(!canvasElement.querySelector('[role=status]'), 'no status bar');
  }
}`,...(at=(tt=M.parameters)==null?void 0:tt.docs)==null?void 0:at.source},description:{story:`Hidden grouping: the domain groups by a hidden column marked
meta.hideFrom: ['all'] (like Issues in Resource Plan). Rows are grouped,
but there is no chip, no status bar and the column is absent from menus.`,...(ot=(nt=M.parameters)==null?void 0:nt.docs)==null?void 0:ot.description}}};var rt,st,it,ct,lt;j.parameters={...j.parameters,docs:{...(rt=j.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  tags: ['kb:showcase-column-chains'],
  name: 'Column chains',
  render: args => <Demo {...args} chains={[locationChain]} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const header = () => canvasElement.querySelector('[role=row]')?.textContent ?? '';
    check(!header().includes('Tier'), 'collapsed: tier hidden');
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Expand columns'
    }));
    await waitFor(() => check(header().includes('City') && header().includes('Tier'), 'expanded'));
    // Legacy look: members tinted, primary underlined, Collapse on the last.
    const cell = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-header-id="\${id}"]\`);
    check(['country', 'tier', 'city'].every(id => cell(id)?.dataset.chain === 'expanded'), 'members marked expanded');
    check(cell('country')?.dataset.chainPrimary === 'true', 'primary marked');
    check(cell('city')?.querySelector('[data-chain-toggle]') && !cell('country')?.querySelector('[data-chain-toggle]'), 'collapse button on the last member');
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Collapse columns'
    }));
    await waitFor(() => check(!header().includes('City'), 'collapsed again'));
    check(!!cell('country')?.querySelector('[data-chain-toggle]'), 'expand button back on the primary');
  }
}`,...(it=(st=j.parameters)==null?void 0:st.docs)==null?void 0:it.source},description:{story:`Chain of 3 columns collapsed to its first member; » expands. Expanded, as
in the legacy table: members share a tinted header, the first one is
underlined, « on the last member collapses.`,...(lt=(ct=j.parameters)==null?void 0:ct.docs)==null?void 0:lt.description}}};var dt,mt,ut,pt,ht;P.parameters={...P.parameters,docs:{...(dt=P.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  tags: ['kb:showcase-column-chains-first-shown'],
  name: 'Column chains · first member is shown',
  render: args => <Demo {...args} chains={[locationChain]} initialState={{
    columnChainExpanded: {
      location: true
    }
  }} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const cell = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-header-id="\${id}"]\`);
    await dragHeader(canvasElement, 'tier', headerLeft(canvasElement, 'country') + 2);
    await waitFor(() => check(cell('tier')?.dataset.chainPrimary === 'true', 'Tier first'));
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Collapse columns'
    }));
    await waitFor(() => check(!cell('country') && !!cell('tier'), 'collapsed to Tier'));
  }
}`,...(ut=(mt=P.parameters)==null?void 0:mt.docs)==null?void 0:ut.source},description:{story:"The first member is the one shown collapsed: reorder inside changes it.",...(ht=(pt=P.parameters)==null?void 0:pt.docs)==null?void 0:ht.description}}};var wt,gt,yt,bt,ft;F.parameters={...F.parameters,docs:{...(wt=F.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  tags: ['kb:showcase-pinned'],
  render: args => <div style={{
    width: 700
  }}>
            <Demo {...args} initialState={{
      columnPinning: {
        left: ['name'],
        right: []
      }
    }} />
        </div>
}`,...(yt=(gt=F.parameters)==null?void 0:gt.docs)==null?void 0:yt.source},description:{story:"Pinned Name: stays while scrolling horizontally, cannot be dragged.",...(ft=(bt=F.parameters)==null?void 0:bt.docs)==null?void 0:ft.description}}};var vt,Et,kt,St,xt;H.parameters={...H.parameters,docs:{...(vt=H.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  tags: ['kb:showcase-keyboard'],
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(canvasElement.querySelector('[data-row-index="0"][data-col-index="1"]')!);
    await userEvent.keyboard('{ArrowDown}{ArrowRight}');
    await waitFor(() => check(activeCell(canvasElement)?.dataset.colIndex === '2', 'moved right'));
    check(activeCell(canvasElement)?.dataset.rowIndex === '1', 'moved down');
    await waitFor(() => check(document.activeElement === activeCell(canvasElement), 'focus follows'));
    await userEvent.keyboard('{End}');
    await userEvent.keyboard('{Tab}');
    await waitFor(() => check(activeCell(canvasElement)?.dataset.rowIndex === '2' && activeCell(canvasElement)?.dataset.colIndex === '0', 'Tab wraps to next row'));
    await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
    await waitFor(() => check(activeCell(canvasElement)?.dataset.rowIndex === '1', 'Shift+Tab wraps back'));
    await userEvent.keyboard('{Shift>}{ArrowLeft}{ArrowLeft}{/Shift}');
    await waitFor(() => check(canvasElement.querySelectorAll('[data-selection="range"]').length === 2, 'range of 3 cells'));
  }
}`,...(kt=(Et=H.parameters)==null?void 0:Et.docs)==null?void 0:kt.source},description:{story:"Keyboard: arrows, Tab / Shift+Tab across rows, Home / End, Shift+arrows range.",...(xt=(St=H.parameters)==null?void 0:St.docs)==null?void 0:xt.description}}};var Ct,Rt,qt,Bt,Tt;D.parameters={...D.parameters,docs:{...(Ct=D.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  tags: ['kb:showcase-editing'],
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(canvasElement.querySelector('[data-row-index="0"][data-col-index="0"]')!);
    await userEvent.keyboard('{Enter}');
    const input = await waitFor(() => {
      const el = canvasElement.querySelector<HTMLInputElement>('[data-editor]');
      if (!el) throw new Error('editor not open');
      return el;
    });
    // Native value setter + input event: what a real keystroke does to a
    // React-controlled input (user-event's typing is flaky in this harness).
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, 'Renamed');
    input.dispatchEvent(new Event('input', {
      bubbles: true
    }));
    await new Promise(resolve => {
      setTimeout(resolve, 50);
    });
    input.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true
    }));
    await waitFor(() => check(cellText(canvasElement, 0, 0) === 'Renamed', 'value committed'));
    check(activeCell(canvasElement)?.dataset.rowIndex === '1', 'moved down after Enter');
  }
}`,...(qt=(Rt=D.parameters)==null?void 0:Rt.docs)==null?void 0:qt.source},description:{story:"Edit: Enter opens the editor, typing + Enter commits and moves down.",...(Tt=(Bt=D.parameters)==null?void 0:Bt.docs)==null?void 0:Tt.description}}};var At,Ot,Lt,Mt,jt;$.parameters={...$.parameters,docs:{...(At=$.parameters)==null?void 0:At.docs,source:{originalSource:`{
  tags: ['kb:showcase-read-only'],
  args: {
    readOnly: true
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.dblClick(canvasElement.querySelector('[data-row-index="0"][data-col-index="0"]')!);
    await userEvent.keyboard('{Enter}');
    check(!canvasElement.querySelector('[data-editor]'), 'no editor');
  }
}`,...(Lt=(Ot=$.parameters)==null?void 0:Ot.docs)==null?void 0:Lt.source},description:{story:"Read only: Enter / double-click do nothing; navigation and sorting still work.",...(jt=(Mt=$.parameters)==null?void 0:Mt.docs)==null?void 0:jt.description}}};var Pt,Ft,Ht;pe.parameters={...pe.parameters,docs:{...(Pt=pe.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  tags: ['kb:showcase-row-order'],
  name: 'Row order out (onRowOrderChange)',
  render: args => <RowOrderDemo {...args} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const text = () => canvasElement.querySelector('[data-row-order]')?.textContent ?? '';
    check(text().includes('p1, p2, p3'), 'initial order');
    await sortVia(canvasElement, 'Rate', 'Sort ascending');
    await waitFor(() => check(!text().includes('p1, p2, p3'), 'order changed after sort'));
  }
}`,...(Ht=(Ft=pe.parameters)==null?void 0:Ft.docs)==null?void 0:Ht.source}}};var Dt,$t,It,zt,Nt;I.parameters={...I.parameters,docs:{...(Dt=I.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  tags: ['kb:showcase-large-data'],
  name: '5 000 rows (virtualized)',
  args: {
    rows: 5000
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(canvasElement.querySelectorAll('[role=row]').length < 60, 'virtualized');
  }
}`,...(It=($t=I.parameters)==null?void 0:$t.docs)==null?void 0:It.source},description:{story:"5 000 rows: only visible rows are in the DOM.",...(Nt=(zt=I.parameters)==null?void 0:zt.docs)==null?void 0:Nt.description}}};var Wt,Gt,Zt,Ut,Vt;z.parameters={...z.parameters,docs:{...(Wt=z.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  tags: ['kb:showcase-column-menu'],
  name: 'Column menu · default (sort + group)',
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: /^Team/
    }));
    const body = within(document.body);
    await waitFor(() => body.getByRole('menuitem', {
      name: 'Group by Team'
    }));
    check(!body.queryByRole('menuitem', {
      name: 'Hide column'
    }), 'hide is not in the default menu');
    await userEvent.click(body.getByRole('menuitem', {
      name: 'Group by Team'
    }));
    await waitFor(() => check(canvasElement.querySelector('[data-lane-id="team"]'), 'grouped via menu'));
  }
}`,...(Zt=(Gt=z.parameters)==null?void 0:Gt.docs)==null?void 0:Zt.source},description:{story:`Column menu (click a header). Built from sections; the default is
sorting + grouping. Flat list, sections split by dividers, no cascades.
Shift+click on a header still adds a quick sort.`,...(Vt=(Ut=z.parameters)==null?void 0:Ut.docs)==null?void 0:Vt.description}}};var Kt,Yt,_t,Xt,Jt;N.parameters={...N.parameters,docs:{...(Kt=N.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  tags: ['kb:showcase-column-menu-sort-submenu'],
  name: 'Column menu · sort submenu',
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const body = within(document.body);
    const submenu = () => document.querySelector<HTMLElement>('[data-column-submenu="sort"]');

    // Hover opens it.
    await openColumnMenu(canvasElement, 'Name');
    const sort = body.getByRole('menuitem', {
      name: 'Sort'
    });
    check(sort.getAttribute('aria-haspopup') === 'menu', 'Sort has a submenu');
    check(!submenu(), 'submenu closed at first');
    await userEvent.hover(sort);
    await waitFor(() => check(submenu(), 'hover opens submenu'), {
      timeout: 3000
    });
    check(body.getByRole('menuitem', {
      name: 'Clear sort · Nothing is sorted'
    }).getAttribute('aria-disabled') === 'true', 'clear sort disabled while unsorted');
    await userEvent.unhover(sort);
    await waitFor(() => check(!submenu(), 'leaving closes submenu'), {
      timeout: 3000
    });

    // Keyboard: → opens with focus inside, ← closes back to "Sort".
    sort.focus();
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => check(document.activeElement?.textContent === 'Sort A–Z', 'focus moved into submenu'));
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => check(!submenu(), '← closes submenu'));
    await waitFor(() => check(document.activeElement === sort, \`focus back on Sort, got \${document.activeElement?.tagName} "\${document.activeElement?.textContent?.slice(0, 30)}"\`));
    check(body.queryByRole('menu'), 'main menu still open');
    await closeMenu();

    // Pick Z–A: sorted, menu closed.
    await sortVia(canvasElement, 'Name', 'Sort Z–A');
    await waitFor(() => {
      const first = cellText(canvasElement, 0, 0) ?? '';
      const second = cellText(canvasElement, 1, 0) ?? '';
      check(first.localeCompare(second) > 0, 'sorted Z–A');
    });
    check(!body.queryByRole('menu'), 'menu closed after pick');

    // Reopen: Z–A checked, Clear sort enabled and clears.
    await openColumnMenu(canvasElement, 'Name');
    await userEvent.click(body.getByRole('menuitem', {
      name: 'Sort'
    }));
    await waitFor(() => check(body.getByRole('menuitemradio', {
      name: 'Sort Z–A'
    }).getAttribute('aria-checked') === 'true', 'active direction checked'));
    await userEvent.click(body.getByRole('menuitem', {
      name: 'Clear sort'
    }));
    await waitFor(() => check(!canvasElement.querySelector('[data-chip="sort"]'), 'sorting cleared'));

    // Numeric column wording.
    await openColumnMenu(canvasElement, 'Rate');
    await userEvent.click(body.getByRole('menuitem', {
      name: 'Sort'
    }));
    await waitFor(() => body.getByRole('menuitemradio', {
      name: 'Sort ascending'
    }));
    await closeMenu();
  }
}`,...(_t=(Yt=N.parameters)==null?void 0:Yt.docs)==null?void 0:_t.source},description:{story:`Sorting lives in its own submenu, as in the legacy table: "Sort ›" opens to
the right on hover, click, Enter or →. Text columns say A–Z / Z–A, numeric
ones ascending / descending; the active direction is checked; "Clear sort"
is disabled until the column is sorted. ← or Esc closes only the submenu.`,...(Jt=(Xt=N.parameters)==null?void 0:Xt.docs)==null?void 0:Jt.description}}};var Qt,ea,ta,aa,na;W.parameters={...W.parameters,docs:{...(Qt=W.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
  tags: ['kb:showcase-column-menu-configured'],
  name: 'Column menu · configured',
  render: args => <Demo {...args} columnMenu={{
    sections: [...defaultColumnMenu<Person>().sections, hidingSection(), exportSection]
  }} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: /^Level/
    }));
    const body = within(document.body);
    await waitFor(() => body.getByRole('menuitem', {
      name: 'Copy Level values'
    }));
    await userEvent.click(body.getByRole('menuitem', {
      name: 'Hide column'
    }));
    await waitFor(() => check(!canvasElement.querySelector('[data-header-id="level"]'), 'level hidden'));
  }
}`,...(ta=(ea=W.parameters)==null?void 0:ea.docs)==null?void 0:ta.source},description:{story:`Reconfigured menu: the owner passes its own list of sections — here the
defaults plus freeze, hide and a custom one. Order = order in the list.`,...(na=(aa=W.parameters)==null?void 0:aa.docs)==null?void 0:na.description}}};var oa,ra,sa,ia,ca;G.parameters={...G.parameters,docs:{...(oa=G.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  tags: ['kb:showcase-column-menu-off'],
  name: 'Column menu · off',
  render: args => <Demo {...args} columnMenu={false} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: /^Name/
    }));
    await waitFor(() => check(cellText(canvasElement, 0, 0) === 'Aigerim Sultanova', 'sorted by click'));
    check(!document.querySelector('[role=menu]'), 'no menu');
  }
}`,...(sa=(ra=G.parameters)==null?void 0:ra.docs)==null?void 0:sa.source},description:{story:"columnMenu={false}: no menu at all, a header click sorts directly.",...(ca=(ia=G.parameters)==null?void 0:ia.docs)==null?void 0:ca.description}}};var la,da,ma,ua,pa;Z.parameters={...Z.parameters,docs:{...(la=Z.parameters)==null?void 0:la.docs,source:{originalSource:`{
  tags: ['kb:showcase-row-actions'],
  name: 'Row actions',
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const before = canvasElement.querySelectorAll('[data-cell][data-column-id="name"]').length;
    await userEvent.click(within(canvasElement).getAllByRole('button', {
      name: 'Row Actions'
    })[0]);
    const body = within(document.body);
    await userEvent.click(await waitFor(() => body.getByRole('menuitem', {
      name: 'Duplicate'
    })));
    await waitFor(() => check(canvasElement.querySelectorAll('[data-cell][data-column-id="name"]').length === before + 1, 'row duplicated'));
  }
}`,...(ma=(da=Z.parameters)==null?void 0:da.docs)==null?void 0:ma.source},description:{story:`Row actions (⋮ in the last column): the list, hidden / disabled rules and
handlers come from the owner; the core renders the button and menu.`,...(pa=(ua=Z.parameters)==null?void 0:ua.docs)==null?void 0:pa.description}}};var ha,wa,ga,ya,ba;U.parameters={...U.parameters,docs:{...(ha=U.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  tags: ['kb:showcase-toolbar-and-status-bar'],
  name: 'Toolbar and status bar',
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(!canvasElement.querySelector('[role=status]'), 'no bar at first');

    // Sort via toolbar: add Team, then Level.
    let panel = within(await openControl(canvasElement, 'Sort'));
    await userEvent.click(panel.getByRole('button', {
      name: 'Sort by Team A–Z +'
    }));
    await waitFor(() => check(canvasElement.querySelector('[data-chip="sort"]')?.textContent === 'Team', 'single sort chip shows the column'));
    await userEvent.click(panel.getByRole('button', {
      name: 'Sort by Level A–Z +'
    }));
    await waitFor(() => check(canvasElement.querySelector('[data-chip="sort"]')?.textContent === '2 Sorts', 'two sorts collapse into "2 Sorts"'));
    await closePopover();

    // Chip opens the same panel; Z–A flips Team; remove Level.
    await userEvent.click(canvasElement.querySelector('[data-chip="sort"]') as HTMLElement);
    panel = within(await waitFor(() => within(document.body).getByRole('group')));
    const team = document.querySelector('[data-sort-item="team"]') as HTMLElement;
    await userEvent.click(team.querySelector('[data-action="sortDesc"]') as HTMLElement);
    await waitFor(() => check(team.querySelector('[data-action="sortDesc"]')?.getAttribute('aria-pressed') === 'true', 'direction switched'));
    await userEvent.click(document.querySelector('[data-sort-item="level"] [data-action="removeSort"]') as HTMLElement);
    await waitFor(() => check(canvasElement.querySelector('[data-chip="sort"]')?.textContent === 'Team', 'back to one sort'));
    await closePopover();

    // Group via toolbar: grouping chip appears after the sorting one.
    panel = within(await openControl(canvasElement, 'Group'));
    await userEvent.click(panel.getByRole('button', {
      name: 'Group by Team'
    }));
    await waitFor(() => check(canvasElement.querySelector('[data-lane-id="team"]'), 'grouped from toolbar'));
    await closePopover();
    const chips = Array.from(canvasElement.querySelectorAll<HTMLElement>('[data-chip]')).map(c => c.dataset.chip);
    check(chips.join(',') === 'sort,group', \`chip order, got \${chips}\`);

    // Clear all (shown on hover): bar disappears.
    await userEvent.click(canvasElement.querySelector('[data-clear-all]') as HTMLElement);
    await waitFor(() => check(!canvasElement.querySelector('[role=status]'), 'bar gone'));
  }
}`,...(ga=(wa=U.parameters)==null?void 0:wa.docs)==null?void 0:ga.source},description:{story:`Toolbar and status bar as in the legacy table. Toolbar: Group / Sort /
Columns on the left, each opens a panel. Status bar appears only when
something is applied: one chip per feature (a single sort shows the column
and direction, several show "N Sorts"); the chip opens the same panel.
"Clear all" appears on hover.`,...(ba=(ya=U.parameters)==null?void 0:ya.docs)==null?void 0:ba.description}}};var fa,va,Ea,ka,Sa;V.parameters={...V.parameters,docs:{...(fa=V.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  tags: ['kb:showcase-toolbar-configured'],
  name: 'Toolbar · configured',
  render: args => <Demo {...args} toolbar={table => <TableToolbar table={table} controls={[sortingControl<Person>(), exportControl]} start={<b style={{
    fontSize: 14
  }}>People</b>} end={<ToolbarButton>Presets</ToolbarButton>} />} statusBar={table => <TableStatusBar table={table} chips={defaultStatusChips<Person>()} adornment={<span style={{
    fontSize: 12
  }}>12 people</span>} />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const bar = within(canvasElement.querySelector('[role=toolbar]') as HTMLElement);
    check(!bar.queryByRole('button', {
      name: 'Group'
    }), 'no Group control');
    check(bar.getByRole('button', {
      name: 'Export'
    }), 'custom control');
    check(bar.getByRole('button', {
      name: 'Presets'
    }), 'end slot');
    check(canvasElement.querySelector('[role=status]'), 'adornment keeps bar');
    await openControl(canvasElement, 'Export');
    await userEvent.click(within(document.body).getByRole('button', {
      name: 'Export CSV'
    }));
    await waitFor(() => check(!document.querySelector('[data-panel="export"]'), 'closed'));
  }
}`,...(Ea=(va=V.parameters)==null?void 0:va.docs)==null?void 0:Ea.source},description:{story:`Reconfigured: the owner passes its own controls (Sort + a custom one),
content before and after the buttons, and an adornment in the status bar
(which then is always shown).`,...(Sa=(ka=V.parameters)==null?void 0:ka.docs)==null?void 0:Sa.description}}};var xa,Ca,Ra;he.parameters={...he.parameters,docs:{...(xa=he.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  tags: ['kb:showcase-fill-width'],
  name: 'Fill width',
  render: args => <Demo {...args} columns={fillColumns} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const el = await grid(canvasElement);
    // Narrow screen (phone): the columns are already wider than the table,
    // nothing to share out — they keep their size and the table scrolls.
    if (FILL_BASE >= el.clientWidth) {
      check(widthsOf(canvasElement).name === 120, 'no stretch when narrow');
      return;
    }
    await waitFor(() => check(el.scrollWidth === el.clientWidth, 'no horizontal scroll'));
    const before = widthsOf(canvasElement);
    const total = Object.values(before).reduce((a, b) => a + b, 0);
    check(Math.abs(total - el.clientWidth) <= 1, \`fills \${total}/\${el.clientWidth}\`);
    check(before['row-actions'] === 48, 'row actions stay 48px');
    check(before.name > 120, 'name stretched');

    // Resize Name by +40: exactly under the pointer, others give way.
    const resizer = canvasElement.querySelector('[data-header-id="name"] [data-resizer]') as HTMLElement;
    const rect = resizer.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + 4;
    const fire = (type: string, target: EventTarget, clientX: number) => target.dispatchEvent(new PointerEvent(type, {
      bubbles: true,
      clientX,
      clientY: y,
      button: 0
    }));
    fire('pointerdown', resizer, x);
    fire('pointermove', window, x + 40);
    fire('pointerup', window, x + 40);
    await waitFor(() => check(widthsOf(canvasElement).name === before.name + 40, 'resized under the pointer'));
    // Others give way down to their own size (Level 80, actions 48), then
    // the table scrolls.
    if (before.name + 40 + 80 + 48 <= el.clientWidth) check(el.scrollWidth === el.clientWidth, 'still fills');else check(el.scrollWidth > el.clientWidth, 'others not below own size');
    resizer.dispatchEvent(new MouseEvent('dblclick', {
      bubbles: true
    }));
    await waitFor(() => check(widthsOf(canvasElement).name === before.name, 'reset'));
  }
}`,...(Ra=(Ca=he.parameters)==null?void 0:Ca.docs)==null?void 0:Ra.source}}};var qa,Ba,Ta,Aa,Oa;K.parameters={...K.parameters,docs:{...(qa=K.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  tags: ['kb:showcase-no-fill'],
  name: 'Fill width · off',
  render: args => <Demo {...args} fill="natural" columns={peopleColumns.slice(0, 3)} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const el = await grid(canvasElement);
    check(widthsOf(canvasElement).name === 200, 'name keeps 200px');
    const row = el.querySelector<HTMLElement>('[data-row-id]');
    const columnsWidth = Object.values(widthsOf(canvasElement)).reduce((a, b) => a + b, 0);
    check(row && Math.round(row.getBoundingClientRect().width) === Math.max(columnsWidth, el.clientWidth), 'row spans the table (or the columns, when wider)');
  }
}`,...(Ta=(Ba=K.parameters)==null?void 0:Ba.docs)==null?void 0:Ta.source},description:{story:'fill="natural": columns keep their widths; rows still span the table.',...(Oa=(Aa=K.parameters)==null?void 0:Aa.docs)==null?void 0:Oa.description}}};var La,Ma,ja,Pa,Fa;Y.parameters={...Y.parameters,docs:{...(La=Y.parameters)==null?void 0:La.docs,source:{originalSource:`{
  tags: ['kb:showcase-reorder-in-panels'],
  name: 'Panels · reorder',
  render: args => <Demo {...args} initialState={{
    sorting: [{
      id: 'team',
      desc: false
    }, {
      id: 'level',
      desc: false
    }],
    grouping: ['team', 'level']
  }} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);

    // Sorting priority: Team ↓ below Level.
    await userEvent.click(canvasElement.querySelector('[data-chip="sort"]') as HTMLElement);
    await focusHandle('[data-sort-item="team"]');
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => check(idsIn('[data-sort-item]', 'data-sort-item').join() === 'level,team', 'sorting reordered'));
    check(document.activeElement?.closest('[data-sort-item]')?.getAttribute('data-sort-item') === 'team', 'focus stays on the moved item');
    await closePopover();

    // Grouping levels by pointer drag: Level above Team → lanes swap.
    await userEvent.click(canvasElement.querySelector('[data-chip="group"]') as HTMLElement);
    const handle = await waitFor(() => {
      const el = handleOf('[data-group-item="level"]');
      if (!el) throw new Error('no handle');
      return el;
    });
    const teamRow = document.querySelector('[data-group-item="team"]') as HTMLElement;
    const from = handle.getBoundingClientRect();
    const to = teamRow.getBoundingClientRect();
    const fire = (type: string, target: EventTarget, y: number) => target.dispatchEvent(new PointerEvent(type, {
      bubbles: true,
      clientX: from.left + 4,
      clientY: y,
      button: 0
    }));
    fire('pointerdown', handle, from.top + 4);
    fire('pointermove', window, to.top + 2);
    fire('pointerup', window, to.top + 2);
    await waitFor(() => check(idsIn('[data-lane-id]', 'data-lane-id').join() === 'level,team', 'grouping levels reordered'));
    await closePopover();

    // Column order: Role one step up (before Team).
    await openControl(canvasElement, 'Columns');
    await focusHandle('[data-column-item="role"]');
    await userEvent.keyboard('{ArrowUp}');
    await waitFor(() => {
      const listed = idsIn('[data-column-item]', 'data-column-item');
      check(listed.indexOf('role') < listed.indexOf('team'), \`column order changed: \${listed.join()}\`);
    });
    await closePopover();
  }
}`,...(ja=(Ma=Y.parameters)==null?void 0:Ma.docs)==null?void 0:ja.source},description:{story:`Order is editable in every panel, as in the legacy table: drag the ⋮⋮
handle (or focus it and press ↑ / ↓) to change sorting priority, grouping
levels and column order. Live, Esc while dragging restores the order.`,...(Fa=(Pa=Y.parameters)==null?void 0:Pa.docs)==null?void 0:Fa.description}}};var Ha,Da,$a,Ia,za;_.parameters={..._.parameters,docs:{...(Ha=_.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
  tags: ['kb:showcase-pinned-reorder'],
  name: 'Pinned · reorder',
  render: args => <Demo {...args} initialState={{
    columnPinning: {
      left: ['name', 'team']
    }
  }} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(headerIds(canvasElement).slice(0, 2).join() === 'name,team', 'start');

    // Team before Name.
    const nameRect = canvasElement.querySelector('[data-header-id="name"]')?.getBoundingClientRect();
    await dragHeader(canvasElement, 'team', (nameRect?.left ?? 0) + 2);
    await waitFor(() => check(headerIds(canvasElement).slice(0, 2).join() === 'team,name', 'pinned reordered'));
    check(canvasElement.querySelector('[data-header-id="team"]')?.getAttribute('data-pinned') === 'left', 'still pinned');

    // Dragged far right it stays the last pinned, not among the others.
    const grid0 = canvasElement.querySelector('[role=grid]') as HTMLElement;
    await dragHeader(canvasElement, 'team', grid0.getBoundingClientRect().right - 10);
    await waitFor(() => check(headerIds(canvasElement).slice(0, 2).join() === 'name,team', \`stays in pinned zone: \${headerIds(canvasElement).slice(0, 3)}\`));

    // Columns panel: pinned list of its own, ↑ on Team puts it first.
    await openControl(canvasElement, 'Columns');
    await focusHandle('[data-pinned-list] [data-column-item="team"]');
    await userEvent.keyboard('{ArrowUp}');
    await waitFor(() => check(headerIds(canvasElement).slice(0, 2).join() === 'team,name', 'reordered from the panel'));
    await closePopover();

    // Sticky offsets follow the on-screen order: Team at 0, Name after it.
    const leftOf = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-header-id="\${id}"]\`);
    const team = leftOf('team') as HTMLElement;
    const name = leftOf('name') as HTMLElement;
    check(team.style.left === '0px', \`team sticks at 0, got \${team.style.left}\`);
    check(name.style.left === \`\${Math.round(team.getBoundingClientRect().width)}px\`, \`name sticks after team, got \${name.style.left}\`);
    const cell = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-row-index="0"][data-column-id="\${id}"]\`);
    check(cell('team')?.style.left === '0px' && cell('name')?.style.left === name.style.left, 'cells stick like headers');
  }
}`,...($a=(Da=_.parameters)==null?void 0:Da.docs)==null?void 0:$a.source},description:{story:`Pinned columns reorder among themselves — by the header grip or in the
Columns panel — and never leave the pinned zone; the rest reorder among
the rest. Pinned order is the pinning list, so it is kept in state.`,...(za=(Ia=_.parameters)==null?void 0:Ia.docs)==null?void 0:za.description}}};var Na,Wa,Ga,Za,Ua;X.parameters={...X.parameters,docs:{...(Na=X.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  tags: ['kb:showcase-pinned-grouped-column'],
  name: 'Pinned · grouped column',
  render: args =>
  // Narrow on purpose, so there is something to scroll on any screen.
  <div style={{
    width: 700
  }}>
            <Demo {...args} initialState={{
      columnPinning: {
        left: ['name', 'role']
      },
      grouping: ['role']
    }} />
        </div>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const el = await grid(canvasElement);
    const lane = canvasElement.querySelector<HTMLElement>('[data-lane-id="role"]') as HTMLElement;
    const name = canvasElement.querySelector<HTMLElement>('[data-header-id="name"]') as HTMLElement;
    check(lane.dataset.pinned === 'left', 'lane is pinned');
    check(name.style.left === \`\${lane.getBoundingClientRect().width}px\`, 'name after lane');
    const x0 = el.getBoundingClientRect().left;
    el.scrollLeft = 300;
    el.dispatchEvent(new Event('scroll'));
    await waitFor(() => {
      check(Math.round(lane.getBoundingClientRect().left - x0) === 0, 'lane header sticks');
      const block = canvasElement.querySelector<HTMLElement>('[data-group-level="0"]') as HTMLElement;
      check(Math.abs(block.getBoundingClientRect().left - x0) <= 1, \`lane block sticks, at \${block.getBoundingClientRect().left - x0}\`);
      check(Math.round(name.getBoundingClientRect().left - x0) === Math.round(lane.getBoundingClientRect().width), 'name sticks after the lane');
      check(el.dataset.underLeft === 'true', 'edge border on');
    });
  }
}`,...(Ga=(Wa=X.parameters)==null?void 0:Wa.docs)==null?void 0:Ga.source},description:{story:`A grouped column that is pinned stays pinned as its lane: the lane sticks
at the left edge, pinned columns stick right after it, the edge border
appears only once something actually goes under the pinned zone.`,...(Ua=(Za=X.parameters)==null?void 0:Za.docs)==null?void 0:Ua.description}}};var Va,Ka,Ya,_a,Xa;J.parameters={...J.parameters,docs:{...(Va=J.parameters)==null?void 0:Va.docs,source:{originalSource:`{
  tags: ['kb:showcase-pinned-edge-after-lanes'],
  name: 'Pinned · edge after lanes',
  render: args => <div style={{
    width: 700
  }}>
            <Demo {...args} initialState={{
      columnPinning: {
        left: ['name']
      },
      grouping: ['role']
    }} />
        </div>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const el = await grid(canvasElement);
    el.scrollLeft = 100;
    el.dispatchEvent(new Event('scroll'));
    await waitFor(() => check(el.dataset.underLeft === 'false', 'no border while lane leaves'));
    el.scrollLeft = 260;
    el.dispatchEvent(new Event('scroll'));
    await waitFor(() => check(el.dataset.underLeft === 'true', 'border once Name sticks'));
  }
}`,...(Ya=(Ka=J.parameters)==null?void 0:Ka.docs)==null?void 0:Ya.source},description:{story:"Unpinned grouping before pinned Name: no edge border until it has left.",...(Xa=(_a=J.parameters)==null?void 0:_a.docs)==null?void 0:Xa.description}}};var Ja,Qa,en,tn,an;Q.parameters={...Q.parameters,docs:{...(Ja=Q.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
  tags: ['kb:showcase-chain-required'],
  name: 'Column chains · required members',
  render: args => <Demo {...args} chains={[locationChain]} initialState={expandedLocation} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const before = headerIds(canvasElement).join();

    // Rate dropped between Country and Tier: refused.
    await dragHeader(canvasElement, 'rate', headerLeft(canvasElement, 'tier') + 2);
    // Tier pulled far right: refused (required).
    await dragHeader(canvasElement, 'tier', gridRight(canvasElement) - 10);
    await new Promise(r => {
      setTimeout(r, 300);
    });
    check(headerIds(canvasElement).join() === before, 'order unchanged');

    // Tier before Country: reorder inside the chain is fine.
    await dragHeader(canvasElement, 'tier', headerLeft(canvasElement, 'country') + 2);
    await waitFor(() => {
      const ids = headerIds(canvasElement);
      check(ids.indexOf('tier') === ids.indexOf('country') - 1, \`tier moved inside the chain: \${ids}\`);
    });
  }
}`,...(en=(Qa=Q.parameters)==null?void 0:Qa.docs)==null?void 0:en.source},description:{story:`Required members (Country, Tier) reorder among themselves but cannot leave;
a column the chain does not accept (Rate) cannot be dropped inside it.`,...(an=(tn=Q.parameters)==null?void 0:tn.docs)==null?void 0:an.description}}};var nn,on,rn,sn,cn;ee.parameters={...ee.parameters,docs:{...(nn=ee.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  tags: ['kb:showcase-chain-optional'],
  name: 'Column chains · optional member leaves and returns',
  render: args => <Demo {...args} chains={[locationChain]} initialState={expandedLocation} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const chainOf = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-header-id="\${id}"]\`)?.dataset.chain;
    await dragHeader(canvasElement, 'city', gridRight(canvasElement) - 10);
    await waitFor(() => check(!chainOf('city'), 'city left the chain'));
    await dragHeader(canvasElement, 'city', headerLeft(canvasElement, 'tier') + 2);
    await waitFor(() => check(chainOf('city') === 'expanded', 'city is back in the chain'));
    check(!hint(canvasElement), 'no hint after the drop');
  }
}`,...(rn=(on=ee.parameters)==null?void 0:on.docs)==null?void 0:rn.source},description:{story:`Optional member (City): dragged away it leaves the chain ("Leaves
Location" on the ghost), dropped back inside it joins again.`,...(cn=(sn=ee.parameters)==null?void 0:sn.docs)==null?void 0:cn.description}}};var ln,dn,mn,un,pn;te.parameters={...te.parameters,docs:{...(ln=te.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  tags: ['kb:showcase-showcase-overview'],
  name: 'Showcase · overview',
  render: args => <Demo {...args} frameHeight={520} initialState={{
    grouping: ['team'],
    sorting: [{
      id: 'name',
      desc: false
    }],
    columnPinning: {
      left: ['name']
    }
  }} />
}`,...(mn=(dn=te.parameters)==null?void 0:dn.docs)==null?void 0:mn.source},description:{story:"Grouped by Team and Level, sorted by Name: lanes, chips, toolbar.",...(pn=(un=te.parameters)==null?void 0:un.docs)==null?void 0:pn.description}}};var hn,wn,gn,yn,bn;ae.parameters={...ae.parameters,docs:{...(hn=ae.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  tags: ['kb:showcase-showcase-column-menu'],
  name: 'Showcase · column menu',
  render: args => <Demo {...args} frameHeight={520} />,
  play: async ctx => {
    // Showcase: opens its UI state in the story view (not on Docs).
    if (ctx.viewMode === 'docs') return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await openColumnMenu(canvasElement, 'Name');
    await click(within(document.body).getByRole('menuitem', {
      name: 'Sort'
    }));
    await inBody('[data-column-submenu="sort"]');
  }
}`,...(gn=(wn=ae.parameters)==null?void 0:wn.docs)==null?void 0:gn.source},description:{story:"Header click opens the column menu; Sort opens its submenu.",...(bn=(yn=ae.parameters)==null?void 0:yn.docs)==null?void 0:bn.description}}};var fn,vn,En,kn,Sn;ne.parameters={...ne.parameters,docs:{...(fn=ne.parameters)==null?void 0:fn.docs,source:{originalSource:`{
  tags: ['kb:showcase-showcase-sorting-panel'],
  name: 'Showcase · sorting panel',
  render: args => <Demo {...args} frameHeight={520} initialState={{
    sorting: [{
      id: 'team',
      desc: false
    }, {
      id: 'level',
      desc: true
    }]
  }} />,
  play: async ctx => {
    // Showcase: opens its UI state in the story view (not on Docs).
    if (ctx.viewMode === 'docs') return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await click(canvasElement.querySelector('[data-chip="sort"]'));
    await inBody('[data-panel="sorting"]');
  }
}`,...(En=(vn=ne.parameters)==null?void 0:vn.docs)==null?void 0:En.source},description:{story:"Sorting panel from the status bar chip: priority, direction, add.",...(Sn=(kn=ne.parameters)==null?void 0:kn.docs)==null?void 0:Sn.description}}};var xn,Cn,Rn,qn,Bn;oe.parameters={...oe.parameters,docs:{...(xn=oe.parameters)==null?void 0:xn.docs,source:{originalSource:`{
  tags: ['kb:showcase-showcase-columns-panel'],
  name: 'Showcase · columns panel',
  render: args => <Demo {...args} frameHeight={520} initialState={{
    columnPinning: {
      left: ['name']
    }
  }} />,
  play: async ctx => {
    // Showcase: opens its UI state in the story view (not on Docs).
    if (ctx.viewMode === 'docs') return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await openControl(canvasElement, 'Columns');
  }
}`,...(Rn=(Cn=oe.parameters)==null?void 0:Cn.docs)==null?void 0:Rn.source},description:{story:"Columns panel: pinned list on top, order by drag, show / hide, pin.",...(Bn=(qn=oe.parameters)==null?void 0:qn.docs)==null?void 0:Bn.description}}};var Tn,An,On,Ln,Mn;re.parameters={...re.parameters,docs:{...(Tn=re.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
  tags: ['kb:showcase-showcase-row-actions'],
  name: 'Showcase · row actions',
  render: args => <Demo {...args} frameHeight={520} />,
  play: async ctx => {
    // Showcase: opens its UI state in the story view (not on Docs).
    if (ctx.viewMode === 'docs') return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await click(canvasElement.querySelector('[aria-label="Row Actions"]'));
    await inBody('[role=menu]');
  }
}`,...(On=(An=re.parameters)==null?void 0:An.docs)==null?void 0:On.source},description:{story:"Row actions menu (⋮): hidden / disabled items decided by the owner.",...(Mn=(Ln=re.parameters)==null?void 0:Ln.docs)==null?void 0:Mn.description}}};var jn,Pn,Fn,Hn,Dn;se.parameters={...se.parameters,docs:{...(jn=se.parameters)==null?void 0:jn.docs,source:{originalSource:`{
  tags: ['kb:showcase-showcase-chain-expanded'],
  name: 'Showcase · column chain',
  render: args => <Demo {...args} frameHeight={520} chains={[locationChain]} initialState={{
    columnChainExpanded: {
      location: true
    }
  }} />
}`,...(Fn=(Pn=se.parameters)==null?void 0:Pn.docs)==null?void 0:Fn.source},description:{story:"Expanded chain: tinted members, primary underlined, collapse button.",...(Dn=(Hn=se.parameters)==null?void 0:Hn.docs)==null?void 0:Dn.description}}};var $n,In,zn,Nn,Wn;ie.parameters={...ie.parameters,docs:{...($n=ie.parameters)==null?void 0:$n.docs,source:{originalSource:`{
  tags: ['kb:showcase-showcase-pinned-lane'],
  name: 'Showcase · pinned lane',
  render: args => <div style={{
    width: 900
  }}>
            <Demo {...args} frameHeight={520} initialState={{
      columnPinning: {
        left: ['name', 'role']
      },
      grouping: ['role']
    }} />
        </div>,
  play: async ctx => {
    // Showcase: opens its UI state in the story view (not on Docs).
    if (ctx.viewMode === 'docs') return;
    const {
      canvasElement
    } = ctx;
    const el = await grid(canvasElement);
    el.scrollLeft = 320;
    el.dispatchEvent(new Event('scroll'));
  }
}`,...(zn=(In=ie.parameters)==null?void 0:In.docs)==null?void 0:zn.source},description:{story:"Pinned + grouped column: its lane sticks, pinned Name after it.",...(Wn=(Nn=ie.parameters)==null?void 0:Nn.docs)==null?void 0:Wn.description}}};var Gn,Zn,Un,Vn,Kn;ce.parameters={...ce.parameters,docs:{...(Gn=ce.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
  tags: ['kb:showcase-fixed-height-box'],
  name: 'Fixed height · inside a page',
  args: {
    rows: 40
  },
  render: args => <div style={{
    padding: 24,
    maxWidth: 1100,
    fontSize: 14,
    color: '#303240'
  }}>
            <h3 style={{
      margin: '0 0 8px'
    }}>Team roster</h3>
            <p style={{
      margin: '0 0 12px',
      color: '#6C6F80'
    }}>
                The table takes the box it is given (here 360px) and scrolls inside it.
            </p>
            <div style={{
      border: '1px solid #E1E3EB',
      borderRadius: 6
    }}>
                <Demo {...args} frameHeight={360} />
            </div>
            <p style={{
      margin: '12px 0 0',
      color: '#6C6F80'
    }}>
                Content below the table stays in the normal page flow.
            </p>
        </div>
}`,...(Un=(Zn=ce.parameters)==null?void 0:Zn.docs)==null?void 0:Un.source},description:{story:`Not full height: the table inside a page, in a box of fixed height. It
scrolls inside the box; toolbar and status bar stay put.`,...(Kn=(Vn=ce.parameters)==null?void 0:Vn.docs)==null?void 0:Kn.description}}};const Wo=["Basic","WithoutToolbar","Sorting","Grouping","GroupingCollapsed","GroupingTwoLevels","HiddenGrouping","ColumnChains","ColumnChainsFirstShown","Pinned","Keyboard","Editing","ReadOnly","RowOrder","LargeData","ColumnMenu","ColumnMenuSortSubmenu","ColumnMenuConfigured","ColumnMenuOff","RowActions","ToolbarAndStatusBar","ToolbarConfigured","FillWidth","NoFill","ReorderInPanels","PinnedReorder","PinnedGroupedColumn","PinnedEdgeAfterLanes","ChainRequired","ChainOptional","ShowcaseOverview","ShowcaseColumnMenu","ShowcaseSortingPanel","ShowcaseColumnsPanel","ShowcaseRowActions","ShowcaseChainExpanded","ShowcasePinnedLane","FixedHeightBox"];export{q as Basic,ee as ChainOptional,Q as ChainRequired,j as ColumnChains,P as ColumnChainsFirstShown,z as ColumnMenu,W as ColumnMenuConfigured,G as ColumnMenuOff,N as ColumnMenuSortSubmenu,D as Editing,he as FillWidth,ce as FixedHeightBox,A as Grouping,O as GroupingCollapsed,L as GroupingTwoLevels,M as HiddenGrouping,H as Keyboard,I as LargeData,K as NoFill,F as Pinned,J as PinnedEdgeAfterLanes,X as PinnedGroupedColumn,_ as PinnedReorder,$ as ReadOnly,Y as ReorderInPanels,Z as RowActions,pe as RowOrder,se as ShowcaseChainExpanded,ae as ShowcaseColumnMenu,oe as ShowcaseColumnsPanel,te as ShowcaseOverview,ie as ShowcasePinnedLane,re as ShowcaseRowActions,ne as ShowcaseSortingPanel,T as Sorting,U as ToolbarAndStatusBar,V as ToolbarConfigured,B as WithoutToolbar,Wo as __namedExportsOrder,No as default};
