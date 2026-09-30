import{j as e}from"./styles-DXLXEQ3H.js";import{w as v,e as b,u as T,a as V}from"./index-DLqD3z3M.js";import{u as Le,f as U,a as Pe,T as Me,C as Re,g as Be}from"./TableCore-kOYdxPhk.js";import{r as m}from"./index-BjhrbhTf.js";import{T as Fe}from"./TableStatusBar-BHCIeSi2.js";import{T as Ae}from"./TableToolbar-C0bTLKMD.js";import{e as $e,m as We,a as c}from"./employees-DtM5_3-O.js";import{m as Ie}from"./fixtures-CCjjPTo2.js";import{c as Se}from"./play-kit-Bu4SXy9H.js";import{w as _e,d as qe,t as L,h as P,S as He}from"./scene-kit-DXifMYYP.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./panels-D6DlFR9J.js";import"./createSvgIcon-s1BrOgA2.js";const{addons:Je,useArgs:ze}=__STORYBOOK_MODULE_PREVIEW_API__,Ke=[c("name","Name",190),c("team","Team",110),c("role","Role",140),c("country","Country",120),c("tier","Tier",90),c("city","City",110),c("email","Email",230),c("phone","Phone",150),c("start","Start",110),c("end","End",110),c("rate","Rate",80)],Ye=$e,Ge=(n,s)=>{const a=i=>n.columnOrder.indexOf(i),t=Object.fromEntries(Object.entries(n.columnChainMembers).map(([i,o])=>[i,[...o].sort((r,u)=>a(r)-a(u))]));return s({...n,columnChainMembers:t})},j={columnOrder:[],columnPinning:{left:[],right:[]},columnChainMembers:{},columnChainExpanded:{}},je={columnPinning:{left:["name"],right:[]}},Te=["columnOrder","columnPinning","columnChainMembers","columnChainExpanded"],O=n=>Object.fromEntries(Te.filter(s=>n[s]!==void 0).map(s=>[s,n[s]]));let h=null;const Qe=n=>{const[,s]=ze();return Object.fromEntries(Te.map(a=>[P(a),t=>{var r;const i={...O(n),...h},o=Pe(t,i[a]??j[a]);h={...h,[a]:o},(r=n[P(a)])==null||r.call(n,o),queueMicrotask(()=>{h&&(s(h),h=null)})}]))},Xe="table-core/chain-state/resolved",Ze=n=>e.jsxDEV(Ae,{table:n},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:103,columnNumber:51},void 0),en=n=>e.jsxDEV(Fe,{table:n},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:104,columnNumber:53},void 0),nn=({args:n,handlers:s,hint:a})=>{const[t]=m.useState(()=>We(30)),i=m.useRef(null);return m.useEffect(()=>{var u;const o=(u=i.current)==null?void 0:u.table;if(!o)return;const r=o.getColumnChainLayout();Je.getChannel().emit(Xe,{enabled:o.getIsColumnChainsEnabled(),outside:O(n),resolved:{columnOrder:r.columnOrder,pinnedLeft:r.pinnedLeft,columnChainMembers:r.columnChainMembers},conflicts:r.conflicts})}),e.jsxDEV(He,{hint:a,children:e.jsxDEV(Me,{ref:i,data:t,columns:Ke,getRowId:o=>o.id,chains:n.chains,enableColumnChains:n.enableColumnChains,resolveChainLayout:n.resolveChainLayout,state:O(n),...s,onChainConflicts:n.onChainConflicts,toolbar:Ze,statusBar:en},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:132,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:131,columnNumber:10},void 0)},M=n=>{const s=n.resolveChainLayout==="columnOrderWins",a={...j,...O(n)},t=(i,o)=>{const r=`set${i[0].toUpperCase()}${i.slice(1)}`,u=L(a[i],"  ");return`  const [${i}, ${r}] = useState<${o}>(${u})`};return`import { useState } from 'react'
import type { ColumnOrderState, ColumnPinningState } from '@tanstack/react-table'
import {
  TableCore,
  type ChainExpandedState,${s?`
  type ChainLayoutResolver,`:""}
  type ChainMembersState,
  type ColumnChain,
} from '..'

const chains: ColumnChain[] = ${L(n.chains)}
${s?`
// Own conflict rule: the chain's order is taken from columnOrder.
const columnOrderWins: ChainLayoutResolver = (input, resolveDefault) => {
  const pos = (id: string) => input.columnOrder.indexOf(id)
  const columnChainMembers = Object.fromEntries(
    Object.entries(input.columnChainMembers).map(([id, members]) => [
      id,
      [...members].sort((a, b) => pos(a) - pos(b)),
    ])
  )
  return resolveDefault({ ...input, columnChainMembers })
}
`:""}
export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
  // Layout state is optional to own: do it to save, restore or sync it.
${t("columnOrder","ColumnOrderState")}
${t("columnPinning","ColumnPinningState")}
${t("columnChainMembers","ChainMembersState")}
${t("columnChainExpanded","ChainExpandedState")}

  return (
    <TableCore
      data={employees}
      columns={columns}
      getRowId={(e) => e.id}
      chains={chains}${n.enableColumnChains?"":`
      enableColumnChains={false}`}${s?`
      resolveChainLayout={columnOrderWins}`:""}
      state={{ columnOrder, columnPinning, columnChainMembers, columnChainExpanded }}
      onColumnOrderChange={setColumnOrder}
      onColumnPinningChange={setColumnPinning}
      onColumnChainMembersChange={setColumnChainMembers}
      onColumnChainExpandedChange={setColumnChainExpanded}
      onChainConflicts={(conflicts) => console.warn(conflicts)}
    />
  )
}`},kn={title:"Tables/Table Core/Draft/Column chains",tags:["autodocs"],decorators:[_e],render:function(s,{parameters:a}){const t=Qe(s);return e.jsxDEV(nn,{args:s,handlers:t,hint:a.hint},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:209,columnNumber:12},this)},args:{chains:Ye,enableColumnChains:!0,resolveChainLayout:void 0,...j,...je},argTypes:{chains:{description:"Chain definitions. A member is an id (required) or `{ id, optional: true }` (may leave the chain and come back).",control:"object"},enableColumnChains:{description:"Switch the feature off without removing it.",control:"boolean"},resolveChainLayout:{description:"How a disagreement between `columnOrder` and `columnChainMembers` is settled. Default: the chain order wins.",options:["default","columnOrderWins"],mapping:{default:void 0,columnOrderWins:Ge},control:{type:"radio",labels:{default:"default rules",columnOrderWins:"columnOrderWins (own resolver)"}}},columnOrder:{name:"state.columnOrder",description:"Column ids in screen order (TanStack). Drag a column and it updates; edit it to push an order in.",control:"object",table:{category:"state"}},columnPinning:{name:"state.columnPinning",description:"Frozen columns: `{ left, right }` (TanStack pinning). Freezing a chain member freezes the whole chain.",control:"object",table:{category:"state"}},columnChainMembers:{name:"state.columnChainMembers",description:"Members of each chain in their order, by chain id. Empty = the order from `chains`. An optional member taken out disappears from its list.",control:"object",table:{category:"state"}},columnChainExpanded:{name:"state.columnChainExpanded",description:"Open chains: `{ [chainId]: true }`. Collapsed chains show their first member.",control:"object",table:{category:"state"}},onColumnOrderChange:{action:"onColumnOrderChange",table:{category:"events"}},onColumnPinningChange:{action:"onColumnPinningChange",table:{category:"events"}},onColumnChainMembersChange:{action:"onColumnChainMembersChange",table:{category:"events"}},onColumnChainExpandedChange:{action:"onColumnChainExpandedChange",table:{category:"events"}},onChainConflicts:{action:"onChainConflicts",table:{category:"events"}}},parameters:{layout:"fullscreen",sceneCode:M,chainState:!0,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:qe(M),description:{component:"\nA **chain** is a group of related columns shown as one column until the user opens it — here *Location* (Country, Tier, City), *Contact* (Email, Phone) and *Period* (Start, End).\n\n- **Collapsed**, only the first member is on screen, with **»** to open the chain. Opened, the members sit side by side and **«** folds them back.\n- The chain's **order** is the user's: drag members inside it; whichever is first is the one shown collapsed.\n- Members are **required** by default. An **optional** member (City, Phone) can be dragged **out** of the chain — it becomes a plain column — and back **in**. Columns the chain does not list can never join.\n- Pinning, reordering, hiding and the Columns panel treat a chain as one block.\n\n**State.** The layout lives in `columnOrder` and `columnChainMembers` (plus `columnChainExpanded`, `columnPinning`). A screen can own them — save, restore, sync. When what it passes disagrees with itself, the table settles it by fixed rules and reports what it fixed (`onChainConflicts`); `resolveChainLayout` replaces the rules.\n\n**Here.** Every control below is a real `TableCore` prop; the *state* group has one control per state slice, and it works both ways: change the table and the slice updates; edit a slice and the table follows. Events go to **Actions**, the matching code is in **Code**, and **Chain state** shows what you passed, what the table uses and what it fixed.\n\nThe scenes go one idea at a time; *Playground* has everything."}}}},d=(n,s)=>n.querySelector(`[data-header-id="${s}"]`),p=(...n)=>({...je,columnChainExpanded:Object.fromEntries(n.map(s=>[s,!0]))}),f={tags:["kb:chains-collapse-expand"],name:"1 · Collapse and expand",parameters:{hint:e.jsxDEV(e.Fragment,{children:["Click ",e.jsxDEV("b",{children:"»"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:349,columnNumber:23},void 0)," next to ",e.jsxDEV("b",{children:"Country"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:349,columnNumber:40},void 0)," to open ",e.jsxDEV("i",{children:"Location"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:349,columnNumber:63},void 0),", then"," ",e.jsxDEV("b",{children:"«"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:350,columnNumber:17},void 0)," to fold it. Watch ",e.jsxDEV("code",{children:"state.columnChainExpanded"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:350,columnNumber:44},void 0)," in the controls."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:348,columnNumber:11},void 0)},play:async n=>{if(Se(n))return;const s=n.canvasElement;await v(()=>b(d(s,"country")).not.toBeNull()),await b(d(s,"tier")).toBeNull(),await T.click(V(d(s,"country")).getByRole("button",{name:"Expand columns"})),await v(()=>b(d(s,"tier")).not.toBeNull()),await b(d(s,"city")).not.toBeNull(),await T.click(V(s).getByRole("button",{name:"Collapse columns"})),await v(()=>b(d(s,"tier")).toBeNull())}},C={tags:["kb:chains-reorder-inside"],name:"2 · Reorder inside a chain",args:p("location"),parameters:{hint:e.jsxDEV(e.Fragment,{children:["Drag ",e.jsxDEV("b",{children:"Tier"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:378,columnNumber:22},void 0)," before ",e.jsxDEV("b",{children:"Country"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:378,columnNumber:41},void 0),", then fold ",e.jsxDEV("i",{children:"Location"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:378,columnNumber:67},void 0),": now Tier is the column shown."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:377,columnNumber:11},void 0)}},k={tags:["kb:chains-leave-and-join"],name:"3 · Take out and put back",args:p("location","contact"),parameters:{hint:e.jsxDEV(e.Fragment,{children:["Drag ",e.jsxDEV("b",{children:"City"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:391,columnNumber:22},void 0)," away from ",e.jsxDEV("i",{children:"Location"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:391,columnNumber:44},void 0)," — the drag says"," ",e.jsxDEV("i",{children:"Leaves Location"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:392,columnNumber:17},void 0),". Drop it back next to Tier —"," ",e.jsxDEV("i",{children:"Joins Location"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:393,columnNumber:17},void 0),". Same in the ",e.jsxDEV("b",{children:"Columns"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:393,columnNumber:52},void 0)," panel."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:390,columnNumber:11},void 0)}},y={tags:["kb:chains-not-allowed"],name:"4 · What is not allowed",args:p("location"),parameters:{hint:e.jsxDEV(e.Fragment,{children:["Drag ",e.jsxDEV("b",{children:"Tier"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:405,columnNumber:22},void 0)," (required) out of ",e.jsxDEV("i",{children:"Location"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:405,columnNumber:52},void 0),", or ",e.jsxDEV("b",{children:"Team"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:405,columnNumber:72},void 0)," into it — the drag says ",e.jsxDEV("i",{children:"Not allowed here"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:406,columnNumber:36},void 0)," and nothing moves."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:404,columnNumber:11},void 0)}},x={tags:["kb:chains-pinning"],name:"5 · Pinning a chain",args:p("location"),parameters:{hint:e.jsxDEV(e.Fragment,{children:["Pin ",e.jsxDEV("b",{children:"Country"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:418,columnNumber:21},void 0)," from its column menu (or drag it into the pinned area): the whole ",e.jsxDEV("i",{children:"Location"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:419,columnNumber:34},void 0)," chain goes with it."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:417,columnNumber:11},void 0)}},N={tags:["kb:chains-outside-state"],name:"6 · Conflicting state from outside",args:p("location"),parameters:{hint:e.jsxDEV(e.Fragment,{children:["Open the ",e.jsxDEV("b",{children:"Chain state"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:431,columnNumber:26},void 0)," tab below and apply a case. Compare"," ",e.jsxDEV("i",{children:"you passed"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:432,columnNumber:17},void 0)," with ",e.jsxDEV("i",{children:"the table uses"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:432,columnNumber:40},void 0),"; switch"," ",e.jsxDEV("code",{children:"resolveChainLayout"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:433,columnNumber:17},void 0)," to see your own rule win."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:430,columnNumber:11},void 0)}},E={tags:["kb:chains-switched-off"],name:"7 · Switched off",args:{enableColumnChains:!1},parameters:{hint:e.jsxDEV(e.Fragment,{children:["Turn ",e.jsxDEV("code",{children:"enableColumnChains"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:447,columnNumber:22},void 0)," on and off: nothing else breaks, and the layout comes back as it was."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:446,columnNumber:11},void 0)},play:async n=>{if(Se(n))return;const s=n.canvasElement;await v(()=>b(d(s,"tier")).not.toBeNull()),await b(s.querySelector("[data-chain-toggle]")).toBeNull()}},D={tags:["kb:chains-playground"],args:p("location","contact","period")},R=`import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ColumnChainsFeature } from '..'

const table = useReactTable({
  _features: [ColumnChainsFeature],
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  chains: [
    {
      id: 'location',
      label: 'Location',
      columns: ['country', 'tier', { id: 'city', optional: true }],
    },
  ],
})

// The rest is plain TanStack: collapsed members are simply not visible.
<thead>
  <tr>
    {table.getVisibleLeafColumns().map((column) => (
      <th key={column.id}>
        {flexRender(column.columnDef.header, {})}
        {column.getIsColumnChainPrimary() && (
          <button onClick={() => column.toggleColumnChainExpanded()}>
            {column.getIsColumnChainExpanded() ? '«' : '»'}
          </button>
        )}
      </th>
    ))}
  </tr>
</thead>`,sn=["name","country","tier","city","rate"].map(n=>({id:n,accessorKey:n,header:n[0].toUpperCase()+n.slice(1)})),an=({enableColumnChains:n})=>{const[s]=m.useState(()=>Ie(5)),[a,t]=m.useState([]),[i,o]=m.useState({}),[r,u]=m.useState({}),[Ve,Ue]=m.useState({}),S=Le({_features:[Re],data:s,columns:sn,getCoreRowModel:Be(),state:{columnOrder:a,columnPinning:i,columnChainExpanded:r,columnChainMembers:Ve},onColumnOrderChange:t,onColumnPinningChange:o,chains:[{id:"location",label:"Location",columns:["country","tier",{id:"city",optional:!0}]}],enableColumnChains:n,onColumnChainExpandedChange:u,onColumnChainMembersChange:Ue});return e.jsxDEV("table",{style:{borderCollapse:"collapse",fontSize:13,margin:16},children:[e.jsxDEV("thead",{children:e.jsxDEV("tr",{children:S.getVisibleLeafColumns().map(l=>{const g=!!l.getColumnChain();return e.jsxDEV("th",{"data-header-id":l.id,style:{textAlign:"left",padding:"6px 12px",background:g?"#F5F6FA":void 0,borderBottom:"1px solid #E1E3EB"},children:[U(l.columnDef.header,{}),l.getIsColumnChainPrimary()&&e.jsxDEV("button",{type:"button",style:{marginLeft:6},onClick:()=>l.toggleColumnChainExpanded(),children:l.getIsColumnChainExpanded()?"«":"»"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:564,columnNumber:70},void 0)]},l.id,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:557,columnNumber:18},void 0)})},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:554,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:553,columnNumber:13},void 0),e.jsxDEV("tbody",{children:S.getRowModel().rows.map(l=>e.jsxDEV("tr",{children:l.getVisibleCells().map(g=>e.jsxDEV("td",{style:{padding:"6px 12px"},children:U(g.column.columnDef.cell,g.getContext())},g.id,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:575,columnNumber:60},void 0))},l.id,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:574,columnNumber:54},void 0))},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:573,columnNumber:13},void 0),e.jsxDEV("caption",{style:{captionSide:"bottom",textAlign:"left",paddingTop:8},children:["Chains:"," ",S.getColumnChains().map(l=>l.label).join(", ")||"off"]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:582,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:548,columnNumber:10},void 0)},w={tags:["kb:chains-plain-tan-stack"],name:"Without TableCore (plain TanStack)",render:n=>e.jsxDEV(an,{...n},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-chains.stories.tsx",lineNumber:601,columnNumber:19},void 0),args:{enableColumnChains:!0},argTypes:{chains:{table:{disable:!0}},columnOrder:{table:{disable:!0}},columnPinning:{table:{disable:!0}},columnChainMembers:{table:{disable:!0}},columnChainExpanded:{table:{disable:!0}},resolveChainLayout:{table:{disable:!0}},onColumnOrderChange:{table:{disable:!0}},onColumnPinningChange:{table:{disable:!0}},onColumnChainMembersChange:{table:{disable:!0}},onColumnChainExpandedChange:{table:{disable:!0}},onChainConflicts:{table:{disable:!0}}},parameters:{chainState:!1,sceneCode:()=>R,docs:{source:{type:"code",language:"tsx",transform:()=>R}}}};var B,F,A,$,W;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['kb:chains-collapse-expand'],
  name: '1 · Collapse and expand',
  parameters: {
    hint: <>
                Click <b>»</b> next to <b>Country</b> to open <i>Location</i>, then{' '}
                <b>«</b> to fold it. Watch <code>state.columnChainExpanded</code> in the
                controls.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    await waitFor(() => expect(headerOf(root, 'country')).not.toBeNull());
    await expect(headerOf(root, 'tier')).toBeNull();
    await userEvent.click(within(headerOf(root, 'country') as HTMLElement).getByRole('button', {
      name: 'Expand columns'
    }));
    await waitFor(() => expect(headerOf(root, 'tier')).not.toBeNull());
    await expect(headerOf(root, 'city')).not.toBeNull();
    await userEvent.click(within(root).getByRole('button', {
      name: 'Collapse columns'
    }));
    await waitFor(() => expect(headerOf(root, 'tier')).toBeNull());
  }
}`,...(A=(F=f.parameters)==null?void 0:F.docs)==null?void 0:A.source},description:{story:"Chains start collapsed: one column each.",...(W=($=f.parameters)==null?void 0:$.docs)==null?void 0:W.description}}};var I,_,q,H,J;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['kb:chains-reorder-inside'],
  name: '2 · Reorder inside a chain',
  args: open('location'),
  parameters: {
    hint: <>
                Drag <b>Tier</b> before <b>Country</b>, then fold <i>Location</i>: now
                Tier is the column shown.
            </>
  }
}`,...(q=(_=C.parameters)==null?void 0:_.docs)==null?void 0:q.source},description:{story:"The chain's order is the user's; the first member is the one shown collapsed.",...(J=(H=C.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var z,K,Y,G,Q;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['kb:chains-leave-and-join'],
  name: '3 · Take out and put back',
  args: open('location', 'contact'),
  parameters: {
    hint: <>
                Drag <b>City</b> away from <i>Location</i> — the drag says{' '}
                <i>Leaves Location</i>. Drop it back next to Tier —{' '}
                <i>Joins Location</i>. Same in the <b>Columns</b> panel.
            </>
  }
}`,...(Y=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Y.source},description:{story:"Optional members leave the chain and come back; the header says which.",...(Q=(G=k.parameters)==null?void 0:G.docs)==null?void 0:Q.description}}};var X,Z,ee,ne,se;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['kb:chains-not-allowed'],
  name: '4 · What is not allowed',
  args: open('location'),
  parameters: {
    hint: <>
                Drag <b>Tier</b> (required) out of <i>Location</i>, or <b>Team</b> into
                it — the drag says <i>Not allowed here</i> and nothing moves.
            </>
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Required members stay in; foreign columns stay out.",...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var ae,ie,te,oe,re;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['kb:chains-pinning'],
  name: '5 · Pinning a chain',
  args: open('location'),
  parameters: {
    hint: <>
                Pin <b>Country</b> from its column menu (or drag it into the pinned
                area): the whole <i>Location</i> chain goes with it.
            </>
  }
}`,...(te=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:te.source},description:{story:"Pinning moves the whole chain.",...(re=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:re.description}}};var le,ce,ue,me,de;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['kb:chains-outside-state'],
  name: '6 · Conflicting state from outside',
  args: open('location'),
  parameters: {
    hint: <>
                Open the <b>Chain state</b> tab below and apply a case. Compare{' '}
                <i>you passed</i> with <i>the table uses</i>; switch{' '}
                <code>resolveChainLayout</code> to see your own rule win.
            </>
  }
}`,...(ue=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:ue.source},description:{story:"State pushed from outside that contradicts itself, and how it is settled.",...(de=(me=N.parameters)==null?void 0:me.docs)==null?void 0:de.description}}};var be,he,pe,ge,fe;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ['kb:chains-switched-off'],
  name: '7 · Switched off',
  args: {
    enableColumnChains: false
  },
  parameters: {
    hint: <>
                Turn <code>enableColumnChains</code> on and off: nothing else breaks,
                and the layout comes back as it was.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    await waitFor(() => expect(headerOf(root, 'tier')).not.toBeNull());
    await expect(root.querySelector('[data-chain-toggle]')).toBeNull();
  }
}`,...(pe=(he=E.parameters)==null?void 0:he.docs)==null?void 0:pe.source},description:{story:"The feature off: every column is a plain column again.",...(fe=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:fe.description}}};var Ce,ke,ye,xe,Ne;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  tags: ['kb:chains-playground'],
  args: open('location', 'contact', 'period')
}`,...(ye=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:ye.source},description:{story:"Everything at once.",...(Ne=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:Ne.description}}};var Ee,De,we,ve,Oe;w.parameters={...w.parameters,docs:{...(Ee=w.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  tags: ['kb:chains-plain-tan-stack'],
  name: 'Without TableCore (plain TanStack)',
  render: args => <PlainTable {...args} />,
  args: {
    enableColumnChains: true
  },
  argTypes: {
    chains: {
      table: {
        disable: true
      }
    },
    columnOrder: {
      table: {
        disable: true
      }
    },
    columnPinning: {
      table: {
        disable: true
      }
    },
    columnChainMembers: {
      table: {
        disable: true
      }
    },
    columnChainExpanded: {
      table: {
        disable: true
      }
    },
    resolveChainLayout: {
      table: {
        disable: true
      }
    },
    onColumnOrderChange: {
      table: {
        disable: true
      }
    },
    onColumnPinningChange: {
      table: {
        disable: true
      }
    },
    onColumnChainMembersChange: {
      table: {
        disable: true
      }
    },
    onColumnChainExpandedChange: {
      table: {
        disable: true
      }
    },
    onChainConflicts: {
      table: {
        disable: true
      }
    }
  } as never,
  parameters: {
    chainState: false,
    sceneCode: () => plainCode,
    docs: {
      source: {
        type: 'code',
        language: 'tsx',
        transform: () => plainCode
      }
    }
  }
}`,...(we=(De=w.parameters)==null?void 0:De.docs)==null?void 0:we.source},description:{story:"The same feature on a bare `useReactTable` — no TableCore, a plain HTML\ntable. Shows that chains are a regular TanStack feature: add it to\n`_features`, pass `chains`, read `column.getIsVisible()` as usual.",...(Oe=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:Oe.description}}};const yn=["CollapseExpand","ReorderInside","LeaveAndJoin","NotAllowed","Pinning","OutsideState","SwitchedOff","Playground","PlainTanStack"];export{f as CollapseExpand,k as LeaveAndJoin,y as NotAllowed,N as OutsideState,x as Pinning,w as PlainTanStack,D as Playground,C as ReorderInside,E as SwitchedOff,yn as __namedExportsOrder,kn as default};
