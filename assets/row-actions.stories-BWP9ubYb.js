import{j as n,c as de}from"./styles-DXLXEQ3H.js";import{u as c,w as r,a as l}from"./index-DLqD3z3M.js";import{r as v}from"./index-BjhrbhTf.js";import{T as ue}from"./TableCore-kOYdxPhk.js";import{T as me}from"./TableToolbar-C0bTLKMD.js";import{c as pe}from"./RowActions-CWt-61bw.js";import{m as R,a as D}from"./employees-DtM5_3-O.js";import{c as d}from"./play-kit-Bu4SXy9H.js";import{w as be,d as we,t as x,S as he}from"./scene-kit-DXifMYYP.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./panels-D6DlFR9J.js";import"./createSvgIcon-s1BrOgA2.js";import"./fixtures-CCjjPTo2.js";const ye=[D("name","Name",190),D("team","Team",140),{id:"state",accessorKey:"state",header:"State",size:110,meta:de({label:"State"})}],E=["duplicate","exclude","delete"],fe=e=>n.jsxDEV(me,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:41,columnNumber:51},void 0),ke=(e,t,o)=>({id:"duplicate",label:"Duplicate",disabled:t,disabledReason:t?"Read-only table":void 0,onClick:()=>o(a=>{const i=a.findIndex(le=>le.id===e.id),ce={...e.original,id:`${e.id}-copy-${a.length}`};return[...a.slice(0,i+1),ce,...a.slice(i+1)]})}),ge=(e,t,o)=>({id:"exclude",label:"Exclude from calculation",disabled:t.readOnly||t.disableExclude,disabledReason:t.readOnly?"Read-only table":t.disabledReason,onClick:()=>o(a=>a.map(i=>i.id===e.id?{...i,state:"excluded"}:i))}),xe=(e,t,o)=>({id:"delete",label:"Delete",hidden:t.hideDeleteForBlocked&&e.original.state==="blocked",disabled:t.readOnly,disabledReason:t.readOnly?"Read-only table":void 0,onClick:()=>o(a=>a.filter(i=>i.id!==e.id))}),Ee=(e,t,o)=>E.filter(a=>t.actions.includes(a)).map(a=>a==="duplicate"?ke(e,t.readOnly,o):a==="exclude"?ge(e,t,o):xe(e,t,o)),ve=({args:e,hint:t})=>{const[o,a]=v.useState(()=>R(e.rows));return v.useEffect(()=>a(R(e.rows)),[e.rows]),n.jsxDEV(he,{hint:t,children:n.jsxDEV(ue,{data:o,columns:[...ye,pe(i=>Ee(i,e,a))],getRowId:i=>i.id,readOnly:e.readOnly,toolbar:fe},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:90,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:89,columnNumber:10},void 0)},A=e=>`import { useState } from 'react'
import {
  createRowActionsColumn,
  TableCore,
  TableToolbar,
  type RowAction,
} from '@pnl-simulation/table-core'

export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
  const [data, setData] = useState(employees)
  const getActions = (row: Row<Employee>): RowAction[] => [
    ${e.actions.includes("duplicate")?"{ id: 'duplicate', label: 'Duplicate', onClick: () => duplicate(row) },":""}
    ${e.actions.includes("exclude")?`{ id: 'exclude', label: 'Exclude from calculation', disabled: ${x(e.disableExclude)}, disabledReason: ${x(e.disabledReason)}, onClick: () => exclude(row) },`:""}
    ${e.actions.includes("delete")?`{ id: 'delete', label: 'Delete', hidden: ${x(e.hideDeleteForBlocked)} && row.original.state === 'blocked', onClick: () => remove(row) },`:""}
  ]

  return (
    <TableCore
      data={data}
      columns={[...employeeColumns, createRowActionsColumn(getActions)]}
      getRowId={(employee) => employee.id}${e.readOnly?`
      readOnly`:""}
      toolbar={(table) => <TableToolbar table={table} />}
    />
  )
}`,He={title:"Tables/Table Core/Draft/Row actions",tags:["autodocs"],decorators:[be],render:function(t,{parameters:o}){return n.jsxDEV(ve,{args:t,hint:o.hint},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:131,columnNumber:12},this)},args:{actions:[...E],hideDeleteForBlocked:!0,disableExclude:!1,disabledReason:"Calculation is locked",readOnly:!1,rows:12},argTypes:{actions:{description:"The RowAction objects the owning screen supplies per row.",options:E,control:"check"},hideDeleteForBlocked:{name:"RowAction.hidden",description:"Hide Delete for Blocked rows.",control:"boolean"},disableExclude:{name:"RowAction.disabled",description:"Disable Exclude for this owner configuration.",control:"boolean"},disabledReason:{name:"RowAction.disabledReason",description:"Tooltip text for the disabled Exclude action.",control:"text"},readOnly:{description:"TableCore prop; this owner disables its row actions explicitly.",control:"boolean"},rows:{description:"Number of demo employees.",control:{type:"range",min:3,max:30,step:1},table:{category:"demo data"}}},parameters:{layout:"fullscreen",sceneCode:A,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:we(A),description:{component:"\n**Row actions** add a narrow ⋮ utility column. The owning screen provides a `RowAction[]` for each row, including what an action does and whether it is hidden or disabled.\n\n- Add `createRowActionsColumn(getActions)` where the screen wants the 48 px column. It cannot be sorted, grouped, reordered, hidden or stretched, and stays out of the Columns panel and chips.\n- The button opens a menu for its row. Selecting an enabled item closes the menu before calling its handler.\n- `hidden` removes an item for that row. `disabled` keeps it visible; `disabledReason` is its hover tooltip.\n- `readOnly` is a TableCore prop, not an action policy: if the screen wants read-only actions, it supplies disabled actions as this scene does.\n"}}}},s=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},u=e=>r(()=>{const t=e.querySelector("[role=grid]");if(!t||!t.querySelector("[data-cell]"))throw new Error("grid not ready");return t}),re=(e,t)=>e.querySelector(`[data-row-actions="${t}"]`),k=e=>document.querySelector(`[data-row-action="${e}"]`),g=async(e,t)=>{const o=re(e,t);if(!o)throw new Error(`Story check failed: no row-actions button for ${t}`);return await c.click(o),r(()=>l(document.body).getByRole("menu"))},C=e=>e.querySelectorAll('[data-cell][data-column-id="name"]').length,m={tags:["kb:row-actions-utility-column"],name:"1 · Utility column",parameters:{hint:n.jsxDEV(n.Fragment,{children:["The last column is a fixed 48 px ⋮ utility column. Open ",n.jsxDEV("b",{children:"Columns"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:233,columnNumber:73},void 0),": it is intentionally not offered there."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:232,columnNumber:11},void 0)},play:async e=>{if(d(e))return;const{canvasElement:t}=e;await u(t);const o=t.querySelector('[data-header-id="row-actions"]');s(o,"row actions header exists"),s(Math.abs(o.getBoundingClientRect().width-48)<=1,"row actions column is 48 px"),s(!(o!=null&&o.querySelector("[data-grip]")),"row actions cannot reorder"),await c.click(l(t.querySelector("[role=toolbar]")).getByRole("button",{name:"Columns"})),await r(()=>{s(!document.querySelector('[data-column-item="row-actions"]'),"row actions are not in the Columns panel")})}},p={tags:["kb:row-actions-open-menu"],name:"2 · Open a row menu",parameters:{hint:n.jsxDEV(n.Fragment,{children:"Press ⋮ on a row to see the actions its owner supplied for that row."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:261,columnNumber:11},void 0)},play:async e=>{if(d(e))return;await u(e.canvasElement),await g(e.canvasElement,"p1");const t=l(document.body);s(t.getByRole("menuitem",{name:"Duplicate"}),"Duplicate shown"),s(t.getByRole("menuitem",{name:"Exclude from calculation"}),"Exclude shown"),s(t.getByRole("menuitem",{name:"Delete"}),"Delete shown")}},b={tags:["kb:row-actions-hidden-action"],name:"3 · Hidden action",parameters:{hint:n.jsxDEV(n.Fragment,{children:["Open ⋮ for the Blocked row: Delete is hidden by this screen's"," ",n.jsxDEV("code",{children:"RowAction.hidden"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:287,columnNumber:17},void 0)," rule."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:285,columnNumber:11},void 0)},play:async e=>{d(e)||(await u(e.canvasElement),await g(e.canvasElement,"p2"),await r(()=>s(!k("delete"),"Delete is hidden for the Blocked row")))}},w={tags:["kb:row-actions-disabled-action"],name:"4 · Disabled action with a reason",args:{disableExclude:!0,disabledReason:"Calculation is locked"},parameters:{hint:n.jsxDEV(n.Fragment,{children:"Exclude is disabled but remains visible. Hover it to see why."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:307,columnNumber:11},void 0)},play:async e=>{if(d(e))return;await u(e.canvasElement),await g(e.canvasElement,"p1");const t=k("exclude");s(t.getAttribute("aria-disabled")==="true","Exclude disabled"),await c.hover(t.parentElement),await r(()=>s(l(document.body).getByRole("tooltip").textContent==="Calculation is locked","disabled reason tooltip"))}},h={tags:["kb:row-actions-keyboard-action"],name:"5 · Run an action with the keyboard",parameters:{hint:n.jsxDEV(n.Fragment,{children:["Focus ⋮, press ",n.jsxDEV("kbd",{children:"Enter"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:326,columnNumber:32},void 0),", then ",n.jsxDEV("kbd",{children:"Enter"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:326,columnNumber:55},void 0)," again to duplicate the row. The menu closes and the new row appears."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:325,columnNumber:11},void 0)},play:async e=>{if(d(e))return;const{canvasElement:t}=e;await u(t);const o=C(t);re(t,"p1").focus(),await c.keyboard("{Enter}"),await r(()=>l(document.body).getByRole("menu")),await c.keyboard("{Enter}"),await r(()=>s(C(t)===o+1,"row duplicated")),await r(()=>s(!document.querySelector("[role=menu]"),"menu closed"))}},y={tags:["kb:row-actions-read-only"],name:"6 · Read-only actions",args:{readOnly:!0},parameters:{hint:n.jsxDEV(n.Fragment,{children:"This owner keeps ⋮ visible in a read-only table but disables every action with a clear reason."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:355,columnNumber:11},void 0)},play:async e=>{var t,o;d(e)||(await u(e.canvasElement),await g(e.canvasElement,"p1"),s(((t=k("duplicate"))==null?void 0:t.getAttribute("aria-disabled"))==="true","Duplicate disabled in read-only mode"),await c.hover((o=k("duplicate"))==null?void 0:o.parentElement),await r(()=>s(l(document.body).getByRole("tooltip").textContent==="Read-only table","read-only reason tooltip")))}},f={tags:["kb:row-actions-playground"],parameters:{hint:n.jsxDEV(n.Fragment,{children:"Adjust the actions and their per-row rules in the controls below."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-actions.stories.tsx",lineNumber:372,columnNumber:11},void 0)}};var N,T,O,S,B;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['kb:row-actions-utility-column'],
  name: '1 · Utility column',
  parameters: {
    hint: <>
                The last column is a fixed 48 px ⋮ utility column. Open <b>Columns</b>:
                it is intentionally not offered there.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const header = canvasElement.querySelector<HTMLElement>('[data-header-id="row-actions"]');
    check(header, 'row actions header exists');
    check(Math.abs((header as HTMLElement).getBoundingClientRect().width - 48) <= 1, 'row actions column is 48 px');
    check(!header?.querySelector('[data-grip]'), 'row actions cannot reorder');
    await userEvent.click(within(canvasElement.querySelector('[role=toolbar]') as HTMLElement).getByRole('button', {
      name: 'Columns'
    }));
    await waitFor(() => {
      check(!document.querySelector('[data-column-item="row-actions"]'), 'row actions are not in the Columns panel');
    });
  }
}`,...(O=(T=m.parameters)==null?void 0:T.docs)==null?void 0:O.source},description:{story:"ROWACT-01 and ROWACT-06: the utility column has its fixed, private shape.",...(B=(S=m.parameters)==null?void 0:S.docs)==null?void 0:B.description}}};var F,j,U,q,V;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['kb:row-actions-open-menu'],
  name: '2 · Open a row menu',
  parameters: {
    hint: <>Press ⋮ on a row to see the actions its owner supplied for that row.</>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    await grid(ctx.canvasElement);
    await openActions(ctx.canvasElement, 'p1');
    const body = within(document.body);
    check(body.getByRole('menuitem', {
      name: 'Duplicate'
    }), 'Duplicate shown');
    check(body.getByRole('menuitem', {
      name: 'Exclude from calculation'
    }), 'Exclude shown');
    check(body.getByRole('menuitem', {
      name: 'Delete'
    }), 'Delete shown');
  }
}`,...(U=(j=p.parameters)==null?void 0:j.docs)==null?void 0:U.source},description:{story:"ROWACT-02: the menu is scoped to the clicked row.",...(V=(q=p.parameters)==null?void 0:q.docs)==null?void 0:V.description}}};var H,$,M,L,W;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['kb:row-actions-hidden-action'],
  name: '3 · Hidden action',
  parameters: {
    hint: <>
                Open ⋮ for the Blocked row: Delete is hidden by this screen&apos;s{' '}
                <code>RowAction.hidden</code> rule.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    await grid(ctx.canvasElement);
    await openActions(ctx.canvasElement, 'p2');
    await waitFor(() => check(!rowAction('delete'), 'Delete is hidden for the Blocked row'));
  }
}`,...(M=($=b.parameters)==null?void 0:$.docs)==null?void 0:M.source},description:{story:"ROWACT-03: owner policy can omit an action for one row.",...(W=(L=b.parameters)==null?void 0:L.docs)==null?void 0:W.description}}};var I,P,K,_,z;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['kb:row-actions-disabled-action'],
  name: '4 · Disabled action with a reason',
  args: {
    disableExclude: true,
    disabledReason: 'Calculation is locked'
  },
  parameters: {
    hint: <>Exclude is disabled but remains visible. Hover it to see why.</>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    await grid(ctx.canvasElement);
    await openActions(ctx.canvasElement, 'p1');
    const exclude = rowAction('exclude') as HTMLElement;
    check(exclude.getAttribute('aria-disabled') === 'true', 'Exclude disabled');
    await userEvent.hover(exclude.parentElement as HTMLElement);
    await waitFor(() => check(within(document.body).getByRole('tooltip').textContent === 'Calculation is locked', 'disabled reason tooltip'));
  }
}`,...(K=(P=w.parameters)==null?void 0:P.docs)==null?void 0:K.source},description:{story:"ROWACT-04: a disabled action remains visible and explains itself.",...(z=(_=w.parameters)==null?void 0:_.docs)==null?void 0:z.description}}};var J,G,Q,X,Y;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['kb:row-actions-keyboard-action'],
  name: '5 · Run an action with the keyboard',
  parameters: {
    hint: <>
                Focus ⋮, press <kbd>Enter</kbd>, then <kbd>Enter</kbd> again to
                duplicate the row. The menu closes and the new row appears.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const before = nameCells(canvasElement);
    const button = actionButton(canvasElement, 'p1') as HTMLElement;
    button.focus();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => within(document.body).getByRole('menu'));
    await userEvent.keyboard('{Enter}');
    await waitFor(() => check(nameCells(canvasElement) === before + 1, 'row duplicated'));
    await waitFor(() => check(!document.querySelector('[role=menu]'), 'menu closed'));
  }
}`,...(Q=(G=h.parameters)==null?void 0:G.docs)==null?void 0:Q.source},description:{story:"ROWACT-05: keyboard selection closes the menu and calls the owner handler.",...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,te,oe,ne;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['kb:row-actions-read-only'],
  name: '6 · Read-only actions',
  args: {
    readOnly: true
  },
  parameters: {
    hint: <>
                This owner keeps ⋮ visible in a read-only table but disables every
                action with a clear reason.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    await grid(ctx.canvasElement);
    await openActions(ctx.canvasElement, 'p1');
    check(rowAction('duplicate')?.getAttribute('aria-disabled') === 'true', 'Duplicate disabled in read-only mode');
    await userEvent.hover(rowAction('duplicate')?.parentElement as HTMLElement);
    await waitFor(() => check(within(document.body).getByRole('tooltip').textContent === 'Read-only table', 'read-only reason tooltip'));
  }
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Read-only behavior is owner policy, supplied here as disabled RowActions.",...(ne=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var ae,se,ie;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['kb:row-actions-playground'],
  parameters: {
    hint: <>Adjust the actions and their per-row rules in the controls below.</>
  }
}`,...(ie=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const $e=["UtilityColumn","OpenMenu","HiddenAction","DisabledAction","KeyboardAction","ReadOnly","Playground"];export{w as DisabledAction,b as HiddenAction,h as KeyboardAction,p as OpenMenu,f as Playground,y as ReadOnly,m as UtilityColumn,$e as __namedExportsOrder,He as default};
