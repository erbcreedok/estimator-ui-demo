import{j as o}from"./jsx-runtime-Cnbe3ryz.js";import{u as i,w as d,a as C}from"./index-iBx7lKYd.js";import{a as se}from"./table-core-base-DFRq_Vzl.js";import{r as g}from"./index-3dRrDZpt.js";import{T as le}from"./TableCore-Y75h2oha.js";import{c as ie}from"./places-Dp9r7e0L.js";import{U as de,c as ue}from"./RowSelection-DM7ASqJ8.js";import{T as he}from"./TableBulkBar-CQrNHS5o.js";import{T as me}from"./TableStatusBar-4NxO8OsQ.js";import{T as we}from"./TableToolbar-DTYEmPN-.js";import{m as be,a as b}from"./employees-CL5oqWiT.js";import{c as B}from"./play-kit-Bu4SXy9H.js";import{w as pe,d as ke,S as ge}from"./scene-kit-BsKxVgS1.js";import{D as ye}from"./reference-kit-BHZHy2IZ.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./bulk-bar-DzOf8FOc.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./fixtures-P-DSdYmm.js";import"./types-reference-CMrm5GSt.js";const{useArgs:xe}=__STORYBOOK_MODULE_PREVIEW_API__,Se={ok:"Included",blocked:"Blocked",excluded:"Excluded"},fe={id:"status",accessorKey:"state",header:"Status",size:110,cell:({getValue:e})=>Se[e()],meta:ie({label:"Status"})},Ee=[b("name","Name",190),b("team","Team",120),b("role","Role",150),fe,b("country","Country",120),b("rate","Rate",80),b("start","Start",110)],ve=e=>[ue({rowNumbers:e}),...Ee],Be=["team","role","status","country"],Re=e=>e.original.state!=="blocked",Ce=e=>e==="all"?!0:Re,Te=e=>t=>{const a=new Set(t.map(r=>r.id)),c=r=>e(m=>m.map(k=>a.has(k.id)?{...k,state:r}:k)),s=t.some(r=>r.original.state==="blocked");return[{id:"include",label:"Include",onClick:()=>c("ok")},{id:"exclude",label:"Exclude",onClick:()=>c("excluded")},{id:"delete",label:"Delete",disabledReason:s?"Blocked rows cannot be deleted":void 0,onClick:()=>e(r=>r.filter(m=>!a.has(m.id)))}]},Oe=e=>o.jsx(we,{table:e}),Ae=e=>o.jsx(me,{table:e}),je=({args:e,hint:t,updateArgs:a})=>{const[c,s]=g.useState(()=>be(30)),r=g.useRef(null),[m,k]=g.useState({}),re=g.useMemo(()=>ve(e.rowNumbers),[e.rowNumbers]),ce=g.useMemo(()=>{const l=Te(s);return function(h){return o.jsx(he,{table:h,getActions:l})}},[]);return o.jsx(ge,{hint:t,children:o.jsx(le,{ref:r,data:c,columns:re,getRowId:l=>l.id,readOnly:e.readOnly,enableRowSelection:Ce(e.enableRowSelection),onRowSelectionChange:l=>{var h;const w=se(l,m);k(w),(h=e.onRowSelectionChange)==null||h.call(e,w)},state:{grouping:e.grouping,rowSelection:m},onGroupingChange:l=>{var h;const w=typeof l=="function"?l(e.grouping):l;(h=e.onGroupingChange)==null||h.call(e,w),a({grouping:w})},initialState:{columnPinning:{left:[de,"name"],right:[]}},toolbar:Oe,statusBar:Ae,bulkBar:ce},String(e.rowNumbers))})},T=e=>{const t=e.enableRowSelection==="notBlocked"?`
      enableRowSelection={(row) => row.original.state !== 'blocked'}`:"";return`import { useState } from 'react'
import type { Row, RowSelectionState } from '@tanstack/react-table'
import {
  UTILITY_COLUMN_ID,
  TableBulkBar,
  TableCore,
  createUtilityColumn,
  type RowAction,
} from '@pnl-simulation/table-core'

// Utility column: row numbers + checkboxes (legacy look).
const columns = [createUtilityColumn<Employee>(${e.rowNumbers?"":"{ rowNumbers: false }"}), ...employeeColumns]

const bulkActions = (rows: Row<Employee>[]): RowAction[] => [
  { id: 'include', label: 'Include', onClick: () => include(rows) },
  { id: 'exclude', label: 'Exclude', onClick: () => exclude(rows) },
  {
    id: 'delete',
    label: 'Delete',
    disabledReason: rows.some((r) => r.original.state === 'blocked')
      ? 'Blocked rows cannot be deleted'
      : undefined,
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
}`},rt={title:"Tables/Table Core/Features/Row selection & bulk actions",tags:["autodocs"],decorators:[pe],render:function(t,{parameters:a}){const[,c]=xe();return o.jsx(je,{args:t,hint:a.hint,updateArgs:c})},args:{enableRowSelection:"all",rowNumbers:!0,readOnly:!1,grouping:[]},argTypes:{enableRowSelection:{description:"Which rows can be selected: `true`, or a function per row (here: every row but Blocked).",options:["all","notBlocked"],control:{type:"radio",labels:{all:"true (every row)",notBlocked:'(row) => row.original.state !== "blocked"'}}},rowNumbers:{name:"createUtilityColumn rowNumbers",description:'Row numbers in the utility column, as the legacy table: the checkbox shows on row hover or when the row is selected; the header shows "#". Off = checkboxes only.',control:"boolean",table:{category:"columns"}},readOnly:{description:"No selection at all: no checkboxes, no bulk bar.",control:"boolean"},grouping:{name:"state.grouping",description:"Group to select whole groups with the group checkbox.",options:Be,control:"check",table:{category:"state"}},onRowSelectionChange:{action:"onRowSelectionChange",table:{disable:!0}},onGroupingChange:{action:"onGroupingChange",table:{disable:!0}}},parameters:{layout:"fullscreen",sceneCode:T,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:ke(T),description:{component:`${ye}


**Row selection** lets the user tick rows and act on all of them at once with **bulk actions** — as in the Resource Plan (Delete, Extend Workload, Include, Exclude).

- The **checkboxes** live in the **utility column** (\`createUtilityColumn\`), as in the legacy table, together with the row numbers: the number turns into a checkbox on row hover or when the row is selected. The header shows *#* and turns into *select all* on hover or once a row is selected; a part selection shows a dash. Checkboxes can also go into their own column (\`createSelectionColumn\`) or any cell (\`RowCheckbox\`) — see *Row numbers*.
- While rows are selected, a dark **bulk bar** floats over the bottom of the grid (\`TableBulkBar\`): *Select all*, "N of M selected", the screen's actions and ✕ to clear.
- Which rows can be selected is \`enableRowSelection\` (\`true\` or a function per row). Groups have their own checkbox; a read-only table has none.

**State.** \`rowSelection\` (selected row ids) is ordinary TanStack state: leave it to the table or own it.`}}}},n=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},R=e=>d(()=>{const t=e.querySelector("[role=grid]");if(!t||!t.querySelector("[data-cell]"))throw new Error("grid not ready");return t}),p=(e,t)=>e.querySelector(`[data-row-id="${t}"] [role="checkbox"][aria-label="Select row"]`),u=e=>{var t;return((t=e.querySelector("[data-bulk-count]"))==null?void 0:t.textContent)??""},y={tags:["kb:selection-select-rows"],name:"1 · Select rows",parameters:{hint:o.jsxs(o.Fragment,{children:["Tick a few rows: the bulk bar shows ",o.jsx("i",{children:"N of 30 selected"}),". The header checkbox selects all (a dash when only some are ticked); ",o.jsx("b",{children:"✕"})," in the bar clears."]})},play:async e=>{var s,r;if(B(e))return;const{canvasElement:t}=e;await R(t),n(!t.querySelector("[data-bulk-bar]"),"no bar yet"),await i.click(p(t,"p1")),await i.click(p(t,"p3")),await d(()=>n(u(t)==="2 of 30 selected",u(t)));const a=C(t).getByRole("checkbox",{name:"Select all rows"});n(a.getAttribute("aria-checked")==="mixed","header shows a dash");const c=()=>t.querySelector('[data-bulk-bar] [role="checkbox"]');n(((s=c())==null?void 0:s.getAttribute("aria-checked"))==="mixed","bar checkbox shows a dash"),await i.click(a),await d(()=>n(u(t)==="30 of 30 selected",u(t))),n(((r=c())==null?void 0:r.getAttribute("aria-checked"))==="true","bar checkbox ticked when all are selected"),await i.click(C(t).getByRole("button",{name:"Clear selection"})),await d(()=>n(!t.querySelector("[data-bulk-bar]"),"bar gone"))}},x={tags:["kb:selection-bulk-actions"],name:"2 · Bulk actions",parameters:{hint:o.jsxs(o.Fragment,{children:["Tick Included rows and press ",o.jsx("b",{children:"Exclude"}),": their Status changes. Add a"," ",o.jsx("b",{children:"Blocked"})," row: ",o.jsx("b",{children:"Delete"})," turns off and says why on hover."]})},play:async e=>{if(B(e))return;const{canvasElement:t}=e;await R(t),await i.click(p(t,"p1")),await i.click(await d(()=>t.querySelector('[data-bulk-action="exclude"]'))),await d(()=>{var a;return n(((a=t.querySelector('[data-row-id="p1"] [data-column-id="status"]'))==null?void 0:a.textContent)==="Excluded","p1 excluded")}),await i.click(p(t,"p2")),await d(()=>{var a;return n((a=t.querySelector('[data-bulk-action="delete"]'))==null?void 0:a.disabled,"Delete disabled with a Blocked row")})}},S={tags:["kb:selection-which-rows"],name:"3 · Which rows can be selected",args:{enableRowSelection:"notBlocked"},parameters:{hint:o.jsxs(o.Fragment,{children:[o.jsx("code",{children:"enableRowSelection"})," is a function here: Blocked rows have no checkbox, and ",o.jsx("i",{children:"Select all"})," skips them. Switch it to"," ",o.jsx("code",{children:"true"})," below."]})},play:async e=>{if(B(e))return;const{canvasElement:t}=e;await R(t),n(!p(t,"p2"),"Blocked p2 has no checkbox"),await i.click(C(t).getByRole("checkbox",{name:"Select all rows"})),await d(()=>n(u(t).startsWith("24 of"),u(t)))}},f={tags:["kb:selection-with-grouping"],name:"4 · With grouping",args:{grouping:["team"]},parameters:{hint:o.jsxs(o.Fragment,{children:["Tick the checkbox of a ",o.jsx("b",{children:"Team"})," group: all its rows are selected and the bar counts them. Untick one row: the group shows a dash."]})},play:async e=>{var s;if(B(e))return;const{canvasElement:t}=e;await R(t);const a=t.querySelector("[data-group-id]"),c=(s=a.querySelector("[data-group-count]"))==null?void 0:s.textContent;await i.click(C(a).getByRole("checkbox")),await d(()=>n(u(t)===`${c} of 30 selected`,u(t)))}},E={tags:["kb:selection-read-only"],name:"5 · Read only",args:{readOnly:!0},parameters:{hint:o.jsxs(o.Fragment,{children:[o.jsx("code",{children:"readOnly"})," on: no row or group checkboxes, no bulk bar. Sorting, grouping and navigation still work."]})},play:async e=>{if(B(e))return;const{canvasElement:t}=e;await R(t),n(!p(t,"p1"),"no row checkboxes")}},v={tags:["kb:selection-playground"],args:{grouping:["team"],enableRowSelection:"notBlocked"}};var O,A,j,q,I;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(A=y.parameters)==null?void 0:A.docs)==null?void 0:j.source},description:{story:"Tick rows or all of them; the bar counts them; ✕ clears.",...(I=(q=y.parameters)==null?void 0:q.docs)==null?void 0:I.description}}};var U,F,N,W,_;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(N=(F=x.parameters)==null?void 0:F.docs)==null?void 0:N.source},description:{story:"The screen's actions act on the selected rows.",...(_=(W=x.parameters)==null?void 0:W.docs)==null?void 0:_.description}}};var L,M,D,G,P;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(D=(M=S.parameters)==null?void 0:M.docs)==null?void 0:D.source},description:{story:"A rule per row: Blocked rows cannot be selected.",...(P=(G=S.parameters)==null?void 0:G.docs)==null?void 0:P.description}}};var $,H,z,Y,K;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(z=(H=f.parameters)==null?void 0:H.docs)==null?void 0:z.source},description:{story:"Group checkboxes select whole groups; the bar counts rows, not groups.",...(K=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:K.description}}};var V,J,Q,X,Z;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Q=(J=E.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"Read-only: nothing to select.",...(Z=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,te,oe,ae,ne;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['kb:selection-playground'],
  args: {
    grouping: ['team'],
    enableRowSelection: 'notBlocked'
  }
}`,...(oe=(te=v.parameters)==null?void 0:te.docs)==null?void 0:oe.source},description:{story:"Everything at once.",...(ne=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:ne.description}}};const ct=["SelectRows","BulkActions","WhichRows","WithGrouping","ReadOnly","Playground"];export{x as BulkActions,v as Playground,E as ReadOnly,y as SelectRows,S as WhichRows,f as WithGrouping,ct as __namedExportsOrder,rt as default};
