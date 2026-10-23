import{A as X,B as ee,h as g,l as s,y as b,ae as w,ay as te,O as y,cz as ne,u as A,w as D,j as h,Y as oe,a7 as re,c0 as ae,by as se,c1 as ie,cA as le,c2 as ue,c3 as ce,_ as ge,c4 as de,c5 as he,a0 as we,bt as pe,bB as fe,a3 as me,a1 as Se,ba as be,bE as ye,bD as Ce,bb as ve,bc as Fe,bu as Re,bi as ke,a6 as Me,bf as Ge,bg as xe,bv as je,bj as qe,r as f,b8 as Ee,Z as Te,S as H}from"./products-CTiDOXRn.js";const E=2e3,M=8,N=2,$e=700,Oe=(e,t)=>e.country!=="Kazakhstan"&&t%13===3?"excluded":e.team!=="Data"&&!(e.country==="Kazakhstan"&&e.team==="Payments")&&(t%11===1||e.country==="Germany"&&t%3===0)?"blocked":"ok",B=X(E).map((e,t)=>({...e,state:Oe(e,t),name:ee(t)})),G=(e,t)=>e[t],Ae=(e,t)=>t.every(({id:n,value:r})=>String(G(e,n)).toLowerCase().includes(String(r).toLowerCase())),Ne=(e,t,n)=>{for(const{id:r,desc:o}of n){const a=G(e,r),i=G(t,r),l=typeof a=="number"&&typeof i=="number"?a-i:String(a).localeCompare(String(i));if(l!==0)return o?-l:l}return 0},Be=(e,t,n,r)=>({...n[0],id:e,name:"",[t]:G(n[0],t),rate:n.reduce((o,a)=>o+a.rate,0),count:n.length,children:r}),K=(e,t,n,r,o=[])=>{var c;const[a,...i]=t;if(!a)return e.slice(0,((c=r.groupRows)==null?void 0:c[o.join(">")])??N);const l=new Map;return e.forEach(d=>{const p=String(G(d,a));l.set(p,[...l.get(p)??[],d])}),[...l.entries()].map(([d,p])=>Be(`${n}${a}:${d}`,a,p,K(p,i,`${n}${a}:${d}>`,r,[...o,d])))},v=e=>{const{sorting:t,filters:n,grouping:r}=e,o=B.filter(a=>Ae(a,n)).sort((a,i)=>Ne(a,i,t));return{rowCount:o.length,offset:0,rows:r.length?K(o,r,"",e):o.slice(0,M)}},Pe=e=>new Promise(t=>{setTimeout(()=>t(v(e)),$e)}),P=e=>e?B.filter(t=>t.state===e):B,ze=e=>[...new Set(P(e).map(t=>t.country))],Le=(e,t)=>[...new Set(P(t).filter(n=>n.country===e).map(n=>n.team))],J=(e,t,n)=>P(n).filter(r=>r.country===e&&r.team===t),_e=(e,t)=>{const[n,r]=e;if(r!==void 0){const l=J(n,r,t).length;return{nodes:0,leaves:l,allNodes:0,allLeaves:l}}const o=n===void 0?ze(t):[n],a=o.flatMap(l=>Le(l,t).map(c=>[l,c])),i=a.reduce((l,[c,d])=>l+J(c,d,t).length,0);return{nodes:n===void 0?o.length:a.length,leaves:0,allNodes:n===void 0?o.length+a.length:a.length,allLeaves:i}},Ze=(e,t,n)=>{const r=_e(e,n);return t==="none"?{hasChildren:!0}:t==="leaves only"?{leafCount:r.allLeaves}:{childNodeCount:r.nodes,childLeafCount:r.leaves,nodeCount:r.allNodes,leafCount:r.allLeaves}},z=e=>e.querySelector("[data-server-requests]"),x=e=>Number(z(e).dataset.serverRequests),u=e=>JSON.parse(z(e).dataset.serverQuery),W=e=>{var t;return((t=z(e).querySelector("[role=table], [role=grid]"))==null?void 0:t.getAttribute("aria-busy"))==="true"},q=e=>!!e.querySelector("[data-loading-bar]"),C=(e,t)=>{var n;return((n=e.querySelector(`[data-chip="${t}"]`))==null?void 0:n.textContent)??""},L=async(e,t,n)=>{await g(()=>W(e),`the table says it waits for the server (${n})`),s(q(e),"a bar shows that the data is on its way"),s(w(e).join()===t.join(),`the table kept its rows while it waits, it did not ${n} them itself`)},T=e=>g(()=>!W(e)&&!q(e),"the answer came"),$=e=>v(e).rows.flatMap(t=>t.children??[t]).map(t=>t.id),_=async e=>{await y(e),s(x(e)===0,"the server was not asked yet"),s(C(e,"rows")===`${M} of ${E} rows`,`the status bar counts the server's rows: ${C(e,"rows")}`)},Qe=async e=>{await _(e);const t=w(e);await te(e,"Name","Sort A–Z"),s(u(e).sorting.length===1&&u(e).sorting[0].id==="name","the click wrote the sorting state"),await L(e,t,"sort"),s(!e.querySelector("[data-skeleton]"),"a table that has rows keeps them: no skeleton"),await T(e),s(x(e)===1,`one request, not ${x(e)}`),await g(()=>w(e).join()===$(u(e)).join(),"the rows are in the server’s order"),s(w(e).join()!==t.join(),"the server’s order is not the one the table had")},Xe=async e=>{var a;await _(e);const t=w(e);await ne(e,"team","Team"),s(u(e).grouping.join()==="team","the menu wrote the grouping state"),await L(e,t,"group"),await T(e),await g(()=>e.querySelectorAll("[data-group-id]").length>0,"the groups the server built are drawn as lanes");const n=v(u(e)),r=n.rows[0],o=e.querySelector("[data-group-id] [data-group-count]");s((o==null?void 0:o.textContent)===String(r.count),`a group says how many rows the server has in it (${r.count}), not the ${(a=r.children)==null?void 0:a.length} it sent: ${o==null?void 0:o.textContent}`),s(C(e,"rows")===`${n.rows.reduce((i,l)=>{var c;return i+(((c=l.children)==null?void 0:c.length)??0)},0)} of ${E} rows`,`the count of the rows is the server's: ${C(e,"rows")}`)},et=async e=>{await _(e);const t=w(e);await A.type(D(e).getByRole("textbox",{name:"Country contains"}),"pol"),s(JSON.stringify(u(e).filters)===JSON.stringify([{id:"country",value:"pol"}]),`the screen's field wrote the filter: ${JSON.stringify(u(e).filters)}`),await L(e,t,"filter"),await T(e);const n=v(u(e)).rowCount;s(n>M&&n<E,`the server found ${n} rows`),await g(()=>C(e,"rows")===`${M} of ${n} rows`,`the table counts the rows the server found: ${C(e,"rows")} for ${n}`),s(w(e).join()===$(u(e)).join(),"the rows are the server’s"),await A.click(D(e).getByRole("checkbox",{name:/Select all rows|Deselect all/})),await g(()=>{var r,o;return(o=(r=e.querySelector("[data-bulk-bar]"))==null?void 0:r.textContent)==null?void 0:o.includes(`${M} of ${n} selected`)},"the bulk bar counts the server’s rows: select all takes the rows that came, out of the rows there are")},tt=async e=>{const t=e.canvasElement;await b(e,{initialGrouping:"by Country, then Team"}),await y(t),s(u(t).grouping.join()==="country,team",`the request starts grouped: ${u(t).grouping}`),s(x(t)===0,"the start is not a question to the server"),await g(()=>t.querySelectorAll("[data-group-id]").length>0,"the groups of the chosen grouping are drawn"),await b(e,{initialGrouping:"none"}),await y(t),await g(()=>t.querySelectorAll("[data-group-id]").length===0,"none: no groups")},nt=async e=>{var n;const t=e.canvasElement;await b(e,{initialSorting:"by Team"}),await y(t),s(((n=u(t).sorting[0])==null?void 0:n.id)==="team",`the request starts sorted: ${JSON.stringify(u(t).sorting)}`),await g(()=>w(t).join()===$(u(t)).join(),"the rows are the server’s for that sorting")},ot=async e=>{var n;const t=e.canvasElement;await b(e,{initialFilters:"Poland"}),await y(t),s(((n=u(t).filters[0])==null?void 0:n.id)==="country",`the request starts filtered: ${JSON.stringify(u(t).filters)}`),await g(()=>w(t).join()===$(u(t)).join(),"the rows are the server’s for that filter")},rt=async e=>{await y(e);const t=()=>{var n;return((n=e.querySelector('[data-node-more-of="leaves"]'))==null?void 0:n.textContent)??""};s(t().includes("498 left"),`2 of 500 here: ${t()}`),await A.click(e.querySelector("[data-node-show-more]")),await T(e),await g(()=>t().includes("496 left"),"the next two rows came"),s(x(e)===1,"one question to the server")},at=async e=>{var o,a;const t=e.canvasElement,n=()=>t.querySelector("[role=table], [role=grid]");await g(()=>t.querySelectorAll("[data-skeleton-row]").length===8,"eight skeleton rows by default"),s(n().getAttribute("aria-busy")==="true","the table is busy"),s(q(t),"the bar is on top"),s(((o=t.querySelector("[data-skeleton]"))==null?void 0:o.getAttribute("aria-hidden"))==="true","the skeleton is hidden from assistive technology");const r=t.querySelector("[data-skeleton-cell]");s(getComputedStyle(r).animationName!=="none","the bars have a wave"),s(t.querySelectorAll("[data-skeleton-row]:first-child [data-skeleton-cell]").length>=3,"a bar in each column of the table"),s(!((a=t.textContent)!=null&&a.includes("No data")),"no empty text while it waits"),await b(e,{answer:"came"}),await g(()=>!t.querySelector("[data-skeleton]")&&w(t).length>0,"the rows came: the skeleton is gone"),s(!q(t),"no bar when the answer is here"),await b(e,{answer:"waiting",skeleton:"off"}),await g(()=>{var i;return!t.querySelector("[data-skeleton]")&&!!((i=t.textContent)!=null&&i.includes("No data"))},"loadingRows false: no skeleton, the empty text stands"),await b(e,{skeleton:"rows"}),await g(()=>t.querySelectorAll("[data-skeleton-row]").length===8,"the skeleton is back")},Ve=`import { useState } from 'react'

import {
	TableCore,
	TableStatusBar,
	TableToolbar,
	columnFilteringFeature,
	columnGroupingFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	createColumnHelper,
	createExpandedRowModel,
	createFilteredRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	createUtilityColumn,
	defaultColumnMenu,
	filterFn_includesString,
	groupRowsFeature,
	groupingChip,
	groupingControl,
	metaHelper,
	rowCountChip,
	rowExpandingFeature,
	rowPaginationFeature,
	rowSelectionFeature,
	rowSortingFeature,
	sortingChip,
	sortingControl,
	tableFeatures,
	withGroupingVariants,
	TableBulkBar,
	type ColumnDef,
	type ColumnFiltersState,
	type CoreColumnMeta,
	type GroupingColumnMeta,
	type GroupingState,
	type OnChangeFn,
	type SortIconsColumnMeta,
	type SortingColumnMeta,
	type SortingState,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { ServerRow } from '../../data/server'
import { sceneSortFns } from '../../kit/sort-fns'

// A table whose rows a server processes. The features are the usual ones, the
// state is the screen's (it is the request), and \`manualSorting\`,
// \`manualFiltering\`, \`manualGrouping\`, \`manualExpanding\` and \`manualPagination\` say that the rows
// come already sorted, filtered, grouped and paged: the table does none of that
// itself, it draws what it was given and says it is waiting while the answer is
// on its way. \`rowCount\` is how many rows there are, not how many came, and \`firstRowNumber\` is the number of the first row of the page (with groups the table cannot know it: the types ask for it); a group the server
// built is a row with \`children\` (\`getSubRows\`) and its own \`count\`.
const features = tableFeatures({
	rowSortingFeature,
	columnFilteringFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	rowPaginationFeature,
	rowSelectionFeature,
	groupRowsFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	// The client's row models are registered like on any table: what stops them is \`manual*\` below.
	sortedRowModel: createSortedRowModel(),
	filteredRowModel: createFilteredRowModel(),
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortFns: sceneSortFns,
	filterFns: { includesString: filterFn_includesString },
	columnMeta: metaHelper<
		CoreColumnMeta &
			SortingColumnMeta &
			SortIconsColumnMeta &
			GroupingColumnMeta
	>(),
})

const helper = createColumnHelper<typeof features, ServerRow>()

const columns: ColumnDef<typeof features, ServerRow, unknown>[] =
	helper.columns([
		createUtilityColumn(helper),
		helper.accessor('name', {
			header: 'Name',
			size: 120,
			filterFn: 'includesString',
		}),
		helper.accessor('team', {
			header: 'Team',
			size: 90,
			filterFn: 'includesString',
		}),
		helper.accessor('role', {
			header: 'Role',
			size: 100,
			filterFn: 'includesString',
		}),
		helper.accessor('country', {
			header: 'Country',
			size: 90,
			filterFn: 'includesString',
		}),
		helper.accessor('rate', {
			header: 'Rate',
			size: 70,
			meta: { align: 'right' },
			enableColumnFilter: false,
		}),
	])

const toolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar
		table={table}
		controls={[groupingControl(), sortingControl()]}
	/>
)
const statusBarRegion: TableCoreUiProps['statusBar'] = (table) => (
	<TableStatusBar
		table={table}
		chips={[rowCountChip(), sortingChip(), groupingChip()]}
	/>
)
const bulkBarRegion: TableCoreUiProps['bulkBar'] = (table) => (
	<TableBulkBar table={table} getActions={() => []} />
)

/** What the server says of each group, by its path (the values of the grouping down to it): a group's id is \`column:value>column:value\`. The rows of a group that holds people are counted (\`childLeafCount\`) so Show more can say how many are left. */
type Counts = { leafCount: number; childLeafCount?: number }

const countsOf = (rows: ServerRow[]): Record<string, Counts> =>
	Object.assign(
		{},
		...rows.flatMap((row) =>
			row.count === undefined
				? []
				: [
						{
							[row.id
								.split('>')
								.map((step) => step.slice(step.indexOf(':') + 1))
								.join('>')]: {
								leafCount: row.count,
								childLeafCount: row.children?.[0]?.children
									? undefined
									: row.count,
							},
						},
						countsOf(row.children ?? []),
				  ]
		)
	)

/** The request the screen keeps: the state of the table, and where it starts. The server answers it. */
export const useServerState = ({
	initialSorting = [],
	initialFilters = [],
	initialGrouping = [],
}: {
	initialSorting?: SortingState
	initialFilters?: ColumnFiltersState
	initialGrouping?: GroupingState
} = {}) => {
	const [sorting, setSorting] = useState<SortingState>(initialSorting)
	const [filters, setFilters] = useState<ColumnFiltersState>(initialFilters)
	const [grouping, setGrouping] = useState<GroupingState>(initialGrouping)

	return { sorting, setSorting, filters, setFilters, grouping, setGrouping }
}

export type ServerTableProps = {
	/** What the server sent last. */
	rows: ServerRow[]
	/** The rows there are after the filters. */
	rowCount: number
	/** The number of the first row of the page: the server says how many rows stand before it. */
	firstRowNumber: number
	/** An answer is on its way. */
	loading: boolean
	/** Skeleton rows while the first answer is on its way (the table's \`loadingRows\`). */
	loadingRows?: number | false
	sorting: SortingState
	onSortingChange: OnChangeFn<SortingState>
	filters: ColumnFiltersState
	onFiltersChange: OnChangeFn<ColumnFiltersState>
	grouping: GroupingState
	onGroupingChange: OnChangeFn<GroupingState>
	/** Show more in a group that sent a few of its rows. Not given, a group is shown as it came. */
	onGroupMore?: (path: readonly string[]) => void
}

export const ServerTable = ({
	rows,
	rowCount,
	firstRowNumber,
	loading,
	loadingRows,
	sorting,
	onSortingChange,
	filters,
	onFiltersChange,
	grouping,
	onGroupingChange,
	onGroupMore,
}: ServerTableProps) => (
	<TableCore
		features={features}
		data={rows}
		columns={withGroupingVariants(columns)}
		getRowId={(row) => row.id}
		getSubRows={(row) => row.children}
		// Each group says how many rows the server has in it, not how many it sent.
		groupData={(path) => {
			const sent = countsOf(rows)[path.join('>')]

			return onGroupMore ? sent : sent && { leafCount: sent.leafCount }
		}}
		onGroupMore={onGroupMore}
		manualSorting
		manualFiltering
		manualGrouping
		manualExpanding
		manualPagination
		rowCount={rowCount}
		firstRowNumber={firstRowNumber}
		loading={loading}
		loadingRows={loadingRows}
		state={{ sorting, columnFilters: filters, grouping }}
		onSortingChange={onSortingChange}
		onColumnFiltersChange={onFiltersChange}
		onGroupingChange={onGroupingChange}
		initialState={{ expanded: true }}
		autoResetExpanded={false}
		columnMenu={defaultColumnMenu()}
		toolbar={toolbarRegion}
		statusBar={statusBarRegion}
		bulkBar={bulkBarRegion}
	/>
)
`,Ie=we({rowSortingFeature:ke,columnFilteringFeature:Re,columnGroupingFeature:Fe,rowExpandingFeature:ve,rowPaginationFeature:Ce,rowSelectionFeature:ye,groupRowsFeature:be,columnSizingFeature:Se,columnVisibilityFeature:me,sortedRowModel:qe(),filteredRowModel:je(),groupedRowModel:xe(),expandedRowModel:Ge(),sortFns:fe,filterFns:{includesString:pe},columnMeta:Me()}),S=Te(),De=S.columns([Ee(S),S.accessor("name",{header:"Name",size:120,filterFn:"includesString"}),S.accessor("team",{header:"Team",size:90,filterFn:"includesString"}),S.accessor("role",{header:"Role",size:100,filterFn:"includesString"}),S.accessor("country",{header:"Country",size:90,filterFn:"includesString"}),S.accessor("rate",{header:"Rate",size:70,meta:{align:"right"},enableColumnFilter:!1})]),Je=e=>h.jsx(ge,{table:e,controls:[de(),he()]}),Ue=e=>h.jsx(ie,{table:e,chips:[le(),ue(),ce()]}),He=e=>h.jsx(se,{table:e,getActions:()=>[]}),Y=e=>Object.assign({},...e.flatMap(t=>{var n,r;return t.count===void 0?[]:[{[t.id.split(">").map(o=>o.slice(o.indexOf(":")+1)).join(">")]:{leafCount:t.count,childLeafCount:(r=(n=t.children)==null?void 0:n[0])!=null&&r.children?void 0:t.count}},Y(t.children??[])]})),Ke=({initialSorting:e=[],initialFilters:t=[],initialGrouping:n=[]}={})=>{const[r,o]=f.useState(e),[a,i]=f.useState(t),[l,c]=f.useState(n);return{sorting:r,setSorting:o,filters:a,setFilters:i,grouping:l,setGrouping:c}},Z=({rows:e,rowCount:t,firstRowNumber:n,loading:r,loadingRows:o,sorting:a,onSortingChange:i,filters:l,onFiltersChange:c,grouping:d,onGroupingChange:p,onGroupMore:j})=>h.jsx(oe,{features:Ie,data:e,columns:ae(De),getRowId:m=>m.id,getSubRows:m=>m.children,groupData:m=>{const F=Y(e)[m.join(">")];return j?F:F&&{leafCount:F.leafCount}},onGroupMore:j,manualSorting:!0,manualFiltering:!0,manualGrouping:!0,manualExpanding:!0,manualPagination:!0,rowCount:t,firstRowNumber:n,loading:r,loadingRows:o,state:{sorting:a,columnFilters:l,grouping:d},onSortingChange:i,onColumnFiltersChange:c,onGroupingChange:p,initialState:{expanded:!0},autoResetExpanded:!1,columnMenu:re(),toolbar:Je,statusBar:Ue,bulkBar:He}),[st]=Object.values([Ve]),We=e=>{const{sorting:t,setSorting:n,filters:r,setFilters:o,grouping:a,setGrouping:i}=Ke(e),[l,c]=f.useState(()=>v({sorting:t,filters:r,grouping:a})),[d,p]=f.useState({}),[j,m]=f.useState(!1),[F,Q]=f.useState(0),V=f.useRef(JSON.stringify({sorting:t,filters:r,grouping:a,groupRows:{}}));return f.useEffect(()=>{const R={sorting:t,filters:r,grouping:a,groupRows:d},k=JSON.stringify(R);if(k===V.current)return;V.current=k;let I=!0;return m(!0),Q(O=>O+1),Pe(R).then(O=>{I&&(c(O),m(!1))}),()=>{I=!1}},[t,r,a,d]),{answer:l,loading:j,requests:F,sorting:t,setSorting:n,filters:r,setFilters:o,grouping:a,setGrouping:i,showMore:R=>p(k=>({...k,[R.join(">")]:(k[R.join(">")]??N)+N}))}},U=36,it=({hint:e,countryField:t=!1,showMore:n=!1,...r})=>{var a;const o=We(r);return h.jsxs(H,{hint:e,children:[t&&h.jsx("div",{style:{display:"flex",alignItems:"center",height:U},children:h.jsx("input",{"aria-label":"Country contains",placeholder:"Country contains…",value:String(((a=o.filters.find(i=>i.id==="country"))==null?void 0:a.value)??""),onChange:i=>o.setFilters(i.target.value?[{id:"country",value:i.target.value}]:[])})}),h.jsx("div",{"data-server-requests":o.requests,"data-server-query":JSON.stringify({sorting:o.sorting,filters:o.filters,grouping:o.grouping}),style:{height:t?`calc(100% - ${U}px)`:"100%"},children:h.jsx(Z,{rows:o.answer.rows,rowCount:o.answer.rowCount,firstRowNumber:o.answer.offset+1,loading:o.loading,sorting:o.sorting,onSortingChange:o.setSorting,filters:o.filters,onFiltersChange:o.setFilters,grouping:o.grouping,onGroupingChange:o.setGrouping,onGroupMore:n?o.showMore:void 0})})]})},lt=({hint:e,answer:t,skeleton:n})=>{const r=v({sorting:[],filters:[],grouping:[]});return h.jsx(H,{hint:e,children:h.jsx(Z,{rows:t==="came"?r.rows:[],rowCount:t==="came"?r.rowCount:0,firstRowNumber:1,loading:t==="waiting",loadingRows:n==="off"?!1:void 0,sorting:[],onSortingChange:()=>{},filters:[],onFiltersChange:()=>{},grouping:[],onGroupingChange:()=>{}})})};export{lt as F,it as S,ot as a,st as b,Qe as c,nt as d,_e as e,at as f,ze as g,Ze as h,Xe as i,tt as j,rt as k,J as p,et as s,Le as t};
