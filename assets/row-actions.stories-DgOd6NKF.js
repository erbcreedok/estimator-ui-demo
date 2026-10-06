import{j as o}from"./jsx-runtime-Cnbe3ryz.js";import{w as i,u as y,a as x}from"./index-iBx7lKYd.js";import{r as E}from"./index-3dRrDZpt.js";import{T as le}from"./TableCore-Y75h2oha.js";import{c as de}from"./places-Dp9r7e0L.js";import{T as ue}from"./TableToolbar-DTYEmPN-.js";import{c as me}from"./RowActions-BSIeJGF9.js";import{m as R,a as A}from"./employees-CL5oqWiT.js";import{c}from"./play-kit-Bu4SXy9H.js";import{w as pe,d as he,t as we,S as be}from"./scene-kit-BsKxVgS1.js";import{D as ye}from"./reference-kit-BHZHy2IZ.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./toolbar-C5VRlWnq.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./pin-controls-NGLUwJXC.js";import"./fixtures-P-DSdYmm.js";import"./types-reference-CMrm5GSt.js";const fe=[A("name","Name",190),A("team","Team",140),{id:"state",accessorKey:"state",header:"State",size:110,meta:de({label:"State"})}],g=["duplicate","exclude","delete"],xe=e=>o.jsx(ue,{table:e}),ke=(e,t,n)=>({id:"duplicate",label:"Duplicate",disabledReason:t?"Read-only table":void 0,onClick:()=>n(a=>{const s=a.findIndex(ce=>ce.id===e.id),ie={...e.original,id:`${e.id}-copy-${a.length}`};return[...a.slice(0,s+1),ie,...a.slice(s+1)]})}),ge=e=>e.readOnly?"Read-only table":e.disableExclude?e.disabledReason:void 0,Ee=(e,t,n)=>({id:"exclude",label:"Exclude from calculation",disabledReason:ge(t),onClick:()=>n(a=>a.map(s=>s.id===e.id?{...s,state:"excluded"}:s))}),Re=(e,t,n)=>({id:"delete",label:"Delete",disabledReason:t.readOnly?"Read-only table":void 0,onClick:()=>n(a=>a.filter(s=>s.id!==e.id))}),Ae=(e,t,n)=>g.filter(a=>t.actions.includes(a)&&!(a==="delete"&&t.hideDeleteForBlocked&&e.original.state==="blocked")).map(a=>a==="duplicate"?ke(e,t.readOnly,n):a==="exclude"?Ee(e,t,n):Re(e,t,n)),ve=({args:e,hint:t})=>{const[n,a]=E.useState(()=>R(e.rows));return E.useEffect(()=>a(R(e.rows)),[e.rows]),o.jsx(be,{hint:t,children:o.jsx(le,{data:n,columns:[...fe,me(s=>Ae(s,e,a))],getRowId:s=>s.id,readOnly:e.readOnly,toolbar:xe})})},v=e=>`import { useState } from 'react'
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
    ${e.actions.includes("exclude")?`{ id: 'exclude', label: 'Exclude from calculation', disabledReason: ${e.disableExclude?we(e.disabledReason):"undefined"}, onClick: () => exclude(row) },`:""}
    ${e.actions.includes("delete")?"{ id: 'delete', label: 'Delete', onClick: () => remove(row) },":""}
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
}`,Qe={title:"Tables/Table Core/Features/Row actions",tags:["autodocs"],decorators:[pe],render:function(t,{parameters:n}){return o.jsx(ve,{args:t,hint:n.hint})},args:{actions:[...g],hideDeleteForBlocked:!0,disableExclude:!1,disabledReason:"Calculation is locked",readOnly:!1,rows:12},argTypes:{actions:{description:"The RowAction objects the owning screen supplies per row.",options:g,control:"check"},hideDeleteForBlocked:{name:"getActions: Delete left out",description:"The screen leaves Delete out of the list of a Blocked row.",control:"boolean"},disableExclude:{name:"RowAction.disabledReason set",description:"Exclude is off for this owner configuration (the reason below).",control:"boolean"},disabledReason:{name:"RowAction.disabledReason",description:"Tooltip text for the disabled Exclude action.",control:"text"},readOnly:{description:"TableCore prop; this owner disables its row actions explicitly.",control:"boolean"},rows:{description:"Number of demo employees.",control:{type:"range",min:3,max:30,step:1},table:{category:"demo data"}}},parameters:{layout:"fullscreen",sceneCode:v,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:he(v),description:{component:`${ye}


**Row actions** add a narrow ⋮ utility column. The owning screen provides a \`RowAction[]\` for each row, including what an action does and whether it is off (and why).

- Add \`createRowActionsColumn(getActions)\` where the screen wants the 48 px column. It cannot be sorted, grouped, reordered, hidden or stretched, and stays out of the Columns panel and chips.
- The button opens a menu for its row. Selecting an enabled item closes the menu before calling its handler.
- An action the screen does not return is not in the menu. \`disabledReason\` keeps it visible but off, and says why next to its label.
- \`readOnly\` is a TableCore prop, not an action policy: if the screen wants read-only actions, it supplies disabled actions as this scene does.
`}}}},r=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},l=e=>i(()=>{const t=e.querySelector("[role=grid]");if(!t||!t.querySelector("[data-cell]"))throw new Error("grid not ready");return t}),se=(e,t)=>e.querySelector(`[data-row-actions="${t}"]`),f=e=>document.querySelector(`[data-row-action="${e}"]`),k=async(e,t)=>{const n=se(e,t);if(!n)throw new Error(`Story check failed: no row-actions button for ${t}`);return await y.click(n),i(()=>x(document.body).getByRole("menu"))},C=e=>e.querySelectorAll('[data-cell][data-column-id="name"]').length,d={tags:["kb:row-actions-utility-column"],name:"1 · Utility column",parameters:{hint:o.jsxs(o.Fragment,{children:["The last column is a fixed 48 px ⋮ utility column. Open ",o.jsx("b",{children:"Columns"}),": it is intentionally not offered there."]})},play:async e=>{if(c(e))return;const{canvasElement:t}=e;await l(t);const n=t.querySelector('[data-header-id="row-actions"]');r(n,"row actions header exists"),r(Math.abs(n.getBoundingClientRect().width-48)<=1,"row actions column is 48 px"),r(!(n!=null&&n.querySelector("[data-grip]")),"row actions cannot reorder"),await y.click(x(t.querySelector("[role=toolbar]")).getByRole("button",{name:"Columns"})),await i(()=>{r(!document.querySelector('[data-column-item="row-actions"]'),"row actions are not in the Columns panel")})}},u={tags:["kb:row-actions-open-menu"],name:"2 · Open a row menu",parameters:{hint:o.jsx(o.Fragment,{children:"Press ⋮ on a row to see the actions its owner supplied for that row."})},play:async e=>{if(c(e))return;await l(e.canvasElement),await k(e.canvasElement,"p1");const t=x(document.body);r(t.getByRole("menuitem",{name:"Duplicate"}),"Duplicate shown"),r(t.getByRole("menuitem",{name:"Exclude from calculation"}),"Exclude shown"),r(t.getByRole("menuitem",{name:"Delete"}),"Delete shown")}},m={tags:["kb:row-actions-hidden-action"],name:"3 · Hidden action",parameters:{hint:o.jsx(o.Fragment,{children:"Open ⋮ for the Blocked row: Delete is hidden by this screen's rule: it leaves Delete out of the list."})},play:async e=>{c(e)||(await l(e.canvasElement),await k(e.canvasElement,"p2"),await i(()=>r(!f("delete"),"Delete is hidden for the Blocked row")))}},p={tags:["kb:row-actions-disabled-action"],name:"4 · Disabled action with a reason",args:{disableExclude:!0,disabledReason:"Calculation is locked"},parameters:{hint:o.jsx(o.Fragment,{children:"Exclude is disabled but remains visible. Hover it to see why."})},play:async e=>{var n;if(c(e))return;await l(e.canvasElement),await k(e.canvasElement,"p1");const t=f("exclude");r(t.getAttribute("aria-disabled")==="true","Exclude disabled"),r(((n=t.textContent)==null?void 0:n.includes("Calculation is locked"))===!0,"the reason stands next to the label")}},h={tags:["kb:row-actions-keyboard-action"],name:"5 · Run an action with the keyboard",parameters:{hint:o.jsxs(o.Fragment,{children:["Focus ⋮, press ",o.jsx("kbd",{children:"Enter"}),", then ",o.jsx("kbd",{children:"Enter"})," again to duplicate the row. The menu closes and the new row appears."]})},play:async e=>{if(c(e))return;const{canvasElement:t}=e;await l(t);const n=C(t);se(t,"p1").focus(),await y.keyboard("{Enter}"),await i(()=>x(document.body).getByRole("menu")),await y.keyboard("{Enter}"),await i(()=>r(C(t)===n+1,"row duplicated")),await i(()=>r(!document.querySelector("[role=menu]"),"menu closed"))}},w={tags:["kb:row-actions-read-only"],name:"6 · Read-only actions",args:{readOnly:!0},parameters:{hint:o.jsx(o.Fragment,{children:"This owner keeps ⋮ visible in a read-only table but disables every action with a clear reason."})},play:async e=>{var t,n,a;c(e)||(await l(e.canvasElement),await k(e.canvasElement,"p1"),r(((t=f("duplicate"))==null?void 0:t.getAttribute("aria-disabled"))==="true","Duplicate disabled in read-only mode"),r(((a=(n=f("duplicate"))==null?void 0:n.textContent)==null?void 0:a.includes("Read-only table"))===!0,"the reason stands next to the label"))}},b={tags:["kb:row-actions-playground"],parameters:{hint:o.jsx(o.Fragment,{children:"Adjust the actions and their per-row rules in the controls below."})}};var T,O,S,D,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(O=d.parameters)==null?void 0:O.docs)==null?void 0:S.source},description:{story:"ROWACT-01 and ROWACT-06: the utility column has its fixed, private shape.",...(B=(D=d.parameters)==null?void 0:D.docs)==null?void 0:B.description}}};var F,j,q,$,H;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(j=u.parameters)==null?void 0:j.docs)==null?void 0:q.source},description:{story:"ROWACT-02: the menu is scoped to the clicked row.",...(H=($=u.parameters)==null?void 0:$.docs)==null?void 0:H.description}}};var M,W,I,L,P;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['kb:row-actions-hidden-action'],
  name: '3 · Hidden action',
  parameters: {
    hint: <>
                Open ⋮ for the Blocked row: Delete is hidden by this screen&apos;s rule:
                it leaves Delete out of the list.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    await grid(ctx.canvasElement);
    await openActions(ctx.canvasElement, 'p2');
    await waitFor(() => check(!rowAction('delete'), 'Delete is hidden for the Blocked row'));
  }
}`,...(I=(W=m.parameters)==null?void 0:W.docs)==null?void 0:I.source},description:{story:"ROWACT-03: owner policy can omit an action for one row.",...(P=(L=m.parameters)==null?void 0:L.docs)==null?void 0:P.description}}};var N,U,_,K,z;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    check(exclude.textContent?.includes('Calculation is locked') === true, 'the reason stands next to the label');
  }
}`,...(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source},description:{story:"ROWACT-04: a disabled action remains visible and explains itself.",...(z=(K=p.parameters)==null?void 0:K.docs)==null?void 0:z.description}}};var J,G,Q,V,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(G=h.parameters)==null?void 0:G.docs)==null?void 0:Q.source},description:{story:"ROWACT-05: keyboard selection closes the menu and calls the owner handler.",...(X=(V=h.parameters)==null?void 0:V.docs)==null?void 0:X.description}}};var Y,Z,ee,te,ne;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
    check(rowAction('duplicate')?.textContent?.includes('Read-only table') === true, 'the reason stands next to the label');
  }
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Read-only behavior is owner policy, supplied here as disabled RowActions.",...(ne=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};var ae,oe,re;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['kb:row-actions-playground'],
  parameters: {
    hint: <>Adjust the actions and their per-row rules in the controls below.</>
  }
}`,...(re=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const Ve=["UtilityColumn","OpenMenu","HiddenAction","DisabledAction","KeyboardAction","ReadOnly","Playground"];export{p as DisabledAction,m as HiddenAction,h as KeyboardAction,u as OpenMenu,b as Playground,w as ReadOnly,d as UtilityColumn,Ve as __namedExportsOrder,Qe as default};
