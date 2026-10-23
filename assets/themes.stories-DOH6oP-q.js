import{t as ue,l as f,y as Rn,h as S,w as Y,u as F,P as Tn,j as a,Y as V,b$ as An,a7 as Pn,by as Bn,c1 as Mn,_ as Ln,c4 as jn,c5 as zn,$ as $n,b8 as Nn,a0 as Q,bB as Dn,bC as pe,a1 as J,a3 as Je,a4 as me,a5 as Xe,ba as On,bb as he,bc as _n,bi as Hn,bE as In,b4 as ge,b5 as be,a6 as X,bj as Un,bf as fe,bg as qn,Z,dW as Ze,dX as E,dY as ee,dZ as en,r as h,d_ as Wn,d$ as Gn,e0 as Yn,e1 as Kn,e2 as Vn,e3 as Qn,e4 as K,e5 as Jn,e6 as Xn,e7 as Zn,a2 as et,C as xe,S as I,M as T,d as nt,c as ne,f as tt,p as at,s as ot,e as rt}from"./products-CTiDOXRn.js";const ye=e=>e.querySelector("[data-header-id]"),st=async e=>{const n=Y(e),t=await n.findByRole("button",{name:"Save"});f(t.disabled,"Save is off until someone is picked");const o=await n.findAllByRole("radio");await F.click(o[1]),await S(()=>!t.disabled,"Save is on"),await F.click(t),await S(()=>{var r;return/^Saved: /.test(((r=e.querySelector("[data-saved]"))==null?void 0:r.textContent)??"")},"saved")},it=async e=>{const n=Y(e);await ue(e);const t=()=>e.querySelector('[data-header-id="m0"]');f(!t(),"the months are folded away"),await F.click(await n.findByRole("button",{name:"Show months of MAR26"})),await S(()=>t(),"the months of the quarter show");const o=Array.from(e.querySelectorAll("[data-header-id]"),s=>s.dataset.headerId);f(o.slice(o.indexOf("m0"),o.indexOf("m0")+4).join()==="m0,m1,m2,q00",`months first, the total last: ${o.join()}`),f(n.getByRole("button",{name:"Hide months of MAR26"}),"the +/−"),f(!e.querySelector("[data-grip]"),"no grips"),f(!e.querySelector('[data-row-id="sc-rev-emp"]'),"the lines are folded");const r=e.querySelector('[data-row-id="sc-revenue"]');await F.click(Y(r).getByRole("button",{name:"Expand row"})),await S(()=>e.querySelector('[data-row-id="sc-rev-emp"]'),"opened")},lt=async e=>{const n=Y(e);await ue(e),f(getComputedStyle(ye(e)).backgroundColor==="rgb(235, 237, 245)","the grey header"),f(!e.querySelector('[data-row-id="rev-emp"]'),"the lines are folded"),await F.click(await n.findByRole("button",{name:"Expand Revenue"})),await S(()=>e.querySelector('[data-row-id="rev-emp"]'),"opened"),await F.click(n.getByRole("button",{name:"Collapse Revenue"})),await Tn(()=>f(!e.querySelector('[data-row-id="rev-emp"]'),"closed"))},ct=async e=>{await ue(e),f(getComputedStyle(ye(e)).color==="rgb(125, 211, 252)","the neon header text");const n=e.querySelector('[role="grid"]');f(getComputedStyle(n.parentElement).backgroundColor==="rgb(10, 15, 28)","the dark body")},dt=async e=>{const n=e.canvasElement;await Rn(e,{theme:"statement",rowHeight:40}),await S(()=>getComputedStyle(ye(n)).backgroundColor==="rgb(235, 237, 245)","theme: the grey header of the statement look"),await S(()=>{var t;return((t=n.querySelector("[role=row][data-row-id]"))==null?void 0:t.getBoundingClientRect().height)===40},"rowHeight: 40 px rows")},ut=`import {
	TableBulkBar,
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
	type RowAction,
	type SortingColumnMeta,
	type TableCoreTheme,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { Employee } from '../../data/employees'
import { sceneSortFns } from '../../kit/sort-fns'

import { NEON_STATUS, NeonLoad, NeonPerson, NeonStatus } from './neon-cells'

// \`theme\` is a plain object of tokens; any token left out keeps the default
// look. Menus, panels and tooltips of the table follow it too.
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

const defaultColumns = helper.columns([
	helper.accessor('name', { header: 'Name', size: 190 }),
	helper.accessor('team', { header: 'Team', size: 120 }),
	helper.accessor('role', { header: 'Role', size: 150 }),
	helper.accessor('country', { header: 'Country', size: 120 }),
	helper.accessor('city', { header: 'City', size: 120 }),
	helper.accessor('rate', {
		header: 'Rate',
		size: 90,
		meta: { align: 'right' },
	}),
	helper.accessor('start', { header: 'Start', size: 110 }),
])

const neonColumns = helper.columns([
	createUtilityColumn(helper),
	helper.accessor('name', {
		id: 'name',
		header: 'Operator',
		size: 150,
		cell: NeonPerson,
	}),
	helper.accessor((employee) => NEON_STATUS[employee.state].label, {
		id: 'status',
		header: 'Signal',
		size: 100,
		cell: NeonStatus,
	}),
	helper.accessor('team', { header: 'Crew', size: 100 }),
	helper.accessor('city', { header: 'Base', size: 100 }),
	helper.accessor('rate', {
		id: 'load',
		header: 'Load',
		size: 130,
		cell: NeonLoad,
	}),
	helper.accessor('rate', {
		header: 'Rate',
		size: 90,
		meta: { align: 'right' },
	}),
	helper.accessor('start', {
		header: 'Since',
		size: 120,
		meta: { align: 'right' },
	}),
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
const neonActions = (rows: { length: number }): RowAction[] => [
	{ id: 'ping', label: \`Ping \${rows.length}\`, onClick: () => undefined },
	{ id: 'mute', label: 'Mute', onClick: () => undefined },
]
const neonBulkBar: TableCoreUiProps['bulkBar'] = (table) => (
	<TableBulkBar table={table} getActions={neonActions} />
)

export type Look = 'default' | 'neon'

type Props = {
	rows: Employee[]
	theme: TableCoreTheme
	rowHeight?: number
	look: Look
}

/** One table, two looks: the theme and, for Neon, its own columns and a pink bulk bar. */
export const EmployeeTable = ({
	rows,
	look,
	rowHeight = 48,
	...options
}: Props) => {
	const theme = options.theme

	return (
		<TableCore
			features={features}
			data={rows}
			columns={look === 'neon' ? neonColumns : defaultColumns}
			getRowId={(employee) => employee.id}
			theme={theme}
			rowHeight={rowHeight}
			autoResetExpanded={false}
			initialState={{
				columnPinning: {
					start: look === 'neon' ? [UTILITY_COLUMN_ID, 'name'] : ['name'],
					end: [],
				},
				expanded: true,
			}}
			columnMenu={defaultColumnMenu()}
			toolbar={toolbarRegion}
			statusBar={statusBarRegion}
			bulkBar={look === 'neon' ? neonBulkBar : undefined}
		/>
	)
}
`,pt=`import Radio from '@mui/material/Radio'

import {
	TableCore,
	columnSizingFeature,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type CellContext,
	type TableCoreTheme,
} from '@pnl-simulation/table-core'

import type { Employee } from '../../data/employees'

// The look of a candidate selection: a calm table in a drawer, one row picked
// with a radio. The screen owns what is picked (the table's \`meta\`), and a
// picked row is tinted through \`getRowProps\`.
type PickMeta = { picked: string; pick: (id: string) => void }

const features = tableFeatures({
	columnSizingFeature,
	tableMeta: metaHelper<PickMeta>(),
})

/** Radio + name: a click anywhere in the cell picks the row. */
const PickCell = ({
	row,
	table,
}: CellContext<typeof features, Employee, string>) => {
	const picked = table.options.meta?.picked
	const pick = table.options.meta?.pick

	return (
		// The whole cell picks the row; the radio is the control.
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<div
			onClick={() => pick?.(row.id)}
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: 4,
				cursor: 'pointer',
				minWidth: 0,
			}}
		>
			<Radio
				size="small"
				checked={picked === row.id}
				onChange={() => pick?.(row.id)}
				inputProps={{ 'aria-label': \`Pick \${row.original.name}\` }}
			/>
			<span
				style={{
					color: '#008ABD',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
				}}
			>
				{row.original.name}
			</span>
		</div>
	)
}

const helper = createColumnHelper<typeof features, Employee>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Person', size: 230, cell: PickCell }),
	helper.accessor('role', { header: 'Job function', size: 160 }),
	helper.accessor('level', { header: 'Level', size: 90 }),
	helper.accessor('team', { header: 'Skill', size: 120 }),
	helper.accessor((e) => [e.country, e.tier, e.city].join(', '), {
		id: 'location',
		header: 'Country, tier, city',
		size: 220,
	}),
])

export const PickerTable = ({
	rows,
	rowHeight = 44,
	picked,
	pick,
	...look
}: {
	rows: Employee[]
	theme: TableCoreTheme
	rowHeight?: number
	picked: string
	pick: (id: string) => void
}) => {
	const theme = look.theme

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(employee) => employee.id}
			theme={theme}
			rowHeight={rowHeight}
			meta={{ picked, pick }}
			getRowProps={(rowId) => ({ 'data-picked': rowId === picked })}
			height="auto"
		/>
	)
}
`,mt=`import {
	TableCore,
	cellSelectionFeature,
	cellKeyboardFeature,
	columnChainsFeature,
	columnOrderingFeature,
	columnPinningFeature,
	columnResizingFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	createColumnHelper,
	createExpandedRowModel,
	metaHelper,
	rowExpandingFeature,
	tableFeatures,
	type CellContext,
	type ChainExpandedState,
	type ChainToggleProps,
	type ColumnChain,
	type CoreColumnMeta,
	type ExpandedState,
	type OnChangeFn,
	type TableCoreTheme,
} from '@pnl-simulation/table-core'

// The look of a scenario's PnL table: quarters that open into months (each
// quarter is a column chain with its own +/− box), a grey year total, a wide
// first column with a divider, bold expandable lines, coloured margin and
// seniority. What it does not need it does not have: no sorting, grouping,
// freezing, hiding or row selection — those features are not in the list; the
// column order is only the chains' (\`enableColumnReorder\` off). Cells stay selectable, columns resizable.
const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	rowExpandingFeature,
	columnOrderingFeature,
	columnPinningFeature,
	columnVisibilityFeature,
	columnChainsFeature,
	columnSizingFeature,
	columnResizingFeature,
	expandedRowModel: createExpandedRowModel(),
	columnMeta: metaHelper<CoreColumnMeta>(),
})

const SC = {
	text: '#303240',
	divider: '#E1E3EB',
	total: '#F5F6FA',
	open: '#FAFAFC',
	openLine: '#C4EAF5',
	blue: '#009ECC',
	good: '#558A00',
	amber: '#E2A915',
	bad: '#CC2929',
}

type Period = {
	id: string
	label: string
	kind: 'month' | 'quarter' | 'year'
	/** Month indexes (0-based from Jan 2026) the period covers. */
	months: number[]
	quarter?: string
}

const monthLabel = (i: number) =>
	new Date(2026, i, 1)
		.toLocaleString('en', { month: 'short', year: '2-digit' })
		.replace(' ', '')
		.toUpperCase()

/** Jan 2026 – Dec 2027: months, a quarter after every three, a year total. */
const PERIODS: Period[] = [0, 1].flatMap<Period>((year) => [
	...[0, 1, 2, 3].flatMap((q) => {
		const months = [0, 1, 2].map((m) => year * 12 + q * 3 + m)
		const quarter = \`q\${year}\${q}\`

		return [
			...months.map<Period>((m) => ({
				id: \`m\${m}\`,
				label: monthLabel(m),
				kind: 'month',
				months: [m],
				quarter,
			})),
			{
				id: quarter,
				label: monthLabel(months[2]),
				kind: 'quarter' as const,
				months,
			},
		]
	}),
	{
		id: \`y\${year}\`,
		label: \`Y'\${26 + year}\`,
		kind: 'year',
		months: Array.from({ length: 12 }, (_, m) => year * 12 + m),
	},
])

export type ScLine = {
	id: string
	label: string
	bold?: boolean
	/** How a period value is made from months. */
	measure: 'money' | 'margin' | 'fte' | 'seniority'
	monthly: number[]
	subRows?: ScLine[]
}

const wave = (base: number, swing: number, seed: number) =>
	Array.from({ length: 24 }, (_, i) =>
		Math.max(0, base + swing * Math.sin((i + seed) / 2.1))
	)
const money = (id: string, label: string, monthly: number[]): ScLine => ({
	id,
	label,
	measure: 'money',
	monthly,
})

const scRevenueParts = [
	money('sc-rev-emp', 'Consulting revenue, employees', wave(118, 22, 1)),
	money('sc-rev-sub', 'Consulting revenue, subcontractors', wave(26, 8, 3)),
	money('sc-rev-fees', 'Discount, platform fees', wave(2.5, 1, 2)),
	money('sc-rev-exp', 'Reimbursable expenses', wave(3.4, 1, 5)),
]
const scCostParts = [
	money('sc-cost-used', 'Utilized cost', wave(62, 10, 2)),
	money('sc-cost-direct', 'Direct expenses', wave(4, 1.5, 1)),
	money('sc-cost-ai', 'AI inference costs', wave(1.2, 0.6, 4)),
	money('sc-cost-sub', 'Cost, subcontractors', wave(18, 5, 6)),
	money('sc-cost-bonus', 'Bonuses', wave(2, 1.5, 3)),
]
const scLoadParts = [
	money('sc-load-am', "Account manager's cost", wave(5, 1, 1)),
	money('sc-load-bu', 'BU cost re-allocation', wave(7, 2, 4)),
]
const addUp = (lines: ScLine[]) =>
	Array.from({ length: 24 }, (_, i) =>
		lines.reduce((s, l) => s + l.monthly[i], 0)
	)
const scRevenue = addUp(scRevenueParts)
const scCost = addUp(scCostParts)
const scLoad = addUp(scLoadParts)
const scGross = scRevenue.map((v, i) => v - scCost[i])
const scContingency = wave(3, 2, 2)
const scProfit = scGross.map((v, i) => v - scLoad[i] - scContingency[i])

const SC_LINES: ScLine[] = [
	{
		...money('sc-revenue', 'Total revenue', scRevenue),
		bold: true,
		subRows: scRevenueParts,
	},
	{
		...money('sc-cost', 'Cost of revenue', scCost),
		bold: true,
		subRows: scCostParts,
	},
	money('sc-gross', 'Gross profit / (loss)', scGross),
	{
		...money('sc-load', 'Load cost', scLoad),
		bold: true,
		subRows: scLoadParts,
	},
	money('sc-contingency', 'Contingency', scContingency),
	money('sc-profit', 'Account profit / (loss)', scProfit),
	{
		id: 'sc-margin',
		label: 'Account margin, %',
		measure: 'margin',
		monthly: [],
	},
	{ id: 'sc-fte', label: 'FTE', measure: 'fte', monthly: wave(7, 1.5, 2) },
	{
		id: 'sc-seniority',
		label: 'Seniority index',
		measure: 'seniority',
		monthly: wave(2.45, 0.08, 1),
	},
]

const avg = (values: number[]) =>
	values.reduce((s, v) => s + v, 0) / values.length
const pick = (line: ScLine, months: number[]) =>
	months.map((m) => line.monthly[m])

/** The value of a line for a period, as the app shows it. */
const periodValue = (
	line: ScLine,
	period: Period
): { text: string; color?: string } => {
	if (line.measure === 'margin') {
		const revenue = pick(SC_LINES[0], period.months).reduce((s, v) => s + v, 0)
		const profit = pick(SC_LINES[5], period.months).reduce((s, v) => s + v, 0)
		const margin = (profit / revenue) * 100
		const color =
			(margin >= 35 && SC.good) || (margin >= 15 && SC.amber) || SC.bad

		return { text: \`\${margin.toFixed(1)}%\`, color }
	}
	if (line.measure === 'fte')
		return {
			text: String(Math.round(avg(pick(line, period.months)) * 10) / 10),
		}
	if (line.measure === 'seniority') {
		const value = avg(pick(line, period.months))

		return { text: value.toFixed(2), color: value >= 2.4 ? SC.good : SC.amber }
	}
	const sum = pick(line, period.months).reduce((s, v) => s + v, 0)

	return {
		text: sum.toLocaleString('en-US', {
			minimumFractionDigits: 1,
			maximumFractionDigits: 1,
		}),
	}
}

/**
 * The app's +/− box: the quarter is a column chain (its months + the quarter
 * total, the total shown when collapsed) with its own toggle.
 */
const QuarterToggle = ({ label, expanded, toggle }: ChainToggleProps) => {
	const open = expanded

	return (
		<button
			type="button"
			data-quarter-toggle
			aria-label={\`\${open ? 'Hide' : 'Show'} months of \${label}\`}
			aria-expanded={open}
			onClick={(e) => {
				e.stopPropagation()
				toggle()
			}}
			style={{
				all: 'unset',
				position: 'absolute',
				right: 6,
				top: '50%',
				transform: 'translateY(-50%)',
				display: 'grid',
				placeItems: 'center',
				width: 14,
				height: 14,
				border: '1px solid #ACAFBF',
				borderRadius: 3,
				color: '#6C6F80',
				fontSize: 11,
				lineHeight: 1,
				cursor: 'pointer',
			}}
		>
			{open ? '−' : '+'}
		</button>
	)
}

const helper = createColumnHelper<typeof features, ScLine>()

const ScValue = ({
	row,
	column,
}: CellContext<typeof features, ScLine, string>) => {
	const period = PERIODS.find((p) => p.id === column.id) as Period
	const { text, color } = periodValue(row.original, period)

	return <span style={{ color }}>{text}</span>
}

const scenarioColumns = helper.columns([
	helper.accessor('label', {
		id: 'line',
		header: 'PARAMETERS, K USD',
		size: 380,
		meta: { grow: false },
		cell: ({ row }) => (
			<span style={{ fontWeight: row.original.bold ? 600 : 400 }}>
				{row.original.label}
			</span>
		),
	}),
	...PERIODS.map((p) =>
		helper.accessor((line) => periodValue(line, p).text, {
			id: p.id,
			header: p.label,
			size: p.kind === 'year' ? 150 : 120,
			meta: { align: 'center', label: p.label },
			cell: ScValue,
		})
	),
])

/** Each quarter: its three months, then the quarter total (shown collapsed). */
const SC_CHAINS: ColumnChain[] = PERIODS.filter(
	(p) => p.kind === 'quarter'
).map((q) => ({
	id: q.id,
	label: q.label,
	columns: [
		...PERIODS.filter((p) => p.quarter === q.id).map((p) => p.id),
		q.id,
	],
	primary: 'last',
	toggle: (props) => <QuarterToggle {...props} />,
}))

/** Scoped CSS: year totals grey, an open quarter tinted, the divider. */
const scenarioCss = (open: Record<string, boolean>) => {
	const years = PERIODS.filter((p) => p.kind === 'year').map((p) => p.id)
	const openIds = Object.keys(open).filter((q) => open[q])
	const openMonths = PERIODS.filter(
		(p) => p.kind === 'month' && openIds.includes(p.quarter as string)
	).map((p) => p.id)
	const sel = (ids: string[], attr: string) =>
		ids.map((id) => \`.scenario [\${attr}="\${id}"]\`).join(', ')

	return \`
.scenario [role="row"] > [data-pinned], .scenario [data-header-id="line"] { box-shadow: inset -1px 0 0 \${
		SC.divider
	}; }
.scenario [role="row"][data-bold="true"] { font-weight: 600; }
.scenario [data-header-id]:not([data-header-id="line"]) { justify-content: center; }
.scenario [data-header-id]:not([data-header-id="line"]) > button { flex: 1; justify-content: center; text-align: center; }
\${sel(years, 'data-header-id')}, \${sel(
		years,
		'data-column-id'
	)} { background: \${SC.total}; font-weight: 600; }
\${
	openMonths.length
		? \`\${sel(openMonths, 'data-header-id')} { background: \${
				SC.open
		  }; box-shadow: inset 0 -1px 0 \${SC.openLine}; }\`
		: ''
}
\${
	openIds.length
		? \`\${sel(openIds, 'data-header-id')} { background: \${SC.open}; color: \${
				SC.blue
		  }; box-shadow: inset 0 -2px 0 \${SC.blue}; }
\${sel(openIds, 'data-column-id')} { background: \${SC.open}; font-weight: 600; }\`
		: ''
}
\`
}

/** Lines on screen: the top lines plus the children of open ones. */
const scVisibleLines = (expanded: ExpandedState) =>
	SC_LINES.reduce(
		(n, line) =>
			n +
			1 +
			(expanded === true || (expanded as Record<string, boolean>)[line.id]
				? line.subRows?.length ?? 0
				: 0),
		0
	)

const BOLD_IDS = new Set(SC_LINES.filter((line) => line.bold).map((l) => l.id))
const isBold = (rowId: string) => BOLD_IDS.has(rowId)

export const ScenarioTable = ({
	rowHeight = 36,
	openQuarters,
	onOpenQuartersChange,
	expanded,
	onExpandedChange,
	...options
}: {
	theme: TableCoreTheme
	rowHeight?: number
	/** The open quarters: the chains' own state. */
	openQuarters: ChainExpandedState
	onOpenQuartersChange: OnChangeFn<ChainExpandedState>
	expanded: ExpandedState
	onExpandedChange: OnChangeFn<ExpandedState>
}) => {
	const theme = options.theme
	// As in the app, the card is as tall as its lines.
	const height =
		(theme.headerHeight ?? 52) + 8 + scVisibleLines(expanded) * rowHeight + 2

	return (
		<>
			<style>{scenarioCss(openQuarters)}</style>
			<section
				className="scenario"
				style={{
					display: 'flex',
					flexDirection: 'column',
					background: '#fff',
					borderRadius: 6,
					boxShadow:
						'0 1px 2px rgba(29, 30, 38, 0.1), 0 2px 10px rgba(29, 30, 38, 0.1)',
					fontFamily: "'Source Sans Pro', Arial, sans-serif",
					color: SC.text,
				}}
			>
				<header
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 8,
						padding: '10px 16px',
						fontSize: 16,
					}}
				>
					<span aria-hidden style={{ fontSize: 11, color: '#6C6F80' }}>
						⌄
					</span>
					Scenario
				</header>
				<div>
					<TableCore
						features={features}
						height={height}
						data={SC_LINES}
						columns={scenarioColumns}
						getRowId={(line) => line.id}
						getSubRows={(line) => line.subRows}
						theme={theme}
						rowHeight={rowHeight}
						chains={SC_CHAINS}
						enableColumnReorder={false}
						getRowProps={(rowId) => ({ 'data-bold': isBold(rowId) })}
						state={{ columnChainExpanded: openQuarters, expanded }}
						onColumnChainExpandedChange={onOpenQuartersChange}
						onExpandedChange={onExpandedChange}
						initialState={{ columnPinning: { start: ['line'], end: [] } }}
					/>
				</div>
			</section>
		</>
	)
}
`,ht=`import {
	TableCore,
	cellSelectionFeature,
	cellKeyboardFeature,
	columnPinningFeature,
	columnResizingFeature,
	columnSizingFeature,
	createColumnHelper,
	createExpandedRowModel,
	metaHelper,
	rowExpandingFeature,
	tableFeatures,
	type CellContext,
	type CoreColumnMeta,
	type ExpandedState,
	type OnChangeFn,
	type TableCoreTheme,
} from '@pnl-simulation/table-core'

// The look of an internal PnL table: months as columns, a bar in each number
// cell (its height and opacity follow the value), coloured expand arrows, grey
// child lines, a divider before January, a dark margin line. The line's own
// chevron is its cell (\`treeColumn="none"\`); the lines are v9's sub-rows.
const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	rowExpandingFeature,
	columnPinningFeature,
	columnSizingFeature,
	columnResizingFeature,
	expandedRowModel: createExpandedRowModel(),
	columnMeta: metaHelper<CoreColumnMeta>(),
})

const PNL = {
	text: '#474A59',
	child: '#F5F6FA',
	divider: '#CED0DB',
	green: '#67A300',
	red: '#FA4B4B',
	barPlus: '#B3D180',
	barMinus: '#FCA5A5',
	margin: '#474A59',
}

type Line = {
	id: string
	label: string
	/** main: bold top line; child: grey sub-line; margin: the dark line. */
	kind: 'main' | 'child' | 'margin'
	/** Left marker of a main line. */
	icon?: 'plus' | 'minus' | 'result' | 'none'
	/** Bar colours of the line (only main lines have bars). */
	bars?: { plus?: string; minus?: string }
	values: number[]
	children?: Line[]
}

const MONTHS = Array.from({ length: 24 }, (_, i) => {
	const date = new Date(2026, 9 + i, 1)

	return {
		id: \`m\${i}\`,
		label: date
			.toLocaleString('en', { month: 'short', year: '2-digit' })
			.replace(' ', '')
			.toUpperCase(),
		newYear: date.getMonth() === 0 && i > 0,
	}
})

/** Deterministic fake numbers in K USD: a base with a gentle wave. */
const series = (base: number, swing: number, seed: number) =>
	MONTHS.map((_, i) =>
		Math.max(
			0,
			Math.round((base + swing * Math.sin((i + seed) / 2.3)) * 10) / 10
		)
	)
const round = (v: number) => Math.round(v * 10) / 10
const sum = (lines: Line[]) =>
	MONTHS.map((_, i) => round(lines.reduce((s, l) => s + l.values[i], 0)))
const child = (id: string, label: string, values: number[]): Line => ({
	id,
	label,
	kind: 'child',
	values,
})

const revenueParts = [
	child('rev-emp', 'Consulting revenue, employees', series(182, 30, 1)),
	child('rev-sub', 'Consulting revenue, subcontractors', series(41, 12, 3)),
	child('rev-fees', 'Discount, platform fees', series(3.5, 1.5, 2)),
	child('rev-exp', 'Reimbursable expenses', series(5.2, 1.1, 5)),
]
const costParts = [
	child('cost-used', 'Utilized cost', series(118, 20, 2)),
	child('cost-idle', 'Un-utilized cost', series(9, 6, 4)),
	child('cost-direct', 'Direct expenses', series(6, 2, 1)),
	child('cost-sub', 'Cost, subcontractors', series(33, 9, 6)),
	child('cost-bonus', 'Bonuses', series(4, 3, 3)),
]
const loadParts = [
	child('load-am', "Account manager's cost", series(8, 2, 1)),
	child('load-bu', 'BU cost re-allocation', series(12, 3, 4)),
]
const revenue = sum(revenueParts)
const cost = sum(costParts)
const load = sum(loadParts)
const gross = MONTHS.map((_, i) => round(revenue[i] - cost[i]))
const contingency = series(4, 3, 2)
const account = MONTHS.map((_, i) => round(gross[i] - load[i] - contingency[i]))

const PLUS_BARS = { plus: PNL.barPlus }
const COST_BARS = { plus: PNL.barMinus }
const RESULT_BARS = { plus: PNL.barPlus, minus: PNL.barMinus }

const STATEMENT: Line[] = [
	{
		id: 'revenue',
		label: 'Revenue',
		kind: 'main',
		icon: 'plus',
		bars: PLUS_BARS,
		values: revenue,
		children: revenueParts,
	},
	{
		id: 'cost',
		label: 'Cost of revenue',
		kind: 'main',
		icon: 'minus',
		bars: COST_BARS,
		values: cost,
		children: costParts,
	},
	{
		id: 'gross',
		label: 'Gross profit / (loss)',
		kind: 'main',
		icon: 'result',
		bars: RESULT_BARS,
		values: gross,
	},
	{
		id: 'load',
		label: 'Load cost',
		kind: 'main',
		icon: 'minus',
		bars: COST_BARS,
		values: load,
		children: loadParts,
	},
	{
		id: 'contingency',
		label: 'Contingency',
		kind: 'main',
		icon: 'none',
		bars: COST_BARS,
		values: contingency,
	},
	{
		id: 'account',
		label: 'Account profit / (loss)',
		kind: 'main',
		icon: 'result',
		bars: RESULT_BARS,
		values: account,
	},
	{
		id: 'margin',
		label: 'Account margin, forecasted',
		kind: 'margin',
		values: MONTHS.map((_, i) => round((account[i] / revenue[i]) * 100)),
	},
]

/** Largest absolute value of a line: bars are relative to it. */
const peak = (line: Line) => Math.max(...line.values.map(Math.abs)) || 1

/** Green / red half circle, as the app's result lines. */
const HalfCircle = () => (
	<span
		aria-hidden
		style={{
			display: 'inline-block',
			width: 9,
			height: 9,
			marginRight: 8,
			borderRadius: '50%',
			background: \`linear-gradient(135deg, \${PNL.green} 50%, \${PNL.red} 50%)\`,
			flexShrink: 0,
		}}
	/>
)

/** Line name with its marker; main lines with children open and close. */
const LineCell = ({ row }: CellContext<typeof features, Line, string>) => {
	const line = row.original
	if (line.kind === 'child')
		return <span style={{ paddingLeft: 28 }}>{line.label}</span>
	const color = line.icon === 'plus' ? PNL.green : PNL.red
	const open = row.getIsExpanded()
	const arrow = open ? (
		<span
			aria-hidden
			style={{
				width: 0,
				height: 0,
				marginRight: 8,
				border: '5px solid transparent',
				borderRightColor: color,
				borderBottomColor: color,
				flexShrink: 0,
			}}
		/>
	) : (
		<span
			aria-hidden
			style={{
				width: 7,
				height: 7,
				margin: '0 10px 0 1px',
				borderTop: \`2px solid \${color}\`,
				borderRight: \`2px solid \${color}\`,
				transform: 'rotate(45deg)',
				flexShrink: 0,
			}}
		/>
	)
	const marker =
		(line.icon === 'result' && <HalfCircle />) ||
		(line.icon === 'none' && <span style={{ width: 17, flexShrink: 0 }} />) ||
		null
	const label = (
		<span
			style={{
				fontWeight: line.kind === 'margin' ? 600 : 700,
				fontSize: line.kind === 'margin' ? 15 : 14,
				overflow: 'hidden',
				textOverflow: 'ellipsis',
			}}
		>
			{line.label}
		</span>
	)

	return row.getCanExpand() ? (
		<button
			type="button"
			aria-label={\`\${open ? 'Collapse' : 'Expand'} \${line.label}\`}
			aria-expanded={open}
			onClick={row.getToggleExpandedHandler()}
			style={{
				all: 'unset',
				display: 'flex',
				alignItems: 'center',
				cursor: 'pointer',
				minWidth: 0,
			}}
		>
			{arrow}
			{label}
		</button>
	) : (
		<span style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
			{marker}
			{label}
		</span>
	)
}

/** 4px divider before January, as in the app. */
const YearDivider = () => (
	<span
		aria-hidden
		style={{
			position: 'absolute',
			left: 0,
			top: 0,
			bottom: 0,
			width: 4,
			background: PNL.divider,
		}}
	/>
)

const Amount = ({
	row,
	column,
}: CellContext<typeof features, Line, number>) => {
	const line = row.original
	const index = Number(column.id.slice(1))
	const value = line.values[index]
	const bar = value < 0 ? line.bars?.minus : line.bars?.plus
	const share = Math.abs(value) / peak(line)
	const text =
		line.kind === 'margin'
			? \`\${value.toFixed(1)}%\`
			: value.toLocaleString('en-US', {
					minimumFractionDigits: 1,
					maximumFractionDigits: 1,
			  })

	return (
		<>
			{MONTHS[index].newYear && <YearDivider />}
			{bar && (
				<span
					aria-hidden
					style={{
						position: 'absolute',
						left: MONTHS[index].newYear ? 4 : 0,
						right: 0,
						bottom: 0,
						height: share * 38,
						background: bar,
						opacity: share * 0.7,
					}}
				/>
			)}
			<span
				style={{
					position: 'relative',
					fontWeight: line.kind === 'main' ? 700 : 400,
					fontSize: line.kind === 'margin' ? 15 : 14,
				}}
			>
				{text}
			</span>
		</>
	)
}

const helper = createColumnHelper<typeof features, Line>()

const statementColumns = helper.columns([
	helper.accessor('label', {
		id: 'line',
		header: 'PARAMETER, K USD',
		size: 250,
		meta: { grow: false },
		cell: LineCell,
	}),
	...MONTHS.map((m) =>
		helper.accessor((line) => line.values[Number(m.id.slice(1))], {
			id: m.id,
			header: () => (
				<>
					{m.newYear && <YearDivider />}
					{m.label}
				</>
			),
			size: 80,
			cell: Amount,
			meta: { align: 'center', label: m.label },
		})
	),
])

// Line tints: data attributes from getRowProps + scoped CSS.
const STATEMENT_CSS = \`
.statement [role="row"][data-kind="child"],
.statement [role="row"][data-kind="child"] > [data-pinned] { background: \${PNL.child}; }
.statement [role="row"][data-kind="margin"],
.statement [role="row"][data-kind="margin"] > [data-pinned] { background: \${PNL.margin}; color: #fff; }
.statement [role="row"] > [data-pinned] { box-shadow: 17px 0 12px 2px rgba(29, 0, 38, 0.04); padding-left: 8px; }
.statement [data-header-id="line"] { padding-left: 24px; }
\`

/** The app's collapsible card around the table. */
const Card = ({ children }: { children: React.ReactNode }) => (
	<section
		style={{
			display: 'flex',
			flexDirection: 'column',
			borderRadius: 6,
			background: '#F5F6FA',
			filter:
				'drop-shadow(0px 2px 10px rgba(29, 30, 38, 0.1)) drop-shadow(0px 1px 2px rgba(29, 30, 38, 0.1))',
			fontFamily: "'Source Sans Pro', Arial, sans-serif",
			color: PNL.text,
		}}
	>
		<header
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: 6,
				padding: '10px 24px',
				background: '#fff',
				borderRadius: '6px 6px 0 0',
				fontSize: 16,
				fontWeight: 600,
			}}
		>
			<span aria-hidden style={{ fontSize: 12, color: '#6C6F80' }}>
				▼
			</span>
			Project discrete view, scenario-based
			<span
				aria-hidden
				title="Profit and loss by month, K USD"
				style={{
					display: 'inline-grid',
					placeItems: 'center',
					width: 16,
					height: 16,
					borderRadius: '50%',
					border: '1.5px solid #ACAFBF',
					color: '#ACAFBF',
					fontSize: 10,
					fontWeight: 700,
				}}
			>
				i
			</span>
		</header>
		<div
			style={{
				borderTop: \`1px solid \${PNL.divider}\`,
				borderRadius: '0 0 6px 6px',
				overflow: 'hidden',
			}}
		>
			{children}
		</div>
	</section>
)

/** Lines on screen: the top lines plus the children of open ones. */
const visibleLines = (expanded: ExpandedState) =>
	STATEMENT.reduce(
		(n, line) =>
			n +
			1 +
			(expanded === true || (expanded as Record<string, boolean>)[line.id]
				? line.children?.length ?? 0
				: 0),
		0
	)

const KINDS = new Map(
	STATEMENT.flatMap((line) => [line, ...(line.children ?? [])]).map((l) => [
		l.id,
		l.kind,
	])
)

export const StatementTable = ({
	rowHeight = 42,
	expanded,
	onExpandedChange,
	...options
}: {
	theme: TableCoreTheme
	rowHeight?: number
	expanded: ExpandedState
	onExpandedChange: OnChangeFn<ExpandedState>
}) => {
	const theme = options.theme
	// As in the app, the table is as tall as its lines (no empty space).
	const height =
		(theme.headerHeight ?? 52) + 8 + visibleLines(expanded) * rowHeight + 2

	return (
		<>
			<style>{STATEMENT_CSS}</style>
			<div className="statement">
				<Card>
					<TableCore
						features={features}
						data={STATEMENT}
						columns={statementColumns}
						getRowId={(line) => line.id}
						getSubRows={(line) => line.children}
						treeColumn="none"
						theme={theme}
						rowHeight={rowHeight}
						height={height}
						getRowProps={(rowId) => ({ 'data-kind': KINDS.get(rowId) })}
						state={{ expanded }}
						onExpandedChange={onExpandedChange}
						initialState={{ columnPinning: { start: ['line'], end: [] } }}
					/>
				</Card>
			</div>
		</>
	)
}
`,nn={ok:{label:"online",color:"#A3E635"},blocked:{label:"blocked",color:"#FB7185"},excluded:{label:"away",color:"#94A3B8"}},gt=({row:e})=>a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:10,minWidth:0},children:[a.jsx("span",{"aria-hidden":!0,style:{flexShrink:0,width:26,height:26,borderRadius:8,background:"linear-gradient(135deg, #F472B6, #7DD3FC)",color:"#0A0F1C",fontSize:11,fontWeight:700,display:"grid",placeItems:"center"},children:e.original.name.split(" ").map(n=>n[0]).join("")}),a.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:e.original.name})]}),bt=({row:e})=>{const{label:n,color:t}=nn[e.original.state];return a.jsxs("span",{"data-status":n,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"2px 10px",borderRadius:999,border:`1px solid ${t}`,color:t,fontSize:12,boxShadow:`0 0 12px ${t}55`},children:[a.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:t,boxShadow:`0 0 8px ${t}`}}),n]})},ft=({row:e})=>{const n=20+e.original.rate*7%80;return a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:10,width:"100%"},children:[a.jsx("span",{style:{flex:1,height:6,borderRadius:3,background:"#1C2540",overflow:"hidden"},children:a.jsx("span",{style:{display:"block",width:`${n}%`,height:"100%",background:"linear-gradient(90deg, #7DD3FC, #F472B6)"}})}),a.jsxs("span",{style:{width:36,textAlign:"right",fontSize:12},children:[n,"%"]})]})},xt=Q({cellSelectionFeature:be,cellKeyboardFeature:ge,rowSelectionFeature:In,rowSortingFeature:Hn,columnGroupingFeature:_n,rowExpandingFeature:he,groupRowsFeature:On,columnOrderingFeature:Xe,columnPinningFeature:me,columnVisibilityFeature:Je,columnSizingFeature:J,columnResizingFeature:pe,groupedRowModel:qn(),expandedRowModel:fe(),sortedRowModel:Un(),sortFns:Dn,columnMeta:X()}),l=Z(),yt=l.columns([l.accessor("name",{header:"Name",size:190}),l.accessor("team",{header:"Team",size:120}),l.accessor("role",{header:"Role",size:150}),l.accessor("country",{header:"Country",size:120}),l.accessor("city",{header:"City",size:120}),l.accessor("rate",{header:"Rate",size:90,meta:{align:"right"}}),l.accessor("start",{header:"Start",size:110})]),St=l.columns([Nn(l),l.accessor("name",{id:"name",header:"Operator",size:150,cell:gt}),l.accessor(e=>nn[e.state].label,{id:"status",header:"Signal",size:100,cell:bt}),l.accessor("team",{header:"Crew",size:100}),l.accessor("city",{header:"Base",size:100}),l.accessor("rate",{id:"load",header:"Load",size:130,cell:ft}),l.accessor("rate",{header:"Rate",size:90,meta:{align:"right"}}),l.accessor("start",{header:"Since",size:120,meta:{align:"right"}})]),wt=e=>a.jsx(Ln,{table:e,controls:[jn(),zn(),$n()]}),Ct=e=>a.jsx(Mn,{table:e}),kt=e=>[{id:"ping",label:`Ping ${e.length}`,onClick:()=>{}},{id:"mute",label:"Mute",onClick:()=>{}}],vt=e=>a.jsx(Bn,{table:e,getActions:kt}),tn=({rows:e,look:n,rowHeight:t=48,...o})=>{const r=o.theme;return a.jsx(V,{features:xt,data:e,columns:n==="neon"?St:yt,getRowId:s=>s.id,theme:r,rowHeight:t,autoResetExpanded:!1,initialState:{columnPinning:{start:n==="neon"?[An,"name"]:["name"],end:[]},expanded:!0},columnMenu:Pn(),toolbar:wt,statusBar:Ct,bulkBar:n==="neon"?vt:void 0})},Ft=Ze(a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),Et=Ze(a.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),Rt=ee("span",{shouldForwardProp:en})({position:"relative",display:"flex"}),Tt=ee(Ft)({transform:"scale(1)"}),At=ee(Et)(({theme:e,ownerState:n})=>E({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function an(e){const{checked:n=!1,classes:t={},fontSize:o}=e,r=E({},e,{checked:n});return a.jsxs(Rt,{className:t.root,ownerState:r,children:[a.jsx(Tt,{fontSize:o,className:t.background,ownerState:r}),a.jsx(At,{fontSize:o,className:t.dot,ownerState:r})]})}const Pt=h.createContext(void 0);function Bt(){return h.useContext(Pt)}function Mt(e){return Wn("MuiRadio",e)}const Ee=Gn("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),Lt=["checked","checkedIcon","color","icon","name","onChange","size","className"],jt=e=>{const{classes:n,color:t,size:o}=e,r={root:["root",`color${K(t)}`,o!=="medium"&&`size${K(o)}`]};return E({},n,Jn(r,Mt,n))},zt=ee(Xn,{shouldForwardProp:e=>en(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.size!=="medium"&&n[`size${K(t.size)}`],n[`color${K(t.color)}`]]}})(({theme:e,ownerState:n})=>E({color:(e.vars||e).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${n.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[n.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Zn.alpha(n.color==="default"?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${Ee.checked}`]:{color:(e.vars||e).palette[n.color].main}},{[`&.${Ee.disabled}`]:{color:(e.vars||e).palette.action.disabled}}));function $t(e,n){return typeof n=="object"&&n!==null?e===n:String(e)===String(n)}const Re=a.jsx(an,{checked:!0}),Te=a.jsx(an,{}),Nt=h.forwardRef(function(n,t){var o,r;const s=Yn({props:n,name:"MuiRadio"}),{checked:i,checkedIcon:m=Re,color:d="primary",icon:C=Te,name:q,onChange:ae,size:oe="medium",className:vn}=s,Fn=Kn(s,Lt),ve=E({},s,{color:d,size:oe}),Fe=jt(ve),M=Bt();let re=i;const En=Vn(ae,M&&M.onChange);let se=q;return M&&(typeof re>"u"&&(re=$t(M.value,s.value)),typeof se>"u"&&(se=M.name)),a.jsx(zt,E({type:"radio",icon:h.cloneElement(C,{fontSize:(o=Te.props.fontSize)!=null?o:oe}),checkedIcon:h.cloneElement(m,{fontSize:(r=Re.props.fontSize)!=null?r:oe}),ownerState:ve,classes:Fe,name:se,checked:re,onChange:En,ref:t,className:Qn(Fe.root,vn)},Fn))}),Dt=Q({columnSizingFeature:J,tableMeta:X()}),Ot=({row:e,table:n})=>{var r,s;const t=(r=n.options.meta)==null?void 0:r.picked,o=(s=n.options.meta)==null?void 0:s.pick;return a.jsxs("div",{onClick:()=>o==null?void 0:o(e.id),style:{display:"flex",alignItems:"center",gap:4,cursor:"pointer",minWidth:0},children:[a.jsx(Nt,{size:"small",checked:t===e.id,onChange:()=>o==null?void 0:o(e.id),inputProps:{"aria-label":`Pick ${e.original.name}`}}),a.jsx("span",{style:{color:"#008ABD",overflow:"hidden",textOverflow:"ellipsis"},children:e.original.name})]})},k=Z(),_t=k.columns([k.accessor("name",{header:"Person",size:230,cell:Ot}),k.accessor("role",{header:"Job function",size:160}),k.accessor("level",{header:"Level",size:90}),k.accessor("team",{header:"Skill",size:120}),k.accessor(e=>[e.country,e.tier,e.city].join(", "),{id:"location",header:"Country, tier, city",size:220})]),Ht=({rows:e,rowHeight:n=44,picked:t,pick:o,...r})=>{const s=r.theme;return a.jsx(V,{features:Dt,data:e,columns:_t,getRowId:i=>i.id,theme:s,rowHeight:n,meta:{picked:t,pick:o},getRowProps:i=>({"data-picked":i===t}),height:"auto"})},It=Q({cellSelectionFeature:be,cellKeyboardFeature:ge,rowExpandingFeature:he,columnOrderingFeature:Xe,columnPinningFeature:me,columnVisibilityFeature:Je,columnChainsFeature:et,columnSizingFeature:J,columnResizingFeature:pe,expandedRowModel:fe(),columnMeta:X()}),u={text:"#303240",divider:"#E1E3EB",total:"#F5F6FA",open:"#FAFAFC",openLine:"#C4EAF5",blue:"#009ECC",good:"#558A00",amber:"#E2A915",bad:"#CC2929"},Ae=e=>new Date(2026,e,1).toLocaleString("en",{month:"short",year:"2-digit"}).replace(" ","").toUpperCase(),R=[0,1].flatMap(e=>[...[0,1,2,3].flatMap(n=>{const t=[0,1,2].map(r=>e*12+n*3+r),o=`q${e}${n}`;return[...t.map(r=>({id:`m${r}`,label:Ae(r),kind:"month",months:[r],quarter:o})),{id:o,label:Ae(t[2]),kind:"quarter",months:t}]}),{id:`y${e}`,label:`Y'${26+e}`,kind:"year",months:Array.from({length:12},(n,t)=>e*12+t)}]),p=(e,n,t)=>Array.from({length:24},(o,r)=>Math.max(0,e+n*Math.sin((r+t)/2.1))),c=(e,n,t)=>({id:e,label:n,measure:"money",monthly:t}),on=[c("sc-rev-emp","Consulting revenue, employees",p(118,22,1)),c("sc-rev-sub","Consulting revenue, subcontractors",p(26,8,3)),c("sc-rev-fees","Discount, platform fees",p(2.5,1,2)),c("sc-rev-exp","Reimbursable expenses",p(3.4,1,5))],rn=[c("sc-cost-used","Utilized cost",p(62,10,2)),c("sc-cost-direct","Direct expenses",p(4,1.5,1)),c("sc-cost-ai","AI inference costs",p(1.2,.6,4)),c("sc-cost-sub","Cost, subcontractors",p(18,5,6)),c("sc-cost-bonus","Bonuses",p(2,1.5,3))],sn=[c("sc-load-am","Account manager's cost",p(5,1,1)),c("sc-load-bu","BU cost re-allocation",p(7,2,4))],Se=e=>Array.from({length:24},(n,t)=>e.reduce((o,r)=>o+r.monthly[t],0)),ln=Se(on),cn=Se(rn),dn=Se(sn),un=ln.map((e,n)=>e-cn[n]),pn=p(3,2,2),Ut=un.map((e,n)=>e-dn[n]-pn[n]),H=[{...c("sc-revenue","Total revenue",ln),bold:!0,subRows:on},{...c("sc-cost","Cost of revenue",cn),bold:!0,subRows:rn},c("sc-gross","Gross profit / (loss)",un),{...c("sc-load","Load cost",dn),bold:!0,subRows:sn},c("sc-contingency","Contingency",pn),c("sc-profit","Account profit / (loss)",Ut),{id:"sc-margin",label:"Account margin, %",measure:"margin",monthly:[]},{id:"sc-fte",label:"FTE",measure:"fte",monthly:p(7,1.5,2)},{id:"sc-seniority",label:"Seniority index",measure:"seniority",monthly:p(2.45,.08,1)}],Pe=e=>e.reduce((n,t)=>n+t,0)/e.length,L=(e,n)=>n.map(t=>e.monthly[t]),mn=(e,n)=>{if(e.measure==="margin"){const o=L(H[0],n.months).reduce((m,d)=>m+d,0),s=L(H[5],n.months).reduce((m,d)=>m+d,0)/o*100,i=s>=35&&u.good||s>=15&&u.amber||u.bad;return{text:`${s.toFixed(1)}%`,color:i}}if(e.measure==="fte")return{text:String(Math.round(Pe(L(e,n.months))*10)/10)};if(e.measure==="seniority"){const o=Pe(L(e,n.months));return{text:o.toFixed(2),color:o>=2.4?u.good:u.amber}}return{text:L(e,n.months).reduce((o,r)=>o+r,0).toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1})}},qt=({label:e,expanded:n,toggle:t})=>{const o=n;return a.jsx("button",{type:"button","data-quarter-toggle":!0,"aria-label":`${o?"Hide":"Show"} months of ${e}`,"aria-expanded":o,onClick:r=>{r.stopPropagation(),t()},style:{all:"unset",position:"absolute",right:6,top:"50%",transform:"translateY(-50%)",display:"grid",placeItems:"center",width:14,height:14,border:"1px solid #ACAFBF",borderRadius:3,color:"#6C6F80",fontSize:11,lineHeight:1,cursor:"pointer"},children:o?"−":"+"})},ie=Z(),Wt=({row:e,column:n})=>{const t=R.find(s=>s.id===n.id),{text:o,color:r}=mn(e.original,t);return a.jsx("span",{style:{color:r},children:o})},Gt=ie.columns([ie.accessor("label",{id:"line",header:"PARAMETERS, K USD",size:380,meta:{grow:!1},cell:({row:e})=>a.jsx("span",{style:{fontWeight:e.original.bold?600:400},children:e.original.label})}),...R.map(e=>ie.accessor(n=>mn(n,e).text,{id:e.id,header:e.label,size:e.kind==="year"?150:120,meta:{align:"center",label:e.label},cell:Wt}))]),Yt=R.filter(e=>e.kind==="quarter").map(e=>({id:e.id,label:e.label,columns:[...R.filter(n=>n.quarter===e.id).map(n=>n.id),e.id],primary:"last",toggle:n=>a.jsx(qt,{...n})})),Kt=e=>{const n=R.filter(s=>s.kind==="year").map(s=>s.id),t=Object.keys(e).filter(s=>e[s]),o=R.filter(s=>s.kind==="month"&&t.includes(s.quarter)).map(s=>s.id),r=(s,i)=>s.map(m=>`.scenario [${i}="${m}"]`).join(", ");return`
.scenario [role="row"] > [data-pinned], .scenario [data-header-id="line"] { box-shadow: inset -1px 0 0 ${u.divider}; }
.scenario [role="row"][data-bold="true"] { font-weight: 600; }
.scenario [data-header-id]:not([data-header-id="line"]) { justify-content: center; }
.scenario [data-header-id]:not([data-header-id="line"]) > button { flex: 1; justify-content: center; text-align: center; }
${r(n,"data-header-id")}, ${r(n,"data-column-id")} { background: ${u.total}; font-weight: 600; }
${o.length?`${r(o,"data-header-id")} { background: ${u.open}; box-shadow: inset 0 -1px 0 ${u.openLine}; }`:""}
${t.length?`${r(t,"data-header-id")} { background: ${u.open}; color: ${u.blue}; box-shadow: inset 0 -2px 0 ${u.blue}; }
${r(t,"data-column-id")} { background: ${u.open}; font-weight: 600; }`:""}
`},Vt=e=>H.reduce((n,t)=>{var o;return n+1+(e===!0||e[t.id]?((o=t.subRows)==null?void 0:o.length)??0:0)},0),Qt=new Set(H.filter(e=>e.bold).map(e=>e.id)),Jt=e=>Qt.has(e),Xt=({rowHeight:e=36,openQuarters:n,onOpenQuartersChange:t,expanded:o,onExpandedChange:r,...s})=>{const i=s.theme,m=(i.headerHeight??52)+8+Vt(o)*e+2;return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Kt(n)}),a.jsxs("section",{className:"scenario",style:{display:"flex",flexDirection:"column",background:"#fff",borderRadius:6,boxShadow:"0 1px 2px rgba(29, 30, 38, 0.1), 0 2px 10px rgba(29, 30, 38, 0.1)",fontFamily:"'Source Sans Pro', Arial, sans-serif",color:u.text},children:[a.jsxs("header",{style:{display:"flex",alignItems:"center",gap:8,padding:"10px 16px",fontSize:16},children:[a.jsx("span",{"aria-hidden":!0,style:{fontSize:11,color:"#6C6F80"},children:"⌄"}),"Scenario"]}),a.jsx("div",{children:a.jsx(V,{features:It,height:m,data:H,columns:Gt,getRowId:d=>d.id,getSubRows:d=>d.subRows,theme:i,rowHeight:e,chains:Yt,enableColumnReorder:!1,getRowProps:d=>({"data-bold":Jt(d)}),state:{columnChainExpanded:n,expanded:o},onColumnChainExpandedChange:t,onExpandedChange:r,initialState:{columnPinning:{start:["line"],end:[]}}})})]})]})},Zt=Q({cellSelectionFeature:be,cellKeyboardFeature:ge,rowExpandingFeature:he,columnPinningFeature:me,columnSizingFeature:J,columnResizingFeature:pe,expandedRowModel:fe(),columnMeta:X()}),g={text:"#474A59",child:"#F5F6FA",divider:"#CED0DB",green:"#67A300",red:"#FA4B4B",barPlus:"#B3D180",barMinus:"#FCA5A5",margin:"#474A59"},y=Array.from({length:24},(e,n)=>{const t=new Date(2026,9+n,1);return{id:`m${n}`,label:t.toLocaleString("en",{month:"short",year:"2-digit"}).replace(" ","").toUpperCase(),newYear:t.getMonth()===0&&n>0}}),b=(e,n,t)=>y.map((o,r)=>Math.max(0,Math.round((e+n*Math.sin((r+t)/2.3))*10)/10)),te=e=>Math.round(e*10)/10,we=e=>y.map((n,t)=>te(e.reduce((o,r)=>o+r.values[t],0))),x=(e,n,t)=>({id:e,label:n,kind:"child",values:t}),hn=[x("rev-emp","Consulting revenue, employees",b(182,30,1)),x("rev-sub","Consulting revenue, subcontractors",b(41,12,3)),x("rev-fees","Discount, platform fees",b(3.5,1.5,2)),x("rev-exp","Reimbursable expenses",b(5.2,1.1,5))],gn=[x("cost-used","Utilized cost",b(118,20,2)),x("cost-idle","Un-utilized cost",b(9,6,4)),x("cost-direct","Direct expenses",b(6,2,1)),x("cost-sub","Cost, subcontractors",b(33,9,6)),x("cost-bonus","Bonuses",b(4,3,3))],bn=[x("load-am","Account manager's cost",b(8,2,1)),x("load-bu","BU cost re-allocation",b(12,3,4))],de=we(hn),fn=we(gn),xn=we(bn),yn=y.map((e,n)=>te(de[n]-fn[n])),Sn=b(4,3,2),Be=y.map((e,n)=>te(yn[n]-xn[n]-Sn[n])),ea={plus:g.barPlus},le={plus:g.barMinus},Me={plus:g.barPlus,minus:g.barMinus},Ce=[{id:"revenue",label:"Revenue",kind:"main",icon:"plus",bars:ea,values:de,children:hn},{id:"cost",label:"Cost of revenue",kind:"main",icon:"minus",bars:le,values:fn,children:gn},{id:"gross",label:"Gross profit / (loss)",kind:"main",icon:"result",bars:Me,values:yn},{id:"load",label:"Load cost",kind:"main",icon:"minus",bars:le,values:xn,children:bn},{id:"contingency",label:"Contingency",kind:"main",icon:"none",bars:le,values:Sn},{id:"account",label:"Account profit / (loss)",kind:"main",icon:"result",bars:Me,values:Be},{id:"margin",label:"Account margin, forecasted",kind:"margin",values:y.map((e,n)=>te(Be[n]/de[n]*100))}],na=e=>Math.max(...e.values.map(Math.abs))||1,ta=()=>a.jsx("span",{"aria-hidden":!0,style:{display:"inline-block",width:9,height:9,marginRight:8,borderRadius:"50%",background:`linear-gradient(135deg, ${g.green} 50%, ${g.red} 50%)`,flexShrink:0}}),aa=({row:e})=>{const n=e.original;if(n.kind==="child")return a.jsx("span",{style:{paddingLeft:28},children:n.label});const t=n.icon==="plus"?g.green:g.red,o=e.getIsExpanded(),r=o?a.jsx("span",{"aria-hidden":!0,style:{width:0,height:0,marginRight:8,border:"5px solid transparent",borderRightColor:t,borderBottomColor:t,flexShrink:0}}):a.jsx("span",{"aria-hidden":!0,style:{width:7,height:7,margin:"0 10px 0 1px",borderTop:`2px solid ${t}`,borderRight:`2px solid ${t}`,transform:"rotate(45deg)",flexShrink:0}}),s=n.icon==="result"&&a.jsx(ta,{})||n.icon==="none"&&a.jsx("span",{style:{width:17,flexShrink:0}})||null,i=a.jsx("span",{style:{fontWeight:n.kind==="margin"?600:700,fontSize:n.kind==="margin"?15:14,overflow:"hidden",textOverflow:"ellipsis"},children:n.label});return e.getCanExpand()?a.jsxs("button",{type:"button","aria-label":`${o?"Collapse":"Expand"} ${n.label}`,"aria-expanded":o,onClick:e.getToggleExpandedHandler(),style:{all:"unset",display:"flex",alignItems:"center",cursor:"pointer",minWidth:0},children:[r,i]}):a.jsxs("span",{style:{display:"flex",alignItems:"center",minWidth:0},children:[s,i]})},wn=()=>a.jsx("span",{"aria-hidden":!0,style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:g.divider}}),oa=({row:e,column:n})=>{var d,C;const t=e.original,o=Number(n.id.slice(1)),r=t.values[o],s=r<0?(d=t.bars)==null?void 0:d.minus:(C=t.bars)==null?void 0:C.plus,i=Math.abs(r)/na(t),m=t.kind==="margin"?`${r.toFixed(1)}%`:r.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1});return a.jsxs(a.Fragment,{children:[y[o].newYear&&a.jsx(wn,{}),s&&a.jsx("span",{"aria-hidden":!0,style:{position:"absolute",left:y[o].newYear?4:0,right:0,bottom:0,height:i*38,background:s,opacity:i*.7}}),a.jsx("span",{style:{position:"relative",fontWeight:t.kind==="main"?700:400,fontSize:t.kind==="margin"?15:14},children:m})]})},ce=Z(),ra=ce.columns([ce.accessor("label",{id:"line",header:"PARAMETER, K USD",size:250,meta:{grow:!1},cell:aa}),...y.map(e=>ce.accessor(n=>n.values[Number(e.id.slice(1))],{id:e.id,header:()=>a.jsxs(a.Fragment,{children:[e.newYear&&a.jsx(wn,{}),e.label]}),size:80,cell:oa,meta:{align:"center",label:e.label}}))]),sa=`
.statement [role="row"][data-kind="child"],
.statement [role="row"][data-kind="child"] > [data-pinned] { background: ${g.child}; }
.statement [role="row"][data-kind="margin"],
.statement [role="row"][data-kind="margin"] > [data-pinned] { background: ${g.margin}; color: #fff; }
.statement [role="row"] > [data-pinned] { box-shadow: 17px 0 12px 2px rgba(29, 0, 38, 0.04); padding-left: 8px; }
.statement [data-header-id="line"] { padding-left: 24px; }
`,ia=({children:e})=>a.jsxs("section",{style:{display:"flex",flexDirection:"column",borderRadius:6,background:"#F5F6FA",filter:"drop-shadow(0px 2px 10px rgba(29, 30, 38, 0.1)) drop-shadow(0px 1px 2px rgba(29, 30, 38, 0.1))",fontFamily:"'Source Sans Pro', Arial, sans-serif",color:g.text},children:[a.jsxs("header",{style:{display:"flex",alignItems:"center",gap:6,padding:"10px 24px",background:"#fff",borderRadius:"6px 6px 0 0",fontSize:16,fontWeight:600},children:[a.jsx("span",{"aria-hidden":!0,style:{fontSize:12,color:"#6C6F80"},children:"▼"}),"Project discrete view, scenario-based",a.jsx("span",{"aria-hidden":!0,title:"Profit and loss by month, K USD",style:{display:"inline-grid",placeItems:"center",width:16,height:16,borderRadius:"50%",border:"1.5px solid #ACAFBF",color:"#ACAFBF",fontSize:10,fontWeight:700},children:"i"})]}),a.jsx("div",{style:{borderTop:`1px solid ${g.divider}`,borderRadius:"0 0 6px 6px",overflow:"hidden"},children:e})]}),la=e=>Ce.reduce((n,t)=>{var o;return n+1+(e===!0||e[t.id]?((o=t.children)==null?void 0:o.length)??0:0)},0),ca=new Map(Ce.flatMap(e=>[e,...e.children??[]]).map(e=>[e.id,e.kind])),da=({rowHeight:e=42,expanded:n,onExpandedChange:t,...o})=>{const r=o.theme,s=(r.headerHeight??52)+8+la(n)*e+2;return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:sa}),a.jsx("div",{className:"statement",children:a.jsx(ia,{children:a.jsx(V,{features:Zt,data:Ce,columns:ra,getRowId:i=>i.id,getSubRows:i=>i.children,treeColumn:"none",theme:r,rowHeight:e,height:s,getRowProps:i=>({"data-kind":ca.get(i)}),state:{expanded:n},onExpandedChange:t,initialState:{columnPinning:{start:["line"],end:[]}}})})})]})},W=e=>Object.values(e)[0],w={default:W(Object.assign({"./employee-table.tsx":ut})),picker:W(Object.assign({"./picker-table.tsx":pt})),scenario:W(Object.assign({"./scenario-table.tsx":mt})),statement:W(Object.assign({"./statement-table.tsx":ht}))},Cn=10,U=e=>!e.frameBorder||e.frameBorder==="none",ua=({theme:e,rowHeight:n,hint:t})=>{const o=h.useMemo(()=>xe(Cn),[]);return a.jsx(I,{hint:t,card:U(e),children:a.jsx(tn,{rows:o,theme:e,rowHeight:n,look:"default"})})},pa=40,ma="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Space+Grotesk:wght@400;600;700&display=swap",kn=({theme:e,rowHeight:n,hint:t})=>{const o=h.useMemo(()=>xe(Cn),[]);return a.jsxs(I,{hint:t,card:U(e),children:[a.jsx("link",{rel:"stylesheet",href:ma}),a.jsx("div",{style:{height:"100%",boxSizing:"border-box",padding:pa/2,borderRadius:20,background:"radial-gradient(1200px 500px at 10% -10%, #3B1D4A 0%, transparent 60%), radial-gradient(900px 500px at 110% 120%, #0B3B55 0%, transparent 55%), #05070D"},children:a.jsx(tn,{rows:o,theme:e,rowHeight:n,look:"neon"})})]})},v={bg:"#F5F6FA",line:"#E1E3EB",text:"#303240",button:{height:32,padding:"0 16px",borderRadius:4,font:"inherit",fontWeight:600,cursor:"pointer"}},ha=`
.picker [role="row"][data-picked="true"],
.picker [role="row"][data-picked="true"] > [data-pinned] { background: var(--tc-row-selected); }
`,ga=({theme:e,rowHeight:n,hint:t})=>{const o=h.useMemo(()=>xe(9),[]),[r,s]=h.useState(""),[i,m]=h.useState(""),d=C=>{var q;return(q=o.find(ae=>ae.id===C))==null?void 0:q.name};return a.jsx(I,{hint:t,card:U(e),children:a.jsx("div",{style:{display:"flex",justifyContent:"flex-end",height:"100%",background:"rgba(48, 50, 64, 0.32)",borderRadius:6},children:a.jsxs("aside",{"aria-label":"Side panel",style:{display:"flex",flexDirection:"column",width:"min(900px, 100%)",background:v.bg,fontFamily:"'Source Sans Pro', Arial, sans-serif",color:v.text},children:[a.jsx("header",{style:{padding:"20px 24px",background:"#fff",borderBottom:`1px solid ${v.line}`,fontSize:20,fontWeight:600},children:"Choose a person"}),a.jsx("style",{children:ha}),a.jsx("div",{className:"picker",style:{flex:1,minHeight:0,padding:16},children:a.jsx(Ht,{rows:o,theme:e,rowHeight:n,picked:r,pick:s})}),a.jsxs("footer",{style:{display:"flex",alignItems:"center",gap:12,padding:"14px 24px",background:"#fff",borderTop:`1px solid ${v.line}`},children:[a.jsx("span",{"data-saved":!0,style:{color:"#6C6F80",marginRight:"auto"},children:i?`Saved: ${d(i)}`:"Nobody saved yet"}),a.jsx("button",{type:"button",onClick:()=>s(i),style:{...v.button,border:"1px solid #009ECC",background:"#fff",color:"#009ECC"},children:"Cancel"}),a.jsx("button",{type:"button",disabled:!r,onClick:()=>m(r),style:{...v.button,border:"none",background:r?"#009ECC":"#C4EAF5",color:"#fff"},children:"Save"})]})]})})})},ba=({theme:e,rowHeight:n,hint:t})=>{const[o,r]=h.useState({}),[s,i]=h.useState({});return a.jsx(I,{hint:t,card:U(e),children:a.jsx(Xt,{theme:e,rowHeight:n,openQuarters:o,onOpenQuartersChange:r,expanded:s,onExpandedChange:i})})},fa=({theme:e,rowHeight:n,hint:t})=>{const[o,r]=h.useState({});return a.jsx(I,{hint:t,card:U(e),children:a.jsx(da,{theme:e,rowHeight:n,expanded:o,onExpandedChange:r})})},xa=`// A theme is a plain object of tokens; unset keys keep the default look.
import type { TableCoreTheme } from '@pnl-simulation/table-core'

/** Side-panel picker, as the app's candidate selection: calm, compact. */
export const pickerTheme: TableCoreTheme = {
	headerHeight: 44,
	headerBg: '#FFFFFF',
	headerText: '#6C6F80',
	headerWeight: '600',
	headerLetterSpacing: '0.02em',
	rowBorder: '#EAEDF3',
	rowHover: '#F5F6FA',
	rowSelected: '#E1F4FA',
	frameBorder: '1px solid #E1E3EB',
	radius: '6px',
}

/** PnL (scenario results), as the app's current PnL table: white, airy, 36px. */
export const scenarioTheme: TableCoreTheme = {
	headerHeight: 36,
	headerBg: '#FFFFFF',
	headerHover: '#F5F6FA',
	headerText: '#303240',
	headerWeight: '600',
	headerBorder: '#E1E3EB',
	text: '#303240',
	rowBorder: '#FFFFFF',
	rowHover: '#FAFAFC',
}

/** Internal PnL, as the app's table: grey compact header, dense numbers. */
export const statementTheme: TableCoreTheme = {
	headerHeight: 34,
	headerBg: '#EBEDF5',
	headerHover: '#E1E3EB',
	headerText: '#303240',
	headerWeight: '600',
	headerTransform: 'none',
	headerBorder: '#E1E3EB',
	text: '#474A59',
	rowBorder: '#E1E3EB',
	rowHover: '#FAFAFC',
	cellPaddingX: '10px',
}

/** Nothing to do with the default look: dark, neon, monospace numbers. */
export const neonTheme: TableCoreTheme = {
	font: "'Space Grotesk', system-ui, sans-serif",
	numberFont: "'JetBrains Mono', ui-monospace, monospace",
	fontSize: '14px',
	headerFontSize: '11px',
	headerHeight: 46,
	text: '#E6EDF7',
	secondary: '#94A3B8',
	muted: '#64748B',
	icon: '#94A3B8',
	iconActive: '#F1F5F9',
	checkbox: '#64748B',
	headerBg: '#0E1424',
	headerHover: '#18203A',
	headerText: '#7DD3FC',
	headerWeight: '600',
	headerLetterSpacing: '0.14em',
	headerBorder: '#243049',
	bodyBg: '#0A0F1C',
	rowAltBg: '#0D1322',
	rowBorder: '#161E33',
	rowHover: '#162038',
	rowSelected: 'rgba(244, 114, 182, 0.16)',
	groupBg: '#111A2E',
	groupBorder: '#243049',
	accent: '#F472B6',
	accentSoft: 'rgba(244, 114, 182, 0.14)',
	chainLine: 'rgba(244, 114, 182, 0.35)',
	bulkBg: '#F472B6',
	bulkText: '#0A0F1C',
	bulkHover: '#F9A8D4',
	frameBorder: '1px solid #243049',
	radius: '16px',
}

export const PRESETS = {
	default: {},
	picker: pickerTheme,
	scenario: scenarioTheme,
	statement: statementTheme,
	neon: neonTheme,
} satisfies Record<string, TableCoreTheme>
`,ya={headerHeight:44,headerBg:"#FFFFFF",headerText:"#6C6F80",headerWeight:"600",headerLetterSpacing:"0.02em",rowBorder:"#EAEDF3",rowHover:"#F5F6FA",rowSelected:"#E1F4FA",frameBorder:"1px solid #E1E3EB",radius:"6px"},Sa={headerHeight:36,headerBg:"#FFFFFF",headerHover:"#F5F6FA",headerText:"#303240",headerWeight:"600",headerBorder:"#E1E3EB",text:"#303240",rowBorder:"#FFFFFF",rowHover:"#FAFAFC"},wa={headerHeight:34,headerBg:"#EBEDF5",headerHover:"#E1E3EB",headerText:"#303240",headerWeight:"600",headerTransform:"none",headerBorder:"#E1E3EB",text:"#474A59",rowBorder:"#E1E3EB",rowHover:"#FAFAFC",cellPaddingX:"10px"},Ca={font:"'Space Grotesk', system-ui, sans-serif",numberFont:"'JetBrains Mono', ui-monospace, monospace",fontSize:"14px",headerFontSize:"11px",headerHeight:46,text:"#E6EDF7",secondary:"#94A3B8",muted:"#64748B",icon:"#94A3B8",iconActive:"#F1F5F9",checkbox:"#64748B",headerBg:"#0E1424",headerHover:"#18203A",headerText:"#7DD3FC",headerWeight:"600",headerLetterSpacing:"0.14em",headerBorder:"#243049",bodyBg:"#0A0F1C",rowAltBg:"#0D1322",rowBorder:"#161E33",rowHover:"#162038",rowSelected:"rgba(244, 114, 182, 0.16)",groupBg:"#111A2E",groupBorder:"#243049",accent:"#F472B6",accentSoft:"rgba(244, 114, 182, 0.14)",chainLine:"rgba(244, 114, 182, 0.35)",bulkBg:"#F472B6",bulkText:"#0A0F1C",bulkHover:"#F9A8D4",frameBorder:"1px solid #243049",radius:"16px"},j={default:{},picker:ya,scenario:Sa,statement:wa,neon:Ca},[ka]=Object.values([xa]),G=e=>{const n=ka.match(new RegExp(`export const ${e}: TableCoreTheme = (\\{[\\s\\S]*?\\n\\})`));if(!n)throw new Error(`themes.ts has no theme "${e}"`);return n[1]},ke={default:{value:j.default,code:"{}"},picker:{value:j.picker,code:G("pickerTheme")},scenario:{value:j.scenario,code:G("scenarioTheme")},statement:{value:j.statement,code:G("statementTheme")},neon:{value:j.neon,code:G("neonTheme")}},va={title:"Tables/Table Core/Features/Drafts/Themes",id:"tables-table-core-features-themes",...tt(w.default)},A={theme:{description:"The look: a named set of colours, fonts, header style, zebra rows, frame and header height. Code shows its tokens.",...nt(ke)},rowHeight:{description:"Row height in px.",control:{type:"range",min:28,max:64,step:2}}},P=(e,n)=>ot(e,n,rt({theme:ke})),B=({theme:e,rowHeight:n})=>({theme:at(ke,e),rowHeight:n}),z={tags:["kb:themes-default"],name:"1 · Default",parameters:{summary:"No `theme`: the Resource Plan look; edit a token and the table follows.",...P(w.default,"Default")},args:{theme:"default",rowHeight:48},argTypes:A,render:e=>a.jsx(ua,{...B(e),hint:a.jsx(T,{text:'No `theme`: the Resource Plan look. Open **theme** in Controls and set `"accent": "#7C3AED"` — sort a column to see it.'})})},$={tags:["kb:themes-picker"],name:"2 · Picker in a side panel",args:{theme:"picker",rowHeight:44},argTypes:A,parameters:{summary:"A calm table in a drawer: a radio picks one row.",...P(w.picker,"Picker")},render:e=>a.jsx(ga,{...B(e),hint:a.jsx(T,{text:"Pick a person with the radio, then **Save**. The look of a candidate selection: no toolbar, no checkboxes, a frame with rounded corners."})}),play:async e=>{ne(e)||await st(e.canvasElement)}},N={tags:["kb:themes-scenario"],name:"3 · PnL (scenario results)",args:{theme:"scenario",rowHeight:36},argTypes:A,parameters:{summary:"Quarters that open into months (column chains), a grey year total, bold expandable lines.",...P(w.scenario,"Scenario")},render:e=>a.jsx(ba,{...B(e),hint:a.jsx(T,{text:"Press **+** next to a quarter to show its months, open **Total revenue** for its lines: quarters, a grey year total, coloured margin and seniority."})}),play:async e=>{ne(e)||await it(e.canvasElement)}},D={tags:["kb:themes-statement"],name:"4 · Internal PnL",args:{theme:"statement",rowHeight:42},argTypes:A,parameters:{summary:"Months as columns, a bar in each number, coloured arrows, the dark margin line.",...P(w.statement,"Statement")},render:e=>a.jsx(fa,{...B(e),hint:a.jsx(T,{text:"Click **Revenue**, **Cost of revenue** or **Load cost** to open their lines: a bar in each number (taller = bigger), a divider before January, the dark margin line."})}),play:async e=>{ne(e)||await lt(e.canvasElement)}},O={tags:["kb:themes-neon"],name:"5 · Neon (outside the default style)",args:{theme:"neon",rowHeight:50},parameters:{summary:"Dark, neon accent, monospace numbers, a rounded frame.",...P(w.default,"Neon")},argTypes:A,render:e=>a.jsx(kn,{...B(e),hint:a.jsx(T,{text:"Tick a few rows (the bulk bar is pink), open **Sort** or a column menu — popups follow the theme. Numbers use a monospace font."})}),play:async e=>{ne(e)||(await ct(e.canvasElement),await dt(e))}},_={tags:["kb:themes-playground"],name:"Playground",args:{theme:"neon",rowHeight:50},argTypes:A,parameters:P(w.default,"Playground"),render:e=>a.jsx(kn,{...B(e),hint:a.jsx(T,{text:"Everything editable: start from Neon and change tokens."})})};var Le,je,ze;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  tags: ['kb:themes-default'],
  name: '1 · Default',
  parameters: {
    summary: 'No \`theme\`: the Resource Plan look; edit a token and the table follows.',
    ...codeOf(SOURCES.default, 'Default')
  },
  args: {
    theme: 'default',
    rowHeight: 48
  },
  argTypes: ARG_TYPES,
  render: args => <DefaultScene {...tokensOf(args)} hint={<Md text='No \`theme\`: the Resource Plan look. Open **theme** in Controls and set \`"accent": "#7C3AED"\` — sort a column to see it.' />} />
}`,...(ze=(je=z.parameters)==null?void 0:je.docs)==null?void 0:ze.source}}};var $e,Ne,De;$.parameters={...$.parameters,docs:{...($e=$.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  tags: ['kb:themes-picker'],
  name: '2 · Picker in a side panel',
  args: {
    theme: 'picker',
    rowHeight: 44
  },
  argTypes: ARG_TYPES,
  parameters: {
    summary: 'A calm table in a drawer: a radio picks one row.',
    ...codeOf(SOURCES.picker, 'Picker')
  },
  render: args => <PickerScene {...tokensOf(args)} hint={<Md text="Pick a person with the radio, then **Save**. The look of a candidate selection: no toolbar, no checkboxes, a frame with rounded corners." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await pickerAct(ctx.canvasElement);
  }
}`,...(De=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};var Oe,_e,He;N.parameters={...N.parameters,docs:{...(Oe=N.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  tags: ['kb:themes-scenario'],
  name: '3 · PnL (scenario results)',
  args: {
    theme: 'scenario',
    rowHeight: 36
  },
  argTypes: ARG_TYPES,
  parameters: {
    summary: 'Quarters that open into months (column chains), a grey year total, bold expandable lines.',
    ...codeOf(SOURCES.scenario, 'Scenario')
  },
  render: args => <ScenarioScene {...tokensOf(args)} hint={<Md text="Press **+** next to a quarter to show its months, open **Total revenue** for its lines: quarters, a grey year total, coloured margin and seniority." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await scenarioAct(ctx.canvasElement);
  }
}`,...(He=(_e=N.parameters)==null?void 0:_e.docs)==null?void 0:He.source}}};var Ie,Ue,qe;D.parameters={...D.parameters,docs:{...(Ie=D.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  tags: ['kb:themes-statement'],
  name: '4 · Internal PnL',
  args: {
    theme: 'statement',
    rowHeight: 42
  },
  argTypes: ARG_TYPES,
  parameters: {
    summary: 'Months as columns, a bar in each number, coloured arrows, the dark margin line.',
    ...codeOf(SOURCES.statement, 'Statement')
  },
  render: args => <StatementScene {...tokensOf(args)} hint={<Md text="Click **Revenue**, **Cost of revenue** or **Load cost** to open their lines: a bar in each number (taller = bigger), a divider before January, the dark margin line." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await statementAct(ctx.canvasElement);
  }
}`,...(qe=(Ue=D.parameters)==null?void 0:Ue.docs)==null?void 0:qe.source}}};var We,Ge,Ye;O.parameters={...O.parameters,docs:{...(We=O.parameters)==null?void 0:We.docs,source:{originalSource:`{
  tags: ['kb:themes-neon'],
  name: '5 · Neon (outside the default style)',
  args: {
    theme: 'neon',
    rowHeight: 50
  },
  parameters: {
    summary: 'Dark, neon accent, monospace numbers, a rounded frame.',
    ...codeOf(SOURCES.default, 'Neon')
  },
  argTypes: ARG_TYPES,
  render: args => <NeonScene {...tokensOf(args)} hint={<Md text="Tick a few rows (the bulk bar is pink), open **Sort** or a column menu — popups follow the theme. Numbers use a monospace font." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await neonAct(ctx.canvasElement);
    await themeControlsAct(ctx);
  }
}`,...(Ye=(Ge=O.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};var Ke,Ve,Qe;_.parameters={..._.parameters,docs:{...(Ke=_.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  tags: ['kb:themes-playground'],
  name: 'Playground',
  args: {
    theme: 'neon',
    rowHeight: 50
  },
  argTypes: ARG_TYPES,
  parameters: codeOf(SOURCES.default, 'Playground'),
  render: args => <NeonScene {...tokensOf(args)} hint={<Md text="Everything editable: start from Neon and change tokens." />} />
}`,...(Qe=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:Qe.source}}};const Fa=["Default","Picker","Scenario","Statement","Neon","Playground"],Ra=Object.freeze(Object.defineProperty({__proto__:null,Default:z,Neon:O,Picker:$,Playground:_,Scenario:N,Statement:D,__namedExportsOrder:Fa,default:va},Symbol.toStringTag,{value:"Module"}));export{Ra as S};
