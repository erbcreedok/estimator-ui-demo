import{t as d,l as o,q as m,u as l,y as S,h,P as w,V as i,w as X,j as t,Y as ee,b$ as ne,a7 as ae,c1 as te,_ as oe,c4 as re,c5 as le,$ as se,b8 as ie,a0 as ue,bB as ce,bC as be,a1 as me,a3 as de,a4 as pe,a5 as ge,ba as Se,bb as he,bc as we,bi as ye,bE as Ce,b4 as Re,b5 as fe,a6 as Me,bj as Te,bf as Fe,bg as xe,Z as Ge,r as ke,C as ve,S as Ee,c as A,b as y,M as C,s as R,f as Oe}from"./products-CTiDOXRn.js";const _e=`import {
	TableCore,
	TableStatusBar,
	TableToolbar,
	UTILITY_COLUMN_ID,
	cellSelectionFeature,
	cellKeyboardFeature,
	columnGroupingFeature,
	columnOrderingFeature,
	columnPinningFeature,
	columnResizingFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	columnsControl,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	createUtilityColumn,
	defaultColumnMenu,
	groupRowsFeature,
	groupingControl,
	metaHelper,
	rowExpandingFeature,
	rowSelectionFeature,
	rowSortingFeature,
	sortingControl,
	tableFeatures,
	type CoreColumnMeta,
	type SortingColumnMeta,
	type SortingState,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { Employee } from '../../data/employees'
import { sceneSortFns } from '../../kit/sort-fns'

// Every interactive feature of the table has a switch, all on by default. The
// ones v9 has are v9's own options (\`enableSorting\`, \`enableMultiSort\`,
// \`enableGrouping\`, \`enableColumnResizing\`, \`enableColumnPinning\`,
// \`enableHiding\`, \`enableRowSelection\`, \`enableCellSelection\`); the rest are
// ours (\`enableMultiGroup\`, \`enableColumnReorder\`, \`enableRowNumbers\`,
// \`enableGroupCollapse\`, \`enableGroupSelect\`, \`enableGroupLevelCollapse\`).
const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	rowSelectionFeature,
	rowSortingFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	columnOrderingFeature,
	columnPinningFeature,
	columnVisibilityFeature,
	columnSizingFeature,
	columnResizingFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
	columnMeta: metaHelper<CoreColumnMeta & SortingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Employee>()
const columns = helper.columns([
	createUtilityColumn(helper),
	helper.accessor('name', { header: 'Name', size: 200 }),
	helper.accessor('team', { header: 'Team', size: 120 }),
	helper.accessor('role', { header: 'Role', size: 150 }),
	helper.accessor('level', { header: 'Level', size: 90 }),
	helper.accessor('country', { header: 'Country', size: 120 }),
	helper.accessor('start', { header: 'Start', size: 110 }),
])

const toolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar
		table={table}
		controls={[groupingControl(), sortingControl(), columnsControl()]}
	/>
)
const statusBarRegion: TableCoreUiProps['statusBar'] = (table) => (
	<TableStatusBar table={table} />
)

type Props = {
	rows: Employee[]
	/** The switches: all on by default, a screen turns off what it does not support. */
	enableSorting?: boolean
	enableMultiSort?: boolean
	enableGrouping?: boolean
	enableMultiGroup?: boolean
	enableColumnReorder?: boolean
	enableColumnResizing?: boolean
	enableColumnPinning?: boolean
	enableHiding?: boolean
	enableCellSelection?: boolean
	enableRowSelection?: boolean
	enableRowNumbers?: boolean
	enableGroupCollapse?: boolean
	enableGroupSelect?: boolean
	enableGroupLevelCollapse?: boolean
	readOnly?: boolean
	/** The header menu. Off: a header click sorts. */
	columnMenu?: boolean
	/** The toolbar and the status bar: regions, leave them out for none. */
	bars?: boolean
	initialSorting?: SortingState
}

export const SwitchesTable = ({
	rows,
	enableSorting = true,
	enableMultiSort = true,
	enableGrouping = true,
	enableMultiGroup = true,
	enableColumnReorder = true,
	enableColumnResizing = true,
	enableColumnPinning = true,
	enableHiding = true,
	enableCellSelection = true,
	enableRowSelection = true,
	enableRowNumbers = true,
	enableGroupCollapse = true,
	enableGroupSelect = true,
	enableGroupLevelCollapse = true,
	readOnly = false,
	columnMenu = true,
	bars = true,
	initialSorting = [],
}: Props) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(employee) => employee.id}
		enableSorting={enableSorting}
		enableMultiSort={enableMultiSort}
		enableGrouping={enableGrouping}
		enableMultiGroup={enableMultiGroup}
		enableColumnReorder={enableColumnReorder}
		enableColumnResizing={enableColumnResizing}
		enableColumnPinning={enableColumnPinning}
		enableHiding={enableHiding}
		enableCellSelection={enableCellSelection}
		enableRowSelection={enableRowSelection}
		enableRowNumbers={enableRowNumbers}
		enableGroupCollapse={enableGroupCollapse}
		enableGroupSelect={enableGroupSelect}
		enableGroupLevelCollapse={enableGroupLevelCollapse}
		readOnly={readOnly}
		autoResetExpanded={false}
		initialState={{
			sorting: initialSorting,
			columnPinning: { start: [UTILITY_COLUMN_ID, 'name'], end: [] },
			expanded: true,
		}}
		columnMenu={columnMenu ? defaultColumnMenu() : undefined}
		toolbar={bars ? toolbarRegion : undefined}
		statusBar={bars ? statusBarRegion : undefined}
	/>
)
`,ze=["enableSorting","enableMultiSort","enableGrouping","enableMultiGroup","enableColumnReorder","enableColumnResizing","enableColumnPinning","enableHiding","enableCellSelection","enableRowSelection","enableRowNumbers","enableGroupCollapse","enableGroupSelect","enableGroupLevelCollapse"],f=[...ze,"readOnly","columnMenu","bars"],j=Object.fromEntries(f.map(e=>[e,e!=="readOnly"])),H=Object.fromEntries(f.map(e=>[e,!1]));H.readOnly=!0;const M=Object.fromEntries(f.map(e=>[e,{control:{type:"boolean"}}])),p=(e,n)=>{var a;return((a=m(e,n))==null?void 0:a.querySelector("button"))??null},Pe=async e=>{await d(e);const n=e.querySelector("[role=grid], [role=table]");o(n.getAttribute("role")==="table","a native table, not a grid");const a=m(e,"name"),s=p(e,"name");s&&await l.click(s),o(a.getAttribute("aria-sort")==="none","a header click sorts nothing"),o(!document.querySelector("[role=menu]"),"no menu"),o(!n.querySelector("[data-grip]"),"no grips"),o(!n.querySelector("[data-resizer]"),"no resize edge"),o(!n.querySelector('[role="checkbox"]'),"no checkboxes"),await l.click(n.querySelector("[data-cell]")),o(!n.querySelector('[data-selection="active"]'),"a click makes no active cell")},Ae=async e=>{var a;await d(e);const n=l.setup();await n.keyboard("{Shift>}"),await n.click(p(e,"level")),await n.keyboard("{/Shift}"),await w(()=>o(i().getByRole("menu"),"the menu opens")),await l.click(i().getByRole("menuitem",{name:"Sort"})),await w(()=>o(i().getAllByRole("menuitemradio").length>0,"the submenu")),o(!i().queryByRole("menuitem",{name:/^Then by/}),'no "Then by"'),await l.click(i().getAllByRole("menuitemradio")[0]),await h(()=>{var s;return((s=m(e,"level"))==null?void 0:s.getAttribute("aria-sort"))==="ascending"},"Level is sorted"),o(((a=m(e,"team"))==null?void 0:a.getAttribute("aria-sort"))==="none","Team is not"),o(X(e).queryAllByRole("menu").length===0,"no stray menu")},je=async e=>{const n=e.canvasElement;await S(e,{enableSorting:!0}),await d(n),await l.click(p(n,"name")),await h(()=>{var a;return((a=m(n,"name"))==null?void 0:a.getAttribute("aria-sort"))==="ascending"},"enableSorting on: a header click sorts"),await S(e,{enableRowSelection:!0,readOnly:!1}),await h(()=>n.querySelector('[role="checkbox"]'),"enableRowSelection on: checkboxes"),await S(e,{columnMenu:!0}),await d(n),await l.click(p(n,"team")),await w(()=>o(i().getByRole("menu"),"columnMenu on: a menu")),await l.keyboard("{Escape}")},He=ue({cellSelectionFeature:fe,cellKeyboardFeature:Re,rowSelectionFeature:Ce,rowSortingFeature:ye,columnGroupingFeature:we,rowExpandingFeature:he,groupRowsFeature:Se,columnOrderingFeature:ge,columnPinningFeature:pe,columnVisibilityFeature:de,columnSizingFeature:me,columnResizingFeature:be,groupedRowModel:xe(),expandedRowModel:Fe(),sortedRowModel:Te(),sortFns:ce,columnMeta:Me()}),r=Ge(),Ie=r.columns([ie(r),r.accessor("name",{header:"Name",size:200}),r.accessor("team",{header:"Team",size:120}),r.accessor("role",{header:"Role",size:150}),r.accessor("level",{header:"Level",size:90}),r.accessor("country",{header:"Country",size:120}),r.accessor("start",{header:"Start",size:110})]),Be=e=>t.jsx(oe,{table:e,controls:[re(),le(),se()]}),Le=e=>t.jsx(te,{table:e}),Ue=({rows:e,enableSorting:n=!0,enableMultiSort:a=!0,enableGrouping:s=!0,enableMultiGroup:I=!0,enableColumnReorder:B=!0,enableColumnResizing:L=!0,enableColumnPinning:U=!0,enableHiding:W=!0,enableCellSelection:q=!0,enableRowSelection:D=!0,enableRowNumbers:N=!0,enableGroupCollapse:Y=!0,enableGroupSelect:V=!0,enableGroupLevelCollapse:K=!0,readOnly:$=!1,columnMenu:Z=!0,bars:F=!0,initialSorting:J=[]})=>t.jsx(ee,{features:He,data:e,columns:Ie,getRowId:Q=>Q.id,enableSorting:n,enableMultiSort:a,enableGrouping:s,enableMultiGroup:I,enableColumnReorder:B,enableColumnResizing:L,enableColumnPinning:U,enableHiding:W,enableCellSelection:q,enableRowSelection:D,enableRowNumbers:N,enableGroupCollapse:Y,enableGroupSelect:V,enableGroupLevelCollapse:K,readOnly:$,autoResetExpanded:!1,initialState:{sorting:J,columnPinning:{start:[ne,"name"],end:[]},expanded:!0},columnMenu:Z?ae():void 0,toolbar:F?Be:void 0,statusBar:F?Le:void 0}),We=12,T=({hint:e,...n})=>{const a=ke.useMemo(()=>ve(We),[]);return t.jsx(Ee,{hint:e,children:t.jsx(Ue,{rows:a,...n})})},[g]=Object.values([_e]),qe={title:"Tables/Table Core/Features/Drafts/Feature switches",id:"tables-table-core-features-feature-switches",...Oe(g)},u={tags:["kb:switches-dumb"],name:"1 · Dumb table",parameters:{...R(g,"Dumb"),summary:"All switches off: the table only shows rows."},args:H,argTypes:M,render:e=>t.jsx(y,{args:e,children:t.jsx(T,{...e,hint:t.jsx(C,{text:"Every switch off: click a header — nothing sorts; no grips, no resize edge, no checkboxes; clicking a cell makes no active cell."})})}),play:async e=>{A(e)||(await Pe(e.canvasElement),await je(e))}},c={tags:["kb:switches-one-sort"],name:"2 · One sort at a time",parameters:{...R(g,"OneSort"),summary:"`enableMultiSort` off: a new sort replaces the previous one."},args:{...j,enableMultiSort:!1},argTypes:M,render:e=>t.jsx(y,{args:e,children:t.jsx(T,{...e,initialSorting:[{id:"team",desc:!1}],hint:t.jsx(C,{text:"`enableMultiSort={false}`. Sorted by Team. Open **Level** → **Sort ›**: no *Then by*, a new sort replaces Team. Shift+click opens the menu like a plain click."})})}),play:async e=>{A(e)||await Ae(e.canvasElement)}},b={tags:["kb:switches-playground"],name:"Playground",parameters:R(g,"Playground"),args:j,argTypes:M,render:e=>t.jsx(y,{args:e,children:t.jsx(T,{...e,hint:t.jsx(C,{text:"Everything on. Turn switches off below and watch the table."})})})};var x,G,k;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['kb:switches-dumb'],
  name: '1 · Dumb table',
  parameters: {
    ...sceneCodeWith(source, 'Dumb'),
    summary: 'All switches off: the table only shows rows.'
  },
  args: DUMB_ARGS,
  argTypes: SWITCH_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Every switch off: click a header — nothing sorts; no grips, no resize edge, no checkboxes; clicking a cell makes no active cell." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await dumbAct(ctx.canvasElement);
    await switchControlsAct(ctx);
  }
}`,...(k=(G=u.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var v,E,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['kb:switches-one-sort'],
  name: '2 · One sort at a time',
  parameters: {
    ...sceneCodeWith(source, 'OneSort'),
    summary: '\`enableMultiSort\` off: a new sort replaces the previous one.'
  },
  args: {
    ...SWITCH_ARGS,
    enableMultiSort: false
  },
  argTypes: SWITCH_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} initialSorting={[{
      id: 'team',
      desc: false
    }]} hint={<Md text="\`enableMultiSort={false}\`. Sorted by Team. Open **Level** → **Sort ›**: no *Then by*, a new sort replaces Team. Shift+click opens the menu like a plain click." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await oneSortAct(ctx.canvasElement);
  }
}`,...(O=(E=c.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var _,z,P;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['kb:switches-playground'],
  name: 'Playground',
  parameters: sceneCodeWith(source, 'Playground'),
  args: SWITCH_ARGS,
  argTypes: SWITCH_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Everything on. Turn switches off below and watch the table." />} />
        </Remount>
}`,...(P=(z=b.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const De=["Dumb","OneSort","Playground"],Ye=Object.freeze(Object.defineProperty({__proto__:null,Dumb:u,OneSort:c,Playground:b,__namedExportsOrder:De,default:qe},Symbol.toStringTag,{value:"Module"}));export{Ye as S};
