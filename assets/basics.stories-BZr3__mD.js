import{r as V,j as t,Y as $,b8 as q,_ as J,$ as K,a0 as Q,bh as X,bi as ee,bE as te,a2 as ne,a3 as ae,a1 as re,a4 as se,a5 as oe,a6 as le,bj as ie,Z as ce,S as he,c as r,M as s,s as o,b as w,p as ue,d as de,e as me,ag as pe,f as ge}from"./products-CTiDOXRn.js";import{c as ye,f as we,h as fe,a as ve,o as be,t as xe,u as Ce}from"./checks-BmVl_141.js";import{m as Te}from"./rows-l3LcChQt.js";const He=`import { useState } from 'react'

import {
	TableCore,
	TableToolbar,
	columnChainsFeature,
	columnOrderingFeature,
	columnPinningFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	columnsControl,
	createColumnHelper,
	createSortedRowModel,
	createUtilityColumn,
	metaHelper,
	rowSelectionFeature,
	rowSortingFeature,
	sortFn_text,
	tableFeatures,
	type ColumnChain,
	type ColumnOrderState,
	type ColumnPinningState,
	type CoreColumnMeta,
	type HeaderLevelHeight,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'

// Column groups are v9's: a column with \`columns\` is a group, and the header has
// a level more for it. The group's cell stands over the columns it holds, as wide
// as they are together; a column that is in no group is as tall as the whole
// header. The table keeps a group's columns together while it owns the order.
const features = tableFeatures({
	columnOrderingFeature,
	columnPinningFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	columnChainsFeature,
	rowSelectionFeature,
	rowSortingFeature,
	sortedRowModel: createSortedRowModel(),
	sortFns: { text: sortFn_text },
	columnMeta: metaHelper<CoreColumnMeta>(),
})

const helper = createColumnHelper<typeof features, FeatureRow>()

const columns = helper.columns([
	helper.accessor('name', { header: 'Name', size: 150, sortFn: 'text' }),
	helper.group({
		id: 'person',
		header: 'Person',
		columns: helper.columns([
			helper.accessor('team', { header: 'Team', size: 120, sortFn: 'text' }),
			helper.accessor('role', { header: 'Role', size: 120, sortFn: 'text' }),
		]),
	}),
	helper.group({
		id: 'place',
		header: 'Place',
		columns: helper.columns([
			helper.accessor('country', {
				header: 'Country',
				size: 120,
				sortFn: 'text',
			}),
			helper.accessor('tier', { header: 'Tier', size: 90, sortFn: 'text' }),
			helper.accessor('city', { header: 'City', size: 120, sortFn: 'text' }),
		]),
	}),
])

const toolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar table={table} controls={[columnsControl()]} />
)

type Props = {
	rows: FeatureRow[]
	/** Columns frozen from the start. */
	initialPinning?: ColumnPinningState
	/** The screen owns \`columnOrder\`: its rule decides, so a column may leave its group. @default false */
	ownsOrder?: boolean
	/** The utility column (numbers, checkboxes), as tall as the header. @default false */
	utility?: boolean
	/** Columns that go as one. */
	chains?: ColumnChain[]
	/** The Columns panel in a toolbar. @default false */
	toolbar?: boolean
	/** How tall each level of the header is: the levels share the height of a header of one level, or each takes it whole. */
	headerLevelHeight?: HeaderLevelHeight
}

export const HeadersTable = ({
	rows,
	initialPinning,
	ownsOrder = false,
	utility = false,
	chains = [],
	toolbar = false,
	headerLevelHeight,
}: Props) => {
	const [order, setOrder] = useState<ColumnOrderState>([])

	return (
		<TableCore
			features={features}
			data={rows}
			columns={[...(utility ? [createUtilityColumn(helper)] : []), ...columns]}
			getRowId={(row) => row.id}
			initialState={{
				columnPinning: initialPinning ?? { start: [], end: [] },
			}}
			chains={chains}
			toolbar={toolbar ? toolbarRegion : undefined}
			headerLevelHeight={headerLevelHeight}
			// The screen's own order: a drag writes it here, and any order passes.
			{...(ownsOrder && {
				state: { columnOrder: order },
				onColumnOrderChange: setOrder,
			})}
		/>
	)
}
`,Pe=Q({columnOrderingFeature:oe,columnPinningFeature:se,columnSizingFeature:re,columnVisibilityFeature:ae,columnChainsFeature:ne,rowSelectionFeature:te,rowSortingFeature:ee,sortedRowModel:ie(),sortFns:{text:X},columnMeta:le()}),n=ce(),Fe=n.columns([n.accessor("name",{header:"Name",size:150,sortFn:"text"}),n.group({id:"person",header:"Person",columns:n.columns([n.accessor("team",{header:"Team",size:120,sortFn:"text"}),n.accessor("role",{header:"Role",size:120,sortFn:"text"})])}),n.group({id:"place",header:"Place",columns:n.columns([n.accessor("country",{header:"Country",size:120,sortFn:"text"}),n.accessor("tier",{header:"Tier",size:90,sortFn:"text"}),n.accessor("city",{header:"City",size:120,sortFn:"text"})])})]),Oe=e=>t.jsx(J,{table:e,controls:[K()]}),Se=({rows:e,initialPinning:y,ownsOrder:i=!1,utility:f=!1,chains:W=[],toolbar:D=!1,headerLevelHeight:G})=>{const[B,Y]=V.useState([]);return t.jsx($,{features:Pe,data:e,columns:[...f?[q(n)]:[],...Fe],getRowId:Z=>Z.id,initialState:{columnPinning:y??{start:[],end:[]}},chains:W,toolbar:D?Oe:void 0,headerLevelHeight:G,...i&&{state:{columnOrder:B},onColumnOrderChange:Y}})},[a]=Object.values([He]),l=({hint:e,narrow:y=!1,...i})=>{const f=V.useMemo(()=>Te(8),[]);return t.jsx(he,{hint:e,width:y?640:void 0,children:t.jsx("div",{style:{height:"100%"},children:t.jsx(Se,{rows:f,...i})})})},ke={title:"Tables/Table Core/Features/Headers/Basics",id:"tables-table-core-features-headers-basics",...ge(a)},c={tags:["kb:headers-two-levels"],name:"1 · Two levels",parameters:{...o(a,"TwoLevels"),summary:"A column with `columns` is a group (v9): its cell stands over the columns it holds, and a column in no group is as tall as the header."},render:()=>t.jsx(l,{hint:t.jsx(s,{text:"**Person** and **Place** are groups: each cell stands over its two columns. **Name** is in no group, so its cell takes both levels. Sort a column under a group: the group stays."})}),play:async e=>{r(e)||(await xe(e.canvasElement),await pe(e.canvasElement,"team"))}},h={tags:["kb:headers-frozen"],name:"2 · A group frozen in part",parameters:{...o(a,"FrozenInPart"),summary:"v9 splits a group whose columns are frozen in part: the cell over the frozen columns sticks with them, the cell over the rest scrolls."},render:()=>t.jsx(l,{narrow:!0,initialPinning:{start:["name","team"],end:[]},hint:t.jsx(s,{text:"**Name** and **Team** are frozen. **Person** stands over **Team** (frozen) and over **Role** (it scrolls): two cells of one group. Scroll sideways."})}),play:async e=>{r(e)||await we(e.canvasElement)}},u={tags:["kb:headers-order"],name:"3 · Order",parameters:{...o(a,"Order"),summary:"A column stays in its group while the table owns the order; a group goes with its columns. A screen that owns `columnOrder` has its own rule."},args:{ownsOrder:!1},argTypes:{ownsOrder:{control:{type:"boolean"}}},render:e=>t.jsx(w,{args:e,children:t.jsx(l,{ownsOrder:e.ownsOrder,hint:t.jsx(s,{text:"Drag **Team** by its grip: it moves inside **Person**, and stays in it. Drag the grip of the **Place** cell: the group goes with its three columns. Turn **ownsOrder** on: the screen owns `columnOrder`, its rule lets a column out of its group, and the group is two cells."})})}),play:async e=>{r(e)||await be(e)}},d={tags:["kb:headers-hide"],name:"4 · Hide",parameters:{...o(a,"Hide"),summary:"A group with no visible column is gone; in the Columns panel its row has a tick for all its columns."},args:{toolbar:!0},argTypes:{toolbar:{control:{type:"boolean"}}},render:e=>t.jsx(w,{args:e,children:t.jsx(l,{toolbar:e.toolbar,hint:t.jsx(s,{text:"Open **Columns**: **Place** is a row with its three columns under it. Hide **City**: the group is narrower and its tick is mixed. Untick **Place**: the group is gone."})})}),play:async e=>{r(e)||await ve(e.canvasElement)}},m={tags:["kb:headers-utility"],name:"5 · The utility column",parameters:{...o(a,"UtilityColumn"),summary:"The utility column, the lanes of a grouping and any column in no group take all the levels of the header."},args:{utility:!0},argTypes:{utility:{control:{type:"boolean"}}},render:e=>t.jsx(w,{args:e,children:t.jsx(l,{utility:e.utility,hint:t.jsx(s,{text:"The utility column (numbers and checkboxes) is in no group: its header is as tall as the two levels, like **Name**."})})}),play:async e=>{r(e)||await Ce(e.canvasElement)}},p={tags:["kb:headers-chains"],name:"6 · A chain in a group",parameters:{...o(a,"Chains"),summary:"A chain of columns inside a group collapses to one column of it; the group follows. A chain stands in one group."},render:()=>t.jsx(l,{chains:[{id:"location",label:"Location",columns:["country","tier","city"]}],hint:t.jsx(s,{text:"**Country**, **Tier** and **City** are a chain inside **Place**: collapsed, the group stands over **Country** alone; open the chain and the group is as wide as the three. A chain stands inside one group: when its columns come from two, the group of the first column holds it, and `onChainConflicts` names the column that left it (`split-groups`)."})}),play:async e=>{r(e)||await ye(e.canvasElement)}},v={"levels share the header":{value:void 0,code:"undefined"},"each level full height":{value:(e,y,i)=>i,code:"(level, depth, header) => header"}},g={tags:["kb:headers-height"],name:"7 · Header height",parameters:{...o(a,"HeaderHeight",me({headerLevelHeight:v})),summary:"`headerLevelHeight(level, depth, header)` says how tall each level of the header is; by default the levels share the height of a header of one level, as in the Resource Plan."},args:{headerLevelHeight:"levels share the header"},argTypes:{headerLevelHeight:de(v)},render:e=>t.jsx(w,{args:e,children:t.jsx(l,{headerLevelHeight:ue(v,e.headerLevelHeight),hint:t.jsx(s,{text:"The header with groups is as tall as one without: **Person** and **Place** stand over their columns in the height of a header, and **Name** next to them is as tall as it ever was. Pick *each level full height* in the control: every level takes the height of a header, and the header is twice as tall."})})}),play:async e=>{r(e)||await fe(e)}};var b,x,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['kb:headers-two-levels'],
  name: '1 · Two levels',
  parameters: {
    ...sceneCodeWith(source, 'TwoLevels'),
    summary: 'A column with \`columns\` is a group (v9): its cell stands over the columns it holds, and a column in no group is as tall as the header.'
  },
  render: () => <Scene hint={<Md text="**Person** and **Place** are groups: each cell stands over its two columns. **Name** is in no group, so its cell takes both levels. Sort a column under a group: the group stays." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await twoLevelsAct(ctx.canvasElement);
    // The tab of a column in a group stands above the top of the whole header, and the pointer going up to it crosses the group's cell.
    await gripTabAct(ctx.canvasElement, 'team');
  }
}`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var T,H,P;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['kb:headers-frozen'],
  name: '2 · A group frozen in part',
  parameters: {
    ...sceneCodeWith(source, 'FrozenInPart'),
    summary: 'v9 splits a group whose columns are frozen in part: the cell over the frozen columns sticks with them, the cell over the rest scrolls.'
  },
  render: () => <Scene narrow initialPinning={{
    start: ['name', 'team'],
    end: []
  }} hint={<Md text="**Name** and **Team** are frozen. **Person** stands over **Team** (frozen) and over **Role** (it scrolls): two cells of one group. Scroll sideways." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await frozenInPartAct(ctx.canvasElement);
  }
}`,...(P=(H=h.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var F,O,S;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['kb:headers-order'],
  name: '3 · Order',
  parameters: {
    ...sceneCodeWith(source, 'Order'),
    summary: 'A column stays in its group while the table owns the order; a group goes with its columns. A screen that owns \`columnOrder\` has its own rule.'
  },
  args: {
    ownsOrder: false
  },
  argTypes: {
    ownsOrder: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene ownsOrder={args.ownsOrder} hint={<Md text="Drag **Team** by its grip: it moves inside **Person**, and stays in it. Drag the grip of the **Place** cell: the group goes with its three columns. Turn **ownsOrder** on: the screen owns \`columnOrder\`, its rule lets a column out of its group, and the group is two cells." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await orderAct(ctx);
  }
}`,...(S=(O=u.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var k,z,A;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['kb:headers-hide'],
  name: '4 · Hide',
  parameters: {
    ...sceneCodeWith(source, 'Hide'),
    summary: 'A group with no visible column is gone; in the Columns panel its row has a tick for all its columns.'
  },
  args: {
    toolbar: true
  },
  argTypes: {
    toolbar: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene toolbar={args.toolbar} hint={<Md text="Open **Columns**: **Place** is a row with its three columns under it. Hide **City**: the group is narrower and its tick is mixed. Untick **Place**: the group is gone." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await hideAct(ctx.canvasElement);
  }
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var L,R,j;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['kb:headers-utility'],
  name: '5 · The utility column',
  parameters: {
    ...sceneCodeWith(source, 'UtilityColumn'),
    summary: 'The utility column, the lanes of a grouping and any column in no group take all the levels of the header.'
  },
  args: {
    utility: true
  },
  argTypes: {
    utility: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene utility={args.utility} hint={<Md text="The utility column (numbers and checkboxes) is in no group: its header is as tall as the two levels, like **Name**." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await utilityAct(ctx.canvasElement);
  }
}`,...(j=(R=m.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var E,M,_;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['kb:headers-chains'],
  name: '6 · A chain in a group',
  parameters: {
    ...sceneCodeWith(source, 'Chains'),
    summary: 'A chain of columns inside a group collapses to one column of it; the group follows. A chain stands in one group.'
  },
  render: () => <Scene chains={[{
    id: 'location',
    label: 'Location',
    columns: ['country', 'tier', 'city']
  }]} hint={<Md text="**Country**, **Tier** and **City** are a chain inside **Place**: collapsed, the group stands over **Country** alone; open the chain and the group is as wide as the three. A chain stands inside one group: when its columns come from two, the group of the first column holds it, and \`onChainConflicts\` names the column that left it (\`split-groups\`)." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await chainAct(ctx.canvasElement);
  }
}`,...(_=(M=p.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var I,U,N;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['kb:headers-height'],
  name: '7 · Header height',
  parameters: {
    ...sceneCodeWith(source, 'HeaderHeight', presetCodes({
      headerLevelHeight: LEVEL_HEIGHTS
    })),
    summary: '\`headerLevelHeight(level, depth, header)\` says how tall each level of the header is; by default the levels share the height of a header of one level, as in the Resource Plan.'
  },
  args: {
    headerLevelHeight: 'levels share the header'
  },
  argTypes: {
    headerLevelHeight: presetControl(LEVEL_HEIGHTS)
  },
  render: args => <Remount args={args}>
            <Scene headerLevelHeight={presetValue(LEVEL_HEIGHTS, args.headerLevelHeight)} hint={<Md text="The header with groups is as tall as one without: **Person** and **Place** stand over their columns in the height of a header, and **Name** next to them is as tall as it ever was. Pick *each level full height* in the control: every level takes the height of a header, and the header is twice as tall." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await headerHeightAct(ctx);
  }
}`,...(N=(U=g.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};const ze=["TwoLevels","FrozenInPart","Order","Hide","UtilityColumn","Chains","HeaderHeight"],je=Object.freeze(Object.defineProperty({__proto__:null,Chains:p,FrozenInPart:h,HeaderHeight:g,Hide:d,Order:u,TwoLevels:c,UtilityColumn:m,__namedExportsOrder:ze,default:ke},Symbol.toStringTag,{value:"Module"}));export{je as B};
