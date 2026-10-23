import{r as i,j as e,Y as w,a0 as S,bt as v,a3 as x,a1 as z,bu as R,bv as T,Z as j,S as F,M}from"./products-CTiDOXRn.js";import{m as f}from"./rows-l3LcChQt.js";const O=`import { forwardRef } from 'react'

import {
	TableCore,
	columnFilteringFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	createColumnHelper,
	createFilteredRowModel,
	filterFn_includesString,
	tableFeatures,
	type ColumnDef,
	type ColumnFiltersState,
	type OnChangeFn,
	type TableCoreHandle,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'

// Filtering is v9's \`columnFilteringFeature\`: the state (\`columnFilters\`), the
// filter functions and the rows that are left (\`filteredRowModel\`). Table Core
// has no interface for it: the screen sets the filters, with its own controls,
// by \`state.columnFilters\` or by the column's \`setFilterValue\`. A server that
// filters (\`manualFiltering\`) is the scene "On the server".
const features = tableFeatures({
	columnFilteringFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	filteredRowModel: createFilteredRowModel(),
	filterFns: { includesString: filterFn_includesString },
})

const helper = createColumnHelper<typeof features, FeatureRow>()

type Columns = ColumnDef<typeof features, FeatureRow, unknown>[]

/** The columns of the scenes, by what a scene shows. */
export const COLUMN_SETS: Record<'basic' | 'setup', Columns> = {
	basic: helper.columns([
		helper.accessor('name', { header: 'Name', size: 120 }),
		helper.accessor('team', { header: 'Team', size: 90 }),
		helper.accessor('role', { header: 'Role', size: 120 }),
		helper.accessor('level', { header: 'Level', size: 70 }),
		helper.accessor('country', { header: 'Country', size: 90 }),
	]),
	/** Each column says what it does: Team never filters, Level filters by what it starts with. */
	setup: helper.columns([
		helper.accessor('name', { header: 'Name', size: 120 }),
		helper.accessor('team', {
			header: 'Team',
			size: 90,
			enableColumnFilter: false,
		}),
		helper.accessor('role', { header: 'Role', size: 120 }),
		helper.accessor('level', {
			header: 'Level',
			size: 70,
			filterFn: (row, columnId, value: string) =>
				String(row.getValue(columnId)).startsWith(value),
		}),
		helper.accessor('country', { header: 'Country', size: 90 }),
	]),
}
export type ColumnSet = keyof typeof COLUMN_SETS

type Props = {
	rows: FeatureRow[]
	set?: ColumnSet
	/** The filters. Left out: the table keeps its own. */
	filters?: ColumnFiltersState
	onFiltersChange?: OnChangeFn<ColumnFiltersState>
	/** The filters the table starts with, when it keeps its own. */
	initialFilters?: ColumnFiltersState
	enableFilters?: boolean
}

export type FilteringHandle = TableCoreHandle<typeof features, FeatureRow>

export const FilteringTable = forwardRef<FilteringHandle, Props>(
	(
		{
			rows,
			set = 'basic',
			filters = undefined,
			onFiltersChange,
			initialFilters = undefined,
			enableFilters = true,
		},
		ref
	) => (
		<TableCore
			ref={ref}
			features={features}
			data={rows}
			columns={COLUMN_SETS[set]}
			getRowId={(row) => row.id}
			enableFilters={enableFilters}
			initialState={{ columnFilters: initialFilters ?? [] }}
			{...(filters && {
				state: { columnFilters: filters },
				onColumnFiltersChange: onFiltersChange,
			})}
		/>
	)
)
`,_=S({columnFilteringFeature:R,columnSizingFeature:z,columnVisibilityFeature:x,filteredRowModel:T(),filterFns:{includesString:v}}),s=j(),k={basic:s.columns([s.accessor("name",{header:"Name",size:120}),s.accessor("team",{header:"Team",size:90}),s.accessor("role",{header:"Role",size:120}),s.accessor("level",{header:"Level",size:70}),s.accessor("country",{header:"Country",size:90})]),setup:s.columns([s.accessor("name",{header:"Name",size:120}),s.accessor("team",{header:"Team",size:90,enableColumnFilter:!1}),s.accessor("role",{header:"Role",size:120}),s.accessor("level",{header:"Level",size:70,filterFn:(a,l,t)=>String(a.getValue(l)).startsWith(t)}),s.accessor("country",{header:"Country",size:90})])},p=i.forwardRef(({rows:a,set:l="basic",filters:t=void 0,onFiltersChange:u,initialFilters:c=void 0,enableFilters:d=!0},m)=>e.jsx(w,{ref:m,features:_,data:a,columns:k[l],getRowId:h=>h.id,enableFilters:d,initialState:{columnFilters:c??[]},...t&&{state:{columnFilters:t},onColumnFiltersChange:u}})),C=36,y={display:"flex",gap:8,alignItems:"center",height:C},V=({hint:a,...l})=>{const t=i.useMemo(()=>f(12),[]);return e.jsx(F,{hint:a,children:e.jsx(p,{rows:t,...l})})},E=()=>{const a=i.useMemo(()=>f(12),[]),[l,t]=i.useState([]);return e.jsxs(F,{hint:e.jsx(M,{text:"The screen owns `columnFilters`: its buttons set it. The table has no filter interface of its own."}),children:[e.jsxs("div",{style:y,children:[e.jsx("button",{type:"button",onClick:()=>t([{id:"country",value:"poland"}]),children:"Poland"}),e.jsx("button",{type:"button",onClick:()=>t([{id:"country",value:"kaz"},{id:"role",value:"qa"}]),children:"Kazakhstan, QA"}),e.jsx("button",{type:"button",onClick:()=>t([]),children:"No filters"}),e.jsx("code",{"data-filters-state":!0,children:JSON.stringify(l)})]}),e.jsx("div",{style:{height:`calc(100% - ${C}px)`},children:e.jsx(p,{rows:a,filters:l,onFiltersChange:t})})]})},H=({hint:a,...l})=>{var b;const t=i.useMemo(()=>f(12),[]),u=i.useRef(null),[c,d]=i.useState("country"),[m,h]=i.useState(""),n=(b=u.current)==null?void 0:b.table,g=r=>{var o;return(o=n==null?void 0:n.getColumn(r))==null?void 0:o.getCanFilter()};return e.jsxs(F,{hint:a,children:[e.jsxs("div",{style:y,children:[e.jsx("select",{"aria-label":"Column",value:c,onChange:r=>{var o;(o=n==null?void 0:n.getColumn(c))==null||o.setFilterValue(void 0),h(""),d(r.target.value)},children:["name","team","role","level","country"].map(r=>e.jsxs("option",{value:r,children:[r,g(r)===!1?" (never filters)":""]},r))}),e.jsx("input",{"aria-label":"Filter",value:m,disabled:g(c)===!1,onChange:r=>{var o;h(r.target.value),(o=n==null?void 0:n.getColumn(c))==null||o.setFilterValue(r.target.value)}}),e.jsx("button",{type:"button",onClick:()=>n==null?void 0:n.resetColumnFilters(!0),children:"Clear"})]}),e.jsx("div",{style:{height:`calc(100% - ${C}px)`},children:e.jsx(p,{ref:u,rows:t,...l})})]})};export{H as M,E as O,V as S,O as _};
