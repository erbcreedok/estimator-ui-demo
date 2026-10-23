import{j as t,Y as x,a7 as w,by as f,b8 as S,a0 as C,bB as E,a1 as F,b4 as M,b5 as R,bi as y,bE as k,bb as T,a6 as v,bj as j,bf as B,Z as O,S as h,r as z,M as H}from"./products-CTiDOXRn.js";import{m as _}from"./rows-l3LcChQt.js";const P=`import {
	TableBulkBar,
	TableCore,
	cellSelectionFeature,
	cellKeyboardFeature,
	columnSizingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createSortedRowModel,
	createUtilityColumn,
	defaultColumnMenu,
	metaHelper,
	rowExpandingFeature,
	rowSelectionFeature,
	rowSortingFeature,
	tableFeatures,
	type CoreColumnMeta,
	type ExpandedState,
	type OnChangeFn,
	type SortingColumnMeta,
	type SortingState,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import { makeOrg, type OrgRow } from '../../../data/org'
import { sceneSortFns } from '../../../kit/sort-fns'

// Tree rows are v9's \`rowExpandingFeature\`: \`getSubRows\` says the children of a
// row, the state \`expanded\` says which rows are open (\`true\`: all), the expanded
// row model puts the children of an open row under it, \`row.getCanExpand()\`,
// \`getIsExpanded()\`, \`toggleExpanded()\`. The chevron and the indent in the
// cell are ours (\`treeColumn\`, \`treePlacement\`, \`treeMirrored\`).
const features = tableFeatures({
	rowExpandingFeature,
	rowSelectionFeature,
	rowSortingFeature,
	cellSelectionFeature,
	cellKeyboardFeature,
	columnSizingFeature,
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
	columnMeta: metaHelper<CoreColumnMeta & SortingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, OrgRow>()
const columns = helper.columns([
	createUtilityColumn(helper),
	helper.accessor('name', { header: 'Name', size: 230 }),
	helper.accessor('role', { header: 'Role', size: 150 }),
	helper.accessor('team', { header: 'Team', size: 120 }),
	helper.accessor('level', { header: 'Level', size: 90 }),
	helper.accessor('rate', {
		header: 'Rate',
		size: 90,
		meta: { align: 'right' },
	}),
])

const bulkBarRegion: TableCoreUiProps['bulkBar'] = (table) => (
	<TableBulkBar
		table={table}
		getActions={(rows) => [
			{
				id: 'export',
				label: \`Export \${rows.length}\`,
				onClick: () => undefined,
			},
		]}
	/>
)

type Props = {
	/** Four levels instead of three. */
	deep?: boolean
	/** The open rows: \`true\` (all), \`{}\` (none) or a map of row ids. Left out: the table keeps its own. */
	expanded?: ExpandedState
	onExpandedChange?: OnChangeFn<ExpandedState>
	initialExpanded?: ExpandedState
	initialSorting?: SortingState
	/** The column that shows the indent and the chevron. @default the first one with content */
	treeColumn?: string
	treePlacement?: 'start' | 'end'
	treeMirrored?: boolean
	enableExpanding?: boolean
	/** The bulk bar over the bottom of the grid. */
	bulkBar?: boolean
	/** The column menu (a click on a header sorts, or opens it). */
	columnMenu?: boolean
}

export const TreeTable = ({
	deep = false,
	expanded,
	onExpandedChange,
	initialExpanded = true,
	initialSorting,
	bulkBar = false,
	columnMenu = false,
	...options
}: Props) => (
	<TableCore
		features={features}
		data={makeOrg(deep)}
		columns={columns}
		getRowId={(row) => row.id}
		getSubRows={(row) => row.reports}
		rowHeight={36}
		autoResetExpanded={false}
		initialState={{ expanded: initialExpanded, sorting: initialSorting ?? [] }}
		columnMenu={columnMenu ? defaultColumnMenu() : undefined}
		bulkBar={bulkBar ? bulkBarRegion : undefined}
		{...(expanded !== undefined && { state: { expanded }, onExpandedChange })}
		{...options}
	/>
)
`,c=4,I=(e,n,a)=>{const[o,l,r,d,u]=e.filter(($,g)=>g%c===n),i=[{...l,reports:d?[U(d,u,a)]:[]},...r?[{...r}]:[]];return{...o,reports:i}},U=(e,n,a)=>a&&n?{...e,reports:[{...n}]}:e,p=new Map,m=e=>{if(!p.has(e)){const n=_(e?5*c:4*c);p.set(e,Array.from({length:c},(a,o)=>I(n,o,e)))}return p.get(e)},A=e=>{const n=[],a=o=>{var l,r;(l=o.reports)!=null&&l.length&&n.push(o.id),(r=o.reports)==null||r.forEach(a)};return m(e).forEach(a),n},K=C({rowExpandingFeature:T,rowSelectionFeature:k,rowSortingFeature:y,cellSelectionFeature:R,cellKeyboardFeature:M,columnSizingFeature:F,expandedRowModel:B(),sortedRowModel:j(),sortFns:E,columnMeta:v()}),s=O(),L=s.columns([S(s),s.accessor("name",{header:"Name",size:230}),s.accessor("role",{header:"Role",size:150}),s.accessor("team",{header:"Team",size:120}),s.accessor("level",{header:"Level",size:90}),s.accessor("rate",{header:"Rate",size:90,meta:{align:"right"}})]),N=e=>t.jsx(f,{table:e,getActions:n=>[{id:"export",label:`Export ${n.length}`,onClick:()=>{}}]}),b=({deep:e=!1,expanded:n,onExpandedChange:a,initialExpanded:o=!0,initialSorting:l,bulkBar:r=!1,columnMenu:d=!1,...u})=>t.jsx(x,{features:K,data:m(e),columns:L,getRowId:i=>i.id,getSubRows:i=>i.reports,rowHeight:36,autoResetExpanded:!1,initialState:{expanded:o,sorting:l??[]},columnMenu:d?w():void 0,bulkBar:r?N:void 0,...n!==void 0&&{state:{expanded:n},onExpandedChange:a},...u}),[Z]=Object.values([P]),q=({hint:e,...n})=>t.jsx(h,{hint:e,children:t.jsx(b,{...n})}),D=()=>{const[e,n]=z.useState(!0);return t.jsxs(h,{hint:t.jsx(H,{text:"The screen owns `expanded`: its buttons set it, a click on a chevron sets it too, and both see the same state. `true` is every row open, `{}` none, or a map of the open row ids."}),children:[t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",height:36},children:[t.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open all"}),t.jsx("button",{type:"button",onClick:()=>n({}),children:"Close all"}),t.jsx("button",{type:"button",onClick:()=>n(Object.fromEntries(A(!1).map(a=>[a,!0]))),children:"Open the leads"}),t.jsx("code",{"data-expanded-state":!0,children:e===!0?"true":JSON.stringify(e).slice(0,80)})]}),t.jsx("div",{style:{height:"calc(100% - 36px)"},children:t.jsx(b,{expanded:e,onExpandedChange:n})})]})};export{D as O,q as S,Z as s};
