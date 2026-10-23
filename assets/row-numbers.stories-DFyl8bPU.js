import{t as u,l as r,u as ke,w as fe,h as E,X as Te,P as ve,y as H,b$ as Ge,j as t,Y as Oe,cr as M,bI as W,b8 as S,a0 as Ae,bB as Ie,a1 as Pe,ba as Ee,bb as Ue,bc as Fe,a4 as je,bi as Me,bE as We,a6 as ze,bj as _e,bf as qe,bg as Be,Z as Le,cu as He,ds as Ye,ct as Ve,r as $e,C as De,S as Je,c as m,M as h,b as U,s as F,p as _,d as q,e as L,f as Xe}from"./products-CTiDOXRn.js";const Ze=`import {
	RowCheckbox,
	RowNumber,
	SelectAllCheckbox,
	TableCore,
	UTILITY_COLUMN_ID,
	columnGroupingFeature,
	columnPinningFeature,
	columnSizingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	createUtilityColumn,
	groupRowsFeature,
	metaHelper,
	rowExpandingFeature,
	rowSelectionFeature,
	rowSortingFeature,
	tableFeatures,
	type ColumnPinningState,
	type CoreColumnMeta,
	type GroupingState,
	type SortingState,
	type TableCoreUiProps,
	rowCheckbox,
	rowNumber,
} from '@pnl-simulation/table-core'

import type { Employee } from '../../data/employees'
import { sceneSortFns } from '../../kit/sort-fns'

// Row numbers and row checkboxes are two separate blocks. The utility column
// is one way to place them (both in one column, the number turning into the
// checkbox on hover); they can also have a column each, one of them only, or
// live inside any cell. Which rows can be selected is v9's \`enableRowSelection\`.
const features = tableFeatures({
	rowSelectionFeature,
	rowSortingFeature,
	columnPinningFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	columnSizingFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
	columnMeta: metaHelper<CoreColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Employee>()

const STATUS = { ok: 'Included', blocked: 'Blocked', excluded: 'Excluded' }

const dataColumns = [
	helper.accessor('team', { header: 'Team', size: 120 }),
	helper.accessor('role', { header: 'Role', size: 150 }),
	helper.accessor((employee) => STATUS[employee.state], {
		id: 'status',
		header: 'Status',
		size: 120,
	}),
	helper.accessor('country', { header: 'Country', size: 120 }),
	helper.accessor('start', { header: 'Start', size: 110 }),
]

const plainName = helper.accessor('name', { header: 'Name', size: 200 })

/** Name with the row's number and checkbox in front: the blocks in any cell. */
const nameWithBlocks = helper.accessor('name', {
	size: 260,
	cell: (context) => (
		<span
			style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}
		>
			<span style={{ width: 26, textAlign: 'right' }}>
				<RowNumber context={context} />
			</span>
			<RowCheckbox context={context} />
			<span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
				{context.row.original.name}
			</span>
		</span>
	),
	header: ({ table }) => (
		<span
			style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%' }}
		>
			<span style={{ width: 26 }} />
			<SelectAllCheckbox table={table} />
			Name
		</span>
	),
	// The header holds a checkbox: drawn as is.
	meta: { plainHeader: true },
})

export type Layout =
	| 'utility'
	| 'numbers'
	| 'checkboxes'
	| 'separate'
	| 'inCell'

/** Where the blocks go, per layout: the columns and what is frozen. */
const LAYOUTS: Record<
	Layout,
	{ columns: ReturnType<typeof helper.columns>; pinned: string[] }
> = {
	utility: {
		columns: helper.columns([
			createUtilityColumn(helper),
			plainName,
			...dataColumns,
		]),
		pinned: [UTILITY_COLUMN_ID, 'name'],
	},
	numbers: {
		columns: helper.columns([
			createUtilityColumn(helper, { parts: [rowNumber()] }),
			plainName,
			...dataColumns,
		]),
		pinned: [rowNumber().columnId, 'name'],
	},
	checkboxes: {
		columns: helper.columns([
			createUtilityColumn(helper, { parts: [rowCheckbox()] }),
			plainName,
			...dataColumns,
		]),
		pinned: [rowCheckbox().columnId, 'name'],
	},
	separate: {
		columns: helper.columns([
			createUtilityColumn(helper, { parts: [rowNumber()] }),
			createUtilityColumn(helper, { parts: [rowCheckbox()] }),
			plainName,
			...dataColumns,
		]),
		pinned: [rowNumber().columnId, rowCheckbox().columnId, 'name'],
	},
	inCell: {
		columns: helper.columns([nameWithBlocks, ...dataColumns]),
		pinned: ['name'],
	},
}

export type Selectable = 'all' | 'none' | 'notBlocked'

const selectable = (value: Selectable) => {
	if (value === 'all') return true
	if (value === 'none') return false

	return (row: { original: Employee }) => row.original.state !== 'blocked'
}

type Props = {
	rows: Employee[]
	layout?: Layout
	/** Who has a checkbox; rows without one keep their number. */
	enableRowSelection?: Selectable
	/** Row numbers on or off for the whole table. */
	enableRowNumbers?: boolean
	initialSorting?: SortingState
	initialGrouping?: GroupingState
	lanesPosition?: TableCoreUiProps['lanesPosition']
}

export const RowNumbersTable = ({
	rows,
	layout = 'utility',
	enableRowSelection = 'all',
	enableRowNumbers = true,
	initialSorting = undefined,
	initialGrouping = undefined,
	lanesPosition = undefined,
}: Props) => {
	const { columns, pinned } = LAYOUTS[layout]
	const columnPinning: ColumnPinningState = { start: pinned, end: [] }

	return (
		<TableCore
			key={JSON.stringify([layout, enableRowSelection, initialGrouping])}
			features={features}
			data={rows}
			columns={columns}
			getRowId={(employee) => employee.id}
			enableRowSelection={selectable(enableRowSelection) as never}
			enableRowNumbers={enableRowNumbers}
			lanesPosition={lanesPosition}
			autoResetExpanded={false}
			initialState={{
				columnPinning,
				sorting: initialSorting ?? [],
				grouping: initialGrouping ?? [],
				expanded: true,
			}}
		/>
	)
}
`,a=(e,n)=>e.querySelector(`[role="row"][aria-rowindex="${n+2}"]`),c=e=>(e==null?void 0:e.querySelector("[data-row-number]"))??null,b=e=>{const n=(e==null?void 0:e.querySelector('[data-part="checkbox"]'))??null;return(n==null?void 0:n.closest("[data-on-hover]"))??n},f=e=>getComputedStyle(e),Ke=async e=>{var n,o;await u(e),r(((n=c(a(e,0)))==null?void 0:n.textContent)==="1","row 1 is numbered 1"),r(((o=c(a(e,2)))==null?void 0:o.textContent)==="3","row 3 is numbered 3"),r(f(b(a(e,2))).opacity==="0","a number, no checkbox"),await ke.click(fe(b(a(e,2))).getByRole("checkbox")),await E(()=>f(b(a(e,2))).opacity==="1","selected: the ticked checkbox shows"),r(f(c(a(e,2))).visibility==="hidden","number hides"),r(f(e.querySelector("[data-row-number-hash]")).visibility==="hidden",'the header "#" gives way to select all')},Qe=async e=>{var o,l,i;await u(e);const n=d=>{var y,j;return(j=(y=a(e,d))==null?void 0:y.querySelector('[data-column-id="name"]'))==null?void 0:j.textContent};r(!((o=n(0))!=null&&o.startsWith("1. ")),`the data order is gone, ${n(0)}`),r(((l=c(a(e,0)))==null?void 0:l.textContent)==="1","the first row is 1"),r(((i=c(a(e,1)))==null?void 0:i.textContent)==="2","the second row is 2")},en=async e=>{await u(e),r(c(a(e,0)),"numbers are drawn"),r(!e.querySelector('[data-part="checkbox"]'),"no checkboxes and no select all")},nn=async e=>{await u(e),r(b(a(e,0)),"checkboxes are drawn"),r(!e.querySelector("[data-row-number]"),"no numbers"),r(!e.querySelector("[data-row-number-hash]"),'no "#"'),r(f(b(a(e,0))).opacity==="1","always visible")},tn=async e=>{await u(e);const n=a(e,0);r(n.querySelector('[data-column-id="row-number"] [data-row-number]'),"the number column"),r(n.querySelector('[data-column-id="row-select"] [role="checkbox"]'),"the checkbox column")},on=async e=>{var o,l;await u(e);const n=(o=a(e,1))==null?void 0:o.querySelector('[data-column-id="name"]');r(((l=n.querySelector("[data-row-number]"))==null?void 0:l.textContent)==="2","number"),await ke.click(fe(n).getByRole("checkbox")),await E(()=>{var i;return((i=a(e,1))==null?void 0:i.getAttribute("data-selected"))==="true"},"ticking the checkbox in the cell selects the row")},rn=async e=>{var o;await u(e);const n=Te(e);n.scrollTop=n.scrollHeight,await ve(()=>r(a(e,1199),"the last row is drawn")),r(((o=c(a(e,1199)))==null?void 0:o.getAttribute("title"))==="1200","the full number is on hover")},an=async e=>{var o;await u(e);const n=l=>e.querySelector(l).getBoundingClientRect().x;await E(()=>e.querySelector("[data-lane-id]"),"a lane is drawn"),r(n('[data-lane-id="team"]')<n('[data-header-id="row-utility"]'),"the lane is before the utility column"),r(((o=c(a(e,0)))==null?void 0:o.textContent)==="1","numbers go across groups")},sn=async e=>{await u(e),r(b(a(e,0)),"the checkboxes stay"),r(!e.querySelector("[data-row-number]"),"no numbers"),r(!e.querySelector("[data-row-number-hash]"),'no "#"')},ln=async e=>{const n=e.canvasElement;await H(e,{enableRowNumbers:!1}),await E(()=>!n.querySelector("[data-row-number]")&&b(a(n,0)),"enableRowNumbers off: no numbers, the checkboxes stay"),await H(e,{enableRowNumbers:!0}),await E(()=>{var o;return((o=c(a(n,0)))==null?void 0:o.textContent)==="1"},"enableRowNumbers on: the numbers are back")},w={none:{value:[],code:"[]"},"by Team":{value:[{id:"team",desc:!1}],code:"[{ id: 'team', desc: false }]"},"by Country ↓":{value:[{id:"country",desc:!0}],code:"[{ id: 'country', desc: true }]"}},g={none:{value:[],code:"[]"},"by Team":{value:["team"],code:"['team']"},"by Team, then Role":{value:["team","role"],code:"['team', 'role']"}},cn=Ae({rowSelectionFeature:We,rowSortingFeature:Me,columnPinningFeature:je,columnGroupingFeature:Fe,rowExpandingFeature:Ue,groupRowsFeature:Ee,columnSizingFeature:Pe,groupedRowModel:Be(),expandedRowModel:qe(),sortedRowModel:_e(),sortFns:Ie,columnMeta:ze()}),s=Le(),un={ok:"Included",blocked:"Blocked",excluded:"Excluded"},k=[s.accessor("team",{header:"Team",size:120}),s.accessor("role",{header:"Role",size:150}),s.accessor(e=>un[e.state],{id:"status",header:"Status",size:120}),s.accessor("country",{header:"Country",size:120}),s.accessor("start",{header:"Start",size:110})],z=s.accessor("name",{header:"Name",size:200}),mn=s.accessor("name",{size:260,cell:e=>t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:10,minWidth:0},children:[t.jsx("span",{style:{width:26,textAlign:"right"},children:t.jsx(Ye,{context:e})}),t.jsx(Ve,{context:e}),t.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:e.row.original.name})]}),header:({table:e})=>t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:10,width:"100%"},children:[t.jsx("span",{style:{width:26}}),t.jsx(He,{table:e}),"Name"]}),meta:{plainHeader:!0}}),dn={utility:{columns:s.columns([S(s),z,...k]),pinned:[Ge,"name"]},numbers:{columns:s.columns([S(s,{parts:[M()]}),z,...k]),pinned:[M().columnId,"name"]},checkboxes:{columns:s.columns([S(s,{parts:[W()]}),z,...k]),pinned:[W().columnId,"name"]},separate:{columns:s.columns([S(s,{parts:[M()]}),S(s,{parts:[W()]}),z,...k]),pinned:[M().columnId,W().columnId,"name"]},inCell:{columns:s.columns([mn,...k]),pinned:["name"]}},bn=e=>e==="all"?!0:e==="none"?!1:n=>n.original.state!=="blocked",hn=({rows:e,layout:n="utility",enableRowSelection:o="all",enableRowNumbers:l=!0,initialSorting:i=void 0,initialGrouping:d=void 0,lanesPosition:y=void 0})=>{const{columns:j,pinned:Ce}=dn[n],Re={start:Ce,end:[]};return t.jsx(Oe,{features:cn,data:e,columns:j,getRowId:Ne=>Ne.id,enableRowSelection:bn(o),enableRowNumbers:l,lanesPosition:y,autoResetExpanded:!1,initialState:{columnPinning:Re,sorting:i??[],grouping:d??[],expanded:!0}},JSON.stringify([n,o,d]))},p=({hint:e,count:n=12,tall:o=!1,...l})=>{const i=$e.useMemo(()=>De(n).map((d,y)=>({...d,name:`${y+1}. ${d.name}`})),[n]);return t.jsx(Je,{hint:e,fit:o?"scroll":"content",children:t.jsx(hn,{rows:i,...l})})},[x]=Object.values([Ze]),pn={title:"Tables/Table Core/Features/Drafts/Row numbers",id:"tables-table-core-features-row-numbers",...Xe(x)},C={tags:["kb:row-numbers-numbers-and-checkboxes"],name:"1 · Utility column",parameters:{...F(x,"NumbersAndCheckboxes"),summary:"`createUtilityColumn`: the number turns into the checkbox on hover, on focus and when the row is selected."},args:{enableRowNumbers:!0,enableRowSelection:"all"},argTypes:{enableRowNumbers:{control:{type:"boolean"}},enableRowSelection:{control:{type:"radio"},options:["all","none","notBlocked"]}},render:e=>t.jsx(U,{args:e,children:t.jsx(p,{...e,hint:t.jsx(h,{text:"Hover a row: its number turns into a checkbox. Tick it: the ticked checkbox stays. The header shows **#** until you hover it or select a row."})})}),play:async e=>{m(e)||(await Ke(e.canvasElement),await ln(e))}},R={tags:["kb:row-numbers-screen-order"],name:"2 · Numbers follow the screen",parameters:{...F(x,"ScreenOrder",L({initialSorting:w})),summary:"A number is the place of the row on the screen, after sorting and grouping."},args:{initialSorting:"by Team"},argTypes:{initialSorting:q(w)},render:e=>t.jsx(U,{args:e,children:t.jsx(p,{initialSorting:_(w,e.initialSorting),hint:t.jsx(h,{text:"Name starts with the row's place in the data. Sorted by Team: the names are shuffled, the row numbers still go 1, 2, 3 from the top. Sort by another column — they follow what you see."})})}),play:async e=>{m(e)||await Qe(e.canvasElement)}},B=(e,n,o={})=>t.jsx(p,{layout:e,hint:t.jsx(h,{text:n}),...o}),N={tags:["kb:row-numbers-numbers-only"],name:"3 · Numbers only",parameters:{summary:"`createUtilityColumn` with the part `rowNumber()`: numbers, no checkboxes."},render:()=>B("numbers","`createUtilityColumn(helper, { parts: [rowNumber()] })`: numbers, no checkboxes; the header is **#**."),play:async e=>{m(e)||await en(e.canvasElement)}},T={tags:["kb:row-numbers-checkboxes-only"],name:"4 · Checkboxes only",parameters:{summary:"`createUtilityColumn` with the part `rowCheckbox()`: checkboxes, no numbers."},render:()=>B("checkboxes","`parts: [rowCheckbox()]`: no numbers, the checkboxes are always there, the header is *select all*."),play:async e=>{m(e)||await nn(e.canvasElement)}},v={tags:["kb:row-numbers-column-each"],name:"5 · A column each",parameters:{summary:"Numbers and checkboxes in two columns, in any place."},render:()=>B("separate","two `createUtilityColumn` columns, `rowNumber()` and `rowCheckbox()`: two columns, both frozen. Put them in any order or place."),play:async e=>{m(e)||await tn(e.canvasElement)}},G={tags:["kb:row-numbers-inside-any-cell"],name:"6 · Inside any cell",parameters:{summary:"`RowNumber`, `RowCheckbox` and `SelectAllCheckbox` in the cell and header you write."},render:()=>B("inCell","No utility column: `RowNumber`, `RowCheckbox` and `SelectAllCheckbox` sit in the Name cell and its header. Tick a row there."),play:async e=>{m(e)||await on(e.canvasElement)}},O={tags:["kb:row-numbers-large-numbers"],name:"7 · From 1000 on",parameters:{summary:"From row 1000 the number is cut with an ellipsis; the full one is on hover."},render:()=>t.jsx(p,{tall:!0,count:1200,hint:t.jsx(h,{text:"1 200 rows: scroll to the bottom. From row 1000 the number is cut with an ellipsis; hover it to see the full number."})}),play:async e=>{m(e)||await rn(e.canvasElement)}},A={tags:["kb:row-numbers-when-grouped"],name:"8 · When grouped",parameters:{...F(x,"WhenGrouped",L({initialGrouping:g})),summary:"Grouped, the lane comes first and the utility column right after it; numbers go across groups."},args:{initialGrouping:"by Team",lanesPosition:"start"},argTypes:{initialGrouping:q(g),lanesPosition:{control:{type:"radio"},options:["start","end"]}},render:e=>t.jsx(U,{args:e,children:t.jsx(p,{...e,initialGrouping:_(g,e.initialGrouping),count:12,hint:t.jsx(h,{text:"Grouped by Team. The lane comes first and the utility column right after it, as in Resource Plan; numbers still go 1, 2, 3 across the groups. `lanesPosition` moves the lane block."})})}),play:async e=>{m(e)||await an(e.canvasElement)}},I={tags:["kb:row-numbers-numbers-off"],name:"9 · Numbers off",parameters:{...F(x,"NumbersOff"),summary:"`enableRowNumbers` off: the utility column keeps only its checkboxes."},args:{enableRowNumbers:!1},argTypes:{enableRowNumbers:{control:{type:"boolean"}}},render:e=>t.jsx(U,{args:e,children:t.jsx(p,{...e,hint:t.jsx(h,{text:"`enableRowNumbers` is off: no numbers and no **#**; the utility column keeps its checkboxes."})})}),play:async e=>{m(e)||await sn(e.canvasElement)}},P={tags:["kb:row-numbers-playground"],name:"Playground",parameters:F(x,"Playground",L({initialSorting:w,initialGrouping:g})),args:{layout:"utility",enableRowSelection:"all",enableRowNumbers:!0,initialSorting:"none",initialGrouping:"none",lanesPosition:"start"},argTypes:{layout:{options:["utility","numbers","checkboxes","separate","inCell"],control:"radio"},enableRowSelection:{options:["all","none","notBlocked"],control:"radio"},initialSorting:q(w),initialGrouping:q(g),lanesPosition:{control:"radio",options:["start","end"]}},render:e=>t.jsx(U,{args:e,children:t.jsx(p,{...e,initialSorting:_(w,e.initialSorting),initialGrouping:_(g,e.initialGrouping),count:20,hint:t.jsx(h,{text:"Where the blocks go, who has a checkbox, row numbers on or off, the sorting and the grouping the table starts with — in the controls below."})})})};var Y,V,$;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-numbers-and-checkboxes'],
  name: '1 · Utility column',
  parameters: {
    ...sceneCodeWith(tableSource, 'NumbersAndCheckboxes'),
    summary: '\`createUtilityColumn\`: the number turns into the checkbox on hover, on focus and when the row is selected.'
  },
  args: {
    enableRowNumbers: true,
    enableRowSelection: 'all'
  },
  argTypes: {
    enableRowNumbers: {
      control: {
        type: 'boolean'
      }
    },
    enableRowSelection: {
      control: {
        type: 'radio'
      },
      options: ['all', 'none', 'notBlocked']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Hover a row: its number turns into a checkbox. Tick it: the ticked checkbox stays. The header shows **#** until you hover it or select a row." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await utilityAct(ctx.canvasElement);
    await numbersControlAct(ctx);
  }
}`,...($=(V=C.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var D,J,X;R.parameters={...R.parameters,docs:{...(D=R.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-screen-order'],
  name: '2 · Numbers follow the screen',
  parameters: {
    ...sceneCodeWith(tableSource, 'ScreenOrder', presetCodes({
      initialSorting: SORTINGS
    })),
    summary: 'A number is the place of the row on the screen, after sorting and grouping.'
  },
  args: {
    initialSorting: 'by Team'
  },
  argTypes: {
    initialSorting: presetControl(SORTINGS)
  },
  render: args => <Remount args={args}>
            <Scene initialSorting={presetValue(SORTINGS, args.initialSorting)} hint={<Md text="Name starts with the row's place in the data. Sorted by Team: the names are shuffled, the row numbers still go 1, 2, 3 from the top. Sort by another column — they follow what you see." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await screenOrderAct(ctx.canvasElement);
  }
}`,...(X=(J=R.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,K,Q;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-numbers-only'],
  name: '3 · Numbers only',
  parameters: {
    summary: '\`createUtilityColumn\` with the part \`rowNumber()\`: numbers, no checkboxes.'
  },
  render: () => layoutScene('numbers', '\`createUtilityColumn(helper, { parts: [rowNumber()] })\`: numbers, no checkboxes; the header is **#**.'),
  play: async ctx => {
    if (checksOff(ctx)) return;
    await numbersOnlyAct(ctx.canvasElement);
  }
}`,...(Q=(K=N.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var ee,ne,te;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-checkboxes-only'],
  name: '4 · Checkboxes only',
  parameters: {
    summary: '\`createUtilityColumn\` with the part \`rowCheckbox()\`: checkboxes, no numbers.'
  },
  render: () => layoutScene('checkboxes', '\`parts: [rowCheckbox()]\`: no numbers, the checkboxes are always there, the header is *select all*.'),
  play: async ctx => {
    if (checksOff(ctx)) return;
    await checkboxesOnlyAct(ctx.canvasElement);
  }
}`,...(te=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,re,ae;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-column-each'],
  name: '5 · A column each',
  parameters: {
    summary: 'Numbers and checkboxes in two columns, in any place.'
  },
  render: () => layoutScene('separate', 'two \`createUtilityColumn\` columns, \`rowNumber()\` and \`rowCheckbox()\`: two columns, both frozen. Put them in any order or place.'),
  play: async ctx => {
    if (checksOff(ctx)) return;
    await columnEachAct(ctx.canvasElement);
  }
}`,...(ae=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,le,ie;G.parameters={...G.parameters,docs:{...(se=G.parameters)==null?void 0:se.docs,source:{originalSource:"{\n  tags: ['kb:row-numbers-inside-any-cell'],\n  name: '6 · Inside any cell',\n  parameters: {\n    summary: '`RowNumber`, `RowCheckbox` and `SelectAllCheckbox` in the cell and header you write.'\n  },\n  render: () => layoutScene('inCell', 'No utility column: `RowNumber`, `RowCheckbox` and `SelectAllCheckbox` sit in the Name cell and its header. Tick a row there.'),\n  play: async ctx => {\n    if (checksOff(ctx)) return;\n    await inCellAct(ctx.canvasElement);\n  }\n}",...(ie=(le=G.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,ue,me;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-large-numbers'],
  name: '7 · From 1000 on',
  parameters: {
    summary: 'From row 1000 the number is cut with an ellipsis; the full one is on hover.'
  },
  render: () => <Scene tall count={1200} hint={<Md text="1 200 rows: scroll to the bottom. From row 1000 the number is cut with an ellipsis; hover it to see the full number." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await largeAct(ctx.canvasElement);
  }
}`,...(me=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var de,be,he;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-when-grouped'],
  name: '8 · When grouped',
  parameters: {
    ...sceneCodeWith(tableSource, 'WhenGrouped', presetCodes({
      initialGrouping: GROUPINGS
    })),
    summary: 'Grouped, the lane comes first and the utility column right after it; numbers go across groups.'
  },
  args: {
    initialGrouping: 'by Team',
    lanesPosition: 'start'
  },
  argTypes: {
    initialGrouping: presetControl(GROUPINGS),
    lanesPosition: {
      control: {
        type: 'radio'
      },
      options: ['start', 'end']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} initialGrouping={presetValue(GROUPINGS, args.initialGrouping)} count={12} hint={<Md text="Grouped by Team. The lane comes first and the utility column right after it, as in Resource Plan; numbers still go 1, 2, 3 across the groups. \`lanesPosition\` moves the lane block." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await groupedAct(ctx.canvasElement);
  }
}`,...(he=(be=A.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var pe,ye,we;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-numbers-off'],
  name: '9 · Numbers off',
  parameters: {
    ...sceneCodeWith(tableSource, 'NumbersOff'),
    summary: '\`enableRowNumbers\` off: the utility column keeps only its checkboxes.'
  },
  args: {
    enableRowNumbers: false
  },
  argTypes: {
    enableRowNumbers: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="\`enableRowNumbers\` is off: no numbers and no **#**; the utility column keeps its checkboxes." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await numbersOffAct(ctx.canvasElement);
  }
}`,...(we=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ge,xe,Se;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-playground'],
  name: 'Playground',
  parameters: sceneCodeWith(tableSource, 'Playground', presetCodes({
    initialSorting: SORTINGS,
    initialGrouping: GROUPINGS
  })),
  args: {
    layout: 'utility',
    enableRowSelection: 'all',
    enableRowNumbers: true,
    initialSorting: 'none',
    initialGrouping: 'none',
    lanesPosition: 'start'
  },
  argTypes: {
    layout: {
      options: ['utility', 'numbers', 'checkboxes', 'separate', 'inCell'],
      control: 'radio'
    },
    enableRowSelection: {
      options: ['all', 'none', 'notBlocked'],
      control: 'radio'
    },
    initialSorting: presetControl(SORTINGS),
    initialGrouping: presetControl(GROUPINGS),
    lanesPosition: {
      control: 'radio',
      options: ['start', 'end']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} initialSorting={presetValue(SORTINGS, args.initialSorting)} initialGrouping={presetValue(GROUPINGS, args.initialGrouping)} count={20} hint={<Md text="Where the blocks go, who has a checkbox, row numbers on or off, the sorting and the grouping the table starts with — in the controls below." />} />
        </Remount>
}`,...(Se=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};const yn=["NumbersAndCheckboxes","ScreenOrder","NumbersOnly","CheckboxesOnly","ColumnEach","InsideAnyCell","LargeNumbers","WhenGrouped","NumbersOff","Playground"],gn=Object.freeze(Object.defineProperty({__proto__:null,CheckboxesOnly:T,ColumnEach:v,InsideAnyCell:G,LargeNumbers:O,NumbersAndCheckboxes:C,NumbersOff:I,NumbersOnly:N,Playground:P,ScreenOrder:R,WhenGrouped:A,__namedExportsOrder:yn,default:pn},Symbol.toStringTag,{value:"Module"}));export{gn as S};
