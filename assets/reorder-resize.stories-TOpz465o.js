import{j as t}from"./jsx-runtime-Cnbe3ryz.js";import{w as i,u as S,a as oe}from"./index-iBx7lKYd.js";import{r as O}from"./index-3dRrDZpt.js";import{T as se}from"./TableCore-Y75h2oha.js";import{c as ce}from"./places-Dp9r7e0L.js";import{T as ie}from"./TableStatusBar-4NxO8OsQ.js";import{T as le}from"./TableToolbar-DTYEmPN-.js";import{m as de,a as u}from"./employees-CL5oqWiT.js";import{c as y}from"./play-kit-Bu4SXy9H.js";import{w as me,d as ue,t as C,S as he}from"./scene-kit-BsKxVgS1.js";import{D as pe}from"./reference-kit-BHZHy2IZ.js";import{a as R}from"./table-core-base-DFRq_Vzl.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./fixtures-P-DSdYmm.js";import"./types-reference-CMrm5GSt.js";const{useArgs:ge}=__STORYBOOK_MODULE_PREVIEW_API__,be=["name","team","role","level","country","rate","start"],we=n=>[u("name","Name",190),u("team","Team",130),u("role","Role",160),u("level","Level",100),u("country","Country",130),{...u("rate","Rate",90),minSize:60,maxSize:140},u("start","Start",120)].map(e=>n.includes(e.id)?{...e,meta:ce({disableReorder:!0})}:e),ve=n=>t.jsx(le,{table:n}),fe=n=>t.jsx(ie,{table:n}),ye=({args:n,hint:e,updateArgs:a})=>{const[r]=O.useState(()=>de(30)),l=O.useMemo(()=>we(n.locked),[n.locked]);return t.jsx(he,{hint:e,children:t.jsx(se,{data:r,columns:l,getRowId:o=>o.id,state:{columnOrder:n.columnOrder,columnSizing:n.columnSizing},onColumnOrderChange:o=>{var p;const s=R(o,n.columnOrder);(p=n.onColumnOrderChange)==null||p.call(n,s),a({columnOrder:s})},onColumnSizingChange:o=>{var p;const s=R(o,n.columnSizing);(p=n.onColumnSizingChange)==null||p.call(n,s),a({columnSizing:s})},initialState:{columnPinning:{left:["name"],right:[]}},toolbar:ve,statusBar:fe},n.locked.join())})},z=n=>{const e=n.locked.length?`

// Columns that cannot be moved.
const columns = employeeColumns.map((c) =>
  ${C(n.locked)}.includes(c.id) ? { ...c, meta: coreMeta({ disableReorder: true }) } : c
)`:"";return`import { useState } from 'react'
import type { ColumnOrderState, ColumnSizingState } from '@tanstack/react-table'
import { TableCore${n.locked.length?", coreMeta":""} } from '@pnl-simulation/table-core'${e}

export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
  // Keep them to save the user's layout; only resized columns are in sizing.
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(${C(n.columnOrder,"  ")})
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>(${C(n.columnSizing,"  ")})

  return (
    <TableCore
      data={employees}
      columns={${n.locked.length?"columns":"employeeColumns"}}
      getRowId={(e) => e.id}
      state={{ columnOrder, columnSizing }}
      onColumnOrderChange={setColumnOrder}
      onColumnSizingChange={setColumnSizing}
    />
  )
}`},We={title:"Tables/Table Core/Features/Reorder & Resize",tags:["autodocs"],decorators:[me],render:function(e,{parameters:a}){const[,r]=ge();return t.jsx(ye,{args:e,hint:a.hint,updateArgs:r})},args:{columnOrder:[],columnSizing:{},locked:[]},argTypes:{columnOrder:{name:"state.columnOrder",description:"Column ids in screen order; `[]` = the order of `columns`. Drag a header and watch it.",control:"object",table:{category:"state"}},columnSizing:{name:"state.columnSizing",description:"Widths the user set, by column id. Only resized columns.",control:"object",table:{category:"state"}},locked:{name:"column meta disableReorder",description:"Columns without the drag tab: they cannot be moved.",options:be,control:"check",table:{category:"columns"}},onColumnOrderChange:{action:"onColumnOrderChange",table:{disable:!0}},onColumnSizingChange:{action:"onColumnSizingChange",table:{disable:!0}}},parameters:{layout:"fullscreen",sceneCode:z,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:ue(z),description:{component:`${pe}


**Reorder & Resize** let the user arrange columns and make them as wide as needed — as in the legacy Resource Plan.

- **Reorder.** Hover a header: a tab with ⋮⋮ sticks out above it. Drag it: a copy of the header follows the pointer and the columns move live. Esc puts them back. Pinned columns move only among themselves. The Columns panel reorders too (drag ⋮⋮, or ↑ / ↓ on it).
- **Resize.** Drag the header's right edge: the width follows the pointer exactly and the divider turns blue. Double-click resets it. \`minSize\` / \`maxSize\` are respected.

**State.** \`columnOrder\` and \`columnSizing\` are ordinary TanStack state: keep them to save the user's layout.`}}}},c=(n,e)=>{if(!n)throw new Error(`Story check failed: ${e}`)},E=n=>i(()=>{const e=n.querySelector("[role=grid]");if(!e||!e.querySelector("[data-cell]"))throw new Error("grid not ready");return e}),h=(n,e)=>n.querySelector(`[data-header-id="${e}"]`),m=n=>Array.from(n.querySelectorAll("[data-header-id]")).map(e=>e.dataset.headerId),d=(n,e)=>Math.round(h(n,e).getBoundingClientRect().width),ae=n=>(e,a,r)=>a.dispatchEvent(new PointerEvent(e,{bubbles:!0,clientX:r,clientY:n,button:0})),re=(n,e,a,r=!0)=>{const l=h(n,e).querySelector("[data-grip]");if(!l)throw new Error(`no grip on ${e}`);const o=l.getBoundingClientRect(),s=ae(o.top+o.height/2);s("pointerdown",l,o.left+4),s("pointermove",window,a),r&&s("pointerup",window,a)},x=(n,e,a)=>{const r=h(n,e).querySelector("[data-resizer]"),l=r.getBoundingClientRect(),o=l.left+l.width/2,s=ae(l.top+4);return s("pointerdown",r,o),s("pointermove",window,o+a),s("pointerup",window,o+a),r},g={tags:["kb:reorder-drag-column"],name:"1 · Drag a column",parameters:{hint:t.jsxs(t.Fragment,{children:["Hover ",t.jsx("b",{children:"Role"}),": a tab with ⋮⋮ appears above it. Drag it before"," ",t.jsx("b",{children:"Team"}),": the columns move while you drag. Watch"," ",t.jsx("code",{children:"state.columnOrder"}),"."]})},play:async n=>{if(y(n))return;const{canvasElement:e}=n;await E(e),c(m(e).slice(1,3).join()==="team,role","start: Team, Role"),re(e,"role",h(e,"team").getBoundingClientRect().left+2),await i(()=>c(m(e).slice(1,3).join()==="role,team",`moved: ${m(e)}`))}},b={tags:["kb:reorder-esc-cancels"],name:"2 · Esc cancels a drag",parameters:{hint:t.jsxs(t.Fragment,{children:["Start dragging ",t.jsx("b",{children:"Country"})," to the left, and press ",t.jsx("b",{children:"Esc"})," before you let go: the columns go back."]})},play:async n=>{if(y(n))return;const{canvasElement:e}=n;await E(e);const a=m(e).join();re(e,"country",h(e,"team").getBoundingClientRect().left+2,!1),await i(()=>c(m(e).join()!==a,"moves live")),window.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})),await i(()=>c(m(e).join()===a,"order restored")),window.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0}))}},w={tags:["kb:reorder-in-panel"],name:"3 · Reorder in the Columns panel",parameters:{hint:t.jsxs(t.Fragment,{children:["Open ",t.jsx("b",{children:"Columns"}),": drag a ⋮⋮ handle, or focus it and press ",t.jsx("b",{children:"↓"}),". Pinned columns (Name) have a list of their own on top."]})},play:async n=>{if(y(n))return;const{canvasElement:e}=n;await E(e),await S.click(oe(e.querySelector("[role=toolbar]")).getByRole("button",{name:"Columns"})),(await i(()=>{const r=document.querySelector('[data-column-item="team"] [data-drag-handle]');return c(r,"Team handle"),r})).focus(),await S.keyboard("{ArrowDown}"),await i(()=>c(m(e).slice(1,3).join()==="role,team",`moved from the panel: ${m(e)}`)),await S.keyboard("{Escape}")}},v={tags:["kb:reorder-resize"],name:"4 · Resize",parameters:{hint:t.jsxs(t.Fragment,{children:["Drag the right edge of ",t.jsx("b",{children:"Team"}),": the width follows the pointer and the divider turns blue. Double-click the edge to reset. ",t.jsx("b",{children:"Rate"})," ","stays between 60 and 140 px."]})},play:async n=>{if(y(n))return;const{canvasElement:e}=n;await E(e);const a=d(e,"team"),r=x(e,"team",40);await i(()=>c(d(e,"team")===a+40,`+40: ${a} → ${d(e,"team")}`)),r.dispatchEvent(new MouseEvent("dblclick",{bubbles:!0})),await i(()=>c(d(e,"team")===a,"reset")),x(e,"rate",400),await i(()=>c(d(e,"rate")<=140,`max 140, got ${d(e,"rate")}`)),x(e,"rate",-400),await i(()=>c(d(e,"rate")>=60,`min 60, got ${d(e,"rate")}`))}},f={tags:["kb:reorder-locked"],name:"5 · Columns that cannot be moved",args:{locked:["team"]},parameters:{hint:t.jsxs(t.Fragment,{children:[t.jsx("b",{children:"Team"})," has ",t.jsx("code",{children:"disableReorder"}),": no ⋮⋮ tab on hover, so it cannot be dragged. Tick more columns in ",t.jsx("i",{children:"columns"}),"."]})},play:async n=>{if(y(n))return;const{canvasElement:e}=n;await E(e),c(!h(e,"team").querySelector("[data-grip]"),"no tab on Team"),c(h(e,"role").querySelector("[data-grip]"),"Role still has one")}},k={tags:["kb:reorder-playground"],args:{columnSizing:{team:180}},parameters:{hint:t.jsxs(t.Fragment,{children:["Everything together: drag headers and edges, the Columns panel, and"," ",t.jsx("code",{children:"state"})," below."]})}};var j,T,$,D,F;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['kb:reorder-drag-column'],
  name: '1 · Drag a column',
  parameters: {
    hint: <>
                Hover <b>Role</b>: a tab with ⋮⋮ appears above it. Drag it before{' '}
                <b>Team</b>: the columns move while you drag. Watch{' '}
                <code>state.columnOrder</code>.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(headerIds(canvasElement).slice(1, 3).join() === 'team,role', 'start: Team, Role');
    dragHeader(canvasElement, 'role', header(canvasElement, 'team').getBoundingClientRect().left + 2);
    await waitFor(() => check(headerIds(canvasElement).slice(1, 3).join() === 'role,team', \`moved: \${headerIds(canvasElement)}\`));
  }
}`,...($=(T=g.parameters)==null?void 0:T.docs)==null?void 0:$.source},description:{story:"Drag the ⋮⋮ tab: columns move live.",...(F=(D=g.parameters)==null?void 0:D.docs)==null?void 0:F.description}}};var I,P,q,B,M;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['kb:reorder-esc-cancels'],
  name: '2 · Esc cancels a drag',
  parameters: {
    hint: <>
                Start dragging <b>Country</b> to the left, and press <b>Esc</b> before
                you let go: the columns go back.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const before = headerIds(canvasElement).join();
    dragHeader(canvasElement, 'country', header(canvasElement, 'team').getBoundingClientRect().left + 2, false);
    await waitFor(() => check(headerIds(canvasElement).join() !== before, 'moves live'));
    window.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true
    }));
    await waitFor(() => check(headerIds(canvasElement).join() === before, 'order restored'));
    window.dispatchEvent(new PointerEvent('pointerup', {
      bubbles: true
    }));
  }
}`,...(q=(P=b.parameters)==null?void 0:P.docs)==null?void 0:q.source},description:{story:"Esc while dragging puts the columns back.",...(M=(B=b.parameters)==null?void 0:B.docs)==null?void 0:M.description}}};var _,H,A,L,K;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['kb:reorder-in-panel'],
  name: '3 · Reorder in the Columns panel',
  parameters: {
    hint: <>
                Open <b>Columns</b>: drag a ⋮⋮ handle, or focus it and press <b>↓</b>.
                Pinned columns (Name) have a list of their own on top.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(within(canvasElement.querySelector('[role=toolbar]') as HTMLElement).getByRole('button', {
      name: 'Columns'
    }));
    const handle = await waitFor(() => {
      const el = document.querySelector<HTMLElement>('[data-column-item="team"] [data-drag-handle]');
      check(el, 'Team handle');
      return el as HTMLElement;
    });
    handle.focus();
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => check(headerIds(canvasElement).slice(1, 3).join() === 'role,team', \`moved from the panel: \${headerIds(canvasElement)}\`));
    await userEvent.keyboard('{Escape}');
  }
}`,...(A=(H=w.parameters)==null?void 0:H.docs)==null?void 0:A.source},description:{story:"Columns panel: ⋮⋮ handles, ↑ / ↓ on a focused handle.",...(K=(L=w.parameters)==null?void 0:L.docs)==null?void 0:K.description}}};var N,W,U,Y,J;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['kb:reorder-resize'],
  name: '4 · Resize',
  parameters: {
    hint: <>
                Drag the right edge of <b>Team</b>: the width follows the pointer and
                the divider turns blue. Double-click the edge to reset. <b>Rate</b>{' '}
                stays between 60 and 140 px.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const before = widthOf(canvasElement, 'team');
    const resizer = dragEdge(canvasElement, 'team', 40);
    await waitFor(() => check(widthOf(canvasElement, 'team') === before + 40, \`+40: \${before} → \${widthOf(canvasElement, 'team')}\`));
    resizer.dispatchEvent(new MouseEvent('dblclick', {
      bubbles: true
    }));
    await waitFor(() => check(widthOf(canvasElement, 'team') === before, 'reset'));
    dragEdge(canvasElement, 'rate', 400);
    await waitFor(() => check(widthOf(canvasElement, 'rate') <= 140, \`max 140, got \${widthOf(canvasElement, 'rate')}\`));
    dragEdge(canvasElement, 'rate', -400);
    await waitFor(() => check(widthOf(canvasElement, 'rate') >= 60, \`min 60, got \${widthOf(canvasElement, 'rate')}\`));
  }
}`,...(U=(W=v.parameters)==null?void 0:W.docs)==null?void 0:U.source},description:{story:"Resize by the edge; double-click resets; min / max hold.",...(J=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:J.description}}};var V,G,Q,Z,X;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['kb:reorder-locked'],
  name: '5 · Columns that cannot be moved',
  args: {
    locked: ['team']
  },
  parameters: {
    hint: <>
                <b>Team</b> has <code>disableReorder</code>: no ⋮⋮ tab on hover, so it
                cannot be dragged. Tick more columns in <i>columns</i>.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(!header(canvasElement, 'team').querySelector('[data-grip]'), 'no tab on Team');
    check(header(canvasElement, 'role').querySelector('[data-grip]'), 'Role still has one');
  }
}`,...(Q=(G=f.parameters)==null?void 0:G.docs)==null?void 0:Q.source},description:{story:"`disableReorder`: no tab, cannot be moved.",...(X=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:X.description}}};var ee,ne,te;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['kb:reorder-playground'],
  args: {
    columnSizing: {
      team: 180
    }
  },
  parameters: {
    hint: <>
                Everything together: drag headers and edges, the Columns panel, and{' '}
                <code>state</code> below.
            </>
  }
}`,...(te=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const Ue=["DragColumn","EscCancels","InPanel","Resize","Locked","Playground"];export{g as DragColumn,b as EscCancels,w as InPanel,f as Locked,k as Playground,v as Resize,Ue as __namedExportsOrder,We as default};
