import{j as t,Y,_ as $,cG as Q,r as p,aF as N,aK as S,b8 as V,a0 as J,c4 as K,c5 as Z,$ as X,Z as ee,bB as oe,a1 as te,a3 as ae,a5 as re,ba as le,bb as ne,bc as se,bi as ce,bE as ie,bj as de,bf as ue,bg as me,aI as we,aG as he,aJ as pe,cH as be,cI as T,cJ as E,cK as H,aL as ye,aN as O,cL as ge,v as fe,c as j,cM as B,u as k,P as R,E as Ce}from"./products-CTiDOXRn.js";import{d as D,e as u,P as xe}from"./primitives-play-COclK1bJ.js";const Se=`// A table put together from the pieces alone: a plain array, React state, no
// TanStack and none of the table's own logic. The page "Primitives › Overview"
// shows this file as it is (Code), so it imports the pieces from the one entry
// and nothing else of ours.
import React, { useMemo, useState } from 'react'

import {
	BodyCell,
	BodyRow,
	Checkbox,
	HeaderCell,
	HeaderLabelButton,
	HeaderRow,
	PlainHeaderContent,
	TableRoot,
	TableScroller,
	RowNumberLabel,
	UtilityCell,
	UtilitySwap,
} from '@pnl-simulation/table-core/primitives'

type Person = { id: string; name: string; team: string; salary: number }

const PEOPLE: Person[] = [
	{ id: 'p1', name: 'Ada Lovelace', team: 'Dev', salary: 120000 },
	{ id: 'p2', name: 'Alan Turing', team: 'QA', salary: 140000 },
	{ id: 'p3', name: 'Grace Hopper', team: 'Dev', salary: 100000 },
	{ id: 'p4', name: 'Linus Torvalds', team: 'Ops', salary: 110000 },
]

type ColumnId = 'name' | 'team' | 'salary'
const COLUMNS: {
	id: ColumnId
	label: string
	width: number
	align?: 'right'
}[] = [
	{ id: 'name', label: 'Name', width: 190 },
	{ id: 'team', label: 'Team', width: 120 },
	{ id: 'salary', label: 'Salary', width: 120, align: 'right' },
]

const ENGAGED = { hover: true, focus: true, selected: true } as const
const UTILITY_WIDTH = 48
const ROW_HEIGHT = 48
const WIDTH = UTILITY_WIDTH + COLUMNS.reduce((sum, c) => sum + c.width, 0)

type Sort = { id: ColumnId; desc: boolean } | null

const compare = (a: Person, b: Person, id: ColumnId) =>
	id === 'salary' ? a.salary - b.salary : a[id].localeCompare(b[id])

const sorted = (people: Person[], sort: Sort) =>
	sort
		? [...people].sort((a, b) => compare(a, b, sort.id) * (sort.desc ? -1 : 1))
		: people

/** The direction a column is sorted in, or none. */
const directionOf = (sort: Sort, id: ColumnId) => {
	if (sort?.id !== id) return false

	return sort.desc ? 'desc' : 'asc'
}

export const PeopleTable = () => {
	const [sort, setSort] = useState<Sort>(null)
	const [selected, setSelected] = useState<ReadonlySet<string>>(new Set())
	const rows = useMemo(() => sorted(PEOPLE, sort), [sort])
	const all = selected.size === rows.length
	const some = selected.size > 0 && !all

	const toggleSort = (id: ColumnId) =>
		setSort((old) =>
			old?.id === id && !old.desc ? { id, desc: true } : { id, desc: false }
		)
	const toggleRow = (id: string, on: boolean) =>
		setSelected((old) => {
			const next = new Set(old)
			if (on) next.add(id)
			else next.delete(id)

			return next
		})

	return (
		<TableRoot height="auto" width={WIDTH}>
			<TableScroller
				role="grid"
				rowCount={rows.length + 1}
				colCount={COLUMNS.length + 1}
				contentWidth={WIDTH}
				contentHeight={rows.length * ROW_HEIGHT}
			>
				<HeaderRow width={WIDTH}>
					<HeaderCell columnId="select" width={UTILITY_WIDTH} align="center">
						<PlainHeaderContent>
							<UtilityCell selected={selected.size > 0}>
								<UtilitySwap
									states={ENGAGED}
									base={<span data-row-number-hash>#</span>}
									instead={
										<Checkbox
											label="Select all rows"
											checked={all}
											indeterminate={some}
											onChange={(on) =>
												setSelected(new Set(on ? rows.map((r) => r.id) : []))
											}
										/>
									}
								/>
							</UtilityCell>
						</PlainHeaderContent>
					</HeaderCell>
					{COLUMNS.map((column, index) => (
						<HeaderCell
							key={column.id}
							columnId={column.id}
							width={column.width}
							align={column.align}
							lastColumn={index === COLUMNS.length - 1}
							sorted={directionOf(sort, column.id)}
						>
							<HeaderLabelButton
								sortable
								sort={{ dir: directionOf(sort, column.id) }}
								sortIcon={directionOf(sort, column.id) === 'desc' ? '▼' : '▲'}
								onClick={() => toggleSort(column.id)}
							>
								{column.label}
							</HeaderLabelButton>
						</HeaderCell>
					))}
				</HeaderRow>
				{rows.map((row, rowIndex) => (
					<BodyRow
						key={row.id}
						rowId={row.id}
						selected={selected.has(row.id)}
						odd={rowIndex % 2 === 1}
						top={rowIndex * ROW_HEIGHT}
						height={ROW_HEIGHT}
						width={WIDTH}
					>
						<BodyCell
							rowId={row.id}
							columnId="select"
							rowIndex={rowIndex}
							colIndex={0}
							width={UTILITY_WIDTH}
							align="center"
							role="gridcell"
						>
							<UtilityCell selected={selected.has(row.id)}>
								<UtilitySwap
									states={ENGAGED}
									base={<RowNumberLabel value={rowIndex + 1} />}
									instead={
										<Checkbox
											label="Select row"
											checked={selected.has(row.id)}
											onChange={(on) => toggleRow(row.id, on)}
										/>
									}
								/>
							</UtilityCell>
						</BodyCell>
						{COLUMNS.map((column, index) => (
							<BodyCell
								key={column.id}
								rowId={row.id}
								columnId={column.id}
								rowIndex={rowIndex}
								colIndex={index + 1}
								width={column.width}
								align={column.align}
								role="gridcell"
							>
								{row[column.id]}
							</BodyCell>
						))}
					</BodyRow>
				))}
			</TableScroller>
		</TableRoot>
	)
}
`,ke=`// TableCore with pieces of your own: \`slots\` takes a component per piece. A
// slot gets the props of the piece it replaces (\`data-*\`, \`role\` and \`ref\`
// included) and puts them on its root: most wrap our piece and add a look
// (\`headerCell\`, \`bodyRow\`, \`groupSummary\`); one may draw the piece itself, as
// long as it keeps what the table reads (\`checkbox\`, \`rowNumber\`).
// An icon in one place only goes to the factory of that place: here \`groupingControl({ icon })\`
// draws the Group button with an icon of ours; the menu and the chip keep the registry's.
// The page "Primitives › Overview" shows this file as it is (Code).
import React, {
	forwardRef,
	type ComponentProps,
	type ComponentPropsWithoutRef,
} from 'react'

import {
	TableCore,
	TableToolbar,
	columnGroupingFeature,
	columnOrderingFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	columnsControl,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	createUtilityColumn,
	groupRowsFeature,
	groupingControl,
	rowExpandingFeature,
	rowSelectionFeature,
	rowSortingFeature,
	sortingControl,
	tableFeatures,
	type TableCoreSlots,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'
import {
	BodyRow,
	GroupSummary,
	HeaderCell,
	type CheckboxProps,
	type RowNumberLabelProps,
} from '@pnl-simulation/table-core/primitives'

import { sceneSortFns } from '../../kit/sort-fns'

type Employee = { id: string; name: string; team: string; role: string }

const EMPLOYEES: Employee[] = [
	{ id: 'e1', name: 'Ada Lovelace', team: 'Dev', role: 'Engineer' },
	{ id: 'e2', name: 'Alan Turing', team: 'QA', role: 'Analyst' },
	{ id: 'e3', name: 'Grace Hopper', team: 'Dev', role: 'Lead' },
	{ id: 'e4', name: 'Linus Torvalds', team: 'Ops', role: 'Engineer' },
	{ id: 'e5', name: 'Margaret Hamilton', team: 'Dev', role: 'Architect' },
	{ id: 'e6', name: 'Dennis Ritchie', team: 'Ops', role: 'Engineer' },
]

// A wrapper: our piece with the props it was given, and a look of ours.
const OwnHeaderCell = forwardRef<
	HTMLDivElement,
	ComponentPropsWithoutRef<typeof HeaderCell>
>((props, ref) => (
	<HeaderCell
		ref={ref}
		{...props}
		data-own="headerCell"
		sx={{ background: '#EAF6FC', borderBottom: '2px solid #009ECC' }}
	/>
))
OwnHeaderCell.displayName = 'OwnHeaderCell'

const OwnBodyRow = forwardRef<
	HTMLDivElement,
	ComponentPropsWithoutRef<typeof BodyRow>
>((props, ref) => (
	<BodyRow
		ref={ref}
		{...props}
		data-own="bodyRow"
		sx={{ '&:hover': { background: '#FFF8E1' } }}
	/>
))
OwnBodyRow.displayName = 'OwnBodyRow'

const OwnGroupSummary = (props: ComponentProps<typeof GroupSummary>) => (
	<GroupSummary
		{...props}
		data-own="groupSummary"
		style={{ fontWeight: 700 }}
	/>
)

const glyph = (checked: boolean, indeterminate: boolean) => {
	if (checked) return '☑'

	return indeterminate ? '▣' : '☐'
}

// A piece drawn by yourself: it keeps \`role\`, \`aria-checked\` and \`aria-label\`.
const OwnCheckbox = ({
	label,
	checked,
	indeterminate = false,
	disabled,
	onChange,
	tabIndex,
}: CheckboxProps) => (
	<button
		type="button"
		data-own="checkbox"
		role="checkbox"
		aria-label={label}
		aria-checked={indeterminate && !checked ? 'mixed' : checked}
		disabled={disabled}
		tabIndex={tabIndex}
		onClick={() => onChange(!checked)}
	>
		{glyph(checked, indeterminate)}
	</button>
)

// The number keeps \`data-row-number\`: the table swaps it for the checkbox by it.
const OwnRowNumber = ({ value }: RowNumberLabelProps) => (
	<b data-own="rowNumber" data-row-number>
		{value}
	</b>
)

const slots: TableCoreSlots = {
	headerCell: OwnHeaderCell,
	bodyRow: OwnBodyRow,
	groupSummary: OwnGroupSummary,
	checkbox: OwnCheckbox,
	rowNumber: OwnRowNumber,
}

const features = tableFeatures({
	rowSelectionFeature,
	rowSortingFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	columnOrderingFeature,
	columnVisibilityFeature,
	columnSizingFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
})

const helper = createColumnHelper<typeof features, Employee>()
const columns = helper.columns([
	createUtilityColumn(helper),
	helper.accessor('name', { header: 'Name', size: 190 }),
	helper.accessor('team', { header: 'Team', size: 130 }),
	helper.accessor('role', { header: 'Role', size: 160 }),
])

/** Our own picture for the Group button of the toolbar. */
const OwnGroupIcon = () => (
	<svg
		data-own-icon="group"
		viewBox="0 0 18 18"
		width={18}
		height={18}
		aria-hidden
	>
		<rect x="2" y="2" width="6" height="6" fill="currentColor" />
		<rect x="10" y="10" width="6" height="6" fill="currentColor" />
	</svg>
)

const controls = [
	groupingControl({ icon: <OwnGroupIcon /> }),
	sortingControl(),
	columnsControl(),
]

const toolbar: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar table={table} controls={controls} />
)

export const OwnPiecesTable = () => (
	<div style={{ height: 400 }}>
		<TableCore
			features={features}
			data={EMPLOYEES}
			columns={columns}
			getRowId={(employee) => employee.id}
			autoResetExpanded={false}
			initialState={{ grouping: ['team'], expanded: true }}
			slots={slots}
			toolbar={toolbar}
		/>
	</div>
)
`,Re=[{id:"e1",name:"Ada Lovelace",team:"Dev",role:"Engineer"},{id:"e2",name:"Alan Turing",team:"QA",role:"Analyst"},{id:"e3",name:"Grace Hopper",team:"Dev",role:"Lead"},{id:"e4",name:"Linus Torvalds",team:"Ops",role:"Engineer"},{id:"e5",name:"Margaret Hamilton",team:"Dev",role:"Architect"},{id:"e6",name:"Dennis Ritchie",team:"Ops",role:"Engineer"}],U=p.forwardRef((e,o)=>t.jsx(S,{ref:o,...e,"data-own":"headerCell",sx:{background:"#EAF6FC",borderBottom:"2px solid #009ECC"}}));U.displayName="OwnHeaderCell";const _=p.forwardRef((e,o)=>t.jsx(N,{ref:o,...e,"data-own":"bodyRow",sx:{"&:hover":{background:"#FFF8E1"}}}));_.displayName="OwnBodyRow";const ve=e=>t.jsx(Q,{...e,"data-own":"groupSummary",style:{fontWeight:700}}),Te=(e,o)=>e?"☑":o?"▣":"☐",Ee=({label:e,checked:o,indeterminate:r=!1,disabled:i,onChange:s,tabIndex:n})=>t.jsx("button",{type:"button","data-own":"checkbox",role:"checkbox","aria-label":e,"aria-checked":r&&!o?"mixed":o,disabled:i,tabIndex:n,onClick:()=>s(!o),children:Te(o,r)}),He=({value:e})=>t.jsx("b",{"data-own":"rowNumber","data-row-number":!0,children:e}),Oe={headerCell:U,bodyRow:_,groupSummary:ve,checkbox:Ee,rowNumber:He},Ie=J({rowSelectionFeature:ie,rowSortingFeature:ce,columnGroupingFeature:se,rowExpandingFeature:ne,groupRowsFeature:le,columnOrderingFeature:re,columnVisibilityFeature:ae,columnSizingFeature:te,groupedRowModel:me(),expandedRowModel:ue(),sortedRowModel:de(),sortFns:oe}),w=ee(),Ae=w.columns([V(w),w.accessor("name",{header:"Name",size:190}),w.accessor("team",{header:"Team",size:130}),w.accessor("role",{header:"Role",size:160})]),Fe=()=>t.jsxs("svg",{"data-own-icon":"group",viewBox:"0 0 18 18",width:18,height:18,"aria-hidden":!0,children:[t.jsx("rect",{x:"2",y:"2",width:"6",height:"6",fill:"currentColor"}),t.jsx("rect",{x:"10",y:"10",width:"6",height:"6",fill:"currentColor"})]}),Pe=[K({icon:t.jsx(Fe,{})}),Z(),X()],Le=e=>t.jsx($,{table:e,controls:Pe}),Ge=()=>t.jsx("div",{style:{height:400},children:t.jsx(Y,{features:Ie,data:Re,columns:Ae,getRowId:e=>e.id,autoResetExpanded:!1,initialState:{grouping:["team"],expanded:!0},slots:Oe,toolbar:Le})}),Me=[{id:"p1",name:"Ada Lovelace",team:"Dev",salary:12e4},{id:"p2",name:"Alan Turing",team:"QA",salary:14e4},{id:"p3",name:"Grace Hopper",team:"Dev",salary:1e5},{id:"p4",name:"Linus Torvalds",team:"Ops",salary:11e4}],h=[{id:"name",label:"Name",width:190},{id:"team",label:"Team",width:120},{id:"salary",label:"Salary",width:120,align:"right"}],I={hover:!0,focus:!0,selected:!0},v=48,C=48,y=v+h.reduce((e,o)=>e+o.width,0),Ne=(e,o,r)=>r==="salary"?e.salary-o.salary:e[r].localeCompare(o[r]),je=(e,o)=>o?[...e].sort((r,i)=>Ne(r,i,o.id)*(o.desc?-1:1)):e,x=(e,o)=>(e==null?void 0:e.id)!==o?!1:e.desc?"desc":"asc",Be=()=>{const[e,o]=p.useState(null),[r,i]=p.useState(new Set),s=p.useMemo(()=>je(Me,e),[e]),n=r.size===s.length,c=r.size>0&&!n,b=a=>o(l=>(l==null?void 0:l.id)===a&&!l.desc?{id:a,desc:!0}:{id:a,desc:!1}),z=(a,l)=>i(d=>{const m=new Set(d);return l?m.add(a):m.delete(a),m});return t.jsx(we,{height:"auto",width:y,children:t.jsxs(he,{role:"grid",rowCount:s.length+1,colCount:h.length+1,contentWidth:y,contentHeight:s.length*C,children:[t.jsxs(pe,{width:y,children:[t.jsx(S,{columnId:"select",width:v,align:"center",children:t.jsx(be,{children:t.jsx(T,{selected:r.size>0,children:t.jsx(E,{states:I,base:t.jsx("span",{"data-row-number-hash":!0,children:"#"}),instead:t.jsx(H,{label:"Select all rows",checked:n,indeterminate:c,onChange:a=>i(new Set(a?s.map(l=>l.id):[]))})})})})}),h.map((a,l)=>t.jsx(S,{columnId:a.id,width:a.width,align:a.align,lastColumn:l===h.length-1,sorted:x(e,a.id),children:t.jsx(ye,{sortable:!0,sort:{dir:x(e,a.id)},sortIcon:x(e,a.id)==="desc"?"▼":"▲",onClick:()=>b(a.id),children:a.label})},a.id))]}),s.map((a,l)=>t.jsxs(N,{rowId:a.id,selected:r.has(a.id),odd:l%2===1,top:l*C,height:C,width:y,children:[t.jsx(O,{rowId:a.id,columnId:"select",rowIndex:l,colIndex:0,width:v,align:"center",role:"gridcell",children:t.jsx(T,{selected:r.has(a.id),children:t.jsx(E,{states:I,base:t.jsx(ge,{value:l+1}),instead:t.jsx(H,{label:"Select row",checked:r.has(a.id),onChange:d=>z(a.id,d)})})})}),h.map((d,m)=>t.jsx(O,{rowId:a.id,columnId:d.id,rowIndex:l,colIndex:m+1,width:d.width,align:d.align,role:"gridcell",children:a[d.id]},d.id))]},a.id))]})})},q=Object.assign({"./assemble-table.tsx":Se,"./replace-pieces.tsx":ke}),De=q["./assemble-table.tsx"],Ue=q["./replace-pieces.tsx"],W=e=>{const o=()=>e;return{sceneCode:o,docs:{source:Ce(o)}}},ze={title:"Tables/Table Core/Primitives/Assemble",decorators:[fe],parameters:xe("Two ways to use the pieces: put a table together from them alone, on a plain array; or give TableCore pieces of your own through slots. The Code panel is the whole file the scene renders.")},_e=e=>new Set(Array.from(e.querySelectorAll("[data-own]")).map(o=>o.getAttribute("data-own"))),g={tags:["kb:primitives-assemble-yourself"],name:"Assemble yourself",parameters:W(De),render:()=>t.jsx(Be,{}),play:async e=>{if(j(e))return;const o=e.canvasElement;await D(o,"[role=columnheader]"),u(o.querySelectorAll("[role=columnheader]").length===4,"a header cell for the utility column and each of the three columns");const r=Array.from(o.querySelectorAll("[role=row][data-row-id]"));u(r.length===4,"a row for each person"),r.forEach(c=>B(c,"bodyRow"));const i=()=>Array.from(o.querySelectorAll('[data-column-id="name"]')).map(c=>c.textContent),s=Array.from(o.querySelectorAll("[data-header-label]")).find(c=>{var b;return(b=c.textContent)==null?void 0:b.includes("Salary")});await k.click(s),await R(()=>u(i()[0]==="Grace Hopper","a click on Salary sorts, lowest first"));const n=o.querySelector('[role=checkbox][aria-label="Select row"]');await k.click(n),await R(()=>{var c;return u(((c=o.querySelector('[aria-label="Select all rows"]'))==null?void 0:c.getAttribute("aria-checked"))==="mixed","one row ticked: select all is mixed")})}},f={tags:["kb:primitives-replace-a-piece"],name:"Replace a piece",parameters:W(Ue),render:()=>t.jsx(Ge,{}),play:async e=>{if(j(e))return;const o=e.canvasElement;await D(o,'[data-own="bodyRow"]');const r=_e(o);for(const n of["headerCell","bodyRow","groupSummary","checkbox","rowNumber"])u(r.has(n),`your own ${n} is drawn`);const i=["headerCell","bodyRow","checkbox","rowNumber"];for(const n of i)o.querySelectorAll(`[data-own="${n}"]`).forEach(c=>B(c,n));u(o.querySelector("[data-header-id]:not([data-own])")===null,"every header cell is yours"),u(o.querySelector('[data-control="group"] [data-own-icon="group"]')!==null,"the Group button has the icon of its own factory");const s=o.querySelector('[data-own="checkbox"][aria-label="Select row"]');await k.click(s),await R(()=>{var n;return u(s.getAttribute("aria-checked")==="true"||((n=o.querySelector('[data-own="checkbox"][aria-label="Select row"]'))==null?void 0:n.getAttribute("aria-checked"))==="true","your own checkbox selects the row")})}};var A,F,P;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['kb:primitives-assemble-yourself'],
  name: 'Assemble yourself',
  parameters: wholeFile(assembleSource),
  render: () => <PeopleTable />,
  play: async (ctx: PlayContext) => {
    if (checksOff(ctx)) return;
    const canvas = ctx.canvasElement;
    await found(canvas, '[role=columnheader]');
    check(canvas.querySelectorAll('[role=columnheader]').length === 4, 'a header cell for the utility column and each of the three columns');
    const rows = Array.from(canvas.querySelectorAll('[role=row][data-row-id]'));
    check(rows.length === 4, 'a row for each person');
    rows.forEach(row => checkPieceContract(row, 'bodyRow'));
    const names = () => Array.from(canvas.querySelectorAll('[data-column-id="name"]')).map(el => el.textContent);
    const salary = Array.from(canvas.querySelectorAll<HTMLButtonElement>('[data-header-label]')).find(b => b.textContent?.includes('Salary')) as HTMLButtonElement;
    await userEvent.click(salary);
    await waitFor(() => check(names()[0] === 'Grace Hopper', 'a click on Salary sorts, lowest first'));
    const first = canvas.querySelector('[role=checkbox][aria-label="Select row"]') as HTMLElement;
    await userEvent.click(first);
    await waitFor(() => check(canvas.querySelector('[aria-label="Select all rows"]')?.getAttribute('aria-checked') === 'mixed', 'one row ticked: select all is mixed'));
  }
}`,...(P=(F=g.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var L,G,M;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['kb:primitives-replace-a-piece'],
  name: 'Replace a piece',
  parameters: wholeFile(ownPiecesSource),
  render: () => <OwnPiecesTable />,
  play: async (ctx: PlayContext) => {
    if (checksOff(ctx)) return;
    const canvas = ctx.canvasElement;
    await found(canvas, '[data-own="bodyRow"]');
    const marks = pieceMarks(canvas);
    for (const key of ['headerCell', 'bodyRow', 'groupSummary', 'checkbox', 'rowNumber']) check(marks.has(key), \`your own \${key} is drawn\`);
    const keeps = ['headerCell', 'bodyRow', 'checkbox', 'rowNumber'] as const;
    for (const piece of keeps) canvas.querySelectorAll(\`[data-own="\${piece}"]\`).forEach(el => checkPieceContract(el, piece));
    check(canvas.querySelector('[data-header-id]:not([data-own])') === null, 'every header cell is yours');
    check(canvas.querySelector('[data-control="group"] [data-own-icon="group"]') !== null, 'the Group button has the icon of its own factory');
    const own = canvas.querySelector('[data-own="checkbox"][aria-label="Select row"]') as HTMLElement;
    await userEvent.click(own);
    await waitFor(() => check(own.getAttribute('aria-checked') === 'true' || canvas.querySelector('[data-own="checkbox"][aria-label="Select row"]')?.getAttribute('aria-checked') === 'true', 'your own checkbox selects the row'));
  }
}`,...(M=(G=f.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const Ye=["AssembleYourself","ReplaceAPiece"];export{g as AssembleYourself,f as ReplaceAPiece,Ye as __namedExportsOrder,ze as default};
