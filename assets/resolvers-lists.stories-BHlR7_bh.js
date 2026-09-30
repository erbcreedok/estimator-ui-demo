import{j as r,c as X}from"./styles-DXLXEQ3H.js";import{u as x,a as M}from"./index-DLqD3z3M.js";import{P as g,R as h}from"./feature-hints-CH2Kq8R8.js";import{g as f,c as a,f as K,d as q}from"./grouping-play-CrknfM6n.js";import{c as k}from"./play-kit-Bu4SXy9H.js";import{M as ee,c as i}from"./mini-kit-1oofpOGO.js";import{t as c,S as se,r as re,w as te,d as oe}from"./scene-kit-DXifMYYP.js";import{a as S}from"./TableCore-kOYdxPhk.js";const{useArgs:ne}=__STORYBOOK_MODULE_PREVIEW_API__,j={placeOrder:{},rank:{},search:"",columnsAtoZ:!1,screenSort:!1,grouping:[],sorting:[]},ae=[i("name","Name",190),i("team","Team",120),i("role","Role",150),i("level","Level",90),i("rate","Rate",80),i("start","Start",110),i("country","Country",120),{id:"contract",accessorFn:e=>e.per==="hour"?"Contractor":"Employee",header:"Contract",meta:X({groupingOnly:!0})}],le=e=>s=>s.toLowerCase().includes(e.trim().toLowerCase()),ie=e=>({...(Object.keys(e.rank).length||e.search)&&{getColumnsFor:(s,t)=>[...t].sort((o,n)=>(e.rank[o.id]??99)-(e.rank[n.id]??99)).filter(o=>le(e.search)(o.getLabel()))},...e.columnsAtoZ&&{getColumnsForColumnsPanel:(s,t)=>[...t].sort((o,n)=>o.getLabel().localeCompare(n.getLabel()))},...e.screenSort&&{getSortsFor:(s,t)=>t.filter(o=>o.id!=="rate")}}),ce=({value:e,onChange:s})=>r.jsxDEV("input",{type:"search","aria-label":"Search the panels",placeholder:"Search the panels…",value:e,onChange:t=>s(t.target.value),style:{width:240,padding:"4px 8px",marginBottom:8}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-scene.tsx",lineNumber:94,columnNumber:2},void 0),ue=function(s,{parameters:t}){const[,o]=ne(),n={...j,...s},y=t;return r.jsxDEV(se,{hint:re(y.hint,n,o),children:r.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[y.searchBox&&r.jsxDEV(ce,{value:n.search,onChange:l=>o({search:l})},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-scene.tsx",lineNumber:123,columnNumber:7},this),r.jsxDEV("div",{style:{flex:1,minHeight:0},children:r.jsxDEV(ee,{columns:ae,grouping:n.grouping,sorting:n.sorting,onGroupingChange:l=>o({grouping:S(l,n.grouping)}),onSortingChange:l=>o({sorting:S(l,n.sorting)}),placeOrder:n.placeOrder,resolvers:ie(n),chrome:"bars"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-scene.tsx",lineNumber:129,columnNumber:7},this)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-scene.tsx",lineNumber:128,columnNumber:6},this)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-scene.tsx",lineNumber:119,columnNumber:5},this)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-scene.tsx",lineNumber:118,columnNumber:4},this)},C=(e,s)=>e.replace(/^/gm,s),me=e=>[(Object.keys(e.rank).length>0||e.search!=="")&&`// Every list of columns: the server's rank, then the search box.
getColumnsFor: ({ table, place }, columns) =>
  [...columns]
    .sort((a, b) => (rank[a.id] ?? 99) - (rank[b.id] ?? 99))
    .filter((c) => c.getLabel().toLowerCase().includes(search.toLowerCase())),`,e.columnsAtoZ&&`// The Columns panel on its own: A–Z (it gets the general answer).
getColumnsForColumnsPanel: (_args, columns) =>
  [...columns].sort((a, b) => a.getLabel().localeCompare(b.getLabel())),`,e.screenSort&&`// The screen's own sort on Rate: no place lists it, so Clear all,
// a header click and the panel leave it.
getSortsFor: (_args, sorts) => sorts.filter((s) => s.id !== 'rate'),`].filter(s=>typeof s=="string"),pe=`const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'team', header: 'Team' },
  { accessorKey: 'role', header: 'Role' },
  { accessorKey: 'level', header: 'Level' },
  { accessorKey: 'rate', header: 'Rate' },
  { accessorKey: 'start', header: 'Start' },
  { accessorKey: 'country', header: 'Country' },
  // Only groups: listed by the panels, never drawn.
  { id: 'contract', accessorFn: contractOf, header: 'Contract', meta: coreMeta({ groupingOnly: true }) },
]`,de=e=>{const s=me(e);return["data={employees}","columns={columns}","getRowId={(e) => e.id}","state={{ grouping, sorting }}","onGroupingChange={setGrouping}","onSortingChange={setSorting}",Object.keys(e.placeOrder).length>0&&`// Who comes first and last in the panels; the rest in the table's order.
placeOrder={${c(e.placeOrder)}}`,s.length>0&&`resolvers={{
${C(s.join(`
`),"  ")}
}}`,"toolbar={(table) => <TableToolbar table={table} />}","statusBar={(table) => <TableStatusBar table={table} />}"].filter(t=>typeof t=="string").map(t=>C(t,"      ")).join(`
`)},w=(e,s)=>{const t={...j,...e},{searchBox:o}=s,n=Object.keys(t.rank).length?`
// From the server, e.g. GET /columns/rank.
const rank: Record<string, number> = ${c(t.rank)}
`:"",y=o?`
  // The search box outside the table.
  const [search, setSearch] = useState(${c(t.search)})`:"",l=o?`
      <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />`:"";return`import { useState } from 'react'
import { TableCore, TableToolbar, TableStatusBar, coreMeta } from '@pnl-simulation/table-core'
${n}
${pe}

export const EmployeesTable = ({ employees }) => {
  const [grouping, setGrouping] = useState(${c(t.grouping,"  ")})
  const [sorting, setSorting] = useState(${c(t.sorting,"  ")})${y}

  return (
    <>${l}
      <TableCore
${C(de(t),"  ")}
      />
    </>
  )
}`},W={placeOrder:{name:"placeOrder",description:"Who comes first and last in a place's list of columns; the rest in the table's order. A parent place covers its children.",control:"object",table:{category:"default answer"}},rank:{name:"rank (from a server)",description:"`resolvers.getColumnsFor`: every list of columns sorted by this rank, lower first.",control:"object",table:{category:"resolvers"}},search:{name:"search (outside)",description:"`resolvers.getColumnsFor`: the lists keep what matches the search box.",control:"text",table:{category:"resolvers"}},columnsAtoZ:{name:"getColumnsForColumnsPanel: A–Z",description:"The Columns panel's own resolver: A–Z, given the general answer.",control:"boolean",table:{category:"resolvers"}},screenSort:{name:"getSortsFor: the screen's Rate",description:"`resolvers.getSortsFor`: the screen's sort on Rate is in no list — Clear all, the header and the panel leave it.",control:"boolean",table:{category:"resolvers"}},grouping:{name:"state.grouping",control:"object",table:{category:"state"}},sorting:{name:"state.sorting",control:"object",table:{category:"state"}}},be=W,v=e=>({include:e.map(s=>{var t;return((t=be[s])==null?void 0:t.name)??s})}),ge={title:"Tables/Table Core/Concepts/Resolvers/Lists",decorators:[te],render:ue,args:j,argTypes:W,parameters:{layout:"fullscreen",sceneCode:w,docs:{codePanel:!0,story:{inline:!1,height:"520px"},source:oe(w),description:{component:"Every list a place shows is asked in a chain: the place’s own resolver, the general one, the default (meta.hideFrom, placeOrder, the table’s order)."}}}},N=e=>e,D=async e=>{const s=await K(e,"Group"),t=M(s).queryAllByRole("button").map(o=>{var n;return(n=(o.getAttribute("aria-label")??"").match(/^Group by (.+)$/))==null?void 0:n[1]}).filter(o=>!!o);return await q(),t},E=async e=>{const s=await K(e,"Columns"),t=Array.from(s.querySelectorAll("[data-column-item]")).map(o=>o.getAttribute("data-column-item")??"");return await q(),t},I={placeOrder:{toolbar:{first:["name"],last:["contract","country"]}}},he=(e,s)=>r.jsxDEV(r.Fragment,{children:["No resolver: the default answer. ",r.jsxDEV("code",{children:"placeOrder"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:66,columnNumber:42},void 0)," puts ",r.jsxDEV("b",{children:"Name"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:66,columnNumber:71},void 0)," ","first and ",r.jsxDEV("b",{children:"Contract"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:67,columnNumber:19},void 0),", ",r.jsxDEV("b",{children:"Country"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:67,columnNumber:36},void 0)," last in every toolbar panel (",r.jsxDEV("code",{children:"toolbar"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:68,columnNumber:9},void 0)," covers them); the rest go in the table's order. Open ",r.jsxDEV("b",{children:"Group"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:69,columnNumber:14},void 0),", ",r.jsxDEV("b",{children:"Sort"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:69,columnNumber:28},void 0),", ",r.jsxDEV("b",{children:"Columns"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:69,columnNumber:41},void 0),". Or:"," ",r.jsxDEV(g,{args:e,update:s,presets:[["Rate first in Sort only",{placeOrder:{toolbar:{first:["name"],last:["contract","country"]},"toolbar.sorting":{first:["rate"]}}}],["no placeOrder",{placeOrder:{}}]]},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:70,columnNumber:9},void 0),r.jsxDEV(h,{args:e,update:s,start:I},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:83,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:65,columnNumber:43},void 0),u={tags:["kb:resolvers-place-order"],name:"1 · placeOrder",args:I,parameters:{...N({hint:he}),controls:v(["placeOrder"])},play:async e=>{if(k(e))return;const s=e.canvasElement;await f(s);const t=await D(s);a(t[0]==="Name",`Name first, got ${t.join()}`),a(t.slice(-2).join()==="Contract,Country",`last, got ${t.join()}`);const o=await E(s);a(o[0]==="name"&&o.at(-1)==="country",`Columns: ${o.join()}`)}},Y={rank:{rate:1,level:2,contract:3}},fe=(e,s)=>r.jsxDEV(r.Fragment,{children:["The order comes from a server: one ",r.jsxDEV("code",{children:"getColumnsFor"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:114,columnNumber:44},void 0)," sorts every list of columns by the rank in ",r.jsxDEV("i",{children:"rank"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:115,columnNumber:40},void 0)," below — Rate, Level, Contract first in Group, Sort and Columns. The table does not need to know the columns up front: an id the rank does not name goes after."," ",r.jsxDEV(g,{args:e,update:s,presets:[["Country first here",{rank:{country:1}}]]},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:118,columnNumber:9},void 0),r.jsxDEV(h,{args:e,update:s,start:Y},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:123,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:113,columnNumber:42},void 0),m={tags:["kb:resolvers-from-server"],name:"2 · Order from a server",args:Y,parameters:{...N({hint:fe}),controls:v(["rank"])},play:async e=>{if(k(e))return;const s=e.canvasElement;await f(s);const t=await D(s);a(t.slice(0,3).join()==="Rate,Level,Contract",`Group: ${t.join()}`);const o=await E(s);a(o.slice(0,2).join()==="rate,level",`Columns: ${o.join()}`)}},z={search:"e"},ke=(e,s)=>r.jsxDEV(r.Fragment,{children:["The search box above is the screen's, not the table's: one"," ",r.jsxDEV("code",{children:"getColumnsFor"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:150,columnNumber:9},void 0)," keeps what matches it, in every panel. Type"," ",r.jsxDEV("b",{children:"ra"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:151,columnNumber:9},void 0),": Group, Sort and Columns list Rate only."," ",r.jsxDEV(g,{args:e,update:s,presets:[['search "ra" here',{search:"ra"}],["clear it",{search:""}]]},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:152,columnNumber:9},void 0),r.jsxDEV(h,{args:e,update:s,start:z},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:157,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:148,columnNumber:44},void 0),p={tags:["kb:resolvers-search-outside"],name:"3 · Search from outside",args:z,parameters:{...N({hint:ke,searchBox:!0}),controls:v(["search"])},play:async e=>{if(k(e))return;const s=e.canvasElement;await f(s);const t=M(s).getByRole("searchbox",{name:"Search the panels"});await x.clear(t),await x.type(t,"ra");const o=await D(s);a(o.join()==="Rate",`only Rate, got ${o.join()}`),await x.clear(t)}},J={placeOrder:{toolbar:{first:["name"],last:["contract","country"]}},columnsAtoZ:!0},ve=(e,s)=>r.jsxDEV(r.Fragment,{children:["Every panel follows ",r.jsxDEV("code",{children:"placeOrder"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:194,columnNumber:29},void 0),", but the Columns panel has its own resolver: ",r.jsxDEV("code",{children:"getColumnsForColumnsPanel"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:195,columnNumber:23},void 0)," sorts A–Z. It gets the general answer and may use it or not. Open ",r.jsxDEV("b",{children:"Group"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:196,columnNumber:52},void 0),", then ",r.jsxDEV("b",{children:"Columns"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:196,columnNumber:71},void 0),"."," ",r.jsxDEV(g,{args:e,update:s,presets:[["Columns like the rest here",{columnsAtoZ:!1}]]},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:198,columnNumber:9},void 0),r.jsxDEV(h,{args:e,update:s,start:J},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:201,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:193,columnNumber:41},void 0),d={tags:["kb:resolvers-one-place-own"],name:"4 · One place on its own",args:J,parameters:{...N({hint:ve}),controls:v(["columnsAtoZ","placeOrder"])},play:async e=>{if(k(e))return;const s=e.canvasElement;await f(s);const t=await D(s);a(t[0]==="Name",`Group follows placeOrder, got ${t.join()}`);const o=await E(s),n=[...o].sort();a(o.join()===n.join(),`Columns A–Z, got ${o.join()}`)}},Q={screenSort:!0,sorting:[{id:"rate",desc:!0},{id:"name",desc:!1}]},Ne=(e,s)=>r.jsxDEV(r.Fragment,{children:["A list decides what the place's actions touch. The screen sorts by"," ",r.jsxDEV("b",{children:"Rate"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:236,columnNumber:9},void 0)," first; ",r.jsxDEV("code",{children:"getSortsFor"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:236,columnNumber:28},void 0)," leaves Rate out of every place: the chip says ",r.jsxDEV("i",{children:"Name"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:237,columnNumber:23},void 0),", the header numbers start at Name,"," ",r.jsxDEV("b",{children:"Clear all"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:238,columnNumber:9},void 0)," keeps Rate."," ",e.screenSort?r.jsxDEV(g,{args:e,update:s,presets:[["show Rate in the lists here",{screenSort:!1}]]},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:239,columnNumber:28},void 0):"Rate is listed now: Clear all drops it too."," ","The same with ",r.jsxDEV("code",{children:"meta.hideFrom"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:242,columnNumber:23},void 0),": ",r.jsxDEV("i",{children:"Sorting › 6 · Hidden sort"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:242,columnNumber:51},void 0),","," ",r.jsxDEV("i",{children:"Grouping › 8 · Hidden grouping"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:243,columnNumber:9},void 0),".",r.jsxDEV(h,{args:e,update:s,start:Q},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:244,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/resolvers-lists.stories.tsx",lineNumber:234,columnNumber:44},void 0),b={tags:["kb:resolvers-list-decides-actions"],name:"5 · A list decides the actions",args:Q,parameters:{...N({hint:Ne}),controls:v(["screenSort","sorting"])},play:async e=>{var o;if(k(e))return;const s=e.canvasElement;await f(s);const t=()=>{var n;return((n=s.querySelector('[data-chip="sort"]'))==null?void 0:n.textContent)??""};a(t()==="Name",`the chip shows Name only, got ${t()}`),await x.click(s.querySelector("[data-clear-all]")),a(((o=s.querySelector('[data-header-id="rate"]'))==null?void 0:o.getAttribute("aria-sort"))==="descending","Clear all keeps the screen’s Rate sort")}};var O,R,T;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['kb:resolvers-place-order'],
  name: '1 · placeOrder',
  args: ORDER_START,
  parameters: {
    ...scene({
      hint: orderHint
    }),
    controls: resolverControls(['placeOrder'])
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await grid(c);
    const group = await offered(c);
    check(group[0] === 'Name', \`Name first, got \${group.join()}\`);
    check(group.slice(-2).join() === 'Contract,Country', \`last, got \${group.join()}\`);
    const columns = await columnsPanel(c);
    check(columns[0] === 'name' && columns.at(-1) === 'country', \`Columns: \${columns.join()}\`);
  }
}`,...(T=(R=u.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var U,A,V;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['kb:resolvers-from-server'],
  name: '2 · Order from a server',
  args: RANK_START,
  parameters: {
    ...scene({
      hint: rankHint
    }),
    controls: resolverControls(['rank'])
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await grid(c);
    const group = await offered(c);
    check(group.slice(0, 3).join() === 'Rate,Level,Contract', \`Group: \${group.join()}\`);
    const columns = await columnsPanel(c);
    check(columns.slice(0, 2).join() === 'rate,level', \`Columns: \${columns.join()}\`);
  }
}`,...(V=(A=m.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var _,$,F;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['kb:resolvers-search-outside'],
  name: '3 · Search from outside',
  args: SEARCH_START,
  parameters: {
    ...scene({
      hint: searchHint,
      searchBox: true
    }),
    controls: resolverControls(['search'])
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await grid(c);
    const box = within(c).getByRole('searchbox', {
      name: 'Search the panels'
    });
    await userEvent.clear(box);
    await userEvent.type(box, 'ra');
    const group = await offered(c);
    check(group.join() === 'Rate', \`only Rate, got \${group.join()}\`);
    await userEvent.clear(box);
  }
}`,...(F=($=p.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var L,P,G;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['kb:resolvers-one-place-own'],
  name: '4 · One place on its own',
  args: OWN_START,
  parameters: {
    ...scene({
      hint: ownHint
    }),
    controls: resolverControls(['columnsAtoZ', 'placeOrder'])
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await grid(c);
    const group = await offered(c);
    check(group[0] === 'Name', \`Group follows placeOrder, got \${group.join()}\`);
    const columns = await columnsPanel(c);
    const sorted = [...columns].sort();
    check(columns.join() === sorted.join(), \`Columns A–Z, got \${columns.join()}\`);
  }
}`,...(G=(P=d.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var H,Z,B;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['kb:resolvers-list-decides-actions'],
  name: '5 · A list decides the actions',
  args: SCREEN_START,
  parameters: {
    ...scene({
      hint: screenHint
    }),
    controls: resolverControls(['screenSort', 'sorting'])
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await grid(c);
    const chip = () => c.querySelector('[data-chip="sort"]')?.textContent ?? '';
    check(chip() === 'Name', \`the chip shows Name only, got \${chip()}\`);
    await userEvent.click(c.querySelector('[data-clear-all]') as HTMLElement);
    check(c.querySelector('[data-header-id="rate"]')?.getAttribute('aria-sort') === 'descending', 'Clear all keeps the screen’s Rate sort');
  }
}`,...(B=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:B.source}}};const ye=["PlaceOrder","FromServer","SearchOutside","OnePlaceOwn","ListDecidesActions"],Re=Object.freeze(Object.defineProperty({__proto__:null,FromServer:m,ListDecidesActions:b,OnePlaceOwn:d,PlaceOrder:u,SearchOutside:p,__namedExportsOrder:ye,default:ge},Symbol.toStringTag,{value:"Module"}));export{m as F,Re as L,d as O,u as P,p as S,b as a};
