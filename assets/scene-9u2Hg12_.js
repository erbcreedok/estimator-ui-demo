import{j as n,Y as p,a0 as g,bC as S,a1 as f,Z as C,r as i,A as r,S as t,M as y}from"./products-CTiDOXRn.js";const R=`import {
	TableCore,
	columnResizingFeature,
	columnSizingFeature,
	createColumnHelper,
	tableFeatures,
	type ColumnSizingState,
	type OnChangeFn,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

// Column sizing is two v9 features: \`columnSizingFeature\` (the widths:
// \`size\`, \`minSize\`, \`maxSize\`, \`state.columnSizing\`) and
// \`columnResizingFeature\` (the handle in the header: \`enableResizing\`,
// \`columnResizeMode\`). The table fills a frame wider than its columns with the
// spare width (\`fill\`, \`meta.grow\`); a column the user resized keeps its width.
const features = tableFeatures({ columnSizingFeature, columnResizingFeature })

const helper = createColumnHelper<typeof features, Person>()

/** The columns of the scenes, by what a scene shows. */
export const COLUMN_SETS = {
	/** Five columns, each with a size. */
	basic: helper.columns([
		helper.accessor('name', { header: 'Name', size: 190 }),
		helper.accessor('team', { header: 'Team', size: 130 }),
		helper.accessor('role', { header: 'Role', size: 160 }),
		helper.accessor('level', { header: 'Level', size: 100 }),
		helper.accessor('country', { header: 'Country', size: 130 }),
	]),
	/** The options of a column: its limits, no handle, no growing. */
	setup: helper.columns([
		helper.accessor('name', {
			header: 'Name (min 140, max 260)',
			size: 190,
			minSize: 140,
			maxSize: 260,
		}),
		helper.accessor('team', {
			header: 'Team (no resize)',
			size: 150,
			enableResizing: false,
		}),
		helper.accessor('role', { header: 'Role', size: 160 }),
		helper.accessor('level', {
			header: 'Level (grow: false)',
			size: 120,
			meta: { grow: false },
		}),
		helper.accessor('country', { header: 'Country', size: 130 }),
	]),
	/** Three narrow columns: they stretch to the frame. */
	few: helper.columns([
		helper.accessor('name', { header: 'Name', size: 150 }),
		helper.accessor('team', { header: 'Team', size: 100 }),
		helper.accessor('country', { header: 'Country', size: 100 }),
	]),
	/** One column keeps its width, the others share the rest. */
	fixed: helper.columns([
		helper.accessor('name', { header: 'Name', size: 150 }),
		helper.accessor('team', {
			header: 'Team (fixed 120)',
			size: 120,
			meta: { grow: false },
		}),
		helper.accessor('role', { header: 'Role', size: 150 }),
		helper.accessor('country', { header: 'Country', size: 130 }),
	]),
	/** More columns than the frame holds: the table scrolls. */
	many: helper.columns(
		Array.from({ length: 10 }, (_, i) =>
			helper.accessor((person) => \`\${person.name.split(' ')[0]} \${i + 1}\`, {
				id: \`c\${i + 1}\`,
				header: \`Column \${i + 1}\`,
				size: 170,
			})
		)
	),
}
export type ColumnSet = keyof typeof COLUMN_SETS

type Props = {
	rows: Person[]
	set?: ColumnSet
	/** The widths the user set, by column id. Left out: the table keeps its own. */
	columnSizing?: ColumnSizingState
	onColumnSizingChange?: OnChangeFn<ColumnSizingState>
	/** The widths the table starts with, when it keeps its own. */
	initialColumnSizing?: ColumnSizingState
	/** \`fill\` shares the spare width, \`natural\` keeps every width. @default 'fill' */
	fill?: 'fill' | 'natural'
	/** The handle of every column. @default true */
	enableColumnResizing?: boolean
}

export const SizingTable = ({
	rows,
	set = 'basic',
	columnSizing = undefined,
	onColumnSizingChange,
	initialColumnSizing = undefined,
	fill = 'fill',
	enableColumnResizing = true,
}: Props) => (
	<TableCore
		features={features}
		data={rows}
		columns={COLUMN_SETS[set]}
		getRowId={(person) => person.id}
		fill={fill}
		enableColumnResizing={enableColumnResizing}
		columnResizeMode="onChange"
		initialState={{ columnSizing: initialColumnSizing ?? {} }}
		{...(columnSizing && { state: { columnSizing }, onColumnSizingChange })}
	/>
)
`,w=g({columnSizingFeature:f,columnResizingFeature:S}),e=C(),b={basic:e.columns([e.accessor("name",{header:"Name",size:190}),e.accessor("team",{header:"Team",size:130}),e.accessor("role",{header:"Role",size:160}),e.accessor("level",{header:"Level",size:100}),e.accessor("country",{header:"Country",size:130})]),setup:e.columns([e.accessor("name",{header:"Name (min 140, max 260)",size:190,minSize:140,maxSize:260}),e.accessor("team",{header:"Team (no resize)",size:150,enableResizing:!1}),e.accessor("role",{header:"Role",size:160}),e.accessor("level",{header:"Level (grow: false)",size:120,meta:{grow:!1}}),e.accessor("country",{header:"Country",size:130})]),few:e.columns([e.accessor("name",{header:"Name",size:150}),e.accessor("team",{header:"Team",size:100}),e.accessor("country",{header:"Country",size:100})]),fixed:e.columns([e.accessor("name",{header:"Name",size:150}),e.accessor("team",{header:"Team (fixed 120)",size:120,meta:{grow:!1}}),e.accessor("role",{header:"Role",size:150}),e.accessor("country",{header:"Country",size:130})]),many:e.columns(Array.from({length:10},(o,s)=>e.accessor(a=>`${a.name.split(" ")[0]} ${s+1}`,{id:`c${s+1}`,header:`Column ${s+1}`,size:170})))},l=({rows:o,set:s="basic",columnSizing:a=void 0,onColumnSizingChange:h,initialColumnSizing:m=void 0,fill:u="fill",enableColumnResizing:d=!0})=>n.jsx(p,{features:w,data:o,columns:b[s],getRowId:z=>z.id,fill:u,enableColumnResizing:d,columnResizeMode:"onChange",initialState:{columnSizing:m??{}},...a&&{state:{columnSizing:a},onColumnSizingChange:h}}),c=6,T=({hint:o,...s})=>{const a=i.useMemo(()=>r(c),[]);return n.jsx(t,{hint:o,children:n.jsx(l,{rows:a,...s})})},v=()=>{const o=i.useMemo(()=>r(c),[]),[s,a]=i.useState({});return n.jsxs(t,{hint:n.jsx(y,{text:"The screen owns `columnSizing`: its buttons set it, a drag on a header edge sets it too, and both see the same state."}),children:[n.jsxs("div",{style:{display:"flex",gap:8,padding:"4px 0",height:36},children:[n.jsx("button",{type:"button",onClick:()=>a({name:320}),children:"Wide Name"}),n.jsx("button",{type:"button",onClick:()=>a({}),children:"Reset"}),n.jsx("code",{"data-sizing-state":!0,children:JSON.stringify(s)})]}),n.jsx("div",{style:{height:"calc(100% - 36px)"},children:n.jsx(l,{rows:o,columnSizing:s,onColumnSizingChange:a})})]})};export{v as O,T as S,R as _};
