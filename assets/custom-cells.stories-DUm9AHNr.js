import{O as T,l as r,u as S,P as U,V as te,h as b,cx as l,cz as ae,t as ne,ay as se,y as j,j as a,r as V,Y as re,a7 as oe,Z as le,dr as ce,c1 as ie,_ as de,c4 as ue,c5 as me,a0 as he,bB as pe,a1 as ge,ba as be,bb as ye,bc as we,bi as Ce,b4 as xe,b5 as fe,a6 as k,bj as Se,bf as Re,bg as Ee,C as Ae,S as ve,c as R,b as y,M as w,s as C,f as Te}from"./products-CTiDOXRn.js";const je=`import { useState } from 'react'

import {
	RowActionsButton,
	TableCore,
	TableStatusBar,
	TableToolbar,
	cellSelectionFeature,
	cellKeyboardFeature,
	columnGroupingFeature,
	columnSizingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	defaultColumnMenu,
	groupRowsFeature,
	groupingControl,
	metaHelper,
	rowExpandingFeature,
	rowSortingFeature,
	sortingControl,
	tableFeatures,
	type CellContext,
	type CoreColumnMeta,
	type SortingColumnMeta,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { Employee } from '../../data/employees'
import { sceneSortFns } from '../../kit/sort-fns'

import {
	DateCell,
	LevelCell,
	LoadCell,
	PeriodCell,
	PersonView,
	RateCell,
	STATUS,
	StatusCell,
	TeamCell,
	loadOf,
	type ActionsMeta,
} from './cells'

// A column's \`cell\` is an ordinary React component: it gets the value, the
// row and the table, and draws what the screen needs. Sorting and grouping use
// the column's value (\`accessorKey\` / \`accessorFn\`); the cell only draws it.
// The table's \`meta\` carries the screen's actions for the ⋮ inside a cell.
const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	rowSortingFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	columnSizingFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
	tableMeta: metaHelper<ActionsMeta>(),
	columnMeta: metaHelper<CoreColumnMeta & SortingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Employee>()

const toolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar
		table={table}
		controls={[groupingControl(), sortingControl()]}
	/>
)
const statusBarRegion: TableCoreUiProps['statusBar'] = (table) => (
	<TableStatusBar table={table} />
)

/** The Person cell: the screen's actions (the table's \`meta\`) in a ⋮ at the end, on row hover. */
const PersonCell = ({
	row,
	table,
}: CellContext<typeof features, Employee, string>) => {
	const getActions = table.options.meta?.getActions

	return (
		<PersonView employee={row.original}>
			{getActions && (
				<RowActionsButton
					row={row}
					getActions={() => getActions(row.original)}
					reveal="hover"
				/>
			)}
		</PersonView>
	)
}

type Props = {
	rows: Employee[]
	/** Columns that draw a cell of their own; the others show the plain value. */
	personCell?: boolean
	teamCell?: boolean
	levelCell?: boolean
	statusCell?: boolean
	rateCell?: boolean
	loadCell?: boolean
	startCell?: boolean
	periodCell?: boolean
	/** The ⋮ inside the Person cell, on row hover, instead of a column. */
	actionsInCell?: boolean
}

type SetRows = React.Dispatch<React.SetStateAction<Employee[]>>

/** The screen's actions for a row: Exclude and Include change the Status badge. */
const actionsOf = (setRows: SetRows) => (employee: Employee) =>
	[
		{
			id: 'exclude',
			label: 'Exclude',
			onClick: () =>
				setRows((old) =>
					old.map((e) =>
						e.id === employee.id ? { ...e, state: 'excluded' as const } : e
					)
				),
		},
		{
			id: 'include',
			label: 'Include',
			onClick: () =>
				setRows((old) =>
					old.map((e) =>
						e.id === employee.id ? { ...e, state: 'ok' as const } : e
					)
				),
		},
	].filter(
		(action) =>
			!(action.id === 'exclude' && employee.state === 'excluded') &&
			!(action.id === 'include' && employee.state === 'ok')
	)

export const CustomCellsTable = ({
	rows: initialRows,
	personCell = true,
	teamCell = true,
	levelCell = true,
	statusCell = true,
	rateCell = true,
	loadCell = true,
	startCell = true,
	periodCell = true,
	actionsInCell = false,
}: Props) => {
	const [rows, setRows] = useState(initialRows)
	const columns = helper.columns([
		helper.accessor('name', {
			id: 'person',
			header: 'Person',
			size: 170,
			...(personCell && { cell: PersonCell }),
		}),
		helper.accessor('team', {
			header: 'Team',
			size: 100,
			...(teamCell && { cell: TeamCell }),
		}),
		helper.accessor('level', {
			header: 'Level',
			size: 90,
			...(levelCell && { cell: LevelCell }),
		}),
		// Sorting and grouping use the label, the cell draws the badge.
		helper.accessor((employee) => STATUS[employee.state], {
			id: 'status',
			header: 'Status',
			size: 100,
			...(statusCell && { cell: StatusCell }),
		}),
		helper.accessor('pay', {
			id: 'rate',
			header: 'Rate',
			size: 90,
			meta: { align: 'right' },
			...(rateCell && { cell: RateCell }),
		}),
		helper.accessor(loadOf, {
			id: 'load',
			header: 'Load',
			size: 110,
			...(loadCell && { cell: LoadCell }),
		}),
		helper.accessor('start', {
			header: 'Start',
			size: 100,
			...(startCell && { cell: DateCell }),
		}),
		// Sorts and groups by the text "start – end"; the cell draws it.
		helper.accessor((employee) => \`\${employee.start} – \${employee.end}\`, {
			id: 'period',
			header: 'Period',
			size: 140,
			...(periodCell && { cell: PeriodCell }),
		}),
	])

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(employee) => employee.id}
			meta={{ getActions: actionsInCell ? actionsOf(setRows) : undefined }}
			rowHeight={personCell ? 56 : 48}
			autoResetExpanded={false}
			initialState={{ expanded: true }}
			columnMenu={defaultColumnMenu()}
			toolbar={toolbarRegion}
			statusBar={statusBarRegion}
		/>
	)
}
`,Y=(e,t,n)=>e.querySelector(`[data-row-index="${t}"][data-column-id="${n}"]`),ke=async e=>{await ne(e),r(/^\$\d+\/h$/.test(l(e,0,"rate")),`money, ${l(e,0,"rate")}`),r(/^\d{1,2} \w{3} \d{4}$/.test(l(e,0,"start")),`short date, ${l(e,0,"start")}`),await se(e,"Rate","Sort ascending"),await U(()=>{const t=[0,1,2,3].map(n=>Number(l(e,n,"rate").replace(/\D/g,"")));r(t.every((n,s)=>!s||t[s-1]<=n),`numeric order, got ${t}`)})},Fe=async e=>{var n;await T(e);const t=Y(e,0,"person");r(t.querySelector("[data-person]"),"the person cell"),r((n=t.textContent)==null?void 0:n.includes("@example.com"),"the email is shown"),await S.click(t),await S.keyboard("{ArrowDown}"),await b(()=>{var s;return((s=e.querySelector('[data-selection="active"]'))==null?void 0:s.getAttribute("data-row-index"))==="1"},"the arrows move across custom cells")},Me=async e=>{const t=await T(e);r(t.querySelector("[data-badge]"),"a badge"),r(t.querySelector("[data-load]"),"a load bar"),await ae(e,"status","Status"),await b(()=>e.querySelector('[data-lane-id="status"]'),"grouped by the label")},Pe=async e=>{var n;await T(e),r(!e.querySelector('[data-column-id="row-actions"]'),"no actions column");const t=(n=Y(e,0,"person"))==null?void 0:n.querySelector('[data-row-actions][data-reveal="hover"]');r(t,"the ⋮ is in the cell, shown on hover"),await S.click(t),await S.click(await U(()=>te().getByRole("menuitem",{name:"Exclude"}))),await b(()=>l(e,0,"status")==="Excluded","the badge changed")},Be=async e=>{const t=e.canvasElement;await j(e,{rateCell:!1,startCell:!1}),await b(()=>/^\d+(\.\d+)?$/.test(l(t,0,"rate")),"rateCell off: the plain number"),r(!/\$/.test(l(t,0,"rate")),"rateCell off: no money"),await j(e,{rateCell:!0,startCell:!0}),await b(()=>/^\$\d+\/h$/.test(l(t,0,"rate")),"rateCell on: money again")},Le={ok:"Included",blocked:"Blocked",excluded:"Excluded"},_e={Included:{bg:"#E6F4EA",fg:"#1E7B34"},Blocked:{bg:"#FDECEC",fg:"#B42318"},Excluded:{bg:"#EBEDF5",fg:"#4A4E5E"}},Ie=({employee:e,children:t})=>{const n=e.name.split(" ").map(s=>s[0]).join("");return a.jsxs("div",{"data-person":!0,style:{display:"flex",alignItems:"center",gap:10,minWidth:0},children:[a.jsx("span",{"aria-hidden":!0,style:{flexShrink:0,width:28,height:28,borderRadius:"50%",background:"#EAF6FC",color:"#008ACE",fontSize:11,fontWeight:700,display:"grid",placeItems:"center"},children:n}),a.jsxs("span",{style:{minWidth:0,flex:1,lineHeight:1.25},children:[a.jsx("span",{style:{display:"block"},children:e.name}),a.jsx("span",{style:{display:"block",fontSize:12,color:"#8A8FA3",overflow:"hidden",textOverflow:"ellipsis"},children:e.email})]}),t]})},ze=({getValue:e})=>{const t=String(e()),n=_e[t];return a.jsx("span",{"data-badge":t,style:{padding:"2px 8px",borderRadius:10,fontSize:12,fontWeight:600,background:n.bg,color:n.fg},children:t})},De={hour:"h",month:"mo",year:"yr"},Ge=({getValue:e,row:t})=>{const n=new Intl.NumberFormat("en-US",{style:"currency",currency:t.original.currency,maximumFractionDigits:0});return a.jsxs("span",{"data-money":!0,children:[n.format(Number(e())),"/",De[t.original.per]]})},Oe=({getValue:e})=>{const t=Number(e());return a.jsxs("div",{"data-load":t,title:`${t}%`,style:{display:"flex",alignItems:"center",gap:8,width:"100%"},children:[a.jsx("div",{style:{flex:1,height:6,borderRadius:3,background:"#EBEDF5",overflow:"hidden"},children:a.jsx("div",{style:{width:`${Math.min(t,100)}%`,height:"100%",background:t>90?"#E5484D":"#008ACE"}})}),a.jsxs("span",{style:{width:36,textAlign:"right",fontSize:12},children:[t,"%"]})]})},v=new Intl.DateTimeFormat("en-GB",{day:"numeric",month:"short",year:"numeric"}),$e=({getValue:e})=>a.jsx("span",{"data-date":!0,children:v.format(new Date(String(e())))}),He=(e,t)=>{const[n,s]=e.split("-").map(Number),[E,A]=t.split("-").map(Number);return Math.max(1,(E-n)*12+(A-s))},We=({row:e})=>{const{start:t,end:n}=e.original,s=He(t,n);return a.jsxs("div",{"data-period":s,style:{display:"grid",gap:3,width:"100%",lineHeight:1.2},children:[a.jsxs("span",{style:{fontSize:12},children:[v.format(new Date(t))," – ",v.format(new Date(n))]}),a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx("span",{style:{flex:1,height:4,borderRadius:2,background:"#EBEDF5",overflow:"hidden"},children:a.jsx("span",{style:{display:"block",width:`${Math.min(100,s/24*100)}%`,height:"100%",background:"#6E56CF"}})}),a.jsxs("span",{style:{fontSize:11,color:"#8A8FA3"},children:[s," mo"]})]})]})},qe={B1:1,B2:2,B3:3,C1:4},Ue=({getValue:e})=>{const t=String(e()),n=qe[t]??0;return a.jsxs("span",{"data-level":t,style:{display:"inline-flex",alignItems:"center",gap:6},children:[a.jsx("b",{style:{fontSize:12},children:t}),a.jsx("span",{"aria-hidden":!0,style:{display:"inline-flex",gap:2},children:[1,2,3,4].map(s=>a.jsx("span",{style:{width:4,height:10,borderRadius:1,background:s<=n?"#008ACE":"#DDE1EA"}},s))})]})},Ve={Platform:"#6E56CF",Payments:"#0B8A6B",Mobile:"#D9480F",Data:"#1C7ED6"},Ye=({getValue:e})=>{const t=String(e()),n=Ve[t]??"#6C6F80";return a.jsxs("span",{"data-team":t,style:{display:"inline-flex",alignItems:"center",gap:6},children:[a.jsx("span",{"aria-hidden":!0,style:{width:18,height:18,borderRadius:4,background:n,color:"#fff",fontSize:11,fontWeight:700,display:"grid",placeItems:"center"},children:t.slice(0,1)}),a.jsx("span",{style:{color:n},children:t})]})},Ne=e=>e.rate*7%101,Ke=he({cellSelectionFeature:fe,cellKeyboardFeature:xe,rowSortingFeature:Ce,columnGroupingFeature:we,rowExpandingFeature:ye,groupRowsFeature:be,columnSizingFeature:ge,groupedRowModel:Ee(),expandedRowModel:Re(),sortedRowModel:Se(),sortFns:pe,tableMeta:k(),columnMeta:k()}),o=le(),Ze=e=>a.jsx(de,{table:e,controls:[ue(),me()]}),Je=e=>a.jsx(ie,{table:e}),Qe=({row:e,table:t})=>{var s;const n=(s=t.options.meta)==null?void 0:s.getActions;return a.jsx(Ie,{employee:e.original,children:n&&a.jsx(ce,{row:e,getActions:()=>n(e.original),reveal:"hover"})})},Xe=e=>t=>[{id:"exclude",label:"Exclude",onClick:()=>e(n=>n.map(s=>s.id===t.id?{...s,state:"excluded"}:s))},{id:"include",label:"Include",onClick:()=>e(n=>n.map(s=>s.id===t.id?{...s,state:"ok"}:s))}].filter(n=>!(n.id==="exclude"&&t.state==="excluded")&&!(n.id==="include"&&t.state==="ok")),et=({rows:e,personCell:t=!0,teamCell:n=!0,levelCell:s=!0,statusCell:E=!0,rateCell:A=!0,loadCell:N=!0,startCell:K=!0,periodCell:Z=!0,actionsInCell:J=!1})=>{const[Q,X]=V.useState(e),ee=o.columns([o.accessor("name",{id:"person",header:"Person",size:170,...t&&{cell:Qe}}),o.accessor("team",{header:"Team",size:100,...n&&{cell:Ye}}),o.accessor("level",{header:"Level",size:90,...s&&{cell:Ue}}),o.accessor(c=>Le[c.state],{id:"status",header:"Status",size:100,...E&&{cell:ze}}),o.accessor("pay",{id:"rate",header:"Rate",size:90,meta:{align:"right"},...A&&{cell:Ge}}),o.accessor(Ne,{id:"load",header:"Load",size:110,...N&&{cell:Oe}}),o.accessor("start",{header:"Start",size:100,...K&&{cell:$e}}),o.accessor(c=>`${c.start} – ${c.end}`,{id:"period",header:"Period",size:140,...Z&&{cell:We}})]);return a.jsx(re,{features:Ke,data:Q,columns:ee,getRowId:c=>c.id,meta:{getActions:J?Xe(X):void 0},rowHeight:t?56:48,autoResetExpanded:!1,initialState:{expanded:!0},columnMenu:oe(),toolbar:Ze,statusBar:Je})},tt=10,x=({hint:e,...t})=>{const n=V.useMemo(()=>Ae(tt),[]);return a.jsx(ve,{hint:e,children:a.jsx(et,{rows:n,...t})})},i={personCell:!0,teamCell:!0,levelCell:!0,statusCell:!0,rateCell:!0,loadCell:!0,startCell:!0,periodCell:!0,actionsInCell:!1},f=Object.fromEntries(Object.keys(i).map(e=>[e,{control:{type:"boolean"}}])),[d]=Object.values([je]),at={title:"Tables/Table Core/Features/Drafts/Custom cells",id:"tables-table-core-features-custom-cells",...Te(d)},u={tags:["kb:cells-formatting"],name:"1 · Formatted values",parameters:{...C(d,"Formatting"),summary:"Money and dates are drawn by the cell; sorting uses the value."},args:i,argTypes:f,render:e=>a.jsx(y,{args:e,children:a.jsx(x,{...e,hint:a.jsx(w,{text:"**Rate** shows money, **Start** a short date. Sort by Rate: the order follows the numbers, not the text."})})}),play:async e=>{R(e)||(await ke(e.canvasElement),await Be(e))}},m={tags:["kb:cells-rich"],name:"2 · A rich cell",parameters:{...C(d,"Rich"),summary:"A person with initials and an email is still a normal cell."},args:i,argTypes:f,render:e=>a.jsx(y,{args:e,children:a.jsx(x,{...e,hint:a.jsx(w,{text:"**Person** draws initials, the name and the email; the rows are taller (`rowHeight` 56). Click it and move with the arrows: it is a normal cell."})})}),play:async e=>{R(e)||await Fe(e.canvasElement)}},h={tags:["kb:cells-badges"],name:"3 · Badges and bars",parameters:{...C(d,"Badges"),summary:"A badge and a bar; grouping uses the label."},args:i,argTypes:f,render:e=>a.jsx(y,{args:e,children:a.jsx(x,{...e,hint:a.jsx(w,{text:"**Status** is a coloured badge, **Load** a bar (red over 90%). Group by Status: the groups are the labels (Included, Blocked, Excluded)."})})}),play:async e=>{R(e)||await Me(e.canvasElement)}},p={tags:["kb:cells-actions-in-cell"],name:"4 · Row actions inside a cell",parameters:{...C(d,"ActionsInCell"),summary:"`RowActionsButton` in any cell, shown on row hover."},args:{...i,actionsInCell:!0},argTypes:f,render:e=>a.jsx(y,{args:e,children:a.jsx(x,{...e,hint:a.jsx(w,{text:"Hover a row: ⋮ appears in the **Person** cell — no actions column. Pick **Exclude**: the Status badge changes. The same button can go anywhere, even outside the table."})})}),play:async e=>{R(e)||await Pe(e.canvasElement)}},g={tags:["kb:cells-playground"],name:"Playground",parameters:C(d,"Playground"),args:{...i,actionsInCell:!0},argTypes:f,render:e=>a.jsx(y,{args:e,children:a.jsx(x,{...e,hint:a.jsx(w,{text:"Everything together: tick custom cells on and off, ⋮ in the Person cell."})})})};var F,M,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['kb:cells-formatting'],
  name: '1 · Formatted values',
  parameters: {
    ...sceneCodeWith(source, 'Formatting'),
    summary: 'Money and dates are drawn by the cell; sorting uses the value.'
  },
  args: CELL_ARGS,
  argTypes: CELL_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="**Rate** shows money, **Start** a short date. Sort by Rate: the order follows the numbers, not the text." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await formattingAct(ctx.canvasElement);
    await cellControlsAct(ctx);
  }
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var B,L,_;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['kb:cells-rich'],
  name: '2 · A rich cell',
  parameters: {
    ...sceneCodeWith(source, 'Rich'),
    summary: 'A person with initials and an email is still a normal cell.'
  },
  args: CELL_ARGS,
  argTypes: CELL_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="**Person** draws initials, the name and the email; the rows are taller (\`rowHeight\` 56). Click it and move with the arrows: it is a normal cell." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await richAct(ctx.canvasElement);
  }
}`,...(_=(L=m.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var I,z,D;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['kb:cells-badges'],
  name: '3 · Badges and bars',
  parameters: {
    ...sceneCodeWith(source, 'Badges'),
    summary: 'A badge and a bar; grouping uses the label.'
  },
  args: CELL_ARGS,
  argTypes: CELL_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="**Status** is a coloured badge, **Load** a bar (red over 90%). Group by Status: the groups are the labels (Included, Blocked, Excluded)." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await badgesAct(ctx.canvasElement);
  }
}`,...(D=(z=h.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var G,O,$;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['kb:cells-actions-in-cell'],
  name: '4 · Row actions inside a cell',
  parameters: {
    ...sceneCodeWith(source, 'ActionsInCell'),
    summary: '\`RowActionsButton\` in any cell, shown on row hover.'
  },
  args: {
    ...CELL_ARGS,
    actionsInCell: true
  },
  argTypes: CELL_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Hover a row: ⋮ appears in the **Person** cell — no actions column. Pick **Exclude**: the Status badge changes. The same button can go anywhere, even outside the table." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await actionsAct(ctx.canvasElement);
  }
}`,...($=(O=p.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var H,W,q;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['kb:cells-playground'],
  name: 'Playground',
  parameters: sceneCodeWith(source, 'Playground'),
  args: {
    ...CELL_ARGS,
    actionsInCell: true
  },
  argTypes: CELL_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Everything together: tick custom cells on and off, ⋮ in the Person cell." />} />
        </Remount>
}`,...(q=(W=g.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const nt=["Formatting","Rich","Badges","ActionsInCell","Playground"],rt=Object.freeze(Object.defineProperty({__proto__:null,ActionsInCell:p,Badges:h,Formatting:u,Playground:g,Rich:m,__namedExportsOrder:nt,default:at},Symbol.toStringTag,{value:"Module"}));export{rt as S};
