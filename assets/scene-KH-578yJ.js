import{j as o,Y as V,r as u,_ as S,$ as R,a0 as x,a1 as T,ba as M,bb as H,bc as F,a2 as I,a3 as v,a6 as E,bf as _,bg as O,Z as N,bJ as k,bK as U,bL as L,S as d,M as z}from"./products-CTiDOXRn.js";import{m}from"./rows-l3LcChQt.js";const q=`import { useState } from 'react'

import {
	TableCore,
	TableToolbar,
	columnSizingFeature,
	columnChainsFeature,
	columnGroupingFeature,
	columnVisibilityFeature,
	columnsControl,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	rowExpandingFeature,
	createColumnHelper,
	hidingSection,
	metaHelper,
	groupingSection,
	sortingSection,
	tableFeatures,
	type ColumnChain,
	type ColumnVisibilityState,
	type CoreColumnMeta,
	type OnChangeFn,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'

// Column visibility is v9's \`columnVisibilityFeature\`: the state
// (\`columnVisibility\`, \`{ [columnId]: false }\`), \`column.getIsVisible()\`,
// \`getCanHide()\`, \`toggleVisibility()\`, \`enableHiding\`. The table draws the
// visible columns only; the Columns panel and the menu's *Hide column* call
// the same methods.
const features = tableFeatures({
	columnVisibilityFeature,
	columnChainsFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	columnSizingFeature,
	columnMeta: metaHelper<CoreColumnMeta>(),
})

const helper = createColumnHelper<typeof features, FeatureRow>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name', size: 190, enableHiding: false }),
	helper.accessor('team', { header: 'Team', size: 120 }),
	helper.accessor('role', { header: 'Role', size: 150 }),
	helper.accessor('level', { header: 'Level', size: 90 }),
	helper.accessor('country', { header: 'Country', size: 120 }),
	helper.accessor('email', { header: 'Email', size: 170 }),
])

/** The columns of the table, as the screen lists them for its own controls. */
export const COLUMN_IDS = [
	'name',
	'team',
	'role',
	'level',
	'country',
	'email',
] as const

const toolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar table={table} controls={[columnsControl()]} />
)

const MENU = { sections: [sortingSection(), hidingSection()] }
const MENU_WITHOUT_HIDE = { sections: [groupingSection()] }

/** The column menu: none, with Hide column, or without it. */
const menuOf = (on: boolean, withoutHide: boolean) => {
	if (!on) return undefined

	return withoutHide ? MENU_WITHOUT_HIDE : MENU
}

/** What a screen lets through of a change of the hidden columns: the state before, the state asked for, the state that stays. */
type VisibilityRuleFn = (
	old: ColumnVisibilityState,
	next: ColumnVisibilityState
) => ColumnVisibilityState

const rulesOf = <Name extends string>(rules: Record<Name, VisibilityRuleFn>) =>
	rules

const MIN_SHOWN = 3

/** The rules a screen can write on the state it owns, by the name the control shows. */
export const VISIBILITY_RULES = rulesOf({
	any: (_old, next) => next,
	// A change that leaves fewer than three columns is refused.
	'at least three': (old, next) =>
		COLUMN_IDS.filter((id) => next[id] !== false).length < MIN_SHOWN
			? old
			: next,
	// Whichever of Role and Level changed, both follow it.
	'role and level together': (old, next) => {
		const pair = next.role !== old.role ? next.role : next.level

		return { ...next, role: pair, level: pair }
	},
})

export type VisibilityRule = keyof typeof VISIBILITY_RULES

type Props = {
	rows: FeatureRow[]
	/** The hidden columns, \`{ role: false }\`. Left out: the table keeps its own. */
	columnVisibility?: ColumnVisibilityState
	onColumnVisibilityChange?: OnChangeFn<ColumnVisibilityState>
	/** What the screen lets through of a change of the hidden columns. A rule other than 'any' makes the table keep the state and apply the rule to every change. @default 'any' */
	visibilityRule?: VisibilityRule
	/** The hidden columns the table starts with, when it keeps its own. */
	initialVisibility?: ColumnVisibilityState
	/** Columns that fold into one (Country and City). */
	chains?: ColumnChain[]
	/** The table is grouped by these columns: a grouped column is a lane, always drawn. */
	initialGrouping?: string[]
	/** The user may hide and show columns. @default true */
	enableHiding?: boolean
	/** The column menu with *Hide column*. */
	columnMenu?: boolean
	/** The column menu has no *Hide column*: hiding is the panel's. */
	menuWithoutHide?: boolean
	/** The toolbar with the Columns panel. */
	toolbar?: boolean
}

/** The hidden columns as a state the screen owns: with its handler, or left to the table. */
const ownedVisibility = (
	hidden: ColumnVisibilityState | undefined,
	onChange: OnChangeFn<ColumnVisibilityState> | undefined
) =>
	hidden
		? {
				state: { columnVisibility: hidden },
				onColumnVisibilityChange: onChange,
		  }
		: {}

/** The state kept by the table, every change of it passed through the rule. */
const useRuledVisibility = (
	rule: VisibilityRule,
	start: ColumnVisibilityState | undefined
) => {
	const [kept, setKept] = useState<ColumnVisibilityState>(start ?? {})
	const onChange: OnChangeFn<ColumnVisibilityState> = (updater) =>
		setKept((old) =>
			VISIBILITY_RULES[rule](
				old,
				typeof updater === 'function' ? updater(old) : updater
			)
		)

	return { kept, onChange }
}

export const VisibilityTable = ({
	rows,
	columnVisibility = undefined,
	onColumnVisibilityChange,
	visibilityRule = 'any',
	initialVisibility = undefined,
	initialGrouping,
	chains,
	enableHiding = true,
	columnMenu = false,
	menuWithoutHide = false,
	toolbar = false,
}: Props) => {
	const ruled = useRuledVisibility(visibilityRule, initialVisibility)

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(row) => row.id}
			enableHiding={enableHiding}
			chains={chains}
			initialState={{
				grouping: initialGrouping ?? [],
				expanded: true,
				...(initialVisibility && { columnVisibility: initialVisibility }),
			}}
			autoResetExpanded={false}
			columnMenu={menuOf(columnMenu, menuWithoutHide)}
			toolbar={toolbar ? toolbarRegion : undefined}
			{...(visibilityRule === 'any'
				? ownedVisibility(columnVisibility, onColumnVisibilityChange)
				: ownedVisibility(ruled.kept, ruled.onChange))}
		/>
	)
}
`,j=x({columnVisibilityFeature:v,columnChainsFeature:I,columnGroupingFeature:F,rowExpandingFeature:H,groupRowsFeature:M,groupedRowModel:O(),expandedRowModel:_(),columnSizingFeature:T,columnMeta:E()}),a=N(),W=a.columns([a.accessor("name",{header:"Name",size:190,enableHiding:!1}),a.accessor("team",{header:"Team",size:120}),a.accessor("role",{header:"Role",size:150}),a.accessor("level",{header:"Level",size:90}),a.accessor("country",{header:"Country",size:120}),a.accessor("email",{header:"Email",size:170})]),b=["name","team","role","level","country","email"],G=n=>o.jsx(S,{table:n,controls:[R()]}),D={sections:[U(),L()]},Y={sections:[k()]},B=(n,e)=>{if(n)return e?Y:D},K=n=>n,P=3,$=K({any:(n,e)=>e,"at least three":(n,e)=>b.filter(t=>e[t]!==!1).length<P?n:e,"role and level together":(n,e)=>{const t=e.role!==n.role?e.role:e.level;return{...e,role:t,level:t}}}),h=(n,e)=>n?{state:{columnVisibility:n},onColumnVisibilityChange:e}:{},A=(n,e)=>{const[t,i]=u.useState(e??{});return{kept:t,onChange:l=>i(r=>$[n](r,typeof l=="function"?l(r):l))}},p=({rows:n,columnVisibility:e=void 0,onColumnVisibilityChange:t,visibilityRule:i="any",initialVisibility:s=void 0,initialGrouping:l,chains:r,enableHiding:y=!0,columnMenu:g=!1,menuWithoutHide:C=!1,toolbar:f=!1})=>{const c=A(i,s);return o.jsx(V,{features:j,data:n,columns:W,getRowId:w=>w.id,enableHiding:y,chains:r,initialState:{grouping:l??[],expanded:!0,...s&&{columnVisibility:s}},autoResetExpanded:!1,columnMenu:B(g,C),toolbar:f?G:void 0,...i==="any"?h(e,t):h(c.kept,c.onChange)})},Q=({hint:n,...e})=>{const t=u.useMemo(()=>m(12),[]);return o.jsx(d,{hint:n,children:o.jsx(p,{rows:t,...e})})},X=()=>{const n=u.useMemo(()=>m(12),[]),[e,t]=u.useState({});return o.jsxs(d,{hint:o.jsx(z,{text:"The screen owns `columnVisibility`: its ticks set it, **Hide column** in a header menu does too, and both see the same state. **Name** says `enableHiding: false`, but the state may hide it: the switch limits the user, not the state."}),children:[o.jsx("div",{style:{display:"flex",gap:12,alignItems:"center",height:36},children:b.map(i=>o.jsxs("label",{htmlFor:`tick-${i}`,children:[o.jsx("input",{id:`tick-${i}`,type:"checkbox","aria-label":i,checked:e[i]!==!1,onChange:s=>t(l=>({...l,[i]:s.target.checked}))})," ",i]},i))}),o.jsx("div",{style:{height:"calc(100% - 36px)"},children:o.jsx(p,{rows:n,columnMenu:!0,columnVisibility:e,onColumnVisibilityChange:t})})]})};export{X as O,Q as S,$ as V,q as _};
