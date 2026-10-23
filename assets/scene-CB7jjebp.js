import{j as o,bZ as Z,Y as J,bN as ee,b_ as d,bx as ne,b$ as oe,a7 as te,c0 as ae,b8 as re,c1 as se,c2 as le,c3 as ue,_ as L,c4 as O,c5 as F,c6 as ie,c7 as v,a0 as ce,bz as pe,bB as de,a2 as ge,bE as he,a4 as me,a5 as be,a3 as ye,a1 as fe,ba as Ce,bi as Se,bG as we,bb as Te,bc as Re,a6 as w,bj as Ge,bf as Le,bg as Oe,Z as Fe,c8 as ve,ab as T,c9 as xe,bO as Me,ca as ze,r as c,S as b,M as Ie}from"./products-CTiDOXRn.js";import{S as Ee,m as y}from"./rows-l3LcChQt.js";const ke=`import type { Ref, RefObject } from 'react'

import {
	TableCore,
	TableStatusBar,
	TableToolbar,
	UTILITY_COLUMN_ID,
	aggregationFn_sum,
	columnChainsFeature,
	columnGroupingFeature,
	columnOrderingFeature,
	columnPinningFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	createUtilityColumn,
	defaultColumnMenu,
	groupRowsFeature,
	groupingChip,
	groupingControl,
	metaHelper,
	rowAggregationFeature,
	rowExpandingFeature,
	rowSelectionFeature,
	rowSortingFeature,
	sortingChip,
	sortingControl,
	tableFeatures,
	withGroupingVariants,
	type ColumnChain,
	type ColumnDef,
	type ColumnPinningState,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type CoreColumnMeta,
	type GroupCellUiColumnMeta,
	type GroupLayout,
	type GroupingColumnMeta,
	type GroupingState,
	type OnChangeFn,
	type RowsMoveHandler,
	type RowSelectionState,
	type SortIconsColumnMeta,
	type SortingColumnMeta,
	type SortingState,
	type TableCoreHandle,
	type TableCoreUiProps,
	keepGrouped,
	showTotals,
	sortByOrder,
	sortGroupsBy,
} from '@pnl-simulation/table-core'

import { COLOUR_HEX, COLOURS } from '../../data/people'
import { STATUS, type FeatureRow } from '../../data/rows'
import type { KeepName, SortGroupsName, TotalsName } from '../../kit/totals'
import { sceneSortFns } from '../../kit/sort-fns'

import { groupCellOf, type CellLook } from './cell-looks'
import {
	ISSUES_ID,
	ISSUES_ORDER,
	ISSUE_LOOK,
	IssuesCell,
	IssuesToggle,
	issuesGroupOf,
	type IssuesGroup,
} from './issues'

// Grouping is v9's \`columnGroupingFeature\` (the state \`grouping\`, the grouped
// row model) with \`rowExpandingFeature\` (a group opens and folds) and, for the
// totals, \`rowAggregationFeature\`. \`groupRowsFeature\` is ours: how the
// groups are drawn, a lane or a header row, with an optional totals row. The
// selection (a group's checkbox) and the chains are the other features a grouped
// table meets in the Look scenes.
export const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	rowAggregationFeature,
	rowSortingFeature,
	groupRowsFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	columnOrderingFeature,
	columnPinningFeature,
	rowSelectionFeature,
	columnChainsFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
	aggregationFns: { sum: aggregationFn_sum },
	// The types of the meta of the steps that edit (Issues with the hold); the features are theirs.
	tableMeta: metaHelper<
		CellEditingTableMeta & { onExclude?: (rowId: string) => void }
	>(),
	columnMeta: metaHelper<
		CellEditingColumnMeta &
			CoreColumnMeta &
			SortingColumnMeta &
			SortIconsColumnMeta &
			GroupingColumnMeta &
			GroupCellUiColumnMeta
	>(),
})

export const helper = createColumnHelper<typeof features, FeatureRow>()

const letter = (value: unknown) => String(value).slice(0, 1)
const surname = (name: string) => name.split(' ').slice(-1)[0]
const quarterOf = (date: string) =>
	\`Q\${Math.ceil(Number(date.slice(5, 7)) / 3)} \${date.slice(0, 4)}\`
const amount = (pay: number) => {
	if (pay < 50) return '0–50'
	if (pay < 100) return '50–100'

	return pay < 500 ? '100–500' : '500+'
}

/** The columns of the scenes, by what a scene shows. */
/** The layout of the groups of a column (\`meta.groupLayout\`), by column id. */
type Layouts = Partial<
	Record<'team' | 'role' | 'level' | 'country', GroupLayout>
>

export type Columns = ColumnDef<typeof features, FeatureRow, unknown>[]

export const COLUMN_SETS: Record<
	'basic' | 'ways' | 'only' | 'issues' | 'location',
	(look: CellLook, layouts: Layouts) => Columns
> = {
	basic: (look, layouts) =>
		helper.columns([
			helper.accessor('name', { header: 'Name', size: 120 }),
			helper.accessor('team', {
				header: 'Team',
				size: 120,
				meta: {
					groupCell: groupCellOf('team', look),
					groupLayout: layouts.team,
				},
			}),
			helper.accessor('role', {
				header: 'Role',
				size: 110,
				meta: { groupLayout: layouts.role },
			}),
			helper.accessor('level', {
				header: 'Level',
				size: 90,
				meta: { groupLayout: layouts.level },
			}),
			helper.accessor('colour', {
				header: 'Colour',
				size: 90,
				meta: { groupCell: groupCellOf('colour', look) },
			}),
			helper.accessor('country', {
				header: 'Country',
				size: 100,
				meta: {
					groupCell: groupCellOf('country', look),
					groupLayout: layouts.country,
				},
			}),
			helper.accessor('rate', {
				header: 'Rate',
				size: 90,
				meta: { align: 'right' },
				aggregationFn: 'sum',
				aggregatedCell: ({ getValue }) => \`\${getValue()}\`,
			}),
		]),
	/** Every column groups its own way; Name and Rate only by their ways. */
	ways: () =>
		helper.columns([
			helper.accessor('name', {
				header: 'Person',
				id: 'person',
				size: 190,
				meta: {
					groupAsIs: false,
					groupings: [
						{
							id: 'letter',
							label: 'First letter',
							getValue: (r: FeatureRow) => letter(r.name),
						},
						{
							id: 'surname',
							label: 'Surname letter',
							getValue: (r: FeatureRow) => letter(surname(r.name)),
						},
					],
				},
			}),
			helper.accessor('team', { header: 'Team', size: 120 }),
			helper.accessor('level', {
				header: 'Level',
				size: 90,
				meta: {
					groupings: [
						{
							id: 'letter',
							label: 'First letter',
							getValue: (r: FeatureRow) => letter(r.level),
						},
					],
				},
			}),
			helper.accessor('start', {
				header: 'Start',
				size: 110,
				meta: {
					groupings: [
						{
							id: 'quarter',
							label: 'Quarter',
							getValue: (r: FeatureRow) => quarterOf(r.start),
						},
						{
							id: 'year',
							label: 'Year',
							getValue: (r: FeatureRow) => r.start.slice(0, 4),
						},
					],
				},
			}),
			helper.accessor('rate', {
				header: 'Rate',
				size: 90,
				meta: {
					align: 'right',
					groupAsIs: false,
					groupings: [
						{
							id: 'amount',
							label: 'Amount',
							getValue: (r: FeatureRow) => amount(r.pay),
						},
						{
							id: 'currency',
							label: 'Currency',
							getValue: (r: FeatureRow) => r.currency,
						},
					],
				},
			}),
			// The screen's own value to group by: Included / Needs attention.
			helper.accessor((row) => STATUS[row.state], {
				id: 'status',
				header: 'Status',
				size: 130,
				getGroupingValue: (row) =>
					row.state === 'ok' ? 'Included' : 'Needs attention',
			}),
		]),
	/** Columns the table never draws (\`columnVisibility: false\` in NOT_DRAWN, \`enableHiding: false\`): they only group. */
	only: () =>
		helper.columns([
			helper.accessor('name', { header: 'Name', size: 120 }),
			helper.accessor('team', { header: 'Team', size: 120 }),
			helper.accessor('role', { header: 'Role', size: 110 }),
			helper.accessor('level', { header: 'Level', size: 90 }),
			helper.accessor('country', {
				header: 'Country',
				size: 120,
				enableHiding: false,
			}),
			helper.accessor(
				(row) => (Number(row.id.slice(1)) % 2 ? 'Permanent' : 'Contract'),
				{
					id: 'contract',
					header: 'Contract',
					enableHiding: false,
				}
			),
		]),
	/** Issues as in the Resource Plan: the screen groups by it from its own button (\`enableGrouping: false\`); the table never draws it. */
	issues: () =>
		helper.columns([
			helper.accessor('name', { header: 'Name', size: 120 }),
			helper.accessor('team', { header: 'Team', size: 120 }),
			helper.accessor('role', { header: 'Role', size: 110 }),
			helper.accessor('level', { header: 'Level', size: 90 }),
			helper.accessor(issuesGroupOf, {
				id: ISSUES_ID,
				header: 'Issues',
				size: 150,
				sortFn: sortByOrder(ISSUES_ORDER),
				enableHiding: false,
				// The screen's own grouping: its button puts the column first, the user's panels do not touch it.
				enableGrouping: false,
				meta: {
					sort: { labels: { asc: 'Blockers first', desc: 'Included first' } },
					// The legacy look of the group: a right edge, a tooltip (its icon and name are the cell).
					groupCell: {
						accent: (group: IssuesGroup) => ISSUE_LOOK[group].edge,
						accentSide: 'right',
						tooltip: (group: IssuesGroup) => ISSUE_LOOK[group].tooltip,
					},
				},
				cell: ({ getValue }) => <IssuesCell group={getValue()} />,
			}),
		]),
	/** A chain of places: Country, Tier and City go as one. */
	location: () =>
		helper.columns([
			helper.accessor('name', { header: 'Name', size: 120 }),
			helper.accessor('team', { header: 'Team', size: 120 }),
			helper.accessor('country', { header: 'Country', size: 120 }),
			helper.accessor('tier', { header: 'Tier', size: 90 }),
			helper.accessor('city', { header: 'City', size: 120 }),
		]),
}
export type ColumnSet = keyof typeof COLUMN_SETS

/** The columns of a set that start not drawn: v9's \`columnVisibility: false\`. */
const NOT_DRAWN: Partial<Record<ColumnSet, Record<string, false>>> = {
	only: { country: false, contract: false },
	issues: { [ISSUES_ID]: false },
}

const toolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar
		table={table}
		controls={[groupingControl(), sortingControl()]}
	/>
)
/** The toolbar with the screen's own Issues button before its controls. */
const issuesToolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar
		table={table}
		start={<IssuesToggle table={table} />}
		controls={[groupingControl(), sortingControl()]}
	/>
)
/** The toolbar of a column set: the plain one, or with the Issues button. */
const TOOLBARS: Record<ColumnSet, TableCoreUiProps['toolbar']> = {
	basic: toolbarRegion,
	ways: toolbarRegion,
	only: toolbarRegion,
	issues: issuesToolbarRegion,
	location: toolbarRegion,
}
const statusBarRegion: TableCoreUiProps['statusBar'] = (table) => (
	<TableStatusBar table={table} chips={[sortingChip(), groupingChip()]} />
)

const KEEP_RULES = {
	none: keepGrouped.none,
	level: keepGrouped.only('level'),
	all: keepGrouped.all,
}

/** What a step table lays over the shared one: the features it adds, its columns, toolbar, meta and handlers. */
export type GroupTableStep = {
	features: typeof features
	columns?: Columns
	toolbar?: TableCoreUiProps['toolbar']
	meta?: Record<string, unknown>
	onRowsMove?: RowsMoveHandler
	/** The handle of the step's table: typed by the features of the step. */
	tableRef?: RefObject<unknown>
}

export type GroupTableProps = {
	rows: FeatureRow[]
	set?: ColumnSet
	/** The cell look of the grouped columns (\`meta.groupCell\`). */
	look?: CellLook
	/** How the groups of Team, Level, Role, Country are drawn: 'table' is the table's \`groupLayout\`. */
	teamLayout?: GroupLayout | 'table'
	levelLayout?: GroupLayout | 'table'
	roleLayout?: GroupLayout | 'table'
	countryLayout?: GroupLayout | 'table'
	/** The grouping. Left out: the table keeps its own. */
	grouping?: GroupingState
	onGroupingChange?: OnChangeFn<GroupingState>
	initialGrouping?: GroupingState
	initialSorting?: SortingState
	initialPinning?: ColumnPinningState
	groupLayout?: GroupLayout
	groupTotals?: TotalsName
	/** Which columns stay in the table while they are lanes (\`keepWhenGrouped\`). */
	keepWhenGrouped?: KeepName
	/** The order of the groups when their lane has no sort (\`sortGroups\`). */
	sortGroups?: SortGroupsName
	enableMultiGroup?: boolean
	enableGroupCollapse?: boolean
	enableGroupSelect?: boolean
	enableGroupLevelCollapse?: boolean
	/** How the rows of data stand in under their groups. */
	groupIndent?: 'depth' | 'none'
	/** What an open group repeats of the header under its band. */
	groupHeader?: 'none' | 'labels' | 'full'
	/** The table's own header. */
	header?: 'global' | 'none'
	/** Columns that go as one. */
	chains?: ColumnChain[]
	/** The chains start open. */
	chainsOpen?: boolean
	/** The rows selected from the start. */
	initialSelection?: RowSelectionState
	/** The utility column (numbers and checkboxes), frozen first. */
	utility?: boolean
	columnMenu?: boolean
	toolbar?: boolean
	statusBar?: boolean
	/** A step table lays its own features, columns and handlers over this one. */
	step?: GroupTableStep
}

const layoutOf = (layout: GroupLayout | 'table'): GroupLayout | undefined =>
	layout === 'table' ? undefined : layout

export const GroupTable = ({
	rows,
	set = 'basic',
	look = 'standard',
	teamLayout = 'table',
	levelLayout = 'table',
	roleLayout = 'table',
	countryLayout = 'table',
	groupLayout = 'lanes',
	groupTotals = 'none',
	keepWhenGrouped = 'none',
	sortGroups = 'firstAppearance',
	groupIndent = 'none',
	groupHeader = 'none',
	header = 'global',
	enableMultiGroup = true,
	enableGroupCollapse = true,
	enableGroupSelect = true,
	enableGroupLevelCollapse = true,
	grouping = undefined,
	onGroupingChange,
	initialGrouping = [],
	initialSorting = [],
	initialPinning = undefined,
	utility = false,
	chains = [],
	chainsOpen = false,
	initialSelection = {},
	columnMenu = false,
	toolbar = false,
	statusBar = false,
	step,
}: GroupTableProps) => (
	<TableCore
		// The step types its handle by its own features; the table is the same.
		ref={step?.tableRef as Ref<TableCoreHandle<typeof features, FeatureRow>>}
		features={step?.features ?? features}
		meta={step?.meta}
		onRowsMove={step?.onRowsMove}
		data={rows}
		columns={withGroupingVariants([
			...(utility ? [createUtilityColumn(helper)] : []),
			...COLUMN_SETS[set](look, {
				team: layoutOf(teamLayout),
				level: layoutOf(levelLayout),
				role: layoutOf(roleLayout),
				country: layoutOf(countryLayout),
			}),
			...(step?.columns ?? []),
		])}
		getRowId={(row) => row.id}
		initialState={{
			grouping: initialGrouping,
			sorting: initialSorting,
			expanded: true,
			columnVisibility: NOT_DRAWN[set],
			rowSelection: initialSelection,
			...(chainsOpen && { columnChainExpanded: { location: true } }),
			columnPinning: initialPinning ?? {
				start: utility ? [UTILITY_COLUMN_ID, 'name'] : [],
				end: [],
			},
		}}
		autoResetExpanded={false}
		columnMenu={columnMenu ? defaultColumnMenu() : undefined}
		toolbar={toolbar ? step?.toolbar ?? TOOLBARS[set] : undefined}
		statusBar={statusBar ? statusBarRegion : undefined}
		{...(grouping && { state: { grouping }, onGroupingChange })}
		groupLayout={groupLayout}
		groupTotals={showTotals[groupTotals]}
		keepWhenGrouped={KEEP_RULES[keepWhenGrouped]}
		sortGroups={sortGroupsBy[sortGroups]}
		groupIndent={groupIndent}
		groupHeader={groupHeader}
		header={header}
		enableMultiGroup={enableMultiGroup}
		enableGroupCollapse={enableGroupCollapse}
		enableGroupSelect={enableGroupSelect}
		enableGroupLevelCollapse={enableGroupLevelCollapse}
		chains={chains}
	/>
)

export { COLOUR_HEX, COLOURS }
`,Ye=["standard","left-edge","right-edge","tooltip","background","own-css","own-cell","wrap-content","actions-inside","whole-cell"],g=e=>Z[e],_e={Red:"Blockers: they stop the run scenario",Amber:"At risk: needs a look",Green:"On track"},R=({value:e,count:a})=>o.jsxs("div",{style:{display:"grid",gap:2},children:[o.jsx("b",{children:String(e)}),o.jsxs("small",{style:{opacity:.7},children:[a," people"]})]}),h=(e,a)=>{const s=t=>g(t)??"#008ACE";switch(a){case"left-edge":return{accent:s,accentSide:"left"};case"right-edge":return{accent:s,accentSide:"right"};case"tooltip":return{tooltip:t=>_e[String(t)]??`${e}: ${String(t)}`};case"background":return{style:t=>({background:`${g(t)??"#008ACE"}22`})};case"own-css":return{className:t=>`look-${String(t).toLowerCase()}`};case"own-cell":return{render:({value:t,count:l})=>o.jsx(R,{value:t,count:l})};case"wrap-content":return{render:({content:t})=>o.jsx("div",{style:{border:"1px solid #c9ced6",borderRadius:6,padding:"4px 8px"},children:t})};case"actions-inside":return{render:({content:t,value:l})=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t,o.jsx("button",{type:"button","aria-label":`Export ${String(l)}`,style:{marginLeft:"auto"},children:"Export"})]})};case"whole-cell":return{layout:"fill",render:({value:t,count:l})=>o.jsx("div",{style:{height:"100%",padding:12,background:`${g(t)??"#008ACE"}33`},children:o.jsx(R,{value:t,count:l})})};default:return}},Ue=ce({columnGroupingFeature:Re,rowExpandingFeature:Te,rowAggregationFeature:we,rowSortingFeature:Se,groupRowsFeature:Ce,columnSizingFeature:fe,columnVisibilityFeature:ye,columnOrderingFeature:be,columnPinningFeature:me,rowSelectionFeature:he,columnChainsFeature:ge,groupedRowModel:Oe(),expandedRowModel:Le(),sortedRowModel:Ge(),sortFns:de,aggregationFns:{sum:pe},tableMeta:w(),columnMeta:w()}),n=Fe(),m=e=>String(e).slice(0,1),Ne=e=>e.split(" ").slice(-1)[0],je=e=>`Q${Math.ceil(Number(e.slice(5,7))/3)} ${e.slice(0,4)}`,Ae=e=>e<50?"0–50":e<100?"50–100":e<500?"100–500":"500+",Pe={basic:(e,a)=>n.columns([n.accessor("name",{header:"Name",size:120}),n.accessor("team",{header:"Team",size:120,meta:{groupCell:h("team",e),groupLayout:a.team}}),n.accessor("role",{header:"Role",size:110,meta:{groupLayout:a.role}}),n.accessor("level",{header:"Level",size:90,meta:{groupLayout:a.level}}),n.accessor("colour",{header:"Colour",size:90,meta:{groupCell:h("colour",e)}}),n.accessor("country",{header:"Country",size:100,meta:{groupCell:h("country",e),groupLayout:a.country}}),n.accessor("rate",{header:"Rate",size:90,meta:{align:"right"},aggregationFn:"sum",aggregatedCell:({getValue:s})=>`${s()}`})]),ways:()=>n.columns([n.accessor("name",{header:"Person",id:"person",size:190,meta:{groupAsIs:!1,groupings:[{id:"letter",label:"First letter",getValue:e=>m(e.name)},{id:"surname",label:"Surname letter",getValue:e=>m(Ne(e.name))}]}}),n.accessor("team",{header:"Team",size:120}),n.accessor("level",{header:"Level",size:90,meta:{groupings:[{id:"letter",label:"First letter",getValue:e=>m(e.level)}]}}),n.accessor("start",{header:"Start",size:110,meta:{groupings:[{id:"quarter",label:"Quarter",getValue:e=>je(e.start)},{id:"year",label:"Year",getValue:e=>e.start.slice(0,4)}]}}),n.accessor("rate",{header:"Rate",size:90,meta:{align:"right",groupAsIs:!1,groupings:[{id:"amount",label:"Amount",getValue:e=>Ae(e.pay)},{id:"currency",label:"Currency",getValue:e=>e.currency}]}}),n.accessor(e=>Ee[e.state],{id:"status",header:"Status",size:130,getGroupingValue:e=>e.state==="ok"?"Included":"Needs attention"})]),only:()=>n.columns([n.accessor("name",{header:"Name",size:120}),n.accessor("team",{header:"Team",size:120}),n.accessor("role",{header:"Role",size:110}),n.accessor("level",{header:"Level",size:90}),n.accessor("country",{header:"Country",size:120,enableHiding:!1}),n.accessor(e=>Number(e.id.slice(1))%2?"Permanent":"Contract",{id:"contract",header:"Contract",enableHiding:!1})]),issues:()=>n.columns([n.accessor("name",{header:"Name",size:120}),n.accessor("team",{header:"Team",size:120}),n.accessor("role",{header:"Role",size:110}),n.accessor("level",{header:"Level",size:90}),n.accessor(ve,{id:v,header:"Issues",size:150,sortFn:Me(ze),enableHiding:!1,enableGrouping:!1,meta:{sort:{labels:{asc:"Blockers first",desc:"Included first"}},groupCell:{accent:e=>T[e].edge,accentSide:"right",tooltip:e=>T[e].tooltip}},cell:({getValue:e})=>o.jsx(xe,{group:e()})})]),location:()=>n.columns([n.accessor("name",{header:"Name",size:120}),n.accessor("team",{header:"Team",size:120}),n.accessor("country",{header:"Country",size:120}),n.accessor("tier",{header:"Tier",size:90}),n.accessor("city",{header:"City",size:120})])},Ve={only:{country:!1,contract:!1},issues:{[v]:!1}},u=e=>o.jsx(L,{table:e,controls:[O(),F()]}),He=e=>o.jsx(L,{table:e,start:o.jsx(ie,{table:e}),controls:[O(),F()]}),Be={basic:u,ways:u,only:u,issues:He,location:u},De=e=>o.jsx(se,{table:e,chips:[le(),ue()]}),We={none:d.none,level:d.only("level"),all:d.all},i=e=>e==="table"?void 0:e,f=({rows:e,set:a="basic",look:s="standard",teamLayout:t="table",levelLayout:l="table",roleLayout:p="table",countryLayout:x="table",groupLayout:M="lanes",groupTotals:z="none",keepWhenGrouped:I="none",sortGroups:E="firstAppearance",groupIndent:k="none",groupHeader:_="none",header:U="global",enableMultiGroup:N=!0,enableGroupCollapse:j=!0,enableGroupSelect:A=!0,enableGroupLevelCollapse:P=!0,grouping:C=void 0,onGroupingChange:V,initialGrouping:H=[],initialSorting:B=[],initialPinning:D=void 0,utility:S=!1,chains:W=[],chainsOpen:$=!1,initialSelection:K={},columnMenu:Y=!1,toolbar:q=!1,statusBar:Q=!1,step:r})=>o.jsx(J,{ref:r==null?void 0:r.tableRef,features:(r==null?void 0:r.features)??Ue,meta:r==null?void 0:r.meta,onRowsMove:r==null?void 0:r.onRowsMove,data:e,columns:ae([...S?[re(n)]:[],...Pe[a](s,{team:i(t),level:i(l),role:i(p),country:i(x)}),...(r==null?void 0:r.columns)??[]]),getRowId:X=>X.id,initialState:{grouping:H,sorting:B,expanded:!0,columnVisibility:Ve[a],rowSelection:K,...$&&{columnChainExpanded:{location:!0}},columnPinning:D??{start:S?[oe,"name"]:[],end:[]}},autoResetExpanded:!1,columnMenu:Y?te():void 0,toolbar:q?(r==null?void 0:r.toolbar)??Be[a]:void 0,statusBar:Q?De:void 0,...C&&{state:{grouping:C},onGroupingChange:V},groupLayout:M,groupTotals:ne[z],keepWhenGrouped:We[I],sortGroups:ee[E],groupIndent:k,groupHeader:_,header:U,enableMultiGroup:N,enableGroupCollapse:j,enableGroupSelect:A,enableGroupLevelCollapse:P,chains:W}),[qe]=Object.values([ke]),Qe=({hint:e,count:a=8,narrow:s=!1,width:t,...l})=>{const p=c.useMemo(()=>y(a),[a]);return o.jsx(b,{hint:e,width:t??(s?640:void 0),children:o.jsx("div",{style:{height:"100%"},children:o.jsx(f,{rows:p,...l})})})},G=["Platform","Payments","Mobile","Data"].flatMap((e,a)=>Array.from({length:[1,2,3,5][a]},()=>e)),Xe=({hint:e,...a})=>{const s=c.useMemo(()=>y(G.length).map((t,l)=>({...t,team:G[l]})),[]);return o.jsx(b,{hint:e,children:o.jsx("div",{style:{height:"100%"},children:o.jsx(f,{rows:s,...a})})})},Ze=()=>{const e=c.useMemo(()=>y(8),[]),[a,s]=c.useState([]);return o.jsxs(b,{hint:o.jsx(Ie,{text:"The screen owns `grouping`: its buttons set it, **Group by …** in a header menu does too, and both see the same state."}),children:[o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",height:36},children:[o.jsx("button",{type:"button",onClick:()=>s(["team"]),children:"By Team"}),o.jsx("button",{type:"button",onClick:()=>s(["team","level"]),children:"Team, then Level"}),o.jsx("button",{type:"button",onClick:()=>s([]),children:"No grouping"}),o.jsx("code",{"data-grouping-state":!0,children:JSON.stringify(a)})]}),o.jsx("div",{style:{height:"calc(100% - 36px)"},children:o.jsx(f,{rows:e,columnMenu:!0,grouping:a,onGroupingChange:s})})]})};export{Ye as C,f as G,Ze as O,Qe as S,ke as _,Xe as a,Ue as f,n as h,qe as s};
