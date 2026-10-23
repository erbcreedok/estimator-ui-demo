import{F as j,G as h,_}from"./full-table-C6c0YjtD.js";import{b8 as H,b9 as N,bw as P,j as a,Y as z,Z as D,a0 as I,bF as L,ba as W,bb as U,bc as K,a_ as B,bd as V,a6 as f,bf as q,bg as Y,r as Z,A as J,S as Q,ah as X,c as m,b as y,M as w,p as $,d as ee,s as g,e as ae,f as te}from"./products-CTiDOXRn.js";import{h as re,j as ne,n as R,q as C,u as oe}from"./checks-Df_c61wn.js";import{S as A}from"./scene-B-pT2pmB.js";const se=`import {
	TableCore,
	cellEditingFeature,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	hierarchyColumns,
	metaHelper,
	rowDragFeature,
	rowExpandingFeature,
	rowHierarchyFeature,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type CoreColumnMeta,
	type RowsReorder,
	rowDragHandle,
	createUtilityColumn,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

// A hierarchy is v9's grouping with levels the table makes from each row's
// \`path\`: dropping a row on another node changes its place the same way.
// \`hierarchyColumns({ editable: true })\` lets the level columns be written: the
// screen's \`meta.onEdit\` gets the new country or city, and the levels below the
// node a row is dropped on are emptied (\`null\`).
const features = tableFeatures({
	rowDragFeature, // ← new
	cellEditingFeature, // ← new
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowHierarchyFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CoreColumnMeta & CellEditingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Person>()

type Props = {
	rows: Person[]
	onEdit: (rowId: string, columnId: string, value: unknown) => void
	onRowsReorder: (change: RowsReorder) => void
	/** The levels of the hierarchy as header rows or lanes. @default 'rows' */
	layout?: 'rows' | 'lanes'
}

export const HierarchyDragTable = ({
	rows,
	onEdit,
	onRowsReorder,
	layout = 'rows',
}: Props) => {
	const columns = [
		createUtilityColumn(helper, { parts: [rowDragHandle()] }),
		...hierarchyColumns<Person>({
			places: {
				levels: 2,
				path: (person) => [person.country, person.city],
				layout,
				labels: ['Country', 'City'],
				editable: true, // ← new
			},
		}),
		...helper.columns([
			helper.accessor('name', { header: 'Name' }),
			helper.accessor('role', { header: 'Role' }),
		]),
	]

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(person) => person.id}
			meta={{ onEdit }}
			onRowsReorder={onRowsReorder} // setRows((all) => applyRowsReorder(all, change, (p) => p.id)): so the groups do not jump, apply the order
			autoResetExpanded={false}
			initialState={{
				grouping: ['places-level1', 'places-level2'],
				expanded: true,
			}}
		/>
	)
}
`,le=I({rowDragFeature:V,cellEditingFeature:B,columnGroupingFeature:K,rowExpandingFeature:U,groupRowsFeature:W,rowHierarchyFeature:L,groupedRowModel:Y(),expandedRowModel:q(),tableMeta:f(),columnMeta:f()}),c=D(),ie=({rows:e,onEdit:r,onRowsReorder:d,layout:i="rows"})=>{const n=[H(c,{parts:[N()]}),...P({places:{levels:2,path:t=>[t.country,t.city],layout:i,labels:["Country","City"],editable:!0}}),...c.columns([c.accessor("name",{header:"Name"}),c.accessor("role",{header:"Role"})])];return a.jsx(z,{features:le,data:e,columns:n,getRowId:t=>t.id,meta:{onEdit:r},onRowsReorder:d,autoResetExpanded:!1,initialState:{grouping:["places-level1","places-level2"],expanded:!0}})},ce={"places-level1":"country","places-level2":"city"},de=({hint:e,layout:r})=>{const[d,i]=Z.useState(()=>J(8));return a.jsx(Q,{hint:e,children:a.jsx(ie,{rows:d,layout:r,onEdit:(n,t,p)=>i(O=>O.map(u=>u.id===n?{...u,[ce[t]]:p??""}:u)),onRowsReorder:n=>i(t=>X(t,n,p=>p.id))})})},[b]=Object.values([_]),[pe]=Object.values([se]),ue={title:"Tables/Table Core/Features/Row drag and drop/Big tables and trees",id:"tables-table-core-features-row-drag-big",...te(b)},o={tags:["kb:row-drag-large"],name:"11 · 10 000 rows",parameters:{...g(b,"TenThousandRows"),summary:"Only the rows that are drawn exist: the drop is found by what is under the pointer, and the table scrolls by itself when the pointer is at its edge."},args:{pinColumns:!1},argTypes:{pinColumns:{control:{type:"boolean"}}},render:e=>a.jsx(y,{args:e,children:a.jsx(A,{table:r=>a.jsx(j,{...r,...e}),count:1e4,tall:!0,hint:a.jsx(w,{text:"Take a row and hold the pointer at the **bottom edge** of the table: it scrolls, the faster the nearer the edge. Drop it among the rows that come."})})}),play:async e=>{m(e)||await oe(e.canvasElement)}},s={tags:["kb:row-drag-sticky"],name:"12 · Frozen columns and sticky bands",parameters:{...g(b,"FrozenAndSticky",ae({initialGrouping:h})),summary:"The handle and Name are frozen, the bands of the groups stick under the header while the rows scroll: a row is dropped on a band that sticks as on any other."},args:{initialGrouping:"by Team",pinColumns:!0,groupLayout:"rows"},argTypes:{initialGrouping:{...ee(h)},pinColumns:{control:{type:"boolean"}},groupLayout:{control:{type:"radio"},options:["lanes","rows"]}},render:e=>a.jsx(y,{args:e,children:a.jsx(A,{table:r=>a.jsx(j,{...r,...e,initialGrouping:$(h,e.initialGrouping)}),count:40,tall:!0,hint:a.jsx(w,{text:"Scroll down, then take a row from the middle of a group and drop it on the **band that sticks** at the top: it joins that group."})})}),play:async e=>{m(e)||await re(e.canvasElement)}},l={tags:["kb:row-drag-hierarchy"],name:"13 · Nodes of a hierarchy",parameters:{...g(pe,"NodesOfATree"),summary:"The levels of a hierarchy are written like any grouping column: a row dropped on a node takes its country and city, and the levels below the node are emptied."},args:{layout:"rows"},argTypes:{layout:{control:{type:"radio"},options:["rows","lanes"]}},render:e=>a.jsx(y,{args:e,children:a.jsx(de,{...e,hint:a.jsx(w,{text:"**Country › City**, made from each person’s `path`. Drop a person from Kazakhstan on **Warsaw**: the hint says **Country: Kazakhstan → Poland · City: Astana → Warsaw**."})})}),play:async e=>{m(e)||(await ne(e.canvasElement),await R(e,{layout:"rows"}),await C(e.canvasElement),await R(e,{layout:"lanes"}),await C(e.canvasElement))}};var x,k,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['kb:row-drag-large'],
  name: '11 · 10 000 rows',
  parameters: {
    ...sceneCodeWith(tableSource, 'TenThousandRows'),
    summary: 'Only the rows that are drawn exist: the drop is found by what is under the pointer, and the table scrolls by itself when the pointer is at its edge.'
  },
  args: {
    pinColumns: false
  },
  argTypes: {
    pinColumns: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene table={props => <FullTable {...props} {...args} />} count={10000} tall hint={<Md text="Take a row and hold the pointer at the **bottom edge** of the table: it scrolls, the faster the nearer the edge. Drop it among the rows that come." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await largeAct(ctx.canvasElement);
  }
}`,...(T=(k=o.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var v,F,E;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['kb:row-drag-sticky'],
  name: '12 · Frozen columns and sticky bands',
  parameters: {
    ...sceneCodeWith(tableSource, 'FrozenAndSticky', presetCodes({
      initialGrouping: GROUPINGS
    })),
    summary: 'The handle and Name are frozen, the bands of the groups stick under the header while the rows scroll: a row is dropped on a band that sticks as on any other.'
  },
  args: {
    initialGrouping: 'by Team',
    pinColumns: true,
    groupLayout: 'rows'
  },
  argTypes: {
    initialGrouping: {
      ...presetControl(GROUPINGS)
    },
    pinColumns: {
      control: {
        type: 'boolean'
      }
    },
    groupLayout: {
      control: {
        type: 'radio'
      },
      options: ['lanes', 'rows']
    }
  },
  render: args => <Remount args={args}>
            <Scene table={props => <FullTable {...props} {...args} initialGrouping={presetValue(GROUPINGS, args.initialGrouping)} />} count={40} tall hint={<Md text="Scroll down, then take a row from the middle of a group and drop it on the **band that sticks** at the top: it joins that group." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await stickyAct(ctx.canvasElement);
  }
}`,...(E=(F=s.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var S,M,G;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['kb:row-drag-hierarchy'],
  name: '13 · Nodes of a hierarchy',
  parameters: {
    ...sceneCodeWith(hierarchySource, 'NodesOfATree'),
    summary: 'The levels of a hierarchy are written like any grouping column: a row dropped on a node takes its country and city, and the levels below the node are emptied.'
  },
  args: {
    layout: 'rows'
  },
  argTypes: {
    layout: {
      control: {
        type: 'radio'
      },
      options: ['rows', 'lanes']
    }
  },
  render: args => <Remount args={args}>
            <HierarchyScene {...args} hint={<Md text="**Country › City**, made from each person’s \`path\`. Drop a person from Kazakhstan on **Warsaw**: the hint says **Country: Kazakhstan → Poland · City: Astana → Warsaw**." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await hierarchyAct(ctx.canvasElement);
    await controlAct(ctx, {
      layout: 'rows'
    });
    await emptyLevelAct(ctx.canvasElement);
    await controlAct(ctx, {
      layout: 'lanes'
    });
    await emptyLevelAct(ctx.canvasElement);
  }
}`,...(G=(M=l.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};const he=["TenThousandRows","FrozenAndSticky","NodesOfATree"],be=Object.freeze(Object.defineProperty({__proto__:null,FrozenAndSticky:s,NodesOfATree:l,TenThousandRows:o,__namedExportsOrder:he,default:ue},Symbol.toStringTag,{value:"Module"}));export{be as B};
