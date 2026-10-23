import{b8 as w,b9 as c,j as g,Y as m,Z as h,a0 as R,ba as b,bb as y,bc as E,a_ as f,bd as M,be as F,a6 as o,bf as C,bg as G}from"./products-CTiDOXRn.js";const T=`import {
	TableCore,
	cellEditingFeature,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	metaHelper,
	rowDragFeature,
	rowExpandingFeature,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type GroupLayout,
	type GroupingState,
	type RowsMoveHandler,
	type RowsReorder,
	rowDragHandle,
	createUtilityColumn,
	rowVirtualizationFeature,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

// A grouped table: dropped on another group, a row takes its group. That writes
// the grouping column of the row the way an edit does (\`meta.onEdit\`), so the
// table needs the editing (\`cellEditingFeature\`, \`meta.editable\` on the column);
// a cell that cannot be edited stops the drop and says why.
const features = tableFeatures({
	rowVirtualizationFeature, // ← new: only the rows in the window are drawn
	rowDragFeature,
	cellEditingFeature, // ← new: a drop into a group writes a cell
	columnGroupingFeature, // ← new: v9's groups
	rowExpandingFeature, // ← new
	groupRowsFeature, // ← new: the bands and lanes of the groups
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CellEditingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Person>()

type Props = {
	rows: Person[]
	/** A cell was written: a row dropped into another group. */
	onEdit: (rowId: string, columnId: string, value: unknown) => void
	onRowsReorder: (change: RowsReorder) => void
	/** Rows or groups changed place: what moved and why (\`flipRows\`, or a handler of yours). */
	onRowsMove?: RowsMoveHandler
	/** The grouping the table starts with. */
	initialGrouping?: GroupingState
	/** How the groups are drawn. @default 'lanes' */
	groupLayout?: GroupLayout
	/** Team can be written or not: a drop into another group needs it. @default 'free' */
	teamEditing?: 'free' | 'locked'
	/** A group with no rows the rows can be dropped into. */
	emptyGroup?: boolean
}

export const GroupsTable = ({
	rows,
	onEdit,
	onRowsReorder,
	onRowsMove,
	initialGrouping = [],
	groupLayout = 'lanes',
	teamEditing = 'free',
	emptyGroup = false,
}: Props) => {
	const columns = helper.columns([
		createUtilityColumn(helper, { parts: [rowDragHandle()] }),
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('team', { header: 'Team', meta: { editable: true } }), // ← new
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('country', {
			header: 'Country',
			meta: { editable: true }, // ← new
		}),
	])

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(person) => person.id}
			meta={{ onEdit }} // ← new
			onRowsReorder={onRowsReorder} // setRows((all) => applyRowsReorder(all, change, (p) => p.id)): so the groups do not jump, apply the order
			resolvers={{
				getCanEdit: ({ column }) =>
					teamEditing === 'locked' && column.id === 'team'
						? 'Teams are set by Payroll'
						: true,
			}}
			onRowsMove={onRowsMove} // ← new: a handler of the rows and groups that moved
			groupLayout={groupLayout}
			groupPaths={() => (emptyGroup ? [['Design']] : [])}
			autoResetExpanded={false}
			initialState={{ grouping: initialGrouping, expanded: true }}
		/>
	)
}
`,x=R({rowVirtualizationFeature:F,rowDragFeature:M,cellEditingFeature:f,columnGroupingFeature:E,rowExpandingFeature:y,groupRowsFeature:b,groupedRowModel:G(),expandedRowModel:C(),tableMeta:o(),columnMeta:o()}),e=h(),H=({rows:a,onEdit:r,onRowsReorder:t,onRowsMove:l,initialGrouping:s=[],groupLayout:d="lanes",teamEditing:u="free",emptyGroup:p=!1})=>{const i=e.columns([w(e,{parts:[c()]}),e.accessor("name",{header:"Name"}),e.accessor("team",{header:"Team",meta:{editable:!0}}),e.accessor("role",{header:"Role"}),e.accessor("country",{header:"Country",meta:{editable:!0}})]);return g.jsx(m,{features:x,data:a,columns:i,getRowId:n=>n.id,meta:{onEdit:r},onRowsReorder:t,resolvers:{getCanEdit:({column:n})=>u==="locked"&&n.id==="team"?"Teams are set by Payroll":!0},onRowsMove:l,groupLayout:d,groupPaths:()=>p?[["Design"]]:[],autoResetExpanded:!1,initialState:{grouping:s,expanded:!0}})};export{H as G,T as _};
