import{y as w,h as a,t as i,l as c,u as n,w as u,U as F,V as S,P as M,ae as T,o as A,m as G,j as s,Y as j,a7 as E,by as O,_ as z,c4 as q,b8 as I,a0 as P,bB as U,a1 as _,ba as L,bb as H,bc as N,bi as $,bE as V,a6 as W,bj as Z,bf as J,bg as Y,Z as D,r as g,S as y,p as K,M as Q}from"./products-CTiDOXRn.js";import{m as R}from"./rows-l3LcChQt.js";const se=`import {
	TableBulkBar,
	TableCore,
	TableToolbar,
	columnGroupingFeature,
	columnSizingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	createUtilityColumn,
	defaultColumnMenu,
	groupRowsFeature,
	groupingControl,
	metaHelper,
	rowExpandingFeature,
	rowSelectionFeature,
	rowSortingFeature,
	tableFeatures,
	type CoreColumnMeta,
	type GroupingState,
	type OnChangeFn,
	type RowSelectionState,
	type SortingColumnMeta,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'
import { sceneSortFns } from '../../kit/sort-fns'

import type { RowSelectionRule } from './row-presets'

// Row selection is v9's \`rowSelectionFeature\`: the state (\`rowSelection\`, row ids),
// \`row.getIsSelected()\`, \`toggleSelected()\`, \`getCanSelect()\` (\`enableRowSelection\`),
// select all. Ours is the utility column (the row's number and checkbox),
// the group checkbox and the bulk bar.
const features = tableFeatures({
	rowSelectionFeature,
	rowSortingFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	columnSizingFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
	columnMeta: metaHelper<CoreColumnMeta & SortingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, FeatureRow>()
const columns = helper.columns([
	createUtilityColumn(helper),
	helper.accessor('name', { header: 'Name', size: 190 }),
	helper.accessor('team', { header: 'Team', size: 120 }),
	helper.accessor('role', { header: 'Role', size: 150 }),
	helper.accessor('level', { header: 'Level', size: 90 }),
	helper.accessor('country', { header: 'Country', size: 120 }),
])

const toolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar table={table} controls={[groupingControl()]} />
)
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
	rows: FeatureRow[]
	/** The selected rows, \`{ p1: true }\`. Left out: the table keeps its own. */
	rowSelection?: RowSelectionState
	onRowSelectionChange?: OnChangeFn<RowSelectionState>
	initialSelection?: RowSelectionState
	/** Which rows can be selected: \`false\` for none, a function of the row, or all. */
	enableRowSelection?: RowSelectionRule
	readOnly?: boolean
	initialGrouping?: GroupingState
	enableGroupSelect?: boolean
	/** The bulk bar over the bottom of the grid. */
	bulkBar?: boolean
	/** The toolbar with the Group panel and the column menu with Sort / Group by. */
	menus?: boolean
}

export const SelectionTable = ({
	rows,
	rowSelection,
	onRowSelectionChange,
	initialSelection,
	enableRowSelection = true,
	readOnly = false,
	initialGrouping = [],
	enableGroupSelect = true,
	bulkBar = false,
	menus = false,
}: Props) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		enableRowSelection={enableRowSelection}
		readOnly={readOnly}
		enableGroupSelect={enableGroupSelect}
		autoResetExpanded={false}
		initialState={{
			rowSelection: initialSelection ?? {},
			grouping: initialGrouping,
			expanded: true,
		}}
		columnMenu={menus ? defaultColumnMenu() : undefined}
		toolbar={menus ? toolbarRegion : undefined}
		bulkBar={bulkBar ? bulkBarRegion : undefined}
		{...(rowSelection && {
			state: { rowSelection },
			onRowSelectionChange,
		})}
	/>
)
`,l=e=>Array.from(e.querySelectorAll('[role=row][data-selected="true"]')).map(t=>t.dataset.rowId),r=(e,t)=>e.querySelector(`[role=row][data-row-id="${t}"] [role=checkbox]`),h=e=>u(e).getByRole("checkbox",{name:"Select all rows"}),X=e=>{var t;return((t=e.querySelector("[data-selection-state]"))==null?void 0:t.textContent)??""},ce=async e=>{await i(e),c(l(e).join()==="p1,p3",`selected: ${l(e)}`),c(h(e).getAttribute("aria-checked")==="mixed","select all shows a dash")},ie=async e=>{await i(e),await n.click(u(e).getByRole("button",{name:"Select two"})),await a(()=>l(e).join()==="p1,p3","the button selected two"),await n.click(r(e,"p2")),await a(()=>X(e).includes("p2"),"a tick reached the screen’s state"),await n.click(u(e).getByRole("button",{name:"Clear"})),await a(()=>l(e).length===0,"Clear")},ue=async e=>{await i(e),c(!r(e,"p2"),"a row that cannot be selected has no checkbox"),c(!!r(e,"p1"),"the others have one"),await n.click(h(e)),await a(()=>!l(e).includes("p2")&&l(e).length>4,`select all takes the rows that can be: ${l(e)}`)},we=async e=>{await i(e),c(!r(e,"p1"),"no row checkbox"),c(!e.querySelector("[role=checkbox]"),"no checkbox at all: no select all")},de=async e=>{await i(e),await n.click(r(e,"p1")),await n.click(r(e,"p2")),await a(()=>l(e).join()==="p1,p2","two selected"),await F(e,"Name"),await n.click(S().getByRole("menuitem",{name:"Sort"})),await n.click(await M(()=>S().getByRole("menuitemradio",{name:"Sort Z–A"}))),await a(()=>T(e)[0]!=="p1"&&l(e).sort().join()==="p1,p2","sorted: the same rows stay selected");const t=await A(e,"Group");await n.click(u(t).getByRole("button",{name:"Group by Team"})),await a(()=>l(e).sort().join()==="p1,p2","grouped: the same rows stay selected"),await G()},pe=async e=>{await i(e),c(!!e.querySelector("[data-row-number]"),"the utility column shows the row number"),await n.click(r(e,"p1")),await a(()=>l(e).join()==="p1","a tick selects the row"),await n.click(h(e)),await a(()=>l(e).length===8,"select all"),await n.click(h(e)),await a(()=>l(e).length===0,"and clears")},he=async e=>{var t;await i(e),c(!((t=e.textContent)!=null&&t.includes("of 8 selected")),"no bar while nothing is selected"),await n.click(r(e,"p1")),await n.click(r(e,"p3")),await a(()=>{var o;return((o=e.textContent)==null?void 0:o.includes("2 of 8 selected"))??!1},"the bar counts: 2 of 8"),c(!!u(e).getByRole("button",{name:"Export 2"}),"an action of the screen’s"),await n.click(u(e).getByRole("button",{name:"Clear selection"})),await a(()=>l(e).length===0,"the cross clears the selection")},be=async e=>{await i(e);const t=()=>u(e).getAllByRole("checkbox",{name:"Select group"})[0];await n.click(t()),await a(()=>l(e).length>=2,"the group selected its rows");const o=l(e)[0];await n.click(r(e,o)),await a(()=>t().getAttribute("aria-checked")==="mixed","a part of the group shows a dash")},ge=async e=>{await i(e),c(u(e).queryAllByRole("checkbox",{name:"Select group"}).length===0,"no group checkbox"),c(!!e.querySelector("[role=row] [role=checkbox]"),"the rows have theirs")},me=async e=>{const t=e.canvasElement;await w(e,{enableRowSelection:"all"}),await a(()=>r(t,"p2"),"every row can be selected: p2 has a checkbox")},Se=async e=>{const t=e.canvasElement;await w(e,{enableRowSelection:"none"}),await i(t),c(!r(t,"p1"),"enableRowSelection off: no row has a checkbox"),await w(e,{enableRowSelection:"all"}),await a(()=>r(t,"p1"),"on again: the rows have a checkbox")},ye=async e=>{const t=e.canvasElement;await w(e,{readOnly:!1}),await a(()=>r(t,"p1"),"readOnly off: the rows have a checkbox"),await w(e,{readOnly:!0}),await a(()=>!t.querySelector("[role=checkbox]"),"readOnly on: none")},Re=async e=>{var o;const t=e.canvasElement;await w(e,{bulkBar:!1}),await i(t),await n.click(r(t,"p1")),await a(()=>l(t).length===1,"a row is selected"),c(!((o=t.textContent)!=null&&o.includes("of 8 selected")),"bulkBar off: no bar")},ke=async e=>{const t=e.canvasElement,o=()=>u(t).queryAllByRole("checkbox",{name:"Select group"}).length,p=o()>0;await w(e,{enableGroupSelect:!p}),await a(()=>o()>0==!p,"the group checkbox follows")},xe=async e=>{const t=e.canvasElement,o=()=>u(t).queryAllByRole("checkbox",{name:"Select group"}).length;await w(e,{initialGrouping:"none"}),await a(()=>o()===0,"none: no group checkbox"),await w(e,{initialGrouping:"by Team, then Level"}),await a(()=>o()>0&&!!t.querySelector("[data-group-id]"),"by Team, then Level: groups with checkboxes")},ee={all:{value:!0,code:"true"},"only not blocked":{value:e=>e.original.state!=="blocked",code:"(row) => row.original.state !== 'blocked'"},none:{value:!1,code:"false"}},fe={none:{value:[],code:"[]"},"by Team":{value:["team"],code:"['team']"},"by Team, then Level":{value:["team","level"],code:"['team', 'level']"}},te=P({rowSelectionFeature:V,rowSortingFeature:$,columnGroupingFeature:N,rowExpandingFeature:H,groupRowsFeature:L,columnSizingFeature:_,groupedRowModel:Y(),expandedRowModel:J(),sortedRowModel:Z(),sortFns:U,columnMeta:W()}),d=D(),oe=d.columns([I(d),d.accessor("name",{header:"Name",size:190}),d.accessor("team",{header:"Team",size:120}),d.accessor("role",{header:"Role",size:150}),d.accessor("level",{header:"Level",size:90}),d.accessor("country",{header:"Country",size:120})]),ae=e=>s.jsx(z,{table:e,controls:[q()]}),ne=e=>s.jsx(O,{table:e,getActions:t=>[{id:"export",label:`Export ${t.length}`,onClick:()=>{}}]}),k=({rows:e,rowSelection:t,onRowSelectionChange:o,initialSelection:p,enableRowSelection:b=!0,readOnly:x=!1,initialGrouping:f=[],enableGroupSelect:C=!0,bulkBar:v=!1,menus:m=!1})=>s.jsx(j,{features:te,data:e,columns:oe,getRowId:B=>B.id,enableRowSelection:b,readOnly:x,enableGroupSelect:C,autoResetExpanded:!1,initialState:{rowSelection:p??{},grouping:f,expanded:!0},columnMenu:m?E():void 0,toolbar:m?ae:void 0,bulkBar:v?ne:void 0,...t&&{state:{rowSelection:t},onRowSelectionChange:o}}),Ce=({hint:e,count:t=8,enableRowSelection:o,...p})=>{const b=g.useMemo(()=>R(t),[t]);return s.jsx(y,{hint:e,children:s.jsx(k,{rows:b,enableRowSelection:o===void 0?void 0:K(ee,o),...p})})},ve=()=>{const e=g.useMemo(()=>R(8),[]),[t,o]=g.useState({});return s.jsxs(y,{hint:s.jsx(Q,{text:"The screen owns `rowSelection`: its buttons set it, a tick in the table sets it too, and both see the same state — the row ids."}),children:[s.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",height:36},children:[s.jsx("button",{type:"button",onClick:()=>o({p1:!0,p3:!0}),children:"Select two"}),s.jsx("button",{type:"button",onClick:()=>o({}),children:"Clear"}),s.jsx("code",{"data-selection-state":!0,children:JSON.stringify(t)})]}),s.jsx("div",{style:{height:"calc(100% - 36px)"},children:s.jsx(k,{rows:e,rowSelection:t,onRowSelectionChange:o})})]})};export{fe as G,ve as O,ee as R,Ce as S,se as _,ce as a,ye as b,me as c,he as d,Re as e,pe as f,ke as g,Se as h,be as i,xe as j,ge as n,ie as o,we as r,de as s,ue as w};
