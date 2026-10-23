const e=`import {
	TableCore,
	cellEditingFeature,
	createColumnHelper,
	createSortedRowModel,
	metaHelper,
	rowSortingFeature,
	sortFn_text,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type RowsMoveHandler,
	rowVirtualizationFeature,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'
import { Editor } from '../editing/editor'

// The rows change place when the sort or the data says so (a Level edited under
// a sort); the table says it once (\`onRowsMove\`) and the screen does what it wants.
const features = tableFeatures({
	rowVirtualizationFeature, // ← new: only the rows in the window are drawn
	rowSortingFeature,
	cellEditingFeature,
	sortedRowModel: createSortedRowModel(),
	sortFns: { text: sortFn_text },
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CellEditingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name', sortFn: 'text' }),
	helper.accessor('team', { header: 'Team', sortFn: 'text' }),
	helper.accessor('level', {
		header: 'Level',
		sortFn: 'text',
		meta: { editable: true, typeToEdit: true },
		cell: (info) => <Editor {...info} />,
	}),
])

type Props = {
	rows: Person[]
	/** A cell was written: save it. */
	onEdit: (rowId: string, columnId: string, value: unknown) => void
	/** Rows or groups changed place: what moved, why, and where the eye was. Handlers are ready (\`flipRows\`, \`keepAnchorInView\`, \`scrollToAnchor\`) or yours. */
	onRowsMove?: RowsMoveHandler
	/** The ids of the rows in the order the user sees them: at first, and again when sort or data change it. The screen keeps this order (a store, a request). */
	onRowOrderChange?: (order: string[]) => void
}

export const MovesTable = ({
	rows,
	onEdit,
	onRowsMove,
	onRowOrderChange,
}: Props) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		meta={{ onEdit }}
		initialState={{ sorting: [{ id: 'level', desc: false }] }}
		onRowsMove={onRowsMove} // ← new
		onRowOrderChange={onRowOrderChange} // ← new
	/>
)
`;export{e as _};
