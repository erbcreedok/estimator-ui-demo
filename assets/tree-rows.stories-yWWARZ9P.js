import{j as o,c as S}from"./styles-DXLXEQ3H.js";import{u as f,w as d,a as te}from"./index-DLqD3z3M.js";import{r as E}from"./index-BjhrbhTf.js";import{T as re,a as N}from"./TableCore-kOYdxPhk.js";import{S as oe,b as ae}from"./RowSelection-BawG8FvK.js";import{T as ne}from"./TableBulkBar-COMzf5Cs.js";import{T as se}from"./TableStatusBar-BHCIeSi2.js";import{T as ie}from"./TableToolbar-C0bTLKMD.js";import{c as y}from"./play-kit-Bu4SXy9H.js";import{w as ce,d as le,S as de}from"./scene-kit-DXifMYYP.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./panels-D6DlFR9J.js";import"./createSvgIcon-s1BrOgA2.js";const{useArgs:ue}=__STORYBOOK_MODULE_PREVIEW_API__,C=["Anna K.","Piotr N.","Aigerim S.","Nurlan A.","Marta Z."];let w=0;const s=(e,t,r)=>{w+=1;const a=r==null?void 0:r.reduce((n,l)=>n+l.headcount,0);return{id:e.toLowerCase().replace(/[^a-z0-9]+/g,"-"),name:e,kind:t,owner:C[w%C.length],headcount:a??3+w*7%12,budget:(a??3+w*7%12)*9500,children:r}},me=e=>{w=0;const t=r=>s(r,"Project",e?[s(`${r} · Backend`,"Stream"),s(`${r} · Web`,"Stream")]:void 0);return[s("Northwind","Account",[s("Retail platform","Program",[t("Checkout"),t("Catalog"),t("Loyalty")]),s("Data","Program",[t("Warehouse"),t("Reporting")])]),s("Contoso","Account",[s("Mobile","Program",[t("iOS app"),t("Android app")]),s("Payments","Program",[t("Gateway")])]),s("Fabrikam","Account",[s("Logistics","Program",[t("Routing"),t("Tracking")])])]},pe=e=>`$${Math.round(e/1e3)}k`,he=[ae(),{id:"name",accessorKey:"name",header:"Name",size:260},{id:"kind",accessorKey:"kind",header:"Level",size:110},{id:"owner",accessorKey:"owner",header:"Owner",size:140},{id:"headcount",accessorKey:"headcount",header:"Headcount",size:110,meta:S({align:"right"})},{id:"budget",accessorKey:"budget",header:"Budget",size:110,cell:({getValue:e})=>pe(e()),meta:S({align:"right"})}],ee=e=>e==="all"?!0:e==="none"?{}:e,be=e=>e===!0?"all":Object.keys(e).length?e:"none",ge=e=>[{id:"export",label:`Export ${e.length}`,onClick:()=>{}}],ke=e=>o.jsxDEV(ie,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:118,columnNumber:47},void 0),we=e=>o.jsxDEV(se,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:119,columnNumber:49},void 0),fe=e=>o.jsxDEV(ne,{table:e,getActions:ge},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:120,columnNumber:47},void 0),ye=({args:e,hint:t,updateArgs:r})=>{const a=E.useMemo(()=>me(e.deep),[e.deep]),[n]=E.useState({left:[oe,"name"],right:[]}),l=ee(e.expanded);return o.jsxDEV(de,{hint:t,children:o.jsxDEV(re,{data:a,columns:he,getRowId:c=>c.id,getSubRows:c=>c.children,treeColumn:e.treeColumn,readOnly:e.readOnly,state:{expanded:l,sorting:e.sorting},onExpandedChange:c=>{var m;const u=N(c,l);(m=e.onExpandedChange)==null||m.call(e,u),r({expanded:be(u)})},onSortingChange:c=>{var m;const u=N(c,e.sorting);(m=e.onSortingChange)==null||m.call(e,u),r({sorting:u})},initialState:{columnPinning:n},toolbar:ke,statusBar:we,bulkBar:fe},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:137,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:136,columnNumber:10},void 0)},j=e=>`import { useState } from 'react'
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
}`,Re={title:"Tables/Table Core/Draft/Tree rows",tags:["autodocs"],decorators:[ce],render:function(t,{parameters:r}){const[,a]=ue();return o.jsxDEV(ye,{args:t,hint:r.hint,updateArgs:a},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:198,columnNumber:12},this)},args:{expanded:"all",sorting:[],treeColumn:"name",readOnly:!1,deep:!1},argTypes:{expanded:{name:"state.expanded",description:"`true` = all rows open, `{}` = all closed, or a map of open row ids (then neither is ticked).",options:["all","none"],control:{type:"radio",labels:{all:"all open (true)",none:"all closed ({})"}},table:{category:"state"}},sorting:{name:"state.sorting",description:"Sorting applies inside each level: children stay under their parent.",control:"object",table:{category:"state"}},treeColumn:{description:"Column with the indent and chevron.",options:["name","kind","owner"],control:"radio"},readOnly:{description:"No selection: no checkboxes, no bulk bar. Rows still open.",control:"boolean"},deep:{name:"data: 4 levels",description:"Demo data only: add a fourth level (streams under projects).",control:"boolean",table:{category:"demo data"}},onExpandedChange:{action:"onExpandedChange",table:{disable:!0}},onSortingChange:{action:"onSortingChange",table:{disable:!0}}},parameters:{layout:"fullscreen",sceneCode:j,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:le(j),description:{component:"\n**Tree rows** show rows inside rows — Account → Program → Project, as the PnL tables and the unit picker do.\n\n- A row with children has a **chevron** in the tree column; children follow it, indented one step per level.\n- **Enter** on the tree cell opens / closes the row, like the chevron.\n- **Selection** of a parent selects its children; a part selection shows a dash. The bulk bar counts every selected row.\n- **Sorting** works inside each level: children stay under their parent.\n\n**State.** `expanded` (open rows; `true` = all) is the same TanStack state groups use. `getSubRows` turns the tree on; `treeColumn` picks the column."}}}},i=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},x=e=>d(()=>{const t=e.querySelector("[role=grid]");if(!t||!t.querySelector("[data-cell]"))throw new Error("grid not ready");return t}),v=e=>e.querySelectorAll("[role=row][data-row-id]").length,D=(e,t)=>e.querySelector(`[data-row-id="${t}"] [data-tree-toggle]`),p={tags:["kb:tree-open-close"],name:"1 · Open and close",parameters:{hint:o.jsxDEV(o.Fragment,{children:["Click the chevron of ",o.jsxDEV("b",{children:"Northwind"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:309,columnNumber:38},void 0),": its programs and projects fold. Or focus a name cell and press ",o.jsxDEV("b",{children:"Enter"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:310,columnNumber:48},void 0),". Switch"," ",o.jsxDEV("code",{children:"state.expanded"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:311,columnNumber:17},void 0)," below to open or close all."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:308,columnNumber:11},void 0)},play:async e=>{if(y(e))return;const{canvasElement:t}=e;await x(t);const r=v(t);i(t.querySelector('[data-row-id="retail-platform"][data-depth="1"]'),"child one level down"),await f.click(D(t,"northwind")),await d(()=>i(v(t)<r,"Northwind folded")),i(!t.querySelector('[data-row-id="retail-platform"]'),"children hidden"),await f.click(D(t,"northwind")),await d(()=>i(v(t)===r,"Northwind open again"))}},h={tags:["kb:tree-select-with-children"],name:"2 · Select with children",parameters:{hint:o.jsxDEV(o.Fragment,{children:["Tick ",o.jsxDEV("b",{children:"Retail platform"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:336,columnNumber:22},void 0),": its three projects are ticked too, and"," ",o.jsxDEV("b",{children:"Northwind"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:337,columnNumber:17},void 0)," shows a dash. Untick one project: the program shows a dash; tick it back: the program is ticked again."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:335,columnNumber:11},void 0)},play:async e=>{var a,n;if(y(e))return;const{canvasElement:t}=e;await x(t);const r=l=>te(t.querySelector(`[data-row-id="${l}"]`)).getByRole("checkbox",{name:"Select row"});await f.click(r("retail-platform")),await d(()=>i(r("northwind").getAttribute("aria-checked")==="mixed","parent dash")),i(r("checkout").getAttribute("aria-checked")==="true","child ticked"),i((n=(a=t.querySelector("[data-bulk-count]"))==null?void 0:a.textContent)==null?void 0:n.startsWith("4 of"),"program + 3 projects"),await f.click(r("checkout")),await d(()=>i(r("retail-platform").getAttribute("aria-checked")==="mixed","program shows a dash after one project is unticked")),await f.click(r("checkout")),await d(()=>i(r("retail-platform").getAttribute("aria-checked")==="true","program ticked when all its projects are"))}},b={tags:["kb:tree-sorting"],name:"3 · Sorting inside levels",args:{sorting:[{id:"headcount",desc:!0}]},parameters:{hint:o.jsxDEV(o.Fragment,{children:["Sorted by ",o.jsxDEV("b",{children:"Headcount"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:375,columnNumber:27},void 0),", largest first: accounts are sorted, and the programs and projects inside each of them too. Click another header to sort by it."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:374,columnNumber:11},void 0)},play:async e=>{if(y(e))return;const{canvasElement:t}=e;await x(t);const r=Array.from(t.querySelectorAll('[role=row][data-depth="0"]')).map(a=>{var n;return Number(((n=a.querySelector('[data-column-id="headcount"]'))==null?void 0:n.textContent)??0)});i(r.every((a,n)=>n===0||r[n-1]>=a),`accounts sorted: ${r.join(", ")}`)}},g={tags:["kb:tree-deep-tree"],name:"4 · Deep tree",args:{deep:!0},parameters:{hint:o.jsxDEV(o.Fragment,{children:["Four levels: streams under projects. Move the chevrons to another column with ",o.jsxDEV("code",{children:"treeColumn"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:401,columnNumber:22},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/tree-rows.stories.tsx",lineNumber:399,columnNumber:11},void 0)},play:async e=>{if(y(e))return;const{canvasElement:t}=e;await x(t),i(t.querySelector('[role=row][data-depth="3"]'),"fourth level")}},k={tags:["kb:tree-playground"],args:{deep:!0,expanded:"none"}};var T,O,A,U,q;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(O=p.parameters)==null?void 0:O.docs)==null?void 0:A.source},description:{story:"Chevrons open and close rows; all open / all closed from state.",...(q=(U=p.parameters)==null?void 0:U.docs)==null?void 0:q.description}}};var B,R,V,P,F;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(V=(R=h.parameters)==null?void 0:R.docs)==null?void 0:V.source},description:{story:"A parent selects its children; part-selected parents show a dash.",...(F=(P=h.parameters)==null?void 0:P.docs)==null?void 0:F.description}}};var $,M,L,_,W;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(M=b.parameters)==null?void 0:M.docs)==null?void 0:L.source},description:{story:"Sorting keeps children under their parent.",...(W=(_=b.parameters)==null?void 0:_.docs)==null?void 0:W.description}}};var H,K,z,I,G;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(K=g.parameters)==null?void 0:K.docs)==null?void 0:z.source},description:{story:"Four levels, and the tree in another column.",...(G=(I=g.parameters)==null?void 0:I.docs)==null?void 0:G.description}}};var J,Y,Z,Q,X;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['kb:tree-playground'],
  args: {
    deep: true,
    expanded: 'none'
  }
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Everything at once.",...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};const Ve=["OpenClose","SelectWithChildren","Sorting","DeepTree","Playground"];export{g as DeepTree,p as OpenClose,k as Playground,h as SelectWithChildren,b as Sorting,Ve as __namedExportsOrder,Re as default};
