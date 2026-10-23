import{dy as c,j as e,a8 as d,dz as u,a0 as m,a2 as h,a3 as b,a4 as p,a5 as C,Z as f}from"./products-CTiDOXRn.js";const g=[{id:"a",name:"Anna Kowalska",country:"Poland",tier:"A",city:"Warsaw",email:"anna@example.com",phone:"+48 22 100 11 22"},{id:"b",name:"Nurlan Abenov",country:"Kazakhstan",tier:"B",city:"Almaty",email:"nurlan@example.com",phone:"+7 701 200 33 44"},{id:"c",name:"Daniel Weiss",country:"Germany",tier:"A",city:"Berlin",email:"daniel@example.com",phone:"+49 30 300 55 66"}],y=m({columnOrderingFeature:C,columnPinningFeature:p,columnVisibilityFeature:b,columnChainsFeature:h}),a=f(),w=a.columns([a.accessor("name",{header:"Name"}),a.accessor("country",{header:"Country"}),a.accessor("tier",{header:"Tier"}),a.accessor("city",{header:"City"}),a.accessor("email",{header:"Email"}),a.accessor("phone",{header:"Phone"})]),x=[{id:"location",label:"Location",columns:["country","tier",{id:"city",optional:!0}]},{id:"contact",label:"Contact",columns:["email","phone"]}],T=()=>{const t=c({features:y,data:g,columns:w,getRowId:n=>n.id,chains:x}),i=t.getVisibleLeafColumns(),s=t.getAllLeafColumns().filter(n=>n.getIsVisibleIgnoringChain()&&!n.getIsVisible());return e.jsxs("div",{children:[e.jsxs("table",{children:[e.jsx("thead",{children:e.jsx("tr",{children:i.map(n=>{var o;return e.jsxs("th",{"data-header-id":n.id,children:[String(n.columnDef.header),n.getIsColumnChainPrimary()&&e.jsx("button",{type:"button","data-chain-button":!0,"aria-label":`${n.getIsColumnChainExpanded()?"Fold":"Open"} ${(o=n.getColumnChain())==null?void 0:o.label}`,onClick:()=>n.toggleColumnChainExpanded(),children:n.getIsColumnChainExpanded()?"«":"»"}),e.jsx("button",{type:"button","data-freeze-button":!0,"aria-label":`${n.getIsPinned()?"Thaw":"Freeze"} ${n.id}`,onClick:()=>d(n,n.getIsPinned()?!1:"start"),children:n.getIsPinned()?"◆":"◇"})]},n.id)})})}),e.jsx("tbody",{children:t.getRowModel().rows.map(n=>e.jsx("tr",{children:n.getVisibleCells().map(o=>e.jsx("td",{children:u(o.column.columnDef.cell,o.getContext())},o.id))},n.id))})]}),e.jsxs("dl",{children:[e.jsx("dt",{children:"the order v9 answers"}),e.jsx("dd",{"data-readout":"order",children:t.getAllLeafColumns().map(n=>n.id).join(", ")}),e.jsx("dt",{children:"folded away (the user did not hide them)"}),e.jsx("dd",{"data-readout":"hidden",children:s.map(n=>n.id).join(", ")}),e.jsx("dt",{children:"table.atoms.columnPinning.get().start"}),e.jsx("dd",{"data-readout":"frozen",children:t.atoms.columnPinning.get().start.join(", ")})]})]})},v=`// Column chains, pure: the types of a chain, the layout the table and the order make of it,
// the plan of a move and the columns a collapsed chain hides. No table, no state: \`column-chains.ts\`
// is the feature that holds them in a v9 table.

export type ChainMember = string | { id: string; optional?: boolean }

export interface ColumnChain {
	/** Chain id: key in columnChainExpanded / columnChainMembers. */
	id: string
	/**
	 * Shown in the Columns panel and in drag hints ("Joins Location").
	 * @default the id
	 */
	label?: string
	/**
	 * Columns that may be in the chain, in default order: an id (required
	 * member) or \`{ id, optional: true }\` (may leave and come back). The first
	 * member is the one shown when collapsed.
	 */
	columns: ChainMember[]
	/**
	 * Which member stays on screen when collapsed: the first (legacy) or the
	 * last one (a total after its parts, e.g. a quarter after its months).
	 * @default 'first'
	 */
	primary?: 'first' | 'last'
}

/** A chain as it is now: current members in chain order. */
export type ResolvedChain = {
	id: string
	label: string
	/** Shown when collapsed: first or last member. */
	primary: 'first' | 'last'
	/** The definition as given (the UI reads its own fields from it). */
	source: ColumnChain
	/** Current members, in chain order. \`columns[0]\` is shown when collapsed. */
	columns: string[]
	/** Every column the chain accepts (members or not). */
	allowed: string[]
	/** Members that may leave, and non-members that may come back. */
	optional: string[]
}

/** chainId → expanded. Missing = collapsed. */
export type ChainExpandedState = Record<string, boolean>
/** chainId → current members in chain order. Missing = the chain's default. */
export type ChainMembersState = Record<string, string[]>

export type ChainConflict =
	/** State lists a column the chain does not accept: it is dropped. */
	| { type: 'unknown-member'; chainId: string; columnId: string }
	/** A column listed in two chains: it stays in the first one. */
	| { type: 'shared-member'; chainId: string; columnId: string }
	/** A required member is missing from the state: it is put back. */
	| { type: 'required-missing'; chainId: string; columnId: string }
	/** Members are not side by side in columnOrder: they are gathered. */
	| { type: 'split'; chainId: string }
	/** Members are pinned differently: the whole chain follows its first member. */
	| { type: 'split-pinning'; chainId: string }
	/** A member is in another column group of the header than the first one: a chain stays in one group, the member is dropped. */
	| { type: 'split-groups'; chainId: string; columnId: string }

/** Column ids frozen at each side. */
type PinningSides = { left: string[]; right: string[] }

export type ChainLayoutInput = {
	chains: ColumnChain[]
	/** All leaf column ids in definition order. */
	columnIds: string[]
	/** Column order state ([] = definition order). */
	columnOrder: string[]
	columnChainMembers: ChainMembersState
	/** Column ids frozen at each side, in pinning order. */
	columnPinning: PinningSides
	/** The column group of the header each column is in (none: it is in no group). */
	groupOf?: Record<string, string | undefined>
}

export type ChainLayout = {
	/** Full column order; each chain's members side by side, in chain order. */
	columnOrder: string[]
	/** Members of every chain (all chains present). */
	columnChainMembers: ChainMembersState
	/** The frozen columns after rule 6: a chain is frozen whole, at its first member's side. */
	columnPinning: PinningSides
	conflicts: ChainConflict[]
}

/**
 * Custom conflict resolution. Receives the raw input and the default
 * resolver; may post-process its result or replace it entirely.
 */
export type ChainLayoutResolver = (
	input: ChainLayoutInput,
	resolveDefault: (input: ChainLayoutInput) => ChainLayout
) => ChainLayout

const memberId = (member: ChainMember) =>
	typeof member === 'string' ? member : member.id
const isOptionalMember = (member: ChainMember) =>
	typeof member !== 'string' && !!member.optional

export const chainLabel = (chain: ColumnChain) => chain.label ?? chain.id

// ------------------------------------------------------------------ layout

/** Rules 1–3: the members the state wants, minus the ones the chain does not accept and the ones an earlier chain took. */
const acceptedMembers = (
	chain: ColumnChain,
	wanted: string[],
	allowed: string[],
	taken: Set<string>,
	conflicts: ChainConflict[]
) => {
	const members: string[] = []
	wanted.forEach((id) => {
		const conflict = { chainId: chain.id, columnId: id }
		if (!allowed.includes(id)) {
			conflicts.push({ type: 'unknown-member', ...conflict })
		} else if (taken.has(id)) {
			conflicts.push({ type: 'shared-member', ...conflict })
		} else if (!members.includes(id)) members.push(id)
	})

	return members
}

/** A chain stays in one column group of the header: the members that are in another group than the first one are out of it. */
const inFirstGroup = (
	chain: ColumnChain,
	ids: string[],
	groupOf: ChainLayoutInput['groupOf'],
	conflicts: ChainConflict[]
) =>
	ids.filter((id) => {
		const same = groupOf?.[id] === groupOf?.[ids[0]]
		if (!same)
			conflicts.push({ type: 'split-groups', chainId: chain.id, columnId: id })

		return same
	})

/** Rule 4: a missing required member goes back after the member that precedes it in the chain's own order. */
const restoreRequired = (
	chain: ColumnChain,
	members: string[],
	allowed: string[],
	known: Set<string>,
	taken: Set<string>,
	conflicts: ChainConflict[]
) => {
	const required = chain.columns
		.filter((m) => !isOptionalMember(m))
		.map(memberId)
		.filter((id) => known.has(id) && allowed.includes(id))
	required.forEach((id) => {
		if (members.includes(id) || taken.has(id)) return
		conflicts.push({
			type: 'required-missing',
			chainId: chain.id,
			columnId: id,
		})
		const prev = allowed
			.slice(0, allowed.indexOf(id))
			.reverse()
			.find((x) => members.includes(x))
		members.splice(prev ? members.indexOf(prev) + 1 : 0, 0, id)
	})
}

/** Rules 1–4 for every chain: who its members are now. */
const resolveMembers = (
	input: ChainLayoutInput,
	known: Set<string>,
	conflicts: ChainConflict[]
) => {
	const taken = new Set<string>()
	const columnChainMembers: ChainMembersState = {}
	input.chains.forEach((chain) => {
		const allowed = inFirstGroup(
			chain,
			chain.columns.map(memberId).filter((id) => known.has(id)),
			input.groupOf,
			conflicts
		)
		const wanted = input.columnChainMembers[chain.id] ?? allowed
		const members = acceptedMembers(chain, wanted, allowed, taken, conflicts)
		restoreRequired(chain, members, allowed, known, taken, conflicts)
		members.forEach((id) => taken.add(id))
		columnChainMembers[chain.id] = members
	})

	return columnChainMembers
}

/** Where a split chain is gathered: at its first member's place among the others. */
const gatheredAt = (order: string[], present: string[], anchor: number) => {
	const rest = order.filter((id) => !present.includes(id))
	const at = rest.indexOf(order[anchor])

	return at === -1
		? order.slice(0, anchor).filter((id) => !present.includes(id)).length
		: at
}

/** Rule 5 (and the pinned list's): the members of a chain side by side, in chain order; \`report\` is the conflict a split is called. */
const gather = (
	order: string[],
	columnChainMembers: ChainMembersState,
	report: ChainConflict['type'],
	conflicts: ChainConflict[]
) => {
	let next = order
	Object.entries(columnChainMembers).forEach(([chainId, members]) => {
		const present = members.filter((id) => next.includes(id))
		if (present.length < 2) return
		const positions = present.map((id) => next.indexOf(id))
		const contiguous = positions.every(
			(p, i) => i === 0 || p === positions[i - 1] + 1
		)
		if (contiguous) return
		if (report === 'split') conflicts.push({ type: 'split', chainId })
		const anchor = Math.min(...positions)
		const at = gatheredAt(next, present, anchor)
		const rest = next.filter((id) => !present.includes(id))
		next = [...rest.slice(0, at), ...present, ...rest.slice(at)]
	})

	return next
}

/** Full order: state order, unknown ids dropped, missing ones appended. */
const baseOrder = (input: ChainLayoutInput, known: Set<string>) =>
	input.columnOrder.length
		? [
				...input.columnOrder.filter((id) => known.has(id)),
				...input.columnIds.filter((id) => !input.columnOrder.includes(id)),
		  ]
		: [...input.columnIds]

/** The side a column is frozen at, or \`false\`. */
const sideOf = (
	pinning: PinningSides,
	id: string
): keyof PinningSides | false => {
	if (pinning.left.includes(id)) return 'left'

	return pinning.right.includes(id) ? 'right' : false
}

/** Rule 6: the whole chain follows its first member's pinning, at either side. */
const followFirstMember = (
	pinning: PinningSides,
	columnChainMembers: ChainMembersState,
	conflicts: ChainConflict[]
): PinningSides => {
	let next = pinning
	Object.entries(columnChainMembers).forEach(([chainId, members]) => {
		if (!members.length) return
		const side = sideOf(next, members[0])
		if (members.every((id) => sideOf(next, id) === side)) return
		conflicts.push({ type: 'split-pinning', chainId })
		const without = (list: string[]) =>
			list.filter((id) => !members.includes(id))
		const withAll = (list: string[]) => {
			const rest = list.filter(
				(id) => !members.includes(id) || id === members[0]
			)
			rest.splice(rest.indexOf(members[0]), 1, ...members)

			return rest
		}
		next = {
			left: side === 'left' ? withAll(next.left) : without(next.left),
			right: side === 'right' ? withAll(next.right) : without(next.right),
		}
	})

	return next
}

/**
 * Default conflict resolution between columnOrder, columnChainMembers and pinning.
 * Rules, applied in this order:
 * 1. Members come from \`columnChainMembers[chain]\`, or the chain's default list.
 * 2. A column the chain does not accept is dropped (unknown-member).
 * 3. A column already taken by an earlier chain is dropped (shared-member).
 * 4. A missing required member is put back after the member that precedes
 *    it in the chain's default order (required-missing).
 * 5. Chain order wins over column order: members are gathered side by side,
 *    in chain order, where the chain's first member stands in columnOrder
 *    (split).
 * 6. Pinning follows the chain's first member, at either side: all members
 *    frozen at its side or none, side by side in that side's list
 *    (split-pinning).
 */
export const resolveChainLayout = (input: ChainLayoutInput): ChainLayout => {
	const conflicts: ChainConflict[] = []
	const known = new Set(input.columnIds)
	const columnChainMembers = resolveMembers(input, known, conflicts)
	const columnOrder = gather(
		baseOrder(input, known),
		columnChainMembers,
		'split',
		conflicts
	)
	const followed = followFirstMember(
		{
			left: input.columnPinning.left.filter((id) => known.has(id)),
			right: input.columnPinning.right.filter((id) => known.has(id)),
		},
		columnChainMembers,
		conflicts
	)
	const columnPinning = {
		left: gather(followed.left, columnChainMembers, 'split-pinning', conflicts),
		right: gather(
			followed.right,
			columnChainMembers,
			'split-pinning',
			conflicts
		),
	}

	return { columnOrder, columnChainMembers, columnPinning, conflicts }
}

/** Chains with their current members (layout already resolved). */
export const resolveChains = (
	chains: ColumnChain[],
	members: ChainMembersState
): ResolvedChain[] =>
	chains.map((chain) => {
		const allowed = chain.columns.map(memberId)

		return {
			id: chain.id,
			label: chainLabel(chain),
			primary: chain.primary ?? 'first',
			source: chain,
			allowed,
			optional: chain.columns.filter(isOptionalMember).map(memberId),
			columns: members[chain.id] ?? allowed,
		}
	})
`,I=`// Column chains on a real table of v9: the order the layout makes, what a
// collapsed chain hides, expanding, the members that may leave.
import {
	columnOrderingFeature,
	columnPinningFeature,
	columnVisibilityFeature,
} from '@tanstack/table-core'

import { makeTable } from '../../test-support/make-table'

import { columnChainsFeature } from './column-chains'

type P = { id: string }
const ids = ['name', 'country', 'tier', 'city', 'rate']
const columns = ids.map((id) => ({ id, accessorFn: () => id }))
const chains = [
	{
		id: 'location',
		label: 'Location',
		columns: ['country', 'tier', { id: 'city', optional: true }],
	},
]
const tableOf = (options: Record<string, unknown> = {}) =>
	makeTable(
		{
			columnOrderingFeature,
			columnPinningFeature,
			columnVisibilityFeature,
			columnChainsFeature,
		},
		[{ id: 'r' }],
		columns,
		{ getRowId: (p: P) => p.id, chains, ...options }
	)
const shown = (table: ReturnType<typeof tableOf>) =>
	table.getHeaderGroups()[0].headers.map((h) => h.column.id)
const visible = (table: ReturnType<typeof tableOf>) =>
	table
		.getAllLeafColumns()
		.filter((c) => c.getIsVisible())
		.map((c) => c.id)

describe('columnChainsFeature on a table of v9', () => {
	it('members stand side by side, in chain order, where the first stands', () => {
		const table = tableOf({
			initialState: {
				columnOrder: ['country', 'name', 'tier', 'rate', 'city'],
				columnChainExpanded: { location: true },
			},
		})
		expect(shown(table)).toEqual(['country', 'tier', 'city', 'name', 'rate'])
		expect(table.getColumnChainLayout().conflicts.map((c) => c.type)).toContain(
			'split'
		)
	})

	it('a collapsed chain shows its first member only, expanding shows them all', () => {
		const table = tableOf()
		expect(visible(table)).toEqual(['name', 'country', 'rate'])
		const country = table.getColumn('country')!
		expect(country.getIsColumnChainPrimary()).toBe(true)
		expect(country.getColumnChainHiddenCount()).toBe(2)
		country.toggleColumnChainExpanded()
		expect(visible(table)).toEqual(['name', 'country', 'tier', 'city', 'rate'])
		expect(country.getIsColumnChainExpanded()).toBe(true)
	})

	it('the header follows a chain opening and folding (v9’s header groups are found again)', () => {
		const table = tableOf()
		expect(shown(table)).toEqual(['name', 'country', 'rate'])
		table.getColumn('country')!.toggleColumnChainExpanded()
		expect(shown(table)).toEqual(['name', 'country', 'tier', 'city', 'rate'])
		table.getColumn('country')!.toggleColumnChainExpanded()
		expect(shown(table)).toEqual(['name', 'country', 'rate'])
	})

	it('what the user hid stays hidden under the chain; the chain never writes columnVisibility', () => {
		const table = tableOf({
			initialState: {
				columnChainExpanded: { location: true },
				columnVisibility: { tier: false },
			},
		})
		expect(visible(table)).toEqual(['name', 'country', 'city', 'rate'])
		expect(table.atoms.columnVisibility.get()).toEqual({ tier: false })
	})

	it('an optional member can leave: it becomes a plain column, and its home says so', () => {
		const table = tableOf({
			initialState: { columnChainMembers: { location: ['country', 'tier'] } },
		})
		const city = table.getColumn('city')!
		expect(city.getColumnChain()).toBeUndefined()
		expect(city.getColumnChainHome()?.id).toBe('location')
		expect(table.getColumnChains()[0].columns).toEqual(['country', 'tier'])
	})

	it('without chains, or switched off, v9 behaves as it is', () => {
		const off = tableOf({ enableColumnChains: false })
		expect(shown(off)).toEqual(ids)
		expect(visible(off)).toEqual(ids)
	})
})

describe('chains and the column groups of the header', () => {
	const leaf = (id: string) => ({ id, accessorFn: () => id })
	const grouped = makeTable(
		{
			columnOrderingFeature,
			columnPinningFeature,
			columnVisibilityFeature,
			columnChainsFeature,
		},
		[{ id: 'r' }],
		[
			leaf('name'),
			{ id: 'place', columns: [leaf('country'), leaf('tier')] },
			leaf('city'),
		],
		{ getRowId: (p: P) => p.id, chains }
	)

	it('a chain stays in one column group: the member of another group is out of it, and the conflict says so', () => {
		const layout = grouped.getColumnChainLayout()
		expect(layout.columnChainMembers.location).toEqual(['country', 'tier'])
		expect(layout.conflicts).toContainEqual({
			type: 'split-groups',
			chainId: 'location',
			columnId: 'city',
		})
	})

	it('a chain inside one group is as it was', () => {
		const inside = makeTable(
			{ columnOrderingFeature, columnVisibilityFeature, columnChainsFeature },
			[{ id: 'r' }],
			[
				leaf('name'),
				{ id: 'place', columns: [leaf('country'), leaf('tier'), leaf('city')] },
			],
			{ getRowId: (p: P) => p.id, chains }
		)
		expect(inside.getColumnChainLayout().columnChainMembers.location).toEqual([
			'country',
			'tier',
			'city',
		])
		expect(
			inside.getColumnChainLayout().conflicts.map((c) => c.type)
		).not.toContain('split-groups')
	})
})
`,O=`// Column chains: a custom feature over v9 (the part v9 has no word for).
//
// A chain is a named set of related columns shown as one column until the user
// expands it. The first member (in the chain's current order) is the one shown
// when collapsed. Members are required by default; an \`optional\` member can be
// taken out of the chain (it becomes a plain column) and put back. Columns that
// are not listed in the chain can never join it.
//
// Two pieces of state describe the layout and may be controlled from outside:
// \`columnOrder\` (all columns) and \`columnChainMembers\` (members of every chain,
// in chain order). They can disagree; \`resolveChainLayout\` reconciles them with
// documented rules. The feature plugs into v9's own: the order of the columns
// is the layout's (\`getOrderColumnsFn\`), and \`column.getIsVisible()\` also hides
// the members of a collapsed chain, so the user's own \`columnVisibility\` stays
// clean. Add it after \`columnOrderingFeature\` and \`columnVisibilityFeature\`.
import {
	assignPrototypeAPIs,
	assignTableAPIs,
	functionalUpdate,
	makeStateUpdater,
	type OnChangeFn,
	type RowData,
	type TableFeature,
	type TableFeatures,
	type Updater,
} from '@tanstack/table-core'
// v9's static functions: the way to run one of its own methods under other memo dependencies.
// The linter's resolver does not follow \`exports\`; the subpath is v9's.
/* eslint-disable import/no-unresolved */
import {
	table_getCenterVisibleLeafColumns,
	table_getEndVisibleLeafColumns,
	table_getHeaderGroups,
	table_getStartVisibleLeafColumns,
	table_getVisibleFlatColumns,
	table_getVisibleLeafColumns,
} from '@tanstack/table-core/static-functions'
/* eslint-enable import/no-unresolved */

import type { BroadColumn, BroadTable } from '../core/broad'
import { assertNeeds } from '../core/needs'

import type {
	ChainExpandedState,
	ChainLayout,
	ChainMembersState,
	ColumnChain,
	ResolvedChain,
} from './chain-layout'
import { resolveChainLayout, resolveChains } from './chain-layout'

const NAME = 'columnChainsFeature'

export type ColumnChainsState = {
	columnChainExpanded: ChainExpandedState
	columnChainMembers: ChainMembersState
}

export type ColumnChainsOptions = {
	/** Chain definitions. No chains = the feature does nothing. */
	chains?: ColumnChain[]
	/** Switch the whole feature off without removing it. @default true */
	enableColumnChains?: boolean
	onColumnChainExpandedChange?: OnChangeFn<ChainExpandedState>
	onColumnChainMembersChange?: OnChangeFn<ChainMembersState>
}

export type ColumnChainsTable = {
	getColumnChains(): ResolvedChain[]
	/** Resolved layout: column order, members, pinning, conflicts found. */
	getColumnChainLayout(): ChainLayout
	getIsColumnChainsEnabled(): boolean
	setColumnChainExpanded(updater: Updater<ChainExpandedState>): void
	setColumnChainMembers(updater: Updater<ChainMembersState>): void
	resetColumnChainExpanded(defaultState?: boolean): void
	resetColumnChainMembers(defaultState?: boolean): void
}

export type ColumnChainsColumn = {
	/** Chain this column is a member of now. */
	getColumnChain(): ResolvedChain | undefined
	/** Chain that accepts this column back (optional and out now). */
	getColumnChainHome(): ResolvedChain | undefined
	/** Shown when the chain is collapsed: first member the user has not hidden. */
	getIsColumnChainPrimary(): boolean
	getIsColumnChainExpanded(): boolean
	/** Members hidden by the collapsed chain (0 when expanded / not chained). */
	getColumnChainHiddenCount(): number
	toggleColumnChainExpanded(value?: boolean): void
	/** Visibility set by the user, ignoring chain collapse. */
	getIsVisibleIgnoringChain(): boolean
}

/**
 * What v9 builds from the visibility and the order (the header groups, the
 * visible columns) is found again when they change; the chains hide and order
 * columns too, so their state is one more thing those are built from.
 */
const dependsOnChains = (table: BroadTable) => () =>
	[
		table.options.columns,
		table.atoms.columnOrder?.get(),
		table.atoms.grouping?.get(),
		table.atoms.columnPinning?.get(),
		table.atoms.columnVisibility?.get(),
		table.options.groupedColumnMode,
		table.options.chains,
		table.options.enableColumnChains,
		table.atoms.columnChainExpanded.get(),
		table.atoms.columnChainMembers.get(),
	]

const enabled = (table: BroadTable) =>
	table.options.enableColumnChains !== false &&
	(table.options.chains?.length ?? 0) > 0

const leafIds = (table: BroadTable) =>
	table
		.getAllFlatColumns()
		.filter((column) => column.columns.length === 0)
		.map((column) => column.id)

/** The column group of the header each leaf column is in, in the order of \`leafIds\` ('' for none). */
const groupIds = (table: BroadTable) =>
	table
		.getAllFlatColumns()
		.filter((column) => column.columns.length === 0)
		.map((column) => column.parent?.id ?? '')

/** What the chains layout is made of: found again (v9's \`memoDeps\`) only when exactly this changes. */
const layoutDeps = (table: BroadTable) => {
	const pinning = table.atoms.columnPinning?.get()

	return [
		table.options.chains,
		table.atoms.columnOrder?.get(),
		table.atoms.columnChainMembers.get(),
		pinning?.start,
		pinning?.end,
		leafIds(table).join('|'),
		groupIds(table).join('|'),
	] as const
}

const resolveLayout = (
	chains: ColumnChain[] | undefined,
	columnOrder: string[] | undefined,
	columnChainMembers: ChainMembersState,
	start: string[] | undefined,
	end: string[] | undefined,
	ids: string,
	groups: string
): ChainLayout =>
	resolveChainLayout({
		chains: chains ?? [],
		columnIds: ids ? ids.split('|') : [],
		columnOrder: columnOrder ?? [],
		columnChainMembers,
		columnPinning: { left: start ?? [], right: end ?? [] },
		groupOf: Object.fromEntries(
			(ids ? ids.split('|') : []).map((id, at) => [
				id,
				groups.split('|')[at] || undefined,
			])
		),
	})

const chainOf = (table: BroadTable, column: BroadColumn) =>
	table.getColumnChains().find((chain) => chain.columns.includes(column.id))

const isExpanded = (table: BroadTable, chain: ResolvedChain | undefined) =>
	chain ? !!table.atoms.columnChainExpanded.get()[chain.id] : false

/** The member a collapsed chain shows: the first (or last) the user has not hidden. */
const primaryOf = (table: BroadTable, chain: ResolvedChain) =>
	(chain.primary === 'last'
		? [...chain.columns].reverse()
		: chain.columns
	).find((id) => table.getColumn(id)?.getIsVisibleIgnoringChain() ?? false)

/** Only what the collapse hides: grouped (lanes) or user-hidden members would be out of sight anyway. */
const hiddenCountOf = (
	table: BroadTable,
	column: BroadColumn,
	chain: ResolvedChain | undefined
) => {
	if (!chain || isExpanded(table, chain)) return 0

	return chain.columns.filter((id) => {
		const member = table.getColumn(id)

		return (
			id !== column.id &&
			!!member?.getIsVisibleIgnoringChain() &&
			!member.getIsVisible()
		)
	}).length
}

export const columnChainsFeature: TableFeature = {
	getInitialState: (state) => ({
		columnChainExpanded: {},
		columnChainMembers: {},
		...state,
	}),

	getDefaultTableOptions: (table) => ({
		enableColumnChains: true,
		onColumnChainExpandedChange: makeStateUpdater('columnChainExpanded', table),
		onColumnChainMembersChange: makeStateUpdater('columnChainMembers', table),
	}),

	constructTableAPIs: (table) => {
		const broad = table as BroadTable
		assertNeeds(broad, NAME, ['columnVisibilityFeature'])
		const orderBefore = broad.getOrderColumnsFn
		const memoDeps = dependsOnChains(broad)
		assignTableAPIs(NAME, broad, {
			table_getHeaderGroups: {
				fn: () => table_getHeaderGroups(broad),
				memoDeps,
			},
			table_getVisibleFlatColumns: {
				fn: () => table_getVisibleFlatColumns(broad),
				memoDeps,
			},
			table_getVisibleLeafColumns: {
				fn: () => table_getVisibleLeafColumns(broad),
				memoDeps,
			},
			...(typeof broad.getStartVisibleLeafColumns === 'function' && {
				table_getStartVisibleLeafColumns: {
					fn: () => table_getStartVisibleLeafColumns(broad),
					memoDeps,
				},
				table_getCenterVisibleLeafColumns: {
					fn: () => table_getCenterVisibleLeafColumns(broad),
					memoDeps,
				},
				table_getEndVisibleLeafColumns: {
					fn: () => table_getEndVisibleLeafColumns(broad),
					memoDeps,
				},
			}),
			table_getIsColumnChainsEnabled: { fn: () => enabled(broad) },
			table_getColumnChainLayout: {
				fn: resolveLayout,
				memoDeps: () => [...layoutDeps(broad)],
			},
			table_getColumnChains: {
				fn: () =>
					enabled(broad)
						? resolveChains(
								broad.options.chains ?? [],
								broad.getColumnChainLayout().columnChainMembers
						  )
						: [],
			},
			table_setColumnChainExpanded: {
				fn: (updater: Updater<ChainExpandedState>) =>
					broad.options.onColumnChainExpandedChange?.((old) =>
						functionalUpdate(updater, old)
					),
			},
			table_setColumnChainMembers: {
				fn: (updater: Updater<ChainMembersState>) =>
					broad.options.onColumnChainMembersChange?.((old) =>
						functionalUpdate(updater, old)
					),
			},
			table_resetColumnChainExpanded: {
				fn: (defaultState?: boolean) =>
					broad.setColumnChainExpanded(
						defaultState ? {} : broad.initialState.columnChainExpanded ?? {}
					),
			},
			table_resetColumnChainMembers: {
				fn: (defaultState?: boolean) =>
					broad.setColumnChainMembers(
						defaultState ? {} : broad.initialState.columnChainMembers ?? {}
					),
			},
			// The order of the columns is the layout's: members side by side, in chain order.
			table_getOrderColumnsFn: {
				fn: () => {
					if (!enabled(broad))
						return orderBefore?.() ?? ((columns: BroadColumn[]) => columns)
					const { columnOrder } = broad.getColumnChainLayout()

					return (columns: BroadColumn[]) => {
						const byId = new Map(columns.map((column) => [column.id, column]))
						const ordered = columnOrder.flatMap((id) => {
							const column = byId.get(id)

							return column ? [column] : []
						})

						return [
							...ordered,
							...columns.filter((column) => !columnOrder.includes(column.id)),
						]
					}
				},
			},
		})
	},

	assignColumnPrototype: (prototype, table) => {
		const userVisible = prototype.getIsVisible as (this: BroadColumn) => boolean
		assignPrototypeAPIs(NAME, prototype, table as BroadTable, {
			column_getColumnChain: {
				fn: (column: BroadColumn) => chainOf(column.table, column),
			},
			column_getColumnChainHome: {
				fn: (column: BroadColumn) =>
					column.table
						.getColumnChains()
						.find(
							(c: ResolvedChain) =>
								c.optional.includes(column.id) && !c.columns.includes(column.id)
						),
			},
			column_getIsColumnChainExpanded: {
				fn: (column: BroadColumn) =>
					isExpanded(column.table, chainOf(column.table, column)),
			},
			column_getIsColumnChainPrimary: {
				fn: (column: BroadColumn) => {
					const chain = chainOf(column.table, column)

					return !!chain && primaryOf(column.table, chain) === column.id
				},
			},
			column_getColumnChainHiddenCount: {
				fn: (column: BroadColumn) =>
					hiddenCountOf(column.table, column, chainOf(column.table, column)),
			},
			column_toggleColumnChainExpanded: {
				fn: (column: BroadColumn, value?: boolean) => {
					const chain = chainOf(column.table, column)
					if (!chain) return
					column.table.setColumnChainExpanded((old) => ({
						...old,
						[chain.id]: value ?? !old[chain.id],
					}))
				},
			},
			column_getIsVisibleIgnoringChain: {
				fn: (column: BroadColumn) => userVisible.call(column),
			},
			// A collapsed chain: only its primary stays visible; what the user hid stays hidden.
			column_getIsVisible: {
				fn: (column: BroadColumn) => {
					if (!userVisible.call(column)) return false
					const chain = chainOf(column.table, column)
					if (!chain || isExpanded(column.table, chain)) return true

					return primaryOf(column.table, chain) === column.id
				},
			},
		})
	},
}

declare module '@tanstack/table-core' {
	interface Plugins {
		columnChainsFeature: TableFeature
	}
	/* eslint-disable @typescript-eslint/no-unused-vars */
	interface TableState_FeatureMap {
		columnChainsFeature: ColumnChainsState
	}
	interface TableOptions_FeatureMap<
		TFeatures extends TableFeatures,
		TData extends RowData
	> {
		columnChainsFeature: ColumnChainsOptions
	}
	interface Table_FeatureMap<
		TFeatures extends TableFeatures,
		TData extends RowData
	> {
		columnChainsFeature: ColumnChainsTable
	}
	interface Column_FeatureMap<
		TFeatures extends TableFeatures,
		TData extends RowData
	> {
		columnChainsFeature: ColumnChainsColumn
	}
	/* eslint-enable @typescript-eslint/no-unused-vars */
}
`,M=`// A screen with \`columnChainsFeature\`, drawn by hand over v9's \`useTable\`: no
// TableCore. The screen knows nothing of chains but the option \`chains\` and one
// button: the order, the visibility and the freezing it draws are v9's own, and
// the chains are in them already.
import React from 'react'

import {
	columnChainsFeature,
	columnOrderingFeature,
	columnPinningFeature,
	columnVisibilityFeature,
	createColumnHelper,
	flexRender,
	pinColumn,
	tableFeatures,
	useTable,
	type ColumnChain,
} from '@pnl-simulation/table-core'

type Person = Record<
	'id' | 'name' | 'country' | 'tier' | 'city' | 'email' | 'phone',
	string
>

const people: Person[] = [
	{
		id: 'a',
		name: 'Anna Kowalska',
		country: 'Poland',
		tier: 'A',
		city: 'Warsaw',
		email: 'anna@example.com',
		phone: '+48 22 100 11 22',
	},
	{
		id: 'b',
		name: 'Nurlan Abenov',
		country: 'Kazakhstan',
		tier: 'B',
		city: 'Almaty',
		email: 'nurlan@example.com',
		phone: '+7 701 200 33 44',
	},
	{
		id: 'c',
		name: 'Daniel Weiss',
		country: 'Germany',
		tier: 'A',
		city: 'Berlin',
		email: 'daniel@example.com',
		phone: '+49 30 300 55 66',
	},
]

const features = tableFeatures({
	columnOrderingFeature,
	columnPinningFeature,
	columnVisibilityFeature,
	columnChainsFeature,
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('country', { header: 'Country' }),
	helper.accessor('tier', { header: 'Tier' }),
	helper.accessor('city', { header: 'City' }),
	helper.accessor('email', { header: 'Email' }),
	helper.accessor('phone', { header: 'Phone' }),
])

const chains: ColumnChain[] = [
	{
		id: 'location',
		label: 'Location',
		columns: ['country', 'tier', { id: 'city', optional: true }],
	},
	{ id: 'contact', label: 'Contact', columns: ['email', 'phone'] },
]

export const ChainsTable = () => {
	const table = useTable({
		features,
		data: people,
		columns,
		getRowId: (person) => person.id,
		chains,
	})
	// What v9 says is visible, frozen first.
	const shown = table.getVisibleLeafColumns()
	const hidden = table
		.getAllLeafColumns()
		.filter((c) => c.getIsVisibleIgnoringChain() && !c.getIsVisible())

	return (
		<div>
			<table>
				<thead>
					<tr>
						{shown.map((column) => (
							<th key={column.id} data-header-id={column.id}>
								{String(column.columnDef.header)}
								{column.getIsColumnChainPrimary() && (
									<button
										type="button"
										data-chain-button
										aria-label={\`\${
											column.getIsColumnChainExpanded() ? 'Fold' : 'Open'
										} \${column.getColumnChain()?.label}\`}
										onClick={() => column.toggleColumnChainExpanded()}
									>
										{column.getIsColumnChainExpanded() ? '«' : '»'}
									</button>
								)}
								<button
									type="button"
									data-freeze-button
									aria-label={\`\${column.getIsPinned() ? 'Thaw' : 'Freeze'} \${
										column.id
									}\`}
									onClick={() =>
										pinColumn(column, column.getIsPinned() ? false : 'start')
									}
								>
									{column.getIsPinned() ? '◆' : '◇'}
								</button>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<dl>
				<dt>the order v9 answers</dt>
				<dd data-readout="order">
					{table
						.getAllLeafColumns()
						.map((c) => c.id)
						.join(', ')}
				</dd>
				<dt>folded away (the user did not hide them)</dt>
				<dd data-readout="hidden">{hidden.map((c) => c.id).join(', ')}</dd>
				<dt>table.atoms.columnPinning.get().start</dt>
				<dd data-readout="frozen">
					{table.atoms.columnPinning.get().start.join(', ')}
				</dd>
			</dl>
		</div>
	)
}
`,l={feature:"column-chains.ts",layout:"chain-layout.ts",test:"column-chains.test.ts",screen:"chains-table.tsx"},r=t=>Object.fromEntries(Object.entries(t).map(([i,s])=>[i.split("/").pop(),s])),F=r(Object.assign({"../../../../../packages/libs/table-core/src/headless/chains/chain-layout.ts":v,"../../../../../packages/libs/table-core/src/headless/chains/column-chains.test.ts":I,"../../../../../packages/libs/table-core/src/headless/chains/column-chains.ts":O})),E=r(Object.assign({"./chains-table.tsx":M})),S=t=>{const i={...F,...E}[l[t]];if(i===void 0)throw new Error(`No file ${l[t]}`);return i};export{T as C,l as F,S as s};
