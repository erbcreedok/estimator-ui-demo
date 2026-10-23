import{r as x,bw as M,b8 as T,j as a,Y as v,bx as P,a7 as z,Z as H,by as C,a0 as N,bz as E,bA as k,bB as G,bC as B,a1 as _,a4 as A,bD as I,bi as j,bE as q,bF as O,ba as D,bG as U,bb as L,bc as W,bH as Y,bj as Z,bf as J,bg as K,a6 as Q,c as V,h as r,l as X,y as i,b as $,S as ee,M as ne,s as oe,f as ae}from"./products-CTiDOXRn.js";import{m as re}from"./delivery-C8x7O8Im.js";import{T as te}from"./totals-CNUlOeK6.js";const se=`import { useMemo } from 'react'

import {
	TableBulkBar,
	TableCore,
	aggregationFn_mean,
	aggregationFn_sum,
	columnGroupingFeature,
	columnPinningFeature,
	columnResizingFeature,
	columnSizingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createPaginatedRowModel,
	createSortedRowModel,
	createUtilityColumn,
	defaultColumnMenu,
	groupRowsFeature,
	hierarchyColumns,
	metaHelper,
	rowAggregationFeature,
	rowExpandingFeature,
	rowHierarchyFeature,
	rowPaginationFeature,
	rowSelectionFeature,
	rowSortingFeature,
	tableFeatures,
	type GroupingColumnMeta,
	type TableCoreUiProps,
	showTotals,
} from '@pnl-simulation/table-core'

import type { DeliveryRow } from '../../data/delivery'
import type { TotalsName } from '../../kit/totals'
import { sceneSortFns } from '../../kit/sort-fns'

// Everything a hierarchy can do, one feature after another: each is in the list
// and each option below switches one of them on or off.
const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	rowAggregationFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	rowSelectionFeature,
	rowSortingFeature,
	rowPaginationFeature,
	columnPinningFeature,
	columnSizingFeature,
	columnResizingFeature,
	columnMeta: metaHelper<GroupingColumnMeta>(),
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	paginatedRowModel: createPaginatedRowModel(),
	sortFns: sceneSortFns,
	aggregationFns: { mean: aggregationFn_mean, sum: aggregationFn_sum },
})

const helper = createColumnHelper<typeof features, DeliveryRow>()

export type PlaygroundOptions = {
	layout?: 'rows' | 'lanes'
	userGrouping?: 'none' | 'team' | 'role'
	groupIndent?: 'depth' | 'none'
	groupHeader?: 'none' | 'labels' | 'full'
	header?: 'global' | 'none'
	groupTotals?: TotalsName
	selection?: boolean
	pagination?: boolean
	pageSize?: number
	emptyNodes?: boolean
	pinnedName?: boolean
}

const bulkBar: TableCoreUiProps['bulkBar'] = (table) => (
	<TableBulkBar table={table} getActions={() => []} />
)

export const PlaygroundTable = ({
	rows,
	layout = 'rows',
	userGrouping = 'none',
	groupIndent = 'depth',
	groupHeader = 'none',
	header = 'global',
	groupTotals = 'none',
	selection = true,
	pagination = false,
	pageSize = 1,
	emptyNodes = true,
	pinnedName = false,
}: PlaygroundOptions & { rows: DeliveryRow[] }) => {
	const columns = useMemo(
		() => [
			...hierarchyColumns<DeliveryRow>({
				stream: {
					levels: 3,
					path: (row) => row.path,
					layout,
					labels: ['Organisation', 'Business unit', 'Unit'],
				},
			}),
			...(selection ? [createUtilityColumn(helper)] : []),
			...helper.columns([
				helper.accessor('name', { header: 'Name', size: 220 }),
				helper.accessor('role', {
					header: 'Role',
					size: 160,
					meta: { groupLayout: 'lanes' },
				}),
				helper.accessor('team', {
					header: 'Team',
					size: 100,
					meta: { groupLayout: 'rows' },
				}),
				helper.accessor('rate', {
					header: 'Rate',
					size: 100,
					aggregationFn: 'mean',
					sortFn: 'basic',
				}),
				helper.accessor('hours', {
					header: 'Hours',
					size: 100,
					aggregationFn: 'sum',
					sortFn: 'basic',
				}),
			]),
		],
		[layout, selection]
	)

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(row) => row.id}
			rowHeight={36}
			autoResetExpanded={false}
			autoResetPageIndex={false}
			columnMenu={defaultColumnMenu()}
			groupIndent={groupIndent}
			groupHeader={groupHeader}
			header={header}
			groupTotals={showTotals[groupTotals]}
			groupPaths={() => (emptyNodes ? [['Northwind', 'Support']] : [])}
			bulkBar={selection ? bulkBar : undefined}
			// Nothing to page when it is off.
			paginateExpandedRows={false}
			initialState={{
				grouping: [
					'stream-level1',
					'stream-level2',
					'stream-level3',
					...(userGrouping === 'none' ? [] : [userGrouping]),
				],
				expanded: true,
				pagination: { pageIndex: 0, pageSize: pagination ? pageSize : 1000 },
				columnPinning: { start: pinnedName ? ['name'] : [], end: [] },
			}}
		/>
	)
}
`,le=N({columnGroupingFeature:W,rowExpandingFeature:L,rowAggregationFeature:U,groupRowsFeature:D,rowHierarchyFeature:O,rowSelectionFeature:q,rowSortingFeature:j,rowPaginationFeature:I,columnPinningFeature:A,columnSizingFeature:_,columnResizingFeature:B,columnMeta:Q(),groupedRowModel:K(),expandedRowModel:J(),sortedRowModel:Z(),paginatedRowModel:Y(),sortFns:G,aggregationFns:{mean:k,sum:E}}),o=H(),ie=e=>a.jsx(C,{table:e,getActions:()=>[]}),ue=({rows:e,layout:n="rows",userGrouping:u="none",groupIndent:m="depth",groupHeader:h="none",header:w="global",groupTotals:y="none",selection:s=!0,pagination:b=!1,pageSize:f=1,emptyNodes:F=!0,pinnedName:S=!1})=>{const R=x.useMemo(()=>[...M({stream:{levels:3,path:l=>l.path,layout:n,labels:["Organisation","Business unit","Unit"]}}),...s?[T(o)]:[],...o.columns([o.accessor("name",{header:"Name",size:220}),o.accessor("role",{header:"Role",size:160,meta:{groupLayout:"lanes"}}),o.accessor("team",{header:"Team",size:100,meta:{groupLayout:"rows"}}),o.accessor("rate",{header:"Rate",size:100,aggregationFn:"mean",sortFn:"basic"}),o.accessor("hours",{header:"Hours",size:100,aggregationFn:"sum",sortFn:"basic"})])],[n,s]);return a.jsx(v,{features:le,data:e,columns:R,getRowId:l=>l.id,rowHeight:36,autoResetExpanded:!1,autoResetPageIndex:!1,columnMenu:z(),groupIndent:m,groupHeader:h,header:w,groupTotals:P[y],groupPaths:()=>F?[["Northwind","Support"]]:[],bulkBar:s?ie:void 0,paginateExpandedRows:!1,initialState:{grouping:["stream-level1","stream-level2","stream-level3",...u==="none"?[]:[u]],expanded:!0,pagination:{pageIndex:0,pageSize:b?f:1e3},columnPinning:{start:S?["name"]:[],end:[]}}})},[p]=Object.values([se]),pe={title:"Tables/Table Core/Features/Hierarchy/Playground",id:"tables-table-core-features-hierarchy-playground",...ae(p)},t={tags:["kb:hierarchy-playground"],name:"Playground",parameters:{...oe(p,"Playground")},args:{layout:"rows",userGrouping:"none",groupIndent:"depth",groupHeader:"none",header:"global",groupTotals:"none",selection:!0,pagination:!1,pageSize:1,emptyNodes:!0,pinnedName:!1},argTypes:{layout:{control:"radio",options:["rows","lanes"]},userGrouping:{control:"radio",options:["none","team","role"]},groupIndent:{control:"radio",options:["depth","none"]},groupHeader:{control:"radio",options:["none","labels","full"]},header:{control:"radio",options:["global","none"]},groupTotals:{control:"radio",options:te},selection:{control:"boolean"},pagination:{control:"boolean"},pageSize:{control:{type:"number",min:1,max:3}},emptyNodes:{control:"boolean"},pinnedName:{control:"boolean"}},render:e=>a.jsx($,{args:e,children:a.jsx(ee,{fit:"scroll",hint:a.jsx(ne,{text:"Everything a hierarchy does, one control for each: the view of the levels, the user's grouping inside them, the indent of the rows, the headers of the groups and of the table, totals, selection, pages, empty nodes, a frozen column."}),children:a.jsx(ue,{rows:re(6),...e})})}),play:async e=>{if(V(e))return;const n=e.canvasElement;await r(()=>n.querySelector("[data-group-row]"),"the hierarchy is drawn"),X(n.querySelector('[data-header-id="row-utility"]'),"selection on: the utility column"),await i(e,{selection:!1}),await r(()=>!n.querySelector('[data-header-id="row-utility"]'),"selection off: no utility column"),await i(e,{layout:"lanes"}),await r(()=>n.querySelector("[data-group-level]:not([data-group-row])"),"layout lanes: the levels are lanes"),await i(e,{layout:"rows",groupHeader:"labels"}),await r(()=>n.querySelector("[data-group-row-track] [role=columnheader]"),"groupHeader labels: the labels stand under the bands")}};var d,c,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['kb:hierarchy-playground'],
  name: 'Playground',
  parameters: {
    ...sceneCodeWith(source, 'Playground')
  },
  args: {
    layout: 'rows',
    userGrouping: 'none',
    groupIndent: 'depth',
    groupHeader: 'none',
    header: 'global',
    groupTotals: 'none',
    selection: true,
    pagination: false,
    pageSize: 1,
    emptyNodes: true,
    pinnedName: false
  },
  argTypes: {
    layout: {
      control: 'radio',
      options: ['rows', 'lanes']
    },
    userGrouping: {
      control: 'radio',
      options: ['none', 'team', 'role']
    },
    groupIndent: {
      control: 'radio',
      options: ['depth', 'none']
    },
    groupHeader: {
      control: 'radio',
      options: ['none', 'labels', 'full']
    },
    header: {
      control: 'radio',
      options: ['global', 'none']
    },
    groupTotals: {
      control: 'radio',
      options: TOTALS_NAMES
    },
    selection: {
      control: 'boolean'
    },
    pagination: {
      control: 'boolean'
    },
    pageSize: {
      control: {
        type: 'number',
        min: 1,
        max: 3
      }
    },
    emptyNodes: {
      control: 'boolean'
    },
    pinnedName: {
      control: 'boolean'
    }
  },
  render: args => <Remount args={args}>
            <SceneFrame fit="scroll" hint={<Md text="Everything a hierarchy does, one control for each: the view of the levels, the user's grouping inside them, the indent of the rows, the headers of the groups and of the table, totals, selection, pages, empty nodes, a frozen column." />}>
                <PlaygroundTable rows={manyDelivery(6)} {...args} />
            </SceneFrame>
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await until(() => c.querySelector('[data-group-row]'), 'the hierarchy is drawn');
    check(c.querySelector('[data-header-id="row-utility"]'), 'selection on: the utility column');
    await setArgs(ctx, {
      selection: false
    });
    await until(() => !c.querySelector('[data-header-id="row-utility"]'), 'selection off: no utility column');
    await setArgs(ctx, {
      layout: 'lanes'
    });
    await until(() => c.querySelector('[data-group-level]:not([data-group-row])'), 'layout lanes: the levels are lanes');
    await setArgs(ctx, {
      layout: 'rows',
      groupHeader: 'labels'
    });
    await until(() => c.querySelector('[data-group-row-track] [role=columnheader]'), 'groupHeader labels: the labels stand under the bands');
  }
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const me=["Playground"];export{t as Playground,me as __namedExportsOrder,pe as default};
