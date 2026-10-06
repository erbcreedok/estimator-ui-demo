import{j as r}from"./jsx-runtime-Cnbe3ryz.js";import{u as x,w as S}from"./index-iBx7lKYd.js";import{d as L,e as m,g as j,P as _}from"./primitives-play-Dhsl9Hk3.js";import{r as p}from"./index-3dRrDZpt.js";import{c as U,b as F,H as z,d as k,W as Y,i as K,z as v,e as Q,B,h as R,U as $,L as J}from"./menu-DvyBTqNz.js";import{c as N}from"./play-kit-Bu4SXy9H.js";import{T as V}from"./TableCore-Y75h2oha.js";import{T as X,g as Z,s as ee,c as oe}from"./TableToolbar-DTYEmPN-.js";import{c as te}from"./RowSelection-DM7ASqJ8.js";import{w as re,d as ae}from"./scene-kit-BsKxVgS1.js";import"./panel-controls-DNzRkyVB.js";import"./icons-849xEHsl.js";import"./styles-HzBmg0bt.js";import"./pin-controls-NGLUwJXC.js";import"./bulk-bar-DzOf8FOc.js";import"./status-bar-CYB7-jUm.js";import"./toolbar-C5VRlWnq.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./SortingPanel-CpobHppH.js";const le=`// A table put together from the pieces alone: a plain array, React state, no
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
	UtilityCell,
	UtilityHeader,
} from '../primitives'

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
							<UtilityHeader
								numbered
								anySelected={selected.size > 0}
								selectAll={
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
							<UtilityCell
								number={rowIndex + 1}
								selected={selected.has(row.id)}
								checkbox={
									<Checkbox
										label="Select row"
										checked={selected.has(row.id)}
										onChange={(on) => toggleRow(row.id, on)}
									/>
								}
							/>
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
`,ne=`// TableCore with pieces of your own: \`slots\` takes a component per piece. A
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
	columnsControl,
	createUtilityColumn,
	groupingControl,
	sortingControl,
	type TableCoreSlots,
	type TableCoreTable,
} from '..'
import {
	BodyRow,
	GroupSummary,
	HeaderCell,
	type CheckboxProps,
	type RowNumberLabelProps,
} from '../primitives'

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

const columns = [
	createUtilityColumn<Employee>(),
	{ id: 'name', accessorKey: 'name', header: 'Name', size: 190 },
	{ id: 'team', accessorKey: 'team', header: 'Team', size: 130 },
	{ id: 'role', accessorKey: 'role', header: 'Role', size: 160 },
]

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
	groupingControl<Employee>({ icon: <OwnGroupIcon /> }),
	sortingControl<Employee>(),
	columnsControl<Employee>(),
]

const toolbar = (table: TableCoreTable<Employee>) => (
	<TableToolbar table={table} controls={controls} />
)

export const OwnPiecesTable = () => (
	<div style={{ height: 380 }}>
		<TableCore<Employee>
			data={EMPLOYEES}
			columns={columns}
			getRowId={(employee) => employee.id}
			initialState={{ grouping: ['team'] }}
			slots={slots}
			toolbar={toolbar}
		/>
	</div>
)
`,se=[{id:"p1",name:"Ada Lovelace",team:"Dev",salary:12e4},{id:"p2",name:"Alan Turing",team:"QA",salary:14e4},{id:"p3",name:"Grace Hopper",team:"Dev",salary:1e5},{id:"p4",name:"Linus Torvalds",team:"Ops",salary:11e4}],h=[{id:"name",label:"Name",width:190},{id:"team",label:"Team",width:120},{id:"salary",label:"Salary",width:120,align:"right"}],T=48,f=48,b=T+h.reduce((e,o)=>e+o.width,0),ce=(e,o,a)=>a==="salary"?e.salary-o.salary:e[a].localeCompare(o[a]),ie=(e,o)=>o?[...e].sort((a,i)=>ce(a,i,o.id)*(o.desc?-1:1)):e,C=(e,o)=>(e==null?void 0:e.id)!==o?!1:e.desc?"desc":"asc",de=()=>{const[e,o]=p.useState(null),[a,i]=p.useState(new Set),s=p.useMemo(()=>ie(se,e),[e]),n=a.size===s.length,c=a.size>0&&!n,w=t=>o(l=>(l==null?void 0:l.id)===t&&!l.desc?{id:t,desc:!0}:{id:t,desc:!1}),M=(t,l)=>i(d=>{const u=new Set(d);return l?u.add(t):u.delete(t),u});return r.jsx(U,{height:"auto",width:b,children:r.jsxs(F,{role:"grid",rowCount:s.length+1,colCount:h.length+1,contentWidth:b,contentHeight:s.length*f,children:[r.jsxs(z,{width:b,children:[r.jsx(k,{columnId:"select",width:T,align:"center",children:r.jsx(Y,{children:r.jsx(K,{numbered:!0,anySelected:a.size>0,selectAll:r.jsx(v,{label:"Select all rows",checked:n,indeterminate:c,onChange:t=>i(new Set(t?s.map(l=>l.id):[]))})})})}),h.map((t,l)=>r.jsx(k,{columnId:t.id,width:t.width,align:t.align,lastColumn:l===h.length-1,sorted:C(e,t.id),children:r.jsx(Q,{sortable:!0,sort:{dir:C(e,t.id)},sortIcon:C(e,t.id)==="desc"?"▼":"▲",onClick:()=>w(t.id),children:t.label})},t.id))]}),s.map((t,l)=>r.jsxs(B,{rowId:t.id,selected:a.has(t.id),odd:l%2===1,top:l*f,height:f,width:b,children:[r.jsx(R,{rowId:t.id,columnId:"select",rowIndex:l,colIndex:0,width:T,align:"center",role:"gridcell",children:r.jsx($,{number:l+1,selected:a.has(t.id),checkbox:r.jsx(v,{label:"Select row",checked:a.has(t.id),onChange:d=>M(t.id,d)})})}),h.map((d,u)=>r.jsx(R,{rowId:t.id,columnId:d.id,rowIndex:l,colIndex:u+1,width:d.width,align:d.align,role:"gridcell",children:t[d.id]},d.id))]},t.id))]})})},me=[{id:"e1",name:"Ada Lovelace",team:"Dev",role:"Engineer"},{id:"e2",name:"Alan Turing",team:"QA",role:"Analyst"},{id:"e3",name:"Grace Hopper",team:"Dev",role:"Lead"},{id:"e4",name:"Linus Torvalds",team:"Ops",role:"Engineer"},{id:"e5",name:"Margaret Hamilton",team:"Dev",role:"Architect"},{id:"e6",name:"Dennis Ritchie",team:"Ops",role:"Engineer"}],D=p.forwardRef((e,o)=>r.jsx(k,{ref:o,...e,"data-own":"headerCell",sx:{background:"#EAF6FC",borderBottom:"2px solid #009ECC"}}));D.displayName="OwnHeaderCell";const G=p.forwardRef((e,o)=>r.jsx(B,{ref:o,...e,"data-own":"bodyRow",sx:{"&:hover":{background:"#FFF8E1"}}}));G.displayName="OwnBodyRow";const ue=e=>r.jsx(J,{...e,"data-own":"groupSummary",style:{fontWeight:700}}),he=(e,o)=>e?"☑":o?"▣":"☐",pe=({label:e,checked:o,indeterminate:a=!1,disabled:i,onChange:s,tabIndex:n})=>r.jsx("button",{type:"button","data-own":"checkbox",role:"checkbox","aria-label":e,"aria-checked":a&&!o?"mixed":o,disabled:i,tabIndex:n,onClick:()=>s(!o),children:he(o,a)}),we=({value:e})=>r.jsx("b",{"data-own":"rowNumber","data-row-number":!0,children:e}),be={headerCell:D,bodyRow:G,groupSummary:ue,checkbox:pe,rowNumber:we},ye=[te(),{id:"name",accessorKey:"name",header:"Name",size:190},{id:"team",accessorKey:"team",header:"Team",size:130},{id:"role",accessorKey:"role",header:"Role",size:160}],ge=()=>r.jsxs("svg",{"data-own-icon":"group",viewBox:"0 0 18 18",width:18,height:18,"aria-hidden":!0,children:[r.jsx("rect",{x:"2",y:"2",width:"6",height:"6",fill:"currentColor"}),r.jsx("rect",{x:"10",y:"10",width:"6",height:"6",fill:"currentColor"})]}),fe=[Z({icon:r.jsx(ge,{})}),ee(),oe()],Ce=e=>r.jsx(X,{table:e,controls:fe}),xe=()=>r.jsx("div",{style:{height:380},children:r.jsx(V,{data:me,columns:ye,getRowId:e=>e.id,initialState:{grouping:["team"]},slots:be,toolbar:Ce})}),W=Object.assign({"./assemble-table.tsx":le,"./replace-pieces.tsx":ne}),Se=W["./assemble-table.tsx"],ke=W["./replace-pieces.tsx"],Te=e=>e.replace("from '../primitives'","from '@pnl-simulation/table-core/primitives'").replace("from '..'","from '@pnl-simulation/table-core'"),q=e=>{const o=()=>Te(e);return{sceneCode:o,docs:{source:ae(o)}}},Qe={title:"Tables/Table Core/Primitives/Assemble",decorators:[re],parameters:_("Two ways to use the pieces: put a table together from them alone, on a plain array; or give TableCore pieces of your own through slots. The Code panel is the whole file the scene renders.")},ve=e=>new Set(Array.from(e.querySelectorAll("[data-own]")).map(o=>o.getAttribute("data-own"))),y={tags:["kb:primitives-assemble-yourself"],name:"Assemble yourself",parameters:q(Se),render:()=>r.jsx(de,{}),play:async e=>{if(N(e))return;const o=e.canvasElement;await L(o,"[role=columnheader]"),m(o.querySelectorAll("[role=columnheader]").length===4,"a header cell for the utility column and each of the three columns");const a=Array.from(o.querySelectorAll("[role=row][data-row-id]"));m(a.length===4,"a row for each person"),a.forEach(c=>j(c,"bodyRow"));const i=()=>Array.from(o.querySelectorAll('[data-column-id="name"]')).map(c=>c.textContent),s=Array.from(o.querySelectorAll("[data-header-label]")).find(c=>{var w;return(w=c.textContent)==null?void 0:w.includes("Salary")});await x.click(s),await S(()=>m(i()[0]==="Grace Hopper","a click on Salary sorts, lowest first"));const n=o.querySelector('[role=checkbox][aria-label="Select row"]');await x.click(n),await S(()=>{var c;return m(((c=o.querySelector('[aria-label="Select all rows"]'))==null?void 0:c.getAttribute("aria-checked"))==="mixed","one row ticked: select all is mixed")})}},g={tags:["kb:primitives-replace-a-piece"],name:"Replace a piece",parameters:q(ke),render:()=>r.jsx(xe,{}),play:async e=>{if(N(e))return;const o=e.canvasElement;await L(o,'[data-own="bodyRow"]');const a=ve(o);for(const n of["headerCell","bodyRow","groupSummary","checkbox","rowNumber"])m(a.has(n),`your own ${n} is drawn`);const i=["headerCell","bodyRow","checkbox","rowNumber"];for(const n of i)o.querySelectorAll(`[data-own="${n}"]`).forEach(c=>j(c,n));m(o.querySelector("[data-header-id]:not([data-own])")===null,"every header cell is yours"),m(o.querySelector('[data-control="group"] [data-own-icon="group"]')!==null,"the Group button has the icon of its own factory");const s=o.querySelector('[data-own="checkbox"][aria-label="Select row"]');await x.click(s),await S(()=>{var n;return m(s.getAttribute("aria-checked")==="true"||((n=o.querySelector('[data-own="checkbox"][aria-label="Select row"]'))==null?void 0:n.getAttribute("aria-checked"))==="true","your own checkbox selects the row")})}};var H,O,I;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(I=(O=y.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var E,A,P;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(A=g.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const $e=["AssembleYourself","ReplaceAPiece"];export{y as AssembleYourself,g as ReplaceAPiece,$e as __namedExportsOrder,Qe as default};
