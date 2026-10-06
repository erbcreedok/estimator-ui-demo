import{j as r}from"./jsx-runtime-Cnbe3ryz.js";import{u as E,w as v,a as M}from"./index-iBx7lKYd.js";import{R as V,r as S}from"./index-3dRrDZpt.js";import{T as J}from"./TableCore-Y75h2oha.js";import{T as I,c as Q}from"./places-Dp9r7e0L.js";import{T as X}from"./TableStatusBar-4NxO8OsQ.js";import{T as Z}from"./TableToolbar-DTYEmPN-.js";import{m as ee,a as u}from"./employees-CL5oqWiT.js";import{c as D}from"./play-kit-Bu4SXy9H.js";import{w as te,H as F,l as j,d as oe,r as re,t as k,S as ne}from"./scene-kit-BsKxVgS1.js";import{D as se}from"./reference-kit-BHZHy2IZ.js";import{a as $}from"./table-core-base-DFRq_Vzl.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./fixtures-P-DSdYmm.js";import"./types-reference-CMrm5GSt.js";const{useArgs:ae}=__STORYBOOK_MODULE_PREVIEW_API__,x=[u("name","Name",190),u("team","Team",140),u("role","Role",160),u("level","Level",100),u("country","Country",140),u("email","Email",240),u("rate","Rate",90)],y=x.map(e=>e.id),le=Object.fromEntries(x.map(e=>[e.id,String(e.header)])),h=e=>le[e]??e,W={all:"everywhere below",toolbar:"every toolbar panel","toolbar.columns":"not in the Columns panel","toolbar.sorting":"not in the Sorting panel","toolbar.grouping":"not in the Group panel",statusBar:"no chips in the status bar","statusBar.sorting":"no sort chip","statusBar.grouping":"no group chip",columnHeader:"nothing extra in its header","columnHeader.sort":"no ↑ / ↓ or number in its header",columnMenu:"not in the column menu lists","columnMenu.sorting":"not in Then by / Move / Clear all sorts","columnMenu.grouping":"Group by / Then by in the column menu leave it","columnMenu.pinning":"Freeze column / Unfreeze column leave its menu","groupHeader.menu":"no menu in its lane header or group row when grouped"},ie={left:["name"],right:[]},p={firstSortChip:{label:"status bar: first sort only",resolvers:{getSortsForStatusBar:(e,t)=>t.slice(0,1)},code:`  // The sort chip shows only the main sort.
  getSortsForStatusBar: (_args, defaults) => defaults.slice(0, 1),`},noEmailToSort:{label:"Sorting panel: no Email",resolvers:{getColumnsForSortingPanel:(e,t)=>t.filter(o=>o.id!=="email")},code:`  // Email is not offered in the Sorting panel.
  getColumnsForSortingPanel: (_args, defaults) =>
    defaults.filter((c) => c.id !== 'email'),`},nameFixed:{label:"Columns panel: no Name",resolvers:{getColumnsForColumnsPanel:(e,t)=>t.filter(o=>o.id!=="name")},code:`  // Name cannot be hidden or moved from the Columns panel.
  getColumnsForColumnsPanel: (_args, defaults) =>
    defaults.filter((c) => c.id !== 'name'),`},lanesAfterPinned:{label:"lanes after the pinned columns",resolvers:{getLanesPosition:()=>"end"},code:`  // Grouping lanes stand after the pinned columns (default 'start': first).
  getLanesPosition: () => 'end',`}},C=Object.keys(p),ce=e=>Object.assign({},...e.map(t=>{var o;return((o=p[t])==null?void 0:o.resolvers)??{}})),K=e=>({column:e.column??"team",hideFrom:(e.hideFrom??[]).filter(t=>I.includes(t)),resolvers:(e.resolvers??[]).filter(t=>t in p),sorting:e.sorting??[],grouping:e.grouping??[]}),me=({table:e})=>{const t=a=>a.length?a.map(h).join(", "):"—",o=a=>a.map(m=>m.id),i=e.getAllLeafColumns().map(a=>a.id),s=a=>i.filter(m=>!a.some(l=>l.id===m)),n=[["statusBar.sorting","Sort chip",t(o(e.getSortsFor("statusBar.sorting")))],["statusBar.grouping","Group chip",t(e.getGroupingFor("statusBar.grouping"))],["toolbar.sorting","Sorting panel",`${t(o(e.getSortsFor("toolbar.sorting")))}; can't add ${t(s(e.getColumnsFor("toolbar.sorting")))}`],["toolbar.grouping","Group panel",`${t(e.getGroupingFor("toolbar.grouping"))}; can't add ${t(s(e.getColumnsFor("toolbar.grouping")))}`],["toolbar.columns","Columns panel",`all but ${t(s(e.getColumnsFor("toolbar.columns")))}`],["columnHeader.sort","Header arrows",t(o(e.getSortsFor("columnHeader.sort")))],["columnMenu.sorting","Column menu sorts",t(o(e.getSortsFor("columnMenu.sorting")))]];return r.jsx("div",{"data-places":!0,style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(230px, 1fr))",gap:"4px 16px",padding:"8px 12px",fontSize:12,color:"#44475A",background:"#F5F6FA",borderRadius:6,marginBottom:8},children:n.map(([a,m,l])=>r.jsxs("span",{"data-place":a,children:[r.jsx("b",{children:m})," ",r.jsx("code",{style:{fontSize:11},children:a}),":"," ",r.jsx("span",{"data-place-value":!0,children:l})]},a))})},ue=e=>r.jsxs(r.Fragment,{children:[r.jsx(me,{table:e}),r.jsx(Z,{table:e})]}),pe=e=>r.jsx(X,{table:e}),he=({args:e,hint:t,updateArgs:o})=>{const[i]=S.useState(()=>ee(30)),s=e.hideFrom.join(),n=S.useMemo(()=>x.map(l=>l.id===e.column?{...l,meta:Q({...l.meta,hideFrom:e.hideFrom})}:l),[e.column,s]),a=e.resolvers.join(),m=S.useMemo(()=>ce(e.resolvers),[a]);return r.jsx(ne,{hint:t,children:r.jsx(J,{data:i,columns:n,getRowId:l=>l.id,resolvers:m,initialState:{columnPinning:ie},state:{sorting:e.sorting,grouping:e.grouping},onSortingChange:l=>{var g;const d=$(l,e.sorting);(g=e.onSortingChange)==null||g.call(e,d),o({sorting:d})},onGroupingChange:l=>{var g;const d=$(l,e.grouping);(g=e.onGroupingChange)==null||g.call(e,d),o({grouping:d})},toolbar:ue,statusBar:pe},`${e.column}|${s}|${a}`)})},B=e=>{const t=K(e),o=t.column,i=t.hideFrom.length?`    hideFrom: [
${t.hideFrom.map(n=>`      '${n}', // ${W[n]}`).join(`
`)}
    ],`:"    // nothing hidden: tick places in meta.hideFrom",s=t.resolvers.length?`
// Own lists for this table. Each resolver gets the default answer (built
// from meta.hideFrom) and returns the one to use.
const resolvers: TableCoreResolvers<Employee> = {
${t.resolvers.map(n=>p[n].code).join(`
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
  coreMeta,${t.resolvers.length?`
  type TableCoreResolvers,`:""}
} from '@pnl-simulation/table-core'

// ${h(o)} — left out of the places below. A parent covers its
// children ('toolbar' = every toolbar panel, 'all' = everywhere). An action in
// a place touches only what that place lists: a sort hidden from the status
// bar stays on its Clear all.
const ${o}Column: ColumnDef<Employee> = {
  accessorKey: '${o}',
  header: '${h(o)}',
  meta: coreMeta({
${i}
  }),
}

// ${y.filter(n=>n!==o).map(n=>`${n}Column`).join(", ")} — ordinary columns.
const columns = [${y.map(n=>`${n}Column`).join(", ")}]
${s}
export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
  const [sorting, setSorting] = useState<SortingState>(${k(t.sorting,"  ")})
  const [grouping, setGrouping] = useState<GroupingState>(${k(t.grouping)})

  return (
    <TableCore
      data={employees}
      columns={columns}
      getRowId={(e) => e.id}${t.resolvers.length?`
      resolvers={resolvers}`:""}
      initialState={{ columnPinning: { left: ['name'] } }}
      state={{ sorting, grouping }}
      onSortingChange={setSorting}
      onGroupingChange={setGrouping}
      toolbar={(table) => <TableToolbar table={table} />}
      statusBar={(table) => <TableStatusBar table={table} />}
    />
  )
}`},Le={title:"Tables/Table Core/Features/Panels & visibility",tags:["autodocs"],decorators:[te],render:function(t,{parameters:o}){const[,i]=ae(),s=K(t);return r.jsx(he,{args:{...t,...s},hint:re(o.hint,s,i),updateArgs:i})},args:{column:"team",hideFrom:[],resolvers:[],sorting:[{id:"team",desc:!1},{id:"name",desc:!1}],grouping:["country"]},argTypes:{column:{name:"column",description:"The column that gets `meta.hideFrom`.",options:y,control:"select",table:{category:"meta.hideFrom"}},hideFrom:{name:"meta.hideFrom",description:"Places the column is left out of. A parent covers its children (toolbar = Columns, Sorting and Group panels; statusBar = both chips; all = everywhere).",options:I,control:"check",table:{category:"meta.hideFrom"}},resolvers:{name:"resolvers",description:"Own lists for the whole table (`resolvers` prop). Each gets the default list and returns its own.",options:C,control:{type:"check",labels:Object.fromEntries(C.map(e=>[e,p[e].label]))},table:{category:"resolvers"}},sorting:{name:"state.sorting",control:"object",table:{category:"state"}},grouping:{name:"state.grouping",options:y,control:"check",table:{category:"state"}},onSortingChange:{action:"onSortingChange",table:{disable:!0}},onGroupingChange:{action:"onGroupingChange",table:{disable:!0}}},parameters:{layout:"fullscreen",sceneCode:B,docs:{source:oe(B),description:{component:`${se}

Where a column shows up, on one screen: the status bar chips, the toolbar panels (Columns, Sorting, Group), the header arrows and the column menu. The grey strip above the table shows what each place lists right now.

- **\\\`meta.hideFrom\\\`** — per column: the places it is left out of. Places form a tree: \\\`toolbar\\\` → \\\`toolbar.columns\\\` · \\\`toolbar.sorting\\\` · \\\`toolbar.grouping\\\`; \\\`statusBar\\\` → \\\`statusBar.sorting\\\` · \\\`statusBar.grouping\\\`; \\\`columnHeader\\\` → \\\`columnHeader.sort\\\`; \\\`columnMenu\\\` → \\\`columnMenu.sorting\\\`; \\\`all\\\` covers everything.
- **\\\`resolvers\\\`** — per table: every place asks a resolver what to list (\\\`getSortsForStatusBar\\\`, \\\`getColumnsForSortingPanel\\\`, \\\`getColumnsForColumnsPanel\\\`, …). A resolver gets the default list (from \\\`hideFrom\\\`) and returns its own.
- **One rule for actions:** an action in a place touches only what that place lists. *Clear all* in the status bar clears the chips' sorts; a header click replaces the sorts the headers show. A sort hidden from a place stays when the user acts there.`}}}},c=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},de=()=>M(document.body),z=e=>v(()=>{const t=e.querySelector("[role=grid]");if(!t||!t.querySelector("[data-cell]"))throw new Error("grid not ready");return t}),w=(e,t)=>{var o;return((o=e.querySelector(`[data-place="${t}"] [data-place-value]`))==null?void 0:o.textContent)??""},T=(e,t)=>{var o;return((o=e.querySelector(`[data-chip="${t}"]`))==null?void 0:o.textContent)??""},U=async(e,t)=>(await E.click(M(e.querySelector("[role=toolbar]")).getByRole("button",{name:t})),v(()=>de().getByRole("group"))),Y=async()=>{var e,t;(t=(e=document.querySelector("[data-panel]"))==null?void 0:e.querySelector("input, button"))==null||t.focus(),await E.keyboard("{Escape}"),await v(()=>c(!document.querySelector("[data-panel]"),"panel"))},ge=e=>e.hideFrom.map(t=>W[t]).join(", "),b={tags:["kb:visibility-hide-from"],name:"1 · Hide a column from places",args:{column:"team",hideFrom:["statusBar"]},parameters:{hint:((e,t)=>{const o=h(e.column),i=[["status bar",["statusBar"]],["header arrows",["columnHeader.sort"]],["Sorting panel and column menu",["toolbar.sorting","columnMenu.sorting"]],["everywhere",["all"]],["nowhere",[]]],s=(n,a)=>n.join()===a.join();return r.jsxs(r.Fragment,{children:[e.hideFrom.length?r.jsxs(r.Fragment,{children:[r.jsx("b",{children:o})," is left out of: ",ge(e),". The strip shows what each place lists. Try ",r.jsx("i",{children:"Clear all"})," in the status bar: only what the chips show is cleared, so a ",o," sort hidden from the status bar stays."]}):r.jsxs(r.Fragment,{children:[r.jsx("b",{children:o})," shows everywhere. Tick places in"," ",r.jsx("i",{children:"meta.hideFrom"})," below."]})," ","Hide ",o," from:"," ",i.filter(([,n])=>!s(n,e.hideFrom)).map(([n,a],m)=>r.jsxs(V.Fragment,{children:[m>0&&" · ",r.jsx(F,{onClick:()=>t({hideFrom:a}),children:n})]},n)),r.jsxs("span",{"data-hint-now":!0,style:{display:"block",marginTop:4,color:"#6C6F80"},children:["Now: sorted by"," ",e.sorting.length?j(e.sorting.map(n=>`${h(n.id)} ${n.desc?"↓":"↑"}`)):"nothing","; grouped by"," ",e.grouping.length?j(e.grouping.map(h)):"nothing","."]})]})})},play:async e=>{if(D(e))return;const{canvasElement:t}=e;await z(t),c(w(t,"statusBar.sorting")==="Name","status bar lists only Name"),c(T(t,"sort")==="Name","sort chip is Name"),c(w(t,"toolbar.sorting").startsWith("Team, Name"),"Sorting panel still lists Team");const o=await U(t,"Sort");c(o.querySelector('[data-sort-item="team"]'),"Team in the panel"),await Y(),await E.click(t.querySelector("[data-clear-all]")),await v(()=>c(w(t,"toolbar.sorting").startsWith("Team;"),"Clear all in the status bar kept the Team sort")),c(!t.querySelector('[data-chip="sort"]'),"no sort chip")}},f={tags:["kb:visibility-own-lists"],name:"2 · Own lists (resolvers)",args:{hideFrom:[],resolvers:["firstSortChip","noEmailToSort"]},parameters:{hint:((e,t)=>{const o=e.resolvers.map(s=>p[s].label),i=C.filter(s=>!e.resolvers.includes(s));return r.jsxs(r.Fragment,{children:[o.length?r.jsxs(r.Fragment,{children:["This table passes its own ",r.jsx("b",{children:"resolvers"}),": ",o.join("; "),". Each gets the default list and returns its own — the panels do not change."]}):r.jsx(r.Fragment,{children:"No resolvers: every place lists its default (from hideFrom)."})," ",i.length>0&&r.jsxs(r.Fragment,{children:["Add:"," ",i.map((s,n)=>r.jsxs(V.Fragment,{children:[n>0&&" · ",r.jsx(F,{onClick:()=>t({resolvers:[...e.resolvers,s]}),children:p[s].label})]},s))]}),o.length>0&&r.jsxs(r.Fragment,{children:[" · ",r.jsx(F,{onClick:()=>t({resolvers:[]}),children:"none"})]})]})})},play:async e=>{if(D(e))return;const{canvasElement:t}=e;await z(t),c(T(t,"sort")==="Team",`sort chip shows the main sort only, got "${T(t,"sort")}"`);const o=await U(t,"Sort");c(!o.querySelector('[data-sort-option="email"]'),"Email not offered in the Sorting panel"),c(o.querySelector('[data-sort-option="rate"]'),"Rate offered"),await Y()}};var R,O,H,A,P;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=(O=b.parameters)==null?void 0:O.docs)==null?void 0:H.source},description:{story:"meta.hideFrom on one column, every place on one screen.",...(P=(A=b.parameters)==null?void 0:A.docs)==null?void 0:P.description}}};var N,_,q,G,L;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(_=f.parameters)==null?void 0:_.docs)==null?void 0:q.source},description:{story:"The resolvers prop: own lists for the whole table.",...(L=(G=f.parameters)==null?void 0:G.docs)==null?void 0:L.description}}};const Me=["HideFrom","OwnLists"];export{b as HideFrom,f as OwnLists,Me as __namedExportsOrder,Le as default};
