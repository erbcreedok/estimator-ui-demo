import{r as a,j as n,Y as j,Z as P,_ as v,$ as _,a0 as E,a1 as I,a2 as M,a3 as U,a4 as D,a5 as L,a6 as z,S as u,M as g}from"./products-CTiDOXRn.js";import{m as d}from"./rows-l3LcChQt.js";const J=`import { useState } from 'react'

import {
	TableCore,
	TableToolbar,
	columnChainsFeature,
	columnOrderingFeature,
	columnPinningFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	columnsControl,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type ColumnChain,
	type ColumnOrderState,
	type ColumnPinningState,
	type CoreColumnMeta,
	type OnChangeFn,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'

// Column order is v9's \`columnOrderingFeature\`: the state (\`columnOrder\`, the
// ids in screen order; the ones not listed follow in the order of \`columns\`)
// and \`table.setColumnOrder\`. The header's grip and the Columns panel's handles
// only turn the pointer into "this column before that one".
const features = tableFeatures({
	columnOrderingFeature,
	columnPinningFeature,
	columnVisibilityFeature,
	columnChainsFeature,
	columnSizingFeature,
	columnMeta: metaHelper<CoreColumnMeta>(),
})

const helper = createColumnHelper<typeof features, FeatureRow>()

/** The columns of the table in the order of \`columns\`. */
export const IDS = ['name', 'team', 'role', 'level', 'country', 'city', 'email']

/** The ids on the screen in \`order\`: \`[]\` is the columns of \`IDS\` in their order. */
const shown = (order: ColumnOrderState) => (order.length ? order : [...IDS])

/** What a team lets through: whether the table may go from the \`old\` order to the \`next\`. */
export const ORDER_RULES = {
	any: () => true,
	'nothing before Name': (_old: ColumnOrderState, next: ColumnOrderState) =>
		shown(next)[0] === 'name',
	'nothing last': (old: ColumnOrderState, next: ColumnOrderState) =>
		shown(next).at(-1) === shown(old).at(-1),
}

export type OrderRule = keyof typeof ORDER_RULES

const toolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar table={table} controls={[columnsControl()]} />
)

type Props = {
	rows: FeatureRow[]
	/** The ids in screen order; \`[]\` is the order of \`columns\`. Left out: the table keeps its own. */
	columnOrder?: ColumnOrderState
	onColumnOrderChange?: OnChangeFn<ColumnOrderState>
	/** The ids in screen order the table starts with, when it keeps its own. */
	initialOrder?: ColumnOrderState
	/** What the table lets through; any other than 'any' makes it keep its order and refuse the change the rule does not allow. @default 'any' */
	orderRule?: OrderRule
	/** The user may drag columns. @default true */
	enableColumnReorder?: boolean
	/** Where the grip stands: the tab on the header's edge, or the dots before the title. @default 'top' */
	gripPlacement?: 'top' | 'start'
	/** Columns that move together (Country and City, an open chain). */
	chains?: ColumnChain[]
	/** The chains start open. */
	chainsOpen?: boolean
	/** Columns with \`meta.disableReorder\`: no grip, no handle. */
	fixed?: string[]
	/** Columns frozen from the start. */
	initialPinning?: ColumnPinningState
	/** The toolbar with the Columns panel. */
	toolbar?: boolean
}

/** The order as a state the screen owns: with its handler, or left to the table. */
const ownedOrder = (
	order: ColumnOrderState | undefined,
	onChange: OnChangeFn<ColumnOrderState> | undefined
) =>
	order ? { state: { columnOrder: order }, onColumnOrderChange: onChange } : {}

export const OrderTable = ({
	rows,
	columnOrder = undefined,
	onColumnOrderChange,
	initialOrder = undefined,
	orderRule = 'any',
	enableColumnReorder = true,
	gripPlacement = 'top',
	chains,
	chainsOpen = false,
	initialPinning,
	fixed = [],
	toolbar = false,
}: Props) => {
	const [kept, setKept] = useState<ColumnOrderState>(initialOrder ?? [])
	const keepAllowed: OnChangeFn<ColumnOrderState> = (updater) =>
		setKept((old) => {
			const next = typeof updater === 'function' ? updater(old) : updater

			return ORDER_RULES[orderRule](old, next) ? next : old
		})
	const ruled =
		orderRule === 'any'
			? {}
			: { state: { columnOrder: kept }, onColumnOrderChange: keepAllowed }
	const columns = helper.columns(
		IDS.map((id) =>
			helper.accessor(id as keyof FeatureRow, {
				id,
				header: id[0].toUpperCase() + id.slice(1),
				size: 130,
				meta: fixed.includes(id) ? { disableReorder: true } : undefined,
			})
		)
	)

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(row) => row.id}
			enableColumnReorder={enableColumnReorder}
			gripPlacement={gripPlacement}
			chains={chains}
			initialState={{
				...(initialOrder && { columnOrder: initialOrder }),
				...(initialPinning && { columnPinning: initialPinning }),
				...(chainsOpen && { columnChainExpanded: { location: true } }),
			}}
			toolbar={toolbar ? toolbarRegion : undefined}
			{...ownedOrder(columnOrder, onColumnOrderChange)}
			{...ruled}
		/>
	)
}
`,H=E({columnOrderingFeature:L,columnPinningFeature:D,columnVisibilityFeature:U,columnChainsFeature:M,columnSizingFeature:I,columnMeta:z()}),C=P(),b=["name","team","role","level","country","city","email"],i=e=>e.length?e:[...b],A={any:()=>!0,"nothing before Name":(e,t)=>i(t)[0]==="name","nothing last":(e,t)=>i(t).at(-1)===i(e).at(-1)},N=e=>n.jsx(v,{table:e,controls:[_()]}),K=(e,t)=>e?{state:{columnOrder:e},onColumnOrderChange:t}:{},c=({rows:e,columnOrder:t=void 0,onColumnOrderChange:r,initialOrder:l=void 0,orderRule:m="any",enableColumnReorder:O=!0,gripPlacement:f="top",chains:y,chainsOpen:x=!1,initialPinning:h,fixed:S=[],toolbar:w=!1})=>{const[R,F]=a.useState(l??[]),T=m==="any"?{}:{state:{columnOrder:R},onColumnOrderChange:o=>F(s=>{const p=typeof o=="function"?o(s):o;return A[m](s,p)?p:s})},k=C.columns(b.map(o=>C.accessor(o,{id:o,header:o[0].toUpperCase()+o.slice(1),size:130,meta:S.includes(o)?{disableReorder:!0}:void 0})));return n.jsx(j,{features:H,data:e,columns:k,getRowId:o=>o.id,enableColumnReorder:O,gripPlacement:f,chains:y,initialState:{...l&&{columnOrder:l},...h&&{columnPinning:h},...x&&{columnChainExpanded:{location:!0}}},toolbar:w?N:void 0,...K(t,r),...T})},Z=({hint:e,...t})=>{const r=a.useMemo(()=>d(12),[]);return n.jsx(u,{hint:e,children:n.jsx(c,{rows:r,...t})})},V=["country","name","team","role","level","city","email"],$=()=>{const e=a.useMemo(()=>d(12),[]),[t,r]=a.useState([]);return n.jsxs(u,{hint:n.jsx(g,{text:"The screen owns `columnOrder`: its buttons set it, a drag on a header sets it too, and both see the same state. An empty list is the order of `columns`."}),children:[n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",height:36},children:[n.jsx("button",{type:"button",onClick:()=>r(V),children:"Country first"}),n.jsx("button",{type:"button",onClick:()=>r([]),children:"Back"}),n.jsx("code",{"data-order-state":!0,children:JSON.stringify(t)})]}),n.jsx("div",{style:{height:"calc(100% - 36px)"},children:n.jsx(c,{rows:e,columnOrder:t,onColumnOrderChange:r})})]})},q=({enableColumnReorder:e,onToggle:t})=>{const r=a.useMemo(()=>d(12),[]);return n.jsxs(u,{hint:n.jsx(g,{text:"The screen’s mode is `enableColumnReorder`: press **Lock layout** and the grips are gone, nothing can be dragged; **Unlock** brings them back."}),children:[n.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",height:36},children:n.jsx("button",{type:"button",onClick:t,children:e?"Lock layout":"Unlock layout"})}),n.jsx("div",{style:{height:"calc(100% - 36px)"},children:n.jsx(c,{rows:r,enableColumnReorder:e})})]})};export{b as I,q as M,$ as O,Z as S,J as _,A as a};
