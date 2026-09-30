import{j as t}from"./styles-DXLXEQ3H.js";import{w as s,a as N,u as p}from"./index-DLqD3z3M.js";import{r as re}from"./index-BjhrbhTf.js";import{T as se,d as le,p as ce,a as x}from"./TableCore-kOYdxPhk.js";import{T as me}from"./TableStatusBar-BHCIeSi2.js";import{T as ue}from"./TableToolbar-C0bTLKMD.js";import{m as de,a as c}from"./employees-DtM5_3-O.js";import{c as y}from"./play-kit-Bu4SXy9H.js";import{w as pe,d as ge,t as C,S as fe}from"./scene-kit-DXifMYYP.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./panels-D6DlFR9J.js";import"./createSvgIcon-s1BrOgA2.js";import"./fixtures-CCjjPTo2.js";const{useArgs:be}=__STORYBOOK_MODULE_PREVIEW_API__,ae=[c("name","Name",190),c("team","Team",140),c("role","Role",160),c("level","Level",100),c("country","Country",140),c("city","City",140),c("email","Email",240),c("rate","Rate",90),c("start","Start",120),c("end","End",120)],he=ae.map(e=>e.id),ke=["team","role","level","country"],ye=[...le,ce],we=e=>t.jsxDEV(ue,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:36,columnNumber:51},void 0),Ee=e=>t.jsxDEV(me,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:37,columnNumber:53},void 0),Ne=({args:e,hint:n,updateArgs:a})=>{const[o]=re.useState(()=>de(40)),i={left:e.pinnedLeft,right:[]};return t.jsxDEV(fe,{hint:n,children:t.jsxDEV("div",{style:{height:"100%",maxWidth:820},children:t.jsxDEV(se,{data:o,columns:ae,getRowId:l=>l.id,state:{columnPinning:i,grouping:e.grouping},onColumnPinningChange:l=>{var d;const m=x(l,i);(d=e.onColumnPinningChange)==null||d.call(e,m),a({pinnedLeft:m.left??[]})},onGroupingChange:l=>{var d;const m=x(l,e.grouping);(d=e.onGroupingChange)==null||d.call(e,m),a({grouping:m})},columnMenu:e.freezeInMenu?ye:void 0,toolbar:we,statusBar:Ee},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:58,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:54,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:52,columnNumber:10},void 0)},S=e=>{const n=e.freezeInMenu?`
      // "Freeze column" in the header menu (not there by default).
      columnMenu={[...defaultColumnMenu, pinningSection]}`:"",a=e.grouping.length?`
  const [grouping, setGrouping] = useState<GroupingState>(${C(e.grouping)})`:"";return`import { useState } from 'react'
import type { ColumnPinningState${e.grouping.length?", GroupingState":""} } from '@tanstack/react-table'
import {
  TableCore,
  TableStatusBar,
  TableToolbar,${e.freezeInMenu?`
  defaultColumnMenu,
  pinningSection,`:""}
} from '@pnl-simulation/table-core'

export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
  // Pinned order = the order of \`left\`.
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    left: ${C(e.pinnedLeft,"    ")},
    right: [],
  })${a}

  return (
    <TableCore
      data={employees}
      columns={employeeColumns}
      getRowId={(e) => e.id}
      state={{ columnPinning${e.grouping.length?", grouping":""} }}
      onColumnPinningChange={setColumnPinning}${e.grouping.length?`
      onGroupingChange={setGrouping}`:""}${n}
      toolbar={(table) => <TableToolbar table={table} />}
      statusBar={(table) => <TableStatusBar table={table} />}
    />
  )
}`},Le={title:"Tables/Table Core/Draft/Freezing (pinning)",id:"tables-table-core-pinning",tags:["autodocs"],decorators:[pe],render:function(n,{parameters:a}){const[,o]=be();return t.jsxDEV(Ne,{args:n,hint:a.hint,updateArgs:o},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:125,columnNumber:12},this)},args:{pinnedLeft:["name"],grouping:[],freezeInMenu:!1},argTypes:{pinnedLeft:{name:"state.columnPinning.left",description:"Pinned columns, in pinned order (the order you tick them in).",options:he,control:"check",table:{category:"state"}},grouping:{name:"state.grouping",description:"Lanes: a lane of a pinned column sticks too.",options:ke,control:"check",table:{category:"state"}},freezeInMenu:{name:"columnMenu + pinningSection",description:"Add *Freeze / Unfreeze column* to the header menu (not in the default menu).",control:"boolean"},onColumnPinningChange:{action:"onColumnPinningChange",table:{disable:!0}},onGroupingChange:{action:"onGroupingChange",table:{disable:!0}}},parameters:{layout:"fullscreen",sceneCode:S,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:ge(S),description:{component:"\n**Freezing** keeps key columns (e.g. Name) on screen while the rest scroll — as in the legacy Resource Plan.\n\n> **Freezing = pinning.** The UI and the docs say *freeze*; the code is TanStack's **column pinning**: `columnPinning`, `column.pin()`, `enablePinning`, `pinningSection`.\n\n- Freeze from the **Columns panel** (*Freeze* next to a column; frozen columns get a list of their own on top) or, when the screen adds it, **Freeze column** in the header menu.\n- Frozen columns stick side by side in the frozen order, reorder only among themselves and never leave the zone.\n- The zone gets a right border with a light shadow **only when content goes under it**.\n- A lane of a frozen grouped column sticks as well; frozen columns stick right after it.\n\n**State.** `columnPinning` is ordinary TanStack state; the order of `left` is the frozen order."}}}},r=(e,n)=>{if(!e)throw new Error(`Story check failed: ${n}`)},w=e=>s(()=>{const n=e.querySelector("[role=grid]");if(!n||!n.querySelector("[data-cell]"))throw new Error("grid not ready");return n}),z=(e,n)=>e.querySelector(`[data-header-id="${n}"]`),ve=e=>Array.from(e.querySelectorAll("[data-header-id]")).map(n=>n.dataset.headerId),u=e=>Array.from(e.querySelectorAll('[data-header-id][data-pinned="true"]')).map(n=>n.dataset.headerId),ze=async()=>{var e,n;(n=(e=document.querySelector("[data-panel]"))==null?void 0:e.querySelector("input, button"))==null||n.focus(),await p.keyboard("{Escape}"),await s(()=>r(!document.querySelector("[data-panel]"),"panel"))},D=(e,n,a)=>{const o=e.querySelector(`[data-header-id="${n}"] [data-grip]`);if(!o)throw new Error(`no grip on ${n}`);const i=o.getBoundingClientRect(),l=i.top+i.height/2,m=(d,oe,ie)=>oe.dispatchEvent(new PointerEvent(d,{bubbles:!0,clientX:ie,clientY:l,button:0}));m("pointerdown",o,i.left+4),m("pointermove",window,a),m("pointerup",window,a)},v=(e,n)=>{e.scrollLeft=n,e.dispatchEvent(new Event("scroll"))},g={tags:["kb:freeze-from-columns-panel"],name:"1 · Freeze from the Columns panel",parameters:{hint:t.jsxDEV(t.Fragment,{children:["Open ",t.jsxDEV("b",{children:"Columns"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:245,columnNumber:22},void 0)," in the toolbar and press ",t.jsxDEV("b",{children:"Freeze"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:245,columnNumber:62},void 0)," next to"," ",t.jsxDEV("b",{children:"Team"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:246,columnNumber:17},void 0),": it moves next to Name and stays while you scroll right. Frozen columns are listed on top of the panel."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:244,columnNumber:11},void 0)},play:async e=>{if(y(e))return;const{canvasElement:n}=e;await w(n),await p.click(N(n.querySelector("[role=toolbar]")).getByRole("button",{name:"Columns"}));const a=await s(()=>{const o=document.querySelector('[data-column-item="team"]');return r(o,"Team in the panel"),o});await p.click(N(a).getByRole("button",{name:"Freeze"})),await s(()=>r(u(n).join()==="name,team",`pinned: ${u(n)}`)),await s(()=>r(document.querySelector('[data-pinned-list] [data-column-item="team"]'),"Team in the pinned list")),await ze()}},f={tags:["kb:freeze-from-column-menu"],name:"2 · Freeze from the column menu",args:{freezeInMenu:!0},parameters:{hint:t.jsxDEV(t.Fragment,{children:["Click ",t.jsxDEV("b",{children:"Role"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:282,columnNumber:23},void 0)," → ",t.jsxDEV("b",{children:"Freeze column"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:282,columnNumber:37},void 0),": Role joins the frozen zone. Open it again: ",t.jsxDEV("b",{children:"Unfreeze column"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:283,columnNumber:32},void 0),". The item is there because the screen added ",t.jsxDEV("code",{children:"pinningSection"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:284,columnNumber:30},void 0)," to ",t.jsxDEV("code",{children:"columnMenu"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:284,columnNumber:61},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:281,columnNumber:11},void 0)},play:async e=>{if(y(e))return;const{canvasElement:n}=e,a=await w(n),o=N(document.body),i=async()=>{await p.click(N(a).getByRole("button",{name:/^Role/})),await s(()=>o.getByRole("menu"))};await i(),await p.click(o.getByRole("menuitem",{name:"Freeze column"})),await s(()=>r(u(n).join()==="name,role",`pinned: ${u(n)}`)),await i(),await p.click(o.getByRole("menuitem",{name:"Unfreeze column"})),await s(()=>r(u(n).join()==="name","unfrozen"))}},b={tags:["kb:freeze-reorder"],name:"3 · Reorder frozen columns",args:{pinnedLeft:["name","team"]},parameters:{hint:t.jsxDEV(t.Fragment,{children:["Drag ",t.jsxDEV("b",{children:"Team"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:322,columnNumber:22},void 0)," by its grip before ",t.jsxDEV("b",{children:"Name"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:322,columnNumber:53},void 0),", then far to the right: it stays the last frozen column. Watch"," ",t.jsxDEV("code",{children:"state.columnPinning.left"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:324,columnNumber:17},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:321,columnNumber:11},void 0)},play:async e=>{var i;if(y(e))return;const{canvasElement:n}=e,a=await w(n);r(ve(n).slice(0,2).join()==="name,team","start");const o=(i=z(n,"name"))==null?void 0:i.getBoundingClientRect().left;D(n,"team",(o??0)+2),await s(()=>r(u(n).join()==="team,name",`reordered: ${u(n)}`)),D(n,"team",a.getBoundingClientRect().right-10),await s(()=>r(u(n).join()==="name,team",`stays in the zone: ${u(n)}`))}},h={tags:["kb:freeze-edge"],name:"4 · Edge while scrolling",parameters:{hint:t.jsxDEV(t.Fragment,{children:"Scroll right: the frozen zone gets a border with a light shadow only once columns go under it. Scroll back: it is gone."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:347,columnNumber:11},void 0)},play:async e=>{var i;if(y(e))return;const{canvasElement:n}=e,a=await w(n);r(a.dataset.scrolledX!=="true","no edge at first"),v(a,200),await s(()=>r(a.dataset.scrolledX==="true","edge on"));const o=a.getBoundingClientRect().left;r(Math.round((((i=z(n,"name"))==null?void 0:i.getBoundingClientRect().left)??-1)-o)===0,"Name sticks"),v(a,0),await s(()=>r(a.dataset.scrolledX!=="true","edge off"))}},k={tags:["kb:freeze-with-grouping"],name:"5 · With grouping lanes",args:{pinnedLeft:["name","role"],grouping:["role"]},parameters:{hint:t.jsxDEV(t.Fragment,{children:["Role is frozen and grouped: its lane sticks at the left and Name sticks right after it. Unfreeze Role in ",t.jsxDEV("code",{children:"state"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:379,columnNumber:50},void 0),": the lane scrolls away."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:377,columnNumber:11},void 0)},play:async e=>{if(y(e))return;const{canvasElement:n}=e,a=await w(n),o=n.querySelector('[data-lane-id="role"]');r((o==null?void 0:o.dataset.pinned)==="true","lane is pinned"),v(a,300);const i=a.getBoundingClientRect().left;await s(()=>{var l;r(Math.round(o.getBoundingClientRect().left-i)===0,"lane sticks"),r(Math.round((((l=z(n,"name"))==null?void 0:l.getBoundingClientRect().left)??0)-i)===Math.round(o.getBoundingClientRect().width),"Name sticks after the lane")})}},E={tags:["kb:freeze-playground"],args:{pinnedLeft:["name"],grouping:["team"],freezeInMenu:!0},parameters:{hint:t.jsxDEV(t.Fragment,{children:["Everything together: Columns panel, Freeze in the menu, drag, lanes and"," ",t.jsxDEV("code",{children:"state"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:409,columnNumber:17},void 0)," below."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/pinning.stories.tsx",lineNumber:407,columnNumber:11},void 0)}};var R,F,T,j,B;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['kb:freeze-from-columns-panel'],
  name: '1 · Freeze from the Columns panel',
  parameters: {
    hint: <>
                Open <b>Columns</b> in the toolbar and press <b>Freeze</b> next to{' '}
                <b>Team</b>: it moves next to Name and stays while you scroll right.
                Frozen columns are listed on top of the panel.
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
    const item = await waitFor(() => {
      const el = document.querySelector<HTMLElement>('[data-column-item="team"]');
      check(el, 'Team in the panel');
      return el as HTMLElement;
    });
    await userEvent.click(within(item).getByRole('button', {
      name: 'Freeze'
    }));
    await waitFor(() => check(pinnedIds(canvasElement).join() === 'name,team', \`pinned: \${pinnedIds(canvasElement)}\`));
    await waitFor(() => check(document.querySelector('[data-pinned-list] [data-column-item="team"]'), 'Team in the pinned list'));
    await closePopover();
  }
}`,...(T=(F=g.parameters)==null?void 0:F.docs)==null?void 0:T.source},description:{story:"Columns panel → Pin; pinned columns get their own list on top.",...(B=(j=g.parameters)==null?void 0:j.docs)==null?void 0:B.description}}};var U,P,M,I,V;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['kb:freeze-from-column-menu'],
  name: '2 · Freeze from the column menu',
  args: {
    freezeInMenu: true
  },
  parameters: {
    hint: <>
                Click <b>Role</b> → <b>Freeze column</b>: Role joins the frozen zone.
                Open it again: <b>Unfreeze column</b>. The item is there because the
                screen added <code>pinningSection</code> to <code>columnMenu</code>.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const el = await grid(canvasElement);
    const body = within(document.body);
    const open = async () => {
      await userEvent.click(within(el).getByRole('button', {
        name: /^Role/
      }));
      await waitFor(() => body.getByRole('menu'));
    };
    await open();
    await userEvent.click(body.getByRole('menuitem', {
      name: 'Freeze column'
    }));
    await waitFor(() => check(pinnedIds(canvasElement).join() === 'name,role', \`pinned: \${pinnedIds(canvasElement)}\`));
    await open();
    await userEvent.click(body.getByRole('menuitem', {
      name: 'Unfreeze column'
    }));
    await waitFor(() => check(pinnedIds(canvasElement).join() === 'name', 'unfrozen'));
  }
}`,...(M=(P=f.parameters)==null?void 0:P.docs)==null?void 0:M.source},description:{story:"Freeze / Unfreeze in the header menu, when the screen adds it.",...(V=(I=f.parameters)==null?void 0:I.docs)==null?void 0:V.description}}};var L,$,q,O,G;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['kb:freeze-reorder'],
  name: '3 · Reorder frozen columns',
  args: {
    pinnedLeft: ['name', 'team']
  },
  parameters: {
    hint: <>
                Drag <b>Team</b> by its grip before <b>Name</b>, then far to the right:
                it stays the last frozen column. Watch{' '}
                <code>state.columnPinning.left</code>.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const el = await grid(canvasElement);
    check(headerIds(canvasElement).slice(0, 2).join() === 'name,team', 'start');
    const nameLeft = header(canvasElement, 'name')?.getBoundingClientRect().left;
    dragHeader(canvasElement, 'team', (nameLeft ?? 0) + 2);
    await waitFor(() => check(pinnedIds(canvasElement).join() === 'team,name', \`reordered: \${pinnedIds(canvasElement)}\`));
    dragHeader(canvasElement, 'team', el.getBoundingClientRect().right - 10);
    await waitFor(() => check(pinnedIds(canvasElement).join() === 'name,team', \`stays in the zone: \${pinnedIds(canvasElement)}\`));
  }
}`,...(q=($=b.parameters)==null?void 0:$.docs)==null?void 0:q.source},description:{story:"Pinned columns reorder among themselves and never leave the zone.",...(G=(O=b.parameters)==null?void 0:O.docs)==null?void 0:G.description}}};var A,W,_,H,X;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['kb:freeze-edge'],
  name: '4 · Edge while scrolling',
  parameters: {
    hint: <>
                Scroll right: the frozen zone gets a border with a light shadow only
                once columns go under it. Scroll back: it is gone.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const el = await grid(canvasElement);
    check(el.dataset.scrolledX !== 'true', 'no edge at first');
    scrollTo(el, 200);
    await waitFor(() => check(el.dataset.scrolledX === 'true', 'edge on'));
    const x0 = el.getBoundingClientRect().left;
    check(Math.round((header(canvasElement, 'name')?.getBoundingClientRect().left ?? -1) - x0) === 0, 'Name sticks');
    scrollTo(el, 0);
    await waitFor(() => check(el.dataset.scrolledX !== 'true', 'edge off'));
  }
}`,...(_=(W=h.parameters)==null?void 0:W.docs)==null?void 0:_.source},description:{story:"The zone's edge appears only when content goes under it.",...(X=(H=h.parameters)==null?void 0:H.docs)==null?void 0:X.description}}};var Y,J,K,Q,Z;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['kb:freeze-with-grouping'],
  name: '5 · With grouping lanes',
  args: {
    pinnedLeft: ['name', 'role'],
    grouping: ['role']
  },
  parameters: {
    hint: <>
                Role is frozen and grouped: its lane sticks at the left and Name sticks
                right after it. Unfreeze Role in <code>state</code>: the lane scrolls
                away.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const el = await grid(canvasElement);
    const lane = canvasElement.querySelector<HTMLElement>('[data-lane-id="role"]') as HTMLElement;
    check(lane?.dataset.pinned === 'true', 'lane is pinned');
    scrollTo(el, 300);
    const x0 = el.getBoundingClientRect().left;
    await waitFor(() => {
      check(Math.round(lane.getBoundingClientRect().left - x0) === 0, 'lane sticks');
      check(Math.round((header(canvasElement, 'name')?.getBoundingClientRect().left ?? 0) - x0) === Math.round(lane.getBoundingClientRect().width), 'Name sticks after the lane');
    });
  }
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"A lane of a pinned grouped column sticks; pinned columns follow it.",...(Z=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var ee,ne,te;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['kb:freeze-playground'],
  args: {
    pinnedLeft: ['name'],
    grouping: ['team'],
    freezeInMenu: true
  },
  parameters: {
    hint: <>
                Everything together: Columns panel, Freeze in the menu, drag, lanes and{' '}
                <code>state</code> below.
            </>
  }
}`,...(te=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const $e=["FromColumnsPanel","FromColumnMenu","Reorder","Edge","WithGrouping","Playground"];export{h as Edge,f as FromColumnMenu,g as FromColumnsPanel,E as Playground,b as Reorder,k as WithGrouping,$e as __namedExportsOrder,Le as default};
