import{T as q,j as o,c as J}from"./styles-DXLXEQ3H.js";import{u as w,w as v,a as G}from"./index-DLqD3z3M.js";import{R as L,r as k}from"./index-BjhrbhTf.js";import{T as Q,a as C}from"./TableCore-kOYdxPhk.js";import{T as X}from"./TableStatusBar-BHCIeSi2.js";import{T as Z}from"./TableToolbar-C0bTLKMD.js";import{m as ee,a as u}from"./employees-DtM5_3-O.js";import{c as M}from"./play-kit-Bu4SXy9H.js";import{w as se,H as S,l as D,d as te,r as oe,t as T,S as re}from"./scene-kit-DXifMYYP.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./panels-D6DlFR9J.js";import"./createSvgIcon-s1BrOgA2.js";import"./fixtures-CCjjPTo2.js";const{useArgs:ie}=__STORYBOOK_MODULE_PREVIEW_API__,F=[u("name","Name",190),u("team","Team",140),u("role","Role",160),u("level","Level",100),u("country","Country",140),u("email","Email",240),u("rate","Rate",90)],y=F.map(e=>e.id),ne=Object.fromEntries(F.map(e=>[e.id,String(e.header)])),d=e=>ne[e]??e,I={all:"everywhere below",toolbar:"every toolbar panel","toolbar.columns":"not in the Columns panel","toolbar.sorting":"not in the Sorting panel","toolbar.grouping":"not in the Group panel",statusBar:"no chips in the status bar","statusBar.sorting":"no sort chip","statusBar.grouping":"no group chip",columnHeader:"nothing extra in its header","columnHeader.sort":"no ↑ / ↓ or number in its header",columnMenu:"not in the column menu lists","columnMenu.sorting":"not in Then by / Move / Clear all sorts","columnMenu.grouping":"Group by / Then by in the column menu leave it","groupHeader.menu":"no menu in its lane header or group row when grouped"},ae={left:["name"],right:[]},p={firstSortChip:{label:"status bar: first sort only",resolvers:{getSortsForStatusBar:(e,s)=>s.slice(0,1)},code:`  // The sort chip shows only the main sort.
  getSortsForStatusBar: (_args, defaults) => defaults.slice(0, 1),`},noEmailToSort:{label:"Sorting panel: no Email",resolvers:{getColumnsForSortingPanel:(e,s)=>s.filter(t=>t.id!=="email")},code:`  // Email is not offered in the Sorting panel.
  getColumnsForSortingPanel: (_args, defaults) =>
    defaults.filter((c) => c.id !== 'email'),`},nameFixed:{label:"Columns panel: no Name",resolvers:{getColumnsForColumnsPanel:(e,s)=>s.filter(t=>t.id!=="name")},code:`  // Name cannot be hidden or moved from the Columns panel.
  getColumnsForColumnsPanel: (_args, defaults) =>
    defaults.filter((c) => c.id !== 'name'),`},lanesAfterPinned:{label:"lanes after the pinned columns",resolvers:{getLanesPosition:()=>"end"},code:`  // Grouping lanes stand after the pinned columns (default 'start': first).
  getLanesPosition: () => 'end',`}},E=Object.keys(p),le=e=>Object.assign({},...e.map(s=>{var t;return((t=p[s])==null?void 0:t.resolvers)??{}})),W=e=>({column:e.column??"team",hideFrom:(e.hideFrom??[]).filter(s=>q.includes(s)),resolvers:(e.resolvers??[]).filter(s=>s in p),sorting:e.sorting??[],grouping:e.grouping??[]}),ce=({table:e})=>{const s=n=>n.length?n.map(d).join(", "):"—",t=n=>n.map(m=>m.id),l=e.getAllLeafColumns().map(n=>n.id),i=n=>l.filter(m=>!n.some(a=>a.id===m)),r=[["statusBar.sorting","Sort chip",s(t(e.getSortsFor("statusBar.sorting")))],["statusBar.grouping","Group chip",s(e.getGroupingFor("statusBar.grouping"))],["toolbar.sorting","Sorting panel",`${s(t(e.getSortsFor("toolbar.sorting")))}; can't add ${s(i(e.getColumnsFor("toolbar.sorting")))}`],["toolbar.grouping","Group panel",`${s(e.getGroupingFor("toolbar.grouping"))}; can't add ${s(i(e.getColumnsFor("toolbar.grouping")))}`],["toolbar.columns","Columns panel",`all but ${s(i(e.getColumnsFor("toolbar.columns")))}`],["columnHeader.sort","Header arrows",s(t(e.getSortsFor("columnHeader.sort")))],["columnMenu.sorting","Column menu sorts",s(t(e.getSortsFor("columnMenu.sorting")))]];return o.jsxDEV("div",{"data-places":!0,style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(230px, 1fr))",gap:"4px 16px",padding:"8px 12px",fontSize:12,color:"#44475A",background:"#F5F6FA",borderRadius:6,marginBottom:8},children:r.map(([n,m,a])=>o.jsxDEV("span",{"data-place":n,children:[o.jsxDEV("b",{children:m},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:149,columnNumber:21},void 0)," ",o.jsxDEV("code",{style:{fontSize:11},children:n},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:149,columnNumber:36},void 0),":"," ",o.jsxDEV("span",{"data-place-value":!0,children:a},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:152,columnNumber:21},void 0)]},n,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:148,columnNumber:50},void 0))},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:137,columnNumber:10},void 0)},me=e=>o.jsxDEV(o.Fragment,{children:[o.jsxDEV(ce,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:157,columnNumber:9},void 0),o.jsxDEV(Z,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:158,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:156,columnNumber:51},void 0),ue=e=>o.jsxDEV(X,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:160,columnNumber:53},void 0),pe=({args:e,hint:s,updateArgs:t})=>{const[l]=k.useState(()=>ee(30)),i=e.hideFrom.join(),r=k.useMemo(()=>F.map(a=>a.id===e.column?{...a,meta:J({...a.meta,hideFrom:e.hideFrom})}:a),[e.column,i]),n=e.resolvers.join(),m=k.useMemo(()=>le(e.resolvers),[n]);return o.jsxDEV(re,{hint:s,children:o.jsxDEV(Q,{data:l,columns:r,getRowId:a=>a.id,resolvers:m,initialState:{columnPinning:ae},state:{sorting:e.sorting,grouping:e.grouping},onSortingChange:a=>{var g;const b=C(a,e.sorting);(g=e.onSortingChange)==null||g.call(e,b),t({sorting:b})},onGroupingChange:a=>{var g;const b=C(a,e.grouping);(g=e.onGroupingChange)==null||g.call(e,b),t({grouping:b})},toolbar:me,statusBar:ue},`${e.column}|${i}|${n}`,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:186,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:185,columnNumber:10},void 0)},j=e=>{const s=W(e),t=s.column,l=s.hideFrom.length?`    hideFrom: [
${s.hideFrom.map(r=>`      '${r}', // ${I[r]}`).join(`
`)}
    ],`:"    // nothing hidden: tick places in meta.hideFrom",i=s.resolvers.length?`
// Own lists for this table. Each resolver gets the default answer (built
// from meta.hideFrom) and returns the one to use.
const resolvers: TableCoreResolvers<Employee> = {
${s.resolvers.map(r=>p[r].code).join(`
`)}
}
`:"";return`import { useState } from 'react'
import type {
  ColumnDef,
  GroupingState,
  SortingState,
} from '@tanstack/react-table'
import {
  TableCore,
  TableStatusBar,
  TableToolbar,
  coreMeta,${s.resolvers.length?`
  type TableCoreResolvers,`:""}
} from '@pnl-simulation/table-core'

// ${d(t)} — left out of the places below. A parent covers its
// children ('toolbar' = every toolbar panel, 'all' = everywhere). An action in
// a place touches only what that place lists: a sort hidden from the status
// bar stays on its Clear all.
const ${t}Column: ColumnDef<Employee> = {
  accessorKey: '${t}',
  header: '${d(t)}',
  meta: coreMeta({
${l}
  }),
}

// ${y.filter(r=>r!==t).map(r=>`${r}Column`).join(", ")} — ordinary columns.
const columns = [${y.map(r=>`${r}Column`).join(", ")}]
${i}
export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
  const [sorting, setSorting] = useState<SortingState>(${T(s.sorting,"  ")})
  const [grouping, setGrouping] = useState<GroupingState>(${T(s.grouping)})

  return (
    <TableCore
      data={employees}
      columns={columns}
      getRowId={(e) => e.id}${s.resolvers.length?`
      resolvers={resolvers}`:""}
      initialState={{ columnPinning: { left: ['name'] } }}
      state={{ sorting, grouping }}
      onSortingChange={setSorting}
      onGroupingChange={setGrouping}
      toolbar={(table) => <TableToolbar table={table} />}
      statusBar={(table) => <TableStatusBar table={table} />}
    />
  )
}`},Te={title:"Tables/Table Core/Draft/Panels & visibility",tags:["autodocs"],decorators:[se],render:function(s,{parameters:t}){const[,l]=ie(),i=W(s);return o.jsxDEV(pe,{args:{...s,...i},hint:oe(t.hint,i,l),updateArgs:l},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:279,columnNumber:12},this)},args:{column:"team",hideFrom:[],resolvers:[],sorting:[{id:"team",desc:!1},{id:"name",desc:!1}],grouping:["country"]},argTypes:{column:{name:"column",description:"The column that gets `meta.hideFrom`.",options:y,control:"select",table:{category:"meta.hideFrom"}},hideFrom:{name:"meta.hideFrom",description:"Places the column is left out of. A parent covers its children (toolbar = Columns, Sorting and Group panels; statusBar = both chips; all = everywhere).",options:q,control:"check",table:{category:"meta.hideFrom"}},resolvers:{name:"resolvers",description:"Own lists for the whole table (`resolvers` prop). Each gets the default list and returns its own.",options:E,control:{type:"check",labels:Object.fromEntries(E.map(e=>[e,p[e].label]))},table:{category:"resolvers"}},sorting:{name:"state.sorting",control:"object",table:{category:"state"}},grouping:{name:"state.grouping",options:y,control:"check",table:{category:"state"}},onSortingChange:{action:"onSortingChange",table:{disable:!0}},onGroupingChange:{action:"onGroupingChange",table:{disable:!0}}},parameters:{layout:"fullscreen",sceneCode:j,docs:{source:te(j),description:{component:"Where a column shows up, on one screen: the status bar chips, the toolbar panels (Columns, Sorting, Group), the header arrows and the column menu. The grey strip above the table shows what each place lists right now.\n\n- **\\`meta.hideFrom\\`** — per column: the places it is left out of. Places form a tree: \\`toolbar\\` → \\`toolbar.columns\\` · \\`toolbar.sorting\\` · \\`toolbar.grouping\\`; \\`statusBar\\` → \\`statusBar.sorting\\` · \\`statusBar.grouping\\`; \\`columnHeader\\` → \\`columnHeader.sort\\`; \\`columnMenu\\` → \\`columnMenu.sorting\\`; \\`all\\` covers everything.\n- **\\`resolvers\\`** — per table: every place asks a resolver what to list (\\`getSortsForStatusBar\\`, \\`getColumnsForSortingPanel\\`, \\`getColumnsForColumnsPanel\\`, …). A resolver gets the default list (from \\`hideFrom\\`) and returns its own.\n- **One rule for actions:** an action in a place touches only what that place lists. *Clear all* in the status bar clears the chips' sorts; a header click replaces the sorts the headers show. A sort hidden from a place stays when the user acts there."}}}},c=(e,s)=>{if(!e)throw new Error(`Story check failed: ${s}`)},de=()=>G(document.body),K=e=>v(()=>{const s=e.querySelector("[role=grid]");if(!s||!s.querySelector("[data-cell]"))throw new Error("grid not ready");return s}),N=(e,s)=>{var t;return((t=e.querySelector(`[data-place="${s}"] [data-place-value]`))==null?void 0:t.textContent)??""},x=(e,s)=>{var t;return((t=e.querySelector(`[data-chip="${s}"]`))==null?void 0:t.textContent)??""},Y=async(e,s)=>(await w.click(G(e.querySelector("[role=toolbar]")).getByRole("button",{name:s})),v(()=>de().getByRole("group"))),z=async()=>{var e,s;(s=(e=document.querySelector("[data-panel]"))==null?void 0:e.querySelector("input, button"))==null||s.focus(),await w.keyboard("{Escape}"),await v(()=>c(!document.querySelector("[data-panel]"),"panel"))},be=e=>e.hideFrom.map(s=>I[s]).join(", "),h={tags:["kb:visibility-hide-from"],name:"1 · Hide a column from places",args:{column:"team",hideFrom:["statusBar"]},parameters:{hint:((e,s)=>{const t=d(e.column),l=[["status bar",["statusBar"]],["header arrows",["columnHeader.sort"]],["Sorting panel and column menu",["toolbar.sorting","columnMenu.sorting"]],["everywhere",["all"]],["nowhere",[]]],i=(r,n)=>r.join()===n.join();return o.jsxDEV(o.Fragment,{children:[e.hideFrom.length?o.jsxDEV(o.Fragment,{children:[o.jsxDEV("b",{children:t},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:419,columnNumber:29},void 0)," is left out of: ",be(e),". The strip shows what each place lists. Try ",o.jsxDEV("i",{children:"Clear all"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:420,columnNumber:56},void 0)," in the status bar: only what the chips show is cleared, so a ",t," sort hidden from the status bar stays."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:418,columnNumber:45},void 0):o.jsxDEV(o.Fragment,{children:[o.jsxDEV("b",{children:t},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:424,columnNumber:29},void 0)," shows everywhere. Tick places in"," ",o.jsxDEV("i",{children:"meta.hideFrom"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:425,columnNumber:29},void 0)," below."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:423,columnNumber:31},void 0)," ","Hide ",t," from:"," ",l.filter(([,r])=>!i(r,e.hideFrom)).map(([r,n],m)=>o.jsxDEV(L.Fragment,{children:[m>0&&" · ",o.jsxDEV(S,{onClick:()=>s({hideFrom:n}),children:r},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:430,columnNumber:33},void 0)]},r,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:428,columnNumber:110},void 0)),o.jsxDEV("span",{"data-hint-now":!0,style:{display:"block",marginTop:4,color:"#6C6F80"},children:["Now: sorted by"," ",e.sorting.length?D(e.sorting.map(r=>`${d(r.id)} ${r.desc?"↓":"↑"}`)):"nothing","; grouped by"," ",e.grouping.length?D(e.grouping.map(d)):"nothing","."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:436,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:417,columnNumber:14},void 0)})},play:async e=>{if(M(e))return;const{canvasElement:s}=e;await K(s),c(N(s,"statusBar.sorting")==="Name","status bar lists only Name"),c(x(s,"sort")==="Name","sort chip is Name"),c(N(s,"toolbar.sorting").startsWith("Team, Name"),"Sorting panel still lists Team");const t=await Y(s,"Sort");c(t.querySelector('[data-sort-item="team"]'),"Team in the panel"),await z(),await w.click(s.querySelector("[data-clear-all]")),await v(()=>c(N(s,"toolbar.sorting").startsWith("Team;"),"Clear all in the status bar kept the Team sort")),c(!s.querySelector('[data-chip="sort"]'),"no sort chip")}},f={tags:["kb:visibility-own-lists"],name:"2 · Own lists (resolvers)",args:{hideFrom:[],resolvers:["firstSortChip","noEmailToSort"]},parameters:{hint:((e,s)=>{const t=e.resolvers.map(i=>p[i].label),l=E.filter(i=>!e.resolvers.includes(i));return o.jsxDEV(o.Fragment,{children:[t.length?o.jsxDEV(o.Fragment,{children:["This table passes its own ",o.jsxDEV("b",{children:"resolvers"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:482,columnNumber:55},void 0),": ",t.join("; "),". Each gets the default list and returns its own — the panels do not change."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:481,columnNumber:34},void 0):o.jsxDEV(o.Fragment,{children:"No resolvers: every place lists its default (from hideFrom)."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:485,columnNumber:31},void 0)," ",l.length>0&&o.jsxDEV(o.Fragment,{children:["Add:"," ",l.map((i,r)=>o.jsxDEV(L.Fragment,{children:[r>0&&" · ",o.jsxDEV(S,{onClick:()=>s({resolvers:[...e.resolvers,i]}),children:p[i].label},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:490,columnNumber:37},void 0)]},i,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:488,columnNumber:48},void 0))]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:486,columnNumber:40},void 0),t.length>0&&o.jsxDEV(o.Fragment,{children:[" · ",o.jsxDEV(S,{onClick:()=>s({resolvers:[]}),children:"none"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:499,columnNumber:29},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:497,columnNumber:39},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/visibility.stories.tsx",lineNumber:480,columnNumber:14},void 0)})},play:async e=>{if(M(e))return;const{canvasElement:s}=e;await K(s),c(x(s,"sort")==="Team",`sort chip shows the main sort only, got "${x(s,"sort")}"`);const t=await Y(s,"Sort");c(!t.querySelector('[data-sort-option="email"]'),"Email not offered in the Sorting panel"),c(t.querySelector('[data-sort-option="rate"]'),"Rate offered"),await z()}};var V,$,U,B,R;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['kb:visibility-hide-from'],
  name: '1 · Hide a column from places',
  args: {
    column: 'team',
    hideFrom: ['statusBar']
  },
  parameters: {
    hint: ((args, update) => {
      const label = labelOf(args.column);
      const presets: [string, TablePlace[]][] = [['status bar', ['statusBar']], ['header arrows', ['columnHeader.sort']], ['Sorting panel and column menu', ['toolbar.sorting', 'columnMenu.sorting']], ['everywhere', ['all']], ['nowhere', []]];
      const same = (a: TablePlace[], b: TablePlace[]) => a.join() === b.join();
      return <>
                    {args.hideFrom.length ? <>
                            <b>{label}</b> is left out of: {hiddenText(args)}. The strip shows
                            what each place lists. Try <i>Clear all</i> in the status bar:
                            only what the chips show is cleared, so a {label} sort hidden from
                            the status bar stays.
                        </> : <>
                            <b>{label}</b> shows everywhere. Tick places in{' '}
                            <i>meta.hideFrom</i> below.
                        </>}{' '}
                    Hide {label} from:{' '}
                    {presets.filter(([, places]) => !same(places, args.hideFrom)).map(([text, places], i) => <React.Fragment key={text}>
                                {i > 0 && ' · '}
                                <HintAction onClick={() => update({
            hideFrom: places
          })}>
                                    {text}
                                </HintAction>
                            </React.Fragment>)}
                    <span data-hint-now style={{
          display: 'block',
          marginTop: 4,
          color: '#6C6F80'
        }}>
                        Now: sorted by{' '}
                        {args.sorting.length ? listNames(args.sorting.map(s => \`\${labelOf(s.id)} \${s.desc ? '↓' : '↑'}\`)) : 'nothing'}
                        ; grouped by{' '}
                        {args.grouping.length ? listNames(args.grouping.map(labelOf)) : 'nothing'}
                        .
                    </span>
                </>;
    }) as Hint
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(placeValue(canvasElement, 'statusBar.sorting') === 'Name', 'status bar lists only Name');
    check(chipText(canvasElement, 'sort') === 'Name', 'sort chip is Name');
    check(placeValue(canvasElement, 'toolbar.sorting').startsWith('Team, Name'), 'Sorting panel still lists Team');
    const panel = await openControl(canvasElement, 'Sort');
    check(panel.querySelector('[data-sort-item="team"]'), 'Team in the panel');
    await closePopover();
    await userEvent.click(canvasElement.querySelector('[data-clear-all]') as HTMLElement);
    await waitFor(() => check(placeValue(canvasElement, 'toolbar.sorting').startsWith('Team;'), 'Clear all in the status bar kept the Team sort'));
    check(!canvasElement.querySelector('[data-chip="sort"]'), 'no sort chip');
  }
}`,...(U=($=h.parameters)==null?void 0:$.docs)==null?void 0:U.source},description:{story:"meta.hideFrom on one column, every place on one screen.",...(R=(B=h.parameters)==null?void 0:B.docs)==null?void 0:R.description}}};var O,H,P,A,_;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['kb:visibility-own-lists'],
  name: '2 · Own lists (resolvers)',
  args: {
    hideFrom: [],
    resolvers: ['firstSortChip', 'noEmailToSort']
  },
  parameters: {
    hint: ((args, update) => {
      const on = args.resolvers.map(k => RESOLVERS[k].label);
      const off = RESOLVER_KEYS.filter(k => !args.resolvers.includes(k));
      return <>
                    {on.length ? <>
                            This table passes its own <b>resolvers</b>: {on.join('; ')}. Each
                            gets the default list and returns its own — the panels do not
                            change.
                        </> : <>No resolvers: every place lists its default (from hideFrom).</>}{' '}
                    {off.length > 0 && <>
                            Add:{' '}
                            {off.map((k, i) => <React.Fragment key={k}>
                                    {i > 0 && ' · '}
                                    <HintAction onClick={() => update({
              resolvers: [...args.resolvers, k]
            })}>
                                        {RESOLVERS[k].label}
                                    </HintAction>
                                </React.Fragment>)}
                        </>}
                    {on.length > 0 && <>
                            {' · '}
                            <HintAction onClick={() => update({
            resolvers: []
          })}>
                                none
                            </HintAction>
                        </>}
                </>;
    }) as Hint
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(chipText(canvasElement, 'sort') === 'Team', \`sort chip shows the main sort only, got "\${chipText(canvasElement, 'sort')}"\`);
    const panel = await openControl(canvasElement, 'Sort');
    check(!panel.querySelector('[data-sort-option="email"]'), 'Email not offered in the Sorting panel');
    check(panel.querySelector('[data-sort-option="rate"]'), 'Rate offered');
    await closePopover();
  }
}`,...(P=(H=f.parameters)==null?void 0:H.docs)==null?void 0:P.source},description:{story:"The resolvers prop: own lists for the whole table.",...(_=(A=f.parameters)==null?void 0:A.docs)==null?void 0:_.description}}};const je=["HideFrom","OwnLists"];export{h as HideFrom,f as OwnLists,je as __namedExportsOrder,Te as default};
