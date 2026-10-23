import{t as f,ay as b,l as J,h as i,u as l,w as V,az as m,q as W,U as ee,P as te,V as ne,r,j as n,Y as ae,_ as se,$ as oe,c5 as re,c4 as ie,bK as le,bJ as ce,cy as ue,bL as de,a0 as me,cp as pe,bh as we,ba as ge,bb as he,bc as be,bi as ve,a4 as ye,a1 as Se,a3 as fe,a5 as Ve,a6 as xe,bj as ke,bf as Re,bg as Te,Z as Ce,c as F,b as M,s as A,d as L,f as Fe,p as C,S as Me,M as Ae,e as Oe}from"./products-CTiDOXRn.js";import{m as je}from"./rows-l3LcChQt.js";const ze=`import { useRef, useState } from 'react'

import {
	TableCore,
	TableToolbar,
	columnGroupingFeature,
	columnOrderingFeature,
	columnPinningFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	columnsControl,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	groupRowsFeature,
	groupingControl,
	groupingSection,
	hidingSection,
	pinningSection,
	sortingSection,
	metaHelper,
	rowExpandingFeature,
	rowSortingFeature,
	sortFn_basic,
	sortFn_text,
	sortingControl,
	tableFeatures,
	type CoreColumnMeta,
	type TableCoreHandle,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'

import { ALL_PARTS } from './view-parts'
import {
	inMemory,
	type SavedView,
	type ViewPart,
	type ViewStore,
} from './view-storage'

// A view is a piece of v9's state: the slices the user changes by hand
// (\`columnOrder\`, \`columnVisibility\`, \`columnSizing\`, \`columnPinning\`,
// \`sorting\`, \`grouping\`) read from \`table.store.state\` and written back with
// the table's own setters. The table keeps its state; the screen keeps the
// views, in a store of its choice (\`storage\`), and says which slices a view
// holds (\`parts\`).
const features = tableFeatures({
	columnOrderingFeature,
	columnVisibilityFeature,
	columnSizingFeature,
	columnPinningFeature,
	rowSortingFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: { text: sortFn_text, basic: sortFn_basic },
	columnMeta: metaHelper<CoreColumnMeta>(),
})

const helper = createColumnHelper<typeof features, FeatureRow>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name', size: 190 }),
	helper.accessor('team', { header: 'Team', size: 120 }),
	helper.accessor('role', { header: 'Role', size: 150 }),
	helper.accessor('level', { header: 'Level', size: 90 }),
	helper.accessor('country', { header: 'Country', size: 120 }),
])

type Handle = TableCoreHandle<typeof features, FeatureRow>
type Table = Handle['table']

/** What a view holds of the table's state now. */
const readView = (
	table: Table,
	name: string,
	parts: ViewPart[]
): SavedView => ({
	name,
	...Object.fromEntries(parts.map((part) => [part, table.store.state[part]])),
})

/** The table gets the slices the view holds, one setter each; the rest stays as the user left it. */
const applyView = (table: Table, view: SavedView) => {
	if (view.columnOrder) table.setColumnOrder(view.columnOrder)
	if (view.columnVisibility) table.setColumnVisibility(view.columnVisibility)
	if (view.columnSizing) table.setColumnSizing(view.columnSizing)
	if (view.columnPinning) table.setColumnPinning(view.columnPinning)
	if (view.sorting) table.setSorting(view.sorting)
	if (view.grouping) table.setGrouping(view.grouping)
}

const MENU = {
	sections: [
		sortingSection(),
		groupingSection(),
		pinningSection(),
		hidingSection(),
	],
}

const toolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar
		table={table}
		controls={[columnsControl(), sortingControl(), groupingControl()]}
	/>
)

type Props = {
	rows: FeatureRow[]
	/** Where the views are kept. */
	storage?: ViewStore
	/** The slices of the state a view holds. */
	parts?: ViewPart[]
}

export const ViewsTable = ({
	rows,
	storage = inMemory(),
	parts = ALL_PARTS,
}: Props) => {
	const handle = useRef<Handle>(null)
	const [store] = useState(() => storage)
	const [views, setViews] = useState(store.read)
	const [name, setName] = useState('')

	const keep = (next: SavedView[]) => {
		store.write(next)
		setViews(next)
	}
	const save = () => {
		const table = handle.current?.table
		if (!table || !name) return
		keep([
			...views.filter((view) => view.name !== name),
			readView(table, name, parts),
		])
		setName('')
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div style={{ display: 'flex', gap: 8, padding: 8, flexWrap: 'wrap' }}>
				<input
					aria-label="View name"
					placeholder="View name"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
				<button type="button" onClick={save}>
					Save view
				</button>
				{views.map((view) => (
					<span key={view.name} data-view={view.name}>
						<button
							type="button"
							onClick={() =>
								handle.current && applyView(handle.current.table, view)
							}
						>
							{view.name}
						</button>
						<button
							type="button"
							aria-label={\`Delete \${view.name}\`}
							onClick={() => keep(views.filter((one) => one !== view))}
						>
							×
						</button>
					</span>
				))}
			</div>
			<TableCore
				ref={handle}
				features={features}
				data={rows}
				columns={columns}
				getRowId={(row) => row.id}
				columnMenu={MENU}
				toolbar={toolbarRegion}
				autoResetExpanded={false}
				initialState={{ expanded: true }}
			/>
		</div>
	)
}
`,Ee=e=>{const t=JSON.parse(e),o=s=>typeof s=="object"&&s!==null&&typeof s.name=="string";if(!Array.isArray(t)||!t.every(o))throw new Error(`the stored views are not a list of views: ${e}`);return t},q=()=>{let e=[];return{read:()=>e,write:t=>{e=t}}},Pe=e=>({read:()=>{const t=localStorage.getItem(e);return t===null?[]:Ee(t)},write:t=>localStorage.setItem(e,JSON.stringify(t))}),h="table-core-docs:views",x={"in memory":{value:()=>q(),code:"inMemory()"},localStorage:{value:()=>Pe(h),code:`inLocalStorage('${h}')`}},k=(e,t)=>e.querySelector(`[data-view="${t}"] button`),O=async(e,t)=>{await l.type(V(e).getByLabelText("View name"),t),await l.click(V(e).getByRole("button",{name:"Save view"})),await i(()=>k(e,t),`the view "${t}" stands above the table`)},_e=async(e,t)=>{await ee(e,t),await l.click(await te(()=>ne().getByRole("menuitem",{name:"Hide column"})))},H=e=>l.click(V(e.ownerDocument.body).getByRole("button",{name:"Open the table again"})),We=async e=>{await f(e),await b(e,"Team","Sort A–Z"),await O(e,"Team order"),await b(e,"Name","Sort A–Z"),await i(()=>m(e,"name")==="ascending"&&m(e,"team")==="none","sorted by Name"),await l.click(k(e,"Team order")),await i(()=>m(e,"team")==="ascending"&&m(e,"name")==="none","the view sorted the table by Team again")},Le=async e=>{var o;const t=e.canvasElement;localStorage.removeItem(h),await f(t),await H(t),await f(t),await b(t,"Team","Sort A–Z"),await O(t,"Kept"),J((o=localStorage.getItem(h))==null?void 0:o.includes('"name":"Kept"'),"the view is in localStorage"),await H(t),await i(()=>k(t,"Kept"),"the new table read the view"),await l.click(V(t).getByRole("button",{name:"Delete Kept"})),await i(()=>localStorage.getItem(h)==="[]","Delete took the view out of the store")},He=async e=>{const t=e.canvasElement;await f(t),await b(t,"Team","Sort A–Z"),await O(t,"Order"),await _e(t,"Role"),await i(()=>!W(t,"role"),"Role is hidden"),await b(t,"Name","Sort A–Z"),await l.click(k(t,"Order")),await i(()=>m(t,"team")==="ascending","the view brought the sorting back"),J(!W(t,"role"),"Role stays hidden: the view does not hold columns")},Y=["columnOrder","columnVisibility","columnSizing","columnPinning","sorting","grouping"],j={"columns and rows":{value:Y,code:"ALL_PARTS"},columns:{value:["columnOrder","columnVisibility","columnSizing","columnPinning"],code:"['columnOrder', 'columnVisibility', 'columnSizing', 'columnPinning']"},"sorting and grouping":{value:["sorting","grouping"],code:"['sorting', 'grouping']"}},Ne=me({columnOrderingFeature:Ve,columnVisibilityFeature:fe,columnSizingFeature:Se,columnPinningFeature:ye,rowSortingFeature:ve,columnGroupingFeature:be,rowExpandingFeature:he,groupRowsFeature:ge,groupedRowModel:Te(),expandedRowModel:Re(),sortedRowModel:ke(),sortFns:{text:we,basic:pe},columnMeta:xe()}),u=Ce(),Ke=u.columns([u.accessor("name",{header:"Name",size:190}),u.accessor("team",{header:"Team",size:120}),u.accessor("role",{header:"Role",size:150}),u.accessor("level",{header:"Level",size:90}),u.accessor("country",{header:"Country",size:120})]),Ie=(e,t,o)=>({name:t,...Object.fromEntries(o.map(s=>[s,e.store.state[s]]))}),Ge=(e,t)=>{t.columnOrder&&e.setColumnOrder(t.columnOrder),t.columnVisibility&&e.setColumnVisibility(t.columnVisibility),t.columnSizing&&e.setColumnSizing(t.columnSizing),t.columnPinning&&e.setColumnPinning(t.columnPinning),t.sorting&&e.setSorting(t.sorting),t.grouping&&e.setGrouping(t.grouping)},De={sections:[le(),ce(),ue(),de()]},$e=e=>n.jsx(se,{table:e,controls:[oe(),re(),ie()]}),Be=({rows:e,storage:t=q(),parts:o=Y})=>{const s=r.useRef(null),[v]=r.useState(()=>t),[d,T]=r.useState(v.read),[c,y]=r.useState(""),_=a=>{v.write(a),T(a)},Q=()=>{var S;const a=(S=s.current)==null?void 0:S.table;!a||!c||(_([...d.filter(X=>X.name!==c),Ie(a,c,o)]),y(""))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{display:"flex",gap:8,padding:8,flexWrap:"wrap"},children:[n.jsx("input",{"aria-label":"View name",placeholder:"View name",value:c,onChange:a=>y(a.target.value)}),n.jsx("button",{type:"button",onClick:Q,children:"Save view"}),d.map(a=>n.jsxs("span",{"data-view":a.name,children:[n.jsx("button",{type:"button",onClick:()=>s.current&&Ge(s.current.table,a),children:a.name}),n.jsx("button",{type:"button","aria-label":`Delete ${a.name}`,onClick:()=>_(d.filter(S=>S!==a)),children:"×"})]},a.name))]}),n.jsx(ae,{ref:s,features:Ne,data:e,columns:Ke,getRowId:a=>a.id,columnMenu:De,toolbar:$e,autoResetExpanded:!1,initialState:{expanded:!0}})]})},[R]=Object.values([ze]),Ue={title:"Tables/Table Core/Concepts/Recipes/Saved views",id:"tables-table-core-concepts-recipes-saved-views",...Fe(R)},z=Oe({storage:x,parts:j}),E={storage:L(x),parts:L(j)},P=({args:e,hint:t})=>{const o=r.useMemo(()=>je(8),[]),[s,v]=r.useState(0),[d,T]=r.useState(()=>C(x,e.storage)()),c=()=>{T(C(x,e.storage)()),v(y=>y+1)};return n.jsx(Me,{hint:n.jsxs(n.Fragment,{children:[n.jsx(Ae,{text:t})," ",n.jsx("button",{type:"button",onClick:c,children:"Open the table again"})]}),children:n.jsx(Be,{rows:o,storage:d,parts:C(j,e.parts)},s)})},p={tags:["kb:recipe-views-save"],name:"1 · Save a view",parameters:{...A(R,"SaveAView",z),summary:"The state the user set (order, hidden columns, widths, frozen columns, sorting, grouping) is read from `table.store.state` and kept under a name; a click on the name writes it back with the table’s setters."},args:{storage:"in memory",parts:"columns and rows"},argTypes:E,render:e=>n.jsx(M,{args:e,children:n.jsx(P,{args:e,hint:"Sort by **Team**, type a name and press **Save view**: it stands in the row above the table. Sort by **Name** and press the view: the table is sorted by Team again. The table keeps its state; the screen keeps the views."})}),play:async e=>{F(e)||await We(e.canvasElement)}},w={tags:["kb:recipe-views-keep"],name:"2 · Keep the views between visits",parameters:{...A(R,"KeepViews",z),summary:"The screen gives the table a store (`storage`): `inMemory()` or `inLocalStorage(key)`; the views of the second are there at the next visit."},args:{storage:"localStorage",parts:"columns and rows"},argTypes:E,render:e=>n.jsx(M,{args:e,children:n.jsx(P,{args:e,hint:"Save a view, then press **Open the table again**: the table is made anew and reads the views from the store. With `inMemory()` they are gone, with `inLocalStorage(key)` they stay, and a reload of the page keeps them too. What is read from the browser is checked before it is used."})}),play:async e=>{F(e)||await Le(e)}},g={tags:["kb:recipe-views-parts"],name:"3 · Choose what a view holds",parameters:{...A(R,"WhatAViewHolds",z),summary:"`parts` lists the slices a view holds; the others stay as the user left them when the view is applied."},args:{storage:"in memory",parts:"sorting and grouping"},argTypes:E,render:e=>n.jsx(M,{args:e,children:n.jsx(P,{args:e,hint:"A view of **sorting and grouping** leaves the columns alone: hide a column, apply the view, and the column is still hidden. A view of **columns** leaves the order of the rows alone. **columns and rows** holds everything."})}),play:async e=>{F(e)||await He(e)}};var N,K,I;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['kb:recipe-views-save'],
  name: '1 · Save a view',
  parameters: {
    ...sceneCodeWith(tableSource, 'SaveAView', codes),
    summary: 'The state the user set (order, hidden columns, widths, frozen columns, sorting, grouping) is read from \`table.store.state\` and kept under a name; a click on the name writes it back with the table’s setters.'
  },
  args: {
    storage: 'in memory',
    parts: 'columns and rows'
  },
  argTypes: controls,
  render: args => <Remount args={args}>
            <Scene args={args} hint="Sort by **Team**, type a name and press **Save view**: it stands in the row above the table. Sort by **Name** and press the view: the table is sorted by Team again. The table keeps its state; the screen keeps the views." />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await savedViewsAct(ctx.canvasElement);
  }
}`,...(I=(K=p.parameters)==null?void 0:K.docs)==null?void 0:I.source}}};var G,D,$;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['kb:recipe-views-keep'],
  name: '2 · Keep the views between visits',
  parameters: {
    ...sceneCodeWith(tableSource, 'KeepViews', codes),
    summary: 'The screen gives the table a store (\`storage\`): \`inMemory()\` or \`inLocalStorage(key)\`; the views of the second are there at the next visit.'
  },
  args: {
    storage: 'localStorage',
    parts: 'columns and rows'
  },
  argTypes: controls,
  render: args => <Remount args={args}>
            <Scene args={args} hint="Save a view, then press **Open the table again**: the table is made anew and reads the views from the store. With \`inMemory()\` they are gone, with \`inLocalStorage(key)\` they stay, and a reload of the page keeps them too. What is read from the browser is checked before it is used." />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await keptViewsAct(ctx);
  }
}`,...($=(D=w.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var B,U,Z;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['kb:recipe-views-parts'],
  name: '3 · Choose what a view holds',
  parameters: {
    ...sceneCodeWith(tableSource, 'WhatAViewHolds', codes),
    summary: '\`parts\` lists the slices a view holds; the others stay as the user left them when the view is applied.'
  },
  args: {
    storage: 'in memory',
    parts: 'sorting and grouping'
  },
  argTypes: controls,
  render: args => <Remount args={args}>
            <Scene args={args} hint="A view of **sorting and grouping** leaves the columns alone: hide a column, apply the view, and the column is still hidden. A view of **columns** leaves the order of the rows alone. **columns and rows** holds everything." />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await partsAct(ctx);
  }
}`,...(Z=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};const Ze=["SaveAView","KeepViews","WhatAViewHolds"],Ye=Object.freeze(Object.defineProperty({__proto__:null,KeepViews:w,SaveAView:p,WhatAViewHolds:g,__namedExportsOrder:Ze,default:Ue},Symbol.toStringTag,{value:"Module"}));export{Ye as S};
