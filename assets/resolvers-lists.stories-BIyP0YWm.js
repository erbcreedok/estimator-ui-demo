import{j as t}from"./jsx-runtime-Cnbe3ryz.js";import{u as S,a as D}from"./index-iBx7lKYd.js";import{P as g,R as b}from"./feature-hints-BLpBNgTy.js";import{g as y,c as a,d as W,b as I}from"./grouping-play-CTN_XQGq.js";import{c as f}from"./play-kit-Bu4SXy9H.js";import{c as X}from"./places-Dp9r7e0L.js";import{M as ee,c as l}from"./mini-kit-DReMkWYx.js";import{t as i,S as re,r as te,w as oe,d as se}from"./scene-kit-BsKxVgS1.js";import{a as R}from"./table-core-base-DFRq_Vzl.js";const{useArgs:ne}=__STORYBOOK_MODULE_PREVIEW_API__,O={placeOrder:{},rank:{},search:"",columnsAtoZ:!1,screenSort:!1,grouping:[],sorting:[]},ae=[l("name","Name",190),l("team","Team",120),l("role","Role",150),l("level","Level",90),l("rate","Rate",80),l("start","Start",110),l("country","Country",120),{id:"contract",accessorFn:e=>e.per==="hour"?"Contractor":"Employee",header:"Contract",meta:X({groupingOnly:!0})}],ce=e=>r=>r.toLowerCase().includes(e.trim().toLowerCase()),le=e=>({...(Object.keys(e.rank).length||e.search)&&{getColumnsFor:(r,o)=>[...o].sort((s,n)=>(e.rank[s.id]??99)-(e.rank[n.id]??99)).filter(s=>ce(e.search)(s.getLabel()))},...e.columnsAtoZ&&{getColumnsForColumnsPanel:(r,o)=>[...o].sort((s,n)=>s.getLabel().localeCompare(n.getLabel()))},...e.screenSort&&{getSortsFor:(r,o)=>o.filter(s=>s.id!=="rate")}}),ie=({value:e,onChange:r})=>t.jsx("input",{type:"search","aria-label":"Search the panels",placeholder:"Search the panels…",value:e,onChange:o=>r(o.target.value),style:{width:240,padding:"4px 8px",marginBottom:8}}),me=function(r,{parameters:o}){const[,s]=ne(),n={...O,...r},j=o;return t.jsx(re,{hint:te(j.hint,n,s),children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[j.searchBox&&t.jsx(ie,{value:n.search,onChange:c=>s({search:c})}),t.jsx("div",{style:{flex:1,minHeight:0},children:t.jsx(ee,{columns:ae,grouping:n.grouping,sorting:n.sorting,onGroupingChange:c=>s({grouping:R(c,n.grouping)}),onSortingChange:c=>s({sorting:R(c,n.sorting)}),placeOrder:n.placeOrder,resolvers:le(n),chrome:"bars"})})]})})},w=(e,r)=>e.replace(/^/gm,r),he=e=>[(Object.keys(e.rank).length>0||e.search!=="")&&`// Every list of columns: the server's rank, then the search box.
getColumnsFor: ({ table, place }, columns) =>
  [...columns]
    .sort((a, b) => (rank[a.id] ?? 99) - (rank[b.id] ?? 99))
    .filter((c) => c.getLabel().toLowerCase().includes(search.toLowerCase())),`,e.columnsAtoZ&&`// The Columns panel on its own: A–Z (it gets the general answer).
getColumnsForColumnsPanel: (_args, columns) =>
  [...columns].sort((a, b) => a.getLabel().localeCompare(b.getLabel())),`,e.screenSort&&`// The screen's own sort on Rate: no place lists it, so Clear all,
// a header click and the panel leave it.
getSortsFor: (_args, sorts) => sorts.filter((s) => s.id !== 'rate'),`].filter(r=>typeof r=="string"),ue=`const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'team', header: 'Team' },
  { accessorKey: 'role', header: 'Role' },
  { accessorKey: 'level', header: 'Level' },
  { accessorKey: 'rate', header: 'Rate' },
  { accessorKey: 'start', header: 'Start' },
  { accessorKey: 'country', header: 'Country' },
  // Only groups: listed by the panels, never drawn.
  { id: 'contract', accessorFn: contractOf, header: 'Contract', meta: coreMeta({ groupingOnly: true }) },
]`,de=e=>{const r=he(e);return["data={employees}","columns={columns}","getRowId={(e) => e.id}","state={{ grouping, sorting }}","onGroupingChange={setGrouping}","onSortingChange={setSorting}",Object.keys(e.placeOrder).length>0&&`// Who comes first and last in the panels; the rest in the table's order.
placeOrder={${i(e.placeOrder)}}`,r.length>0&&`resolvers={{
${w(r.join(`
`),"  ")}
}}`,"toolbar={(table) => <TableToolbar table={table} />}","statusBar={(table) => <TableStatusBar table={table} />}"].filter(o=>typeof o=="string").map(o=>w(o,"      ")).join(`
`)},T=(e,r)=>{const o={...O,...e},{searchBox:s}=r,n=Object.keys(o.rank).length?`
// From the server, e.g. GET /columns/rank.
const rank: Record<string, number> = ${i(o.rank)}
`:"",j=s?`
  // The search box outside the table.
  const [search, setSearch] = useState(${i(o.search)})`:"",c=s?`
      <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />`:"";return`import { useState } from 'react'
import { TableCore, TableToolbar, TableStatusBar, coreMeta } from '@pnl-simulation/table-core'
${n}
${ue}

export const EmployeesTable = ({ employees }) => {
  const [grouping, setGrouping] = useState(${i(o.grouping,"  ")})
  const [sorting, setSorting] = useState(${i(o.sorting,"  ")})${j}

  return (
    <>${c}
      <TableCore
${w(de(o),"  ")}
      />
    </>
  )
}`},U={placeOrder:{name:"placeOrder",description:"Who comes first and last in a place's list of columns; the rest in the table's order. A parent place covers its children.",control:"object",table:{category:"default answer"}},rank:{name:"rank (from a server)",description:"`resolvers.getColumnsFor`: every list of columns sorted by this rank, lower first.",control:"object",table:{category:"resolvers"}},search:{name:"search (outside)",description:"`resolvers.getColumnsFor`: the lists keep what matches the search box.",control:"text",table:{category:"resolvers"}},columnsAtoZ:{name:"getColumnsForColumnsPanel: A–Z",description:"The Columns panel's own resolver: A–Z, given the general answer.",control:"boolean",table:{category:"resolvers"}},screenSort:{name:"getSortsFor: the screen's Rate",description:"`resolvers.getSortsFor`: the screen's sort on Rate is in no list — Clear all, the header and the panel leave it.",control:"boolean",table:{category:"resolvers"}},grouping:{name:"state.grouping",control:"object",table:{category:"state"}},sorting:{name:"state.sorting",control:"object",table:{category:"state"}}},pe=U,v=e=>({include:e.map(r=>{var o;return((o=pe[r])==null?void 0:o.name)??r})}),ge={title:"Tables/Table Core/Concepts/Resolvers/Lists",decorators:[oe],render:me,args:O,argTypes:U,parameters:{layout:"fullscreen",sceneCode:T,docs:{codePanel:!0,story:{inline:!1,height:"520px"},source:se(T),description:{component:"Every list a place shows is asked in a chain: the place’s own resolver, the general one, the default (meta.hideFrom, placeOrder, the table’s order)."}}}},C=e=>e,x=async e=>{const r=await W(e,"Group"),o=D(r).queryAllByRole("button").map(s=>{var n;return(n=(s.getAttribute("aria-label")??"").match(/^Group by (.+)$/))==null?void 0:n[1]}).filter(s=>!!s);return await I(),o},k=async e=>{const r=await W(e,"Columns"),o=Array.from(r.querySelectorAll("[data-column-item]")).map(s=>s.getAttribute("data-column-item")??"");return await I(),o},V={placeOrder:{toolbar:{first:["name"],last:["contract","country"]}}},be=(e,r)=>t.jsxs(t.Fragment,{children:["No resolver: the default answer. ",t.jsx("code",{children:"placeOrder"})," puts ",t.jsx("b",{children:"Name"})," ","first and ",t.jsx("b",{children:"Contract"}),", ",t.jsx("b",{children:"Country"})," last in every toolbar panel (",t.jsx("code",{children:"toolbar"})," covers them); the rest go in the table's order. Open ",t.jsx("b",{children:"Group"}),", ",t.jsx("b",{children:"Sort"}),", ",t.jsx("b",{children:"Columns"}),". Or:"," ",t.jsx(g,{args:e,update:r,presets:[["Rate first in Sort only",{placeOrder:{toolbar:{first:["name"],last:["contract","country"]},"toolbar.sorting":{first:["rate"]}}}],["no placeOrder",{placeOrder:{}}]]}),t.jsx(b,{args:e,update:r,start:V})]}),m={tags:["kb:resolvers-place-order"],name:"1 · placeOrder",args:V,parameters:{...C({hint:be}),controls:v(["placeOrder"])},play:async e=>{if(f(e))return;const r=e.canvasElement;await y(r);const o=await x(r);a(o[0]==="Name",`Name first, got ${o.join()}`),a(o.slice(-2).join()==="Contract,Country",`last, got ${o.join()}`);const s=await k(r);a(s[0]==="name"&&s.at(-1)==="country",`Columns: ${s.join()}`)}},Y={rank:{rate:1,level:2,contract:3}},ye=(e,r)=>t.jsxs(t.Fragment,{children:["The order comes from a server: one ",t.jsx("code",{children:"getColumnsFor"})," sorts every list of columns by the rank in ",t.jsx("i",{children:"rank"})," below — Rate, Level, Contract first in Group, Sort and Columns. The table does not need to know the columns up front: an id the rank does not name goes after."," ",t.jsx(g,{args:e,update:r,presets:[["Country first here",{rank:{country:1}}]]}),t.jsx(b,{args:e,update:r,start:Y})]}),h={tags:["kb:resolvers-from-server"],name:"2 · Order from a server",args:Y,parameters:{...C({hint:ye}),controls:v(["rank"])},play:async e=>{if(f(e))return;const r=e.canvasElement;await y(r);const o=await x(r);a(o.slice(0,3).join()==="Rate,Level,Contract",`Group: ${o.join()}`);const s=await k(r);a(s.slice(0,2).join()==="rate,level",`Columns: ${s.join()}`)}},z={search:"e"},fe=(e,r)=>t.jsxs(t.Fragment,{children:["The search box above is the screen's, not the table's: one"," ",t.jsx("code",{children:"getColumnsFor"})," keeps what matches it, in every panel. Type"," ",t.jsx("b",{children:"ra"}),": Group, Sort and Columns list Rate only."," ",t.jsx(g,{args:e,update:r,presets:[['search "ra" here',{search:"ra"}],["clear it",{search:""}]]}),t.jsx(b,{args:e,update:r,start:z})]}),u={tags:["kb:resolvers-search-outside"],name:"3 · Search from outside",args:z,parameters:{...C({hint:fe,searchBox:!0}),controls:v(["search"])},play:async e=>{if(f(e))return;const r=e.canvasElement;await y(r);const o=D(r).getByRole("searchbox",{name:"Search the panels"});await S.clear(o),await S.type(o,"ra");const s=await x(r);a(s.join()==="Rate,Contract",`only Rate and Contract, got ${s.join()}`),await S.clear(o)}},J={placeOrder:{toolbar:{first:["name"],last:["contract","country"]}},columnsAtoZ:!0},ve=(e,r)=>t.jsxs(t.Fragment,{children:["Every panel follows ",t.jsx("code",{children:"placeOrder"}),", but the Columns panel has its own resolver: ",t.jsx("code",{children:"getColumnsForColumnsPanel"})," sorts A–Z. It gets the general answer and may use it or not. Open ",t.jsx("b",{children:"Group"}),", then ",t.jsx("b",{children:"Columns"}),"."," ",t.jsx(g,{args:e,update:r,presets:[["Columns like the rest here",{columnsAtoZ:!1}]]}),t.jsx(b,{args:e,update:r,start:J})]}),d={tags:["kb:resolvers-one-place-own"],name:"4 · One place on its own",args:J,parameters:{...C({hint:ve}),controls:v(["columnsAtoZ","placeOrder"])},play:async e=>{if(f(e))return;const r=e.canvasElement;await y(r);const o=await x(r);a(o[0]==="Name",`Group follows placeOrder, got ${o.join()}`);const s=await k(r),n=[...s].sort();a(s.join()===n.join(),`Columns A–Z, got ${s.join()}`)}},Q={screenSort:!0,sorting:[{id:"rate",desc:!0},{id:"name",desc:!1}]},Ce=(e,r)=>t.jsxs(t.Fragment,{children:["A list decides what the place's actions touch. The screen sorts by"," ",t.jsx("b",{children:"Rate"})," first; ",t.jsx("code",{children:"getSortsFor"})," leaves Rate out of every place: the chip says ",t.jsx("i",{children:"Name"}),", the header numbers start at Name,"," ",t.jsx("b",{children:"Clear all"})," keeps Rate."," ",e.screenSort?t.jsx(g,{args:e,update:r,presets:[["show Rate in the lists here",{screenSort:!1}]]}):"Rate is listed now: Clear all drops it too."," ","The same with ",t.jsx("code",{children:"meta.hideFrom"}),": ",t.jsx("i",{children:"Sorting › 6 · Hidden sort"}),","," ",t.jsx("i",{children:"Grouping › 8 · Hidden grouping"}),".",t.jsx(b,{args:e,update:r,start:Q})]}),p={tags:["kb:resolvers-list-decides-actions"],name:"5 · A list decides the actions",args:Q,parameters:{...C({hint:Ce}),controls:v(["screenSort","sorting"])},play:async e=>{var s;if(f(e))return;const r=e.canvasElement;await y(r);const o=()=>{var n;return((n=r.querySelector('[data-chip="sort"]'))==null?void 0:n.textContent)??""};a(o()==="Name",`the chip shows Name only, got ${o()}`),await S.click(r.querySelector("[data-clear-all]")),a(((s=r.querySelector('[data-header-id="rate"]'))==null?void 0:s.getAttribute("aria-sort"))==="descending","Clear all keeps the screen’s Rate sort")}};var A,E,_;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(E=m.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var $,F,L;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(F=h.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var N,P,G;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    // "ra" is in Rate and in Contract (Cont-ra-ct), the grouping-only column.
    check(group.join() === 'Rate,Contract', \`only Rate and Contract, got \${group.join()}\`);
    await userEvent.clear(box);
  }
}`,...(G=(P=u.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var H,Z,B;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(B=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:B.source}}};var M,K,q;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};const je=["PlaceOrder","FromServer","SearchOutside","OnePlaceOwn","ListDecidesActions"],_e=Object.freeze(Object.defineProperty({__proto__:null,FromServer:h,ListDecidesActions:p,OnePlaceOwn:d,PlaceOrder:m,SearchOutside:u,__namedExportsOrder:je,default:ge},Symbol.toStringTag,{value:"Module"}));export{h as F,_e as L,d as O,m as P,u as S,p as a};
