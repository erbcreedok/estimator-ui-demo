import{j as s}from"./styles-DXLXEQ3H.js";import{u as c,w as i,a as m}from"./index-DLqD3z3M.js";import{r as x}from"./index-BjhrbhTf.js";import{T as J}from"./TableCore-kOYdxPhk.js";import{T as Q}from"./TableStatusBar-BHCIeSi2.js";import{T as W}from"./TableToolbar-C0bTLKMD.js";import{m as X}from"./employees-DtM5_3-O.js";import{c as f}from"./play-kit-Bu4SXy9H.js";import{C as E,m as Y}from"./rich-cells-C4zdx3Ia.js";import{w as Z,d as ee,S as te}from"./scene-kit-DXifMYYP.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./panels-D6DlFR9J.js";import"./createSvgIcon-s1BrOgA2.js";import"./fixtures-CCjjPTo2.js";import"./RowActions-CWt-61bw.js";const se=e=>s.jsxDEV(W,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:26,columnNumber:51},void 0),ae=e=>s.jsxDEV(Q,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:27,columnNumber:53},void 0),oe=({args:e,hint:t})=>{const[a,r]=x.useState(()=>X(30)),l=x.useMemo(()=>Y(e.custom),[e.custom]),b=x.useMemo(()=>e.actionsInCell?{getActions:o=>[{id:"exclude",label:"Exclude",hidden:o.original.state==="excluded",onClick:()=>r(v=>v.map(u=>u.id===o.id?{...u,state:"excluded"}:u))},{id:"include",label:"Include",hidden:o.original.state==="ok",onClick:()=>r(v=>v.map(u=>u.id===o.id?{...u,state:"ok"}:u))}]}:void 0,[e.actionsInCell]);return s.jsxDEV(te,{hint:t,children:s.jsxDEV(J,{data:a,columns:l,getRowId:o=>o.id,meta:b,rowHeight:e.custom.includes("person")?56:48,toolbar:se,statusBar:ae},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:57,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:56,columnNumber:10},void 0)},N=e=>`import type { CellContext } from '@tanstack/react-table'
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
/>`,xe={title:"Tables/Table Core/Draft/Custom cells",tags:["autodocs"],decorators:[Z],render:function(t,{parameters:a}){return s.jsxDEV(oe,{args:t,hint:a.hint},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:101,columnNumber:12},this)},args:{custom:[...E],actionsInCell:!1},argTypes:{custom:{name:"column cell",description:"Columns that use a custom cell component; unticked ones show the plain value.",options:E,control:"check",table:{category:"columns"}},actionsInCell:{name:"RowActionsButton in a cell",description:"Row actions inside the Person cell (on row hover) instead of a column.",control:"boolean"}},parameters:{layout:"fullscreen",sceneCode:N,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:ee(N),description:{component:"\n**Custom cells**: a column's `cell` is an ordinary React component. It gets the value, the row and the table, and draws whatever the screen needs: a person with an email, a status badge, money, a load bar, a date.\n\n- **Value vs. look.** Sorting, grouping and search use the column's value (`accessorKey` / `accessorFn`); the cell only decides how it looks.\n- **Row actions anywhere.** `RowActionsButton` (or `ActionsMenu`, not tied to a row) renders in any cell or outside the table; `reveal=\"hover\"` shows it on row hover.\n- **Keyboard** still works: cells stay focusable and navigable whatever they render.\n- Taller content: raise `rowHeight`."}}}},n=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},k=e=>i(()=>{const t=e.querySelector("[role=grid]");if(!t||!t.querySelector("[data-cell]"))throw new Error("grid not ready");return t}),d=(e,t,a)=>e.querySelector(`[data-row-index="${t}"][data-column-id="${a}"]`),ne=async(e,t,a)=>{await c.click(m(await k(e)).getByRole("button",{name:new RegExp(`^${t}`)})),await c.click(await i(()=>m(document.body).getByRole("menuitem",{name:"Sort"}))),await c.click(await i(()=>m(document.body).getByRole("menuitemradio",{name:a})))},p={tags:["kb:cells-formatting"],name:"1 · Formatted values",parameters:{hint:s.jsxDEV(s.Fragment,{children:[s.jsxDEV("b",{children:"Rate"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:179,columnNumber:17},void 0)," shows money, ",s.jsxDEV("b",{children:"Start"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:179,columnNumber:42},void 0)," a short date. Sort by Rate: the order follows the numbers, not the text. Untick them in"," ",s.jsxDEV("i",{children:"column cell"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:181,columnNumber:17},void 0)," to see the raw values."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:178,columnNumber:11},void 0)},play:async e=>{var a,r;if(f(e))return;const{canvasElement:t}=e;await k(t),n(/^\$\d+\/h$/.test(((a=d(t,0,"rate"))==null?void 0:a.textContent)??""),"money"),n(/^\d{1,2} \w{3} \d{4}$/.test(((r=d(t,0,"start"))==null?void 0:r.textContent)??""),"short date"),await ne(t,"Rate","Sort ascending"),await i(()=>{const l=[0,1,2,3].map(b=>{var o;return Number((((o=d(t,b,"rate"))==null?void 0:o.textContent)??"").replace(/\D/g,""))});n(l.every((b,o)=>!o||l[o-1]<=b),`numeric order, got ${l}`)})}},h={tags:["kb:cells-rich"],name:"2 · A rich cell",parameters:{hint:s.jsxDEV(s.Fragment,{children:[s.jsxDEV("b",{children:"Person"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:206,columnNumber:17},void 0)," draws initials, the name and the email; the rows are taller (",s.jsxDEV("code",{children:"rowHeight"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:207,columnNumber:25},void 0)," 56). Click it and move with the arrows: it is a normal cell."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:205,columnNumber:11},void 0)},play:async e=>{var r;if(f(e))return;const{canvasElement:t}=e;await k(t);const a=d(t,0,"person");n(a.querySelector("[data-person]"),"custom person cell"),n((r=a.textContent)==null?void 0:r.includes("@example.com"),"email shown"),await c.click(a),await c.keyboard("{ArrowDown}"),await i(()=>{var l;return n(((l=t.querySelector('[data-selection="active"]'))==null?void 0:l.getAttribute("data-row-index"))==="1","arrows move across custom cells")})}},g={tags:["kb:cells-badges"],name:"3 · Badges and bars",parameters:{hint:s.jsxDEV(s.Fragment,{children:[s.jsxDEV("b",{children:"Status"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:232,columnNumber:17},void 0)," is a coloured badge, ",s.jsxDEV("b",{children:"Load"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:232,columnNumber:52},void 0)," a bar (red over 90%). Group by Status: the groups are the labels (Included, Blocked, Excluded)."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:231,columnNumber:11},void 0)},play:async e=>{if(f(e))return;const{canvasElement:t}=e,a=await k(t);n(a.querySelector("[data-badge]"),"badge"),n(a.querySelector("[data-load]"),"load bar"),await c.click(m(a).getByRole("button",{name:/^Status/})),await c.click(await i(()=>m(document.body).getByRole("menuitem",{name:"Group by Status"}))),await i(()=>n(t.querySelector('[data-lane-id="status"]'),"grouped by the label"))}},w={tags:["kb:cells-actions-in-cell"],name:"4 · Row actions inside a cell",args:{actionsInCell:!0},parameters:{hint:s.jsxDEV(s.Fragment,{children:["Hover a row: ⋮ appears in the ",s.jsxDEV("b",{children:"Person"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:264,columnNumber:47},void 0)," cell — no actions column. Pick ",s.jsxDEV("b",{children:"Exclude"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:265,columnNumber:22},void 0),": the Status badge changes. The same button can go anywhere, even outside the table."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:263,columnNumber:11},void 0)},play:async e=>{if(f(e))return;const{canvasElement:t}=e;await k(t),n(!t.querySelector('[data-column-id="row-actions"]'),"no actions column");const r=d(t,0,"person").querySelector('[data-row-actions][data-reveal="hover"]');n(r,"⋮ in the cell, shown on hover"),await c.click(r),await c.click(await i(()=>m(document.body).getByRole("menuitem",{name:"Exclude"}))),await i(()=>{var l;return n(((l=d(t,0,"status"))==null?void 0:l.textContent)==="Excluded","badge changed")})}},y={tags:["kb:cells-playground"],args:{actionsInCell:!0},parameters:{hint:s.jsxDEV(s.Fragment,{children:"Everything together: tick custom cells on and off, ⋮ in the Person cell."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/custom-cells.stories.tsx",lineNumber:292,columnNumber:11},void 0)}};var S,C,D,R,B;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(C=p.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:"Money and dates are drawn by the cell; sorting uses the raw value.",...(B=(R=p.parameters)==null?void 0:R.docs)==null?void 0:B.description}}};var T,V,U,j,A;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(U=(V=h.parameters)==null?void 0:V.docs)==null?void 0:U.source},description:{story:"A rich cell: avatar, name and email; still a normal cell for the grid.",...(A=(j=h.parameters)==null?void 0:j.docs)==null?void 0:A.description}}};var F,$,I,P,q;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(I=($=g.parameters)==null?void 0:$.docs)==null?void 0:I.source},description:{story:"Badges and bars; grouping uses the label.",...(q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:q.description}}};var O,H,M,L,K;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(M=(H=w.parameters)==null?void 0:H.docs)==null?void 0:M.source},description:{story:"RowActionsButton inside a cell, shown on row hover.",...(K=(L=w.parameters)==null?void 0:L.docs)==null?void 0:K.description}}};var G,_,z;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['kb:cells-playground'],
  args: {
    actionsInCell: true
  },
  parameters: {
    hint: <>
                Everything together: tick custom cells on and off, ⋮ in the Person cell.
            </>
  }
}`,...(z=(_=y.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const Ee=["Formatting","Rich","Badges","ActionsInCell","Playground"];export{w as ActionsInCell,g as Badges,p as Formatting,y as Playground,h as Rich,Ee as __namedExportsOrder,xe as default};
