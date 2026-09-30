import{j as s}from"./styles-DXLXEQ3H.js";import{w as r,u as c,a as h}from"./index-DLqD3z3M.js";import{r as ye}from"./index-BjhrbhTf.js";import{d as ao,p as no,h as oo,T as ro}from"./TableCore-kOYdxPhk.js";import{c as Kn}from"./RowActions-CWt-61bw.js";import{T as Yn,d as so}from"./TableStatusBar-BHCIeSi2.js";import{T as _n,s as io,a as co}from"./TableToolbar-C0bTLKMD.js";import{p as de,s as lo,m as mo}from"./fixtures-CCjjPTo2.js";import{c as u}from"./play-kit-Bu4SXy9H.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./panels-D6DlFR9J.js";import"./createSvgIcon-s1BrOgA2.js";const uo=(t,e)=>[{id:"duplicate",label:"Duplicate",onClick:()=>e(a=>{const o=a.findIndex(i=>i.id===t.id),l={...t.original,id:`${t.id}-copy-${a.length}`};return[...a.slice(0,o+1),l,...a.slice(o+1)]})},{id:"exclude",label:"Exclude from calculation",disabled:t.original.state==="excluded",disabledReason:"Already excluded",onClick:()=>e(a=>a.map(o=>o.id===t.id?{...o,state:"excluded"}:o))},{id:"delete",label:"Delete",hidden:t.original.state==="blocked",onClick:()=>e(a=>a.filter(o=>o.id!==t.id))}],po=t=>s.jsxDEV(_n,{table:t},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:59,columnNumber:49},void 0),ho=t=>s.jsxDEV(Yn,{table:t},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:60,columnNumber:51},void 0),p=({readOnly:t,rowHeight:e,rows:a,withToolbar:o,withStatusBar:l,frameHeight:i="100vh",...d})=>{const[w,b]=ye.useState(()=>mo(a)),g=ye.useCallback((y,f,E)=>{b(to=>to.map(we=>we.id===y?{...we,[f]:E}:we))},[]);return s.jsxDEV("div",{style:{height:i,padding:16,boxSizing:"border-box"},children:s.jsxDEV(ro,{data:w,columns:[...de,Kn(y=>uo(y,b))],getRowId:y=>y.id,readOnly:t,rowHeight:e,meta:{onEdit:g},toolbar:o?po:void 0,statusBar:l?ho:void 0,...d},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:85,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:80,columnNumber:10},void 0)},Mo={title:"Tables/Table Core/Draft/Showcase",render:t=>s.jsxDEV(p,{...t},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:92,columnNumber:19},void 0),args:{readOnly:!1,rowHeight:48,rows:12,withToolbar:!0,withStatusBar:!0},argTypes:{rowHeight:{control:{type:"range",min:28,max:64,step:4}}},parameters:{layout:"fullscreen",docs:{codePanel:!0,story:{inline:!1,height:"560px"}}}},m=t=>r(()=>{const e=t.querySelector("[role=grid]");if(!e||!e.querySelector("[data-cell]"))throw new Error("grid not ready");return e}),me=(t,e,a)=>{var o;return(o=t.querySelector(`[data-row-index="${e}"][data-col-index="${a}"]`))==null?void 0:o.textContent},S=t=>t.querySelector('[data-selection="active"]'),le=async(t,e)=>(await c.click(h(await m(t)).getByRole("button",{name:new RegExp(`^${e}`)})),r(()=>h(document.body).getByRole("menu"))),Se=async()=>{const t=!!document.querySelector("[data-column-submenu]");await c.keyboard("{Escape}"),t&&await c.keyboard("{Escape}"),await r(()=>{if(document.querySelector("[role=menu]"))throw new Error("menu open")},{timeout:3e3})},ve=async(t,e,a)=>{await le(t,e),await c.click(h(document.body).getByRole("menuitem",{name:"Sort"}));const o=await r(()=>h(document.body).getByRole("menuitemradio",{name:a}));await c.click(o)},n=(t,e)=>{if(!t)throw new Error(`Story check failed: ${e}`)},R={tags:["kb:showcase-basic"]},q={tags:["kb:showcase-without-toolbar"],name:"Without toolbar (slots omitted)",args:{withToolbar:!1,withStatusBar:!1},play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),n(!e.querySelector("[role=toolbar]"),"no toolbar")}},D={tags:["kb:showcase-sorting"],play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),await ve(e,"Name","Sort A–Z"),await r(()=>n(me(e,0,0)==="Aigerim Sultanova","sorted asc")),n(e.querySelector('[data-chip="sort"]'),"sort chip shown")}},B={tags:["kb:showcase-grouping"],render:t=>s.jsxDEV(p,{...t,initialState:{grouping:["team"],columnPinning:{left:["name"],right:[]}}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:213,columnNumber:19},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),n(e.querySelectorAll("[data-group-id]").length===4,"4 group cells in the lane"),n(!e.querySelector('[data-header-id="team"]'),"team left the body columns"),n(e.querySelector('[data-lane-id="team"]'),"team lane header"),n(e.querySelector('[data-chip="group"]'),"group chip");const a=e.querySelector("[data-group-id]");n(((a==null?void 0:a.getBoundingClientRect().height)??0)>=143,"group cell spans its 3 rows");const o=h(a).getByRole("checkbox");await c.click(o),await r(()=>n(o.getAttribute("aria-checked")==="true","group checkbox selects the whole group"))}},T={tags:["kb:showcase-grouping-collapsed"],name:"Grouping · collapse",render:t=>s.jsxDEV(p,{...t,initialState:{grouping:["team"]}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:242,columnNumber:19},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=e.querySelectorAll("[data-cell]").length;await c.click(h(e).getAllByRole("button",{name:"Collapse group"})[0]),await r(()=>n(e.querySelector("[data-collapsed-group]"),"placeholder row for the collapsed group")),n(e.querySelectorAll("[data-cell]").length<a,"rows hidden")}},A={tags:["kb:showcase-grouping-two-levels"],name:"Grouping · two levels",render:t=>s.jsxDEV(p,{...t,rows:20,initialState:{grouping:["country","team"]}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:264,columnNumber:19},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),n(e.querySelector('[data-group-level="1"]'),"second lane")}},O={tags:["kb:showcase-hidden-grouping"],name:"Hidden grouping (no chip)",render:t=>s.jsxDEV(p,{...t,columns:[lo,...de],initialState:{grouping:["state"],columnVisibility:{state:!1}}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:285,columnNumber:19},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),n(e.querySelectorAll("[data-group-id]").length===3,"3 groups"),n(!e.querySelector("[data-chip]"),"no chips at all"),n(!e.querySelector("[role=status]"),"no status bar")}},ue={id:"location",label:"Location",columns:["country","tier",{id:"city",optional:!0}]},M={tags:["kb:showcase-column-chains"],name:"Column chains",render:t=>s.jsxDEV(p,{...t,chains:[ue]},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:319,columnNumber:19},void 0),play:async t=>{var l,i,d,w;if(u(t))return;const{canvasElement:e}=t;await m(e);const a=()=>{var b;return((b=e.querySelector("[role=row]"))==null?void 0:b.textContent)??""};n(!a().includes("Tier"),"collapsed: tier hidden"),await c.click(h(e).getByRole("button",{name:"Expand columns"})),await r(()=>n(a().includes("City")&&a().includes("Tier"),"expanded"));const o=b=>e.querySelector(`[data-header-id="${b}"]`);n(["country","tier","city"].every(b=>{var g;return((g=o(b))==null?void 0:g.dataset.chain)==="expanded"}),"members marked expanded"),n(((l=o("country"))==null?void 0:l.dataset.chainPrimary)==="true","primary marked"),n(((i=o("city"))==null?void 0:i.querySelector("[data-chain-toggle]"))&&!((d=o("country"))!=null&&d.querySelector("[data-chain-toggle]")),"collapse button on the last member"),await c.click(h(e).getByRole("button",{name:"Collapse columns"})),await r(()=>n(!a().includes("City"),"collapsed again")),n(!!((w=o("country"))!=null&&w.querySelector("[data-chain-toggle]")),"expand button back on the primary")}},j={tags:["kb:showcase-column-chains-first-shown"],name:"Column chains · first member is shown",render:t=>s.jsxDEV(p,{...t,chains:[ue],initialState:{columnChainExpanded:{location:!0}}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:349,columnNumber:19},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=o=>e.querySelector(`[data-header-id="${o}"]`);await k(e,"tier",ge(e,"country")+2),await r(()=>{var o;return n(((o=a("tier"))==null?void 0:o.dataset.chainPrimary)==="true","Tier first")}),await c.click(h(e).getByRole("button",{name:"Collapse columns"})),await r(()=>n(!a("country")&&!!a("tier"),"collapsed to Tier"))}},L={tags:["kb:showcase-pinned"],render:t=>s.jsxDEV("div",{style:{width:700},children:s.jsxDEV(p,{...t,initialState:{columnPinning:{left:["name"],right:[]}}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:376,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:373,columnNumber:19},void 0)},P={tags:["kb:showcase-keyboard"],play:async t=>{var a;if(u(t))return;const{canvasElement:e}=t;await m(e),await c.click(e.querySelector('[data-row-index="0"][data-col-index="1"]')),await c.keyboard("{ArrowDown}{ArrowRight}"),await r(()=>{var o;return n(((o=S(e))==null?void 0:o.dataset.colIndex)==="2","moved right")}),n(((a=S(e))==null?void 0:a.dataset.rowIndex)==="1","moved down"),await r(()=>n(document.activeElement===S(e),"focus follows")),await c.keyboard("{End}"),await c.keyboard("{Tab}"),await r(()=>{var o,l;return n(((o=S(e))==null?void 0:o.dataset.rowIndex)==="2"&&((l=S(e))==null?void 0:l.dataset.colIndex)==="0","Tab wraps to next row")}),await c.keyboard("{Shift>}{Tab}{/Shift}"),await r(()=>{var o;return n(((o=S(e))==null?void 0:o.dataset.rowIndex)==="1","Shift+Tab wraps back")}),await c.keyboard("{Shift>}{ArrowLeft}{ArrowLeft}{/Shift}"),await r(()=>n(e.querySelectorAll('[data-selection="range"]').length===2,"range of 3 cells"))}},F={tags:["kb:showcase-editing"],play:async t=>{var o,l,i;if(u(t))return;const{canvasElement:e}=t;await m(e),await c.click(e.querySelector('[data-row-index="0"][data-col-index="0"]')),await c.keyboard("{Enter}");const a=await r(()=>{const d=e.querySelector("[data-editor]");if(!d)throw new Error("editor not open");return d});(l=(o=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value"))==null?void 0:o.set)==null||l.call(a,"Renamed"),a.dispatchEvent(new Event("input",{bubbles:!0})),await new Promise(d=>{setTimeout(d,50)}),a.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0})),await r(()=>n(me(e,0,0)==="Renamed","value committed")),n(((i=S(e))==null?void 0:i.dataset.rowIndex)==="1","moved down after Enter")}},H={tags:["kb:showcase-read-only"],args:{readOnly:!0},play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),await c.dblClick(e.querySelector('[data-row-index="0"][data-col-index="0"]')),await c.keyboard("{Enter}"),n(!e.querySelector("[data-editor]"),"no editor")}},go=t=>{const[e,a]=ye.useState([]);return s.jsxDEV("div",{children:[s.jsxDEV(p,{...t,frameHeight:"calc(100vh - 36px)",onRowOrderChange:a},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:465,columnNumber:13},void 0),s.jsxDEV("pre",{"data-row-order":!0,style:{padding:"0 16px",fontSize:12},children:["onRowOrderChange → ",e.join(", ")]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:466,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:464,columnNumber:10},void 0)},pe={tags:["kb:showcase-row-order"],name:"Row order out (onRowOrderChange)",render:t=>s.jsxDEV(go,{...t},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:477,columnNumber:19},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=()=>{var o;return((o=e.querySelector("[data-row-order]"))==null?void 0:o.textContent)??""};n(a().includes("p1, p2, p3"),"initial order"),await ve(e,"Rate","Sort ascending"),await r(()=>n(!a().includes("p1, p2, p3"),"order changed after sort"))}},U={tags:["kb:showcase-large-data"],name:"5 000 rows (virtualized)",args:{rows:5e3},play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),n(e.querySelectorAll("[role=row]").length<60,"virtualized")}},V={tags:["kb:showcase-column-menu"],name:"Column menu · default (sort + group)",play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),await c.click(h(e).getByRole("button",{name:/^Team/}));const a=h(document.body);await r(()=>a.getByRole("menuitem",{name:"Group by Team"})),n(!a.queryByRole("menuitem",{name:"Hide column"}),"hide is not in the default menu"),await c.click(a.getByRole("menuitem",{name:"Group by Team"})),await r(()=>n(e.querySelector('[data-lane-id="team"]'),"grouped via menu"))}},$={tags:["kb:showcase-column-menu-sort-submenu"],name:"Column menu · sort submenu",play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=h(document.body),o=()=>document.querySelector('[data-column-submenu="sort"]');await le(e,"Name");const l=a.getByRole("menuitem",{name:"Sort"});n(l.getAttribute("aria-haspopup")==="menu","Sort has a submenu"),n(!o(),"submenu closed at first"),await c.hover(l),await r(()=>n(o(),"hover opens submenu"),{timeout:3e3}),n(a.getByRole("menuitem",{name:"Clear sort"}).getAttribute("aria-disabled")==="true","clear sort disabled while unsorted"),await c.unhover(l),await r(()=>n(!o(),"leaving closes submenu"),{timeout:3e3}),l.focus(),await c.keyboard("{ArrowRight}"),await r(()=>{var i;return n(((i=document.activeElement)==null?void 0:i.textContent)==="Sort A–Z","focus moved into submenu")}),await c.keyboard("{ArrowLeft}"),await r(()=>n(!o(),"← closes submenu")),await r(()=>{var i,d,w;return n(document.activeElement===l,`focus back on Sort, got ${(i=document.activeElement)==null?void 0:i.tagName} "${(w=(d=document.activeElement)==null?void 0:d.textContent)==null?void 0:w.slice(0,30)}"`)}),n(a.queryByRole("menu"),"main menu still open"),await Se(),await ve(e,"Name","Sort Z–A"),await r(()=>{const i=me(e,0,0)??"",d=me(e,1,0)??"";n(i.localeCompare(d)>0,"sorted Z–A")}),n(!a.queryByRole("menu"),"menu closed after pick"),await le(e,"Name"),await c.click(a.getByRole("menuitem",{name:"Sort"})),await r(()=>n(a.getByRole("menuitemradio",{name:"Sort Z–A"}).getAttribute("aria-checked")==="true","active direction checked")),await c.click(a.getByRole("menuitem",{name:"Clear sort"})),await r(()=>n(!e.querySelector('[data-chip="sort"]'),"sorting cleared")),await le(e,"Rate"),await c.click(a.getByRole("menuitem",{name:"Sort"})),await r(()=>a.getByRole("menuitemradio",{name:"Sort ascending"})),await Se()}},wo={id:"export",getItems:({label:t})=>[{id:"copyValues",label:`Copy ${t} values`,onClick:()=>{}}]},I={tags:["kb:showcase-column-menu-configured"],name:"Column menu · configured",render:t=>s.jsxDEV(p,{...t,columnMenu:[...ao,no,oo,wo]},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:639,columnNumber:19},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),await c.click(h(e).getByRole("button",{name:/^Level/}));const a=h(document.body);await r(()=>a.getByRole("menuitem",{name:"Copy Level values"})),await c.click(a.getByRole("menuitem",{name:"Hide column"})),await r(()=>n(!e.querySelector('[data-header-id="level"]'),"level hidden"))}},z={tags:["kb:showcase-column-menu-off"],name:"Column menu · off",render:t=>s.jsxDEV(p,{...t,columnMenu:!1},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:664,columnNumber:19},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),await c.click(h(e).getByRole("button",{name:/^Name/})),await r(()=>n(me(e,0,0)==="Aigerim Sultanova","sorted by click")),n(!document.querySelector("[role=menu]"),"no menu")}},W={tags:["kb:showcase-row-actions"],name:"Row actions",play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=e.querySelectorAll('[data-cell][data-column-id="name"]').length;await c.click(h(e).getAllByRole("button",{name:"Row Actions"})[0]);const o=h(document.body);await c.click(await r(()=>o.getByRole("menuitem",{name:"Duplicate"}))),await r(()=>n(e.querySelectorAll('[data-cell][data-column-id="name"]').length===a+1,"row duplicated"))}},N=async(t,e)=>(await c.click(h(t.querySelector("[role=toolbar]")).getByRole("button",{name:e})),r(()=>h(document.body).getByRole("group"))),x=async()=>{var t,e;(e=(t=document.querySelector("[data-panel]"))==null?void 0:t.querySelector("input, button"))==null||e.focus(),await c.keyboard("{Escape}"),await r(()=>{if(document.querySelector("[data-panel]"))throw new Error("panel open")},{timeout:3e3})},G={tags:["kb:showcase-toolbar-and-status-bar"],name:"Toolbar and status bar",play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e),n(!e.querySelector("[role=status]"),"no bar at first");let a=h(await N(e,"Sort"));await c.click(a.getByRole("button",{name:"Sort by Team A–Z"})),await r(()=>{var i;return n(((i=e.querySelector('[data-chip="sort"]'))==null?void 0:i.textContent)==="Team","single sort chip shows the column")}),await c.click(a.getByRole("button",{name:"Sort by Level A–Z"})),await r(()=>{var i;return n(((i=e.querySelector('[data-chip="sort"]'))==null?void 0:i.textContent)==="2 Sorts",'two sorts collapse into "2 Sorts"')}),await x(),await c.click(e.querySelector('[data-chip="sort"]')),a=h(await r(()=>h(document.body).getByRole("group")));const o=document.querySelector('[data-sort-item="team"]');await c.click(o.querySelector('[data-direction="desc"]')),await r(()=>{var i;return n(((i=o.querySelector('[data-direction="desc"]'))==null?void 0:i.getAttribute("aria-pressed"))==="true","direction switched")}),await c.click(document.querySelector('[data-sort-item="level"] [data-remove]')),await r(()=>{var i;return n(((i=e.querySelector('[data-chip="sort"]'))==null?void 0:i.textContent)==="Team","back to one sort")}),await x(),a=h(await N(e,"Group")),await c.click(a.getByRole("button",{name:"Group by Team"})),await r(()=>n(e.querySelector('[data-lane-id="team"]'),"grouped from toolbar")),await x();const l=Array.from(e.querySelectorAll("[data-chip]")).map(i=>i.dataset.chip);n(l.join(",")==="sort,group",`chip order, got ${l}`),await c.click(e.querySelector("[data-clear-all]")),await r(()=>n(!e.querySelector("[role=status]"),"bar gone"))}},bo={id:"export",label:"Export",icon:s.jsxDEV("span",{"aria-hidden":!0,children:"⤓"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:780,columnNumber:9},void 0),renderPanel:({close:t})=>s.jsxDEV("div",{role:"group","data-panel":"export",style:{padding:12},children:s.jsxDEV("button",{type:"button",onClick:t,children:"Export CSV"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:786,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:783,columnNumber:9},void 0)},Z={tags:["kb:showcase-toolbar-configured"],name:"Toolbar · configured",render:t=>s.jsxDEV(p,{...t,toolbar:e=>s.jsxDEV(_n,{table:e,controls:[io,bo],start:s.jsxDEV("b",{style:{fontSize:14},children:"People"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:800,columnNumber:131},void 0),end:s.jsxDEV(co,{type:"button",children:"Presets"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:802,columnNumber:23},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:800,columnNumber:53},void 0),statusBar:e=>s.jsxDEV(Yn,{table:e,chips:so,adornment:s.jsxDEV("span",{style:{fontSize:12},children:"12 people"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:802,columnNumber:169},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:802,columnNumber:101},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:800,columnNumber:19},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=h(e.querySelector("[role=toolbar]"));n(!a.queryByRole("button",{name:"Group"}),"no Group control"),n(a.getByRole("button",{name:"Export"}),"custom control"),n(a.getByRole("button",{name:"Presets"}),"end slot"),n(e.querySelector("[role=status]"),"adornment keeps bar"),await N(e,"Export"),await c.click(h(document.body).getByRole("button",{name:"Export CSV"})),await r(()=>n(!document.querySelector('[data-panel="export"]'),"closed"))}},C=t=>Object.fromEntries(Array.from(t.querySelectorAll("[data-header-id]")).map(e=>[e.dataset.headerId,Math.round(e.getBoundingClientRect().width)])),yo=[{...de[0],size:120},de[3],Kn(()=>[])],fo=248,he={tags:["kb:showcase-fill-width"],name:"Fill width",render:t=>s.jsxDEV(p,{...t,columns:yo},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:846,columnNumber:19},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t,a=await m(e);if(fo>=a.clientWidth){n(C(e).name===120,"no stretch when narrow");return}await r(()=>n(a.scrollWidth===a.clientWidth,"no horizontal scroll"));const o=C(e),l=Object.values(o).reduce((y,f)=>y+f,0);n(Math.abs(l-a.clientWidth)<=1,`fills ${l}/${a.clientWidth}`),n(o["row-actions"]===48,"row actions stay 48px"),n(o.name>120,"name stretched");const i=e.querySelector('[data-header-id="name"] [data-resizer]'),d=i.getBoundingClientRect(),w=d.left+d.width/2,b=d.top+4,g=(y,f,E)=>f.dispatchEvent(new PointerEvent(y,{bubbles:!0,clientX:E,clientY:b,button:0}));g("pointerdown",i,w),g("pointermove",window,w+40),g("pointerup",window,w+40),await r(()=>n(C(e).name===o.name+40,"resized under the pointer")),o.name+40+80+48<=a.clientWidth?n(a.scrollWidth===a.clientWidth,"still fills"):n(a.scrollWidth>a.clientWidth,"others not below own size"),i.dispatchEvent(new MouseEvent("dblclick",{bubbles:!0})),await r(()=>n(C(e).name===o.name,"reset"))}},X={tags:["kb:showcase-no-fill"],name:"Fill width · off",render:t=>s.jsxDEV(p,{...t,fill:!1,columns:de.slice(0,3)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:895,columnNumber:19},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t,a=await m(e);n(C(e).name===200,"name keeps 200px");const o=a.querySelector("[data-row-id]"),l=Object.values(C(e)).reduce((i,d)=>i+d,0);n(o&&Math.round(o.getBoundingClientRect().width)===Math.max(l,a.clientWidth),"row spans the table (or the columns, when wider)")}},be=(t,e)=>Array.from(document.querySelectorAll(t)).map(a=>a.getAttribute(e)??""),Jn=t=>document.querySelector(`${t} [data-drag-handle]`),fe=async t=>{await r(()=>{var a;return n((a=document.activeElement)==null?void 0:a.closest('[class*="MuiPopover-paper"]'),"popover focused")});const e=Jn(t);e==null||e.focus(),n(document.activeElement===e,`handle ${t} focused`)},K={tags:["kb:showcase-reorder-in-panels"],name:"Panels · reorder",render:t=>s.jsxDEV(p,{...t,initialState:{sorting:[{id:"team",desc:!1},{id:"level",desc:!1}],grouping:["team","level"]}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:926,columnNumber:19},void 0),play:async t=>{var w,b;if(u(t))return;const{canvasElement:e}=t;await m(e),await c.click(e.querySelector('[data-chip="sort"]')),await fe('[data-sort-item="team"]'),await c.keyboard("{ArrowDown}"),await r(()=>n(be("[data-sort-item]","data-sort-item").join()==="level,team","sorting reordered")),n(((b=(w=document.activeElement)==null?void 0:w.closest("[data-sort-item]"))==null?void 0:b.getAttribute("data-sort-item"))==="team","focus stays on the moved item"),await x(),await c.click(e.querySelector('[data-chip="group"]'));const a=await r(()=>{const g=Jn('[data-group-item="level"]');if(!g)throw new Error("no handle");return g}),o=document.querySelector('[data-group-item="team"]'),l=a.getBoundingClientRect(),i=o.getBoundingClientRect(),d=(g,y,f)=>y.dispatchEvent(new PointerEvent(g,{bubbles:!0,clientX:l.left+4,clientY:f,button:0}));d("pointerdown",a,l.top+4),d("pointermove",window,i.top+2),d("pointerup",window,i.top+2),await r(()=>n(be("[data-lane-id]","data-lane-id").join()==="level,team","grouping levels reordered")),await x(),await N(e,"Columns"),await fe('[data-column-item="role"]'),await c.keyboard("{ArrowUp}"),await r(()=>{const g=be("[data-column-item]","data-column-item");n(g.indexOf("role")<g.indexOf("team"),`column order changed: ${g.join()}`)}),await x()}},v=t=>Array.from(t.querySelectorAll("[data-header-id]")).map(e=>e.dataset.headerId),k=async(t,e,a)=>{const o=t.querySelector(`[data-header-id="${e}"] [data-grip]`);if(!o)throw new Error(`no grip on ${e}`);const l=o.getBoundingClientRect(),i=l.top+l.height/2,d=(w,b,g)=>b.dispatchEvent(new PointerEvent(w,{bubbles:!0,clientX:g,clientY:i,button:0}));d("pointerdown",o,l.left+4),d("pointermove",window,a),d("pointerup",window,a)},Y={tags:["kb:showcase-pinned-reorder"],name:"Pinned · reorder",render:t=>s.jsxDEV(p,{...t,initialState:{columnPinning:{left:["name","team"]}}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1011,columnNumber:19},void 0),play:async t=>{var b,g,y,f;if(u(t))return;const{canvasElement:e}=t;await m(e),n(v(e).slice(0,2).join()==="name,team","start");const a=(b=e.querySelector('[data-header-id="name"]'))==null?void 0:b.getBoundingClientRect();await k(e,"team",((a==null?void 0:a.left)??0)+2),await r(()=>n(v(e).slice(0,2).join()==="team,name","pinned reordered")),n(((g=e.querySelector('[data-header-id="team"]'))==null?void 0:g.getAttribute("data-pinned"))==="true","still pinned");const o=e.querySelector("[role=grid]");await k(e,"team",o.getBoundingClientRect().right-10),await r(()=>n(v(e).slice(0,2).join()==="name,team",`stays in pinned zone: ${v(e).slice(0,3)}`)),await N(e,"Columns"),await fe('[data-pinned-list] [data-column-item="team"]'),await c.keyboard("{ArrowUp}"),await r(()=>n(v(e).slice(0,2).join()==="team,name","reordered from the panel")),await x();const l=E=>e.querySelector(`[data-header-id="${E}"]`),i=l("team"),d=l("name");n(i.style.left==="0px",`team sticks at 0, got ${i.style.left}`),n(d.style.left===`${Math.round(i.getBoundingClientRect().width)}px`,`name sticks after team, got ${d.style.left}`);const w=E=>e.querySelector(`[data-row-index="0"][data-column-id="${E}"]`);n(((y=w("team"))==null?void 0:y.style.left)==="0px"&&((f=w("name"))==null?void 0:f.style.left)===d.style.left,"cells stick like headers")}},_={tags:["kb:showcase-pinned-grouped-column"],name:"Pinned · grouped column",render:t=>s.jsxDEV("div",{style:{width:700},children:s.jsxDEV(p,{...t,initialState:{columnPinning:{left:["name","role"]},grouping:["role"]}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1066,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1063,columnNumber:3},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t,a=await m(e),o=e.querySelector('[data-lane-id="role"]'),l=e.querySelector('[data-header-id="name"]');n(o.dataset.pinned==="true","lane is pinned"),n(l.style.left===`${o.getBoundingClientRect().width}px`,"name after lane");const i=a.getBoundingClientRect().left;a.scrollLeft=300,a.dispatchEvent(new Event("scroll")),await r(()=>{n(Math.round(o.getBoundingClientRect().left-i)===0,"lane header sticks");const d=e.querySelector('[data-group-level="0"]');n(Math.abs(d.getBoundingClientRect().left-i)<=1,`lane block sticks, at ${d.getBoundingClientRect().left-i}`),n(Math.round(l.getBoundingClientRect().left-i)===Math.round(o.getBoundingClientRect().width),"name sticks after the lane"),n(a.dataset.scrolledX==="true","edge border on")})}},J={tags:["kb:showcase-pinned-edge-after-lanes"],name:"Pinned · edge after lanes",render:t=>s.jsxDEV("div",{style:{width:700},children:s.jsxDEV(p,{...t,initialState:{columnPinning:{left:["name"]},grouping:["role"]}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1103,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1100,columnNumber:19},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t,a=await m(e);a.scrollLeft=100,a.dispatchEvent(new Event("scroll")),await r(()=>n(a.dataset.scrolledX==="false","no border while lane leaves")),a.scrollLeft=260,a.dispatchEvent(new Event("scroll")),await r(()=>n(a.dataset.scrolledX==="true","border once Name sticks"))}},ge=(t,e)=>{var a;return((a=t.querySelector(`[data-header-id="${e}"]`))==null?void 0:a.getBoundingClientRect().left)??0},Qn=t=>t.querySelector("[role=grid]").getBoundingClientRect().right,eo={columnChainExpanded:{location:!0}},vo=t=>t.querySelector("[data-chain-hint]"),Q={tags:["kb:showcase-chain-required"],name:"Column chains · required members",render:t=>s.jsxDEV(p,{...t,chains:[ue],initialState:eo},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1140,columnNumber:19},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=v(e).join();await k(e,"rate",ge(e,"tier")+2),await k(e,"tier",Qn(e)-10),await new Promise(o=>{setTimeout(o,300)}),n(v(e).join()===a,"order unchanged"),await k(e,"tier",ge(e,"country")+2),await r(()=>{const o=v(e);n(o.indexOf("tier")===o.indexOf("country")-1,`tier moved inside the chain: ${o}`)})}},ee={tags:["kb:showcase-chain-optional"],name:"Column chains · optional member leaves and returns",render:t=>s.jsxDEV(p,{...t,chains:[ue],initialState:eo},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1174,columnNumber:19},void 0),play:async t=>{if(u(t))return;const{canvasElement:e}=t;await m(e);const a=o=>{var l;return(l=e.querySelector(`[data-header-id="${o}"]`))==null?void 0:l.dataset.chain};await k(e,"city",Qn(e)-10),await r(()=>n(!a("city"),"city left the chain")),await k(e,"city",ge(e,"tier")+2),await r(()=>n(a("city")==="expanded","city is back in the chain")),n(!vo(e),"no hint after the drop")}},ke=async t=>{if(!t)throw new Error("showcase: element not found");await c.click(t)},Ee=t=>r(()=>{const e=document.querySelector(t);if(!e)throw new Error(`showcase: ${t}`);return e}),te={tags:["kb:showcase-showcase-overview"],name:"Showcase · overview",render:t=>s.jsxDEV(p,{...t,frameHeight:520,initialState:{grouping:["team"],sorting:[{id:"name",desc:!1}],columnPinning:{left:["name"]}}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1208,columnNumber:19},void 0)},ae={tags:["kb:showcase-showcase-column-menu"],name:"Showcase · column menu",render:t=>s.jsxDEV(p,{...t,frameHeight:520},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1224,columnNumber:19},void 0),play:async t=>{if(t.viewMode==="docs")return;const{canvasElement:e}=t;await m(e),await le(e,"Name"),await ke(h(document.body).getByRole("menuitem",{name:"Sort"})),await Ee('[data-column-submenu="sort"]')}},ne={tags:["kb:showcase-showcase-sorting-panel"],name:"Showcase · sorting panel",render:t=>s.jsxDEV(p,{...t,frameHeight:520,initialState:{sorting:[{id:"team",desc:!1},{id:"level",desc:!0}]}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1244,columnNumber:19},void 0),play:async t=>{if(t.viewMode==="docs")return;const{canvasElement:e}=t;await m(e),await ke(e.querySelector('[data-chip="sort"]')),await Ee('[data-panel="sorting"]')}},oe={tags:["kb:showcase-showcase-columns-panel"],name:"Showcase · columns panel",render:t=>s.jsxDEV(p,{...t,frameHeight:520,initialState:{columnPinning:{left:["name"]}}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1269,columnNumber:19},void 0),play:async t=>{if(t.viewMode==="docs")return;const{canvasElement:e}=t;await m(e),await N(e,"Columns")}},re={tags:["kb:showcase-showcase-row-actions"],name:"Showcase · row actions",render:t=>s.jsxDEV(p,{...t,frameHeight:520},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1289,columnNumber:19},void 0),play:async t=>{if(t.viewMode==="docs")return;const{canvasElement:e}=t;await m(e),await ke(e.querySelector('[aria-label="Row Actions"]')),await Ee("[role=menu]")}},se={tags:["kb:showcase-showcase-chain-expanded"],name:"Showcase · column chain",render:t=>s.jsxDEV(p,{...t,frameHeight:520,chains:[ue],initialState:{columnChainExpanded:{location:!0}}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1306,columnNumber:19},void 0)},ie={tags:["kb:showcase-showcase-pinned-lane"],name:"Showcase · pinned lane",render:t=>s.jsxDEV("div",{style:{width:900},children:s.jsxDEV(p,{...t,frameHeight:520,initialState:{columnPinning:{left:["name","role"]},grouping:["role"]}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1320,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1317,columnNumber:19},void 0),play:async t=>{if(t.viewMode==="docs")return;const{canvasElement:e}=t,a=await m(e);a.scrollLeft=320,a.dispatchEvent(new Event("scroll"))}},ce={tags:["kb:showcase-fixed-height-box"],name:"Fixed height · inside a page",args:{rows:40},render:t=>s.jsxDEV("div",{style:{padding:24,maxWidth:1100,fontSize:14,color:"#303240"},children:[s.jsxDEV("h3",{style:{margin:"0 0 8px"},children:"Team roster"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1355,columnNumber:13},void 0),s.jsxDEV("p",{style:{margin:"0 0 12px",color:"#6C6F80"},children:"The table takes the box it is given (here 360px) and scrolls inside it."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1358,columnNumber:13},void 0),s.jsxDEV("div",{style:{border:"1px solid #E1E3EB",borderRadius:6},children:s.jsxDEV(p,{...t,frameHeight:360},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1368,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1364,columnNumber:13},void 0),s.jsxDEV("p",{style:{margin:"12px 0 0",color:"#6C6F80"},children:"Content below the table stays in the normal page flow."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1370,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/table-core.stories.tsx",lineNumber:1349,columnNumber:19},void 0)};var xe,Ce,Ne,Re,qe;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  tags: ['kb:showcase-basic']
}`,...(Ne=(Ce=R.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source},description:{story:"Toolbar + status bar as slots, sorting, resize, reorder.",...(qe=(Re=R.parameters)==null?void 0:Re.docs)==null?void 0:qe.description}}};var De,Be,Te,Ae,Oe;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Te=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:Te.source},description:{story:"Same table without toolbar and status bar: slots not passed, nothing rendered.",...(Oe=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.description}}};var Me,je,Le,Pe,Fe;D.parameters={...D.parameters,docs:{...(Me=D.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Le=(je=D.parameters)==null?void 0:je.docs)==null?void 0:Le.source},description:{story:"Click a header: sorted, chip appears; remove the chip: sorting gone.",...(Fe=(Pe=D.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.description}}};var He,Ue,Ve,$e,Ie;B.parameters={...B.parameters,docs:{...(He=B.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ve=(Ue=B.parameters)==null?void 0:Ue.docs)==null?void 0:Ve.source},description:{story:`Grouping as in Resource Plan: the grouped column leaves its place and
becomes a lane at the far left — before pinned columns, not pinned itself
(scrolls away horizontally, pinned ones then stick). Each group is one tall
cell spanning its rows, label sticks while scrolling. No group header rows.`,...(Ie=($e=B.parameters)==null?void 0:$e.docs)==null?void 0:Ie.description}}};var ze,We,Ge,Ze,Xe;T.parameters={...T.parameters,docs:{...(ze=T.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ge=(We=T.parameters)==null?void 0:We.docs)==null?void 0:Ge.source},description:{story:"Collapse a group: one empty row keeps its cell; − in the lane header toggles all.",...(Xe=(Ze=T.parameters)==null?void 0:Ze.docs)==null?void 0:Xe.description}}};var Ke,Ye,_e,Je,Qe;A.parameters={...A.parameters,docs:{...(Ke=A.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(_e=(Ye=A.parameters)==null?void 0:Ye.docs)==null?void 0:_e.source},description:{story:"Two levels: Country, then Team — two lanes side by side.",...(Qe=(Je=A.parameters)==null?void 0:Je.docs)==null?void 0:Qe.description}}};var et,tt,at,nt,ot;O.parameters={...O.parameters,docs:{...(et=O.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=O.parameters)==null?void 0:tt.docs)==null?void 0:at.source},description:{story:`Hidden grouping: the domain groups by a hidden column marked
meta.hideFrom: ['all'] (like Issues in Resource Plan). Rows are grouped,
but there is no chip, no status bar and the column is absent from menus.`,...(ot=(nt=O.parameters)==null?void 0:nt.docs)==null?void 0:ot.description}}};var rt,st,it,ct,lt;M.parameters={...M.parameters,docs:{...(rt=M.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(st=M.parameters)==null?void 0:st.docs)==null?void 0:it.source},description:{story:`Chain of 3 columns collapsed to its first member; » expands. Expanded, as
in the legacy table: members share a tinted header, the first one is
underlined, « on the last member collapses.`,...(lt=(ct=M.parameters)==null?void 0:ct.docs)==null?void 0:lt.description}}};var dt,mt,ut,pt,ht;j.parameters={...j.parameters,docs:{...(dt=j.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(ut=(mt=j.parameters)==null?void 0:mt.docs)==null?void 0:ut.source},description:{story:"The first member is the one shown collapsed: reorder inside changes it.",...(ht=(pt=j.parameters)==null?void 0:pt.docs)==null?void 0:ht.description}}};var gt,wt,bt,yt,ft;L.parameters={...L.parameters,docs:{...(gt=L.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(bt=(wt=L.parameters)==null?void 0:wt.docs)==null?void 0:bt.source},description:{story:"Pinned Name: stays while scrolling horizontally, cannot be dragged.",...(ft=(yt=L.parameters)==null?void 0:yt.docs)==null?void 0:ft.description}}};var vt,kt,Et,St,xt;P.parameters={...P.parameters,docs:{...(vt=P.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(Et=(kt=P.parameters)==null?void 0:kt.docs)==null?void 0:Et.source},description:{story:"Keyboard: arrows, Tab / Shift+Tab across rows, Home / End, Shift+arrows range.",...(xt=(St=P.parameters)==null?void 0:St.docs)==null?void 0:xt.description}}};var Ct,Nt,Rt,qt,Dt;F.parameters={...F.parameters,docs:{...(Ct=F.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(Rt=(Nt=F.parameters)==null?void 0:Nt.docs)==null?void 0:Rt.source},description:{story:"Edit: Enter opens the editor, typing + Enter commits and moves down.",...(Dt=(qt=F.parameters)==null?void 0:qt.docs)==null?void 0:Dt.description}}};var Bt,Tt,At,Ot,Mt;H.parameters={...H.parameters,docs:{...(Bt=H.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(At=(Tt=H.parameters)==null?void 0:Tt.docs)==null?void 0:At.source},description:{story:"Read only: Enter / double-click do nothing; navigation and sorting still work.",...(Mt=(Ot=H.parameters)==null?void 0:Ot.docs)==null?void 0:Mt.description}}};var jt,Lt,Pt;pe.parameters={...pe.parameters,docs:{...(jt=pe.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Pt=(Lt=pe.parameters)==null?void 0:Lt.docs)==null?void 0:Pt.source}}};var Ft,Ht,Ut,Vt,$t;U.parameters={...U.parameters,docs:{...(Ft=U.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Ut=(Ht=U.parameters)==null?void 0:Ht.docs)==null?void 0:Ut.source},description:{story:"5 000 rows: only visible rows are in the DOM.",...($t=(Vt=U.parameters)==null?void 0:Vt.docs)==null?void 0:$t.description}}};var It,zt,Wt,Gt,Zt;V.parameters={...V.parameters,docs:{...(It=V.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Wt=(zt=V.parameters)==null?void 0:zt.docs)==null?void 0:Wt.source},description:{story:`Column menu (click a header). Built from sections; the default is
sorting + grouping. Flat list, sections split by dividers, no cascades.
Shift+click on a header still adds a quick sort.`,...(Zt=(Gt=V.parameters)==null?void 0:Gt.docs)==null?void 0:Zt.description}}};var Xt,Kt,Yt,_t,Jt;$.parameters={...$.parameters,docs:{...(Xt=$.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
      name: 'Clear sort'
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
}`,...(Yt=(Kt=$.parameters)==null?void 0:Kt.docs)==null?void 0:Yt.source},description:{story:`Sorting lives in its own submenu, as in the legacy table: "Sort ›" opens to
the right on hover, click, Enter or →. Text columns say A–Z / Z–A, numeric
ones ascending / descending; the active direction is checked; "Clear sort"
is disabled until the column is sorted. ← or Esc closes only the submenu.`,...(Jt=(_t=$.parameters)==null?void 0:_t.docs)==null?void 0:Jt.description}}};var Qt,ea,ta,aa,na;I.parameters={...I.parameters,docs:{...(Qt=I.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
  tags: ['kb:showcase-column-menu-configured'],
  name: 'Column menu · configured',
  render: args => <Demo {...args} columnMenu={[...defaultColumnMenu, pinningSection, hidingSection, exportSection]} />,
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
}`,...(ta=(ea=I.parameters)==null?void 0:ea.docs)==null?void 0:ta.source},description:{story:`Reconfigured menu: the owner passes its own list of sections — here the
defaults plus freeze, hide and a custom one. Order = order in the list.`,...(na=(aa=I.parameters)==null?void 0:aa.docs)==null?void 0:na.description}}};var oa,ra,sa,ia,ca;z.parameters={...z.parameters,docs:{...(oa=z.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(sa=(ra=z.parameters)==null?void 0:ra.docs)==null?void 0:sa.source},description:{story:"columnMenu={false}: no menu at all, a header click sorts directly.",...(ca=(ia=z.parameters)==null?void 0:ia.docs)==null?void 0:ca.description}}};var la,da,ma,ua,pa;W.parameters={...W.parameters,docs:{...(la=W.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ma=(da=W.parameters)==null?void 0:da.docs)==null?void 0:ma.source},description:{story:`Row actions (⋮ in the last column): the list, hidden / disabled rules and
handlers come from the owner; the core renders the button and menu.`,...(pa=(ua=W.parameters)==null?void 0:ua.docs)==null?void 0:pa.description}}};var ha,ga,wa,ba,ya;G.parameters={...G.parameters,docs:{...(ha=G.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
      name: 'Sort by Team A–Z'
    }));
    await waitFor(() => check(canvasElement.querySelector('[data-chip="sort"]')?.textContent === 'Team', 'single sort chip shows the column'));
    await userEvent.click(panel.getByRole('button', {
      name: 'Sort by Level A–Z'
    }));
    await waitFor(() => check(canvasElement.querySelector('[data-chip="sort"]')?.textContent === '2 Sorts', 'two sorts collapse into "2 Sorts"'));
    await closePopover();

    // Chip opens the same panel; Z–A flips Team; remove Level.
    await userEvent.click(canvasElement.querySelector('[data-chip="sort"]') as HTMLElement);
    panel = within(await waitFor(() => within(document.body).getByRole('group')));
    const team = document.querySelector('[data-sort-item="team"]') as HTMLElement;
    await userEvent.click(team.querySelector('[data-direction="desc"]') as HTMLElement);
    await waitFor(() => check(team.querySelector('[data-direction="desc"]')?.getAttribute('aria-pressed') === 'true', 'direction switched'));
    await userEvent.click(document.querySelector('[data-sort-item="level"] [data-remove]') as HTMLElement);
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
}`,...(wa=(ga=G.parameters)==null?void 0:ga.docs)==null?void 0:wa.source},description:{story:`Toolbar and status bar as in the legacy table. Toolbar: Group / Sort /
Columns on the left, each opens a panel. Status bar appears only when
something is applied: one chip per feature (a single sort shows the column
and direction, several show "N Sorts"); the chip opens the same panel.
"Clear all" appears on hover.`,...(ya=(ba=G.parameters)==null?void 0:ba.docs)==null?void 0:ya.description}}};var fa,va,ka,Ea,Sa;Z.parameters={...Z.parameters,docs:{...(fa=Z.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  tags: ['kb:showcase-toolbar-configured'],
  name: 'Toolbar · configured',
  render: args => <Demo {...args} toolbar={table => <TableToolbar table={table} controls={[sortingControl, exportControl]} start={<b style={{
    fontSize: 14
  }}>People</b>} end={<ToolbarButton type="button">Presets</ToolbarButton>} />} statusBar={table => <TableStatusBar table={table} chips={defaultStatusChips} adornment={<span style={{
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
}`,...(ka=(va=Z.parameters)==null?void 0:va.docs)==null?void 0:ka.source},description:{story:`Reconfigured: the owner passes its own controls (Sort + a custom one),
content before and after the buttons, and an adornment in the status bar
(which then is always shown).`,...(Sa=(Ea=Z.parameters)==null?void 0:Ea.docs)==null?void 0:Sa.description}}};var xa,Ca,Na;he.parameters={...he.parameters,docs:{...(xa=he.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(Na=(Ca=he.parameters)==null?void 0:Ca.docs)==null?void 0:Na.source}}};var Ra,qa,Da,Ba,Ta;X.parameters={...X.parameters,docs:{...(Ra=X.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  tags: ['kb:showcase-no-fill'],
  name: 'Fill width · off',
  render: args => <Demo {...args} fill={false} columns={peopleColumns.slice(0, 3)} />,
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
}`,...(Da=(qa=X.parameters)==null?void 0:qa.docs)==null?void 0:Da.source},description:{story:"fill={false}: columns keep their widths; rows still span the table.",...(Ta=(Ba=X.parameters)==null?void 0:Ba.docs)==null?void 0:Ta.description}}};var Aa,Oa,Ma,ja,La;K.parameters={...K.parameters,docs:{...(Aa=K.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Ma=(Oa=K.parameters)==null?void 0:Oa.docs)==null?void 0:Ma.source},description:{story:`Order is editable in every panel, as in the legacy table: drag the ⋮⋮
handle (or focus it and press ↑ / ↓) to change sorting priority, grouping
levels and column order. Live, Esc while dragging restores the order.`,...(La=(ja=K.parameters)==null?void 0:ja.docs)==null?void 0:La.description}}};var Pa,Fa,Ha,Ua,Va;Y.parameters={...Y.parameters,docs:{...(Pa=Y.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
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
    check(canvasElement.querySelector('[data-header-id="team"]')?.getAttribute('data-pinned') === 'true', 'still pinned');

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
}`,...(Ha=(Fa=Y.parameters)==null?void 0:Fa.docs)==null?void 0:Ha.source},description:{story:`Pinned columns reorder among themselves — by the header grip or in the
Columns panel — and never leave the pinned zone; the rest reorder among
the rest. Pinned order is the pinning list, so it is kept in state.`,...(Va=(Ua=Y.parameters)==null?void 0:Ua.docs)==null?void 0:Va.description}}};var $a,Ia,za,Wa,Ga;_.parameters={..._.parameters,docs:{...($a=_.parameters)==null?void 0:$a.docs,source:{originalSource:`{
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
    check(lane.dataset.pinned === 'true', 'lane is pinned');
    check(name.style.left === \`\${lane.getBoundingClientRect().width}px\`, 'name after lane');
    const x0 = el.getBoundingClientRect().left;
    el.scrollLeft = 300;
    el.dispatchEvent(new Event('scroll'));
    await waitFor(() => {
      check(Math.round(lane.getBoundingClientRect().left - x0) === 0, 'lane header sticks');
      const block = canvasElement.querySelector<HTMLElement>('[data-group-level="0"]') as HTMLElement;
      check(Math.abs(block.getBoundingClientRect().left - x0) <= 1, \`lane block sticks, at \${block.getBoundingClientRect().left - x0}\`);
      check(Math.round(name.getBoundingClientRect().left - x0) === Math.round(lane.getBoundingClientRect().width), 'name sticks after the lane');
      check(el.dataset.scrolledX === 'true', 'edge border on');
    });
  }
}`,...(za=(Ia=_.parameters)==null?void 0:Ia.docs)==null?void 0:za.source},description:{story:`A grouped column that is pinned stays pinned as its lane: the lane sticks
at the left edge, pinned columns stick right after it, the edge border
appears only once something actually goes under the pinned zone.`,...(Ga=(Wa=_.parameters)==null?void 0:Wa.docs)==null?void 0:Ga.description}}};var Za,Xa,Ka,Ya,_a;J.parameters={...J.parameters,docs:{...(Za=J.parameters)==null?void 0:Za.docs,source:{originalSource:`{
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
    await waitFor(() => check(el.dataset.scrolledX === 'false', 'no border while lane leaves'));
    el.scrollLeft = 260;
    el.dispatchEvent(new Event('scroll'));
    await waitFor(() => check(el.dataset.scrolledX === 'true', 'border once Name sticks'));
  }
}`,...(Ka=(Xa=J.parameters)==null?void 0:Xa.docs)==null?void 0:Ka.source},description:{story:"Unpinned grouping before pinned Name: no edge border until it has left.",...(_a=(Ya=J.parameters)==null?void 0:Ya.docs)==null?void 0:_a.description}}};var Ja,Qa,en,tn,an;Q.parameters={...Q.parameters,docs:{...(Ja=Q.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
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
}`,...(mn=(dn=te.parameters)==null?void 0:dn.docs)==null?void 0:mn.source},description:{story:"Grouped by Team and Level, sorted by Name: lanes, chips, toolbar.",...(pn=(un=te.parameters)==null?void 0:un.docs)==null?void 0:pn.description}}};var hn,gn,wn,bn,yn;ae.parameters={...ae.parameters,docs:{...(hn=ae.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(wn=(gn=ae.parameters)==null?void 0:gn.docs)==null?void 0:wn.source},description:{story:"Header click opens the column menu; Sort opens its submenu.",...(yn=(bn=ae.parameters)==null?void 0:bn.docs)==null?void 0:yn.description}}};var fn,vn,kn,En,Sn;ne.parameters={...ne.parameters,docs:{...(fn=ne.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
}`,...(kn=(vn=ne.parameters)==null?void 0:vn.docs)==null?void 0:kn.source},description:{story:"Sorting panel from the status bar chip: priority, direction, add.",...(Sn=(En=ne.parameters)==null?void 0:En.docs)==null?void 0:Sn.description}}};var xn,Cn,Nn,Rn,qn;oe.parameters={...oe.parameters,docs:{...(xn=oe.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
}`,...(Nn=(Cn=oe.parameters)==null?void 0:Cn.docs)==null?void 0:Nn.source},description:{story:"Columns panel: pinned list on top, order by drag, show / hide, pin.",...(qn=(Rn=oe.parameters)==null?void 0:Rn.docs)==null?void 0:qn.description}}};var Dn,Bn,Tn,An,On;re.parameters={...re.parameters,docs:{...(Dn=re.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
}`,...(Tn=(Bn=re.parameters)==null?void 0:Bn.docs)==null?void 0:Tn.source},description:{story:"Row actions menu (⋮): hidden / disabled items decided by the owner.",...(On=(An=re.parameters)==null?void 0:An.docs)==null?void 0:On.description}}};var Mn,jn,Ln,Pn,Fn;se.parameters={...se.parameters,docs:{...(Mn=se.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
  tags: ['kb:showcase-showcase-chain-expanded'],
  name: 'Showcase · column chain',
  render: args => <Demo {...args} frameHeight={520} chains={[locationChain]} initialState={{
    columnChainExpanded: {
      location: true
    }
  }} />
}`,...(Ln=(jn=se.parameters)==null?void 0:jn.docs)==null?void 0:Ln.source},description:{story:"Expanded chain: tinted members, primary underlined, collapse button.",...(Fn=(Pn=se.parameters)==null?void 0:Pn.docs)==null?void 0:Fn.description}}};var Hn,Un,Vn,$n,In;ie.parameters={...ie.parameters,docs:{...(Hn=ie.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
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
}`,...(Vn=(Un=ie.parameters)==null?void 0:Un.docs)==null?void 0:Vn.source},description:{story:"Pinned + grouped column: its lane sticks, pinned Name after it.",...(In=($n=ie.parameters)==null?void 0:$n.docs)==null?void 0:In.description}}};var zn,Wn,Gn,Zn,Xn;ce.parameters={...ce.parameters,docs:{...(zn=ce.parameters)==null?void 0:zn.docs,source:{originalSource:`{
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
}`,...(Gn=(Wn=ce.parameters)==null?void 0:Wn.docs)==null?void 0:Gn.source},description:{story:`Not full height: the table inside a page, in a box of fixed height. It
scrolls inside the box; toolbar and status bar stay put.`,...(Xn=(Zn=ce.parameters)==null?void 0:Zn.docs)==null?void 0:Xn.description}}};const jo=["Basic","WithoutToolbar","Sorting","Grouping","GroupingCollapsed","GroupingTwoLevels","HiddenGrouping","ColumnChains","ColumnChainsFirstShown","Pinned","Keyboard","Editing","ReadOnly","RowOrder","LargeData","ColumnMenu","ColumnMenuSortSubmenu","ColumnMenuConfigured","ColumnMenuOff","RowActions","ToolbarAndStatusBar","ToolbarConfigured","FillWidth","NoFill","ReorderInPanels","PinnedReorder","PinnedGroupedColumn","PinnedEdgeAfterLanes","ChainRequired","ChainOptional","ShowcaseOverview","ShowcaseColumnMenu","ShowcaseSortingPanel","ShowcaseColumnsPanel","ShowcaseRowActions","ShowcaseChainExpanded","ShowcasePinnedLane","FixedHeightBox"];export{R as Basic,ee as ChainOptional,Q as ChainRequired,M as ColumnChains,j as ColumnChainsFirstShown,V as ColumnMenu,I as ColumnMenuConfigured,z as ColumnMenuOff,$ as ColumnMenuSortSubmenu,F as Editing,he as FillWidth,ce as FixedHeightBox,B as Grouping,T as GroupingCollapsed,A as GroupingTwoLevels,O as HiddenGrouping,P as Keyboard,U as LargeData,X as NoFill,L as Pinned,J as PinnedEdgeAfterLanes,_ as PinnedGroupedColumn,Y as PinnedReorder,H as ReadOnly,K as ReorderInPanels,W as RowActions,pe as RowOrder,se as ShowcaseChainExpanded,ae as ShowcaseColumnMenu,oe as ShowcaseColumnsPanel,te as ShowcaseOverview,ie as ShowcasePinnedLane,re as ShowcaseRowActions,ne as ShowcaseSortingPanel,D as Sorting,G as ToolbarAndStatusBar,Z as ToolbarConfigured,q as WithoutToolbar,jo as __namedExportsOrder,Mo as default};
