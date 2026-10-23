import{j as a,Y as d,F as u,aZ as p,a0 as b,Z as m,b3 as y,a_ as C,b4 as f,b5 as v,a6 as o}from"./products-CTiDOXRn.js";const T=`import {
	TableCore,
	editOn,
	cellEditingFeature,
	cellSelectionFeature,
	cellKeyboardFeature,
	cellKeyboardEditingFeature,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type TableCoreProps,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

import { Editor } from './editor'

// 1. Selected cells can be copied, pasted into, cleared (Delete) and filled.
const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	cellEditingFeature,
	cellKeyboardEditingFeature,
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CellEditingColumnMeta>(),
})

// 2. A pasted text becomes a value through the column's \`parse\`, or is refused with a reason.
const level = (text: string) =>
	/^[A-D][1-9]$/.test(text) ? { value: text } : { error: 'Level is A1…D9' }

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	...(['name', 'team', 'level', 'country'] as const).map((key) =>
		helper.accessor(key, {
			header: key,
			meta: {
				editable: true,
				typeToEdit: true,
				...(key === 'level' && { parse: level }),
			},
			cell: (info) => <Editor {...info} />,
		})
	),
	helper.accessor('role', { header: 'role (not editable)' }),
])

type Props = Partial<TableCoreProps<typeof features, Person>> & {
	rows: Person[]
	/** 3. Typed, pasted or filled: every value comes here to be saved. */
	onEdit: (rowId: string, columnId: string, value: unknown) => void
	/** The position of the row the screen locks (-1: none): its cells say why they cannot be written. */
	lockedRow?: number
}

export const ClipboardTable = ({
	rows,
	onEdit,
	lockedRow = 2,
	startEditing = editOn.doubleClick,
	readOnly = false,
	...rest
}: Props) => (
	<TableCore
		// A click selects here (to copy, paste or fill): editing needs a double click.
		startEditing={startEditing}
		readOnly={readOnly}
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		meta={{ onEdit }}
		resolvers={{
			getCanEdit: ({ row }) =>
				row.index === lockedRow ? 'Row locked by Payroll' : true,
		}}
		{...rest}
	/>
)

/** The same table where ⌘/Ctrl+click adds and takes away blocks (v9's \`enableMultiCellRangeSelection\`, off by default): Copy joins blocks that line up, one pasted value, Delete and Ctrl/⌘+D work on every block, a block pasted over several blocks is refused, and the fill handle is for one block. */
export const SeveralBlocksTable = (props: Props) => (
	<ClipboardTable {...props} enableMultiCellRangeSelection />
)
`,g=b({cellSelectionFeature:v,cellKeyboardFeature:f,cellEditingFeature:C,cellKeyboardEditingFeature:y,tableMeta:o(),columnMeta:o()}),h=e=>/^[A-D][1-9]$/.test(e)?{value:e}:{error:"Level is A1…D9"},t=m(),k=t.columns([...["name","team","level","country"].map(e=>t.accessor(e,{header:e,meta:{editable:!0,typeToEdit:!0,...e==="level"&&{parse:h}},cell:n=>a.jsx(p,{...n})})),t.accessor("role",{header:"role (not editable)"})]),E=({rows:e,onEdit:n,lockedRow:r=2,startEditing:s=u.doubleClick,readOnly:i=!1,...c})=>a.jsx(d,{startEditing:s,readOnly:i,features:g,data:e,columns:k,getRowId:l=>l.id,meta:{onEdit:n},resolvers:{getCanEdit:({row:l})=>l.index===r?"Row locked by Payroll":!0},...c}),F=e=>a.jsx(E,{...e,enableMultiCellRangeSelection:!0});export{E as C,F as S,T as _};
