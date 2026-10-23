import{r as i,j as n,S as l,M as r}from"./products-CTiDOXRn.js";import{m as a}from"./rows-l3LcChQt.js";import{F as s}from"./table-CSYHSR_6.js";const d=`import { useState } from 'react'

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
	defaultColumnMenu,
	metaHelper,
	pinColumn,
	tableFeatures,
	type ColumnChain,
	type ColumnMenuSection,
	type ColumnPinningState,
	type CoreColumnMeta,
	type FrozenEdgeProp,
	type OnChangeFn,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'

// Freezing is v9's \`columnPinningFeature\`: the state (\`columnPinning\`,
// \`{ start: [...], end: [...] }\`, the order of each list is the order on the
// screen), \`column.pin()\`, \`getIsPinned()\`, \`getCanPin()\`, \`enablePinning\`. The
// table sticks the frozen columns at their side; the menu's *Freeze ›* and the
// Columns panel's arrows call \`column.pin\`. \`columnOrderingFeature\` is the
// dragging of the columns (inside the frozen zone too).
const features = tableFeatures({
	columnOrderingFeature,
	columnPinningFeature,
	columnVisibilityFeature,
	columnChainsFeature,
	columnSizingFeature,
	columnMeta: metaHelper<CoreColumnMeta>(),
})

const helper = createColumnHelper<typeof features, FeatureRow>()

/** The columns of the table: seven, wide enough to scroll in a narrow frame. */
export const IDS = ['name', 'team', 'role', 'level', 'country', 'city', 'email']

const toolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar table={table} controls={[columnsControl()]} />
)

/** The screen's own item of the menu: freeze every column from the left edge up to this one. */
const freezeUpTo: ColumnMenuSection = {
	id: 'freeze-up-to',
	getItems: ({ column, table }) => [
		{
			id: 'pin-up-to-here',
			label: 'Freeze up to here',
			onClick: () => {
				const shown = table.getVisibleLeafColumns().map((c) => c.id)
				table.setColumnPinning({
					start: shown.slice(0, shown.indexOf(column.id) + 1),
					end: [],
				})
			},
		},
	],
}

/** The screen's own section instead of the default Freeze: two plain items, left and right. */
const freezeTwoSides: ColumnMenuSection = {
	id: 'freeze-two-sides',
	getItems: ({ column }) => [
		{
			id: 'pin-left',
			label: 'Freeze at the left',
			onClick: () => pinColumn(column, 'start'),
		},
		{
			id: 'pin-right',
			label: 'Freeze at the right',
			onClick: () => pinColumn(column, 'end'),
		},
		...(column.getIsPinned()
			? [
					{
						id: 'unpin',
						label: 'Unfreeze column',
						onClick: () => pinColumn(column, false),
					},
			  ]
			: []),
	],
}

/** The screen's own part of the column menu, if any. */
export type OwnSection = 'up-to-here' | 'two-sides'

/** The column menu: none, the default, the default with the screen's own item, or the screen's own Freeze. */
const menuOf = (on: boolean, own?: OwnSection) => {
	if (!on) return undefined
	if (own === 'two-sides') return { sections: [freezeTwoSides] }
	if (own === 'up-to-here')
		return { sections: [...defaultColumnMenu().sections, freezeUpTo] }

	return defaultColumnMenu()
}

/** What a screen lets through of a change of the frozen columns: the state before, the state asked for, the state that stays. */
type PinningRuleFn = (
	old: ColumnPinningState,
	next: ColumnPinningState
) => ColumnPinningState

const rulesOf = <Name extends string>(rules: Record<Name, PinningRuleFn>) =>
	rules

const MAX_LEFT = 2

/** The rules a screen can write on the state it owns, by the name the control shows. */
export const PINNING_RULES = rulesOf({
	any: (_old, next) => next,
	// A new column replaces the one before it at its side.
	'one per side': (_old, next) => ({
		start: next.start.slice(-1),
		end: next.end.slice(-1),
	}),
	// A third column at the left is refused: the state stays as it was.
	'at most two at the left': (old, next) =>
		next.start.length > MAX_LEFT ? old : next,
})

export type PinningRule = keyof typeof PINNING_RULES

type Props = {
	rows: FeatureRow[]
	/** The frozen columns, \`{ start: ['name'], end: [] }\`. Left out: the table keeps its own. */
	columnPinning?: ColumnPinningState
	onColumnPinningChange?: OnChangeFn<ColumnPinningState>
	/** What the screen lets through of a change of the frozen columns. A rule other than 'any' makes the table keep the state and apply the rule to every change. @default 'any' */
	pinningRule?: PinningRule
	/** The frozen columns the table starts with, when it keeps its own. */
	initialPinning?: ColumnPinningState
	/** The user may freeze columns. @default true */
	enableColumnPinning?: boolean
	/** The sides the user may freeze at. @default left only */
	enableLeftPinning?: boolean
	enableRightPinning?: boolean
	/** Columns with \`enablePinning: false\`. */
	unpinnable?: string[]
	/** Columns with \`meta.disableReorder\`: no grip, no handle. */
	fixed?: string[]
	/** A section of the screen's own in the column menu. */
	ownSection?: OwnSection
	/** Columns that freeze at one side only (\`meta.pinOnly\`). */
	pinOnly?: { left?: string[]; right?: string[] }
	/** The column menu with *Freeze ›*. */
	columnMenu?: boolean
	/** The toolbar with the Columns panel. */
	toolbar?: boolean
	/** The edge of the frozen zone. @default 'onScroll' */
	frozenEdge?: FrozenEdgeProp
	/** Columns that go as one (a chain freezes whole, at the side of its first member). */
	chains?: ColumnChain[]
	/** The chains start open. */
	chainsOpen?: boolean
}

/** The frozen columns as a state the screen owns: with its handler, or left to the table. */
const ownedPinning = (
	pinning: ColumnPinningState | undefined,
	onChange: OnChangeFn<ColumnPinningState> | undefined
) =>
	pinning
		? { state: { columnPinning: pinning }, onColumnPinningChange: onChange }
		: {}

/** The state kept by the table, every change of it passed through the rule. */
const useRuledPinning = (
	rule: PinningRule,
	start: ColumnPinningState | undefined
) => {
	const [kept, setKept] = useState<ColumnPinningState>(
		start ?? { start: [], end: [] }
	)
	const onChange: OnChangeFn<ColumnPinningState> = (updater) =>
		setKept((old) =>
			PINNING_RULES[rule](
				old,
				typeof updater === 'function' ? updater(old) : updater
			)
		)

	return { kept, onChange }
}

export const FreezeTable = ({
	rows,
	columnPinning = undefined,
	onColumnPinningChange,
	pinningRule = 'any',
	initialPinning = undefined,
	enableColumnPinning = true,
	enableLeftPinning = true,
	enableRightPinning = false,
	unpinnable = [],
	fixed = [],
	ownSection = undefined,
	pinOnly = {},
	columnMenu = false,
	toolbar = false,
	frozenEdge = 'onScroll',
	chains,
	chainsOpen = false,
}: Props) => {
	const ruled = useRuledPinning(pinningRule, initialPinning)
	const pinOnlyOf = (id: string) => {
		if (pinOnly.left?.includes(id)) return 'left'

		return pinOnly.right?.includes(id) ? 'right' : undefined
	}
	const columns = helper.columns(
		IDS.map((id) =>
			helper.accessor(id as keyof FeatureRow, {
				id,
				header: id[0].toUpperCase() + id.slice(1),
				size: id === 'email' ? 240 : 150,
				enablePinning: !unpinnable.includes(id),
				meta: {
					pinOnly: pinOnlyOf(id),
					disableReorder: fixed.includes(id) || undefined,
				},
			})
		)
	)

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(row) => row.id}
			enableColumnPinning={enableColumnPinning}
			enableLeftPinning={enableLeftPinning}
			enableRightPinning={enableRightPinning}
			frozenEdge={frozenEdge}
			chains={chains}
			initialState={{
				...(initialPinning && { columnPinning: initialPinning }),
				...(chainsOpen && { columnChainExpanded: { location: true } }),
			}}
			columnMenu={menuOf(columnMenu, ownSection)}
			toolbar={toolbar ? toolbarRegion : undefined}
			{...(pinningRule === 'any'
				? ownedPinning(columnPinning, onColumnPinningChange)
				: ownedPinning(ruled.kept, ruled.onChange))}
		/>
	)
}
`,g=({hint:o,...t})=>{const e=i.useMemo(()=>a(12),[]);return n.jsx(l,{hint:o,width:640,children:n.jsx("div",{style:{height:"100%"},children:n.jsx(s,{rows:e,...t})})})},u={start:["name","team"],end:[]},f=()=>{const o=i.useMemo(()=>a(12),[]),[t,e]=i.useState({start:[],end:[]});return n.jsxs(l,{width:640,hint:n.jsx(r,{text:"The screen owns `columnPinning`: its buttons set it, **Freeze** in a header menu does too, and both see the same state. The Resource Plan case: the screen decides what is frozen, and `enableColumnPinning={false}` takes *Freeze* from the user."}),children:[n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",height:36},children:[n.jsx("button",{type:"button",onClick:()=>e(u),children:"Name, Team"}),n.jsx("button",{type:"button",onClick:()=>e({start:["name"],end:["email"]}),children:"Name left, Email right"}),n.jsx("button",{type:"button",onClick:()=>e({start:[],end:[]}),children:"Nothing"}),n.jsx("code",{"data-pinning-state":!0,children:JSON.stringify(t)})]}),n.jsx("div",{style:{height:"calc(100% - 36px)"},children:n.jsx(s,{rows:o,columnMenu:!0,enableRightPinning:!0,columnPinning:t,onColumnPinningChange:e})})]})};export{f as O,g as S,d as _};
