import{j as e}from"./jsx-runtime-Cnbe3ryz.js";import{useMDXComponents as i}from"./index-cWuaGVWk.js";import{M as c,S as s,C as d}from"./index-BWck6PEV.js";import{Favourites as h}from"./own-feature.stories-Cx2xKjyF.js";import{a as r,C as a,T as u}from"./reference-kit-BHZHy2IZ.js";import"./index-3dRrDZpt.js";import"./iframe-CxMQY-6g.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./index-iBx7lKYd.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./play-kit-Bu4SXy9H.js";import"./scene-kit-BsKxVgS1.js";import"./types-reference-CMrm5GSt.js";import"./styles-HzBmg0bt.js";const p=["Feature","What it does","Built on","What is added on top of TanStack"],b=[{name:"Sorting",page:"tables-table-core-features-sorting-overview--docs",does:"one or several columns, from the header, the menu, the toolbar or the chip",origin:"TanStack + extension",added:e.jsxs(e.Fragment,{children:["TanStack keeps ",e.jsx(a,{c:"state.sorting"}),", ",e.jsx(a,{c:"sortingFn"})," and the sorted rows. Extension: the actions of a place (",e.jsx(a,{c:"getSortActions(place)"}),", ",e.jsx(a,{c:"applySortAction"}),"), the type of a sorting and its words (",e.jsx(a,{c:"getSortType"}),", ",e.jsx(a,{c:"getSortLabels"}),"), the lists of the places (",e.jsx(a,{c:"getSortsFor"}),"), sorting of groups."]})},{name:"Grouping",page:"tables-table-core-features-grouping-overview--docs",does:"groups as lanes or as rows, several levels, ways to group, totals",origin:"TanStack + extension",added:e.jsxs(e.Fragment,{children:["TanStack keeps ",e.jsx(a,{c:"state.grouping"}),", the grouped rows and"," ",e.jsx(a,{c:"aggregationFn"}),". Extension: the actions (",e.jsx(a,{c:"getGroupActions"}),", ",e.jsx(a,{c:"applyGroupAction"}),"), the levels (",e.jsx(a,{c:"getLanes"}),", ",e.jsx(a,{c:"setLevelExpanded"}),","," ",e.jsx(a,{c:"moveLane"}),"), the ways to group (",e.jsx(a,{c:"getGroupingOptions"}),"), the layout and the totals (",e.jsx(a,{c:"getGroupLayoutAt"}),", ",e.jsx(a,{c:"getGroupTotalsAt"}),"); the lanes and the group cell are drawn by us."]})},{name:"Freezing (pinning)",page:"tables-table-core-features-freezing-overview--docs",does:"columns stay on the screen while the rest scrolls",origin:"TanStack + extension",added:e.jsxs(e.Fragment,{children:["TanStack keeps ",e.jsx(a,{c:"state.columnPinning"}),". Extension: both sides, the actions (",e.jsx(a,{c:"getPinActions"}),", ",e.jsx(a,{c:"applyPinAction"}),"), the zones and their edge, the rules of moving a column between zones."]})},{name:"Row selection & bulk actions",page:"tables-table-core-features-row-selection-bulk-actions--docs",does:"tick rows, a group or everything and act on them together",origin:"TanStack + extension",added:e.jsxs(e.Fragment,{children:["TanStack keeps ",e.jsx(a,{c:"state.rowSelection"}),". Extension: the rule for parents, children and groups (",e.jsx(a,{c:"getCanSelectRows"}),", a wrapped"," ",e.jsx(a,{c:"row.getCanSelect"}),"), the summary (",e.jsx(a,{c:"getSelectionSummary"}),"); the bulk bar and the checkboxes are drawn by us."]})},{name:"Row numbers",page:"tables-table-core-features-row-numbers--docs",does:"numbers and checkboxes in one utility column, a column each, or in any cell",origin:"Own",added:e.jsxs(e.Fragment,{children:[e.jsx(a,{c:"enableRowNumbers"}),", ",e.jsx(a,{c:"getCanShowRowNumbers"}),", the utility column and the parts."]})},{name:"Tree rows",page:"tables-table-core-features-tree-rows--docs",does:"rows with children, indented and collapsible",origin:"TanStack + extension",added:e.jsxs(e.Fragment,{children:["TanStack gives ",e.jsx(a,{c:"getSubRows"})," and the expanded rows. Extension: the selection of a parent and its children, the tree cell (chevron, indent)."]})},{name:"Reorder & Resize",page:"tables-table-core-features-reorder-resize--docs",does:"drag columns, drag their edge",origin:"TanStack + extension",added:e.jsxs(e.Fragment,{children:["TanStack keeps ",e.jsx(a,{c:"state.columnOrder"})," and"," ",e.jsx(a,{c:"state.columnSizing"}),". Extension: the plan of a move (",e.jsx(a,{c:"planColumnMove"}),", ",e.jsx(a,{c:"applyColumnMove"}),","," ",e.jsx(a,{c:"restoreColumnMove"}),", ",e.jsx(a,{c:"getCanMoveColumn"}),") and the zones (",e.jsx(a,{c:"getZone"}),", ",e.jsx(a,{c:"getMovingBlock"}),"); the drag, its ghost and the resize handle are drawn by us."]})},{name:"Fill width",page:"tables-table-core-features-fill-width--docs",does:"a table narrower than its frame stretches to the full width",origin:"Own",added:e.jsxs(e.Fragment,{children:[e.jsx(a,{c:"fill"})," (",e.jsx(a,{c:"'fill' | 'natural'"}),"), ",e.jsx(a,{c:"meta.grow"}),", ",e.jsx(a,{c:"computeColumnWidths"})," over the column sizes of TanStack."]})},{name:"Column chains",page:"tables-table-core-features-column-chains--docs",does:"related columns fold into one",origin:"Own",added:e.jsxs(e.Fragment,{children:[e.jsx(a,{c:"ColumnChainsFeature"}),": the slices ",e.jsx(a,{c:"columnChainExpanded"})," ","and ",e.jsx(a,{c:"columnChainMembers"}),", the layout rules (",e.jsx(a,{c:"resolveChainLayout"}),"), ",e.jsx(a,{c:"getColumnChains"}),"."]})},{name:"Column menu",page:"tables-table-core-features-column-menu--docs",does:"the menu of a header click, configurable",origin:"Own",added:e.jsxs(e.Fragment,{children:["Sections that draw the actions of the features (",e.jsx(a,{c:"columnMenu"}),","," ",e.jsx(a,{c:"ColumnMenuSection"}),")."]})},{name:"Toolbar & Status bar",page:"tables-table-core-features-toolbar-status-bar--docs",does:"buttons, chips and the panels they open",origin:"Own",added:e.jsxs(e.Fragment,{children:["Controls and chips drawn by us; what a panel lists and what a chip says comes from the table (",e.jsx(a,{c:"getPanel(place)"}),", ",e.jsx(a,{c:"getChips()"}),")."]})},{name:"Panels & visibility",page:"tables-table-core-features-panels-visibility--docs",does:"where a column shows up; own lists per table",origin:"TanStack + extension",added:e.jsxs(e.Fragment,{children:["TanStack keeps ",e.jsx(a,{c:"state.columnVisibility"}),". Extension: the places (",e.jsx(a,{c:"meta.hideFrom"}),", ",e.jsx(a,{c:"getColumnsFor(place)"}),"), the action (",e.jsx(a,{c:"getVisibilityAction"}),", ",e.jsx(a,{c:"applyVisibilityAction"}),"), the resolvers."]})},{name:"Row actions",page:"tables-table-core-features-row-actions--docs",does:"the ⋮ menu of a row",origin:"Own",added:e.jsxs(e.Fragment,{children:[e.jsx(a,{c:"RowAction"}),", ",e.jsx(a,{c:"createRowActionsColumn"}),","," ",e.jsx(a,{c:"ActionsMenu"}),", ",e.jsx(a,{c:"RowActionsButton"}),"."]})},{name:"Custom cells",page:"tables-table-core-features-custom-cells--docs",does:"React components for the content of a cell",origin:"TanStack as is",added:e.jsxs(e.Fragment,{children:[e.jsx(a,{c:"columnDef.cell"})," comes from TanStack; the parts of the table (",e.jsx(a,{c:"RowActionsButton"}),", ",e.jsx(a,{c:"RowNumber"}),", ",e.jsx(a,{c:"RowCheckbox"}),") work in any cell."]})},{name:"Keyboard & Selection",page:"tables-table-core-features-keyboard-selection--docs",does:"spreadsheet-like navigation and ranges",origin:"Own",added:e.jsxs(e.Fragment,{children:[e.jsx(a,{c:"CellSelectionFeature"}),": ",e.jsx(a,{c:"getCanSelectCells"}),","," ",e.jsx(a,{c:"getAriaRoles"}),", the tab stops (",e.jsx(a,{c:"getGridTabIndex"}),","," ",e.jsx(a,{c:"getCellTabIndex"}),"), the keyboard mapping."]})},{name:"Editing",page:"tables-table-core-features-editing--docs",does:"in-cell editing: text, autocomplete, async options",origin:"Own",added:e.jsxs(e.Fragment,{children:[e.jsx(a,{c:"CellEditingFeature"}),": ",e.jsx(a,{c:"state.editingCell"}),","," ",e.jsx(a,{c:"readOnly"}),", ",e.jsx(a,{c:"cell.tcEditing()"}),"."]})},{name:"Themes",page:"tables-table-core-features-themes--docs",does:"one table, several looks",origin:"Own",added:e.jsxs(e.Fragment,{children:["The ",e.jsx(a,{c:"theme"})," prop: tokens turned into CSS variables and a MUI theme."]})},{name:"Feature switches",page:"tables-table-core-features-feature-switches--docs",does:"turn any feature off with one prop",origin:"TanStack + extension",added:e.jsxs(e.Fragment,{children:["The own options of TanStack — ",e.jsx(a,{c:"enableSorting"}),","," ",e.jsx(a,{c:"enableHiding"}),", ",e.jsx(a,{c:"enableColumnPinning"})," …; extension:"," ",e.jsx(a,{c:"enableMultiGroup"}),", ",e.jsx(a,{c:"enableRowNumbers"}),","," ",e.jsx(a,{c:"enableGroupCollapse"}),", ",e.jsx(a,{c:"readOnly"}),"."]})}],g=b.map(n=>({id:n.name,cells:{Feature:e.jsx(r,{page:n.page,children:n.name}),"What it does":n.does,"Built on":n.origin,"What is added on top of TanStack":n.added}})),o=n=>n.replaceAll("from '../../headless'","from '@pnl-simulation/table-core/headless'"),m=`// A feature of our own, the way the table's own are written: a TanStack custom
// feature (state, options, methods) and its contract. Rows can be marked as
// favourites; the table counts them.
import { functionalUpdate } from '@tanstack/table-core'
import type {
	OnChangeFn,
	TableFeature,
	TableState,
	Updater,
} from '@tanstack/react-table'

import { defineContract, keysOf } from '../../headless'

import type {} from './favourites-feature.augment'

/** The slice of the table state the feature adds: the ids of the favourite rows. */
export type FavouritesTableState = { favourites: Record<string, boolean> }

/** Table options the feature adds. */
export type FavouritesOptions = {
	/** The favourites change; with it, \`state.favourites\` is yours (as every slice in TanStack). */
	onFavouritesChange?: OnChangeFn<FavouritesTableState['favourites']>
	/** No marking at all. @default true */
	enableFavourites?: boolean
}

/** Table methods the feature adds. */
export type FavouritesInstance = {
	toggleFavourite(rowId: string): void
	getFavouriteCount(): number
}

/** Row methods the feature adds. */
export type FavouritesRow = { getIsFavourite(): boolean }

export const FavouritesFeature: TableFeature = {
	getInitialState: (state) =>
		({ favourites: {}, ...state } as Partial<TableState>),

	getDefaultOptions: (table) =>
		({
			enableFavourites: true,
			onFavouritesChange: (
				updater: Updater<FavouritesTableState['favourites']>
			) =>
				table.setState((old) => ({
					...old,
					favourites: functionalUpdate(updater, old.favourites),
				})),
		} as FavouritesOptions as never),

	createTable: (table) => {
		table.toggleFavourite = (rowId) => {
			if (table.options.enableFavourites === false) return
			table.options.onFavouritesChange?.((old) => ({
				...old,
				[rowId]: !old[rowId],
			}))
		}
		table.getFavouriteCount = () =>
			Object.values(table.getState().favourites).filter(Boolean).length
	},

	createRow: (row, table) => {
		row.getIsFavourite = () => !!table.getState().favourites[row.id]
	},
}

/** What the feature adds, once per key: a key the type has and this lacks (or the other way round) does not compile. */
export const FavouritesContract = defineContract({
	feature: FavouritesFeature,
	table: keysOf<FavouritesInstance>()(['toggleFavourite', 'getFavouriteCount']),
	column: [],
	row: keysOf<FavouritesRow>()(['getIsFavourite']),
	cell: [],
})
`,x=`// Merges the Favourites types into TanStack's own interfaces: \`enableFavourites\`
// is a normal table option, \`state.favourites\` a normal slice, \`toggleFavourite\`
// a normal table method.
import type { RowData } from '@tanstack/react-table'

import type {
	FavouritesInstance,
	FavouritesOptions,
	FavouritesRow,
	FavouritesTableState,
} from './favourites-feature'

declare module '@tanstack/react-table' {
	/* eslint-disable @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars */
	interface TableState extends FavouritesTableState {}
	interface InitialTableState extends Partial<FavouritesTableState> {}
	interface TableOptionsResolved<TData extends RowData>
		extends FavouritesOptions {}
	interface Table<TData extends RowData> extends FavouritesInstance {}
	interface Row<TData extends RowData> extends FavouritesRow {}
	/* eslint-enable @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars */
}
`,f=`// The feature on a real table: the table of TableCore plus the feature. The contract
// is checked the way the table's own are: the table has exactly the keys it says.
import {
	createTable,
	functionalUpdate,
	getCoreRowModel,
	type TableState,
	type Updater,
} from '@tanstack/table-core'

import { tableCoreBase, tableCoreColumns } from '../../headless'

import { FavouritesContract, FavouritesFeature } from './favourites-feature'

type Person = { id: string; name: string }
const people: Person[] = [
	{ id: 'a', name: 'Ann' },
	{ id: 'b', name: 'Bob' },
	{ id: 'c', name: 'Cid' },
]

const tableOf = (extra: Record<string, unknown> = {}) => {
	// \`createTable\` (no React) keeps no state of its own: the test holds it.
	let state = {
		columnOrder: [],
		columnPinning: { left: [], right: [] },
		sorting: [],
		grouping: [],
		rowSelection: {},
		favourites: {},
	} as unknown as TableState
	const table = createTable<Person>({
		...tableCoreBase,
		_features: [...tableCoreBase._features, FavouritesFeature],
		data: people,
		columns: tableCoreColumns([{ id: 'name', accessorKey: 'name' }]),
		getRowId: (p: Person) => p.id,
		getCoreRowModel: getCoreRowModel(),
		state,
		onStateChange: (updater: Updater<TableState>) => {
			state = functionalUpdate(updater, state)
			table.setOptions((old) => ({ ...old, state }))
		},
		...extra,
	} as never)
	table.setOptions((old) => ({
		...old,
		state: { ...table.initialState, ...state },
	}))

	return table
}

describe('FavouritesFeature on a table of TableCore', () => {
	it('marks and unmarks rows, and counts them', () => {
		const table = tableOf()
		expect(table.getFavouriteCount()).toBe(0)
		table.toggleFavourite('b')
		expect(table.getRowModel().rows.map((r) => r.getIsFavourite())).toEqual([
			false,
			true,
			false,
		])
		table.toggleFavourite('a')
		expect(table.getFavouriteCount()).toBe(2)
		table.toggleFavourite('b')
		expect(table.getFavouriteCount()).toBe(1)
	})

	it('enableFavourites: false marks nothing', () => {
		const table = tableOf({ enableFavourites: false })
		table.toggleFavourite('a')
		expect(table.getFavouriteCount()).toBe(0)
	})

	it("a slice with a change handler is the caller's: the handler gets the new value", () => {
		const seen: Record<string, boolean>[] = []
		const table = tableOf({
			onFavouritesChange: (updater: Updater<Record<string, boolean>>) =>
				seen.push(functionalUpdate(updater, {})),
		})
		table.toggleFavourite('c')
		expect(seen).toEqual([{ c: true }])
		expect(table.getFavouriteCount()).toBe(0)
	})

	it('the table has exactly the keys the contract says', () => {
		const plain = tableOf({ _features: tableCoreBase._features })
		const ours = tableOf()
		const added = (a: object, b: object) =>
			Object.keys(a)
				.filter((key) => !key.startsWith('_') && !(key in b))
				.sort()
		expect(added(ours, plain)).toEqual([...FavouritesContract.table].sort())
		const row = (t: ReturnType<typeof tableOf>) =>
			t.getRowModel().rows[0] as object
		expect(added(row(ours), row(plain))).toEqual(
			[...FavouritesContract.row].sort()
		)
	})
})
`;function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Tables/Table Core/Features/Overview"}),`
`,e.jsx(t.h1,{id:"features",children:"Features"}),`
`,e.jsxs(t.p,{children:["Table Core is ",e.jsx(t.strong,{children:"TanStack Table"})," with features added to it. Some features are TanStack's own, used as they are; most are TanStack's with an extension on top; a few are entirely custom. This page lists them all, says how the table is put together, and shows how to write a feature of your own."]}),`
`,e.jsx(t.h2,{id:"all-the-features",children:"All the features"}),`
`,e.jsx(u,{headers:p,rows:g}),`
`,e.jsxs(t.p,{children:["The features of the second and the third kind are the ",e.jsx(t.code,{children:"TABLE_CORE_FEATURES"})," of the headless module: seventeen TanStack custom features, each with its contract (the keys it adds to the table, a column, a row and a cell). What the user sees of them is the features above; the parts that draw them (toolbar, panels, menu, grid) only call their methods."]}),`
`,e.jsx(t.h2,{id:"how-it-is-put-together",children:"How it is put together"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"tableCoreBase"})})," — one plain object of TanStack options: the feature list (",e.jsx(t.code,{children:"_features: TABLE_CORE_FEATURES"}),"), the row models (core, sorted, grouped, expanded) and the fixed choices (",e.jsx(t.code,{children:"columnResizeMode: 'onChange'"}),", ",e.jsx(t.code,{children:"enableSortingRemoval"}),", ",e.jsx(t.code,{children:"enableSubRowSelection"}),", ",e.jsx(t.code,{children:"autoResetExpanded: false"}),", groups start open). Everything else is TanStack's own."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"With React"})," — ",e.jsx(t.code,{children:"TableCore"})," calls ",e.jsx(t.code,{children:"useTableCore"}),", which is ",e.jsx(t.code,{children:"useReactTable({ ...tableCoreBase, ...options })"}),". ",e.jsx(t.strong,{children:"Without React"})," — ",e.jsx(t.code,{children:"createTable({ ...tableCoreBase, ...tableOptionsOf(options) })"}),", the same table (entry ",e.jsx(a,{c:"@pnl-simulation/table-core/headless"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsxs(t.strong,{children:["The order of ",e.jsx(t.code,{children:"_features"})," matters."]})," A feature that wraps a method of TanStack or of an earlier feature (",e.jsx(t.code,{children:"getIsVisible"}),", ",e.jsx(t.code,{children:"getState"}),", ",e.jsx(t.code,{children:"setRowSelection"}),", ",e.jsx(t.code,{children:"getGroupingValue"}),") must come after it: later ones wrap earlier ones. The list is in ",e.jsx(t.code,{children:"headless/table-core-base.ts"})," and nowhere else."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Options, state, methods"})," are merged into TanStack's own types by an ",e.jsx(t.code,{children:"*.augment.d.ts"})," of each feature, so ",e.jsx(t.code,{children:"table.getSortActions(place)"})," or ",e.jsx(t.code,{children:"state.columnChainMembers"})," need no cast, and a cell's ",e.jsx(t.code,{children:"getContext().table"})," has them too."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Resolvers"})," are the screen's own answers over the table's: a function ",e.jsx(t.code,{children:"(args, defaults) => answer"})," gets what the question is about and the answer the table would give, and returns the one to use — see ",e.jsx(r,{page:"tables-table-core-concepts-resolvers-overview--docs",children:"Resolvers"}),"."]}),`
`]}),`
`,e.jsx(t.h2,{id:"a-feature-of-your-own",children:"A feature of your own"}),`
`,e.jsxs(t.p,{children:["A feature is TanStack's custom feature, the way the table's own are written: ",e.jsx(t.code,{children:"getInitialState"})," (the start of its state), ",e.jsx(t.code,{children:"getDefaultOptions"})," (its options and their defaults), ",e.jsx(t.code,{children:"createTable"})," / ",e.jsx(t.code,{children:"createColumn"})," / ",e.jsx(t.code,{children:"createRow"})," / ",e.jsx(t.code,{children:"createCell"})," (its methods), a file that merges its types into TanStack's, and a contract that says which keys it adds. The example marks rows as favourites: a slice ",e.jsx(t.code,{children:"favourites"}),", the option ",e.jsx(t.code,{children:"enableFavourites"}),", ",e.jsx(t.code,{children:"table.toggleFavourite(id)"}),", ",e.jsx(t.code,{children:"table.getFavouriteCount()"}),", ",e.jsx(t.code,{children:"row.getIsFavourite()"}),"."]}),`
`,e.jsx(t.h3,{id:"1-the-feature-and-its-contract",children:"1. The feature and its contract"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:o(m)}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"defineContract"})," and ",e.jsx(t.code,{children:"keysOf"})," check that the keys of the feature's types and of the contract are the same: a method added to the type and left out of the contract, or the other way round, does not compile."]}),`
`,e.jsx(t.h3,{id:"2-its-types-in-tanstacks",children:"2. Its types in TanStack's"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:o(x)}),`
`,e.jsx(t.h3,{id:"3-a-test-on-a-real-table",children:"3. A test on a real table"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:o(f)}),`
`,e.jsxs(t.p,{children:["The table is made of ",e.jsx(t.code,{children:"tableCoreBase"})," with the feature added: ",e.jsx(t.code,{children:"createTable({ ...tableCoreBase, _features: [...tableCoreBase._features, FavouritesFeature], … })"}),". The last test is the contract's: the table has exactly the keys it says."]}),`
`,e.jsx(t.h3,{id:"4-the-scene",children:"4. The scene"}),`
`,e.jsx(d,{of:h}),`
`,e.jsxs(t.p,{children:["The scene draws the table by hand over ",e.jsx(t.code,{children:"useReactTable"})," with the same base. The Code panel is the whole file."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Where a feature of your own plugs in."})," On the headless table: ",e.jsx(t.code,{children:"useReactTable"})," or ",e.jsx(t.code,{children:"createTable"})," over ",e.jsx(t.code,{children:"tableCoreBase"})," with ",e.jsx(t.code,{children:"_features: [...tableCoreBase._features, YourFeature]"}),", as above. ",e.jsx(t.code,{children:"TableCore"})," itself takes no extra features yet: its options leave ",e.jsx(t.code,{children:"_features"})," out, so a screen that wants one draws its own grid on the headless table (the pieces of the grid are the Primitives)."]}),`
`,e.jsx(t.h2,{id:"when-a-resolver-is-enough",children:"When a resolver is enough"}),`
`,e.jsxs(t.p,{children:["A feature is for ",e.jsx(t.strong,{children:"new state or new methods"}),". If the table already asks the question and you only want another answer — what a panel lists, what a chip shows, what a column's freezing offers, whether a drop is allowed — pass a resolver; nothing to register, nothing to merge:"]}),`
`,e.jsx(s,{dark:!0,language:"tsx",code:`import { TableCore, type TableCoreResolvers } from '@pnl-simulation/table-core'

const resolvers: TableCoreResolvers<Person> = {
  // The Sorting panel does not offer Email.
  getColumnsForSortingPanel: (_args, defaults) =>
    defaults.filter((column) => column.id !== 'email'),
  // The first column never moves.
  canMoveColumn: ({ column }, defaults) => column.id !== 'name' && defaults,
}

<TableCore data={people} columns={columns} getRowId={(p) => p.id} resolvers={resolvers} />`}),`
`,e.jsxs(t.p,{children:["The list of what can be asked: ",e.jsx(r,{page:"tables-table-core-concepts-resolvers-reference--docs",children:"Resolvers › Reference"}),"."]})]})}function D(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{D as default};
