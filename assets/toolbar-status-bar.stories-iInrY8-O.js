import{j as o}from"./jsx-runtime-Cnbe3ryz.js";import{a as d,u as h,w as i,f as R}from"./index-iBx7lKYd.js";import{r as me}from"./index-3dRrDZpt.js";import{T as de}from"./TableCore-Y75h2oha.js";import{T as he,d as be}from"./TableStatusBar-4NxO8OsQ.js";import{c as ge,s as ye,g as Se,T as we}from"./TableToolbar-DTYEmPN-.js";import{T as xe}from"./toolbar-C5VRlWnq.js";import{m as fe,a as u}from"./employees-CL5oqWiT.js";import{c as b}from"./play-kit-Bu4SXy9H.js";import{w as Te,d as Ee,t as q,S as ve}from"./scene-kit-BsKxVgS1.js";import{D as Ce}from"./reference-kit-BHZHy2IZ.js";import{a as P}from"./table-core-base-DFRq_Vzl.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./pin-controls-NGLUwJXC.js";import"./fixtures-P-DSdYmm.js";import"./types-reference-CMrm5GSt.js";const{useArgs:ke}=__STORYBOOK_MODULE_PREVIEW_API__,je=[u("name","Name",190),u("team","Team",130),u("role","Role",160),u("level","Level",100),u("country","Country",130),u("rate","Rate",90)],Be={id:"export",label:"Export",icon:o.jsx("span",{"aria-hidden":!0,children:"⤓"}),renderPanel:({close:e})=>o.jsx("div",{role:"group","data-panel":"export",style:{padding:12},children:o.jsx("button",{type:"button",onClick:e,children:"Export CSV"})})},Re={group:Se(),sort:ye(),columns:ge(),export:Be},qe={group:"groupingControl",sort:"sortingControl",columns:"columnsControl",export:"exportControl"},Pe=({args:e,hint:t,updateArgs:a})=>{const[r]=me.useState(()=>fe(30)),p=e.controls.map(l=>Re[l]),s=l=>o.jsx(we,{table:l,controls:p,start:e.slots?o.jsx("b",{style:{fontSize:14},children:"People"}):void 0,end:e.slots?o.jsx(xe,{children:"Presets"}):void 0}),c=l=>o.jsx(he,{table:l,chips:be(),adornment:e.adornment?o.jsxs("span",{style:{fontSize:12},children:[r.length," people"]}):void 0});return o.jsx(ve,{hint:t,children:o.jsx(de,{data:r,columns:je,getRowId:l=>l.id,state:{sorting:e.sorting,grouping:e.grouping},onSortingChange:l=>{var S;const y=P(l,e.sorting);(S=e.onSortingChange)==null||S.call(e,y),a({sorting:y})},onGroupingChange:l=>{var S;const y=P(l,e.grouping);(S=e.onGroupingChange)==null||S.call(e,y),a({grouping:y})},toolbar:e.toolbar?s:void 0,statusBar:c})})},A=e=>{const t=e.controls.includes("export")?`

// A control of your own: the popover content is yours.
const exportControl: ToolbarControl<Employee> = {
  id: 'export',
  label: 'Export',
  icon: <ExportIcon />,
  renderPanel: ({ close }) => <ExportPanel onDone={close} />,
}`:"",a=e.controls.map(c=>qe[c]),r=["TableCore","TableStatusBar","TableToolbar",...a.filter(c=>c!=="exportControl"),...e.controls.includes("export")?["type ToolbarControl"]:[]],p=e.slots?`
          start={<Title>People</Title>}
          end={<PresetsButton />}`:"",s=e.toolbar?`
      toolbar={(table) => (
        <TableToolbar
          table={table}
          controls={[${a.join(", ")}]}${p}
        />
      )}`:`
      // No toolbar prop: no toolbar.`;return`import { useState } from 'react'
import type { GroupingState, SortingState } from '@tanstack/react-table'
import {
  ${r.join(`,
  `)},
} from '@pnl-simulation/table-core'${t}

export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
  const [sorting, setSorting] = useState<SortingState>(${q(e.sorting,"  ")})
  const [grouping, setGrouping] = useState<GroupingState>(${q(e.grouping,"  ")})

  return (
    <TableCore
      data={employees}
      columns={employeeColumns}
      getRowId={(e) => e.id}
      state={{ sorting, grouping }}
      onSortingChange={setSorting}
      onGroupingChange={setGrouping}${s}
      statusBar={(table) => (
        <TableStatusBar table={table}${e.adornment?" adornment={<span>{employees.length} people</span>}":""} />
      )}
    />
  )
}`},ot={title:"Tables/Table Core/Features/Toolbar & Status bar",tags:["autodocs"],decorators:[Te],render:function(t,{parameters:a}){const[,r]=ke();return o.jsx(Pe,{args:t,hint:a.hint,updateArgs:r})},args:{sorting:[],grouping:[],toolbar:!0,controls:["group","sort","columns"],slots:!1,adornment:!1},argTypes:{sorting:{name:"state.sorting",description:"Sorts in priority order; the chip shows them.",control:"object",table:{category:"state"}},grouping:{name:"state.grouping",description:"Grouped columns; the chip shows them.",options:["team","role","level","country"],control:"check",table:{category:"state"}},toolbar:{description:"Pass the `toolbar` slot at all.",control:"boolean",table:{category:"TableCore"}},controls:{name:"TableToolbar controls",description:"Buttons in the order you tick them. `export` is a control of the screen’s own.",options:["group","sort","columns","export"],control:"check",table:{category:"TableToolbar"}},slots:{name:"TableToolbar start / end",description:"Content before and after the buttons.",control:"boolean",table:{category:"TableToolbar"}},adornment:{name:"TableStatusBar adornment",description:"Shown after the chips; the bar is then always visible.",control:"boolean",table:{category:"TableStatusBar"}},onSortingChange:{action:"onSortingChange",table:{disable:!0}},onGroupingChange:{action:"onGroupingChange",table:{disable:!0}}},parameters:{layout:"fullscreen",sceneCode:A,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:Ee(A),description:{component:`${Ce}


**Toolbar & Status bar** let the user manage grouping, sorting and columns from buttons above the table, and always see what is applied as chips below it.

- **Toolbar** (\`toolbar\` slot, usually \`TableToolbar\`): *Group*, *Sort*, *Columns*; each opens its panel under the button. The screen picks the controls and their order, adds its own, and puts content before / after them.
- **Status bar** (\`statusBar\` slot, usually \`TableStatusBar\`): one chip per feature — the column name, or "N Sorts" / "N Groups". A chip opens the same panel. *Clear all* (on hover) removes the user's sorts and groupings. With nothing applied the bar is gone, unless the screen passes an \`adornment\`.
- **Panels**: applied items on top (direction, remove, ⋮⋮ to reorder), then columns to add, with search.`}}}},n=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},g=e=>i(()=>{const t=e.querySelector("[role=grid]");if(!t||!t.querySelector("[data-cell]"))throw new Error("grid not ready");return t}),k=e=>d(e.querySelector("[role=toolbar]")),m=(e,t)=>e.querySelector(`[data-chip="${t}"]`),j=async(e,t)=>(await h.click(k(e).getByRole("button",{name:t})),i(()=>d(document.body).getByRole("group"))),B=async()=>{var e,t;(t=(e=document.querySelector("[data-panel]"))==null?void 0:e.querySelector("input, button"))==null||t.focus(),await h.keyboard("{Escape}"),await i(()=>n(!document.querySelector("[data-panel]"),"closed"))},w={tags:["kb:bars-buttons"],name:"1 · Toolbar buttons",parameters:{hint:o.jsxs(o.Fragment,{children:["Press ",o.jsx("b",{children:"Sort"})," and pick ",o.jsx("b",{children:"Team A–Z +"}),": the panel stays open with Team on top, and a chip appears below the table. ",o.jsx("b",{children:"Esc"})," or a click outside closes the panel."]})},play:async e=>{if(b(e))return;const{canvasElement:t}=e;await g(t);const r=k(t).getAllByRole("button").map(s=>{var c;return(c=s.textContent)==null?void 0:c.trim()}).join();n(r==="Group,Sort,Columns",`buttons: ${r}`);const p=d(await j(t,"Sort"));await h.click(p.getByRole("button",{name:"Sort by Team A–Z +"})),await i(()=>n(document.querySelector('[data-sort-item="team"]'),"Team on top of the panel")),await i(()=>{var s;return n(((s=m(t,"sort"))==null?void 0:s.textContent)==="Team","chip Team")}),await B()}},x={tags:["kb:bars-chips"],name:"2 · Chips",args:{sorting:[{id:"team",desc:!1},{id:"level",desc:!0}],grouping:["role"]},parameters:{hint:o.jsxs(o.Fragment,{children:["Two sorts show as one chip ",o.jsx("i",{children:"2 Sorts"}),", grouping by Role as"," ",o.jsx("i",{children:"Role"}),". Click a chip: the same panel as the toolbar button opens, and the chip turns dark while it is open."]})},play:async e=>{var r,p,s;if(b(e))return;const{canvasElement:t}=e;await g(t);const a=Array.from(t.querySelectorAll("[data-chip]")).map(c=>c.dataset.chip);n(a.join()==="sort,group",`chip order: ${a}`),n(((r=m(t,"sort"))==null?void 0:r.textContent)==="2 Sorts","2 Sorts"),n(((p=m(t,"group"))==null?void 0:p.textContent)==="Role","Role"),await h.click(m(t,"group")),await i(()=>n(document.querySelector('[data-panel="grouping"]'),"panel open")),n(((s=m(t,"group"))==null?void 0:s.getAttribute("aria-expanded"))==="true","chip marked open"),await B()}},f={tags:["kb:bars-clear-all"],name:"3 · Clear all",args:{sorting:[{id:"country",desc:!1}],grouping:["team"]},parameters:{hint:o.jsxs(o.Fragment,{children:["Hover the status bar: ",o.jsx("b",{children:"Clear all"})," appears. Press it: sorting and grouping are gone, and so is the bar. Watch ",o.jsx("code",{children:"state"}),"."]})},play:async e=>{if(b(e))return;const{canvasElement:t}=e;await g(t),n(t.querySelector("[role=status]"),"bar shown"),await h.click(t.querySelector("[data-clear-all]")),await i(()=>n(!t.querySelector("[role=status]"),"bar gone")),n(!t.querySelector("[data-lane-id]"),"grouping cleared too")}},T={tags:["kb:bars-configured"],name:"4 · Your own controls",args:{controls:["sort","export"],slots:!0,adornment:!0},parameters:{hint:o.jsxs(o.Fragment,{children:["The screen passes only ",o.jsx("b",{children:"Sort"})," and its own ",o.jsx("b",{children:"Export"}),", a title before them and ",o.jsx("b",{children:"Presets"})," after. The status bar has an adornment, so it stays visible with nothing applied."]})},play:async e=>{if(b(e))return;const{canvasElement:t}=e;await g(t);const a=k(t);n(!a.queryByRole("button",{name:"Group"}),"no Group"),n(a.getByRole("button",{name:"Presets"}),"end slot"),n(a.getByText("People"),"start slot"),n(t.querySelector("[role=status]"),"adornment keeps bar"),await j(t,"Export"),await h.click(d(document.body).getByRole("button",{name:"Export CSV"})),await i(()=>n(!document.querySelector('[data-panel="export"]'),"closed"))}},E={tags:["kb:bars-search"],name:"5 · Search in a panel",parameters:{hint:o.jsxs(o.Fragment,{children:["Open ",o.jsx("b",{children:"Sort"})," and type ",o.jsx("i",{children:"cou"}),": only Country is left to add. Type something no column has: ",o.jsx("i",{children:"No options"}),"."]})},play:async e=>{if(b(e))return;const{canvasElement:t}=e;await g(t),await j(t,"Sort");const a=d(document.body).getByRole("textbox",{name:"Search columns to sort by"}),r=d(a.closest("[data-panel]"));R.change(a,{target:{value:"cou"}}),await i(()=>{n(r.queryByRole("button",{name:"Sort by Country A–Z +"}),"Country listed"),n(!r.queryByRole("button",{name:"Sort by Team A–Z +"}),"Team filtered out")}),R.change(a,{target:{value:"zzz"}}),await i(()=>n(r.getByText("No options"),"No options")),await B()}},v={tags:["kb:bars-no-toolbar"],name:"6 · Without a toolbar",args:{toolbar:!1,sorting:[{id:"name",desc:!1}]},parameters:{hint:o.jsxs(o.Fragment,{children:["No ",o.jsx("code",{children:"toolbar"})," slot: nothing above the table. The status bar still shows the sort chip and its panel."]})},play:async e=>{if(b(e))return;const{canvasElement:t}=e;await g(t),n(!t.querySelector("[role=toolbar]"),"no toolbar"),n(m(t,"sort"),"chip still there")}},C={tags:["kb:bars-playground"],args:{sorting:[{id:"team",desc:!1}],grouping:["role"]},parameters:{hint:o.jsxs(o.Fragment,{children:["Everything together: toolbar controls, slots, chips, panels and"," ",o.jsx("code",{children:"state"})," below."]})}};var O,F,N,G,$;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
      name: 'Sort by Team A–Z +'
    }));
    await waitFor(() => check(document.querySelector('[data-sort-item="team"]'), 'Team on top of the panel'));
    await waitFor(() => check(chip(canvasElement, 'sort')?.textContent === 'Team', 'chip Team'));
    await closePopover();
  }
}`,...(N=(F=w.parameters)==null?void 0:F.docs)==null?void 0:N.source},description:{story:"Buttons open their panels; Esc closes.",...($=(G=w.parameters)==null?void 0:G.docs)==null?void 0:$.description}}};var _,L,z,Z,H;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(L=x.parameters)==null?void 0:L.docs)==null?void 0:z.source},description:{story:"One chip per feature; a chip opens the same panel.",...(H=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:H.description}}};var M,I,W,D,V;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(I=f.parameters)==null?void 0:I.docs)==null?void 0:W.source},description:{story:"Clear all removes the user's sorts and groupings; the bar goes.",...(V=(D=f.parameters)==null?void 0:D.docs)==null?void 0:V.description}}};var Y,U,J,K,Q;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(U=T.parameters)==null?void 0:U.docs)==null?void 0:J.source},description:{story:"The screen's own controls, content around them, an adornment.",...(Q=(K=T.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var X,ee,te,oe,ne;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
      name: 'Search columns to sort by'
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
        name: 'Sort by Country A–Z +'
      }), 'Country listed');
      check(!panel.queryByRole('button', {
        name: 'Sort by Team A–Z +'
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
}`,...(te=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Search in a panel narrows the columns to add.",...(ne=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var ae,re,se,le,ce;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(re=v.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"No toolbar slot, no toolbar.",...(ce=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};var ie,pe,ue;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const nt=["Buttons","Chips","ClearAll","Configured","Search","NoToolbar","Playground"];export{w as Buttons,x as Chips,f as ClearAll,T as Configured,v as NoToolbar,C as Playground,E as Search,nt as __namedExportsOrder,ot as default};
