import{j as a,Y as P,a0 as j,Z as R,b4 as M,b5 as O,be as Ce,b8 as we,bE as ke,c as n,M as r,s as b,bq as _,h as H,u as Te,w as Ee,l as Pe,f as je,r as F,A as Se,S as xe}from"./products-CTiDOXRn.js";import{b as Re,s as A,d as Ae,e as Fe,f as I,l as Me,g as Oe,m as _e,n as He,p as Ie,r as We,t as Be,w as Le}from"./checks-ZKrw2ksD.js";import{P as o}from"./scene-CixxnLkk.js";const Ke=`import {
	TableCore,
	cellSelectionFeature,
	cellKeyboardFeature,
	createColumnHelper,
	tableFeatures,
	type TableCoreProps,
	rowVirtualizationFeature,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

// Cell selection is two features: the first keeps what is selected, the second
// puts it on the grid (the active cell, Tab, Home, End, Esc).
const features = tableFeatures({
	rowVirtualizationFeature, // ← new: only the rows in the window are drawn
	cellSelectionFeature,
	cellKeyboardFeature,
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('role', { header: 'Role' }),
	helper.accessor('level', { header: 'Level' }),
	helper.accessor('country', { header: 'Country' }),
])

export const BasicTable = ({
	rows,
	enableCellSelection = true,
	// Off by default: the table selects one block. On, ⌘/Ctrl+click adds and takes away blocks.
	enableMultiCellRangeSelection = false,
	...options
}: { rows: Person[] } & Partial<TableCoreProps<typeof features, Person>>) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		enableCellSelection={enableCellSelection}
		enableMultiCellRangeSelection={enableMultiCellRangeSelection}
		{...options}
	/>
)
`,Ne=`import {
	TableCore,
	cellSelectionFeature,
	cellKeyboardFeature,
	createColumnHelper,
	createUtilityColumn,
	rowSelectionFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

// \`rowSelectionFeature\` gives the row checkboxes; the utility column shows them.
const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	rowSelectionFeature,
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	createUtilityColumn(helper),
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('role', { header: 'Role' }),
	helper.accessor('level', { header: 'Level' }),
	helper.accessor('country', { header: 'Country' }),
])

export const CheckboxCellsTable = ({ rows }: { rows: Person[] }) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
	/>
)
`,Ue=`import {
	TableCore,
	createColumnHelper,
	createUtilityColumn,
	rowSelectionFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

// No cell selection among the features: the cells take no focus, every row
// checkbox is a Tab stop, the roles are table / row / cell.
const features = tableFeatures({ rowSelectionFeature })

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	createUtilityColumn(helper),
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('role', { header: 'Role' }),
	helper.accessor('level', { header: 'Level' }),
	helper.accessor('country', { header: 'Country' }),
])

export const PlainTable = ({ rows }: { rows: Person[] }) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
	/>
)
`,De=`import type { Ref } from 'react'

import {
	TableCore,
	cellSelectionFeature,
	cellKeyboardFeature,
	createColumnHelper,
	tableFeatures,
	type TableCoreHandle,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('role', { header: 'Role' }),
	helper.accessor('level', { header: 'Level' }),
	helper.accessor('country', { header: 'Country' }),
])

// The handle: \`ref.current.focusCell(rowId, columnId)\` from outside the table.
export type GoToCellHandle = TableCoreHandle<typeof features, Person>

export const GoToCellTable = ({
	rows,
	tableRef,
}: {
	rows: Person[]
	tableRef: Ref<GoToCellHandle>
}) => (
	<TableCore
		ref={tableRef}
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
	/>
)
`,$e=j({rowVirtualizationFeature:Ce,cellSelectionFeature:O,cellKeyboardFeature:M}),u=R(),Ge=u.columns([u.accessor("name",{header:"Name"}),u.accessor("team",{header:"Team"}),u.accessor("role",{header:"Role"}),u.accessor("level",{header:"Level"}),u.accessor("country",{header:"Country"})]),l=({rows:e,enableCellSelection:t=!0,enableMultiCellRangeSelection:s=!1,...c})=>a.jsx(P,{features:$e,data:e,columns:Ge,getRowId:ve=>ve.id,enableCellSelection:t,enableMultiCellRangeSelection:s,...c}),qe=j({cellSelectionFeature:O,cellKeyboardFeature:M,rowSelectionFeature:ke}),i=R(),ze=i.columns([we(i),i.accessor("name",{header:"Name"}),i.accessor("team",{header:"Team"}),i.accessor("role",{header:"Role"}),i.accessor("level",{header:"Level"}),i.accessor("country",{header:"Country"})]),Ve=({rows:e})=>a.jsx(P,{features:qe,data:e,columns:ze,getRowId:t=>t.id}),Ye=j({cellSelectionFeature:O,cellKeyboardFeature:M}),m=R(),Ze=m.columns([m.accessor("name",{header:"Name"}),m.accessor("team",{header:"Team"}),m.accessor("role",{header:"Role"}),m.accessor("level",{header:"Level"}),m.accessor("country",{header:"Country"})]),Je=({rows:e,tableRef:t})=>a.jsx(P,{ref:t,features:Ye,data:e,columns:Ze,getRowId:s=>s.id}),Qe=j({rowSelectionFeature:ke}),h=R(),Xe=h.columns([we(h),h.accessor("name",{header:"Name"}),h.accessor("team",{header:"Team"}),h.accessor("role",{header:"Role"}),h.accessor("level",{header:"Level"}),h.accessor("country",{header:"Country"})]),ea=({rows:e})=>a.jsx(P,{features:Qe,data:e,columns:Xe,getRowId:t=>t.id}),[d]=Object.values([Ke]),[aa]=Object.values([Ne]),[ta]=Object.values([Ue]),[na]=Object.values([De]),ia={title:"Tables/Table Core/Features/Keyboard & Selection/Keys and mouse",id:"tables-table-core-features-keyboard-selection-places",...je(d)},p={tags:["kb:keyboard-arrows"],name:"3 · Active cell and arrows",parameters:{...b(d,"Arrows"),summary:"A click makes a cell active; the arrows, Home and End move it (Ctrl or ⌘ goes to the edge of the table)."},args:{enableCellSelection:!0},argTypes:{enableCellSelection:{control:{type:"boolean"}}},render:e=>a.jsx(o,{hint:a.jsx(r,{text:"Click a cell and press the **arrows**, **Home**, **End**; with **Ctrl** or **⌘** an arrow, Home and End go to the edge of the table. The cell the keys move from is *v9’s focused cell*."}),children:t=>a.jsx(l,{rows:t,...e})}),play:async e=>{n(e)||(await Re(e.canvasElement),await A(e))}},y={tags:["kb:keyboard-tab-keys"],name:"4 · Tab and Shift+Tab",parameters:{...b(d,"TabKeys"),summary:"Tab goes to the next cell and wraps rows; Tab into the table makes the first cell active; from the first cell Shift+Tab leaves the table."},args:{enableCellSelection:!0},argTypes:{enableCellSelection:{control:{type:"boolean"}}},render:e=>a.jsx(o,{hint:a.jsx(r,{text:"Press **Tab** from outside the table: the first cell is active. **Tab** goes right and wraps to the next row; **Shift+Tab** goes back, and from the first cell it leaves the table."}),children:t=>a.jsx(l,{rows:t,...e})}),play:async e=>{n(e)||(await Be(e.canvasElement),await A(e))}},f={tags:["kb:keyboard-pages"],name:"5 · PageUp and PageDown",parameters:{...b(d,"Pages"),summary:"PageUp and PageDown move a screen."},args:{enableCellSelection:!0},argTypes:{enableCellSelection:{control:{type:"boolean"}}},render:e=>a.jsx(o,{count:60,hint:a.jsx(r,{text:"**PageDown** and **PageUp** move a screen of rows; the table scrolls with the cell."}),children:t=>a.jsx(l,{rows:t,...e})}),play:async e=>{n(e)||(await Ie(e.canvasElement),await A(e))}},g={tags:["kb:keyboard-range"],name:"6 · Select a range",parameters:{...b(d,"Range"),summary:"Shift + arrows, Shift + click and a drag select a range: one frame round it, the active cell outlined, no text selected."},args:{enableCellSelection:!0},argTypes:{enableCellSelection:{control:{type:"boolean"}}},render:e=>a.jsx(o,{hint:a.jsx(r,{text:"Click a cell, then **Shift + arrows**, or **Shift + click** another cell, or drag with the mouse: a light blue rectangle with one frame round it and the active cell outlined. The state is v9’s: the ranges are in `state.cellSelection`, by ids."}),children:t=>a.jsx(l,{rows:t,...e})}),play:async e=>{n(e)||(await We(e.canvasElement),await A(e))}},w={tags:["kb:keyboard-large-data"],name:"7 · 10 000 rows",parameters:{summary:"Only the visible rows are drawn; keys and a drag stay fast."},render:()=>a.jsx(o,{count:1e4,hint:a.jsx(r,{text:"10 000 rows, only the visible ones are drawn. Click a cell and hold an arrow."}),children:e=>a.jsx(l,{rows:e})}),play:async e=>{n(e)||await Me(e.canvasElement)}},ra=()=>{const e=F.useMemo(()=>Se(30),[]),t=F.useRef(null),s=e[24];return a.jsx(xe,{fit:"scroll",hint:a.jsx(r,{text:"The button calls `ref.focusCell(rowId, 'country')`: the table scrolls to row 25 and its Country cell becomes the focused one, as for a click."}),children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[a.jsx("div",{style:{paddingBottom:8},children:a.jsxs("button",{type:"button","data-go-to":!0,onClick:()=>{var c;return(c=t.current)==null?void 0:c.focusCell(s.id,"country")},children:["Go to ",s.name," · Country"]})}),a.jsx("div",{style:{flex:1,minHeight:0},children:a.jsx(Je,{rows:e,tableRef:t})})]})})},k={tags:["kb:keyboard-from-outside"],name:"8 · A button moves the active cell",parameters:{..._(na),summary:"`ref.focusCell(rowId, columnId)` makes a cell the focused one, scrolls to it and focuses it."},render:()=>a.jsx(ra,{}),play:async e=>{var s;if(n(e))return;const t=e.canvasElement;await H(()=>t.querySelector('[role="grid"] [data-cell]'),"drawn"),await Te.click(Ee(t).getByRole("button",{name:/^Go to/})),await H(()=>{var c;return((c=I(t))==null?void 0:c.dataset.rowId)==="p25"},"the cell of row 25 is the active one"),Pe(((s=I(t))==null?void 0:s.dataset.columnId)==="country","in the column the button named")}},oa=()=>{const e=F.useMemo(()=>Se(12),[]);return a.jsxs(xe,{hint:a.jsx(r,{text:"Select a range (click, then Shift + arrows), then click the button above: the outline goes, the range stays pale. Tab or click back into the table: you go on from the same cell."}),children:[a.jsx("div",{style:{paddingBottom:8},children:a.jsx("button",{type:"button","data-outside":!0,children:"A button outside the table"})}),a.jsx(l,{rows:e})]})},S={tags:["kb:keyboard-leave-and-come-back"],name:"9 · Tab leaves the table and comes back",parameters:{summary:"The focus leaves: no outline, the range stays pale."},render:()=>a.jsx(oa,{}),play:async e=>{n(e)||await Oe(e.canvasElement)}},x={tags:["kb:keyboard-escape"],name:"10 · Esc drops the range",parameters:{summary:"Esc drops the range, then the active cell."},render:()=>a.jsx(o,{hint:a.jsx(r,{text:"Select a range and press **Esc**: the range goes, the active cell stays. **Esc** again: no active cell; Tab brings you back to the first cell."}),children:e=>a.jsx(l,{rows:e})}),play:async e=>{n(e)||await Fe(e.canvasElement)}},v={tags:["kb:keyboard-controls-in-cells"],name:"11 · Space ticks a checkbox in a cell",parameters:{..._(aa),summary:"A control in a cell is no Tab stop: the active cell reaches it, Space and Enter press it."},render:()=>a.jsx(o,{hint:a.jsx(r,{text:"The row checkbox is no Tab stop: click a Name cell, press **←** to the checkbox cell and **Space** — the row is ticked; **Enter** unticks it. Tab goes on to the next cell, not to a checkbox."}),children:e=>a.jsx(Ve,{rows:e})}),play:async e=>{n(e)||await Ae(e.canvasElement)}},C={tags:["kb:keyboard-native-table"],name:"12 · Tab goes from checkbox to checkbox",parameters:{summary:"Without the cell selection features the table is a native one: Tab goes from control to control.",..._(ta)},render:()=>a.jsx(o,{hint:a.jsx(r,{text:"`cellSelectionFeature` is not in the list: a plain table. Click a cell — no outline. Tab goes from one row checkbox to the next, like any checkboxes on a page."}),children:e=>a.jsx(ea,{rows:e})}),play:async e=>{n(e)||await He(e.canvasElement)}},T={tags:["kb:keyboard-many-ranges"],name:"13 · Several ranges",parameters:{...b(d,"ManyRanges"),summary:"`enableMultiCellRangeSelection`: ⌘/Ctrl+click adds a cell, on a selected one it takes it out; ⌘/Ctrl+drag adds a block; Shift grows the active (last) block only; an arrow without Shift leaves one cell. The state is v9’s `cellSelection`: a list of ranges, the last one active. Off by default: the table selects one block."},args:{enableMultiCellRangeSelection:!0},argTypes:{enableMultiCellRangeSelection:{control:{type:"boolean"}}},render:e=>a.jsx(o,{hint:a.jsx(r,{text:"Try: **⌘/Ctrl+click** another cell, **⌘/Ctrl+drag** a block, then **Shift+arrow**."}),children:t=>a.jsx(l,{rows:t,...e})}),play:async e=>{n(e)||await _e(e)}},E={tags:["kb:keyboard-walk-selection"],name:"14 · Tab and Enter in a selection",parameters:{...b(d,"WalkTheSelection"),summary:"With more than one cell selected, Tab and Shift+Tab walk the cells of the selection along the rows of a block, Enter and Shift+Enter down its columns; at the end of a block the next block comes, and after the last one the first. The selection stays and only the active cell moves (Esc leaves). With one cell selected they are the usual keys."},args:{enableMultiCellRangeSelection:!0},argTypes:{enableMultiCellRangeSelection:{control:{type:"boolean"}}},render:e=>a.jsx(o,{hint:a.jsx(r,{text:"Try: select a block (**Shift+click**), then **Tab** and **Enter**; add a block with **⌘/Ctrl+click**."}),children:t=>a.jsx(l,{rows:t,...e})}),play:async e=>{n(e)||await Le(e.canvasElement)}};var W,B,L;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['kb:keyboard-arrows'],
  name: '3 · Active cell and arrows',
  parameters: {
    ...sceneCodeWith(source, 'Arrows'),
    summary: 'A click makes a cell active; the arrows, Home and End move it (Ctrl or ⌘ goes to the edge of the table).'
  },
  args: {
    enableCellSelection: true
  },
  argTypes: {
    enableCellSelection: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <PeopleScene hint={<Md text="Click a cell and press the **arrows**, **Home**, **End**; with **Ctrl** or **⌘** an arrow, Home and End go to the edge of the table. The cell the keys move from is *v9’s focused cell*." />}>
            {rows => <BasicTable rows={rows} {...args} />}
        </PeopleScene>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await arrowsAct(ctx.canvasElement);
    await selectionSwitchAct(ctx);
  }
}`,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var K,N,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['kb:keyboard-tab-keys'],
  name: '4 · Tab and Shift+Tab',
  parameters: {
    ...sceneCodeWith(source, 'TabKeys'),
    summary: 'Tab goes to the next cell and wraps rows; Tab into the table makes the first cell active; from the first cell Shift+Tab leaves the table.'
  },
  args: {
    enableCellSelection: true
  },
  argTypes: {
    enableCellSelection: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <PeopleScene hint={<Md text="Press **Tab** from outside the table: the first cell is active. **Tab** goes right and wraps to the next row; **Shift+Tab** goes back, and from the first cell it leaves the table." />}>
            {rows => <BasicTable rows={rows} {...args} />}
        </PeopleScene>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await tabAct(ctx.canvasElement);
    await selectionSwitchAct(ctx);
  }
}`,...(U=(N=y.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var D,$,G;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['kb:keyboard-pages'],
  name: '5 · PageUp and PageDown',
  parameters: {
    ...sceneCodeWith(source, 'Pages'),
    summary: 'PageUp and PageDown move a screen.'
  },
  args: {
    enableCellSelection: true
  },
  argTypes: {
    enableCellSelection: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <PeopleScene count={60} hint={<Md text="**PageDown** and **PageUp** move a screen of rows; the table scrolls with the cell." />}>
            {rows => <BasicTable rows={rows} {...args} />}
        </PeopleScene>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await pagesAct(ctx.canvasElement);
    await selectionSwitchAct(ctx);
  }
}`,...(G=($=f.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var q,z,V;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['kb:keyboard-range'],
  name: '6 · Select a range',
  parameters: {
    ...sceneCodeWith(source, 'Range'),
    summary: 'Shift + arrows, Shift + click and a drag select a range: one frame round it, the active cell outlined, no text selected.'
  },
  args: {
    enableCellSelection: true
  },
  argTypes: {
    enableCellSelection: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <PeopleScene hint={<Md text="Click a cell, then **Shift + arrows**, or **Shift + click** another cell, or drag with the mouse: a light blue rectangle with one frame round it and the active cell outlined. The state is v9’s: the ranges are in \`state.cellSelection\`, by ids." />}>
            {rows => <BasicTable rows={rows} {...args} />}
        </PeopleScene>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await rangeAct(ctx.canvasElement);
    await selectionSwitchAct(ctx);
  }
}`,...(V=(z=g.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var Y,Z,J;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['kb:keyboard-large-data'],
  name: '7 · 10 000 rows',
  parameters: {
    summary: 'Only the visible rows are drawn; keys and a drag stay fast.'
  },
  render: () => <PeopleScene count={10000} hint={<Md text="10 000 rows, only the visible ones are drawn. Click a cell and hold an arrow." />}>
            {rows => <BasicTable rows={rows} />}
        </PeopleScene>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await largeAct(ctx.canvasElement);
  }
}`,...(J=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Q,X,ee;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['kb:keyboard-from-outside'],
  name: '8 · A button moves the active cell',
  parameters: {
    ...sceneCodeOf(goToCellSource),
    summary: '\`ref.focusCell(rowId, columnId)\` makes a cell the focused one, scrolls to it and focuses it.'
  },
  render: () => <FromOutside />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await until(() => c.querySelector('[role="grid"] [data-cell]'), 'drawn');
    await userEvent.click(within(c).getByRole('button', {
      name: /^Go to/
    }));
    await until(() => activeEl(c)?.dataset.rowId === 'p25', 'the cell of row 25 is the active one');
    check(activeEl(c)?.dataset.columnId === 'country', 'in the column the button named');
  }
}`,...(ee=(X=k.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ae,te,ne;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['kb:keyboard-leave-and-come-back'],
  name: '9 · Tab leaves the table and comes back',
  parameters: {
    summary: 'The focus leaves: no outline, the range stays pale.'
  },
  render: () => <Leave />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await leaveAct(ctx.canvasElement);
  }
}`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,oe,se;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['kb:keyboard-escape'],
  name: '10 · Esc drops the range',
  parameters: {
    summary: 'Esc drops the range, then the active cell.'
  },
  render: () => <PeopleScene hint={<Md text="Select a range and press **Esc**: the range goes, the active cell stays. **Esc** again: no active cell; Tab brings you back to the first cell." />}>
            {rows => <BasicTable rows={rows} />}
        </PeopleScene>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await escapeAct(ctx.canvasElement);
  }
}`,...(se=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var le,ce,ie;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['kb:keyboard-controls-in-cells'],
  name: '11 · Space ticks a checkbox in a cell',
  parameters: {
    ...sceneCodeOf(checkboxCellsSource),
    summary: 'A control in a cell is no Tab stop: the active cell reaches it, Space and Enter press it.'
  },
  render: () => <PeopleScene hint={<Md text="The row checkbox is no Tab stop: click a Name cell, press **←** to the checkbox cell and **Space** — the row is ticked; **Enter** unticks it. Tab goes on to the next cell, not to a checkbox." />}>
            {rows => <CheckboxCellsTable rows={rows} />}
        </PeopleScene>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await controlsAct(ctx.canvasElement);
  }
}`,...(ie=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var he,de,ue;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
  tags: ['kb:keyboard-native-table'],
  name: '12 · Tab goes from checkbox to checkbox',
  parameters: {
    summary: 'Without the cell selection features the table is a native one: Tab goes from control to control.',
    ...sceneCodeOf(plainSource)
  },
  render: () => <PeopleScene hint={<Md text="\`cellSelectionFeature\` is not in the list: a plain table. Click a cell — no outline. Tab goes from one row checkbox to the next, like any checkboxes on a page." />}>
            {rows => <PlainTable rows={rows} />}
        </PeopleScene>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nativeAct(ctx.canvasElement);
  }
}`,...(ue=(de=C.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,be,pe;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  tags: ['kb:keyboard-many-ranges'],
  name: '13 · Several ranges',
  parameters: {
    ...sceneCodeWith(source, 'ManyRanges'),
    summary: '\`enableMultiCellRangeSelection\`: ⌘/Ctrl+click adds a cell, on a selected one it takes it out; ⌘/Ctrl+drag adds a block; Shift grows the active (last) block only; an arrow without Shift leaves one cell. The state is v9’s \`cellSelection\`: a list of ranges, the last one active. Off by default: the table selects one block.'
  },
  args: {
    enableMultiCellRangeSelection: true
  },
  argTypes: {
    enableMultiCellRangeSelection: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <PeopleScene hint={<Md text="Try: **⌘/Ctrl+click** another cell, **⌘/Ctrl+drag** a block, then **Shift+arrow**." />}>
                {rows => <BasicTable rows={rows} {...args} />}
            </PeopleScene>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await manyRangesAct(ctx);
  }
}`,...(pe=(be=T.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var ye,fe,ge;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  tags: ['kb:keyboard-walk-selection'],
  name: '14 · Tab and Enter in a selection',
  parameters: {
    ...sceneCodeWith(source, 'WalkTheSelection'),
    summary: 'With more than one cell selected, Tab and Shift+Tab walk the cells of the selection along the rows of a block, Enter and Shift+Enter down its columns; at the end of a block the next block comes, and after the last one the first. The selection stays and only the active cell moves (Esc leaves). With one cell selected they are the usual keys.'
  },
  args: {
    enableMultiCellRangeSelection: true
  },
  argTypes: {
    enableMultiCellRangeSelection: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <PeopleScene hint={<Md text="Try: select a block (**Shift+click**), then **Tab** and **Enter**; add a block with **⌘/Ctrl+click**." />}>
            {rows => <BasicTable rows={rows} {...args} />}
        </PeopleScene>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await walkAct(ctx.canvasElement);
  }
}`,...(ge=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};const ha=["Arrows","TabKeys","Pages","Range","LargeData","FromOutsideScene","LeaveAndComeBack","Escape","ControlsInCells","NativeTable","ManyRanges","WalkTheSelection"];export{p as Arrows,v as ControlsInCells,x as Escape,k as FromOutsideScene,w as LargeData,S as LeaveAndComeBack,T as ManyRanges,C as NativeTable,f as Pages,g as Range,y as TabKeys,E as WalkTheSelection,ha as __namedExportsOrder,ia as default};
