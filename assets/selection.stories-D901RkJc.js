import{j as o,c as re}from"./styles-DXLXEQ3H.js";import{u as i,w as u,a as R}from"./index-DLqD3z3M.js";import{r as B}from"./index-BjhrbhTf.js";import{T as ce}from"./TableCore-kOYdxPhk.js";import{U as le,c as ie}from"./RowSelection-BawG8FvK.js";import{T as ue}from"./TableBulkBar-COMzf5Cs.js";import{T as de}from"./TableStatusBar-BHCIeSi2.js";import{T as me}from"./TableToolbar-C0bTLKMD.js";import{m as be,a as b}from"./employees-DtM5_3-O.js";import{c as v}from"./play-kit-Bu4SXy9H.js";import{w as ke,d as he,S as pe}from"./scene-kit-DXifMYYP.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./panels-D6DlFR9J.js";import"./createSvgIcon-s1BrOgA2.js";import"./fixtures-CCjjPTo2.js";const{useArgs:we}=__STORYBOOK_MODULE_PREVIEW_API__,ge={ok:"Included",blocked:"Blocked",excluded:"Excluded"},ye={id:"status",accessorKey:"state",header:"Status",size:110,cell:({getValue:e})=>ge[e()],meta:re({label:"Status"})},fe=[b("name","Name",190),b("team","Team",120),b("role","Role",150),ye,b("country","Country",120),b("rate","Rate",80),b("start","Start",110)],xe=e=>[ie({rowNumbers:e}),...fe],Ee=["team","role","status","country"],Se=e=>e.original.state!=="blocked",ve=e=>e==="all"?!0:Se,Ne=e=>t=>{const s=new Set(t.map(a=>a.id)),r=a=>e(h=>h.map(p=>s.has(p.id)?{...p,state:a}:p)),l=t.some(a=>a.original.state==="blocked");return[{id:"include",label:"Include",onClick:()=>r("ok")},{id:"exclude",label:"Exclude",onClick:()=>r("excluded")},{id:"delete",label:"Delete",disabled:l,disabledReason:"Blocked rows cannot be deleted",onClick:()=>e(a=>a.filter(h=>!s.has(h.id)))}]},Be=e=>o.jsxDEV(me,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:89,columnNumber:51},void 0),Re=e=>o.jsxDEV(de,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:90,columnNumber:53},void 0),De=({args:e,hint:t,updateArgs:s})=>{const[r,l]=B.useState(()=>be(30)),a=B.useRef(null),h=B.useMemo(()=>xe(e.rowNumbers),[e.rowNumbers]),p=B.useMemo(()=>{const c=Ne(l);return function(m){return o.jsxDEV(ue,{table:m,getActions:c},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:106,columnNumber:14},this)}},[]);return o.jsxDEV(pe,{hint:t,children:o.jsxDEV(ce,{ref:a,data:r,columns:h,getRowId:c=>c.id,readOnly:e.readOnly,enableRowSelection:ve(e.enableRowSelection),onRowSelectionChange:c=>{var m,D;const w=((m=a.current)==null?void 0:m.table.getState().rowSelection)??{};(D=e.onRowSelectionChange)==null||D.call(e,typeof c=="function"?c(w):c)},state:{grouping:e.grouping},onGroupingChange:c=>{var m;const w=typeof c=="function"?c(e.grouping):c;(m=e.onGroupingChange)==null||m.call(e,w),s({grouping:w})},initialState:{columnPinning:{left:[le,"name"],right:[]}},toolbar:Be,statusBar:Re,bulkBar:p},String(e.rowNumbers),!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:110,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:109,columnNumber:10},void 0)},C=e=>{const t=e.enableRowSelection==="notBlocked"?`
      enableRowSelection={(row) => row.original.state !== 'blocked'}`:"";return`import { useState } from 'react'
import type { Row, RowSelectionState } from '@tanstack/react-table'
import {
  UTILITY_COLUMN_ID,
  TableBulkBar,
  TableCore,
  createUtilityColumn,
  type BulkAction,
} from '@pnl-simulation/table-core'

// Utility column: row numbers + checkboxes (legacy look).
const columns = [createUtilityColumn<Employee>(${e.rowNumbers?"":"{ rowNumbers: false }"}), ...employeeColumns]

const bulkActions = (rows: Row<Employee>[]): BulkAction[] => [
  { id: 'include', label: 'Include', onClick: () => include(rows) },
  { id: 'exclude', label: 'Exclude', onClick: () => exclude(rows) },
  {
    id: 'delete',
    label: 'Delete',
    disabled: rows.some((r) => r.original.state === 'blocked'),
    disabledReason: 'Blocked rows cannot be deleted',
    onClick: () => remove(rows),
  },
]

export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
  // Owning the selection is optional: do it to act on it from outside.
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  return (
    <TableCore
      data={employees}
      columns={columns}
      getRowId={(e) => e.id}${e.readOnly?`
      readOnly`:""}${t}
      state={{ rowSelection${e.grouping.length?", grouping":""} }}
      onRowSelectionChange={setRowSelection}
      initialState={{ columnPinning: { left: [UTILITY_COLUMN_ID, 'name'] } }}
      bulkBar={(table) => <TableBulkBar table={table} getActions={bulkActions} />}
    />
  )
}`},$e={title:"Tables/Table Core/Draft/Row selection & bulk actions",tags:["autodocs"],decorators:[ke],render:function(t,{parameters:s}){const[,r]=we();return o.jsxDEV(De,{args:t,hint:s.hint,updateArgs:r},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:190,columnNumber:12},this)},args:{enableRowSelection:"all",rowNumbers:!0,readOnly:!1,grouping:[]},argTypes:{enableRowSelection:{description:"Which rows can be selected: `true`, or a function per row (here: every row but Blocked).",options:["all","notBlocked"],control:{type:"radio",labels:{all:"true (every row)",notBlocked:'(row) => row.original.state !== "blocked"'}}},rowNumbers:{name:"createUtilityColumn rowNumbers",description:'Row numbers in the utility column, as the legacy table: the checkbox shows on row hover or when the row is selected; the header shows "#". Off = checkboxes only.',control:"boolean",table:{category:"columns"}},readOnly:{description:"No selection at all: no checkboxes, no bulk bar.",control:"boolean"},grouping:{name:"state.grouping",description:"Group to select whole groups with the group checkbox.",options:Ee,control:"check",table:{category:"state"}},onRowSelectionChange:{action:"onRowSelectionChange",table:{disable:!0}},onGroupingChange:{action:"onGroupingChange",table:{disable:!0}}},parameters:{layout:"fullscreen",sceneCode:C,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:he(C),description:{component:'\n**Row selection** lets the user tick rows and act on all of them at once with **bulk actions** — as in the Resource Plan (Delete, Extend Workload, Include, Exclude).\n\n- The **checkboxes** live in the **utility column** (`createUtilityColumn`), as in the legacy table, together with the row numbers: the number turns into a checkbox on row hover or when the row is selected. The header shows *#* and turns into *select all* on hover or once a row is selected; a part selection shows a dash. Checkboxes can also go into their own column (`createSelectionColumn`) or any cell (`RowCheckbox`) — see *Row numbers*.\n- While rows are selected, a dark **bulk bar** floats over the bottom of the grid (`TableBulkBar`): *Select all*, "N of M selected", the screen\'s actions and ✕ to clear.\n- Which rows can be selected is `enableRowSelection` (`true` or a function per row). Groups have their own checkbox; a read-only table has none.\n\n**State.** `rowSelection` (selected row ids) is ordinary TanStack state: leave it to the table or own it.'}}}},n=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},N=e=>u(()=>{const t=e.querySelector("[role=grid]");if(!t||!t.querySelector("[data-cell]"))throw new Error("grid not ready");return t}),k=(e,t)=>e.querySelector(`[data-row-id="${t}"] [role="checkbox"][aria-label="Select row"]`),d=e=>{var t;return((t=e.querySelector("[data-bulk-count]"))==null?void 0:t.textContent)??""},g={tags:["kb:selection-select-rows"],name:"1 · Select rows",parameters:{hint:o.jsxDEV(o.Fragment,{children:["Tick a few rows: the bulk bar shows ",o.jsxDEV("i",{children:"N of 30 selected"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:291,columnNumber:53},void 0),". The header checkbox selects all (a dash when only some are ticked); ",o.jsxDEV("b",{children:"✕"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:292,columnNumber:74},void 0)," in the bar clears."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:290,columnNumber:11},void 0)},play:async e=>{var l,a;if(v(e))return;const{canvasElement:t}=e;await N(t),n(!t.querySelector("[data-bulk-bar]"),"no bar yet"),await i.click(k(t,"p1")),await i.click(k(t,"p3")),await u(()=>n(d(t)==="2 of 30 selected",d(t)));const s=R(t).getByRole("checkbox",{name:"Select all rows"});n(s.getAttribute("aria-checked")==="mixed","header shows a dash");const r=()=>t.querySelector('[data-bulk-bar] [role="checkbox"]');n(((l=r())==null?void 0:l.getAttribute("aria-checked"))==="mixed","bar checkbox shows a dash"),await i.click(s),await u(()=>n(d(t)==="30 of 30 selected",d(t))),n(((a=r())==null?void 0:a.getAttribute("aria-checked"))==="true","bar checkbox ticked when all are selected"),await i.click(R(t).getByRole("button",{name:"Clear selection"})),await u(()=>n(!t.querySelector("[data-bulk-bar]"),"bar gone"))}},y={tags:["kb:selection-bulk-actions"],name:"2 · Bulk actions",parameters:{hint:o.jsxDEV(o.Fragment,{children:["Tick Included rows and press ",o.jsxDEV("b",{children:"Exclude"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:328,columnNumber:46},void 0),": their Status changes. Add a"," ",o.jsxDEV("b",{children:"Blocked"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:329,columnNumber:17},void 0)," row: ",o.jsxDEV("b",{children:"Delete"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:329,columnNumber:37},void 0)," turns off and says why on hover."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:327,columnNumber:11},void 0)},play:async e=>{if(v(e))return;const{canvasElement:t}=e;await N(t),await i.click(k(t,"p1")),await i.click(await u(()=>t.querySelector('[data-bulk-action="exclude"]'))),await u(()=>{var s;return n(((s=t.querySelector('[data-row-id="p1"] [data-column-id="status"]'))==null?void 0:s.textContent)==="Excluded","p1 excluded")}),await i.click(k(t,"p2")),await u(()=>{var s;return n((s=t.querySelector('[data-bulk-action="delete"]'))==null?void 0:s.disabled,"Delete disabled with a Blocked row")})}},f={tags:["kb:selection-which-rows"],name:"3 · Which rows can be selected",args:{enableRowSelection:"notBlocked"},parameters:{hint:o.jsxDEV(o.Fragment,{children:[o.jsxDEV("code",{children:"enableRowSelection"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:356,columnNumber:17},void 0)," is a function here: Blocked rows have no checkbox, and ",o.jsxDEV("i",{children:"Select all"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:357,columnNumber:31},void 0)," skips them. Switch it to"," ",o.jsxDEV("code",{children:"true"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:358,columnNumber:17},void 0)," below."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:355,columnNumber:11},void 0)},play:async e=>{if(v(e))return;const{canvasElement:t}=e;await N(t),n(!k(t,"p2"),"Blocked p2 has no checkbox"),await i.click(R(t).getByRole("checkbox",{name:"Select all rows"})),await u(()=>n(d(t).startsWith("24 of"),d(t)))}},x={tags:["kb:selection-with-grouping"],name:"4 · With grouping",args:{grouping:["team"]},parameters:{hint:o.jsxDEV(o.Fragment,{children:["Tick the checkbox of a ",o.jsxDEV("b",{children:"Team"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:384,columnNumber:40},void 0)," group: all its rows are selected and the bar counts them. Untick one row: the group shows a dash."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:383,columnNumber:11},void 0)},play:async e=>{var l;if(v(e))return;const{canvasElement:t}=e;await N(t);const s=t.querySelector("[data-group-id]"),r=(l=s.querySelector("[data-group-count]"))==null?void 0:l.textContent;await i.click(R(s).getByRole("checkbox")),await u(()=>n(d(t)===`${r} of 30 selected`,d(t)))}},E={tags:["kb:selection-read-only"],name:"5 · Read only",args:{readOnly:!0},parameters:{hint:o.jsxDEV(o.Fragment,{children:[o.jsxDEV("code",{children:"readOnly"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:410,columnNumber:17},void 0)," on: no row or group checkboxes, no bulk bar. Sorting, grouping and navigation still work."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/selection.stories.tsx",lineNumber:409,columnNumber:11},void 0)},play:async e=>{if(v(e))return;const{canvasElement:t}=e;await N(t),n(!k(t,"p1"),"no row checkboxes")}},S={tags:["kb:selection-playground"],args:{grouping:["team"],enableRowSelection:"notBlocked"}};var T,U,O,j,A;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['kb:selection-select-rows'],
  name: '1 · Select rows',
  parameters: {
    hint: <>
                Tick a few rows: the bulk bar shows <i>N of 30 selected</i>. The header
                checkbox selects all (a dash when only some are ticked); <b>✕</b> in the
                bar clears.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(!canvasElement.querySelector('[data-bulk-bar]'), 'no bar yet');
    await userEvent.click(rowBox(canvasElement, 'p1') as HTMLElement);
    await userEvent.click(rowBox(canvasElement, 'p3') as HTMLElement);
    await waitFor(() => check(barCount(canvasElement) === '2 of 30 selected', barCount(canvasElement)));
    const all = within(canvasElement).getByRole('checkbox', {
      name: 'Select all rows'
    });
    check(all.getAttribute('aria-checked') === 'mixed', 'header shows a dash');
    const barBox = () => canvasElement.querySelector('[data-bulk-bar] [role="checkbox"]');
    check(barBox()?.getAttribute('aria-checked') === 'mixed', 'bar checkbox shows a dash');
    await userEvent.click(all);
    await waitFor(() => check(barCount(canvasElement) === '30 of 30 selected', barCount(canvasElement)));
    check(barBox()?.getAttribute('aria-checked') === 'true', 'bar checkbox ticked when all are selected');
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Clear selection'
    }));
    await waitFor(() => check(!canvasElement.querySelector('[data-bulk-bar]'), 'bar gone'));
  }
}`,...(O=(U=g.parameters)==null?void 0:U.docs)==null?void 0:O.source},description:{story:"Tick rows or all of them; the bar counts them; ✕ clears.",...(A=(j=g.parameters)==null?void 0:j.docs)==null?void 0:A.description}}};var V,q,I,F,W;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['kb:selection-bulk-actions'],
  name: '2 · Bulk actions',
  parameters: {
    hint: <>
                Tick Included rows and press <b>Exclude</b>: their Status changes. Add a{' '}
                <b>Blocked</b> row: <b>Delete</b> turns off and says why on hover.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(rowBox(canvasElement, 'p1') as HTMLElement);
    await userEvent.click(await waitFor(() => canvasElement.querySelector('[data-bulk-action="exclude"]') as HTMLElement));
    await waitFor(() => check(canvasElement.querySelector('[data-row-id="p1"] [data-column-id="status"]')?.textContent === 'Excluded', 'p1 excluded'));
    // p2 is Blocked: Delete is off.
    await userEvent.click(rowBox(canvasElement, 'p2') as HTMLElement);
    await waitFor(() => check((canvasElement.querySelector('[data-bulk-action="delete"]') as HTMLButtonElement)?.disabled, 'Delete disabled with a Blocked row'));
  }
}`,...(I=(q=y.parameters)==null?void 0:q.docs)==null?void 0:I.source},description:{story:"The screen's actions act on the selected rows.",...(W=(F=y.parameters)==null?void 0:F.docs)==null?void 0:W.description}}};var L,M,_,G,P;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['kb:selection-which-rows'],
  name: '3 · Which rows can be selected',
  args: {
    enableRowSelection: 'notBlocked'
  },
  parameters: {
    hint: <>
                <code>enableRowSelection</code> is a function here: Blocked rows have no
                checkbox, and <i>Select all</i> skips them. Switch it to{' '}
                <code>true</code> below.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(!rowBox(canvasElement, 'p2'), 'Blocked p2 has no checkbox');
    await userEvent.click(within(canvasElement).getByRole('checkbox', {
      name: 'Select all rows'
    }));
    await waitFor(() => check(barCount(canvasElement).startsWith('24 of'), barCount(canvasElement)));
  }
}`,...(_=(M=f.parameters)==null?void 0:M.docs)==null?void 0:_.source},description:{story:"A rule per row: Blocked rows cannot be selected.",...(P=(G=f.parameters)==null?void 0:G.docs)==null?void 0:P.description}}};var $,H,z,Y,K;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['kb:selection-with-grouping'],
  name: '4 · With grouping',
  args: {
    grouping: ['team']
  },
  parameters: {
    hint: <>
                Tick the checkbox of a <b>Team</b> group: all its rows are selected and
                the bar counts them. Untick one row: the group shows a dash.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const group = canvasElement.querySelector('[data-group-id]') as HTMLElement;
    const size = group.querySelector('[data-group-count]')?.textContent;
    await userEvent.click(within(group).getByRole('checkbox'));
    await waitFor(() => check(barCount(canvasElement) === \`\${size} of 30 selected\`, barCount(canvasElement)));
  }
}`,...(z=(H=x.parameters)==null?void 0:H.docs)==null?void 0:z.source},description:{story:"Group checkboxes select whole groups; the bar counts rows, not groups.",...(K=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:K.description}}};var J,Q,X,Z,ee;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['kb:selection-read-only'],
  name: '5 · Read only',
  args: {
    readOnly: true
  },
  parameters: {
    hint: <>
                <code>readOnly</code> on: no row or group checkboxes, no bulk bar.
                Sorting, grouping and navigation still work.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(!rowBox(canvasElement, 'p1'), 'no row checkboxes');
  }
}`,...(X=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Read-only: nothing to select.",...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,oe,se,ae,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['kb:selection-playground'],
  args: {
    grouping: ['team'],
    enableRowSelection: 'notBlocked'
  }
}`,...(se=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:se.source},description:{story:"Everything at once.",...(ne=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ne.description}}};const He=["SelectRows","BulkActions","WhichRows","WithGrouping","ReadOnly","Playground"];export{y as BulkActions,S as Playground,E as ReadOnly,g as SelectRows,f as WhichRows,x as WithGrouping,He as __namedExportsOrder,$e as default};
