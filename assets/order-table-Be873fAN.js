import{b8 as l,b9 as c,bI as R,j as d,Y as w,Z as h,a0 as p,bE as f,bd as u}from"./products-CTiDOXRn.js";const T=`import {
	TableCore,
	createColumnHelper,
	rowDragFeature,
	tableFeatures,
	type RowsMoveHandler,
	type RowsReorder,
	rowDragHandle,
	createUtilityColumn,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

// Moving rows needs one feature: \`rowDragFeature\` (ours; v9 has no row dragging).
// A handle takes a row; where it is dropped the screen is told (\`onRowsReorder\`)
// and puts the row there: the order is the screen's own data.
const features = tableFeatures({
	rowDragFeature,
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	createUtilityColumn(helper, { parts: [rowDragHandle()] }), // the handle
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('role', { header: 'Role' }),
	helper.accessor('country', { header: 'Country' }),
])

type Props = {
	rows: Person[]
	/** The rows were dropped before this one (null: last): put them there. */
	onRowsReorder: (change: RowsReorder) => void
	/** The user may take the rows. @default true */
	enableRowDragging?: boolean
	/** The rows changed place: what moved and why (\`flipRows\`, or a handler of yours). */
	onRowsMove?: RowsMoveHandler
}

export const OrderTable = ({
	rows,
	onRowsReorder,
	enableRowDragging = true,
	onRowsMove,
}: Props) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		enableRowDragging={enableRowDragging}
		onRowsReorder={onRowsReorder}
		onRowsMove={onRowsMove} // ← new: a handler of the rows that moved
	/>
)
`,D=`import {
	TableCore,
	createColumnHelper,
	rowDragFeature,
	rowSelectionFeature,
	tableFeatures,
	type CanDrop,
	type RowsMoveHandler,
	type RowsReorder,
	rowCheckbox,
	createUtilityColumn,
	rowDragHandle,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

// The same table with two more things a screen may want: the selected rows go
// together (v9's \`rowSelectionFeature\`: take one of them and all move), and a
// rule of its own for a drop (\`canDrop\`).
const features = tableFeatures({
	rowDragFeature,
	rowSelectionFeature, // ← new
})

const helper = createColumnHelper<typeof features, Person>()

/** The screen's rule of a drop (\`canDrop\`): true, or the reason. */
const RULES: Record<string, CanDrop<typeof features, Person>> = {
	any: () => true,
	'nothing above the first row': ({ target, position }) =>
		target.index === 0 && position === 'before'
			? 'The first row stays first'
			: true,
}

type Props = {
	rows: Person[]
	onRowsReorder: (change: RowsReorder) => void
	/** A column of checkboxes: select rows, take one of them, they all go. */
	selection?: boolean
	/** The rule of a drop. @default any */
	dropRule?: keyof typeof RULES
	/** The rows changed place: what moved and why (\`flipRows\`, or a handler of yours). */
	onRowsMove?: RowsMoveHandler
}

export const FlatTable = ({
	rows,
	onRowsReorder,
	selection = false,
	dropRule = 'any',
	onRowsMove,
}: Props) => {
	const columns = helper.columns([
		createUtilityColumn(helper, { parts: [rowDragHandle()] }),
		...(selection
			? [createUtilityColumn(helper, { parts: [rowCheckbox()] })]
			: []), // ← new
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('team', { header: 'Team' }),
		helper.accessor('role', { header: 'Role' }),
		helper.accessor('country', { header: 'Country' }),
	])

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(person) => person.id}
			onRowsReorder={onRowsReorder}
			canDrop={RULES[dropRule]} // ← new
			onRowsMove={onRowsMove} // ← new: a handler of the rows that moved
		/>
	)
}
`,g=p({rowDragFeature:u,rowSelectionFeature:f}),e=h(),y={any:()=>!0,"nothing above the first row":({target:n,position:r})=>n.index===0&&r==="before"?"The first row stays first":!0},F=({rows:n,onRowsReorder:r,selection:a=!1,dropRule:t="any",onRowsMove:s})=>{const i=e.columns([l(e,{parts:[c()]}),...a?[l(e,{parts:[R()]})]:[],e.accessor("name",{header:"Name"}),e.accessor("team",{header:"Team"}),e.accessor("role",{header:"Role"}),e.accessor("country",{header:"Country"})]);return d.jsx(w,{features:g,data:n,columns:i,getRowId:m=>m.id,onRowsReorder:r,canDrop:y[t],onRowsMove:s})},b=p({rowDragFeature:u}),o=h(),v=o.columns([l(o,{parts:[c()]}),o.accessor("name",{header:"Name"}),o.accessor("team",{header:"Team"}),o.accessor("role",{header:"Role"}),o.accessor("country",{header:"Country"})]),H=({rows:n,onRowsReorder:r,enableRowDragging:a=!0,onRowsMove:t})=>d.jsx(w,{features:b,data:n,columns:v,getRowId:s=>s.id,enableRowDragging:a,onRowsReorder:r,onRowsMove:t});export{F,H as O,T as _,D as a};
