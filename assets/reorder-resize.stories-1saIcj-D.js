import{j as n,c as se}from"./styles-DXLXEQ3H.js";import{w as l,u as x,a as oe}from"./index-DLqD3z3M.js";import{r as D}from"./index-BjhrbhTf.js";import{T as ie,a as z}from"./TableCore-kOYdxPhk.js";import{T as le}from"./TableStatusBar-BHCIeSi2.js";import{T as ce}from"./TableToolbar-C0bTLKMD.js";import{m as de,a as u}from"./employees-DtM5_3-O.js";import{c as y}from"./play-kit-Bu4SXy9H.js";import{w as me,d as ue,t as N,S as be}from"./scene-kit-DXifMYYP.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./panels-D6DlFR9J.js";import"./createSvgIcon-s1BrOgA2.js";import"./fixtures-CCjjPTo2.js";const{useArgs:pe}=__STORYBOOK_MODULE_PREVIEW_API__,ge=["name","team","role","level","country","rate","start"],he=r=>[u("name","Name",190),u("team","Team",130),u("role","Role",160),u("level","Level",100),u("country","Country",130),{...u("rate","Rate",90),minSize:60,maxSize:140},u("start","Start",120)].map(e=>r.includes(e.id)?{...e,meta:se({disableReorder:!0})}:e),fe=r=>n.jsxDEV(ce,{table:r},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:45,columnNumber:51},void 0),ke=r=>n.jsxDEV(le,{table:r},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:46,columnNumber:53},void 0),ve=({args:r,hint:e,updateArgs:t})=>{const[a]=D.useState(()=>de(30)),c=D.useMemo(()=>he(r.locked),[r.locked]);return n.jsxDEV(be,{hint:e,children:n.jsxDEV(ie,{data:a,columns:c,getRowId:s=>s.id,state:{columnOrder:r.columnOrder,columnSizing:r.columnSizing},onColumnOrderChange:s=>{var p;const o=z(s,r.columnOrder);(p=r.onColumnOrderChange)==null||p.call(r,o),t({columnOrder:o})},onColumnSizingChange:s=>{var p;const o=z(s,r.columnSizing);(p=r.onColumnSizingChange)==null||p.call(r,o),t({columnSizing:o})},initialState:{columnPinning:{left:["name"],right:[]}},toolbar:fe,statusBar:ke},r.locked.join(),!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:59,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:58,columnNumber:10},void 0)},C=r=>{const e=r.locked.length?`

// Columns that cannot be moved.
const columns = employeeColumns.map((c) =>
  ${N(r.locked)}.includes(c.id) ? { ...c, meta: coreMeta({ disableReorder: true }) } : c
)`:"";return`import { useState } from 'react'
import type { ColumnOrderState, ColumnSizingState } from '@tanstack/react-table'
import { TableCore${r.locked.length?", coreMeta":""} } from '@pnl-simulation/table-core'${e}

export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
  // Keep them to save the user's layout; only resized columns are in sizing.
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(${N(r.columnOrder,"  ")})
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>(${N(r.columnSizing,"  ")})

  return (
    <TableCore
      data={employees}
      columns={${r.locked.length?"columns":"employeeColumns"}}
      getRowId={(e) => e.id}
      state={{ columnOrder, columnSizing }}
      onColumnOrderChange={setColumnOrder}
      onColumnSizingChange={setColumnSizing}
    />
  )
}`},Ve={title:"Tables/Table Core/Draft/Reorder & Resize",tags:["autodocs"],decorators:[me],render:function(e,{parameters:t}){const[,a]=pe();return n.jsxDEV(ve,{args:e,hint:t.hint,updateArgs:a},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:120,columnNumber:12},this)},args:{columnOrder:[],columnSizing:{},locked:[]},argTypes:{columnOrder:{name:"state.columnOrder",description:"Column ids in screen order; `[]` = the order of `columns`. Drag a header and watch it.",control:"object",table:{category:"state"}},columnSizing:{name:"state.columnSizing",description:"Widths the user set, by column id. Only resized columns.",control:"object",table:{category:"state"}},locked:{name:"column meta disableReorder",description:"Columns without the drag tab: they cannot be moved.",options:ge,control:"check",table:{category:"columns"}},onColumnOrderChange:{action:"onColumnOrderChange",table:{disable:!0}},onColumnSizingChange:{action:"onColumnSizingChange",table:{disable:!0}}},parameters:{layout:"fullscreen",sceneCode:C,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:ue(C),description:{component:"\n**Reorder & Resize** let the user arrange columns and make them as wide as needed — as in the legacy Resource Plan.\n\n- **Reorder.** Hover a header: a tab with ⋮⋮ sticks out above it. Drag it: a copy of the header follows the pointer and the columns move live. Esc puts them back. Pinned columns move only among themselves. The Columns panel reorders too (drag ⋮⋮, or ↑ / ↓ on it).\n- **Resize.** Drag the header's right edge: the width follows the pointer exactly and the divider turns blue. Double-click resets it. `minSize` / `maxSize` are respected.\n\n**State.** `columnOrder` and `columnSizing` are ordinary TanStack state: keep them to save the user's layout."}}}},i=(r,e)=>{if(!r)throw new Error(`Story check failed: ${e}`)},w=r=>l(()=>{const e=r.querySelector("[role=grid]");if(!e||!e.querySelector("[data-cell]"))throw new Error("grid not ready");return e}),b=(r,e)=>r.querySelector(`[data-header-id="${e}"]`),m=r=>Array.from(r.querySelectorAll("[data-header-id]")).map(e=>e.dataset.headerId),d=(r,e)=>Math.round(b(r,e).getBoundingClientRect().width),te=r=>(e,t,a)=>t.dispatchEvent(new PointerEvent(e,{bubbles:!0,clientX:a,clientY:r,button:0})),ae=(r,e,t,a=!0)=>{const c=b(r,e).querySelector("[data-grip]");if(!c)throw new Error(`no grip on ${e}`);const s=c.getBoundingClientRect(),o=te(s.top+s.height/2);o("pointerdown",c,s.left+4),o("pointermove",window,t),a&&o("pointerup",window,t)},S=(r,e,t)=>{const a=b(r,e).querySelector("[data-resizer]"),c=a.getBoundingClientRect(),s=c.left+c.width/2,o=te(c.top+4);return o("pointerdown",a,s),o("pointermove",window,s+t),o("pointerup",window,s+t),a},g={tags:["kb:reorder-drag-column"],name:"1 · Drag a column",parameters:{hint:n.jsxDEV(n.Fragment,{children:["Hover ",n.jsxDEV("b",{children:"Role"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:239,columnNumber:23},void 0),": a tab with ⋮⋮ appears above it. Drag it before"," ",n.jsxDEV("b",{children:"Team"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:240,columnNumber:17},void 0),": the columns move while you drag. Watch"," ",n.jsxDEV("code",{children:"state.columnOrder"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:241,columnNumber:17},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:238,columnNumber:11},void 0)},play:async r=>{if(y(r))return;const{canvasElement:e}=r;await w(e),i(m(e).slice(1,3).join()==="team,role","start: Team, Role"),ae(e,"role",b(e,"team").getBoundingClientRect().left+2),await l(()=>i(m(e).slice(1,3).join()==="role,team",`moved: ${m(e)}`))}},h={tags:["kb:reorder-esc-cancels"],name:"2 · Esc cancels a drag",parameters:{hint:n.jsxDEV(n.Fragment,{children:["Start dragging ",n.jsxDEV("b",{children:"Country"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:262,columnNumber:32},void 0)," to the left, and press ",n.jsxDEV("b",{children:"Esc"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:262,columnNumber:70},void 0)," before you let go: the columns go back."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:261,columnNumber:11},void 0)},play:async r=>{if(y(r))return;const{canvasElement:e}=r;await w(e);const t=m(e).join();ae(e,"country",b(e,"team").getBoundingClientRect().left+2,!1),await l(()=>i(m(e).join()!==t,"moves live")),window.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})),await l(()=>i(m(e).join()===t,"order restored")),window.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0}))}},f={tags:["kb:reorder-in-panel"],name:"3 · Reorder in the Columns panel",parameters:{hint:n.jsxDEV(n.Fragment,{children:["Open ",n.jsxDEV("b",{children:"Columns"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:292,columnNumber:22},void 0),": drag a ⋮⋮ handle, or focus it and press ",n.jsxDEV("b",{children:"↓"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:292,columnNumber:78},void 0),". Pinned columns (Name) have a list of their own on top."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:291,columnNumber:11},void 0)},play:async r=>{if(y(r))return;const{canvasElement:e}=r;await w(e),await x.click(oe(e.querySelector("[role=toolbar]")).getByRole("button",{name:"Columns"})),(await l(()=>{const a=document.querySelector('[data-column-item="team"] [data-drag-handle]');return i(a,"Team handle"),a})).focus(),await x.keyboard("{ArrowDown}"),await l(()=>i(m(e).slice(1,3).join()==="role,team",`moved from the panel: ${m(e)}`)),await x.keyboard("{Escape}")}},k={tags:["kb:reorder-resize"],name:"4 · Resize",parameters:{hint:n.jsxDEV(n.Fragment,{children:["Drag the right edge of ",n.jsxDEV("b",{children:"Team"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:323,columnNumber:40},void 0),": the width follows the pointer and the divider turns blue. Double-click the edge to reset. ",n.jsxDEV("b",{children:"Rate"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:324,columnNumber:73},void 0)," ","stays between 60 and 140 px."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:322,columnNumber:11},void 0)},play:async r=>{if(y(r))return;const{canvasElement:e}=r;await w(e);const t=d(e,"team"),a=S(e,"team",40);await l(()=>i(d(e,"team")===t+40,`+40: ${t} → ${d(e,"team")}`)),a.dispatchEvent(new MouseEvent("dblclick",{bubbles:!0})),await l(()=>i(d(e,"team")===t,"reset")),S(e,"rate",400),await l(()=>i(d(e,"rate")<=140,`max 140, got ${d(e,"rate")}`)),S(e,"rate",-400),await l(()=>i(d(e,"rate")>=60,`min 60, got ${d(e,"rate")}`))}},v={tags:["kb:reorder-locked"],name:"5 · Columns that cannot be moved",args:{locked:["team"]},parameters:{hint:n.jsxDEV(n.Fragment,{children:[n.jsxDEV("b",{children:"Team"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:357,columnNumber:17},void 0)," has ",n.jsxDEV("code",{children:"disableReorder"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:357,columnNumber:33},void 0),": no ⋮⋮ tab on hover, so it cannot be dragged. Tick more columns in ",n.jsxDEV("i",{children:"columns"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:358,columnNumber:57},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:356,columnNumber:11},void 0)},play:async r=>{if(y(r))return;const{canvasElement:e}=r;await w(e),i(!b(e,"team").querySelector("[data-grip]"),"no tab on Team"),i(b(e,"role").querySelector("[data-grip]"),"Role still has one")}},E={tags:["kb:reorder-playground"],args:{columnSizing:{team:180}},parameters:{hint:n.jsxDEV(n.Fragment,{children:["Everything together: drag headers and edges, the Columns panel, and"," ",n.jsxDEV("code",{children:"state"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:381,columnNumber:17},void 0)," below."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/reorder-resize.stories.tsx",lineNumber:379,columnNumber:11},void 0)}};var O,R,j,T,U;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(R=g.parameters)==null?void 0:R.docs)==null?void 0:j.source},description:{story:"Drag the ⋮⋮ tab: columns move live.",...(U=(T=g.parameters)==null?void 0:T.docs)==null?void 0:U.description}}};var V,$,F,I,P;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(F=($=h.parameters)==null?void 0:$.docs)==null?void 0:F.source},description:{story:"Esc while dragging puts the columns back.",...(P=(I=h.parameters)==null?void 0:I.docs)==null?void 0:P.description}}};var q,B,M,H,_;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(M=(B=f.parameters)==null?void 0:B.docs)==null?void 0:M.source},description:{story:"Columns panel: ⋮⋮ handles, ↑ / ↓ on a focused handle.",...(_=(H=f.parameters)==null?void 0:H.docs)==null?void 0:_.description}}};var L,A,K,W,Y;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(K=(A=k.parameters)==null?void 0:A.docs)==null?void 0:K.source},description:{story:"Resize by the edge; double-click resets; min / max hold.",...(Y=(W=k.parameters)==null?void 0:W.docs)==null?void 0:Y.description}}};var J,G,Q,Z,X;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(G=v.parameters)==null?void 0:G.docs)==null?void 0:Q.source},description:{story:"`disableReorder`: no tab, cannot be moved.",...(X=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:X.description}}};var ee,re,ne;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(re=E.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const $e=["DragColumn","EscCancels","InPanel","Resize","Locked","Playground"];export{g as DragColumn,h as EscCancels,f as InPanel,v as Locked,E as Playground,k as Resize,$e as __namedExportsOrder,Ve as default};
