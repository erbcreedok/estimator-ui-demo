import{r as w,j as t,Y as V,cf as I,a0 as W,be as $,bB as U,a1 as Y,cg as Z,bP as q,ba as D,bb as J,bc as K,bi as Q,ch as X,a6 as ee,bj as te,bf as ne,bg as re,Z as oe,S as ae,c as y,ci as se,y as de,cj as ie,b as T,M as g,s as R,ck as le,cl as he,cm as ue,f as ce}from"./products-CTiDOXRn.js";import{m as _}from"./rows-l3LcChQt.js";const we=`import { useRef } from 'react'

import {
	TableCore,
	columnGroupingFeature,
	columnSizingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	groupRowsFeature,
	metaHelper,
	orderHoldFeature,
	placeNewRowsBy,
	rowExpandingFeature,
	rowInsertFeature,
	rowPinningFeature,
	rowSortingFeature,
	rowVirtualizationFeature,
	tableFeatures,
	type CoreColumnMeta,
	type PlaceNewRows,
	type RowInsertEvent,
	type TableCoreHandle,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'
import { sceneSortFns } from '../../kit/sort-fns'

// A row between two rows: \`rowInsertFeature\` draws a line and a button where the
// pointer is near the boundary of two rows (one button for each level of the
// groups), and tells the screen (\`onRowInsert\`); the screen makes the row. The
// order of the screen's rows is \`placeNewRows\`: here the new row stands under the
// one above it, and with \`orderHoldFeature\` it stays there under a sort.
export const features = tableFeatures({
	rowInsertFeature, // ← new: the + between two rows
	rowSortingFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	orderHoldFeature,
	rowPinningFeature,
	columnSizingFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
	columnMeta: metaHelper<CoreColumnMeta>(),
})

/** The same table for hundreds of rows: only the rows in the window are drawn. */
const virtualFeatures = tableFeatures({ ...features, rowVirtualizationFeature })

const helper = createColumnHelper<typeof features, FeatureRow>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name', size: 160, sortFn: 'text' }),
	helper.accessor('team', { header: 'Team', size: 110, sortFn: 'text' }),
	helper.accessor('role', { header: 'Role', size: 120, sortFn: 'text' }),
	helper.accessor('rate', {
		header: 'Rate',
		size: 80,
		meta: { align: 'right' },
	}),
])

export type InsertGroupBy = 'none' | 'team' | 'team and role'
export type InsertSwitch = 'on' | 'off'

export type InsertTableProps = {
	rows: FeatureRow[]
	/** The user asked for a row: the screen makes it. */
	onInsert: (event: RowInsertEvent) => void
	groupBy?: InsertGroupBy
	/** Sorted by Rate (high first), or as the data is. */
	sort?: 'none' | 'rate'
	/** The order is held, so the new row stands under the row above it under a sort. */
	hold?: InsertSwitch
	virtualization?: InsertSwitch
	/** The ids of the rows pinned from the start: they have no + under them. */
	pinned?: string[]
	readOnly?: InsertSwitch
}

export const InsertTable = ({
	rows,
	onInsert,
	groupBy = 'none',
	sort = 'none',
	hold = 'on',
	virtualization = 'off',
	pinned = [],
	readOnly = 'off',
}: InsertTableProps) => {
	const handle = useRef<TableCoreHandle<typeof features, FeatureRow>>(null)
	// The row above the place of the next new row.
	const above = useRef<string | null>(null)
	const placeNewRows: PlaceNewRows = (held, fresh) =>
		above.current
			? placeNewRowsBy.after(above.current)(held, fresh)
			: placeNewRowsBy.atEnd(held, fresh)

	return (
		<TableCore<typeof features, FeatureRow>
			ref={handle}
			features={virtualization === 'on' ? virtualFeatures : features}
			data={rows}
			columns={columns}
			getRowId={(row) => row.id}
			groupLayout="lanes"
			readOnly={readOnly === 'on'}
			placeNewRows={placeNewRows}
			onRowInsert={(event) => {
				// The order is held first, then the row comes: it stands where it was asked for.
				if (hold === 'on') handle.current?.table.holdOrder()
				above.current = event.afterRowId
				onInsert(event)
			}}
			initialState={{
				grouping: groupBy === 'none' ? [] : groupBy.split(' and '),
				expanded: true,
				sorting: sort === 'rate' ? [{ id: 'rate', desc: true }] : [],
				rowPinning: { top: pinned, bottom: [] },
			}}
		/>
	)
}
`,G=W({rowInsertFeature:X,rowSortingFeature:Q,columnGroupingFeature:K,rowExpandingFeature:J,groupRowsFeature:D,orderHoldFeature:q,rowPinningFeature:Z,columnSizingFeature:Y,groupedRowModel:re(),expandedRowModel:ne(),sortedRowModel:te(),sortFns:U,columnMeta:ee()}),pe=W({...G,rowVirtualizationFeature:$}),i=oe(),me=i.columns([i.accessor("name",{header:"Name",size:160,sortFn:"text"}),i.accessor("team",{header:"Team",size:110,sortFn:"text"}),i.accessor("role",{header:"Role",size:120,sortFn:"text"}),i.accessor("rate",{header:"Rate",size:80,meta:{align:"right"}})]),fe=({rows:e,onInsert:a,groupBy:m="none",sort:x="none",hold:f="on",virtualization:F="off",pinned:s=[],readOnly:S="off"})=>{const b=w.useRef(null),r=w.useRef(null),d=(n,o)=>r.current?I.after(r.current)(n,o):I.atEnd(n,o);return t.jsx(V,{ref:b,features:F==="on"?pe:G,data:e,columns:me,getRowId:n=>n.id,groupLayout:"lanes",readOnly:S==="on",placeNewRows:d,onRowInsert:n=>{var o;f==="on"&&((o=b.current)==null||o.table.holdOrder()),r.current=n.afterRowId,a(n)},initialState:{grouping:m==="none"?[]:m.split(" and "),expanded:!0,sorting:x==="rate"?[{id:"rate",desc:!0}]:[],rowPinning:{top:s,bottom:[]}}})},[p]=Object.values([we]),be=(e,a)=>({..._(1)[0],id:`new-${a}`,name:`New row ${a}`,team:e.groupPath[0]??"",role:e.groupPath[1]??""}),v=({hint:e,count:a=8,scroll:m,...x})=>{const[f,F]=w.useState(()=>_(a)),[s,S]=w.useState(null),b=w.useMemo(()=>f.length,[]);return t.jsx(ae,{hint:e,fit:m?"scroll":"content",children:t.jsxs("div",{style:{height:"100%"},children:[t.jsx(fe,{rows:f,onInsert:r=>{S(r),F(d=>{const n=d.findIndex(o=>o.id===r.afterRowId);return[...d.slice(0,n+1),be(r,d.length-b+1),...d.slice(n+1)]})},...x}),t.jsx("output",{"data-insert-event":!0,style:{display:"block",padding:"8px 16px",fontSize:13},children:s?`onRowInsert({ afterRowId: ${s.afterRowId}, beforeRowId: ${s.beforeRowId}, groupPath: [${s.groupPath.join(", ")}] })`:"onRowInsert: not called yet"})]})})},ye={title:"Tables/Table Core/Features/Row insert/Basics",id:"tables-table-core-features-row-insert-basics",...ce(p)},L={hold:{control:"radio",options:["on","off"]},readOnly:{control:"radio",options:["off","on"]}},l={tags:["kb:insert-between"],name:"1 · Between two rows",parameters:{...R(p,"Between"),summary:"A line and a button show where the pointer is near the boundary of two rows; a press tells the screen (`onRowInsert`)."},args:{readOnly:"off"},argTypes:{readOnly:L.readOnly},render:e=>t.jsx(T,{args:e,children:t.jsx(v,{...e,hint:t.jsx(g,{text:"Move the pointer to the line between two rows: a **+** shows at the left. Press it: the screen is told which row is above and which is below (the readout under the table), makes the row, and it stands under the row above. Over the middle of a row nothing shows, and the cells keep the pointer. **readOnly** takes the buttons away."})})}),play:async e=>{y(e)||(await se(e.canvasElement),await de(e,{readOnly:"on"}),await ie(e))}},h={tags:["kb:insert-levels"],name:"2 · A button for each level of the groups",parameters:{...R(p,"Levels"),summary:"The row above the boundary stands in groups: each level has a button, and a press tells the path of the group of that level."},args:{groupBy:"team and role"},argTypes:{groupBy:{control:"radio",options:["none","team","team and role"]}},render:e=>t.jsx(T,{args:e,children:t.jsx(v,{...e,count:10,hint:t.jsx(g,{text:"Grouped by **Team** and **Role**: two buttons at a boundary. The first inserts into the team, and the screen is told `groupPath: [Team]`; the second into the role of the row above, `groupPath: [Team, Role]`. Without groups there is one button and an empty path."})})}),play:async e=>{y(e)||await he(e.canvasElement)}},u={tags:["kb:insert-sorted"],name:"3 · Under a sort",parameters:{...R(p,"Sorted"),summary:"With the order held (`holdOrder`, `placeNewRows`) the new row stands under the row above it though the sort would put it elsewhere."},args:{hold:"on"},argTypes:{hold:L.hold},render:e=>t.jsx(T,{args:e,children:t.jsx(v,{...e,sort:"rate",hint:t.jsx(g,{text:"The rows are sorted by **Rate**. With **hold** on the screen keeps the order before it asks for the row (`holdOrder`) and says where it stands (`placeNewRows`): the new row is under the row above it and stays there. With it off the sort puts it where its value goes (the product places a new row by its values)."})})}),play:async e=>{y(e)||await ue(e.canvasElement)}},c={tags:["kb:insert-hundreds"],name:"4 · Hundreds of rows",parameters:{...R(p,"Hundreds"),summary:"With `rowVirtualizationFeature` the layer reads where the rows stand: the button is at a boundary of a row in the window; a pinned row has none."},render:()=>t.jsx(v,{count:800,scroll:!0,virtualization:"on",pinned:["p3"],hint:t.jsx(g,{text:"800 rows, only the window is drawn: scroll and the **+** is at the boundary the pointer is near. Under the pinned row (the third) there is none."})}),play:async e=>{y(e)||await le(e.canvasElement)}};var O,k,M;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['kb:insert-between'],
  name: '1 · Between two rows',
  parameters: {
    ...sceneCodeWith(source, 'Between'),
    summary: 'A line and a button show where the pointer is near the boundary of two rows; a press tells the screen (\`onRowInsert\`).'
  },
  args: {
    readOnly: 'off'
  },
  argTypes: {
    readOnly: switches.readOnly
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Move the pointer to the line between two rows: a **+** shows at the left. Press it: the screen is told which row is above and which is below (the readout under the table), makes the row, and it stands under the row above. Over the middle of a row nothing shows, and the cells keep the pointer. **readOnly** takes the buttons away." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await betweenAct(ctx.canvasElement);
    await setArgs(ctx, {
      readOnly: 'on'
    });
    await readOnlyAct(ctx);
  }
}`,...(M=(k=l.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var j,z,B;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['kb:insert-levels'],
  name: '2 · A button for each level of the groups',
  parameters: {
    ...sceneCodeWith(source, 'Levels'),
    summary: 'The row above the boundary stands in groups: each level has a button, and a press tells the path of the group of that level.'
  },
  args: {
    groupBy: 'team and role'
  },
  argTypes: {
    groupBy: {
      control: 'radio',
      options: ['none', 'team', 'team and role']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} count={10} hint={<Md text="Grouped by **Team** and **Role**: two buttons at a boundary. The first inserts into the team, and the screen is told \`groupPath: [Team]\`; the second into the role of the row above, \`groupPath: [Team, Role]\`. Without groups there is one button and an empty path." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await levelsAct(ctx.canvasElement);
  }
}`,...(B=(z=h.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var E,P,C;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['kb:insert-sorted'],
  name: '3 · Under a sort',
  parameters: {
    ...sceneCodeWith(source, 'Sorted'),
    summary: 'With the order held (\`holdOrder\`, \`placeNewRows\`) the new row stands under the row above it though the sort would put it elsewhere.'
  },
  args: {
    hold: 'on'
  },
  argTypes: {
    hold: switches.hold
  },
  render: args => <Remount args={args}>
            <Scene {...args} sort="rate" hint={<Md text="The rows are sorted by **Rate**. With **hold** on the screen keeps the order before it asks for the row (\`holdOrder\`) and says where it stands (\`placeNewRows\`): the new row is under the row above it and stays there. With it off the sort puts it where its value goes (the product places a new row by its values)." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await holdAct(ctx.canvasElement);
  }
}`,...(C=(P=u.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var H,N,A;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['kb:insert-hundreds'],
  name: '4 · Hundreds of rows',
  parameters: {
    ...sceneCodeWith(source, 'Hundreds'),
    summary: 'With \`rowVirtualizationFeature\` the layer reads where the rows stand: the button is at a boundary of a row in the window; a pinned row has none.'
  },
  render: () => <Scene count={800} scroll virtualization="on" pinned={['p3']} hint={<Md text="800 rows, only the window is drawn: scroll and the **+** is at the boundary the pointer is near. Under the pinned row (the third) there is none." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await windowAct(ctx.canvasElement);
  }
}`,...(A=(N=c.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const ge=["Between","Levels","Sorted","Hundreds"],xe=Object.freeze(Object.defineProperty({__proto__:null,Between:l,Hundreds:c,Levels:h,Sorted:u,__namedExportsOrder:ge,default:ye},Symbol.toStringTag,{value:"Module"}));export{xe as B};
