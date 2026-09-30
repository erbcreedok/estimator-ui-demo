import{j as o}from"./styles-DXLXEQ3H.js";import{a as m,u as d,w as c,f as j}from"./index-DLqD3z3M.js";import{r as be}from"./index-BjhrbhTf.js";import{T as me,a as B}from"./TableCore-kOYdxPhk.js";import{T as de,d as ge}from"./TableStatusBar-BHCIeSi2.js";import{c as he,s as ye,g as fe,T as ke,a as xe}from"./TableToolbar-C0bTLKMD.js";import{m as Ne,a as p}from"./employees-DtM5_3-O.js";import{c as g}from"./play-kit-Bu4SXy9H.js";import{w as ve,d as Ee,t as R,S as Se}from"./scene-kit-DXifMYYP.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./panels-D6DlFR9J.js";import"./createSvgIcon-s1BrOgA2.js";import"./fixtures-CCjjPTo2.js";const{useArgs:we}=__STORYBOOK_MODULE_PREVIEW_API__,Te=[p("name","Name",190),p("team","Team",130),p("role","Role",160),p("level","Level",100),p("country","Country",130),p("rate","Rate",90)],Ce={id:"export",label:"Export",icon:o.jsxDEV("span",{"aria-hidden":!0,children:"⤓"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:23,columnNumber:9},void 0),renderPanel:({close:e})=>o.jsxDEV("div",{role:"group","data-panel":"export",style:{padding:12},children:o.jsxDEV("button",{type:"button",onClick:e,children:"Export CSV"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:29,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:26,columnNumber:9},void 0)},De={group:fe,sort:ye,columns:he,export:Ce},je={group:"groupingControl",sort:"sortingControl",columns:"columnsControl",export:"exportControl"},Be=({args:e,hint:t,updateArgs:a})=>{const[r]=be.useState(()=>Ne(30)),u=e.controls.map(i=>De[i]),n=i=>o.jsxDEV(ke,{table:i,controls:u,start:e.slots?o.jsxDEV("b",{style:{fontSize:14},children:"People"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:74,columnNumber:121},void 0):void 0,end:e.slots?o.jsxDEV(xe,{type:"button",children:"Presets"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:76,columnNumber:48},void 0):void 0},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:74,columnNumber:53},void 0),l=i=>o.jsxDEV(de,{table:i,chips:ge,adornment:e.adornment?o.jsxDEV("span",{style:{fontSize:12},children:[r.length," people"]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:77,columnNumber:140},void 0):void 0},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:77,columnNumber:55},void 0);return o.jsxDEV(Se,{hint:t,children:o.jsxDEV(me,{data:r,columns:Te,getRowId:i=>i.id,state:{sorting:e.sorting,grouping:e.grouping},onSortingChange:i=>{var f;const y=B(i,e.sorting);(f=e.onSortingChange)==null||f.call(e,y),a({sorting:y})},onGroupingChange:i=>{var f;const y=B(i,e.grouping);(f=e.onGroupingChange)==null||f.call(e,y),a({grouping:y})},toolbar:e.toolbar?n:void 0,statusBar:l},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:81,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:80,columnNumber:10},void 0)},V=e=>{const t=e.controls.includes("export")?`

// A control of your own: the popover content is yours.
const exportControl: ToolbarControl<Employee> = {
  id: 'export',
  label: 'Export',
  icon: <ExportIcon />,
  renderPanel: ({ close }) => <ExportPanel onDone={close} />,
}`:"",a=e.controls.map(l=>je[l]),r=["TableCore","TableStatusBar","TableToolbar",...a.filter(l=>l!=="exportControl"),...e.controls.includes("export")?["type ToolbarControl"]:[]],u=e.slots?`
          start={<Title>People</Title>}
          end={<PresetsButton />}`:"",n=e.toolbar?`
      toolbar={(table) => (
        <TableToolbar
          table={table}
          controls={[${a.join(", ")}]}${u}
        />
      )}`:`
      // No toolbar prop: no toolbar.`;return`import { useState } from 'react'
import type { GroupingState, SortingState } from '@tanstack/react-table'
import {
  ${r.join(`,
  `)},
} from '@pnl-simulation/table-core'${t}

export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
  const [sorting, setSorting] = useState<SortingState>(${R(e.sorting,"  ")})
  const [grouping, setGrouping] = useState<GroupingState>(${R(e.grouping,"  ")})

  return (
    <TableCore
      data={employees}
      columns={employeeColumns}
      getRowId={(e) => e.id}
      state={{ sorting, grouping }}
      onSortingChange={setSorting}
      onGroupingChange={setGrouping}${n}
      statusBar={(table) => (
        <TableStatusBar table={table}${e.adornment?" adornment={<span>{employees.length} people</span>}":""} />
      )}
    />
  )
}`},He={title:"Tables/Table Core/Draft/Toolbar & Status bar",tags:["autodocs"],decorators:[ve],render:function(t,{parameters:a}){const[,r]=we();return o.jsxDEV(Be,{args:t,hint:a.hint,updateArgs:r},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:156,columnNumber:12},this)},args:{sorting:[],grouping:[],toolbar:!0,controls:["group","sort","columns"],slots:!1,adornment:!1},argTypes:{sorting:{name:"state.sorting",description:"Sorts in priority order; the chip shows them.",control:"object",table:{category:"state"}},grouping:{name:"state.grouping",description:"Grouped columns; the chip shows them.",options:["team","role","level","country"],control:"check",table:{category:"state"}},toolbar:{description:"Pass the `toolbar` slot at all.",control:"boolean",table:{category:"TableCore"}},controls:{name:"TableToolbar controls",description:"Buttons in the order you tick them. `export` is a control of the screen’s own.",options:["group","sort","columns","export"],control:"check",table:{category:"TableToolbar"}},slots:{name:"TableToolbar start / end",description:"Content before and after the buttons.",control:"boolean",table:{category:"TableToolbar"}},adornment:{name:"TableStatusBar adornment",description:"Shown after the chips; the bar is then always visible.",control:"boolean",table:{category:"TableStatusBar"}},onSortingChange:{action:"onSortingChange",table:{disable:!0}},onGroupingChange:{action:"onGroupingChange",table:{disable:!0}}},parameters:{layout:"fullscreen",sceneCode:V,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:Ee(V),description:{component:'\n**Toolbar & Status bar** let the user manage grouping, sorting and columns from buttons above the table, and always see what is applied as chips below it.\n\n- **Toolbar** (`toolbar` slot, usually `TableToolbar`): *Group*, *Sort*, *Columns*; each opens its panel under the button. The screen picks the controls and their order, adds its own, and puts content before / after them.\n- **Status bar** (`statusBar` slot, usually `TableStatusBar`): one chip per feature — the column name, or "N Sorts" / "N Groups". A chip opens the same panel. *Clear all* (on hover) removes the user\'s sorts and groupings. With nothing applied the bar is gone, unless the screen passes an `adornment`.\n- **Panels**: applied items on top (direction, remove, ⋮⋮ to reorder), then columns to add, with search.'}}}},s=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},h=e=>c(()=>{const t=e.querySelector("[role=grid]");if(!t||!t.querySelector("[data-cell]"))throw new Error("grid not ready");return t}),T=e=>m(e.querySelector("[role=toolbar]")),b=(e,t)=>e.querySelector(`[data-chip="${t}"]`),C=async(e,t)=>(await d.click(T(e).getByRole("button",{name:t})),c(()=>m(document.body).getByRole("group"))),D=async()=>{var e,t;(t=(e=document.querySelector("[data-panel]"))==null?void 0:e.querySelector("input, button"))==null||t.focus(),await d.keyboard("{Escape}"),await c(()=>s(!document.querySelector("[data-panel]"),"closed"))},k={tags:["kb:bars-buttons"],name:"1 · Toolbar buttons",parameters:{hint:o.jsxDEV(o.Fragment,{children:["Press ",o.jsxDEV("b",{children:"Sort"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:285,columnNumber:23},void 0)," and pick ",o.jsxDEV("b",{children:"Team A–Z +"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:285,columnNumber:44},void 0),": the panel stays open with Team on top, and a chip appears below the table. ",o.jsxDEV("b",{children:"Esc"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:286,columnNumber:66},void 0)," or a click outside closes the panel."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:284,columnNumber:11},void 0)},play:async e=>{if(g(e))return;const{canvasElement:t}=e;await h(t);const r=T(t).getAllByRole("button").map(n=>{var l;return(l=n.textContent)==null?void 0:l.trim()}).join();s(r==="Group,Sort,Columns",`buttons: ${r}`);const u=m(await C(t,"Sort"));await d.click(u.getByRole("button",{name:"Sort by Team A–Z"})),await c(()=>s(document.querySelector('[data-sort-item="team"]'),"Team on top of the panel")),await c(()=>{var n;return s(((n=b(t,"sort"))==null?void 0:n.textContent)==="Team","chip Team")}),await D()}},x={tags:["kb:bars-chips"],name:"2 · Chips",args:{sorting:[{id:"team",desc:!1},{id:"level",desc:!0}],grouping:["role"]},parameters:{hint:o.jsxDEV(o.Fragment,{children:["Two sorts show as one chip ",o.jsxDEV("i",{children:"2 Sorts"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:325,columnNumber:44},void 0),", grouping by Role as"," ",o.jsxDEV("i",{children:"Role"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:326,columnNumber:17},void 0),". Click a chip: the same panel as the toolbar button opens, and the chip turns dark while it is open."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:324,columnNumber:11},void 0)},play:async e=>{var r,u,n;if(g(e))return;const{canvasElement:t}=e;await h(t);const a=Array.from(t.querySelectorAll("[data-chip]")).map(l=>l.dataset.chip);s(a.join()==="sort,group",`chip order: ${a}`),s(((r=b(t,"sort"))==null?void 0:r.textContent)==="2 Sorts","2 Sorts"),s(((u=b(t,"group"))==null?void 0:u.textContent)==="Role","Role"),await d.click(b(t,"group")),await c(()=>s(document.querySelector('[data-panel="grouping"]'),"panel open")),s(((n=b(t,"group"))==null?void 0:n.getAttribute("aria-expanded"))==="true","chip marked open"),await D()}},N={tags:["kb:bars-clear-all"],name:"3 · Clear all",args:{sorting:[{id:"country",desc:!1}],grouping:["team"]},parameters:{hint:o.jsxDEV(o.Fragment,{children:["Hover the status bar: ",o.jsxDEV("b",{children:"Clear all"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:360,columnNumber:39},void 0)," appears. Press it: sorting and grouping are gone, and so is the bar. Watch ",o.jsxDEV("code",{children:"state"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:361,columnNumber:61},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:359,columnNumber:11},void 0)},play:async e=>{if(g(e))return;const{canvasElement:t}=e;await h(t),s(t.querySelector("[role=status]"),"bar shown"),await d.click(t.querySelector("[data-clear-all]")),await c(()=>s(!t.querySelector("[role=status]"),"bar gone")),s(!t.querySelector("[data-lane-id]"),"grouping cleared too")}},v={tags:["kb:bars-configured"],name:"4 · Your own controls",args:{controls:["sort","export"],slots:!0,adornment:!0},parameters:{hint:o.jsxDEV(o.Fragment,{children:["The screen passes only ",o.jsxDEV("b",{children:"Sort"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:388,columnNumber:40},void 0)," and its own ",o.jsxDEV("b",{children:"Export"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:388,columnNumber:64},void 0),", a title before them and ",o.jsxDEV("b",{children:"Presets"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:389,columnNumber:33},void 0)," after. The status bar has an adornment, so it stays visible with nothing applied."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:387,columnNumber:11},void 0)},play:async e=>{if(g(e))return;const{canvasElement:t}=e;await h(t);const a=T(t);s(!a.queryByRole("button",{name:"Group"}),"no Group"),s(a.getByRole("button",{name:"Presets"}),"end slot"),s(a.getByText("People"),"start slot"),s(t.querySelector("[role=status]"),"adornment keeps bar"),await C(t,"Export"),await d.click(m(document.body).getByRole("button",{name:"Export CSV"})),await c(()=>s(!document.querySelector('[data-panel="export"]'),"closed"))}},E={tags:["kb:bars-search"],name:"5 · Search in a panel",parameters:{hint:o.jsxDEV(o.Fragment,{children:["Open ",o.jsxDEV("b",{children:"Sort"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:422,columnNumber:22},void 0)," and type ",o.jsxDEV("i",{children:"cou"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:422,columnNumber:43},void 0),": only Country is left to add. Type something no column has: ",o.jsxDEV("i",{children:"No options"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:423,columnNumber:42},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:421,columnNumber:11},void 0)},play:async e=>{if(g(e))return;const{canvasElement:t}=e;await h(t),await C(t,"Sort");const a=m(document.body).getByRole("textbox",{name:"Search columns to sorting"}),r=m(a.closest("[data-panel]"));j.change(a,{target:{value:"cou"}}),await c(()=>{s(r.queryByRole("button",{name:"Sort by Country A–Z"}),"Country listed"),s(!r.queryByRole("button",{name:"Sort by Team A–Z"}),"Team filtered out")}),j.change(a,{target:{value:"zzz"}}),await c(()=>s(r.getByText("No options"),"No options")),await D()}},S={tags:["kb:bars-no-toolbar"],name:"6 · Without a toolbar",args:{toolbar:!1,sorting:[{id:"name",desc:!1}]},parameters:{hint:o.jsxDEV(o.Fragment,{children:["No ",o.jsxDEV("code",{children:"toolbar"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:476,columnNumber:20},void 0)," slot: nothing above the table. The status bar still shows the sort chip and its panel."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:475,columnNumber:11},void 0)},play:async e=>{if(g(e))return;const{canvasElement:t}=e;await h(t),s(!t.querySelector("[role=toolbar]"),"no toolbar"),s(b(t,"sort"),"chip still there")}},w={tags:["kb:bars-playground"],args:{sorting:[{id:"team",desc:!1}],grouping:["role"]},parameters:{hint:o.jsxDEV(o.Fragment,{children:["Everything together: toolbar controls, slots, chips, panels and"," ",o.jsxDEV("code",{children:"state"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:502,columnNumber:17},void 0)," below."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/toolbar-status-bar.stories.tsx",lineNumber:500,columnNumber:11},void 0)}};var U,q,P,A,O;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['kb:bars-buttons'],
  name: '1 · Toolbar buttons',
  parameters: {
    hint: <>
                Press <b>Sort</b> and pick <b>Team A–Z +</b>: the panel stays open with
                Team on top, and a chip appears below the table. <b>Esc</b> or a click
                outside closes the panel.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const bar = toolbar(canvasElement);
    const names = bar.getAllByRole('button').map(b => b.textContent?.trim()).join();
    check(names === 'Group,Sort,Columns', \`buttons: \${names}\`);
    const panel = within(await openControl(canvasElement, 'Sort'));
    await userEvent.click(panel.getByRole('button', {
      name: 'Sort by Team A–Z'
    }));
    await waitFor(() => check(document.querySelector('[data-sort-item="team"]'), 'Team on top of the panel'));
    await waitFor(() => check(chip(canvasElement, 'sort')?.textContent === 'Team', 'chip Team'));
    await closePopover();
  }
}`,...(P=(q=k.parameters)==null?void 0:q.docs)==null?void 0:P.source},description:{story:"Buttons open their panels; Esc closes.",...(O=(A=k.parameters)==null?void 0:A.docs)==null?void 0:O.description}}};var G,F,$,_,L;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['kb:bars-chips'],
  name: '2 · Chips',
  args: {
    sorting: [{
      id: 'team',
      desc: false
    }, {
      id: 'level',
      desc: true
    }],
    grouping: ['role']
  },
  parameters: {
    hint: <>
                Two sorts show as one chip <i>2 Sorts</i>, grouping by Role as{' '}
                <i>Role</i>. Click a chip: the same panel as the toolbar button opens,
                and the chip turns dark while it is open.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const ids = Array.from(canvasElement.querySelectorAll<HTMLElement>('[data-chip]')).map(c => c.dataset.chip);
    check(ids.join() === 'sort,group', \`chip order: \${ids}\`);
    check(chip(canvasElement, 'sort')?.textContent === '2 Sorts', '2 Sorts');
    check(chip(canvasElement, 'group')?.textContent === 'Role', 'Role');
    await userEvent.click(chip(canvasElement, 'group') as HTMLElement);
    await waitFor(() => check(document.querySelector('[data-panel="grouping"]'), 'panel open'));
    check(chip(canvasElement, 'group')?.getAttribute('aria-expanded') === 'true', 'chip marked open');
    await closePopover();
  }
}`,...($=(F=x.parameters)==null?void 0:F.docs)==null?void 0:$.source},description:{story:"One chip per feature; a chip opens the same panel.",...(L=(_=x.parameters)==null?void 0:_.docs)==null?void 0:L.description}}};var z,Z,H,M,I;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['kb:bars-clear-all'],
  name: '3 · Clear all',
  args: {
    sorting: [{
      id: 'country',
      desc: false
    }],
    grouping: ['team']
  },
  parameters: {
    hint: <>
                Hover the status bar: <b>Clear all</b> appears. Press it: sorting and
                grouping are gone, and so is the bar. Watch <code>state</code>.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(canvasElement.querySelector('[role=status]'), 'bar shown');
    await userEvent.click(canvasElement.querySelector('[data-clear-all]') as HTMLElement);
    await waitFor(() => check(!canvasElement.querySelector('[role=status]'), 'bar gone'));
    check(!canvasElement.querySelector('[data-lane-id]'), 'grouping cleared too');
  }
}`,...(H=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:H.source},description:{story:"Clear all removes the user's sorts and groupings; the bar goes.",...(I=(M=N.parameters)==null?void 0:M.docs)==null?void 0:I.description}}};var W,Y,J,K,Q;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['kb:bars-configured'],
  name: '4 · Your own controls',
  args: {
    controls: ['sort', 'export'],
    slots: true,
    adornment: true
  },
  parameters: {
    hint: <>
                The screen passes only <b>Sort</b> and its own <b>Export</b>, a title
                before them and <b>Presets</b> after. The status bar has an adornment,
                so it stays visible with nothing applied.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const bar = toolbar(canvasElement);
    check(!bar.queryByRole('button', {
      name: 'Group'
    }), 'no Group');
    check(bar.getByRole('button', {
      name: 'Presets'
    }), 'end slot');
    check(bar.getByText('People'), 'start slot');
    check(canvasElement.querySelector('[role=status]'), 'adornment keeps bar');
    await openControl(canvasElement, 'Export');
    await userEvent.click(within(document.body).getByRole('button', {
      name: 'Export CSV'
    }));
    await waitFor(() => check(!document.querySelector('[data-panel="export"]'), 'closed'));
  }
}`,...(J=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"The screen's own controls, content around them, an adornment.",...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var X,ee,te,oe,se;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['kb:bars-search'],
  name: '5 · Search in a panel',
  parameters: {
    hint: <>
                Open <b>Sort</b> and type <i>cou</i>: only Country is left to add. Type
                something no column has: <i>No options</i>.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await openControl(canvasElement, 'Sort');
    const search = within(document.body).getByRole('textbox', {
      name: 'Search columns to sorting'
    }) as HTMLInputElement;
    // The panel this search box belongs to.
    const panel = within(search.closest('[data-panel]') as HTMLElement);
    // A change event: typed keys do not reach React's onChange inside the
    // play's popover (they do for a person).
    fireEvent.change(search, {
      target: {
        value: 'cou'
      }
    });
    await waitFor(() => {
      check(panel.queryByRole('button', {
        name: 'Sort by Country A–Z'
      }), 'Country listed');
      check(!panel.queryByRole('button', {
        name: 'Sort by Team A–Z'
      }), 'Team filtered out');
    });
    fireEvent.change(search, {
      target: {
        value: 'zzz'
      }
    });
    await waitFor(() => check(panel.getByText('No options'), 'No options'));
    await closePopover();
  }
}`,...(te=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Search in a panel narrows the columns to add.",...(se=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:se.description}}};var ae,re,ne,ie,le;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['kb:bars-no-toolbar'],
  name: '6 · Without a toolbar',
  args: {
    toolbar: false,
    sorting: [{
      id: 'name',
      desc: false
    }]
  },
  parameters: {
    hint: <>
                No <code>toolbar</code> slot: nothing above the table. The status bar
                still shows the sort chip and its panel.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    check(!canvasElement.querySelector('[role=toolbar]'), 'no toolbar');
    check(chip(canvasElement, 'sort'), 'chip still there');
  }
}`,...(ne=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ne.source},description:{story:"No toolbar slot, no toolbar.",...(le=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:le.description}}};var ce,ue,pe;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['kb:bars-playground'],
  args: {
    sorting: [{
      id: 'team',
      desc: false
    }],
    grouping: ['role']
  },
  parameters: {
    hint: <>
                Everything together: toolbar controls, slots, chips, panels and{' '}
                <code>state</code> below.
            </>
  }
}`,...(pe=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const Me=["Buttons","Chips","ClearAll","Configured","Search","NoToolbar","Playground"];export{k as Buttons,x as Chips,N as ClearAll,v as Configured,S as NoToolbar,w as Playground,E as Search,Me as __namedExportsOrder,He as default};
