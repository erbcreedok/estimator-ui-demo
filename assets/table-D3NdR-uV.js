import{t as i,l as a,av as f,y as M,h as I,af as P,u as C,w as T,r as v,C as H,j as s,S as U,ah as O,Y as u,b8 as w,b9 as F,bI as z,cr as q,a0 as B,Z as $,cs as D,ct as L,cu as G,cv as W,bB as _,b4 as V,b5 as K,ba as Y,bb as Z,bc as J,a5 as Q,a1 as X,a4 as ee,bi as ne,bE as te,bd as ae,a6 as oe,bj as re,bf as se,bg as le}from"./products-CTiDOXRn.js";const he=`import {
	RowCheckbox,
	RowDragHandle,
	SelectAllCheckbox,
	TableCore,
	cellKeyboardFeature,
	cellSelectionFeature,
	columnGroupingFeature,
	columnOrderingFeature,
	columnPinningFeature,
	columnSizingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	createUtilityColumn,
	groupRowsFeature,
	inFirstVisibleColumn,
	metaHelper,
	rowCheckbox,
	rowDragFeature,
	rowDragHandle,
	rowExpandingFeature,
	rowNumber,
	rowSelectionFeature,
	rowSortingFeature,
	tableFeatures,
	type CoreColumnMeta,
	type RowsReorder,
	type UtilityLayout,
	type UtilityPart,
} from '@pnl-simulation/table-core'

import type { Employee } from '../../data/employees'
import { sceneSortFns } from '../../kit/sort-fns'

// A utility column is made of parts: the handle that takes a row, its checkbox,
// its number. With no options it is the column of the legacy table; the screen
// can list the parts it wants and a layout stands them in the cell and the
// header. The table adds no column of its own. The same parts
// can stand in any cell (the Name cell below), or follow the first column.
const features = tableFeatures({
	rowDragFeature,
	rowSelectionFeature,
	rowSortingFeature,
	columnPinningFeature,
	columnSizingFeature,
	columnOrderingFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	cellSelectionFeature,
	cellKeyboardFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
	columnMeta: metaHelper<CoreColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Employee>()

const dataColumns = [
	helper.accessor('team', { header: 'Team', size: 120 }),
	helper.accessor('role', { header: 'Role', size: 150 }),
	helper.accessor('country', { header: 'Country', size: 120 }),
]

type Rows = {
	rows: Employee[]
	/** The rows were dropped at a place: the screen puts them there. */
	onRowsReorder: (change: RowsReorder) => void
}

/** 2. The handle has a column of its own, the checkbox and the number another. */
export const SeparateTable = ({ rows, onRowsReorder }: Rows) => (
	<TableCore
		features={features}
		data={rows}
		columns={helper.columns([
			createUtilityColumn(helper, { parts: [rowDragHandle()] }),
			createUtilityColumn(helper, { parts: [rowCheckbox(), rowNumber()] }),
			helper.accessor('name', { header: 'Name', size: 200 }),
			...dataColumns,
		])}
		getRowId={(employee) => employee.id}
		onRowsReorder={onRowsReorder}
	/>
)

/** 3 to 5. One column with all the parts: the layout stands them. */
export const OneColumnTable = ({
	rows,
	onRowsReorder,
	layout,
}: Rows & { layout: UtilityLayout<UtilityPart> }) => (
	<TableCore
		features={features}
		data={rows}
		columns={helper.columns([
			createUtilityColumn(helper, {
				parts: [rowDragHandle(), rowCheckbox(), rowNumber()],
				layout,
			}),
			helper.accessor('name', { header: 'Name', size: 200 }),
			...dataColumns,
		])}
		getRowId={(employee) => employee.id}
		onRowsReorder={onRowsReorder}
	/>
)

/** 1. As in the product: no options, the legacy column of the handle, the checkbox and the number. */
export const ProductTable = ({ rows, onRowsReorder }: Rows) => (
	<TableCore
		features={features}
		data={rows}
		columns={helper.columns([
			createUtilityColumn(helper),
			helper.accessor('name', { header: 'Name', size: 200 }),
			...dataColumns,
		])}
		getRowId={(employee) => employee.id}
		onRowsReorder={onRowsReorder}
	/>
)

/** The Name column with the handle and the checkbox in its cell and select all in its header. */
const nameWithParts = helper.accessor('name', {
	size: 280,
	meta: { plainHeader: true },
	header: ({ table }) => (
		<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
			<span style={{ width: 24 }} />
			<SelectAllCheckbox table={table} />
			Name
		</span>
	),
	cell: (context) => (
		<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
			<RowDragHandle context={context} />
			<RowCheckbox context={context} />
			{context.row.original.name}
		</span>
	),
})

/** 6. No utility column: the handle and the checkbox stand in the Name cell, select all in its header. */
export const InNameTable = ({ rows, onRowsReorder }: Rows) => (
	<TableCore
		features={features}
		data={rows}
		columns={helper.columns([nameWithParts, ...dataColumns])}
		getRowId={(employee) => employee.id}
		onRowsReorder={onRowsReorder}
	/>
)

const lead = inFirstVisibleColumn([rowDragHandle(), rowCheckbox()])
const leadingColumns = [
	helper.accessor('name', { id: 'name', size: 220 }),
	helper.accessor('team', { id: 'team', size: 220 }),
	helper.accessor('role', { id: 'role', size: 220 }),
	helper.accessor('country', { id: 'country', size: 220 }),
].map((column) => ({
	...column,
	header: lead.header(String(column.id).replace(/^./, (c) => c.toUpperCase())),
	cell: lead.cell((info) => String(info.getValue())),
}))

/** 7. The parts stand in the first column, whichever it is: put another column first and they follow. */
export const FirstColumnTable = ({
	rows,
	onRowsReorder,
	columnOrder,
}: Rows & { columnOrder: string[] }) => (
	<TableCore
		features={features}
		data={rows}
		columns={leadingColumns as never}
		getRowId={(employee) => employee.id}
		onRowsReorder={onRowsReorder}
		initialState={{ columnOrder }}
	/>
)

/** 8. All together: the column as in the product with the selection of cells, frozen columns and groups: the checkbox of a group stands where the checkboxes of its rows do. */
export const TogetherTable = ({ rows, onRowsReorder }: Rows) => (
	<TableCore
		features={features}
		data={rows}
		columns={helper.columns([
			createUtilityColumn(helper),
			helper.accessor('name', { header: 'Name', size: 200 }),
			...dataColumns,
			helper.accessor('level', { header: 'Level', size: 100 }),
		])}
		getRowId={(employee) => employee.id}
		onRowsReorder={onRowsReorder}
		groupLayout="rows"
		autoResetExpanded={false}
		initialState={{
			grouping: ['team'],
			expanded: true,
			columnPinning: { start: ['row-utility', 'name'], end: [] },
		}}
	/>
)

/** 9. Lanes and a frozen column: the lanes first, the column of the tools right after them, then the frozen Name. The screen froze Name only: the column of the tools joins the frozen side, first. */
export const LanesFrozenTable = ({ rows, onRowsReorder }: Rows) => (
	<TableCore
		features={features}
		data={rows}
		columns={helper.columns([
			createUtilityColumn(helper),
			helper.accessor('name', { header: 'Name', size: 200 }),
			...dataColumns,
		])}
		getRowId={(employee) => employee.id}
		onRowsReorder={onRowsReorder}
		autoResetExpanded={false}
		initialState={{
			grouping: ['team'],
			expanded: true,
			columnPinning: { start: ['name'], end: [] },
		}}
	/>
)

/** 10. At the end, frozen right: \`placement: 'end'\`. The screen froze Role at the right: the column of the tools joins that side, last. */
export const EndFrozenTable = ({ rows, onRowsReorder }: Rows) => (
	<TableCore
		features={features}
		data={rows}
		columns={helper.columns([
			createUtilityColumn(helper, { placement: 'end' }),
			helper.accessor('name', { header: 'Name', size: 200 }),
			...dataColumns,
		])}
		getRowId={(employee) => employee.id}
		onRowsReorder={onRowsReorder}
		initialState={{ columnPinning: { start: [], end: ['role'] } }}
	/>
)
`,ce=(e,n)=>e.querySelector(`[role="row"][aria-rowindex="${n+2}"]`),d=(e,n,t)=>{var c;return((c=ce(e,n))==null?void 0:c.querySelector(`[data-column-id="${t}"]`))??null},r=(e,n)=>(e==null?void 0:e.querySelector(`[data-part="${n}"]`))??null,A=e=>getComputedStyle(e),l=e=>{const n=(e==null?void 0:e.closest("[data-on-hover]"))??e;return!!n&&A(n).opacity!=="0"},E=e=>!!e&&A(e.closest("[data-swap-base]")??e).visibility==="hidden",k=async(e,n)=>{e.focus(),await n(),e.blur()},me=async e=>{var t,c,m;await i(e);const n=P(e);a(n[0]==="row-drag"&&n[1]==="row-utility",`two utility columns: ${n.slice(0,3)}`),a((t=d(e,0,"row-drag"))==null?void 0:t.querySelector("[data-row-drag-handle]"),"the first holds the handle"),a(((c=r(d(e,0,"row-utility"),"number"))==null?void 0:c.textContent)==="1","the second holds the number"),a((m=d(e,0,"row-utility"))==null?void 0:m.querySelector("[role=checkbox]"),"and the checkbox"),a(e.querySelector("[data-row-number-hash]"),"its header says #")},we=async(e,n)=>{await i(e);const t=d(e,0,"row-utility");a(r(t,"handle"),"the handle"),a(r(t,"checkbox"),"the checkbox"),a(r(t,"number"),"the number"),a(f(e,"row-utility")===n,`the column is ${n}px, as wide as its layout and the room around: ${f(e,"row-utility")}`),a(e.querySelector('[data-header-id="row-utility"] [data-row-number-hash]'),"one header for the three: # and select all")},pe=async e=>{await i(e);const n=d(e,1,"row-utility"),t=r(n,"checkbox");a(l(r(n,"number")),"the number shows"),a(!l(t),"the checkbox does not, at rest"),a(!l(r(n,"handle")),"nor does the handle"),await k(n,()=>{a(l(t),"the focus in the cell shows the checkbox"),a(l(r(n,"handle")),"and the handle"),a(E(r(n,"number")),"and the number gives way")}),await C.click(T(n).getByRole("checkbox")),await I(()=>l(t),"a ticked row keeps its checkbox"),await C.click(T(n).getByRole("checkbox"))},ye=async e=>{await i(e),a(f(e,"row-utility")===40,`the column is 40px: ${f(e,"row-utility")}`);const n=d(e,0,"row-utility"),t=r(n,"handle");a(Math.round(t.getBoundingClientRect().width)===9,"the handle keeps 9px"),a(!l(t),"the handle is hidden at rest"),a(l(r(n,"number")),"the number shows"),a(t.getBoundingClientRect().left-n.getBoundingClientRect().left<r(n,"number").getBoundingClientRect().left-n.getBoundingClientRect().left,"the handle is left of the number"),await k(n,()=>{a(l(t),"the focus shows the handle"),a(l(r(n,"checkbox")),"and the checkbox"),a(E(r(n,"number")),"in the place of the number")})},ge=async e=>{await i(e);const n=d(e,0,"row-utility");a(l(r(n,"handle")),"the handle is always there"),a(l(r(n,"number")),"the number shows"),a(!l(r(n,"checkbox")),"the checkbox waits"),await k(n,()=>{a(l(r(n,"checkbox")),"the focus brings the checkbox")})},be=async e=>{await i(e),a(!e.querySelector('[data-column-id="row-utility"]'),"no utility column");const n=d(e,0,"name");a(n.querySelector("[data-row-drag-handle]"),"the handle is in Name"),a(n.querySelector("[role=checkbox]"),"and the checkbox"),a(e.querySelector('[data-header-id="name"] [aria-label="Select all rows"]'),"select all is in its header")},y=e=>Array.from(e.querySelectorAll("[data-cell]")).filter(n=>n.querySelector("[data-leading-parts]")).map(n=>n.dataset.columnId),Re=async e=>{var t;const n=e.canvasElement;await i(n),a(new Set(y(n)).size===1&&y(n)[0]==="name",`the parts are in Name: ${y(n)[0]}`),await M(e,{columnOrder:"Team first"}),await I(()=>new Set(y(n)).size===1&&y(n)[0]==="team","Team first: the parts are in Team"),a(!((t=d(n,0,"name"))!=null&&t.querySelector("[data-leading-parts]")),"and left Name")},fe=async e=>{var m,g,b,R;await i(e);const n=e.querySelector('[aria-label="Select group"]');a(n,"a group has its checkbox"),a(l(n),"and it is always there: a group has no number to swap it for");const t=e.querySelector('[aria-label="Select row"]');a(t&&Math.abs(n.getBoundingClientRect().left-t.getBoundingClientRect().left)<=1,"the checkbox of a group stands where the checkboxes of its rows do"),a(((m=e.querySelector('[data-header-id="row-utility"]'))==null?void 0:m.dataset.pinned)==="left"&&((g=e.querySelector('[data-header-id="name"]'))==null?void 0:g.dataset.pinned)==="left","the utility column and Name are frozen at the left");const c=(b=t==null?void 0:t.closest("[role=row]"))==null?void 0:b.querySelector('[data-column-id="name"]');await C.click(c),a(((R=c.closest("[data-cell]"))==null?void 0:R.getAttribute("data-selection"))==="active","a cell can be active beside it")},S=e=>Array.from(e.querySelectorAll("[data-header-id]")).map(n=>n.dataset.headerId),x=(e,n)=>{var t;return(t=e.querySelector(`[data-header-id="${n}"]`))==null?void 0:t.dataset.pinned},xe=async e=>{await i(e);const n=e.querySelector('[data-lane-id="team"]'),t=e.querySelector('[data-header-id="row-utility"]');a(n&&t,"a lane of Team and the column of the tools"),a(n.getBoundingClientRect().left<t.getBoundingClientRect().left,"the lane stands before the column of the tools"),a(S(e).slice(0,2).join()==="row-utility,name",`then Name: ${S(e)}`),a(x(e,"row-utility")==="left"&&x(e,"name")==="left","the column of the tools is frozen with Name, first")},Ce=async e=>{await i(e);const n=S(e);a(n.at(-1)==="row-utility",`it is the last column: ${n}`),a(x(e,"row-utility")==="right"&&x(e,"role")==="right","frozen at the right with Role, after it"),a(n.indexOf("role")===n.length-2,`Role, then the column of the tools: ${n}`)},Se=({hint:e,table:n,props:t,count:c=8})=>{const[m,g]=v.useState(()=>H(c));return s.jsx(U,{hint:e,children:s.jsx(n,{...t,rows:m,onRowsReorder:b=>g(R=>O(R,b,j=>j.id))})})},h=B({rowDragFeature:ae,rowSelectionFeature:te,rowSortingFeature:ne,columnPinningFeature:ee,columnSizingFeature:X,columnOrderingFeature:Q,columnGroupingFeature:J,rowExpandingFeature:Z,groupRowsFeature:Y,cellSelectionFeature:K,cellKeyboardFeature:V,groupedRowModel:le(),expandedRowModel:se(),sortedRowModel:re(),sortFns:_,columnMeta:oe()}),o=$(),p=[o.accessor("team",{header:"Team",size:120}),o.accessor("role",{header:"Role",size:150}),o.accessor("country",{header:"Country",size:120})],Fe=({rows:e,onRowsReorder:n})=>s.jsx(u,{features:h,data:e,columns:o.columns([w(o,{parts:[F()]}),w(o,{parts:[z(),q()]}),o.accessor("name",{header:"Name",size:200}),...p]),getRowId:t=>t.id,onRowsReorder:n}),ze=({rows:e,onRowsReorder:n,layout:t})=>s.jsx(u,{features:h,data:e,columns:o.columns([w(o,{parts:[F(),z(),q()],layout:t}),o.accessor("name",{header:"Name",size:200}),...p]),getRowId:c=>c.id,onRowsReorder:n}),ke=({rows:e,onRowsReorder:n})=>s.jsx(u,{features:h,data:e,columns:o.columns([w(o),o.accessor("name",{header:"Name",size:200}),...p]),getRowId:t=>t.id,onRowsReorder:n}),ie=o.accessor("name",{size:280,meta:{plainHeader:!0},header:({table:e})=>s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{width:24}}),s.jsx(G,{table:e}),"Name"]}),cell:e=>s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(D,{context:e}),s.jsx(L,{context:e}),e.row.original.name]})}),Te=({rows:e,onRowsReorder:n})=>s.jsx(u,{features:h,data:e,columns:o.columns([ie,...p]),getRowId:t=>t.id,onRowsReorder:n}),N=W([F(),z()]),de=[o.accessor("name",{id:"name",size:220}),o.accessor("team",{id:"team",size:220}),o.accessor("role",{id:"role",size:220}),o.accessor("country",{id:"country",size:220})].map(e=>({...e,header:N.header(String(e.id).replace(/^./,n=>n.toUpperCase())),cell:N.cell(n=>String(n.getValue()))})),Ne=({rows:e,onRowsReorder:n,columnOrder:t})=>s.jsx(u,{features:h,data:e,columns:de,getRowId:c=>c.id,onRowsReorder:n,initialState:{columnOrder:t}}),Ie=({rows:e,onRowsReorder:n})=>s.jsx(u,{features:h,data:e,columns:o.columns([w(o),o.accessor("name",{header:"Name",size:200}),...p,o.accessor("level",{header:"Level",size:100})]),getRowId:t=>t.id,onRowsReorder:n,groupLayout:"rows",autoResetExpanded:!1,initialState:{grouping:["team"],expanded:!0,columnPinning:{start:["row-utility","name"],end:[]}}}),qe=({rows:e,onRowsReorder:n})=>s.jsx(u,{features:h,data:e,columns:o.columns([w(o),o.accessor("name",{header:"Name",size:200}),...p]),getRowId:t=>t.id,onRowsReorder:n,autoResetExpanded:!1,initialState:{grouping:["team"],expanded:!0,columnPinning:{start:["name"],end:[]}}}),Ae=({rows:e,onRowsReorder:n})=>s.jsx(u,{features:h,data:e,columns:o.columns([w(o,{placement:"end"}),o.accessor("name",{header:"Name",size:200}),...p]),getRowId:t=>t.id,onRowsReorder:n,initialState:{columnPinning:{start:[],end:["role"]}}});export{Ae as E,Ne as F,Te as I,qe as L,ze as O,ke as P,Se as S,Ie as T,he as _,xe as a,ge as b,Fe as c,pe as d,Ce as e,Re as f,be as i,ye as l,we as o,me as s,fe as t};
