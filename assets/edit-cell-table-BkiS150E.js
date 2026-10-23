import{j as n,Y as c,F as m,aZ as a,a0 as p,a_ as u,a6 as r,Z as E}from"./products-CTiDOXRn.js";const T=`import {
	TableCore,
	editOn,
	cellEditingFeature,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type TableCoreProps,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

import { Editor } from './editor'

// 1. The table can edit cells.
const features = tableFeatures({
	cellEditingFeature,
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CellEditingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('team', {
		header: 'Team',
		// 2. This column can be edited (Name cannot).
		meta: { editable: true, typeToEdit: true },
		// 3. A click shows this field in the cell (\`startEditing\` can ask for a double click).
		cell: (info) => <Editor {...info} />,
	}),
	helper.accessor('role', {
		header: 'Role',
		meta: { editable: true, typeToEdit: true },
		cell: (info) => <Editor {...info} />,
	}),
])

type Props = Partial<TableCoreProps<typeof features, Person>> & {
	rows: Person[]
	/** 4. What was typed comes here: save it, the table shows the new rows. It may take time: return a promise. */
	onEdit: (
		rowId: string,
		columnId: string,
		value: unknown
	) => void | Promise<void>
}

export const EditCellTable = ({
	rows,
	onEdit,
	startEditing = editOn.click,
	readOnly = false,
	...rest
}: Props) => (
	<TableCore
		startEditing={startEditing}
		readOnly={readOnly}
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		meta={{ onEdit }}
		{...rest}
	/>
)
`,b=p({cellEditingFeature:u,tableMeta:r(),columnMeta:r()}),t=E(),h=t.columns([t.accessor("name",{header:"Name"}),t.accessor("team",{header:"Team",meta:{editable:!0,typeToEdit:!0},cell:e=>n.jsx(a,{...e})}),t.accessor("role",{header:"Role",meta:{editable:!0,typeToEdit:!0},cell:e=>n.jsx(a,{...e})})]),g=({rows:e,onEdit:l,startEditing:o=m.click,readOnly:s=!1,...i})=>n.jsx(c,{startEditing:o,readOnly:s,features:b,data:e,columns:h,getRowId:d=>d.id,meta:{onEdit:l},...i});export{g as E,T as _};
