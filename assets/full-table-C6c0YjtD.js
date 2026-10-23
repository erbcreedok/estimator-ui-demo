import{b8 as t,b9 as b,bI as R,j as y,Y as f,Z as F,a0 as C,bB as E,a4 as M,bi as S,bE as D,ba as G,bb as x,bc as T,a_ as v,bd as L,be as P,a6 as a,bj as k,bf as A,bg as H}from"./products-CTiDOXRn.js";const B=`import {
	TableCore,
	cellEditingFeature,
	columnGroupingFeature,
	columnPinningFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	createUtilityColumn,
	groupRowsFeature,
	metaHelper,
	rowDragFeature,
	rowExpandingFeature,
	rowSelectionFeature,
	rowSortingFeature,
	tableFeatures,
	type CanDrop,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type CoreColumnMeta,
	type GroupLayout,
	type GroupingState,
	type Row,
	type RowsReorder,
	type SortingColumnMeta,
	type SortingState,
	rowDragHandle,
	rowCheckbox,
	rowVirtualizationFeature,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'
import { sceneSortFns } from '../../kit/sort-fns'

// Everything together: the groups and the writes of the grouped table
// (groups-table.tsx), and a sort (a sorted table keeps the order of its sort: a
// drop inside a group is refused), the selected rows going together, frozen
// columns, the rows that can be taken and the screen's rule of a drop.
const features = tableFeatures({
	rowVirtualizationFeature, // ← new: only the rows in the window are drawn
	rowDragFeature,
	cellEditingFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowSelectionFeature, // ← new
	rowSortingFeature, // ← new
	columnPinningFeature, // ← new
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<
		CoreColumnMeta & CellEditingColumnMeta & SortingColumnMeta
	>(),
})

const helper = createColumnHelper<typeof features, Person>()

/** Which rows can be dragged (\`enableRowDragging\`): all, or a rule of the row. */
export const DRAGGABLE = {
	all: () => true,
	'not Lead Developers': (row: Row<typeof features, Person>) =>
		row.original.role !== 'Lead Developer',
	none: () => false,
}
export type Draggable = keyof typeof DRAGGABLE

/** The screen's rule of a drop (\`canDrop\`): true, or the reason. */
export const RULES: Record<string, CanDrop<typeof features, Person>> = {
	any: () => true,
	'not into Mobile': ({ target }) =>
		(target.getIsGrouped() ? target.groupingValue : target.original.team) ===
		'Mobile'
			? 'Mobile has no room'
			: true,
	'nothing above the first row': ({ target, position }) =>
		target.index === 0 && position === 'before'
			? 'The first row stays first'
			: true,
}
export type DropRule = keyof typeof RULES

type Props = {
	rows: Person[]
	/** A cell was written: what was typed, pasted, or a row dropped into another group. */
	onEdit: (rowId: string, columnId: string, value: unknown) => void
	/** The rows were dropped at a place in their group: the screen puts them there. */
	onRowsReorder: (change: RowsReorder) => void
	/** The user may drag these rows. @default all */
	enableRowDragging?: Draggable
	/** The screen's rule of a drop. @default any */
	dropRule?: DropRule
	/** Team and Country can be written (\`meta.editable\`) or not: a drop into another group needs them. @default 'free' */
	teamEditing?: 'free' | 'locked'
	/** The grouping the table starts with. */
	initialGrouping?: GroupingState
	initialSorting?: SortingState
	/** How the groups are drawn. @default 'lanes' */
	groupLayout?: GroupLayout
	/** A column of checkboxes: select rows, drag one of them, they all go. */
	selection?: boolean
	/** An empty group the rows can be dropped into. */
	emptyGroup?: boolean
	/** The handle and the name stay while the columns scroll. */
	pinColumns?: boolean
}

export const FullTable = ({
	rows,
	onEdit,
	onRowsReorder,
	enableRowDragging = 'all',
	dropRule = 'any',
	teamEditing = 'free',
	initialGrouping = [],
	initialSorting = [],
	groupLayout = 'lanes',
	selection = false,
	emptyGroup = false,
	pinColumns = false,
}: Props) => {
	const columns = helper.columns([
		createUtilityColumn(helper, { parts: [rowDragHandle()] }),
		...(selection
			? [createUtilityColumn(helper, { parts: [rowCheckbox()] })]
			: []),
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('team', {
			header: 'Team',
			meta: { editable: true },
		}),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('country', {
			header: 'Country',
			meta: { editable: true },
		}),
		helper.accessor('level', { header: 'Level' }),
	])

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(person) => person.id}
			meta={{ onEdit }}
			enableRowDragging={DRAGGABLE[enableRowDragging]} // ← new
			onRowsReorder={onRowsReorder} // setRows((all) => applyRowsReorder(all, change, (p) => p.id)): so the groups do not jump, apply the order
			canDrop={RULES[dropRule]} // ← new
			resolvers={{
				getCanEdit: ({ column }) =>
					teamEditing === 'locked' && column.id === 'team'
						? 'Teams are set by Payroll'
						: true,
			}}
			groupLayout={groupLayout}
			groupPaths={() => (emptyGroup ? [['Design']] : [])}
			autoResetExpanded={false}
			initialState={{
				grouping: initialGrouping,
				sorting: initialSorting,
				expanded: true,
				columnPinning: {
					start: pinColumns ? ['row-drag', 'name'] : [],
					end: [],
				},
			}}
		/>
	)
}
`,N={none:{value:[],code:"[]"},"by Team":{value:["team"],code:"['team']"},"Team, then Country":{value:["team","country"],code:"['team', 'country']"}},V={none:{value:[],code:"[]"},"by Name":{value:[{id:"name",desc:!1}],code:"[{ id: 'name', desc: false }]"}},I=C({rowVirtualizationFeature:P,rowDragFeature:L,cellEditingFeature:v,columnGroupingFeature:T,rowExpandingFeature:x,groupRowsFeature:G,rowSelectionFeature:D,rowSortingFeature:S,columnPinningFeature:M,groupedRowModel:H(),expandedRowModel:A(),sortedRowModel:k(),sortFns:E,tableMeta:a(),columnMeta:a()}),n=F(),U={all:()=>!0,"not Lead Developers":e=>e.original.role!=="Lead Developer",none:()=>!1},_={any:()=>!0,"not into Mobile":({target:e})=>(e.getIsGrouped()?e.groupingValue:e.original.team)==="Mobile"?"Mobile has no room":!0,"nothing above the first row":({target:e,position:o})=>e.index===0&&o==="before"?"The first row stays first":!0},z=({rows:e,onEdit:o,onRowsReorder:l,enableRowDragging:s="all",dropRule:i="any",teamEditing:u="free",initialGrouping:d=[],initialSorting:p=[],groupLayout:g="lanes",selection:c=!1,emptyGroup:m=!1,pinColumns:w=!1})=>{const h=n.columns([t(n,{parts:[b()]}),...c?[t(n,{parts:[R()]})]:[],n.accessor("name",{header:"Name"}),n.accessor("team",{header:"Team",meta:{editable:!0}}),n.accessor("role",{header:"Role"}),n.accessor("country",{header:"Country",meta:{editable:!0}}),n.accessor("level",{header:"Level"})]);return y.jsx(f,{features:I,data:e,columns:h,getRowId:r=>r.id,meta:{onEdit:o},enableRowDragging:U[s],onRowsReorder:l,canDrop:_[i],resolvers:{getCanEdit:({column:r})=>u==="locked"&&r.id==="team"?"Teams are set by Payroll":!0},groupLayout:g,groupPaths:()=>m?[["Design"]]:[],autoResetExpanded:!1,initialState:{grouping:d,sorting:p,expanded:!0,columnPinning:{start:w?["row-drag","name"]:[],end:[]}}})};export{U as D,z as F,N as G,_ as R,V as S,B as _};
