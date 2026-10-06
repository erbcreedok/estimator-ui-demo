import{j as o}from"./jsx-runtime-Cnbe3ryz.js";import{u as f,w as d,a as te}from"./index-iBx7lKYd.js";import{r as v}from"./index-3dRrDZpt.js";import{T as re}from"./TableCore-Y75h2oha.js";import{c as E}from"./places-Dp9r7e0L.js";import{S as oe,b as ae}from"./RowSelection-DM7ASqJ8.js";import{T as ne}from"./TableBulkBar-CQrNHS5o.js";import{T as se}from"./TableStatusBar-4NxO8OsQ.js";import{T as ce}from"./TableToolbar-DTYEmPN-.js";import{c as y}from"./play-kit-Bu4SXy9H.js";import{w as ie,d as le,S as de}from"./scene-kit-BsKxVgS1.js";import{D as pe}from"./reference-kit-BHZHy2IZ.js";import{a as C}from"./table-core-base-DFRq_Vzl.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./bulk-bar-DzOf8FOc.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./types-reference-CMrm5GSt.js";const{useArgs:he}=__STORYBOOK_MODULE_PREVIEW_API__,j=["Anna K.","Piotr N.","Aigerim S.","Nurlan A.","Marta Z."];let b=0;const s=(e,t,r)=>{b+=1;const a=r==null?void 0:r.reduce((n,l)=>n+l.headcount,0);return{id:e.toLowerCase().replace(/[^a-z0-9]+/g,"-"),name:e,kind:t,owner:j[b%j.length],headcount:a??3+b*7%12,budget:(a??3+b*7%12)*9500,children:r}},me=e=>{b=0;const t=r=>s(r,"Project",e?[s(`${r} · Backend`,"Stream"),s(`${r} · Web`,"Stream")]:void 0);return[s("Northwind","Account",[s("Retail platform","Program",[t("Checkout"),t("Catalog"),t("Loyalty")]),s("Data","Program",[t("Warehouse"),t("Reporting")])]),s("Contoso","Account",[s("Mobile","Program",[t("iOS app"),t("Android app")]),s("Payments","Program",[t("Gateway")])]),s("Fabrikam","Account",[s("Logistics","Program",[t("Routing"),t("Tracking")])])]},ue=e=>`$${Math.round(e/1e3)}k`,ge=[ae(),{id:"name",accessorKey:"name",header:"Name",size:260},{id:"kind",accessorKey:"kind",header:"Level",size:110},{id:"owner",accessorKey:"owner",header:"Owner",size:140},{id:"headcount",accessorKey:"headcount",header:"Headcount",size:110,meta:E({align:"right"})},{id:"budget",accessorKey:"budget",header:"Budget",size:110,cell:({getValue:e})=>ue(e()),meta:E({align:"right"})}],ee=e=>e==="all"?!0:e==="none"?{}:e,we=e=>e===!0?"all":Object.keys(e).length?e:"none",ke=e=>[{id:"export",label:`Export ${e.length}`,onClick:()=>{}}],be=e=>o.jsx(ce,{table:e}),fe=e=>o.jsx(se,{table:e}),ye=e=>o.jsx(ne,{table:e,getActions:ke}),xe=({args:e,hint:t,updateArgs:r})=>{const a=v.useMemo(()=>me(e.deep),[e.deep]),[n]=v.useState({left:[oe,"name"],right:[]}),l=ee(e.expanded);return o.jsx(de,{hint:t,children:o.jsx(re,{data:a,columns:ge,getRowId:i=>i.id,getSubRows:i=>i.children,treeColumn:e.treeColumn,readOnly:e.readOnly,state:{expanded:l,sorting:e.sorting},onExpandedChange:i=>{var h;const p=C(i,l);(h=e.onExpandedChange)==null||h.call(e,p),r({expanded:we(p)})},onSortingChange:i=>{var h;const p=C(i,e.sorting);(h=e.onSortingChange)==null||h.call(e,p),r({sorting:p})},initialState:{columnPinning:n},toolbar:be,statusBar:fe,bulkBar:ye})})},T=e=>`import { useState } from 'react'
import type { ExpandedState } from '@tanstack/react-table'
import {
  TableBulkBar,
  TableCore,
  createSelectionColumn,
} from '@pnl-simulation/table-core'

type Unit = { id: string; name: string; children?: Unit[] /* … */ }

export const UnitsTable = ({ units }: { units: Unit[] }) => {
  // Owning \`expanded\` is optional: do it to save or restore open rows.
  const [expanded, setExpanded] = useState<ExpandedState>(${JSON.stringify(ee(e.expanded))})

  return (
    <TableCore
      data={units}
      columns={[createSelectionColumn<Unit>(), ...unitColumns]}
      getRowId={(u) => u.id}
      getSubRows={(u) => u.children}${e.treeColumn!=="name"?`
      treeColumn="${e.treeColumn}"`:""}${e.readOnly?`
      readOnly`:""}
      state={{ expanded }}
      onExpandedChange={setExpanded}
      bulkBar={(table) => <TableBulkBar table={table} getActions={bulkActions} />}
    />
  )
}`,Ge={title:"Tables/Table Core/Features/Tree rows",tags:["autodocs"],decorators:[ie],render:function(t,{parameters:r}){const[,a]=he();return o.jsx(xe,{args:t,hint:r.hint,updateArgs:a})},args:{expanded:"all",sorting:[],treeColumn:"name",readOnly:!1,deep:!1},argTypes:{expanded:{name:"state.expanded",description:"`true` = all rows open, `{}` = all closed, or a map of open row ids (then neither is ticked).",options:["all","none"],control:{type:"radio",labels:{all:"all open (true)",none:"all closed ({})"}},table:{category:"state"}},sorting:{name:"state.sorting",description:"Sorting applies inside each level: children stay under their parent.",control:"object",table:{category:"state"}},treeColumn:{description:"Column with the indent and chevron.",options:["name","kind","owner"],control:"radio"},readOnly:{description:"No selection: no checkboxes, no bulk bar. Rows still open.",control:"boolean"},deep:{name:"data: 4 levels",description:"Demo data only: add a fourth level (streams under projects).",control:"boolean",table:{category:"demo data"}},onExpandedChange:{action:"onExpandedChange",table:{disable:!0}},onSortingChange:{action:"onSortingChange",table:{disable:!0}}},parameters:{layout:"fullscreen",sceneCode:T,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:le(T),description:{component:`${pe}


**Tree rows** show rows inside rows — Account → Program → Project, as the PnL tables and the unit picker do.

- A row with children has a **chevron** in the tree column; children follow it, indented one step per level.
- **Enter** on the tree cell opens / closes the row, like the chevron.
- **Selection** of a parent selects its children; a part selection shows a dash. The bulk bar counts every selected row.
- **Sorting** works inside each level: children stay under their parent.

**State.** \`expanded\` (open rows; \`true\` = all) is the same TanStack state groups use. \`getSubRows\` turns the tree on; \`treeColumn\` picks the column.`}}}},c=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},x=e=>d(()=>{const t=e.querySelector("[role=grid]");if(!t||!t.querySelector("[data-cell]"))throw new Error("grid not ready");return t}),S=e=>e.querySelectorAll("[role=row][data-row-id]").length,O=(e,t)=>e.querySelector(`[data-row-id="${t}"] [data-tree-toggle]`),m={tags:["kb:tree-open-close"],name:"1 · Open and close",parameters:{hint:o.jsxs(o.Fragment,{children:["Click the chevron of ",o.jsx("b",{children:"Northwind"}),": its programs and projects fold. Or focus a name cell and press ",o.jsx("b",{children:"Enter"}),". Switch"," ",o.jsx("code",{children:"state.expanded"})," below to open or close all."]})},play:async e=>{if(y(e))return;const{canvasElement:t}=e;await x(t);const r=S(t);c(t.querySelector('[data-row-id="retail-platform"][data-depth="1"]'),"child one level down"),await f.click(O(t,"northwind")),await d(()=>c(S(t)<r,"Northwind folded")),c(!t.querySelector('[data-row-id="retail-platform"]'),"children hidden"),await f.click(O(t,"northwind")),await d(()=>c(S(t)===r,"Northwind open again"))}},u={tags:["kb:tree-select-with-children"],name:"2 · Select with children",parameters:{hint:o.jsxs(o.Fragment,{children:["Tick ",o.jsx("b",{children:"Retail platform"}),": its three projects are ticked too, and"," ",o.jsx("b",{children:"Northwind"})," shows a dash. Untick one project: the program shows a dash; tick it back: the program is ticked again."]})},play:async e=>{var a,n;if(y(e))return;const{canvasElement:t}=e;await x(t);const r=l=>te(t.querySelector(`[data-row-id="${l}"]`)).getByRole("checkbox",{name:"Select row"});await f.click(r("retail-platform")),await d(()=>c(r("northwind").getAttribute("aria-checked")==="mixed","parent dash")),c(r("checkout").getAttribute("aria-checked")==="true","child ticked"),c((n=(a=t.querySelector("[data-bulk-count]"))==null?void 0:a.textContent)==null?void 0:n.startsWith("4 of"),"program + 3 projects"),await f.click(r("checkout")),await d(()=>c(r("retail-platform").getAttribute("aria-checked")==="mixed","program shows a dash after one project is unticked")),await f.click(r("checkout")),await d(()=>c(r("retail-platform").getAttribute("aria-checked")==="true","program ticked when all its projects are"))}},g={tags:["kb:tree-sorting"],name:"3 · Sorting inside levels",args:{sorting:[{id:"headcount",desc:!0}]},parameters:{hint:o.jsxs(o.Fragment,{children:["Sorted by ",o.jsx("b",{children:"Headcount"}),", largest first: accounts are sorted, and the programs and projects inside each of them too. Click another header to sort by it."]})},play:async e=>{if(y(e))return;const{canvasElement:t}=e;await x(t);const r=Array.from(t.querySelectorAll('[role=row][data-depth="0"]')).map(a=>{var n;return Number(((n=a.querySelector('[data-column-id="headcount"]'))==null?void 0:n.textContent)??0)});c(r.every((a,n)=>n===0||r[n-1]>=a),`accounts sorted: ${r.join(", ")}`)}},w={tags:["kb:tree-deep-tree"],name:"4 · Deep tree",args:{deep:!0},parameters:{hint:o.jsxs(o.Fragment,{children:["Four levels: streams under projects. Move the chevrons to another column with ",o.jsx("code",{children:"treeColumn"}),"."]})},play:async e=>{if(y(e))return;const{canvasElement:t}=e;await x(t),c(t.querySelector('[role=row][data-depth="3"]'),"fourth level")}},k={tags:["kb:tree-playground"],args:{deep:!0,expanded:"none"}};var A,N,q,R,B;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['kb:tree-open-close'],
  name: '1 · Open and close',
  parameters: {
    hint: <>
                Click the chevron of <b>Northwind</b>: its programs and projects fold.
                Or focus a name cell and press <b>Enter</b>. Switch{' '}
                <code>state.expanded</code> below to open or close all.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const before = rowCount(canvasElement);
    check(canvasElement.querySelector('[data-row-id="retail-platform"][data-depth="1"]'), 'child one level down');
    await userEvent.click(toggleOf(canvasElement, 'northwind') as HTMLElement);
    await waitFor(() => check(rowCount(canvasElement) < before, 'Northwind folded'));
    check(!canvasElement.querySelector('[data-row-id="retail-platform"]'), 'children hidden');
    await userEvent.click(toggleOf(canvasElement, 'northwind') as HTMLElement);
    await waitFor(() => check(rowCount(canvasElement) === before, 'Northwind open again'));
  }
}`,...(q=(N=m.parameters)==null?void 0:N.docs)==null?void 0:q.source},description:{story:"Chevrons open and close rows; all open / all closed from state.",...(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.description}}};var F,P,$,M,L;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['kb:tree-select-with-children'],
  name: '2 · Select with children',
  parameters: {
    hint: <>
                Tick <b>Retail platform</b>: its three projects are ticked too, and{' '}
                <b>Northwind</b> shows a dash. Untick one project: the program shows a
                dash; tick it back: the program is ticked again.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const box = (id: string) => within(canvasElement.querySelector(\`[data-row-id="\${id}"]\`) as HTMLElement).getByRole('checkbox', {
      name: 'Select row'
    });
    await userEvent.click(box('retail-platform'));
    await waitFor(() => check(box('northwind').getAttribute('aria-checked') === 'mixed', 'parent dash'));
    check(box('checkout').getAttribute('aria-checked') === 'true', 'child ticked');
    check(canvasElement.querySelector('[data-bulk-count]')?.textContent?.startsWith('4 of'), 'program + 3 projects');
    // Untick one project: the program is no longer ticked, it shows a dash.
    await userEvent.click(box('checkout'));
    await waitFor(() => check(box('retail-platform').getAttribute('aria-checked') === 'mixed', 'program shows a dash after one project is unticked'));
    // Tick it again: all projects ticked -> the program is ticked too.
    await userEvent.click(box('checkout'));
    await waitFor(() => check(box('retail-platform').getAttribute('aria-checked') === 'true', 'program ticked when all its projects are'));
  }
}`,...($=(P=u.parameters)==null?void 0:P.docs)==null?void 0:$.source},description:{story:"A parent selects its children; part-selected parents show a dash.",...(L=(M=u.parameters)==null?void 0:M.docs)==null?void 0:L.description}}};var _,U,D,W,H;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['kb:tree-sorting'],
  name: '3 · Sorting inside levels',
  args: {
    sorting: [{
      id: 'headcount',
      desc: true
    }]
  },
  parameters: {
    hint: <>
                Sorted by <b>Headcount</b>, largest first: accounts are sorted, and the
                programs and projects inside each of them too. Click another header to
                sort by it.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const tops = Array.from(canvasElement.querySelectorAll<HTMLElement>('[role=row][data-depth="0"]')).map(r => Number(r.querySelector('[data-column-id="headcount"]')?.textContent ?? 0));
    check(tops.every((n, i) => i === 0 || tops[i - 1] >= n), \`accounts sorted: \${tops.join(', ')}\`);
  }
}`,...(D=(U=g.parameters)==null?void 0:U.docs)==null?void 0:D.source},description:{story:"Sorting keeps children under their parent.",...(H=(W=g.parameters)==null?void 0:W.docs)==null?void 0:H.description}}};var K,z,I,G,J;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['kb:tree-deep-tree'],
  name: '4 · Deep tree',
  args: {
    deep: true
  },
  parameters: {
    hint: <>
                Four levels: streams under projects. Move the chevrons to another column
                with <code>treeColumn</code>.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(canvasElement.querySelector('[role=row][data-depth="3"]'), 'fourth level');
  }
}`,...(I=(z=w.parameters)==null?void 0:z.docs)==null?void 0:I.source},description:{story:"Four levels, and the tree in another column.",...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var V,Y,Z,Q,X;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['kb:tree-playground'],
  args: {
    deep: true,
    expanded: 'none'
  }
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Everything at once.",...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};const Je=["OpenClose","SelectWithChildren","Sorting","DeepTree","Playground"];export{w as DeepTree,m as OpenClose,k as Playground,u as SelectWithChildren,g as Sorting,Je as __namedExportsOrder,Ge as default};
