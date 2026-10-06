import{j as a}from"./jsx-runtime-Cnbe3ryz.js";import{u as l,w as i,a as u}from"./index-iBx7lKYd.js";import{r as f}from"./index-3dRrDZpt.js";import{T as J}from"./TableCore-Y75h2oha.js";import{T as Q}from"./TableStatusBar-4NxO8OsQ.js";import{T as W}from"./TableToolbar-DTYEmPN-.js";import{m as X}from"./employees-CL5oqWiT.js";import{c as x}from"./play-kit-Bu4SXy9H.js";import{C as S,m as Y}from"./rich-cells-BHJWCIPe.js";import{w as Z,d as ee,S as te}from"./scene-kit-BsKxVgS1.js";import{D as ae}from"./reference-kit-BHZHy2IZ.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./fixtures-P-DSdYmm.js";import"./RowActions-BSIeJGF9.js";import"./types-reference-CMrm5GSt.js";const oe=e=>a.jsx(W,{table:e}),ne=e=>a.jsx(Q,{table:e}),re=({args:e,hint:t})=>{const[o,s]=f.useState(()=>X(30)),c=f.useMemo(()=>Y(e.custom),[e.custom]),p=f.useMemo(()=>e.actionsInCell?{getActions:n=>[{id:"exclude",label:"Exclude",onClick:()=>s(m=>m.map(d=>d.id===n.id?{...d,state:"excluded"}:d))},{id:"include",label:"Include",onClick:()=>s(m=>m.map(d=>d.id===n.id?{...d,state:"ok"}:d))}].filter(m=>!(m.id==="exclude"&&n.original.state==="excluded")&&!(m.id==="include"&&n.original.state==="ok"))}:void 0,[e.actionsInCell]);return a.jsx(te,{hint:t,children:a.jsx(J,{data:o,columns:c,getRowId:n=>n.id,meta:p,rowHeight:e.custom.includes("person")?56:48,toolbar:oe,statusBar:ne})})},E=e=>`import type { CellContext } from '@tanstack/react-table'
import { TableCore, RowActionsButton, coreMeta } from '@pnl-simulation/table-core'

// A cell is a React component: it gets the value, the row and the table.
const StatusCell = ({ getValue }: CellContext<Employee, unknown>) => (
  <Badge tone={toneOf(getValue())}>{getValue()}</Badge>
)
${e.actionsInCell?`
// Row actions anywhere: here in the Person cell, shown on row hover.
const PersonCell = ({ row, table }: CellContext<Employee, unknown>) => (
  <Person name={row.original.name} email={row.original.email}>
    <RowActionsButton row={row} getActions={table.options.meta.getActions} reveal="hover" />
  </Person>
)
`:""}
const columns = [
  { id: 'person', accessorKey: 'name', header: 'Person'${e.custom.includes("person")?", cell: PersonCell":""} },
  { id: 'team', accessorKey: 'team', header: 'Team'${e.custom.includes("team")?", cell: TeamCell":""} },
  // Sorting and grouping use the value; the cell only draws it.
  { id: 'status', accessorFn: (e) => STATUS[e.state], header: 'Status'${e.custom.includes("status")?", cell: StatusCell":""} },
  { id: 'rate', accessorKey: 'pay', header: 'Rate', meta: coreMeta({ align: 'right' })${e.custom.includes("rate")?", cell: RateCell":""} },
]

<TableCore
  data={employees}
  columns={columns}
  getRowId={(e) => e.id}${e.actionsInCell?`
  meta={{ getActions }}`:""}${e.custom.includes("person")?`
  rowHeight={56}`:""}
/>`,Ie={title:"Tables/Table Core/Features/Custom cells",tags:["autodocs"],decorators:[Z],render:function(t,{parameters:o}){return a.jsx(re,{args:t,hint:o.hint})},args:{custom:[...S],actionsInCell:!1},argTypes:{custom:{name:"column cell",description:"Columns that use a custom cell component; unticked ones show the plain value.",options:S,control:"check",table:{category:"columns"}},actionsInCell:{name:"RowActionsButton in a cell",description:"Row actions inside the Person cell (on row hover) instead of a column.",control:"boolean"}},parameters:{layout:"fullscreen",sceneCode:E,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:ee(E),description:{component:`${ae}


**Custom cells**: a column's \`cell\` is an ordinary React component. It gets the value, the row and the table, and draws whatever the screen needs: a person with an email, a status badge, money, a load bar, a date.

- **Value vs. look.** Sorting, grouping and search use the column's value (\`accessorKey\` / \`accessorFn\`); the cell only decides how it looks.
- **Row actions anywhere.** \`RowActionsButton\` (or \`ActionsMenu\`, not tied to a row) renders in any cell or outside the table; \`reveal="hover"\` shows it on row hover.
- **Keyboard** still works: cells stay focusable and navigable whatever they render.
- Taller content: raise \`rowHeight\`.`}}}},r=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},v=e=>i(()=>{const t=e.querySelector("[role=grid]");if(!t||!t.querySelector("[data-cell]"))throw new Error("grid not ready");return t}),h=(e,t,o)=>e.querySelector(`[data-row-index="${t}"][data-column-id="${o}"]`),se=async(e,t,o)=>{await l.click(u(await v(e)).getByRole("button",{name:new RegExp(`^${t}`)})),await l.click(await i(()=>u(document.body).getByRole("menuitem",{name:"Sort"}))),await l.click(await i(()=>u(document.body).getByRole("menuitemradio",{name:o})))},w={tags:["kb:cells-formatting"],name:"1 · Formatted values",parameters:{hint:a.jsxs(a.Fragment,{children:[a.jsx("b",{children:"Rate"})," shows money, ",a.jsx("b",{children:"Start"})," a short date. Sort by Rate: the order follows the numbers, not the text. Untick them in"," ",a.jsx("i",{children:"column cell"})," to see the raw values."]})},play:async e=>{var o,s;if(x(e))return;const{canvasElement:t}=e;await v(t),r(/^\$\d+\/h$/.test(((o=h(t,0,"rate"))==null?void 0:o.textContent)??""),"money"),r(/^\d{1,2} \w{3} \d{4}$/.test(((s=h(t,0,"start"))==null?void 0:s.textContent)??""),"short date"),await se(t,"Rate","Sort ascending"),await i(()=>{const c=[0,1,2,3].map(p=>{var n;return Number((((n=h(t,p,"rate"))==null?void 0:n.textContent)??"").replace(/\D/g,""))});r(c.every((p,n)=>!n||c[n-1]<=p),`numeric order, got ${c}`)})}},g={tags:["kb:cells-rich"],name:"2 · A rich cell",parameters:{hint:a.jsxs(a.Fragment,{children:[a.jsx("b",{children:"Person"})," draws initials, the name and the email; the rows are taller (",a.jsx("code",{children:"rowHeight"})," 56). Click it and move with the arrows: it is a normal cell."]})},play:async e=>{var s;if(x(e))return;const{canvasElement:t}=e;await v(t);const o=h(t,0,"person");r(o.querySelector("[data-person]"),"custom person cell"),r((s=o.textContent)==null?void 0:s.includes("@example.com"),"email shown"),await l.click(o),await l.keyboard("{ArrowDown}"),await i(()=>{var c;return r(((c=t.querySelector('[data-selection="active"]'))==null?void 0:c.getAttribute("data-row-index"))==="1","arrows move across custom cells")})}},b={tags:["kb:cells-badges"],name:"3 · Badges and bars",parameters:{hint:a.jsxs(a.Fragment,{children:[a.jsx("b",{children:"Status"})," is a coloured badge, ",a.jsx("b",{children:"Load"})," a bar (red over 90%). Group by Status: the groups are the labels (Included, Blocked, Excluded)."]})},play:async e=>{if(x(e))return;const{canvasElement:t}=e,o=await v(t);r(o.querySelector("[data-badge]"),"badge"),r(o.querySelector("[data-load]"),"load bar"),await l.click(u(o).getByRole("button",{name:/^Status/})),await l.click(await i(()=>u(document.body).getByRole("menuitem",{name:"Group by Status"}))),await i(()=>r(t.querySelector('[data-lane-id="status"]'),"grouped by the label"))}},y={tags:["kb:cells-actions-in-cell"],name:"4 · Row actions inside a cell",args:{actionsInCell:!0},parameters:{hint:a.jsxs(a.Fragment,{children:["Hover a row: ⋮ appears in the ",a.jsx("b",{children:"Person"})," cell — no actions column. Pick ",a.jsx("b",{children:"Exclude"}),": the Status badge changes. The same button can go anywhere, even outside the table."]})},play:async e=>{if(x(e))return;const{canvasElement:t}=e;await v(t),r(!t.querySelector('[data-column-id="row-actions"]'),"no actions column");const s=h(t,0,"person").querySelector('[data-row-actions][data-reveal="hover"]');r(s,"⋮ in the cell, shown on hover"),await l.click(s),await l.click(await i(()=>u(document.body).getByRole("menuitem",{name:"Exclude"}))),await i(()=>{var c;return r(((c=h(t,0,"status"))==null?void 0:c.textContent)==="Excluded","badge changed")})}},k={tags:["kb:cells-playground"],args:{actionsInCell:!0},parameters:{hint:a.jsx(a.Fragment,{children:"Everything together: tick custom cells on and off, ⋮ in the Person cell."})}};var C,R,T,B,A;w.parameters={...w.parameters,docs:{...(C=w.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['kb:cells-formatting'],
  name: '1 · Formatted values',
  parameters: {
    hint: <>
                <b>Rate</b> shows money, <b>Start</b> a short date. Sort by Rate: the
                order follows the numbers, not the text. Untick them in{' '}
                <i>column cell</i> to see the raw values.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(/^\\$\\d+\\/h$/.test(cellOf(canvasElement, 0, 'rate')?.textContent ?? ''), 'money');
    check(/^\\d{1,2} \\w{3} \\d{4}$/.test(cellOf(canvasElement, 0, 'start')?.textContent ?? ''), 'short date');
    await sortVia(canvasElement, 'Rate', 'Sort ascending');
    await waitFor(() => {
      const values = [0, 1, 2, 3].map(i => Number((cellOf(canvasElement, i, 'rate')?.textContent ?? '').replace(/\\D/g, '')));
      check(values.every((v, i) => !i || values[i - 1] <= v), \`numeric order, got \${values}\`);
    });
  }
}`,...(T=(R=w.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:"Money and dates are drawn by the cell; sorting uses the raw value.",...(A=(B=w.parameters)==null?void 0:B.docs)==null?void 0:A.description}}};var F,j,$,I,P;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['kb:cells-rich'],
  name: '2 · A rich cell',
  parameters: {
    hint: <>
                <b>Person</b> draws initials, the name and the email; the rows are
                taller (<code>rowHeight</code> 56). Click it and move with the arrows:
                it is a normal cell.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const person = cellOf(canvasElement, 0, 'person') as HTMLElement;
    check(person.querySelector('[data-person]'), 'custom person cell');
    check(person.textContent?.includes('@example.com'), 'email shown');
    await userEvent.click(person);
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => check(canvasElement.querySelector('[data-selection="active"]')?.getAttribute('data-row-index') === '1', 'arrows move across custom cells'));
  }
}`,...($=(j=g.parameters)==null?void 0:j.docs)==null?void 0:$.source},description:{story:"A rich cell: avatar, name and email; still a normal cell for the grid.",...(P=(I=g.parameters)==null?void 0:I.docs)==null?void 0:P.description}}};var q,O,H,M,D;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['kb:cells-badges'],
  name: '3 · Badges and bars',
  parameters: {
    hint: <>
                <b>Status</b> is a coloured badge, <b>Load</b> a bar (red over 90%).
                Group by Status: the groups are the labels (Included, Blocked,
                Excluded).
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const el = await grid(canvasElement);
    check(el.querySelector('[data-badge]'), 'badge');
    check(el.querySelector('[data-load]'), 'load bar');
    await userEvent.click(within(el).getByRole('button', {
      name: /^Status/
    }));
    await userEvent.click(await waitFor(() => within(document.body).getByRole('menuitem', {
      name: 'Group by Status'
    })));
    await waitFor(() => check(canvasElement.querySelector('[data-lane-id="status"]'), 'grouped by the label'));
  }
}`,...(H=(O=b.parameters)==null?void 0:O.docs)==null?void 0:H.source},description:{story:"Badges and bars; grouping uses the label.",...(D=(M=b.parameters)==null?void 0:M.docs)==null?void 0:D.description}}};var L,V,K,G,U;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['kb:cells-actions-in-cell'],
  name: '4 · Row actions inside a cell',
  args: {
    actionsInCell: true
  },
  parameters: {
    hint: <>
                Hover a row: ⋮ appears in the <b>Person</b> cell — no actions column.
                Pick <b>Exclude</b>: the Status badge changes. The same button can go
                anywhere, even outside the table.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(!canvasElement.querySelector('[data-column-id="row-actions"]'), 'no actions column');
    const row = cellOf(canvasElement, 0, 'person') as HTMLElement;
    const button = row.querySelector<HTMLElement>('[data-row-actions][data-reveal="hover"]') as HTMLElement;
    check(button, '⋮ in the cell, shown on hover');
    await userEvent.click(button);
    await userEvent.click(await waitFor(() => within(document.body).getByRole('menuitem', {
      name: 'Exclude'
    })));
    await waitFor(() => check(cellOf(canvasElement, 0, 'status')?.textContent === 'Excluded', 'badge changed'));
  }
}`,...(K=(V=y.parameters)==null?void 0:V.docs)==null?void 0:K.source},description:{story:"RowActionsButton inside a cell, shown on row hover.",...(U=(G=y.parameters)==null?void 0:G.docs)==null?void 0:U.description}}};var N,_,z;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['kb:cells-playground'],
  args: {
    actionsInCell: true
  },
  parameters: {
    hint: <>
                Everything together: tick custom cells on and off, ⋮ in the Person cell.
            </>
  }
}`,...(z=(_=k.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const Pe=["Formatting","Rich","Badges","ActionsInCell","Playground"];export{y as ActionsInCell,b as Badges,w as Formatting,k as Playground,g as Rich,Pe as __namedExportsOrder,Ie as default};
