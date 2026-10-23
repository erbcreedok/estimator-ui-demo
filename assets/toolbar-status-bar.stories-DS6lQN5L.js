import{t as c,l as o,w as k,o as _,u as P,h as l,m as G,y as M,X as xe,bW as q,P as fe,j as t,Y as we,c1 as Se,cD as Re,_ as Te,cE as Ce,c4 as Be,c5 as Ae,$ as ve,a0 as Ee,bB as je,a1 as ke,a3 as Pe,a5 as _e,ba as Ge,bb as Fe,bc as Me,bi as qe,a6 as ze,bj as Oe,bf as Ne,bg as We,Z as He,r as le,S as ie,c as u,g as Ye,b as p,M as d,s as h,f as Ie}from"./products-CTiDOXRn.js";import{m as ce}from"./rows-l3LcChQt.js";const Ve=`import { ToolbarButton } from '@pnl-simulation/table-core/primitives'
import {
	TableCore,
	TableStatusBar,
	TableToolbar,
	columnGroupingFeature,
	columnOrderingFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	columnsControl,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	defaultStatusChips,
	groupRowsFeature,
	groupingControl,
	metaHelper,
	rowExpandingFeature,
	rowSortingFeature,
	sortingControl,
	tableFeatures,
	type CoreColumnMeta,
	type GroupingState,
	type SortingColumnMeta,
	type SortingState,
	type TableCoreUiProps,
	type ToolbarControl,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'
import { sceneSortFns } from '../../kit/sort-fns'

// The toolbar and the status bar are ours: simple components the screen places
// (\`toolbar\`, \`statusBar\`). The buttons open panels that call v9's own methods
// of the table and its columns; the chips read v9's state (\`sorting\`, \`grouping\`).
const features = tableFeatures({
	rowSortingFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	columnOrderingFeature,
	columnVisibilityFeature,
	columnSizingFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
	columnMeta: metaHelper<CoreColumnMeta & SortingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, FeatureRow>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name', size: 190 }),
	helper.accessor('team', { header: 'Team', size: 130 }),
	helper.accessor('role', { header: 'Role', size: 160 }),
	helper.accessor('level', { header: 'Level', size: 100 }),
	helper.accessor('country', { header: 'Country', size: 130 }),
	helper.accessor('rate', { header: 'Rate', size: 90 }),
])

/** A control of the screen's own: the popover content is the screen's. */
const exportControl: ToolbarControl = {
	id: 'export',
	label: 'Export',
	icon: <span aria-hidden>⤓</span>,
	renderPanel: ({ close }) => (
		<div role="group" data-panel="export" style={{ padding: 12 }}>
			<button type="button" onClick={close}>
				Export CSV
			</button>
		</div>
	),
}

type Props = {
	rows: FeatureRow[]
	/** Off: no \`toolbar\` region, nothing above the table. */
	toolbar?: boolean
	/** The toolbar's buttons, in the order they are written below. */
	groupButton?: boolean
	sortButton?: boolean
	columnsButton?: boolean
	/** The screen's own button. */
	exportButton?: boolean
	/** Content before and after the toolbar's buttons. */
	slots?: boolean
	/** Shown after the chips; the bar is then always visible. */
	adornment?: boolean
	initialSorting?: SortingState
	initialGrouping?: GroupingState
}

export const BarsTable = ({
	rows,
	toolbar = true,
	groupButton = true,
	sortButton = true,
	columnsButton = true,
	exportButton = false,
	slots = false,
	adornment = false,
	initialSorting = [],
	initialGrouping = [],
}: Props) => {
	const toolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
		<TableToolbar
			table={table}
			controls={[
				groupButton && groupingControl(),
				sortButton && sortingControl(),
				columnsButton && columnsControl(),
				exportButton && exportControl,
			].filter((control) => control !== false)}
			start={slots ? <b style={{ fontSize: 14 }}>People</b> : undefined}
			end={slots ? <ToolbarButton>Presets</ToolbarButton> : undefined}
		/>
	)

	const statusBarRegion: TableCoreUiProps['statusBar'] = (table) => (
		<TableStatusBar
			table={table}
			chips={defaultStatusChips()}
			adornment={
				adornment ? (
					<span style={{ fontSize: 12 }}>{rows.length} people</span>
				) : undefined
			}
		/>
	)

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(row) => row.id}
			autoResetExpanded={false}
			initialState={{
				sorting: initialSorting,
				grouping: initialGrouping,
				expanded: true,
			}}
			toolbar={toolbar ? toolbarRegion : undefined}
			statusBar={statusBarRegion}
		/>
	)
}
`,x=e=>k(e.querySelector("[role=toolbar]")),f=(e,a)=>e.querySelector(`[data-chip="${a}"]`),Ze=async e=>{await c(e);const a=x(e).getAllByRole("button").map(r=>{var s;return(s=r.textContent)==null?void 0:s.trim()}).join();o(a==="Group,Sort,Columns",`buttons: ${a}`);const n=k(await _(e,"Sort"));await P.click(n.getByRole("button",{name:"Sort by Team A–Z +"})),await l(()=>document.querySelector('[data-sort-item="team"]'),"Team on top of the panel"),await l(()=>{var r;return((r=f(e,"sort"))==null?void 0:r.textContent)==="Team"},"the chip Team"),await G()},$e=async e=>{var n,r,s;await c(e);const a=Array.from(e.querySelectorAll("[data-chip]")).map(w=>w.dataset.chip);o(a.join()==="sort,group",`chip order: ${a}`),o(((n=f(e,"sort"))==null?void 0:n.textContent)==="2 Sorts","2 Sorts"),o(((r=f(e,"group"))==null?void 0:r.textContent)==="Role","Role"),await P.click(f(e,"group")),await l(()=>document.querySelector('[data-panel="grouping"]'),"the panel is open"),o(((s=f(e,"group"))==null?void 0:s.getAttribute("aria-expanded"))==="true","the chip is marked open"),await G()},Ue=async e=>{await c(e),o(e.querySelector("[role=status]"),"the bar is shown"),await P.click(e.querySelector("[data-clear-all]")),await l(()=>!e.querySelector("[role=status]"),"the bar is gone"),o(!e.querySelector("[data-lane-id]"),"grouping is cleared too")},De=async e=>{await c(e);const a=x(e);o(!a.queryByRole("button",{name:"Group"}),"no Group"),o(a.getByRole("button",{name:"Presets"}),"the end slot"),o(a.getByText("People"),"the start slot"),o(e.querySelector("[role=status]"),"the adornment keeps the bar"),await _(e,"Export"),await P.click(k(document.body).getByRole("button",{name:"Export CSV"})),await l(()=>!document.querySelector('[data-panel="export"]'),"the panel closed")},Le=async e=>{await c(e),await _(e,"Sort");const a=k(document.body).getByRole("textbox",{name:"Search columns to sort by"}),n=k(a.closest("[data-panel]"));q.change(a,{target:{value:"cou"}}),await fe(()=>{o(n.queryByRole("button",{name:"Sort by Country A–Z +"}),"Country listed"),o(!n.queryByRole("button",{name:"Sort by Team A–Z +"}),"Team filtered out")}),q.change(a,{target:{value:"zzz"}}),await l(()=>n.queryByText("No options"),"No options"),await G()},Xe=async e=>{await c(e),o(!e.querySelector("[role=toolbar]"),"no toolbar"),o(f(e,"sort"),"the chip is still there")},ue=async e=>{const a=e.canvasElement;await M(e,{toolbar:!0,sortButton:!1,exportButton:!0,slots:!0,adornment:!0}),await c(a),await l(()=>x(a).queryByText("People"),"slots: the start slot"),o(!x(a).queryByRole("button",{name:"Sort"}),"sortButton off"),o(x(a).getByRole("button",{name:"Export"}),"exportButton on"),o(x(a).getByRole("button",{name:"Presets"}),"slots: the end"),o(a.querySelector("[role=status]"),"adornment: the bar stays"),await M(e,{sortButton:!0,exportButton:!1,slots:!1,adornment:!1}),await l(()=>{var r;const n=a.querySelector("[role=status]");return n?!((r=n.textContent)!=null&&r.includes("people")):!0},"adornment off: its text leaves the bar, and an empty bar goes"),await l(()=>a.querySelector("[data-chip]")||!a.querySelector("[role=status]"),"adornment off: the bar is its chips, or gone")},Je=async e=>{await c(e);const a=xe(e);o(a.scrollHeight>a.clientHeight,"the rows are taller than the box");const n=e.querySelector("[role=toolbar]"),r=n.getBoundingClientRect().top,s=Array.from(e.querySelectorAll("p")).pop(),w=s.getBoundingClientRect().top;a.scrollTop=300,a.dispatchEvent(new Event("scroll")),await l(()=>a.scrollTop>0,"the table scrolled inside its box"),o(n.getBoundingClientRect().top===r,"the toolbar did not move"),o(s.getBoundingClientRect().top===w,"the page below did not move")},Ke=Ee({rowSortingFeature:qe,columnGroupingFeature:Me,rowExpandingFeature:Fe,groupRowsFeature:Ge,columnOrderingFeature:_e,columnVisibilityFeature:Pe,columnSizingFeature:ke,groupedRowModel:We(),expandedRowModel:Ne(),sortedRowModel:Oe(),sortFns:je,columnMeta:ze()}),b=He(),Qe=b.columns([b.accessor("name",{header:"Name",size:190}),b.accessor("team",{header:"Team",size:130}),b.accessor("role",{header:"Role",size:160}),b.accessor("level",{header:"Level",size:100}),b.accessor("country",{header:"Country",size:130}),b.accessor("rate",{header:"Rate",size:90})]),et={id:"export",label:"Export",icon:t.jsx("span",{"aria-hidden":!0,children:"⤓"}),renderPanel:({close:e})=>t.jsx("div",{role:"group","data-panel":"export",style:{padding:12},children:t.jsx("button",{type:"button",onClick:e,children:"Export CSV"})})},pe=({rows:e,toolbar:a=!0,groupButton:n=!0,sortButton:r=!0,columnsButton:s=!0,exportButton:w=!1,slots:F=!1,adornment:de=!1,initialSorting:he=[],initialGrouping:me=[]})=>{const ge=S=>t.jsx(Te,{table:S,controls:[n&&Be(),r&&Ae(),s&&ve(),w&&et].filter(ye=>ye!==!1),start:F?t.jsx("b",{style:{fontSize:14},children:"People"}):void 0,end:F?t.jsx(Ce,{children:"Presets"}):void 0}),be=S=>t.jsx(Se,{table:S,chips:Re(),adornment:de?t.jsxs("span",{style:{fontSize:12},children:[e.length," people"]}):void 0});return t.jsx(we,{features:Ke,data:e,columns:Qe,getRowId:S=>S.id,autoResetExpanded:!1,initialState:{sorting:he,grouping:me,expanded:!0},toolbar:a?ge:void 0,statusBar:be})},tt=10,y=({hint:e,...a})=>{const n=le.useMemo(()=>ce(tt),[]);return t.jsx(ie,{hint:e,children:t.jsx(pe,{rows:n,...a})})},at=40,ot=360,nt=({hint:e,...a})=>{const n=le.useMemo(()=>ce(at),[]);return t.jsx(ie,{hint:e,children:t.jsxs("div",{style:{fontSize:14,color:"#303240"},children:[t.jsx("h3",{style:{margin:"0 0 8px"},children:"Team roster"}),t.jsx("p",{style:{margin:"0 0 12px",color:"#6C6F80"},children:"The table takes the box it is given and scrolls inside it."}),t.jsx("div",{style:{height:ot,border:"1px solid #E1E3EB",borderRadius:6},children:t.jsx(pe,{rows:n,...a})}),t.jsx("p",{style:{margin:"12px 0 0",color:"#6C6F80"},children:"Content below the table stays in the normal page flow."})]})})},m={toolbar:!0,groupButton:!0,sortButton:!0,columnsButton:!0,exportButton:!1,slots:!1,adornment:!1},g={toolbar:{control:{type:"boolean"}},groupButton:{control:{type:"boolean"}},sortButton:{control:{type:"boolean"}},columnsButton:{control:{type:"boolean"}},exportButton:{control:{type:"boolean"}},slots:{control:{type:"boolean"}},adornment:{control:{type:"boolean"}}},[i]=Object.values([Ve]),rt={title:"Tables/Table Core/Features/Drafts/Toolbar & Status bar",id:"tables-table-core-features-toolbar-status-bar",...Ie(i)},R={tags:["kb:bars-buttons"],name:"1 · Toolbar buttons",parameters:{...h(i,"Buttons"),summary:"The buttons open their panels; Esc closes them."},args:m,argTypes:g,render:e=>t.jsx(p,{args:e,children:t.jsx(y,{...e,hint:t.jsx(d,{text:"Press **Sort** and pick **Team A–Z +**: the panel stays open with Team on top, and a chip appears below the table. **Esc** or a click outside closes the panel."})})}),play:async e=>{u(e)||(await Ze(e.canvasElement),await Ye(e),await ue(e))}},T={tags:["kb:bars-chips"],name:"2 · Chips",parameters:{...h(i,"Chips"),summary:"One chip per feature below the table; a chip opens the same panel."},args:m,argTypes:g,render:e=>t.jsx(p,{args:e,children:t.jsx(y,{...e,initialSorting:[{id:"team",desc:!1},{id:"level",desc:!0}],initialGrouping:["role"],hint:t.jsx(d,{text:"Two sorts show as one chip *2 Sorts*, grouping by Role as *Role*. Click a chip: the same panel as the toolbar button opens, and the chip turns dark while it is open."})})}),play:async e=>{u(e)||await $e(e.canvasElement)}},C={tags:["kb:bars-clear-all"],name:"3 · Clear all",parameters:{...h(i,"ClearAll"),summary:"Clear all removes the user’s sorts and groupings; the bar goes."},args:m,argTypes:g,render:e=>t.jsx(p,{args:e,children:t.jsx(y,{...e,initialSorting:[{id:"country",desc:!1}],initialGrouping:["team"],hint:t.jsx(d,{text:"Hover the status bar: **Clear all** appears. Press it: sorting and grouping are gone, and so is the bar."})})}),play:async e=>{u(e)||await Ue(e.canvasElement)}},B={tags:["kb:bars-configured"],name:"4 · Your own controls",parameters:{...h(i,"Configured"),summary:"The screen picks the controls, adds its own and puts content around them."},args:{...m,groupButton:!1,columnsButton:!1,exportButton:!0,slots:!0,adornment:!0},argTypes:g,render:e=>t.jsx(p,{args:e,children:t.jsx(y,{...e,hint:t.jsx(d,{text:"The screen passes only **Sort** and its own **Export**, a title before them and **Presets** after. The status bar has an adornment, so it stays visible with nothing applied."})})}),play:async e=>{u(e)||await De(e.canvasElement)}},A={tags:["kb:bars-search"],name:"5 · Search in a panel",parameters:{...h(i,"Search"),summary:"The search of a panel narrows the columns to add."},args:m,argTypes:g,render:e=>t.jsx(p,{args:e,children:t.jsx(y,{...e,hint:t.jsx(d,{text:"Open **Sort** and type *cou*: only Country is left to add. Type something no column has: *No options*."})})}),play:async e=>{u(e)||await Le(e.canvasElement)}},v={tags:["kb:bars-no-toolbar"],name:"6 · Without a toolbar",parameters:{...h(i,"NoToolbar"),summary:"No `toolbar` region, no toolbar."},args:{...m,toolbar:!1},argTypes:g,render:e=>t.jsx(p,{args:e,children:t.jsx(y,{...e,initialSorting:[{id:"name",desc:!1}],hint:t.jsx(d,{text:"No `toolbar` region: nothing above the table. The status bar still shows the sort chip and its panel."})})}),play:async e=>{u(e)||await Xe(e.canvasElement)}},E={tags:["kb:bars-fixed-height"],name:"7 · Inside a page",parameters:{...h(i,"InsidePage"),summary:"The table takes the box it is given and scrolls inside it; the toolbar and the status bar stay on it, the page goes on below."},args:m,argTypes:g,render:e=>t.jsx(p,{args:e,children:t.jsx(nt,{...e,initialSorting:[{id:"name",desc:!1}],hint:t.jsx(d,{text:"The table stands in a box of 360 px with 40 rows. Scroll the rows: the toolbar and the status bar stay where they are, the page below does not move."})})}),play:async e=>{u(e)||await Je(e.canvasElement)}},j={tags:["kb:bars-playground"],name:"Playground",parameters:h(i,"Playground"),args:m,argTypes:g,render:e=>t.jsx(p,{args:e,children:t.jsx(y,{...e,initialSorting:[{id:"team",desc:!1}],initialGrouping:["role"],hint:t.jsx(d,{text:"Everything together: the toolbar’s buttons, the content around them, chips and panels."})})}),play:async e=>{u(e)||await ue(e)}};var z,O,N;R.parameters={...R.parameters,docs:{...(z=R.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['kb:bars-buttons'],
  name: '1 · Toolbar buttons',
  parameters: {
    ...sceneCodeWith(source, 'Buttons'),
    summary: 'The buttons open their panels; Esc closes them.'
  },
  args: BAR_ARGS,
  argTypes: BAR_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Press **Sort** and pick **Team A–Z +**: the panel stays open with Team on top, and a chip appears below the table. **Esc** or a click outside closes the panel." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await buttonsAct(ctx.canvasElement);
    await barControlAct(ctx);
    await barControlsAct(ctx);
  }
}`,...(N=(O=R.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var W,H,Y;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['kb:bars-chips'],
  name: '2 · Chips',
  parameters: {
    ...sceneCodeWith(source, 'Chips'),
    summary: 'One chip per feature below the table; a chip opens the same panel.'
  },
  args: BAR_ARGS,
  argTypes: BAR_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} initialSorting={[{
      id: 'team',
      desc: false
    }, {
      id: 'level',
      desc: true
    }]} initialGrouping={['role']} hint={<Md text="Two sorts show as one chip *2 Sorts*, grouping by Role as *Role*. Click a chip: the same panel as the toolbar button opens, and the chip turns dark while it is open." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await chipsAct(ctx.canvasElement);
  }
}`,...(Y=(H=T.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var I,V,Z;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['kb:bars-clear-all'],
  name: '3 · Clear all',
  parameters: {
    ...sceneCodeWith(source, 'ClearAll'),
    summary: 'Clear all removes the user’s sorts and groupings; the bar goes.'
  },
  args: BAR_ARGS,
  argTypes: BAR_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} initialSorting={[{
      id: 'country',
      desc: false
    }]} initialGrouping={['team']} hint={<Md text="Hover the status bar: **Clear all** appears. Press it: sorting and grouping are gone, and so is the bar." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await clearAllAct(ctx.canvasElement);
  }
}`,...(Z=(V=C.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var $,U,D;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['kb:bars-configured'],
  name: '4 · Your own controls',
  parameters: {
    ...sceneCodeWith(source, 'Configured'),
    summary: 'The screen picks the controls, adds its own and puts content around them.'
  },
  args: {
    ...BAR_ARGS,
    groupButton: false,
    columnsButton: false,
    exportButton: true,
    slots: true,
    adornment: true
  },
  argTypes: BAR_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="The screen passes only **Sort** and its own **Export**, a title before them and **Presets** after. The status bar has an adornment, so it stays visible with nothing applied." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await configuredAct(ctx.canvasElement);
  }
}`,...(D=(U=B.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var L,X,J;A.parameters={...A.parameters,docs:{...(L=A.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['kb:bars-search'],
  name: '5 · Search in a panel',
  parameters: {
    ...sceneCodeWith(source, 'Search'),
    summary: 'The search of a panel narrows the columns to add.'
  },
  args: BAR_ARGS,
  argTypes: BAR_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Open **Sort** and type *cou*: only Country is left to add. Type something no column has: *No options*." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await searchAct(ctx.canvasElement);
  }
}`,...(J=(X=A.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var K,Q,ee;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['kb:bars-no-toolbar'],
  name: '6 · Without a toolbar',
  parameters: {
    ...sceneCodeWith(source, 'NoToolbar'),
    summary: 'No \`toolbar\` region, no toolbar.'
  },
  args: {
    ...BAR_ARGS,
    toolbar: false
  },
  argTypes: BAR_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} initialSorting={[{
      id: 'name',
      desc: false
    }]} hint={<Md text="No \`toolbar\` region: nothing above the table. The status bar still shows the sort chip and its panel." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await noToolbarAct(ctx.canvasElement);
  }
}`,...(ee=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,ae,oe;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['kb:bars-fixed-height'],
  name: '7 · Inside a page',
  parameters: {
    ...sceneCodeWith(source, 'InsidePage'),
    summary: 'The table takes the box it is given and scrolls inside it; the toolbar and the status bar stay on it, the page goes on below.'
  },
  args: BAR_ARGS,
  argTypes: BAR_ARG_TYPES,
  render: args => <Remount args={args}>
            <PageScene {...args} initialSorting={[{
      id: 'name',
      desc: false
    }]} hint={<Md text="The table stands in a box of 360 px with 40 rows. Scroll the rows: the toolbar and the status bar stay where they are, the page below does not move." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await insidePageAct(ctx.canvasElement);
  }
}`,...(oe=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,re,se;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['kb:bars-playground'],
  name: 'Playground',
  parameters: sceneCodeWith(source, 'Playground'),
  args: BAR_ARGS,
  argTypes: BAR_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} initialSorting={[{
      id: 'team',
      desc: false
    }]} initialGrouping={['role']} hint={<Md text="Everything together: the toolbar’s buttons, the content around them, chips and panels." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await barControlsAct(ctx);
  }
}`,...(se=(re=j.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const st=["Buttons","Chips","ClearAll","Configured","Search","NoToolbar","InsidePage","Playground"],ct=Object.freeze(Object.defineProperty({__proto__:null,Buttons:R,Chips:T,ClearAll:C,Configured:B,InsidePage:E,NoToolbar:v,Playground:j,Search:A,__namedExportsOrder:st,default:rt},Symbol.toStringTag,{value:"Module"}));export{ct as S};
