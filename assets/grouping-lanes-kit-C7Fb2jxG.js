import{S as $,h as _,t as y,r as N,l as R,H as S,d as A}from"./scene-kit-BsKxVgS1.js";import{p as k,w as P,c as F,d as B,l as M,u as U,L as D,a as H,b as K}from"./utility-kit-CR3CIJ2n.js";import{j as t}from"./jsx-runtime-Cnbe3ryz.js";import{r as V,R as W}from"./index-3dRrDZpt.js";import{T as Y}from"./TableCore-Y75h2oha.js";import{c as x}from"./places-Dp9r7e0L.js";import{T as q}from"./TableStatusBar-4NxO8OsQ.js";import{T as I}from"./TableToolbar-DTYEmPN-.js";import{e as J,a as c,m as X}from"./employees-CL5oqWiT.js";import{b as z,a as Q,C as Z}from"./fixtures-P-DSdYmm.js";import{I as d,a as ee,b as oe,d as ne}from"./issues-nMSoXFwf.js";import{a as te}from"./table-core-base-DFRq_Vzl.js";const{useArgs:le}=__STORYBOOK_MODULE_PREVIEW_API__,ae={...c("level","Level",90),meta:x({groupings:[{id:"letter",label:"First letter",getValue:e=>e.level.slice(0,1)}]})},v="level__letter",se={...c("colour","Colour",110),cell:z,meta:x({sort:{order:Z},groupCell:{accent:e=>Q[e]}})},m=[c("name","Name",190),c("team","Team",120),c("role","Role",150),ae,se,c("country","Country",120),c("tier","Tier",90),c("city","City",110),c("rate","Rate",80),c("start","Start",110)],re=["all","toolbar","toolbar.columns","toolbar.grouping","statusBar","statusBar.grouping"],ie={all:"hidden everywhere",toolbar:"not in any toolbar panel","toolbar.columns":"not in the Columns panel","toolbar.grouping":"not in the Group panel",statusBar:"no chips in the status bar","statusBar.grouping":"no group chip"},ue=["all"],ce=(e,n)=>({...e,meta:x({...e.meta,hideFrom:n})}),pe=(e,n,l)=>(n?[ee,...m]:m).map(a=>e.includes(a.id)?ce(a,l):a),Ue=J.filter(e=>e.id==="location"),O={grouping:[],expanded:!0,rowSelection:{},sorting:[],columnPinning:{left:[],right:[]},columnChainExpanded:{}},w=["team","role","level",v,"colour","country","tier","city","name"],de=m.map(e=>e.id),he=[d,...w],be={issues:"Issues",[v]:"Level · First letter",...Object.fromEntries(m.map(e=>[e.id,String(e.header)]))},g=e=>be[e]??e,G=e=>(e.hideFromPlaces??ue).filter(n=>re.includes(n)),L=(e,n)=>n?(e.hiddenColumns??[d]).filter(l=>he.includes(l)):[],me=e=>e==="all"?!0:e==="none"?{}:e,ge=e=>e===!0?"all":Object.keys(e).length?e:"none",E=e=>({...O,...e.state,grouping:e.grouping,expanded:me(e.expanded),columnPinning:{left:e.utilityColumn?k(e.pinnedLeft):P(e.pinnedLeft),right:[]}});let p=null;const fe=e=>{const[,n]=le(),l=E(e),a=o=>{p={...p,...o},queueMicrotask(()=>{p&&(n(p),p=null)})},i=(o,u)=>h=>{var f;const b=te(h,l[o]??O[o]);(f=e[_(o)])==null||f.call(e,b),a(u(b))},s=o=>i(o,u=>({state:{...(p==null?void 0:p.state)??e.state,[o]:u}}));return{onGroupingChange:i("grouping",o=>({grouping:o})),onExpandedChange:i("expanded",o=>({expanded:ge(o)})),onColumnPinningChange:i("columnPinning",o=>({pinnedLeft:P(o.left??[])})),onRowSelectionChange:s("rowSelection"),onSortingChange:s("sorting"),onColumnChainExpandedChange:s("columnChainExpanded")}},Ce=e=>t.jsx(I,{table:e,start:t.jsx(oe,{table:e})}),ye=e=>t.jsx(I,{table:e}),Ge=e=>t.jsx(q,{table:e}),Se=({args:e,handlers:n,hint:l,hiddenGrouping:a})=>{const[i]=V.useState(()=>X(30)),s=L(e,!!a),o=pe(s,!!a,G(e));return t.jsx($,{hint:l,children:t.jsx(Y,{data:i,columns:e.utilityColumn?B(o):o,getRowId:u=>u.id,readOnly:e.readOnly,enableGrouping:e.enableGrouping,enableMultiGroup:e.enableMultiGroup,groupLayout:e.groupLayout,enableRowNumbers:e.enableRowNumbers,enableGroupCollapse:e.enableGroupCollapse,enableGroupSelect:e.enableGroupSelect,enableGroupLevelCollapse:e.enableGroupLevelCollapse,resolvers:F(e.lanesPosition),chains:e.chains,state:E(e),...n,toolbar:s.includes(d)?Ce:ye,statusBar:Ge},`${s.join()}|${G(e).join()}`)})},T=["grouping","expanded","rowSelection"],xe={grouping:"GroupingState",expanded:"ExpandedState",rowSelection:"RowSelectionState"},Oe=(e,n)=>{const l=o=>`${o}Column`,a=n.length?`    hideFrom: [
${n.map(o=>`      '${o}', // ${ie[o]}`).join(`
`)}
    ],`:"    // nothing hidden: tick places in the controls",i=e.map(o=>o===d?`// Issues — the screen groups by it, drawn as in the legacy Resource Plan.
const GROUP = { blocked: 'Blockers', excluded: 'Excluded', ok: 'Included' }
const LOOK = {
  Blockers: { icon: <ErrorIcon />, edge: '#FCC8C8', tooltip: 'Blocks run scenario' },
  Excluded: { icon: <WarningIcon />, edge: '#FFDD96', tooltip: 'Excluded from calculation' },
  Included: { icon: <SuccessIcon />, edge: '#CBE591', tooltip: 'Included into calculation' },
}

const issuesColumn: ColumnDef<Employee> = {
  id: 'issues',
  accessorFn: (e) => GROUP[e.state],
  header: 'Issues',
  // An icon and the group name, in the lane too.
  cell: ({ getValue }) => <>{LOOK[getValue()].icon} {getValue()}</>,
  meta: coreMeta({
    // Only groups: never a column, not in the Columns or Sort panels.
    groupingOnly: true,
    // The group cell: a coloured right edge and a tooltip.
    groupCell: {
      accent: (group) => LOOK[group].edge,
      accentSide: 'right',
      tooltip: (group) => LOOK[group].tooltip,
    },
${a}
  }),
}`:`// ${g(o)} — an ordinary column, hidden from places.
const ${l(o)}: ColumnDef<Employee> = {
  accessorKey: '${o}',
  header: '${g(o)}',
  meta: coreMeta({
${a}
  }),
}`),s=[...e.includes(d)?[d]:[],...m.map(o=>o.id)];return`
// Hidden grouping: the screen groups by these columns itself.
// meta.hideFrom lists the places the column is left out of; a parent
// covers its children ('toolbar' = every toolbar panel, 'all' = everywhere).
// An action in a place touches only the grouping that place lists: grouping
// hidden from the status bar stays on its Clear all.
// Any list can also be changed per table: <TableCore resolvers={…} />.
${i.length?i.join(`

`):"// No hidden columns now: tick some in the controls."}

// ${s.filter(o=>!e.includes(o)).map(l).join(", ")} — ordinary columns.
const columns = [${s.map(l).join(", ")}]
`},we=`
// Issues is hidden everywhere (meta.hideFrom: ['all']): no chip, not in the
// Group panel, no lane menu, its lane does not move. Only this button of the
// screen turns it on (first level) and off.
${ne}`,j=(e,n)=>{const l=!!n.hiddenGrouping,a={...O,...E(e)},i=r=>r==null||typeof r=="object"&&Object.values(r).every(C=>Array.isArray(C)&&!C.length)||Array.isArray(r)&&!r.length,s=Object.fromEntries(Object.entries(a).filter(([r,C])=>!T.includes(r)&&!i(C))),o=r=>`set${r[0].toUpperCase()}${r.slice(1)}`,u=T.map(r=>`  const [${r}, ${o(r)}] = useState<${xe[r]}>(${y(a[r],"  ")})`).join(`
`),h=L(e,l),b=l?"columns":"employeeColumns",f=["data={employees}",`columns={${e.utilityColumn?"withUtility":b}}`,"getRowId={(e) => e.id}",e.readOnly?"readOnly":"",e.enableGrouping===!1?`// The user cannot group: no Group by, no Group button.
      enableGrouping={false}`:"",e.groupLayout==="rows"?`// Groups as header rows in the body, not lanes.
      groupLayout="rows"`:"",e.enableMultiGroup===!1?`// One grouping of the user at a time: no Then by; a new one replaces it.
      enableMultiGroup={false}`:"",e.enableRowNumbers===!1?`// Row numbers off: the utility column keeps only its checkboxes.
      enableRowNumbers={false}`:"",e.enableGroupCollapse===!1?`// No −/+ on the groups.
      enableGroupCollapse={false}`:"",e.enableGroupSelect===!1?`// No group checkbox; rows stay selectable.
      enableGroupSelect={false}`:"",e.enableGroupLevelCollapse===!1?`// No −/+ in the lane headers.
      enableGroupLevelCollapse={false}`:"",M(e.lanesPosition),e.chains.length?`chains={${y(e.chains,"      ")}}`:"",Object.keys(s).length?`initialState={${y(s,"      ")}}`:"","state={{ grouping, expanded, rowSelection }}","onGroupingChange={setGrouping}","onExpandedChange={setExpanded}","onRowSelectionChange={setRowSelection}",h.includes(d)?`// The screen's own Issues button, before the table's buttons.
      toolbar={(table) => <TableToolbar table={table} start={<IssuesToggle table={table} />} />}`:"toolbar={(table) => <TableToolbar table={table} />}","statusBar={(table) => <TableStatusBar table={table} />}"].filter(Boolean);return`import { useState } from 'react'
import type {
  ExpandedState,
  GroupingState,
  RowSelectionState,
} from '@tanstack/react-table'
import {
  TableCore,
  TableStatusBar,
  TableToolbar,${l?`
  ToolbarButton,
  coreMeta,`:""}${e.utilityColumn?`
  UTILITY_COLUMN_ID,
  createUtilityColumn,`:""}
} from '@pnl-simulation/table-core'
${l?Oe(h,G(e)):""}${e.utilityColumn?U(b):""}
${h.includes(d)?we:""}export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
  // Owning the state is optional: do it to save, restore or sync it.
${u}

  return (
    <TableCore
${f.map(r=>`      ${r}`).join(`
`)}
    />
  )
}`},{useArgs:Le}=__STORYBOOK_MODULE_PREVIEW_API__,De=e=>w.find(n=>!e.includes(n)),Ee=e=>Object.values(e.state.rowSelection??{}).filter(Boolean).length,Te=({args:e,hiddenGrouping:n})=>{const l=L(e,n),a=e.grouping.map(u=>({id:u,own:l.includes(u)})),i={all:"all groups open",none:"all groups folded"},s=typeof e.expanded=="string"?i[e.expanded]:`${Object.values(e.expanded).filter(Boolean).length} groups open`,o=Ee(e);return t.jsxs("span",{"data-hint-now":!0,style:{display:"block",marginTop:4,color:"#6C6F80"},children:["Now:"," ",a.length?t.jsxs(t.Fragment,{children:["grouped by"," ",a.map((u,h)=>t.jsxs(W.Fragment,{children:[h>0&&" → ",t.jsx("b",{children:g(u.id)}),u.own&&" (hidden from places)"]},u.id)),"; ",s]}):"not grouped",o>0&&`; ${o} row${o>1?"s":""} selected`,e.utilityColumn&&"; utility column pinned first",e.pinnedLeft.length>0&&t.jsxs(t.Fragment,{children:["; pinned ",R(e.pinnedLeft.map(g))]}),e.lanesPosition!=="start"&&`; ${D[e.lanesPosition]}`,".",e.enableGrouping===!1&&" Grouping is off for the user.",e.groupLayout==="rows"&&" Groups are header rows.",e.enableMultiGroup===!1&&" One grouping of the user at a time.",e.enableGroupCollapse===!1&&" No −/+ on the groups.",e.enableGroupSelect===!1&&" No group checkbox.",e.enableGroupLevelCollapse===!1&&" No −/+ in the lane headers."]})},He=(e,n,l)=>t.jsx(S,{onClick:()=>e({grouping:n}),children:l??t.jsxs(t.Fragment,{children:["group by ",R(n.map(g))," here"]})}),Ke=({update:e})=>t.jsxs(t.Fragment,{children:[t.jsx("b",{children:"enableGrouping"})," is off below: the column menu has no ",t.jsx("i",{children:"Group by"})," ","and there is no ",t.jsx("b",{children:"Group"})," button; a grouping set in the state still shows."," ",t.jsx(S,{onClick:()=>e({enableGrouping:!0}),children:"Turn it on here"})]}),Ve=({update:e})=>t.jsxs(t.Fragment,{children:[t.jsx("b",{children:"enableMultiGroup"})," is off below, so this scene shows one grouping at a time: no ",t.jsx("i",{children:"Then by …"}),", a new grouping replaces the old one."," ",t.jsx(S,{onClick:()=>e({enableMultiGroup:!0}),children:"Turn it on here"})]}),je=function(n,{parameters:l}){const a={...n,grouping:n.grouping??[],pinnedLeft:n.pinnedLeft??[],expanded:n.expanded??"all",state:n.state??{},chains:n.chains??[],enableGrouping:n.enableGrouping??!0,enableMultiGroup:n.enableMultiGroup??!1,groupLayout:n.groupLayout??"lanes",utilityColumn:n.utilityColumn??!0,enableRowNumbers:n.enableRowNumbers??!0,enableGroupCollapse:n.enableGroupCollapse??!0,enableGroupSelect:n.enableGroupSelect??!0,enableGroupLevelCollapse:n.enableGroupLevelCollapse??!0,lanesPosition:n.lanesPosition??"start"},i=!!l.hiddenGrouping,s=fe(a),[,o]=Le();return t.jsx(Se,{args:a,handlers:s,hint:t.jsxs(t.Fragment,{children:[N(l.hint,a,o),t.jsx(Te,{args:a,hiddenGrouping:i})]}),hiddenGrouping:i})},We={render:je,args:{grouping:["team"],expanded:"all",pinnedLeft:[],readOnly:!1,enableGrouping:!0,enableMultiGroup:!1,groupLayout:"lanes",utilityColumn:!0,enableRowNumbers:!0,enableGroupCollapse:!0,enableGroupSelect:!0,enableGroupLevelCollapse:!0,lanesPosition:"start",chains:[],state:{}},argTypes:{grouping:{name:"state.grouping",description:"Grouped columns, outer first (tick order = lane order). The table writes back here when the user groups, ungroups or reorders levels.",options:w,control:"check",table:{category:"state"}},expanded:{name:"state.expanded",description:"`true` = all groups open, `{}` = all folded, or a map of open group ids (then neither is ticked).",options:["all","none"],control:{type:"radio",labels:{all:"all open (true)",none:"all folded ({})"}},table:{category:"state"}},pinnedLeft:{name:"state.columnPinning.left",description:"Pinned columns. A pinned grouped column keeps its lane in place.",options:de,control:"check",table:{category:"state"}},state:{table:{disable:!0}},groupLayout:{name:"groupLayout",description:"`'lanes'`: each grouping a lane on the left (prod). `'rows'`: a group header row in the body, TanStack's look — −/+, checkbox, value, count and the totals of the columns with an `aggregationFn`. A column or a way may say otherwise (`meta.groupLayout`).",options:["lanes","rows"],control:"radio",table:{category:"switches"}},enableMultiGroup:{name:"enableMultiGroup",description:"Off (here by default, as in Sorting): one grouping of the user at a time — no *Then by* in the column menu, a new grouping replaces it. The screen's own grouping (Issues, hidden from the places) stays.",control:"boolean",table:{category:"switches"}},enableGrouping:{name:"enableGrouping",description:"Off: the user cannot group — no *Group by* in menus, no *Group* button. A grouping in the state still shows.",control:"boolean",table:{category:"switches"}},utilityColumn:{name:"utility column",description:"The screen adds `createUtilityColumn()` (row numbers + checkboxes) and pins it first. The core never adds it.",control:"boolean",table:{category:"columns"}},enableRowNumbers:{name:"enableRowNumbers",description:"Row numbers on / off for the table; off, the utility column keeps only its checkboxes.",control:"boolean",table:{category:"switches"}},enableGroupCollapse:{name:"enableGroupCollapse",description:"Off: no −/+ on the groups (the lane headers keep theirs).",control:"boolean",table:{category:"switches"}},enableGroupSelect:{name:"enableGroupSelect",description:"Off: no group checkbox; the rows stay selectable.",control:"boolean",table:{category:"switches"}},enableGroupLevelCollapse:{name:"enableGroupLevelCollapse",description:"Off: no −/+ in the lane headers (fold / open a whole level).",control:"boolean",table:{category:"switches"}},lanesPosition:{name:"resolvers.getLanesPosition",description:"Where the lane block stands among the pinned columns. Default `start`: lanes first, the utility column right after them (prod).",options:K,control:{type:"radio",labels:H},table:{category:"resolvers"}},hiddenColumns:{table:{disable:!0}},hideFromPlaces:{table:{disable:!0}},readOnly:{description:"No editing and no selection: the group checkboxes disappear, grouping still works.",control:"boolean"},chains:{description:"Column chains (here: Location = Country, Tier, City).",control:"object",table:{disable:!0}},onGroupingChange:{action:"onGroupingChange",table:{disable:!0}},onExpandedChange:{action:"onExpandedChange",table:{disable:!0}},onRowSelectionChange:{action:"onRowSelectionChange",table:{disable:!0}},onSortingChange:{action:"onSortingChange",table:{disable:!0}},onColumnPinningChange:{action:"onColumnPinningChange",table:{disable:!0}},onColumnChainExpandedChange:{action:"onColumnChainExpandedChange",table:{disable:!0}}},parameters:{layout:"fullscreen",sceneCode:j,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:A(j)}}};export{ue as D,re as G,he as H,We as L,Ve as M,ie as P,g as a,Ke as b,De as f,He as g,L as h,Ue as l,G as p,Ee as s};
