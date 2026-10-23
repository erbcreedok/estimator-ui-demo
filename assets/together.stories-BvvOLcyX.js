import{j as a,Y as T,bw as P,a0 as N,bA as O,dA as q,bF as W,ba as _,bG as $,bb as A,bc as H,bf as G,bg as j,Z as z,r as u,S as I,M as K,F as B,aZ as Y,bB as J,a1 as Q,a4 as X,b3 as ee,a_ as te,b4 as ne,b5 as ae,bi as oe,a6 as E,bj as re,c as U,bq as se,f as ie}from"./products-CTiDOXRn.js";import{u as F,l as le,U as V,p as ue,a as ce,s as R,P as de,e as pe,w as he}from"./checks-R4e5umqc.js";import"./delivery-C8x7O8Im.js";const ge=`import {
	TableCore,
	aggregationFn_count,
	aggregationFn_mean,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	rowAggregationFeature,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
	type GroupData,
} from '@pnl-simulation/table-core'

import type { EstimatePosition } from '../../data/estimates'

// The Resource Plan's tree of estimates: positions are flat rows, the path says
// which unit each stands in; a unit is a node.
const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	rowAggregationFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	aggregationFns: { count: aggregationFn_count, mean: aggregationFn_mean },
})

const helper = createColumnHelper<typeof features, EstimatePosition>()
const columns = [
	...hierarchyColumns<EstimatePosition>({
		unit: { levels: 4, path: (position) => position.path },
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name' }),
		helper.accessor('role', { header: 'Role' }),
		// Positions: how many positions are under a node; nothing on a position.
		helper.accessor(() => 1, {
			id: 'positions',
			header: 'Positions',
			aggregationFn: 'count',
			cell: () => '',
		}),
		// Rate and workload of a node are the average of the positions under it.
		helper.accessor('rate', {
			header: 'Rate',
			aggregationFn: 'mean',
			cell: (info) => \`$\${info.getValue()}\`,
			aggregatedCell: (info) => \`$\${Math.round(Number(info.getValue()))}\`,
		}),
		helper.accessor('workload', {
			header: 'Workload',
			aggregationFn: 'mean',
			aggregatedCell: (info) => Math.round(Number(info.getValue())),
		}),
	]),
]

type Props = {
	/** The positions that are here: the screen loads the rest when a unit opens. */
	positions: EstimatePosition[]
	/** The units the screen knows of, loaded or not. */
	units: readonly (readonly string[])[]
	/** What the screen knows of a unit: its name, the totals and status. */
	nodeOf: (path: readonly string[]) => GroupData | undefined
	/** A unit was opened (or Retry): load its positions. */
	onOpen: (path: readonly string[]) => void
}

export const EstimatesTable = ({ positions, units, nodeOf, onOpen }: Props) => (
	<TableCore
		features={features}
		data={positions}
		columns={columns}
		getRowId={(position) => position.id}
		rowHeight={36}
		autoResetExpanded={false}
		groupPaths={() => units}
		groupData={nodeOf}
		onGroupOpen={onOpen}
		initialState={{
			grouping: ['unit-level1', 'unit-level2', 'unit-level3', 'unit-level4'],
			// Closed: a unit opens by its place in the tree, before its people are here and after.
			expanded: {},
		}}
	/>
)
`,me=`import {
	TableCore,
	aggregationFn_mean,
	cellEditingFeature,
	cellKeyboardEditingFeature,
	cellKeyboardFeature,
	cellSelectionFeature,
	columnGroupingFeature,
	columnPinningFeature,
	columnSizingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	metaHelper,
	rowAggregationFeature,
	rowExpandingFeature,
	rowHierarchyFeature,
	rowSortingFeature,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type GroupingColumnMeta,
	editOn,
} from '@pnl-simulation/table-core'

import { UNITS, type EstimatePosition } from '../../data/estimates'
import { Editor } from '../editing/editor'
import { sceneSortFns } from '../../kit/sort-fns'

// A hierarchy is v9's grouping, so it works with the rest of the table as it
// is: a double click edits a rate, the arrows move the active cell, a header click
// sorts the rows inside each unit, and Name stays at the left while the table
// scrolls sideways.
const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	rowAggregationFeature,
	rowSortingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	cellSelectionFeature,
	cellKeyboardFeature,
	cellEditingFeature,
	cellKeyboardEditingFeature,
	columnPinningFeature,
	columnSizingFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CellEditingColumnMeta & GroupingColumnMeta>(),
	aggregationFns: { mean: aggregationFn_mean },
})

const helper = createColumnHelper<typeof features, EstimatePosition>()
const columns = [
	...hierarchyColumns<EstimatePosition>({
		unit: { levels: 4, path: (position) => position.path },
	}),
	...helper.columns([
		helper.accessor('name', { header: 'Name', size: 260 }),
		helper.accessor('role', { header: 'Role', size: 320 }),
		helper.accessor('rate', {
			header: 'Rate',
			size: 320,
			aggregationFn: 'mean',
			aggregatedCell: (info) => \`$\${Math.round(Number(info.getValue()))}\`,
			meta: { editable: true, typeToEdit: true },
			cell: (info) => (
				<Editor {...info} display={(rate) => \`$\${Math.round(Number(rate))}\`} />
			),
		}),
		helper.accessor('workload', { header: 'Workload', size: 400 }),
	]),
]

type Props = {
	positions: EstimatePosition[]
	onEdit: (rowId: string, columnId: string, value: unknown) => void
}

export const WorksWithTable = ({ positions, onEdit }: Props) => (
	<TableCore
		startEditing={editOn.doubleClick}
		features={features}
		data={positions}
		columns={columns}
		getRowId={(position) => position.id}
		autoResetExpanded={false}
		// Units with no positions at all are units too.
		groupPaths={() => UNITS.map((unit) => unit.path)}
		initialState={{
			grouping: ['unit-level1', 'unit-level2', 'unit-level3', 'unit-level4'],
			expanded: true,
			columnPinning: { start: ['name'], end: [] },
		}}
		rowHeight={36}
		meta={{ onEdit }}
	/>
)
`,we=N({columnGroupingFeature:H,rowExpandingFeature:A,rowAggregationFeature:$,groupRowsFeature:_,rowHierarchyFeature:W,groupedRowModel:j(),expandedRowModel:G(),aggregationFns:{count:q,mean:O}}),l=z(),fe=[...P({unit:{levels:4,path:e=>e.path}}),...l.columns([l.accessor("name",{header:"Name"}),l.accessor("role",{header:"Role"}),l.accessor(()=>1,{id:"positions",header:"Positions",aggregationFn:"count",cell:()=>""}),l.accessor("rate",{header:"Rate",aggregationFn:"mean",cell:e=>`$${e.getValue()}`,aggregatedCell:e=>`$${Math.round(Number(e.getValue()))}`}),l.accessor("workload",{header:"Workload",aggregationFn:"mean",aggregatedCell:e=>Math.round(Number(e.getValue()))})])],be=({positions:e,units:r,nodeOf:s,onOpen:c})=>a.jsx(T,{features:we,data:e,columns:fe,getRowId:d=>d.id,rowHeight:36,autoResetExpanded:!1,groupPaths:()=>r,groupData:s,onGroupOpen:c,initialState:{grouping:["unit-level1","unit-level2","unit-level3","unit-level4"],expanded:{}}}),Fe="Northwind>Europe",ye=()=>{const[e,r]=u.useState([]),[s,c]=u.useState([["Northwind"]]),[d,g]=u.useState([]),[b,i]=u.useState({}),y=u.useRef(new Set),D=async o=>{const n=F(o);i(t=>({...t,[n]:"loading"}));const p=await le(o);if(n===Fe&&!y.current.has(n)){y.current.add(n),i(t=>({...t,[n]:{error:"The server did not answer"}}));return}r(t=>[...t,...p.positions]),c(t=>[...t,...p.units.map(m=>m.path)]),g(t=>[...t,n]),i(t=>({...t,[n]:"idle"}))},L=o=>{var m;const n=F(o),p=V.find(Z=>F(Z.path)===n);if(!p)return;const t=ue(o).length>0||ce(o).length>0;return{name:`${o[o.length-1]} · ${p.status}`,totals:R(o),leafCount:(m=R(o))==null?void 0:m.positions,hasChildren:t&&!d.includes(n),status:b[n]??"idle"}};return a.jsx(I,{fit:"scroll",hint:a.jsx(K,{text:"Open **Northwind**, then its units: each loads when it opens (**Europe** fails once, press **Retry**). A unit shows its name and status and what the server says it adds up to, before its people come; **NA** has no totals yet: **—**."}),children:a.jsx(be,{positions:e,units:s,nodeOf:L,onOpen:D})})},Ee=N({columnGroupingFeature:H,rowExpandingFeature:A,rowAggregationFeature:$,rowSortingFeature:oe,groupRowsFeature:_,rowHierarchyFeature:W,cellSelectionFeature:ae,cellKeyboardFeature:ne,cellEditingFeature:te,cellKeyboardEditingFeature:ee,columnPinningFeature:X,columnSizingFeature:Q,groupedRowModel:j(),expandedRowModel:G(),sortedRowModel:re(),sortFns:J,tableMeta:E(),columnMeta:E(),aggregationFns:{mean:O}}),h=z(),Re=[...P({unit:{levels:4,path:e=>e.path}}),...h.columns([h.accessor("name",{header:"Name",size:260}),h.accessor("role",{header:"Role",size:320}),h.accessor("rate",{header:"Rate",size:320,aggregationFn:"mean",aggregatedCell:e=>`$${Math.round(Number(e.getValue()))}`,meta:{editable:!0,typeToEdit:!0},cell:e=>a.jsx(Y,{...e,display:r=>`$${Math.round(Number(r))}`})}),h.accessor("workload",{header:"Workload",size:400})])],ve=({positions:e,onEdit:r})=>a.jsx(T,{startEditing:B.doubleClick,features:Ee,data:e,columns:Re,getRowId:s=>s.id,autoResetExpanded:!1,groupPaths:()=>V.map(s=>s.path),initialState:{grouping:["unit-level1","unit-level2","unit-level3","unit-level4"],expanded:!0,columnPinning:{start:["name"],end:[]}},rowHeight:36,meta:{onEdit:r}}),ke=()=>{const[e,r]=u.useState(de);return a.jsx(I,{fit:"scroll",hint:a.jsx(K,{text:"Click a **Rate**: it opens for editing, and the totals of the units above it follow. Click a cell and use the arrows. Click a header: the rows sort inside each unit. Scroll sideways: **Name** stays at the left."}),children:a.jsx(ve,{positions:e,onEdit:(s,c,d)=>{const g=Number(d);if(c!=="rate"||Number.isNaN(g))throw new Error("A rate is a number");r(b=>b.map(i=>i.id===s?{...i,rate:g}:i))}})})},[xe]=Object.values([ge]),[Me]=Object.values([me]),Pe={title:"Tables/Table Core/Features/Hierarchy/Together",id:"tables-table-core-features-hierarchy-together",...ie(xe)},w={tags:["kb:estimates-tree"],name:"Estimates tree",parameters:{summary:"The Resource Plan’s tree of estimates as a hierarchy: units with their names, the server’s totals before their people come, the units above kept at the top, the people of a unit loaded when it opens."},render:()=>a.jsx(ye,{}),play:async e=>{U(e)||await pe(e.canvasElement)}},f={tags:["kb:estimates-tree-works-with"],name:"Works with editing, selection, sorting and frozen columns",parameters:{...se(Me),summary:"A hierarchy is v9’s grouping: a double click edits a rate and the totals follow, the arrows move the active cell, a sort orders the rows inside each unit, a frozen column stays while the table scrolls."},render:()=>a.jsx(ke,{}),play:async e=>{U(e)||await he(e.canvasElement)}};var v,k,x;w.parameters={...w.parameters,docs:{...(v=w.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['kb:estimates-tree'],
  name: 'Estimates tree',
  parameters: {
    summary: 'The Resource Plan’s tree of estimates as a hierarchy: units with their names, the server’s totals before their people come, the units above kept at the top, the people of a unit loaded when it opens.'
  },
  render: () => <EstimatesScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await estimatesAct(ctx.canvasElement);
  }
}`,...(x=(k=w.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var M,S,C;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['kb:estimates-tree-works-with'],
  name: 'Works with editing, selection, sorting and frozen columns',
  parameters: {
    ...sceneCodeOf(worksWithSource),
    summary: 'A hierarchy is v9’s grouping: a double click edits a rate and the totals follow, the arrows move the active cell, a sort orders the rows inside each unit, a frozen column stays while the table scrolls.'
  },
  render: () => <WorksWithScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await worksWithAct(ctx.canvasElement);
  }
}`,...(C=(S=f.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const Ne=["EstimatesTree","WorksWithTheTable"];export{w as EstimatesTree,f as WorksWithTheTable,Ne as __namedExportsOrder,Pe as default};
