import{j as n,Y as t,_ as Yn,c4 as qn,bw as o,a0 as s,Z as l,bF as d,ba as i,bb as c,bc as u,bf as p,bg as h,a6 as xe,cp as ia,bt as ca,bi as Me,bu as ua,bj as He,bv as pa,b8 as Fe,bE as Ce,bD as Jn,bH as Zn,r as x,S as m,A as G,a7 as Kn,bB as Qn,a4 as Xn,bC as ea,a1 as na,bG as aa,by as ra,bz as ha,bA as ma,c as w,b as R,M as g,s as v,bq as T,f as wa}from"./products-CTiDOXRn.js";import{U as ta,a as ga,D as f,m as Te}from"./delivery-C8x7O8Im.js";import{b as ya,c as fa,d as ba,f as Ra,g as va,h as xa,i as Fa,n as Ca,j as Ta,k as Sa,m as Ea,o as Ma,q as Ha,r as Na,t as ka,v as ja,x as Da,y as Aa,z as Ia,A as Oa,B as oa,C as sa,D as _a,E as Ga,F as Pa,G as La,H as za,I as $a,J as Ua}from"./checks-R4e5umqc.js";import{N as la}from"./node-pager-WHE38C50.js";const Ba=`import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'
import { HierarchySwitch } from '../../kit/hierarchy-switch'

// A hierarchy is v9's grouping with levels the table makes for you.
const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature, // ← new
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, Person>()
const columns = [
	// The rows stay flat. Only the path says where a row stands: country, then city.
	...hierarchyColumns<Person>({
		// ← new
		places: { levels: 2, path: (person) => [person.country, person.city] },
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('country', { header: 'Country' }),
		helper.accessor('city', { header: 'City' }),
	]),
]

const switchRegion: TableCoreUiProps['toolbar'] = (table) => (
	<HierarchySwitch table={table} hierarchyId="places" label="Country › City" />
)

export const PlacesTable = ({ people }: { people: Person[] }) => (
	<TableCore
		features={features}
		data={people}
		columns={columns}
		getRowId={(person) => person.id}
		// A hierarchy that is switched on opens: the table does not fold it back.
		autoResetExpanded={false}
		rowHeight={36}
		// A button switches the hierarchy on and off.
		toolbar={switchRegion}
	/>
)
`,Va=`import { useMemo } from 'react'

import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columnsOf = (layout: 'rows' | 'lanes') => [
	// Three levels, but a row may stop earlier: Anna's path is only ['Northwind'].
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path, layout }, // ← new
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('rate', { header: 'Rate' }),
	]),
]

export const DeliveryTable = ({
	rows,
	layout = 'rows',
}: {
	rows: DeliveryRow[]
	layout?: 'rows' | 'lanes'
}) => {
	const columns = useMemo(() => columnsOf(layout), [layout])

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(row) => row.id}
			rowHeight={36}
			autoResetExpanded={false}
			// The hierarchy is on from the start.
			initialState={{
				grouping: ['stream-level1', 'stream-level2', 'stream-level3'],
				expanded: true,
			}}
		/>
	)
}
`,Wa=`import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	// Three levels, as before.
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path },
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('rate', { header: 'Rate' }),
	]),
]

// 1. Units that have no people yet: they exist, so the table draws them.
const nodes = [
	['Northwind', 'Americas', 'Growth'],
	['Northwind', 'Support'],
]

export const EmptyNodesTable = ({ rows }: { rows: DeliveryRow[] }) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={36}
		autoResetExpanded={false}
		groupPaths={() => nodes} // ← new
		// The hierarchy is on from the start.
		initialState={{
			grouping: ['stream-level1', 'stream-level2', 'stream-level3'],
			expanded: true,
		}}
	/>
)
`,Ya=`import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import { DELIVERY_NODE_NAMES, type DeliveryRow } from '../../data/delivery'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	// Three levels, but a row may stop earlier: Anna's path is only ['Northwind'].
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path }, // ← new
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('rate', { header: 'Rate' }),
	]),
]

// 1. A node shows the name the screen knows for its path, not the path segment.
const nodeOf = (path: readonly string[]) => ({
	name: DELIVERY_NODE_NAMES[path.join('>')],
})

export const NodeNamesTable = ({ rows }: { rows: DeliveryRow[] }) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={36}
		autoResetExpanded={false}
		groupData={nodeOf} // ← new
		// The hierarchy is on from the start.
		initialState={{
			grouping: ['stream-level1', 'stream-level2', 'stream-level3'],
			expanded: true,
		}}
	/>
)
`,qa=`import {
	TableCore,
	aggregationFn_mean,
	aggregationFn_sum,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	rowAggregationFeature,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	rowAggregationFeature, // ← new
	groupRowsFeature,
	rowHierarchyFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	aggregationFns: { mean: aggregationFn_mean, sum: aggregationFn_sum },
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path },
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		// 1. A column with an aggregationFn has a total in every node: v9's own, as in Grouping.
		helper.accessor('rate', { header: 'Rate', aggregationFn: 'mean' }), // ← new
		helper.accessor('hours', { header: 'Hours', aggregationFn: 'sum' }), // ← new
	]),
]

// 2. Americas has more people on the server than the table has loaded: the server
// sends its rows and totals, and they win over the sum of the rows here.
const nodeOf = (path: readonly string[]) =>
	path.join('>') === 'Northwind>Americas'
		? { leafCount: 12, totals: { rate: 61, hours: 1560 } } // ← new
		: undefined

export const TotalsTable = ({ rows }: { rows: DeliveryRow[] }) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={36}
		autoResetExpanded={false}
		groupData={nodeOf}
		// 3. A unit with nobody yet has no total to show: it shows “—”, not a zero.
		groupPaths={() => [['Northwind', 'Support']]}
		initialState={{
			grouping: ['stream-level1', 'stream-level2', 'stream-level3'],
			expanded: true,
		}}
	/>
)
`,Ja=`import { useRef, useState } from 'react'

import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
	type NodeStatus,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path },
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('rate', { header: 'Rate' }),
	]),
]

// The units are known, their people are not here yet: the server sends them when a unit is opened.
const UNITS = [
	['Northwind', 'Europe', 'Engineering'],
	['Northwind', 'Europe', 'Data platform'],
	['Northwind', 'Americas', 'Design'],
]
const keyOf = (path: readonly string[]) => path.join('>')

export const LazyTable = ({
	all,
	delay = 600,
	failFirst = true,
}: {
	all: DeliveryRow[]
	/** How long the server takes to answer, ms. */
	delay?: number
	/** The server does not answer for Data platform the first time. */
	failFirst?: boolean
}) => {
	// What the screen keeps: the units whose people have come, and what each unit is doing.
	const [loaded, setLoaded] = useState<string[]>([])
	const [status, setStatus] = useState<Record<string, NodeStatus>>({})
	const failsOnce = useRef(
		new Set(failFirst ? ['Northwind>Europe>Data platform'] : [])
	)
	const rows = all.filter(
		(row) => row.path.length < 3 || loaded.includes(keyOf(row.path))
	)
	const set = (key: string, next: NodeStatus) =>
		setStatus((all) => ({ ...all, [key]: next }))

	// 1. The user opened a unit (or pressed Retry): ask the server for its people.
	const load = (path: readonly string[]) => {
		const key = keyOf(path)
		set(key, 'loading')
		setTimeout(() => {
			if (failsOnce.current.delete(key)) {
				set(key, { error: 'The server did not answer' })
			} else {
				setLoaded((all) => [...all, key])
				set(key, 'idle')
			}
		}, delay)
	}

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(row) => row.id}
			rowHeight={36}
			autoResetExpanded={false}
			// 2. A unit with people to load: it can be opened, and says what it is doing.
			groupPaths={() => UNITS}
			groupData={(path) =>
				UNITS.some((unit) => keyOf(unit) === keyOf(path)) &&
				!loaded.includes(keyOf(path))
					? { hasChildren: true, status: status[keyOf(path)] ?? 'idle' }
					: undefined
			}
			onGroupOpen={load}
			initialState={{
				grouping: ['stream-level1', 'stream-level2', 'stream-level3'],
				// A unit opens by its place in the tree, before its people are here and after.
				expanded: {
					'stream-level1:Northwind': true,
					'stream-level1:Northwind>stream-level2:Europe': true,
					'stream-level1:Northwind>stream-level2:Americas': true,
				},
			}}
		/>
	)
}
`,Za=`import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createPaginatedRowModel,
	createUtilityColumn,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	rowPaginationFeature,
	rowSelectionFeature,
	tableFeatures,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'
import { NodePager } from '../../kit/node-pager'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	rowPaginationFeature, // ← new
	rowSelectionFeature, // the utility column's checkboxes
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	paginatedRowModel: createPaginatedRowModel(), // ← new
})

const helper = createColumnHelper<typeof features, Person>()
const columns = [
	...hierarchyColumns<Person>({
		places: { levels: 2, path: (person) => [person.country, person.city] },
	}),
	// The numbers of the rows go on from page to page: the third page of ten starts at 21.
	createUtilityColumn(helper), // ← new
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('city', { header: 'City' }),
	]),
]

const pagerRegion: TableCoreUiProps['toolbar'] = (table) => (
	<NodePager table={table} />
)

export const PagesTable = ({
	people,
	pageSize = 2,
}: {
	people: Person[]
	pageSize?: number
}) => (
	<TableCore
		features={features}
		data={people}
		columns={columns}
		getRowId={(person) => person.id}
		rowHeight={36}
		autoResetExpanded={false}
		autoResetPageIndex={false}
		// A page counts top-level rows, the nodes: v9's own (the default counts every open row).
		paginateExpandedRows={false} // ← new
		initialState={{
			grouping: ['places-level1', 'places-level2'],
			expanded: true,
			// A page is two countries with everything under them, never a cut through one.
			pagination: { pageIndex: 0, pageSize }, // ← new
		}}
		toolbar={pagerRegion}
	/>
)
`,Ka=`import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createPaginatedRowModel,
	createUtilityColumn,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	rowPaginationFeature,
	rowSelectionFeature,
	tableFeatures,
	type PaginationState,
	type TableCoreUiProps,
	type Updater,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'
import { NodePager } from '../../kit/node-pager'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	rowPaginationFeature,
	rowSelectionFeature, // the utility column's checkboxes
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	paginatedRowModel: createPaginatedRowModel(), // ← new
})

const helper = createColumnHelper<typeof features, Person>()
const columns = [
	...hierarchyColumns<Person>({
		places: { levels: 2, path: (person) => [person.country, person.city] },
	}),
	// The numbers of the rows go on from page to page: the third page of ten starts at 21.
	createUtilityColumn(helper), // ← new
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('city', { header: 'City' }),
	]),
]

/** The page an update of v9's pagination state leads to. */
const pageIndexOf = (next: Updater<PaginationState>, now: PaginationState) =>
	(typeof next === 'function' ? next(now) : next).pageIndex

const pagerRegion: TableCoreUiProps['toolbar'] = (table) => (
	<NodePager table={table} />
)

type Props = {
	/** The people of the countries on this page: what the server answered. */
	people: Person[]
	/** How many countries there are on the server, all pages. */
	countries: number
	loading: boolean
	/** The number of the first person on this page: the server cut the pages, the table cannot count what stands before it. */
	firstRowNumber: number
	/** The page the user is on (counted from 0). */
	pageIndex: number
	onPageIndexChange: (pageIndex: number) => void
	/** How many countries the server sends on a page. */
	pageSize?: number
}

export const ServerPagesTable = ({
	people,
	countries,
	loading,
	firstRowNumber,
	pageIndex,
	onPageIndexChange,
	pageSize = 2,
}: Props) => (
	<TableCore
		features={features}
		data={people}
		columns={columns}
		getRowId={(person) => person.id}
		rowHeight={36}
		autoResetExpanded={false}
		autoResetPageIndex={false}
		// A page counts top-level rows, the nodes: v9's own (the default counts every open row).
		paginateExpandedRows={false} // ← new
		// 1. The server cuts the pages: the table does not slice what it gets.
		manualPagination // ← new
		// 2. The pages are counted in top-level nodes, as many as the server has.
		rowCount={countries} // ← new
		loading={loading}
		firstRowNumber={firstRowNumber} // ← new
		state={{ pagination: { pageIndex, pageSize } }}
		onPaginationChange={(next) =>
			onPageIndexChange(pageIndexOf(next, { pageIndex, pageSize }))
		}
		initialState={{
			grouping: ['places-level1', 'places-level2'],
			expanded: true,
		}}
		toolbar={pagerRegion}
	/>
)
`,Qa=`import {
	TableCore,
	columnFilteringFeature,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createFilteredRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	filterFn_includesString,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	rowSortingFeature,
	sortFn_basic,
	tableFeatures,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'

// Rows are filtered before they are put in nodes, and sorted inside them.
const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	columnFilteringFeature, // ← new
	rowSortingFeature, // ← new
	groupRowsFeature,
	rowHierarchyFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	filteredRowModel: createFilteredRowModel(), // ← new
	sortedRowModel: createSortedRowModel(), // ← new
	filterFns: { includesString: filterFn_includesString },
	sortFns: { basic: sortFn_basic },
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path },
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role', filterFn: 'includesString' }),
		helper.accessor('hours', { header: 'Hours', sortFn: 'basic' }),
	]),
]

// The screen's own controls: the table has no interface for filters.
const controls: TableCoreUiProps['toolbar'] = (table) => (
	<div style={{ display: 'flex', gap: 8, padding: 8 }} data-controls>
		<input
			aria-label="Role contains"
			placeholder="Role contains…"
			onChange={(event) =>
				table.getColumn('role')?.setFilterValue(event.target.value)
			}
		/>
		<button
			type="button"
			onClick={() => table.setSorting([{ id: 'hours', desc: true }])}
		>
			Hours, most first
		</button>
	</div>
)

export const SortFilterTable = ({ rows }: { rows: DeliveryRow[] }) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={36}
		autoResetExpanded={false}
		// A node with nothing under it matches no filter: it goes while one is on.
		groupPaths={() => [['Northwind', 'Support']]}
		initialState={{
			grouping: ['stream-level1', 'stream-level2', 'stream-level3'],
			expanded: true,
		}}
		toolbar={controls}
	/>
)
`,Xa=`import {
	TableCore,
	TableToolbar,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	groupingControl,
	hierarchyColumns,
	metaHelper,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
	type GroupingColumnMeta,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	columnMeta: metaHelper<GroupingColumnMeta>(),
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path },
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		// Team groups as rows too, inside the units.
		helper.accessor('team', { header: 'Team', meta: { groupLayout: 'rows' } }),
	]),
]

// The Grouping panel is the user's: it lists Team and what the user adds, never the levels of the hierarchy.
const toolbar: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar table={table} controls={[groupingControl()]} />
)

export const TeamTable = ({ rows }: { rows: DeliveryRow[] }) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={36}
		autoResetExpanded={false}
		initialState={{
			// The hierarchy first, then the user's own grouping: Team, inside the last node.
			grouping: [
				'stream-level1',
				'stream-level2',
				'stream-level3',
				'team', // ← new
			],
			expanded: true,
		}}
		toolbar={toolbar}
	/>
)
`,er=`import { useMemo } from 'react'

import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, Person>()
const columnsOf = (layout: 'rows' | 'lanes') => [
	...hierarchyColumns<Person>({
		places: {
			levels: 2,
			path: (person) => [person.country, person.city],
			// A level is drawn as a lane or as a header row, as any grouping's: here both are lanes.
			layout, // ← new
			labels: ['Country', 'City'], // ← new
		},
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('rate', { header: 'Rate' }),
	]),
]

export const LanesTable = ({
	people,
	layout = 'lanes',
}: {
	people: Person[]
	layout?: 'rows' | 'lanes'
}) => {
	const columns = useMemo(() => columnsOf(layout), [layout])

	return (
		<TableCore
			features={features}
			data={people}
			columns={columns}
			getRowId={(person) => person.id}
			rowHeight={36}
			autoResetExpanded={false}
			initialState={{
				grouping: ['places-level1', 'places-level2'],
				expanded: true,
			}}
		/>
	)
}
`,nr=`import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	metaHelper,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
	type GroupingColumnMeta,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	columnMeta: metaHelper<GroupingColumnMeta>(),
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, Person>()
const columns = [
	...hierarchyColumns<Person>({
		places: {
			levels: 2,
			path: (person) => [person.country, person.city],
			layout: 'lanes',
			labels: ['Country', 'City'],
		},
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		// The user's own grouping inside the lanes: Team, as header rows.
		helper.accessor('team', { header: 'Team', meta: { groupLayout: 'rows' } }),
	]),
]

export const LanesRowsTable = ({ people }: { people: Person[] }) => (
	<TableCore
		features={features}
		data={people}
		columns={columns}
		getRowId={(person) => person.id}
		rowHeight={36}
		autoResetExpanded={false}
		initialState={{
			grouping: ['places-level1', 'places-level2', 'team'],
			expanded: true,
		}}
	/>
)
`,ar=`import { useMemo } from 'react'

import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columnsOf = (layout: 'rows' | 'lanes') => [
	// Three levels, but a row may stop earlier: Anna's path is only ['Northwind'].
	...hierarchyColumns<DeliveryRow>({
		stream: {
			levels: 3,
			path: (row) => row.path,
			// As lanes: where a path stops, the lane of the level it does not reach has a cell with nothing in it.
			layout, // ← new
			labels: ['Organisation', 'Business unit', 'Unit'],
		}, // ← new
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('rate', { header: 'Rate' }),
	]),
]

export const DeliveryLanesTable = ({
	rows,
	layout = 'lanes',
}: {
	rows: DeliveryRow[]
	layout?: 'rows' | 'lanes'
}) => {
	const columns = useMemo(() => columnsOf(layout), [layout])

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(row) => row.id}
			rowHeight={36}
			autoResetExpanded={false}
			// The hierarchy is on from the start.
			initialState={{
				grouping: ['stream-level1', 'stream-level2', 'stream-level3'],
				expanded: true,
			}}
		/>
	)
}
`,rr=`import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path },
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('rate', { header: 'Rate' }),
	]),
]

export const HeaderLabelsTable = ({
	rows,
	groupHeader = 'labels',
}: {
	rows: DeliveryRow[]
	groupHeader?: 'none' | 'labels' | 'full'
}) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={36}
		autoResetExpanded={false}
		// An open group repeats the labels of the columns under its band.
		groupHeader={groupHeader} // ← new
		initialState={{
			grouping: ['stream-level1', 'stream-level2', 'stream-level3'],
			expanded: true,
		}}
	/>
)
`,tr=`import {
	TableCore,
	columnGroupingFeature,
	columnPinningFeature,
	columnResizingFeature,
	columnSizingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	defaultColumnMenu,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	rowSortingFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'
import { sceneSortFns } from '../../kit/sort-fns'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	rowSortingFeature,
	columnSizingFeature,
	columnResizingFeature,
	columnPinningFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path },
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name', size: 220 }),
		helper.accessor('role', { header: 'Role', size: 200 }),
		helper.accessor('rate', { header: 'Rate', size: 120, sortFn: 'basic' }),
	]),
]

export const HeaderFullTable = ({
	rows,
	groupHeader = 'full',
}: {
	rows: DeliveryRow[]
	groupHeader?: 'none' | 'labels' | 'full'
}) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={36}
		autoResetExpanded={false}
		columnMenu={defaultColumnMenu()}
		// An open group repeats the table's own header under its band: the same piece, so a click sorts, the edge resizes, the menu opens, and all of it is the state of the one table.
		groupHeader={groupHeader} // ← new
		initialState={{
			grouping: ['stream-level1', 'stream-level2', 'stream-level3'],
			expanded: true,
		}}
	/>
)
`,or=`import {
	TableCore,
	columnGroupingFeature,
	columnPinningFeature,
	columnResizingFeature,
	columnSizingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	defaultColumnMenu,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	rowSortingFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'
import { sceneSortFns } from '../../kit/sort-fns'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	rowSortingFeature,
	columnSizingFeature,
	columnResizingFeature,
	columnPinningFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path },
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name', size: 220 }),
		helper.accessor('role', { header: 'Role', size: 200 }),
		helper.accessor('rate', { header: 'Rate', size: 120, sortFn: 'basic' }),
	]),
]

export const HeaderOnlyTable = ({
	rows,
	groupHeader = 'full',
	header = 'none',
}: {
	rows: DeliveryRow[]
	groupHeader?: 'none' | 'labels' | 'full'
	header?: 'global' | 'none'
}) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={36}
		autoResetExpanded={false}
		columnMenu={defaultColumnMenu()}
		// The headers of the groups are the only headers: the table draws none of its own, and its sort, resize, menu and frozen columns work from them.
		groupHeader={groupHeader}
		header={header} // ← new
		initialState={{
			grouping: ['stream-level1', 'stream-level2', 'stream-level3'],
			expanded: true,
		}}
	/>
)
`,sr=`import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	rowAggregationFeature,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import { UNIT_INFO, type DeliveryRow } from '../../data/delivery'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	rowAggregationFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

/** What the screen knows of a unit: the table reads nothing of it but what it needs, a cell reads the rest. */
type UnitData = { owner: string; health: string; progress: number }

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path },
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		// 1. A column draws a group's cell with its own \`aggregatedCell\`: here a chip.
		helper.accessor('role', {
			header: 'Role',
			aggregatedCell: (info) => (
				<span data-health={info.row.getGroupData<UnitData>()?.health}>
					{info.row.getGroupData<UnitData>()?.health}
				</span>
			), // ← new
		}),
		// 2. Anything: a progress bar from the unit's data.
		helper.accessor('rate', {
			header: 'Progress',
			aggregatedCell: (info) => (
				<progress
					max={100}
					value={info.row.getGroupData<UnitData>()?.progress}
				/>
			), // ← new
		}),
		// 3. A link, with the path of the group in the context.
		helper.accessor('hours', {
			header: 'Board',
			aggregatedCell: (info) => (
				<a href={\`#\${info.row.getGroupPath()?.join('/')}\`}>Open</a>
			), // ← new
		}),
	]),
]

export const NodeCellsTable = ({ rows }: { rows: DeliveryRow[] }) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={36}
		autoResetExpanded={false}
		// What the screen knows of a group, whatever it is: the table passes it to the cells.
		groupData={(path) => UNIT_INFO[path.join('>')]} // ← new
		initialState={{
			grouping: ['stream-level1', 'stream-level2', 'stream-level3'],
			expanded: true,
		}}
	/>
)
`,lr=`import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
	type NodeRowSlotProps,
} from '@pnl-simulation/table-core'

import { UNIT_INFO, type DeliveryRow } from '../../data/delivery'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path },
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('rate', { header: 'Rate' }),
	]),
]

// The whole row of a group is yours: the top unit gets a band of its own across the table, the others keep the table's.
const Band = ({
	group,
	path,
	data,
	band,
	top,
	height,
	width,
}: NodeRowSlotProps) =>
	path?.length === 1 ? (
		<div
			data-own-band
			style={{
				position: 'sticky',
				top,
				height,
				width,
				boxSizing: 'border-box',
				display: 'flex',
				alignItems: 'center',
				gap: 12,
				padding: '0 12px',
				background: '#E8F1FF',
				fontWeight: 700,
			}}
		>
			<span>{path[0]}</span>
			<span data-owner>{String(data?.owner)}</span>
			<button type="button" data-fold onClick={() => group.toggleExpanded()}>
				{group.getIsExpanded() ? 'Fold' : 'Open'}
			</button>
		</div>
	) : (
		band
	)

export const NodeBandTable = ({ rows }: { rows: DeliveryRow[] }) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={36}
		autoResetExpanded={false}
		groupData={(path) => UNIT_INFO[path.join('>')]}
		slots={{ nodeRow: Band }} // ← new
		initialState={{
			grouping: ['stream-level1', 'stream-level2', 'stream-level3'],
			expanded: true,
		}}
	/>
)
`,dr=`import {
	TableCore,
	TableToolbar,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	groupingControl,
	hierarchyColumns,
	metaHelper,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
	type GroupingColumnMeta,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	columnMeta: metaHelper<GroupingColumnMeta>(),
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path },
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		// Role groups as lanes, inside the units.
		helper.accessor('role', { header: 'Role', meta: { groupLayout: 'lanes' } }),
	]),
]

// The Grouping panel is the user's: it lists Team and what the user adds, never the levels of the hierarchy.
const toolbar: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar table={table} controls={[groupingControl()]} />
)

export const RoleLanesTable = ({ rows }: { rows: DeliveryRow[] }) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={36}
		autoResetExpanded={false}
		initialState={{
			// The hierarchy first, then the user's own grouping: Team, inside the last node.
			grouping: [
				'stream-level1',
				'stream-level2',
				'stream-level3',
				'role', // ← new
			],
			expanded: true,
		}}
		toolbar={toolbar}
	/>
)
`,ir=`import {
	TableBulkBar,
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createUtilityColumn,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	rowSelectionFeature,
	tableFeatures,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	rowSelectionFeature, // ← new
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path },
	}),
	// The numbers of the rows and their checkboxes; the band of a node has its own checkbox.
	createUtilityColumn(helper), // ← new
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('rate', { header: 'Rate' }),
	]),
]

const bulkBar: TableCoreUiProps['bulkBar'] = (table) => (
	<TableBulkBar table={table} getActions={() => []} />
)

export const SelectTable = ({
	rows,
	groupIndent = 'depth',
}: {
	rows: DeliveryRow[]
	groupIndent?: 'depth' | 'none'
}) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={36}
		autoResetExpanded={false}
		bulkBar={bulkBar} // ← new
		groupIndent={groupIndent}
		initialState={{
			grouping: ['stream-level1', 'stream-level2', 'stream-level3'],
			expanded: true,
			// One person is selected: every node above them shows a dash.
			rowSelection: { d3: true },
		}}
	/>
)
`,cr=`import {
	TableBulkBar,
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createUtilityColumn,
	groupRowsFeature,
	hierarchyColumns,
	metaHelper,
	rowExpandingFeature,
	rowHierarchyFeature,
	rowSelectionFeature,
	tableFeatures,
	type GroupingColumnMeta,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	rowSelectionFeature,
	columnMeta: metaHelper<GroupingColumnMeta>(),
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	// The hierarchy as lanes, the rows of a team inside them as header rows.
	...hierarchyColumns<DeliveryRow>({
		stream: {
			levels: 3,
			path: (row) => row.path,
			layout: 'lanes',
			labels: ['Organisation', 'Business unit', 'Unit'],
		},
	}),
	// Numbers count the rows of data, not the nodes, the empty levels or the lanes.
	createUtilityColumn(helper),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('team', { header: 'Team', meta: { groupLayout: 'rows' } }),
		helper.accessor('rate', { header: 'Rate' }),
	]),
]

const bulkBar: TableCoreUiProps['bulkBar'] = (table) => (
	<TableBulkBar table={table} getActions={() => []} />
)

export const NumbersTable = ({
	rows,
	groupIndent = 'depth',
}: {
	rows: DeliveryRow[]
	groupIndent?: 'depth' | 'none'
}) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={36}
		autoResetExpanded={false}
		bulkBar={bulkBar}
		groupIndent={groupIndent}
		initialState={{
			grouping: ['stream-level1', 'stream-level2', 'stream-level3', 'team'],
			expanded: true,
		}}
	/>
)
`,ur=`import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'

const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, DeliveryRow>()
const columns = [
	// Three levels, but a row may stop earlier: Anna's path is only ['Northwind'].
	...hierarchyColumns<DeliveryRow>({
		stream: { levels: 3, path: (row) => row.path }, // ← new
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('rate', { header: 'Rate' }),
	]),
]

export const NoIndentTable = ({
	rows,
	groupIndent = 'none',
}: {
	rows: DeliveryRow[]
	groupIndent?: 'depth' | 'none'
}) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={36}
		autoResetExpanded={false}
		// The rows of data stand on one line, whatever their depth (by default they stand in, a step for each node).
		groupIndent={groupIndent} // ← new
		// The hierarchy is on from the start.
		initialState={{
			grouping: ['stream-level1', 'stream-level2', 'stream-level3'],
			expanded: true,
		}}
	/>
)
`,pr=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,columnMeta:xe(),groupedRowModel:h(),expandedRowModel:p()}),L=l(),hr=[...o({stream:{levels:3,path:e=>e.path}}),...L.columns([L.accessor("name",{header:"Name"}),L.accessor("role",{header:"Role"}),L.accessor("team",{header:"Team",meta:{groupLayout:"rows"}})])],mr=e=>n.jsx(Yn,{table:e,controls:[qn()]}),wr=({rows:e})=>n.jsx(t,{features:pr,data:e,columns:hr,getRowId:a=>a.id,rowHeight:36,autoResetExpanded:!1,initialState:{grouping:["stream-level1","stream-level2","stream-level3","team"],expanded:!0},toolbar:mr}),gr=s({columnGroupingFeature:u,rowExpandingFeature:c,columnFilteringFeature:ua,rowSortingFeature:Me,groupRowsFeature:i,rowHierarchyFeature:d,groupedRowModel:h(),expandedRowModel:p(),filteredRowModel:pa(),sortedRowModel:He(),filterFns:{includesString:ca},sortFns:{basic:ia}}),z=l(),yr=[...o({stream:{levels:3,path:e=>e.path}}),...z.columns([z.accessor("name",{header:"Name"}),z.accessor("role",{header:"Role",filterFn:"includesString"}),z.accessor("hours",{header:"Hours",sortFn:"basic"})])],fr=e=>n.jsxs("div",{style:{display:"flex",gap:8,padding:8},"data-controls":!0,children:[n.jsx("input",{"aria-label":"Role contains",placeholder:"Role contains…",onChange:a=>{var r;return(r=e.getColumn("role"))==null?void 0:r.setFilterValue(a.target.value)}}),n.jsx("button",{type:"button",onClick:()=>e.setSorting([{id:"hours",desc:!0}]),children:"Hours, most first"})]}),br=({rows:e})=>n.jsx(t,{features:gr,data:e,columns:yr,getRowId:a=>a.id,rowHeight:36,autoResetExpanded:!1,groupPaths:()=>[["Northwind","Support"]],initialState:{grouping:["stream-level1","stream-level2","stream-level3"],expanded:!0},toolbar:fr}),Rr=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,rowPaginationFeature:Jn,rowSelectionFeature:Ce,groupedRowModel:h(),expandedRowModel:p(),paginatedRowModel:Zn()}),k=l(),vr=[...o({places:{levels:2,path:e=>[e.country,e.city]}}),Fe(k),...k.columns([k.accessor("name",{header:"Name"}),k.accessor("role",{header:"Role"}),k.accessor("city",{header:"City"})])],xr=e=>n.jsx(la,{table:e}),Fr=({people:e,pageSize:a=2})=>n.jsx(t,{features:Rr,data:e,columns:vr,getRowId:r=>r.id,rowHeight:36,autoResetExpanded:!1,autoResetPageIndex:!1,paginateExpandedRows:!1,initialState:{grouping:["places-level1","places-level2"],expanded:!0,pagination:{pageIndex:0,pageSize:a}},toolbar:xr}),Cr=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,rowPaginationFeature:Jn,rowSelectionFeature:Ce,groupedRowModel:h(),expandedRowModel:p(),paginatedRowModel:Zn()}),j=l(),Tr=[...o({places:{levels:2,path:e=>[e.country,e.city]}}),Fe(j),...j.columns([j.accessor("name",{header:"Name"}),j.accessor("role",{header:"Role"}),j.accessor("city",{header:"City"})])],Sr=(e,a)=>(typeof e=="function"?e(a):e).pageIndex,Er=e=>n.jsx(la,{table:e}),Mr=({people:e,countries:a,loading:r,firstRowNumber:y,pageIndex:F,onPageIndexChange:E,pageSize:S=2})=>n.jsx(t,{features:Cr,data:e,columns:Tr,getRowId:M=>M.id,rowHeight:36,autoResetExpanded:!1,autoResetPageIndex:!1,paginateExpandedRows:!1,manualPagination:!0,rowCount:a,loading:r,firstRowNumber:y,state:{pagination:{pageIndex:F,pageSize:S}},onPaginationChange:M=>E(Sr(M,{pageIndex:F,pageSize:S})),initialState:{grouping:["places-level1","places-level2"],expanded:!0},toolbar:Er}),Ne=G(40),ke=[...new Set(Ne.map(e=>e.country))],je=({pageIndex:e,pageSize:a})=>{const r=ke.slice(e*a,(e+1)*a);return Ne.filter(y=>r.includes(y.country))},Hr=({pageIndex:e,pageSize:a})=>Ne.filter(r=>ke.slice(0,e*a).includes(r.country)).length+1,Nr=({hint:e,pageSize:a=2})=>{const[r,y]=x.useState(0),F={pageIndex:r,pageSize:a},[E,S]=x.useState(()=>je(F)),[M,P]=x.useState(!1);return x.useEffect(()=>{P(!0);const N=setTimeout(()=>{S(je({pageIndex:r,pageSize:a})),P(!1)},300);return()=>clearTimeout(N)},[r,a]),n.jsx(m,{hint:e,children:n.jsx(Mr,{people:E,countries:ke.length,loading:M,firstRowNumber:Hr(F),pageIndex:r,onPageIndexChange:y,pageSize:a})})},kr=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,groupedRowModel:h(),expandedRowModel:p()}),$=l(),jr=e=>[...o({stream:{levels:3,path:a=>a.path,layout:e,labels:["Organisation","Business unit","Unit"]}}),...$.columns([$.accessor("name",{header:"Name"}),$.accessor("role",{header:"Role"}),$.accessor("rate",{header:"Rate"})])],Dr=({rows:e,layout:a="lanes"})=>{const r=x.useMemo(()=>jr(a),[a]);return n.jsx(t,{features:kr,data:e,columns:r,getRowId:y=>y.id,rowHeight:36,autoResetExpanded:!1,initialState:{grouping:["stream-level1","stream-level2","stream-level3"],expanded:!0}})},Ar=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,rowSortingFeature:Me,columnSizingFeature:na,columnResizingFeature:ea,columnPinningFeature:Xn,groupedRowModel:h(),expandedRowModel:p(),sortedRowModel:He(),sortFns:Qn}),U=l(),Ir=[...o({stream:{levels:3,path:e=>e.path}}),...U.columns([U.accessor("name",{header:"Name",size:220}),U.accessor("role",{header:"Role",size:200}),U.accessor("rate",{header:"Rate",size:120,sortFn:"basic"})])],Or=({rows:e,groupHeader:a="full"})=>n.jsx(t,{features:Ar,data:e,columns:Ir,getRowId:r=>r.id,rowHeight:36,autoResetExpanded:!1,columnMenu:Kn(),groupHeader:a,initialState:{grouping:["stream-level1","stream-level2","stream-level3"],expanded:!0}}),_r=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,groupedRowModel:h(),expandedRowModel:p()}),B=l(),Gr=[...o({stream:{levels:3,path:e=>e.path}}),...B.columns([B.accessor("name",{header:"Name"}),B.accessor("role",{header:"Role"}),B.accessor("rate",{header:"Rate"})])],Pr=({rows:e,groupHeader:a="labels"})=>n.jsx(t,{features:_r,data:e,columns:Gr,getRowId:r=>r.id,rowHeight:36,autoResetExpanded:!1,groupHeader:a,initialState:{grouping:["stream-level1","stream-level2","stream-level3"],expanded:!0}}),Lr=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,rowSortingFeature:Me,columnSizingFeature:na,columnResizingFeature:ea,columnPinningFeature:Xn,groupedRowModel:h(),expandedRowModel:p(),sortedRowModel:He(),sortFns:Qn}),V=l(),zr=[...o({stream:{levels:3,path:e=>e.path}}),...V.columns([V.accessor("name",{header:"Name",size:220}),V.accessor("role",{header:"Role",size:200}),V.accessor("rate",{header:"Rate",size:120,sortFn:"basic"})])],$r=({rows:e,groupHeader:a="full",header:r="none"})=>n.jsx(t,{features:Lr,data:e,columns:zr,getRowId:y=>y.id,rowHeight:36,autoResetExpanded:!1,columnMenu:Kn(),groupHeader:a,header:r,initialState:{grouping:["stream-level1","stream-level2","stream-level3"],expanded:!0}}),Ur=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,groupedRowModel:h(),expandedRowModel:p()}),W=l(),Br=[...o({stream:{levels:3,path:e=>e.path}}),...W.columns([W.accessor("name",{header:"Name"}),W.accessor("role",{header:"Role"}),W.accessor("rate",{header:"Rate"})])],Vr=({rows:e,groupIndent:a="none"})=>n.jsx(t,{features:Ur,data:e,columns:Br,getRowId:r=>r.id,rowHeight:36,autoResetExpanded:!1,groupIndent:a,initialState:{grouping:["stream-level1","stream-level2","stream-level3"],expanded:!0}}),Wr=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,groupedRowModel:h(),expandedRowModel:p()}),Y=l(),Yr=[...o({stream:{levels:3,path:e=>e.path}}),...Y.columns([Y.accessor("name",{header:"Name"}),Y.accessor("role",{header:"Role"}),Y.accessor("rate",{header:"Rate"})])],qr=({group:e,path:a,data:r,band:y,top:F,height:E,width:S})=>(a==null?void 0:a.length)===1?n.jsxs("div",{"data-own-band":!0,style:{position:"sticky",top:F,height:E,width:S,boxSizing:"border-box",display:"flex",alignItems:"center",gap:12,padding:"0 12px",background:"#E8F1FF",fontWeight:700},children:[n.jsx("span",{children:a[0]}),n.jsx("span",{"data-owner":!0,children:String(r==null?void 0:r.owner)}),n.jsx("button",{type:"button","data-fold":!0,onClick:()=>e.toggleExpanded(),children:e.getIsExpanded()?"Fold":"Open"})]}):y,Jr=({rows:e})=>n.jsx(t,{features:Wr,data:e,columns:Yr,getRowId:a=>a.id,rowHeight:36,autoResetExpanded:!1,groupData:a=>ta[a.join(">")],slots:{nodeRow:qr},initialState:{grouping:["stream-level1","stream-level2","stream-level3"],expanded:!0}}),Zr=s({columnGroupingFeature:u,rowExpandingFeature:c,rowAggregationFeature:aa,groupRowsFeature:i,rowHierarchyFeature:d,groupedRowModel:h(),expandedRowModel:p()}),D=l(),Kr=[...o({stream:{levels:3,path:e=>e.path}}),...D.columns([D.accessor("name",{header:"Name"}),D.accessor("role",{header:"Role",aggregatedCell:e=>{var a,r;return n.jsx("span",{"data-health":(a=e.row.getGroupData())==null?void 0:a.health,children:(r=e.row.getGroupData())==null?void 0:r.health})}}),D.accessor("rate",{header:"Progress",aggregatedCell:e=>{var a;return n.jsx("progress",{max:100,value:(a=e.row.getGroupData())==null?void 0:a.progress})}}),D.accessor("hours",{header:"Board",aggregatedCell:e=>{var a;return n.jsx("a",{href:`#${(a=e.row.getGroupPath())==null?void 0:a.join("/")}`,children:"Open"})}})])],Qr=({rows:e})=>n.jsx(t,{features:Zr,data:e,columns:Kr,getRowId:a=>a.id,rowHeight:36,autoResetExpanded:!1,groupData:a=>ta[a.join(">")],initialState:{grouping:["stream-level1","stream-level2","stream-level3"],expanded:!0}}),Xr=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,rowSelectionFeature:Ce,columnMeta:xe(),groupedRowModel:h(),expandedRowModel:p()}),A=l(),et=[...o({stream:{levels:3,path:e=>e.path,layout:"lanes",labels:["Organisation","Business unit","Unit"]}}),Fe(A),...A.columns([A.accessor("name",{header:"Name"}),A.accessor("team",{header:"Team",meta:{groupLayout:"rows"}}),A.accessor("rate",{header:"Rate"})])],nt=e=>n.jsx(ra,{table:e,getActions:()=>[]}),at=({rows:e,groupIndent:a="depth"})=>n.jsx(t,{features:Xr,data:e,columns:et,getRowId:r=>r.id,rowHeight:36,autoResetExpanded:!1,bulkBar:nt,groupIndent:a,initialState:{grouping:["stream-level1","stream-level2","stream-level3","team"],expanded:!0}}),rt=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,rowSelectionFeature:Ce,groupedRowModel:h(),expandedRowModel:p()}),I=l(),tt=[...o({stream:{levels:3,path:e=>e.path}}),Fe(I),...I.columns([I.accessor("name",{header:"Name"}),I.accessor("role",{header:"Role"}),I.accessor("rate",{header:"Rate"})])],ot=e=>n.jsx(ra,{table:e,getActions:()=>[]}),st=({rows:e,groupIndent:a="depth"})=>n.jsx(t,{features:rt,data:e,columns:tt,getRowId:r=>r.id,rowHeight:36,autoResetExpanded:!1,bulkBar:ot,groupIndent:a,initialState:{grouping:["stream-level1","stream-level2","stream-level3"],expanded:!0,rowSelection:{d3:!0}}}),lt=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,columnMeta:xe(),groupedRowModel:h(),expandedRowModel:p()}),Ee=l(),dt=[...o({stream:{levels:3,path:e=>e.path}}),...Ee.columns([Ee.accessor("name",{header:"Name"}),Ee.accessor("role",{header:"Role",meta:{groupLayout:"lanes"}})])],it=e=>n.jsx(Yn,{table:e,controls:[qn()]}),ct=({rows:e})=>n.jsx(t,{features:lt,data:e,columns:dt,getRowId:a=>a.id,rowHeight:36,autoResetExpanded:!1,initialState:{grouping:["stream-level1","stream-level2","stream-level3","role"],expanded:!0},toolbar:it}),ut=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,columnMeta:xe(),groupedRowModel:h(),expandedRowModel:p()}),q=l(),pt=[...o({places:{levels:2,path:e=>[e.country,e.city],layout:"lanes",labels:["Country","City"]}}),...q.columns([q.accessor("name",{header:"Name"}),q.accessor("role",{header:"Role"}),q.accessor("team",{header:"Team",meta:{groupLayout:"rows"}})])],ht=({people:e})=>n.jsx(t,{features:ut,data:e,columns:pt,getRowId:a=>a.id,rowHeight:36,autoResetExpanded:!1,initialState:{grouping:["places-level1","places-level2","team"],expanded:!0}}),mt=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,groupedRowModel:h(),expandedRowModel:p()}),J=l(),wt=e=>[...o({places:{levels:2,path:a=>[a.country,a.city],layout:e,labels:["Country","City"]}}),...J.columns([J.accessor("name",{header:"Name"}),J.accessor("role",{header:"Role"}),J.accessor("rate",{header:"Rate"})])],gt=({people:e,layout:a="lanes"})=>{const r=x.useMemo(()=>wt(a),[a]);return n.jsx(t,{features:mt,data:e,columns:r,getRowId:y=>y.id,rowHeight:36,autoResetExpanded:!1,initialState:{grouping:["places-level1","places-level2"],expanded:!0}})},yt=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,groupedRowModel:h(),expandedRowModel:p()}),Z=l(),ft=[...o({stream:{levels:3,path:e=>e.path}}),...Z.columns([Z.accessor("name",{header:"Name"}),Z.accessor("role",{header:"Role"}),Z.accessor("rate",{header:"Rate"})])],De=[["Northwind","Europe","Engineering"],["Northwind","Europe","Data platform"],["Northwind","Americas","Design"]],H=e=>e.join(">"),bt=({all:e,delay:a=600,failFirst:r=!0})=>{const[y,F]=x.useState([]),[E,S]=x.useState({}),M=x.useRef(new Set(r?["Northwind>Europe>Data platform"]:[])),P=e.filter(b=>b.path.length<3||y.includes(H(b.path))),N=(b,C)=>S(Se=>({...Se,[b]:C})),da=b=>{const C=H(b);N(C,"loading"),setTimeout(()=>{M.current.delete(C)?N(C,{error:"The server did not answer"}):(F(Se=>[...Se,C]),N(C,"idle"))},a)};return n.jsx(t,{features:yt,data:P,columns:ft,getRowId:b=>b.id,rowHeight:36,autoResetExpanded:!1,groupPaths:()=>De,groupData:b=>De.some(C=>H(C)===H(b))&&!y.includes(H(b))?{hasChildren:!0,status:E[H(b)]??"idle"}:void 0,onGroupOpen:da,initialState:{grouping:["stream-level1","stream-level2","stream-level3"],expanded:{"stream-level1:Northwind":!0,"stream-level1:Northwind>stream-level2:Europe":!0,"stream-level1:Northwind>stream-level2:Americas":!0}}})},Rt=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,groupedRowModel:h(),expandedRowModel:p()}),K=l(),vt=e=>[...o({stream:{levels:3,path:a=>a.path,layout:e}}),...K.columns([K.accessor("name",{header:"Name"}),K.accessor("role",{header:"Role"}),K.accessor("rate",{header:"Rate"})])],xt=({rows:e,layout:a="rows"})=>{const r=x.useMemo(()=>vt(a),[a]);return n.jsx(t,{features:Rt,data:e,columns:r,getRowId:y=>y.id,rowHeight:36,autoResetExpanded:!1,initialState:{grouping:["stream-level1","stream-level2","stream-level3"],expanded:!0}})},Ft=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,groupedRowModel:h(),expandedRowModel:p()}),Q=l(),Ct=[...o({stream:{levels:3,path:e=>e.path}}),...Q.columns([Q.accessor("name",{header:"Name"}),Q.accessor("role",{header:"Role"}),Q.accessor("rate",{header:"Rate"})])],Tt=[["Northwind","Americas","Growth"],["Northwind","Support"]],St=({rows:e})=>n.jsx(t,{features:Ft,data:e,columns:Ct,getRowId:a=>a.id,rowHeight:36,autoResetExpanded:!1,groupPaths:()=>Tt,initialState:{grouping:["stream-level1","stream-level2","stream-level3"],expanded:!0}}),Et=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,groupedRowModel:h(),expandedRowModel:p()}),X=l(),Mt=[...o({stream:{levels:3,path:e=>e.path}}),...X.columns([X.accessor("name",{header:"Name"}),X.accessor("role",{header:"Role"}),X.accessor("rate",{header:"Rate"})])],Ht=e=>({name:ga[e.join(">")]}),Nt=({rows:e})=>n.jsx(t,{features:Et,data:e,columns:Mt,getRowId:a=>a.id,rowHeight:36,autoResetExpanded:!1,groupData:Ht,initialState:{grouping:["stream-level1","stream-level2","stream-level3"],expanded:!0}}),kt=s({columnGroupingFeature:u,rowExpandingFeature:c,rowAggregationFeature:aa,groupRowsFeature:i,rowHierarchyFeature:d,groupedRowModel:h(),expandedRowModel:p(),aggregationFns:{mean:ma,sum:ha}}),O=l(),jt=[...o({stream:{levels:3,path:e=>e.path}}),...O.columns([O.accessor("name",{header:"Name"}),O.accessor("role",{header:"Role"}),O.accessor("rate",{header:"Rate",aggregationFn:"mean"}),O.accessor("hours",{header:"Hours",aggregationFn:"sum"})])],Dt=e=>e.join(">")==="Northwind>Americas"?{leafCount:12,totals:{rate:61,hours:1560}}:void 0,At=({rows:e})=>n.jsx(t,{features:kt,data:e,columns:jt,getRowId:a=>a.id,rowHeight:36,autoResetExpanded:!1,groupData:Dt,groupPaths:()=>[["Northwind","Support"]],initialState:{grouping:["stream-level1","stream-level2","stream-level3"],expanded:!0}}),It=({table:e,hierarchyId:a,label:r})=>{const y=e.getHierarchy()===a;return n.jsxs("div",{style:{display:"flex",gap:8,padding:8},"data-hierarchy-switch":!0,children:[n.jsx("button",{type:"button","aria-pressed":!y,onClick:()=>e.setHierarchy(null),children:"Flat"}),n.jsx("button",{type:"button","aria-pressed":y,onClick:()=>e.setHierarchy(a),children:r})]})},Ot=s({columnGroupingFeature:u,rowExpandingFeature:c,groupRowsFeature:i,rowHierarchyFeature:d,groupedRowModel:h(),expandedRowModel:p()}),_=l(),_t=[...o({places:{levels:2,path:e=>[e.country,e.city]}}),..._.columns([_.accessor("name",{header:"Name"}),_.accessor("role",{header:"Role"}),_.accessor("country",{header:"Country"}),_.accessor("city",{header:"City"})])],Gt=e=>n.jsx(It,{table:e,hierarchyId:"places",label:"Country › City"}),Pt=({people:e})=>n.jsx(t,{features:Ot,data:e,columns:_t,getRowId:a=>a.id,autoResetExpanded:!1,rowHeight:36,toolbar:Gt}),[Lt]=Object.values([Ba]),[zt]=Object.values([Va]),[$t]=Object.values([Wa]),[Ut]=Object.values([Ya]),[Bt]=Object.values([qa]),[Vt]=Object.values([Ja]),[Wt]=Object.values([Za]),[Yt]=Object.values([Ka]),[qt]=Object.values([Qa]),[Jt]=Object.values([Xa]),[Zt]=Object.values([er]),[Kt]=Object.values([nr]),[Qt]=Object.values([ar]),[Xt]=Object.values([rr]),[eo]=Object.values([tr]),[no]=Object.values([or]),[ao]=Object.values([sr]),[ro]=Object.values([lr]),[to]=Object.values([dr]),[oo]=Object.values([ir]),[so]=Object.values([cr]),[lo]=Object.values([ur]),mo={title:"Tables/Table Core/Features/Hierarchy/Basics",id:"tables-table-core-features-hierarchy-basics",...wa(Lt)},io=G(12),ee={tags:["kb:hierarchy-flat-or-hierarchy"],name:"1 · Flat or a hierarchy",parameters:{summary:"The rows are flat; a hierarchy is the path of each row (country, city), switched on and off."},render:()=>n.jsx(m,{hint:n.jsx(g,{text:"The same twelve people, flat. **Country › City** puts them in a tree: a country, the cities in it, the people in a city. **Flat** takes the tree away."}),children:n.jsx(Pt,{people:io})}),play:async e=>{w(e)||await xa(e.canvasElement)}},ne={tags:["kb:hierarchy-different-depth"],name:"2 · Rows at different depth",parameters:{...v(zt,"DifferentDepth"),summary:"A path may stop above the last level: such a row stands under its own node, and no empty node is drawn."},args:{layout:"rows"},argTypes:{layout:{control:"radio",options:["rows","lanes"]}},render:e=>n.jsx(R,{args:e,children:n.jsx(m,{hint:n.jsx(g,{text:"**Northwind › Europe › Engineering** is three levels deep, but Anna stands right under **Northwind** and Piotr under **Europe**. Nothing is drawn for the levels their path does not have."}),children:n.jsx(xt,{...e,rows:f})})}),play:async e=>{w(e)||await Ra(e.canvasElement)}},ae={tags:["kb:hierarchy-empty-nodes"],name:"3 · Nodes with no rows",parameters:{...T($t),summary:"`groupPaths` lists nodes that exist and have no rows: they are drawn, and are no rows of the table."},render:()=>n.jsx(m,{hint:n.jsx(g,{text:"**Growth** and **Support** have nobody yet, and are still on the screen, with **0** and no −/+. They are not rows: no total, selection or copy sees them."}),children:n.jsx(St,{rows:f})}),play:async e=>{w(e)||await va(e.canvasElement)}},re={tags:["kb:hierarchy-node-view"],name:"4 · A node with its own name, sticking",parameters:{...T(Ut),summary:"`groupData(path)` gives a node what the screen knows of it, its name first; a node row sticks while its rows scroll."},render:()=>n.jsx(m,{fit:"scroll",hint:n.jsx(g,{text:"Each node shows the name the screen knows for its path (**Engineering · data and cloud**). Scroll: the node row of the unit you are in stays under the header, and the nodes above it stay over it."}),children:n.jsx(Nt,{rows:Te()})}),play:async e=>{w(e)||await Aa(e.canvasElement)}},te={tags:["kb:hierarchy-totals"],name:"5 · Totals of a node",parameters:{...T(Bt),summary:"A node adds up its rows with the column’s `aggregationFn`; the totals and count the server sends win; a node with nothing says “—”."},render:()=>n.jsx(m,{hint:n.jsx(g,{text:"**Rate** is an average and **Hours** a sum, over the people under each node. **Americas** shows what the server sent for its twelve people, not the three loaded here. **Support** has nobody and no total: **—**."}),children:n.jsx(At,{rows:f})}),play:async e=>{w(e)||await Ua(e.canvasElement)}},oe={tags:["kb:hierarchy-lazy-nodes"],name:"6 · A hierarchy that loads",parameters:{...v(Vt,"LazyNodes"),summary:"A node with `hasChildren` opens before its rows are here: the screen loads them (`onGroupOpen`), the node says Loading… or why it failed, with a Retry. The numbers of a node and Show more are the same as for any group: see Grouping › On the server."},args:{delay:600,failFirst:!0},argTypes:{delay:{control:{type:"number",min:0,max:3e3,step:100}},failFirst:{control:{type:"boolean"}}},render:e=>n.jsx(R,{args:e,children:n.jsx(m,{hint:n.jsx(g,{text:"The three units are here without their people. Open one: **Loading…** stands under it until the server answers (`delay`). **Data platform** fails the first time (`failFirst`): it shows why and a **Retry**."}),children:n.jsx(bt,{all:f,...e})})}),play:async e=>{w(e)||(await Ta(e.canvasElement),await Sa(e))}},se={tags:["kb:hierarchy-pages"],name:"7 · Pages of nodes",parameters:{...v(Wt,"Pages"),summary:"A page is a number of top-level nodes with everything under them: the page size counts nodes, never a cut through one."},args:{pageSize:2},argTypes:{pageSize:{control:{type:"number",min:1,max:3}}},render:e=>n.jsx(R,{args:e,children:n.jsx(m,{hint:n.jsx(g,{text:"Three countries, **two to a page**. A page ends between countries, never in the middle of one: **Next** shows the next two with their cities and people."}),children:n.jsx(Fr,{...e,people:G(40)})})}),play:async e=>{w(e)||(await oa(e.canvasElement),await sa(e.canvasElement),await _a(e))}},le={tags:["kb:hierarchy-server-pages"],name:"8 · Pages from the server",parameters:{...v(Yt,"ServerPages"),summary:"`manualPagination` with `rowCount` = the number of top-level nodes: the server sends the people of one page of nodes, the table groups them."},args:{pageSize:2},argTypes:{pageSize:{control:{type:"number",min:1,max:3}}},render:e=>n.jsx(R,{args:e,children:n.jsx(Nr,{...e,hint:n.jsx(g,{text:"The same pages, cut by the server: it answers with the people of two countries (`pageSize`), and says there are **three countries** (`rowCount`). The table counts pages in countries, not in people."})})}),play:async e=>{w(e)||(await oa(e.canvasElement),await sa(e.canvasElement),await za(e))}},de={tags:["kb:hierarchy-sort-and-filter"],name:"9 · Sorting and filtering",parameters:{...T(qt),summary:"Rows are filtered before they stand in nodes and sorted inside them: a filter leaves the nodes that have a match, a sort orders the rows of each node."},render:()=>n.jsx(m,{hint:n.jsx(g,{text:"**Hours, most first** orders the people inside every node; the nodes stay where they are. Type **Developer** in the filter: units with no developer go, and so does **Support**, which has nobody."}),children:n.jsx(br,{rows:f})}),play:async e=>{w(e)||await $a(e.canvasElement)}},ie={tags:["kb:hierarchy-own-grouping"],name:"10 · Grouping by Team inside the nodes",parameters:{...T(Jt),summary:"The user’s own grouping comes after the levels of the hierarchy in `state.grouping`: v9 nests it inside the last node, and the Grouping panel shows only it."},render:()=>n.jsx(m,{hint:n.jsx(g,{text:"The people of each unit are grouped by **Team**, inside the unit. Open **Grouping**: it lists Team only, the levels of the hierarchy are not the user's to change."}),children:n.jsx(wr,{rows:f})}),play:async e=>{w(e)||await Oa(e.canvasElement)}},ce={tags:["kb:hierarchy-lanes"],name:"11 · Country › City as lanes",parameters:{...v(Zt,"AsLanes"),summary:"A level of a hierarchy is drawn as a lane or as a header row, as any grouping’s: `layout` of the hierarchy, or `meta.groupLayout` of its level."},args:{layout:"lanes"},argTypes:{layout:{control:"radio",options:["rows","lanes"]}},render:e=>n.jsx(R,{args:e,children:n.jsx(m,{hint:n.jsx(g,{text:"The same twelve people, with **Country** and **City** as two lanes at the left: each node is one tall cell spanning its rows. `layout: 'lanes'` says it."}),children:n.jsx(gt,{...e,people:G(12)})})}),play:async e=>{w(e)||(await ya(e.canvasElement),await fa(e))}},ue={tags:["kb:hierarchy-lanes-and-rows"],name:"12 · Lanes and rows together",parameters:{...T(Kt),summary:"Any mix works: the hierarchy as lanes and the user’s own grouping as header rows inside, or the other way round."},render:()=>n.jsx(m,{hint:n.jsx(g,{text:"**Country** and **City** are lanes, **Team** (the user's own grouping) is a header row inside each city. It is one grouping: the layout of a level is chosen the same way for every level."}),children:n.jsx(ht,{people:G(12)})}),play:async e=>{w(e)||await Fa(e.canvasElement)}},pe={tags:["kb:hierarchy-depth-lanes"],name:"13 · Rows at different depth, as lanes",parameters:{...v(Qt,"DepthAsLanes"),summary:"With lanes, a level the path does not reach is a lane cell with nothing in it: the row stands in its lane of the level above and the deeper lanes are blank beside it."},args:{layout:"lanes"},argTypes:{layout:{control:"radio",options:["rows","lanes"]}},render:e=>n.jsx(R,{args:e,children:n.jsx(m,{hint:n.jsx(g,{text:"Anna stands right under **Northwind**, Piotr under **Europe**: in the lanes of the levels their path does not reach, the cell beside them is empty."}),children:n.jsx(Dr,{...e,rows:f})})}),play:async e=>{w(e)||await ba(e.canvasElement)}},he={tags:["kb:hierarchy-header-labels"],name:"14 · Node header: labels",parameters:{...v(Xt,"NodeHeaderLabels"),summary:"`groupHeader: 'labels'`: an open group repeats the labels of the columns under its band; it sticks under the band while the rows scroll."},args:{groupHeader:"labels"},argTypes:{groupHeader:{control:"radio",options:["none","labels","full"]}},render:e=>n.jsx(R,{args:e,children:n.jsx(m,{fit:"scroll",hint:n.jsx(g,{text:"Every open node has the labels of the columns under its band, so a long list can be read without scrolling back up. Scroll: the labels stay under the band of the node you are in."}),children:n.jsx(Pr,{...e,rows:Te()})})}),play:async e=>{w(e)||(await Na(e.canvasElement),await ka(e))}},me={tags:["kb:hierarchy-header-full"],name:"15 · Node header: the table’s own",parameters:{...v(eo,"NodeHeaderFull"),summary:"`groupHeader: 'full'`: the header a group repeats is the table’s own piece: sort, menu, resize and move act on the state of the one table."},args:{groupHeader:"full"},argTypes:{groupHeader:{control:"radio",options:["none","labels","full"]}},render:e=>n.jsx(R,{args:e,children:n.jsx(m,{fit:"scroll",hint:n.jsx(g,{text:"The header under a node is the table's header, not a copy: click **Rate** in it and every header sorts, pull an edge and the column is wider everywhere, open the menu of **Role**."}),children:n.jsx(Or,{...e,rows:Te()})})}),play:async e=>{w(e)||await Ha(e.canvasElement)}},we={tags:["kb:hierarchy-header-only"],name:"16 · Only node headers",parameters:{...v(no,"OnlyNodeHeaders"),summary:"`header: 'none'`: the table draws no header of its own; the headers of the groups do its work."},args:{groupHeader:"full",header:"none"},argTypes:{groupHeader:{control:"radio",options:["none","labels","full"]},header:{control:"radio",options:["global","none"]}},render:e=>n.jsx(R,{args:e,children:n.jsx(m,{fit:"scroll",hint:n.jsx(g,{text:"No header at the top: the headers stand under the nodes, and everything the header does (sort, resize, menu, frozen columns) works from them."}),children:n.jsx($r,{...e,rows:Te()})})}),play:async e=>{w(e)||await Ia(e.canvasElement)}},ge={tags:["kb:hierarchy-node-cells"],name:"17 · Node row: own cells",parameters:{...T(ao),summary:"A column draws a group’s cell with its own `aggregatedCell` (v9’s); the context has the row, `row.getGroupPath()` and `row.getGroupData()`: anything the screen knows of the group."},render:()=>n.jsx(m,{hint:n.jsx(g,{text:"The cells of a node are the screen's own: a **chip** from the unit's health, a **progress** bar, a **link** made from its path. `groupData(path)` returns anything, the table reads only what it needs."}),children:n.jsx(Qr,{rows:f})}),play:async e=>{w(e)||await Da(e.canvasElement)}},ye={tags:["kb:hierarchy-node-band"],name:"18 · Node row: own band",parameters:{...T(ro),summary:"The `nodeRow` slot is the whole row of a group: it gets the group, its path and data, the cells and the default band; draw your own or wrap the default."},render:()=>n.jsx(m,{hint:n.jsx(g,{text:"The top unit has a **band of its own** across the table (its name, owner, a button); the other units keep the table's band, which the slot hands back as `band`."}),children:n.jsx(Jr,{rows:f})}),play:async e=>{w(e)||await ja(e.canvasElement)}},fe={tags:["kb:hierarchy-lanes-inside"],name:"19 · Lanes inside the nodes",parameters:{...T(to),summary:"Each level is drawn inside the block of its parent: a band of a node spans the whole width, the lanes of the levels inside start under it and end with the node."},render:()=>n.jsx(m,{hint:n.jsx(g,{text:"The nodes are header rows and **Role** (the user's own grouping) is a lane **inside** each node: the node's band covers the whole width, the lane starts under it and ends with the node."}),children:n.jsx(ct,{rows:f})}),play:async e=>{w(e)||await Ca(e.canvasElement)}},be={tags:["kb:hierarchy-select-node"],name:"20 · Select the rows of a node",parameters:{...v(oo,"SelectNode"),summary:"The checkbox of a node is a group’s: it selects the rows under it at any depth, a part shows a dash, the bulk bar counts the rows selected."},args:{groupIndent:"depth"},argTypes:{groupIndent:{control:"radio",options:["depth","none"]}},render:e=>n.jsx(R,{args:e,children:n.jsx(m,{hint:n.jsx(g,{text:"One person is selected, so the nodes above them show a **dash**. Tick **Europe**: every person under it, at any depth, is selected and only they. The bulk bar says how many."}),children:n.jsx(st,{...e,rows:f})})}),play:async e=>{w(e)||(await Pa(e.canvasElement),await La(e.canvasElement))}},Re={tags:["kb:hierarchy-row-numbers"],name:"21 · Row numbers in a hierarchy",parameters:{...v(so,"RowNumbers"),summary:"The utility column numbers the rows of data one after another, over nodes, teams and levels a path does not reach; a band has a checkbox of its own."},args:{groupIndent:"depth"},argTypes:{groupIndent:{control:"radio",options:["depth","none"]}},render:e=>n.jsx(R,{args:e,children:n.jsx(m,{hint:n.jsx(g,{text:"The hierarchy is three lanes, **Team** is a header row inside them. The people are numbered **1 to 8** one after another, whatever stands between them; a team's band has its checkbox."}),children:n.jsx(at,{...e,rows:f})})}),play:async e=>{w(e)||await Ga(e.canvasElement)}},ve={tags:["kb:hierarchy-no-indent"],name:"22 · Rows on one line",parameters:{...v(lo,"NoIndent"),summary:"`groupIndent`: the rows of data stand in one step for each node above them (`'depth'`, the default); `'none'` puts them all on one line."},args:{groupIndent:"none"},argTypes:{groupIndent:{control:"radio",options:["depth","none"]}},render:e=>n.jsx(R,{args:e,children:n.jsx(m,{hint:n.jsx(g,{text:"`groupIndent: 'none'`: the rows of data do not stand in, the bands do the telling. The default is `'depth'`: a row stands one step in from the name of its node."}),children:n.jsx(Vr,{...e,rows:f})})}),play:async e=>{w(e)||(await Ea(e.canvasElement),await Ma(e))}};var Ae,Ie,Oe;ee.parameters={...ee.parameters,docs:{...(Ae=ee.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-flat-or-hierarchy'],
  name: '1 · Flat or a hierarchy',
  parameters: {
    summary: 'The rows are flat; a hierarchy is the path of each row (country, city), switched on and off.'
  },
  render: () => <SceneFrame hint={<Md text="The same twelve people, flat. **Country › City** puts them in a tree: a country, the cities in it, the people in a city. **Flat** takes the tree away." />}>
            <PlacesTable people={people} />
        </SceneFrame>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await placesAct(ctx.canvasElement);
  }
}`,...(Oe=(Ie=ee.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var _e,Ge,Pe;ne.parameters={...ne.parameters,docs:{...(_e=ne.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-different-depth'],
  name: '2 · Rows at different depth',
  parameters: {
    ...sceneCodeWith(deliverySource, 'DifferentDepth'),
    summary: 'A path may stop above the last level: such a row stands under its own node, and no empty node is drawn.'
  },
  args: {
    layout: 'rows'
  },
  argTypes: {
    layout: {
      control: 'radio',
      options: ['rows', 'lanes']
    }
  },
  render: args => <Remount args={args}>
            <SceneFrame hint={<Md text="**Northwind › Europe › Engineering** is three levels deep, but Anna stands right under **Northwind** and Piotr under **Europe**. Nothing is drawn for the levels their path does not have." />}>
                <DeliveryTable {...args} rows={DELIVERY} />
            </SceneFrame>
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await deliveryAct(ctx.canvasElement);
  }
}`,...(Pe=(Ge=ne.parameters)==null?void 0:Ge.docs)==null?void 0:Pe.source}}};var Le,ze,$e;ae.parameters={...ae.parameters,docs:{...(Le=ae.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-empty-nodes'],
  name: '3 · Nodes with no rows',
  parameters: {
    ...sceneCodeOf(emptySource),
    summary: '\`groupPaths\` lists nodes that exist and have no rows: they are drawn, and are no rows of the table.'
  },
  render: () => <SceneFrame hint={<Md text="**Growth** and **Support** have nobody yet, and are still on the screen, with **0** and no −/+. They are not rows: no total, selection or copy sees them." />}>
            <EmptyNodesTable rows={DELIVERY} />
        </SceneFrame>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await emptyAct(ctx.canvasElement);
  }
}`,...($e=(ze=ae.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Ue,Be,Ve;re.parameters={...re.parameters,docs:{...(Ue=re.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-node-view'],
  name: '4 · A node with its own name, sticking',
  parameters: {
    ...sceneCodeOf(nodeNamesSource),
    summary: '\`groupData(path)\` gives a node what the screen knows of it, its name first; a node row sticks while its rows scroll.'
  },
  render: () => <SceneFrame fit="scroll" hint={<Md text="Each node shows the name the screen knows for its path (**Engineering · data and cloud**). Scroll: the node row of the unit you are in stays under the header, and the nodes above it stay over it." />}>
            <NodeNamesTable rows={manyDelivery()} />
        </SceneFrame>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nodeViewAct(ctx.canvasElement);
  }
}`,...(Ve=(Be=re.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var We,Ye,qe;te.parameters={...te.parameters,docs:{...(We=te.parameters)==null?void 0:We.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-totals'],
  name: '5 · Totals of a node',
  parameters: {
    ...sceneCodeOf(totalsSource),
    summary: 'A node adds up its rows with the column’s \`aggregationFn\`; the totals and count the server sends win; a node with nothing says “—”.'
  },
  render: () => <SceneFrame hint={<Md text="**Rate** is an average and **Hours** a sum, over the people under each node. **Americas** shows what the server sent for its twelve people, not the three loaded here. **Support** has nobody and no total: **—**." />}>
            <TotalsTable rows={DELIVERY} />
        </SceneFrame>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await totalsAct(ctx.canvasElement);
  }
}`,...(qe=(Ye=te.parameters)==null?void 0:Ye.docs)==null?void 0:qe.source}}};var Je,Ze,Ke;oe.parameters={...oe.parameters,docs:{...(Je=oe.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-lazy-nodes'],
  name: '6 · A hierarchy that loads',
  parameters: {
    ...sceneCodeWith(lazySource, 'LazyNodes'),
    summary: 'A node with \`hasChildren\` opens before its rows are here: the screen loads them (\`onGroupOpen\`), the node says Loading… or why it failed, with a Retry. The numbers of a node and Show more are the same as for any group: see Grouping › On the server.'
  },
  args: {
    delay: 600,
    failFirst: true
  },
  argTypes: {
    delay: {
      control: {
        type: 'number',
        min: 0,
        max: 3000,
        step: 100
      }
    },
    failFirst: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <SceneFrame hint={<Md text="The three units are here without their people. Open one: **Loading…** stands under it until the server answers (\`delay\`). **Data platform** fails the first time (\`failFirst\`): it shows why and a **Retry**." />}>
                <LazyTable all={DELIVERY} {...args} />
            </SceneFrame>
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await lazyAct(ctx.canvasElement);
    await lazyControlsAct(ctx);
  }
}`,...(Ke=(Ze=oe.parameters)==null?void 0:Ze.docs)==null?void 0:Ke.source}}};var Qe,Xe,en;se.parameters={...se.parameters,docs:{...(Qe=se.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-pages'],
  name: '7 · Pages of nodes',
  parameters: {
    ...sceneCodeWith(pagesSource, 'Pages'),
    summary: 'A page is a number of top-level nodes with everything under them: the page size counts nodes, never a cut through one.'
  },
  args: {
    pageSize: 2
  },
  argTypes: {
    pageSize: {
      control: {
        type: 'number',
        min: 1,
        max: 3
      }
    }
  },
  render: args => <Remount args={args}>
            <SceneFrame hint={<Md text="Three countries, **two to a page**. A page ends between countries, never in the middle of one: **Next** shows the next two with their cities and people." />}>
                <PagesTable {...args} people={makePeople(40)} />
            </SceneFrame>
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await pagesAct(ctx.canvasElement);
    await pageNumbersAct(ctx.canvasElement);
    await pageSizeControlAct(ctx);
  }
}`,...(en=(Xe=se.parameters)==null?void 0:Xe.docs)==null?void 0:en.source}}};var nn,an,rn;le.parameters={...le.parameters,docs:{...(nn=le.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-server-pages'],
  name: '8 · Pages from the server',
  parameters: {
    ...sceneCodeWith(serverPagesSource, 'ServerPages'),
    summary: '\`manualPagination\` with \`rowCount\` = the number of top-level nodes: the server sends the people of one page of nodes, the table groups them.'
  },
  args: {
    pageSize: 2
  },
  argTypes: {
    pageSize: {
      control: {
        type: 'number',
        min: 1,
        max: 3
      }
    }
  },
  render: args => <Remount args={args}>
            <ServerPagesScene {...args} hint={<Md text="The same pages, cut by the server: it answers with the people of two countries (\`pageSize\`), and says there are **three countries** (\`rowCount\`). The table counts pages in countries, not in people." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await pagesAct(ctx.canvasElement);
    await pageNumbersAct(ctx.canvasElement);
    await serverPageSizeAct(ctx);
  }
}`,...(rn=(an=le.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};var tn,on,sn;de.parameters={...de.parameters,docs:{...(tn=de.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-sort-and-filter'],
  name: '9 · Sorting and filtering',
  parameters: {
    ...sceneCodeOf(sortFilterSource),
    summary: 'Rows are filtered before they stand in nodes and sorted inside them: a filter leaves the nodes that have a match, a sort orders the rows of each node.'
  },
  render: () => <SceneFrame hint={<Md text="**Hours, most first** orders the people inside every node; the nodes stay where they are. Type **Developer** in the filter: units with no developer go, and so does **Support**, which has nobody." />}>
            <SortFilterTable rows={DELIVERY} />
        </SceneFrame>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await sortFilterAct(ctx.canvasElement);
  }
}`,...(sn=(on=de.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var ln,dn,cn;ie.parameters={...ie.parameters,docs:{...(ln=ie.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-own-grouping'],
  name: '10 · Grouping by Team inside the nodes',
  parameters: {
    ...sceneCodeOf(teamSource),
    summary: 'The user’s own grouping comes after the levels of the hierarchy in \`state.grouping\`: v9 nests it inside the last node, and the Grouping panel shows only it.'
  },
  render: () => <SceneFrame hint={<Md text="The people of each unit are grouped by **Team**, inside the unit. Open **Grouping**: it lists Team only, the levels of the hierarchy are not the user's to change." />}>
            <TeamTable rows={DELIVERY} />
        </SceneFrame>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await teamAct(ctx.canvasElement);
  }
}`,...(cn=(dn=ie.parameters)==null?void 0:dn.docs)==null?void 0:cn.source}}};var un,pn,hn;ce.parameters={...ce.parameters,docs:{...(un=ce.parameters)==null?void 0:un.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-lanes'],
  name: '11 · Country › City as lanes',
  parameters: {
    ...sceneCodeWith(lanesSource, 'AsLanes'),
    summary: 'A level of a hierarchy is drawn as a lane or as a header row, as any grouping’s: \`layout\` of the hierarchy, or \`meta.groupLayout\` of its level.'
  },
  args: {
    layout: 'lanes'
  },
  argTypes: {
    layout: {
      control: 'radio',
      options: ['rows', 'lanes']
    }
  },
  render: args => <Remount args={args}>
            <SceneFrame hint={<Md text="The same twelve people, with **Country** and **City** as two lanes at the left: each node is one tall cell spanning its rows. \`layout: 'lanes'\` says it." />}>
                <LanesTable {...args} people={makePeople(12)} />
            </SceneFrame>
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await lanesAct(ctx.canvasElement);
    await layoutControlAct(ctx);
  }
}`,...(hn=(pn=ce.parameters)==null?void 0:pn.docs)==null?void 0:hn.source}}};var mn,wn,gn;ue.parameters={...ue.parameters,docs:{...(mn=ue.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-lanes-and-rows'],
  name: '12 · Lanes and rows together',
  parameters: {
    ...sceneCodeOf(lanesRowsSource),
    summary: 'Any mix works: the hierarchy as lanes and the user’s own grouping as header rows inside, or the other way round.'
  },
  render: () => <SceneFrame hint={<Md text="**Country** and **City** are lanes, **Team** (the user's own grouping) is a header row inside each city. It is one grouping: the layout of a level is chosen the same way for every level." />}>
            <LanesRowsTable people={makePeople(12)} />
        </SceneFrame>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await lanesRowsAct(ctx.canvasElement);
  }
}`,...(gn=(wn=ue.parameters)==null?void 0:wn.docs)==null?void 0:gn.source}}};var yn,fn,bn;pe.parameters={...pe.parameters,docs:{...(yn=pe.parameters)==null?void 0:yn.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-depth-lanes'],
  name: '13 · Rows at different depth, as lanes',
  parameters: {
    ...sceneCodeWith(deliveryLanesSource, 'DepthAsLanes'),
    summary: 'With lanes, a level the path does not reach is a lane cell with nothing in it: the row stands in its lane of the level above and the deeper lanes are blank beside it.'
  },
  args: {
    layout: 'lanes'
  },
  argTypes: {
    layout: {
      control: 'radio',
      options: ['rows', 'lanes']
    }
  },
  render: args => <Remount args={args}>
            <SceneFrame hint={<Md text="Anna stands right under **Northwind**, Piotr under **Europe**: in the lanes of the levels their path does not reach, the cell beside them is empty." />}>
                <DeliveryLanesTable {...args} rows={DELIVERY} />
            </SceneFrame>
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await depthLanesAct(ctx.canvasElement);
  }
}`,...(bn=(fn=pe.parameters)==null?void 0:fn.docs)==null?void 0:bn.source}}};var Rn,vn,xn;he.parameters={...he.parameters,docs:{...(Rn=he.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-header-labels'],
  name: '14 · Node header: labels',
  parameters: {
    ...sceneCodeWith(headerLabelsSource, 'NodeHeaderLabels'),
    summary: "\`groupHeader: 'labels'\`: an open group repeats the labels of the columns under its band; it sticks under the band while the rows scroll."
  },
  args: {
    groupHeader: 'labels'
  },
  argTypes: {
    groupHeader: {
      control: 'radio',
      options: ['none', 'labels', 'full']
    }
  },
  render: args => <Remount args={args}>
            <SceneFrame fit="scroll" hint={<Md text="Every open node has the labels of the columns under its band, so a long list can be read without scrolling back up. Scroll: the labels stay under the band of the node you are in." />}>
                <HeaderLabelsTable {...args} rows={manyDelivery()} />
            </SceneFrame>
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await headerLabelsAct(ctx.canvasElement);
    await headerControlAct(ctx);
  }
}`,...(xn=(vn=he.parameters)==null?void 0:vn.docs)==null?void 0:xn.source}}};var Fn,Cn,Tn;me.parameters={...me.parameters,docs:{...(Fn=me.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-header-full'],
  name: '15 · Node header: the table’s own',
  parameters: {
    ...sceneCodeWith(headerFullSource, 'NodeHeaderFull'),
    summary: "\`groupHeader: 'full'\`: the header a group repeats is the table’s own piece: sort, menu, resize and move act on the state of the one table."
  },
  args: {
    groupHeader: 'full'
  },
  argTypes: {
    groupHeader: {
      control: 'radio',
      options: ['none', 'labels', 'full']
    }
  },
  render: args => <Remount args={args}>
            <SceneFrame fit="scroll" hint={<Md text="The header under a node is the table's header, not a copy: click **Rate** in it and every header sorts, pull an edge and the column is wider everywhere, open the menu of **Role**." />}>
                <HeaderFullTable {...args} rows={manyDelivery()} />
            </SceneFrame>
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await headerFullAct(ctx.canvasElement);
  }
}`,...(Tn=(Cn=me.parameters)==null?void 0:Cn.docs)==null?void 0:Tn.source}}};var Sn,En,Mn;we.parameters={...we.parameters,docs:{...(Sn=we.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-header-only'],
  name: '16 · Only node headers',
  parameters: {
    ...sceneCodeWith(headerOnlySource, 'OnlyNodeHeaders'),
    summary: "\`header: 'none'\`: the table draws no header of its own; the headers of the groups do its work."
  },
  args: {
    groupHeader: 'full',
    header: 'none'
  },
  argTypes: {
    groupHeader: {
      control: 'radio',
      options: ['none', 'labels', 'full']
    },
    header: {
      control: 'radio',
      options: ['global', 'none']
    }
  },
  render: args => <Remount args={args}>
            <SceneFrame fit="scroll" hint={<Md text="No header at the top: the headers stand under the nodes, and everything the header does (sort, resize, menu, frozen columns) works from them." />}>
                <HeaderOnlyTable {...args} rows={manyDelivery()} />
            </SceneFrame>
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await headerOnlyAct(ctx.canvasElement);
  }
}`,...(Mn=(En=we.parameters)==null?void 0:En.docs)==null?void 0:Mn.source}}};var Hn,Nn,kn;ge.parameters={...ge.parameters,docs:{...(Hn=ge.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-node-cells'],
  name: '17 · Node row: own cells',
  parameters: {
    ...sceneCodeOf(nodeCellsSource),
    summary: 'A column draws a group’s cell with its own \`aggregatedCell\` (v9’s); the context has the row, \`row.getGroupPath()\` and \`row.getGroupData()\`: anything the screen knows of the group.'
  },
  render: () => <SceneFrame hint={<Md text="The cells of a node are the screen's own: a **chip** from the unit's health, a **progress** bar, a **link** made from its path. \`groupData(path)\` returns anything, the table reads only what it needs." />}>
            <NodeCellsTable rows={DELIVERY} />
        </SceneFrame>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nodeCellsAct(ctx.canvasElement);
  }
}`,...(kn=(Nn=ge.parameters)==null?void 0:Nn.docs)==null?void 0:kn.source}}};var jn,Dn,An;ye.parameters={...ye.parameters,docs:{...(jn=ye.parameters)==null?void 0:jn.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-node-band'],
  name: '18 · Node row: own band',
  parameters: {
    ...sceneCodeOf(nodeBandSource),
    summary: 'The \`nodeRow\` slot is the whole row of a group: it gets the group, its path and data, the cells and the default band; draw your own or wrap the default.'
  },
  render: () => <SceneFrame hint={<Md text="The top unit has a **band of its own** across the table (its name, owner, a button); the other units keep the table's band, which the slot hands back as \`band\`." />}>
            <NodeBandTable rows={DELIVERY} />
        </SceneFrame>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nodeBandAct(ctx.canvasElement);
  }
}`,...(An=(Dn=ye.parameters)==null?void 0:Dn.docs)==null?void 0:An.source}}};var In,On,_n;fe.parameters={...fe.parameters,docs:{...(In=fe.parameters)==null?void 0:In.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-lanes-inside'],
  name: '19 · Lanes inside the nodes',
  parameters: {
    ...sceneCodeOf(roleLanesSource),
    summary: 'Each level is drawn inside the block of its parent: a band of a node spans the whole width, the lanes of the levels inside start under it and end with the node.'
  },
  render: () => <SceneFrame hint={<Md text="The nodes are header rows and **Role** (the user's own grouping) is a lane **inside** each node: the node's band covers the whole width, the lane starts under it and ends with the node." />}>
            <RoleLanesTable rows={DELIVERY} />
        </SceneFrame>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nestingAct(ctx.canvasElement);
  }
}`,...(_n=(On=fe.parameters)==null?void 0:On.docs)==null?void 0:_n.source}}};var Gn,Pn,Ln;be.parameters={...be.parameters,docs:{...(Gn=be.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-select-node'],
  name: '20 · Select the rows of a node',
  parameters: {
    ...sceneCodeWith(selectSource, 'SelectNode'),
    summary: 'The checkbox of a node is a group’s: it selects the rows under it at any depth, a part shows a dash, the bulk bar counts the rows selected.'
  },
  args: {
    groupIndent: 'depth'
  },
  argTypes: {
    groupIndent: {
      control: 'radio',
      options: ['depth', 'none']
    }
  },
  render: args => <Remount args={args}>
            <SceneFrame hint={<Md text="One person is selected, so the nodes above them show a **dash**. Tick **Europe**: every person under it, at any depth, is selected and only they. The bulk bar says how many." />}>
                <SelectTable {...args} rows={DELIVERY} />
            </SceneFrame>
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await selectLookAct(ctx.canvasElement);
    await selectNodeAct(ctx.canvasElement);
  }
}`,...(Ln=(Pn=be.parameters)==null?void 0:Pn.docs)==null?void 0:Ln.source}}};var zn,$n,Un;Re.parameters={...Re.parameters,docs:{...(zn=Re.parameters)==null?void 0:zn.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-row-numbers'],
  name: '21 · Row numbers in a hierarchy',
  parameters: {
    ...sceneCodeWith(numbersSource, 'RowNumbers'),
    summary: 'The utility column numbers the rows of data one after another, over nodes, teams and levels a path does not reach; a band has a checkbox of its own.'
  },
  args: {
    groupIndent: 'depth'
  },
  argTypes: {
    groupIndent: {
      control: 'radio',
      options: ['depth', 'none']
    }
  },
  render: args => <Remount args={args}>
            <SceneFrame hint={<Md text="The hierarchy is three lanes, **Team** is a header row inside them. The people are numbered **1 to 8** one after another, whatever stands between them; a team's band has its checkbox." />}>
                <NumbersTable {...args} rows={DELIVERY} />
            </SceneFrame>
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await numbersAct(ctx.canvasElement);
  }
}`,...(Un=($n=Re.parameters)==null?void 0:$n.docs)==null?void 0:Un.source}}};var Bn,Vn,Wn;ve.parameters={...ve.parameters,docs:{...(Bn=ve.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-no-indent'],
  name: '22 · Rows on one line',
  parameters: {
    ...sceneCodeWith(noIndentSource, 'NoIndent'),
    summary: "\`groupIndent\`: the rows of data stand in one step for each node above them (\`'depth'\`, the default); \`'none'\` puts them all on one line."
  },
  args: {
    groupIndent: 'none'
  },
  argTypes: {
    groupIndent: {
      control: 'radio',
      options: ['depth', 'none']
    }
  },
  render: args => <Remount args={args}>
            <SceneFrame hint={<Md text="\`groupIndent: 'none'\`: the rows of data do not stand in, the bands do the telling. The default is \`'depth'\`: a row stands one step in from the name of its node." />}>
                <NoIndentTable {...args} rows={DELIVERY} />
            </SceneFrame>
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await noIndentAct(ctx.canvasElement);
    await indentControlAct(ctx);
  }
}`,...(Wn=(Vn=ve.parameters)==null?void 0:Vn.docs)==null?void 0:Wn.source}}};const wo=["FlatOrHierarchy","DifferentDepth","EmptyNodes","NodeView","Totals","LazyNodes","Pages","ServerPages","SortAndFilter","OwnGrouping","AsLanes","LanesAndRows","DepthAsLanes","NodeHeaderLabels","NodeHeaderFull","OnlyNodeHeaders","NodeOwnCells","NodeOwnBand","LanesInsideRows","SelectNode","RowNumbers","NoIndent"];export{ce as AsLanes,pe as DepthAsLanes,ne as DifferentDepth,ae as EmptyNodes,ee as FlatOrHierarchy,ue as LanesAndRows,fe as LanesInsideRows,oe as LazyNodes,ve as NoIndent,me as NodeHeaderFull,he as NodeHeaderLabels,ye as NodeOwnBand,ge as NodeOwnCells,re as NodeView,we as OnlyNodeHeaders,ie as OwnGrouping,se as Pages,Re as RowNumbers,be as SelectNode,le as ServerPages,de as SortAndFilter,te as Totals,wo as __namedExportsOrder,mo as default};
