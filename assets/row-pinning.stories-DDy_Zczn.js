import{t as g,l as a,y as Z,h as f,X as J,u as R,ae as K,r as _,j as n,Y as Q,a0 as $,be as ee,bt as te,bB as ne,ba as oe,bE as re,a1 as ae,bu as se,bi as ie,bb as le,bc as de,cg as pe,a6 as ce,bv as ue,bj as we,bf as he,bg as me,Z as fe,S as ge,c as y,b as U,M as b,s as F,f as ye}from"./products-CTiDOXRn.js";import{m as be}from"./rows-l3LcChQt.js";const r=e=>K(e).map(t=>({id:t,top:e.querySelector(`[role=row][data-row-id="${t}"]`).getBoundingClientRect().top})).sort((t,o)=>t.top-o.top).map(({id:t})=>t),l=e=>Array.from(e.querySelectorAll("[data-pinned-row]")).map(t=>t.dataset.rowId),Fe=async e=>{await g(e);const t=r(e);a(t.slice(0,2).join()==="p3,p9",`the pinned rows are first: ${t.join()}`),a(t.length===12&&new Set(t).size===12,"every row is drawn once"),a(l(e).sort().join()==="p3,p9",`the pinned rows wear the pinned look: ${l(e).join()}`)},xe=async e=>{await g(e);const t=r(e),o=s=>{var i;return(i=e.querySelector(`[role=row][data-row-id="${s}"] [data-column-id="team"]`))==null?void 0:i.textContent};a(t.join()==="p9,p1,p5,p2,p6,p10,p3,p7,p11,p4,p8,p12",`the rows stand by their groups: ${t.join()}`),a(l(e).sort().join()==="p3,p9","the two rows are pinned"),a(t.indexOf("p9")<t.indexOf("p1")&&t.indexOf("p3")<t.indexOf("p7"),`each pinned row is above the other rows of its group: ${t.join()} ${o("p9")}`)},Se=async e=>{const t=e.canvasElement;await g(t);const o=()=>Array.from(t.querySelectorAll("[role=row][data-row-id]")).map(i=>i.dataset.rowId);a(o().length===12,`all the rows at first: ${o().length}`),await Z(e,{filter:"Anna",sort:"rate"}),await f(()=>r(t)[0]==="p3"&&r(t)[1]==="p9",`the pinned rows stay first through the filter and the sort: ${r(t).join()}`);const s=r(t).slice(2);a(s.length>0&&s.length<10,`the filter took rows out: ${s.join()}`)},Re=async e=>{await g(e);const t=r(e),o=e.querySelector('[role=row][data-row-id="p5"] button');await R.click(o),await f(()=>r(e).indexOf("p5")<t.indexOf("p5")&&l(e).includes("p5"),`Pin takes the row to the top: ${r(e).join()}`),await R.click(e.querySelector('[role=row][data-row-id="p5"] button')),await f(()=>r(e).join()===t.join()&&!l(e).length,`Unpin gives it back its place: ${r(e).join()}`)},Pe=async e=>{await g(e);const t=J(e);a(e.querySelectorAll("[role=row][data-row-id]").length<120,"a window of rows is drawn"),a(l(e).length===3,`the pinned rows are drawn at the top: ${l(e).join()}`),t.scrollTop=t.scrollHeight/2,t.dispatchEvent(new Event("scroll")),await f(()=>l(e).length===0,"the pinned rows leave with the body (they are not sticky)"),t.scrollTop=0,t.dispatchEvent(new Event("scroll")),await f(()=>l(e).length===3,"they are back at the top")},ke=`import { useState, type Ref } from 'react'

import {
	TableCore,
	columnFilteringFeature,
	columnGroupingFeature,
	columnSizingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createFilteredRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	filterFn_includesString,
	groupRowsFeature,
	rowExpandingFeature,
	rowPinningFeature,
	metaHelper,
	rowSelectionFeature,
	rowSortingFeature,
	rowVirtualizationFeature,
	tableFeatures,
	type ColumnFiltersState,
	type CoreColumnMeta,
	type GroupLayout,
	type SortingState,
	type TableCoreHandle,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'
import { sceneSortFns } from '../../kit/sort-fns'

// Pinning is v9's \`rowPinningFeature\` (the state \`rowPinning\`, \`row.pin('top')\`),
// placed by \`groupRowsFeature\`: a pinned row stands at the top of its group (the
// first one), or of the table when it is not grouped.
export const features = tableFeatures({
	rowPinningFeature, // ← new: state.rowPinning.top lists the pinned rows
	columnGroupingFeature,
	rowExpandingFeature,
	rowSortingFeature,
	columnFilteringFeature,
	columnSizingFeature,
	rowSelectionFeature,
	groupRowsFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	filteredRowModel: createFilteredRowModel(),
	sortFns: sceneSortFns,
	filterFns: { includesString: filterFn_includesString },
	columnMeta: metaHelper<CoreColumnMeta>(),
})

/** The same table for a plan of hundreds of rows: only the rows in the window are drawn. */
const virtualFeatures = tableFeatures({ ...features, rowVirtualizationFeature })

const helper = createColumnHelper<typeof features, FeatureRow>()

const columns = helper.columns([
	helper.display({
		id: 'pin',
		header: '',
		size: 64,
		cell: ({ row }) => (
			<button
				type="button"
				onClick={() => row.pin(row.getIsPinned() ? false : 'top')}
			>
				{row.getIsPinned() ? 'Unpin' : 'Pin'}
			</button>
		),
	}),
	helper.accessor('name', { header: 'Name', size: 150, sortFn: 'text' }),
	helper.accessor('team', { header: 'Team', size: 110, sortFn: 'text' }),
	helper.accessor('role', { header: 'Role', size: 110, sortFn: 'text' }),
	helper.accessor('rate', {
		header: 'Rate',
		size: 80,
		meta: { align: 'right' },
	}),
])

export type PinGroupBy = 'none' | 'team' | 'team and role'

export type PinTableProps = {
	rows: FeatureRow[]
	/** The ids of the rows pinned from the start, in the order they stand. */
	pinned?: string[]
	groupBy?: PinGroupBy
	layout?: GroupLayout
	/** Part of a name: the rows that do not have it are filtered out. */
	filter?: string
	/** Sorted by Rate, or as the data is. */
	sort?: 'none' | 'rate'
	/** Only the rows in the window are drawn. */
	virtualization?: 'on' | 'off'
	tableRef?: Ref<TableCoreHandle<typeof features, FeatureRow>>
}

export const PinTable = ({
	rows,
	pinned = [],
	groupBy = 'none',
	layout = 'lanes',
	filter = '',
	sort = 'none',
	virtualization = 'off',
	tableRef,
}: PinTableProps) => {
	const [filters, setFilters] = useState<ColumnFiltersState>([])
	const columnFilters = filter ? [{ id: 'name', value: filter }] : filters

	return (
		<TableCore<typeof features, FeatureRow>
			ref={tableRef}
			features={virtualization === 'on' ? virtualFeatures : features}
			data={rows}
			columns={columns}
			getRowId={(row) => row.id}
			groupLayout={layout}
			state={{ columnFilters }}
			onColumnFiltersChange={setFilters}
			initialState={{
				grouping: groupBy === 'none' ? [] : groupBy.split(' and '),
				expanded: true,
				sorting: (sort === 'rate'
					? [{ id: 'rate', desc: true }]
					: []) as SortingState,
				rowPinning: { top: pinned, bottom: [] },
			}}
		/>
	)
}
`,N=$({rowPinningFeature:pe,columnGroupingFeature:de,rowExpandingFeature:le,rowSortingFeature:ie,columnFilteringFeature:se,columnSizingFeature:ae,rowSelectionFeature:re,groupRowsFeature:oe,groupedRowModel:me(),expandedRowModel:he(),sortedRowModel:we(),filteredRowModel:ue(),sortFns:ne,filterFns:{includesString:te},columnMeta:ce()}),ve=$({...N,rowVirtualizationFeature:ee}),d=fe(),je=d.columns([d.display({id:"pin",header:"",size:64,cell:({row:e})=>n.jsx("button",{type:"button",onClick:()=>e.pin(e.getIsPinned()?!1:"top"),children:e.getIsPinned()?"Unpin":"Pin"})}),d.accessor("name",{header:"Name",size:150,sortFn:"text"}),d.accessor("team",{header:"Team",size:110,sortFn:"text"}),d.accessor("role",{header:"Role",size:110,sortFn:"text"}),d.accessor("rate",{header:"Rate",size:80,meta:{align:"right"}})]),Ae=({rows:e,pinned:t=[],groupBy:o="none",layout:s="lanes",filter:i="",sort:L="none",virtualization:W="off",tableRef:q})=>{const[V,D]=_.useState([]),X=i?[{id:"name",value:i}]:V;return n.jsx(Q,{ref:q,features:W==="on"?ve:N,data:e,columns:je,getRowId:Y=>Y.id,groupLayout:s,state:{columnFilters:X},onColumnFiltersChange:D,initialState:{grouping:o==="none"?[]:o.split(" and "),expanded:!0,sorting:L==="rate"?[{id:"rate",desc:!0}]:[],rowPinning:{top:t,bottom:[]}}})},[p]=Object.values([ke]),x=({hint:e,count:t=12,scroll:o,...s})=>{const i=_.useMemo(()=>be(t),[t]);return n.jsx(ge,{hint:e,fit:o?"scroll":"content",children:n.jsx("div",{style:{height:"100%"},children:n.jsx(Ae,{rows:i,...s})})})},Me={title:"Tables/Table Core/Features/Row pinning/Basics",id:"tables-table-core-features-row-pinning-basics",...ye(p)},S=["p3","p9"],c={tags:["kb:pin-one-list"],name:"1 · At the top",parameters:{...F(p,"OneList"),summary:"The rows of `state.rowPinning.top` stand first, in that order."},render:()=>n.jsx(x,{pinned:S,hint:n.jsx(b,{text:"`initialState.rowPinning.top` is `['p3', 'p9']`: the two rows stand first, in the order of the list, and wear the pinned look. Pin and Unpin call `row.pin('top')` and `row.pin(false)`."})}),play:async e=>{y(e)||await Fe(e.canvasElement)}},u={tags:["kb:pin-grouped"],name:"2 · At the top of a group",parameters:{...F(p,"Grouped"),summary:"A pinned row stands at the top of its first group."},args:{groupBy:"team and role",layout:"lanes"},argTypes:{groupBy:{control:"radio",options:["none","team","team and role"]},layout:{control:"radio",options:["lanes","rows"]}},render:e=>n.jsx(U,{args:e,children:n.jsx(x,{...e,pinned:S,hint:n.jsx(b,{text:"Grouped by **Team** and **Role**: a pinned row stands at the top of its team, outside the groups of the next level (their lane has no cell for it); the team counts it. Switch the layout to header rows."})})}),play:async e=>{y(e)||await xe(e.canvasElement)}},w={tags:["kb:pin-filter-sort"],name:"3 · Filter and sort",parameters:{...F(p,"FilterAndSort"),summary:"A filter does not hide a pinned row (`keepPinnedRows`), a sort does not move it."},args:{filter:"",sort:"none"},argTypes:{filter:{control:"select",options:["","Anna","Piotr","Olga"]},sort:{control:"radio",options:["none","rate"]}},render:e=>n.jsx(U,{args:e,children:n.jsx(x,{...e,pinned:S,hint:n.jsx(b,{text:"Pick a name in **filter**: the rows that do not match go, the pinned rows stay (`keepPinnedRows`, on by default). Sort by **Rate**: the pinned rows keep the order of the state, the rows under them are sorted."})})}),play:async e=>{y(e)||await Se(e)}},h={tags:["kb:pin-pin-unpin"],name:"4 · Pin and unpin",parameters:{...F(p,"PinAndUnpin"),summary:"`row.pin('top')` takes a row to the top, `row.pin(false)` gives it back."},render:()=>n.jsx(x,{count:8,hint:n.jsx(b,{text:"Press **Pin** on a row: it goes to the top of the table and wears the pinned look; **Unpin** gives it back its place."})}),play:async e=>{y(e)||await Re(e.canvasElement)}},m={tags:["kb:pin-hundreds"],name:"5 · Hundreds of rows",parameters:{...F(p,"Hundreds"),summary:"With `rowVirtualizationFeature` the pinned rows are rows of the window: they scroll with the body."},render:()=>n.jsx(x,{count:800,scroll:!0,virtualization:"on",pinned:["p3","p9","p27"],hint:n.jsx(b,{text:"800 rows, three pinned: they are the first rows of the table and scroll away with the body (they are not sticky); only the rows in the window are drawn."})}),play:async e=>{y(e)||await Pe(e.canvasElement)}};var P,k,v;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['kb:pin-one-list'],
  name: '1 · At the top',
  parameters: {
    ...sceneCodeWith(source, 'OneList'),
    summary: 'The rows of \`state.rowPinning.top\` stand first, in that order.'
  },
  render: () => <Scene pinned={PINNED} hint={<Md text="\`initialState.rowPinning.top\` is \`['p3', 'p9']\`: the two rows stand first, in the order of the list, and wear the pinned look. Pin and Unpin call \`row.pin('top')\` and \`row.pin(false)\`." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await topAct(ctx.canvasElement);
  }
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var j,A,M;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['kb:pin-grouped'],
  name: '2 · At the top of a group',
  parameters: {
    ...sceneCodeWith(source, 'Grouped'),
    summary: 'A pinned row stands at the top of its first group.'
  },
  args: {
    groupBy: 'team and role',
    layout: 'lanes'
  },
  argTypes: {
    groupBy: {
      control: 'radio',
      options: ['none', 'team', 'team and role']
    },
    layout: {
      control: 'radio',
      options: ['lanes', 'rows']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} pinned={PINNED} hint={<Md text="Grouped by **Team** and **Role**: a pinned row stands at the top of its team, outside the groups of the next level (their lane has no cell for it); the team counts it. Switch the layout to header rows." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await groupAct(ctx.canvasElement);
  }
}`,...(M=(A=u.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var C,E,T;w.parameters={...w.parameters,docs:{...(C=w.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['kb:pin-filter-sort'],
  name: '3 · Filter and sort',
  parameters: {
    ...sceneCodeWith(source, 'FilterAndSort'),
    summary: 'A filter does not hide a pinned row (\`keepPinnedRows\`), a sort does not move it.'
  },
  args: {
    filter: '',
    sort: 'none'
  },
  argTypes: {
    filter: {
      control: 'select',
      options: ['', 'Anna', 'Piotr', 'Olga']
    },
    sort: {
      control: 'radio',
      options: ['none', 'rate']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} pinned={PINNED} hint={<Md text="Pick a name in **filter**: the rows that do not match go, the pinned rows stay (\`keepPinnedRows\`, on by default). Sort by **Rate**: the pinned rows keep the order of the state, the rows under them are sorted." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await filterSortAct(ctx);
  }
}`,...(T=(E=w.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var z,O,G;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['kb:pin-pin-unpin'],
  name: '4 · Pin and unpin',
  parameters: {
    ...sceneCodeWith(source, 'PinAndUnpin'),
    summary: "\`row.pin('top')\` takes a row to the top, \`row.pin(false)\` gives it back."
  },
  render: () => <Scene count={8} hint={<Md text="Press **Pin** on a row: it goes to the top of the table and wears the pinned look; **Unpin** gives it back its place." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await pinAct(ctx.canvasElement);
  }
}`,...(G=(O=h.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var H,B,I;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['kb:pin-hundreds'],
  name: '5 · Hundreds of rows',
  parameters: {
    ...sceneCodeWith(source, 'Hundreds'),
    summary: 'With \`rowVirtualizationFeature\` the pinned rows are rows of the window: they scroll with the body.'
  },
  render: () => <Scene count={800} scroll virtualization="on" pinned={['p3', 'p9', 'p27']} hint={<Md text="800 rows, three pinned: they are the first rows of the table and scroll away with the body (they are not sticky); only the rows in the window are drawn." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await windowAct(ctx.canvasElement);
  }
}`,...(I=(B=m.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const Ce=["OneList","Grouped","FilterAndSort","PinAndUnpin","Hundreds"],ze=Object.freeze(Object.defineProperty({__proto__:null,FilterAndSort:w,Grouped:u,Hundreds:m,OneList:c,PinAndUnpin:h,__namedExportsOrder:Ce,default:Me},Symbol.toStringTag,{value:"Module"}));export{ze as B};
