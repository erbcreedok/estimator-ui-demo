import{r as f,j as n,c7 as p,aS as w,_ as m,c4 as R,c5 as x,c6 as v,cb as E,cc as I,aZ as S,a0 as T,bP as k,a_ as M,aR as y,aY as F,S as C,p as j,s as _,e as G}from"./products-CTiDOXRn.js";import{m as H}from"./rows-l3LcChQt.js";import{G as P,h as b,f as O}from"./scene-CB7jjebp.js";const U=`import { useRef } from 'react'

import {
	TableToolbar,
	cellEditingFeature,
	flipRows,
	groupingControl,
	orderHoldFeature,
	sortingControl,
	tableFeatures,
	type TableCoreHandle,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'
import { Editor } from '../editing/editor'

import type { IssuesResolve } from './issues-resolve'
import { FixedMark, ISSUES_ID, IssuesRefresh, IssuesToggle } from './issues'
import {
	GroupTable,
	features as shared,
	helper,
	type GroupTableProps,
} from './table'

// Issues with the hold, a step over the shared Grouping table (\`GroupTable\`):
// the features it adds are marked \`← new\`. The screen holds who stands in which
// group (\`holdOrder({ groupsOf })\`) before it saves an edit, so a fixed row stays
// in Blockers with a mark until the user presses Refresh (\`applyHeldOrder\`, the
// rows slide: \`flipRows\`); Exclude lets one row go to its group at once
// (\`releaseRows\`).
const features = tableFeatures({
	...shared,
	cellEditingFeature, // ← new: the Rate is edited
	orderHoldFeature, // ← new: the order and the groups can be held
})

const columns = helper.columns([
	// The field that fixes a blocker: a rate above zero.
	helper.accessor('rate', {
		header: 'Rate',
		size: 110,
		meta: { editable: true, typeToEdit: true },
		cell: (info) => (
			<FixedMark
				fixed={
					info.row.original.state === 'ok' &&
					info.row.getParentRow()?.groupingValue === 'Blockers'
				}
			>
				<Editor {...info} inputMode="numeric" />
			</FixedMark>
		),
	}),
	helper.display({
		id: 'exclude',
		header: '',
		size: 90,
		enableSorting: false,
		cell: ({ row, table }) => (
			<button
				type="button"
				data-exclude={row.id}
				onClick={() => table.options.meta?.onExclude?.(row.id)}
			>
				Exclude
			</button>
		),
	}),
])

const toolbar: TableCoreUiProps['toolbar'] = (table) => (
	<>
		<TableToolbar
			table={table}
			start={<IssuesToggle table={table} />}
			controls={[groupingControl(), sortingControl()]}
		/>
		<IssuesRefresh table={table} /> {/* ← new: how many rows are fixed */}
	</>
)

type Props = Pick<GroupTableProps, 'rows'> & {
	/** What the screen does with an edit that moves a row to another group: holds the groups until Refresh (\`hold\`), and how the rows move (\`onRowsMove\`). */
	resolve?: IssuesResolve
	/** A cell was written: save it. */
	onEdit: (rowId: string, columnId: string, value: unknown) => void
	/** The Exclude button of a row. */
	onExclude: (rowId: string) => void
}

export const IssuesHoldTable = ({
	resolve = { hold: true, onRowsMove: flipRows() },
	onEdit,
	onExclude,
	...table
}: Props) => {
	const handle = useRef<TableCoreHandle<typeof features, FeatureRow>>(null)
	const { hold, onRowsMove } = resolve

	return (
		<GroupTable
			{...table}
			set="issues"
			toolbar
			initialGrouping={[ISSUES_ID]}
			initialSorting={[{ id: ISSUES_ID, desc: false }]}
			step={{
				features,
				columns,
				toolbar,
				tableRef: handle,
				onRowsMove,
				meta: {
					onEdit: (rowId: string, columnId: string, value: unknown) => {
						// ← new: keep the groups the rows stand in, then save
						if (hold) handle.current?.table.holdOrder({ groupsOf: [ISSUES_ID] })
						onEdit(rowId, columnId, value)
					},
					onExclude: (rowId: string) => {
						onExclude(rowId)
						handle.current?.table.releaseRows([rowId]) // ← new: the row goes to its group at once
					},
				},
			}}
		/>
	)
}
`,V=T({...O,cellEditingFeature:M,orderHoldFeature:k}),z=b.columns([b.accessor("rate",{header:"Rate",size:110,meta:{editable:!0,typeToEdit:!0},cell:e=>{var o;return n.jsx(I,{fixed:e.row.original.state==="ok"&&((o=e.row.getParentRow())==null?void 0:o.groupingValue)==="Blockers",children:n.jsx(S,{...e,inputMode:"numeric"})})}}),b.display({id:"exclude",header:"",size:90,enableSorting:!1,cell:({row:e,table:o})=>n.jsx("button",{type:"button","data-exclude":e.id,onClick:()=>{var t,l;return(l=(t=o.options.meta)==null?void 0:t.onExclude)==null?void 0:l.call(t,e.id)},children:"Exclude"})})]),D=e=>n.jsxs(n.Fragment,{children:[n.jsx(m,{table:e,start:n.jsx(v,{table:e}),controls:[R(),x()]}),n.jsx(E,{table:e})," "]}),B=({resolve:e={hold:!0,onRowsMove:w()},onEdit:o,onExclude:t,...l})=>{const i=f.useRef(null),{hold:c,onRowsMove:h}=e;return n.jsx(P,{...l,set:"issues",toolbar:!0,initialGrouping:[p],initialSorting:[{id:p,desc:!1}],step:{features:V,columns:z,toolbar:D,tableRef:i,onRowsMove:h,meta:{onEdit:(r,s,a)=>{var u;c&&((u=i.current)==null||u.table.holdOrder({groupsOf:[p]})),o(r,s,a)},onExclude:r=>{var s;t(r),(s=i.current)==null||s.table.releaseRows([r])}}}})},g={animation:{value:{hold:!1,onRowsMove:y(w(),F())},code:"{ hold: false, onRowsMove: combineRowsMove(flipRows(), keepAnchorInView()) }"},"Refresh button":{value:{hold:!0,onRowsMove:void 0},code:"{ hold: true, onRowsMove: undefined }"},both:{value:{hold:!0,onRowsMove:w()},code:"{ hold: true, onRowsMove: flipRows() }"}},[A]=Object.values([U]),Z=e=>_(A,e,G({resolve:g})),W=e=>e.map(o=>o.state==="blocked"?{...o,rate:0}:o),$=({hint:e,count:o=12,resolve:t="both"})=>{const[l,i]=f.useState(()=>W(H(o))),c=(r,s,a)=>i(u=>u.map(d=>d.id===r?{...d,[s]:a,state:s==="rate"&&Number(a)>0&&d.state==="blocked"?"ok":d.state}:d)),h=r=>i(s=>s.map(a=>a.id===r?{...a,state:"excluded"}:a));return n.jsx(C,{hint:e,children:n.jsx("div",{style:{height:"100%"},children:n.jsx(B,{rows:l,resolve:j(g,t),onEdit:c,onExclude:h})})})};export{$ as I,g as R,A as h,Z as i};
