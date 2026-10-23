import{cn as i,j as e,bZ as F,Y as O,a7 as k,c1 as z,c2 as _,_ as j,c5 as v,a0 as I,co as B,cp as E,bh as L,a3 as U,a1 as N,bi as P,a6 as H,bj as D,Z as V,bO as c,cq as A,r as l,S,M as G}from"./products-CTiDOXRn.js";import{P as W,m as g}from"./rows-l3LcChQt.js";const ie=`import {
	TableCore,
	columnSizingFeature,
	columnVisibilityFeature,
	createColumnHelper,
	createSortedRowModel,
	defaultColumnMenu,
	metaHelper,
	rowSortingFeature,
	sortByOrder,
	sortFn_basic,
	sortFn_datetime,
	sortFn_text,
	sortingControl,
	sortingChip,
	tableFeatures,
	TableStatusBar,
	TableToolbar,
	type ColumnVisibilityState,
	type CoreColumnMeta,
	type OnChangeFn,
	type SortIconsColumnMeta,
	type SortingColumnMeta,
	type SortingState,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import { COLOURS, ColourCell } from '../../data/people'
import { PRIORITIES, type FeatureRow } from '../../data/rows'

import { ColourOrderIcon } from './colour-icon'

// Sorting is v9's \`rowSortingFeature\`: the state (\`sorting\`), the sort functions
// and the order of the rows (\`sortedRowModel\`). The header, the menu, the panel
// and the chip call the column's own methods (\`toggleSorting\`, \`clearSorting\`,
// \`getIsSorted\` …). A column says its kind of sort in \`meta.sort\`.
const features = tableFeatures({
	rowSortingFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	sortedRowModel: createSortedRowModel(),
	sortFns: {
		text: sortFn_text,
		basic: sortFn_basic,
		datetime: sortFn_datetime,
	},
	columnMeta: metaHelper<
		CoreColumnMeta & SortingColumnMeta & SortIconsColumnMeta
	>(),
})

const helper = createColumnHelper<typeof features, FeatureRow>()

/** The order of Status the screen sorts by: Blocked first. */
const STATUS_ORDER = ['blocked', 'ok', 'excluded']

const name = helper.accessor('name', { header: 'Name', size: 190 })
const team = helper.accessor('team', { header: 'Team', size: 120 })
const role = helper.accessor('role', { header: 'Role', size: 150 })
const level = helper.accessor('level', { header: 'Level', size: 90 })
const country = helper.accessor('country', { header: 'Country', size: 120 })
const rate = helper.accessor('rate', {
	header: 'Rate',
	size: 80,
	meta: { align: 'right' },
})
// A date kept as an ISO string: it says it is a date.
const start = helper.accessor('start', {
	header: 'Start',
	size: 110,
	meta: { sort: { type: 'date' } },
})
// Shown as "Q2 2026", sorted by the real start date.
const period = helper.accessor('period', {
	header: 'Period',
	size: 100,
	meta: { sort: { type: 'date' } },
	sortFn: (a, b) => a.original.start.localeCompare(b.original.start),
})
// A fixed order: High first / Low first.
const priority = helper.accessor('priority', {
	header: 'Priority',
	size: 100,
	sortFn: sortByOrder(PRIORITIES),
})
// A fixed order with its own icons: the menu, the header and the chip use them.
const colour = helper.accessor('colour', {
	header: 'Colour',
	size: 110,
	cell: ColourCell,
	sortFn: sortByOrder(COLOURS),
	meta: {
		label: 'Colour',
		sort: {
			labels: { asc: 'Red first', desc: 'Green first' },
			icons: {
				asc: <ColourOrderIcon />,
				desc: <ColourOrderIcon reverse />,
			},
		},
	},
})
// The screen's own order of rows: sorted by it, never shown.
const status = helper.accessor((row) => row.state, {
	id: 'status',
	header: 'Status',
	size: 110,
	sortFn: sortByOrder(STATUS_ORDER),
})
const rank = helper.accessor('rank', { header: 'Rank', size: 80 })

/** The columns of the scenes, by what a scene shows. */
export const COLUMN_SETS = {
	basic: helper.columns([name, team, role, level, country]),
	/** Each column its kind: text, numbers, dates, a fixed order; Team never sorts. */
	kinds: helper.columns([
		name,
		helper.accessor('team', {
			header: 'Team',
			size: 120,
			enableSorting: false,
		}),
		rate,
		start,
		period,
		priority,
		colour,
	]),
	/** The screen's own sorts: Status and Rank are not shown. */
	hidden: helper.columns([name, team, role, level, country, status, rank]),
}
export type ColumnSet = keyof typeof COLUMN_SETS

/** What the hidden sort set hides. */
export const HIDDEN_COLUMNS: ColumnVisibilityState = {
	status: false,
	rank: false,
}

type Props = {
	rows: FeatureRow[]
	set?: ColumnSet
	/** The sorts, in priority order. Left out: the table keeps its own. */
	sorting?: SortingState
	onSortingChange?: OnChangeFn<SortingState>
	/** The sorts the table starts with, when it keeps its own. */
	initialSorting?: SortingState
	enableSorting?: boolean
	/** Shift+click adds a sort. @default false */
	enableMultiSort?: boolean
	/** The column menu a click on a header opens (*Sort ›*); off: a click sorts. */
	columnMenu?: boolean
	toolbar?: boolean
	statusBar?: boolean
}

const toolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar table={table} controls={[sortingControl()]} />
)
const statusBarRegion: TableCoreUiProps['statusBar'] = (table) => (
	<TableStatusBar table={table} chips={[sortingChip()]} />
)

export const SortingTable = ({
	rows,
	set = 'basic',
	sorting = undefined,
	onSortingChange,
	initialSorting = undefined,
	enableSorting = true,
	enableMultiSort = false,
	columnMenu = false,
	toolbar = false,
	statusBar = false,
}: Props) => (
	<TableCore
		features={features}
		data={rows}
		columns={COLUMN_SETS[set]}
		getRowId={(row) => row.id}
		enableSorting={enableSorting}
		enableMultiSort={enableMultiSort}
		initialState={{
			sorting: initialSorting ?? [],
			columnVisibility: set === 'hidden' ? HIDDEN_COLUMNS : {},
		}}
		{...(sorting && { state: { sorting }, onSortingChange })}
		columnMenu={columnMenu ? defaultColumnMenu() : undefined}
		toolbar={toolbar ? toolbarRegion : undefined}
		statusBar={statusBar ? statusBarRegion : undefined}
	/>
)
`,d=({reverse:t})=>{const o=t?[...i].reverse():i;return e.jsxs("svg",{viewBox:"0 0 24 24",width:24,height:24,"aria-hidden":!0,children:[e.jsx("path",{d:t?"M7.25 5.75V18M4.25 15l3 3 3-3":"M7.25 18.25V6M4.25 9l3-3 3 3",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),o.map((s,r)=>e.jsx("circle",{cx:17,cy:6.5+r*5.5,r:2.5,fill:F[s]},s))]})},Z=I({rowSortingFeature:P,columnSizingFeature:N,columnVisibilityFeature:U,sortedRowModel:D(),sortFns:{text:L,basic:E,datetime:B},columnMeta:H()}),n=V(),q=["blocked","ok","excluded"],a=n.accessor("name",{header:"Name",size:190}),u=n.accessor("team",{header:"Team",size:120}),h=n.accessor("role",{header:"Role",size:150}),m=n.accessor("level",{header:"Level",size:90}),b=n.accessor("country",{header:"Country",size:120}),J=n.accessor("rate",{header:"Rate",size:80,meta:{align:"right"}}),Q=n.accessor("start",{header:"Start",size:110,meta:{sort:{type:"date"}}}),X=n.accessor("period",{header:"Period",size:100,meta:{sort:{type:"date"}},sortFn:(t,o)=>t.original.start.localeCompare(o.original.start)}),Y=n.accessor("priority",{header:"Priority",size:100,sortFn:c(W)}),K=n.accessor("colour",{header:"Colour",size:110,cell:A,sortFn:c(i),meta:{label:"Colour",sort:{labels:{asc:"Red first",desc:"Green first"},icons:{asc:e.jsx(d,{}),desc:e.jsx(d,{reverse:!0})}}}}),$=n.accessor(t=>t.state,{id:"status",header:"Status",size:110,sortFn:c(q)}),ee=n.accessor("rank",{header:"Rank",size:80}),te={basic:n.columns([a,u,h,m,b]),kinds:n.columns([a,n.accessor("team",{header:"Team",size:120,enableSorting:!1}),J,Q,X,Y,K]),hidden:n.columns([a,u,h,m,b,$,ee])},ne={status:!1,rank:!1},oe=t=>e.jsx(j,{table:t,controls:[v()]}),se=t=>e.jsx(z,{table:t,chips:[_()]}),C=({rows:t,set:o="basic",sorting:s=void 0,onSortingChange:r,initialSorting:f=void 0,enableSorting:y=!0,enableMultiSort:w=!1,columnMenu:R=!1,toolbar:T=!1,statusBar:x=!1})=>e.jsx(O,{features:Z,data:t,columns:te[o],getRowId:M=>M.id,enableSorting:y,enableMultiSort:w,initialState:{sorting:f??[],columnVisibility:o==="hidden"?ne:{}},...s&&{state:{sorting:s},onSortingChange:r},columnMenu:R?k():void 0,toolbar:T?oe:void 0,statusBar:x?se:void 0}),le=({hint:t,sorting:o,...s})=>{const r=l.useMemo(()=>g(12),[]);return e.jsx(S,{hint:t,children:e.jsx(C,{rows:r,sorting:o,...s})})},p=(...t)=>t.map(o=>({id:o,desc:!1})),ce=()=>{const t=l.useMemo(()=>g(12),[]),[o,s]=l.useState([]);return e.jsxs(S,{hint:e.jsx(G,{text:"The screen owns `sorting`: its buttons set it, a click on a header sets it too, and both see the same state. **Country, then Role** are two sorts, though `enableMultiSort` is off: the switch limits the user, not the state."}),children:[e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",height:36},children:[e.jsx("button",{type:"button",onClick:()=>s(p("name")),children:"By Name"}),e.jsx("button",{type:"button",onClick:()=>s(p("country","role")),children:"Country, then Role"}),e.jsx("button",{type:"button",onClick:()=>s([]),children:"No sorting"}),e.jsx("code",{"data-sorting-state":!0,children:JSON.stringify(o)})]}),e.jsx("div",{style:{height:"calc(100% - 36px)"},children:e.jsx(C,{rows:t,sorting:o,onSortingChange:s})})]})};export{ce as O,le as S,ie as _};
